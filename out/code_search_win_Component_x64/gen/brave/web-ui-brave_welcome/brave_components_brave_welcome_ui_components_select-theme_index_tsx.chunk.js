export const __webpack_esm_id__ = "brave_components_brave_welcome_ui_components_select-theme_index_tsx";
export const __webpack_esm_ids__ = ["brave_components_brave_welcome_ui_components_select-theme_index_tsx"];
export const __webpack_esm_modules__ = {

/***/ "../../../brave/components/brave_welcome_ui/components/select-theme/index.tsx"
/*!***********************************************************************************!*\
  !*** ./components/brave_welcome_ui/components/select-theme/index.tsx + 1 modules ***!
  \***********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ select_theme)
});
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external ["//resources/brave/react.bundle.js","React"]
var react_bundle_js_React_ = __webpack_require__("react");
// EXTERNAL MODULE: ./node_modules/.pnpm/styled-components@6.4.3_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/styled-components/dist/styled-components.esm.js + 7 modules
var styled_components_esm = __webpack_require__("../../../brave/node_modules/.pnpm/styled-components@6.4.3_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/styled-components/dist/styled-components.esm.js");
;// ./components/brave_welcome_ui/components/select-theme/style.ts
// Copyright (c) 2022 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.

const Box = styled_components_esm["default"].div.withConfig({ displayName: "Box", componentId: "sc-ghs5ar" }) `
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(15px);
  border-radius: 30px;
  max-width: 800px;
  color: white;
  font-family: ${(p) => p.theme.fontFamily.heading};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .view-header-box {
    display: grid;
    grid-template-columns: 0.2fr 1fr 0.2fr;
    padding: 40px;
    text-align: center;
  }

  .view-details {
    grid-column: 2;
  }

  .view-title {
    font-weight: 600;
    font-size: 36px;
    margin: 0 0 18px 0;
  }

  .view-desc {
    font-weight: 400;
    font-size: 16px;
    margin: 0;
  }

  .view-note {
    font-weight: 400;
    font-size: 16px;
    margin-bottom: 48px;
  }
`;
const ThemeListBox = styled_components_esm["default"].div.withConfig({ displayName: "ThemeListBox", componentId: "sc-x7pgam" }) `
  --background-color: white;
  --text-color: #212529;
  --background-color-light: white;
  --background-color-dark: #495057;

  @media (prefers-color-scheme: dark) {
    --background-color: #1E2029;
    --text-color: white;
    --background-color-light: white;
    --background-color-dark: #495057;
  }

  .theme-list {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 56px;
    grid-gap: 15px;
    flex-wrap: wrap;

    &.is-selected-light {
      --background-color: white;
      --text-color: #212529;
      --background-color-light: white;
      --background-color-dark: #495057;
    }

    &.is-selected-dark {
      --background-color: #1E2029;
      --text-color: white;
      --background-color-light: white;
      --background-color-dark: #495057;
    }
  }

  .theme-item {
    --border-color: transparent;

    background: var(--background-color);
    border-radius: 20px;
    width: 132px;
    height: 155px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: var(--text-color);
    border: 0;
    box-shadow: 0 0 0 4px var(--border-color);
    position: relative;

    &.is-selected {
      --border-color: #737ADE;
    }
  }

  .theme-name {
    font-weight: 400;
    font-size: 14px;
    line-height: 1.2;
    margin: 0;
    min-height: calc(2 * 14px * 1.2); // A min height of 2 lines
  }

  .logo-box {
    display: grid;
    grid-template-rows: 50px 1fr;
    gap: 10px;
    width: 100%;
  }

  .logo {
    width: 48px;
    height: 48px;
    border-radius: 48px;
    background: var(--background-color-light);
    border: 1px solid #C2C4CF;
    position: relative;
    margin: 0 auto;

    &.dark-mode {
      background: var(--background-color-dark);
    }

    &.system-mode {
      &::after {
        content: '';
        position: absolute;
        left: 0;
        width: 40px;
        height: 40px;
        border: 23px solid var(--background-color-dark);
        border-radius: 50%;
        border-bottom-color: transparent;
        border-left-color: transparent;
        transform: rotate(90deg);
      }
    }
  }

  .check-icon-box {
    width: 16px;
    height: 16px;
    position: absolute;
    top: 14px;
    right: 14px;
  }
`;
const ActionBox = styled_components_esm["default"].div.withConfig({ displayName: "ActionBox", componentId: "sc-1dju8p8" }) `
  display: flex;
  grid-gap: 10px;
  margin-bottom: 40px;

  button {
    color: white;
  }
`;

// EXTERNAL MODULE: ./components/common/locale.ts + 1 modules
var locale = __webpack_require__("../../../brave/components/common/locale.ts");
// EXTERNAL MODULE: ./components/common/classnames.ts
var classnames = __webpack_require__("../../../brave/components/common/classnames.ts");
// EXTERNAL MODULE: ./node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/react/button.js + 19 modules
var react_button = __webpack_require__("../../../brave/node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/react/button.js");
// EXTERNAL MODULE: ./components/brave_welcome_ui/state/context.ts
var context = __webpack_require__("../../../brave/components/brave_welcome_ui/state/context.ts");
// EXTERNAL MODULE: ./components/brave_welcome_ui/state/hooks.ts
var hooks = __webpack_require__("../../../brave/components/brave_welcome_ui/state/hooks.ts");
;// ./components/brave_welcome_ui/components/select-theme/index.tsx
// Copyright (c) 2022 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// you can obtain one at https://mozilla.org/MPL/2.0/.







const themeList = [
    { themeType: 'System', title: (0,locale.getLocale)('braveWelcomeSelectThemeSystemLabel') },
    { themeType: 'Light', title: (0,locale.getLocale)('braveWelcomeSelectThemeLightLabel') },
    { themeType: 'Dark', title: (0,locale.getLocale)('braveWelcomeSelectThemeDarkLabel') }
];
function ThemeModeItem(props) {
    const handleClick = () => {
        var _a;
        (_a = props.onChange) === null || _a === void 0 ? void 0 : _a.call(props, props.themeType);
    };
    const buttonClass = (0,classnames["default"])({
        'theme-item': true,
        'is-selected': props.isActive
    });
    const logoBoxClass = (0,classnames["default"])({
        'logo': true,
        'dark-mode': props.themeType === 'Dark',
        'system-mode': props.themeType === 'System'
    });
    return (react_bundle_js_React_.createElement("button", { onClick: handleClick, className: buttonClass },
        react_bundle_js_React_.createElement("i", { className: "check-icon-box" }, props.isActive && (react_bundle_js_React_.createElement("svg", { viewBox: "0 0 16 12", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            react_bundle_js_React_.createElement("path", { d: "M14.9558.9327c-.2259-.2134-.5083-.2667-.7907-.2667s-.5648.16-.7907.3733l-7.06 7.68-3.7276-3.4666c-.4518-.4267-1.186-.4267-1.5814 0-.226.2133-.3389.48-.3389.7466 0 .2667.113.5334.3389.7467l4.5748 4.2667c.1695.2133.4519.32.7907.32h.0565c.3389 0 .6213-.16.7907-.3734l7.8507-8.5333c.3953-.4267.3389-1.12-.113-1.4933Z", fill: "#4C54D2" })))),
        react_bundle_js_React_.createElement("div", { className: "logo-box" },
            react_bundle_js_React_.createElement("div", { className: logoBoxClass }),
            react_bundle_js_React_.createElement("p", { className: "theme-name" }, props.title))));
}
function SelectTheme() {
    const { viewType, setViewType, scenes } = react_bundle_js_React_.useContext(context["default"]);
    const [currentSelectedTheme, setCurrentTheme] = react_bundle_js_React_.useState('System');
    const handleSelectionChange = (themeType) => {
        setCurrentTheme === null || setCurrentTheme === void 0 ? void 0 : setCurrentTheme(themeType);
        chrome.braveTheme.setBraveThemeType(themeType);
    };
    const { forward } = (0,hooks.useViewTypeTransition)(viewType);
    const goForward = () => {
        setViewType(forward);
        scenes === null || scenes === void 0 ? void 0 : scenes.s2.play();
    };
    const handleSkip = () => goForward();
    const handleNext = () => {
        goForward();
    };
    return (react_bundle_js_React_.createElement(Box, null,
        react_bundle_js_React_.createElement("div", { className: "view-header-box" },
            react_bundle_js_React_.createElement("div", { className: "view-header-actions" }),
            react_bundle_js_React_.createElement("div", { className: "view-details" },
                react_bundle_js_React_.createElement("h1", { className: "view-title" }, (0,locale.getLocale)('braveWelcomeSelectThemeLabel')))),
        react_bundle_js_React_.createElement(ThemeListBox, null,
            react_bundle_js_React_.createElement("div", { className: (0,classnames["default"])({
                    'theme-list': true,
                    'is-selected-dark': currentSelectedTheme === 'Dark',
                    'is-selected-light': currentSelectedTheme === 'Light'
                }) }, themeList.map((entry, id) => {
                return (react_bundle_js_React_.createElement(ThemeModeItem, { key: id, themeType: entry.themeType, title: entry.title, isActive: entry.themeType === currentSelectedTheme, onChange: handleSelectionChange }));
            }))),
        react_bundle_js_React_.createElement("div", { className: "view-note" }, (0,locale.getLocale)('braveWelcomeSelectThemeNote')),
        react_bundle_js_React_.createElement(ActionBox, null,
            react_bundle_js_React_.createElement(react_button["default"], { kind: "plain-faint", onClick: handleSkip, size: "large" }, (0,locale.getLocale)('braveWelcomeSkipButtonLabel')),
            react_bundle_js_React_.createElement(react_button["default"], { kind: "filled", onClick: handleNext, size: "large" }, (0,locale.getLocale)('braveWelcomeNextButtonLabel')))));
}
/* harmony default export */ const select_theme = (SelectTheme);


/***/ }

};

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJhdmVfY29tcG9uZW50c19icmF2ZV93ZWxjb21lX3VpX2NvbXBvbmVudHNfc2VsZWN0LXRoZW1lX2luZGV4X3RzeC5jaHVuay5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZEQUE2RDtBQUM3RCxzRUFBc0U7QUFDdEUsNEVBQTRFO0FBQzVFLHNEQUFzRDtBQUVoQjtBQUUvQixNQUFNLEdBQUcsR0FBRyxnQ0FBTSxDQUFDLEdBQUc7Ozs7OztpQkFNWixDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQWtDakQ7QUFFTSxNQUFNLFlBQVksR0FBRyxnQ0FBTSxDQUFDLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQTRHckM7QUFFTSxNQUFNLFNBQVMsR0FBRyxnQ0FBTSxDQUFDLEdBQUc7Ozs7Ozs7O0NBUWxDOzs7Ozs7Ozs7Ozs7O0FDdktELDZEQUE2RDtBQUM3RCxzRUFBc0U7QUFDdEUsNEVBQTRFO0FBQzVFLHNEQUFzRDtBQUV4QjtBQUNGO0FBRWtCO0FBQ0M7QUFDSDtBQUVDO0FBQ1k7QUFTekQsTUFBTSxTQUFTLEdBQUc7SUFDaEIsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxvQkFBUyxDQUFDLG9DQUFvQyxDQUFDLEVBQUU7SUFDL0UsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxvQkFBUyxDQUFDLG1DQUFtQyxDQUFDLEVBQUU7SUFDN0UsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxvQkFBUyxDQUFDLGtDQUFrQyxDQUFDLEVBQUU7Q0FDNUU7QUFFRCxTQUFTLGFBQWEsQ0FBRSxLQUF5QjtJ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QUssRUFDbEIsUUFBUSxFQUFFLEtBQUssQ0FBQyxTQUFTLEtBQUssb0JBQW9CLEVBQ2xELFFBQVEsRUFBRSxxQkFBcUIsR0FDL0IsQ0FDSDtZQUNILENBQUMsQ0FBQyxDQUNFLENBQ1M7UUFDakIsOENBQUssU0FBUyxFQUFDLFdBQVcsSUFBRSxvQkFBUyxDQUFDLDZCQUE2QixDQUFDLENBQU87UUFDM0UscUNBQUMsU0FBVztZQUNWLHFDQUFDLHVCQUFNLElBQ0wsSUFBSSxFQUFDLGFBQWEsRUFDbEIsT0FBTyxFQUFFLFVBQVUsRUFDbkIsSUFBSSxFQUFDLE9BQU8sSUFFWCxvQkFBUyxDQUFDLDZCQUE2QixDQUFDLENBQ2xDO1lBQ1QscUNBQUMsdUJBQU0sSUFDTCxJQUFJLEVBQUMsUUFBUSxFQUNiLE9BQU8sRUFBRSxVQUFVLEVBQ25CLElBQUksRUFBQyxPQUFPLElBRVgsb0JBQVMsQ0FBQyw2QkFBNkIsQ0FBQyxDQUNsQyxDQUNHLENBQ1IsQ0FDVDtBQUNILENBQUM7QUFFRCxtREFBZSxXQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYnJhdmUtY29yZS8uL2NvbXBvbmVudHMvYnJhdmVfd2VsY29tZV91aS9jb21wb25lbnRzL3NlbGVjdC10aGVtZS9zdHlsZS50cyIsIndlYnBhY2s6Ly9icmF2ZS1jb3JlLy4vY29tcG9uZW50cy9icmF2ZV93ZWxjb21lX3VpL2NvbXBvbmVudHMvc2VsZWN0LXRoZW1lL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjIgVGhlIEJyYXZlIEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4vLyBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIGZpbGUsXG4vLyBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cHM6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy5cblxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuZXhwb3J0IGNvbnN0IEJveCA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDE1cHgpO1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBtYXgtd2lkdGg6IDgwMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiAkeyhwKSA9PiBwLnRoZW1lLmZvbnRGYW1pbHkuaGVhZGluZ307XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gIC52aWV3LWhlYWRlci1ib3gge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjJmciAxZnIgMC4yZnI7XG4gICAgcGFkZGluZzogNDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAudmlldy1kZXRhaWxzIHtcbiAgICBncmlkLWNvbHVtbjogMjtcbiAgfVxuXG4gIC52aWV3LXRpdGxlIHtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICBtYXJnaW46IDAgMCAxOHB4IDA7XG4gIH1cblxuICAudmlldy1kZXNjIHtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBtYXJnaW46IDA7XG4gIH1cblxuICAudmlldy1ub3RlIHtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBtYXJnaW4tYm90dG9tOiA0OHB4O1xuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBUaGVtZUxpc3RCb3ggPSBzdHlsZWQuZGl2YFxuICAtLWJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAtLXRleHQtY29sb3I6ICMyMTI1Mjk7XG4gIC0tYmFja2dyb3VuZC1jb2xvci1saWdodDogd2hpdGU7XG4gIC0tYmFja2dyb3VuZC1jb2xvci1kYXJrOiAjNDk1MDU3O1xuXG4gIEBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHtcbiAgICAtLWJhY2tncm91bmQtY29sb3I6ICMxRTIwMjk7XG4gICAgLS10ZXh0LWNvbG9yOiB3aGl0ZTtcbiAgICAtLWJhY2tncm91bmQtY29sb3ItbGlnaHQ6IHdoaXRlO1xuICAgIC0tYmFja2dyb3VuZC1jb2xvci1kYXJrOiAjNDk1MDU3O1xuICB9XG5cbiAgLnRoZW1lLWxpc3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiA1NnB4O1xuICAgIGdyaWQtZ2FwOiAxNXB4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcblxuICAgICYuaXMtc2VsZWN0ZWQtbGlnaHQge1xuICAgICAgLS1iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgIC0tdGV4dC1jb2xvcjogIzIxMjUyOTtcbiAgICAgIC0tYmFja2dyb3VuZC1jb2xvci1saWdodDogd2hpdGU7XG4gICAgICAtLWJhY2tncm91bmQtY29sb3ItZGFyazogIzQ5NTA1NztcbiAgICB9XG5cbiAgICAmLmlzLXNlbGVjdGVkLWRhcmsge1xuICAgICAgLS1iYWNrZ3JvdW5kLWNvbG9yOiAjMUUyMDI5O1xuICAgICAgLS10ZXh0LWNvbG9yOiB3aGl0ZTtcbiAgICAgIC0tYmFja2dyb3VuZC1jb2xvci1saWdodDogd2hpdGU7XG4gICAgICAtLWJhY2tncm91bmQtY29sb3ItZGFyazogIzQ5NTA1NztcbiAgICB9XG4gIH1cblxuICAudGhlbWUtaXRlbSB7XG4gICAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICB3aWR0aDogMTMycHg7XG4gICAgaGVpZ2h0OiAxNTVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XG4gICAgYm9yZGVyOiAwO1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDRweCB2YXIoLS1ib3JkZXItY29sb3IpO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICYuaXMtc2VsZWN0ZWQge1xuICAgICAgLS1ib3JkZXItY29sb3I6ICM3MzdBREU7XG4gICAgfVxuICB9XG5cbiAgLnRoZW1lLW5hbWUge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjI7XG4gICAgbWFyZ2luOiAwO1xuICAgIG1pbi1oZWlnaHQ6IGNhbGMoMiAqIDE0cHggKiAxLjIpOyAvLyBBIG1pbiBoZWlnaHQgb2YgMiBsaW5lc1xuICB9XG5cbiAgLmxvZ28tYm94IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNTBweCAxZnI7XG4gICAgZ2FwOiAxMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLmxvZ28ge1xuICAgIHdpZHRoOiA0OHB4O1xuICAgIGhlaWdodDogNDhweDtcbiAgICBib3JkZXItcmFkaXVzOiA0OHB4O1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtY29sb3ItbGlnaHQpO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNDMkM0Q0Y7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuXG4gICAgJi5kYXJrLW1vZGUge1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1jb2xvci1kYXJrKTtcbiAgICB9XG5cbiAgICAmLnN5c3RlbS1tb2RlIHtcbiAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgYm9yZGVyOiAyM3B4IHNvbGlkIHZhcigtLWJhY2tncm91bmQtY29sb3ItZGFyayk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5jaGVjay1pY29uLWJveCB7XG4gICAgd2lkdGg6IDE2cHg7XG4gICAgaGVpZ2h0OiAxNnB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDE0cHg7XG4gICAgcmlnaHQ6IDE0cHg7XG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IEFjdGlvbkJveCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdyaWQtZ2FwOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuXG4gIGJ1dHRvbiB7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG5gXG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjIgVGhlIEJyYXZlIEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4vLyBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIGZpbGUsXG4vLyB5b3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cHM6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy5cblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgKiBhcyBTIGZyb20gJy4vc3R5bGUnXG5cbmltcG9ydCB7IGdldExvY2FsZSB9IGZyb20gJyR3ZWItY29tbW9uL2xvY2FsZSdcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJyR3ZWItY29tbW9uL2NsYXNzbmFtZXMnXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BicmF2ZS9sZW8vcmVhY3QvYnV0dG9uJ1xuXG5pbXBvcnQgRGF0YUNvbnRleHQgZnJvbSAnLi4vLi4vc3RhdGUvY29udGV4dCdcbmltcG9ydCB7IHVzZVZpZXdUeXBlVHJhbnNpdGlvbiB9IGZyb20gJy4uLy4uL3N0YXRlL2hvb2tzJ1xuXG5pbnRlcmZhY2UgVGhlbWVNb2RlSXRlbVByb3BzIHtcbiAgdGhlbWVUeXBlOiBjaHJvbWUuYnJhdmVUaGVtZS5UaGVtZVR5cGVcbiAgdGl0bGU6IHN0cmluZ1xuICBpc0FjdGl2ZTogYm9vbGVhblxuICBvbkNoYW5nZT86ICh0aGVtZVR5cGU6IGNocm9tZS5icmF2ZVRoZW1lLlRoZW1lVHlwZSkgPT4gdm9pZFxufVxuXG5jb25zdCB0aGVtZUxpc3QgPSBbXG4gIHsgdGhlbWVUeXBlOiAnU3lzdGVtJywgdGl0bGU6IGdldExvY2FsZSgnYnJhdmVXZWxjb21lU2VsZWN0VGhlbWVTeXN0ZW1MYWJlbCcpIH0sXG4gIHsgdGhlbWVUeXBlOiAnTGlnaHQnLCB0aXRsZTogZ2V0TG9jYWxlKCdicmF2ZVdlbGNvbWVTZWxlY3RUaGVtZUxpZ2h0TGFiZWwnKSB9LFxuICB7IHRoZW1lVHlwZTogJ0RhcmsnLCB0aXRsZTogZ2V0TG9jYWxlKCdicmF2ZVdlbGNvbWVTZWxlY3RUaGVtZURhcmtMYWJlbCcpIH1cbl1cblxuZnVuY3Rpb24gVGhlbWVNb2RlSXRlbSAocHJvcHM6IFRoZW1lTW9kZUl0ZW1Qcm9wcykge1xuICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcbiAgICBwcm9wcy5vbkNoYW5nZT8uKHByb3BzLnRoZW1lVHlwZSlcbiAgfVxuXG4gIGNvbnN0IGJ1dHRvbkNsYXNzID0gY2xhc3NuYW1lcyh7XG4gICAgJ3RoZW1lLWl0ZW0nOiB0cnVlLFxuICAgICdpcy1zZWxlY3RlZCc6IHByb3BzLmlzQWN0aXZlXG4gIH0pXG5cbiAgY29uc3QgbG9nb0JveENsYXNzID0gY2xhc3NuYW1lcyh7XG4gICAgJ2xvZ28nOiB0cnVlLFxuICAgICdkYXJrLW1vZGUnOiBwcm9wcy50aGVtZVR5cGUgPT09ICdEYXJrJyxcbiAgICAnc3lzdGVtLW1vZGUnOiBwcm9wcy50aGVtZVR5cGUgPT09ICdTeXN0ZW0nXG4gIH0pXG5cbiAgcmV0dXJuIChcbiAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfVxuICAgICAgY2xhc3NOYW1lPXtidXR0b25DbGFzc31cbiAgICA+XG4gICAgICA8aSBjbGFzc05hbWU9XCJjaGVjay1pY29uLWJveFwiPlxuICAgICAgICB7cHJvcHMuaXNBY3RpdmUgJiYgKFxuICAgICAgICAgIDxzdmcgdmlld0JveD1cIjAgMCAxNiAxMlwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICAgICAgPHBhdGggZD1cIk0xNC45NTU4LjkzMjdjLS4yMjU5LS4yMTM0LS41MDgzLS4yNjY3LS43OTA3LS4yNjY3cy0uNTY0OC4xNi0uNzkwNy4zNzMzbC03LjA2IDcuNjgtMy43Mjc2LTMuNDY2NmMtLjQ1MTgtLjQyNjctMS4xODYtLjQyNjctMS41ODE0IDAtLjIyNi4yMTMzLS4zMzg5LjQ4LS4zMzg5Ljc0NjYgMCAuMjY2Ny4xMTMuNTMzNC4zMzg5Ljc0NjdsNC41NzQ4IDQuMjY2N2MuMTY5NS4yMTMzLjQ1MTkuMzIuNzkwNy4zMmguMDU2NWMuMzM4OSAwIC42MjEzLS4xNi43OTA3LS4zNzM0bDcuODUwNy04LjUzMzNjLjM5NTMtLjQyNjcuMzM4OS0xLjEyLS4xMTMtMS40OTMzWlwiIGZpbGw9XCIjNEM1NEQyXCIvPlxuICAgICAgICAgIDwvc3ZnPlxuICAgICAgICApfVxuICAgICAgPC9pPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvLWJveFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17bG9nb0JveENsYXNzfSAvPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0aGVtZS1uYW1lXCI+e3Byb3BzLnRpdGxlfTwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvYnV0dG9uPlxuICApXG59XG5cbmZ1bmN0aW9uIFNlbGVjdFRoZW1lICgpIHtcbiAgY29uc3QgeyB2aWV3VHlwZSwgc2V0Vmlld1R5cGUsIHNjZW5lcyB9ID0gUmVhY3QudXNlQ29udGV4dChEYXRhQ29udGV4dClcbiAgY29uc3QgW2N1cnJlbnRTZWxlY3RlZFRoZW1lLCBzZXRDdXJyZW50VGhlbWVdID0gUmVhY3QudXNlU3RhdGU8Y2hyb21lLmJyYXZlVGhlbWUuVGhlbWVUeXBlPignU3lzdGVtJylcblxuICBjb25zdCBoYW5kbGVTZWxlY3Rpb25DaGFuZ2UgPSAodGhlbWVUeXBlOiBjaHJvbWUuYnJhdmVUaGVtZS5UaGVtZVR5cGUpID0+IHtcbiAgICBzZXRDdXJyZW50VGhlbWU/Lih0aGVtZVR5cGUpXG4gICAgY2hyb21lLmJyYXZlVGhlbWUuc2V0QnJhdmVUaGVtZVR5cGUodGhlbWVUeXBlKVxuICB9XG5cbiAgY29uc3QgeyBmb3J3YXJkIH0gPSB1c2VWaWV3VHlwZVRyYW5zaXRpb24odmlld1R5cGUpXG4gIGNvbnN0IGdvRm9yd2FyZCA9ICgpID0+IHtcbiAgICBzZXRWaWV3VHlwZShmb3J3YXJkKVxuICAgIHNjZW5lcz8uczIucGxheSgpXG4gIH1cblxuICBjb25zdCBoYW5kbGVTa2lwID0gKCkgPT4gZ29Gb3J3YXJkKClcbiAgY29uc3QgaGFuZGxlTmV4dCA9ICgpID0+IHtcbiAgICBnb0ZvcndhcmQoKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Uy5Cb3g+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpZXctaGVhZGVyLWJveFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpZXctaGVhZGVyLWFjdGlvbnNcIj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlldy1kZXRhaWxzXCI+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInZpZXctdGl0bGVcIj57Z2V0TG9jYWxlKCdicmF2ZVdlbGNvbWVTZWxlY3RUaGVtZUxhYmVsJyl9PC9oMT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxTLlRoZW1lTGlzdEJveD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzbmFtZXMoe1xuICAgICAgICAgICd0aGVtZS1saXN0JzogdHJ1ZSxcbiAgICAgICAgICAnaXMtc2VsZWN0ZWQtZGFyayc6IGN1cnJlbnRTZWxlY3RlZFRoZW1lID09PSAnRGFyaycsXG4gICAgICAgICAgJ2lzLXNlbGVjdGVkLWxpZ2h0JzogY3VycmVudFNlbGVjdGVkVGhlbWUgPT09ICdMaWdodCdcbiAgICAgICAgfSl9PlxuICAgICAgICAgIHt0aGVtZUxpc3QubWFwKChlbnRyeSwgaWQpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxUaGVtZU1vZGVJdGVtXG4gICAgICAgICAgICAgICAga2V5PXtpZH1cbiAgICAgICAgICAgICAgICB0aGVtZVR5cGU9e2VudHJ5LnRoZW1lVHlwZSBhcyBjaHJvbWUuYnJhdmVUaGVtZS5UaGVtZVR5cGV9XG4gICAgICAgICAgICAgICAgdGl0bGU9e2VudHJ5LnRpdGxlfVxuICAgICAgICAgICAgICAgIGlzQWN0aXZlPXtlbnRyeS50aGVtZVR5cGUgPT09IGN1cnJlbnRTZWxlY3RlZFRoZW1lfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVTZWxlY3Rpb25DaGFuZ2V9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9TLlRoZW1lTGlzdEJveD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlldy1ub3RlXCI+e2dldExvY2FsZSgnYnJhdmVXZWxjb21lU2VsZWN0VGhlbWVOb3RlJyl9PC9kaXY+XG4gICAgICA8Uy5BY3Rpb25Cb3g+XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBraW5kPVwicGxhaW4tZmFpbnRcIlxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVNraXB9XG4gICAgICAgICAgc2l6ZT1cImxhcmdlXCJcbiAgICAgICAgPlxuICAgICAgICAgIHtnZXRMb2NhbGUoJ2JyYXZlV2VsY29tZVNraXBCdXR0b25MYWJlbCcpfVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIGtpbmQ9XCJmaWxsZWRcIlxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZU5leHR9XG4gICAgICAgICAgc2l6ZT1cImxhcmdlXCJcbiAgICAgICAgPlxuICAgICAgICAgIHtnZXRMb2NhbGUoJ2JyYXZlV2VsY29tZU5leHRCdXR0b25MYWJlbCcpfVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvUy5BY3Rpb25Cb3g+XG4gICAgPC9TLkJveD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWxlY3RUaGVtZVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9