// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * 'site-list-entry' shows an Allowed and Blocked site for a given category.
 */
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/icons.html.js';
import '/shared/settings/controls/cr_policy_pref_indicator.js';
import 'chrome://resources/cr_elements/policy/cr_tooltip_icon.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import '../icons.html.js';
import '../settings_shared.css.js';
import '../site_favicon.js';
import { I18nMixin } from 'chrome://resources/cr_elements/i18n_mixin.js';
import { assert, assertNotReached } from 'chrome://resources/js/assert.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { BaseMixin } from '../base_mixin.js';
import { loadTimeData } from '../i18n_setup.js';
import { routes } from '../route.js';
import { Router } from '../router.js';
import { ChooserType, ContentSettingsTypes, CookiesExceptionType, SITE_EXCEPTION_WILDCARD } from './constants.js';
import { FocusRowMixin } from './focus_row_mixin.js';
import { getTemplate } from './site_list_entry.html.js';
import { SiteSettingsMixin } from './site_settings_mixin.js';
const SiteListEntryElementBase = FocusRowMixin(BaseMixin(SiteSettingsMixin(I18nMixin(PolymerElement))));
export class SiteListEntryElement extends SiteListEntryElementBase {
    static get is() {
        return 'site-list-entry';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            /**
             * Some content types (like Location) do not allow the user to manually
             * edit the exception list from within Settings.
             */
            readOnlyList: {
                type: Boolean,
                value: false,
            },
            /** Site to display in the widget.*/
            model: {
                type: Object,
                observer: 'onModelChanged_',
            },
            /** Whether this entry is the only entry in the Allowed/Blocked section.*/
            singletonEntry: {
                type: Boolean,
            },
            /**
             * The header for the Allowed/Blocked section this entry is in. Used for
             * aria-label to fix cases where the screenreader hasn't already read it.
             */
            sectionHeader: {
                type: String,
            },
            /**
             * If the site represented is part of a chooser exception, the chooser
             * type will be stored here to allow the permission to be manipulated.
             */
            chooserType: {
                type: String,
                value: ChooserType.NONE,
            },
            /**
             * If the site represented is part of a chooser exception, the chooser
             * object will be stored here to allow the permission to be manipulated.
             */
            chooserObject: {
                type: Object,
                value: null,
            },
            showPolicyPrefIndicator_: {
                type: Boolean,
                computed: 'computeShowPolicyPrefIndicator_(model)',
            },
            allowNavigateToSiteDetail_: {
                type: Boolean,
                value: false,
            },
            /**
             * Type of cookies exceptions based on the use of wildcard in the
             * patterns. See `CookiesExceptionType`.
             */
            cookiesExceptionType: String,
        };
    }
    onShowTooltip_() {
        const indicator = this.shadowRoot.querySelector('cr-policy-pref-indicator');
        assert(!!indicator);
        // The tooltip text is used by an cr-tooltip contained inside the
        // cr-policy-pref-indicator. This text is needed here to send up to the
        // common tooltip component.
        const text = indicator.indicatorTooltip;
        this.fire('show-tooltip', { target: indicator, text });
    }
    onShowIncognitoTooltip_() {
        const tooltip = this.shadowRoot.querySelector('#incognitoTooltip');
        // The tooltip text is used by an cr-tooltip contained inside the
        // cr-policy-pref-indicator. The text is currently held in a private
        // property. This text is needed here to send up to the common tooltip
        // component.
        const text = loadTimeData.getString('incognitoSiteExceptionDesc');
        this.fire('show-tooltip', { target: tooltip, text });
    }
    isIsolatedWebApp_() {
        return this.model.origin.startsWith('isolated-app://');
    }
    /**
     * Returns true if this site exception can be edited by the user. Note that
     * this is not the same as readonly; an exception can be removable but not
     * editable.
     */
    isUserEditable_() {
        return !this.readOnlyList && !this.model.embeddingOrigin &&
            !this.isIsolatedWebApp_();
    }
    shouldShowResetButton_() {
        if (this.model === undefined) {
            return false;
        }
        return this.model.enforcement !==
            chrome.settingsPrivate.Enforcement.ENFORCED &&
            !this.isUserEditable_();
    }
    shouldShowActionMenu_() {
        if (this.model === undefined) {
            return false;
        }
        return this.model.enforcement !==
            chrome.settingsPrivate.Enforcement.ENFORCED &&
            this.isUserEditable_();
    }
    /**
     * A handler for selecting a site (by clicking on the origin).
     */
    onOriginClick_() {
        if (!this.allowNavigateToSiteDetail_) {
            return;
        }
        Router.getInstance().navigateTo(routes.SITE_SETTINGS_SITE_DETAILS, new URLSearchParams('site=' + this.model.origin));
    }
    /**
     * Returns the appropriate display name to show for the exception.
     * This can, for example, be the website that is affected itself,
     * or the website whose third parties are also affected.
     */
    computeDisplayName_() {
        if (this.model.embeddingOrigin &&
            this.model.category === ContentSettingsTypes.COOKIES &&
            this.model.origin.trim() === SITE_EXCEPTION_WILDCARD) {
            return this.model.embeddingOrigin;
        }
        return this.model.displayName;
    }
    /**
     * Returns an appropriate aria-label for this entry. The reset (trash can)
     * button has a different aria-label, see the HTML.
     */
    computeAriaLabel_() {
        if (this.singletonEntry) {
            // Screen readers sometimes only read the grid's label (which is in
            // site_list.html) if the grid has more than 1 row. That contains the
            // important context of whether this site is allowed or blocked, so we
            // explicitly add it to the aria-label here to make sure it's read.
            return `${this.computeDisplayName_()} ${this.sectionHeader}`;
        }
        return this.computeDisplayName_();
    }
    /**
     * Returns an appropriate aria-label for the remove button. This aria-label
     * clearly indicates a site name and section header. It should help the
     * screenreader user understand that this button will remove the site from the
     * list. There are two lists, one for allowed sites and one for blocked sites.
     */
    computeRemoveButtonAriaLabel_() {
        return this.i18n('siteSettingsActionResetFromListA11y', this.computeDisplayName_(), this.sectionHeader);
    }
    /**
     * Returns an appropriate aria-label for the view button. This aria-label
     * clearly indicates a site name and section header. It should help the
     * screenreader user understand that this button will open a subpage for the
     * site from the list. There are two lists, one for allowed sites and one for
     * blocked sites.
     */
    computeViewButtonAriaLabel_() {
        return this.i18n('siteSettingsActionViewFromListA11y', this.computeDisplayName_(), this.sectionHeader);
    }
    /**
     * Returns the appropriate origin that a favicon will be fetched for.
     */
    computeFaviconOrigin_() {
        if (this.model.origin.trim() !== SITE_EXCEPTION_WILDCARD) {
            return this.model.origin.trim();
        }
        if (this.model.embeddingOrigin.trim() !== SITE_EXCEPTION_WILDCARD) {
            return this.model.embeddingOrigin.trim();
        }
        assertNotReached();
    }
    /**
     * Returns the appropriate site description to display. This can, for example,
     * be blank, an 'embedded on <site>' string, or a third-party exception
     * description string.
     */
    computeSiteDescription_() {
        let description = '';
        // If a description has been set by the handler, have it override others.
        // TODO(crbug.com/40276807): Move all possible descriptions in to this
        // field C++ side so this function can be greatly simplified.
        if (this.model.description) {
            description = this.model.description;
        }
        else if (this.model.isEmbargoed) {
            assert(!this.model.embeddingOrigin, 'Embedding origin should be empty for embargoed origin.');
            description = loadTimeData.getString('siteSettingsSourceEmbargo');
        }
        else if (this.model.embeddingOrigin) {
            if (this.model.category === ContentSettingsTypes.COOKIES &&
                this.model.origin.trim() === SITE_EXCEPTION_WILDCARD) {
                // Apply special label only if cookies exceptions are displayed in the
                // mixed list.
                if (this.cookiesExceptionType === CookiesExceptionType.COMBINED) {
                    description = loadTimeData.getString('siteSettingsCookiesThirdPartyExceptionLabel');
                }
            }
            else {
                description = loadTimeData.getStringF('embeddedOnHost', this.sanitizePort(this.model.embeddingOrigin));
            }
        }
        try {
            const url = new URL(this.model.origin);
            if (url.protocol === 'chrome-extension:') {
                description = loadTimeData.getStringF('siteSettingsExtensionIdDescription', url.hostname);
            }
        }
        finally {
            return description;
        }
    }
    computeShowPolicyPrefIndicator_() {
        return this.model.enforcement ===
            chrome.settingsPrivate.Enforcement.ENFORCED &&
            !!this.model.controlledBy;
    }
    onResetButtonClick_() {
        this.fire('site-list-entry-reset-click');
        // Use the appropriate method to reset a chooser exception.
        if (this.chooserType !== ChooserType.NONE && this.chooserObject !== null) {
            this.browserProxy.resetChooserExceptionForSite(this.chooserType, this.model.origin, this.chooserObject);
            return;
        }
        this.browserProxy.resetCategoryPermissionForPattern(this.model.origin, this.model.embeddingOrigin, this.model.category, this.model.incognito);
    }
    onShowActionMenuClick_() {
        // Chooser exceptions do not support the action menu, so do nothing.
        if (this.chooserType !== ChooserType.NONE) {
            return;
        }
        this.fire('show-action-menu', {
            anchor: this.shadowRoot.querySelector('#actionMenuButton'),
            model: this.model,
        });
    }
    onModelChanged_() {
        if (!this.model) {
            this.allowNavigateToSiteDetail_ = false;
            return;
        }
        this.browserProxy.isOriginValid(this.model.origin).then((valid) => {
            this.allowNavigateToSiteDetail_ = valid;
        });
    }
    getActionMenuButtonLabel_() {
        return this.i18n('siteDataPageAddSiteContextMenuLabel', this.computeDisplayName_());
    }
    setSectionHeaderForTest(sectionHeader) {
        this.sectionHeader = sectionHeader;
    }
}
customElements.define(SiteListEntryElement.is, SiteListEntryElement);
