/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!*************************************************************************************!*\
  !*** ./components/brave_rewards/resources/creator_detection/youtube.ts + 2 modules ***!
  \*************************************************************************************/

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

;// ./components/brave_rewards/resources/creator_detection/youtube.ts
// Copyright (c) 2024 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.


initializeDetector(() => {
    function getChannelFromURL(url) {
        let pathname = urlPath(url);
        let match = pathname.match(/^\/channel\/([^\/]+)/i);
        if (match) {
            return match[1];
        }
        return '';
    }
    function getVideoIdFromURL(url) {
        if (!urlPath(url).match(/^\/watch(\/|$)/i)) {
            return '';
        }
        let params = null;
        try {
            params = new URL(url).searchParams;
        }
        catch {
            return '';
        }
        return params.get('v') || '';
    }
    function getChannelNameFromURL(url) {
        let pathname = urlPath(url);
        let match = pathname.match(/^\/@([^\/]+)/);
        if (match) {
            return match[1];
        }
        return '';
    }
    function getPathType() {
        if (getChannelFromURL(location.href)) {
            return 'channel';
        }
        if (getChannelNameFromURL(location.href)) {
            return 'channel-name';
        }
        if (getVideoIdFromURL(location.href)) {
            return 'video';
        }
        return '';
    }
    let firstChannelScrape = true;
    let currentPathType = '';
    // Attempts to find the channel identifier by inspecting the URL and various
    // DOM elements.
    function scrapeChannel() {
        let firstScrape = firstChannelScrape;
        firstChannelScrape = false;
        let channel = getChannelFromURL(location.href);
        if (channel) {
            return channel;
        }
        let elem = document.querySelector('a[aria-label=About]');
        if (elem && elem.checkVisibility()) {
            channel = getChannelFromURL(elem.href);
            if (channel) {
                return channel;
            }
        }
        elem = document.querySelector('a.ytp-ce-channel-title');
        if (elem && elem.checkVisibility()) {
            channel = getChannelFromURL(elem.href);
            if (channel) {
                return channel;
            }
        }
        // On initial page load, a "canonical" link element that contains the
        // channel identifier may be present on channel pages. On subsequent
        // same-document navigations, this element will still exist but will no
        // longer be valid. Only look for this element the first time we attempt to
        // find the channel ID on the page (i.e. the initial page load).
        if (firstScrape) {
            let elem = document.querySelector('link[rel=canonical]');
            if (elem) {
                channel = getChannelFromURL(elem.href);
                if (channel) {
                    return channel;
                }
            }
        }
        return '';
    }
    function scrapeChannelName() {
        let name = getChannelNameFromURL(location.href);
        if (name) {
            return name;
        }
        let elems = document.querySelectorAll(['ytd-video-owner-renderer a', 'ytm-slim-owner-renderer a'].join(','));
        for (let elem of elems) {
            name = getChannelNameFromURL(elem.href);
            if (name) {
                return name;
            }
        }
        if (currentPathType === 'channel' || currentPathType === 'channel-name') {
            let header = document.querySelector(['#page-header', 'ytm-browse yt-page-header-view-model'].join(','));
            if (header) {
                let matches = header.innerText.match(/@[\w]+/);
                if (matches && matches.length > 0) {
                    return matches[0];
                }
            }
        }
        return '';
    }
    function scrapeImage() {
        let elems = document.querySelectorAll([
            '#avatar img',
            'yt-page-header-renderer yt-avatar-shape img',
            'ytm-slim-owner-renderer a img',
        ].join(','));
        for (let elem of elems) {
            if (elem.src) {
                return elem.src;
            }
        }
        return '';
    }
    function scrapeChannelURL() {
        let name = scrapeChannelName();
        if (name) {
            return `${location.origin}/@${name}`;
        }
        if (currentPathType === 'channel') {
            return location.href;
        }
        return '';
    }
    async function getChannel() {
        let channel = scrapeChannel();
        if (channel) {
            return channel;
        }
        let name = scrapeChannelName();
        if (name) {
            let channelURL = `/@${name}`;
            log.info(`Fetching "${channelURL}" for channel ID detection`);
            let response = await fetch(channelURL);
            let responseText = response.ok ? await response.text() : '';
            let match = responseText.match(/<link itemprop="url" href="([^"]+)"/i);
            if (match) {
                log.info('Found channel ID:', match[1]);
                return getChannelFromURL(match[1]);
            }
            else {
                log.info('Unable to find channel ID in channel URL');
            }
        }
        else {
            log.info('Unable to determine channel ID');
        }
        return '';
    }
    async function getUser() {
        if (!currentPathType) {
            return null;
        }
        let channel = await getChannel();
        if (channel) {
            return {
                id: `youtube#channel:${channel}`,
                name: scrapeChannelName(),
                url: scrapeChannelURL(),
                imageURL: scrapeImage(),
            };
        }
        return null;
    }
    function isPageLoadComplete() {
        if (currentPathType === 'channel') {
            let elem = document.querySelector('a.ytp-ce-channel-title');
            if (elem) {
                return absoluteURL(elem.href) === location.href;
            }
            return Boolean(document.querySelector('#page-header'));
        }
        if (currentPathType === 'channel-name') {
            let elem = document.querySelector('ytd-video-owner-renderer a');
            if (elem && absoluteURL(elem.href) === location.href) {
                return true;
            }
            let form = document.querySelector('#form');
            let name = getChannelNameFromURL(location.href);
            return Boolean(form && urlPath(form.action).startsWith(`/@${name}`));
        }
        if (currentPathType === 'video') {
            let id = getVideoIdFromURL(location.href);
            let elem = document.querySelector('ytd-watch-metadata');
            return Boolean(elem && elem.getAttribute('video-id') === id);
        }
        return true;
    }
    return async () => {
        currentPathType = getPathType();
        log.info(`Current path type: ${currentPathType} (${location.pathname})`);
        await pollFor(isPageLoadComplete, {
            name: 'load complete',
            interval: 500,
            timeout: 6000,
        });
        return await getUser();
    };
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UUFDaEIsZUFBZSxHQUFHLFdBQVcsRUFBRTtRQUMvQixHQUFHLENBQUMsSUFBSSxDQUFDLHNCQUFzQixlQUFlLEtBQUssUUFBUSxDQUFDLFFBQVEsR0FBRyxDQUFDO1FBRXhFLE1BQU0sT0FBTyxDQUFDLGtCQUFrQixFQUFFO1lBQ2hDLElBQUksRUFBRSxlQUFlO1lBQ3JCLFFBQVEsRUFBRSxHQUFHO1lBQ2IsT0FBTyxFQUFFLElBQUk7U0FDZCxDQUFDO1FBRUYsT0FBTyxNQUFNLE9BQU8sRUFBRTtJQUN4QixDQUFDO0FBQ0gsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYnJhdmUtY29yZS8uL2NvbXBvbmVudHMvYnJhdmVfcmV3YXJkcy9yZXNvdXJjZXMvY3JlYXRvcl9kZXRlY3Rpb24vaGVscGVycy50cyIsIndlYnBhY2s6Ly9icmF2ZS1jb3JlLy4vY29tcG9uZW50cy9icmF2ZV9yZXdhcmRzL3Jlc291cmNlcy9jcmVhdG9yX2RldGVjdGlvbi9jcmVhdG9yX2RldGVjdGlvbi50cyIsIndlYnBhY2s6Ly9icmF2ZS1jb3JlLy4vY29tcG9uZW50cy9icmF2ZV9yZXdhcmRzL3Jlc291cmNlcy9jcmVhdG9yX2RldGVjdGlvbi95b3V0dWJlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyNCBUaGUgQnJhdmUgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbi8vIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXMgZmlsZSxcbi8vIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwczovL21vemlsbGEub3JnL01QTC8yLjAvLlxuXG5leHBvcnQgY29uc3QgbG9nID0gbmV3IChjbGFzcyB7XG4gIGluZm8oLi4uYXJnczogYW55W10pIHtcbiAgICBjb25zb2xlLmRlYnVnKCdbUmV3YXJkc10nLCAuLi5hcmdzKVxuICB9XG5cbiAgZXJyb3IoLi4uYXJnczogYW55W10pIHtcbiAgICBjb25zb2xlLmVycm9yKCdbUmV3YXJkc10nLCAuLi5hcmdzKVxuICB9XG59KSgpXG5cbmludGVyZmFjZSBQb2xsT3B0aW9ucyB7XG4gIG5hbWU6IHN0cmluZ1xuICB0aW1lb3V0OiBudW1iZXJcbiAgaW50ZXJ2YWw6IG51bWJlclxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcG9sbEZvcjxUPihmbjogKCkgPT4gVCB8IFByb21pc2U8VD4sIG9wdHM6IFBvbGxPcHRpb25zKSB7XG4gIGNvbnN0IHN0YXJ0VGltZSA9IERhdGUubm93KClcbiAgd2hpbGUgKERhdGUubm93KCkgLSBzdGFydFRpbWUgPCBvcHRzLnRpbWVvdXQpIHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBmbigpXG4gICAgaWYgKHJlc3VsdCkge1xuICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbiAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCBvcHRzLmludGVydmFsKSlcbiAgfVxuICBsb2cuaW5mbyhgVGltZWQgb3V0IHdhaXRpbmcgZm9yICR7b3B0cy5uYW1lfWApXG4gIHJldHVybiBudWxsXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0aHJvdHRsZTxUPihmbjogKCkgPT4gUHJvbWlzZTxUPiB8IFQpIHtcbiAgbGV0IGN1cnJlbnQ6IFByb21pc2U8VD4gfCBudWxsID0gbnVsbFxuICBsZXQgbmV4dDogUHJvbWlzZTxUPiB8IG51bGwgPSBudWxsXG5cbiAgbGV0IHN0YXJ0ID0gKCkgPT4ge1xuICAgIGN1cnJlbnQgPSBQcm9taXNlLnJlc29sdmUoZm4oKSkuZmluYWxseSgoKSA9PiB7XG4gICAgICBjdXJyZW50ID0gbnVsbFxuICAgIH0pXG4gICAgcmV0dXJuIGN1cnJlbnRcbiAgfVxuXG4gIHJldHVybiAoKSA9PiB7XG4gICAgaWYgKCFjdXJyZW50KSB7XG4gICAgICByZXR1cm4gc3RhcnQoKVxuICAgIH1cbiAgICBpZiAoIW5leHQpIHtcbiAgICAgIG5leHQgPSBjdXJyZW50XG4gICAgICAgIC5maW5hbGx5KCgpID0+IHtcbiAgICAgICAgICBuZXh0ID0gbnVsbFxuICAgICAgICB9KVxuICAgICAgICAudGhlbihzdGFydClcbiAgICB9XG4gICAgcmV0dXJuIG5leHRcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXJsUGF0aCh1cmw6IHN0cmluZykge1xuICB0cnkge1xuICAgIHJldHVybiBuZXcgVVJMKHVybCwgbG9jYXRpb24uaHJlZikucGF0aG5hbWVcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuICcnXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFic29sdXRlVVJMKHVybDogc3RyaW5nKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIG5ldyBVUkwodXJsLCBsb2NhdGlvbi5ocmVmKS50b1N0cmluZygpXG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiAnJ1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQYXRoQ29tcG9uZW50cyhwYXRoOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHBhdGhcbiAgICAuc3BsaXQoJy8nKVxuICAgIC5maWx0ZXIoKHBhcnQpID0+IHBhcnQpXG4gICAgLm1hcCgocGFydCkgPT4gcGFydC50b0xvY2FsZUxvd2VyQ2FzZSgpKVxufVxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDI0IFRoZSBCcmF2ZSBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuLy8gTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBmaWxlLFxuLy8gWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHBzOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uXG5cbmltcG9ydCB7IGxvZywgdGhyb3R0bGUgfSBmcm9tICcuL2hlbHBlcnMnXG5cbmV4cG9ydCBpbnRlcmZhY2UgQ3JlYXRvckluZm8ge1xuICBpZDogc3RyaW5nXG4gIG5hbWU6IHN0cmluZ1xuICB1cmw6IHN0cmluZ1xuICBpbWFnZVVSTDogc3RyaW5nXG59XG5cbnR5cGUgRGV0ZWN0aW9uSGFuZGxlciA9ICgpID0+IFByb21pc2U8Q3JlYXRvckluZm8gfCBudWxsPlxuXG5mdW5jdGlvbiBzZXRQYWdlRGV0ZWN0aW9uSGFuZGxlcihkZXRlY3RDcmVhdG9yOiBEZXRlY3Rpb25IYW5kbGVyKSB7XG4gIGxldCB7IGJyYXZlUmV3YXJkcyB9ID0gc2VsZiBhcyBhbnlcbiAgaWYgKCFicmF2ZVJld2FyZHMpIHtcbiAgICBicmF2ZVJld2FyZHMgPSB7fVxuICAgIE9iamVjdC5hc3NpZ24oc2VsZiwgeyBicmF2ZVJld2FyZHMgfSlcbiAgfVxuICBPYmplY3QuYXNzaWduKGJyYXZlUmV3YXJkcywgeyBkZXRlY3RDcmVhdG9yIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsaXplRGV0ZWN0b3IoaW5pdGlhbGl6ZXI6ICgpID0+IERldGVjdGlvbkhhbmRsZXIpIHtcbiAgY29uc3QgZGV0ZWN0Q3JlYXRvciA9IHRocm90dGxlKGluaXRpYWxpemVyKCkpXG4gIGxldCBjdXJyZW50VVJMID0gJydcblxuICBzZXRQYWdlRGV0ZWN0aW9uSGFuZGxlcihhc3luYyAoKSA9PiB7XG4gICAgaWYgKGxvY2F0aW9uLmhyZWYgPT09IGN1cnJlbnRVUkwpIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuXG4gICAgY3VycmVudFVSTCA9IGxvY2F0aW9uLmhyZWZcblxuICAgIGxldCBjcmVhdG9yOiBDcmVhdG9ySW5mbyB8IG51bGwgPSBudWxsXG4gICAgdHJ5IHtcbiAgICAgIGNyZWF0b3IgPSBhd2FpdCBkZXRlY3RDcmVhdG9yKClcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGxvZy5lcnJvcignRXJyb3IgZGV0ZWN0aW5nIGNyZWF0b3InLCBlcnIpXG4gICAgfVxuXG4gICAgaWYgKGNyZWF0b3IpIHtcbiAgICAgIGxvZy5pbmZvKCdGb3VuZCBjcmVhdG9yOicsIGNyZWF0b3IpXG4gICAgfSBlbHNlIHtcbiAgICAgIGxvZy5pbmZvKCdObyBjcmVhdG9yIGZvdW5kIGZvciBjdXJyZW50IFVSTCcpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNyZWF0b3JcbiAgfSlcbn1cbiIsIi8vIENvcHlyaWdodCAoYykgMjAyNCBUaGUgQnJhdmUgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbi8vIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXMgZmlsZSxcbi8vIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwczovL21vemlsbGEub3JnL01QTC8yLjAvLlxuXG5pbXBvcnQgeyBpbml0aWFsaXplRGV0ZWN0b3IgfSBmcm9tICcuL2NyZWF0b3JfZGV0ZWN0aW9uJ1xuaW1wb3J0IHsgbG9nLCBwb2xsRm9yLCB1cmxQYXRoLCBhYnNvbHV0ZVVSTCB9IGZyb20gJy4vaGVscGVycydcblxuaW5pdGlhbGl6ZURldGVjdG9yKCgpID0+IHtcbiAgZnVuY3Rpb24gZ2V0Q2hhbm5lbEZyb21VUkwodXJsOiBzdHJpbmcpIHtcbiAgICBsZXQgcGF0aG5hbWUgPSB1cmxQYXRoKHVybClcbiAgICBsZXQgbWF0Y2ggPSBwYXRobmFtZS5tYXRjaCgvXlxcL2NoYW5uZWxcXC8oW15cXC9dKykvaSlcbiAgICBpZiAobWF0Y2gpIHtcbiAgICAgIHJldHVybiBtYXRjaFsxXVxuICAgIH1cbiAgICByZXR1cm4gJydcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFZpZGVvSWRGcm9tVVJMKHVybDogc3RyaW5nKSB7XG4gICAgaWYgKCF1cmxQYXRoKHVybCkubWF0Y2goL15cXC93YXRjaChcXC98JCkvaSkpIHtcbiAgICAgIHJldHVybiAnJ1xuICAgIH1cbiAgICBsZXQgcGFyYW1zID0gbnVsbFxuICAgIHRyeSB7XG4gICAgICBwYXJhbXMgPSBuZXcgVVJMKHVybCkuc2VhcmNoUGFyYW1zXG4gICAgfSBjYXRjaCB7XG4gICAgICByZXR1cm4gJydcbiAgICB9XG4gICAgcmV0dXJuIHBhcmFtcy5nZXQoJ3YnKSB8fCAnJ1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0Q2hhbm5lbE5hbWVGcm9tVVJMKHVybDogc3RyaW5nKSB7XG4gICAgbGV0IHBhdGhuYW1lID0gdXJsUGF0aCh1cmwpXG4gICAgbGV0IG1hdGNoID0gcGF0aG5hbWUubWF0Y2goL15cXC9AKFteXFwvXSspLylcbiAgICBpZiAobWF0Y2gpIHtcbiAgICAgIHJldHVybiBtYXRjaFsxXVxuICAgIH1cbiAgICByZXR1cm4gJydcbiAgfVxuXG4gIHR5cGUgUGF0aFR5cGUgPSAnY2hhbm5lbCcgfCAnY2hhbm5lbC1uYW1lJyB8ICd2aWRlbycgfCAnJ1xuXG4gIGZ1bmN0aW9uIGdldFBhdGhUeXBlKCk6IFBhdGhUeXBlIHtcbiAgICBpZiAoZ2V0Q2hhbm5lbEZyb21VUkwobG9jYXRpb24uaHJlZikpIHtcbiAgICAgIHJldHVybiAnY2hhbm5lbCdcbiAgICB9XG4gICAgaWYgKGdldENoYW5uZWxOYW1lRnJvbVVSTChsb2NhdGlvbi5ocmVmKSkge1xuICAgICAgcmV0dXJuICdjaGFubmVsLW5hbWUnXG4gICAgfVxuICAgIGlmIChnZXRWaWRlb0lkRnJvbVVSTChsb2NhdGlvbi5ocmVmKSkge1xuICAgICAgcmV0dXJuICd2aWRlbydcbiAgICB9XG4gICAgcmV0dXJuICcnXG4gIH1cblxuICBsZXQgZmlyc3RDaGFubmVsU2NyYXBlID0gdHJ1ZVxuICBsZXQgY3VycmVudFBhdGhUeXBlOiBQYXRoVHlwZSA9ICcnXG5cbiAgLy8gQXR0ZW1wdHMgdG8gZmluZCB0aGUgY2hhbm5lbCBpZGVudGlmaWVyIGJ5IGluc3BlY3RpbmcgdGhlIFVSTCBhbmQgdmFyaW91c1xuICAvLyBET00gZWxlbWVudHMuXG4gIGZ1bmN0aW9uIHNjcmFwZUNoYW5uZWwoKSB7XG4gICAgbGV0IGZpcnN0U2NyYXBlID0gZmlyc3RDaGFubmVsU2NyYXBlXG4gICAgZmlyc3RDaGFubmVsU2NyYXBlID0gZmFsc2VcblxuICAgIGxldCBjaGFubmVsID0gZ2V0Q2hhbm5lbEZyb21VUkwobG9jYXRpb24uaHJlZilcbiAgICBpZiAoY2hhbm5lbCkge1xuICAgICAgcmV0dXJuIGNoYW5uZWxcbiAgICB9XG5cbiAgICBsZXQgZWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEFuY2hvckVsZW1lbnQ+KCdhW2FyaWEtbGFiZWw9QWJvdXRdJylcbiAgICBpZiAoZWxlbSAmJiBlbGVtLmNoZWNrVmlzaWJpbGl0eSgpKSB7XG4gICAgICBjaGFubmVsID0gZ2V0Q2hhbm5lbEZyb21VUkwoZWxlbS5ocmVmKVxuICAgICAgaWYgKGNoYW5uZWwpIHtcbiAgICAgICAgcmV0dXJuIGNoYW5uZWxcbiAgICAgIH1cbiAgICB9XG5cbiAgICBlbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MQW5jaG9yRWxlbWVudD4oJ2EueXRwLWNlLWNoYW5uZWwtdGl0bGUnKVxuICAgIGlmIChlbGVtICYmIGVsZW0uY2hlY2tWaXNpYmlsaXR5KCkpIHtcbiAgICAgIGNoYW5uZWwgPSBnZXRDaGFubmVsRnJvbVVSTChlbGVtLmhyZWYpXG4gICAgICBpZiAoY2hhbm5lbCkge1xuICAgICAgICByZXR1cm4gY2hhbm5lbFxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIE9uIGluaXRpYWwgcGFnZSBsb2FkLCBhIFwiY2Fub25pY2FsXCIgbGluayBlbGVtZW50IHRoYXQgY29udGFpbnMgdGhlXG4gICAgLy8gY2hhbm5lbCBpZGVudGlmaWVyIG1heSBiZSBwcmVzZW50IG9uIGNoYW5uZWwgcGFnZXMuIE9uIHN1YnNlcXVlbnRcbiAgICAvLyBzYW1lLWRvY3VtZW50IG5hdmlnYXRpb25zLCB0aGlzIGVsZW1lbnQgd2lsbCBzdGlsbCBleGlzdCBidXQgd2lsbCBub1xuICAgIC8vIGxvbmdlciBiZSB2YWxpZC4gT25seSBsb29rIGZvciB0aGlzIGVsZW1lbnQgdGhlIGZpcnN0IHRpbWUgd2UgYXR0ZW1wdCB0b1xuICAgIC8vIGZpbmQgdGhlIGNoYW5uZWwgSUQgb24gdGhlIHBhZ2UgKGkuZS4gdGhlIGluaXRpYWwgcGFnZSBsb2FkKS5cbiAgICBpZiAoZmlyc3RTY3JhcGUpIHtcbiAgICAgIGxldCBlbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MTGlua0VsZW1lbnQ+KCdsaW5rW3JlbD1jYW5vbmljYWxdJylcbiAgICAgIGlmIChlbGVtKSB7XG4gICAgICAgIGNoYW5uZWwgPSBnZXRDaGFubmVsRnJvbVVSTChlbGVtLmhyZWYpXG4gICAgICAgIGlmIChjaGFubmVsKSB7XG4gICAgICAgICAgcmV0dXJuIGNoYW5uZWxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAnJ1xuICB9XG5cbiAgZnVuY3Rpb24gc2NyYXBlQ2hhbm5lbE5hbWUoKSB7XG4gICAgbGV0IG5hbWUgPSBnZXRDaGFubmVsTmFtZUZyb21VUkwobG9jYXRpb24uaHJlZilcbiAgICBpZiAobmFtZSkge1xuICAgICAgcmV0dXJuIG5hbWVcbiAgICB9XG5cbiAgICBsZXQgZWxlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxBbmNob3JFbGVtZW50PihcbiAgICAgIFsneXRkLXZpZGVvLW93bmVyLXJlbmRlcmVyIGEnLCAneXRtLXNsaW0tb3duZXItcmVuZGVyZXIgYSddLmpvaW4oJywnKSxcbiAgICApXG5cbiAgICBmb3IgKGxldCBlbGVtIG9mIGVsZW1zKSB7XG4gICAgICBuYW1lID0gZ2V0Q2hhbm5lbE5hbWVGcm9tVVJMKGVsZW0uaHJlZilcbiAgICAgIGlmIChuYW1lKSB7XG4gICAgICAgIHJldHVybiBuYW1lXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGN1cnJlbnRQYXRoVHlwZSA9PT0gJ2NoYW5uZWwnIHx8IGN1cnJlbnRQYXRoVHlwZSA9PT0gJ2NoYW5uZWwtbmFtZScpIHtcbiAgICAgIGxldCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PihcbiAgICAgICAgWycjcGFnZS1oZWFkZXInLCAneXRtLWJyb3dzZSB5dC1wYWdlLWhlYWRlci12aWV3LW1vZGVsJ10uam9pbignLCcpLFxuICAgICAgKVxuICAgICAgaWYgKGhlYWRlcikge1xuICAgICAgICBsZXQgbWF0Y2hlcyA9IGhlYWRlci5pbm5lclRleHQubWF0Y2goL0BbXFx3XSsvKVxuICAgICAgICBpZiAobWF0Y2hlcyAmJiBtYXRjaGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICByZXR1cm4gbWF0Y2hlc1swXVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuICcnXG4gIH1cblxuICBmdW5jdGlvbiBzY3JhcGVJbWFnZSgpIHtcbiAgICBsZXQgZWxlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxJbWFnZUVsZW1lbnQ+KFxuICAgICAgW1xuICAgICAgICAnI2F2YXRhciBpbWcnLFxuICAgICAgICAneXQtcGFnZS1oZWFkZXItcmVuZGVyZXIgeXQtYXZhdGFyLXNoYXBlIGltZycsXG4gICAgICAgICd5dG0tc2xpbS1vd25lci1yZW5kZXJlciBhIGltZycsXG4gICAgICBdLmpvaW4oJywnKSxcbiAgICApXG5cbiAgICBmb3IgKGxldCBlbGVtIG9mIGVsZW1zKSB7XG4gICAgICBpZiAoZWxlbS5zcmMpIHtcbiAgICAgICAgcmV0dXJuIGVsZW0uc3JjXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuICcnXG4gIH1cblxuICBmdW5jdGlvbiBzY3JhcGVDaGFubmVsVVJMKCkge1xuICAgIGxldCBuYW1lID0gc2NyYXBlQ2hhbm5lbE5hbWUoKVxuICAgIGlmIChuYW1lKSB7XG4gICAgICByZXR1cm4gYCR7bG9jYXRpb24ub3JpZ2lufS9AJHtuYW1lfWBcbiAgICB9XG4gICAgaWYgKGN1cnJlbnRQYXRoVHlwZSA9PT0gJ2NoYW5uZWwnKSB7XG4gICAgICByZXR1cm4gbG9jYXRpb24uaHJlZlxuICAgIH1cbiAgICByZXR1cm4gJydcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGdldENoYW5uZWwoKSB7XG4gICAgbGV0IGNoYW5uZWwgPSBzY3JhcGVDaGFubmVsKClcbiAgICBpZiAoY2hhbm5lbCkge1xuICAgICAgcmV0dXJuIGNoYW5uZWxcbiAgICB9XG4gICAgbGV0IG5hbWUgPSBzY3JhcGVDaGFubmVsTmFtZSgpXG4gICAgaWYgKG5hbWUpIHtcbiAgICAgIGxldCBjaGFubmVsVVJMID0gYC9AJHtuYW1lfWBcbiAgICAgIGxvZy5pbmZvKGBGZXRjaGluZyBcIiR7Y2hhbm5lbFVSTH1cIiBmb3IgY2hhbm5lbCBJRCBkZXRlY3Rpb25gKVxuICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goY2hhbm5lbFVSTClcbiAgICAgIGxldCByZXNwb25zZVRleHQgPSByZXNwb25zZS5vayA/IGF3YWl0IHJlc3BvbnNlLnRleHQoKSA6ICcnXG4gICAgICBsZXQgbWF0Y2ggPSByZXNwb25zZVRleHQubWF0Y2goLzxsaW5rIGl0ZW1wcm9wPVwidXJsXCIgaHJlZj1cIihbXlwiXSspXCIvaSlcbiAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICBsb2cuaW5mbygnRm91bmQgY2hhbm5lbCBJRDonLCBtYXRjaFsxXSlcbiAgICAgICAgcmV0dXJuIGdldENoYW5uZWxGcm9tVVJMKG1hdGNoWzFdKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbG9nLmluZm8oJ1VuYWJsZSB0byBmaW5kIGNoYW5uZWwgSUQgaW4gY2hhbm5lbCBVUkwnKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBsb2cuaW5mbygnVW5hYmxlIHRvIGRldGVybWluZSBjaGFubmVsIElEJylcbiAgICB9XG4gICAgcmV0dXJuICcnXG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBnZXRVc2VyKCkge1xuICAgIGlmICghY3VycmVudFBhdGhUeXBlKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgICBsZXQgY2hhbm5lbCA9IGF3YWl0IGdldENoYW5uZWwoKVxuICAgIGlmIChjaGFubmVsKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpZDogYHlvdXR1YmUjY2hhbm5lbDoke2NoYW5uZWx9YCxcbiAgICAgICAgbmFtZTogc2NyYXBlQ2hhbm5lbE5hbWUoKSxcbiAgICAgICAgdXJsOiBzY3JhcGVDaGFubmVsVVJMKCksXG4gICAgICAgIGltYWdlVVJMOiBzY3JhcGVJbWFnZSgpLFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgZnVuY3Rpb24gaXNQYWdlTG9hZENvbXBsZXRlKCkge1xuICAgIGlmIChjdXJyZW50UGF0aFR5cGUgPT09ICdjaGFubmVsJykge1xuICAgICAgbGV0IGVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxBbmNob3JFbGVtZW50PihcbiAgICAgICAgJ2EueXRwLWNlLWNoYW5uZWwtdGl0bGUnLFxuICAgICAgKVxuICAgICAgaWYgKGVsZW0pIHtcbiAgICAgICAgcmV0dXJuIGFic29sdXRlVVJMKGVsZW0uaHJlZikgPT09IGxvY2F0aW9uLmhyZWZcbiAgICAgIH1cbiAgICAgIHJldHVybiBCb29sZWFuKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwYWdlLWhlYWRlcicpKVxuICAgIH1cblxuICAgIGlmIChjdXJyZW50UGF0aFR5cGUgPT09ICdjaGFubmVsLW5hbWUnKSB7XG4gICAgICBsZXQgZWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEFuY2hvckVsZW1lbnQ+KFxuICAgICAgICAneXRkLXZpZGVvLW93bmVyLXJlbmRlcmVyIGEnLFxuICAgICAgKVxuICAgICAgaWYgKGVsZW0gJiYgYWJzb2x1dGVVUkwoZWxlbS5ocmVmKSA9PT0gbG9jYXRpb24uaHJlZikge1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgICAgbGV0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxGb3JtRWxlbWVudD4oJyNmb3JtJylcbiAgICAgIGxldCBuYW1lID0gZ2V0Q2hhbm5lbE5hbWVGcm9tVVJMKGxvY2F0aW9uLmhyZWYpXG4gICAgICByZXR1cm4gQm9vbGVhbihmb3JtICYmIHVybFBhdGgoZm9ybS5hY3Rpb24pLnN0YXJ0c1dpdGgoYC9AJHtuYW1lfWApKVxuICAgIH1cblxuICAgIGlmIChjdXJyZW50UGF0aFR5cGUgPT09ICd2aWRlbycpIHtcbiAgICAgIGxldCBpZCA9IGdldFZpZGVvSWRGcm9tVVJMKGxvY2F0aW9uLmhyZWYpXG4gICAgICBsZXQgZWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3l0ZC13YXRjaC1tZXRhZGF0YScpXG4gICAgICByZXR1cm4gQm9vbGVhbihlbGVtICYmIGVsZW0uZ2V0QXR0cmlidXRlKCd2aWRlby1pZCcpID09PSBpZClcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgcmV0dXJuIGFzeW5jICgpID0+IHtcbiAgICBjdXJyZW50UGF0aFR5cGUgPSBnZXRQYXRoVHlwZSgpXG4gICAgbG9nLmluZm8oYEN1cnJlbnQgcGF0aCB0eXBlOiAke2N1cnJlbnRQYXRoVHlwZX0gKCR7bG9jYXRpb24ucGF0aG5hbWV9KWApXG5cbiAgICBhd2FpdCBwb2xsRm9yKGlzUGFnZUxvYWRDb21wbGV0ZSwge1xuICAgICAgbmFtZTogJ2xvYWQgY29tcGxldGUnLFxuICAgICAgaW50ZXJ2YWw6IDUwMCxcbiAgICAgIHRpbWVvdXQ6IDYwMDAsXG4gICAgfSlcblxuICAgIHJldHVybiBhd2FpdCBnZXRVc2VyKClcbiAgfVxufSlcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==