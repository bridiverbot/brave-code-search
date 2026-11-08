// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import './toolbar_chip_button.js';
import '//resources/cr_elements/cr_icon/cr_icon.js';
import './icons.js';
import { loadTimeData } from '//resources/js/load_time_data.js';
import { TrackedElementManager } from '//resources/js/tracked_element/tracked_element_manager.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { getContextMenuPosition, getContextMenuSourceType, HelpBubbleAnchorMixin, HighlightTracker } from '/shared/toolbar_button.js';
import { ContextMenuType } from '/shared/toolbar_ui_api_data_model.mojom-webui.js';
import { BrowserProxyImpl } from './browser_proxy.js';
import { CollapsibleLabelButtonMixin } from './collapsible_label_button.js';
import { getCss } from './glic_button.css.js';
import { getHtml } from './glic_button.html.js';
const GlicButtonElementBase = HelpBubbleAnchorMixin(CollapsibleLabelButtonMixin(CrLitElement));
export class GlicButtonElement extends GlicButtonElementBase {
    static get is() {
        return 'glic-button';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            ...super.properties,
            enabled: { type: Boolean },
            state: { type: Object },
            label: { type: String },
        };
    }
    #enabled_accessor_storage = true;
    get enabled() { return this.#enabled_accessor_storage; }
    set enabled(value) { this.#enabled_accessor_storage = value; }
    #state_accessor_storage = {
        open: false,
        shouldShow: false,
        isContextMenuVisible: false,
        shouldMatchToolbarStyle: false,
        useCustomThemeFallback: false,
        nudgeLabel: null,
    };
    get state() { return this.#state_accessor_storage; }
    set state(value) { this.#state_accessor_storage = value; }
    #label_accessor_storage = loadTimeData.getString('glicButtonLabel');
    get label() { return this.#label_accessor_storage; }
    set label(value) { this.#label_accessor_storage = value; }
    highlightTracker = new HighlightTracker();
    browserProxy_ = BrowserProxyImpl.getInstance();
    updated(changedProperties) {
        super.updated(changedProperties);
        const oldState = changedProperties.get('state');
        const stateNeedsLayout = changedProperties.has('state') &&
            (!oldState || oldState.shouldShow !== this.state.shouldShow ||
                oldState.nudgeLabel !== this.state.nudgeLabel);
        if (stateNeedsLayout || changedProperties.has('label')) {
            this.fire('request-layout');
        }
    }
    focus() {
        this.$.button.focus();
    }
    shouldBeShown() {
        return this.state.shouldShow;
    }
    hasLabel_() {
        return !!this.getLabel_();
    }
    getLabel_() {
        return this.state.nudgeLabel || this.label;
    }
    getTooltip_() {
        return this.adjustTooltipForHelpBubble(loadTimeData.getString(this.state.open ? 'glicButtonTooltipClose' : 'glicButtonTooltip'));
    }
    getAriaLabel_() {
        if (this.state.open) {
            return loadTimeData.getString('glicButtonTooltipClose');
        }
        return this.getLabel_() || loadTimeData.getString('glicButtonAccName');
    }
    onClick_(e) {
        if (!this.highlightTracker.shouldSkipClick(e)) {
            TrackedElementManager.getInstance().notifyElementActivated(this);
            this.browserProxy_.toolbarUIHandler.onGlicButtonClicked();
        }
    }
    onContextmenu_(e) {
        e.preventDefault();
        this.browserProxy_.toolbarUIHandler.showContextMenu(ContextMenuType.kGlic, getContextMenuPosition(this), getContextMenuSourceType(e), /*showMenuToken=*/ null);
    }
}
customElements.define(GlicButtonElement.is, GlicButtonElement);
