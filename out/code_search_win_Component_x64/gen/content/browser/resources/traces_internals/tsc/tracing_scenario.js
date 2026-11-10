// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '//resources/cr_elements/cr_toggle/cr_toggle.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { TracingScenarioState } from './traces_internals.mojom-webui.js';
import { getCss } from './tracing_scenario.css.js';
import { getHtml } from './tracing_scenario.html.js';
export class TracingScenarioElement extends CrLitElement {
    static get is() {
        return 'tracing-scenario';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            scenario: { type: Object },
            enabled: { type: Boolean },
        };
    }
    #scenario_accessor_storage = {
        scenarioName: '',
        description: '',
        isLocalScenario: true,
        isEnabled: false,
        currentState: TracingScenarioState.kDisabled,
    };
    get scenario() { return this.#scenario_accessor_storage; }
    set scenario(value) { this.#scenario_accessor_storage = value; }
    #enabled_accessor_storage = false;
    get enabled() { return this.#enabled_accessor_storage; }
    set enabled(value) { this.#enabled_accessor_storage = value; }
    onEnabledChange_(event) {
        const toggle = event.target;
        this.dispatchEvent(new CustomEvent('value-changed', {
            detail: {
                value: toggle.checked,
            },
        }));
    }
    getCurrentStateCssClass_() {
        if (!this.scenario.isEnabled) {
            return 'state-disabled';
        }
        switch (this.scenario.currentState) {
            case TracingScenarioState.kDisabled:
                return 'state-idle';
            case TracingScenarioState.kEnabled:
                return 'state-active';
            case TracingScenarioState.kSetup:
            case TracingScenarioState.kStarting:
            case TracingScenarioState.kRecording:
            case TracingScenarioState.kStopping:
            case TracingScenarioState.kFinalizing:
            case TracingScenarioState.kCloning:
                return 'state-recording';
            default:
                return '';
        }
    }
    getCurrentStateText_() {
        if (!this.scenario.isEnabled) {
            return 'Disabled';
        }
        switch (this.scenario.currentState) {
            case TracingScenarioState.kDisabled:
                return 'Idle';
            case TracingScenarioState.kEnabled:
                return 'Active';
            case TracingScenarioState.kSetup:
                return 'Setup';
            case TracingScenarioState.kStarting:
                return 'Starting';
            case TracingScenarioState.kRecording:
                return 'Recording';
            case TracingScenarioState.kStopping:
                return 'Stopping';
            case TracingScenarioState.kFinalizing:
                return 'Finalizing';
            case TracingScenarioState.kCloning:
                return 'Cloning';
            default:
                return '';
        }
    }
}
customElements.define(TracingScenarioElement.is, TracingScenarioElement);
