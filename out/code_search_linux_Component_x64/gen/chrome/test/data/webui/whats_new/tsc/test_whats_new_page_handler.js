// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { TestBrowserProxy } from 'chrome://webui-test/test_browser_proxy.js';
/**
 * Test version of the WhatsNewPageHandler used to verify calls to the
 * browser from WebUI.
 */
export class TestWhatsNewPageHandler extends TestBrowserProxy {
    url_;
    constructor(url = '') {
        super([
            'getServerUrl',
            'recordTimeToLoadContent',
            'recordVersionPageLoaded',
            'recordEditionPageLoaded',
            'recordModuleImpression',
            'recordExploreMoreToggled',
            'recordScrollDepth',
            'recordTimeOnPage',
            'recordModuleLinkClicked',
            'recordModuleVideoStarted',
            'recordModuleVideoEnded',
            'recordModulePlayClicked',
            'recordModulePauseClicked',
            'recordModuleRestartClicked',
            'recordBrowserCommandExecuted',
            'recordQrCodeToggled',
            'recordNavClick',
            'recordFeatureTileNavigation',
            'recordCarouselScrollButtonClick',
            'recordExpandMediaToggled',
            'recordCtaClick',
            'recordNextButtonClick',
            'openCrossDeviceSigninQrBubble',
        ]);
        this.url_ = url;
    }
    setGetServerUrlResponse(url) {
        this.url_ = url;
    }
    getServerUrl() {
        this.methodCalled('getServerUrl');
        return Promise.resolve({ url: this.url_ });
    }
    recordTimeToLoadContent(time) {
        this.methodCalled('recordTimeToLoadContent', time);
    }
    recordVersionPageLoaded(isAutoOpen) {
        this.methodCalled('recordVersionPageLoaded', isAutoOpen);
    }
    recordEditionPageLoaded(pageUid, isAutoOpen) {
        this.methodCalled('recordEditionPageLoaded', pageUid, isAutoOpen);
    }
    recordModuleImpression(moduleName, position) {
        this.methodCalled('recordModuleImpression', moduleName, position);
    }
    recordExploreMoreToggled(expanded) {
        this.methodCalled('recordExploreMoreToggled', expanded);
    }
    recordScrollDepth(percent) {
        this.methodCalled('recordScrollDepth', percent);
    }
    recordTimeOnPage(time, isHeartbeat) {
        this.methodCalled('recordTimeOnPage', time, isHeartbeat);
    }
    recordModuleLinkClicked(moduleName, position) {
        this.methodCalled('recordModuleLinkClicked', moduleName, position);
    }
    recordModuleVideoStarted(moduleName, position) {
        this.methodCalled('recordModuleVideoStarted', moduleName, position);
    }
    recordModuleVideoEnded(moduleName, position) {
        this.methodCalled('recordModuleVideoEnded', moduleName, position);
    }
    recordModulePlayClicked(moduleName, position) {
        this.methodCalled('recordModulePlayClicked', moduleName, position);
    }
    recordModulePauseClicked(moduleName, position) {
        this.methodCalled('recordModulePauseClicked', moduleName, position);
    }
    recordModuleRestartClicked(moduleName, position) {
        this.methodCalled('recordModuleRestartClicked', moduleName, position);
    }
    recordBrowserCommandExecuted() {
        this.methodCalled('recordBrowserCommandExecuted');
    }
    recordQrCodeToggled(expanded) {
        this.methodCalled('recordQrCodeToggled', expanded);
    }
    recordNavClick() {
        this.methodCalled('recordNavClick');
    }
    recordFeatureTileNavigation() {
        this.methodCalled('recordFeatureTileNavigation');
    }
    recordCarouselScrollButtonClick() {
        this.methodCalled('recordCarouselScrollButtonClick');
    }
    recordExpandMediaToggled(moduleName, expanded) {
        this.methodCalled('recordExpandMediaToggled', moduleName, expanded);
    }
    recordCtaClick() {
        this.methodCalled('recordCtaClick');
    }
    recordNextButtonClick() {
        this.methodCalled('recordNextButtonClick');
    }
    openCrossDeviceSigninQrBubble() {
        this.methodCalled('openCrossDeviceSigninQrBubble');
    }
}
