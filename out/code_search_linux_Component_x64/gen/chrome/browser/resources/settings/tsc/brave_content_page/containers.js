// Copyright (c) 2025 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.
import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import '//resources/mojo/skia/public/mojom/skcolor.mojom-webui.js';
import '//resources/brave/leo.bundle.js';
import '../controls/settings_toggle_button.js';
import { I18nMixinLit } from '//resources/cr_elements/i18n_mixin_lit.js';
import { assert } from '//resources/js/assert.js';
import { CrLitElement, } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { PrefServiceObserverMixinLit } from '/shared/settings/prefs2/pref_service_observer_mixin_lit.js';
import { ContainerOperationError, Icon, } from '../containers.mojom-webui.js';
import backgroundColors from './background_colors.js';
import { getCss } from './containers.css.js';
import { getHtml } from './containers.html.js';
import { ContainersSettingsHandlerBrowserProxy } from './containers_browser_proxy.js';
import { DragReorderMixin, getDragReorderCss } from './drag_reorder_mixin.js';
const SettingsBraveContentContainersElementBase = DragReorderMixin(PrefServiceObserverMixinLit(I18nMixinLit(CrLitElement)));
/**
 * 'settings-brave-content-containers' is the settings page containing settings for Containers
 */
export class SettingsBraveContentContainersElement extends SettingsBraveContentContainersElementBase {
    static get is() {
        return 'settings-brave-content-containers';
    }
    static get styles() {
        return [getCss(), getDragReorderCss()];
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            containersEnabledPref_: {
                type: Object,
            },
            containersList_: {
                type: Array,
            },
            editingContainer_: {
                type: Object,
            },
            deletingContainer_: {
                type: Object,
            },
            isEditDialogNameInvalid_: {
                type: Boolean,
            },
            editDialogError_: {
                type: String,
            },
            deleteDialogError_: {
                type: String,
            },
        };
    }
    browserProxy = ContainersSettingsHandlerBrowserProxy.getInstance();
    #containersEnabledPref__accessor_storage;
    get containersEnabledPref_() { return this.#containersEnabledPref__accessor_storage; }
    set containersEnabledPref_(value) { this.#containersEnabledPref__accessor_storage = value; }
    #containersList__accessor_storage = [];
    get containersList_() { return this.#containersList__accessor_storage; }
    set containersList_(value) { this.#containersList__accessor_storage = value; }
    #editingContainer__accessor_storage;
    get editingContainer_() { return this.#editingContainer__accessor_storage; }
    set editingContainer_(value) { this.#editingContainer__accessor_storage = value; }
    #deletingContainer__accessor_storage;
    get deletingContainer_() { return this.#deletingContainer__accessor_storage; }
    set deletingContainer_(value) { this.#deletingContainer__accessor_storage = value; }
    #isEditDialogNameInvalid__accessor_storage = false;
    get isEditDialogNameInvalid_() { return this.#isEditDialogNameInvalid__accessor_storage; }
    set isEditDialogNameInvalid_(value) { this.#isEditDialogNameInvalid__accessor_storage = value; }
    #editDialogError__accessor_storage;
    get editDialogError_() { return this.#editDialogError__accessor_storage; }
    set editDialogError_(value) { this.#editDialogError__accessor_storage = value; }
    #deleteDialogError__accessor_storage;
    get deleteDialogError_() { return this.#deleteDialogError__accessor_storage; }
    set deleteDialogError_(value) { this.#deleteDialogError__accessor_storage = value; }
    connectedCallback() {
        super.connectedCallback();
        this.browserProxy.handler.getContainers().then(({ containers }) => {
            this.onContainersListUpdated_(containers);
        });
        this.mirrorPref('brave.containers.enabled', 'containersEnabledPref_');
        this.browserProxy.callbackRouter.onContainersChanged.addListener(this.onContainersListUpdated_.bind(this));
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has('containersEnabledPref_')
            && !this.containersEnabledPref_?.value) {
            this.editingContainer_ = undefined;
            this.deletingContainer_ = undefined;
        }
    }
    onContainersListUpdated_(containers) {
        this.containersList_ = containers;
        this.onReorderableItemsUpdated_();
    }
    getReorderableIds_() {
        return this.containersList_.map((c) => c.id);
    }
    onItemsReordered_(orderedIds) {
        this.browserProxy.handler
            .reorderContainers(orderedIds)
            .then(({ error }) => {
            if (!error) {
                this.onReorderableItemsUpdated_();
            }
        })
            .catch(() => this.onReorderableItemsUpdated_());
    }
    onAddContainerClick_() {
        this.editingContainer_ = {
            id: '',
            name: '',
            icon: Icon.kDefault,
            backgroundColor: backgroundColors[0],
        };
        this.editDialogError_ = undefined;
    }
    onEditContainerClick_(e) {
        const id = e.currentTarget.dataset['id'];
        assert(id);
        this.editingContainer_ = this.containersList_.find((c) => c.id === id);
        this.editDialogError_ = undefined;
    }
    onDeleteContainerClick_(e) {
        const id = e.currentTarget.dataset['id'];
        assert(id);
        this.deletingContainer_ = this.containersList_.find((c) => c.id === id);
        this.deleteDialogError_ = undefined;
    }
    onDialogClose_() {
        this.editingContainer_ = undefined;
        this.deletingContainer_ = undefined;
    }
    onCancelDialogClick_() {
        this.onDialogClose_();
    }
    onContainerNameInput_(e) {
        assert(this.editingContainer_);
        const input = e.target;
        this.editingContainer_ = {
            ...this.editingContainer_,
            name: input.value,
        };
        this.isEditDialogNameInvalid_ = input.invalid;
    }
    onContainersIconSelected_(event) {
        assert(this.editingContainer_);
        this.editingContainer_ = {
            ...this.editingContainer_,
            icon: event.detail.icon,
        };
    }
    onContainersBackgroundSelected_(event) {
        assert(this.editingContainer_);
        this.editingContainer_ = {
            ...this.editingContainer_,
            backgroundColor: event.detail.color,
        };
    }
    async onSaveContainerFromDialogClick_() {
        assert(this.editingContainer_);
        if (!this.editingContainer_.id) {
            const { error } = await this.browserProxy.handler.addContainer(this.editingContainer_);
            if (!error) {
                this.editingContainer_ = undefined;
            }
            else {
                this.editDialogError_ = this.formatError_(error);
            }
        }
        else {
            const { error } = await this.browserProxy.handler.updateContainer(this.editingContainer_);
            if (!error) {
                this.editingContainer_ = undefined;
            }
            else {
                this.editDialogError_ = this.formatError_(error);
            }
        }
    }
    async onDeleteContainerFromDialogClick_() {
        assert(this.deletingContainer_);
        const { error } = await this.browserProxy.handler.removeContainer(this.deletingContainer_.id);
        if (!error) {
            this.deletingContainer_ = undefined;
        }
        else {
            this.deleteDialogError_ = this.formatError_(error);
        }
    }
    getEditDialogTitle_() {
        return this.editingContainer_?.id
            ? this.i18n("SETTINGS_CONTAINERS_EDIT_CONTAINER_LABEL" /* ContainersStrings.SETTINGS_CONTAINERS_EDIT_CONTAINER_LABEL */)
            : this.i18n("SETTINGS_CONTAINERS_ADD_CONTAINER_LABEL" /* ContainersStrings.SETTINGS_CONTAINERS_ADD_CONTAINER_LABEL */);
    }
    formatError_(error) {
        let errorMessage = '';
        switch (error) {
            case ContainerOperationError.kNotFound:
                // This is the only error we expect in normal operation.
                errorMessage = this.i18n("SETTINGS_CONTAINERS_ERROR_NOT_FOUND" /* ContainersStrings.SETTINGS_CONTAINERS_ERROR_NOT_FOUND */);
                break;
            default:
                // These errors are not expected and should be fixed. Just display the
                // error code for debugging.
                errorMessage = ContainerOperationError[error];
                break;
        }
        return this.i18n("SETTINGS_CONTAINERS_ERROR_TEMPLATE" /* ContainersStrings.SETTINGS_CONTAINERS_ERROR_TEMPLATE */, errorMessage);
    }
}
customElements.define(SettingsBraveContentContainersElement.is, SettingsBraveContentContainersElement);
