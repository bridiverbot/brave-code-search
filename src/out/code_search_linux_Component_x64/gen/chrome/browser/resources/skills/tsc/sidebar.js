// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '//resources/cr_elements/cr_icon/cr_icon.js';
import '//resources/cr_elements/cr_menu_selector/cr_menu_selector.js';
import { loadTimeData } from '//resources/js/load_time_data.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { getCss } from './sidebar.css.js';
import { getHtml } from './sidebar.html.js';
export var Page;
(function (Page) {
    Page["USER_SKILLS"] = "yourSkills";
    Page["DISCOVER_SKILLS"] = "browse";
})(Page || (Page = {}));
export class SkillsSidebarElement extends CrLitElement {
    static get is() {
        return 'skills-sidebar';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            selectedPage: { type: String },
            menuItems: { type: Array },
        };
    }
    #menuItems_accessor_storage = [
        ...(!loadTimeData.getBoolean('shouldDisableBrowseSkillsPage') ? [{
                icon: loadTimeData.getBoolean('webuiRoundedIconsEnabled') ?
                    'skills:explore' :
                    'skills:explore-old',
                name: loadTimeData.getString('browseSkillsTitle'),
                page: Page.DISCOVER_SKILLS,
            }] :
            []),
        {
            icon: loadTimeData.getBoolean('webuiRoundedIconsEnabled') ?
                'skills:bolt-filled' :
                'skills:bolt-old',
            name: loadTimeData.getString('userSkillsTitle'),
            page: Page.USER_SKILLS,
        },
    ];
    get menuItems() { return this.#menuItems_accessor_storage; }
    set menuItems(value) { this.#menuItems_accessor_storage = value; }
    #selectedPage_accessor_storage = Page.USER_SKILLS;
    get selectedPage() { return this.#selectedPage_accessor_storage; }
    set selectedPage(value) { this.#selectedPage_accessor_storage = value; }
    onIronActivate_(e) {
        const newUrl = new URL(e.detail.item.href);
        this.fire('route-click', { path: newUrl.pathname });
    }
    // Prevent clicks on sidebar items from navigating and reloading the page.
    // onMenuItemSelect_() handles loading new pages.
    onMenuItemClick_(e) {
        e.preventDefault();
    }
}
customElements.define(SkillsSidebarElement.is, SkillsSidebarElement);
