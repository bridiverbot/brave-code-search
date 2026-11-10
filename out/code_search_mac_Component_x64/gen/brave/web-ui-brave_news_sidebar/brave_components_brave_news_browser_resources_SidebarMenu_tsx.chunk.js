export const __webpack_esm_id__ = "brave_components_brave_news_browser_resources_SidebarMenu_tsx";
export const __webpack_esm_ids__ = ["brave_components_brave_news_browser_resources_SidebarMenu_tsx"];
export const __webpack_esm_modules__ = {

/***/ "../../../brave/components/brave_news/browser/resources/SidebarMenu.tsx"
/*!*****************************************************************************!*\
  !*** ./components/brave_news/browser/resources/SidebarMenu.tsx + 3 modules ***!
  \*****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SidebarMenu)
});
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external ["//resources/brave/react.bundle.js","React"]
var react_bundle_js_React_ = __webpack_require__("react");
// EXTERNAL MODULE: ./node_modules/.pnpm/styled-components@6.4.3_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/styled-components/dist/styled-components.esm.js + 7 modules
var styled_components_esm = __webpack_require__("../../../brave/node_modules/.pnpm/styled-components@6.4.3_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/styled-components/dist/styled-components.esm.js");
// EXTERNAL MODULE: ./node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/react/icon.js + 2 modules
var icon = __webpack_require__("../../../brave/node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/react/icon.js");
// EXTERNAL MODULE: ./node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/tokens/css/variables.js
var variables = __webpack_require__("../../../brave/node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/tokens/css/variables.js");
;// ./components/common/usePromise.ts
// Copyright (c) 2022 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.

function usePromise(getPromise, deps) {
    const [result, setResult] = (0,react_bundle_js_React_.useState)();
    const [loading, setLoading] = (0,react_bundle_js_React_.useState)(true);
    const [error, setError] = (0,react_bundle_js_React_.useState)();
    (0,react_bundle_js_React_.useEffect)(() => {
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

// EXTERNAL MODULE: ./components/brave_news/browser/resources/shared/Context.tsx + 6 modules
var Context = __webpack_require__("../../../brave/components/brave_news/browser/resources/shared/Context.tsx");
// EXTERNAL MODULE: ./components/brave_news/browser/resources/shared/api.ts
var api = __webpack_require__("../../../brave/components/brave_news/browser/resources/shared/api.ts");
// EXTERNAL MODULE: ./components/brave_news/browser/resources/strings.ts + 1 modules
var strings = __webpack_require__("../../../brave/components/brave_news/browser/resources/strings.ts");
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
    const { result: signals } = usePromise(() => (0,api["default"])().getSignals().then(r => r.signals), []);
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

;// ./components/brave_news/browser/resources/SidebarMenu.tsx
// Copyright (c) 2024 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.





const SidebarMenu_Container = styled_components_esm["default"].dialog.withConfig({ displayName: "Container", componentId: "sc-15c7nj3" }) `
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
    const dialogRef = react_bundle_js_React_.useRef(null);
    return react_bundle_js_React_.createElement(SettingsButton["default"], { onClick: () => { var _a; return (_a = dialogRef.current) === null || _a === void 0 ? void 0 : _a.showModal(); } },
        react_bundle_js_React_.createElement(icon["default"], { name: "hamburger-menu" }),
        react_bundle_js_React_.createElement(SidebarMenu_Container, { ref: dialogRef, onClick: e => {
                // Close the menu on click outside.
                const bounds = e.currentTarget.getBoundingClientRect();
                if (e.clientX < bounds.x || e.clientY < bounds.y || e.clientX > bounds.right || e.clientY > bounds.bottom) {
                    e.currentTarget.close();
                }
            } },
            react_bundle_js_React_.createElement(Sidebar, null)));
}


/***/ }

};

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJhdmVfY29tcG9uZW50c19icmF2ZV9uZXdzX2Jyb3dzZXJfcmVzb3VyY2VzX1NpZGViYXJNZW51X3RzeC5jaHVuay5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw2REFBNkQ7QUFDN0Qsc0VBQXNFO0FBQ3RFLDRFQUE0RTtBQUM1RSxzREFBc0Q7QUFFWDtBQUU1QixTQUFTLFVBQVUsQ0FBSyxVQUE0QixFQUFFLElBQVc7SUFDNUUsTUFBTSxDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsR0FBRyxtQ0FBUSxFQUFpQjtJQUNyRCxNQUFNLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxHQUFHLG1DQUFRLENBQUMsSUFBSSxDQUFDO0lBQzVDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLEdBQUcsbUNBQVEsRUFBTztJQUV6QyxvQ0FBUyxDQUFDLEdBQUcsRUFBRTtRQUNYLElBQUksU0FBUyxHQUFHLEtBQUs7UUFFckIsVUFBVSxDQUFDLElBQUksQ0FBQztRQUNoQixRQUFRLENBQUMsU0FBUyxDQUFDO1FBRW5CLFVBQVUsRUFBRTthQUNQLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxJQUFJLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUMvQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsSUFBSSxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDekMsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsU0FBUyxJQUFJLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUVuRCxPQUFPLEdBQUcsRUFBRSxHQUFHLFNBQVMsR0FBRyxJQUFJLEVBQUMsQ0FBQztJQUNyQyxDQUFDLEVBQUUsSUFBSSxDQUFDO0lBRVIsT0FBTztRQUNILE1BQU07UUFDTixPQUFPO1FBQ1AsS0FBSztLQUNSO0FBQ0wsQ0FBQzs7Ozs7Ozs7O0FDL0JELDZEQUE2RDtBQUM3RCxzRUFBc0U7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QyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7b0JBQzFHLENBQUMsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFO2dCQUN6QixDQUFDO1lBQ0gsQ0FBQztZQUNDLHFDQUFDLE9BQWMsT0FBRyxDQUNSLENBQ0c7QUFDbkIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JyYXZlLWNvcmUvLi9jb21wb25lbnRzL2NvbW1vbi91c2VQcm9taXNlLnRzIiwid2VicGFjazovL2JyYXZlLWNvcmUvLi9jb21wb25lbnRzL2JyYXZlX25ld3MvYnJvd3Nlci9yZXNvdXJjZXMvY29udGV4dC50c3giLCJ3ZWJwYWNrOi8vYnJhdmUtY29yZS8uL2NvbXBvbmVudHMvYnJhdmVfbmV3cy9icm93c2VyL3Jlc291cmNlcy9GZWVkTmF2aWdhdGlvbi50c3giLCJ3ZWJwYWNrOi8vYnJhdmUtY29yZS8uL2NvbXBvbmVudHMvYnJhdmVfbmV3cy9icm93c2VyL3Jlc291cmNlcy9TaWRlYmFyTWVudS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIyIFRoZSBCcmF2ZSBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuLy8gTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBmaWxlLFxuLy8gWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHBzOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uXG5cbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlUHJvbWlzZTxUPiAoZ2V0UHJvbWlzZTogKCkgPT4gUHJvbWlzZTxUPiwgZGVwczogYW55W10pIHtcbiAgICBjb25zdCBbcmVzdWx0LCBzZXRSZXN1bHRdID0gdXNlU3RhdGU8VCB8IHVuZGVmaW5lZD4oKVxuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpXG4gICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZTxhbnk+KClcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuXG4gICAgICAgIHNldExvYWRpbmcodHJ1ZSlcbiAgICAgICAgc2V0RXJyb3IodW5kZWZpbmVkKVxuXG4gICAgICAgIGdldFByb21pc2UoKVxuICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+ICFjYW5jZWxsZWQgJiYgc2V0UmVzdWx0KHJlc3VsdCkpXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+ICFjYW5jZWxsZWQgJiYgc2V0RXJyb3IoZXJyKSlcbiAgICAgICAgICAgIC5maW5hbGx5KCgpID0+ICFjYW5jZWxsZWQgJiYgc2V0TG9hZGluZyhmYWxzZSkpXG5cbiAgICAgICAgcmV0dXJuICgpID0+IHsgY2FuY2VsbGVkID0gdHJ1ZSB9XG4gICAgfSwgZGVwcylcblxuICAgIHJldHVybiB7XG4gICAgICAgIHJlc3VsdCxcbiAgICAgICAgbG9hZGluZyxcbiAgICAgICAgZXJyb3JcbiAgICB9XG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjMgVGhlIEJyYXZlIEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4vLyBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIGZpbGUsXG4vLyBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cHM6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy5cblxuaW1wb3J0IHVzZVByb21pc2UgZnJvbSAnJHdlYi1jb21tb24vdXNlUHJvbWlzZSc7XG5pbXBvcnQge1xuICBTaWduYWxcbn0gZnJvbSAnZ2VuL2JyYXZlL2NvbXBvbmVudHMvYnJhdmVfbmV3cy9jb21tb24vYnJhdmVfbmV3cy5tb2pvbS5tJztcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJyYXZlTmV3c0NvbnRleHRQcm92aWRlciB9IGZyb20gJy4vc2hhcmVkL0NvbnRleHQnO1xuaW1wb3J0IGdldEJyYXZlTmV3c0NvbnRyb2xsZXIgZnJvbSAnLi9zaGFyZWQvYXBpJztcbmltcG9ydCAnLi9zdHJpbmdzJztcblxuZXhwb3J0IGludGVyZmFjZSBJbnNwZWN0Q29udGV4dCB7XG4gIHNpZ25hbHM6IHsgW2tleTogc3RyaW5nXTogU2lnbmFsIH0sXG4gIHRydW5jYXRlOiBudW1iZXIsXG4gIHNldFRydW5jYXRlOiAodmFsdWU6IG51bWJlcikgPT4gdm9pZFxufVxuXG5jb25zdCBDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dDxJbnNwZWN0Q29udGV4dD4oe1xuICBzaWduYWxzOiB7fSxcbiAgdHJ1bmNhdGU6IDAsXG4gIHNldFRydW5jYXRlOiAoKSA9PiB7IH1cbn0pXG5cbmV4cG9ydCBjb25zdCB1c2VJbnNwZWN0Q29udGV4dCA9ICgpID0+IHtcbiAgcmV0dXJuIFJlYWN0LnVzZUNvbnRleHQoQ29udGV4dCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluc3BlY3RDb250ZXh0KHByb3BzOiBSZWFjdC5Qcm9wc1dpdGhDaGlsZHJlbjx7fT4pIHtcbiAgY29uc3QgeyByZXN1bHQ6IHNpZ25hbHMgfSA9IHVzZVByb21pc2UoKCkgPT4gZ2V0QnJhdmVOZXdzQ29udHJvbGxlcigpLmdldFNpZ25hbHMoKS50aGVuKHIgPT4gci5zaWduYWxzKSwgW10pO1xuICBjb25zdCBbdHJ1bmNhdGUsIHNldFRydW5jYXRlXSA9IFJlYWN0LnVzZVN0YXRlKHBhcnNlSW50KGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0cnVuY2F0ZScpIHx8ICcnKSB8fCAyNTApXG4gIGNvbnN0IHNldEFuZFNhdmVUcnVuY2F0ZSA9IFJlYWN0LnVzZUNhbGxiYWNrKCh2YWx1ZTogbnVtYmVyKSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RydW5jYXRlJywgdmFsdWUudG9TdHJpbmcoKSlcbiAgICBzZXRUcnVuY2F0ZSh2YWx1ZSlcbiAgfSwgW10pXG4gIGNvbnN0IGNvbnRleHQgPSBSZWFjdC51c2VNZW1vPEluc3BlY3RDb250ZXh0PigoKSA9PiAoe1xuICAgIHNpZ25hbHM6IHNpZ25hbHMgPz8ge30sXG4gICAgdHJ1bmNhdGUsXG4gICAgc2V0VHJ1bmNhdGU6IHNldEFuZFNhdmVUcnVuY2F0ZVxuICB9KSwgW3NpZ25hbHMsIHRydW5jYXRlLCBzZXRBbmRTYXZlVHJ1bmNhdGVdKVxuXG4gIHJldHVybiA8QnJhdmVOZXdzQ29udGV4dFByb3ZpZGVyPlxuICAgIDxDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtjb250ZXh0fT5cbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICA8L0NvbnRleHQuUHJvdmlkZXI+XG4gIDwvQnJhdmVOZXdzQ29udGV4dFByb3ZpZGVyPlxufVxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIzIFRoZSBCcmF2ZSBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuLy8gTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBmaWxlLFxuLy8gWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHBzOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uXG5pbXBvcnQgSWNvbiBmcm9tICdAYnJhdmUvbGVvL3JlYWN0L2ljb24nO1xuaW1wb3J0IHsgZWZmZWN0LCBmb250LCByYWRpdXMsIHNwYWNpbmcgfSBmcm9tICdAYnJhdmUvbGVvL3Rva2Vucy9jc3MvdmFyaWFibGVzJztcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgdXNlSW5zcGVjdENvbnRleHQgfSBmcm9tICcuL2NvbnRleHQnO1xuaW1wb3J0IENhcmQgZnJvbSAnLi9mZWVkL0NhcmQnO1xuaW1wb3J0IHsgdXNlQnJhdmVOZXdzIH0gZnJvbSAnLi9zaGFyZWQvQ29udGV4dCc7XG5pbXBvcnQgeyBpc1B1Ymxpc2hlckVuYWJsZWQgfSBmcm9tICcuL3NoYXJlZC9hcGknO1xuaW1wb3J0IHsgRmVlZFZpZXcgfSBmcm9tICcuL3NoYXJlZC91c2VGZWVkVjInO1xuaW1wb3J0IHsgZ2V0TG9jYWxlIH0gZnJvbSAnJHdlYi1jb21tb24vbG9jYWxlJztcbmltcG9ydCBTZXR0aW5nc0J1dHRvbiBmcm9tICcuL1NldHRpbmdzQnV0dG9uJztcblxuY29uc3QgREVGQVVMVF9TSE9XX0NPVU5UID0gNDtcblxuY29uc3QgUEFEX0xFRlQgPSAnMzRweCc7XG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZChDYXJkKWBcbiAgd2lkdGg6IDI3MHB4O1xuXG4gIHBhZGRpbmc6ICR7c3BhY2luZy54bH0gJHtzcGFjaW5nLm19O1xuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6ICR7c3BhY2luZy54bH07XG5cbiAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtICR7c3BhY2luZy54bH0gKiAyKTtcbiAgb3ZlcmZsb3cteTogYXV0bztcblxuICBzY3JvbGxiYXItd2lkdGg6IHRoaW47XG4gIHNjcm9sbGJhci1jb2xvcjogdmFyKC0tYm4tZ2xhc3MtMTApIHZhcigtLWJuLWdsYXNzLTEwKTtcbmBcblxuY29uc3QgQ3VzdG9tQnV0dG9uID0gc3R5bGVkLmJ1dHRvbiA8eyBzZWxlY3RlZD86IGJvb2xlYW4sIGZhaW50PzogYm9vbGVhbiwgYm9sZD86IGJvb2xlYW4gfT5gXG4gIHBhZGRpbmc6ICR7c3BhY2luZy5tfTtcbiAgcGFkZGluZy1sZWZ0OiAke1BBRF9MRUZUfTtcblxuICBkaXNwbGF5OiBibG9jaztcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogJHtyYWRpdXMubX07XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgY29sb3I6ICR7cCA9PiBwLmZhaW50ID8gYHZhcigtLWJuLWdsYXNzLTUwKWAgOiBgdmFyKC0tYm4tZ2xhc3MtMTAwKWB9O1xuICBmb250OiAke3AgPT4gZm9udC5zbWFsbFtwLmJvbGQgPyAnc2VtaWJvbGQnIDogJ3JlZ3VsYXInXX07XG4gIGN1cnNvcjogcG9pbnRlcjtcblxuICAmOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAwLjc7XG4gIH1cblxuICAmOmZvY3VzLXZpc2libGUge1xuICAgIGJveC1zaGFkb3c6ICR7ZWZmZWN0LmZvY3VzU3RhdGV9O1xuICB9XG5cbiAgJHtwID0+IHAuc2VsZWN0ZWQgJiYgY3NzYGJhY2tncm91bmQ6IHZhcigtLWJuLWdsYXNzLTEwKTtgfVxuYFxuY29uc3QgU2VjdGlvbiA9IHN0eWxlZC5kZXRhaWxzYFxuICAmIHN1bW1hcnkge1xuICAgIC0tbGVvLWljb24tc2l6ZTogMThweDtcblxuICAgIGNvbG9yOiB2YXIoLS1ibi1nbGFzcy0xMDApO1xuICAgIHBhZGRpbmc6ICR7c3BhY2luZy5tfTtcbiAgICBib3JkZXItcmFkaXVzOiAke3JhZGl1cy5tfTtcbiAgICBvdXRsaW5lOiBub25lO1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogJHtzcGFjaW5nLm19O1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgZm9udDogJHtmb250LnNtYWxsLnNlbWlib2xkfTtcblxuICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgIDpmb2N1cy12aXNpYmxlIHtcbiAgICAgIGJveC1zaGFkb3c6ICR7ZWZmZWN0LmZvY3VzU3RhdGV9O1xuICAgIH1cblxuICAgICR7U2V0dGluZ3NCdXR0b259IHtcbiAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIH1cbiAgfVxuXG4gICYgc3VtbWFyeSAubWFya2VyIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMXMgZWFzZS1pbi1vdXQ7XG4gICAgY29sb3I6IHZhcigtLWJuLWNhcmQtY29sb3IpO1xuICB9XG5cbiAgJltvcGVuXSBzdW1tYXJ5IC5tYXJrZXIge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgfVxuYFxuXG5jb25zdCBBZGRCdXR0b24gPSBzdHlsZWQoU2V0dGluZ3NCdXR0b24pYFxuICAtLWxlby1idXR0b24tcGFkZGluZzogJHtzcGFjaW5nLnhzfTtcbmBcblxuZnVuY3Rpb24gdXNlUGVyc2lzdGVkU3RhdGU8VD4obmFtZTogc3RyaW5nLCBkZWZhdWx0VmFsdWU6IFQpIHtcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSBSZWFjdC51c2VTdGF0ZTxUPihKU09OLnBhcnNlKGxvY2FsU3RvcmFnZVtuYW1lXSA/PyBudWxsKSA/PyBkZWZhdWx0VmFsdWUpXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlW25hbWVdID0gSlNPTi5zdHJpbmdpZnkodmFsdWUpXG4gIH0sIFtuYW1lLCB2YWx1ZV0pXG5cbiAgcmV0dXJuIFt2YWx1ZSwgc2V0VmFsdWVdIGFzIGNvbnN0XG59XG5cbmNvbnN0IE1hcmtlciA9IDxJY29uIG5hbWU9J2Fycm93LXNtYWxsLXJpZ2h0JyBjbGFzc05hbWU9J21hcmtlcicgLz5cbmNvbnN0IFBsYWNlaG9sZGVyTWFya2VyID0gPEljb24gLz5cblxuZXhwb3J0IGZ1bmN0aW9uIEl0ZW0ocHJvcHM6IHsgaWQ6IEZlZWRWaWV3LCBuYW1lOiBzdHJpbmcgfSkge1xuICBjb25zdCB7IGZlZWRWaWV3LCBzZXRGZWVkVmlldywgcmVwb3J0U2lkZWJhckZpbHRlclVzYWdlIH0gPSB1c2VCcmF2ZU5ld3MoKVxuICBjb25zdCB0b3BMZXZlbCA9IFsnYWxsJywgJ2ZvbGxvd2luZyddLmluY2x1ZGVzKHByb3BzLmlkKVxuICByZXR1cm4gPEN1c3RvbUJ1dHRvblxuICAgIHNlbGVjdGVkPXtwcm9wcy5pZCA9PT0gZmVlZFZpZXd9XG4gICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgc2V0RmVlZFZpZXcocHJvcHMuaWQpXG4gICAgICByZXBvcnRTaWRlYmFyRmlsdGVyVXNhZ2UoKVxuICAgIH19XG4gICAgYm9sZD17dG9wTGV2ZWx9XG4gID5cbiAgICB7cHJvcHMubmFtZX1cbiAgPC9DdXN0b21CdXR0b24+XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpZGViYXIoKSB7XG4gIGNvbnN0IHsgY2hhbm5lbHMsIHB1Ymxpc2hlcnMsIHNldEN1c3RvbWl6ZVBhZ2UgfSA9IHVzZUJyYXZlTmV3cygpXG4gIGNvbnN0IHsgc2lnbmFscyB9ID0gdXNlSW5zcGVjdENvbnRleHQoKVxuXG4gIGNvbnN0IFtzaG93aW5nTW9yZUNoYW5uZWxzLCBzZXRTaG93aW5nTW9yZUNoYW5uZWxzXSA9IHVzZVBlcnNpc3RlZFN0YXRlKFwic2hvd2luZ01vcmVDaGFubmVsc1wiLCBmYWxzZSlcbiAgY29uc3QgW3Nob3dpbmdNb3JlUHVibGlzaGVycywgc2V0U2hvd2luZ01vcmVQdWJsaXNoZXJzXSA9IHVzZVBlcnNpc3RlZFN0YXRlKFwic2hvd2luZ01vcmVQdWJsaXNoZXJzXCIsIGZhbHNlKVxuXG4gIGNvbnN0IHN1YnNjcmliZWRQdWJsaXNoZXJJZHMgPSBSZWFjdC51c2VNZW1vKCgpID0+IE9iamVjdC5rZXlzKHB1Ymxpc2hlcnMpXG4gICAgLmZpbHRlcihwID0+IGlzUHVibGlzaGVyRW5hYmxlZChwdWJsaXNoZXJzW3BdKSlcbiAgICAuc29ydCgoYSwgYikgPT4gc2lnbmFsc1tiXT8udmlzaXRXZWlnaHQgLSBzaWduYWxzW2FdPy52aXNpdFdlaWdodCksIFtwdWJsaXNoZXJzLCBzaWduYWxzXSlcbiAgY29uc3Qgc2xpY2VkUHVibGlzaGVySWRzID0gUmVhY3QudXNlTWVtbygoKSA9PiBzdWJzY3JpYmVkUHVibGlzaGVySWRzXG4gICAgLnNsaWNlKDAsIHNob3dpbmdNb3JlUHVibGlzaGVycyA/IHVuZGVmaW5lZCA6IERFRkFVTFRfU0hPV19DT1VOVCksIFtzdWJzY3JpYmVkUHVibGlzaGVySWRzLCBzaG93aW5nTW9yZVB1Ymxpc2hlcnNdKVxuICBjb25zdCBzdWJzY3JpYmVkQ2hhbm5lbHMgPSBSZWFjdC51c2VNZW1vKCgpID0+IE9iamVjdC5rZXlzKGNoYW5uZWxzKVxuICAgIC5maWx0ZXIoYyA9PiBjaGFubmVsc1tjXS5zdWJzY3JpYmVkTG9jYWxlcy5sZW5ndGgpXG4gICAgLnNvcnQoKGEsIGIpID0+IHNpZ25hbHNbYl0/LnZpc2l0V2VpZ2h0IC0gc2lnbmFsc1thXT8udmlzaXRXZWlnaHQpLFxuICAgIFtjaGFubmVscywgc2lnbmFsc10pXG4gIGNvbnN0IHNsaWNlZENoYW5uZWxJZHMgPSBSZWFjdC51c2VNZW1vKCgpID0+IHN1YnNjcmliZWRDaGFubmVsc1xuICAgIC5zbGljZSgwLCBzaG93aW5nTW9yZUNoYW5uZWxzID8gdW5kZWZpbmVkIDogREVGQVVMVF9TSE9XX0NPVU5UKSwgW3N1YnNjcmliZWRDaGFubmVscywgc2hvd2luZ01vcmVDaGFubmVsc10pXG5cbiAgcmV0dXJuIDxDb250YWluZXI+XG4gICAgPEl0ZW0gaWQ9J2FsbCcgbmFtZT17Z2V0TG9jYWxlKFMuQlJBVkVfTkVXU19GT1JfWU9VX0ZFRUQpfSAvPlxuICAgIDxJdGVtIGlkPSdmb2xsb3dpbmcnIG5hbWU9e2dldExvY2FsZShTLkJSQVZFX05FV1NfRk9MTE9XSU5HX0ZFRUQpfSAvPlxuICAgIDxTZWN0aW9uIG9wZW4+XG4gICAgICA8c3VtbWFyeT5cbiAgICAgICAge3N1YnNjcmliZWRDaGFubmVscy5sZW5ndGggPyBNYXJrZXIgOiBQbGFjZWhvbGRlck1hcmtlcn1cbiAgICAgICAge2dldExvY2FsZShTLkJSQVZFX05FV1NfQlJPV1NFX0NIQU5ORUxTX0hFQURFUil9XG4gICAgICAgIDxBZGRCdXR0b24gc2l6ZT1cInRpbnlcIiBvbkNsaWNrPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgc2V0Q3VzdG9taXplUGFnZSgnbmV3cycpXG4gICAgICAgIH19PlxuICAgICAgICAgIDxJY29uIG5hbWU9J3BsdXMtYWRkJyAvPlxuICAgICAgICA8L0FkZEJ1dHRvbj5cbiAgICAgIDwvc3VtbWFyeT5cbiAgICAgIHtzbGljZWRDaGFubmVsSWRzLm1hcChjID0+IDxJdGVtIGtleT17Y30gaWQ9e2BjaGFubmVscy8ke2N9YH0gbmFtZT17Y30gLz4pfVxuICAgICAge3N1YnNjcmliZWRDaGFubmVscy5sZW5ndGggPiBERUZBVUxUX1NIT1dfQ09VTlRcbiAgICAgICAgJiYgPEN1c3RvbUJ1dHRvbiBmYWludCBvbkNsaWNrPXsoKSA9PiBzZXRTaG93aW5nTW9yZUNoYW5uZWxzKHMgPT4gIXMpfT5cbiAgICAgICAgICB7c2hvd2luZ01vcmVDaGFubmVsc1xuICAgICAgICAgICAgPyBnZXRMb2NhbGUoUy5CUkFWRV9ORVdTX1NIT1dfTEVTUylcbiAgICAgICAgICAgIDogZ2V0TG9jYWxlKFMuQlJBVkVfTkVXU19TSE9XX0FMTCl9XG4gICAgICAgIDwvQ3VzdG9tQnV0dG9uPn1cbiAgICA8L1NlY3Rpb24+XG4gICAgPFNlY3Rpb24gb3Blbj5cbiAgICAgIDxzdW1tYXJ5PlxuICAgICAgICB7c3Vic2NyaWJlZFB1Ymxpc2hlcklkcy5sZW5ndGggPyBNYXJrZXIgOiBQbGFjZWhvbGRlck1hcmtlcn1cbiAgICAgICAge2dldExvY2FsZShTLkJSQVZFX05FV1NfUFVCTElTSEVSU19IRUFESU5HKX1cbiAgICAgICAgPEFkZEJ1dHRvbiBzaXplPVwidGlueVwiIG9uQ2xpY2s9eyhldmVudCkgPT4ge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICBzZXRDdXN0b21pemVQYWdlKCdwb3B1bGFyJylcbiAgICAgICAgfX0+XG4gICAgICAgICAgPEljb24gbmFtZT0ncGx1cy1hZGQnIC8+XG4gICAgICAgIDwvQWRkQnV0dG9uPlxuICAgICAgPC9zdW1tYXJ5PlxuICAgICAge3NsaWNlZFB1Ymxpc2hlcklkcy5tYXAocCA9PiA8SXRlbSBrZXk9e3B9IGlkPXtgcHVibGlzaGVycy8ke3B9YH0gbmFtZT17cHVibGlzaGVyc1twXT8ucHVibGlzaGVyTmFtZX0gLz4pfVxuICAgICAge3N1YnNjcmliZWRQdWJsaXNoZXJJZHMubGVuZ3RoID4gREVGQVVMVF9TSE9XX0NPVU5UXG4gICAgICAgICYmIDxDdXN0b21CdXR0b24gZmFpbnQgb25DbGljaz17KCkgPT4gc2V0U2hvd2luZ01vcmVQdWJsaXNoZXJzKHMgPT4gIXMpfT5cbiAgICAgICAgICB7c2hvd2luZ01vcmVQdWJsaXNoZXJzXG4gICAgICAgICAgICA/IGdldExvY2FsZShTLkJSQVZFX05FV1NfU0hPV19MRVNTKVxuICAgICAgICAgICAgOiBnZXRMb2NhbGUoUy5CUkFWRV9ORVdTX1NIT1dfQUxMKX1cbiAgICAgICAgPC9DdXN0b21CdXR0b24+fVxuICAgIDwvU2VjdGlvbj5cbiAgPC9Db250YWluZXI+XG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjQgVGhlIEJyYXZlIEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4vLyBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIGZpbGUsXG4vLyBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cHM6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy5cblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgRmVlZE5hdmlnYXRpb24gZnJvbSAnLi9GZWVkTmF2aWdhdGlvbic7XG5pbXBvcnQgU2V0dGluZ3NCdXR0b24gZnJvbSAnLi9TZXR0aW5nc0J1dHRvbic7XG5pbXBvcnQgSWNvbiBmcm9tICdAYnJhdmUvbGVvL3JlYWN0L2ljb24nO1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGlhbG9nYFxuICB0b3A6IHZhcigtLWJuLXRvcC1iYXItaGVpZ2h0KTtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gdmFyKC0tYm4tdG9wLWJhci1oZWlnaHQpKTtcblxuICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBtYXJnaW4tdG9wOiAwO1xuICBwYWRkaW5nOiAwO1xuXG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgZGlzcGxheTogZmxleDtcblxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlLWluLW91dDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcblxuICBiYWNrZ3JvdW5kOiB2YXIoLS1ibi1nbGFzcy1jYXJkKTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDY0cHgpO1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG5cbiAgJltvcGVuXSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICB9XG5cbiAgJj4gZGl2IHtcbiAgICBiYWNrZ3JvdW5kOiB1bnNldDtcbiAgfVxuYFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaWRlYmFyTWVudSgpIHtcbiAgY29uc3QgZGlhbG9nUmVmID0gUmVhY3QudXNlUmVmPEhUTUxEaWFsb2dFbGVtZW50PihudWxsKVxuICByZXR1cm4gPFNldHRpbmdzQnV0dG9uIG9uQ2xpY2s9eygpID0+IGRpYWxvZ1JlZi5jdXJyZW50Py5zaG93TW9kYWwoKX0+XG4gICAgPEljb24gbmFtZT1cImhhbWJ1cmdlci1tZW51XCIgLz5cbiAgICA8Q29udGFpbmVyIHJlZj17ZGlhbG9nUmVmIGFzIGFueX0gb25DbGljaz17ZSA9PiB7XG4gICAgICAvLyBDbG9zZSB0aGUgbWVudSBvbiBjbGljayBvdXRzaWRlLlxuICAgICAgY29uc3QgYm91bmRzID0gZS5jdXJyZW50VGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICBpZiAoZS5jbGllbnRYIDwgYm91bmRzLnggfHwgZS5jbGllbnRZIDwgYm91bmRzLnkgfHwgZS5jbGllbnRYID4gYm91bmRzLnJpZ2h0IHx8IGUuY2xpZW50WSA+IGJvdW5kcy5ib3R0b20pIHtcbiAgICAgICAgZS5jdXJyZW50VGFyZ2V0LmNsb3NlKClcbiAgICAgIH1cbiAgICB9fT5cbiAgICAgIDxGZWVkTmF2aWdhdGlvbiAvPlxuICAgIDwvQ29udGFpbmVyPlxuICA8L1NldHRpbmdzQnV0dG9uPlxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9