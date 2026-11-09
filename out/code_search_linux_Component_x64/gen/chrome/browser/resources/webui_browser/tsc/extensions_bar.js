// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import './extension.js';
import { CrIconButtonElement } from '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import { assert } from '//resources/js/assert.js';
import { loadTimeData } from '//resources/js/load_time_data.js';
import { TrackedElementManager } from '//resources/js/tracked_element/tracked_element_manager.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { PageCallbackRouter, PageHandlerFactory, PageHandlerRemote } from '/shared/extensions_bar.mojom-webui.js';
import { IconTable } from '/shared/icon_table.js';
import { HighlightTracker } from '/shared/toolbar_button.js';
import { ExtensionElement } from './extension.js';
import { getCss } from './extensions_bar.css.js';
export class ExtensionsBarElement extends CrLitElement {
    static get is() {
        return 'webui-browser-extensions-bar';
    }
    static get styles() {
        return getCss();
    }
    // We manage the rendering directly.
    render() {
        return '';
    }
    static get properties() {
        return {
            visible: { type: Boolean, reflect: true },
        };
    }
    #visible_accessor_storage = false;
    get visible() { return this.#visible_accessor_storage; }
    set visible(value) { this.#visible_accessor_storage = value; }
    callbackRouter = new PageCallbackRouter();
    handler = new PageHandlerRemote();
    buttons = new Map();
    iconTable_ = IconTable.getInstance();
    extensionsMenuButton;
    trackedElementManager;
    // Tracks whether a bubble is anchored to the extensions menu button.
    menuButtonHighlightTracker_ = new HighlightTracker();
    constructor() {
        super();
        this.trackedElementManager = TrackedElementManager.getInstance();
        this.extensionsMenuButton = new CrIconButtonElement();
        this.extensionsMenuButton.id = 'extensionsMenuButton';
        this.extensionsMenuButton.ironIcon = 'webui-browser:chrome-extension';
        this.extensionsMenuButton.title =
            loadTimeData.getString('tooltipExtensionsButton');
        this.extensionsMenuButton.addEventListener('pointerdown', this.menuButtonHighlightTracker_.onPointerdown);
        this.extensionsMenuButton.addEventListener('click', this.extensionMenuButtonClicked.bind(this));
        this.trackedElementManager.startTracking(this.extensionsMenuButton, 'kExtensionsMenuButtonElementId', {
            secondaryId: 'ext:',
            onHighlightChanged: this.menuButtonHighlightTracker_.onHighlightChanged,
        });
        const factory = PageHandlerFactory.getRemote();
        factory.createPageHandler(this.callbackRouter.$.bindNewPipeAndPassRemote(), this.handler.$.bindNewPipeAndPassReceiver());
        this.callbackRouter.actionsAddedOrUpdated.addListener(this.actionsAddedOrUpdated.bind(this));
        this.callbackRouter.actionRemoved.addListener(this.actionRemoved.bind(this));
        this.callbackRouter.actionPoppedOut.addListener(this.actionPoppedOut.bind(this));
    }
    firstUpdated() {
        this.shadowRoot.appendChild(this.extensionsMenuButton);
    }
    actionsAddedOrUpdated(icons, updates) {
        this.iconTable_.applyUpdates(icons);
        for (const update of updates) {
            if (!this.buttons.has(update.id)) {
                const extensionButton = new ExtensionElement(update.id, this);
                this.buttons.set(update.id, extensionButton);
                this.shadowRoot.insertBefore(extensionButton, this.extensionsMenuButton);
            }
            const extensionButton = this.buttons.get(update.id);
            assert(extensionButton);
            extensionButton.iconHandle = update.icon;
            extensionButton.setAttribute('aria-label', update.accessibleName);
            extensionButton.setAttribute('title', update.tooltip);
            extensionButton.visible = update.isVisible;
            extensionButton.requestUpdate();
        }
        this.updateVisibility();
    }
    actionRemoved(icons, actionId) {
        this.iconTable_.applyUpdates(icons);
        const extensionButton = this.buttons.get(actionId);
        assert(extensionButton);
        this.buttons.delete(actionId);
        extensionButton.remove();
        this.updateVisibility();
    }
    actionPoppedOut() {
        // TODO(webium): If we have an animation (which we ought to); this should
        // probably consider its timing.
        return {};
    }
    updateVisibility() {
        this.visible = (this.buttons.size !== 0);
    }
    onClick(id) {
        this.handler.executeUserAction(id);
    }
    onContextMenu(source, id) {
        this.handler.showContextMenu(source, id);
    }
    extensionMenuButtonClicked(e) {
        if (this.menuButtonHighlightTracker_.shouldSkipClick(e)) {
            return;
        }
        this.handler.toggleExtensionsMenuFromWebUI();
    }
}
customElements.define(ExtensionsBarElement.is, ExtensionsBarElement);
