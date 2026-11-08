// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { GlicHostRegistryImpl } from './client/glic_api_client.js';
/*
This is bundled into a js file, and sent to the web client. It should be
directly executable in a <script> element, and therefore should not have any
exports.
*/
window.internalAutoGlicBoot = (_windowProxy) => new GlicHostRegistryImpl();
