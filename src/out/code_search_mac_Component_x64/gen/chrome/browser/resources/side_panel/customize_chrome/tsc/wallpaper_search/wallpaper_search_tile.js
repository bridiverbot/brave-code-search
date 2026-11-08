// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss } from './wallpaper_search_tile.css.js';
import { getHtml } from './wallpaper_search_tile.html.js';
export class WallpaperSearchTileElement extends CrLitElement {
    static get is() {
        return 'customize-chrome-wallpaper-search-tile';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
}
customElements.define(WallpaperSearchTileElement.is, WallpaperSearchTileElement);
