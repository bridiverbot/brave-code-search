// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// These test suites test the parts of certificate-manager v2 component that
// depend on what element is focused, and thus need to be an
// interactive_ui_test to avoid flake.
import 'chrome://certificate-manager/certificate_manager.js';
import { CertificateSource } from 'chrome://certificate-manager/certificate_manager.mojom-webui.js';
import { CertificatesBrowserProxy } from 'chrome://certificate-manager/certificates_browser_proxy.js';
import { PromiseResolver } from 'chrome://resources/js/promise_resolver.js';
import { getDeepActiveElement } from 'chrome://resources/js/util.js';
import { assertEquals, assertFalse, assertTrue } from 'chrome://webui-test/chai_assert.js';
import { microtasksFinished } from 'chrome://webui-test/test_util.js';
import { TestCertificateManagerProxy } from './certificate_manager_test_support.js';
suite('CertificateManagerV2FocusTest', () => {
    let certManager;
    let testProxy;
    setup(async () => {
        document.body.innerHTML = window.trustedTypes.emptyHTML;
        await navigator.clipboard.writeText('');
        testProxy = new TestCertificateManagerProxy();
        CertificatesBrowserProxy.setInstance(testProxy);
    });
    function initializeElement() {
        certManager = document.createElement('certificate-manager');
        document.body.appendChild(certManager);
    }
    test('Copy CRS hash', async () => {
        const getCertificatesResolver = new PromiseResolver();
        testProxy.handler.setCertificatesCallback((source) => {
            if (source === CertificateSource.kChromeRootStore) {
                getCertificatesResolver.resolve();
                return {
                    certs: [
                        {
                            sha256hashHex: 'deadbeef',
                            displayName: 'cert1',
                            isDeletable: false,
                        },
                    ],
                };
            }
            return { certs: [] };
        });
        initializeElement();
        await getCertificatesResolver.promise;
        await microtasksFinished();
        assertFalse(certManager.$.toast.open);
        const certEntries = certManager.$.crsCertSection.$.crsCerts.$.certs.querySelectorAll('certificate-entry');
        assertEquals(1, certEntries.length, 'no certs displayed');
        assertEquals('', await navigator.clipboard.readText());
        certEntries[0].$.copy.click();
        assertTrue(certManager.$.toast.open);
        assertEquals('deadbeef', await navigator.clipboard.readText());
    });
    test('Copy platform client certs hash', async () => {
        const getCertificatesResolver = new PromiseResolver();
        testProxy.handler.setCertificatesCallback((source) => {
            if (source === CertificateSource.kPlatformClientCert) {
                getCertificatesResolver.resolve();
                return {
                    certs: [
                        {
                            sha256hashHex: 'deadbeef2',
                            displayName: 'cert2',
                            isDeletable: false,
                        },
                    ],
                };
            }
            return { certs: [] };
        });
        initializeElement();
        certManager.$.clientMenuItem.click();
        certManager.$.viewOsImportedClientCerts.click();
        await getCertificatesResolver.promise;
        await microtasksFinished();
        assertFalse(certManager.$.toast.open);
        const certLists = certManager.$.platformClientCertsSection.shadowRoot.querySelectorAll('certificate-list');
        assertEquals(1, certLists.length, 'no cert lists displayed');
        const certEntries = certLists[0].$.certs.querySelectorAll('certificate-entry');
        assertEquals(1, certEntries.length, 'no certs displayed');
        assertEquals('', await navigator.clipboard.readText());
        certEntries[0].$.copy.click();
        assertTrue(certManager.$.toast.open);
        assertEquals('deadbeef2', await navigator.clipboard.readText());
    });
    // 
    test('Copy provisioned client certs hash', async () => {
        const getCertificatesResolver = new PromiseResolver();
        testProxy.handler.setCertificatesCallback((source) => {
            if (source === CertificateSource.kProvisionedClientCert) {
                getCertificatesResolver.resolve();
                return {
                    certs: [
                        {
                            sha256hashHex: 'deadbeef3',
                            displayName: 'cert3',
                            isDeletable: false,
                        },
                    ],
                };
            }
            return { certs: [] };
        });
        initializeElement();
        await getCertificatesResolver.promise;
        await microtasksFinished();
        assertFalse(certManager.$.toast.open);
        const entries = certManager.$.provisionedClientCerts.$.certs.querySelectorAll('certificate-entry');
        assertEquals(1, entries.length, 'no certs displayed');
        assertEquals('', await navigator.clipboard.readText());
        entries[0].$.copy.click();
        assertTrue(certManager.$.toast.open);
        assertEquals('deadbeef3', await navigator.clipboard.readText());
    });
    // 
    // 
    // 
    test('Check Focus when going in and out of platform subpage', async () => {
        const metadata = {
            includeSystemTrustStore: true,
            numUserAddedSystemCerts: 5,
            isIncludeSystemTrustStoreManaged: true,
            numPolicyCerts: 0,
            numUserCerts: 0,
            showUserCertsUi: false,
        };
        testProxy.handler.setCertManagementMetadata(metadata);
        initializeElement();
        await microtasksFinished();
        certManager.$.localCertSection.$.viewOsImportedCerts.click();
        await microtasksFinished();
        // Check focus is on back button in platform certs section.
        assertTrue(certManager.$.platformCertsSection.classList.contains('selected'));
        const elementInFocus = getDeepActiveElement();
        assertTrue(!!elementInFocus);
        assertEquals('backButton', elementInFocus.id);
        const subsection = elementInFocus.getRootNode().host;
        assertEquals('platformCertsSection', subsection.id);
        elementInFocus.click();
        await microtasksFinished();
        // Check focus is on link row going to platform certs section.
        assertTrue(certManager.$.localCertSection.classList.contains('selected'));
        const newElementInFocus = getDeepActiveElement();
        assertTrue(!!newElementInFocus);
        const linkRow = newElementInFocus.getRootNode().host;
        assertEquals('viewOsImportedCerts', linkRow.id);
    });
    // 
    test('Check Focus when going in and out of user certs subpage', async () => {
        const metadata = {
            // 
            includeSystemTrustStore: true,
            numUserAddedSystemCerts: 5,
            isIncludeSystemTrustStoreManaged: true,
            // 
            numPolicyCerts: 0,
            numUserCerts: 0,
            showUserCertsUi: true,
        };
        testProxy.handler.setCertManagementMetadata(metadata);
        initializeElement();
        await microtasksFinished();
        const rowToClick = certManager.$.localCertSection.shadowRoot.querySelector('#userCertsInstalledLinkRow');
        assertTrue(!!rowToClick);
        rowToClick.click();
        await microtasksFinished();
        // Check focus is on back button in user certs section.
        assertTrue(certManager.$.userCertsSection.classList.contains('selected'));
        const elementInFocus = getDeepActiveElement();
        assertTrue(!!elementInFocus);
        assertEquals('backButton', elementInFocus.id);
        const subsection = elementInFocus.getRootNode().host;
        assertEquals('userCertsSection', subsection.id);
        elementInFocus.click();
        await microtasksFinished();
        // Check focus is on link row going to user certs section.
        assertTrue(certManager.$.localCertSection.classList.contains('selected'));
        const newElementInFocus = getDeepActiveElement();
        assertTrue(!!newElementInFocus);
        const linkRow = newElementInFocus.getRootNode().host;
        assertEquals('userCertsInstalledLinkRow', linkRow.id);
    });
});
