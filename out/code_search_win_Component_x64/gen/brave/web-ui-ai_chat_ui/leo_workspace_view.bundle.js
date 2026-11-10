/******/ // The require scope
/******/ var __webpack_require__ = {};
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ })();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};
/*!***************************************************************************************!*\
  !*** ./components/ai_chat/resources/leo_workspace/leo_workspace_view.tsx + 2 modules ***!
  \***************************************************************************************/
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

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

;// ./components/ai_chat/resources/leo_workspace/leo_workspace_view.tsx
// Copyright (c) 2026 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.

const leo_workspace_view_kScheme = 'chrome-untrusted://';
// chrome-untrusted://view.<uuid>.leo-workspace -> chrome-untrusted://<uuid>.leo-workspace
function workspaceOrigin(viewerOrigin) {
    const viewPrefix = `${leo_workspace_view_kScheme}view.`;
    return viewerOrigin.startsWith(viewPrefix)
        ? viewerOrigin.replace(viewPrefix, leo_workspace_view_kScheme)
        : '';
}
// Parses the #file=<filename> fragment from the URL.
function parseFileFragment(hash) {
    if (!hash || !hash.startsWith('#')) {
        return null;
    }
    const params = new URLSearchParams(hash.slice(1));
    return params.get('file');
}
function setupParentBridge(swPort, parent, wsOrigin) {
    console.debug('[leo-workspace-view] setting up parent bridge to', wsOrigin);
    swPort.onmessage = (event) => {
        const data = event.data;
        console.debug('[leo-workspace-view] received from SW:', data);
        if (!data)
            return;
        if (data.type === kReadFileRequest) {
            console.debug('[leo-workspace-view] forwarding to parent:', data);
            parent.postMessage(data, wsOrigin);
        }
    };
    window.addEventListener('message', (event) => {
        console.debug('[leo-workspace-view] received message from', event.origin, event.data);
        if (event.origin !== wsOrigin) {
            console.debug('[leo-workspace-view] ignoring message from wrong origin');
            return;
        }
        const data = event.data;
        if (!data || data.type !== kReadFileResponse) {
            console.debug('[leo-workspace-view] ignoring non-response message');
            return;
        }
        console.debug('[leo-workspace-view] forwarding response to SW:', data);
        swPort.postMessage(data);
    });
}
async function initializeServiceWorker(parent, wsOrigin) {
    const registration = await navigator.serviceWorker.ready;
    const sw = registration.active;
    if (!sw) {
        throw new Error('No active service worker');
    }
    const channel = new MessageChannel();
    setupParentBridge(channel.port1, parent, wsOrigin);
    await new Promise((resolve, reject) => {
        channel.port1.onmessage = (event) => {
            const data = event.data;
            if ((data === null || data === void 0 ? void 0 : data.type) === 'READY') {
                setupParentBridge(channel.port1, parent, wsOrigin);
                resolve();
            }
        };
        sw.postMessage({ type: 'INIT' }, [channel.port2]);
        setTimeout(() => {
            reject(new Error('Service worker initialization timed out'));
        }, 10000);
    });
}
let contentIframe = null;
function displayFileInIframe(filename) {
    const root = document.getElementById('root');
    if (!root) {
        console.error('[leo-workspace-view] #root element not found');
        return;
    }
    while (root.firstChild) {
        root.removeChild(root.firstChild);
    }
    if (!contentIframe) {
        contentIframe = document.createElement('iframe');
    }
    contentIframe.src = `/${filename}`;
    root.appendChild(contentIframe);
    console.debug('[leo-workspace-view] displaying file:', filename);
}
let serviceWorkerReady = false;
let pendingParent = null;
let pendingWsOrigin = null;
async function initialize() {
    console.debug('[leo-workspace-view] bundle loaded at', window.location.origin);
    const wsOrigin = workspaceOrigin(window.location.origin);
    if (!wsOrigin) {
        console.error('[leo-workspace-view] invalid viewer origin');
        return;
    }
    const parent = window.parent !== window ? window.parent : window.opener;
    if (!parent) {
        console.error('[leo-workspace-view] cannot access parent workspace');
        return;
    }
    pendingParent = parent;
    pendingWsOrigin = wsOrigin;
    const filename = parseFileFragment(window.location.hash);
    if (!filename) {
        window.addEventListener('hashchange', handleHashChange);
        return;
    }
    await displayFile(filename);
}
async function handleHashChange() {
    const filename = parseFileFragment(window.location.hash);
    if (filename) {
        await displayFile(filename);
    }
    else {
        contentIframe = null;
    }
}
async function displayFile(filename) {
    if (!pendingParent || !pendingWsOrigin) {
        console.error('[leo-workspace-view] parent workspace not available');
        return;
    }
    try {
        if (!serviceWorkerReady) {
            await initializeServiceWorker(pendingParent, pendingWsOrigin);
            serviceWorkerReady = true;
        }
        displayFileInIframe(filename);
    }
    catch (error) {
        console.error('[leo-workspace-view] Failed to display file:', error);
    }
}
document.addEventListener('DOMContentLoaded', initialize);

export { parseFileFragment, workspaceOrigin };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9icmF2ZS1jb3JlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JyYXZlLWNvcmUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JyYXZlLWNvcmUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9icmF2ZS1jb3JlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYnJhdmUtY29yZS8uL2NvbXBvbmVudHMvYWlfY2hhdC9yZXNvdXJjZXMvbGVvX3dvcmtzcGFjZS9maWxlX29wcy50cyIsIndlYnBhY2s6Ly9icmF2ZS1jb3JlLy4vY29tcG9uZW50cy9haV9jaGF0L3Jlc291cmNlcy9sZW9fd29ya3NwYWNlL21lc3NhZ2VfaGFuZGxlci50cyIsIndlYnBhY2s6Ly9icmF2ZS1jb3JlLy4vY29tcG9uZW50cy9haV9jaGF0L3Jlc291cmNlcy9sZW9fd29ya3NwYWNlL2xlb193b3Jrc3BhY2Vfdmlldy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjYgVGhlIEJyYXZlIEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4vLyBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIGZpbGUsXG4vLyBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cHM6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy5cblxuLy8gRmlsZSB0b29scyBmb3IgdGhlIExlbyB3b3Jrc3BhY2UsIGltcGxlbWVudGVkIGFnYWluc3QgYVxuLy8gRmlsZVN5c3RlbURpcmVjdG9yeUhhbmRsZSB1c2luZyB0aGUgV2ViIEZpbGUgU3lzdGVtIEFjY2VzcyBBUEkuIFBhdGhcbi8vIGNvbmZpbmVtZW50IGNvbWVzIGZyb20gdGhlIHBsYXRmb3JtOiBnZXRGaWxlSGFuZGxlL2dldERpcmVjdG9yeUhhbmRsZSB0YWtlIGFcbi8vIHNpbmdsZSBwYXRoIHNlZ21lbnQgYW5kIHJlamVjdCAnLi4nIGFuZCBzZXBhcmF0b3JzLCBhbmQgdGhlIGhhbmRsZSBpcyBzY29wZWRcbi8vIHRvIHRoZSBwaWNrZWQgZm9sZGVyLCBzbyB0aGVyZSBpcyBubyB3YXkgdG8gZXNjYXBlIHRoZSB3b3Jrc3BhY2Ugcm9vdC5cblxuLy8gQ2FwcyB0byBrZWVwIHRvb2wgb3V0cHV0IHdpdGhpbiByZWFzb24gZm9yIHRoZSBtb2RlbC5cbmNvbnN0IGtNYXhHcmVwTWF0Y2hlcyA9IDIwMFxuY29uc3Qga01heEdsb2JSZXN1bHRzID0gNTAwXG5cbmZ1bmN0aW9uIHNwbGl0UGF0aChyZWw6IHN0cmluZyk6IHN0cmluZ1tdIHtcbiAgY29uc3QgcGFydHMgPSByZWxcbiAgICAuc3BsaXQoJy8nKVxuICAgIC5tYXAoKHMpID0+IHMudHJpbSgpKVxuICAgIC5maWx0ZXIoKHMpID0+IHMgIT09ICcnICYmIHMgIT09ICcuJylcbiAgZm9yIChjb25zdCBwIG9mIHBhcnRzKSB7XG4gICAgaWYgKHAgPT09ICcuLicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgcGF0aCBlc2NhcGVzIHRoZSB3b3Jrc3BhY2Ugcm9vdDogJHtyZWx9YClcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHBhcnRzXG59XG5cbmZ1bmN0aW9uIGJhc2VuYW1lKHJlbDogc3RyaW5nKTogc3RyaW5nIHtcbiAgY29uc3QgcGFydHMgPSBzcGxpdFBhdGgocmVsKVxuICByZXR1cm4gcGFydHMubGVuZ3RoID8gcGFydHNbcGFydHMubGVuZ3RoIC0gMV0gOiAnJ1xufVxuXG5hc3luYyBmdW5jdGlvbiBnZXREaXIoXG4gIHJvb3Q6IEZpbGVTeXN0ZW1EaXJlY3RvcnlIYW5kbGUsXG4gIHJlbDogc3RyaW5nLFxuICBjcmVhdGUgPSBmYWxzZSxcbik6IFByb21pc2U8RmlsZVN5c3RlbURpcmVjdG9yeUhhbmRsZT4ge1xuICBsZXQgZGlyID0gcm9vdFxuICBmb3IgKGNvbnN0IHNlZyBvZiBzcGxpdFBhdGgocmVsKSkge1xuICAgIGRpciA9IGF3YWl0IGRpci5nZXREaXJlY3RvcnlIYW5kbGUoc2VnLCB7IGNyZWF0ZSB9KVxuICB9XG4gIHJldHVybiBkaXJcbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0RmlsZShcbiAgcm9vdDogRmlsZVN5c3RlbURpcmVjdG9yeUhhbmRsZSxcbiAgcmVsOiBzdHJpbmcsXG4gIGNyZWF0ZSA9IGZhbHNlLFxuKTogUHJvbWlzZTxGaWxlU3lzdGVtRmlsZUhhbmRsZT4ge1xuICBjb25zdCBwYXJ0cyA9IHNwbGl0UGF0aChyZWwpXG4gIGlmIChwYXJ0cy5sZW5ndGggPT09IDApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2VtcHR5IGZpbGUgcGF0aCcpXG4gIH1cbiAgY29uc3QgbmFtZSA9IHBhcnRzLnBvcCgpIGFzIHN0cmluZ1xuICBsZXQgZGlyID0gcm9vdFxuICBmb3IgKGNvbnN0IHNlZyBvZiBwYXJ0cykge1xuICAgIGRpciA9IGF3YWl0IGRpci5nZXREaXJlY3RvcnlIYW5kbGUoc2VnLCB7IGNyZWF0ZSB9KVxuICB9XG4gIHJldHVybiBkaXIuZ2V0RmlsZUhhbmRsZShuYW1lLCB7IGNyZWF0ZSB9KVxufVxuXG5hc3luYyBmdW5jdGlvbiBmaWxlRXhpc3RzKFxuICByb290OiBGaWxlU3lzdGVtRGlyZWN0b3J5SGFuZGxlLFxuICByZWw6IHN0cmluZyxcbik6IFByb21pc2U8Ym9vbGVhbj4ge1xuICB0cnkge1xuICAgIGF3YWl0IGdldEZpbGUocm9vdCwgcmVsKVxuICAgIHJldHVybiB0cnVlXG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbi8vIFdoZXRoZXIgfHJlbHwgcmVzb2x2ZXMgdG8gYSBkaXJlY3RvcnkgKGFuIGVtcHR5IHBhdGggaXMgdGhlIHJvb3QgZGlyZWN0b3J5KS5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpc0RpcmVjdG9yeShcbiAgcm9vdDogRmlsZVN5c3RlbURpcmVjdG9yeUhhbmRsZSxcbiAgcmVsOiBzdHJpbmcsXG4pOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBnZXREaXIocm9vdCwgcmVsKVxuICAgIHJldHVybiB0cnVlXG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbi8vIFJldHVybnMgdGhlIGZpbGUgaXRzZWxmIChhIEJsb2IpIHJhdGhlciB0aGFuIGRlY29kZWQgdGV4dCwgc28gdGhhdCBjYWxsZXJzXG4vLyBjYW4gaGFuZGxlIGFyYml0cmFyeSBiaW5hcnkgY29udGVudC5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZWFkRmlsZShcbiAgcm9vdDogRmlsZVN5c3RlbURpcmVjdG9yeUhhbmRsZSxcbiAgcmVsOiBzdHJpbmcsXG4pOiBQcm9taXNlPEZpbGU+IHtcbiAgcmV0dXJuIChhd2FpdCBnZXRGaWxlKHJvb3QsIHJlbCkpLmdldEZpbGUoKVxufVxuXG5hc3luYyBmdW5jdGlvbiByZWFkVGV4dChcbiAgcm9vdDogRmlsZVN5c3RlbURpcmVjdG9yeUhhbmRsZSxcbiAgcmVsOiBzdHJpbmcsXG4pOiBQcm9taXNlPHN0cmluZz4ge1xuICByZXR1cm4gKGF3YWl0IHJlYWRGaWxlKHJvb3QsIHJlbCkpLnRleHQoKVxufVxuXG5hc3luYyBmdW5jdGlvbiB3cml0ZVRleHQoXG4gIHJvb3Q6IEZpbGVTeXN0ZW1EaXJlY3RvcnlIYW5kbGUsXG4gIHJlbDogc3RyaW5nLFxuICBjb250ZW50OiBzdHJpbmcsXG4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgY29uc3QgZmggPSBhd2FpdCBnZXRGaWxlKHJvb3QsIHJlbCwgdHJ1ZSlcbiAgY29uc3Qgd3JpdGFibGUgPSBhd2FpdCBmaC5jcmVhdGVXcml0YWJsZSgpXG4gIGF3YWl0IHdyaXRhYmxlLndyaXRlKGNvbnRlbnQpXG4gIGF3YWl0IHdyaXRhYmxlLmNsb3NlKClcbn1cblxuLy8gZGlySGFuZGxlLmVudHJpZXMoKSBpc24ndCBpbiBldmVyeSBUUyBsaWI7IGFjY2VzcyB2aWEgYSBsb29zZSB0eXBlLlxuZnVuY3Rpb24gZW50cmllc09mKFxuICBkaXI6IEZpbGVTeXN0ZW1EaXJlY3RvcnlIYW5kbGUsXG4pOiBBc3luY0l0ZXJhYmxlPFtzdHJpbmcsIEZpbGVTeXN0ZW1IYW5kbGVdPiB7XG4gIHJldHVybiAoXG4gICAgZGlyIGFzIHVua25vd24gYXMge1xuICAgICAgZW50cmllcygpOiBBc3luY0l0ZXJhYmxlPFtzdHJpbmcsIEZpbGVTeXN0ZW1IYW5kbGVdPlxuICAgIH1cbiAgKS5lbnRyaWVzKClcbn1cblxuZnVuY3Rpb24gam9pbihiYXNlOiBzdHJpbmcsIG5hbWU6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBiYXNlID8gYCR7YmFzZX0vJHtuYW1lfWAgOiBuYW1lXG59XG5cbmZ1bmN0aW9uIGdsb2JUb1JlZ0V4cChnbG9iOiBzdHJpbmcpOiBSZWdFeHAge1xuICBsZXQgcmUgPSAnJ1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGdsb2IubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBjID0gZ2xvYltpXVxuICAgIGlmIChjID09PSAnKicpIHtcbiAgICAgIGlmIChnbG9iW2kgKyAxXSA9PT0gJyonKSB7XG4gICAgICAgIHJlICs9ICcuKidcbiAgICAgICAgaSsrXG4gICAgICAgIGlmIChnbG9iW2kgKyAxXSA9PT0gJy8nKSB7XG4gICAgICAgICAgaSsrXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlICs9ICdbXi9dKidcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGMgPT09ICc/Jykge1xuICAgICAgcmUgKz0gJ1teL10nXG4gICAgfSBlbHNlIGlmICgnLiteJHt9KCl8W11cXFxcJy5pbmNsdWRlcyhjKSkge1xuICAgICAgcmUgKz0gJ1xcXFwnICsgY1xuICAgIH0gZWxzZSB7XG4gICAgICByZSArPSBjXG4gICAgfVxuICB9XG4gIHJldHVybiBuZXcgUmVnRXhwKCdeJyArIHJlICsgJyQnKVxufVxuXG4vLyBSZWN1cnNpdmVseSB5aWVsZHMgdGhlIHJlbGF0aXZlIHBhdGggb2YgZXZlcnkgZmlsZSB1bmRlciB8ZGlyfC5cbmFzeW5jIGZ1bmN0aW9uKiB3YWxrRmlsZXMoXG4gIGRpcjogRmlsZVN5c3RlbURpcmVjdG9yeUhhbmRsZSxcbiAgcHJlZml4ID0gJycsXG4pOiBBc3luY0dlbmVyYXRvcjx7IHBhdGg6IHN0cmluZzsgaGFuZGxlOiBGaWxlU3lzdGVtRmlsZUhhbmRsZSB9PiB7XG4gIGZvciBhd2FpdCAoY29uc3QgW25hbWUsIGhhbmRsZV0gb2YgZW50cmllc09mKGRpcikpIHtcbiAgICBjb25zdCByZWwgPSBqb2luKHByZWZpeCwgbmFtZSlcbiAgICBpZiAoaGFuZGxlLmtpbmQgPT09ICdkaXJlY3RvcnknKSB7XG4gICAgICB5aWVsZCogd2Fsa0ZpbGVzKGhhbmRsZSBhcyBGaWxlU3lzdGVtRGlyZWN0b3J5SGFuZGxlLCByZWwpXG4gICAgfSBlbHNlIHtcbiAgICAgIHlpZWxkIHsgcGF0aDogcmVsLCBoYW5kbGU6IGhhbmRsZSBhcyBGaWxlU3lzdGVtRmlsZUhhbmRsZSB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsaXN0RGlyKFxuICByb290OiBGaWxlU3lzdGVtRGlyZWN0b3J5SGFuZGxlLFxuICBwYXRoOiBzdHJpbmcsXG4gIGRlcHRoOiBudW1iZXIsXG4pOiBQcm9taXNlPHN0cmluZz4ge1xuICBjb25zdCBzdGFydCA9IGF3YWl0IGdldERpcihyb290LCBwYXRoKVxuICBjb25zdCBsaW5lczogc3RyaW5nW10gPSBbXVxuICBjb25zdCBtYXhEZXB0aCA9IGRlcHRoICYmIGRlcHRoID4gMCA/IGRlcHRoIDogMlxuXG4gIGFzeW5jIGZ1bmN0aW9uIHJlY3Vyc2UoXG4gICAgZGlyOiBGaWxlU3lzdGVtRGlyZWN0b3J5SGFuZGxlLFxuICAgIHJlbDogc3RyaW5nLFxuICAgIGQ6IG51bWJlcixcbiAgKSB7XG4gICAgY29uc3QgbmFtZXM6IEFycmF5PFtzdHJpbmcsIEZpbGVTeXN0ZW1IYW5kbGVdPiA9IFtdXG4gICAgZm9yIGF3YWl0IChjb25zdCBlbnRyeSBvZiBlbnRyaWVzT2YoZGlyKSkge1xuICAgICAgbmFtZXMucHVzaChlbnRyeSlcbiAgICB9XG4gICAgbmFtZXMuc29ydCgoYSwgYikgPT4gYVswXS5sb2NhbGVDb21wYXJlKGJbMF0pKVxuICAgIGZvciAoY29uc3QgW25hbWUsIGhhbmRsZV0gb2YgbmFtZXMpIHtcbiAgICAgIGNvbnN0IGNoaWxkUmVsID0gam9pbihyZWwsIG5hbWUpXG4gICAgICBpZiAoaGFuZGxlLmtpbmQgPT09ICdkaXJlY3RvcnknKSB7XG4gICAgICAgIGxpbmVzLnB1c2goYCR7Y2hpbGRSZWx9L2ApXG4gICAgICAgIGlmIChkIDwgbWF4RGVwdGgpIHtcbiAgICAgICAgICBhd2FpdCByZWN1cnNlKGhhbmRsZSBhcyBGaWxlU3lzdGVtRGlyZWN0b3J5SGFuZGxlLCBjaGlsZFJlbCwgZCArIDEpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxpbmVzLnB1c2goY2hpbGRSZWwpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgYXdhaXQgcmVjdXJzZShzdGFydCwgcGF0aC5yZXBsYWNlKC9cXC8rJC8sICcnKS5yZXBsYWNlKC9eXFwvKy8sICcnKSwgMSlcbiAgcmV0dXJuIGxpbmVzLmxlbmd0aCA/IGxpbmVzLmpvaW4oJ1xcbicpIDogJyhlbXB0eSknXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB2aWV3RmlsZShcbiAgcm9vdDogRmlsZVN5c3RlbURpcmVjdG9yeUhhbmRsZSxcbiAgcGF0aDogc3RyaW5nLFxuICByYW5nZTogbnVtYmVyW10gfCB1bmRlZmluZWQsXG4pOiBQcm9taXNlPHN0cmluZz4ge1xuICBjb25zdCB0ZXh0ID0gYXdhaXQgcmVhZFRleHQocm9vdCwgcGF0aClcbiAgY29uc3QgbGluZXMgPSB0ZXh0LnNwbGl0KCdcXG4nKVxuICBsZXQgc3RhcnQgPSAxXG4gIGxldCBlbmQgPSBsaW5lcy5sZW5ndGhcbiAgaWYgKHJhbmdlICYmIHJhbmdlLmxlbmd0aCA+PSAxKSB7XG4gICAgc3RhcnQgPSBNYXRoLm1heCgxLCByYW5nZVswXSlcbiAgfVxuICBpZiAocmFuZ2UgJiYgcmFuZ2UubGVuZ3RoID49IDIgJiYgcmFuZ2VbMV0gIT09IC0xKSB7XG4gICAgZW5kID0gTWF0aC5taW4obGluZXMubGVuZ3RoLCByYW5nZVsxXSlcbiAgfVxuICBjb25zdCBvdXQ6IHN0cmluZ1tdID0gW11cbiAgZm9yIChsZXQgaSA9IHN0YXJ0OyBpIDw9IGVuZDsgaSsrKSB7XG4gICAgb3V0LnB1c2goYCR7aX1cXHQke2xpbmVzW2kgLSAxXSA/PyAnJ31gKVxuICB9XG4gIHJldHVybiBvdXQuam9pbignXFxuJylcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdyZXAoXG4gIHJvb3Q6IEZpbGVTeXN0ZW1EaXJlY3RvcnlIYW5kbGUsXG4gIHBhdGg6IHN0cmluZyxcbiAgcGF0dGVybjogc3RyaW5nLFxuICBpbmNsdWRlOiBzdHJpbmcsXG4pOiBQcm9taXNlPHN0cmluZz4ge1xuICBjb25zdCByZSA9IG5ldyBSZWdFeHAocGF0dGVybilcbiAgY29uc3QgaW5jbHVkZVJlID0gaW5jbHVkZSA/IGdsb2JUb1JlZ0V4cChpbmNsdWRlKSA6IG51bGxcbiAgY29uc3QgZGlyID0gYXdhaXQgZ2V0RGlyKHJvb3QsIHBhdGgpXG4gIGNvbnN0IGJhc2UgPSBwYXRoLnJlcGxhY2UoL1xcLyskLywgJycpLnJlcGxhY2UoL15cXC8rLywgJycpXG4gIGNvbnN0IG1hdGNoZXM6IHN0cmluZ1tdID0gW11cbiAgZm9yIGF3YWl0IChjb25zdCB7IHBhdGg6IHJlbCwgaGFuZGxlIH0gb2Ygd2Fsa0ZpbGVzKGRpciwgYmFzZSkpIHtcbiAgICBpZiAoaW5jbHVkZVJlICYmICFpbmNsdWRlUmUudGVzdChyZWwpICYmICFpbmNsdWRlUmUudGVzdChiYXNlbmFtZShyZWwpKSkge1xuICAgICAgY29udGludWVcbiAgICB9XG4gICAgbGV0IHRleHQ6IHN0cmluZ1xuICAgIHRyeSB7XG4gICAgICB0ZXh0ID0gYXdhaXQgKGF3YWl0IGhhbmRsZS5nZXRGaWxlKCkpLnRleHQoKVxuICAgIH0gY2F0Y2gge1xuICAgICAgY29udGludWVcbiAgICB9XG4gICAgY29uc3QgZmlsZUxpbmVzID0gdGV4dC5zcGxpdCgnXFxuJylcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpbGVMaW5lcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHJlLnRlc3QoZmlsZUxpbmVzW2ldKSkge1xuICAgICAgICBtYXRjaGVzLnB1c2goYCR7cmVsfToke2kgKyAxfTogJHtmaWxlTGluZXNbaV19YClcbiAgICAgICAgaWYgKG1hdGNoZXMubGVuZ3RoID49IGtNYXhHcmVwTWF0Y2hlcykge1xuICAgICAgICAgIG1hdGNoZXMucHVzaChgLi4uICh0cnVuY2F0ZWQgYXQgJHtrTWF4R3JlcE1hdGNoZXN9IG1hdGNoZXMpYClcbiAgICAgICAgICByZXR1cm4gbWF0Y2hlcy5qb2luKCdcXG4nKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBtYXRjaGVzLmxlbmd0aCA/IG1hdGNoZXMuam9pbignXFxuJykgOiAnKG5vIG1hdGNoZXMpJ1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2xvYihcbiAgcm9vdDogRmlsZVN5c3RlbURpcmVjdG9yeUhhbmRsZSxcbiAgcGF0aDogc3RyaW5nLFxuICBwYXR0ZXJuOiBzdHJpbmcsXG4pOiBQcm9taXNlPHN0cmluZz4ge1xuICBjb25zdCByZSA9IGdsb2JUb1JlZ0V4cChwYXR0ZXJuKVxuICBjb25zdCBkaXIgPSBhd2FpdCBnZXREaXIocm9vdCwgcGF0aClcbiAgY29uc3QgYmFzZSA9IHBhdGgucmVwbGFjZSgvXFwvKyQvLCAnJykucmVwbGFjZSgvXlxcLysvLCAnJylcbiAgY29uc3QgcmVzdWx0czogc3RyaW5nW10gPSBbXVxuICBmb3IgYXdhaXQgKGNvbnN0IHsgcGF0aDogcmVsIH0gb2Ygd2Fsa0ZpbGVzKGRpciwgYmFzZSkpIHtcbiAgICBpZiAocmUudGVzdChyZWwpIHx8IHJlLnRlc3QoYmFzZW5hbWUocmVsKSkpIHtcbiAgICAgIHJlc3VsdHMucHVzaChyZWwpXG4gICAgICBpZiAocmVzdWx0cy5sZW5ndGggPj0ga01heEdsb2JSZXN1bHRzKSB7XG4gICAgICAgIHJlc3VsdHMucHVzaChgLi4uICh0cnVuY2F0ZWQgYXQgJHtrTWF4R2xvYlJlc3VsdHN9IHJlc3VsdHMpYClcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdHMubGVuZ3RoID8gcmVzdWx0cy5qb2luKCdcXG4nKSA6ICcobm8gbWF0Y2hlcyknXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhcHBlbmRGaWxlKFxuICByb290OiBGaWxlU3lzdGVtRGlyZWN0b3J5SGFuZGxlLFxuICBwYXRoOiBzdHJpbmcsXG4gIGNvbnRlbnQ6IHN0cmluZyxcbik6IFByb21pc2U8c3RyaW5nPiB7XG4gIGNvbnN0IGV4aXN0ZWQgPSBhd2FpdCBmaWxlRXhpc3RzKHJvb3QsIHBhdGgpXG4gIGNvbnN0IHByZXZpb3VzID0gZXhpc3RlZCA/IGF3YWl0IHJlYWRUZXh0KHJvb3QsIHBhdGgpIDogJydcbiAgYXdhaXQgd3JpdGVUZXh0KHJvb3QsIHBhdGgsIHByZXZpb3VzICsgY29udGVudClcbiAgcmV0dXJuIGBBcHBlbmRlZCAke2NvbnRlbnQubGVuZ3RofSBieXRlcyB0byAke3BhdGh9YFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlRmlsZShcbiAgcm9vdDogRmlsZVN5c3RlbURpcmVjdG9yeUhhbmRsZSxcbiAgcGF0aDogc3RyaW5nLFxuICBmaWxlVGV4dDogc3RyaW5nLFxuKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgLy8gTWF0Y2hlcyB0aGUgdGV4dC1lZGl0b3IgYGNyZWF0ZWAgc2VtYW50aWNzOiBjcmVhdGVzIHRoZSBmaWxlLCBvdmVyd3JpdGluZ1xuICAvLyBpdCBpZiBpdCBhbHJlYWR5IGV4aXN0cy5cbiAgY29uc3QgZXhpc3RlZCA9IGF3YWl0IGZpbGVFeGlzdHMocm9vdCwgcGF0aClcbiAgYXdhaXQgd3JpdGVUZXh0KHJvb3QsIHBhdGgsIGZpbGVUZXh0KVxuICByZXR1cm4gYCR7ZXhpc3RlZCA/ICdPdmVyd3JvdGUnIDogJ0NyZWF0ZWQnfSAke3BhdGh9ICgke2ZpbGVUZXh0Lmxlbmd0aH0gYnl0ZXMpYFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc3RyUmVwbGFjZShcbiAgcm9vdDogRmlsZVN5c3RlbURpcmVjdG9yeUhhbmRsZSxcbiAgcGF0aDogc3RyaW5nLFxuICBvbGRTdHI6IHN0cmluZyxcbiAgbmV3U3RyOiBzdHJpbmcsXG4pOiBQcm9taXNlPHN0cmluZz4ge1xuICBjb25zdCB0ZXh0ID0gYXdhaXQgcmVhZFRleHQocm9vdCwgcGF0aClcbiAgY29uc3QgZmlyc3QgPSB0ZXh0LmluZGV4T2Yob2xkU3RyKVxuICBpZiAoZmlyc3QgPT09IC0xKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdvbGRfc3RyIHdhcyBub3QgZm91bmQgaW4gdGhlIGZpbGUnKVxuICB9XG4gIGlmICh0ZXh0LmluY2x1ZGVzKG9sZFN0ciwgZmlyc3QgKyAxKSkge1xuICAgIHRocm93IG5ldyBFcnJvcignb2xkX3N0ciBpcyBub3QgdW5pcXVlIGluIHRoZSBmaWxlJylcbiAgfVxuICBjb25zdCB1cGRhdGVkID1cbiAgICB0ZXh0LnNsaWNlKDAsIGZpcnN0KSArIG5ld1N0ciArIHRleHQuc2xpY2UoZmlyc3QgKyBvbGRTdHIubGVuZ3RoKVxuICBhd2FpdCB3cml0ZVRleHQocm9vdCwgcGF0aCwgdXBkYXRlZClcbiAgcmV0dXJuIGBSZXBsYWNlZCB0ZXh0IGluICR7cGF0aH1gXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpbnNlcnQoXG4gIHJvb3Q6IEZpbGVTeXN0ZW1EaXJlY3RvcnlIYW5kbGUsXG4gIHBhdGg6IHN0cmluZyxcbiAgaW5zZXJ0TGluZTogbnVtYmVyLFxuICBuZXdTdHI6IHN0cmluZyxcbik6IFByb21pc2U8c3RyaW5nPiB7XG4gIGNvbnN0IHRleHQgPSBhd2FpdCByZWFkVGV4dChyb290LCBwYXRoKVxuICBjb25zdCBsaW5lcyA9IHRleHQuc3BsaXQoJ1xcbicpXG4gIGNvbnN0IGF0ID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oaW5zZXJ0TGluZSwgbGluZXMubGVuZ3RoKSlcbiAgY29uc3QgaW5zZXJ0ZWQgPSBuZXdTdHIuc3BsaXQoJ1xcbicpXG4gIGxpbmVzLnNwbGljZShhdCwgMCwgLi4uaW5zZXJ0ZWQpXG4gIGF3YWl0IHdyaXRlVGV4dChyb290LCBwYXRoLCBsaW5lcy5qb2luKCdcXG4nKSlcbiAgcmV0dXJuIGBJbnNlcnRlZCAke2luc2VydGVkLmxlbmd0aH0gbGluZShzKSBpbnRvICR7cGF0aH0gYWZ0ZXIgbGluZSAke2F0fWBcbn1cbiIsIi8vIENvcHlyaWdodCAoYykgMjAyNiBUaGUgQnJhdmUgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbi8vIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXMgZmlsZSxcbi8vIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwczovL21vemlsbGEub3JnL01QTC8yLjAvLlxuXG4vLyBwb3N0TWVzc2FnZSBicmlkZ2UgdGhhdCBsZXRzIHRoZSBgdmlldy5gIHNpYmxpbmcgb3JpZ2luIHJlYWQgZmlsZXMgb3V0IG9mIHRoZVxuLy8gd29ya3NwYWNlIGZvbGRlci4gT25seSB0aGF0IG9yaWdpbiBpcyBhY2NlcHRlZDogdGhlIHdvcmtzcGFjZSBob2xkcyBhblxuLy8gYXV0by1ncmFudGVkIEZpbGUgU3lzdGVtIEFjY2VzcyBoYW5kbGUgdG8gYSB1c2VyLXBpY2tlZCBmb2xkZXIuXG5cbmltcG9ydCB7IHJlYWRGaWxlIH0gZnJvbSAnLi9maWxlX29wcydcblxuZXhwb3J0IGNvbnN0IGtSZWFkRmlsZVJlcXVlc3QgPSAnUkVBRF9GSUxFJ1xuZXhwb3J0IGNvbnN0IGtSZWFkRmlsZVJlc3BvbnNlID0gJ1JFQURfRklMRV9SRVNVTFQnXG5cbmludGVyZmFjZSBSZWFkRmlsZVJlc3BvbnNlIHtcbiAgdHlwZTogdHlwZW9mIGtSZWFkRmlsZVJlc3BvbnNlXG4gIHJlcXVlc3RJZD86IHVua25vd25cbiAgLy8gQSBGaWxlIChpLmUuIGEgQmxvYiksIHNvIGFyYml0cmFyeSBiaW5hcnkgY29udGVudCBzdXJ2aXZlcyBhbmQgYSBsYXJnZSBmaWxlXG4gIC8vIGlzbid0IGNvcGllZCBpbnRvIHRoZSBtZXNzYWdlLlxuICBmaWxlPzogRmlsZVxuICBlcnJvcj86IHN0cmluZ1xufVxuXG5jb25zdCBrU2NoZW1lID0gJ2Nocm9tZS11bnRydXN0ZWQ6Ly8nXG5cbi8vIGNocm9tZS11bnRydXN0ZWQ6Ly9sZW8td29ya3NwYWNlIC0+IGNocm9tZS11bnRydXN0ZWQ6Ly92aWV3Lmxlby13b3Jrc3BhY2UuXG4vLyBEZXJpdmVkIGF0IHJ1bnRpbWUgc28gaXQgZm9sbG93cyB0aGUgd29ya3NwYWNlIGhvc3QsIGFuZCAnJyBmb3IgYW55dGhpbmcgdGhhdFxuLy8gaXNuJ3QgYSBjaHJvbWUtdW50cnVzdGVkIG9yaWdpbiwgd2hpY2ggbXVzdCBuZXZlciBiZSB0cnVzdGVkLlxuZXhwb3J0IGZ1bmN0aW9uIHZpZXdPcmlnaW4ob3JpZ2luOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gb3JpZ2luLnN0YXJ0c1dpdGgoa1NjaGVtZSlcbiAgICA/IG9yaWdpbi5yZXBsYWNlKGtTY2hlbWUsIGAke2tTY2hlbWV9dmlldy5gKVxuICAgIDogJydcbn1cblxuYXN5bmMgZnVuY3Rpb24gcmVhZEZpbGVQYXlsb2FkKFxuICByb290OiBQcm9taXNlPEZpbGVTeXN0ZW1EaXJlY3RvcnlIYW5kbGU+LFxuICBwYXRoOiB1bmtub3duLFxuKTogUHJvbWlzZTx7IGZpbGU/OiBGaWxlOyBlcnJvcj86IHN0cmluZyB9PiB7XG4gIC8vIENoZWNrZWQgYmVmb3JlIGF3YWl0aW5nIHRoZSBoYW5kbGUgc28gYSBtYWxmb3JtZWQgcmVxdWVzdCBmYWlscyBmYXN0LlxuICBpZiAodHlwZW9mIHBhdGggIT09ICdzdHJpbmcnIHx8IHBhdGggPT09ICcnKSB7XG4gICAgcmV0dXJuIHsgZXJyb3I6ICdSRUFEX0ZJTEUgcmVxdWlyZXMgYSBub24tZW1wdHkgc3RyaW5nIFwicGF0aFwiJyB9XG4gIH1cbiAgdHJ5IHtcbiAgICAvLyBBZGQgYSB0aW1lb3V0IHNvIHdlIGRvbid0IGhhbmcgZm9yZXZlciB3YWl0aW5nIGZvciB0aGUgZGlyZWN0b3J5IGhhbmRsZVxuICAgIGNvbnN0IHRpbWVvdXRQcm9taXNlID0gbmV3IFByb21pc2U8bmV2ZXI+KChfcmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBzZXRUaW1lb3V0KFxuICAgICAgICAoKSA9PiByZWplY3QobmV3IEVycm9yKCdXb3Jrc3BhY2UgZm9sZGVyIG5vdCBhdmFpbGFibGUgKHRpbWVvdXQpJykpLFxuICAgICAgICA1MDAwLFxuICAgICAgKVxuICAgIH0pXG4gICAgY29uc3QgaGFuZGxlID0gYXdhaXQgUHJvbWlzZS5yYWNlKFtyb290LCB0aW1lb3V0UHJvbWlzZV0pXG4gICAgcmV0dXJuIHsgZmlsZTogYXdhaXQgcmVhZEZpbGUoaGFuZGxlLCBwYXRoKSB9XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4geyBlcnJvcjogZSBpbnN0YW5jZW9mIEVycm9yID8gZS5tZXNzYWdlIDogU3RyaW5nKGUpIH1cbiAgfVxufVxuXG4vLyB8cm9vdHwgcmVzb2x2ZXMgd2hlbiB0aGUgZGlyZWN0b3J5IGhhbmRsZSBhcnJpdmVzIHZpYSBsYXVuY2hRdWV1ZSwgc28gYVxuLy8gcmVxdWVzdCB0aGF0IHJhY2VzIGFoZWFkIG9mIGl0IGlzIHNlcnZlZCBvbmNlIGl0IGxhbmRzLlxuZXhwb3J0IGZ1bmN0aW9uIGluc3RhbGxNZXNzYWdlSGFuZGxlcihcbiAgcm9vdDogUHJvbWlzZTxGaWxlU3lzdGVtRGlyZWN0b3J5SGFuZGxlPixcbiAgb3JpZ2luID0gd2luZG93LmxvY2F0aW9uLm9yaWdpbixcbikge1xuICBjb25zdCB0YXJnZXRPcmlnaW4gPSB2aWV3T3JpZ2luKG9yaWdpbilcbiAgaWYgKCF0YXJnZXRPcmlnaW4pIHtcbiAgICBjb25zb2xlLmVycm9yKCdbbGVvLXdvcmtzcGFjZV0gbm8gdmlld2VyIG9yaWdpbiB0byBhY2NlcHQgbWVzc2FnZXMgZnJvbScpXG4gICAgcmV0dXJuXG4gIH1cbiAgY29uc29sZS5kZWJ1ZyhcbiAgICAnW2xlby13b3Jrc3BhY2VdIG1lc3NhZ2UgaGFuZGxlciBpbnN0YWxsZWQsIGFjY2VwdGluZyBmcm9tJyxcbiAgICB0YXJnZXRPcmlnaW4sXG4gIClcblxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGFzeW5jIChldmVudDogTWVzc2FnZUV2ZW50KSA9PiB7XG4gICAgY29uc29sZS5kZWJ1ZyhcbiAgICAgICdbbGVvLXdvcmtzcGFjZV0gcmVjZWl2ZWQgbWVzc2FnZSBmcm9tJyxcbiAgICAgIGV2ZW50Lm9yaWdpbixcbiAgICAgIGV2ZW50LmRhdGEsXG4gICAgKVxuICAgIGlmIChldmVudC5vcmlnaW4gIT09IHRhcmdldE9yaWdpbikge1xuICAgICAgY29uc29sZS5kZWJ1ZyhcbiAgICAgICAgJ1tsZW8td29ya3NwYWNlXSBpZ25vcmluZyBtZXNzYWdlIGZyb20gd3Jvbmcgb3JpZ2luLCBleHBlY3RlZCcsXG4gICAgICAgIHRhcmdldE9yaWdpbixcbiAgICAgIClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBjb25zdCBkYXRhID0gZXZlbnQuZGF0YSBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiB8IG51bGxcbiAgICBpZiAoXG4gICAgICB0eXBlb2YgZGF0YSAhPT0gJ29iamVjdCdcbiAgICAgIHx8IGRhdGEgPT09IG51bGxcbiAgICAgIHx8IGRhdGEudHlwZSAhPT0ga1JlYWRGaWxlUmVxdWVzdFxuICAgICkge1xuICAgICAgY29uc29sZS5kZWJ1ZygnW2xlby13b3Jrc3BhY2VdIGlnbm9yaW5nIG5vbi1SRUFEX0ZJTEUgbWVzc2FnZScpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLy8gUmVwbHkgdG8gdGhlIHNlbmRlciB3aXRoIGFuIGV4cGxpY2l0IHRhcmdldCBvcmlnaW4sIG5ldmVyICcqJy5cbiAgICBjb25zdCBzb3VyY2UgPSBldmVudC5zb3VyY2UgYXMgV2luZG93IHwgbnVsbFxuICAgIGlmICghc291cmNlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdbbGVvLXdvcmtzcGFjZV0gUkVBRF9GSUxFIGhhcyBubyBzb3VyY2UgdG8gcmVwbHkgdG8nKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGNvbnNvbGUuZGVidWcoJ1tsZW8td29ya3NwYWNlXSBwcm9jZXNzaW5nIFJFQURfRklMRSBmb3IgcGF0aDonLCBkYXRhLnBhdGgpXG4gICAgY29uc3QgcmVzcG9uc2U6IFJlYWRGaWxlUmVzcG9uc2UgPSB7XG4gICAgICB0eXBlOiBrUmVhZEZpbGVSZXNwb25zZSxcbiAgICAgIHJlcXVlc3RJZDogZGF0YS5yZXF1ZXN0SWQsXG4gICAgICAuLi4oYXdhaXQgcmVhZEZpbGVQYXlsb2FkKHJvb3QsIGRhdGEucGF0aCkpLFxuICAgIH1cbiAgICBjb25zb2xlLmRlYnVnKFxuICAgICAgJ1tsZW8td29ya3NwYWNlXSBzZW5kaW5nIHJlc3BvbnNlOicsXG4gICAgICByZXNwb25zZS5lcnJvciB8fCAnZmlsZSBsb2FkZWQnLFxuICAgIClcbiAgICBzb3VyY2UucG9zdE1lc3NhZ2UocmVzcG9uc2UsIHRhcmdldE9yaWdpbilcbiAgfSlcbn1cbiIsIi8vIENvcHlyaWdodCAoYykgMjAyNiBUaGUgQnJhdmUgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbi8vIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXMgZmlsZSxcbi8vIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwczovL21vemlsbGEub3JnL01QTC8yLjAvLlxuXG5pbXBvcnQgeyBrUmVhZEZpbGVSZXF1ZXN0LCBrUmVhZEZpbGVSZXNwb25zZSB9IGZyb20gJy4vbWVzc2FnZV9oYW5kbGVyJ1xuXG5jb25zdCBrU2NoZW1lID0gJ2Nocm9tZS11bnRydXN0ZWQ6Ly8nXG5cbi8vIGNocm9tZS11bnRydXN0ZWQ6Ly92aWV3Ljx1dWlkPi5sZW8td29ya3NwYWNlIC0+IGNocm9tZS11bnRydXN0ZWQ6Ly88dXVpZD4ubGVvLXdvcmtzcGFjZVxuZXhwb3J0IGZ1bmN0aW9uIHdvcmtzcGFjZU9yaWdpbih2aWV3ZXJPcmlnaW46IHN0cmluZyk6IHN0cmluZyB7XG4gIGNvbnN0IHZpZXdQcmVmaXggPSBgJHtrU2NoZW1lfXZpZXcuYFxuICByZXR1cm4gdmlld2VyT3JpZ2luLnN0YXJ0c1dpdGgodmlld1ByZWZpeClcbiAgICA/IHZpZXdlck9yaWdpbi5yZXBsYWNlKHZpZXdQcmVmaXgsIGtTY2hlbWUpXG4gICAgOiAnJ1xufVxuXG4vLyBQYXJzZXMgdGhlICNmaWxlPTxmaWxlbmFtZT4gZnJhZ21lbnQgZnJvbSB0aGUgVVJMLlxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlRmlsZUZyYWdtZW50KGhhc2g6IHN0cmluZyk6IHN0cmluZyB8IG51bGwge1xuICBpZiAoIWhhc2ggfHwgIWhhc2guc3RhcnRzV2l0aCgnIycpKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuICBjb25zdCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKGhhc2guc2xpY2UoMSkpXG4gIHJldHVybiBwYXJhbXMuZ2V0KCdmaWxlJylcbn1cblxuZnVuY3Rpb24gc2V0dXBQYXJlbnRCcmlkZ2UoXG4gIHN3UG9ydDogTWVzc2FnZVBvcnQsXG4gIHBhcmVudDogV2luZG93LFxuICB3c09yaWdpbjogc3RyaW5nLFxuKSB7XG4gIGNvbnNvbGUuZGVidWcoJ1tsZW8td29ya3NwYWNlLXZpZXddIHNldHRpbmcgdXAgcGFyZW50IGJyaWRnZSB0bycsIHdzT3JpZ2luKVxuXG4gIHN3UG9ydC5vbm1lc3NhZ2UgPSAoZXZlbnQ6IE1lc3NhZ2VFdmVudCkgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSBldmVudC5kYXRhIGFzIHsgdHlwZTogc3RyaW5nIH0gfCBudWxsXG4gICAgY29uc29sZS5kZWJ1ZygnW2xlby13b3Jrc3BhY2Utdmlld10gcmVjZWl2ZWQgZnJvbSBTVzonLCBkYXRhKVxuICAgIGlmICghZGF0YSkgcmV0dXJuXG5cbiAgICBpZiAoZGF0YS50eXBlID09PSBrUmVhZEZpbGVSZXF1ZXN0KSB7XG4gICAgICBjb25zb2xlLmRlYnVnKCdbbGVvLXdvcmtzcGFjZS12aWV3XSBmb3J3YXJkaW5nIHRvIHBhcmVudDonLCBkYXRhKVxuICAgICAgcGFyZW50LnBvc3RNZXNzYWdlKGRhdGEsIHdzT3JpZ2luKVxuICAgIH1cbiAgfVxuXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgKGV2ZW50OiBNZXNzYWdlRXZlbnQpID0+IHtcbiAgICBjb25zb2xlLmRlYnVnKFxuICAgICAgJ1tsZW8td29ya3NwYWNlLXZpZXddIHJlY2VpdmVkIG1lc3NhZ2UgZnJvbScsXG4gICAgICBldmVudC5vcmlnaW4sXG4gICAgICBldmVudC5kYXRhLFxuICAgIClcbiAgICBpZiAoZXZlbnQub3JpZ2luICE9PSB3c09yaWdpbikge1xuICAgICAgY29uc29sZS5kZWJ1ZygnW2xlby13b3Jrc3BhY2Utdmlld10gaWdub3JpbmcgbWVzc2FnZSBmcm9tIHdyb25nIG9yaWdpbicpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgY29uc3QgZGF0YSA9IGV2ZW50LmRhdGEgYXMgeyB0eXBlOiBzdHJpbmcgfSB8IG51bGxcbiAgICBpZiAoIWRhdGEgfHwgZGF0YS50eXBlICE9PSBrUmVhZEZpbGVSZXNwb25zZSkge1xuICAgICAgY29uc29sZS5kZWJ1ZygnW2xlby13b3Jrc3BhY2Utdmlld10gaWdub3Jpbmcgbm9uLXJlc3BvbnNlIG1lc3NhZ2UnKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGNvbnNvbGUuZGVidWcoJ1tsZW8td29ya3NwYWNlLXZpZXddIGZvcndhcmRpbmcgcmVzcG9uc2UgdG8gU1c6JywgZGF0YSlcbiAgICBzd1BvcnQucG9zdE1lc3NhZ2UoZGF0YSlcbiAgfSlcbn1cblxuYXN5bmMgZnVuY3Rpb24gaW5pdGlhbGl6ZVNlcnZpY2VXb3JrZXIoXG4gIHBhcmVudDogV2luZG93LFxuICB3c09yaWdpbjogc3RyaW5nLFxuKTogUHJvbWlzZTx2b2lkPiB7XG4gIGNvbnN0IHJlZ2lzdHJhdGlvbiA9IGF3YWl0IG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLnJlYWR5XG5cbiAgY29uc3Qgc3cgPSByZWdpc3RyYXRpb24uYWN0aXZlXG4gIGlmICghc3cpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIGFjdGl2ZSBzZXJ2aWNlIHdvcmtlcicpXG4gIH1cblxuICBjb25zdCBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsKClcblxuICBzZXR1cFBhcmVudEJyaWRnZShjaGFubmVsLnBvcnQxLCBwYXJlbnQsIHdzT3JpZ2luKVxuXG4gIGF3YWl0IG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9IChldmVudDogTWVzc2FnZUV2ZW50KSA9PiB7XG4gICAgICBjb25zdCBkYXRhID0gZXZlbnQuZGF0YSBhcyB7IHR5cGU6IHN0cmluZyB9IHwgbnVsbFxuICAgICAgaWYgKGRhdGE/LnR5cGUgPT09ICdSRUFEWScpIHtcbiAgICAgICAgc2V0dXBQYXJlbnRCcmlkZ2UoY2hhbm5lbC5wb3J0MSwgcGFyZW50LCB3c09yaWdpbilcbiAgICAgICAgcmVzb2x2ZSgpXG4gICAgICB9XG4gICAgfVxuXG4gICAgc3cucG9zdE1lc3NhZ2UoeyB0eXBlOiAnSU5JVCcgfSwgW2NoYW5uZWwucG9ydDJdKVxuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICByZWplY3QobmV3IEVycm9yKCdTZXJ2aWNlIHdvcmtlciBpbml0aWFsaXphdGlvbiB0aW1lZCBvdXQnKSlcbiAgICB9LCAxMDAwMClcbiAgfSlcbn1cblxubGV0IGNvbnRlbnRJZnJhbWU6IEhUTUxJRnJhbWVFbGVtZW50IHwgbnVsbCA9IG51bGxcblxuZnVuY3Rpb24gZGlzcGxheUZpbGVJbklmcmFtZShmaWxlbmFtZTogc3RyaW5nKSB7XG4gIGNvbnN0IHJvb3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpXG4gIGlmICghcm9vdCkge1xuICAgIGNvbnNvbGUuZXJyb3IoJ1tsZW8td29ya3NwYWNlLXZpZXddICNyb290IGVsZW1lbnQgbm90IGZvdW5kJylcbiAgICByZXR1cm5cbiAgfVxuXG4gIHdoaWxlIChyb290LmZpcnN0Q2hpbGQpIHtcbiAgICByb290LnJlbW92ZUNoaWxkKHJvb3QuZmlyc3RDaGlsZClcbiAgfVxuXG4gIGlmICghY29udGVudElmcmFtZSkge1xuICAgIGNvbnRlbnRJZnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpZnJhbWUnKVxuICB9XG5cbiAgY29udGVudElmcmFtZS5zcmMgPSBgLyR7ZmlsZW5hbWV9YFxuICByb290LmFwcGVuZENoaWxkKGNvbnRlbnRJZnJhbWUpXG5cbiAgY29uc29sZS5kZWJ1ZygnW2xlby13b3Jrc3BhY2Utdmlld10gZGlzcGxheWluZyBmaWxlOicsIGZpbGVuYW1lKVxufVxuXG5sZXQgc2VydmljZVdvcmtlclJlYWR5ID0gZmFsc2VcbmxldCBwZW5kaW5nUGFyZW50OiBXaW5kb3cgfCBudWxsID0gbnVsbFxubGV0IHBlbmRpbmdXc09yaWdpbjogc3RyaW5nIHwgbnVsbCA9IG51bGxcblxuYXN5bmMgZnVuY3Rpb24gaW5pdGlhbGl6ZSgpIHtcbiAgY29uc29sZS5kZWJ1ZygnW2xlby13b3Jrc3BhY2Utdmlld10gYnVuZGxlIGxvYWRlZCBhdCcsIHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4pXG5cbiAgY29uc3Qgd3NPcmlnaW4gPSB3b3Jrc3BhY2VPcmlnaW4od2luZG93LmxvY2F0aW9uLm9yaWdpbilcbiAgaWYgKCF3c09yaWdpbikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ1tsZW8td29ya3NwYWNlLXZpZXddIGludmFsaWQgdmlld2VyIG9yaWdpbicpXG4gICAgcmV0dXJuXG4gIH1cblxuICBjb25zdCBwYXJlbnQgPSB3aW5kb3cucGFyZW50ICE9PSB3aW5kb3cgPyB3aW5kb3cucGFyZW50IDogd2luZG93Lm9wZW5lclxuICBpZiAoIXBhcmVudCkge1xuICAgIGNvbnNvbGUuZXJyb3IoJ1tsZW8td29ya3NwYWNlLXZpZXddIGNhbm5vdCBhY2Nlc3MgcGFyZW50IHdvcmtzcGFjZScpXG4gICAgcmV0dXJuXG4gIH1cblxuICBwZW5kaW5nUGFyZW50ID0gcGFyZW50XG4gIHBlbmRpbmdXc09yaWdpbiA9IHdzT3JpZ2luXG5cbiAgY29uc3QgZmlsZW5hbWUgPSBwYXJzZUZpbGVGcmFnbWVudCh3aW5kb3cubG9jYXRpb24uaGFzaClcbiAgaWYgKCFmaWxlbmFtZSkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdoYXNoY2hhbmdlJywgaGFuZGxlSGFzaENoYW5nZSlcbiAgICByZXR1cm5cbiAgfVxuXG4gIGF3YWl0IGRpc3BsYXlGaWxlKGZpbGVuYW1lKVxufVxuXG5hc3luYyBmdW5jdGlvbiBoYW5kbGVIYXNoQ2hhbmdlKCkge1xuICBjb25zdCBmaWxlbmFtZSA9IHBhcnNlRmlsZUZyYWdtZW50KHdpbmRvdy5sb2NhdGlvbi5oYXNoKVxuICBpZiAoZmlsZW5hbWUpIHtcbiAgICBhd2FpdCBkaXNwbGF5RmlsZShmaWxlbmFtZSlcbiAgfSBlbHNlIHtcbiAgICBjb250ZW50SWZyYW1lID0gbnVsbFxuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGRpc3BsYXlGaWxlKGZpbGVuYW1lOiBzdHJpbmcpIHtcbiAgaWYgKCFwZW5kaW5nUGFyZW50IHx8ICFwZW5kaW5nV3NPcmlnaW4pIHtcbiAgICBjb25zb2xlLmVycm9yKCdbbGVvLXdvcmtzcGFjZS12aWV3XSBwYXJlbnQgd29ya3NwYWNlIG5vdCBhdmFpbGFibGUnKVxuICAgIHJldHVyblxuICB9XG5cbiAgdHJ5IHtcbiAgICBpZiAoIXNlcnZpY2VXb3JrZXJSZWFkeSkge1xuICAgICAgYXdhaXQgaW5pdGlhbGl6ZVNlcnZpY2VXb3JrZXIocGVuZGluZ1BhcmVudCwgcGVuZGluZ1dzT3JpZ2luKVxuICAgICAgc2VydmljZVdvcmtlclJlYWR5ID0gdHJ1ZVxuICAgIH1cblxuICAgIGRpc3BsYXlGaWxlSW5JZnJhbWUoZmlsZW5hbWUpXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignW2xlby13b3Jrc3BhY2Utdmlld10gRmFpbGVkIHRvIGRpc3BsYXkgZmlsZTonLCBlcnJvcilcbiAgfVxufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgaW5pdGlhbGl6ZSlcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==