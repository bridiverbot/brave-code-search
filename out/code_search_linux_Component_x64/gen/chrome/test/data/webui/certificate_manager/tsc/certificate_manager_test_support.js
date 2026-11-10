// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { CertificateManagerPageCallbackRouter } from 'chrome://certificate-manager/certificate_manager.mojom-webui.js';
import { TestBrowserProxy } from 'chrome://webui-test/test_browser_proxy.js';
class FakePageHandler extends TestBrowserProxy {
    // TODO(hchao): try to mess with structure so the auto formatter makes this
    // less confusing. See:
    // https://crrev.com/c/5577174/8/chrome/test/data/webui/cr_components/certificate_manager_test_support.ts
    getCertificatesCallback_ = (_) => {
        return { certs: [] };
    };
    importCertificateCallback_ = (_) => {
        return { result: { error: 'default implementation called' } };
    };
    importAndBindCertificateCallback_ = (_) => {
        return { result: { error: 'default implementation called' } };
    };
    deleteCertificateCallback_ = (_) => {
        return { result: { error: 'default implementation called' } };
    };
    metadata_ = {
        // 
        includeSystemTrustStore: true,
        numUserAddedSystemCerts: 0,
        isIncludeSystemTrustStoreManaged: false,
        // 
        numPolicyCerts: 0,
        numUserCerts: 0,
        showUserCertsUi: false,
    };
    constructor() {
        super([
            'getCertificates',
            'getCertManagementMetadata',
            'viewCertificate',
            'exportCertificates',
            'importCertificate',
            'importAndBindCertificate',
            'deleteCertificate',
            'showNativeManageCertificates',
            'setIncludeSystemTrustStore',
        ]);
    }
    getCertificates(source) {
        this.methodCalled('getCertificates', source);
        return Promise.resolve(this.getCertificatesCallback_(source));
    }
    getCertManagementMetadata() {
        this.methodCalled('getCertManagementMetadata');
        return Promise.resolve({ metadata: this.metadata_ });
    }
    viewCertificate(source, sha256hashHex) {
        this.methodCalled('viewCertificate', source, sha256hashHex);
    }
    exportCertificates(source) {
        this.methodCalled('exportCertificates', source);
    }
    importCertificate(source) {
        this.methodCalled('importCertificate', source);
        return Promise.resolve(this.importCertificateCallback_(source));
    }
    importAndBindCertificate(source) {
        this.methodCalled('importAndBindCertificate', source);
        return Promise.resolve(this.importAndBindCertificateCallback_(source));
    }
    deleteCertificate(source, displayName, sha256hashHex) {
        this.methodCalled('deleteCertificate', source, displayName, sha256hashHex);
        return Promise.resolve(this.deleteCertificateCallback_(source, displayName, sha256hashHex));
    }
    setCertificatesCallback(callbackFn) {
        this.getCertificatesCallback_ = callbackFn;
    }
    setDeleteCertificateCallback(callbackFn) {
        this.deleteCertificateCallback_ = callbackFn;
    }
    setCertManagementMetadata(metadata) {
        this.metadata_ = metadata;
    }
    // 
    // 
    setIncludeSystemTrustStore(include) {
        this.methodCalled('setIncludeSystemTrustStore', include);
    }
}
export class TestCertificateManagerProxy {
    callbackRouter;
    callbackRouterRemote;
    handler;
    constructor() {
        this.callbackRouter = new CertificateManagerPageCallbackRouter();
        this.callbackRouterRemote =
            this.callbackRouter.$.bindNewPipeAndPassRemote();
        this.handler = new FakePageHandler();
    }
}
