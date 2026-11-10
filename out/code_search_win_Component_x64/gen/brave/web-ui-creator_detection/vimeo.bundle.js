/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!***********************************************************************************!*\
  !*** ./components/brave_rewards/resources/creator_detection/vimeo.ts + 2 modules ***!
  \***********************************************************************************/

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

;// ./components/brave_rewards/resources/creator_detection/vimeo.ts
// Copyright (c) 2024 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.


initializeDetector(() => {
    function getIdFromPerson(person) {
        if (!person) {
            return '';
        }
        if (person.identifier) {
            return String(person.identifier);
        }
        const { potentialAction } = person;
        if (!potentialAction) {
            log.error('Missing "potentialAction" in Person');
            return '';
        }
        const { target } = potentialAction;
        if (!target || typeof target !== 'string') {
            log.error('Missing "potentialAction.target" in Person');
            return '';
        }
        const match = target.match(/\/users\/([^\/]+)/i);
        if (!match) {
            log.error('Unable to read ID from Person');
            return '';
        }
        return match[1];
    }
    function getUserFromPerson(person) {
        const id = getIdFromPerson(person);
        if (!id) {
            return null;
        }
        return {
            id: `vimeo#channel:${id}`,
            name: String(person.name || ''),
            url: absoluteURL(person.url || location.href),
            imageURL: String(person.image || ''),
        };
    }
    function getUserFromVideoData(video) {
        if (!video) {
            return null;
        }
        const { author } = video;
        if (!author) {
            log.error('Missing "author" in VideoObject');
            return null;
        }
        return getUserFromPerson(author);
    }
    function getUserFromMetadata(json) {
        let data;
        try {
            data = JSON.parse(json);
        }
        catch (err) {
            log.error('Invalid JSON in metadata script');
            return null;
        }
        if (!Array.isArray(data)) {
            log.error('Invalid metadata object: expected an array');
            return null;
        }
        for (const item of data) {
            switch (item['@type']) {
                case 'Person': {
                    const user = getUserFromPerson(item);
                    if (user) {
                        return user;
                    }
                }
                case 'VideoObject': {
                    const user = getUserFromVideoData(item);
                    if (user) {
                        return user;
                    }
                }
            }
        }
        log.info('Unable to find user in metadata scripts');
        return null;
    }
    const metadataScriptSelector = 'script[type="application/ld+json"]';
    function parseMetadataScript() {
        const elems = document.querySelectorAll(metadataScriptSelector);
        for (const elem of elems) {
            const user = getUserFromMetadata(elem.innerText);
            if (user) {
                return user;
            }
        }
        return null;
    }
    function hasMetadataScript() {
        return Boolean(document.querySelector(metadataScriptSelector));
    }
    return async () => {
        await pollFor(hasMetadataScript, {
            name: 'metadata',
            interval: 500,
            timeout: 6000,
        });
        return parseMetadataScript();
    };
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bXBvbmVudHMvYnJhdmVfcmV3YXJkcy9yZXNvdXJjZXMvY3JlYXRvcl9kZXRlY3Rpb24vaGVscGVycy50cyIsIndlYnBhY2s6Ly9icmF2ZS1jb3JlLy4vY29tcG9uZW50cy9icmF2ZV9yZXdhcmRzL3Jlc291cmNlcy9jcmVhdG9yX2RldGVjdGlvbi9jcmVhdG9yX2RldGVjdGlvbi50cyIsIndlYnBhY2s6Ly9icmF2ZS1jb3JlLy4vY29tcG9uZW50cy9icmF2ZV9yZXdhcmRzL3Jlc291cmNlcy9jcmVhdG9yX2RldGVjdGlvbi92aW1lby50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjQgVGhlIEJyYXZlIEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4vLyBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIGZpbGUsXG4vLyBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cHM6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy5cblxuZXhwb3J0IGNvbnN0IGxvZyA9IG5ldyAoY2xhc3Mge1xuICBpbmZvKC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgY29uc29sZS5kZWJ1ZygnW1Jld2FyZHNdJywgLi4uYXJncylcbiAgfVxuXG4gIGVycm9yKC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgY29uc29sZS5lcnJvcignW1Jld2FyZHNdJywgLi4uYXJncylcbiAgfVxufSkoKVxuXG5pbnRlcmZhY2UgUG9sbE9wdGlvbnMge1xuICBuYW1lOiBzdHJpbmdcbiAgdGltZW91dDogbnVtYmVyXG4gIGludGVydmFsOiBudW1iZXJcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHBvbGxGb3I8VD4oZm46ICgpID0+IFQgfCBQcm9taXNlPFQ+LCBvcHRzOiBQb2xsT3B0aW9ucykge1xuICBjb25zdCBzdGFydFRpbWUgPSBEYXRlLm5vdygpXG4gIHdoaWxlIChEYXRlLm5vdygpIC0gc3RhcnRUaW1lIDwgb3B0cy50aW1lb3V0KSB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZm4oKVxuICAgIGlmIChyZXN1bHQpIHtcbiAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG4gICAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgb3B0cy5pbnRlcnZhbCkpXG4gIH1cbiAgbG9nLmluZm8oYFRpbWVkIG91dCB3YWl0aW5nIGZvciAke29wdHMubmFtZX1gKVxuICByZXR1cm4gbnVsbFxufVxuXG5leHBvcnQgZnVuY3Rpb24gdGhyb3R0bGU8VD4oZm46ICgpID0+IFByb21pc2U8VD4gfCBUKSB7XG4gIGxldCBjdXJyZW50OiBQcm9taXNlPFQ+IHwgbnVsbCA9IG51bGxcbiAgbGV0IG5leHQ6IFByb21pc2U8VD4gfCBudWxsID0gbnVsbFxuXG4gIGxldCBzdGFydCA9ICgpID0+IHtcbiAgICBjdXJyZW50ID0gUHJvbWlzZS5yZXNvbHZlKGZuKCkpLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgY3VycmVudCA9IG51bGxcbiAgICB9KVxuICAgIHJldHVybiBjdXJyZW50XG4gIH1cblxuICByZXR1cm4gKCkgPT4ge1xuICAgIGlmICghY3VycmVudCkge1xuICAgICAgcmV0dXJuIHN0YXJ0KClcbiAgICB9XG4gICAgaWYgKCFuZXh0KSB7XG4gICAgICBuZXh0ID0gY3VycmVudFxuICAgICAgICAuZmluYWxseSgoKSA9PiB7XG4gICAgICAgICAgbmV4dCA9IG51bGxcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oc3RhcnQpXG4gICAgfVxuICAgIHJldHVybiBuZXh0XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVybFBhdGgodXJsOiBzdHJpbmcpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gbmV3IFVSTCh1cmwsIGxvY2F0aW9uLmhyZWYpLnBhdGhuYW1lXG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiAnJ1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhYnNvbHV0ZVVSTCh1cmw6IHN0cmluZykge1xuICB0cnkge1xuICAgIHJldHVybiBuZXcgVVJMKHVybCwgbG9jYXRpb24uaHJlZikudG9TdHJpbmcoKVxuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gJydcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UGF0aENvbXBvbmVudHMocGF0aDogc3RyaW5nKSB7XG4gIHJldHVybiBwYXRoXG4gICAgLnNwbGl0KCcvJylcbiAgICAuZmlsdGVyKChwYXJ0KSA9PiBwYXJ0KVxuICAgIC5tYXAoKHBhcnQpID0+IHBhcnQudG9Mb2NhbGVMb3dlckNhc2UoKSlcbn1cbiIsIi8vIENvcHlyaWdodCAoYykgMjAyNCBUaGUgQnJhdmUgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbi8vIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXMgZmlsZSxcbi8vIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwczovL21vemlsbGEub3JnL01QTC8yLjAvLlxuXG5pbXBvcnQgeyBsb2csIHRocm90dGxlIH0gZnJvbSAnLi9oZWxwZXJzJ1xuXG5leHBvcnQgaW50ZXJmYWNlIENyZWF0b3JJbmZvIHtcbiAgaWQ6IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbiAgdXJsOiBzdHJpbmdcbiAgaW1hZ2VVUkw6IHN0cmluZ1xufVxuXG50eXBlIERldGVjdGlvbkhhbmRsZXIgPSAoKSA9PiBQcm9taXNlPENyZWF0b3JJbmZvIHwgbnVsbD5cblxuZnVuY3Rpb24gc2V0UGFnZURldGVjdGlvbkhhbmRsZXIoZGV0ZWN0Q3JlYXRvcjogRGV0ZWN0aW9uSGFuZGxlcikge1xuICBsZXQgeyBicmF2ZVJld2FyZHMgfSA9IHNlbGYgYXMgYW55XG4gIGlmICghYnJhdmVSZXdhcmRzKSB7XG4gICAgYnJhdmVSZXdhcmRzID0ge31cbiAgICBPYmplY3QuYXNzaWduKHNlbGYsIHsgYnJhdmVSZXdhcmRzIH0pXG4gIH1cbiAgT2JqZWN0LmFzc2lnbihicmF2ZVJld2FyZHMsIHsgZGV0ZWN0Q3JlYXRvciB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGl6ZURldGVjdG9yKGluaXRpYWxpemVyOiAoKSA9PiBEZXRlY3Rpb25IYW5kbGVyKSB7XG4gIGNvbnN0IGRldGVjdENyZWF0b3IgPSB0aHJvdHRsZShpbml0aWFsaXplcigpKVxuICBsZXQgY3VycmVudFVSTCA9ICcnXG5cbiAgc2V0UGFnZURldGVjdGlvbkhhbmRsZXIoYXN5bmMgKCkgPT4ge1xuICAgIGlmIChsb2NhdGlvbi5ocmVmID09PSBjdXJyZW50VVJMKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIGN1cnJlbnRVUkwgPSBsb2NhdGlvbi5ocmVmXG5cbiAgICBsZXQgY3JlYXRvcjogQ3JlYXRvckluZm8gfCBudWxsID0gbnVsbFxuICAgIHRyeSB7XG4gICAgICBjcmVhdG9yID0gYXdhaXQgZGV0ZWN0Q3JlYXRvcigpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBsb2cuZXJyb3IoJ0Vycm9yIGRldGVjdGluZyBjcmVhdG9yJywgZXJyKVxuICAgIH1cblxuICAgIGlmIChjcmVhdG9yKSB7XG4gICAgICBsb2cuaW5mbygnRm91bmQgY3JlYXRvcjonLCBjcmVhdG9yKVxuICAgIH0gZWxzZSB7XG4gICAgICBsb2cuaW5mbygnTm8gY3JlYXRvciBmb3VuZCBmb3IgY3VycmVudCBVUkwnKVxuICAgIH1cblxuICAgIHJldHVybiBjcmVhdG9yXG4gIH0pXG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjQgVGhlIEJyYXZlIEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4vLyBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIGZpbGUsXG4vLyBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cHM6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy5cblxuaW1wb3J0IHsgaW5pdGlhbGl6ZURldGVjdG9yIH0gZnJvbSAnLi9jcmVhdG9yX2RldGVjdGlvbidcbmltcG9ydCB7IGxvZywgcG9sbEZvciwgYWJzb2x1dGVVUkwgfSBmcm9tICcuL2hlbHBlcnMnXG5cbmluaXRpYWxpemVEZXRlY3RvcigoKSA9PiB7XG4gIGZ1bmN0aW9uIGdldElkRnJvbVBlcnNvbihwZXJzb246IGFueSkge1xuICAgIGlmICghcGVyc29uKSB7XG4gICAgICByZXR1cm4gJydcbiAgICB9XG4gICAgaWYgKHBlcnNvbi5pZGVudGlmaWVyKSB7XG4gICAgICByZXR1cm4gU3RyaW5nKHBlcnNvbi5pZGVudGlmaWVyKVxuICAgIH1cbiAgICBjb25zdCB7IHBvdGVudGlhbEFjdGlvbiB9ID0gcGVyc29uXG4gICAgaWYgKCFwb3RlbnRpYWxBY3Rpb24pIHtcbiAgICAgIGxvZy5lcnJvcignTWlzc2luZyBcInBvdGVudGlhbEFjdGlvblwiIGluIFBlcnNvbicpXG4gICAgICByZXR1cm4gJydcbiAgICB9XG4gICAgY29uc3QgeyB0YXJnZXQgfSA9IHBvdGVudGlhbEFjdGlvblxuICAgIGlmICghdGFyZ2V0IHx8IHR5cGVvZiB0YXJnZXQgIT09ICdzdHJpbmcnKSB7XG4gICAgICBsb2cuZXJyb3IoJ01pc3NpbmcgXCJwb3RlbnRpYWxBY3Rpb24udGFyZ2V0XCIgaW4gUGVyc29uJylcbiAgICAgIHJldHVybiAnJ1xuICAgIH1cbiAgICBjb25zdCBtYXRjaCA9IHRhcmdldC5tYXRjaCgvXFwvdXNlcnNcXC8oW15cXC9dKykvaSlcbiAgICBpZiAoIW1hdGNoKSB7XG4gICAgICBsb2cuZXJyb3IoJ1VuYWJsZSB0byByZWFkIElEIGZyb20gUGVyc29uJylcbiAgICAgIHJldHVybiAnJ1xuICAgIH1cbiAgICByZXR1cm4gbWF0Y2hbMV1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFVzZXJGcm9tUGVyc29uKHBlcnNvbjogYW55KSB7XG4gICAgY29uc3QgaWQgPSBnZXRJZEZyb21QZXJzb24ocGVyc29uKVxuICAgIGlmICghaWQpIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBpZDogYHZpbWVvI2NoYW5uZWw6JHtpZH1gLFxuICAgICAgbmFtZTogU3RyaW5nKHBlcnNvbi5uYW1lIHx8ICcnKSxcbiAgICAgIHVybDogYWJzb2x1dGVVUkwocGVyc29uLnVybCB8fCBsb2NhdGlvbi5ocmVmKSxcbiAgICAgIGltYWdlVVJMOiBTdHJpbmcocGVyc29uLmltYWdlIHx8ICcnKSxcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZXRVc2VyRnJvbVZpZGVvRGF0YSh2aWRlbzogYW55KSB7XG4gICAgaWYgKCF2aWRlbykge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gICAgY29uc3QgeyBhdXRob3IgfSA9IHZpZGVvXG4gICAgaWYgKCFhdXRob3IpIHtcbiAgICAgIGxvZy5lcnJvcignTWlzc2luZyBcImF1dGhvclwiIGluIFZpZGVvT2JqZWN0JylcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICAgIHJldHVybiBnZXRVc2VyRnJvbVBlcnNvbihhdXRob3IpXG4gIH1cblxuICBmdW5jdGlvbiBnZXRVc2VyRnJvbU1ldGFkYXRhKGpzb246IHN0cmluZykge1xuICAgIGxldCBkYXRhOiBhbnlcbiAgICB0cnkge1xuICAgICAgZGF0YSA9IEpTT04ucGFyc2UoanNvbilcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGxvZy5lcnJvcignSW52YWxpZCBKU09OIGluIG1ldGFkYXRhIHNjcmlwdCcpXG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoZGF0YSkpIHtcbiAgICAgIGxvZy5lcnJvcignSW52YWxpZCBtZXRhZGF0YSBvYmplY3Q6IGV4cGVjdGVkIGFuIGFycmF5JylcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICAgIGZvciAoY29uc3QgaXRlbSBvZiBkYXRhKSB7XG4gICAgICBzd2l0Y2ggKGl0ZW1bJ0B0eXBlJ10pIHtcbiAgICAgICAgY2FzZSAnUGVyc29uJzoge1xuICAgICAgICAgIGNvbnN0IHVzZXIgPSBnZXRVc2VyRnJvbVBlcnNvbihpdGVtKVxuICAgICAgICAgIGlmICh1c2VyKSB7XG4gICAgICAgICAgICByZXR1cm4gdXNlclxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXNlICdWaWRlb09iamVjdCc6IHtcbiAgICAgICAgICBjb25zdCB1c2VyID0gZ2V0VXNlckZyb21WaWRlb0RhdGEoaXRlbSlcbiAgICAgICAgICBpZiAodXNlcikge1xuICAgICAgICAgICAgcmV0dXJuIHVzZXJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgbG9nLmluZm8oJ1VuYWJsZSB0byBmaW5kIHVzZXIgaW4gbWV0YWRhdGEgc2NyaXB0cycpXG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIGNvbnN0IG1ldGFkYXRhU2NyaXB0U2VsZWN0b3IgPSAnc2NyaXB0W3R5cGU9XCJhcHBsaWNhdGlvbi9sZCtqc29uXCJdJ1xuXG4gIGZ1bmN0aW9uIHBhcnNlTWV0YWRhdGFTY3JpcHQoKSB7XG4gICAgY29uc3QgZWxlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihtZXRhZGF0YVNjcmlwdFNlbGVjdG9yKVxuICAgIGZvciAoY29uc3QgZWxlbSBvZiBlbGVtcykge1xuICAgICAgY29uc3QgdXNlciA9IGdldFVzZXJGcm9tTWV0YWRhdGEoZWxlbS5pbm5lclRleHQpXG4gICAgICBpZiAodXNlcikge1xuICAgICAgICByZXR1cm4gdXNlclxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgZnVuY3Rpb24gaGFzTWV0YWRhdGFTY3JpcHQoKSB7XG4gICAgcmV0dXJuIEJvb2xlYW4oZG9jdW1lbnQucXVlcnlTZWxlY3RvcihtZXRhZGF0YVNjcmlwdFNlbGVjdG9yKSlcbiAgfVxuXG4gIHJldHVybiBhc3luYyAoKSA9PiB7XG4gICAgYXdhaXQgcG9sbEZvcihoYXNNZXRhZGF0YVNjcmlwdCwge1xuICAgICAgbmFtZTogJ21ldGFkYXRhJyxcbiAgICAgIGludGVydmFsOiA1MDAsXG4gICAgICB0aW1lb3V0OiA2MDAwLFxuICAgIH0pXG5cbiAgICByZXR1cm4gcGFyc2VNZXRhZGF0YVNjcmlwdCgpXG4gIH1cbn0pXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=