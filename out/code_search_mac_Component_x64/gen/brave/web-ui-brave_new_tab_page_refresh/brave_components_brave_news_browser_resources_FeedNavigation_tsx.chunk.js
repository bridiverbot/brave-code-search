export const __webpack_esm_id__ = "brave_components_brave_news_browser_resources_FeedNavigation_tsx";
export const __webpack_esm_ids__ = ["brave_components_brave_news_browser_resources_FeedNavigation_tsx"];
export const __webpack_esm_modules__ = {

/***/ "../../../brave/components/brave_news/browser/resources/FeedNavigation.tsx"
/*!********************************************************************************!*\
  !*** ./components/brave_news/browser/resources/FeedNavigation.tsx + 2 modules ***!
  \********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Item: () => (/* binding */ Item),
  "default": () => (/* binding */ Sidebar)
});
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/react/icon.js + 1 modules
var icon = __webpack_require__("../../../brave/node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/react/icon.js");
// EXTERNAL MODULE: ./node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/tokens/css/variables.js
var variables = __webpack_require__("../../../brave/node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/tokens/css/variables.js");
// EXTERNAL MODULE: external ["//resources/brave/react.bundle.js","React"]
var react_bundle_js_React_ = __webpack_require__("react");
// EXTERNAL MODULE: ./node_modules/.pnpm/styled-components@6.4.3_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/styled-components/dist/styled-components.esm.js + 7 modules
var styled_components_esm = __webpack_require__("../../../brave/node_modules/.pnpm/styled-components@6.4.3_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/styled-components/dist/styled-components.esm.js");
// EXTERNAL MODULE: ./components/common/usePromise.ts
var usePromise = __webpack_require__("../../../brave/components/common/usePromise.ts");
// EXTERNAL MODULE: ./components/brave_news/browser/resources/shared/Context.tsx + 3 modules
var Context = __webpack_require__("../../../brave/components/brave_news/browser/resources/shared/Context.tsx");
// EXTERNAL MODULE: ./components/brave_news/browser/resources/shared/api.ts
var api = __webpack_require__("../../../brave/components/brave_news/browser/resources/shared/api.ts");
// EXTERNAL MODULE: ./components/common/strings.ts
var strings = __webpack_require__("../../../brave/components/common/strings.ts");
;// ./components/brave_news/browser/resources/strings.ts
// Copyright (c) 2025 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.


;// ./components/brave_news/browser/resources/context.tsx
// Copyright (c) 2023 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.





const context_Context = react_bundle_js_React_.createContext({
    signals: {},
    truncate: 0,
    setTruncate: () => { }
});
const useInspectContext = () => {
    return react_bundle_js_React_.useContext(context_Context);
};
function InspectContext(props) {
    const { result: signals } = (0,usePromise["default"])(() => (0,api["default"])().getSignals().then(r => r.signals), []);
    const [truncate, setTruncate] = react_bundle_js_React_.useState(parseInt(localStorage.getItem('truncate') || '') || 250);
    const setAndSaveTruncate = react_bundle_js_React_.useCallback((value) => {
        localStorage.setItem('truncate', value.toString());
        setTruncate(value);
    }, []);
    const context = react_bundle_js_React_.useMemo(() => ({
        signals: signals !== null && signals !== void 0 ? signals : {},
        truncate,
        setTruncate: setAndSaveTruncate
    }), [signals, truncate, setAndSaveTruncate]);
    return react_bundle_js_React_.createElement(Context.BraveNewsContextProvider, null,
        react_bundle_js_React_.createElement(context_Context.Provider, { value: context }, props.children));
}

// EXTERNAL MODULE: ./components/brave_news/browser/resources/feed/Card.tsx + 1 modules
var Card = __webpack_require__("../../../brave/components/brave_news/browser/resources/feed/Card.tsx");
// EXTERNAL MODULE: ./components/common/locale.ts
var locale = __webpack_require__("../../../brave/components/common/locale.ts");
// EXTERNAL MODULE: ./components/brave_news/browser/resources/SettingsButton.tsx
var SettingsButton = __webpack_require__("../../../brave/components/brave_news/browser/resources/SettingsButton.tsx");
;// ./components/brave_news/browser/resources/FeedNavigation.tsx
// Copyright (c) 2023 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.










const DEFAULT_SHOW_COUNT = 4;
const PAD_LEFT = '34px';
const Container = (0,styled_components_esm["default"])((0,Card["default"])).withConfig({ displayName: "Container", componentId: "sc-d2evfj" }) `
  width: 270px;

  padding: ${variables.spacing.xl} ${variables.spacing.m};
  align-self: flex-start;
  position: sticky;
  top: ${variables.spacing.xl};

  max-height: calc(100vh - ${variables.spacing.xl} * 2);
  overflow-y: auto;

  scrollbar-width: thin;
  scrollbar-color: var(--bn-glass-10) var(--bn-glass-10);
`;
const CustomButton = styled_components_esm["default"].button.withConfig({ displayName: "CustomButton", componentId: "sc-13p6q5u" }) `
  padding: ${variables.spacing.m};
  padding-left: ${PAD_LEFT};

  display: block;
  outline: none;
  border-radius: ${variables.radius.m};
  border: none;
  background: none;
  text-align: left;
  width: 100%;

  color: ${p => p.faint ? `var(--bn-glass-50)` : `var(--bn-glass-100)`};
  font: ${p => variables.font.small[p.bold ? 'semibold' : 'regular']};
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }

  &:focus-visible {
    box-shadow: ${variables.effect.focusState};
  }

  ${p => p.selected && (0,styled_components_esm.css) `background: var(--bn-glass-10);`}
`;
const Section = styled_components_esm["default"].details.withConfig({ displayName: "Section", componentId: "sc-16a4zmq" }) `
  & summary {
    --leo-icon-size: 18px;

    color: var(--bn-glass-100);
    padding: ${variables.spacing.m};
    border-radius: ${variables.radius.m};
    outline: none;

    display: flex;
    align-items: center;
    gap: ${variables.spacing.m};
    list-style: none;
    font: ${variables.font.small.semibold};

    cursor: pointer;

    :focus-visible {
      box-shadow: ${variables.effect.focusState};
    }

    ${SettingsButton["default"]} {
      margin-left: auto;
    }
  }

  & summary .marker {
    display: inline-block;
    transition: transform 0.1s ease-in-out;
    color: var(--bn-card-color);
  }

  &[open] summary .marker {
    transform: rotate(90deg);
  }
`;
const AddButton = (0,styled_components_esm["default"])((0,SettingsButton["default"])).withConfig({ displayName: "AddButton", componentId: "sc-1ubd7gz" }) `
  --leo-button-padding: ${variables.spacing.xs};
`;
function usePersistedState(name, defaultValue) {
    var _a, _b;
    const [value, setValue] = react_bundle_js_React_.useState((_b = JSON.parse((_a = localStorage[name]) !== null && _a !== void 0 ? _a : null)) !== null && _b !== void 0 ? _b : defaultValue);
    react_bundle_js_React_.useEffect(() => {
        localStorage[name] = JSON.stringify(value);
    }, [name, value]);
    return [value, setValue];
}
const Marker = react_bundle_js_React_.createElement(icon["default"], { name: 'arrow-small-right', className: 'marker' });
const PlaceholderMarker = react_bundle_js_React_.createElement(icon["default"], null);
function Item(props) {
    const { feedView, setFeedView, reportSidebarFilterUsage } = (0,Context.useBraveNews)();
    const topLevel = ['all', 'following'].includes(props.id);
    return react_bundle_js_React_.createElement(CustomButton, { selected: props.id === feedView, onClick: () => {
            setFeedView(props.id);
            reportSidebarFilterUsage();
        }, bold: topLevel }, props.name);
}
function Sidebar() {
    const { channels, publishers, setCustomizePage } = (0,Context.useBraveNews)();
    const { signals } = useInspectContext();
    const [showingMoreChannels, setShowingMoreChannels] = usePersistedState("showingMoreChannels", false);
    const [showingMorePublishers, setShowingMorePublishers] = usePersistedState("showingMorePublishers", false);
    const subscribedPublisherIds = react_bundle_js_React_.useMemo(() => Object.keys(publishers)
        .filter(p => (0,api.isPublisherEnabled)(publishers[p]))
        .sort((a, b) => { var _a, _b; return ((_a = signals[b]) === null || _a === void 0 ? void 0 : _a.visitWeight) - ((_b = signals[a]) === null || _b === void 0 ? void 0 : _b.visitWeight); }), [publishers, signals]);
    const slicedPublisherIds = react_bundle_js_React_.useMemo(() => subscribedPublisherIds
        .slice(0, showingMorePublishers ? undefined : DEFAULT_SHOW_COUNT), [subscribedPublisherIds, showingMorePublishers]);
    const subscribedChannels = react_bundle_js_React_.useMemo(() => Object.keys(channels)
        .filter(c => channels[c].subscribedLocales.length)
        .sort((a, b) => { var _a, _b; return ((_a = signals[b]) === null || _a === void 0 ? void 0 : _a.visitWeight) - ((_b = signals[a]) === null || _b === void 0 ? void 0 : _b.visitWeight); }), [channels, signals]);
    const slicedChannelIds = react_bundle_js_React_.useMemo(() => subscribedChannels
        .slice(0, showingMoreChannels ? undefined : DEFAULT_SHOW_COUNT), [subscribedChannels, showingMoreChannels]);
    return react_bundle_js_React_.createElement(Container, null,
        react_bundle_js_React_.createElement(Item, { id: 'all', name: (0,locale.getLocale)("BRAVE_NEWS_FOR_YOU_FEED" /* S.BRAVE_NEWS_FOR_YOU_FEED */) }),
        react_bundle_js_React_.createElement(Item, { id: 'following', name: (0,locale.getLocale)("BRAVE_NEWS_FOLLOWING_FEED" /* S.BRAVE_NEWS_FOLLOWING_FEED */) }),
        react_bundle_js_React_.createElement(Section, { open: true },
            react_bundle_js_React_.createElement("summary", null,
                subscribedChannels.length ? Marker : PlaceholderMarker,
                (0,locale.getLocale)("BRAVE_NEWS_BROWSE_CHANNELS_HEADER" /* S.BRAVE_NEWS_BROWSE_CHANNELS_HEADER */),
                react_bundle_js_React_.createElement(AddButton, { size: "tiny", onClick: (event) => {
                        event.preventDefault();
                        setCustomizePage('news');
                    } },
                    react_bundle_js_React_.createElement(icon["default"], { name: 'plus-add' }))),
            slicedChannelIds.map(c => react_bundle_js_React_.createElement(Item, { key: c, id: `channels/${c}`, name: c })),
            subscribedChannels.length > DEFAULT_SHOW_COUNT
                && react_bundle_js_React_.createElement(CustomButton, { faint: true, onClick: () => setShowingMoreChannels(s => !s) }, showingMoreChannels
                    ? (0,locale.getLocale)("BRAVE_NEWS_SHOW_LESS" /* S.BRAVE_NEWS_SHOW_LESS */)
                    : (0,locale.getLocale)("BRAVE_NEWS_SHOW_ALL" /* S.BRAVE_NEWS_SHOW_ALL */))),
        react_bundle_js_React_.createElement(Section, { open: true },
            react_bundle_js_React_.createElement("summary", null,
                subscribedPublisherIds.length ? Marker : PlaceholderMarker,
                (0,locale.getLocale)("BRAVE_NEWS_PUBLISHERS_HEADING" /* S.BRAVE_NEWS_PUBLISHERS_HEADING */),
                react_bundle_js_React_.createElement(AddButton, { size: "tiny", onClick: (event) => {
                        event.preventDefault();
                        setCustomizePage('popular');
                    } },
                    react_bundle_js_React_.createElement(icon["default"], { name: 'plus-add' }))),
            slicedPublisherIds.map(p => { var _a; return react_bundle_js_React_.createElement(Item, { key: p, id: `publishers/${p}`, name: (_a = publishers[p]) === null || _a === void 0 ? void 0 : _a.publisherName }); }),
            subscribedPublisherIds.length > DEFAULT_SHOW_COUNT
                && react_bundle_js_React_.createElement(CustomButton, { faint: true, onClick: () => setShowingMorePublishers(s => !s) }, showingMorePublishers
                    ? (0,locale.getLocale)("BRAVE_NEWS_SHOW_LESS" /* S.BRAVE_NEWS_SHOW_LESS */)
                    : (0,locale.getLocale)("BRAVE_NEWS_SHOW_ALL" /* S.BRAVE_NEWS_SHOW_ALL */))));
}


/***/ },

/***/ "../../../brave/components/common/usePromise.ts"
/*!*****************************************!*\
  !*** ./components/common/usePromise.ts ***!
  \*****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ usePromise)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
// Copyright (c) 2022 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.

function usePromise(getPromise, deps) {
    const [result, setResult] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        let cancelled = false;
        setLoading(true);
        setError(undefined);
        getPromise()
            .then(result => !cancelled && setResult(result))
            .catch(err => !cancelled && setError(err))
            .finally(() => !cancelled && setLoading(false));
        return () => { cancelled = true; };
    }, deps);
    return {
        result,
        loading,
        error
    };
}


/***/ }

};

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJhdmVfY29tcG9uZW50c19icmF2ZV9uZXdzX2Jyb3dzZXJfcmVzb3VyY2VzX0ZlZWROYXZpZ2F0aW9uX3RzeC5jaHVuay5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw2REFBNkQ7QUFDN0Qsc0VBQXNFO0FBQ3RFLDRFQUE0RTtBQUM1RSxzREFBc0Q7QUFFMUI7OztBQ0w1Qiw2REFBNkQ7QUFDN0Qsc0VBQXNFO0FBQ3RFLDRFQUE0RTtBQUM1RSxzREFBc0Q7QUFFTjtBQUlqQjtBQUM2QjtBQUNWO0FBQy9CO0FBUW5CLE1BQU0sZUFBTyxHQUFHLG9DQUFtQixDQUFpQjtJQUNsRCxPQUFPLEVBQUUsRUFBRTtJQUNYLFFBQVEsRUFBRSxDQUFDO0lBQ1gsV0FBVyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Q0FDdkIsQ0FBQztBQUVLLE1BQU0saUJBQWlCLEdBQUcsR0FBRyxFQUFFO0lBQ3BDLE9BQU8saUNBQWdCLENBQUMsZUFBTyxDQUFDLENBQUM7QUFDbkMsQ0FBQztBQUVjLFNBQVMsY0FBYyxDQUFDLEtBQWtDO0lBQ3ZFLE1BQU0sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLEdBQUcseUJBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxrQkFBc0IsRUFBRSxDQUFDLFVBQVUsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUM3RyxNQUFNLENBQUMsUUFBUSxFQUFFLFdBQVcsQ0FBQyxHQUFHLCtCQUFjLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksR0FBRyxDQUFDO0lBQ3ZHLE1BQU0sa0JBQWtCLEdBQUcsa0NBQWlCLENBQUMsQ0FBQyxLQUFhLEVBQUUsRUFBRTtRQUM3RCxZQUFZLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxLQUFLLENB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UUFFbkIsVUFBVSxFQUFFO2FBQ1AsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLElBQUksU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQy9DLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxJQUFJLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUN6QyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxTQUFTLElBQUksVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRW5ELE9BQU8sR0FBRyxFQUFFLEdBQUcsU0FBUyxHQUFHLElBQUksRUFBQyxDQUFDO0lBQ3JDLENBQUMsRUFBRSxJQUFJLENBQUM7SUFFUixPQUFPO1FBQ0gsTUFBTTtRQUNOLE9BQU87UUFDUCxLQUFLO0tBQ1I7QUFDTCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYnJhdmUtY29yZS8uL2NvbXBvbmVudHMvYnJhdmVfbmV3cy9icm93c2VyL3Jlc291cmNlcy9zdHJpbmdzLnRzIiwid2VicGFjazovL2JyYXZlLWNvcmUvLi9jb21wb25lbnRzL2JyYXZlX25ld3MvYnJvd3Nlci9yZXNvdXJjZXMvY29udGV4dC50c3giLCJ3ZWJwYWNrOi8vYnJhdmUtY29yZS8uL2NvbXBvbmVudHMvYnJhdmVfbmV3cy9icm93c2VyL3Jlc291cmNlcy9GZWVkTmF2aWdhdGlvbi50c3giLCJ3ZWJwYWNrOi8vYnJhdmUtY29yZS8uL2NvbXBvbmVudHMvY29tbW9uL3VzZVByb21pc2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDI1IFRoZSBCcmF2ZSBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuLy8gTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBmaWxlLFxuLy8gWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHBzOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uXG5cbmltcG9ydCAnJHdlYi1jb21tb24vc3RyaW5ncydcblxuaW1wb3J0IHsgQnJhdmVOZXdzU3RyaW5ncyB9IGZyb20gJ2dlbi9jb21wb25lbnRzL2dyaXQvYnJhdmVfY29tcG9uZW50c193ZWJ1aV9zdHJpbmdzJ1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIC8vIEV4cG9zZSB0aGUgQnJhdmVOZXdzU3RyaW5ncyBlbnVtIG9uIHRoZSBnbG9iYWwgYFNgIGVudW0uXG4gIGludGVyZmFjZSBTdHJpbmdzIHtcbiAgICBCcmF2ZU5ld3NTdHJpbmdzOiB0eXBlb2YgQnJhdmVOZXdzU3RyaW5nc1xuICB9XG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjMgVGhlIEJyYXZlIEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4vLyBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIGZpbGUsXG4vLyBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cHM6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy5cblxuaW1wb3J0IHVzZVByb21pc2UgZnJvbSAnJHdlYi1jb21tb24vdXNlUHJvbWlzZSc7XG5pbXBvcnQge1xuICBTaWduYWxcbn0gZnJvbSAnZ2VuL2JyYXZlL2NvbXBvbmVudHMvYnJhdmVfbmV3cy9jb21tb24vYnJhdmVfbmV3cy5tb2pvbS5tJztcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJyYXZlTmV3c0NvbnRleHRQcm92aWRlciB9IGZyb20gJy4vc2hhcmVkL0NvbnRleHQnO1xuaW1wb3J0IGdldEJyYXZlTmV3c0NvbnRyb2xsZXIgZnJvbSAnLi9zaGFyZWQvYXBpJztcbmltcG9ydCAnLi9zdHJpbmdzJztcblxuZXhwb3J0IGludGVyZmFjZSBJbnNwZWN0Q29udGV4dCB7XG4gIHNpZ25hbHM6IHsgW2tleTogc3RyaW5nXTogU2lnbmFsIH0sXG4gIHRydW5jYXRlOiBudW1iZXIsXG4gIHNldFRydW5jYXRlOiAodmFsdWU6IG51bWJlcikgPT4gdm9pZFxufVxuXG5jb25zdCBDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dDxJbnNwZWN0Q29udGV4dD4oe1xuICBzaWduYWxzOiB7fSxcbiAgdHJ1bmNhdGU6IDAsXG4gIHNldFRydW5jYXRlOiAoKSA9PiB7IH1cbn0pXG5cbmV4cG9ydCBjb25zdCB1c2VJbnNwZWN0Q29udGV4dCA9ICgpID0+IHtcbiAgcmV0dXJuIFJlYWN0LnVzZUNvbnRleHQoQ29udGV4dCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluc3BlY3RDb250ZXh0KHByb3BzOiBSZWFjdC5Qcm9wc1dpdGhDaGlsZHJlbjx7fT4pIHtcbiAgY29uc3QgeyByZXN1bHQ6IHNpZ25hbHMgfSA9IHVzZVByb21pc2UoKCkgPT4gZ2V0QnJhdmVOZXdzQ29udHJvbGxlcigpLmdldFNpZ25hbHMoKS50aGVuKHIgPT4gci5zaWduYWxzKSwgW10pO1xuICBjb25zdCBbdHJ1bmNhdGUsIHNldFRydW5jYXRlXSA9IFJlYWN0LnVzZVN0YXRlKHBhcnNlSW50KGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0cnVuY2F0ZScpIHx8ICcnKSB8fCAyNTApXG4gIGNvbnN0IHNldEFuZFNhdmVUcnVuY2F0ZSA9IFJlYWN0LnVzZUNhbGxiYWNrKCh2YWx1ZTogbnVtYmVyKSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RydW5jYXRlJywgdmFsdWUudG9TdHJpbmcoKSlcbiAgICBzZXRUcnVuY2F0ZSh2YWx1ZSlcbiAgfSwgW10pXG4gIGNvbnN0IGNvbnRleHQgPSBSZWFjdC51c2VNZW1vPEluc3BlY3RDb250ZXh0PigoKSA9PiAoe1xuICAgIHNpZ25hbHM6IHNpZ25hbHMgPz8ge30sXG4gICAgdHJ1bmNhdGUsXG4gICAgc2V0VHJ1bmNhdGU6IHNldEFuZFNhdmVUcnVuY2F0ZVxuICB9KSwgW3NpZ25hbHMsIHRydW5jYXRlLCBzZXRBbmRTYXZlVHJ1bmNhdGVdKVxuXG4gIHJldHVybiA8QnJhdmVOZXdzQ29udGV4dFByb3ZpZGVyPlxuICAgIDxDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtjb250ZXh0fT5cbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICA8L0NvbnRleHQuUHJvdmlkZXI+XG4gIDwvQnJhdmVOZXdzQ29udGV4dFByb3ZpZGVyPlxufVxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIzIFRoZSBCcmF2ZSBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuLy8gTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBmaWxlLFxuLy8gWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHBzOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uXG5pbXBvcnQgSWNvbiBmcm9tICdAYnJhdmUvbGVvL3JlYWN0L2ljb24nO1xuaW1wb3J0IHsgZWZmZWN0LCBmb250LCByYWRpdXMsIHNwYWNpbmcgfSBmcm9tICdAYnJhdmUvbGVvL3Rva2Vucy9jc3MvdmFyaWFibGVzJztcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgdXNlSW5zcGVjdENvbnRleHQgfSBmcm9tICcuL2NvbnRleHQnO1xuaW1wb3J0IENhcmQgZnJvbSAnLi9mZWVkL0NhcmQnO1xuaW1wb3J0IHsgdXNlQnJhdmVOZXdzIH0gZnJvbSAnLi9zaGFyZWQvQ29udGV4dCc7XG5pbXBvcnQgeyBpc1B1Ymxpc2hlckVuYWJsZWQgfSBmcm9tICcuL3NoYXJlZC9hcGknO1xuaW1wb3J0IHsgRmVlZFZpZXcgfSBmcm9tICcuL3NoYXJlZC91c2VGZWVkVjInO1xuaW1wb3J0IHsgZ2V0TG9jYWxlIH0gZnJvbSAnJHdlYi1jb21tb24vbG9jYWxlJztcbmltcG9ydCBTZXR0aW5nc0J1dHRvbiBmcm9tICcuL1NldHRpbmdzQnV0dG9uJztcblxuY29uc3QgREVGQVVMVF9TSE9XX0NPVU5UID0gNDtcblxuY29uc3QgUEFEX0xFRlQgPSAnMzRweCc7XG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZChDYXJkKWBcbiAgd2lkdGg6IDI3MHB4O1xuXG4gIHBhZGRpbmc6ICR7c3BhY2luZy54bH0gJHtzcGFjaW5nLm19O1xuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6ICR7c3BhY2luZy54bH07XG5cbiAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtICR7c3BhY2luZy54bH0gKiAyKTtcbiAgb3ZlcmZsb3cteTogYXV0bztcblxuICBzY3JvbGxiYXItd2lkdGg6IHRoaW47XG4gIHNjcm9sbGJhci1jb2xvcjogdmFyKC0tYm4tZ2xhc3MtMTApIHZhcigtLWJuLWdsYXNzLTEwKTtcbmBcblxuY29uc3QgQ3VzdG9tQnV0dG9uID0gc3R5bGVkLmJ1dHRvbiA8eyBzZWxlY3RlZD86IGJvb2xlYW4sIGZhaW50PzogYm9vbGVhbiwgYm9sZD86IGJvb2xlYW4gfT5gXG4gIHBhZGRpbmc6ICR7c3BhY2luZy5tfTtcbiAgcGFkZGluZy1sZWZ0OiAke1BBRF9MRUZUfTtcblxuICBkaXNwbGF5OiBibG9jaztcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogJHtyYWRpdXMubX07XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgY29sb3I6ICR7cCA9PiBwLmZhaW50ID8gYHZhcigtLWJuLWdsYXNzLTUwKWAgOiBgdmFyKC0tYm4tZ2xhc3MtMTAwKWB9O1xuICBmb250OiAke3AgPT4gZm9udC5zbWFsbFtwLmJvbGQgPyAnc2VtaWJvbGQnIDogJ3JlZ3VsYXInXX07XG4gIGN1cnNvcjogcG9pbnRlcjtcblxuICAmOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAwLjc7XG4gIH1cblxuICAmOmZvY3VzLXZpc2libGUge1xuICAgIGJveC1zaGFkb3c6ICR7ZWZmZWN0LmZvY3VzU3RhdGV9O1xuICB9XG5cbiAgJHtwID0+IHAuc2VsZWN0ZWQgJiYgY3NzYGJhY2tncm91bmQ6IHZhcigtLWJuLWdsYXNzLTEwKTtgfVxuYFxuY29uc3QgU2VjdGlvbiA9IHN0eWxlZC5kZXRhaWxzYFxuICAmIHN1bW1hcnkge1xuICAgIC0tbGVvLWljb24tc2l6ZTogMThweDtcblxuICAgIGNvbG9yOiB2YXIoLS1ibi1nbGFzcy0xMDApO1xuICAgIHBhZGRpbmc6ICR7c3BhY2luZy5tfTtcbiAgICBib3JkZXItcmFkaXVzOiAke3JhZGl1cy5tfTtcbiAgICBvdXRsaW5lOiBub25lO1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogJHtzcGFjaW5nLm19O1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgZm9udDogJHtmb250LnNtYWxsLnNlbWlib2xkfTtcblxuICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgIDpmb2N1cy12aXNpYmxlIHtcbiAgICAgIGJveC1zaGFkb3c6ICR7ZWZmZWN0LmZvY3VzU3RhdGV9O1xuICAgIH1cblxuICAgICR7U2V0dGluZ3NCdXR0b259IHtcbiAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIH1cbiAgfVxuXG4gICYgc3VtbWFyeSAubWFya2VyIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMXMgZWFzZS1pbi1vdXQ7XG4gICAgY29sb3I6IHZhcigtLWJuLWNhcmQtY29sb3IpO1xuICB9XG5cbiAgJltvcGVuXSBzdW1tYXJ5IC5tYXJrZXIge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgfVxuYFxuXG5jb25zdCBBZGRCdXR0b24gPSBzdHlsZWQoU2V0dGluZ3NCdXR0b24pYFxuICAtLWxlby1idXR0b24tcGFkZGluZzogJHtzcGFjaW5nLnhzfTtcbmBcblxuZnVuY3Rpb24gdXNlUGVyc2lzdGVkU3RhdGU8VD4obmFtZTogc3RyaW5nLCBkZWZhdWx0VmFsdWU6IFQpIHtcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSBSZWFjdC51c2VTdGF0ZTxUPihKU09OLnBhcnNlKGxvY2FsU3RvcmFnZVtuYW1lXSA/PyBudWxsKSA/PyBkZWZhdWx0VmFsdWUpXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlW25hbWVdID0gSlNPTi5zdHJpbmdpZnkodmFsdWUpXG4gIH0sIFtuYW1lLCB2YWx1ZV0pXG5cbiAgcmV0dXJuIFt2YWx1ZSwgc2V0VmFsdWVdIGFzIGNvbnN0XG59XG5cbmNvbnN0IE1hcmtlciA9IDxJY29uIG5hbWU9J2Fycm93LXNtYWxsLXJpZ2h0JyBjbGFzc05hbWU9J21hcmtlcicgLz5cbmNvbnN0IFBsYWNlaG9sZGVyTWFya2VyID0gPEljb24gLz5cblxuZXhwb3J0IGZ1bmN0aW9uIEl0ZW0ocHJvcHM6IHsgaWQ6IEZlZWRWaWV3LCBuYW1lOiBzdHJpbmcgfSkge1xuICBjb25zdCB7IGZlZWRWaWV3LCBzZXRGZWVkVmlldywgcmVwb3J0U2lkZWJhckZpbHRlclVzYWdlIH0gPSB1c2VCcmF2ZU5ld3MoKVxuICBjb25zdCB0b3BMZXZlbCA9IFsnYWxsJywgJ2ZvbGxvd2luZyddLmluY2x1ZGVzKHByb3BzLmlkKVxuICByZXR1cm4gPEN1c3RvbUJ1dHRvblxuICAgIHNlbGVjdGVkPXtwcm9wcy5pZCA9PT0gZmVlZFZpZXd9XG4gICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgc2V0RmVlZFZpZXcocHJvcHMuaWQpXG4gICAgICByZXBvcnRTaWRlYmFyRmlsdGVyVXNhZ2UoKVxuICAgIH19XG4gICAgYm9sZD17dG9wTGV2ZWx9XG4gID5cbiAgICB7cHJvcHMubmFtZX1cbiAgPC9DdXN0b21CdXR0b24+XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpZGViYXIoKSB7XG4gIGNvbnN0IHsgY2hhbm5lbHMsIHB1Ymxpc2hlcnMsIHNldEN1c3RvbWl6ZVBhZ2UgfSA9IHVzZUJyYXZlTmV3cygpXG4gIGNvbnN0IHsgc2lnbmFscyB9ID0gdXNlSW5zcGVjdENvbnRleHQoKVxuXG4gIGNvbnN0IFtzaG93aW5nTW9yZUNoYW5uZWxzLCBzZXRTaG93aW5nTW9yZUNoYW5uZWxzXSA9IHVzZVBlcnNpc3RlZFN0YXRlKFwic2hvd2luZ01vcmVDaGFubmVsc1wiLCBmYWxzZSlcbiAgY29uc3QgW3Nob3dpbmdNb3JlUHVibGlzaGVycywgc2V0U2hvd2luZ01vcmVQdWJsaXNoZXJzXSA9IHVzZVBlcnNpc3RlZFN0YXRlKFwic2hvd2luZ01vcmVQdWJsaXNoZXJzXCIsIGZhbHNlKVxuXG4gIGNvbnN0IHN1YnNjcmliZWRQdWJsaXNoZXJJZHMgPSBSZWFjdC51c2VNZW1vKCgpID0+IE9iamVjdC5rZXlzKHB1Ymxpc2hlcnMpXG4gICAgLmZpbHRlcihwID0+IGlzUHVibGlzaGVyRW5hYmxlZChwdWJsaXNoZXJzW3BdKSlcbiAgICAuc29ydCgoYSwgYikgPT4gc2lnbmFsc1tiXT8udmlzaXRXZWlnaHQgLSBzaWduYWxzW2FdPy52aXNpdFdlaWdodCksIFtwdWJsaXNoZXJzLCBzaWduYWxzXSlcbiAgY29uc3Qgc2xpY2VkUHVibGlzaGVySWRzID0gUmVhY3QudXNlTWVtbygoKSA9PiBzdWJzY3JpYmVkUHVibGlzaGVySWRzXG4gICAgLnNsaWNlKDAsIHNob3dpbmdNb3JlUHVibGlzaGVycyA/IHVuZGVmaW5lZCA6IERFRkFVTFRfU0hPV19DT1VOVCksIFtzdWJzY3JpYmVkUHVibGlzaGVySWRzLCBzaG93aW5nTW9yZVB1Ymxpc2hlcnNdKVxuICBjb25zdCBzdWJzY3JpYmVkQ2hhbm5lbHMgPSBSZWFjdC51c2VNZW1vKCgpID0+IE9iamVjdC5rZXlzKGNoYW5uZWxzKVxuICAgIC5maWx0ZXIoYyA9PiBjaGFubmVsc1tjXS5zdWJzY3JpYmVkTG9jYWxlcy5sZW5ndGgpXG4gICAgLnNvcnQoKGEsIGIpID0+IHNpZ25hbHNbYl0/LnZpc2l0V2VpZ2h0IC0gc2lnbmFsc1thXT8udmlzaXRXZWlnaHQpLFxuICAgIFtjaGFubmVscywgc2lnbmFsc10pXG4gIGNvbnN0IHNsaWNlZENoYW5uZWxJZHMgPSBSZWFjdC51c2VNZW1vKCgpID0+IHN1YnNjcmliZWRDaGFubmVsc1xuICAgIC5zbGljZSgwLCBzaG93aW5nTW9yZUNoYW5uZWxzID8gdW5kZWZpbmVkIDogREVGQVVMVF9TSE9XX0NPVU5UKSwgW3N1YnNjcmliZWRDaGFubmVscywgc2hvd2luZ01vcmVDaGFubmVsc10pXG5cbiAgcmV0dXJuIDxDb250YWluZXI+XG4gICAgPEl0ZW0gaWQ9J2FsbCcgbmFtZT17Z2V0TG9jYWxlKFMuQlJBVkVfTkVXU19GT1JfWU9VX0ZFRUQpfSAvPlxuICAgIDxJdGVtIGlkPSdmb2xsb3dpbmcnIG5hbWU9e2dldExvY2FsZShTLkJSQVZFX05FV1NfRk9MTE9XSU5HX0ZFRUQpfSAvPlxuICAgIDxTZWN0aW9uIG9wZW4+XG4gICAgICA8c3VtbWFyeT5cbiAgICAgICAge3N1YnNjcmliZWRDaGFubmVscy5sZW5ndGggPyBNYXJrZXIgOiBQbGFjZWhvbGRlck1hcmtlcn1cbiAgICAgICAge2dldExvY2FsZShTLkJSQVZFX05FV1NfQlJPV1NFX0NIQU5ORUxTX0hFQURFUil9XG4gICAgICAgIDxBZGRCdXR0b24gc2l6ZT1cInRpbnlcIiBvbkNsaWNrPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgc2V0Q3VzdG9taXplUGFnZSgnbmV3cycpXG4gICAgICAgIH19PlxuICAgICAgICAgIDxJY29uIG5hbWU9J3BsdXMtYWRkJyAvPlxuICAgICAgICA8L0FkZEJ1dHRvbj5cbiAgICAgIDwvc3VtbWFyeT5cbiAgICAgIHtzbGljZWRDaGFubmVsSWRzLm1hcChjID0+IDxJdGVtIGtleT17Y30gaWQ9e2BjaGFubmVscy8ke2N9YH0gbmFtZT17Y30gLz4pfVxuICAgICAge3N1YnNjcmliZWRDaGFubmVscy5sZW5ndGggPiBERUZBVUxUX1NIT1dfQ09VTlRcbiAgICAgICAgJiYgPEN1c3RvbUJ1dHRvbiBmYWludCBvbkNsaWNrPXsoKSA9PiBzZXRTaG93aW5nTW9yZUNoYW5uZWxzKHMgPT4gIXMpfT5cbiAgICAgICAgICB7c2hvd2luZ01vcmVDaGFubmVsc1xuICAgICAgICAgICAgPyBnZXRMb2NhbGUoUy5CUkFWRV9ORVdTX1NIT1dfTEVTUylcbiAgICAgICAgICAgIDogZ2V0TG9jYWxlKFMuQlJBVkVfTkVXU19TSE9XX0FMTCl9XG4gICAgICAgIDwvQ3VzdG9tQnV0dG9uPn1cbiAgICA8L1NlY3Rpb24+XG4gICAgPFNlY3Rpb24gb3Blbj5cbiAgICAgIDxzdW1tYXJ5PlxuICAgICAgICB7c3Vic2NyaWJlZFB1Ymxpc2hlcklkcy5sZW5ndGggPyBNYXJrZXIgOiBQbGFjZWhvbGRlck1hcmtlcn1cbiAgICAgICAge2dldExvY2FsZShTLkJSQVZFX05FV1NfUFVCTElTSEVSU19IRUFESU5HKX1cbiAgICAgICAgPEFkZEJ1dHRvbiBzaXplPVwidGlueVwiIG9uQ2xpY2s9eyhldmVudCkgPT4ge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICBzZXRDdXN0b21pemVQYWdlKCdwb3B1bGFyJylcbiAgICAgICAgfX0+XG4gICAgICAgICAgPEljb24gbmFtZT0ncGx1cy1hZGQnIC8+XG4gICAgICAgIDwvQWRkQnV0dG9uPlxuICAgICAgPC9zdW1tYXJ5PlxuICAgICAge3NsaWNlZFB1Ymxpc2hlcklkcy5tYXAocCA9PiA8SXRlbSBrZXk9e3B9IGlkPXtgcHVibGlzaGVycy8ke3B9YH0gbmFtZT17cHVibGlzaGVyc1twXT8ucHVibGlzaGVyTmFtZX0gLz4pfVxuICAgICAge3N1YnNjcmliZWRQdWJsaXNoZXJJZHMubGVuZ3RoID4gREVGQVVMVF9TSE9XX0NPVU5UXG4gICAgICAgICYmIDxDdXN0b21CdXR0b24gZmFpbnQgb25DbGljaz17KCkgPT4gc2V0U2hvd2luZ01vcmVQdWJsaXNoZXJzKHMgPT4gIXMpfT5cbiAgICAgICAgICB7c2hvd2luZ01vcmVQdWJsaXNoZXJzXG4gICAgICAgICAgICA/IGdldExvY2FsZShTLkJSQVZFX05FV1NfU0hPV19MRVNTKVxuICAgICAgICAgICAgOiBnZXRMb2NhbGUoUy5CUkFWRV9ORVdTX1NIT1dfQUxMKX1cbiAgICAgICAgPC9DdXN0b21CdXR0b24+fVxuICAgIDwvU2VjdGlvbj5cbiAgPC9Db250YWluZXI+XG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjIgVGhlIEJyYXZlIEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4vLyBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIGZpbGUsXG4vLyBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cHM6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy5cblxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VQcm9taXNlPFQ+IChnZXRQcm9taXNlOiAoKSA9PiBQcm9taXNlPFQ+LCBkZXBzOiBhbnlbXSkge1xuICAgIGNvbnN0IFtyZXN1bHQsIHNldFJlc3VsdF0gPSB1c2VTdGF0ZTxUIHwgdW5kZWZpbmVkPigpXG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSlcbiAgICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlPGFueT4oKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG5cbiAgICAgICAgc2V0TG9hZGluZyh0cnVlKVxuICAgICAgICBzZXRFcnJvcih1bmRlZmluZWQpXG5cbiAgICAgICAgZ2V0UHJvbWlzZSgpXG4gICAgICAgICAgICAudGhlbihyZXN1bHQgPT4gIWNhbmNlbGxlZCAmJiBzZXRSZXN1bHQocmVzdWx0KSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gIWNhbmNlbGxlZCAmJiBzZXRFcnJvcihlcnIpKVxuICAgICAgICAgICAgLmZpbmFsbHkoKCkgPT4gIWNhbmNlbGxlZCAmJiBzZXRMb2FkaW5nKGZhbHNlKSlcblxuICAgICAgICByZXR1cm4gKCkgPT4geyBjYW5jZWxsZWQgPSB0cnVlIH1cbiAgICB9LCBkZXBzKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmVzdWx0LFxuICAgICAgICBsb2FkaW5nLFxuICAgICAgICBlcnJvclxuICAgIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==