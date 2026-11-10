export const __webpack_esm_id__ = "brave_browser_resources_brave_new_tab_page_refresh_components_news_news_feed_tsx";
export const __webpack_esm_ids__ = ["brave_browser_resources_brave_new_tab_page_refresh_components_news_news_feed_tsx"];
export const __webpack_esm_modules__ = {

/***/ "../../../brave/browser/resources/brave_new_tab_page_refresh/components/news/news_feed.tsx"
/*!*************************************************************************************************!*\
  !*** ./browser/resources/brave_new_tab_page_refresh/components/news/news_feed.tsx + 21 modules ***!
  \*************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  NewsFeed: () => (/* binding */ NewsFeed),
  "default": () => (/* binding */ news_feed)
});
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external ["//resources/brave/react.bundle.js","React"]
var react_bundle_js_React_ = __webpack_require__("react");
// EXTERNAL MODULE: ./components/brave_news/browser/resources/shared/Context.tsx + 3 modules
var Context = __webpack_require__("../../../brave/components/brave_news/browser/resources/shared/Context.tsx");
// EXTERNAL MODULE: ./node_modules/.pnpm/styled-components@6.4.3_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/styled-components/dist/styled-components.esm.js + 7 modules
var styled_components_esm = __webpack_require__("../../../brave/node_modules/.pnpm/styled-components@6.4.3_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/styled-components/dist/styled-components.esm.js");
// EXTERNAL MODULE: ./node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/react/button.js + 1 modules
var react_button = __webpack_require__("../../../brave/node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/react/button.js");
// EXTERNAL MODULE: ./node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/tokens/css/variables.js
var variables = __webpack_require__("../../../brave/node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/tokens/css/variables.js");
// EXTERNAL MODULE: ./components/common/locale.ts
var locale = __webpack_require__("../../../brave/components/common/locale.ts");
// EXTERNAL MODULE: ../out/code_search_linux_Component_x64/gen/brave/components/brave_news/common/brave_news.mojom.m.js
var brave_news_mojom_m = __webpack_require__("./brave/components/brave_news/common/brave_news.mojom.m.js");
// EXTERNAL MODULE: ./components/common/Flex.tsx
var Flex = __webpack_require__("../../../brave/components/common/Flex.tsx");
// EXTERNAL MODULE: ./components/brave_news/browser/resources/shared/api.ts
var api = __webpack_require__("../../../brave/components/brave_news/browser/resources/shared/api.ts");
// EXTERNAL MODULE: ./components/brave_news/browser/resources/shared/Icons.tsx
var Icons = __webpack_require__("../../../brave/components/brave_news/browser/resources/shared/Icons.tsx");
// EXTERNAL MODULE: ./node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/react/buttonMenu.js + 2 modules
var buttonMenu = __webpack_require__("../../../brave/node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/react/buttonMenu.js");
// EXTERNAL MODULE: ./node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/react/icon.js + 1 modules
var icon = __webpack_require__("../../../brave/node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/react/icon.js");
// EXTERNAL MODULE: ./components/brave_news/browser/resources/shared/channel.ts
var channel = __webpack_require__("../../../brave/components/brave_news/browser/resources/shared/channel.ts");
;// ./components/common/useRelativeTime.ts
// Copyright (c) 2024 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.

// Set numeric to auto so we get 'yesterday' instead of '1 day ago'
const rtf = new Intl.RelativeTimeFormat(undefined, {
    numeric: 'auto'
});
const second = 1000;
const minute = 60 * second;
const hour = 60 * minute;
const day = 24 * hour;
const week = 7 * day;
const year = 365 * day;
const durations = {
    second, minute, hour, day, week, year
};
// Formats a time relative to now as the rounded number of units.
const getRelativeTime = (time) => {
    var _a;
    const now = Date.now();
    const then = new Date(time).getTime();
    const diff = then - now;
    const [unit, duration] = (_a = Object.entries(durations).findLast(([, duration]) => Math.abs(diff) > duration)) !== null && _a !== void 0 ? _a : ['second', 1000];
    const amount = Math.floor(diff / duration);
    return {
        formatted: rtf.format(amount, unit),
        updatesIn: Math.max(10 * minute, duration - (Math.abs(diff - amount))),
    };
};
function useRelativeTime(time) {
    const [formatted, setFormatted] = (0,react_bundle_js_React_.useState)('');
    (0,react_bundle_js_React_.useEffect)(() => {
        if (!time)
            return;
        let timeout;
        const update = () => {
            const { formatted, updatesIn } = getRelativeTime(time);
            setFormatted(formatted);
            timeout = setTimeout(update, updatesIn);
        };
        update();
        return () => {
            clearTimeout(timeout);
        };
    }, [time]);
    return formatted;
}

// EXTERNAL MODULE: ./components/common/mojomUtils.ts
var mojomUtils = __webpack_require__("../../../brave/components/common/mojomUtils.ts");
;// ./components/brave_news/browser/resources/feed/ArticleMetaRow.tsx
// Copyright (c) 2023 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.













const MenuButton = (0,styled_components_esm["default"])((0,react_button["default"])).withConfig({ displayName: "MenuButton", componentId: "sc-7c3z80" }) `
  --leo-button-padding: 0;

  flex-grow: 0;
`;
const MetaInfoContainer = styled_components_esm["default"].h4.withConfig({ displayName: "MetaInfoContainer", componentId: "sc-lbelr" }) `
  --leo-icon-size: 12px;

  margin: 0;

  font: ${variables.font.xSmall.regular};
  color: var(--bn-glass-50);

  display: flex;
  align-items: center;
  gap: ${variables.spacing.s};
`;
const publisherDescription = (article) => {
    if (article.publisherName)
        return article.publisherName;
    const url = new URL(article.url.url);
    return url.hostname;
};
function MetaInfo(props) {
    var _a;
    const relativeTime = useRelativeTime((0,mojomUtils.mojoTimeToJSDate)(props.article.publishTime));
    const maybeChannel = !props.hideChannel && react_bundle_js_React_.createElement(react_bundle_js_React_.Fragment, null,
        "\u2022 ", (_a = Icons.channelIcons[props.article.categoryName]) !== null && _a !== void 0 ? _a : Icons.channelIcons.default,
        " ",
        (0,channel.getTranslatedChannelName)(props.article.categoryName));
    return react_bundle_js_React_.createElement(MetaInfoContainer, null,
        publisherDescription(props.article),
        " ",
        maybeChannel,
        " \u2022 ",
        relativeTime);
}
function ArticleMetaRow(props) {
    return react_bundle_js_React_.createElement(Flex["default"], { direction: "row", justify: "space-between", align: "center", onClick: (e) => { e.stopPropagation(); } },
        react_bundle_js_React_.createElement(MetaInfo, { ...props }),
        react_bundle_js_React_.createElement(buttonMenu["default"], null,
            react_bundle_js_React_.createElement(MenuButton, { slot: 'anchor-content', kind: 'plain-faint', size: "tiny" },
                react_bundle_js_React_.createElement(icon["default"], { name: 'more-horizontal' })),
            react_bundle_js_React_.createElement("leo-menu-item", { onClick: e => {
                    (0,api["default"])().setPublisherPref(props.article.publisherId, api.UserEnabled.DISABLED);
                    e.stopPropagation();
                } }, (0,locale.formatLocale)("BRAVE_NEWS_HIDE_CONTENT_FROM" /* S.BRAVE_NEWS_HIDE_CONTENT_FROM */, {
                $1: publisherDescription(props.article)
            }))));
}

// EXTERNAL MODULE: ./components/brave_news/browser/resources/feed/Card.tsx + 1 modules
var Card = __webpack_require__("../../../brave/components/brave_news/browser/resources/feed/Card.tsx");
;// ./components/brave_news/browser/resources/feed/Article.tsx
// Copyright (c) 2023 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.







const Container = (0,styled_components_esm["default"])((0,Card["default"])).withConfig({ displayName: "Container", componentId: "sc-c31kbm" }) `
  display: flex;
  flex-direction: column;
  gap: ${variables.spacing.s};
  padding-top: ${variables.spacing.l};
`;
function Article({ info, hideChannel, feedDepth }) {
    var _a, _b, _c, _d;
    const { reportVisit, openArticlesInNewTab } = (0,Context.useBraveNews)();
    const url = info.data.url.url;
    return react_bundle_js_React_.createElement(Container, { onClick: e => {
            (0,Card.braveNewsCardClickHandler)(url, openArticlesInNewTab)(e);
            if (feedDepth !== undefined) {
                reportVisit(feedDepth);
            }
        } },
        react_bundle_js_React_.createElement(ArticleMetaRow, { article: info.data, hideChannel: hideChannel }),
        react_bundle_js_React_.createElement(Flex["default"], { direction: 'row', gap: variables.spacing.xl, justify: 'space-between', align: 'start' },
            react_bundle_js_React_.createElement(Card.Title, null,
                react_bundle_js_React_.createElement(Card.BraveNewsLink, { href: url, feedDepth: feedDepth }, info.data.title)),
            react_bundle_js_React_.createElement(Card.SmallImage, { loading: 'lazy', src: (_d = (_b = (_a = info.data.image.paddedImageUrl) === null || _a === void 0 ? void 0 : _a.url) !== null && _b !== void 0 ? _b : (_c = info.data.image.imageUrl) === null || _c === void 0 ? void 0 : _c.url) !== null && _d !== void 0 ? _d : '' })));
}

;// ./components/brave_news/browser/resources/feed/CaughtUp.tsx
// Copyright (c) 2023 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.






const CaughtUp_Container = (0,styled_components_esm["default"])((0,Flex["default"])).withConfig({ displayName: "Container", componentId: "sc-1xgvq8k" }) `
  color: var(--bn-glass-50);
  gap: ${variables.spacing.xl};

  & > hr {
    flex: 1;
    border-color: var(--bn-glass-10);
  }
`;
function CaughtUp() {
    return react_bundle_js_React_.createElement(CaughtUp_Container, { align: 'center', justify: 'stretch' },
        react_bundle_js_React_.createElement("hr", null),
        react_bundle_js_React_.createElement(Flex["default"], { align: 'center', gap: 6 },
            react_bundle_js_React_.createElement(icon["default"], { name: 'check-circle-outline' }),
            " ",
            react_bundle_js_React_.createElement("span", null, (0,locale.getLocale)("BRAVE_NEWS_CAUGHT_UP" /* S.BRAVE_NEWS_CAUGHT_UP */))),
        react_bundle_js_React_.createElement("hr", null));
}

;// ./components/brave_news/browser/resources/feed/Cluster.tsx
// Copyright (c) 2023 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.








const Cluster_Container = (0,styled_components_esm["default"])((0,Card["default"])).withConfig({ displayName: "Container", componentId: "sc-t4k2qe" }) `
  display: flex;
  flex-direction: column;
  gap: ${variables.spacing.l};

  & > ${Card.Title} {
    --leo-icon-color: currentColor;
    --leo-icon-size: ${variables.icon.s};

    gap: ${variables.spacing.m};
    align-items: center;

    margin: ${variables.spacing.m} 0;
  }

  & > ${Card["default"]} {
    border-radius: ${variables.radius.m};
  }
`;
function Cluster({ info, feedDepth }) {
    var _a;
    const groupName = info.type === brave_news_mojom_m.ClusterType.CHANNEL
        ? (0,channel.getTranslatedChannelName)(info.id)
        : info.id;
    return react_bundle_js_React_.createElement(Cluster_Container, null,
        react_bundle_js_React_.createElement(Card.Title, null, (_a = Icons.channelIcons[info.id]) !== null && _a !== void 0 ? _a : Icons.channelIcons.default,
            " ",
            groupName),
        info.articles.map((a, i) => {
            const info = a.article || a.hero;
            return react_bundle_js_React_.createElement(Article, { key: i, info: info, hideChannel: info.type === brave_news_mojom_m.ClusterType.CHANNEL, feedDepth: feedDepth === undefined ? undefined : (feedDepth + i) });
        }));
}

// EXTERNAL MODULE: ./components/brave_news/browser/resources/shared/PublisherCard.tsx + 1 modules
var PublisherCard = __webpack_require__("../../../brave/components/brave_news/browser/resources/shared/PublisherCard.tsx");
;// ./components/brave_news/browser/resources/feed/Discover.tsx
// Copyright (c) 2023 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.







const Row = styled_components_esm["default"].div.withConfig({ displayName: "Row", componentId: "sc-15cyjql" }) `
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: ${variables.spacing['2Xl']};
  margin-top: ${variables.spacing.m};
`;
const TitleIcon = (0,styled_components_esm["default"])((0,icon["default"])).withConfig({ displayName: "TitleIcon", componentId: "sc-f3xt4z" }) `
  --leo-icon-size: ${variables.icon.s};
  margin-right: ${variables.spacing.s};
`;
const Discover_Container = (0,styled_components_esm["default"])((0,Card["default"])).withConfig({ displayName: "Container", componentId: "sc-us0ngd" }) `
  padding: ${variables.spacing['2Xl']} ${variables.spacing.xl};
`;
function Component({ info }) {
    return react_bundle_js_React_.createElement(Discover_Container, null,
        react_bundle_js_React_.createElement(Card.Title, null,
            react_bundle_js_React_.createElement(TitleIcon, { name: "star-outline" }),
            (0,locale.getLocale)("BRAVE_NEWS_SOURCES_RECOMMENDATION" /* S.BRAVE_NEWS_SOURCES_RECOMMENDATION */)),
        react_bundle_js_React_.createElement(Row, null, info.publisherIds.map(p => react_bundle_js_React_.createElement(PublisherCard["default"], { key: p, publisherId: p }))));
}

;// ./components/brave_news/browser/resources/feed/Hero.tsx






const Hero_Container = (0,styled_components_esm["default"])((0,Card["default"])).withConfig({ displayName: "Container", componentId: "sc-czvmx4" }) `
  display: flex;
  flex-direction: column;
  gap: ${variables.spacing.s};

  & > ${Card.LargeImage} {
    margin-bottom: ${variables.spacing.l};
  }
`;
function HeroArticle({ info, feedDepth }) {
    var _a, _b, _c, _d;
    const { reportVisit, openArticlesInNewTab } = (0,Context.useBraveNews)();
    return react_bundle_js_React_.createElement(Hero_Container, { onClick: e => {
            (0,Card.braveNewsCardClickHandler)(info.data.url.url, openArticlesInNewTab)(e);
            if (feedDepth !== undefined) {
                reportVisit(feedDepth);
            }
        } },
        react_bundle_js_React_.createElement(Card.LargeImage, { loading: 'lazy', src: (_d = (_b = (_a = info.data.image.paddedImageUrl) === null || _a === void 0 ? void 0 : _a.url) !== null && _b !== void 0 ? _b : (_c = info.data.image.imageUrl) === null || _c === void 0 ? void 0 : _c.url) !== null && _d !== void 0 ? _d : '' }),
        react_bundle_js_React_.createElement(ArticleMetaRow, { article: info.data }),
        react_bundle_js_React_.createElement(Card.Title, null,
            react_bundle_js_React_.createElement(Card.BraveNewsLink, { href: info.data.url.url, feedDepth: feedDepth }, info.data.title)));
}

// EXTERNAL MODULE: ./node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/react/progressRing.js + 1 modules
var progressRing = __webpack_require__("../../../brave/node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/react/progressRing.js");
;// ./components/brave_news/browser/resources/feed/LoadingCard.tsx
// Copyright (c) 2023 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.




const LoadingCard_Container = (0,styled_components_esm["default"])((0,Card["default"])).withConfig({ displayName: "Container", componentId: "sc-1asx61j" }) `
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Spinner = (0,styled_components_esm["default"])((0,progressRing["default"])).withConfig({ displayName: "Spinner", componentId: "sc-1l8itmi" }) `
  --leo-progressring-color: var(--bn-glass-25);
`;
function LoadingCard() {
    return react_bundle_js_React_.createElement(LoadingCard_Container, null,
        react_bundle_js_React_.createElement(Spinner, null));
}

;// ./components/brave_news/browser/resources/feed/NoArticles.tsx
// Copyright (c) 2023 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.






const NoArticles_Container = (0,styled_components_esm["default"])((0,Flex["default"])).withConfig({ displayName: "Container", componentId: "sc-10aujfs" }) `
  text-align: center;

  padding: ${variables.spacing['3Xl']};
  gap: ${variables.spacing.m};
  color: var(--bn-glass-70);

  & > svg {
    margin-bottom: ${variables.spacing['2Xl']};
    fill: none;
  }

  & > leo-button {
    flex: 0;
  }
`;
function NoArticles() {
    return react_bundle_js_React_.createElement(NoArticles_Container, { align: 'center', direction: 'column', justify: 'center', gap: variables.spacing.m },
        react_bundle_js_React_.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "99", height: "88", viewBox: "0 0 99 88", fill: "none" },
            react_bundle_js_React_.createElement("path", { d: "M9.5 0.5C4.80558 0.5 1 4.30558 1 9V79C1 83.6944 4.80558 87.5 9.5 87.5H89.5C94.1944 87.5 98 83.6944 98 79V9C98 4.30558 94.1944 0.5 89.5 0.5H9.5Z", stroke: "url(#paint0_linear_5051_10730)" }),
            react_bundle_js_React_.createElement("path", { d: "M9.5 13C9.5 10.7909 11.2909 9 13.5 9H85.5C87.7091 9 89.5 10.7909 89.5 13V52C89.5 54.2091 87.7091 56 85.5 56H13.5C11.2909 56 9.5 54.2091 9.5 52V13Z", fill: "url(#paint1_linear_5051_10730)" }),
            react_bundle_js_React_.createElement("rect", { x: "9.5", y: "69", width: "80", height: "4", rx: "2", fill: "url(#paint2_linear_5051_10730)" }),
            react_bundle_js_React_.createElement("rect", { x: "9.5", y: "59", width: "48", height: "2", rx: "1", fill: "url(#paint3_linear_5051_10730)" }),
            react_bundle_js_React_.createElement("rect", { x: "9.5", y: "75", width: "64", height: "4", rx: "2", fill: "url(#paint4_linear_5051_10730)" }),
            react_bundle_js_React_.createElement("defs", null,
                react_bundle_js_React_.createElement("linearGradient", { id: "paint0_linear_5051_10730", x1: "49.5", y1: "1", x2: "49.5", y2: "78.5", gradientUnits: "userSpaceOnUse" },
                    react_bundle_js_React_.createElement("stop", { stopColor: "white", stopOpacity: "0.15" }),
                    react_bundle_js_React_.createElement("stop", { offset: "1", stopColor: "white", stopOpacity: "0" })),
                react_bundle_js_React_.createElement("linearGradient", { id: "paint1_linear_5051_10730", x1: "9.5", y1: "33", x2: "89.5", y2: "33", gradientUnits: "userSpaceOnUse" },
                    react_bundle_js_React_.createElement("stop", { stopColor: "white", stopOpacity: "0.03" }),
                    react_bundle_js_React_.createElement("stop", { offset: "1", stopColor: "white", stopOpacity: "0.2" })),
                react_bundle_js_React_.createElement("linearGradient", { id: "paint2_linear_5051_10730", x1: "9.5", y1: "71.0426", x2: "89.5", y2: "71.0425", gradientUnits: "userSpaceOnUse" },
                    react_bundle_js_React_.createElement("stop", { stopColor: "white", stopOpacity: "0.03" }),
                    react_bundle_js_React_.createElement("stop", { offset: "1", stopColor: "white", stopOpacity: "0.2" })),
                react_bundle_js_React_.createElement("linearGradient", { id: "paint3_linear_5051_10730", x1: "9.5", y1: "60.0213", x2: "57.5", y2: "60.0213", gradientUnits: "userSpaceOnUse" },
                    react_bundle_js_React_.createElement("stop", { stopColor: "white", stopOpacity: "0.03" }),
                    react_bundle_js_React_.createElement("stop", { offset: "1", stopColor: "white", stopOpacity: "0.2" })),
                react_bundle_js_React_.createElement("linearGradient", { id: "paint4_linear_5051_10730", x1: "9.5", y1: "77.0426", x2: "73.5", y2: "77.0425", gradientUnits: "userSpaceOnUse" },
                    react_bundle_js_React_.createElement("stop", { stopColor: "white", stopOpacity: "0.03" }),
                    react_bundle_js_React_.createElement("stop", { offset: "1", stopColor: "white", stopOpacity: "0.2" })))),
        react_bundle_js_React_.createElement(Card.Title, null, (0,locale.getLocale)("BRAVE_NEWS_NO_ARTICLES_TITLE" /* S.BRAVE_NEWS_NO_ARTICLES_TITLE */)),
        react_bundle_js_React_.createElement("div", null, (0,locale.getLocale)("BRAVE_NEWS_NO_ARTICLES_MESSAGE" /* S.BRAVE_NEWS_NO_ARTICLES_MESSAGE */)));
}

;// ./components/brave_news/browser/resources/NewsButton.tsx
// Copyright (c) 2023 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.


/* harmony default export */ const NewsButton = ((0,styled_components_esm["default"])((0,react_button["default"])).withConfig({ componentId: "sc-1m7ydgo" }) `
  --leo-button-color: var(--bn-glass-10);

  border-radius: 20px;
  overflow: hidden;
  backdrop-filter: brightness(0.8) blur(32px);
`);

;// ./components/brave_news/browser/resources/feed/NoFeeds.tsx
// Copyright (c) 2023 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.








const NoFeeds_Container = (0,styled_components_esm["default"])((0,Flex["default"])).withConfig({ displayName: "Container", componentId: "sc-3muq7o" }) `
  text-align: center;

  padding: ${variables.spacing['3Xl']};
  gap: ${variables.spacing.m};
  color: var(--bn-glass-70);

  & > svg {
    margin-bottom: ${variables.spacing.xl};
    fill: none;
  }
`;
function NoFeeds() {
    const { setCustomizePage } = (0,Context.useBraveNews)();
    return react_bundle_js_React_.createElement(NoFeeds_Container, { align: 'center', direction: 'column', justify: 'center', gap: variables.spacing.m },
        react_bundle_js_React_.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', width: "99", viewBox: '0 0 64 46' },
            react_bundle_js_React_.createElement("path", { fill: '#F0F2FF', fillRule: 'evenodd', d: 'M49.67 46H13.33C5.36 46 0 41.32 0 34.37c0-5.45 3.08-10.33 7.84-12.74l-.02-.84C7.82 9.69 16.92.67 28.1.67a20.3 20.3 0 0118.37 11.65c9.74.4 17.54 8.4 17.54 18.17C64 39.33 57.84 46 49.67 46zm-3.98-28.37c-.24 0-.47.02-.7.05-1.24.14-2.4-.6-2.81-1.77A14.94 14.94 0 0028.08 6a14.88 14.88 0 00-14.92 14.79c0 .68.06 1.37.18 2.11a2.67 2.67 0 01-1.8 2.96 8.95 8.95 0 00-6.2 8.5c0 5.85 6.12 6.3 8 6.3h36.33c4.47 0 9-3.5 9-10.17 0-7.1-5.83-12.86-12.98-12.86zM40 35.33c-.68 0-1.37-.26-1.89-.78-.05-.04-2.06-1.88-6.11-1.88-4.05 0-6.06 1.84-6.14 1.91-1.07 1-2.75.97-3.76-.07a2.65 2.65 0 01.01-3.73c.36-.35 3.63-3.45 9.89-3.45 6.26 0 9.53 3.1 9.89 3.45A2.66 2.66 0 0140 35.33zm-5.33-16H40v5.34h-5.33v-5.34zm-10.67 0h5.33v5.34H24v-5.34z', clipRule: 'evenodd' })),
        react_bundle_js_React_.createElement(Card.Title, null, (0,locale.getLocale)("BRAVE_NEWS_NO_CONTENT_HEADING" /* S.BRAVE_NEWS_NO_CONTENT_HEADING */)),
        react_bundle_js_React_.createElement("div", null, (0,locale.getLocale)("BRAVE_NEWS_NO_CONTENT_MESSAGE" /* S.BRAVE_NEWS_NO_CONTENT_MESSAGE */)),
        react_bundle_js_React_.createElement(NewsButton, { onClick: () => setCustomizePage('news') }, (0,locale.getLocale)("BRAVE_NEWS_NO_CONTENT_ACTION_LABEL" /* S.BRAVE_NEWS_NO_CONTENT_ACTION_LABEL */)));
}

;// ./components/brave_news/browser/resources/shared/history.ts
// Copyright (c) 2023 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.
const setHistoryState = (state) => {
    const oldState = typeof history.state === "object" ? history.state : {};
    const newState = { ...oldState, ...state };
    history.replaceState(newState, document.title);
};
const getHistoryValue = (name, defaultValue) => {
    var _a;
    const state = (_a = history.state) !== null && _a !== void 0 ? _a : {};
    return name in state ? state[name] : defaultValue;
};

;// ./components/brave_news/browser/resources/feed/NotConnected.tsx
// Copyright (c) 2024 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.








const NotConnected_Container = (0,styled_components_esm["default"])((0,Flex["default"])).withConfig({ displayName: "Container", componentId: "sc-go55qb" }) `
  text-align: center;

  padding: ${variables.spacing['3Xl']};
  gap: ${variables.spacing.m};
  color: var(--bn-glass-70);

  & > svg {
    margin-bottom: ${variables.spacing.xl};
    fill: none;
  }
`;
function NotConnected() {
    const { refreshFeedV2 } = (0,Context.useBraveNews)();
    return react_bundle_js_React_.createElement(NotConnected_Container, { align: 'center', direction: 'column', justify: 'center', gap: variables.spacing.m },
        react_bundle_js_React_.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', width: "99", viewBox: '0 0 64 46' },
            react_bundle_js_React_.createElement("path", { fill: '#F0F2FF', fillRule: 'evenodd', d: 'M49.67 46H13.33C5.36 46 0 41.32 0 34.37c0-5.45 3.08-10.33 7.84-12.74l-.02-.84C7.82 9.69 16.92.67 28.1.67a20.3 20.3 0 0118.37 11.65c9.74.4 17.54 8.4 17.54 18.17C64 39.33 57.84 46 49.67 46zm-3.98-28.37c-.24 0-.47.02-.7.05-1.24.14-2.4-.6-2.81-1.77A14.94 14.94 0 0028.08 6a14.88 14.88 0 00-14.92 14.79c0 .68.06 1.37.18 2.11a2.67 2.67 0 01-1.8 2.96 8.95 8.95 0 00-6.2 8.5c0 5.85 6.12 6.3 8 6.3h36.33c4.47 0 9-3.5 9-10.17 0-7.1-5.83-12.86-12.98-12.86zM40 35.33c-.68 0-1.37-.26-1.89-.78-.05-.04-2.06-1.88-6.11-1.88-4.05 0-6.06 1.84-6.14 1.91-1.07 1-2.75.97-3.76-.07a2.65 2.65 0 01.01-3.73c.36-.35 3.63-3.45 9.89-3.45 6.26 0 9.53 3.1 9.89 3.45A2.66 2.66 0 0140 35.33zm-5.33-16H40v5.34h-5.33v-5.34zm-10.67 0h5.33v5.34H24v-5.34z', clipRule: 'evenodd' })),
        react_bundle_js_React_.createElement(Card.Title, null, (0,locale.getLocale)("BRAVE_NEWS_OFFLINE_TITLE" /* S.BRAVE_NEWS_OFFLINE_TITLE */)),
        react_bundle_js_React_.createElement("div", null, (0,locale.getLocale)("BRAVE_NEWS_OFFLINE_MESSAGE" /* S.BRAVE_NEWS_OFFLINE_MESSAGE */)),
        react_bundle_js_React_.createElement(NewsButton, { onClick: refreshFeedV2 }, (0,locale.getLocale)("BRAVE_NEWS_REFRESH_FEED" /* S.BRAVE_NEWS_REFRESH_FEED */)));
}

;// ./components/brave_news/browser/resources/Feed.tsx
// Copyright (c) 2023 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.














const CARD_CLASS = 'feed-card';
const FeedContainer = styled_components_esm["default"].div.withConfig({ displayName: "FeedContainer", componentId: "sc-v6aw0e" }) `
  width: 540px;
  display: flex;
  flex-direction: column;
  gap: ${variables.spacing.xl};
`;
const getKey = (feedItem, index) => {
    if (feedItem.article)
        return feedItem.article.data.url.url;
    if (feedItem.hero)
        return feedItem.hero.data.url.url;
    if (feedItem.cluster)
        return index;
    if (feedItem.discover)
        return index;
    throw new Error("Unsupported FeedItem!");
};
const NEWS_FEED_CLASS = "news-feed";
// The number of cards to load at a time. Making this too high will result in
// jank as all the cards are rendered at once.
const PAGE_SIZE = 25;
const HISTORY_SCROLL_DATA = 'bn-scroll-data';
const HISTORY_CARD_COUNT = 'bn-card-count';
const CARD_COUNT_ATTRIBUTE = 'data-news-card-count';
const HOUR_MS = 60 * 60 * 1000;
const saveScrollPos = (itemId) => () => {
    var _a;
    setHistoryState({
        [HISTORY_SCROLL_DATA]: {
            itemId: itemId,
            innerWidth: window.innerWidth,
            innerHeight: window.innerHeight,
            scrollPos: (_a = document.scrollingElement) === null || _a === void 0 ? void 0 : _a.scrollTop
        }
    });
};
const errors = {
    [brave_news_mojom_m.FeedV2Error.ConnectionError]: react_bundle_js_React_.createElement(NotConnected, null),
    [brave_news_mojom_m.FeedV2Error.NoArticles]: react_bundle_js_React_.createElement(NoArticles, null),
    [brave_news_mojom_m.FeedV2Error.NoFeeds]: react_bundle_js_React_.createElement(NoFeeds, null)
};
function Feed_Component({ feed, onViewCountChange, onSessionStart }) {
    var _a;
    const [cardCount, setCardCount] = react_bundle_js_React_.useState(getHistoryValue(HISTORY_CARD_COUNT, PAGE_SIZE));
    // Store the number of cards we've loaded in history - otherwise when we
    // navigate back we might not be able to scroll down far enough.
    react_bundle_js_React_.useEffect(() => {
        setHistoryState({ [HISTORY_CARD_COUNT]: cardCount });
    }, [cardCount]);
    // Track the feed scroll position - if we mount this component somewhere with
    // a scroll data saved in the state, try and restore the scroll position.
    react_bundle_js_React_.useEffect(() => {
        const scrollData = getHistoryValue(HISTORY_SCROLL_DATA, undefined);
        if (scrollData) {
            // If the viewport size hasn't changed, restore the scroll position.
            // Otherwise, scroll the clicked item into view.
            const scroll = scrollData.innerHeight === window.innerHeight && scrollData.innerWidth === window.innerWidth
                ? () => { var _a; return (_a = document.scrollingElement) === null || _a === void 0 ? void 0 : _a.scrollTo({ top: scrollData.scrollPos }); }
                : () => { var _a; return (_a = document.querySelector(`[data-id="${scrollData.itemId}"]`)) === null || _a === void 0 ? void 0 : _a.scrollIntoView(); };
            scroll();
        }
    }, []);
    const loadMoreObserver = react_bundle_js_React_.useRef(new IntersectionObserver(entries => {
        // While the feed is loading we get some notifications for fully
        // invisible cards.
        if (!entries.some(i => { var _a; return ((_a = i.target) === null || _a === void 0 ? void 0 : _a.classList.contains(CARD_CLASS)) && i.intersectionRatio !== 0; }))
            return;
        setCardCount(cardCount => cardCount + PAGE_SIZE);
    }, {
        rootMargin: '0px 0px 1000px 0px',
    }));
    // Create intersection observer & relevant state to measure
    // the amount of viewed cards in the session.
    const lastViewedCardCount = react_bundle_js_React_.useRef(0);
    const lastUsageTime = react_bundle_js_React_.useRef(null);
    const viewDepthIntersectionObserver = react_bundle_js_React_.useRef(new IntersectionObserver(entries => {
        const inViewCounts = entries
            .filter(e => e.intersectionRatio === 1)
            .map(e => Number(e.target.getAttribute(CARD_COUNT_ATTRIBUTE)));
        if (!inViewCounts.length) {
            return;
        }
        if (onSessionStart) {
            if (!lastUsageTime.current || (new Date().getTime() - HOUR_MS) > lastUsageTime.current.getTime()) {
                onSessionStart();
            }
        }
        lastUsageTime.current = new Date();
        const largestCardCount = Math.max(...inViewCounts);
        // Ensure we only report increases in scroll depth
        // by comparing to the last scroll card count
        if (lastViewedCardCount.current >= largestCardCount) {
            return;
        }
        const newViews = largestCardCount - lastViewedCardCount.current;
        lastViewedCardCount.current = largestCardCount;
        if (onViewCountChange) {
            onViewCountChange(newViews);
        }
    }, {
        threshold: 1
    }));
    const registerViewDepthObservation = react_bundle_js_React_.useCallback((element) => {
        if (!element) {
            return;
        }
        viewDepthIntersectionObserver.current.observe(element);
    }, []);
    // Only observe the bottom card
    const setLastCardRef = react_bundle_js_React_.useCallback((el) => {
        loadMoreObserver.current.disconnect();
        if (!el)
            return;
        loadMoreObserver.current.observe(el);
    }, []);
    const cards = react_bundle_js_React_.useMemo(() => {
        var _a;
        const count = Math.min((_a = feed === null || feed === void 0 ? void 0 : feed.items.length) !== null && _a !== void 0 ? _a : 0, cardCount);
        let currentCardCount = 0;
        const setRefAtIndex = (index) => (element) => {
            const isLast = index === count - 1;
            if (isLast)
                setLastCardRef(element);
            registerViewDepthObservation(element);
        };
        return feed === null || feed === void 0 ? void 0 : feed.items.slice(0, count).map((item, index) => {
            let el;
            if (item.article) {
                el = react_bundle_js_React_.createElement(Article, { info: item.article, feedDepth: currentCardCount });
            }
            else if (item.cluster) {
                el = react_bundle_js_React_.createElement(Cluster, { info: item.cluster, feedDepth: currentCardCount });
            }
            else if (item.discover) {
                el = react_bundle_js_React_.createElement(Component, { info: item.discover });
            }
            else if (item.hero) {
                el = react_bundle_js_React_.createElement(HeroArticle, { info: item.hero, feedDepth: currentCardCount });
            }
            else {
                throw new Error("Invalid item!" + JSON.stringify(item));
            }
            if (item.cluster) {
                currentCardCount += item.cluster.articles.length;
            }
            else {
                currentCardCount++;
            }
            const key = getKey(item, index);
            return react_bundle_js_React_.createElement("div", { className: CARD_CLASS, onClickCapture: saveScrollPos(key), key: key, "data-id": key, [CARD_COUNT_ATTRIBUTE]: currentCardCount, ref: setRefAtIndex(index) }, el);
        });
    }, [cardCount, feed === null || feed === void 0 ? void 0 : feed.items, registerViewDepthObservation]);
    return react_bundle_js_React_.createElement(FeedContainer, { className: NEWS_FEED_CLASS }, feed
        ? (_a = errors[feed.error]) !== null && _a !== void 0 ? _a : react_bundle_js_React_.createElement(react_bundle_js_React_.Fragment, null,
            cards,
            react_bundle_js_React_.createElement(CaughtUp, null))
        : react_bundle_js_React_.createElement(LoadingCard, null));
}

;// ./components/brave_news/browser/resources/braveNewsLogo.svg
/* harmony default export */ const braveNewsLogo = (__webpack_require__.p + "a000e9296a048733701809c0863ed291.svg");
;// ./components/brave_news/browser/resources/OptIn.tsx
/* Copyright (c) 2025 The Brave Authors. All rights reserved.
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at https://mozilla.org/MPL/2.0/. */








const OptIn_Container = styled_components_esm["default"].div.withConfig({ displayName: "Container", componentId: "sc-gdjipk" }) `
  background: rgba(53, 53, 53, 0.47);
  backdrop-filter: blur(62px);
  border-radius: 16px;
  padding: 44px 82px 36px;
  width: 680px;

  color: ${variables.color.text.primary};
  font: ${variables.font.default.regular};
  text-align: center;

  display: flex;
  flex-direction: column;
  gap: 32px;

  > * {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  h3 {
    font: ${variables.font.heading.h3};
    margin: 0;
  }

  p {
    margin: 0;
  }

  .graphic {
    background-image: url(${braveNewsLogo});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    height: 60px;
  }
`;
function OptIn() {
    const { toggleBraveNewsOnNTP } = (0,Context.useBraveNews)();
    return (react_bundle_js_React_.createElement(OptIn_Container, { "data-theme": 'dark', className: NEWS_FEED_CLASS },
        react_bundle_js_React_.createElement("div", { className: 'graphic' }),
        react_bundle_js_React_.createElement("h3", null, (0,locale.getLocale)("BRAVE_NEWS_INTRO_TITLE" /* S.BRAVE_NEWS_INTRO_TITLE */)),
        react_bundle_js_React_.createElement("div", null,
            react_bundle_js_React_.createElement("p", null, (0,locale.getLocale)("BRAVE_NEWS_INTRO_DESCRIPTION" /* S.BRAVE_NEWS_INTRO_DESCRIPTION */))),
        react_bundle_js_React_.createElement("div", null,
            react_bundle_js_React_.createElement(react_button["default"], { kind: 'filled', onClick: () => toggleBraveNewsOnNTP(true) }, (0,locale.getLocale)("BRAVE_NEWS_OPT_IN_ACTION_LABEL" /* S.BRAVE_NEWS_OPT_IN_ACTION_LABEL */)),
            react_bundle_js_React_.createElement(react_button["default"], { kind: 'plain-faint', onClick: () => toggleBraveNewsOnNTP(false) }, (0,locale.getLocale)("BRAVE_NEWS_OPT_OUT_ACTION_LABEL" /* S.BRAVE_NEWS_OPT_OUT_ACTION_LABEL */)))));
}

// EXTERNAL MODULE: ./components/brave_news/browser/resources/SettingsButton.tsx
var SettingsButton = __webpack_require__("../../../brave/components/brave_news/browser/resources/SettingsButton.tsx");
;// ./components/brave_news/browser/resources/FeedControls.tsx
// Copyright (c) 2026 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.







const SidebarMenu = react_bundle_js_React_.lazy(() => Promise.all(/*! import() */[__webpack_require__.e("brave_components_brave_news_browser_resources_FeedNavigation_tsx"), __webpack_require__.e("brave_components_brave_news_browser_resources_SidebarMenu_tsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ./SidebarMenu */ "../../../brave/components/brave_news/browser/resources/SidebarMenu.tsx")));
const FeedControls_Container = styled_components_esm["default"].div.withConfig({ displayName: "Container", componentId: "sc-14k13u7" }) `
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
    return (react_bundle_js_React_.createElement(FeedControls_Container, { className: className },
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

;// ./components/brave_news/browser/resources/Variables.tsx
// Copyright (c) 2023 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.

/* harmony default export */ const Variables = (styled_components_esm["default"].div.withConfig({ componentId: "sc-6j565e" }) `
  --bn-text-base: 255, 255, 255;
  --bn-glass-container: rgba(255,255,255,0.05);
  --bn-glass-10: rgba(255, 255, 255, 0.1);
  --bn-glass-25: rgba(255, 255, 255, 0.25);
  --bn-glass-50: rgba(255, 255, 255, 0.5);
  --bn-glass-70: rgba(255, 255, 255, 0.7);
  --bn-glass-100: rgba(255, 255, 255, 1);
`);

// EXTERNAL MODULE: ./components/common/useMediaQuery.ts
var useMediaQuery = __webpack_require__("../../../brave/components/common/useMediaQuery.ts");
;// ./components/brave_news/browser/resources/Page.tsx
// Copyright (c) 2023 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.











const FeedNavigation = react_bundle_js_React_.lazy(() => __webpack_require__.e(/*! import() */ "brave_components_brave_news_browser_resources_FeedNavigation_tsx").then(__webpack_require__.bind(__webpack_require__, /*! ./FeedNavigation */ "../../../brave/components/brave_news/browser/resources/FeedNavigation.tsx")));
const isSmallQuery = '(max-width: 1024px)';
const Root = (0,styled_components_esm["default"])(Variables).withConfig({ displayName: "Root", componentId: "sc-1fqi4ms" }) `
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
const LoadNewContentButton = (0,styled_components_esm["default"])(NewsButton).withConfig({ displayName: "LoadNewContentButton", componentId: "sc-1teex5y" }) `
  position: fixed;
  z-index: 1;
  top: ${variables.spacing['3Xl']};

  flex-grow: 0;

  @media ${isSmallQuery} {
    top: calc(var(--bn-top-bar-height) + var(--leo-spacing-m));
  }
`;
function FeedV2() {
    const isSmall = (0,useMediaQuery["default"])(isSmallQuery);
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
            react_bundle_js_React_.createElement(Feed_Component, { feed: feedV2, onViewCountChange: reportViewCount, onSessionStart: reportSessionStart })),
        react_bundle_js_React_.createElement(ButtonsContainer, { className: 'brave-news-feed-controls' },
            react_bundle_js_React_.createElement(FeedControls, { onCustomize: () => setCustomizePage('news'), showMenu: isSmall })));
}

// EXTERNAL MODULE: ./node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/react/dialog.js + 2 modules
var dialog = __webpack_require__("../../../brave/node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/react/dialog.js");
// EXTERNAL MODULE: ./components/brave_news/browser/resources/customize/Loading.tsx
var Loading = __webpack_require__("../../../brave/components/brave_news/browser/resources/customize/Loading.tsx");
;// ./components/brave_news/browser/resources/customize/Modal.tsx
// Copyright (c) 2022 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.






const Configure = react_bundle_js_React_.lazy(() => __webpack_require__.e(/*! import() */ "brave_components_brave_news_browser_resources_customize_Configure_tsx").then(__webpack_require__.bind(__webpack_require__, /*! ./Configure */ "../../../brave/components/brave_news/browser/resources/customize/Configure.tsx")));
const StyledDialog = (0,styled_components_esm["default"])((0,dialog["default"])).withConfig({ displayName: "StyledDialog", componentId: "sc-47ymvq" }) `
  --leo-dialog-width: 860px;
  --leo-dialog-padding: 0;
  --leo-dialog-background: ${variables.color.container.background};
`;
function BraveNewsModal() {
    const { customizePage, setCustomizePage } = (0,Context.useBraveNews)();
    const shouldRender = !!customizePage;
    if (!shouldRender) {
        return null;
    }
    return (react_bundle_js_React_.createElement(StyledDialog, { isOpen: true, showClose: true, backdropClickCloses: false, onClose: () => setCustomizePage(null) },
        react_bundle_js_React_.createElement(react_bundle_js_React_.Suspense, { fallback: react_bundle_js_React_.createElement(Loading["default"], { fill: true }) },
            react_bundle_js_React_.createElement(Configure, null))));
}

// EXTERNAL MODULE: ./browser/resources/brave_new_tab_page_refresh/context/new_tab_context.ts
var new_tab_context = __webpack_require__("../../../brave/browser/resources/brave_new_tab_page_refresh/context/new_tab_context.ts");
// EXTERNAL MODULE: ./components/common/scoped_css.ts
var scoped_css = __webpack_require__("../../../brave/components/common/scoped_css.ts");
;// ./browser/resources/brave_new_tab_page_refresh/components/news/news_feed.style.ts
/* Copyright (c) 2025 The Brave Authors. All rights reserved.
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at https://mozilla.org/MPL/2.0/. */

const style = scoped_css.scoped.css `
  & {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 30px 30px;
  }
`;
style.passthrough.css `
  @keyframes news-control-fade {
    from {
      opacity: 0;
      visibility: hidden;
    }
    80% {
      opacity: 0;
      visibility: visible;
    }
    to {
      opacity: 1;
      visibility: visible;
    }
  }

  .brave-news-feed-controls, .brave-news-load-new-content-button {
    animation: linear news-control-fade both;
    animation-timeline: scroll();
    animation-range: 0px 100vh;
  }
`;

;// ./browser/resources/brave_new_tab_page_refresh/components/news/news_feed.tsx
/* Copyright (c) 2025 The Brave Authors. All rights reserved.
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at https://mozilla.org/MPL/2.0/. */







function NewsFeed() {
    const braveNews = (0,Context.useBraveNews)();
    const newsFeatureEnabled = (0,new_tab_context.useNewTabState)((s) => s.newsFeatureEnabled);
    const [shouldRenderNews, setShouldRenderNews] = react_bundle_js_React_.useState(false);
    react_bundle_js_React_.useEffect(() => {
        setTimeout(() => setShouldRenderNews(true), 1000);
    }, []);
    if (!newsFeatureEnabled) {
        return null;
    }
    return (react_bundle_js_React_.createElement(react_bundle_js_React_.Fragment, null,
        braveNews.isShowOnNTPPrefEnabled && (react_bundle_js_React_.createElement("div", { "data-css-scope": style.scope }, braveNews.isOptInPrefEnabled ? (shouldRenderNews && react_bundle_js_React_.createElement(FeedV2, null)) : (react_bundle_js_React_.createElement(OptIn, null)))),
        braveNews.customizePage && react_bundle_js_React_.createElement(BraveNewsModal, null)));
}
/* harmony default export */ const news_feed = (NewsFeed);


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

/***/ "../../../brave/components/brave_news/browser/resources/customize/Loading.tsx"
/*!***********************************************************************!*\
  !*** ./components/brave_news/browser/resources/customize/Loading.tsx ***!
  \***********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Loading)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _brave_leo_react_progressRing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @brave/leo/react/progressRing */ "../../../brave/node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/react/progressRing.js");
/* harmony import */ var _brave_leo_tokens_css_variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @brave/leo/tokens/css/variables */ "../../../brave/node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/tokens/css/variables.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "../../../brave/node_modules/.pnpm/styled-components@6.4.3_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/styled-components/dist/styled-components.esm.js");
/* Copyright (c) 2026 The Brave Authors. All rights reserved.
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at https://mozilla.org/MPL/2.0/. */




const LoadingContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({ displayName: "LoadingContainer", componentId: "sc-1iiiryp" }) `
  --leo-progressring-size: ${_brave_leo_tokens_css_variables__WEBPACK_IMPORTED_MODULE_2__.spacing['4Xl']};

  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${_brave_leo_tokens_css_variables__WEBPACK_IMPORTED_MODULE_2__.spacing['4Xl']};
  min-height: 120px;

  ${p => p.fill && (0,styled_components__WEBPACK_IMPORTED_MODULE_3__.css) `
    --leo-progressring-size: 50px;
    min-height: 400px;
    height: 100%;
  `}
`;
function Loading(props) {
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(LoadingContainer, { fill: props.fill },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_brave_leo_react_progressRing__WEBPACK_IMPORTED_MODULE_1__["default"], null)));
}


/***/ },

/***/ "../../../brave/components/brave_news/browser/resources/feed/Card.tsx"
/*!***************************************************************************!*\
  !*** ./components/brave_news/browser/resources/feed/Card.tsx + 1 modules ***!
  \***************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  BraveNewsLink: () => (/* binding */ BraveNewsLink),
  Header: () => (/* binding */ Header),
  LargeImage: () => (/* binding */ LargeImage),
  SmallImage: () => (/* binding */ SmallImage),
  Title: () => (/* binding */ Title),
  braveNewsCardClickHandler: () => (/* binding */ braveNewsCardClickHandler),
  "default": () => (/* binding */ Card)
});
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external ["//resources/brave/react.bundle.js","React"]
var react_bundle_js_React_ = __webpack_require__("react");
// EXTERNAL MODULE: ./node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/tokens/css/variables.js
var variables = __webpack_require__("../../../brave/node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/tokens/css/variables.js");
// EXTERNAL MODULE: ./node_modules/.pnpm/styled-components@6.4.3_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/styled-components/dist/styled-components.esm.js + 7 modules
var styled_components_esm = __webpack_require__("../../../brave/node_modules/.pnpm/styled-components@6.4.3_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/styled-components/dist/styled-components.esm.js");
;// ./components/common/SecureLink.tsx
// Copyright (c) 2023 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.

const defaultAllowedSchemes = ['http:', 'https:'];
const validateScheme = (href, allowedSchemes = defaultAllowedSchemes) => {
    // Special case the empty url - it shouldn't crash anything
    if (!href)
        return;
    const url = new URL(href);
    if (!allowedSchemes.includes(url.protocol)) {
        throw new Error(`Unsupported scheme ${url.protocol} on url ${href}`);
    }
};
/**
 * Endeavors to do the right thing when triggering a link via a mouse click.
 * Left click should open the link in the current tab, while
 * Control/Command/Middle click should open the link in a new tab.
 * @param href The href to open
 * @param e The mouse event
 */
const handleOpenURLClick = (href, e) => {
    var _a;
    validateScheme(href);
    // Control click, command click or middle click
    if (e.ctrlKey || e.metaKey || ((_a = e.buttons) !== null && _a !== void 0 ? _a : 0) & 4) {
        window.open(href, '_blank', 'noopener noreferrer');
    }
    else {
        window.location.href = href;
    }
};
/**
 * A curried version of handleOpenURLClick, for use in React event handlers.
 * @param href The href the click handler should open
 * @returns A click event handler
 */
const linkClickHandler = (href) => (e) => handleOpenURLClick(href, e);
/**
 * Identical to the `a` element, except that it validates the HREF points
 * to an allowed scheme. By default, allowed schemes are http: or https:,
 * but this can be overridden.
 */
function SecureLink({ href, allowedSchemes, ...rest }) {
    validateScheme(href, allowedSchemes !== null && allowedSchemes !== void 0 ? allowedSchemes : defaultAllowedSchemes);
    return react_bundle_js_React_.createElement("a", { href: href, ...rest });
}

// EXTERNAL MODULE: ./components/brave_news/browser/resources/shared/Context.tsx + 3 modules
var Context = __webpack_require__("../../../brave/components/brave_news/browser/resources/shared/Context.tsx");
;// ./components/brave_news/browser/resources/feed/Card.tsx
// Copyright (c) 2023 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.





const Header = styled_components_esm["default"].h2.withConfig({ displayName: "Header", componentId: "sc-ofle3i" }) `
  margin: 0;

  font: ${variables.font.heading.h2};
  color: var(--bn-glass-100);

  --leo-icon-size: 18px;
`;
const Title = styled_components_esm["default"].h3.withConfig({ displayName: "Title", componentId: "sc-14j6b1w" }) `
  --leo-icon-color: ${variables.color.icon.default};

  display: flex;
  align-items: center;

  margin: 0;

  text-align: start;
  font: ${variables.font.default.semibold};
  color: var(--bn-glass-100);


  &> a { all: unset; }
`;
const BaseImg = styled_components_esm["default"].img.withConfig({ displayName: "BaseImg", componentId: "sc-euz3pu" }) `
  opacity: 0;
  transition: opacity 400ms ease-in-out;
`;
const HidableImage = ({ onError, onLoad, targetHeight, targetWidth, src, loading, ...rest }) => {
    const ref = react_bundle_js_React_.useRef(null);
    const { shouldRenderImages } = (0,Context.useBraveNews)();
    const delayLoad = !shouldRenderImages && loading === 'lazy';
    const handleLoad = react_bundle_js_React_.useCallback((e) => {
        ref.current.style.opacity = '1';
        onLoad === null || onLoad === void 0 ? void 0 : onLoad(e);
    }, [onLoad]);
    if (src) {
        src = '//brave-image?url=' + encodeURIComponent(src);
    }
    if (targetHeight && targetWidth) {
        const width = Math.round(targetWidth * window.devicePixelRatio);
        const height = Math.round(targetHeight * window.devicePixelRatio);
        src += `&target_size=${width}x${height}`;
    }
    return react_bundle_js_React_.createElement(BaseImg, { ...rest, src: delayLoad ? undefined : src, loading: loading, ref: ref, onLoad: handleLoad });
};
const SmallImage = (0,styled_components_esm["default"])(HidableImage).attrs({ targetHeight: 64, targetWidth: 96 }).withConfig({ displayName: "SmallImage", componentId: "sc-nmv72e" }) `
  &:not([src]) { opacity: 0; }

  min-width: 96px;
  width: 96px;

  height: 64px;

  object-fit: cover;
  object-position: top;

  border-radius: 6px;
`;
const LargeImage = (0,styled_components_esm["default"])(HidableImage).attrs({ targetHeight: 269, targetWidth: 508 }).withConfig({ displayName: "LargeImage", componentId: "sc-106sx1w" }) `
  &:not([src]) { opacity: 0; }

  width: 100%;
  height: 269px;

  object-fit: cover;
  object-position: top;

  border-radius: 6px;
`;
/* harmony default export */ const Card = (styled_components_esm["default"].div.withConfig({ componentId: "sc-kkdnku" }) `
  text-decoration: none;
  background: var(--bn-glass-container);
  border-radius: ${variables.radius.xl};
  color: var(--bn-glass-100);
  padding: ${variables.spacing.xl};

  &:has(${Title} a:focus-visible) {
    box-shadow: ${variables.effect.focusState};
  }

  ${p => p.onClick && 'cursor: pointer'}
`);
const braveNewsCardClickHandler = (href, openArticlesInNewTab, allowedSchemes = defaultAllowedSchemes) => (e) => {
    validateScheme(href, allowedSchemes);
    if (openArticlesInNewTab || e.ctrlKey || e.metaKey || e.buttons & 4) {
        window.open(href, '_blank', 'noopener noreferrer');
    }
    else {
        window.location.href = href;
    }
};
function BraveNewsLink({ feedDepth, ...rest }) {
    const props = { feeddepth: feedDepth, ...rest };
    const { openArticlesInNewTab, reportVisit } = (0,Context.useBraveNews)();
    return react_bundle_js_React_.createElement(SecureLink, { ...props, onClick: e => {
            e.stopPropagation();
            if (feedDepth !== undefined) {
                reportVisit(feedDepth);
            }
        }, target: openArticlesInNewTab ? '_blank' : undefined });
}


/***/ },

/***/ "../../../brave/components/brave_news/browser/resources/shared/FollowButton.tsx"
/*!*************************************************************************!*\
  !*** ./components/brave_news/browser/resources/shared/FollowButton.tsx ***!
  \*************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FollowButton)
/* harmony export */ });
/* harmony import */ var _brave_leo_react_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @brave/leo/react/button */ "../../../brave/node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/react/button.js");
/* harmony import */ var _brave_leo_react_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @brave/leo/react/icon */ "../../../brave/node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/react/icon.js");
/* harmony import */ var _brave_leo_tokens_css_variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @brave/leo/tokens/css/variables */ "../../../brave/node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/tokens/css/variables.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "../../../brave/node_modules/.pnpm/styled-components@6.4.3_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/styled-components/dist/styled-components.esm.js");
// Copyright (c) 2022 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.





const StyledButton = (0,styled_components__WEBPACK_IMPORTED_MODULE_4__["default"])((0,_brave_leo_react_button__WEBPACK_IMPORTED_MODULE_0__["default"])).withConfig({ displayName: "StyledButton", componentId: "sc-3tmu3a" }) `
  --leo-button-color: color-mix(in srgb, ${_brave_leo_tokens_css_variables__WEBPACK_IMPORTED_MODULE_2__.color.neutral[30]} 80%, transparent);
  backdrop-filter: blur(64px);
`;
function FollowButton(props) {
    const { following, ...rest } = props;
    return react__WEBPACK_IMPORTED_MODULE_3__.createElement(StyledButton, { ...rest, fab: true, size: 'tiny' },
        react__WEBPACK_IMPORTED_MODULE_3__.createElement(_brave_leo_react_icon__WEBPACK_IMPORTED_MODULE_1__["default"], { name: following ? 'minus' : 'plus-add' }));
}


/***/ },

/***/ "../../../brave/components/brave_news/browser/resources/shared/PublisherCard.tsx"
/*!**************************************************************************************!*\
  !*** ./components/brave_news/browser/resources/shared/PublisherCard.tsx + 1 modules ***!
  \**************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  DirectPublisherCard: () => (/* binding */ DirectPublisherCard),
  "default": () => (/* binding */ PublisherCard)
});
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./components/common/Flex.tsx
var Flex = __webpack_require__("../../../brave/components/common/Flex.tsx");
// EXTERNAL MODULE: external ["//resources/brave/react.bundle.js","React"]
var react_bundle_js_React_ = __webpack_require__("react");
// EXTERNAL MODULE: ./node_modules/.pnpm/styled-components@6.4.3_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/styled-components/dist/styled-components.esm.js + 7 modules
var styled_components_esm = __webpack_require__("../../../brave/node_modules/.pnpm/styled-components@6.4.3_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/styled-components/dist/styled-components.esm.js");
// EXTERNAL MODULE: ./node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/tokens/css/variables.js
var variables = __webpack_require__("../../../brave/node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/tokens/css/variables.js");
;// ./components/brave_news/browser/resources/customize/colors.ts
// Copyright (c) 2022 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.
// Used to get a random but deterministic distribution of colors.
const stringHashCode = (str) => {
    let hash = 0;
    for (let i = 0; i < str.length; ++i)
        hash = Math.imul(31, hash) + str.charCodeAt(i);
    return (hash | 0) + 2147483647 + 1;
};
const cardColors = [
    '#FF9AA2',
    '#FFB7B2',
    '#FFDAC1',
    '#E2F0CB',
    '#B5EAD7',
    '#C7CEEA'
];
const getCardColor = (key) => {
    const hash = typeof key === 'string' ? stringHashCode(key) : key;
    return cardColors[hash % cardColors.length];
};

// EXTERNAL MODULE: ./components/brave_news/browser/resources/shared/Context.tsx + 3 modules
var Context = __webpack_require__("../../../brave/components/brave_news/browser/resources/shared/Context.tsx");
// EXTERNAL MODULE: ./components/brave_news/browser/resources/shared/FollowButton.tsx
var FollowButton = __webpack_require__("../../../brave/components/brave_news/browser/resources/shared/FollowButton.tsx");
// EXTERNAL MODULE: ./components/brave_news/browser/resources/shared/api.ts
var api = __webpack_require__("../../../brave/components/brave_news/browser/resources/shared/api.ts");
;// ./components/brave_news/browser/resources/shared/PublisherCard.tsx
// Copyright (c) 2022 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.









const StyledFollowButton = (0,styled_components_esm["default"])((0,FollowButton["default"])).withConfig({ displayName: "StyledFollowButton", componentId: "sc-7k48qe" }) `
  position: absolute;
  right: ${variables.spacing.m};
  top: ${variables.spacing.m};
`;
const Card = (0,styled_components_esm["default"])('div').attrs(props => ({
    style: {
        backgroundColor: props.backgroundColor
    }
})).withConfig({ displayName: "Card", componentId: "sc-2ujub3" }) `
  position: relative;
  height: 80px;
  border-radius: ${variables.radius.m};
  overflow: hidden;
  box-shadow: ${variables.effect.elevation['02']};

  &[data-feed-card-is-followed=true] {
    &:not(:hover, :has(:focus-visible)) ${StyledFollowButton} {
      opacity: 0;
    }
  }
`;
const CoverImage = (0,styled_components_esm["default"])('div').attrs(props => ({
    style: {
        backgroundImage: `url('${props.backgroundImage}')`
    }
})).withConfig({ displayName: "CoverImage", componentId: "sc-14dow41" }) `
  position: absolute;
  top: 15%; bottom: 15%; left: 15%; right: 15%;
  border-radius: ${variables.radius.m};
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
`;
const Name = styled_components_esm["default"].span.withConfig({ displayName: "Name", componentId: "sc-cd7u0h" }) `
  font: ${variables.font.default.semibold};
  color: ${variables.color.text.primary};
`;
function PublisherCard(props) {
    var _a, _b;
    const publisher = (0,Context.usePublisher)(props.publisherId);
    const { followed, setFollowed } = (0,Context.usePublisherFollowed)(props.publisherId);
    const backgroundColor = (publisher === null || publisher === void 0 ? void 0 : publisher.backgroundColor) || getCardColor(((_a = publisher === null || publisher === void 0 ? void 0 : publisher.feedSource) === null || _a === void 0 ? void 0 : _a.url) || (publisher === null || publisher === void 0 ? void 0 : publisher.publisherId));
    const coverUrl = (_b = publisher === null || publisher === void 0 ? void 0 : publisher.coverUrl) === null || _b === void 0 ? void 0 : _b.url;
    return react_bundle_js_React_.createElement(Flex["default"], { direction: "column", gap: variables.spacing.m },
        react_bundle_js_React_.createElement(Card, { backgroundColor: backgroundColor, "data-feed-card-is-followed": followed },
            coverUrl && react_bundle_js_React_.createElement(CoverImage, { backgroundImage: `//brave-image?url=${encodeURIComponent(coverUrl)}` }),
            react_bundle_js_React_.createElement(StyledFollowButton, { fab: true, size: 'tiny', following: followed, onClick: () => setFollowed(!followed) })),
        react_bundle_js_React_.createElement(Name, null, publisher === null || publisher === void 0 ? void 0 : publisher.publisherName));
}
function DirectPublisherCard(props) {
    const [loading, setLoading] = (0,react_bundle_js_React_.useState)(false);
    return react_bundle_js_React_.createElement(Flex["default"], { direction: "column", gap: variables.spacing.m },
        react_bundle_js_React_.createElement(Card, { backgroundColor: getCardColor(props.feedUrl), "data-feed-card-is-followed": true },
            react_bundle_js_React_.createElement(StyledFollowButton, { following: false, isDisabled: loading, onClick: async () => {
                    setLoading(true);
                    await (0,api["default"])().subscribeToNewDirectFeed({ url: props.feedUrl });
                    setLoading(false);
                } })),
        react_bundle_js_React_.createElement(Name, null, props.title));
}


/***/ },

/***/ "../../../brave/components/common/Flex.tsx"
/*!************************************!*\
  !*** ./components/common/Flex.tsx ***!
  \************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "../../../brave/node_modules/.pnpm/styled-components@6.4.3_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/styled-components/dist/styled-components.esm.js");
// Copyright (c) 2022 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.

const Flex = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])('div').withConfig({ displayName: "Flex", componentId: "sc-dbdfd5" }) `
  display: flex;
  flex-direction: ${p => p.direction};
  justify-content: ${p => p.justify};
  align-items: ${p => p.align};
  gap: ${p => typeof p.gap === 'number' ? `${p.gap}px` : p.gap};
  flex-wrap: ${p => p.wrap};
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Flex);


/***/ }

};

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJhdmVfYnJvd3Nlcl9yZXNvdXJjZXNfYnJhdmVfbmV3X3RhYl9wYWdlX3JlZnJlc2hfY29tcG9uZW50c19uZXdzX25ld3NfZmVlZF90c3guY2h1bmsuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZEQUE2RDtBQUM3RCxzRUFBc0U7QUFDdEUsNEVBQTRFO0FBQzVFLHNEQUFzRDtBQUVYO0FBRTNDLG1FQUFtRTtBQUNuRSxNQUFNLEdBQUcsR0FBRyxJQUFJLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLEVBQUU7SUFDL0MsT0FBTyxFQUFFLE1BQU07Q0FDbEIsQ0FBQztBQUVGLE1BQU0sTUFBTSxHQUFHLElBQUk7QUFDbkIsTUFBTSxNQUFNLEdBQUcsRUFBRSxHQUFHLE1BQU07QUFDMUIsTUFBTSxJQUFJLEdBQUcsRUFBRSxHQUFHLE1BQU07QUFDeEIsTUFBTSxHQUFHLEdBQUcsRUFBRSxHQUFHLElBQUk7QUFDckIsTUFBTSxJQUFJLEdBQUcsQ0FBQyxHQUFHLEdBQUc7QUFDcEIsTUFBTSxJQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUc7QUFFdEIsTUFBTSxTQUFTLEdBQUc7SUFDZCxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUk7Q0FDeEM7QUFFRCxpRUFBaUU7QUFDMUQsTUFBTSxlQUFlLEdBQUcsQ0FBQyxJQUFtQixFQUFFLEVBQUU7O0lBQ25ELE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUU7SUFDdEIsTUFBTSxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxFQUFFO0lBQ3JDLE1BQU0sSUFBSSxHQUFHLElBQUksR0FBRyxHQUFHO0lBRXZCLE1BQU0sQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLEdBQUcsTUFBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBUyxDQUFDLFFBQVEs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LENBQUMsQ0FBQyxDQUFDLE9BQU87aUJBQ2xCLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUs7U0FDcEIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUc7ZUFDL0MsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSTtDQUN6QjtBQUVELGlFQUFlLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9icmF2ZS1jb3JlLy4vY29tcG9uZW50cy9jb21tb24vdXNlUmVsYXRpdmVUaW1lLnRzIiwid2VicGFjazovL2JyYXZlLWNvcmUvLi9jb21wb25lbnRzL2JyYXZlX25ld3MvYnJvd3Nlci9yZXNvdXJjZXMvZmVlZC9BcnRpY2xlTWV0YVJvdy50c3giLCJ3ZWJwYWNrOi8vYnJhdmUtY29yZS8uL2NvbXBvbmVudHMvYnJhdmVfbmV3cy9icm93c2VyL3Jlc291cmNlcy9mZWVkL0FydGljbGUudHN4Iiwid2VicGFjazovL2JyYXZlLWNvcmUvLi9jb21wb25lbnRzL2JyYXZlX25ld3MvYnJvd3Nlci9yZXNvdXJjZXMvZmVlZC9DYXVnaHRVcC50c3giLCJ3ZWJwYWNrOi8vYnJhdmUtY29yZS8uL2NvbXBvbmVudHMvYnJhdmVfbmV3cy9icm93c2VyL3Jlc291cmNlcy9mZWVkL0NsdXN0ZXIudHN4Iiwid2VicGFjazovL2JyYXZlLWNvcmUvLi9jb21wb25lbnRzL2JyYXZlX25ld3MvYnJvd3Nlci9yZXNvdXJjZXMvZmVlZC9EaXNjb3Zlci50c3giLCJ3ZWJwYWNrOi8vYnJhdmUtY29yZS8uL2NvbXBvbmVudHMvYnJhdmVfbmV3cy9icm93c2VyL3Jlc291cmNlcy9mZWVkL0hlcm8udHN4Iiwid2VicGFjazovL2JyYXZlLWNvcmUvLi9jb21wb25lbnRzL2JyYXZlX25ld3MvYnJvd3Nlci9yZXNvdXJjZXMvZmVlZC9Mb2FkaW5nQ2FyZC50c3giLCJ3ZWJwYWNrOi8vYnJhdmUtY29yZS8uL2NvbXBvbmVudHMvYnJhdmVfbmV3cy9icm93c2VyL3Jlc291cmNlcy9mZWVkL05vQXJ0aWNsZXMudHN4Iiwid2VicGFjazovL2JyYXZlLWNvcmUvLi9jb21wb25lbnRzL2JyYXZlX25ld3MvYnJvd3Nlci9yZXNvdXJjZXMvTmV3c0J1dHRvbi50c3giLCJ3ZWJwYWNrOi8vYnJhdmUtY29yZS8uL2NvbXBvbmVudHMvYnJhdmVfbmV3cy9icm93c2VyL3Jlc291cmNlcy9mZWVkL05vRmVlZHMudHN4Iiwid2VicGFjazovL2JyYXZlLWNvcmUvLi9jb21wb25lbnRzL2JyYXZlX25ld3MvYnJvd3Nlci9yZXNvdXJjZXMvc2hhcmVkL2hpc3RvcnkudHMiLCJ3ZWJwYWNrOi8vYnJhdmUtY29yZS8uL2NvbXBvbmVudHMvYnJhdmVfbmV3cy9icm93c2VyL3Jlc291cmNlcy9mZWVkL05vdENvbm5lY3RlZC50c3giLCJ3ZWJwYWNrOi8vYnJhdmUtY29yZS8uL2NvbXBvbmVudHMvYnJhdmVfbmV3cy9icm93c2VyL3Jlc291cmNlcy9GZWVkLnRzeCIsIndlYnBhY2s6Ly9icmF2ZS1jb3JlLy4vY29tcG9uZW50cy9icmF2ZV9uZXdzL2Jyb3dzZXIvcmVzb3VyY2VzL2JyYXZlTmV3c0xvZ28uc3ZnIiwid2VicGFjazovL2JyYXZlLWNvcmUvLi9jb21wb25lbnRzL2JyYXZlX25ld3MvYnJvd3Nlci9yZXNvdXJjZXMvT3B0SW4udHN4Iiwid2VicGFjazovL2JyYXZlLWNvcmUvLi9jb21wb25lbnRzL2JyYXZlX25ld3MvYnJvd3Nlci9yZXNvdXJjZXMvRmVlZENvbnRyb2xzLnRzeCIsIndlYnBhY2s6Ly9icmF2ZS1jb3JlLy4vY29tcG9uZW50cy9icmF2ZV9uZXdzL2Jyb3dzZXIvcmVzb3VyY2VzL1ZhcmlhYmxlcy50c3giLCJ3ZWJwYWNrOi8vYnJhdmUtY29yZS8uL2NvbXBvbmVudHMvYnJhdmVfbmV3cy9icm93c2VyL3Jlc291cmNlcy9QYWdlLnRzeCIsIndlYnBhY2s6Ly9icmF2ZS1jb3JlLy4vY29tcG9uZW50cy9icmF2ZV9uZXdzL2Jyb3dzZXIvcmVzb3VyY2VzL2N1c3RvbWl6ZS9Nb2RhbC50c3giLCJ3ZWJwYWNrOi8vYnJhdmUtY29yZS8uL2Jyb3dzZXIvcmVzb3VyY2VzL2JyYXZlX25ld190YWJfcGFnZV9yZWZyZXNoL2NvbXBvbmVudHMvbmV3cy9uZXdzX2ZlZWQuc3R5bGUudHMiLCJ3ZWJwYWNrOi8vYnJhdmUtY29yZS8uL2Jyb3dzZXIvcmVzb3VyY2VzL2JyYXZlX25ld190YWJfcGFnZV9yZWZyZXNoL2NvbXBvbmVudHMvbmV3cy9uZXdzX2ZlZWQudHN4Iiwid2VicGFjazovL2JyYXZlLWNvcmUvLi9jb21wb25lbnRzL2JyYXZlX25ld3MvYnJvd3Nlci9yZXNvdXJjZXMvU2V0dGluZ3NCdXR0b24udHN4Iiwid2VicGFjazovL2JyYXZlLWNvcmUvLi9jb21wb25lbnRzL2JyYXZlX25ld3MvYnJvd3Nlci9yZXNvdXJjZXMvY3VzdG9taXplL0xvYWRpbmcudHN4Iiwid2VicGFjazovL2JyYXZlLWNvcmUvLi9jb21wb25lbnRzL2NvbW1vbi9TZWN1cmVMaW5rLnRzeCIsIndlYnBhY2s6Ly9icmF2ZS1jb3JlLy4vY29tcG9uZW50cy9icmF2ZV9uZXdzL2Jyb3dzZXIvcmVzb3VyY2VzL2ZlZWQvQ2FyZC50c3giLCJ3ZWJwYWNrOi8vYnJhdmUtY29yZS8uL2NvbXBvbmVudHMvYnJhdmVfbmV3cy9icm93c2VyL3Jlc291cmNlcy9zaGFyZWQvRm9sbG93QnV0dG9uLnRzeCIsIndlYnBhY2s6Ly9icmF2ZS1jb3JlLy4vY29tcG9uZW50cy9icmF2ZV9uZXdzL2Jyb3dzZXIvcmVzb3VyY2VzL2N1c3RvbWl6ZS9jb2xvcnMudHMiLCJ3ZWJwYWNrOi8vYnJhdmUtY29yZS8uL2NvbXBvbmVudHMvYnJhdmVfbmV3cy9icm93c2VyL3Jlc291cmNlcy9zaGFyZWQvUHVibGlzaGVyQ2FyZC50c3giLCJ3ZWJwYWNrOi8vYnJhdmUtY29yZS8uL2NvbXBvbmVudHMvY29tbW9uL0ZsZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyNCBUaGUgQnJhdmUgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbi8vIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXMgZmlsZSxcbi8vIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwczovL21vemlsbGEub3JnL01QTC8yLjAvLlxuXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcblxuLy8gU2V0IG51bWVyaWMgdG8gYXV0byBzbyB3ZSBnZXQgJ3llc3RlcmRheScgaW5zdGVhZCBvZiAnMSBkYXkgYWdvJ1xuY29uc3QgcnRmID0gbmV3IEludGwuUmVsYXRpdmVUaW1lRm9ybWF0KHVuZGVmaW5lZCwge1xuICAgIG51bWVyaWM6ICdhdXRvJ1xufSlcblxuY29uc3Qgc2Vjb25kID0gMTAwMFxuY29uc3QgbWludXRlID0gNjAgKiBzZWNvbmRcbmNvbnN0IGhvdXIgPSA2MCAqIG1pbnV0ZVxuY29uc3QgZGF5ID0gMjQgKiBob3VyXG5jb25zdCB3ZWVrID0gNyAqIGRheVxuY29uc3QgeWVhciA9IDM2NSAqIGRheVxuXG5jb25zdCBkdXJhdGlvbnMgPSB7XG4gICAgc2Vjb25kLCBtaW51dGUsIGhvdXIsIGRheSwgd2VlaywgeWVhclxufVxuXG4vLyBGb3JtYXRzIGEgdGltZSByZWxhdGl2ZSB0byBub3cgYXMgdGhlIHJvdW5kZWQgbnVtYmVyIG9mIHVuaXRzLlxuZXhwb3J0IGNvbnN0IGdldFJlbGF0aXZlVGltZSA9ICh0aW1lOiBEYXRlIHwgbnVtYmVyKSA9PiB7XG4gICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKVxuICAgIGNvbnN0IHRoZW4gPSBuZXcgRGF0ZSh0aW1lKS5nZXRUaW1lKClcbiAgICBjb25zdCBkaWZmID0gdGhlbiAtIG5vd1xuXG4gICAgY29uc3QgW3VuaXQsIGR1cmF0aW9uXSA9IChPYmplY3QuZW50cmllcyhkdXJhdGlvbnMpIGFzIGFueSkuZmluZExhc3QoKFssIGR1cmF0aW9uXTogW3N0cmluZywgbnVtYmVyXSkgPT4gTWF0aC5hYnMoZGlmZikgPiBkdXJhdGlvbikgPz8gWydzZWNvbmQnLCAxMDAwXVxuICAgIGNvbnN0IGFtb3VudCA9IE1hdGguZmxvb3IoZGlmZiAvIGR1cmF0aW9uKVxuICAgIHJldHVybiB7XG4gICAgICAgIGZvcm1hdHRlZDogcnRmLmZvcm1hdChhbW91bnQsIHVuaXQgKSxcbiAgICAgICAgdXBkYXRlc0luOiBNYXRoLm1heCgxMCAqIG1pbnV0ZSwgZHVyYXRpb24gLSAoTWF0aC5hYnMoZGlmZiAtIGFtb3VudCkpKSxcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZVJlbGF0aXZlVGltZSh0aW1lOiBEYXRlIHwgbnVtYmVyKSB7XG4gICAgY29uc3QgW2Zvcm1hdHRlZCwgc2V0Rm9ybWF0dGVkXSA9IHVzZVN0YXRlKCcnKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKCF0aW1lKSByZXR1cm5cbiAgICAgICAgbGV0IHRpbWVvdXQ6IE5vZGVKUy5UaW1lb3V0XG4gICAgICAgIGNvbnN0IHVwZGF0ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgZm9ybWF0dGVkLCB1cGRhdGVzSW4gfSA9IGdldFJlbGF0aXZlVGltZSh0aW1lKVxuICAgICAgICAgICAgc2V0Rm9ybWF0dGVkKGZvcm1hdHRlZClcbiAgICAgICAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KHVwZGF0ZSwgdXBkYXRlc0luKVxuICAgICAgICB9XG5cbiAgICAgICAgdXBkYXRlKClcblxuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpXG4gICAgICAgIH1cbiAgICB9LCBbdGltZV0pXG5cbiAgICByZXR1cm4gZm9ybWF0dGVkXG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjMgVGhlIEJyYXZlIEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4vLyBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIGZpbGUsXG4vLyBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cHM6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy5cblxuaW1wb3J0IHsgZm9udCwgc3BhY2luZyB9IGZyb20gXCJAYnJhdmUvbGVvL3Rva2Vucy9jc3MvdmFyaWFibGVzXCJcbmltcG9ydCBnZXRCcmF2ZU5ld3NDb250cm9sbGVyLCB7IEZlZWRJdGVtTWV0YWRhdGEsIFVzZXJFbmFibGVkIH0gZnJvbSBcIi4uL3NoYXJlZC9hcGlcIlxuaW1wb3J0IHsgY2hhbm5lbEljb25zIH0gZnJvbSBcIi4uL3NoYXJlZC9JY29uc1wiXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgRmxleCBmcm9tICckd2ViLWNvbW1vbi9GbGV4J1xuaW1wb3J0IEJ1dHRvbk1lbnUgZnJvbSBcIkBicmF2ZS9sZW8vcmVhY3QvYnV0dG9uTWVudVwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQGJyYXZlL2xlby9yZWFjdC9idXR0b25cIjtcbmltcG9ydCBJY29uIGZyb20gXCJAYnJhdmUvbGVvL3JlYWN0L2ljb25cIjtcbmltcG9ydCB7IGZvcm1hdExvY2FsZSB9IGZyb20gJyR3ZWItY29tbW9uL2xvY2FsZSc7XG5pbXBvcnQgeyBnZXRUcmFuc2xhdGVkQ2hhbm5lbE5hbWUgfSBmcm9tIFwiLi4vc2hhcmVkL2NoYW5uZWxcIjtcbmltcG9ydCB1c2VSZWxhdGl2ZVRpbWUgZnJvbSAnJHdlYi1jb21tb24vdXNlUmVsYXRpdmVUaW1lJ1xuaW1wb3J0IHsgbW9qb1RpbWVUb0pTRGF0ZSB9IGZyb20gJyR3ZWItY29tbW9uL21vam9tVXRpbHMnXG5cbmNvbnN0IE1lbnVCdXR0b24gPSBzdHlsZWQoQnV0dG9uKWBcbiAgLS1sZW8tYnV0dG9uLXBhZGRpbmc6IDA7XG5cbiAgZmxleC1ncm93OiAwO1xuYFxuXG5leHBvcnQgY29uc3QgTWV0YUluZm9Db250YWluZXIgPSBzdHlsZWQuaDRgXG4gIC0tbGVvLWljb24tc2l6ZTogMTJweDtcblxuICBtYXJnaW46IDA7XG5cbiAgZm9udDogJHtmb250LnhTbWFsbC5yZWd1bGFyfTtcbiAgY29sb3I6IHZhcigtLWJuLWdsYXNzLTUwKTtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6ICR7c3BhY2luZy5zfTtcbmBcblxuY29uc3QgcHVibGlzaGVyRGVzY3JpcHRpb24gPSAoYXJ0aWNsZTogRmVlZEl0ZW1NZXRhZGF0YSkgPT4ge1xuICBpZiAoYXJ0aWNsZS5wdWJsaXNoZXJOYW1lKSByZXR1cm4gYXJ0aWNsZS5wdWJsaXNoZXJOYW1lXG4gIGNvbnN0IHVybCA9IG5ldyBVUkwoYXJ0aWNsZS51cmwudXJsKVxuICByZXR1cm4gdXJsLmhvc3RuYW1lXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBNZXRhSW5mbyhwcm9wczogeyBhcnRpY2xlOiBGZWVkSXRlbU1ldGFkYXRhLCBoaWRlQ2hhbm5lbD86IGJvb2xlYW4gfSkge1xuICBjb25zdCByZWxhdGl2ZVRpbWUgPSB1c2VSZWxhdGl2ZVRpbWUobW9qb1RpbWVUb0pTRGF0ZShwcm9wcy5hcnRpY2xlLnB1Ymxpc2hUaW1lKSlcbiAgY29uc3QgbWF5YmVDaGFubmVsID0gIXByb3BzLmhpZGVDaGFubmVsICYmIDw+XG4gICAg4oCiIHtjaGFubmVsSWNvbnNbcHJvcHMuYXJ0aWNsZS5jYXRlZ29yeU5hbWVdID8/IGNoYW5uZWxJY29ucy5kZWZhdWx0fSB7Z2V0VHJhbnNsYXRlZENoYW5uZWxOYW1lKHByb3BzLmFydGljbGUuY2F0ZWdvcnlOYW1lKX1cbiAgPC8+XG5cbiAgcmV0dXJuIDxNZXRhSW5mb0NvbnRhaW5lcj5cbiAgICB7cHVibGlzaGVyRGVzY3JpcHRpb24ocHJvcHMuYXJ0aWNsZSl9IHttYXliZUNoYW5uZWx9IOKAoiB7cmVsYXRpdmVUaW1lfVxuICA8L01ldGFJbmZvQ29udGFpbmVyPlxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcnRpY2xlTWV0YVJvdyhwcm9wczogeyBhcnRpY2xlOiBGZWVkSXRlbU1ldGFkYXRhLCBoaWRlQ2hhbm5lbD86IGJvb2xlYW4gfSkge1xuICByZXR1cm4gPEZsZXggZGlyZWN0aW9uPVwicm93XCIganVzdGlmeT1cInNwYWNlLWJldHdlZW5cIiBhbGlnbj1cImNlbnRlclwiIG9uQ2xpY2s9eyhlKSA9PiB7IGUuc3RvcFByb3BhZ2F0aW9uKCkgfX0+XG4gICAgPE1ldGFJbmZvIHsuLi5wcm9wc30gLz5cblxuICAgIDxCdXR0b25NZW51PlxuICAgICAgPE1lbnVCdXR0b24gc2xvdD0nYW5jaG9yLWNvbnRlbnQnIGtpbmQ9J3BsYWluLWZhaW50JyBzaXplPVwidGlueVwiPlxuICAgICAgICA8SWNvbiBuYW1lPSdtb3JlLWhvcml6b250YWwnIC8+XG4gICAgICA8L01lbnVCdXR0b24+XG4gICAgICA8bGVvLW1lbnUtaXRlbSBvbkNsaWNrPXtlID0+IHtcbiAgICAgICAgZ2V0QnJhdmVOZXdzQ29udHJvbGxlcigpLnNldFB1Ymxpc2hlclByZWYocHJvcHMuYXJ0aWNsZS5wdWJsaXNoZXJJZCwgVXNlckVuYWJsZWQuRElTQUJMRUQpXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgIH19PlxuICAgICAgICB7Zm9ybWF0TG9jYWxlKFMuQlJBVkVfTkVXU19ISURFX0NPTlRFTlRfRlJPTSwge1xuICAgICAgICAgICQxOiBwdWJsaXNoZXJEZXNjcmlwdGlvbihwcm9wcy5hcnRpY2xlKVxuICAgICAgICB9KX1cbiAgICAgIDwvbGVvLW1lbnUtaXRlbT5cbiAgICA8L0J1dHRvbk1lbnU+XG4gIDwvRmxleD5cbn1cbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMyBUaGUgQnJhdmUgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbi8vIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXMgZmlsZSxcbi8vIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwczovL21vemlsbGEub3JnL01QTC8yLjAvLlxuaW1wb3J0IEZsZXggZnJvbSAnJHdlYi1jb21tb24vRmxleCc7XG5pbXBvcnQgeyBzcGFjaW5nIH0gZnJvbSAnQGJyYXZlL2xlby90b2tlbnMvY3NzL3ZhcmlhYmxlcyc7XG5pbXBvcnQgeyBBcnRpY2xlIGFzIEluZm8gfSBmcm9tICdnZW4vYnJhdmUvY29tcG9uZW50cy9icmF2ZV9uZXdzL2NvbW1vbi9icmF2ZV9uZXdzLm1vam9tLm0nO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyB1c2VCcmF2ZU5ld3MgfSBmcm9tICcuLi9zaGFyZWQvQ29udGV4dCc7XG5pbXBvcnQgQXJ0aWNsZU1ldGFSb3cgZnJvbSAnLi9BcnRpY2xlTWV0YVJvdyc7XG5pbXBvcnQgQ2FyZCwgeyBCcmF2ZU5ld3NMaW5rLCBTbWFsbEltYWdlLCBUaXRsZSwgYnJhdmVOZXdzQ2FyZENsaWNrSGFuZGxlciB9IGZyb20gJy4vQ2FyZCc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGluZm86IEluZm9cbiAgaGlkZUNoYW5uZWw/OiBib29sZWFuXG4gIGZlZWREZXB0aD86IG51bWJlclxufVxuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQoQ2FyZClgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogJHtzcGFjaW5nLnN9O1xuICBwYWRkaW5nLXRvcDogJHtzcGFjaW5nLmx9O1xuYFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcnRpY2xlKHsgaW5mbywgaGlkZUNoYW5uZWwsIGZlZWREZXB0aCB9OiBQcm9wcykge1xuICBjb25zdCB7IHJlcG9ydFZpc2l0LCBvcGVuQXJ0aWNsZXNJbk5ld1RhYiB9ID0gdXNlQnJhdmVOZXdzKClcbiAgY29uc3QgdXJsID0gaW5mby5kYXRhLnVybC51cmw7XG5cbiAgcmV0dXJuIDxDb250YWluZXJcbiAgICBvbkNsaWNrPXtlID0+IHtcbiAgICAgIGJyYXZlTmV3c0NhcmRDbGlja0hhbmRsZXIodXJsLCBvcGVuQXJ0aWNsZXNJbk5ld1RhYikoZSlcbiAgICAgIGlmIChmZWVkRGVwdGggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXBvcnRWaXNpdChmZWVkRGVwdGgpXG4gICAgICB9XG4gICAgfX1cbiAgPlxuICAgIDxBcnRpY2xlTWV0YVJvdyBhcnRpY2xlPXtpbmZvLmRhdGF9IGhpZGVDaGFubmVsPXtoaWRlQ2hhbm5lbH0gLz5cbiAgICA8RmxleCBkaXJlY3Rpb249J3JvdycgZ2FwPXtzcGFjaW5nLnhsfSBqdXN0aWZ5PSdzcGFjZS1iZXR3ZWVuJyBhbGlnbj0nc3RhcnQnPlxuICAgICAgPFRpdGxlPlxuICAgICAgICA8QnJhdmVOZXdzTGlua1xuICAgICAgICAgIGhyZWY9e3VybH1cbiAgICAgICAgICBmZWVkRGVwdGg9e2ZlZWREZXB0aH1cbiAgICAgICAgPlxuICAgICAgICAgIHtpbmZvLmRhdGEudGl0bGV9XG4gICAgICAgIDwvQnJhdmVOZXdzTGluaz5cbiAgICAgIDwvVGl0bGU+XG4gICAgICA8U21hbGxJbWFnZSBsb2FkaW5nPSdsYXp5JyBzcmM9e2luZm8uZGF0YS5pbWFnZS5wYWRkZWRJbWFnZVVybD8udXJsID8/IGluZm8uZGF0YS5pbWFnZS5pbWFnZVVybD8udXJsID8/ICcnfSAvPlxuICAgIDwvRmxleD5cbiAgPC9Db250YWluZXI+XG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjMgVGhlIEJyYXZlIEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4vLyBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIGZpbGUsXG4vLyBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cHM6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy5cblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgRmxleCBmcm9tICckd2ViLWNvbW1vbi9GbGV4JztcbmltcG9ydCB7IGdldExvY2FsZSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9sb2NhbGUnO1xuaW1wb3J0IEljb24gZnJvbSAnQGJyYXZlL2xlby9yZWFjdC9pY29uJztcbmltcG9ydCB7IHNwYWNpbmcgfSBmcm9tICdAYnJhdmUvbGVvL3Rva2Vucy9jc3MvdmFyaWFibGVzJztcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkKEZsZXgpYFxuICBjb2xvcjogdmFyKC0tYm4tZ2xhc3MtNTApO1xuICBnYXA6ICR7c3BhY2luZy54bH07XG5cbiAgJiA+IGhyIHtcbiAgICBmbGV4OiAxO1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYm4tZ2xhc3MtMTApO1xuICB9XG5gXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhdWdodFVwKCkge1xuICByZXR1cm4gPENvbnRhaW5lciBhbGlnbj0nY2VudGVyJyBqdXN0aWZ5PSdzdHJldGNoJz5cbiAgICA8aHIgLz5cbiAgICA8RmxleCBhbGlnbj0nY2VudGVyJyBnYXA9ezZ9PlxuICAgICAgPEljb24gbmFtZT0nY2hlY2stY2lyY2xlLW91dGxpbmUnIC8+IDxzcGFuPntnZXRMb2NhbGUoUy5CUkFWRV9ORVdTX0NBVUdIVF9VUCl9PC9zcGFuPlxuICAgIDwvRmxleD5cbiAgICA8aHIgLz5cbiAgPC9Db250YWluZXI+XG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjMgVGhlIEJyYXZlIEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4vLyBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIGZpbGUsXG4vLyBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cHM6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENsdXN0ZXIgYXMgSW5mbywgQ2x1c3RlclR5cGUgfSBmcm9tICdnZW4vYnJhdmUvY29tcG9uZW50cy9icmF2ZV9uZXdzL2NvbW1vbi9icmF2ZV9uZXdzLm1vam9tLm0nO1xuaW1wb3J0IENhcmQsIHsgVGl0bGUgfSBmcm9tICcuL0NhcmQnO1xuaW1wb3J0IEFydGljbGUgZnJvbSAnLi9BcnRpY2xlJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgaWNvbiwgcmFkaXVzLCBzcGFjaW5nIH0gZnJvbSAnQGJyYXZlL2xlby90b2tlbnMvY3NzL3ZhcmlhYmxlcyc7XG5pbXBvcnQgeyBjaGFubmVsSWNvbnMgfSBmcm9tICcuLi9zaGFyZWQvSWNvbnMnO1xuaW1wb3J0IHsgZ2V0VHJhbnNsYXRlZENoYW5uZWxOYW1lIH0gZnJvbSAnLi4vc2hhcmVkL2NoYW5uZWwnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBpbmZvOiBJbmZvXG4gIGZlZWREZXB0aD86IG51bWJlclxufVxuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQoQ2FyZClgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogJHtzcGFjaW5nLmx9O1xuXG4gICYgPiAke1RpdGxlfSB7XG4gICAgLS1sZW8taWNvbi1jb2xvcjogY3VycmVudENvbG9yO1xuICAgIC0tbGVvLWljb24tc2l6ZTogJHtpY29uLnN9O1xuXG4gICAgZ2FwOiAke3NwYWNpbmcubX07XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIG1hcmdpbjogJHtzcGFjaW5nLm19IDA7XG4gIH1cblxuICAmID4gJHtDYXJkfSB7XG4gICAgYm9yZGVyLXJhZGl1czogJHtyYWRpdXMubX07XG4gIH1cbmBcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2x1c3Rlcih7IGluZm8sIGZlZWREZXB0aCB9OiBQcm9wcykge1xuICBjb25zdCBncm91cE5hbWUgPSBpbmZvLnR5cGUgPT09IENsdXN0ZXJUeXBlLkNIQU5ORUxcbiAgICA/IGdldFRyYW5zbGF0ZWRDaGFubmVsTmFtZShpbmZvLmlkKVxuICAgIDogaW5mby5pZFxuICByZXR1cm4gPENvbnRhaW5lcj5cbiAgICA8VGl0bGU+XG4gICAgICB7Y2hhbm5lbEljb25zW2luZm8uaWRdID8/IGNoYW5uZWxJY29ucy5kZWZhdWx0fSB7Z3JvdXBOYW1lfVxuICAgIDwvVGl0bGU+XG4gICAge2luZm8uYXJ0aWNsZXMubWFwKChhLCBpKSA9PiB7XG4gICAgICBjb25zdCBpbmZvOiBhbnkgPSBhLmFydGljbGUgfHwgYS5oZXJvXG4gICAgICByZXR1cm4gPEFydGljbGVcbiAgICAgICAga2V5PXtpfVxuICAgICAgICBpbmZvPXtpbmZvfVxuICAgICAgICBoaWRlQ2hhbm5lbD17aW5mby50eXBlID09PSBDbHVzdGVyVHlwZS5DSEFOTkVMfVxuICAgICAgICBmZWVkRGVwdGg9e2ZlZWREZXB0aCA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogKGZlZWREZXB0aCArIGkpfVxuICAgICAgLz5cbiAgICB9KX1cbiAgPC9Db250YWluZXI+XG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjMgVGhlIEJyYXZlIEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4vLyBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIGZpbGUsXG4vLyBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cHM6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy5cbmltcG9ydCB7IGdldExvY2FsZSB9IGZyb20gJyR3ZWItY29tbW9uL2xvY2FsZSc7XG5pbXBvcnQgSWNvbiBmcm9tICdAYnJhdmUvbGVvL3JlYWN0L2ljb24nO1xuaW1wb3J0IHsgaWNvbiwgc3BhY2luZyB9IGZyb20gJ0BicmF2ZS9sZW8vdG9rZW5zL2Nzcy92YXJpYWJsZXMnO1xuaW1wb3J0IHsgRGlzY292ZXIgYXMgSW5mbyB9IGZyb20gJ2dlbi9icmF2ZS9jb21wb25lbnRzL2JyYXZlX25ld3MvY29tbW9uL2JyYXZlX25ld3MubW9qb20ubSc7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBQdWJsaXNoZXJDYXJkIGZyb20gJy4uL3NoYXJlZC9QdWJsaXNoZXJDYXJkJztcbmltcG9ydCBDYXJkLCB7IFRpdGxlIH0gZnJvbSAnLi9DYXJkJztcblxuY29uc3QgUm93ID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgbWlubWF4KDAsIDFmcikpO1xuICBnYXA6ICR7c3BhY2luZ1snMlhsJ119O1xuICBtYXJnaW4tdG9wOiAke3NwYWNpbmcubX07XG5gXG5cbmNvbnN0IFRpdGxlSWNvbiA9IHN0eWxlZChJY29uKWBcbiAgLS1sZW8taWNvbi1zaXplOiAke2ljb24uc307XG4gIG1hcmdpbi1yaWdodDogJHtzcGFjaW5nLnN9O1xuYFxuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQoQ2FyZClgXG4gIHBhZGRpbmc6ICR7c3BhY2luZ1snMlhsJ119ICR7c3BhY2luZy54bH07XG5gXG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGluZm86IEluZm9cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29tcG9uZW50KHsgaW5mbyB9OiBQcm9wcykge1xuICByZXR1cm4gPENvbnRhaW5lcj5cbiAgICA8VGl0bGU+XG4gICAgICA8VGl0bGVJY29uIG5hbWU9XCJzdGFyLW91dGxpbmVcIiAvPlxuICAgICAge2dldExvY2FsZShTLkJSQVZFX05FV1NfU09VUkNFU19SRUNPTU1FTkRBVElPTil9XG4gICAgPC9UaXRsZT5cbiAgICA8Um93PlxuICAgICAge2luZm8ucHVibGlzaGVySWRzLm1hcChwID0+IDxQdWJsaXNoZXJDYXJkIGtleT17cH0gcHVibGlzaGVySWQ9e3B9IC8+KX1cbiAgICA8L1Jvdz5cbiAgPC9Db250YWluZXI+XG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjMgVGhlIEJyYXZlIEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4vLyBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIGZpbGUsXG4vLyBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cHM6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy5cbmltcG9ydCB7IEhlcm9BcnRpY2xlIGFzIEluZm8gfSBmcm9tICdnZW4vYnJhdmUvY29tcG9uZW50cy9icmF2ZV9uZXdzL2NvbW1vbi9icmF2ZV9uZXdzLm1vam9tLm0nO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEFydGljbGVNZXRhUm93IGZyb20gJy4vQXJ0aWNsZU1ldGFSb3cnO1xuaW1wb3J0IENhcmQsIHsgQnJhdmVOZXdzTGluaywgTGFyZ2VJbWFnZSwgVGl0bGUsIGJyYXZlTmV3c0NhcmRDbGlja0hhbmRsZXIgfSBmcm9tICcuL0NhcmQnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBzcGFjaW5nIH0gZnJvbSAnQGJyYXZlL2xlby90b2tlbnMvY3NzL3ZhcmlhYmxlcyc7XG5pbXBvcnQgeyB1c2VCcmF2ZU5ld3MgfSBmcm9tICcuLi9zaGFyZWQvQ29udGV4dCc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGluZm86IEluZm9cbiAgZmVlZERlcHRoPzogbnVtYmVyXG59XG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZChDYXJkKWBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAke3NwYWNpbmcuc307XG5cbiAgJiA+ICR7TGFyZ2VJbWFnZX0ge1xuICAgIG1hcmdpbi1ib3R0b206ICR7c3BhY2luZy5sfTtcbiAgfVxuYFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZXJvQXJ0aWNsZSh7IGluZm8sIGZlZWREZXB0aCB9OiBQcm9wcykge1xuICBjb25zdCB7IHJlcG9ydFZpc2l0LCBvcGVuQXJ0aWNsZXNJbk5ld1RhYiB9ID0gdXNlQnJhdmVOZXdzKClcbiAgcmV0dXJuIDxDb250YWluZXJcbiAgICBvbkNsaWNrPXtlID0+IHtcbiAgICAgIGJyYXZlTmV3c0NhcmRDbGlja0hhbmRsZXIoaW5mby5kYXRhLnVybC51cmwsIG9wZW5BcnRpY2xlc0luTmV3VGFiKShlKVxuICAgICAgaWYgKGZlZWREZXB0aCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJlcG9ydFZpc2l0KGZlZWREZXB0aClcbiAgICAgIH1cbiAgICB9fT5cbiAgICA8TGFyZ2VJbWFnZSBsb2FkaW5nPSdsYXp5JyBzcmM9e2luZm8uZGF0YS5pbWFnZS5wYWRkZWRJbWFnZVVybD8udXJsID8/IGluZm8uZGF0YS5pbWFnZS5pbWFnZVVybD8udXJsID8/ICcnfSAvPlxuICAgIDxBcnRpY2xlTWV0YVJvdyBhcnRpY2xlPXtpbmZvLmRhdGF9IC8+XG4gICAgPFRpdGxlPlxuICAgICAgPEJyYXZlTmV3c0xpbmtcbiAgICAgICAgaHJlZj17aW5mby5kYXRhLnVybC51cmx9XG4gICAgICAgIGZlZWREZXB0aD17ZmVlZERlcHRofVxuICAgICAgPlxuICAgICAgICB7aW5mby5kYXRhLnRpdGxlfVxuICAgICAgPC9CcmF2ZU5ld3NMaW5rPlxuICAgIDwvVGl0bGU+XG4gIDwvQ29udGFpbmVyPlxufVxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIzIFRoZSBCcmF2ZSBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuLy8gTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBmaWxlLFxuLy8gWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHBzOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IENhcmQgZnJvbSBcIi4vQ2FyZFwiO1xuaW1wb3J0IFByb2dyZXNzUmluZyBmcm9tICdAYnJhdmUvbGVvL3JlYWN0L3Byb2dyZXNzUmluZydcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQoQ2FyZClgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuYFxuXG5jb25zdCBTcGlubmVyID0gc3R5bGVkKFByb2dyZXNzUmluZylgXG4gIC0tbGVvLXByb2dyZXNzcmluZy1jb2xvcjogdmFyKC0tYm4tZ2xhc3MtMjUpO1xuYFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2FkaW5nQ2FyZCgpIHtcbiAgcmV0dXJuIDxDb250YWluZXI+XG4gICAgPFNwaW5uZXIgLz5cbiAgPC9Db250YWluZXI+XG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjMgVGhlIEJyYXZlIEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4vLyBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIGZpbGUsXG4vLyBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cHM6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy5cbmltcG9ydCB7IGdldExvY2FsZSB9IGZyb20gJyR3ZWItY29tbW9uL2xvY2FsZSc7XG5pbXBvcnQgeyBzcGFjaW5nIH0gZnJvbSAnQGJyYXZlL2xlby90b2tlbnMvY3NzL3ZhcmlhYmxlcyc7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBGbGV4IGZyb20gJyR3ZWItY29tbW9uL0ZsZXgnO1xuaW1wb3J0IHsgVGl0bGUgfSBmcm9tICcuL0NhcmQnO1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQoRmxleClgXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICBwYWRkaW5nOiAke3NwYWNpbmdbJzNYbCddfTtcbiAgZ2FwOiAke3NwYWNpbmcubX07XG4gIGNvbG9yOiB2YXIoLS1ibi1nbGFzcy03MCk7XG5cbiAgJiA+IHN2ZyB7XG4gICAgbWFyZ2luLWJvdHRvbTogJHtzcGFjaW5nWycyWGwnXX07XG4gICAgZmlsbDogbm9uZTtcbiAgfVxuXG4gICYgPiBsZW8tYnV0dG9uIHtcbiAgICBmbGV4OiAwO1xuICB9XG5gXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5vQXJ0aWNsZXMoKSB7XG4gIHJldHVybiA8Q29udGFpbmVyIGFsaWduPSdjZW50ZXInIGRpcmVjdGlvbj0nY29sdW1uJyBqdXN0aWZ5PSdjZW50ZXInIGdhcD17c3BhY2luZy5tfT5cbiAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjk5XCIgaGVpZ2h0PVwiODhcIiB2aWV3Qm94PVwiMCAwIDk5IDg4XCIgZmlsbD1cIm5vbmVcIj5cbiAgICAgIDxwYXRoIGQ9XCJNOS41IDAuNUM0LjgwNTU4IDAuNSAxIDQuMzA1NTggMSA5Vjc5QzEgODMuNjk0NCA0LjgwNTU4IDg3LjUgOS41IDg3LjVIODkuNUM5NC4xOTQ0IDg3LjUgOTggODMuNjk0NCA5OCA3OVY5Qzk4IDQuMzA1NTggOTQuMTk0NCAwLjUgODkuNSAwLjVIOS41WlwiIHN0cm9rZT1cInVybCgjcGFpbnQwX2xpbmVhcl81MDUxXzEwNzMwKVwiIC8+XG4gICAgICA8cGF0aCBkPVwiTTkuNSAxM0M5LjUgMTAuNzkwOSAxMS4yOTA5IDkgMTMuNSA5SDg1LjVDODcuNzA5MSA5IDg5LjUgMTAuNzkwOSA4OS41IDEzVjUyQzg5LjUgNTQuMjA5MSA4Ny43MDkxIDU2IDg1LjUgNTZIMTMuNUMxMS4yOTA5IDU2IDkuNSA1NC4yMDkxIDkuNSA1MlYxM1pcIiBmaWxsPVwidXJsKCNwYWludDFfbGluZWFyXzUwNTFfMTA3MzApXCIgLz5cbiAgICAgIDxyZWN0IHg9XCI5LjVcIiB5PVwiNjlcIiB3aWR0aD1cIjgwXCIgaGVpZ2h0PVwiNFwiIHJ4PVwiMlwiIGZpbGw9XCJ1cmwoI3BhaW50Ml9saW5lYXJfNTA1MV8xMDczMClcIiAvPlxuICAgICAgPHJlY3QgeD1cIjkuNVwiIHk9XCI1OVwiIHdpZHRoPVwiNDhcIiBoZWlnaHQ9XCIyXCIgcng9XCIxXCIgZmlsbD1cInVybCgjcGFpbnQzX2xpbmVhcl81MDUxXzEwNzMwKVwiIC8+XG4gICAgICA8cmVjdCB4PVwiOS41XCIgeT1cIjc1XCIgd2lkdGg9XCI2NFwiIGhlaWdodD1cIjRcIiByeD1cIjJcIiBmaWxsPVwidXJsKCNwYWludDRfbGluZWFyXzUwNTFfMTA3MzApXCIgLz5cbiAgICAgIDxkZWZzPlxuICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9XCJwYWludDBfbGluZWFyXzUwNTFfMTA3MzBcIiB4MT1cIjQ5LjVcIiB5MT1cIjFcIiB4Mj1cIjQ5LjVcIiB5Mj1cIjc4LjVcIiBncmFkaWVudFVuaXRzPVwidXNlclNwYWNlT25Vc2VcIj5cbiAgICAgICAgICA8c3RvcCBzdG9wQ29sb3I9XCJ3aGl0ZVwiIHN0b3BPcGFjaXR5PVwiMC4xNVwiIC8+XG4gICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMVwiIHN0b3BDb2xvcj1cIndoaXRlXCIgc3RvcE9wYWNpdHk9XCIwXCIgLz5cbiAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cbiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPVwicGFpbnQxX2xpbmVhcl81MDUxXzEwNzMwXCIgeDE9XCI5LjVcIiB5MT1cIjMzXCIgeDI9XCI4OS41XCIgeTI9XCIzM1wiIGdyYWRpZW50VW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiPlxuICAgICAgICAgIDxzdG9wIHN0b3BDb2xvcj1cIndoaXRlXCIgc3RvcE9wYWNpdHk9XCIwLjAzXCIgLz5cbiAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIxXCIgc3RvcENvbG9yPVwid2hpdGVcIiBzdG9wT3BhY2l0eT1cIjAuMlwiIC8+XG4gICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XG4gICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD1cInBhaW50Ml9saW5lYXJfNTA1MV8xMDczMFwiIHgxPVwiOS41XCIgeTE9XCI3MS4wNDI2XCIgeDI9XCI4OS41XCIgeTI9XCI3MS4wNDI1XCIgZ3JhZGllbnRVbml0cz1cInVzZXJTcGFjZU9uVXNlXCI+XG4gICAgICAgICAgPHN0b3Agc3RvcENvbG9yPVwid2hpdGVcIiBzdG9wT3BhY2l0eT1cIjAuMDNcIiAvPlxuICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjFcIiBzdG9wQ29sb3I9XCJ3aGl0ZVwiIHN0b3BPcGFjaXR5PVwiMC4yXCIgLz5cbiAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cbiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPVwicGFpbnQzX2xpbmVhcl81MDUxXzEwNzMwXCIgeDE9XCI5LjVcIiB5MT1cIjYwLjAyMTNcIiB4Mj1cIjU3LjVcIiB5Mj1cIjYwLjAyMTNcIiBncmFkaWVudFVuaXRzPVwidXNlclNwYWNlT25Vc2VcIj5cbiAgICAgICAgICA8c3RvcCBzdG9wQ29sb3I9XCJ3aGl0ZVwiIHN0b3BPcGFjaXR5PVwiMC4wM1wiIC8+XG4gICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMVwiIHN0b3BDb2xvcj1cIndoaXRlXCIgc3RvcE9wYWNpdHk9XCIwLjJcIiAvPlxuICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxuICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9XCJwYWludDRfbGluZWFyXzUwNTFfMTA3MzBcIiB4MT1cIjkuNVwiIHkxPVwiNzcuMDQyNlwiIHgyPVwiNzMuNVwiIHkyPVwiNzcuMDQyNVwiIGdyYWRpZW50VW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiPlxuICAgICAgICAgIDxzdG9wIHN0b3BDb2xvcj1cIndoaXRlXCIgc3RvcE9wYWNpdHk9XCIwLjAzXCIgLz5cbiAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIxXCIgc3RvcENvbG9yPVwid2hpdGVcIiBzdG9wT3BhY2l0eT1cIjAuMlwiIC8+XG4gICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XG4gICAgICA8L2RlZnM+XG4gICAgPC9zdmc+XG4gICAgPFRpdGxlPntnZXRMb2NhbGUoUy5CUkFWRV9ORVdTX05PX0FSVElDTEVTX1RJVExFKX08L1RpdGxlPlxuICAgIDxkaXY+XG4gICAgICB7Z2V0TG9jYWxlKFMuQlJBVkVfTkVXU19OT19BUlRJQ0xFU19NRVNTQUdFKX1cbiAgICA8L2Rpdj5cbiAgPC9Db250YWluZXI+XG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjMgVGhlIEJyYXZlIEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4vLyBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIGZpbGUsXG4vLyBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cHM6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy5cbmltcG9ydCBCdXR0b24gZnJvbSAnQGJyYXZlL2xlby9yZWFjdC9idXR0b24nXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5leHBvcnQgZGVmYXVsdCBzdHlsZWQoQnV0dG9uKWBcbiAgLS1sZW8tYnV0dG9uLWNvbG9yOiB2YXIoLS1ibi1nbGFzcy0xMCk7XG5cbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2Ryb3AtZmlsdGVyOiBicmlnaHRuZXNzKDAuOCkgYmx1cigzMnB4KTtcbmBcbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMyBUaGUgQnJhdmUgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbi8vIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXMgZmlsZSxcbi8vIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwczovL21vemlsbGEub3JnL01QTC8yLjAvLlxuaW1wb3J0IEZsZXggZnJvbSAnJHdlYi1jb21tb24vRmxleCc7XG5pbXBvcnQgeyBnZXRMb2NhbGUgfSBmcm9tICckd2ViLWNvbW1vbi9sb2NhbGUnO1xuaW1wb3J0IHsgc3BhY2luZyB9IGZyb20gJ0BicmF2ZS9sZW8vdG9rZW5zL2Nzcy92YXJpYWJsZXMnO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgTmV3c0J1dHRvbiBmcm9tICcuLi9OZXdzQnV0dG9uJztcbmltcG9ydCB7IHVzZUJyYXZlTmV3cyB9IGZyb20gJy4uL3NoYXJlZC9Db250ZXh0JztcbmltcG9ydCB7IFRpdGxlIH0gZnJvbSAnLi9DYXJkJztcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkKEZsZXgpYFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgcGFkZGluZzogJHtzcGFjaW5nWyczWGwnXX07XG4gIGdhcDogJHtzcGFjaW5nLm19O1xuICBjb2xvcjogdmFyKC0tYm4tZ2xhc3MtNzApO1xuXG4gICYgPiBzdmcge1xuICAgIG1hcmdpbi1ib3R0b206ICR7c3BhY2luZy54bH07XG4gICAgZmlsbDogbm9uZTtcbiAgfVxuYFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOb0ZlZWRzKCkge1xuICBjb25zdCB7IHNldEN1c3RvbWl6ZVBhZ2UgfSA9IHVzZUJyYXZlTmV3cygpXG4gIHJldHVybiA8Q29udGFpbmVyIGFsaWduPSdjZW50ZXInIGRpcmVjdGlvbj0nY29sdW1uJyBqdXN0aWZ5PSdjZW50ZXInIGdhcD17c3BhY2luZy5tfT5cbiAgICA8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgZmlsbD0nbm9uZScgd2lkdGg9XCI5OVwiIHZpZXdCb3g9JzAgMCA2NCA0Nic+XG4gICAgICA8cGF0aFxuICAgICAgICBmaWxsPScjRjBGMkZGJ1xuICAgICAgICBmaWxsUnVsZT0nZXZlbm9kZCdcbiAgICAgICAgZD0nTTQ5LjY3IDQ2SDEzLjMzQzUuMzYgNDYgMCA0MS4zMiAwIDM0LjM3YzAtNS40NSAzLjA4LTEwLjMzIDcuODQtMTIuNzRsLS4wMi0uODRDNy44MiA5LjY5IDE2LjkyLjY3IDI4LjEuNjdhMjAuMyAyMC4zIDAgMDExOC4zNyAxMS42NWM5Ljc0LjQgMTcuNTQgOC40IDE3LjU0IDE4LjE3QzY0IDM5LjMzIDU3Ljg0IDQ2IDQ5LjY3IDQ2em0tMy45OC0yOC4zN2MtLjI0IDAtLjQ3LjAyLS43LjA1LTEuMjQuMTQtMi40LS42LTIuODEtMS43N0ExNC45NCAxNC45NCAwIDAwMjguMDggNmExNC44OCAxNC44OCAwIDAwLTE0LjkyIDE0Ljc5YzAgLjY4LjA2IDEuMzcuMTggMi4xMWEyLjY3IDIuNjcgMCAwMS0xLjggMi45NiA4Ljk1IDguOTUgMCAwMC02LjIgOC41YzAgNS44NSA2LjEyIDYuMyA4IDYuM2gzNi4zM2M0LjQ3IDAgOS0zLjUgOS0xMC4xNyAwLTcuMS01LjgzLTEyLjg2LTEyLjk4LTEyLjg2ek00MCAzNS4zM2MtLjY4IDAtMS4zNy0uMjYtMS44OS0uNzgtLjA1LS4wNC0yLjA2LTEuODgtNi4xMS0xLjg4LTQuMDUgMC02LjA2IDEuODQtNi4xNCAxLjkxLTEuMDcgMS0yLjc1Ljk3LTMuNzYtLjA3YTIuNjUgMi42NSAwIDAxLjAxLTMuNzNjLjM2LS4zNSAzLjYzLTMuNDUgOS44OS0zLjQ1IDYuMjYgMCA5LjUzIDMuMSA5Ljg5IDMuNDVBMi42NiAyLjY2IDAgMDE0MCAzNS4zM3ptLTUuMzMtMTZINDB2NS4zNGgtNS4zM3YtNS4zNHptLTEwLjY3IDBoNS4zM3Y1LjM0SDI0di01LjM0eidcbiAgICAgICAgY2xpcFJ1bGU9J2V2ZW5vZGQnIC8+XG4gICAgPC9zdmc+XG4gICAgPFRpdGxlPntnZXRMb2NhbGUoUy5CUkFWRV9ORVdTX05PX0NPTlRFTlRfSEVBRElORyl9PC9UaXRsZT5cbiAgICA8ZGl2PlxuICAgICAge2dldExvY2FsZShTLkJSQVZFX05FV1NfTk9fQ09OVEVOVF9NRVNTQUdFKX1cbiAgICA8L2Rpdj5cbiAgICA8TmV3c0J1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRDdXN0b21pemVQYWdlKCduZXdzJyl9PlxuICAgICAge2dldExvY2FsZShTLkJSQVZFX05FV1NfTk9fQ09OVEVOVF9BQ1RJT05fTEFCRUwpfVxuICAgIDwvTmV3c0J1dHRvbj5cbiAgPC9Db250YWluZXI+XG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjMgVGhlIEJyYXZlIEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4vLyBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIGZpbGUsXG4vLyBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cHM6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy5cblxuZXhwb3J0IGNvbnN0IHNldEhpc3RvcnlTdGF0ZSA9IDxUPihzdGF0ZTogVCkgPT4ge1xuICBjb25zdCBvbGRTdGF0ZSA9IHR5cGVvZiBoaXN0b3J5LnN0YXRlID09PSBcIm9iamVjdFwiID8gaGlzdG9yeS5zdGF0ZSA6IHt9XG4gIGNvbnN0IG5ld1N0YXRlID0gey4uLm9sZFN0YXRlLCAuLi5zdGF0ZX1cbiAgaGlzdG9yeS5yZXBsYWNlU3RhdGUobmV3U3RhdGUsIGRvY3VtZW50LnRpdGxlKVxufVxuXG5leHBvcnQgY29uc3QgZ2V0SGlzdG9yeVZhbHVlID0gPFQ+KG5hbWU6IHN0cmluZywgZGVmYXVsdFZhbHVlOiBUKTogVCA9PiB7XG4gIGNvbnN0IHN0YXRlID0gaGlzdG9yeS5zdGF0ZSA/PyB7fVxuICByZXR1cm4gbmFtZSBpbiBzdGF0ZSA/IHN0YXRlW25hbWVdIDogZGVmYXVsdFZhbHVlXG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjQgVGhlIEJyYXZlIEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4vLyBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIGZpbGUsXG4vLyBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cHM6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy5cblxuaW1wb3J0IEZsZXggZnJvbSAnJHdlYi1jb21tb24vRmxleCc7XG5pbXBvcnQgeyBzcGFjaW5nIH0gZnJvbSAnQGJyYXZlL2xlby90b2tlbnMvY3NzL3ZhcmlhYmxlcyc7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBOZXdzQnV0dG9uIGZyb20gJy4uL05ld3NCdXR0b24nO1xuaW1wb3J0IHsgdXNlQnJhdmVOZXdzIH0gZnJvbSAnLi4vc2hhcmVkL0NvbnRleHQnO1xuaW1wb3J0IHsgVGl0bGUgfSBmcm9tICcuL0NhcmQnO1xuaW1wb3J0IHsgZ2V0TG9jYWxlIH0gZnJvbSAnJHdlYi1jb21tb24vbG9jYWxlJztcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkKEZsZXgpYFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgcGFkZGluZzogJHtzcGFjaW5nWyczWGwnXX07XG4gIGdhcDogJHtzcGFjaW5nLm19O1xuICBjb2xvcjogdmFyKC0tYm4tZ2xhc3MtNzApO1xuXG4gICYgPiBzdmcge1xuICAgIG1hcmdpbi1ib3R0b206ICR7c3BhY2luZy54bH07XG4gICAgZmlsbDogbm9uZTtcbiAgfVxuYFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOb3RDb25uZWN0ZWQoKSB7XG4gIGNvbnN0IHsgIHJlZnJlc2hGZWVkVjIgfSA9IHVzZUJyYXZlTmV3cygpXG4gIHJldHVybiA8Q29udGFpbmVyIGFsaWduPSdjZW50ZXInIGRpcmVjdGlvbj0nY29sdW1uJyBqdXN0aWZ5PSdjZW50ZXInIGdhcD17c3BhY2luZy5tfT5cbiAgICA8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgZmlsbD0nbm9uZScgd2lkdGg9XCI5OVwiIHZpZXdCb3g9JzAgMCA2NCA0Nic+XG4gICAgICA8cGF0aFxuICAgICAgICBmaWxsPScjRjBGMkZGJ1xuICAgICAgICBmaWxsUnVsZT0nZXZlbm9kZCdcbiAgICAgICAgZD0nTTQ5LjY3IDQ2SDEzLjMzQzUuMzYgNDYgMCA0MS4zMiAwIDM0LjM3YzAtNS40NSAzLjA4LTEwLjMzIDcuODQtMTIuNzRsLS4wMi0uODRDNy44MiA5LjY5IDE2LjkyLjY3IDI4LjEuNjdhMjAuMyAyMC4zIDAgMDExOC4zNyAxMS42NWM5Ljc0LjQgMTcuNTQgOC40IDE3LjU0IDE4LjE3QzY0IDM5LjMzIDU3Ljg0IDQ2IDQ5LjY3IDQ2em0tMy45OC0yOC4zN2MtLjI0IDAtLjQ3LjAyLS43LjA1LTEuMjQuMTQtMi40LS42LTIuODEtMS43N0ExNC45NCAxNC45NCAwIDAwMjguMDggNmExNC44OCAxNC44OCAwIDAwLTE0LjkyIDE0Ljc5YzAgLjY4LjA2IDEuMzcuMTggMi4xMWEyLjY3IDIuNjcgMCAwMS0xLjggMi45NiA4Ljk1IDguOTUgMCAwMC02LjIgOC41YzAgNS44NSA2LjEyIDYuMyA4IDYuM2gzNi4zM2M0LjQ3IDAgOS0zLjUgOS0xMC4xNyAwLTcuMS01LjgzLTEyLjg2LTEyLjk4LTEyLjg2ek00MCAzNS4zM2MtLjY4IDAtMS4zNy0uMjYtMS44OS0uNzgtLjA1LS4wNC0yLjA2LTEuODgtNi4xMS0xLjg4LTQuMDUgMC02LjA2IDEuODQtNi4xNCAxLjkxLTEuMDcgMS0yLjc1Ljk3LTMuNzYtLjA3YTIuNjUgMi42NSAwIDAxLjAxLTMuNzNjLjM2LS4zNSAzLjYzLTMuNDUgOS44OS0zLjQ1IDYuMjYgMCA5LjUzIDMuMSA5Ljg5IDMuNDVBMi42NiAyLjY2IDAgMDE0MCAzNS4zM3ptLTUuMzMtMTZINDB2NS4zNGgtNS4zM3YtNS4zNHptLTEwLjY3IDBoNS4zM3Y1LjM0SDI0di01LjM0eidcbiAgICAgICAgY2xpcFJ1bGU9J2V2ZW5vZGQnIC8+XG4gICAgPC9zdmc+XG4gICAgPFRpdGxlPntnZXRMb2NhbGUoUy5CUkFWRV9ORVdTX09GRkxJTkVfVElUTEUpfTwvVGl0bGU+XG4gICAgPGRpdj5cbiAgICAgIHtnZXRMb2NhbGUoUy5CUkFWRV9ORVdTX09GRkxJTkVfTUVTU0FHRSl9XG4gICAgPC9kaXY+XG4gICAgPE5ld3NCdXR0b24gb25DbGljaz17cmVmcmVzaEZlZWRWMn0+XG4gICAgICB7Z2V0TG9jYWxlKFMuQlJBVkVfTkVXU19SRUZSRVNIX0ZFRUQpfVxuICAgIDwvTmV3c0J1dHRvbj5cbiAgPC9Db250YWluZXI+XG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjMgVGhlIEJyYXZlIEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4vLyBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIGZpbGUsXG4vLyBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cHM6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy5cblxuaW1wb3J0IHsgc3BhY2luZyB9IGZyb20gXCJAYnJhdmUvbGVvL3Rva2Vucy9jc3MvdmFyaWFibGVzXCI7XG5pbXBvcnQgeyBGZWVkSXRlbVYyLCBGZWVkVjIsIEZlZWRWMkVycm9yIH0gZnJvbSBcImdlbi9icmF2ZS9jb21wb25lbnRzL2JyYXZlX25ld3MvY29tbW9uL2JyYXZlX25ld3MubW9qb20ubVwiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCBBcnRpY2xlIGZyb20gXCIuL2ZlZWQvQXJ0aWNsZVwiO1xuaW1wb3J0IENhdWdodFVwIGZyb20gXCIuL2ZlZWQvQ2F1Z2h0VXBcIjtcbmltcG9ydCBDbHVzdGVyIGZyb20gXCIuL2ZlZWQvQ2x1c3RlclwiO1xuaW1wb3J0IERpc2NvdmVyIGZyb20gXCIuL2ZlZWQvRGlzY292ZXJcIjtcbmltcG9ydCBIZXJvQXJ0aWNsZSBmcm9tIFwiLi9mZWVkL0hlcm9cIjtcbmltcG9ydCBMb2FkaW5nQ2FyZCBmcm9tIFwiLi9mZWVkL0xvYWRpbmdDYXJkXCI7XG5pbXBvcnQgTm9BcnRpY2xlcyBmcm9tIFwiLi9mZWVkL05vQXJ0aWNsZXNcIjtcbmltcG9ydCBOb0ZlZWRzIGZyb20gXCIuL2ZlZWQvTm9GZWVkc1wiO1xuaW1wb3J0IHsgZ2V0SGlzdG9yeVZhbHVlLCBzZXRIaXN0b3J5U3RhdGUgfSBmcm9tIFwiLi9zaGFyZWQvaGlzdG9yeVwiO1xuaW1wb3J0IE5vdENvbm5lY3RlZCBmcm9tIFwiLi9mZWVkL05vdENvbm5lY3RlZFwiO1xuXG4vLyBSZXN0b3Jpbmcgc2Nyb2xsIHBvc2l0aW9uIGlzIGNvbXBsaWNhdGVkIC0gd2UgaGF2ZSB0d28gYXZhaWxhYmxlIHN0cmF0ZWdpZXM6XG4vLyAxLiBTY3JvbGwgdG8gdGhlIHNhbWUgcG9zaXRpb24gLSBhcyBsb25nIGFzIHRoZSB3aW5kb3cgaGFzbid0IGJlZW4gcmVzaXplZCxcbi8vICAgIHRoaXMgd2lsbCBicmluZyB0aGUgdXNlciBiYWNrIHRvIGV4YWN0bHkgd2hlcmUgdGhleSBsZWZ0LlxuLy8gMi4gSWYgdGhlIHNjcmVlbiBzaXplIGhhcyBjaGFuZ2VkLCBzY3JvbGwgdGhlIGNsaWNrZWQgYXJ0aWNsZSB0byB0aGUgdG9wIG9mXG4vLyAgICB0aGUgc2NyZWVuLlxuaW50ZXJmYWNlIE5ld3NTY3JvbGxEYXRhIHtcbiAgaXRlbUlkOiBzdHJpbmcsXG4gIGlubmVyV2lkdGg6IG51bWJlcixcbiAgaW5uZXJIZWlnaHQ6IG51bWJlcixcbiAgc2Nyb2xsUG9zOiBudW1iZXIsXG59XG5cbmNvbnN0IENBUkRfQ0xBU1MgPSAnZmVlZC1jYXJkJ1xuY29uc3QgRmVlZENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiA1NDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAke3NwYWNpbmcueGx9O1xuYFxuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBmZWVkOiBGZWVkVjIgfCB1bmRlZmluZWQ7XG4gIG9uVmlld0NvdW50Q2hhbmdlPzogKG5ld1ZpZXdzOiBudW1iZXIpID0+IHZvaWQ7XG4gIG9uU2Vzc2lvblN0YXJ0PzogKCkgPT4gdm9pZDtcbn1cblxuY29uc3QgZ2V0S2V5ID0gKGZlZWRJdGVtOiBGZWVkSXRlbVYyLCBpbmRleDogbnVtYmVyKTogUmVhY3QuS2V5ID0+IHtcbiAgaWYgKGZlZWRJdGVtLmFydGljbGUpIHJldHVybiBmZWVkSXRlbS5hcnRpY2xlLmRhdGEudXJsLnVybFxuICBpZiAoZmVlZEl0ZW0uaGVybykgcmV0dXJuIGZlZWRJdGVtLmhlcm8uZGF0YS51cmwudXJsXG4gIGlmIChmZWVkSXRlbS5jbHVzdGVyKSByZXR1cm4gaW5kZXhcbiAgaWYgKGZlZWRJdGVtLmRpc2NvdmVyKSByZXR1cm4gaW5kZXhcbiAgdGhyb3cgbmV3IEVycm9yKFwiVW5zdXBwb3J0ZWQgRmVlZEl0ZW0hXCIpXG59XG5cbmV4cG9ydCBjb25zdCBORVdTX0ZFRURfQ0xBU1MgPSBcIm5ld3MtZmVlZFwiXG5cbi8vIFRoZSBudW1iZXIgb2YgY2FyZHMgdG8gbG9hZCBhdCBhIHRpbWUuIE1ha2luZyB0aGlzIHRvbyBoaWdoIHdpbGwgcmVzdWx0IGluXG4vLyBqYW5rIGFzIGFsbCB0aGUgY2FyZHMgYXJlIHJlbmRlcmVkIGF0IG9uY2UuXG5jb25zdCBQQUdFX1NJWkUgPSAyNTtcbmNvbnN0IEhJU1RPUllfU0NST0xMX0RBVEEgPSAnYm4tc2Nyb2xsLWRhdGEnXG5jb25zdCBISVNUT1JZX0NBUkRfQ09VTlQgPSAnYm4tY2FyZC1jb3VudCdcblxuY29uc3QgQ0FSRF9DT1VOVF9BVFRSSUJVVEUgPSAnZGF0YS1uZXdzLWNhcmQtY291bnQnXG5cbmNvbnN0IEhPVVJfTVMgPSA2MCAqIDYwICogMTAwMDtcblxuY29uc3Qgc2F2ZVNjcm9sbFBvcyA9IChpdGVtSWQ6IFJlYWN0LktleSkgPT4gKCkgPT4ge1xuICBzZXRIaXN0b3J5U3RhdGUoe1xuICAgIFtISVNUT1JZX1NDUk9MTF9EQVRBXToge1xuICAgICAgaXRlbUlkOiBpdGVtSWQsXG4gICAgICBpbm5lcldpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCxcbiAgICAgIGlubmVySGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQsXG4gICAgICBzY3JvbGxQb3M6IGRvY3VtZW50LnNjcm9sbGluZ0VsZW1lbnQ/LnNjcm9sbFRvcFxuICAgIH1cbiAgfSlcbn1cblxuY29uc3QgZXJyb3JzID0ge1xuICBbRmVlZFYyRXJyb3IuQ29ubmVjdGlvbkVycm9yXTogPE5vdENvbm5lY3RlZCAvPixcbiAgW0ZlZWRWMkVycm9yLk5vQXJ0aWNsZXNdOiA8Tm9BcnRpY2xlcyAvPixcbiAgW0ZlZWRWMkVycm9yLk5vRmVlZHNdOiA8Tm9GZWVkcyAvPlxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb21wb25lbnQoeyBmZWVkLCBvblZpZXdDb3VudENoYW5nZSwgb25TZXNzaW9uU3RhcnQgfTogUHJvcHMpIHtcbiAgY29uc3QgW2NhcmRDb3VudCwgc2V0Q2FyZENvdW50XSA9IFJlYWN0LnVzZVN0YXRlKGdldEhpc3RvcnlWYWx1ZShISVNUT1JZX0NBUkRfQ09VTlQsIFBBR0VfU0laRSkpO1xuXG4gIC8vIFN0b3JlIHRoZSBudW1iZXIgb2YgY2FyZHMgd2UndmUgbG9hZGVkIGluIGhpc3RvcnkgLSBvdGhlcndpc2Ugd2hlbiB3ZVxuICAvLyBuYXZpZ2F0ZSBiYWNrIHdlIG1pZ2h0IG5vdCBiZSBhYmxlIHRvIHNjcm9sbCBkb3duIGZhciBlbm91Z2guXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0SGlzdG9yeVN0YXRlKHsgW0hJU1RPUllfQ0FSRF9DT1VOVF06IGNhcmRDb3VudCB9KVxuICB9LCBbY2FyZENvdW50XSlcblxuICAvLyBUcmFjayB0aGUgZmVlZCBzY3JvbGwgcG9zaXRpb24gLSBpZiB3ZSBtb3VudCB0aGlzIGNvbXBvbmVudCBzb21ld2hlcmUgd2l0aFxuICAvLyBhIHNjcm9sbCBkYXRhIHNhdmVkIGluIHRoZSBzdGF0ZSwgdHJ5IGFuZCByZXN0b3JlIHRoZSBzY3JvbGwgcG9zaXRpb24uXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgc2Nyb2xsRGF0YSA9IGdldEhpc3RvcnlWYWx1ZTxOZXdzU2Nyb2xsRGF0YSB8IHVuZGVmaW5lZD4oSElTVE9SWV9TQ1JPTExfREFUQSwgdW5kZWZpbmVkKVxuICAgIGlmIChzY3JvbGxEYXRhKSB7XG4gICAgICAvLyBJZiB0aGUgdmlld3BvcnQgc2l6ZSBoYXNuJ3QgY2hhbmdlZCwgcmVzdG9yZSB0aGUgc2Nyb2xsIHBvc2l0aW9uLlxuICAgICAgLy8gT3RoZXJ3aXNlLCBzY3JvbGwgdGhlIGNsaWNrZWQgaXRlbSBpbnRvIHZpZXcuXG4gICAgICBjb25zdCBzY3JvbGwgPSBzY3JvbGxEYXRhLmlubmVySGVpZ2h0ID09PSB3aW5kb3cuaW5uZXJIZWlnaHQgJiYgc2Nyb2xsRGF0YS5pbm5lcldpZHRoID09PSB3aW5kb3cuaW5uZXJXaWR0aFxuICAgICAgICA/ICgpID0+IGRvY3VtZW50LnNjcm9sbGluZ0VsZW1lbnQ/LnNjcm9sbFRvKHsgdG9wOiBzY3JvbGxEYXRhLnNjcm9sbFBvcyB9KVxuICAgICAgICA6ICgpID0+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWlkPVwiJHtzY3JvbGxEYXRhLml0ZW1JZH1cIl1gKT8uc2Nyb2xsSW50b1ZpZXcoKVxuICAgICAgc2Nyb2xsKClcbiAgICB9XG4gIH0sIFtdKVxuXG4gIGNvbnN0IGxvYWRNb3JlT2JzZXJ2ZXIgPSBSZWFjdC51c2VSZWYobmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGVudHJpZXMgPT4ge1xuICAgIC8vIFdoaWxlIHRoZSBmZWVkIGlzIGxvYWRpbmcgd2UgZ2V0IHNvbWUgbm90aWZpY2F0aW9ucyBmb3IgZnVsbHlcbiAgICAvLyBpbnZpc2libGUgY2FyZHMuXG4gICAgaWYgKCFlbnRyaWVzLnNvbWUoaSA9PiBpLnRhcmdldD8uY2xhc3NMaXN0LmNvbnRhaW5zKENBUkRfQ0xBU1MpICYmIGkuaW50ZXJzZWN0aW9uUmF0aW8gIT09IDApKSByZXR1cm5cbiAgICBzZXRDYXJkQ291bnQoY2FyZENvdW50ID0+IGNhcmRDb3VudCArIFBBR0VfU0laRSk7XG4gIH0sIHtcbiAgICByb290TWFyZ2luOiAnMHB4IDBweCAxMDAwcHggMHB4JyxcbiAgfSkpXG5cbiAgLy8gQ3JlYXRlIGludGVyc2VjdGlvbiBvYnNlcnZlciAmIHJlbGV2YW50IHN0YXRlIHRvIG1lYXN1cmVcbiAgLy8gdGhlIGFtb3VudCBvZiB2aWV3ZWQgY2FyZHMgaW4gdGhlIHNlc3Npb24uXG4gIGNvbnN0IGxhc3RWaWV3ZWRDYXJkQ291bnQgPSBSZWFjdC51c2VSZWYoMCk7XG4gIGNvbnN0IGxhc3RVc2FnZVRpbWUgPSBSZWFjdC51c2VSZWY8RGF0ZSB8IG51bGw+KG51bGwpO1xuICBjb25zdCB2aWV3RGVwdGhJbnRlcnNlY3Rpb25PYnNlcnZlciA9IFJlYWN0LnVzZVJlZihuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZW50cmllcyA9PiB7XG4gICAgY29uc3QgaW5WaWV3Q291bnRzID0gZW50cmllc1xuICAgICAgLmZpbHRlcihlID0+IGUuaW50ZXJzZWN0aW9uUmF0aW8gPT09IDEpXG4gICAgICAubWFwKGUgPT4gTnVtYmVyKGUudGFyZ2V0LmdldEF0dHJpYnV0ZShDQVJEX0NPVU5UX0FUVFJJQlVURSkpKTtcbiAgICBpZiAoIWluVmlld0NvdW50cy5sZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKG9uU2Vzc2lvblN0YXJ0KSB7XG4gICAgICBpZiAoIWxhc3RVc2FnZVRpbWUuY3VycmVudCB8fCAobmV3IERhdGUoKS5nZXRUaW1lKCkgLSBIT1VSX01TKSA+IGxhc3RVc2FnZVRpbWUuY3VycmVudC5nZXRUaW1lKCkpIHtcbiAgICAgICAgb25TZXNzaW9uU3RhcnQoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdFVzYWdlVGltZS5jdXJyZW50ID0gbmV3IERhdGUoKTtcbiAgICBjb25zdCBsYXJnZXN0Q2FyZENvdW50ID0gTWF0aC5tYXgoLi4uaW5WaWV3Q291bnRzKTtcbiAgICAvLyBFbnN1cmUgd2Ugb25seSByZXBvcnQgaW5jcmVhc2VzIGluIHNjcm9sbCBkZXB0aFxuICAgIC8vIGJ5IGNvbXBhcmluZyB0byB0aGUgbGFzdCBzY3JvbGwgY2FyZCBjb3VudFxuICAgIGlmIChsYXN0Vmlld2VkQ2FyZENvdW50LmN1cnJlbnQgPj0gbGFyZ2VzdENhcmRDb3VudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBuZXdWaWV3cyA9IGxhcmdlc3RDYXJkQ291bnQgLSBsYXN0Vmlld2VkQ2FyZENvdW50LmN1cnJlbnQ7XG4gICAgbGFzdFZpZXdlZENhcmRDb3VudC5jdXJyZW50ID0gbGFyZ2VzdENhcmRDb3VudDtcbiAgICBpZiAob25WaWV3Q291bnRDaGFuZ2UpIHtcbiAgICAgIG9uVmlld0NvdW50Q2hhbmdlKG5ld1ZpZXdzKTtcbiAgICB9XG4gIH0sIHtcbiAgICB0aHJlc2hvbGQ6IDFcbiAgfSkpO1xuXG4gIGNvbnN0IHJlZ2lzdGVyVmlld0RlcHRoT2JzZXJ2YXRpb24gPSBSZWFjdC51c2VDYWxsYmFjaygoZWxlbWVudDogSFRNTEVsZW1lbnQgfCBudWxsKSA9PiB7XG4gICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZpZXdEZXB0aEludGVyc2VjdGlvbk9ic2VydmVyLmN1cnJlbnQub2JzZXJ2ZShlbGVtZW50KTtcbiAgfSwgW10pO1xuXG4gIC8vIE9ubHkgb2JzZXJ2ZSB0aGUgYm90dG9tIGNhcmRcbiAgY29uc3Qgc2V0TGFzdENhcmRSZWYgPSBSZWFjdC51c2VDYWxsYmFjaygoZWw6IEhUTUxFbGVtZW50IHwgbnVsbCkgPT4ge1xuICAgIGxvYWRNb3JlT2JzZXJ2ZXIuY3VycmVudC5kaXNjb25uZWN0KCk7XG4gICAgaWYgKCFlbCkgcmV0dXJuO1xuXG4gICAgbG9hZE1vcmVPYnNlcnZlci5jdXJyZW50Lm9ic2VydmUoZWwpO1xuICB9LCBbXSlcblxuICBjb25zdCBjYXJkcyA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IGNvdW50ID0gTWF0aC5taW4oZmVlZD8uaXRlbXMubGVuZ3RoID8/IDAsIGNhcmRDb3VudClcbiAgICBsZXQgY3VycmVudENhcmRDb3VudCA9IDA7XG4gICAgY29uc3Qgc2V0UmVmQXRJbmRleCA9IChpbmRleDogbnVtYmVyKSA9PiAoZWxlbWVudDogSFRNTEVsZW1lbnQgfCBudWxsKSA9PiB7XG4gICAgICBjb25zdCBpc0xhc3QgPSBpbmRleCA9PT0gY291bnQgLSAxXG4gICAgICBpZiAoaXNMYXN0KSBzZXRMYXN0Q2FyZFJlZihlbGVtZW50KVxuICAgICAgcmVnaXN0ZXJWaWV3RGVwdGhPYnNlcnZhdGlvbihlbGVtZW50KVxuICAgIH1cblxuICAgIHJldHVybiBmZWVkPy5pdGVtcy5zbGljZSgwLCBjb3VudCkubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgbGV0IGVsOiBSZWFjdC5SZWFjdE5vZGVcblxuICAgICAgaWYgKGl0ZW0uYXJ0aWNsZSkge1xuICAgICAgICBlbCA9IDxBcnRpY2xlIGluZm89e2l0ZW0uYXJ0aWNsZX0gZmVlZERlcHRoPXtjdXJyZW50Q2FyZENvdW50fSAvPlxuICAgICAgfVxuICAgICAgZWxzZSBpZiAoaXRlbS5jbHVzdGVyKSB7XG4gICAgICAgIGVsID0gPENsdXN0ZXIgaW5mbz17aXRlbS5jbHVzdGVyfSBmZWVkRGVwdGg9e2N1cnJlbnRDYXJkQ291bnR9IC8+XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChpdGVtLmRpc2NvdmVyKSB7XG4gICAgICAgIGVsID0gPERpc2NvdmVyIGluZm89e2l0ZW0uZGlzY292ZXJ9IC8+XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChpdGVtLmhlcm8pIHtcbiAgICAgICAgZWwgPSA8SGVyb0FydGljbGUgaW5mbz17aXRlbS5oZXJvfSBmZWVkRGVwdGg9e2N1cnJlbnRDYXJkQ291bnR9IC8+XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGl0ZW0hXCIgKyBKU09OLnN0cmluZ2lmeShpdGVtKSlcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW0uY2x1c3Rlcikge1xuICAgICAgICBjdXJyZW50Q2FyZENvdW50ICs9IGl0ZW0uY2x1c3Rlci5hcnRpY2xlcy5sZW5ndGg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjdXJyZW50Q2FyZENvdW50Kys7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGtleSA9IGdldEtleShpdGVtLCBpbmRleClcbiAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17Q0FSRF9DTEFTU30gb25DbGlja0NhcHR1cmU9e3NhdmVTY3JvbGxQb3Moa2V5KX0ga2V5PXtrZXl9IGRhdGEtaWQ9e2tleX0gey4uLnsgW0NBUkRfQ09VTlRfQVRUUklCVVRFXTogY3VycmVudENhcmRDb3VudCB9fSByZWY9e3NldFJlZkF0SW5kZXgoaW5kZXgpfT5cbiAgICAgICAge2VsfVxuICAgICAgPC9kaXY+XG4gICAgfSlcbiAgfSwgW2NhcmRDb3VudCwgZmVlZD8uaXRlbXMsIHJlZ2lzdGVyVmlld0RlcHRoT2JzZXJ2YXRpb25dKVxuXG4gIHJldHVybiA8RmVlZENvbnRhaW5lciBjbGFzc05hbWU9e05FV1NfRkVFRF9DTEFTU30+XG4gICAge2ZlZWRcbiAgICAgID8gZXJyb3JzW2ZlZWQuZXJyb3IhXSA/PyA8PlxuICAgICAgICB7Y2FyZHN9XG4gICAgICAgIDxDYXVnaHRVcCAvPlxuICAgICAgPC8+XG4gICAgICA6IDxMb2FkaW5nQ2FyZCAvPn1cbiAgPC9GZWVkQ29udGFpbmVyPlxufVxuIiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImEwMDBlOTI5NmEwNDg3MzM3MDE4MDljMDg2M2VkMjkxLnN2Z1wiOyIsIi8qIENvcHlyaWdodCAoYykgMjAyNSBUaGUgQnJhdmUgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXMgZmlsZSxcbiAqIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwczovL21vemlsbGEub3JnL01QTC8yLjAvLiAqL1xuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BicmF2ZS9sZW8vcmVhY3QvYnV0dG9uJ1xuaW1wb3J0IHsgY29sb3IsIGZvbnQgfSBmcm9tICdAYnJhdmUvbGVvL3Rva2Vucy9jc3MvdmFyaWFibGVzJ1xuXG5pbXBvcnQgeyBnZXRMb2NhbGUgfSBmcm9tICckd2ViLWNvbW1vbi9sb2NhbGUnXG5pbXBvcnQgeyB1c2VCcmF2ZU5ld3MgfSBmcm9tICcuL3NoYXJlZC9Db250ZXh0J1xuaW1wb3J0IHsgTkVXU19GRUVEX0NMQVNTIH0gZnJvbSAnLi9GZWVkJ1xuXG5pbXBvcnQgb3B0SW5JbWFnZSBmcm9tICcuL2JyYXZlTmV3c0xvZ28uc3ZnJ1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kOiByZ2JhKDUzLCA1MywgNTMsIDAuNDcpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNjJweCk7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIHBhZGRpbmc6IDQ0cHggODJweCAzNnB4O1xuICB3aWR0aDogNjgwcHg7XG5cbiAgY29sb3I6ICR7Y29sb3IudGV4dC5wcmltYXJ5fTtcbiAgZm9udDogJHtmb250LmRlZmF1bHQucmVndWxhcn07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDMycHg7XG5cbiAgPiAqIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxNnB4O1xuICB9XG5cbiAgaDMge1xuICAgIGZvbnQ6ICR7Zm9udC5oZWFkaW5nLmgzfTtcbiAgICBtYXJnaW46IDA7XG4gIH1cblxuICBwIHtcbiAgICBtYXJnaW46IDA7XG4gIH1cblxuICAuZ3JhcGhpYyB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7b3B0SW5JbWFnZX0pO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gIH1cbmBcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gT3B0SW4oKSB7XG4gIGNvbnN0IHsgdG9nZ2xlQnJhdmVOZXdzT25OVFAgfSA9IHVzZUJyYXZlTmV3cygpXG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyIGRhdGEtdGhlbWU9J2RhcmsnIGNsYXNzTmFtZT17TkVXU19GRUVEX0NMQVNTfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdncmFwaGljJyAvPlxuICAgICAgPGgzPntnZXRMb2NhbGUoUy5CUkFWRV9ORVdTX0lOVFJPX1RJVExFKX08L2gzPlxuICAgICAgPGRpdj5cbiAgICAgICAgPHA+e2dldExvY2FsZShTLkJSQVZFX05FV1NfSU5UUk9fREVTQ1JJUFRJT04pfTwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIGtpbmQ9J2ZpbGxlZCdcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0b2dnbGVCcmF2ZU5ld3NPbk5UUCh0cnVlKX1cbiAgICAgICAgPlxuICAgICAgICAgIHtnZXRMb2NhbGUoUy5CUkFWRV9ORVdTX09QVF9JTl9BQ1RJT05fTEFCRUwpfVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIGtpbmQ9J3BsYWluLWZhaW50J1xuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRvZ2dsZUJyYXZlTmV3c09uTlRQKGZhbHNlKX1cbiAgICAgICAgPlxuICAgICAgICAgIHtnZXRMb2NhbGUoUy5CUkFWRV9ORVdTX09QVF9PVVRfQUNUSU9OX0xBQkVMKX1cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKVxufVxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDI2IFRoZSBCcmF2ZSBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuLy8gTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBmaWxlLFxuLy8gWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHBzOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uXG5cbmltcG9ydCB7IGdldExvY2FsZSB9IGZyb20gJyR3ZWItY29tbW9uL2xvY2FsZSdcbmltcG9ydCBJY29uIGZyb20gJ0BicmF2ZS9sZW8vcmVhY3QvaWNvbidcbmltcG9ydCB7IGNvbG9yLCBmb250LCBzcGFjaW5nIH0gZnJvbSAnQGJyYXZlL2xlby90b2tlbnMvY3NzL3ZhcmlhYmxlcydcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCBTZXR0aW5nc0J1dHRvbiBmcm9tICcuL1NldHRpbmdzQnV0dG9uJ1xuaW1wb3J0IHsgdXNlQnJhdmVOZXdzIH0gZnJvbSAnLi9zaGFyZWQvQ29udGV4dCdcblxuY29uc3QgU2lkZWJhck1lbnUgPSBSZWFjdC5sYXp5KCgpID0+IGltcG9ydCgnLi9TaWRlYmFyTWVudScpKVxuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBtYXgtd2lkdGg6IG1pbig1NDBweCwgMTAwdncpO1xuICB3aWR0aDogMTAwJTtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6ICR7c3BhY2luZy5tfTtcbmBcblxuY29uc3QgUmlnaHRTaWRlID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAke3NwYWNpbmcubX07XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuYFxuXG5jb25zdCBEaXZpZGVyID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDFweDtcbiAgaGVpZ2h0OiAke3NwYWNpbmcubH07XG4gIGJhY2tncm91bmQ6ICR7Y29sb3IuZGl2aWRlci5zdWJ0bGV9O1xuICBmbGV4OiAwO1xuYFxuXG5pbnRlcmZhY2UgUHJvcHMge1xuICAvLyBJbnZva2VkIHdoZW4gdGhlIGN1c3RvbWl6ZSAoXCJzZXR0aW5nc1wiKSBidXR0b24gaXMgcHJlc3NlZC4gU3VyZmFjZXMgZGlmZmVyXG4gIC8vIGluIHdoZXJlIGN1c3RvbWl6YXRpb24gbGl2ZXM6IHRoZSBmZWVkIG9wZW5zIGl0cyBpbmxpbmUgbW9kYWwsIHdoaWxlIHRoZVxuICAvLyBzaWRlIHBhbmVsIG9wZW5zIHRoZSBOZXcgVGFiIFBhZ2UuXG4gIG9uQ3VzdG9taXplOiAoKSA9PiB2b2lkXG4gIC8vIFdoZXRoZXIgdG8gc2hvdyB0aGUgZmVlZC1saXN0IG1lbnUuIFRoZSBmZWVkIG9ubHkgbmVlZHMgaXQgb24gc21hbGxcbiAgLy8gdmlld3BvcnRzIChpdCBoYXMgYSBkZWRpY2F0ZWQgc2lkZWJhciBvdGhlcndpc2UpLCB3aGVyZWFzIG5hcnJvdyBzdXJmYWNlc1xuICAvLyBsaWtlIHRoZSBzaWRlIHBhbmVsIGFsd2F5cyBzaG93IGl0LlxuICBzaG93TWVudT86IGJvb2xlYW5cbiAgLy8gT3B0aW9uYWwgaGVhZGluZyByZW5kZXJlZCBiZXR3ZWVuIHRoZSBtZW51IGFuZCB0aGUgYWN0aW9uIGJ1dHRvbnMuIE9ubHkgdGhlXG4gIC8vIHNpZGUgcGFuZWwgc3VwcGxpZXMgdGhpczsgdGhlIGZlZWQgcGFnZSBoYXMgaXRzIG93biBsYXlvdXQuXG4gIHRpdGxlPzogc3RyaW5nXG4gIC8vIFdoZW4gcHJvdmlkZWQsIGEgY2xvc2UgYnV0dG9uIGlzIHJlbmRlcmVkIChzaWRlYmFyIG1vZGUgb25seSkuIENsb3NlcyB0aGVcbiAgLy8gaG9zdGluZyBzaWRlIHBhbmVsLlxuICBvbkNsb3NlPzogKCkgPT4gdm9pZFxuICBjbGFzc05hbWU/OiBzdHJpbmdcbn1cblxuY29uc3QgVGl0bGUgPSBzdHlsZWQuc3BhbmBcbiAgY29sb3I6ICR7Y29sb3IudGV4dC5wcmltYXJ5fTtcbiAgZm9udDogJHtmb250LmhlYWRpbmcuaDR9O1xuYFxuXG4vLyBUaGUgQnJhdmUgTmV3cyBmZWVkIGNvbnRyb2xzOiBhbiBvcHRpb25hbCBmZWVkLWxpc3QgbWVudSBwbHVzIGN1c3RvbWl6ZSBhbmRcbi8vIHJlZnJlc2ggYnV0dG9ucy4gU2hhcmVkIGJ5IHRoZSBmZWVkIHBhZ2UgYW5kIHRoZSBzaWRlIHBhbmVsIHNvIGJvdGggZXhwb3NlXG4vLyB0aGUgc2FtZSBhY3Rpb25zOyBlYWNoIHN1cmZhY2Ugc3VwcGxpZXMgaXRzIG93biBwb3NpdGlvbmluZyBjb250YWluZXIuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGZWVkQ29udHJvbHMoe1xuICBvbkN1c3RvbWl6ZSxcbiAgc2hvd01lbnUsXG4gIHRpdGxlLFxuICBvbkNsb3NlLFxuICBjbGFzc05hbWUsXG59OiBQcm9wcykge1xuICBjb25zdCB7IGZlZWRWMiwgcmVmcmVzaEZlZWRWMiB9ID0gdXNlQnJhdmVOZXdzKClcbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgIHtzaG93TWVudSAmJiAoXG4gICAgICAgIDxSZWFjdC5TdXNwZW5zZSBmYWxsYmFjaz17bnVsbH0+XG4gICAgICAgICAgPFNpZGViYXJNZW51IC8+XG4gICAgICAgIDwvUmVhY3QuU3VzcGVuc2U+XG4gICAgICApfVxuICAgICAge3RpdGxlICYmIDxUaXRsZT57dGl0bGV9PC9UaXRsZT59XG4gICAgICA8UmlnaHRTaWRlPlxuICAgICAgICA8U2V0dGluZ3NCdXR0b25cbiAgICAgICAgICBvbkNsaWNrPXtvbkN1c3RvbWl6ZX1cbiAgICAgICAgICB0aXRsZT17Z2V0TG9jYWxlKFMuQlJBVkVfTkVXU19DVVNUT01JWkVfRkVFRCl9XG4gICAgICAgID5cbiAgICAgICAgICA8SWNvbiBuYW1lPSdzZXR0aW5ncycgLz5cbiAgICAgICAgPC9TZXR0aW5nc0J1dHRvbj5cbiAgICAgICAgPFNldHRpbmdzQnV0dG9uXG4gICAgICAgICAgaXNMb2FkaW5nPXshZmVlZFYyfVxuICAgICAgICAgIHRpdGxlPXtnZXRMb2NhbGUoUy5CUkFWRV9ORVdTX1JFRlJFU0hfRkVFRCl9XG4gICAgICAgICAgb25DbGljaz17KCkgPT4gcmVmcmVzaEZlZWRWMigpfVxuICAgICAgICA+XG4gICAgICAgICAgPEljb24gbmFtZT0ncmVmcmVzaCcgLz5cbiAgICAgICAgPC9TZXR0aW5nc0J1dHRvbj5cbiAgICAgICAge29uQ2xvc2UgJiYgKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8RGl2aWRlciAvPlxuICAgICAgICAgICAgPFNldHRpbmdzQnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e29uQ2xvc2V9XG4gICAgICAgICAgICAgIHRpdGxlPXtnZXRMb2NhbGUoUy5CUkFWRV9ORVdTX0NMT1NFKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEljb24gbmFtZT0nY2xvc2UnIC8+XG4gICAgICAgICAgICA8L1NldHRpbmdzQnV0dG9uPlxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgPC9SaWdodFNpZGU+XG4gICAgPC9Db250YWluZXI+XG4gIClcbn1cbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMyBUaGUgQnJhdmUgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbi8vIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXMgZmlsZSxcbi8vIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwczovL21vemlsbGEub3JnL01QTC8yLjAvLlxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgc3R5bGVkLmRpdmBcbiAgLS1ibi10ZXh0LWJhc2U6IDI1NSwgMjU1LCAyNTU7XG4gIC0tYm4tZ2xhc3MtY29udGFpbmVyOiByZ2JhKDI1NSwyNTUsMjU1LDAuMDUpO1xuICAtLWJuLWdsYXNzLTEwOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gIC0tYm4tZ2xhc3MtMjU6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7XG4gIC0tYm4tZ2xhc3MtNTA6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgLS1ibi1nbGFzcy03MDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xuICAtLWJuLWdsYXNzLTEwMDogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcbmBcbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMyBUaGUgQnJhdmUgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbi8vIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXMgZmlsZSxcbi8vIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwczovL21vemlsbGEub3JnL01QTC8yLjAvLlxuaW1wb3J0IEZsZXggZnJvbSAnJHdlYi1jb21tb24vRmxleCdcbmltcG9ydCB7IGdldExvY2FsZSB9IGZyb20gJyR3ZWItY29tbW9uL2xvY2FsZSdcbmltcG9ydCB7IHJhZGl1cywgc3BhY2luZyB9IGZyb20gJ0BicmF2ZS9sZW8vdG9rZW5zL2Nzcy92YXJpYWJsZXMnXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgRmVlZCBmcm9tICcuL0ZlZWQnXG5pbXBvcnQgRmVlZENvbnRyb2xzIGZyb20gJy4vRmVlZENvbnRyb2xzJ1xuaW1wb3J0IE5ld3NCdXR0b24gZnJvbSAnLi9OZXdzQnV0dG9uJ1xuaW1wb3J0IFZhcmlhYmxlcyBmcm9tICcuL1ZhcmlhYmxlcydcbmltcG9ydCB7IHVzZUJyYXZlTmV3cyB9IGZyb20gJy4vc2hhcmVkL0NvbnRleHQnXG5pbXBvcnQgdXNlTWVkaWFRdWVyeSBmcm9tICckd2ViLWNvbW1vbi91c2VNZWRpYVF1ZXJ5J1xuXG5jb25zdCBGZWVkTmF2aWdhdGlvbiA9IFJlYWN0LmxhenkoKCkgPT4gaW1wb3J0KCcuL0ZlZWROYXZpZ2F0aW9uJykpXG5cbmNvbnN0IGlzU21hbGxRdWVyeSA9ICcobWF4LXdpZHRoOiAxMDI0cHgpJ1xuXG5jb25zdCBSb290ID0gc3R5bGVkKFZhcmlhYmxlcylgXG4gIC0tYm4tdG9wLWJhci1oZWlnaHQ6IDc4cHg7XG5cbiAgcGFkZGluZy10b3A6ICR7c3BhY2luZy54bH07XG5cbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgbWF4LWNvbnRlbnQgMWZyO1xuICBnYXA6ICR7c3BhY2luZ1snM1hsJ119O1xuYFxuXG5jb25zdCBTaWRlYmFyQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAke3NwYWNpbmcueGx9O1xuYFxuXG5jb25zdCBCdXR0b25zQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206ICR7c3BhY2luZ1snNVhsJ119O1xuICByaWdodDogJHtzcGFjaW5nWyc1WGwnXX07XG4gIGJvcmRlci1yYWRpdXM6ICR7cmFkaXVzLm19O1xuICBwYWRkaW5nOiAke3NwYWNpbmcubX07XG5cbiAgYmFja2dyb3VuZDogdmFyKC0tYm4tZ2xhc3MtY29udGFpbmVyKTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDY0cHgpO1xuXG4gIEBtZWRpYSAke2lzU21hbGxRdWVyeX0ge1xuICAgIGhlaWdodDogdmFyKC0tYm4tdG9wLWJhci1oZWlnaHQpO1xuXG4gICAgaW5zZXQ6IDA7XG4gICAgYm90dG9tOiB1bnNldDtcbiAgICBwYWRkaW5nOiAke3NwYWNpbmdbJzJYbCddfSAke3NwYWNpbmcueGx9O1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gIH1cbmBcblxuY29uc3QgTG9hZE5ld0NvbnRlbnRCdXR0b24gPSBzdHlsZWQoTmV3c0J1dHRvbilgXG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMTtcbiAgdG9wOiAke3NwYWNpbmdbJzNYbCddfTtcblxuICBmbGV4LWdyb3c6IDA7XG5cbiAgQG1lZGlhICR7aXNTbWFsbFF1ZXJ5fSB7XG4gICAgdG9wOiBjYWxjKHZhcigtLWJuLXRvcC1iYXItaGVpZ2h0KSArIHZhcigtLWxlby1zcGFjaW5nLW0pKTtcbiAgfVxuYFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGZWVkVjIoKSB7XG4gIGNvbnN0IGlzU21hbGwgPSB1c2VNZWRpYVF1ZXJ5KGlzU21hbGxRdWVyeSlcblxuICBjb25zdCB7IGZlZWRWMiwgc2V0Q3VzdG9taXplUGFnZSwgcmVmcmVzaEZlZWRWMiwgZmVlZFYyVXBkYXRlc0F2YWlsYWJsZSwgcmVwb3J0Vmlld0NvdW50LCByZXBvcnRTZXNzaW9uU3RhcnQgfSA9IHVzZUJyYXZlTmV3cygpXG4gIGNvbnN0IHJlZiA9IFJlYWN0LnVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbClcblxuICAvLyBOb3RlOiBXaGVuZXZlciB0aGUgZmVlZCBpcyB1cGRhdGVkLCBpZiB3ZSdyZSB2aWV3aW5nIHRoZSBmZWVkLCBzY3JvbGwgdG9cbiAgLy8gdGhlIHRvcC5cbiAgUmVhY3QudXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICBpZiAocmVmLmN1cnJlbnQpIHtcbiAgICAgIGNvbnN0IHJlY3QgPSByZWYuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgaWYgKHJlY3QudG9wIDwgd2luZG93LmlubmVySGVpZ2h0IC8gMikge1xuICAgICAgICByZWYuY3VycmVudC5zY3JvbGxJbnRvVmlldygpXG4gICAgICB9XG4gICAgfVxuICB9LCBbZmVlZFYyPy5pdGVtc10pXG5cbiAgcmV0dXJuIDxSb290IHJlZj17cmVmIGFzIGFueX0gZGF0YS10aGVtZT1cImRhcmtcIj5cbiAgICA8U2lkZWJhckNvbnRhaW5lciBjbGFzc05hbWU9J2JyYXZlLW5ld3Mtc2lkZWJhcic+XG4gICAgICB7IWlzU21hbGwgJiYgPFJlYWN0LlN1c3BlbnNlIGZhbGxiYWNrPXtudWxsfT48RmVlZE5hdmlnYXRpb24gLz48L1JlYWN0LlN1c3BlbnNlPn1cbiAgICA8L1NpZGViYXJDb250YWluZXI+XG4gICAgPEZsZXggYWxpZ249J2NlbnRlcicgZGlyZWN0aW9uPSdjb2x1bW4nIGdhcD17c3BhY2luZy5sfT5cbiAgICAgIHtmZWVkVjJVcGRhdGVzQXZhaWxhYmxlICYmXG4gICAgICAgIDxMb2FkTmV3Q29udGVudEJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT0nYnJhdmUtbmV3cy1sb2FkLW5ldy1jb250ZW50LWJ1dHRvbidcbiAgICAgICAgICBvbkNsaWNrPXtyZWZyZXNoRmVlZFYyfVxuICAgICAgICA+XG4gICAgICAgICAge2dldExvY2FsZShTLkJSQVZFX05FV1NfTkVXX0NPTlRFTlRfQVZBSUxBQkxFKX1cbiAgICAgICAgPC9Mb2FkTmV3Q29udGVudEJ1dHRvbj59XG4gICAgICA8RmVlZCBmZWVkPXtmZWVkVjJ9IG9uVmlld0NvdW50Q2hhbmdlPXtyZXBvcnRWaWV3Q291bnR9IG9uU2Vzc2lvblN0YXJ0PXtyZXBvcnRTZXNzaW9uU3RhcnR9IC8+XG4gICAgPC9GbGV4PlxuXG4gICAgPEJ1dHRvbnNDb250YWluZXIgY2xhc3NOYW1lPSdicmF2ZS1uZXdzLWZlZWQtY29udHJvbHMnPlxuICAgICAgPEZlZWRDb250cm9sc1xuICAgICAgICBvbkN1c3RvbWl6ZT17KCkgPT4gc2V0Q3VzdG9taXplUGFnZSgnbmV3cycpfVxuICAgICAgICBzaG93TWVudT17aXNTbWFsbH1cbiAgICAgIC8+XG4gICAgPC9CdXR0b25zQ29udGFpbmVyPlxuICA8L1Jvb3Q+XG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjIgVGhlIEJyYXZlIEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4vLyBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIGZpbGUsXG4vLyBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cHM6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy5cblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgRGlhbG9nIGZyb20gJ0BicmF2ZS9sZW8vcmVhY3QvZGlhbG9nJ1xuaW1wb3J0IHsgY29sb3IgfSBmcm9tICdAYnJhdmUvbGVvL3Rva2Vucy9jc3MvdmFyaWFibGVzJ1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCB7IHVzZUJyYXZlTmV3cyB9IGZyb20gJy4uL3NoYXJlZC9Db250ZXh0J1xuXG5pbXBvcnQgTG9hZGluZyBmcm9tICcuL0xvYWRpbmcnXG5cbmNvbnN0IENvbmZpZ3VyZSA9IFJlYWN0LmxhenkoKCkgPT4gaW1wb3J0KCcuL0NvbmZpZ3VyZScpKVxuXG5jb25zdCBTdHlsZWREaWFsb2cgPSBzdHlsZWQoRGlhbG9nKWBcbiAgLS1sZW8tZGlhbG9nLXdpZHRoOiA4NjBweDtcbiAgLS1sZW8tZGlhbG9nLXBhZGRpbmc6IDA7XG4gIC0tbGVvLWRpYWxvZy1iYWNrZ3JvdW5kOiAke2NvbG9yLmNvbnRhaW5lci5iYWNrZ3JvdW5kfTtcbmBcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQnJhdmVOZXdzTW9kYWwoKSB7XG4gIGNvbnN0IHsgY3VzdG9taXplUGFnZSwgc2V0Q3VzdG9taXplUGFnZSB9ID0gdXNlQnJhdmVOZXdzKClcbiAgY29uc3Qgc2hvdWxkUmVuZGVyID0gISFjdXN0b21pemVQYWdlXG5cbiAgaWYgKCFzaG91bGRSZW5kZXIpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8U3R5bGVkRGlhbG9nXG4gICAgICBpc09wZW5cbiAgICAgIHNob3dDbG9zZVxuICAgICAgYmFja2Ryb3BDbGlja0Nsb3Nlcz17ZmFsc2V9XG4gICAgICBvbkNsb3NlPXsoKSA9PiBzZXRDdXN0b21pemVQYWdlKG51bGwpfVxuICAgID5cbiAgICAgIDxSZWFjdC5TdXNwZW5zZSBmYWxsYmFjaz17PExvYWRpbmcgZmlsbCAvPn0+XG4gICAgICAgIDxDb25maWd1cmUgLz5cbiAgICAgIDwvUmVhY3QuU3VzcGVuc2U+XG4gICAgPC9TdHlsZWREaWFsb2c+XG4gIClcbn1cbiIsIi8qIENvcHlyaWdodCAoYykgMjAyNSBUaGUgQnJhdmUgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXMgZmlsZSxcbiAqIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwczovL21vemlsbGEub3JnL01QTC8yLjAvLiAqL1xuXG5pbXBvcnQgeyBzY29wZWQgfSBmcm9tICckd2ViLWNvbW1vbi9zY29wZWRfY3NzJ1xuXG5leHBvcnQgY29uc3Qgc3R5bGUgPSBzY29wZWQuY3NzYFxuICAmIHtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW46IDAgMzBweCAzMHB4O1xuICB9XG5gXG5cbnN0eWxlLnBhc3N0aHJvdWdoLmNzc2BcbiAgQGtleWZyYW1lcyBuZXdzLWNvbnRyb2wtZmFkZSB7XG4gICAgZnJvbSB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIH1cbiAgICA4MCUge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgfVxuICAgIHRvIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgIH1cbiAgfVxuXG4gIC5icmF2ZS1uZXdzLWZlZWQtY29udHJvbHMsIC5icmF2ZS1uZXdzLWxvYWQtbmV3LWNvbnRlbnQtYnV0dG9uIHtcbiAgICBhbmltYXRpb246IGxpbmVhciBuZXdzLWNvbnRyb2wtZmFkZSBib3RoO1xuICAgIGFuaW1hdGlvbi10aW1lbGluZTogc2Nyb2xsKCk7XG4gICAgYW5pbWF0aW9uLXJhbmdlOiAwcHggMTAwdmg7XG4gIH1cbmBcbiIsIi8qIENvcHlyaWdodCAoYykgMjAyNSBUaGUgQnJhdmUgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXMgZmlsZSxcbiAqIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwczovL21vemlsbGEub3JnL01QTC8yLjAvLiAqL1xuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHsgdXNlQnJhdmVOZXdzIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tcG9uZW50cy9icmF2ZV9uZXdzL2Jyb3dzZXIvcmVzb3VyY2VzL3NoYXJlZC9Db250ZXh0J1xuaW1wb3J0IE9wdEluIGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvYnJhdmVfbmV3cy9icm93c2VyL3Jlc291cmNlcy9PcHRJbidcbmltcG9ydCBOZXdzUGFnZSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21wb25lbnRzL2JyYXZlX25ld3MvYnJvd3Nlci9yZXNvdXJjZXMvUGFnZSdcbmltcG9ydCBDdXN0b21pemVNb2RhbCBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21wb25lbnRzL2JyYXZlX25ld3MvYnJvd3Nlci9yZXNvdXJjZXMvY3VzdG9taXplL01vZGFsJ1xuaW1wb3J0IHsgdXNlTmV3VGFiU3RhdGUgfSBmcm9tICcuLi8uLi9jb250ZXh0L25ld190YWJfY29udGV4dCdcblxuaW1wb3J0IHsgc3R5bGUgfSBmcm9tICcuL25ld3NfZmVlZC5zdHlsZSdcblxuZXhwb3J0IGZ1bmN0aW9uIE5ld3NGZWVkKCkge1xuICBjb25zdCBicmF2ZU5ld3MgPSB1c2VCcmF2ZU5ld3MoKVxuICBjb25zdCBuZXdzRmVhdHVyZUVuYWJsZWQgPSB1c2VOZXdUYWJTdGF0ZSgocykgPT4gcy5uZXdzRmVhdHVyZUVuYWJsZWQpXG4gIGNvbnN0IFtzaG91bGRSZW5kZXJOZXdzLCBzZXRTaG91bGRSZW5kZXJOZXdzXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0VGltZW91dCgoKSA9PiBzZXRTaG91bGRSZW5kZXJOZXdzKHRydWUpLCAxMDAwKVxuICB9LCBbXSlcblxuICBpZiAoIW5ld3NGZWF0dXJlRW5hYmxlZCkge1xuICAgIHJldHVybiBudWxsXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7YnJhdmVOZXdzLmlzU2hvd09uTlRQUHJlZkVuYWJsZWQgJiYgKFxuICAgICAgICA8ZGl2IGRhdGEtY3NzLXNjb3BlPXtzdHlsZS5zY29wZX0+XG4gICAgICAgICAge2JyYXZlTmV3cy5pc09wdEluUHJlZkVuYWJsZWQgPyAoXG4gICAgICAgICAgICBzaG91bGRSZW5kZXJOZXdzICYmIDxOZXdzUGFnZSAvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8T3B0SW4gLz5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgICB7YnJhdmVOZXdzLmN1c3RvbWl6ZVBhZ2UgJiYgPEN1c3RvbWl6ZU1vZGFsIC8+fVxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5ld3NGZWVkXG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjQgVGhlIEJyYXZlIEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4vLyBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIGZpbGUsXG4vLyBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cHM6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy5cblxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQGJyYXZlL2xlby9yZWFjdC9idXR0b25cIjtcbmltcG9ydCB7IHJhZGl1cywgc3BhY2luZyB9IGZyb20gXCJAYnJhdmUvbGVvL3Rva2Vucy9jc3MvdmFyaWFibGVzXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5cbmNvbnN0IFNldHRpbmdzQnV0dG9uID0gc3R5bGVkKEJ1dHRvbikuYXR0cnMoe1xuICBmYWI6IHRydWUsXG4gIGtpbmQ6ICdwbGFpbi1mYWludCdcbn0pYFxuICAtLWxlby1idXR0b24tY29sb3I6IHZhcigtLWxlby1jb2xvci1pY29uLWRlZmF1bHQpO1xuICAtLWxlby1idXR0b24tcmFkaXVzOiAke3JhZGl1cy5zfTtcbiAgLS1sZW8tYnV0dG9uLXBhZGRpbmc6ICR7c3BhY2luZy5zfTtcblxuICBmbGV4OiAwO1xuYFxuXG5leHBvcnQgZGVmYXVsdCBTZXR0aW5nc0J1dHRvblxuIiwiLyogQ29weXJpZ2h0IChjKSAyMDI2IFRoZSBCcmF2ZSBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBmaWxlLFxuICogWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHBzOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uICovXG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb2dyZXNzUmluZyBmcm9tICdAYnJhdmUvbGVvL3JlYWN0L3Byb2dyZXNzUmluZydcbmltcG9ydCB7IHNwYWNpbmcgfSBmcm9tICdAYnJhdmUvbGVvL3Rva2Vucy9jc3MvdmFyaWFibGVzJ1xuaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgLy8gV2hlbiB0cnVlLCBmaWxsIGEgbGFyZ2VyIGFyZWEgc3VpdGFibGUgZm9yIHRoZSBkaWFsb2cgU3VzcGVuc2UgZmFsbGJhY2suXG4gIGZpbGw/OiBib29sZWFuXG59XG5cbmNvbnN0IExvYWRpbmdDb250YWluZXIgPSBzdHlsZWQuZGl2PHsgZmlsbD86IGJvb2xlYW4gfT5gXG4gIC0tbGVvLXByb2dyZXNzcmluZy1zaXplOiAke3NwYWNpbmdbJzRYbCddfTtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogJHtzcGFjaW5nWyc0WGwnXX07XG4gIG1pbi1oZWlnaHQ6IDEyMHB4O1xuXG4gICR7cCA9PiBwLmZpbGwgJiYgY3NzYFxuICAgIC0tbGVvLXByb2dyZXNzcmluZy1zaXplOiA1MHB4O1xuICAgIG1pbi1oZWlnaHQ6IDQwMHB4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgYH1cbmBcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9hZGluZyhwcm9wczogUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8TG9hZGluZ0NvbnRhaW5lciBmaWxsPXtwcm9wcy5maWxsfT5cbiAgICAgIDxQcm9ncmVzc1JpbmcgLz5cbiAgICA8L0xvYWRpbmdDb250YWluZXI+XG4gIClcbn1cbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMyBUaGUgQnJhdmUgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbi8vIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXMgZmlsZSxcbi8vIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwczovL21vemlsbGEub3JnL01QTC8yLjAvLlxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0QWxsb3dlZFNjaGVtZXMgPSBbJ2h0dHA6JywgJ2h0dHBzOiddXG5cbmV4cG9ydCB0eXBlIFNlY3VyZUxpbmtQcm9wcyA9IFJlYWN0LkRldGFpbGVkSFRNTFByb3BzPFJlYWN0LkFuY2hvckhUTUxBdHRyaWJ1dGVzPEhUTUxBbmNob3JFbGVtZW50PiwgSFRNTEFuY2hvckVsZW1lbnQ+ICYge1xuICBhbGxvd2VkU2NoZW1lcz86IHN0cmluZ1tdXG59XG5cbmV4cG9ydCBjb25zdCB2YWxpZGF0ZVNjaGVtZSA9IChocmVmOiBzdHJpbmcgfCB1bmRlZmluZWQsIGFsbG93ZWRTY2hlbWVzOiBzdHJpbmdbXSA9IGRlZmF1bHRBbGxvd2VkU2NoZW1lcykgPT4ge1xuICAvLyBTcGVjaWFsIGNhc2UgdGhlIGVtcHR5IHVybCAtIGl0IHNob3VsZG4ndCBjcmFzaCBhbnl0aGluZ1xuICBpZiAoIWhyZWYpIHJldHVyblxuXG4gIGNvbnN0IHVybCA9IG5ldyBVUkwoaHJlZilcbiAgaWYgKCFhbGxvd2VkU2NoZW1lcy5pbmNsdWRlcyh1cmwucHJvdG9jb2wpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBVbnN1cHBvcnRlZCBzY2hlbWUgJHt1cmwucHJvdG9jb2x9IG9uIHVybCAke2hyZWZ9YClcbiAgfVxufVxuXG4vKipcbiAqIEVuZGVhdm9ycyB0byBkbyB0aGUgcmlnaHQgdGhpbmcgd2hlbiB0cmlnZ2VyaW5nIGEgbGluayB2aWEgYSBtb3VzZSBjbGljay5cbiAqIExlZnQgY2xpY2sgc2hvdWxkIG9wZW4gdGhlIGxpbmsgaW4gdGhlIGN1cnJlbnQgdGFiLCB3aGlsZVxuICogQ29udHJvbC9Db21tYW5kL01pZGRsZSBjbGljayBzaG91bGQgb3BlbiB0aGUgbGluayBpbiBhIG5ldyB0YWIuXG4gKiBAcGFyYW0gaHJlZiBUaGUgaHJlZiB0byBvcGVuXG4gKiBAcGFyYW0gZSBUaGUgbW91c2UgZXZlbnRcbiAqL1xuZXhwb3J0IGNvbnN0IGhhbmRsZU9wZW5VUkxDbGljayA9IChocmVmOiBzdHJpbmcgfCB1bmRlZmluZWQsIGU6IHsgY3RybEtleTogYm9vbGVhbiwgbWV0YUtleTogYm9vbGVhbiwgYnV0dG9ucz86IG51bWJlciB9KSA9PiB7XG4gIHZhbGlkYXRlU2NoZW1lKGhyZWYpXG5cbiAgLy8gQ29udHJvbCBjbGljaywgY29tbWFuZCBjbGljayBvciBtaWRkbGUgY2xpY2tcbiAgaWYgKGUuY3RybEtleSB8fCBlLm1ldGFLZXkgfHwgKGUuYnV0dG9ucyA/PyAwKSAmIDQpIHtcbiAgICB3aW5kb3cub3BlbihocmVmLCAnX2JsYW5rJywgJ25vb3BlbmVyIG5vcmVmZXJyZXInKVxuICB9IGVsc2Uge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gaHJlZiFcbiAgfVxufVxuXG4vKipcbiAqIEEgY3VycmllZCB2ZXJzaW9uIG9mIGhhbmRsZU9wZW5VUkxDbGljaywgZm9yIHVzZSBpbiBSZWFjdCBldmVudCBoYW5kbGVycy5cbiAqIEBwYXJhbSBocmVmIFRoZSBocmVmIHRoZSBjbGljayBoYW5kbGVyIHNob3VsZCBvcGVuXG4gKiBAcmV0dXJucyBBIGNsaWNrIGV2ZW50IGhhbmRsZXJcbiAqL1xuZXhwb3J0IGNvbnN0IGxpbmtDbGlja0hhbmRsZXIgPSAoaHJlZjogc3RyaW5nIHwgdW5kZWZpbmVkKSA9PiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4gaGFuZGxlT3BlblVSTENsaWNrKGhyZWYsIGUpXG5cbi8qKlxuICogSWRlbnRpY2FsIHRvIHRoZSBgYWAgZWxlbWVudCwgZXhjZXB0IHRoYXQgaXQgdmFsaWRhdGVzIHRoZSBIUkVGIHBvaW50c1xuICogdG8gYW4gYWxsb3dlZCBzY2hlbWUuIEJ5IGRlZmF1bHQsIGFsbG93ZWQgc2NoZW1lcyBhcmUgaHR0cDogb3IgaHR0cHM6LFxuICogYnV0IHRoaXMgY2FuIGJlIG92ZXJyaWRkZW4uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlY3VyZUxpbmsoeyBocmVmLCBhbGxvd2VkU2NoZW1lcywgLi4ucmVzdCB9OiBTZWN1cmVMaW5rUHJvcHMpIHtcbiAgdmFsaWRhdGVTY2hlbWUoaHJlZiwgYWxsb3dlZFNjaGVtZXMgPz8gZGVmYXVsdEFsbG93ZWRTY2hlbWVzKVxuICByZXR1cm4gPGEgaHJlZj17aHJlZn0gey4uLnJlc3R9IC8+XG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjMgVGhlIEJyYXZlIEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4vLyBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIGZpbGUsXG4vLyBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cHM6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy5cblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29sb3IsIGVmZmVjdCwgZm9udCwgcmFkaXVzLCBzcGFjaW5nIH0gZnJvbSAnQGJyYXZlL2xlby90b2tlbnMvY3NzL3ZhcmlhYmxlcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IFNlY3VyZUxpbmssIHsgU2VjdXJlTGlua1Byb3BzLCBkZWZhdWx0QWxsb3dlZFNjaGVtZXMsIHZhbGlkYXRlU2NoZW1lIH0gZnJvbSAnJHdlYi1jb21tb24vU2VjdXJlTGluayc7XG5pbXBvcnQgeyB1c2VCcmF2ZU5ld3MgfSBmcm9tICcuLi9zaGFyZWQvQ29udGV4dCc7XG5cbmV4cG9ydCBjb25zdCBIZWFkZXIgPSBzdHlsZWQuaDJgXG4gIG1hcmdpbjogMDtcblxuICBmb250OiAke2ZvbnQuaGVhZGluZy5oMn07XG4gIGNvbG9yOiB2YXIoLS1ibi1nbGFzcy0xMDApO1xuXG4gIC0tbGVvLWljb24tc2l6ZTogMThweDtcbmBcblxuZXhwb3J0IGNvbnN0IFRpdGxlID0gc3R5bGVkLmgzYFxuICAtLWxlby1pY29uLWNvbG9yOiAke2NvbG9yLmljb24uZGVmYXVsdH07XG5cbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICBtYXJnaW46IDA7XG5cbiAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gIGZvbnQ6ICR7Zm9udC5kZWZhdWx0LnNlbWlib2xkfTtcbiAgY29sb3I6IHZhcigtLWJuLWdsYXNzLTEwMCk7XG5cblxuICAmPiBhIHsgYWxsOiB1bnNldDsgfVxuYFxuXG5jb25zdCBCYXNlSW1nID0gc3R5bGVkLmltZ2BcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSA0MDBtcyBlYXNlLWluLW91dDtcbmBcblxudHlwZSBIaWRhYmVJbWFnZVByb3BzID0gUmVhY3QuRGV0YWlsZWRIVE1MUHJvcHM8XG4gIFJlYWN0LkltZ0hUTUxBdHRyaWJ1dGVzPEhUTUxJbWFnZUVsZW1lbnQ+LFxuICBIVE1MSW1hZ2VFbGVtZW50XG4+ICYge1xuICB0YXJnZXRIZWlnaHQ/OiBudW1iZXJcbiAgdGFyZ2V0V2lkdGg/OiBudW1iZXJcbn1cbmNvbnN0IEhpZGFibGVJbWFnZSA9ICh7XG4gIG9uRXJyb3IsXG4gIG9uTG9hZCxcbiAgdGFyZ2V0SGVpZ2h0LFxuICB0YXJnZXRXaWR0aCxcbiAgc3JjLFxuICBsb2FkaW5nLFxuICAuLi5yZXN0XG59OiBIaWRhYmVJbWFnZVByb3BzKSA9PiB7XG4gIGNvbnN0IHJlZiA9IFJlYWN0LnVzZVJlZjxIVE1MSW1hZ2VFbGVtZW50PihudWxsKVxuXG4gIGNvbnN0IHsgc2hvdWxkUmVuZGVySW1hZ2VzIH0gPSB1c2VCcmF2ZU5ld3MoKVxuICBjb25zdCBkZWxheUxvYWQgPSAhc2hvdWxkUmVuZGVySW1hZ2VzICYmIGxvYWRpbmcgPT09ICdsYXp5J1xuXG4gIGNvbnN0IGhhbmRsZUxvYWQgPSBSZWFjdC51c2VDYWxsYmFjaygoZTogUmVhY3QuVUlFdmVudDxIVE1MSW1hZ2VFbGVtZW50PikgPT4ge1xuICAgIHJlZi5jdXJyZW50IS5zdHlsZS5vcGFjaXR5ID0gJzEnXG4gICAgb25Mb2FkPy4oZSlcbiAgfSwgW29uTG9hZF0pXG5cbiAgaWYgKHNyYykge1xuICAgIHNyYyA9ICcvL2JyYXZlLWltYWdlP3VybD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHNyYyk7XG4gIH1cbiAgaWYgKHRhcmdldEhlaWdodCAmJiB0YXJnZXRXaWR0aCkge1xuICAgIGNvbnN0IHdpZHRoID0gTWF0aC5yb3VuZCh0YXJnZXRXaWR0aCAqIHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvKVxuICAgIGNvbnN0IGhlaWdodCA9IE1hdGgucm91bmQodGFyZ2V0SGVpZ2h0ICogd2luZG93LmRldmljZVBpeGVsUmF0aW8pXG4gICAgc3JjICs9IGAmdGFyZ2V0X3NpemU9JHt3aWR0aH14JHtoZWlnaHR9YFxuICB9XG5cbiAgcmV0dXJuIDxCYXNlSW1nXG4gICAgey4uLnJlc3R9XG4gICAgc3JjPXtkZWxheUxvYWQgPyB1bmRlZmluZWQgOiBzcmN9XG4gICAgbG9hZGluZz17bG9hZGluZ31cbiAgICByZWY9e3JlZiBhcyBhbnl9XG4gICAgb25Mb2FkPXtoYW5kbGVMb2FkfVxuICAvPlxufVxuXG5leHBvcnQgY29uc3QgU21hbGxJbWFnZSA9IHN0eWxlZChIaWRhYmxlSW1hZ2UpLmF0dHJzKHsgdGFyZ2V0SGVpZ2h0OiA2NCwgdGFyZ2V0V2lkdGg6IDk2IH0pYFxuICAmOm5vdChbc3JjXSkgeyBvcGFjaXR5OiAwOyB9XG5cbiAgbWluLXdpZHRoOiA5NnB4O1xuICB3aWR0aDogOTZweDtcblxuICBoZWlnaHQ6IDY0cHg7XG5cbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIG9iamVjdC1wb3NpdGlvbjogdG9wO1xuXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbmBcblxuZXhwb3J0IGNvbnN0IExhcmdlSW1hZ2UgPSBzdHlsZWQoSGlkYWJsZUltYWdlKS5hdHRycyh7IHRhcmdldEhlaWdodDogMjY5LCB0YXJnZXRXaWR0aDogNTA4IH0pYFxuICAmOm5vdChbc3JjXSkgeyBvcGFjaXR5OiAwOyB9XG5cbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjY5cHg7XG5cbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIG9iamVjdC1wb3NpdGlvbjogdG9wO1xuXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbmBcblxuZXhwb3J0IGRlZmF1bHQgc3R5bGVkLmRpdmBcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1ibi1nbGFzcy1jb250YWluZXIpO1xuICBib3JkZXItcmFkaXVzOiAke3JhZGl1cy54bH07XG4gIGNvbG9yOiB2YXIoLS1ibi1nbGFzcy0xMDApO1xuICBwYWRkaW5nOiAke3NwYWNpbmcueGx9O1xuXG4gICY6aGFzKCR7VGl0bGV9IGE6Zm9jdXMtdmlzaWJsZSkge1xuICAgIGJveC1zaGFkb3c6ICR7ZWZmZWN0LmZvY3VzU3RhdGV9O1xuICB9XG5cbiAgJHtwID0+IHAub25DbGljayAmJiAnY3Vyc29yOiBwb2ludGVyJ31cbmBcblxuZXhwb3J0IGNvbnN0IGJyYXZlTmV3c0NhcmRDbGlja0hhbmRsZXIgPSAoaHJlZjogc3RyaW5nIHwgdW5kZWZpbmVkLCBvcGVuQXJ0aWNsZXNJbk5ld1RhYjogYm9vbGVhbiwgYWxsb3dlZFNjaGVtZXM6IHN0cmluZ1tdID0gZGVmYXVsdEFsbG93ZWRTY2hlbWVzKSA9PiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICB2YWxpZGF0ZVNjaGVtZShocmVmLCBhbGxvd2VkU2NoZW1lcylcblxuICBpZiAob3BlbkFydGljbGVzSW5OZXdUYWIgfHwgZS5jdHJsS2V5IHx8IGUubWV0YUtleSB8fCBlLmJ1dHRvbnMgJiA0KSB7XG4gICAgd2luZG93Lm9wZW4oaHJlZiwgJ19ibGFuaycsICdub29wZW5lciBub3JlZmVycmVyJylcbiAgfSBlbHNlIHtcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGhyZWYhXG4gIH1cbn1cblxuaW50ZXJmYWNlIEJyYXZlTmV3c0xpbmtQcm9wcyBleHRlbmRzIFNlY3VyZUxpbmtQcm9wcyB7XG4gIGZlZWREZXB0aD86IG51bWJlclxufVxuXG5leHBvcnQgZnVuY3Rpb24gQnJhdmVOZXdzTGluayh7IGZlZWREZXB0aCwgLi4ucmVzdCB9OiBCcmF2ZU5ld3NMaW5rUHJvcHMpIHtcbiAgY29uc3QgcHJvcHMgPSB7IGZlZWRkZXB0aDogZmVlZERlcHRoLCAuLi5yZXN0IH1cbiAgY29uc3QgeyBvcGVuQXJ0aWNsZXNJbk5ld1RhYiwgcmVwb3J0VmlzaXQgfSA9IHVzZUJyYXZlTmV3cygpXG4gIHJldHVybiA8U2VjdXJlTGlua1xuICAgIHsuLi5wcm9wc31cbiAgICBvbkNsaWNrPXtlID0+IHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgIGlmIChmZWVkRGVwdGggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXBvcnRWaXNpdChmZWVkRGVwdGgpO1xuICAgICAgfVxuICAgIH19XG4gICAgdGFyZ2V0PXtvcGVuQXJ0aWNsZXNJbk5ld1RhYiA/ICdfYmxhbmsnIDogdW5kZWZpbmVkfVxuICAvPlxufVxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIyIFRoZSBCcmF2ZSBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuLy8gTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBmaWxlLFxuLy8gWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHBzOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uXG5cbmltcG9ydCBCdXR0b24sIHsgQnV0dG9uUHJvcHMgfSBmcm9tICdAYnJhdmUvbGVvL3JlYWN0L2J1dHRvbidcbmltcG9ydCBJY29uIGZyb20gJ0BicmF2ZS9sZW8vcmVhY3QvaWNvbidcbmltcG9ydCB7IGNvbG9yIH0gZnJvbSAnQGJyYXZlL2xlby90b2tlbnMvY3NzL3ZhcmlhYmxlcydcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuY29uc3QgU3R5bGVkQnV0dG9uID0gc3R5bGVkKEJ1dHRvbilgXG4gIC0tbGVvLWJ1dHRvbi1jb2xvcjogY29sb3ItbWl4KGluIHNyZ2IsICR7Y29sb3IubmV1dHJhbFszMF19IDgwJSwgdHJhbnNwYXJlbnQpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNjRweCk7XG5gXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvbGxvd0J1dHRvbihwcm9wczogQnV0dG9uUHJvcHM8dW5kZWZpbmVkLCBib29sZWFuLCBib29sZWFuPiAmIHsgZm9sbG93aW5nOiBib29sZWFuIH0pIHtcbiAgY29uc3QgeyBmb2xsb3dpbmcsIC4uLnJlc3QgfSA9IHByb3BzXG4gIHJldHVybiA8U3R5bGVkQnV0dG9uIHsuLi5yZXN0fSBmYWIgc2l6ZT0ndGlueSc+XG4gICAgPEljb24gbmFtZT17Zm9sbG93aW5nID8gJ21pbnVzJyA6ICdwbHVzLWFkZCd9IC8+XG4gIDwvU3R5bGVkQnV0dG9uPlxufVxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIyIFRoZSBCcmF2ZSBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuLy8gTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBmaWxlLFxuLy8gWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHBzOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uXG5cbi8vIFVzZWQgdG8gZ2V0IGEgcmFuZG9tIGJ1dCBkZXRlcm1pbmlzdGljIGRpc3RyaWJ1dGlvbiBvZiBjb2xvcnMuXG5jb25zdCBzdHJpbmdIYXNoQ29kZSA9IChzdHI6IHN0cmluZykgPT4ge1xuICBsZXQgaGFzaCA9IDBcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyArK2kpIGhhc2ggPSBNYXRoLmltdWwoMzEsIGhhc2gpICsgc3RyLmNoYXJDb2RlQXQoaSlcbiAgcmV0dXJuIChoYXNoIHwgMCkgKyAyMTQ3NDgzNjQ3ICsgMVxufVxuXG5leHBvcnQgY29uc3QgY2FyZENvbG9ycyA9IFtcbiAgJyNGRjlBQTInLFxuICAnI0ZGQjdCMicsXG4gICcjRkZEQUMxJyxcbiAgJyNFMkYwQ0InLFxuICAnI0I1RUFENycsXG4gICcjQzdDRUVBJ1xuXVxuXG5leHBvcnQgY29uc3QgZ2V0Q2FyZENvbG9yID0gKGtleTogc3RyaW5nIHwgbnVtYmVyKSA9PiB7XG4gIGNvbnN0IGhhc2ggPSB0eXBlb2Yga2V5ID09PSAnc3RyaW5nJyA/IHN0cmluZ0hhc2hDb2RlKGtleSkgOiBrZXlcbiAgcmV0dXJuIGNhcmRDb2xvcnNbaGFzaCAlIGNhcmRDb2xvcnMubGVuZ3RoXVxufVxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIyIFRoZSBCcmF2ZSBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuLy8gTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBmaWxlLFxuLy8gWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHBzOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uXG5cbmltcG9ydCBGbGV4IGZyb20gJyR3ZWItY29tbW9uL0ZsZXgnXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgY29sb3IsIGVmZmVjdCwgZm9udCwgcmFkaXVzLCBzcGFjaW5nIH0gZnJvbSAnQGJyYXZlL2xlby90b2tlbnMvY3NzL3ZhcmlhYmxlcydcbmltcG9ydCB7IGdldENhcmRDb2xvciB9IGZyb20gJy4uL2N1c3RvbWl6ZS9jb2xvcnMnXG5pbXBvcnQgeyB1c2VQdWJsaXNoZXIsIHVzZVB1Ymxpc2hlckZvbGxvd2VkIH0gZnJvbSAnLi9Db250ZXh0J1xuaW1wb3J0IEZvbGxvd0J1dHRvbiBmcm9tICcuL0ZvbGxvd0J1dHRvbidcbmltcG9ydCBnZXRCcmF2ZU5ld3NDb250cm9sbGVyIGZyb20gJy4vYXBpJ1xuXG5pbnRlcmZhY2UgQ2FyZFByb3BzIHtcbiAgYmFja2dyb3VuZENvbG9yPzogc3RyaW5nXG59XG5cbmNvbnN0IFN0eWxlZEZvbGxvd0J1dHRvbiA9IHN0eWxlZChGb2xsb3dCdXR0b24pYFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAke3NwYWNpbmcubX07XG4gIHRvcDogJHtzcGFjaW5nLm19O1xuYFxuXG5jb25zdCBDYXJkID0gc3R5bGVkKCdkaXYnKS5hdHRyczxDYXJkUHJvcHM+KHByb3BzID0+ICh7XG4gIHN0eWxlOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiBwcm9wcy5iYWNrZ3JvdW5kQ29sb3JcbiAgfVxufSkpIDxDYXJkUHJvcHM+YFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogODBweDtcbiAgYm9yZGVyLXJhZGl1czogJHtyYWRpdXMubX07XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJveC1zaGFkb3c6ICR7ZWZmZWN0LmVsZXZhdGlvblsnMDInXX07XG5cbiAgJltkYXRhLWZlZWQtY2FyZC1pcy1mb2xsb3dlZD10cnVlXSB7XG4gICAgJjpub3QoOmhvdmVyLCA6aGFzKDpmb2N1cy12aXNpYmxlKSkgJHtTdHlsZWRGb2xsb3dCdXR0b259IHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICB9XG5gXG5cbmludGVyZmFjZSBDb3ZlckltYWdlUHJvcHMge1xuICBiYWNrZ3JvdW5kSW1hZ2U6IHN0cmluZ1xufVxuXG5jb25zdCBDb3ZlckltYWdlID0gc3R5bGVkKCdkaXYnKS5hdHRyczxDb3ZlckltYWdlUHJvcHM+KHByb3BzID0+ICh7XG4gIHN0eWxlOiB7XG4gICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCcke3Byb3BzLmJhY2tncm91bmRJbWFnZX0nKWBcbiAgfVxufSkpIDxDb3ZlckltYWdlUHJvcHM+YFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTUlOyBib3R0b206IDE1JTsgbGVmdDogMTUlOyByaWdodDogMTUlO1xuICBib3JkZXItcmFkaXVzOiAke3JhZGl1cy5tfTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG5gXG5cbmNvbnN0IE5hbWUgPSBzdHlsZWQuc3BhbmBcbiAgZm9udDogJHtmb250LmRlZmF1bHQuc2VtaWJvbGR9O1xuICBjb2xvcjogJHtjb2xvci50ZXh0LnByaW1hcnl9O1xuYFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQdWJsaXNoZXJDYXJkKHByb3BzOiB7XG4gIHB1Ymxpc2hlcklkOiBzdHJpbmdcbn0pIHtcbiAgY29uc3QgcHVibGlzaGVyID0gdXNlUHVibGlzaGVyKHByb3BzLnB1Ymxpc2hlcklkKVxuICBjb25zdCB7IGZvbGxvd2VkLCBzZXRGb2xsb3dlZCB9ID0gdXNlUHVibGlzaGVyRm9sbG93ZWQocHJvcHMucHVibGlzaGVySWQpXG5cbiAgY29uc3QgYmFja2dyb3VuZENvbG9yID0gcHVibGlzaGVyPy5iYWNrZ3JvdW5kQ29sb3IgfHwgZ2V0Q2FyZENvbG9yKHB1Ymxpc2hlcj8uZmVlZFNvdXJjZT8udXJsIHx8IHB1Ymxpc2hlcj8ucHVibGlzaGVySWQpXG4gIGNvbnN0IGNvdmVyVXJsID0gcHVibGlzaGVyPy5jb3ZlclVybD8udXJsXG5cbiAgcmV0dXJuIDxGbGV4IGRpcmVjdGlvbj1cImNvbHVtblwiIGdhcD17c3BhY2luZy5tfT5cbiAgICA8Q2FyZCBiYWNrZ3JvdW5kQ29sb3I9e2JhY2tncm91bmRDb2xvcn0gZGF0YS1mZWVkLWNhcmQtaXMtZm9sbG93ZWQ9e2ZvbGxvd2VkfT5cbiAgICAgIHtjb3ZlclVybCAmJiA8Q292ZXJJbWFnZSBiYWNrZ3JvdW5kSW1hZ2U9e2AvL2JyYXZlLWltYWdlP3VybD0ke2VuY29kZVVSSUNvbXBvbmVudChjb3ZlclVybCl9YH0gLz59XG4gICAgICA8U3R5bGVkRm9sbG93QnV0dG9uIGZhYiBzaXplPSd0aW55JyBmb2xsb3dpbmc9e2ZvbGxvd2VkfSBvbkNsaWNrPXsoKSA9PiBzZXRGb2xsb3dlZCghZm9sbG93ZWQpfSAvPlxuICAgIDwvQ2FyZD5cbiAgICA8TmFtZT5cbiAgICAgIHtwdWJsaXNoZXI/LnB1Ymxpc2hlck5hbWV9XG4gICAgPC9OYW1lPlxuICA8L0ZsZXg+XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBEaXJlY3RQdWJsaXNoZXJDYXJkKHByb3BzOiB7XG4gIGZlZWRVcmw6IHN0cmluZ1xuICB0aXRsZTogc3RyaW5nXG59KSB7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxuICByZXR1cm4gPEZsZXggZGlyZWN0aW9uPVwiY29sdW1uXCIgZ2FwPXtzcGFjaW5nLm19PlxuICAgIDxDYXJkIGJhY2tncm91bmRDb2xvcj17Z2V0Q2FyZENvbG9yKHByb3BzLmZlZWRVcmwpfSBkYXRhLWZlZWQtY2FyZC1pcy1mb2xsb3dlZD17dHJ1ZX0+XG4gICAgICA8U3R5bGVkRm9sbG93QnV0dG9uIGZvbGxvd2luZz17ZmFsc2V9IGlzRGlzYWJsZWQ9e2xvYWRpbmd9IG9uQ2xpY2s9e2FzeW5jICgpID0+IHtcbiAgICAgICAgc2V0TG9hZGluZyh0cnVlKVxuICAgICAgICBhd2FpdCBnZXRCcmF2ZU5ld3NDb250cm9sbGVyKCkuc3Vic2NyaWJlVG9OZXdEaXJlY3RGZWVkKHsgdXJsOiBwcm9wcy5mZWVkVXJsIH0pXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgICB9fSAvPlxuICAgIDwvQ2FyZD5cbiAgICA8TmFtZT5cbiAgICAgIHtwcm9wcy50aXRsZX1cbiAgICA8L05hbWU+XG4gIDwvRmxleD5cbn1cbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMiBUaGUgQnJhdmUgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbi8vIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXMgZmlsZSxcbi8vIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwczovL21vemlsbGEub3JnL01QTC8yLjAvLlxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCB7XG4gIEFsaWduSXRlbXNQcm9wZXJ0eSxcbiAgSnVzdGlmeUNvbnRlbnRQcm9wZXJ0eSxcbiAgRmxleERpcmVjdGlvblByb3BlcnR5LFxuICBHYXBQcm9wZXJ0eSxcbiAgRmxleFdyYXBQcm9wZXJ0eVxufSBmcm9tICdjc3N0eXBlJ1xuXG5pbnRlcmZhY2UgRmxleFByb3BzIHtcbiAgYWxpZ24/OiBBbGlnbkl0ZW1zUHJvcGVydHk7XG4gIGp1c3RpZnk/OiBKdXN0aWZ5Q29udGVudFByb3BlcnR5LFxuICBkaXJlY3Rpb24/OiBGbGV4RGlyZWN0aW9uUHJvcGVydHlcbiAgZ2FwPzogR2FwUHJvcGVydHk8bnVtYmVyPixcbiAgd3JhcD86IEZsZXhXcmFwUHJvcGVydHlcbn1cblxuY29uc3QgRmxleCA9IHN0eWxlZCgnZGl2JykgPEZsZXhQcm9wcz5gXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiAke3AgPT4gcC5kaXJlY3Rpb259O1xuICBqdXN0aWZ5LWNvbnRlbnQ6ICR7cCA9PiBwLmp1c3RpZnl9O1xuICBhbGlnbi1pdGVtczogJHtwID0+IHAuYWxpZ259O1xuICBnYXA6ICR7cCA9PiB0eXBlb2YgcC5nYXAgPT09ICdudW1iZXInID8gYCR7cC5nYXB9cHhgIDogcC5nYXB9O1xuICBmbGV4LXdyYXA6ICR7cCA9PiBwLndyYXB9O1xuYFxuXG5leHBvcnQgZGVmYXVsdCBGbGV4XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=