/* Copyright (c) 2024 The Brave Authors. All rights reserved.
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at https://mozilla.org/MPL/2.0/. */
import{CrLitElement}from"//resources/lit/v3_0/lit.rollup.js";import{getCss}from"./brave_account_entry_dialog.css.js";import{getHtml}from"./brave_account_entry_dialog.html.js";export class BraveAccountEntryDialogElement extends CrLitElement{static get is(){return"brave-account-entry-dialog"}static get styles(){return getCss()}render(){return getHtml.bind(this)()}}customElements.define(BraveAccountEntryDialogElement.is,BraveAccountEntryDialogElement);