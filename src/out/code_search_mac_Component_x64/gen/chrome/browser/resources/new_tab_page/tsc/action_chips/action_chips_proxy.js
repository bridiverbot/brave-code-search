// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { ActionChipsHandlerFactory, ActionChipsHandlerRemote, PageCallbackRouter } from '../action_chips.mojom-webui.js';
/**
 * The enum value sent as part of action-chips-retrieval-state-changed.
 * The handler of the event should expect to receive UPDATED multiple times.
 */
export var ActionChipsRetrievalState;
(function (ActionChipsRetrievalState) {
    // The initial state. This is not sent as part of the event and can be used as
    // the default value of a variable containing this enum.
    ActionChipsRetrievalState[ActionChipsRetrievalState["INITIAL"] = 0] = "INITIAL";
    // The state used in an event firing when the first and only retrieval
    // request is sent from this component.
    ActionChipsRetrievalState[ActionChipsRetrievalState["REQUESTED"] = 1] = "REQUESTED";
    // The state used in events firing when the action chips are updated by a call
    // from the browser side.
    ActionChipsRetrievalState[ActionChipsRetrievalState["UPDATED"] = 2] = "UPDATED";
})(ActionChipsRetrievalState || (ActionChipsRetrievalState = {}));
export class ActionChipsApiProxyImpl {
    handler;
    callbackRouter;
    constructor() {
        this.handler = new ActionChipsHandlerRemote();
        this.callbackRouter = new PageCallbackRouter();
        const factory = ActionChipsHandlerFactory.getRemote();
        factory.createActionChipsHandler(this.handler.$.bindNewPipeAndPassReceiver(), this.callbackRouter.$.bindNewPipeAndPassRemote());
    }
    getHandler() {
        return this.handler;
    }
    getCallbackRouter() {
        return this.callbackRouter;
    }
    static getInstance() {
        return instance || (instance = new ActionChipsApiProxyImpl());
    }
    static setInstance(newInstance) {
        instance = newInstance;
    }
}
let instance = null;
