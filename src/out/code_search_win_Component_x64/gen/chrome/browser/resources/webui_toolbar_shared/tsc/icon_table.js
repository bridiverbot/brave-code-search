// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { skColorToRgba } from '//resources/js/color_utils.js';
import { IconType } from './icon_handle.mojom-webui.js';
export class IconTable {
    static instance_;
    static getInstance() {
        if (IconTable.instance_ === undefined) {
            IconTable.instance_ = new IconTable();
        }
        return IconTable.instance_;
    }
    icons_ = new Map();
    fallbackIcon_ = {
        urlOrName: 
        // A 1x1 transparent PNG generated via <canvas>.
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAA' +
            'fFcSJAAAADUlEQVR4AWJiYGBgAAAAAP//XRcpzQAAAAZJREFUAwAADwADJDd9' +
            '6QAAAABJRU5ErkJggg==',
        type: 
        // Make it a mask URL so it can work with cr-icon-button.
        IconType.kMaskUrl,
        color: null,
    };
    constructor() {
        // Handle 0 has the semantics of mapping to a transparent icon.
        this.icons_.set(0n, this.fallbackIcon_);
    }
    applyUpdates(updates) {
        for (const update of updates) {
            if (update.iconUrlOrName) {
                this.icons_.set(update.handleId, {
                    urlOrName: update.iconUrlOrName,
                    type: update.iconType,
                    color: update.color,
                });
            }
            else {
                this.icons_.delete(update.handleId);
            }
        }
    }
    reset() {
        this.icons_.clear();
    }
    // If the icon with given handle has been registered as having a URL for
    // a single-color mask image, returns that URL. Otherwise returns undefined.
    //
    // If defined, you'll want to set it on a --cr-icon-image attribute for
    // a <cr-icon-button>, or use it as a mask image.
    getIconMaskUrl(handle) {
        const maybeIcon = this.icons_.get(handle.handleId);
        return maybeIcon && maybeIcon.type === IconType.kMaskUrl ?
            maybeIcon.urlOrName :
            undefined;
    }
    // If the icon with given handle has been registered with a pen color,
    // returns it in CSS syntax.
    getIconColor(handle) {
        const maybeIcon = this.icons_.get(handle.handleId);
        return maybeIcon && maybeIcon.color ? skColorToRgba(maybeIcon.color) :
            undefined;
    }
    // If the icon with given handle has been registered as being a name in
    // an iconset, return that name. Otherwise returns undefined.
    // If defined, you'll probably want to set it as an iron-icon attribute.
    getIconName(handle) {
        const maybeIcon = this.icons_.get(handle.handleId);
        return maybeIcon && maybeIcon.type === IconType.kIconSet ?
            maybeIcon.urlOrName :
            undefined;
    }
    // Returns full icon info for a handle, substituting in the fallback icon
    // if it's missing.
    getIconInfo(handle) {
        const maybeIcon = this.icons_.get(handle.handleId);
        return maybeIcon ?? this.fallbackIcon_;
    }
}
