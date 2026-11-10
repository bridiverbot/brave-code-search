export const __webpack_esm_id__ = "brave_components_brave_new_tab_ui_components_search_SearchPlaceholder_tsx";
export const __webpack_esm_ids__ = ["brave_components_brave_new_tab_ui_components_search_SearchPlaceholder_tsx"];
export const __webpack_esm_modules__ = {

/***/ "../../../brave/components/brave_new_tab_ui/components/search/SearchContext.tsx"
/*!*************************************************************************!*\
  !*** ./components/brave_new_tab_ui/components/search/SearchContext.tsx ***!
  \*************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchContext: () => (/* binding */ SearchContext),
/* harmony export */   omniboxController: () => (/* binding */ omniboxController),
/* harmony export */   search: () => (/* binding */ search),
/* harmony export */   searchEnginesPromise: () => (/* binding */ searchEnginesPromise),
/* harmony export */   useSearchContext: () => (/* binding */ useSearchContext)
/* harmony export */ });
/* harmony import */ var $web_common_usePromise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! $web-common/usePromise */ "../../../brave/components/common/usePromise.ts");
/* harmony import */ var chrome_resources_mojo_components_omnibox_browser_searchbox_mojom_webui_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chrome://resources/mojo/components/omnibox/browser/searchbox.mojom-webui.js */ "chrome://resources/mojo/components/omnibox/browser/searchbox.mojom-webui.js");
/* harmony import */ var chrome_resources_mojo_components_omnibox_browser_fusebox_action_mojom_webui_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chrome://resources/mojo/components/omnibox/browser/fusebox_action.mojom-webui.js */ "chrome://resources/mojo/components/omnibox/browser/fusebox_action.mojom-webui.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _api_background__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api/background */ "../../../brave/components/brave_new_tab_ui/api/background.ts");
/* harmony import */ var _EngineContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./EngineContext */ "../../../brave/components/brave_new_tab_ui/components/search/EngineContext.tsx");
// Copyright (c) 2024 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.






const Context = react__WEBPACK_IMPORTED_MODULE_3__.createContext({
    open: false,
    setOpen: () => { },
    query: '',
    setQuery: () => { },
    searchEngine: undefined,
    setSearchEngine: () => { },
    searchEngines: [],
    filteredSearchEngines: []
});
const searchEnginesPromise = (0,_api_background__WEBPACK_IMPORTED_MODULE_4__["default"])().pageHandler.getSearchEngines().then(r => r.searchEngines);
const omniboxController = new chrome_resources_mojo_components_omnibox_browser_searchbox_mojom_webui_js__WEBPACK_IMPORTED_MODULE_1__.PageHandlerRemote();
window.omnibox = omniboxController;
// Tracks the latest query sent for autocompletion. Used to filter out stale
// results.
let activeQueryId = 0;
class SearchPage {
    constructor() {
        this.receiver = new chrome_resources_mojo_components_omnibox_browser_searchbox_mojom_webui_js__WEBPACK_IMPORTED_MODULE_1__.PageReceiver(this);
        this.resultListeners = [];
        this.selectionListeners = [];
        chrome_resources_mojo_components_omnibox_browser_searchbox_mojom_webui_js__WEBPACK_IMPORTED_MODULE_1__.PageHandlerFactory.getRemote().createPageHandler(this.receiver.$.bindNewPipeAndPassRemote(), omniboxController.$.bindNewPipeAndPassReceiver());
    }
    addResultListener(listener) {
        this.resultListeners.push(listener);
        if (this.result)
            listener(this.result);
    }
    removeResultListener(listener) {
        this.resultListeners = this.resultListeners.filter(r => r !== listener);
    }
    addSelectionListener(listener) {
        this.selectionListeners.push(listener);
    }
    removeSelectionListener(listener) {
        this.selectionListeners = this.selectionListeners.filter(s => s !== listener);
    }
    autocompleteResultChanged(result) {
        this.result = result;
        for (const listener of this.resultListeners)
            listener(result);
    }
    updateSelection(selection) {
        for (const listener of this.selectionListeners)
            listener(selection);
    }
    onShow() { }
    setInputText(inputText) { }
    setThumbnail(thumbnailUrl) { }
    onContextualInputStatusChanged(token, status, errorType) { }
    setKeywordSpaceTriggeringEnabled(enabled) { }
    setAvailableKeywordModels(models) { }
    onTabStripChanged() { }
    addFileContext(token, fileInfo) { }
    setKeywordSelected(isKeywordSelected) { }
    updateAutoSuggestedTabContext(tab) { }
    updateLensSearchEligibility(eligible) { }
    updateContentSharingPolicy(enabled) { }
    onInputStateChanged(inputState) { }
    stepSelection(direction, step) { }
    openCurrentSelection(disposition) { }
    setAimButtonVisible(visible) { }
    updateAimPopupEligibility(eligible) { }
    onPermissionPromptChanged(isShowing, promptSize) { }
    setRestoredTabIds(tabIds) { }
    setAimThreadRestoredTabs(tabs) { }
    updateSmartTabSharingActive(active) { }
    setAimButtonConfig(text, tooltip, a11yLabel, iconUrl) { }
    resetPopupToInitialState() { }
    onScreenshotMenuClosed() { }
    setFreState(state) { }
    updateProfileInfo(avatarUrl, name, email) { }
}
const search = new SearchPage();
function SearchContext(props) {
    const { engineConfig, lastSearchEngine, setLastSearchEngine } = (0,_EngineContext__WEBPACK_IMPORTED_MODULE_5__.useEngineContext)();
    const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_3__.useState(false);
    const [searchEngine, setSearchEngineInternal] = react__WEBPACK_IMPORTED_MODULE_3__.useState();
    const [query, setQuery] = react__WEBPACK_IMPORTED_MODULE_3__.useState('');
    const { result: searchEngines = [] } = (0,$web_common_usePromise__WEBPACK_IMPORTED_MODULE_0__["default"])(() => searchEnginesPromise, []);
    const filteredSearchEngines = searchEngines.filter(s => engineConfig[s.host]);
    const setSearchEngine = react__WEBPACK_IMPORTED_MODULE_3__.useCallback((engine) => {
        if (typeof engine === 'string') {
            engine = searchEngines.find(e => e.host === engine || e.keyword === engine);
        }
        if (!engine)
            return;
        setLastSearchEngine(engine);
        (0,_api_background__WEBPACK_IMPORTED_MODULE_4__["default"])().newTabMetrics.reportNTPSearchDefaultEngine(engine.prepopulateId);
        setSearchEngineInternal(engine);
    }, [searchEngines]);
    // When we receive search engines, use the first one as our keyword, if we don't have a match.
    react__WEBPACK_IMPORTED_MODULE_3__.useEffect(() => {
        var _a;
        if (!searchEngines.length)
            return;
        const match = (_a = filteredSearchEngines.find(s => s.host === lastSearchEngine)) !== null && _a !== void 0 ? _a : searchEngines[0];
        (0,_api_background__WEBPACK_IMPORTED_MODULE_4__["default"])().newTabMetrics.reportNTPSearchDefaultEngine(match.prepopulateId);
        setSearchEngine(match);
    }, [filteredSearchEngines]);
    // When the query changes, notify the browser side.
    react__WEBPACK_IMPORTED_MODULE_3__.useEffect(() => {
        if (query) {
            const keywordQuery = `${searchEngine === null || searchEngine === void 0 ? void 0 : searchEngine.keyword} ${query}`;
            omniboxController.queryAutocomplete(activeQueryId++, null, keywordQuery, false, keywordQuery.length, chrome_resources_mojo_components_omnibox_browser_fusebox_action_mojom_webui_js__WEBPACK_IMPORTED_MODULE_2__.SuggestInventory.kDefault, false, '', chrome_resources_mojo_components_omnibox_browser_searchbox_mojom_webui_js__WEBPACK_IMPORTED_MODULE_1__.InputMethod.kKeyboard);
        }
        else {
            omniboxController.stopAutocomplete(true);
        }
    }, [query, searchEngine]);
    const setQueryExternal = react__WEBPACK_IMPORTED_MODULE_3__.useCallback((query) => {
        setOpen(true);
        setQuery(query);
    }, []);
    const context = react__WEBPACK_IMPORTED_MODULE_3__.useMemo(() => ({
        open,
        setOpen,
        searchEngine,
        setSearchEngine,
        query,
        setQuery: setQueryExternal,
        searchEngines,
        filteredSearchEngines
    }), [searchEngine, setSearchEngine, filteredSearchEngines, query, searchEngines, open]);
    return react__WEBPACK_IMPORTED_MODULE_3__.createElement(Context.Provider, { value: context }, props.children);
}
function useSearchContext() {
    return react__WEBPACK_IMPORTED_MODULE_3__.useContext(Context);
}


/***/ },

/***/ "../../../brave/components/brave_new_tab_ui/components/search/SearchEngineIcon.tsx"
/*!****************************************************************************!*\
  !*** ./components/brave_new_tab_ui/components/search/SearchEngineIcon.tsx ***!
  \****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MaybeImage: () => (/* binding */ MaybeImage),
/* harmony export */   MediumSearchEngineIcon: () => (/* binding */ MediumSearchEngineIcon),
/* harmony export */   SearchEngineIcon: () => (/* binding */ SearchEngineIcon)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _brave_leo_tokens_css_variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @brave/leo/tokens/css/variables */ "../../../brave/node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/tokens/css/variables.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "../../../brave/node_modules/.pnpm/styled-components@6.4.3_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var _brave_leo_react_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @brave/leo/react/icon */ "../../../brave/node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/react/icon.js");
// Copyright (c) 2024 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.




// Mapping of search engine host to Nala icon for the icons we bundle in the browser
const icons = {
    // The Google search provider has the empty origin :O
    '': 'google-color',
    'duckduckgo.com': 'duckduckgo-color',
    'search.brave.com': 'social-brave-release-favicon-fullheight-color',
    'www.bing.com': 'bing-color',
    'www.qwant.com': 'qwant-color',
    'www.startpage.com': 'startpage-color',
    'search.yahoo.com': 'yahoo-color',
    'yandex.com': 'yandex-color',
    'ecosia.org': 'ecosia-color',
};
const hide = { opacity: 0 };
// Component which hides the image until it successfully loads (if ever).
function MaybeImage(props) {
    const { src, ...rest } = props;
    const [loaded, setLoaded] = react__WEBPACK_IMPORTED_MODULE_0__.useState(false);
    const onLoad = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(() => setLoaded(true), []);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
        setLoaded(false);
    }, [src]);
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", { ...rest, style: loaded ? undefined : hide, onLoad: onLoad, src: `chrome://image?url=${encodeURIComponent(src !== null && src !== void 0 ? src : '')}` });
}
function SearchEngineIcon(props) {
    if (!props.engine)
        return null;
    const nalaIcon = icons[props.engine.host];
    return nalaIcon
        ? react__WEBPACK_IMPORTED_MODULE_0__.createElement(_brave_leo_react_icon__WEBPACK_IMPORTED_MODULE_3__["default"], { name: nalaIcon, className: props.className })
        : react__WEBPACK_IMPORTED_MODULE_0__.createElement(MaybeImage, { src: props.engine.faviconUrl.url, className: props.className });
}
const MediumSearchEngineIcon = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(SearchEngineIcon).withConfig({ displayName: "MediumSearchEngineIcon", componentId: "sc-phro2e" }) `
  --leo-icon-size: ${_brave_leo_tokens_css_variables__WEBPACK_IMPORTED_MODULE_1__.icon.m};

  width: ${_brave_leo_tokens_css_variables__WEBPACK_IMPORTED_MODULE_1__.icon.m};
  height: ${_brave_leo_tokens_css_variables__WEBPACK_IMPORTED_MODULE_1__.icon.m};
`;


/***/ },

/***/ "../../../brave/components/brave_new_tab_ui/components/search/SearchPlaceholder.tsx"
/*!*****************************************************************************************!*\
  !*** ./components/brave_new_tab_ui/components/search/SearchPlaceholder.tsx + 9 modules ***!
  \*****************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SearchPlaceholder)
});
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external ["//resources/brave/react.bundle.js","React"]
var react_bundle_js_React_ = __webpack_require__("react");
// EXTERNAL MODULE: ./node_modules/.pnpm/styled-components@6.4.3_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/styled-components/dist/styled-components.esm.js + 7 modules
var styled_components_esm = __webpack_require__("../../../brave/node_modules/.pnpm/styled-components@6.4.3_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/styled-components/dist/styled-components.esm.js");
// EXTERNAL MODULE: ./components/brave_new_tab_ui/hooks/usePref.ts + 1 modules
var usePref = __webpack_require__("../../../brave/components/brave_new_tab_ui/hooks/usePref.ts");
// EXTERNAL MODULE: ./components/common/Flex.tsx
var Flex = __webpack_require__("../../../brave/components/common/Flex.tsx");
// EXTERNAL MODULE: ./components/common/locale.ts + 1 modules
var locale = __webpack_require__("../../../brave/components/common/locale.ts");
// EXTERNAL MODULE: ./node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/react/icon.js + 1 modules
var icon = __webpack_require__("../../../brave/node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/react/icon.js");
// EXTERNAL MODULE: ./node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/react/input.js + 2 modules
var input = __webpack_require__("../../../brave/node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/react/input.js");
// EXTERNAL MODULE: ./node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/tokens/css/variables.js
var variables = __webpack_require__("../../../brave/node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/tokens/css/variables.js");
// EXTERNAL MODULE: ./node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/react/button.js + 1 modules
var react_button = __webpack_require__("../../../brave/node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/react/button.js");
// EXTERNAL MODULE: ./node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/shared/svelte-react.js
var svelte_react = __webpack_require__("../../../brave/node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/shared/svelte-react.js");
// EXTERNAL MODULE: ./node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/shared/svelte-web.js
var svelte_web = __webpack_require__("../../../brave/node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/shared/svelte-web.js");
// EXTERNAL MODULE: ./node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/shared/651f0baa.js
var _651f0baa = __webpack_require__("../../../brave/node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/shared/651f0baa.js");
// EXTERNAL MODULE: ./node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/shared/1909379f.js
var _1909379f = __webpack_require__("../../../brave/node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/shared/1909379f.js");
// EXTERNAL MODULE: ./node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/shared/a5e3e66f.js
var a5e3e66f = __webpack_require__("../../../brave/node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/shared/a5e3e66f.js");
// EXTERNAL MODULE: ./node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/shared/d048de73.js
var d048de73 = __webpack_require__("../../../brave/node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/shared/d048de73.js");
// EXTERNAL MODULE: ./node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/shared/e7ca11c5.js
var e7ca11c5 = __webpack_require__("../../../brave/node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/shared/e7ca11c5.js");
// EXTERNAL MODULE: ./node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/shared/34db9ee5.js
var _34db9ee5 = __webpack_require__("../../../brave/node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/shared/34db9ee5.js");
// EXTERNAL MODULE: ./node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/shared/14de49c6.js
var _14de49c6 = __webpack_require__("../../../brave/node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/shared/14de49c6.js");
// EXTERNAL MODULE: ./node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/shared/3e818cee.js
var _3e818cee = __webpack_require__("../../../brave/node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/shared/3e818cee.js");
// EXTERNAL MODULE: ./node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/shared/dae26eb7.js
var dae26eb7 = __webpack_require__("../../../brave/node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/shared/dae26eb7.js");
;// ./node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/shared/floating.js









//# sourceMappingURL=floating.js.map

;// ./node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/web-components/floating.js


/* harmony default export */ const floating = ((0,svelte_web["default"])(dae26eb7.F, {
    name: 'leo-floating',
    mode: 'open'
}));

// Reexport everything from our component, so consumers can do anything the base
// component can do.

;// ./node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/react/floating.js


/* harmony default export */ const react_floating = ((0,svelte_react["default"])('leo-floating', floating));

// Reexport everything from our component, so React consumers can do anything
// the base component can do.

// EXTERNAL MODULE: ./components/brave_new_tab_ui/components/search/SearchContext.tsx
var SearchContext = __webpack_require__("../../../brave/components/brave_new_tab_ui/components/search/SearchContext.tsx");
// EXTERNAL MODULE: ./components/brave_new_tab_ui/components/search/SearchEngineIcon.tsx
var SearchEngineIcon = __webpack_require__("../../../brave/components/brave_new_tab_ui/components/search/SearchEngineIcon.tsx");
;// ./components/brave_new_tab_ui/components/search/EnginePicker.tsx
// Copyright (c) 2024 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.









const Option = styled_components_esm["default"].div.withConfig({ displayName: "Option", componentId: "sc-aonb5k" }) `
  display: flex;
  align-items: center;
  gap: ${variables.spacing.m};

  padding: ${variables.spacing.m};
  border-radius: ${variables.radius.s};

  &:hover, &[data-selected=true] {
    background: color-mix(in srgb, ${variables.color.text.primary} 10%, transparent 90%);
  }
`;
const CustomizeButton = (0,styled_components_esm["default"])(Option).withConfig({ displayName: "CustomizeButton", componentId: "sc-1dla1ru" }) `
  border-top: 1px solid color-mix(in srgb, ${variables.color.text.primary} 10%, transparent 90%);

  justify-content: center;

  &:not(:hover) {
    border-radius: 0;
  }
`;
const OpenButton = (0,styled_components_esm["default"])((0,react_button["default"])).withConfig({ displayName: "OpenButton", componentId: "sc-oz5aae" }) `
  margin: -6px 0 -6px ${variables.spacing.s};
`;
const IconContainer = (0,styled_components_esm["default"])((0,Flex["default"])).withConfig({ displayName: "IconContainer", componentId: "sc-w7r0c0" }) `
  margin-right: 4px;
  border-radius: ${variables.radius.s};
  padding: ${variables.spacing.s};

  width: 32px;
  height: 32px;

  ${p => p.open && (0,styled_components_esm.css) `
    background: color-mix(in srgb, ${variables.color.text.primary} 25%, transparent 75%);
  `}
`;
const Menu = styled_components_esm["default"].div.withConfig({ displayName: "Menu", componentId: "sc-ezwu" }) `
  width: 180px;

  background: ${variables.color.container.background};
  border: 1px solid ${variables.color.divider.subtle};

  border-radius: ${variables.radius.m};
  padding: ${variables.spacing.s};

  display: flex;
  flex-direction: column;
  gap: ${variables.spacing.s};
`;
const findParentWithTag = (el, tagName) => {
    do {
        el = el === null || el === void 0 ? void 0 : el.parentElement;
    } while (el && el.tagName !== tagName);
    return el;
};
function EnginePicker() {
    const { filteredSearchEngines, searchEngine, setSearchEngine, setOpen: setBoxOpen } = (0,SearchContext.useSearchContext)();
    const [open, setOpen] = react_bundle_js_React_.useState(false);
    const buttonRef = react_bundle_js_React_.useRef(null);
    const menuRef = react_bundle_js_React_.useRef(null);
    react_bundle_js_React_.useEffect(() => {
        if (!open)
            return;
        const handler = (e) => {
            if (!e.composedPath().includes(menuRef.current)) {
                setOpen(false);
            }
        };
        // Add the handler after we're finished opening the menu, so we don't
        // instantly close it.
        setTimeout(() => document.addEventListener('click', handler));
        return () => {
            document.removeEventListener('click', handler);
        };
    }, [open]);
    return react_bundle_js_React_.createElement(react_bundle_js_React_.Fragment, null,
        react_bundle_js_React_.createElement(OpenButton, { ref: buttonRef, fab: true, kind: "plain-faint", slot: "anchor-content", onClick: () => setOpen(o => !o) },
            react_bundle_js_React_.createElement(IconContainer, { align: "center", justify: "center", open: open },
                react_bundle_js_React_.createElement(SearchEngineIcon.MediumSearchEngineIcon, { engine: searchEngine }))),
        open && react_bundle_js_React_.createElement(react_floating, { ref: menuRef, target: findParentWithTag(buttonRef.current, 'LEO-INPUT'), autoUpdate: true, positionStrategy: "fixed", placement: "top-start" },
            react_bundle_js_React_.createElement(Menu, { onClick: e => {
                    e.preventDefault();
                    e.stopPropagation();
                } },
                filteredSearchEngines.map(s => react_bundle_js_React_.createElement(Option, { onClick: () => {
                        setSearchEngine(s);
                        setOpen(false);
                    }, key: s.keyword, "data-selected": s === searchEngine },
                    react_bundle_js_React_.createElement(SearchEngineIcon.MediumSearchEngineIcon, { engine: s }),
                    s.name)),
                react_bundle_js_React_.createElement(CustomizeButton, { onClick: () => {
                        history.pushState(undefined, '', '?openSettings=Search');
                        // For now, close the search box - the Settings dialog doesn't use a
                        // dialog, so it gets rendered underneath.
                        setBoxOpen(false);
                        setOpen(false);
                    } }, (0,locale.getLocale)('searchCustomizeList')))));
}

// EXTERNAL MODULE: ./components/brave_new_tab_ui/components/search/config.ts
var config = __webpack_require__("../../../brave/components/brave_new_tab_ui/components/search/config.ts");
;// ./components/brave_new_tab_ui/components/search/SearchBox.tsx
// Copyright (c) 2024 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.










const searchBoxClass = 'ntp-search-box';
const SearchInput = (0,styled_components_esm["default"])((0,input["default"])).withConfig({ displayName: "SearchInput", componentId: "sc-e0ag4y" }) `
  --leo-control-focus-effect: none;
  --leo-control-padding: 12px 10px;
  --leo-control-text-color: ${variables.color.text.primary};
  --leo-control-font: ${variables.font.large.regular};

  display: inline-block;
  width: 540px;

  leo-icon {
    --leo-icon-color: ${variables.color.icon.default};
  }
`;
const SearchIconContainer = styled_components_esm["default"].div.withConfig({ displayName: "SearchIconContainer", componentId: "sc-5mhz64" }) `
  padding-right: ${variables.spacing.m};
`;
const Container = styled_components_esm["default"].div.withConfig({ displayName: "Container", componentId: "sc-1u117nr" }) `
  --leo-control-radius: ${config.searchBoxRadius};

  display: flex;

  /* If we have search results, don't add a radius to the bottom of the search box */
  &:has(+ .search-results) {
    --leo-control-radius: ${config.searchBoxRadius} ${config.searchBoxRadius} 0 0;
  }

  border-radius: var(--leo-control-radius);
`;
function SearchBox() {
    const { searchEngine, query, setQuery } = (0,SearchContext.useSearchContext)();
    const placeholderText = (searchEngine === null || searchEngine === void 0 ? void 0 : searchEngine.host) === config.braveSearchHost
        ? (0,locale.getLocale)('searchBravePlaceholder')
        : (0,locale.getLocale)('searchNonBravePlaceholder');
    const searchInput = react_bundle_js_React_.useRef(null);
    react_bundle_js_React_.useEffect(() => {
        const listener = (e) => {
            var _a;
            if (e.key === 'Tab' && document.activeElement === document.body) {
                e.preventDefault();
                (_a = searchInput.current) === null || _a === void 0 ? void 0 : _a.focus();
            }
        };
        document.addEventListener('keydown', listener);
        return () => {
            document.removeEventListener('keydown', listener);
        };
    }, []);
    return react_bundle_js_React_.createElement(Container, { className: searchBoxClass },
        react_bundle_js_React_.createElement(SearchInput, { tabIndex: 1, type: "text", ref: searchInput, value: query, onInput: e => setQuery(e.value), placeholder: placeholderText },
            react_bundle_js_React_.createElement(Flex["default"], { slot: "left-icon", align: 'center' },
                react_bundle_js_React_.createElement(EnginePicker, null)),
            react_bundle_js_React_.createElement(SearchIconContainer, { slot: "right-icon" },
                react_bundle_js_React_.createElement(icon["default"], { name: "search" }))));
}

// EXTERNAL MODULE: external ["//resources/brave/react.bundle.js","ReactDOM"]
var react_bundle_js_ReactDOM_ = __webpack_require__("react-dom");
;// ./components/brave_new_tab_ui/components/search/SearchResult.tsx
// Copyright (c) 2024 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.







const SearchResult_Container = styled_components_esm["default"].a.withConfig({ displayName: "Container", componentId: "sc-dttwz6" }) `
  padding: ${variables.spacing.s} ${variables.spacing.m};
  border-radius: ${variables.radius.m};

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${variables.spacing.l};

  text-decoration: none;

  overflow: hidden;

  &[aria-selected=true], &:hover {
    background: color-mix(in srgb, ${variables.color.text.primary} 10%, transparent 90%);
  }
`;
const SearchResult_IconContainer = styled_components_esm["default"].div.withConfig({ displayName: "IconContainer", componentId: "sc-ulsxy" }) `
  border-radius: ${variables.radius.m};
  width: 32px;
  height: 32px;

  display: flex;
  align-items: center;
  justify-content: center;

  flex-shrink: 0;

  > * { border-radius: ${variables.radius.s}; }

  > span {
    width: 20px;
    height: 20px;
  }

  > img {
    width: 100%;
    height: 100%;
  }
`;
const SearchIcon = styled_components_esm["default"].span.withConfig({ displayName: "SearchIcon", componentId: "sc-vw9ts9" }) `
  background: color-mix(in srgb, ${variables.color.icon.default} 50%, transparent 50%);
  mask-image: url(${p => p.url});
  mask-size: contain;
`;
const FavIcon = styled_components_esm["default"].span.withConfig({ displayName: "FavIcon", componentId: "sc-1auu00f" }) `
  background-image: url(${p => p.url});
  background-size: contain;
`;
const Content = styled_components_esm["default"].span.withConfig({ displayName: "Content", componentId: "sc-4ivzjk" }) `
  font: ${variables.font.large.regular};
  line-height: 24px;
  color: ${variables.color.text.primary};
`;
const Description = styled_components_esm["default"].span.withConfig({ displayName: "Description", componentId: "sc-439eiy" }) `
  font: ${variables.font.small.regular};
  line-height: 18px;
  color: ${variables.color.text.secondary};
`;
const LeoIcon = (0,styled_components_esm["default"])((0,icon["default"])).withConfig({ displayName: "LeoIcon", componentId: "sc-1jitoad" }) `
  --leo-icon-size: ${variables.icon.l};

  color: ${variables.color.white};
  background: ${variables.gradient.iconsActive};
  border-radius: ${variables.radius.m};
  padding: ${variables.spacing.s};
`;
const Divider = styled_components_esm["default"].hr.withConfig({ displayName: "Divider", componentId: "sc-t1joc8" }) `
  margin: 2px -8px;
  opacity: 0.1;
`;
function Image({ match, isAskLeo }) {
    var _a;
    // AskLeo is a case we treat specially. It's included on most queries.
    if (isAskLeo)
        return react_bundle_js_React_.createElement(LeoIcon, { name: 'product-brave-leo' });
    // We have three separate cases here:
    // 1. A chromium generic search result icon:
    //    We display the icon as a mask-image, so we can change the color
    // 2. A `suggestTemplate` image URL with the chrome:// scheme, which we can load on the NTP:
    //    We display the image as a background, as its safe on the NTP
    // 3. A web resource, which we need to load from the WebUI via the unpadded
    //    url machinery.
    const imageUrl = (_a = match.suggestTemplate.image) === null || _a === void 0 ? void 0 : _a.url;
    return !imageUrl
        ? react_bundle_js_React_.createElement(SearchIcon, { url: match.iconUrl })
        : imageUrl.startsWith('chrome')
            ? react_bundle_js_React_.createElement(FavIcon, { url: imageUrl })
            : react_bundle_js_React_.createElement(SearchEngineIcon.MaybeImage, { src: imageUrl });
}
function SearchResult({ match, selected, onClick }) {
    var _a, _b, _c;
    const contents = match.suggestTemplate.primaryText.text;
    const description = (_a = match.suggestTemplate.secondaryText) === null || _a === void 0 ? void 0 : _a.text;
    const isAskLeo = description === (0,locale.getLocale)('searchAskLeo');
    const result = react_bundle_js_React_.createElement(SearchResult_Container, { href: match.destinationUrl, "aria-selected": selected, onClick: e => {
            e.preventDefault();
            onClick(e);
        } },
        react_bundle_js_React_.createElement(SearchResult_IconContainer, null,
            react_bundle_js_React_.createElement(Image, { key: (_c = (_b = match.suggestTemplate.image) === null || _b === void 0 ? void 0 : _b.url) !== null && _c !== void 0 ? _c : match.iconUrl, match: match, isAskLeo: isAskLeo })),
        react_bundle_js_React_.createElement(Flex["default"], { direction: 'column' },
            react_bundle_js_React_.createElement(Content, null, contents),
            description && react_bundle_js_React_.createElement(Description, null, description)));
    return isAskLeo
        ? react_bundle_js_React_.createElement(react_bundle_js_React_.Fragment, null,
            react_bundle_js_React_.createElement(Divider, null),
            result)
        : result;
}

// EXTERNAL MODULE: ./components/brave_new_tab_ui/api/background.ts
var background = __webpack_require__("../../../brave/components/brave_new_tab_ui/api/background.ts");
// EXTERNAL MODULE: ./components/common/SecureLink.tsx
var SecureLink = __webpack_require__("../../../brave/components/common/SecureLink.tsx");
;// ./components/brave_new_tab_ui/components/search/MaybePromptEnableSuggestions.tsx
// Copyright (c) 2024 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.







const MaybePromptEnableSuggestions_Container = styled_components_esm["default"].div.withConfig({ displayName: "Container", componentId: "sc-qr2ij0" }) `
    background: color-mix(in srgb, ${variables.color.container.background} 10%, transparent 90%);
    color: color-mix(in srgb, ${variables.color.text.primary} 70%, transparent 30%);

    padding: ${variables.spacing['2Xl']};
    margin: -8px -8px 4px -8px;

    gap: ${variables.spacing.l};
    display: flex;
    flex-direction: column;

    text-wrap: wrap;
`;
const Title = styled_components_esm["default"].span.withConfig({ displayName: "Title", componentId: "sc-174zfy4" }) `
    color: ${variables.color.text.primary};
    font: ${variables.font.default.semibold};
`;
const Explanation = styled_components_esm["default"].span.withConfig({ displayName: "Explanation", componentId: "sc-1x9a11w" }) `
    font: ${variables.font.small.regular};
`;
const Actions = styled_components_esm["default"].div.withConfig({ displayName: "Actions", componentId: "sc-1387kb7" }) `
    display: flex;
    gap: ${variables.spacing.s};
    justify-content: start;
    
    text-wrap: nowrap;

    > leo-button {
        flex: 0;
    }
`;
function MaybePromptEnableSuggestions() {
    const [showPrompt, setShowPrompt] = (0,usePref.useNewTabPref)('promptEnableSearchSuggestions');
    const [suggestionsEnabled, setSuggestionsEnabled] = (0,usePref.useNewTabPref)('searchSuggestionsEnabled');
    const { query, setQuery } = (0,SearchContext.useSearchContext)();
    if (!showPrompt || suggestionsEnabled)
        return null;
    return react_bundle_js_React_.createElement(MaybePromptEnableSuggestions_Container, null,
        react_bundle_js_React_.createElement(Title, null, (0,locale.getLocale)('searchEnableSuggestionsPromptTitle')),
        react_bundle_js_React_.createElement(Explanation, null, (0,locale.getLocale)('searchEnableSuggestionsPromptExplanation')),
        react_bundle_js_React_.createElement(Actions, null,
            react_bundle_js_React_.createElement(react_button["default"], { onClick: () => {
                    setShowPrompt(false);
                    setSuggestionsEnabled(true);
                    // Reset the query so we get suggestions
                    setQuery('');
                    setQuery(query);
                } }, (0,locale.getLocale)('searchEnableSuggestionsPromptEnable')),
            react_bundle_js_React_.createElement(react_button["default"], { onClick: () => setShowPrompt(false), kind: 'plain-faint' }, (0,locale.getLocale)('searchEnableSuggestionsPromptDismiss'))));
}

;// ./components/brave_new_tab_ui/components/search/SearchResults.tsx
// Copyright (c) 2024 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.









const SearchResults_Container = styled_components_esm["default"].div.withConfig({ displayName: "Container", componentId: "sc-wbl4g3" }) `
  border-top: 1px solid ${variables.color.container.background};

  background: ${variables.color.container.background};

  color: ${variables.color.white};

  border-bottom-left-radius: ${variables.radius.m};
  border-bottom-right-radius: ${variables.radius.m};

  padding: ${variables.spacing.m};
  gap: ${variables.spacing.s};
  display: flex;
  flex-direction: column;

  width: 540px;
  overflow: hidden;
  text-wrap: nowrap;
`;
// Handles opening an autocomplete match, which may or may not be part of an
// autocomplete result.
const openMatch = (resultSequenceId, match, line, event, searchEngine) => {
    if (line === -1) {
        (0,SecureLink.handleOpenURLClick)(match.destinationUrl, event);
        return;
    }
    const button = 'button' in event ? event.button : 0;
    if (searchEngine) {
        (0,background["default"])().newTabMetrics.reportNTPSearchUsage(searchEngine.prepopulateId);
    }
    SearchContext.omniboxController.openAutocompleteMatch(resultSequenceId, line, match.destinationUrl, true, button, {
        altKey: event.altKey,
        ctrlKey: event.ctrlKey,
        metaKey: event.metaKey,
        shiftKey: event.shiftKey,
    }, event instanceof KeyboardEvent);
};
const useUrlWhatYouTyped = (query) => react_bundle_js_React_.useMemo(() => {
    try {
        // There should be at least one `.` to be a URL and no spaces.
        const bits = query.split('.');
        if (bits.length <= 1 || bits.some(b => !b) || query.includes(' ')) {
            return null;
        }
        // Force a scheme to be included - we validate whether the scheme is
        // allowed later.
        const q = query.includes('://') ? query : 'https://' + query;
        const url = new URL(q);
        (0,SecureLink.validateScheme)(url.toString());
        return {
            destinationUrl: url.toString(),
            suggestTemplate: {
                primaryText: { text: url.toString(), fragments: [], a11yText: null },
                secondaryText: { text: '', fragments: [], a11yText: null },
                image: {
                    url: `chrome://favicon/size/64@1x/${q.toString()}`,
                    dominantColor: ''
                }
            },
            allowedToBeDefaultMatch: true
        };
    }
    catch {
        return null;
    }
}, [query]);
function SearchResults() {
    const { query, searchEngine } = (0,SearchContext.useSearchContext)();
    const [result, setResult] = react_bundle_js_React_.useState();
    // An optional result when a URL is entered.
    const urlWhatYouTyped = useUrlWhatYouTyped(query);
    // Filter out empty results (from urlWhatYouTyped) and the
    // 'search-what-you-typed', which always from from the default search engine.
    const matches = react_bundle_js_React_.useMemo(() => {
        var _a;
        return [urlWhatYouTyped, ...((_a = result === null || result === void 0 ? void 0 : result.matches) !== null && _a !== void 0 ? _a : [])]
            .filter(r => r && r.type !== 'search-what-you-typed');
    }, [urlWhatYouTyped, result]);
    const [selectedMatch, setSelectedMatch] = react_bundle_js_React_.useState();
    react_bundle_js_React_.useEffect(() => {
        SearchContext.search.addResultListener(setResult);
        return () => SearchContext.search.removeResultListener(setResult);
    }, []);
    react_bundle_js_React_.useEffect(() => {
        setSelectedMatch(prev => {
            if (!matches.length)
                return undefined;
            if (!prev) {
                const defaultMatchIndex = matches.findIndex(r => r.allowedToBeDefaultMatch);
                if (defaultMatchIndex !== -1)
                    return defaultMatchIndex;
                // Fall back to setting the first item as the selected match.
                return 0;
            }
            if (prev >= matches.length) {
                return matches.length - 1;
            }
            return prev;
        });
    }, [matches]);
    react_bundle_js_React_.useEffect(() => {
        const listener = (selection) => setSelectedMatch(selection.line);
        SearchContext.search.addSelectionListener(listener);
        return () => {
            SearchContext.search.removeSelectionListener(listener);
        };
    }, []);
    react_bundle_js_React_.useEffect(() => {
        const keyHandler = (e) => {
            const handledKeys = ['ArrowUp', 'ArrowDown'];
            if (!handledKeys.includes(e.key)) {
                return;
            }
            e.preventDefault();
            const direction = e.key === 'ArrowUp' ? -1 : 1;
            setSelectedMatch(s => {
                if (matches.length === 0)
                    return undefined;
                const start = s !== null && s !== void 0 ? s : -1;
                const next = start + direction;
                if (next < 0)
                    return (matches.length - 1);
                if (next >= matches.length)
                    return 0;
                return next;
            });
        };
        document.addEventListener('keydown', keyHandler);
        return () => {
            document.removeEventListener('keydown', keyHandler);
        };
    }, [result]);
    react_bundle_js_React_.useEffect(() => {
        const handler = (e) => {
            var _a, _b, _c;
            if (e.key !== 'Enter')
                return;
            e.preventDefault();
            const match = matches[selectedMatch];
            if (!match) {
                (0,background["default"])().pageHandler.searchWhatYouTyped((_a = searchEngine === null || searchEngine === void 0 ? void 0 : searchEngine.host) !== null && _a !== void 0 ? _a : config.defaultSearchHost, query, e.altKey, e.ctrlKey, e.metaKey, e.shiftKey);
                return;
            }
            openMatch((_b = result === null || result === void 0 ? void 0 : result.sequenceId) !== null && _b !== void 0 ? _b : 0, match, (_c = result === null || result === void 0 ? void 0 : result.matches.indexOf(match)) !== null && _c !== void 0 ? _c : -1, e, searchEngine);
        };
        document.addEventListener('keydown', handler);
        return () => {
            document.removeEventListener('keydown', handler);
        };
    }, [matches, selectedMatch, query, searchEngine]);
    const onSearchResultClick = (match) => {
        var _a;
        const line = (_a = result === null || result === void 0 ? void 0 : result.matches.indexOf(match)) !== null && _a !== void 0 ? _a : -1;
        return (e) => { var _a; return openMatch((_a = result === null || result === void 0 ? void 0 : result.sequenceId) !== null && _a !== void 0 ? _a : 0, match, line, e, searchEngine); };
    };
    return matches.length ? react_bundle_js_React_.createElement(SearchResults_Container, { className: 'search-results' },
        react_bundle_js_React_.createElement(MaybePromptEnableSuggestions, null),
        matches.map((r, i) => react_bundle_js_React_.createElement(SearchResult, { key: i, selected: i === selectedMatch, onClick: onSearchResultClick(r), match: r }))) : null;
}

;// ./components/brave_new_tab_ui/components/search/SearchDialog.tsx
// Copyright (c) 2024 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.







const duration = '0.4s';
const easing = 'cubic-bezier(0.7, -0.4, 0.4, 1.4)';
const enterDialog = (0,styled_components_esm.keyframes) `
  from {
    transform: translateY(calc(var(--offset-y) - var(--margin-top)));
  }

  to {
    transform: translateY(0);
  }
`;
const exitDialog = (0,styled_components_esm.keyframes) `
  from {
    transform: translateY(0);
  }

  to {
    transform: translateY(calc(var(--offset-y) - var(--margin-top)));
  }
`;
const enterBackdrop = (0,styled_components_esm.keyframes) `
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;
const exitBackdrop = (0,styled_components_esm.keyframes) `
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;
const Dialog = styled_components_esm["default"].dialog.withConfig({ displayName: "Dialog", componentId: "sc-1omja21" }) `
  --margin-top: calc(50vh - 209px);
  --offset-y: ${p => p.offsetY}px;

  outline: none;
  border: none;
  border-radius: ${config.searchBoxRadius};
  background: transparent;
  margin-top: var(--margin-top);
  padding: 0px;

  animation: ${enterDialog} ${duration} ${easing};

  &::backdrop {
    opacity: 1;
    background: ${variables.color.dialogs.scrimBackground};
    backdrop-filter: blur(4px);
    animation: ${enterBackdrop} ${duration} ${easing};
  }

  &.closing {
    animation: ${exitDialog} ${duration} ${easing};
    animation-fill-mode: forwards; /* Remain in end state until removed from DOM */

    &::backdrop {
      animation: ${exitBackdrop} ${duration} ${easing};
      animation-fill-mode: forwards; /* Remain in end state until removed from DOM */
    }
  }
`;
function Component(props) {
    const ref = react_bundle_js_React_.useRef(null);
    react_bundle_js_React_.useEffect(() => {
        var _a;
        (_a = ref.current) === null || _a === void 0 ? void 0 : _a.showModal();
    }, []);
    const doClose = react_bundle_js_React_.useCallback(() => {
        const el = ref.current;
        el.addEventListener('animationend', () => props.onClose());
        el.classList.add('closing');
    }, []);
    react_bundle_js_React_.useEffect(() => {
        const el = ref.current;
        if (!el)
            return;
        const closeHandler = (e) => {
            e.preventDefault();
        };
        el.addEventListener('close', closeHandler);
        return () => {
            el.removeEventListener('close', closeHandler);
        };
    }, [props.onClose]);
    react_bundle_js_React_.useEffect(() => {
        setTimeout(() => {
            var _a, _b;
            (_b = (_a = ref.current) === null || _a === void 0 ? void 0 : _a.querySelector('leo-input')) === null || _b === void 0 ? void 0 : _b.focus();
        });
    }, []);
    return (0,react_bundle_js_ReactDOM_.createPortal)(react_bundle_js_React_.createElement(Dialog, { ref: ref, offsetY: props.offsetY, onClick: e => {
            // The dropdown uses position: fixed, so it isn't actually inside the dialog
            // bounds, so check if the leo-input contained the click.
            const input = e.nativeEvent.composedPath().find(t => t.tagName === 'LEO-INPUT');
            if (input)
                return;
            const rect = e.currentTarget.getBoundingClientRect();
            const clickedInDialog = (rect.top <= e.clientY &&
                e.clientY <= rect.top + rect.height &&
                rect.left <= e.clientX &&
                e.clientX <= rect.left + rect.width);
            if (!clickedInDialog) {
                doClose();
            }
        }, onCancel: e => {
            e.preventDefault();
            doClose();
        } },
        react_bundle_js_React_.createElement(SearchBox, null),
        react_bundle_js_React_.createElement(SearchResults, null)), document.body);
}

// EXTERNAL MODULE: ./node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/react/buttonMenu.js + 2 modules
var buttonMenu = __webpack_require__("../../../brave/node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/react/buttonMenu.js");
;// ./components/brave_new_tab_ui/components/search/SearchPlaceholder.tsx
// Copyright (c) 2024 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.













const MenuContainer = (0,styled_components_esm["default"])((0,buttonMenu["default"])).attrs({
    'data-theme': 'light'
}).withConfig({ displayName: "MenuContainer", componentId: "sc-lzs4ct" }) `
  position: absolute;
  top: calc(50% - 12px);
  right: -28px;

  opacity: 0;

  transition: opacity 0.2s ease-in-out;
  transition-delay: 1s;

  & > leo-menu-item {
    display: flex;
    align-items: center;
    gap: ${variables.spacing.m};

    padding: ${variables.spacing.m};
  }
`;
const MenuButton = (0,styled_components_esm["default"])((0,react_button["default"])).withConfig({ displayName: "MenuButton", componentId: "sc-14vcqqj" }) `
  color: ${variables.color.container.background};
`;
const PlaceholderContainer = styled_components_esm["default"].div.withConfig({ displayName: "PlaceholderContainer", componentId: "sc-jmsyek" }) `
  align-self: center;
  position: relative;
  
  border-radius: ${config.searchBoxRadius};
  
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.05);

  max-width: calc(100vw - 24px);
  
  &:hover ${MenuContainer} {
    transition-delay: 0s;
    opacity: 1;
  }
`;
function Swapper() {
    const { open, setOpen } = (0,SearchContext.useSearchContext)();
    const [boxPos, setBoxPos] = react_bundle_js_React_.useState(0);
    const [, setShowSearchBox] = (0,usePref.useNewTabPref)('showSearchBox');
    return react_bundle_js_React_.createElement(react_bundle_js_React_.Fragment, null,
        !open && react_bundle_js_React_.createElement(PlaceholderContainer, { onClick: e => {
                // If we were clicking a button inside the SearchBox, don't open the box.
                if (e.nativeEvent.composedPath().some(el => el.tagName === 'LEO-BUTTON')) {
                    e.preventDefault();
                    return;
                }
                setOpen(true);
                setBoxPos(e.currentTarget.getBoundingClientRect().y);
            } },
            react_bundle_js_React_.createElement(SearchBox, null),
            react_bundle_js_React_.createElement("div", { "data-theme": "light" },
                react_bundle_js_React_.createElement(MenuContainer, null,
                    react_bundle_js_React_.createElement(MenuButton, { fab: true, kind: 'plain-faint', slot: 'anchor-content' },
                        react_bundle_js_React_.createElement(icon["default"], { name: 'more-vertical' })),
                    react_bundle_js_React_.createElement("leo-menu-item", { onClick: e => {
                            e.stopPropagation();
                            setShowSearchBox(false);
                        } },
                        react_bundle_js_React_.createElement(icon["default"], { name: 'eye-off' }),
                        " ",
                        (0,locale.getLocale)('searchHide'))))),
        open && react_bundle_js_React_.createElement(Component, { offsetY: boxPos, onClose: () => setOpen(false) }));
}
function SearchPlaceholder() {
    const [showSearchBox] = (0,usePref.useNewTabPref)('showSearchBox');
    react_bundle_js_React_.useEffect(() => {
        if (!showSearchBox) {
            (0,background["default"])().newTabMetrics.reportNTPSearchDefaultEngine(null);
        }
    }, [showSearchBox]);
    if (!showSearchBox)
        return null;
    return react_bundle_js_React_.createElement(SearchContext.SearchContext, null,
        react_bundle_js_React_.createElement(Swapper, null));
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJhdmVfY29tcG9uZW50c19icmF2ZV9uZXdfdGFiX3VpX2NvbXBvbmVudHNfc2VhcmNoX1NlYXJjaFBsYWNlaG9sZGVyX3RzeC5jaHVuay5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkRBQTZEO0FBQzdELHNFQUFzRTtBQUN0RSw0RUFBNEU7QUFDNUUsc0RBQXNEO0FBRU47QUFDb1E7QUFDaE07QUFDckY7QUFDMkM7QUFDdkI7QUFrQm5ELE1BQU0sT0FBTyxHQUFHLGdEQUFtQixDQUFVO0lBQzNDLElBQUksRUFBRSxLQUFLO0lBQ1gsT0FBTyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7SUFDbEIsS0FBSyxFQUFFLEVBQUU7SUFDVCxRQUFRLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztJQUNuQixZQUFZLEVBQUUsU0FBUztJQUN2QixlQUFlLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztJQUMxQixhQUFhLEVBQUUsRUFBRTtJQUNqQixxQkFBcUIsRUFBRSxFQUFFO0NBQzFCLENBQUM7QUFFSyxNQUFNLG9CQUFvQixHQUFHLDJEQUFnQixFQUFFLENBQUMsV0FBVyxDQUFDLGdCQUFnQixFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQztBQUV6RyxNQUFNLGlCQUFpQixHQUFzQixJQUFJLHdIQUFpQixFQUFFLENBQUM7QUFDM0UsTUFBYyxDQUFDLE9BQU8sR0FBRyxpQkFBaUIsQ0FBQztBQUU1Qyw0RUFBNEU7QUFDNUUsV0FBVztBQUNYLElBQUksYUFBYSxHQUFHLENBQUMsQ0FBQztBQUV0QixNQUFNLFVBQVU7SUFNZDtRQUxRLGFBQVEsR0FBRyxJQUFJLG1IQUFZLENBQUMsSUFBSSxDQUFDO1FBRWpDLG9CQUFlLEdBQWlELEVBQUU7UUFDbEUsdUJBQWtCLEdBQXNELEVBQUU7UUFHaEYseUhBQWtCLENBQUMsU0FBUyxFQUFFLENBQUMsaUJBQWlCLENBQzlDLElBQUks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QyxHQUFHLCtDQUFRLEVBQU87SUFFekMsZ0RBQVMsQ0FBQyxHQUFHLEVBQUU7UUFDWCxJQUFJLFNBQVMsR0FBRyxLQUFLO1FBRXJCLFVBQVUsQ0FBQyxJQUFJLENBQUM7UUFDaEIsUUFBUSxDQUFDLFNBQVMsQ0FBQztRQUVuQixVQUFVLEVBQUU7YUFDUCxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsSUFBSSxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDL0MsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLElBQUksUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ3pDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLFNBQVMsSUFBSSxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFbkQsT0FBTyxHQUFHLEVBQUUsR0FBRyxTQUFTLEdBQUcsSUFBSSxFQUFDLENBQUM7SUFDckMsQ0FBQyxFQUFFLElBQUksQ0FBQztJQUVSLE9BQU87UUFDSCxNQUFNO1FBQ04sT0FBTztRQUNQLEtBQUs7S0FDUjtBQUNMLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9icmF2ZS1jb3JlLy4vY29tcG9uZW50cy9icmF2ZV9uZXdfdGFiX3VpL2NvbXBvbmVudHMvc2VhcmNoL1NlYXJjaENvbnRleHQudHN4Iiwid2VicGFjazovL2JyYXZlLWNvcmUvLi9jb21wb25lbnRzL2JyYXZlX25ld190YWJfdWkvY29tcG9uZW50cy9zZWFyY2gvU2VhcmNoRW5naW5lSWNvbi50c3giLCJ3ZWJwYWNrOi8vYnJhdmUtY29yZS8uL25vZGVfbW9kdWxlcy8ucG5wbS9AYnJhdmUrbGVvQGh0dHBzKysrY29kZWxvYWQuZ2l0aHViLmNvbSticmF2ZStsZW8rdGFyLmd6K2M1ZjljOGY3OGYzZGY1Yjc2N2E4M2FkNjdiYWJkOGJfMGM2NWRkMjJlMmE3NzgxOGMxMzEzNzdkNTNlMmU4NDMvbm9kZV9tb2R1bGVzL0BicmF2ZS9sZW8vc2hhcmVkL2Zsb2F0aW5nLmpzIiwid2VicGFjazovL2JyYXZlLWNvcmUvLi9ub2RlX21vZHVsZXMvLnBucG0vQGJyYXZlK2xlb0BodHRwcysrK2NvZGVsb2FkLmdpdGh1Yi5jb20rYnJhdmUrbGVvK3Rhci5neitjNWY5YzhmNzhmM2RmNWI3NjdhODNhZDY3YmFiZDhiXzBjNjVkZDIyZTJhNzc4MThjMTMxMzc3ZDUzZTJlODQzL25vZGVfbW9kdWxlcy9AYnJhdmUvbGVvL3dlYi1jb21wb25lbnRzL2Zsb2F0aW5nLmpzIiwid2VicGFjazovL2JyYXZlLWNvcmUvLi9ub2RlX21vZHVsZXMvLnBucG0vQGJyYXZlK2xlb0BodHRwcysrK2NvZGVsb2FkLmdpdGh1Yi5jb20rYnJhdmUrbGVvK3Rhci5neitjNWY5YzhmNzhmM2RmNWI3NjdhODNhZDY3YmFiZDhiXzBjNjVkZDIyZTJhNzc4MThjMTMxMzc3ZDUzZTJlODQzL25vZGVfbW9kdWxlcy9AYnJhdmUvbGVvL3JlYWN0L2Zsb2F0aW5nLmpzIiwid2VicGFjazovL2JyYXZlLWNvcmUvLi9jb21wb25lbnRzL2JyYXZlX25ld190YWJfdWkvY29tcG9uZW50cy9zZWFyY2gvRW5naW5lUGlja2VyLnRzeCIsIndlYnBhY2s6Ly9icmF2ZS1jb3JlLy4vY29tcG9uZW50cy9icmF2ZV9uZXdfdGFiX3VpL2NvbXBvbmVudHMvc2VhcmNoL1NlYXJjaEJveC50c3giLCJ3ZWJwYWNrOi8vYnJhdmUtY29yZS8uL2NvbXBvbmVudHMvYnJhdmVfbmV3X3RhYl91aS9jb21wb25lbnRzL3NlYXJjaC9TZWFyY2hSZXN1bHQudHN4Iiwid2VicGFjazovL2JyYXZlLWNvcmUvLi9jb21wb25lbnRzL2JyYXZlX25ld190YWJfdWkvY29tcG9uZW50cy9zZWFyY2gvTWF5YmVQcm9tcHRFbmFibGVTdWdnZXN0aW9ucy50c3giLCJ3ZWJwYWNrOi8vYnJhdmUtY29yZS8uL2NvbXBvbmVudHMvYnJhdmVfbmV3X3RhYl91aS9jb21wb25lbnRzL3NlYXJjaC9TZWFyY2hSZXN1bHRzLnRzeCIsIndlYnBhY2s6Ly9icmF2ZS1jb3JlLy4vY29tcG9uZW50cy9icmF2ZV9uZXdfdGFiX3VpL2NvbXBvbmVudHMvc2VhcmNoL1NlYXJjaERpYWxvZy50c3giLCJ3ZWJwYWNrOi8vYnJhdmUtY29yZS8uL2NvbXBvbmVudHMvYnJhdmVfbmV3X3RhYl91aS9jb21wb25lbnRzL3NlYXJjaC9TZWFyY2hQbGFjZWhvbGRlci50c3giLCJ3ZWJwYWNrOi8vYnJhdmUtY29yZS8uL2NvbXBvbmVudHMvY29tbW9uL3VzZVByb21pc2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDI0IFRoZSBCcmF2ZSBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuLy8gTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBmaWxlLFxuLy8gWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHBzOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uXG5cbmltcG9ydCB1c2VQcm9taXNlIGZyb20gJyR3ZWItY29tbW9uL3VzZVByb21pc2UnO1xuaW1wb3J0IHsgQXV0b2NvbXBsZXRlUmVzdWx0LCBGcmVTdGF0ZSwgSW5wdXRLZXl3b3JkTW9kZWwsIElucHV0TWV0aG9kLCBPbW5pYm94UG9wdXBTZWxlY3Rpb24sIFBhZ2VIYW5kbGVyRmFjdG9yeSwgUGFnZUhhbmRsZXJSZW1vdGUsIFBhZ2VJbnRlcmZhY2UsIFBhZ2VSZWNlaXZlciwgU2VsZWN0ZWRGaWxlSW5mbywgU2VsZWN0aW9uRGlyZWN0aW9uLCBTZWxlY3Rpb25TdGVwLCBUYWJJbmZvIH0gZnJvbSAnY2hyb21lOi8vcmVzb3VyY2VzL21vam8vY29tcG9uZW50cy9vbW5pYm94L2Jyb3dzZXIvc2VhcmNoYm94Lm1vam9tLXdlYnVpLmpzJztcbmltcG9ydCB7IFN1Z2dlc3RJbnZlbnRvcnkgfSBmcm9tICdjaHJvbWU6Ly9yZXNvdXJjZXMvbW9qby9jb21wb25lbnRzL29tbmlib3gvYnJvd3Nlci9mdXNlYm94X2FjdGlvbi5tb2pvbS13ZWJ1aS5qcyc7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZ2V0TlRQQnJvd3NlckFQSSwgeyBTZWFyY2hFbmdpbmVJbmZvIH0gZnJvbSAnLi4vLi4vYXBpL2JhY2tncm91bmQnO1xuaW1wb3J0IHsgdXNlRW5naW5lQ29udGV4dCB9IGZyb20gJy4vRW5naW5lQ29udGV4dCc7XG5pbXBvcnQgeyBDb250ZXh0VXBsb2FkRXJyb3JUeXBlLCBDb250ZXh0VXBsb2FkU3RhdHVzIH0gZnJvbSAnZ2VuL2NvbXBvbmVudHMvb21uaWJveC9jb21wb3NlYm94L2NvbXBvc2Vib3hfcXVlcnkubW9qb20ubSc7XG5pbXBvcnQgeyBJbnB1dFN0YXRlIH0gZnJvbSAnZ2VuL3VpL3dlYnVpL3Jlc291cmNlcy90c2MvbW9qby9jb21wb25lbnRzL29tbmlib3gvY29tcG9zZWJveC9jb21wb3NlYm94X3F1ZXJ5Lm1vam9tLXdlYnVpJztcbmltcG9ydCB7IFdpbmRvd09wZW5EaXNwb3NpdGlvbiB9IGZyb20gJ2dlbi91aS93ZWJ1aS9yZXNvdXJjZXMvdHNjL21vam8vdWkvYmFzZS9tb2pvbS93aW5kb3dfb3Blbl9kaXNwb3NpdGlvbi5tb2pvbS13ZWJ1aSc7XG5pbXBvcnQgeyBTaXplIH0gZnJvbSAnZ2VuL3VpL3dlYnVpL3Jlc291cmNlcy90c2MvbW9qby91aS9nZngvZ2VvbWV0cnkvbW9qb20vZ2VvbWV0cnkubW9qb20td2VidWknO1xuaW1wb3J0IHsgVXJsIH0gZnJvbSAnZ2VuL3VpL3dlYnVpL3Jlc291cmNlcy90c2MvbW9qby91cmwvbW9qb20vdXJsLm1vam9tLXdlYnVpJztcblxuaW50ZXJmYWNlIENvbnRleHQge1xuICBvcGVuOiBib29sZWFuLFxuICBzZXRPcGVuOiAob3BlbjogYm9vbGVhbikgPT4gdm9pZCxcbiAgcXVlcnk6IHN0cmluZyxcbiAgc2V0UXVlcnk6IChxdWVyeTogc3RyaW5nKSA9PiB2b2lkXG4gIHNlYXJjaEVuZ2luZT86IFNlYXJjaEVuZ2luZUluZm8sXG4gIHNldFNlYXJjaEVuZ2luZTogKHNlYXJjaEVuZ2luZTogU2VhcmNoRW5naW5lSW5mbyB8IHN0cmluZykgPT4gdm9pZFxuICBzZWFyY2hFbmdpbmVzOiBTZWFyY2hFbmdpbmVJbmZvW11cbiAgZmlsdGVyZWRTZWFyY2hFbmdpbmVzOiBTZWFyY2hFbmdpbmVJbmZvW11cbn1cblxuY29uc3QgQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQ8Q29udGV4dD4oe1xuICBvcGVuOiBmYWxzZSxcbiAgc2V0T3BlbjogKCkgPT4geyB9LFxuICBxdWVyeTogJycsXG4gIHNldFF1ZXJ5OiAoKSA9PiB7IH0sXG4gIHNlYXJjaEVuZ2luZTogdW5kZWZpbmVkLFxuICBzZXRTZWFyY2hFbmdpbmU6ICgpID0+IHsgfSxcbiAgc2VhcmNoRW5naW5lczogW10sXG4gIGZpbHRlcmVkU2VhcmNoRW5naW5lczogW11cbn0pXG5cbmV4cG9ydCBjb25zdCBzZWFyY2hFbmdpbmVzUHJvbWlzZSA9IGdldE5UUEJyb3dzZXJBUEkoKS5wYWdlSGFuZGxlci5nZXRTZWFyY2hFbmdpbmVzKCkudGhlbihyID0+IHIuc2VhcmNoRW5naW5lcylcblxuZXhwb3J0IGNvbnN0IG9tbmlib3hDb250cm9sbGVyOiBQYWdlSGFuZGxlclJlbW90ZSA9IG5ldyBQYWdlSGFuZGxlclJlbW90ZSgpO1xuKHdpbmRvdyBhcyBhbnkpLm9tbmlib3ggPSBvbW5pYm94Q29udHJvbGxlcjtcblxuLy8gVHJhY2tzIHRoZSBsYXRlc3QgcXVlcnkgc2VudCBmb3IgYXV0b2NvbXBsZXRpb24uIFVzZWQgdG8gZmlsdGVyIG91dCBzdGFsZVxuLy8gcmVzdWx0cy5cbmxldCBhY3RpdmVRdWVyeUlkID0gMDtcblxuY2xhc3MgU2VhcmNoUGFnZSBpbXBsZW1lbnRzIFBhZ2VJbnRlcmZhY2Uge1xuICBwcml2YXRlIHJlY2VpdmVyID0gbmV3IFBhZ2VSZWNlaXZlcih0aGlzKVxuICBwcml2YXRlIHJlc3VsdDogQXV0b2NvbXBsZXRlUmVzdWx0IHwgdW5kZWZpbmVkXG4gIHByaXZhdGUgcmVzdWx0TGlzdGVuZXJzOiBBcnJheTwocmVzdWx0PzogQXV0b2NvbXBsZXRlUmVzdWx0KSA9PiB2b2lkPiA9IFtdXG4gIHByaXZhdGUgc2VsZWN0aW9uTGlzdGVuZXJzOiBBcnJheTwoc2VsZWN0aW9uOiBPbW5pYm94UG9wdXBTZWxlY3Rpb24pID0+IHZvaWQ+ID0gW11cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBQYWdlSGFuZGxlckZhY3RvcnkuZ2V0UmVtb3RlKCkuY3JlYXRlUGFnZUhhbmRsZXIoXG4gICAgICB0aGlzLnJlY2VpdmVyLiQuYmluZE5ld1BpcGVBbmRQYXNzUmVtb3RlKCksXG4gICAgICBvbW5pYm94Q29udHJvbGxlci4kLmJpbmROZXdQaXBlQW5kUGFzc1JlY2VpdmVyKCksXG4gICAgKVxuICB9XG5cbiAgYWRkUmVzdWx0TGlzdGVuZXIobGlzdGVuZXI6IChyZXN1bHQ/OiBBdXRvY29tcGxldGVSZXN1bHQpID0+IHZvaWQpIHtcbiAgICB0aGlzLnJlc3VsdExpc3RlbmVycy5wdXNoKGxpc3RlbmVyKVxuICAgIGlmICh0aGlzLnJlc3VsdCkgbGlzdGVuZXIodGhpcy5yZXN1bHQpXG4gIH1cblxuICByZW1vdmVSZXN1bHRMaXN0ZW5lcihsaXN0ZW5lcjogKHJlc3VsdD86IEF1dG9jb21wbGV0ZVJlc3VsdCkgPT4gdm9pZCkge1xuICAgIHRoaXMucmVzdWx0TGlzdGVuZXJzID0gdGhpcy5yZXN1bHRMaXN0ZW5lcnMuZmlsdGVyKHIgPT4gciAhPT0gbGlzdGVuZXIpXG4gIH1cblxuICBhZGRTZWxlY3Rpb25MaXN0ZW5lcihsaXN0ZW5lcjogKHNlbGVjdGlvbjogT21uaWJveFBvcHVwU2VsZWN0aW9uKSA9PiB2b2lkKSB7XG4gICAgdGhpcy5zZWxlY3Rpb25MaXN0ZW5lcnMucHVzaChsaXN0ZW5lcilcbiAgfVxuXG4gIHJlbW92ZVNlbGVjdGlvbkxpc3RlbmVyKGxpc3RlbmVyOiAoc2VsZWN0aW9uOiBPbW5pYm94UG9wdXBTZWxlY3Rpb24pID0+IHZvaWQpIHtcbiAgICB0aGlzLnNlbGVjdGlvbkxpc3RlbmVycyA9IHRoaXMuc2VsZWN0aW9uTGlzdGVuZXJzLmZpbHRlcihzID0+IHMgIT09IGxpc3RlbmVyKVxuICB9XG5cbiAgYXV0b2NvbXBsZXRlUmVzdWx0Q2hhbmdlZChyZXN1bHQ6IEF1dG9jb21wbGV0ZVJlc3VsdCkge1xuICAgIHRoaXMucmVzdWx0ID0gcmVzdWx0O1xuICAgIGZvciAoY29uc3QgbGlzdGVuZXIgb2YgdGhpcy5yZXN1bHRMaXN0ZW5lcnMpIGxpc3RlbmVyKHJlc3VsdClcbiAgfVxuXG4gIHVwZGF0ZVNlbGVjdGlvbihzZWxlY3Rpb246IE9tbmlib3hQb3B1cFNlbGVjdGlvbikge1xuICAgIGZvciAoY29uc3QgbGlzdGVuZXIgb2YgdGhpcy5zZWxlY3Rpb25MaXN0ZW5lcnMpIGxpc3RlbmVyKHNlbGVjdGlvbilcbiAgfVxuXG4gIG9uU2hvdygpOiB2b2lkIHsgfVxuICBzZXRJbnB1dFRleHQoaW5wdXRUZXh0OiBzdHJpbmcpIHsgfVxuICBzZXRUaHVtYm5haWwodGh1bWJuYWlsVXJsOiBzdHJpbmcpIHsgfVxuICBvbkNvbnRleHR1YWxJbnB1dFN0YXR1c0NoYW5nZWQodG9rZW46IHN0cmluZywgc3RhdHVzOiBDb250ZXh0VXBsb2FkU3RhdHVzLCBlcnJvclR5cGU6IENvbnRleHRVcGxvYWRFcnJvclR5cGUgfCBudWxsKSB7IH1cbiAgc2V0S2V5d29yZFNwYWNlVHJpZ2dlcmluZ0VuYWJsZWQoZW5hYmxlZDogYm9vbGVhbik6IHZvaWQgeyB9XG4gIHNldEF2YWlsYWJsZUtleXdvcmRNb2RlbHMobW9kZWxzOiBJbnB1dEtleXdvcmRNb2RlbFtdKTogdm9pZCB7IH1cbiAgb25UYWJTdHJpcENoYW5nZWQoKSB7IH1cbiAgYWRkRmlsZUNvbnRleHQodG9rZW46IHN0cmluZywgZmlsZUluZm86IFNlbGVjdGVkRmlsZUluZm8pIHsgfVxuICBzZXRLZXl3b3JkU2VsZWN0ZWQoaXNLZXl3b3JkU2VsZWN0ZWQ6IGJvb2xlYW4pOiB2b2lkIHt9XG4gIHVwZGF0ZUF1dG9TdWdnZXN0ZWRUYWJDb250ZXh0KHRhYjogKFRhYkluZm8gfCBudWxsKSk6IHZvaWQge31cbiAgdXBkYXRlTGVuc1NlYXJjaEVsaWdpYmlsaXR5KGVsaWdpYmxlOiBib29sZWFuKTogdm9pZCB7fVxuICB1cGRhdGVDb250ZW50U2hhcmluZ1BvbGljeShlbmFibGVkOiBib29sZWFuKTogdm9pZCB7fVxuICBvbklucHV0U3RhdGVDaGFuZ2VkKGlucHV0U3RhdGU6IElucHV0U3RhdGUpOiB2b2lkIHt9XG4gIHN0ZXBTZWxlY3Rpb24oZGlyZWN0aW9uOiBTZWxlY3Rpb25EaXJlY3Rpb24sIHN0ZXA6IFNlbGVjdGlvblN0ZXApOiB2b2lkIHt9XG4gIG9wZW5DdXJyZW50U2VsZWN0aW9uKGRpc3Bvc2l0aW9uOiBXaW5kb3dPcGVuRGlzcG9zaXRpb24pOiB2b2lkIHt9XG4gIHNldEFpbUJ1dHRvblZpc2libGUodmlzaWJsZTogYm9vbGVhbik6IHZvaWQge31cbiAgdXBkYXRlQWltUG9wdXBFbGlnaWJpbGl0eShlbGlnaWJsZTogYm9vbGVhbik6IHZvaWQge31cbiAgb25QZXJtaXNzaW9uUHJvbXB0Q2hhbmdlZChpc1Nob3dpbmc6IGJvb2xlYW4sIHByb21wdFNpemU6IFNpemUpOiB2b2lkIHt9XG4gIHNldFJlc3RvcmVkVGFiSWRzKHRhYklkczogbnVtYmVyW10pOiB2b2lkIHsgfVxuICBzZXRBaW1UaHJlYWRSZXN0b3JlZFRhYnModGFiczogVGFiSW5mb1tdKTogdm9pZCB7IH1cbiAgdXBkYXRlU21hcnRUYWJTaGFyaW5nQWN0aXZlKGFjdGl2ZTogYm9vbGVhbik6IHZvaWQgeyB9XG4gIHNldEFpbUJ1dHRvbkNvbmZpZyh0ZXh0OiBzdHJpbmcsIHRvb2x0aXA6IHN0cmluZywgYTExeUxhYmVsOiBzdHJpbmcsIGljb25Vcmw6IFVybCk6IHZvaWQgeyB9XG4gIHJlc2V0UG9wdXBUb0luaXRpYWxTdGF0ZSgpOiB2b2lkIHsgfVxuICBvblNjcmVlbnNob3RNZW51Q2xvc2VkKCk6IHZvaWQgeyB9XG4gIHNldEZyZVN0YXRlKHN0YXRlOiBGcmVTdGF0ZSk6IHZvaWQgeyB9XG4gIHVwZGF0ZVByb2ZpbGVJbmZvKGF2YXRhclVybDogc3RyaW5nLCBuYW1lOiBzdHJpbmcsIGVtYWlsOiBzdHJpbmcpOiB2b2lkIHsgfVxufVxuXG5leHBvcnQgY29uc3Qgc2VhcmNoID0gbmV3IFNlYXJjaFBhZ2UoKVxuXG5leHBvcnQgZnVuY3Rpb24gU2VhcmNoQ29udGV4dChwcm9wczogUmVhY3QuUHJvcHNXaXRoQ2hpbGRyZW48e30+KSB7XG4gIGNvbnN0IHsgZW5naW5lQ29uZmlnLCBsYXN0U2VhcmNoRW5naW5lLCBzZXRMYXN0U2VhcmNoRW5naW5lIH0gPSB1c2VFbmdpbmVDb250ZXh0KClcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtzZWFyY2hFbmdpbmUsIHNldFNlYXJjaEVuZ2luZUludGVybmFsXSA9IFJlYWN0LnVzZVN0YXRlPFNlYXJjaEVuZ2luZUluZm8+KClcbiAgY29uc3QgW3F1ZXJ5LCBzZXRRdWVyeV0gPSBSZWFjdC51c2VTdGF0ZSgnJylcbiAgY29uc3QgeyByZXN1bHQ6IHNlYXJjaEVuZ2luZXMgPSBbXSB9ID0gdXNlUHJvbWlzZSgoKSA9PiBzZWFyY2hFbmdpbmVzUHJvbWlzZSwgW10pXG4gIGNvbnN0IGZpbHRlcmVkU2VhcmNoRW5naW5lcyA9IHNlYXJjaEVuZ2luZXMuZmlsdGVyKHMgPT4gZW5naW5lQ29uZmlnW3MuaG9zdF0pXG5cbiAgY29uc3Qgc2V0U2VhcmNoRW5naW5lID0gUmVhY3QudXNlQ2FsbGJhY2soKGVuZ2luZTogU2VhcmNoRW5naW5lSW5mbyB8IHN0cmluZykgPT4ge1xuICAgIGlmICh0eXBlb2YgZW5naW5lID09PSAnc3RyaW5nJykge1xuICAgICAgZW5naW5lID0gc2VhcmNoRW5naW5lcy5maW5kKGUgPT4gZS5ob3N0ID09PSBlbmdpbmUgfHwgZS5rZXl3b3JkID09PSBlbmdpbmUpIVxuICAgIH1cblxuICAgIGlmICghZW5naW5lKSByZXR1cm5cblxuICAgIHNldExhc3RTZWFyY2hFbmdpbmUoZW5naW5lKVxuICAgIGdldE5UUEJyb3dzZXJBUEkoKS5uZXdUYWJNZXRyaWNzLnJlcG9ydE5UUFNlYXJjaERlZmF1bHRFbmdpbmUoZW5naW5lLnByZXBvcHVsYXRlSWQpXG4gICAgc2V0U2VhcmNoRW5naW5lSW50ZXJuYWwoZW5naW5lKVxuICB9LCBbc2VhcmNoRW5naW5lc10pO1xuXG4gIC8vIFdoZW4gd2UgcmVjZWl2ZSBzZWFyY2ggZW5naW5lcywgdXNlIHRoZSBmaXJzdCBvbmUgYXMgb3VyIGtleXdvcmQsIGlmIHdlIGRvbid0IGhhdmUgYSBtYXRjaC5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIXNlYXJjaEVuZ2luZXMubGVuZ3RoKSByZXR1cm5cblxuICAgIGNvbnN0IG1hdGNoID0gZmlsdGVyZWRTZWFyY2hFbmdpbmVzLmZpbmQocyA9PiBzLmhvc3QgPT09IGxhc3RTZWFyY2hFbmdpbmUpXG4gICAgICA/PyBzZWFyY2hFbmdpbmVzWzBdXG4gICAgZ2V0TlRQQnJvd3NlckFQSSgpLm5ld1RhYk1ldHJpY3MucmVwb3J0TlRQU2VhcmNoRGVmYXVsdEVuZ2luZShtYXRjaC5wcmVwb3B1bGF0ZUlkKVxuICAgIHNldFNlYXJjaEVuZ2luZShtYXRjaClcbiAgfSwgW2ZpbHRlcmVkU2VhcmNoRW5naW5lc10pXG5cbiAgLy8gV2hlbiB0aGUgcXVlcnkgY2hhbmdlcywgbm90aWZ5IHRoZSBicm93c2VyIHNpZGUuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHF1ZXJ5KSB7XG4gICAgICBjb25zdCBrZXl3b3JkUXVlcnkgPSBgJHtzZWFyY2hFbmdpbmU/LmtleXdvcmR9ICR7cXVlcnl9YFxuICAgICAgb21uaWJveENvbnRyb2xsZXIucXVlcnlBdXRvY29tcGxldGUoYWN0aXZlUXVlcnlJZCsrLCBudWxsLCBrZXl3b3JkUXVlcnksIGZhbHNlLCBrZXl3b3JkUXVlcnkubGVuZ3RoLCBTdWdnZXN0SW52ZW50b3J5LmtEZWZhdWx0LCBmYWxzZSwgJycsIElucHV0TWV0aG9kLmtLZXlib2FyZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9tbmlib3hDb250cm9sbGVyLnN0b3BBdXRvY29tcGxldGUodHJ1ZSlcbiAgICB9XG4gIH0sIFtxdWVyeSwgc2VhcmNoRW5naW5lXSlcblxuICBjb25zdCBzZXRRdWVyeUV4dGVybmFsID0gUmVhY3QudXNlQ2FsbGJhY2soKHF1ZXJ5OiBzdHJpbmcpID0+IHtcbiAgICBzZXRPcGVuKHRydWUpXG4gICAgc2V0UXVlcnkocXVlcnkpXG4gIH0sIFtdKVxuXG4gIGNvbnN0IGNvbnRleHQgPSBSZWFjdC51c2VNZW1vKCgpID0+ICh7XG4gICAgb3BlbixcbiAgICBzZXRPcGVuLFxuICAgIHNlYXJjaEVuZ2luZSxcbiAgICBzZXRTZWFyY2hFbmdpbmUsXG4gICAgcXVlcnksXG4gICAgc2V0UXVlcnk6IHNldFF1ZXJ5RXh0ZXJuYWwsXG4gICAgc2VhcmNoRW5naW5lcyxcbiAgICBmaWx0ZXJlZFNlYXJjaEVuZ2luZXNcbiAgfSksIFtzZWFyY2hFbmdpbmUsIHNldFNlYXJjaEVuZ2luZSwgZmlsdGVyZWRTZWFyY2hFbmdpbmVzLCBxdWVyeSwgc2VhcmNoRW5naW5lcywgb3Blbl0pXG5cbiAgcmV0dXJuIDxDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtjb250ZXh0fT5cbiAgICB7cHJvcHMuY2hpbGRyZW59XG4gIDwvQ29udGV4dC5Qcm92aWRlcj5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVNlYXJjaENvbnRleHQoKSB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KENvbnRleHQpXG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjQgVGhlIEJyYXZlIEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4vLyBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIGZpbGUsXG4vLyBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cHM6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy5cblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBpY29uIH0gZnJvbSBcIkBicmF2ZS9sZW8vdG9rZW5zL2Nzcy92YXJpYWJsZXNcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBTZWFyY2hFbmdpbmVJbmZvIH0gZnJvbSBcIi4uLy4uL2FwaS9iYWNrZ3JvdW5kXCI7XG5pbXBvcnQgSWNvbiBmcm9tIFwiQGJyYXZlL2xlby9yZWFjdC9pY29uXCI7XG5cbi8vIE1hcHBpbmcgb2Ygc2VhcmNoIGVuZ2luZSBob3N0IHRvIE5hbGEgaWNvbiBmb3IgdGhlIGljb25zIHdlIGJ1bmRsZSBpbiB0aGUgYnJvd3NlclxuY29uc3QgaWNvbnMgPSB7XG4gIC8vIFRoZSBHb29nbGUgc2VhcmNoIHByb3ZpZGVyIGhhcyB0aGUgZW1wdHkgb3JpZ2luIDpPXG4gICcnOiAnZ29vZ2xlLWNvbG9yJyxcbiAgJ2R1Y2tkdWNrZ28uY29tJzogJ2R1Y2tkdWNrZ28tY29sb3InLFxuICAnc2VhcmNoLmJyYXZlLmNvbSc6ICdzb2NpYWwtYnJhdmUtcmVsZWFzZS1mYXZpY29uLWZ1bGxoZWlnaHQtY29sb3InLFxuICAnd3d3LmJpbmcuY29tJzogJ2JpbmctY29sb3InLFxuICAnd3d3LnF3YW50LmNvbSc6ICdxd2FudC1jb2xvcicsXG4gICd3d3cuc3RhcnRwYWdlLmNvbSc6ICdzdGFydHBhZ2UtY29sb3InLFxuICAnc2VhcmNoLnlhaG9vLmNvbSc6ICd5YWhvby1jb2xvcicsXG4gICd5YW5kZXguY29tJzogJ3lhbmRleC1jb2xvcicsXG4gICdlY29zaWEub3JnJzogJ2Vjb3NpYS1jb2xvcicsXG59XG5cbmNvbnN0IGhpZGUgPSB7IG9wYWNpdHk6IDAgfVxuLy8gQ29tcG9uZW50IHdoaWNoIGhpZGVzIHRoZSBpbWFnZSB1bnRpbCBpdCBzdWNjZXNzZnVsbHkgbG9hZHMgKGlmIGV2ZXIpLlxuZXhwb3J0IGZ1bmN0aW9uIE1heWJlSW1hZ2UocHJvcHM6IFJlYWN0LkRldGFpbGVkSFRNTFByb3BzPFJlYWN0LkltZ0hUTUxBdHRyaWJ1dGVzPEhUTUxJbWFnZUVsZW1lbnQ+LCBIVE1MSW1hZ2VFbGVtZW50Pikge1xuICBjb25zdCB7IHNyYywgLi4ucmVzdCB9ID0gcHJvcHNcbiAgY29uc3QgW2xvYWRlZCwgc2V0TG9hZGVkXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBvbkxvYWQgPSBSZWFjdC51c2VDYWxsYmFjaygoKSA9PiBzZXRMb2FkZWQodHJ1ZSksIFtdKTtcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldExvYWRlZChmYWxzZSlcbiAgfSwgW3NyY10pXG4gIHJldHVybiA8aW1nIHsuLi5yZXN0fSBzdHlsZT17bG9hZGVkID8gdW5kZWZpbmVkIDogaGlkZX0gb25Mb2FkPXtvbkxvYWR9IHNyYz17YGNocm9tZTovL2ltYWdlP3VybD0ke2VuY29kZVVSSUNvbXBvbmVudChzcmMgPz8gJycpfWB9IC8+XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBTZWFyY2hFbmdpbmVJY29uKHByb3BzOiB7IGVuZ2luZT86IFNlYXJjaEVuZ2luZUluZm8sIGNsYXNzTmFtZT86IHN0cmluZyB9KSB7XG4gIGlmICghcHJvcHMuZW5naW5lKSByZXR1cm4gbnVsbFxuXG4gIGNvbnN0IG5hbGFJY29uID0gaWNvbnNbcHJvcHMuZW5naW5lLmhvc3QgYXMga2V5b2YgdHlwZW9mIGljb25zXVxuXG4gIHJldHVybiBuYWxhSWNvblxuICAgID8gPEljb24gbmFtZT17bmFsYUljb259IGNsYXNzTmFtZT17cHJvcHMuY2xhc3NOYW1lfSAvPlxuICAgIDogPE1heWJlSW1hZ2Ugc3JjPXtwcm9wcy5lbmdpbmUuZmF2aWNvblVybC51cmx9IGNsYXNzTmFtZT17cHJvcHMuY2xhc3NOYW1lfSAvPlxufVxuXG5leHBvcnQgY29uc3QgTWVkaXVtU2VhcmNoRW5naW5lSWNvbiA9IHN0eWxlZChTZWFyY2hFbmdpbmVJY29uKWBcbiAgLS1sZW8taWNvbi1zaXplOiAke2ljb24ubX07XG5cbiAgd2lkdGg6ICR7aWNvbi5tfTtcbiAgaGVpZ2h0OiAke2ljb24ubX07XG5gXG4iLCJpbXBvcnQgJy4vNjUxZjBiYWEuanMnO1xuaW1wb3J0ICcuLzE5MDkzNzlmLmpzJztcbmltcG9ydCAnLi9hNWUzZTY2Zi5qcyc7XG5pbXBvcnQgJy4vZDA0OGRlNzMuanMnO1xuaW1wb3J0ICcuL2U3Y2ExMWM1LmpzJztcbmltcG9ydCAnLi8zNGRiOWVlNS5qcyc7XG5pbXBvcnQgJy4vMTRkZTQ5YzYuanMnO1xuaW1wb3J0ICcuLzNlODE4Y2VlLmpzJztcbmV4cG9ydCB7IEYgYXMgZGVmYXVsdCB9IGZyb20gJy4vZGFlMjZlYjcuanMnO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZmxvYXRpbmcuanMubWFwXG4iLCJpbXBvcnQgU3ZlbHRlV2ViIGZyb20gJy4uL3NoYXJlZC9zdmVsdGUtd2ViLmpzJ1xuaW1wb3J0IEZsb2F0aW5nIGZyb20gJy4uL3NoYXJlZC9mbG9hdGluZy5qcydcbmV4cG9ydCBkZWZhdWx0IFN2ZWx0ZVdlYihGbG9hdGluZywge1xuICAgIG5hbWU6ICdsZW8tZmxvYXRpbmcnLFxuICAgIG1vZGU6ICdvcGVuJ1xufSk7XG5cbi8vIFJlZXhwb3J0IGV2ZXJ5dGhpbmcgZnJvbSBvdXIgY29tcG9uZW50LCBzbyBjb25zdW1lcnMgY2FuIGRvIGFueXRoaW5nIHRoZSBiYXNlXG4vLyBjb21wb25lbnQgY2FuIGRvLlxuZXhwb3J0ICogZnJvbSAnLi4vc2hhcmVkL2Zsb2F0aW5nLmpzJyIsImltcG9ydCBTdmVsdGVUb1JlYWN0IGZyb20gJy4uL3NoYXJlZC9zdmVsdGUtcmVhY3QuanMnXG5pbXBvcnQgRmxvYXRpbmcgZnJvbSAnLi4vd2ViLWNvbXBvbmVudHMvZmxvYXRpbmcuanMnXG5leHBvcnQgZGVmYXVsdCBTdmVsdGVUb1JlYWN0KCdsZW8tZmxvYXRpbmcnLCBGbG9hdGluZyk7XG5cbi8vIFJlZXhwb3J0IGV2ZXJ5dGhpbmcgZnJvbSBvdXIgY29tcG9uZW50LCBzbyBSZWFjdCBjb25zdW1lcnMgY2FuIGRvIGFueXRoaW5nXG4vLyB0aGUgYmFzZSBjb21wb25lbnQgY2FuIGRvLlxuZXhwb3J0ICogZnJvbSAnLi4vd2ViLWNvbXBvbmVudHMvZmxvYXRpbmcuanMnIiwiLy8gQ29weXJpZ2h0IChjKSAyMDI0IFRoZSBCcmF2ZSBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuLy8gTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBmaWxlLFxuLy8gWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHBzOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uXG5cbmltcG9ydCBGbGV4IGZyb20gXCIkd2ViLWNvbW1vbi9GbGV4XCI7XG5pbXBvcnQgeyBnZXRMb2NhbGUgfSBmcm9tIFwiJHdlYi1jb21tb24vbG9jYWxlXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BicmF2ZS9sZW8vcmVhY3QvYnV0dG9uJztcbmltcG9ydCBGbG9hdGluZyBmcm9tICdAYnJhdmUvbGVvL3JlYWN0L2Zsb2F0aW5nJztcbmltcG9ydCB7IGNvbG9yLCByYWRpdXMsIHNwYWNpbmcgfSBmcm9tIFwiQGJyYXZlL2xlby90b2tlbnMvY3NzL3ZhcmlhYmxlc1wiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgdXNlU2VhcmNoQ29udGV4dCB9IGZyb20gXCIuL1NlYXJjaENvbnRleHRcIjtcbmltcG9ydCB7IE1lZGl1bVNlYXJjaEVuZ2luZUljb24gfSBmcm9tIFwiLi9TZWFyY2hFbmdpbmVJY29uXCI7XG5cbmNvbnN0IE9wdGlvbiA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogJHtzcGFjaW5nLm19O1xuXG4gIHBhZGRpbmc6ICR7c3BhY2luZy5tfTtcbiAgYm9yZGVyLXJhZGl1czogJHtyYWRpdXMuc307XG5cbiAgJjpob3ZlciwgJltkYXRhLXNlbGVjdGVkPXRydWVdIHtcbiAgICBiYWNrZ3JvdW5kOiBjb2xvci1taXgoaW4gc3JnYiwgJHtjb2xvci50ZXh0LnByaW1hcnl9IDEwJSwgdHJhbnNwYXJlbnQgOTAlKTtcbiAgfVxuYFxuXG5jb25zdCBDdXN0b21pemVCdXR0b24gPSBzdHlsZWQoT3B0aW9uKWBcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGNvbG9yLW1peChpbiBzcmdiLCAke2NvbG9yLnRleHQucHJpbWFyeX0gMTAlLCB0cmFuc3BhcmVudCA5MCUpO1xuXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICY6bm90KDpob3Zlcikge1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gIH1cbmBcblxuY29uc3QgT3BlbkJ1dHRvbiA9IHN0eWxlZChCdXR0b24pYFxuICBtYXJnaW46IC02cHggMCAtNnB4ICR7c3BhY2luZy5zfTtcbmBcblxuY29uc3QgSWNvbkNvbnRhaW5lciA9IHN0eWxlZChGbGV4KSA8eyBvcGVuOiBib29sZWFuIH0+YFxuICBtYXJnaW4tcmlnaHQ6IDRweDtcbiAgYm9yZGVyLXJhZGl1czogJHtyYWRpdXMuc307XG4gIHBhZGRpbmc6ICR7c3BhY2luZy5zfTtcblxuICB3aWR0aDogMzJweDtcbiAgaGVpZ2h0OiAzMnB4O1xuXG4gICR7cCA9PiBwLm9wZW4gJiYgY3NzYFxuICAgIGJhY2tncm91bmQ6IGNvbG9yLW1peChpbiBzcmdiLCAke2NvbG9yLnRleHQucHJpbWFyeX0gMjUlLCB0cmFuc3BhcmVudCA3NSUpO1xuICBgfVxuYFxuXG5jb25zdCBNZW51ID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDE4MHB4O1xuXG4gIGJhY2tncm91bmQ6ICR7Y29sb3IuY29udGFpbmVyLmJhY2tncm91bmR9O1xuICBib3JkZXI6IDFweCBzb2xpZCAke2NvbG9yLmRpdmlkZXIuc3VidGxlfTtcblxuICBib3JkZXItcmFkaXVzOiAke3JhZGl1cy5tfTtcbiAgcGFkZGluZzogJHtzcGFjaW5nLnN9O1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogJHtzcGFjaW5nLnN9O1xuYFxuXG5jb25zdCBmaW5kUGFyZW50V2l0aFRhZyA9IChlbDogSFRNTEVsZW1lbnQgfCBudWxsIHwgdW5kZWZpbmVkLCB0YWdOYW1lOiBzdHJpbmcpID0+IHtcbiAgZG8ge1xuICAgIGVsID0gZWw/LnBhcmVudEVsZW1lbnRcbiAgfSB3aGlsZSAoZWwgJiYgZWwudGFnTmFtZSAhPT0gdGFnTmFtZSlcblxuICByZXR1cm4gZWw7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVuZ2luZVBpY2tlcigpIHtcbiAgY29uc3QgeyBmaWx0ZXJlZFNlYXJjaEVuZ2luZXMsIHNlYXJjaEVuZ2luZSwgc2V0U2VhcmNoRW5naW5lLCBzZXRPcGVuOiBzZXRCb3hPcGVuIH0gPSB1c2VTZWFyY2hDb250ZXh0KClcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXG5cbiAgY29uc3QgYnV0dG9uUmVmID0gUmVhY3QudXNlUmVmPEhUTUxFbGVtZW50PihudWxsKTtcbiAgY29uc3QgbWVudVJlZiA9IFJlYWN0LnVzZVJlZjxIVE1MRWxlbWVudD4obnVsbCk7XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIW9wZW4pIHJldHVyblxuICAgIGNvbnN0IGhhbmRsZXIgPSAoZTogTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKCFlLmNvbXBvc2VkUGF0aCgpLmluY2x1ZGVzKG1lbnVSZWYuY3VycmVudCEpKSB7XG4gICAgICAgIHNldE9wZW4oZmFsc2UpXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQWRkIHRoZSBoYW5kbGVyIGFmdGVyIHdlJ3JlIGZpbmlzaGVkIG9wZW5pbmcgdGhlIG1lbnUsIHNvIHdlIGRvbid0XG4gICAgLy8gaW5zdGFudGx5IGNsb3NlIGl0LlxuICAgIHNldFRpbWVvdXQoKCkgPT4gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVyKSlcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZXIpXG4gICAgfVxuICB9LCBbb3Blbl0pXG5cbiAgcmV0dXJuIDw+XG4gICAgPE9wZW5CdXR0b24gcmVmPXtidXR0b25SZWZ9IGZhYiBraW5kPVwicGxhaW4tZmFpbnRcIiBzbG90PVwiYW5jaG9yLWNvbnRlbnRcIiBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuKG8gPT4gIW8pfT5cbiAgICAgIDxJY29uQ29udGFpbmVyIGFsaWduPVwiY2VudGVyXCIganVzdGlmeT1cImNlbnRlclwiIG9wZW49e29wZW59PlxuICAgICAgICA8TWVkaXVtU2VhcmNoRW5naW5lSWNvbiBlbmdpbmU9e3NlYXJjaEVuZ2luZX0gLz5cbiAgICAgIDwvSWNvbkNvbnRhaW5lcj5cbiAgICA8L09wZW5CdXR0b24+XG4gICAge29wZW4gJiYgPEZsb2F0aW5nIHJlZj17bWVudVJlZn0gdGFyZ2V0PXtmaW5kUGFyZW50V2l0aFRhZyhidXR0b25SZWYuY3VycmVudCwgJ0xFTy1JTlBVVCcpIX0gYXV0b1VwZGF0ZSBwb3NpdGlvblN0cmF0ZWd5PVwiZml4ZWRcIiBwbGFjZW1lbnQ9XCJ0b3Atc3RhcnRcIj5cbiAgICAgIDxNZW51IG9uQ2xpY2s9e2UgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgfX0+XG4gICAgICAgIHtmaWx0ZXJlZFNlYXJjaEVuZ2luZXMubWFwKHMgPT4gPE9wdGlvbiBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgc2V0U2VhcmNoRW5naW5lKHMpXG4gICAgICAgICAgc2V0T3BlbihmYWxzZSlcbiAgICAgICAgfX1cbiAgICAgICAgICBrZXk9e3Mua2V5d29yZH1cbiAgICAgICAgICBkYXRhLXNlbGVjdGVkPXtzID09PSBzZWFyY2hFbmdpbmV9PlxuICAgICAgICAgIDxNZWRpdW1TZWFyY2hFbmdpbmVJY29uIGVuZ2luZT17c30gLz57cy5uYW1lfVxuICAgICAgICA8L09wdGlvbj4pfVxuICAgICAgICA8Q3VzdG9taXplQnV0dG9uIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICBoaXN0b3J5LnB1c2hTdGF0ZSh1bmRlZmluZWQsICcnLCAnP29wZW5TZXR0aW5ncz1TZWFyY2gnKVxuXG4gICAgICAgICAgLy8gRm9yIG5vdywgY2xvc2UgdGhlIHNlYXJjaCBib3ggLSB0aGUgU2V0dGluZ3MgZGlhbG9nIGRvZXNuJ3QgdXNlIGFcbiAgICAgICAgICAvLyBkaWFsb2csIHNvIGl0IGdldHMgcmVuZGVyZWQgdW5kZXJuZWF0aC5cbiAgICAgICAgICBzZXRCb3hPcGVuKGZhbHNlKVxuICAgICAgICAgIHNldE9wZW4oZmFsc2UpXG4gICAgICAgIH19PlxuICAgICAgICAgIHtnZXRMb2NhbGUoJ3NlYXJjaEN1c3RvbWl6ZUxpc3QnKX1cbiAgICAgICAgPC9DdXN0b21pemVCdXR0b24+XG4gICAgICA8L01lbnU+XG4gICAgPC9GbG9hdGluZz59XG4gIDwvPlxufVxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDI0IFRoZSBCcmF2ZSBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuLy8gTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBmaWxlLFxuLy8gWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHBzOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uXG5pbXBvcnQgRmxleCBmcm9tICckd2ViLWNvbW1vbi9GbGV4JztcbmltcG9ydCB7IGdldExvY2FsZSB9IGZyb20gJyR3ZWItY29tbW9uL2xvY2FsZSc7XG5pbXBvcnQgSWNvbiBmcm9tICdAYnJhdmUvbGVvL3JlYWN0L2ljb24nO1xuaW1wb3J0IElucHV0IGZyb20gJ0BicmF2ZS9sZW8vcmVhY3QvaW5wdXQnO1xuaW1wb3J0IHsgY29sb3IsIGZvbnQsIHNwYWNpbmcgfSBmcm9tICdAYnJhdmUvbGVvL3Rva2Vucy9jc3MvdmFyaWFibGVzJztcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IEVuZ2luZVBpY2tlciBmcm9tICcuL0VuZ2luZVBpY2tlcic7XG5pbXBvcnQgeyB1c2VTZWFyY2hDb250ZXh0IH0gZnJvbSAnLi9TZWFyY2hDb250ZXh0JztcbmltcG9ydCB7IGJyYXZlU2VhcmNoSG9zdCwgc2VhcmNoQm94UmFkaXVzIH0gZnJvbSAnLi9jb25maWcnO1xuXG5jb25zdCBzZWFyY2hCb3hDbGFzcyA9ICdudHAtc2VhcmNoLWJveCdcblxuY29uc3QgU2VhcmNoSW5wdXQgPSBzdHlsZWQoSW5wdXQpYFxuICAtLWxlby1jb250cm9sLWZvY3VzLWVmZmVjdDogbm9uZTtcbiAgLS1sZW8tY29udHJvbC1wYWRkaW5nOiAxMnB4IDEwcHg7XG4gIC0tbGVvLWNvbnRyb2wtdGV4dC1jb2xvcjogJHtjb2xvci50ZXh0LnByaW1hcnl9O1xuICAtLWxlby1jb250cm9sLWZvbnQ6ICR7Zm9udC5sYXJnZS5yZWd1bGFyfTtcblxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiA1NDBweDtcblxuICBsZW8taWNvbiB7XG4gICAgLS1sZW8taWNvbi1jb2xvcjogJHtjb2xvci5pY29uLmRlZmF1bHR9O1xuICB9XG5gXG5cbmNvbnN0IFNlYXJjaEljb25Db250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBwYWRkaW5nLXJpZ2h0OiAke3NwYWNpbmcubX07XG5gXG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIC0tbGVvLWNvbnRyb2wtcmFkaXVzOiAke3NlYXJjaEJveFJhZGl1c307XG5cbiAgZGlzcGxheTogZmxleDtcblxuICAvKiBJZiB3ZSBoYXZlIHNlYXJjaCByZXN1bHRzLCBkb24ndCBhZGQgYSByYWRpdXMgdG8gdGhlIGJvdHRvbSBvZiB0aGUgc2VhcmNoIGJveCAqL1xuICAmOmhhcygrIC5zZWFyY2gtcmVzdWx0cykge1xuICAgIC0tbGVvLWNvbnRyb2wtcmFkaXVzOiAke3NlYXJjaEJveFJhZGl1c30gJHtzZWFyY2hCb3hSYWRpdXN9IDAgMDtcbiAgfVxuXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWxlby1jb250cm9sLXJhZGl1cyk7XG5gXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlYXJjaEJveCgpIHtcbiAgY29uc3QgeyBzZWFyY2hFbmdpbmUsIHF1ZXJ5LCBzZXRRdWVyeSB9ID0gdXNlU2VhcmNoQ29udGV4dCgpXG4gIGNvbnN0IHBsYWNlaG9sZGVyVGV4dCA9IHNlYXJjaEVuZ2luZT8uaG9zdCA9PT0gYnJhdmVTZWFyY2hIb3N0XG4gICAgPyBnZXRMb2NhbGUoJ3NlYXJjaEJyYXZlUGxhY2Vob2xkZXInKVxuICAgIDogZ2V0TG9jYWxlKCdzZWFyY2hOb25CcmF2ZVBsYWNlaG9sZGVyJylcbiAgY29uc3Qgc2VhcmNoSW5wdXQgPSBSZWFjdC51c2VSZWY8SFRNTEVsZW1lbnQ+KG51bGwpXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgbGlzdGVuZXIgPSAoZTogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgICAgaWYgKGUua2V5ID09PSAnVGFiJyAmJiBkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSBkb2N1bWVudC5ib2R5KSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBzZWFyY2hJbnB1dC5jdXJyZW50Py5mb2N1cygpXG4gICAgICB9XG4gICAgfVxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBsaXN0ZW5lcilcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGxpc3RlbmVyKVxuICAgIH1cbiAgfSwgW10pXG4gIHJldHVybiA8Q29udGFpbmVyIGNsYXNzTmFtZT17c2VhcmNoQm94Q2xhc3N9PlxuICAgIDxTZWFyY2hJbnB1dCB0YWJJbmRleD17MX0gdHlwZT1cInRleHRcIiByZWY9e3NlYXJjaElucHV0fSB2YWx1ZT17cXVlcnl9IG9uSW5wdXQ9e2UgPT4gc2V0UXVlcnkoZS52YWx1ZSl9IHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlclRleHR9PlxuICAgICAgPEZsZXggc2xvdD1cImxlZnQtaWNvblwiIGFsaWduPSdjZW50ZXInPlxuICAgICAgICA8RW5naW5lUGlja2VyIC8+XG4gICAgICA8L0ZsZXg+XG4gICAgICA8U2VhcmNoSWNvbkNvbnRhaW5lciBzbG90PVwicmlnaHQtaWNvblwiPlxuICAgICAgICA8SWNvbiBuYW1lPVwic2VhcmNoXCIgLz5cbiAgICAgIDwvU2VhcmNoSWNvbkNvbnRhaW5lcj5cbiAgICA8L1NlYXJjaElucHV0PlxuICA8L0NvbnRhaW5lcj5cbn1cbiIsIi8vIENvcHlyaWdodCAoYykgMjAyNCBUaGUgQnJhdmUgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbi8vIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXMgZmlsZSxcbi8vIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwczovL21vemlsbGEub3JnL01QTC8yLjAvLlxuaW1wb3J0IEZsZXggZnJvbSAnJHdlYi1jb21tb24vRmxleCc7XG5pbXBvcnQgeyBnZXRMb2NhbGUgfSBmcm9tICckd2ViLWNvbW1vbi9sb2NhbGUnO1xuaW1wb3J0IEljb24gZnJvbSAnQGJyYXZlL2xlby9yZWFjdC9pY29uJztcbmltcG9ydCB7IGNvbG9yLCBmb250LCBncmFkaWVudCwgaWNvbiwgcmFkaXVzLCBzcGFjaW5nIH0gZnJvbSAnQGJyYXZlL2xlby90b2tlbnMvY3NzL3ZhcmlhYmxlcyc7XG5pbXBvcnQgeyBBdXRvY29tcGxldGVNYXRjaCB9IGZyb20gJ2Nocm9tZTovL3Jlc291cmNlcy9tb2pvL2NvbXBvbmVudHMvb21uaWJveC9icm93c2VyL3NlYXJjaGJveC5tb2pvbS13ZWJ1aS5qcyc7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IE1heWJlSW1hZ2UgfSBmcm9tICcuL1NlYXJjaEVuZ2luZUljb24nO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBtYXRjaDogQXV0b2NvbXBsZXRlTWF0Y2hcbiAgb25DbGljazogKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHZvaWRcbiAgc2VsZWN0ZWQ6IGJvb2xlYW5cbn1cblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmFgXG4gIHBhZGRpbmc6ICR7c3BhY2luZy5zfSAke3NwYWNpbmcubX07XG4gIGJvcmRlci1yYWRpdXM6ICR7cmFkaXVzLm19O1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogJHtzcGFjaW5nLmx9O1xuXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblxuICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICZbYXJpYS1zZWxlY3RlZD10cnVlXSwgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogY29sb3ItbWl4KGluIHNyZ2IsICR7Y29sb3IudGV4dC5wcmltYXJ5fSAxMCUsIHRyYW5zcGFyZW50IDkwJSk7XG4gIH1cbmBcblxuY29uc3QgSWNvbkNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGJvcmRlci1yYWRpdXM6ICR7cmFkaXVzLm19O1xuICB3aWR0aDogMzJweDtcbiAgaGVpZ2h0OiAzMnB4O1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gIGZsZXgtc2hyaW5rOiAwO1xuXG4gID4gKiB7IGJvcmRlci1yYWRpdXM6ICR7cmFkaXVzLnN9OyB9XG5cbiAgPiBzcGFuIHtcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gIH1cblxuICA+IGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG5gXG5cbmNvbnN0IFNlYXJjaEljb24gPSBzdHlsZWQuc3Bhbjx7IHVybDogc3RyaW5nIH0+YFxuICBiYWNrZ3JvdW5kOiBjb2xvci1taXgoaW4gc3JnYiwgJHtjb2xvci5pY29uLmRlZmF1bHR9IDUwJSwgdHJhbnNwYXJlbnQgNTAlKTtcbiAgbWFzay1pbWFnZTogdXJsKCR7cCA9PiBwLnVybH0pO1xuICBtYXNrLXNpemU6IGNvbnRhaW47XG5gXG5cbmNvbnN0IEZhdkljb24gPSBzdHlsZWQuc3Bhbjx7IHVybDogc3RyaW5nIH0+YFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtwID0+IHAudXJsfSk7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbmBcblxuY29uc3QgQ29udGVudCA9IHN0eWxlZC5zcGFuYFxuICBmb250OiAke2ZvbnQubGFyZ2UucmVndWxhcn07XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBjb2xvcjogJHtjb2xvci50ZXh0LnByaW1hcnl9O1xuYFxuXG5jb25zdCBEZXNjcmlwdGlvbiA9IHN0eWxlZC5zcGFuYFxuICBmb250OiAke2ZvbnQuc21hbGwucmVndWxhcn07XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICBjb2xvcjogJHtjb2xvci50ZXh0LnNlY29uZGFyeX07XG5gXG5cbmNvbnN0IExlb0ljb24gPSBzdHlsZWQoSWNvbilgXG4gIC0tbGVvLWljb24tc2l6ZTogJHtpY29uLmx9O1xuXG4gIGNvbG9yOiAke2NvbG9yLndoaXRlfTtcbiAgYmFja2dyb3VuZDogJHtncmFkaWVudC5pY29uc0FjdGl2ZX07XG4gIGJvcmRlci1yYWRpdXM6ICR7cmFkaXVzLm19O1xuICBwYWRkaW5nOiAke3NwYWNpbmcuc307XG5gXG5cbmNvbnN0IERpdmlkZXIgPSBzdHlsZWQuaHJgXG4gIG1hcmdpbjogMnB4IC04cHg7XG4gIG9wYWNpdHk6IDAuMTtcbmBcblxuZnVuY3Rpb24gSW1hZ2UoeyBtYXRjaCwgaXNBc2tMZW8gfTogeyBtYXRjaDogQXV0b2NvbXBsZXRlTWF0Y2gsIGlzQXNrTGVvOiBib29sZWFuIH0pIHtcbiAgLy8gQXNrTGVvIGlzIGEgY2FzZSB3ZSB0cmVhdCBzcGVjaWFsbHkuIEl0J3MgaW5jbHVkZWQgb24gbW9zdCBxdWVyaWVzLlxuICBpZiAoaXNBc2tMZW8pIHJldHVybiA8TGVvSWNvbiBuYW1lPSdwcm9kdWN0LWJyYXZlLWxlbycgLz5cblxuICAvLyBXZSBoYXZlIHRocmVlIHNlcGFyYXRlIGNhc2VzIGhlcmU6XG4gIC8vIDEuIEEgY2hyb21pdW0gZ2VuZXJpYyBzZWFyY2ggcmVzdWx0IGljb246XG4gIC8vICAgIFdlIGRpc3BsYXkgdGhlIGljb24gYXMgYSBtYXNrLWltYWdlLCBzbyB3ZSBjYW4gY2hhbmdlIHRoZSBjb2xvclxuICAvLyAyLiBBIGBzdWdnZXN0VGVtcGxhdGVgIGltYWdlIFVSTCB3aXRoIHRoZSBjaHJvbWU6Ly8gc2NoZW1lLCB3aGljaCB3ZSBjYW4gbG9hZCBvbiB0aGUgTlRQOlxuICAvLyAgICBXZSBkaXNwbGF5IHRoZSBpbWFnZSBhcyBhIGJhY2tncm91bmQsIGFzIGl0cyBzYWZlIG9uIHRoZSBOVFBcbiAgLy8gMy4gQSB3ZWIgcmVzb3VyY2UsIHdoaWNoIHdlIG5lZWQgdG8gbG9hZCBmcm9tIHRoZSBXZWJVSSB2aWEgdGhlIHVucGFkZGVkXG4gIC8vICAgIHVybCBtYWNoaW5lcnkuXG4gIGNvbnN0IGltYWdlVXJsID0gbWF0Y2guc3VnZ2VzdFRlbXBsYXRlLmltYWdlPy51cmxcbiAgcmV0dXJuICFpbWFnZVVybFxuICAgID8gPFNlYXJjaEljb24gdXJsPXttYXRjaC5pY29uVXJsfSAvPlxuICAgIDogaW1hZ2VVcmwuc3RhcnRzV2l0aCgnY2hyb21lJylcbiAgICAgID8gPEZhdkljb24gdXJsPXtpbWFnZVVybH0gLz5cbiAgICAgIDogPE1heWJlSW1hZ2Ugc3JjPXtpbWFnZVVybH0gLz5cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VhcmNoUmVzdWx0KHsgbWF0Y2gsIHNlbGVjdGVkLCBvbkNsaWNrIH06IFByb3BzKSB7XG4gIGNvbnN0IGNvbnRlbnRzID0gbWF0Y2guc3VnZ2VzdFRlbXBsYXRlLnByaW1hcnlUZXh0LnRleHRcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBtYXRjaC5zdWdnZXN0VGVtcGxhdGUuc2Vjb25kYXJ5VGV4dD8udGV4dFxuICBjb25zdCBpc0Fza0xlbyA9IGRlc2NyaXB0aW9uID09PSBnZXRMb2NhbGUoJ3NlYXJjaEFza0xlbycpXG5cbiAgY29uc3QgcmVzdWx0ID0gPENvbnRhaW5lciBocmVmPXttYXRjaC5kZXN0aW5hdGlvblVybH0gYXJpYS1zZWxlY3RlZD17c2VsZWN0ZWR9IG9uQ2xpY2s9e2UgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIG9uQ2xpY2soZSlcbiAgfX0+XG4gICAgPEljb25Db250YWluZXI+XG4gICAgICA8SW1hZ2Uga2V5PXttYXRjaC5zdWdnZXN0VGVtcGxhdGUuaW1hZ2U/LnVybCA/PyBtYXRjaC5pY29uVXJsfSBtYXRjaD17bWF0Y2h9IGlzQXNrTGVvPXtpc0Fza0xlb30gLz5cbiAgICA8L0ljb25Db250YWluZXI+XG4gICAgPEZsZXggZGlyZWN0aW9uPSdjb2x1bW4nPlxuICAgICAgPENvbnRlbnQ+e2NvbnRlbnRzfTwvQ29udGVudD5cbiAgICAgIHtkZXNjcmlwdGlvbiAmJiA8RGVzY3JpcHRpb24+e2Rlc2NyaXB0aW9ufTwvRGVzY3JpcHRpb24+fVxuICAgIDwvRmxleD5cbiAgPC9Db250YWluZXI+XG5cbiAgcmV0dXJuIGlzQXNrTGVvXG4gICAgPyA8PlxuICAgICAgPERpdmlkZXIgLz5cbiAgICAgIHtyZXN1bHR9XG4gICAgPC8+XG4gICAgOiByZXN1bHRcbn1cbiIsIi8vIENvcHlyaWdodCAoYykgMjAyNCBUaGUgQnJhdmUgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbi8vIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXMgZmlsZSxcbi8vIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwczovL21vemlsbGEub3JnL01QTC8yLjAvLlxuXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BicmF2ZS9sZW8vcmVhY3QvYnV0dG9uJztcbmltcG9ydCB7IHVzZU5ld1RhYlByZWYgfSBmcm9tICcuLi8uLi9ob29rcy91c2VQcmVmJztcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgdXNlU2VhcmNoQ29udGV4dCB9IGZyb20gJy4vU2VhcmNoQ29udGV4dCc7XG5pbXBvcnQgeyBjb2xvciwgZm9udCwgc3BhY2luZyB9IGZyb20gJ0BicmF2ZS9sZW8vdG9rZW5zL2Nzcy92YXJpYWJsZXMnO1xuaW1wb3J0IHsgZ2V0TG9jYWxlIH0gZnJvbSAnJHdlYi1jb21tb24vbG9jYWxlJztcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgICBiYWNrZ3JvdW5kOiBjb2xvci1taXgoaW4gc3JnYiwgJHtjb2xvci5jb250YWluZXIuYmFja2dyb3VuZH0gMTAlLCB0cmFuc3BhcmVudCA5MCUpO1xuICAgIGNvbG9yOiBjb2xvci1taXgoaW4gc3JnYiwgJHtjb2xvci50ZXh0LnByaW1hcnl9IDcwJSwgdHJhbnNwYXJlbnQgMzAlKTtcblxuICAgIHBhZGRpbmc6ICR7c3BhY2luZ1snMlhsJ119O1xuICAgIG1hcmdpbjogLThweCAtOHB4IDRweCAtOHB4O1xuXG4gICAgZ2FwOiAke3NwYWNpbmcubH07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgdGV4dC13cmFwOiB3cmFwO1xuYFxuXG5jb25zdCBUaXRsZSA9IHN0eWxlZC5zcGFuYFxuICAgIGNvbG9yOiAke2NvbG9yLnRleHQucHJpbWFyeX07XG4gICAgZm9udDogJHtmb250LmRlZmF1bHQuc2VtaWJvbGR9O1xuYFxuXG5jb25zdCBFeHBsYW5hdGlvbiA9IHN0eWxlZC5zcGFuYFxuICAgIGZvbnQ6ICR7Zm9udC5zbWFsbC5yZWd1bGFyfTtcbmBcblxuY29uc3QgQWN0aW9ucyA9IHN0eWxlZC5kaXZgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6ICR7c3BhY2luZy5zfTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICAgIFxuICAgIHRleHQtd3JhcDogbm93cmFwO1xuXG4gICAgPiBsZW8tYnV0dG9uIHtcbiAgICAgICAgZmxleDogMDtcbiAgICB9XG5gXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1heWJlUHJvbXB0RW5hYmxlU3VnZ2VzdGlvbnMoKSB7XG4gICAgY29uc3QgW3Nob3dQcm9tcHQsIHNldFNob3dQcm9tcHRdID0gdXNlTmV3VGFiUHJlZigncHJvbXB0RW5hYmxlU2VhcmNoU3VnZ2VzdGlvbnMnKVxuICAgIGNvbnN0IFtzdWdnZXN0aW9uc0VuYWJsZWQsIHNldFN1Z2dlc3Rpb25zRW5hYmxlZF0gPSB1c2VOZXdUYWJQcmVmKCdzZWFyY2hTdWdnZXN0aW9uc0VuYWJsZWQnKVxuICAgIGNvbnN0IHsgcXVlcnksIHNldFF1ZXJ5IH0gPSB1c2VTZWFyY2hDb250ZXh0KClcbiAgICBpZiAoIXNob3dQcm9tcHQgfHwgc3VnZ2VzdGlvbnNFbmFibGVkKSByZXR1cm4gbnVsbFxuICAgIHJldHVybiA8Q29udGFpbmVyPlxuICAgICAgICA8VGl0bGU+e2dldExvY2FsZSgnc2VhcmNoRW5hYmxlU3VnZ2VzdGlvbnNQcm9tcHRUaXRsZScpfTwvVGl0bGU+XG4gICAgICAgIDxFeHBsYW5hdGlvbj5cbiAgICAgICAgICAgIHtnZXRMb2NhbGUoJ3NlYXJjaEVuYWJsZVN1Z2dlc3Rpb25zUHJvbXB0RXhwbGFuYXRpb24nKX1cbiAgICAgICAgPC9FeHBsYW5hdGlvbj5cbiAgICAgICAgPEFjdGlvbnM+XG4gICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRTaG93UHJvbXB0KGZhbHNlKVxuICAgICAgICAgICAgICAgIHNldFN1Z2dlc3Rpb25zRW5hYmxlZCh0cnVlKVxuXG4gICAgICAgICAgICAgICAgLy8gUmVzZXQgdGhlIHF1ZXJ5IHNvIHdlIGdldCBzdWdnZXN0aW9uc1xuICAgICAgICAgICAgICAgIHNldFF1ZXJ5KCcnKVxuICAgICAgICAgICAgICAgIHNldFF1ZXJ5KHF1ZXJ5KVxuICAgICAgICAgICAgfX0+e2dldExvY2FsZSgnc2VhcmNoRW5hYmxlU3VnZ2VzdGlvbnNQcm9tcHRFbmFibGUnKX08L0J1dHRvbj5cbiAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gc2V0U2hvd1Byb21wdChmYWxzZSl9IGtpbmQ9J3BsYWluLWZhaW50Jz5cbiAgICAgICAgICAgICAgICB7Z2V0TG9jYWxlKCdzZWFyY2hFbmFibGVTdWdnZXN0aW9uc1Byb21wdERpc21pc3MnKX1cbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L0FjdGlvbnM+XG4gICAgPC9Db250YWluZXI+XG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjQgVGhlIEJyYXZlIEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4vLyBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIGZpbGUsXG4vLyBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cHM6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy5cbmltcG9ydCB7IGNvbG9yLCByYWRpdXMsIHNwYWNpbmcgfSBmcm9tICdAYnJhdmUvbGVvL3Rva2Vucy9jc3MvdmFyaWFibGVzJ1xuaW1wb3J0IHsgQXV0b2NvbXBsZXRlTWF0Y2gsIEF1dG9jb21wbGV0ZVJlc3VsdCwgT21uaWJveFBvcHVwU2VsZWN0aW9uIH0gZnJvbSAnY2hyb21lOi8vcmVzb3VyY2VzL21vam8vY29tcG9uZW50cy9vbW5pYm94L2Jyb3dzZXIvc2VhcmNoYm94Lm1vam9tLXdlYnVpLmpzJ1xuaW1wb3J0IHR5cGUgeyBGb3JtYXR0ZWRTdHJpbmcgfSBmcm9tICdjaHJvbWU6Ly9yZXNvdXJjZXMvbW9qby9jb21wb25lbnRzL29tbmlib3gvYnJvd3Nlci9zdWdnZXN0X3RlbXBsYXRlX2luZm8ubW9qb20td2VidWkuanMnXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgU2VhcmNoUmVzdWx0IGZyb20gJy4vU2VhcmNoUmVzdWx0J1xuaW1wb3J0IGdldE5UUEJyb3dzZXJBUEksIHsgU2VhcmNoRW5naW5lSW5mbyB9IGZyb20gJy4uLy4uL2FwaS9iYWNrZ3JvdW5kJ1xuaW1wb3J0IHsgb21uaWJveENvbnRyb2xsZXIsIHNlYXJjaCwgdXNlU2VhcmNoQ29udGV4dCB9IGZyb20gJy4vU2VhcmNoQ29udGV4dCdcbmltcG9ydCB7IGRlZmF1bHRTZWFyY2hIb3N0IH0gZnJvbSAnLi9jb25maWcnXG5pbXBvcnQgeyBoYW5kbGVPcGVuVVJMQ2xpY2ssIHZhbGlkYXRlU2NoZW1lIH0gZnJvbSAnJHdlYi1jb21tb24vU2VjdXJlTGluayc7XG5pbXBvcnQgTWF5YmVQcm9tcHRFbmFibGVTdWdnZXN0aW9ucyBmcm9tICcuL01heWJlUHJvbXB0RW5hYmxlU3VnZ2VzdGlvbnMnO1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBib3JkZXItdG9wOiAxcHggc29saWQgJHtjb2xvci5jb250YWluZXIuYmFja2dyb3VuZH07XG5cbiAgYmFja2dyb3VuZDogJHtjb2xvci5jb250YWluZXIuYmFja2dyb3VuZH07XG5cbiAgY29sb3I6ICR7Y29sb3Iud2hpdGV9O1xuXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICR7cmFkaXVzLm19O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogJHtyYWRpdXMubX07XG5cbiAgcGFkZGluZzogJHtzcGFjaW5nLm19O1xuICBnYXA6ICR7c3BhY2luZy5zfTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICB3aWR0aDogNTQwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtd3JhcDogbm93cmFwO1xuYFxuXG4vLyBIYW5kbGVzIG9wZW5pbmcgYW4gYXV0b2NvbXBsZXRlIG1hdGNoLCB3aGljaCBtYXkgb3IgbWF5IG5vdCBiZSBwYXJ0IG9mIGFuXG4vLyBhdXRvY29tcGxldGUgcmVzdWx0LlxuY29uc3Qgb3Blbk1hdGNoID0gKHJlc3VsdFNlcXVlbmNlSWQ6IG51bWJlciwgbWF0Y2g6IEF1dG9jb21wbGV0ZU1hdGNoLCBsaW5lOiBudW1iZXIsIGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50IHwgS2V5Ym9hcmRFdmVudCwgc2VhcmNoRW5naW5lPzogU2VhcmNoRW5naW5lSW5mbykgPT4ge1xuICBpZiAobGluZSA9PT0gLTEpIHtcbiAgICBoYW5kbGVPcGVuVVJMQ2xpY2sobWF0Y2guZGVzdGluYXRpb25VcmwsIGV2ZW50KVxuICAgIHJldHVyblxuICB9XG5cbiAgY29uc3QgYnV0dG9uID0gJ2J1dHRvbicgaW4gZXZlbnQgPyBldmVudC5idXR0b24gOiAwXG4gIGlmIChzZWFyY2hFbmdpbmUpIHtcbiAgICBnZXROVFBCcm93c2VyQVBJKCkubmV3VGFiTWV0cmljcy5yZXBvcnROVFBTZWFyY2hVc2FnZShzZWFyY2hFbmdpbmUucHJlcG9wdWxhdGVJZClcbiAgfVxuICBvbW5pYm94Q29udHJvbGxlci5vcGVuQXV0b2NvbXBsZXRlTWF0Y2gocmVzdWx0U2VxdWVuY2VJZCwgbGluZSwgbWF0Y2guZGVzdGluYXRpb25VcmwsIHRydWUsIGJ1dHRvbiwge1xuICAgIGFsdEtleTogZXZlbnQuYWx0S2V5LFxuICAgIGN0cmxLZXk6IGV2ZW50LmN0cmxLZXksXG4gICAgbWV0YUtleTogZXZlbnQubWV0YUtleSxcbiAgICBzaGlmdEtleTogZXZlbnQuc2hpZnRLZXksXG4gIH0sIGV2ZW50IGluc3RhbmNlb2YgS2V5Ym9hcmRFdmVudClcbn1cblxuY29uc3QgdXNlVXJsV2hhdFlvdVR5cGVkID0gKHF1ZXJ5OiBzdHJpbmcpID0+IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICB0cnkge1xuICAgIC8vIFRoZXJlIHNob3VsZCBiZSBhdCBsZWFzdCBvbmUgYC5gIHRvIGJlIGEgVVJMIGFuZCBubyBzcGFjZXMuXG4gICAgY29uc3QgYml0cyA9IHF1ZXJ5LnNwbGl0KCcuJylcbiAgICBpZiAoYml0cy5sZW5ndGggPD0gMSB8fCBiaXRzLnNvbWUoYiA9PiAhYikgfHwgcXVlcnkuaW5jbHVkZXMoJyAnKSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLy8gRm9yY2UgYSBzY2hlbWUgdG8gYmUgaW5jbHVkZWQgLSB3ZSB2YWxpZGF0ZSB3aGV0aGVyIHRoZSBzY2hlbWUgaXNcbiAgICAvLyBhbGxvd2VkIGxhdGVyLlxuICAgIGNvbnN0IHEgPSBxdWVyeS5pbmNsdWRlcygnOi8vJykgPyBxdWVyeSA6ICdodHRwczovLycgKyBxdWVyeVxuICAgIGNvbnN0IHVybCA9IG5ldyBVUkwocSlcblxuICAgIHZhbGlkYXRlU2NoZW1lKHVybC50b1N0cmluZygpKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGRlc3RpbmF0aW9uVXJsOiB1cmwudG9TdHJpbmcoKSxcbiAgICAgIHN1Z2dlc3RUZW1wbGF0ZToge1xuICAgICAgICBwcmltYXJ5VGV4dDogeyB0ZXh0OiB1cmwudG9TdHJpbmcoKSwgZnJhZ21lbnRzOiBbXSwgYTExeVRleHQ6IG51bGwgfSBhcyBGb3JtYXR0ZWRTdHJpbmcsXG4gICAgICAgIHNlY29uZGFyeVRleHQ6IHsgdGV4dDogJycsIGZyYWdtZW50czogW10sIGExMXlUZXh0OiBudWxsIH0gYXMgRm9ybWF0dGVkU3RyaW5nLFxuICAgICAgICBpbWFnZToge1xuICAgICAgICAgIHVybDogYGNocm9tZTovL2Zhdmljb24vc2l6ZS82NEAxeC8ke3EudG9TdHJpbmcoKX1gLFxuICAgICAgICAgIGRvbWluYW50Q29sb3I6ICcnXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBhbGxvd2VkVG9CZURlZmF1bHRNYXRjaDogdHJ1ZVxuICAgIH0gYXMgQXV0b2NvbXBsZXRlTWF0Y2hcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxufSwgW3F1ZXJ5XSlcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VhcmNoUmVzdWx0cygpIHtcbiAgY29uc3QgeyBxdWVyeSwgc2VhcmNoRW5naW5lIH0gPSB1c2VTZWFyY2hDb250ZXh0KClcbiAgY29uc3QgW3Jlc3VsdCwgc2V0UmVzdWx0XSA9IFJlYWN0LnVzZVN0YXRlPEF1dG9jb21wbGV0ZVJlc3VsdD4oKVxuXG4gIC8vIEFuIG9wdGlvbmFsIHJlc3VsdCB3aGVuIGEgVVJMIGlzIGVudGVyZWQuXG4gIGNvbnN0IHVybFdoYXRZb3VUeXBlZCA9IHVzZVVybFdoYXRZb3VUeXBlZChxdWVyeSlcblxuICAvLyBGaWx0ZXIgb3V0IGVtcHR5IHJlc3VsdHMgKGZyb20gdXJsV2hhdFlvdVR5cGVkKSBhbmQgdGhlXG4gIC8vICdzZWFyY2gtd2hhdC15b3UtdHlwZWQnLCB3aGljaCBhbHdheXMgZnJvbSBmcm9tIHRoZSBkZWZhdWx0IHNlYXJjaCBlbmdpbmUuXG5cbiAgY29uc3QgbWF0Y2hlcyA9IFJlYWN0LnVzZU1lbW8oKCkgPT4gW3VybFdoYXRZb3VUeXBlZCEsIC4uLihyZXN1bHQ/Lm1hdGNoZXMgPz8gW10pXVxuICAgIC5maWx0ZXIociA9PiByICYmIHIudHlwZSAhPT0gJ3NlYXJjaC13aGF0LXlvdS10eXBlZCcpLCBbdXJsV2hhdFlvdVR5cGVkLCByZXN1bHRdKVxuICBjb25zdCBbc2VsZWN0ZWRNYXRjaCwgc2V0U2VsZWN0ZWRNYXRjaF0gPSBSZWFjdC51c2VTdGF0ZTxudW1iZXI+KCk7XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZWFyY2guYWRkUmVzdWx0TGlzdGVuZXIoc2V0UmVzdWx0KVxuICAgIHJldHVybiAoKSA9PiBzZWFyY2gucmVtb3ZlUmVzdWx0TGlzdGVuZXIoc2V0UmVzdWx0KVxuICB9LCBbXSlcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFNlbGVjdGVkTWF0Y2gocHJldiA9PiB7XG4gICAgICBpZiAoIW1hdGNoZXMubGVuZ3RoKSByZXR1cm4gdW5kZWZpbmVkXG5cbiAgICAgIGlmICghcHJldikge1xuICAgICAgICBjb25zdCBkZWZhdWx0TWF0Y2hJbmRleCA9IG1hdGNoZXMuZmluZEluZGV4KHIgPT4gci5hbGxvd2VkVG9CZURlZmF1bHRNYXRjaClcbiAgICAgICAgaWYgKGRlZmF1bHRNYXRjaEluZGV4ICE9PSAtMSkgcmV0dXJuIGRlZmF1bHRNYXRjaEluZGV4XG5cbiAgICAgICAgLy8gRmFsbCBiYWNrIHRvIHNldHRpbmcgdGhlIGZpcnN0IGl0ZW0gYXMgdGhlIHNlbGVjdGVkIG1hdGNoLlxuICAgICAgICByZXR1cm4gMFxuICAgICAgfVxuXG4gICAgICBpZiAocHJldiA+PSBtYXRjaGVzLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gbWF0Y2hlcy5sZW5ndGggLSAxXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2XG4gICAgfSlcbiAgfSwgW21hdGNoZXNdKVxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgbGlzdGVuZXIgPSAoc2VsZWN0aW9uOiBPbW5pYm94UG9wdXBTZWxlY3Rpb24pID0+IHNldFNlbGVjdGVkTWF0Y2goc2VsZWN0aW9uLmxpbmUpXG4gICAgc2VhcmNoLmFkZFNlbGVjdGlvbkxpc3RlbmVyKGxpc3RlbmVyKVxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBzZWFyY2gucmVtb3ZlU2VsZWN0aW9uTGlzdGVuZXIobGlzdGVuZXIpXG4gICAgfVxuICB9LCBbXSlcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGtleUhhbmRsZXIgPSAoZTogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgICAgY29uc3QgaGFuZGxlZEtleXMgPSBbJ0Fycm93VXAnLCAnQXJyb3dEb3duJ11cbiAgICAgIGlmICghaGFuZGxlZEtleXMuaW5jbHVkZXMoZS5rZXkpKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcblxuICAgICAgY29uc3QgZGlyZWN0aW9uID0gZS5rZXkgPT09ICdBcnJvd1VwJyA/IC0xIDogMVxuICAgICAgc2V0U2VsZWN0ZWRNYXRjaChzID0+IHtcbiAgICAgICAgaWYgKG1hdGNoZXMubGVuZ3RoID09PSAwKSByZXR1cm4gdW5kZWZpbmVkXG5cbiAgICAgICAgY29uc3Qgc3RhcnQgPSBzID8/IC0xXG4gICAgICAgIGNvbnN0IG5leHQgPSBzdGFydCArIGRpcmVjdGlvblxuICAgICAgICBpZiAobmV4dCA8IDApIHJldHVybiAobWF0Y2hlcy5sZW5ndGggLSAxKVxuICAgICAgICBpZiAobmV4dCA+PSBtYXRjaGVzLmxlbmd0aCkgcmV0dXJuIDBcbiAgICAgICAgcmV0dXJuIG5leHRcbiAgICAgIH0pXG4gICAgfVxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBrZXlIYW5kbGVyKVxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywga2V5SGFuZGxlcilcbiAgICB9XG5cbiAgfSwgW3Jlc3VsdF0pXG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBoYW5kbGVyID0gKGU6IEtleWJvYXJkRXZlbnQpID0+IHtcbiAgICAgIGlmIChlLmtleSAhPT0gJ0VudGVyJykgcmV0dXJuXG5cbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxuXG4gICAgICBjb25zdCBtYXRjaCA9IG1hdGNoZXNbc2VsZWN0ZWRNYXRjaCFdXG4gICAgICBpZiAoIW1hdGNoKSB7XG4gICAgICAgIGdldE5UUEJyb3dzZXJBUEkoKS5wYWdlSGFuZGxlci5zZWFyY2hXaGF0WW91VHlwZWQoXG4gICAgICAgICAgc2VhcmNoRW5naW5lPy5ob3N0ID8/IGRlZmF1bHRTZWFyY2hIb3N0LCBxdWVyeSwgZS5hbHRLZXksIGUuY3RybEtleSxcbiAgICAgICAgICBlLm1ldGFLZXksIGUuc2hpZnRLZXkpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIG9wZW5NYXRjaChyZXN1bHQ/LnNlcXVlbmNlSWQgPz8gMCwgbWF0Y2gsIHJlc3VsdD8ubWF0Y2hlcy5pbmRleE9mKG1hdGNoKSA/PyAtMSwgZSwgc2VhcmNoRW5naW5lKVxuICAgIH1cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgaGFuZGxlcilcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGhhbmRsZXIpXG4gICAgfVxuICB9LCBbbWF0Y2hlcywgc2VsZWN0ZWRNYXRjaCwgcXVlcnksIHNlYXJjaEVuZ2luZV0pXG5cbiAgY29uc3Qgb25TZWFyY2hSZXN1bHRDbGljayA9IChtYXRjaDogQXV0b2NvbXBsZXRlTWF0Y2gpID0+IHtcbiAgICBjb25zdCBsaW5lID0gcmVzdWx0Py5tYXRjaGVzLmluZGV4T2YobWF0Y2gpID8/IC0xXG4gICAgcmV0dXJuIChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiBvcGVuTWF0Y2gocmVzdWx0Py5zZXF1ZW5jZUlkID8/IDAsIG1hdGNoLCBsaW5lLCBlLCBzZWFyY2hFbmdpbmUpXG4gIH1cblxuICByZXR1cm4gbWF0Y2hlcy5sZW5ndGggPyA8Q29udGFpbmVyIGNsYXNzTmFtZT0nc2VhcmNoLXJlc3VsdHMnPlxuICAgIDxNYXliZVByb21wdEVuYWJsZVN1Z2dlc3Rpb25zIC8+XG4gICAge21hdGNoZXMubWFwKChyLCBpKSA9PiA8U2VhcmNoUmVzdWx0IGtleT17aX0gc2VsZWN0ZWQ9e2kgPT09IHNlbGVjdGVkTWF0Y2h9IG9uQ2xpY2s9e29uU2VhcmNoUmVzdWx0Q2xpY2socil9IG1hdGNoPXtyfSAvPil9XG4gIDwvQ29udGFpbmVyPiA6IG51bGxcbn1cbiIsIi8vIENvcHlyaWdodCAoYykgMjAyNCBUaGUgQnJhdmUgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbi8vIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXMgZmlsZSxcbi8vIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwczovL21vemlsbGEub3JnL01QTC8yLjAvLlxuaW1wb3J0IHsgY29sb3IgfSBmcm9tICdAYnJhdmUvbGVvL3Rva2Vucy9jc3MvdmFyaWFibGVzJztcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNyZWF0ZVBvcnRhbCB9IGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgc3R5bGVkLCB7IGtleWZyYW1lcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBTZWFyY2hCb3ggZnJvbSAnLi9TZWFyY2hCb3gnO1xuaW1wb3J0IFNlYXJjaFJlc3VsdHMgZnJvbSAnLi9TZWFyY2hSZXN1bHRzJztcbmltcG9ydCB7IHNlYXJjaEJveFJhZGl1cyB9IGZyb20gJy4vY29uZmlnJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgb25DbG9zZTogKCkgPT4gdm9pZFxuICBvZmZzZXRZOiBudW1iZXJcbn1cblxuY29uc3QgZHVyYXRpb24gPSAnMC40cydcbmNvbnN0IGVhc2luZyA9ICdjdWJpYy1iZXppZXIoMC43LCAtMC40LCAwLjQsIDEuNCknXG5cbmNvbnN0IGVudGVyRGlhbG9nID0ga2V5ZnJhbWVzYFxuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoY2FsYyh2YXIoLS1vZmZzZXQteSkgLSB2YXIoLS1tYXJnaW4tdG9wKSkpO1xuICB9XG5cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgfVxuYFxuXG5jb25zdCBleGl0RGlhbG9nID0ga2V5ZnJhbWVzYFxuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIH1cblxuICB0byB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKGNhbGModmFyKC0tb2Zmc2V0LXkpIC0gdmFyKC0tbWFyZ2luLXRvcCkpKTtcbiAgfVxuYFxuXG5jb25zdCBlbnRlckJhY2tkcm9wID0ga2V5ZnJhbWVzYFxuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG5cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbmBcblxuY29uc3QgZXhpdEJhY2tkcm9wID0ga2V5ZnJhbWVzYFxuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbmBcblxuY29uc3QgRGlhbG9nID0gc3R5bGVkLmRpYWxvZzx7IG9mZnNldFk6IG51bWJlciB9PmBcbiAgLS1tYXJnaW4tdG9wOiBjYWxjKDUwdmggLSAyMDlweCk7XG4gIC0tb2Zmc2V0LXk6ICR7cCA9PiBwLm9mZnNldFl9cHg7XG5cbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAke3NlYXJjaEJveFJhZGl1c307XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBtYXJnaW4tdG9wOiB2YXIoLS1tYXJnaW4tdG9wKTtcbiAgcGFkZGluZzogMHB4O1xuXG4gIGFuaW1hdGlvbjogJHtlbnRlckRpYWxvZ30gJHtkdXJhdGlvbn0gJHtlYXNpbmd9O1xuXG4gICY6OmJhY2tkcm9wIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGJhY2tncm91bmQ6ICR7Y29sb3IuZGlhbG9ncy5zY3JpbUJhY2tncm91bmR9O1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpO1xuICAgIGFuaW1hdGlvbjogJHtlbnRlckJhY2tkcm9wfSAke2R1cmF0aW9ufSAke2Vhc2luZ307XG4gIH1cblxuICAmLmNsb3Npbmcge1xuICAgIGFuaW1hdGlvbjogJHtleGl0RGlhbG9nfSAke2R1cmF0aW9ufSAke2Vhc2luZ307XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7IC8qIFJlbWFpbiBpbiBlbmQgc3RhdGUgdW50aWwgcmVtb3ZlZCBmcm9tIERPTSAqL1xuXG4gICAgJjo6YmFja2Ryb3Age1xuICAgICAgYW5pbWF0aW9uOiAke2V4aXRCYWNrZHJvcH0gJHtkdXJhdGlvbn0gJHtlYXNpbmd9O1xuICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7IC8qIFJlbWFpbiBpbiBlbmQgc3RhdGUgdW50aWwgcmVtb3ZlZCBmcm9tIERPTSAqL1xuICAgIH1cbiAgfVxuYFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb21wb25lbnQocHJvcHM6IFByb3BzKSB7XG4gIGNvbnN0IHJlZiA9IFJlYWN0LnVzZVJlZjxIVE1MRGlhbG9nRWxlbWVudD4obnVsbClcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIHJlZi5jdXJyZW50Py5zaG93TW9kYWwoKVxuICB9LCBbXSlcblxuICBjb25zdCBkb0Nsb3NlID0gUmVhY3QudXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGNvbnN0IGVsID0gcmVmLmN1cnJlbnQhXG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uZW5kJywgKCkgPT4gcHJvcHMub25DbG9zZSgpKTtcbiAgICBlbC5jbGFzc0xpc3QuYWRkKCdjbG9zaW5nJyk7XG4gIH0sIFtdKVxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZWwgPSByZWYuY3VycmVudFxuICAgIGlmICghZWwpIHJldHVyblxuXG4gICAgY29uc3QgY2xvc2VIYW5kbGVyID0gKGU6IENsb3NlRXZlbnQpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIH1cblxuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2Nsb3NlJywgY2xvc2VIYW5kbGVyKVxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbG9zZScsIGNsb3NlSGFuZGxlcilcbiAgICB9XG4gIH0sIFtwcm9wcy5vbkNsb3NlXSlcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgKHJlZi5jdXJyZW50Py5xdWVyeVNlbGVjdG9yKCdsZW8taW5wdXQnKSBhcyBIVE1MRWxlbWVudCk/LmZvY3VzKClcbiAgICB9KVxuICB9LCBbXSlcbiAgcmV0dXJuIGNyZWF0ZVBvcnRhbCg8RGlhbG9nIHJlZj17cmVmfSBvZmZzZXRZPXtwcm9wcy5vZmZzZXRZfSBvbkNsaWNrPXtlID0+IHtcbiAgICAvLyBUaGUgZHJvcGRvd24gdXNlcyBwb3NpdGlvbjogZml4ZWQsIHNvIGl0IGlzbid0IGFjdHVhbGx5IGluc2lkZSB0aGUgZGlhbG9nXG4gICAgLy8gYm91bmRzLCBzbyBjaGVjayBpZiB0aGUgbGVvLWlucHV0IGNvbnRhaW5lZCB0aGUgY2xpY2suXG4gICAgY29uc3QgaW5wdXQgPSBlLm5hdGl2ZUV2ZW50LmNvbXBvc2VkUGF0aCgpLmZpbmQodCA9PiAodCBhcyBIVE1MRWxlbWVudCkudGFnTmFtZSA9PT0gJ0xFTy1JTlBVVCcpXG4gICAgaWYgKGlucHV0KSByZXR1cm5cblxuICAgIGNvbnN0IHJlY3QgPSBlLmN1cnJlbnRUYXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICBjb25zdCBjbGlja2VkSW5EaWFsb2cgPSAoXG4gICAgICByZWN0LnRvcCA8PSBlLmNsaWVudFkgJiZcbiAgICAgIGUuY2xpZW50WSA8PSByZWN0LnRvcCArIHJlY3QuaGVpZ2h0ICYmXG4gICAgICByZWN0LmxlZnQgPD0gZS5jbGllbnRYICYmXG4gICAgICBlLmNsaWVudFggPD0gcmVjdC5sZWZ0ICsgcmVjdC53aWR0aFxuICAgICk7XG4gICAgaWYgKCFjbGlja2VkSW5EaWFsb2cpIHtcbiAgICAgIGRvQ2xvc2UoKVxuICAgIH1cbiAgfX1cbiAgb25DYW5jZWw9e2UgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGRvQ2xvc2UoKVxuICB9fT5cbiAgICA8U2VhcmNoQm94IC8+XG4gICAgPFNlYXJjaFJlc3VsdHMgLz5cbiAgPC9EaWFsb2c+LCBkb2N1bWVudC5ib2R5KVxufVxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDI0IFRoZSBCcmF2ZSBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuLy8gTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBmaWxlLFxuLy8gWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHBzOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IHVzZU5ld1RhYlByZWYgfSBmcm9tICcuLi8uLi9ob29rcy91c2VQcmVmJztcbmltcG9ydCBTZWFyY2hCb3ggZnJvbSAnLi9TZWFyY2hCb3gnO1xuaW1wb3J0IHsgU2VhcmNoQ29udGV4dCwgdXNlU2VhcmNoQ29udGV4dCB9IGZyb20gJy4vU2VhcmNoQ29udGV4dCc7XG5pbXBvcnQgU2VhcmNoRGlhbG9nIGZyb20gJy4vU2VhcmNoRGlhbG9nJztcbmltcG9ydCB7IHNlYXJjaEJveFJhZGl1cyB9IGZyb20gJy4vY29uZmlnJztcbmltcG9ydCBCdXR0b24gZnJvbSAnQGJyYXZlL2xlby9yZWFjdC9idXR0b24nO1xuaW1wb3J0IEljb24gZnJvbSAnQGJyYXZlL2xlby9yZWFjdC9pY29uJztcbmltcG9ydCBCdXR0b25NZW51IGZyb20gJ0BicmF2ZS9sZW8vcmVhY3QvYnV0dG9uTWVudSc7XG5pbXBvcnQgeyBjb2xvciwgc3BhY2luZyB9IGZyb20gJ0BicmF2ZS9sZW8vdG9rZW5zL2Nzcy92YXJpYWJsZXMnO1xuaW1wb3J0IHsgZ2V0TG9jYWxlIH0gZnJvbSAnJHdlYi1jb21tb24vbG9jYWxlJztcbmltcG9ydCBnZXROVFBCcm93c2VyQVBJIGZyb20gJy4uLy4uL2FwaS9iYWNrZ3JvdW5kJztcblxuY29uc3QgTWVudUNvbnRhaW5lciA9IHN0eWxlZChCdXR0b25NZW51KS5hdHRycyh7XG4gICdkYXRhLXRoZW1lJzogJ2xpZ2h0J1xufSlgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiBjYWxjKDUwJSAtIDEycHgpO1xuICByaWdodDogLTI4cHg7XG5cbiAgb3BhY2l0eTogMDtcblxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb24tZGVsYXk6IDFzO1xuXG4gICYgPiBsZW8tbWVudS1pdGVtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAke3NwYWNpbmcubX07XG5cbiAgICBwYWRkaW5nOiAke3NwYWNpbmcubX07XG4gIH1cbmBcblxuY29uc3QgTWVudUJ1dHRvbiA9IHN0eWxlZChCdXR0b24pYFxuICBjb2xvcjogJHtjb2xvci5jb250YWluZXIuYmFja2dyb3VuZH07XG5gXG5cbmNvbnN0IFBsYWNlaG9sZGVyQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIFxuICBib3JkZXItcmFkaXVzOiAke3NlYXJjaEJveFJhZGl1c307XG4gIFxuICBib3gtc2hhZG93OiAwcHggNHB4IDRweCAwcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcblxuICBtYXgtd2lkdGg6IGNhbGMoMTAwdncgLSAyNHB4KTtcbiAgXG4gICY6aG92ZXIgJHtNZW51Q29udGFpbmVyfSB7XG4gICAgdHJhbnNpdGlvbi1kZWxheTogMHM7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuYFxuXG5mdW5jdGlvbiBTd2FwcGVyKCkge1xuICBjb25zdCB7IG9wZW4sIHNldE9wZW4gfSA9IHVzZVNlYXJjaENvbnRleHQoKVxuICBjb25zdCBbYm94UG9zLCBzZXRCb3hQb3NdID0gUmVhY3QudXNlU3RhdGUoMClcbiAgY29uc3QgWywgc2V0U2hvd1NlYXJjaEJveF0gPSB1c2VOZXdUYWJQcmVmKCdzaG93U2VhcmNoQm94JylcblxuICByZXR1cm4gPD5cbiAgICB7IW9wZW4gJiYgPFBsYWNlaG9sZGVyQ29udGFpbmVyIG9uQ2xpY2s9e2UgPT4ge1xuICAgICAgLy8gSWYgd2Ugd2VyZSBjbGlja2luZyBhIGJ1dHRvbiBpbnNpZGUgdGhlIFNlYXJjaEJveCwgZG9uJ3Qgb3BlbiB0aGUgYm94LlxuICAgICAgaWYgKGUubmF0aXZlRXZlbnQuY29tcG9zZWRQYXRoKCkuc29tZShlbCA9PiAoZWwgYXMgSFRNTEVsZW1lbnQpLnRhZ05hbWUgPT09ICdMRU8tQlVUVE9OJykpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgc2V0T3Blbih0cnVlKVxuICAgICAgc2V0Qm94UG9zKGUuY3VycmVudFRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS55KVxuICAgIH19PlxuICAgICAgPFNlYXJjaEJveCAvPlxuICAgICAgPGRpdiBkYXRhLXRoZW1lPVwibGlnaHRcIj5cbiAgICAgICAgPE1lbnVDb250YWluZXI+XG4gICAgICAgICAgPE1lbnVCdXR0b24gZmFiIGtpbmQ9J3BsYWluLWZhaW50JyBzbG90PSdhbmNob3ItY29udGVudCc+XG4gICAgICAgICAgICA8SWNvbiBuYW1lPSdtb3JlLXZlcnRpY2FsJyAvPlxuICAgICAgICAgIDwvTWVudUJ1dHRvbj5cbiAgICAgICAgICA8bGVvLW1lbnUtaXRlbSBvbkNsaWNrPXtlID0+IHtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgIHNldFNob3dTZWFyY2hCb3goZmFsc2UpXG4gICAgICAgICAgfX0+XG4gICAgICAgICAgICA8SWNvbiBuYW1lPSdleWUtb2ZmJyAvPiB7Z2V0TG9jYWxlKCdzZWFyY2hIaWRlJyl9XG4gICAgICAgICAgPC9sZW8tbWVudS1pdGVtPlxuICAgICAgICA8L01lbnVDb250YWluZXI+XG4gICAgICA8L2Rpdj5cbiAgICA8L1BsYWNlaG9sZGVyQ29udGFpbmVyPn1cbiAgICB7b3BlbiAmJiA8U2VhcmNoRGlhbG9nIG9mZnNldFk9e2JveFBvc30gb25DbG9zZT17KCkgPT4gc2V0T3BlbihmYWxzZSl9IC8+fVxuICA8Lz5cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VhcmNoUGxhY2Vob2xkZXIoKSB7XG4gIGNvbnN0IFtzaG93U2VhcmNoQm94XSA9IHVzZU5ld1RhYlByZWYoJ3Nob3dTZWFyY2hCb3gnKVxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFzaG93U2VhcmNoQm94KSB7XG4gICAgICBnZXROVFBCcm93c2VyQVBJKCkubmV3VGFiTWV0cmljcy5yZXBvcnROVFBTZWFyY2hEZWZhdWx0RW5naW5lKG51bGwpXG4gICAgfVxuICB9LCBbc2hvd1NlYXJjaEJveF0pO1xuXG4gIGlmICghc2hvd1NlYXJjaEJveCkgcmV0dXJuIG51bGxcbiAgcmV0dXJuIDxTZWFyY2hDb250ZXh0PlxuICAgIDxTd2FwcGVyIC8+XG4gIDwvU2VhcmNoQ29udGV4dD5cbn1cbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMiBUaGUgQnJhdmUgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbi8vIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXMgZmlsZSxcbi8vIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwczovL21vemlsbGEub3JnL01QTC8yLjAvLlxuXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZVByb21pc2U8VD4gKGdldFByb21pc2U6ICgpID0+IFByb21pc2U8VD4sIGRlcHM6IGFueVtdKSB7XG4gICAgY29uc3QgW3Jlc3VsdCwgc2V0UmVzdWx0XSA9IHVzZVN0YXRlPFQgfCB1bmRlZmluZWQ+KClcbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKVxuICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGU8YW55PigpXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcblxuICAgICAgICBzZXRMb2FkaW5nKHRydWUpXG4gICAgICAgIHNldEVycm9yKHVuZGVmaW5lZClcblxuICAgICAgICBnZXRQcm9taXNlKClcbiAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiAhY2FuY2VsbGVkICYmIHNldFJlc3VsdChyZXN1bHQpKVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiAhY2FuY2VsbGVkICYmIHNldEVycm9yKGVycikpXG4gICAgICAgICAgICAuZmluYWxseSgoKSA9PiAhY2FuY2VsbGVkICYmIHNldExvYWRpbmcoZmFsc2UpKVxuXG4gICAgICAgIHJldHVybiAoKSA9PiB7IGNhbmNlbGxlZCA9IHRydWUgfVxuICAgIH0sIGRlcHMpXG5cbiAgICByZXR1cm4ge1xuICAgICAgICByZXN1bHQsXG4gICAgICAgIGxvYWRpbmcsXG4gICAgICAgIGVycm9yXG4gICAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9