export const __webpack_esm_id__ = "brave_components_brave_new_tab_ui_containers_newTab_settings_braveStats_tsx";
export const __webpack_esm_ids__ = ["brave_components_brave_new_tab_ui_containers_newTab_settings_braveStats_tsx"];
export const __webpack_esm_modules__ = {

/***/ "../../../brave/components/brave_new_tab_ui/containers/newTab/settings/braveStats.tsx"
/*!*******************************************************************************!*\
  !*** ./components/brave_new_tab_ui/containers/newTab/settings/braveStats.tsx ***!
  \*******************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BraveStatsSettings)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_default__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/default */ "../../../brave/components/brave_new_tab_ui/components/default/index.ts");
/* harmony import */ var _brave_leo_react_toggle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @brave/leo/react/toggle */ "../../../brave/node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/react/toggle.js");
/* harmony import */ var _common_locale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../common/locale */ "../../../brave/components/common/locale.ts");
/* harmony import */ var _hooks_usePref__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../hooks/usePref */ "../../../brave/components/brave_new_tab_ui/hooks/usePref.ts");
// Copyright (c) 2020 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.





function BraveStatsSettings() {
    const [showStats, setShowStats] = (0,_hooks_usePref__WEBPACK_IMPORTED_MODULE_4__.useNewTabPref)('showStats');
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_default__WEBPACK_IMPORTED_MODULE_1__.SettingsRow, null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_default__WEBPACK_IMPORTED_MODULE_1__.SettingsText, null, (0,_common_locale__WEBPACK_IMPORTED_MODULE_3__.getLocale)('showBraveStats')),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_brave_leo_react_toggle__WEBPACK_IMPORTED_MODULE_2__["default"], { onChange: () => setShowStats(!showStats), checked: showStats, size: 'small' })));
}


/***/ }

};

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJhdmVfY29tcG9uZW50c19icmF2ZV9uZXdfdGFiX3VpX2NvbnRhaW5lcnNfbmV3VGFiX3NldHRpbmdzX2JyYXZlU3RhdHNfdHN4LmNodW5rLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkRBQTZEO0FBQzdELHNFQUFzRTtBQUN0RSw0RUFBNEU7QUFDNUUsc0RBQXNEO0FBRXhCO0FBS007QUFDUTtBQUVTO0FBQ0M7QUFFdkMsU0FBUyxrQkFBa0I7SUFDeEMsTUFBTSxDQUFDLFNBQVMsRUFBRSxZQUFZLENBQUMsR0FBRyw2REFBYSxDQUFDLFdBQVcsQ0FBQztJQUM1RCxPQUFPO1FBQ0wsaURBQUMsNERBQVc7WUFDVixpREFBQyw2REFBWSxRQUFFLHlEQUFTLENBQUMsZ0JBQWdCLENBQUMsQ0FBZ0I7WUFDMUQsaURBQUMsK0RBQU0sSUFDTCxRQUFRLEVBQUUsR0FBRyxFQUFFLENBQUMsWUFBWSxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQ3hDLE9BQU8sRUFBRSxTQUFTLEVBQ2xCLElBQUksRUFBQyxPQUFPLEdBQ1osQ0FDVSxDQUNWO0FBQ1IsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JyYXZlLWNvcmUvLi9jb21wb25lbnRzL2JyYXZlX25ld190YWJfdWkvY29udGFpbmVycy9uZXdUYWIvc2V0dGluZ3MvYnJhdmVTdGF0cy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFRoZSBCcmF2ZSBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuLy8gTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBmaWxlLFxuLy8gWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHBzOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uXG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQge1xuICBTZXR0aW5nc1JvdyxcbiAgU2V0dGluZ3NUZXh0XG59IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvZGVmYXVsdCdcbmltcG9ydCBUb2dnbGUgZnJvbSAnQGJyYXZlL2xlby9yZWFjdC90b2dnbGUnXG5cbmltcG9ydCB7IGdldExvY2FsZSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9sb2NhbGUnXG5pbXBvcnQgeyB1c2VOZXdUYWJQcmVmIH0gZnJvbSAnLi4vLi4vLi4vaG9va3MvdXNlUHJlZidcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQnJhdmVTdGF0c1NldHRpbmdzICgpIHtcbiAgY29uc3QgW3Nob3dTdGF0cywgc2V0U2hvd1N0YXRzXSA9IHVzZU5ld1RhYlByZWYoJ3Nob3dTdGF0cycpXG4gIHJldHVybiA8ZGl2PlxuICAgIDxTZXR0aW5nc1Jvdz5cbiAgICAgIDxTZXR0aW5nc1RleHQ+e2dldExvY2FsZSgnc2hvd0JyYXZlU3RhdHMnKX08L1NldHRpbmdzVGV4dD5cbiAgICAgIDxUb2dnbGVcbiAgICAgICAgb25DaGFuZ2U9eygpID0+IHNldFNob3dTdGF0cyghc2hvd1N0YXRzKX1cbiAgICAgICAgY2hlY2tlZD17c2hvd1N0YXRzfVxuICAgICAgICBzaXplPSdzbWFsbCdcbiAgICAgIC8+XG4gICAgPC9TZXR0aW5nc1Jvdz5cbiAgPC9kaXY+XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=