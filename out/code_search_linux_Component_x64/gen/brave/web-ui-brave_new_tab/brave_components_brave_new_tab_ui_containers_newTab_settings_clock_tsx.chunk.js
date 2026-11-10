export const __webpack_esm_id__ = "brave_components_brave_new_tab_ui_containers_newTab_settings_clock_tsx";
export const __webpack_esm_ids__ = ["brave_components_brave_new_tab_ui_containers_newTab_settings_clock_tsx"];
export const __webpack_esm_modules__ = {

/***/ "../../../brave/components/brave_new_tab_ui/containers/newTab/settings/clock.tsx"
/*!**************************************************************************!*\
  !*** ./components/brave_new_tab_ui/containers/newTab/settings/clock.tsx ***!
  \**************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_default__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/default */ "../../../brave/components/brave_new_tab_ui/components/default/index.ts");
/* harmony import */ var _brave_leo_react_toggle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @brave/leo/react/toggle */ "../../../brave/node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/react/toggle.js");
/* harmony import */ var _brave_leo_react_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @brave/leo/react/dropdown */ "../../../brave/node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/react/dropdown.js");
/* harmony import */ var _common_locale__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../common/locale */ "../../../brave/components/common/locale.ts");
/* harmony import */ var _hooks_usePref__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../hooks/usePref */ "../../../brave/components/brave_new_tab_ui/hooks/usePref.ts");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "../../../brave/node_modules/.pnpm/styled-components@6.4.3_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/styled-components/dist/styled-components.esm.js");
// Copyright (c) 2020 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.

// Components



// Utils

// Types


const StyledDropdown = (0,styled_components__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_brave_leo_react_dropdown__WEBPACK_IMPORTED_MODULE_3__["default"])).withConfig({ displayName: "StyledDropdown", componentId: "sc-1yvsol2" }) `
  display: block;
  width: 220px;
`;
function ClockSettings() {
    const [clockFormat, setClockFormat] = (0,_hooks_usePref__WEBPACK_IMPORTED_MODULE_5__.useNewTabPref)('clockFormat');
    const [showClock, setShowClock] = (0,_hooks_usePref__WEBPACK_IMPORTED_MODULE_5__.useNewTabPref)('showClock');
    const dateFormat = new Intl.DateTimeFormat();
    const dateFormatOptions = dateFormat && dateFormat.resolvedOptions();
    const defaultClockFormatText = (0,_common_locale__WEBPACK_IMPORTED_MODULE_4__.getLocale)('clockFormatDefault') + (dateFormatOptions && dateFormatOptions.locale
        ? ` (${dateFormatOptions.locale})`
        : '');
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_default__WEBPACK_IMPORTED_MODULE_1__.SettingsRow, null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_default__WEBPACK_IMPORTED_MODULE_1__.SettingsText, null, (0,_common_locale__WEBPACK_IMPORTED_MODULE_4__.getLocale)('showClock')),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_brave_leo_react_toggle__WEBPACK_IMPORTED_MODULE_2__["default"], { onChange: () => setShowClock(!showClock), checked: showClock, size: 'small' })),
        showClock && react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_default__WEBPACK_IMPORTED_MODULE_1__.SettingsRow, null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_default__WEBPACK_IMPORTED_MODULE_1__.SettingsText, null, (0,_common_locale__WEBPACK_IMPORTED_MODULE_4__.getLocale)('clockFormat')),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(StyledDropdown, { value: clockFormat, onChange: e => setClockFormat(e.value), positionStrategy: 'fixed' },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { slot: "value" }, clockFormat
                    ? (0,_common_locale__WEBPACK_IMPORTED_MODULE_4__.getLocale)('clockFormat' + clockFormat)
                    : defaultClockFormatText),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("leo-option", { value: '' }, defaultClockFormatText),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("leo-option", { value: '12' }, (0,_common_locale__WEBPACK_IMPORTED_MODULE_4__.getLocale)('clockFormat12')),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("leo-option", { value: '24' }, (0,_common_locale__WEBPACK_IMPORTED_MODULE_4__.getLocale)('clockFormat24')))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ClockSettings);


/***/ }

};

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJhdmVfY29tcG9uZW50c19icmF2ZV9uZXdfdGFiX3VpX2NvbnRhaW5lcnNfbmV3VGFiX3NldHRpbmdzX2Nsb2NrX3RzeC5jaHVuay5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkRBQTZEO0FBQzdELHNFQUFzRTtBQUN0RSw0RUFBNEU7QUFDNUUsc0RBQXNEO0FBRXhCO0FBRTlCLGFBQWE7QUFJdUI7QUFDUTtBQUNJO0FBRWhELFFBQVE7QUFDNkM7QUFFckQsUUFBUTtBQUM4QztBQUNoQjtBQUV0QyxNQUFNLGNBQWMsR0FBRyw2REFBTSxDQUFDLHFFQUFRLENBQUM7OztDQUd0QztBQUVELFNBQVMsYUFBYTtJQUNwQixNQUFNLENBQUMsV0FBVyxFQUFFLGNBQWMsQ0FBQyxHQUFHLDZEQUFhLENBQUMsYUFBYSxDQUFDO0lBQ2xFLE1BQU0sQ0FBQyxTQUFTLEVBQUUsWUFBWSxDQUFDLEdBQUcsNkRBQWEsQ0FBQyxXQUFXLENBQUM7SUFFNUQsTUFBTSxVQUFVLEdBQUcsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFO0lBQzVDLE1BQU0saUJBQWlCLEdBQUcsVUFBVSxJQUFJLFVBQVUsQ0FBQyxlQUFlLEVBQUU7SUFDcEUsTUFBTSxzQkFBc0IsR0FBRyx5REFBUyxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsSUFBSSxpQkFBaUIsQ0FBQyxNQUFNO1FBQzdHLENBQUMsQ0FBQyxLQUFLLGlCQUFpQixDQUFDLE1BQU0sR0FBRztRQUNsQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBRVAsT0FBTztRQUNMLGlEQUFDLDREQUFXO1lBQ1YsaURBQUMsNkRBQVksUUFBRSx5REFBUyxDQUFDLFdBQVcsQ0FBQyxDQUFnQjtZQUNyRCxpREFBQywrREFBTSxJQUNMLFFBQVEsRUFBRSxHQUFHLEVBQUUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxTQUFTLENBQUMsRUFDeEMsT0FBTyxFQUFFLFNBQVMsRUFDbEIsSUFBSSxFQUFDLE9BQU8sR0FDWixDQUNVO1FBQ2IsU0FBUyxJQUFJLGlEQUFDLDREQUFXO1lBQ3hCLGlEQUFDLDZEQUFZLFFBQUUseURBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBZ0I7WUFDdkQsaURBQUMsY0FBYyxJQUFDLEtBQUssRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxLQUFNLENBQUMsRUFBRSxnQkFBZ0IsRUFBQyxPQUFPO2dCQUNuRywyREFBTSxJQUFJLEVBQUMsT0FBTyxJQUNmLFdBQVc7b0JBQ1YsQ0FBQyxDQUFDLHlEQUFTLENBQUMsYUFBYSxHQUFHLFdBQVcsQ0FBQztvQkFDeEMsQ0FBQyxDQUFDLHNCQUFzQixDQUNyQjtnQkFDUCxpRUFBWSxLQUFLLEVBQUMsRUFBRSxJQUFFLHNCQUFzQixDQUFjO2dCQUMxRCxpRUFBWSxLQUFLLEVBQUMsSUFBSSxJQUFFLHlEQUFTLENBQUMsZUFBZSxDQUFDLENBQWM7Z0JBQ2hFLGlFQUFZLEtBQUssRUFBQyxJQUFJLElBQUUseURBQVMsQ0FBQyxlQUFlLENBQUMsQ0FBYyxDQUNqRCxDQUNMLENBQ1Y7QUFDUixDQUFDO0FBRUQsaUVBQWUsYUFBYSIsInNvdXJjZXMiOlsid2VicGFjazovL2JyYXZlLWNvcmUvLi9jb21wb25lbnRzL2JyYXZlX25ld190YWJfdWkvY29udGFpbmVycy9uZXdUYWIvc2V0dGluZ3MvY2xvY2sudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMCBUaGUgQnJhdmUgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbi8vIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXMgZmlsZSxcbi8vIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwczovL21vemlsbGEub3JnL01QTC8yLjAvLlxuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcblxuLy8gQ29tcG9uZW50c1xuaW1wb3J0IHtcbiAgU2V0dGluZ3NSb3csXG4gIFNldHRpbmdzVGV4dFxufSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2RlZmF1bHQnXG5pbXBvcnQgVG9nZ2xlIGZyb20gJ0BicmF2ZS9sZW8vcmVhY3QvdG9nZ2xlJ1xuaW1wb3J0IERyb3Bkb3duIGZyb20gJ0BicmF2ZS9sZW8vcmVhY3QvZHJvcGRvd24nXG5cbi8vIFV0aWxzXG5pbXBvcnQgeyBnZXRMb2NhbGUgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vbG9jYWxlJ1xuXG4vLyBUeXBlc1xuaW1wb3J0IHsgdXNlTmV3VGFiUHJlZiB9IGZyb20gJy4uLy4uLy4uL2hvb2tzL3VzZVByZWYnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5jb25zdCBTdHlsZWREcm9wZG93biA9IHN0eWxlZChEcm9wZG93bilgXG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMjIwcHg7XG5gXG5cbmZ1bmN0aW9uIENsb2NrU2V0dGluZ3MoKSB7XG4gIGNvbnN0IFtjbG9ja0Zvcm1hdCwgc2V0Q2xvY2tGb3JtYXRdID0gdXNlTmV3VGFiUHJlZignY2xvY2tGb3JtYXQnKVxuICBjb25zdCBbc2hvd0Nsb2NrLCBzZXRTaG93Q2xvY2tdID0gdXNlTmV3VGFiUHJlZignc2hvd0Nsb2NrJylcblxuICBjb25zdCBkYXRlRm9ybWF0ID0gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQoKVxuICBjb25zdCBkYXRlRm9ybWF0T3B0aW9ucyA9IGRhdGVGb3JtYXQgJiYgZGF0ZUZvcm1hdC5yZXNvbHZlZE9wdGlvbnMoKVxuICBjb25zdCBkZWZhdWx0Q2xvY2tGb3JtYXRUZXh0ID0gZ2V0TG9jYWxlKCdjbG9ja0Zvcm1hdERlZmF1bHQnKSArIChkYXRlRm9ybWF0T3B0aW9ucyAmJiBkYXRlRm9ybWF0T3B0aW9ucy5sb2NhbGVcbiAgICA/IGAgKCR7ZGF0ZUZvcm1hdE9wdGlvbnMubG9jYWxlfSlgXG4gICAgOiAnJylcblxuICByZXR1cm4gPGRpdj5cbiAgICA8U2V0dGluZ3NSb3c+XG4gICAgICA8U2V0dGluZ3NUZXh0PntnZXRMb2NhbGUoJ3Nob3dDbG9jaycpfTwvU2V0dGluZ3NUZXh0PlxuICAgICAgPFRvZ2dsZVxuICAgICAgICBvbkNoYW5nZT17KCkgPT4gc2V0U2hvd0Nsb2NrKCFzaG93Q2xvY2spfVxuICAgICAgICBjaGVja2VkPXtzaG93Q2xvY2t9XG4gICAgICAgIHNpemU9J3NtYWxsJ1xuICAgICAgLz5cbiAgICA8L1NldHRpbmdzUm93PlxuICAgIHtzaG93Q2xvY2sgJiYgPFNldHRpbmdzUm93PlxuICAgICAgPFNldHRpbmdzVGV4dD57Z2V0TG9jYWxlKCdjbG9ja0Zvcm1hdCcpfTwvU2V0dGluZ3NUZXh0PlxuICAgICAgPFN0eWxlZERyb3Bkb3duIHZhbHVlPXtjbG9ja0Zvcm1hdH0gb25DaGFuZ2U9e2UgPT4gc2V0Q2xvY2tGb3JtYXQoZS52YWx1ZSEpfSBwb3NpdGlvblN0cmF0ZWd5PSdmaXhlZCc+XG4gICAgICAgIDxzcGFuIHNsb3Q9XCJ2YWx1ZVwiPlxuICAgICAgICAgIHtjbG9ja0Zvcm1hdFxuICAgICAgICAgICAgPyBnZXRMb2NhbGUoJ2Nsb2NrRm9ybWF0JyArIGNsb2NrRm9ybWF0KVxuICAgICAgICAgICAgOiBkZWZhdWx0Q2xvY2tGb3JtYXRUZXh0fVxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxsZW8tb3B0aW9uIHZhbHVlPScnPntkZWZhdWx0Q2xvY2tGb3JtYXRUZXh0fTwvbGVvLW9wdGlvbj5cbiAgICAgICAgPGxlby1vcHRpb24gdmFsdWU9JzEyJz57Z2V0TG9jYWxlKCdjbG9ja0Zvcm1hdDEyJyl9PC9sZW8tb3B0aW9uPlxuICAgICAgICA8bGVvLW9wdGlvbiB2YWx1ZT0nMjQnPntnZXRMb2NhbGUoJ2Nsb2NrRm9ybWF0MjQnKX08L2xlby1vcHRpb24+XG4gICAgICA8L1N0eWxlZERyb3Bkb3duPlxuICAgIDwvU2V0dGluZ3NSb3c+fVxuICA8L2Rpdj5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2xvY2tTZXR0aW5nc1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9