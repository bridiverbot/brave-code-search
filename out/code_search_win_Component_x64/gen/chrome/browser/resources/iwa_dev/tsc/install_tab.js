// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { getCss as getSharedCss } from './shared_style.css.js';
/**
 * Abstract base class for all tab sub-components in the IWA installation
 * dialog.
 */
export class IwaDevInstallTabElement extends CrLitElement {
    static get styles() {
        return getSharedCss();
    }
    /**
     * Notifies parent component of the tab's current validity state.
     */
    notifyValidChanged() {
        this.fire('valid-changed', { isValid: this.isValid() });
    }
}
