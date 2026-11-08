// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_components/cr_shortcut_input/cr_shortcut_input.js';
import { I18nMixinLit } from 'chrome://resources/cr_elements/i18n_mixin_lit.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { createDummyKeyboardShortcutDelegate } from './keyboard_shortcut_delegate.js';
import { getCss } from './keyboard_shortcuts.css.js';
import { getHtml } from './keyboard_shortcuts.html.js';
const ExtensionsKeyboardShortcutsElementBase = I18nMixinLit(CrLitElement);
// The UI to display and manage keyboard shortcuts set for extension commands.
export class ExtensionsKeyboardShortcutsElement extends ExtensionsKeyboardShortcutsElementBase {
    static get is() {
        return 'extensions-keyboard-shortcuts';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            delegate: { type: Object },
            items: { type: Array },
            showGlobalScopeOption_: { type: Boolean },
        };
    }
    #delegate_accessor_storage = createDummyKeyboardShortcutDelegate();
    get delegate() { return this.#delegate_accessor_storage; }
    set delegate(value) { this.#delegate_accessor_storage = value; }
    #items_accessor_storage = [];
    get items() { return this.#items_accessor_storage; }
    set items(value) { this.#items_accessor_storage = value; }
    #showGlobalScopeOption__accessor_storage = loadTimeData.getBoolean('enableGlobalScopedShortcuts');
    get showGlobalScopeOption_() { return this.#showGlobalScopeOption__accessor_storage; }
    set showGlobalScopeOption_(value) { this.#showGlobalScopeOption__accessor_storage = value; }
    firstUpdated() {
        this.addEventListener('view-enter-start', this.onViewEnter_);
    }
    onInputCaptureChange_(event) {
        this.delegate.setShortcutHandlingSuspended(event.detail);
    }
    onShortcutUpdated_(itemId, commandName, event) {
        this.delegate.updateExtensionCommandKeybinding(itemId, commandName, event.detail);
    }
    onViewEnter_() {
        chrome.metricsPrivate.recordUserAction('Options_ExtensionCommands');
    }
    calculateShownItems_() {
        return this.items.filter(function (item) {
            return item.commands.length > 0;
        });
    }
    computeScopeAriaLabel_(item, command) {
        return this.i18n('shortcutScopeLabel', command.description, item.name);
    }
    /**
     * Determines whether to disable the dropdown menu for the command's scope.
     */
    computeScopeDisabled_(command) {
        return command.isExtensionAction || !command.isActive;
    }
    onScopeChanged_(event) {
        const target = event.target;
        const extensionId = target.dataset['extensionId'];
        const commandName = target.dataset['commandName'];
        this.delegate.updateExtensionCommandScope(extensionId, commandName, target.value);
    }
    isChromeScopeSelected_(command) {
        return command.scope === chrome.developerPrivate.CommandScope.CHROME;
    }
    isGlobalScopeSelected_(command) {
        return command.scope === chrome.developerPrivate.CommandScope.GLOBAL;
    }
    computeInputDisabled_(item, command) {
        return item.isCommandRegistrationHandledExternally &&
            command.scope === chrome.developerPrivate.CommandScope.GLOBAL;
    }
}
customElements.define(ExtensionsKeyboardShortcutsElement.is, ExtensionsKeyboardShortcutsElement);
