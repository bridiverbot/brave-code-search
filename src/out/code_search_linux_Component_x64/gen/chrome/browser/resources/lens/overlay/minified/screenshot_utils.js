// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import{assert}from"//resources/js/assert.js";export function renderScreenshot(canvas,screenshotBitmap){const imageWidth=screenshotBitmap.width;const imageHeight=screenshotBitmap.height;canvas.width=imageWidth;canvas.height=imageHeight;const ctx=canvas.getContext("bitmaprenderer");assert(ctx);ctx.transferFromImageBitmap(screenshotBitmap)}