// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import{DialogHandlerRemote,PageHandlerFactory}from"./skills.mojom-webui.js";export class SkillsDialogBrowserProxy{handler;constructor(){this.handler=new DialogHandlerRemote;PageHandlerFactory.getRemote().createDialogHandler(this.handler.$.bindNewPipeAndPassReceiver())}static getInstance(){return instance||(instance=new SkillsDialogBrowserProxy)}static setInstance(obj){instance=obj}}let instance=null;