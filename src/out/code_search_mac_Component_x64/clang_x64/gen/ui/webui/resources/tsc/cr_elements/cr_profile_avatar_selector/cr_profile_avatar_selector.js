// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview 'cr-profile-avatar-selector' is an element that displays
 * profile avatar icons and allows an avatar to be selected.
 */
import '../cr_button/cr_button.js';
import '../cr_grid/cr_grid.js';
import '../cr_icon/cr_icon.js';
import '../cr_tooltip/cr_tooltip.js';
import '../icons.html.js';
import { assert } from '//resources/js/assert.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { getCss } from './cr_profile_avatar_selector.css.js';
import { getHtml } from './cr_profile_avatar_selector.html.js';
export class CrProfileAvatarSelectorElement extends CrLitElement {
    static get is() {
        return 'cr-profile-avatar-selector';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            /**
             * The list of profile avatar URLs and labels.
             */
            avatars: { type: Array },
            /**
             * The currently selected profile avatar icon, if any.
             */
            selectedAvatar: {
                type: Object,
                notify: true,
            },
            ignoreModifiedKeyEvents: { type: Boolean },
            /**
             * The currently selected profile avatar icon index, or '-1' if none is
             * selected.
             */
            tabFocusableAvatar_: { type: Number },
            /**
             * Number of columns in the grid.
             */
            columns: { type: Number },
        };
    }
    #avatars_accessor_storage = [];
    get avatars() { return this.#avatars_accessor_storage; }
    set avatars(value) { this.#avatars_accessor_storage = value; }
    #selectedAvatar_accessor_storage = null;
    get selectedAvatar() { return this.#selectedAvatar_accessor_storage; }
    set selectedAvatar(value) { this.#selectedAvatar_accessor_storage = value; }
    #ignoreModifiedKeyEvents_accessor_storage = false;
    get ignoreModifiedKeyEvents() { return this.#ignoreModifiedKeyEvents_accessor_storage; }
    set ignoreModifiedKeyEvents(value) { this.#ignoreModifiedKeyEvents_accessor_storage = value; }
    #columns_accessor_storage = 6;
    get columns() { return this.#columns_accessor_storage; }
    set columns(value) { this.#columns_accessor_storage = value; }
    #tabFocusableAvatar__accessor_storage = -1;
    get tabFocusableAvatar_() { return this.#tabFocusableAvatar__accessor_storage; }
    set tabFocusableAvatar_(value) { this.#tabFocusableAvatar__accessor_storage = value; }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('avatars') ||
            changedProperties.has('selectedAvatar')) {
            const selectedAvatar = this.avatars.find(avatar => this.isAvatarSelected_(avatar));
            this.tabFocusableAvatar_ = selectedAvatar ? selectedAvatar.index : -1;
        }
    }
    getAvatarId_(index) {
        return 'avatarId' + index;
    }
    getTabIndex_(index, item) {
        if (item.index === this.tabFocusableAvatar_) {
            return '0';
        }
        // If no avatar is selected, focus the first element of the grid on 'tab'.
        if (this.tabFocusableAvatar_ === -1 && index === 0) {
            return '0';
        }
        return '-1';
    }
    getSelectedClass_(avatarItem) {
        // TODO(dpapad): Rename 'iron-selected' to 'selected' now that this CSS
        // class is not assigned by any iron-* behavior.
        return this.isAvatarSelected_(avatarItem) ? 'iron-selected' : '';
    }
    isAvatarSelected_(avatarItem) {
        return avatarItem.selected ||
            (!!this.selectedAvatar &&
                this.selectedAvatar.index === avatarItem.index);
    }
    onAvatarClick_(e) {
        // |selectedAvatar| is set to pass back selection to the owner of this
        // component.
        const target = e.currentTarget;
        const index = Number(target.dataset['index']);
        this.selectedAvatar = this.avatars[index];
        // Autoscroll to selected avatar if it is not completely visible.
        const avatarList = this.shadowRoot.querySelectorAll('.avatar-container');
        assert(avatarList.length > 0);
        const selectedAvatarElement = avatarList[index];
        selectedAvatarElement.scrollIntoViewIfNeeded();
    }
}
customElements.define(CrProfileAvatarSelectorElement.is, CrProfileAvatarSelectorElement);
