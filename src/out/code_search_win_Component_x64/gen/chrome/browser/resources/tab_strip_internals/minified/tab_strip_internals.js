// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import{TabStripInternalsView}from"./tab_strip_internals_view.js";import{TabStripInternalsViewModel}from"./tab_strip_internals_viewmodel.js";class TabStripInternalsApp{viewmodel_;constructor(){this.viewmodel_=new TabStripInternalsViewModel;new TabStripInternalsView(this.viewmodel_);this.viewmodel_.initialize()}}document.addEventListener("DOMContentLoaded",(()=>new TabStripInternalsApp));