/******/ "use strict";
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
/*!****************************************************************************************************************!*\
  !*** ./components/ai_chat/resources/custom_site_distiller_scripts/scripts/github.com/distiller.ts + 3 modules ***!
  \****************************************************************************************************************/
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ distill),
  getDistillationLevel: () => (/* binding */ getDistillationLevel)
});

;// ./components/ai_chat/resources/custom_site_distiller_scripts/scripts/distillation.ts
/* Copyright (c) 2024 The Brave Authors. All rights reserved.
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at https://mozilla.org/MPL/2.0/. */
var LEO_DISTILLATION_LEVEL;
(function (LEO_DISTILLATION_LEVEL) {
    LEO_DISTILLATION_LEVEL[LEO_DISTILLATION_LEVEL["LOW"] = 0] = "LOW";
    LEO_DISTILLATION_LEVEL[LEO_DISTILLATION_LEVEL["MEDIUM"] = 1] = "MEDIUM";
    LEO_DISTILLATION_LEVEL[LEO_DISTILLATION_LEVEL["HIGH"] = 2] = "HIGH";
    LEO_DISTILLATION_LEVEL[LEO_DISTILLATION_LEVEL["FULL"] = 3] = "FULL";
})(LEO_DISTILLATION_LEVEL || (LEO_DISTILLATION_LEVEL = {}));

;// ./components/ai_chat/resources/custom_site_distiller_scripts/scripts/github.com/branches.ts
/* Copyright (c) 2024 The Brave Authors. All rights reserved.
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at https://mozilla.org/MPL/2.0/. */
function distillBranches() {
    const tables = document.querySelectorAll('table');
    const output = [...tables].map(distillBranchesTable);
    return output.join('\n');
}
function distillBranchesTable(table) {
    const pageURL = document.location.toString();
    const pageTitle = document.title;
    const tableTitle = getBranchesTableTitle(table);
    // Extract headers from the first row
    const headers = [...table.rows[0].cells].map((cell) => {
        return cell.innerText.trim();
    });
    // Define custom processing for specific headers
    const cellProcessors = {
        'updated': (cell) => {
            var _a, _b;
            return ({
                author: (_a = cell.querySelector('a')) === null || _a === void 0 ? void 0 : _a.getAttribute('href'),
                date: (_b = cell.querySelector('relative-time')) === null || _b === void 0 ? void 0 : _b.getAttribute('title'),
            });
        },
        'pull request': (cell) => {
            var _a, _b;
            const link = cell.querySelector('a');
            const href = link === null || link === void 0 ? void 0 : link.getAttribute('href');
            // We can infer the state from the presence and type of icon
            const state = (_b = (_a = link === null || link === void 0 ? void 0 : link.querySelector('[data-testid$="-pull-request-icon"]')) === null || _a === void 0 ? void 0 : _a.dataset.testid) === null || _b === void 0 ? void 0 : _b.split('-')[0];
            if (href && state) {
                return { href, state };
            }
            return null;
        },
        'action menu': null, // Skip this cell
    };
    const data = [];
    // Iterate over each row, starting from the second one
    for (let i = 1; i < table.rows.length; i++) {
        const row = table.rows[i];
        const rowData = {};
        // Iterate over each cell in the row
        for (let j = 0; j < row.cells.length; j++) {
            const cell = row.cells[j];
            const label = headers[j];
            const loweredLabel = label.toLowerCase();
            // Check if there's a custom processor for the cell
            const processor = cellProcessors[loweredLabel];
            const trimmedText = cell.innerText.trim();
            if (typeof processor === 'function') {
                const result = processor(cell);
                if (result !== null) {
                    rowData[label] = result;
                }
            }
            else if (processor === null || trimmedText === '') {
                continue;
            }
            else {
                rowData[label] = trimmedText;
            }
        }
        data.push(rowData);
    }
    return [
        `Current time: ${new Date().toLocaleString()}`,
        `Current URL: ${pageURL}`,
        `# Page Title: ${pageTitle}`,
        `## Data Title: ${tableTitle}`,
        ...rDistillObject(data),
    ].join('\n');
}
function rDistillObject(obj) {
    /**
     * Recursively distill an object into a list (maintaining hierarchy):
     * - Prop A: Value of Prop A
     *   - Subprop A: Value of Subprop A
     *   - Subprop B: Value of Subprop B
     * - Prop B: Value of Prop B
     * - Prop C: Value of Prop C
     */
    const output = [];
    for (const [k, v] of Object.entries(obj)) {
        if (typeof v === 'object') {
            output.push(`- ${k}:`);
            output.push(...rDistillObject(v).map((line) => `  ${line}`));
        }
        else if (typeof v === 'string') {
            output.push(`- ${k.replace('\n', '/')}: ${v.replace('\n', '/')}`);
        }
    }
    return output;
}
function getBranchesTableTitle(table) {
    var _a;
    const holderSelector = ':has(.TableTitle), :has(.TabNav-item.selected';
    const titleSelector = '.TableTitle, .TabNav-item.selected';
    const titleHolder = table.closest(holderSelector);
    const tableTitle = (_a = titleHolder === null || titleHolder === void 0 ? void 0 : titleHolder.querySelector(titleSelector)) === null || _a === void 0 ? void 0 : _a.textContent;
    if (tableTitle) {
        return tableTitle.trim();
    }
    return table.getAttribute('aria-labelledby');
}

;// ./components/ai_chat/resources/custom_site_distiller_scripts/scripts/github.com/utils.ts
/* Copyright (c) 2024 The Brave Authors. All rights reserved.
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at https://mozilla.org/MPL/2.0/. */
var SupportedPage;
(function (SupportedPage) {
    SupportedPage["ORG"] = "org";
    SupportedPage["REPO"] = "repo";
    SupportedPage["PULL_REQUESTS"] = "pull_requests";
    SupportedPage["PULL_REQUEST"] = "pull_request";
    SupportedPage["BRANCHES"] = "branches";
    SupportedPage["PROFILE"] = "profile";
})(SupportedPage || (SupportedPage = {}));
function GetPageType(document) {
    if (isOrgPage(document)) {
        return SupportedPage.ORG;
    }
    else if (isRepoPage(document)) {
        return SupportedPage.REPO;
    }
    else if (isPullRequestsPage(document)) {
        return SupportedPage.PULL_REQUESTS;
    }
    else if (isPullRequestPage(document)) {
        return SupportedPage.PULL_REQUEST;
    }
    else if (isBranchesPage(document)) {
        return SupportedPage.BRANCHES;
    }
    else if (isProfilePage(document)) {
        return SupportedPage.PROFILE;
    }
    return null;
}
function isOrgPage(document) {
    var _a, _b;
    const key = 'itemtype';
    const val = 'Organization';
    return (_b = (_a = document.querySelector(`[${key}]`)) === null || _a === void 0 ? void 0 : _a.getAttribute(key)) === null || _b === void 0 ? void 0 : _b.endsWith(val);
}
function isRepoPage(document) {
    return location.pathname.split('/').filter(Boolean).length === 2;
}
function isPullRequestsPage(document) {
    const pathParts = location.pathname.split('/').filter(Boolean);
    return pathParts.length === 3 && pathParts[2] === 'pulls';
}
function isPullRequestPage(document) {
    const pathParts = location.pathname.split('/').filter(Boolean);
    return pathParts.length === 4 && /\d+/.test(pathParts[3]);
}
function isBranchesPage(document) {
    return /\/branches(\/(active|stale|all))?\/?$/.test(location.pathname);
}
function isProfilePage(document) {
    return document.body.matches('.page-profile');
}

;// ./components/ai_chat/resources/custom_site_distiller_scripts/scripts/github.com/distiller.ts
/* Copyright (c) 2024 The Brave Authors. All rights reserved.
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at https://mozilla.org/MPL/2.0/. */



let _DISTILLATION_LEVEL = LEO_DISTILLATION_LEVEL.FULL;
function getDistillationLevel() {
    return _DISTILLATION_LEVEL;
}
function distill(level = LEO_DISTILLATION_LEVEL.FULL) {
    _DISTILLATION_LEVEL = level;
    switch (GetPageType(document)) {
        case SupportedPage.BRANCHES:
            return distillBranches();
        default:
            return null;
    }
}


//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUk7SUFDakUsbUJBQW1CLEdBQUcsS0FBSztJQUUzQixRQUFRLFdBQVcsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDO1FBQzlCLEtBQUssYUFBYSxDQUFDLFFBQVE7WUFDekIsT0FBTyxlQUFlLEVBQUU7UUFDMUI7WUFDRSxPQUFPLElBQUk7SUFDZixDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JyYXZlLWNvcmUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYnJhdmUtY29yZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYnJhdmUtY29yZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JyYXZlLWNvcmUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9icmF2ZS1jb3JlLy4vY29tcG9uZW50cy9haV9jaGF0L3Jlc291cmNlcy9jdXN0b21fc2l0ZV9kaXN0aWxsZXJfc2NyaXB0cy9zY3JpcHRzL2Rpc3RpbGxhdGlvbi50cyIsIndlYnBhY2s6Ly9icmF2ZS1jb3JlLy4vY29tcG9uZW50cy9haV9jaGF0L3Jlc291cmNlcy9jdXN0b21fc2l0ZV9kaXN0aWxsZXJfc2NyaXB0cy9zY3JpcHRzL2dpdGh1Yi5jb20vYnJhbmNoZXMudHMiLCJ3ZWJwYWNrOi8vYnJhdmUtY29yZS8uL2NvbXBvbmVudHMvYWlfY2hhdC9yZXNvdXJjZXMvY3VzdG9tX3NpdGVfZGlzdGlsbGVyX3NjcmlwdHMvc2NyaXB0cy9naXRodWIuY29tL3V0aWxzLnRzIiwid2VicGFjazovL2JyYXZlLWNvcmUvLi9jb21wb25lbnRzL2FpX2NoYXQvcmVzb3VyY2VzL2N1c3RvbV9zaXRlX2Rpc3RpbGxlcl9zY3JpcHRzL3NjcmlwdHMvZ2l0aHViLmNvbS9kaXN0aWxsZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvKiBDb3B5cmlnaHQgKGMpIDIwMjQgVGhlIEJyYXZlIEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIGZpbGUsXG4gKiBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cHM6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy4gKi9cblxuZXhwb3J0IGVudW0gTEVPX0RJU1RJTExBVElPTl9MRVZFTCB7XG4gIExPVyA9IDAsXG4gIE1FRElVTSA9IDEsXG4gIEhJR0ggPSAyLFxuICBGVUxMID0gMyxcbn1cbiIsIi8qIENvcHlyaWdodCAoYykgMjAyNCBUaGUgQnJhdmUgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXMgZmlsZSxcbiAqIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwczovL21vemlsbGEub3JnL01QTC8yLjAvLiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZGlzdGlsbEJyYW5jaGVzKCkge1xuICBjb25zdCB0YWJsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCd0YWJsZScpXG4gIGNvbnN0IG91dHB1dCA9IFsuLi50YWJsZXNdLm1hcChkaXN0aWxsQnJhbmNoZXNUYWJsZSlcbiAgcmV0dXJuIG91dHB1dC5qb2luKCdcXG4nKVxufVxuXG5mdW5jdGlvbiBkaXN0aWxsQnJhbmNoZXNUYWJsZSh0YWJsZTogSFRNTFRhYmxlRWxlbWVudCkge1xuICBjb25zdCBwYWdlVVJMID0gZG9jdW1lbnQubG9jYXRpb24udG9TdHJpbmcoKVxuICBjb25zdCBwYWdlVGl0bGUgPSBkb2N1bWVudC50aXRsZVxuICBjb25zdCB0YWJsZVRpdGxlID0gZ2V0QnJhbmNoZXNUYWJsZVRpdGxlKHRhYmxlKVxuXG4gIC8vIEV4dHJhY3QgaGVhZGVycyBmcm9tIHRoZSBmaXJzdCByb3dcbiAgY29uc3QgaGVhZGVycyA9IFsuLi50YWJsZS5yb3dzWzBdLmNlbGxzXS5tYXAoKGNlbGwpID0+IHtcbiAgICByZXR1cm4gY2VsbC5pbm5lclRleHQudHJpbSgpXG4gIH0pXG5cbiAgLy8gRGVmaW5lIGN1c3RvbSBwcm9jZXNzaW5nIGZvciBzcGVjaWZpYyBoZWFkZXJzXG4gIGNvbnN0IGNlbGxQcm9jZXNzb3JzID0ge1xuICAgICd1cGRhdGVkJzogKGNlbGw6IEhUTUxUYWJsZUNlbGxFbGVtZW50KSA9PiAoe1xuICAgICAgYXV0aG9yOiBjZWxsLnF1ZXJ5U2VsZWN0b3IoJ2EnKT8uZ2V0QXR0cmlidXRlKCdocmVmJyksXG4gICAgICBkYXRlOiBjZWxsLnF1ZXJ5U2VsZWN0b3IoJ3JlbGF0aXZlLXRpbWUnKT8uZ2V0QXR0cmlidXRlKCd0aXRsZScpLFxuICAgIH0pLFxuICAgICdwdWxsIHJlcXVlc3QnOiAoY2VsbDogSFRNTFRhYmxlQ2VsbEVsZW1lbnQpID0+IHtcbiAgICAgIGNvbnN0IGxpbmsgPSBjZWxsLnF1ZXJ5U2VsZWN0b3IoJ2EnKVxuICAgICAgY29uc3QgaHJlZiA9IGxpbms/LmdldEF0dHJpYnV0ZSgnaHJlZicpXG4gICAgICAvLyBXZSBjYW4gaW5mZXIgdGhlIHN0YXRlIGZyb20gdGhlIHByZXNlbmNlIGFuZCB0eXBlIG9mIGljb25cbiAgICAgIGNvbnN0IHN0YXRlID0gbGlua1xuICAgICAgICA/LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KCdbZGF0YS10ZXN0aWQkPVwiLXB1bGwtcmVxdWVzdC1pY29uXCJdJylcbiAgICAgICAgPy5kYXRhc2V0LnRlc3RpZD8uc3BsaXQoJy0nKVswXVxuICAgICAgaWYgKGhyZWYgJiYgc3RhdGUpIHtcbiAgICAgICAgcmV0dXJuIHsgaHJlZiwgc3RhdGUgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGxcbiAgICB9LFxuICAgICdhY3Rpb24gbWVudSc6IG51bGwsIC8vIFNraXAgdGhpcyBjZWxsXG4gIH0gYXMgUmVjb3JkPHN0cmluZywgYW55PlxuXG4gIGNvbnN0IGRhdGEgPSBbXSBhcyBBcnJheTxSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+PlxuXG4gIC8vIEl0ZXJhdGUgb3ZlciBlYWNoIHJvdywgc3RhcnRpbmcgZnJvbSB0aGUgc2Vjb25kIG9uZVxuICBmb3IgKGxldCBpID0gMTsgaSA8IHRhYmxlLnJvd3MubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCByb3cgPSB0YWJsZS5yb3dzW2ldXG4gICAgY29uc3Qgcm93RGF0YSA9IHt9IGFzIFJlY29yZDxzdHJpbmcsIHN0cmluZz5cblxuICAgIC8vIEl0ZXJhdGUgb3ZlciBlYWNoIGNlbGwgaW4gdGhlIHJvd1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgcm93LmNlbGxzLmxlbmd0aDsgaisrKSB7XG4gICAgICBjb25zdCBjZWxsID0gcm93LmNlbGxzW2pdXG4gICAgICBjb25zdCBsYWJlbCA9IGhlYWRlcnNbal1cbiAgICAgIGNvbnN0IGxvd2VyZWRMYWJlbCA9IGxhYmVsLnRvTG93ZXJDYXNlKClcblxuICAgICAgLy8gQ2hlY2sgaWYgdGhlcmUncyBhIGN1c3RvbSBwcm9jZXNzb3IgZm9yIHRoZSBjZWxsXG4gICAgICBjb25zdCBwcm9jZXNzb3IgPSBjZWxsUHJvY2Vzc29yc1tsb3dlcmVkTGFiZWxdXG4gICAgICBjb25zdCB0cmltbWVkVGV4dCA9IGNlbGwuaW5uZXJUZXh0LnRyaW0oKVxuXG4gICAgICBpZiAodHlwZW9mIHByb2Nlc3NvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBwcm9jZXNzb3IoY2VsbClcbiAgICAgICAgaWYgKHJlc3VsdCAhPT0gbnVsbCkge1xuICAgICAgICAgIHJvd0RhdGFbbGFiZWxdID0gcmVzdWx0XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAocHJvY2Vzc29yID09PSBudWxsIHx8IHRyaW1tZWRUZXh0ID09PSAnJykge1xuICAgICAgICBjb250aW51ZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcm93RGF0YVtsYWJlbF0gPSB0cmltbWVkVGV4dFxuICAgICAgfVxuICAgIH1cblxuICAgIGRhdGEucHVzaChyb3dEYXRhKVxuICB9XG5cbiAgcmV0dXJuIFtcbiAgICBgQ3VycmVudCB0aW1lOiAke25ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoKX1gLFxuICAgIGBDdXJyZW50IFVSTDogJHtwYWdlVVJMfWAsXG4gICAgYCMgUGFnZSBUaXRsZTogJHtwYWdlVGl0bGV9YCxcbiAgICBgIyMgRGF0YSBUaXRsZTogJHt0YWJsZVRpdGxlfWAsXG4gICAgLi4uckRpc3RpbGxPYmplY3QoZGF0YSksXG4gIF0uam9pbignXFxuJylcbn1cblxuZnVuY3Rpb24gckRpc3RpbGxPYmplY3Qob2JqOiBhbnkpIHtcbiAgLyoqXG4gICAqIFJlY3Vyc2l2ZWx5IGRpc3RpbGwgYW4gb2JqZWN0IGludG8gYSBsaXN0IChtYWludGFpbmluZyBoaWVyYXJjaHkpOlxuICAgKiAtIFByb3AgQTogVmFsdWUgb2YgUHJvcCBBXG4gICAqICAgLSBTdWJwcm9wIEE6IFZhbHVlIG9mIFN1YnByb3AgQVxuICAgKiAgIC0gU3VicHJvcCBCOiBWYWx1ZSBvZiBTdWJwcm9wIEJcbiAgICogLSBQcm9wIEI6IFZhbHVlIG9mIFByb3AgQlxuICAgKiAtIFByb3AgQzogVmFsdWUgb2YgUHJvcCBDXG4gICAqL1xuICBjb25zdCBvdXRwdXQgPSBbXSBhcyBzdHJpbmdbXVxuXG4gIGZvciAoY29uc3QgW2ssIHZdIG9mIE9iamVjdC5lbnRyaWVzKG9iaikpIHtcbiAgICBpZiAodHlwZW9mIHYgPT09ICdvYmplY3QnKSB7XG4gICAgICBvdXRwdXQucHVzaChgLSAke2t9OmApXG4gICAgICBvdXRwdXQucHVzaCguLi5yRGlzdGlsbE9iamVjdCh2KS5tYXAoKGxpbmUpID0+IGAgICR7bGluZX1gKSlcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB2ID09PSAnc3RyaW5nJykge1xuICAgICAgb3V0cHV0LnB1c2goYC0gJHtrLnJlcGxhY2UoJ1xcbicsICcvJyl9OiAke3YucmVwbGFjZSgnXFxuJywgJy8nKX1gKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBvdXRwdXRcbn1cblxuZnVuY3Rpb24gZ2V0QnJhbmNoZXNUYWJsZVRpdGxlKHRhYmxlOiBIVE1MVGFibGVFbGVtZW50KSB7XG4gIGNvbnN0IGhvbGRlclNlbGVjdG9yID0gJzpoYXMoLlRhYmxlVGl0bGUpLCA6aGFzKC5UYWJOYXYtaXRlbS5zZWxlY3RlZCdcbiAgY29uc3QgdGl0bGVTZWxlY3RvciA9ICcuVGFibGVUaXRsZSwgLlRhYk5hdi1pdGVtLnNlbGVjdGVkJ1xuXG4gIGNvbnN0IHRpdGxlSG9sZGVyID0gdGFibGUuY2xvc2VzdChob2xkZXJTZWxlY3RvcilcbiAgY29uc3QgdGFibGVUaXRsZSA9IHRpdGxlSG9sZGVyPy5xdWVyeVNlbGVjdG9yKHRpdGxlU2VsZWN0b3IpPy50ZXh0Q29udGVudFxuXG4gIGlmICh0YWJsZVRpdGxlKSB7XG4gICAgcmV0dXJuIHRhYmxlVGl0bGUudHJpbSgpXG4gIH1cblxuICByZXR1cm4gdGFibGUuZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsbGVkYnknKVxufVxuIiwiLyogQ29weXJpZ2h0IChjKSAyMDI0IFRoZSBCcmF2ZSBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBmaWxlLFxuICogWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHBzOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uICovXG5cbmV4cG9ydCBlbnVtIFN1cHBvcnRlZFBhZ2Uge1xuICBPUkcgPSAnb3JnJyxcbiAgUkVQTyA9ICdyZXBvJyxcbiAgUFVMTF9SRVFVRVNUUyA9ICdwdWxsX3JlcXVlc3RzJyxcbiAgUFVMTF9SRVFVRVNUID0gJ3B1bGxfcmVxdWVzdCcsXG4gIEJSQU5DSEVTID0gJ2JyYW5jaGVzJyxcbiAgUFJPRklMRSA9ICdwcm9maWxlJyxcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEdldFBhZ2VUeXBlKGRvY3VtZW50OiBEb2N1bWVudCk6IFN1cHBvcnRlZFBhZ2UgfCBudWxsIHtcbiAgaWYgKGlzT3JnUGFnZShkb2N1bWVudCkpIHtcbiAgICByZXR1cm4gU3VwcG9ydGVkUGFnZS5PUkdcbiAgfSBlbHNlIGlmIChpc1JlcG9QYWdlKGRvY3VtZW50KSkge1xuICAgIHJldHVybiBTdXBwb3J0ZWRQYWdlLlJFUE9cbiAgfSBlbHNlIGlmIChpc1B1bGxSZXF1ZXN0c1BhZ2UoZG9jdW1lbnQpKSB7XG4gICAgcmV0dXJuIFN1cHBvcnRlZFBhZ2UuUFVMTF9SRVFVRVNUU1xuICB9IGVsc2UgaWYgKGlzUHVsbFJlcXVlc3RQYWdlKGRvY3VtZW50KSkge1xuICAgIHJldHVybiBTdXBwb3J0ZWRQYWdlLlBVTExfUkVRVUVTVFxuICB9IGVsc2UgaWYgKGlzQnJhbmNoZXNQYWdlKGRvY3VtZW50KSkge1xuICAgIHJldHVybiBTdXBwb3J0ZWRQYWdlLkJSQU5DSEVTXG4gIH0gZWxzZSBpZiAoaXNQcm9maWxlUGFnZShkb2N1bWVudCkpIHtcbiAgICByZXR1cm4gU3VwcG9ydGVkUGFnZS5QUk9GSUxFXG4gIH1cblxuICByZXR1cm4gbnVsbFxufVxuXG5mdW5jdGlvbiBpc09yZ1BhZ2UoZG9jdW1lbnQ6IERvY3VtZW50KSB7XG4gIGNvbnN0IGtleSA9ICdpdGVtdHlwZSdcbiAgY29uc3QgdmFsID0gJ09yZ2FuaXphdGlvbidcbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFske2tleX1dYCk/LmdldEF0dHJpYnV0ZShrZXkpPy5lbmRzV2l0aCh2YWwpXG59XG5cbmZ1bmN0aW9uIGlzUmVwb1BhZ2UoZG9jdW1lbnQ6IERvY3VtZW50KSB7XG4gIHJldHVybiBsb2NhdGlvbi5wYXRobmFtZS5zcGxpdCgnLycpLmZpbHRlcihCb29sZWFuKS5sZW5ndGggPT09IDJcbn1cblxuZnVuY3Rpb24gaXNQdWxsUmVxdWVzdHNQYWdlKGRvY3VtZW50OiBEb2N1bWVudCkge1xuICBjb25zdCBwYXRoUGFydHMgPSBsb2NhdGlvbi5wYXRobmFtZS5zcGxpdCgnLycpLmZpbHRlcihCb29sZWFuKVxuICByZXR1cm4gcGF0aFBhcnRzLmxlbmd0aCA9PT0gMyAmJiBwYXRoUGFydHNbMl0gPT09ICdwdWxscydcbn1cblxuZnVuY3Rpb24gaXNQdWxsUmVxdWVzdFBhZ2UoZG9jdW1lbnQ6IERvY3VtZW50KSB7XG4gIGNvbnN0IHBhdGhQYXJ0cyA9IGxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KCcvJykuZmlsdGVyKEJvb2xlYW4pXG4gIHJldHVybiBwYXRoUGFydHMubGVuZ3RoID09PSA0ICYmIC9cXGQrLy50ZXN0KHBhdGhQYXJ0c1szXSlcbn1cblxuZnVuY3Rpb24gaXNCcmFuY2hlc1BhZ2UoZG9jdW1lbnQ6IERvY3VtZW50KSB7XG4gIHJldHVybiAvXFwvYnJhbmNoZXMoXFwvKGFjdGl2ZXxzdGFsZXxhbGwpKT9cXC8/JC8udGVzdChsb2NhdGlvbi5wYXRobmFtZSlcbn1cblxuZnVuY3Rpb24gaXNQcm9maWxlUGFnZShkb2N1bWVudDogRG9jdW1lbnQpIHtcbiAgcmV0dXJuIGRvY3VtZW50LmJvZHkubWF0Y2hlcygnLnBhZ2UtcHJvZmlsZScpXG59XG4iLCIvKiBDb3B5cmlnaHQgKGMpIDIwMjQgVGhlIEJyYXZlIEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIGZpbGUsXG4gKiBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cHM6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy4gKi9cblxuaW1wb3J0IHsgTEVPX0RJU1RJTExBVElPTl9MRVZFTCB9IGZyb20gJy4uL2Rpc3RpbGxhdGlvbidcbmltcG9ydCB7IGRpc3RpbGxCcmFuY2hlcyB9IGZyb20gJy4vYnJhbmNoZXMnXG5pbXBvcnQgeyBHZXRQYWdlVHlwZSwgU3VwcG9ydGVkUGFnZSB9IGZyb20gJy4vdXRpbHMnXG5cbmxldCBfRElTVElMTEFUSU9OX0xFVkVMID0gTEVPX0RJU1RJTExBVElPTl9MRVZFTC5GVUxMXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREaXN0aWxsYXRpb25MZXZlbCgpIHtcbiAgcmV0dXJuIF9ESVNUSUxMQVRJT05fTEVWRUxcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlzdGlsbChsZXZlbCA9IExFT19ESVNUSUxMQVRJT05fTEVWRUwuRlVMTCkge1xuICBfRElTVElMTEFUSU9OX0xFVkVMID0gbGV2ZWxcblxuICBzd2l0Y2ggKEdldFBhZ2VUeXBlKGRvY3VtZW50KSkge1xuICAgIGNhc2UgU3VwcG9ydGVkUGFnZS5CUkFOQ0hFUzpcbiAgICAgIHJldHVybiBkaXN0aWxsQnJhbmNoZXMoKVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gbnVsbFxuICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=