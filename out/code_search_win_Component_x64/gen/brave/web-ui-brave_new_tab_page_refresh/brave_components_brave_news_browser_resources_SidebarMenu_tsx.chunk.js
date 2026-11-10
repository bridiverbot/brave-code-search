export const __webpack_esm_id__ = "brave_components_brave_news_browser_resources_SidebarMenu_tsx";
export const __webpack_esm_ids__ = ["brave_components_brave_news_browser_resources_SidebarMenu_tsx"];
export const __webpack_esm_modules__ = {

/***/ "../../../brave/components/brave_news/browser/resources/SidebarMenu.tsx"
/*!*****************************************************************!*\
  !*** ./components/brave_news/browser/resources/SidebarMenu.tsx ***!
  \*****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SidebarMenu)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "../../../brave/node_modules/.pnpm/styled-components@6.4.3_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var _FeedNavigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FeedNavigation */ "../../../brave/components/brave_news/browser/resources/FeedNavigation.tsx");
/* harmony import */ var _SettingsButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SettingsButton */ "../../../brave/components/brave_news/browser/resources/SettingsButton.tsx");
/* harmony import */ var _brave_leo_react_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @brave/leo/react/icon */ "../../../brave/node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/react/icon.js");
// Copyright (c) 2024 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.





const Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].dialog.withConfig({ displayName: "Container", componentId: "sc-15c7nj3" }) `
  top: var(--bn-top-bar-height);
  height: calc(100vh - var(--bn-top-bar-height));

  overflow: hidden;

  margin-left: 0;
  margin-top: 0;
  padding: 0;

  position: fixed;
  display: flex;

  transition: transform 0.2s ease-in-out;
  transform: translateX(-100%);

  background: var(--bn-glass-card);
  backdrop-filter: blur(64px);
  border: none;
  outline: none;

  &[open] {
    transform: translateX(0);
  }

  &> div {
    background: unset;
  }
`;
function SidebarMenu() {
    const dialogRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_SettingsButton__WEBPACK_IMPORTED_MODULE_3__["default"], { onClick: () => { var _a; return (_a = dialogRef.current) === null || _a === void 0 ? void 0 : _a.showModal(); } },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_brave_leo_react_icon__WEBPACK_IMPORTED_MODULE_4__["default"], { name: "hamburger-menu" }),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(Container, { ref: dialogRef, onClick: e => {
                // Close the menu on click outside.
                const bounds = e.currentTarget.getBoundingClientRect();
                if (e.clientX < bounds.x || e.clientY < bounds.y || e.clientX > bounds.right || e.clientY > bounds.bottom) {
                    e.currentTarget.close();
                }
            } },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_FeedNavigation__WEBPACK_IMPORTED_MODULE_2__["default"], null)));
}


/***/ }

};

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJhdmVfY29tcG9uZW50c19icmF2ZV9uZXdzX2Jyb3dzZXJfcmVzb3VyY2VzX1NpZGViYXJNZW51X3RzeC5jaHVuay5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZEQUE2RDtBQUM3RCxzRUFBc0U7QUFDdEUsNEVBQTRFO0FBQzVFLHNEQUFzRDtBQUV2QjtBQUNRO0FBQ087QUFDQTtBQUNMO0FBRXpDLE1BQU0sU0FBUyxHQUFHLHlEQUFNLENBQUMsTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQTRCOUI7QUFFYyxTQUFTLFdBQVc7SUFDakMsTUFBTSxTQUFTLEdBQUcseUNBQVksQ0FBb0IsSUFBSSxDQUFDO0lBQ3ZELE9BQU8saURBQUMsdURBQWMsSUFBQyxPQUFPLEVBQUUsR0FBRyxFQUFFLFdBQUMsc0JBQVMsQ0FBQyxPQUFPLDBDQUFFLFNBQVMsRUFBRTtRQUNsRSxpREFBQyw2REFBSSxJQUFDLElBQUksRUFBQyxnQkFBZ0IsR0FBRztRQUM5QixpREFBQyxTQUFTLElBQUMsR0FBRyxFQUFFLFNBQWdCLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQyxFQUFFO2dCQUM3QyxtQ0FBbUM7Z0JBQ25DLE1BQU0sTUFBTSxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUMscUJBQXFCLEVBQUU7Z0JBQ3RELElBQUksQ0FBQyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7b0JBQzFHLENBQUMsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFO2dCQUN6QixDQUFDO1lBQ0gsQ0FBQztZQUNDLGlEQUFDLHVEQUFjLE9BQUcsQ0FDUixDQUNHO0FBQ25CLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9icmF2ZS1jb3JlLy4vY29tcG9uZW50cy9icmF2ZV9uZXdzL2Jyb3dzZXIvcmVzb3VyY2VzL1NpZGViYXJNZW51LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjQgVGhlIEJyYXZlIEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4vLyBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIGZpbGUsXG4vLyBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cHM6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy5cblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgRmVlZE5hdmlnYXRpb24gZnJvbSAnLi9GZWVkTmF2aWdhdGlvbic7XG5pbXBvcnQgU2V0dGluZ3NCdXR0b24gZnJvbSAnLi9TZXR0aW5nc0J1dHRvbic7XG5pbXBvcnQgSWNvbiBmcm9tICdAYnJhdmUvbGVvL3JlYWN0L2ljb24nO1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGlhbG9nYFxuICB0b3A6IHZhcigtLWJuLXRvcC1iYXItaGVpZ2h0KTtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gdmFyKC0tYm4tdG9wLWJhci1oZWlnaHQpKTtcblxuICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBtYXJnaW4tdG9wOiAwO1xuICBwYWRkaW5nOiAwO1xuXG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgZGlzcGxheTogZmxleDtcblxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlLWluLW91dDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcblxuICBiYWNrZ3JvdW5kOiB2YXIoLS1ibi1nbGFzcy1jYXJkKTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDY0cHgpO1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG5cbiAgJltvcGVuXSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICB9XG5cbiAgJj4gZGl2IHtcbiAgICBiYWNrZ3JvdW5kOiB1bnNldDtcbiAgfVxuYFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaWRlYmFyTWVudSgpIHtcbiAgY29uc3QgZGlhbG9nUmVmID0gUmVhY3QudXNlUmVmPEhUTUxEaWFsb2dFbGVtZW50PihudWxsKVxuICByZXR1cm4gPFNldHRpbmdzQnV0dG9uIG9uQ2xpY2s9eygpID0+IGRpYWxvZ1JlZi5jdXJyZW50Py5zaG93TW9kYWwoKX0+XG4gICAgPEljb24gbmFtZT1cImhhbWJ1cmdlci1tZW51XCIgLz5cbiAgICA8Q29udGFpbmVyIHJlZj17ZGlhbG9nUmVmIGFzIGFueX0gb25DbGljaz17ZSA9PiB7XG4gICAgICAvLyBDbG9zZSB0aGUgbWVudSBvbiBjbGljayBvdXRzaWRlLlxuICAgICAgY29uc3QgYm91bmRzID0gZS5jdXJyZW50VGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICBpZiAoZS5jbGllbnRYIDwgYm91bmRzLnggfHwgZS5jbGllbnRZIDwgYm91bmRzLnkgfHwgZS5jbGllbnRYID4gYm91bmRzLnJpZ2h0IHx8IGUuY2xpZW50WSA+IGJvdW5kcy5ib3R0b20pIHtcbiAgICAgICAgZS5jdXJyZW50VGFyZ2V0LmNsb3NlKClcbiAgICAgIH1cbiAgICB9fT5cbiAgICAgIDxGZWVkTmF2aWdhdGlvbiAvPlxuICAgIDwvQ29udGFpbmVyPlxuICA8L1NldHRpbmdzQnV0dG9uPlxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9