export const __webpack_esm_id__ = "brave_components_brave_news_browser_resources_Page_tsx";
export const __webpack_esm_ids__ = ["brave_components_brave_news_browser_resources_Page_tsx"];
export const __webpack_esm_modules__ = {

/***/ "../../../brave/components/brave_news/browser/resources/Page.tsx"
/*!**********************************************************************!*\
  !*** ./components/brave_news/browser/resources/Page.tsx + 2 modules ***!
  \**********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ FeedV2)
});
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./components/common/Flex.tsx
var Flex = __webpack_require__("../../../brave/components/common/Flex.tsx");
// EXTERNAL MODULE: ./components/common/locale.ts + 1 modules
var locale = __webpack_require__("../../../brave/components/common/locale.ts");
// EXTERNAL MODULE: ./node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/tokens/css/variables.js
var variables = __webpack_require__("../../../brave/node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/tokens/css/variables.js");
// EXTERNAL MODULE: external ["//resources/brave/react.bundle.js","React"]
var react_bundle_js_React_ = __webpack_require__("react");
// EXTERNAL MODULE: ./node_modules/.pnpm/styled-components@6.4.3_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/styled-components/dist/styled-components.esm.js + 7 modules
var styled_components_esm = __webpack_require__("../../../brave/node_modules/.pnpm/styled-components@6.4.3_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/styled-components/dist/styled-components.esm.js");
// EXTERNAL MODULE: ./components/brave_news/browser/resources/Feed.tsx + 10 modules
var Feed = __webpack_require__("../../../brave/components/brave_news/browser/resources/Feed.tsx");
// EXTERNAL MODULE: ./node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/react/icon.js + 1 modules
var icon = __webpack_require__("../../../brave/node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/react/icon.js");
// EXTERNAL MODULE: ./components/brave_news/browser/resources/SettingsButton.tsx
var SettingsButton = __webpack_require__("../../../brave/components/brave_news/browser/resources/SettingsButton.tsx");
// EXTERNAL MODULE: ./components/brave_news/browser/resources/shared/Context.tsx + 2 modules
var Context = __webpack_require__("../../../brave/components/brave_news/browser/resources/shared/Context.tsx");
;// ./components/brave_news/browser/resources/FeedControls.tsx
// Copyright (c) 2026 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.







const SidebarMenu = react_bundle_js_React_.lazy(() => Promise.all(/*! import() */[__webpack_require__.e("brave_components_brave_news_browser_resources_FeedNavigation_tsx"), __webpack_require__.e("brave_components_brave_news_browser_resources_SidebarMenu_tsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ./SidebarMenu */ "../../../brave/components/brave_news/browser/resources/SidebarMenu.tsx")));
const Container = styled_components_esm["default"].div.withConfig({ displayName: "Container", componentId: "sc-14k13u7" }) `
  max-width: min(540px, 100vw);
  width: 100%;

  display: flex;
  align-items: center;
  gap: ${variables.spacing.m};
`;
const RightSide = styled_components_esm["default"].div.withConfig({ displayName: "RightSide", componentId: "sc-1wpr2py" }) `
  display: flex;
  align-items: center;
  gap: ${variables.spacing.m};
  margin-left: auto;
`;
const Divider = styled_components_esm["default"].div.withConfig({ displayName: "Divider", componentId: "sc-tsoxtt" }) `
  width: 1px;
  height: ${variables.spacing.l};
  background: ${variables.color.divider.subtle};
  flex: 0;
`;
const Title = styled_components_esm["default"].span.withConfig({ displayName: "Title", componentId: "sc-14doeqy" }) `
  color: ${variables.color.text.primary};
  font: ${variables.font.heading.h4};
`;
// The Brave News feed controls: an optional feed-list menu plus customize and
// refresh buttons. Shared by the feed page and the side panel so both expose
// the same actions; each surface supplies its own positioning container.
function FeedControls({ onCustomize, showMenu, title, onClose, className, }) {
    const { feedV2, refreshFeedV2 } = (0,Context.useBraveNews)();
    return (react_bundle_js_React_.createElement(Container, { className: className },
        showMenu && (react_bundle_js_React_.createElement(react_bundle_js_React_.Suspense, { fallback: null },
            react_bundle_js_React_.createElement(SidebarMenu, null))),
        title && react_bundle_js_React_.createElement(Title, null, title),
        react_bundle_js_React_.createElement(RightSide, null,
            react_bundle_js_React_.createElement(SettingsButton["default"], { onClick: onCustomize, title: (0,locale.getLocale)("BRAVE_NEWS_CUSTOMIZE_FEED" /* S.BRAVE_NEWS_CUSTOMIZE_FEED */) },
                react_bundle_js_React_.createElement(icon["default"], { name: 'settings' })),
            react_bundle_js_React_.createElement(SettingsButton["default"], { isLoading: !feedV2, title: (0,locale.getLocale)("BRAVE_NEWS_REFRESH_FEED" /* S.BRAVE_NEWS_REFRESH_FEED */), onClick: () => refreshFeedV2() },
                react_bundle_js_React_.createElement(icon["default"], { name: 'refresh' })),
            onClose && (react_bundle_js_React_.createElement(react_bundle_js_React_.Fragment, null,
                react_bundle_js_React_.createElement(Divider, null),
                react_bundle_js_React_.createElement(SettingsButton["default"], { onClick: onClose, title: (0,locale.getLocale)("BRAVE_NEWS_CLOSE" /* S.BRAVE_NEWS_CLOSE */) },
                    react_bundle_js_React_.createElement(icon["default"], { name: 'close' })))))));
}

// EXTERNAL MODULE: ./components/brave_news/browser/resources/NewsButton.tsx
var NewsButton = __webpack_require__("../../../brave/components/brave_news/browser/resources/NewsButton.tsx");
// EXTERNAL MODULE: ./components/brave_news/browser/resources/Variables.tsx
var Variables = __webpack_require__("../../../brave/components/brave_news/browser/resources/Variables.tsx");
;// ./components/common/useMediaQuery.ts
// Copyright (c) 2024 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.

function useMediaQuery(query) {
    const [result, setResult] = (0,react_bundle_js_React_.useState)(() => window.matchMedia(query).matches);
    (0,react_bundle_js_React_.useEffect)(() => {
        const media = window.matchMedia(query);
        const handler = () => setResult(media.matches);
        media.addEventListener('change', handler);
        setResult(media.matches);
        return () => {
            media.removeEventListener('change', handler);
        };
    }, [query]);
    return result;
}

;// ./components/brave_news/browser/resources/Page.tsx
// Copyright (c) 2023 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.











const FeedNavigation = react_bundle_js_React_.lazy(() => __webpack_require__.e(/*! import() */ "brave_components_brave_news_browser_resources_FeedNavigation_tsx").then(__webpack_require__.bind(__webpack_require__, /*! ./FeedNavigation */ "../../../brave/components/brave_news/browser/resources/FeedNavigation.tsx")));
const isSmallQuery = '(max-width: 1024px)';
const Root = (0,styled_components_esm["default"])((0,Variables["default"])).withConfig({ displayName: "Root", componentId: "sc-1fqi4ms" }) `
  --bn-top-bar-height: 78px;

  padding-top: ${variables.spacing.xl};

  display: grid;
  grid-template-columns: 1fr max-content 1fr;
  gap: ${variables.spacing['3Xl']};
`;
const SidebarContainer = styled_components_esm["default"].div.withConfig({ displayName: "SidebarContainer", componentId: "sc-19nc3gq" }) `
  position: sticky;
  top: ${variables.spacing.xl};
`;
const ButtonsContainer = styled_components_esm["default"].div.withConfig({ displayName: "ButtonsContainer", componentId: "sc-7vj86a" }) `
  position: fixed;
  bottom: ${variables.spacing['5Xl']};
  right: ${variables.spacing['5Xl']};
  border-radius: ${variables.radius.m};
  padding: ${variables.spacing.m};

  background: var(--bn-glass-container);
  backdrop-filter: blur(64px);

  @media ${isSmallQuery} {
    height: var(--bn-top-bar-height);

    inset: 0;
    bottom: unset;
    padding: ${variables.spacing['2Xl']} ${variables.spacing.xl};
    border-radius: 0;
  }
`;
const LoadNewContentButton = (0,styled_components_esm["default"])((0,NewsButton["default"])).withConfig({ displayName: "LoadNewContentButton", componentId: "sc-1teex5y" }) `
  position: fixed;
  z-index: 1;
  top: ${variables.spacing['3Xl']};

  flex-grow: 0;

  @media ${isSmallQuery} {
    top: calc(var(--bn-top-bar-height) + var(--leo-spacing-m));
  }
`;
function FeedV2() {
    const isSmall = useMediaQuery(isSmallQuery);
    const { feedV2, setCustomizePage, refreshFeedV2, feedV2UpdatesAvailable, reportViewCount, reportSessionStart } = (0,Context.useBraveNews)();
    const ref = react_bundle_js_React_.useRef(null);
    // Note: Whenever the feed is updated, if we're viewing the feed, scroll to
    // the top.
    react_bundle_js_React_.useLayoutEffect(() => {
        if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            if (rect.top < window.innerHeight / 2) {
                ref.current.scrollIntoView();
            }
        }
    }, [feedV2 === null || feedV2 === void 0 ? void 0 : feedV2.items]);
    return react_bundle_js_React_.createElement(Root, { ref: ref, "data-theme": "dark" },
        react_bundle_js_React_.createElement(SidebarContainer, { className: 'brave-news-sidebar' }, !isSmall && react_bundle_js_React_.createElement(react_bundle_js_React_.Suspense, { fallback: null },
            react_bundle_js_React_.createElement(FeedNavigation, null))),
        react_bundle_js_React_.createElement(Flex["default"], { align: 'center', direction: 'column', gap: variables.spacing.l },
            feedV2UpdatesAvailable &&
                react_bundle_js_React_.createElement(LoadNewContentButton, { className: 'brave-news-load-new-content-button', onClick: refreshFeedV2 }, (0,locale.getLocale)("BRAVE_NEWS_NEW_CONTENT_AVAILABLE" /* S.BRAVE_NEWS_NEW_CONTENT_AVAILABLE */)),
            react_bundle_js_React_.createElement(Feed["default"], { feed: feedV2, onViewCountChange: reportViewCount, onSessionStart: reportSessionStart })),
        react_bundle_js_React_.createElement(ButtonsContainer, { className: 'brave-news-feed-controls' },
            react_bundle_js_React_.createElement(FeedControls, { onCustomize: () => setCustomizePage('news'), showMenu: isSmall })));
}


/***/ },

/***/ "../../../brave/components/brave_news/browser/resources/SettingsButton.tsx"
/*!********************************************************************!*\
  !*** ./components/brave_news/browser/resources/SettingsButton.tsx ***!
  \********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _brave_leo_react_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @brave/leo/react/button */ "../../../brave/node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/react/button.js");
/* harmony import */ var _brave_leo_tokens_css_variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @brave/leo/tokens/css/variables */ "../../../brave/node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/tokens/css/variables.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "../../../brave/node_modules/.pnpm/styled-components@6.4.3_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/styled-components/dist/styled-components.esm.js");
// Copyright (c) 2024 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.



const SettingsButton = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_brave_leo_react_button__WEBPACK_IMPORTED_MODULE_0__["default"])).attrs({
    fab: true,
    kind: 'plain-faint'
}).withConfig({ displayName: "SettingsButton", componentId: "sc-lu08t2" }) `
  --leo-button-color: var(--leo-color-icon-default);
  --leo-button-radius: ${_brave_leo_tokens_css_variables__WEBPACK_IMPORTED_MODULE_1__.radius.s};
  --leo-button-padding: ${_brave_leo_tokens_css_variables__WEBPACK_IMPORTED_MODULE_1__.spacing.s};

  flex: 0;
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SettingsButton);


/***/ },

/***/ "../../../brave/components/brave_news/browser/resources/Variables.tsx"
/*!***************************************************************!*\
  !*** ./components/brave_news/browser/resources/Variables.tsx ***!
  \***************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "../../../brave/node_modules/.pnpm/styled-components@6.4.3_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/styled-components/dist/styled-components.esm.js");
// Copyright (c) 2023 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({ componentId: "sc-6j565e" }) `
  --bn-text-base: 255, 255, 255;
  --bn-glass-container: rgba(255,255,255,0.05);
  --bn-glass-10: rgba(255, 255, 255, 0.1);
  --bn-glass-25: rgba(255, 255, 255, 0.25);
  --bn-glass-50: rgba(255, 255, 255, 0.5);
  --bn-glass-70: rgba(255, 255, 255, 0.7);
  --bn-glass-100: rgba(255, 255, 255, 1);
`);


/***/ }

};

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJhdmVfY29tcG9uZW50c19icmF2ZV9uZXdzX2Jyb3dzZXJfcmVzb3VyY2VzX1BhZ2VfdHN4LmNodW5rLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw2REFBNkQ7QUFDN0Qsc0VBQXNFO0FBQ3RFLDRFQUE0RTtBQUM1RSxzREFBc0Q7QUFFUjtBQUNOO0FBQzhCO0FBQ3hDO0FBQ1E7QUFDTztBQUNFO0FBRS9DLE1BQU0sV0FBVyxHQUFHLDJCQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsa1dBQXVCLENBQUM7QUFFN0QsTUFBTSxTQUFTLEdBQUcsZ0NBQU0sQ0FBQyxHQUFHOzs7Ozs7U0FNbkIsaUJBQU8sQ0FBQyxDQUFDO0NBQ2pCO0FBRUQsTUFBTSxTQUFTLEdBQUcsZ0NBQU0sQ0FBQyxHQUFHOzs7U0FHbkIsaUJBQU8sQ0FBQyxDQUFDOztDQUVqQjtBQUVELE1BQU0sT0FBTyxHQUFHLGdDQUFNLENBQUMsR0FBRzs7WUFFZCxpQkFBTyxDQUFDLENBQUM7Z0JBQ0wsZUFBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNOztDQUVuQztBQW9CRCxNQUFNLEtBQUssR0FBRyxnQ0FBTSxDQUFDLElBQUk7V0FDZCxlQUFLLENBQUMsSUFBSSxDQUFDLE9BQU87VUFDbkIsY0FBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFO0NBQ3hCO0FBRUQsOEVBQThFO0FBQzlFLDZFQUE2RTtBQUM3RSx5RUFBeUU7QUFDMUQsU0FBUyxZQUFZLENBQUMsRUFDbkMsV0FBVyxFQUNYLFFBQVEsRUFDUixLQUFLLEVBQ0wsT0FBTyxFQUNQLFNBQVMsR0FDSDtJQUNOLE1BQU0sRUFBRSxNQUFNLEVBQUUsYUFBYSxFQUFFLEdBQUcsd0JBQVksRUFBRTtJQUNoRCxPQUFPLENBQ0wscUNBQUMsU0FBUyxJQUFDLFNBQVMsRUFBRSxTQUFTO1FBQzVCLFFBQVEsSUFBSSxDQUNYLHFDQUFDLCtCQUFjLElBQUMsUUFBUSxFQUFFLElBQUk7WUFDNUIscUNBQUMsV0FB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QUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxpQkFBaUIsRUFBRSxlQUFlLEVBQUUsY0FBYyxFQUFFLGtCQUFrQixHQUFJLENBQ3pGO1FBRVAscUNBQUMsZ0JBQWdCLElBQUMsU0FBUyxFQUFDLDBCQUEwQjtZQUNwRCxxQ0FBQyxZQUFZLElBQ1gsV0FBVyxFQUFFLEdBQUcsRUFBRSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUMzQyxRQUFRLEVBQUUsT0FBTyxHQUNqQixDQUNlLENBQ2Q7QUFDVCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxR0QsNkRBQTZEO0FBQzdELHNFQUFzRTtBQUN0RSw0RUFBNEU7QUFDNUUsc0RBQXNEO0FBRVQ7QUFDcUI7QUFDM0I7QUFHdkMsTUFBTSxjQUFjLEdBQUcsNkRBQU0sQ0FBQyxtRUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQzFDLEdBQUcsRUFBRSxJQUFJO0lBQ1QsSUFBSSxFQUFFLGFBQWE7Q0FDcEIsQ0FBQzs7eUJBRXVCLG1FQUFNLENBQUMsQ0FBQzswQkFDUCxvRUFBTyxDQUFDLENBQUM7OztDQUdsQztBQUVELGlFQUFlLGNBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQjdCLDZEQUE2RDtBQUM3RCxzRUFBc0U7QUFDdEUsNEVBQTRFO0FBQzVFLHNEQUFzRDtBQUNmO0FBRXZDLGlFQUFlLHlEQUFNLENBQUMsR0FBRzs7Ozs7Ozs7Q0FReEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9icmF2ZS1jb3JlLy4vY29tcG9uZW50cy9icmF2ZV9uZXdzL2Jyb3dzZXIvcmVzb3VyY2VzL0ZlZWRDb250cm9scy50c3giLCJ3ZWJwYWNrOi8vYnJhdmUtY29yZS8uL2NvbXBvbmVudHMvY29tbW9uL3VzZU1lZGlhUXVlcnkudHMiLCJ3ZWJwYWNrOi8vYnJhdmUtY29yZS8uL2NvbXBvbmVudHMvYnJhdmVfbmV3cy9icm93c2VyL3Jlc291cmNlcy9QYWdlLnRzeCIsIndlYnBhY2s6Ly9icmF2ZS1jb3JlLy4vY29tcG9uZW50cy9icmF2ZV9uZXdzL2Jyb3dzZXIvcmVzb3VyY2VzL1NldHRpbmdzQnV0dG9uLnRzeCIsIndlYnBhY2s6Ly9icmF2ZS1jb3JlLy4vY29tcG9uZW50cy9icmF2ZV9uZXdzL2Jyb3dzZXIvcmVzb3VyY2VzL1ZhcmlhYmxlcy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDI2IFRoZSBCcmF2ZSBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuLy8gTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBmaWxlLFxuLy8gWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHBzOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uXG5cbmltcG9ydCB7IGdldExvY2FsZSB9IGZyb20gJyR3ZWItY29tbW9uL2xvY2FsZSdcbmltcG9ydCBJY29uIGZyb20gJ0BicmF2ZS9sZW8vcmVhY3QvaWNvbidcbmltcG9ydCB7IGNvbG9yLCBmb250LCBzcGFjaW5nIH0gZnJvbSAnQGJyYXZlL2xlby90b2tlbnMvY3NzL3ZhcmlhYmxlcydcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCBTZXR0aW5nc0J1dHRvbiBmcm9tICcuL1NldHRpbmdzQnV0dG9uJ1xuaW1wb3J0IHsgdXNlQnJhdmVOZXdzIH0gZnJvbSAnLi9zaGFyZWQvQ29udGV4dCdcblxuY29uc3QgU2lkZWJhck1lbnUgPSBSZWFjdC5sYXp5KCgpID0+IGltcG9ydCgnLi9TaWRlYmFyTWVudScpKVxuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBtYXgtd2lkdGg6IG1pbig1NDBweCwgMTAwdncpO1xuICB3aWR0aDogMTAwJTtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6ICR7c3BhY2luZy5tfTtcbmBcblxuY29uc3QgUmlnaHRTaWRlID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAke3NwYWNpbmcubX07XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuYFxuXG5jb25zdCBEaXZpZGVyID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDFweDtcbiAgaGVpZ2h0OiAke3NwYWNpbmcubH07XG4gIGJhY2tncm91bmQ6ICR7Y29sb3IuZGl2aWRlci5zdWJ0bGV9O1xuICBmbGV4OiAwO1xuYFxuXG5pbnRlcmZhY2UgUHJvcHMge1xuICAvLyBJbnZva2VkIHdoZW4gdGhlIGN1c3RvbWl6ZSAoXCJzZXR0aW5nc1wiKSBidXR0b24gaXMgcHJlc3NlZC4gU3VyZmFjZXMgZGlmZmVyXG4gIC8vIGluIHdoZXJlIGN1c3RvbWl6YXRpb24gbGl2ZXM6IHRoZSBmZWVkIG9wZW5zIGl0cyBpbmxpbmUgbW9kYWwsIHdoaWxlIHRoZVxuICAvLyBzaWRlIHBhbmVsIG9wZW5zIHRoZSBOZXcgVGFiIFBhZ2UuXG4gIG9uQ3VzdG9taXplOiAoKSA9PiB2b2lkXG4gIC8vIFdoZXRoZXIgdG8gc2hvdyB0aGUgZmVlZC1saXN0IG1lbnUuIFRoZSBmZWVkIG9ubHkgbmVlZHMgaXQgb24gc21hbGxcbiAgLy8gdmlld3BvcnRzIChpdCBoYXMgYSBkZWRpY2F0ZWQgc2lkZWJhciBvdGhlcndpc2UpLCB3aGVyZWFzIG5hcnJvdyBzdXJmYWNlc1xuICAvLyBsaWtlIHRoZSBzaWRlIHBhbmVsIGFsd2F5cyBzaG93IGl0LlxuICBzaG93TWVudT86IGJvb2xlYW5cbiAgLy8gT3B0aW9uYWwgaGVhZGluZyByZW5kZXJlZCBiZXR3ZWVuIHRoZSBtZW51IGFuZCB0aGUgYWN0aW9uIGJ1dHRvbnMuIE9ubHkgdGhlXG4gIC8vIHNpZGUgcGFuZWwgc3VwcGxpZXMgdGhpczsgdGhlIGZlZWQgcGFnZSBoYXMgaXRzIG93biBsYXlvdXQuXG4gIHRpdGxlPzogc3RyaW5nXG4gIC8vIFdoZW4gcHJvdmlkZWQsIGEgY2xvc2UgYnV0dG9uIGlzIHJlbmRlcmVkIChzaWRlYmFyIG1vZGUgb25seSkuIENsb3NlcyB0aGVcbiAgLy8gaG9zdGluZyBzaWRlIHBhbmVsLlxuICBvbkNsb3NlPzogKCkgPT4gdm9pZFxuICBjbGFzc05hbWU/OiBzdHJpbmdcbn1cblxuY29uc3QgVGl0bGUgPSBzdHlsZWQuc3BhbmBcbiAgY29sb3I6ICR7Y29sb3IudGV4dC5wcmltYXJ5fTtcbiAgZm9udDogJHtmb250LmhlYWRpbmcuaDR9O1xuYFxuXG4vLyBUaGUgQnJhdmUgTmV3cyBmZWVkIGNvbnRyb2xzOiBhbiBvcHRpb25hbCBmZWVkLWxpc3QgbWVudSBwbHVzIGN1c3RvbWl6ZSBhbmRcbi8vIHJlZnJlc2ggYnV0dG9ucy4gU2hhcmVkIGJ5IHRoZSBmZWVkIHBhZ2UgYW5kIHRoZSBzaWRlIHBhbmVsIHNvIGJvdGggZXhwb3NlXG4vLyB0aGUgc2FtZSBhY3Rpb25zOyBlYWNoIHN1cmZhY2Ugc3VwcGxpZXMgaXRzIG93biBwb3NpdGlvbmluZyBjb250YWluZXIuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGZWVkQ29udHJvbHMoe1xuICBvbkN1c3RvbWl6ZSxcbiAgc2hvd01lbnUsXG4gIHRpdGxlLFxuICBvbkNsb3NlLFxuICBjbGFzc05hbWUsXG59OiBQcm9wcykge1xuICBjb25zdCB7IGZlZWRWMiwgcmVmcmVzaEZlZWRWMiB9ID0gdXNlQnJhdmVOZXdzKClcbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgIHtzaG93TWVudSAmJiAoXG4gICAgICAgIDxSZWFjdC5TdXNwZW5zZSBmYWxsYmFjaz17bnVsbH0+XG4gICAgICAgICAgPFNpZGViYXJNZW51IC8+XG4gICAgICAgIDwvUmVhY3QuU3VzcGVuc2U+XG4gICAgICApfVxuICAgICAge3RpdGxlICYmIDxUaXRsZT57dGl0bGV9PC9UaXRsZT59XG4gICAgICA8UmlnaHRTaWRlPlxuICAgICAgICA8U2V0dGluZ3NCdXR0b25cbiAgICAgICAgICBvbkNsaWNrPXtvbkN1c3RvbWl6ZX1cbiAgICAgICAgICB0aXRsZT17Z2V0TG9jYWxlKFMuQlJBVkVfTkVXU19DVVNUT01JWkVfRkVFRCl9XG4gICAgICAgID5cbiAgICAgICAgICA8SWNvbiBuYW1lPSdzZXR0aW5ncycgLz5cbiAgICAgICAgPC9TZXR0aW5nc0J1dHRvbj5cbiAgICAgICAgPFNldHRpbmdzQnV0dG9uXG4gICAgICAgICAgaXNMb2FkaW5nPXshZmVlZFYyfVxuICAgICAgICAgIHRpdGxlPXtnZXRMb2NhbGUoUy5CUkFWRV9ORVdTX1JFRlJFU0hfRkVFRCl9XG4gICAgICAgICAgb25DbGljaz17KCkgPT4gcmVmcmVzaEZlZWRWMigpfVxuICAgICAgICA+XG4gICAgICAgICAgPEljb24gbmFtZT0ncmVmcmVzaCcgLz5cbiAgICAgICAgPC9TZXR0aW5nc0J1dHRvbj5cbiAgICAgICAge29uQ2xvc2UgJiYgKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8RGl2aWRlciAvPlxuICAgICAgICAgICAgPFNldHRpbmdzQnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e29uQ2xvc2V9XG4gICAgICAgICAgICAgIHRpdGxlPXtnZXRMb2NhbGUoUy5CUkFWRV9ORVdTX0NMT1NFKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEljb24gbmFtZT0nY2xvc2UnIC8+XG4gICAgICAgICAgICA8L1NldHRpbmdzQnV0dG9uPlxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgPC9SaWdodFNpZGU+XG4gICAgPC9Db250YWluZXI+XG4gIClcbn1cbiIsIi8vIENvcHlyaWdodCAoYykgMjAyNCBUaGUgQnJhdmUgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbi8vIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXMgZmlsZSxcbi8vIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwczovL21vemlsbGEub3JnL01QTC8yLjAvLlxuXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZU1lZGlhUXVlcnkocXVlcnk6IHN0cmluZykge1xuICBjb25zdCBbcmVzdWx0LCBzZXRSZXN1bHRdID0gdXNlU3RhdGUoKCkgPT4gd2luZG93Lm1hdGNoTWVkaWEocXVlcnkpLm1hdGNoZXMpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBtZWRpYSA9IHdpbmRvdy5tYXRjaE1lZGlhKHF1ZXJ5KVxuICAgIGNvbnN0IGhhbmRsZXIgPSAoKSA9PiBzZXRSZXN1bHQobWVkaWEubWF0Y2hlcylcbiAgICBtZWRpYS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBoYW5kbGVyKVxuICAgIHNldFJlc3VsdChtZWRpYS5tYXRjaGVzKVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIG1lZGlhLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGhhbmRsZXIpXG4gICAgfVxuICB9LCBbcXVlcnldKVxuXG4gIHJldHVybiByZXN1bHRcbn1cbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMyBUaGUgQnJhdmUgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbi8vIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXMgZmlsZSxcbi8vIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwczovL21vemlsbGEub3JnL01QTC8yLjAvLlxuaW1wb3J0IEZsZXggZnJvbSAnJHdlYi1jb21tb24vRmxleCdcbmltcG9ydCB7IGdldExvY2FsZSB9IGZyb20gJyR3ZWItY29tbW9uL2xvY2FsZSdcbmltcG9ydCB7IHJhZGl1cywgc3BhY2luZyB9IGZyb20gJ0BicmF2ZS9sZW8vdG9rZW5zL2Nzcy92YXJpYWJsZXMnXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgRmVlZCBmcm9tICcuL0ZlZWQnXG5pbXBvcnQgRmVlZENvbnRyb2xzIGZyb20gJy4vRmVlZENvbnRyb2xzJ1xuaW1wb3J0IE5ld3NCdXR0b24gZnJvbSAnLi9OZXdzQnV0dG9uJ1xuaW1wb3J0IFZhcmlhYmxlcyBmcm9tICcuL1ZhcmlhYmxlcydcbmltcG9ydCB7IHVzZUJyYXZlTmV3cyB9IGZyb20gJy4vc2hhcmVkL0NvbnRleHQnXG5pbXBvcnQgdXNlTWVkaWFRdWVyeSBmcm9tICckd2ViLWNvbW1vbi91c2VNZWRpYVF1ZXJ5J1xuXG5jb25zdCBGZWVkTmF2aWdhdGlvbiA9IFJlYWN0LmxhenkoKCkgPT4gaW1wb3J0KCcuL0ZlZWROYXZpZ2F0aW9uJykpXG5cbmNvbnN0IGlzU21hbGxRdWVyeSA9ICcobWF4LXdpZHRoOiAxMDI0cHgpJ1xuXG5jb25zdCBSb290ID0gc3R5bGVkKFZhcmlhYmxlcylgXG4gIC0tYm4tdG9wLWJhci1oZWlnaHQ6IDc4cHg7XG5cbiAgcGFkZGluZy10b3A6ICR7c3BhY2luZy54bH07XG5cbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgbWF4LWNvbnRlbnQgMWZyO1xuICBnYXA6ICR7c3BhY2luZ1snM1hsJ119O1xuYFxuXG5jb25zdCBTaWRlYmFyQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAke3NwYWNpbmcueGx9O1xuYFxuXG5jb25zdCBCdXR0b25zQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206ICR7c3BhY2luZ1snNVhsJ119O1xuICByaWdodDogJHtzcGFjaW5nWyc1WGwnXX07XG4gIGJvcmRlci1yYWRpdXM6ICR7cmFkaXVzLm19O1xuICBwYWRkaW5nOiAke3NwYWNpbmcubX07XG5cbiAgYmFja2dyb3VuZDogdmFyKC0tYm4tZ2xhc3MtY29udGFpbmVyKTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDY0cHgpO1xuXG4gIEBtZWRpYSAke2lzU21hbGxRdWVyeX0ge1xuICAgIGhlaWdodDogdmFyKC0tYm4tdG9wLWJhci1oZWlnaHQpO1xuXG4gICAgaW5zZXQ6IDA7XG4gICAgYm90dG9tOiB1bnNldDtcbiAgICBwYWRkaW5nOiAke3NwYWNpbmdbJzJYbCddfSAke3NwYWNpbmcueGx9O1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gIH1cbmBcblxuY29uc3QgTG9hZE5ld0NvbnRlbnRCdXR0b24gPSBzdHlsZWQoTmV3c0J1dHRvbilgXG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMTtcbiAgdG9wOiAke3NwYWNpbmdbJzNYbCddfTtcblxuICBmbGV4LWdyb3c6IDA7XG5cbiAgQG1lZGlhICR7aXNTbWFsbFF1ZXJ5fSB7XG4gICAgdG9wOiBjYWxjKHZhcigtLWJuLXRvcC1iYXItaGVpZ2h0KSArIHZhcigtLWxlby1zcGFjaW5nLW0pKTtcbiAgfVxuYFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGZWVkVjIoKSB7XG4gIGNvbnN0IGlzU21hbGwgPSB1c2VNZWRpYVF1ZXJ5KGlzU21hbGxRdWVyeSlcblxuICBjb25zdCB7IGZlZWRWMiwgc2V0Q3VzdG9taXplUGFnZSwgcmVmcmVzaEZlZWRWMiwgZmVlZFYyVXBkYXRlc0F2YWlsYWJsZSwgcmVwb3J0Vmlld0NvdW50LCByZXBvcnRTZXNzaW9uU3RhcnQgfSA9IHVzZUJyYXZlTmV3cygpXG4gIGNvbnN0IHJlZiA9IFJlYWN0LnVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbClcblxuICAvLyBOb3RlOiBXaGVuZXZlciB0aGUgZmVlZCBpcyB1cGRhdGVkLCBpZiB3ZSdyZSB2aWV3aW5nIHRoZSBmZWVkLCBzY3JvbGwgdG9cbiAgLy8gdGhlIHRvcC5cbiAgUmVhY3QudXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICBpZiAocmVmLmN1cnJlbnQpIHtcbiAgICAgIGNvbnN0IHJlY3QgPSByZWYuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgaWYgKHJlY3QudG9wIDwgd2luZG93LmlubmVySGVpZ2h0IC8gMikge1xuICAgICAgICByZWYuY3VycmVudC5zY3JvbGxJbnRvVmlldygpXG4gICAgICB9XG4gICAgfVxuICB9LCBbZmVlZFYyPy5pdGVtc10pXG5cbiAgcmV0dXJuIDxSb290IHJlZj17cmVmIGFzIGFueX0gZGF0YS10aGVtZT1cImRhcmtcIj5cbiAgICA8U2lkZWJhckNvbnRhaW5lciBjbGFzc05hbWU9J2JyYXZlLW5ld3Mtc2lkZWJhcic+XG4gICAgICB7IWlzU21hbGwgJiYgPFJlYWN0LlN1c3BlbnNlIGZhbGxiYWNrPXtudWxsfT48RmVlZE5hdmlnYXRpb24gLz48L1JlYWN0LlN1c3BlbnNlPn1cbiAgICA8L1NpZGViYXJDb250YWluZXI+XG4gICAgPEZsZXggYWxpZ249J2NlbnRlcicgZGlyZWN0aW9uPSdjb2x1bW4nIGdhcD17c3BhY2luZy5sfT5cbiAgICAgIHtmZWVkVjJVcGRhdGVzQXZhaWxhYmxlICYmXG4gICAgICAgIDxMb2FkTmV3Q29udGVudEJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT0nYnJhdmUtbmV3cy1sb2FkLW5ldy1jb250ZW50LWJ1dHRvbidcbiAgICAgICAgICBvbkNsaWNrPXtyZWZyZXNoRmVlZFYyfVxuICAgICAgICA+XG4gICAgICAgICAge2dldExvY2FsZShTLkJSQVZFX05FV1NfTkVXX0NPTlRFTlRfQVZBSUxBQkxFKX1cbiAgICAgICAgPC9Mb2FkTmV3Q29udGVudEJ1dHRvbj59XG4gICAgICA8RmVlZCBmZWVkPXtmZWVkVjJ9IG9uVmlld0NvdW50Q2hhbmdlPXtyZXBvcnRWaWV3Q291bnR9IG9uU2Vzc2lvblN0YXJ0PXtyZXBvcnRTZXNzaW9uU3RhcnR9IC8+XG4gICAgPC9GbGV4PlxuXG4gICAgPEJ1dHRvbnNDb250YWluZXIgY2xhc3NOYW1lPSdicmF2ZS1uZXdzLWZlZWQtY29udHJvbHMnPlxuICAgICAgPEZlZWRDb250cm9sc1xuICAgICAgICBvbkN1c3RvbWl6ZT17KCkgPT4gc2V0Q3VzdG9taXplUGFnZSgnbmV3cycpfVxuICAgICAgICBzaG93TWVudT17aXNTbWFsbH1cbiAgICAgIC8+XG4gICAgPC9CdXR0b25zQ29udGFpbmVyPlxuICA8L1Jvb3Q+XG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjQgVGhlIEJyYXZlIEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4vLyBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIGZpbGUsXG4vLyBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cHM6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy5cblxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQGJyYXZlL2xlby9yZWFjdC9idXR0b25cIjtcbmltcG9ydCB7IHJhZGl1cywgc3BhY2luZyB9IGZyb20gXCJAYnJhdmUvbGVvL3Rva2Vucy9jc3MvdmFyaWFibGVzXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5cbmNvbnN0IFNldHRpbmdzQnV0dG9uID0gc3R5bGVkKEJ1dHRvbikuYXR0cnMoe1xuICBmYWI6IHRydWUsXG4gIGtpbmQ6ICdwbGFpbi1mYWludCdcbn0pYFxuICAtLWxlby1idXR0b24tY29sb3I6IHZhcigtLWxlby1jb2xvci1pY29uLWRlZmF1bHQpO1xuICAtLWxlby1idXR0b24tcmFkaXVzOiAke3JhZGl1cy5zfTtcbiAgLS1sZW8tYnV0dG9uLXBhZGRpbmc6ICR7c3BhY2luZy5zfTtcblxuICBmbGV4OiAwO1xuYFxuXG5leHBvcnQgZGVmYXVsdCBTZXR0aW5nc0J1dHRvblxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIzIFRoZSBCcmF2ZSBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuLy8gTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBmaWxlLFxuLy8gWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHBzOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBzdHlsZWQuZGl2YFxuICAtLWJuLXRleHQtYmFzZTogMjU1LCAyNTUsIDI1NTtcbiAgLS1ibi1nbGFzcy1jb250YWluZXI6IHJnYmEoMjU1LDI1NSwyNTUsMC4wNSk7XG4gIC0tYm4tZ2xhc3MtMTA6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgLS1ibi1nbGFzcy0yNTogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTtcbiAgLS1ibi1nbGFzcy01MDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICAtLWJuLWdsYXNzLTcwOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XG4gIC0tYm4tZ2xhc3MtMTAwOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xuYFxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9