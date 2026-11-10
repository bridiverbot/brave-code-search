export const __webpack_esm_id__ = "brave_components_brave_new_tab_ui_containers_newTab_settings_search_tsx";
export const __webpack_esm_ids__ = ["brave_components_brave_new_tab_ui_containers_newTab_settings_search_tsx"];
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

/***/ "../../../brave/components/brave_new_tab_ui/containers/newTab/settings/search.tsx"
/*!***************************************************************************************!*\
  !*** ./components/brave_new_tab_ui/containers/newTab/settings/search.tsx + 3 modules ***!
  \***************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SearchSettings)
});
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external ["//resources/brave/react.bundle.js","React"]
var react_bundle_js_React_ = __webpack_require__("react");
// EXTERNAL MODULE: ./components/common/Flex.tsx
var Flex = __webpack_require__("../../../brave/components/common/Flex.tsx");
// EXTERNAL MODULE: ./node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/react/button.js + 1 modules
var react_button = __webpack_require__("../../../brave/node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/react/button.js");
// EXTERNAL MODULE: ./node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/shared/svelte-react.js
var svelte_react = __webpack_require__("../../../brave/node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/shared/svelte-react.js");
// EXTERNAL MODULE: ./node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/shared/svelte-web.js
var svelte_web = __webpack_require__("../../../brave/node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/shared/svelte-web.js");
// EXTERNAL MODULE: ./node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/shared/651f0baa.js
var _651f0baa = __webpack_require__("../../../brave/node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/shared/651f0baa.js");
// EXTERNAL MODULE: ./node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/shared/icon.js
var icon = __webpack_require__("../../../brave/node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/shared/icon.js");
// EXTERNAL MODULE: ./node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/shared/1909379f.js
var _1909379f = __webpack_require__("../../../brave/node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/shared/1909379f.js");
// EXTERNAL MODULE: ./node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/shared/a5e3e66f.js
var a5e3e66f = __webpack_require__("../../../brave/node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/shared/a5e3e66f.js");
// EXTERNAL MODULE: ./node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/shared/d048de73.js
var d048de73 = __webpack_require__("../../../brave/node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/shared/d048de73.js");
// EXTERNAL MODULE: ./node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/shared/d2b76aea.js
var d2b76aea = __webpack_require__("../../../brave/node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/shared/d2b76aea.js");
// EXTERNAL MODULE: ./node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/shared/14de49c6.js
var _14de49c6 = __webpack_require__("../../../brave/node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/shared/14de49c6.js");
// EXTERNAL MODULE: ./node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/shared/3e818cee.js
var _3e818cee = __webpack_require__("../../../brave/node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/shared/3e818cee.js");
// EXTERNAL MODULE: ./node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/shared/eacb69d0.js
var eacb69d0 = __webpack_require__("../../../brave/node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/shared/eacb69d0.js");
// EXTERNAL MODULE: ./node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/shared/784381d6.js
var _784381d6 = __webpack_require__("../../../brave/node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/shared/784381d6.js");
// EXTERNAL MODULE: ./node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/shared/c8236a4f.js
var c8236a4f = __webpack_require__("../../../brave/node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/shared/c8236a4f.js");
// EXTERNAL MODULE: ./node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/shared/e7ca11c5.js
var e7ca11c5 = __webpack_require__("../../../brave/node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/shared/e7ca11c5.js");
;// ./node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/shared/checkbox.js













/** @import { Batch } from '../../../reactivity/batch.js' */

/**
 * @param {HTMLInputElement} input
 * @param {() => unknown} get
 * @param {(value: unknown) => void} set
 * @returns {void}
 */
function bind_checked(input, get, set = get) {
	(0,_1909379f.n)(input, 'change', (is_reset) => {
		var value = is_reset ? input.defaultChecked : input.checked;
		set(value);
	});

	if (
		// If we are hydrating and the value has since changed,
		// then use the update value from the input instead.
		// If defaultChecked is set, then checked == defaultChecked
		(0,_1909379f.u)(get) == null
	) {
		set(input.checked);
	}

	(0,_1909379f.r)(() => {
		var value = get();
		input.checked = Boolean(value);
	});
}

const sizes = ["small", "normal"];

(0,icon.preloadIcon)("checkbox-checked");
(0,icon.preloadIcon)("checkbox-unchecked");

var root = (0,_651f0baa.f)(`<label><div class="check svelte-pklwkj"><input type="checkbox" class="svelte-pklwkj"/> <div class="check-mark checked svelte-pklwkj"><!></div> <div class="check-mark unchecked svelte-pklwkj"><!></div></div> <!></label>`);

const $$css = {
	hash: 'svelte-pklwkj',
	code: ':host {display:inline-block;}:host .leo-checkbox.svelte-pklwkj {width:100%;}.leo-checkbox.svelte-pklwkj {--focus-border-radius: var(--leo-checkbox-focus-border-radius, 2px);--label-gap: var(--leo-checkbox-label-gap, var(--leo-spacing-m));--flex-direction: var(--leo-checkbox-flex-direction, row);--checked-color: var(\n    --leo-checkbox-checked-color,\n    var(--leo-color-icon-interactive)\n  );--checked-color-hover: var(\n    --leo-checkbox-checked-color-hover,\n    var(--leo-color-primary-70)\n  );--unchecked-color: var(\n    --leo-checkbox-unchecked-color,\n    var(--leo-color-icon-default)\n  );--unchecked-color-hover: var(\n    --leo-checkbox-unchecked-color-hover,\n    var(--leo-color-neutral-70)\n  );--disabled-color: var(\n    --leo-checkbox-disabled-color,\n    var(--leo-color-text-disabled)\n  );--font: var(--leo-checkbox-font, var(--leo-font-default-regular));--motion-duration: var(--leo-duration-s);--motion-easing: var(--leo-easing-out);display:flex;align-items:center;flex-direction:var(--flex-direction);gap:var(--label-gap);font:var(--font);cursor:pointer;-webkit-tap-highlight-color:transparent;}.leo-checkbox.disabled.svelte-pklwkj {cursor:not-allowed;}.leo-checkbox.isChecked.svelte-pklwkj .check:where(.svelte-pklwkj), .leo-checkbox.svelte-pklwkj:has(input:where(.svelte-pklwkj):checked) .check:where(.svelte-pklwkj) {color:var(--checked-color);}.leo-checkbox.isChecked.svelte-pklwkj .check:where(.svelte-pklwkj) .checked:where(.svelte-pklwkj), .leo-checkbox.svelte-pklwkj:has(input:where(.svelte-pklwkj):checked) .check:where(.svelte-pklwkj) .checked:where(.svelte-pklwkj) {opacity:1;transform:scale(1);}.leo-checkbox.isChecked.svelte-pklwkj .check:where(.svelte-pklwkj) .unchecked:where(.svelte-pklwkj), .leo-checkbox.svelte-pklwkj:has(input:where(.svelte-pklwkj):checked) .check:where(.svelte-pklwkj) .unchecked:where(.svelte-pklwkj) {opacity:0;transform:scale(0.85);}.leo-checkbox.disabled.svelte-pklwkj {color:var(--disabled-color);}.normal.svelte-pklwkj {--checkbox-size: var(--leo-checkbox-size, 20px);}.small.svelte-pklwkj {--checkbox-size: var(--leo-checkbox-size, 16px);}.leo-checkbox.svelte-pklwkj input:where(.svelte-pklwkj) {opacity:0;}.leo-checkbox.svelte-pklwkj .check:where(.svelte-pklwkj) {--leo-icon-size: var(--checkbox-size);position:relative;width:var(--checkbox-size);height:var(--checkbox-size);color:var(--unchecked-color);}.leo-checkbox.svelte-pklwkj .check:where(.svelte-pklwkj) div:where(.svelte-pklwkj) {position:absolute;top:0;left:0;bottom:0;right:0;}.leo-checkbox.svelte-pklwkj .check:where(.svelte-pklwkj) .checked:where(.svelte-pklwkj) {opacity:0;transform:scale(0.85);}.leo-checkbox.svelte-pklwkj .check:where(.svelte-pklwkj) .unchecked:where(.svelte-pklwkj) {opacity:1;transform:scale(1);}.leo-checkbox.svelte-pklwkj .check:where(.svelte-pklwkj):has(input:where(.svelte-pklwkj):focus-visible) {box-shadow:0px 0px 0px 1.5px rgba(255, 255, 255, 0.5), 0px 0px 4px 2px #423eee;border-radius:var(--focus-border-radius);}.leo-checkbox.animate.svelte-pklwkj .check:where(.svelte-pklwkj) .check-mark:where(.svelte-pklwkj) {transition:opacity var(--motion-duration) var(--motion-easing), transform var(--motion-duration) var(--motion-easing);}\n@media (prefers-reduced-motion: reduce) {.leo-checkbox.animate.svelte-pklwkj .check:where(.svelte-pklwkj) .check-mark:where(.svelte-pklwkj) {transition:opacity var(--motion-duration) var(--motion-easing);transform:none !important;}\n}.leo-checkbox.disabled.svelte-pklwkj .check:where(.svelte-pklwkj) {color:var(--disabled-color) !important;}\n\n@media (hover: hover) {.leo-checkbox.svelte-pklwkj:hover .check:where(.svelte-pklwkj) {color:var(--unchecked-color-hover);}.leo-checkbox.svelte-pklwkj:hover .check:where(.svelte-pklwkj):has(input:where(.svelte-pklwkj):checked) {color:var(--checked-color-hover);}.leo-checkbox.isChecked.svelte-pklwkj:hover .check:where(.svelte-pklwkj) {color:var(--checked-color-hover);}\n}'
};

function Checkbox($$anchor, $$props) {
	(0,_1909379f.p)($$props, false);
	(0,_651f0baa.a)($$anchor, $$css);

	let checked = (0,_3e818cee.p)($$props, 'checked', 12);
	let isDisabled = (0,_3e818cee.p)($$props, 'isDisabled', 12, false);
	let size = (0,_3e818cee.p)($$props, 'size', 12, "normal");
	let onChange = (0,_3e818cee.p)($$props, 'onChange', 28, () => void 0);
	let animate = (0,_1909379f.m)(false);

	(0,_1909379f.o)(() => {
		const handle = requestAnimationFrame(() => (0,_1909379f.e)(animate, true));

		return () => cancelAnimationFrame(handle);
	});

	var $$exports = {
		get checked() {
			return checked();
		},

		set checked($$value) {
			checked($$value);
			(0,_1909379f.f)();
		},

		get isDisabled() {
			return isDisabled();
		},

		set isDisabled($$value) {
			isDisabled($$value);
			(0,_1909379f.f)();
		},

		get size() {
			return size();
		},

		set size($$value) {
			size($$value);
			(0,_1909379f.f)();
		},

		get onChange() {
			return onChange();
		},

		set onChange($$value) {
			onChange($$value);
			(0,_1909379f.f)();
		}
	};

	(0,_14de49c6.i)();

	var label = root();
	let classes;
	var div = (0,_1909379f.c)(label);
	var input = (0,_1909379f.c)(div);

	var div_1 = (0,_1909379f.s)(input, 2);
	var node = (0,_1909379f.c)(div_1);

	(0,icon["default"])(node, { name: 'checkbox-checked' });

	var div_2 = (0,_1909379f.s)(div_1, 2);
	var node_1 = (0,_1909379f.c)(div_2);

	(0,icon["default"])(node_1, { name: 'checkbox-unchecked' });

	var node_2 = (0,_1909379f.s)(div, 2);

	(0,d048de73.s)(node_2, $$props, 'default', {}, null);

	(0,_1909379f.t)(() => {
		classes = (0,d2b76aea.s)(label, 1, 'leo-checkbox svelte-pklwkj', null, classes, {
			small: size() === 'small',
			normal: size() !== 'small',
			disabled: isDisabled(),
			isChecked: checked(),
			animate: (0,_1909379f.g)(animate)
		});

		input.disabled = isDisabled();
	});

	bind_checked(input, checked);
	(0,a5e3e66f.e)('change', input, (e) => onChange()?.({ checked: e.currentTarget.checked }));
	(0,_651f0baa.b)($$anchor, label);

	return (0,_1909379f.b)($$exports);
}


//# sourceMappingURL=checkbox.js.map

;// ./node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/web-components/checkbox.js


/* harmony default export */ const web_components_checkbox = ((0,svelte_web["default"])(Checkbox, {
    name: 'leo-checkbox',
    mode: 'open'
}));

// Reexport everything from our component, so consumers can do anything the base
// component can do.

;// ./node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/react/checkbox.js


/* harmony default export */ const react_checkbox = ((0,svelte_react["default"])('leo-checkbox', web_components_checkbox));

// Reexport everything from our component, so React consumers can do anything
// the base component can do.

// EXTERNAL MODULE: ./node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/react/icon.js + 1 modules
var react_icon = __webpack_require__("../../../brave/node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/react/icon.js");
// EXTERNAL MODULE: ./node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/react/toggle.js + 2 modules
var toggle = __webpack_require__("../../../brave/node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/react/toggle.js");
// EXTERNAL MODULE: ./node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/tokens/css/variables.js
var variables = __webpack_require__("../../../brave/node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/tokens/css/variables.js");
// EXTERNAL MODULE: ./node_modules/.pnpm/styled-components@6.4.3_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/styled-components/dist/styled-components.esm.js + 7 modules
var styled_components_esm = __webpack_require__("../../../brave/node_modules/.pnpm/styled-components@6.4.3_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/styled-components/dist/styled-components.esm.js");
// EXTERNAL MODULE: ./components/common/usePromise.ts
var usePromise = __webpack_require__("../../../brave/components/common/usePromise.ts");
// EXTERNAL MODULE: ./components/brave_new_tab_ui/components/default/index.ts + 33 modules
var components_default = __webpack_require__("../../../brave/components/brave_new_tab_ui/components/default/index.ts");
// EXTERNAL MODULE: ./components/brave_new_tab_ui/components/search/SearchContext.tsx
var SearchContext = __webpack_require__("../../../brave/components/brave_new_tab_ui/components/search/SearchContext.tsx");
// EXTERNAL MODULE: ./components/brave_new_tab_ui/components/search/SearchEngineIcon.tsx
var SearchEngineIcon = __webpack_require__("../../../brave/components/brave_new_tab_ui/components/search/SearchEngineIcon.tsx");
// EXTERNAL MODULE: ./components/brave_new_tab_ui/hooks/usePref.ts + 1 modules
var usePref = __webpack_require__("../../../brave/components/brave_new_tab_ui/hooks/usePref.ts");
// EXTERNAL MODULE: ./components/common/locale.ts + 1 modules
var locale = __webpack_require__("../../../brave/components/common/locale.ts");
// EXTERNAL MODULE: ./components/brave_new_tab_ui/components/search/config.ts
var config = __webpack_require__("../../../brave/components/brave_new_tab_ui/components/search/config.ts");
// EXTERNAL MODULE: ./components/brave_new_tab_ui/components/search/EngineContext.tsx
var EngineContext = __webpack_require__("../../../brave/components/brave_new_tab_ui/components/search/EngineContext.tsx");
;// ./components/brave_new_tab_ui/containers/newTab/settings/search.tsx
// Copyright (c) 2024 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.

// Components















const EnginesContainer = (0,styled_components_esm["default"])((0,Flex["default"])).withConfig({ displayName: "EnginesContainer", componentId: "sc-7gjqil" }) `
  font: ${variables.font.default.regular};
`;
const EnginesGrid = styled_components_esm["default"].div.withConfig({ displayName: "EnginesGrid", componentId: "sc-93fxxs" }) `
  /* Three rows */
  max-height: 136px;
  overflow-y: auto;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${variables.spacing.m};
`;
const EngineCard = styled_components_esm["default"].div.withConfig({ displayName: "EngineCard", componentId: "sc-rpgdwy" }) `
  border: 1px solid ${variables.color.divider.subtle};
  border-radius: ${variables.radius.s};

  padding: ${variables.spacing.m};

  display: flex;
  gap: ${variables.spacing.m};
`;
const LinkButton = (0,styled_components_esm["default"])((0,react_button["default"])).withConfig({ displayName: "LinkButton", componentId: "sc-293eqp" }) `
  --leo-button-color: ${variables.color.text.secondary};
`;
const EngineCheckbox = (0,styled_components_esm["default"])(react_checkbox).withConfig({ displayName: "EngineCheckbox", componentId: "sc-rewkr1" }) `
  --leo-checkbox-flex-direction: row-reverse;

  width: 100%;
  font: ${variables.font.default.regular};
`;
const Hr = styled_components_esm["default"].hr.withConfig({ displayName: "Hr", componentId: "sc-1twy6p7" }) `
  border-color: ${variables.color.divider.subtle};
  border-bottom: unset;
  margin: 0;
`;
const CheckboxText = styled_components_esm["default"].span.withConfig({ displayName: "CheckboxText", componentId: "sc-1h3s8wx" }) `flex: 1`;
const hasEnabledEngine = (config) => Object.keys(config).some(key => config[key]);
function SearchSettings() {
    const { result: engines = [] } = (0,usePromise["default"])(() => SearchContext.searchEnginesPromise, []);
    const [showSearchBox, setShowSearchBox] = (0,usePref.useNewTabPref)('showSearchBox');
    const { setEngineConfig, engineConfig } = (0,EngineContext.useEngineContext)();
    react_bundle_js_React_.useEffect(() => {
        if (!hasEnabledEngine(engineConfig)) {
            setShowSearchBox(false);
        }
    }, [engineConfig]);
    return react_bundle_js_React_.createElement(Flex["default"], { direction: 'column', gap: variables.spacing.xl },
        react_bundle_js_React_.createElement(components_default.SettingsRow, null,
            react_bundle_js_React_.createElement(components_default.SettingsText, null, (0,locale.getLocale)('searchShowSetting')),
            react_bundle_js_React_.createElement(toggle["default"], { size: 'small', checked: showSearchBox, onChange: e => {
                    setShowSearchBox(e.checked);
                    // If we've just enabled the searchbox, make sure at least one engine
                    // is enabled.
                    if (e.checked && !hasEnabledEngine(engineConfig)) {
                        setEngineConfig(config.defaultSearchHost, true);
                    }
                } })),
        showSearchBox && react_bundle_js_React_.createElement(react_bundle_js_React_.Fragment, null,
            react_bundle_js_React_.createElement(Hr, null),
            react_bundle_js_React_.createElement(EnginesContainer, { direction: 'column', gap: variables.spacing.xl },
                react_bundle_js_React_.createElement("div", null, (0,locale.getLocale)('searchEnableSearchEnginesTitle')),
                react_bundle_js_React_.createElement(EnginesGrid, null, engines.map(engine => react_bundle_js_React_.createElement(EngineCard, { key: engine.keyword },
                    react_bundle_js_React_.createElement(EngineCheckbox, { checked: engineConfig[engine.host], onChange: e => {
                            setEngineConfig(engine.host, e.checked);
                        } },
                        react_bundle_js_React_.createElement(CheckboxText, null, engine.name),
                        react_bundle_js_React_.createElement(SearchEngineIcon.MediumSearchEngineIcon, { engine: engine })))))),
            react_bundle_js_React_.createElement(Hr, null),
            react_bundle_js_React_.createElement("div", null,
                react_bundle_js_React_.createElement(LinkButton, { href: 'chrome://settings/searchEngines', kind: 'plain' },
                    (0,locale.getLocale)('searchCustomizeSearchEngines'),
                    react_bundle_js_React_.createElement("div", { slot: 'icon-after' },
                        react_bundle_js_React_.createElement(react_icon["default"], { name: 'launch' }))),
                react_bundle_js_React_.createElement("span", null))));
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJhdmVfY29tcG9uZW50c19icmF2ZV9uZXdfdGFiX3VpX2NvbnRhaW5lcnNfbmV3VGFiX3NldHRpbmdzX3NlYXJjaF90c3guY2h1bmsuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZEQUE2RDtBQUM3RCxzRUFBc0U7QUFDdEUsNEVBQTRFO0FBQzVFLHNEQUFzRDtBQUVOO0FBQ29RO0FBQ2hNO0FBQ3JGO0FBQzJDO0FBQ3ZCO0FBa0JuRCxNQUFNLE9BQU8sR0FBRyxnREFBbUIsQ0FBVTtJQUMzQyxJQUFJLEVBQUUsS0FBSztJQUNYLE9BQU8sRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0lBQ2xCLEtBQUssRUFBRSxFQUFFO0lBQ1QsUUFBUSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7SUFDbkIsWUFBWSxFQUFFLFNBQVM7SUFDdkIsZUFBZSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7SUFDMUIsYUFBYSxFQUFFLEVBQUU7SUFDakIscUJBQXFCLEVBQUUsRUFBRTtDQUMxQixDQUFDO0FBRUssTUFBTSxvQkFBb0IsR0FBRywyREFBZ0IsRUFBRSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUM7QUFFekcsTUFBTSxpQkFBaUIsR0FBc0IsSUFBSSx3SEFBaUIsRUFBRSxDQUFDO0FBQzNFLE1BQWMsQ0FBQyxPQUFPLEdBQUcsaUJBQWlCLENBQUM7QUFFNUMsNEVBQTRFO0FBQzVFLFdBQVc7QUFDWCxJQUFJLGFBQWEsR0FBRyxDQUFDLENBQUM7QUFFdEIsTUFBTSxVQUFVO0lBTWQ7UUFMUSxhQUFRLEdBQUcsSUFBSSxtSEFBWSxDQUFDLElBQUksQ0FBQztRQUVqQyxvQkFBZSxHQUFpRCxFQUFFO1FBQ2xFLHVCQUFrQixHQUFzRCxFQUFFO1FBR2hGLHlIQUFrQixDQUFDLFNBQVMsRUFBRSxDQUFDLGlCQUFpQixDQUM5QyxJQUFJLENB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QUcsK0NBQVEsQ0FBQyxJQUFJLENBQUM7SUFDNUMsTUFBTSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsR0FBRywrQ0FBUSxFQUFPO0lBRXpDLGdEQUFTLENBQUMsR0FBRyxFQUFFO1FBQ1gsSUFBSSxTQUFTLEdBQUcsS0FBSztRQUVyQixVQUFVLENBQUMsSUFBSSxDQUFDO1FBQ2hCLFFBQVEsQ0FBQyxTQUFTLENBQUM7UUFFbkIsVUFBVSxFQUFFO2FBQ1AsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLElBQUksU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQy9DLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxJQUFJLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUN6QyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxTQUFTLElBQUksVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRW5ELE9BQU8sR0FBRyxFQUFFLEdBQUcsU0FBUyxHQUFHLElBQUksRUFBQyxDQUFDO0lBQ3JDLENBQUMsRUFBRSxJQUFJLENBQUM7SUFFUixPQUFPO1FBQ0gsTUFBTTtRQUNOLE9BQU87UUFDUCxLQUFLO0tBQ1I7QUFDTCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYnJhdmUtY29yZS8uL2NvbXBvbmVudHMvYnJhdmVfbmV3X3RhYl91aS9jb21wb25lbnRzL3NlYXJjaC9TZWFyY2hDb250ZXh0LnRzeCIsIndlYnBhY2s6Ly9icmF2ZS1jb3JlLy4vY29tcG9uZW50cy9icmF2ZV9uZXdfdGFiX3VpL2NvbXBvbmVudHMvc2VhcmNoL1NlYXJjaEVuZ2luZUljb24udHN4Iiwid2VicGFjazovL2JyYXZlLWNvcmUvLi9ub2RlX21vZHVsZXMvLnBucG0vQGJyYXZlK2xlb0BodHRwcysrK2NvZGVsb2FkLmdpdGh1Yi5jb20rYnJhdmUrbGVvK3Rhci5neitjNWY5YzhmNzhmM2RmNWI3NjdhODNhZDY3YmFiZDhiXzBjNjVkZDIyZTJhNzc4MThjMTMxMzc3ZDUzZTJlODQzL25vZGVfbW9kdWxlcy9AYnJhdmUvbGVvL3NoYXJlZC9jaGVja2JveC5qcyIsIndlYnBhY2s6Ly9icmF2ZS1jb3JlLy4vbm9kZV9tb2R1bGVzLy5wbnBtL0BicmF2ZStsZW9AaHR0cHMrKytjb2RlbG9hZC5naXRodWIuY29tK2JyYXZlK2xlbyt0YXIuZ3orYzVmOWM4Zjc4ZjNkZjViNzY3YTgzYWQ2N2JhYmQ4Yl8wYzY1ZGQyMmUyYTc3ODE4YzEzMTM3N2Q1M2UyZTg0My9ub2RlX21vZHVsZXMvQGJyYXZlL2xlby93ZWItY29tcG9uZW50cy9jaGVja2JveC5qcyIsIndlYnBhY2s6Ly9icmF2ZS1jb3JlLy4vbm9kZV9tb2R1bGVzLy5wbnBtL0BicmF2ZStsZW9AaHR0cHMrKytjb2RlbG9hZC5naXRodWIuY29tK2JyYXZlK2xlbyt0YXIuZ3orYzVmOWM4Zjc4ZjNkZjViNzY3YTgzYWQ2N2JhYmQ4Yl8wYzY1ZGQyMmUyYTc3ODE4YzEzMTM3N2Q1M2UyZTg0My9ub2RlX21vZHVsZXMvQGJyYXZlL2xlby9yZWFjdC9jaGVja2JveC5qcyIsIndlYnBhY2s6Ly9icmF2ZS1jb3JlLy4vY29tcG9uZW50cy9icmF2ZV9uZXdfdGFiX3VpL2NvbnRhaW5lcnMvbmV3VGFiL3NldHRpbmdzL3NlYXJjaC50c3giLCJ3ZWJwYWNrOi8vYnJhdmUtY29yZS8uL2NvbXBvbmVudHMvY29tbW9uL3VzZVByb21pc2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDI0IFRoZSBCcmF2ZSBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuLy8gTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBmaWxlLFxuLy8gWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHBzOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uXG5cbmltcG9ydCB1c2VQcm9taXNlIGZyb20gJyR3ZWItY29tbW9uL3VzZVByb21pc2UnO1xuaW1wb3J0IHsgQXV0b2NvbXBsZXRlUmVzdWx0LCBGcmVTdGF0ZSwgSW5wdXRLZXl3b3JkTW9kZWwsIElucHV0TWV0aG9kLCBPbW5pYm94UG9wdXBTZWxlY3Rpb24sIFBhZ2VIYW5kbGVyRmFjdG9yeSwgUGFnZUhhbmRsZXJSZW1vdGUsIFBhZ2VJbnRlcmZhY2UsIFBhZ2VSZWNlaXZlciwgU2VsZWN0ZWRGaWxlSW5mbywgU2VsZWN0aW9uRGlyZWN0aW9uLCBTZWxlY3Rpb25TdGVwLCBUYWJJbmZvIH0gZnJvbSAnY2hyb21lOi8vcmVzb3VyY2VzL21vam8vY29tcG9uZW50cy9vbW5pYm94L2Jyb3dzZXIvc2VhcmNoYm94Lm1vam9tLXdlYnVpLmpzJztcbmltcG9ydCB7IFN1Z2dlc3RJbnZlbnRvcnkgfSBmcm9tICdjaHJvbWU6Ly9yZXNvdXJjZXMvbW9qby9jb21wb25lbnRzL29tbmlib3gvYnJvd3Nlci9mdXNlYm94X2FjdGlvbi5tb2pvbS13ZWJ1aS5qcyc7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZ2V0TlRQQnJvd3NlckFQSSwgeyBTZWFyY2hFbmdpbmVJbmZvIH0gZnJvbSAnLi4vLi4vYXBpL2JhY2tncm91bmQnO1xuaW1wb3J0IHsgdXNlRW5naW5lQ29udGV4dCB9IGZyb20gJy4vRW5naW5lQ29udGV4dCc7XG5pbXBvcnQgeyBDb250ZXh0VXBsb2FkRXJyb3JUeXBlLCBDb250ZXh0VXBsb2FkU3RhdHVzIH0gZnJvbSAnZ2VuL2NvbXBvbmVudHMvb21uaWJveC9jb21wb3NlYm94L2NvbXBvc2Vib3hfcXVlcnkubW9qb20ubSc7XG5pbXBvcnQgeyBJbnB1dFN0YXRlIH0gZnJvbSAnZ2VuL3VpL3dlYnVpL3Jlc291cmNlcy90c2MvbW9qby9jb21wb25lbnRzL29tbmlib3gvY29tcG9zZWJveC9jb21wb3NlYm94X3F1ZXJ5Lm1vam9tLXdlYnVpJztcbmltcG9ydCB7IFdpbmRvd09wZW5EaXNwb3NpdGlvbiB9IGZyb20gJ2dlbi91aS93ZWJ1aS9yZXNvdXJjZXMvdHNjL21vam8vdWkvYmFzZS9tb2pvbS93aW5kb3dfb3Blbl9kaXNwb3NpdGlvbi5tb2pvbS13ZWJ1aSc7XG5pbXBvcnQgeyBTaXplIH0gZnJvbSAnZ2VuL3VpL3dlYnVpL3Jlc291cmNlcy90c2MvbW9qby91aS9nZngvZ2VvbWV0cnkvbW9qb20vZ2VvbWV0cnkubW9qb20td2VidWknO1xuaW1wb3J0IHsgVXJsIH0gZnJvbSAnZ2VuL3VpL3dlYnVpL3Jlc291cmNlcy90c2MvbW9qby91cmwvbW9qb20vdXJsLm1vam9tLXdlYnVpJztcblxuaW50ZXJmYWNlIENvbnRleHQge1xuICBvcGVuOiBib29sZWFuLFxuICBzZXRPcGVuOiAob3BlbjogYm9vbGVhbikgPT4gdm9pZCxcbiAgcXVlcnk6IHN0cmluZyxcbiAgc2V0UXVlcnk6IChxdWVyeTogc3RyaW5nKSA9PiB2b2lkXG4gIHNlYXJjaEVuZ2luZT86IFNlYXJjaEVuZ2luZUluZm8sXG4gIHNldFNlYXJjaEVuZ2luZTogKHNlYXJjaEVuZ2luZTogU2VhcmNoRW5naW5lSW5mbyB8IHN0cmluZykgPT4gdm9pZFxuICBzZWFyY2hFbmdpbmVzOiBTZWFyY2hFbmdpbmVJbmZvW11cbiAgZmlsdGVyZWRTZWFyY2hFbmdpbmVzOiBTZWFyY2hFbmdpbmVJbmZvW11cbn1cblxuY29uc3QgQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQ8Q29udGV4dD4oe1xuICBvcGVuOiBmYWxzZSxcbiAgc2V0T3BlbjogKCkgPT4geyB9LFxuICBxdWVyeTogJycsXG4gIHNldFF1ZXJ5OiAoKSA9PiB7IH0sXG4gIHNlYXJjaEVuZ2luZTogdW5kZWZpbmVkLFxuICBzZXRTZWFyY2hFbmdpbmU6ICgpID0+IHsgfSxcbiAgc2VhcmNoRW5naW5lczogW10sXG4gIGZpbHRlcmVkU2VhcmNoRW5naW5lczogW11cbn0pXG5cbmV4cG9ydCBjb25zdCBzZWFyY2hFbmdpbmVzUHJvbWlzZSA9IGdldE5UUEJyb3dzZXJBUEkoKS5wYWdlSGFuZGxlci5nZXRTZWFyY2hFbmdpbmVzKCkudGhlbihyID0+IHIuc2VhcmNoRW5naW5lcylcblxuZXhwb3J0IGNvbnN0IG9tbmlib3hDb250cm9sbGVyOiBQYWdlSGFuZGxlclJlbW90ZSA9IG5ldyBQYWdlSGFuZGxlclJlbW90ZSgpO1xuKHdpbmRvdyBhcyBhbnkpLm9tbmlib3ggPSBvbW5pYm94Q29udHJvbGxlcjtcblxuLy8gVHJhY2tzIHRoZSBsYXRlc3QgcXVlcnkgc2VudCBmb3IgYXV0b2NvbXBsZXRpb24uIFVzZWQgdG8gZmlsdGVyIG91dCBzdGFsZVxuLy8gcmVzdWx0cy5cbmxldCBhY3RpdmVRdWVyeUlkID0gMDtcblxuY2xhc3MgU2VhcmNoUGFnZSBpbXBsZW1lbnRzIFBhZ2VJbnRlcmZhY2Uge1xuICBwcml2YXRlIHJlY2VpdmVyID0gbmV3IFBhZ2VSZWNlaXZlcih0aGlzKVxuICBwcml2YXRlIHJlc3VsdDogQXV0b2NvbXBsZXRlUmVzdWx0IHwgdW5kZWZpbmVkXG4gIHByaXZhdGUgcmVzdWx0TGlzdGVuZXJzOiBBcnJheTwocmVzdWx0PzogQXV0b2NvbXBsZXRlUmVzdWx0KSA9PiB2b2lkPiA9IFtdXG4gIHByaXZhdGUgc2VsZWN0aW9uTGlzdGVuZXJzOiBBcnJheTwoc2VsZWN0aW9uOiBPbW5pYm94UG9wdXBTZWxlY3Rpb24pID0+IHZvaWQ+ID0gW11cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBQYWdlSGFuZGxlckZhY3RvcnkuZ2V0UmVtb3RlKCkuY3JlYXRlUGFnZUhhbmRsZXIoXG4gICAgICB0aGlzLnJlY2VpdmVyLiQuYmluZE5ld1BpcGVBbmRQYXNzUmVtb3RlKCksXG4gICAgICBvbW5pYm94Q29udHJvbGxlci4kLmJpbmROZXdQaXBlQW5kUGFzc1JlY2VpdmVyKCksXG4gICAgKVxuICB9XG5cbiAgYWRkUmVzdWx0TGlzdGVuZXIobGlzdGVuZXI6IChyZXN1bHQ/OiBBdXRvY29tcGxldGVSZXN1bHQpID0+IHZvaWQpIHtcbiAgICB0aGlzLnJlc3VsdExpc3RlbmVycy5wdXNoKGxpc3RlbmVyKVxuICAgIGlmICh0aGlzLnJlc3VsdCkgbGlzdGVuZXIodGhpcy5yZXN1bHQpXG4gIH1cblxuICByZW1vdmVSZXN1bHRMaXN0ZW5lcihsaXN0ZW5lcjogKHJlc3VsdD86IEF1dG9jb21wbGV0ZVJlc3VsdCkgPT4gdm9pZCkge1xuICAgIHRoaXMucmVzdWx0TGlzdGVuZXJzID0gdGhpcy5yZXN1bHRMaXN0ZW5lcnMuZmlsdGVyKHIgPT4gciAhPT0gbGlzdGVuZXIpXG4gIH1cblxuICBhZGRTZWxlY3Rpb25MaXN0ZW5lcihsaXN0ZW5lcjogKHNlbGVjdGlvbjogT21uaWJveFBvcHVwU2VsZWN0aW9uKSA9PiB2b2lkKSB7XG4gICAgdGhpcy5zZWxlY3Rpb25MaXN0ZW5lcnMucHVzaChsaXN0ZW5lcilcbiAgfVxuXG4gIHJlbW92ZVNlbGVjdGlvbkxpc3RlbmVyKGxpc3RlbmVyOiAoc2VsZWN0aW9uOiBPbW5pYm94UG9wdXBTZWxlY3Rpb24pID0+IHZvaWQpIHtcbiAgICB0aGlzLnNlbGVjdGlvbkxpc3RlbmVycyA9IHRoaXMuc2VsZWN0aW9uTGlzdGVuZXJzLmZpbHRlcihzID0+IHMgIT09IGxpc3RlbmVyKVxuICB9XG5cbiAgYXV0b2NvbXBsZXRlUmVzdWx0Q2hhbmdlZChyZXN1bHQ6IEF1dG9jb21wbGV0ZVJlc3VsdCkge1xuICAgIHRoaXMucmVzdWx0ID0gcmVzdWx0O1xuICAgIGZvciAoY29uc3QgbGlzdGVuZXIgb2YgdGhpcy5yZXN1bHRMaXN0ZW5lcnMpIGxpc3RlbmVyKHJlc3VsdClcbiAgfVxuXG4gIHVwZGF0ZVNlbGVjdGlvbihzZWxlY3Rpb246IE9tbmlib3hQb3B1cFNlbGVjdGlvbikge1xuICAgIGZvciAoY29uc3QgbGlzdGVuZXIgb2YgdGhpcy5zZWxlY3Rpb25MaXN0ZW5lcnMpIGxpc3RlbmVyKHNlbGVjdGlvbilcbiAgfVxuXG4gIG9uU2hvdygpOiB2b2lkIHsgfVxuICBzZXRJbnB1dFRleHQoaW5wdXRUZXh0OiBzdHJpbmcpIHsgfVxuICBzZXRUaHVtYm5haWwodGh1bWJuYWlsVXJsOiBzdHJpbmcpIHsgfVxuICBvbkNvbnRleHR1YWxJbnB1dFN0YXR1c0NoYW5nZWQodG9rZW46IHN0cmluZywgc3RhdHVzOiBDb250ZXh0VXBsb2FkU3RhdHVzLCBlcnJvclR5cGU6IENvbnRleHRVcGxvYWRFcnJvclR5cGUgfCBudWxsKSB7IH1cbiAgc2V0S2V5d29yZFNwYWNlVHJpZ2dlcmluZ0VuYWJsZWQoZW5hYmxlZDogYm9vbGVhbik6IHZvaWQgeyB9XG4gIHNldEF2YWlsYWJsZUtleXdvcmRNb2RlbHMobW9kZWxzOiBJbnB1dEtleXdvcmRNb2RlbFtdKTogdm9pZCB7IH1cbiAgb25UYWJTdHJpcENoYW5nZWQoKSB7IH1cbiAgYWRkRmlsZUNvbnRleHQodG9rZW46IHN0cmluZywgZmlsZUluZm86IFNlbGVjdGVkRmlsZUluZm8pIHsgfVxuICBzZXRLZXl3b3JkU2VsZWN0ZWQoaXNLZXl3b3JkU2VsZWN0ZWQ6IGJvb2xlYW4pOiB2b2lkIHt9XG4gIHVwZGF0ZUF1dG9TdWdnZXN0ZWRUYWJDb250ZXh0KHRhYjogKFRhYkluZm8gfCBudWxsKSk6IHZvaWQge31cbiAgdXBkYXRlTGVuc1NlYXJjaEVsaWdpYmlsaXR5KGVsaWdpYmxlOiBib29sZWFuKTogdm9pZCB7fVxuICB1cGRhdGVDb250ZW50U2hhcmluZ1BvbGljeShlbmFibGVkOiBib29sZWFuKTogdm9pZCB7fVxuICBvbklucHV0U3RhdGVDaGFuZ2VkKGlucHV0U3RhdGU6IElucHV0U3RhdGUpOiB2b2lkIHt9XG4gIHN0ZXBTZWxlY3Rpb24oZGlyZWN0aW9uOiBTZWxlY3Rpb25EaXJlY3Rpb24sIHN0ZXA6IFNlbGVjdGlvblN0ZXApOiB2b2lkIHt9XG4gIG9wZW5DdXJyZW50U2VsZWN0aW9uKGRpc3Bvc2l0aW9uOiBXaW5kb3dPcGVuRGlzcG9zaXRpb24pOiB2b2lkIHt9XG4gIHNldEFpbUJ1dHRvblZpc2libGUodmlzaWJsZTogYm9vbGVhbik6IHZvaWQge31cbiAgdXBkYXRlQWltUG9wdXBFbGlnaWJpbGl0eShlbGlnaWJsZTogYm9vbGVhbik6IHZvaWQge31cbiAgb25QZXJtaXNzaW9uUHJvbXB0Q2hhbmdlZChpc1Nob3dpbmc6IGJvb2xlYW4sIHByb21wdFNpemU6IFNpemUpOiB2b2lkIHt9XG4gIHNldFJlc3RvcmVkVGFiSWRzKHRhYklkczogbnVtYmVyW10pOiB2b2lkIHsgfVxuICBzZXRBaW1UaHJlYWRSZXN0b3JlZFRhYnModGFiczogVGFiSW5mb1tdKTogdm9pZCB7IH1cbiAgdXBkYXRlU21hcnRUYWJTaGFyaW5nQWN0aXZlKGFjdGl2ZTogYm9vbGVhbik6IHZvaWQgeyB9XG4gIHNldEFpbUJ1dHRvbkNvbmZpZyh0ZXh0OiBzdHJpbmcsIHRvb2x0aXA6IHN0cmluZywgYTExeUxhYmVsOiBzdHJpbmcsIGljb25Vcmw6IFVybCk6IHZvaWQgeyB9XG4gIHJlc2V0UG9wdXBUb0luaXRpYWxTdGF0ZSgpOiB2b2lkIHsgfVxuICBvblNjcmVlbnNob3RNZW51Q2xvc2VkKCk6IHZvaWQgeyB9XG4gIHNldEZyZVN0YXRlKHN0YXRlOiBGcmVTdGF0ZSk6IHZvaWQgeyB9XG4gIHVwZGF0ZVByb2ZpbGVJbmZvKGF2YXRhclVybDogc3RyaW5nLCBuYW1lOiBzdHJpbmcsIGVtYWlsOiBzdHJpbmcpOiB2b2lkIHsgfVxufVxuXG5leHBvcnQgY29uc3Qgc2VhcmNoID0gbmV3IFNlYXJjaFBhZ2UoKVxuXG5leHBvcnQgZnVuY3Rpb24gU2VhcmNoQ29udGV4dChwcm9wczogUmVhY3QuUHJvcHNXaXRoQ2hpbGRyZW48e30+KSB7XG4gIGNvbnN0IHsgZW5naW5lQ29uZmlnLCBsYXN0U2VhcmNoRW5naW5lLCBzZXRMYXN0U2VhcmNoRW5naW5lIH0gPSB1c2VFbmdpbmVDb250ZXh0KClcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtzZWFyY2hFbmdpbmUsIHNldFNlYXJjaEVuZ2luZUludGVybmFsXSA9IFJlYWN0LnVzZVN0YXRlPFNlYXJjaEVuZ2luZUluZm8+KClcbiAgY29uc3QgW3F1ZXJ5LCBzZXRRdWVyeV0gPSBSZWFjdC51c2VTdGF0ZSgnJylcbiAgY29uc3QgeyByZXN1bHQ6IHNlYXJjaEVuZ2luZXMgPSBbXSB9ID0gdXNlUHJvbWlzZSgoKSA9PiBzZWFyY2hFbmdpbmVzUHJvbWlzZSwgW10pXG4gIGNvbnN0IGZpbHRlcmVkU2VhcmNoRW5naW5lcyA9IHNlYXJjaEVuZ2luZXMuZmlsdGVyKHMgPT4gZW5naW5lQ29uZmlnW3MuaG9zdF0pXG5cbiAgY29uc3Qgc2V0U2VhcmNoRW5naW5lID0gUmVhY3QudXNlQ2FsbGJhY2soKGVuZ2luZTogU2VhcmNoRW5naW5lSW5mbyB8IHN0cmluZykgPT4ge1xuICAgIGlmICh0eXBlb2YgZW5naW5lID09PSAnc3RyaW5nJykge1xuICAgICAgZW5naW5lID0gc2VhcmNoRW5naW5lcy5maW5kKGUgPT4gZS5ob3N0ID09PSBlbmdpbmUgfHwgZS5rZXl3b3JkID09PSBlbmdpbmUpIVxuICAgIH1cblxuICAgIGlmICghZW5naW5lKSByZXR1cm5cblxuICAgIHNldExhc3RTZWFyY2hFbmdpbmUoZW5naW5lKVxuICAgIGdldE5UUEJyb3dzZXJBUEkoKS5uZXdUYWJNZXRyaWNzLnJlcG9ydE5UUFNlYXJjaERlZmF1bHRFbmdpbmUoZW5naW5lLnByZXBvcHVsYXRlSWQpXG4gICAgc2V0U2VhcmNoRW5naW5lSW50ZXJuYWwoZW5naW5lKVxuICB9LCBbc2VhcmNoRW5naW5lc10pO1xuXG4gIC8vIFdoZW4gd2UgcmVjZWl2ZSBzZWFyY2ggZW5naW5lcywgdXNlIHRoZSBmaXJzdCBvbmUgYXMgb3VyIGtleXdvcmQsIGlmIHdlIGRvbid0IGhhdmUgYSBtYXRjaC5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIXNlYXJjaEVuZ2luZXMubGVuZ3RoKSByZXR1cm5cblxuICAgIGNvbnN0IG1hdGNoID0gZmlsdGVyZWRTZWFyY2hFbmdpbmVzLmZpbmQocyA9PiBzLmhvc3QgPT09IGxhc3RTZWFyY2hFbmdpbmUpXG4gICAgICA/PyBzZWFyY2hFbmdpbmVzWzBdXG4gICAgZ2V0TlRQQnJvd3NlckFQSSgpLm5ld1RhYk1ldHJpY3MucmVwb3J0TlRQU2VhcmNoRGVmYXVsdEVuZ2luZShtYXRjaC5wcmVwb3B1bGF0ZUlkKVxuICAgIHNldFNlYXJjaEVuZ2luZShtYXRjaClcbiAgfSwgW2ZpbHRlcmVkU2VhcmNoRW5naW5lc10pXG5cbiAgLy8gV2hlbiB0aGUgcXVlcnkgY2hhbmdlcywgbm90aWZ5IHRoZSBicm93c2VyIHNpZGUuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHF1ZXJ5KSB7XG4gICAgICBjb25zdCBrZXl3b3JkUXVlcnkgPSBgJHtzZWFyY2hFbmdpbmU/LmtleXdvcmR9ICR7cXVlcnl9YFxuICAgICAgb21uaWJveENvbnRyb2xsZXIucXVlcnlBdXRvY29tcGxldGUoYWN0aXZlUXVlcnlJZCsrLCBudWxsLCBrZXl3b3JkUXVlcnksIGZhbHNlLCBrZXl3b3JkUXVlcnkubGVuZ3RoLCBTdWdnZXN0SW52ZW50b3J5LmtEZWZhdWx0LCBmYWxzZSwgJycsIElucHV0TWV0aG9kLmtLZXlib2FyZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9tbmlib3hDb250cm9sbGVyLnN0b3BBdXRvY29tcGxldGUodHJ1ZSlcbiAgICB9XG4gIH0sIFtxdWVyeSwgc2VhcmNoRW5naW5lXSlcblxuICBjb25zdCBzZXRRdWVyeUV4dGVybmFsID0gUmVhY3QudXNlQ2FsbGJhY2soKHF1ZXJ5OiBzdHJpbmcpID0+IHtcbiAgICBzZXRPcGVuKHRydWUpXG4gICAgc2V0UXVlcnkocXVlcnkpXG4gIH0sIFtdKVxuXG4gIGNvbnN0IGNvbnRleHQgPSBSZWFjdC51c2VNZW1vKCgpID0+ICh7XG4gICAgb3BlbixcbiAgICBzZXRPcGVuLFxuICAgIHNlYXJjaEVuZ2luZSxcbiAgICBzZXRTZWFyY2hFbmdpbmUsXG4gICAgcXVlcnksXG4gICAgc2V0UXVlcnk6IHNldFF1ZXJ5RXh0ZXJuYWwsXG4gICAgc2VhcmNoRW5naW5lcyxcbiAgICBmaWx0ZXJlZFNlYXJjaEVuZ2luZXNcbiAgfSksIFtzZWFyY2hFbmdpbmUsIHNldFNlYXJjaEVuZ2luZSwgZmlsdGVyZWRTZWFyY2hFbmdpbmVzLCBxdWVyeSwgc2VhcmNoRW5naW5lcywgb3Blbl0pXG5cbiAgcmV0dXJuIDxDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtjb250ZXh0fT5cbiAgICB7cHJvcHMuY2hpbGRyZW59XG4gIDwvQ29udGV4dC5Qcm92aWRlcj5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVNlYXJjaENvbnRleHQoKSB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KENvbnRleHQpXG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjQgVGhlIEJyYXZlIEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4vLyBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIGZpbGUsXG4vLyBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cHM6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy5cblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBpY29uIH0gZnJvbSBcIkBicmF2ZS9sZW8vdG9rZW5zL2Nzcy92YXJpYWJsZXNcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBTZWFyY2hFbmdpbmVJbmZvIH0gZnJvbSBcIi4uLy4uL2FwaS9iYWNrZ3JvdW5kXCI7XG5pbXBvcnQgSWNvbiBmcm9tIFwiQGJyYXZlL2xlby9yZWFjdC9pY29uXCI7XG5cbi8vIE1hcHBpbmcgb2Ygc2VhcmNoIGVuZ2luZSBob3N0IHRvIE5hbGEgaWNvbiBmb3IgdGhlIGljb25zIHdlIGJ1bmRsZSBpbiB0aGUgYnJvd3NlclxuY29uc3QgaWNvbnMgPSB7XG4gIC8vIFRoZSBHb29nbGUgc2VhcmNoIHByb3ZpZGVyIGhhcyB0aGUgZW1wdHkgb3JpZ2luIDpPXG4gICcnOiAnZ29vZ2xlLWNvbG9yJyxcbiAgJ2R1Y2tkdWNrZ28uY29tJzogJ2R1Y2tkdWNrZ28tY29sb3InLFxuICAnc2VhcmNoLmJyYXZlLmNvbSc6ICdzb2NpYWwtYnJhdmUtcmVsZWFzZS1mYXZpY29uLWZ1bGxoZWlnaHQtY29sb3InLFxuICAnd3d3LmJpbmcuY29tJzogJ2JpbmctY29sb3InLFxuICAnd3d3LnF3YW50LmNvbSc6ICdxd2FudC1jb2xvcicsXG4gICd3d3cuc3RhcnRwYWdlLmNvbSc6ICdzdGFydHBhZ2UtY29sb3InLFxuICAnc2VhcmNoLnlhaG9vLmNvbSc6ICd5YWhvby1jb2xvcicsXG4gICd5YW5kZXguY29tJzogJ3lhbmRleC1jb2xvcicsXG4gICdlY29zaWEub3JnJzogJ2Vjb3NpYS1jb2xvcicsXG59XG5cbmNvbnN0IGhpZGUgPSB7IG9wYWNpdHk6IDAgfVxuLy8gQ29tcG9uZW50IHdoaWNoIGhpZGVzIHRoZSBpbWFnZSB1bnRpbCBpdCBzdWNjZXNzZnVsbHkgbG9hZHMgKGlmIGV2ZXIpLlxuZXhwb3J0IGZ1bmN0aW9uIE1heWJlSW1hZ2UocHJvcHM6IFJlYWN0LkRldGFpbGVkSFRNTFByb3BzPFJlYWN0LkltZ0hUTUxBdHRyaWJ1dGVzPEhUTUxJbWFnZUVsZW1lbnQ+LCBIVE1MSW1hZ2VFbGVtZW50Pikge1xuICBjb25zdCB7IHNyYywgLi4ucmVzdCB9ID0gcHJvcHNcbiAgY29uc3QgW2xvYWRlZCwgc2V0TG9hZGVkXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBvbkxvYWQgPSBSZWFjdC51c2VDYWxsYmFjaygoKSA9PiBzZXRMb2FkZWQodHJ1ZSksIFtdKTtcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldExvYWRlZChmYWxzZSlcbiAgfSwgW3NyY10pXG4gIHJldHVybiA8aW1nIHsuLi5yZXN0fSBzdHlsZT17bG9hZGVkID8gdW5kZWZpbmVkIDogaGlkZX0gb25Mb2FkPXtvbkxvYWR9IHNyYz17YGNocm9tZTovL2ltYWdlP3VybD0ke2VuY29kZVVSSUNvbXBvbmVudChzcmMgPz8gJycpfWB9IC8+XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBTZWFyY2hFbmdpbmVJY29uKHByb3BzOiB7IGVuZ2luZT86IFNlYXJjaEVuZ2luZUluZm8sIGNsYXNzTmFtZT86IHN0cmluZyB9KSB7XG4gIGlmICghcHJvcHMuZW5naW5lKSByZXR1cm4gbnVsbFxuXG4gIGNvbnN0IG5hbGFJY29uID0gaWNvbnNbcHJvcHMuZW5naW5lLmhvc3QgYXMga2V5b2YgdHlwZW9mIGljb25zXVxuXG4gIHJldHVybiBuYWxhSWNvblxuICAgID8gPEljb24gbmFtZT17bmFsYUljb259IGNsYXNzTmFtZT17cHJvcHMuY2xhc3NOYW1lfSAvPlxuICAgIDogPE1heWJlSW1hZ2Ugc3JjPXtwcm9wcy5lbmdpbmUuZmF2aWNvblVybC51cmx9IGNsYXNzTmFtZT17cHJvcHMuY2xhc3NOYW1lfSAvPlxufVxuXG5leHBvcnQgY29uc3QgTWVkaXVtU2VhcmNoRW5naW5lSWNvbiA9IHN0eWxlZChTZWFyY2hFbmdpbmVJY29uKWBcbiAgLS1sZW8taWNvbi1zaXplOiAke2ljb24ubX07XG5cbiAgd2lkdGg6ICR7aWNvbi5tfTtcbiAgaGVpZ2h0OiAke2ljb24ubX07XG5gXG4iLCJpbXBvcnQgeyBhIGFzIGFwcGVuZF9zdHlsZXMsIGIgYXMgYXBwZW5kLCBmIGFzIGZyb21faHRtbCB9IGZyb20gJy4vNjUxZjBiYWEuanMnO1xuaW1wb3J0IEljb24sIHsgcHJlbG9hZEljb24gfSBmcm9tICcuL2ljb24uanMnO1xuaW1wb3J0IHsgbiBhcyBsaXN0ZW5fdG9fZXZlbnRfYW5kX3Jlc2V0X2V2ZW50LCB1IGFzIHVudHJhY2ssIHIgYXMgcmVuZGVyX2VmZmVjdCwgcCBhcyBwdXNoLCBvIGFzIG9uTW91bnQsIHQgYXMgdGVtcGxhdGVfZWZmZWN0LCBiIGFzIHBvcCwgZSBhcyBzZXQsIG0gYXMgbXV0YWJsZV9zb3VyY2UsIGYgYXMgZmx1c2hTeW5jLCBjIGFzIGNoaWxkLCBzIGFzIHNpYmxpbmcsIGcgYXMgZ2V0IH0gZnJvbSAnLi8xOTA5Mzc5Zi5qcyc7XG5pbXBvcnQgeyBlIGFzIGV2ZW50IH0gZnJvbSAnLi9hNWUzZTY2Zi5qcyc7XG5pbXBvcnQgeyBzIGFzIHNsb3QgfSBmcm9tICcuL2QwNDhkZTczLmpzJztcbmltcG9ydCB7IHMgYXMgc2V0X2NsYXNzIH0gZnJvbSAnLi9kMmI3NmFlYS5qcyc7XG5pbXBvcnQgeyBpIGFzIGluaXQgfSBmcm9tICcuLzE0ZGU0OWM2LmpzJztcbmltcG9ydCB7IHAgYXMgcHJvcCB9IGZyb20gJy4vM2U4MThjZWUuanMnO1xuaW1wb3J0ICcuL2VhY2I2OWQwLmpzJztcbmltcG9ydCAnLi83ODQzODFkNi5qcyc7XG5pbXBvcnQgJy4vYzgyMzZhNGYuanMnO1xuaW1wb3J0ICcuL2U3Y2ExMWM1LmpzJztcblxuLyoqIEBpbXBvcnQgeyBCYXRjaCB9IGZyb20gJy4uLy4uLy4uL3JlYWN0aXZpdHkvYmF0Y2guanMnICovXG5cbi8qKlxuICogQHBhcmFtIHtIVE1MSW5wdXRFbGVtZW50fSBpbnB1dFxuICogQHBhcmFtIHsoKSA9PiB1bmtub3dufSBnZXRcbiAqIEBwYXJhbSB7KHZhbHVlOiB1bmtub3duKSA9PiB2b2lkfSBzZXRcbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5mdW5jdGlvbiBiaW5kX2NoZWNrZWQoaW5wdXQsIGdldCwgc2V0ID0gZ2V0KSB7XG5cdGxpc3Rlbl90b19ldmVudF9hbmRfcmVzZXRfZXZlbnQoaW5wdXQsICdjaGFuZ2UnLCAoaXNfcmVzZXQpID0+IHtcblx0XHR2YXIgdmFsdWUgPSBpc19yZXNldCA/IGlucHV0LmRlZmF1bHRDaGVja2VkIDogaW5wdXQuY2hlY2tlZDtcblx0XHRzZXQodmFsdWUpO1xuXHR9KTtcblxuXHRpZiAoXG5cdFx0Ly8gSWYgd2UgYXJlIGh5ZHJhdGluZyBhbmQgdGhlIHZhbHVlIGhhcyBzaW5jZSBjaGFuZ2VkLFxuXHRcdC8vIHRoZW4gdXNlIHRoZSB1cGRhdGUgdmFsdWUgZnJvbSB0aGUgaW5wdXQgaW5zdGVhZC5cblx0XHQvLyBJZiBkZWZhdWx0Q2hlY2tlZCBpcyBzZXQsIHRoZW4gY2hlY2tlZCA9PSBkZWZhdWx0Q2hlY2tlZFxuXHRcdHVudHJhY2soZ2V0KSA9PSBudWxsXG5cdCkge1xuXHRcdHNldChpbnB1dC5jaGVja2VkKTtcblx0fVxuXG5cdHJlbmRlcl9lZmZlY3QoKCkgPT4ge1xuXHRcdHZhciB2YWx1ZSA9IGdldCgpO1xuXHRcdGlucHV0LmNoZWNrZWQgPSBCb29sZWFuKHZhbHVlKTtcblx0fSk7XG59XG5cbmNvbnN0IHNpemVzID0gW1wic21hbGxcIiwgXCJub3JtYWxcIl07XG5cbnByZWxvYWRJY29uKFwiY2hlY2tib3gtY2hlY2tlZFwiKTtcbnByZWxvYWRJY29uKFwiY2hlY2tib3gtdW5jaGVja2VkXCIpO1xuXG52YXIgcm9vdCA9IGZyb21faHRtbChgPGxhYmVsPjxkaXYgY2xhc3M9XCJjaGVjayBzdmVsdGUtcGtsd2tqXCI+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwic3ZlbHRlLXBrbHdralwiLz4gPGRpdiBjbGFzcz1cImNoZWNrLW1hcmsgY2hlY2tlZCBzdmVsdGUtcGtsd2tqXCI+PCE+PC9kaXY+IDxkaXYgY2xhc3M9XCJjaGVjay1tYXJrIHVuY2hlY2tlZCBzdmVsdGUtcGtsd2tqXCI+PCE+PC9kaXY+PC9kaXY+IDwhPjwvbGFiZWw+YCk7XG5cbmNvbnN0ICQkY3NzID0ge1xuXHRoYXNoOiAnc3ZlbHRlLXBrbHdraicsXG5cdGNvZGU6ICc6aG9zdCB7ZGlzcGxheTppbmxpbmUtYmxvY2s7fTpob3N0IC5sZW8tY2hlY2tib3guc3ZlbHRlLXBrbHdraiB7d2lkdGg6MTAwJTt9Lmxlby1jaGVja2JveC5zdmVsdGUtcGtsd2tqIHstLWZvY3VzLWJvcmRlci1yYWRpdXM6IHZhcigtLWxlby1jaGVja2JveC1mb2N1cy1ib3JkZXItcmFkaXVzLCAycHgpOy0tbGFiZWwtZ2FwOiB2YXIoLS1sZW8tY2hlY2tib3gtbGFiZWwtZ2FwLCB2YXIoLS1sZW8tc3BhY2luZy1tKSk7LS1mbGV4LWRpcmVjdGlvbjogdmFyKC0tbGVvLWNoZWNrYm94LWZsZXgtZGlyZWN0aW9uLCByb3cpOy0tY2hlY2tlZC1jb2xvcjogdmFyKFxcbiAgICAtLWxlby1jaGVja2JveC1jaGVja2VkLWNvbG9yLFxcbiAgICB2YXIoLS1sZW8tY29sb3ItaWNvbi1pbnRlcmFjdGl2ZSlcXG4gICk7LS1jaGVja2VkLWNvbG9yLWhvdmVyOiB2YXIoXFxuICAgIC0tbGVvLWNoZWNrYm94LWNoZWNrZWQtY29sb3ItaG92ZXIsXFxuICAgIHZhcigtLWxlby1jb2xvci1wcmltYXJ5LTcwKVxcbiAgKTstLXVuY2hlY2tlZC1jb2xvcjogdmFyKFxcbiAgICAtLWxlby1jaGVja2JveC11bmNoZWNrZWQtY29sb3IsXFxuICAgIHZhcigtLWxlby1jb2xvci1pY29uLWRlZmF1bHQpXFxuICApOy0tdW5jaGVja2VkLWNvbG9yLWhvdmVyOiB2YXIoXFxuICAgIC0tbGVvLWNoZWNrYm94LXVuY2hlY2tlZC1jb2xvci1ob3ZlcixcXG4gICAgdmFyKC0tbGVvLWNvbG9yLW5ldXRyYWwtNzApXFxuICApOy0tZGlzYWJsZWQtY29sb3I6IHZhcihcXG4gICAgLS1sZW8tY2hlY2tib3gtZGlzYWJsZWQtY29sb3IsXFxuICAgIHZhcigtLWxlby1jb2xvci10ZXh0LWRpc2FibGVkKVxcbiAgKTstLWZvbnQ6IHZhcigtLWxlby1jaGVja2JveC1mb250LCB2YXIoLS1sZW8tZm9udC1kZWZhdWx0LXJlZ3VsYXIpKTstLW1vdGlvbi1kdXJhdGlvbjogdmFyKC0tbGVvLWR1cmF0aW9uLXMpOy0tbW90aW9uLWVhc2luZzogdmFyKC0tbGVvLWVhc2luZy1vdXQpO2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7ZmxleC1kaXJlY3Rpb246dmFyKC0tZmxleC1kaXJlY3Rpb24pO2dhcDp2YXIoLS1sYWJlbC1nYXApO2ZvbnQ6dmFyKC0tZm9udCk7Y3Vyc29yOnBvaW50ZXI7LXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOnRyYW5zcGFyZW50O30ubGVvLWNoZWNrYm94LmRpc2FibGVkLnN2ZWx0ZS1wa2x3a2oge2N1cnNvcjpub3QtYWxsb3dlZDt9Lmxlby1jaGVja2JveC5pc0NoZWNrZWQuc3ZlbHRlLXBrbHdraiAuY2hlY2s6d2hlcmUoLnN2ZWx0ZS1wa2x3a2opLCAubGVvLWNoZWNrYm94LnN2ZWx0ZS1wa2x3a2o6aGFzKGlucHV0OndoZXJlKC5zdmVsdGUtcGtsd2tqKTpjaGVja2VkKSAuY2hlY2s6d2hlcmUoLnN2ZWx0ZS1wa2x3a2opIHtjb2xvcjp2YXIoLS1jaGVja2VkLWNvbG9yKTt9Lmxlby1jaGVja2JveC5pc0NoZWNrZWQuc3ZlbHRlLXBrbHdraiAuY2hlY2s6d2hlcmUoLnN2ZWx0ZS1wa2x3a2opIC5jaGVja2VkOndoZXJlKC5zdmVsdGUtcGtsd2tqKSwgLmxlby1jaGVja2JveC5zdmVsdGUtcGtsd2tqOmhhcyhpbnB1dDp3aGVyZSguc3ZlbHRlLXBrbHdraik6Y2hlY2tlZCkgLmNoZWNrOndoZXJlKC5zdmVsdGUtcGtsd2tqKSAuY2hlY2tlZDp3aGVyZSguc3ZlbHRlLXBrbHdraikge29wYWNpdHk6MTt0cmFuc2Zvcm06c2NhbGUoMSk7fS5sZW8tY2hlY2tib3guaXNDaGVja2VkLnN2ZWx0ZS1wa2x3a2ogLmNoZWNrOndoZXJlKC5zdmVsdGUtcGtsd2tqKSAudW5jaGVja2VkOndoZXJlKC5zdmVsdGUtcGtsd2tqKSwgLmxlby1jaGVja2JveC5zdmVsdGUtcGtsd2tqOmhhcyhpbnB1dDp3aGVyZSguc3ZlbHRlLXBrbHdraik6Y2hlY2tlZCkgLmNoZWNrOndoZXJlKC5zdmVsdGUtcGtsd2tqKSAudW5jaGVja2VkOndoZXJlKC5zdmVsdGUtcGtsd2tqKSB7b3BhY2l0eTowO3RyYW5zZm9ybTpzY2FsZSgwLjg1KTt9Lmxlby1jaGVja2JveC5kaXNhYmxlZC5zdmVsdGUtcGtsd2tqIHtjb2xvcjp2YXIoLS1kaXNhYmxlZC1jb2xvcik7fS5ub3JtYWwuc3ZlbHRlLXBrbHdraiB7LS1jaGVja2JveC1zaXplOiB2YXIoLS1sZW8tY2hlY2tib3gtc2l6ZSwgMjBweCk7fS5zbWFsbC5zdmVsdGUtcGtsd2tqIHstLWNoZWNrYm94LXNpemU6IHZhcigtLWxlby1jaGVja2JveC1zaXplLCAxNnB4KTt9Lmxlby1jaGVja2JveC5zdmVsdGUtcGtsd2tqIGlucHV0OndoZXJlKC5zdmVsdGUtcGtsd2tqKSB7b3BhY2l0eTowO30ubGVvLWNoZWNrYm94LnN2ZWx0ZS1wa2x3a2ogLmNoZWNrOndoZXJlKC5zdmVsdGUtcGtsd2tqKSB7LS1sZW8taWNvbi1zaXplOiB2YXIoLS1jaGVja2JveC1zaXplKTtwb3NpdGlvbjpyZWxhdGl2ZTt3aWR0aDp2YXIoLS1jaGVja2JveC1zaXplKTtoZWlnaHQ6dmFyKC0tY2hlY2tib3gtc2l6ZSk7Y29sb3I6dmFyKC0tdW5jaGVja2VkLWNvbG9yKTt9Lmxlby1jaGVja2JveC5zdmVsdGUtcGtsd2tqIC5jaGVjazp3aGVyZSguc3ZlbHRlLXBrbHdraikgZGl2OndoZXJlKC5zdmVsdGUtcGtsd2tqKSB7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDowO2JvdHRvbTowO3JpZ2h0OjA7fS5sZW8tY2hlY2tib3guc3ZlbHRlLXBrbHdraiAuY2hlY2s6d2hlcmUoLnN2ZWx0ZS1wa2x3a2opIC5jaGVja2VkOndoZXJlKC5zdmVsdGUtcGtsd2tqKSB7b3BhY2l0eTowO3RyYW5zZm9ybTpzY2FsZSgwLjg1KTt9Lmxlby1jaGVja2JveC5zdmVsdGUtcGtsd2tqIC5jaGVjazp3aGVyZSguc3ZlbHRlLXBrbHdraikgLnVuY2hlY2tlZDp3aGVyZSguc3ZlbHRlLXBrbHdraikge29wYWNpdHk6MTt0cmFuc2Zvcm06c2NhbGUoMSk7fS5sZW8tY2hlY2tib3guc3ZlbHRlLXBrbHdraiAuY2hlY2s6d2hlcmUoLnN2ZWx0ZS1wa2x3a2opOmhhcyhpbnB1dDp3aGVyZSguc3ZlbHRlLXBrbHdraik6Zm9jdXMtdmlzaWJsZSkge2JveC1zaGFkb3c6MHB4IDBweCAwcHggMS41cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLCAwcHggMHB4IDRweCAycHggIzQyM2VlZTtib3JkZXItcmFkaXVzOnZhcigtLWZvY3VzLWJvcmRlci1yYWRpdXMpO30ubGVvLWNoZWNrYm94LmFuaW1hdGUuc3ZlbHRlLXBrbHdraiAuY2hlY2s6d2hlcmUoLnN2ZWx0ZS1wa2x3a2opIC5jaGVjay1tYXJrOndoZXJlKC5zdmVsdGUtcGtsd2tqKSB7dHJhbnNpdGlvbjpvcGFjaXR5IHZhcigtLW1vdGlvbi1kdXJhdGlvbikgdmFyKC0tbW90aW9uLWVhc2luZyksIHRyYW5zZm9ybSB2YXIoLS1tb3Rpb24tZHVyYXRpb24pIHZhcigtLW1vdGlvbi1lYXNpbmcpO31cXG5AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSkgey5sZW8tY2hlY2tib3guYW5pbWF0ZS5zdmVsdGUtcGtsd2tqIC5jaGVjazp3aGVyZSguc3ZlbHRlLXBrbHdraikgLmNoZWNrLW1hcms6d2hlcmUoLnN2ZWx0ZS1wa2x3a2opIHt0cmFuc2l0aW9uOm9wYWNpdHkgdmFyKC0tbW90aW9uLWR1cmF0aW9uKSB2YXIoLS1tb3Rpb24tZWFzaW5nKTt0cmFuc2Zvcm06bm9uZSAhaW1wb3J0YW50O31cXG59Lmxlby1jaGVja2JveC5kaXNhYmxlZC5zdmVsdGUtcGtsd2tqIC5jaGVjazp3aGVyZSguc3ZlbHRlLXBrbHdraikge2NvbG9yOnZhcigtLWRpc2FibGVkLWNvbG9yKSAhaW1wb3J0YW50O31cXG5cXG5AbWVkaWEgKGhvdmVyOiBob3Zlcikgey5sZW8tY2hlY2tib3guc3ZlbHRlLXBrbHdrajpob3ZlciAuY2hlY2s6d2hlcmUoLnN2ZWx0ZS1wa2x3a2opIHtjb2xvcjp2YXIoLS11bmNoZWNrZWQtY29sb3ItaG92ZXIpO30ubGVvLWNoZWNrYm94LnN2ZWx0ZS1wa2x3a2o6aG92ZXIgLmNoZWNrOndoZXJlKC5zdmVsdGUtcGtsd2tqKTpoYXMoaW5wdXQ6d2hlcmUoLnN2ZWx0ZS1wa2x3a2opOmNoZWNrZWQpIHtjb2xvcjp2YXIoLS1jaGVja2VkLWNvbG9yLWhvdmVyKTt9Lmxlby1jaGVja2JveC5pc0NoZWNrZWQuc3ZlbHRlLXBrbHdrajpob3ZlciAuY2hlY2s6d2hlcmUoLnN2ZWx0ZS1wa2x3a2opIHtjb2xvcjp2YXIoLS1jaGVja2VkLWNvbG9yLWhvdmVyKTt9XFxufSdcbn07XG5cbmZ1bmN0aW9uIENoZWNrYm94KCQkYW5jaG9yLCAkJHByb3BzKSB7XG5cdHB1c2goJCRwcm9wcywgZmFsc2UpO1xuXHRhcHBlbmRfc3R5bGVzKCQkYW5jaG9yLCAkJGNzcyk7XG5cblx0bGV0IGNoZWNrZWQgPSBwcm9wKCQkcHJvcHMsICdjaGVja2VkJywgMTIpO1xuXHRsZXQgaXNEaXNhYmxlZCA9IHByb3AoJCRwcm9wcywgJ2lzRGlzYWJsZWQnLCAxMiwgZmFsc2UpO1xuXHRsZXQgc2l6ZSA9IHByb3AoJCRwcm9wcywgJ3NpemUnLCAxMiwgXCJub3JtYWxcIik7XG5cdGxldCBvbkNoYW5nZSA9IHByb3AoJCRwcm9wcywgJ29uQ2hhbmdlJywgMjgsICgpID0+IHZvaWQgMCk7XG5cdGxldCBhbmltYXRlID0gbXV0YWJsZV9zb3VyY2UoZmFsc2UpO1xuXG5cdG9uTW91bnQoKCkgPT4ge1xuXHRcdGNvbnN0IGhhbmRsZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiBzZXQoYW5pbWF0ZSwgdHJ1ZSkpO1xuXG5cdFx0cmV0dXJuICgpID0+IGNhbmNlbEFuaW1hdGlvbkZyYW1lKGhhbmRsZSk7XG5cdH0pO1xuXG5cdHZhciAkJGV4cG9ydHMgPSB7XG5cdFx0Z2V0IGNoZWNrZWQoKSB7XG5cdFx0XHRyZXR1cm4gY2hlY2tlZCgpO1xuXHRcdH0sXG5cblx0XHRzZXQgY2hlY2tlZCgkJHZhbHVlKSB7XG5cdFx0XHRjaGVja2VkKCQkdmFsdWUpO1xuXHRcdFx0Zmx1c2hTeW5jKCk7XG5cdFx0fSxcblxuXHRcdGdldCBpc0Rpc2FibGVkKCkge1xuXHRcdFx0cmV0dXJuIGlzRGlzYWJsZWQoKTtcblx0XHR9LFxuXG5cdFx0c2V0IGlzRGlzYWJsZWQoJCR2YWx1ZSkge1xuXHRcdFx0aXNEaXNhYmxlZCgkJHZhbHVlKTtcblx0XHRcdGZsdXNoU3luYygpO1xuXHRcdH0sXG5cblx0XHRnZXQgc2l6ZSgpIHtcblx0XHRcdHJldHVybiBzaXplKCk7XG5cdFx0fSxcblxuXHRcdHNldCBzaXplKCQkdmFsdWUpIHtcblx0XHRcdHNpemUoJCR2YWx1ZSk7XG5cdFx0XHRmbHVzaFN5bmMoKTtcblx0XHR9LFxuXG5cdFx0Z2V0IG9uQ2hhbmdlKCkge1xuXHRcdFx0cmV0dXJuIG9uQ2hhbmdlKCk7XG5cdFx0fSxcblxuXHRcdHNldCBvbkNoYW5nZSgkJHZhbHVlKSB7XG5cdFx0XHRvbkNoYW5nZSgkJHZhbHVlKTtcblx0XHRcdGZsdXNoU3luYygpO1xuXHRcdH1cblx0fTtcblxuXHRpbml0KCk7XG5cblx0dmFyIGxhYmVsID0gcm9vdCgpO1xuXHRsZXQgY2xhc3Nlcztcblx0dmFyIGRpdiA9IGNoaWxkKGxhYmVsKTtcblx0dmFyIGlucHV0ID0gY2hpbGQoZGl2KTtcblxuXHR2YXIgZGl2XzEgPSBzaWJsaW5nKGlucHV0LCAyKTtcblx0dmFyIG5vZGUgPSBjaGlsZChkaXZfMSk7XG5cblx0SWNvbihub2RlLCB7IG5hbWU6ICdjaGVja2JveC1jaGVja2VkJyB9KTtcblxuXHR2YXIgZGl2XzIgPSBzaWJsaW5nKGRpdl8xLCAyKTtcblx0dmFyIG5vZGVfMSA9IGNoaWxkKGRpdl8yKTtcblxuXHRJY29uKG5vZGVfMSwgeyBuYW1lOiAnY2hlY2tib3gtdW5jaGVja2VkJyB9KTtcblxuXHR2YXIgbm9kZV8yID0gc2libGluZyhkaXYsIDIpO1xuXG5cdHNsb3Qobm9kZV8yLCAkJHByb3BzLCAnZGVmYXVsdCcsIHt9LCBudWxsKTtcblxuXHR0ZW1wbGF0ZV9lZmZlY3QoKCkgPT4ge1xuXHRcdGNsYXNzZXMgPSBzZXRfY2xhc3MobGFiZWwsIDEsICdsZW8tY2hlY2tib3ggc3ZlbHRlLXBrbHdraicsIG51bGwsIGNsYXNzZXMsIHtcblx0XHRcdHNtYWxsOiBzaXplKCkgPT09ICdzbWFsbCcsXG5cdFx0XHRub3JtYWw6IHNpemUoKSAhPT0gJ3NtYWxsJyxcblx0XHRcdGRpc2FibGVkOiBpc0Rpc2FibGVkKCksXG5cdFx0XHRpc0NoZWNrZWQ6IGNoZWNrZWQoKSxcblx0XHRcdGFuaW1hdGU6IGdldChhbmltYXRlKVxuXHRcdH0pO1xuXG5cdFx0aW5wdXQuZGlzYWJsZWQgPSBpc0Rpc2FibGVkKCk7XG5cdH0pO1xuXG5cdGJpbmRfY2hlY2tlZChpbnB1dCwgY2hlY2tlZCk7XG5cdGV2ZW50KCdjaGFuZ2UnLCBpbnB1dCwgKGUpID0+IG9uQ2hhbmdlKCk/Lih7IGNoZWNrZWQ6IGUuY3VycmVudFRhcmdldC5jaGVja2VkIH0pKTtcblx0YXBwZW5kKCQkYW5jaG9yLCBsYWJlbCk7XG5cblx0cmV0dXJuIHBvcCgkJGV4cG9ydHMpO1xufVxuXG5leHBvcnQgeyBDaGVja2JveCBhcyBkZWZhdWx0LCBzaXplcyB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y2hlY2tib3guanMubWFwXG4iLCJpbXBvcnQgU3ZlbHRlV2ViIGZyb20gJy4uL3NoYXJlZC9zdmVsdGUtd2ViLmpzJ1xuaW1wb3J0IENoZWNrYm94IGZyb20gJy4uL3NoYXJlZC9jaGVja2JveC5qcydcbmV4cG9ydCBkZWZhdWx0IFN2ZWx0ZVdlYihDaGVja2JveCwge1xuICAgIG5hbWU6ICdsZW8tY2hlY2tib3gnLFxuICAgIG1vZGU6ICdvcGVuJ1xufSk7XG5cbi8vIFJlZXhwb3J0IGV2ZXJ5dGhpbmcgZnJvbSBvdXIgY29tcG9uZW50LCBzbyBjb25zdW1lcnMgY2FuIGRvIGFueXRoaW5nIHRoZSBiYXNlXG4vLyBjb21wb25lbnQgY2FuIGRvLlxuZXhwb3J0ICogZnJvbSAnLi4vc2hhcmVkL2NoZWNrYm94LmpzJyIsImltcG9ydCBTdmVsdGVUb1JlYWN0IGZyb20gJy4uL3NoYXJlZC9zdmVsdGUtcmVhY3QuanMnXG5pbXBvcnQgQ2hlY2tib3ggZnJvbSAnLi4vd2ViLWNvbXBvbmVudHMvY2hlY2tib3guanMnXG5leHBvcnQgZGVmYXVsdCBTdmVsdGVUb1JlYWN0KCdsZW8tY2hlY2tib3gnLCBDaGVja2JveCk7XG5cbi8vIFJlZXhwb3J0IGV2ZXJ5dGhpbmcgZnJvbSBvdXIgY29tcG9uZW50LCBzbyBSZWFjdCBjb25zdW1lcnMgY2FuIGRvIGFueXRoaW5nXG4vLyB0aGUgYmFzZSBjb21wb25lbnQgY2FuIGRvLlxuZXhwb3J0ICogZnJvbSAnLi4vd2ViLWNvbXBvbmVudHMvY2hlY2tib3guanMnIiwiLy8gQ29weXJpZ2h0IChjKSAyMDI0IFRoZSBCcmF2ZSBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuLy8gTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBmaWxlLFxuLy8gWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHBzOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uXG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuXG4vLyBDb21wb25lbnRzXG5pbXBvcnQgRmxleCBmcm9tICckd2ViLWNvbW1vbi9GbGV4J1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAYnJhdmUvbGVvL3JlYWN0L2J1dHRvbidcbmltcG9ydCBDaGVja2JveCBmcm9tICdAYnJhdmUvbGVvL3JlYWN0L2NoZWNrYm94J1xuaW1wb3J0IEljb24gZnJvbSAnQGJyYXZlL2xlby9yZWFjdC9pY29uJ1xuaW1wb3J0IFRvZ2dsZSBmcm9tICdAYnJhdmUvbGVvL3JlYWN0L3RvZ2dsZSdcbmltcG9ydCB7IGNvbG9yLCBmb250LCByYWRpdXMsIHNwYWNpbmcgfSBmcm9tICdAYnJhdmUvbGVvL3Rva2Vucy9jc3MvdmFyaWFibGVzJ1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCB1c2VQcm9taXNlIGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi91c2VQcm9taXNlJ1xuaW1wb3J0IHtcbiAgU2V0dGluZ3NSb3csXG4gIFNldHRpbmdzVGV4dFxufSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2RlZmF1bHQnXG5pbXBvcnQgeyBzZWFyY2hFbmdpbmVzUHJvbWlzZSB9IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvc2VhcmNoL1NlYXJjaENvbnRleHQnXG5pbXBvcnQgeyBNZWRpdW1TZWFyY2hFbmdpbmVJY29uIH0gZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9zZWFyY2gvU2VhcmNoRW5naW5lSWNvbidcbmltcG9ydCB7IHVzZU5ld1RhYlByZWYgfSBmcm9tICcuLi8uLi8uLi9ob29rcy91c2VQcmVmJ1xuaW1wb3J0IHsgZ2V0TG9jYWxlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2xvY2FsZSdcbmltcG9ydCB7IGRlZmF1bHRTZWFyY2hIb3N0IH0gZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9zZWFyY2gvY29uZmlnJ1xuaW1wb3J0IHsgdXNlRW5naW5lQ29udGV4dCB9IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvc2VhcmNoL0VuZ2luZUNvbnRleHQnXG5cbmNvbnN0IEVuZ2luZXNDb250YWluZXIgPSBzdHlsZWQoRmxleClgXG4gIGZvbnQ6ICR7Zm9udC5kZWZhdWx0LnJlZ3VsYXJ9O1xuYFxuXG5jb25zdCBFbmdpbmVzR3JpZCA9IHN0eWxlZC5kaXZgXG4gIC8qIFRocmVlIHJvd3MgKi9cbiAgbWF4LWhlaWdodDogMTM2cHg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG5cbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgZ2FwOiAke3NwYWNpbmcubX07XG5gXG5cbmNvbnN0IEVuZ2luZUNhcmQgPSBzdHlsZWQuZGl2YFxuICBib3JkZXI6IDFweCBzb2xpZCAke2NvbG9yLmRpdmlkZXIuc3VidGxlfTtcbiAgYm9yZGVyLXJhZGl1czogJHtyYWRpdXMuc307XG5cbiAgcGFkZGluZzogJHtzcGFjaW5nLm19O1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogJHtzcGFjaW5nLm19O1xuYFxuXG5jb25zdCBMaW5rQnV0dG9uID0gc3R5bGVkKEJ1dHRvbilgXG4gIC0tbGVvLWJ1dHRvbi1jb2xvcjogJHtjb2xvci50ZXh0LnNlY29uZGFyeX07XG5gXG5cbmNvbnN0IEVuZ2luZUNoZWNrYm94ID0gc3R5bGVkKENoZWNrYm94KWBcbiAgLS1sZW8tY2hlY2tib3gtZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xuXG4gIHdpZHRoOiAxMDAlO1xuICBmb250OiAke2ZvbnQuZGVmYXVsdC5yZWd1bGFyfTtcbmBcblxuY29uc3QgSHIgPSBzdHlsZWQuaHJgXG4gIGJvcmRlci1jb2xvcjogJHtjb2xvci5kaXZpZGVyLnN1YnRsZX07XG4gIGJvcmRlci1ib3R0b206IHVuc2V0O1xuICBtYXJnaW46IDA7XG5gXG5cbmNvbnN0IENoZWNrYm94VGV4dCA9IHN0eWxlZC5zcGFuYGZsZXg6IDFgO1xuY29uc3QgaGFzRW5hYmxlZEVuZ2luZSA9IChjb25maWc6IFJlY29yZDxzdHJpbmcsIGJvb2xlYW4+KSA9PiBPYmplY3Qua2V5cyhjb25maWcpLnNvbWUoa2V5ID0+IGNvbmZpZ1trZXldKVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZWFyY2hTZXR0aW5ncygpIHtcbiAgY29uc3QgeyByZXN1bHQ6IGVuZ2luZXMgPSBbXSB9ID0gdXNlUHJvbWlzZSgoKSA9PiBzZWFyY2hFbmdpbmVzUHJvbWlzZSwgW10pXG4gIGNvbnN0IFtzaG93U2VhcmNoQm94LCBzZXRTaG93U2VhcmNoQm94XSA9IHVzZU5ld1RhYlByZWYoJ3Nob3dTZWFyY2hCb3gnKVxuICBjb25zdCB7IHNldEVuZ2luZUNvbmZpZywgZW5naW5lQ29uZmlnIH0gPSB1c2VFbmdpbmVDb250ZXh0KClcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghaGFzRW5hYmxlZEVuZ2luZShlbmdpbmVDb25maWcpKSB7XG4gICAgICBzZXRTaG93U2VhcmNoQm94KGZhbHNlKVxuICAgIH1cbiAgfSwgW2VuZ2luZUNvbmZpZ10pXG5cbiAgcmV0dXJuIDxGbGV4IGRpcmVjdGlvbj0nY29sdW1uJyBnYXA9e3NwYWNpbmcueGx9PlxuICAgIDxTZXR0aW5nc1Jvdz5cbiAgICAgIDxTZXR0aW5nc1RleHQ+e2dldExvY2FsZSgnc2VhcmNoU2hvd1NldHRpbmcnKX08L1NldHRpbmdzVGV4dD5cbiAgICAgIDxUb2dnbGUgc2l6ZT0nc21hbGwnIGNoZWNrZWQ9e3Nob3dTZWFyY2hCb3h9IG9uQ2hhbmdlPXtlID0+IHtcbiAgICAgICAgc2V0U2hvd1NlYXJjaEJveChlLmNoZWNrZWQpXG5cbiAgICAgICAgLy8gSWYgd2UndmUganVzdCBlbmFibGVkIHRoZSBzZWFyY2hib3gsIG1ha2Ugc3VyZSBhdCBsZWFzdCBvbmUgZW5naW5lXG4gICAgICAgIC8vIGlzIGVuYWJsZWQuXG4gICAgICAgIGlmIChlLmNoZWNrZWQgJiYgIWhhc0VuYWJsZWRFbmdpbmUoZW5naW5lQ29uZmlnKSkge1xuICAgICAgICAgIHNldEVuZ2luZUNvbmZpZyhkZWZhdWx0U2VhcmNoSG9zdCwgdHJ1ZSlcbiAgICAgICAgfVxuICAgICAgfX0gLz5cbiAgICA8L1NldHRpbmdzUm93PlxuICAgIHtzaG93U2VhcmNoQm94ICYmIDw+XG4gICAgICA8SHIgLz5cbiAgICAgIDxFbmdpbmVzQ29udGFpbmVyIGRpcmVjdGlvbj0nY29sdW1uJyBnYXA9e3NwYWNpbmcueGx9PlxuICAgICAgICA8ZGl2PntnZXRMb2NhbGUoJ3NlYXJjaEVuYWJsZVNlYXJjaEVuZ2luZXNUaXRsZScpfTwvZGl2PlxuICAgICAgICA8RW5naW5lc0dyaWQ+XG4gICAgICAgICAge2VuZ2luZXMubWFwKGVuZ2luZSA9PiA8RW5naW5lQ2FyZCBrZXk9e2VuZ2luZS5rZXl3b3JkfT5cbiAgICAgICAgICAgIDxFbmdpbmVDaGVja2JveCBjaGVja2VkPXtlbmdpbmVDb25maWdbZW5naW5lLmhvc3RdfSBvbkNoYW5nZT17ZSA9PiB7XG4gICAgICAgICAgICAgIHNldEVuZ2luZUNvbmZpZyhlbmdpbmUuaG9zdCwgZS5jaGVja2VkKVxuICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgIDxDaGVja2JveFRleHQ+e2VuZ2luZS5uYW1lfTwvQ2hlY2tib3hUZXh0PlxuICAgICAgICAgICAgICA8TWVkaXVtU2VhcmNoRW5naW5lSWNvbiBlbmdpbmU9e2VuZ2luZX0gLz5cbiAgICAgICAgICAgIDwvRW5naW5lQ2hlY2tib3g+XG4gICAgICAgICAgPC9FbmdpbmVDYXJkPil9XG4gICAgICAgIDwvRW5naW5lc0dyaWQ+XG4gICAgICA8L0VuZ2luZXNDb250YWluZXI+XG4gICAgICA8SHIgLz5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxMaW5rQnV0dG9uIGhyZWY9J2Nocm9tZTovL3NldHRpbmdzL3NlYXJjaEVuZ2luZXMnIGtpbmQ9J3BsYWluJz5cbiAgICAgICAgICB7Z2V0TG9jYWxlKCdzZWFyY2hDdXN0b21pemVTZWFyY2hFbmdpbmVzJyl9XG4gICAgICAgICAgPGRpdiBzbG90PSdpY29uLWFmdGVyJz48SWNvbiBuYW1lPSdsYXVuY2gnIC8+PC9kaXY+XG4gICAgICAgIDwvTGlua0J1dHRvbj5cbiAgICAgICAgPHNwYW4gLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvPn1cbiAgPC9GbGV4PlxufVxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIyIFRoZSBCcmF2ZSBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuLy8gTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBmaWxlLFxuLy8gWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHBzOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uXG5cbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlUHJvbWlzZTxUPiAoZ2V0UHJvbWlzZTogKCkgPT4gUHJvbWlzZTxUPiwgZGVwczogYW55W10pIHtcbiAgICBjb25zdCBbcmVzdWx0LCBzZXRSZXN1bHRdID0gdXNlU3RhdGU8VCB8IHVuZGVmaW5lZD4oKVxuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpXG4gICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZTxhbnk+KClcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuXG4gICAgICAgIHNldExvYWRpbmcodHJ1ZSlcbiAgICAgICAgc2V0RXJyb3IodW5kZWZpbmVkKVxuXG4gICAgICAgIGdldFByb21pc2UoKVxuICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+ICFjYW5jZWxsZWQgJiYgc2V0UmVzdWx0KHJlc3VsdCkpXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+ICFjYW5jZWxsZWQgJiYgc2V0RXJyb3IoZXJyKSlcbiAgICAgICAgICAgIC5maW5hbGx5KCgpID0+ICFjYW5jZWxsZWQgJiYgc2V0TG9hZGluZyhmYWxzZSkpXG5cbiAgICAgICAgcmV0dXJuICgpID0+IHsgY2FuY2VsbGVkID0gdHJ1ZSB9XG4gICAgfSwgZGVwcylcblxuICAgIHJldHVybiB7XG4gICAgICAgIHJlc3VsdCxcbiAgICAgICAgbG9hZGluZyxcbiAgICAgICAgZXJyb3JcbiAgICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=