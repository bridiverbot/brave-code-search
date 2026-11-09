// Copyright (c) 2022 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// you can obtain one at https://mozilla.org/MPL/2.0/.
import './brave_tor_bridges_dialog.js';
import './brave_tor_snowflake_install_failed_dialog.js';
import { I18nMixin } from 'chrome://resources/cr_elements/i18n_mixin.js';
import { WebUiListenerMixin } from '/shared/settings/web_ui_listener_mixin.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { loadTimeData } from '../i18n_setup.js';
import { RouteObserverMixin } from '../router.js';
import { BraveTorBrowserProxyImpl } from './brave_tor_browser_proxy.js';
import { getTemplate } from './brave_tor_subpage.html.js';
const SettingBraveTorPageElementBase = I18nMixin(RouteObserverMixin(WebUiListenerMixin(PolymerElement)));
const Usage = Object.freeze({
    NOT_USED: 0,
    USE_BUILT_IN: 1,
    USE_REQUESTED: 2,
    USE_PROVIDED: 3,
});
/**
 * 'settings-brave-tor-page' is the settings page containing
 * brave's Tor settings.
 */
class SettingsBraveTorPageElement extends SettingBraveTorPageElementBase {
    static get is() {
        return 'settings-brave-tor-subpage';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            loadedConfig_: Object,
            useBridges_: {
                type: Number,
                notify: true
            },
            useBridgesValue_: {
                type: String,
                computed: 'computeUseBridgesValue_(useBridges_)',
                notify: true,
            },
            builtInBridgesTypes_: {
                type: Array,
                readOnly: true,
                value: [
                    { name: "obfs4", value: 1 },
                    { name: "Snowflake", value: 0 },
                    { name: "meek-azure", value: 2 }
                ]
            },
            builtinBridges_: {
                type: Number,
                notify: true,
            },
            requestedBridges_: {
                type: String,
                value: '',
                notify: true,
            },
            providedBridges_: {
                type: String,
                value: '',
                notify: true
            },
            isUsingBridges_: Boolean,
            shouldShowBridgesGroup_: {
                type: Boolean,
                value: false,
                computed: 'computeShouldShowBridgesGroup_(isUsingBridges_, torEnabled_)'
            },
            requestedBridgesPlaceholder_: {
                type: String,
                value: '',
                computed: 'computeRequestedBridgesPlaceholder_(useBridges_, providedBridges_)'
            },
            providedBridgesPlaceholder_: {
                type: String,
                value: '',
                computed: 'computeProvidedBridgesPlaceholder_(useBridges_, providedBridges_)'
            },
            // The bridge line the browser refused, or '' if the last submission was
            // accepted or none has been made yet.
            invalidBridge_: {
                type: String,
                value: ''
            },
            isTorManaged_: Boolean,
            torEnabled_: Boolean,
            torSnowflakeExtensionEnabled_: {
                type: Boolean,
                value: false,
            },
            torSnowflakeExtensionAllowed_: {
                type: Boolean,
                value: false,
            },
            showRequestBridgesDialog_: Boolean,
            isConfigChanged_: {
                type: Boolean,
                computed: 'computeIsConfigChanged_(useBridges_, builtinBridges_, requestedBridges_, providedBridges_, loadedConfig_, shouldShowBridgesGroup_, torEnabled_)',
                value: false,
                notify: true
            },
            showTorSnowflakeInstallFailed_: Boolean,
        };
    }
    static get observers() {
        return [
            'isUsingBridgesChanged_(isUsingBridges_)'
        ];
    }
    browserProxy_ = BraveTorBrowserProxyImpl.getInstance();
    hasConnectedBefore_ = false;
    connectedCallback() {
        super.connectedCallback();
        // dom-repeat re-inserts its <option>s on reconnect, which resets the
        // <select> to its last option without Polymer's `selected` bindings
        // noticing. Wait for the re-insertion, then resync.
        if (this.hasConnectedBefore_ && this.builtinBridges_ !== undefined) {
            queueMicrotask(() => {
                this.$.builtInBridgesType.value = String(this.builtinBridges_);
            });
        }
        this.hasConnectedBefore_ = true;
        // WebUiListenerMixin drops its listeners on disconnect, so re-register
        // and refresh on every connect.
        this.addWebUiListener('tor-enabled-changed', (enabled) => {
            this.torEnabled_ = enabled;
        });
        this.browserProxy_.isTorEnabled().then((enabled) => {
            this.torEnabled_ = enabled;
        });
        this.browserProxy_.isTorManaged().then((managed) => {
            this.isTorManaged_ = managed;
        });
        if (loadTimeData.getBoolean('enable_extensions')) {
            this.browserProxy_.
                isSnowflakeExtensionAllowed().then((allowed) => {
                this.torSnowflakeExtensionAllowed_ = allowed;
            });
            this.addWebUiListener('tor-snowflake-extension-enabled', (enabled) => {
                this.torSnowflakeExtensionEnabled_ = enabled;
            });
            this.browserProxy_.
                isSnowflakeExtensionEnabled().then((enabled) => {
                this.torSnowflakeExtensionEnabled_ = enabled;
            });
        }
    }
    ready() {
        super.ready();
        if (loadTimeData.getBoolean('shouldExposeElementsForTesting')) {
            window.testing = window.testing || {};
            window.testing['torSubpage'] = this.shadowRoot;
        }
        this.browserProxy_.getBridgesConfig().then((config) => {
            this.loadedConfig_ = config;
            this.isUsingBridges_ = config.use_bridges !== Usage.NOT_USED;
            this.useBridges_ = config.use_bridges;
            this.builtinBridges_ = config.use_builtin_bridges;
            this.requestedBridges_ = config.requested_bridges.join('\n');
            this.providedBridges_ = config.provided_bridges.join('\n');
        });
    }
    currentRouteChanged() {
        // This is intentional. currentRouteChanged() should be overridden.
    }
    onSlotClick_(event) {
        event.stopPropagation();
    }
    getCurrentConfig_() {
        const bridgesConfig = {
            use_bridges: this.useBridges_,
            use_builtin_bridges: this.builtinBridges_,
            requested_bridges: this.requestedBridges_.
                split(/\r\n|\r|\n/).filter(Boolean),
            provided_bridges: this.providedBridges_.
                split(/\r\n|\r|\n/).filter(Boolean)
        };
        return bridgesConfig;
    }
    computeUseBridgesValue_() {
        switch (this.useBridges_) {
            case Usage.NOT_USED:
            default:
                return '';
            case Usage.USE_BUILT_IN:
                return 'useBuiltIn';
            case Usage.USE_REQUESTED:
                return 'useRequested';
            case Usage.USE_PROVIDED:
                return 'useProvided';
        }
    }
    onUseBridgesValueChanged_(event) {
        switch (event.detail.value) {
            case 'useBuiltIn':
                this.useBridges_ = Usage.USE_BUILT_IN;
                break;
            case 'useRequested':
                this.useBridges_ = Usage.USE_REQUESTED;
                break;
            case 'useProvided':
                this.useBridges_ = Usage.USE_PROVIDED;
                break;
        }
    }
    isUsingBridgesChanged_(value) {
        if (value) {
            if (this.loadedConfig_ &&
                this.loadedConfig_.use_bridges !== Usage.NOT_USED) {
                this.useBridges_ = this.loadedConfig_.use_bridges;
            }
            else {
                this.useBridges_ = Usage.USE_BUILT_IN;
            }
        }
        else {
            this.useBridges_ = Usage.NOT_USED;
        }
    }
    onBuiltInBridgesSelect_(event) {
        const target = event.target;
        if (target.invalid) {
            return;
        }
        this.builtinBridges_ = Number(target.value);
    }
    computeIsConfigChanged_() {
        const isObject = (object) => {
            return object != null && typeof object === 'object';
        };
        const matches = (object1, object2) => {
            const keys1 = Object.keys(object1);
            const keys2 = Object.keys(object2);
            if (keys1.length !== keys2.length) {
                return false;
            }
            for (const key of keys1) {
                const val1 = object1[key];
                const val2 = object2[key];
                const areObjects = isObject(val1) && isObject(val2);
                if ((areObjects && !matches(val1, val2)) ||
                    (!areObjects && val1 !== val2)) {
                    return false;
                }
            }
            return true;
        };
        if (!this.loadedConfig_ || !this.torEnabled_) {
            return false;
        }
        const currentConfig = this.getCurrentConfig_();
        if ((currentConfig.use_bridges === Usage.USE_PROVIDED &&
            currentConfig.provided_bridges.length === 0) ||
            (currentConfig.use_bridges === Usage.USE_REQUESTED &&
                currentConfig.requested_bridges.length === 0)) {
            return false;
        }
        return !matches(this.getCurrentConfig_(), this.loadedConfig_);
    }
    computeRequestedBridgesPlaceholder_() {
        if (this.useBridges_ === Usage.USE_REQUESTED) {
            return this.i18n('torRequestedBridgesPlaceholder');
        }
        return '';
    }
    computeProvidedBridgesPlaceholder_() {
        if (this.useBridges_ === Usage.USE_PROVIDED) {
            return this.i18n('torProvidedBridgesPlaceholder');
        }
        return '';
    }
    computeShouldShowBridgesGroup_() {
        return this.isUsingBridges_ && this.torEnabled_;
    }
    builtInTypeEqual_(item, selection) {
        return item === selection;
    }
    usageEqual_(usage, current) {
        return usage === current;
    }
    onTorEnabledChange_(event) {
        event.stopPropagation();
        this.browserProxy_.
            setTorEnabled(event.target.checked);
    }
    onUseBridgesChange_(event) {
        event.stopPropagation();
        this.isUsingBridges_ =
            event.target.checked;
        setTimeout(() => {
            this.$.bridgesGroup.scrollIntoView();
        });
    }
    setBridgesConfig_(event) {
        event.stopPropagation();
        const newConfig = this.getCurrentConfig_();
        this.invalidBridge_ = '';
        this.browserProxy_.setBridgesConfig(newConfig).then(() => {
            this.loadedConfig_ = newConfig;
        }, (invalidBridge) => {
            // Nothing was stored, so leave loadedConfig_ alone: the Apply button
            // stays available and what the user typed is still on screen.
            this.invalidBridge_ = invalidBridge;
        });
    }
    requestBridges_() {
        this.showRequestBridgesDialog_ = true;
    }
    showRequestBridgesDialogClosed_(event) {
        this.showRequestBridgesDialog_ = false;
        const currentTarget = event.currentTarget;
        if (currentTarget.bridges_) {
            this.requestedBridges_ = currentTarget.bridges_.join('\n');
        }
    }
    onTorSnowflakeExtensionChange_(event) {
        event.stopPropagation();
        const toggle = event.target;
        this.browserProxy_.enableSnowflakeExtension(toggle.checked).
            catch((reason) => {
            console.log(reason);
            // The toggle already flipped itself; reset it directly since the
            // bound value may not change.
            toggle.checked = false;
            this.torSnowflakeExtensionEnabled_ = false;
            this.showTorSnowflakeInstallFailed_ = true;
        });
    }
    torSnowflakeInstallFailedDialogClosed_() {
        this.showTorSnowflakeInstallFailed_ = false;
    }
}
customElements.define(SettingsBraveTorPageElement.is, SettingsBraveTorPageElement);
