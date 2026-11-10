import { AppType } from 'chrome://apps/app_home.mojom-webui.js';
import { UserDisplayMode } from 'chrome://apps/user_display_mode.mojom-webui.js';
import { TestBrowserProxy } from 'chrome://webui-test/test_browser_proxy.js';
export class FakePageHandler extends TestBrowserProxy {
    apps_;
    callbackRouterRemote_ = null;
    constructor(apps) {
        super([
            'uninstallApp',
            'showAppSettings',
            'createAppShortcut',
            'installAppLocally',
            'launchApp',
            'launchDeprecatedAppDialog',
        ]);
        this.apps_ = apps;
    }
    setCallbackRouterRemote(remote) {
        this.callbackRouterRemote_ = remote;
    }
    addAppToList(app) {
        this.apps_.appList.push(app);
    }
    getApps() {
        return Promise.resolve(this.apps_);
    }
    getDeprecationLinkString() {
        let deprecated = '';
        for (const app of this.apps_.appList) {
            if (app.appType === AppType.kDeprecatedChromeApp) {
                deprecated = 'Remove X deprecated apps.';
            }
        }
        return Promise.resolve({ linkString: deprecated });
    }
    uninstallApp(appId) {
        this.methodCalled('uninstallApp', appId);
    }
    showAppSettings(appId) {
        this.methodCalled('showAppSettings', appId);
    }
    createAppShortcut(appId) {
        this.methodCalled('createAppShortcut', appId);
        return Promise.resolve();
    }
    launchApp(appId, clickEvent) {
        this.methodCalled('launchApp', appId, clickEvent);
        return Promise.resolve();
    }
    setRunOnOsLoginMode(appId, runOnOsLoginMode) {
        for (const app of this.apps_.appList) {
            if (app.id === appId) {
                app.runOnOsLoginMode = runOnOsLoginMode;
                this.callbackRouterRemote_.addApp(app);
                break;
            }
        }
    }
    launchDeprecatedAppDialog() {
        this.methodCalled('launchDeprecatedAppDialog');
    }
    installAppLocally(appId) {
        this.methodCalled('installAppLocally', appId);
        for (const app of this.apps_.appList) {
            if (app.id === appId) {
                app.isLocallyInstalled = true;
                this.callbackRouterRemote_.addApp(app);
                break;
            }
        }
    }
    setUserDisplayMode(appId, userDisplayMode) {
        for (const app of this.apps_.appList) {
            if (app.id === appId) {
                app.openInWindow = (userDisplayMode !== UserDisplayMode.kBrowser);
                this.callbackRouterRemote_.addApp(app);
                break;
            }
        }
    }
}
