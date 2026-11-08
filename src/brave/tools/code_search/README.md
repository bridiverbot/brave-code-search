# Brave source snapshots

`build_and_export.py` runs Brave's sync command to apply patches, builds Brave
from Linux, and exports source and generated files to a separate Git repository.
The destination is a required parameter; the tool does not impose repository
visibility.

Run from a Linux Brave checkout:

```sh
vpython3 tools/code_search/build_and_export.py bridiverbot/brave-code-search \
    --snapshot-dir /workspace/brave-code-search-snapshot.git \
    --ios-xcode-dir /path/to/Xcode.app
```

Defaults are Linux x64, Windows x64, macOS x64, and Android arm64. Desktop
builds use Component and build the `brave:all` target. Brave converts Android
Component requests to Static because Chromium no longer supports Android
component builds. Windows and macOS need the cross-build toolchains/SDKs
provided by Brave's normal checkout hooks. See
[macOS cross-compilation](../../build/mac/cross_compile/README.md) and
[Chromium Windows cross-compilation](https://chromium.googlesource.com/chromium/src/+/main/docs/win_cross.md).
iOS device and simulator arm64 graphs are generated without compiling. Their
GN-selected sources and resources are included; all iOS files under `out/` are
omitted, including any files written during GN generation. Brave uses Static
configuration for iOS because it does not support Component builds.

On Linux, supply an Xcode bundle containing real iPhoneOS and iPhoneSimulator
SDKs with `--ios-xcode-dir /path/to/Xcode.app`. GN reads the bundle's SDK
metadata; it does not run a native iOS compiler. The hermetic macOS-only Xcode
download does not contain these SDKs. Optional iOS overrides use
`--ios-gn-arg KEY:VALUE`.

Brave's hermetic SDK downloads need access to its SDK host; the macOS download
works over the internal VPN. On Linux, Windows SDK setup uses `ciopfs` and needs
`fusermount` and `/dev/fuse`. A container must also allow FUSE mounting (for
example, with `--device /dev/fuse --cap-add SYS_ADMIN`).

Repeat `--platform OS:ARCH` to select another matrix, for example:

```sh
vpython3 tools/code_search/build_and_export.py OWNER/REPO \
    --snapshot-dir /workspace/snapshot.git \
    --ios-xcode-dir /path/to/Xcode.app \
    --platform linux:x64 --platform linux:arm64 \
    --platform win:x64 --platform win:arm64 \
    --platform mac:x64 --platform mac:arm64 \
    --platform android:arm --platform android:arm64 \
    --platform android:x86 --platform android:x64
```

Use `--dry-run` to print the plan. Use `--no-push` to inspect a local snapshot.
Use `--skip-sync --skip-build` to export existing, patched build outputs and iOS
GN graphs. Extra build options can be passed as
`--build-arg=--use_remoteexec=true`.

On every export, the tool queries GN separately for each platform's output
directory and walks the recursive dependencies of `//brave:all`, including all
toolchains. GN supplies both source inputs and generated outputs: sources,
inputs, outputs, public headers, data, and scripts. The snapshot uses the union
of those platform file sets and every Git-tracked file in Brave Core, taking
current patched working bytes rather than upstream commits. Files keep their
`src/` paths; each build uses `src/out/code_search_OS_Component_ARCH/`.

GN-selected inputs and outputs are included regardless of Git tracking status.
All existing Git-tracked files in `src/brave` are also included, even when GN
does not select them. This covers Chromium overrides and Plaster configs. GN
also records the `.gn` and `.gni` files used to generate each platform graph in
`build.ninja.d`; these are included whether or not the target lists them as
inputs. iOS graph-generated configs under `out/` are omitted. Tracking does not
gate GN-selected files, and files in other repositories are selected only by GN.
Deleted files stay deleted. There is no hard-coded input or output file list.

Compiled executable code is excluded, including executables, object files,
libraries, bytecode, and debug symbols (including Android APK mapping files).
File extensions and executable binary signatures cover both named artifacts and
executables without extensions. Source code and resource files, including binary
assets, are retained. Git-tracked Brave Core files are retained even when they
are compiled binary fixtures. GN's graph supplies the file list; there are no
filename filters for logs or Ninja metadata. Symlinks are preserved without
reading their targets. npm packages and SDK files are included when selected by
GN. Git administrative `.git/` directories are omitted when GN names a whole
directory; Git cannot store them inside the snapshot.

The snapshot is a bare repository. Inspect it with:

```sh
git --git-dir=/workspace/snapshot.git show main:code-search-manifest.json
git --git-dir=/workspace/snapshot.git show main:src/chrome/browser/browser.cc
```

`code-search-manifest.json` records source revisions, Brave Core tracked-file
count, GN build-config count, platform outputs, counts, and excluded files. This
is a source export, not a secrets audit. Review it before changing repository
visibility.

An empty destination receives an empty commit on the destination branch before
upload batches, so GitHub chooses that branch as its default.

Uploads use incremental commits on a `code-search-upload-*` branch, with 256 MiB
of uncompressed file content per batch by default. The destination branch
(default `main`) advances only after every file and the completion manifest have
been imported. Reruns replace the snapshot tree while preserving history, and
pushes never force-update the destination. The upload branch is retained so
interrupted uploads can be inspected. Files larger than GitHub's 100 MiB Git
limit cause an error rather than silently disappearing.

GitHub does not index every stored file: generated/vendored code, files over 350
KiB, non-UTF-8 text, and very large repositories may be excluded. See
[GitHub code-search limitations](https://docs.github.com/en/search-github/github-code-search/about-github-code-search#limitations).

Run integration tests with:

```sh
vpython3 tools/code_search/build_and_export_test.py
```
