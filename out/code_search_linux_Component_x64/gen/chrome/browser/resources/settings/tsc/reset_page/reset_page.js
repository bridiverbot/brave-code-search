// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * 'settings-reset-page' is the settings page containing reset
 * settings.
 */
import 'chrome://resources/cr_elements/cr_lazy_render/cr_lazy_render_lit.js';
import 'chrome://resources/cr_elements/cr_link_row/cr_link_row.js';
import '../settings_page/settings_section.js';
import './reset_profile_dialog.js';
import { focusWithoutInk } from 'chrome://resources/js/focus_without_ink.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { routes } from '../route.js';
import { RouteObserverMixinLit, Router } from '../router.js';
import { getSearchManager } from '../search_settings.js';
import { getCss as getSettingsSharedCss } from '../settings_shared_lit.css.js';
import { getHtml } from './reset_page.html.js';
const SettingsResetPageElementBase = RouteObserverMixinLit(CrLitElement);
export class SettingsResetPageElement extends SettingsResetPageElementBase {
    static get is() {
        return 'settings-reset-page';
    }
    static get styles() {
        return [
            getSettingsSharedCss(),
        ];
    }
    render() {
        return getHtml.bind(this)();
    }
    /**
     * RouteObserverMixin
     */
    currentRouteChanged(route) {
        const lazyRender = this.$.resetProfileDialog;
        if (route === routes.TRIGGERED_RESET_DIALOG ||
            route === routes.RESET_DIALOG) {
            lazyRender.get().show();
        }
        else {
            const dialog = lazyRender.getIfExists();
            if (dialog) {
                dialog.cancel();
            }
        }
    }
    onShowResetProfileDialogClick_() {
        Router.getInstance().navigateTo(routes.RESET_DIALOG, new URLSearchParams('origin=userclick'));
    }
    onResetProfileDialogClose_() {
        Router.getInstance().navigateTo(routes.RESET_DIALOG.parent);
        focusWithoutInk(this.$.resetProfile);
    }
    // SettingsPlugin implementation
    async searchContents(query) {
        const searchRequest = await getSearchManager().search(query, this);
        return searchRequest.getSearchResult();
    }
}
customElements.define(SettingsResetPageElement.is, SettingsResetPageElement);
