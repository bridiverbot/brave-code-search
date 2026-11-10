// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * @fileoverview A helper object used from the "About" section to interact with
 * the browser.
 */

/**
 * Enumeration of all possible update statuses. The string literals must match
 * the ones defined at |AboutHandler::UpdateStatusToString|.
 * @enum {string}
 */
export enum UpdateStatus {
  CHECKING = 'checking',
  UPDATING = 'updating',
  NEARLY_UPDATED = 'nearly_updated',
  UPDATED = 'updated',
  FAILED = 'failed',
  FAILED_HTTP = 'failed_http',
  FAILED_DOWNLOAD = 'failed_download',
  DISABLED = 'disabled',
  DISABLED_BY_ADMIN = 'disabled_by_admin',
  NEED_PERMISSION_TO_UPDATE = 'need_permission_to_update',
}

// 

export interface UpdateStatusChangedEvent {
  status: UpdateStatus;
  progress?: number;
  message?: string;
  connectionTypes?: string;
  version?: string;
  size?: string;
}


export interface AboutPageBrowserProxy {
  /**
   * Indicates to the browser that the page is ready.
   */
  pageReady(): void;

  /**
   * Request update status from the browser. It results in one or more
   * 'update-status-changed' WebUI events.
   */
  refreshUpdateStatus(): void;

  /** Opens the help page. */
  openHelpPage(): void;

  // 

  // 
}

export class AboutPageBrowserProxyImpl implements AboutPageBrowserProxy {
  pageReady() {
    chrome.send('aboutPageReady');
  }

  refreshUpdateStatus() {
    chrome.send('refreshUpdateStatus');
  }

  // 

  openHelpPage() {
    chrome.send('openHelpPage');
  }

  // 

  static getInstance(): AboutPageBrowserProxy {
    return instance || (instance = new AboutPageBrowserProxyImpl());
  }

  static setInstance(obj: AboutPageBrowserProxy) {
    instance = obj;
  }
}

let instance: AboutPageBrowserProxy|null = null;
