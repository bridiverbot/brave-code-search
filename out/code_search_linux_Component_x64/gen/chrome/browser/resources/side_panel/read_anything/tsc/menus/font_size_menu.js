// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '//resources/cr_elements/cr_action_menu/cr_action_menu.js';
import '//resources/cr_elements/cr_button/cr_button.js';
import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import '//resources/cr_elements/cr_lazy_render/cr_lazy_render_lit.js';
import '//resources/cr_elements/icons.html.js';
import '../app/icons.html.js';
import { I18nMixinLit } from '//resources/cr_elements/i18n_mixin_lit.js';
import { WebUiListenerMixinLit } from '//resources/cr_elements/web_ui_listener_mixin_lit.js';
import { assert } from '//resources/js/assert.js';
import { loadTimeData } from '//resources/js/load_time_data.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { VisualBrowserProxyImpl } from '../app/visual_browser_proxy.js';
import { ToolbarEvent } from '../content/read_anything_types.js';
import { openMenu } from '../shared/common.js';
import { getNewIndex, isArrow } from '../shared/keyboard_util.js';
import { getCss } from './font_size_menu.css.js';
import { getHtml } from './font_size_menu.html.js';
// Max number of paragraph elements inside an aria-live region for
// announcing setting changes. Not clearing the element may make
// the announce block too big and waste memory. Trade-off is that every
// MAX_PARAGRAPHS_IN_ANNOUNCE_BLOCK font sizes, there is a chance the
// announcement won't happen the sixth time, if the change is too fast.
// It is unlikely someone will change the font size more than 5 times so
// this covers most use cases.
const MAX_PARAGRAPHS_IN_ANNOUNCE_BLOCK = 5;
const FontSizeMenuElementBase = WebUiListenerMixinLit(I18nMixinLit(CrLitElement));
export class FontSizeMenuElement extends FontSizeMenuElementBase {
    static get is() {
        return 'font-size-menu';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            fontSize: { type: Number },
            webuiRoundedIconsEnabled_: { type: Boolean },
        };
    }
    #fontSize_accessor_storage = 0;
    get fontSize() { return this.#fontSize_accessor_storage; }
    set fontSize(value) { this.#fontSize_accessor_storage = value; }
    #webuiRoundedIconsEnabled__accessor_storage = loadTimeData.getBoolean('webuiRoundedIconsEnabled');
    get webuiRoundedIconsEnabled_() { return this.#webuiRoundedIconsEnabled__accessor_storage; }
    set webuiRoundedIconsEnabled_(value) { this.#webuiRoundedIconsEnabled__accessor_storage = value; }
    visualBrowserProxy_ = VisualBrowserProxyImpl.getInstance();
    // Announced once fontSize reflects the last +/- click. Clicks that don't
    // change the size (already at the min or max) aren't announced.
    pendingAnnouncement_ = null;
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has('fontSize') && this.pendingAnnouncement_) {
            this.announceSizeChange_(this.pendingAnnouncement_);
            this.pendingAnnouncement_ = null;
        }
    }
    open(anchor, showAtConfig) {
        openMenu(this.$.lazyMenu.get(), anchor, showAtConfig);
    }
    close() {
        this.$.lazyMenu.get().close();
    }
    get() {
        return this.$.lazyMenu.get();
    }
    isFontSizeDefault_() {
        return this.fontSize === this.visualBrowserProxy_.getDefaultFontSize();
    }
    isFontSizeMin_() {
        return this.fontSize <= this.visualBrowserProxy_.getMinFontSize();
    }
    isFontSizeMax_() {
        return this.fontSize >= this.visualBrowserProxy_.getMaxFontSize();
    }
    onDecreaseClick_() {
        this.updateFontSize_(false);
    }
    onIncreaseClick_() {
        this.updateFontSize_(true);
    }
    onResetClick_() {
        this.pendingAnnouncement_ = null;
        this.fire(ToolbarEvent.FONT_SIZE_RESET);
        // TODO(crbug.com/441561417): Keep focus on the button when it becomes
        // disabled.
    }
    updateFontSize_(increase) {
        this.pendingAnnouncement_ = this.i18n(increase ? 'increaseFontSizeAnnouncement' :
            'decreaseFontSizeAnnouncement');
        this.fire(ToolbarEvent.FONT_SIZE, { data: increase });
        // TODO(crbug.com/441561417): Keep focus on the button when it becomes
        // disabled.
    }
    announceSizeChange_(text) {
        const sizeChangeAnnounce = this.$.lazyMenu.get().querySelector('#size-announce');
        if (sizeChangeAnnounce) {
            const paragraph = document.createElement('p');
            paragraph.textContent = text;
            sizeChangeAnnounce.appendChild(paragraph);
            if (sizeChangeAnnounce.getElementsByTagName('p').length >
                MAX_PARAGRAPHS_IN_ANNOUNCE_BLOCK) {
                this.restoreAnnounceState_('size-announce');
            }
        }
    }
    restoreAnnounceState_(id) {
        const srNotice = this.$.lazyMenu.get().querySelector(`#${id}`);
        if (srNotice) {
            const paragraphs = srNotice.querySelectorAll('p');
            paragraphs.forEach(paragraph => {
                paragraph.remove();
            });
        }
    }
    onKeydown_(e) {
        if (!isArrow(e.key)) {
            return;
        }
        e.preventDefault();
        const focusableElements = Array.from(this.$.lazyMenu.get().querySelectorAll('cr-icon-button, cr-button'));
        assert(e.target instanceof HTMLElement);
        const elementToFocus = focusableElements[getNewIndex(e.key, e.target, focusableElements)];
        assert(elementToFocus, 'no element to focus');
        elementToFocus.focus();
    }
}
customElements.define(FontSizeMenuElement.is, FontSizeMenuElement);
