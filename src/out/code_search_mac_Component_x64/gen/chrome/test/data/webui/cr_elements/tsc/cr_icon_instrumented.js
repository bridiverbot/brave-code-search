// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { CrIconElement } from '//resources/cr_elements/cr_icon/cr_icon.js';
import { PromiseResolver } from '//resources/js/promise_resolver.js';
// A subclass of CrIconElement instrumented to expose a public 'updatedComplete'
// promise that can be leveraged to catch any errors thrown during the updated()
// lifecycle callback, since Lit does not natively expose a good way to catch
// such errors. This subclass doesn't have anything specific to CrIconElement
// and similar approach could be used for any other element. It is implemented
// as a subclass instead of being added to CrIconElement or CrLitElement
// directly to avoid any unnecessary overhead in production, since the
// `updatedComplete` promise is only used in tests.
class CrIconInstrumentedElement extends CrIconElement {
    static get is() {
        return 'cr-icon-instrumented';
    }
    updatedCompleteResolver_ = new PromiseResolver();
    // Don't confuse with LitElement's `updateComplete`, note the extra 'd'
    get updatedComplete() {
        return this.updatedCompleteResolver_.promise;
    }
    shouldUpdate(changedProperties) {
        const shouldUpdate = super.shouldUpdate(changedProperties);
        if (shouldUpdate && this.hasUpdated) {
            this.updatedCompleteResolver_ = new PromiseResolver();
        }
        return shouldUpdate;
    }
    updated(changedProperties) {
        try {
            super.updated(changedProperties);
            this.updatedCompleteResolver_.resolve();
        }
        catch (e) {
            this.updatedCompleteResolver_.reject(e);
        }
    }
}
customElements.define(CrIconInstrumentedElement.is, CrIconInstrumentedElement);
