// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_drawer/cr_drawer.js';
import 'chrome://resources/cr_elements/cr_page_selector/cr_page_selector.js';
import 'chrome://resources/cr_elements/cr_shared_style.css.js';
import 'chrome://resources/cr_elements/cr_toast/cr_toast.js';
import './checkup_section.js';
import './checkup_details_section.js';
import './cr_page_host_style.css.js';
import './cr_scrollable.css.js';
import './password_details_section.js';
import './password_change_details.js';
import './passwords_exporter.js';
import './passwords_section.js';
import './settings_section.js';
import './shared_style.css.js';
import './side_bar.js';
import './toolbar.js';
import './dialogs/trusted_vault_error_dialog.js';
import { focusWithoutInk } from '//resources/js/focus_without_ink.js';
import { loadTimeData } from '//resources/js/load_time_data.js';
import { ColorChangeUpdater, COLORS_CSS_SELECTOR } from 'chrome://resources/cr_components/color_change_listener/colors_css_updater.js';
import { I18nMixin } from 'chrome://resources/cr_elements/i18n_mixin.js';
import { assert } from 'chrome://resources/js/assert.js';
import { EventTracker } from 'chrome://resources/js/event_tracker.js';
import { PluralStringProxyImpl } from 'chrome://resources/js/plural_string_proxy.js';
import { getDeepActiveElement, listenOnce } from 'chrome://resources/js/util.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { FindShortcutMixin } from './find_shortcut_mixin.js';
import { getTemplate } from './password_manager_app.html.js';
import { PasswordManagerImpl } from './password_manager_proxy.js';
import { Page, RouteObserverMixin, Router } from './router.js';
import { UserUtilMixin } from './user_utils_mixin.js';
/**
 * Checks if an HTML element is an editable. An editable is either a text
 * input or a text area.
 */
function isEditable(element) {
    const nodeName = element.nodeName.toLowerCase();
    return element.nodeType === Node.ELEMENT_NODE &&
        (nodeName === 'textarea' ||
            (nodeName === 'input' &&
                /^(?:text|search|email|number|tel|url|password)$/i.test(element.type)));
}
const PasswordManagerAppElementBase = UserUtilMixin(FindShortcutMixin(I18nMixin(RouteObserverMixin(PolymerElement))));
export class PasswordManagerAppElement extends PasswordManagerAppElementBase {
    static get is() {
        return 'password-manager-app';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            selectedPage_: {
                type: String,
                value: Page.PASSWORDS,
            },
            narrow_: {
                type: Boolean,
                observer: 'onMaxWidthChanged_',
            },
            collapsed_: {
                type: Boolean,
                observer: 'onMaxWidthChanged_',
            },
            pageTitle_: {
                type: String,
                value: () => loadTimeData.getString('passwordManagerTitle'),
            },
            /*
             * Mirroring the enum so that it can be used from HTML bindings.
             */
            pagesValueEnum_: {
                type: Object,
                value: Page,
            },
            showTrustedVaultErrorDialog_: Boolean,
            toastMessage_: String,
            /**
             * Whether to show an "undo" button on the removal toast.
             */
            showUndo_: Boolean,
            /**
             * A Map specifying which element should be focused when exiting a
             * subpage. The key of the map holds a Route path, and the value holds
             * either a query selector that identifies the desired element, an element
             * or a function to be run when a neon-animation-finish event is handled.
             */
            focusConfig_: {
                type: Object,
                value() {
                    const map = new Map();
                    return map;
                },
            },
        };
    }
    static get observers() {
        return [
            'onActionableErrorChanged_(actionableError)',
        ];
    }
    eventTracker_ = new EventTracker();
    connectedCallback() {
        super.connectedCallback();
        const enableWebuiRefresh2026 = loadTimeData.getString('webuiRefresh2026') !== '';
        if (enableWebuiRefresh2026) {
            this.addThemedColors_();
            ColorChangeUpdater.forDocument().start();
        }
        const narrowQuery = window.matchMedia('(max-width: 1300px)');
        this.narrow_ = narrowQuery.matches;
        this.eventTracker_.add(narrowQuery, 'change', (e) => this.narrow_ = e.matches);
        const collapsedQuery = window.matchMedia('(max-width: 1605px)');
        this.collapsed_ = collapsedQuery.matches;
        this.eventTracker_.add(collapsedQuery, 'change', (e) => this.collapsed_ = e.matches);
        this.eventTracker_.add(this, 'show-trusted-vault-error-dialog', () => this.showTrustedVaultErrorDialog_ = true);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.eventTracker_.removeAll();
    }
    ready() {
        super.ready();
        window.CrPolicyStrings = {
            controlledSettingExtension: loadTimeData.getString('controlledSettingExtension'),
            controlledSettingExtensionWithoutName: loadTimeData.getString('controlledSettingExtensionWithoutName'),
            controlledSettingPolicy: loadTimeData.getString('controlledSettingPolicy'),
            controlledSettingRecommendedMatches: loadTimeData.getString('controlledSettingRecommendedMatches'),
            controlledSettingRecommendedDiffers: loadTimeData.getString('controlledSettingRecommendedDiffers'),
            controlledSettingChildRestriction: loadTimeData.getString('controlledSettingChildRestriction'),
            controlledSettingParent: loadTimeData.getString('controlledSettingParent'),
            // 
        };
        document.addEventListener('keydown', e => {
            // 
            if (e.metaKey && e.key === 'z') {
                this.onUndoKeyBinding_(e);
            }
            // 
            // 
        });
        // Lazy-create the drawer the first time it is opened or swiped into view.
        listenOnce(this.$.drawer, 'cr-drawer-opening', () => {
            this.$.drawerTemplate.if = true;
        });
        this.addEventListener('cr-toolbar-menu-click', this.onMenuButtonClick_);
        this.addEventListener('close-drawer', this.closeDrawer_);
    }
    currentRouteChanged(route) {
        this.selectedPage_ = route.page;
        this.$.scrollableShadow.classList.toggle('force-on', route.page === Page.CHECKUP_DETAILS ||
            route.page === Page.PASSWORD_CHANGE);
    }
    // Override FindShortcutMixin methods.
    handleFindShortcut(modalContextOpen) {
        if (modalContextOpen) {
            return false;
        }
        // Redirect to Password Manager search on Passwords page.
        if (Router.getInstance().currentRoute.page === Page.PASSWORDS) {
            this.$.toolbar.searchField.showAndFocus();
            return true;
        }
        return false;
    }
    // Override FindShortcutMixin methods.
    searchInputHasFocus() {
        return this.$.toolbar.searchField.isSearchFocused();
    }
    onMaxWidthChanged_() {
        if (this.$.drawer.open && !this.narrow_) {
            this.$.drawer.close();
        }
        // Window is greater than 1300px but less than 1605px.
        if (!this.narrow_ && this.collapsed_) {
            this.pageTitle_ = this.i18n('passwordManagerString');
        }
        else {
            this.pageTitle_ = this.i18n('passwordManagerTitle');
        }
    }
    onMenuButtonClick_() {
        this.$.drawer.toggle();
    }
    closeDrawer_() {
        if (this.$.drawer && this.$.drawer.open) {
            this.$.drawer.close();
        }
    }
    setNarrowForTesting(state) {
        this.narrow_ = state;
    }
    showPage(currentPage, pageToShow) {
        return currentPage === pageToShow;
    }
    /**
     * Handle the shortcut to undo a removal of passwords/exceptions. This must
     * be handled here and not at the PasswordDetailsCard level because that
     * component does not know about exception deletions.
     */
    onUndoKeyBinding_(event) {
        const activeElement = getDeepActiveElement();
        // If the focused element is editable (e.g. search box) the undo event
        // should be handled there and not here.
        if (!activeElement || !isEditable(activeElement)) {
            this.onUndoButtonClick_();
            // Preventing the default is necessary to not conflict with a possible
            // search action.
            event.preventDefault();
        }
    }
    onPasswordRemoved_(_event) {
        // TODO(crbug.com/40234318): Show different message if account store user.
        this.showUndo_ = true;
        this.toastMessage_ = this.i18n('passwordDeleted');
        this.$.toast.show();
    }
    onBackupPasswordRemoved_(_event) {
        this.showUndo_ = true;
        this.toastMessage_ = this.i18n('passwordDeleted');
        this.$.toast.show();
    }
    onPasskeyRemoved_() {
        this.showUndo_ = false;
        this.toastMessage_ = this.i18n('passkeyDeleted');
        this.$.toast.show();
    }
    async onPasswordsMoved_(event) {
        this.showUndo_ = false;
        this.toastMessage_ =
            await PluralStringProxyImpl.getInstance()
                .getPluralString('passwordsMovedToastMessage', event.detail.numberOfPasswords)
                .then(label => label.replace('$1', event.detail.accountEmail));
        this.$.toast.show();
    }
    onValueCopied_(event) {
        this.showUndo_ = false;
        this.toastMessage_ = event.detail.toastMessage;
        this.$.toast.show();
    }
    onUndoButtonClick_() {
        PasswordManagerImpl.getInstance().undoRemoveSavedPasswordOrException();
        this.$.toast.hide();
    }
    onSearchEnterClick_() {
        this.$.passwords.focusFirstResult();
    }
    onIronSelect_(e) {
        // Ignore bubbling 'iron-select' events not originating from
        // |content| itself.
        if (e.target !== this.$.content) {
            return;
        }
        if (!this.focusConfig_ || Router.getInstance().previousRoute === null) {
            return;
        }
        const pathConfig = this.focusConfig_.get(Router.getInstance().previousRoute.page);
        if (pathConfig) {
            let handler;
            if (typeof pathConfig === 'function') {
                handler = pathConfig;
            }
            else {
                handler = () => {
                    focusWithoutInk(pathConfig);
                };
            }
            handler();
        }
    }
    // TODO(crub.com/509908129): Add static stylesheet in password_manager.html
    addThemedColors_() {
        assert(document.body.querySelector(COLORS_CSS_SELECTOR) === null);
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'chrome://theme/colors.css?sets=ui,chrome';
        document.body.appendChild(link);
    }
    onActionableErrorChanged_() {
        this.showTrustedVaultErrorDialog_ = this.isTrustedVaultKeyNeeded();
    }
    onTrustedVaultErrorDialogClose_() {
        this.showTrustedVaultErrorDialog_ = false;
    }
}
customElements.define(PasswordManagerAppElement.is, PasswordManagerAppElement);
