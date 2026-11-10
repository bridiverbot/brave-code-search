/******/ "use strict";
/******/ // The require scope
/******/ var __webpack_require__ = {};
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ })();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};
/*!***********************************************************************************************************!*\
  !*** ./components/ai_chat/resources/custom_site_distiller_scripts/scripts/x.com/distiller.ts + 9 modules ***!
  \***********************************************************************************************************/
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ distill),
  getDistillationLevel: () => (/* binding */ getDistillationLevel)
});

;// ./components/ai_chat/resources/custom_site_distiller_scripts/scripts/x.com/selectors.ts
// Copyright (c) 2024 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.
/* harmony default export */ const selectors = ({
    'tweet': "[data-testid='tweet']",
    'notification': "[data-testid='notification']",
    'primaryColumn': "[data-testid='primaryColumn']",
    'userProfileHeaderItems': "[data-testid='UserProfileHeader_Items']",
});

;// ./components/ai_chat/resources/custom_site_distiller_scripts/scripts/distillation.ts
/* Copyright (c) 2024 The Brave Authors. All rights reserved.
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at https://mozilla.org/MPL/2.0/. */
var LEO_DISTILLATION_LEVEL;
(function (LEO_DISTILLATION_LEVEL) {
    LEO_DISTILLATION_LEVEL[LEO_DISTILLATION_LEVEL["LOW"] = 0] = "LOW";
    LEO_DISTILLATION_LEVEL[LEO_DISTILLATION_LEVEL["MEDIUM"] = 1] = "MEDIUM";
    LEO_DISTILLATION_LEVEL[LEO_DISTILLATION_LEVEL["HIGH"] = 2] = "HIGH";
    LEO_DISTILLATION_LEVEL[LEO_DISTILLATION_LEVEL["FULL"] = 3] = "FULL";
})(LEO_DISTILLATION_LEVEL || (LEO_DISTILLATION_LEVEL = {}));

;// ./components/ai_chat/resources/custom_site_distiller_scripts/scripts/x.com/utils.ts
/* Copyright (c) 2024 The Brave Authors. All rights reserved.
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at https://mozilla.org/MPL/2.0/. */



function isString(value) {
    return typeof value === 'string';
}
function isSupportedPage(document) {
    // If this is a user profile page, we can distill it.
    if (document.querySelector(selectors.userProfileHeaderItems)) {
        return true;
    }
    const supportedPaths = [
        '/',
        '/home',
        '/notifications',
        /^\/.*?\/status\/\d+/, // Post detail pages
    ];
    for (const entry of supportedPaths) {
        if (entry instanceof RegExp && entry.test(document.location.pathname)) {
            return true;
        }
        else if (isString(entry) && entry === document.location.pathname) {
            return true;
        }
    }
    return false;
}
/**
 * Decodes HTML entities in a given string using an ad-hoc
 * `textarea` element, constructed in an ad-hoc document (for
 * namespace isolation). The `textarea` is then leveraged to
 * decode the HTML entities in the given string.
 */
function decodeHTMLSpecialChars(text) {
    const isolatedDocument = document.implementation.createHTMLDocument();
    const textarea = isolatedDocument.createElement('textarea');
    // eslint-disable-next-line no-unsanitized/property
    textarea.innerHTML = text;
    return textarea.value;
}
/**
 * Indents each line of the given text by a specified
 * number of spaces or a string prefix.
 */
function indentLines(text, indent = 2) {
    const prefix = Number.isInteger(indent)
        ? ' '.repeat(indent)
        : indent;
    return text
        .split('\n')
        .map((line) => `${prefix}${line}`)
        .join('\n');
}
/**
 * Wraps lines of text to a specified maximum length,
 * breaking at spaces to ensure readability.
 */
function wrapLines(text, limit = 80) {
    return text
        .split('\n')
        .map((line) => {
        const words = line.split(' ');
        let replace = '';
        let length = 0;
        for (const word of words) {
            if (length + word.length > limit) {
                replace += '\n';
                length = 0;
            }
            replace += word + ' ';
            length += word.length + 1;
        }
        return replace.trim();
    })
        .join('\n');
}
function msToMinutesAndSeconds(ms) {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    return `${minutes}m ${seconds}s`;
}
function getDateString(date) {
    const dateObject = new Date(date);
    if (getDistillationLevel() < LEO_DISTILLATION_LEVEL.MEDIUM) {
        return dateObject.toISOString().substring(0, 10);
    }
    return dateObject.toLocaleString();
}
function shortNumberString(value, precision = 1) {
    if (value < 1000) {
        return value.toString();
    }
    const suffixes = ['k', 'M', 'B', 'T'];
    const suffixNum = Math.floor(('' + value).length / 3);
    let shortValue = suffixNum !== 0
        ? parseFloat((value / Math.pow(1000, suffixNum)).toPrecision(precision))
        : parseFloat(value.toPrecision(precision));
    if (shortValue % 1 !== 0) {
        shortValue = parseFloat(shortValue.toFixed(1));
    }
    return shortValue + suffixes[suffixNum - 1];
}

;// ./components/ai_chat/resources/custom_site_distiller_scripts/scripts/x.com/data.ts
/* Copyright (c) 2024 The Brave Authors. All rights reserved.
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at https://mozilla.org/MPL/2.0/. */
class XStateStore {
    constructor() {
        var _a, _b, _c, _d;
        const reactRoot = document.querySelector('#react-root');
        const storeHost = (_a = reactRoot === null || reactRoot === void 0 ? void 0 : reactRoot.firstElementChild) === null || _a === void 0 ? void 0 : _a.firstElementChild;
        if (storeHost instanceof HTMLElement) {
            const xProps = getXProps(storeHost);
            const reduxStore = (_d = (_c = (_b = xProps === null || xProps === void 0 ? void 0 : xProps.children) === null || _b === void 0 ? void 0 : _b.props) === null || _c === void 0 ? void 0 : _c.store) !== null && _d !== void 0 ? _d : {};
            this.snapshot =
                reduxStore.getState instanceof Function ? reduxStore.getState() : null;
        }
    }
    access(type, id) {
        var _a, _b, _c, _d, _e;
        type = type === 'notifications' ? 'genericNotifications' : type;
        return (_e = (_d = (_c = (_b = (_a = this.snapshot) === null || _a === void 0 ? void 0 : _a.entities) === null || _b === void 0 ? void 0 : _b[type]) === null || _c === void 0 ? void 0 : _c.entities) === null || _d === void 0 ? void 0 : _d[id]) !== null && _e !== void 0 ? _e : null;
    }
}
const store = new XStateStore();
/**
 * Retrieves React-specific properties from an element by
 * finding the first property starting with "__reactProps"
 */
function getXProps(element) {
    if (element instanceof HTMLElement) {
        for (const property in element) {
            if (property.startsWith('__reactProps')) {
                return element[property];
            }
        }
    }
    return null;
}

;// ./components/ai_chat/resources/custom_site_distiller_scripts/scripts/x.com/entities.ts
/* Copyright (c) 2024 The Brave Authors. All rights reserved.
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at https://mozilla.org/MPL/2.0/. */

/**
 * In this case, "Attachments" refers to any of the media
 * entities that are associated with the post.
 * TODO (Sampson): Consider combining "cards" into this
 * category as well.
 */
function distillPostMediaEntities(post) {
    const media = post.extended_entities.media
        .map((media) => {
        switch (media.type) {
            case 'photo':
            case 'video':
            case 'animated_gif':
                return distillPostMediaEntity(media);
            default:
                console.warn(`Unhandled media type: ${media.type}`, media);
                return null;
        }
    })
        .filter(Boolean)
        .join('\n');
    return media;
}
function distillPostMediaEntity(media) {
    var _a, _b;
    const { type, expanded_url: expandedURL, video_info: videoInfo } = media;
    const { width, height } = (_a = media.original_info) !== null && _a !== void 0 ? _a : {};
    const { duration_millis: durationMillis, variants } = videoInfo !== null && videoInfo !== void 0 ? videoInfo : {};
    const labels = {
        photo: 'Photo',
        video: 'Video',
        animated_gif: 'Animated GIF',
    };
    const downloadableVariant = variants && getDownloadableVariant(variants);
    const output = [` - Type: ${(_b = labels[type]) !== null && _b !== void 0 ? _b : type}`];
    if (width && height)
        output.push(` - Dimensions: ${width}x${height}`);
    if (durationMillis)
        output.push(` - Duration: ${msToMinutesAndSeconds(durationMillis)}s`);
    if (expandedURL)
        output.push(` - URL: ${expandedURL}`);
    if (downloadableVariant)
        output.push(` - Download URL: ${downloadableVariant.url}`);
    return output.filter(Boolean).join('\n');
}
function getDownloadableVariant(variants) {
    return variants.reduce((best, variant) => {
        if (variant.content_type === 'video/mp4') {
            return best === null || variant.bitrate > best.bitrate ? variant : best;
        }
        return best;
    }, null);
}
/**
 * We will use this to replace shortened URLs
 * in both tweet bodies and profile descriptions.
 */
function expandEntities(text, entities) {
    let output = text;
    for (const name in entities) {
        if (['media', 'urls'].includes(name)) {
            for (const { url, expanded_url: xURL } of entities[name]) {
                /**
                 * Media attachments are already promoted to a top-level
                 * listing, so we will simply remove them as inline
                 * mentions. URLs, on the other hand will be replaced
                 * with their fully-expanded value.
                 */
                output = output.replace(url, name === 'media' ? '' : xURL);
            }
        }
    }
    return output.trim();
}

;// ./components/ai_chat/resources/custom_site_distiller_scripts/scripts/x.com/user.ts
/* Copyright (c) 2024 The Brave Authors. All rights reserved.
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at https://mozilla.org/MPL/2.0/. */





const SeenUsersSet = new Set();
const UserSignatures = new Map();
/**
 * Generates a formatted signature string for a user,
 * considering different possible representations (name,
 * screen name, or ID).
 */
function getUserSignature(user) {
    if (isString(user) || Number.isInteger(user)) {
        user = store.access('users', user);
    }
    SeenUsersSet.add(user);
    const { name, screen_name: screenName, id_str: idStr } = user !== null && user !== void 0 ? user : {};
    /**
     * If we have already created a signature for this user, we will
     * instead return just their screen name. The verbose signature is
     * already present in the document, so only the shorter version
     * should suffice (and save us some chars).
     */
    if (UserSignatures.has(idStr)
        || getDistillationLevel() === LEO_DISTILLATION_LEVEL.LOW) {
        return isString(screenName) ? `@${screenName}` : 'Anonyous';
    }
    if (isString(screenName)) {
        const signature = isString(name)
            ? `${name} <@${screenName}>`
            : `@${screenName}`;
        UserSignatures.set(idStr, signature);
        return signature;
    }
    return idStr ? `User #${idStr}` : 'Unknown User';
}
function distillSeenUsers(level = LEO_DISTILLATION_LEVEL.MEDIUM) {
    switch (level) {
        case LEO_DISTILLATION_LEVEL.LOW:
            return distillLowSeenUsers();
        case LEO_DISTILLATION_LEVEL.MEDIUM:
        case LEO_DISTILLATION_LEVEL.HIGH:
        case LEO_DISTILLATION_LEVEL.FULL:
            return distillMediumHighSeenUsers();
        default:
            return null;
    }
}
function distillLowSeenUsers() {
    const output = [];
    for (const user of SeenUsersSet) {
        if (typeof user.created_at === 'undefined') {
            continue;
        }
        const followers = shortNumberString(user.followers_count);
        const memberSince = getDateString(user.created_at);
        const entry = [
            `@${user.screen_name}${isUserVerified(user) ? ' [Verified]' : ''}`,
            ` - Joined: ${memberSince}`,
            ` - Followers: ${followers}`,
        ].join('\n');
        output.push(entry);
    }
    return output.join('\n\n');
}
function isUserVerified(user) {
    return (user.verified
        || user.is_blue_verified
        || user.professional
        || user.verified_type);
}
function distillMediumHighSeenUsers() {
    const output = [];
    for (const user of SeenUsersSet) {
        if (typeof user.created_at === 'undefined') {
            continue;
        }
        const memberSince = getDateString(user.created_at);
        const description = user.description
            && expandEntities(user.description, user.entities.description);
        const followersStr = user.followers_count.toLocaleString();
        const followingStr = user.friends_count.toLocaleString();
        const entry = [
            `**${user.name}**`,
            ` - Username: @${user.screen_name}`,
            ` - Verified: ${isUserVerified(user) ? 'Yes' : 'No'}`,
            ` - Followers: ${followersStr} | Following: ${followingStr}`,
            ` - Member Since: ${memberSince}`,
            description && [` - Description: ${description}`],
        ]
            .filter(Boolean)
            .join('\n');
        output.push(entry);
    }
    return output.join('\n\n');
}

;// ./components/ai_chat/resources/custom_site_distiller_scripts/scripts/x.com/notifications.ts
/* Copyright (c) 2024 The Brave Authors. All rights reserved.
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at https://mozilla.org/MPL/2.0/. */



function distillNotificationElement(element) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    const notificationXProps = getXProps(element.parentElement);
    const notificationId = (_d = (_c = (_b = (_a = notificationXProps === null || notificationXProps === void 0 ? void 0 : notificationXProps.children) === null || _a === void 0 ? void 0 : _a.props) === null || _b === void 0 ? void 0 : _b.entry) === null || _c === void 0 ? void 0 : _c.content) === null || _d === void 0 ? void 0 : _d.id;
    const notificationURL = (_j = (_h = (_g = (_f = (_e = notificationXProps === null || notificationXProps === void 0 ? void 0 : notificationXProps.children) === null || _e === void 0 ? void 0 : _e.props) === null || _f === void 0 ? void 0 : _f.entry) === null || _g === void 0 ? void 0 : _g.content) === null || _h === void 0 ? void 0 : _h.url) === null || _j === void 0 ? void 0 : _j.url;
    const notificationData = store.access('notifications', notificationId);
    const distilled = [];
    if (notificationData) {
        const message = distillNotificationData(notificationData);
        distilled.push(message && `Notification: ${message}`, notificationURL && `URL: ${notificationURL}`);
    }
    return distilled.filter(Boolean).join('\n');
}
function distillNotificationData(notification) {
    var _a;
    // TODO (Sampson): Possibly handle other notification templates
    if ((_a = notification.template) === null || _a === void 0 ? void 0 : _a.aggregateUserActionsV1) {
        return distillNotificationDataAggregateUserActionsV1(notification);
    }
    return null;
}
function distillNotificationDataAggregateUserActionsV1(notification) {
    var _a;
    const { message: { text, entities }, template: { aggregateUserActionsV1 }, } = notification;
    let distilled = text;
    if (entities.length > 0) {
        /**
         * Walk through the entities in reverse order so as not to cause
         * issues with indexes as we modify the string.
         * TODO (Sampson): Indexes do not account for code points, so this
         * could potentially cause issues with multi-byte characters. We'll
         * need to revisit this to make sure signatures with emojis are
         * handled correctly.
         */
        for (let i = entities.length - 1; i >= 0; i--) {
            const { fromIndex, toIndex, format, ref } = entities[i];
            if (typeof format === 'string') {
                if (format.toLowerCase() === 'strong') {
                    // We'll convert strong text to uppercase
                    const strong = distilled.slice(fromIndex, toIndex).toUpperCase();
                    const front = distilled.slice(0, fromIndex);
                    const back = distilled.slice(toIndex);
                    distilled = front + strong + back;
                }
                else {
                    console.warn(`Unhandled format: ${format}`);
                }
            }
            if (ref) {
                if (ref.user) {
                    const user = store.access('users', ref.user.id);
                    if (user) {
                        const signature = getUserSignature(user);
                        const front = distilled.slice(0, fromIndex);
                        const back = distilled.slice(toIndex);
                        distilled = front + signature + back;
                    }
                }
                else {
                    console.warn(`Unhandled ref: ${ref}`);
                }
            }
        }
    }
    /**
     * For now we'll just pull in the text of the first associated post (if any).
     */
    if (((_a = aggregateUserActionsV1.targetObjects) === null || _a === void 0 ? void 0 : _a.length) > 0) {
        const first = aggregateUserActionsV1.targetObjects[0];
        if (first.tweet) {
            const tweet = store.access('tweets', first.tweet);
            if (tweet) {
                const text = wrapLines(tweet.full_text);
                if (text) {
                    distilled += `\n\n"${text}"`;
                }
            }
        }
    }
    return distilled;
}

;// ./components/ai_chat/resources/custom_site_distiller_scripts/scripts/x.com/cards.ts
/* Copyright (c) 2024 The Brave Authors. All rights reserved.
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at https://mozilla.org/MPL/2.0/. */


function distillCard(post) {
    const card = store.access('cards', post.card);
    if (card) {
        const title = card.binding_values.title;
        const cardURL = card.binding_values.card_url;
        const unifiedCard = card.binding_values.unified_card;
        const host = card.binding_values.domain;
        const desc = card.binding_values.description;
        if (card.name.endsWith('audiospace')) {
            /* Not Implemented */
            return null;
        }
        else if (card.name === 'unified_card' && unifiedCard) {
            return distillUnifiedCard(unifiedCard);
        }
        return [
            'Resource:',
            title ? ` - Title: "${title.string_value}"` : null,
            host && cardURL
                ? ` - Address: [${host.string_value}](${cardURL.string_value})`
                : null,
            desc ? ` - Description: "${desc.string_value}"` : null,
        ]
            .filter(Boolean)
            .join('\n');
    }
    return null;
}
function distillUnifiedCard(cardString) {
    const card = JSON.parse(cardString.string_value);
    return distillUnifiedCardComponents(card);
}
function distillUnifiedCardComponents(card) {
    return card.components
        .map((key) => {
        const component = card.component_objects[key];
        switch (component.type) {
            case 'media':
                return distillUnifiedCardMedia(component, card);
            case 'grok_share':
                return distillUnifiedCardGrokShare(component, card);
            case 'community_details':
                return distillUnifiedCardCommunityDetails(component, card);
            default:
                return null;
        }
    })
        .filter(Boolean)
        .join('\n');
}
function distillUnifiedCardMedia(component, card) {
    const { data: { id }, } = component;
    const { type, original_info: { width, height }, } = card.media_entities[id];
    if (type !== 'photo') {
        /**
         * TODO (Sampson): Handle other media types
         */
        console.warn(`Unhandled media type: ${type}`, card.media_entities[id]);
    }
    return ['Media:', ` - Type: ${type}`, ` - Dimensions: ${width}x${height}`]
        .filter(Boolean)
        .join('\n');
}
function distillUnifiedCardGrokShare(component, card) {
    const conversationPreview = component.data.conversation_preview;
    const destination = component.data.destination;
    const grokUser = component.data.grok_user;
    const profileUser = component.data.profile_user;
    const urlData = card.destination_objects[destination].data.url_data;
    const grokSig = getUserSignature(grokUser);
    const userSig = getUserSignature(profileUser);
    const conversation = conversationPreview.map((entry) => {
        const message = entry.message;
        const signature = entry.sender === 'USER' ? userSig : grokSig;
        return `${signature}: ${message}\n`;
    });
    conversation.push(`URL: ${urlData.url}`);
    return conversation.filter(Boolean).join('\n');
}
function distillUnifiedCardCommunityDetails(component, card) {
    const { data: { destination, member_count: memberCount, members_facepile: membersFacepile, name, }, } = component;
    const { data: { url_data: urlData }, } = card.destination_objects[destination];
    const facepileSignatures = membersFacepile
        .map((id) => {
        return getUserSignature(card('users')[id]) || null;
    })
        .filter(Boolean);
    const count = memberCount - facepileSignatures.length;
    return [
        'Community:',
        ` - Name: ${name}`,
        ` - Members: ${facepileSignatures.join(', ')}, and ${count} others`,
        ` - URL: ${urlData.url}`,
    ]
        .filter(Boolean)
        .join('\n');
}

;// ./components/ai_chat/resources/custom_site_distiller_scripts/scripts/x.com/post.ts
/* Copyright (c) 2024 The Brave Authors. All rights reserved.
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at https://mozilla.org/MPL/2.0/. */







/**
 * Generates a list of formatted metrics (like Likes,
 * Quotes, Replies) for a given tweet, considering the
 * plurality of values.
 * TODO (Sampson): Come back and define some types, such
 * as the `post` parameter.
 */
function getPostMetrics(post) {
    const metrics = [
        { key: 'favorite', singular: 'Like', plural: 'Likes' },
        { key: 'quote', singular: 'Quote', plural: 'Quotes' },
        { key: 'reply', singular: 'Reply', plural: 'Replies' },
        { key: 'retweet', singular: 'Repost', plural: 'Reposts' },
        { key: 'bookmark', singular: 'Bookmark', plural: 'Bookmarks' },
    ];
    /**
     * X is now combining these two metrics into a single value.
     * To keep the output consistent, we'll do the same here.
     */
    let processedQuotesAndReposts = false;
    return metrics
        .map(({ key, singular, plural }) => {
        var _a, _b;
        const propKey = `${key}_count`;
        const propValue = post[propKey];
        if (propValue === undefined)
            return null;
        /**
         * We won't include zero values for low distillation
         */
        if (getDistillationLevel() === LEO_DISTILLATION_LEVEL.LOW) {
            if (parseInt(propValue) === 0)
                return null;
        }
        if (['quote', 'retweet'].includes(key) && !processedQuotesAndReposts) {
            processedQuotesAndReposts = true;
            const combinedValue = ((_a = post.quote_content) !== null && _a !== void 0 ? _a : 0) + ((_b = post.retweet_count) !== null && _b !== void 0 ? _b : 0);
            const label = combinedValue === 1 ? 'Quote/Repost' : 'Quotes/Reposts';
            return `${combinedValue.toLocaleString()} ${label}`;
        }
        else {
            const label = propValue === 1 ? singular : plural;
            return `${propValue.toLocaleString()} ${label}`;
        }
    })
        .filter(Boolean);
}
/**
 * Extracts post data from a DOM element and distills
 * it into a formatted output.
 */
function distillPostElement(element) {
    var _a, _b, _c, _d;
    const postXProps = getXProps(element.parentElement);
    const postID = (_d = (_c = (_b = (_a = postXProps === null || postXProps === void 0 ? void 0 : postXProps.children) === null || _a === void 0 ? void 0 : _a.props) === null || _b === void 0 ? void 0 : _b.entry) === null || _c === void 0 ? void 0 : _c.content) === null || _d === void 0 ? void 0 : _d.id;
    const postData = postID && store.access('tweets', postID);
    return postData ? distillPostData(postData) : element.innerText;
}
/**
 * Constructs the text output for a given post, handling
 * reposts, headers, and post body content.
 */
function distillPostData(post, level = 0) {
    if (post.retweeted_status) {
        return distillRepostPost(post);
    }
    const header = distillPostHeader(post);
    const body = buildPostBody(post, level);
    return [header, body && indentLines(`\n${body}`)].filter(Boolean).join('\n');
}
/**
 * Builds the main content of a post, including
 * handling quoted content and text wrapping.
 */
function buildPostBody(post, level) {
    var _a;
    const text = getPostText(post);
    const quoted = post.quoted_status ? buildPostQuotedBody(post, level) : null;
    const attachments = ((_a = post.extended_entities) === null || _a === void 0 ? void 0 : _a.media)
        ? distillPostMediaEntities(post)
        : null;
    const card = post.card ? distillCard(post) : null;
    return [
        text ? wrapLines(text) : null,
        card ? [`\n${indentLines(wrapLines(card), ' | ')}`] : null,
        quoted ? [`\n${indentLines(quoted, ' > ')}`] : null,
        attachments ? [`\nAttachments:\n${attachments}`] : null,
    ]
        .flat()
        .filter(Boolean)
        .join('\n');
}
/**
 * Creates the header of a post, including the author
 * information, action line, and any relevant metrics.
 */
function distillPostHeader(post) {
    const author = store.access('users', post.user);
    const signature = getUserSignature(author);
    const metrics = getPostMetrics(post);
    return [
        `From: ${signature}`,
        buildPostActionLine(post),
        metrics.length > 0 ? `Metrics: ${metrics.join(' | ')}` : null,
    ]
        .filter(Boolean)
        .join('\n');
}
/**
 * Retrieves and decodes the main text of a post, handling
 * different fields where the text might be located.
 */
function getPostText(post) {
    var _a;
    let response = isString((_a = post.note_tweet) === null || _a === void 0 ? void 0 : _a.text)
        ? post.note_tweet.text
        : post.full_text;
    // Remove leading references
    if (getDistillationLevel() < LEO_DISTILLATION_LEVEL.HIGH) {
        response = response.replace(/^(\@[a-zA-Z0-9_]+\s+)+/, '');
    }
    return isString(response) ? decodeHTMLSpecialChars(response) : null;
}
/**
 * Formats a reposted tweet, incorporating the original
 * tweet’s content and indicating who reposted it.
 */
function distillRepostPost(post) {
    const repostingUser = store.access('users', post.user);
    const repostingPost = store.access('tweets', post.retweeted_status);
    if (repostingUser && repostingPost) {
        const distilled = distillPostData(repostingPost);
        if (distilled) {
            const [fromUser, ...rest] = distilled.split('\n');
            const repostedBy = `Reposted by ${getUserSignature(repostingUser)}`;
            return [`${fromUser} (${repostedBy})`, ...rest].join('\n');
        }
    }
    return null;
}
/**
 * Constructs an action line for a post, such as indicating
 * a reply or when the post was created.
 */
function buildPostActionLine(post) {
    var _a;
    const date = getDateString(post.created_at);
    if (post.in_reply_to_user_id_str && post.in_reply_to_screen_name) {
        const user = store.access('users', post.in_reply_to_user_id_str);
        const signature = (_a = getUserSignature(user)) !== null && _a !== void 0 ? _a : `@${post.in_reply_to_screen_name}`;
        return `Replied to ${signature}: ${date}`;
    }
    return `Posted: ${date}`;
}
/**
 * Handles the content for quoted posts, including truncation
 * logic and URL continuation if the maximum depth is reached.
 */
function buildPostQuotedBody(post, level = 0) {
    const quote = store.access('tweets', post.quoted_status);
    const distilled = level < 3 && quote ? distillPostData(quote, level + 1) : null;
    return distilled || `Thread continues at ${getExpandedPostURL(post)}`;
}
/**
 * Retrieves the expanded URL for a post, either from the
 * provided permalink or by constructing it using user
 * information.
 */
function getExpandedPostURL(post) {
    var _a, _b;
    const url = (_a = post.quoted_status_permalink) === null || _a === void 0 ? void 0 : _a.expandedUrl;
    if (url)
        return url;
    const { screen_name: screenName } = (_b = store.access('users', post.user)) !== null && _b !== void 0 ? _b : {};
    return isString(screenName)
        ? `https://x.com/${screenName}/status/${post.id_str}`
        : null;
}

;// ./components/ai_chat/resources/custom_site_distiller_scripts/scripts/x.com/distiller.ts
// Copyright (c) 2024 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.






let _DISTILLATION_LEVEL = LEO_DISTILLATION_LEVEL.FULL;
function getDistillationLevel() {
    return _DISTILLATION_LEVEL;
}
function distill(distillLevel = LEO_DISTILLATION_LEVEL.FULL) {
    if (!isSupportedPage(document)) {
        return null;
    }
    _DISTILLATION_LEVEL = distillLevel;
    const column = distillPrimaryColumn();
    const seenUsers = distillSeenUsers(distillLevel);
    /**
     * Include helpful metadata about users seen on the page, but in a way that
     * it isn't confused with the original content.
     */
    return (`${seenUsers}\n\nNote: The above user information is supplemental `
        + `metadata and not part of the original page content.\n\n--- Page `
        + `Content Below ---\n\n${column}`);
}
const config = {
    'tweet': {
        'selector': selectors.tweet,
        'distiller': distillPostElement,
    },
    'notification': {
        'selector': selectors.notification,
        'distiller': distillNotificationElement,
    },
};
/**
 * Extracts and processes all items (like tweets and
 * notifications) from the primary column of the page, using
 * configuration to determine which elements to distill.
 * TODO (Sampson): Add support for other primary column items,
 * such as "show more" buttons, "this post is from a suspended
 * account", tends, and more.
 */
function distillPrimaryColumn() {
    var _a;
    const primaryColumn = document.querySelector(selectors.primaryColumn);
    const selectorList = Object.values(config)
        .map((item) => item.selector)
        .join(', ');
    const timelineItems = (_a = primaryColumn === null || primaryColumn === void 0 ? void 0 : primaryColumn.querySelectorAll(selectorList)) !== null && _a !== void 0 ? _a : [];
    return Array.from(timelineItems)
        .map((item) => {
        const type = item.getAttribute('data-testid');
        const { distiller } = type && config[type];
        return distiller && distiller(item);
    })
        .filter(Boolean)
        .join('\n\n---\n\n');
}


//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQztRQUM3QyxNQUFNLEVBQUUsU0FBUyxFQUFFLEdBQUcsSUFBSSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDMUMsT0FBTyxTQUFTLElBQUksU0FBUyxDQUFDLElBQUksQ0FBQztJQUNyQyxDQUFDLENBQUM7U0FDRCxNQUFNLENBQUMsT0FBTyxDQUFDO1NBQ2YsSUFBSSxDQUFDLGFBQWEsQ0FBQztBQUN4QixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYnJhdmUtY29yZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9icmF2ZS1jb3JlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9icmF2ZS1jb3JlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYnJhdmUtY29yZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JyYXZlLWNvcmUvLi9jb21wb25lbnRzL2FpX2NoYXQvcmVzb3VyY2VzL2N1c3RvbV9zaXRlX2Rpc3RpbGxlcl9zY3JpcHRzL3NjcmlwdHMveC5jb20vc2VsZWN0b3JzLnRzIiwid2VicGFjazovL2JyYXZlLWNvcmUvLi9jb21wb25lbnRzL2FpX2NoYXQvcmVzb3VyY2VzL2N1c3RvbV9zaXRlX2Rpc3RpbGxlcl9zY3JpcHRzL3NjcmlwdHMvZGlzdGlsbGF0aW9uLnRzIiwid2VicGFjazovL2JyYXZlLWNvcmUvLi9jb21wb25lbnRzL2FpX2NoYXQvcmVzb3VyY2VzL2N1c3RvbV9zaXRlX2Rpc3RpbGxlcl9zY3JpcHRzL3NjcmlwdHMveC5jb20vdXRpbHMudHMiLCJ3ZWJwYWNrOi8vYnJhdmUtY29yZS8uL2NvbXBvbmVudHMvYWlfY2hhdC9yZXNvdXJjZXMvY3VzdG9tX3NpdGVfZGlzdGlsbGVyX3NjcmlwdHMvc2NyaXB0cy94LmNvbS9kYXRhLnRzIiwid2VicGFjazovL2JyYXZlLWNvcmUvLi9jb21wb25lbnRzL2FpX2NoYXQvcmVzb3VyY2VzL2N1c3RvbV9zaXRlX2Rpc3RpbGxlcl9zY3JpcHRzL3NjcmlwdHMveC5jb20vZW50aXRpZXMudHMiLCJ3ZWJwYWNrOi8vYnJhdmUtY29yZS8uL2NvbXBvbmVudHMvYWlfY2hhdC9yZXNvdXJjZXMvY3VzdG9tX3NpdGVfZGlzdGlsbGVyX3NjcmlwdHMvc2NyaXB0cy94LmNvbS91c2VyLnRzIiwid2VicGFjazovL2JyYXZlLWNvcmUvLi9jb21wb25lbnRzL2FpX2NoYXQvcmVzb3VyY2VzL2N1c3RvbV9zaXRlX2Rpc3RpbGxlcl9zY3JpcHRzL3NjcmlwdHMveC5jb20vbm90aWZpY2F0aW9ucy50cyIsIndlYnBhY2s6Ly9icmF2ZS1jb3JlLy4vY29tcG9uZW50cy9haV9jaGF0L3Jlc291cmNlcy9jdXN0b21fc2l0ZV9kaXN0aWxsZXJfc2NyaXB0cy9zY3JpcHRzL3guY29tL2NhcmRzLnRzIiwid2VicGFjazovL2JyYXZlLWNvcmUvLi9jb21wb25lbnRzL2FpX2NoYXQvcmVzb3VyY2VzL2N1c3RvbV9zaXRlX2Rpc3RpbGxlcl9zY3JpcHRzL3NjcmlwdHMveC5jb20vcG9zdC50cyIsIndlYnBhY2s6Ly9icmF2ZS1jb3JlLy4vY29tcG9uZW50cy9haV9jaGF0L3Jlc291cmNlcy9jdXN0b21fc2l0ZV9kaXN0aWxsZXJfc2NyaXB0cy9zY3JpcHRzL3guY29tL2Rpc3RpbGxlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIENvcHlyaWdodCAoYykgMjAyNCBUaGUgQnJhdmUgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbi8vIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXMgZmlsZSxcbi8vIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwczovL21vemlsbGEub3JnL01QTC8yLjAvLlxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICd0d2VldCc6IFwiW2RhdGEtdGVzdGlkPSd0d2VldCddXCIsXG4gICdub3RpZmljYXRpb24nOiBcIltkYXRhLXRlc3RpZD0nbm90aWZpY2F0aW9uJ11cIixcbiAgJ3ByaW1hcnlDb2x1bW4nOiBcIltkYXRhLXRlc3RpZD0ncHJpbWFyeUNvbHVtbiddXCIsXG4gICd1c2VyUHJvZmlsZUhlYWRlckl0ZW1zJzogXCJbZGF0YS10ZXN0aWQ9J1VzZXJQcm9maWxlSGVhZGVyX0l0ZW1zJ11cIixcbn1cbiIsIi8qIENvcHlyaWdodCAoYykgMjAyNCBUaGUgQnJhdmUgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXMgZmlsZSxcbiAqIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwczovL21vemlsbGEub3JnL01QTC8yLjAvLiAqL1xuXG5leHBvcnQgZW51bSBMRU9fRElTVElMTEFUSU9OX0xFVkVMIHtcbiAgTE9XID0gMCxcbiAgTUVESVVNID0gMSxcbiAgSElHSCA9IDIsXG4gIEZVTEwgPSAzLFxufVxuIiwiLyogQ29weXJpZ2h0IChjKSAyMDI0IFRoZSBCcmF2ZSBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBmaWxlLFxuICogWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHBzOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uICovXG5cbmltcG9ydCBzZWxlY3RvcnMgZnJvbSAnLi9zZWxlY3RvcnMnXG5pbXBvcnQgeyBMRU9fRElTVElMTEFUSU9OX0xFVkVMIH0gZnJvbSAnLi4vZGlzdGlsbGF0aW9uJ1xuaW1wb3J0IHsgZ2V0RGlzdGlsbGF0aW9uTGV2ZWwgfSBmcm9tICcuL2Rpc3RpbGxlcidcblxuZXhwb3J0IGZ1bmN0aW9uIGlzU3RyaW5nKHZhbHVlOiBhbnkpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZydcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzU3VwcG9ydGVkUGFnZShkb2N1bWVudDogRG9jdW1lbnQpIHtcbiAgLy8gSWYgdGhpcyBpcyBhIHVzZXIgcHJvZmlsZSBwYWdlLCB3ZSBjYW4gZGlzdGlsbCBpdC5cbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3JzLnVzZXJQcm9maWxlSGVhZGVySXRlbXMpKSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIGNvbnN0IHN1cHBvcnRlZFBhdGhzID0gW1xuICAgICcvJyxcbiAgICAnL2hvbWUnLFxuICAgICcvbm90aWZpY2F0aW9ucycsXG4gICAgL15cXC8uKj9cXC9zdGF0dXNcXC9cXGQrLywgLy8gUG9zdCBkZXRhaWwgcGFnZXNcbiAgXVxuXG4gIGZvciAoY29uc3QgZW50cnkgb2Ygc3VwcG9ydGVkUGF0aHMpIHtcbiAgICBpZiAoZW50cnkgaW5zdGFuY2VvZiBSZWdFeHAgJiYgZW50cnkudGVzdChkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZSkpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSBlbHNlIGlmIChpc1N0cmluZyhlbnRyeSkgJiYgZW50cnkgPT09IGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZVxufVxuXG4vKipcbiAqIERlY29kZXMgSFRNTCBlbnRpdGllcyBpbiBhIGdpdmVuIHN0cmluZyB1c2luZyBhbiBhZC1ob2NcbiAqIGB0ZXh0YXJlYWAgZWxlbWVudCwgY29uc3RydWN0ZWQgaW4gYW4gYWQtaG9jIGRvY3VtZW50IChmb3JcbiAqIG5hbWVzcGFjZSBpc29sYXRpb24pLiBUaGUgYHRleHRhcmVhYCBpcyB0aGVuIGxldmVyYWdlZCB0b1xuICogZGVjb2RlIHRoZSBIVE1MIGVudGl0aWVzIGluIHRoZSBnaXZlbiBzdHJpbmcuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZWNvZGVIVE1MU3BlY2lhbENoYXJzKHRleHQ6IHN0cmluZykge1xuICBjb25zdCBpc29sYXRlZERvY3VtZW50ID0gZG9jdW1lbnQuaW1wbGVtZW50YXRpb24uY3JlYXRlSFRNTERvY3VtZW50KClcbiAgY29uc3QgdGV4dGFyZWEgPSBpc29sYXRlZERvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJylcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuc2FuaXRpemVkL3Byb3BlcnR5XG4gIHRleHRhcmVhLmlubmVySFRNTCA9IHRleHRcbiAgcmV0dXJuIHRleHRhcmVhLnZhbHVlXG59XG5cbi8qKlxuICogSW5kZW50cyBlYWNoIGxpbmUgb2YgdGhlIGdpdmVuIHRleHQgYnkgYSBzcGVjaWZpZWRcbiAqIG51bWJlciBvZiBzcGFjZXMgb3IgYSBzdHJpbmcgcHJlZml4LlxuICovXG5leHBvcnQgZnVuY3Rpb24gaW5kZW50TGluZXModGV4dDogc3RyaW5nLCBpbmRlbnQ6IG51bWJlciB8IHN0cmluZyA9IDIpIHtcbiAgY29uc3QgcHJlZml4ID0gTnVtYmVyLmlzSW50ZWdlcihpbmRlbnQpXG4gICAgPyAnICcucmVwZWF0KGluZGVudCBhcyBudW1iZXIpXG4gICAgOiBpbmRlbnRcbiAgcmV0dXJuIHRleHRcbiAgICAuc3BsaXQoJ1xcbicpXG4gICAgLm1hcCgobGluZSkgPT4gYCR7cHJlZml4fSR7bGluZX1gKVxuICAgIC5qb2luKCdcXG4nKVxufVxuXG4vKipcbiAqIFdyYXBzIGxpbmVzIG9mIHRleHQgdG8gYSBzcGVjaWZpZWQgbWF4aW11bSBsZW5ndGgsXG4gKiBicmVha2luZyBhdCBzcGFjZXMgdG8gZW5zdXJlIHJlYWRhYmlsaXR5LlxuICovXG5leHBvcnQgZnVuY3Rpb24gd3JhcExpbmVzKHRleHQ6IHN0cmluZywgbGltaXQ6IG51bWJlciA9IDgwKSB7XG4gIHJldHVybiB0ZXh0XG4gICAgLnNwbGl0KCdcXG4nKVxuICAgIC5tYXAoKGxpbmUpID0+IHtcbiAgICAgIGNvbnN0IHdvcmRzID0gbGluZS5zcGxpdCgnICcpXG4gICAgICBsZXQgcmVwbGFjZSA9ICcnXG4gICAgICBsZXQgbGVuZ3RoID0gMFxuICAgICAgZm9yIChjb25zdCB3b3JkIG9mIHdvcmRzKSB7XG4gICAgICAgIGlmIChsZW5ndGggKyB3b3JkLmxlbmd0aCA+IGxpbWl0KSB7XG4gICAgICAgICAgcmVwbGFjZSArPSAnXFxuJ1xuICAgICAgICAgIGxlbmd0aCA9IDBcbiAgICAgICAgfVxuICAgICAgICByZXBsYWNlICs9IHdvcmQgKyAnICdcbiAgICAgICAgbGVuZ3RoICs9IHdvcmQubGVuZ3RoICsgMVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJlcGxhY2UudHJpbSgpXG4gICAgfSlcbiAgICAuam9pbignXFxuJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1zVG9NaW51dGVzQW5kU2Vjb25kcyhtczogbnVtYmVyKSB7XG4gIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKG1zIC8gNjAwMDApXG4gIGNvbnN0IHNlY29uZHMgPSBNYXRoLmZsb29yKChtcyAlIDYwMDAwKSAvIDEwMDApXG4gIHJldHVybiBgJHttaW51dGVzfW0gJHtzZWNvbmRzfXNgXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREYXRlU3RyaW5nKGRhdGU6IGFueSkge1xuICBjb25zdCBkYXRlT2JqZWN0ID0gbmV3IERhdGUoZGF0ZSlcblxuICBpZiAoZ2V0RGlzdGlsbGF0aW9uTGV2ZWwoKSA8IExFT19ESVNUSUxMQVRJT05fTEVWRUwuTUVESVVNKSB7XG4gICAgcmV0dXJuIGRhdGVPYmplY3QudG9JU09TdHJpbmcoKS5zdWJzdHJpbmcoMCwgMTApXG4gIH1cblxuICByZXR1cm4gZGF0ZU9iamVjdC50b0xvY2FsZVN0cmluZygpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaG9ydE51bWJlclN0cmluZyh2YWx1ZTogbnVtYmVyLCBwcmVjaXNpb246IG51bWJlciA9IDEpIHtcbiAgaWYgKHZhbHVlIDwgMTAwMCkge1xuICAgIHJldHVybiB2YWx1ZS50b1N0cmluZygpXG4gIH1cblxuICBjb25zdCBzdWZmaXhlcyA9IFsnaycsICdNJywgJ0InLCAnVCddXG4gIGNvbnN0IHN1ZmZpeE51bSA9IE1hdGguZmxvb3IoKCcnICsgdmFsdWUpLmxlbmd0aCAvIDMpXG4gIGxldCBzaG9ydFZhbHVlID1cbiAgICBzdWZmaXhOdW0gIT09IDBcbiAgICAgID8gcGFyc2VGbG9hdCgodmFsdWUgLyBNYXRoLnBvdygxMDAwLCBzdWZmaXhOdW0pKS50b1ByZWNpc2lvbihwcmVjaXNpb24pKVxuICAgICAgOiBwYXJzZUZsb2F0KHZhbHVlLnRvUHJlY2lzaW9uKHByZWNpc2lvbikpXG5cbiAgaWYgKHNob3J0VmFsdWUgJSAxICE9PSAwKSB7XG4gICAgc2hvcnRWYWx1ZSA9IHBhcnNlRmxvYXQoc2hvcnRWYWx1ZS50b0ZpeGVkKDEpKVxuICB9XG5cbiAgcmV0dXJuIHNob3J0VmFsdWUgKyBzdWZmaXhlc1tzdWZmaXhOdW0gLSAxXVxufVxuIiwiLyogQ29weXJpZ2h0IChjKSAyMDI0IFRoZSBCcmF2ZSBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBmaWxlLFxuICogWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHBzOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uICovXG5cbmNsYXNzIFhTdGF0ZVN0b3JlIHtcbiAgcHJpdmF0ZSBzbmFwc2hvdDogUmVjb3JkPHN0cmluZywgYW55PiB8IG51bGxcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCByZWFjdFJvb3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVhY3Qtcm9vdCcpXG4gICAgY29uc3Qgc3RvcmVIb3N0ID0gcmVhY3RSb290Py5maXJzdEVsZW1lbnRDaGlsZD8uZmlyc3RFbGVtZW50Q2hpbGRcbiAgICBpZiAoc3RvcmVIb3N0IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgIGNvbnN0IHhQcm9wcyA9IGdldFhQcm9wcyhzdG9yZUhvc3QpXG4gICAgICBjb25zdCByZWR1eFN0b3JlID0geFByb3BzPy5jaGlsZHJlbj8ucHJvcHM/LnN0b3JlID8/IHt9XG4gICAgICB0aGlzLnNuYXBzaG90ID1cbiAgICAgICAgcmVkdXhTdG9yZS5nZXRTdGF0ZSBpbnN0YW5jZW9mIEZ1bmN0aW9uID8gcmVkdXhTdG9yZS5nZXRTdGF0ZSgpIDogbnVsbFxuICAgIH1cbiAgfVxuXG4gIGFjY2Vzcyh0eXBlOiBzdHJpbmcsIGlkOiBzdHJpbmcpIHtcbiAgICB0eXBlID0gdHlwZSA9PT0gJ25vdGlmaWNhdGlvbnMnID8gJ2dlbmVyaWNOb3RpZmljYXRpb25zJyA6IHR5cGVcbiAgICByZXR1cm4gdGhpcy5zbmFwc2hvdD8uZW50aXRpZXM/Llt0eXBlXT8uZW50aXRpZXM/LltpZF0gPz8gbnVsbFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBzdG9yZSA9IG5ldyBYU3RhdGVTdG9yZSgpXG5cbi8qKlxuICogUmV0cmlldmVzIFJlYWN0LXNwZWNpZmljIHByb3BlcnRpZXMgZnJvbSBhbiBlbGVtZW50IGJ5XG4gKiBmaW5kaW5nIHRoZSBmaXJzdCBwcm9wZXJ0eSBzdGFydGluZyB3aXRoIFwiX19yZWFjdFByb3BzXCJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFhQcm9wcyhlbGVtZW50OiBIVE1MRWxlbWVudCB8IG51bGwpOiBhbnkge1xuICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgZm9yIChjb25zdCBwcm9wZXJ0eSBpbiBlbGVtZW50KSB7XG4gICAgICBpZiAocHJvcGVydHkuc3RhcnRzV2l0aCgnX19yZWFjdFByb3BzJykpIHtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnRbcHJvcGVydHkgYXMga2V5b2YgdHlwZW9mIGVsZW1lbnRdXG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBudWxsXG59XG4iLCIvKiBDb3B5cmlnaHQgKGMpIDIwMjQgVGhlIEJyYXZlIEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIGZpbGUsXG4gKiBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cHM6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy4gKi9cblxuaW1wb3J0IHsgbXNUb01pbnV0ZXNBbmRTZWNvbmRzIH0gZnJvbSAnLi91dGlscydcblxuLyoqXG4gKiBJbiB0aGlzIGNhc2UsIFwiQXR0YWNobWVudHNcIiByZWZlcnMgdG8gYW55IG9mIHRoZSBtZWRpYVxuICogZW50aXRpZXMgdGhhdCBhcmUgYXNzb2NpYXRlZCB3aXRoIHRoZSBwb3N0LlxuICogVE9ETyAoU2FtcHNvbik6IENvbnNpZGVyIGNvbWJpbmluZyBcImNhcmRzXCIgaW50byB0aGlzXG4gKiBjYXRlZ29yeSBhcyB3ZWxsLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZGlzdGlsbFBvc3RNZWRpYUVudGl0aWVzKHBvc3Q6IGFueSkge1xuICBjb25zdCBtZWRpYSA9IHBvc3QuZXh0ZW5kZWRfZW50aXRpZXMubWVkaWFcbiAgICAubWFwKChtZWRpYTogYW55KSA9PiB7XG4gICAgICBzd2l0Y2ggKG1lZGlhLnR5cGUpIHtcbiAgICAgICAgY2FzZSAncGhvdG8nOlxuICAgICAgICBjYXNlICd2aWRlbyc6XG4gICAgICAgIGNhc2UgJ2FuaW1hdGVkX2dpZic6XG4gICAgICAgICAgcmV0dXJuIGRpc3RpbGxQb3N0TWVkaWFFbnRpdHkobWVkaWEpXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgY29uc29sZS53YXJuKGBVbmhhbmRsZWQgbWVkaWEgdHlwZTogJHttZWRpYS50eXBlfWAsIG1lZGlhKVxuICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICB9XG4gICAgfSlcbiAgICAuZmlsdGVyKEJvb2xlYW4pXG4gICAgLmpvaW4oJ1xcbicpXG5cbiAgcmV0dXJuIG1lZGlhXG59XG5cbmZ1bmN0aW9uIGRpc3RpbGxQb3N0TWVkaWFFbnRpdHkobWVkaWE6IGFueSkge1xuICBjb25zdCB7IHR5cGUsIGV4cGFuZGVkX3VybDogZXhwYW5kZWRVUkwsIHZpZGVvX2luZm86IHZpZGVvSW5mbyB9ID0gbWVkaWFcblxuICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IG1lZGlhLm9yaWdpbmFsX2luZm8gPz8ge31cbiAgY29uc3QgeyBkdXJhdGlvbl9taWxsaXM6IGR1cmF0aW9uTWlsbGlzLCB2YXJpYW50cyB9ID0gdmlkZW9JbmZvID8/IHt9XG5cbiAgY29uc3QgbGFiZWxzID0ge1xuICAgIHBob3RvOiAnUGhvdG8nLFxuICAgIHZpZGVvOiAnVmlkZW8nLFxuICAgIGFuaW1hdGVkX2dpZjogJ0FuaW1hdGVkIEdJRicsXG4gIH0gYXMgUmVjb3JkPHN0cmluZywgc3RyaW5nPlxuXG4gIGNvbnN0IGRvd25sb2FkYWJsZVZhcmlhbnQgPSB2YXJpYW50cyAmJiBnZXREb3dubG9hZGFibGVWYXJpYW50KHZhcmlhbnRzKVxuICBjb25zdCBvdXRwdXQgPSBbYCAtIFR5cGU6ICR7bGFiZWxzW3R5cGVdID8/IHR5cGV9YF1cblxuICBpZiAod2lkdGggJiYgaGVpZ2h0KSBvdXRwdXQucHVzaChgIC0gRGltZW5zaW9uczogJHt3aWR0aH14JHtoZWlnaHR9YClcblxuICBpZiAoZHVyYXRpb25NaWxsaXMpXG4gICAgb3V0cHV0LnB1c2goYCAtIER1cmF0aW9uOiAke21zVG9NaW51dGVzQW5kU2Vjb25kcyhkdXJhdGlvbk1pbGxpcyl9c2ApXG5cbiAgaWYgKGV4cGFuZGVkVVJMKSBvdXRwdXQucHVzaChgIC0gVVJMOiAke2V4cGFuZGVkVVJMfWApXG5cbiAgaWYgKGRvd25sb2FkYWJsZVZhcmlhbnQpXG4gICAgb3V0cHV0LnB1c2goYCAtIERvd25sb2FkIFVSTDogJHtkb3dubG9hZGFibGVWYXJpYW50LnVybH1gKVxuXG4gIHJldHVybiBvdXRwdXQuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpXG59XG5cbmZ1bmN0aW9uIGdldERvd25sb2FkYWJsZVZhcmlhbnQodmFyaWFudHM6IGFueSkge1xuICByZXR1cm4gdmFyaWFudHMucmVkdWNlKChiZXN0OiBhbnksIHZhcmlhbnQ6IGFueSkgPT4ge1xuICAgIGlmICh2YXJpYW50LmNvbnRlbnRfdHlwZSA9PT0gJ3ZpZGVvL21wNCcpIHtcbiAgICAgIHJldHVybiBiZXN0ID09PSBudWxsIHx8IHZhcmlhbnQuYml0cmF0ZSA+IGJlc3QuYml0cmF0ZSA/IHZhcmlhbnQgOiBiZXN0XG4gICAgfVxuICAgIHJldHVybiBiZXN0XG4gIH0sIG51bGwpXG59XG5cbi8qKlxuICogV2Ugd2lsbCB1c2UgdGhpcyB0byByZXBsYWNlIHNob3J0ZW5lZCBVUkxzXG4gKiBpbiBib3RoIHR3ZWV0IGJvZGllcyBhbmQgcHJvZmlsZSBkZXNjcmlwdGlvbnMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleHBhbmRFbnRpdGllcyh0ZXh0OiBzdHJpbmcsIGVudGl0aWVzOiBhbnkpIHtcbiAgbGV0IG91dHB1dCA9IHRleHRcblxuICBmb3IgKGNvbnN0IG5hbWUgaW4gZW50aXRpZXMpIHtcbiAgICBpZiAoWydtZWRpYScsICd1cmxzJ10uaW5jbHVkZXMobmFtZSkpIHtcbiAgICAgIGZvciAoY29uc3QgeyB1cmwsIGV4cGFuZGVkX3VybDogeFVSTCB9IG9mIGVudGl0aWVzW25hbWVdKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBNZWRpYSBhdHRhY2htZW50cyBhcmUgYWxyZWFkeSBwcm9tb3RlZCB0byBhIHRvcC1sZXZlbFxuICAgICAgICAgKiBsaXN0aW5nLCBzbyB3ZSB3aWxsIHNpbXBseSByZW1vdmUgdGhlbSBhcyBpbmxpbmVcbiAgICAgICAgICogbWVudGlvbnMuIFVSTHMsIG9uIHRoZSBvdGhlciBoYW5kIHdpbGwgYmUgcmVwbGFjZWRcbiAgICAgICAgICogd2l0aCB0aGVpciBmdWxseS1leHBhbmRlZCB2YWx1ZS5cbiAgICAgICAgICovXG4gICAgICAgIG91dHB1dCA9IG91dHB1dC5yZXBsYWNlKHVybCwgbmFtZSA9PT0gJ21lZGlhJyA/ICcnIDogeFVSTClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gb3V0cHV0LnRyaW0oKVxufVxuIiwiLyogQ29weXJpZ2h0IChjKSAyMDI0IFRoZSBCcmF2ZSBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBmaWxlLFxuICogWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHBzOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uICovXG5cbmltcG9ydCB7IGdldERhdGVTdHJpbmcsIGlzU3RyaW5nLCBzaG9ydE51bWJlclN0cmluZyB9IGZyb20gJy4vdXRpbHMnXG5pbXBvcnQgeyBzdG9yZSB9IGZyb20gJy4vZGF0YSdcbmltcG9ydCB7IExFT19ESVNUSUxMQVRJT05fTEVWRUwgfSBmcm9tICcuLi9kaXN0aWxsYXRpb24nXG5pbXBvcnQgeyBleHBhbmRFbnRpdGllcyB9IGZyb20gJy4vZW50aXRpZXMnXG5pbXBvcnQgeyBnZXREaXN0aWxsYXRpb25MZXZlbCB9IGZyb20gJy4vZGlzdGlsbGVyJ1xuXG5jb25zdCBTZWVuVXNlcnNTZXQgPSBuZXcgU2V0PGFueT4oKVxuY29uc3QgVXNlclNpZ25hdHVyZXMgPSBuZXcgTWFwPHN0cmluZywgc3RyaW5nPigpXG5cbi8qKlxuICogR2VuZXJhdGVzIGEgZm9ybWF0dGVkIHNpZ25hdHVyZSBzdHJpbmcgZm9yIGEgdXNlcixcbiAqIGNvbnNpZGVyaW5nIGRpZmZlcmVudCBwb3NzaWJsZSByZXByZXNlbnRhdGlvbnMgKG5hbWUsXG4gKiBzY3JlZW4gbmFtZSwgb3IgSUQpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0VXNlclNpZ25hdHVyZSh1c2VyOiBhbnkpIHtcbiAgaWYgKGlzU3RyaW5nKHVzZXIpIHx8IE51bWJlci5pc0ludGVnZXIodXNlcikpIHtcbiAgICB1c2VyID0gc3RvcmUuYWNjZXNzKCd1c2VycycsIHVzZXIpXG4gIH1cblxuICBTZWVuVXNlcnNTZXQuYWRkKHVzZXIpXG5cbiAgY29uc3QgeyBuYW1lLCBzY3JlZW5fbmFtZTogc2NyZWVuTmFtZSwgaWRfc3RyOiBpZFN0ciB9ID0gdXNlciA/PyB7fVxuXG4gIC8qKlxuICAgKiBJZiB3ZSBoYXZlIGFscmVhZHkgY3JlYXRlZCBhIHNpZ25hdHVyZSBmb3IgdGhpcyB1c2VyLCB3ZSB3aWxsXG4gICAqIGluc3RlYWQgcmV0dXJuIGp1c3QgdGhlaXIgc2NyZWVuIG5hbWUuIFRoZSB2ZXJib3NlIHNpZ25hdHVyZSBpc1xuICAgKiBhbHJlYWR5IHByZXNlbnQgaW4gdGhlIGRvY3VtZW50LCBzbyBvbmx5IHRoZSBzaG9ydGVyIHZlcnNpb25cbiAgICogc2hvdWxkIHN1ZmZpY2UgKGFuZCBzYXZlIHVzIHNvbWUgY2hhcnMpLlxuICAgKi9cbiAgaWYgKFxuICAgIFVzZXJTaWduYXR1cmVzLmhhcyhpZFN0cilcbiAgICB8fCBnZXREaXN0aWxsYXRpb25MZXZlbCgpID09PSBMRU9fRElTVElMTEFUSU9OX0xFVkVMLkxPV1xuICApIHtcbiAgICByZXR1cm4gaXNTdHJpbmcoc2NyZWVuTmFtZSkgPyBgQCR7c2NyZWVuTmFtZX1gIDogJ0Fub255b3VzJ1xuICB9XG5cbiAgaWYgKGlzU3RyaW5nKHNjcmVlbk5hbWUpKSB7XG4gICAgY29uc3Qgc2lnbmF0dXJlID0gaXNTdHJpbmcobmFtZSlcbiAgICAgID8gYCR7bmFtZX0gPEAke3NjcmVlbk5hbWV9PmBcbiAgICAgIDogYEAke3NjcmVlbk5hbWV9YFxuXG4gICAgVXNlclNpZ25hdHVyZXMuc2V0KGlkU3RyLCBzaWduYXR1cmUpXG5cbiAgICByZXR1cm4gc2lnbmF0dXJlXG4gIH1cblxuICByZXR1cm4gaWRTdHIgPyBgVXNlciAjJHtpZFN0cn1gIDogJ1Vua25vd24gVXNlcidcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3RpbGxTZWVuVXNlcnMobGV2ZWwgPSBMRU9fRElTVElMTEFUSU9OX0xFVkVMLk1FRElVTSkge1xuICBzd2l0Y2ggKGxldmVsKSB7XG4gICAgY2FzZSBMRU9fRElTVElMTEFUSU9OX0xFVkVMLkxPVzpcbiAgICAgIHJldHVybiBkaXN0aWxsTG93U2VlblVzZXJzKClcbiAgICBjYXNlIExFT19ESVNUSUxMQVRJT05fTEVWRUwuTUVESVVNOlxuICAgIGNhc2UgTEVPX0RJU1RJTExBVElPTl9MRVZFTC5ISUdIOlxuICAgIGNhc2UgTEVPX0RJU1RJTExBVElPTl9MRVZFTC5GVUxMOlxuICAgICAgcmV0dXJuIGRpc3RpbGxNZWRpdW1IaWdoU2VlblVzZXJzKClcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIG51bGxcbiAgfVxufVxuXG5mdW5jdGlvbiBkaXN0aWxsTG93U2VlblVzZXJzKCkge1xuICBjb25zdCBvdXRwdXQgPSBbXSBhcyBzdHJpbmdbXVxuXG4gIGZvciAoY29uc3QgdXNlciBvZiBTZWVuVXNlcnNTZXQpIHtcbiAgICBpZiAodHlwZW9mIHVzZXIuY3JlYXRlZF9hdCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgY29uc3QgZm9sbG93ZXJzID0gc2hvcnROdW1iZXJTdHJpbmcodXNlci5mb2xsb3dlcnNfY291bnQpXG4gICAgY29uc3QgbWVtYmVyU2luY2UgPSBnZXREYXRlU3RyaW5nKHVzZXIuY3JlYXRlZF9hdClcblxuICAgIGNvbnN0IGVudHJ5ID0gW1xuICAgICAgYEAke3VzZXIuc2NyZWVuX25hbWV9JHtpc1VzZXJWZXJpZmllZCh1c2VyKSA/ICcgW1ZlcmlmaWVkXScgOiAnJ31gLFxuICAgICAgYCAtIEpvaW5lZDogJHttZW1iZXJTaW5jZX1gLFxuICAgICAgYCAtIEZvbGxvd2VyczogJHtmb2xsb3dlcnN9YCxcbiAgICBdLmpvaW4oJ1xcbicpXG5cbiAgICBvdXRwdXQucHVzaChlbnRyeSlcbiAgfVxuXG4gIHJldHVybiBvdXRwdXQuam9pbignXFxuXFxuJylcbn1cblxuZnVuY3Rpb24gaXNVc2VyVmVyaWZpZWQodXNlcjogYW55KTogYm9vbGVhbiB7XG4gIHJldHVybiAoXG4gICAgdXNlci52ZXJpZmllZFxuICAgIHx8IHVzZXIuaXNfYmx1ZV92ZXJpZmllZFxuICAgIHx8IHVzZXIucHJvZmVzc2lvbmFsXG4gICAgfHwgdXNlci52ZXJpZmllZF90eXBlXG4gIClcbn1cblxuZnVuY3Rpb24gZGlzdGlsbE1lZGl1bUhpZ2hTZWVuVXNlcnMoKSB7XG4gIGNvbnN0IG91dHB1dCA9IFtdIGFzIHN0cmluZ1tdXG5cbiAgZm9yIChjb25zdCB1c2VyIG9mIFNlZW5Vc2Vyc1NldCkge1xuICAgIGlmICh0eXBlb2YgdXNlci5jcmVhdGVkX2F0ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBjb25zdCBtZW1iZXJTaW5jZSA9IGdldERhdGVTdHJpbmcodXNlci5jcmVhdGVkX2F0KVxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID1cbiAgICAgIHVzZXIuZGVzY3JpcHRpb25cbiAgICAgICYmIGV4cGFuZEVudGl0aWVzKHVzZXIuZGVzY3JpcHRpb24sIHVzZXIuZW50aXRpZXMuZGVzY3JpcHRpb24pXG5cbiAgICBjb25zdCBmb2xsb3dlcnNTdHIgPSB1c2VyLmZvbGxvd2Vyc19jb3VudC50b0xvY2FsZVN0cmluZygpXG4gICAgY29uc3QgZm9sbG93aW5nU3RyID0gdXNlci5mcmllbmRzX2NvdW50LnRvTG9jYWxlU3RyaW5nKClcblxuICAgIGNvbnN0IGVudHJ5ID0gW1xuICAgICAgYCoqJHt1c2VyLm5hbWV9KipgLFxuICAgICAgYCAtIFVzZXJuYW1lOiBAJHt1c2VyLnNjcmVlbl9uYW1lfWAsXG4gICAgICBgIC0gVmVyaWZpZWQ6ICR7aXNVc2VyVmVyaWZpZWQodXNlcikgPyAnWWVzJyA6ICdObyd9YCxcbiAgICAgIGAgLSBGb2xsb3dlcnM6ICR7Zm9sbG93ZXJzU3RyfSB8IEZvbGxvd2luZzogJHtmb2xsb3dpbmdTdHJ9YCxcbiAgICAgIGAgLSBNZW1iZXIgU2luY2U6ICR7bWVtYmVyU2luY2V9YCxcbiAgICAgIGRlc2NyaXB0aW9uICYmIFtgIC0gRGVzY3JpcHRpb246ICR7ZGVzY3JpcHRpb259YF0sXG4gICAgXVxuICAgICAgLmZpbHRlcihCb29sZWFuKVxuICAgICAgLmpvaW4oJ1xcbicpXG5cbiAgICBvdXRwdXQucHVzaChlbnRyeSlcbiAgfVxuXG4gIHJldHVybiBvdXRwdXQuam9pbignXFxuXFxuJylcbn1cbiIsIi8qIENvcHlyaWdodCAoYykgMjAyNCBUaGUgQnJhdmUgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXMgZmlsZSxcbiAqIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwczovL21vemlsbGEub3JnL01QTC8yLjAvLiAqL1xuXG5pbXBvcnQgeyBnZXRYUHJvcHMsIHN0b3JlIH0gZnJvbSAnLi9kYXRhJ1xuaW1wb3J0IHsgZ2V0VXNlclNpZ25hdHVyZSB9IGZyb20gJy4vdXNlcidcbmltcG9ydCB7IHdyYXBMaW5lcyB9IGZyb20gJy4vdXRpbHMnXG5cbmV4cG9ydCBmdW5jdGlvbiBkaXN0aWxsTm90aWZpY2F0aW9uRWxlbWVudChlbGVtZW50OiBIVE1MRWxlbWVudCkge1xuICBjb25zdCBub3RpZmljYXRpb25YUHJvcHMgPSBnZXRYUHJvcHMoZWxlbWVudC5wYXJlbnRFbGVtZW50KVxuICBjb25zdCBub3RpZmljYXRpb25JZCA9IG5vdGlmaWNhdGlvblhQcm9wcz8uY2hpbGRyZW4/LnByb3BzPy5lbnRyeT8uY29udGVudD8uaWRcbiAgY29uc3Qgbm90aWZpY2F0aW9uVVJMID1cbiAgICBub3RpZmljYXRpb25YUHJvcHM/LmNoaWxkcmVuPy5wcm9wcz8uZW50cnk/LmNvbnRlbnQ/LnVybD8udXJsXG4gIGNvbnN0IG5vdGlmaWNhdGlvbkRhdGEgPSBzdG9yZS5hY2Nlc3MoJ25vdGlmaWNhdGlvbnMnLCBub3RpZmljYXRpb25JZClcblxuICBjb25zdCBkaXN0aWxsZWQ6IEFycmF5PHN0cmluZyB8IG51bGw+ID0gW11cblxuICBpZiAobm90aWZpY2F0aW9uRGF0YSkge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBkaXN0aWxsTm90aWZpY2F0aW9uRGF0YShub3RpZmljYXRpb25EYXRhKVxuICAgIGRpc3RpbGxlZC5wdXNoKFxuICAgICAgbWVzc2FnZSAmJiBgTm90aWZpY2F0aW9uOiAke21lc3NhZ2V9YCxcbiAgICAgIG5vdGlmaWNhdGlvblVSTCAmJiBgVVJMOiAke25vdGlmaWNhdGlvblVSTH1gLFxuICAgIClcbiAgfVxuXG4gIHJldHVybiBkaXN0aWxsZWQuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpXG59XG5cbmZ1bmN0aW9uIGRpc3RpbGxOb3RpZmljYXRpb25EYXRhKG5vdGlmaWNhdGlvbjogYW55KSB7XG4gIC8vIFRPRE8gKFNhbXBzb24pOiBQb3NzaWJseSBoYW5kbGUgb3RoZXIgbm90aWZpY2F0aW9uIHRlbXBsYXRlc1xuICBpZiAobm90aWZpY2F0aW9uLnRlbXBsYXRlPy5hZ2dyZWdhdGVVc2VyQWN0aW9uc1YxKSB7XG4gICAgcmV0dXJuIGRpc3RpbGxOb3RpZmljYXRpb25EYXRhQWdncmVnYXRlVXNlckFjdGlvbnNWMShub3RpZmljYXRpb24pXG4gIH1cbiAgcmV0dXJuIG51bGxcbn1cblxuZnVuY3Rpb24gZGlzdGlsbE5vdGlmaWNhdGlvbkRhdGFBZ2dyZWdhdGVVc2VyQWN0aW9uc1YxKG5vdGlmaWNhdGlvbjogYW55KSB7XG4gIGNvbnN0IHtcbiAgICBtZXNzYWdlOiB7IHRleHQsIGVudGl0aWVzIH0sXG4gICAgdGVtcGxhdGU6IHsgYWdncmVnYXRlVXNlckFjdGlvbnNWMSB9LFxuICB9ID0gbm90aWZpY2F0aW9uXG5cbiAgbGV0IGRpc3RpbGxlZDogc3RyaW5nID0gdGV4dFxuXG4gIGlmIChlbnRpdGllcy5sZW5ndGggPiAwKSB7XG4gICAgLyoqXG4gICAgICogV2FsayB0aHJvdWdoIHRoZSBlbnRpdGllcyBpbiByZXZlcnNlIG9yZGVyIHNvIGFzIG5vdCB0byBjYXVzZVxuICAgICAqIGlzc3VlcyB3aXRoIGluZGV4ZXMgYXMgd2UgbW9kaWZ5IHRoZSBzdHJpbmcuXG4gICAgICogVE9ETyAoU2FtcHNvbik6IEluZGV4ZXMgZG8gbm90IGFjY291bnQgZm9yIGNvZGUgcG9pbnRzLCBzbyB0aGlzXG4gICAgICogY291bGQgcG90ZW50aWFsbHkgY2F1c2UgaXNzdWVzIHdpdGggbXVsdGktYnl0ZSBjaGFyYWN0ZXJzLiBXZSdsbFxuICAgICAqIG5lZWQgdG8gcmV2aXNpdCB0aGlzIHRvIG1ha2Ugc3VyZSBzaWduYXR1cmVzIHdpdGggZW1vamlzIGFyZVxuICAgICAqIGhhbmRsZWQgY29ycmVjdGx5LlxuICAgICAqL1xuICAgIGZvciAobGV0IGkgPSBlbnRpdGllcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgY29uc3QgeyBmcm9tSW5kZXgsIHRvSW5kZXgsIGZvcm1hdCwgcmVmIH0gPSBlbnRpdGllc1tpXVxuXG4gICAgICBpZiAodHlwZW9mIGZvcm1hdCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgaWYgKGZvcm1hdC50b0xvd2VyQ2FzZSgpID09PSAnc3Ryb25nJykge1xuICAgICAgICAgIC8vIFdlJ2xsIGNvbnZlcnQgc3Ryb25nIHRleHQgdG8gdXBwZXJjYXNlXG4gICAgICAgICAgY29uc3Qgc3Ryb25nID0gZGlzdGlsbGVkLnNsaWNlKGZyb21JbmRleCwgdG9JbmRleCkudG9VcHBlckNhc2UoKVxuICAgICAgICAgIGNvbnN0IGZyb250ID0gZGlzdGlsbGVkLnNsaWNlKDAsIGZyb21JbmRleClcbiAgICAgICAgICBjb25zdCBiYWNrID0gZGlzdGlsbGVkLnNsaWNlKHRvSW5kZXgpXG4gICAgICAgICAgZGlzdGlsbGVkID0gZnJvbnQgKyBzdHJvbmcgKyBiYWNrXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKGBVbmhhbmRsZWQgZm9ybWF0OiAke2Zvcm1hdH1gKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWYpIHtcbiAgICAgICAgaWYgKHJlZi51c2VyKSB7XG4gICAgICAgICAgY29uc3QgdXNlciA9IHN0b3JlLmFjY2VzcygndXNlcnMnLCByZWYudXNlci5pZClcbiAgICAgICAgICBpZiAodXNlcikge1xuICAgICAgICAgICAgY29uc3Qgc2lnbmF0dXJlID0gZ2V0VXNlclNpZ25hdHVyZSh1c2VyKVxuICAgICAgICAgICAgY29uc3QgZnJvbnQgPSBkaXN0aWxsZWQuc2xpY2UoMCwgZnJvbUluZGV4KVxuICAgICAgICAgICAgY29uc3QgYmFjayA9IGRpc3RpbGxlZC5zbGljZSh0b0luZGV4KVxuICAgICAgICAgICAgZGlzdGlsbGVkID0gZnJvbnQgKyBzaWduYXR1cmUgKyBiYWNrXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUud2FybihgVW5oYW5kbGVkIHJlZjogJHtyZWZ9YClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBGb3Igbm93IHdlJ2xsIGp1c3QgcHVsbCBpbiB0aGUgdGV4dCBvZiB0aGUgZmlyc3QgYXNzb2NpYXRlZCBwb3N0IChpZiBhbnkpLlxuICAgKi9cbiAgaWYgKGFnZ3JlZ2F0ZVVzZXJBY3Rpb25zVjEudGFyZ2V0T2JqZWN0cz8ubGVuZ3RoID4gMCkge1xuICAgIGNvbnN0IGZpcnN0ID0gYWdncmVnYXRlVXNlckFjdGlvbnNWMS50YXJnZXRPYmplY3RzWzBdXG4gICAgaWYgKGZpcnN0LnR3ZWV0KSB7XG4gICAgICBjb25zdCB0d2VldCA9IHN0b3JlLmFjY2VzcygndHdlZXRzJywgZmlyc3QudHdlZXQpXG4gICAgICBpZiAodHdlZXQpIHtcbiAgICAgICAgY29uc3QgdGV4dCA9IHdyYXBMaW5lcyh0d2VldC5mdWxsX3RleHQpXG4gICAgICAgIGlmICh0ZXh0KSB7XG4gICAgICAgICAgZGlzdGlsbGVkICs9IGBcXG5cXG5cIiR7dGV4dH1cImBcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkaXN0aWxsZWRcbn1cbiIsIi8qIENvcHlyaWdodCAoYykgMjAyNCBUaGUgQnJhdmUgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXMgZmlsZSxcbiAqIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwczovL21vemlsbGEub3JnL01QTC8yLjAvLiAqL1xuXG5pbXBvcnQgeyBzdG9yZSB9IGZyb20gJy4vZGF0YSdcbmltcG9ydCB7IGdldFVzZXJTaWduYXR1cmUgfSBmcm9tICcuL3VzZXInXG5cbmV4cG9ydCBmdW5jdGlvbiBkaXN0aWxsQ2FyZChwb3N0OiBhbnkpIHtcbiAgY29uc3QgY2FyZCA9IHN0b3JlLmFjY2VzcygnY2FyZHMnLCBwb3N0LmNhcmQpXG4gIGlmIChjYXJkKSB7XG4gICAgY29uc3QgdGl0bGUgPSBjYXJkLmJpbmRpbmdfdmFsdWVzLnRpdGxlXG4gICAgY29uc3QgY2FyZFVSTCA9IGNhcmQuYmluZGluZ192YWx1ZXMuY2FyZF91cmxcbiAgICBjb25zdCB1bmlmaWVkQ2FyZCA9IGNhcmQuYmluZGluZ192YWx1ZXMudW5pZmllZF9jYXJkXG4gICAgY29uc3QgaG9zdCA9IGNhcmQuYmluZGluZ192YWx1ZXMuZG9tYWluXG4gICAgY29uc3QgZGVzYyA9IGNhcmQuYmluZGluZ192YWx1ZXMuZGVzY3JpcHRpb25cblxuICAgIGlmIChjYXJkLm5hbWUuZW5kc1dpdGgoJ2F1ZGlvc3BhY2UnKSkge1xuICAgICAgLyogTm90IEltcGxlbWVudGVkICovXG4gICAgICByZXR1cm4gbnVsbFxuICAgIH0gZWxzZSBpZiAoY2FyZC5uYW1lID09PSAndW5pZmllZF9jYXJkJyAmJiB1bmlmaWVkQ2FyZCkge1xuICAgICAgcmV0dXJuIGRpc3RpbGxVbmlmaWVkQ2FyZCh1bmlmaWVkQ2FyZClcbiAgICB9XG5cbiAgICByZXR1cm4gW1xuICAgICAgJ1Jlc291cmNlOicsXG4gICAgICB0aXRsZSA/IGAgLSBUaXRsZTogXCIke3RpdGxlLnN0cmluZ192YWx1ZX1cImAgOiBudWxsLFxuICAgICAgaG9zdCAmJiBjYXJkVVJMXG4gICAgICAgID8gYCAtIEFkZHJlc3M6IFske2hvc3Quc3RyaW5nX3ZhbHVlfV0oJHtjYXJkVVJMLnN0cmluZ192YWx1ZX0pYFxuICAgICAgICA6IG51bGwsXG4gICAgICBkZXNjID8gYCAtIERlc2NyaXB0aW9uOiBcIiR7ZGVzYy5zdHJpbmdfdmFsdWV9XCJgIDogbnVsbCxcbiAgICBdXG4gICAgICAuZmlsdGVyKEJvb2xlYW4pXG4gICAgICAuam9pbignXFxuJylcbiAgfVxuICByZXR1cm4gbnVsbFxufVxuXG5mdW5jdGlvbiBkaXN0aWxsVW5pZmllZENhcmQoY2FyZFN0cmluZzogYW55KSB7XG4gIGNvbnN0IGNhcmQgPSBKU09OLnBhcnNlKGNhcmRTdHJpbmcuc3RyaW5nX3ZhbHVlKVxuICByZXR1cm4gZGlzdGlsbFVuaWZpZWRDYXJkQ29tcG9uZW50cyhjYXJkKVxufVxuXG5mdW5jdGlvbiBkaXN0aWxsVW5pZmllZENhcmRDb21wb25lbnRzKGNhcmQ6IGFueSkge1xuICByZXR1cm4gY2FyZC5jb21wb25lbnRzXG4gICAgLm1hcCgoa2V5OiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGNhcmQuY29tcG9uZW50X29iamVjdHNba2V5XVxuXG4gICAgICBzd2l0Y2ggKGNvbXBvbmVudC50eXBlKSB7XG4gICAgICAgIGNhc2UgJ21lZGlhJzpcbiAgICAgICAgICByZXR1cm4gZGlzdGlsbFVuaWZpZWRDYXJkTWVkaWEoY29tcG9uZW50LCBjYXJkKVxuICAgICAgICBjYXNlICdncm9rX3NoYXJlJzpcbiAgICAgICAgICByZXR1cm4gZGlzdGlsbFVuaWZpZWRDYXJkR3Jva1NoYXJlKGNvbXBvbmVudCwgY2FyZClcbiAgICAgICAgY2FzZSAnY29tbXVuaXR5X2RldGFpbHMnOlxuICAgICAgICAgIHJldHVybiBkaXN0aWxsVW5pZmllZENhcmRDb21tdW5pdHlEZXRhaWxzKGNvbXBvbmVudCwgY2FyZClcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgfVxuICAgIH0pXG4gICAgLmZpbHRlcihCb29sZWFuKVxuICAgIC5qb2luKCdcXG4nKVxufVxuXG5mdW5jdGlvbiBkaXN0aWxsVW5pZmllZENhcmRNZWRpYShjb21wb25lbnQ6IGFueSwgY2FyZDogYW55KSB7XG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IGlkIH0sXG4gIH0gPSBjb21wb25lbnRcbiAgY29uc3Qge1xuICAgIHR5cGUsXG4gICAgb3JpZ2luYWxfaW5mbzogeyB3aWR0aCwgaGVpZ2h0IH0sXG4gIH0gPSBjYXJkLm1lZGlhX2VudGl0aWVzW2lkXVxuXG4gIGlmICh0eXBlICE9PSAncGhvdG8nKSB7XG4gICAgLyoqXG4gICAgICogVE9ETyAoU2FtcHNvbik6IEhhbmRsZSBvdGhlciBtZWRpYSB0eXBlc1xuICAgICAqL1xuICAgIGNvbnNvbGUud2FybihgVW5oYW5kbGVkIG1lZGlhIHR5cGU6ICR7dHlwZX1gLCBjYXJkLm1lZGlhX2VudGl0aWVzW2lkXSlcbiAgfVxuICByZXR1cm4gWydNZWRpYTonLCBgIC0gVHlwZTogJHt0eXBlfWAsIGAgLSBEaW1lbnNpb25zOiAke3dpZHRofXgke2hlaWdodH1gXVxuICAgIC5maWx0ZXIoQm9vbGVhbilcbiAgICAuam9pbignXFxuJylcbn1cblxudHlwZSBDb252b0VudHJ5ID0ge1xuICBzZW5kZXI6ICdVU0VSJyB8ICdBR0VOVCdcbiAgZ3Jva01vZGU6ICdOT1JNQUwnIHwgJ0ZVTidcbiAgbWVzc2FnZTogc3RyaW5nXG59XG5cbmZ1bmN0aW9uIGRpc3RpbGxVbmlmaWVkQ2FyZEdyb2tTaGFyZShjb21wb25lbnQ6IGFueSwgY2FyZDogYW55KSB7XG4gIGNvbnN0IGNvbnZlcnNhdGlvblByZXZpZXcgPSBjb21wb25lbnQuZGF0YS5jb252ZXJzYXRpb25fcHJldmlld1xuICBjb25zdCBkZXN0aW5hdGlvbiA9IGNvbXBvbmVudC5kYXRhLmRlc3RpbmF0aW9uXG4gIGNvbnN0IGdyb2tVc2VyID0gY29tcG9uZW50LmRhdGEuZ3Jva191c2VyXG4gIGNvbnN0IHByb2ZpbGVVc2VyID0gY29tcG9uZW50LmRhdGEucHJvZmlsZV91c2VyXG4gIGNvbnN0IHVybERhdGEgPSBjYXJkLmRlc3RpbmF0aW9uX29iamVjdHNbZGVzdGluYXRpb25dLmRhdGEudXJsX2RhdGFcbiAgY29uc3QgZ3Jva1NpZyA9IGdldFVzZXJTaWduYXR1cmUoZ3Jva1VzZXIpXG4gIGNvbnN0IHVzZXJTaWcgPSBnZXRVc2VyU2lnbmF0dXJlKHByb2ZpbGVVc2VyKVxuXG4gIGNvbnN0IGNvbnZlcnNhdGlvbiA9IGNvbnZlcnNhdGlvblByZXZpZXcubWFwKChlbnRyeTogQ29udm9FbnRyeSkgPT4ge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBlbnRyeS5tZXNzYWdlXG4gICAgY29uc3Qgc2lnbmF0dXJlID0gZW50cnkuc2VuZGVyID09PSAnVVNFUicgPyB1c2VyU2lnIDogZ3Jva1NpZ1xuICAgIHJldHVybiBgJHtzaWduYXR1cmV9OiAke21lc3NhZ2V9XFxuYFxuICB9KVxuXG4gIGNvbnZlcnNhdGlvbi5wdXNoKGBVUkw6ICR7dXJsRGF0YS51cmx9YClcblxuICByZXR1cm4gY29udmVyc2F0aW9uLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKVxufVxuXG5mdW5jdGlvbiBkaXN0aWxsVW5pZmllZENhcmRDb21tdW5pdHlEZXRhaWxzKGNvbXBvbmVudDogYW55LCBjYXJkOiBhbnkpIHtcbiAgY29uc3Qge1xuICAgIGRhdGE6IHtcbiAgICAgIGRlc3RpbmF0aW9uLFxuICAgICAgbWVtYmVyX2NvdW50OiBtZW1iZXJDb3VudCxcbiAgICAgIG1lbWJlcnNfZmFjZXBpbGU6IG1lbWJlcnNGYWNlcGlsZSxcbiAgICAgIG5hbWUsXG4gICAgfSxcbiAgfSA9IGNvbXBvbmVudFxuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVybF9kYXRhOiB1cmxEYXRhIH0sXG4gIH0gPSBjYXJkLmRlc3RpbmF0aW9uX29iamVjdHNbZGVzdGluYXRpb25dXG5cbiAgY29uc3QgZmFjZXBpbGVTaWduYXR1cmVzID0gbWVtYmVyc0ZhY2VwaWxlXG4gICAgLm1hcCgoaWQ6IHN0cmluZykgPT4ge1xuICAgICAgcmV0dXJuIGdldFVzZXJTaWduYXR1cmUoY2FyZCgndXNlcnMnKVtpZF0pIHx8IG51bGxcbiAgICB9KVxuICAgIC5maWx0ZXIoQm9vbGVhbilcblxuICBjb25zdCBjb3VudCA9IG1lbWJlckNvdW50IC0gZmFjZXBpbGVTaWduYXR1cmVzLmxlbmd0aFxuXG4gIHJldHVybiBbXG4gICAgJ0NvbW11bml0eTonLFxuICAgIGAgLSBOYW1lOiAke25hbWV9YCxcbiAgICBgIC0gTWVtYmVyczogJHtmYWNlcGlsZVNpZ25hdHVyZXMuam9pbignLCAnKX0sIGFuZCAke2NvdW50fSBvdGhlcnNgLFxuICAgIGAgLSBVUkw6ICR7dXJsRGF0YS51cmx9YCxcbiAgXVxuICAgIC5maWx0ZXIoQm9vbGVhbilcbiAgICAuam9pbignXFxuJylcbn1cbiIsIi8qIENvcHlyaWdodCAoYykgMjAyNCBUaGUgQnJhdmUgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXMgZmlsZSxcbiAqIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwczovL21vemlsbGEub3JnL01QTC8yLjAvLiAqL1xuXG5pbXBvcnQgeyBnZXRYUHJvcHMsIHN0b3JlIH0gZnJvbSAnLi9kYXRhJ1xuaW1wb3J0IHsgZ2V0VXNlclNpZ25hdHVyZSB9IGZyb20gJy4vdXNlcidcbmltcG9ydCB7XG4gIGluZGVudExpbmVzLFxuICB3cmFwTGluZXMsXG4gIGlzU3RyaW5nLFxuICBkZWNvZGVIVE1MU3BlY2lhbENoYXJzLFxuICBnZXREYXRlU3RyaW5nLFxufSBmcm9tICcuL3V0aWxzJ1xuaW1wb3J0IHsgZGlzdGlsbENhcmQgfSBmcm9tICcuL2NhcmRzJ1xuaW1wb3J0IHsgZGlzdGlsbFBvc3RNZWRpYUVudGl0aWVzIH0gZnJvbSAnLi9lbnRpdGllcydcbmltcG9ydCB7IGdldERpc3RpbGxhdGlvbkxldmVsIH0gZnJvbSAnLi9kaXN0aWxsZXInXG5pbXBvcnQgeyBMRU9fRElTVElMTEFUSU9OX0xFVkVMIH0gZnJvbSAnLi4vZGlzdGlsbGF0aW9uJ1xuXG4vKipcbiAqIEdlbmVyYXRlcyBhIGxpc3Qgb2YgZm9ybWF0dGVkIG1ldHJpY3MgKGxpa2UgTGlrZXMsXG4gKiBRdW90ZXMsIFJlcGxpZXMpIGZvciBhIGdpdmVuIHR3ZWV0LCBjb25zaWRlcmluZyB0aGVcbiAqIHBsdXJhbGl0eSBvZiB2YWx1ZXMuXG4gKiBUT0RPIChTYW1wc29uKTogQ29tZSBiYWNrIGFuZCBkZWZpbmUgc29tZSB0eXBlcywgc3VjaFxuICogYXMgdGhlIGBwb3N0YCBwYXJhbWV0ZXIuXG4gKi9cbmZ1bmN0aW9uIGdldFBvc3RNZXRyaWNzKHBvc3Q6IGFueSkge1xuICBjb25zdCBtZXRyaWNzID0gW1xuICAgIHsga2V5OiAnZmF2b3JpdGUnLCBzaW5ndWxhcjogJ0xpa2UnLCBwbHVyYWw6ICdMaWtlcycgfSxcbiAgICB7IGtleTogJ3F1b3RlJywgc2luZ3VsYXI6ICdRdW90ZScsIHBsdXJhbDogJ1F1b3RlcycgfSxcbiAgICB7IGtleTogJ3JlcGx5Jywgc2luZ3VsYXI6ICdSZXBseScsIHBsdXJhbDogJ1JlcGxpZXMnIH0sXG4gICAgeyBrZXk6ICdyZXR3ZWV0Jywgc2luZ3VsYXI6ICdSZXBvc3QnLCBwbHVyYWw6ICdSZXBvc3RzJyB9LFxuICAgIHsga2V5OiAnYm9va21hcmsnLCBzaW5ndWxhcjogJ0Jvb2ttYXJrJywgcGx1cmFsOiAnQm9va21hcmtzJyB9LFxuICBdXG5cbiAgLyoqXG4gICAqIFggaXMgbm93IGNvbWJpbmluZyB0aGVzZSB0d28gbWV0cmljcyBpbnRvIGEgc2luZ2xlIHZhbHVlLlxuICAgKiBUbyBrZWVwIHRoZSBvdXRwdXQgY29uc2lzdGVudCwgd2UnbGwgZG8gdGhlIHNhbWUgaGVyZS5cbiAgICovXG4gIGxldCBwcm9jZXNzZWRRdW90ZXNBbmRSZXBvc3RzID0gZmFsc2VcblxuICByZXR1cm4gbWV0cmljc1xuICAgIC5tYXAoKHsga2V5LCBzaW5ndWxhciwgcGx1cmFsIH0pID0+IHtcbiAgICAgIGNvbnN0IHByb3BLZXkgPSBgJHtrZXl9X2NvdW50YFxuICAgICAgY29uc3QgcHJvcFZhbHVlID0gcG9zdFtwcm9wS2V5XVxuXG4gICAgICBpZiAocHJvcFZhbHVlID09PSB1bmRlZmluZWQpIHJldHVybiBudWxsXG5cbiAgICAgIC8qKlxuICAgICAgICogV2Ugd29uJ3QgaW5jbHVkZSB6ZXJvIHZhbHVlcyBmb3IgbG93IGRpc3RpbGxhdGlvblxuICAgICAgICovXG4gICAgICBpZiAoZ2V0RGlzdGlsbGF0aW9uTGV2ZWwoKSA9PT0gTEVPX0RJU1RJTExBVElPTl9MRVZFTC5MT1cpIHtcbiAgICAgICAgaWYgKHBhcnNlSW50KHByb3BWYWx1ZSkgPT09IDApIHJldHVybiBudWxsXG4gICAgICB9XG5cbiAgICAgIGlmIChbJ3F1b3RlJywgJ3JldHdlZXQnXS5pbmNsdWRlcyhrZXkpICYmICFwcm9jZXNzZWRRdW90ZXNBbmRSZXBvc3RzKSB7XG4gICAgICAgIHByb2Nlc3NlZFF1b3Rlc0FuZFJlcG9zdHMgPSB0cnVlXG5cbiAgICAgICAgY29uc3QgY29tYmluZWRWYWx1ZSA9XG4gICAgICAgICAgKHBvc3QucXVvdGVfY29udGVudCA/PyAwKSArIChwb3N0LnJldHdlZXRfY291bnQgPz8gMClcbiAgICAgICAgY29uc3QgbGFiZWwgPSBjb21iaW5lZFZhbHVlID09PSAxID8gJ1F1b3RlL1JlcG9zdCcgOiAnUXVvdGVzL1JlcG9zdHMnXG5cbiAgICAgICAgcmV0dXJuIGAke2NvbWJpbmVkVmFsdWUudG9Mb2NhbGVTdHJpbmcoKX0gJHtsYWJlbH1gXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBsYWJlbCA9IHByb3BWYWx1ZSA9PT0gMSA/IHNpbmd1bGFyIDogcGx1cmFsXG4gICAgICAgIHJldHVybiBgJHtwcm9wVmFsdWUudG9Mb2NhbGVTdHJpbmcoKX0gJHtsYWJlbH1gXG4gICAgICB9XG4gICAgfSlcbiAgICAuZmlsdGVyKEJvb2xlYW4pXG59XG5cbi8qKlxuICogRXh0cmFjdHMgcG9zdCBkYXRhIGZyb20gYSBET00gZWxlbWVudCBhbmQgZGlzdGlsbHNcbiAqIGl0IGludG8gYSBmb3JtYXR0ZWQgb3V0cHV0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gZGlzdGlsbFBvc3RFbGVtZW50KGVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XG4gIGNvbnN0IHBvc3RYUHJvcHMgPSBnZXRYUHJvcHMoZWxlbWVudC5wYXJlbnRFbGVtZW50KVxuICBjb25zdCBwb3N0SUQgPSBwb3N0WFByb3BzPy5jaGlsZHJlbj8ucHJvcHM/LmVudHJ5Py5jb250ZW50Py5pZFxuICBjb25zdCBwb3N0RGF0YSA9IHBvc3RJRCAmJiBzdG9yZS5hY2Nlc3MoJ3R3ZWV0cycsIHBvc3RJRClcblxuICByZXR1cm4gcG9zdERhdGEgPyBkaXN0aWxsUG9zdERhdGEocG9zdERhdGEpIDogZWxlbWVudC5pbm5lclRleHRcbn1cblxuLyoqXG4gKiBDb25zdHJ1Y3RzIHRoZSB0ZXh0IG91dHB1dCBmb3IgYSBnaXZlbiBwb3N0LCBoYW5kbGluZ1xuICogcmVwb3N0cywgaGVhZGVycywgYW5kIHBvc3QgYm9keSBjb250ZW50LlxuICovXG5mdW5jdGlvbiBkaXN0aWxsUG9zdERhdGEocG9zdDogYW55LCBsZXZlbDogbnVtYmVyID0gMCk6IHN0cmluZyB8IG51bGwge1xuICBpZiAocG9zdC5yZXR3ZWV0ZWRfc3RhdHVzKSB7XG4gICAgcmV0dXJuIGRpc3RpbGxSZXBvc3RQb3N0KHBvc3QpXG4gIH1cblxuICBjb25zdCBoZWFkZXIgPSBkaXN0aWxsUG9zdEhlYWRlcihwb3N0KVxuICBjb25zdCBib2R5ID0gYnVpbGRQb3N0Qm9keShwb3N0LCBsZXZlbClcblxuICByZXR1cm4gW2hlYWRlciwgYm9keSAmJiBpbmRlbnRMaW5lcyhgXFxuJHtib2R5fWApXS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJylcbn1cblxuLyoqXG4gKiBCdWlsZHMgdGhlIG1haW4gY29udGVudCBvZiBhIHBvc3QsIGluY2x1ZGluZ1xuICogaGFuZGxpbmcgcXVvdGVkIGNvbnRlbnQgYW5kIHRleHQgd3JhcHBpbmcuXG4gKi9cbmZ1bmN0aW9uIGJ1aWxkUG9zdEJvZHkocG9zdDogYW55LCBsZXZlbDogbnVtYmVyKSB7XG4gIGNvbnN0IHRleHQgPSBnZXRQb3N0VGV4dChwb3N0KVxuICBjb25zdCBxdW90ZWQgPSBwb3N0LnF1b3RlZF9zdGF0dXMgPyBidWlsZFBvc3RRdW90ZWRCb2R5KHBvc3QsIGxldmVsKSA6IG51bGxcbiAgY29uc3QgYXR0YWNobWVudHMgPSBwb3N0LmV4dGVuZGVkX2VudGl0aWVzPy5tZWRpYVxuICAgID8gZGlzdGlsbFBvc3RNZWRpYUVudGl0aWVzKHBvc3QpXG4gICAgOiBudWxsXG4gIGNvbnN0IGNhcmQgPSBwb3N0LmNhcmQgPyBkaXN0aWxsQ2FyZChwb3N0KSA6IG51bGxcblxuICByZXR1cm4gW1xuICAgIHRleHQgPyB3cmFwTGluZXModGV4dCkgOiBudWxsLFxuICAgIGNhcmQgPyBbYFxcbiR7aW5kZW50TGluZXMod3JhcExpbmVzKGNhcmQpLCAnIHwgJyl9YF0gOiBudWxsLFxuICAgIHF1b3RlZCA/IFtgXFxuJHtpbmRlbnRMaW5lcyhxdW90ZWQsICcgPiAnKX1gXSA6IG51bGwsXG4gICAgYXR0YWNobWVudHMgPyBbYFxcbkF0dGFjaG1lbnRzOlxcbiR7YXR0YWNobWVudHN9YF0gOiBudWxsLFxuICBdXG4gICAgLmZsYXQoKVxuICAgIC5maWx0ZXIoQm9vbGVhbilcbiAgICAuam9pbignXFxuJylcbn1cblxuLyoqXG4gKiBDcmVhdGVzIHRoZSBoZWFkZXIgb2YgYSBwb3N0LCBpbmNsdWRpbmcgdGhlIGF1dGhvclxuICogaW5mb3JtYXRpb24sIGFjdGlvbiBsaW5lLCBhbmQgYW55IHJlbGV2YW50IG1ldHJpY3MuXG4gKi9cbmZ1bmN0aW9uIGRpc3RpbGxQb3N0SGVhZGVyKHBvc3Q6IGFueSkge1xuICBjb25zdCBhdXRob3IgPSBzdG9yZS5hY2Nlc3MoJ3VzZXJzJywgcG9zdC51c2VyKVxuICBjb25zdCBzaWduYXR1cmUgPSBnZXRVc2VyU2lnbmF0dXJlKGF1dGhvcilcbiAgY29uc3QgbWV0cmljcyA9IGdldFBvc3RNZXRyaWNzKHBvc3QpXG5cbiAgcmV0dXJuIFtcbiAgICBgRnJvbTogJHtzaWduYXR1cmV9YCxcbiAgICBidWlsZFBvc3RBY3Rpb25MaW5lKHBvc3QpLFxuICAgIG1ldHJpY3MubGVuZ3RoID4gMCA/IGBNZXRyaWNzOiAke21ldHJpY3Muam9pbignIHwgJyl9YCA6IG51bGwsXG4gIF1cbiAgICAuZmlsdGVyKEJvb2xlYW4pXG4gICAgLmpvaW4oJ1xcbicpXG59XG5cbi8qKlxuICogUmV0cmlldmVzIGFuZCBkZWNvZGVzIHRoZSBtYWluIHRleHQgb2YgYSBwb3N0LCBoYW5kbGluZ1xuICogZGlmZmVyZW50IGZpZWxkcyB3aGVyZSB0aGUgdGV4dCBtaWdodCBiZSBsb2NhdGVkLlxuICovXG5mdW5jdGlvbiBnZXRQb3N0VGV4dChwb3N0OiBhbnkpIHtcbiAgbGV0IHJlc3BvbnNlID0gaXNTdHJpbmcocG9zdC5ub3RlX3R3ZWV0Py50ZXh0KVxuICAgID8gcG9zdC5ub3RlX3R3ZWV0LnRleHRcbiAgICA6IHBvc3QuZnVsbF90ZXh0XG5cbiAgLy8gUmVtb3ZlIGxlYWRpbmcgcmVmZXJlbmNlc1xuICBpZiAoZ2V0RGlzdGlsbGF0aW9uTGV2ZWwoKSA8IExFT19ESVNUSUxMQVRJT05fTEVWRUwuSElHSCkge1xuICAgIHJlc3BvbnNlID0gcmVzcG9uc2UucmVwbGFjZSgvXihcXEBbYS16QS1aMC05X10rXFxzKykrLywgJycpXG4gIH1cblxuICByZXR1cm4gaXNTdHJpbmcocmVzcG9uc2UpID8gZGVjb2RlSFRNTFNwZWNpYWxDaGFycyhyZXNwb25zZSkgOiBudWxsXG59XG5cbi8qKlxuICogRm9ybWF0cyBhIHJlcG9zdGVkIHR3ZWV0LCBpbmNvcnBvcmF0aW5nIHRoZSBvcmlnaW5hbFxuICogdHdlZXTigJlzIGNvbnRlbnQgYW5kIGluZGljYXRpbmcgd2hvIHJlcG9zdGVkIGl0LlxuICovXG5mdW5jdGlvbiBkaXN0aWxsUmVwb3N0UG9zdChwb3N0OiBhbnkpOiBzdHJpbmcgfCBudWxsIHtcbiAgY29uc3QgcmVwb3N0aW5nVXNlciA9IHN0b3JlLmFjY2VzcygndXNlcnMnLCBwb3N0LnVzZXIpXG4gIGNvbnN0IHJlcG9zdGluZ1Bvc3QgPSBzdG9yZS5hY2Nlc3MoJ3R3ZWV0cycsIHBvc3QucmV0d2VldGVkX3N0YXR1cylcbiAgaWYgKHJlcG9zdGluZ1VzZXIgJiYgcmVwb3N0aW5nUG9zdCkge1xuICAgIGNvbnN0IGRpc3RpbGxlZCA9IGRpc3RpbGxQb3N0RGF0YShyZXBvc3RpbmdQb3N0KVxuICAgIGlmIChkaXN0aWxsZWQpIHtcbiAgICAgIGNvbnN0IFtmcm9tVXNlciwgLi4ucmVzdF0gPSBkaXN0aWxsZWQuc3BsaXQoJ1xcbicpXG4gICAgICBjb25zdCByZXBvc3RlZEJ5ID0gYFJlcG9zdGVkIGJ5ICR7Z2V0VXNlclNpZ25hdHVyZShyZXBvc3RpbmdVc2VyKX1gXG4gICAgICByZXR1cm4gW2Ake2Zyb21Vc2VyfSAoJHtyZXBvc3RlZEJ5fSlgLCAuLi5yZXN0XS5qb2luKCdcXG4nKVxuICAgIH1cbiAgfVxuICByZXR1cm4gbnVsbFxufVxuXG4vKipcbiAqIENvbnN0cnVjdHMgYW4gYWN0aW9uIGxpbmUgZm9yIGEgcG9zdCwgc3VjaCBhcyBpbmRpY2F0aW5nXG4gKiBhIHJlcGx5IG9yIHdoZW4gdGhlIHBvc3Qgd2FzIGNyZWF0ZWQuXG4gKi9cbmZ1bmN0aW9uIGJ1aWxkUG9zdEFjdGlvbkxpbmUocG9zdDogYW55KSB7XG4gIGNvbnN0IGRhdGUgPSBnZXREYXRlU3RyaW5nKHBvc3QuY3JlYXRlZF9hdClcbiAgaWYgKHBvc3QuaW5fcmVwbHlfdG9fdXNlcl9pZF9zdHIgJiYgcG9zdC5pbl9yZXBseV90b19zY3JlZW5fbmFtZSkge1xuICAgIGNvbnN0IHVzZXIgPSBzdG9yZS5hY2Nlc3MoJ3VzZXJzJywgcG9zdC5pbl9yZXBseV90b191c2VyX2lkX3N0cilcbiAgICBjb25zdCBzaWduYXR1cmUgPVxuICAgICAgZ2V0VXNlclNpZ25hdHVyZSh1c2VyKSA/PyBgQCR7cG9zdC5pbl9yZXBseV90b19zY3JlZW5fbmFtZX1gXG4gICAgcmV0dXJuIGBSZXBsaWVkIHRvICR7c2lnbmF0dXJlfTogJHtkYXRlfWBcbiAgfVxuICByZXR1cm4gYFBvc3RlZDogJHtkYXRlfWBcbn1cblxuLyoqXG4gKiBIYW5kbGVzIHRoZSBjb250ZW50IGZvciBxdW90ZWQgcG9zdHMsIGluY2x1ZGluZyB0cnVuY2F0aW9uXG4gKiBsb2dpYyBhbmQgVVJMIGNvbnRpbnVhdGlvbiBpZiB0aGUgbWF4aW11bSBkZXB0aCBpcyByZWFjaGVkLlxuICovXG5mdW5jdGlvbiBidWlsZFBvc3RRdW90ZWRCb2R5KHBvc3Q6IGFueSwgbGV2ZWw6IG51bWJlciA9IDApOiBzdHJpbmcgfCBudWxsIHtcbiAgY29uc3QgcXVvdGUgPSBzdG9yZS5hY2Nlc3MoJ3R3ZWV0cycsIHBvc3QucXVvdGVkX3N0YXR1cylcbiAgY29uc3QgZGlzdGlsbGVkID1cbiAgICBsZXZlbCA8IDMgJiYgcXVvdGUgPyBkaXN0aWxsUG9zdERhdGEocXVvdGUsIGxldmVsICsgMSkgOiBudWxsXG4gIHJldHVybiBkaXN0aWxsZWQgfHwgYFRocmVhZCBjb250aW51ZXMgYXQgJHtnZXRFeHBhbmRlZFBvc3RVUkwocG9zdCl9YFxufVxuXG4vKipcbiAqIFJldHJpZXZlcyB0aGUgZXhwYW5kZWQgVVJMIGZvciBhIHBvc3QsIGVpdGhlciBmcm9tIHRoZVxuICogcHJvdmlkZWQgcGVybWFsaW5rIG9yIGJ5IGNvbnN0cnVjdGluZyBpdCB1c2luZyB1c2VyXG4gKiBpbmZvcm1hdGlvbi5cbiAqL1xuZnVuY3Rpb24gZ2V0RXhwYW5kZWRQb3N0VVJMKHBvc3Q6IGFueSkge1xuICBjb25zdCB1cmwgPSBwb3N0LnF1b3RlZF9zdGF0dXNfcGVybWFsaW5rPy5leHBhbmRlZFVybFxuICBpZiAodXJsKSByZXR1cm4gdXJsXG4gIGNvbnN0IHsgc2NyZWVuX25hbWU6IHNjcmVlbk5hbWUgfSA9IHN0b3JlLmFjY2VzcygndXNlcnMnLCBwb3N0LnVzZXIpID8/IHt9XG4gIHJldHVybiBpc1N0cmluZyhzY3JlZW5OYW1lKVxuICAgID8gYGh0dHBzOi8veC5jb20vJHtzY3JlZW5OYW1lfS9zdGF0dXMvJHtwb3N0LmlkX3N0cn1gXG4gICAgOiBudWxsXG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjQgVGhlIEJyYXZlIEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4vLyBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIGZpbGUsXG4vLyBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cHM6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy5cblxuaW1wb3J0IHNlbGVjdG9ycyBmcm9tICcuL3NlbGVjdG9ycydcbmltcG9ydCB7IGlzU3VwcG9ydGVkUGFnZSB9IGZyb20gJy4vdXRpbHMnXG5pbXBvcnQgeyBkaXN0aWxsTm90aWZpY2F0aW9uRWxlbWVudCB9IGZyb20gJy4vbm90aWZpY2F0aW9ucydcbmltcG9ydCB7IGRpc3RpbGxQb3N0RWxlbWVudCB9IGZyb20gJy4vcG9zdCdcbmltcG9ydCB7IGRpc3RpbGxTZWVuVXNlcnMgfSBmcm9tICcuL3VzZXInXG5pbXBvcnQgeyBMRU9fRElTVElMTEFUSU9OX0xFVkVMIH0gZnJvbSAnLi4vZGlzdGlsbGF0aW9uJ1xuXG5sZXQgX0RJU1RJTExBVElPTl9MRVZFTCA9IExFT19ESVNUSUxMQVRJT05fTEVWRUwuRlVMTFxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlzdGlsbGF0aW9uTGV2ZWwoKSB7XG4gIHJldHVybiBfRElTVElMTEFUSU9OX0xFVkVMXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpc3RpbGwoZGlzdGlsbExldmVsID0gTEVPX0RJU1RJTExBVElPTl9MRVZFTC5GVUxMKSB7XG4gIGlmICghaXNTdXBwb3J0ZWRQYWdlKGRvY3VtZW50KSkge1xuICAgIHJldHVybiBudWxsXG4gIH1cblxuICBfRElTVElMTEFUSU9OX0xFVkVMID0gZGlzdGlsbExldmVsXG5cbiAgY29uc3QgY29sdW1uID0gZGlzdGlsbFByaW1hcnlDb2x1bW4oKVxuICBjb25zdCBzZWVuVXNlcnMgPSBkaXN0aWxsU2VlblVzZXJzKGRpc3RpbGxMZXZlbClcblxuICAvKipcbiAgICogSW5jbHVkZSBoZWxwZnVsIG1ldGFkYXRhIGFib3V0IHVzZXJzIHNlZW4gb24gdGhlIHBhZ2UsIGJ1dCBpbiBhIHdheSB0aGF0XG4gICAqIGl0IGlzbid0IGNvbmZ1c2VkIHdpdGggdGhlIG9yaWdpbmFsIGNvbnRlbnQuXG4gICAqL1xuICByZXR1cm4gKFxuICAgIGAke3NlZW5Vc2Vyc31cXG5cXG5Ob3RlOiBUaGUgYWJvdmUgdXNlciBpbmZvcm1hdGlvbiBpcyBzdXBwbGVtZW50YWwgYFxuICAgICsgYG1ldGFkYXRhIGFuZCBub3QgcGFydCBvZiB0aGUgb3JpZ2luYWwgcGFnZSBjb250ZW50Llxcblxcbi0tLSBQYWdlIGBcbiAgICArIGBDb250ZW50IEJlbG93IC0tLVxcblxcbiR7Y29sdW1ufWBcbiAgKVxufVxuXG5jb25zdCBjb25maWcgPSB7XG4gICd0d2VldCc6IHtcbiAgICAnc2VsZWN0b3InOiBzZWxlY3RvcnMudHdlZXQsXG4gICAgJ2Rpc3RpbGxlcic6IGRpc3RpbGxQb3N0RWxlbWVudCxcbiAgfSxcbiAgJ25vdGlmaWNhdGlvbic6IHtcbiAgICAnc2VsZWN0b3InOiBzZWxlY3RvcnMubm90aWZpY2F0aW9uLFxuICAgICdkaXN0aWxsZXInOiBkaXN0aWxsTm90aWZpY2F0aW9uRWxlbWVudCxcbiAgfSxcbn0gYXMgUmVjb3JkPHN0cmluZywgYW55PlxuXG4vKipcbiAqIEV4dHJhY3RzIGFuZCBwcm9jZXNzZXMgYWxsIGl0ZW1zIChsaWtlIHR3ZWV0cyBhbmRcbiAqIG5vdGlmaWNhdGlvbnMpIGZyb20gdGhlIHByaW1hcnkgY29sdW1uIG9mIHRoZSBwYWdlLCB1c2luZ1xuICogY29uZmlndXJhdGlvbiB0byBkZXRlcm1pbmUgd2hpY2ggZWxlbWVudHMgdG8gZGlzdGlsbC5cbiAqIFRPRE8gKFNhbXBzb24pOiBBZGQgc3VwcG9ydCBmb3Igb3RoZXIgcHJpbWFyeSBjb2x1bW4gaXRlbXMsXG4gKiBzdWNoIGFzIFwic2hvdyBtb3JlXCIgYnV0dG9ucywgXCJ0aGlzIHBvc3QgaXMgZnJvbSBhIHN1c3BlbmRlZFxuICogYWNjb3VudFwiLCB0ZW5kcywgYW5kIG1vcmUuXG4gKi9cbmZ1bmN0aW9uIGRpc3RpbGxQcmltYXJ5Q29sdW1uKCkge1xuICBjb25zdCBwcmltYXJ5Q29sdW1uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcnMucHJpbWFyeUNvbHVtbilcbiAgY29uc3Qgc2VsZWN0b3JMaXN0ID0gT2JqZWN0LnZhbHVlcyhjb25maWcpXG4gICAgLm1hcCgoaXRlbSkgPT4gaXRlbS5zZWxlY3RvcilcbiAgICAuam9pbignLCAnKVxuICBjb25zdCB0aW1lbGluZUl0ZW1zID0gcHJpbWFyeUNvbHVtbj8ucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvckxpc3QpID8/IFtdXG5cbiAgcmV0dXJuIEFycmF5LmZyb20odGltZWxpbmVJdGVtcylcbiAgICAubWFwKChpdGVtKSA9PiB7XG4gICAgICBjb25zdCB0eXBlID0gaXRlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGVzdGlkJylcbiAgICAgIGNvbnN0IHsgZGlzdGlsbGVyIH0gPSB0eXBlICYmIGNvbmZpZ1t0eXBlXVxuICAgICAgcmV0dXJuIGRpc3RpbGxlciAmJiBkaXN0aWxsZXIoaXRlbSlcbiAgICB9KVxuICAgIC5maWx0ZXIoQm9vbGVhbilcbiAgICAuam9pbignXFxuXFxuLS0tXFxuXFxuJylcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==