// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import '/strings.m.js';
import { loadTimeData } from '//resources/js/load_time_data.js';
import { TrackedElementManager } from '//resources/js/tracked_element/tracked_element_manager.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { HelpBubbleAnchorMixin, HighlightTracker } from '/shared/toolbar_button.js';
import { BrowserProxyImpl } from './browser_proxy.js';
import { getCss } from './performance_intervention_button.css.js';
import { getHtml } from './performance_intervention_button.html.js';
const PerformanceInterventionButtonElementBase = HelpBubbleAnchorMixin(CrLitElement);
export class PerformanceInterventionButtonElement extends PerformanceInterventionButtonElementBase {
    static get is() {
        return 'performance-intervention-button';
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
            state: { type: Object },
        };
    }
    #state_accessor_storage = {
        shouldBeShown: false,
    };
    get state() { return this.#state_accessor_storage; }
    set state(value) { this.#state_accessor_storage = value; }
    browserProxy_ = BrowserProxyImpl.getInstance();
    highlightTracker = new HighlightTracker();
    getLabel_() {
        return loadTimeData.getString('performanceInterventionButtonAccName');
    }
    getTooltip_() {
        return this.adjustTooltipForHelpBubble(loadTimeData.getString('performanceInterventionButtonTooltip'));
    }
    onClick_(e) {
        if (!this.highlightTracker.shouldSkipClick(e)) {
            TrackedElementManager.getInstance().notifyElementActivated(this);
            this.browserProxy_.toolbarUIHandler
                .onPerformanceInterventionButtonClicked();
        }
    }
}
customElements.define(PerformanceInterventionButtonElement.is, PerformanceInterventionButtonElement);
