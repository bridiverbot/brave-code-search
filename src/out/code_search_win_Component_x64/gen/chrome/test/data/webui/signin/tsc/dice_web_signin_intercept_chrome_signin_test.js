// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://signin-dice-web-intercept.top-chrome/chrome_signin/chrome_signin_app.js';
import { webUIListenerCallback } from 'chrome://resources/js/cr.js';
import { DiceWebSigninInterceptBrowserProxyImpl } from 'chrome://signin-dice-web-intercept.top-chrome/dice_web_signin_intercept_browser_proxy.js';
import { assertEquals, assertFalse, assertTrue } from 'chrome://webui-test/chai_assert.js';
import { isChildVisible, microtasksFinished } from 'chrome://webui-test/test_util.js';
import { TestDiceWebSigninInterceptBrowserProxy } from './test_dice_web_signin_intercept_browser_proxy.js';
const AVATAR_URL = 'chrome://theme/IDR_PROFILE_AVATAR_1';
const PARAMETERS = {
    title: 'title',
    subtitle: 'subtitle',
    fullName: 'full_name',
    givenName: 'given_name',
    email: 'email@example.com',
    pictureUrl: AVATAR_URL,
    managedUserBadge: '',
    userBadgeAltText: '',
};
suite('DiceWebSigninInterceptChromeSigninTest', function () {
    let app;
    let browserProxy;
    setup(async function () {
        browserProxy = new TestDiceWebSigninInterceptBrowserProxy();
        browserProxy.setChromeSigninInterceptionParameters(PARAMETERS);
        DiceWebSigninInterceptBrowserProxyImpl.setInstance(browserProxy);
        document.body.innerHTML = window.trustedTypes.emptyHTML;
        app = document.createElement('chrome-signin-app');
        document.body.append(app);
        return browserProxy.whenCalled('chromeSigninPageLoaded');
    });
    function checkImageUrl(elementId, expectedUrl) {
        assertTrue(isChildVisible(app, elementId));
        const img = app.shadowRoot.querySelector(elementId);
        assertTrue(img != null);
        assertEquals(expectedUrl, img.src);
    }
    function checkAltText(elementId, expectedAltText) {
        const badge = app.shadowRoot.querySelector(elementId);
        assertTrue(badge != null);
        assertEquals(expectedAltText, badge.alt);
    }
    test('ClickAccept', function () {
        assertTrue(isChildVisible(app, '#accept-button'));
        app.shadowRoot.querySelector('#accept-button').click();
        return browserProxy.whenCalled('accept');
    });
    test('ClickCancel', function () {
        assertTrue(isChildVisible(app, '#cancel-button'));
        app.shadowRoot.querySelector('#cancel-button').click();
        return browserProxy.whenCalled('cancel');
    });
    test('AppContentValues', async function () {
        const titleElement = app.shadowRoot.querySelector('#title');
        assertEquals(PARAMETERS.title, titleElement.textContent);
        const subtitleElement = app.shadowRoot.querySelector('#subtitle');
        assertEquals(PARAMETERS.subtitle, subtitleElement.textContent);
        const nameElement = app.shadowRoot.querySelector('#name');
        assertEquals(PARAMETERS.fullName, nameElement.textContent);
        const emailElement = app.shadowRoot.querySelector('#email');
        assertEquals(PARAMETERS.email, emailElement.textContent);
        const acceptButton = app.shadowRoot.querySelector('#accept-button');
        assertEquals(app.i18n('chromeSigninAcceptText', PARAMETERS.givenName), acceptButton.textContent.trim());
        const cancelButton = app.shadowRoot.querySelector('#cancel-button');
        assertEquals(app.i18n('chromeSigninDeclineText'), cancelButton.textContent.trim());
        const avatarSelector = '#accountIconContainer>img';
        checkImageUrl(avatarSelector, PARAMETERS.pictureUrl);
        // Simulate a change of picture url.
        const newParams = {
            ...PARAMETERS,
            pictureUrl: 'chrome://theme/IDR_PROFILE_AVATAR_2',
        };
        webUIListenerCallback('interception-chrome-signin-parameters-changed', newParams);
        await microtasksFinished();
        // It should be reflected in the UI.
        checkImageUrl(avatarSelector, newParams.pictureUrl);
    });
    test('AccountIconsAndManagedBadges', async function () {
        const iconSelector = '#accountIconContainer > img';
        const badgeSelector = '#accountIconContainer > .managed-user-badge';
        // Regular (non-supervised) user avatars.
        checkImageUrl(iconSelector, PARAMETERS.pictureUrl);
        assertFalse(isChildVisible(app, badgeSelector));
        // Set Supervised user badge source. The badge becomes visible.
        let newParams = {
            ...PARAMETERS,
            managedUserBadge: 'cr:family-link',
            userBadgeAltText: 'Managed by your parent',
        };
        webUIListenerCallback('interception-chrome-signin-parameters-changed', newParams);
        await microtasksFinished();
        checkImageUrl(iconSelector, PARAMETERS.pictureUrl);
        assertTrue(isChildVisible(app, badgeSelector));
        checkAltText(iconSelector, newParams.userBadgeAltText);
        // Un-set Supervised user badge source. The badge becomes hidden.
        newParams = {
            ...PARAMETERS,
            managedUserBadge: '',
            userBadgeAltText: '',
        };
        webUIListenerCallback('interception-chrome-signin-parameters-changed', newParams);
        await microtasksFinished();
        assertFalse(isChildVisible(app, badgeSelector));
        checkAltText(iconSelector, newParams.userBadgeAltText);
    });
});
