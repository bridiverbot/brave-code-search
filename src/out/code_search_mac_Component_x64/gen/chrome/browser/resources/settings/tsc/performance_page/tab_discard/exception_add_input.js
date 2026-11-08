// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_input/cr_input.js';
import { PrefService } from '/shared/settings/prefs2/pref_service.js';
import { assert } from 'chrome://resources/js/assert.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { convertDateToWindowsEpoch } from '../../time.js';
import { MemorySaverModeExceptionListAction, PerformanceMetricsProxyImpl } from '../performance_metrics_proxy.js';
import { getHtml } from './exception_add_input.html.js';
import { ExceptionValidationMixin, TAB_DISCARD_EXCEPTIONS_PREF } from './exception_validation_mixin.js';
const ExceptionAddInputElementBase = ExceptionValidationMixin(CrLitElement);
export class ExceptionAddInputElement extends ExceptionAddInputElementBase {
    static get is() {
        return 'tab-discard-exception-add-input';
    }
    render() {
        return getHtml.bind(this)();
    }
    metricsProxy_ = PerformanceMetricsProxyImpl.getInstance();
    onRuleValueChanged_(e) {
        this.rule = e.detail.value;
        this.validate();
    }
    submit() {
        assert(!this.submitDisabled);
        const rule = this.rule.trim();
        PrefService.getInstance().setPrefDictEntry(TAB_DISCARD_EXCEPTIONS_PREF, rule, convertDateToWindowsEpoch());
        this.metricsProxy_.recordExceptionListAction(MemorySaverModeExceptionListAction.ADD_MANUAL);
    }
}
customElements.define(ExceptionAddInputElement.is, ExceptionAddInputElement);
