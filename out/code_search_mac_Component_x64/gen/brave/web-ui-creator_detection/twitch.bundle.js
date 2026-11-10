/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!************************************************************************************!*\
  !*** ./components/brave_rewards/resources/creator_detection/twitch.ts + 2 modules ***!
  \************************************************************************************/

;// ./components/brave_rewards/resources/creator_detection/helpers.ts
// Copyright (c) 2024 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.
const log = new (class {
    info(...args) {
        console.debug('[Rewards]', ...args);
    }
    error(...args) {
        console.error('[Rewards]', ...args);
    }
})();
async function pollFor(fn, opts) {
    const startTime = Date.now();
    while (Date.now() - startTime < opts.timeout) {
        const result = await fn();
        if (result) {
            return result;
        }
        await new Promise((resolve) => setTimeout(resolve, opts.interval));
    }
    log.info(`Timed out waiting for ${opts.name}`);
    return null;
}
function throttle(fn) {
    let current = null;
    let next = null;
    let start = () => {
        current = Promise.resolve(fn()).finally(() => {
            current = null;
        });
        return current;
    };
    return () => {
        if (!current) {
            return start();
        }
        if (!next) {
            next = current
                .finally(() => {
                next = null;
            })
                .then(start);
        }
        return next;
    };
}
function urlPath(url) {
    try {
        return new URL(url, location.href).pathname;
    }
    catch {
        return '';
    }
}
function absoluteURL(url) {
    try {
        return new URL(url, location.href).toString();
    }
    catch {
        return '';
    }
}
function getPathComponents(path) {
    return path
        .split('/')
        .filter((part) => part)
        .map((part) => part.toLocaleLowerCase());
}

;// ./components/brave_rewards/resources/creator_detection/creator_detection.ts
// Copyright (c) 2024 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.

function setPageDetectionHandler(detectCreator) {
    let { braveRewards } = self;
    if (!braveRewards) {
        braveRewards = {};
        Object.assign(self, { braveRewards });
    }
    Object.assign(braveRewards, { detectCreator });
}
function initializeDetector(initializer) {
    const detectCreator = throttle(initializer());
    let currentURL = '';
    setPageDetectionHandler(async () => {
        if (location.href === currentURL) {
            return null;
        }
        currentURL = location.href;
        let creator = null;
        try {
            creator = await detectCreator();
        }
        catch (err) {
            log.error('Error detecting creator', err);
        }
        if (creator) {
            log.info('Found creator:', creator);
        }
        else {
            log.info('No creator found for current URL');
        }
        return creator;
    });
}

;// ./components/brave_rewards/resources/creator_detection/twitch.ts
// Copyright (c) 2024 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.


initializeDetector(() => {
    const isMobile = location.hostname.toLocaleLowerCase().startsWith('m.');
    function scrapeIcon() {
        const elem = document.querySelector(isMobile
            ? '.tw-avatar .tw-image-avatar[src]'
            : '.channel-info-content .tw-avatar [src]');
        return (elem && elem.getAttribute('src')) || '';
    }
    function getChannelTitleElement() {
        return document.querySelector('h1.tw-title');
    }
    function scrapeChannelName() {
        const elem = getChannelTitleElement();
        return (elem && elem.textContent) || '';
    }
    function firstPathComponent(path) {
        return getPathComponents(path)[0] || '';
    }
    function isVideoPath() {
        return firstPathComponent(location.pathname) === 'videos';
    }
    const excludedPaths = new Set([
        'directory',
        'downloads',
        'jobs',
        'p',
        'search',
        'turbo',
    ]);
    function scrapeChannelID() {
        if (isVideoPath()) {
            const elem = getChannelTitleElement();
            if (!elem || !elem.parentElement) {
                log.info('Unable to find parent of channel title element');
                return '';
            }
            const href = elem.parentElement.getAttribute('href');
            if (!href) {
                log.info('Missing "href" attribute in title element');
                return '';
            }
            let id = firstPathComponent(href);
            if (!id) {
                log.info('Unable to find channel ID in channel title "href":', href);
                return '';
            }
            log.info('Found channel ID in channel title element:', id);
            return id;
        }
        const pathPart = firstPathComponent(location.pathname);
        if (!pathPart || excludedPaths.has(pathPart)) {
            log.info('Path does not support creator detection');
            return '';
        }
        log.info('Found channel ID in path:', pathPart);
        return pathPart;
    }
    function scrapeUser() {
        const id = scrapeChannelID();
        if (!id) {
            return null;
        }
        return {
            id: `twitch#author:${id}`,
            name: scrapeChannelName(),
            url: `${location.origin}/${id}`,
            imageURL: scrapeIcon(),
        };
    }
    let currentUser = null;
    function isPageLoadComplete() {
        const user = scrapeUser();
        if (!user) {
            return !isVideoPath();
        }
        if (!user.name || !user.imageURL) {
            return false;
        }
        if (!currentUser) {
            return true;
        }
        if (user.id === currentUser.id) {
            return true;
        }
        return (user.name !== currentUser.name && user.imageURL !== currentUser.imageURL);
    }
    function getUser() {
        if (!isPageLoadComplete()) {
            return null;
        }
        currentUser = scrapeUser();
        return currentUser;
    }
    return async () => {
        return await pollFor(getUser, {
            name: 'creator',
            interval: 500,
            timeout: 6000,
        });
    };
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b3VyY2VzIjpbIndlYnBhY2s6Ly9icmF2ZS1jb3JlLy4vY29tcG9uZW50cy9icmF2ZV9yZXdhcmRzL3Jlc291cmNlcy9jcmVhdG9yX2RldGVjdGlvbi9oZWxwZXJzLnRzIiwid2VicGFjazovL2JyYXZlLWNvcmUvLi9jb21wb25lbnRzL2JyYXZlX3Jld2FyZHMvcmVzb3VyY2VzL2NyZWF0b3JfZGV0ZWN0aW9uL2NyZWF0b3JfZGV0ZWN0aW9uLnRzIiwid2VicGFjazovL2JyYXZlLWNvcmUvLi9jb21wb25lbnRzL2JyYXZlX3Jld2FyZHMvcmVzb3VyY2VzL2NyZWF0b3JfZGV0ZWN0aW9uL3R3aXRjaC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjQgVGhlIEJyYXZlIEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4vLyBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIGZpbGUsXG4vLyBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cHM6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy5cblxuZXhwb3J0IGNvbnN0IGxvZyA9IG5ldyAoY2xhc3Mge1xuICBpbmZvKC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgY29uc29sZS5kZWJ1ZygnW1Jld2FyZHNdJywgLi4uYXJncylcbiAgfVxuXG4gIGVycm9yKC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgY29uc29sZS5lcnJvcignW1Jld2FyZHNdJywgLi4uYXJncylcbiAgfVxufSkoKVxuXG5pbnRlcmZhY2UgUG9sbE9wdGlvbnMge1xuICBuYW1lOiBzdHJpbmdcbiAgdGltZW91dDogbnVtYmVyXG4gIGludGVydmFsOiBudW1iZXJcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHBvbGxGb3I8VD4oZm46ICgpID0+IFQgfCBQcm9taXNlPFQ+LCBvcHRzOiBQb2xsT3B0aW9ucykge1xuICBjb25zdCBzdGFydFRpbWUgPSBEYXRlLm5vdygpXG4gIHdoaWxlIChEYXRlLm5vdygpIC0gc3RhcnRUaW1lIDwgb3B0cy50aW1lb3V0KSB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZm4oKVxuICAgIGlmIChyZXN1bHQpIHtcbiAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG4gICAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgb3B0cy5pbnRlcnZhbCkpXG4gIH1cbiAgbG9nLmluZm8oYFRpbWVkIG91dCB3YWl0aW5nIGZvciAke29wdHMubmFtZX1gKVxuICByZXR1cm4gbnVsbFxufVxuXG5leHBvcnQgZnVuY3Rpb24gdGhyb3R0bGU8VD4oZm46ICgpID0+IFByb21pc2U8VD4gfCBUKSB7XG4gIGxldCBjdXJyZW50OiBQcm9taXNlPFQ+IHwgbnVsbCA9IG51bGxcbiAgbGV0IG5leHQ6IFByb21pc2U8VD4gfCBudWxsID0gbnVsbFxuXG4gIGxldCBzdGFydCA9ICgpID0+IHtcbiAgICBjdXJyZW50ID0gUHJvbWlzZS5yZXNvbHZlKGZuKCkpLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgY3VycmVudCA9IG51bGxcbiAgICB9KVxuICAgIHJldHVybiBjdXJyZW50XG4gIH1cblxuICByZXR1cm4gKCkgPT4ge1xuICAgIGlmICghY3VycmVudCkge1xuICAgICAgcmV0dXJuIHN0YXJ0KClcbiAgICB9XG4gICAgaWYgKCFuZXh0KSB7XG4gICAgICBuZXh0ID0gY3VycmVudFxuICAgICAgICAuZmluYWxseSgoKSA9PiB7XG4gICAgICAgICAgbmV4dCA9IG51bGxcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oc3RhcnQpXG4gICAgfVxuICAgIHJldHVybiBuZXh0XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVybFBhdGgodXJsOiBzdHJpbmcpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gbmV3IFVSTCh1cmwsIGxvY2F0aW9uLmhyZWYpLnBhdGhuYW1lXG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiAnJ1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhYnNvbHV0ZVVSTCh1cmw6IHN0cmluZykge1xuICB0cnkge1xuICAgIHJldHVybiBuZXcgVVJMKHVybCwgbG9jYXRpb24uaHJlZikudG9TdHJpbmcoKVxuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gJydcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UGF0aENvbXBvbmVudHMocGF0aDogc3RyaW5nKSB7XG4gIHJldHVybiBwYXRoXG4gICAgLnNwbGl0KCcvJylcbiAgICAuZmlsdGVyKChwYXJ0KSA9PiBwYXJ0KVxuICAgIC5tYXAoKHBhcnQpID0+IHBhcnQudG9Mb2NhbGVMb3dlckNhc2UoKSlcbn1cbiIsIi8vIENvcHlyaWdodCAoYykgMjAyNCBUaGUgQnJhdmUgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbi8vIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXMgZmlsZSxcbi8vIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwczovL21vemlsbGEub3JnL01QTC8yLjAvLlxuXG5pbXBvcnQgeyBsb2csIHRocm90dGxlIH0gZnJvbSAnLi9oZWxwZXJzJ1xuXG5leHBvcnQgaW50ZXJmYWNlIENyZWF0b3JJbmZvIHtcbiAgaWQ6IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbiAgdXJsOiBzdHJpbmdcbiAgaW1hZ2VVUkw6IHN0cmluZ1xufVxuXG50eXBlIERldGVjdGlvbkhhbmRsZXIgPSAoKSA9PiBQcm9taXNlPENyZWF0b3JJbmZvIHwgbnVsbD5cblxuZnVuY3Rpb24gc2V0UGFnZURldGVjdGlvbkhhbmRsZXIoZGV0ZWN0Q3JlYXRvcjogRGV0ZWN0aW9uSGFuZGxlcikge1xuICBsZXQgeyBicmF2ZVJld2FyZHMgfSA9IHNlbGYgYXMgYW55XG4gIGlmICghYnJhdmVSZXdhcmRzKSB7XG4gICAgYnJhdmVSZXdhcmRzID0ge31cbiAgICBPYmplY3QuYXNzaWduKHNlbGYsIHsgYnJhdmVSZXdhcmRzIH0pXG4gIH1cbiAgT2JqZWN0LmFzc2lnbihicmF2ZVJld2FyZHMsIHsgZGV0ZWN0Q3JlYXRvciB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGl6ZURldGVjdG9yKGluaXRpYWxpemVyOiAoKSA9PiBEZXRlY3Rpb25IYW5kbGVyKSB7XG4gIGNvbnN0IGRldGVjdENyZWF0b3IgPSB0aHJvdHRsZShpbml0aWFsaXplcigpKVxuICBsZXQgY3VycmVudFVSTCA9ICcnXG5cbiAgc2V0UGFnZURldGVjdGlvbkhhbmRsZXIoYXN5bmMgKCkgPT4ge1xuICAgIGlmIChsb2NhdGlvbi5ocmVmID09PSBjdXJyZW50VVJMKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIGN1cnJlbnRVUkwgPSBsb2NhdGlvbi5ocmVmXG5cbiAgICBsZXQgY3JlYXRvcjogQ3JlYXRvckluZm8gfCBudWxsID0gbnVsbFxuICAgIHRyeSB7XG4gICAgICBjcmVhdG9yID0gYXdhaXQgZGV0ZWN0Q3JlYXRvcigpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBsb2cuZXJyb3IoJ0Vycm9yIGRldGVjdGluZyBjcmVhdG9yJywgZXJyKVxuICAgIH1cblxuICAgIGlmIChjcmVhdG9yKSB7XG4gICAgICBsb2cuaW5mbygnRm91bmQgY3JlYXRvcjonLCBjcmVhdG9yKVxuICAgIH0gZWxzZSB7XG4gICAgICBsb2cuaW5mbygnTm8gY3JlYXRvciBmb3VuZCBmb3IgY3VycmVudCBVUkwnKVxuICAgIH1cblxuICAgIHJldHVybiBjcmVhdG9yXG4gIH0pXG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjQgVGhlIEJyYXZlIEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4vLyBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIGZpbGUsXG4vLyBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cHM6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy5cblxuaW1wb3J0IHsgQ3JlYXRvckluZm8sIGluaXRpYWxpemVEZXRlY3RvciB9IGZyb20gJy4vY3JlYXRvcl9kZXRlY3Rpb24nXG5pbXBvcnQgeyBsb2csIGdldFBhdGhDb21wb25lbnRzLCBwb2xsRm9yIH0gZnJvbSAnLi9oZWxwZXJzJ1xuXG5pbml0aWFsaXplRGV0ZWN0b3IoKCkgPT4ge1xuICBjb25zdCBpc01vYmlsZSA9IGxvY2F0aW9uLmhvc3RuYW1lLnRvTG9jYWxlTG93ZXJDYXNlKCkuc3RhcnRzV2l0aCgnbS4nKVxuXG4gIGZ1bmN0aW9uIHNjcmFwZUljb24oKSB7XG4gICAgY29uc3QgZWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBpc01vYmlsZVxuICAgICAgICA/ICcudHctYXZhdGFyIC50dy1pbWFnZS1hdmF0YXJbc3JjXSdcbiAgICAgICAgOiAnLmNoYW5uZWwtaW5mby1jb250ZW50IC50dy1hdmF0YXIgW3NyY10nLFxuICAgIClcbiAgICByZXR1cm4gKGVsZW0gJiYgZWxlbS5nZXRBdHRyaWJ1dGUoJ3NyYycpKSB8fCAnJ1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0Q2hhbm5lbFRpdGxlRWxlbWVudCgpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaDEudHctdGl0bGUnKVxuICB9XG5cbiAgZnVuY3Rpb24gc2NyYXBlQ2hhbm5lbE5hbWUoKSB7XG4gICAgY29uc3QgZWxlbSA9IGdldENoYW5uZWxUaXRsZUVsZW1lbnQoKVxuICAgIHJldHVybiAoZWxlbSAmJiBlbGVtLnRleHRDb250ZW50KSB8fCAnJ1xuICB9XG5cbiAgZnVuY3Rpb24gZmlyc3RQYXRoQ29tcG9uZW50KHBhdGg6IHN0cmluZykge1xuICAgIHJldHVybiBnZXRQYXRoQ29tcG9uZW50cyhwYXRoKVswXSB8fCAnJ1xuICB9XG5cbiAgZnVuY3Rpb24gaXNWaWRlb1BhdGgoKSB7XG4gICAgcmV0dXJuIGZpcnN0UGF0aENvbXBvbmVudChsb2NhdGlvbi5wYXRobmFtZSkgPT09ICd2aWRlb3MnXG4gIH1cblxuICBjb25zdCBleGNsdWRlZFBhdGhzID0gbmV3IFNldChbXG4gICAgJ2RpcmVjdG9yeScsXG4gICAgJ2Rvd25sb2FkcycsXG4gICAgJ2pvYnMnLFxuICAgICdwJyxcbiAgICAnc2VhcmNoJyxcbiAgICAndHVyYm8nLFxuICBdKVxuXG4gIGZ1bmN0aW9uIHNjcmFwZUNoYW5uZWxJRCgpIHtcbiAgICBpZiAoaXNWaWRlb1BhdGgoKSkge1xuICAgICAgY29uc3QgZWxlbSA9IGdldENoYW5uZWxUaXRsZUVsZW1lbnQoKVxuICAgICAgaWYgKCFlbGVtIHx8ICFlbGVtLnBhcmVudEVsZW1lbnQpIHtcbiAgICAgICAgbG9nLmluZm8oJ1VuYWJsZSB0byBmaW5kIHBhcmVudCBvZiBjaGFubmVsIHRpdGxlIGVsZW1lbnQnKVxuICAgICAgICByZXR1cm4gJydcbiAgICAgIH1cbiAgICAgIGNvbnN0IGhyZWYgPSBlbGVtLnBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdocmVmJylcbiAgICAgIGlmICghaHJlZikge1xuICAgICAgICBsb2cuaW5mbygnTWlzc2luZyBcImhyZWZcIiBhdHRyaWJ1dGUgaW4gdGl0bGUgZWxlbWVudCcpXG4gICAgICAgIHJldHVybiAnJ1xuICAgICAgfVxuICAgICAgbGV0IGlkID0gZmlyc3RQYXRoQ29tcG9uZW50KGhyZWYpXG4gICAgICBpZiAoIWlkKSB7XG4gICAgICAgIGxvZy5pbmZvKCdVbmFibGUgdG8gZmluZCBjaGFubmVsIElEIGluIGNoYW5uZWwgdGl0bGUgXCJocmVmXCI6JywgaHJlZilcbiAgICAgICAgcmV0dXJuICcnXG4gICAgICB9XG4gICAgICBsb2cuaW5mbygnRm91bmQgY2hhbm5lbCBJRCBpbiBjaGFubmVsIHRpdGxlIGVsZW1lbnQ6JywgaWQpXG4gICAgICByZXR1cm4gaWRcbiAgICB9XG5cbiAgICBjb25zdCBwYXRoUGFydCA9IGZpcnN0UGF0aENvbXBvbmVudChsb2NhdGlvbi5wYXRobmFtZSlcbiAgICBpZiAoIXBhdGhQYXJ0IHx8IGV4Y2x1ZGVkUGF0aHMuaGFzKHBhdGhQYXJ0KSkge1xuICAgICAgbG9nLmluZm8oJ1BhdGggZG9lcyBub3Qgc3VwcG9ydCBjcmVhdG9yIGRldGVjdGlvbicpXG4gICAgICByZXR1cm4gJydcbiAgICB9XG5cbiAgICBsb2cuaW5mbygnRm91bmQgY2hhbm5lbCBJRCBpbiBwYXRoOicsIHBhdGhQYXJ0KVxuICAgIHJldHVybiBwYXRoUGFydFxuICB9XG5cbiAgZnVuY3Rpb24gc2NyYXBlVXNlcigpIHtcbiAgICBjb25zdCBpZCA9IHNjcmFwZUNoYW5uZWxJRCgpXG4gICAgaWYgKCFpZCkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiBgdHdpdGNoI2F1dGhvcjoke2lkfWAsXG4gICAgICBuYW1lOiBzY3JhcGVDaGFubmVsTmFtZSgpLFxuICAgICAgdXJsOiBgJHtsb2NhdGlvbi5vcmlnaW59LyR7aWR9YCxcbiAgICAgIGltYWdlVVJMOiBzY3JhcGVJY29uKCksXG4gICAgfVxuICB9XG5cbiAgbGV0IGN1cnJlbnRVc2VyOiBDcmVhdG9ySW5mbyB8IG51bGwgPSBudWxsXG5cbiAgZnVuY3Rpb24gaXNQYWdlTG9hZENvbXBsZXRlKCkge1xuICAgIGNvbnN0IHVzZXIgPSBzY3JhcGVVc2VyKClcbiAgICBpZiAoIXVzZXIpIHtcbiAgICAgIHJldHVybiAhaXNWaWRlb1BhdGgoKVxuICAgIH1cbiAgICBpZiAoIXVzZXIubmFtZSB8fCAhdXNlci5pbWFnZVVSTCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIGlmICghY3VycmVudFVzZXIpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICAgIGlmICh1c2VyLmlkID09PSBjdXJyZW50VXNlci5pZCkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIHVzZXIubmFtZSAhPT0gY3VycmVudFVzZXIubmFtZSAmJiB1c2VyLmltYWdlVVJMICE9PSBjdXJyZW50VXNlci5pbWFnZVVSTFxuICAgIClcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFVzZXIoKSB7XG4gICAgaWYgKCFpc1BhZ2VMb2FkQ29tcGxldGUoKSkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gICAgY3VycmVudFVzZXIgPSBzY3JhcGVVc2VyKClcbiAgICByZXR1cm4gY3VycmVudFVzZXJcbiAgfVxuXG4gIHJldHVybiBhc3luYyAoKSA9PiB7XG4gICAgcmV0dXJuIGF3YWl0IHBvbGxGb3IoZ2V0VXNlciwge1xuICAgICAgbmFtZTogJ2NyZWF0b3InLFxuICAgICAgaW50ZXJ2YWw6IDUwMCxcbiAgICAgIHRpbWVvdXQ6IDYwMDAsXG4gICAgfSlcbiAgfVxufSlcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==