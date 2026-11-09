// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { GenericAssociatedInterfacePendingReceiver } from '//resources/mojo/mojo/public/mojom/base/generic_pending_associated_receiver.mojom-webui.js';
import * as explainFulfillment from './explain_fulfillment.js';
// Maps `InlineFulfillment.resource_name` to its module. Names not listed here
// are ignored. Latency-sensitive cards such as Explain are imported
// statically, so the click doesn't wait on a module fetch before the browser
// gets the channel.
const LOADERS = new Map([
    ['explain_fulfillment.js', () => Promise.resolve(explainFulfillment)],
]);
function toGenericChannel(interfaceName, receiver) {
    const endpoint = receiver.handle;
    return {
        interfaceName,
        receiver: new GenericAssociatedInterfacePendingReceiver(endpoint),
    };
}
// Shows the card for an inline fulfillment action.
export class InlineFulfillmentHostElement extends HTMLElement {
    static get is() {
        return 'glic-inline-fulfillment-host';
    }
    loaders = LOADERS;
    // Bumped on every show() and clear(), so a load that finishes late is
    // dropped.
    generation_ = 0;
    // The remote of the card that is showing.
    remote_ = null;
    // Loads the module for `resourceName`, passes its channel to `send`, then
    // shows its card in place of the current one. Does nothing if the name is
    // unknown, the load or the card failed, or a newer show() or clear() ran
    // while loading.
    async show(resourceName, send) {
        const generation = ++this.generation_;
        const load = this.loaders.get(resourceName);
        if (!load) {
            return;
        }
        let module;
        try {
            module = await load();
        }
        catch {
            // Treated the same as an unknown name.
            return;
        }
        if (generation !== this.generation_) {
            return;
        }
        let card;
        try {
            card = module.create();
            // Must be sent first: until the receiver is sent, the card's remote has
            // no pipe, and any call the card makes when it's added would fail.
            send(toGenericChannel(card.interfaceName, card.remote.$.associateAndPassReceiver()));
        }
        catch {
            // if create() or send() throw, treated the exception the same as a failed
            // load.
            card?.remote.$.close();
            return;
        }
        this.removeCard_();
        this.remote_ = card.remote;
        this.appendChild(card.element);
    }
    // Removes the card and drops any load in flight.
    clear() {
        this.generation_++;
        this.removeCard_();
    }
    // Removes the card and drops the card's remote.
    removeCard_() {
        this.remote_?.$.close();
        this.remote_ = null;
        this.replaceChildren();
    }
}
customElements.define(InlineFulfillmentHostElement.is, InlineFulfillmentHostElement);
