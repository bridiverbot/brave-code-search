#!/usr/bin/env vpython3
# Copyright (c) 2026 The Brave Authors. All rights reserved.
# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this file,
# You can obtain one at https://mozilla.org/MPL/2.0/.

"""Integration tests for the source snapshot exporter."""

import contextlib
import io
import json
from pathlib import Path
import subprocess
import tempfile
import unittest
from unittest import mock

import build_and_export as exporter


@contextlib.contextmanager
def temporary_directory():
    with tempfile.TemporaryDirectory() as directory:
        yield Path(directory)


class ExportTest(unittest.TestCase):
    def setUp(self):
        self.root = self.enterContext(temporary_directory())
        self.src = self.root / 'src'
        self.src.mkdir()
        self.init_repo(self.src)
        self.write('patched.cc', b'upstream\n')
        self.write('removed.cc', b'removed upstream file\n')
        self.write('.gitignore', b'/brave/\n/third_party/\n/out/\n.env\n')
        self.write('.gitattributes', b'*.cc filter=must_not_run\n')
        self.git(self.src, 'add', '.')
        self.git(
            self.src,
            '-c',
            'user.name=Test',
            '-c',
            'user.email=test@localhost',
            'commit',
            '-qm',
            'Upstream',
        )
        self.write('patched.cc', b'patched by Brave\r\n')
        (self.src / 'removed.cc').unlink()
        self.write('new.h', b'new source\n')
        self.write('.env', b'private local configuration\n')
        self.write('picture.png', b'\x89PNG\0\xff')
        self.write('late-binary.dat', b' ' * 8192 + b'\0')
        self.write('brave/brave.cc', b'Brave source\n')
        self.init_repo(self.src / 'brave')
        self.git(self.src / 'brave', 'add', '.')
        self.git(
            self.src / 'brave',
            '-c',
            'user.name=Test',
            '-c',
            'user.email=test@localhost',
            'commit',
            '-qm',
            'Brave',
        )
        self.write('third_party/nested/dependency.h', b'nested dependency\n')
        self.init_repo(self.src / 'third_party/nested')
        self.git(self.src / 'third_party/nested', 'add', '.')
        self.git(
            self.src / 'third_party/nested',
            '-c',
            'user.name=Test',
            '-c',
            'user.email=test@localhost',
            'commit',
            '-qm',
            'Dependency',
        )
        self.write('third_party/nested/untracked.h', b'patch-added header\n')
        (self.src / 'link.h').symlink_to('new.h')
        self.write('spaced \u03bb\nname.cc', b'unusual filename\n')
        self.git(
            self.src,
            'add',
            'picture.png',
            'late-binary.dat',
            'link.h',
            'spaced \u03bb\nname.cc',
        )
        self.write('brave/local.txt', b'untracked Brave file\n')
        self.graphs = {}
        self.gn_reader = self.enterContext(
            mock.patch.object(
                exporter,
                'read_gn_graph',
                side_effect=lambda src, output: self.graphs[output.name],
            )
        )
        self.sync, self.builds = exporter.build_commands(
            [('linux', 'x64'), ('win', 'x64')], []
        )
        for os_name, _, directory, _ in self.builds:
            self.write(
                'out/' + directory + '/args.gn',
                ('target_os = "' + os_name + '"\n').encode(),
            )
            self.write(
                'out/' + directory + '/gen/header.h',
                (os_name + ' generated header\n').encode(),
            )
            self.write('out/' + directory + '/obj/binary.o', b'\x7fELF\0')
            base = '//out/' + directory + '/'
            self.graphs[directory] = {
                '//brave:all': {
                    'deps': ['//brave:generated', '//brave:objects'],
                    'inputs': [
                        '//patched.cc',
                        '//removed.cc',
                        '//new.h',
                        '//.env',
                        '//brave/brave.cc',
                        '//brave/local.txt',
                        '//third_party/nested/dependency.h',
                        '//third_party/nested/untracked.h',
                        '//picture.png',
                        '//late-binary.dat',
                        '//link.h',
                        '//spaced \u03bb\nname.cc',
                    ],
                },
                '//brave:generated': {
                    'type': 'action',
                    'inputs': [base + 'args.gn'],
                    'outputs': [base + 'gen/header.h'],
                },
                '//brave:objects': {
                    'type': 'source_set',
                    'outputs': [base + 'obj/binary.o'],
                },
                '//unrelated:unused': {'outputs': [base + 'gen/stray.h']},
            }
        self.write('.gn', b'buildconfig = "//build/config/BUILDCONFIG.gn"\n')
        self.write('BUILD.gn', b'Chromium build definition\n')
        for _, _, directory, _ in self.builds:
            self.write(
                'out/' + directory + '/build.ninja.d',
                b'build.ninja.stamp: ../../.gn ../../BUILD.gn\n',
            )
        self.snapshot = self.root / 'snapshot.git'

    def git(self, repo, *args):
        return subprocess.check_output(
            ['git', '-C', str(repo), *args], stderr=subprocess.DEVNULL
        )

    def init_repo(self, repo):
        self.git(repo, 'init', '-q', '--initial-branch=main')

    def write(self, relative, content):
        path = self.src / relative
        path.parent.mkdir(parents=True, exist_ok=True)
        path.write_bytes(content)

    def export(self, push=False, destination='unused', ios_graphs=()):
        with contextlib.redirect_stdout(io.StringIO()):
            return exporter.export_snapshot(
                self.src,
                self.snapshot,
                destination,
                'main',
                self.builds,
                push,
                512,
                ios_graphs,
            )

    def test_patched_nested_generated_text_and_raw_bytes(self):
        result = self.export()
        self.assertEqual(
            self.git(self.snapshot, 'show', 'main:src/patched.cc'),
            b'patched by Brave\r\n',
        )
        self.assertEqual(
            self.git(self.snapshot, 'show', 'main:src/brave/brave.cc'),
            b'Brave source\n',
        )
        self.assertEqual(
            self.git(
                self.snapshot,
                'show',
                'main:src/third_party/nested/dependency.h',
            ),
            b'nested dependency\n',
        )
        self.assertEqual(
            self.git(self.snapshot, 'show', 'main:src/spaced \u03bb\nname.cc'),
            b'unusual filename\n',
        )
        self.assertEqual(
            self.git(self.snapshot, 'show', 'main:src/link.h'), b'new.h'
        )
        paths = self.git(
            self.snapshot, 'ls-tree', '-rz', '--name-only', 'main'
        ).split(b'\0')
        self.assertNotIn(b'src/removed.cc', paths)
        self.assertIn(b'src/.env', paths)
        self.assertIn(b'src/new.h', paths)
        self.assertIn(b'src/brave/local.txt', paths)
        self.assertIn(b'src/third_party/nested/untracked.h', paths)
        self.assertIn(b'src/picture.png', paths)
        self.assertIn(b'src/late-binary.dat', paths)
        self.assertFalse(any(b'/.git/' in p for p in paths))
        for os_name, _, directory, _ in self.builds:
            self.assertEqual(
                self.git(
                    self.snapshot,
                    'show',
                    'main:src/out/' + directory + '/gen/header.h',
                ),
                (os_name + ' generated header\n').encode(),
            )
        manifest = json.loads(
            self.git(self.snapshot, 'show', 'main:code-search-manifest.json')
        )
        self.assertTrue(manifest['complete'])
        self.assertEqual(result['files']['generated'], 4)
        self.assertIn('third_party/nested', result['source_revisions'])

    def test_tracked_brave_core_files_outside_graph(self):
        self.write('brave/chromium_src/override.cc', b'Brave override\n')
        self.write('brave/rewrite/example.yaml', b'original: value\n')
        self.write('brave/prebuilt.exe', b'compiled Brave fixture')
        self.write('brave/unselected-local.txt', b'not tracked\n')
        self.git(
            self.src / 'brave',
            'add',
            'chromium_src/override.cc',
            'rewrite/example.yaml',
            'prebuilt.exe',
        )
        self.write('brave/rewrite/example.yaml', b'current: value\n')
        self.write(
            'third_party/nested/tracked-extra.h',
            b'unselected other repository\n',
        )
        self.git(
            self.src / 'third_party/nested',
            'add',
            'tracked-extra.h',
        )
        result = self.export()
        paths = self.git(
            self.snapshot, 'ls-tree', '-rz', '--name-only', 'main'
        ).split(b'\0')
        self.assertIn(b'src/brave/chromium_src/override.cc', paths)
        self.assertIn(b'src/brave/rewrite/example.yaml', paths)
        self.assertIn(b'src/brave/prebuilt.exe', paths)
        self.assertNotIn(b'src/brave/unselected-local.txt', paths)
        self.assertNotIn(b'src/third_party/nested/tracked-extra.h', paths)
        self.assertEqual(
            self.git(
                self.snapshot,
                'show',
                'main:src/brave/rewrite/example.yaml',
            ),
            b'current: value\n',
        )
        self.assertEqual(result['brave_core_tracked_files'], 4)

    def test_gn_build_config_files_from_each_platform(self):
        self.write(
            'config/shared config.gni',
            b'shared Chromium GN config\n',
        )
        for system, _, directory, _ in self.builds:
            self.write(
                'config/' + system + '.gni',
                (system + ' Chromium GN config\n').encode(),
            )
            self.write(
                'out/' + directory + '/gen/generated.gni',
                (system + ' generated GN config\n').encode(),
            )
            self.write(
                'out/' + directory + '/build.ninja.d',
                (
                    'build.ninja.stamp: ../../.gn ../../BUILD.gn '
                    '../../config/shared\ config.gni '
                    '../../config/' + system + '.gni '
                    'gen/generated.gni\n'
                ).encode(),
            )
        result = self.export()
        paths = self.git(
            self.snapshot, 'ls-tree', '-rz', '--name-only', 'main'
        ).split(b'\0')
        self.assertIn(b'src/.gn', paths)
        self.assertIn(b'src/BUILD.gn', paths)
        self.assertIn(b'src/config/shared config.gni', paths)
        for system, _, directory, _ in self.builds:
            self.assertIn(('src/config/' + system + '.gni').encode(), paths)
            self.assertIn(
                ('src/out/' + directory + '/gen/generated.gni').encode(),
                paths,
            )
        self.assertEqual(result['gn_build_config_files'], 7)

    def test_gn_graph_scope_and_executable_code_exclusion(self):
        self.write('tracked.log', b'tracked source fixture\n')
        self.git(self.src, 'add', 'tracked.log')
        self.write('unrelated.cc', b'tracked but unrelated to brave:all\n')
        self.write(
            'unrelated-untracked.h', b'untracked and outside the GN graph\n'
        )
        self.git(self.src, 'add', 'unrelated.cc')
        _, _, directory, _ = self.builds[0]
        prefix = 'out/' + directory + '/'
        target = self.graphs[directory]['//brave:generated']
        target['inputs'].append('//tracked.log')
        self.graphs[directory]['//unrelated:unused']['inputs'] = [
            '//unrelated.cc'
        ]
        included = (
            'gen/declared.log',
            'gen/declared.ninja',
            'libmetadata.so.TOC',
            'manifest.json',
            'mz.txt',
        )
        for name in included:
            self.write(prefix + name, b'MZ plain source text\n')
            target['outputs'].append('//' + prefix + name)
        self.write(prefix + 'gen/settings.json', b'{"generated": true}\n')
        target['inputs'].append('//' + prefix + 'gen/settings.json')
        self.write(prefix + 'gen/picture.png', b'\x89PNG\0\xff')
        target['outputs'].append('//' + prefix + 'gen/picture.png')
        compiled = {
            'tool': b'\x7fELF\0',
            'pe-tool': b'MZ'
            + b'\0' * 58
            + (64).to_bytes(4, 'little')
            + b'PE\0\0',
            'program.exe': b'compiled program',
            'library.lib': b'compiled library',
            'libcode.so.1': b'compiled library',
            'code.pdb': b'debug symbols',
            'BravePublicTest.apk.mapping': b'Android R8 symbol map',
            'module.wasm': b'\0asm\0',
            'module.aar': b'compiled Android library',
            'module.code_cache': b'compiled V8 bytecode',
            'bitcode': b'BC\xc0\xde',
            'modules': b'\xda\xda\xfe\xca' + b'\0' * 12,
            'java-module': b'JM\x01\x00' + b'PK',
        }
        for name, content in compiled.items():
            self.write(prefix + name, content)
            target['outputs'].append('//' + prefix + name)
        self.write(prefix + 'gen/stray.h', b'unrelated target output\n')
        self.write(prefix + 'notes.txt', b'untracked local notes\n')
        self.write(prefix + 'siso_trace.json', b'unrelated diagnostics\n')
        self.write(prefix + 'toolchain.ninja', b'unrelated Ninja metadata\n')
        result = self.export()
        paths = self.git(
            self.snapshot, 'ls-tree', '-rz', '--name-only', 'main'
        ).split(b'\0')
        self.assertIn(b'src/tracked.log', paths)
        self.assertNotIn(b'src/unrelated.cc', paths)
        self.assertNotIn(b'src/unrelated-untracked.h', paths)
        for name in (
            *included,
            'gen/header.h',
            'gen/settings.json',
            'gen/picture.png',
        ):
            self.assertIn(('src/' + prefix + name).encode(), paths)
        for name in (
            *compiled,
            'gen/stray.h',
            'notes.txt',
            'siso_trace.json',
            'toolchain.ninja',
        ):
            self.assertNotIn(('src/' + prefix + name).encode(), paths)
        self.assertEqual(
            self.git(
                self.snapshot, 'show', 'main:src/' + prefix + 'gen/picture.png'
            ),
            b'\x89PNG\0\xff',
        )
        self.assertEqual(self.gn_reader.call_count, len(self.builds))
        self.assertIn(
            'compiled executable code',
            {item['reason'] for item in result['excluded']},
        )

    def test_rereads_each_platform_gn_graph_on_every_export(self):
        self.export()
        for system, _, directory, _ in self.builds:
            name = 'gen/' + system + '_later.h'
            prefix = 'out/' + directory + '/'
            self.write(prefix + name, (system + ' new header\n').encode())
            self.write(
                system + '_input.cc', (system + ' source input\n').encode()
            )
            self.graphs[directory]['//brave:all']['inputs'].append(
                '//' + system + '_input.cc'
            )
            self.graphs[directory]['//brave:generated']['outputs'].append(
                '//' + prefix + name
            )
        self.export()
        self.assertEqual(self.gn_reader.call_count, 2 * len(self.builds))
        for system, _, directory, _ in self.builds:
            self.assertEqual(
                self.git(
                    self.snapshot, 'show', 'main:src/' + system + '_input.cc'
                ),
                (system + ' source input\n').encode(),
            )
            self.assertEqual(
                self.git(
                    self.snapshot,
                    'show',
                    'main:src/out/' + directory + '/gen/' + system + '_later.h',
                ),
                (system + ' new header\n').encode(),
            )
        paths = self.git(
            self.snapshot, 'ls-tree', '-rz', '--name-only', 'main'
        ).split(b'\0')
        self.assertNotIn(
            ('src/out/' + self.builds[0][2] + '/gen/win_later.h').encode(),
            paths,
        )

    def test_directory_input_cannot_include_other_platform_output(self):
        _, _, directory, _ = self.builds[0]
        output = self.src / 'out' / directory
        self.graphs[directory]['//brave:all']['data'] = ['//']
        paths = set(exporter.graph_files(self.src, output))
        self.assertIn(self.src / 'patched.cc', paths)
        self.assertIn(output / 'gen/header.h', paths)
        other = self.src / 'out' / self.builds[1][2]
        self.assertFalse(any(other in path.parents for path in paths))

    def test_ios_sources_only_with_shared_inputs_and_existing_outputs(self):
        graphs = exporter.ios_graph_commands(Path('/real/Xcode.app'), [])
        for _, _, directory, command in graphs:
            self.assertIn('--target_os=ios', command)
            self.assertIn('tools/code_search/generate_graph.js', command)
            self.assertNotIn('--target=brave:all', command)
            prefix = 'out/' + directory + '/'
            self.write(prefix + 'args.gn', b'target_os = "ios"\n')
            self.write(prefix + 'build.ninja', b'GN graph\n')
            self.write(
                prefix + 'build.ninja.d',
                b'build.ninja.stamp: ../../ios/BUILD.gn gen/ios.gni\n',
            )
            self.write('ios/BUILD.gn', b'iOS build definition\n')
            self.write(prefix + 'gen/ios.gni', b'generated iOS config\n')
            self.write(prefix + 'gen/ios.h', b'old generated iOS output\n')
            self.write('ios/only.mm', b'iOS source\n')
            self.write('ios/icon.png', b'\x89PNG\0')
            self.write('ios/prebuilt', b'\x7fELF\0')
            self.graphs[directory] = {
                '//brave:all': {
                    'sources': ['//patched.cc', '//ios/only.mm'],
                    'data': ['//ios/icon.png', '//ios/prebuilt'],
                    'inputs': ['//' + prefix + 'gen/ios.h'],
                    'outputs': ['//' + prefix + 'args.gn'],
                },
            }
        result = self.export(ios_graphs=graphs)
        paths = self.git(
            self.snapshot, 'ls-tree', '-rz', '--name-only', 'main'
        ).split(b'\0')
        self.assertEqual(paths.count(b'src/patched.cc'), 1)
        self.assertIn(b'src/ios/only.mm', paths)
        self.assertIn(b'src/ios/icon.png', paths)
        self.assertIn(b'src/ios/BUILD.gn', paths)
        self.assertNotIn(b'src/ios/prebuilt', paths)
        self.assertFalse(any(b'/out/code_search_ios_' in p for p in paths))
        self.assertEqual(self.gn_reader.call_count, len(self.builds) + 2)
        ios_records = [r for r in result['builds'] if r['platform'] == 'ios']
        self.assertEqual(len(ios_records), 2)
        self.assertTrue(all(r['mode'] == 'source_only' for r in ios_records))
        # A directory input still cannot pull in iOS generated files.
        directory = graphs[0][2]
        self.graphs[directory]['//brave:all']['data'].append('//out/')
        paths = set(
            exporter.graph_files(
                self.src, self.src / 'out' / directory, include_generated=False
            )
        )
        self.assertFalse(any(self.src / 'out' in p.parents for p in paths))

    def test_directory_input_omits_nested_git_admin_files(self):
        directory = self.builds[0][2]
        self.graphs[directory]['//brave:all']['data'] = [
            '//third_party/nested',
        ]
        self.export()
        paths = self.git(
            self.snapshot, 'ls-tree', '-rz', '--name-only', 'main'
        ).split(b'\0')
        self.assertIn(b'src/third_party/nested/untracked.h', paths)
        self.assertFalse(any(b'/.git/' in path for path in paths))

    def test_repeat_export_removes_stale_files_and_keeps_history(self):
        self.export()
        old = self.git(self.snapshot, 'rev-parse', 'main').strip()
        (self.src / 'new.h').unlink()
        self.write('patched.cc', b'new patched source\n')
        self.export()
        paths = self.git(
            self.snapshot, 'ls-tree', '-rz', '--name-only', 'main'
        ).split(b'\0')
        self.assertNotIn(b'src/new.h', paths)
        self.git(
            self.snapshot, 'merge-base', '--is-ancestor', old.decode(), 'main'
        )
        self.assertEqual(
            self.git(self.snapshot, 'show', 'main:src/patched.cc'),
            b'new patched source\n',
        )

    def test_publishes_batches_and_fast_forwards_local_remote(self):
        remote = self.root / 'remote.git'
        remote.mkdir()
        self.git(remote, 'init', '--bare', '-q', '--initial-branch=main')
        with mock.patch.object(exporter.time, 'sleep'):
            self.export(push=True, destination=str(remote))
            old = self.git(remote, 'rev-parse', 'main').strip()
            self.write('patched.cc', b'second published source\n')
            self.export(push=True, destination=str(remote))
        self.git(remote, 'merge-base', '--is-ancestor', old.decode(), 'main')
        self.assertEqual(
            self.git(remote, 'show', 'main:src/patched.cc'),
            b'second published source\n',
        )

    def test_local_review_can_be_published_to_an_empty_remote(self):
        self.export()
        remote = self.root / 'remote.git'
        remote.mkdir()
        self.git(remote, 'init', '--bare', '-q', '--initial-branch=main')
        with mock.patch.object(exporter.time, 'sleep'):
            self.export(push=True, destination=str(remote))
        self.assertEqual(
            self.git(remote, 'show', 'main:src/patched.cc'),
            b'patched by Brave\r\n',
        )

    def test_missing_output_prevents_any_export(self):
        (self.src / 'out' / self.builds[0][2] / 'args.gn').unlink()
        with self.assertRaisesRegex(RuntimeError, 'Missing build output'):
            self.export()
        self.assertFalse(self.snapshot.exists())

    def test_existing_source_directory_is_not_reinitialized(self):
        with self.assertRaisesRegex(RuntimeError, 'new or export-owned'):
            exporter.prepare_snapshot(self.src, 'unused', 'main', False)

    def test_oversized_text_is_reported_instead_of_silently_omitted(self):
        path = self.src / 'huge.txt'
        path.write_bytes(b'x' * 10)
        with mock.patch.object(exporter, 'MAX_FILE_BYTES', 9):
            with self.assertRaisesRegex(RuntimeError, '100 MiB'):
                exporter.file_contents(path)

    def test_defaults_request_component_for_four_platforms(self):
        platforms = list(
            map(exporter.parse_platform, exporter.DEFAULT_PLATFORMS)
        )
        sync, builds = exporter.build_commands(platforms, [])
        self.assertIn('--target_os=linux,win,mac,android,ios', sync)
        self.assertEqual(len(builds), 4)
        self.assertTrue(
            all(command[3] == 'Component' for _, _, _, command in builds)
        )
        self.assertTrue(
            all('--target=brave:all' in command for _, _, _, command in builds)
        )


if __name__ == '__main__':
    unittest.main()
