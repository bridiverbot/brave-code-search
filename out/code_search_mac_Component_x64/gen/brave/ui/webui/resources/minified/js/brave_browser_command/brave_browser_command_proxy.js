/* Copyright (c) 2025 The Brave Authors. All rights reserved.
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at https://mozilla.org/MPL/2.0/. */
import{BraveBrowserCommandHandlerFactory,BraveBrowserCommandHandlerRemote}from"../../brave_browser_command.mojom-webui.js";let instance=null;export class BrowserCommandProxy{static getInstance(){return instance||(instance=new BrowserCommandProxy)}static setInstance(newInstance){instance=newInstance}handler;constructor(){this.handler=new BraveBrowserCommandHandlerRemote;const factory=BraveBrowserCommandHandlerFactory.getRemote();factory.createBrowserCommandHandler(this.handler.$.bindNewPipeAndPassReceiver())}}