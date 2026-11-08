// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import './calendar.js';
import '../info_dialog.js';
import '../module_header.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { I18nMixinLit } from '../../i18n_setup.js';
import { ModuleDescriptor } from '../module_descriptor.js';
import { getHtml } from './google_calendar_module.html.js';
import { GoogleCalendarProxyImpl } from './google_calendar_proxy.js';
const GoogleCalendarModuleElementBase = I18nMixinLit(CrLitElement);
/**
 * The Google Calendar module, which serves as an inside look in to today's
 * events on a user's Google Calendar .
 */
export class GoogleCalendarModuleElement extends GoogleCalendarModuleElementBase {
    static get is() {
        return 'ntp-google-calendar-module';
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            events_: { type: Array },
            showInfoDialog_: { type: Boolean },
        };
    }
    #events__accessor_storage = [];
    get events_() { return this.#events__accessor_storage; }
    set events_(value) { this.#events__accessor_storage = value; }
    #showInfoDialog__accessor_storage = false;
    get showInfoDialog_() { return this.#showInfoDialog__accessor_storage; }
    set showInfoDialog_(value) { this.#showInfoDialog__accessor_storage = value; }
    constructor(events) {
        super();
        this.events_ = events;
    }
    getMenuItems_() {
        return [
            {
                action: 'disable',
                icon: loadTimeData.getBoolean('webuiRoundedIconsEnabled') ?
                    'modules:block' :
                    'modules:block-old',
                text: this.i18n('modulesGoogleCalendarDisableButtonText'),
            },
            {
                action: 'info',
                icon: loadTimeData.getBoolean('webuiRoundedIconsEnabled') ?
                    'modules:info' :
                    'modules:info-old',
                text: this.i18n('moduleInfoButtonTitle'),
            },
        ];
    }
    onDisableButtonClick_() {
        const disableEvent = new CustomEvent('disable-module', {
            bubbles: true,
            composed: true,
            detail: {
                message: this.i18n('modulesGoogleCalendarDisableToastMessage'),
            },
        });
        this.dispatchEvent(disableEvent);
    }
    onInfoButtonClick_() {
        this.showInfoDialog_ = true;
    }
    onInfoDialogClose_() {
        this.showInfoDialog_ = false;
    }
}
customElements.define(GoogleCalendarModuleElement.is, GoogleCalendarModuleElement);
async function createGoogleCalendarElement() {
    const { events } = await GoogleCalendarProxyImpl.getInstance().handler.getEvents();
    return events.length > 0 ? new GoogleCalendarModuleElement(events) : null;
}
export const googleCalendarDescriptor = new ModuleDescriptor(
/*id*/ 'google_calendar', createGoogleCalendarElement);
