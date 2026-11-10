/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!************************************************************************************!*\
  !*** ./components/brave_rewards/resources/creator_detection/reddit.ts + 2 modules ***!
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

;// ./components/brave_rewards/resources/creator_detection/reddit.ts
// Copyright (c) 2024 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.


initializeDetector(() => {
    function getCreatorFromResponse(screenName, response) {
        if (!response || response.kind !== 't2') {
            log.info('Unexpected "kind" value');
            return null;
        }
        const { data } = response;
        if (!data) {
            log.info('Missing "data" property');
            return null;
        }
        if (!data.id || typeof data.id !== 'string') {
            log.info('Missing "id" property');
            return null;
        }
        return {
            id: `reddit#channel:${data.id}`,
            name: screenName,
            url: `https://reddit.com/user/${screenName}/`,
            imageURL: String(data.icon_img || ''),
        };
    }
    let currentCreator = null;
    async function fetchUserData(screenName) {
        if (!screenName) {
            return null;
        }
        if (currentCreator && currentCreator.name === screenName) {
            return currentCreator;
        }
        log.info('Fetching profile data for', screenName);
        const response = await fetch(`/user/${screenName}/about.json`);
        if (!response.ok) {
            log.error('Unable to fetch profile data');
            return null;
        }
        let responseJSON;
        try {
            responseJSON = await response.json();
        }
        catch (err) {
            log.error('Error parsing profile data', err);
            return null;
        }
        currentCreator = getCreatorFromResponse(screenName, responseJSON);
        if (!currentCreator) {
            log.info('Profile data response', responseJSON);
        }
        return currentCreator;
    }
    function getScreenNameFromPath(path) {
        const match = path.match(/^\/user\/([^\/]+)/i);
        return match ? match[1] : '';
    }
    return async () => {
        const screenName = getScreenNameFromPath(location.pathname);
        if (!screenName) {
            log.info('No screen name for the current path');
            return null;
        }
        return await fetchUserData(screenName);
    };
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TUFBTSxhQUFhLENBQUMsVUFBVSxDQUFDO0lBQ3hDLENBQUM7QUFDSCxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9icmF2ZS1jb3JlLy4vY29tcG9uZW50cy9icmF2ZV9yZXdhcmRzL3Jlc291cmNlcy9jcmVhdG9yX2RldGVjdGlvbi9oZWxwZXJzLnRzIiwid2VicGFjazovL2JyYXZlLWNvcmUvLi9jb21wb25lbnRzL2JyYXZlX3Jld2FyZHMvcmVzb3VyY2VzL2NyZWF0b3JfZGV0ZWN0aW9uL2NyZWF0b3JfZGV0ZWN0aW9uLnRzIiwid2VicGFjazovL2JyYXZlLWNvcmUvLi9jb21wb25lbnRzL2JyYXZlX3Jld2FyZHMvcmVzb3VyY2VzL2NyZWF0b3JfZGV0ZWN0aW9uL3JlZGRpdC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjQgVGhlIEJyYXZlIEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4vLyBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIGZpbGUsXG4vLyBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cHM6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy5cblxuZXhwb3J0IGNvbnN0IGxvZyA9IG5ldyAoY2xhc3Mge1xuICBpbmZvKC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgY29uc29sZS5kZWJ1ZygnW1Jld2FyZHNdJywgLi4uYXJncylcbiAgfVxuXG4gIGVycm9yKC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgY29uc29sZS5lcnJvcignW1Jld2FyZHNdJywgLi4uYXJncylcbiAgfVxufSkoKVxuXG5pbnRlcmZhY2UgUG9sbE9wdGlvbnMge1xuICBuYW1lOiBzdHJpbmdcbiAgdGltZW91dDogbnVtYmVyXG4gIGludGVydmFsOiBudW1iZXJcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHBvbGxGb3I8VD4oZm46ICgpID0+IFQgfCBQcm9taXNlPFQ+LCBvcHRzOiBQb2xsT3B0aW9ucykge1xuICBjb25zdCBzdGFydFRpbWUgPSBEYXRlLm5vdygpXG4gIHdoaWxlIChEYXRlLm5vdygpIC0gc3RhcnRUaW1lIDwgb3B0cy50aW1lb3V0KSB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZm4oKVxuICAgIGlmIChyZXN1bHQpIHtcbiAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG4gICAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgb3B0cy5pbnRlcnZhbCkpXG4gIH1cbiAgbG9nLmluZm8oYFRpbWVkIG91dCB3YWl0aW5nIGZvciAke29wdHMubmFtZX1gKVxuICByZXR1cm4gbnVsbFxufVxuXG5leHBvcnQgZnVuY3Rpb24gdGhyb3R0bGU8VD4oZm46ICgpID0+IFByb21pc2U8VD4gfCBUKSB7XG4gIGxldCBjdXJyZW50OiBQcm9taXNlPFQ+IHwgbnVsbCA9IG51bGxcbiAgbGV0IG5leHQ6IFByb21pc2U8VD4gfCBudWxsID0gbnVsbFxuXG4gIGxldCBzdGFydCA9ICgpID0+IHtcbiAgICBjdXJyZW50ID0gUHJvbWlzZS5yZXNvbHZlKGZuKCkpLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgY3VycmVudCA9IG51bGxcbiAgICB9KVxuICAgIHJldHVybiBjdXJyZW50XG4gIH1cblxuICByZXR1cm4gKCkgPT4ge1xuICAgIGlmICghY3VycmVudCkge1xuICAgICAgcmV0dXJuIHN0YXJ0KClcbiAgICB9XG4gICAgaWYgKCFuZXh0KSB7XG4gICAgICBuZXh0ID0gY3VycmVudFxuICAgICAgICAuZmluYWxseSgoKSA9PiB7XG4gICAgICAgICAgbmV4dCA9IG51bGxcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oc3RhcnQpXG4gICAgfVxuICAgIHJldHVybiBuZXh0XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVybFBhdGgodXJsOiBzdHJpbmcpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gbmV3IFVSTCh1cmwsIGxvY2F0aW9uLmhyZWYpLnBhdGhuYW1lXG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiAnJ1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhYnNvbHV0ZVVSTCh1cmw6IHN0cmluZykge1xuICB0cnkge1xuICAgIHJldHVybiBuZXcgVVJMKHVybCwgbG9jYXRpb24uaHJlZikudG9TdHJpbmcoKVxuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gJydcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UGF0aENvbXBvbmVudHMocGF0aDogc3RyaW5nKSB7XG4gIHJldHVybiBwYXRoXG4gICAgLnNwbGl0KCcvJylcbiAgICAuZmlsdGVyKChwYXJ0KSA9PiBwYXJ0KVxuICAgIC5tYXAoKHBhcnQpID0+IHBhcnQudG9Mb2NhbGVMb3dlckNhc2UoKSlcbn1cbiIsIi8vIENvcHlyaWdodCAoYykgMjAyNCBUaGUgQnJhdmUgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbi8vIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXMgZmlsZSxcbi8vIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwczovL21vemlsbGEub3JnL01QTC8yLjAvLlxuXG5pbXBvcnQgeyBsb2csIHRocm90dGxlIH0gZnJvbSAnLi9oZWxwZXJzJ1xuXG5leHBvcnQgaW50ZXJmYWNlIENyZWF0b3JJbmZvIHtcbiAgaWQ6IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbiAgdXJsOiBzdHJpbmdcbiAgaW1hZ2VVUkw6IHN0cmluZ1xufVxuXG50eXBlIERldGVjdGlvbkhhbmRsZXIgPSAoKSA9PiBQcm9taXNlPENyZWF0b3JJbmZvIHwgbnVsbD5cblxuZnVuY3Rpb24gc2V0UGFnZURldGVjdGlvbkhhbmRsZXIoZGV0ZWN0Q3JlYXRvcjogRGV0ZWN0aW9uSGFuZGxlcikge1xuICBsZXQgeyBicmF2ZVJld2FyZHMgfSA9IHNlbGYgYXMgYW55XG4gIGlmICghYnJhdmVSZXdhcmRzKSB7XG4gICAgYnJhdmVSZXdhcmRzID0ge31cbiAgICBPYmplY3QuYXNzaWduKHNlbGYsIHsgYnJhdmVSZXdhcmRzIH0pXG4gIH1cbiAgT2JqZWN0LmFzc2lnbihicmF2ZVJld2FyZHMsIHsgZGV0ZWN0Q3JlYXRvciB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGl6ZURldGVjdG9yKGluaXRpYWxpemVyOiAoKSA9PiBEZXRlY3Rpb25IYW5kbGVyKSB7XG4gIGNvbnN0IGRldGVjdENyZWF0b3IgPSB0aHJvdHRsZShpbml0aWFsaXplcigpKVxuICBsZXQgY3VycmVudFVSTCA9ICcnXG5cbiAgc2V0UGFnZURldGVjdGlvbkhhbmRsZXIoYXN5bmMgKCkgPT4ge1xuICAgIGlmIChsb2NhdGlvbi5ocmVmID09PSBjdXJyZW50VVJMKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIGN1cnJlbnRVUkwgPSBsb2NhdGlvbi5ocmVmXG5cbiAgICBsZXQgY3JlYXRvcjogQ3JlYXRvckluZm8gfCBudWxsID0gbnVsbFxuICAgIHRyeSB7XG4gICAgICBjcmVhdG9yID0gYXdhaXQgZGV0ZWN0Q3JlYXRvcigpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBsb2cuZXJyb3IoJ0Vycm9yIGRldGVjdGluZyBjcmVhdG9yJywgZXJyKVxuICAgIH1cblxuICAgIGlmIChjcmVhdG9yKSB7XG4gICAgICBsb2cuaW5mbygnRm91bmQgY3JlYXRvcjonLCBjcmVhdG9yKVxuICAgIH0gZWxzZSB7XG4gICAgICBsb2cuaW5mbygnTm8gY3JlYXRvciBmb3VuZCBmb3IgY3VycmVudCBVUkwnKVxuICAgIH1cblxuICAgIHJldHVybiBjcmVhdG9yXG4gIH0pXG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjQgVGhlIEJyYXZlIEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4vLyBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIGZpbGUsXG4vLyBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cHM6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy5cblxuaW1wb3J0IHsgQ3JlYXRvckluZm8sIGluaXRpYWxpemVEZXRlY3RvciB9IGZyb20gJy4vY3JlYXRvcl9kZXRlY3Rpb24nXG5pbXBvcnQgeyBsb2cgfSBmcm9tICcuL2hlbHBlcnMnXG5cbmluaXRpYWxpemVEZXRlY3RvcigoKSA9PiB7XG4gIGZ1bmN0aW9uIGdldENyZWF0b3JGcm9tUmVzcG9uc2Uoc2NyZWVuTmFtZTogc3RyaW5nLCByZXNwb25zZTogYW55KTogYW55IHtcbiAgICBpZiAoIXJlc3BvbnNlIHx8IHJlc3BvbnNlLmtpbmQgIT09ICd0MicpIHtcbiAgICAgIGxvZy5pbmZvKCdVbmV4cGVjdGVkIFwia2luZFwiIHZhbHVlJylcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICAgIGNvbnN0IHsgZGF0YSB9ID0gcmVzcG9uc2VcbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgIGxvZy5pbmZvKCdNaXNzaW5nIFwiZGF0YVwiIHByb3BlcnR5JylcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICAgIGlmICghZGF0YS5pZCB8fCB0eXBlb2YgZGF0YS5pZCAhPT0gJ3N0cmluZycpIHtcbiAgICAgIGxvZy5pbmZvKCdNaXNzaW5nIFwiaWRcIiBwcm9wZXJ0eScpXG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgaWQ6IGByZWRkaXQjY2hhbm5lbDoke2RhdGEuaWR9YCxcbiAgICAgIG5hbWU6IHNjcmVlbk5hbWUsXG4gICAgICB1cmw6IGBodHRwczovL3JlZGRpdC5jb20vdXNlci8ke3NjcmVlbk5hbWV9L2AsXG4gICAgICBpbWFnZVVSTDogU3RyaW5nKGRhdGEuaWNvbl9pbWcgfHwgJycpLFxuICAgIH1cbiAgfVxuXG4gIGxldCBjdXJyZW50Q3JlYXRvcjogQ3JlYXRvckluZm8gfCBudWxsID0gbnVsbFxuXG4gIGFzeW5jIGZ1bmN0aW9uIGZldGNoVXNlckRhdGEoc2NyZWVuTmFtZTogc3RyaW5nKSB7XG4gICAgaWYgKCFzY3JlZW5OYW1lKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIGlmIChjdXJyZW50Q3JlYXRvciAmJiBjdXJyZW50Q3JlYXRvci5uYW1lID09PSBzY3JlZW5OYW1lKSB7XG4gICAgICByZXR1cm4gY3VycmVudENyZWF0b3JcbiAgICB9XG5cbiAgICBsb2cuaW5mbygnRmV0Y2hpbmcgcHJvZmlsZSBkYXRhIGZvcicsIHNjcmVlbk5hbWUpXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgL3VzZXIvJHtzY3JlZW5OYW1lfS9hYm91dC5qc29uYClcbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICBsb2cuZXJyb3IoJ1VuYWJsZSB0byBmZXRjaCBwcm9maWxlIGRhdGEnKVxuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICBsZXQgcmVzcG9uc2VKU09OOiBhbnlcbiAgICB0cnkge1xuICAgICAgcmVzcG9uc2VKU09OID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBsb2cuZXJyb3IoJ0Vycm9yIHBhcnNpbmcgcHJvZmlsZSBkYXRhJywgZXJyKVxuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICBjdXJyZW50Q3JlYXRvciA9IGdldENyZWF0b3JGcm9tUmVzcG9uc2Uoc2NyZWVuTmFtZSwgcmVzcG9uc2VKU09OKVxuICAgIGlmICghY3VycmVudENyZWF0b3IpIHtcbiAgICAgIGxvZy5pbmZvKCdQcm9maWxlIGRhdGEgcmVzcG9uc2UnLCByZXNwb25zZUpTT04pXG4gICAgfVxuXG4gICAgcmV0dXJuIGN1cnJlbnRDcmVhdG9yXG4gIH1cblxuICBmdW5jdGlvbiBnZXRTY3JlZW5OYW1lRnJvbVBhdGgocGF0aDogc3RyaW5nKSB7XG4gICAgY29uc3QgbWF0Y2ggPSBwYXRoLm1hdGNoKC9eXFwvdXNlclxcLyhbXlxcL10rKS9pKVxuICAgIHJldHVybiBtYXRjaCA/IG1hdGNoWzFdIDogJydcbiAgfVxuXG4gIHJldHVybiBhc3luYyAoKSA9PiB7XG4gICAgY29uc3Qgc2NyZWVuTmFtZSA9IGdldFNjcmVlbk5hbWVGcm9tUGF0aChsb2NhdGlvbi5wYXRobmFtZSlcbiAgICBpZiAoIXNjcmVlbk5hbWUpIHtcbiAgICAgIGxvZy5pbmZvKCdObyBzY3JlZW4gbmFtZSBmb3IgdGhlIGN1cnJlbnQgcGF0aCcpXG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgICByZXR1cm4gYXdhaXQgZmV0Y2hVc2VyRGF0YShzY3JlZW5OYW1lKVxuICB9XG59KVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9