// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { PasskeysBrowserProxyImpl } from 'chrome://settings/lazy_load.js';
import { assertDeepEquals, assertEquals, assertFalse, assertTrue } from 'chrome://webui-test/chai_assert.js';
import { TestBrowserProxy } from 'chrome://webui-test/test_browser_proxy.js';
import { microtasksFinished } from 'chrome://webui-test/test_util.js';
class TestPasskeysBrowserProxy extends TestBrowserProxy {
    constructor() {
        super([
            'enumerate',
            'delete',
            'edit',
        ]);
    }
    // nextPasskeys_ is the next result to return from a call to `enumerate`
    // or `delete`.
    nextPasskeys_ = null;
    setNextPasskeys(passkeys) {
        this.nextPasskeys_ = passkeys;
        this.resetResolver('enumerate');
        this.resetResolver('delete');
        this.resetResolver('edit');
    }
    hasPasskeys() {
        return Promise.resolve(true);
    }
    enumerate() {
        this.methodCalled('enumerate');
        return this.consumeNext_();
    }
    delete(credentialId) {
        this.methodCalled('delete', credentialId);
        return this.consumeNext_();
    }
    edit(credentialId, newUsername) {
        this.methodCalled('edit', credentialId, newUsername);
        return this.consumeNext_();
    }
    consumeNext_() {
        const result = this.nextPasskeys_;
        this.nextPasskeys_ = null;
        return Promise.resolve(result);
    }
}
/**
 * Gets the usernames of the passkeys currently displayed.
 */
function getUsernamesFromList(list) {
    const inputs = Array.from(list.shadowRoot.querySelectorAll('.list-item .username-column'));
    return inputs.slice(1).map(input => input.textContent.trim());
}
/**
 * Clicks the `num`th drop-down icon in the list of passkeys.
 */
function clickDots(page, num) {
    const icon = page.shadowRoot.querySelectorAll('.list-item .icon-more-vert')[num];
    assertTrue(icon !== undefined);
    icon.click();
}
/**
 * Clicks the button named `name` in the drop-down.
 */
function clickButton(page, name) {
    const menu = page.shadowRoot.querySelector('#menu');
    const button = menu.querySelector('#' + name);
    assertTrue(!!button, name + ' button missing');
    button.click();
}
/**
 * Clicks the buttons `save` or `cancel` in the edit dialog.
 */
function clickDialogButton(dialog, name) {
    const menu = dialog.shadowRoot.querySelector('#dialog');
    const button = menu.querySelector('#' + name);
    assertTrue(!!button, name + ' button missing');
    button.click();
}
/**
 * Sets the username to an input string in the edit dialog.
 */
function setInputField(dialog, input) {
    const menu = dialog.shadowRoot.querySelector('#dialog');
    const inputField = menu.querySelector('#usernameInput');
    assertTrue(!!inputField);
    inputField.value = input;
}
/**
 * Gets error message for username input in edit dialog.
 */
function getErrorMessage(dialog) {
    const menu = dialog.shadowRoot.querySelector('#dialog');
    const inputField = menu.querySelector('#usernameInput');
    assertTrue(!!inputField);
    return inputField.$.error.textContent;
}
/**
 * Returns true if error due to no passkey management support is shown
 */
function isShowingError(page) {
    return !!page.shadowRoot.querySelector('#error');
}
suite('PasskeysEditDialog', function () {
    let browserProxy;
    let page;
    setup(function () {
        browserProxy = new TestPasskeysBrowserProxy();
        PasskeysBrowserProxyImpl.setInstance(browserProxy);
        document.body.innerHTML = window.trustedTypes.emptyHTML;
        page = document.createElement('settings-passkeys-page');
    });
    test('cancelClickedEditDialog', async function () {
        const passkeys = [
            {
                credentialId: '1',
                relyingPartyId: 'rpid.com',
                userName: 'user',
                userDisplayName: 'displayName',
            },
        ];
        browserProxy.setNextPasskeys(passkeys);
        document.body.appendChild(page);
        await microtasksFinished();
        assertEquals(1, browserProxy.getCallCount('enumerate'));
        assertFalse(isShowingError(page));
        assertDeepEquals(getUsernamesFromList(page), [passkeys[0].userName]);
        clickButton(page, 'edit');
        await microtasksFinished();
        const dialog = page.shadowRoot.querySelector('passkey-edit-dialog');
        assertTrue(!!dialog);
        clickDialogButton(dialog, 'cancel');
        await microtasksFinished();
        assertEquals(0, browserProxy.getCallCount('edit'));
        assertDeepEquals(getUsernamesFromList(page), passkeys.map(cred => cred.userName));
    });
    test('saveClickedAndUsernameValidEditDialog', async function () {
        const passkeys = [
            {
                credentialId: '1',
                relyingPartyId: 'rpid.com',
                userName: 'user',
                userDisplayName: 'displayName',
            },
        ];
        const editedPasskeys = [
            {
                credentialId: '1',
                relyingPartyId: 'rpid.com',
                userName: 'new-username',
                userDisplayName: 'displayName',
            },
        ];
        browserProxy.setNextPasskeys(passkeys);
        document.body.appendChild(page);
        await microtasksFinished();
        assertEquals(1, browserProxy.getCallCount('enumerate'));
        assertFalse(isShowingError(page));
        assertDeepEquals(getUsernamesFromList(page), [passkeys[0].userName]);
        clickDots(page, 0);
        clickButton(page, 'edit');
        await microtasksFinished();
        const dialog = page.shadowRoot.querySelector('passkey-edit-dialog');
        assertTrue(!!dialog);
        await microtasksFinished();
        browserProxy.setNextPasskeys(editedPasskeys);
        setInputField(dialog, 'new-username');
        await microtasksFinished();
        clickDialogButton(dialog, 'actionButton');
        const args = await browserProxy.whenCalled('edit');
        assertEquals(args[0], passkeys[0].credentialId);
        assertEquals(args[1], editedPasskeys[0].userName);
        await microtasksFinished();
        assertEquals(browserProxy.getCallCount('edit'), 1);
        assertDeepEquals(getUsernamesFromList(page), editedPasskeys.map(cred => cred.userName));
    });
    test('saveClickedAndUsernameInvalidEditDialog', async function () {
        const passkeys = [
            {
                credentialId: '1',
                relyingPartyId: 'rpid.com',
                userName: 'user',
                userDisplayName: 'displayName',
            },
        ];
        browserProxy.setNextPasskeys(passkeys);
        document.body.appendChild(page);
        await microtasksFinished();
        assertEquals(1, browserProxy.getCallCount('enumerate'), 'Enumerate should have been called once');
        assertFalse(isShowingError(page));
        assertDeepEquals(getUsernamesFromList(page), [passkeys[0].userName]);
        clickDots(page, 0);
        clickButton(page, 'edit');
        await microtasksFinished();
        const dialog = page.shadowRoot.querySelector('passkey-edit-dialog');
        assertTrue(!!dialog);
        browserProxy.setNextPasskeys(passkeys);
        setInputField(dialog, '');
        await microtasksFinished();
        clickDialogButton(dialog, 'actionButton');
        await microtasksFinished();
        assertEquals('Enter your username', getErrorMessage(dialog));
        assertEquals(0, browserProxy.getCallCount('edit'), 'Edit should not have been called');
        assertDeepEquals(getUsernamesFromList(page), passkeys.map(cred => cred.userName));
    });
});
