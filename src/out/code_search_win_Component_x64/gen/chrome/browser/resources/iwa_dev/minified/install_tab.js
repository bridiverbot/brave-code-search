// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import{CrLitElement}from"//resources/lit/v3_0/lit.rollup.js";import{getCss as getSharedCss}from"./shared_style.css.js";export class IwaDevInstallTabElement extends CrLitElement{static get styles(){return getSharedCss()}notifyValidChanged(){this.fire("valid-changed",{isValid:this.isValid()})}}