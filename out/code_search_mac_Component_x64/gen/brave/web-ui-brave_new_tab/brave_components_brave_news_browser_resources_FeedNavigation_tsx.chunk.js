export const __webpack_esm_id__ = "brave_components_brave_news_browser_resources_FeedNavigation_tsx";
export const __webpack_esm_ids__ = ["brave_components_brave_news_browser_resources_FeedNavigation_tsx"];
export const __webpack_esm_modules__ = {

/***/ "../../../brave/components/brave_news/browser/resources/FeedNavigation.tsx"
/*!********************************************************************************!*\
  !*** ./components/brave_news/browser/resources/FeedNavigation.tsx + 3 modules ***!
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
// EXTERNAL MODULE: ./components/brave_news/browser/resources/shared/Context.tsx + 2 modules
var Context = __webpack_require__("../../../brave/components/brave_news/browser/resources/shared/Context.tsx");
// EXTERNAL MODULE: ./components/brave_news/browser/resources/shared/api.ts
var api = __webpack_require__("../../../brave/components/brave_news/browser/resources/shared/api.ts");
;// ./components/common/strings.ts
// Copyright (c) 2025 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.


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

// EXTERNAL MODULE: ./components/brave_news/browser/resources/feed/Card.tsx
var Card = __webpack_require__("../../../brave/components/brave_news/browser/resources/feed/Card.tsx");
// EXTERNAL MODULE: ./components/common/locale.ts + 1 modules
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJhdmVfY29tcG9uZW50c19icmF2ZV9uZXdzX2Jyb3dzZXJfcmVzb3VyY2VzX0ZlZWROYXZpZ2F0aW9uX3RzeC5jaHVuay5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkRBQTZEO0FBQzdELHNFQUFzRTtBQUN0RSw0RUFBNEU7QUFDNUUsc0RBQXNEOzs7O0FDSHRELDZEQUE2RDtBQUM3RCxzRUFBc0U7QUFDdEUsNEVBQTRFO0FBQzVFLHNEQUFzRDtBQUUxQjs7O0FDTDVCLDZEQUE2RDtBQUM3RCxzRUFBc0U7QUFDdEUsNEVBQTRFO0FBQzVFLHNEQUFzRDtBQUVOO0FBSWpCO0FBQzZCO0FBQ1Y7QUFDL0I7QUFRbkIsTUFBTSxlQUFPLEdBQUcsb0NBQW1CLENBQWlCO0lBQ2xELE9BQU8sRUFBRSxFQUFFO0lBQ1gsUUFBUSxFQUFFLENBQUM7SUFDWCxXQUFXLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztDQUN2QixDQUFDO0FBRUssTUFBTSxpQkFBaUIsR0FBRyxHQUFHLEVBQUU7SUFDcEMsT0FBTyxpQ0FBZ0IsQ0FBQyxlQUFPLENBQUMsQ0FBQztBQUNuQyxDQUFDO0FBRWMsU0FBUyxjQUFjLENBQUMsS0FBa0M7SUFDdkUsTUFBTSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsR0FBRyx5QkFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLGtCQUFzQixFQUFFLENBQUMsVUFBVSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzdHLE1BQU0sQ0FBQyxRQUFRLEVBQUUsV0FBVyxDQUFDLEdBQUcsK0JBQWMsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxHQUFHLENBQUM7SUFDdkcsTUFBTSxrQkFBa0IsR0FBRyxrQ0FBaUIsQ0FBQyxDQUFDLEtBQWEs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O1FBRXJCLFVBQVUsQ0FBQyxJQUFJLENBQUM7UUFDaEIsUUFBUSxDQUFDLFNBQVMsQ0FBQztRQUVuQixVQUFVLEVBQUU7YUFDUCxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsSUFBSSxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDL0MsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLElBQUksUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ3pDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLFNBQVMsSUFBSSxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFbkQsT0FBTyxHQUFHLEVBQUUsR0FBRyxTQUFTLEdBQUcsSUFBSSxFQUFDLENBQUM7SUFDckMsQ0FBQyxFQUFFLElBQUksQ0FBQztJQUVSLE9BQU87UUFDSCxNQUFNO1FBQ04sT0FBTztRQUNQLEtBQUs7S0FDUjtBQUNMLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9icmF2ZS1jb3JlLy4vY29tcG9uZW50cy9jb21tb24vc3RyaW5ncy50cyIsIndlYnBhY2s6Ly9icmF2ZS1jb3JlLy4vY29tcG9uZW50cy9icmF2ZV9uZXdzL2Jyb3dzZXIvcmVzb3VyY2VzL3N0cmluZ3MudHMiLCJ3ZWJwYWNrOi8vYnJhdmUtY29yZS8uL2NvbXBvbmVudHMvYnJhdmVfbmV3cy9icm93c2VyL3Jlc291cmNlcy9jb250ZXh0LnRzeCIsIndlYnBhY2s6Ly9icmF2ZS1jb3JlLy4vY29tcG9uZW50cy9icmF2ZV9uZXdzL2Jyb3dzZXIvcmVzb3VyY2VzL0ZlZWROYXZpZ2F0aW9uLnRzeCIsIndlYnBhY2s6Ly9icmF2ZS1jb3JlLy4vY29tcG9uZW50cy9jb21tb24vdXNlUHJvbWlzZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjUgVGhlIEJyYXZlIEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4vLyBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIGZpbGUsXG4vLyBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cHM6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy5cblxuLy8gQ29udmVydHMgYEEgfCBCIHwgQ2AgdG8gYEEgJiBCICYgQ2BcbnR5cGUgVW5pb25Ub0ludGVyc2VjdGlvbjxVPiA9XG4gIChVIGV4dGVuZHMgYW55ID8gKHg6IFUpID0+IHZvaWQgOiBuZXZlcikgZXh0ZW5kcyAoKHg6IGluZmVyIEkpID0+IHZvaWQpID8gSSA6IG5ldmVyXG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgICAvLyBHbG9iYWwgaW50ZXJmYWNlIGNvbnRhaW5pbmcgYWxsIGF2YWlsYWJsZSBzdHJpbmdzLiBUaGlzIGxldHMgV2ViVUlzXG4gICAgLy8gZXh0ZW5kIHRoZSBhdmFpbGFibGUgc3RyaW5ncyB2aWFcbiAgICAvLyBpbXBvcnQgeyBNeVN0cmluZ3MgfSBmcm9tICdnZW4vY29tcG9uZW50cy9ncml0L2JyYXZlX2NvbXBvbmVudHNfd2VidWlfc3RyaW5ncydcbiAgICAvLyBkZWNsYXJlIGdsb2JhbCB7XG4gICAgLy8gICBpbnRlcmZhY2UgU3RyaW5ncyB7XG4gICAgLy8gICAgIE15U3RyaW5nczogdHlwZW9mIE15U3RyaW5nc1xuICAgIC8vICAgfVxuICAgIC8vIH1cbiAgICAvLyBhbmQgaGF2ZSB0aGVtIGF2YWlsYWJsZSBpbiB0aGUgZ2xvYmFsIHNjb3BlIGFzIGBTLk1ZX1NUUklOR1NfWFhYYFxuICAgIGludGVyZmFjZSBTdHJpbmdzIHtcbiAgICB9XG5cbiAgICAvLyBTIGlzIHRoZSBpbnRlcnNlY3Rpb24gb2YgYWxsIHRoZSBlbnVtcyBleHBvc2VkIG9uIHRoZSBTdHJpbmdzIGludGVyZmFjZS5cbiAgICBjb25zdCBTOiBVbmlvblRvSW50ZXJzZWN0aW9uPFN0cmluZ3Nba2V5b2YgU3RyaW5nc10+XG59XG5cbi8vIEVtcHR5IGRlZmF1bHQgZXhwb3J0IHRvIG1ha2UgdGhpcyBhIG1vZHVsZVxuZXhwb3J0IHt9XG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjUgVGhlIEJyYXZlIEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4vLyBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIGZpbGUsXG4vLyBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cHM6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy5cblxuaW1wb3J0ICckd2ViLWNvbW1vbi9zdHJpbmdzJ1xuXG5pbXBvcnQgeyBCcmF2ZU5ld3NTdHJpbmdzIH0gZnJvbSAnZ2VuL2NvbXBvbmVudHMvZ3JpdC9icmF2ZV9jb21wb25lbnRzX3dlYnVpX3N0cmluZ3MnXG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgLy8gRXhwb3NlIHRoZSBCcmF2ZU5ld3NTdHJpbmdzIGVudW0gb24gdGhlIGdsb2JhbCBgU2AgZW51bS5cbiAgaW50ZXJmYWNlIFN0cmluZ3Mge1xuICAgIEJyYXZlTmV3c1N0cmluZ3M6IHR5cGVvZiBCcmF2ZU5ld3NTdHJpbmdzXG4gIH1cbn1cbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMyBUaGUgQnJhdmUgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbi8vIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXMgZmlsZSxcbi8vIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwczovL21vemlsbGEub3JnL01QTC8yLjAvLlxuXG5pbXBvcnQgdXNlUHJvbWlzZSBmcm9tICckd2ViLWNvbW1vbi91c2VQcm9taXNlJztcbmltcG9ydCB7XG4gIFNpZ25hbFxufSBmcm9tICdnZW4vYnJhdmUvY29tcG9uZW50cy9icmF2ZV9uZXdzL2NvbW1vbi9icmF2ZV9uZXdzLm1vam9tLm0nO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQnJhdmVOZXdzQ29udGV4dFByb3ZpZGVyIH0gZnJvbSAnLi9zaGFyZWQvQ29udGV4dCc7XG5pbXBvcnQgZ2V0QnJhdmVOZXdzQ29udHJvbGxlciBmcm9tICcuL3NoYXJlZC9hcGknO1xuaW1wb3J0ICcuL3N0cmluZ3MnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEluc3BlY3RDb250ZXh0IHtcbiAgc2lnbmFsczogeyBba2V5OiBzdHJpbmddOiBTaWduYWwgfSxcbiAgdHJ1bmNhdGU6IG51bWJlcixcbiAgc2V0VHJ1bmNhdGU6ICh2YWx1ZTogbnVtYmVyKSA9PiB2b2lkXG59XG5cbmNvbnN0IENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0PEluc3BlY3RDb250ZXh0Pih7XG4gIHNpZ25hbHM6IHt9LFxuICB0cnVuY2F0ZTogMCxcbiAgc2V0VHJ1bmNhdGU6ICgpID0+IHsgfVxufSlcblxuZXhwb3J0IGNvbnN0IHVzZUluc3BlY3RDb250ZXh0ID0gKCkgPT4ge1xuICByZXR1cm4gUmVhY3QudXNlQ29udGV4dChDb250ZXh0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5zcGVjdENvbnRleHQocHJvcHM6IFJlYWN0LlByb3BzV2l0aENoaWxkcmVuPHt9Pikge1xuICBjb25zdCB7IHJlc3VsdDogc2lnbmFscyB9ID0gdXNlUHJvbWlzZSgoKSA9PiBnZXRCcmF2ZU5ld3NDb250cm9sbGVyKCkuZ2V0U2lnbmFscygpLnRoZW4ociA9PiByLnNpZ25hbHMpLCBbXSk7XG4gIGNvbnN0IFt0cnVuY2F0ZSwgc2V0VHJ1bmNhdGVdID0gUmVhY3QudXNlU3RhdGUocGFyc2VJbnQobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RydW5jYXRlJykgfHwgJycpIHx8IDI1MClcbiAgY29uc3Qgc2V0QW5kU2F2ZVRydW5jYXRlID0gUmVhY3QudXNlQ2FsbGJhY2soKHZhbHVlOiBudW1iZXIpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndHJ1bmNhdGUnLCB2YWx1ZS50b1N0cmluZygpKVxuICAgIHNldFRydW5jYXRlKHZhbHVlKVxuICB9LCBbXSlcbiAgY29uc3QgY29udGV4dCA9IFJlYWN0LnVzZU1lbW88SW5zcGVjdENvbnRleHQ+KCgpID0+ICh7XG4gICAgc2lnbmFsczogc2lnbmFscyA/PyB7fSxcbiAgICB0cnVuY2F0ZSxcbiAgICBzZXRUcnVuY2F0ZTogc2V0QW5kU2F2ZVRydW5jYXRlXG4gIH0pLCBbc2lnbmFscywgdHJ1bmNhdGUsIHNldEFuZFNhdmVUcnVuY2F0ZV0pXG5cbiAgcmV0dXJuIDxCcmF2ZU5ld3NDb250ZXh0UHJvdmlkZXI+XG4gICAgPENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2NvbnRleHR9PlxuICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgIDwvQ29udGV4dC5Qcm92aWRlcj5cbiAgPC9CcmF2ZU5ld3NDb250ZXh0UHJvdmlkZXI+XG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjMgVGhlIEJyYXZlIEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4vLyBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIGZpbGUsXG4vLyBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cHM6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy5cbmltcG9ydCBJY29uIGZyb20gJ0BicmF2ZS9sZW8vcmVhY3QvaWNvbic7XG5pbXBvcnQgeyBlZmZlY3QsIGZvbnQsIHJhZGl1cywgc3BhY2luZyB9IGZyb20gJ0BicmF2ZS9sZW8vdG9rZW5zL2Nzcy92YXJpYWJsZXMnO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyB1c2VJbnNwZWN0Q29udGV4dCB9IGZyb20gJy4vY29udGV4dCc7XG5pbXBvcnQgQ2FyZCBmcm9tICcuL2ZlZWQvQ2FyZCc7XG5pbXBvcnQgeyB1c2VCcmF2ZU5ld3MgfSBmcm9tICcuL3NoYXJlZC9Db250ZXh0JztcbmltcG9ydCB7IGlzUHVibGlzaGVyRW5hYmxlZCB9IGZyb20gJy4vc2hhcmVkL2FwaSc7XG5pbXBvcnQgeyBGZWVkVmlldyB9IGZyb20gJy4vc2hhcmVkL3VzZUZlZWRWMic7XG5pbXBvcnQgeyBnZXRMb2NhbGUgfSBmcm9tICckd2ViLWNvbW1vbi9sb2NhbGUnO1xuaW1wb3J0IFNldHRpbmdzQnV0dG9uIGZyb20gJy4vU2V0dGluZ3NCdXR0b24nO1xuXG5jb25zdCBERUZBVUxUX1NIT1dfQ09VTlQgPSA0O1xuXG5jb25zdCBQQURfTEVGVCA9ICczNHB4JztcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkKENhcmQpYFxuICB3aWR0aDogMjcwcHg7XG5cbiAgcGFkZGluZzogJHtzcGFjaW5nLnhsfSAke3NwYWNpbmcubX07XG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogJHtzcGFjaW5nLnhsfTtcblxuICBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gJHtzcGFjaW5nLnhsfSAqIDIpO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuXG4gIHNjcm9sbGJhci13aWR0aDogdGhpbjtcbiAgc2Nyb2xsYmFyLWNvbG9yOiB2YXIoLS1ibi1nbGFzcy0xMCkgdmFyKC0tYm4tZ2xhc3MtMTApO1xuYFxuXG5jb25zdCBDdXN0b21CdXR0b24gPSBzdHlsZWQuYnV0dG9uIDx7IHNlbGVjdGVkPzogYm9vbGVhbiwgZmFpbnQ/OiBib29sZWFuLCBib2xkPzogYm9vbGVhbiB9PmBcbiAgcGFkZGluZzogJHtzcGFjaW5nLm19O1xuICBwYWRkaW5nLWxlZnQ6ICR7UEFEX0xFRlR9O1xuXG4gIGRpc3BsYXk6IGJsb2NrO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAke3JhZGl1cy5tfTtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB3aWR0aDogMTAwJTtcblxuICBjb2xvcjogJHtwID0+IHAuZmFpbnQgPyBgdmFyKC0tYm4tZ2xhc3MtNTApYCA6IGB2YXIoLS1ibi1nbGFzcy0xMDApYH07XG4gIGZvbnQ6ICR7cCA9PiBmb250LnNtYWxsW3AuYm9sZCA/ICdzZW1pYm9sZCcgOiAncmVndWxhciddfTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICY6aG92ZXIge1xuICAgIG9wYWNpdHk6IDAuNztcbiAgfVxuXG4gICY6Zm9jdXMtdmlzaWJsZSB7XG4gICAgYm94LXNoYWRvdzogJHtlZmZlY3QuZm9jdXNTdGF0ZX07XG4gIH1cblxuICAke3AgPT4gcC5zZWxlY3RlZCAmJiBjc3NgYmFja2dyb3VuZDogdmFyKC0tYm4tZ2xhc3MtMTApO2B9XG5gXG5jb25zdCBTZWN0aW9uID0gc3R5bGVkLmRldGFpbHNgXG4gICYgc3VtbWFyeSB7XG4gICAgLS1sZW8taWNvbi1zaXplOiAxOHB4O1xuXG4gICAgY29sb3I6IHZhcigtLWJuLWdsYXNzLTEwMCk7XG4gICAgcGFkZGluZzogJHtzcGFjaW5nLm19O1xuICAgIGJvcmRlci1yYWRpdXM6ICR7cmFkaXVzLm19O1xuICAgIG91dGxpbmU6IG5vbmU7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAke3NwYWNpbmcubX07XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBmb250OiAke2ZvbnQuc21hbGwuc2VtaWJvbGR9O1xuXG4gICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgOmZvY3VzLXZpc2libGUge1xuICAgICAgYm94LXNoYWRvdzogJHtlZmZlY3QuZm9jdXNTdGF0ZX07XG4gICAgfVxuXG4gICAgJHtTZXR0aW5nc0J1dHRvbn0ge1xuICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgfVxuICB9XG5cbiAgJiBzdW1tYXJ5IC5tYXJrZXIge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4xcyBlYXNlLWluLW91dDtcbiAgICBjb2xvcjogdmFyKC0tYm4tY2FyZC1jb2xvcik7XG4gIH1cblxuICAmW29wZW5dIHN1bW1hcnkgLm1hcmtlciB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICB9XG5gXG5cbmNvbnN0IEFkZEJ1dHRvbiA9IHN0eWxlZChTZXR0aW5nc0J1dHRvbilgXG4gIC0tbGVvLWJ1dHRvbi1wYWRkaW5nOiAke3NwYWNpbmcueHN9O1xuYFxuXG5mdW5jdGlvbiB1c2VQZXJzaXN0ZWRTdGF0ZTxUPihuYW1lOiBzdHJpbmcsIGRlZmF1bHRWYWx1ZTogVCkge1xuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IFJlYWN0LnVzZVN0YXRlPFQ+KEpTT04ucGFyc2UobG9jYWxTdG9yYWdlW25hbWVdID8/IG51bGwpID8/IGRlZmF1bHRWYWx1ZSlcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2VbbmFtZV0gPSBKU09OLnN0cmluZ2lmeSh2YWx1ZSlcbiAgfSwgW25hbWUsIHZhbHVlXSlcblxuICByZXR1cm4gW3ZhbHVlLCBzZXRWYWx1ZV0gYXMgY29uc3Rcbn1cblxuY29uc3QgTWFya2VyID0gPEljb24gbmFtZT0nYXJyb3ctc21hbGwtcmlnaHQnIGNsYXNzTmFtZT0nbWFya2VyJyAvPlxuY29uc3QgUGxhY2Vob2xkZXJNYXJrZXIgPSA8SWNvbiAvPlxuXG5leHBvcnQgZnVuY3Rpb24gSXRlbShwcm9wczogeyBpZDogRmVlZFZpZXcsIG5hbWU6IHN0cmluZyB9KSB7XG4gIGNvbnN0IHsgZmVlZFZpZXcsIHNldEZlZWRWaWV3LCByZXBvcnRTaWRlYmFyRmlsdGVyVXNhZ2UgfSA9IHVzZUJyYXZlTmV3cygpXG4gIGNvbnN0IHRvcExldmVsID0gWydhbGwnLCAnZm9sbG93aW5nJ10uaW5jbHVkZXMocHJvcHMuaWQpXG4gIHJldHVybiA8Q3VzdG9tQnV0dG9uXG4gICAgc2VsZWN0ZWQ9e3Byb3BzLmlkID09PSBmZWVkVmlld31cbiAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICBzZXRGZWVkVmlldyhwcm9wcy5pZClcbiAgICAgIHJlcG9ydFNpZGViYXJGaWx0ZXJVc2FnZSgpXG4gICAgfX1cbiAgICBib2xkPXt0b3BMZXZlbH1cbiAgPlxuICAgIHtwcm9wcy5uYW1lfVxuICA8L0N1c3RvbUJ1dHRvbj5cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2lkZWJhcigpIHtcbiAgY29uc3QgeyBjaGFubmVscywgcHVibGlzaGVycywgc2V0Q3VzdG9taXplUGFnZSB9ID0gdXNlQnJhdmVOZXdzKClcbiAgY29uc3QgeyBzaWduYWxzIH0gPSB1c2VJbnNwZWN0Q29udGV4dCgpXG5cbiAgY29uc3QgW3Nob3dpbmdNb3JlQ2hhbm5lbHMsIHNldFNob3dpbmdNb3JlQ2hhbm5lbHNdID0gdXNlUGVyc2lzdGVkU3RhdGUoXCJzaG93aW5nTW9yZUNoYW5uZWxzXCIsIGZhbHNlKVxuICBjb25zdCBbc2hvd2luZ01vcmVQdWJsaXNoZXJzLCBzZXRTaG93aW5nTW9yZVB1Ymxpc2hlcnNdID0gdXNlUGVyc2lzdGVkU3RhdGUoXCJzaG93aW5nTW9yZVB1Ymxpc2hlcnNcIiwgZmFsc2UpXG5cbiAgY29uc3Qgc3Vic2NyaWJlZFB1Ymxpc2hlcklkcyA9IFJlYWN0LnVzZU1lbW8oKCkgPT4gT2JqZWN0LmtleXMocHVibGlzaGVycylcbiAgICAuZmlsdGVyKHAgPT4gaXNQdWJsaXNoZXJFbmFibGVkKHB1Ymxpc2hlcnNbcF0pKVxuICAgIC5zb3J0KChhLCBiKSA9PiBzaWduYWxzW2JdPy52aXNpdFdlaWdodCAtIHNpZ25hbHNbYV0/LnZpc2l0V2VpZ2h0KSwgW3B1Ymxpc2hlcnMsIHNpZ25hbHNdKVxuICBjb25zdCBzbGljZWRQdWJsaXNoZXJJZHMgPSBSZWFjdC51c2VNZW1vKCgpID0+IHN1YnNjcmliZWRQdWJsaXNoZXJJZHNcbiAgICAuc2xpY2UoMCwgc2hvd2luZ01vcmVQdWJsaXNoZXJzID8gdW5kZWZpbmVkIDogREVGQVVMVF9TSE9XX0NPVU5UKSwgW3N1YnNjcmliZWRQdWJsaXNoZXJJZHMsIHNob3dpbmdNb3JlUHVibGlzaGVyc10pXG4gIGNvbnN0IHN1YnNjcmliZWRDaGFubmVscyA9IFJlYWN0LnVzZU1lbW8oKCkgPT4gT2JqZWN0LmtleXMoY2hhbm5lbHMpXG4gICAgLmZpbHRlcihjID0+IGNoYW5uZWxzW2NdLnN1YnNjcmliZWRMb2NhbGVzLmxlbmd0aClcbiAgICAuc29ydCgoYSwgYikgPT4gc2lnbmFsc1tiXT8udmlzaXRXZWlnaHQgLSBzaWduYWxzW2FdPy52aXNpdFdlaWdodCksXG4gICAgW2NoYW5uZWxzLCBzaWduYWxzXSlcbiAgY29uc3Qgc2xpY2VkQ2hhbm5lbElkcyA9IFJlYWN0LnVzZU1lbW8oKCkgPT4gc3Vic2NyaWJlZENoYW5uZWxzXG4gICAgLnNsaWNlKDAsIHNob3dpbmdNb3JlQ2hhbm5lbHMgPyB1bmRlZmluZWQgOiBERUZBVUxUX1NIT1dfQ09VTlQpLCBbc3Vic2NyaWJlZENoYW5uZWxzLCBzaG93aW5nTW9yZUNoYW5uZWxzXSlcblxuICByZXR1cm4gPENvbnRhaW5lcj5cbiAgICA8SXRlbSBpZD0nYWxsJyBuYW1lPXtnZXRMb2NhbGUoUy5CUkFWRV9ORVdTX0ZPUl9ZT1VfRkVFRCl9IC8+XG4gICAgPEl0ZW0gaWQ9J2ZvbGxvd2luZycgbmFtZT17Z2V0TG9jYWxlKFMuQlJBVkVfTkVXU19GT0xMT1dJTkdfRkVFRCl9IC8+XG4gICAgPFNlY3Rpb24gb3Blbj5cbiAgICAgIDxzdW1tYXJ5PlxuICAgICAgICB7c3Vic2NyaWJlZENoYW5uZWxzLmxlbmd0aCA/IE1hcmtlciA6IFBsYWNlaG9sZGVyTWFya2VyfVxuICAgICAgICB7Z2V0TG9jYWxlKFMuQlJBVkVfTkVXU19CUk9XU0VfQ0hBTk5FTFNfSEVBREVSKX1cbiAgICAgICAgPEFkZEJ1dHRvbiBzaXplPVwidGlueVwiIG9uQ2xpY2s9eyhldmVudCkgPT4ge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICBzZXRDdXN0b21pemVQYWdlKCduZXdzJylcbiAgICAgICAgfX0+XG4gICAgICAgICAgPEljb24gbmFtZT0ncGx1cy1hZGQnIC8+XG4gICAgICAgIDwvQWRkQnV0dG9uPlxuICAgICAgPC9zdW1tYXJ5PlxuICAgICAge3NsaWNlZENoYW5uZWxJZHMubWFwKGMgPT4gPEl0ZW0ga2V5PXtjfSBpZD17YGNoYW5uZWxzLyR7Y31gfSBuYW1lPXtjfSAvPil9XG4gICAgICB7c3Vic2NyaWJlZENoYW5uZWxzLmxlbmd0aCA+IERFRkFVTFRfU0hPV19DT1VOVFxuICAgICAgICAmJiA8Q3VzdG9tQnV0dG9uIGZhaW50IG9uQ2xpY2s9eygpID0+IHNldFNob3dpbmdNb3JlQ2hhbm5lbHMocyA9PiAhcyl9PlxuICAgICAgICAgIHtzaG93aW5nTW9yZUNoYW5uZWxzXG4gICAgICAgICAgICA/IGdldExvY2FsZShTLkJSQVZFX05FV1NfU0hPV19MRVNTKVxuICAgICAgICAgICAgOiBnZXRMb2NhbGUoUy5CUkFWRV9ORVdTX1NIT1dfQUxMKX1cbiAgICAgICAgPC9DdXN0b21CdXR0b24+fVxuICAgIDwvU2VjdGlvbj5cbiAgICA8U2VjdGlvbiBvcGVuPlxuICAgICAgPHN1bW1hcnk+XG4gICAgICAgIHtzdWJzY3JpYmVkUHVibGlzaGVySWRzLmxlbmd0aCA/IE1hcmtlciA6IFBsYWNlaG9sZGVyTWFya2VyfVxuICAgICAgICB7Z2V0TG9jYWxlKFMuQlJBVkVfTkVXU19QVUJMSVNIRVJTX0hFQURJTkcpfVxuICAgICAgICA8QWRkQnV0dG9uIHNpemU9XCJ0aW55XCIgb25DbGljaz17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgIHNldEN1c3RvbWl6ZVBhZ2UoJ3BvcHVsYXInKVxuICAgICAgICB9fT5cbiAgICAgICAgICA8SWNvbiBuYW1lPSdwbHVzLWFkZCcgLz5cbiAgICAgICAgPC9BZGRCdXR0b24+XG4gICAgICA8L3N1bW1hcnk+XG4gICAgICB7c2xpY2VkUHVibGlzaGVySWRzLm1hcChwID0+IDxJdGVtIGtleT17cH0gaWQ9e2BwdWJsaXNoZXJzLyR7cH1gfSBuYW1lPXtwdWJsaXNoZXJzW3BdPy5wdWJsaXNoZXJOYW1lfSAvPil9XG4gICAgICB7c3Vic2NyaWJlZFB1Ymxpc2hlcklkcy5sZW5ndGggPiBERUZBVUxUX1NIT1dfQ09VTlRcbiAgICAgICAgJiYgPEN1c3RvbUJ1dHRvbiBmYWludCBvbkNsaWNrPXsoKSA9PiBzZXRTaG93aW5nTW9yZVB1Ymxpc2hlcnMocyA9PiAhcyl9PlxuICAgICAgICAgIHtzaG93aW5nTW9yZVB1Ymxpc2hlcnNcbiAgICAgICAgICAgID8gZ2V0TG9jYWxlKFMuQlJBVkVfTkVXU19TSE9XX0xFU1MpXG4gICAgICAgICAgICA6IGdldExvY2FsZShTLkJSQVZFX05FV1NfU0hPV19BTEwpfVxuICAgICAgICA8L0N1c3RvbUJ1dHRvbj59XG4gICAgPC9TZWN0aW9uPlxuICA8L0NvbnRhaW5lcj5cbn1cbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMiBUaGUgQnJhdmUgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbi8vIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXMgZmlsZSxcbi8vIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwczovL21vemlsbGEub3JnL01QTC8yLjAvLlxuXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZVByb21pc2U8VD4gKGdldFByb21pc2U6ICgpID0+IFByb21pc2U8VD4sIGRlcHM6IGFueVtdKSB7XG4gICAgY29uc3QgW3Jlc3VsdCwgc2V0UmVzdWx0XSA9IHVzZVN0YXRlPFQgfCB1bmRlZmluZWQ+KClcbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKVxuICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGU8YW55PigpXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcblxuICAgICAgICBzZXRMb2FkaW5nKHRydWUpXG4gICAgICAgIHNldEVycm9yKHVuZGVmaW5lZClcblxuICAgICAgICBnZXRQcm9taXNlKClcbiAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiAhY2FuY2VsbGVkICYmIHNldFJlc3VsdChyZXN1bHQpKVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiAhY2FuY2VsbGVkICYmIHNldEVycm9yKGVycikpXG4gICAgICAgICAgICAuZmluYWxseSgoKSA9PiAhY2FuY2VsbGVkICYmIHNldExvYWRpbmcoZmFsc2UpKVxuXG4gICAgICAgIHJldHVybiAoKSA9PiB7IGNhbmNlbGxlZCA9IHRydWUgfVxuICAgIH0sIGRlcHMpXG5cbiAgICByZXR1cm4ge1xuICAgICAgICByZXN1bHQsXG4gICAgICAgIGxvYWRpbmcsXG4gICAgICAgIGVycm9yXG4gICAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9