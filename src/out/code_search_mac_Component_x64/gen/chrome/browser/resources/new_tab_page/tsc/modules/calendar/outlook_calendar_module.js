// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import './calendar.js';
import '../info_dialog.js';
import '../module_header.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { I18nMixinLit, loadTimeData } from '../../i18n_setup.js';
import { ParentTrustedDocumentProxy } from '../microsoft_auth_frame_connector.js';
import { ModuleDescriptor } from '../module_descriptor.js';
import { getHtml } from './outlook_calendar_module.html.js';
import { OutlookCalendarProxyImpl } from './outlook_calendar_proxy.js';
const OutlookCalendarModuleElementBase = I18nMixinLit(CrLitElement);
/**
 * The Outlook Calendar module, which serves as an inside look in to upcoming
 * events on a user's Microsoft Outlook calendar.
 */
export class OutlookCalendarModuleElement extends OutlookCalendarModuleElementBase {
    static get is() {
        return 'ntp-outlook-calendar-module';
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
                text: this.i18n('modulesOutlookCalendarDisableButtonText'),
            },
            {
                action: 'signout',
                icon: loadTimeData.getBoolean('webuiRoundedIconsEnabled') ?
                    'modules:logout' :
                    'modules:logout-old',
                text: this.i18n('modulesMicrosoftSignOutButtonText'),
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
                message: loadTimeData.getStringF('disableModuleToastMessage', loadTimeData.getString('modulesOutlookCalendarTitle')),
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
    onSignoutButtonClick_() {
        ParentTrustedDocumentProxy.getInstance()?.getChildDocument().signOut();
    }
}
customElements.define(OutlookCalendarModuleElement.is, OutlookCalendarModuleElement);
async function createOutlookCalendarElement() {
    const { events } = await OutlookCalendarProxyImpl.getInstance().handler.getEvents();
    return events.length > 0 ? new OutlookCalendarModuleElement(events) : null;
}
export const outlookCalendarDescriptor = new ModuleDescriptor(
/*id*/ 'outlook_calendar', createOutlookCalendarElement);
