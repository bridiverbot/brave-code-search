/*!**************************************************************************!*\
  !*** ./components/ai_chat/resources/leo_workspace/index.tsx + 4 modules ***!
  \**************************************************************************/

;// ./components/ai_chat/resources/leo_workspace/file_ops.ts
// Copyright (c) 2026 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.
// File tools for the Leo workspace, implemented against a
// FileSystemDirectoryHandle using the Web File System Access API. Path
// confinement comes from the platform: getFileHandle/getDirectoryHandle take a
// single path segment and reject '..' and separators, and the handle is scoped
// to the picked folder, so there is no way to escape the workspace root.
// Caps to keep tool output within reason for the model.
const kMaxGrepMatches = 200;
const kMaxGlobResults = 500;
function splitPath(rel) {
    const parts = rel
        .split('/')
        .map((s) => s.trim())
        .filter((s) => s !== '' && s !== '.');
    for (const p of parts) {
        if (p === '..') {
            throw new Error(`path escapes the workspace root: ${rel}`);
        }
    }
    return parts;
}
function basename(rel) {
    const parts = splitPath(rel);
    return parts.length ? parts[parts.length - 1] : '';
}
async function getDir(root, rel, create = false) {
    let dir = root;
    for (const seg of splitPath(rel)) {
        dir = await dir.getDirectoryHandle(seg, { create });
    }
    return dir;
}
async function getFile(root, rel, create = false) {
    const parts = splitPath(rel);
    if (parts.length === 0) {
        throw new Error('empty file path');
    }
    const name = parts.pop();
    let dir = root;
    for (const seg of parts) {
        dir = await dir.getDirectoryHandle(seg, { create });
    }
    return dir.getFileHandle(name, { create });
}
async function fileExists(root, rel) {
    try {
        await getFile(root, rel);
        return true;
    }
    catch {
        return false;
    }
}
// Whether |rel| resolves to a directory (an empty path is the root directory).
async function isDirectory(root, rel) {
    try {
        await getDir(root, rel);
        return true;
    }
    catch {
        return false;
    }
}
// Returns the file itself (a Blob) rather than decoded text, so that callers
// can handle arbitrary binary content.
async function readFile(root, rel) {
    return (await getFile(root, rel)).getFile();
}
async function readText(root, rel) {
    return (await readFile(root, rel)).text();
}
async function writeText(root, rel, content) {
    const fh = await getFile(root, rel, true);
    const writable = await fh.createWritable();
    await writable.write(content);
    await writable.close();
}
// dirHandle.entries() isn't in every TS lib; access via a loose type.
function entriesOf(dir) {
    return dir.entries();
}
function join(base, name) {
    return base ? `${base}/${name}` : name;
}
function globToRegExp(glob) {
    let re = '';
    for (let i = 0; i < glob.length; i++) {
        const c = glob[i];
        if (c === '*') {
            if (glob[i + 1] === '*') {
                re += '.*';
                i++;
                if (glob[i + 1] === '/') {
                    i++;
                }
            }
            else {
                re += '[^/]*';
            }
        }
        else if (c === '?') {
            re += '[^/]';
        }
        else if ('.+^${}()|[]\\'.includes(c)) {
            re += '\\' + c;
        }
        else {
            re += c;
        }
    }
    return new RegExp('^' + re + '$');
}
// Recursively yields the relative path of every file under |dir|.
async function* walkFiles(dir, prefix = '') {
    for await (const [name, handle] of entriesOf(dir)) {
        const rel = join(prefix, name);
        if (handle.kind === 'directory') {
            yield* walkFiles(handle, rel);
        }
        else {
            yield { path: rel, handle: handle };
        }
    }
}
async function listDir(root, path, depth) {
    const start = await getDir(root, path);
    const lines = [];
    const maxDepth = depth && depth > 0 ? depth : 2;
    async function recurse(dir, rel, d) {
        const names = [];
        for await (const entry of entriesOf(dir)) {
            names.push(entry);
        }
        names.sort((a, b) => a[0].localeCompare(b[0]));
        for (const [name, handle] of names) {
            const childRel = join(rel, name);
            if (handle.kind === 'directory') {
                lines.push(`${childRel}/`);
                if (d < maxDepth) {
                    await recurse(handle, childRel, d + 1);
                }
            }
            else {
                lines.push(childRel);
            }
        }
    }
    await recurse(start, path.replace(/\/+$/, '').replace(/^\/+/, ''), 1);
    return lines.length ? lines.join('\n') : '(empty)';
}
async function viewFile(root, path, range) {
    var _a;
    const text = await readText(root, path);
    const lines = text.split('\n');
    let start = 1;
    let end = lines.length;
    if (range && range.length >= 1) {
        start = Math.max(1, range[0]);
    }
    if (range && range.length >= 2 && range[1] !== -1) {
        end = Math.min(lines.length, range[1]);
    }
    const out = [];
    for (let i = start; i <= end; i++) {
        out.push(`${i}\t${(_a = lines[i - 1]) !== null && _a !== void 0 ? _a : ''}`);
    }
    return out.join('\n');
}
async function grep(root, path, pattern, include) {
    const re = new RegExp(pattern);
    const includeRe = include ? globToRegExp(include) : null;
    const dir = await getDir(root, path);
    const base = path.replace(/\/+$/, '').replace(/^\/+/, '');
    const matches = [];
    for await (const { path: rel, handle } of walkFiles(dir, base)) {
        if (includeRe && !includeRe.test(rel) && !includeRe.test(basename(rel))) {
            continue;
        }
        let text;
        try {
            text = await (await handle.getFile()).text();
        }
        catch {
            continue;
        }
        const fileLines = text.split('\n');
        for (let i = 0; i < fileLines.length; i++) {
            if (re.test(fileLines[i])) {
                matches.push(`${rel}:${i + 1}: ${fileLines[i]}`);
                if (matches.length >= kMaxGrepMatches) {
                    matches.push(`... (truncated at ${kMaxGrepMatches} matches)`);
                    return matches.join('\n');
                }
            }
        }
    }
    return matches.length ? matches.join('\n') : '(no matches)';
}
async function glob(root, path, pattern) {
    const re = globToRegExp(pattern);
    const dir = await getDir(root, path);
    const base = path.replace(/\/+$/, '').replace(/^\/+/, '');
    const results = [];
    for await (const { path: rel } of walkFiles(dir, base)) {
        if (re.test(rel) || re.test(basename(rel))) {
            results.push(rel);
            if (results.length >= kMaxGlobResults) {
                results.push(`... (truncated at ${kMaxGlobResults} results)`);
                break;
            }
        }
    }
    return results.length ? results.join('\n') : '(no matches)';
}
async function appendFile(root, path, content) {
    const existed = await fileExists(root, path);
    const previous = existed ? await readText(root, path) : '';
    await writeText(root, path, previous + content);
    return `Appended ${content.length} bytes to ${path}`;
}
async function createFile(root, path, fileText) {
    // Matches the text-editor `create` semantics: creates the file, overwriting
    // it if it already exists.
    const existed = await fileExists(root, path);
    await writeText(root, path, fileText);
    return `${existed ? 'Overwrote' : 'Created'} ${path} (${fileText.length} bytes)`;
}
async function strReplace(root, path, oldStr, newStr) {
    const text = await readText(root, path);
    const first = text.indexOf(oldStr);
    if (first === -1) {
        throw new Error('old_str was not found in the file');
    }
    if (text.includes(oldStr, first + 1)) {
        throw new Error('old_str is not unique in the file');
    }
    const updated = text.slice(0, first) + newStr + text.slice(first + oldStr.length);
    await writeText(root, path, updated);
    return `Replaced text in ${path}`;
}
async function insert(root, path, insertLine, newStr) {
    const text = await readText(root, path);
    const lines = text.split('\n');
    const at = Math.max(0, Math.min(insertLine, lines.length));
    const inserted = newStr.split('\n');
    lines.splice(at, 0, ...inserted);
    await writeText(root, path, lines.join('\n'));
    return `Inserted ${inserted.length} line(s) into ${path} after line ${at}`;
}

;// ./components/ai_chat/resources/leo_workspace/message_handler.ts
// Copyright (c) 2026 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.
// postMessage bridge that lets the `view.` sibling origin read files out of the
// workspace folder. Only that origin is accepted: the workspace holds an
// auto-granted File System Access handle to a user-picked folder.

const kReadFileRequest = 'READ_FILE';
const kReadFileResponse = 'READ_FILE_RESULT';
const kScheme = 'chrome-untrusted://';
// chrome-untrusted://leo-workspace -> chrome-untrusted://view.leo-workspace.
// Derived at runtime so it follows the workspace host, and '' for anything that
// isn't a chrome-untrusted origin, which must never be trusted.
function viewOrigin(origin) {
    return origin.startsWith(kScheme)
        ? origin.replace(kScheme, `${kScheme}view.`)
        : '';
}
async function readFilePayload(root, path) {
    // Checked before awaiting the handle so a malformed request fails fast.
    if (typeof path !== 'string' || path === '') {
        return { error: 'READ_FILE requires a non-empty string "path"' };
    }
    try {
        // Add a timeout so we don't hang forever waiting for the directory handle
        const timeoutPromise = new Promise((_resolve, reject) => {
            setTimeout(() => reject(new Error('Workspace folder not available (timeout)')), 5000);
        });
        const handle = await Promise.race([root, timeoutPromise]);
        return { file: await readFile(handle, path) };
    }
    catch (e) {
        return { error: e instanceof Error ? e.message : String(e) };
    }
}
// |root| resolves when the directory handle arrives via launchQueue, so a
// request that races ahead of it is served once it lands.
function installMessageHandler(root, origin = window.location.origin) {
    const targetOrigin = viewOrigin(origin);
    if (!targetOrigin) {
        console.error('[leo-workspace] no viewer origin to accept messages from');
        return;
    }
    console.debug('[leo-workspace] message handler installed, accepting from', targetOrigin);
    window.addEventListener('message', async (event) => {
        console.debug('[leo-workspace] received message from', event.origin, event.data);
        if (event.origin !== targetOrigin) {
            console.debug('[leo-workspace] ignoring message from wrong origin, expected', targetOrigin);
            return;
        }
        const data = event.data;
        if (typeof data !== 'object'
            || data === null
            || data.type !== kReadFileRequest) {
            console.debug('[leo-workspace] ignoring non-READ_FILE message');
            return;
        }
        // Reply to the sender with an explicit target origin, never '*'.
        const source = event.source;
        if (!source) {
            console.error('[leo-workspace] READ_FILE has no source to reply to');
            return;
        }
        console.debug('[leo-workspace] processing READ_FILE for path:', data.path);
        const response = {
            type: kReadFileResponse,
            requestId: data.requestId,
            ...(await readFilePayload(root, data.path)),
        };
        console.debug('[leo-workspace] sending response:', response.error || 'file loaded');
        source.postMessage(response, targetOrigin);
    });
}

;// ./components/ai_chat/resources/leo_workspace/tools.ts
// Copyright (c) 2026 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.
// Registers the workspace file tools with Leo via the WebMCP API
// (document.modelContext). The editing tool follows Anthropic's text-editor
// tool ("str_replace_based_edit_tool"): a `command` enum (create / str_replace
// / insert) with matching parameter names, so it lands in the model's training
// distribution. Its `view` command is split out into a separate read-only
// `view` tool because the user grants permission per tool: if view and edit
// shared a tool, allowing the model to read files would also allow it to
// modify them. Search and repo-structure helpers with no text-editor analog
// are registered as separate auxiliary tools. All ops run against the
// FileSystemDirectoryHandle in file_ops, which is resolved lazily on each call
// (see registerTools).

function schema(properties, required) {
    return { type: 'object', properties, required: required !== null && required !== void 0 ? required : [] };
}
const str = (description) => ({ type: 'string', description });
const tools_int = (description) => ({ type: 'integer', description });
const strEnum = (values, description) => ({
    type: 'string',
    enum: values,
    description,
});
const intArray = (description) => ({
    type: 'array',
    description,
    items: { type: 'integer' },
});
function asString(v) {
    return typeof v === 'string' ? v : '';
}
function asInt(v, fallback) {
    return typeof v === 'number' ? v : fallback;
}
// |getRoot| is called each time a tool runs, rather than once up front, so the
// tools can be registered before the workspace has a folder and the folder can
// be chosen the first time one is actually needed.
async function registerTools(getRoot) {
    const mc = document.modelContext;
    if (!mc) {
        console.error('[leo-workspace] document.modelContext is unavailable');
        return;
    }
    // Registered all at once, rather than one after another, so every tool is
    // registered synchronously, before the page finishes loading: the browser
    // reads the page's tools once it has loaded (see
    // AssociatedContentManager::OnToolsAttachedChanged), and registerTool() only
    // resolves after a round trip to the browser.
    const registrations = [];
    const reg = (name, description, inputSchema, run) => registrations.push(mc.registerTool({
        name,
        description,
        inputSchema,
        execute: async (input) => {
            try {
                return await run(await getRoot(), input !== null && input !== void 0 ? input : {});
            }
            catch (e) {
                return `Error: ${e instanceof Error ? e.message : String(e)}`;
            }
        },
    }));
    // Read-only, and deliberately a separate tool from the editor below so that
    // permission to read the workspace doesn't also grant permission to write
    // it. Paths are relative to the workspace root and confined to it by the
    // File System Access API.
    reg('view', 'Show a workspace file with 1-indexed line numbers, or list a directory. '
        + 'Optionally pass view_range=[start, end] (end -1 = end of file) to show '
        + 'part of a file. This tool only reads; use str_replace_based_edit_tool '
        + 'to change files.', schema({
        path: str('File or directory path relative to the workspace root.'),
        view_range: intArray('For a file: optional [start, end] 1-indexed line range. Use end of '
            + '-1 to read through the end of the file.'),
    }, ['path']), async (root, i) => {
        const path = asString(i.path);
        return (await isDirectory(root, path))
            ? listDir(root, path, 2)
            : viewFile(root, path, Array.isArray(i.view_range)
                ? i.view_range
                : undefined);
    });
    // The text-editor tool, dispatched on `command`. Every command writes.
    reg('str_replace_based_edit_tool', 'Tool for creating and editing files in the workspace, modeled on '
        + "Anthropic's text editor tool. To read files or list directories, use "
        + 'the `view` tool instead. Commands:\n'
        + '- create: create a file with `file_text`, overwriting it if it exists. '
        + 'IMPORTANT: a large `file_text` gets truncated and rejected. For anything '
        + 'longer than a few lines, call create with an empty or very short '
        + '`file_text`, then add the rest with repeated append_file calls, one '
        + 'small chunk per call.\n'
        + '- str_replace: replace the unique occurrence of `old_str` with '
        + '`new_str`. `old_str` must match exactly once, including whitespace. '
        + 'Keep `new_str` small for the same reason.\n'
        + '- insert: insert `insert_text` after 1-indexed line `insert_line` (0 = '
        + 'start of file). Keep `insert_text` small.', schema({
        command: strEnum(['create', 'str_replace', 'insert'], 'The edit command to run.'),
        path: str('File path relative to the workspace root.'),
        file_text: str('For create: full contents of the file.'),
        old_str: str('For str_replace: exact existing text to replace (must be unique).'),
        new_str: str('For str_replace: replacement text.'),
        insert_line: tools_int('For insert: line number to insert after (0 = start of file).'),
        insert_text: str('For insert: text to insert.'),
    }, ['command', 'path']), async (root, i) => {
        const path = asString(i.path);
        switch (i.command) {
            case 'create':
                return createFile(root, path, asString(i.file_text));
            case 'str_replace':
                return strReplace(root, path, asString(i.old_str), asString(i.new_str));
            case 'insert':
                return insert(root, path, asInt(i.insert_line, 0), asString(i.insert_text));
            case 'view':
                // Models trained on Anthropic's tool contract may still send this.
                // Never fall through to reading: this tool's permission grant is for
                // edits.
                throw new Error('view is not a command of this tool; use the `view` tool instead');
            default:
                throw new Error(`unknown command: ${String(i.command)}`);
        }
    });
    // Auxiliary tools with no text-editor analog.
    reg('grep', 'Search file contents within the workspace for a regular expression.', schema({
        pattern: str('Regular expression to search for.'),
        path: str('Directory to search under, relative to the workspace root. Empty '
            + 'searches the whole workspace.'),
        include: str('Optional glob restricting which files are searched by their '
            + 'relative path, e.g. *.ts'),
    }, ['pattern']), (root, i) => grep(root, asString(i.path), asString(i.pattern), asString(i.include)));
    reg('glob', 'Find files in the workspace whose relative path matches a glob.', schema({
        pattern: str('Glob to match file paths, e.g. **/*.ts'),
        path: str('Directory to search under, relative to the workspace root. Empty '
            + 'searches the whole workspace.'),
    }, ['pattern']), (root, i) => glob(root, asString(i.path), asString(i.pattern)));
    reg('append_file', 'Append `content` to the end of a workspace file, creating it if needed. '
        + 'Use this to build a file across several calls: create an empty file, '
        + 'then append_file one small chunk at a time. Prefer this over a single '
        + 'large create, whose big `file_text` argument gets truncated and '
        + 'rejected.', schema({
        path: str('File path relative to the workspace root.'),
        content: str('Text to append to the end of the file.'),
    }, ['path', 'content']), (root, i) => appendFile(root, asString(i.path), asString(i.content)));
    await Promise.all(registrations);
    console.log('[leo-workspace] registered WebMCP tools');
}

;// ./components/ai_chat/resources/leo_workspace/storage.ts
// Copyright (c) 2026 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.
const kDbName = 'leo-workspace';
const kDbVersion = 1;
const kStoreName = 'handles';
const kHandleKey = 'root';
function openDb() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(kDbName, kDbVersion);
        request.onerror = () => {
            var _a;
            reject(new Error(`Failed to open IndexedDB: ${(_a = request.error) === null || _a === void 0 ? void 0 : _a.message}`));
        };
        request.onsuccess = () => {
            resolve(request.result);
        };
        request.onupgradeneeded = (event) => {
            const db = event.target.result;
            if (!db.objectStoreNames.contains(kStoreName)) {
                db.createObjectStore(kStoreName);
            }
        };
    });
}
// Stores the directory handle in IndexedDB.
async function storeDirectoryHandle(handle) {
    const db = await openDb();
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(kStoreName, 'readwrite');
        const store = transaction.objectStore(kStoreName);
        const request = store.put(handle, kHandleKey);
        request.onerror = () => {
            var _a;
            reject(new Error(`Failed to store handle: ${(_a = request.error) === null || _a === void 0 ? void 0 : _a.message}`));
        };
        request.onsuccess = () => {
            console.log('[leo-workspace] directory handle stored in IndexedDB');
            resolve();
        };
        transaction.oncomplete = () => {
            db.close();
        };
    });
}
// Retrieves the directory handle from IndexedDB and requests permission.
// Returns null if no handle is stored or permission is denied.
async function restoreDirectoryHandle() {
    try {
        const db = await openDb();
        const handle = await new Promise((resolve, reject) => {
            const transaction = db.transaction(kStoreName, 'readonly');
            const store = transaction.objectStore(kStoreName);
            const request = store.get(kHandleKey);
            request.onerror = () => {
                var _a;
                reject(new Error(`Failed to get handle: ${(_a = request.error) === null || _a === void 0 ? void 0 : _a.message}`));
            };
            request.onsuccess = () => {
                var _a;
                resolve((_a = request.result) !== null && _a !== void 0 ? _a : null);
            };
            transaction.oncomplete = () => {
                db.close();
            };
        });
        if (!handle) {
            console.log('[leo-workspace] no stored directory handle found');
            return null;
        }
        // Request permission on the restored handle
        const permission = await handle.requestPermission({ mode: 'read' });
        if (permission !== 'granted') {
            console.log('[leo-workspace] permission denied for stored handle');
            return null;
        }
        console.log('[leo-workspace] restored directory handle from IndexedDB:', handle.name);
        return handle;
    }
    catch (e) {
        console.error('[leo-workspace] failed to restore directory handle:', e);
        return null;
    }
}

;// ./components/ai_chat/resources/leo_workspace/index.tsx
// Copyright (c) 2026 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.
// Headless workspace page. This bundle runs inside the hidden
// chrome-untrusted://<guid>.leo-workspace WebContents that is attached to a Leo
// conversation. Each workspace has its own subdomain, and therefore its own
// origin, so no state is shared between workspaces. It receives a
// FileSystemDirectoryHandle for the user-picked folder (delivered by the browser
// via window.launchQueue), implements the file tools against it, and registers
// them with Leo via WebMCP (document.modelContext). There is no visible UI.
//
// The handle is delivered via launchQueue; once captured, it's stored in
// IndexedDB so the workspace can restore it on subsequent loads without
// requiring launchQueue again. A workspace that is created without a folder is
// never sent one: the first time one of its tools runs, the origin private file
// system (OPFS) root becomes its folder, and is stored in IndexedDB the same
// way. The file tools are registered with Leo via WebMCP (see tools.ts /
// file_ops.ts). The `view.` sibling origin can also read files over
// postMessage (see message_handler.ts).
//
// When navigated to with a #file=<path> fragment, the workspace creates a
// fullscreen iframe to the viewer origin which displays the file content.



// The directory handle arrives asynchronously, so expose it as a promise that
// consumers can await rather than a slot they have to poll. It is never
// rejected: a workspace without a folder falls back to OPFS (see getRoot).
const { promise: rootHandle, resolve: resolveRoot } = Promise.withResolvers();
let hasRoot = false;
// Called when we have a valid directory handle. The first one wins.
function onDirectoryHandle(root, source) {
    if (hasRoot) {
        return;
    }
    console.debug('[leo-workspace] received directory handle:', root.name, `(from ${source})`);
    hasRoot = true;
    resolveRoot(root);
    // Store in IndexedDB for future loads (unless that's where it came from).
    if (source !== 'IndexedDB') {
        storeDirectoryHandle(root).catch((e) => {
            console.error('[leo-workspace] failed to store directory handle:', e);
        });
    }
}
// Looks for the folder the workspace already has: the one stored in IndexedDB,
// or failing that one delivered via launchQueue. setConsumer flushes a launch
// that is already queued, so a folder that has been sent is picked up here.
async function findExistingRoot() {
    const storedHandle = await restoreDirectoryHandle();
    if (storedHandle) {
        onDirectoryHandle(storedHandle, 'IndexedDB');
    }
    else if (window.launchQueue) {
        window.launchQueue.setConsumer(onLaunch);
    }
    else {
        console.error('[leo-workspace] window.launchQueue is unavailable');
    }
}
let foundExistingRoot;
// The root the tools run against. A workspace created without a folder is
// never sent one, so the first time a tool runs without a folder, the origin
// private file system root (private to the workspace, as each has its own
// origin) becomes the workspace folder.
async function getRoot() {
    await foundExistingRoot;
    if (!hasRoot) {
        onDirectoryHandle(await navigator.storage.getDirectory(), 'OPFS');
    }
    return rootHandle;
}
function onLaunch(params) {
    var _a;
    const entry = (_a = params.files) === null || _a === void 0 ? void 0 : _a[0];
    if (!entry || entry.kind !== 'directory') {
        console.error('[leo-workspace] launch params missing a directory handle', params);
        // Don't reject - we might have a stored handle, or fall back to OPFS.
        return;
    }
    const root = entry;
    onDirectoryHandle(root, 'launchQueue');
}
// Parses the #file=<filename> fragment from the URL.
function parseFileFragment(hash) {
    if (!hash || !hash.startsWith('#')) {
        return null;
    }
    const params = new URLSearchParams(hash.slice(1));
    return params.get('file');
}
// The viewer iframe, created on demand when a #file= fragment is present.
let viewerIframe = null;
// Creates or updates the fullscreen viewer iframe.
function showViewer(filename) {
    const viewerOriginUrl = viewOrigin(window.location.origin);
    if (!viewerOriginUrl) {
        console.error('[leo-workspace] cannot determine viewer origin');
        return;
    }
    const viewerUrl = `${viewerOriginUrl}/#file=${encodeURIComponent(filename)}`;
    if (!viewerIframe) {
        viewerIframe = document.createElement('iframe');
        document.body.appendChild(viewerIframe);
    }
    viewerIframe.src = viewerUrl;
    console.debug('[leo-workspace] showing viewer for:', filename);
}
// Hides the viewer iframe.
function hideViewer() {
    if (viewerIframe) {
        viewerIframe.remove();
        viewerIframe = null;
    }
}
// Handles hash changes to show/hide the viewer.
function handleHashChange() {
    const filename = parseFileFragment(window.location.hash);
    if (filename) {
        showViewer(filename);
    }
    else {
        hideViewer();
    }
}
function initialize() {
    console.debug('[leo-workspace] bundle loaded at', window.location.origin);
    installMessageHandler(rootHandle);
    // Handle file viewing via hash fragment
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    foundExistingRoot = findExistingRoot();
    // Register the tools up front: they resolve the folder when they run, so a
    // workspace that is never sent a folder still gets them (backed by OPFS).
    void registerTools(getRoot);
}
document.addEventListener('DOMContentLoaded', initialize);


//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LHFDQUFxQyxFQUFFLFFBQVEsQ0FBQztBQUNoRSxDQUFDO0FBRUQsMkJBQTJCO0FBQzNCLFNBQVMsVUFBVTtJQUNqQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2pCLFlBQVksQ0FBQyxNQUFNLEVBQUU7UUFDckIsWUFBWSxHQUFHLElBQUk7SUFDckIsQ0FBQztBQUNILENBQUM7QUFFRCxnREFBZ0Q7QUFDaEQsU0FBUyxnQkFBZ0I7SUFDdkIsTUFBTSxRQUFRLEdBQUcsaUJBQWlCLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7SUFDeEQsSUFBSSxRQUFRLEVBQUUsQ0FBQztRQUNiLFVBQVUsQ0FBQyxRQUFRLENBQUM7SUFDdEIsQ0FBQztTQUFNLENBQUM7UUFDTixVQUFVLEVBQUU7SUFDZCxDQUFDO0FBQ0gsQ0FBQztBQUVELFNBQVMsVUFBVTtJQUNqQixPQUFPLENBQUMsS0FBSyxDQUFDLGtDQUFrQyxFQUFFLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO0lBQ3pFLHFCQUFxQixDQUFDLFVBQVUsQ0FBQztJQUVqQyx3Q0FBd0M7SUFDeEMsZ0JBQWdCLEVBQUU7SUFDbEIsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFlBQVksRUFBRSxnQkFBZ0IsQ0FBQztJQUV2RCxpQkFBaUIsR0FBRyxnQkFBZ0IsRUFBRTtJQUN0QywyRUFBMkU7SUFDM0UsMEVBQTBFO0lBQzFFLEtBQUssYUFBYSxDQUFDLE9BQU8sQ0FBQztBQUM3QixDQUFDO0FBRUQsUUFBUSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLFVBQVUsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JyYXZlLWNvcmUvLi9jb21wb25lbnRzL2FpX2NoYXQvcmVzb3VyY2VzL2xlb193b3Jrc3BhY2UvZmlsZV9vcHMudHMiLCJ3ZWJwYWNrOi8vYnJhdmUtY29yZS8uL2NvbXBvbmVudHMvYWlfY2hhdC9yZXNvdXJjZXMvbGVvX3dvcmtzcGFjZS9tZXNzYWdlX2hhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vYnJhdmUtY29yZS8uL2NvbXBvbmVudHMvYWlfY2hhdC9yZXNvdXJjZXMvbGVvX3dvcmtzcGFjZS90b29scy50cyIsIndlYnBhY2s6Ly9icmF2ZS1jb3JlLy4vY29tcG9uZW50cy9haV9jaGF0L3Jlc291cmNlcy9sZW9fd29ya3NwYWNlL3N0b3JhZ2UudHMiLCJ3ZWJwYWNrOi8vYnJhdmUtY29yZS8uL2NvbXBvbmVudHMvYWlfY2hhdC9yZXNvdXJjZXMvbGVvX3dvcmtzcGFjZS9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDI2IFRoZSBCcmF2ZSBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuLy8gTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBmaWxlLFxuLy8gWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHBzOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uXG5cbi8vIEZpbGUgdG9vbHMgZm9yIHRoZSBMZW8gd29ya3NwYWNlLCBpbXBsZW1lbnRlZCBhZ2FpbnN0IGFcbi8vIEZpbGVTeXN0ZW1EaXJlY3RvcnlIYW5kbGUgdXNpbmcgdGhlIFdlYiBGaWxlIFN5c3RlbSBBY2Nlc3MgQVBJLiBQYXRoXG4vLyBjb25maW5lbWVudCBjb21lcyBmcm9tIHRoZSBwbGF0Zm9ybTogZ2V0RmlsZUhhbmRsZS9nZXREaXJlY3RvcnlIYW5kbGUgdGFrZSBhXG4vLyBzaW5nbGUgcGF0aCBzZWdtZW50IGFuZCByZWplY3QgJy4uJyBhbmQgc2VwYXJhdG9ycywgYW5kIHRoZSBoYW5kbGUgaXMgc2NvcGVkXG4vLyB0byB0aGUgcGlja2VkIGZvbGRlciwgc28gdGhlcmUgaXMgbm8gd2F5IHRvIGVzY2FwZSB0aGUgd29ya3NwYWNlIHJvb3QuXG5cbi8vIENhcHMgdG8ga2VlcCB0b29sIG91dHB1dCB3aXRoaW4gcmVhc29uIGZvciB0aGUgbW9kZWwuXG5jb25zdCBrTWF4R3JlcE1hdGNoZXMgPSAyMDBcbmNvbnN0IGtNYXhHbG9iUmVzdWx0cyA9IDUwMFxuXG5mdW5jdGlvbiBzcGxpdFBhdGgocmVsOiBzdHJpbmcpOiBzdHJpbmdbXSB7XG4gIGNvbnN0IHBhcnRzID0gcmVsXG4gICAgLnNwbGl0KCcvJylcbiAgICAubWFwKChzKSA9PiBzLnRyaW0oKSlcbiAgICAuZmlsdGVyKChzKSA9PiBzICE9PSAnJyAmJiBzICE9PSAnLicpXG4gIGZvciAoY29uc3QgcCBvZiBwYXJ0cykge1xuICAgIGlmIChwID09PSAnLi4nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYHBhdGggZXNjYXBlcyB0aGUgd29ya3NwYWNlIHJvb3Q6ICR7cmVsfWApXG4gICAgfVxuICB9XG4gIHJldHVybiBwYXJ0c1xufVxuXG5mdW5jdGlvbiBiYXNlbmFtZShyZWw6IHN0cmluZyk6IHN0cmluZyB7XG4gIGNvbnN0IHBhcnRzID0gc3BsaXRQYXRoKHJlbClcbiAgcmV0dXJuIHBhcnRzLmxlbmd0aCA/IHBhcnRzW3BhcnRzLmxlbmd0aCAtIDFdIDogJydcbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0RGlyKFxuICByb290OiBGaWxlU3lzdGVtRGlyZWN0b3J5SGFuZGxlLFxuICByZWw6IHN0cmluZyxcbiAgY3JlYXRlID0gZmFsc2UsXG4pOiBQcm9taXNlPEZpbGVTeXN0ZW1EaXJlY3RvcnlIYW5kbGU+IHtcbiAgbGV0IGRpciA9IHJvb3RcbiAgZm9yIChjb25zdCBzZWcgb2Ygc3BsaXRQYXRoKHJlbCkpIHtcbiAgICBkaXIgPSBhd2FpdCBkaXIuZ2V0RGlyZWN0b3J5SGFuZGxlKHNlZywgeyBjcmVhdGUgfSlcbiAgfVxuICByZXR1cm4gZGlyXG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldEZpbGUoXG4gIHJvb3Q6IEZpbGVTeXN0ZW1EaXJlY3RvcnlIYW5kbGUsXG4gIHJlbDogc3RyaW5nLFxuICBjcmVhdGUgPSBmYWxzZSxcbik6IFByb21pc2U8RmlsZVN5c3RlbUZpbGVIYW5kbGU+IHtcbiAgY29uc3QgcGFydHMgPSBzcGxpdFBhdGgocmVsKVxuICBpZiAocGFydHMubGVuZ3RoID09PSAwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdlbXB0eSBmaWxlIHBhdGgnKVxuICB9XG4gIGNvbnN0IG5hbWUgPSBwYXJ0cy5wb3AoKSBhcyBzdHJpbmdcbiAgbGV0IGRpciA9IHJvb3RcbiAgZm9yIChjb25zdCBzZWcgb2YgcGFydHMpIHtcbiAgICBkaXIgPSBhd2FpdCBkaXIuZ2V0RGlyZWN0b3J5SGFuZGxlKHNlZywgeyBjcmVhdGUgfSlcbiAgfVxuICByZXR1cm4gZGlyLmdldEZpbGVIYW5kbGUobmFtZSwgeyBjcmVhdGUgfSlcbn1cblxuYXN5bmMgZnVuY3Rpb24gZmlsZUV4aXN0cyhcbiAgcm9vdDogRmlsZVN5c3RlbURpcmVjdG9yeUhhbmRsZSxcbiAgcmVsOiBzdHJpbmcsXG4pOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBnZXRGaWxlKHJvb3QsIHJlbClcbiAgICByZXR1cm4gdHJ1ZVxuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG4vLyBXaGV0aGVyIHxyZWx8IHJlc29sdmVzIHRvIGEgZGlyZWN0b3J5IChhbiBlbXB0eSBwYXRoIGlzIHRoZSByb290IGRpcmVjdG9yeSkuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaXNEaXJlY3RvcnkoXG4gIHJvb3Q6IEZpbGVTeXN0ZW1EaXJlY3RvcnlIYW5kbGUsXG4gIHJlbDogc3RyaW5nLFxuKTogUHJvbWlzZTxib29sZWFuPiB7XG4gIHRyeSB7XG4gICAgYXdhaXQgZ2V0RGlyKHJvb3QsIHJlbClcbiAgICByZXR1cm4gdHJ1ZVxuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG4vLyBSZXR1cm5zIHRoZSBmaWxlIGl0c2VsZiAoYSBCbG9iKSByYXRoZXIgdGhhbiBkZWNvZGVkIHRleHQsIHNvIHRoYXQgY2FsbGVyc1xuLy8gY2FuIGhhbmRsZSBhcmJpdHJhcnkgYmluYXJ5IGNvbnRlbnQuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVhZEZpbGUoXG4gIHJvb3Q6IEZpbGVTeXN0ZW1EaXJlY3RvcnlIYW5kbGUsXG4gIHJlbDogc3RyaW5nLFxuKTogUHJvbWlzZTxGaWxlPiB7XG4gIHJldHVybiAoYXdhaXQgZ2V0RmlsZShyb290LCByZWwpKS5nZXRGaWxlKClcbn1cblxuYXN5bmMgZnVuY3Rpb24gcmVhZFRleHQoXG4gIHJvb3Q6IEZpbGVTeXN0ZW1EaXJlY3RvcnlIYW5kbGUsXG4gIHJlbDogc3RyaW5nLFxuKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgcmV0dXJuIChhd2FpdCByZWFkRmlsZShyb290LCByZWwpKS50ZXh0KClcbn1cblxuYXN5bmMgZnVuY3Rpb24gd3JpdGVUZXh0KFxuICByb290OiBGaWxlU3lzdGVtRGlyZWN0b3J5SGFuZGxlLFxuICByZWw6IHN0cmluZyxcbiAgY29udGVudDogc3RyaW5nLFxuKTogUHJvbWlzZTx2b2lkPiB7XG4gIGNvbnN0IGZoID0gYXdhaXQgZ2V0RmlsZShyb290LCByZWwsIHRydWUpXG4gIGNvbnN0IHdyaXRhYmxlID0gYXdhaXQgZmguY3JlYXRlV3JpdGFibGUoKVxuICBhd2FpdCB3cml0YWJsZS53cml0ZShjb250ZW50KVxuICBhd2FpdCB3cml0YWJsZS5jbG9zZSgpXG59XG5cbi8vIGRpckhhbmRsZS5lbnRyaWVzKCkgaXNuJ3QgaW4gZXZlcnkgVFMgbGliOyBhY2Nlc3MgdmlhIGEgbG9vc2UgdHlwZS5cbmZ1bmN0aW9uIGVudHJpZXNPZihcbiAgZGlyOiBGaWxlU3lzdGVtRGlyZWN0b3J5SGFuZGxlLFxuKTogQXN5bmNJdGVyYWJsZTxbc3RyaW5nLCBGaWxlU3lzdGVtSGFuZGxlXT4ge1xuICByZXR1cm4gKFxuICAgIGRpciBhcyB1bmtub3duIGFzIHtcbiAgICAgIGVudHJpZXMoKTogQXN5bmNJdGVyYWJsZTxbc3RyaW5nLCBGaWxlU3lzdGVtSGFuZGxlXT5cbiAgICB9XG4gICkuZW50cmllcygpXG59XG5cbmZ1bmN0aW9uIGpvaW4oYmFzZTogc3RyaW5nLCBuYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gYmFzZSA/IGAke2Jhc2V9LyR7bmFtZX1gIDogbmFtZVxufVxuXG5mdW5jdGlvbiBnbG9iVG9SZWdFeHAoZ2xvYjogc3RyaW5nKTogUmVnRXhwIHtcbiAgbGV0IHJlID0gJydcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBnbG9iLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgYyA9IGdsb2JbaV1cbiAgICBpZiAoYyA9PT0gJyonKSB7XG4gICAgICBpZiAoZ2xvYltpICsgMV0gPT09ICcqJykge1xuICAgICAgICByZSArPSAnLionXG4gICAgICAgIGkrK1xuICAgICAgICBpZiAoZ2xvYltpICsgMV0gPT09ICcvJykge1xuICAgICAgICAgIGkrK1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZSArPSAnW14vXSonXG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChjID09PSAnPycpIHtcbiAgICAgIHJlICs9ICdbXi9dJ1xuICAgIH0gZWxzZSBpZiAoJy4rXiR7fSgpfFtdXFxcXCcuaW5jbHVkZXMoYykpIHtcbiAgICAgIHJlICs9ICdcXFxcJyArIGNcbiAgICB9IGVsc2Uge1xuICAgICAgcmUgKz0gY1xuICAgIH1cbiAgfVxuICByZXR1cm4gbmV3IFJlZ0V4cCgnXicgKyByZSArICckJylcbn1cblxuLy8gUmVjdXJzaXZlbHkgeWllbGRzIHRoZSByZWxhdGl2ZSBwYXRoIG9mIGV2ZXJ5IGZpbGUgdW5kZXIgfGRpcnwuXG5hc3luYyBmdW5jdGlvbiogd2Fsa0ZpbGVzKFxuICBkaXI6IEZpbGVTeXN0ZW1EaXJlY3RvcnlIYW5kbGUsXG4gIHByZWZpeCA9ICcnLFxuKTogQXN5bmNHZW5lcmF0b3I8eyBwYXRoOiBzdHJpbmc7IGhhbmRsZTogRmlsZVN5c3RlbUZpbGVIYW5kbGUgfT4ge1xuICBmb3IgYXdhaXQgKGNvbnN0IFtuYW1lLCBoYW5kbGVdIG9mIGVudHJpZXNPZihkaXIpKSB7XG4gICAgY29uc3QgcmVsID0gam9pbihwcmVmaXgsIG5hbWUpXG4gICAgaWYgKGhhbmRsZS5raW5kID09PSAnZGlyZWN0b3J5Jykge1xuICAgICAgeWllbGQqIHdhbGtGaWxlcyhoYW5kbGUgYXMgRmlsZVN5c3RlbURpcmVjdG9yeUhhbmRsZSwgcmVsKVxuICAgIH0gZWxzZSB7XG4gICAgICB5aWVsZCB7IHBhdGg6IHJlbCwgaGFuZGxlOiBoYW5kbGUgYXMgRmlsZVN5c3RlbUZpbGVIYW5kbGUgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbGlzdERpcihcbiAgcm9vdDogRmlsZVN5c3RlbURpcmVjdG9yeUhhbmRsZSxcbiAgcGF0aDogc3RyaW5nLFxuICBkZXB0aDogbnVtYmVyLFxuKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgY29uc3Qgc3RhcnQgPSBhd2FpdCBnZXREaXIocm9vdCwgcGF0aClcbiAgY29uc3QgbGluZXM6IHN0cmluZ1tdID0gW11cbiAgY29uc3QgbWF4RGVwdGggPSBkZXB0aCAmJiBkZXB0aCA+IDAgPyBkZXB0aCA6IDJcblxuICBhc3luYyBmdW5jdGlvbiByZWN1cnNlKFxuICAgIGRpcjogRmlsZVN5c3RlbURpcmVjdG9yeUhhbmRsZSxcbiAgICByZWw6IHN0cmluZyxcbiAgICBkOiBudW1iZXIsXG4gICkge1xuICAgIGNvbnN0IG5hbWVzOiBBcnJheTxbc3RyaW5nLCBGaWxlU3lzdGVtSGFuZGxlXT4gPSBbXVxuICAgIGZvciBhd2FpdCAoY29uc3QgZW50cnkgb2YgZW50cmllc09mKGRpcikpIHtcbiAgICAgIG5hbWVzLnB1c2goZW50cnkpXG4gICAgfVxuICAgIG5hbWVzLnNvcnQoKGEsIGIpID0+IGFbMF0ubG9jYWxlQ29tcGFyZShiWzBdKSlcbiAgICBmb3IgKGNvbnN0IFtuYW1lLCBoYW5kbGVdIG9mIG5hbWVzKSB7XG4gICAgICBjb25zdCBjaGlsZFJlbCA9IGpvaW4ocmVsLCBuYW1lKVxuICAgICAgaWYgKGhhbmRsZS5raW5kID09PSAnZGlyZWN0b3J5Jykge1xuICAgICAgICBsaW5lcy5wdXNoKGAke2NoaWxkUmVsfS9gKVxuICAgICAgICBpZiAoZCA8IG1heERlcHRoKSB7XG4gICAgICAgICAgYXdhaXQgcmVjdXJzZShoYW5kbGUgYXMgRmlsZVN5c3RlbURpcmVjdG9yeUhhbmRsZSwgY2hpbGRSZWwsIGQgKyAxKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsaW5lcy5wdXNoKGNoaWxkUmVsKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGF3YWl0IHJlY3Vyc2Uoc3RhcnQsIHBhdGgucmVwbGFjZSgvXFwvKyQvLCAnJykucmVwbGFjZSgvXlxcLysvLCAnJyksIDEpXG4gIHJldHVybiBsaW5lcy5sZW5ndGggPyBsaW5lcy5qb2luKCdcXG4nKSA6ICcoZW1wdHkpJ1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdmlld0ZpbGUoXG4gIHJvb3Q6IEZpbGVTeXN0ZW1EaXJlY3RvcnlIYW5kbGUsXG4gIHBhdGg6IHN0cmluZyxcbiAgcmFuZ2U6IG51bWJlcltdIHwgdW5kZWZpbmVkLFxuKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgY29uc3QgdGV4dCA9IGF3YWl0IHJlYWRUZXh0KHJvb3QsIHBhdGgpXG4gIGNvbnN0IGxpbmVzID0gdGV4dC5zcGxpdCgnXFxuJylcbiAgbGV0IHN0YXJ0ID0gMVxuICBsZXQgZW5kID0gbGluZXMubGVuZ3RoXG4gIGlmIChyYW5nZSAmJiByYW5nZS5sZW5ndGggPj0gMSkge1xuICAgIHN0YXJ0ID0gTWF0aC5tYXgoMSwgcmFuZ2VbMF0pXG4gIH1cbiAgaWYgKHJhbmdlICYmIHJhbmdlLmxlbmd0aCA+PSAyICYmIHJhbmdlWzFdICE9PSAtMSkge1xuICAgIGVuZCA9IE1hdGgubWluKGxpbmVzLmxlbmd0aCwgcmFuZ2VbMV0pXG4gIH1cbiAgY29uc3Qgb3V0OiBzdHJpbmdbXSA9IFtdXG4gIGZvciAobGV0IGkgPSBzdGFydDsgaSA8PSBlbmQ7IGkrKykge1xuICAgIG91dC5wdXNoKGAke2l9XFx0JHtsaW5lc1tpIC0gMV0gPz8gJyd9YClcbiAgfVxuICByZXR1cm4gb3V0LmpvaW4oJ1xcbicpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBncmVwKFxuICByb290OiBGaWxlU3lzdGVtRGlyZWN0b3J5SGFuZGxlLFxuICBwYXRoOiBzdHJpbmcsXG4gIHBhdHRlcm46IHN0cmluZyxcbiAgaW5jbHVkZTogc3RyaW5nLFxuKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgY29uc3QgcmUgPSBuZXcgUmVnRXhwKHBhdHRlcm4pXG4gIGNvbnN0IGluY2x1ZGVSZSA9IGluY2x1ZGUgPyBnbG9iVG9SZWdFeHAoaW5jbHVkZSkgOiBudWxsXG4gIGNvbnN0IGRpciA9IGF3YWl0IGdldERpcihyb290LCBwYXRoKVxuICBjb25zdCBiYXNlID0gcGF0aC5yZXBsYWNlKC9cXC8rJC8sICcnKS5yZXBsYWNlKC9eXFwvKy8sICcnKVxuICBjb25zdCBtYXRjaGVzOiBzdHJpbmdbXSA9IFtdXG4gIGZvciBhd2FpdCAoY29uc3QgeyBwYXRoOiByZWwsIGhhbmRsZSB9IG9mIHdhbGtGaWxlcyhkaXIsIGJhc2UpKSB7XG4gICAgaWYgKGluY2x1ZGVSZSAmJiAhaW5jbHVkZVJlLnRlc3QocmVsKSAmJiAhaW5jbHVkZVJlLnRlc3QoYmFzZW5hbWUocmVsKSkpIHtcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuICAgIGxldCB0ZXh0OiBzdHJpbmdcbiAgICB0cnkge1xuICAgICAgdGV4dCA9IGF3YWl0IChhd2FpdCBoYW5kbGUuZ2V0RmlsZSgpKS50ZXh0KClcbiAgICB9IGNhdGNoIHtcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuICAgIGNvbnN0IGZpbGVMaW5lcyA9IHRleHQuc3BsaXQoJ1xcbicpXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWxlTGluZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChyZS50ZXN0KGZpbGVMaW5lc1tpXSkpIHtcbiAgICAgICAgbWF0Y2hlcy5wdXNoKGAke3JlbH06JHtpICsgMX06ICR7ZmlsZUxpbmVzW2ldfWApXG4gICAgICAgIGlmIChtYXRjaGVzLmxlbmd0aCA+PSBrTWF4R3JlcE1hdGNoZXMpIHtcbiAgICAgICAgICBtYXRjaGVzLnB1c2goYC4uLiAodHJ1bmNhdGVkIGF0ICR7a01heEdyZXBNYXRjaGVzfSBtYXRjaGVzKWApXG4gICAgICAgICAgcmV0dXJuIG1hdGNoZXMuam9pbignXFxuJylcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gbWF0Y2hlcy5sZW5ndGggPyBtYXRjaGVzLmpvaW4oJ1xcbicpIDogJyhubyBtYXRjaGVzKSdcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdsb2IoXG4gIHJvb3Q6IEZpbGVTeXN0ZW1EaXJlY3RvcnlIYW5kbGUsXG4gIHBhdGg6IHN0cmluZyxcbiAgcGF0dGVybjogc3RyaW5nLFxuKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgY29uc3QgcmUgPSBnbG9iVG9SZWdFeHAocGF0dGVybilcbiAgY29uc3QgZGlyID0gYXdhaXQgZ2V0RGlyKHJvb3QsIHBhdGgpXG4gIGNvbnN0IGJhc2UgPSBwYXRoLnJlcGxhY2UoL1xcLyskLywgJycpLnJlcGxhY2UoL15cXC8rLywgJycpXG4gIGNvbnN0IHJlc3VsdHM6IHN0cmluZ1tdID0gW11cbiAgZm9yIGF3YWl0IChjb25zdCB7IHBhdGg6IHJlbCB9IG9mIHdhbGtGaWxlcyhkaXIsIGJhc2UpKSB7XG4gICAgaWYgKHJlLnRlc3QocmVsKSB8fCByZS50ZXN0KGJhc2VuYW1lKHJlbCkpKSB7XG4gICAgICByZXN1bHRzLnB1c2gocmVsKVxuICAgICAgaWYgKHJlc3VsdHMubGVuZ3RoID49IGtNYXhHbG9iUmVzdWx0cykge1xuICAgICAgICByZXN1bHRzLnB1c2goYC4uLiAodHJ1bmNhdGVkIGF0ICR7a01heEdsb2JSZXN1bHRzfSByZXN1bHRzKWApXG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHRzLmxlbmd0aCA/IHJlc3VsdHMuam9pbignXFxuJykgOiAnKG5vIG1hdGNoZXMpJ1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYXBwZW5kRmlsZShcbiAgcm9vdDogRmlsZVN5c3RlbURpcmVjdG9yeUhhbmRsZSxcbiAgcGF0aDogc3RyaW5nLFxuICBjb250ZW50OiBzdHJpbmcsXG4pOiBQcm9taXNlPHN0cmluZz4ge1xuICBjb25zdCBleGlzdGVkID0gYXdhaXQgZmlsZUV4aXN0cyhyb290LCBwYXRoKVxuICBjb25zdCBwcmV2aW91cyA9IGV4aXN0ZWQgPyBhd2FpdCByZWFkVGV4dChyb290LCBwYXRoKSA6ICcnXG4gIGF3YWl0IHdyaXRlVGV4dChyb290LCBwYXRoLCBwcmV2aW91cyArIGNvbnRlbnQpXG4gIHJldHVybiBgQXBwZW5kZWQgJHtjb250ZW50Lmxlbmd0aH0gYnl0ZXMgdG8gJHtwYXRofWBcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUZpbGUoXG4gIHJvb3Q6IEZpbGVTeXN0ZW1EaXJlY3RvcnlIYW5kbGUsXG4gIHBhdGg6IHN0cmluZyxcbiAgZmlsZVRleHQ6IHN0cmluZyxcbik6IFByb21pc2U8c3RyaW5nPiB7XG4gIC8vIE1hdGNoZXMgdGhlIHRleHQtZWRpdG9yIGBjcmVhdGVgIHNlbWFudGljczogY3JlYXRlcyB0aGUgZmlsZSwgb3ZlcndyaXRpbmdcbiAgLy8gaXQgaWYgaXQgYWxyZWFkeSBleGlzdHMuXG4gIGNvbnN0IGV4aXN0ZWQgPSBhd2FpdCBmaWxlRXhpc3RzKHJvb3QsIHBhdGgpXG4gIGF3YWl0IHdyaXRlVGV4dChyb290LCBwYXRoLCBmaWxlVGV4dClcbiAgcmV0dXJuIGAke2V4aXN0ZWQgPyAnT3Zlcndyb3RlJyA6ICdDcmVhdGVkJ30gJHtwYXRofSAoJHtmaWxlVGV4dC5sZW5ndGh9IGJ5dGVzKWBcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHN0clJlcGxhY2UoXG4gIHJvb3Q6IEZpbGVTeXN0ZW1EaXJlY3RvcnlIYW5kbGUsXG4gIHBhdGg6IHN0cmluZyxcbiAgb2xkU3RyOiBzdHJpbmcsXG4gIG5ld1N0cjogc3RyaW5nLFxuKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgY29uc3QgdGV4dCA9IGF3YWl0IHJlYWRUZXh0KHJvb3QsIHBhdGgpXG4gIGNvbnN0IGZpcnN0ID0gdGV4dC5pbmRleE9mKG9sZFN0cilcbiAgaWYgKGZpcnN0ID09PSAtMSkge1xuICAgIHRocm93IG5ldyBFcnJvcignb2xkX3N0ciB3YXMgbm90IGZvdW5kIGluIHRoZSBmaWxlJylcbiAgfVxuICBpZiAodGV4dC5pbmNsdWRlcyhvbGRTdHIsIGZpcnN0ICsgMSkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ29sZF9zdHIgaXMgbm90IHVuaXF1ZSBpbiB0aGUgZmlsZScpXG4gIH1cbiAgY29uc3QgdXBkYXRlZCA9XG4gICAgdGV4dC5zbGljZSgwLCBmaXJzdCkgKyBuZXdTdHIgKyB0ZXh0LnNsaWNlKGZpcnN0ICsgb2xkU3RyLmxlbmd0aClcbiAgYXdhaXQgd3JpdGVUZXh0KHJvb3QsIHBhdGgsIHVwZGF0ZWQpXG4gIHJldHVybiBgUmVwbGFjZWQgdGV4dCBpbiAke3BhdGh9YFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaW5zZXJ0KFxuICByb290OiBGaWxlU3lzdGVtRGlyZWN0b3J5SGFuZGxlLFxuICBwYXRoOiBzdHJpbmcsXG4gIGluc2VydExpbmU6IG51bWJlcixcbiAgbmV3U3RyOiBzdHJpbmcsXG4pOiBQcm9taXNlPHN0cmluZz4ge1xuICBjb25zdCB0ZXh0ID0gYXdhaXQgcmVhZFRleHQocm9vdCwgcGF0aClcbiAgY29uc3QgbGluZXMgPSB0ZXh0LnNwbGl0KCdcXG4nKVxuICBjb25zdCBhdCA9IE1hdGgubWF4KDAsIE1hdGgubWluKGluc2VydExpbmUsIGxpbmVzLmxlbmd0aCkpXG4gIGNvbnN0IGluc2VydGVkID0gbmV3U3RyLnNwbGl0KCdcXG4nKVxuICBsaW5lcy5zcGxpY2UoYXQsIDAsIC4uLmluc2VydGVkKVxuICBhd2FpdCB3cml0ZVRleHQocm9vdCwgcGF0aCwgbGluZXMuam9pbignXFxuJykpXG4gIHJldHVybiBgSW5zZXJ0ZWQgJHtpbnNlcnRlZC5sZW5ndGh9IGxpbmUocykgaW50byAke3BhdGh9IGFmdGVyIGxpbmUgJHthdH1gXG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjYgVGhlIEJyYXZlIEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4vLyBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIGZpbGUsXG4vLyBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cHM6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy5cblxuLy8gcG9zdE1lc3NhZ2UgYnJpZGdlIHRoYXQgbGV0cyB0aGUgYHZpZXcuYCBzaWJsaW5nIG9yaWdpbiByZWFkIGZpbGVzIG91dCBvZiB0aGVcbi8vIHdvcmtzcGFjZSBmb2xkZXIuIE9ubHkgdGhhdCBvcmlnaW4gaXMgYWNjZXB0ZWQ6IHRoZSB3b3Jrc3BhY2UgaG9sZHMgYW5cbi8vIGF1dG8tZ3JhbnRlZCBGaWxlIFN5c3RlbSBBY2Nlc3MgaGFuZGxlIHRvIGEgdXNlci1waWNrZWQgZm9sZGVyLlxuXG5pbXBvcnQgeyByZWFkRmlsZSB9IGZyb20gJy4vZmlsZV9vcHMnXG5cbmV4cG9ydCBjb25zdCBrUmVhZEZpbGVSZXF1ZXN0ID0gJ1JFQURfRklMRSdcbmV4cG9ydCBjb25zdCBrUmVhZEZpbGVSZXNwb25zZSA9ICdSRUFEX0ZJTEVfUkVTVUxUJ1xuXG5pbnRlcmZhY2UgUmVhZEZpbGVSZXNwb25zZSB7XG4gIHR5cGU6IHR5cGVvZiBrUmVhZEZpbGVSZXNwb25zZVxuICByZXF1ZXN0SWQ/OiB1bmtub3duXG4gIC8vIEEgRmlsZSAoaS5lLiBhIEJsb2IpLCBzbyBhcmJpdHJhcnkgYmluYXJ5IGNvbnRlbnQgc3Vydml2ZXMgYW5kIGEgbGFyZ2UgZmlsZVxuICAvLyBpc24ndCBjb3BpZWQgaW50byB0aGUgbWVzc2FnZS5cbiAgZmlsZT86IEZpbGVcbiAgZXJyb3I/OiBzdHJpbmdcbn1cblxuY29uc3Qga1NjaGVtZSA9ICdjaHJvbWUtdW50cnVzdGVkOi8vJ1xuXG4vLyBjaHJvbWUtdW50cnVzdGVkOi8vbGVvLXdvcmtzcGFjZSAtPiBjaHJvbWUtdW50cnVzdGVkOi8vdmlldy5sZW8td29ya3NwYWNlLlxuLy8gRGVyaXZlZCBhdCBydW50aW1lIHNvIGl0IGZvbGxvd3MgdGhlIHdvcmtzcGFjZSBob3N0LCBhbmQgJycgZm9yIGFueXRoaW5nIHRoYXRcbi8vIGlzbid0IGEgY2hyb21lLXVudHJ1c3RlZCBvcmlnaW4sIHdoaWNoIG11c3QgbmV2ZXIgYmUgdHJ1c3RlZC5cbmV4cG9ydCBmdW5jdGlvbiB2aWV3T3JpZ2luKG9yaWdpbjogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIG9yaWdpbi5zdGFydHNXaXRoKGtTY2hlbWUpXG4gICAgPyBvcmlnaW4ucmVwbGFjZShrU2NoZW1lLCBgJHtrU2NoZW1lfXZpZXcuYClcbiAgICA6ICcnXG59XG5cbmFzeW5jIGZ1bmN0aW9uIHJlYWRGaWxlUGF5bG9hZChcbiAgcm9vdDogUHJvbWlzZTxGaWxlU3lzdGVtRGlyZWN0b3J5SGFuZGxlPixcbiAgcGF0aDogdW5rbm93bixcbik6IFByb21pc2U8eyBmaWxlPzogRmlsZTsgZXJyb3I/OiBzdHJpbmcgfT4ge1xuICAvLyBDaGVja2VkIGJlZm9yZSBhd2FpdGluZyB0aGUgaGFuZGxlIHNvIGEgbWFsZm9ybWVkIHJlcXVlc3QgZmFpbHMgZmFzdC5cbiAgaWYgKHR5cGVvZiBwYXRoICE9PSAnc3RyaW5nJyB8fCBwYXRoID09PSAnJykge1xuICAgIHJldHVybiB7IGVycm9yOiAnUkVBRF9GSUxFIHJlcXVpcmVzIGEgbm9uLWVtcHR5IHN0cmluZyBcInBhdGhcIicgfVxuICB9XG4gIHRyeSB7XG4gICAgLy8gQWRkIGEgdGltZW91dCBzbyB3ZSBkb24ndCBoYW5nIGZvcmV2ZXIgd2FpdGluZyBmb3IgdGhlIGRpcmVjdG9yeSBoYW5kbGVcbiAgICBjb25zdCB0aW1lb3V0UHJvbWlzZSA9IG5ldyBQcm9taXNlPG5ldmVyPigoX3Jlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgc2V0VGltZW91dChcbiAgICAgICAgKCkgPT4gcmVqZWN0KG5ldyBFcnJvcignV29ya3NwYWNlIGZvbGRlciBub3QgYXZhaWxhYmxlICh0aW1lb3V0KScpKSxcbiAgICAgICAgNTAwMCxcbiAgICAgIClcbiAgICB9KVxuICAgIGNvbnN0IGhhbmRsZSA9IGF3YWl0IFByb21pc2UucmFjZShbcm9vdCwgdGltZW91dFByb21pc2VdKVxuICAgIHJldHVybiB7IGZpbGU6IGF3YWl0IHJlYWRGaWxlKGhhbmRsZSwgcGF0aCkgfVxuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIHsgZXJyb3I6IGUgaW5zdGFuY2VvZiBFcnJvciA/IGUubWVzc2FnZSA6IFN0cmluZyhlKSB9XG4gIH1cbn1cblxuLy8gfHJvb3R8IHJlc29sdmVzIHdoZW4gdGhlIGRpcmVjdG9yeSBoYW5kbGUgYXJyaXZlcyB2aWEgbGF1bmNoUXVldWUsIHNvIGFcbi8vIHJlcXVlc3QgdGhhdCByYWNlcyBhaGVhZCBvZiBpdCBpcyBzZXJ2ZWQgb25jZSBpdCBsYW5kcy5cbmV4cG9ydCBmdW5jdGlvbiBpbnN0YWxsTWVzc2FnZUhhbmRsZXIoXG4gIHJvb3Q6IFByb21pc2U8RmlsZVN5c3RlbURpcmVjdG9yeUhhbmRsZT4sXG4gIG9yaWdpbiA9IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4sXG4pIHtcbiAgY29uc3QgdGFyZ2V0T3JpZ2luID0gdmlld09yaWdpbihvcmlnaW4pXG4gIGlmICghdGFyZ2V0T3JpZ2luKSB7XG4gICAgY29uc29sZS5lcnJvcignW2xlby13b3Jrc3BhY2VdIG5vIHZpZXdlciBvcmlnaW4gdG8gYWNjZXB0IG1lc3NhZ2VzIGZyb20nKVxuICAgIHJldHVyblxuICB9XG4gIGNvbnNvbGUuZGVidWcoXG4gICAgJ1tsZW8td29ya3NwYWNlXSBtZXNzYWdlIGhhbmRsZXIgaW5zdGFsbGVkLCBhY2NlcHRpbmcgZnJvbScsXG4gICAgdGFyZ2V0T3JpZ2luLFxuICApXG5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBhc3luYyAoZXZlbnQ6IE1lc3NhZ2VFdmVudCkgPT4ge1xuICAgIGNvbnNvbGUuZGVidWcoXG4gICAgICAnW2xlby13b3Jrc3BhY2VdIHJlY2VpdmVkIG1lc3NhZ2UgZnJvbScsXG4gICAgICBldmVudC5vcmlnaW4sXG4gICAgICBldmVudC5kYXRhLFxuICAgIClcbiAgICBpZiAoZXZlbnQub3JpZ2luICE9PSB0YXJnZXRPcmlnaW4pIHtcbiAgICAgIGNvbnNvbGUuZGVidWcoXG4gICAgICAgICdbbGVvLXdvcmtzcGFjZV0gaWdub3JpbmcgbWVzc2FnZSBmcm9tIHdyb25nIG9yaWdpbiwgZXhwZWN0ZWQnLFxuICAgICAgICB0YXJnZXRPcmlnaW4sXG4gICAgICApXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgY29uc3QgZGF0YSA9IGV2ZW50LmRhdGEgYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj4gfCBudWxsXG4gICAgaWYgKFxuICAgICAgdHlwZW9mIGRhdGEgIT09ICdvYmplY3QnXG4gICAgICB8fCBkYXRhID09PSBudWxsXG4gICAgICB8fCBkYXRhLnR5cGUgIT09IGtSZWFkRmlsZVJlcXVlc3RcbiAgICApIHtcbiAgICAgIGNvbnNvbGUuZGVidWcoJ1tsZW8td29ya3NwYWNlXSBpZ25vcmluZyBub24tUkVBRF9GSUxFIG1lc3NhZ2UnKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIC8vIFJlcGx5IHRvIHRoZSBzZW5kZXIgd2l0aCBhbiBleHBsaWNpdCB0YXJnZXQgb3JpZ2luLCBuZXZlciAnKicuXG4gICAgY29uc3Qgc291cmNlID0gZXZlbnQuc291cmNlIGFzIFdpbmRvdyB8IG51bGxcbiAgICBpZiAoIXNvdXJjZSkge1xuICAgICAgY29uc29sZS5lcnJvcignW2xlby13b3Jrc3BhY2VdIFJFQURfRklMRSBoYXMgbm8gc291cmNlIHRvIHJlcGx5IHRvJylcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBjb25zb2xlLmRlYnVnKCdbbGVvLXdvcmtzcGFjZV0gcHJvY2Vzc2luZyBSRUFEX0ZJTEUgZm9yIHBhdGg6JywgZGF0YS5wYXRoKVxuICAgIGNvbnN0IHJlc3BvbnNlOiBSZWFkRmlsZVJlc3BvbnNlID0ge1xuICAgICAgdHlwZToga1JlYWRGaWxlUmVzcG9uc2UsXG4gICAgICByZXF1ZXN0SWQ6IGRhdGEucmVxdWVzdElkLFxuICAgICAgLi4uKGF3YWl0IHJlYWRGaWxlUGF5bG9hZChyb290LCBkYXRhLnBhdGgpKSxcbiAgICB9XG4gICAgY29uc29sZS5kZWJ1ZyhcbiAgICAgICdbbGVvLXdvcmtzcGFjZV0gc2VuZGluZyByZXNwb25zZTonLFxuICAgICAgcmVzcG9uc2UuZXJyb3IgfHwgJ2ZpbGUgbG9hZGVkJyxcbiAgICApXG4gICAgc291cmNlLnBvc3RNZXNzYWdlKHJlc3BvbnNlLCB0YXJnZXRPcmlnaW4pXG4gIH0pXG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjYgVGhlIEJyYXZlIEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4vLyBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIGZpbGUsXG4vLyBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cHM6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy5cblxuLy8gUmVnaXN0ZXJzIHRoZSB3b3Jrc3BhY2UgZmlsZSB0b29scyB3aXRoIExlbyB2aWEgdGhlIFdlYk1DUCBBUElcbi8vIChkb2N1bWVudC5tb2RlbENvbnRleHQpLiBUaGUgZWRpdGluZyB0b29sIGZvbGxvd3MgQW50aHJvcGljJ3MgdGV4dC1lZGl0b3Jcbi8vIHRvb2wgKFwic3RyX3JlcGxhY2VfYmFzZWRfZWRpdF90b29sXCIpOiBhIGBjb21tYW5kYCBlbnVtIChjcmVhdGUgLyBzdHJfcmVwbGFjZVxuLy8gLyBpbnNlcnQpIHdpdGggbWF0Y2hpbmcgcGFyYW1ldGVyIG5hbWVzLCBzbyBpdCBsYW5kcyBpbiB0aGUgbW9kZWwncyB0cmFpbmluZ1xuLy8gZGlzdHJpYnV0aW9uLiBJdHMgYHZpZXdgIGNvbW1hbmQgaXMgc3BsaXQgb3V0IGludG8gYSBzZXBhcmF0ZSByZWFkLW9ubHlcbi8vIGB2aWV3YCB0b29sIGJlY2F1c2UgdGhlIHVzZXIgZ3JhbnRzIHBlcm1pc3Npb24gcGVyIHRvb2w6IGlmIHZpZXcgYW5kIGVkaXRcbi8vIHNoYXJlZCBhIHRvb2wsIGFsbG93aW5nIHRoZSBtb2RlbCB0byByZWFkIGZpbGVzIHdvdWxkIGFsc28gYWxsb3cgaXQgdG9cbi8vIG1vZGlmeSB0aGVtLiBTZWFyY2ggYW5kIHJlcG8tc3RydWN0dXJlIGhlbHBlcnMgd2l0aCBubyB0ZXh0LWVkaXRvciBhbmFsb2dcbi8vIGFyZSByZWdpc3RlcmVkIGFzIHNlcGFyYXRlIGF1eGlsaWFyeSB0b29scy4gQWxsIG9wcyBydW4gYWdhaW5zdCB0aGVcbi8vIEZpbGVTeXN0ZW1EaXJlY3RvcnlIYW5kbGUgaW4gZmlsZV9vcHMsIHdoaWNoIGlzIHJlc29sdmVkIGxhemlseSBvbiBlYWNoIGNhbGxcbi8vIChzZWUgcmVnaXN0ZXJUb29scykuXG5cbmltcG9ydCAqIGFzIG9wcyBmcm9tICcuL2ZpbGVfb3BzJ1xuXG5pbnRlcmZhY2UgTW9kZWxDb250ZXh0VG9vbCB7XG4gIG5hbWU6IHN0cmluZ1xuICBkZXNjcmlwdGlvbjogc3RyaW5nXG4gIGlucHV0U2NoZW1hPzogb2JqZWN0XG4gIGV4ZWN1dGU6IChpbnB1dDogUmVjb3JkPHN0cmluZywgdW5rbm93bj4pID0+IFByb21pc2U8dW5rbm93bj5cbn1cbmludGVyZmFjZSBNb2RlbENvbnRleHQge1xuICByZWdpc3RlclRvb2wodG9vbDogTW9kZWxDb250ZXh0VG9vbCk6IFByb21pc2U8dm9pZD5cbn1cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIERvY3VtZW50IHtcbiAgICBtb2RlbENvbnRleHQ/OiBNb2RlbENvbnRleHRcbiAgfVxufVxuXG5mdW5jdGlvbiBzY2hlbWEoXG4gIHByb3BlcnRpZXM6IFJlY29yZDxzdHJpbmcsIG9iamVjdD4sXG4gIHJlcXVpcmVkPzogc3RyaW5nW10sXG4pOiBvYmplY3Qge1xuICByZXR1cm4geyB0eXBlOiAnb2JqZWN0JywgcHJvcGVydGllcywgcmVxdWlyZWQ6IHJlcXVpcmVkID8/IFtdIH1cbn1cbmNvbnN0IHN0ciA9IChkZXNjcmlwdGlvbjogc3RyaW5nKSA9PiAoeyB0eXBlOiAnc3RyaW5nJywgZGVzY3JpcHRpb24gfSlcbmNvbnN0IGludCA9IChkZXNjcmlwdGlvbjogc3RyaW5nKSA9PiAoeyB0eXBlOiAnaW50ZWdlcicsIGRlc2NyaXB0aW9uIH0pXG5jb25zdCBzdHJFbnVtID0gKHZhbHVlczogc3RyaW5nW10sIGRlc2NyaXB0aW9uOiBzdHJpbmcpID0+ICh7XG4gIHR5cGU6ICdzdHJpbmcnLFxuICBlbnVtOiB2YWx1ZXMsXG4gIGRlc2NyaXB0aW9uLFxufSlcbmNvbnN0IGludEFycmF5ID0gKGRlc2NyaXB0aW9uOiBzdHJpbmcpID0+ICh7XG4gIHR5cGU6ICdhcnJheScsXG4gIGRlc2NyaXB0aW9uLFxuICBpdGVtczogeyB0eXBlOiAnaW50ZWdlcicgfSxcbn0pXG5cbmZ1bmN0aW9uIGFzU3RyaW5nKHY6IHVua25vd24pOiBzdHJpbmcge1xuICByZXR1cm4gdHlwZW9mIHYgPT09ICdzdHJpbmcnID8gdiA6ICcnXG59XG5mdW5jdGlvbiBhc0ludCh2OiB1bmtub3duLCBmYWxsYmFjazogbnVtYmVyKTogbnVtYmVyIHtcbiAgcmV0dXJuIHR5cGVvZiB2ID09PSAnbnVtYmVyJyA/IHYgOiBmYWxsYmFja1xufVxuXG4vLyB8Z2V0Um9vdHwgaXMgY2FsbGVkIGVhY2ggdGltZSBhIHRvb2wgcnVucywgcmF0aGVyIHRoYW4gb25jZSB1cCBmcm9udCwgc28gdGhlXG4vLyB0b29scyBjYW4gYmUgcmVnaXN0ZXJlZCBiZWZvcmUgdGhlIHdvcmtzcGFjZSBoYXMgYSBmb2xkZXIgYW5kIHRoZSBmb2xkZXIgY2FuXG4vLyBiZSBjaG9zZW4gdGhlIGZpcnN0IHRpbWUgb25lIGlzIGFjdHVhbGx5IG5lZWRlZC5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZWdpc3RlclRvb2xzKFxuICBnZXRSb290OiAoKSA9PiBQcm9taXNlPEZpbGVTeXN0ZW1EaXJlY3RvcnlIYW5kbGU+LFxuKTogUHJvbWlzZTx2b2lkPiB7XG4gIGNvbnN0IG1jID0gZG9jdW1lbnQubW9kZWxDb250ZXh0XG4gIGlmICghbWMpIHtcbiAgICBjb25zb2xlLmVycm9yKCdbbGVvLXdvcmtzcGFjZV0gZG9jdW1lbnQubW9kZWxDb250ZXh0IGlzIHVuYXZhaWxhYmxlJylcbiAgICByZXR1cm5cbiAgfVxuXG4gIC8vIFJlZ2lzdGVyZWQgYWxsIGF0IG9uY2UsIHJhdGhlciB0aGFuIG9uZSBhZnRlciBhbm90aGVyLCBzbyBldmVyeSB0b29sIGlzXG4gIC8vIHJlZ2lzdGVyZWQgc3luY2hyb25vdXNseSwgYmVmb3JlIHRoZSBwYWdlIGZpbmlzaGVzIGxvYWRpbmc6IHRoZSBicm93c2VyXG4gIC8vIHJlYWRzIHRoZSBwYWdlJ3MgdG9vbHMgb25jZSBpdCBoYXMgbG9hZGVkIChzZWVcbiAgLy8gQXNzb2NpYXRlZENvbnRlbnRNYW5hZ2VyOjpPblRvb2xzQXR0YWNoZWRDaGFuZ2VkKSwgYW5kIHJlZ2lzdGVyVG9vbCgpIG9ubHlcbiAgLy8gcmVzb2x2ZXMgYWZ0ZXIgYSByb3VuZCB0cmlwIHRvIHRoZSBicm93c2VyLlxuICBjb25zdCByZWdpc3RyYXRpb25zOiBBcnJheTxQcm9taXNlPHZvaWQ+PiA9IFtdXG4gIGNvbnN0IHJlZyA9IChcbiAgICBuYW1lOiBzdHJpbmcsXG4gICAgZGVzY3JpcHRpb246IHN0cmluZyxcbiAgICBpbnB1dFNjaGVtYTogb2JqZWN0LFxuICAgIHJ1bjogKFxuICAgICAgcm9vdDogRmlsZVN5c3RlbURpcmVjdG9yeUhhbmRsZSxcbiAgICAgIGlucHV0OiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPixcbiAgICApID0+IFByb21pc2U8c3RyaW5nPixcbiAgKSA9PlxuICAgIHJlZ2lzdHJhdGlvbnMucHVzaChcbiAgICAgIG1jLnJlZ2lzdGVyVG9vbCh7XG4gICAgICAgIG5hbWUsXG4gICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICBpbnB1dFNjaGVtYSxcbiAgICAgICAgZXhlY3V0ZTogYXN5bmMgKGlucHV0KSA9PiB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCBydW4oYXdhaXQgZ2V0Um9vdCgpLCBpbnB1dCA/PyB7fSlcbiAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICByZXR1cm4gYEVycm9yOiAke2UgaW5zdGFuY2VvZiBFcnJvciA/IGUubWVzc2FnZSA6IFN0cmluZyhlKX1gXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgfSksXG4gICAgKVxuXG4gIC8vIFJlYWQtb25seSwgYW5kIGRlbGliZXJhdGVseSBhIHNlcGFyYXRlIHRvb2wgZnJvbSB0aGUgZWRpdG9yIGJlbG93IHNvIHRoYXRcbiAgLy8gcGVybWlzc2lvbiB0byByZWFkIHRoZSB3b3Jrc3BhY2UgZG9lc24ndCBhbHNvIGdyYW50IHBlcm1pc3Npb24gdG8gd3JpdGVcbiAgLy8gaXQuIFBhdGhzIGFyZSByZWxhdGl2ZSB0byB0aGUgd29ya3NwYWNlIHJvb3QgYW5kIGNvbmZpbmVkIHRvIGl0IGJ5IHRoZVxuICAvLyBGaWxlIFN5c3RlbSBBY2Nlc3MgQVBJLlxuICByZWcoXG4gICAgJ3ZpZXcnLFxuICAgICdTaG93IGEgd29ya3NwYWNlIGZpbGUgd2l0aCAxLWluZGV4ZWQgbGluZSBudW1iZXJzLCBvciBsaXN0IGEgZGlyZWN0b3J5LiAnXG4gICAgICArICdPcHRpb25hbGx5IHBhc3Mgdmlld19yYW5nZT1bc3RhcnQsIGVuZF0gKGVuZCAtMSA9IGVuZCBvZiBmaWxlKSB0byBzaG93ICdcbiAgICAgICsgJ3BhcnQgb2YgYSBmaWxlLiBUaGlzIHRvb2wgb25seSByZWFkczsgdXNlIHN0cl9yZXBsYWNlX2Jhc2VkX2VkaXRfdG9vbCAnXG4gICAgICArICd0byBjaGFuZ2UgZmlsZXMuJyxcbiAgICBzY2hlbWEoXG4gICAgICB7XG4gICAgICAgIHBhdGg6IHN0cignRmlsZSBvciBkaXJlY3RvcnkgcGF0aCByZWxhdGl2ZSB0byB0aGUgd29ya3NwYWNlIHJvb3QuJyksXG4gICAgICAgIHZpZXdfcmFuZ2U6IGludEFycmF5KFxuICAgICAgICAgICdGb3IgYSBmaWxlOiBvcHRpb25hbCBbc3RhcnQsIGVuZF0gMS1pbmRleGVkIGxpbmUgcmFuZ2UuIFVzZSBlbmQgb2YgJ1xuICAgICAgICAgICAgKyAnLTEgdG8gcmVhZCB0aHJvdWdoIHRoZSBlbmQgb2YgdGhlIGZpbGUuJyxcbiAgICAgICAgKSxcbiAgICAgIH0sXG4gICAgICBbJ3BhdGgnXSxcbiAgICApLFxuICAgIGFzeW5jIChyb290LCBpKSA9PiB7XG4gICAgICBjb25zdCBwYXRoID0gYXNTdHJpbmcoaS5wYXRoKVxuICAgICAgcmV0dXJuIChhd2FpdCBvcHMuaXNEaXJlY3Rvcnkocm9vdCwgcGF0aCkpXG4gICAgICAgID8gb3BzLmxpc3REaXIocm9vdCwgcGF0aCwgMilcbiAgICAgICAgOiBvcHMudmlld0ZpbGUoXG4gICAgICAgICAgICByb290LFxuICAgICAgICAgICAgcGF0aCxcbiAgICAgICAgICAgIEFycmF5LmlzQXJyYXkoaS52aWV3X3JhbmdlKVxuICAgICAgICAgICAgICA/IChpLnZpZXdfcmFuZ2UgYXMgbnVtYmVyW10pXG4gICAgICAgICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgICAgIClcbiAgICB9LFxuICApXG5cbiAgLy8gVGhlIHRleHQtZWRpdG9yIHRvb2wsIGRpc3BhdGNoZWQgb24gYGNvbW1hbmRgLiBFdmVyeSBjb21tYW5kIHdyaXRlcy5cbiAgcmVnKFxuICAgICdzdHJfcmVwbGFjZV9iYXNlZF9lZGl0X3Rvb2wnLFxuICAgICdUb29sIGZvciBjcmVhdGluZyBhbmQgZWRpdGluZyBmaWxlcyBpbiB0aGUgd29ya3NwYWNlLCBtb2RlbGVkIG9uICdcbiAgICAgICsgXCJBbnRocm9waWMncyB0ZXh0IGVkaXRvciB0b29sLiBUbyByZWFkIGZpbGVzIG9yIGxpc3QgZGlyZWN0b3JpZXMsIHVzZSBcIlxuICAgICAgKyAndGhlIGB2aWV3YCB0b29sIGluc3RlYWQuIENvbW1hbmRzOlxcbidcbiAgICAgICsgJy0gY3JlYXRlOiBjcmVhdGUgYSBmaWxlIHdpdGggYGZpbGVfdGV4dGAsIG92ZXJ3cml0aW5nIGl0IGlmIGl0IGV4aXN0cy4gJ1xuICAgICAgKyAnSU1QT1JUQU5UOiBhIGxhcmdlIGBmaWxlX3RleHRgIGdldHMgdHJ1bmNhdGVkIGFuZCByZWplY3RlZC4gRm9yIGFueXRoaW5nICdcbiAgICAgICsgJ2xvbmdlciB0aGFuIGEgZmV3IGxpbmVzLCBjYWxsIGNyZWF0ZSB3aXRoIGFuIGVtcHR5IG9yIHZlcnkgc2hvcnQgJ1xuICAgICAgKyAnYGZpbGVfdGV4dGAsIHRoZW4gYWRkIHRoZSByZXN0IHdpdGggcmVwZWF0ZWQgYXBwZW5kX2ZpbGUgY2FsbHMsIG9uZSAnXG4gICAgICArICdzbWFsbCBjaHVuayBwZXIgY2FsbC5cXG4nXG4gICAgICArICctIHN0cl9yZXBsYWNlOiByZXBsYWNlIHRoZSB1bmlxdWUgb2NjdXJyZW5jZSBvZiBgb2xkX3N0cmAgd2l0aCAnXG4gICAgICArICdgbmV3X3N0cmAuIGBvbGRfc3RyYCBtdXN0IG1hdGNoIGV4YWN0bHkgb25jZSwgaW5jbHVkaW5nIHdoaXRlc3BhY2UuICdcbiAgICAgICsgJ0tlZXAgYG5ld19zdHJgIHNtYWxsIGZvciB0aGUgc2FtZSByZWFzb24uXFxuJ1xuICAgICAgKyAnLSBpbnNlcnQ6IGluc2VydCBgaW5zZXJ0X3RleHRgIGFmdGVyIDEtaW5kZXhlZCBsaW5lIGBpbnNlcnRfbGluZWAgKDAgPSAnXG4gICAgICArICdzdGFydCBvZiBmaWxlKS4gS2VlcCBgaW5zZXJ0X3RleHRgIHNtYWxsLicsXG4gICAgc2NoZW1hKFxuICAgICAge1xuICAgICAgICBjb21tYW5kOiBzdHJFbnVtKFxuICAgICAgICAgIFsnY3JlYXRlJywgJ3N0cl9yZXBsYWNlJywgJ2luc2VydCddLFxuICAgICAgICAgICdUaGUgZWRpdCBjb21tYW5kIHRvIHJ1bi4nLFxuICAgICAgICApLFxuICAgICAgICBwYXRoOiBzdHIoJ0ZpbGUgcGF0aCByZWxhdGl2ZSB0byB0aGUgd29ya3NwYWNlIHJvb3QuJyksXG4gICAgICAgIGZpbGVfdGV4dDogc3RyKCdGb3IgY3JlYXRlOiBmdWxsIGNvbnRlbnRzIG9mIHRoZSBmaWxlLicpLFxuICAgICAgICBvbGRfc3RyOiBzdHIoXG4gICAgICAgICAgJ0ZvciBzdHJfcmVwbGFjZTogZXhhY3QgZXhpc3RpbmcgdGV4dCB0byByZXBsYWNlIChtdXN0IGJlIHVuaXF1ZSkuJyxcbiAgICAgICAgKSxcbiAgICAgICAgbmV3X3N0cjogc3RyKCdGb3Igc3RyX3JlcGxhY2U6IHJlcGxhY2VtZW50IHRleHQuJyksXG4gICAgICAgIGluc2VydF9saW5lOiBpbnQoXG4gICAgICAgICAgJ0ZvciBpbnNlcnQ6IGxpbmUgbnVtYmVyIHRvIGluc2VydCBhZnRlciAoMCA9IHN0YXJ0IG9mIGZpbGUpLicsXG4gICAgICAgICksXG4gICAgICAgIGluc2VydF90ZXh0OiBzdHIoJ0ZvciBpbnNlcnQ6IHRleHQgdG8gaW5zZXJ0LicpLFxuICAgICAgfSxcbiAgICAgIFsnY29tbWFuZCcsICdwYXRoJ10sXG4gICAgKSxcbiAgICBhc3luYyAocm9vdCwgaSkgPT4ge1xuICAgICAgY29uc3QgcGF0aCA9IGFzU3RyaW5nKGkucGF0aClcbiAgICAgIHN3aXRjaCAoaS5jb21tYW5kKSB7XG4gICAgICAgIGNhc2UgJ2NyZWF0ZSc6XG4gICAgICAgICAgcmV0dXJuIG9wcy5jcmVhdGVGaWxlKHJvb3QsIHBhdGgsIGFzU3RyaW5nKGkuZmlsZV90ZXh0KSlcbiAgICAgICAgY2FzZSAnc3RyX3JlcGxhY2UnOlxuICAgICAgICAgIHJldHVybiBvcHMuc3RyUmVwbGFjZShcbiAgICAgICAgICAgIHJvb3QsXG4gICAgICAgICAgICBwYXRoLFxuICAgICAgICAgICAgYXNTdHJpbmcoaS5vbGRfc3RyKSxcbiAgICAgICAgICAgIGFzU3RyaW5nKGkubmV3X3N0ciksXG4gICAgICAgICAgKVxuICAgICAgICBjYXNlICdpbnNlcnQnOlxuICAgICAgICAgIHJldHVybiBvcHMuaW5zZXJ0KFxuICAgICAgICAgICAgcm9vdCxcbiAgICAgICAgICAgIHBhdGgsXG4gICAgICAgICAgICBhc0ludChpLmluc2VydF9saW5lLCAwKSxcbiAgICAgICAgICAgIGFzU3RyaW5nKGkuaW5zZXJ0X3RleHQpLFxuICAgICAgICAgIClcbiAgICAgICAgY2FzZSAndmlldyc6XG4gICAgICAgICAgLy8gTW9kZWxzIHRyYWluZWQgb24gQW50aHJvcGljJ3MgdG9vbCBjb250cmFjdCBtYXkgc3RpbGwgc2VuZCB0aGlzLlxuICAgICAgICAgIC8vIE5ldmVyIGZhbGwgdGhyb3VnaCB0byByZWFkaW5nOiB0aGlzIHRvb2wncyBwZXJtaXNzaW9uIGdyYW50IGlzIGZvclxuICAgICAgICAgIC8vIGVkaXRzLlxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgICd2aWV3IGlzIG5vdCBhIGNvbW1hbmQgb2YgdGhpcyB0b29sOyB1c2UgdGhlIGB2aWV3YCB0b29sIGluc3RlYWQnLFxuICAgICAgICAgIClcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYHVua25vd24gY29tbWFuZDogJHtTdHJpbmcoaS5jb21tYW5kKX1gKVxuICAgICAgfVxuICAgIH0sXG4gIClcblxuICAvLyBBdXhpbGlhcnkgdG9vbHMgd2l0aCBubyB0ZXh0LWVkaXRvciBhbmFsb2cuXG4gIHJlZyhcbiAgICAnZ3JlcCcsXG4gICAgJ1NlYXJjaCBmaWxlIGNvbnRlbnRzIHdpdGhpbiB0aGUgd29ya3NwYWNlIGZvciBhIHJlZ3VsYXIgZXhwcmVzc2lvbi4nLFxuICAgIHNjaGVtYShcbiAgICAgIHtcbiAgICAgICAgcGF0dGVybjogc3RyKCdSZWd1bGFyIGV4cHJlc3Npb24gdG8gc2VhcmNoIGZvci4nKSxcbiAgICAgICAgcGF0aDogc3RyKFxuICAgICAgICAgICdEaXJlY3RvcnkgdG8gc2VhcmNoIHVuZGVyLCByZWxhdGl2ZSB0byB0aGUgd29ya3NwYWNlIHJvb3QuIEVtcHR5ICdcbiAgICAgICAgICAgICsgJ3NlYXJjaGVzIHRoZSB3aG9sZSB3b3Jrc3BhY2UuJyxcbiAgICAgICAgKSxcbiAgICAgICAgaW5jbHVkZTogc3RyKFxuICAgICAgICAgICdPcHRpb25hbCBnbG9iIHJlc3RyaWN0aW5nIHdoaWNoIGZpbGVzIGFyZSBzZWFyY2hlZCBieSB0aGVpciAnXG4gICAgICAgICAgICArICdyZWxhdGl2ZSBwYXRoLCBlLmcuICoudHMnLFxuICAgICAgICApLFxuICAgICAgfSxcbiAgICAgIFsncGF0dGVybiddLFxuICAgICksXG4gICAgKHJvb3QsIGkpID0+XG4gICAgICBvcHMuZ3JlcChcbiAgICAgICAgcm9vdCxcbiAgICAgICAgYXNTdHJpbmcoaS5wYXRoKSxcbiAgICAgICAgYXNTdHJpbmcoaS5wYXR0ZXJuKSxcbiAgICAgICAgYXNTdHJpbmcoaS5pbmNsdWRlKSxcbiAgICAgICksXG4gIClcblxuICByZWcoXG4gICAgJ2dsb2InLFxuICAgICdGaW5kIGZpbGVzIGluIHRoZSB3b3Jrc3BhY2Ugd2hvc2UgcmVsYXRpdmUgcGF0aCBtYXRjaGVzIGEgZ2xvYi4nLFxuICAgIHNjaGVtYShcbiAgICAgIHtcbiAgICAgICAgcGF0dGVybjogc3RyKCdHbG9iIHRvIG1hdGNoIGZpbGUgcGF0aHMsIGUuZy4gKiovKi50cycpLFxuICAgICAgICBwYXRoOiBzdHIoXG4gICAgICAgICAgJ0RpcmVjdG9yeSB0byBzZWFyY2ggdW5kZXIsIHJlbGF0aXZlIHRvIHRoZSB3b3Jrc3BhY2Ugcm9vdC4gRW1wdHkgJ1xuICAgICAgICAgICAgKyAnc2VhcmNoZXMgdGhlIHdob2xlIHdvcmtzcGFjZS4nLFxuICAgICAgICApLFxuICAgICAgfSxcbiAgICAgIFsncGF0dGVybiddLFxuICAgICksXG4gICAgKHJvb3QsIGkpID0+IG9wcy5nbG9iKHJvb3QsIGFzU3RyaW5nKGkucGF0aCksIGFzU3RyaW5nKGkucGF0dGVybikpLFxuICApXG5cbiAgcmVnKFxuICAgICdhcHBlbmRfZmlsZScsXG4gICAgJ0FwcGVuZCBgY29udGVudGAgdG8gdGhlIGVuZCBvZiBhIHdvcmtzcGFjZSBmaWxlLCBjcmVhdGluZyBpdCBpZiBuZWVkZWQuICdcbiAgICAgICsgJ1VzZSB0aGlzIHRvIGJ1aWxkIGEgZmlsZSBhY3Jvc3Mgc2V2ZXJhbCBjYWxsczogY3JlYXRlIGFuIGVtcHR5IGZpbGUsICdcbiAgICAgICsgJ3RoZW4gYXBwZW5kX2ZpbGUgb25lIHNtYWxsIGNodW5rIGF0IGEgdGltZS4gUHJlZmVyIHRoaXMgb3ZlciBhIHNpbmdsZSAnXG4gICAgICArICdsYXJnZSBjcmVhdGUsIHdob3NlIGJpZyBgZmlsZV90ZXh0YCBhcmd1bWVudCBnZXRzIHRydW5jYXRlZCBhbmQgJ1xuICAgICAgKyAncmVqZWN0ZWQuJyxcbiAgICBzY2hlbWEoXG4gICAgICB7XG4gICAgICAgIHBhdGg6IHN0cignRmlsZSBwYXRoIHJlbGF0aXZlIHRvIHRoZSB3b3Jrc3BhY2Ugcm9vdC4nKSxcbiAgICAgICAgY29udGVudDogc3RyKCdUZXh0IHRvIGFwcGVuZCB0byB0aGUgZW5kIG9mIHRoZSBmaWxlLicpLFxuICAgICAgfSxcbiAgICAgIFsncGF0aCcsICdjb250ZW50J10sXG4gICAgKSxcbiAgICAocm9vdCwgaSkgPT4gb3BzLmFwcGVuZEZpbGUocm9vdCwgYXNTdHJpbmcoaS5wYXRoKSwgYXNTdHJpbmcoaS5jb250ZW50KSksXG4gIClcblxuICBhd2FpdCBQcm9taXNlLmFsbChyZWdpc3RyYXRpb25zKVxuICBjb25zb2xlLmxvZygnW2xlby13b3Jrc3BhY2VdIHJlZ2lzdGVyZWQgV2ViTUNQIHRvb2xzJylcbn1cbiIsIi8vIENvcHlyaWdodCAoYykgMjAyNiBUaGUgQnJhdmUgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbi8vIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXMgZmlsZSxcbi8vIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwczovL21vemlsbGEub3JnL01QTC8yLjAvLlxuXG4vLyBJbmRleGVkREIgc3RvcmFnZSBmb3IgcGVyc2lzdGluZyB0aGUgd29ya3NwYWNlJ3MgRmlsZVN5c3RlbURpcmVjdG9yeUhhbmRsZS5cbi8vIFRoaXMgYWxsb3dzIHRoZSB3b3Jrc3BhY2UgdG8gcmVzdG9yZSBpdHMgZm9sZGVyIGhhbmRsZSBhY3Jvc3MgcGFnZSByZWxvYWRzXG4vLyB3aXRob3V0IHJlcXVpcmluZyBsYXVuY2hRdWV1ZSB0byBkZWxpdmVyIGl0IGFnYWluLlxuXG4vLyBFeHRlbmQgRmlsZVN5c3RlbUhhbmRsZSB0byBpbmNsdWRlIHJlcXVlc3RQZXJtaXNzaW9uIChub3QgaW4gZGVmYXVsdCBUUyBsaWIpXG5pbnRlcmZhY2UgRmlsZVN5c3RlbUhhbmRsZVBlcm1pc3Npb25EZXNjcmlwdG9yIHtcbiAgbW9kZT86ICdyZWFkJyB8ICdyZWFkd3JpdGUnXG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEZpbGVTeXN0ZW1IYW5kbGUge1xuICAgIHJlcXVlc3RQZXJtaXNzaW9uKFxuICAgICAgZGVzY3JpcHRvcj86IEZpbGVTeXN0ZW1IYW5kbGVQZXJtaXNzaW9uRGVzY3JpcHRvcixcbiAgICApOiBQcm9taXNlPFBlcm1pc3Npb25TdGF0ZT5cbiAgfVxufVxuXG5jb25zdCBrRGJOYW1lID0gJ2xlby13b3Jrc3BhY2UnXG5jb25zdCBrRGJWZXJzaW9uID0gMVxuY29uc3Qga1N0b3JlTmFtZSA9ICdoYW5kbGVzJ1xuY29uc3Qga0hhbmRsZUtleSA9ICdyb290J1xuXG5mdW5jdGlvbiBvcGVuRGIoKTogUHJvbWlzZTxJREJEYXRhYmFzZT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNvbnN0IHJlcXVlc3QgPSBpbmRleGVkREIub3BlbihrRGJOYW1lLCBrRGJWZXJzaW9uKVxuXG4gICAgcmVxdWVzdC5vbmVycm9yID0gKCkgPT4ge1xuICAgICAgcmVqZWN0KG5ldyBFcnJvcihgRmFpbGVkIHRvIG9wZW4gSW5kZXhlZERCOiAke3JlcXVlc3QuZXJyb3I/Lm1lc3NhZ2V9YCkpXG4gICAgfVxuXG4gICAgcmVxdWVzdC5vbnN1Y2Nlc3MgPSAoKSA9PiB7XG4gICAgICByZXNvbHZlKHJlcXVlc3QucmVzdWx0KVxuICAgIH1cblxuICAgIHJlcXVlc3Qub251cGdyYWRlbmVlZGVkID0gKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCBkYiA9IChldmVudC50YXJnZXQgYXMgSURCT3BlbkRCUmVxdWVzdCkucmVzdWx0XG4gICAgICBpZiAoIWRiLm9iamVjdFN0b3JlTmFtZXMuY29udGFpbnMoa1N0b3JlTmFtZSkpIHtcbiAgICAgICAgZGIuY3JlYXRlT2JqZWN0U3RvcmUoa1N0b3JlTmFtZSlcbiAgICAgIH1cbiAgICB9XG4gIH0pXG59XG5cbi8vIFN0b3JlcyB0aGUgZGlyZWN0b3J5IGhhbmRsZSBpbiBJbmRleGVkREIuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc3RvcmVEaXJlY3RvcnlIYW5kbGUoXG4gIGhhbmRsZTogRmlsZVN5c3RlbURpcmVjdG9yeUhhbmRsZSxcbik6IFByb21pc2U8dm9pZD4ge1xuICBjb25zdCBkYiA9IGF3YWl0IG9wZW5EYigpXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgY29uc3QgdHJhbnNhY3Rpb24gPSBkYi50cmFuc2FjdGlvbihrU3RvcmVOYW1lLCAncmVhZHdyaXRlJylcbiAgICBjb25zdCBzdG9yZSA9IHRyYW5zYWN0aW9uLm9iamVjdFN0b3JlKGtTdG9yZU5hbWUpXG4gICAgY29uc3QgcmVxdWVzdCA9IHN0b3JlLnB1dChoYW5kbGUsIGtIYW5kbGVLZXkpXG5cbiAgICByZXF1ZXN0Lm9uZXJyb3IgPSAoKSA9PiB7XG4gICAgICByZWplY3QobmV3IEVycm9yKGBGYWlsZWQgdG8gc3RvcmUgaGFuZGxlOiAke3JlcXVlc3QuZXJyb3I/Lm1lc3NhZ2V9YCkpXG4gICAgfVxuXG4gICAgcmVxdWVzdC5vbnN1Y2Nlc3MgPSAoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnW2xlby13b3Jrc3BhY2VdIGRpcmVjdG9yeSBoYW5kbGUgc3RvcmVkIGluIEluZGV4ZWREQicpXG4gICAgICByZXNvbHZlKClcbiAgICB9XG5cbiAgICB0cmFuc2FjdGlvbi5vbmNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgZGIuY2xvc2UoKVxuICAgIH1cbiAgfSlcbn1cblxuLy8gUmV0cmlldmVzIHRoZSBkaXJlY3RvcnkgaGFuZGxlIGZyb20gSW5kZXhlZERCIGFuZCByZXF1ZXN0cyBwZXJtaXNzaW9uLlxuLy8gUmV0dXJucyBudWxsIGlmIG5vIGhhbmRsZSBpcyBzdG9yZWQgb3IgcGVybWlzc2lvbiBpcyBkZW5pZWQuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVzdG9yZURpcmVjdG9yeUhhbmRsZSgpOiBQcm9taXNlPEZpbGVTeXN0ZW1EaXJlY3RvcnlIYW5kbGUgfCBudWxsPiB7XG4gIHRyeSB7XG4gICAgY29uc3QgZGIgPSBhd2FpdCBvcGVuRGIoKVxuICAgIGNvbnN0IGhhbmRsZSA9IGF3YWl0IG5ldyBQcm9taXNlPEZpbGVTeXN0ZW1EaXJlY3RvcnlIYW5kbGUgfCBudWxsPihcbiAgICAgIChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgY29uc3QgdHJhbnNhY3Rpb24gPSBkYi50cmFuc2FjdGlvbihrU3RvcmVOYW1lLCAncmVhZG9ubHknKVxuICAgICAgICBjb25zdCBzdG9yZSA9IHRyYW5zYWN0aW9uLm9iamVjdFN0b3JlKGtTdG9yZU5hbWUpXG4gICAgICAgIGNvbnN0IHJlcXVlc3QgPSBzdG9yZS5nZXQoa0hhbmRsZUtleSlcblxuICAgICAgICByZXF1ZXN0Lm9uZXJyb3IgPSAoKSA9PiB7XG4gICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihgRmFpbGVkIHRvIGdldCBoYW5kbGU6ICR7cmVxdWVzdC5lcnJvcj8ubWVzc2FnZX1gKSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJlcXVlc3Qub25zdWNjZXNzID0gKCkgPT4ge1xuICAgICAgICAgIHJlc29sdmUocmVxdWVzdC5yZXN1bHQgPz8gbnVsbClcbiAgICAgICAgfVxuXG4gICAgICAgIHRyYW5zYWN0aW9uLm9uY29tcGxldGUgPSAoKSA9PiB7XG4gICAgICAgICAgZGIuY2xvc2UoKVxuICAgICAgICB9XG4gICAgICB9LFxuICAgIClcblxuICAgIGlmICghaGFuZGxlKSB7XG4gICAgICBjb25zb2xlLmxvZygnW2xlby13b3Jrc3BhY2VdIG5vIHN0b3JlZCBkaXJlY3RvcnkgaGFuZGxlIGZvdW5kJylcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuXG4gICAgLy8gUmVxdWVzdCBwZXJtaXNzaW9uIG9uIHRoZSByZXN0b3JlZCBoYW5kbGVcbiAgICBjb25zdCBwZXJtaXNzaW9uID0gYXdhaXQgaGFuZGxlLnJlcXVlc3RQZXJtaXNzaW9uKHsgbW9kZTogJ3JlYWQnIH0pXG4gICAgaWYgKHBlcm1pc3Npb24gIT09ICdncmFudGVkJykge1xuICAgICAgY29uc29sZS5sb2coJ1tsZW8td29ya3NwYWNlXSBwZXJtaXNzaW9uIGRlbmllZCBmb3Igc3RvcmVkIGhhbmRsZScpXG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKFxuICAgICAgJ1tsZW8td29ya3NwYWNlXSByZXN0b3JlZCBkaXJlY3RvcnkgaGFuZGxlIGZyb20gSW5kZXhlZERCOicsXG4gICAgICBoYW5kbGUubmFtZSxcbiAgICApXG4gICAgcmV0dXJuIGhhbmRsZVxuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5lcnJvcignW2xlby13b3Jrc3BhY2VdIGZhaWxlZCB0byByZXN0b3JlIGRpcmVjdG9yeSBoYW5kbGU6JywgZSlcbiAgICByZXR1cm4gbnVsbFxuICB9XG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjYgVGhlIEJyYXZlIEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4vLyBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIGZpbGUsXG4vLyBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cHM6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy5cblxuLy8gSGVhZGxlc3Mgd29ya3NwYWNlIHBhZ2UuIFRoaXMgYnVuZGxlIHJ1bnMgaW5zaWRlIHRoZSBoaWRkZW5cbi8vIGNocm9tZS11bnRydXN0ZWQ6Ly88Z3VpZD4ubGVvLXdvcmtzcGFjZSBXZWJDb250ZW50cyB0aGF0IGlzIGF0dGFjaGVkIHRvIGEgTGVvXG4vLyBjb252ZXJzYXRpb24uIEVhY2ggd29ya3NwYWNlIGhhcyBpdHMgb3duIHN1YmRvbWFpbiwgYW5kIHRoZXJlZm9yZSBpdHMgb3duXG4vLyBvcmlnaW4sIHNvIG5vIHN0YXRlIGlzIHNoYXJlZCBiZXR3ZWVuIHdvcmtzcGFjZXMuIEl0IHJlY2VpdmVzIGFcbi8vIEZpbGVTeXN0ZW1EaXJlY3RvcnlIYW5kbGUgZm9yIHRoZSB1c2VyLXBpY2tlZCBmb2xkZXIgKGRlbGl2ZXJlZCBieSB0aGUgYnJvd3NlclxuLy8gdmlhIHdpbmRvdy5sYXVuY2hRdWV1ZSksIGltcGxlbWVudHMgdGhlIGZpbGUgdG9vbHMgYWdhaW5zdCBpdCwgYW5kIHJlZ2lzdGVyc1xuLy8gdGhlbSB3aXRoIExlbyB2aWEgV2ViTUNQIChkb2N1bWVudC5tb2RlbENvbnRleHQpLiBUaGVyZSBpcyBubyB2aXNpYmxlIFVJLlxuLy9cbi8vIFRoZSBoYW5kbGUgaXMgZGVsaXZlcmVkIHZpYSBsYXVuY2hRdWV1ZTsgb25jZSBjYXB0dXJlZCwgaXQncyBzdG9yZWQgaW5cbi8vIEluZGV4ZWREQiBzbyB0aGUgd29ya3NwYWNlIGNhbiByZXN0b3JlIGl0IG9uIHN1YnNlcXVlbnQgbG9hZHMgd2l0aG91dFxuLy8gcmVxdWlyaW5nIGxhdW5jaFF1ZXVlIGFnYWluLiBBIHdvcmtzcGFjZSB0aGF0IGlzIGNyZWF0ZWQgd2l0aG91dCBhIGZvbGRlciBpc1xuLy8gbmV2ZXIgc2VudCBvbmU6IHRoZSBmaXJzdCB0aW1lIG9uZSBvZiBpdHMgdG9vbHMgcnVucywgdGhlIG9yaWdpbiBwcml2YXRlIGZpbGVcbi8vIHN5c3RlbSAoT1BGUykgcm9vdCBiZWNvbWVzIGl0cyBmb2xkZXIsIGFuZCBpcyBzdG9yZWQgaW4gSW5kZXhlZERCIHRoZSBzYW1lXG4vLyB3YXkuIFRoZSBmaWxlIHRvb2xzIGFyZSByZWdpc3RlcmVkIHdpdGggTGVvIHZpYSBXZWJNQ1AgKHNlZSB0b29scy50cyAvXG4vLyBmaWxlX29wcy50cykuIFRoZSBgdmlldy5gIHNpYmxpbmcgb3JpZ2luIGNhbiBhbHNvIHJlYWQgZmlsZXMgb3ZlclxuLy8gcG9zdE1lc3NhZ2UgKHNlZSBtZXNzYWdlX2hhbmRsZXIudHMpLlxuLy9cbi8vIFdoZW4gbmF2aWdhdGVkIHRvIHdpdGggYSAjZmlsZT08cGF0aD4gZnJhZ21lbnQsIHRoZSB3b3Jrc3BhY2UgY3JlYXRlcyBhXG4vLyBmdWxsc2NyZWVuIGlmcmFtZSB0byB0aGUgdmlld2VyIG9yaWdpbiB3aGljaCBkaXNwbGF5cyB0aGUgZmlsZSBjb250ZW50LlxuXG5pbXBvcnQgeyBpbnN0YWxsTWVzc2FnZUhhbmRsZXIsIHZpZXdPcmlnaW4gfSBmcm9tICcuL21lc3NhZ2VfaGFuZGxlcidcbmltcG9ydCB7IHJlZ2lzdGVyVG9vbHMgfSBmcm9tICcuL3Rvb2xzJ1xuaW1wb3J0IHsgcmVzdG9yZURpcmVjdG9yeUhhbmRsZSwgc3RvcmVEaXJlY3RvcnlIYW5kbGUgfSBmcm9tICcuL3N0b3JhZ2UnXG5cbi8vIGxhdW5jaFF1ZXVlIGlzIG5vdCBpbiB0aGUgZGVmYXVsdCBUUyBET00gbGliOyBkZWNsYXJlIHRoZSBtaW5pbWFsIHN1cmZhY2Ugd2Vcbi8vIHVzZS4gVGhlIGRlbGl2ZXJlZCBmaWxlIGVudHJpZXMgYXJlIEZpbGVTeXN0ZW1EaXJlY3RvcnlIYW5kbGUgb2JqZWN0cy5cbmludGVyZmFjZSBMYXVuY2hQYXJhbXMge1xuICBmaWxlczogRmlsZVN5c3RlbUhhbmRsZVtdXG59XG5pbnRlcmZhY2UgTGF1bmNoUXVldWUge1xuICBzZXRDb25zdW1lcihjb25zdW1lcjogKHBhcmFtczogTGF1bmNoUGFyYW1zKSA9PiB2b2lkKTogdm9pZFxufVxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICBsYXVuY2hRdWV1ZT86IExhdW5jaFF1ZXVlXG4gIH1cbn1cblxuLy8gVGhlIGRpcmVjdG9yeSBoYW5kbGUgYXJyaXZlcyBhc3luY2hyb25vdXNseSwgc28gZXhwb3NlIGl0IGFzIGEgcHJvbWlzZSB0aGF0XG4vLyBjb25zdW1lcnMgY2FuIGF3YWl0IHJhdGhlciB0aGFuIGEgc2xvdCB0aGV5IGhhdmUgdG8gcG9sbC4gSXQgaXMgbmV2ZXJcbi8vIHJlamVjdGVkOiBhIHdvcmtzcGFjZSB3aXRob3V0IGEgZm9sZGVyIGZhbGxzIGJhY2sgdG8gT1BGUyAoc2VlIGdldFJvb3QpLlxuY29uc3QgeyBwcm9taXNlOiByb290SGFuZGxlLCByZXNvbHZlOiByZXNvbHZlUm9vdCB9ID1cbiAgUHJvbWlzZS53aXRoUmVzb2x2ZXJzPEZpbGVTeXN0ZW1EaXJlY3RvcnlIYW5kbGU+KClcbmxldCBoYXNSb290ID0gZmFsc2VcblxuLy8gQ2FsbGVkIHdoZW4gd2UgaGF2ZSBhIHZhbGlkIGRpcmVjdG9yeSBoYW5kbGUuIFRoZSBmaXJzdCBvbmUgd2lucy5cbmZ1bmN0aW9uIG9uRGlyZWN0b3J5SGFuZGxlKFxuICByb290OiBGaWxlU3lzdGVtRGlyZWN0b3J5SGFuZGxlLFxuICBzb3VyY2U6ICdJbmRleGVkREInIHwgJ2xhdW5jaFF1ZXVlJyB8ICdPUEZTJyxcbikge1xuICBpZiAoaGFzUm9vdCkge1xuICAgIHJldHVyblxuICB9XG4gIGNvbnNvbGUuZGVidWcoXG4gICAgJ1tsZW8td29ya3NwYWNlXSByZWNlaXZlZCBkaXJlY3RvcnkgaGFuZGxlOicsXG4gICAgcm9vdC5uYW1lLFxuICAgIGAoZnJvbSAke3NvdXJjZX0pYCxcbiAgKVxuICBoYXNSb290ID0gdHJ1ZVxuICByZXNvbHZlUm9vdChyb290KVxuXG4gIC8vIFN0b3JlIGluIEluZGV4ZWREQiBmb3IgZnV0dXJlIGxvYWRzICh1bmxlc3MgdGhhdCdzIHdoZXJlIGl0IGNhbWUgZnJvbSkuXG4gIGlmIChzb3VyY2UgIT09ICdJbmRleGVkREInKSB7XG4gICAgc3RvcmVEaXJlY3RvcnlIYW5kbGUocm9vdCkuY2F0Y2goKGUpID0+IHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1tsZW8td29ya3NwYWNlXSBmYWlsZWQgdG8gc3RvcmUgZGlyZWN0b3J5IGhhbmRsZTonLCBlKVxuICAgIH0pXG4gIH1cbn1cblxuLy8gTG9va3MgZm9yIHRoZSBmb2xkZXIgdGhlIHdvcmtzcGFjZSBhbHJlYWR5IGhhczogdGhlIG9uZSBzdG9yZWQgaW4gSW5kZXhlZERCLFxuLy8gb3IgZmFpbGluZyB0aGF0IG9uZSBkZWxpdmVyZWQgdmlhIGxhdW5jaFF1ZXVlLiBzZXRDb25zdW1lciBmbHVzaGVzIGEgbGF1bmNoXG4vLyB0aGF0IGlzIGFscmVhZHkgcXVldWVkLCBzbyBhIGZvbGRlciB0aGF0IGhhcyBiZWVuIHNlbnQgaXMgcGlja2VkIHVwIGhlcmUuXG5hc3luYyBmdW5jdGlvbiBmaW5kRXhpc3RpbmdSb290KCkge1xuICBjb25zdCBzdG9yZWRIYW5kbGUgPSBhd2FpdCByZXN0b3JlRGlyZWN0b3J5SGFuZGxlKClcbiAgaWYgKHN0b3JlZEhhbmRsZSkge1xuICAgIG9uRGlyZWN0b3J5SGFuZGxlKHN0b3JlZEhhbmRsZSwgJ0luZGV4ZWREQicpXG4gIH0gZWxzZSBpZiAod2luZG93LmxhdW5jaFF1ZXVlKSB7XG4gICAgd2luZG93LmxhdW5jaFF1ZXVlLnNldENvbnN1bWVyKG9uTGF1bmNoKVxuICB9IGVsc2Uge1xuICAgIGNvbnNvbGUuZXJyb3IoJ1tsZW8td29ya3NwYWNlXSB3aW5kb3cubGF1bmNoUXVldWUgaXMgdW5hdmFpbGFibGUnKVxuICB9XG59XG5sZXQgZm91bmRFeGlzdGluZ1Jvb3Q6IFByb21pc2U8dm9pZD5cblxuLy8gVGhlIHJvb3QgdGhlIHRvb2xzIHJ1biBhZ2FpbnN0LiBBIHdvcmtzcGFjZSBjcmVhdGVkIHdpdGhvdXQgYSBmb2xkZXIgaXNcbi8vIG5ldmVyIHNlbnQgb25lLCBzbyB0aGUgZmlyc3QgdGltZSBhIHRvb2wgcnVucyB3aXRob3V0IGEgZm9sZGVyLCB0aGUgb3JpZ2luXG4vLyBwcml2YXRlIGZpbGUgc3lzdGVtIHJvb3QgKHByaXZhdGUgdG8gdGhlIHdvcmtzcGFjZSwgYXMgZWFjaCBoYXMgaXRzIG93blxuLy8gb3JpZ2luKSBiZWNvbWVzIHRoZSB3b3Jrc3BhY2UgZm9sZGVyLlxuYXN5bmMgZnVuY3Rpb24gZ2V0Um9vdCgpOiBQcm9taXNlPEZpbGVTeXN0ZW1EaXJlY3RvcnlIYW5kbGU+IHtcbiAgYXdhaXQgZm91bmRFeGlzdGluZ1Jvb3RcbiAgaWYgKCFoYXNSb290KSB7XG4gICAgb25EaXJlY3RvcnlIYW5kbGUoYXdhaXQgbmF2aWdhdG9yLnN0b3JhZ2UuZ2V0RGlyZWN0b3J5KCksICdPUEZTJylcbiAgfVxuICByZXR1cm4gcm9vdEhhbmRsZVxufVxuXG5mdW5jdGlvbiBvbkxhdW5jaChwYXJhbXM6IExhdW5jaFBhcmFtcykge1xuICBjb25zdCBlbnRyeSA9IHBhcmFtcy5maWxlcz8uWzBdXG4gIGlmICghZW50cnkgfHwgZW50cnkua2luZCAhPT0gJ2RpcmVjdG9yeScpIHtcbiAgICBjb25zb2xlLmVycm9yKFxuICAgICAgJ1tsZW8td29ya3NwYWNlXSBsYXVuY2ggcGFyYW1zIG1pc3NpbmcgYSBkaXJlY3RvcnkgaGFuZGxlJyxcbiAgICAgIHBhcmFtcyxcbiAgICApXG4gICAgLy8gRG9uJ3QgcmVqZWN0IC0gd2UgbWlnaHQgaGF2ZSBhIHN0b3JlZCBoYW5kbGUsIG9yIGZhbGwgYmFjayB0byBPUEZTLlxuICAgIHJldHVyblxuICB9XG4gIGNvbnN0IHJvb3QgPSBlbnRyeSBhcyBGaWxlU3lzdGVtRGlyZWN0b3J5SGFuZGxlXG4gIG9uRGlyZWN0b3J5SGFuZGxlKHJvb3QsICdsYXVuY2hRdWV1ZScpXG59XG5cbi8vIFBhcnNlcyB0aGUgI2ZpbGU9PGZpbGVuYW1lPiBmcmFnbWVudCBmcm9tIHRoZSBVUkwuXG5mdW5jdGlvbiBwYXJzZUZpbGVGcmFnbWVudChoYXNoOiBzdHJpbmcpOiBzdHJpbmcgfCBudWxsIHtcbiAgaWYgKCFoYXNoIHx8ICFoYXNoLnN0YXJ0c1dpdGgoJyMnKSkge1xuICAgIHJldHVybiBudWxsXG4gIH1cbiAgY29uc3QgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhoYXNoLnNsaWNlKDEpKVxuICByZXR1cm4gcGFyYW1zLmdldCgnZmlsZScpXG59XG5cbi8vIFRoZSB2aWV3ZXIgaWZyYW1lLCBjcmVhdGVkIG9uIGRlbWFuZCB3aGVuIGEgI2ZpbGU9IGZyYWdtZW50IGlzIHByZXNlbnQuXG5sZXQgdmlld2VySWZyYW1lOiBIVE1MSUZyYW1lRWxlbWVudCB8IG51bGwgPSBudWxsXG5cbi8vIENyZWF0ZXMgb3IgdXBkYXRlcyB0aGUgZnVsbHNjcmVlbiB2aWV3ZXIgaWZyYW1lLlxuZnVuY3Rpb24gc2hvd1ZpZXdlcihmaWxlbmFtZTogc3RyaW5nKSB7XG4gIGNvbnN0IHZpZXdlck9yaWdpblVybCA9IHZpZXdPcmlnaW4od2luZG93LmxvY2F0aW9uLm9yaWdpbilcbiAgaWYgKCF2aWV3ZXJPcmlnaW5VcmwpIHtcbiAgICBjb25zb2xlLmVycm9yKCdbbGVvLXdvcmtzcGFjZV0gY2Fubm90IGRldGVybWluZSB2aWV3ZXIgb3JpZ2luJylcbiAgICByZXR1cm5cbiAgfVxuXG4gIGNvbnN0IHZpZXdlclVybCA9IGAke3ZpZXdlck9yaWdpblVybH0vI2ZpbGU9JHtlbmNvZGVVUklDb21wb25lbnQoZmlsZW5hbWUpfWBcblxuICBpZiAoIXZpZXdlcklmcmFtZSkge1xuICAgIHZpZXdlcklmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh2aWV3ZXJJZnJhbWUpXG4gIH1cblxuICB2aWV3ZXJJZnJhbWUuc3JjID0gdmlld2VyVXJsXG4gIGNvbnNvbGUuZGVidWcoJ1tsZW8td29ya3NwYWNlXSBzaG93aW5nIHZpZXdlciBmb3I6JywgZmlsZW5hbWUpXG59XG5cbi8vIEhpZGVzIHRoZSB2aWV3ZXIgaWZyYW1lLlxuZnVuY3Rpb24gaGlkZVZpZXdlcigpIHtcbiAgaWYgKHZpZXdlcklmcmFtZSkge1xuICAgIHZpZXdlcklmcmFtZS5yZW1vdmUoKVxuICAgIHZpZXdlcklmcmFtZSA9IG51bGxcbiAgfVxufVxuXG4vLyBIYW5kbGVzIGhhc2ggY2hhbmdlcyB0byBzaG93L2hpZGUgdGhlIHZpZXdlci5cbmZ1bmN0aW9uIGhhbmRsZUhhc2hDaGFuZ2UoKSB7XG4gIGNvbnN0IGZpbGVuYW1lID0gcGFyc2VGaWxlRnJhZ21lbnQod2luZG93LmxvY2F0aW9uLmhhc2gpXG4gIGlmIChmaWxlbmFtZSkge1xuICAgIHNob3dWaWV3ZXIoZmlsZW5hbWUpXG4gIH0gZWxzZSB7XG4gICAgaGlkZVZpZXdlcigpXG4gIH1cbn1cblxuZnVuY3Rpb24gaW5pdGlhbGl6ZSgpIHtcbiAgY29uc29sZS5kZWJ1ZygnW2xlby13b3Jrc3BhY2VdIGJ1bmRsZSBsb2FkZWQgYXQnLCB3aW5kb3cubG9jYXRpb24ub3JpZ2luKVxuICBpbnN0YWxsTWVzc2FnZUhhbmRsZXIocm9vdEhhbmRsZSlcblxuICAvLyBIYW5kbGUgZmlsZSB2aWV3aW5nIHZpYSBoYXNoIGZyYWdtZW50XG4gIGhhbmRsZUhhc2hDaGFuZ2UoKVxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignaGFzaGNoYW5nZScsIGhhbmRsZUhhc2hDaGFuZ2UpXG5cbiAgZm91bmRFeGlzdGluZ1Jvb3QgPSBmaW5kRXhpc3RpbmdSb290KClcbiAgLy8gUmVnaXN0ZXIgdGhlIHRvb2xzIHVwIGZyb250OiB0aGV5IHJlc29sdmUgdGhlIGZvbGRlciB3aGVuIHRoZXkgcnVuLCBzbyBhXG4gIC8vIHdvcmtzcGFjZSB0aGF0IGlzIG5ldmVyIHNlbnQgYSBmb2xkZXIgc3RpbGwgZ2V0cyB0aGVtIChiYWNrZWQgYnkgT1BGUykuXG4gIHZvaWQgcmVnaXN0ZXJUb29scyhnZXRSb290KVxufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgaW5pdGlhbGl6ZSlcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==