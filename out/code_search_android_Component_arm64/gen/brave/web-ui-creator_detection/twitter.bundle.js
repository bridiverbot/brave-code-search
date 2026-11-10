/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!*************************************************************************************!*\
  !*** ./components/brave_rewards/resources/creator_detection/twitter.ts + 2 modules ***!
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

;// ./components/brave_rewards/resources/creator_detection/twitter.ts
// Copyright (c) 2024 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.


function getUserFromAppState(eventName, screenName) {
    let messages = [];
    function getElementStore(elem) {
        if (!elem) {
            return null;
        }
        for (const name of Object.getOwnPropertyNames(elem)) {
            if (name.startsWith('__reactProps$')) {
                let store = null;
                try {
                    store = elem[name].children.props.store;
                }
                catch { }
                if (store && typeof store.getState === 'function') {
                    return store;
                }
            }
        }
        return null;
    }
    function findStore(elem, depth = 0) {
        if (!elem) {
            return null;
        }
        let store = getElementStore(elem);
        if (store) {
            return store;
        }
        if (depth === 4) {
            return null;
        }
        for (let child of elem.children) {
            store = findStore(child, depth + 1);
            if (store) {
                return store;
            }
        }
        return null;
    }
    function screenNamesMatch(name1, name2) {
        if (typeof name1 === 'string' && typeof name2 === 'string') {
            return name1.toLocaleLowerCase() === name2.toLocaleLowerCase();
        }
        return false;
    }
    function getUserFromState(state, screenName) {
        const userEntities = state.entities.users.entities;
        for (let [key, value] of Object.entries(userEntities)) {
            if (screenNamesMatch(value.screen_name, screenName)) {
                return {
                    id: `twitter#channel:${key}`,
                    name: screenName,
                    url: `${location.origin}/${screenName}`,
                    imageURL: String(value.profile_image_url_https || ''),
                };
            }
        }
        messages = ['Screen name not found in state'];
        return null;
    }
    function getUserByScreenName() {
        const store = findStore(document.getElementById('react-root'));
        if (!store) {
            messages = ['State store could not be found'];
            return null;
        }
        const state = store.getState();
        try {
            return getUserFromState(state, screenName);
        }
        catch (e) {
            console.error(e);
            messages = ['Error attempting to get user state', state];
        }
        return null;
    }
    document.dispatchEvent(new CustomEvent(eventName, {
        detail: { user: getUserByScreenName(), messages },
    }));
}
initializeDetector(() => {
    async function getUserFromState(screenName) {
        return new Promise((resolve) => {
            const eventName = 'brave-rewards-user-data';
            const listener = (event) => {
                document.removeEventListener(eventName, listener);
                const { user, messages } = event.detail || {};
                resolve(user || null);
                if (Array.isArray(messages) && messages.length > 0) {
                    log.info(...messages);
                }
            };
            document.addEventListener(eventName, listener);
            const script = document.createElement('script');
            script.textContent = `(${getUserFromAppState})(
        ${JSON.stringify(eventName)},
        ${JSON.stringify(screenName)})`;
            document.head.appendChild(script);
            document.head.removeChild(script);
        });
    }
    function getScreenNameFromPath(path) {
        let match = path.match(/^\/([^\/]+)(\/|\/status\/[\s\S]+)?$/);
        if (match) {
            log.info('Found screen name in path:', match[1]);
            return match[1];
        }
        log.info('Screen name not found in path');
        return null;
    }
    async function getUserFromPath(path) {
        const screenName = getScreenNameFromPath(path);
        if (screenName) {
            const user = await getUserFromState(screenName);
            if (user) {
                return user;
            }
        }
        return null;
    }
    return async () => {
        return await pollFor(() => getUserFromPath(location.pathname), {
            name: 'creator',
            interval: 1000,
            timeout: 6000,
        });
    };
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1FBQ0gsQ0FBQztRQUNELE9BQU8sSUFBSTtJQUNiLENBQUM7SUFFRCxPQUFPLEtBQUssSUFBSSxFQUFFO1FBQ2hCLE9BQU8sTUFBTSxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUM3RCxJQUFJLEVBQUUsU0FBUztZQUNmLFFBQVEsRUFBRSxJQUFJO1lBQ2QsT0FBTyxFQUFFLElBQUk7U0FDZCxDQUFDO0lBQ0osQ0FBQztBQUNILENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JyYXZlLWNvcmUvLi9jb21wb25lbnRzL2JyYXZlX3Jld2FyZHMvcmVzb3VyY2VzL2NyZWF0b3JfZGV0ZWN0aW9uL2hlbHBlcnMudHMiLCJ3ZWJwYWNrOi8vYnJhdmUtY29yZS8uL2NvbXBvbmVudHMvYnJhdmVfcmV3YXJkcy9yZXNvdXJjZXMvY3JlYXRvcl9kZXRlY3Rpb24vY3JlYXRvcl9kZXRlY3Rpb24udHMiLCJ3ZWJwYWNrOi8vYnJhdmUtY29yZS8uL2NvbXBvbmVudHMvYnJhdmVfcmV3YXJkcy9yZXNvdXJjZXMvY3JlYXRvcl9kZXRlY3Rpb24vdHdpdHRlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjQgVGhlIEJyYXZlIEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4vLyBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIGZpbGUsXG4vLyBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cHM6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy5cblxuZXhwb3J0IGNvbnN0IGxvZyA9IG5ldyAoY2xhc3Mge1xuICBpbmZvKC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgY29uc29sZS5kZWJ1ZygnW1Jld2FyZHNdJywgLi4uYXJncylcbiAgfVxuXG4gIGVycm9yKC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgY29uc29sZS5lcnJvcignW1Jld2FyZHNdJywgLi4uYXJncylcbiAgfVxufSkoKVxuXG5pbnRlcmZhY2UgUG9sbE9wdGlvbnMge1xuICBuYW1lOiBzdHJpbmdcbiAgdGltZW91dDogbnVtYmVyXG4gIGludGVydmFsOiBudW1iZXJcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHBvbGxGb3I8VD4oZm46ICgpID0+IFQgfCBQcm9taXNlPFQ+LCBvcHRzOiBQb2xsT3B0aW9ucykge1xuICBjb25zdCBzdGFydFRpbWUgPSBEYXRlLm5vdygpXG4gIHdoaWxlIChEYXRlLm5vdygpIC0gc3RhcnRUaW1lIDwgb3B0cy50aW1lb3V0KSB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZm4oKVxuICAgIGlmIChyZXN1bHQpIHtcbiAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG4gICAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgb3B0cy5pbnRlcnZhbCkpXG4gIH1cbiAgbG9nLmluZm8oYFRpbWVkIG91dCB3YWl0aW5nIGZvciAke29wdHMubmFtZX1gKVxuICByZXR1cm4gbnVsbFxufVxuXG5leHBvcnQgZnVuY3Rpb24gdGhyb3R0bGU8VD4oZm46ICgpID0+IFByb21pc2U8VD4gfCBUKSB7XG4gIGxldCBjdXJyZW50OiBQcm9taXNlPFQ+IHwgbnVsbCA9IG51bGxcbiAgbGV0IG5leHQ6IFByb21pc2U8VD4gfCBudWxsID0gbnVsbFxuXG4gIGxldCBzdGFydCA9ICgpID0+IHtcbiAgICBjdXJyZW50ID0gUHJvbWlzZS5yZXNvbHZlKGZuKCkpLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgY3VycmVudCA9IG51bGxcbiAgICB9KVxuICAgIHJldHVybiBjdXJyZW50XG4gIH1cblxuICByZXR1cm4gKCkgPT4ge1xuICAgIGlmICghY3VycmVudCkge1xuICAgICAgcmV0dXJuIHN0YXJ0KClcbiAgICB9XG4gICAgaWYgKCFuZXh0KSB7XG4gICAgICBuZXh0ID0gY3VycmVudFxuICAgICAgICAuZmluYWxseSgoKSA9PiB7XG4gICAgICAgICAgbmV4dCA9IG51bGxcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oc3RhcnQpXG4gICAgfVxuICAgIHJldHVybiBuZXh0XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVybFBhdGgodXJsOiBzdHJpbmcpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gbmV3IFVSTCh1cmwsIGxvY2F0aW9uLmhyZWYpLnBhdGhuYW1lXG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiAnJ1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhYnNvbHV0ZVVSTCh1cmw6IHN0cmluZykge1xuICB0cnkge1xuICAgIHJldHVybiBuZXcgVVJMKHVybCwgbG9jYXRpb24uaHJlZikudG9TdHJpbmcoKVxuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gJydcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UGF0aENvbXBvbmVudHMocGF0aDogc3RyaW5nKSB7XG4gIHJldHVybiBwYXRoXG4gICAgLnNwbGl0KCcvJylcbiAgICAuZmlsdGVyKChwYXJ0KSA9PiBwYXJ0KVxuICAgIC5tYXAoKHBhcnQpID0+IHBhcnQudG9Mb2NhbGVMb3dlckNhc2UoKSlcbn1cbiIsIi8vIENvcHlyaWdodCAoYykgMjAyNCBUaGUgQnJhdmUgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbi8vIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXMgZmlsZSxcbi8vIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwczovL21vemlsbGEub3JnL01QTC8yLjAvLlxuXG5pbXBvcnQgeyBsb2csIHRocm90dGxlIH0gZnJvbSAnLi9oZWxwZXJzJ1xuXG5leHBvcnQgaW50ZXJmYWNlIENyZWF0b3JJbmZvIHtcbiAgaWQ6IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbiAgdXJsOiBzdHJpbmdcbiAgaW1hZ2VVUkw6IHN0cmluZ1xufVxuXG50eXBlIERldGVjdGlvbkhhbmRsZXIgPSAoKSA9PiBQcm9taXNlPENyZWF0b3JJbmZvIHwgbnVsbD5cblxuZnVuY3Rpb24gc2V0UGFnZURldGVjdGlvbkhhbmRsZXIoZGV0ZWN0Q3JlYXRvcjogRGV0ZWN0aW9uSGFuZGxlcikge1xuICBsZXQgeyBicmF2ZVJld2FyZHMgfSA9IHNlbGYgYXMgYW55XG4gIGlmICghYnJhdmVSZXdhcmRzKSB7XG4gICAgYnJhdmVSZXdhcmRzID0ge31cbiAgICBPYmplY3QuYXNzaWduKHNlbGYsIHsgYnJhdmVSZXdhcmRzIH0pXG4gIH1cbiAgT2JqZWN0LmFzc2lnbihicmF2ZVJld2FyZHMsIHsgZGV0ZWN0Q3JlYXRvciB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGl6ZURldGVjdG9yKGluaXRpYWxpemVyOiAoKSA9PiBEZXRlY3Rpb25IYW5kbGVyKSB7XG4gIGNvbnN0IGRldGVjdENyZWF0b3IgPSB0aHJvdHRsZShpbml0aWFsaXplcigpKVxuICBsZXQgY3VycmVudFVSTCA9ICcnXG5cbiAgc2V0UGFnZURldGVjdGlvbkhhbmRsZXIoYXN5bmMgKCkgPT4ge1xuICAgIGlmIChsb2NhdGlvbi5ocmVmID09PSBjdXJyZW50VVJMKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIGN1cnJlbnRVUkwgPSBsb2NhdGlvbi5ocmVmXG5cbiAgICBsZXQgY3JlYXRvcjogQ3JlYXRvckluZm8gfCBudWxsID0gbnVsbFxuICAgIHRyeSB7XG4gICAgICBjcmVhdG9yID0gYXdhaXQgZGV0ZWN0Q3JlYXRvcigpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBsb2cuZXJyb3IoJ0Vycm9yIGRldGVjdGluZyBjcmVhdG9yJywgZXJyKVxuICAgIH1cblxuICAgIGlmIChjcmVhdG9yKSB7XG4gICAgICBsb2cuaW5mbygnRm91bmQgY3JlYXRvcjonLCBjcmVhdG9yKVxuICAgIH0gZWxzZSB7XG4gICAgICBsb2cuaW5mbygnTm8gY3JlYXRvciBmb3VuZCBmb3IgY3VycmVudCBVUkwnKVxuICAgIH1cblxuICAgIHJldHVybiBjcmVhdG9yXG4gIH0pXG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjQgVGhlIEJyYXZlIEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4vLyBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIGZpbGUsXG4vLyBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cHM6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy5cblxuaW1wb3J0IHsgQ3JlYXRvckluZm8sIGluaXRpYWxpemVEZXRlY3RvciB9IGZyb20gJy4vY3JlYXRvcl9kZXRlY3Rpb24nXG5pbXBvcnQgeyBsb2csIHBvbGxGb3IgfSBmcm9tICcuL2hlbHBlcnMnXG5cbmZ1bmN0aW9uIGdldFVzZXJGcm9tQXBwU3RhdGUoZXZlbnROYW1lOiBzdHJpbmcsIHNjcmVlbk5hbWU6IHN0cmluZykge1xuICBpbnRlcmZhY2UgU3RhdGVTdG9yZSB7XG4gICAgZ2V0U3RhdGU6ICgpID0+IGFueVxuICB9XG5cbiAgbGV0IG1lc3NhZ2VzOiBhbnlbXSA9IFtdXG5cbiAgZnVuY3Rpb24gZ2V0RWxlbWVudFN0b3JlKGVsZW06IG9iamVjdCB8IG51bGwpIHtcbiAgICBpZiAoIWVsZW0pIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICAgIGZvciAoY29uc3QgbmFtZSBvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhlbGVtKSkge1xuICAgICAgaWYgKG5hbWUuc3RhcnRzV2l0aCgnX19yZWFjdFByb3BzJCcpKSB7XG4gICAgICAgIGxldCBzdG9yZTogYW55ID0gbnVsbFxuICAgICAgICB0cnkge1xuICAgICAgICAgIHN0b3JlID0gKGVsZW0gYXMgYW55KVtuYW1lXS5jaGlsZHJlbi5wcm9wcy5zdG9yZVxuICAgICAgICB9IGNhdGNoIHt9XG4gICAgICAgIGlmIChzdG9yZSAmJiB0eXBlb2Ygc3RvcmUuZ2V0U3RhdGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICByZXR1cm4gc3RvcmUgYXMgU3RhdGVTdG9yZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsXG4gIH1cblxuICBmdW5jdGlvbiBmaW5kU3RvcmUoZWxlbTogRWxlbWVudCB8IG51bGwsIGRlcHRoID0gMCk6IFN0YXRlU3RvcmUgfCBudWxsIHtcbiAgICBpZiAoIWVsZW0pIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICAgIGxldCBzdG9yZSA9IGdldEVsZW1lbnRTdG9yZShlbGVtKVxuICAgIGlmIChzdG9yZSkge1xuICAgICAgcmV0dXJuIHN0b3JlXG4gICAgfVxuICAgIGlmIChkZXB0aCA9PT0gNCkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gICAgZm9yIChsZXQgY2hpbGQgb2YgZWxlbS5jaGlsZHJlbikge1xuICAgICAgc3RvcmUgPSBmaW5kU3RvcmUoY2hpbGQsIGRlcHRoICsgMSlcbiAgICAgIGlmIChzdG9yZSkge1xuICAgICAgICByZXR1cm4gc3RvcmVcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIGZ1bmN0aW9uIHNjcmVlbk5hbWVzTWF0Y2gobmFtZTE6IGFueSwgbmFtZTI6IGFueSkge1xuICAgIGlmICh0eXBlb2YgbmFtZTEgPT09ICdzdHJpbmcnICYmIHR5cGVvZiBuYW1lMiA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiBuYW1lMS50b0xvY2FsZUxvd2VyQ2FzZSgpID09PSBuYW1lMi50b0xvY2FsZUxvd2VyQ2FzZSgpXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0VXNlckZyb21TdGF0ZShzdGF0ZTogYW55LCBzY3JlZW5OYW1lOiBzdHJpbmcpIHtcbiAgICBjb25zdCB1c2VyRW50aXRpZXMgPSBzdGF0ZS5lbnRpdGllcy51c2Vycy5lbnRpdGllc1xuICAgIGZvciAobGV0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyh1c2VyRW50aXRpZXMpIGFzIGFueSkge1xuICAgICAgaWYgKHNjcmVlbk5hbWVzTWF0Y2godmFsdWUuc2NyZWVuX25hbWUsIHNjcmVlbk5hbWUpKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaWQ6IGB0d2l0dGVyI2NoYW5uZWw6JHtrZXl9YCxcbiAgICAgICAgICBuYW1lOiBzY3JlZW5OYW1lLFxuICAgICAgICAgIHVybDogYCR7bG9jYXRpb24ub3JpZ2lufS8ke3NjcmVlbk5hbWV9YCxcbiAgICAgICAgICBpbWFnZVVSTDogU3RyaW5nKHZhbHVlLnByb2ZpbGVfaW1hZ2VfdXJsX2h0dHBzIHx8ICcnKSxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBtZXNzYWdlcyA9IFsnU2NyZWVuIG5hbWUgbm90IGZvdW5kIGluIHN0YXRlJ11cbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0VXNlckJ5U2NyZWVuTmFtZSgpIHtcbiAgICBjb25zdCBzdG9yZSA9IGZpbmRTdG9yZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVhY3Qtcm9vdCcpKVxuICAgIGlmICghc3RvcmUpIHtcbiAgICAgIG1lc3NhZ2VzID0gWydTdGF0ZSBzdG9yZSBjb3VsZCBub3QgYmUgZm91bmQnXVxuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gICAgY29uc3Qgc3RhdGUgPSBzdG9yZS5nZXRTdGF0ZSgpXG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBnZXRVc2VyRnJvbVN0YXRlKHN0YXRlLCBzY3JlZW5OYW1lKVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZSlcbiAgICAgIG1lc3NhZ2VzID0gWydFcnJvciBhdHRlbXB0aW5nIHRvIGdldCB1c2VyIHN0YXRlJywgc3RhdGVdXG4gICAgfVxuICAgIHJldHVybiBudWxsXG4gIH1cblxuICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KFxuICAgIG5ldyBDdXN0b21FdmVudChldmVudE5hbWUsIHtcbiAgICAgIGRldGFpbDogeyB1c2VyOiBnZXRVc2VyQnlTY3JlZW5OYW1lKCksIG1lc3NhZ2VzIH0sXG4gICAgfSksXG4gIClcbn1cblxuaW5pdGlhbGl6ZURldGVjdG9yKCgpID0+IHtcbiAgYXN5bmMgZnVuY3Rpb24gZ2V0VXNlckZyb21TdGF0ZShzY3JlZW5OYW1lOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8Q3JlYXRvckluZm8gfCBudWxsPigocmVzb2x2ZSkgPT4ge1xuICAgICAgY29uc3QgZXZlbnROYW1lID0gJ2JyYXZlLXJld2FyZHMtdXNlci1kYXRhJ1xuICAgICAgY29uc3QgbGlzdGVuZXIgPSAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBsaXN0ZW5lcilcbiAgICAgICAgY29uc3QgeyB1c2VyLCBtZXNzYWdlcyB9ID0gZXZlbnQuZGV0YWlsIHx8IHt9XG4gICAgICAgIHJlc29sdmUodXNlciB8fCBudWxsKVxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShtZXNzYWdlcykgJiYgbWVzc2FnZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGxvZy5pbmZvKC4uLm1lc3NhZ2VzKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgbGlzdGVuZXIpXG4gICAgICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKVxuICAgICAgc2NyaXB0LnRleHRDb250ZW50ID0gYCgke2dldFVzZXJGcm9tQXBwU3RhdGV9KShcbiAgICAgICAgJHtKU09OLnN0cmluZ2lmeShldmVudE5hbWUpfSxcbiAgICAgICAgJHtKU09OLnN0cmluZ2lmeShzY3JlZW5OYW1lKX0pYFxuICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpXG4gICAgICBkb2N1bWVudC5oZWFkLnJlbW92ZUNoaWxkKHNjcmlwdClcbiAgICB9KVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0U2NyZWVuTmFtZUZyb21QYXRoKHBhdGg6IHN0cmluZykge1xuICAgIGxldCBtYXRjaCA9IHBhdGgubWF0Y2goL15cXC8oW15cXC9dKykoXFwvfFxcL3N0YXR1c1xcL1tcXHNcXFNdKyk/JC8pXG4gICAgaWYgKG1hdGNoKSB7XG4gICAgICBsb2cuaW5mbygnRm91bmQgc2NyZWVuIG5hbWUgaW4gcGF0aDonLCBtYXRjaFsxXSlcbiAgICAgIHJldHVybiBtYXRjaFsxXVxuICAgIH1cbiAgICBsb2cuaW5mbygnU2NyZWVuIG5hbWUgbm90IGZvdW5kIGluIHBhdGgnKVxuICAgIHJldHVybiBudWxsXG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBnZXRVc2VyRnJvbVBhdGgocGF0aDogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2NyZWVuTmFtZSA9IGdldFNjcmVlbk5hbWVGcm9tUGF0aChwYXRoKVxuICAgIGlmIChzY3JlZW5OYW1lKSB7XG4gICAgICBjb25zdCB1c2VyID0gYXdhaXQgZ2V0VXNlckZyb21TdGF0ZShzY3JlZW5OYW1lKVxuICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgcmV0dXJuIHVzZXJcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIHJldHVybiBhc3luYyAoKSA9PiB7XG4gICAgcmV0dXJuIGF3YWl0IHBvbGxGb3IoKCkgPT4gZ2V0VXNlckZyb21QYXRoKGxvY2F0aW9uLnBhdGhuYW1lKSwge1xuICAgICAgbmFtZTogJ2NyZWF0b3InLFxuICAgICAgaW50ZXJ2YWw6IDEwMDAsXG4gICAgICB0aW1lb3V0OiA2MDAwLFxuICAgIH0pXG4gIH1cbn0pXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=