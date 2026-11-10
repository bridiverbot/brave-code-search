// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import './print_preview_vars.css.js';

import {CrLitElement} from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type {PropertyValues} from 'chrome://resources/lit/v3_0/lit.rollup.js';

import type {Destination} from '../data/destination.js';
// 
import {DestinationOrigin, GooglePromotedDestinationId} from '../data/destination.js';

// 
import {getCss} from './link_container.css.js';
import {getHtml} from './link_container.html.js';

export interface PrintPreviewLinkContainerElement {
  $: {
    // 
    systemDialogLink: HTMLElement,
    systemDialogThrobber: HTMLElement,
  };
}

export class PrintPreviewLinkContainerElement extends CrLitElement {
  static get is() {
    return 'print-preview-link-container';
  }

  static override get styles() {
    return getCss();
  }

  override render() {
    return getHtml.bind(this)();
  }

  static override get properties() {
    return {
      appKioskMode: {type: Boolean},
      destination: {type: Object},
      disabled: {type: Boolean},

      shouldShowSystemDialogLink_: {
        type: Boolean,
        reflect: true,
      },

      systemDialogLinkDisabled_: {type: Boolean},
      openingSystemDialog_: {type: Boolean},
      openingInPreview_: {type: Boolean},
    };
  }

  accessor appKioskMode: boolean = false;
  accessor destination: Destination|null = null;
  accessor disabled: boolean = false;
  protected accessor shouldShowSystemDialogLink_: boolean = false;
  protected accessor systemDialogLinkDisabled_: boolean = false;
  protected accessor openingSystemDialog_: boolean = false;
  protected accessor openingInPreview_: boolean = false;

  override willUpdate(changedProperties: PropertyValues<this>) {
    super.willUpdate(changedProperties);

    if (changedProperties.has('disabled')) {
      this.systemDialogLinkDisabled_ = this.computeSystemDialogLinkDisabled_();
    }

    if (changedProperties.has('appKioskMode') ||
        changedProperties.has('destination')) {
      this.shouldShowSystemDialogLink_ =
          this.computeShouldShowSystemDialogLink_();
    }
  }

  /**
   * @return Whether the system dialog link should be visible.
   */
  private computeShouldShowSystemDialogLink_(): boolean {
    if (this.appKioskMode) {
      return false;
    }
    // 
    // 
    return !!this.destination &&
        this.destination.origin === DestinationOrigin.LOCAL &&
        this.destination.id !== GooglePromotedDestinationId.SAVE_AS_PDF;
    // 
  }

  /**
   * @return Whether the system dialog link should be disabled
   */
  private computeSystemDialogLinkDisabled_(): boolean {
    // 
    // 
    return this.disabled;
    // 
  }

  // 

  // 
  protected onSystemDialogClick_() {
    if (!this.shouldShowSystemDialogLink_) {
      return;
    }

    this.fire('print-with-system-dialog');
  }
  // 

  // 

  /** @return Whether the system dialog link is available. */
  systemDialogLinkAvailable(): boolean {
    return this.shouldShowSystemDialogLink_ && !this.systemDialogLinkDisabled_;
  }
}

export type LinkContainerElement = PrintPreviewLinkContainerElement;

declare global {
  interface HTMLElementTagNameMap {
    'print-preview-link-container': PrintPreviewLinkContainerElement;
  }
}

customElements.define(
    PrintPreviewLinkContainerElement.is, PrintPreviewLinkContainerElement);
