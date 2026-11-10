/*!*****************************************************************************************!*\
  !*** ./components/ai_chat/resources/leo_workspace/leo_workspace_view_sw.ts + 2 modules ***!
  \*****************************************************************************************/

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

;// ./components/ai_chat/resources/leo_workspace/leo_workspace_view_sw.ts
// Copyright (c) 2026 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.

let parentPort = null;
const pendingRequests = new Map();
const kStaticResources = new Set([
    '/leo_workspace_view.bundle.js',
    '/leo_workspace_view_sw.bundle.js',
]);
function handleInit(port) {
    parentPort = port;
    parentPort.onmessage = handleParentMessage;
    console.debug('[leo-workspace-view-sw] initialized with parent port');
}
function handleParentMessage(event) {
    const data = event.data;
    if (!data || data.type !== kReadFileResponse) {
        return;
    }
    const requestId = data.requestId;
    if (!requestId || typeof requestId !== 'string') {
        return;
    }
    const pending = pendingRequests.get(requestId);
    if (!pending) {
        console.warn('[leo-workspace-view-sw] no pending request for', requestId);
        return;
    }
    pendingRequests.delete(requestId);
    if (data.error) {
        pending.resolve(new Response(data.error, {
            status: 404,
            statusText: 'Not Found',
            headers: { 'Content-Type': 'text/plain' },
        }));
    }
    else if (data.file) {
        const file = data.file;
        pending.resolve(new Response(file, {
            status: 200,
            statusText: 'OK',
            headers: {
                'Content-Type': file.type || 'application/octet-stream',
                'Content-Length': String(file.size),
                'X-Content-Type-Options': 'nosniff',
            },
        }));
    }
    else {
        pending.resolve(new Response('No file in response', {
            status: 500,
            statusText: 'Internal Server Error',
            headers: { 'Content-Type': 'text/plain' },
        }));
    }
}
function requestFileFromParent(path) {
    return new Promise((resolve) => {
        if (!parentPort) {
            resolve(new Response('Service worker not initialized', {
                status: 503,
                statusText: 'Service Unavailable',
                headers: { 'Content-Type': 'text/plain' },
            }));
            return;
        }
        const requestId = crypto.randomUUID();
        pendingRequests.set(requestId, { resolve, reject: () => { } });
        parentPort.postMessage({
            type: kReadFileRequest,
            requestId,
            path,
        });
        setTimeout(() => {
            if (pendingRequests.has(requestId)) {
                pendingRequests.delete(requestId);
                resolve(new Response('Request timed out', {
                    status: 504,
                    statusText: 'Gateway Timeout',
                    headers: { 'Content-Type': 'text/plain' },
                }));
            }
        }, 30000);
    });
}
self.addEventListener('message', (event) => {
    const data = event.data;
    if (!data)
        return;
    if (data.type === 'INIT' && event.ports[0]) {
        handleInit(event.ports[0]);
        event.ports[0].postMessage({ type: 'READY' });
    }
});
self.addEventListener('fetch', (event) => {
    const url = new URL(event.request.url);
    if (url.origin !== self.location.origin) {
        return;
    }
    if (kStaticResources.has(url.pathname)) {
        return;
    }
    if (url.pathname === '/' || url.pathname === '') {
        return;
    }
    const filePath = url.pathname.slice(1);
    if (!filePath) {
        return;
    }
    console.debug('[leo-workspace-view-sw] intercepting fetch for', filePath);
    event.respondWith(requestFileFromParent(filePath));
});
self.addEventListener('activate', (event) => {
    console.debug('[leo-workspace-view-sw] activated');
    event.waitUntil(self.clients.claim());
});
self.addEventListener('install', (event) => {
    console.debug('[leo-workspace-view-sw] installed');
    event.waitUntil(self.skipWaiting());
});


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGVvX3dvcmtzcGFjZV92aWV3X3N3LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBLDZEQUE2RDtBQUM3RCxzRUFBc0U7QUFDdEUsNEVBQTRFO0FBQzVFLHNEQUFzRDtBQUV0RCwwREFBMEQ7QUFDMUQsdUVBQXVFO0FBQ3ZFLCtFQUErRTtBQUMvRSwrRUFBK0U7QUFDL0UseUVBQXlFO0FBRXpFLHdEQUF3RDtBQUN4RCxNQUFNLGVBQWUsR0FBRyxHQUFHO0FBQzNCLE1BQU0sZUFBZSxHQUFHLEdBQUc7QUFFM0IsU0FBUyxTQUFTLENBQUMsR0FBVztJQUM1QixNQUFNLEtBQUssR0FBRyxHQUFHO1NBQ2QsS0FBSyxDQUFDLEdBQUcsQ0FBQztTQUNWLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ3BCLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDO0lBQ3ZDLEtBQUssTUFBTSxDQUFDLElBQUksS0FBSyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUM7WUFDZixNQUFNLElBQUksS0FBSyxDQUFDLG9DQUFvQyxHQUFHLEVBQUUsQ0FBQztRQUM1RCxDQUFDO0lBQ0gsQ0FBQztJQUNELE9BQU8sS0FBSztBQUNkLENBQUM7QUFFRCxTQUFTLFFBQVEsQ0FBQyxHQUFXO0lBQzNCLE1BQU0sS0FBSyxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUM7SUFDNUIsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtBQUNwRCxDQUFDO0FBRUQsS0FBSyxVQUFVLE1BQU0sQ0FDbkIsSUFBK0IsRUFDL0IsR0FBVyxFQUNYLE1BQU0sR0FBRyxLQUFLO0lBRWQsSUFBSSxHQUFHLEdBQUcsSUFBSTtJQUNkLEtBQUssTUFBTSxHQUFHLElBQUksU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7UUFDakMsR0FBRyxHQUFHLE1BQU0sR0FBRyxDQUFDLGtCQUFrQixDQUFDLEdBQUcsRUFBRSxFQUFFLE1BQU0sRUFBRSxDQUFDO0lBQ3JELENBQUM7SUFDRCxPQUFPLEdBQUc7QUFDWixDQUFDO0FBRUQsS0FBSyxVQUFVLE9BQU8sQ0FDcEIsSUFBK0IsRUFDL0IsR0FBVyxFQUNYLE1BQU0sR0FBRyxLQUFLO0lBRWQsTUFBTSxLQUFLLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQztJQUM1QixJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFLENBQUM7UUFDdkIsTUFBTSxJQUFJLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQztJQUNwQyxDQUFDO0lBQ0QsTUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLEdBQUcsRUFBWTtJQUNsQyxJQUFJLEdBQUcsR0FBRyxJQUFJO0lBQ2QsS0FBSyxNQUFNLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQztRQUN4QixHQUFHLEdBQUcsTUFBTSxHQUFHLENBQUMsa0JBQWtCLENBQUMsR0FBRyxFQUFFLEVBQUUsTUFBTSxFQUFFLENBQUM7SUFDckQsQ0FBQztJQUNELE9BQU8sR0FBRyxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsRUFBRSxNQUFNLEVBQUUsQ0FBQztBQUM1QyxDQUFDO0FBRUQsS0FBSyxVQUFVLFVBQVUsQ0FDdkIsSUFBK0IsRUFDL0IsR0FBVztJQUVYLElBQUksQ0FBQztRQUNILE1BQU0sT0FBTyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUM7UUFDeEIsT0FBTyxJQUFJO0lBQ2IsQ0FBQztJQUFDLE1BQU0sQ0FBQztRQUNQLE9BQU8sS0FBSztJQUNkLENBQUM7QUFDSCxDQUFDO0FBRUQsK0VBQStFO0FBQ3hFLEtBQUssVUFBVSxXQUFXLENBQy9CLElBQStCLEVBQy9CLEdBQVc7SUFFWCxJQUFJLENBQUM7UUFDSCxNQUFNLE1BQU0sQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDO1FBQ3ZCLE9BQU8sSUFBSTtJQUNiLENBQUM7SUFBQyxNQUFNLENBQUM7UUFDUCxPQUFPLEtBQUs7SUFDZCxDQUFDO0FBQ0gsQ0FBQztBQUVELDZFQUE2RTtBQUM3RSx1Q0FBdUM7QUFDaEMsS0FBSyxVQUFVLFFBQVEsQ0FDNUIsSUFBK0IsRUFDL0IsR0FBVztJQUVYLE9BQU8sQ0FBQyxNQUFNLE9BQU8sQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUU7QUFDN0MsQ0FBQztBQUVELEtBQUssVUFBVSxRQUFRLENBQ3JCLElBQStCLEVBQy9CLEdBQVc7SUFFWCxPQUFPLENBQUMsTUFBTSxRQUFRLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFO0FBQzNDLENBQUM7QUFFRCxLQUFLLFVBQVUsU0FBUyxDQUN0QixJQUErQixFQUMvQixHQUFXLEVBQ1gsT0FBZTtJQUVmLE1BQU0sRUFBRSxHQUFHLE1BQU0sT0FBTyxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDO0lBQ3pDLE1BQU0sUUFBUSxHQUFHLE1BQU0sRUFBRSxDQUFDLGNBQWMsRUFBRTtJQUMxQyxNQUFNLFFBQVEsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO0lBQzdCLE1BQU0sUUFBUSxDQUFDLEtBQUssRUFBRTtBQUN4QixDQUFDO0FBRUQsc0VBQXNFO0FBQ3RFLFNBQVMsU0FBUyxDQUNoQixHQUE4QjtJQUU5QixPQUNFLEdBR0QsQ0FBQyxPQUFPLEVBQUU7QUFDYixDQUFDO0FBRUQsU0FBUyxJQUFJLENBQUMsSUFBWSxFQUFFLElBQVk7SUFDdEMsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxJQUFJLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJO0FBQ3hDLENBQUM7QUFFRCxTQUFTLFlBQVksQ0FBQyxJQUFZO0lBQ2hDLElBQUksRUFBRSxHQUFHLEVBQUU7SUFDWCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBQ3JDLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7WUFDZCxJQUFJLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7Z0JBQ3hCLEVBQUUsSUFBSSxJQUFJO2dCQUNWLENBQUMsRUFBRTtnQkFDSCxJQUFJLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7b0JBQ3hCLENBQUMsRUFBRTtnQkFDTCxDQUFDO1lBQ0gsQ0FBQztpQkFBTSxDQUFDO2dCQUNOLEVBQUUsSUFBSSxPQUFPO1lBQ2YsQ0FBQztRQUNILENBQUM7YUFBTSxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztZQUNyQixFQUFFLElBQUksTUFBTTtRQUNkLENBQUM7YUFBTSxJQUFJLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUN2QyxFQUFFLElBQUksSUFBSSxHQUFHLENBQUM7UUFDaEIsQ0FBQzthQUFNLENBQUM7WUFDTixFQUFFLElBQUksQ0FBQztRQUNULENBQUM7SUFDSCxDQUFDO0lBQ0QsT0FBTyxJQUFJLE1BQU0sQ0FBQyxHQUFHLEdBQUcsRUFBRSxHQUFHLEdBQUcsQ0FBQztBQUNuQyxDQUFDO0FBRUQsa0VBQWtFO0FBQ2xFLEtBQUssU0FBUyxDQUFDLENBQUMsU0FBUyxDQUN2QixHQUE4QixFQUM5QixNQUFNLEdBQUcsRUFBRTtJQUVYLElBQUksS0FBSyxFQUFFLE1BQU0sQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUksU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7UUFDbEQsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUM7UUFDOUIsSUFBSSxNQUFNLENBQUMsSUFBSSxLQUFLLFdBQVcsRUFBRSxDQUFDO1lBQ2hDLEtBQUssQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFtQyxFQUFFLEdBQUcsQ0FBQztRQUM1RCxDQUFDO2FBQU0sQ0FBQztZQUNOLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxNQUE4QixFQUFFO1FBQzdELENBQUM7SUFDSCxDQUFDO0FBQ0gsQ0FBQztBQUVNLEtBQUssVUFBVSxPQUFPLENBQzNCLElBQStCLEVBQy9CLElBQVksRUFDWixLQUFhO0lBRWIsTUFBTSxLQUFLLEdBQUcsTUFBTSxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQztJQUN0QyxNQUFNLEtBQUssR0FBYSxFQUFFO0lBQzFCLE1BQU0sUUFBUSxHQUFHLEtBQUssSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFL0MsS0FBSyxVQUFVLE9BQU8sQ0FDcEIsR0FBOEIsRUFDOUIsR0FBVyxFQUNYLENBQVM7UUFFVCxNQUFNLEtBQUssR0FBc0MsRUFBRTtRQUNuRCxJQUFJLEtBQUssRUFBRSxNQUFNLEtBQUssSUFBSSxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQztZQUN6QyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNuQixDQUFDO1FBQ0QsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDOUMsS0FBSyxNQUFNLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJLEtBQUssRUFBRSxDQUFDO1lBQ25DLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDO1lBQ2hDLElBQUksTUFBTSxDQUFDLElBQUksS0FBSyxXQUFXLEVBQUUsQ0FBQztnQkFDaEMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLFFBQVEsR0FBRyxDQUFDO2dCQUMxQixJQUFJLENBQUMsR0FBRyxRQUFRLEVBQUUsQ0FBQztvQkFDakIsTUFBTSxPQUFPLENBQUMsTUFBbUMsRUFBRSxRQUFRLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDckUsQ0FBQztZQUNILENBQUM7aUJBQU0sQ0FBQztnQkFDTixLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUN0QixDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFFRCxNQUFNLE9BQU8sQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDckUsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTO0FBQ3BELENBQUM7QUFFTSxLQUFLLFVBQVUsUUFBUSxDQUM1QixJQUErQixFQUMvQixJQUFZLEVBQ1osS0FBMkI7O0lBRTNCLE1BQU0sSUFBSSxHQUFHLE1BQU0sUUFBUSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUM7SUFDdkMsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7SUFDOUIsSUFBSSxLQUFLLEdBQUcsQ0FBQztJQUNiLElBQUksR0FBRyxHQUFHLEtBQUssQ0FBQyxNQUFNO0lBQ3RCLElBQUksS0FBSyxJQUFJLEtBQUssQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFLENBQUM7UUFDL0IsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBQ0QsSUFBSSxLQUFLLElBQUksS0FBSyxDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDbEQsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUNELE1BQU0sR0FBRyxHQUFhLEVBQUU7SUFDeEIsS0FBSyxJQUFJLENBQUMsR0FBRyxLQUFLLEVBQUUsQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBQ2xDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssV0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsbUNBQUksRUFBRSxFQUFFLENBQUM7SUFDekMsQ0FBQztJQUNELE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7QUFDdkIsQ0FBQztBQUVNLEtBQUssVUFBVSxJQUFJLENBQ3hCLElBQStCLEVBQy9CLElBQVksRUFDWixPQUFlLEVBQ2YsT0FBZTtJQUVmLE1BQU0sRUFBRSxHQUFHLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQztJQUM5QixNQUFNLFNBQVMsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSTtJQUN4RCxNQUFNLEdBQUcsR0FBRyxNQUFNLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDO0lBQ3BDLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDO0lBQ3pELE1BQU0sT0FBTyxHQUFhLEVBQUU7SUFDNUIsSUFBSSxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLElBQUksU0FBUyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDO1FBQy9ELElBQUksU0FBUyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUN4RSxTQUFRO1FBQ1YsQ0FBQztRQUNELElBQUksSUFBWTtRQUNoQixJQUFJLENBQUM7WUFDSCxJQUFJLEdBQUcsTUFBTSxDQUFDLE1BQU0sTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFO1FBQzlDLENBQUM7UUFBQyxNQUFNLENBQUM7WUFDUCxTQUFRO1FBQ1YsQ0FBQztRQUNELE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO1FBQ2xDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDMUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7Z0JBQzFCLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztnQkFDaEQsSUFBSSxPQUFPLENBQUMsTUFBTSxJQUFJLGVBQWUsRUFBRSxDQUFDO29CQUN0QyxPQUFPLENBQUMsSUFBSSxDQUFDLHFCQUFxQixlQUFlLFdBQVcsQ0FBQztvQkFDN0QsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztnQkFDM0IsQ0FBQztZQUNILENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQztJQUNELE9BQU8sT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYztBQUM3RCxDQUFDO0FBRU0sS0FBSyxVQUFVLElBQUksQ0FDeEIsSUFBK0IsRUFDL0IsSUFBWSxFQUNaLE9BQWU7SUFFZixNQUFNLEVBQUUsR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDO0lBQ2hDLE1BQU0sR0FBRyxHQUFHLE1BQU0sTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUM7SUFDcEMsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUM7SUFDekQsTUFBTSxPQUFPLEdBQWEsRUFBRTtJQUM1QixJQUFJLEtBQUssRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLFNBQVMsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUN2RCxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDO1lBQzNDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO1lBQ2pCLElBQUksT0FBTyxDQUFDLE1BQU0sSUFBSSxlQUFlLEVBQUUsQ0FBQztnQkFDdEMsT0FBTyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsZUFBZSxXQUFXLENBQUM7Z0JBQzdELE1BQUs7WUFDUCxDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFDRCxPQUFPLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWM7QUFDN0QsQ0FBQztBQUVNLEtBQUssVUFBVSxVQUFVLENBQzlCLElBQStCLEVBQy9CLElBQVksRUFDWixPQUFlO0lBRWYsTUFBTSxPQUFPLEdBQUcsTUFBTSxVQUFVLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQztJQUM1QyxNQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLE1BQU0sUUFBUSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtJQUMxRCxNQUFNLFNBQVMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLFFBQVEsR0FBRyxPQUFPLENBQUM7SUFDL0MsT0FBTyxZQUFZLE9BQU8sQ0FBQyxNQUFNLGFBQWEsSUFBSSxFQUFFO0FBQ3RELENBQUM7QUFFTSxLQUFLLFVBQVUsVUFBVSxDQUM5QixJQUErQixFQUMvQixJQUFZLEVBQ1osUUFBZ0I7SUFFaEIsNEVBQTRFO0lBQzVFLDJCQUEyQjtJQUMzQixNQUFNLE9BQU8sR0FBRyxNQUFNLFVBQVUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDO0lBQzVDLE1BQU0sU0FBUyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsUUFBUSxDQUFDO0lBQ3JDLE9BQU8sR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsU0FBUyxJQUFJLElBQUksS0FBSyxRQUFRLENBQUMsTUFBTSxTQUFTO0FBQ2xGLENBQUM7QUFFTSxLQUFLLFVBQVUsVUFBVSxDQUM5QixJQUErQixFQUMvQixJQUFZLEVBQ1osTUFBYyxFQUNkLE1BQWM7SUFFZCxNQUFNLElBQUksR0FBRyxNQUFNLFFBQVEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDO0lBQ3ZDLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO0lBQ2xDLElBQUksS0FBSyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDakIsTUFBTSxJQUFJLEtBQUssQ0FBQyxtQ0FBbUMsQ0FBQztJQUN0RCxDQUFDO0lBQ0QsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxLQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUNyQyxNQUFNLElBQUksS0FBSyxDQUFDLG1DQUFtQyxDQUFDO0lBQ3RELENBQUM7SUFDRCxNQUFNLE9BQU8sR0FDWCxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsR0FBRyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUNuRSxNQUFNLFNBQVMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQztJQUNwQyxPQUFPLG9CQUFvQixJQUFJLEVBQUU7QUFDbkMsQ0FBQztBQUVNLEtBQUssVUFBVSxNQUFNLENBQzFCLElBQStCLEVBQy9CLElBQVksRUFDWixVQUFrQixFQUNsQixNQUFjO0lBRWQsTUFBTSxJQUFJLEdBQUcsTUFBTSxRQUFRLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQztJQUN2QyxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztJQUM5QixNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDMUQsTUFBTSxRQUFRLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7SUFDbkMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsUUFBUSxDQUFDO0lBQ2hDLE1BQU0sU0FBUyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QyxPQUFPLFlBQVksUUFBUSxDQUFDLE1BQU0saUJBQWlCLElBQUksZUFBZSxFQUFFLEVBQUU7QUFDNUUsQ0FBQzs7O0FDblZELDZEQUE2RDtBQUM3RCxzRUFBc0U7QUFDdEUsNEVBQTRFO0FBQzVFLHNEQUFzRDtBQUV0RCxnRkFBZ0Y7QUFDaEYseUVBQXlFO0FBQ3pFLGtFQUFrRTtBQUU3QjtBQUU5QixNQUFNLGdCQUFnQixHQUFHLFdBQVc7QUFDcEMsTUFBTSxpQkFBaUIsR0FBRyxrQkFBa0I7QUFXbkQsTUFBTSxPQUFPLEdBQUcscUJBQXFCO0FBRXJDLDZFQUE2RTtBQUM3RSxnRkFBZ0Y7QUFDaEYsZ0VBQWdFO0FBQ3pELFNBQVMsVUFBVSxDQUFDLE1BQWM7SUFDdkMsT0FBTyxNQUFNLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQztRQUMvQixDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsR0FBRyxPQUFPLE9BQU8sQ0FBQztRQUM1QyxDQUFDLENBQUMsRUFBRTtBQUNSLENBQUM7QUFFRCxLQUFLLFVBQVUsZUFBZSxDQUM1QixJQUF3QyxFQUN4QyxJQUFhO0lBRWIsd0VBQXdFO0lBQ3hFLElBQUksT0FBTyxJQUFJLEtBQUssUUFBUSxJQUFJLElBQUksS0FBSyxFQUFFLEVBQUUsQ0FBQztRQUM1QyxPQUFPLEVBQUUsS0FBSyxFQUFFLDhDQUE4QyxFQUFFO0lBQ2xFLENBQUM7SUFDRCxJQUFJLENBQUM7UUFDSCwwRUFBMEU7UUFDMUUsTUFBTSxjQUFjLEdBQUcsSUFBSSxPQUFPLENBQVEsQ0FBQyxRQUFRLEVBQUUsTUFBTSxFQUFFLEVBQUU7WUFDN0QsVUFBVSxDQUNSLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQywwQ0FBMEMsQ0FBQyxDQUFDLEVBQ25FLElBQUksQ0FDTDtRQUNILENBQUMsQ0FBQztRQUNGLE1BQU0sTUFBTSxHQUFHLE1BQU0sT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxjQUFjLENBQUMsQ0FBQztRQUN6RCxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sUUFBUSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsRUFBRTtJQUMvQyxDQUFDO0lBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztRQUNYLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQyxZQUFZLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFO0lBQzlELENBQUM7QUFDSCxDQUFDO0FBRUQsMEVBQTBFO0FBQzFFLDBEQUEwRDtBQUNuRCxTQUFTLHFCQUFxQixDQUNuQyxJQUF3QyxFQUN4QyxNQUFNLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNO0lBRS9CLE1BQU0sWUFBWSxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUM7SUFDdkMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ2xCLE9BQU8sQ0FBQyxLQUFLLENBQUMsMERBQTBELENBQUM7UUFDekUsT0FBTTtJQUNSLENBQUM7SUFDRCxPQUFPLENBQUMsS0FBSyxDQUNYLDJEQUEyRCxFQUMzRCxZQUFZLENBQ2I7SUFFRCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSxLQUFtQixFQUFFLEVBQUU7UUFDL0QsT0FBTyxDQUFDLEtBQUssQ0FDWCx1Q0FBdUMsRUFDdkMsS0FBSyxDQUFDLE1BQU0sRUFDWixLQUFLLENBQUMsSUFBSSxDQUNYO1FBQ0QsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLFlBQVksRUFBRSxDQUFDO1lBQ2xDLE9BQU8sQ0FBQyxLQUFLLENBQ1gsOERBQThELEVBQzlELFlBQVksQ0FDYjtZQUNELE9BQU07UUFDUixDQUFDO1FBQ0QsTUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQXNDO1FBQ3pELElBQ0UsT0FBTyxJQUFJLEtBQUssUUFBUTtlQUNyQixJQUFJLEtBQUssSUFBSTtlQUNiLElBQUksQ0FBQyxJQUFJLEtBQUssZ0JBQWdCLEVBQ2pDLENBQUM7WUFDRCxPQUFPLENBQUMsS0FBSyxDQUFDLGdEQUFnRCxDQUFDO1lBQy9ELE9BQU07UUFDUixDQUFDO1FBQ0QsaUVBQWlFO1FBQ2pFLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUF1QjtRQUM1QyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDWixPQUFPLENBQUMsS0FBSyxDQUFDLHFEQUFxRCxDQUFDO1lBQ3BFLE9BQU07UUFDUixDQUFDO1FBQ0QsT0FBTyxDQUFDLEtBQUssQ0FBQyxnREFBZ0QsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQzFFLE1BQU0sUUFBUSxHQUFxQjtZQUNqQyxJQUFJLEVBQUUsaUJBQWlCO1lBQ3ZCLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztZQUN6QixHQUFHLENBQUMsTUFBTSxlQUFlLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUM1QztRQUNELE9BQU8sQ0FBQyxLQUFLLENBQ1gsbUNBQW1DLEVBQ25DLFFBQVEsQ0FBQyxLQUFLLElBQUksYUFBYSxDQUNoQztRQUNELE1BQU0sQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLFlBQVksQ0FBQztJQUM1QyxDQUFDLENBQUM7QUFDSixDQUFDOzs7QUNqSEQsNkRBQTZEO0FBQzdELHNFQUFzRTtBQUN0RSw0RUFBNEU7QUFDNUUsc0RBQXNEO0FBRWlCO0FBaUN2RSxJQUFJLFVBQVUsR0FBdUIsSUFBSTtBQUV6QyxNQUFNLGVBQWUsR0FBRyxJQUFJLEdBQUcsRUFNNUI7QUFFSCxNQUFNLGdCQUFnQixHQUFHLElBQUksR0FBRyxDQUFDO0lBQy9CLCtCQUErQjtJQUMvQixrQ0FBa0M7Q0FDbkMsQ0FBQztBQUVGLFNBQVMsVUFBVSxDQUFDLElBQWlCO0lBQ25DLFVBQVUsR0FBRyxJQUFJO0lBQ2pCLFVBQVUsQ0FBQyxTQUFTLEdBQUcsbUJBQW1CO0lBQzFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsc0RBQXNELENBQUM7QUFDdkUsQ0FBQztBQUVELFNBQVMsbUJBQW1CLENBQUMsS0FBbUI7SUFDOUMsTUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLElBS1g7SUFFUixJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssaUJBQWlCLEVBQUUsQ0FBQztRQUM3QyxPQUFNO0lBQ1IsQ0FBQztJQUVELE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTO0lBQ2hDLElBQUksQ0FBQyxTQUFTLElBQUksT0FBTyxTQUFTLEtBQUssUUFBUSxFQUFFLENBQUM7UUFDaEQsT0FBTTtJQUNSLENBQUM7SUFFRCxNQUFNLE9BQU8sR0FBRyxlQUFlLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQztJQUM5QyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDYixPQUFPLENBQUMsSUFBSSxDQUFDLGdEQUFnRCxFQUFFLFNBQVMsQ0FBQztRQUN6RSxPQUFNO0lBQ1IsQ0FBQztJQUVELGVBQWUsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDO0lBRWpDLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2YsT0FBTyxDQUFDLE9BQU8sQ0FDYixJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ3ZCLE1BQU0sRUFBRSxHQUFHO1lBQ1gsVUFBVSxFQUFFLFdBQVc7WUFDdkIsT0FBTyxFQUFFLEVBQUUsY0FBYyxFQUFFLFlBQVksRUFBRTtTQUMxQyxDQUFDLENBQ0g7SUFDSCxDQUFDO1NBQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDckIsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUk7UUFDdEIsT0FBTyxDQUFDLE9BQU8sQ0FDYixJQUFJLFFBQVEsQ0FBQyxJQUFJLEVBQUU7WUFDakIsTUFBTSxFQUFFLEdBQUc7WUFDWCxVQUFVLEVBQUUsSUFBSTtZQUNoQixPQUFPLEVBQUU7Z0JBQ1AsY0FBYyxFQUFFLElBQUksQ0FBQyxJQUFJLElBQUksMEJBQTBCO2dCQUN2RCxnQkFBZ0IsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztnQkFDbkMsd0JBQXdCLEVBQUUsU0FBUzthQUNwQztTQUNGLENBQUMsQ0FDSDtJQUNILENBQUM7U0FBTSxDQUFDO1FBQ04sT0FBTyxDQUFDLE9BQU8sQ0FDYixJQUFJLFFBQVEsQ0FBQyxxQkFBcUIsRUFBRTtZQUNsQyxNQUFNLEVBQUUsR0FBRztZQUNYLFVBQVUsRUFBRSx1QkFBdUI7WUFDbkMsT0FBTyxFQUFFLEVBQUUsY0FBYyxFQUFFLFlBQVksRUFBRTtTQUMxQyxDQUFDLENBQ0g7SUFDSCxDQUFDO0FBQ0gsQ0FBQztBQUVELFNBQVMscUJBQXFCLENBQUMsSUFBWTtJQUN6QyxPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUU7UUFDN0IsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ2hCLE9BQU8sQ0FDTCxJQUFJLFFBQVEsQ0FBQyxnQ0FBZ0MsRUFBRTtnQkFDN0MsTUFBTSxFQUFFLEdBQUc7Z0JBQ1gsVUFBVSxFQUFFLHFCQUFxQjtnQkFDakMsT0FBTyxFQUFFLEVBQUUsY0FBYyxFQUFFLFlBQVksRUFBRTthQUMxQyxDQUFDLENBQ0g7WUFDRCxPQUFNO1FBQ1IsQ0FBQztRQUVELE1BQU0sU0FBUyxHQUFHLE1BQU0sQ0FBQyxVQUFVLEVBQUU7UUFDckMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFFLENBQUMsRUFBRSxDQUFDO1FBRTdELFVBQVUsQ0FBQyxXQUFXLENBQUM7WUFDckIsSUFBSSxFQUFFLGdCQUFnQjtZQUN0QixTQUFTO1lBQ1QsSUFBSTtTQUNMLENBQUM7UUFFRixVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ2QsSUFBSSxlQUFlLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUM7Z0JBQ25DLGVBQWUsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDO2dCQUNqQyxPQUFPLENBQ0wsSUFBSSxRQUFRLENBQUMsbUJBQW1CLEVBQUU7b0JBQ2hDLE1BQU0sRUFBRSxHQUFHO29CQUNYLFVBQVUsRUFBRSxpQkFBaUI7b0JBQzdCLE9BQU8sRUFBRSxFQUFFLGNBQWMsRUFBRSxZQUFZLEVBQUU7aUJBQzFDLENBQUMsQ0FDSDtZQUNILENBQUM7UUFDSCxDQUFDLEVBQUUsS0FBSyxDQUFDO0lBQ1gsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQUVELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRTtJQUN6QyxNQUFNLElBQUksR0FBRyxLQUFLLENBQUMsSUFBK0I7SUFDbEQsSUFBSSxDQUFDLElBQUk7UUFBRSxPQUFNO0lBRWpCLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxNQUFNLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQzNDLFVBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzFCLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxDQUFDO0lBQy9DLENBQUM7QUFDSCxDQUFDLENBQUM7QUFFRixJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUU7SUFDdkMsTUFBTSxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUM7SUFFdEMsSUFBSSxHQUFHLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDeEMsT0FBTTtJQUNSLENBQUM7SUFFRCxJQUFJLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQztRQUN2QyxPQUFNO0lBQ1IsQ0FBQztJQUVELElBQUksR0FBRyxDQUFDLFFBQVEsS0FBSyxHQUFHLElBQUksR0FBRyxDQUFDLFFBQVEsS0FBSyxFQUFFLEVBQUUsQ0FBQztRQUNoRCxPQUFNO0lBQ1IsQ0FBQztJQUVELE1BQU0sUUFBUSxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUN0QyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDZCxPQUFNO0lBQ1IsQ0FBQztJQUVELE9BQU8sQ0FBQyxLQUFLLENBQUMsZ0RBQWdELEVBQUUsUUFBUSxDQUFDO0lBQ3pFLEtBQUssQ0FBQyxXQUFXLENBQUMscUJBQXFCLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDcEQsQ0FBQyxDQUFDO0FBRUYsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFO0lBQzFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsbUNBQW1DLENBQUM7SUFDbEQsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQ3ZDLENBQUMsQ0FBQztBQUVGLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRTtJQUN6QyxPQUFPLENBQUMsS0FBSyxDQUFDLG1DQUFtQyxDQUFDO0lBQ2xELEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0FBQ3JDLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JyYXZlLWNvcmUvLi9jb21wb25lbnRzL2FpX2NoYXQvcmVzb3VyY2VzL2xlb193b3Jrc3BhY2UvZmlsZV9vcHMudHMiLCJ3ZWJwYWNrOi8vYnJhdmUtY29yZS8uL2NvbXBvbmVudHMvYWlfY2hhdC9yZXNvdXJjZXMvbGVvX3dvcmtzcGFjZS9tZXNzYWdlX2hhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vYnJhdmUtY29yZS8uL2NvbXBvbmVudHMvYWlfY2hhdC9yZXNvdXJjZXMvbGVvX3dvcmtzcGFjZS9sZW9fd29ya3NwYWNlX3ZpZXdfc3cudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDI2IFRoZSBCcmF2ZSBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuLy8gTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBmaWxlLFxuLy8gWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHBzOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uXG5cbi8vIEZpbGUgdG9vbHMgZm9yIHRoZSBMZW8gd29ya3NwYWNlLCBpbXBsZW1lbnRlZCBhZ2FpbnN0IGFcbi8vIEZpbGVTeXN0ZW1EaXJlY3RvcnlIYW5kbGUgdXNpbmcgdGhlIFdlYiBGaWxlIFN5c3RlbSBBY2Nlc3MgQVBJLiBQYXRoXG4vLyBjb25maW5lbWVudCBjb21lcyBmcm9tIHRoZSBwbGF0Zm9ybTogZ2V0RmlsZUhhbmRsZS9nZXREaXJlY3RvcnlIYW5kbGUgdGFrZSBhXG4vLyBzaW5nbGUgcGF0aCBzZWdtZW50IGFuZCByZWplY3QgJy4uJyBhbmQgc2VwYXJhdG9ycywgYW5kIHRoZSBoYW5kbGUgaXMgc2NvcGVkXG4vLyB0byB0aGUgcGlja2VkIGZvbGRlciwgc28gdGhlcmUgaXMgbm8gd2F5IHRvIGVzY2FwZSB0aGUgd29ya3NwYWNlIHJvb3QuXG5cbi8vIENhcHMgdG8ga2VlcCB0b29sIG91dHB1dCB3aXRoaW4gcmVhc29uIGZvciB0aGUgbW9kZWwuXG5jb25zdCBrTWF4R3JlcE1hdGNoZXMgPSAyMDBcbmNvbnN0IGtNYXhHbG9iUmVzdWx0cyA9IDUwMFxuXG5mdW5jdGlvbiBzcGxpdFBhdGgocmVsOiBzdHJpbmcpOiBzdHJpbmdbXSB7XG4gIGNvbnN0IHBhcnRzID0gcmVsXG4gICAgLnNwbGl0KCcvJylcbiAgICAubWFwKChzKSA9PiBzLnRyaW0oKSlcbiAgICAuZmlsdGVyKChzKSA9PiBzICE9PSAnJyAmJiBzICE9PSAnLicpXG4gIGZvciAoY29uc3QgcCBvZiBwYXJ0cykge1xuICAgIGlmIChwID09PSAnLi4nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYHBhdGggZXNjYXBlcyB0aGUgd29ya3NwYWNlIHJvb3Q6ICR7cmVsfWApXG4gICAgfVxuICB9XG4gIHJldHVybiBwYXJ0c1xufVxuXG5mdW5jdGlvbiBiYXNlbmFtZShyZWw6IHN0cmluZyk6IHN0cmluZyB7XG4gIGNvbnN0IHBhcnRzID0gc3BsaXRQYXRoKHJlbClcbiAgcmV0dXJuIHBhcnRzLmxlbmd0aCA/IHBhcnRzW3BhcnRzLmxlbmd0aCAtIDFdIDogJydcbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0RGlyKFxuICByb290OiBGaWxlU3lzdGVtRGlyZWN0b3J5SGFuZGxlLFxuICByZWw6IHN0cmluZyxcbiAgY3JlYXRlID0gZmFsc2UsXG4pOiBQcm9taXNlPEZpbGVTeXN0ZW1EaXJlY3RvcnlIYW5kbGU+IHtcbiAgbGV0IGRpciA9IHJvb3RcbiAgZm9yIChjb25zdCBzZWcgb2Ygc3BsaXRQYXRoKHJlbCkpIHtcbiAgICBkaXIgPSBhd2FpdCBkaXIuZ2V0RGlyZWN0b3J5SGFuZGxlKHNlZywgeyBjcmVhdGUgfSlcbiAgfVxuICByZXR1cm4gZGlyXG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldEZpbGUoXG4gIHJvb3Q6IEZpbGVTeXN0ZW1EaXJlY3RvcnlIYW5kbGUsXG4gIHJlbDogc3RyaW5nLFxuICBjcmVhdGUgPSBmYWxzZSxcbik6IFByb21pc2U8RmlsZVN5c3RlbUZpbGVIYW5kbGU+IHtcbiAgY29uc3QgcGFydHMgPSBzcGxpdFBhdGgocmVsKVxuICBpZiAocGFydHMubGVuZ3RoID09PSAwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdlbXB0eSBmaWxlIHBhdGgnKVxuICB9XG4gIGNvbnN0IG5hbWUgPSBwYXJ0cy5wb3AoKSBhcyBzdHJpbmdcbiAgbGV0IGRpciA9IHJvb3RcbiAgZm9yIChjb25zdCBzZWcgb2YgcGFydHMpIHtcbiAgICBkaXIgPSBhd2FpdCBkaXIuZ2V0RGlyZWN0b3J5SGFuZGxlKHNlZywgeyBjcmVhdGUgfSlcbiAgfVxuICByZXR1cm4gZGlyLmdldEZpbGVIYW5kbGUobmFtZSwgeyBjcmVhdGUgfSlcbn1cblxuYXN5bmMgZnVuY3Rpb24gZmlsZUV4aXN0cyhcbiAgcm9vdDogRmlsZVN5c3RlbURpcmVjdG9yeUhhbmRsZSxcbiAgcmVsOiBzdHJpbmcsXG4pOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBnZXRGaWxlKHJvb3QsIHJlbClcbiAgICByZXR1cm4gdHJ1ZVxuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG4vLyBXaGV0aGVyIHxyZWx8IHJlc29sdmVzIHRvIGEgZGlyZWN0b3J5IChhbiBlbXB0eSBwYXRoIGlzIHRoZSByb290IGRpcmVjdG9yeSkuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaXNEaXJlY3RvcnkoXG4gIHJvb3Q6IEZpbGVTeXN0ZW1EaXJlY3RvcnlIYW5kbGUsXG4gIHJlbDogc3RyaW5nLFxuKTogUHJvbWlzZTxib29sZWFuPiB7XG4gIHRyeSB7XG4gICAgYXdhaXQgZ2V0RGlyKHJvb3QsIHJlbClcbiAgICByZXR1cm4gdHJ1ZVxuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG4vLyBSZXR1cm5zIHRoZSBmaWxlIGl0c2VsZiAoYSBCbG9iKSByYXRoZXIgdGhhbiBkZWNvZGVkIHRleHQsIHNvIHRoYXQgY2FsbGVyc1xuLy8gY2FuIGhhbmRsZSBhcmJpdHJhcnkgYmluYXJ5IGNvbnRlbnQuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVhZEZpbGUoXG4gIHJvb3Q6IEZpbGVTeXN0ZW1EaXJlY3RvcnlIYW5kbGUsXG4gIHJlbDogc3RyaW5nLFxuKTogUHJvbWlzZTxGaWxlPiB7XG4gIHJldHVybiAoYXdhaXQgZ2V0RmlsZShyb290LCByZWwpKS5nZXRGaWxlKClcbn1cblxuYXN5bmMgZnVuY3Rpb24gcmVhZFRleHQoXG4gIHJvb3Q6IEZpbGVTeXN0ZW1EaXJlY3RvcnlIYW5kbGUsXG4gIHJlbDogc3RyaW5nLFxuKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgcmV0dXJuIChhd2FpdCByZWFkRmlsZShyb290LCByZWwpKS50ZXh0KClcbn1cblxuYXN5bmMgZnVuY3Rpb24gd3JpdGVUZXh0KFxuICByb290OiBGaWxlU3lzdGVtRGlyZWN0b3J5SGFuZGxlLFxuICByZWw6IHN0cmluZyxcbiAgY29udGVudDogc3RyaW5nLFxuKTogUHJvbWlzZTx2b2lkPiB7XG4gIGNvbnN0IGZoID0gYXdhaXQgZ2V0RmlsZShyb290LCByZWwsIHRydWUpXG4gIGNvbnN0IHdyaXRhYmxlID0gYXdhaXQgZmguY3JlYXRlV3JpdGFibGUoKVxuICBhd2FpdCB3cml0YWJsZS53cml0ZShjb250ZW50KVxuICBhd2FpdCB3cml0YWJsZS5jbG9zZSgpXG59XG5cbi8vIGRpckhhbmRsZS5lbnRyaWVzKCkgaXNuJ3QgaW4gZXZlcnkgVFMgbGliOyBhY2Nlc3MgdmlhIGEgbG9vc2UgdHlwZS5cbmZ1bmN0aW9uIGVudHJpZXNPZihcbiAgZGlyOiBGaWxlU3lzdGVtRGlyZWN0b3J5SGFuZGxlLFxuKTogQXN5bmNJdGVyYWJsZTxbc3RyaW5nLCBGaWxlU3lzdGVtSGFuZGxlXT4ge1xuICByZXR1cm4gKFxuICAgIGRpciBhcyB1bmtub3duIGFzIHtcbiAgICAgIGVudHJpZXMoKTogQXN5bmNJdGVyYWJsZTxbc3RyaW5nLCBGaWxlU3lzdGVtSGFuZGxlXT5cbiAgICB9XG4gICkuZW50cmllcygpXG59XG5cbmZ1bmN0aW9uIGpvaW4oYmFzZTogc3RyaW5nLCBuYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gYmFzZSA/IGAke2Jhc2V9LyR7bmFtZX1gIDogbmFtZVxufVxuXG5mdW5jdGlvbiBnbG9iVG9SZWdFeHAoZ2xvYjogc3RyaW5nKTogUmVnRXhwIHtcbiAgbGV0IHJlID0gJydcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBnbG9iLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgYyA9IGdsb2JbaV1cbiAgICBpZiAoYyA9PT0gJyonKSB7XG4gICAgICBpZiAoZ2xvYltpICsgMV0gPT09ICcqJykge1xuICAgICAgICByZSArPSAnLionXG4gICAgICAgIGkrK1xuICAgICAgICBpZiAoZ2xvYltpICsgMV0gPT09ICcvJykge1xuICAgICAgICAgIGkrK1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZSArPSAnW14vXSonXG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChjID09PSAnPycpIHtcbiAgICAgIHJlICs9ICdbXi9dJ1xuICAgIH0gZWxzZSBpZiAoJy4rXiR7fSgpfFtdXFxcXCcuaW5jbHVkZXMoYykpIHtcbiAgICAgIHJlICs9ICdcXFxcJyArIGNcbiAgICB9IGVsc2Uge1xuICAgICAgcmUgKz0gY1xuICAgIH1cbiAgfVxuICByZXR1cm4gbmV3IFJlZ0V4cCgnXicgKyByZSArICckJylcbn1cblxuLy8gUmVjdXJzaXZlbHkgeWllbGRzIHRoZSByZWxhdGl2ZSBwYXRoIG9mIGV2ZXJ5IGZpbGUgdW5kZXIgfGRpcnwuXG5hc3luYyBmdW5jdGlvbiogd2Fsa0ZpbGVzKFxuICBkaXI6IEZpbGVTeXN0ZW1EaXJlY3RvcnlIYW5kbGUsXG4gIHByZWZpeCA9ICcnLFxuKTogQXN5bmNHZW5lcmF0b3I8eyBwYXRoOiBzdHJpbmc7IGhhbmRsZTogRmlsZVN5c3RlbUZpbGVIYW5kbGUgfT4ge1xuICBmb3IgYXdhaXQgKGNvbnN0IFtuYW1lLCBoYW5kbGVdIG9mIGVudHJpZXNPZihkaXIpKSB7XG4gICAgY29uc3QgcmVsID0gam9pbihwcmVmaXgsIG5hbWUpXG4gICAgaWYgKGhhbmRsZS5raW5kID09PSAnZGlyZWN0b3J5Jykge1xuICAgICAgeWllbGQqIHdhbGtGaWxlcyhoYW5kbGUgYXMgRmlsZVN5c3RlbURpcmVjdG9yeUhhbmRsZSwgcmVsKVxuICAgIH0gZWxzZSB7XG4gICAgICB5aWVsZCB7IHBhdGg6IHJlbCwgaGFuZGxlOiBoYW5kbGUgYXMgRmlsZVN5c3RlbUZpbGVIYW5kbGUgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbGlzdERpcihcbiAgcm9vdDogRmlsZVN5c3RlbURpcmVjdG9yeUhhbmRsZSxcbiAgcGF0aDogc3RyaW5nLFxuICBkZXB0aDogbnVtYmVyLFxuKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgY29uc3Qgc3RhcnQgPSBhd2FpdCBnZXREaXIocm9vdCwgcGF0aClcbiAgY29uc3QgbGluZXM6IHN0cmluZ1tdID0gW11cbiAgY29uc3QgbWF4RGVwdGggPSBkZXB0aCAmJiBkZXB0aCA+IDAgPyBkZXB0aCA6IDJcblxuICBhc3luYyBmdW5jdGlvbiByZWN1cnNlKFxuICAgIGRpcjogRmlsZVN5c3RlbURpcmVjdG9yeUhhbmRsZSxcbiAgICByZWw6IHN0cmluZyxcbiAgICBkOiBudW1iZXIsXG4gICkge1xuICAgIGNvbnN0IG5hbWVzOiBBcnJheTxbc3RyaW5nLCBGaWxlU3lzdGVtSGFuZGxlXT4gPSBbXVxuICAgIGZvciBhd2FpdCAoY29uc3QgZW50cnkgb2YgZW50cmllc09mKGRpcikpIHtcbiAgICAgIG5hbWVzLnB1c2goZW50cnkpXG4gICAgfVxuICAgIG5hbWVzLnNvcnQoKGEsIGIpID0+IGFbMF0ubG9jYWxlQ29tcGFyZShiWzBdKSlcbiAgICBmb3IgKGNvbnN0IFtuYW1lLCBoYW5kbGVdIG9mIG5hbWVzKSB7XG4gICAgICBjb25zdCBjaGlsZFJlbCA9IGpvaW4ocmVsLCBuYW1lKVxuICAgICAgaWYgKGhhbmRsZS5raW5kID09PSAnZGlyZWN0b3J5Jykge1xuICAgICAgICBsaW5lcy5wdXNoKGAke2NoaWxkUmVsfS9gKVxuICAgICAgICBpZiAoZCA8IG1heERlcHRoKSB7XG4gICAgICAgICAgYXdhaXQgcmVjdXJzZShoYW5kbGUgYXMgRmlsZVN5c3RlbURpcmVjdG9yeUhhbmRsZSwgY2hpbGRSZWwsIGQgKyAxKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsaW5lcy5wdXNoKGNoaWxkUmVsKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGF3YWl0IHJlY3Vyc2Uoc3RhcnQsIHBhdGgucmVwbGFjZSgvXFwvKyQvLCAnJykucmVwbGFjZSgvXlxcLysvLCAnJyksIDEpXG4gIHJldHVybiBsaW5lcy5sZW5ndGggPyBsaW5lcy5qb2luKCdcXG4nKSA6ICcoZW1wdHkpJ1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdmlld0ZpbGUoXG4gIHJvb3Q6IEZpbGVTeXN0ZW1EaXJlY3RvcnlIYW5kbGUsXG4gIHBhdGg6IHN0cmluZyxcbiAgcmFuZ2U6IG51bWJlcltdIHwgdW5kZWZpbmVkLFxuKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgY29uc3QgdGV4dCA9IGF3YWl0IHJlYWRUZXh0KHJvb3QsIHBhdGgpXG4gIGNvbnN0IGxpbmVzID0gdGV4dC5zcGxpdCgnXFxuJylcbiAgbGV0IHN0YXJ0ID0gMVxuICBsZXQgZW5kID0gbGluZXMubGVuZ3RoXG4gIGlmIChyYW5nZSAmJiByYW5nZS5sZW5ndGggPj0gMSkge1xuICAgIHN0YXJ0ID0gTWF0aC5tYXgoMSwgcmFuZ2VbMF0pXG4gIH1cbiAgaWYgKHJhbmdlICYmIHJhbmdlLmxlbmd0aCA+PSAyICYmIHJhbmdlWzFdICE9PSAtMSkge1xuICAgIGVuZCA9IE1hdGgubWluKGxpbmVzLmxlbmd0aCwgcmFuZ2VbMV0pXG4gIH1cbiAgY29uc3Qgb3V0OiBzdHJpbmdbXSA9IFtdXG4gIGZvciAobGV0IGkgPSBzdGFydDsgaSA8PSBlbmQ7IGkrKykge1xuICAgIG91dC5wdXNoKGAke2l9XFx0JHtsaW5lc1tpIC0gMV0gPz8gJyd9YClcbiAgfVxuICByZXR1cm4gb3V0LmpvaW4oJ1xcbicpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBncmVwKFxuICByb290OiBGaWxlU3lzdGVtRGlyZWN0b3J5SGFuZGxlLFxuICBwYXRoOiBzdHJpbmcsXG4gIHBhdHRlcm46IHN0cmluZyxcbiAgaW5jbHVkZTogc3RyaW5nLFxuKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgY29uc3QgcmUgPSBuZXcgUmVnRXhwKHBhdHRlcm4pXG4gIGNvbnN0IGluY2x1ZGVSZSA9IGluY2x1ZGUgPyBnbG9iVG9SZWdFeHAoaW5jbHVkZSkgOiBudWxsXG4gIGNvbnN0IGRpciA9IGF3YWl0IGdldERpcihyb290LCBwYXRoKVxuICBjb25zdCBiYXNlID0gcGF0aC5yZXBsYWNlKC9cXC8rJC8sICcnKS5yZXBsYWNlKC9eXFwvKy8sICcnKVxuICBjb25zdCBtYXRjaGVzOiBzdHJpbmdbXSA9IFtdXG4gIGZvciBhd2FpdCAoY29uc3QgeyBwYXRoOiByZWwsIGhhbmRsZSB9IG9mIHdhbGtGaWxlcyhkaXIsIGJhc2UpKSB7XG4gICAgaWYgKGluY2x1ZGVSZSAmJiAhaW5jbHVkZVJlLnRlc3QocmVsKSAmJiAhaW5jbHVkZVJlLnRlc3QoYmFzZW5hbWUocmVsKSkpIHtcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuICAgIGxldCB0ZXh0OiBzdHJpbmdcbiAgICB0cnkge1xuICAgICAgdGV4dCA9IGF3YWl0IChhd2FpdCBoYW5kbGUuZ2V0RmlsZSgpKS50ZXh0KClcbiAgICB9IGNhdGNoIHtcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuICAgIGNvbnN0IGZpbGVMaW5lcyA9IHRleHQuc3BsaXQoJ1xcbicpXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWxlTGluZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChyZS50ZXN0KGZpbGVMaW5lc1tpXSkpIHtcbiAgICAgICAgbWF0Y2hlcy5wdXNoKGAke3JlbH06JHtpICsgMX06ICR7ZmlsZUxpbmVzW2ldfWApXG4gICAgICAgIGlmIChtYXRjaGVzLmxlbmd0aCA+PSBrTWF4R3JlcE1hdGNoZXMpIHtcbiAgICAgICAgICBtYXRjaGVzLnB1c2goYC4uLiAodHJ1bmNhdGVkIGF0ICR7a01heEdyZXBNYXRjaGVzfSBtYXRjaGVzKWApXG4gICAgICAgICAgcmV0dXJuIG1hdGNoZXMuam9pbignXFxuJylcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gbWF0Y2hlcy5sZW5ndGggPyBtYXRjaGVzLmpvaW4oJ1xcbicpIDogJyhubyBtYXRjaGVzKSdcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdsb2IoXG4gIHJvb3Q6IEZpbGVTeXN0ZW1EaXJlY3RvcnlIYW5kbGUsXG4gIHBhdGg6IHN0cmluZyxcbiAgcGF0dGVybjogc3RyaW5nLFxuKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgY29uc3QgcmUgPSBnbG9iVG9SZWdFeHAocGF0dGVybilcbiAgY29uc3QgZGlyID0gYXdhaXQgZ2V0RGlyKHJvb3QsIHBhdGgpXG4gIGNvbnN0IGJhc2UgPSBwYXRoLnJlcGxhY2UoL1xcLyskLywgJycpLnJlcGxhY2UoL15cXC8rLywgJycpXG4gIGNvbnN0IHJlc3VsdHM6IHN0cmluZ1tdID0gW11cbiAgZm9yIGF3YWl0IChjb25zdCB7IHBhdGg6IHJlbCB9IG9mIHdhbGtGaWxlcyhkaXIsIGJhc2UpKSB7XG4gICAgaWYgKHJlLnRlc3QocmVsKSB8fCByZS50ZXN0KGJhc2VuYW1lKHJlbCkpKSB7XG4gICAgICByZXN1bHRzLnB1c2gocmVsKVxuICAgICAgaWYgKHJlc3VsdHMubGVuZ3RoID49IGtNYXhHbG9iUmVzdWx0cykge1xuICAgICAgICByZXN1bHRzLnB1c2goYC4uLiAodHJ1bmNhdGVkIGF0ICR7a01heEdsb2JSZXN1bHRzfSByZXN1bHRzKWApXG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHRzLmxlbmd0aCA/IHJlc3VsdHMuam9pbignXFxuJykgOiAnKG5vIG1hdGNoZXMpJ1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYXBwZW5kRmlsZShcbiAgcm9vdDogRmlsZVN5c3RlbURpcmVjdG9yeUhhbmRsZSxcbiAgcGF0aDogc3RyaW5nLFxuICBjb250ZW50OiBzdHJpbmcsXG4pOiBQcm9taXNlPHN0cmluZz4ge1xuICBjb25zdCBleGlzdGVkID0gYXdhaXQgZmlsZUV4aXN0cyhyb290LCBwYXRoKVxuICBjb25zdCBwcmV2aW91cyA9IGV4aXN0ZWQgPyBhd2FpdCByZWFkVGV4dChyb290LCBwYXRoKSA6ICcnXG4gIGF3YWl0IHdyaXRlVGV4dChyb290LCBwYXRoLCBwcmV2aW91cyArIGNvbnRlbnQpXG4gIHJldHVybiBgQXBwZW5kZWQgJHtjb250ZW50Lmxlbmd0aH0gYnl0ZXMgdG8gJHtwYXRofWBcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUZpbGUoXG4gIHJvb3Q6IEZpbGVTeXN0ZW1EaXJlY3RvcnlIYW5kbGUsXG4gIHBhdGg6IHN0cmluZyxcbiAgZmlsZVRleHQ6IHN0cmluZyxcbik6IFByb21pc2U8c3RyaW5nPiB7XG4gIC8vIE1hdGNoZXMgdGhlIHRleHQtZWRpdG9yIGBjcmVhdGVgIHNlbWFudGljczogY3JlYXRlcyB0aGUgZmlsZSwgb3ZlcndyaXRpbmdcbiAgLy8gaXQgaWYgaXQgYWxyZWFkeSBleGlzdHMuXG4gIGNvbnN0IGV4aXN0ZWQgPSBhd2FpdCBmaWxlRXhpc3RzKHJvb3QsIHBhdGgpXG4gIGF3YWl0IHdyaXRlVGV4dChyb290LCBwYXRoLCBmaWxlVGV4dClcbiAgcmV0dXJuIGAke2V4aXN0ZWQgPyAnT3Zlcndyb3RlJyA6ICdDcmVhdGVkJ30gJHtwYXRofSAoJHtmaWxlVGV4dC5sZW5ndGh9IGJ5dGVzKWBcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHN0clJlcGxhY2UoXG4gIHJvb3Q6IEZpbGVTeXN0ZW1EaXJlY3RvcnlIYW5kbGUsXG4gIHBhdGg6IHN0cmluZyxcbiAgb2xkU3RyOiBzdHJpbmcsXG4gIG5ld1N0cjogc3RyaW5nLFxuKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgY29uc3QgdGV4dCA9IGF3YWl0IHJlYWRUZXh0KHJvb3QsIHBhdGgpXG4gIGNvbnN0IGZpcnN0ID0gdGV4dC5pbmRleE9mKG9sZFN0cilcbiAgaWYgKGZpcnN0ID09PSAtMSkge1xuICAgIHRocm93IG5ldyBFcnJvcignb2xkX3N0ciB3YXMgbm90IGZvdW5kIGluIHRoZSBmaWxlJylcbiAgfVxuICBpZiAodGV4dC5pbmNsdWRlcyhvbGRTdHIsIGZpcnN0ICsgMSkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ29sZF9zdHIgaXMgbm90IHVuaXF1ZSBpbiB0aGUgZmlsZScpXG4gIH1cbiAgY29uc3QgdXBkYXRlZCA9XG4gICAgdGV4dC5zbGljZSgwLCBmaXJzdCkgKyBuZXdTdHIgKyB0ZXh0LnNsaWNlKGZpcnN0ICsgb2xkU3RyLmxlbmd0aClcbiAgYXdhaXQgd3JpdGVUZXh0KHJvb3QsIHBhdGgsIHVwZGF0ZWQpXG4gIHJldHVybiBgUmVwbGFjZWQgdGV4dCBpbiAke3BhdGh9YFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaW5zZXJ0KFxuICByb290OiBGaWxlU3lzdGVtRGlyZWN0b3J5SGFuZGxlLFxuICBwYXRoOiBzdHJpbmcsXG4gIGluc2VydExpbmU6IG51bWJlcixcbiAgbmV3U3RyOiBzdHJpbmcsXG4pOiBQcm9taXNlPHN0cmluZz4ge1xuICBjb25zdCB0ZXh0ID0gYXdhaXQgcmVhZFRleHQocm9vdCwgcGF0aClcbiAgY29uc3QgbGluZXMgPSB0ZXh0LnNwbGl0KCdcXG4nKVxuICBjb25zdCBhdCA9IE1hdGgubWF4KDAsIE1hdGgubWluKGluc2VydExpbmUsIGxpbmVzLmxlbmd0aCkpXG4gIGNvbnN0IGluc2VydGVkID0gbmV3U3RyLnNwbGl0KCdcXG4nKVxuICBsaW5lcy5zcGxpY2UoYXQsIDAsIC4uLmluc2VydGVkKVxuICBhd2FpdCB3cml0ZVRleHQocm9vdCwgcGF0aCwgbGluZXMuam9pbignXFxuJykpXG4gIHJldHVybiBgSW5zZXJ0ZWQgJHtpbnNlcnRlZC5sZW5ndGh9IGxpbmUocykgaW50byAke3BhdGh9IGFmdGVyIGxpbmUgJHthdH1gXG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjYgVGhlIEJyYXZlIEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4vLyBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIGZpbGUsXG4vLyBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cHM6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy5cblxuLy8gcG9zdE1lc3NhZ2UgYnJpZGdlIHRoYXQgbGV0cyB0aGUgYHZpZXcuYCBzaWJsaW5nIG9yaWdpbiByZWFkIGZpbGVzIG91dCBvZiB0aGVcbi8vIHdvcmtzcGFjZSBmb2xkZXIuIE9ubHkgdGhhdCBvcmlnaW4gaXMgYWNjZXB0ZWQ6IHRoZSB3b3Jrc3BhY2UgaG9sZHMgYW5cbi8vIGF1dG8tZ3JhbnRlZCBGaWxlIFN5c3RlbSBBY2Nlc3MgaGFuZGxlIHRvIGEgdXNlci1waWNrZWQgZm9sZGVyLlxuXG5pbXBvcnQgeyByZWFkRmlsZSB9IGZyb20gJy4vZmlsZV9vcHMnXG5cbmV4cG9ydCBjb25zdCBrUmVhZEZpbGVSZXF1ZXN0ID0gJ1JFQURfRklMRSdcbmV4cG9ydCBjb25zdCBrUmVhZEZpbGVSZXNwb25zZSA9ICdSRUFEX0ZJTEVfUkVTVUxUJ1xuXG5pbnRlcmZhY2UgUmVhZEZpbGVSZXNwb25zZSB7XG4gIHR5cGU6IHR5cGVvZiBrUmVhZEZpbGVSZXNwb25zZVxuICByZXF1ZXN0SWQ/OiB1bmtub3duXG4gIC8vIEEgRmlsZSAoaS5lLiBhIEJsb2IpLCBzbyBhcmJpdHJhcnkgYmluYXJ5IGNvbnRlbnQgc3Vydml2ZXMgYW5kIGEgbGFyZ2UgZmlsZVxuICAvLyBpc24ndCBjb3BpZWQgaW50byB0aGUgbWVzc2FnZS5cbiAgZmlsZT86IEZpbGVcbiAgZXJyb3I/OiBzdHJpbmdcbn1cblxuY29uc3Qga1NjaGVtZSA9ICdjaHJvbWUtdW50cnVzdGVkOi8vJ1xuXG4vLyBjaHJvbWUtdW50cnVzdGVkOi8vbGVvLXdvcmtzcGFjZSAtPiBjaHJvbWUtdW50cnVzdGVkOi8vdmlldy5sZW8td29ya3NwYWNlLlxuLy8gRGVyaXZlZCBhdCBydW50aW1lIHNvIGl0IGZvbGxvd3MgdGhlIHdvcmtzcGFjZSBob3N0LCBhbmQgJycgZm9yIGFueXRoaW5nIHRoYXRcbi8vIGlzbid0IGEgY2hyb21lLXVudHJ1c3RlZCBvcmlnaW4sIHdoaWNoIG11c3QgbmV2ZXIgYmUgdHJ1c3RlZC5cbmV4cG9ydCBmdW5jdGlvbiB2aWV3T3JpZ2luKG9yaWdpbjogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIG9yaWdpbi5zdGFydHNXaXRoKGtTY2hlbWUpXG4gICAgPyBvcmlnaW4ucmVwbGFjZShrU2NoZW1lLCBgJHtrU2NoZW1lfXZpZXcuYClcbiAgICA6ICcnXG59XG5cbmFzeW5jIGZ1bmN0aW9uIHJlYWRGaWxlUGF5bG9hZChcbiAgcm9vdDogUHJvbWlzZTxGaWxlU3lzdGVtRGlyZWN0b3J5SGFuZGxlPixcbiAgcGF0aDogdW5rbm93bixcbik6IFByb21pc2U8eyBmaWxlPzogRmlsZTsgZXJyb3I/OiBzdHJpbmcgfT4ge1xuICAvLyBDaGVja2VkIGJlZm9yZSBhd2FpdGluZyB0aGUgaGFuZGxlIHNvIGEgbWFsZm9ybWVkIHJlcXVlc3QgZmFpbHMgZmFzdC5cbiAgaWYgKHR5cGVvZiBwYXRoICE9PSAnc3RyaW5nJyB8fCBwYXRoID09PSAnJykge1xuICAgIHJldHVybiB7IGVycm9yOiAnUkVBRF9GSUxFIHJlcXVpcmVzIGEgbm9uLWVtcHR5IHN0cmluZyBcInBhdGhcIicgfVxuICB9XG4gIHRyeSB7XG4gICAgLy8gQWRkIGEgdGltZW91dCBzbyB3ZSBkb24ndCBoYW5nIGZvcmV2ZXIgd2FpdGluZyBmb3IgdGhlIGRpcmVjdG9yeSBoYW5kbGVcbiAgICBjb25zdCB0aW1lb3V0UHJvbWlzZSA9IG5ldyBQcm9taXNlPG5ldmVyPigoX3Jlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgc2V0VGltZW91dChcbiAgICAgICAgKCkgPT4gcmVqZWN0KG5ldyBFcnJvcignV29ya3NwYWNlIGZvbGRlciBub3QgYXZhaWxhYmxlICh0aW1lb3V0KScpKSxcbiAgICAgICAgNTAwMCxcbiAgICAgIClcbiAgICB9KVxuICAgIGNvbnN0IGhhbmRsZSA9IGF3YWl0IFByb21pc2UucmFjZShbcm9vdCwgdGltZW91dFByb21pc2VdKVxuICAgIHJldHVybiB7IGZpbGU6IGF3YWl0IHJlYWRGaWxlKGhhbmRsZSwgcGF0aCkgfVxuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIHsgZXJyb3I6IGUgaW5zdGFuY2VvZiBFcnJvciA/IGUubWVzc2FnZSA6IFN0cmluZyhlKSB9XG4gIH1cbn1cblxuLy8gfHJvb3R8IHJlc29sdmVzIHdoZW4gdGhlIGRpcmVjdG9yeSBoYW5kbGUgYXJyaXZlcyB2aWEgbGF1bmNoUXVldWUsIHNvIGFcbi8vIHJlcXVlc3QgdGhhdCByYWNlcyBhaGVhZCBvZiBpdCBpcyBzZXJ2ZWQgb25jZSBpdCBsYW5kcy5cbmV4cG9ydCBmdW5jdGlvbiBpbnN0YWxsTWVzc2FnZUhhbmRsZXIoXG4gIHJvb3Q6IFByb21pc2U8RmlsZVN5c3RlbURpcmVjdG9yeUhhbmRsZT4sXG4gIG9yaWdpbiA9IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4sXG4pIHtcbiAgY29uc3QgdGFyZ2V0T3JpZ2luID0gdmlld09yaWdpbihvcmlnaW4pXG4gIGlmICghdGFyZ2V0T3JpZ2luKSB7XG4gICAgY29uc29sZS5lcnJvcignW2xlby13b3Jrc3BhY2VdIG5vIHZpZXdlciBvcmlnaW4gdG8gYWNjZXB0IG1lc3NhZ2VzIGZyb20nKVxuICAgIHJldHVyblxuICB9XG4gIGNvbnNvbGUuZGVidWcoXG4gICAgJ1tsZW8td29ya3NwYWNlXSBtZXNzYWdlIGhhbmRsZXIgaW5zdGFsbGVkLCBhY2NlcHRpbmcgZnJvbScsXG4gICAgdGFyZ2V0T3JpZ2luLFxuICApXG5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBhc3luYyAoZXZlbnQ6IE1lc3NhZ2VFdmVudCkgPT4ge1xuICAgIGNvbnNvbGUuZGVidWcoXG4gICAgICAnW2xlby13b3Jrc3BhY2VdIHJlY2VpdmVkIG1lc3NhZ2UgZnJvbScsXG4gICAgICBldmVudC5vcmlnaW4sXG4gICAgICBldmVudC5kYXRhLFxuICAgIClcbiAgICBpZiAoZXZlbnQub3JpZ2luICE9PSB0YXJnZXRPcmlnaW4pIHtcbiAgICAgIGNvbnNvbGUuZGVidWcoXG4gICAgICAgICdbbGVvLXdvcmtzcGFjZV0gaWdub3JpbmcgbWVzc2FnZSBmcm9tIHdyb25nIG9yaWdpbiwgZXhwZWN0ZWQnLFxuICAgICAgICB0YXJnZXRPcmlnaW4sXG4gICAgICApXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgY29uc3QgZGF0YSA9IGV2ZW50LmRhdGEgYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj4gfCBudWxsXG4gICAgaWYgKFxuICAgICAgdHlwZW9mIGRhdGEgIT09ICdvYmplY3QnXG4gICAgICB8fCBkYXRhID09PSBudWxsXG4gICAgICB8fCBkYXRhLnR5cGUgIT09IGtSZWFkRmlsZVJlcXVlc3RcbiAgICApIHtcbiAgICAgIGNvbnNvbGUuZGVidWcoJ1tsZW8td29ya3NwYWNlXSBpZ25vcmluZyBub24tUkVBRF9GSUxFIG1lc3NhZ2UnKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIC8vIFJlcGx5IHRvIHRoZSBzZW5kZXIgd2l0aCBhbiBleHBsaWNpdCB0YXJnZXQgb3JpZ2luLCBuZXZlciAnKicuXG4gICAgY29uc3Qgc291cmNlID0gZXZlbnQuc291cmNlIGFzIFdpbmRvdyB8IG51bGxcbiAgICBpZiAoIXNvdXJjZSkge1xuICAgICAgY29uc29sZS5lcnJvcignW2xlby13b3Jrc3BhY2VdIFJFQURfRklMRSBoYXMgbm8gc291cmNlIHRvIHJlcGx5IHRvJylcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBjb25zb2xlLmRlYnVnKCdbbGVvLXdvcmtzcGFjZV0gcHJvY2Vzc2luZyBSRUFEX0ZJTEUgZm9yIHBhdGg6JywgZGF0YS5wYXRoKVxuICAgIGNvbnN0IHJlc3BvbnNlOiBSZWFkRmlsZVJlc3BvbnNlID0ge1xuICAgICAgdHlwZToga1JlYWRGaWxlUmVzcG9uc2UsXG4gICAgICByZXF1ZXN0SWQ6IGRhdGEucmVxdWVzdElkLFxuICAgICAgLi4uKGF3YWl0IHJlYWRGaWxlUGF5bG9hZChyb290LCBkYXRhLnBhdGgpKSxcbiAgICB9XG4gICAgY29uc29sZS5kZWJ1ZyhcbiAgICAgICdbbGVvLXdvcmtzcGFjZV0gc2VuZGluZyByZXNwb25zZTonLFxuICAgICAgcmVzcG9uc2UuZXJyb3IgfHwgJ2ZpbGUgbG9hZGVkJyxcbiAgICApXG4gICAgc291cmNlLnBvc3RNZXNzYWdlKHJlc3BvbnNlLCB0YXJnZXRPcmlnaW4pXG4gIH0pXG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjYgVGhlIEJyYXZlIEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4vLyBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIGZpbGUsXG4vLyBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cHM6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy5cblxuaW1wb3J0IHsga1JlYWRGaWxlUmVxdWVzdCwga1JlYWRGaWxlUmVzcG9uc2UgfSBmcm9tICcuL21lc3NhZ2VfaGFuZGxlcidcblxuaW50ZXJmYWNlIEV4dGVuZGFibGVFdmVudCBleHRlbmRzIEV2ZW50IHtcbiAgd2FpdFVudGlsKHByb21pc2U6IFByb21pc2U8dW5rbm93bj4pOiB2b2lkXG59XG5cbmludGVyZmFjZSBGZXRjaEV2ZW50IGV4dGVuZHMgRXh0ZW5kYWJsZUV2ZW50IHtcbiAgcmVhZG9ubHkgcmVxdWVzdDogUmVxdWVzdFxuICByZXNwb25kV2l0aChyZXNwb25zZTogUmVzcG9uc2UgfCBQcm9taXNlPFJlc3BvbnNlPik6IHZvaWRcbn1cblxuaW50ZXJmYWNlIEV4dGVuZGFibGVNZXNzYWdlRXZlbnQgZXh0ZW5kcyBFeHRlbmRhYmxlRXZlbnQge1xuICByZWFkb25seSBkYXRhOiB1bmtub3duXG4gIHJlYWRvbmx5IHBvcnRzOiByZWFkb25seSBNZXNzYWdlUG9ydFtdXG59XG5cbmludGVyZmFjZSBTZXJ2aWNlV29ya2VyR2xvYmFsU2NvcGUge1xuICByZWFkb25seSBjbGllbnRzOiB7IGNsYWltKCk6IFByb21pc2U8dm9pZD4gfVxuICByZWFkb25seSBsb2NhdGlvbjogeyBvcmlnaW46IHN0cmluZyB9XG4gIHNraXBXYWl0aW5nKCk6IFByb21pc2U8dm9pZD5cbiAgYWRkRXZlbnRMaXN0ZW5lcih0eXBlOiAnZmV0Y2gnLCBsaXN0ZW5lcjogKGV2ZW50OiBGZXRjaEV2ZW50KSA9PiB2b2lkKTogdm9pZFxuICBhZGRFdmVudExpc3RlbmVyKFxuICAgIHR5cGU6ICdtZXNzYWdlJyxcbiAgICBsaXN0ZW5lcjogKGV2ZW50OiBFeHRlbmRhYmxlTWVzc2FnZUV2ZW50KSA9PiB2b2lkLFxuICApOiB2b2lkXG4gIGFkZEV2ZW50TGlzdGVuZXIoXG4gICAgdHlwZTogJ2luc3RhbGwnIHwgJ2FjdGl2YXRlJyxcbiAgICBsaXN0ZW5lcjogKGV2ZW50OiBFeHRlbmRhYmxlRXZlbnQpID0+IHZvaWQsXG4gICk6IHZvaWRcbn1cblxuZGVjbGFyZSBjb25zdCBzZWxmOiBTZXJ2aWNlV29ya2VyR2xvYmFsU2NvcGVcblxubGV0IHBhcmVudFBvcnQ6IE1lc3NhZ2VQb3J0IHwgbnVsbCA9IG51bGxcblxuY29uc3QgcGVuZGluZ1JlcXVlc3RzID0gbmV3IE1hcDxcbiAgc3RyaW5nLFxuICB7XG4gICAgcmVzb2x2ZTogKHJlc3BvbnNlOiBSZXNwb25zZSkgPT4gdm9pZFxuICAgIHJlamVjdDogKGVycm9yOiBFcnJvcikgPT4gdm9pZFxuICB9XG4+KClcblxuY29uc3Qga1N0YXRpY1Jlc291cmNlcyA9IG5ldyBTZXQoW1xuICAnL2xlb193b3Jrc3BhY2Vfdmlldy5idW5kbGUuanMnLFxuICAnL2xlb193b3Jrc3BhY2Vfdmlld19zdy5idW5kbGUuanMnLFxuXSlcblxuZnVuY3Rpb24gaGFuZGxlSW5pdChwb3J0OiBNZXNzYWdlUG9ydCkge1xuICBwYXJlbnRQb3J0ID0gcG9ydFxuICBwYXJlbnRQb3J0Lm9ubWVzc2FnZSA9IGhhbmRsZVBhcmVudE1lc3NhZ2VcbiAgY29uc29sZS5kZWJ1ZygnW2xlby13b3Jrc3BhY2Utdmlldy1zd10gaW5pdGlhbGl6ZWQgd2l0aCBwYXJlbnQgcG9ydCcpXG59XG5cbmZ1bmN0aW9uIGhhbmRsZVBhcmVudE1lc3NhZ2UoZXZlbnQ6IE1lc3NhZ2VFdmVudCkge1xuICBjb25zdCBkYXRhID0gZXZlbnQuZGF0YSBhcyB7XG4gICAgdHlwZTogc3RyaW5nXG4gICAgcmVxdWVzdElkPzogc3RyaW5nXG4gICAgZmlsZT86IEZpbGVcbiAgICBlcnJvcj86IHN0cmluZ1xuICB9IHwgbnVsbFxuXG4gIGlmICghZGF0YSB8fCBkYXRhLnR5cGUgIT09IGtSZWFkRmlsZVJlc3BvbnNlKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBjb25zdCByZXF1ZXN0SWQgPSBkYXRhLnJlcXVlc3RJZFxuICBpZiAoIXJlcXVlc3RJZCB8fCB0eXBlb2YgcmVxdWVzdElkICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVyblxuICB9XG5cbiAgY29uc3QgcGVuZGluZyA9IHBlbmRpbmdSZXF1ZXN0cy5nZXQocmVxdWVzdElkKVxuICBpZiAoIXBlbmRpbmcpIHtcbiAgICBjb25zb2xlLndhcm4oJ1tsZW8td29ya3NwYWNlLXZpZXctc3ddIG5vIHBlbmRpbmcgcmVxdWVzdCBmb3InLCByZXF1ZXN0SWQpXG4gICAgcmV0dXJuXG4gIH1cblxuICBwZW5kaW5nUmVxdWVzdHMuZGVsZXRlKHJlcXVlc3RJZClcblxuICBpZiAoZGF0YS5lcnJvcikge1xuICAgIHBlbmRpbmcucmVzb2x2ZShcbiAgICAgIG5ldyBSZXNwb25zZShkYXRhLmVycm9yLCB7XG4gICAgICAgIHN0YXR1czogNDA0LFxuICAgICAgICBzdGF0dXNUZXh0OiAnTm90IEZvdW5kJyxcbiAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ3RleHQvcGxhaW4nIH0sXG4gICAgICB9KSxcbiAgICApXG4gIH0gZWxzZSBpZiAoZGF0YS5maWxlKSB7XG4gICAgY29uc3QgZmlsZSA9IGRhdGEuZmlsZVxuICAgIHBlbmRpbmcucmVzb2x2ZShcbiAgICAgIG5ldyBSZXNwb25zZShmaWxlLCB7XG4gICAgICAgIHN0YXR1czogMjAwLFxuICAgICAgICBzdGF0dXNUZXh0OiAnT0snLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6IGZpbGUudHlwZSB8fCAnYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtJyxcbiAgICAgICAgICAnQ29udGVudC1MZW5ndGgnOiBTdHJpbmcoZmlsZS5zaXplKSxcbiAgICAgICAgICAnWC1Db250ZW50LVR5cGUtT3B0aW9ucyc6ICdub3NuaWZmJyxcbiAgICAgICAgfSxcbiAgICAgIH0pLFxuICAgIClcbiAgfSBlbHNlIHtcbiAgICBwZW5kaW5nLnJlc29sdmUoXG4gICAgICBuZXcgUmVzcG9uc2UoJ05vIGZpbGUgaW4gcmVzcG9uc2UnLCB7XG4gICAgICAgIHN0YXR1czogNTAwLFxuICAgICAgICBzdGF0dXNUZXh0OiAnSW50ZXJuYWwgU2VydmVyIEVycm9yJyxcbiAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ3RleHQvcGxhaW4nIH0sXG4gICAgICB9KSxcbiAgICApXG4gIH1cbn1cblxuZnVuY3Rpb24gcmVxdWVzdEZpbGVGcm9tUGFyZW50KHBhdGg6IHN0cmluZyk6IFByb21pc2U8UmVzcG9uc2U+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgaWYgKCFwYXJlbnRQb3J0KSB7XG4gICAgICByZXNvbHZlKFxuICAgICAgICBuZXcgUmVzcG9uc2UoJ1NlcnZpY2Ugd29ya2VyIG5vdCBpbml0aWFsaXplZCcsIHtcbiAgICAgICAgICBzdGF0dXM6IDUwMyxcbiAgICAgICAgICBzdGF0dXNUZXh0OiAnU2VydmljZSBVbmF2YWlsYWJsZScsXG4gICAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ3RleHQvcGxhaW4nIH0sXG4gICAgICAgIH0pLFxuICAgICAgKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgcmVxdWVzdElkID0gY3J5cHRvLnJhbmRvbVVVSUQoKVxuICAgIHBlbmRpbmdSZXF1ZXN0cy5zZXQocmVxdWVzdElkLCB7IHJlc29sdmUsIHJlamVjdDogKCkgPT4ge30gfSlcblxuICAgIHBhcmVudFBvcnQucG9zdE1lc3NhZ2Uoe1xuICAgICAgdHlwZToga1JlYWRGaWxlUmVxdWVzdCxcbiAgICAgIHJlcXVlc3RJZCxcbiAgICAgIHBhdGgsXG4gICAgfSlcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKHBlbmRpbmdSZXF1ZXN0cy5oYXMocmVxdWVzdElkKSkge1xuICAgICAgICBwZW5kaW5nUmVxdWVzdHMuZGVsZXRlKHJlcXVlc3RJZClcbiAgICAgICAgcmVzb2x2ZShcbiAgICAgICAgICBuZXcgUmVzcG9uc2UoJ1JlcXVlc3QgdGltZWQgb3V0Jywge1xuICAgICAgICAgICAgc3RhdHVzOiA1MDQsXG4gICAgICAgICAgICBzdGF0dXNUZXh0OiAnR2F0ZXdheSBUaW1lb3V0JyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICd0ZXh0L3BsYWluJyB9LFxuICAgICAgICAgIH0pLFxuICAgICAgICApXG4gICAgICB9XG4gICAgfSwgMzAwMDApXG4gIH0pXG59XG5cbnNlbGYuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIChldmVudCkgPT4ge1xuICBjb25zdCBkYXRhID0gZXZlbnQuZGF0YSBhcyB7IHR5cGU6IHN0cmluZyB9IHwgbnVsbFxuICBpZiAoIWRhdGEpIHJldHVyblxuXG4gIGlmIChkYXRhLnR5cGUgPT09ICdJTklUJyAmJiBldmVudC5wb3J0c1swXSkge1xuICAgIGhhbmRsZUluaXQoZXZlbnQucG9ydHNbMF0pXG4gICAgZXZlbnQucG9ydHNbMF0ucG9zdE1lc3NhZ2UoeyB0eXBlOiAnUkVBRFknIH0pXG4gIH1cbn0pXG5cbnNlbGYuYWRkRXZlbnRMaXN0ZW5lcignZmV0Y2gnLCAoZXZlbnQpID0+IHtcbiAgY29uc3QgdXJsID0gbmV3IFVSTChldmVudC5yZXF1ZXN0LnVybClcblxuICBpZiAodXJsLm9yaWdpbiAhPT0gc2VsZi5sb2NhdGlvbi5vcmlnaW4pIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGlmIChrU3RhdGljUmVzb3VyY2VzLmhhcyh1cmwucGF0aG5hbWUpKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBpZiAodXJsLnBhdGhuYW1lID09PSAnLycgfHwgdXJsLnBhdGhuYW1lID09PSAnJykge1xuICAgIHJldHVyblxuICB9XG5cbiAgY29uc3QgZmlsZVBhdGggPSB1cmwucGF0aG5hbWUuc2xpY2UoMSlcbiAgaWYgKCFmaWxlUGF0aCkge1xuICAgIHJldHVyblxuICB9XG5cbiAgY29uc29sZS5kZWJ1ZygnW2xlby13b3Jrc3BhY2Utdmlldy1zd10gaW50ZXJjZXB0aW5nIGZldGNoIGZvcicsIGZpbGVQYXRoKVxuICBldmVudC5yZXNwb25kV2l0aChyZXF1ZXN0RmlsZUZyb21QYXJlbnQoZmlsZVBhdGgpKVxufSlcblxuc2VsZi5hZGRFdmVudExpc3RlbmVyKCdhY3RpdmF0ZScsIChldmVudCkgPT4ge1xuICBjb25zb2xlLmRlYnVnKCdbbGVvLXdvcmtzcGFjZS12aWV3LXN3XSBhY3RpdmF0ZWQnKVxuICBldmVudC53YWl0VW50aWwoc2VsZi5jbGllbnRzLmNsYWltKCkpXG59KVxuXG5zZWxmLmFkZEV2ZW50TGlzdGVuZXIoJ2luc3RhbGwnLCAoZXZlbnQpID0+IHtcbiAgY29uc29sZS5kZWJ1ZygnW2xlby13b3Jrc3BhY2Utdmlldy1zd10gaW5zdGFsbGVkJylcbiAgZXZlbnQud2FpdFVudGlsKHNlbGYuc2tpcFdhaXRpbmcoKSlcbn0pXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=