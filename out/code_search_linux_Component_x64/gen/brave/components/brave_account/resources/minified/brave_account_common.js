/* Copyright (c) 2024 The Brave Authors. All rights reserved.
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at https://mozilla.org/MPL/2.0/. */
import{AsyncDirective,directive,nothing}from"//resources/lit/v3_0/lit.rollup.js";class FreezeWhenDirective extends AsyncDirective{previousValue=nothing;render(freeze,value){return freeze?this.previousValue:this.previousValue=value}}export const freezeWhen=directive(FreezeWhenDirective);export function focusLeoInput(leoInput){const input=leoInput?.shadowRoot?.querySelector("input");if(!input){leoInput?.focus();return}input.focus();if(input.selectionStart!==null){input.setSelectionRange(input.value.length,input.value.length)}}