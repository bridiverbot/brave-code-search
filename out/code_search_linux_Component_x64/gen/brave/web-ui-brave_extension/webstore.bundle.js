/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!**************************************************************************************!*\
  !*** ./components/brave_extension/extension/brave_extension/webstore.ts + 1 modules ***!
  \**************************************************************************************/

;// ./components/brave_extension/extension/brave_extension/background/api/localeAPI.ts
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at https://mozilla.org/MPL/2.0/. */
/**
 * Gets the locale message specified in messages.json
 * @param {string} message - The locale string
 */
const getLocale = (message) => {
    if (chrome.i18n) {
        return chrome.i18n.getMessage(message);
    }
    return message;
};

;// ./components/brave_extension/extension/brave_extension/webstore.ts
// Copyright (c) 2019 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// you can obtain one at https://mozilla.org/MPL/2.0/.

const config = { attributes: true, childList: true, subtree: true };
const callback = () => {
    const buttonQueries = [
        'div.webstore-test-button-label', // https://chrome.google.com/webstore
        'button span[jsname]:not(:empty)' // https://chromewebstore.google.com/
    ];
    for (const button of document.querySelectorAll(buttonQueries.join(','))) {
        const text = button.textContent || '';
        if (text === getLocale('addToChrome')) {
            button.textContent =
                getLocale('addToBrave') || text.replace('Chrome', 'Brave');
        }
        else if (text === getLocale('removeFromChrome')) {
            button.textContent =
                getLocale('removeFromBrave') || text.replace('Chrome', 'Brave');
        }
    }
};
const observer = new MutationObserver(callback);
// At https://chromewebstore.google.com, "*Chrome" buttons are displayed
// shortly after the first paint, and long before either `DOMContentLoaded` or
// `window.load` fire, so we must start watching for document mutations as soon
// as possible. The performance impact of observing mutations prior to `onload`
// is non-trivial but small (measured at 60ms on a development build).
observer.observe(document, config);

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2Vic3RvcmUuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7eURBRXlEO0FBRXpEOzs7R0FHRztBQUNJLE1BQU0sU0FBUyxHQUFHLENBQUMsT0FBZSxFQUFVLEVBQUU7SUFDbkQsSUFBSSxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDaEIsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUM7SUFDeEMsQ0FBQztJQUVELE9BQU8sT0FBTztBQUNoQixDQUFDOzs7QUNkRCw2REFBNkQ7QUFDN0Qsc0VBQXNFO0FBQ3RFLDRFQUE0RTtBQUM1RSxzREFBc0Q7QUFFQTtBQUV0RCxNQUFNLE1BQU0sR0FBRyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFO0FBRW5FLE1BQU0sUUFBUSxHQUFHLEdBQUcsRUFBRTtJQUNwQixNQUFNLGFBQWEsR0FBRztRQUNwQixnQ0FBZ0MsRUFBRSxxQ0FBcUM7UUFDdkUsaUNBQWlDLENBQUMscUNBQXFDO0tBQ3hFO0lBQ0QsS0FBSyxNQUFNLE1BQU0sSUFBSSxRQUFRLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDeEUsTUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLFdBQVcsSUFBSSxFQUFFO1FBQ3JDLElBQUksSUFBSSxLQUFLLFNBQVMsQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDO1lBQ3RDLE1BQU0sQ0FBQyxXQUFXO2dCQUNoQixTQUFTLENBQUMsWUFBWSxDQUFDLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDO1FBQzlELENBQUM7YUFBTSxJQUFJLElBQUksS0FBSyxTQUFTLENBQUMsa0JBQWtCLENBQUMsRUFBRSxDQUFDO1lBQ2xELE1BQU0sQ0FBQyxXQUFXO2dCQUNoQixTQUFTLENBQUMsaUJBQWlCLENBQUMsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUM7UUFDbkUsQ0FBQztJQUNILENBQUM7QUFDSCxDQUFDO0FBRUQsTUFBTSxRQUFRLEdBQXFCLElBQUksZ0JBQWdCLENBQUMsUUFBUSxDQUFDO0FBRWpFLHdFQUF3RTtBQUN4RSw4RUFBOEU7QUFDOUUsK0VBQStFO0FBQy9FLCtFQUErRTtBQUMvRSxzRUFBc0U7QUFDdEUsUUFBUSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYnJhdmUtY29yZS8uL2NvbXBvbmVudHMvYnJhdmVfZXh0ZW5zaW9uL2V4dGVuc2lvbi9icmF2ZV9leHRlbnNpb24vYmFja2dyb3VuZC9hcGkvbG9jYWxlQVBJLnRzIiwid2VicGFjazovL2JyYXZlLWNvcmUvLi9jb21wb25lbnRzL2JyYXZlX2V4dGVuc2lvbi9leHRlbnNpb24vYnJhdmVfZXh0ZW5zaW9uL3dlYnN0b3JlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXMgZmlsZSxcbiAqIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwczovL21vemlsbGEub3JnL01QTC8yLjAvLiAqL1xuXG4vKipcbiAqIEdldHMgdGhlIGxvY2FsZSBtZXNzYWdlIHNwZWNpZmllZCBpbiBtZXNzYWdlcy5qc29uXG4gKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZSAtIFRoZSBsb2NhbGUgc3RyaW5nXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRMb2NhbGUgPSAobWVzc2FnZTogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgaWYgKGNocm9tZS5pMThuKSB7XG4gICAgcmV0dXJuIGNocm9tZS5pMThuLmdldE1lc3NhZ2UobWVzc2FnZSlcbiAgfVxuXG4gIHJldHVybiBtZXNzYWdlXG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMTkgVGhlIEJyYXZlIEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4vLyBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIGZpbGUsXG4vLyB5b3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cHM6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy5cblxuaW1wb3J0IHsgZ2V0TG9jYWxlIH0gZnJvbSAnLi9iYWNrZ3JvdW5kL2FwaS9sb2NhbGVBUEknXG5cbmNvbnN0IGNvbmZpZyA9IHsgYXR0cmlidXRlczogdHJ1ZSwgY2hpbGRMaXN0OiB0cnVlLCBzdWJ0cmVlOiB0cnVlIH1cblxuY29uc3QgY2FsbGJhY2sgPSAoKSA9PiB7XG4gIGNvbnN0IGJ1dHRvblF1ZXJpZXMgPSBbXG4gICAgJ2Rpdi53ZWJzdG9yZS10ZXN0LWJ1dHRvbi1sYWJlbCcsIC8vIGh0dHBzOi8vY2hyb21lLmdvb2dsZS5jb20vd2Vic3RvcmVcbiAgICAnYnV0dG9uIHNwYW5banNuYW1lXTpub3QoOmVtcHR5KScgLy8gaHR0cHM6Ly9jaHJvbWV3ZWJzdG9yZS5nb29nbGUuY29tL1xuICBdXG4gIGZvciAoY29uc3QgYnV0dG9uIG9mIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYnV0dG9uUXVlcmllcy5qb2luKCcsJykpKSB7XG4gICAgY29uc3QgdGV4dCA9IGJ1dHRvbi50ZXh0Q29udGVudCB8fCAnJ1xuICAgIGlmICh0ZXh0ID09PSBnZXRMb2NhbGUoJ2FkZFRvQ2hyb21lJykpIHtcbiAgICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9XG4gICAgICAgIGdldExvY2FsZSgnYWRkVG9CcmF2ZScpIHx8IHRleHQucmVwbGFjZSgnQ2hyb21lJywgJ0JyYXZlJylcbiAgICB9IGVsc2UgaWYgKHRleHQgPT09IGdldExvY2FsZSgncmVtb3ZlRnJvbUNocm9tZScpKSB7XG4gICAgICBidXR0b24udGV4dENvbnRlbnQgPVxuICAgICAgICBnZXRMb2NhbGUoJ3JlbW92ZUZyb21CcmF2ZScpIHx8IHRleHQucmVwbGFjZSgnQ2hyb21lJywgJ0JyYXZlJylcbiAgICB9XG4gIH1cbn1cblxuY29uc3Qgb2JzZXJ2ZXI6IE11dGF0aW9uT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihjYWxsYmFjaylcblxuLy8gQXQgaHR0cHM6Ly9jaHJvbWV3ZWJzdG9yZS5nb29nbGUuY29tLCBcIipDaHJvbWVcIiBidXR0b25zIGFyZSBkaXNwbGF5ZWRcbi8vIHNob3J0bHkgYWZ0ZXIgdGhlIGZpcnN0IHBhaW50LCBhbmQgbG9uZyBiZWZvcmUgZWl0aGVyIGBET01Db250ZW50TG9hZGVkYCBvclxuLy8gYHdpbmRvdy5sb2FkYCBmaXJlLCBzbyB3ZSBtdXN0IHN0YXJ0IHdhdGNoaW5nIGZvciBkb2N1bWVudCBtdXRhdGlvbnMgYXMgc29vblxuLy8gYXMgcG9zc2libGUuIFRoZSBwZXJmb3JtYW5jZSBpbXBhY3Qgb2Ygb2JzZXJ2aW5nIG11dGF0aW9ucyBwcmlvciB0byBgb25sb2FkYFxuLy8gaXMgbm9uLXRyaXZpYWwgYnV0IHNtYWxsIChtZWFzdXJlZCBhdCA2MG1zIG9uIGEgZGV2ZWxvcG1lbnQgYnVpbGQpLlxub2JzZXJ2ZXIub2JzZXJ2ZShkb2N1bWVudCwgY29uZmlnKVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9