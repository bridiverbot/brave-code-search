export const __webpack_esm_id__ = "brave_components_brave_news_browser_resources_customize_Configure_tsx";
export const __webpack_esm_ids__ = ["brave_components_brave_news_browser_resources_customize_Configure_tsx"];
export const __webpack_esm_modules__ = {

/***/ "../../../brave/components/brave_news/browser/resources/customize/Configure.tsx"
/*!**************************************************************************************!*\
  !*** ./components/brave_news/browser/resources/customize/Configure.tsx + 16 modules ***!
  \**************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Configure)
});
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./components/common/locale.ts
var common_locale = __webpack_require__("../../../brave/components/common/locale.ts");
// EXTERNAL MODULE: ./node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/tokens/css/variables.js
var variables = __webpack_require__("../../../brave/node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/tokens/css/variables.js");
// EXTERNAL MODULE: external ["//resources/brave/react.bundle.js","React"]
var react_bundle_js_React_ = __webpack_require__("react");
// EXTERNAL MODULE: ./node_modules/.pnpm/styled-components@6.4.3_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/styled-components/dist/styled-components.esm.js + 7 modules
var styled_components_esm = __webpack_require__("../../../brave/node_modules/.pnpm/styled-components@6.4.3_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/styled-components/dist/styled-components.esm.js");
// EXTERNAL MODULE: ./components/brave_news/browser/resources/shared/Context.tsx + 3 modules
var Context = __webpack_require__("../../../brave/components/brave_news/browser/resources/shared/Context.tsx");
// EXTERNAL MODULE: ./components/common/Flex.tsx
var Flex = __webpack_require__("../../../brave/components/common/Flex.tsx");
;// ./components/brave_news/browser/resources/customize/DisabledPlaceholder.tsx
// Copyright (c) 2022 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.





const Container = (0,styled_components_esm["default"])((0,Flex["default"])).withConfig({ displayName: "Container", componentId: "sc-1he67gc" }) `
  padding: ${variables.spacing['2Xl']} 0;
`;
const Header = styled_components_esm["default"].h3.withConfig({ displayName: "Header", componentId: "sc-sa981n" }) `
  padding: 0;
  margin: 0;
  font: ${variables.font.heading.h2};
  color: ${variables.color.text.secondary};
`;
const Subtitle = styled_components_esm["default"].p.withConfig({ displayName: "Subtitle", componentId: "sc-vtpa3b" }) `
  padding: 0;
  margin: 0;
  max-width: 66ch;
  text-align: center;
  font: ${variables.font.default.regular};
  color: ${variables.color.text.secondary};
`;
function DisabledPlaceholder() {
    return (react_bundle_js_React_.createElement(Container, { align: "center", justify: "center", direction: "column", gap: variables.spacing['2Xl'] },
        react_bundle_js_React_.createElement(Header, null, (0,common_locale.getLocale)("BRAVE_NEWS_INTRO_TITLE" /* S.BRAVE_NEWS_INTRO_TITLE */)),
        react_bundle_js_React_.createElement(Subtitle, null, (0,common_locale.getLocale)("BRAVE_NEWS_INTRO_DESCRIPTION" /* S.BRAVE_NEWS_INTRO_DESCRIPTION */))));
}

// EXTERNAL MODULE: ./node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/react/button.js + 1 modules
var react_button = __webpack_require__("../../../brave/node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/react/button.js");
// EXTERNAL MODULE: ./components/brave_news/browser/resources/shared/channelsCache.ts
var channelsCache = __webpack_require__("../../../brave/components/brave_news/browser/resources/shared/channelsCache.ts");
// EXTERNAL MODULE: ./components/brave_news/browser/resources/shared/publishersCache.ts
var publishersCache = __webpack_require__("../../../brave/components/brave_news/browser/resources/shared/publishersCache.ts");
// EXTERNAL MODULE: ./components/brave_news/browser/resources/shared/Icons.tsx
var Icons = __webpack_require__("../../../brave/components/brave_news/browser/resources/shared/Icons.tsx");
// EXTERNAL MODULE: ./components/brave_news/browser/resources/shared/FollowButton.tsx
var FollowButton = __webpack_require__("../../../brave/components/brave_news/browser/resources/shared/FollowButton.tsx");
// EXTERNAL MODULE: ./components/brave_news/browser/resources/shared/channel.ts
var channel = __webpack_require__("../../../brave/components/brave_news/browser/resources/shared/channel.ts");
;// ./components/brave_news/browser/resources/customize/ChannelCard.tsx
// Copyright (c) 2022 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.








const SubscribeButton = (0,styled_components_esm["default"])((0,FollowButton["default"])).withConfig({ displayName: "SubscribeButton", componentId: "sc-1qq4b82" }) `
  position: absolute;
  top: ${variables.spacing.m};
  right: ${variables.spacing.m};
`;
const ChannelCard_Container = (0,styled_components_esm["default"])((0,Flex["default"])).withConfig({ displayName: "Container", componentId: "sc-2a8o2l" }) `
  height: 80px;
  font: ${variables.font.default.semibold};
  color: ${variables.color.text.primary};
  border-radius: ${variables.radius.m};
  padding: ${variables.spacing.xl};
  position: relative;
  box-shadow: ${variables.effect.elevation['02']};
  border: 1px solid ${variables.color.divider.subtle};
  background: ${variables.color.container.background};

  &[data-channel-card-is-followed=true] {
    &:not(:hover, :has(:focus-visible)) ${SubscribeButton} {
      opacity: 0;
    }
  }
`;
const IconContainer = styled_components_esm["default"].div.withConfig({ displayName: "IconContainer", componentId: "sc-13tzy6" }) `
  --leo-icon-size: ${variables.spacing.xl};

  width: ${variables.spacing['3Xl']};
  height: ${variables.spacing['3Xl']};
  padding: ${variables.spacing.m};
  border-radius: ${variables.radius.full};
  background: ${variables.color.container.highlight};
  color: ${variables.color.icon.default};
  display: flex;
  align-items: center;
  justify-content: center;
`;
function ChannelCard({ channelName }) {
    var _a;
    const { subscribed, setSubscribed } = (0,Context.useChannelSubscribed)(channelName);
    return react_bundle_js_React_.createElement(ChannelCard_Container, { direction: 'column', justify: 'center', align: 'start', gap: variables.spacing.s, "data-channel-card-is-followed": subscribed },
        react_bundle_js_React_.createElement(SubscribeButton, { following: subscribed, onClick: () => setSubscribed(!subscribed) }),
        react_bundle_js_React_.createElement(IconContainer, null, (_a = Icons.channelIcons[channelName]) !== null && _a !== void 0 ? _a : Icons.channelIcons.default),
        (0,channel.getTranslatedChannelName)(channelName));
}

;// ./components/brave_news/browser/resources/customize/DiscoverSection.tsx
// Copyright (c) 2022 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.




const DiscoverSection_Container = (0,styled_components_esm["default"])((0,Flex["default"])).withConfig({ displayName: "Container", componentId: "sc-9lctnz" }) `
  padding: ${variables.spacing.xl} 0;
`;
const DiscoverSection_Header = styled_components_esm["default"].span.withConfig({ displayName: "Header", componentId: "sc-ewj8kf" }) `
  font: ${variables.font.heading.h4};
  margin: ${variables.spacing.m} 0;
`;
const DiscoverSection_Subtitle = styled_components_esm["default"].span.withConfig({ displayName: "Subtitle", componentId: "sc-rlq4n4" }) `
  font: ${variables.font.small.regular};
`;
const ItemsContainer = styled_components_esm["default"].div.withConfig({ displayName: "ItemsContainer", componentId: "sc-1gqbwpy" }) `
  margin: ${variables.spacing.m} 0;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 208px));
  gap: ${variables.spacing.xl};
`;
function DiscoverSection(props) {
    return react_bundle_js_React_.createElement(DiscoverSection_Container, { direction: 'column' },
        props.name && react_bundle_js_React_.createElement(Flex["default"], { direction: 'row', gap: variables.spacing.m, align: 'center' },
            react_bundle_js_React_.createElement(DiscoverSection_Header, null, props.name)),
        props.subtitle && react_bundle_js_React_.createElement(DiscoverSection_Subtitle, null, props.subtitle),
        react_bundle_js_React_.createElement(ItemsContainer, null, props.children));
}

// EXTERNAL MODULE: ./components/brave_news/browser/resources/customize/Loading.tsx
var Loading = __webpack_require__("../../../brave/components/brave_news/browser/resources/customize/Loading.tsx");
// EXTERNAL MODULE: ./components/brave_news/browser/resources/shared/PublisherCard.tsx + 1 modules
var PublisherCard = __webpack_require__("../../../brave/components/brave_news/browser/resources/shared/PublisherCard.tsx");
;// ./components/brave_news/browser/resources/customize/Carousel.tsx
// Copyright (c) 2022 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.






const CARD_SIZE = 208;
const CARD_SIZE_PX = `${CARD_SIZE}px`;
const ScrollButton = styled_components_esm["default"].button.withConfig({ displayName: "ScrollButton", componentId: "sc-1um9gi2" }) `
  all: unset;
  position: absolute;
  width: ${variables.spacing['3Xl']};
  height: ${variables.spacing['3Xl']};
  top: ${variables.spacing['3Xl']};
  background: ${variables.color.container.background};
  border-radius: ${variables.radius.full};
  box-shadow: ${variables.effect.elevation['02']};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${variables.color.icon.default};
  cursor: pointer;

  :hover {
    box-shadow: ${variables.effect.elevation['03']};
    color: ${variables.color.icon.interactive};
  }

  ${p => p.hidden && (0,styled_components_esm.css) `opacity: 0;`}

  transition: opacity 0.2s ease-in-out, color 0.2s ease-in-out;
`;
const ScrollButtonLeft = (0,styled_components_esm["default"])(ScrollButton).withConfig({ displayName: "ScrollButtonLeft", componentId: "sc-vwvuc9" }) `
  left: calc(-1 * ${variables.spacing.xl});
  transform: rotate(180deg);
`;
const ScrollButtonRight = (0,styled_components_esm["default"])(ScrollButton).withConfig({ displayName: "ScrollButtonRight", componentId: "sc-y048be" }) `
  right: calc(-1 * ${variables.spacing.xl});
`;
const Carousel_Container = (0,styled_components_esm["default"])((0,Flex["default"])).withConfig({ displayName: "Container", componentId: "sc-hvfuov" }) `
  padding: ${variables.spacing.xl} 0 0 0;
  max-width: calc(${CARD_SIZE_PX} * 3 + ${variables.spacing.xl} * 2);
  container-name: carousel;
  container-type: inline-size;
  &:not(:hover, :has(:focus-visible)) ${ScrollButton} {
    opacity: 0;
  }
`;
const Carousel_Header = styled_components_esm["default"].div.withConfig({ displayName: "Header", componentId: "sc-43jitb" }) `
  width: 100%;
  font: ${variables.font.heading.h4};
  margin: ${variables.spacing.m} 0;
`;
const Carousel_Subtitle = styled_components_esm["default"].span.withConfig({ displayName: "Subtitle", componentId: "sc-18uyk8h" }) `
  font: ${variables.font.small.regular};
`;
const CarouselContainer = styled_components_esm["default"].div.withConfig({ displayName: "CarouselContainer", componentId: "sc-u4odmu" }) `
  position: relative;
`;
const Carousel_ItemsContainer = (0,styled_components_esm["default"])((0,Flex["default"])).withConfig({ displayName: "ItemsContainer", componentId: "sc-lek5z4" }) `
  margin: ${variables.spacing.m} 0;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-snap-type: x mandatory;

  &::-webkit-scrollbar {
   display: none;
   width: 0;
  }
`;
const PublisherCardContainer = styled_components_esm["default"].div.withConfig({ displayName: "PublisherCardContainer", componentId: "sc-b2m9o2" }) `
  min-width: calc((100cqi - ${variables.spacing.xl} * 2) / 3);
  max-width: ${CARD_SIZE_PX};
  scroll-snap-align: start;
`;
function Carousel(props) {
    const scrollContainerRef = react_bundle_js_React_.useRef(null);
    const [availableDirections, setAvailableDirections] = react_bundle_js_React_.useState('right');
    const updateAvailableDirections = react_bundle_js_React_.useCallback(() => {
        if (!scrollContainerRef.current)
            return;
        const end = scrollContainerRef.current.scrollWidth - scrollContainerRef.current.clientWidth;
        const scrollPos = scrollContainerRef.current.scrollLeft;
        if (end <= 0) {
            setAvailableDirections('none');
        }
        else if (end > scrollPos && scrollPos > 0) {
            setAvailableDirections('both');
        }
        else if (end > scrollPos) {
            setAvailableDirections('right');
        }
        else {
            setAvailableDirections('left');
        }
    }, []);
    const scroll = react_bundle_js_React_.useCallback((dir) => {
        if (!scrollContainerRef.current)
            return;
        scrollContainerRef.current.scrollBy({
            behavior: 'smooth',
            left: CARD_SIZE * (dir === 'left' ? -1 : 1)
        });
    }, []);
    if (!props.publisherIds.length) {
        return null;
    }
    return (react_bundle_js_React_.createElement(Carousel_Container, { direction: 'column' },
        react_bundle_js_React_.createElement(Flex["default"], { direction: 'row', gap: variables.spacing.m, align: 'center' },
            react_bundle_js_React_.createElement(Carousel_Header, null, props.title)),
        props.subtitle && react_bundle_js_React_.createElement(Carousel_Subtitle, null, props.subtitle),
        react_bundle_js_React_.createElement(CarouselContainer, null,
            react_bundle_js_React_.createElement(Carousel_ItemsContainer, { direction: 'row', gap: variables.spacing.xl, ref: scrollContainerRef, onScroll: updateAvailableDirections }, props.publisherIds.map(p => react_bundle_js_React_.createElement(PublisherCardContainer, { key: p },
                react_bundle_js_React_.createElement(PublisherCard["default"], { publisherId: p })))),
            react_bundle_js_React_.createElement(ScrollButtonLeft, { onClick: () => scroll('left'), hidden: availableDirections === 'right' || availableDirections === 'none' }, Icons.ArrowRight),
            react_bundle_js_React_.createElement(ScrollButtonRight, { onClick: () => scroll('right'), hidden: availableDirections === 'left' || availableDirections === 'none' }, Icons.ArrowRight))));
}

;// ./components/brave_news/browser/resources/customize/CustomizeLink.tsx
// Copyright (c) 2022 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.


const CustomizeLink = styled_components_esm["default"].button.withConfig({ displayName: "CustomizeLink", componentId: "sc-cxs1cw" }) `
  all: unset;
  font: ${variables.font.small.semibold};
  color: ${variables.color.text.interactive};
  cursor: pointer;
`;
/* harmony default export */ const customize_CustomizeLink = (CustomizeLink);

// EXTERNAL MODULE: ./node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/react/icon.js + 1 modules
var icon = __webpack_require__("../../../brave/node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/react/icon.js");
;// ./components/brave_news/browser/resources/customize/CustomizePage.tsx
// Copyright (c) 2022 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.








const BackButton = (0,styled_components_esm["default"])((0,react_button["default"])).attrs({
    kind: 'plain-faint',
}).withConfig({ displayName: "BackButton", componentId: "sc-krt8at" }) `
  --leo-button-padding: 0;

  flex: 1;
`;
const CustomizePage_Header = styled_components_esm["default"].span.withConfig({ displayName: "Header", componentId: "sc-4vovw0" }) `
  font: ${variables.font.heading.h4};
  color: ${variables.color.text.primary};
  flex: 5;
  text-align: center;
`;
const Spacer = styled_components_esm["default"].div.withConfig({ displayName: "Spacer", componentId: "sc-11osq5q" }) `flex: 1;`;
function CustomizePage(props) {
    const { setCustomizePage } = (0,Context.useBraveNews)();
    return react_bundle_js_React_.createElement(Flex["default"], { direction: "column", gap: variables.spacing.m },
        react_bundle_js_React_.createElement(Flex["default"], { align: "center" },
            react_bundle_js_React_.createElement(BackButton, { onClick: () => setCustomizePage('news') },
                react_bundle_js_React_.createElement(icon["default"], { name: "arrow-left", slot: "icon-before" }),
                (0,common_locale.getLocale)("BRAVE_NEWS_BACK_BUTTON" /* S.BRAVE_NEWS_BACK_BUTTON */)),
            react_bundle_js_React_.createElement(CustomizePage_Header, null, props.title),
            react_bundle_js_React_.createElement(Spacer, null)),
        props.children);
}

;// ./components/brave_news/browser/resources/customize/Popular.tsx
// Copyright (c) 2022 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.











const usePopularPublisherIds = () => {
    const { filteredPublisherIds, publishers, locale } = (0,Context.useBraveNews)();
    return react_bundle_js_React_.useMemo(() => filteredPublisherIds.map(id => publishers[id])
        .map(p => { var _a; return [p, (_a = p.locales.find(l => l.locale === locale)) === null || _a === void 0 ? void 0 : _a.rank]; })
        // Filter out publishers which aren't in the current locale.
        .filter(([p, pRank]) => pRank !== undefined)
        .sort(([a, aRank], [b, bRank]) => {
        // Neither source has a rank, sort alphabetically
        if (!aRank && !bRank) {
            return a.publisherName.localeCompare(b.publisherName);
        }
        // 0 is considered unranked, because mojo doesn't support optional
        // primitives, so we want to sort 0 last.
        return (aRank || Number.MAX_SAFE_INTEGER) - (bRank || Number.MAX_SAFE_INTEGER);
    })
        .map(([p]) => p.publisherId), [filteredPublisherIds, publishers, locale]);
};
function PopularCarousel() {
    const { setCustomizePage } = (0,Context.useBraveNews)();
    const popularPublisherIds = usePopularPublisherIds();
    return (react_bundle_js_React_.createElement(Carousel, { title: react_bundle_js_React_.createElement(Flex["default"], { justify: 'space-between' },
            (0,common_locale.getLocale)("BRAVE_NEWS_POPULAR_TITLE" /* S.BRAVE_NEWS_POPULAR_TITLE */),
            react_bundle_js_React_.createElement(customize_CustomizeLink, { onClick: () => setCustomizePage('popular') }, (0,common_locale.getLocale)("BRAVE_NEWS_VIEW_ALL_BUTTON" /* S.BRAVE_NEWS_VIEW_ALL_BUTTON */))), publisherIds: popularPublisherIds }));
}
function PopularPage() {
    const publishersLoaded = publishersCache.PublishersCachingWrapper.getInstance().connected;
    const popularPublisherIds = usePopularPublisherIds();
    return react_bundle_js_React_.createElement(CustomizePage, { title: (0,common_locale.getLocale)("BRAVE_NEWS_POPULAR_TITLE" /* S.BRAVE_NEWS_POPULAR_TITLE */) }, publishersLoaded ? (react_bundle_js_React_.createElement(DiscoverSection, null, popularPublisherIds.map(p => react_bundle_js_React_.createElement(PublisherCard["default"], { key: p, publisherId: p })))) : (react_bundle_js_React_.createElement(Loading["default"], null)));
}

;// ./components/brave_news/browser/resources/customize/Suggestions.tsx
// Copyright (c) 2022 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.










function SuggestionsCarousel() {
    const { suggestedPublisherIds, setCustomizePage } = (0,Context.useBraveNews)();
    return react_bundle_js_React_.createElement(Carousel, { title: react_bundle_js_React_.createElement(Flex["default"], { justify: 'space-between' },
            (0,common_locale.getLocale)("BRAVE_NEWS_SUGGESTIONS_TITLE" /* S.BRAVE_NEWS_SUGGESTIONS_TITLE */),
            react_bundle_js_React_.createElement(customize_CustomizeLink, { onClick: () => setCustomizePage('suggestions') }, (0,common_locale.getLocale)("BRAVE_NEWS_VIEW_ALL_BUTTON" /* S.BRAVE_NEWS_VIEW_ALL_BUTTON */))), subtitle: (0,common_locale.getLocale)("BRAVE_NEWS_SUGGESTIONS_SUBTITLE" /* S.BRAVE_NEWS_SUGGESTIONS_SUBTITLE */), publisherIds: suggestedPublisherIds });
}
function SuggestionsPage() {
    const { suggestedPublisherIds, updateSuggestedPublisherIds } = (0,Context.useBraveNews)();
    const loading = suggestedPublisherIds.length === 0;
    react_bundle_js_React_.useEffect(() => {
        updateSuggestedPublisherIds();
    }, [updateSuggestedPublisherIds]);
    return react_bundle_js_React_.createElement(CustomizePage, { title: (0,common_locale.getLocale)("BRAVE_NEWS_SUGGESTIONS_TITLE" /* S.BRAVE_NEWS_SUGGESTIONS_TITLE */) }, loading ? (react_bundle_js_React_.createElement(Loading["default"], null)) : (react_bundle_js_React_.createElement(DiscoverSection, null, suggestedPublisherIds.map(p => react_bundle_js_React_.createElement(PublisherCard["default"], { key: p, publisherId: p })))));
}

// EXTERNAL MODULE: ./components/brave_news/browser/resources/shared/api.ts
var api = __webpack_require__("../../../brave/components/brave_news/browser/resources/shared/api.ts");
;// ./components/brave_news/browser/resources/customize/useSearch.ts
// Copyright (c) 2022 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.



const QUERY_MIN_LENGTH_FILTER_SOURCES = 2;
function useSearch(query) {
    const lowerQuery = query.toLowerCase();
    const channels = (0,Context.useChannels)();
    const context = (0,Context.useBraveNews)();
    const canQueryFilterSources = lowerQuery.length >= QUERY_MIN_LENGTH_FILTER_SOURCES;
    const [directResults, setDirectResults] = react_bundle_js_React_.useState([]);
    const [loading, setLoading] = react_bundle_js_React_.useState(false);
    // Whether user has asked us to perform a search at the query url
    const [canFetchUrl, setCanFetchUrl] = react_bundle_js_React_.useState(false);
    const filteredChannels = react_bundle_js_React_.useMemo(() => channels.filter(c => c.channelName.toLowerCase().includes(lowerQuery)), [lowerQuery, channels]);
    const filteredSources = react_bundle_js_React_.useMemo(() => {
        const publishers = context.sortedPublishers
            .filter(p => {
            var _a, _b, _c, _d;
            return canQueryFilterSources && (p.publisherName.toLowerCase().includes(lowerQuery) ||
                p.categoryName.toLocaleLowerCase().includes(lowerQuery) ||
                ((_b = (_a = p.siteUrl) === null || _a === void 0 ? void 0 : _a.url) === null || _b === void 0 ? void 0 : _b.toLocaleLowerCase().includes(lowerQuery)) ||
                ((_d = (_c = p.feedSource) === null || _c === void 0 ? void 0 : _c.url) === null || _d === void 0 ? void 0 : _d.toLocaleLowerCase().includes(lowerQuery)));
        });
        const results = { publishers, direct: [] };
        for (const result of directResults) {
            // If we have any publisher with this feed url, we should prefer showing
            // that to creating a new direct feed.
            // Note: We should only add the publisher to the list of publisher matches
            // if it isn't already matching. The canonical case here is
            // news.com (redirects to cnet.com), so we should show the cnet.com feed.
            const publisherMatch = context.sortedPublishers.find(p => p.feedSource.url === result.feedUrl.url);
            if (!publisherMatch) {
                results.direct.push(result);
            }
            else if (!results.publishers.some(p => p.publisherId === publisherMatch.publisherId)) {
                results.publishers.push(publisherMatch);
            }
        }
        return {
            publisherIds: results.publishers.map(p => p.publisherId),
            direct: results.direct
        };
    }, [directResults, context.sortedPublishers, lowerQuery]);
    react_bundle_js_React_.useEffect(() => {
        // Reset state when query changes
        setCanFetchUrl(false);
        setLoading(false);
        setDirectResults([]);
    }, [query]);
    // Contains a url as string if the query looks like a url
    const feedUrlQuery = react_bundle_js_React_.useMemo(() => {
        // Check if we have a url-able query
        let feedUrlRaw = query;
        // User inputting a protocol is a signal that they want to look
        // for a feed. Otherwise we use the '.' that a hostname would have.
        // This at least makes it possible for the user to retrieve local
        // network feeds.
        let queryContainsExplicitProtocol = false;
        if (feedUrlRaw.includes('://')) {
            queryContainsExplicitProtocol = true;
        }
        else {
            // Default protocol that should catch most cases. Make sure
            // we check for validity after adding this prefix, and
            // not before.
            feedUrlRaw = 'https://' + feedUrlRaw;
        }
        let isValidFeedUrl = false;
        try {
            const url = new URL(feedUrlRaw);
            isValidFeedUrl = ['http:', 'https:'].includes(url.protocol) &&
                (url.hostname.includes('.') || queryContainsExplicitProtocol);
        }
        catch { }
        if (!isValidFeedUrl) {
            // Not a url-able query
            return null;
        }
        return feedUrlRaw;
    }, [query]);
    react_bundle_js_React_.useEffect(() => {
        // Do nothing if user hasn't asked to search, or input isn't
        // a valid Url
        if (!canFetchUrl || !feedUrlQuery) {
            console.debug('News: query changed but not searching', { canFetchUrl, feedUrlQuery });
            return;
        }
        setLoading(true);
        let cancelled = false;
        (0,api["default"])().findFeeds({ url: feedUrlQuery.toString() }).then(({ results }) => {
            console.debug('News: received feed results', { results, cancelled });
            if (cancelled)
                return;
            setLoading(false);
            setDirectResults(results);
        });
        return () => {
            cancelled = true;
            setLoading(false);
        };
    }, [canFetchUrl, feedUrlQuery]);
    return {
        canFetchUrl,
        canQueryFilterSources,
        filteredSources,
        filteredChannels,
        feedUrlQuery,
        loading,
        setCanFetchUrl
    };
}

// EXTERNAL MODULE: ./node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/react/input.js + 2 modules
var input = __webpack_require__("../../../brave/node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/react/input.js");
;// ./components/brave_news/browser/resources/customize/Discover.tsx
// Copyright (c) 2022 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.

















const Discover_Header = styled_components_esm["default"].span.withConfig({ displayName: "Header", componentId: "sc-1rrec0" }) `
  font: ${variables.font.heading.h2};
  padding: ${variables.spacing.l} 0;
`;
function Discover() {
    const [query, setQuery] = react_bundle_js_React_.useState('');
    return react_bundle_js_React_.createElement(Flex["default"], { direction: 'column' },
        react_bundle_js_React_.createElement(Discover_Header, null, (0,common_locale.getLocale)("BRAVE_NEWS_DISCOVER_TITLE" /* S.BRAVE_NEWS_DISCOVER_TITLE */)),
        react_bundle_js_React_.createElement(input["default"], { type: "search", placeholder: (0,common_locale.getLocale)("BRAVE_NEWS_SEARCH_PLACEHOLDER_LABEL" /* S.BRAVE_NEWS_SEARCH_PLACEHOLDER_LABEL */), value: query, onInput: e => setQuery(e.value) }),
        query.length
            ? react_bundle_js_React_.createElement(SearchResults, { query: query })
            : react_bundle_js_React_.createElement(Home, null));
}
function Home() {
    const channels = (0,Context.useChannels)();
    const { suggestedPublisherIds, updateSuggestedPublisherIds } = (0,Context.useBraveNews)();
    const publishersLoaded = publishersCache.PublishersCachingWrapper.getInstance().connected;
    const channelsLoaded = channelsCache.ChannelsCachingWrapper.getInstance().connected;
    const suggestionsLoading = suggestedPublisherIds.length === 0;
    const channelNames = react_bundle_js_React_.useMemo(() => channels.map(c => c.channelName), [channels]);
    // When we mount this component, update the suggested publisher ids.
    react_bundle_js_React_.useEffect(() => {
        updateSuggestedPublisherIds();
    }, [updateSuggestedPublisherIds]);
    return (react_bundle_js_React_.createElement(react_bundle_js_React_.Fragment, null,
        publishersLoaded ? react_bundle_js_React_.createElement(PopularCarousel, null) : react_bundle_js_React_.createElement(Loading["default"], null),
        suggestionsLoading ? react_bundle_js_React_.createElement(Loading["default"], null) : react_bundle_js_React_.createElement(SuggestionsCarousel, null),
        channelsLoaded ? (react_bundle_js_React_.createElement(DiscoverSection, { name: (0,common_locale.getLocale)("BRAVE_NEWS_BROWSE_CHANNELS_HEADER" /* S.BRAVE_NEWS_BROWSE_CHANNELS_HEADER */) }, channelNames.map(channelName => react_bundle_js_React_.createElement(ChannelCard, { key: channelName, channelName: channelName })))) : (react_bundle_js_React_.createElement(react_bundle_js_React_.Fragment, null,
            react_bundle_js_React_.createElement(DiscoverSection, { name: (0,common_locale.getLocale)("BRAVE_NEWS_BROWSE_CHANNELS_HEADER" /* S.BRAVE_NEWS_BROWSE_CHANNELS_HEADER */) }),
            react_bundle_js_React_.createElement(Loading["default"], null)))));
}
function SearchResults(props) {
    var _a, _b;
    const search = useSearch(props.query);
    const isFetchable = (search.feedUrlQuery !== null);
    const showFetchPermissionButton = (isFetchable && (!search.canFetchUrl || search.loading));
    const hasAnyChannels = search.filteredChannels.length > 0;
    const hasAnySources = (search.filteredSources.publisherIds.length > 0 || search.filteredSources.direct.length > 0);
    return (react_bundle_js_React_.createElement(react_bundle_js_React_.Fragment, null,
        hasAnyChannels &&
            react_bundle_js_React_.createElement(DiscoverSection, { name: (0,common_locale.getLocale)("BRAVE_NEWS_BROWSE_CHANNELS_HEADER" /* S.BRAVE_NEWS_BROWSE_CHANNELS_HEADER */) }, search.filteredChannels.map(c => react_bundle_js_React_.createElement(ChannelCard, { key: c.channelName, channelName: c.channelName }))),
        react_bundle_js_React_.createElement(DiscoverSection, { name: (0,common_locale.getLocale)("BRAVE_NEWS_ALL_SOURCES_HEADER" /* S.BRAVE_NEWS_ALL_SOURCES_HEADER */) },
            search.filteredSources.publisherIds.map(publisherId => react_bundle_js_React_.createElement(PublisherCard["default"], { key: publisherId, publisherId: publisherId })),
            showFetchPermissionButton &&
                react_bundle_js_React_.createElement("div", null,
                    react_bundle_js_React_.createElement(react_button["default"], { size: 'tiny', kind: 'plain-faint', onClick: () => search.setCanFetchUrl(true), isLoading: search.loading }, (0,common_locale.getLocale)("BRAVE_NEWS_DIRECT_SEARCH_BUTTON" /* S.BRAVE_NEWS_DIRECT_SEARCH_BUTTON */).replace('$1', (_a = search.feedUrlQuery) !== null && _a !== void 0 ? _a : ''))),
            search.filteredSources.direct.map(r => react_bundle_js_React_.createElement(PublisherCard.DirectPublisherCard, { key: r.feedUrl.url, feedUrl: r.feedUrl.url, title: r.feedTitle })),
            !search.canQueryFilterSources &&
                (0,common_locale.getLocale)("BRAVE_NEWS_SEARCH_QUERY_TOO_SHORT" /* S.BRAVE_NEWS_SEARCH_QUERY_TOO_SHORT */),
            isFetchable && !hasAnySources && !showFetchPermissionButton &&
                (0,common_locale.getLocale)("BRAVE_NEWS_DIRECT_SEARCH_NO_RESULTS" /* S.BRAVE_NEWS_DIRECT_SEARCH_NO_RESULTS */).replace('$1', (_b = search.feedUrlQuery) !== null && _b !== void 0 ? _b : ''))));
}

// EXTERNAL MODULE: ./node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/react/dropdown.js + 2 modules
var dropdown = __webpack_require__("../../../brave/node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/react/dropdown.js");
// EXTERNAL MODULE: ./node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/react/toggle.js + 2 modules
var toggle = __webpack_require__("../../../brave/node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/react/toggle.js");
// EXTERNAL MODULE: ./components/common/loadTimeData.js
var loadTimeData = __webpack_require__("../../../brave/components/common/loadTimeData.js");
// EXTERNAL MODULE: ./node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/react/alert.js + 1 modules
var react_alert = __webpack_require__("../../../brave/node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/react/alert.js");
;// ./components/brave_news/browser/resources/customize/opml.ts
// Copyright (c) 2026 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.

// OPML (https://opml.org/spec2.opml) is the de-facto standard for exchanging
// feed subscription lists. We use standard `type="rss"` outlines for feeds so
// the file is portable to other readers, plus two Brave-specific extensions
// that other readers ignore but that let subscriptions round-trip losslessly:
//  - `type="brave-channel"`: a Brave News topic channel (has no feed URL).
//  - `type="brave-publisher"`: a Brave News publisher that has no feed URL and
//    can only be resolved by its publisher id.
// Every combined-source publisher outline also carries `bravePublisherId` so it
// re-subscribes to the exact publisher on import, even when a feed URL matches
// nothing (or the publisher has no feed URL at all).
const BRAVE_CHANNEL_TYPE = 'brave-channel';
const BRAVE_PUBLISHER_TYPE = 'brave-publisher';
const BRAVE_PUBLISHER_ID_ATTR = 'bravePublisherId';
// Serializes subscriptions into an OPML 2.0 document.
function serializeOpml(data) {
    const doc = document.implementation.createDocument(null, 'opml', null);
    const opml = doc.documentElement;
    opml.setAttribute('version', '2.0');
    const head = doc.createElement('head');
    const title = doc.createElement('title');
    title.textContent = 'Brave News subscriptions';
    head.appendChild(title);
    opml.appendChild(head);
    const body = doc.createElement('body');
    opml.appendChild(body);
    for (const item of data.items) {
        const outline = doc.createElement('outline');
        outline.setAttribute('text', item.title);
        outline.setAttribute('title', item.title);
        if (item.xmlUrl) {
            outline.setAttribute('type', 'rss');
            outline.setAttribute('xmlUrl', item.xmlUrl);
        }
        else {
            outline.setAttribute('type', BRAVE_PUBLISHER_TYPE);
        }
        if (item.htmlUrl) {
            outline.setAttribute('htmlUrl', item.htmlUrl);
        }
        if (item.publisherId) {
            outline.setAttribute(BRAVE_PUBLISHER_ID_ATTR, item.publisherId);
        }
        body.appendChild(outline);
    }
    if (data.channels.length) {
        const group = doc.createElement('outline');
        group.setAttribute('text', 'Channels');
        group.setAttribute('title', 'Channels');
        for (const channelName of data.channels) {
            const outline = doc.createElement('outline');
            outline.setAttribute('text', channelName);
            outline.setAttribute('title', channelName);
            outline.setAttribute('type', BRAVE_CHANNEL_TYPE);
            group.appendChild(outline);
        }
        body.appendChild(group);
    }
    const xml = new XMLSerializer().serializeToString(doc);
    return `<?xml version="1.0" encoding="UTF-8"?>\n${xml}`;
}
// The New Tab Page enforces Trusted Types, and its `default` policy has no
// `createHTML`, so DOMParser.parseFromString rejects a raw string. Route the
// OPML text through a dedicated policy (allow-listed in the New Tab Page's
// trusted-types CSP). The value is only ever parsed as XML and read for
// attribute values - it is never inserted into the live document as HTML.
let opmlTrustedTypesPolicy;
function toTrustedXml(xml) {
    const trustedTypes = window.trustedTypes;
    // This is the case in tests.
    if (!trustedTypes) {
        return xml;
    }
    if (!opmlTrustedTypesPolicy) {
        // Note: This policy performs no sanitization, so the results from it should never be inserted
        // into the live document as HTML. It is only used for parsing OPML documents.
        opmlTrustedTypesPolicy = trustedTypes.createPolicy('brave-news-opml', {
            createHTML: (input) => input
        });
    }
    return opmlTrustedTypesPolicy.createHTML(xml);
}
// Parses an OPML document into feeds/publishers and channels. Throws if the
// document isn't valid XML.
function parseOpml(xml) {
    const doc = new DOMParser().parseFromString(toTrustedXml(xml), 'text/xml');
    if (doc.querySelector('parsererror')) {
        throw new Error('Failed to parse OPML document');
    }
    const items = [];
    const channels = [];
    // A flat walk handles both top-level outlines and outlines nested under
    // category groups (e.g. the "Channels" group we emit, or category folders
    // produced by other readers).
    for (const outline of doc.querySelectorAll('outline')) {
        const type = outline.getAttribute('type');
        const title = outline.getAttribute('title') || outline.getAttribute('text') || '';
        if (type === BRAVE_CHANNEL_TYPE) {
            if (title) {
                channels.push(title);
            }
            continue;
        }
        const xmlUrl = outline.getAttribute('xmlUrl') || undefined;
        const publisherId = outline.getAttribute(BRAVE_PUBLISHER_ID_ATTR) || undefined;
        // Only outlines that reference a feed or a Brave publisher are
        // subscriptions; category/grouping outlines are ignored.
        if (!xmlUrl && !publisherId) {
            continue;
        }
        items.push({
            title,
            xmlUrl,
            htmlUrl: outline.getAttribute('htmlUrl') || undefined,
            publisherId
        });
    }
    return { items, channels };
}
// Maps a subscribed publisher to an OPML outline.
function publisherToOpmlItem(publisher) {
    var _a, _b;
    return {
        title: publisher.publisherName,
        xmlUrl: ((_a = publisher.feedSource) === null || _a === void 0 ? void 0 : _a.url) || undefined,
        htmlUrl: ((_b = publisher.siteUrl) === null || _b === void 0 ? void 0 : _b.url) || undefined,
        // A direct feed's id is a random, per-profile UUID that is meaningless
        // elsewhere, so only combined publishers export their id.
        publisherId: publisher.type === api.PublisherType.COMBINED_SOURCE
            ? publisher.publisherId
            : undefined
    };
}
function getSubscribedChannelNames(channels, locale) {
    return channels
        .filter((c) => c.subscribedLocales.includes(locale))
        .map((c) => c.channelName);
}
// Builds the OPML payload from the current subscriptions.
function buildExportData(publishers, channels, locale) {
    return {
        items: publishers.filter(api.isPublisherEnabled).map(publisherToOpmlItem),
        channels: getSubscribedChannelNames(channels, locale)
    };
}
// Serializes the current subscriptions and triggers a file download.
function downloadOpml(publishers, channels, locale) {
    const xml = serializeOpml(buildExportData(publishers, channels, locale));
    const blob = new Blob([xml], { type: 'text/x-opml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.download = `brave-news-subscriptions-${new Date().toISOString()}.opml`;
    a.href = url;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
}
// Normalizes a feed URL the same way the search box does (useSearch.ts), so our
// duplicate/publisher matching agrees with how feeds are added elsewhere.
function normalizeFeedUrl(raw) {
    let url = raw.trim();
    if (!url) {
        return null;
    }
    if (!url.includes('://')) {
        url = 'https://' + url;
    }
    try {
        const parsed = new URL(url);
        if (!['http:', 'https:'].includes(parsed.protocol)) {
            return null;
        }
    }
    catch {
        return null;
    }
    return url;
}
// Imports an OPML document, subscribing to matching publishers, adding new
// direct feeds (without duplicating existing ones), and re-subscribing channels.
async function importOpml(xml, actions) {
    const { items, channels } = parseOpml(xml);
    const result = {
        subscribedPublishers: 0,
        addedDirectFeeds: 0,
        subscribedChannels: 0,
        skipped: 0
    };
    const publishersById = new Map(actions.publishers.map((p) => [p.publisherId, p]));
    // Track existing direct feed URLs plus any we add during this import, so we
    // never create duplicates. The browser also dedupes by URL as a safety net.
    const directFeedUrls = new Set(actions.publishers
        .filter(api.isDirectFeed)
        .map((p) => { var _a; return (_a = p.feedSource) === null || _a === void 0 ? void 0 : _a.url; })
        .filter((u) => !!u));
    const subscribePublisher = (publisher) => {
        if ((0,api.isPublisherEnabled)(publisher)) {
            result.skipped++;
        }
        else {
            actions.followPublisher(publisher.publisherId);
            result.subscribedPublishers++;
        }
    };
    const pending = [];
    for (const item of items) {
        // 1. Prefer an exact publisher id match. This is the only way to resolve a
        //    publisher that has no feed URL. An unknown id (e.g. a stale catalog)
        //    falls through to URL-based handling.
        if (item.publisherId) {
            const publisher = publishersById.get(item.publisherId);
            if (publisher) {
                subscribePublisher(publisher);
                continue;
            }
        }
        const url = item.xmlUrl ? normalizeFeedUrl(item.xmlUrl) : null;
        if (!url) {
            result.skipped++;
            continue;
        }
        // 2. Prefer a known publisher whose feed URL matches over creating a
        //    redundant direct feed (mirrors useSearch.ts).
        const publisherMatch = actions.publishers.find((p) => { var _a; return ((_a = p.feedSource) === null || _a === void 0 ? void 0 : _a.url) === url; });
        if (publisherMatch) {
            subscribePublisher(publisherMatch);
            continue;
        }
        // 3. Otherwise add a direct feed, skipping duplicates.
        if (directFeedUrls.has(url)) {
            result.skipped++;
            continue;
        }
        directFeedUrls.add(url);
        pending.push(Promise.resolve(actions.addDirectFeed(url)));
        result.addedDirectFeeds++;
    }
    const channelByName = new Map(actions.channels.map((c) => [c.channelName, c]));
    for (const channelName of channels) {
        const channel = channelByName.get(channelName);
        // Channels are per-locale; only subscribe ones that exist in the current
        // locale and aren't already subscribed.
        if (!channel || channel.subscribedLocales.includes(actions.locale)) {
            result.skipped++;
            continue;
        }
        actions.subscribeChannel(actions.locale, channelName);
        result.subscribedChannels++;
    }
    await Promise.all(pending);
    return result;
}

;// ./components/brave_news/browser/resources/customize/OpmlControls.tsx
// Copyright (c) 2026 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.











const Links = styled_components_esm["default"].div.withConfig({ displayName: "Links", componentId: "sc-1n01uo6" }) `
  display: flex;
  align-items: center;
  gap: ${variables.spacing.m};
  flex-wrap: wrap;

  & leo-button {
    flex: 0 0 auto;
    white-space: nowrap;
  }
`;
// The customize dialog has no toast host, so show the import result as a
// fixed-position alert anchored to the bottom of the (modal) dialog.
const StatusContainer = styled_components_esm["default"].div.withConfig({ displayName: "StatusContainer", componentId: "sc-q4o1ir" }) `
  position: fixed;
  bottom: ${variables.spacing['2Xl']};
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  max-width: 520px;
`;
function OpmlControls(props) {
    const { publishers, channels, locale } = (0,Context.useBraveNews)();
    const inputRef = react_bundle_js_React_.useRef(null);
    const [status, setStatus] = react_bundle_js_React_.useState(null);
    // Dismissing the file picker fires a `cancel` event on the input that bubbles
    // to Leo Dialog's cancel handler, which treats it like Escape and closes the
    // customize dialog. Stop it here. Longer-term this may belong in Leo (only
    // close when the cancel target is the dialog itself).
    react_bundle_js_React_.useEffect(() => {
        const input = inputRef.current;
        if (!input) {
            return;
        }
        const onCancel = (e) => {
            e.preventDefault();
            e.stopPropagation();
        };
        input.addEventListener('cancel', onCancel);
        return () => input.removeEventListener('cancel', onCancel);
    }, []);
    // Auto-dismiss the status alert.
    react_bundle_js_React_.useEffect(() => {
        if (!status) {
            return;
        }
        const timer = setTimeout(() => setStatus(null), 8000);
        return () => clearTimeout(timer);
    }, [status]);
    const onExport = () => {
        downloadOpml(Object.values(publishers), Object.values(channels), locale);
    };
    const onFileChange = async (e) => {
        var _a;
        const input = e.currentTarget;
        const file = (_a = input.files) === null || _a === void 0 ? void 0 : _a[0];
        // Reset so selecting the same file again re-triggers the change event.
        input.value = '';
        if (!file) {
            return;
        }
        try {
            const text = await file.text();
            const result = await importOpml(text, {
                publishers: Object.values(publishers),
                channels: Object.values(channels),
                locale,
                followPublisher: (id) => publishersCache.PublishersCachingWrapper.getInstance().setPublisherFollowed(id, true),
                addDirectFeed: (url) => (0,api["default"])().subscribeToNewDirectFeed({ url }),
                subscribeChannel: (loc, name) => channelsCache.ChannelsCachingWrapper.getInstance().setChannelSubscribed(loc, name, true),
            });
            setStatus({
                type: 'success',
                content: (0,common_locale.formatLocale)("BRAVE_NEWS_OPML_IMPORT_RESULT" /* S.BRAVE_NEWS_OPML_IMPORT_RESULT */, {
                    $1: String(result.subscribedPublishers),
                    $2: String(result.addedDirectFeeds),
                    $3: String(result.subscribedChannels),
                    $4: String(result.skipped),
                }),
            });
        }
        catch (err) {
            console.error('Brave News: failed to import OPML', err);
            setStatus({
                type: 'error',
                content: (0,common_locale.getLocale)("BRAVE_NEWS_OPML_IMPORT_ERROR" /* S.BRAVE_NEWS_OPML_IMPORT_ERROR */),
            });
        }
    };
    return (react_bundle_js_React_.createElement(react_bundle_js_React_.Fragment, null,
        react_bundle_js_React_.createElement(Links, null,
            react_bundle_js_React_.createElement(react_button["default"], { kind: 'outline', size: 'small', isDisabled: props.disabled, onClick: () => { var _a; return (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.click(); } }, (0,common_locale.getLocale)("BRAVE_NEWS_OPML_IMPORT" /* S.BRAVE_NEWS_OPML_IMPORT */)),
            react_bundle_js_React_.createElement(react_button["default"], { kind: 'outline', size: 'small', isDisabled: props.disabled, onClick: onExport }, (0,common_locale.getLocale)("BRAVE_NEWS_OPML_EXPORT" /* S.BRAVE_NEWS_OPML_EXPORT */))),
        react_bundle_js_React_.createElement("input", { ref: inputRef, type: 'file', accept: '.opml,.xml,text/xml,application/xml,text/x-opml', hidden: true, disabled: props.disabled, onChange: onFileChange }),
        status && (react_bundle_js_React_.createElement(StatusContainer, null,
            react_bundle_js_React_.createElement(react_alert["default"], { type: status.type }, status.content)))));
}

;// ./components/brave_news/browser/resources/customize/SettingsPanel.tsx
/* Copyright (c) 2026 The Brave Authors. All rights reserved.
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at https://mozilla.org/MPL/2.0/. */



const Panel = styled_components_esm["default"].div.withConfig({ displayName: "Panel", componentId: "sc-16i1xi" }) `
  h4 {
    padding-bottom: ${variables.spacing.xl};
    color: ${variables.color.text.primary};
  }
`;
const Content = styled_components_esm["default"].div.withConfig({ displayName: "Content", componentId: "sc-1oxdhuu" }) `
  background: ${variables.color.container.background};
  box-shadow: ${variables.effect.elevation['01']};
  border-radius: ${variables.radius.xl};
`;
function SettingsPanel(props) {
    return (react_bundle_js_React_.createElement(Panel, null,
        react_bundle_js_React_.createElement("h4", null, props.title),
        react_bundle_js_React_.createElement(Content, null, props.children)));
}

;// ./components/brave_news/browser/resources/customize/NewsSettings.tsx
/* Copyright (c) 2026 The Brave Authors. All rights reserved.
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at https://mozilla.org/MPL/2.0/. */










const NewsSettings_Container = styled_components_esm["default"].div.withConfig({ displayName: "Container", componentId: "sc-1binwhl" }) `
  display: flex;
  flex-direction: column;
  gap: 1px;
  row-rule: 1px solid ${variables.color.divider.subtle};
`;
const ControlRow = styled_components_esm["default"].div.withConfig({ displayName: "ControlRow", componentId: "sc-tvuya0" }) `
  padding: ${variables.spacing.l} ${variables.spacing['2Xl']};

  display: flex;
  align-items: center;
  gap: ${variables.spacing.m};

  label {
    flex: 1 1 auto;
  }
`;
const EnableRow = (0,styled_components_esm["default"])((0,toggle["default"])).withConfig({ displayName: "EnableRow", componentId: "sc-11ru93b" }) `
  --leo-toggle-label-flex-direction: row-reverse;
  --leo-toggle-label-gap: ${variables.spacing.xl};

  padding: ${variables.spacing.l} ${variables.spacing['2Xl']};
`;
const EnableLabel = styled_components_esm["default"].span.withConfig({ displayName: "EnableLabel", componentId: "sc-1fwseap" }) `
  --leo-icon-size: ${variables.icon.m};

  flex: 1 1 auto;
  display: flex;
  align-items: center;
  gap: ${variables.spacing.xl};
  color: ${variables.color.text.primary};
`;
function NewsSettings() {
    const { isShowOnNTPPrefEnabled, toggleBraveNewsOnNTP, openArticlesInNewTab, setOpenArticlesInNewTab, } = (0,Context.useBraveNews)();
    const feedV2Enabled = loadTimeData.loadTimeData.getBoolean('featureFlagBraveNewsFeedV2Enabled');
    const controlsDisabled = !isShowOnNTPPrefEnabled;
    return (react_bundle_js_React_.createElement(SettingsPanel, { title: (0,common_locale.getLocale)("BRAVE_NEWS_SETTINGS_SECTION_TITLE" /* S.BRAVE_NEWS_SETTINGS_SECTION_TITLE */) },
        react_bundle_js_React_.createElement(NewsSettings_Container, null,
            react_bundle_js_React_.createElement(EnableRow, { size: 'small', checked: isShowOnNTPPrefEnabled, onChange: ({ checked }) => {
                    toggleBraveNewsOnNTP(checked);
                } },
                react_bundle_js_React_.createElement(EnableLabel, null, (0,common_locale.getLocale)("BRAVE_NEWS_ENABLE_LABEL" /* S.BRAVE_NEWS_ENABLE_LABEL */))),
            feedV2Enabled && (react_bundle_js_React_.createElement(ControlRow, null,
                react_bundle_js_React_.createElement("label", null, (0,common_locale.getLocale)("BRAVE_NEWS_OPEN_ARTICLES_IN" /* S.BRAVE_NEWS_OPEN_ARTICLES_IN */)),
                react_bundle_js_React_.createElement(dropdown["default"], { value: openArticlesInNewTab.toString(), positionStrategy: 'fixed', disabled: controlsDisabled, onChange: (detail) => {
                        setOpenArticlesInNewTab(detail.value === 'true');
                    } },
                    react_bundle_js_React_.createElement("span", { slot: 'value' }, openArticlesInNewTab
                        ? (0,common_locale.getLocale)("BRAVE_NEWS_OPEN_ARTICLES_IN_NEW_TAB" /* S.BRAVE_NEWS_OPEN_ARTICLES_IN_NEW_TAB */)
                        : (0,common_locale.getLocale)("BRAVE_NEWS_OPEN_ARTICLES_IN_CURRENT_TAB" /* S.BRAVE_NEWS_OPEN_ARTICLES_IN_CURRENT_TAB */)),
                    react_bundle_js_React_.createElement("leo-option", { value: 'true' }, (0,common_locale.getLocale)("BRAVE_NEWS_OPEN_ARTICLES_IN_NEW_TAB" /* S.BRAVE_NEWS_OPEN_ARTICLES_IN_NEW_TAB */)),
                    react_bundle_js_React_.createElement("leo-option", { value: 'false' }, (0,common_locale.getLocale)("BRAVE_NEWS_OPEN_ARTICLES_IN_CURRENT_TAB" /* S.BRAVE_NEWS_OPEN_ARTICLES_IN_CURRENT_TAB */))))),
            react_bundle_js_React_.createElement(ControlRow, null,
                react_bundle_js_React_.createElement(OpmlControls, { disabled: controlsDisabled })))));
}

// EXTERNAL MODULE: ./components/common/usePromise.ts
var usePromise = __webpack_require__("../../../brave/components/common/usePromise.ts");
// EXTERNAL MODULE: external "chrome://resources/js/plural_string_proxy.js"
var plural_string_proxy_js_ = __webpack_require__("chrome://resources/js/plural_string_proxy.js");
;// ./components/brave_news/browser/resources/customize/SourcesListEntry.tsx
// Copyright (c) 2022 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.









const RemoveButton = styled_components_esm["default"].button.withConfig({ displayName: "RemoveButton", componentId: "sc-1ctusia" }) `
  all: unset;
  --leo-icon-size: ${variables.icon.m};

  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${variables.color.icon.default};
  padding: ${variables.spacing.s};
  border-radius: ${variables.radius.s};

  &:hover {
    color: ${variables.color.icon.interactive};
  }

  &:focus-visible {
    outline: ${variables.effect.focusState};
  }
`;
const SourcesListEntry_Container = (0,styled_components_esm["default"])((0,Flex["default"])).withConfig({ displayName: "Container", componentId: "sc-17sl3ew" }) `
  padding: ${variables.spacing.m} 0;
  min-width: 0;

  &:not(:hover, :has(:focus-visible)) ${RemoveButton} {
    opacity: 0;
  }
`;
const FavIconContainer = styled_components_esm["default"].div.withConfig({ displayName: "FavIconContainer", componentId: "sc-10cbs9v" }) `
  flex: 0 0 ${variables.icon.l};
  height: ${variables.icon.l};
  flex-shrink: 0;
  border-radius: ${variables.radius.full};
  color: ${variables.color.icon.default};

  img {
    width: 100%;
    height: 100%;
  }
`;
const Text = styled_components_esm["default"].span.withConfig({ displayName: "Text", componentId: "sc-kpqrad" }) `
  flex: 1 1 0;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font: ${variables.font.default.regular};
  color: ${variables.color.text.primary};
`;
function FavIcon(props) {
    var _a;
    const publisher = (0,Context.usePublisher)(props.publisherId);
    const faviconUrl = (_a = publisher.faviconUrl) === null || _a === void 0 ? void 0 : _a.url;
    const [error, setError] = react_bundle_js_React_.useState(false);
    react_bundle_js_React_.useEffect(() => {
        setError(false);
    }, [faviconUrl]);
    return (react_bundle_js_React_.createElement(FavIconContainer, null, faviconUrl && !error && react_bundle_js_React_.createElement("img", { loading: 'lazy', src: `//brave-image?url=${encodeURIComponent(faviconUrl)}`, onError: () => setError(true) })));
}
function FeedListEntry(props) {
    const publisher = (0,Context.usePublisher)(props.publisherId);
    const { setFollowed } = (0,Context.usePublisherFollowed)(props.publisherId);
    const unfollowLabel = (0,common_locale.getLocale)("BRAVE_NEWS_FOLLOW_BUTTON_FOLLOWING" /* S.BRAVE_NEWS_FOLLOW_BUTTON_FOLLOWING */);
    return (react_bundle_js_React_.createElement(SourcesListEntry_Container, { direction: "row", justify: "space-between", align: 'center', gap: variables.spacing.m },
        react_bundle_js_React_.createElement(FavIcon, { publisherId: props.publisherId }),
        react_bundle_js_React_.createElement(Text, { title: publisher.publisherName }, publisher.publisherName),
        react_bundle_js_React_.createElement(RemoveButton, { onClick: () => setFollowed(false), title: unfollowLabel, "aria-label": unfollowLabel },
            react_bundle_js_React_.createElement(icon["default"], { name: 'trash' }))));
}
function ChannelListEntry(props) {
    var _a;
    const { setSubscribed } = (0,Context.useChannelSubscribed)(props.channelName);
    const channelName = (0,channel.getTranslatedChannelName)(props.channelName);
    const unfollowLabel = (0,common_locale.getLocale)("BRAVE_NEWS_FOLLOW_BUTTON_FOLLOWING" /* S.BRAVE_NEWS_FOLLOW_BUTTON_FOLLOWING */);
    return (react_bundle_js_React_.createElement(SourcesListEntry_Container, { direction: "row", justify: 'space-between', align: 'center', gap: variables.spacing.m },
        react_bundle_js_React_.createElement(FavIconContainer, null, (_a = Icons.channelIcons[props.channelName]) !== null && _a !== void 0 ? _a : Icons.channelIcons.default),
        react_bundle_js_React_.createElement(Text, { title: channelName }, channelName),
        react_bundle_js_React_.createElement(RemoveButton, { onClick: () => setSubscribed(false), title: unfollowLabel, "aria-label": unfollowLabel },
            react_bundle_js_React_.createElement(icon["default"], { name: 'trash' }))));
}

;// ./components/brave_news/browser/resources/customize/SourcesList.tsx
// Copyright (c) 2022 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.











const SourcesList_Container = styled_components_esm["default"].div.withConfig({ displayName: "Container", componentId: "sc-k294t9" }) `
  display: flex;
  flex-direction: column;
  padding: 0 ${variables.spacing.xl};
`;
const Heading = styled_components_esm["default"].div.withConfig({ displayName: "Heading", componentId: "sc-xr9u1l" }) `
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${variables.spacing.m};
  padding: ${variables.spacing.m};
`;
const Title = styled_components_esm["default"].span.withConfig({ displayName: "Title", componentId: "sc-14w5fv3" }) `
  font: ${variables.font.default.semibold};
  color: ${variables.color.text.primary};
`;
const Count = styled_components_esm["default"].span.withConfig({ displayName: "Count", componentId: "sc-q5woeo" }) `
  font: ${variables.font.small.regular};
  color: ${variables.color.text.tertiary};
`;
const List = styled_components_esm["default"].div.withConfig({ displayName: "List", componentId: "sc-16iienz" }) `
  display: flex;
  flex-direction: column;
`;
function SourcesList() {
    const { subscribedPublisherIds } = (0,Context.useBraveNews)();
    const channels = (0,Context.useChannels)({ subscribedOnly: true });
    const publishersLoaded = publishersCache.PublishersCachingWrapper.getInstance().connected;
    const channelsLoaded = channelsCache.ChannelsCachingWrapper.getInstance().connected;
    const { result: sourcesCount } = (0,usePromise["default"])(() => plural_string_proxy_js_.PluralStringProxyImpl.getInstance().getPluralString("BRAVE_NEWS_SOURCE_COUNT" /* S.BRAVE_NEWS_SOURCE_COUNT */, subscribedPublisherIds.length + channels.length), [subscribedPublisherIds.length, channels.length]);
    return (react_bundle_js_React_.createElement(SourcesList_Container, null,
        react_bundle_js_React_.createElement(Heading, null,
            react_bundle_js_React_.createElement(Title, null, (0,common_locale.getLocale)("BRAVE_NEWS_FEEDS_HEADING" /* S.BRAVE_NEWS_FEEDS_HEADING */)),
            publishersLoaded && channelsLoaded && react_bundle_js_React_.createElement(Count, null, sourcesCount)),
        react_bundle_js_React_.createElement(List, null,
            !channelsLoaded && !publishersLoaded && react_bundle_js_React_.createElement(Loading["default"], null),
            channelsLoaded &&
                channels.map((c) => (react_bundle_js_React_.createElement(ChannelListEntry, { key: c.channelName, channelName: c.channelName }))),
            publishersLoaded &&
                subscribedPublisherIds.map((p) => (react_bundle_js_React_.createElement(FeedListEntry, { key: p, publisherId: p }))))));
}

;// ./components/brave_news/browser/resources/customize/Configure.tsx
// Copyright (c) 2022 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.











const PanelBody = styled_components_esm["default"].div.withConfig({ displayName: "PanelBody", componentId: "sc-21ndg9" }) `
  display: flex;
  max-height: calc(100vh - ${variables.spacing['4Xl']});
`;
const Sidebar = styled_components_esm["default"].nav.withConfig({ displayName: "Sidebar", componentId: "sc-1d0k75f" }) `
  flex: 0 0 228px;
  display: flex;
  flex-direction: column;
  gap: ${variables.spacing['2Xl']};
  padding: ${variables.spacing['2Xl']} 0;
  min-height: 0;
  overflow: auto;
  overscroll-behavior: contain;
  scrollbar-width: thin;
  white-space: nowrap;
`;
const SidebarTitle = styled_components_esm["default"].h4.withConfig({ displayName: "SidebarTitle", componentId: "sc-14030sj" }) `
  color: ${variables.color.text.primary};
  padding: 0 ${variables.spacing['2Xl']};
`;
const Configure_Content = styled_components_esm["default"].section.withConfig({ displayName: "Content", componentId: "sc-1485k23" }) `
  flex: 1 1 auto;
  min-height: 0;
  padding: ${variables.spacing.m} ${variables.spacing.m} ${variables.spacing.m} 0;
  overflow: auto;
  overscroll-behavior: contain;
  scrollbar-width: thin;
  display: flex;
  flex-direction: column;
`;
const ContentCard = styled_components_esm["default"].div.withConfig({ displayName: "ContentCard", componentId: "sc-18yxnuk" }) `
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: ${variables.spacing['2Xl']};
  padding: ${variables.spacing['4Xl']};
  border-radius: ${variables.radius.xl};
  background: ${variables.color.page.background};
`;
function Configure() {
    const { customizePage, isOptInPrefEnabled, isShowOnNTPPrefEnabled, } = (0,Context.useBraveNews)();
    // TODO(petemill): We'll probably need to have 2 toggles, or some other
    // way to know if brave news is "enabled" when Brave News is exposed
    // in places other than just the NTP. For now this is pretty tied to NTP.
    const isBraveNewsFullyEnabled = isOptInPrefEnabled && isShowOnNTPPrefEnabled;
    let content;
    if (!isBraveNewsFullyEnabled) {
        content = react_bundle_js_React_.createElement(DisabledPlaceholder, null);
    }
    else if (customizePage === 'suggestions') {
        content = react_bundle_js_React_.createElement(SuggestionsPage, null);
    }
    else if (customizePage === 'popular') {
        content = react_bundle_js_React_.createElement(PopularPage, null);
    }
    else {
        content = react_bundle_js_React_.createElement(Discover, null);
    }
    return (react_bundle_js_React_.createElement("div", { id: 'brave-news-configure' },
        react_bundle_js_React_.createElement(PanelBody, null,
            react_bundle_js_React_.createElement(Sidebar, null,
                react_bundle_js_React_.createElement(SidebarTitle, null, (0,common_locale.getLocale)("BRAVE_NEWS_SETTINGS_TITLE" /* S.BRAVE_NEWS_SETTINGS_TITLE */)),
                isBraveNewsFullyEnabled && react_bundle_js_React_.createElement(SourcesList, null)),
            react_bundle_js_React_.createElement(Configure_Content, null,
                react_bundle_js_React_.createElement(ContentCard, null,
                    customizePage !== 'suggestions' && customizePage !== 'popular' &&
                        react_bundle_js_React_.createElement(NewsSettings, null),
                    content)))));
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


/***/ },

/***/ "../../../brave/node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/react/alert.js"
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/react/alert.js + 1 modules ***!
  \********************************************************************************************************************************************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ react_alert),
  sizes: () => (/* reexport */ shared_alert.sizes),
  types: () => (/* reexport */ shared_alert.types)
});
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/shared/svelte-react.js
var svelte_react = __webpack_require__("../../../brave/node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/shared/svelte-react.js");
// EXTERNAL MODULE: ./node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/shared/svelte-web.js
var svelte_web = __webpack_require__("../../../brave/node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/shared/svelte-web.js");
// EXTERNAL MODULE: ./node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/shared/alert.js
var shared_alert = __webpack_require__("../../../brave/node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/shared/alert.js");
;// ./node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/web-components/alert.js


/* harmony default export */ const web_components_alert = ((0,svelte_web["default"])(shared_alert["default"], {
    name: 'leo-alert',
    mode: 'open'
}));

// Reexport everything from our component, so consumers can do anything the base
// component can do.

;// ./node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/react/alert.js


/* harmony default export */ const react_alert = ((0,svelte_react["default"])('leo-alert', web_components_alert));

// Reexport everything from our component, so React consumers can do anything
// the base component can do.


/***/ },

/***/ "../../../brave/node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/shared/alert.js"
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/shared/alert.js ***!
  \*********************************************************************************************************************************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Alert),
/* harmony export */   sizes: () => (/* binding */ sizes),
/* harmony export */   types: () => (/* binding */ types)
/* harmony export */ });
/* harmony import */ var _651f0baa_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./651f0baa.js */ "../../../brave/node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/shared/651f0baa.js");
/* harmony import */ var _1909379f_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./1909379f.js */ "../../../brave/node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/shared/1909379f.js");
/* harmony import */ var _eacb69d0_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./eacb69d0.js */ "../../../brave/node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/shared/eacb69d0.js");
/* harmony import */ var _d048de73_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./d048de73.js */ "../../../brave/node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/shared/d048de73.js");
/* harmony import */ var _d2b76aea_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./d2b76aea.js */ "../../../brave/node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/shared/d2b76aea.js");
/* harmony import */ var _3e818cee_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./3e818cee.js */ "../../../brave/node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/shared/3e818cee.js");
/* harmony import */ var _icon_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./icon.js */ "../../../brave/node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/shared/icon.js");
/* harmony import */ var _784381d6_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./784381d6.js */ "../../../brave/node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/shared/784381d6.js");
/* harmony import */ var _a5e3e66f_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./a5e3e66f.js */ "../../../brave/node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/shared/a5e3e66f.js");
/* harmony import */ var _c8236a4f_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./c8236a4f.js */ "../../../brave/node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/shared/c8236a4f.js");
/* harmony import */ var _e7ca11c5_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./e7ca11c5.js */ "../../../brave/node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/shared/e7ca11c5.js");
/* harmony import */ var _14de49c6_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./14de49c6.js */ "../../../brave/node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/shared/14de49c6.js");













const types = ["info", "warning", "error", "success", "notice"];
const sizes = ["default", "small"];

const defaultIcons = {
	"info": "info-filled",
	"error": "warning-circle-filled",
	"warning": "warning-triangle-filled",
	"success": "check-circle-filled",
	"notice": "info-outline"
};

var root = (0,_651f0baa_js__WEBPACK_IMPORTED_MODULE_0__.f)(`<div class="icon svelte-1l6djk3"><!></div>`);
var root_1 = (0,_651f0baa_js__WEBPACK_IMPORTED_MODULE_0__.f)(`<div class="title svelte-1l6djk3"><!></div>`);
var root_2 = (0,_651f0baa_js__WEBPACK_IMPORTED_MODULE_0__.f)(`<div class="content-after svelte-1l6djk3"><!></div>`);
var root_3 = (0,_651f0baa_js__WEBPACK_IMPORTED_MODULE_0__.f)(`<div class="actions svelte-1l6djk3"><!></div>`);
var root_4 = (0,_651f0baa_js__WEBPACK_IMPORTED_MODULE_0__.f)(`<div><!> <div class="content svelte-1l6djk3"><!> <!></div> <!> <!></div>`);

const $$css = {
	hash: 'svelte-1l6djk3',
	code: ':host {display:block;}.leo-alert.svelte-1l6djk3 .actions:where(.svelte-1l6djk3) > *,\n.leo-alert.svelte-1l6djk3 .actions:where(.svelte-1l6djk3) ::slotted(*) {display:flex;flex-direction:row;gap:var(--leo-spacing-m);}.leo-alert.svelte-1l6djk3 {--padding: var(--leo-spacing-xl);--gap: var(--leo-spacing-xl);--leo-icon-color: var(--leo-alert-icon-color, var(--default-icon-color));background-color:var(--leo-alert-background-color, var(--default-background));color:var(--default-text-color, var(--leo-color-text-primary));padding:var(--leo-alert-padding, var(--padding));border-radius:var(--leo-radius-l);border:var(--leo-alert-border-width, var(--default-border-width)) solid var(--leo-alert-border-color, var(--default-border-color));gap:var(--gap);font:var(--leo-font-default-regular);display:grid;grid-template-columns:[icon-start] min-content [icon-end main-start] 1fr [main-end];grid-template-rows:[main-start] auto [main-end];}.leo-alert.notice.svelte-1l6djk3 {--default-background: transparent;--default-icon-color: var(--leo-color-text-tertiary);--default-text-color: var(--leo-alert-text-color, var(--leo-color-text-tertiary));--default-border-width: 1px;--default-border-color: var(--leo-color-divider-subtle);}.leo-alert.success.svelte-1l6djk3 {--default-background: var(--leo-color-systemfeedback-success-background);--default-icon-color: var(--leo-color-systemfeedback-success-icon);--default-text-color: var(--leo-color-systemfeedback-success-text);}.leo-alert.info.svelte-1l6djk3 {--default-background: var(--leo-color-systemfeedback-info-background);--default-icon-color: var(--leo-color-systemfeedback-info-icon);--default-text-color: var(--leo-color-systemfeedback-info-text);}.leo-alert.error.svelte-1l6djk3 {--default-background: var(--leo-color-systemfeedback-error-background);--default-icon-color: var(--leo-color-systemfeedback-error-icon);--default-text-color: var(--leo-color-systemfeedback-error-text);}.leo-alert.warning.svelte-1l6djk3 {--default-background: var(--leo-color-systemfeedback-warning-background);--default-icon-color: var(--leo-color-systemfeedback-warning-icon);--default-text-color: var(--leo-color-systemfeedback-warning-text);}.leo-alert.svelte-1l6djk3 .icon:where(.svelte-1l6djk3) {--leo-icon-size: var(--leo-icon-m);color:var(--leo-icon-color);}.leo-alert.svelte-1l6djk3 .title:where(.svelte-1l6djk3) {font:var(--leo-font-heading-h4);}.leo-alert.svelte-1l6djk3 .content:where(.svelte-1l6djk3) {grid-column:main;align-content:center;}.leo-alert.svelte-1l6djk3 .content-after:where(.svelte-1l6djk3) {grid-row:main;grid-column:-1;}.leo-alert.svelte-1l6djk3 .actions:where(.svelte-1l6djk3) {grid-column:main;}.leo-alert.inline-actions.svelte-1l6djk3 {align-items:center;}.leo-alert.inline-actions.svelte-1l6djk3 .actions:where(.svelte-1l6djk3) {grid-column:main-end;}.leo-alert.inline-actions.svelte-1l6djk3:has(.content-after:where(.svelte-1l6djk3) ~ .actions:where(.svelte-1l6djk3)) {grid-template-columns:[icon-start] min-content [icon-end main-start] 1fr [main-end content-after] auto [content-end];}.leo-alert.size-small.svelte-1l6djk3 {--padding: var(--leo-spacing-m) var(--leo-spacing-l);--gap: var(--leo-spacing-m);}.leo-alert.toast.error.svelte-1l6djk3 {background-color:var(--leo-color-red-20);}.leo-alert.toast.warning.svelte-1l6djk3 {background:var(--leo-color-yellow-20);}.leo-alert.toast.info.svelte-1l6djk3 {background:var(--leo-color-blue-20);}.leo-alert.toast.success.svelte-1l6djk3 {background:var(--leo-color-green-20);}'
};

function Alert($$anchor, $$props) {
	const $$slots = (0,_d048de73_js__WEBPACK_IMPORTED_MODULE_3__.a)($$props);

	(0,_1909379f_js__WEBPACK_IMPORTED_MODULE_1__.p)($$props, false);
	(0,_651f0baa_js__WEBPACK_IMPORTED_MODULE_0__.a)($$anchor, $$css);

	const currentType = (0,_1909379f_js__WEBPACK_IMPORTED_MODULE_1__.m)();
	let type = (0,_3e818cee_js__WEBPACK_IMPORTED_MODULE_5__.p)($$props, 'type', 12, "error");
	let isToast = (0,_3e818cee_js__WEBPACK_IMPORTED_MODULE_5__.p)($$props, 'isToast', 12, false);
	let isInlineActions = (0,_3e818cee_js__WEBPACK_IMPORTED_MODULE_5__.p)($$props, 'isInlineActions', 12, false);
	let hideIcon = (0,_3e818cee_js__WEBPACK_IMPORTED_MODULE_5__.p)($$props, 'hideIcon', 12, false);
	let size = (0,_3e818cee_js__WEBPACK_IMPORTED_MODULE_5__.p)($$props, 'size', 12, "default");
	let hasActions = (0,_3e818cee_js__WEBPACK_IMPORTED_MODULE_5__.p)($$props, 'hasActions', 28, () => $$slots.actions);
	let hasContentAfter = (0,_3e818cee_js__WEBPACK_IMPORTED_MODULE_5__.p)($$props, 'hasContentAfter', 28, () => $$slots["content-after"]);

	(0,_1909379f_js__WEBPACK_IMPORTED_MODULE_1__.l)(() => ((0,_1909379f_js__WEBPACK_IMPORTED_MODULE_1__.d)(type())), () => {
		(0,_1909379f_js__WEBPACK_IMPORTED_MODULE_1__.e)(currentType, type() ?? "error");
	});

	(0,_1909379f_js__WEBPACK_IMPORTED_MODULE_1__.a)();

	var $$exports = {
		get type() {
			return type();
		},

		set type($$value) {
			type($$value);
			(0,_1909379f_js__WEBPACK_IMPORTED_MODULE_1__.f)();
		},

		get isToast() {
			return isToast();
		},

		set isToast($$value) {
			isToast($$value);
			(0,_1909379f_js__WEBPACK_IMPORTED_MODULE_1__.f)();
		},

		get isInlineActions() {
			return isInlineActions();
		},

		set isInlineActions($$value) {
			isInlineActions($$value);
			(0,_1909379f_js__WEBPACK_IMPORTED_MODULE_1__.f)();
		},

		get hideIcon() {
			return hideIcon();
		},

		set hideIcon($$value) {
			hideIcon($$value);
			(0,_1909379f_js__WEBPACK_IMPORTED_MODULE_1__.f)();
		},

		get size() {
			return size();
		},

		set size($$value) {
			size($$value);
			(0,_1909379f_js__WEBPACK_IMPORTED_MODULE_1__.f)();
		},

		get hasActions() {
			return hasActions();
		},

		set hasActions($$value) {
			hasActions($$value);
			(0,_1909379f_js__WEBPACK_IMPORTED_MODULE_1__.f)();
		},

		get hasContentAfter() {
			return hasContentAfter();
		},

		set hasContentAfter($$value) {
			hasContentAfter($$value);
			(0,_1909379f_js__WEBPACK_IMPORTED_MODULE_1__.f)();
		}
	};

	var div = root_4();
	let classes;
	var node = (0,_1909379f_js__WEBPACK_IMPORTED_MODULE_1__.c)(div);

	{
		var consequent = ($$anchor) => {
			var div_1 = root();
			var node_1 = (0,_1909379f_js__WEBPACK_IMPORTED_MODULE_1__.c)(div_1);

			(0,_d048de73_js__WEBPACK_IMPORTED_MODULE_3__.s)(node_1, $$props, 'icon', {}, ($$anchor) => {
				(0,_icon_js__WEBPACK_IMPORTED_MODULE_6__["default"])($$anchor, {
					get name() {
						return (
							(0,_1909379f_js__WEBPACK_IMPORTED_MODULE_1__.g)(currentType),
							(0,_1909379f_js__WEBPACK_IMPORTED_MODULE_1__.u)(() => defaultIcons[(0,_1909379f_js__WEBPACK_IMPORTED_MODULE_1__.g)(currentType)])
						);
					}
				});
			});
			(0,_651f0baa_js__WEBPACK_IMPORTED_MODULE_0__.b)($$anchor, div_1);
		};

		(0,_eacb69d0_js__WEBPACK_IMPORTED_MODULE_2__.i)(node, ($$render) => {
			if (!hideIcon()) $$render(consequent);
		});
	}

	var div_2 = (0,_1909379f_js__WEBPACK_IMPORTED_MODULE_1__.s)(node, 2);
	var node_2 = (0,_1909379f_js__WEBPACK_IMPORTED_MODULE_1__.c)(div_2);

	{
		var consequent_1 = ($$anchor) => {
			var div_3 = root_1();
			var node_3 = (0,_1909379f_js__WEBPACK_IMPORTED_MODULE_1__.c)(div_3);

			(0,_d048de73_js__WEBPACK_IMPORTED_MODULE_3__.s)(node_3, $$props, 'title', {}, null);
			(0,_651f0baa_js__WEBPACK_IMPORTED_MODULE_0__.b)($$anchor, div_3);
		};

		(0,_eacb69d0_js__WEBPACK_IMPORTED_MODULE_2__.i)(node_2, ($$render) => {
			if (((0,_1909379f_js__WEBPACK_IMPORTED_MODULE_1__.u)(() => $$slots.title))) $$render(consequent_1);
		});
	}

	var node_4 = (0,_1909379f_js__WEBPACK_IMPORTED_MODULE_1__.s)(node_2, 2);

	(0,_d048de73_js__WEBPACK_IMPORTED_MODULE_3__.s)(node_4, $$props, 'default', {}, null);

	var node_5 = (0,_1909379f_js__WEBPACK_IMPORTED_MODULE_1__.s)(div_2, 2);

	{
		var consequent_2 = ($$anchor) => {
			var div_4 = root_2();
			var node_6 = (0,_1909379f_js__WEBPACK_IMPORTED_MODULE_1__.c)(div_4);

			(0,_d048de73_js__WEBPACK_IMPORTED_MODULE_3__.s)(node_6, $$props, 'content-after', {}, null);
			(0,_651f0baa_js__WEBPACK_IMPORTED_MODULE_0__.b)($$anchor, div_4);
		};

		(0,_eacb69d0_js__WEBPACK_IMPORTED_MODULE_2__.i)(node_5, ($$render) => {
			if ((
				(0,_1909379f_js__WEBPACK_IMPORTED_MODULE_1__.d)(hasContentAfter()),
				(0,_1909379f_js__WEBPACK_IMPORTED_MODULE_1__.u)(() => hasContentAfter() && $$slots['content-after'])
			)) $$render(consequent_2);
		});
	}

	var node_7 = (0,_1909379f_js__WEBPACK_IMPORTED_MODULE_1__.s)(node_5, 2);

	{
		var consequent_3 = ($$anchor) => {
			var div_5 = root_3();
			var node_8 = (0,_1909379f_js__WEBPACK_IMPORTED_MODULE_1__.c)(div_5);

			(0,_d048de73_js__WEBPACK_IMPORTED_MODULE_3__.s)(node_8, $$props, 'actions', {}, null);
			(0,_651f0baa_js__WEBPACK_IMPORTED_MODULE_0__.b)($$anchor, div_5);
		};

		(0,_eacb69d0_js__WEBPACK_IMPORTED_MODULE_2__.i)(node_7, ($$render) => {
			if ((
				(0,_1909379f_js__WEBPACK_IMPORTED_MODULE_1__.d)(hasActions()),
				(0,_1909379f_js__WEBPACK_IMPORTED_MODULE_1__.u)(() => hasActions() && $$slots.actions)
			)) $$render(consequent_3);
		});
	}
	(0,_1909379f_js__WEBPACK_IMPORTED_MODULE_1__.t)(() => classes = (0,_d2b76aea_js__WEBPACK_IMPORTED_MODULE_4__.s)(div, 1, `leo-alert ${(0,_1909379f_js__WEBPACK_IMPORTED_MODULE_1__.g)(currentType) ?? ''} size-${size() ?? ''}`, 'svelte-1l6djk3', classes, { toast: isToast(), 'inline-actions': isInlineActions() }));
	(0,_651f0baa_js__WEBPACK_IMPORTED_MODULE_0__.b)($$anchor, div);

	return (0,_1909379f_js__WEBPACK_IMPORTED_MODULE_1__.b)($$exports);
}


//# sourceMappingURL=alert.js.map


/***/ }

};

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJhdmVfY29tcG9uZW50c19icmF2ZV9uZXdzX2Jyb3dzZXJfcmVzb3VyY2VzX2N1c3RvbWl6ZV9Db25maWd1cmVfdHN4LmNodW5rLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw2REFBNkQ7QUFDN0Qsc0VBQXNFO0FBQ3RFLDRFQUE0RTtBQUM1RSxzREFBc0Q7QUFFeEI7QUFDUTtBQUNRO0FBQ1g7QUFDbUM7QUFFdEUsTUFBTSxTQUFTLEdBQUcsb0NBQU0sQ0FBQyxtQkFBSSxDQUFDO2FBQ2pCLGlCQUFPLENBQUMsS0FBSyxDQUFDO0NBQzFCO0FBRUQsTUFBTSxNQUFNLEdBQUcsZ0NBQU0sQ0FBQyxFQUFFOzs7VUFHZCxjQUFJLENBQUMsT0FBTyxDQUFDLEVBQUU7V0FDZCxlQUFLLENBQUMsSUFBSSxDQUFDLFNBQVM7Q0FDOUI7QUFFRCxNQUFNLFFBQVEsR0FBRyxnQ0FBTSxDQUFDLENBQUM7Ozs7O1VBS2YsY0FBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPO1dBQ25CLGVBQUssQ0FBQyxJQUFJLENBQUMsU0FBUztDQUM5QjtBQUVjLFNBQVMsbUJBQW1CO0lBQ3pDLE9BQU8sQ0FDTCxxQ0FBQyxTQUFTLElBQUMsS0FBSyxFQUFDLFFBQVEsRUFBQyxPQUFPLEVBQUMsUUFBUSxFQUFDLFNBQVMsRUFBQyxRQUFRLEVBQUMsR0FBRyxFQUFFLGlCQUFPLENBQUMsS0FBSyxDQUFDO1FBQy9FLHFDQUFDLE1BQU0sUUFDSiwyQkFBUyx5REFBMEIsQ0FDN0I7UUFDVCxxQ0FBQyxRQUFRLFFBQ04sMkJBQVMscUVBQWdDLENBQ2pDLENBQ0QsQ0FDYjtBQUNILENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQzFDRCw2REFBNkQ7QUFDN0Qsc0VBQXNFO0FBQ3RFLDRFQUE0RTtBQUM1RSxzREFBc0Q7QUFFbkI7QUFDTDtBQUNRO0FBQ2dEO0FBQzlCO0FBQ1Y7QUFDRztBQUNXO0FBRTVELE1BQU0sZUFBZSxHQUFHLG9DQUFNLENBQUMsMkJBQVksQ0FB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QWU7QUFDbkIsSUFBSSwrQ0FBTztBQUNYO0FBQ0EsR0FBRztBQUNIOztBQUVBLGNBQWMsK0NBQU87O0FBRXJCO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiwrQ0FBSzs7QUFFckIsR0FBRywrQ0FBSSwrQkFBK0I7QUFDdEMsR0FBRywrQ0FBTTtBQUNUOztBQUVBLEVBQUUsK0NBQVE7QUFDVjtBQUNBLElBQUksK0NBQWU7QUFDbkIsSUFBSSwrQ0FBTztBQUNYO0FBQ0EsR0FBRztBQUNIO0FBQ0EsQ0FBQywrQ0FBZSxpQkFBaUIsK0NBQVMsc0JBQXNCLCtDQUFHLHFCQUFxQixPQUFPLGFBQWEsZ0NBQWdDLHVEQUF1RDtBQUNuTSxDQUFDLCtDQUFNOztBQUVQLFFBQVEsK0NBQUc7QUFDWDs7QUFFMEM7QUFDMUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9icmF2ZS1jb3JlLy4vY29tcG9uZW50cy9icmF2ZV9uZXdzL2Jyb3dzZXIvcmVzb3VyY2VzL2N1c3RvbWl6ZS9EaXNhYmxlZFBsYWNlaG9sZGVyLnRzeCIsIndlYnBhY2s6Ly9icmF2ZS1jb3JlLy4vY29tcG9uZW50cy9icmF2ZV9uZXdzL2Jyb3dzZXIvcmVzb3VyY2VzL2N1c3RvbWl6ZS9DaGFubmVsQ2FyZC50c3giLCJ3ZWJwYWNrOi8vYnJhdmUtY29yZS8uL2NvbXBvbmVudHMvYnJhdmVfbmV3cy9icm93c2VyL3Jlc291cmNlcy9jdXN0b21pemUvRGlzY292ZXJTZWN0aW9uLnRzeCIsIndlYnBhY2s6Ly9icmF2ZS1jb3JlLy4vY29tcG9uZW50cy9icmF2ZV9uZXdzL2Jyb3dzZXIvcmVzb3VyY2VzL2N1c3RvbWl6ZS9DYXJvdXNlbC50c3giLCJ3ZWJwYWNrOi8vYnJhdmUtY29yZS8uL2NvbXBvbmVudHMvYnJhdmVfbmV3cy9icm93c2VyL3Jlc291cmNlcy9jdXN0b21pemUvQ3VzdG9taXplTGluay50c3giLCJ3ZWJwYWNrOi8vYnJhdmUtY29yZS8uL2NvbXBvbmVudHMvYnJhdmVfbmV3cy9icm93c2VyL3Jlc291cmNlcy9jdXN0b21pemUvQ3VzdG9taXplUGFnZS50c3giLCJ3ZWJwYWNrOi8vYnJhdmUtY29yZS8uL2NvbXBvbmVudHMvYnJhdmVfbmV3cy9icm93c2VyL3Jlc291cmNlcy9jdXN0b21pemUvUG9wdWxhci50c3giLCJ3ZWJwYWNrOi8vYnJhdmUtY29yZS8uL2NvbXBvbmVudHMvYnJhdmVfbmV3cy9icm93c2VyL3Jlc291cmNlcy9jdXN0b21pemUvU3VnZ2VzdGlvbnMudHN4Iiwid2VicGFjazovL2JyYXZlLWNvcmUvLi9jb21wb25lbnRzL2JyYXZlX25ld3MvYnJvd3Nlci9yZXNvdXJjZXMvY3VzdG9taXplL3VzZVNlYXJjaC50cyIsIndlYnBhY2s6Ly9icmF2ZS1jb3JlLy4vY29tcG9uZW50cy9icmF2ZV9uZXdzL2Jyb3dzZXIvcmVzb3VyY2VzL2N1c3RvbWl6ZS9EaXNjb3Zlci50c3giLCJ3ZWJwYWNrOi8vYnJhdmUtY29yZS8uL2NvbXBvbmVudHMvYnJhdmVfbmV3cy9icm93c2VyL3Jlc291cmNlcy9jdXN0b21pemUvb3BtbC50cyIsIndlYnBhY2s6Ly9icmF2ZS1jb3JlLy4vY29tcG9uZW50cy9icmF2ZV9uZXdzL2Jyb3dzZXIvcmVzb3VyY2VzL2N1c3RvbWl6ZS9PcG1sQ29udHJvbHMudHN4Iiwid2VicGFjazovL2JyYXZlLWNvcmUvLi9jb21wb25lbnRzL2JyYXZlX25ld3MvYnJvd3Nlci9yZXNvdXJjZXMvY3VzdG9taXplL1NldHRpbmdzUGFuZWwudHN4Iiwid2VicGFjazovL2JyYXZlLWNvcmUvLi9jb21wb25lbnRzL2JyYXZlX25ld3MvYnJvd3Nlci9yZXNvdXJjZXMvY3VzdG9taXplL05ld3NTZXR0aW5ncy50c3giLCJ3ZWJwYWNrOi8vYnJhdmUtY29yZS8uL2NvbXBvbmVudHMvYnJhdmVfbmV3cy9icm93c2VyL3Jlc291cmNlcy9jdXN0b21pemUvU291cmNlc0xpc3RFbnRyeS50c3giLCJ3ZWJwYWNrOi8vYnJhdmUtY29yZS8uL2NvbXBvbmVudHMvYnJhdmVfbmV3cy9icm93c2VyL3Jlc291cmNlcy9jdXN0b21pemUvU291cmNlc0xpc3QudHN4Iiwid2VicGFjazovL2JyYXZlLWNvcmUvLi9jb21wb25lbnRzL2JyYXZlX25ld3MvYnJvd3Nlci9yZXNvdXJjZXMvY3VzdG9taXplL0NvbmZpZ3VyZS50c3giLCJ3ZWJwYWNrOi8vYnJhdmUtY29yZS8uL2NvbXBvbmVudHMvY29tbW9uL3VzZVByb21pc2UudHMiLCJ3ZWJwYWNrOi8vYnJhdmUtY29yZS8uL25vZGVfbW9kdWxlcy8ucG5wbS9AYnJhdmUrbGVvQGh0dHBzKysrY29kZWxvYWQuZ2l0aHViLmNvbSticmF2ZStsZW8rdGFyLmd6K2M1ZjljOGY3OGYzZGY1Yjc2N2E4M2FkNjdiYWJkOGJfMGM2NWRkMjJlMmE3NzgxOGMxMzEzNzdkNTNlMmU4NDMvbm9kZV9tb2R1bGVzL0BicmF2ZS9sZW8vd2ViLWNvbXBvbmVudHMvYWxlcnQuanMiLCJ3ZWJwYWNrOi8vYnJhdmUtY29yZS8uL25vZGVfbW9kdWxlcy8ucG5wbS9AYnJhdmUrbGVvQGh0dHBzKysrY29kZWxvYWQuZ2l0aHViLmNvbSticmF2ZStsZW8rdGFyLmd6K2M1ZjljOGY3OGYzZGY1Yjc2N2E4M2FkNjdiYWJkOGJfMGM2NWRkMjJlMmE3NzgxOGMxMzEzNzdkNTNlMmU4NDMvbm9kZV9tb2R1bGVzL0BicmF2ZS9sZW8vcmVhY3QvYWxlcnQuanMiLCJ3ZWJwYWNrOi8vYnJhdmUtY29yZS8uL25vZGVfbW9kdWxlcy8ucG5wbS9AYnJhdmUrbGVvQGh0dHBzKysrY29kZWxvYWQuZ2l0aHViLmNvbSticmF2ZStsZW8rdGFyLmd6K2M1ZjljOGY3OGYzZGY1Yjc2N2E4M2FkNjdiYWJkOGJfMGM2NWRkMjJlMmE3NzgxOGMxMzEzNzdkNTNlMmU4NDMvbm9kZV9tb2R1bGVzL0BicmF2ZS9sZW8vc2hhcmVkL2FsZXJ0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMiBUaGUgQnJhdmUgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbi8vIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXMgZmlsZSxcbi8vIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwczovL21vemlsbGEub3JnL01QTC8yLjAvLlxuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBnZXRMb2NhbGUgfSBmcm9tICckd2ViLWNvbW1vbi9sb2NhbGUnXG5pbXBvcnQgRmxleCBmcm9tICckd2ViLWNvbW1vbi9GbGV4J1xuaW1wb3J0IHsgY29sb3IsIGZvbnQsIHNwYWNpbmcgfSBmcm9tICdAYnJhdmUvbGVvL3Rva2Vucy9jc3MvdmFyaWFibGVzJ1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQoRmxleClgXG4gIHBhZGRpbmc6ICR7c3BhY2luZ1snMlhsJ119IDA7XG5gXG5cbmNvbnN0IEhlYWRlciA9IHN0eWxlZC5oM2BcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBmb250OiAke2ZvbnQuaGVhZGluZy5oMn07XG4gIGNvbG9yOiAke2NvbG9yLnRleHQuc2Vjb25kYXJ5fTtcbmBcblxuY29uc3QgU3VidGl0bGUgPSBzdHlsZWQucGBcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBtYXgtd2lkdGg6IDY2Y2g7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udDogJHtmb250LmRlZmF1bHQucmVndWxhcn07XG4gIGNvbG9yOiAke2NvbG9yLnRleHQuc2Vjb25kYXJ5fTtcbmBcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGlzYWJsZWRQbGFjZWhvbGRlcigpIHtcbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyIGFsaWduPVwiY2VudGVyXCIganVzdGlmeT1cImNlbnRlclwiIGRpcmVjdGlvbj1cImNvbHVtblwiIGdhcD17c3BhY2luZ1snMlhsJ119PlxuICAgICAgPEhlYWRlcj5cbiAgICAgICAge2dldExvY2FsZShTLkJSQVZFX05FV1NfSU5UUk9fVElUTEUpfVxuICAgICAgPC9IZWFkZXI+XG4gICAgICA8U3VidGl0bGU+XG4gICAgICAgIHtnZXRMb2NhbGUoUy5CUkFWRV9ORVdTX0lOVFJPX0RFU0NSSVBUSU9OKX1cbiAgICAgIDwvU3VidGl0bGU+XG4gICAgPC9Db250YWluZXI+XG4gIClcbn1cbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMiBUaGUgQnJhdmUgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbi8vIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXMgZmlsZSxcbi8vIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwczovL21vemlsbGEub3JnL01QTC8yLjAvLlxuXG5pbXBvcnQgRmxleCBmcm9tICckd2ViLWNvbW1vbi9GbGV4J1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgY29sb3IsIGVmZmVjdCwgZm9udCwgcmFkaXVzLCBzcGFjaW5nIH0gZnJvbSAnQGJyYXZlL2xlby90b2tlbnMvY3NzL3ZhcmlhYmxlcydcbmltcG9ydCB7IHVzZUNoYW5uZWxTdWJzY3JpYmVkIH0gZnJvbSAnLi4vc2hhcmVkL0NvbnRleHQnXG5pbXBvcnQgeyBjaGFubmVsSWNvbnMgfSBmcm9tICcuLi9zaGFyZWQvSWNvbnMnXG5pbXBvcnQgRm9sbG93QnV0dG9uIGZyb20gJy4uL3NoYXJlZC9Gb2xsb3dCdXR0b24nXG5pbXBvcnQgeyBnZXRUcmFuc2xhdGVkQ2hhbm5lbE5hbWUgfSBmcm9tICcuLi9zaGFyZWQvY2hhbm5lbCdcblxuY29uc3QgU3Vic2NyaWJlQnV0dG9uID0gc3R5bGVkKEZvbGxvd0J1dHRvbilgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAke3NwYWNpbmcubX07XG4gIHJpZ2h0OiAke3NwYWNpbmcubX07XG5gXG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZChGbGV4KWBcbiAgaGVpZ2h0OiA4MHB4O1xuICBmb250OiAke2ZvbnQuZGVmYXVsdC5zZW1pYm9sZH07XG4gIGNvbG9yOiAke2NvbG9yLnRleHQucHJpbWFyeX07XG4gIGJvcmRlci1yYWRpdXM6ICR7cmFkaXVzLm19O1xuICBwYWRkaW5nOiAke3NwYWNpbmcueGx9O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJveC1zaGFkb3c6ICR7ZWZmZWN0LmVsZXZhdGlvblsnMDInXX07XG4gIGJvcmRlcjogMXB4IHNvbGlkICR7Y29sb3IuZGl2aWRlci5zdWJ0bGV9O1xuICBiYWNrZ3JvdW5kOiAke2NvbG9yLmNvbnRhaW5lci5iYWNrZ3JvdW5kfTtcblxuICAmW2RhdGEtY2hhbm5lbC1jYXJkLWlzLWZvbGxvd2VkPXRydWVdIHtcbiAgICAmOm5vdCg6aG92ZXIsIDpoYXMoOmZvY3VzLXZpc2libGUpKSAke1N1YnNjcmliZUJ1dHRvbn0ge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gIH1cbmBcblxuY29uc3QgSWNvbkNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIC0tbGVvLWljb24tc2l6ZTogJHtzcGFjaW5nLnhsfTtcblxuICB3aWR0aDogJHtzcGFjaW5nWyczWGwnXX07XG4gIGhlaWdodDogJHtzcGFjaW5nWyczWGwnXX07XG4gIHBhZGRpbmc6ICR7c3BhY2luZy5tfTtcbiAgYm9yZGVyLXJhZGl1czogJHtyYWRpdXMuZnVsbH07XG4gIGJhY2tncm91bmQ6ICR7Y29sb3IuY29udGFpbmVyLmhpZ2hsaWdodH07XG4gIGNvbG9yOiAke2NvbG9yLmljb24uZGVmYXVsdH07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuYFxuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBjaGFubmVsTmFtZTogc3RyaW5nXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENoYW5uZWxDYXJkKHsgY2hhbm5lbE5hbWUgfTogUHJvcHMpIHtcbiAgY29uc3QgeyBzdWJzY3JpYmVkLCBzZXRTdWJzY3JpYmVkIH0gPSB1c2VDaGFubmVsU3Vic2NyaWJlZChjaGFubmVsTmFtZSlcbiAgcmV0dXJuIDxDb250YWluZXJcbiAgICBkaXJlY3Rpb249J2NvbHVtbidcbiAgICBqdXN0aWZ5PSdjZW50ZXInXG4gICAgYWxpZ249J3N0YXJ0J1xuICAgIGdhcD17c3BhY2luZy5zfVxuICAgIGRhdGEtY2hhbm5lbC1jYXJkLWlzLWZvbGxvd2VkPXtzdWJzY3JpYmVkfVxuICA+XG4gICAgPFN1YnNjcmliZUJ1dHRvbiBmb2xsb3dpbmc9e3N1YnNjcmliZWR9IG9uQ2xpY2s9eygpID0+IHNldFN1YnNjcmliZWQoIXN1YnNjcmliZWQpfSAvPlxuICAgIDxJY29uQ29udGFpbmVyPlxuICAgICAge2NoYW5uZWxJY29uc1tjaGFubmVsTmFtZV0gPz8gY2hhbm5lbEljb25zLmRlZmF1bHR9XG4gICAgPC9JY29uQ29udGFpbmVyPlxuICAgIHtnZXRUcmFuc2xhdGVkQ2hhbm5lbE5hbWUoY2hhbm5lbE5hbWUpfVxuICA8L0NvbnRhaW5lcj5cbn1cbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMiBUaGUgQnJhdmUgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbi8vIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXMgZmlsZSxcbi8vIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwczovL21vemlsbGEub3JnL01QTC8yLjAvLlxuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgRmxleCBmcm9tICckd2ViLWNvbW1vbi9GbGV4J1xuaW1wb3J0IHsgZm9udCwgc3BhY2luZyB9IGZyb20gJ0BicmF2ZS9sZW8vdG9rZW5zL2Nzcy92YXJpYWJsZXMnXG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIG5hbWU/OiBzdHJpbmdcbiAgc3VidGl0bGU/OiBSZWFjdC5SZWFjdE5vZGVcbiAgY2hpbGRyZW4/OiBSZWFjdC5SZWFjdE5vZGVcbn1cblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkKEZsZXgpYFxuICBwYWRkaW5nOiAke3NwYWNpbmcueGx9IDA7XG5gXG5cbmNvbnN0IEhlYWRlciA9IHN0eWxlZC5zcGFuYFxuICBmb250OiAke2ZvbnQuaGVhZGluZy5oNH07XG4gIG1hcmdpbjogJHtzcGFjaW5nLm19IDA7XG5gXG5cbmNvbnN0IFN1YnRpdGxlID0gc3R5bGVkLnNwYW5gXG4gIGZvbnQ6ICR7Zm9udC5zbWFsbC5yZWd1bGFyfTtcbmBcblxuY29uc3QgSXRlbXNDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW46ICR7c3BhY2luZy5tfSAwO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCBtaW5tYXgoMCwgMjA4cHgpKTtcbiAgZ2FwOiAke3NwYWNpbmcueGx9O1xuYFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEaXNjb3ZlclNlY3Rpb24gKHByb3BzOiBQcm9wcykge1xuICByZXR1cm4gPENvbnRhaW5lciBkaXJlY3Rpb249J2NvbHVtbic+XG4gICAge3Byb3BzLm5hbWUgJiYgPEZsZXggZGlyZWN0aW9uPSdyb3cnIGdhcD17c3BhY2luZy5tfSBhbGlnbj0nY2VudGVyJz5cbiAgICAgIDxIZWFkZXI+e3Byb3BzLm5hbWV9PC9IZWFkZXI+XG4gICAgPC9GbGV4Pn1cbiAgICB7cHJvcHMuc3VidGl0bGUgJiYgPFN1YnRpdGxlPlxuICAgICAge3Byb3BzLnN1YnRpdGxlfVxuICAgIDwvU3VidGl0bGU+fVxuICAgIDxJdGVtc0NvbnRhaW5lcj5cbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICA8L0l0ZW1zQ29udGFpbmVyPlxuICA8L0NvbnRhaW5lcj5cbn1cbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMiBUaGUgQnJhdmUgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbi8vIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXMgZmlsZSxcbi8vIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwczovL21vemlsbGEub3JnL01QTC8yLjAvLlxuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgRmxleCBmcm9tICckd2ViLWNvbW1vbi9GbGV4J1xuaW1wb3J0IFB1Ymxpc2hlckNhcmQgZnJvbSAnLi4vc2hhcmVkL1B1Ymxpc2hlckNhcmQnXG5pbXBvcnQgeyBBcnJvd1JpZ2h0IH0gZnJvbSAnLi4vc2hhcmVkL0ljb25zJ1xuaW1wb3J0IHsgY29sb3IsIGVmZmVjdCwgZm9udCwgcmFkaXVzLCBzcGFjaW5nIH0gZnJvbSAnQGJyYXZlL2xlby90b2tlbnMvY3NzL3ZhcmlhYmxlcydcblxuY29uc3QgQ0FSRF9TSVpFID0gMjA4XG5jb25zdCBDQVJEX1NJWkVfUFggPSBgJHtDQVJEX1NJWkV9cHhgXG5cbmNvbnN0IFNjcm9sbEJ1dHRvbiA9IHN0eWxlZC5idXR0b248eyBoaWRkZW46IGJvb2xlYW4gfT5gXG4gIGFsbDogdW5zZXQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6ICR7c3BhY2luZ1snM1hsJ119O1xuICBoZWlnaHQ6ICR7c3BhY2luZ1snM1hsJ119O1xuICB0b3A6ICR7c3BhY2luZ1snM1hsJ119O1xuICBiYWNrZ3JvdW5kOiAke2NvbG9yLmNvbnRhaW5lci5iYWNrZ3JvdW5kfTtcbiAgYm9yZGVyLXJhZGl1czogJHtyYWRpdXMuZnVsbH07XG4gIGJveC1zaGFkb3c6ICR7ZWZmZWN0LmVsZXZhdGlvblsnMDInXX07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjb2xvcjogJHtjb2xvci5pY29uLmRlZmF1bHR9O1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgOmhvdmVyIHtcbiAgICBib3gtc2hhZG93OiAke2VmZmVjdC5lbGV2YXRpb25bJzAzJ119O1xuICAgIGNvbG9yOiAke2NvbG9yLmljb24uaW50ZXJhY3RpdmV9O1xuICB9XG5cbiAgJHtwID0+IHAuaGlkZGVuICYmIGNzc2BvcGFjaXR5OiAwO2B9XG5cbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGVhc2UtaW4tb3V0LCBjb2xvciAwLjJzIGVhc2UtaW4tb3V0O1xuYFxuXG5jb25zdCBTY3JvbGxCdXR0b25MZWZ0ID0gc3R5bGVkKFNjcm9sbEJ1dHRvbilgXG4gIGxlZnQ6IGNhbGMoLTEgKiAke3NwYWNpbmcueGx9KTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbmBcblxuY29uc3QgU2Nyb2xsQnV0dG9uUmlnaHQgPSBzdHlsZWQoU2Nyb2xsQnV0dG9uKWBcbiAgcmlnaHQ6IGNhbGMoLTEgKiAke3NwYWNpbmcueGx9KTtcbmBcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkKEZsZXgpYFxuICBwYWRkaW5nOiAke3NwYWNpbmcueGx9IDAgMCAwO1xuICBtYXgtd2lkdGg6IGNhbGMoJHtDQVJEX1NJWkVfUFh9ICogMyArICR7c3BhY2luZy54bH0gKiAyKTtcbiAgY29udGFpbmVyLW5hbWU6IGNhcm91c2VsO1xuICBjb250YWluZXItdHlwZTogaW5saW5lLXNpemU7XG4gICY6bm90KDpob3ZlciwgOmhhcyg6Zm9jdXMtdmlzaWJsZSkpICR7U2Nyb2xsQnV0dG9ufSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuYFxuXG5jb25zdCBIZWFkZXIgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTAwJTtcbiAgZm9udDogJHtmb250LmhlYWRpbmcuaDR9O1xuICBtYXJnaW46ICR7c3BhY2luZy5tfSAwO1xuYFxuXG5jb25zdCBTdWJ0aXRsZSA9IHN0eWxlZC5zcGFuYFxuICBmb250OiAke2ZvbnQuc21hbGwucmVndWxhcn07XG5gXG5cbmNvbnN0IENhcm91c2VsQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuYFxuXG5jb25zdCBJdGVtc0NvbnRhaW5lciA9IHN0eWxlZChGbGV4KWBcbiAgbWFyZ2luOiAke3NwYWNpbmcubX0gMDtcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICBzY3JvbGwtc25hcC10eXBlOiB4IG1hbmRhdG9yeTtcblxuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICBkaXNwbGF5OiBub25lO1xuICAgd2lkdGg6IDA7XG4gIH1cbmBcblxuY29uc3QgUHVibGlzaGVyQ2FyZENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIG1pbi13aWR0aDogY2FsYygoMTAwY3FpIC0gJHtzcGFjaW5nLnhsfSAqIDIpIC8gMyk7XG4gIG1heC13aWR0aDogJHtDQVJEX1NJWkVfUFh9O1xuICBzY3JvbGwtc25hcC1hbGlnbjogc3RhcnQ7XG5gXG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHRpdGxlOiBzdHJpbmcgfCBKU1guRWxlbWVudFxuICBzdWJ0aXRsZT86IFJlYWN0LlJlYWN0Tm9kZVxuICBwdWJsaXNoZXJJZHM6IHN0cmluZ1tdXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhcm91c2VsKHByb3BzOiBQcm9wcykge1xuICBjb25zdCBzY3JvbGxDb250YWluZXJSZWYgPSBSZWFjdC51c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpXG4gIGNvbnN0IFthdmFpbGFibGVEaXJlY3Rpb25zLCBzZXRBdmFpbGFibGVEaXJlY3Rpb25zXSA9IFJlYWN0LnVzZVN0YXRlPCdub25lJyB8ICdsZWZ0JyB8ICdyaWdodCcgfCAnYm90aCc+KCdyaWdodCcpXG4gIGNvbnN0IHVwZGF0ZUF2YWlsYWJsZURpcmVjdGlvbnMgPSBSZWFjdC51c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgaWYgKCFzY3JvbGxDb250YWluZXJSZWYuY3VycmVudCkgcmV0dXJuXG5cbiAgICBjb25zdCBlbmQgPSBzY3JvbGxDb250YWluZXJSZWYuY3VycmVudC5zY3JvbGxXaWR0aCAtIHNjcm9sbENvbnRhaW5lclJlZi5jdXJyZW50LmNsaWVudFdpZHRoXG4gICAgY29uc3Qgc2Nyb2xsUG9zID0gc2Nyb2xsQ29udGFpbmVyUmVmLmN1cnJlbnQuc2Nyb2xsTGVmdFxuICAgIGlmIChlbmQgPD0gMCkge1xuICAgICAgc2V0QXZhaWxhYmxlRGlyZWN0aW9ucygnbm9uZScpXG4gICAgfSBlbHNlIGlmIChlbmQgPiBzY3JvbGxQb3MgJiYgc2Nyb2xsUG9zID4gMCkge1xuICAgICAgc2V0QXZhaWxhYmxlRGlyZWN0aW9ucygnYm90aCcpXG4gICAgfSBlbHNlIGlmIChlbmQgPiBzY3JvbGxQb3MpIHtcbiAgICAgIHNldEF2YWlsYWJsZURpcmVjdGlvbnMoJ3JpZ2h0JylcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0QXZhaWxhYmxlRGlyZWN0aW9ucygnbGVmdCcpXG4gICAgfVxuICB9LCBbXSlcblxuICBjb25zdCBzY3JvbGwgPSBSZWFjdC51c2VDYWxsYmFjaygoZGlyOiAnbGVmdCcgfCAncmlnaHQnKSA9PiB7XG4gICAgaWYgKCFzY3JvbGxDb250YWluZXJSZWYuY3VycmVudCkgcmV0dXJuXG5cbiAgICBzY3JvbGxDb250YWluZXJSZWYuY3VycmVudC5zY3JvbGxCeSh7XG4gICAgICBiZWhhdmlvcjogJ3Ntb290aCcsXG4gICAgICBsZWZ0OiBDQVJEX1NJWkUgKiAoZGlyID09PSAnbGVmdCcgPyAtMSA6IDEpXG4gICAgfSlcbiAgfSwgW10pXG5cbiAgaWYgKCFwcm9wcy5wdWJsaXNoZXJJZHMubGVuZ3RoKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lciBkaXJlY3Rpb249J2NvbHVtbic+XG4gICAgICA8RmxleCBkaXJlY3Rpb249J3JvdycgZ2FwPXtzcGFjaW5nLm19IGFsaWduPSdjZW50ZXInPlxuICAgICAgICA8SGVhZGVyPntwcm9wcy50aXRsZX08L0hlYWRlcj5cbiAgICAgIDwvRmxleD5cbiAgICAgIHtwcm9wcy5zdWJ0aXRsZSAmJiA8U3VidGl0bGU+XG4gICAgICAgIHtwcm9wcy5zdWJ0aXRsZX1cbiAgICAgIDwvU3VidGl0bGU+fVxuICAgICAgPENhcm91c2VsQ29udGFpbmVyPlxuICAgICAgICA8SXRlbXNDb250YWluZXIgZGlyZWN0aW9uPSdyb3cnIGdhcD17c3BhY2luZy54bH0gcmVmPXtzY3JvbGxDb250YWluZXJSZWYgYXMgYW55fSBvblNjcm9sbD17dXBkYXRlQXZhaWxhYmxlRGlyZWN0aW9uc30+XG4gICAgICAgICAge3Byb3BzLnB1Ymxpc2hlcklkcy5tYXAocCA9PiA8UHVibGlzaGVyQ2FyZENvbnRhaW5lciBrZXk9e3B9PlxuICAgICAgICAgICAgPFB1Ymxpc2hlckNhcmQgcHVibGlzaGVySWQ9e3B9IC8+XG4gICAgICAgICAgPC9QdWJsaXNoZXJDYXJkQ29udGFpbmVyPil9XG4gICAgICAgIDwvSXRlbXNDb250YWluZXI+XG4gICAgICAgIDxTY3JvbGxCdXR0b25MZWZ0IG9uQ2xpY2s9eygpID0+IHNjcm9sbCgnbGVmdCcpfSBoaWRkZW49e2F2YWlsYWJsZURpcmVjdGlvbnMgPT09ICdyaWdodCcgfHwgYXZhaWxhYmxlRGlyZWN0aW9ucyA9PT0gJ25vbmUnfT5cbiAgICAgICAgICB7QXJyb3dSaWdodH1cbiAgICAgICAgPC9TY3JvbGxCdXR0b25MZWZ0PlxuICAgICAgICA8U2Nyb2xsQnV0dG9uUmlnaHQgb25DbGljaz17KCkgPT4gc2Nyb2xsKCdyaWdodCcpfSBoaWRkZW49e2F2YWlsYWJsZURpcmVjdGlvbnMgPT09ICdsZWZ0JyB8fCBhdmFpbGFibGVEaXJlY3Rpb25zID09PSAnbm9uZSd9PlxuICAgICAgICAgIHtBcnJvd1JpZ2h0fVxuICAgICAgICA8L1Njcm9sbEJ1dHRvblJpZ2h0PlxuICAgICAgPC9DYXJvdXNlbENvbnRhaW5lcj5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKVxufVxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIyIFRoZSBCcmF2ZSBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuLy8gTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBmaWxlLFxuLy8gWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHBzOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uXG5cbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBjb2xvciwgZm9udCB9IGZyb20gJ0BicmF2ZS9sZW8vdG9rZW5zL2Nzcy92YXJpYWJsZXMnXG5cbmNvbnN0IEN1c3RvbWl6ZUxpbmsgPSBzdHlsZWQuYnV0dG9uYFxuICBhbGw6IHVuc2V0O1xuICBmb250OiAke2ZvbnQuc21hbGwuc2VtaWJvbGR9O1xuICBjb2xvcjogJHtjb2xvci50ZXh0LmludGVyYWN0aXZlfTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuYFxuZXhwb3J0IGRlZmF1bHQgQ3VzdG9taXplTGlua1xuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIyIFRoZSBCcmF2ZSBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuLy8gTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBmaWxlLFxuLy8gWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHBzOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uXG5cbmltcG9ydCBGbGV4IGZyb20gJyR3ZWItY29tbW9uL0ZsZXgnXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBjb2xvciwgZm9udCwgc3BhY2luZyB9IGZyb20gJ0BicmF2ZS9sZW8vdG9rZW5zL2Nzcy92YXJpYWJsZXMnXG5pbXBvcnQgeyB1c2VCcmF2ZU5ld3MgfSBmcm9tICcuLi9zaGFyZWQvQ29udGV4dCdcbmltcG9ydCB7IGdldExvY2FsZSB9IGZyb20gJyR3ZWItY29tbW9uL2xvY2FsZSdcbmltcG9ydCBCdXR0b24gZnJvbSAnQGJyYXZlL2xlby9yZWFjdC9idXR0b24nXG5pbXBvcnQgSWNvbiBmcm9tICdAYnJhdmUvbGVvL3JlYWN0L2ljb24nXG5cbmNvbnN0IEJhY2tCdXR0b24gPSBzdHlsZWQoQnV0dG9uKS5hdHRycyh7XG4gIGtpbmQ6ICdwbGFpbi1mYWludCcsXG59KWBcbiAgLS1sZW8tYnV0dG9uLXBhZGRpbmc6IDA7XG5cbiAgZmxleDogMTtcbmBcblxuY29uc3QgSGVhZGVyID0gc3R5bGVkLnNwYW5gXG4gIGZvbnQ6ICR7Zm9udC5oZWFkaW5nLmg0fTtcbiAgY29sb3I6ICR7Y29sb3IudGV4dC5wcmltYXJ5fTtcbiAgZmxleDogNTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuYFxuXG5jb25zdCBTcGFjZXIgPSBzdHlsZWQuZGl2YGZsZXg6IDE7YFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDdXN0b21pemVQYWdlIChwcm9wczoge1xuICB0aXRsZTogc3RyaW5nXG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGVcbn0pIHtcbiAgY29uc3QgeyBzZXRDdXN0b21pemVQYWdlIH0gPSB1c2VCcmF2ZU5ld3MoKVxuICByZXR1cm4gPEZsZXggZGlyZWN0aW9uPVwiY29sdW1uXCIgZ2FwPXtzcGFjaW5nLm19PlxuICAgIDxGbGV4IGFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgIDxCYWNrQnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldEN1c3RvbWl6ZVBhZ2UoJ25ld3MnKX0+XG4gICAgICAgICAgPEljb24gbmFtZT1cImFycm93LWxlZnRcIiBzbG90PVwiaWNvbi1iZWZvcmVcIiAvPlxuICAgICAgICAgIHtnZXRMb2NhbGUoUy5CUkFWRV9ORVdTX0JBQ0tfQlVUVE9OKX1cbiAgICAgICAgPC9CYWNrQnV0dG9uPlxuICAgICAgPEhlYWRlcj57cHJvcHMudGl0bGV9PC9IZWFkZXI+XG4gICAgICA8U3BhY2VyIC8+XG4gICAgPC9GbGV4PlxuICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgPC9GbGV4PlxufVxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIyIFRoZSBCcmF2ZSBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuLy8gTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBmaWxlLFxuLy8gWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHBzOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uXG5cbmltcG9ydCBGbGV4IGZyb20gJyR3ZWItY29tbW9uL0ZsZXgnXG5pbXBvcnQgeyBnZXRMb2NhbGUgfSBmcm9tICckd2ViLWNvbW1vbi9sb2NhbGUnXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZUJyYXZlTmV3cyB9IGZyb20gJy4uL3NoYXJlZC9Db250ZXh0J1xuaW1wb3J0IHsgUHVibGlzaGVyc0NhY2hpbmdXcmFwcGVyIH0gZnJvbSAnLi4vc2hhcmVkL3B1Ymxpc2hlcnNDYWNoZSdcbmltcG9ydCBDYXJvdXNlbCBmcm9tICcuL0Nhcm91c2VsJ1xuaW1wb3J0IEN1c3RvbWl6ZUxpbmsgZnJvbSAnLi9DdXN0b21pemVMaW5rJ1xuaW1wb3J0IEN1c3RvbWl6ZVBhZ2UgZnJvbSAnLi9DdXN0b21pemVQYWdlJ1xuaW1wb3J0IERpc2NvdmVyU2VjdGlvbiBmcm9tICcuL0Rpc2NvdmVyU2VjdGlvbidcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4vTG9hZGluZydcbmltcG9ydCBQdWJsaXNoZXJDYXJkIGZyb20gJy4uL3NoYXJlZC9QdWJsaXNoZXJDYXJkJ1xuXG5jb25zdCB1c2VQb3B1bGFyUHVibGlzaGVySWRzID0gKCkgPT4ge1xuICBjb25zdCB7IGZpbHRlcmVkUHVibGlzaGVySWRzLCBwdWJsaXNoZXJzLCBsb2NhbGUgfSA9IHVzZUJyYXZlTmV3cygpXG4gIHJldHVybiBSZWFjdC51c2VNZW1vKCgpID0+IGZpbHRlcmVkUHVibGlzaGVySWRzLm1hcChpZCA9PiBwdWJsaXNoZXJzW2lkXSlcbiAgICAubWFwKHAgPT4gW3AsIHAubG9jYWxlcy5maW5kKGwgPT4gbC5sb2NhbGUgPT09IGxvY2FsZSk/LnJhbmtdIGFzIGNvbnN0KVxuICAgIC8vIEZpbHRlciBvdXQgcHVibGlzaGVycyB3aGljaCBhcmVuJ3QgaW4gdGhlIGN1cnJlbnQgbG9jYWxlLlxuICAgIC5maWx0ZXIoKFtwLCBwUmFua10pID0+IHBSYW5rICE9PSB1bmRlZmluZWQpXG4gICAgLnNvcnQoKFthLCBhUmFua10sIFtiLCBiUmFua10pID0+IHtcbiAgICAgIC8vIE5laXRoZXIgc291cmNlIGhhcyBhIHJhbmssIHNvcnQgYWxwaGFiZXRpY2FsbHlcbiAgICAgIGlmICghYVJhbmsgJiYgIWJSYW5rKSB7XG4gICAgICAgIHJldHVybiBhLnB1Ymxpc2hlck5hbWUubG9jYWxlQ29tcGFyZShiLnB1Ymxpc2hlck5hbWUpXG4gICAgICB9XG5cbiAgICAgIC8vIDAgaXMgY29uc2lkZXJlZCB1bnJhbmtlZCwgYmVjYXVzZSBtb2pvIGRvZXNuJ3Qgc3VwcG9ydCBvcHRpb25hbFxuICAgICAgLy8gcHJpbWl0aXZlcywgc28gd2Ugd2FudCB0byBzb3J0IDAgbGFzdC5cbiAgICAgIHJldHVybiAoYVJhbmsgfHwgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIpIC0gKGJSYW5rIHx8IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSKVxuICAgIH0pXG4gICAgLm1hcCgoW3BdKSA9PiBwLnB1Ymxpc2hlcklkKSwgW2ZpbHRlcmVkUHVibGlzaGVySWRzLCBwdWJsaXNoZXJzLCBsb2NhbGVdKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gUG9wdWxhckNhcm91c2VsICgpIHtcbiAgY29uc3QgeyBzZXRDdXN0b21pemVQYWdlIH0gPSB1c2VCcmF2ZU5ld3MoKVxuICBjb25zdCBwb3B1bGFyUHVibGlzaGVySWRzID0gdXNlUG9wdWxhclB1Ymxpc2hlcklkcygpXG4gIHJldHVybiAoXG4gICAgPENhcm91c2VsIHRpdGxlPXs8RmxleCBqdXN0aWZ5PSdzcGFjZS1iZXR3ZWVuJz5cbiAgICAgIHtnZXRMb2NhbGUoUy5CUkFWRV9ORVdTX1BPUFVMQVJfVElUTEUpfVxuICAgICAgPEN1c3RvbWl6ZUxpbmsgb25DbGljaz17KCkgPT4gc2V0Q3VzdG9taXplUGFnZSgncG9wdWxhcicpfT5cbiAgICAgICAge2dldExvY2FsZShTLkJSQVZFX05FV1NfVklFV19BTExfQlVUVE9OKX1cbiAgICAgIDwvQ3VzdG9taXplTGluaz5cbiAgICA8L0ZsZXg+fSBwdWJsaXNoZXJJZHM9e3BvcHVsYXJQdWJsaXNoZXJJZHN9IC8+XG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFBvcHVsYXJQYWdlICgpIHtcbiAgY29uc3QgcHVibGlzaGVyc0xvYWRlZCA9IFB1Ymxpc2hlcnNDYWNoaW5nV3JhcHBlci5nZXRJbnN0YW5jZSgpLmNvbm5lY3RlZFxuICBjb25zdCBwb3B1bGFyUHVibGlzaGVySWRzID0gdXNlUG9wdWxhclB1Ymxpc2hlcklkcygpXG4gIHJldHVybiA8Q3VzdG9taXplUGFnZSB0aXRsZT17Z2V0TG9jYWxlKFMuQlJBVkVfTkVXU19QT1BVTEFSX1RJVExFKX0+XG4gICAge3B1Ymxpc2hlcnNMb2FkZWQgPyAoXG4gICAgICA8RGlzY292ZXJTZWN0aW9uPlxuICAgICAgICB7cG9wdWxhclB1Ymxpc2hlcklkcy5tYXAocCA9PiA8UHVibGlzaGVyQ2FyZCBrZXk9e3B9IHB1Ymxpc2hlcklkPXtwfSAvPil9XG4gICAgICA8L0Rpc2NvdmVyU2VjdGlvbj5cbiAgICApIDogKFxuICAgICAgPExvYWRpbmcgLz5cbiAgICApfVxuICA8L0N1c3RvbWl6ZVBhZ2U+XG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjIgVGhlIEJyYXZlIEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4vLyBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIGZpbGUsXG4vLyBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cHM6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy5cblxuaW1wb3J0IEZsZXggZnJvbSAnJHdlYi1jb21tb24vRmxleCdcbmltcG9ydCB7IGdldExvY2FsZSB9IGZyb20gJyR3ZWItY29tbW9uL2xvY2FsZSdcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlQnJhdmVOZXdzIH0gZnJvbSAnLi4vc2hhcmVkL0NvbnRleHQnXG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSAnLi9DYXJvdXNlbCdcbmltcG9ydCBDdXN0b21pemVMaW5rIGZyb20gJy4vQ3VzdG9taXplTGluaydcbmltcG9ydCBDdXN0b21pemVQYWdlIGZyb20gJy4vQ3VzdG9taXplUGFnZSdcbmltcG9ydCBEaXNjb3ZlclNlY3Rpb24gZnJvbSAnLi9EaXNjb3ZlclNlY3Rpb24nXG5pbXBvcnQgTG9hZGluZyBmcm9tICcuL0xvYWRpbmcnXG5pbXBvcnQgUHVibGlzaGVyQ2FyZCBmcm9tICcuLi9zaGFyZWQvUHVibGlzaGVyQ2FyZCdcblxuZXhwb3J0IGZ1bmN0aW9uIFN1Z2dlc3Rpb25zQ2Fyb3VzZWwgKCkge1xuICBjb25zdCB7IHN1Z2dlc3RlZFB1Ymxpc2hlcklkcywgc2V0Q3VzdG9taXplUGFnZSB9ID0gdXNlQnJhdmVOZXdzKClcblxuICByZXR1cm4gPENhcm91c2VsXG4gICAgdGl0bGU9ezxGbGV4IGp1c3RpZnk9J3NwYWNlLWJldHdlZW4nPlxuICAgICAge2dldExvY2FsZShTLkJSQVZFX05FV1NfU1VHR0VTVElPTlNfVElUTEUpfVxuICAgICAgPEN1c3RvbWl6ZUxpbmsgb25DbGljaz17KCkgPT4gc2V0Q3VzdG9taXplUGFnZSgnc3VnZ2VzdGlvbnMnKX0+XG4gICAgICAgIHtnZXRMb2NhbGUoUy5CUkFWRV9ORVdTX1ZJRVdfQUxMX0JVVFRPTil9XG4gICAgICA8L0N1c3RvbWl6ZUxpbms+XG4gICAgPC9GbGV4Pn1cbiAgICBzdWJ0aXRsZT17Z2V0TG9jYWxlKFMuQlJBVkVfTkVXU19TVUdHRVNUSU9OU19TVUJUSVRMRSl9XG4gICAgcHVibGlzaGVySWRzPXtzdWdnZXN0ZWRQdWJsaXNoZXJJZHN9Lz5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFN1Z2dlc3Rpb25zUGFnZSAoKSB7XG4gIGNvbnN0IHsgc3VnZ2VzdGVkUHVibGlzaGVySWRzLCB1cGRhdGVTdWdnZXN0ZWRQdWJsaXNoZXJJZHMgfSA9IHVzZUJyYXZlTmV3cygpXG4gIGNvbnN0IGxvYWRpbmcgPSBzdWdnZXN0ZWRQdWJsaXNoZXJJZHMubGVuZ3RoID09PSAwXG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICB1cGRhdGVTdWdnZXN0ZWRQdWJsaXNoZXJJZHMoKVxuICB9LCBbdXBkYXRlU3VnZ2VzdGVkUHVibGlzaGVySWRzXSlcblxuICByZXR1cm4gPEN1c3RvbWl6ZVBhZ2UgdGl0bGU9e2dldExvY2FsZShTLkJSQVZFX05FV1NfU1VHR0VTVElPTlNfVElUTEUpfT5cbiAgICB7bG9hZGluZyA/IChcbiAgICAgIDxMb2FkaW5nIC8+XG4gICAgKSA6IChcbiAgICAgIDxEaXNjb3ZlclNlY3Rpb24+XG4gICAgICAgIHtzdWdnZXN0ZWRQdWJsaXNoZXJJZHMubWFwKHAgPT4gPFB1Ymxpc2hlckNhcmQga2V5PXtwfSBwdWJsaXNoZXJJZD17cH0gLz4pfVxuICAgICAgPC9EaXNjb3ZlclNlY3Rpb24+XG4gICAgKX1cbiAgPC9DdXN0b21pemVQYWdlPlxufVxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIyIFRoZSBCcmF2ZSBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuLy8gTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBmaWxlLFxuLy8gWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHBzOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uXG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlQnJhdmVOZXdzLCB1c2VDaGFubmVscyB9IGZyb20gJy4uL3NoYXJlZC9Db250ZXh0J1xuaW1wb3J0IGdldEJyYXZlTmV3c0NvbnRyb2xsZXIsIHsgRmVlZFNlYXJjaFJlc3VsdEl0ZW0gfSBmcm9tICcuLi9zaGFyZWQvYXBpJ1xuXG5leHBvcnQgY29uc3QgUVVFUllfTUlOX0xFTkdUSF9GSUxURVJfU09VUkNFUyA9IDJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlU2VhcmNoIChxdWVyeTogc3RyaW5nKSB7XG4gIGNvbnN0IGxvd2VyUXVlcnkgPSBxdWVyeS50b0xvd2VyQ2FzZSgpXG4gIGNvbnN0IGNoYW5uZWxzID0gdXNlQ2hhbm5lbHMoKVxuICBjb25zdCBjb250ZXh0ID0gdXNlQnJhdmVOZXdzKClcbiAgY29uc3QgY2FuUXVlcnlGaWx0ZXJTb3VyY2VzID0gbG93ZXJRdWVyeS5sZW5ndGggPj0gUVVFUllfTUlOX0xFTkdUSF9GSUxURVJfU09VUkNFU1xuICBjb25zdCBbZGlyZWN0UmVzdWx0cywgc2V0RGlyZWN0UmVzdWx0c10gPSBSZWFjdC51c2VTdGF0ZTxGZWVkU2VhcmNoUmVzdWx0SXRlbVtdPihbXSlcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXG4gIC8vIFdoZXRoZXIgdXNlciBoYXMgYXNrZWQgdXMgdG8gcGVyZm9ybSBhIHNlYXJjaCBhdCB0aGUgcXVlcnkgdXJsXG4gIGNvbnN0IFtjYW5GZXRjaFVybCwgc2V0Q2FuRmV0Y2hVcmxdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXG5cbiAgLy8gU2VwYXJhdGUgcmVzdWx0cyB3ZSBhbHJlYWR5IGhhdmUgYSBwdWJsaXNoZXIgZm9yLlxuICB0eXBlIEZpbHRlcmVkUmVzdWx0cyA9IHtcbiAgICBwdWJsaXNoZXJJZHM6IHN0cmluZ1tdXG4gICAgZGlyZWN0OiBGZWVkU2VhcmNoUmVzdWx0SXRlbVtdXG4gIH1cblxuICBjb25zdCBmaWx0ZXJlZENoYW5uZWxzID0gUmVhY3QudXNlTWVtbygoKSA9PlxuICAgIGNoYW5uZWxzLmZpbHRlcihjID0+IGMuY2hhbm5lbE5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhsb3dlclF1ZXJ5KSksXG4gICAgW2xvd2VyUXVlcnksIGNoYW5uZWxzXSlcblxuICBjb25zdCBmaWx0ZXJlZFNvdXJjZXMgPSBSZWFjdC51c2VNZW1vPEZpbHRlcmVkUmVzdWx0cz4oKCkgPT4ge1xuICAgIGNvbnN0IHB1Ymxpc2hlcnMgPSBjb250ZXh0LnNvcnRlZFB1Ymxpc2hlcnNcbiAgICAgIC5maWx0ZXIocCA9PiBjYW5RdWVyeUZpbHRlclNvdXJjZXMgJiYgKFxuICAgICAgICBwLnB1Ymxpc2hlck5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhsb3dlclF1ZXJ5KSB8fFxuICAgICAgICBwLmNhdGVnb3J5TmFtZS50b0xvY2FsZUxvd2VyQ2FzZSgpLmluY2x1ZGVzKGxvd2VyUXVlcnkpIHx8XG4gICAgICAgIHAuc2l0ZVVybD8udXJsPy50b0xvY2FsZUxvd2VyQ2FzZSgpLmluY2x1ZGVzKGxvd2VyUXVlcnkpIHx8XG4gICAgICAgIHAuZmVlZFNvdXJjZT8udXJsPy50b0xvY2FsZUxvd2VyQ2FzZSgpLmluY2x1ZGVzKGxvd2VyUXVlcnkpKSlcbiAgICBjb25zdCByZXN1bHRzID0geyBwdWJsaXNoZXJzLCBkaXJlY3Q6IFtdIGFzIEZlZWRTZWFyY2hSZXN1bHRJdGVtW10gfVxuICAgIGZvciAoY29uc3QgcmVzdWx0IG9mIGRpcmVjdFJlc3VsdHMpIHtcbiAgICAgIC8vIElmIHdlIGhhdmUgYW55IHB1Ymxpc2hlciB3aXRoIHRoaXMgZmVlZCB1cmwsIHdlIHNob3VsZCBwcmVmZXIgc2hvd2luZ1xuICAgICAgLy8gdGhhdCB0byBjcmVhdGluZyBhIG5ldyBkaXJlY3QgZmVlZC5cbiAgICAgIC8vIE5vdGU6IFdlIHNob3VsZCBvbmx5IGFkZCB0aGUgcHVibGlzaGVyIHRvIHRoZSBsaXN0IG9mIHB1Ymxpc2hlciBtYXRjaGVzXG4gICAgICAvLyBpZiBpdCBpc24ndCBhbHJlYWR5IG1hdGNoaW5nLiBUaGUgY2Fub25pY2FsIGNhc2UgaGVyZSBpc1xuICAgICAgLy8gbmV3cy5jb20gKHJlZGlyZWN0cyB0byBjbmV0LmNvbSksIHNvIHdlIHNob3VsZCBzaG93IHRoZSBjbmV0LmNvbSBmZWVkLlxuICAgICAgY29uc3QgcHVibGlzaGVyTWF0Y2ggPSBjb250ZXh0LnNvcnRlZFB1Ymxpc2hlcnMuZmluZChwID0+IHAuZmVlZFNvdXJjZS51cmwgPT09IHJlc3VsdC5mZWVkVXJsLnVybClcbiAgICAgIGlmICghcHVibGlzaGVyTWF0Y2gpIHtcbiAgICAgICAgcmVzdWx0cy5kaXJlY3QucHVzaChyZXN1bHQpXG4gICAgICB9IGVsc2UgaWYgKCFyZXN1bHRzLnB1Ymxpc2hlcnMuc29tZShwID0+IHAucHVibGlzaGVySWQgPT09IHB1Ymxpc2hlck1hdGNoLnB1Ymxpc2hlcklkKSkge1xuICAgICAgICByZXN1bHRzLnB1Ymxpc2hlcnMucHVzaChwdWJsaXNoZXJNYXRjaClcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIHB1Ymxpc2hlcklkczogcmVzdWx0cy5wdWJsaXNoZXJzLm1hcChwID0+IHAucHVibGlzaGVySWQpLFxuICAgICAgZGlyZWN0OiByZXN1bHRzLmRpcmVjdFxuICAgIH1cbiAgfSwgW2RpcmVjdFJlc3VsdHMsIGNvbnRleHQuc29ydGVkUHVibGlzaGVycywgbG93ZXJRdWVyeV0pXG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBSZXNldCBzdGF0ZSB3aGVuIHF1ZXJ5IGNoYW5nZXNcbiAgICBzZXRDYW5GZXRjaFVybChmYWxzZSlcbiAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgIHNldERpcmVjdFJlc3VsdHMoW10pXG4gIH0sIFtxdWVyeV0pXG5cbiAgLy8gQ29udGFpbnMgYSB1cmwgYXMgc3RyaW5nIGlmIHRoZSBxdWVyeSBsb29rcyBsaWtlIGEgdXJsXG4gIGNvbnN0IGZlZWRVcmxRdWVyeSA9IFJlYWN0LnVzZU1lbW88c3RyaW5nIHwgbnVsbD4oKCkgPT4ge1xuICAgIC8vIENoZWNrIGlmIHdlIGhhdmUgYSB1cmwtYWJsZSBxdWVyeVxuICAgIGxldCBmZWVkVXJsUmF3ID0gcXVlcnlcbiAgICAvLyBVc2VyIGlucHV0dGluZyBhIHByb3RvY29sIGlzIGEgc2lnbmFsIHRoYXQgdGhleSB3YW50IHRvIGxvb2tcbiAgICAvLyBmb3IgYSBmZWVkLiBPdGhlcndpc2Ugd2UgdXNlIHRoZSAnLicgdGhhdCBhIGhvc3RuYW1lIHdvdWxkIGhhdmUuXG4gICAgLy8gVGhpcyBhdCBsZWFzdCBtYWtlcyBpdCBwb3NzaWJsZSBmb3IgdGhlIHVzZXIgdG8gcmV0cmlldmUgbG9jYWxcbiAgICAvLyBuZXR3b3JrIGZlZWRzLlxuICAgIGxldCBxdWVyeUNvbnRhaW5zRXhwbGljaXRQcm90b2NvbCA9IGZhbHNlXG4gICAgaWYgKGZlZWRVcmxSYXcuaW5jbHVkZXMoJzovLycpKSB7XG4gICAgICBxdWVyeUNvbnRhaW5zRXhwbGljaXRQcm90b2NvbCA9IHRydWVcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gRGVmYXVsdCBwcm90b2NvbCB0aGF0IHNob3VsZCBjYXRjaCBtb3N0IGNhc2VzLiBNYWtlIHN1cmVcbiAgICAgIC8vIHdlIGNoZWNrIGZvciB2YWxpZGl0eSBhZnRlciBhZGRpbmcgdGhpcyBwcmVmaXgsIGFuZFxuICAgICAgLy8gbm90IGJlZm9yZS5cbiAgICAgIGZlZWRVcmxSYXcgPSAnaHR0cHM6Ly8nICsgZmVlZFVybFJhd1xuICAgIH1cbiAgICBsZXQgaXNWYWxpZEZlZWRVcmwgPSBmYWxzZVxuICAgIHRyeSB7XG4gICAgICBjb25zdCB1cmwgPSBuZXcgVVJMKGZlZWRVcmxSYXcpXG4gICAgICBpc1ZhbGlkRmVlZFVybCA9IFsnaHR0cDonLCAnaHR0cHM6J10uaW5jbHVkZXModXJsLnByb3RvY29sKSAmJlxuICAgICAgICAodXJsLmhvc3RuYW1lLmluY2x1ZGVzKCcuJykgfHwgcXVlcnlDb250YWluc0V4cGxpY2l0UHJvdG9jb2wpXG4gICAgfSBjYXRjaCB7IH1cbiAgICBpZiAoIWlzVmFsaWRGZWVkVXJsKSB7XG4gICAgICAvLyBOb3QgYSB1cmwtYWJsZSBxdWVyeVxuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gICAgcmV0dXJuIGZlZWRVcmxSYXdcbiAgfSwgW3F1ZXJ5XSlcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIERvIG5vdGhpbmcgaWYgdXNlciBoYXNuJ3QgYXNrZWQgdG8gc2VhcmNoLCBvciBpbnB1dCBpc24ndFxuICAgIC8vIGEgdmFsaWQgVXJsXG4gICAgaWYgKCFjYW5GZXRjaFVybCB8fCAhZmVlZFVybFF1ZXJ5KSB7XG4gICAgICBjb25zb2xlLmRlYnVnKCdOZXdzOiBxdWVyeSBjaGFuZ2VkIGJ1dCBub3Qgc2VhcmNoaW5nJywgeyBjYW5GZXRjaFVybCwgZmVlZFVybFF1ZXJ5IH0pXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBzZXRMb2FkaW5nKHRydWUpXG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG5cbiAgICBnZXRCcmF2ZU5ld3NDb250cm9sbGVyKCkuZmluZEZlZWRzKHsgdXJsOiBmZWVkVXJsUXVlcnkudG9TdHJpbmcoKSB9KS50aGVuKCh7IHJlc3VsdHMgfSkgPT4ge1xuICAgICAgY29uc29sZS5kZWJ1ZygnTmV3czogcmVjZWl2ZWQgZmVlZCByZXN1bHRzJywgeyByZXN1bHRzLCBjYW5jZWxsZWQgfSlcbiAgICAgIGlmIChjYW5jZWxsZWQpIHJldHVyblxuXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgICAgc2V0RGlyZWN0UmVzdWx0cyhyZXN1bHRzKVxuICAgIH0pXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgfVxuICB9LCBbY2FuRmV0Y2hVcmwsIGZlZWRVcmxRdWVyeV0pXG5cbiAgcmV0dXJuIHtcbiAgICBjYW5GZXRjaFVybCxcbiAgICBjYW5RdWVyeUZpbHRlclNvdXJjZXMsXG4gICAgZmlsdGVyZWRTb3VyY2VzLFxuICAgIGZpbHRlcmVkQ2hhbm5lbHMsXG4gICAgZmVlZFVybFF1ZXJ5LFxuICAgIGxvYWRpbmcsXG4gICAgc2V0Q2FuRmV0Y2hVcmxcbiAgfVxufVxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIyIFRoZSBCcmF2ZSBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuLy8gTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBmaWxlLFxuLy8gWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHBzOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uXG5cbmltcG9ydCBGbGV4IGZyb20gJyR3ZWItY29tbW9uL0ZsZXgnXG5pbXBvcnQgeyBnZXRMb2NhbGUgfSBmcm9tICckd2ViLWNvbW1vbi9sb2NhbGUnXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BicmF2ZS9sZW8vcmVhY3QvYnV0dG9uJ1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgZm9udCwgc3BhY2luZyB9IGZyb20gJ0BicmF2ZS9sZW8vdG9rZW5zL2Nzcy92YXJpYWJsZXMnXG5pbXBvcnQgeyBDaGFubmVsc0NhY2hpbmdXcmFwcGVyIH0gZnJvbSAnLi4vc2hhcmVkL2NoYW5uZWxzQ2FjaGUnXG5pbXBvcnQgeyB1c2VCcmF2ZU5ld3MsIHVzZUNoYW5uZWxzIH0gZnJvbSAnLi4vc2hhcmVkL0NvbnRleHQnXG5pbXBvcnQgeyBQdWJsaXNoZXJzQ2FjaGluZ1dyYXBwZXIgfSBmcm9tICcuLi9zaGFyZWQvcHVibGlzaGVyc0NhY2hlJ1xuaW1wb3J0IENoYW5uZWxDYXJkIGZyb20gJy4vQ2hhbm5lbENhcmQnXG5pbXBvcnQgRGlzY292ZXJTZWN0aW9uIGZyb20gJy4vRGlzY292ZXJTZWN0aW9uJ1xuaW1wb3J0IExvYWRpbmcgZnJvbSAnLi9Mb2FkaW5nJ1xuaW1wb3J0IFB1Ymxpc2hlckNhcmQsIHsgRGlyZWN0UHVibGlzaGVyQ2FyZCB9IGZyb20gJy4uL3NoYXJlZC9QdWJsaXNoZXJDYXJkJ1xuaW1wb3J0IHsgUG9wdWxhckNhcm91c2VsIH0gZnJvbSAnLi9Qb3B1bGFyJ1xuaW1wb3J0IHsgU3VnZ2VzdGlvbnNDYXJvdXNlbCB9IGZyb20gJy4vU3VnZ2VzdGlvbnMnXG5pbXBvcnQgdXNlU2VhcmNoIGZyb20gJy4vdXNlU2VhcmNoJ1xuaW1wb3J0IElucHV0IGZyb20gJ0BicmF2ZS9sZW8vcmVhY3QvaW5wdXQnXG5cbmNvbnN0IEhlYWRlciA9IHN0eWxlZC5zcGFuYFxuICBmb250OiAke2ZvbnQuaGVhZGluZy5oMn07XG4gIHBhZGRpbmc6ICR7c3BhY2luZy5sfSAwO1xuYFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEaXNjb3ZlciAoKSB7XG4gIGNvbnN0IFtxdWVyeSwgc2V0UXVlcnldID0gUmVhY3QudXNlU3RhdGUoJycpXG5cbiAgcmV0dXJuIDxGbGV4IGRpcmVjdGlvbj0nY29sdW1uJz5cbiAgICA8SGVhZGVyPntnZXRMb2NhbGUoUy5CUkFWRV9ORVdTX0RJU0NPVkVSX1RJVExFKX08L0hlYWRlcj5cbiAgICA8SW5wdXQgdHlwZT1cInNlYXJjaFwiIHBsYWNlaG9sZGVyPXtnZXRMb2NhbGUoUy5CUkFWRV9ORVdTX1NFQVJDSF9QTEFDRUhPTERFUl9MQUJFTCl9IHZhbHVlPXtxdWVyeX0gb25JbnB1dD17ZSA9PiBzZXRRdWVyeShlLnZhbHVlKX0gLz5cbiAgICB7IHF1ZXJ5Lmxlbmd0aFxuICAgICAgPyA8U2VhcmNoUmVzdWx0cyBxdWVyeT17cXVlcnl9IC8+XG4gICAgICA6IDxIb21lIC8+XG4gICAgfVxuICA8L0ZsZXg+XG59XG5cbmZ1bmN0aW9uIEhvbWUgKCkge1xuICBjb25zdCBjaGFubmVscyA9IHVzZUNoYW5uZWxzKClcbiAgY29uc3QgeyBzdWdnZXN0ZWRQdWJsaXNoZXJJZHMsIHVwZGF0ZVN1Z2dlc3RlZFB1Ymxpc2hlcklkcyB9ID0gdXNlQnJhdmVOZXdzKClcbiAgY29uc3QgcHVibGlzaGVyc0xvYWRlZCA9IFB1Ymxpc2hlcnNDYWNoaW5nV3JhcHBlci5nZXRJbnN0YW5jZSgpLmNvbm5lY3RlZFxuICBjb25zdCBjaGFubmVsc0xvYWRlZCA9IENoYW5uZWxzQ2FjaGluZ1dyYXBwZXIuZ2V0SW5zdGFuY2UoKS5jb25uZWN0ZWRcbiAgY29uc3Qgc3VnZ2VzdGlvbnNMb2FkaW5nID0gc3VnZ2VzdGVkUHVibGlzaGVySWRzLmxlbmd0aCA9PT0gMFxuXG4gIGNvbnN0IGNoYW5uZWxOYW1lcyA9IFJlYWN0LnVzZU1lbW8oKCkgPT4gY2hhbm5lbHMubWFwKGMgPT4gYy5jaGFubmVsTmFtZSksXG4gICAgW2NoYW5uZWxzXSlcblxuICAvLyBXaGVuIHdlIG1vdW50IHRoaXMgY29tcG9uZW50LCB1cGRhdGUgdGhlIHN1Z2dlc3RlZCBwdWJsaXNoZXIgaWRzLlxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIHVwZGF0ZVN1Z2dlc3RlZFB1Ymxpc2hlcklkcygpXG4gIH0sIFt1cGRhdGVTdWdnZXN0ZWRQdWJsaXNoZXJJZHNdKVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtwdWJsaXNoZXJzTG9hZGVkID8gPFBvcHVsYXJDYXJvdXNlbCAvPiA6IDxMb2FkaW5nIC8+fVxuICAgICAge3N1Z2dlc3Rpb25zTG9hZGluZyA/IDxMb2FkaW5nIC8+IDogPFN1Z2dlc3Rpb25zQ2Fyb3VzZWwgLz59XG4gICAgICB7Y2hhbm5lbHNMb2FkZWQgPyAoXG4gICAgICAgIDxEaXNjb3ZlclNlY3Rpb24gbmFtZT17Z2V0TG9jYWxlKFMuQlJBVkVfTkVXU19CUk9XU0VfQ0hBTk5FTFNfSEVBREVSKX0+XG4gICAgICAgICAge2NoYW5uZWxOYW1lcy5tYXAoY2hhbm5lbE5hbWUgPT5cbiAgICAgICAgICAgIDxDaGFubmVsQ2FyZCBrZXk9e2NoYW5uZWxOYW1lfSBjaGFubmVsTmFtZT17Y2hhbm5lbE5hbWV9IC8+KX1cbiAgICAgICAgPC9EaXNjb3ZlclNlY3Rpb24+XG4gICAgICApIDogKFxuICAgICAgICA8PlxuICAgICAgICAgIDxEaXNjb3ZlclNlY3Rpb24gbmFtZT17Z2V0TG9jYWxlKFMuQlJBVkVfTkVXU19CUk9XU0VfQ0hBTk5FTFNfSEVBREVSKX0gLz5cbiAgICAgICAgICA8TG9hZGluZyAvPlxuICAgICAgICA8Lz5cbiAgICAgICl9XG4gICAgPC8+XG4gIClcbn1cblxuaW50ZXJmYWNlIFNlYXJjaFJlc3VsdHNQcm9wcyB7XG4gIHF1ZXJ5OiBzdHJpbmdcbn1cbmZ1bmN0aW9uIFNlYXJjaFJlc3VsdHMgKHByb3BzOiBTZWFyY2hSZXN1bHRzUHJvcHMpIHtcbiAgY29uc3Qgc2VhcmNoID0gdXNlU2VhcmNoKHByb3BzLnF1ZXJ5KVxuICBjb25zdCBpc0ZldGNoYWJsZSA9IChzZWFyY2guZmVlZFVybFF1ZXJ5ICE9PSBudWxsKVxuICBjb25zdCBzaG93RmV0Y2hQZXJtaXNzaW9uQnV0dG9uID0gKGlzRmV0Y2hhYmxlICYmICghc2VhcmNoLmNhbkZldGNoVXJsIHx8IHNlYXJjaC5sb2FkaW5nKSlcblxuICBjb25zdCBoYXNBbnlDaGFubmVscyA9IHNlYXJjaC5maWx0ZXJlZENoYW5uZWxzLmxlbmd0aCA+IDBcbiAgY29uc3QgaGFzQW55U291cmNlcyA9IChzZWFyY2guZmlsdGVyZWRTb3VyY2VzLnB1Ymxpc2hlcklkcy5sZW5ndGggPiAwIHx8IHNlYXJjaC5maWx0ZXJlZFNvdXJjZXMuZGlyZWN0Lmxlbmd0aCA+IDApXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge2hhc0FueUNoYW5uZWxzICYmXG4gICAgICA8RGlzY292ZXJTZWN0aW9uIG5hbWU9e2dldExvY2FsZShTLkJSQVZFX05FV1NfQlJPV1NFX0NIQU5ORUxTX0hFQURFUil9PlxuICAgICAgICB7c2VhcmNoLmZpbHRlcmVkQ2hhbm5lbHMubWFwKGMgPT5cbiAgICAgICAgICA8Q2hhbm5lbENhcmQga2V5PXtjLmNoYW5uZWxOYW1lfSBjaGFubmVsTmFtZT17Yy5jaGFubmVsTmFtZX0gLz5cbiAgICAgICAgKX1cbiAgICAgIDwvRGlzY292ZXJTZWN0aW9uPlxuICAgICAgfVxuICAgICAgPERpc2NvdmVyU2VjdGlvbiBuYW1lPXtnZXRMb2NhbGUoUy5CUkFWRV9ORVdTX0FMTF9TT1VSQ0VTX0hFQURFUil9PlxuICAgICAgICB7c2VhcmNoLmZpbHRlcmVkU291cmNlcy5wdWJsaXNoZXJJZHMubWFwKHB1Ymxpc2hlcklkID0+XG4gICAgICAgICAgPFB1Ymxpc2hlckNhcmQga2V5PXtwdWJsaXNoZXJJZH0gcHVibGlzaGVySWQ9e3B1Ymxpc2hlcklkfSAvPlxuICAgICAgICApfVxuICAgICAgICB7c2hvd0ZldGNoUGVybWlzc2lvbkJ1dHRvbiAmJlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8QnV0dG9uIHNpemU9J3RpbnknIGtpbmQ9J3BsYWluLWZhaW50JyBvbkNsaWNrPXsoKSA9PiBzZWFyY2guc2V0Q2FuRmV0Y2hVcmwodHJ1ZSl9IGlzTG9hZGluZz17c2VhcmNoLmxvYWRpbmd9PlxuICAgICAgICAgICAgICB7Z2V0TG9jYWxlKFMuQlJBVkVfTkVXU19ESVJFQ1RfU0VBUkNIX0JVVFRPTikucmVwbGFjZSgnJDEnLCBzZWFyY2guZmVlZFVybFF1ZXJ5ID8/ICcnKX1cbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICB9XG4gICAgICAgIHtzZWFyY2guZmlsdGVyZWRTb3VyY2VzLmRpcmVjdC5tYXAociA9PlxuICAgICAgICAgIDxEaXJlY3RQdWJsaXNoZXJDYXJkIGtleT17ci5mZWVkVXJsLnVybH0gZmVlZFVybD17ci5mZWVkVXJsLnVybH0gdGl0bGU9e3IuZmVlZFRpdGxlfSAvPil9XG4gICAgICAgIHshc2VhcmNoLmNhblF1ZXJ5RmlsdGVyU291cmNlcyAmJlxuICAgICAgICAgIGdldExvY2FsZShTLkJSQVZFX05FV1NfU0VBUkNIX1FVRVJZX1RPT19TSE9SVClcbiAgICAgICAgfVxuICAgICAgICB7aXNGZXRjaGFibGUgJiYgIWhhc0FueVNvdXJjZXMgJiYgIXNob3dGZXRjaFBlcm1pc3Npb25CdXR0b24gJiZcbiAgICAgICAgICBnZXRMb2NhbGUoUy5CUkFWRV9ORVdTX0RJUkVDVF9TRUFSQ0hfTk9fUkVTVUxUUykucmVwbGFjZSgnJDEnLCBzZWFyY2guZmVlZFVybFF1ZXJ5ID8/ICcnKVxuICAgICAgICB9XG4gICAgICA8L0Rpc2NvdmVyU2VjdGlvbj5cbiAgICA8Lz5cbiAgKVxufVxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDI2IFRoZSBCcmF2ZSBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuLy8gTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBmaWxlLFxuLy8gWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHBzOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uXG5cbmltcG9ydCB7XG4gIENoYW5uZWwsXG4gIFB1Ymxpc2hlcixcbiAgUHVibGlzaGVyVHlwZSxcbiAgaXNEaXJlY3RGZWVkLFxuICBpc1B1Ymxpc2hlckVuYWJsZWRcbn0gZnJvbSAnLi4vc2hhcmVkL2FwaSdcblxuLy8gT1BNTCAoaHR0cHM6Ly9vcG1sLm9yZy9zcGVjMi5vcG1sKSBpcyB0aGUgZGUtZmFjdG8gc3RhbmRhcmQgZm9yIGV4Y2hhbmdpbmdcbi8vIGZlZWQgc3Vic2NyaXB0aW9uIGxpc3RzLiBXZSB1c2Ugc3RhbmRhcmQgYHR5cGU9XCJyc3NcImAgb3V0bGluZXMgZm9yIGZlZWRzIHNvXG4vLyB0aGUgZmlsZSBpcyBwb3J0YWJsZSB0byBvdGhlciByZWFkZXJzLCBwbHVzIHR3byBCcmF2ZS1zcGVjaWZpYyBleHRlbnNpb25zXG4vLyB0aGF0IG90aGVyIHJlYWRlcnMgaWdub3JlIGJ1dCB0aGF0IGxldCBzdWJzY3JpcHRpb25zIHJvdW5kLXRyaXAgbG9zc2xlc3NseTpcbi8vICAtIGB0eXBlPVwiYnJhdmUtY2hhbm5lbFwiYDogYSBCcmF2ZSBOZXdzIHRvcGljIGNoYW5uZWwgKGhhcyBubyBmZWVkIFVSTCkuXG4vLyAgLSBgdHlwZT1cImJyYXZlLXB1Ymxpc2hlclwiYDogYSBCcmF2ZSBOZXdzIHB1Ymxpc2hlciB0aGF0IGhhcyBubyBmZWVkIFVSTCBhbmRcbi8vICAgIGNhbiBvbmx5IGJlIHJlc29sdmVkIGJ5IGl0cyBwdWJsaXNoZXIgaWQuXG4vLyBFdmVyeSBjb21iaW5lZC1zb3VyY2UgcHVibGlzaGVyIG91dGxpbmUgYWxzbyBjYXJyaWVzIGBicmF2ZVB1Ymxpc2hlcklkYCBzbyBpdFxuLy8gcmUtc3Vic2NyaWJlcyB0byB0aGUgZXhhY3QgcHVibGlzaGVyIG9uIGltcG9ydCwgZXZlbiB3aGVuIGEgZmVlZCBVUkwgbWF0Y2hlc1xuLy8gbm90aGluZyAob3IgdGhlIHB1Ymxpc2hlciBoYXMgbm8gZmVlZCBVUkwgYXQgYWxsKS5cbmNvbnN0IEJSQVZFX0NIQU5ORUxfVFlQRSA9ICdicmF2ZS1jaGFubmVsJ1xuY29uc3QgQlJBVkVfUFVCTElTSEVSX1RZUEUgPSAnYnJhdmUtcHVibGlzaGVyJ1xuY29uc3QgQlJBVkVfUFVCTElTSEVSX0lEX0FUVFIgPSAnYnJhdmVQdWJsaXNoZXJJZCdcblxuZXhwb3J0IGludGVyZmFjZSBPcG1sSXRlbSB7XG4gIHRpdGxlOiBzdHJpbmdcbiAgeG1sVXJsPzogc3RyaW5nXG4gIGh0bWxVcmw/OiBzdHJpbmdcbiAgLy8gVGhlIEJyYXZlIE5ld3MgcHVibGlzaGVyIGlkLCB3aGVuIHRoZSBzb3VyY2UgaXMgYSBrbm93biBwdWJsaXNoZXIuIEFic2VudFxuICAvLyBmb3IgZGlyZWN0IGZlZWRzLCB3aG9zZSBpZCBpcyBhIHJhbmRvbSwgcHJvZmlsZS1sb2NhbCBVVUlELlxuICBwdWJsaXNoZXJJZD86IHN0cmluZ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE9wbWxEYXRhIHtcbiAgaXRlbXM6IE9wbWxJdGVtW11cbiAgY2hhbm5lbHM6IHN0cmluZ1tdXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSW1wb3J0UmVzdWx0IHtcbiAgc3Vic2NyaWJlZFB1Ymxpc2hlcnM6IG51bWJlclxuICBhZGRlZERpcmVjdEZlZWRzOiBudW1iZXJcbiAgc3Vic2NyaWJlZENoYW5uZWxzOiBudW1iZXJcbiAgLy8gSXRlbXMgdGhhdCB3ZXJlIGFscmVhZHkgc3Vic2NyaWJlZCwgZHVwbGljYXRlcywgb3IgY291bGRuJ3QgYmUgcmVzb2x2ZWQuXG4gIHNraXBwZWQ6IG51bWJlclxufVxuXG4vLyBUaGUgc2lkZSBlZmZlY3RzIGltcG9ydCBwZXJmb3JtcywgaW5qZWN0ZWQgc28gdGhlIHB1cmUgbWF0Y2hpbmcgbG9naWMgY2FuIGJlXG4vLyB1bml0IHRlc3RlZCB3aXRob3V0IGEgTW9qbyBiYWNrZW5kLlxuZXhwb3J0IGludGVyZmFjZSBJbXBvcnRBY3Rpb25zIHtcbiAgLy8gVGhlIGZ1bGwgcHVibGlzaGVyIGNhdGFsb2cgKGFsbCBrbm93biBwdWJsaXNoZXJzKSwgdXNlZCBmb3IgbWF0Y2hpbmcuXG4gIHB1Ymxpc2hlcnM6IFB1Ymxpc2hlcltdXG4gIC8vIEFsbCBjaGFubmVscywgdXNlZCB0byB2YWxpZGF0ZSBjaGFubmVsIG5hbWVzIGFnYWluc3QgdGhlIGN1cnJlbnQgbG9jYWxlLlxuICBjaGFubmVsczogQ2hhbm5lbFtdXG4gIGxvY2FsZTogc3RyaW5nXG4gIGZvbGxvd1B1Ymxpc2hlcjogKHB1Ymxpc2hlcklkOiBzdHJpbmcpID0+IHZvaWRcbiAgYWRkRGlyZWN0RmVlZDogKHVybDogc3RyaW5nKSA9PiBQcm9taXNlPHVua25vd24+XG4gIHN1YnNjcmliZUNoYW5uZWw6IChsb2NhbGU6IHN0cmluZywgY2hhbm5lbE5hbWU6IHN0cmluZykgPT4gdm9pZFxufVxuXG4vLyBTZXJpYWxpemVzIHN1YnNjcmlwdGlvbnMgaW50byBhbiBPUE1MIDIuMCBkb2N1bWVudC5cbmV4cG9ydCBmdW5jdGlvbiBzZXJpYWxpemVPcG1sKGRhdGE6IE9wbWxEYXRhKTogc3RyaW5nIHtcbiAgY29uc3QgZG9jID0gZG9jdW1lbnQuaW1wbGVtZW50YXRpb24uY3JlYXRlRG9jdW1lbnQobnVsbCwgJ29wbWwnLCBudWxsKVxuICBjb25zdCBvcG1sID0gZG9jLmRvY3VtZW50RWxlbWVudFxuICBvcG1sLnNldEF0dHJpYnV0ZSgndmVyc2lvbicsICcyLjAnKVxuXG4gIGNvbnN0IGhlYWQgPSBkb2MuY3JlYXRlRWxlbWVudCgnaGVhZCcpXG4gIGNvbnN0IHRpdGxlID0gZG9jLmNyZWF0ZUVsZW1lbnQoJ3RpdGxlJylcbiAgdGl0bGUudGV4dENvbnRlbnQgPSAnQnJhdmUgTmV3cyBzdWJzY3JpcHRpb25zJ1xuICBoZWFkLmFwcGVuZENoaWxkKHRpdGxlKVxuICBvcG1sLmFwcGVuZENoaWxkKGhlYWQpXG5cbiAgY29uc3QgYm9keSA9IGRvYy5jcmVhdGVFbGVtZW50KCdib2R5JylcbiAgb3BtbC5hcHBlbmRDaGlsZChib2R5KVxuXG4gIGZvciAoY29uc3QgaXRlbSBvZiBkYXRhLml0ZW1zKSB7XG4gICAgY29uc3Qgb3V0bGluZSA9IGRvYy5jcmVhdGVFbGVtZW50KCdvdXRsaW5lJylcbiAgICBvdXRsaW5lLnNldEF0dHJpYnV0ZSgndGV4dCcsIGl0ZW0udGl0bGUpXG4gICAgb3V0bGluZS5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgaXRlbS50aXRsZSlcbiAgICBpZiAoaXRlbS54bWxVcmwpIHtcbiAgICAgIG91dGxpbmUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3JzcycpXG4gICAgICBvdXRsaW5lLnNldEF0dHJpYnV0ZSgneG1sVXJsJywgaXRlbS54bWxVcmwpXG4gICAgfSBlbHNlIHtcbiAgICAgIG91dGxpbmUuc2V0QXR0cmlidXRlKCd0eXBlJywgQlJBVkVfUFVCTElTSEVSX1RZUEUpXG4gICAgfVxuICAgIGlmIChpdGVtLmh0bWxVcmwpIHtcbiAgICAgIG91dGxpbmUuc2V0QXR0cmlidXRlKCdodG1sVXJsJywgaXRlbS5odG1sVXJsKVxuICAgIH1cbiAgICBpZiAoaXRlbS5wdWJsaXNoZXJJZCkge1xuICAgICAgb3V0bGluZS5zZXRBdHRyaWJ1dGUoQlJBVkVfUFVCTElTSEVSX0lEX0FUVFIsIGl0ZW0ucHVibGlzaGVySWQpXG4gICAgfVxuICAgIGJvZHkuYXBwZW5kQ2hpbGQob3V0bGluZSlcbiAgfVxuXG4gIGlmIChkYXRhLmNoYW5uZWxzLmxlbmd0aCkge1xuICAgIGNvbnN0IGdyb3VwID0gZG9jLmNyZWF0ZUVsZW1lbnQoJ291dGxpbmUnKVxuICAgIGdyb3VwLnNldEF0dHJpYnV0ZSgndGV4dCcsICdDaGFubmVscycpXG4gICAgZ3JvdXAuc2V0QXR0cmlidXRlKCd0aXRsZScsICdDaGFubmVscycpXG4gICAgZm9yIChjb25zdCBjaGFubmVsTmFtZSBvZiBkYXRhLmNoYW5uZWxzKSB7XG4gICAgICBjb25zdCBvdXRsaW5lID0gZG9jLmNyZWF0ZUVsZW1lbnQoJ291dGxpbmUnKVxuICAgICAgb3V0bGluZS5zZXRBdHRyaWJ1dGUoJ3RleHQnLCBjaGFubmVsTmFtZSlcbiAgICAgIG91dGxpbmUuc2V0QXR0cmlidXRlKCd0aXRsZScsIGNoYW5uZWxOYW1lKVxuICAgICAgb3V0bGluZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCBCUkFWRV9DSEFOTkVMX1RZUEUpXG4gICAgICBncm91cC5hcHBlbmRDaGlsZChvdXRsaW5lKVxuICAgIH1cbiAgICBib2R5LmFwcGVuZENoaWxkKGdyb3VwKVxuICB9XG5cbiAgY29uc3QgeG1sID0gbmV3IFhNTFNlcmlhbGl6ZXIoKS5zZXJpYWxpemVUb1N0cmluZyhkb2MpXG4gIHJldHVybiBgPD94bWwgdmVyc2lvbj1cIjEuMFwiIGVuY29kaW5nPVwiVVRGLThcIj8+XFxuJHt4bWx9YFxufVxuXG4vLyBUaGUgTmV3IFRhYiBQYWdlIGVuZm9yY2VzIFRydXN0ZWQgVHlwZXMsIGFuZCBpdHMgYGRlZmF1bHRgIHBvbGljeSBoYXMgbm9cbi8vIGBjcmVhdGVIVE1MYCwgc28gRE9NUGFyc2VyLnBhcnNlRnJvbVN0cmluZyByZWplY3RzIGEgcmF3IHN0cmluZy4gUm91dGUgdGhlXG4vLyBPUE1MIHRleHQgdGhyb3VnaCBhIGRlZGljYXRlZCBwb2xpY3kgKGFsbG93LWxpc3RlZCBpbiB0aGUgTmV3IFRhYiBQYWdlJ3Ncbi8vIHRydXN0ZWQtdHlwZXMgQ1NQKS4gVGhlIHZhbHVlIGlzIG9ubHkgZXZlciBwYXJzZWQgYXMgWE1MIGFuZCByZWFkIGZvclxuLy8gYXR0cmlidXRlIHZhbHVlcyAtIGl0IGlzIG5ldmVyIGluc2VydGVkIGludG8gdGhlIGxpdmUgZG9jdW1lbnQgYXMgSFRNTC5cbmxldCBvcG1sVHJ1c3RlZFR5cGVzUG9saWN5OiB7IGNyZWF0ZUhUTUwoaW5wdXQ6IHN0cmluZyk6IHN0cmluZyB9IHwgdW5kZWZpbmVkXG5mdW5jdGlvbiB0b1RydXN0ZWRYbWwoeG1sOiBzdHJpbmcpOiBzdHJpbmcge1xuICBjb25zdCB0cnVzdGVkVHlwZXMgPSAod2luZG93IGFzIGFueSkudHJ1c3RlZFR5cGVzXG4gIC8vIFRoaXMgaXMgdGhlIGNhc2UgaW4gdGVzdHMuXG4gIGlmICghdHJ1c3RlZFR5cGVzKSB7XG4gICAgcmV0dXJuIHhtbFxuICB9XG5cbiAgaWYgKCFvcG1sVHJ1c3RlZFR5cGVzUG9saWN5KSB7XG4gICAgLy8gTm90ZTogVGhpcyBwb2xpY3kgcGVyZm9ybXMgbm8gc2FuaXRpemF0aW9uLCBzbyB0aGUgcmVzdWx0cyBmcm9tIGl0IHNob3VsZCBuZXZlciBiZSBpbnNlcnRlZFxuICAgIC8vIGludG8gdGhlIGxpdmUgZG9jdW1lbnQgYXMgSFRNTC4gSXQgaXMgb25seSB1c2VkIGZvciBwYXJzaW5nIE9QTUwgZG9jdW1lbnRzLlxuICAgIG9wbWxUcnVzdGVkVHlwZXNQb2xpY3kgPSB0cnVzdGVkVHlwZXMuY3JlYXRlUG9saWN5KCdicmF2ZS1uZXdzLW9wbWwnLCB7XG4gICAgICBjcmVhdGVIVE1MOiAoaW5wdXQ6IHN0cmluZykgPT4gaW5wdXRcbiAgICB9KVxuICB9XG4gIHJldHVybiBvcG1sVHJ1c3RlZFR5cGVzUG9saWN5IS5jcmVhdGVIVE1MKHhtbClcbn1cblxuLy8gUGFyc2VzIGFuIE9QTUwgZG9jdW1lbnQgaW50byBmZWVkcy9wdWJsaXNoZXJzIGFuZCBjaGFubmVscy4gVGhyb3dzIGlmIHRoZVxuLy8gZG9jdW1lbnQgaXNuJ3QgdmFsaWQgWE1MLlxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlT3BtbCh4bWw6IHN0cmluZyk6IE9wbWxEYXRhIHtcbiAgY29uc3QgZG9jID0gbmV3IERPTVBhcnNlcigpLnBhcnNlRnJvbVN0cmluZyh0b1RydXN0ZWRYbWwoeG1sKSwgJ3RleHQveG1sJylcbiAgaWYgKGRvYy5xdWVyeVNlbGVjdG9yKCdwYXJzZXJlcnJvcicpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gcGFyc2UgT1BNTCBkb2N1bWVudCcpXG4gIH1cblxuICBjb25zdCBpdGVtczogT3BtbEl0ZW1bXSA9IFtdXG4gIGNvbnN0IGNoYW5uZWxzOiBzdHJpbmdbXSA9IFtdXG5cbiAgLy8gQSBmbGF0IHdhbGsgaGFuZGxlcyBib3RoIHRvcC1sZXZlbCBvdXRsaW5lcyBhbmQgb3V0bGluZXMgbmVzdGVkIHVuZGVyXG4gIC8vIGNhdGVnb3J5IGdyb3VwcyAoZS5nLiB0aGUgXCJDaGFubmVsc1wiIGdyb3VwIHdlIGVtaXQsIG9yIGNhdGVnb3J5IGZvbGRlcnNcbiAgLy8gcHJvZHVjZWQgYnkgb3RoZXIgcmVhZGVycykuXG4gIGZvciAoY29uc3Qgb3V0bGluZSBvZiBkb2MucXVlcnlTZWxlY3RvckFsbCgnb3V0bGluZScpKSB7XG4gICAgY29uc3QgdHlwZSA9IG91dGxpbmUuZ2V0QXR0cmlidXRlKCd0eXBlJylcbiAgICBjb25zdCB0aXRsZSA9XG4gICAgICBvdXRsaW5lLmdldEF0dHJpYnV0ZSgndGl0bGUnKSB8fCBvdXRsaW5lLmdldEF0dHJpYnV0ZSgndGV4dCcpIHx8ICcnXG5cbiAgICBpZiAodHlwZSA9PT0gQlJBVkVfQ0hBTk5FTF9UWVBFKSB7XG4gICAgICBpZiAodGl0bGUpIHtcbiAgICAgICAgY2hhbm5lbHMucHVzaCh0aXRsZSlcbiAgICAgIH1cbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgY29uc3QgeG1sVXJsID0gb3V0bGluZS5nZXRBdHRyaWJ1dGUoJ3htbFVybCcpIHx8IHVuZGVmaW5lZFxuICAgIGNvbnN0IHB1Ymxpc2hlcklkID1cbiAgICAgIG91dGxpbmUuZ2V0QXR0cmlidXRlKEJSQVZFX1BVQkxJU0hFUl9JRF9BVFRSKSB8fCB1bmRlZmluZWRcblxuICAgIC8vIE9ubHkgb3V0bGluZXMgdGhhdCByZWZlcmVuY2UgYSBmZWVkIG9yIGEgQnJhdmUgcHVibGlzaGVyIGFyZVxuICAgIC8vIHN1YnNjcmlwdGlvbnM7IGNhdGVnb3J5L2dyb3VwaW5nIG91dGxpbmVzIGFyZSBpZ25vcmVkLlxuICAgIGlmICgheG1sVXJsICYmICFwdWJsaXNoZXJJZCkge1xuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBpdGVtcy5wdXNoKHtcbiAgICAgIHRpdGxlLFxuICAgICAgeG1sVXJsLFxuICAgICAgaHRtbFVybDogb3V0bGluZS5nZXRBdHRyaWJ1dGUoJ2h0bWxVcmwnKSB8fCB1bmRlZmluZWQsXG4gICAgICBwdWJsaXNoZXJJZFxuICAgIH0pXG4gIH1cblxuICByZXR1cm4geyBpdGVtcywgY2hhbm5lbHMgfVxufVxuXG4vLyBNYXBzIGEgc3Vic2NyaWJlZCBwdWJsaXNoZXIgdG8gYW4gT1BNTCBvdXRsaW5lLlxuZXhwb3J0IGZ1bmN0aW9uIHB1Ymxpc2hlclRvT3BtbEl0ZW0ocHVibGlzaGVyOiBQdWJsaXNoZXIpOiBPcG1sSXRlbSB7XG4gIHJldHVybiB7XG4gICAgdGl0bGU6IHB1Ymxpc2hlci5wdWJsaXNoZXJOYW1lLFxuICAgIHhtbFVybDogcHVibGlzaGVyLmZlZWRTb3VyY2U/LnVybCB8fCB1bmRlZmluZWQsXG4gICAgaHRtbFVybDogcHVibGlzaGVyLnNpdGVVcmw/LnVybCB8fCB1bmRlZmluZWQsXG4gICAgLy8gQSBkaXJlY3QgZmVlZCdzIGlkIGlzIGEgcmFuZG9tLCBwZXItcHJvZmlsZSBVVUlEIHRoYXQgaXMgbWVhbmluZ2xlc3NcbiAgICAvLyBlbHNld2hlcmUsIHNvIG9ubHkgY29tYmluZWQgcHVibGlzaGVycyBleHBvcnQgdGhlaXIgaWQuXG4gICAgcHVibGlzaGVySWQ6XG4gICAgICBwdWJsaXNoZXIudHlwZSA9PT0gUHVibGlzaGVyVHlwZS5DT01CSU5FRF9TT1VSQ0VcbiAgICAgICAgPyBwdWJsaXNoZXIucHVibGlzaGVySWRcbiAgICAgICAgOiB1bmRlZmluZWRcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3Vic2NyaWJlZENoYW5uZWxOYW1lcyhcbiAgY2hhbm5lbHM6IENoYW5uZWxbXSxcbiAgbG9jYWxlOiBzdHJpbmdcbik6IHN0cmluZ1tdIHtcbiAgcmV0dXJuIGNoYW5uZWxzXG4gICAgLmZpbHRlcigoYykgPT4gYy5zdWJzY3JpYmVkTG9jYWxlcy5pbmNsdWRlcyhsb2NhbGUpKVxuICAgIC5tYXAoKGMpID0+IGMuY2hhbm5lbE5hbWUpXG59XG5cbi8vIEJ1aWxkcyB0aGUgT1BNTCBwYXlsb2FkIGZyb20gdGhlIGN1cnJlbnQgc3Vic2NyaXB0aW9ucy5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZEV4cG9ydERhdGEoXG4gIHB1Ymxpc2hlcnM6IFB1Ymxpc2hlcltdLFxuICBjaGFubmVsczogQ2hhbm5lbFtdLFxuICBsb2NhbGU6IHN0cmluZ1xuKTogT3BtbERhdGEge1xuICByZXR1cm4ge1xuICAgIGl0ZW1zOiBwdWJsaXNoZXJzLmZpbHRlcihpc1B1Ymxpc2hlckVuYWJsZWQpLm1hcChwdWJsaXNoZXJUb09wbWxJdGVtKSxcbiAgICBjaGFubmVsczogZ2V0U3Vic2NyaWJlZENoYW5uZWxOYW1lcyhjaGFubmVscywgbG9jYWxlKVxuICB9XG59XG5cbi8vIFNlcmlhbGl6ZXMgdGhlIGN1cnJlbnQgc3Vic2NyaXB0aW9ucyBhbmQgdHJpZ2dlcnMgYSBmaWxlIGRvd25sb2FkLlxuZXhwb3J0IGZ1bmN0aW9uIGRvd25sb2FkT3BtbChcbiAgcHVibGlzaGVyczogUHVibGlzaGVyW10sXG4gIGNoYW5uZWxzOiBDaGFubmVsW10sXG4gIGxvY2FsZTogc3RyaW5nXG4pIHtcbiAgY29uc3QgeG1sID0gc2VyaWFsaXplT3BtbChidWlsZEV4cG9ydERhdGEocHVibGlzaGVycywgY2hhbm5lbHMsIGxvY2FsZSkpXG4gIGNvbnN0IGJsb2IgPSBuZXcgQmxvYihbeG1sXSwgeyB0eXBlOiAndGV4dC94LW9wbWwnIH0pXG4gIGNvbnN0IHVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYilcblxuICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXG4gIGEuZG93bmxvYWQgPSBgYnJhdmUtbmV3cy1zdWJzY3JpcHRpb25zLSR7bmV3IERhdGUoKS50b0lTT1N0cmluZygpfS5vcG1sYFxuICBhLmhyZWYgPSB1cmxcblxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGEpXG4gIGEuY2xpY2soKVxuICBhLnJlbW92ZSgpXG5cbiAgVVJMLnJldm9rZU9iamVjdFVSTCh1cmwpXG59XG5cbi8vIE5vcm1hbGl6ZXMgYSBmZWVkIFVSTCB0aGUgc2FtZSB3YXkgdGhlIHNlYXJjaCBib3ggZG9lcyAodXNlU2VhcmNoLnRzKSwgc28gb3VyXG4vLyBkdXBsaWNhdGUvcHVibGlzaGVyIG1hdGNoaW5nIGFncmVlcyB3aXRoIGhvdyBmZWVkcyBhcmUgYWRkZWQgZWxzZXdoZXJlLlxuZnVuY3Rpb24gbm9ybWFsaXplRmVlZFVybChyYXc6IHN0cmluZyk6IHN0cmluZyB8IG51bGwge1xuICBsZXQgdXJsID0gcmF3LnRyaW0oKVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiBudWxsXG4gIH1cbiAgaWYgKCF1cmwuaW5jbHVkZXMoJzovLycpKSB7XG4gICAgdXJsID0gJ2h0dHBzOi8vJyArIHVybFxuICB9XG4gIHRyeSB7XG4gICAgY29uc3QgcGFyc2VkID0gbmV3IFVSTCh1cmwpXG4gICAgaWYgKCFbJ2h0dHA6JywgJ2h0dHBzOiddLmluY2x1ZGVzKHBhcnNlZC5wcm90b2NvbCkpIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG4gIHJldHVybiB1cmxcbn1cblxuLy8gSW1wb3J0cyBhbiBPUE1MIGRvY3VtZW50LCBzdWJzY3JpYmluZyB0byBtYXRjaGluZyBwdWJsaXNoZXJzLCBhZGRpbmcgbmV3XG4vLyBkaXJlY3QgZmVlZHMgKHdpdGhvdXQgZHVwbGljYXRpbmcgZXhpc3Rpbmcgb25lcyksIGFuZCByZS1zdWJzY3JpYmluZyBjaGFubmVscy5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpbXBvcnRPcG1sKFxuICB4bWw6IHN0cmluZyxcbiAgYWN0aW9uczogSW1wb3J0QWN0aW9uc1xuKTogUHJvbWlzZTxJbXBvcnRSZXN1bHQ+IHtcbiAgY29uc3QgeyBpdGVtcywgY2hhbm5lbHMgfSA9IHBhcnNlT3BtbCh4bWwpXG5cbiAgY29uc3QgcmVzdWx0OiBJbXBvcnRSZXN1bHQgPSB7XG4gICAgc3Vic2NyaWJlZFB1Ymxpc2hlcnM6IDAsXG4gICAgYWRkZWREaXJlY3RGZWVkczogMCxcbiAgICBzdWJzY3JpYmVkQ2hhbm5lbHM6IDAsXG4gICAgc2tpcHBlZDogMFxuICB9XG5cbiAgY29uc3QgcHVibGlzaGVyc0J5SWQgPSBuZXcgTWFwKFxuICAgIGFjdGlvbnMucHVibGlzaGVycy5tYXAoKHApID0+IFtwLnB1Ymxpc2hlcklkLCBwXSlcbiAgKVxuICAvLyBUcmFjayBleGlzdGluZyBkaXJlY3QgZmVlZCBVUkxzIHBsdXMgYW55IHdlIGFkZCBkdXJpbmcgdGhpcyBpbXBvcnQsIHNvIHdlXG4gIC8vIG5ldmVyIGNyZWF0ZSBkdXBsaWNhdGVzLiBUaGUgYnJvd3NlciBhbHNvIGRlZHVwZXMgYnkgVVJMIGFzIGEgc2FmZXR5IG5ldC5cbiAgY29uc3QgZGlyZWN0RmVlZFVybHMgPSBuZXcgU2V0KFxuICAgIGFjdGlvbnMucHVibGlzaGVyc1xuICAgICAgLmZpbHRlcihpc0RpcmVjdEZlZWQpXG4gICAgICAubWFwKChwKSA9PiBwLmZlZWRTb3VyY2U/LnVybClcbiAgICAgIC5maWx0ZXIoKHUpOiB1IGlzIHN0cmluZyA9PiAhIXUpXG4gIClcblxuICBjb25zdCBzdWJzY3JpYmVQdWJsaXNoZXIgPSAocHVibGlzaGVyOiBQdWJsaXNoZXIpID0+IHtcbiAgICBpZiAoaXNQdWJsaXNoZXJFbmFibGVkKHB1Ymxpc2hlcikpIHtcbiAgICAgIHJlc3VsdC5za2lwcGVkKytcbiAgICB9IGVsc2Uge1xuICAgICAgYWN0aW9ucy5mb2xsb3dQdWJsaXNoZXIocHVibGlzaGVyLnB1Ymxpc2hlcklkKVxuICAgICAgcmVzdWx0LnN1YnNjcmliZWRQdWJsaXNoZXJzKytcbiAgICB9XG4gIH1cblxuICBjb25zdCBwZW5kaW5nOiBBcnJheTxQcm9taXNlPHVua25vd24+PiA9IFtdXG5cbiAgZm9yIChjb25zdCBpdGVtIG9mIGl0ZW1zKSB7XG4gICAgLy8gMS4gUHJlZmVyIGFuIGV4YWN0IHB1Ymxpc2hlciBpZCBtYXRjaC4gVGhpcyBpcyB0aGUgb25seSB3YXkgdG8gcmVzb2x2ZSBhXG4gICAgLy8gICAgcHVibGlzaGVyIHRoYXQgaGFzIG5vIGZlZWQgVVJMLiBBbiB1bmtub3duIGlkIChlLmcuIGEgc3RhbGUgY2F0YWxvZylcbiAgICAvLyAgICBmYWxscyB0aHJvdWdoIHRvIFVSTC1iYXNlZCBoYW5kbGluZy5cbiAgICBpZiAoaXRlbS5wdWJsaXNoZXJJZCkge1xuICAgICAgY29uc3QgcHVibGlzaGVyID0gcHVibGlzaGVyc0J5SWQuZ2V0KGl0ZW0ucHVibGlzaGVySWQpXG4gICAgICBpZiAocHVibGlzaGVyKSB7XG4gICAgICAgIHN1YnNjcmliZVB1Ymxpc2hlcihwdWJsaXNoZXIpXG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgdXJsID0gaXRlbS54bWxVcmwgPyBub3JtYWxpemVGZWVkVXJsKGl0ZW0ueG1sVXJsKSA6IG51bGxcbiAgICBpZiAoIXVybCkge1xuICAgICAgcmVzdWx0LnNraXBwZWQrK1xuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICAvLyAyLiBQcmVmZXIgYSBrbm93biBwdWJsaXNoZXIgd2hvc2UgZmVlZCBVUkwgbWF0Y2hlcyBvdmVyIGNyZWF0aW5nIGFcbiAgICAvLyAgICByZWR1bmRhbnQgZGlyZWN0IGZlZWQgKG1pcnJvcnMgdXNlU2VhcmNoLnRzKS5cbiAgICBjb25zdCBwdWJsaXNoZXJNYXRjaCA9IGFjdGlvbnMucHVibGlzaGVycy5maW5kKFxuICAgICAgKHApID0+IHAuZmVlZFNvdXJjZT8udXJsID09PSB1cmxcbiAgICApXG4gICAgaWYgKHB1Ymxpc2hlck1hdGNoKSB7XG4gICAgICBzdWJzY3JpYmVQdWJsaXNoZXIocHVibGlzaGVyTWF0Y2gpXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIC8vIDMuIE90aGVyd2lzZSBhZGQgYSBkaXJlY3QgZmVlZCwgc2tpcHBpbmcgZHVwbGljYXRlcy5cbiAgICBpZiAoZGlyZWN0RmVlZFVybHMuaGFzKHVybCkpIHtcbiAgICAgIHJlc3VsdC5za2lwcGVkKytcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuICAgIGRpcmVjdEZlZWRVcmxzLmFkZCh1cmwpXG4gICAgcGVuZGluZy5wdXNoKFByb21pc2UucmVzb2x2ZShhY3Rpb25zLmFkZERpcmVjdEZlZWQodXJsKSkpXG4gICAgcmVzdWx0LmFkZGVkRGlyZWN0RmVlZHMrK1xuICB9XG5cbiAgY29uc3QgY2hhbm5lbEJ5TmFtZSA9IG5ldyBNYXAoYWN0aW9ucy5jaGFubmVscy5tYXAoKGMpID0+IFtjLmNoYW5uZWxOYW1lLCBjXSkpXG4gIGZvciAoY29uc3QgY2hhbm5lbE5hbWUgb2YgY2hhbm5lbHMpIHtcbiAgICBjb25zdCBjaGFubmVsID0gY2hhbm5lbEJ5TmFtZS5nZXQoY2hhbm5lbE5hbWUpXG4gICAgLy8gQ2hhbm5lbHMgYXJlIHBlci1sb2NhbGU7IG9ubHkgc3Vic2NyaWJlIG9uZXMgdGhhdCBleGlzdCBpbiB0aGUgY3VycmVudFxuICAgIC8vIGxvY2FsZSBhbmQgYXJlbid0IGFscmVhZHkgc3Vic2NyaWJlZC5cbiAgICBpZiAoIWNoYW5uZWwgfHwgY2hhbm5lbC5zdWJzY3JpYmVkTG9jYWxlcy5pbmNsdWRlcyhhY3Rpb25zLmxvY2FsZSkpIHtcbiAgICAgIHJlc3VsdC5za2lwcGVkKytcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuICAgIGFjdGlvbnMuc3Vic2NyaWJlQ2hhbm5lbChhY3Rpb25zLmxvY2FsZSwgY2hhbm5lbE5hbWUpXG4gICAgcmVzdWx0LnN1YnNjcmliZWRDaGFubmVscysrXG4gIH1cblxuICBhd2FpdCBQcm9taXNlLmFsbChwZW5kaW5nKVxuICByZXR1cm4gcmVzdWx0XG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjYgVGhlIEJyYXZlIEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4vLyBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIGZpbGUsXG4vLyBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cHM6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy5cblxuaW1wb3J0IEFsZXJ0IGZyb20gJ0BicmF2ZS9sZW8vcmVhY3QvYWxlcnQnXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BicmF2ZS9sZW8vcmVhY3QvYnV0dG9uJ1xuaW1wb3J0IHsgc3BhY2luZyB9IGZyb20gJ0BicmF2ZS9sZW8vdG9rZW5zL2Nzcy92YXJpYWJsZXMnXG5pbXBvcnQgeyBmb3JtYXRMb2NhbGUsIGdldExvY2FsZSB9IGZyb20gJyR3ZWItY29tbW9uL2xvY2FsZSdcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCBnZXRCcmF2ZU5ld3NDb250cm9sbGVyIGZyb20gJy4uL3NoYXJlZC9hcGknXG5pbXBvcnQgeyBDaGFubmVsc0NhY2hpbmdXcmFwcGVyIH0gZnJvbSAnLi4vc2hhcmVkL2NoYW5uZWxzQ2FjaGUnXG5pbXBvcnQgeyB1c2VCcmF2ZU5ld3MgfSBmcm9tICcuLi9zaGFyZWQvQ29udGV4dCdcbmltcG9ydCB7IFB1Ymxpc2hlcnNDYWNoaW5nV3JhcHBlciB9IGZyb20gJy4uL3NoYXJlZC9wdWJsaXNoZXJzQ2FjaGUnXG5pbXBvcnQgeyBkb3dubG9hZE9wbWwsIGltcG9ydE9wbWwgfSBmcm9tICcuL29wbWwnXG5cbmNvbnN0IExpbmtzID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAke3NwYWNpbmcubX07XG4gIGZsZXgtd3JhcDogd3JhcDtcblxuICAmIGxlby1idXR0b24ge1xuICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIH1cbmBcblxuLy8gVGhlIGN1c3RvbWl6ZSBkaWFsb2cgaGFzIG5vIHRvYXN0IGhvc3QsIHNvIHNob3cgdGhlIGltcG9ydCByZXN1bHQgYXMgYVxuLy8gZml4ZWQtcG9zaXRpb24gYWxlcnQgYW5jaG9yZWQgdG8gdGhlIGJvdHRvbSBvZiB0aGUgKG1vZGFsKSBkaWFsb2cuXG5jb25zdCBTdGF0dXNDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogJHtzcGFjaW5nWycyWGwnXX07XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICB6LWluZGV4OiAxO1xuICBtYXgtd2lkdGg6IDUyMHB4O1xuYFxuXG50eXBlIFN0YXR1cyA9IHsgdHlwZTogJ3N1Y2Nlc3MnIHwgJ2Vycm9yJzsgY29udGVudDogc3RyaW5nIH1cblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgZGlzYWJsZWQ/OiBib29sZWFuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE9wbWxDb250cm9scyhwcm9wczogUHJvcHMpIHtcbiAgY29uc3QgeyBwdWJsaXNoZXJzLCBjaGFubmVscywgbG9jYWxlIH0gPSB1c2VCcmF2ZU5ld3MoKVxuICBjb25zdCBpbnB1dFJlZiA9IFJlYWN0LnVzZVJlZjxIVE1MSW5wdXRFbGVtZW50PihudWxsKVxuICBjb25zdCBbc3RhdHVzLCBzZXRTdGF0dXNdID0gUmVhY3QudXNlU3RhdGU8U3RhdHVzIHwgbnVsbD4obnVsbClcblxuICAvLyBEaXNtaXNzaW5nIHRoZSBmaWxlIHBpY2tlciBmaXJlcyBhIGBjYW5jZWxgIGV2ZW50IG9uIHRoZSBpbnB1dCB0aGF0IGJ1YmJsZXNcbiAgLy8gdG8gTGVvIERpYWxvZydzIGNhbmNlbCBoYW5kbGVyLCB3aGljaCB0cmVhdHMgaXQgbGlrZSBFc2NhcGUgYW5kIGNsb3NlcyB0aGVcbiAgLy8gY3VzdG9taXplIGRpYWxvZy4gU3RvcCBpdCBoZXJlLiBMb25nZXItdGVybSB0aGlzIG1heSBiZWxvbmcgaW4gTGVvIChvbmx5XG4gIC8vIGNsb3NlIHdoZW4gdGhlIGNhbmNlbCB0YXJnZXQgaXMgdGhlIGRpYWxvZyBpdHNlbGYpLlxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGlucHV0ID0gaW5wdXRSZWYuY3VycmVudFxuICAgIGlmICghaW5wdXQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBjb25zdCBvbkNhbmNlbCA9IChlOiBFdmVudCkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgfVxuICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NhbmNlbCcsIG9uQ2FuY2VsKVxuICAgIHJldHVybiAoKSA9PiBpbnB1dC5yZW1vdmVFdmVudExpc3RlbmVyKCdjYW5jZWwnLCBvbkNhbmNlbClcbiAgfSwgW10pXG5cbiAgLy8gQXV0by1kaXNtaXNzIHRoZSBzdGF0dXMgYWxlcnQuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFzdGF0dXMpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBjb25zdCB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4gc2V0U3RhdHVzKG51bGwpLCA4MDAwKVxuICAgIHJldHVybiAoKSA9PiBjbGVhclRpbWVvdXQodGltZXIpXG4gIH0sIFtzdGF0dXNdKVxuXG4gIGNvbnN0IG9uRXhwb3J0ID0gKCkgPT4ge1xuICAgIGRvd25sb2FkT3BtbChPYmplY3QudmFsdWVzKHB1Ymxpc2hlcnMpLCBPYmplY3QudmFsdWVzKGNoYW5uZWxzKSwgbG9jYWxlKVxuICB9XG5cbiAgY29uc3Qgb25GaWxlQ2hhbmdlID0gYXN5bmMgKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgY29uc3QgaW5wdXQgPSBlLmN1cnJlbnRUYXJnZXRcbiAgICBjb25zdCBmaWxlID0gaW5wdXQuZmlsZXM/LlswXVxuICAgIC8vIFJlc2V0IHNvIHNlbGVjdGluZyB0aGUgc2FtZSBmaWxlIGFnYWluIHJlLXRyaWdnZXJzIHRoZSBjaGFuZ2UgZXZlbnQuXG4gICAgaW5wdXQudmFsdWUgPSAnJ1xuICAgIGlmICghZmlsZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHRleHQgPSBhd2FpdCBmaWxlLnRleHQoKVxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgaW1wb3J0T3BtbCh0ZXh0LCB7XG4gICAgICAgIHB1Ymxpc2hlcnM6IE9iamVjdC52YWx1ZXMocHVibGlzaGVycyksXG4gICAgICAgIGNoYW5uZWxzOiBPYmplY3QudmFsdWVzKGNoYW5uZWxzKSxcbiAgICAgICAgbG9jYWxlLFxuICAgICAgICBmb2xsb3dQdWJsaXNoZXI6IChpZCkgPT5cbiAgICAgICAgICBQdWJsaXNoZXJzQ2FjaGluZ1dyYXBwZXIuZ2V0SW5zdGFuY2UoKS5zZXRQdWJsaXNoZXJGb2xsb3dlZChpZCwgdHJ1ZSksXG4gICAgICAgIGFkZERpcmVjdEZlZWQ6ICh1cmwpID0+XG4gICAgICAgICAgZ2V0QnJhdmVOZXdzQ29udHJvbGxlcigpLnN1YnNjcmliZVRvTmV3RGlyZWN0RmVlZCh7IHVybCB9KSxcbiAgICAgICAgc3Vic2NyaWJlQ2hhbm5lbDogKGxvYywgbmFtZSkgPT5cbiAgICAgICAgICBDaGFubmVsc0NhY2hpbmdXcmFwcGVyLmdldEluc3RhbmNlKCkuc2V0Q2hhbm5lbFN1YnNjcmliZWQoXG4gICAgICAgICAgICBsb2MsXG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICApLFxuICAgICAgfSlcbiAgICAgIHNldFN0YXR1cyh7XG4gICAgICAgIHR5cGU6ICdzdWNjZXNzJyxcbiAgICAgICAgY29udGVudDogZm9ybWF0TG9jYWxlKFMuQlJBVkVfTkVXU19PUE1MX0lNUE9SVF9SRVNVTFQsIHtcbiAgICAgICAgICAkMTogU3RyaW5nKHJlc3VsdC5zdWJzY3JpYmVkUHVibGlzaGVycyksXG4gICAgICAgICAgJDI6IFN0cmluZyhyZXN1bHQuYWRkZWREaXJlY3RGZWVkcyksXG4gICAgICAgICAgJDM6IFN0cmluZyhyZXN1bHQuc3Vic2NyaWJlZENoYW5uZWxzKSxcbiAgICAgICAgICAkNDogU3RyaW5nKHJlc3VsdC5za2lwcGVkKSxcbiAgICAgICAgfSksXG4gICAgICB9KVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcignQnJhdmUgTmV3czogZmFpbGVkIHRvIGltcG9ydCBPUE1MJywgZXJyKVxuICAgICAgc2V0U3RhdHVzKHtcbiAgICAgICAgdHlwZTogJ2Vycm9yJyxcbiAgICAgICAgY29udGVudDogZ2V0TG9jYWxlKFMuQlJBVkVfTkVXU19PUE1MX0lNUE9SVF9FUlJPUiksXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxMaW5rcz5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIGtpbmQ9J291dGxpbmUnXG4gICAgICAgICAgc2l6ZT0nc21hbGwnXG4gICAgICAgICAgaXNEaXNhYmxlZD17cHJvcHMuZGlzYWJsZWR9XG4gICAgICAgICAgb25DbGljaz17KCkgPT4gaW5wdXRSZWYuY3VycmVudD8uY2xpY2soKX1cbiAgICAgICAgPlxuICAgICAgICAgIHtnZXRMb2NhbGUoUy5CUkFWRV9ORVdTX09QTUxfSU1QT1JUKX1cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBraW5kPSdvdXRsaW5lJ1xuICAgICAgICAgIHNpemU9J3NtYWxsJ1xuICAgICAgICAgIGlzRGlzYWJsZWQ9e3Byb3BzLmRpc2FibGVkfVxuICAgICAgICAgIG9uQ2xpY2s9e29uRXhwb3J0fVxuICAgICAgICA+XG4gICAgICAgICAge2dldExvY2FsZShTLkJSQVZFX05FV1NfT1BNTF9FWFBPUlQpfVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvTGlua3M+XG4gICAgICA8aW5wdXRcbiAgICAgICAgcmVmPXtpbnB1dFJlZn1cbiAgICAgICAgdHlwZT0nZmlsZSdcbiAgICAgICAgYWNjZXB0PScub3BtbCwueG1sLHRleHQveG1sLGFwcGxpY2F0aW9uL3htbCx0ZXh0L3gtb3BtbCdcbiAgICAgICAgaGlkZGVuXG4gICAgICAgIGRpc2FibGVkPXtwcm9wcy5kaXNhYmxlZH1cbiAgICAgICAgb25DaGFuZ2U9e29uRmlsZUNoYW5nZX1cbiAgICAgIC8+XG4gICAgICB7c3RhdHVzICYmIChcbiAgICAgICAgPFN0YXR1c0NvbnRhaW5lcj5cbiAgICAgICAgICA8QWxlcnQgdHlwZT17c3RhdHVzLnR5cGV9PntzdGF0dXMuY29udGVudH08L0FsZXJ0PlxuICAgICAgICA8L1N0YXR1c0NvbnRhaW5lcj5cbiAgICAgICl9XG4gICAgPC8+XG4gIClcbn1cbiIsIi8qIENvcHlyaWdodCAoYykgMjAyNiBUaGUgQnJhdmUgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXMgZmlsZSxcbiAqIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwczovL21vemlsbGEub3JnL01QTC8yLjAvLiAqL1xuXG5pbXBvcnQge1xuICBjb2xvcixcbiAgZWZmZWN0LFxuICByYWRpdXMsXG4gIHNwYWNpbmcsXG59IGZyb20gJ0BicmF2ZS9sZW8vdG9rZW5zL2Nzcy92YXJpYWJsZXMnXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmNvbnN0IFBhbmVsID0gc3R5bGVkLmRpdmBcbiAgaDQge1xuICAgIHBhZGRpbmctYm90dG9tOiAke3NwYWNpbmcueGx9O1xuICAgIGNvbG9yOiAke2NvbG9yLnRleHQucHJpbWFyeX07XG4gIH1cbmBcblxuY29uc3QgQ29udGVudCA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQ6ICR7Y29sb3IuY29udGFpbmVyLmJhY2tncm91bmR9O1xuICBib3gtc2hhZG93OiAke2VmZmVjdC5lbGV2YXRpb25bJzAxJ119O1xuICBib3JkZXItcmFkaXVzOiAke3JhZGl1cy54bH07XG5gXG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHRpdGxlOiBzdHJpbmdcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gU2V0dGluZ3NQYW5lbChwcm9wczogUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8UGFuZWw+XG4gICAgICA8aDQ+e3Byb3BzLnRpdGxlfTwvaDQ+XG4gICAgICA8Q29udGVudD57cHJvcHMuY2hpbGRyZW59PC9Db250ZW50PlxuICAgIDwvUGFuZWw+XG4gIClcbn1cbiIsIi8qIENvcHlyaWdodCAoYykgMjAyNiBUaGUgQnJhdmUgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXMgZmlsZSxcbiAqIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwczovL21vemlsbGEub3JnL01QTC8yLjAvLiAqL1xuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBEcm9wRG93biBmcm9tICdAYnJhdmUvbGVvL3JlYWN0L2Ryb3Bkb3duJ1xuaW1wb3J0IFRvZ2dsZSBmcm9tICdAYnJhdmUvbGVvL3JlYWN0L3RvZ2dsZSdcbmltcG9ydCB7IGNvbG9yLCBpY29uLCBzcGFjaW5nIH0gZnJvbSAnQGJyYXZlL2xlby90b2tlbnMvY3NzL3ZhcmlhYmxlcydcbmltcG9ydCB7IGdldExvY2FsZSB9IGZyb20gJyR3ZWItY29tbW9uL2xvY2FsZSdcbmltcG9ydCB7IGxvYWRUaW1lRGF0YSB9IGZyb20gJyR3ZWItY29tbW9uL2xvYWRUaW1lRGF0YSdcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmltcG9ydCB7IHVzZUJyYXZlTmV3cyB9IGZyb20gJy4uL3NoYXJlZC9Db250ZXh0J1xuaW1wb3J0IE9wbWxDb250cm9scyBmcm9tICcuL09wbWxDb250cm9scydcbmltcG9ydCB7IFNldHRpbmdzUGFuZWwgfSBmcm9tICcuL1NldHRpbmdzUGFuZWwnXG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMXB4O1xuICByb3ctcnVsZTogMXB4IHNvbGlkICR7Y29sb3IuZGl2aWRlci5zdWJ0bGV9O1xuYFxuXG5jb25zdCBDb250cm9sUm93ID0gc3R5bGVkLmRpdmBcbiAgcGFkZGluZzogJHtzcGFjaW5nLmx9ICR7c3BhY2luZ1snMlhsJ119O1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogJHtzcGFjaW5nLm19O1xuXG4gIGxhYmVsIHtcbiAgICBmbGV4OiAxIDEgYXV0bztcbiAgfVxuYFxuXG5jb25zdCBFbmFibGVSb3cgPSBzdHlsZWQoVG9nZ2xlKWBcbiAgLS1sZW8tdG9nZ2xlLWxhYmVsLWZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAgLS1sZW8tdG9nZ2xlLWxhYmVsLWdhcDogJHtzcGFjaW5nLnhsfTtcblxuICBwYWRkaW5nOiAke3NwYWNpbmcubH0gJHtzcGFjaW5nWycyWGwnXX07XG5gXG5cbmNvbnN0IEVuYWJsZUxhYmVsID0gc3R5bGVkLnNwYW5gXG4gIC0tbGVvLWljb24tc2l6ZTogJHtpY29uLm19O1xuXG4gIGZsZXg6IDEgMSBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6ICR7c3BhY2luZy54bH07XG4gIGNvbG9yOiAke2NvbG9yLnRleHQucHJpbWFyeX07XG5gXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5ld3NTZXR0aW5ncygpIHtcbiAgY29uc3Qge1xuICAgIGlzU2hvd09uTlRQUHJlZkVuYWJsZWQsXG4gICAgdG9nZ2xlQnJhdmVOZXdzT25OVFAsXG4gICAgb3BlbkFydGljbGVzSW5OZXdUYWIsXG4gICAgc2V0T3BlbkFydGljbGVzSW5OZXdUYWIsXG4gIH0gPSB1c2VCcmF2ZU5ld3MoKVxuXG4gIGNvbnN0IGZlZWRWMkVuYWJsZWQgPSBsb2FkVGltZURhdGEuZ2V0Qm9vbGVhbihcbiAgICAnZmVhdHVyZUZsYWdCcmF2ZU5ld3NGZWVkVjJFbmFibGVkJyxcbiAgKVxuICBjb25zdCBjb250cm9sc0Rpc2FibGVkID0gIWlzU2hvd09uTlRQUHJlZkVuYWJsZWRcblxuICByZXR1cm4gKFxuICAgIDxTZXR0aW5nc1BhbmVsIHRpdGxlPXtnZXRMb2NhbGUoUy5CUkFWRV9ORVdTX1NFVFRJTkdTX1NFQ1RJT05fVElUTEUpfT5cbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxFbmFibGVSb3dcbiAgICAgICAgICBzaXplPSdzbWFsbCdcbiAgICAgICAgICBjaGVja2VkPXtpc1Nob3dPbk5UUFByZWZFbmFibGVkfVxuICAgICAgICAgIG9uQ2hhbmdlPXsoeyBjaGVja2VkIH0pID0+IHtcbiAgICAgICAgICAgIHRvZ2dsZUJyYXZlTmV3c09uTlRQKGNoZWNrZWQpXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxFbmFibGVMYWJlbD5cbiAgICAgICAgICAgIHtnZXRMb2NhbGUoUy5CUkFWRV9ORVdTX0VOQUJMRV9MQUJFTCl9XG4gICAgICAgICAgPC9FbmFibGVMYWJlbD5cbiAgICAgICAgPC9FbmFibGVSb3c+XG4gICAgICAgIHtmZWVkVjJFbmFibGVkICYmIChcbiAgICAgICAgICA8Q29udHJvbFJvdz5cbiAgICAgICAgICAgIDxsYWJlbD57Z2V0TG9jYWxlKFMuQlJBVkVfTkVXU19PUEVOX0FSVElDTEVTX0lOKX08L2xhYmVsPlxuICAgICAgICAgICAgPERyb3BEb3duXG4gICAgICAgICAgICAgIHZhbHVlPXtvcGVuQXJ0aWNsZXNJbk5ld1RhYi50b1N0cmluZygpfVxuICAgICAgICAgICAgICBwb3NpdGlvblN0cmF0ZWd5PSdmaXhlZCdcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e2NvbnRyb2xzRGlzYWJsZWR9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZGV0YWlsKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0T3BlbkFydGljbGVzSW5OZXdUYWIoZGV0YWlsLnZhbHVlID09PSAndHJ1ZScpXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxzcGFuIHNsb3Q9J3ZhbHVlJz5cbiAgICAgICAgICAgICAgICB7b3BlbkFydGljbGVzSW5OZXdUYWJcbiAgICAgICAgICAgICAgICAgID8gZ2V0TG9jYWxlKFMuQlJBVkVfTkVXU19PUEVOX0FSVElDTEVTX0lOX05FV19UQUIpXG4gICAgICAgICAgICAgICAgICA6IGdldExvY2FsZShTLkJSQVZFX05FV1NfT1BFTl9BUlRJQ0xFU19JTl9DVVJSRU5UX1RBQil9XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPGxlby1vcHRpb24gdmFsdWU9J3RydWUnPlxuICAgICAgICAgICAgICAgIHtnZXRMb2NhbGUoUy5CUkFWRV9ORVdTX09QRU5fQVJUSUNMRVNfSU5fTkVXX1RBQil9XG4gICAgICAgICAgICAgIDwvbGVvLW9wdGlvbj5cbiAgICAgICAgICAgICAgPGxlby1vcHRpb24gdmFsdWU9J2ZhbHNlJz5cbiAgICAgICAgICAgICAgICB7Z2V0TG9jYWxlKFMuQlJBVkVfTkVXU19PUEVOX0FSVElDTEVTX0lOX0NVUlJFTlRfVEFCKX1cbiAgICAgICAgICAgICAgPC9sZW8tb3B0aW9uPlxuICAgICAgICAgICAgPC9Ecm9wRG93bj5cbiAgICAgICAgICA8L0NvbnRyb2xSb3c+XG4gICAgICAgICl9XG4gICAgICAgIDxDb250cm9sUm93PlxuICAgICAgICAgIDxPcG1sQ29udHJvbHMgZGlzYWJsZWQ9e2NvbnRyb2xzRGlzYWJsZWR9IC8+XG4gICAgICAgIDwvQ29udHJvbFJvdz5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvU2V0dGluZ3NQYW5lbD5cbiAgKVxufVxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIyIFRoZSBCcmF2ZSBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuLy8gTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBmaWxlLFxuLy8gWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHBzOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uXG5cbmltcG9ydCBGbGV4IGZyb20gJyR3ZWItY29tbW9uL0ZsZXgnXG5pbXBvcnQgeyBnZXRMb2NhbGUgfSBmcm9tICckd2ViLWNvbW1vbi9sb2NhbGUnXG5pbXBvcnQgSWNvbiBmcm9tICdAYnJhdmUvbGVvL3JlYWN0L2ljb24nXG5pbXBvcnQgeyBjb2xvciwgZWZmZWN0LCBmb250LCBpY29uLCByYWRpdXMsIHNwYWNpbmcgfSBmcm9tICdAYnJhdmUvbGVvL3Rva2Vucy9jc3MvdmFyaWFibGVzJ1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgdXNlQ2hhbm5lbFN1YnNjcmliZWQsIHVzZVB1Ymxpc2hlciwgdXNlUHVibGlzaGVyRm9sbG93ZWQgfSBmcm9tICcuLi9zaGFyZWQvQ29udGV4dCdcbmltcG9ydCB7IGNoYW5uZWxJY29ucyBhcyBDaGFubmVsSWNvbnMgfSBmcm9tICcuLi9zaGFyZWQvSWNvbnMnXG5pbXBvcnQgeyBnZXRUcmFuc2xhdGVkQ2hhbm5lbE5hbWUgfSBmcm9tICcuLi9zaGFyZWQvY2hhbm5lbCdcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgcHVibGlzaGVySWQ6IHN0cmluZ1xufVxuXG5jb25zdCBSZW1vdmVCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxuICBhbGw6IHVuc2V0O1xuICAtLWxlby1pY29uLXNpemU6ICR7aWNvbi5tfTtcblxuICBmbGV4OiAwIDAgYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICR7Y29sb3IuaWNvbi5kZWZhdWx0fTtcbiAgcGFkZGluZzogJHtzcGFjaW5nLnN9O1xuICBib3JkZXItcmFkaXVzOiAke3JhZGl1cy5zfTtcblxuICAmOmhvdmVyIHtcbiAgICBjb2xvcjogJHtjb2xvci5pY29uLmludGVyYWN0aXZlfTtcbiAgfVxuXG4gICY6Zm9jdXMtdmlzaWJsZSB7XG4gICAgb3V0bGluZTogJHtlZmZlY3QuZm9jdXNTdGF0ZX07XG4gIH1cbmBcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkKEZsZXgpYFxuICBwYWRkaW5nOiAke3NwYWNpbmcubX0gMDtcbiAgbWluLXdpZHRoOiAwO1xuXG4gICY6bm90KDpob3ZlciwgOmhhcyg6Zm9jdXMtdmlzaWJsZSkpICR7UmVtb3ZlQnV0dG9ufSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuYFxuXG5jb25zdCBGYXZJY29uQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZmxleDogMCAwICR7aWNvbi5sfTtcbiAgaGVpZ2h0OiAke2ljb24ubH07XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBib3JkZXItcmFkaXVzOiAke3JhZGl1cy5mdWxsfTtcbiAgY29sb3I6ICR7Y29sb3IuaWNvbi5kZWZhdWx0fTtcblxuICBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuYFxuXG5jb25zdCBUZXh0ID0gc3R5bGVkLnNwYW5gXG4gIGZsZXg6IDEgMSAwO1xuICBtaW4td2lkdGg6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBmb250OiAke2ZvbnQuZGVmYXVsdC5yZWd1bGFyfTtcbiAgY29sb3I6ICR7Y29sb3IudGV4dC5wcmltYXJ5fTtcbmBcblxuZnVuY3Rpb24gRmF2SWNvbiAocHJvcHM6IHsgcHVibGlzaGVySWQ6IHN0cmluZyB9KSB7XG4gIGNvbnN0IHB1Ymxpc2hlciA9IHVzZVB1Ymxpc2hlcihwcm9wcy5wdWJsaXNoZXJJZClcbiAgY29uc3QgZmF2aWNvblVybCA9IHB1Ymxpc2hlci5mYXZpY29uVXJsPy51cmxcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldEVycm9yKGZhbHNlKVxuICB9LCBbZmF2aWNvblVybF0pXG5cbiAgcmV0dXJuIChcbiAgICA8RmF2SWNvbkNvbnRhaW5lcj5cbiAgICAgIHtmYXZpY29uVXJsICYmICFlcnJvciAmJiA8aW1nIGxvYWRpbmc9J2xhenknIHNyYz17YC8vYnJhdmUtaW1hZ2U/dXJsPSR7ZW5jb2RlVVJJQ29tcG9uZW50KGZhdmljb25VcmwpfWB9IG9uRXJyb3I9eygpID0+IHNldEVycm9yKHRydWUpfSAvPn1cbiAgICA8L0Zhdkljb25Db250YWluZXI+XG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEZlZWRMaXN0RW50cnkgKHByb3BzOiBQcm9wcykge1xuICBjb25zdCBwdWJsaXNoZXIgPSB1c2VQdWJsaXNoZXIocHJvcHMucHVibGlzaGVySWQpXG4gIGNvbnN0IHsgc2V0Rm9sbG93ZWQgfSA9IHVzZVB1Ymxpc2hlckZvbGxvd2VkKHByb3BzLnB1Ymxpc2hlcklkKVxuICBjb25zdCB1bmZvbGxvd0xhYmVsID0gZ2V0TG9jYWxlKFMuQlJBVkVfTkVXU19GT0xMT1dfQlVUVE9OX0ZPTExPV0lORylcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXIgZGlyZWN0aW9uPVwicm93XCIganVzdGlmeT1cInNwYWNlLWJldHdlZW5cIiBhbGlnbj0nY2VudGVyJyBnYXA9e3NwYWNpbmcubX0+XG4gICAgICA8RmF2SWNvbiBwdWJsaXNoZXJJZD17cHJvcHMucHVibGlzaGVySWR9IC8+XG4gICAgICA8VGV4dCB0aXRsZT17cHVibGlzaGVyLnB1Ymxpc2hlck5hbWV9PntwdWJsaXNoZXIucHVibGlzaGVyTmFtZX08L1RleHQ+XG4gICAgICA8UmVtb3ZlQnV0dG9uXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEZvbGxvd2VkKGZhbHNlKX1cbiAgICAgICAgdGl0bGU9e3VuZm9sbG93TGFiZWx9XG4gICAgICAgIGFyaWEtbGFiZWw9e3VuZm9sbG93TGFiZWx9XG4gICAgICA+XG4gICAgICAgIDxJY29uIG5hbWU9J3RyYXNoJyAvPlxuICAgICAgPC9SZW1vdmVCdXR0b24+XG4gICAgPC9Db250YWluZXI+XG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIENoYW5uZWxMaXN0RW50cnkgKHByb3BzOiB7IGNoYW5uZWxOYW1lOiBzdHJpbmcgfSkge1xuICBjb25zdCB7IHNldFN1YnNjcmliZWQgfSA9IHVzZUNoYW5uZWxTdWJzY3JpYmVkKHByb3BzLmNoYW5uZWxOYW1lKVxuICBjb25zdCBjaGFubmVsTmFtZSA9IGdldFRyYW5zbGF0ZWRDaGFubmVsTmFtZShwcm9wcy5jaGFubmVsTmFtZSlcbiAgY29uc3QgdW5mb2xsb3dMYWJlbCA9IGdldExvY2FsZShTLkJSQVZFX05FV1NfRk9MTE9XX0JVVFRPTl9GT0xMT1dJTkcpXG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyIGRpcmVjdGlvbj1cInJvd1wiIGp1c3RpZnk9J3NwYWNlLWJldHdlZW4nIGFsaWduPSdjZW50ZXInIGdhcD17c3BhY2luZy5tfT5cbiAgICAgIDxGYXZJY29uQ29udGFpbmVyPlxuICAgICAgICB7Q2hhbm5lbEljb25zW3Byb3BzLmNoYW5uZWxOYW1lXSA/PyBDaGFubmVsSWNvbnMuZGVmYXVsdH1cbiAgICAgIDwvRmF2SWNvbkNvbnRhaW5lcj5cbiAgICAgIDxUZXh0IHRpdGxlPXtjaGFubmVsTmFtZX0+e2NoYW5uZWxOYW1lfTwvVGV4dD5cbiAgICAgIDxSZW1vdmVCdXR0b25cbiAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U3Vic2NyaWJlZChmYWxzZSl9XG4gICAgICAgIHRpdGxlPXt1bmZvbGxvd0xhYmVsfVxuICAgICAgICBhcmlhLWxhYmVsPXt1bmZvbGxvd0xhYmVsfVxuICAgICAgPlxuICAgICAgICA8SWNvbiBuYW1lPSd0cmFzaCcgLz5cbiAgICAgIDwvUmVtb3ZlQnV0dG9uPlxuICAgIDwvQ29udGFpbmVyPlxuICApXG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjIgVGhlIEJyYXZlIEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4vLyBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIGZpbGUsXG4vLyBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cHM6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy5cblxuaW1wb3J0IHsgZ2V0TG9jYWxlIH0gZnJvbSAnJHdlYi1jb21tb24vbG9jYWxlJ1xuaW1wb3J0IHVzZVByb21pc2UgZnJvbSAnJHdlYi1jb21tb24vdXNlUHJvbWlzZSdcbmltcG9ydCB7XG4gIGNvbG9yLFxuICBmb250LFxuICBzcGFjaW5nLFxufSBmcm9tICdAYnJhdmUvbGVvL3Rva2Vucy9jc3MvdmFyaWFibGVzJ1xuaW1wb3J0IHsgUGx1cmFsU3RyaW5nUHJveHlJbXBsIH0gZnJvbSAnY2hyb21lOi8vcmVzb3VyY2VzL2pzL3BsdXJhbF9zdHJpbmdfcHJveHkuanMnXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBDaGFubmVsc0NhY2hpbmdXcmFwcGVyIH0gZnJvbSAnLi4vc2hhcmVkL2NoYW5uZWxzQ2FjaGUnXG5pbXBvcnQgeyB1c2VCcmF2ZU5ld3MsIHVzZUNoYW5uZWxzIH0gZnJvbSAnLi4vc2hhcmVkL0NvbnRleHQnXG5pbXBvcnQgeyBQdWJsaXNoZXJzQ2FjaGluZ1dyYXBwZXIgfSBmcm9tICcuLi9zaGFyZWQvcHVibGlzaGVyc0NhY2hlJ1xuaW1wb3J0IExvYWRpbmcgZnJvbSAnLi9Mb2FkaW5nJ1xuaW1wb3J0IHsgQ2hhbm5lbExpc3RFbnRyeSwgRmVlZExpc3RFbnRyeSB9IGZyb20gJy4vU291cmNlc0xpc3RFbnRyeSdcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogMCAke3NwYWNpbmcueGx9O1xuYFxuXG5jb25zdCBIZWFkaW5nID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBnYXA6ICR7c3BhY2luZy5tfTtcbiAgcGFkZGluZzogJHtzcGFjaW5nLm19O1xuYFxuXG5jb25zdCBUaXRsZSA9IHN0eWxlZC5zcGFuYFxuICBmb250OiAke2ZvbnQuZGVmYXVsdC5zZW1pYm9sZH07XG4gIGNvbG9yOiAke2NvbG9yLnRleHQucHJpbWFyeX07XG5gXG5cbmNvbnN0IENvdW50ID0gc3R5bGVkLnNwYW5gXG4gIGZvbnQ6ICR7Zm9udC5zbWFsbC5yZWd1bGFyfTtcbiAgY29sb3I6ICR7Y29sb3IudGV4dC50ZXJ0aWFyeX07XG5gXG5cbmNvbnN0IExpc3QgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuYFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTb3VyY2VzTGlzdCgpIHtcbiAgY29uc3QgeyBzdWJzY3JpYmVkUHVibGlzaGVySWRzIH0gPSB1c2VCcmF2ZU5ld3MoKVxuICBjb25zdCBjaGFubmVscyA9IHVzZUNoYW5uZWxzKHsgc3Vic2NyaWJlZE9ubHk6IHRydWUgfSlcbiAgY29uc3QgcHVibGlzaGVyc0xvYWRlZCA9IFB1Ymxpc2hlcnNDYWNoaW5nV3JhcHBlci5nZXRJbnN0YW5jZSgpLmNvbm5lY3RlZFxuICBjb25zdCBjaGFubmVsc0xvYWRlZCA9IENoYW5uZWxzQ2FjaGluZ1dyYXBwZXIuZ2V0SW5zdGFuY2UoKS5jb25uZWN0ZWRcblxuICBjb25zdCB7IHJlc3VsdDogc291cmNlc0NvdW50IH0gPSB1c2VQcm9taXNlKFxuICAgICgpID0+XG4gICAgICBQbHVyYWxTdHJpbmdQcm94eUltcGwuZ2V0SW5zdGFuY2UoKS5nZXRQbHVyYWxTdHJpbmcoXG4gICAgICAgIFMuQlJBVkVfTkVXU19TT1VSQ0VfQ09VTlQsXG4gICAgICAgIHN1YnNjcmliZWRQdWJsaXNoZXJJZHMubGVuZ3RoICsgY2hhbm5lbHMubGVuZ3RoLFxuICAgICAgKSxcbiAgICBbc3Vic2NyaWJlZFB1Ymxpc2hlcklkcy5sZW5ndGgsIGNoYW5uZWxzLmxlbmd0aF0sXG4gIClcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG4gICAgICA8SGVhZGluZz5cbiAgICAgICAgPFRpdGxlPntnZXRMb2NhbGUoUy5CUkFWRV9ORVdTX0ZFRURTX0hFQURJTkcpfTwvVGl0bGU+XG4gICAgICAgIHtwdWJsaXNoZXJzTG9hZGVkICYmIGNoYW5uZWxzTG9hZGVkICYmIDxDb3VudD57c291cmNlc0NvdW50fTwvQ291bnQ+fVxuICAgICAgPC9IZWFkaW5nPlxuICAgICAgPExpc3Q+XG4gICAgICAgIHshY2hhbm5lbHNMb2FkZWQgJiYgIXB1Ymxpc2hlcnNMb2FkZWQgJiYgPExvYWRpbmcgLz59XG4gICAgICAgIHtjaGFubmVsc0xvYWRlZCAmJlxuICAgICAgICAgIGNoYW5uZWxzLm1hcCgoYykgPT4gKFxuICAgICAgICAgICAgPENoYW5uZWxMaXN0RW50cnkga2V5PXtjLmNoYW5uZWxOYW1lfSBjaGFubmVsTmFtZT17Yy5jaGFubmVsTmFtZX0gLz5cbiAgICAgICAgICApKX1cbiAgICAgICAge3B1Ymxpc2hlcnNMb2FkZWQgJiZcbiAgICAgICAgICBzdWJzY3JpYmVkUHVibGlzaGVySWRzLm1hcCgocCkgPT4gKFxuICAgICAgICAgICAgPEZlZWRMaXN0RW50cnkga2V5PXtwfSBwdWJsaXNoZXJJZD17cH0gLz5cbiAgICAgICAgICApKX1cbiAgICAgIDwvTGlzdD5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKVxufVxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIyIFRoZSBCcmF2ZSBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuLy8gTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBmaWxlLFxuLy8gWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHBzOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uXG5cbmltcG9ydCB7IGdldExvY2FsZSB9IGZyb20gJyR3ZWItY29tbW9uL2xvY2FsZSdcbmltcG9ydCB7XG4gIGNvbG9yLFxuICByYWRpdXMsXG4gIHNwYWNpbmcsXG59IGZyb20gJ0BicmF2ZS9sZW8vdG9rZW5zL2Nzcy92YXJpYWJsZXMnXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyB1c2VCcmF2ZU5ld3MgfSBmcm9tICcuLi9zaGFyZWQvQ29udGV4dCdcbmltcG9ydCBEaXNhYmxlZFBsYWNlaG9sZGVyIGZyb20gJy4vRGlzYWJsZWRQbGFjZWhvbGRlcidcbmltcG9ydCBEaXNjb3ZlciBmcm9tICcuL0Rpc2NvdmVyJ1xuaW1wb3J0IE5ld3NTZXR0aW5ncyBmcm9tICcuL05ld3NTZXR0aW5ncydcbmltcG9ydCB7IFBvcHVsYXJQYWdlIH0gZnJvbSAnLi9Qb3B1bGFyJ1xuaW1wb3J0IFNvdXJjZXNMaXN0IGZyb20gJy4vU291cmNlc0xpc3QnXG5pbXBvcnQgeyBTdWdnZXN0aW9uc1BhZ2UgfSBmcm9tICcuL1N1Z2dlc3Rpb25zJ1xuXG5jb25zdCBQYW5lbEJvZHkgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gJHtzcGFjaW5nWyc0WGwnXX0pO1xuYFxuXG5jb25zdCBTaWRlYmFyID0gc3R5bGVkLm5hdmBcbiAgZmxleDogMCAwIDIyOHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6ICR7c3BhY2luZ1snMlhsJ119O1xuICBwYWRkaW5nOiAke3NwYWNpbmdbJzJYbCddfSAwO1xuICBtaW4taGVpZ2h0OiAwO1xuICBvdmVyZmxvdzogYXV0bztcbiAgb3ZlcnNjcm9sbC1iZWhhdmlvcjogY29udGFpbjtcbiAgc2Nyb2xsYmFyLXdpZHRoOiB0aGluO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuYFxuXG5jb25zdCBTaWRlYmFyVGl0bGUgPSBzdHlsZWQuaDRgXG4gIGNvbG9yOiAke2NvbG9yLnRleHQucHJpbWFyeX07XG4gIHBhZGRpbmc6IDAgJHtzcGFjaW5nWycyWGwnXX07XG5gXG5cbmNvbnN0IENvbnRlbnQgPSBzdHlsZWQuc2VjdGlvbmBcbiAgZmxleDogMSAxIGF1dG87XG4gIG1pbi1oZWlnaHQ6IDA7XG4gIHBhZGRpbmc6ICR7c3BhY2luZy5tfSAke3NwYWNpbmcubX0gJHtzcGFjaW5nLm19IDA7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBvdmVyc2Nyb2xsLWJlaGF2aW9yOiBjb250YWluO1xuICBzY3JvbGxiYXItd2lkdGg6IHRoaW47XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5gXG5cbmNvbnN0IENvbnRlbnRDYXJkID0gc3R5bGVkLmRpdmBcbiAgZmxleC1ncm93OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6ICR7c3BhY2luZ1snMlhsJ119O1xuICBwYWRkaW5nOiAke3NwYWNpbmdbJzRYbCddfTtcbiAgYm9yZGVyLXJhZGl1czogJHtyYWRpdXMueGx9O1xuICBiYWNrZ3JvdW5kOiAke2NvbG9yLnBhZ2UuYmFja2dyb3VuZH07XG5gXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbmZpZ3VyZSgpIHtcbiAgY29uc3Qge1xuICAgIGN1c3RvbWl6ZVBhZ2UsXG4gICAgaXNPcHRJblByZWZFbmFibGVkLFxuICAgIGlzU2hvd09uTlRQUHJlZkVuYWJsZWQsXG4gIH0gPSB1c2VCcmF2ZU5ld3MoKVxuXG4gIC8vIFRPRE8ocGV0ZW1pbGwpOiBXZSdsbCBwcm9iYWJseSBuZWVkIHRvIGhhdmUgMiB0b2dnbGVzLCBvciBzb21lIG90aGVyXG4gIC8vIHdheSB0byBrbm93IGlmIGJyYXZlIG5ld3MgaXMgXCJlbmFibGVkXCIgd2hlbiBCcmF2ZSBOZXdzIGlzIGV4cG9zZWRcbiAgLy8gaW4gcGxhY2VzIG90aGVyIHRoYW4ganVzdCB0aGUgTlRQLiBGb3Igbm93IHRoaXMgaXMgcHJldHR5IHRpZWQgdG8gTlRQLlxuICBjb25zdCBpc0JyYXZlTmV3c0Z1bGx5RW5hYmxlZCA9IGlzT3B0SW5QcmVmRW5hYmxlZCAmJiBpc1Nob3dPbk5UUFByZWZFbmFibGVkXG5cbiAgbGV0IGNvbnRlbnQ6IEpTWC5FbGVtZW50XG4gIGlmICghaXNCcmF2ZU5ld3NGdWxseUVuYWJsZWQpIHtcbiAgICBjb250ZW50ID0gPERpc2FibGVkUGxhY2Vob2xkZXIgLz5cbiAgfSBlbHNlIGlmIChjdXN0b21pemVQYWdlID09PSAnc3VnZ2VzdGlvbnMnKSB7XG4gICAgY29udGVudCA9IDxTdWdnZXN0aW9uc1BhZ2UgLz5cbiAgfSBlbHNlIGlmIChjdXN0b21pemVQYWdlID09PSAncG9wdWxhcicpIHtcbiAgICBjb250ZW50ID0gPFBvcHVsYXJQYWdlIC8+XG4gIH0gZWxzZSB7XG4gICAgY29udGVudCA9IDxEaXNjb3ZlciAvPlxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGlkPSdicmF2ZS1uZXdzLWNvbmZpZ3VyZSc+XG4gICAgICA8UGFuZWxCb2R5PlxuICAgICAgICA8U2lkZWJhcj5cbiAgICAgICAgICA8U2lkZWJhclRpdGxlPntnZXRMb2NhbGUoUy5CUkFWRV9ORVdTX1NFVFRJTkdTX1RJVExFKX08L1NpZGViYXJUaXRsZT5cbiAgICAgICAgICB7aXNCcmF2ZU5ld3NGdWxseUVuYWJsZWQgJiYgPFNvdXJjZXNMaXN0IC8+fVxuICAgICAgICA8L1NpZGViYXI+XG4gICAgICAgIDxDb250ZW50PlxuICAgICAgICAgIDxDb250ZW50Q2FyZD5cbiAgICAgICAgICAgIHtjdXN0b21pemVQYWdlICE9PSAnc3VnZ2VzdGlvbnMnICYmIGN1c3RvbWl6ZVBhZ2UgIT09ICdwb3B1bGFyJyAmJlxuICAgICAgICAgICAgICA8TmV3c1NldHRpbmdzIC8+fVxuICAgICAgICAgICAge2NvbnRlbnR9XG4gICAgICAgICAgPC9Db250ZW50Q2FyZD5cbiAgICAgICAgPC9Db250ZW50PlxuICAgICAgPC9QYW5lbEJvZHk+XG4gICAgPC9kaXY+XG4gIClcbn1cbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMiBUaGUgQnJhdmUgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbi8vIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXMgZmlsZSxcbi8vIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwczovL21vemlsbGEub3JnL01QTC8yLjAvLlxuXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZVByb21pc2U8VD4gKGdldFByb21pc2U6ICgpID0+IFByb21pc2U8VD4sIGRlcHM6IGFueVtdKSB7XG4gICAgY29uc3QgW3Jlc3VsdCwgc2V0UmVzdWx0XSA9IHVzZVN0YXRlPFQgfCB1bmRlZmluZWQ+KClcbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKVxuICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGU8YW55PigpXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcblxuICAgICAgICBzZXRMb2FkaW5nKHRydWUpXG4gICAgICAgIHNldEVycm9yKHVuZGVmaW5lZClcblxuICAgICAgICBnZXRQcm9taXNlKClcbiAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiAhY2FuY2VsbGVkICYmIHNldFJlc3VsdChyZXN1bHQpKVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiAhY2FuY2VsbGVkICYmIHNldEVycm9yKGVycikpXG4gICAgICAgICAgICAuZmluYWxseSgoKSA9PiAhY2FuY2VsbGVkICYmIHNldExvYWRpbmcoZmFsc2UpKVxuXG4gICAgICAgIHJldHVybiAoKSA9PiB7IGNhbmNlbGxlZCA9IHRydWUgfVxuICAgIH0sIGRlcHMpXG5cbiAgICByZXR1cm4ge1xuICAgICAgICByZXN1bHQsXG4gICAgICAgIGxvYWRpbmcsXG4gICAgICAgIGVycm9yXG4gICAgfVxufVxuIiwiaW1wb3J0IFN2ZWx0ZVdlYiBmcm9tICcuLi9zaGFyZWQvc3ZlbHRlLXdlYi5qcydcbmltcG9ydCBBbGVydCBmcm9tICcuLi9zaGFyZWQvYWxlcnQuanMnXG5leHBvcnQgZGVmYXVsdCBTdmVsdGVXZWIoQWxlcnQsIHtcbiAgICBuYW1lOiAnbGVvLWFsZXJ0JyxcbiAgICBtb2RlOiAnb3Blbidcbn0pO1xuXG4vLyBSZWV4cG9ydCBldmVyeXRoaW5nIGZyb20gb3VyIGNvbXBvbmVudCwgc28gY29uc3VtZXJzIGNhbiBkbyBhbnl0aGluZyB0aGUgYmFzZVxuLy8gY29tcG9uZW50IGNhbiBkby5cbmV4cG9ydCAqIGZyb20gJy4uL3NoYXJlZC9hbGVydC5qcyciLCJpbXBvcnQgU3ZlbHRlVG9SZWFjdCBmcm9tICcuLi9zaGFyZWQvc3ZlbHRlLXJlYWN0LmpzJ1xuaW1wb3J0IEFsZXJ0IGZyb20gJy4uL3dlYi1jb21wb25lbnRzL2FsZXJ0LmpzJ1xuZXhwb3J0IGRlZmF1bHQgU3ZlbHRlVG9SZWFjdCgnbGVvLWFsZXJ0JywgQWxlcnQpO1xuXG4vLyBSZWV4cG9ydCBldmVyeXRoaW5nIGZyb20gb3VyIGNvbXBvbmVudCwgc28gUmVhY3QgY29uc3VtZXJzIGNhbiBkbyBhbnl0aGluZ1xuLy8gdGhlIGJhc2UgY29tcG9uZW50IGNhbiBkby5cbmV4cG9ydCAqIGZyb20gJy4uL3dlYi1jb21wb25lbnRzL2FsZXJ0LmpzJyIsImltcG9ydCB7IGEgYXMgYXBwZW5kX3N0eWxlcywgYiBhcyBhcHBlbmQsIGYgYXMgZnJvbV9odG1sIH0gZnJvbSAnLi82NTFmMGJhYS5qcyc7XG5pbXBvcnQgeyBwIGFzIHB1c2gsIGwgYXMgbGVnYWN5X3ByZV9lZmZlY3QsIGEgYXMgbGVnYWN5X3ByZV9lZmZlY3RfcmVzZXQsIHQgYXMgdGVtcGxhdGVfZWZmZWN0LCBiIGFzIHBvcCwgZCBhcyBkZWVwX3JlYWRfc3RhdGUsIGYgYXMgZmx1c2hTeW5jLCB1IGFzIHVudHJhY2ssIHMgYXMgc2libGluZywgZyBhcyBnZXQsIG0gYXMgbXV0YWJsZV9zb3VyY2UsIGUgYXMgc2V0LCBjIGFzIGNoaWxkIH0gZnJvbSAnLi8xOTA5Mzc5Zi5qcyc7XG5pbXBvcnQgeyBpIGFzIGlmX2Jsb2NrIH0gZnJvbSAnLi9lYWNiNjlkMC5qcyc7XG5pbXBvcnQgeyBhIGFzIHNhbml0aXplX3Nsb3RzLCBzIGFzIHNsb3QgfSBmcm9tICcuL2QwNDhkZTczLmpzJztcbmltcG9ydCB7IHMgYXMgc2V0X2NsYXNzIH0gZnJvbSAnLi9kMmI3NmFlYS5qcyc7XG5pbXBvcnQgeyBwIGFzIHByb3AgfSBmcm9tICcuLzNlODE4Y2VlLmpzJztcbmltcG9ydCBJY29uIGZyb20gJy4vaWNvbi5qcyc7XG5pbXBvcnQgJy4vNzg0MzgxZDYuanMnO1xuaW1wb3J0ICcuL2E1ZTNlNjZmLmpzJztcbmltcG9ydCAnLi9jODIzNmE0Zi5qcyc7XG5pbXBvcnQgJy4vZTdjYTExYzUuanMnO1xuaW1wb3J0ICcuLzE0ZGU0OWM2LmpzJztcblxuY29uc3QgdHlwZXMgPSBbXCJpbmZvXCIsIFwid2FybmluZ1wiLCBcImVycm9yXCIsIFwic3VjY2Vzc1wiLCBcIm5vdGljZVwiXTtcbmNvbnN0IHNpemVzID0gW1wiZGVmYXVsdFwiLCBcInNtYWxsXCJdO1xuXG5jb25zdCBkZWZhdWx0SWNvbnMgPSB7XG5cdFwiaW5mb1wiOiBcImluZm8tZmlsbGVkXCIsXG5cdFwiZXJyb3JcIjogXCJ3YXJuaW5nLWNpcmNsZS1maWxsZWRcIixcblx0XCJ3YXJuaW5nXCI6IFwid2FybmluZy10cmlhbmdsZS1maWxsZWRcIixcblx0XCJzdWNjZXNzXCI6IFwiY2hlY2stY2lyY2xlLWZpbGxlZFwiLFxuXHRcIm5vdGljZVwiOiBcImluZm8tb3V0bGluZVwiXG59O1xuXG52YXIgcm9vdCA9IGZyb21faHRtbChgPGRpdiBjbGFzcz1cImljb24gc3ZlbHRlLTFsNmRqazNcIj48IT48L2Rpdj5gKTtcbnZhciByb290XzEgPSBmcm9tX2h0bWwoYDxkaXYgY2xhc3M9XCJ0aXRsZSBzdmVsdGUtMWw2ZGprM1wiPjwhPjwvZGl2PmApO1xudmFyIHJvb3RfMiA9IGZyb21faHRtbChgPGRpdiBjbGFzcz1cImNvbnRlbnQtYWZ0ZXIgc3ZlbHRlLTFsNmRqazNcIj48IT48L2Rpdj5gKTtcbnZhciByb290XzMgPSBmcm9tX2h0bWwoYDxkaXYgY2xhc3M9XCJhY3Rpb25zIHN2ZWx0ZS0xbDZkamszXCI+PCE+PC9kaXY+YCk7XG52YXIgcm9vdF80ID0gZnJvbV9odG1sKGA8ZGl2PjwhPiA8ZGl2IGNsYXNzPVwiY29udGVudCBzdmVsdGUtMWw2ZGprM1wiPjwhPiA8IT48L2Rpdj4gPCE+IDwhPjwvZGl2PmApO1xuXG5jb25zdCAkJGNzcyA9IHtcblx0aGFzaDogJ3N2ZWx0ZS0xbDZkamszJyxcblx0Y29kZTogJzpob3N0IHtkaXNwbGF5OmJsb2NrO30ubGVvLWFsZXJ0LnN2ZWx0ZS0xbDZkamszIC5hY3Rpb25zOndoZXJlKC5zdmVsdGUtMWw2ZGprMykgPiAqLFxcbi5sZW8tYWxlcnQuc3ZlbHRlLTFsNmRqazMgLmFjdGlvbnM6d2hlcmUoLnN2ZWx0ZS0xbDZkamszKSA6OnNsb3R0ZWQoKikge2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpyb3c7Z2FwOnZhcigtLWxlby1zcGFjaW5nLW0pO30ubGVvLWFsZXJ0LnN2ZWx0ZS0xbDZkamszIHstLXBhZGRpbmc6IHZhcigtLWxlby1zcGFjaW5nLXhsKTstLWdhcDogdmFyKC0tbGVvLXNwYWNpbmcteGwpOy0tbGVvLWljb24tY29sb3I6IHZhcigtLWxlby1hbGVydC1pY29uLWNvbG9yLCB2YXIoLS1kZWZhdWx0LWljb24tY29sb3IpKTtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWxlby1hbGVydC1iYWNrZ3JvdW5kLWNvbG9yLCB2YXIoLS1kZWZhdWx0LWJhY2tncm91bmQpKTtjb2xvcjp2YXIoLS1kZWZhdWx0LXRleHQtY29sb3IsIHZhcigtLWxlby1jb2xvci10ZXh0LXByaW1hcnkpKTtwYWRkaW5nOnZhcigtLWxlby1hbGVydC1wYWRkaW5nLCB2YXIoLS1wYWRkaW5nKSk7Ym9yZGVyLXJhZGl1czp2YXIoLS1sZW8tcmFkaXVzLWwpO2JvcmRlcjp2YXIoLS1sZW8tYWxlcnQtYm9yZGVyLXdpZHRoLCB2YXIoLS1kZWZhdWx0LWJvcmRlci13aWR0aCkpIHNvbGlkIHZhcigtLWxlby1hbGVydC1ib3JkZXItY29sb3IsIHZhcigtLWRlZmF1bHQtYm9yZGVyLWNvbG9yKSk7Z2FwOnZhcigtLWdhcCk7Zm9udDp2YXIoLS1sZW8tZm9udC1kZWZhdWx0LXJlZ3VsYXIpO2Rpc3BsYXk6Z3JpZDtncmlkLXRlbXBsYXRlLWNvbHVtbnM6W2ljb24tc3RhcnRdIG1pbi1jb250ZW50IFtpY29uLWVuZCBtYWluLXN0YXJ0XSAxZnIgW21haW4tZW5kXTtncmlkLXRlbXBsYXRlLXJvd3M6W21haW4tc3RhcnRdIGF1dG8gW21haW4tZW5kXTt9Lmxlby1hbGVydC5ub3RpY2Uuc3ZlbHRlLTFsNmRqazMgey0tZGVmYXVsdC1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDstLWRlZmF1bHQtaWNvbi1jb2xvcjogdmFyKC0tbGVvLWNvbG9yLXRleHQtdGVydGlhcnkpOy0tZGVmYXVsdC10ZXh0LWNvbG9yOiB2YXIoLS1sZW8tYWxlcnQtdGV4dC1jb2xvciwgdmFyKC0tbGVvLWNvbG9yLXRleHQtdGVydGlhcnkpKTstLWRlZmF1bHQtYm9yZGVyLXdpZHRoOiAxcHg7LS1kZWZhdWx0LWJvcmRlci1jb2xvcjogdmFyKC0tbGVvLWNvbG9yLWRpdmlkZXItc3VidGxlKTt9Lmxlby1hbGVydC5zdWNjZXNzLnN2ZWx0ZS0xbDZkamszIHstLWRlZmF1bHQtYmFja2dyb3VuZDogdmFyKC0tbGVvLWNvbG9yLXN5c3RlbWZlZWRiYWNrLXN1Y2Nlc3MtYmFja2dyb3VuZCk7LS1kZWZhdWx0LWljb24tY29sb3I6IHZhcigtLWxlby1jb2xvci1zeXN0ZW1mZWVkYmFjay1zdWNjZXNzLWljb24pOy0tZGVmYXVsdC10ZXh0LWNvbG9yOiB2YXIoLS1sZW8tY29sb3Itc3lzdGVtZmVlZGJhY2stc3VjY2Vzcy10ZXh0KTt9Lmxlby1hbGVydC5pbmZvLnN2ZWx0ZS0xbDZkamszIHstLWRlZmF1bHQtYmFja2dyb3VuZDogdmFyKC0tbGVvLWNvbG9yLXN5c3RlbWZlZWRiYWNrLWluZm8tYmFja2dyb3VuZCk7LS1kZWZhdWx0LWljb24tY29sb3I6IHZhcigtLWxlby1jb2xvci1zeXN0ZW1mZWVkYmFjay1pbmZvLWljb24pOy0tZGVmYXVsdC10ZXh0LWNvbG9yOiB2YXIoLS1sZW8tY29sb3Itc3lzdGVtZmVlZGJhY2staW5mby10ZXh0KTt9Lmxlby1hbGVydC5lcnJvci5zdmVsdGUtMWw2ZGprMyB7LS1kZWZhdWx0LWJhY2tncm91bmQ6IHZhcigtLWxlby1jb2xvci1zeXN0ZW1mZWVkYmFjay1lcnJvci1iYWNrZ3JvdW5kKTstLWRlZmF1bHQtaWNvbi1jb2xvcjogdmFyKC0tbGVvLWNvbG9yLXN5c3RlbWZlZWRiYWNrLWVycm9yLWljb24pOy0tZGVmYXVsdC10ZXh0LWNvbG9yOiB2YXIoLS1sZW8tY29sb3Itc3lzdGVtZmVlZGJhY2stZXJyb3ItdGV4dCk7fS5sZW8tYWxlcnQud2FybmluZy5zdmVsdGUtMWw2ZGprMyB7LS1kZWZhdWx0LWJhY2tncm91bmQ6IHZhcigtLWxlby1jb2xvci1zeXN0ZW1mZWVkYmFjay13YXJuaW5nLWJhY2tncm91bmQpOy0tZGVmYXVsdC1pY29uLWNvbG9yOiB2YXIoLS1sZW8tY29sb3Itc3lzdGVtZmVlZGJhY2std2FybmluZy1pY29uKTstLWRlZmF1bHQtdGV4dC1jb2xvcjogdmFyKC0tbGVvLWNvbG9yLXN5c3RlbWZlZWRiYWNrLXdhcm5pbmctdGV4dCk7fS5sZW8tYWxlcnQuc3ZlbHRlLTFsNmRqazMgLmljb246d2hlcmUoLnN2ZWx0ZS0xbDZkamszKSB7LS1sZW8taWNvbi1zaXplOiB2YXIoLS1sZW8taWNvbi1tKTtjb2xvcjp2YXIoLS1sZW8taWNvbi1jb2xvcik7fS5sZW8tYWxlcnQuc3ZlbHRlLTFsNmRqazMgLnRpdGxlOndoZXJlKC5zdmVsdGUtMWw2ZGprMykge2ZvbnQ6dmFyKC0tbGVvLWZvbnQtaGVhZGluZy1oNCk7fS5sZW8tYWxlcnQuc3ZlbHRlLTFsNmRqazMgLmNvbnRlbnQ6d2hlcmUoLnN2ZWx0ZS0xbDZkamszKSB7Z3JpZC1jb2x1bW46bWFpbjthbGlnbi1jb250ZW50OmNlbnRlcjt9Lmxlby1hbGVydC5zdmVsdGUtMWw2ZGprMyAuY29udGVudC1hZnRlcjp3aGVyZSguc3ZlbHRlLTFsNmRqazMpIHtncmlkLXJvdzptYWluO2dyaWQtY29sdW1uOi0xO30ubGVvLWFsZXJ0LnN2ZWx0ZS0xbDZkamszIC5hY3Rpb25zOndoZXJlKC5zdmVsdGUtMWw2ZGprMykge2dyaWQtY29sdW1uOm1haW47fS5sZW8tYWxlcnQuaW5saW5lLWFjdGlvbnMuc3ZlbHRlLTFsNmRqazMge2FsaWduLWl0ZW1zOmNlbnRlcjt9Lmxlby1hbGVydC5pbmxpbmUtYWN0aW9ucy5zdmVsdGUtMWw2ZGprMyAuYWN0aW9uczp3aGVyZSguc3ZlbHRlLTFsNmRqazMpIHtncmlkLWNvbHVtbjptYWluLWVuZDt9Lmxlby1hbGVydC5pbmxpbmUtYWN0aW9ucy5zdmVsdGUtMWw2ZGprMzpoYXMoLmNvbnRlbnQtYWZ0ZXI6d2hlcmUoLnN2ZWx0ZS0xbDZkamszKSB+IC5hY3Rpb25zOndoZXJlKC5zdmVsdGUtMWw2ZGprMykpIHtncmlkLXRlbXBsYXRlLWNvbHVtbnM6W2ljb24tc3RhcnRdIG1pbi1jb250ZW50IFtpY29uLWVuZCBtYWluLXN0YXJ0XSAxZnIgW21haW4tZW5kIGNvbnRlbnQtYWZ0ZXJdIGF1dG8gW2NvbnRlbnQtZW5kXTt9Lmxlby1hbGVydC5zaXplLXNtYWxsLnN2ZWx0ZS0xbDZkamszIHstLXBhZGRpbmc6IHZhcigtLWxlby1zcGFjaW5nLW0pIHZhcigtLWxlby1zcGFjaW5nLWwpOy0tZ2FwOiB2YXIoLS1sZW8tc3BhY2luZy1tKTt9Lmxlby1hbGVydC50b2FzdC5lcnJvci5zdmVsdGUtMWw2ZGprMyB7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1sZW8tY29sb3ItcmVkLTIwKTt9Lmxlby1hbGVydC50b2FzdC53YXJuaW5nLnN2ZWx0ZS0xbDZkamszIHtiYWNrZ3JvdW5kOnZhcigtLWxlby1jb2xvci15ZWxsb3ctMjApO30ubGVvLWFsZXJ0LnRvYXN0LmluZm8uc3ZlbHRlLTFsNmRqazMge2JhY2tncm91bmQ6dmFyKC0tbGVvLWNvbG9yLWJsdWUtMjApO30ubGVvLWFsZXJ0LnRvYXN0LnN1Y2Nlc3Muc3ZlbHRlLTFsNmRqazMge2JhY2tncm91bmQ6dmFyKC0tbGVvLWNvbG9yLWdyZWVuLTIwKTt9J1xufTtcblxuZnVuY3Rpb24gQWxlcnQoJCRhbmNob3IsICQkcHJvcHMpIHtcblx0Y29uc3QgJCRzbG90cyA9IHNhbml0aXplX3Nsb3RzKCQkcHJvcHMpO1xuXG5cdHB1c2goJCRwcm9wcywgZmFsc2UpO1xuXHRhcHBlbmRfc3R5bGVzKCQkYW5jaG9yLCAkJGNzcyk7XG5cblx0Y29uc3QgY3VycmVudFR5cGUgPSBtdXRhYmxlX3NvdXJjZSgpO1xuXHRsZXQgdHlwZSA9IHByb3AoJCRwcm9wcywgJ3R5cGUnLCAxMiwgXCJlcnJvclwiKTtcblx0bGV0IGlzVG9hc3QgPSBwcm9wKCQkcHJvcHMsICdpc1RvYXN0JywgMTIsIGZhbHNlKTtcblx0bGV0IGlzSW5saW5lQWN0aW9ucyA9IHByb3AoJCRwcm9wcywgJ2lzSW5saW5lQWN0aW9ucycsIDEyLCBmYWxzZSk7XG5cdGxldCBoaWRlSWNvbiA9IHByb3AoJCRwcm9wcywgJ2hpZGVJY29uJywgMTIsIGZhbHNlKTtcblx0bGV0IHNpemUgPSBwcm9wKCQkcHJvcHMsICdzaXplJywgMTIsIFwiZGVmYXVsdFwiKTtcblx0bGV0IGhhc0FjdGlvbnMgPSBwcm9wKCQkcHJvcHMsICdoYXNBY3Rpb25zJywgMjgsICgpID0+ICQkc2xvdHMuYWN0aW9ucyk7XG5cdGxldCBoYXNDb250ZW50QWZ0ZXIgPSBwcm9wKCQkcHJvcHMsICdoYXNDb250ZW50QWZ0ZXInLCAyOCwgKCkgPT4gJCRzbG90c1tcImNvbnRlbnQtYWZ0ZXJcIl0pO1xuXG5cdGxlZ2FjeV9wcmVfZWZmZWN0KCgpID0+IChkZWVwX3JlYWRfc3RhdGUodHlwZSgpKSksICgpID0+IHtcblx0XHRzZXQoY3VycmVudFR5cGUsIHR5cGUoKSA/PyBcImVycm9yXCIpO1xuXHR9KTtcblxuXHRsZWdhY3lfcHJlX2VmZmVjdF9yZXNldCgpO1xuXG5cdHZhciAkJGV4cG9ydHMgPSB7XG5cdFx0Z2V0IHR5cGUoKSB7XG5cdFx0XHRyZXR1cm4gdHlwZSgpO1xuXHRcdH0sXG5cblx0XHRzZXQgdHlwZSgkJHZhbHVlKSB7XG5cdFx0XHR0eXBlKCQkdmFsdWUpO1xuXHRcdFx0Zmx1c2hTeW5jKCk7XG5cdFx0fSxcblxuXHRcdGdldCBpc1RvYXN0KCkge1xuXHRcdFx0cmV0dXJuIGlzVG9hc3QoKTtcblx0XHR9LFxuXG5cdFx0c2V0IGlzVG9hc3QoJCR2YWx1ZSkge1xuXHRcdFx0aXNUb2FzdCgkJHZhbHVlKTtcblx0XHRcdGZsdXNoU3luYygpO1xuXHRcdH0sXG5cblx0XHRnZXQgaXNJbmxpbmVBY3Rpb25zKCkge1xuXHRcdFx0cmV0dXJuIGlzSW5saW5lQWN0aW9ucygpO1xuXHRcdH0sXG5cblx0XHRzZXQgaXNJbmxpbmVBY3Rpb25zKCQkdmFsdWUpIHtcblx0XHRcdGlzSW5saW5lQWN0aW9ucygkJHZhbHVlKTtcblx0XHRcdGZsdXNoU3luYygpO1xuXHRcdH0sXG5cblx0XHRnZXQgaGlkZUljb24oKSB7XG5cdFx0XHRyZXR1cm4gaGlkZUljb24oKTtcblx0XHR9LFxuXG5cdFx0c2V0IGhpZGVJY29uKCQkdmFsdWUpIHtcblx0XHRcdGhpZGVJY29uKCQkdmFsdWUpO1xuXHRcdFx0Zmx1c2hTeW5jKCk7XG5cdFx0fSxcblxuXHRcdGdldCBzaXplKCkge1xuXHRcdFx0cmV0dXJuIHNpemUoKTtcblx0XHR9LFxuXG5cdFx0c2V0IHNpemUoJCR2YWx1ZSkge1xuXHRcdFx0c2l6ZSgkJHZhbHVlKTtcblx0XHRcdGZsdXNoU3luYygpO1xuXHRcdH0sXG5cblx0XHRnZXQgaGFzQWN0aW9ucygpIHtcblx0XHRcdHJldHVybiBoYXNBY3Rpb25zKCk7XG5cdFx0fSxcblxuXHRcdHNldCBoYXNBY3Rpb25zKCQkdmFsdWUpIHtcblx0XHRcdGhhc0FjdGlvbnMoJCR2YWx1ZSk7XG5cdFx0XHRmbHVzaFN5bmMoKTtcblx0XHR9LFxuXG5cdFx0Z2V0IGhhc0NvbnRlbnRBZnRlcigpIHtcblx0XHRcdHJldHVybiBoYXNDb250ZW50QWZ0ZXIoKTtcblx0XHR9LFxuXG5cdFx0c2V0IGhhc0NvbnRlbnRBZnRlcigkJHZhbHVlKSB7XG5cdFx0XHRoYXNDb250ZW50QWZ0ZXIoJCR2YWx1ZSk7XG5cdFx0XHRmbHVzaFN5bmMoKTtcblx0XHR9XG5cdH07XG5cblx0dmFyIGRpdiA9IHJvb3RfNCgpO1xuXHRsZXQgY2xhc3Nlcztcblx0dmFyIG5vZGUgPSBjaGlsZChkaXYpO1xuXG5cdHtcblx0XHR2YXIgY29uc2VxdWVudCA9ICgkJGFuY2hvcikgPT4ge1xuXHRcdFx0dmFyIGRpdl8xID0gcm9vdCgpO1xuXHRcdFx0dmFyIG5vZGVfMSA9IGNoaWxkKGRpdl8xKTtcblxuXHRcdFx0c2xvdChub2RlXzEsICQkcHJvcHMsICdpY29uJywge30sICgkJGFuY2hvcikgPT4ge1xuXHRcdFx0XHRJY29uKCQkYW5jaG9yLCB7XG5cdFx0XHRcdFx0Z2V0IG5hbWUoKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHRnZXQoY3VycmVudFR5cGUpLFxuXHRcdFx0XHRcdFx0XHR1bnRyYWNrKCgpID0+IGRlZmF1bHRJY29uc1tnZXQoY3VycmVudFR5cGUpXSlcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdFx0YXBwZW5kKCQkYW5jaG9yLCBkaXZfMSk7XG5cdFx0fTtcblxuXHRcdGlmX2Jsb2NrKG5vZGUsICgkJHJlbmRlcikgPT4ge1xuXHRcdFx0aWYgKCFoaWRlSWNvbigpKSAkJHJlbmRlcihjb25zZXF1ZW50KTtcblx0XHR9KTtcblx0fVxuXG5cdHZhciBkaXZfMiA9IHNpYmxpbmcobm9kZSwgMik7XG5cdHZhciBub2RlXzIgPSBjaGlsZChkaXZfMik7XG5cblx0e1xuXHRcdHZhciBjb25zZXF1ZW50XzEgPSAoJCRhbmNob3IpID0+IHtcblx0XHRcdHZhciBkaXZfMyA9IHJvb3RfMSgpO1xuXHRcdFx0dmFyIG5vZGVfMyA9IGNoaWxkKGRpdl8zKTtcblxuXHRcdFx0c2xvdChub2RlXzMsICQkcHJvcHMsICd0aXRsZScsIHt9LCBudWxsKTtcblx0XHRcdGFwcGVuZCgkJGFuY2hvciwgZGl2XzMpO1xuXHRcdH07XG5cblx0XHRpZl9ibG9jayhub2RlXzIsICgkJHJlbmRlcikgPT4ge1xuXHRcdFx0aWYgKCh1bnRyYWNrKCgpID0+ICQkc2xvdHMudGl0bGUpKSkgJCRyZW5kZXIoY29uc2VxdWVudF8xKTtcblx0XHR9KTtcblx0fVxuXG5cdHZhciBub2RlXzQgPSBzaWJsaW5nKG5vZGVfMiwgMik7XG5cblx0c2xvdChub2RlXzQsICQkcHJvcHMsICdkZWZhdWx0Jywge30sIG51bGwpO1xuXG5cdHZhciBub2RlXzUgPSBzaWJsaW5nKGRpdl8yLCAyKTtcblxuXHR7XG5cdFx0dmFyIGNvbnNlcXVlbnRfMiA9ICgkJGFuY2hvcikgPT4ge1xuXHRcdFx0dmFyIGRpdl80ID0gcm9vdF8yKCk7XG5cdFx0XHR2YXIgbm9kZV82ID0gY2hpbGQoZGl2XzQpO1xuXG5cdFx0XHRzbG90KG5vZGVfNiwgJCRwcm9wcywgJ2NvbnRlbnQtYWZ0ZXInLCB7fSwgbnVsbCk7XG5cdFx0XHRhcHBlbmQoJCRhbmNob3IsIGRpdl80KTtcblx0XHR9O1xuXG5cdFx0aWZfYmxvY2sobm9kZV81LCAoJCRyZW5kZXIpID0+IHtcblx0XHRcdGlmICgoXG5cdFx0XHRcdGRlZXBfcmVhZF9zdGF0ZShoYXNDb250ZW50QWZ0ZXIoKSksXG5cdFx0XHRcdHVudHJhY2soKCkgPT4gaGFzQ29udGVudEFmdGVyKCkgJiYgJCRzbG90c1snY29udGVudC1hZnRlciddKVxuXHRcdFx0KSkgJCRyZW5kZXIoY29uc2VxdWVudF8yKTtcblx0XHR9KTtcblx0fVxuXG5cdHZhciBub2RlXzcgPSBzaWJsaW5nKG5vZGVfNSwgMik7XG5cblx0e1xuXHRcdHZhciBjb25zZXF1ZW50XzMgPSAoJCRhbmNob3IpID0+IHtcblx0XHRcdHZhciBkaXZfNSA9IHJvb3RfMygpO1xuXHRcdFx0dmFyIG5vZGVfOCA9IGNoaWxkKGRpdl81KTtcblxuXHRcdFx0c2xvdChub2RlXzgsICQkcHJvcHMsICdhY3Rpb25zJywge30sIG51bGwpO1xuXHRcdFx0YXBwZW5kKCQkYW5jaG9yLCBkaXZfNSk7XG5cdFx0fTtcblxuXHRcdGlmX2Jsb2NrKG5vZGVfNywgKCQkcmVuZGVyKSA9PiB7XG5cdFx0XHRpZiAoKFxuXHRcdFx0XHRkZWVwX3JlYWRfc3RhdGUoaGFzQWN0aW9ucygpKSxcblx0XHRcdFx0dW50cmFjaygoKSA9PiBoYXNBY3Rpb25zKCkgJiYgJCRzbG90cy5hY3Rpb25zKVxuXHRcdFx0KSkgJCRyZW5kZXIoY29uc2VxdWVudF8zKTtcblx0XHR9KTtcblx0fVxuXHR0ZW1wbGF0ZV9lZmZlY3QoKCkgPT4gY2xhc3NlcyA9IHNldF9jbGFzcyhkaXYsIDEsIGBsZW8tYWxlcnQgJHtnZXQoY3VycmVudFR5cGUpID8/ICcnfSBzaXplLSR7c2l6ZSgpID8/ICcnfWAsICdzdmVsdGUtMWw2ZGprMycsIGNsYXNzZXMsIHsgdG9hc3Q6IGlzVG9hc3QoKSwgJ2lubGluZS1hY3Rpb25zJzogaXNJbmxpbmVBY3Rpb25zKCkgfSkpO1xuXHRhcHBlbmQoJCRhbmNob3IsIGRpdik7XG5cblx0cmV0dXJuIHBvcCgkJGV4cG9ydHMpO1xufVxuXG5leHBvcnQgeyBBbGVydCBhcyBkZWZhdWx0LCBzaXplcywgdHlwZXMgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFsZXJ0LmpzLm1hcFxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9