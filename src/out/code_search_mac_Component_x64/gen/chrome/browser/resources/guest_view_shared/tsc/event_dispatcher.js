// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { assert, assertNonNull } from '//resources/js/assert.js';
import { BrowserProxyImpl } from './slim_webview_browser_proxy.js';
export class EventDict {
    data;
    constructor(data) {
        this.data = data;
    }
    getString(key) {
        assertNonNull(this.data.storage[key]?.stringValue);
        return this.data.storage[key].stringValue;
    }
    getBool(key) {
        assertNonNull(this.data.storage[key]?.boolValue);
        return this.data.storage[key].boolValue;
    }
    getInt(key) {
        assertNonNull(this.data.storage[key]?.intValue);
        return this.data.storage[key].intValue;
    }
    getDouble(key) {
        assertNonNull(this.data.storage[key]?.doubleValue);
        return this.data.storage[key].doubleValue;
    }
    getDict(key) {
        assertNonNull(this.data.storage[key]?.dictionaryValue);
        return new EventDict(this.data.storage[key].dictionaryValue);
    }
}
/**
 * Dispatches events to the given element if the instance ID matches.
 * Events are configured via the EventMap, which maps event names to
 * EventDescriptors.
 *
 * Elements that use this class should call connect() when they are connected to
 * the DOM and disconnect() when they are disconnected.
 */
export class EventDispatcher {
    eventDescriptors;
    elementInstanceId;
    guestInstanceId;
    element;
    listenerId = null;
    constructor(eventDescriptors, elementInstanceId, guestInstanceId, element) {
        for (const [eventName, descriptor] of eventDescriptors) {
            assert(descriptor.cancelable === undefined ||
                descriptor.factory === undefined, `Event descriptor for "${eventName}" cannot specify both cancelable and factory`);
        }
        this.eventDescriptors = eventDescriptors;
        this.elementInstanceId = elementInstanceId;
        this.guestInstanceId = guestInstanceId;
        this.element = element;
    }
    connect() {
        assert(this.listenerId === null);
        const proxy = BrowserProxyImpl.getInstance();
        this.listenerId = proxy.callbackRouter.dispatchEvent.addListener(this.dispatch.bind(this));
    }
    disconnect() {
        assert(this.listenerId !== null);
        const proxy = BrowserProxyImpl.getInstance();
        proxy.callbackRouter.removeListener(this.listenerId);
        this.listenerId = null;
    }
    dispatch(eventName, args, instanceId) {
        const descriptor = this.eventDescriptors.get(eventName);
        if (!descriptor) {
            return;
        }
        const targetId = descriptor.guestInstanceAssociated ?
            this.guestInstanceId :
            this.elementInstanceId;
        if (instanceId !== targetId) {
            return;
        }
        let event = null;
        if (descriptor.factory) {
            event = descriptor.factory(new EventDict(args), this.guestInstanceId);
        }
        else {
            event = new Event(eventName, {
                bubbles: true,
                cancelable: descriptor.cancelable,
            });
        }
        if (event === null) {
            return;
        }
        if (descriptor.handler) {
            descriptor.handler.call(event, this.element);
        }
        else {
            this.element.dispatchEvent(event);
        }
    }
}
