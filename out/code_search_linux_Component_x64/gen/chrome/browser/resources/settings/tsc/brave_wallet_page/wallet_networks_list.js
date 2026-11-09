/* Copyright (c) 2022 The Brave Authors. All rights reserved.
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at https://mozilla.org/MPL/2.0/. */
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import './add_wallet_network_dialog.js';
import { BraveWalletBrowserProxyImpl } from './brave_wallet_browser_proxy.js';
import { I18nMixin } from 'chrome://resources/cr_elements/i18n_mixin.js';
import { RouteObserverMixin } from '../router.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { BaseMixin } from '../base_mixin.js';
import { getTemplate } from './wallet_networks_list.html.js';
import { loadTimeData } from '../i18n_setup.js';
const SettingsWalletNetworksListBase = I18nMixin(RouteObserverMixin(BaseMixin(PolymerElement)));
class SettingsWalletNetworksList extends SettingsWalletNetworksListBase {
    static get is() {
        return 'wallet-networks-list';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            addNewAllowed: {
                type: Boolean,
                value: false
            },
            coin: {
                type: Number,
                value: 0
            },
            listTitle: {
                type: String,
                value: ''
            },
            networks: {
                type: Array,
                value() {
                    return [];
                },
            },
            knownNetworks: {
                type: Array,
                value() {
                    return [];
                },
            },
            customNetworks: {
                type: Array,
                value() {
                    return [];
                },
            },
            hiddenNetworks: {
                type: Array,
                value() {
                    return [];
                },
            },
            showAddWalletNetworkDialog_: {
                type: Boolean,
                value: false,
            },
            selectedNetwork: {
                type: Object,
                value: {}
            },
            defaultNetwork: {
                type: String,
                value: ''
            },
            isDefaultNetwork: {
                type: Boolean,
                value: true
            },
            canRemoveNetwork: {
                type: Boolean,
                value: true,
            },
            canResetNetwork: {
                type: Boolean,
                value: true,
            }
        };
    }
    browserProxy_ = BraveWalletBrowserProxyImpl.getInstance();
    ready() {
        super.ready();
        this.updateNetworks();
    }
    connectedCallback() {
        super.connectedCallback();
        if (loadTimeData.getBoolean('shouldExposeElementsForTesting')) {
            window.testing = window.testing || {};
            window.testing[`walletNetworks${this.coin}`] = this.shadowRoot;
        }
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        if (loadTimeData.getBoolean('shouldExposeElementsForTesting')) {
            delete window.testing[`walletNetworks${this.coin}`];
        }
    }
    currentRouteChanged(_newRoute, _oldRoute) {
        this.updateNetworks();
    }
    notifyKeylist() {
        const keysList = this.$$('#networksList');
        if (keysList) {
            keysList.notifyResize();
        }
    }
    getNetworkItemClass(item) {
        if (this.checkIsDefaultNetwork(item.chainId)) {
            return "flex cr-padded-text default-network";
        }
        return "flex cr-padded-text";
    }
    getHideButtonClass(hiddenNetworks, item) {
        if (!this.checkIsDefaultNetwork(item.chainId) &&
            hiddenNetworks.includes(item.chainId)) {
            return "hide-network-button icon-visibility-off";
        }
        return "hide-network-button icon-visibility";
    }
    getDataTestId(item) {
        return 'chain-' + item.chainId;
    }
    checkIsDefaultNetwork(chainId) {
        return chainId === this.defaultNetwork;
    }
    canRemoveNetwork_(item) {
        if (this.checkIsDefaultNetwork(item.chainId)) {
            return false;
        }
        return !this.knownNetworks.includes(item.chainId);
    }
    canHideNetwork_(item) {
        return !this.checkIsDefaultNetwork(item.chainId);
    }
    eyeButtonTitle_(item) {
        if (this.checkIsDefaultNetwork(item.chainId)) {
            return this.i18n('walletDefaultNetworkIsAlwaysVisible');
        }
        return this.i18n('walletShowHideNetwork');
    }
    canResetNetwork_(item) {
        return (this.knownNetworks.includes(item.chainId) &&
            this.customNetworks.includes(item.chainId));
    }
    hideNativeCurrencyInfo(item) {
        return !item.nativeCurrency || item.nativeCurrency.name.trim() === '';
    }
    getItemDescritionText(item) {
        const url = (item.rpcUrls && item.rpcUrls[item.activeRpcEndpointIndex])
            ? item.rpcUrls[item.activeRpcEndpointIndex]
            : '';
        return item.chainId + ' ' + url;
    }
    onSetAsDefaultActionTapped_(_event) {
        if (!this.selectedNetwork) {
            return;
        }
        const chainId = this.selectedNetwork.chainId;
        this.selectedNetwork = {};
        this.browserProxy_.setDefaultNetwork(chainId, this.coin).
            then((_success) => {
            this.updateNetworks();
        });
        this.$$('cr-action-menu').close();
    }
    onDeleteActionTapped_(_event) {
        if (!this.selectedNetwork) {
            return;
        }
        const chainId = this.selectedNetwork.chainId;
        const chainName = this.selectedNetwork.chainName;
        this.selectedNetwork = {};
        this.$$('cr-action-menu').close();
        if (this.checkIsDefaultNetwork(chainId)) {
            this.updateNetworks();
            return;
        }
        const message = this.i18n('walletDeleteNetworkConfirmation', chainName);
        if (!window.confirm(message)) {
            return;
        }
        this.browserProxy_.removeChain(chainId, this.coin).
            then((_success) => {
            this.updateNetworks();
        });
    }
    onResetActionTapped_(_event) {
        if (!this.selectedNetwork) {
            return;
        }
        const chainId = this.selectedNetwork.chainId;
        const chainName = this.selectedNetwork.chainName;
        this.selectedNetwork = {};
        this.$$("cr-action-menu").close();
        const message = this.i18n("walletResetNetworkConfirmation", chainName);
        if (!window.confirm(message)) {
            return;
        }
        this.browserProxy_.resetChain(chainId, this.coin).then((_success) => {
            this.updateNetworks();
        });
    }
    onAddNetworkTap_(_item) {
        this.showAddWalletNetworkDialog_ = true;
    }
    onItemDoubleClick(event) {
        this.selectedNetwork = event.model.item;
        this.showAddWalletNetworkDialog_ = true;
    }
    onEmptyDoubleClick(event) {
        event.stopPropagation();
    }
    updateNetworks() {
        this.browserProxy_.getNetworksList(this.coin).then(payload => {
            if (!payload) {
                return;
            }
            this.defaultNetwork = payload.defaultNetwork;
            this.networks = payload.networks;
            this.knownNetworks = payload.knownNetworks;
            this.customNetworks = payload.customNetworks;
            this.hiddenNetworks = payload.hiddenNetworks;
            this.notifyKeylist();
        });
    }
    onAddNetworkDialogClosed_() {
        this.showAddWalletNetworkDialog_ = false;
        this.selectedNetwork = {};
        this.updateNetworks();
    }
    onHideButtonClicked_(event) {
        const chainId = event.model.item.chainId;
        if (this.hiddenNetworks.includes(event.model.item.chainId)) {
            this.browserProxy_.
                removeHiddenNetwork(chainId, this.coin).then((_success) => {
                this.updateNetworks();
            });
        }
        else {
            this.browserProxy_.
                addHiddenNetwork(chainId, this.coin).then((_success) => {
                this.updateNetworks();
            });
        }
    }
    onNetworkMenuTapped_(event) {
        this.selectedNetwork = event.model.item;
        this.isDefaultNetwork =
            this.checkIsDefaultNetwork(this.selectedNetwork.chainId);
        this.canRemoveNetwork = this.canRemoveNetwork_(this.selectedNetwork);
        this.canResetNetwork = this.canResetNetwork_(this.selectedNetwork);
        this.$$('#network-menu').get()
            .showAt(event.target);
    }
    onEditTap_() {
        this.$$('cr-action-menu').close();
        this.showAddWalletNetworkDialog_ = true;
    }
    onNetworkActionTapped_(_event) {
        this.showAddWalletNetworkDialog_ = true;
    }
}
customElements.define(SettingsWalletNetworksList.is, SettingsWalletNetworksList);
