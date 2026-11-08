// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { CustomHelpBubbleUserAction } from 'chrome://resources/cr_components/help_bubble/custom_help_bubble.mojom-webui.js';
import { CustomHelpBubbleProxyImpl } from 'chrome://resources/cr_components/help_bubble/custom_help_bubble_proxy.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getHtml } from './test_custom_help_bubble.html.js';
export class TestCustomHelpBubbleElement extends CrLitElement {
    static get is() {
        return 'test-custom-help-bubble';
    }
    render() {
        return getHtml.bind(this)();
    }
    handler_;
    constructor() {
        super();
        this.handler_ = CustomHelpBubbleProxyImpl.getInstance().getHandler();
    }
    onCancelClick_() {
        this.handler_.notifyUserAction(CustomHelpBubbleUserAction.kCancel);
    }
    onDismissClick_() {
        this.handler_.notifyUserAction(CustomHelpBubbleUserAction.kDismiss);
    }
    onSnoozeClick_() {
        this.handler_.notifyUserAction(CustomHelpBubbleUserAction.kSnooze);
    }
    onActionClick_() {
        this.handler_.notifyUserAction(CustomHelpBubbleUserAction.kAction);
    }
}
customElements.define(TestCustomHelpBubbleElement.is, TestCustomHelpBubbleElement);
