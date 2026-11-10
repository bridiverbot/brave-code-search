// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import{mojo}from"//resources/mojo/mojo/public/js/bindings.js";import{GeometrySpec as lens_mojom_GeometrySpec}from"./geometry.mojom-webui.js";export const OverlayObjectSpec={$:{}};mojo.internal.Struct(OverlayObjectSpec.$,"OverlayObject",[mojo.internal.StructField("id",0,0,mojo.internal.String,null,false,0,undefined,undefined),mojo.internal.StructField("geometry",8,0,lens_mojom_GeometrySpec.$,null,false,0,undefined,undefined)],[[0,24]]);