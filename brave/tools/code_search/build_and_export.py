#!/usr/bin/env vpython3
# Copyright (c) 2026 The Brave Authors. All rights reserved.
# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this file,
# You can obtain one at https://mozilla.org/MPL/2.0/.

"""Build Brave on Linux; export patched sources and generated files to Git."""

import argparse
import datetime
import json
import os
import re
from pathlib import Path
import shlex
import stat
import subprocess
import sys
import time

MIB = 1024 * 1024
MAX_FILE_BYTES = 100 * MIB
BUILD_TARGET = '//brave:all'
COMPILED_SUFFIXES = (
    '.exe',
    '.dll',
    '.so',
    '.dylib',
    '.a',
    '.lib',
    '.o',
    '.obj',
    '.rlib',
    '.rmeta',
    '.pdb',
    '.apk.mapping',
    '.dwo',
    '.pyc',
    '.pyo',
    '.class',
    '.jar',
    '.jmod',
    '.dex',
    '.wasm',
    '.apk',
    '.aab',
    '.aar',
    '.bc',
    '.code_cache',
    '.msi',
    '.dmg',
    '.deb',
    '.rpm',
    '.pkg',
)
DEFAULT_PLATFORMS = ('linux:x64', 'win:x64', 'mac:x64', 'android:arm64')
ADDITIONAL_SOURCE_DIRS = frozenset(
    ('tools', 'build', 'build_overrides', 'buildtools', 'docs', 'agents')
)
BINARY_TEXT_CONTROLS = re.compile(rb'[\x00-\x08\x0b\x0c\x0e-\x1f]')
ARCHITECTURES = {
    'linux': ('x64', 'arm64'),
    'win': ('x64', 'arm64'),
    'mac': ('x64', 'arm64'),
    'android': ('arm', 'arm64', 'x86', 'x64'),
}


def run(command, cwd, capture=False, env=None):
    """Run a command without invoking a shell."""
    if not capture:
        print('$ ' + shlex.join(map(str, command)), flush=True)
    return subprocess.run(
        command,
        cwd=cwd,
        env=env,
        check=True,
        stdout=subprocess.PIPE if capture else None,
    ).stdout


def git(repo, *args, capture=False):
    return run(['git', '-C', str(repo), *args], repo, capture)


def parse_platform(value):
    parts = value.split(':')
    if len(parts) != 2 or parts[0] not in ARCHITECTURES:
        raise argparse.ArgumentTypeError('Use OS:ARCH, e.g. linux:x64')
    if parts[1] not in ARCHITECTURES[parts[0]]:
        raise argparse.ArgumentTypeError('Unsupported platform: ' + value)
    return tuple(parts)


def repository_url(value):
    if value.startswith('-'):
        raise argparse.ArgumentTypeError('Repository cannot start with "-"')
    if '/' in value and ':' not in value and not value.startswith(('/', '.')):
        return 'git@github.com:' + value.removesuffix('.git') + '.git'
    return value


def build_commands(platforms, build_args):
    """Use explicit output directories to keep all platform outputs."""
    systems = ','.join(dict.fromkeys([*(name for name, _ in platforms), 'ios']))
    arches = ','.join(
        dict.fromkeys([*(arch for _, arch in platforms), 'arm64'])
    )
    sync = [
        'pnpm',
        'run',
        'sync',
        '--target_os=' + systems,
        '--target_arch=' + arches,
    ]
    builds = []
    for os_name, arch in platforms:
        directory = 'code_search_' + os_name + '_Component_' + arch
        command = [
            'pnpm',
            'run',
            'build',
            'Component',
            '--target_os=' + os_name,
            '--target_arch=' + arch,
            '-C',
            directory,
            '--target=brave:all',
            *build_args,
        ]
        builds.append((os_name, arch, directory, command))
    return sync, builds


def ios_graph_commands(xcode_dir, gn_args):
    """Generate device and simulator graphs without compiling iOS."""
    graphs = []
    for environment in ('device', 'simulator'):
        directory = 'code_search_ios_' + environment + '_Static_arm64'
        command = [
            'node',
            'tools/code_search/generate_graph.js',
            'Component',
            '--target_os=ios',
            '--target_arch=arm64',
            '--target_environment=' + environment,
            '-C',
            directory,
            '--use_remoteexec=false',
            '--gn=use_system_xcode:true',
        ]
        if xcode_dir is not None:
            command.append(
                '--gn=ios_sdk_developer_dir:' + json.dumps(str(xcode_dir))
            )
        command.extend('--gn=' + arg for arg in gn_args)
        graphs.append(('ios', 'arm64', directory, command))
    return graphs


def read_gn_graph(src, output):
    """Read GN descriptions for this platform, including all toolchains."""
    env = os.environ.copy()
    # Chromium's patched Android version generator imports Brave helpers.
    python_paths = [str(src / 'brave/script'), env.get('PYTHONPATH', '')]
    env['PYTHONPATH'] = os.pathsep.join(path for path in python_paths if path)
    return json.loads(
        run(
            [
                str(src / 'buildtools/linux64/gn'),
                'desc',
                str(output),
                '//*',
                '--format=json',
            ],
            src,
            capture=True,
            env=env,
        )
    )


def graph_files(src, output, include_generated=True):
    """Query GN inputs/outputs; source-only graphs omit the output tree."""
    graph = read_gn_graph(src, output)
    pending = [BUILD_TARGET]
    visited = set()
    names = set()
    while pending:
        label = pending.pop()
        if label in visited:
            continue
        visited.add(label)
        if label not in graph:
            raise RuntimeError('GN target missing from graph: ' + label)
        target = graph[label]
        pending.extend(target.get('deps', []))
        for key in ('sources', 'inputs', 'outputs', 'public', 'data', 'script'):
            values = target.get(key, [])
            if isinstance(values, str):
                values = [values]
            names.update(name for name in values if name.startswith('//'))
    paths = set()
    for name in names:
        # Normalize paths without following symlinks outside the checkout.
        path = Path(os.path.abspath(src / name[2:]))
        if src not in path.parents and path != src:
            continue
        if '.git' in path.relative_to(src).parts:
            continue
        if (src / 'out' == path or src / 'out' in path.parents) and (
            not include_generated
            or (path != output and output not in path.parents)
        ):
            continue
        if path.is_symlink() or path.is_file():
            paths.add(path)
        elif path.is_dir():
            for directory, dirs, files in os.walk(path, followlinks=False):
                dirs[:] = [name for name in dirs if name != '.git']
                for entry in (*dirs, *files):
                    candidate = Path(directory) / entry
                    if src / 'out' in candidate.parents and (
                        not include_generated or output not in candidate.parents
                    ):
                        continue
                    if candidate.is_symlink() or candidate.is_file():
                        paths.add(candidate)
    yield from sorted(paths)


def gn_build_config_files(src, output, include_generated=True):
    """Read GN's per-platform regeneration dependencies."""
    depfile = output / 'build.ninja.d'
    if not depfile.is_file():
        raise RuntimeError('Missing GN build dependency file: ' + str(depfile))
    target, separator, dependencies = depfile.read_text(
        encoding='utf-8'
    ).partition(':')
    if not separator or target != 'build.ninja.stamp':
        raise RuntimeError('Invalid GN build dependency file: ' + str(depfile))
    paths = set()
    for name in shlex.split(dependencies):
        path = Path(os.path.abspath(output / name))
        if path.suffix not in ('.gn', '.gni') and path.name != '.gn':
            continue
        if src not in path.parents and path != src:
            continue
        if src / 'out' in path.parents and (
            not include_generated or output not in path.parents
        ):
            continue
        if path.is_symlink() or path.is_file():
            paths.add(path)
    return paths


def brave_core_tracked_files(src):
    """Include every existing file in Brave Core's Git index."""
    repo = src / 'brave'
    names = git(repo, 'ls-files', '--cached', '--full-name', '-z', capture=True)
    paths = set()
    for name in names.split(b'\0'):
        if not name:
            continue
        path = repo / os.fsdecode(name)
        if path.is_symlink() or path.is_file():
            paths.add(path)
    return paths


def additional_source_files(src):
    """Find text candidates outside GN and Brave Core's tracked files."""
    paths = set()
    for directory, dirs, files in os.walk(src, followlinks=False):
        root = Path(directory)
        parts = root.relative_to(src).parts
        dirs[:] = [
            name for name in dirs if name != '.git' and (parts or name != 'out')
        ]
        include_directory = bool(parts and parts[0] in ADDITIONAL_SOURCE_DIRS)
        names = (*files, *(name for name in dirs if (root / name).is_symlink()))
        for name in names:
            lower = name.lower()
            if not (
                include_directory
                or lower.endswith('.md')
                or lower == 'readme'
                or lower.startswith('readme.')
            ):
                continue
            path = root / name
            if path.is_symlink() or path.is_file():
                paths.add(path)
    return paths


def source_repositories(src, paths):
    """Find the Git repositories containing GN-selected source inputs."""
    repos = {src, src / 'brave'}
    if any(not (repo / '.git').exists() for repo in repos):
        raise RuntimeError(
            'Expected Chromium src and src/brave Git repositories'
        )
    cache = {}
    for path in paths:
        if src / 'out' in path.parents:
            continue
        directory = path.parent
        visited = []
        repo = None
        while directory == src or src in directory.parents:
            if directory in cache:
                repo = cache[directory]
                break
            if (directory / '.git').exists():
                repo = directory
                break
            visited.append(directory)
            directory = directory.parent
        for directory in visited:
            cache[directory] = repo
        if repo is not None:
            repos.add(repo)
    return sorted(repos)


def file_contents(path, allow_compiled=False, text_only=False):
    """Read raw bytes, optionally retaining tracked Brave Core binaries."""
    name = path.name.lower()
    so_version = name.partition('.so.')[2]
    if not allow_compiled and (
        name.endswith(COMPILED_SUFFIXES)
        or (
            so_version and all(part.isdigit() for part in so_version.split('.'))
        )
    ):
        return None, None, 'compiled executable code'
    metadata = path.lstat()
    if stat.S_ISLNK(metadata.st_mode):
        return os.fsencode(os.readlink(path)), '120000', None
    if not stat.S_ISREG(metadata.st_mode):
        return None, None, 'non-regular file'
    with path.open('rb') as source:
        head = source.read(8192)
        if not allow_compiled and head.startswith(
            (
                b'\x7fELF',
                b'!<arch>\n',
                b'\0asm',
                b'BC\xc0\xde',
                b'\xda\xda\xfe\xca',
                b'\xca\xfe\xda\xda',
                b'JM\x01\x00',
                b'\xde\xc0\x17\x0b',
                b'\xfe\xed\xfa\xce',
                b'\xce\xfa\xed\xfe',
                b'\xfe\xed\xfa\xcf',
                b'\xcf\xfa\xed\xfe',
                b'\xca\xfe\xba\xbe',
                b'\xbe\xba\xfe\xca',
                b'\xca\xfe\xba\xbf',
                b'\xbf\xba\xfe\xca',
            )
        ):
            return None, None, 'compiled executable code'
        if not allow_compiled and head.startswith(b'MZ') and len(head) >= 64:
            # Validate the PE signature so plain text starting with MZ is kept.
            source.seek(int.from_bytes(head[60:64], 'little'))
            pe_signature = source.read(4)
            source.seek(len(head))
            if pe_signature == b'PE\0\0':
                return None, None, 'compiled executable code'
        if text_only and BINARY_TEXT_CONTROLS.search(head):
            return None, None, 'binary additional source'
        if metadata.st_size > MAX_FILE_BYTES:
            raise RuntimeError(
                'File exceeds GitHub 100 MiB limit: ' + str(path)
            )
        content = head + source.read()
    if text_only:
        try:
            content.decode('utf-8')
        except UnicodeDecodeError:
            return None, None, 'binary additional source'
        if BINARY_TEXT_CONTROLS.search(content):
            return None, None, 'binary additional source'
    mode = '100755' if metadata.st_mode & stat.S_IXUSR else '100644'
    return content, mode, None


def quote_path(path):
    """Encode paths using Git's C quoting, including non-ASCII filenames."""
    escaped = ''.join(
        chr(b) if 32 <= b < 127 and b not in (34, 92) else '\\%03o' % b
        for b in os.fsencode(path)
    )
    return ('"' + escaped + '"').encode('ascii')


def import_batch(repo, ref, parent, files, message, replace=False):
    """Import raw bytes without source .gitignore or .gitattributes filters."""
    with subprocess.Popen(
        ['git', '-C', str(repo), 'fast-import', '--quiet'],
        stdin=subprocess.PIPE,
    ) as process:
        stream = process.stdin
        stream.write(('commit ' + ref + '\n').encode())
        stream.write(
            (
                'committer Brave Code Search <code-search@localhost> '
                + str(int(time.time()))
                + ' +0000\n'
            ).encode()
        )
        message_bytes = message.encode()
        stream.write(('data %d\n' % len(message_bytes)).encode())
        stream.write(message_bytes + b'\n')
        if parent:
            stream.write(('from ' + parent + '\n').encode())
        if replace:
            stream.write(b'deleteall\n')
        for name, mode, content in files:
            stream.write(
                b'M ' + mode.encode() + b' inline ' + quote_path(name) + b'\n'
            )
            stream.write(('data %d\n' % len(content)).encode())
            stream.write(content + b'\n')
        stream.write(b'\ndone\n')
        stream.close()
        result = process.wait()
        if result:
            raise subprocess.CalledProcessError(result, process.args)
    return git(repo, 'rev-parse', ref, capture=True).decode().strip()


def prepare_snapshot(repo, destination, branch, push):
    """Reuse an export-owned bare repository, without resetting source."""
    marker = repo / 'brave-code-search-export'
    if repo.exists():
        if not marker.is_file():
            raise RuntimeError(
                'Snapshot directory must be new or export-owned: ' + str(repo)
            )
        if (
            git(repo, 'rev-parse', '--is-bare-repository', capture=True).strip()
            != b'true'
        ):
            raise RuntimeError(
                'Snapshot directory is not a bare Git repository'
            )
    else:
        repo.mkdir(parents=True)
        git(repo, 'init', '--bare', '--initial-branch=' + branch)
        marker.write_text(
            'Brave source snapshot\n', encoding='utf-8', newline='\n'
        )
    git(repo, 'check-ref-format', 'refs/heads/' + branch)
    parent = None
    if push:
        refs = git(
            repo, 'ls-remote', destination, 'refs/heads/' + branch, capture=True
        ).splitlines()
        if refs:
            git(repo, 'fetch', '--no-tags', destination, 'refs/heads/' + branch)
            parent = (
                git(repo, 'rev-parse', 'FETCH_HEAD', capture=True)
                .decode()
                .strip()
            )
        else:
            # GitHub chooses the first pushed branch as an empty repo's default.
            ref = 'refs/heads/code-search-initialize-' + str(time.time_ns())
            parent = import_batch(
                repo, ref, None, [], 'Initialize Brave source snapshot'
            )
            git(repo, 'push', destination, ref + ':refs/heads/' + branch)
    else:
        result = subprocess.run(
            [
                'git',
                '-C',
                str(repo),
                'rev-parse',
                '--verify',
                'refs/heads/' + branch,
            ],
            stdout=subprocess.PIPE,
            stderr=subprocess.DEVNULL,
            check=False,
        )
        if result.returncode == 0:
            parent = result.stdout.decode().strip()
    return parent


def verify_outputs(src, builds, ios_graphs=()):
    records = []
    for os_name, arch, directory, _ in builds:
        output = src / 'out' / directory
        args_file = output / 'args.gn'
        if not args_file.is_file() or not (output / 'gen').is_dir():
            raise RuntimeError('Missing build output: ' + str(output))
        records.append(
            {
                'platform': os_name,
                'architecture': arch,
                'requested_build_type': 'Component',
                'effective_build_type': 'Static'
                if os_name == 'android'
                else 'Component',
                'output': output.relative_to(src).as_posix(),
            }
        )
    for _, arch, directory, _ in ios_graphs:
        output = src / 'out' / directory
        if (
            not (output / 'args.gn').is_file()
            or not (output / 'build.ninja').is_file()
        ):
            raise RuntimeError('Missing iOS GN graph: ' + str(output))
        records.append(
            {
                'platform': 'ios',
                'architecture': arch,
                'mode': 'source_only',
                'output': output.relative_to(src).as_posix(),
                'generated_files_included': False,
            }
        )
    return records


def export_snapshot(
    src, snapshot, destination, branch, builds, push, batch_bytes, ios_graphs=()
):
    records = verify_outputs(src, builds, ios_graphs)
    tracked = brave_core_tracked_files(src)
    paths = set(tracked)
    graph_paths = set()
    gn_configs = set()
    for _, _, directory, _ in builds:
        output = src / 'out' / directory
        graph_paths.update(graph_files(src, output))
        gn_configs.update(gn_build_config_files(src, output))
    for _, _, directory, _ in ios_graphs:
        output = src / 'out' / directory
        graph_paths.update(graph_files(src, output, include_generated=False))
        gn_configs.update(
            gn_build_config_files(src, output, include_generated=False)
        )
    additional = additional_source_files(src)
    paths.update(graph_paths)
    paths.update(gn_configs)
    paths.update(additional)
    repos = source_repositories(src, paths)
    revisions = {
        repo.relative_to(src).as_posix(): git(
            repo, 'rev-parse', 'HEAD', capture=True
        )
        .decode()
        .strip()
        for repo in repos
    }
    parent = prepare_snapshot(snapshot, destination, branch, push)
    upload_branch = (
        'code-search-upload-'
        + datetime.datetime.now(datetime.timezone.utc).strftime('%Y%m%dT%H%M%S')
        + '-'
        + str(time.time_ns())
    )
    ref = 'refs/heads/' + upload_branch
    batch = []
    size = 0
    batches = 0
    counts = {'source': 0, 'generated': 0}
    excluded = []
    last_push = 0.0

    def flush():
        nonlocal parent, batch, size, batches, last_push
        if not batch:
            return
        parent = import_batch(
            snapshot,
            ref,
            parent,
            batch,
            'Brave source snapshot batch %d' % (batches + 1),
            replace=batches == 0,
        )
        batches += 1
        print(
            'Imported batch %d (%d files, %.1f MiB)'
            % (batches, len(batch), size / MIB),
            flush=True,
        )
        if push:
            # Stay below GitHub's recommended six pushes per minute.
            time.sleep(max(0, 10 - (time.monotonic() - last_push)))
            git(snapshot, 'push', destination, ref + ':' + ref)
            last_push = time.monotonic()
        batch = []
        size = 0

    def add(path, category):
        nonlocal size
        relative = path.relative_to(src)
        name = relative.as_posix()
        content, mode, reason = file_contents(
            path,
            allow_compiled=path in tracked,
            text_only=path in additional
            and path not in tracked
            and path not in graph_paths
            and path not in gn_configs,
        )
        if reason:
            excluded.append({'path': name, 'reason': reason})
            return
        if batch and size + len(content) > batch_bytes:
            flush()
        batch.append((name, mode, content))
        size += len(content)
        counts[category] += 1

    for path in sorted(paths):
        if src / 'out' in path.parents:
            add(path, 'generated')
        else:
            add(path, 'source')
    manifest = {
        'schema_version': 1,
        'complete': True,
        'source_revisions': revisions,
        'brave_core_tracked_files': len(tracked),
        'gn_build_config_files': len(gn_configs),
        'builds': records,
        'files': counts,
        'excluded': excluded,
        'github_search_note': 'GitHub may exclude generated, vendored, large, '
        'or non-UTF-8 files and very large repositories.',
    }
    content = (
        json.dumps(manifest, indent=2, ensure_ascii=True) + '\n'
    ).encode()
    if len(content) > MAX_FILE_BYTES:
        raise RuntimeError('Export manifest exceeds GitHub file limit')
    if size + len(content) > batch_bytes:
        flush()
    batch.append(('code-search-manifest.json', '100644', content))
    size += len(content)
    flush()
    if push:
        git(snapshot, 'push', destination, ref + ':refs/heads/' + branch)
    git(snapshot, 'update-ref', 'refs/heads/' + branch, parent)
    print(
        'Snapshot: %s (%d source, %d generated files; %d excluded)'
        % (parent, counts['source'], counts['generated'], len(excluded))
    )
    return manifest


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument(
        'repository', type=repository_url, help='Git URL or GitHub OWNER/REPO'
    )
    parser.add_argument(
        '--src-dir', type=Path, default=Path(__file__).resolve().parents[3]
    )
    parser.add_argument(
        '--snapshot-dir',
        required=True,
        type=Path,
        help='New or export-owned bare Git directory outside src',
    )
    parser.add_argument('--branch', default='main', help='Destination branch')
    parser.add_argument(
        '--platform',
        action='append',
        type=parse_platform,
        help='OS:ARCH; repeat to override the four defaults',
    )
    parser.add_argument(
        '--build-arg',
        action='append',
        default=[],
        help='Extra pnpm build argument; use --build-arg=--option',
    )
    parser.add_argument(
        '--ios-xcode-dir',
        type=Path,
        help='Xcode bundle containing real device and simulator SDKs for GN',
    )
    parser.add_argument(
        '--ios-gn-arg',
        action='append',
        default=[],
        help='Extra iOS GN argument in KEY:VALUE form; repeat as needed',
    )
    parser.add_argument(
        '--skip-sync',
        action='store_true',
        help='Use an already synchronized and patched checkout',
    )
    parser.add_argument(
        '--skip-build',
        action='store_true',
        help='Export existing build directories and iOS GN graphs',
    )
    parser.add_argument(
        '--no-push',
        action='store_true',
        help='Create a local snapshot for inspection',
    )
    parser.add_argument(
        '--dry-run',
        action='store_true',
        help='Print the build/export plan without changing files',
    )
    parser.add_argument(
        '--batch-mib',
        type=int,
        default=256,
        help='Maximum uncompressed content per upload batch',
    )
    args = parser.parse_args()
    src = args.src_dir.resolve()
    snapshot = args.snapshot_dir.resolve()
    if snapshot == src or src in snapshot.parents:
        parser.error('--snapshot-dir must be outside src')
    if not 1 <= args.batch_mib <= 1024:
        parser.error('--batch-mib must be between 1 and 1024')
    platforms = list(
        dict.fromkeys(args.platform or map(parse_platform, DEFAULT_PLATFORMS))
    )
    sync, builds = build_commands(platforms, args.build_arg)
    ios_graphs = ios_graph_commands(args.ios_xcode_dir, args.ios_gn_arg)
    if args.dry_run:
        if not args.skip_sync:
            print(shlex.join(sync))
        if not args.skip_build:
            for _, _, _, command in [*builds, *ios_graphs]:
                print(shlex.join(command))
        print('Export patched source and generated files to ' + str(snapshot))
        print(
            (
                'Keep local snapshot'
                if args.no_push
                else 'Push snapshot to '
                + args.repository
                + ' branch '
                + args.branch
            )
        )
        return 0
    if sys.platform != 'linux' and not args.skip_build:
        parser.error('Cross-builds must run on Linux')
    try:
        if not args.skip_sync:
            run(sync, src / 'brave')
        if not args.skip_build:
            for os_name, _, _, command in builds:
                if os_name == 'android':
                    print(
                        'Android Component uses Brave\'s Static fallback.',
                        flush=True,
                    )
                run(command, src / 'brave')
            for _, _, _, command in ios_graphs:
                run(command, src / 'brave')
        export_snapshot(
            src,
            snapshot,
            args.repository,
            args.branch,
            builds,
            not args.no_push,
            args.batch_mib * MIB,
            ios_graphs,
        )
    except (OSError, RuntimeError, subprocess.CalledProcessError) as error:
        print('Error: ' + str(error), file=sys.stderr)
        return 1
    return 0


if __name__ == '__main__':
    sys.exit(main())
