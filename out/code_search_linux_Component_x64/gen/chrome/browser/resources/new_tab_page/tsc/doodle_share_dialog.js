// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import 'chrome://resources/cr_elements/cr_input/cr_input.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import './doodle_icons.html.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss } from './doodle_share_dialog.css.js';
import { getHtml } from './doodle_share_dialog.html.js';
import { DoodleShareChannel } from './new_tab_page.mojom-webui.js';
import { WindowProxy } from './window_proxy.js';
/**
 * The ID of the doodle app for Facebook. Used to share doodles to Facebook.
 */
const FACEBOOK_APP_ID = 738026486351791;
/** Dialog that lets the user share the doodle. */
export class DoodleShareDialogElement extends CrLitElement {
    static get is() {
        return 'ntp-doodle-share-dialog';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            /** Title shown on the dialog. */
            title: { type: String },
            /** Share URL provided to the user. */
            url: { type: String },
            webuiRoundedIconsEnabled_: { type: Boolean },
        };
    }
    #title_accessor_storage = '';
    get title() { return this.#title_accessor_storage; }
    set title(value) { this.#title_accessor_storage = value; }
    #url_accessor_storage = '';
    get url() { return this.#url_accessor_storage; }
    set url(value) { this.#url_accessor_storage = value; }
    #webuiRoundedIconsEnabled__accessor_storage = loadTimeData.getBoolean('webuiRoundedIconsEnabled');
    get webuiRoundedIconsEnabled_() { return this.#webuiRoundedIconsEnabled__accessor_storage; }
    set webuiRoundedIconsEnabled_(value) { this.#webuiRoundedIconsEnabled__accessor_storage = value; }
    onFacebookClick_() {
        const url = 'https://www.facebook.com/dialog/share' +
            `?app_id=${FACEBOOK_APP_ID}` +
            `&href=${encodeURIComponent(this.url)}` +
            `&hashtag=${encodeURIComponent('#GoogleDoodle')}`;
        WindowProxy.getInstance().open(url);
        this.notifyShare_(DoodleShareChannel.kFacebook);
    }
    onTwitterClick_() {
        const url = 'https://twitter.com/intent/tweet' +
            `?text=${encodeURIComponent(`${this.title}\n${this.url}`)}`;
        WindowProxy.getInstance().open(url);
        this.notifyShare_(DoodleShareChannel.kTwitter);
    }
    onEmailClick_() {
        const url = `mailto:?subject=${encodeURIComponent(this.title)}` +
            `&body=${encodeURIComponent(this.url)}`;
        WindowProxy.getInstance().navigate(url);
        this.notifyShare_(DoodleShareChannel.kEmail);
    }
    onCopyClick_() {
        this.$.url.select();
        navigator.clipboard.writeText(this.url);
        this.notifyShare_(DoodleShareChannel.kLinkCopy);
    }
    onCloseClick_() {
        this.$.dialog.close();
    }
    notifyShare_(channel) {
        this.fire('share', channel);
    }
}
customElements.define(DoodleShareDialogElement.is, DoodleShareDialogElement);
