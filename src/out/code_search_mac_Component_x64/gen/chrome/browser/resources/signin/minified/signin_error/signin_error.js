/* Copyright 2016 The Chromium Authors
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file. */
function initialize(){chrome.send("initializedWithSize",[document.body.offsetHeight])}document.addEventListener("DOMContentLoaded",initialize);export{};