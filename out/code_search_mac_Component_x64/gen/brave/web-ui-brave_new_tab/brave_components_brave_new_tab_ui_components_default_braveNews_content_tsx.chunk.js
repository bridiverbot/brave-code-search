export const __webpack_esm_id__ = "brave_components_brave_new_tab_ui_components_default_braveNews_content_tsx";
export const __webpack_esm_ids__ = ["brave_components_brave_new_tab_ui_components_default_braveNews_content_tsx"];
export const __webpack_esm_modules__ = {

/***/ "../../../brave/components/brave_new_tab_ui/components/default/braveNews/content.tsx"
/*!*******************************************************************************************!*\
  !*** ./components/brave_new_tab_ui/components/default/braveNews/content.tsx + 17 modules ***!
  \*******************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ BraveNewsContent)
});
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external ["//resources/brave/react.bundle.js","React"]
var react_bundle_js_React_ = __webpack_require__("react");
// EXTERNAL MODULE: ./node_modules/.pnpm/react-redux@8.1.3_@types+react-dom@19.2.3_@types+react@19.2.17__@types+react@19.2.17_re_2ef8c0d6f8c4a5bf336c88e0409693bf/node_modules/react-redux/es/index.js + 28 modules
var es = __webpack_require__("../../../brave/node_modules/.pnpm/react-redux@8.1.3_@types+react-dom@19.2.3_@types+react@19.2.17__@types+react@19.2.17_re_2ef8c0d6f8c4a5bf336c88e0409693bf/node_modules/react-redux/es/index.js");
// EXTERNAL MODULE: ./components/brave_news/browser/resources/shared/Context.tsx + 2 modules
var Context = __webpack_require__("../../../brave/components/brave_news/browser/resources/shared/Context.tsx");
// EXTERNAL MODULE: ./components/brave_new_tab_ui/actions/today_actions.ts
var today_actions = __webpack_require__("../../../brave/components/brave_new_tab_ui/actions/today_actions.ts");
// EXTERNAL MODULE: ./components/brave_new_tab_ui/components/default/braveNews/index.tsx + 2 modules
var braveNews = __webpack_require__("../../../brave/components/brave_new_tab_ui/components/default/braveNews/index.tsx");
// EXTERNAL MODULE: ./node_modules/.pnpm/styled-components@6.4.3_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/styled-components/dist/styled-components.esm.js + 7 modules
var styled_components_esm = __webpack_require__("../../../brave/node_modules/.pnpm/styled-components@6.4.3_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/styled-components/dist/styled-components.esm.js");
// EXTERNAL MODULE: ./components/brave_new_tab_ui/components/default/braveNews/default.ts
var braveNews_default = __webpack_require__("../../../brave/components/brave_new_tab_ui/components/default/braveNews/default.ts");
;// ./components/brave_new_tab_ui/components/default/braveNews/cardSizes.ts
// Copyright (c) 2020 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.


const Large = (0,styled_components_esm["default"])((0,braveNews_default.Block)).attrs({ as: 'article' }).withConfig({ displayName: "Large", componentId: "sc-hwpn8u" }) `
  padding: 0;
`;
const Medium = (0,styled_components_esm["default"])((0,braveNews_default.Block)).attrs({ as: 'article' }).withConfig({ displayName: "Medium", componentId: "sc-fvrjjb" }) `
  padding: 0;
`;
const Small = (0,styled_components_esm["default"])((0,braveNews_default.Block)).attrs({ as: 'article' }).withConfig({ displayName: "Small", componentId: "sc-1kihw6z" }) `
  padding: 0;
  width: 100%;
  min-height: 310px;
`;
const DealsCard = (0,styled_components_esm["default"])((0,braveNews_default.Block)).withConfig({ displayName: "DealsCard", componentId: "sc-js0tci" }) `
`;
const Content = (0,styled_components_esm["default"])('div').withConfig({ displayName: "Content", componentId: "sc-1n5dxwx" }) `
  box-sizing: border-box;
  padding: 25px 35px;
  ${Small} & {
    padding: 20px 28px;
  }
`;
const ImageFrame = (0,styled_components_esm["default"])('figure').withConfig({ displayName: "ImageFrame", componentId: "sc-64ru76" }) `
  opacity: ${p => p.isImageLoaded ? 1 : 0};
  margin: 0;
  width: 100%;
  position: relative;
  padding-top: 67%;
  display: block;
  height: auto;
  overflow: hidden;
  transition: opacity 240ms ease-out;
`;
const ListImageFrame = (0,styled_components_esm["default"])(ImageFrame).withConfig({ displayName: "ListImageFrame", componentId: "sc-1f9pnas" }) `
  height: 100%;
  padding-top: 0;
`;
const cardSizes_Image = (0,styled_components_esm["default"])('img').withConfig({ displayName: "Image", componentId: "sc-14g8080" }) `
  box-sizing: border-box;
  display: block;
  position: absolute;
  border: none;
  background: none;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  background-color: rgba(188,188,188,0.2);
`;
const Heading = (0,styled_components_esm["default"])((0,braveNews_default.Heading)).withConfig({ displayName: "Heading", componentId: "sc-o51rf6" }) `
  font-weight: 600;
  a {
    display: block;
    color: inherit;
    text-decoration: none;
  }
`;
const PublisherHeading = (0,styled_components_esm["default"])((0,braveNews_default.Heading)).withConfig({ displayName: "PublisherHeading", componentId: "sc-1hm0947" }) `
  font-weight: 600;
`;
const Text = (0,styled_components_esm["default"])((0,braveNews_default.Text)).withConfig({ displayName: "Text", componentId: "sc-r3jd88" }) `
  font-family: ${p => p.theme.fontFamily.heading};
  font-size: 18px;
  line-height: 25px;
  font-weight: 600;

  a {
    display: block;
    color: inherit;
    text-decoration: none;
  }
`;
const Time = (0,styled_components_esm["default"])((0,braveNews_default.Time)).withConfig({ displayName: "Time", componentId: "sc-101dqne" }) `
  ${Large} & {
    margin-top: 8px;
  }
`;
const Source = (0,styled_components_esm["default"])('div').withConfig({ displayName: "Source", componentId: "sc-11pbvq8" }) `
  margin: 10px 0 0 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const Publisher = (0,styled_components_esm["default"])('div').withConfig({ displayName: "Publisher", componentId: "sc-1ahlb0x" }) `
  box-sizing: border-box;
  font: 500 14px ${p => p.theme.fontFamily.heading};
  color: #fff;
`;
const PromotedLabel = (0,styled_components_esm["default"])('a').withConfig({ displayName: "PromotedLabel", componentId: "sc-9fsyzq" }) `
  border-radius: 4px;
  background: #495057;
  color: rgba(255, 255, 255, .8);
  padding: 4px 8px;
  font: 400 12px ${p => p.theme.fontFamily.heading};
  display: flex;
  flex-direction: row;
  gap: 5px;
`;
const PromotedIcon = (0,styled_components_esm["default"])('div').withConfig({ displayName: "PromotedIcon", componentId: "sc-13juy0w" }) `
  width: 16px;
  height: 9px;
  color: inherit;
  svg {
    width: 100%;
    height: 100%;
    color: inherit;
    fill: currentColor;
  }
`;
const ContainerForTwo = (0,styled_components_esm["default"])('div').withConfig({ displayName: "ContainerForTwo", componentId: "sc-mkcdgw" }) `
  width: 680px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
`;
const DealsCategory = (0,styled_components_esm["default"])('h3').withConfig({ displayName: "DealsCategory", componentId: "sc-149sdkl" }) `
  margin: 0;
  font: 600 18px ${p => p.theme.fontFamily.heading};
  color: white;
`;
const DealsList = (0,styled_components_esm["default"])('div').withConfig({ displayName: "DealsList", componentId: "sc-1egsapf" }) `
  margin-top: 24px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
`;
const DealItem = (0,styled_components_esm["default"])('a').withConfig({ displayName: "DealItem", componentId: "sc-olx7n8" }) `
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  gap: 8px;
`;
const DealDescription = (0,styled_components_esm["default"])(Time).withConfig({ displayName: "DealDescription", componentId: "sc-398wka" }) `
  margin: 0;
`;

;// ./components/brave_new_tab_ui/components/default/braveNews/useReadArticleClickHandler.ts
// Copyright (c) 2020 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.

function useReadArticleClickHandler(action, payloadData) {
    return react_bundle_js_React_.useCallback((e) => {
        e.preventDefault();
        const shouldOpenInNewTab = detectShouldOpenInNewTab(e);
        action({ ...payloadData, openInNewTab: shouldOpenInNewTab });
    }, [action, payloadData.item]);
}
function detectShouldOpenInNewTab(e) {
    const openInNewTab = e.ctrlKey || e.metaKey;
    return openInNewTab;
}

;// ./components/brave_new_tab_ui/components/default/braveNews/useScrollIntoView.ts
// Copyright (c) 2020 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.

function useScrollIntoView(shouldScrollIntoView) {
    // If we need to scroll the article in to view after render,
    // do so after the element has been mounted.
    const cardRef = react_bundle_js_React_.useRef(null);
    react_bundle_js_React_.useEffect(() => {
        if (shouldScrollIntoView && cardRef.current) {
            cardRef.current.scrollIntoView({ block: 'center' });
        }
        else if (shouldScrollIntoView) {
            console.warn('Brave News: attempted to scroll to a card that was not rendered');
        }
    }, [cardRef.current]); // only re-run if the ref element changesa
    return [cardRef];
}
function userScrollIntoViewAfterImagesLoaded(shouldScrollIntoView) {
    // If we need to scroll the article in to view after render,
    // do so after the image has been loaded. Assume that all the other
    // previous images are loaded and the articles are occupying
    // the size they would do with images.
    const cardRef = react_bundle_js_React_.useRef(null);
    const hasScrolled = react_bundle_js_React_.useRef(false);
    const hasImageLoaded = react_bundle_js_React_.useRef(false);
    const scrollIntoViewConditionally = function () {
        if (shouldScrollIntoView && !hasScrolled.current && hasImageLoaded.current && cardRef.current) {
            hasScrolled.current = true;
            cardRef.current.scrollIntoView({ block: 'center' });
        }
    };
    const onImageLoaded = () => {
        hasImageLoaded.current = true;
        requestAnimationFrame(() => {
            scrollIntoViewConditionally();
        });
    };
    react_bundle_js_React_.useEffect(() => {
        scrollIntoViewConditionally();
    }, []); // empty array so only runs on first render
    return [cardRef, onImageLoaded];
}

;// ./components/brave_new_tab_ui/components/default/braveNews/cards/CardImage.tsx
// Copyright (c) 2020 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.


function CardImage(props) {
    var _a;
    const imageUrl = `chrome://image?url=${encodeURIComponent((_a = props.imageUrl) !== null && _a !== void 0 ? _a : '')}`;
    const [isImageLoaded, setIsImageLoaded] = react_bundle_js_React_.useState(false);
    react_bundle_js_React_.useEffect(() => {
        if (imageUrl) {
            const img = new Image();
            let shouldCancel = false;
            img.addEventListener('load', () => {
                var _a;
                if (!shouldCancel) {
                    setIsImageLoaded(true);
                    (_a = props.onLoaded) === null || _a === void 0 ? void 0 : _a.call(props);
                }
            });
            img.src = imageUrl;
            return () => { shouldCancel = true; };
        }
        return () => { };
    }, [imageUrl]);
    const Frame = props.list ? ListImageFrame : ImageFrame;
    return (react_bundle_js_React_.createElement(Frame, { "data-source": props.imageUrl, isImageLoaded: isImageLoaded },
        react_bundle_js_React_.createElement(cardSizes_Image, { src: imageUrl })));
}
function CardImageFromFeedItem(props) {
    react_bundle_js_React_.useEffect(() => {
        if (!props.data.image.imageUrl && !props.data.image.paddedImageUrl) {
            // Shouldn't happen since backend filters out items
            // with no image.
            // It can happen for direct-feed items, and we just don't display the
            // image.
            // This is in a useEffect so it does not log every render.
            console.warn('Brave News found item with no image', props.data.url.url);
        }
    }, [props.data.image.imageUrl, props.data.image.paddedImageUrl]);
    const imageUrl = react_bundle_js_React_.useMemo(() => {
        var _a, _b;
        if ((_a = props.data.image.imageUrl) === null || _a === void 0 ? void 0 : _a.url) {
            return props.data.image.imageUrl.url;
        }
        if ((_b = props.data.image.paddedImageUrl) === null || _b === void 0 ? void 0 : _b.url) {
            return props.data.image.paddedImageUrl.url;
        }
        return '';
    }, [props.data.image.imageUrl, props.data.image.paddedImageUrl, props.data.description]);
    const { data, ...baseProps } = props;
    if (imageUrl) {
        return (react_bundle_js_React_.createElement(CardImage, { ...baseProps, imageUrl: imageUrl }));
    }
    return null;
}

// EXTERNAL MODULE: ./components/common/locale.ts + 1 modules
var locale = __webpack_require__("../../../brave/components/common/locale.ts");
;// ./components/brave_new_tab_ui/components/default/braveNews/cards/PublisherMeta.tsx
// Copyright (c) 2020 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.



// TODO(petemill): Make this shared and have WidgetMenu use it,
// so we're not duplicating styles, functionality and accessibility.
const isOpenClassName = 'is-open';
const PublisherMeta = (0,styled_components_esm["default"])('div').withConfig({ displayName: "PublisherMeta", componentId: "sc-16qaafu" }) `
  width: fit-content;
`;
const Trigger = (0,styled_components_esm["default"])('button').withConfig({ displayName: "Trigger", componentId: "sc-w8p4yu" }) `
  appearance: none;
  display: block;
  cursor: pointer;
  position: relative;
  margin: 0;
  border: none;
  border-radius: 100px;
  padding: 0;
  background: none;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  outline: none;
  color: inherit;
  font-weight: inherit;

  // Negative margin is ok here because we're doing a
  // "ghost" outline, but we do need to take care not to overlap any sibling
  // elements.
  --ghost-padding-v: max(4.7%, 5px);
  --ghost-padding-h: max(9%, 12px);
  padding: var(--ghost-padding-v) var(--ghost-padding-h);
  margin: calc(var(--ghost-padding-v) * -1 - 1px) calc(var(--ghost-padding-h) * -1 - 1px);
  border: solid 1px transparent;
  overflow: visible;

  &.${isOpenClassName},
  &:focus-visible,
  &:hover,
  &:active {
    border-color: inherit;
  }

  &:active {
    background-color: rgba(255, 255, 255, .2);
  }
`;
const PublisherMeta_Text = (0,styled_components_esm["default"])('span').withConfig({ displayName: "Text", componentId: "sc-1qe1hfj" }) `
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  font-family: ${p => p.theme.fontFamily.heading};
`;
const Menu = (0,styled_components_esm["default"])('ul').withConfig({ displayName: "Menu", componentId: "sc-kctdw7" }) `
  list-style: none;
  list-style-type: none;
  margin: 0;
  position: absolute;
  width: max-content;
  min-width: 166px;
  bottom: 114%;
  left: 0;
  border-radius: 4px;
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.3);
  padding: 8px 0;
  background-color: ${p => p.theme.color.contextMenuBackground};
  color:  ${p => p.theme.color.contextMenuForeground};
`;
const MenuItem = (0,styled_components_esm["default"])('li').withConfig({ displayName: "MenuItem", componentId: "sc-zvmg9e" }) `
  list-style-type: none;
  padding: 10px 18px;
  outline: none;
  font-size: 12px;

  &:hover,
  &:focus {
    background-color: ${p => p.theme.color.contextMenuHoverBackground};
    color: ${p => p.theme.color.contextMenuHoverForeground};
  }

  &:active {
    // TODO(petemill): Theme doesn't have a context menu interactive color,
    // make one and don't make entire element opaque.
    opacity: .8;
  }

  &:focus-visible {
    outline: solid 1px ${p => p.theme.color.brandBrave};
  }
`;
function PublisherMetaComponent(props) {
    const [isMenuOpen, setIsMenuOpen] = react_bundle_js_React_.useState(false);
    const triggerElementRef = react_bundle_js_React_.useRef(null);
    const onClickCloseMenu = react_bundle_js_React_.useCallback((e) => {
        const triggerElement = triggerElementRef.current;
        if (!triggerElement || triggerElement.contains(e.target)) {
            return;
        }
        setIsMenuOpen(false);
    }, [setIsMenuOpen]);
    const onKeyDown = react_bundle_js_React_.useCallback((e) => {
        if (e.defaultPrevented) {
            return;
        }
        if (e.key === 'Escape') {
            setIsMenuOpen(false);
        }
    }, [setIsMenuOpen]);
    const toggleMenu = react_bundle_js_React_.useCallback((e) => {
        e.stopPropagation();
        e.preventDefault();
        setIsMenuOpen((value) => !value);
    }, [setIsMenuOpen]);
    // Setup or remote event listeners when opens or closes
    // or this element is removed.
    react_bundle_js_React_.useEffect(() => {
        const removeEventListeners = () => {
            window.removeEventListener('click', onClickCloseMenu);
            window.removeEventListener('keydown', onKeyDown);
        };
        if (!isMenuOpen) {
            removeEventListeners();
        }
        else {
            // TODO(petemill): set element focus when using keyboard arrows.
            window.addEventListener('click', onClickCloseMenu);
            window.addEventListener('keydown', onKeyDown);
        }
        return removeEventListeners;
    }, [isMenuOpen]);
    const onClickDisablePublisher = react_bundle_js_React_.useCallback(() => {
        props.onSetPublisherPref(props.publisher.publisherId, false);
    }, [props.publisher, props.onSetPublisherPref]);
    return (react_bundle_js_React_.createElement(PublisherMeta, null,
        react_bundle_js_React_.createElement(Trigger, { className: isMenuOpen ? isOpenClassName : undefined, onClick: toggleMenu, ref: triggerElementRef, "aria-haspopup": 'true', "aria-expanded": isMenuOpen ? 'true' : 'false' },
            react_bundle_js_React_.createElement(PublisherMeta_Text, null, props.publisher.publisherName),
            isMenuOpen &&
                react_bundle_js_React_.createElement(Menu, { role: 'menu' },
                    react_bundle_js_React_.createElement(MenuItem, { role: 'menuitem', tabIndex: 0, onClick: onClickDisablePublisher }, (0,locale.formatLocale)("BRAVE_NEWS_HIDE_CONTENT_FROM" /* S.BRAVE_NEWS_HIDE_CONTENT_FROM */, {
                        $1: props.publisher.publisherName
                    }))))));
}

;// ./components/brave_new_tab_ui/components/default/braveNews/cards/_articles/cardArticleLarge.tsx
// Copyright (c) 2020 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.






const LargeArticle = react_bundle_js_React_.forwardRef(function (props, forwardedRef) {
    var _a;
    const { publisher, item } = props;
    const [cardRef] = useScrollIntoView(props.shouldScrollIntoView || false);
    const innerRef = react_bundle_js_React_.useRef(null);
    const data = (_a = item.article) === null || _a === void 0 ? void 0 : _a.data;
    const onClick = useReadArticleClickHandler(props.onReadFeedItem, { item });
    react_bundle_js_React_.useEffect(() => {
        if (!innerRef.current) {
            return;
        }
        // Pass ref to parent
        if (forwardedRef) {
            if (typeof forwardedRef === 'function') {
                forwardedRef(innerRef.current);
            }
            else {
                // @ts-expect-error
                // Ref.current is meant to be readonly, but we can ignore that.
                ref.current = newRef;
            }
        }
    }, [innerRef.current]);
    if (!data) {
        return null;
    }
    // TODO(petemill): Avoid nested links
    // `ref as any` due to https://github.com/DefinitelyTyped/DefinitelyTyped/issues/28884
    return (react_bundle_js_React_.createElement(Large, { "data-score": data.score, ref: innerRef },
        react_bundle_js_React_.createElement("a", { onClick: onClick, href: data.url.url, ref: cardRef },
            react_bundle_js_React_.createElement(CardImageFromFeedItem, { data: data }),
            react_bundle_js_React_.createElement(Content, null,
                react_bundle_js_React_.createElement(Heading, null, data.title),
                react_bundle_js_React_.createElement(Time, null, data.relativeTimeDescription),
                publisher &&
                    react_bundle_js_React_.createElement(Source, null,
                        react_bundle_js_React_.createElement(Publisher, null,
                            react_bundle_js_React_.createElement(PublisherMetaComponent, { publisher: publisher, onSetPublisherPref: props.onSetPublisherPref })))))));
});
const CardSingleArticleLarge = react_bundle_js_React_.forwardRef(function (props, ref) {
    // no full content no render®
    if (props.content.length === 0) {
        return null;
    }
    return (react_bundle_js_React_.createElement(react_bundle_js_React_.Fragment, null, props.content.map((item, index) => {
        var _a;
        const key = `card-key-${index}`;
        const data = (_a = item.article) === null || _a === void 0 ? void 0 : _a.data;
        // If there is a missing item, return nothing
        if (!data) {
            return (react_bundle_js_React_.createElement(react_bundle_js_React_.Fragment, { key: key }));
        }
        const shouldScrollIntoView = (props.articleToScrollTo &&
            (props.articleToScrollTo.url.url === data.url.url));
        const publisher = props.publishers[data.publisherId];
        return (react_bundle_js_React_.createElement(LargeArticle, { ref: ref, key: key, publisher: publisher, item: item, shouldScrollIntoView: shouldScrollIntoView, onReadFeedItem: props.onReadFeedItem, onSetPublisherPref: props.onSetPublisherPref }));
    })));
});
/* harmony default export */ const cardArticleLarge = (CardSingleArticleLarge);

// EXTERNAL MODULE: ./node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/react/button.js + 1 modules
var react_button = __webpack_require__("../../../brave/node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/react/button.js");
// EXTERNAL MODULE: ./components/brave_new_tab_ui/components/default/braveNews/cardIntro.ts
var cardIntro = __webpack_require__("../../../brave/components/brave_new_tab_ui/components/default/braveNews/cardIntro.ts");
;// ./components/brave_new_tab_ui/components/default/braveNews/cards/cardError.tsx
// Copyright (c) 2020 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.





const cardError_Content = (0,styled_components_esm["default"])('div').withConfig({ displayName: "Content", componentId: "sc-19gl7zj" }) `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const cardError_Heading = (0,styled_components_esm["default"])('h3').withConfig({ displayName: "Heading", componentId: "sc-6lra14" }) `
  margin: 16px 0;
  font-weight: 600;
  font-size: 20px;
`;
const Graphic = (0,styled_components_esm["default"])('div').withConfig({ displayName: "Graphic", componentId: "sc-1jkp55q" }) `
  width: 64px;
  height: 46px;
`;
const Action = (0,styled_components_esm["default"])('div').withConfig({ displayName: "Action", componentId: "sc-1nwfzcc" }) `
  padding-top: 20px;
`;
function Icon() {
    return (react_bundle_js_React_.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 64 46' },
        react_bundle_js_React_.createElement("path", { fill: '#F0F2FF', fillRule: 'evenodd', d: 'M49.67 46H13.33C5.36 46 0 41.32 0 34.37c0-5.45 3.08-10.33 7.84-12.74l-.02-.84C7.82 9.69 16.92.67 28.1.67a20.3 20.3 0 0118.37 11.65c9.74.4 17.54 8.4 17.54 18.17C64 39.33 57.84 46 49.67 46zm-3.98-28.37c-.24 0-.47.02-.7.05-1.24.14-2.4-.6-2.81-1.77A14.94 14.94 0 0028.08 6a14.88 14.88 0 00-14.92 14.79c0 .68.06 1.37.18 2.11a2.67 2.67 0 01-1.8 2.96 8.95 8.95 0 00-6.2 8.5c0 5.85 6.12 6.3 8 6.3h36.33c4.47 0 9-3.5 9-10.17 0-7.1-5.83-12.86-12.98-12.86zM40 35.33c-.68 0-1.37-.26-1.89-.78-.05-.04-2.06-1.88-6.11-1.88-4.05 0-6.06 1.84-6.14 1.91-1.07 1-2.75.97-3.76-.07a2.65 2.65 0 01.01-3.73c.36-.35 3.63-3.45 9.89-3.45 6.26 0 9.53 3.1 9.89 3.45A2.66 2.66 0 0140 35.33zm-5.33-16H40v5.34h-5.33v-5.34zm-10.67 0h5.33v5.34H24v-5.34z', clipRule: 'evenodd' })));
}
function UnidealMessageCard(props) {
    return (react_bundle_js_React_.createElement(cardIntro.Intro, null,
        react_bundle_js_React_.createElement(cardError_Content, null,
            react_bundle_js_React_.createElement(Graphic, null,
                react_bundle_js_React_.createElement(Icon, null)),
            react_bundle_js_React_.createElement(cardError_Heading, null, props.heading),
            react_bundle_js_React_.createElement(cardIntro.Paragraph, null, props.message),
            !!props.actionLabel && !!props.onActionClick &&
                react_bundle_js_React_.createElement(Action, null,
                    react_bundle_js_React_.createElement(react_button["default"], { onClick: props.onActionClick }, props.actionLabel)))));
}
function CardError(props) {
    return (react_bundle_js_React_.createElement(UnidealMessageCard, { heading: (0,locale.getLocale)("BRAVE_NEWS_ERROR_HEADING" /* S.BRAVE_NEWS_ERROR_HEADING */), message: (0,locale.getLocale)("BRAVE_NEWS_ERROR_MESSAGE" /* S.BRAVE_NEWS_ERROR_MESSAGE */), actionLabel: (0,locale.getLocale)("BRAVE_NEWS_ERROR_ACTION_LABEL" /* S.BRAVE_NEWS_ERROR_ACTION_LABEL */), onActionClick: props.onRefresh }));
}

// EXTERNAL MODULE: ./components/brave_new_tab_ui/components/default/braveNews/cards/cardLoading.tsx + 1 modules
var cardLoading = __webpack_require__("../../../brave/components/brave_new_tab_ui/components/default/braveNews/cards/cardLoading.tsx");
;// ./components/brave_new_tab_ui/components/default/braveNews/cards/cardNoContent.tsx
// Copyright (c) 2022 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.



function CardNoContent(props) {
    return (react_bundle_js_React_.createElement(UnidealMessageCard, { heading: (0,locale.getLocale)("BRAVE_NEWS_NO_CONTENT_HEADING" /* S.BRAVE_NEWS_NO_CONTENT_HEADING */), message: (0,locale.getLocale)("BRAVE_NEWS_NO_CONTENT_MESSAGE" /* S.BRAVE_NEWS_NO_CONTENT_MESSAGE */), actionLabel: (0,locale.getLocale)("BRAVE_NEWS_NO_CONTENT_ACTION_LABEL" /* S.BRAVE_NEWS_NO_CONTENT_ACTION_LABEL */), onActionClick: props.onCustomize }));
}

// EXTERNAL MODULE: ./components/brave_news/browser/resources/shared/api.ts
var api = __webpack_require__("../../../brave/components/brave_news/browser/resources/shared/api.ts");
;// ./components/brave_new_tab_ui/components/default/braveNews/cards/_articles/cardArticleMedium.tsx
// Copyright (c) 2020 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.






function MediumArticle(props) {
    var _a;
    const { publisher, item } = props;
    const [cardRef] = useScrollIntoView(props.shouldScrollIntoView || false);
    const onClick = useReadArticleClickHandler(props.onReadFeedItem, {
        item
    });
    const data = (_a = item.article) === null || _a === void 0 ? void 0 : _a.data;
    if (!data) {
        return null;
    }
    return (react_bundle_js_React_.createElement(Small, { "data-score": data.score },
        react_bundle_js_React_.createElement("a", { onClick: onClick, href: data.url.url, ref: cardRef },
            react_bundle_js_React_.createElement(CardImageFromFeedItem, { data: data }),
            react_bundle_js_React_.createElement(Content, null,
                react_bundle_js_React_.createElement(Text, null,
                    data.title,
                    react_bundle_js_React_.createElement(Time, null, data.relativeTimeDescription),
                    publisher &&
                        react_bundle_js_React_.createElement(Publisher, null,
                            react_bundle_js_React_.createElement(PublisherMetaComponent, { publisher: publisher, onSetPublisherPref: props.onSetPublisherPref })))))));
}
function CardSingleArticleMedium(props) {
    const { content } = props;
    // no full content no render®
    if (content.length !== 2) {
        return null;
    }
    return (react_bundle_js_React_.createElement(ContainerForTwo, null, content.map((item, index) => {
        var _a;
        const data = (_a = item.article) === null || _a === void 0 ? void 0 : _a.data;
        if (!data) {
            return (react_bundle_js_React_.createElement(react_bundle_js_React_.Fragment, { key: index }));
        }
        const shouldScrollIntoView = props.articleToScrollTo && (props.articleToScrollTo.url.url === data.url.url);
        const publisher = props.publishers[data.publisherId];
        return (react_bundle_js_React_.createElement(MediumArticle, { key: index, publisher: publisher, item: item, onReadFeedItem: props.onReadFeedItem, onSetPublisherPref: props.onSetPublisherPref, shouldScrollIntoView: shouldScrollIntoView }));
    })));
}

;// ./components/brave_new_tab_ui/components/default/braveNews/cards/categoryGroup/style.ts
// Copyright (c) 2020 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.


const BrandedList = (0,styled_components_esm["default"])((0,braveNews_default.Block)).withConfig({ displayName: "BrandedList", componentId: "sc-l7rd4" }) ``;
const List = (0,styled_components_esm["default"])('ul').withConfig({ displayName: "List", componentId: "sc-zhxm2c" }) `
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  list-style: none;
`;
const ListItem = (0,styled_components_esm["default"])('li').withConfig({ displayName: "ListItem", componentId: "sc-1a24v6" }) `
  margin-bottom: 24px;

  a {
    text-decoration: none;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 50px;
  }
`;
const style_Content = (0,styled_components_esm["default"])('div').withConfig({ displayName: "Content", componentId: "sc-hat0x" }) `
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const ListItemImageFrame = (0,styled_components_esm["default"])('div').withConfig({ displayName: "ListItemImageFrame", componentId: "sc-10u7yvd" }) `
  flex: 0 0 100px;
  height: 100px;
`;
const style_Image = (0,styled_components_esm["default"])((0,braveNews_default.Image)).withConfig({ displayName: "Image", componentId: "sc-13ct2wg" }) `
  margin: auto;
  object-fit: cover;
  width: 100px;
  height: 100px;
  border-radius: 8px;
  background-color: rgba(188,188,188,0.2);
`;
const Title = (0,styled_components_esm["default"])((0,braveNews_default.Heading)).withConfig({ displayName: "Title", componentId: "sc-1o0wejl" }) `
  margin-bottom: 16px;
`;
const style_Heading = (0,styled_components_esm["default"])((0,braveNews_default.Heading)).withConfig({ displayName: "Heading", componentId: "sc-1gz3r4g" }) `
  font-size: 18px;
  line-height: 25px;

  a {
    display: block;
    color: inherit;
    text-decoration: none;
  }
`;
const style_Publisher = (0,styled_components_esm["default"])('div').withConfig({ displayName: "Publisher", componentId: "sc-1kkkifz" }) `
  max-width: 100%;
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  font-family: ${p => p.theme.fontFamily.heading};
  font-size: 14px;
  color: white;
  font-weight: 500;
`;
const style_Time = (0,styled_components_esm["default"])((0,braveNews_default.Time)).withConfig({ displayName: "Time", componentId: "sc-330or0" }) ``;
const PublisherLogo = (0,styled_components_esm["default"])((0,braveNews_default.PublisherLogo)).withConfig({ displayName: "PublisherLogo", componentId: "sc-1l0e98p" }) ``;

;// ./components/brave_new_tab_ui/components/default/braveNews/cards/categoryGroup/index.tsx
// Copyright (c) 2020 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.





function categoryGroup_ListItem(props) {
    var _a;
    const [cardRef] = useScrollIntoView(props.shouldScrollIntoView);
    const onClick = useReadArticleClickHandler(props.onReadFeedItem, {
        item: props.item
    });
    const data = (_a = props.item.article) === null || _a === void 0 ? void 0 : _a.data;
    if (!data) {
        return null;
    }
    return (react_bundle_js_React_.createElement(ListItem, null,
        react_bundle_js_React_.createElement("a", { onClick: onClick, href: data.url.url, ref: cardRef },
            react_bundle_js_React_.createElement(style_Content, null,
                react_bundle_js_React_.createElement(style_Publisher, null, props.publisher && props.publisher.publisherName),
                react_bundle_js_React_.createElement(style_Heading, null, data.title),
                react_bundle_js_React_.createElement(style_Time, null, data.relativeTimeDescription)),
            react_bundle_js_React_.createElement(ListItemImageFrame, null,
                react_bundle_js_React_.createElement(CardImageFromFeedItem, { list: true, data: data })))));
}
function CategoryGroup(props) {
    // No content no render®
    if (props.content.length < 3 || props.content.some(c => !c.article)) {
        return null;
    }
    return (react_bundle_js_React_.createElement(BrandedList, null,
        react_bundle_js_React_.createElement(Title, null, props.categoryName),
        react_bundle_js_React_.createElement(List, null, props.content.map((item, index) => {
            var _a;
            const data = (_a = item.article) === null || _a === void 0 ? void 0 : _a.data;
            // we already validated this, but typescript wants
            // us to do it again
            if (!data) {
                return react_bundle_js_React_.createElement(react_bundle_js_React_.Fragment, { key: index });
            }
            const shouldScrollTo = (!!props.articleToScrollTo &&
                props.articleToScrollTo.url.url === data.url.url);
            const publisher = props.publishers[data.publisherId];
            return react_bundle_js_React_.createElement(categoryGroup_ListItem, { publisher: publisher, item: item, key: index, shouldScrollIntoView: shouldScrollTo, onReadFeedItem: props.onReadFeedItem });
        }))));
}

;// ./components/brave_new_tab_ui/components/default/braveNews/cards/publisherGroup/style.ts
// Copyright (c) 2020 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.


const OrderedList = (0,styled_components_esm["default"])((0,braveNews_default.Block)).withConfig({ displayName: "OrderedList", componentId: "sc-jlkcw7" }) ``;
const ListTitle = (0,styled_components_esm["default"])('div').withConfig({ displayName: "ListTitle", componentId: "sc-v3nvfd" }) `
  font-family: ${p => p.theme.fontFamily.heading};
  font-weight: 500;
  font-size: 28px;
  color: #fff;
`;
const style_List = (0,styled_components_esm["default"])('ol').withConfig({ displayName: "List", componentId: "sc-c7uiyv" }) `
  box-sizing: border-box;
  counter-reset: item;
  margin-top: 36px;
  margin-left: 48px;
  padding: 0;
`;
const style_ListItem = (0,styled_components_esm["default"])('li').withConfig({ displayName: "ListItem", componentId: "sc-t115fb" }) `
  position: relative;
  display: block;
  margin-bottom: 36px;
  color: #fff;

  &:before {
    position: absolute;
    left: -48px;
    height: 100%;
    content: counter(item) " ";
    counter-increment: item;
    display: marker;
    font-size: 18px;
    line-height: 25px;
  }
`;
const publisherGroup_style_Heading = (0,styled_components_esm["default"])((0,braveNews_default.Heading)).withConfig({ displayName: "Heading", componentId: "sc-1oetdf4" }) `
  font-size: 18px;
  line-height: 25px;

  a {
    display: block;
    color: inherit;
    text-decoration: none;
  }
`;
const publisherGroup_style_Time = (0,styled_components_esm["default"])((0,braveNews_default.Time)).withConfig({ displayName: "Time", componentId: "sc-1q3vjgw" }) ``;
const style_PublisherLogo = (0,styled_components_esm["default"])((0,braveNews_default.PublisherLogo)).withConfig({ displayName: "PublisherLogo", componentId: "sc-4k68i2" }) `
  height: 50px;
`;

;// ./components/brave_new_tab_ui/components/default/braveNews/cards/publisherGroup/index.tsx
// Copyright (c) 2020 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.





function publisherGroup_ListItem(props) {
    var _a;
    const [cardRef] = useScrollIntoView(props.shouldScrollIntoView);
    const onClick = useReadArticleClickHandler(props.onReadFeedItem, {
        item: props.item
    });
    const data = (_a = props.item.article) === null || _a === void 0 ? void 0 : _a.data;
    if (!data) {
        return null;
    }
    return (react_bundle_js_React_.createElement(style_ListItem, null,
        react_bundle_js_React_.createElement("a", { onClick: onClick, href: data.url.url, ref: cardRef },
            react_bundle_js_React_.createElement(publisherGroup_style_Heading, null, data.title),
            react_bundle_js_React_.createElement(publisherGroup_style_Time, null, data.relativeTimeDescription))));
}
function PublisherGroup(props) {
    // No content no render®
    if (props.content.length < 3 || props.content.some(c => !c.article)) {
        return null;
    }
    return (react_bundle_js_React_.createElement(OrderedList, null,
        props.publisher &&
            react_bundle_js_React_.createElement(ListTitle, null,
                react_bundle_js_React_.createElement(PublisherMetaComponent, { publisher: props.publisher, title: true, onSetPublisherPref: props.onSetPublisherPref })),
        react_bundle_js_React_.createElement(style_List, null, props.content.map((item, index) => {
            var _a;
            const data = (_a = item.article) === null || _a === void 0 ? void 0 : _a.data;
            // we already validated this, but typescript wants
            // us to do it again
            if (!data) {
                return react_bundle_js_React_.createElement(react_bundle_js_React_.Fragment, { key: index });
            }
            const shouldScrollTo = (!!props.articleToScrollTo &&
                props.articleToScrollTo.url.url === data.url.url);
            return react_bundle_js_React_.createElement(publisherGroup_ListItem, { publisher: props.publisher, item: item, key: index, shouldScrollIntoView: shouldScrollTo, onReadFeedItem: props.onReadFeedItem, onSetPublisherPref: props.onSetPublisherPref });
        }))));
}

;// ./components/brave_new_tab_ui/components/default/braveNews/cards/cardDeals.tsx
// Copyright (c) 2020 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.





function cardDeals_ListItem(props) {
    var _a;
    const [cardRef] = useScrollIntoView(props.shouldScrollIntoView);
    const onClick = useReadArticleClickHandler(props.onReadFeedItem, {
        item: props.item
    });
    const data = (_a = props.item.deal) === null || _a === void 0 ? void 0 : _a.data;
    if (!data) {
        return null;
    }
    return (react_bundle_js_React_.createElement(DealItem, { ref: cardRef, onClick: onClick, href: data.url.url },
        react_bundle_js_React_.createElement(CardImageFromFeedItem, { data: data }),
        react_bundle_js_React_.createElement(Text, null, data.title),
        react_bundle_js_React_.createElement(DealDescription, null, data.description)));
}
function CardDeals(props) {
    if (!props.content || props.content.length === 0 || !props.content[0].deal) {
        return null;
    }
    const categoryName = props.content[0].deal.data.categoryName;
    return (react_bundle_js_React_.createElement(DealsCard, null,
        react_bundle_js_React_.createElement(DealsCategory, null, categoryName),
        react_bundle_js_React_.createElement(DealsList, null, props.content.map((item, index) => {
            var _a;
            const shouldScrollIntoView = (!!props.articleToScrollTo &&
                props.articleToScrollTo.url.url === ((_a = item.deal) === null || _a === void 0 ? void 0 : _a.data.url.url));
            return react_bundle_js_React_.createElement(cardDeals_ListItem, { key: index, item: item, shouldScrollIntoView: shouldScrollIntoView, onReadFeedItem: props.onReadFeedItem });
        }))));
}

;// ./components/brave_new_tab_ui/components/default/braveNews/cardsGroup.tsx
// Copyright (c) 2020 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.








var CardType = api.CardType;
function getCard(props, content) {
    var _a, _b, _c, _d;
    switch (content.cardType) {
        case CardType.HEADLINE:
            return react_bundle_js_React_.createElement(cardArticleLarge, { content: content.items, publishers: props.publishers, articleToScrollTo: props.articleToScrollTo, onReadFeedItem: props.onReadFeedItem, onSetPublisherPref: props.onSetPublisherPref });
        case CardType.HEADLINE_PAIRED:
            return react_bundle_js_React_.createElement(CardSingleArticleMedium, { content: content.items, publishers: props.publishers, articleToScrollTo: props.articleToScrollTo, onReadFeedItem: props.onReadFeedItem, onSetPublisherPref: props.onSetPublisherPref });
        case CardType.CATEGORY_GROUP:
            const categoryName = (_b = (_a = content.items[0]) === null || _a === void 0 ? void 0 : _a.article) === null || _b === void 0 ? void 0 : _b.data.categoryName;
            if (!categoryName) {
                return null;
            }
            return react_bundle_js_React_.createElement(CategoryGroup, { content: content.items, publishers: props.publishers, categoryName: categoryName, onReadFeedItem: props.onReadFeedItem, articleToScrollTo: props.articleToScrollTo });
        case CardType.PUBLISHER_GROUP:
            const publisherId = (_d = (_c = content.items[0]) === null || _c === void 0 ? void 0 : _c.article) === null || _d === void 0 ? void 0 : _d.data.publisherId;
            if (!publisherId) {
                return null;
            }
            const publisher = props.publishers[publisherId];
            return react_bundle_js_React_.createElement(PublisherGroup, { content: content.items, publisher: publisher, articleToScrollTo: props.articleToScrollTo, onReadFeedItem: props.onReadFeedItem, onSetPublisherPref: props.onSetPublisherPref });
        case CardType.DEALS:
            return react_bundle_js_React_.createElement(CardDeals, { content: content.items, onReadFeedItem: props.onReadFeedItem, articleToScrollTo: props.articleToScrollTo });
    }
    console.error('Asked to create unknown card type', content.cardType);
    return null;
}
function CardsGroups(props) {
    // Duplicate array so we can splice without affecting state
    return react_bundle_js_React_.createElement(react_bundle_js_React_.Fragment, null, props.content.items.map((feedPageItem, index) => {
        const cardInstance = getCard(props, feedPageItem);
        if (!cardInstance) {
            return react_bundle_js_React_.createElement(react_bundle_js_React_.Fragment, { key: index });
        }
        // All buckets are divisible by 4, so we send a ping when we are in
        // the next bucket. This is to avoid too many redux action firing
        // on scroll.
        const shouldTriggerViewCountUpdate = (index % 4 === 1);
        return (react_bundle_js_React_.createElement(react_bundle_js_React_.Fragment, { key: index },
            cardInstance,
            shouldTriggerViewCountUpdate &&
                react_bundle_js_React_.createElement("div", { [braveNews.attributeNameCardCount]: index + props.itemStartingDisplayIndex, ref: props.onPeriodicCardViews })));
    }));
}

;// ./components/brave_new_tab_ui/components/default/braveNews/options/customize.tsx
// Copyright (c) 2020 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.




const Hideable = (0,styled_components_esm["default"])('div').withConfig({ displayName: "Hideable", componentId: "sc-3sbjd4" }) `
  pointer-events: ${p => p.show ? 'auto' : 'none'};
  position: fixed;
  right: 20px;
  bottom: 20px;
  opacity: ${p => p.show ? 1 : 0};
  transition: opacity 1s ease-in-out;
`;
function Customize(props) {
    return (react_bundle_js_React_.createElement(Hideable, { show: props.show },
        react_bundle_js_React_.createElement(braveNews_default.Button, { "aria-hidden": !props.show, disabled: !props.show, onClick: props.onCustomizeBraveNews }, (0,locale.getLocale)('customize'))));
}

// EXTERNAL MODULE: ./node_modules/.pnpm/@brave+brave-ui@0.40.6_react@19.2.7_styled-components@6.4.3_react-dom@19.2.7_react@19.2.7__react@19.2.7_/node_modules/@brave/brave-ui/components/icons/loader.js
var loader = __webpack_require__("../../../brave/node_modules/.pnpm/@brave+brave-ui@0.40.6_react@19.2.7_styled-components@6.4.3_react-dom@19.2.7_react@19.2.7__react@19.2.7_/node_modules/@brave/brave-ui/components/icons/loader.js");
// EXTERNAL MODULE: ./node_modules/.pnpm/@brave+brave-ui@0.40.6_react@19.2.7_styled-components@6.4.3_react-dom@19.2.7_react@19.2.7__react@19.2.7_/node_modules/@brave/brave-ui/components/icons/index.js + 122 modules
var icons = __webpack_require__("../../../brave/node_modules/.pnpm/@brave+brave-ui@0.40.6_react@19.2.7_styled-components@6.4.3_react-dom@19.2.7_react@19.2.7__react@19.2.7_/node_modules/@brave/brave-ui/components/icons/index.js");
;// ./components/brave_new_tab_ui/components/default/braveNews/options/refresh.tsx
// Copyright (c) 2020 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.




const RefreshButton = (0,styled_components_esm["default"])('button').withConfig({ displayName: "RefreshButton", componentId: "sc-ve3ib3" }) `
  appearance: none;
  position: fixed;
  top: 33px;
  left: 50%;
  transform: translateX(-50%);
  pointer-events: ${p => p.show ? 'all' : 'none'};
  opacity: ${p => p.show ? 1 : 0};
  outline: none;
  border: none;
  border-radius: 24px;
  background: ${p => p.theme.color.brandBat};
  padding: 12px 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  font-weight: 800;
  font-size: 16px;
  color: white;
  transition: opacity 1s ease-in-out, background .124s ease-in-out;
  &:hover {
    background: ${p => p.theme.color.brandBatInteracting};
  }
  &:active {
    background: ${p => p.theme.color.brandBatActive};
  }
  &:focus-visible {
    box-shadow: 0 0 0 1px white;
  }
`;
const refresh_Icon = (0,styled_components_esm["default"])('div').withConfig({ displayName: "Icon", componentId: "sc-xjsv9y" }) `
  width: 16px;
  height: 16px;
`;
function Refresh(props) {
    const text = props.isFetching
        ? (0,locale.getLocale)('braveNewsStatusFetching')
        : (0,locale.getLocale)('braveNewsActionRefresh');
    const graphic = props.isFetching
        ? react_bundle_js_React_.createElement(loader["default"], null)
        : react_bundle_js_React_.createElement(icons.ArrowUpIcon, null);
    return (react_bundle_js_React_.createElement(RefreshButton, { ...props },
        react_bundle_js_React_.createElement(refresh_Icon, null, graphic),
        react_bundle_js_React_.createElement("span", null, text)));
}

;// ./components/brave_new_tab_ui/components/default/braveNews/content.tsx
// Copyright (c) 2020 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.












function getFeedHashForCache(feed) {
    return feed ? feed.hash : '';
}
let pageRequestPending = false;
function BraveNewsContent(props) {
    const { feed, publishers } = props;
    const dispatch = (0,es.useDispatch)();
    const { setCustomizePage } = (0,Context.useBraveNews)();
    const previousYAxis = react_bundle_js_React_.useRef(0);
    const [showOptions, setShowOptions] = react_bundle_js_React_.useState(false);
    // When an element at the bottom enters the viewport, ask for a new page
    const setScrollTriggerRef = react_bundle_js_React_.useCallback((element) => {
        if (!element) {
            return;
        }
        // Trigger when it's 900px from viewport bottom so it's more seamless
        const intersectionOptions = {
            rootMargin: '0px 0px 900px 0px'
        };
        const endOfCurrentArticlesListObserver = new IntersectionObserver((entries) => {
            console.debug('Brave News content Intersection Observer triggered', entries);
            const hasReachedPaginationPoint = entries.some(entry => entry.intersectionRatio > 0 ||
                entry.boundingClientRect.top < 0);
            if (hasReachedPaginationPoint) {
                console.debug('Brave News content Intersection Observer determined need new page.');
                if (!pageRequestPending) {
                    pageRequestPending = true;
                    window.requestIdleCallback(() => {
                        pageRequestPending = false;
                        props.onAnotherPageNeeded();
                    });
                }
            }
        }, intersectionOptions);
        // Load up more posts (infinite scroll)
        endOfCurrentArticlesListObserver.observe(element);
    }, [previousYAxis]);
    // Show the options buttons when we enter the viewport
    const hasMarkedInteractionBegin = react_bundle_js_React_.useRef(false);
    const interactionTriggerElement = react_bundle_js_React_.useRef(null);
    const interactionObserver = react_bundle_js_React_.useMemo(() => {
        const observer = new IntersectionObserver((entries) => {
            // Show if target article is inside or above viewport.
            const isInteracting = entries.some(entry => entry.isIntersecting ||
                entry.boundingClientRect.top < 0);
            console.debug('Brave News: Intersection Observer trigger show options, changing', isInteracting);
            setShowOptions(isInteracting);
            // When in "prompting" mode, scrolling past the first card
            // is indication that the user is interacting with the feature.
            if (isInteracting && props.isPrompting && !hasMarkedInteractionBegin.current) {
                dispatch(today_actions.interactionBegin());
                hasMarkedInteractionBegin.current = true;
            }
        });
        return observer;
    }, [props.isPrompting]);
    react_bundle_js_React_.useEffect(() => {
        if (!interactionTriggerElement.current) {
            return;
        }
        const target = interactionTriggerElement.current;
        interactionObserver.observe(target);
        return () => {
            interactionObserver.unobserve(target);
        };
    }, [interactionObserver, interactionTriggerElement.current]);
    // When the feed is refreshed, scroll to the top
    const prevFeedHashRef = react_bundle_js_React_.useRef(getFeedHashForCache(props.feed));
    react_bundle_js_React_.useEffect(() => {
        const currentFeedHash = getFeedHashForCache(props.feed);
        if (prevFeedHashRef.current && prevFeedHashRef.current !== currentFeedHash) {
            // Feed hash changed, make sure we scroll to top
            if (interactionTriggerElement.current) {
                interactionTriggerElement.current.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });
            }
        }
        prevFeedHashRef.current = currentFeedHash;
    });
    // Check for changes often, (won't incur remote check,
    // only local unless it's been awhile).
    react_bundle_js_React_.useEffect(() => {
        const intervalMs = 2 * 60 * 1000;
        const timeoutHandle = setInterval(() => {
            props.onCheckForUpdate();
        }, intervalMs);
        // Cancel the timer when we are unmounted
        return () => {
            clearInterval(timeoutHandle);
        };
    }, []);
    // Report on how many cards have been viewed periodically
    // (every 4 cards).
    const latestCardDepth = react_bundle_js_React_.useRef(0);
    const intersectionObserver = react_bundle_js_React_.useRef(new IntersectionObserver(entries => {
        const inView = entries.filter(e => e.intersectionRatio > 0);
        if (!inView.length) {
            return;
        }
        const counts = inView.map(i => Number(i.target.getAttribute(braveNews.attributeNameCardCount)));
        counts.sort((a, b) => b - a);
        const count = counts[0];
        // Handle not deeper than we've previously been this session
        if (latestCardDepth.current >= count) {
            return;
        }
        console.debug(`Brave News: viewed ${count} cards.`);
        props.onFeedItemViewedCountChanged(count);
    }));
    const registerCardCountTriggerElement = react_bundle_js_React_.useCallback((trigger) => {
        if (!trigger) {
            return;
        }
        intersectionObserver.current.observe(trigger);
    }, [intersectionObserver.current]);
    // TODO(petemill): Only way to test for error state is if there are no
    // publishers since GetFeed and GetPublishers will always eventually return
    // empty objects. Consider having those mojom functions provide error states.
    const hasContent = feed && publishers && !!Object.keys(publishers).length;
    // Loading state
    if (props.isFetching && !hasContent) {
        return react_bundle_js_React_.createElement(cardLoading["default"], null);
    }
    // Error state
    if (!hasContent) {
        return react_bundle_js_React_.createElement(CardError, { onRefresh: props.onRefresh });
    }
    // satisfy typescript sanity, should not get here
    if (!feed || !publishers) {
        console.error('Brave News: should have shown error or loading state, but ran in to an unintended code path.');
        return null;
    }
    const isOnlyDisplayingPeekingCard = !props.hasInteracted && props.isPrompting;
    const displayedPageCount = Math.min(props.displayedPageCount, feed.pages.length);
    const introCount = feed.featuredItem ? 2 : 1;
    const showNoContentMessage = !props.isFetching &&
        hasContent &&
        !feed.featuredItem &&
        feed.pages.length === 0;
    let runningCardCount = introCount;
    return (react_bundle_js_React_.createElement(react_bundle_js_React_.Fragment, null,
        showNoContentMessage &&
            react_bundle_js_React_.createElement(CardNoContent, { onCustomize: props.onCustomizeBraveNews }),
        feed.featuredItem && react_bundle_js_React_.createElement(cardArticleLarge, { content: [feed.featuredItem], publishers: publishers, articleToScrollTo: props.articleToScrollTo, onSetPublisherPref: props.onSetPublisherPref, onReadFeedItem: props.onReadFeedItem }),
        react_bundle_js_React_.createElement("div", { ref: interactionTriggerElement }),
        react_bundle_js_React_.createElement("div", { [braveNews.attributeNameCardCount]: 1, ref: registerCardCountTriggerElement }),
        !isOnlyDisplayingPeekingCard &&
            react_bundle_js_React_.createElement(react_bundle_js_React_.Fragment, null,
                react_bundle_js_React_.createElement(react_bundle_js_React_.Fragment, null,
                    react_bundle_js_React_.createElement("div", { [braveNews.attributeNameCardCount]: introCount, ref: registerCardCountTriggerElement })),
                /* Infinitely repeating collections of content. */
                Array(displayedPageCount).fill(undefined).map((_, index) => {
                    let startingDisplayIndex = runningCardCount;
                    runningCardCount += feed.pages[index].items.length;
                    return (react_bundle_js_React_.createElement(CardsGroups, { key: index, itemStartingDisplayIndex: startingDisplayIndex, content: feed.pages[index], publishers: publishers, articleToScrollTo: props.articleToScrollTo, onReadFeedItem: props.onReadFeedItem, onPeriodicCardViews: registerCardCountTriggerElement, onSetPublisherPref: props.onSetPublisherPref }));
                }),
                react_bundle_js_React_.createElement(Customize, { onCustomizeBraveNews: () => setCustomizePage('news'), show: showOptions }),
                react_bundle_js_React_.createElement(Refresh, { isFetching: props.isFetching, show: showOptions && (props.isUpdateAvailable || props.isFetching), onClick: props.onRefresh }),
                react_bundle_js_React_.createElement("div", { ref: setScrollTriggerRef, style: {
                        width: '1px',
                        height: '1px',
                        position: 'absolute',
                        bottom: '0'
                    } }))));
}


/***/ }

};

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJhdmVfY29tcG9uZW50c19icmF2ZV9uZXdfdGFiX3VpX2NvbXBvbmVudHNfZGVmYXVsdF9icmF2ZU5ld3NfY29udGVudF90c3guY2h1bmsuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkRBQTZEO0FBQzdELHNFQUFzRTtBQUN0RSw0RUFBNEU7QUFDNUUsc0RBQXNEO0FBRWhCO0FBTXBCO0FBRVgsTUFBTSxLQUFLLEdBQUcsb0NBQU0sQ0FBQywyQkFBYSxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxDQUFDOztDQUVsRTtBQUVNLE1BQU0sTUFBTSxHQUFHLG9DQUFNLENBQUMsMkJBQWEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsQ0FBQzs7Q0FFbkU7QUFFTSxNQUFNLEtBQUssR0FBRyxvQ0FBTSxDQUFDLDJCQUFhLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLENBQUM7Ozs7Q0FJbEU7QUFFTSxNQUFNLFNBQVMsR0FBRyxvQ0FBTSxDQUFDLDJCQUFhLENBQUM7Q0FDN0M7QUFFTSxNQUFNLE9BQU8sR0FBRyxvQ0FBTSxDQUFDLEtBQUssQ0FBQyxtRUFBSTs7O0lBR3BDLEtBQUs7OztDQUdSO0FBTU0sTUFBTSxVQUFVLEdBQUcsb0NBQU0sQ0FBQyxRQUFRLENBQUMscUVBQWlCO2FBQzlDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOzs7Ozs7Ozs7Q0FTeEM7QUFFTSxNQUFNLGNBQWMsR0FBRyxvQ0FBTSxDQUFDLFVBQVUsQ0FBQzs7O0NBRy9DO0FBRU0sTUFBTSxlQUFLLEdBQUcsb0NBQU0sQ0FBQyxLQUFLLENBQUM7Ozs7Ozs7Ozs7Ozs7OztDQWVqQztBQUVNLE1BQU0sT0FBTyxHQUFHLG9DQUFNLENBQUMsNkJB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S0FBSyxDQUFDLFNBQVMsR0FBSTtnQkFDdkksOENBQ0UsR0FBRyxFQUFFLG1CQUFtQixFQUN4QixLQUFLLEVBQUU7d0JBQ0wsS0FBSyxFQUFFLEtBQUs7d0JBQ1osTUFBTSxFQUFFLEtBQUs7d0JBQ2IsUUFBUSxFQUFFLFVBQVU7d0JBQ3BCLE1BQU0sRUFBRSxHQUFHO3FCQUNaLEdBQ0QsQ0FDRCxDQUVKLENBQ0o7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYnJhdmUtY29yZS8uL2NvbXBvbmVudHMvYnJhdmVfbmV3X3RhYl91aS9jb21wb25lbnRzL2RlZmF1bHQvYnJhdmVOZXdzL2NhcmRTaXplcy50cyIsIndlYnBhY2s6Ly9icmF2ZS1jb3JlLy4vY29tcG9uZW50cy9icmF2ZV9uZXdfdGFiX3VpL2NvbXBvbmVudHMvZGVmYXVsdC9icmF2ZU5ld3MvdXNlUmVhZEFydGljbGVDbGlja0hhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vYnJhdmUtY29yZS8uL2NvbXBvbmVudHMvYnJhdmVfbmV3X3RhYl91aS9jb21wb25lbnRzL2RlZmF1bHQvYnJhdmVOZXdzL3VzZVNjcm9sbEludG9WaWV3LnRzIiwid2VicGFjazovL2JyYXZlLWNvcmUvLi9jb21wb25lbnRzL2JyYXZlX25ld190YWJfdWkvY29tcG9uZW50cy9kZWZhdWx0L2JyYXZlTmV3cy9jYXJkcy9DYXJkSW1hZ2UudHN4Iiwid2VicGFjazovL2JyYXZlLWNvcmUvLi9jb21wb25lbnRzL2JyYXZlX25ld190YWJfdWkvY29tcG9uZW50cy9kZWZhdWx0L2JyYXZlTmV3cy9jYXJkcy9QdWJsaXNoZXJNZXRhLnRzeCIsIndlYnBhY2s6Ly9icmF2ZS1jb3JlLy4vY29tcG9uZW50cy9icmF2ZV9uZXdfdGFiX3VpL2NvbXBvbmVudHMvZGVmYXVsdC9icmF2ZU5ld3MvY2FyZHMvX2FydGljbGVzL2NhcmRBcnRpY2xlTGFyZ2UudHN4Iiwid2VicGFjazovL2JyYXZlLWNvcmUvLi9jb21wb25lbnRzL2JyYXZlX25ld190YWJfdWkvY29tcG9uZW50cy9kZWZhdWx0L2JyYXZlTmV3cy9jYXJkcy9jYXJkRXJyb3IudHN4Iiwid2VicGFjazovL2JyYXZlLWNvcmUvLi9jb21wb25lbnRzL2JyYXZlX25ld190YWJfdWkvY29tcG9uZW50cy9kZWZhdWx0L2JyYXZlTmV3cy9jYXJkcy9jYXJkTm9Db250ZW50LnRzeCIsIndlYnBhY2s6Ly9icmF2ZS1jb3JlLy4vY29tcG9uZW50cy9icmF2ZV9uZXdfdGFiX3VpL2NvbXBvbmVudHMvZGVmYXVsdC9icmF2ZU5ld3MvY2FyZHMvX2FydGljbGVzL2NhcmRBcnRpY2xlTWVkaXVtLnRzeCIsIndlYnBhY2s6Ly9icmF2ZS1jb3JlLy4vY29tcG9uZW50cy9icmF2ZV9uZXdfdGFiX3VpL2NvbXBvbmVudHMvZGVmYXVsdC9icmF2ZU5ld3MvY2FyZHMvY2F0ZWdvcnlHcm91cC9zdHlsZS50cyIsIndlYnBhY2s6Ly9icmF2ZS1jb3JlLy4vY29tcG9uZW50cy9icmF2ZV9uZXdfdGFiX3VpL2NvbXBvbmVudHMvZGVmYXVsdC9icmF2ZU5ld3MvY2FyZHMvY2F0ZWdvcnlHcm91cC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vYnJhdmUtY29yZS8uL2NvbXBvbmVudHMvYnJhdmVfbmV3X3RhYl91aS9jb21wb25lbnRzL2RlZmF1bHQvYnJhdmVOZXdzL2NhcmRzL3B1Ymxpc2hlckdyb3VwL3N0eWxlLnRzIiwid2VicGFjazovL2JyYXZlLWNvcmUvLi9jb21wb25lbnRzL2JyYXZlX25ld190YWJfdWkvY29tcG9uZW50cy9kZWZhdWx0L2JyYXZlTmV3cy9jYXJkcy9wdWJsaXNoZXJHcm91cC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vYnJhdmUtY29yZS8uL2NvbXBvbmVudHMvYnJhdmVfbmV3X3RhYl91aS9jb21wb25lbnRzL2RlZmF1bHQvYnJhdmVOZXdzL2NhcmRzL2NhcmREZWFscy50c3giLCJ3ZWJwYWNrOi8vYnJhdmUtY29yZS8uL2NvbXBvbmVudHMvYnJhdmVfbmV3X3RhYl91aS9jb21wb25lbnRzL2RlZmF1bHQvYnJhdmVOZXdzL2NhcmRzR3JvdXAudHN4Iiwid2VicGFjazovL2JyYXZlLWNvcmUvLi9jb21wb25lbnRzL2JyYXZlX25ld190YWJfdWkvY29tcG9uZW50cy9kZWZhdWx0L2JyYXZlTmV3cy9vcHRpb25zL2N1c3RvbWl6ZS50c3giLCJ3ZWJwYWNrOi8vYnJhdmUtY29yZS8uL2NvbXBvbmVudHMvYnJhdmVfbmV3X3RhYl91aS9jb21wb25lbnRzL2RlZmF1bHQvYnJhdmVOZXdzL29wdGlvbnMvcmVmcmVzaC50c3giLCJ3ZWJwYWNrOi8vYnJhdmUtY29yZS8uL2NvbXBvbmVudHMvYnJhdmVfbmV3X3RhYl91aS9jb21wb25lbnRzL2RlZmF1bHQvYnJhdmVOZXdzL2NvbnRlbnQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMCBUaGUgQnJhdmUgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbi8vIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXMgZmlsZSxcbi8vIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwczovL21vemlsbGEub3JnL01QTC8yLjAvLlxuXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IHtcbiAgQmxvY2sgYXMgU3RhbmRhcmRCbG9jayxcbiAgSGVhZGluZyBhcyBTdGFuZGFyZEhlYWRpbmcsXG4gIFRleHQgYXMgU3RhbmRhcmRUZXh0LFxuICBUaW1lIGFzIFN0YW5kYXJkVGltZVxufSBmcm9tICcuL2RlZmF1bHQnXG5cbmV4cG9ydCBjb25zdCBMYXJnZSA9IHN0eWxlZChTdGFuZGFyZEJsb2NrKS5hdHRycyh7IGFzOiAnYXJ0aWNsZScgfSlgXG4gIHBhZGRpbmc6IDA7XG5gXG5cbmV4cG9ydCBjb25zdCBNZWRpdW0gPSBzdHlsZWQoU3RhbmRhcmRCbG9jaykuYXR0cnMoeyBhczogJ2FydGljbGUnIH0pYFxuICBwYWRkaW5nOiAwO1xuYFxuXG5leHBvcnQgY29uc3QgU21hbGwgPSBzdHlsZWQoU3RhbmRhcmRCbG9jaykuYXR0cnMoeyBhczogJ2FydGljbGUnIH0pYFxuICBwYWRkaW5nOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMzEwcHg7XG5gXG5cbmV4cG9ydCBjb25zdCBEZWFsc0NhcmQgPSBzdHlsZWQoU3RhbmRhcmRCbG9jaylgXG5gXG5cbmV4cG9ydCBjb25zdCBDb250ZW50ID0gc3R5bGVkKCdkaXYnKTx7fT5gXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBhZGRpbmc6IDI1cHggMzVweDtcbiAgJHtTbWFsbH0gJiB7XG4gICAgcGFkZGluZzogMjBweCAyOHB4O1xuICB9XG5gXG5cbnR5cGUgSW1hZ2VGcmFtZVByb3BzID0ge1xuICBpc0ltYWdlTG9hZGVkOiBib29sZWFuXG59XG5cbmV4cG9ydCBjb25zdCBJbWFnZUZyYW1lID0gc3R5bGVkKCdmaWd1cmUnKTxJbWFnZUZyYW1lUHJvcHM+YFxuICBvcGFjaXR5OiAke3AgPT4gcC5pc0ltYWdlTG9hZGVkID8gMSA6IDB9O1xuICBtYXJnaW46IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctdG9wOiA2NyU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IGF1dG87XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMjQwbXMgZWFzZS1vdXQ7XG5gXG5cbmV4cG9ydCBjb25zdCBMaXN0SW1hZ2VGcmFtZSA9IHN0eWxlZChJbWFnZUZyYW1lKWBcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nLXRvcDogMDtcbmBcblxuZXhwb3J0IGNvbnN0IEltYWdlID0gc3R5bGVkKCdpbWcnKWBcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBvYmplY3QtcG9zaXRpb246IGNlbnRlciB0b3A7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTg4LDE4OCwxODgsMC4yKTtcbmBcblxuZXhwb3J0IGNvbnN0IEhlYWRpbmcgPSBzdHlsZWQoU3RhbmRhcmRIZWFkaW5nKWBcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgYSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBQdWJsaXNoZXJIZWFkaW5nID0gc3R5bGVkKFN0YW5kYXJkSGVhZGluZylgXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG5gXG5cbmV4cG9ydCBjb25zdCBUZXh0ID0gc3R5bGVkKFN0YW5kYXJkVGV4dClgXG4gIGZvbnQtZmFtaWx5OiAke3AgPT4gcC50aGVtZS5mb250RmFtaWx5LmhlYWRpbmd9O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICBmb250LXdlaWdodDogNjAwO1xuXG4gIGEge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuYFxuXG5leHBvcnQgY29uc3QgVGltZSA9IHN0eWxlZChTdGFuZGFyZFRpbWUpYFxuICAke0xhcmdlfSAmIHtcbiAgICBtYXJnaW4tdG9wOiA4cHg7XG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IFNvdXJjZSA9IHN0eWxlZCgnZGl2JylgXG4gIG1hcmdpbjogMTBweCAwIDAgMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuYFxuXG5leHBvcnQgY29uc3QgUHVibGlzaGVyID0gc3R5bGVkKCdkaXYnKWBcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZm9udDogNTAwIDE0cHggJHtwID0+IHAudGhlbWUuZm9udEZhbWlseS5oZWFkaW5nfTtcbiAgY29sb3I6ICNmZmY7XG5gXG5cbmV4cG9ydCBjb25zdCBQcm9tb3RlZExhYmVsID0gc3R5bGVkKCdhJylgXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZDogIzQ5NTA1NztcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjgpO1xuICBwYWRkaW5nOiA0cHggOHB4O1xuICBmb250OiA0MDAgMTJweCAke3AgPT4gcC50aGVtZS5mb250RmFtaWx5LmhlYWRpbmd9O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBnYXA6IDVweDtcbmBcblxuZXhwb3J0IGNvbnN0IFByb21vdGVkSWNvbiA9IHN0eWxlZCgnZGl2JylgXG4gIHdpZHRoOiAxNnB4O1xuICBoZWlnaHQ6IDlweDtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIHN2ZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIGZpbGw6IGN1cnJlbnRDb2xvcjtcbiAgfVxuYFxuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyRm9yVHdvID0gc3R5bGVkKCdkaXYnKTx7fT5gXG4gIHdpZHRoOiA2ODBweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICBncmlkLWdhcDogMzBweDtcbmBcblxuZXhwb3J0IGNvbnN0IERlYWxzQ2F0ZWdvcnkgPSBzdHlsZWQoJ2gzJylgXG4gIG1hcmdpbjogMDtcbiAgZm9udDogNjAwIDE4cHggJHtwID0+IHAudGhlbWUuZm9udEZhbWlseS5oZWFkaW5nfTtcbiAgY29sb3I6IHdoaXRlO1xuYFxuXG5leHBvcnQgY29uc3QgRGVhbHNMaXN0ID0gc3R5bGVkKCdkaXYnKWBcbiAgbWFyZ2luLXRvcDogMjRweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcbiAgZ3JpZC1nYXA6IDMwcHg7XG5gXG5cbmV4cG9ydCBjb25zdCBEZWFsSXRlbSA9IHN0eWxlZCgnYScpYFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICBnYXA6IDhweDtcbmBcblxuZXhwb3J0IGNvbnN0IERlYWxEZXNjcmlwdGlvbiA9IHN0eWxlZChUaW1lKWBcbiAgbWFyZ2luOiAwO1xuYFxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFRoZSBCcmF2ZSBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuLy8gTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBmaWxlLFxuLy8gWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHBzOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uXG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgUmVhZEZlZWRJdGVtUGF5bG9hZCB9IGZyb20gJy4uLy4uLy4uL2FjdGlvbnMvdG9kYXlfYWN0aW9ucydcbmltcG9ydCB7IE9uUmVhZEZlZWRJdGVtIH0gZnJvbSAnLi8nXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZVJlYWRBcnRpY2xlQ2xpY2tIYW5kbGVyIChhY3Rpb246IE9uUmVhZEZlZWRJdGVtLCBwYXlsb2FkRGF0YTogUmVhZEZlZWRJdGVtUGF5bG9hZCkge1xuICByZXR1cm4gUmVhY3QudXNlQ2FsbGJhY2soKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBjb25zdCBzaG91bGRPcGVuSW5OZXdUYWIgPSBkZXRlY3RTaG91bGRPcGVuSW5OZXdUYWIoZSlcbiAgICBhY3Rpb24oeyAuLi5wYXlsb2FkRGF0YSwgb3BlbkluTmV3VGFiOiBzaG91bGRPcGVuSW5OZXdUYWIgfSlcbiAgfSwgW2FjdGlvbiwgcGF5bG9hZERhdGEuaXRlbV0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZXRlY3RTaG91bGRPcGVuSW5OZXdUYWIgKGU6IFJlYWN0Lk1vdXNlRXZlbnQpOiBib29sZWFuIHtcbiAgY29uc3Qgb3BlbkluTmV3VGFiID0gZS5jdHJsS2V5IHx8IGUubWV0YUtleVxuICByZXR1cm4gb3BlbkluTmV3VGFiXG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVGhlIEJyYXZlIEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4vLyBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIGZpbGUsXG4vLyBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cHM6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy5cblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZVNjcm9sbEludG9WaWV3PFQgZXh0ZW5kcyBIVE1MRWxlbWVudCA9IEhUTUxBbmNob3JFbGVtZW50PiAoc2hvdWxkU2Nyb2xsSW50b1ZpZXc6IGJvb2xlYW4pIHtcbiAgLy8gSWYgd2UgbmVlZCB0byBzY3JvbGwgdGhlIGFydGljbGUgaW4gdG8gdmlldyBhZnRlciByZW5kZXIsXG4gIC8vIGRvIHNvIGFmdGVyIHRoZSBlbGVtZW50IGhhcyBiZWVuIG1vdW50ZWQuXG4gIGNvbnN0IGNhcmRSZWYgPSBSZWFjdC51c2VSZWY8VD4obnVsbClcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoc2hvdWxkU2Nyb2xsSW50b1ZpZXcgJiYgY2FyZFJlZi5jdXJyZW50KSB7XG4gICAgICBjYXJkUmVmLmN1cnJlbnQuc2Nyb2xsSW50b1ZpZXcoeyBibG9jazogJ2NlbnRlcicgfSlcbiAgICB9IGVsc2UgaWYgKHNob3VsZFNjcm9sbEludG9WaWV3KSB7XG4gICAgICBjb25zb2xlLndhcm4oJ0JyYXZlIE5ld3M6IGF0dGVtcHRlZCB0byBzY3JvbGwgdG8gYSBjYXJkIHRoYXQgd2FzIG5vdCByZW5kZXJlZCcpXG4gICAgfVxuICB9LCBbY2FyZFJlZi5jdXJyZW50XSkgLy8gb25seSByZS1ydW4gaWYgdGhlIHJlZiBlbGVtZW50IGNoYW5nZXNhXG4gIHJldHVybiBbY2FyZFJlZl1cbn1cblxudHlwZSB1c2VTY3JvbGxJbnRvVmlld1JldHVybiA9IFtSZWFjdC5SZWZPYmplY3Q8SFRNTEVsZW1lbnQgfCBudWxsPiwgKCkgPT4gYW55XVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlclNjcm9sbEludG9WaWV3QWZ0ZXJJbWFnZXNMb2FkZWQgKHNob3VsZFNjcm9sbEludG9WaWV3OiBib29sZWFuKTogdXNlU2Nyb2xsSW50b1ZpZXdSZXR1cm4ge1xuICAvLyBJZiB3ZSBuZWVkIHRvIHNjcm9sbCB0aGUgYXJ0aWNsZSBpbiB0byB2aWV3IGFmdGVyIHJlbmRlcixcbiAgLy8gZG8gc28gYWZ0ZXIgdGhlIGltYWdlIGhhcyBiZWVuIGxvYWRlZC4gQXNzdW1lIHRoYXQgYWxsIHRoZSBvdGhlclxuICAvLyBwcmV2aW91cyBpbWFnZXMgYXJlIGxvYWRlZCBhbmQgdGhlIGFydGljbGVzIGFyZSBvY2N1cHlpbmdcbiAgLy8gdGhlIHNpemUgdGhleSB3b3VsZCBkbyB3aXRoIGltYWdlcy5cbiAgY29uc3QgY2FyZFJlZiA9IFJlYWN0LnVzZVJlZjxIVE1MRWxlbWVudD4obnVsbClcbiAgY29uc3QgaGFzU2Nyb2xsZWQgPSBSZWFjdC51c2VSZWY8Ym9vbGVhbj4oZmFsc2UpXG4gIGNvbnN0IGhhc0ltYWdlTG9hZGVkID0gUmVhY3QudXNlUmVmPGJvb2xlYW4+KGZhbHNlKVxuICBjb25zdCBzY3JvbGxJbnRvVmlld0NvbmRpdGlvbmFsbHkgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHNob3VsZFNjcm9sbEludG9WaWV3ICYmICFoYXNTY3JvbGxlZC5jdXJyZW50ICYmIGhhc0ltYWdlTG9hZGVkLmN1cnJlbnQgJiYgY2FyZFJlZi5jdXJyZW50KSB7XG4gICAgICBoYXNTY3JvbGxlZC5jdXJyZW50ID0gdHJ1ZVxuICAgICAgY2FyZFJlZi5jdXJyZW50LnNjcm9sbEludG9WaWV3KHsgYmxvY2s6ICdjZW50ZXInIH0pXG4gICAgfVxuICB9XG4gIGNvbnN0IG9uSW1hZ2VMb2FkZWQ6ICgpID0+IGFueSA9ICgpID0+IHtcbiAgICBoYXNJbWFnZUxvYWRlZC5jdXJyZW50ID0gdHJ1ZVxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICBzY3JvbGxJbnRvVmlld0NvbmRpdGlvbmFsbHkoKVxuICAgIH0pXG4gIH1cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBzY3JvbGxJbnRvVmlld0NvbmRpdGlvbmFsbHkoKVxuICB9LCBbXSkgLy8gZW1wdHkgYXJyYXkgc28gb25seSBydW5zIG9uIGZpcnN0IHJlbmRlclxuICByZXR1cm4gW2NhcmRSZWYsIG9uSW1hZ2VMb2FkZWRdXG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVGhlIEJyYXZlIEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4vLyBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIGZpbGUsXG4vLyBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cHM6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy5cblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgKiBhcyBDYXJkIGZyb20gJy4uL2NhcmRTaXplcydcbmltcG9ydCAqIGFzIEJyYXZlTmV3cyBmcm9tICcuLi8uLi8uLi8uLi8uLi9icmF2ZV9uZXdzL2Jyb3dzZXIvcmVzb3VyY2VzL3NoYXJlZC9hcGknXG5cbnR5cGUgUHJvcHMgPSB7XG4gIGltYWdlVXJsPzogc3RyaW5nXG4gIGxpc3Q/OiBib29sZWFuXG4gIG9uTG9hZGVkPzogKCkgPT4gYW55XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhcmRJbWFnZShwcm9wczogUHJvcHMpIHtcbiAgY29uc3QgaW1hZ2VVcmwgPSBgY2hyb21lOi8vaW1hZ2U/dXJsPSR7ZW5jb2RlVVJJQ29tcG9uZW50KHByb3BzLmltYWdlVXJsID8/ICcnKX1gXG4gIGNvbnN0IFtpc0ltYWdlTG9hZGVkLCBzZXRJc0ltYWdlTG9hZGVkXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChpbWFnZVVybCkge1xuICAgICAgY29uc3QgaW1nID0gbmV3IEltYWdlKClcbiAgICAgIGxldCBzaG91bGRDYW5jZWwgPSBmYWxzZVxuICAgICAgaW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gICAgICAgIGlmICghc2hvdWxkQ2FuY2VsKSB7XG4gICAgICAgICAgc2V0SXNJbWFnZUxvYWRlZCh0cnVlKVxuICAgICAgICAgIHByb3BzLm9uTG9hZGVkPy4oKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgaW1nLnNyYyA9IGltYWdlVXJsXG4gICAgICByZXR1cm4gKCkgPT4geyBzaG91bGRDYW5jZWwgPSB0cnVlIH1cbiAgICB9XG5cbiAgICByZXR1cm4gKCkgPT4geyB9XG4gIH0sIFtpbWFnZVVybF0pXG4gIGNvbnN0IEZyYW1lID0gcHJvcHMubGlzdCA/IENhcmQuTGlzdEltYWdlRnJhbWUgOiBDYXJkLkltYWdlRnJhbWVcbiAgcmV0dXJuIChcbiAgICA8RnJhbWUgZGF0YS1zb3VyY2U9e3Byb3BzLmltYWdlVXJsfSBpc0ltYWdlTG9hZGVkPXtpc0ltYWdlTG9hZGVkfT5cbiAgICAgIDxDYXJkLkltYWdlIHNyYz17aW1hZ2VVcmx9IC8+XG4gICAgPC9GcmFtZT5cbiAgKVxufVxuXG50eXBlIEZyb21GZWVkSXRlbVByb3BzID0gT21pdDxQcm9wcywgJ2ltYWdlVXJsJyB8ICdpc1VucGFkZGVkJz4gJiB7XG4gIGRhdGE6IEJyYXZlTmV3cy5GZWVkSXRlbU1ldGFkYXRhXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBDYXJkSW1hZ2VGcm9tRmVlZEl0ZW0ocHJvcHM6IEZyb21GZWVkSXRlbVByb3BzKSB7XG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFwcm9wcy5kYXRhLmltYWdlLmltYWdlVXJsICYmICFwcm9wcy5kYXRhLmltYWdlLnBhZGRlZEltYWdlVXJsKSB7XG4gICAgICAvLyBTaG91bGRuJ3QgaGFwcGVuIHNpbmNlIGJhY2tlbmQgZmlsdGVycyBvdXQgaXRlbXNcbiAgICAgIC8vIHdpdGggbm8gaW1hZ2UuXG4gICAgICAvLyBJdCBjYW4gaGFwcGVuIGZvciBkaXJlY3QtZmVlZCBpdGVtcywgYW5kIHdlIGp1c3QgZG9uJ3QgZGlzcGxheSB0aGVcbiAgICAgIC8vIGltYWdlLlxuICAgICAgLy8gVGhpcyBpcyBpbiBhIHVzZUVmZmVjdCBzbyBpdCBkb2VzIG5vdCBsb2cgZXZlcnkgcmVuZGVyLlxuICAgICAgY29uc29sZS53YXJuKCdCcmF2ZSBOZXdzIGZvdW5kIGl0ZW0gd2l0aCBubyBpbWFnZScsIHByb3BzLmRhdGEudXJsLnVybClcbiAgICB9XG4gIH0sIFtwcm9wcy5kYXRhLmltYWdlLmltYWdlVXJsLCBwcm9wcy5kYXRhLmltYWdlLnBhZGRlZEltYWdlVXJsXSlcbiAgY29uc3QgaW1hZ2VVcmwgPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBpZiAocHJvcHMuZGF0YS5pbWFnZS5pbWFnZVVybD8udXJsKSB7IHJldHVybiBwcm9wcy5kYXRhLmltYWdlLmltYWdlVXJsLnVybCB9XG4gICAgaWYgKHByb3BzLmRhdGEuaW1hZ2UucGFkZGVkSW1hZ2VVcmw/LnVybCkgeyByZXR1cm4gcHJvcHMuZGF0YS5pbWFnZS5wYWRkZWRJbWFnZVVybC51cmwgfVxuICAgIHJldHVybiAnJ1xuICB9LCBbcHJvcHMuZGF0YS5pbWFnZS5pbWFnZVVybCwgcHJvcHMuZGF0YS5pbWFnZS5wYWRkZWRJbWFnZVVybCwgcHJvcHMuZGF0YS5kZXNjcmlwdGlvbl0pXG4gIGNvbnN0IHsgZGF0YSwgLi4uYmFzZVByb3BzIH0gPSBwcm9wc1xuICBpZiAoaW1hZ2VVcmwpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPENhcmRJbWFnZVxuICAgICAgICB7Li4uYmFzZVByb3BzfVxuICAgICAgICBpbWFnZVVybD17aW1hZ2VVcmx9XG4gICAgICAvPlxuICAgIClcbiAgfVxuICByZXR1cm4gbnVsbFxufVxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFRoZSBCcmF2ZSBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuLy8gTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBmaWxlLFxuLy8gWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHBzOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uXG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCB7IGZvcm1hdExvY2FsZSB9IGZyb20gJyR3ZWItY29tbW9uL2xvY2FsZSdcbmltcG9ydCB7IFB1Ymxpc2hlciB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2JyYXZlX25ld3MvYnJvd3Nlci9yZXNvdXJjZXMvc2hhcmVkL2FwaSdcbmltcG9ydCB7IE9uU2V0UHVibGlzaGVyUHJlZiB9IGZyb20gJy4uLydcblxudHlwZSBQcm9wcyA9IHtcbiAgcHVibGlzaGVyOiBQdWJsaXNoZXJcbiAgb25TZXRQdWJsaXNoZXJQcmVmOiBPblNldFB1Ymxpc2hlclByZWZcbiAgdGl0bGU/OiBib29sZWFuXG59XG5cbi8vIFRPRE8ocGV0ZW1pbGwpOiBNYWtlIHRoaXMgc2hhcmVkIGFuZCBoYXZlIFdpZGdldE1lbnUgdXNlIGl0LFxuLy8gc28gd2UncmUgbm90IGR1cGxpY2F0aW5nIHN0eWxlcywgZnVuY3Rpb25hbGl0eSBhbmQgYWNjZXNzaWJpbGl0eS5cbmNvbnN0IGlzT3BlbkNsYXNzTmFtZSA9ICdpcy1vcGVuJ1xuXG5jb25zdCBQdWJsaXNoZXJNZXRhID0gc3R5bGVkKCdkaXYnKWBcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuYFxuXG5jb25zdCBUcmlnZ2VyID0gc3R5bGVkKCdidXR0b24nKWBcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDA7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gIHBhZGRpbmc6IDA7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgb3V0bGluZTogbm9uZTtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xuXG4gIC8vIE5lZ2F0aXZlIG1hcmdpbiBpcyBvayBoZXJlIGJlY2F1c2Ugd2UncmUgZG9pbmcgYVxuICAvLyBcImdob3N0XCIgb3V0bGluZSwgYnV0IHdlIGRvIG5lZWQgdG8gdGFrZSBjYXJlIG5vdCB0byBvdmVybGFwIGFueSBzaWJsaW5nXG4gIC8vIGVsZW1lbnRzLlxuICAtLWdob3N0LXBhZGRpbmctdjogbWF4KDQuNyUsIDVweCk7XG4gIC0tZ2hvc3QtcGFkZGluZy1oOiBtYXgoOSUsIDEycHgpO1xuICBwYWRkaW5nOiB2YXIoLS1naG9zdC1wYWRkaW5nLXYpIHZhcigtLWdob3N0LXBhZGRpbmctaCk7XG4gIG1hcmdpbjogY2FsYyh2YXIoLS1naG9zdC1wYWRkaW5nLXYpICogLTEgLSAxcHgpIGNhbGModmFyKC0tZ2hvc3QtcGFkZGluZy1oKSAqIC0xIC0gMXB4KTtcbiAgYm9yZGVyOiBzb2xpZCAxcHggdHJhbnNwYXJlbnQ7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xuXG4gICYuJHtpc09wZW5DbGFzc05hbWV9LFxuICAmOmZvY3VzLXZpc2libGUsXG4gICY6aG92ZXIsXG4gICY6YWN0aXZlIHtcbiAgICBib3JkZXItY29sb3I6IGluaGVyaXQ7XG4gIH1cblxuICAmOmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuMik7XG4gIH1cbmBcblxuY29uc3QgVGV4dCA9IHN0eWxlZCgnc3BhbicpYFxuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBmb250LWZhbWlseTogJHtwID0+IHAudGhlbWUuZm9udEZhbWlseS5oZWFkaW5nfTtcbmBcblxuY29uc3QgTWVudSA9IHN0eWxlZCgndWwnKWBcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBtYXJnaW46IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IG1heC1jb250ZW50O1xuICBtaW4td2lkdGg6IDE2NnB4O1xuICBib3R0b206IDExNCU7XG4gIGxlZnQ6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNoYWRvdzogMHB4IDBweCA2cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgcGFkZGluZzogOHB4IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICR7cCA9PiBwLnRoZW1lLmNvbG9yLmNvbnRleHRNZW51QmFja2dyb3VuZH07XG4gIGNvbG9yOiAgJHtwID0+IHAudGhlbWUuY29sb3IuY29udGV4dE1lbnVGb3JlZ3JvdW5kfTtcbmBcblxuY29uc3QgTWVudUl0ZW0gPSBzdHlsZWQoJ2xpJylgXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgcGFkZGluZzogMTBweCAxOHB4O1xuICBvdXRsaW5lOiBub25lO1xuICBmb250LXNpemU6IDEycHg7XG5cbiAgJjpob3ZlcixcbiAgJjpmb2N1cyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtwID0+IHAudGhlbWUuY29sb3IuY29udGV4dE1lbnVIb3ZlckJhY2tncm91bmR9O1xuICAgIGNvbG9yOiAke3AgPT4gcC50aGVtZS5jb2xvci5jb250ZXh0TWVudUhvdmVyRm9yZWdyb3VuZH07XG4gIH1cblxuICAmOmFjdGl2ZSB7XG4gICAgLy8gVE9ETyhwZXRlbWlsbCk6IFRoZW1lIGRvZXNuJ3QgaGF2ZSBhIGNvbnRleHQgbWVudSBpbnRlcmFjdGl2ZSBjb2xvcixcbiAgICAvLyBtYWtlIG9uZSBhbmQgZG9uJ3QgbWFrZSBlbnRpcmUgZWxlbWVudCBvcGFxdWUuXG4gICAgb3BhY2l0eTogLjg7XG4gIH1cblxuICAmOmZvY3VzLXZpc2libGUge1xuICAgIG91dGxpbmU6IHNvbGlkIDFweCAke3AgPT4gcC50aGVtZS5jb2xvci5icmFuZEJyYXZlfTtcbiAgfVxuYFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQdWJsaXNoZXJNZXRhQ29tcG9uZW50IChwcm9wczogUHJvcHMpIHtcbiAgY29uc3QgW2lzTWVudU9wZW4sIHNldElzTWVudU9wZW5dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXG5cbiAgY29uc3QgdHJpZ2dlckVsZW1lbnRSZWYgPSBSZWFjdC51c2VSZWY8SFRNTEJ1dHRvbkVsZW1lbnQ+KG51bGwpXG5cbiAgY29uc3Qgb25DbGlja0Nsb3NlTWVudSA9IFJlYWN0LnVzZUNhbGxiYWNrKChlOiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgY29uc3QgdHJpZ2dlckVsZW1lbnQgPSB0cmlnZ2VyRWxlbWVudFJlZi5jdXJyZW50XG4gICAgaWYgKCF0cmlnZ2VyRWxlbWVudCB8fCB0cmlnZ2VyRWxlbWVudC5jb250YWlucyhlLnRhcmdldCBhcyBOb2RlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIHNldElzTWVudU9wZW4oZmFsc2UpXG4gIH0sIFtzZXRJc01lbnVPcGVuXSlcblxuICBjb25zdCBvbktleURvd24gPSBSZWFjdC51c2VDYWxsYmFjaygoZTogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgIGlmIChlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBpZiAoZS5rZXkgPT09ICdFc2NhcGUnKSB7XG4gICAgICBzZXRJc01lbnVPcGVuKGZhbHNlKVxuICAgIH1cbiAgfSwgW3NldElzTWVudU9wZW5dKVxuXG4gIGNvbnN0IHRvZ2dsZU1lbnUgPSBSZWFjdC51c2VDYWxsYmFjaygoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBzZXRJc01lbnVPcGVuKCh2YWx1ZSkgPT4gIXZhbHVlKVxuICB9LCBbc2V0SXNNZW51T3Blbl0pXG5cbiAgLy8gU2V0dXAgb3IgcmVtb3RlIGV2ZW50IGxpc3RlbmVycyB3aGVuIG9wZW5zIG9yIGNsb3Nlc1xuICAvLyBvciB0aGlzIGVsZW1lbnQgaXMgcmVtb3ZlZC5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCByZW1vdmVFdmVudExpc3RlbmVycyA9ICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIG9uQ2xpY2tDbG9zZU1lbnUpXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIG9uS2V5RG93bilcbiAgICB9XG4gICAgaWYgKCFpc01lbnVPcGVuKSB7XG4gICAgICByZW1vdmVFdmVudExpc3RlbmVycygpXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFRPRE8ocGV0ZW1pbGwpOiBzZXQgZWxlbWVudCBmb2N1cyB3aGVuIHVzaW5nIGtleWJvYXJkIGFycm93cy5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9uQ2xpY2tDbG9zZU1lbnUpXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIG9uS2V5RG93bilcbiAgICB9XG4gICAgcmV0dXJuIHJlbW92ZUV2ZW50TGlzdGVuZXJzXG4gIH0sIFtpc01lbnVPcGVuXSlcblxuICBjb25zdCBvbkNsaWNrRGlzYWJsZVB1Ymxpc2hlciA9IFJlYWN0LnVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBwcm9wcy5vblNldFB1Ymxpc2hlclByZWYoXG4gICAgICBwcm9wcy5wdWJsaXNoZXIucHVibGlzaGVySWQsXG4gICAgICBmYWxzZVxuICAgIClcbiAgfSwgW3Byb3BzLnB1Ymxpc2hlciwgcHJvcHMub25TZXRQdWJsaXNoZXJQcmVmXSlcblxuICByZXR1cm4gKFxuICAgIDxQdWJsaXNoZXJNZXRhPlxuICAgICAgPFRyaWdnZXJcbiAgICAgICAgY2xhc3NOYW1lPXtpc01lbnVPcGVuID8gaXNPcGVuQ2xhc3NOYW1lIDogdW5kZWZpbmVkfVxuICAgICAgICBvbkNsaWNrPXt0b2dnbGVNZW51fVxuICAgICAgICByZWY9e3RyaWdnZXJFbGVtZW50UmVmfVxuICAgICAgICBhcmlhLWhhc3BvcHVwPSd0cnVlJ1xuICAgICAgICBhcmlhLWV4cGFuZGVkPXtpc01lbnVPcGVuID8gJ3RydWUnIDogJ2ZhbHNlJ31cbiAgICAgID5cbiAgICAgICAgPFRleHQ+XG4gICAgICAgICAge3Byb3BzLnB1Ymxpc2hlci5wdWJsaXNoZXJOYW1lfVxuICAgICAgICA8L1RleHQ+XG4gICAgICAgIHtpc01lbnVPcGVuICYmXG4gICAgICAgICAgPE1lbnVcbiAgICAgICAgICAgIHJvbGU9J21lbnUnXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPE1lbnVJdGVtXG4gICAgICAgICAgICAgIHJvbGU9J21lbnVpdGVtJ1xuICAgICAgICAgICAgICB0YWJJbmRleD17MH1cbiAgICAgICAgICAgICAgb25DbGljaz17b25DbGlja0Rpc2FibGVQdWJsaXNoZXJ9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtmb3JtYXRMb2NhbGUoUy5CUkFWRV9ORVdTX0hJREVfQ09OVEVOVF9GUk9NLCB7XG4gICAgICAgICAgICAgICAgJDE6IHByb3BzLnB1Ymxpc2hlci5wdWJsaXNoZXJOYW1lXG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9NZW51SXRlbT5cbiAgICAgICAgICA8L01lbnU+XG4gICAgICAgIH1cbiAgICAgIDwvVHJpZ2dlcj5cbiAgICA8L1B1Ymxpc2hlck1ldGE+XG4gIClcbn1cbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMCBUaGUgQnJhdmUgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbi8vIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXMgZmlsZSxcbi8vIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwczovL21vemlsbGEub3JnL01QTC8yLjAvLlxuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE9uUmVhZEZlZWRJdGVtLCBPblNldFB1Ymxpc2hlclByZWYgfSBmcm9tICcuLi8uLi8nXG5pbXBvcnQgKiBhcyBCcmF2ZU5ld3MgZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vYnJhdmVfbmV3cy9icm93c2VyL3Jlc291cmNlcy9zaGFyZWQvYXBpJ1xuaW1wb3J0ICogYXMgQ2FyZCBmcm9tICcuLi8uLi9jYXJkU2l6ZXMnXG5pbXBvcnQgdXNlUmVhZEFydGljbGVDbGlja0hhbmRsZXIgZnJvbSAnLi4vLi4vdXNlUmVhZEFydGljbGVDbGlja0hhbmRsZXInXG5pbXBvcnQgdXNlU2Nyb2xsSW50b1ZpZXcgZnJvbSAnLi4vLi4vdXNlU2Nyb2xsSW50b1ZpZXcnXG5pbXBvcnQgeyBDYXJkSW1hZ2VGcm9tRmVlZEl0ZW0gfSBmcm9tICcuLi9DYXJkSW1hZ2UnXG5pbXBvcnQgUHVibGlzaGVyTWV0YSBmcm9tICcuLi9QdWJsaXNoZXJNZXRhJ1xuLy8gVE9ETyhwZXRlbWlsbCk6IExhcmdlIGFuZCBNZWRpdW0gYXJ0aWNsZSBzaG91bGQgYmUgY29tYmluZWQgdG8gMSBjb21wb25lbnQuXG5cbnR5cGUgUHJvcHMgPSB7XG4gIG9uUmVhZEZlZWRJdGVtOiBPblJlYWRGZWVkSXRlbVxuICBvblNldFB1Ymxpc2hlclByZWY6IE9uU2V0UHVibGlzaGVyUHJlZlxufVxuXG50eXBlIEFydGljbGVzUHJvcHMgPSBQcm9wcyAmIHtcbiAgY29udGVudDogQnJhdmVOZXdzLkZlZWRJdGVtW11cbiAgcHVibGlzaGVyczogQnJhdmVOZXdzLlB1Ymxpc2hlcnNcbiAgYXJ0aWNsZVRvU2Nyb2xsVG8/OiBCcmF2ZU5ld3MuRmVlZEl0ZW1NZXRhZGF0YVxufVxuXG50eXBlIEFydGljbGVQcm9wcyA9IFByb3BzICYge1xuICBpdGVtOiBCcmF2ZU5ld3MuRmVlZEl0ZW1cbiAgcHVibGlzaGVyPzogQnJhdmVOZXdzLlB1Ymxpc2hlclxuICBzaG91bGRTY3JvbGxJbnRvVmlldz86IGJvb2xlYW5cbn1cblxuY29uc3QgTGFyZ2VBcnRpY2xlID0gUmVhY3QuZm9yd2FyZFJlZjxIVE1MRWxlbWVudCwgQXJ0aWNsZVByb3BzPihmdW5jdGlvbiAocHJvcHM6IEFydGljbGVQcm9wcywgZm9yd2FyZGVkUmVmKSB7XG4gIGNvbnN0IHsgcHVibGlzaGVyLCBpdGVtIH0gPSBwcm9wc1xuICBjb25zdCBbY2FyZFJlZl0gPSB1c2VTY3JvbGxJbnRvVmlldyhwcm9wcy5zaG91bGRTY3JvbGxJbnRvVmlldyB8fCBmYWxzZSlcblxuICBjb25zdCBpbm5lclJlZiA9IFJlYWN0LnVzZVJlZjxIVE1MRWxlbWVudD4obnVsbClcblxuICBjb25zdCBkYXRhID0gaXRlbS5hcnRpY2xlPy5kYXRhXG5cbiAgY29uc3Qgb25DbGljayA9IHVzZVJlYWRBcnRpY2xlQ2xpY2tIYW5kbGVyKHByb3BzLm9uUmVhZEZlZWRJdGVtLCB7IGl0ZW0gfSlcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghaW5uZXJSZWYuY3VycmVudCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIC8vIFBhc3MgcmVmIHRvIHBhcmVudFxuICAgIGlmIChmb3J3YXJkZWRSZWYpIHtcbiAgICAgIGlmICh0eXBlb2YgZm9yd2FyZGVkUmVmID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGZvcndhcmRlZFJlZihpbm5lclJlZi5jdXJyZW50KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvclxuICAgICAgICAvLyBSZWYuY3VycmVudCBpcyBtZWFudCB0byBiZSByZWFkb25seSwgYnV0IHdlIGNhbiBpZ25vcmUgdGhhdC5cbiAgICAgICAgcmVmLmN1cnJlbnQgPSBuZXdSZWZcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtpbm5lclJlZi5jdXJyZW50XSlcblxuICBpZiAoIWRhdGEpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgLy8gVE9ETyhwZXRlbWlsbCk6IEF2b2lkIG5lc3RlZCBsaW5rc1xuICAvLyBgcmVmIGFzIGFueWAgZHVlIHRvIGh0dHBzOi8vZ2l0aHViLmNvbS9EZWZpbml0ZWx5VHlwZWQvRGVmaW5pdGVseVR5cGVkL2lzc3Vlcy8yODg4NFxuICByZXR1cm4gKFxuICAgIDxDYXJkLkxhcmdlIGRhdGEtc2NvcmU9e2RhdGEuc2NvcmV9IHJlZj17aW5uZXJSZWZ9PlxuICAgICAgPGEgb25DbGljaz17b25DbGlja30gaHJlZj17ZGF0YS51cmwudXJsfSByZWY9e2NhcmRSZWZ9PlxuICAgICAgICA8Q2FyZEltYWdlRnJvbUZlZWRJdGVtXG4gICAgICAgICAgZGF0YT17ZGF0YX1cbiAgICAgICAgLz5cbiAgICAgICAgPENhcmQuQ29udGVudD5cbiAgICAgICAgICA8Q2FyZC5IZWFkaW5nPlxuICAgICAgICAgICAge2RhdGEudGl0bGV9XG4gICAgICAgICAgPC9DYXJkLkhlYWRpbmc+XG4gICAgICAgICAgPENhcmQuVGltZT57ZGF0YS5yZWxhdGl2ZVRpbWVEZXNjcmlwdGlvbn08L0NhcmQuVGltZT5cbiAgICAgICAgICB7XG4gICAgICAgICAgICBwdWJsaXNoZXIgJiZcbiAgICAgICAgICAgIDxDYXJkLlNvdXJjZT5cbiAgICAgICAgICAgICAgPENhcmQuUHVibGlzaGVyPlxuICAgICAgICAgICAgICAgIDxQdWJsaXNoZXJNZXRhXG4gICAgICAgICAgICAgICAgICBwdWJsaXNoZXI9e3B1Ymxpc2hlcn1cbiAgICAgICAgICAgICAgICAgIG9uU2V0UHVibGlzaGVyUHJlZj17cHJvcHMub25TZXRQdWJsaXNoZXJQcmVmfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvQ2FyZC5QdWJsaXNoZXI+XG4gICAgICAgICAgICA8L0NhcmQuU291cmNlPlxuICAgICAgICAgIH1cbiAgICAgICAgPC9DYXJkLkNvbnRlbnQ+XG4gICAgICA8L2E+XG4gICAgPC9DYXJkLkxhcmdlPlxuICApXG59KVxuXG5jb25zdCBDYXJkU2luZ2xlQXJ0aWNsZUxhcmdlID0gUmVhY3QuZm9yd2FyZFJlZjxIVE1MRWxlbWVudCwgQXJ0aWNsZXNQcm9wcz4oZnVuY3Rpb24gKHByb3BzLCByZWYpIHtcbiAgLy8gbm8gZnVsbCBjb250ZW50IG5vIHJlbmRlcsKuXG4gIGlmIChwcm9wcy5jb250ZW50Lmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBudWxsXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7cHJvcHMuY29udGVudC5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGtleSA9IGBjYXJkLWtleS0ke2luZGV4fWBcbiAgICAgICAgY29uc3QgZGF0YSA9IGl0ZW0uYXJ0aWNsZT8uZGF0YVxuICAgICAgICAvLyBJZiB0aGVyZSBpcyBhIG1pc3NpbmcgaXRlbSwgcmV0dXJuIG5vdGhpbmdcbiAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudFxuICAgICAgICAgICAgICBrZXk9e2tleX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc2hvdWxkU2Nyb2xsSW50b1ZpZXcgPSAocHJvcHMuYXJ0aWNsZVRvU2Nyb2xsVG8gJiZcbiAgICAgICAgICAgIChwcm9wcy5hcnRpY2xlVG9TY3JvbGxUby51cmwudXJsID09PSBkYXRhLnVybC51cmwpKVxuXG4gICAgICAgIGNvbnN0IHB1Ymxpc2hlciA9IHByb3BzLnB1Ymxpc2hlcnNbZGF0YS5wdWJsaXNoZXJJZF1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxMYXJnZUFydGljbGVcbiAgICAgICAgICAgIHJlZj17cmVmfVxuICAgICAgICAgICAga2V5PXtrZXl9XG4gICAgICAgICAgICBwdWJsaXNoZXI9e3B1Ymxpc2hlcn1cbiAgICAgICAgICAgIGl0ZW09e2l0ZW19XG4gICAgICAgICAgICBzaG91bGRTY3JvbGxJbnRvVmlldz17c2hvdWxkU2Nyb2xsSW50b1ZpZXd9XG4gICAgICAgICAgICBvblJlYWRGZWVkSXRlbT17cHJvcHMub25SZWFkRmVlZEl0ZW19XG4gICAgICAgICAgICBvblNldFB1Ymxpc2hlclByZWY9e3Byb3BzLm9uU2V0UHVibGlzaGVyUHJlZn1cbiAgICAgICAgICAvPlxuICAgICAgICApXG4gICAgICB9KX1cbiAgICA8Lz5cbiAgKVxufSlcblxuZXhwb3J0IGRlZmF1bHQgQ2FyZFNpbmdsZUFydGljbGVMYXJnZVxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFRoZSBCcmF2ZSBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuLy8gTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBmaWxlLFxuLy8gWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHBzOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uXG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCBCdXR0b24gZnJvbSAnQGJyYXZlL2xlby9yZWFjdC9idXR0b24nXG5pbXBvcnQgeyBnZXRMb2NhbGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vbG9jYWxlJ1xuaW1wb3J0ICogYXMgQ2FyZCBmcm9tICcuLi9jYXJkSW50cm8nXG5cbmNvbnN0IENvbnRlbnQgPSBzdHlsZWQoJ2RpdicpYFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbmBcblxuY29uc3QgSGVhZGluZyA9IHN0eWxlZCgnaDMnKWBcbiAgbWFyZ2luOiAxNnB4IDA7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbmBcblxuY29uc3QgR3JhcGhpYyA9IHN0eWxlZCgnZGl2JylgXG4gIHdpZHRoOiA2NHB4O1xuICBoZWlnaHQ6IDQ2cHg7XG5gXG5cbmNvbnN0IEFjdGlvbiA9IHN0eWxlZCgnZGl2JylgXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuYFxuXG5mdW5jdGlvbiBJY29uICgpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgZmlsbD0nbm9uZScgdmlld0JveD0nMCAwIDY0IDQ2Jz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGZpbGw9JyNGMEYyRkYnXG4gICAgICAgIGZpbGxSdWxlPSdldmVub2RkJ1xuICAgICAgICBkPSdNNDkuNjcgNDZIMTMuMzNDNS4zNiA0NiAwIDQxLjMyIDAgMzQuMzdjMC01LjQ1IDMuMDgtMTAuMzMgNy44NC0xMi43NGwtLjAyLS44NEM3LjgyIDkuNjkgMTYuOTIuNjcgMjguMS42N2EyMC4zIDIwLjMgMCAwMTE4LjM3IDExLjY1YzkuNzQuNCAxNy41NCA4LjQgMTcuNTQgMTguMTdDNjQgMzkuMzMgNTcuODQgNDYgNDkuNjcgNDZ6bS0zLjk4LTI4LjM3Yy0uMjQgMC0uNDcuMDItLjcuMDUtMS4yNC4xNC0yLjQtLjYtMi44MS0xLjc3QTE0Ljk0IDE0Ljk0IDAgMDAyOC4wOCA2YTE0Ljg4IDE0Ljg4IDAgMDAtMTQuOTIgMTQuNzljMCAuNjguMDYgMS4zNy4xOCAyLjExYTIuNjcgMi42NyAwIDAxLTEuOCAyLjk2IDguOTUgOC45NSAwIDAwLTYuMiA4LjVjMCA1Ljg1IDYuMTIgNi4zIDggNi4zaDM2LjMzYzQuNDcgMCA5LTMuNSA5LTEwLjE3IDAtNy4xLTUuODMtMTIuODYtMTIuOTgtMTIuODZ6TTQwIDM1LjMzYy0uNjggMC0xLjM3LS4yNi0xLjg5LS43OC0uMDUtLjA0LTIuMDYtMS44OC02LjExLTEuODgtNC4wNSAwLTYuMDYgMS44NC02LjE0IDEuOTEtMS4wNyAxLTIuNzUuOTctMy43Ni0uMDdhMi42NSAyLjY1IDAgMDEuMDEtMy43M2MuMzYtLjM1IDMuNjMtMy40NSA5Ljg5LTMuNDUgNi4yNiAwIDkuNTMgMy4xIDkuODkgMy40NUEyLjY2IDIuNjYgMCAwMTQwIDM1LjMzem0tNS4zMy0xNkg0MHY1LjM0aC01LjMzdi01LjM0em0tMTAuNjcgMGg1LjMzdjUuMzRIMjR2LTUuMzR6J1xuICAgICAgICBjbGlwUnVsZT0nZXZlbm9kZCdcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuaW50ZXJmYWNlIE1lc3NhZ2VQcm9wcyB7XG4gIGhlYWRpbmc6IHN0cmluZ1xuICBtZXNzYWdlOiBzdHJpbmdcbiAgYWN0aW9uTGFiZWw/OiBzdHJpbmdcbiAgb25BY3Rpb25DbGljaz86ICgpID0+IHVua25vd25cbn1cbmV4cG9ydCBmdW5jdGlvbiBVbmlkZWFsTWVzc2FnZUNhcmQgKHByb3BzOiBNZXNzYWdlUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8Q2FyZC5JbnRybz5cbiAgICAgIDxDb250ZW50PlxuICAgICAgICA8R3JhcGhpYz5cbiAgICAgICAgICA8SWNvbiAvPlxuICAgICAgICA8L0dyYXBoaWM+XG4gICAgICAgIDxIZWFkaW5nPlxuICAgICAgICAgIHtwcm9wcy5oZWFkaW5nfVxuICAgICAgICA8L0hlYWRpbmc+XG4gICAgICAgIDxDYXJkLlBhcmFncmFwaD5cbiAgICAgICAgICB7cHJvcHMubWVzc2FnZX1cbiAgICAgICAgPC9DYXJkLlBhcmFncmFwaD5cbiAgICAgICAgeyEhcHJvcHMuYWN0aW9uTGFiZWwgJiYgISFwcm9wcy5vbkFjdGlvbkNsaWNrICYmXG4gICAgICAgICAgPEFjdGlvbj5cbiAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17cHJvcHMub25BY3Rpb25DbGlja30+XG4gICAgICAgICAgICAgIHtwcm9wcy5hY3Rpb25MYWJlbH1cbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvQWN0aW9uPlxuICAgICAgICB9XG4gICAgICA8L0NvbnRlbnQ+XG4gICAgPC9DYXJkLkludHJvPlxuICApXG59XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIG9uUmVmcmVzaDogKCkgPT4gdW5rbm93blxufVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2FyZEVycm9yIChwcm9wczogUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8VW5pZGVhbE1lc3NhZ2VDYXJkXG4gICAgICBoZWFkaW5nPXtnZXRMb2NhbGUoUy5CUkFWRV9ORVdTX0VSUk9SX0hFQURJTkcpfVxuICAgICAgbWVzc2FnZT17Z2V0TG9jYWxlKFMuQlJBVkVfTkVXU19FUlJPUl9NRVNTQUdFKX1cbiAgICAgIGFjdGlvbkxhYmVsPXtnZXRMb2NhbGUoUy5CUkFWRV9ORVdTX0VSUk9SX0FDVElPTl9MQUJFTCl9XG4gICAgICBvbkFjdGlvbkNsaWNrPXtwcm9wcy5vblJlZnJlc2h9XG4gICAgLz5cbiAgKVxufVxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIyIFRoZSBCcmF2ZSBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuLy8gTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBmaWxlLFxuLy8gWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHBzOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uXG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgZ2V0TG9jYWxlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2xvY2FsZSdcbmltcG9ydCB7IFVuaWRlYWxNZXNzYWdlQ2FyZCB9IGZyb20gJy4vY2FyZEVycm9yJ1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBvbkN1c3RvbWl6ZTogKCkgPT4gdW5rbm93blxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXJkTm9Db250ZW50IChwcm9wczogUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8VW5pZGVhbE1lc3NhZ2VDYXJkXG4gICAgICBoZWFkaW5nPXtnZXRMb2NhbGUoUy5CUkFWRV9ORVdTX05PX0NPTlRFTlRfSEVBRElORyl9XG4gICAgICBtZXNzYWdlPXtnZXRMb2NhbGUoUy5CUkFWRV9ORVdTX05PX0NPTlRFTlRfTUVTU0FHRSl9XG4gICAgICBhY3Rpb25MYWJlbD17Z2V0TG9jYWxlKFMuQlJBVkVfTkVXU19OT19DT05URU5UX0FDVElPTl9MQUJFTCl9XG4gICAgICBvbkFjdGlvbkNsaWNrPXtwcm9wcy5vbkN1c3RvbWl6ZX1cbiAgICAvPlxuICApXG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVGhlIEJyYXZlIEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4vLyBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIGZpbGUsXG4vLyBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cHM6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy5cblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgKiBhcyBCcmF2ZU5ld3MgZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vYnJhdmVfbmV3cy9icm93c2VyL3Jlc291cmNlcy9zaGFyZWQvYXBpJ1xuaW1wb3J0IHsgQ2FyZEltYWdlRnJvbUZlZWRJdGVtIH0gZnJvbSAnLi4vQ2FyZEltYWdlJ1xuaW1wb3J0ICogYXMgQ2FyZCBmcm9tICcuLi8uLi9jYXJkU2l6ZXMnXG5pbXBvcnQgUHVibGlzaGVyTWV0YSBmcm9tICcuLi9QdWJsaXNoZXJNZXRhJ1xuaW1wb3J0IHVzZVNjcm9sbEludG9WaWV3IGZyb20gJy4uLy4uL3VzZVNjcm9sbEludG9WaWV3J1xuaW1wb3J0IHVzZVJlYWRBcnRpY2xlQ2xpY2tIYW5kbGVyIGZyb20gJy4uLy4uL3VzZVJlYWRBcnRpY2xlQ2xpY2tIYW5kbGVyJ1xuaW1wb3J0IHsgT25SZWFkRmVlZEl0ZW0sIE9uU2V0UHVibGlzaGVyUHJlZiB9IGZyb20gJy4uLy4uLydcbi8vIFRPRE8ocGV0ZW1pbGwpOiBMYXJnZSBhbmQgTWVkaXVtIGFydGljbGUgc2hvdWxkIGJlIGNvbWJpbmVkIHRvIDEgY29tcG9uZW50LlxuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBjb250ZW50OiBCcmF2ZU5ld3MuRmVlZEl0ZW1bXVxuICBwdWJsaXNoZXJzOiBCcmF2ZU5ld3MuUHVibGlzaGVyc1xuICBhcnRpY2xlVG9TY3JvbGxUbz86IEJyYXZlTmV3cy5GZWVkSXRlbU1ldGFkYXRhXG4gIG9uUmVhZEZlZWRJdGVtOiBPblJlYWRGZWVkSXRlbVxuICBvblNldFB1Ymxpc2hlclByZWY6IE9uU2V0UHVibGlzaGVyUHJlZlxufVxuXG50eXBlIEFydGljbGVQcm9wcyA9IHtcbiAgaXRlbTogQnJhdmVOZXdzLkZlZWRJdGVtXG4gIHB1Ymxpc2hlcj86IEJyYXZlTmV3cy5QdWJsaXNoZXJcbiAgc2hvdWxkU2Nyb2xsSW50b1ZpZXc/OiBib29sZWFuXG4gIG9uUmVhZEZlZWRJdGVtOiBPblJlYWRGZWVkSXRlbVxuICBvblNldFB1Ymxpc2hlclByZWY6IE9uU2V0UHVibGlzaGVyUHJlZlxufVxuXG5mdW5jdGlvbiBNZWRpdW1BcnRpY2xlIChwcm9wczogQXJ0aWNsZVByb3BzKSB7XG4gIGNvbnN0IHsgcHVibGlzaGVyLCBpdGVtIH0gPSBwcm9wc1xuICBjb25zdCBbY2FyZFJlZl0gPSB1c2VTY3JvbGxJbnRvVmlldyhwcm9wcy5zaG91bGRTY3JvbGxJbnRvVmlldyB8fCBmYWxzZSlcbiAgY29uc3Qgb25DbGljayA9IHVzZVJlYWRBcnRpY2xlQ2xpY2tIYW5kbGVyKHByb3BzLm9uUmVhZEZlZWRJdGVtLCB7XG4gICAgaXRlbVxuICB9KVxuICBjb25zdCBkYXRhID0gaXRlbS5hcnRpY2xlPy5kYXRhXG4gIGlmICghZGF0YSkge1xuICAgIHJldHVybiBudWxsXG4gIH1cbiAgcmV0dXJuIChcbiAgICA8Q2FyZC5TbWFsbCBkYXRhLXNjb3JlPXtkYXRhLnNjb3JlfT5cbiAgICAgIDxhIG9uQ2xpY2s9e29uQ2xpY2t9IGhyZWY9e2RhdGEudXJsLnVybH0gcmVmPXtjYXJkUmVmfT5cbiAgICAgICAgPENhcmRJbWFnZUZyb21GZWVkSXRlbVxuICAgICAgICAgIGRhdGE9e2RhdGF9XG4gICAgICAgIC8+XG4gICAgICAgIDxDYXJkLkNvbnRlbnQ+XG4gICAgICAgICAgPENhcmQuVGV4dD5cbiAgICAgICAgICAgIHtkYXRhLnRpdGxlfVxuICAgICAgICAgIDxDYXJkLlRpbWU+e2RhdGEucmVsYXRpdmVUaW1lRGVzY3JpcHRpb259PC9DYXJkLlRpbWU+XG4gICAgICAgICAge1xuICAgICAgICAgICAgcHVibGlzaGVyICYmXG4gICAgICAgICAgICAgIDxDYXJkLlB1Ymxpc2hlcj5cbiAgICAgICAgICAgICAgICA8UHVibGlzaGVyTWV0YVxuICAgICAgICAgICAgICAgICAgcHVibGlzaGVyPXtwdWJsaXNoZXJ9XG4gICAgICAgICAgICAgICAgICBvblNldFB1Ymxpc2hlclByZWY9e3Byb3BzLm9uU2V0UHVibGlzaGVyUHJlZn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L0NhcmQuUHVibGlzaGVyPlxuICAgICAgICAgIH1cbiAgICAgICAgICA8L0NhcmQuVGV4dD5cbiAgICAgICAgPC9DYXJkLkNvbnRlbnQ+XG4gICAgICA8L2E+XG4gICAgPC9DYXJkLlNtYWxsPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhcmRTaW5nbGVBcnRpY2xlTWVkaXVtIChwcm9wczogUHJvcHMpIHtcbiAgY29uc3QgeyBjb250ZW50IH06IFByb3BzID0gcHJvcHNcblxuICAvLyBubyBmdWxsIGNvbnRlbnQgbm8gcmVuZGVywq5cbiAgaWYgKGNvbnRlbnQubGVuZ3RoICE9PSAyKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPENhcmQuQ29udGFpbmVyRm9yVHdvPlxuICAgICAge1xuICAgICAgICBjb250ZW50Lm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICBjb25zdCBkYXRhID0gaXRlbS5hcnRpY2xlPy5kYXRhXG4gICAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXtpbmRleH0gLz5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3Qgc2hvdWxkU2Nyb2xsSW50b1ZpZXcgPSBwcm9wcy5hcnRpY2xlVG9TY3JvbGxUbyAmJiAocHJvcHMuYXJ0aWNsZVRvU2Nyb2xsVG8udXJsLnVybCA9PT0gZGF0YS51cmwudXJsKVxuICAgICAgICAgIGNvbnN0IHB1Ymxpc2hlciA9IHByb3BzLnB1Ymxpc2hlcnNbZGF0YS5wdWJsaXNoZXJJZF1cbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPE1lZGl1bUFydGljbGVcbiAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgcHVibGlzaGVyPXtwdWJsaXNoZXJ9XG4gICAgICAgICAgICAgIGl0ZW09e2l0ZW19XG4gICAgICAgICAgICAgIG9uUmVhZEZlZWRJdGVtPXtwcm9wcy5vblJlYWRGZWVkSXRlbX1cbiAgICAgICAgICAgICAgb25TZXRQdWJsaXNoZXJQcmVmPXtwcm9wcy5vblNldFB1Ymxpc2hlclByZWZ9XG4gICAgICAgICAgICAgIHNob3VsZFNjcm9sbEludG9WaWV3PXtzaG91bGRTY3JvbGxJbnRvVmlld31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIDwvQ2FyZC5Db250YWluZXJGb3JUd28+XG4gIClcbn1cbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMCBUaGUgQnJhdmUgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbi8vIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXMgZmlsZSxcbi8vIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwczovL21vemlsbGEub3JnL01QTC8yLjAvLlxuXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IHtcbiAgQmxvY2sgYXMgU3RhbmRhcmRCbG9jayxcbiAgSGVhZGluZyBhcyBTdGFuZGFyZEhlYWRpbmcsXG4gIEltYWdlIGFzIFN0YW5kYXJkSW1hZ2UsXG4gIFRpbWUgYXMgU3RhbmRhcmRUaW1lLFxuICBQdWJsaXNoZXJMb2dvIGFzIFN0YW5kYXJkUHVibGlzaGVyTG9nb1xufSBmcm9tICcuLi8uLi9kZWZhdWx0J1xuXG5leHBvcnQgY29uc3QgQnJhbmRlZExpc3QgPSBzdHlsZWQoU3RhbmRhcmRCbG9jaylgYFxuXG5leHBvcnQgY29uc3QgTGlzdCA9IHN0eWxlZCgndWwnKWBcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xuYFxuXG5leHBvcnQgY29uc3QgTGlzdEl0ZW0gPSBzdHlsZWQoJ2xpJyk8e30+YFxuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuXG4gIGEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiA1MHB4O1xuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBDb250ZW50ID0gc3R5bGVkKCdkaXYnKTx7fT5gXG4gIGhlaWdodDogYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5gXG5cbmV4cG9ydCBjb25zdCBMaXN0SXRlbUltYWdlRnJhbWUgPSBzdHlsZWQoJ2RpdicpYFxuICBmbGV4OiAwIDAgMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG5gXG5cbmV4cG9ydCBjb25zdCBJbWFnZSA9IHN0eWxlZChTdGFuZGFyZEltYWdlKWBcbiAgbWFyZ2luOiBhdXRvO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTg4LDE4OCwxODgsMC4yKTtcbmBcblxuZXhwb3J0IGNvbnN0IFRpdGxlID0gc3R5bGVkKFN0YW5kYXJkSGVhZGluZylgXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG5gXG5cbmV4cG9ydCBjb25zdCBIZWFkaW5nID0gc3R5bGVkKFN0YW5kYXJkSGVhZGluZylgXG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG5cbiAgYSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBQdWJsaXNoZXIgPSBzdHlsZWQoJ2RpdicpYFxuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIGZvbnQtZmFtaWx5OiAke3AgPT4gcC50aGVtZS5mb250RmFtaWx5LmhlYWRpbmd9O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbmBcblxuZXhwb3J0IGNvbnN0IFRpbWUgPSBzdHlsZWQoU3RhbmRhcmRUaW1lKWBgXG5cbmV4cG9ydCBjb25zdCBQdWJsaXNoZXJMb2dvID0gc3R5bGVkKFN0YW5kYXJkUHVibGlzaGVyTG9nbylgYFxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFRoZSBCcmF2ZSBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuLy8gTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBmaWxlLFxuLy8gWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHBzOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uXG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0ICogYXMgQnJhdmVOZXdzIGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2JyYXZlX25ld3MvYnJvd3Nlci9yZXNvdXJjZXMvc2hhcmVkL2FwaSdcbmltcG9ydCB1c2VTY3JvbGxJbnRvVmlldyBmcm9tICcuLi8uLi91c2VTY3JvbGxJbnRvVmlldydcbmltcG9ydCB7IENhcmRJbWFnZUZyb21GZWVkSXRlbSB9IGZyb20gJy4uL0NhcmRJbWFnZSdcbmltcG9ydCAqIGFzIENhcmQgZnJvbSAnLi9zdHlsZSdcbmltcG9ydCB1c2VSZWFkQXJ0aWNsZUNsaWNrSGFuZGxlciBmcm9tICcuLi8uLi91c2VSZWFkQXJ0aWNsZUNsaWNrSGFuZGxlcidcbmltcG9ydCB7IE9uUmVhZEZlZWRJdGVtIH0gZnJvbSAnLi4vLi4vJ1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBjb250ZW50OiBCcmF2ZU5ld3MuRmVlZEl0ZW1bXVxuICBwdWJsaXNoZXJzOiBCcmF2ZU5ld3MuUHVibGlzaGVyc1xuICBjYXRlZ29yeU5hbWU6IHN0cmluZ1xuICBhcnRpY2xlVG9TY3JvbGxUbz86IEJyYXZlTmV3cy5GZWVkSXRlbU1ldGFkYXRhXG4gIG9uUmVhZEZlZWRJdGVtOiBPblJlYWRGZWVkSXRlbVxufVxuXG50eXBlIExpc3RJdGVtUHJvcHMgPSB7XG4gIGl0ZW06IEJyYXZlTmV3cy5GZWVkSXRlbVxuICBwdWJsaXNoZXI/OiBCcmF2ZU5ld3MuUHVibGlzaGVyXG4gIG9uUmVhZEZlZWRJdGVtOiBPblJlYWRGZWVkSXRlbVxuICBzaG91bGRTY3JvbGxJbnRvVmlldzogYm9vbGVhblxufVxuXG5mdW5jdGlvbiBMaXN0SXRlbSAocHJvcHM6IExpc3RJdGVtUHJvcHMpIHtcbiAgY29uc3QgW2NhcmRSZWZdID0gdXNlU2Nyb2xsSW50b1ZpZXcocHJvcHMuc2hvdWxkU2Nyb2xsSW50b1ZpZXcpXG4gIGNvbnN0IG9uQ2xpY2sgPSB1c2VSZWFkQXJ0aWNsZUNsaWNrSGFuZGxlcihwcm9wcy5vblJlYWRGZWVkSXRlbSwge1xuICAgIGl0ZW06IHByb3BzLml0ZW1cbiAgfSlcbiAgY29uc3QgZGF0YSA9IHByb3BzLml0ZW0uYXJ0aWNsZT8uZGF0YVxuICBpZiAoIWRhdGEpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG4gIHJldHVybiAoXG4gICAgPENhcmQuTGlzdEl0ZW0+XG4gICAgICA8YSBvbkNsaWNrPXtvbkNsaWNrfSBocmVmPXtkYXRhLnVybC51cmx9IHJlZj17Y2FyZFJlZn0+XG4gICAgICAgIDxDYXJkLkNvbnRlbnQ+XG4gICAgICAgICAgPENhcmQuUHVibGlzaGVyPntwcm9wcy5wdWJsaXNoZXIgJiYgcHJvcHMucHVibGlzaGVyLnB1Ymxpc2hlck5hbWV9PC9DYXJkLlB1Ymxpc2hlcj5cbiAgICAgICAgICA8Q2FyZC5IZWFkaW5nPntkYXRhLnRpdGxlfTwvQ2FyZC5IZWFkaW5nPlxuICAgICAgICAgIDxDYXJkLlRpbWU+e2RhdGEucmVsYXRpdmVUaW1lRGVzY3JpcHRpb259PC9DYXJkLlRpbWU+XG4gICAgICAgIDwvQ2FyZC5Db250ZW50PlxuICAgICAgICA8Q2FyZC5MaXN0SXRlbUltYWdlRnJhbWU+XG4gICAgICAgICAgPENhcmRJbWFnZUZyb21GZWVkSXRlbSBsaXN0PXt0cnVlfSBkYXRhPXtkYXRhfSAvPlxuICAgICAgICA8L0NhcmQuTGlzdEl0ZW1JbWFnZUZyYW1lPlxuICAgICAgPC9hPlxuICAgIDwvQ2FyZC5MaXN0SXRlbT5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXRlZ29yeUdyb3VwIChwcm9wczogUHJvcHMpIHtcbiAgLy8gTm8gY29udGVudCBubyByZW5kZXLCrlxuICBpZiAocHJvcHMuY29udGVudC5sZW5ndGggPCAzIHx8IHByb3BzLmNvbnRlbnQuc29tZShjID0+ICFjLmFydGljbGUpKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuICByZXR1cm4gKFxuICAgIDxDYXJkLkJyYW5kZWRMaXN0PlxuICAgICAgPENhcmQuVGl0bGU+e3Byb3BzLmNhdGVnb3J5TmFtZX08L0NhcmQuVGl0bGU+XG4gICAgICA8Q2FyZC5MaXN0PlxuICAgICAgICB7XG4gICAgICAgICAgcHJvcHMuY29udGVudC5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gaXRlbS5hcnRpY2xlPy5kYXRhXG4gICAgICAgICAgICAvLyB3ZSBhbHJlYWR5IHZhbGlkYXRlZCB0aGlzLCBidXQgdHlwZXNjcmlwdCB3YW50c1xuICAgICAgICAgICAgLy8gdXMgdG8gZG8gaXQgYWdhaW5cbiAgICAgICAgICAgIGlmICghZGF0YSkge1xuICAgICAgICAgICAgICByZXR1cm4gPFJlYWN0LkZyYWdtZW50IGtleT17aW5kZXh9IC8+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBzaG91bGRTY3JvbGxUbyA9IChcbiAgICAgICAgICAgICAgISFwcm9wcy5hcnRpY2xlVG9TY3JvbGxUbyAmJlxuICAgICAgICAgICAgICBwcm9wcy5hcnRpY2xlVG9TY3JvbGxUby51cmwudXJsID09PSBkYXRhLnVybC51cmxcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIGNvbnN0IHB1Ymxpc2hlciA9IHByb3BzLnB1Ymxpc2hlcnNbZGF0YS5wdWJsaXNoZXJJZF1cbiAgICAgICAgICAgIHJldHVybiA8TGlzdEl0ZW1cbiAgICAgICAgICAgICAgcHVibGlzaGVyPXtwdWJsaXNoZXJ9XG4gICAgICAgICAgICAgIGl0ZW09e2l0ZW19XG4gICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgIHNob3VsZFNjcm9sbEludG9WaWV3PXtzaG91bGRTY3JvbGxUb31cbiAgICAgICAgICAgICAgb25SZWFkRmVlZEl0ZW09e3Byb3BzLm9uUmVhZEZlZWRJdGVtfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICA8L0NhcmQuTGlzdD5cbiAgICA8L0NhcmQuQnJhbmRlZExpc3Q+XG4gIClcbn1cbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMCBUaGUgQnJhdmUgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbi8vIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXMgZmlsZSxcbi8vIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwczovL21vemlsbGEub3JnL01QTC8yLjAvLlxuXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IHtcbiAgQmxvY2sgYXMgU3RhbmRhcmRCbG9jayxcbiAgSGVhZGluZyBhcyBTdGFuZGFyZEhlYWRpbmcsXG4gIFRpbWUgYXMgU3RhbmRhcmRUaW1lLFxuICBQdWJsaXNoZXJMb2dvIGFzIFN0YW5kYXJkUHVibGlzaGVyTG9nb1xufSBmcm9tICcuLi8uLi9kZWZhdWx0J1xuXG5leHBvcnQgY29uc3QgT3JkZXJlZExpc3QgPSBzdHlsZWQoU3RhbmRhcmRCbG9jaylgYFxuXG5leHBvcnQgY29uc3QgTGlzdFRpdGxlID0gc3R5bGVkKCdkaXYnKWBcbiAgZm9udC1mYW1pbHk6ICR7cCA9PiBwLnRoZW1lLmZvbnRGYW1pbHkuaGVhZGluZ307XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgY29sb3I6ICNmZmY7XG5gXG5cbmV4cG9ydCBjb25zdCBMaXN0ID0gc3R5bGVkKCdvbCcpYFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBjb3VudGVyLXJlc2V0OiBpdGVtO1xuICBtYXJnaW4tdG9wOiAzNnB4O1xuICBtYXJnaW4tbGVmdDogNDhweDtcbiAgcGFkZGluZzogMDtcbmBcblxuZXhwb3J0IGNvbnN0IExpc3RJdGVtID0gc3R5bGVkKCdsaScpPHt9PmBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogMzZweDtcbiAgY29sb3I6ICNmZmY7XG5cbiAgJjpiZWZvcmUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAtNDhweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgY29udGVudDogY291bnRlcihpdGVtKSBcIiBcIjtcbiAgICBjb3VudGVyLWluY3JlbWVudDogaXRlbTtcbiAgICBkaXNwbGF5OiBtYXJrZXI7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBIZWFkaW5nID0gc3R5bGVkKFN0YW5kYXJkSGVhZGluZylgXG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG5cbiAgYSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBUaW1lID0gc3R5bGVkKFN0YW5kYXJkVGltZSlgYFxuXG5leHBvcnQgY29uc3QgUHVibGlzaGVyTG9nbyA9IHN0eWxlZChTdGFuZGFyZFB1Ymxpc2hlckxvZ28pYFxuICBoZWlnaHQ6IDUwcHg7XG5gXG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVGhlIEJyYXZlIEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4vLyBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIGZpbGUsXG4vLyBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cHM6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy5cblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgKiBhcyBCcmF2ZU5ld3MgZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vYnJhdmVfbmV3cy9icm93c2VyL3Jlc291cmNlcy9zaGFyZWQvYXBpJ1xuaW1wb3J0ICogYXMgQ2FyZCBmcm9tICcuL3N0eWxlJ1xuaW1wb3J0IHVzZVNjcm9sbEludG9WaWV3IGZyb20gJy4uLy4uL3VzZVNjcm9sbEludG9WaWV3J1xuaW1wb3J0IHVzZVJlYWRBcnRpY2xlQ2xpY2tIYW5kbGVyIGZyb20gJy4uLy4uL3VzZVJlYWRBcnRpY2xlQ2xpY2tIYW5kbGVyJ1xuaW1wb3J0IHsgT25SZWFkRmVlZEl0ZW0sIE9uU2V0UHVibGlzaGVyUHJlZiB9IGZyb20gJy4uLy4uLydcbmltcG9ydCBQdWJsaXNoZXJNZXRhIGZyb20gJy4uL1B1Ymxpc2hlck1ldGEnXG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGNvbnRlbnQ6IEJyYXZlTmV3cy5GZWVkSXRlbVtdXG4gIGFydGljbGVUb1Njcm9sbFRvPzogQnJhdmVOZXdzLkZlZWRJdGVtTWV0YWRhdGFcbiAgcHVibGlzaGVyOiBCcmF2ZU5ld3MuUHVibGlzaGVyXG4gIG9uUmVhZEZlZWRJdGVtOiBPblJlYWRGZWVkSXRlbVxuICBvblNldFB1Ymxpc2hlclByZWY6IE9uU2V0UHVibGlzaGVyUHJlZlxufVxuXG50eXBlIExpc3RJdGVtUHJvcHMgPSB7XG4gIGl0ZW06IEJyYXZlTmV3cy5GZWVkSXRlbVxuICBwdWJsaXNoZXI6IEJyYXZlTmV3cy5QdWJsaXNoZXJcbiAgb25SZWFkRmVlZEl0ZW06IE9uUmVhZEZlZWRJdGVtXG4gIG9uU2V0UHVibGlzaGVyUHJlZjogT25TZXRQdWJsaXNoZXJQcmVmXG4gIHNob3VsZFNjcm9sbEludG9WaWV3OiBib29sZWFuXG59XG5cbmZ1bmN0aW9uIExpc3RJdGVtIChwcm9wczogTGlzdEl0ZW1Qcm9wcykge1xuICBjb25zdCBbY2FyZFJlZl0gPSB1c2VTY3JvbGxJbnRvVmlldyhwcm9wcy5zaG91bGRTY3JvbGxJbnRvVmlldylcbiAgY29uc3Qgb25DbGljayA9IHVzZVJlYWRBcnRpY2xlQ2xpY2tIYW5kbGVyKHByb3BzLm9uUmVhZEZlZWRJdGVtLCB7XG4gICAgaXRlbTogcHJvcHMuaXRlbVxuICB9KVxuICBjb25zdCBkYXRhID0gcHJvcHMuaXRlbS5hcnRpY2xlPy5kYXRhXG4gIGlmICghZGF0YSkge1xuICAgIHJldHVybiBudWxsXG4gIH1cbiAgcmV0dXJuIChcbiAgICA8Q2FyZC5MaXN0SXRlbT5cbiAgICAgIDxhIG9uQ2xpY2s9e29uQ2xpY2t9IGhyZWY9e2RhdGEudXJsLnVybH0gcmVmPXtjYXJkUmVmfT5cbiAgICAgICAgPENhcmQuSGVhZGluZz5cbiAgICAgICAgICB7ZGF0YS50aXRsZX1cbiAgICAgICAgPC9DYXJkLkhlYWRpbmc+XG4gICAgICAgIDxDYXJkLlRpbWU+e2RhdGEucmVsYXRpdmVUaW1lRGVzY3JpcHRpb259PC9DYXJkLlRpbWU+XG4gICAgICA8L2E+XG4gICAgPC9DYXJkLkxpc3RJdGVtPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFB1Ymxpc2hlckdyb3VwIChwcm9wczogUHJvcHMpIHtcbiAgLy8gTm8gY29udGVudCBubyByZW5kZXLCrlxuICBpZiAocHJvcHMuY29udGVudC5sZW5ndGggPCAzIHx8IHByb3BzLmNvbnRlbnQuc29tZShjID0+ICFjLmFydGljbGUpKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuICByZXR1cm4gKFxuICAgIDxDYXJkLk9yZGVyZWRMaXN0PlxuICAgICAge3Byb3BzLnB1Ymxpc2hlciAmJlxuICAgICAgICA8Q2FyZC5MaXN0VGl0bGU+XG4gICAgICAgICAgPFB1Ymxpc2hlck1ldGFcbiAgICAgICAgICAgIHB1Ymxpc2hlcj17cHJvcHMucHVibGlzaGVyfVxuICAgICAgICAgICAgdGl0bGU9e3RydWV9XG4gICAgICAgICAgICBvblNldFB1Ymxpc2hlclByZWY9e3Byb3BzLm9uU2V0UHVibGlzaGVyUHJlZn1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0NhcmQuTGlzdFRpdGxlPlxuICAgICAgfVxuICAgICAgPENhcmQuTGlzdD5cbiAgICAgICAge1xuICAgICAgICAgIHByb3BzLmNvbnRlbnQubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGl0ZW0uYXJ0aWNsZT8uZGF0YVxuICAgICAgICAgICAgLy8gd2UgYWxyZWFkeSB2YWxpZGF0ZWQgdGhpcywgYnV0IHR5cGVzY3JpcHQgd2FudHNcbiAgICAgICAgICAgIC8vIHVzIHRvIGRvIGl0IGFnYWluXG4gICAgICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIDxSZWFjdC5GcmFnbWVudCBrZXk9e2luZGV4fSAvPlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgc2hvdWxkU2Nyb2xsVG8gPSAoXG4gICAgICAgICAgICAgICEhcHJvcHMuYXJ0aWNsZVRvU2Nyb2xsVG8gJiZcbiAgICAgICAgICAgICAgcHJvcHMuYXJ0aWNsZVRvU2Nyb2xsVG8udXJsLnVybCA9PT0gZGF0YS51cmwudXJsXG4gICAgICAgICAgICApXG4gICAgICAgICAgICByZXR1cm4gPExpc3RJdGVtXG4gICAgICAgICAgICAgIHB1Ymxpc2hlcj17cHJvcHMucHVibGlzaGVyfVxuICAgICAgICAgICAgICBpdGVtPXtpdGVtfVxuICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICBzaG91bGRTY3JvbGxJbnRvVmlldz17c2hvdWxkU2Nyb2xsVG99XG4gICAgICAgICAgICAgIG9uUmVhZEZlZWRJdGVtPXtwcm9wcy5vblJlYWRGZWVkSXRlbX1cbiAgICAgICAgICAgICAgb25TZXRQdWJsaXNoZXJQcmVmPXtwcm9wcy5vblNldFB1Ymxpc2hlclByZWZ9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIDwvQ2FyZC5MaXN0PlxuICAgIDwvQ2FyZC5PcmRlcmVkTGlzdD5cbiAgKVxufVxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFRoZSBCcmF2ZSBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuLy8gTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBmaWxlLFxuLy8gWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHBzOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uXG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuXG4vLyBGZWF0dXJlLXNwZWNpZmljIGNvbXBvbmVudHNcbmltcG9ydCB7IEZlZWRJdGVtLCBGZWVkSXRlbU1ldGFkYXRhIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vYnJhdmVfbmV3cy9icm93c2VyL3Jlc291cmNlcy9zaGFyZWQvYXBpJ1xuaW1wb3J0ICogYXMgQ2FyZCBmcm9tICcuLi9jYXJkU2l6ZXMnXG5pbXBvcnQgeyBDYXJkSW1hZ2VGcm9tRmVlZEl0ZW0gfSBmcm9tICcuL0NhcmRJbWFnZSdcbmltcG9ydCB1c2VTY3JvbGxJbnRvVmlldyBmcm9tICcuLi91c2VTY3JvbGxJbnRvVmlldydcbmltcG9ydCB1c2VSZWFkQXJ0aWNsZUNsaWNrSGFuZGxlciBmcm9tICcuLi91c2VSZWFkQXJ0aWNsZUNsaWNrSGFuZGxlcidcbmltcG9ydCB7IE9uUmVhZEZlZWRJdGVtIH0gZnJvbSAnLi4vJ1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBjb250ZW50OiBGZWVkSXRlbVtdXG4gIGFydGljbGVUb1Njcm9sbFRvPzogRmVlZEl0ZW1NZXRhZGF0YVxuICBvblJlYWRGZWVkSXRlbTogT25SZWFkRmVlZEl0ZW1cbn1cblxudHlwZSBMaXN0SXRlbVByb3BzID0ge1xuICBpdGVtOiBGZWVkSXRlbVxuICBvblJlYWRGZWVkSXRlbTogT25SZWFkRmVlZEl0ZW1cbiAgc2hvdWxkU2Nyb2xsSW50b1ZpZXc6IGJvb2xlYW5cbn1cblxuZnVuY3Rpb24gTGlzdEl0ZW0gKHByb3BzOiBMaXN0SXRlbVByb3BzKSB7XG4gIGNvbnN0IFtjYXJkUmVmXSA9IHVzZVNjcm9sbEludG9WaWV3KHByb3BzLnNob3VsZFNjcm9sbEludG9WaWV3KVxuICBjb25zdCBvbkNsaWNrID0gdXNlUmVhZEFydGljbGVDbGlja0hhbmRsZXIocHJvcHMub25SZWFkRmVlZEl0ZW0sIHtcbiAgICBpdGVtOiBwcm9wcy5pdGVtXG4gIH0pXG4gIGNvbnN0IGRhdGEgPSBwcm9wcy5pdGVtLmRlYWw/LmRhdGFcbiAgaWYgKCFkYXRhKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuICByZXR1cm4gKFxuICAgIDxDYXJkLkRlYWxJdGVtIHJlZj17Y2FyZFJlZn0gb25DbGljaz17b25DbGlja30gaHJlZj17ZGF0YS51cmwudXJsfT5cbiAgICAgIDxDYXJkSW1hZ2VGcm9tRmVlZEl0ZW0gZGF0YT17ZGF0YX0gLz5cbiAgICAgIDxDYXJkLlRleHQ+e2RhdGEudGl0bGV9PC9DYXJkLlRleHQ+XG4gICAgICA8Q2FyZC5EZWFsRGVzY3JpcHRpb24+e2RhdGEuZGVzY3JpcHRpb259PC9DYXJkLkRlYWxEZXNjcmlwdGlvbj5cbiAgICA8L0NhcmQuRGVhbEl0ZW0+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2FyZERlYWxzIChwcm9wczogUHJvcHMpIHtcbiAgaWYgKCFwcm9wcy5jb250ZW50IHx8IHByb3BzLmNvbnRlbnQubGVuZ3RoID09PSAwIHx8ICFwcm9wcy5jb250ZW50WzBdLmRlYWwpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgY29uc3QgY2F0ZWdvcnlOYW1lID0gcHJvcHMuY29udGVudFswXS5kZWFsLmRhdGEuY2F0ZWdvcnlOYW1lXG5cbiAgcmV0dXJuIChcbiAgICA8Q2FyZC5EZWFsc0NhcmQ+XG4gICAgICA8Q2FyZC5EZWFsc0NhdGVnb3J5PntjYXRlZ29yeU5hbWV9PC9DYXJkLkRlYWxzQ2F0ZWdvcnk+XG4gICAgICA8Q2FyZC5EZWFsc0xpc3Q+XG4gICAgICAgIHtcbiAgICAgICAgICBwcm9wcy5jb250ZW50Lm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNob3VsZFNjcm9sbEludG9WaWV3ID0gKFxuICAgICAgICAgICAgICAhIXByb3BzLmFydGljbGVUb1Njcm9sbFRvICYmXG4gICAgICAgICAgICAgIHByb3BzLmFydGljbGVUb1Njcm9sbFRvLnVybC51cmwgPT09IGl0ZW0uZGVhbD8uZGF0YS51cmwudXJsXG4gICAgICAgICAgICApXG4gICAgICAgICAgICByZXR1cm4gPExpc3RJdGVtXG4gICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgIGl0ZW09e2l0ZW19XG4gICAgICAgICAgICAgIHNob3VsZFNjcm9sbEludG9WaWV3PXtzaG91bGRTY3JvbGxJbnRvVmlld31cbiAgICAgICAgICAgICAgb25SZWFkRmVlZEl0ZW09e3Byb3BzLm9uUmVhZEZlZWRJdGVtfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICA8L0NhcmQuRGVhbHNMaXN0PlxuICAgIDwvQ2FyZC5EZWFsc0NhcmQ+XG4gIClcbn1cbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMCBUaGUgQnJhdmUgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbi8vIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXMgZmlsZSxcbi8vIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwczovL21vemlsbGEub3JnL01QTC8yLjAvLlxuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCAqIGFzIEJyYXZlTmV3cyBmcm9tICcuLi8uLi8uLi8uLi9icmF2ZV9uZXdzL2Jyb3dzZXIvcmVzb3VyY2VzL3NoYXJlZC9hcGknXG5pbXBvcnQgQ2FyZExhcmdlIGZyb20gJy4vY2FyZHMvX2FydGljbGVzL2NhcmRBcnRpY2xlTGFyZ2UnXG5pbXBvcnQgQ2FyZFNtYWxsIGZyb20gJy4vY2FyZHMvX2FydGljbGVzL2NhcmRBcnRpY2xlTWVkaXVtJ1xuaW1wb3J0IENhdGVnb3J5R3JvdXAgZnJvbSAnLi9jYXJkcy9jYXRlZ29yeUdyb3VwJ1xuaW1wb3J0IFB1Ymxpc2hlckdyb3VwIGZyb20gJy4vY2FyZHMvcHVibGlzaGVyR3JvdXAnXG5pbXBvcnQgQ2FyZERlYWxzIGZyb20gJy4vY2FyZHMvY2FyZERlYWxzJ1xuaW1wb3J0IHsgYXR0cmlidXRlTmFtZUNhcmRDb3VudCwgT25SZWFkRmVlZEl0ZW0sIE9uU2V0UHVibGlzaGVyUHJlZiB9IGZyb20gJy4vJ1xuXG5pbXBvcnQgQ2FyZFR5cGUgPSBCcmF2ZU5ld3MuQ2FyZFR5cGVcblxuLy8gRGlzYWJsZWQgcnVsZXMgYmVjYXVzZSB3ZSBoYXZlIGEgZnVuY3Rpb25cbi8vIHdoaWNoIHJldHVybnMgZWxlbWVudHMgaW4gYSBzd2l0Y2guXG5cbnR5cGUgUHJvcHMgPSB7XG4gIGNvbnRlbnQ6IEJyYXZlTmV3cy5GZWVkUGFnZVxuICBwdWJsaXNoZXJzOiBCcmF2ZU5ld3MuUHVibGlzaGVyc1xuICBhcnRpY2xlVG9TY3JvbGxUbz86IEJyYXZlTmV3cy5GZWVkSXRlbU1ldGFkYXRhXG4gIGl0ZW1TdGFydGluZ0Rpc3BsYXlJbmRleDogbnVtYmVyXG4gIG9uUmVhZEZlZWRJdGVtOiBPblJlYWRGZWVkSXRlbVxuICBvblNldFB1Ymxpc2hlclByZWY6IE9uU2V0UHVibGlzaGVyUHJlZlxuICBvblBlcmlvZGljQ2FyZFZpZXdzOiAoZWxlbWVudDogSFRNTEVsZW1lbnQgfCBudWxsKSA9PiB2b2lkXG59XG5cbmZ1bmN0aW9uIGdldENhcmQgKHByb3BzOiBQcm9wcywgY29udGVudDogQnJhdmVOZXdzLkZlZWRQYWdlSXRlbSkge1xuICBzd2l0Y2ggKGNvbnRlbnQuY2FyZFR5cGUpIHtcbiAgICBjYXNlIENhcmRUeXBlLkhFQURMSU5FOlxuICAgICAgcmV0dXJuIDxDYXJkTGFyZ2VcbiAgICAgICAgICAgICAgY29udGVudD17Y29udGVudC5pdGVtc31cbiAgICAgICAgICAgICAgcHVibGlzaGVycz17cHJvcHMucHVibGlzaGVyc31cbiAgICAgICAgICAgICAgYXJ0aWNsZVRvU2Nyb2xsVG89e3Byb3BzLmFydGljbGVUb1Njcm9sbFRvfVxuICAgICAgICAgICAgICBvblJlYWRGZWVkSXRlbT17cHJvcHMub25SZWFkRmVlZEl0ZW19XG4gICAgICAgICAgICAgIG9uU2V0UHVibGlzaGVyUHJlZj17cHJvcHMub25TZXRQdWJsaXNoZXJQcmVmfVxuICAgICAgLz5cbiAgICBjYXNlIENhcmRUeXBlLkhFQURMSU5FX1BBSVJFRDpcbiAgICAgIHJldHVybiA8Q2FyZFNtYWxsXG4gICAgICAgICAgICAgIGNvbnRlbnQ9e2NvbnRlbnQuaXRlbXN9XG4gICAgICAgICAgICAgIHB1Ymxpc2hlcnM9e3Byb3BzLnB1Ymxpc2hlcnN9XG4gICAgICAgICAgICAgIGFydGljbGVUb1Njcm9sbFRvPXtwcm9wcy5hcnRpY2xlVG9TY3JvbGxUb31cbiAgICAgICAgICAgICAgb25SZWFkRmVlZEl0ZW09e3Byb3BzLm9uUmVhZEZlZWRJdGVtfVxuICAgICAgICAgICAgICBvblNldFB1Ymxpc2hlclByZWY9e3Byb3BzLm9uU2V0UHVibGlzaGVyUHJlZn1cbiAgICAgIC8+XG4gICAgY2FzZSBDYXJkVHlwZS5DQVRFR09SWV9HUk9VUDpcbiAgICAgIGNvbnN0IGNhdGVnb3J5TmFtZSA9IGNvbnRlbnQuaXRlbXNbMF0/LmFydGljbGU/LmRhdGEuY2F0ZWdvcnlOYW1lXG4gICAgICBpZiAoIWNhdGVnb3J5TmFtZSkge1xuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgfVxuICAgICAgcmV0dXJuIDxDYXRlZ29yeUdyb3VwXG4gICAgICAgIGNvbnRlbnQ9e2NvbnRlbnQuaXRlbXN9XG4gICAgICAgIHB1Ymxpc2hlcnM9e3Byb3BzLnB1Ymxpc2hlcnN9XG4gICAgICAgIGNhdGVnb3J5TmFtZT17Y2F0ZWdvcnlOYW1lfVxuICAgICAgICBvblJlYWRGZWVkSXRlbT17cHJvcHMub25SZWFkRmVlZEl0ZW19XG4gICAgICAgIGFydGljbGVUb1Njcm9sbFRvPXtwcm9wcy5hcnRpY2xlVG9TY3JvbGxUb31cbiAgICAgIC8+XG4gICAgY2FzZSBDYXJkVHlwZS5QVUJMSVNIRVJfR1JPVVA6XG4gICAgICBjb25zdCBwdWJsaXNoZXJJZCA9IGNvbnRlbnQuaXRlbXNbMF0/LmFydGljbGU/LmRhdGEucHVibGlzaGVySWRcbiAgICAgIGlmICghcHVibGlzaGVySWQpIHtcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgIH1cbiAgICAgIGNvbnN0IHB1Ymxpc2hlciA9IHByb3BzLnB1Ymxpc2hlcnNbcHVibGlzaGVySWRdXG4gICAgICByZXR1cm4gPFB1Ymxpc2hlckdyb3VwXG4gICAgICAgIGNvbnRlbnQ9e2NvbnRlbnQuaXRlbXN9XG4gICAgICAgIHB1Ymxpc2hlcj17cHVibGlzaGVyfVxuICAgICAgICBhcnRpY2xlVG9TY3JvbGxUbz17cHJvcHMuYXJ0aWNsZVRvU2Nyb2xsVG99XG4gICAgICAgIG9uUmVhZEZlZWRJdGVtPXtwcm9wcy5vblJlYWRGZWVkSXRlbX1cbiAgICAgICAgb25TZXRQdWJsaXNoZXJQcmVmPXtwcm9wcy5vblNldFB1Ymxpc2hlclByZWZ9XG4gICAgICAvPlxuICAgIGNhc2UgQ2FyZFR5cGUuREVBTFM6XG4gICAgICByZXR1cm4gPENhcmREZWFsc1xuICAgICAgICBjb250ZW50PXtjb250ZW50Lml0ZW1zfVxuICAgICAgICBvblJlYWRGZWVkSXRlbT17cHJvcHMub25SZWFkRmVlZEl0ZW19XG4gICAgICAgIGFydGljbGVUb1Njcm9sbFRvPXtwcm9wcy5hcnRpY2xlVG9TY3JvbGxUb31cbiAgICAgIC8+XG4gIH1cbiAgY29uc29sZS5lcnJvcignQXNrZWQgdG8gY3JlYXRlIHVua25vd24gY2FyZCB0eXBlJywgY29udGVudC5jYXJkVHlwZSlcbiAgcmV0dXJuIG51bGxcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2FyZHNHcm91cHMgKHByb3BzOiBQcm9wcykge1xuICAvLyBEdXBsaWNhdGUgYXJyYXkgc28gd2UgY2FuIHNwbGljZSB3aXRob3V0IGFmZmVjdGluZyBzdGF0ZVxuICByZXR1cm4gPD57cHJvcHMuY29udGVudC5pdGVtcy5tYXAoKGZlZWRQYWdlSXRlbSwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBjYXJkSW5zdGFuY2UgPSBnZXRDYXJkKHByb3BzLCBmZWVkUGFnZUl0ZW0pXG4gICAgaWYgKCFjYXJkSW5zdGFuY2UpIHtcbiAgICAgIHJldHVybiA8UmVhY3QuRnJhZ21lbnQga2V5PXtpbmRleH0gLz5cbiAgICB9XG4gICAgLy8gQWxsIGJ1Y2tldHMgYXJlIGRpdmlzaWJsZSBieSA0LCBzbyB3ZSBzZW5kIGEgcGluZyB3aGVuIHdlIGFyZSBpblxuICAgIC8vIHRoZSBuZXh0IGJ1Y2tldC4gVGhpcyBpcyB0byBhdm9pZCB0b28gbWFueSByZWR1eCBhY3Rpb24gZmlyaW5nXG4gICAgLy8gb24gc2Nyb2xsLlxuICAgIGNvbnN0IHNob3VsZFRyaWdnZXJWaWV3Q291bnRVcGRhdGUgPSAoaW5kZXggJSA0ID09PSAxKVxuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3QuRnJhZ21lbnRcbiAgICAgICAga2V5PXtpbmRleH1cbiAgICAgID5cbiAgICAgICAge2NhcmRJbnN0YW5jZX1cbiAgICAgICAge3Nob3VsZFRyaWdnZXJWaWV3Q291bnRVcGRhdGUgJiZcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICB7Li4ueyBbYXR0cmlidXRlTmFtZUNhcmRDb3VudF06IGluZGV4ICsgcHJvcHMuaXRlbVN0YXJ0aW5nRGlzcGxheUluZGV4IH19XG4gICAgICAgICAgICByZWY9e3Byb3BzLm9uUGVyaW9kaWNDYXJkVmlld3N9XG4gICAgICAgICAgLz5cbiAgICAgICAgfVxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApXG4gIH0pfTwvPlxufVxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFRoZSBCcmF2ZSBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuLy8gTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBmaWxlLFxuLy8gWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHBzOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uXG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCB7IGdldExvY2FsZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9sb2NhbGUnXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuLi9kZWZhdWx0J1xuXG50eXBlIFN0eWxlUHJvcHMgPSB7XG4gIHNob3c6IGJvb2xlYW5cbn1cblxudHlwZSBQcm9wcyA9IFN0eWxlUHJvcHMgJiB7XG4gIG9uQ3VzdG9taXplQnJhdmVOZXdzOiAoKSA9PiBhbnlcbn1cblxuY29uc3QgSGlkZWFibGUgPSBzdHlsZWQoJ2RpdicpPFN0eWxlUHJvcHM+YFxuICBwb2ludGVyLWV2ZW50czogJHtwID0+IHAuc2hvdyA/ICdhdXRvJyA6ICdub25lJ307XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgcmlnaHQ6IDIwcHg7XG4gIGJvdHRvbTogMjBweDtcbiAgb3BhY2l0eTogJHtwID0+IHAuc2hvdyA/IDEgOiAwfTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBlYXNlLWluLW91dDtcbmBcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3VzdG9taXplIChwcm9wczogUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8SGlkZWFibGUgc2hvdz17cHJvcHMuc2hvd30+XG4gICAgICA8QnV0dG9uXG4gICAgICAgIGFyaWEtaGlkZGVuPXshcHJvcHMuc2hvd31cbiAgICAgICAgZGlzYWJsZWQ9eyFwcm9wcy5zaG93fVxuICAgICAgICBvbkNsaWNrPXtwcm9wcy5vbkN1c3RvbWl6ZUJyYXZlTmV3c31cbiAgICAgID5cbiAgICAgICAge2dldExvY2FsZSgnY3VzdG9taXplJyl9XG4gICAgICA8L0J1dHRvbj5cbiAgICA8L0hpZGVhYmxlPlxuICApXG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVGhlIEJyYXZlIEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4vLyBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIGZpbGUsXG4vLyBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cHM6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy5cblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgQXJyb3dVcEljb24sIExvYWRlckljb24gfSBmcm9tICdicmF2ZS11aS9jb21wb25lbnRzL2ljb25zJ1xuaW1wb3J0IHsgZ2V0TG9jYWxlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2xvY2FsZSdcblxudHlwZSBQcm9wcyA9IHtcbiAgc2hvdzogYm9vbGVhblxuICBpc0ZldGNoaW5nOiBib29sZWFuXG4gIG9uQ2xpY2s6ICgpID0+IGFueVxufVxuXG5jb25zdCBSZWZyZXNoQnV0dG9uID0gc3R5bGVkKCdidXR0b24nKTxQcm9wcz5gXG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAzM3B4O1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgcG9pbnRlci1ldmVudHM6ICR7cCA9PiBwLnNob3cgPyAnYWxsJyA6ICdub25lJ307XG4gIG9wYWNpdHk6ICR7cCA9PiBwLnNob3cgPyAxIDogMH07XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcbiAgYmFja2dyb3VuZDogJHtwID0+IHAudGhlbWUuY29sb3IuYnJhbmRCYXR9O1xuICBwYWRkaW5nOiAxMnB4IDMwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXdlaWdodDogODAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBlYXNlLWluLW91dCwgYmFja2dyb3VuZCAuMTI0cyBlYXNlLWluLW91dDtcbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogJHtwID0+IHAudGhlbWUuY29sb3IuYnJhbmRCYXRJbnRlcmFjdGluZ307XG4gIH1cbiAgJjphY3RpdmUge1xuICAgIGJhY2tncm91bmQ6ICR7cCA9PiBwLnRoZW1lLmNvbG9yLmJyYW5kQmF0QWN0aXZlfTtcbiAgfVxuICAmOmZvY3VzLXZpc2libGUge1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDFweCB3aGl0ZTtcbiAgfVxuYFxuXG5jb25zdCBJY29uID0gc3R5bGVkKCdkaXYnKWBcbiAgd2lkdGg6IDE2cHg7XG4gIGhlaWdodDogMTZweDtcbmBcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVmcmVzaCAocHJvcHM6IFByb3BzKSB7XG4gIGNvbnN0IHRleHQgPSBwcm9wcy5pc0ZldGNoaW5nXG4gICAgPyBnZXRMb2NhbGUoJ2JyYXZlTmV3c1N0YXR1c0ZldGNoaW5nJylcbiAgICA6IGdldExvY2FsZSgnYnJhdmVOZXdzQWN0aW9uUmVmcmVzaCcpXG4gIGNvbnN0IGdyYXBoaWMgPSBwcm9wcy5pc0ZldGNoaW5nXG4gICAgPyA8TG9hZGVySWNvbiAvPlxuICAgIDogPEFycm93VXBJY29uIC8+XG4gIHJldHVybiAoXG4gICAgPFJlZnJlc2hCdXR0b24gey4uLnByb3BzfT5cbiAgICAgIDxJY29uPlxuICAgICAgICB7Z3JhcGhpY31cbiAgICAgIDwvSWNvbj5cbiAgICAgIDxzcGFuPnt0ZXh0fTwvc3Bhbj5cbiAgICA8L1JlZnJlc2hCdXR0b24+XG4gIClcbn1cbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMCBUaGUgQnJhdmUgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbi8vIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXMgZmlsZSxcbi8vIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwczovL21vemlsbGEub3JnL01QTC8yLjAvLlxuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyBGZWVkIH0gZnJvbSAnLi4vLi4vLi4vLi4vYnJhdmVfbmV3cy9icm93c2VyL3Jlc291cmNlcy9zaGFyZWQvYXBpJ1xuaW1wb3J0IHsgdXNlQnJhdmVOZXdzIH0gZnJvbSAnLi4vLi4vLi4vLi4vYnJhdmVfbmV3cy9icm93c2VyL3Jlc291cmNlcy9zaGFyZWQvQ29udGV4dCdcbmltcG9ydCAqIGFzIFRvZGF5QWN0aW9ucyBmcm9tICcuLi8uLi8uLi9hY3Rpb25zL3RvZGF5X2FjdGlvbnMnXG5pbXBvcnQgeyBhdHRyaWJ1dGVOYW1lQ2FyZENvdW50LCBQcm9wcyB9IGZyb20gJy4vJ1xuaW1wb3J0IENhcmRMYXJnZSBmcm9tICcuL2NhcmRzL19hcnRpY2xlcy9jYXJkQXJ0aWNsZUxhcmdlJ1xuaW1wb3J0IENhcmRFcnJvciBmcm9tICcuL2NhcmRzL2NhcmRFcnJvcidcbmltcG9ydCBDYXJkTG9hZGluZyBmcm9tICcuL2NhcmRzL2NhcmRMb2FkaW5nJ1xuaW1wb3J0IENhcmROb0NvbnRlbnQgZnJvbSAnLi9jYXJkcy9jYXJkTm9Db250ZW50J1xuaW1wb3J0IENhcmRzR3JvdXAgZnJvbSAnLi9jYXJkc0dyb3VwJ1xuaW1wb3J0IEN1c3RvbWl6ZSBmcm9tICcuL29wdGlvbnMvY3VzdG9taXplJ1xuaW1wb3J0IFJlZnJlc2ggZnJvbSAnLi9vcHRpb25zL3JlZnJlc2gnXG5cbmZ1bmN0aW9uIGdldEZlZWRIYXNoRm9yQ2FjaGUoZmVlZD86IEZlZWQpIHtcbiAgcmV0dXJuIGZlZWQgPyBmZWVkLmhhc2ggOiAnJ1xufVxuXG5sZXQgcGFnZVJlcXVlc3RQZW5kaW5nID0gZmFsc2VcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQnJhdmVOZXdzQ29udGVudChwcm9wczogUHJvcHMpIHtcbiAgY29uc3QgeyBmZWVkLCBwdWJsaXNoZXJzIH0gPSBwcm9wc1xuXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxuICBjb25zdCB7IHNldEN1c3RvbWl6ZVBhZ2UgfSA9IHVzZUJyYXZlTmV3cygpXG5cbiAgY29uc3QgcHJldmlvdXNZQXhpcyA9IFJlYWN0LnVzZVJlZigwKVxuICBjb25zdCBbc2hvd09wdGlvbnMsIHNldFNob3dPcHRpb25zXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxuXG4gIC8vIFdoZW4gYW4gZWxlbWVudCBhdCB0aGUgYm90dG9tIGVudGVycyB0aGUgdmlld3BvcnQsIGFzayBmb3IgYSBuZXcgcGFnZVxuICBjb25zdCBzZXRTY3JvbGxUcmlnZ2VyUmVmID0gUmVhY3QudXNlQ2FsbGJhY2soKGVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgbnVsbCkgPT4ge1xuICAgIGlmICghZWxlbWVudCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIC8vIFRyaWdnZXIgd2hlbiBpdCdzIDkwMHB4IGZyb20gdmlld3BvcnQgYm90dG9tIHNvIGl0J3MgbW9yZSBzZWFtbGVzc1xuICAgIGNvbnN0IGludGVyc2VjdGlvbk9wdGlvbnM6IEludGVyc2VjdGlvbk9ic2VydmVySW5pdCA9IHtcbiAgICAgIHJvb3RNYXJnaW46ICcwcHggMHB4IDkwMHB4IDBweCdcbiAgICB9XG4gICAgY29uc3QgZW5kT2ZDdXJyZW50QXJ0aWNsZXNMaXN0T2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcbiAgICAgIGNvbnNvbGUuZGVidWcoJ0JyYXZlIE5ld3MgY29udGVudCBJbnRlcnNlY3Rpb24gT2JzZXJ2ZXIgdHJpZ2dlcmVkJywgZW50cmllcylcbiAgICAgIGNvbnN0IGhhc1JlYWNoZWRQYWdpbmF0aW9uUG9pbnQgPSBlbnRyaWVzLnNvbWUoXG4gICAgICAgIGVudHJ5ID0+IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMCB8fFxuICAgICAgICAgIGVudHJ5LmJvdW5kaW5nQ2xpZW50UmVjdC50b3AgPCAwKVxuICAgICAgaWYgKGhhc1JlYWNoZWRQYWdpbmF0aW9uUG9pbnQpIHtcbiAgICAgICAgY29uc29sZS5kZWJ1ZygnQnJhdmUgTmV3cyBjb250ZW50IEludGVyc2VjdGlvbiBPYnNlcnZlciBkZXRlcm1pbmVkIG5lZWQgbmV3IHBhZ2UuJylcbiAgICAgICAgaWYgKCFwYWdlUmVxdWVzdFBlbmRpbmcpIHtcbiAgICAgICAgICBwYWdlUmVxdWVzdFBlbmRpbmcgPSB0cnVlXG4gICAgICAgICAgd2luZG93LnJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgICAgICAgcGFnZVJlcXVlc3RQZW5kaW5nID0gZmFsc2VcbiAgICAgICAgICAgIHByb3BzLm9uQW5vdGhlclBhZ2VOZWVkZWQoKVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBpbnRlcnNlY3Rpb25PcHRpb25zKVxuICAgIC8vIExvYWQgdXAgbW9yZSBwb3N0cyAoaW5maW5pdGUgc2Nyb2xsKVxuICAgIGVuZE9mQ3VycmVudEFydGljbGVzTGlzdE9ic2VydmVyLm9ic2VydmUoZWxlbWVudClcbiAgfSwgW3ByZXZpb3VzWUF4aXNdKVxuXG4gIC8vIFNob3cgdGhlIG9wdGlvbnMgYnV0dG9ucyB3aGVuIHdlIGVudGVyIHRoZSB2aWV3cG9ydFxuICBjb25zdCBoYXNNYXJrZWRJbnRlcmFjdGlvbkJlZ2luID0gUmVhY3QudXNlUmVmKGZhbHNlKVxuICBjb25zdCBpbnRlcmFjdGlvblRyaWdnZXJFbGVtZW50ID0gUmVhY3QudXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKVxuICBjb25zdCBpbnRlcmFjdGlvbk9ic2VydmVyID0gUmVhY3QudXNlTWVtbzxJbnRlcnNlY3Rpb25PYnNlcnZlcj4oKCkgPT4ge1xuICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG4gICAgICAvLyBTaG93IGlmIHRhcmdldCBhcnRpY2xlIGlzIGluc2lkZSBvciBhYm92ZSB2aWV3cG9ydC5cbiAgICAgIGNvbnN0IGlzSW50ZXJhY3RpbmcgPSBlbnRyaWVzLnNvbWUoXG4gICAgICAgIGVudHJ5ID0+IGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8XG4gICAgICAgICAgZW50cnkuYm91bmRpbmdDbGllbnRSZWN0LnRvcCA8IDBcbiAgICAgIClcbiAgICAgIGNvbnNvbGUuZGVidWcoJ0JyYXZlIE5ld3M6IEludGVyc2VjdGlvbiBPYnNlcnZlciB0cmlnZ2VyIHNob3cgb3B0aW9ucywgY2hhbmdpbmcnLCBpc0ludGVyYWN0aW5nKVxuICAgICAgc2V0U2hvd09wdGlvbnMoaXNJbnRlcmFjdGluZylcbiAgICAgIC8vIFdoZW4gaW4gXCJwcm9tcHRpbmdcIiBtb2RlLCBzY3JvbGxpbmcgcGFzdCB0aGUgZmlyc3QgY2FyZFxuICAgICAgLy8gaXMgaW5kaWNhdGlvbiB0aGF0IHRoZSB1c2VyIGlzIGludGVyYWN0aW5nIHdpdGggdGhlIGZlYXR1cmUuXG4gICAgICBpZiAoaXNJbnRlcmFjdGluZyAmJiBwcm9wcy5pc1Byb21wdGluZyAmJiAhaGFzTWFya2VkSW50ZXJhY3Rpb25CZWdpbi5jdXJyZW50KSB7XG4gICAgICAgIGRpc3BhdGNoKFRvZGF5QWN0aW9ucy5pbnRlcmFjdGlvbkJlZ2luKCkpXG4gICAgICAgIGhhc01hcmtlZEludGVyYWN0aW9uQmVnaW4uY3VycmVudCA9IHRydWVcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBvYnNlcnZlclxuICB9LCBbcHJvcHMuaXNQcm9tcHRpbmddKVxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFpbnRlcmFjdGlvblRyaWdnZXJFbGVtZW50LmN1cnJlbnQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBjb25zdCB0YXJnZXQgPSBpbnRlcmFjdGlvblRyaWdnZXJFbGVtZW50LmN1cnJlbnRcbiAgICBpbnRlcmFjdGlvbk9ic2VydmVyLm9ic2VydmUodGFyZ2V0KVxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBpbnRlcmFjdGlvbk9ic2VydmVyLnVub2JzZXJ2ZSh0YXJnZXQpXG4gICAgfVxuICB9LCBbaW50ZXJhY3Rpb25PYnNlcnZlciwgaW50ZXJhY3Rpb25UcmlnZ2VyRWxlbWVudC5jdXJyZW50XSlcblxuICAvLyBXaGVuIHRoZSBmZWVkIGlzIHJlZnJlc2hlZCwgc2Nyb2xsIHRvIHRoZSB0b3BcbiAgY29uc3QgcHJldkZlZWRIYXNoUmVmID0gUmVhY3QudXNlUmVmKGdldEZlZWRIYXNoRm9yQ2FjaGUocHJvcHMuZmVlZCkpXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgY3VycmVudEZlZWRIYXNoID0gZ2V0RmVlZEhhc2hGb3JDYWNoZShwcm9wcy5mZWVkKVxuICAgIGlmIChwcmV2RmVlZEhhc2hSZWYuY3VycmVudCAmJiBwcmV2RmVlZEhhc2hSZWYuY3VycmVudCAhPT0gY3VycmVudEZlZWRIYXNoKSB7XG4gICAgICAvLyBGZWVkIGhhc2ggY2hhbmdlZCwgbWFrZSBzdXJlIHdlIHNjcm9sbCB0byB0b3BcbiAgICAgIGlmIChpbnRlcmFjdGlvblRyaWdnZXJFbGVtZW50LmN1cnJlbnQpIHtcbiAgICAgICAgaW50ZXJhY3Rpb25UcmlnZ2VyRWxlbWVudC5jdXJyZW50LnNjcm9sbEludG9WaWV3KHtcbiAgICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCcsXG4gICAgICAgICAgYmxvY2s6ICdjZW50ZXInXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICAgIHByZXZGZWVkSGFzaFJlZi5jdXJyZW50ID0gY3VycmVudEZlZWRIYXNoXG4gIH0pXG5cbiAgLy8gQ2hlY2sgZm9yIGNoYW5nZXMgb2Z0ZW4sICh3b24ndCBpbmN1ciByZW1vdGUgY2hlY2ssXG4gIC8vIG9ubHkgbG9jYWwgdW5sZXNzIGl0J3MgYmVlbiBhd2hpbGUpLlxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGludGVydmFsTXMgPSAyICogNjAgKiAxMDAwXG4gICAgY29uc3QgdGltZW91dEhhbmRsZSA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIHByb3BzLm9uQ2hlY2tGb3JVcGRhdGUoKVxuICAgIH0sIGludGVydmFsTXMpXG4gICAgLy8gQ2FuY2VsIHRoZSB0aW1lciB3aGVuIHdlIGFyZSB1bm1vdW50ZWRcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lb3V0SGFuZGxlKVxuICAgIH1cbiAgfSwgW10pXG5cbiAgLy8gUmVwb3J0IG9uIGhvdyBtYW55IGNhcmRzIGhhdmUgYmVlbiB2aWV3ZWQgcGVyaW9kaWNhbGx5XG4gIC8vIChldmVyeSA0IGNhcmRzKS5cbiAgY29uc3QgbGF0ZXN0Q2FyZERlcHRoID0gUmVhY3QudXNlUmVmKDApXG4gIGNvbnN0IGludGVyc2VjdGlvbk9ic2VydmVyID0gUmVhY3QudXNlUmVmKG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihlbnRyaWVzID0+IHtcbiAgICBjb25zdCBpblZpZXcgPSBlbnRyaWVzLmZpbHRlcihlID0+IGUuaW50ZXJzZWN0aW9uUmF0aW8gPiAwKVxuICAgIGlmICghaW5WaWV3Lmxlbmd0aCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGNvbnN0IGNvdW50cyA9IGluVmlldy5tYXAoaSA9PiBOdW1iZXIoaS50YXJnZXQuZ2V0QXR0cmlidXRlKGF0dHJpYnV0ZU5hbWVDYXJkQ291bnQpKSlcbiAgICBjb3VudHMuc29ydCgoYSwgYikgPT4gYiAtIGEpXG4gICAgY29uc3QgY291bnQgPSBjb3VudHNbMF1cbiAgICAvLyBIYW5kbGUgbm90IGRlZXBlciB0aGFuIHdlJ3ZlIHByZXZpb3VzbHkgYmVlbiB0aGlzIHNlc3Npb25cbiAgICBpZiAobGF0ZXN0Q2FyZERlcHRoLmN1cnJlbnQgPj0gY291bnQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBjb25zb2xlLmRlYnVnKGBCcmF2ZSBOZXdzOiB2aWV3ZWQgJHtjb3VudH0gY2FyZHMuYClcbiAgICBwcm9wcy5vbkZlZWRJdGVtVmlld2VkQ291bnRDaGFuZ2VkKGNvdW50KVxuICB9KSlcbiAgY29uc3QgcmVnaXN0ZXJDYXJkQ291bnRUcmlnZ2VyRWxlbWVudCA9IFJlYWN0LnVzZUNhbGxiYWNrKCh0cmlnZ2VyOiBIVE1MRWxlbWVudCB8IG51bGwpID0+IHtcbiAgICBpZiAoIXRyaWdnZXIpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBpbnRlcnNlY3Rpb25PYnNlcnZlci5jdXJyZW50Lm9ic2VydmUodHJpZ2dlcilcbiAgfSwgW2ludGVyc2VjdGlvbk9ic2VydmVyLmN1cnJlbnRdKVxuXG4gIC8vIFRPRE8ocGV0ZW1pbGwpOiBPbmx5IHdheSB0byB0ZXN0IGZvciBlcnJvciBzdGF0ZSBpcyBpZiB0aGVyZSBhcmUgbm9cbiAgLy8gcHVibGlzaGVycyBzaW5jZSBHZXRGZWVkIGFuZCBHZXRQdWJsaXNoZXJzIHdpbGwgYWx3YXlzIGV2ZW50dWFsbHkgcmV0dXJuXG4gIC8vIGVtcHR5IG9iamVjdHMuIENvbnNpZGVyIGhhdmluZyB0aG9zZSBtb2pvbSBmdW5jdGlvbnMgcHJvdmlkZSBlcnJvciBzdGF0ZXMuXG4gIGNvbnN0IGhhc0NvbnRlbnQgPSBmZWVkICYmIHB1Ymxpc2hlcnMgJiYgISFPYmplY3Qua2V5cyhwdWJsaXNoZXJzKS5sZW5ndGhcblxuICAvLyBMb2FkaW5nIHN0YXRlXG4gIGlmIChwcm9wcy5pc0ZldGNoaW5nICYmICFoYXNDb250ZW50KSB7XG4gICAgcmV0dXJuIDxDYXJkTG9hZGluZyAvPlxuICB9XG5cbiAgLy8gRXJyb3Igc3RhdGVcbiAgaWYgKCFoYXNDb250ZW50KSB7XG4gICAgcmV0dXJuIDxDYXJkRXJyb3Igb25SZWZyZXNoPXtwcm9wcy5vblJlZnJlc2h9IC8+XG4gIH1cblxuICAvLyBzYXRpc2Z5IHR5cGVzY3JpcHQgc2FuaXR5LCBzaG91bGQgbm90IGdldCBoZXJlXG4gIGlmICghZmVlZCB8fCAhcHVibGlzaGVycykge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0JyYXZlIE5ld3M6IHNob3VsZCBoYXZlIHNob3duIGVycm9yIG9yIGxvYWRpbmcgc3RhdGUsIGJ1dCByYW4gaW4gdG8gYW4gdW5pbnRlbmRlZCBjb2RlIHBhdGguJylcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgY29uc3QgaXNPbmx5RGlzcGxheWluZ1BlZWtpbmdDYXJkID0gIXByb3BzLmhhc0ludGVyYWN0ZWQgJiYgcHJvcHMuaXNQcm9tcHRpbmdcbiAgY29uc3QgZGlzcGxheWVkUGFnZUNvdW50ID0gTWF0aC5taW4ocHJvcHMuZGlzcGxheWVkUGFnZUNvdW50LCBmZWVkLnBhZ2VzLmxlbmd0aClcbiAgY29uc3QgaW50cm9Db3VudCA9IGZlZWQuZmVhdHVyZWRJdGVtID8gMiA6IDFcbiAgY29uc3Qgc2hvd05vQ29udGVudE1lc3NhZ2UgPSAhcHJvcHMuaXNGZXRjaGluZyAmJlxuICAgIGhhc0NvbnRlbnQgJiZcbiAgICAhZmVlZC5mZWF0dXJlZEl0ZW0gJiZcbiAgICBmZWVkLnBhZ2VzLmxlbmd0aCA9PT0gMFxuICBsZXQgcnVubmluZ0NhcmRDb3VudCA9IGludHJvQ291bnRcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgey8qIG5vIGZlZWQgY29udGVudCBhdmFpbGFibGUgKi99XG4gICAgICB7c2hvd05vQ29udGVudE1lc3NhZ2UgJiZcbiAgICAgICAgPENhcmROb0NvbnRlbnQgb25DdXN0b21pemU9e3Byb3BzLm9uQ3VzdG9taXplQnJhdmVOZXdzfSAvPn1cbiAgICAgIHsvKiBmZWF0dXJlZCBpdGVtICovfVxuICAgICAge2ZlZWQuZmVhdHVyZWRJdGVtICYmIDxDYXJkTGFyZ2VcbiAgICAgICAgY29udGVudD17W2ZlZWQuZmVhdHVyZWRJdGVtXX1cbiAgICAgICAgcHVibGlzaGVycz17cHVibGlzaGVyc31cbiAgICAgICAgYXJ0aWNsZVRvU2Nyb2xsVG89e3Byb3BzLmFydGljbGVUb1Njcm9sbFRvfVxuICAgICAgICBvblNldFB1Ymxpc2hlclByZWY9e3Byb3BzLm9uU2V0UHVibGlzaGVyUHJlZn1cbiAgICAgICAgb25SZWFkRmVlZEl0ZW09e3Byb3BzLm9uUmVhZEZlZWRJdGVtfVxuICAgICAgLz5cbiAgICAgIH1cbiAgICAgIDxkaXYgcmVmPXtpbnRlcmFjdGlvblRyaWdnZXJFbGVtZW50fSAvPlxuICAgICAgPGRpdiB7Li4ueyBbYXR0cmlidXRlTmFtZUNhcmRDb3VudF06IDEgfX0gcmVmPXtyZWdpc3RlckNhcmRDb3VudFRyaWdnZXJFbGVtZW50fSAvPlxuICAgICAgeyFpc09ubHlEaXNwbGF5aW5nUGVla2luZ0NhcmQgJiZcbiAgICAgICAgPD5cbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPGRpdiB7Li4ueyBbYXR0cmlidXRlTmFtZUNhcmRDb3VudF06IGludHJvQ291bnQgfX0gcmVmPXtyZWdpc3RlckNhcmRDb3VudFRyaWdnZXJFbGVtZW50fSAvPlxuICAgICAgICAgIDwvPlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIC8qIEluZmluaXRlbHkgcmVwZWF0aW5nIGNvbGxlY3Rpb25zIG9mIGNvbnRlbnQuICovXG4gICAgICAgICAgICBBcnJheShkaXNwbGF5ZWRQYWdlQ291bnQpLmZpbGwodW5kZWZpbmVkKS5tYXAoKF86IHVuZGVmaW5lZCwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgICBsZXQgc3RhcnRpbmdEaXNwbGF5SW5kZXggPSBydW5uaW5nQ2FyZENvdW50XG4gICAgICAgICAgICAgIHJ1bm5pbmdDYXJkQ291bnQgKz0gZmVlZC5wYWdlc1tpbmRleF0uaXRlbXMubGVuZ3RoXG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPENhcmRzR3JvdXBcbiAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgICBpdGVtU3RhcnRpbmdEaXNwbGF5SW5kZXg9e3N0YXJ0aW5nRGlzcGxheUluZGV4fVxuICAgICAgICAgICAgICAgICAgY29udGVudD17ZmVlZC5wYWdlc1tpbmRleF19XG4gICAgICAgICAgICAgICAgICBwdWJsaXNoZXJzPXtwdWJsaXNoZXJzfVxuICAgICAgICAgICAgICAgICAgYXJ0aWNsZVRvU2Nyb2xsVG89e3Byb3BzLmFydGljbGVUb1Njcm9sbFRvfVxuICAgICAgICAgICAgICAgICAgb25SZWFkRmVlZEl0ZW09e3Byb3BzLm9uUmVhZEZlZWRJdGVtfVxuICAgICAgICAgICAgICAgICAgb25QZXJpb2RpY0NhcmRWaWV3cz17cmVnaXN0ZXJDYXJkQ291bnRUcmlnZ2VyRWxlbWVudH1cbiAgICAgICAgICAgICAgICAgIG9uU2V0UHVibGlzaGVyUHJlZj17cHJvcHMub25TZXRQdWJsaXNoZXJQcmVmfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICAgIDxDdXN0b21pemUgb25DdXN0b21pemVCcmF2ZU5ld3M9eygpID0+IHNldEN1c3RvbWl6ZVBhZ2UoJ25ld3MnKX0gc2hvdz17c2hvd09wdGlvbnN9IC8+XG4gICAgICAgICAgPFJlZnJlc2ggaXNGZXRjaGluZz17cHJvcHMuaXNGZXRjaGluZ30gc2hvdz17c2hvd09wdGlvbnMgJiYgKHByb3BzLmlzVXBkYXRlQXZhaWxhYmxlIHx8IHByb3BzLmlzRmV0Y2hpbmcpfSBvbkNsaWNrPXtwcm9wcy5vblJlZnJlc2h9IC8+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgcmVmPXtzZXRTY3JvbGxUcmlnZ2VyUmVmfVxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgd2lkdGg6ICcxcHgnLFxuICAgICAgICAgICAgICBoZWlnaHQ6ICcxcHgnLFxuICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgICAgYm90dG9tOiAnMCdcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC8+XG4gICAgICB9XG4gICAgPC8+XG4gIClcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==