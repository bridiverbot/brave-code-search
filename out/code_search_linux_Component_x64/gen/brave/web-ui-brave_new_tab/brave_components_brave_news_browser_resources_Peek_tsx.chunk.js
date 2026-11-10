export const __webpack_esm_id__ = "brave_components_brave_news_browser_resources_Peek_tsx";
export const __webpack_esm_ids__ = ["brave_components_brave_news_browser_resources_Peek_tsx"];
export const __webpack_esm_modules__ = {

/***/ "../../../brave/components/brave_news/browser/resources/Peek.tsx"
/*!**********************************************************!*\
  !*** ./components/brave_news/browser/resources/Peek.tsx ***!
  \**********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Peek)
/* harmony export */ });
/* harmony import */ var $web_common_locale__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! $web-common/locale */ "../../../brave/components/common/locale.ts");
/* harmony import */ var _brave_leo_react_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @brave/leo/react/icon */ "../../../brave/node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/react/icon.js");
/* harmony import */ var _brave_leo_tokens_css_variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @brave/leo/tokens/css/variables */ "../../../brave/node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/tokens/css/variables.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "../../../brave/node_modules/.pnpm/styled-components@6.4.3_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var _Feed__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Feed */ "../../../brave/components/brave_news/browser/resources/Feed.tsx");
/* harmony import */ var _Variables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Variables */ "../../../brave/components/brave_news/browser/resources/Variables.tsx");
/* harmony import */ var _feed_ArticleMetaRow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./feed/ArticleMetaRow */ "../../../brave/components/brave_news/browser/resources/feed/ArticleMetaRow.tsx");
/* harmony import */ var _feed_Card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./feed/Card */ "../../../brave/components/brave_news/browser/resources/feed/Card.tsx");
/* harmony import */ var _shared_Context__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/Context */ "../../../brave/components/brave_news/browser/resources/shared/Context.tsx");
/* harmony import */ var $web_common_loadTimeData__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! $web-common/loadTimeData */ "../../../brave/components/common/loadTimeData.js");
// Copyright (c) 2023 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.











const NewsButton = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].button.withConfig({ displayName: "NewsButton", componentId: "sc-vmsfv6" }) `
  cursor: pointer;

  padding: ${_brave_leo_tokens_css_variables__WEBPACK_IMPORTED_MODULE_2__.spacing.m} ${_brave_leo_tokens_css_variables__WEBPACK_IMPORTED_MODULE_2__.spacing.xl};

  border: none;
  border-radius: ${_brave_leo_tokens_css_variables__WEBPACK_IMPORTED_MODULE_2__.radius.m};

  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(40px);

  color: ${_brave_leo_tokens_css_variables__WEBPACK_IMPORTED_MODULE_2__.color.white};
  font: ${_brave_leo_tokens_css_variables__WEBPACK_IMPORTED_MODULE_2__.font.default.semibold};

  & > leo-icon[name="carat-down"] {
    --leo-icon-color: rgba(255, 255, 255, 0.25);
  }

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${_brave_leo_tokens_css_variables__WEBPACK_IMPORTED_MODULE_2__.spacing.m};

  transition: opacity 150ms ease-in-out;

  &:focus-visible {
    outline: none;
    box-shadow: ${_brave_leo_tokens_css_variables__WEBPACK_IMPORTED_MODULE_2__.effect.focusState};
  }

  &:hover {
    opacity: 0.9;
  }

  &:active {
    opacity: 1;
  }
`;
const PeekingCard = (0,styled_components__WEBPACK_IMPORTED_MODULE_4__["default"])((0,_feed_Card__WEBPACK_IMPORTED_MODULE_8__["default"])).withConfig({ displayName: "PeekingCard", componentId: "sc-rlyznt" }) `
  width: 540px;
  background: rgba(255, 255, 255, 0.10);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.10);
  backdrop-filter: blur(40px);

  display: flex;
  flex-direction: row;
  gap: ${_brave_leo_tokens_css_variables__WEBPACK_IMPORTED_MODULE_2__.spacing.m};
  justify-content: space-between;
`;
const animateIn = (0,styled_components__WEBPACK_IMPORTED_MODULE_4__.keyframes) `
  from {
    transform: translateY(150%);
  }

  to {
    transform: translate(0%);
  }
`;
const Container = (0,styled_components__WEBPACK_IMPORTED_MODULE_4__["default"])((0,_Variables__WEBPACK_IMPORTED_MODULE_6__["default"])).withConfig({ displayName: "Container", componentId: "sc-qkiizs" }) `
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${_brave_leo_tokens_css_variables__WEBPACK_IMPORTED_MODULE_2__.spacing.m};

  animation: ${animateIn} 0.1s ease-in-out 1;

  // As we scroll down the PeekingCard should fade out. At 20% scroll it should
  // be completely invisible.
  opacity: calc(1 - (var(--ntp-scroll-percent) * 5));
`;
const scrollToNews = () => {
    const news = document.querySelector(`.${_Feed__WEBPACK_IMPORTED_MODULE_5__.NEWS_FEED_CLASS}`);
    news === null || news === void 0 ? void 0 : news.scrollIntoView({ behavior: 'smooth' });
};
function Peek() {
    var _a, _b, _c, _d, _e, _f, _g;
    const { feedV2, isShowOnNTPPrefEnabled, isOptInPrefEnabled } = (0,_shared_Context__WEBPACK_IMPORTED_MODULE_9__.useBraveNews)();
    const top = (_a = feedV2 === null || feedV2 === void 0 ? void 0 : feedV2.items) === null || _a === void 0 ? void 0 : _a.find(a => a.article || a.hero);
    const data = (_c = ((_b = top === null || top === void 0 ? void 0 : top.hero) !== null && _b !== void 0 ? _b : top === null || top === void 0 ? void 0 : top.article)) === null || _c === void 0 ? void 0 : _c.data;
    const imageUrl = (_g = (_e = (_d = data === null || data === void 0 ? void 0 : data.image.paddedImageUrl) === null || _d === void 0 ? void 0 : _d.url) !== null && _e !== void 0 ? _e : (_f = data === null || data === void 0 ? void 0 : data.image.imageUrl) === null || _f === void 0 ? void 0 : _f.url) !== null && _g !== void 0 ? _g : '';
    // Show the news button if:
    // 1. We haven't opted in
    // 2. We have a feed, and we aren't showing the search widget.
    const showNewsButton = !isOptInPrefEnabled
        || feedV2 && !$web_common_loadTimeData__WEBPACK_IMPORTED_MODULE_10__.loadTimeData.getBoolean('featureFlagSearchWidget');
    // For some reason |createGlobalStyle| doesn't seem to work in Brave Core
    // To get the background blur effect looking nice, we need to set the body
    // background to black - unfortunately we can't do this in root HTML file
    // because we want to avoid the background flash effect.
    react__WEBPACK_IMPORTED_MODULE_3__.useEffect(() => {
        // Note: This is always black because this doesn't support light mode.
        document.body.style.backgroundColor = 'black';
    }, []);
    return isShowOnNTPPrefEnabled
        ? react__WEBPACK_IMPORTED_MODULE_3__.createElement(Container, null,
            showNewsButton && react__WEBPACK_IMPORTED_MODULE_3__.createElement(NewsButton, { onClick: scrollToNews },
                react__WEBPACK_IMPORTED_MODULE_3__.createElement(_brave_leo_react_icon__WEBPACK_IMPORTED_MODULE_1__["default"], { name: 'product-brave-news' }),
                (0,$web_common_locale__WEBPACK_IMPORTED_MODULE_0__.getLocale)("BRAVE_NEWS_NEWS_PEEK" /* S.BRAVE_NEWS_NEWS_PEEK */),
                react__WEBPACK_IMPORTED_MODULE_3__.createElement(_brave_leo_react_icon__WEBPACK_IMPORTED_MODULE_1__["default"], { name: 'carat-down' })),
            data && react__WEBPACK_IMPORTED_MODULE_3__.createElement(PeekingCard, { onClick: scrollToNews },
                react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", null,
                    react__WEBPACK_IMPORTED_MODULE_3__.createElement(_feed_ArticleMetaRow__WEBPACK_IMPORTED_MODULE_7__.MetaInfo, { article: data }),
                    react__WEBPACK_IMPORTED_MODULE_3__.createElement(_feed_Card__WEBPACK_IMPORTED_MODULE_8__.Title, null, data.title)),
                react__WEBPACK_IMPORTED_MODULE_3__.createElement(_feed_Card__WEBPACK_IMPORTED_MODULE_8__.SmallImage, { loading: 'eager', src: imageUrl })))
        : null;
}


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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJhdmVfY29tcG9uZW50c19icmF2ZV9uZXdzX2Jyb3dzZXJfcmVzb3VyY2VzX1BlZWtfdHN4LmNodW5rLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkRBQTZEO0FBQzdELHNFQUFzRTtBQUN0RSw0RUFBNEU7QUFDNUUsc0RBQXNEO0FBRVA7QUFDTjtBQUM4QztBQUN4RDtBQUN1QjtBQUNiO0FBQ0w7QUFDYTtBQUNLO0FBQ047QUFDUTtBQUV4RCxNQUFNLFVBQVUsR0FBRyx5REFBTSxDQUFDLE1BQU07OzthQUduQixvRUFBTyxDQUFDLENBQUMsSUFBSSxvRUFBTyxDQUFDLEVBQUU7OzttQkFHakIsbUVBQU0sQ0FBQyxDQUFDOzs7OztXQUtoQixrRUFBSyxDQUFDLEtBQUs7VUFDWixpRUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFROzs7Ozs7Ozs7U0FTdEIsb0VBQU8sQ0FBQyxDQUFDOzs7Ozs7a0JBTUEsbUVBQU0sQ0FBQyxVQUFVOzs7Ozs7Ozs7O0NBVWxDO0FBRUQsTUFBTSxXQUFXLEdBQUcsNkRBQU0sQ0FBQyxzREFBSSxDQUFDOzs7Ozs7OztTQVF2QixvRUFBTyxDQUFDLENBQUM7O0NBRWpCO0FBRUQsTUFBTSxTQUFTLEdBQUcsNERBQVM7Ozs7Ozs7O0NBUTFCLENBQUM7QUFFRixNQUFNLFNBQVMsR0FBRyw2REFBTSxDQUFDLHNEQUFTLENBQUM7Ozs7U0FJMUIsb0VBQU8sQ0FBQyxDQUFDOztlQUVILFNBQVM7Ozs7O0NBS3ZCO0FBRUQsTUFBTSxZQUFZLEdBQUcsR0FBRyxFQUFFO0lBQ3hCLE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxrREFBZSxFQUFFLENBQUM7SUFDMUQsSUFBSSxhQUFKLElBQUksdUJBQUosSUFBSSxDQUFFLGNBQWMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsQ0FBQztBQUM5QyxDQUFDO0FBRWMsU0FBUyxJQUFJOztJQUMxQixNQUFNLEVBQUUsTUFBTSxFQUFFLHNCQUFzQixFQUFFLGtCQUFrQixFQUFFLEdBQUcsNkRBQVksRUFBRTtJQUM3RSxNQUFNLEdBQUcsR0FBRyxZQUFNLGFBQU4sTUFBTSx1QkFBTixNQUFNLENBQUUsS0FBSywwQ0FBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDekQsTUFBTSxJQUFJLEdBQUcsT0FBQyxTQUFHLGFBQUgsR0FBRyx1QkFBSCxHQUFHLENBQUUsSUFBSSxtQ0FBSSxHQUFHLGFBQUgsR0FBRyx1QkFBSCxHQUFHLENBQUUsT0FBTyxDQUFDLDBDQUFFLElBQUk7SUFDOUMsTUFBTSxRQUFRLEdBQUcsc0JBQUksYUFBSixJQUFJLHVCQUFKLElBQUksQ0FBRSxLQUFLLENBQUMsY0FBYywwQ0FBRSxHQUFHLG1DQUFJLFVBQUksYUFBSixJQUFJLHVCQUFKLElBQUksQ0FBRSxLQUFLLENBQUMsUUFBUSwwQ0FBRSxHQUFHLG1DQUFJLEVBQUU7SUFFbkYsMkJBQTJCO0lBQzNCLHlCQUF5QjtJQUN6Qiw4REFBOEQ7SUFDOUQsTUFBTSxjQUFjLEdBQUcsQ0FBQyxrQkFBa0I7V0FDckMsTUFBTSxJQUFJLENBQUMsbUVBQVksQ0FBQyxVQUFVLENBQUMseUJBQXlCLENBQUM7SUFFbEUseUVBQXlFO0lBQ3pFLDBFQUEwRTtJQUMxRSx5RUFBeUU7SUFDekUsd0RBQXdEO0lBQ3hELDRDQUFlLENBQUMsR0FBRyxFQUFFO1FBQ25CLHNFQUFzRTtRQUN0RSxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUcsT0FBTyxDQUFDO0lBQ2hELENBQUMsRUFBRSxFQUFFLENBQUM7SUFFTixPQUFPLHNCQUFzQjtRQUMzQixDQUFDLENBQUMsaURBQUMsU0FBUztZQUNULGNBQWMsSUFBSSxpREFBQyxVQUFVLElBQUMsT0FBTyxFQUFFLFlBQVk7Z0JBQ2xELGlEQUFDLDZEQUFJLElBQUMsSUFBSSxFQUFDLG9CQUFvQixHQUFHO2dCQUNqQyw2REFBUyxxREFBd0I7Z0JBQ2xDLGlEQUFDLDZEQUFJLElBQUMsSUFBSSxFQUFDLFlBQVksR0FBRyxDQUNmO1lBQ1osSUFBSSxJQUFJLGlEQUFDLFdBQVcsSUFBQyxPQUFPLEVBQUUsWUFBWTtnQkFDekM7b0JBQ0UsaURBQUMsMERBQVEsSUFBQyxPQUFPLEVBQUUsSUFBSSxHQUFJO29CQUMzQixpREFBQyw2Q0FBSyxRQUFFLElBQUksQ0FBQyxLQUFLLENBQVMsQ0FDdkI7Z0JBQ04saURBQUMsa0RBQVUsSUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLEdBQUcsRUFBRSxRQUFRLEdBQUksQ0FDakMsQ0FDSjtRQUNaLENBQUMsQ0FBQyxJQUFJO0FBQ1YsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ3JJRCw2REFBNkQ7QUFDN0Qsc0VBQXNFO0FBQ3RFLDRFQUE0RTtBQUM1RSxzREFBc0Q7QUFDZjtBQUV2QyxpRUFBZSx5REFBTSxDQUFDLEdBQUc7Ozs7Ozs7O0NBUXhCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYnJhdmUtY29yZS8uL2NvbXBvbmVudHMvYnJhdmVfbmV3cy9icm93c2VyL3Jlc291cmNlcy9QZWVrLnRzeCIsIndlYnBhY2s6Ly9icmF2ZS1jb3JlLy4vY29tcG9uZW50cy9icmF2ZV9uZXdzL2Jyb3dzZXIvcmVzb3VyY2VzL1ZhcmlhYmxlcy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIzIFRoZSBCcmF2ZSBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuLy8gTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBmaWxlLFxuLy8gWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHBzOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uXG5cbmltcG9ydCB7IGdldExvY2FsZSB9IGZyb20gJyR3ZWItY29tbW9uL2xvY2FsZSc7XG5pbXBvcnQgSWNvbiBmcm9tICdAYnJhdmUvbGVvL3JlYWN0L2ljb24nO1xuaW1wb3J0IHsgY29sb3IsIGVmZmVjdCwgZm9udCwgcmFkaXVzLCBzcGFjaW5nIH0gZnJvbSAnQGJyYXZlL2xlby90b2tlbnMvY3NzL3ZhcmlhYmxlcyc7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkLCB7IGtleWZyYW1lcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IE5FV1NfRkVFRF9DTEFTUyB9IGZyb20gJy4vRmVlZCc7XG5pbXBvcnQgVmFyaWFibGVzIGZyb20gJy4vVmFyaWFibGVzJztcbmltcG9ydCB7IE1ldGFJbmZvIH0gZnJvbSAnLi9mZWVkL0FydGljbGVNZXRhUm93JztcbmltcG9ydCBDYXJkLCB7IFNtYWxsSW1hZ2UsIFRpdGxlIH0gZnJvbSAnLi9mZWVkL0NhcmQnO1xuaW1wb3J0IHsgdXNlQnJhdmVOZXdzIH0gZnJvbSAnLi9zaGFyZWQvQ29udGV4dCc7XG5pbXBvcnQgeyBsb2FkVGltZURhdGEgfSBmcm9tICckd2ViLWNvbW1vbi9sb2FkVGltZURhdGEnO1xuXG5jb25zdCBOZXdzQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcbiAgY3Vyc29yOiBwb2ludGVyO1xuXG4gIHBhZGRpbmc6ICR7c3BhY2luZy5tfSAke3NwYWNpbmcueGx9O1xuXG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogJHtyYWRpdXMubX07XG5cbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAzKTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDQwcHgpO1xuXG4gIGNvbG9yOiAke2NvbG9yLndoaXRlfTtcbiAgZm9udDogJHtmb250LmRlZmF1bHQuc2VtaWJvbGR9O1xuXG4gICYgPiBsZW8taWNvbltuYW1lPVwiY2FyYXQtZG93blwiXSB7XG4gICAgLS1sZW8taWNvbi1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTtcbiAgfVxuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogJHtzcGFjaW5nLm19O1xuXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMTUwbXMgZWFzZS1pbi1vdXQ7XG5cbiAgJjpmb2N1cy12aXNpYmxlIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJveC1zaGFkb3c6ICR7ZWZmZWN0LmZvY3VzU3RhdGV9O1xuICB9XG5cbiAgJjpob3ZlciB7XG4gICAgb3BhY2l0eTogMC45O1xuICB9XG5cbiAgJjphY3RpdmUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbmBcblxuY29uc3QgUGVla2luZ0NhcmQgPSBzdHlsZWQoQ2FyZClgXG4gIHdpZHRoOiA1NDBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEwKTtcbiAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMCk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0MHB4KTtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBnYXA6ICR7c3BhY2luZy5tfTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuYFxuXG5jb25zdCBhbmltYXRlSW4gPSBrZXlmcmFtZXNgXG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxNTAlKTtcbiAgfVxuXG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSk7XG4gIH1cbmA7XG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZChWYXJpYWJsZXMpYFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6ICR7c3BhY2luZy5tfTtcblxuICBhbmltYXRpb246ICR7YW5pbWF0ZUlufSAwLjFzIGVhc2UtaW4tb3V0IDE7XG5cbiAgLy8gQXMgd2Ugc2Nyb2xsIGRvd24gdGhlIFBlZWtpbmdDYXJkIHNob3VsZCBmYWRlIG91dC4gQXQgMjAlIHNjcm9sbCBpdCBzaG91bGRcbiAgLy8gYmUgY29tcGxldGVseSBpbnZpc2libGUuXG4gIG9wYWNpdHk6IGNhbGMoMSAtICh2YXIoLS1udHAtc2Nyb2xsLXBlcmNlbnQpICogNSkpO1xuYFxuXG5jb25zdCBzY3JvbGxUb05ld3MgPSAoKSA9PiB7XG4gIGNvbnN0IG5ld3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtORVdTX0ZFRURfQ0xBU1N9YClcbiAgbmV3cz8uc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogJ3Ntb290aCcgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGVlaygpIHtcbiAgY29uc3QgeyBmZWVkVjIsIGlzU2hvd09uTlRQUHJlZkVuYWJsZWQsIGlzT3B0SW5QcmVmRW5hYmxlZCB9ID0gdXNlQnJhdmVOZXdzKClcbiAgY29uc3QgdG9wID0gZmVlZFYyPy5pdGVtcz8uZmluZChhID0+IGEuYXJ0aWNsZSB8fCBhLmhlcm8pXG4gIGNvbnN0IGRhdGEgPSAodG9wPy5oZXJvID8/IHRvcD8uYXJ0aWNsZSk/LmRhdGFcbiAgY29uc3QgaW1hZ2VVcmwgPSBkYXRhPy5pbWFnZS5wYWRkZWRJbWFnZVVybD8udXJsID8/IGRhdGE/LmltYWdlLmltYWdlVXJsPy51cmwgPz8gJydcblxuICAvLyBTaG93IHRoZSBuZXdzIGJ1dHRvbiBpZjpcbiAgLy8gMS4gV2UgaGF2ZW4ndCBvcHRlZCBpblxuICAvLyAyLiBXZSBoYXZlIGEgZmVlZCwgYW5kIHdlIGFyZW4ndCBzaG93aW5nIHRoZSBzZWFyY2ggd2lkZ2V0LlxuICBjb25zdCBzaG93TmV3c0J1dHRvbiA9ICFpc09wdEluUHJlZkVuYWJsZWRcbiAgICB8fCBmZWVkVjIgJiYgIWxvYWRUaW1lRGF0YS5nZXRCb29sZWFuKCdmZWF0dXJlRmxhZ1NlYXJjaFdpZGdldCcpXG5cbiAgLy8gRm9yIHNvbWUgcmVhc29uIHxjcmVhdGVHbG9iYWxTdHlsZXwgZG9lc24ndCBzZWVtIHRvIHdvcmsgaW4gQnJhdmUgQ29yZVxuICAvLyBUbyBnZXQgdGhlIGJhY2tncm91bmQgYmx1ciBlZmZlY3QgbG9va2luZyBuaWNlLCB3ZSBuZWVkIHRvIHNldCB0aGUgYm9keVxuICAvLyBiYWNrZ3JvdW5kIHRvIGJsYWNrIC0gdW5mb3J0dW5hdGVseSB3ZSBjYW4ndCBkbyB0aGlzIGluIHJvb3QgSFRNTCBmaWxlXG4gIC8vIGJlY2F1c2Ugd2Ugd2FudCB0byBhdm9pZCB0aGUgYmFja2dyb3VuZCBmbGFzaCBlZmZlY3QuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gTm90ZTogVGhpcyBpcyBhbHdheXMgYmxhY2sgYmVjYXVzZSB0aGlzIGRvZXNuJ3Qgc3VwcG9ydCBsaWdodCBtb2RlLlxuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2JsYWNrJztcbiAgfSwgW10pXG5cbiAgcmV0dXJuIGlzU2hvd09uTlRQUHJlZkVuYWJsZWRcbiAgICA/IDxDb250YWluZXI+XG4gICAgICB7c2hvd05ld3NCdXR0b24gJiYgPE5ld3NCdXR0b24gb25DbGljaz17c2Nyb2xsVG9OZXdzfT5cbiAgICAgICAgPEljb24gbmFtZT0ncHJvZHVjdC1icmF2ZS1uZXdzJyAvPlxuICAgICAgICB7Z2V0TG9jYWxlKFMuQlJBVkVfTkVXU19ORVdTX1BFRUspfVxuICAgICAgICA8SWNvbiBuYW1lPSdjYXJhdC1kb3duJyAvPlxuICAgICAgPC9OZXdzQnV0dG9uPn1cbiAgICAgIHtkYXRhICYmIDxQZWVraW5nQ2FyZCBvbkNsaWNrPXtzY3JvbGxUb05ld3N9PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxNZXRhSW5mbyBhcnRpY2xlPXtkYXRhfSAvPlxuICAgICAgICAgIDxUaXRsZT57ZGF0YS50aXRsZX08L1RpdGxlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPFNtYWxsSW1hZ2UgbG9hZGluZz0nZWFnZXInIHNyYz17aW1hZ2VVcmx9IC8+XG4gICAgICA8L1BlZWtpbmdDYXJkPn1cbiAgICA8L0NvbnRhaW5lcj5cbiAgICA6IG51bGxcbn1cbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMyBUaGUgQnJhdmUgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbi8vIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXMgZmlsZSxcbi8vIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwczovL21vemlsbGEub3JnL01QTC8yLjAvLlxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgc3R5bGVkLmRpdmBcbiAgLS1ibi10ZXh0LWJhc2U6IDI1NSwgMjU1LCAyNTU7XG4gIC0tYm4tZ2xhc3MtY29udGFpbmVyOiByZ2JhKDI1NSwyNTUsMjU1LDAuMDUpO1xuICAtLWJuLWdsYXNzLTEwOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gIC0tYm4tZ2xhc3MtMjU6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7XG4gIC0tYm4tZ2xhc3MtNTA6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgLS1ibi1nbGFzcy03MDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xuICAtLWJuLWdsYXNzLTEwMDogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcbmBcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==