// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function $(id){return document.body.querySelector(`#${id}`)}function initialize(){$("back-button").onclick=function(event){supervisedUserErrorPageController.goBack()};$("learn-more-button").onclick=function(event){supervisedUserErrorPageController.learnMore()};$("frame-blocked").focus()}document.addEventListener("DOMContentLoaded",initialize);