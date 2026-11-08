// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { assert, assertInstanceof, assertNotReached } from '//resources/js/assert.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { EventDispatcher } from './event_dispatcher.js';
import { getCss } from './slim_webview.css.js';
import { getHtml } from './slim_webview.html.js';
import { BrowserProxyImpl, PermissionResponseAction } from './slim_webview_browser_proxy.js';
const GUEST_INSTANCE_ID_PENDING = 0;
export class ExitEvent extends Event {
    reason;
    processId;
    static factory(args) {
        return new ExitEvent(args);
    }
    constructor(args) {
        super('exit', {
            bubbles: true,
            cancelable: false,
        });
        this.reason = args.getString('reason');
        this.processId = args.getInt('processId');
    }
}
export class LoadEvent extends Event {
    url;
    isTopLevel;
    static loadCommitFactory(args) {
        return new LoadEvent('loadcommit', args);
    }
    static loadStartFactory(args) {
        return new LoadEvent('loadstart', args);
    }
    constructor(type, args) {
        super(type, {
            bubbles: true,
            cancelable: false,
        });
        this.url = args.getString('url');
        this.isTopLevel = args.getBool('isTopLevel');
    }
}
export class LoadAbortEvent extends LoadEvent {
    code;
    reason;
    static factory(args) {
        return new LoadAbortEvent(args);
    }
    constructor(args) {
        super('loadabort', args);
        this.code = args.getInt('code');
        this.reason = args.getString('reason');
    }
}
export class NewWindowEvent extends Event {
    targetUrl;
    windowOpenDisposition;
    initialWidth;
    initialHeight;
    static factory(args) {
        return new NewWindowEvent(args);
    }
    constructor(args) {
        super('newwindow', {
            bubbles: true,
            cancelable: true,
        });
        const requestInfo = args.getDict('requestInfo');
        this.initialWidth = requestInfo.getInt('initialWidth');
        this.initialHeight = requestInfo.getInt('initialHeight');
        this.targetUrl = requestInfo.getString('targetUrl');
        this.windowOpenDisposition = requestInfo.getString('windowOpenDisposition');
    }
}
export class ZoomChangeEvent extends Event {
    oldZoomFactor;
    newZoomFactor;
    static factory(args) {
        return new ZoomChangeEvent(args);
    }
    constructor(args) {
        super('zoomchange', {
            bubbles: true,
            cancelable: false,
        });
        this.oldZoomFactor = args.getDouble('oldZoomFactor');
        this.newZoomFactor = args.getDouble('newZoomFactor');
    }
}
export class PermissionRequestEvent extends Event {
    permission;
    request;
    requestId;
    guestInstanceId;
    actionTaken = false;
    static factory(args, guestInstanceId) {
        return new PermissionRequestEvent(args, guestInstanceId);
    }
    constructor(args, guestInstanceId) {
        super('permissionrequest', {
            bubbles: true,
            cancelable: true,
        });
        this.permission = args.getString('permission');
        this.requestId = args.getInt('requestId');
        this.guestInstanceId = guestInstanceId;
        const requestInfo = args.getDict('requestInfo');
        this.request = {
            url: requestInfo.getString('url'),
            allow: this.allow.bind(this),
            deny: this.deny.bind(this),
        };
    }
    handle(element) {
        const performDefault = element.dispatchEvent(this);
        if (!performDefault || this.actionTaken) {
            // Because SlimWebView is only used in WebUIs, we assume that an action
            // is always taken by the event handler that chose to prevent the default
            // action. Note that the action might be taken asynchronously.
            return;
        }
        this.actionTaken = true;
        this.defaultAction();
    }
    allow() {
        assert(!this.actionTaken);
        this.actionTaken = true;
        BrowserProxyImpl.getInstance().handler.setPermission(this.guestInstanceId, this.requestId, PermissionResponseAction.kAllow);
    }
    deny() {
        assert(!this.actionTaken);
        this.actionTaken = true;
        BrowserProxyImpl.getInstance().handler.setPermission(this.guestInstanceId, this.requestId, PermissionResponseAction.kDeny);
    }
    async defaultAction() {
        const result = await BrowserProxyImpl.getInstance().handler.setPermission(this.guestInstanceId, this.requestId, PermissionResponseAction.kDefault);
        if (!result.allowed) {
            console.warn(`Permission ${this.permission} denied`);
        }
    }
}
class SizeChangedEvent extends Event {
    oldHeight;
    oldWidth;
    newHeight;
    newWidth;
    static factory(args) {
        return new SizeChangedEvent(args);
    }
    constructor(args) {
        super('sizechanged', {
            bubbles: true,
            cancelable: false,
        });
        this.oldHeight = args.getInt('oldHeight');
        this.oldWidth = args.getInt('oldWidth');
        this.newHeight = args.getInt('newHeight');
        this.newWidth = args.getInt('newWidth');
    }
    handle(element) {
        assertInstanceof(element, SlimWebviewElement);
        const maxWidth = element.maxwidth || element.offsetWidth;
        const minWidth = Math.min(element.minwidth || element.offsetWidth, maxWidth);
        const maxHeight = element.maxheight || element.offsetHeight;
        const minHeight = Math.min(element.minheight || element.offsetHeight, maxHeight);
        if (!element.autosize ||
            (this.newWidth >= minWidth && this.newWidth <= maxWidth &&
                this.newHeight >= minHeight && this.newHeight <= maxHeight)) {
            element.style.width = `${this.newWidth}px`;
            element.style.height = `${this.newHeight}px`;
            element.dispatchEvent(this);
        }
    }
}
const eventDescriptors = new Map([
    ['contentload', {}],
    [
        'exit',
        {
            factory: ExitEvent.factory,
        },
    ],
    [
        'loadabort',
        {
            factory: LoadAbortEvent.factory,
        },
    ],
    [
        'loadcommit',
        {
            factory: LoadEvent.loadCommitFactory,
        },
    ],
    [
        'loadstart',
        {
            factory: LoadEvent.loadStartFactory,
        },
    ],
    [
        'loadstop',
        {},
    ],
    [
        'newwindow',
        {
            factory: NewWindowEvent.factory,
        },
    ],
    [
        'permission',
        {
            factory: PermissionRequestEvent.factory,
            handler: PermissionRequestEvent.prototype.handle,
        },
    ],
    [
        'sizechanged',
        {
            factory: SizeChangedEvent.factory,
            handler: SizeChangedEvent.prototype.handle,
        },
    ],
    [
        'zoomchange',
        {
            factory: ZoomChangeEvent.factory,
        },
    ],
    ['unresponsive', {}],
]);
const slimWebViewContainerFinalizationRegistry = new FinalizationRegistry((containerId) => {
    chrome.slimWebViewPrivate.destroyContainer(containerId);
});
export class SlimWebviewElement extends CrLitElement {
    static get is() {
        // This is a restricted custom element name that is allowed-listed in
        // slim_web_view_bindings.cc.
        return 'webview';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            src: { type: String, reflect: true },
            autosize: { type: Boolean, reflect: true },
            minwidth: { type: Number, reflect: true },
            maxwidth: { type: Number, reflect: true },
            minheight: { type: Number, reflect: true },
            maxheight: { type: Number, reflect: true },
            partition: { type: String, reflect: true },
        };
    }
    #src_accessor_storage = '';
    get src() { return this.#src_accessor_storage; }
    set src(value) { this.#src_accessor_storage = value; }
    #autosize_accessor_storage = false;
    get autosize() { return this.#autosize_accessor_storage; }
    set autosize(value) { this.#autosize_accessor_storage = value; }
    #minwidth_accessor_storage = 0;
    get minwidth() { return this.#minwidth_accessor_storage; }
    set minwidth(value) { this.#minwidth_accessor_storage = value; }
    #maxwidth_accessor_storage = 0;
    get maxwidth() { return this.#maxwidth_accessor_storage; }
    set maxwidth(value) { this.#maxwidth_accessor_storage = value; }
    #minheight_accessor_storage = 0;
    get minheight() { return this.#minheight_accessor_storage; }
    set minheight(value) { this.#minheight_accessor_storage = value; }
    #maxheight_accessor_storage = 0;
    get maxheight() { return this.#maxheight_accessor_storage; }
    set maxheight(value) { this.#maxheight_accessor_storage = value; }
    #partition_accessor_storage = '';
    get partition() { return this.#partition_accessor_storage; }
    set partition(value) { this.#partition_accessor_storage = value; }
    contentWindow_ = null;
    get contentWindow() {
        return this.contentWindow_;
    }
    viewInstanceId = chrome.slimWebViewPrivate.getNextId();
    containerId = null;
    guestInstanceId = null;
    eventDispatcher = null;
    onBeforeSendHeadersParamsInternal = null;
    allowedOriginsParamsInternal = null;
    userAgentOverrideInternal = '';
    constructor() {
        super();
        chrome.slimWebViewPrivate.registerView(this.viewInstanceId, this);
    }
    get onBeforeSendHeadersParams() {
        return this.onBeforeSendHeadersParamsInternal;
    }
    set onBeforeSendHeadersParams(params) {
        assert(this.guestInstanceId === null, 'Cannot set beforeSendHeadersParams once the guest is created');
        this.onBeforeSendHeadersParamsInternal = params;
    }
    get allowedOriginsParams() {
        return this.allowedOriginsParamsInternal;
    }
    set allowedOriginsParams(params) {
        assert(this.guestInstanceId === null, 'Cannot set allowedOriginsParams once the guest is created');
        this.allowedOriginsParamsInternal = params;
    }
    getUserAgent() {
        return this.userAgentOverrideInternal || navigator.userAgent;
    }
    setUserAgentOverride(userAgentOverride) {
        this.userAgentOverrideInternal = userAgentOverride;
        if (this.guestInstanceId === null ||
            this.guestInstanceId === GUEST_INSTANCE_ID_PENDING) {
            return;
        }
        BrowserProxyImpl.getInstance().handler.setUserAgentOverride(this.guestInstanceId, userAgentOverride);
    }
    connectedCallback() {
        super.connectedCallback();
        this.maybeSetupEventDispatcher();
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        if (this.eventDispatcher !== null) {
            this.eventDispatcher.disconnect();
            this.eventDispatcher = null;
        }
    }
    shouldUpdate(changedProperties) {
        if (changedProperties.has('partition')) {
            if (!this.validatePartitionUpdate(changedProperties.get('partition'))) {
                changedProperties.delete('partition');
            }
        }
        return super.shouldUpdate(changedProperties);
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has('src') && this.src) {
            if (this.guestInstanceId === null) {
                this.guestInstanceId = GUEST_INSTANCE_ID_PENDING;
                this.createGuest();
                return;
            }
            if (this.contentWindow_ === null) {
                return;
            }
            this.navigate();
        }
        if (changedProperties.has('autosize') ||
            changedProperties.has('minwidth') ||
            changedProperties.has('maxwidth') ||
            changedProperties.has('minheight') ||
            changedProperties.has('maxheight')) {
            this.updateAutoSize();
        }
    }
    async createGuest() {
        const css = getComputedStyle(this);
        const elementRect = this.getBoundingClientRect();
        const elementWidth = elementRect.width || parseInt(css.getPropertyValue('width'));
        const elementHeight = elementRect.height || parseInt(css.getPropertyValue('height'));
        const createParams = {
            storage: {
                instanceId: { intValue: this.viewInstanceId },
                elementWidth: { intValue: elementWidth },
                elementHeight: { intValue: elementHeight },
                // Attributes relevant to guest creation.
                autosize: { boolValue: this.autosize },
                minwidth: { intValue: this.minwidth },
                maxwidth: { intValue: this.maxwidth },
                minheight: { intValue: this.minheight },
                maxheight: { intValue: this.maxheight },
                partition: { stringValue: this.partition },
            },
        };
        if (this.onBeforeSendHeadersParams !== null) {
            createParams.storage['beforeSendHeaders'] =
                this.onBeforeSendHeadersParams.toValue();
        }
        if (this.allowedOriginsParams !== null) {
            createParams.storage['allowedOrigins'] =
                this.allowedOriginsParams.toValue();
        }
        if (this.userAgentOverrideInternal) {
            createParams.storage['userAgentOverride'] = {
                stringValue: this.userAgentOverrideInternal,
            };
        }
        const result = await BrowserProxyImpl.getInstance().handler.createGuest(createParams);
        // We immediately attach the guest to the embedder frame. The browser knows
        // how to handle the guest's lifecycle after this, so we don't need to
        // handle its destruction explicitly here.
        this.onGuestCreated(result.guestInstanceId);
    }
    onGuestCreated(guestInstanceId) {
        assert(this.guestInstanceId === GUEST_INSTANCE_ID_PENDING);
        if (!guestInstanceId) {
            this.guestInstanceId = null;
            assertNotReached('Failed to create guest');
        }
        this.guestInstanceId = guestInstanceId;
        this.maybeSetupEventDispatcher();
        assert(this.eventDispatcher !== null);
        const params = { instanceId: this.viewInstanceId };
        const iframeElement = this.shadowRoot.querySelector('iframe');
        assert(iframeElement);
        assert(iframeElement.contentWindow);
        this.containerId = chrome.slimWebViewPrivate.getNextId();
        slimWebViewContainerFinalizationRegistry.register(this, this.containerId);
        chrome.slimWebViewPrivate.attachIframeGuest(this.containerId, this.guestInstanceId, params, iframeElement.contentWindow, () => {
            this.contentWindow_ = iframeElement.contentWindow;
            this.navigate();
        });
    }
    maybeSetupEventDispatcher() {
        if (this.guestInstanceId === null ||
            this.guestInstanceId === GUEST_INSTANCE_ID_PENDING ||
            this.eventDispatcher !== null) {
            return;
        }
        this.eventDispatcher = new EventDispatcher(eventDescriptors, this.viewInstanceId, this.guestInstanceId, this);
        this.eventDispatcher.connect();
    }
    navigate() {
        if (!this.src) {
            return;
        }
        assert(this.guestInstanceId !== null);
        assert(this.guestInstanceId !== GUEST_INSTANCE_ID_PENDING);
        let url;
        try {
            url = new URL(this.src);
        }
        catch (e) {
            assertNotReached(`Failed to parse URL for webview: ${e}`);
        }
        assert(url.protocol === 'https:' || url.protocol === 'http:' ||
            url.href === 'about:blank');
        BrowserProxyImpl.getInstance().handler.navigate(this.guestInstanceId, url.href);
    }
    updateAutoSize() {
        if (this.guestInstanceId === null ||
            this.guestInstanceId === GUEST_INSTANCE_ID_PENDING) {
            return;
        }
        const params = {
            enableAutoSize: this.autosize,
            min: {
                width: this.minwidth,
                height: this.minheight,
            },
            max: {
                width: this.maxwidth,
                height: this.maxheight,
            },
        };
        BrowserProxyImpl.getInstance().handler.setSize(this.guestInstanceId, params);
    }
    validatePartitionUpdate(oldPartition) {
        if (this.guestInstanceId !== null) {
            this.partition = oldPartition || '';
            console.error('partition attribute can\'t be changed after the first navigation');
            return false;
        }
        if (this.partition === 'persist:') {
            this.partition = oldPartition || '';
            console.error('invalid partition attribute');
            return false;
        }
        return true;
    }
    setZoom(zoomFactor, callback) {
        if (this.guestInstanceId === null ||
            this.guestInstanceId === GUEST_INSTANCE_ID_PENDING) {
            return;
        }
        BrowserProxyImpl.getInstance()
            .handler.setZoom(this.guestInstanceId, zoomFactor)
            .then(() => {
            if (callback) {
                callback();
            }
        });
    }
    getZoom(callback) {
        if (this.guestInstanceId === null ||
            this.guestInstanceId === GUEST_INSTANCE_ID_PENDING) {
            callback(1.0);
            return;
        }
        BrowserProxyImpl.getInstance()
            .handler.getZoom(this.guestInstanceId)
            .then((result) => {
            callback(result.zoomFactor);
        });
    }
}
chrome.slimWebViewPrivate.allowGuestViewElementDefinition(() => {
    customElements.define(SlimWebviewElement.is, SlimWebviewElement);
});
