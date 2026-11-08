// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { isFullWebView } from '../shared/web_view_type.js';
// Attaches the X-Glic headers to all main-frame requests.
// X-Glic: 1
// X-Glic-Chrome-Channel: stable
// X-Glic-Chrome-Version: 137.0.1234.0
// X-Glic-Onboarding-Completed: true
// X-Glic-Onboarding-Arm: 2
export class GlicRequestHeaderInjector {
    chromeVersion;
    chromeChannel;
    glicSsr;
    onboardingCompleted;
    onboardingArm;
    onDestroy = () => { };
    constructor(webview, chromeVersion, chromeChannel, glicSsr, onboardingCompleted, onboardingArm, requestTypes) {
        this.chromeVersion = chromeVersion;
        this.chromeChannel = chromeChannel;
        this.glicSsr = glicSsr;
        this.onboardingCompleted = onboardingCompleted;
        this.onboardingArm = onboardingArm;
        if (requestTypes === '') {
            return;
        }
        if (isFullWebView(webview)) {
            const onBeforeSendHeaders = this.onBeforeSendHeaders.bind(this);
            webview.request.onBeforeSendHeaders.addListener(onBeforeSendHeaders, {
                // These should be valid values from web_request.d.ts.
                types: requestTypes.split(','),
                urls: ['<all_urls>'],
            }, ['blocking', 'requestHeaders', 'extraHeaders']);
            this.onDestroy = () => {
                webview.request.onBeforeSendHeaders.removeListener(onBeforeSendHeaders);
            };
        }
        else {
            // 
        }
    }
    destroy() {
        this.onDestroy();
    }
    onBeforeSendHeaders = (details) => {
        // Ignore subframe requests.
        if (details.frameId !== 0) {
            return {};
        }
        const requestHeaders = details.requestHeaders || [];
        requestHeaders.push(...this.headers());
        return { requestHeaders };
    };
    headers() {
        const headers = [
            {
                name: 'X-Glic',
                value: '1',
            },
            {
                name: 'X-Glic-Chrome-Version',
                value: this.chromeVersion,
            },
            {
                name: 'X-Glic-Chrome-Channel',
                value: this.chromeChannel,
            },
        ];
        if (this.glicSsr) {
            headers.push({
                name: 'X-Glic-Onboarding-Completed',
                value: this.onboardingCompleted ? 'true' : 'false',
            });
            if (this.onboardingArm) {
                headers.push({
                    name: 'X-Glic-Onboarding-Arm',
                    value: this.onboardingArm,
                });
            }
        }
        return headers;
    }
}
