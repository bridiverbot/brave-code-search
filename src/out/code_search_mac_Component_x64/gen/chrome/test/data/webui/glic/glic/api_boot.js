// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Note: Although the actual glic client does something similar, this code is
// test-only.
/**
 * Creates a GlicHostRegistry by loading the glic API script from Chrome and
 * calling the `internalAutoGlicBoot` function. This should be called on or
 * before page load. The returned promise never resolves if a message from
 * Chrome is not received.
 */
export function createGlicHostRegistryOnLoad() {
    return new Promise(resolve => {
        function messageHandler(event) {
            // Important: only accept messages from Chrome browser's glic WebUI.
            if (event.origin !== 'chrome://glic' || event.source === null) {
                return;
            }
            const bootMessage = event.data;
            if (bootMessage?.type === 'glic-bootstrap' && bootMessage.glicApiSource) {
                performance.mark('glic-client-bootstrap-received');
                window.removeEventListener('message', messageHandler);
                const glicApiSource = bootMessage.glicApiSource;
                const scriptElement = document.createElement('script');
                scriptElement.textContent = glicApiSource;
                document.head.appendChild(scriptElement);
                const bootFunc = window.internalAutoGlicBoot;
                if (!bootFunc) {
                    throw new Error('Glic client import failed.');
                }
                resolve(bootFunc(event.source));
            }
        }
        window.addEventListener('message', messageHandler);
    });
}
