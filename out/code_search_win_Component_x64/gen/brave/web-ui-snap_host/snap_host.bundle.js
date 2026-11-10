/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!***********************************************************************!*\
  !*** ./components/brave_wallet_ui/snap_host/snap_host.ts + 1 modules ***!
  \***********************************************************************/

;// ./components/brave_wallet_ui/common/snap/snap_messages.ts
// Copyright (c) 2026 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.
// postMessage protocol between the snaps container page (SnapHostBridge) and
// chrome-untrusted://snap-host iframes.
const SNAP_HOST_ORIGIN = 'chrome-untrusted://snap-host';
const SNAPS_CONTAINER_ORIGIN = 'chrome://snaps-container';
function isExecutorReady(data) {
    return (typeof data === 'object'
        && data !== null
        && data.type === "executorReady" /* SnapMessageType.ExecutorReady */);
}
function isExecuteSnapResult(data) {
    return (typeof data === 'object'
        && data !== null
        && data.type === "executeSnapResult" /* SnapMessageType.ExecuteSnapResult */);
}
function isExecuteSnapCommand(data) {
    if (typeof data !== 'object'
        || data === null
        || data.type !== "executeSnap" /* SnapCommand.ExecuteSnap */
        || typeof data.requestId !== 'number') {
        return false;
    }
    // Validate the command shape because sourceCode is passed to new Function().
    const payload = data.payload;
    return (typeof payload === 'object'
        && payload !== null
        && typeof payload.snapId === 'string'
        && typeof payload.sourceCode === 'string');
}

;// ./components/brave_wallet_ui/snap_host/snap_host.ts
// Copyright (c) 2026 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.
// Snap host running inside chrome-untrusted://snap-host/.
// Receives snap source from the parent snaps container page via postMessage and
// evaluates it with new Function().

function sendToParent(message) {
    window.parent.postMessage(message, SNAPS_CONTAINER_ORIGIN);
}
function handleExecuteSnap(requestId, payload) {
    // Snap bundles are CommonJS, so provide `module`/`exports` and prefer an
    // explicit return value if the bundle produces one.
    const mod = { exports: {} };
    try {
        const factory = new Function('module', 'exports', `"use strict";\n${payload.sourceCode}\n;return module.exports;`);
        const exported = factory(mod, mod.exports);
        sendToParent({
            type: "executeSnapResult" /* SnapMessageType.ExecuteSnapResult */,
            requestId,
            success: true,
            error: null,
            result: typeof exported === 'string' ? exported : null,
        });
    }
    catch (err) {
        const error = err instanceof Error ? err.message : String(err);
        sendToParent({
            type: "executeSnapResult" /* SnapMessageType.ExecuteSnapResult */,
            requestId,
            success: false,
            error,
            result: null,
        });
    }
}
window.addEventListener('message', (event) => {
    if (event.origin !== SNAPS_CONTAINER_ORIGIN
        || event.source !== window.parent) {
        return;
    }
    if (!isExecuteSnapCommand(event.data)) {
        return;
    }
    handleExecuteSnap(event.data.requestId, event.data.payload);
});
// Notify the parent that the host is ready.
sendToParent({ type: "executorReady" /* SnapMessageType.ExecutorReady */ });

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0FBSyxDQUFDLE1BQU0sS0FBSyxzQkFBc0I7V0FDcEMsS0FBSyxDQUFDLE1BQU0sS0FBSyxNQUFNLENBQUMsTUFBTSxFQUNqQyxDQUFDO1FBQ0QsT0FBTTtJQUNSLENBQUM7SUFDRCxJQUFJLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7UUFDdEMsT0FBTTtJQUNSLENBQUM7SUFDRCxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztBQUM3RCxDQUFDLENBQUM7QUFFRiw0Q0FBNEM7QUFDNUMsWUFBWSxDQUFDLEVBQUUsSUFBSSxxREFBK0IsRUFBRSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYnJhdmUtY29yZS8uL2NvbXBvbmVudHMvYnJhdmVfd2FsbGV0X3VpL2NvbW1vbi9zbmFwL3NuYXBfbWVzc2FnZXMudHMiLCJ3ZWJwYWNrOi8vYnJhdmUtY29yZS8uL2NvbXBvbmVudHMvYnJhdmVfd2FsbGV0X3VpL3NuYXBfaG9zdC9zbmFwX2hvc3QudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDI2IFRoZSBCcmF2ZSBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuLy8gTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBmaWxlLFxuLy8gWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHBzOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uXG5cbi8vIHBvc3RNZXNzYWdlIHByb3RvY29sIGJldHdlZW4gdGhlIHNuYXBzIGNvbnRhaW5lciBwYWdlIChTbmFwSG9zdEJyaWRnZSkgYW5kXG4vLyBjaHJvbWUtdW50cnVzdGVkOi8vc25hcC1ob3N0IGlmcmFtZXMuXG5cbmV4cG9ydCBjb25zdCBTTkFQX0hPU1RfT1JJR0lOID0gJ2Nocm9tZS11bnRydXN0ZWQ6Ly9zbmFwLWhvc3QnXG5leHBvcnQgY29uc3QgU05BUFNfQ09OVEFJTkVSX09SSUdJTiA9ICdjaHJvbWU6Ly9zbmFwcy1jb250YWluZXInXG5cbmV4cG9ydCBjb25zdCBlbnVtIFNuYXBDb21tYW5kIHtcbiAgRXhlY3V0ZVNuYXAgPSAnZXhlY3V0ZVNuYXAnLFxufVxuXG5leHBvcnQgY29uc3QgZW51bSBTbmFwTWVzc2FnZVR5cGUge1xuICBFeGVjdXRvclJlYWR5ID0gJ2V4ZWN1dG9yUmVhZHknLFxuICBFeGVjdXRlU25hcFJlc3VsdCA9ICdleGVjdXRlU25hcFJlc3VsdCcsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRXhlY3V0ZVNuYXBQYXlsb2FkIHtcbiAgc25hcElkOiBzdHJpbmdcbiAgc291cmNlQ29kZTogc3RyaW5nXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRXhlY3V0ZVNuYXBDb21tYW5kIHtcbiAgdHlwZTogU25hcENvbW1hbmQuRXhlY3V0ZVNuYXBcbiAgcmVxdWVzdElkOiBudW1iZXJcbiAgcGF5bG9hZDogRXhlY3V0ZVNuYXBQYXlsb2FkXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRXhlY3V0ZVNuYXBSZXN1bHQge1xuICB0eXBlOiBTbmFwTWVzc2FnZVR5cGUuRXhlY3V0ZVNuYXBSZXN1bHRcbiAgcmVxdWVzdElkOiBudW1iZXJcbiAgc3VjY2VzczogYm9vbGVhblxuICBlcnJvcjogc3RyaW5nIHwgbnVsbFxuICByZXN1bHQ6IHN0cmluZyB8IG51bGxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBFeGVjdXRvclJlYWR5TWVzc2FnZSB7XG4gIHR5cGU6IFNuYXBNZXNzYWdlVHlwZS5FeGVjdXRvclJlYWR5XG59XG5cbmV4cG9ydCB0eXBlIFBhcmVudFRvRXhlY3V0b3JNZXNzYWdlID0gRXhlY3V0ZVNuYXBDb21tYW5kXG5leHBvcnQgdHlwZSBFeGVjdXRvclRvUGFyZW50TWVzc2FnZSA9IEV4ZWN1dGVTbmFwUmVzdWx0IHwgRXhlY3V0b3JSZWFkeU1lc3NhZ2VcblxuZXhwb3J0IGZ1bmN0aW9uIGlzRXhlY3V0b3JSZWFkeShkYXRhOiB1bmtub3duKTogZGF0YSBpcyBFeGVjdXRvclJlYWR5TWVzc2FnZSB7XG4gIHJldHVybiAoXG4gICAgdHlwZW9mIGRhdGEgPT09ICdvYmplY3QnXG4gICAgJiYgZGF0YSAhPT0gbnVsbFxuICAgICYmIChkYXRhIGFzIEV4ZWN1dG9yUmVhZHlNZXNzYWdlKS50eXBlID09PSBTbmFwTWVzc2FnZVR5cGUuRXhlY3V0b3JSZWFkeVxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0V4ZWN1dGVTbmFwUmVzdWx0KGRhdGE6IHVua25vd24pOiBkYXRhIGlzIEV4ZWN1dGVTbmFwUmVzdWx0IHtcbiAgcmV0dXJuIChcbiAgICB0eXBlb2YgZGF0YSA9PT0gJ29iamVjdCdcbiAgICAmJiBkYXRhICE9PSBudWxsXG4gICAgJiYgKGRhdGEgYXMgRXhlY3V0ZVNuYXBSZXN1bHQpLnR5cGUgPT09IFNuYXBNZXNzYWdlVHlwZS5FeGVjdXRlU25hcFJlc3VsdFxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0V4ZWN1dGVTbmFwQ29tbWFuZChcbiAgZGF0YTogdW5rbm93bixcbik6IGRhdGEgaXMgRXhlY3V0ZVNuYXBDb21tYW5kIHtcbiAgaWYgKFxuICAgIHR5cGVvZiBkYXRhICE9PSAnb2JqZWN0J1xuICAgIHx8IGRhdGEgPT09IG51bGxcbiAgICB8fCAoZGF0YSBhcyBFeGVjdXRlU25hcENvbW1hbmQpLnR5cGUgIT09IFNuYXBDb21tYW5kLkV4ZWN1dGVTbmFwXG4gICAgfHwgdHlwZW9mIChkYXRhIGFzIEV4ZWN1dGVTbmFwQ29tbWFuZCkucmVxdWVzdElkICE9PSAnbnVtYmVyJ1xuICApIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuICAvLyBWYWxpZGF0ZSB0aGUgY29tbWFuZCBzaGFwZSBiZWNhdXNlIHNvdXJjZUNvZGUgaXMgcGFzc2VkIHRvIG5ldyBGdW5jdGlvbigpLlxuICBjb25zdCBwYXlsb2FkID0gKGRhdGEgYXMgeyBwYXlsb2FkPzogdW5rbm93biB9KS5wYXlsb2FkXG4gIHJldHVybiAoXG4gICAgdHlwZW9mIHBheWxvYWQgPT09ICdvYmplY3QnXG4gICAgJiYgcGF5bG9hZCAhPT0gbnVsbFxuICAgICYmIHR5cGVvZiAocGF5bG9hZCBhcyBFeGVjdXRlU25hcFBheWxvYWQpLnNuYXBJZCA9PT0gJ3N0cmluZydcbiAgICAmJiB0eXBlb2YgKHBheWxvYWQgYXMgRXhlY3V0ZVNuYXBQYXlsb2FkKS5zb3VyY2VDb2RlID09PSAnc3RyaW5nJ1xuICApXG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjYgVGhlIEJyYXZlIEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4vLyBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIGZpbGUsXG4vLyBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cHM6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy5cblxuLy8gU25hcCBob3N0IHJ1bm5pbmcgaW5zaWRlIGNocm9tZS11bnRydXN0ZWQ6Ly9zbmFwLWhvc3QvLlxuLy8gUmVjZWl2ZXMgc25hcCBzb3VyY2UgZnJvbSB0aGUgcGFyZW50IHNuYXBzIGNvbnRhaW5lciBwYWdlIHZpYSBwb3N0TWVzc2FnZSBhbmRcbi8vIGV2YWx1YXRlcyBpdCB3aXRoIG5ldyBGdW5jdGlvbigpLlxuXG5pbXBvcnQge1xuICBFeGVjdXRlU25hcFBheWxvYWQsXG4gIGlzRXhlY3V0ZVNuYXBDb21tYW5kLFxuICBTbmFwTWVzc2FnZVR5cGUsXG4gIFNOQVBTX0NPTlRBSU5FUl9PUklHSU4sXG59IGZyb20gJy4uL2NvbW1vbi9zbmFwL3NuYXBfbWVzc2FnZXMnXG5cbmZ1bmN0aW9uIHNlbmRUb1BhcmVudChtZXNzYWdlOiB1bmtub3duKSB7XG4gIHdpbmRvdy5wYXJlbnQucG9zdE1lc3NhZ2UobWVzc2FnZSwgU05BUFNfQ09OVEFJTkVSX09SSUdJTilcbn1cblxuZnVuY3Rpb24gaGFuZGxlRXhlY3V0ZVNuYXAocmVxdWVzdElkOiBudW1iZXIsIHBheWxvYWQ6IEV4ZWN1dGVTbmFwUGF5bG9hZCkge1xuICAvLyBTbmFwIGJ1bmRsZXMgYXJlIENvbW1vbkpTLCBzbyBwcm92aWRlIGBtb2R1bGVgL2BleHBvcnRzYCBhbmQgcHJlZmVyIGFuXG4gIC8vIGV4cGxpY2l0IHJldHVybiB2YWx1ZSBpZiB0aGUgYnVuZGxlIHByb2R1Y2VzIG9uZS5cbiAgY29uc3QgbW9kOiB7IGV4cG9ydHM6IHVua25vd24gfSA9IHsgZXhwb3J0czoge30gfVxuICB0cnkge1xuICAgIGNvbnN0IGZhY3RvcnkgPSBuZXcgRnVuY3Rpb24oXG4gICAgICAnbW9kdWxlJyxcbiAgICAgICdleHBvcnRzJyxcbiAgICAgIGBcInVzZSBzdHJpY3RcIjtcXG4ke3BheWxvYWQuc291cmNlQ29kZX1cXG47cmV0dXJuIG1vZHVsZS5leHBvcnRzO2AsXG4gICAgKVxuICAgIGNvbnN0IGV4cG9ydGVkID0gZmFjdG9yeShtb2QsIG1vZC5leHBvcnRzKVxuICAgIHNlbmRUb1BhcmVudCh7XG4gICAgICB0eXBlOiBTbmFwTWVzc2FnZVR5cGUuRXhlY3V0ZVNuYXBSZXN1bHQsXG4gICAgICByZXF1ZXN0SWQsXG4gICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgZXJyb3I6IG51bGwsXG4gICAgICByZXN1bHQ6IHR5cGVvZiBleHBvcnRlZCA9PT0gJ3N0cmluZycgPyBleHBvcnRlZCA6IG51bGwsXG4gICAgfSlcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc3QgZXJyb3IgPSBlcnIgaW5zdGFuY2VvZiBFcnJvciA/IGVyci5tZXNzYWdlIDogU3RyaW5nKGVycilcbiAgICBzZW5kVG9QYXJlbnQoe1xuICAgICAgdHlwZTogU25hcE1lc3NhZ2VUeXBlLkV4ZWN1dGVTbmFwUmVzdWx0LFxuICAgICAgcmVxdWVzdElkLFxuICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICBlcnJvcixcbiAgICAgIHJlc3VsdDogbnVsbCxcbiAgICB9KVxuICB9XG59XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgKGV2ZW50KSA9PiB7XG4gIGlmIChcbiAgICBldmVudC5vcmlnaW4gIT09IFNOQVBTX0NPTlRBSU5FUl9PUklHSU5cbiAgICB8fCBldmVudC5zb3VyY2UgIT09IHdpbmRvdy5wYXJlbnRcbiAgKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgaWYgKCFpc0V4ZWN1dGVTbmFwQ29tbWFuZChldmVudC5kYXRhKSkge1xuICAgIHJldHVyblxuICB9XG4gIGhhbmRsZUV4ZWN1dGVTbmFwKGV2ZW50LmRhdGEucmVxdWVzdElkLCBldmVudC5kYXRhLnBheWxvYWQpXG59KVxuXG4vLyBOb3RpZnkgdGhlIHBhcmVudCB0aGF0IHRoZSBob3N0IGlzIHJlYWR5Llxuc2VuZFRvUGFyZW50KHsgdHlwZTogU25hcE1lc3NhZ2VUeXBlLkV4ZWN1dG9yUmVhZHkgfSlcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==