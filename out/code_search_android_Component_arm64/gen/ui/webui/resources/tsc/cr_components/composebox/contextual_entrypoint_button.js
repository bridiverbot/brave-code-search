// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import './icons.html.js';
import './composebox_tab_favicon.js';
import './composebox_favicon_group.js';
import './contextual_action_menu.js';
import '//resources/cr_elements/icons.html.js';
import '//resources/cr_elements/cr_button/cr_button.js';
import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import '//resources/cr_elements/cr_icon/cr_icon.js';
import { MojoPluralStringProxy } from '//resources/cr_components/search/mojo_plural_string_proxy.js';
import { I18nMixinLit } from '//resources/cr_elements/i18n_mixin_lit.js';
import { assert } from '//resources/js/assert.js';
import { EventTracker } from '//resources/js/event_tracker.js';
import { loadTimeData } from '//resources/js/load_time_data.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { ToolMode } from '//resources/mojo/components/omnibox/composebox/composebox_query.mojom-webui.js';
import { getLoadTimeBoolean, GlifAnimationState, recordBoolean } from './common.js';
import { getCss } from './contextual_entrypoint_button.css.js';
import { getHtml } from './contextual_entrypoint_button.html.js';
import { WindowProxy } from './window_proxy.js';
const ContextualEntrypointButtonElementBase = I18nMixinLit(CrLitElement);
export class ContextualEntrypointButtonElement extends ContextualEntrypointButtonElementBase {
    static get is() {
        return 'cr-composebox-contextual-entrypoint-button';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            // =========================================================================
            // Public properties
            // =========================================================================
            showContextMenuDescription: { type: Boolean },
            inputState: { type: Object },
            glifAnimationState: { type: String, reflect: true },
            hasVirtualFocus: { type: Boolean, reflect: true },
            applyContextButtonBackground: { type: Boolean, reflect: true },
            isOblongShape: { type: Boolean, reflect: true },
            windowWidthBelowThreshold_: { type: Boolean },
            sharedTabs: { type: Array },
            restoredTabs: { type: Array },
            tabFaviconChipsToCoinsEnabled_: { type: Boolean },
            energyEffectAnimationEnabled: { type: Boolean, reflect: true },
            disableFallbackGlifAnimation: { type: Boolean },
            smartTabSharingActive: { type: Boolean },
            entrypointAriaLabel_: { type: String },
            isLensSearchbox_: {
                type: Boolean,
                reflect: true,
            },
        };
    }
    #showContextMenuDescription_accessor_storage = false;
    get showContextMenuDescription() { return this.#showContextMenuDescription_accessor_storage; }
    set showContextMenuDescription(value) { this.#showContextMenuDescription_accessor_storage = value; }
    #inputState_accessor_storage = null;
    get inputState() { return this.#inputState_accessor_storage; }
    set inputState(value) { this.#inputState_accessor_storage = value; }
    #sharedTabs_accessor_storage = [];
    get sharedTabs() { return this.#sharedTabs_accessor_storage; }
    set sharedTabs(value) { this.#sharedTabs_accessor_storage = value; }
    #restoredTabs_accessor_storage = [];
    get restoredTabs() { return this.#restoredTabs_accessor_storage; }
    set restoredTabs(value) { this.#restoredTabs_accessor_storage = value; }
    #glifAnimationState_accessor_storage = GlifAnimationState.INELIGIBLE;
    get glifAnimationState() { return this.#glifAnimationState_accessor_storage; }
    set glifAnimationState(value) { this.#glifAnimationState_accessor_storage = value; }
    #hasVirtualFocus_accessor_storage = false;
    get hasVirtualFocus() { return this.#hasVirtualFocus_accessor_storage; }
    set hasVirtualFocus(value) { this.#hasVirtualFocus_accessor_storage = value; }
    #applyContextButtonBackground_accessor_storage = false;
    get applyContextButtonBackground() { return this.#applyContextButtonBackground_accessor_storage; }
    set applyContextButtonBackground(value) { this.#applyContextButtonBackground_accessor_storage = value; }
    #isOblongShape_accessor_storage = false;
    get isOblongShape() { return this.#isOblongShape_accessor_storage; }
    set isOblongShape(value) { this.#isOblongShape_accessor_storage = value; }
    #energyEffectAnimationEnabled_accessor_storage = false;
    get energyEffectAnimationEnabled() { return this.#energyEffectAnimationEnabled_accessor_storage; }
    set energyEffectAnimationEnabled(value) { this.#energyEffectAnimationEnabled_accessor_storage = value; }
    #disableFallbackGlifAnimation_accessor_storage = false;
    get disableFallbackGlifAnimation() { return this.#disableFallbackGlifAnimation_accessor_storage; }
    set disableFallbackGlifAnimation(value) { this.#disableFallbackGlifAnimation_accessor_storage = value; }
    #smartTabSharingActive_accessor_storage = false;
    get smartTabSharingActive() { return this.#smartTabSharingActive_accessor_storage; }
    set smartTabSharingActive(value) { this.#smartTabSharingActive_accessor_storage = value; }
    #entrypointAriaLabel__accessor_storage = '';
    get entrypointAriaLabel_() { return this.#entrypointAriaLabel__accessor_storage; }
    set entrypointAriaLabel_(value) { this.#entrypointAriaLabel__accessor_storage = value; }
    #windowWidthBelowThreshold__accessor_storage = false;
    get windowWidthBelowThreshold_() { return this.#windowWidthBelowThreshold__accessor_storage; }
    set windowWidthBelowThreshold_(value) { this.#windowWidthBelowThreshold__accessor_storage = value; }
    #isLensSearchbox__accessor_storage = loadTimeData.valueExists('isLensSearchbox') &&
        loadTimeData.getBoolean('isLensSearchbox');
    get isLensSearchbox_() { return this.#isLensSearchbox__accessor_storage; }
    set isLensSearchbox_(value) { this.#isLensSearchbox__accessor_storage = value; }
    #tabFaviconChipsToCoinsEnabled__accessor_storage = loadTimeData.getBoolean('tabFaviconChipsToCoinsEnabled');
    get tabFaviconChipsToCoinsEnabled_() { return this.#tabFaviconChipsToCoinsEnabled__accessor_storage; }
    set tabFaviconChipsToCoinsEnabled_(value) { this.#tabFaviconChipsToCoinsEnabled__accessor_storage = value; }
    showContextMenuDescriptionEnabled_ = getLoadTimeBoolean('composeboxShowContextMenuDescription', false);
    metricsSource_ = loadTimeData.getString('composeboxSource');
    eventTracker_ = new EventTracker();
    constructor() {
        super();
    }
    // Return reversed lists of restored (historical) and
    // shared tabs (selected tabs).
    getTabs_() {
        if (this.smartTabSharingActive) {
            return [];
        }
        const reversedShared = [...this.sharedTabs].reverse();
        const reversedRestored = [...(this.restoredTabs || [])].reverse();
        return reversedShared.concat(reversedRestored);
    }
    getSubmittedTabIds_() {
        return new Set((this.restoredTabs || []).map(t => t.tabId));
    }
    connectedCallback() {
        super.connectedCallback();
        this.eventTracker_.add(WindowProxy.getInstance().matchMedia('(width <= 264px)'), 'change', (e) => {
            this.windowWidthBelowThreshold_ = e.matches;
        });
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.eventTracker_.removeAll();
    }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('inputState') && this.inputState) {
            const inToolMode = this.inputState.activeTool !== ToolMode.kUnspecified;
            if (this.showContextMenuDescriptionEnabled_) {
                this.showContextMenuDescription = !inToolMode;
            }
        }
        if (changedProperties.has('sharedTabs') ||
            changedProperties.has('restoredTabs') ||
            changedProperties.has('smartTabSharingActive')) {
            this.updateAriaLabel_();
        }
    }
    async updateAriaLabel_() {
        const baseLabel = this.i18n('addContextTitle');
        const tabCount = this.getTabs_().length;
        if (tabCount === 0) {
            this.entrypointAriaLabel_ = baseLabel;
            return;
        }
        const sharingTabsStr = await MojoPluralStringProxy.getInstance().getPluralString('sharingTabs', tabCount);
        this.entrypointAriaLabel_ = `${baseLabel}, ${sharingTabsStr}`;
    }
    getEntrypointAriaLabel_() {
        return this.entrypointAriaLabel_ || this.i18n('addContextTitle');
    }
    onEntrypointClick_(e) {
        e.stopPropagation();
        const metricName = 'ContextualSearch.ContextMenuEntry.Clicked.' + this.metricsSource_;
        recordBoolean(metricName, true);
        const entrypoint = this.shadowRoot.querySelector('#entrypoint');
        assert(entrypoint);
        this.fire('context-menu-entrypoint-click', {
            x: entrypoint.getBoundingClientRect().left,
            y: entrypoint.getBoundingClientRect().bottom,
        });
    }
    onEntrypointPointerenter_() {
        this.fire('context-menu-entrypoint-hover');
    }
    onIconAnimationend_(e) {
        this.onAnimationEnd_(e, 'icon-rotate');
    }
    onDescriptionAnimationend_(e) {
        this.onAnimationEnd_(e, 'slide-in');
    }
    onAimBackgroundAnimationend_(e) {
        if (this.showContextMenuDescription) {
            return;
        }
        this.onAnimationEnd_(e, 'background-fade');
    }
    onAnimationEnd_(e, animationName) {
        if (e.animationName === animationName) {
            this.glifAnimationState = GlifAnimationState.FINISHED;
        }
    }
    getWrapperId_() {
        return this.glifAnimationState !== GlifAnimationState.INELIGIBLE ?
            'glowWrapper' :
            '';
    }
    getWrapperCssClass_() {
        return this.glifAnimationState !== GlifAnimationState.INELIGIBLE ?
            'glow-container' :
            '';
    }
}
customElements.define(ContextualEntrypointButtonElement.is, ContextualEntrypointButtonElement);
