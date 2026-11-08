// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { getFaviconUrl, isFaviconUrl } from '//resources/js/icon.js';
import { loadTimeData } from '//resources/js/load_time_data.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { SecondaryTextPlacement } from '//resources/mojo/components/omnibox/browser/suggest_template_info.mojom-webui.js';
import { getCss } from './searchbox_icon.css.js';
import { getHtml } from './searchbox_icon.html.js';
const CALCULATOR = 'search-calculator-answer';
const DOCUMENT_MATCH_TYPE = 'document';
const FEATURED_ENTERPRISE_SEARCH = 'featured-enterprise-search';
const HISTORY_CLUSTER_MATCH_TYPE = 'history-cluster';
const PEDAL = 'pedal';
const STARTER_PACK = 'starter-pack';
const NON_FAVICON_MATCH_TYPES = new Set([
    DOCUMENT_MATCH_TYPE,
    FEATURED_ENTERPRISE_SEARCH,
    HISTORY_CLUSTER_MATCH_TYPE,
    PEDAL,
    STARTER_PACK,
]);
// The following icons should not use the GM3 foreground color.
// TODO(niharm): Refactor logic in C++ and send via mojom in
// "chrome/browser/ui/webui/searchbox/searchbox_handler.cc".
const THEMED_ICONS = new Set([
    '//resources/cr_components/searchbox/icons/calendar.svg',
    '//resources/cr_components/searchbox/icons/drive_docs_custom.svg',
    '//resources/cr_components/searchbox/icons/drive_folder_custom.svg',
    '//resources/cr_components/searchbox/icons/drive_form_custom.svg',
    '//resources/cr_components/searchbox/icons/drive_image_custom.svg',
    '//resources/cr_components/searchbox/icons/drive_logo.svg',
    '//resources/cr_components/searchbox/icons/drive_pdf_custom.svg',
    '//resources/cr_components/searchbox/icons/drive_sheets_custom.svg',
    '//resources/cr_components/searchbox/icons/drive_slides_custom.svg',
    '//resources/cr_components/searchbox/icons/drive_video_custom.svg',
    '//resources/cr_components/searchbox/icons/google_agentspace_logo.svg',
    '//resources/cr_components/searchbox/icons/google_agentspace_logo_25.svg',
    '//resources/cr_components/searchbox/icons/google_g.svg',
    '//resources/cr_components/searchbox/icons/google_g_gradient.svg',
    '//resources/cr_components/searchbox/icons/note_custom.svg',
    '//resources/cr_components/searchbox/icons/sites.svg',
]);
// The LHS icon. Used on autocomplete matches as well as the searchbox input to
// render icons, favicons, and entity images.
export class SearchboxIconElement extends CrLitElement {
    static get is() {
        return 'cr-searchbox-icon';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            //========================================================================
            // Public properties
            //========================================================================
            /**
             * The default icon to show when no match is selected and/or for
             * non-navigation matches. Only set in the context of the searchbox input.
             */
            defaultIcon: { type: String },
            /**  Whether icon should have a background. */
            hasIconContainerBackground: {
                type: Boolean,
                reflect: true,
            },
            /**
             * Whether icon is in searchbox or not. Used to prevent
             * the match icon of rich suggestions from showing in the context of the
             * searchbox input.
             */
            inSearchbox: {
                type: Boolean,
                reflect: true,
            },
            /**
             * Whether icon is in keyword mode. Used in searchbox input to show
             * the generic search loupe icon instead of match favicons when the
             * keyword does not have its own custom icon.
             */
            inKeywordMode: {
                type: Boolean,
                reflect: true,
            },
            /**
             * Whether icon belongs to a featured search match (starter pack or
             * featured enterprise search).
             */
            isFeaturedSearch: {
                type: Boolean,
                reflect: true,
            },
            /** Used as a mask image on #icon if `faviconImage_` is empty. */
            maskImage: {
                type: String,
                reflect: true,
            },
            /**
             * The URL of the current webpage when focused in the searchbox before
             * typing, used to load the page's favicon. Empty when typing, on the NTP,
             * or for consumers that do not provide a page URL.
             */
            pageUrl: { type: String },
            match: { type: Object },
            //========================================================================
            // Private properties
            //========================================================================
            /** Used as the image src for the #faviconImage if non-empty. */
            faviconImage_: {
                type: String,
                reflect: true,
            },
            /**
             * Used as the image srcset for the #faviconImage if non-empty.
             */
            faviconImageSrcSet_: { state: true, type: String },
            /**
             * Whether the match features an image (as opposed to an icon or favicon).
             */
            hasImage_: {
                type: Boolean,
                reflect: true,
            },
            /**
             * Whether to use the favicon image instead of the default vector icon
             * for the suggestion.
             */
            showFaviconImage_: { state: true, type: Boolean },
            /**
             * Flag indicating whether or not a favicon is loading.
             */
            faviconLoading_: { state: true, type: Boolean },
            /**
             * Flag indicating whether or not a favicon was successfully loaded.
             * This is used to force the WebUI popup to make use of the default vector
             * icon when the favicon image is unavailable.
             */
            faviconError_: { state: true, type: Boolean },
            /** Used as the image src for the #iconImg if non-empty. */
            iconSrc_: { state: true, type: String },
            /**
             * Flag indicating whether or not an icon image is loading. This is used
             * to show a default icon while the image is loading.
             */
            iconLoading_: { state: true, type: Boolean },
            /**
             * Whether to use the icon image instead of the default icon for the
             * suggestion.
             */
            showIconImg_: { state: true, type: Boolean },
            showImage_: { state: true, type: Boolean },
            imageSrc_: { state: true, type: String },
            /**
             * Flag indicating whether or not an image is loading. This is used to
             * show a placeholder color while the image is loading.
             */
            imageLoading_: { state: true, type: Boolean },
            /**
             * Flag indicating whether or not an image was successfully loaded. This
             * is used to suppress the default "broken image" icon as needed.
             */
            imageError_: {
                state: true,
                type: Boolean,
            },
            isTopChromeSearchbox_: { state: true, type: Boolean },
            isLensSearchbox_: {
                type: Boolean,
                reflect: true,
            },
        };
    }
    #defaultIcon_accessor_storage = '';
    get defaultIcon() { return this.#defaultIcon_accessor_storage; }
    set defaultIcon(value) { this.#defaultIcon_accessor_storage = value; }
    #hasIconContainerBackground_accessor_storage = false;
    get hasIconContainerBackground() { return this.#hasIconContainerBackground_accessor_storage; }
    set hasIconContainerBackground(value) { this.#hasIconContainerBackground_accessor_storage = value; }
    #inKeywordMode_accessor_storage = false;
    get inKeywordMode() { return this.#inKeywordMode_accessor_storage; }
    set inKeywordMode(value) { this.#inKeywordMode_accessor_storage = value; }
    #inSearchbox_accessor_storage = false;
    get inSearchbox() { return this.#inSearchbox_accessor_storage; }
    set inSearchbox(value) { this.#inSearchbox_accessor_storage = value; }
    #isFeaturedSearch_accessor_storage = false;
    get isFeaturedSearch() { return this.#isFeaturedSearch_accessor_storage; }
    set isFeaturedSearch(value) { this.#isFeaturedSearch_accessor_storage = value; }
    #maskImage_accessor_storage = '';
    get maskImage() { return this.#maskImage_accessor_storage; }
    set maskImage(value) { this.#maskImage_accessor_storage = value; }
    #match_accessor_storage = null;
    get match() { return this.#match_accessor_storage; }
    set match(value) { this.#match_accessor_storage = value; }
    #pageUrl_accessor_storage = '';
    get pageUrl() { return this.#pageUrl_accessor_storage; }
    set pageUrl(value) { this.#pageUrl_accessor_storage = value; }
    #faviconImage__accessor_storage = '';
    get faviconImage_() { return this.#faviconImage__accessor_storage; }
    set faviconImage_(value) { this.#faviconImage__accessor_storage = value; }
    #faviconImageSrcSet__accessor_storage = '';
    get faviconImageSrcSet_() { return this.#faviconImageSrcSet__accessor_storage; }
    set faviconImageSrcSet_(value) { this.#faviconImageSrcSet__accessor_storage = value; }
    #hasImage__accessor_storage = false;
    get hasImage_() { return this.#hasImage__accessor_storage; }
    set hasImage_(value) { this.#hasImage__accessor_storage = value; }
    #showFaviconImage__accessor_storage = false;
    get showFaviconImage_() { return this.#showFaviconImage__accessor_storage; }
    set showFaviconImage_(value) { this.#showFaviconImage__accessor_storage = value; }
    #faviconLoading__accessor_storage = false;
    get faviconLoading_() { return this.#faviconLoading__accessor_storage; }
    set faviconLoading_(value) { this.#faviconLoading__accessor_storage = value; }
    #faviconError__accessor_storage = false;
    get faviconError_() { return this.#faviconError__accessor_storage; }
    set faviconError_(value) { this.#faviconError__accessor_storage = value; }
    #iconSrc__accessor_storage = '';
    get iconSrc_() { return this.#iconSrc__accessor_storage; }
    set iconSrc_(value) { this.#iconSrc__accessor_storage = value; }
    #iconLoading__accessor_storage = false;
    get iconLoading_() { return this.#iconLoading__accessor_storage; }
    set iconLoading_(value) { this.#iconLoading__accessor_storage = value; }
    #showIconImg__accessor_storage = false;
    get showIconImg_() { return this.#showIconImg__accessor_storage; }
    set showIconImg_(value) { this.#showIconImg__accessor_storage = value; }
    #showImage__accessor_storage = false;
    get showImage_() { return this.#showImage__accessor_storage; }
    set showImage_(value) { this.#showImage__accessor_storage = value; }
    #imageSrc__accessor_storage = '';
    get imageSrc_() { return this.#imageSrc__accessor_storage; }
    set imageSrc_(value) { this.#imageSrc__accessor_storage = value; }
    #imageLoading__accessor_storage = false;
    get imageLoading_() { return this.#imageLoading__accessor_storage; }
    set imageLoading_(value) { this.#imageLoading__accessor_storage = value; }
    #imageError__accessor_storage = false;
    get imageError_() { return this.#imageError__accessor_storage; }
    set imageError_(value) { this.#imageError__accessor_storage = value; }
    #isTopChromeSearchbox__accessor_storage = loadTimeData.getBoolean('isTopChromeSearchbox');
    get isTopChromeSearchbox_() { return this.#isTopChromeSearchbox__accessor_storage; }
    set isTopChromeSearchbox_(value) { this.#isTopChromeSearchbox__accessor_storage = value; }
    #isLensSearchbox__accessor_storage = loadTimeData.getBoolean('isLensSearchbox');
    get isLensSearchbox_() { return this.#isLensSearchbox__accessor_storage; }
    set isLensSearchbox_(value) { this.#isLensSearchbox__accessor_storage = value; }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        const changedPrivateProperties = changedProperties;
        if (changedProperties.has('match')) {
            // In Lit, setting properties synchronously within `willUpdate()` does not
            // add them to `changedProperties` for the current update cycle. Track
            // loading state transitions directly when computed URLs change.
            const oldIconSrc = this.iconSrc_;
            this.iconSrc_ = this.computeIconSrc_();
            if (this.iconSrc_ !== oldIconSrc) {
                // If `iconSrc_` changes to a new truthy value, a new icon is being
                // loaded.
                this.iconLoading_ = !!this.iconSrc_;
            }
            const oldImageSrc = this.imageSrc_;
            this.imageSrc_ = this.computeImageSrc_();
            if (this.imageSrc_ !== oldImageSrc) {
                // If imageSrc_ changes to a new truthy value, a new image is being
                // loaded.
                this.imageLoading_ = !!this.imageSrc_;
                this.imageError_ = false;
            }
            this.isFeaturedSearch = this.computeIsFeaturedSearch_();
            this.hasImage_ = this.computeHasImage_();
            this.hasIconContainerBackground =
                this.computeHasIconContainerBackground_();
        }
        if (changedProperties.has('match') || changedProperties.has('pageUrl') ||
            changedProperties.has('defaultIcon') ||
            changedProperties.has('inKeywordMode') ||
            changedProperties.has('inSearchbox')) {
            this.maskImage = this.computeMaskImage_();
        }
        if (changedProperties.has('match') || changedProperties.has('pageUrl') ||
            changedProperties.has('defaultIcon') ||
            changedProperties.has('inKeywordMode') ||
            changedProperties.has('inSearchbox') ||
            changedPrivateProperties.has('isLensSearchbox_') ||
            changedPrivateProperties.has('isTopChromeSearchbox_')) {
            const oldFaviconImage = this.faviconImage_;
            this.faviconImage_ = this.computeFaviconImage_();
            if (this.faviconImage_ !== oldFaviconImage) {
                // If `faviconImage_` changes to a new truthy value, a new favicon is
                // being loaded.
                this.faviconLoading_ = !!this.faviconImage_;
                this.faviconError_ = false;
            }
            this.faviconImageSrcSet_ = this.computeFaviconImageSrcSet_();
            this.showFaviconImage_ = this.computeShowFaviconImage_();
        }
        if (changedPrivateProperties.has('faviconImage_') ||
            changedPrivateProperties.has('faviconLoading_') ||
            changedPrivateProperties.has('faviconError_')) {
            this.showFaviconImage_ = this.computeShowFaviconImage_();
        }
        if (changedProperties.has('match') ||
            changedPrivateProperties.has('imageSrc_') ||
            changedPrivateProperties.has('imageError_')) {
            this.showImage_ = this.computeShowImage_();
        }
        if (changedProperties.has('match') ||
            changedPrivateProperties.has('isLensSearchbox_') ||
            changedPrivateProperties.has('iconLoading_')) {
            this.showIconImg_ = this.computeShowIconImg_();
        }
    }
    //============================================================================
    // Helpers
    //============================================================================
    computeFaviconUrl_(scaleFactor) {
        const url = this.match?.destinationUrl || this.pageUrl;
        if (!url) {
            return '';
        }
        return getFaviconUrl(
        /* url= */ url, {
            forceLightMode: !this.isTopChromeSearchbox_,
            forceEmptyDefaultFavicon: true,
            scaleFactor: `${scaleFactor}x`,
        });
    }
    computeFaviconImageSrcSet_() {
        if (!isFaviconUrl(this.faviconImage_)) {
            return '';
        }
        // `this.faviconImage_` is computed prior to `this.faviconImageSrcSet_` in
        // `willUpdate()`, so it already contains the 1x URL (for match
        // destinations, unedited page URLs, or default search providers). Derive
        // the 2x URL by updating its scaleFactor query parameter.
        const url2x = new URL(this.faviconImage_);
        url2x.searchParams.set('scaleFactor', '2x');
        return `${this.faviconImage_} 1x, ${url2x.toString()} 2x`;
    }
    computeFaviconImage_() {
        if (this.inSearchbox && this.inKeywordMode) {
            return '';
        }
        if (this.match && !this.match.isSearchType) {
            if (THEMED_ICONS.has(this.match.iconPath) ||
                THEMED_ICONS.has(this.match.iconPath.replace('_old.svg', '.svg'))) {
                return this.match.iconPath;
            }
            // Navigation suggestions should use the favicon image, except for Lens
            // searchboxes and match types that prefer the vector mask icon or
            // `match.iconUrl`.
            if (!this.isLensSearchbox_ &&
                !NON_FAVICON_MATCH_TYPES.has(this.match.type) &&
                !this.match.isEnterpriseSearchAggregatorPeopleType) {
                return this.computeFaviconUrl_(/* scaleFactor= */ 1);
            }
            return '';
        }
        // When in the searchbox with an unedited page URL and no match selected,
        // fetch the current page's favicon.
        if (this.inSearchbox && this.isTopChromeSearchbox_ && this.pageUrl &&
            !this.match) {
            return this.computeFaviconUrl_(/* scaleFactor= */ 1);
        }
        if (THEMED_ICONS.has(this.defaultIcon) ||
            THEMED_ICONS.has(this.defaultIcon.replace('_old.svg', '.svg')) ||
            (this.inSearchbox && isFaviconUrl(this.defaultIcon))) {
            // Colored icons (Google G, DSE favicons) must render as an <img>; a CSS
            // mask would strip their colors.
            return this.defaultIcon;
        }
        return '';
    }
    computeHasImage_() {
        return !!this.match && !!this.match.suggestTemplate.image?.url;
    }
    computeShowIconImg_() {
        // Lens searchbox should not use icon URL.
        return !this.isLensSearchbox_ && !!this.match && !!this.match.iconUrl &&
            !this.iconLoading_;
    }
    computeMaskImage_() {
        // In keyword mode, show the custom keyword vector icon if present,
        // otherwise fall back to search_cr23.svg in the searchbox.
        if (this.inSearchbox && this.inKeywordMode) {
            if (this.defaultIcon) {
                return `url(${this.defaultIcon})`;
            }
            return 'url(//resources/cr_components/searchbox/icons/search_cr23.svg)';
        }
        // Lens searchboxes should always have the Google G in the searchbox.
        if (this.isLensSearchbox_ && this.inSearchbox) {
            return `url(${this.defaultIcon})`;
        }
        // Enterprise search aggregator people, top-chrome searchbox (WebUI
        // Omnibox), and suggestions whose secondary text isn't placed below the
        // primary text should show icon even in searchbox.
        if (this.match &&
            (this.match.suggestTemplate.secondaryTextPlacement !==
                SecondaryTextPlacement.kBelowPrimaryText ||
                this.match.isEnterpriseSearchAggregatorPeopleType ||
                this.isTopChromeSearchbox_ || !this.inSearchbox)) {
            if (this.match.iconPath) {
                return `url(${this.match.iconPath})`;
            }
        }
        if (this.inSearchbox) {
            // When focused on an unedited webpage URL without an active match,
            // fall back to the generic globe icon (page_cr23.svg).
            if (this.isTopChromeSearchbox_ && this.pageUrl && !this.match) {
                return 'url(//resources/cr_components/searchbox/icons/page_cr23.svg)';
            }
            // A non-Google DSE favicon can't be drawn as a mask, so fall back to the
            // search loupe while it loads or if it fails to load.
            if (isFaviconUrl(this.defaultIcon)) {
                return 'url(//resources/cr_components/searchbox/icons/search_cr23.svg)';
            }
        }
        return `url(${this.defaultIcon})`;
    }
    // Controls whether the favicon image should be rendered instead of the mask
    // image.
    computeShowFaviconImage_() {
        return !!this.faviconImage_ && !this.faviconLoading_ && !this.faviconError_;
    }
    computeSrc_(url) {
        if (!url) {
            return '';
        }
        if (url.startsWith('data:image/')) {
            // Zero-prefix matches come with the data URI content in |url|.
            return url;
        }
        return `//image?staticEncode=true&encodeType=webp&url=${encodeURIComponent(url)}`;
    }
    computeIconSrc_() {
        return this.computeSrc_(this.match?.iconUrl);
    }
    computeShowImage_() {
        return !!this.imageSrc_ && !this.imageError_;
    }
    computeImageSrc_() {
        return this.computeSrc_(this.match?.suggestTemplate.image?.url);
    }
    getContainerBgColor_() {
        // If the match has an image dominant color, show that color in place of the
        // image until it loads. This helps the image appear to load more smoothly.
        const dominantColor = this.match?.suggestTemplate.image?.dominantColor;
        return ((this.imageLoading_ || this.imageError_) && dominantColor) ?
            // .25 opacity matching c/b/u/views/omnibox/omnibox_match_cell_view.cc.
            (dominantColor ?
                `${dominantColor}40` :
                'var(--cr-searchbox-match-icon-container-background-fallback)') :
            'transparent';
    }
    onFaviconLoad_() {
        this.faviconLoading_ = false;
        this.faviconError_ = false;
    }
    onFaviconError_() {
        this.faviconLoading_ = false;
        this.faviconError_ = true;
    }
    onIconLoad_() {
        this.iconLoading_ = false;
    }
    onImageLoad_() {
        this.imageLoading_ = false;
        this.imageError_ = false;
    }
    onImageError_() {
        this.imageLoading_ = false;
        this.imageError_ = true;
    }
    // All pedals, starter pack/featured enterprise search suggestions, and AiS
    // except weather should have a colored background container that matches the
    // current theme.
    // TODO(niharm): Refactor logic in C++ and send via mojom in
    // "chrome/browser/ui/webui/searchbox/searchbox_handler.cc".
    computeHasIconContainerBackground_() {
        if (this.match) {
            return this.match.type === PEDAL ||
                this.match.type === HISTORY_CLUSTER_MATCH_TYPE ||
                this.match.type === CALCULATOR || this.isFeaturedSearch;
        }
        return false;
    }
    computeIsFeaturedSearch_() {
        return this.match?.type === STARTER_PACK ||
            this.match?.type === FEATURED_ENTERPRISE_SEARCH;
    }
}
customElements.define(SearchboxIconElement.is, SearchboxIconElement);
