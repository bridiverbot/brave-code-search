// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { assert } from 'chrome://resources/js/assert.js';
import { Dialog, navigation, Page } from './navigation_helper.js';
// Throws the `error` if it was anything other than the extension no longer
// being in the system. The "no such extension found" error is always safe to
// catch because the `ExtensionsManagerElement` will navigate away from an
// extension specific page (e.g. DETAILS or ERRORS) back to the LIST page or
// delete the extension's item on the LIST page when an extension is
// uninstalled.
function throwIfIsUnexpectedError(error, functionName) {
    if (error?.message !==
        `No such extension found for call to 'developerPrivate.${functionName}'.`) {
        throw error;
    }
}
export class Service {
    isDeleting_ = false;
    eventsToIgnoreOnce_ = new Set();
    getProfileConfiguration() {
        return chrome.developerPrivate.getProfileConfiguration();
    }
    getItemStateChangedTarget() {
        return chrome.developerPrivate.onItemStateChanged;
    }
    shouldIgnoreUpdate(extensionId, eventType) {
        return this.eventsToIgnoreOnce_.delete(`${extensionId}_${eventType}`);
    }
    ignoreNextEvent(extensionId, eventType) {
        this.eventsToIgnoreOnce_.add(`${extensionId}_${eventType}`);
    }
    getProfileStateChangedTarget() {
        return chrome.developerPrivate.onProfileStateChanged;
    }
    getExtensionsInfo() {
        return chrome.developerPrivate.getExtensionsInfo({ includeDisabled: true, includeTerminated: true });
    }
    getExtensionSize(id) {
        return chrome.developerPrivate.getExtensionSize(id).catch(error => {
            throwIfIsUnexpectedError(error, 'getExtensionSize');
            return '';
        });
    }
    addRuntimeHostPermission(id, host) {
        return chrome.developerPrivate.addHostPermission(id, host).catch(error => {
            throwIfIsUnexpectedError(error, 'addHostPermission');
        });
    }
    removeRuntimeHostPermission(id, host) {
        return chrome.developerPrivate.removeHostPermission(id, host).catch(error => {
            throwIfIsUnexpectedError(error, 'removeHostPermission');
        });
    }
    recordUserAction(metricName) {
        chrome.metricsPrivate.recordUserAction(metricName);
    }
    /**
     * Opens a file browser dialog for the user to select a file (or directory).
     * @return The promise to be resolved with the selected path.
     */
    chooseFilePath_(selectType, fileType) {
        return chrome.developerPrivate.choosePath(selectType, fileType)
            .catch(error => {
            if (error.message !== 'File selection was canceled.') {
                throw error;
            }
            return '';
        });
    }
    updateExtensionCommandKeybinding(extensionId, commandName, keybinding) {
        chrome.developerPrivate.updateExtensionCommand({
            extensionId: extensionId,
            commandName: commandName,
            keybinding: keybinding,
        });
    }
    updateExtensionCommandScope(extensionId, commandName, scope) {
        // The COMMAND_REMOVED event needs to be ignored since it is sent before
        // the command is added back with the updated scope but can be handled
        // after the COMMAND_ADDED event.
        this.ignoreNextEvent(extensionId, chrome.developerPrivate.EventType.COMMAND_REMOVED);
        chrome.developerPrivate.updateExtensionCommand({
            extensionId: extensionId,
            commandName: commandName,
            scope: scope,
        });
    }
    setShortcutHandlingSuspended(isCapturing) {
        chrome.developerPrivate.setShortcutHandlingSuspended(isCapturing);
    }
    /**
     * @return A signal that loading finished, rejected if any error occurred.
     */
    loadUnpackedHelper_(extraOptions) {
        const options = Object.assign({
            failQuietly: true,
            populateError: true,
        }, extraOptions);
        return chrome.developerPrivate.loadUnpacked(options)
            .then(loadError => {
            if (loadError) {
                throw loadError;
            }
            // The load was successful if there's no loadError.
            return true;
        })
            .catch(error => {
            if (error.message !== 'File selection was canceled.') {
                throw error;
            }
            return false;
        });
    }
    deleteItem(id) {
        if (this.isDeleting_) {
            return;
        }
        chrome.metricsPrivate.recordUserAction('Extensions.RemoveExtensionClick');
        this.isDeleting_ = true;
        chrome.management.uninstall(id, { showConfirmDialog: true })
            .catch(_ => {
            // The error was almost certainly the user canceling the dialog.
            // Do nothing. We only check it so we don't get noisy logs.
        })
            .finally(() => {
            this.isDeleting_ = false;
        });
    }
    /**
     * Allows the consumer to call the API asynchronously.
     */
    uninstallItem(id) {
        chrome.metricsPrivate.recordUserAction('Extensions.RemoveExtensionClick');
        return chrome.management.uninstall(id, { showConfirmDialog: true });
    }
    openReviewPage(id) {
        return chrome.developerPrivate.openReviewPage(id).catch(() => {
            // Opening the review page can fail for benign reasons, such as the
            // extension being uninstalled or review prompts being disabled by
            // policy after the page was loaded. Ignore errors to avoid noisy
            // crash logs.
        });
    }
    deleteItems(ids) {
        this.isDeleting_ = true;
        return chrome.developerPrivate.removeMultipleExtensions(ids).finally(() => {
            this.isDeleting_ = false;
        });
    }
    updateExtensionConfiguration_(config) {
        return chrome.developerPrivate.updateExtensionConfiguration(config).catch(error => {
            throwIfIsUnexpectedError(error, 'updateExtensionConfiguration');
        });
    }
    openDevTools_(properties) {
        return chrome.developerPrivate.openDevTools(properties).catch(error => {
            throwIfIsUnexpectedError(error, 'openDevTools');
        });
    }
    setItemSafetyCheckWarningAcknowledged(id, reason) {
        return this.updateExtensionConfiguration_({
            extensionId: id,
            acknowledgeSafetyCheckWarningReason: reason,
        });
    }
    setItemEnabled(id, isEnabled) {
        chrome.metricsPrivate.recordUserAction(isEnabled ? 'Extensions.ExtensionEnabled' :
            'Extensions.ExtensionDisabled');
        return chrome.management.setEnabled(id, isEnabled)
            .catch(_ => {
            // The `setEnabled` call can reasonably fail for a number of
            // reasons, including that the user chose to deny a re-enable
            // dialog. Silently ignore these errors.
        });
    }
    setItemAllowedIncognito(id, isAllowedIncognito) {
        this.updateExtensionConfiguration_({
            extensionId: id,
            incognitoAccess: isAllowedIncognito,
        });
    }
    setItemAllowedUserScripts(id, isAllowedUserScripts) {
        this.updateExtensionConfiguration_({
            extensionId: id,
            userScriptsAccess: isAllowedUserScripts,
        });
    }
    setItemAllowedOnFileUrls(id, isAllowedOnFileUrls) {
        this.updateExtensionConfiguration_({
            extensionId: id,
            fileAccess: isAllowedOnFileUrls,
        });
    }
    setItemHostAccess(id, hostAccess) {
        this.updateExtensionConfiguration_({
            extensionId: id,
            hostAccess: hostAccess,
        });
    }
    setItemCollectsErrors(id, collectsErrors) {
        this.updateExtensionConfiguration_({
            extensionId: id,
            errorCollection: collectsErrors,
        });
    }
    setItemPinnedToToolbar(id, pinnedToToolbar) {
        this.updateExtensionConfiguration_({
            extensionId: id,
            pinnedToToolbar,
        });
    }
    inspectItemView(id, view) {
        this.openDevTools_({
            extensionId: id,
            renderProcessId: view.renderProcessId,
            renderViewId: view.renderViewId,
            incognito: view.incognito,
            isServiceWorker: view.type === 'EXTENSION_SERVICE_WORKER_BACKGROUND',
        });
    }
    openDevToolsForError(error) {
        const devToolsProperties = {
            extensionId: error.extensionId,
            renderProcessId: error.renderProcessId,
            renderViewId: error.renderViewId,
            incognito: error.fromIncognito,
            isServiceWorker: error.isServiceWorker,
        };
        // Get stack trace information if available to open the correct file and
        // line.
        const stackFrame = error.stackTrace && error.stackTrace[0];
        if (stackFrame) {
            devToolsProperties.url = stackFrame.url;
            devToolsProperties.lineNumber = stackFrame.lineNumber;
            devToolsProperties.columnNumber = stackFrame.columnNumber;
        }
        this.openDevTools_(devToolsProperties);
    }
    openUrl(url) {
        window.open(url);
    }
    reloadItem(id) {
        return chrome.developerPrivate
            .reload(id, { failQuietly: true, populateErrorForUnpacked: true })
            .then(loadError => {
            if (loadError) {
                throw loadError;
            }
        });
    }
    repairItem(id) {
        chrome.developerPrivate.repairExtension(id).catch(_ => {
            // This can legitimately fail (e.g. if a reinstall is already
            // in progress). Ignore the error to avoid crashing the browser,
            // since WebUI errors are treated as crashes.
        });
    }
    showItemOptionsPage(extension) {
        assert(extension && extension.optionsPage);
        // We can't handle embedded options on android because guest_view is not
        // supported.
        // 
        // 
        const openInTab = extension.optionsPage.openInTab;
        // 
        if (openInTab) {
            chrome.developerPrivate.showOptions(extension.id).catch(error => {
                throwIfIsUnexpectedError(error, 'showOptions');
            });
        }
        else {
            navigation.navigateTo({
                page: Page.DETAILS,
                subpage: Dialog.OPTIONS,
                extensionId: extension.id,
            });
        }
    }
    setProfileInDevMode(inDevMode) {
        chrome.developerPrivate.updateProfileConfiguration({ inDeveloperMode: inDevMode });
    }
    loadUnpacked() {
        return this.loadUnpackedHelper_();
    }
    retryLoadUnpacked(retryGuid) {
        // Attempt to load an unpacked extension, optionally as another attempt at
        // a previously-specified load.
        return this.loadUnpackedHelper_({ retryGuid });
    }
    choosePackRootDirectory() {
        return this.chooseFilePath_(chrome.developerPrivate.SelectType.FOLDER, chrome.developerPrivate.FileType.LOAD);
    }
    choosePrivateKeyPath() {
        return this.chooseFilePath_(chrome.developerPrivate.SelectType.FILE, chrome.developerPrivate.FileType.PEM);
    }
    packExtension(rootPath, keyPath, flag) {
        return chrome.developerPrivate.packDirectory(rootPath, keyPath, flag);
    }
    updateAllExtensions(extensions) {
        /**
         * Attempt to reload local extensions. If an extension fails to load, the
         * user is prompted to try updating the broken extension using loadUnpacked
         * and we skip reloading the remaining local extensions.
         */
        return chrome.developerPrivate.autoUpdate().then(() => {
            chrome.metricsPrivate.recordUserAction('Options_UpdateExtensions');
            return new Promise((resolve, reject) => {
                const loadLocalExtensions = async () => {
                    const unpackedExtensions = extensions.filter((ext) => ext.location ===
                        chrome.developerPrivate.Location.UNPACKED);
                    for (const extension of unpackedExtensions) {
                        try {
                            await this.reloadItem(extension.id);
                        }
                        catch (loadError) {
                            reject(loadError);
                            break;
                        }
                    }
                    resolve();
                };
                loadLocalExtensions();
            });
        });
    }
    deleteErrors(extensionId, errorIds, type) {
        chrome.developerPrivate.deleteExtensionErrors({
            extensionId: extensionId,
            errorIds: errorIds,
            type: type,
        });
    }
    requestFileSource(args) {
        return chrome.developerPrivate.requestFileSource(args).catch(error => {
            throwIfIsUnexpectedError(error, 'requestFileSource');
            return null;
        });
    }
    showInFolder(id) {
        chrome.developerPrivate.showPath(id).catch(error => {
            throwIfIsUnexpectedError(error, 'showPath');
        });
    }
    getExtensionActivityLog(extensionId) {
        return chrome.activityLogPrivate.getExtensionActivities({
            activityType: chrome.activityLogPrivate.ExtensionActivityFilter.ANY,
            extensionId: extensionId,
        });
    }
    getFilteredExtensionActivityLog(extensionId, searchTerm) {
        const anyType = chrome.activityLogPrivate.ExtensionActivityFilter.ANY;
        // Construct one filter for each API call we will make: one for substring
        // search by api call, one for substring search by page URL, and one for
        // substring search by argument URL. % acts as a wildcard.
        const activityLogFilters = [
            {
                activityType: anyType,
                extensionId: extensionId,
                apiCall: `%${searchTerm}%`,
            },
            {
                activityType: anyType,
                extensionId: extensionId,
                pageUrl: `%${searchTerm}%`,
            },
            {
                activityType: anyType,
                extensionId: extensionId,
                argUrl: `%${searchTerm}%`,
            },
        ];
        const promises = activityLogFilters.map(filter => chrome.activityLogPrivate.getExtensionActivities(filter));
        return Promise.all(promises).then(results => {
            // We may have results that are present in one or more searches, so
            // we merge them here. We also assume that every distinct activity
            // id corresponds to exactly one activity.
            const activitiesById = new Map();
            for (const result of results) {
                for (const activity of result.activities) {
                    activitiesById.set(activity.activityId, activity);
                }
            }
            return { activities: Array.from(activitiesById.values()) };
        });
    }
    deleteActivitiesById(activityIds) {
        return chrome.activityLogPrivate.deleteActivities(activityIds);
    }
    deleteActivitiesFromExtension(extensionId) {
        return chrome.activityLogPrivate.deleteActivitiesByExtension(extensionId);
    }
    getOnExtensionActivity() {
        return chrome.activityLogPrivate.onExtensionActivity;
    }
    downloadActivities(rawActivityData, fileName) {
        const blob = new Blob([rawActivityData], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = fileName;
        a.click();
    }
    /**
     * Attempts to load an unpacked extension via a drag-n-drop gesture.
     * @return {!Promise}
     */
    loadUnpackedFromDrag() {
        return this.loadUnpackedHelper_({ useDraggedPath: true });
    }
    installDroppedFile() {
        chrome.developerPrivate.installDroppedFile();
    }
    notifyDragInstallInProgress() {
        chrome.developerPrivate.notifyDragInstallInProgress();
    }
    getUserSiteSettings() {
        return chrome.developerPrivate.getUserSiteSettings();
    }
    addUserSpecifiedSites(siteSet, hosts) {
        return chrome.developerPrivate.addUserSpecifiedSites({ siteSet, hosts });
    }
    removeUserSpecifiedSites(siteSet, hosts) {
        return chrome.developerPrivate.removeUserSpecifiedSites({ siteSet, hosts });
    }
    getUserAndExtensionSitesByEtld() {
        return chrome.developerPrivate.getUserAndExtensionSitesByEtld();
    }
    getMatchingExtensionsForSite(site) {
        return chrome.developerPrivate.getMatchingExtensionsForSite(site);
    }
    getUserSiteSettingsChangedTarget() {
        return chrome.developerPrivate.onUserSiteSettingsChanged;
    }
    setShowAccessRequestsInToolbar(id, showRequests) {
        chrome.developerPrivate.updateExtensionConfiguration({
            extensionId: id,
            showAccessRequestsInToolbar: showRequests,
        });
    }
    updateSiteAccess(site, updates) {
        return chrome.developerPrivate.updateSiteAccess(site, updates);
    }
    dismissSafetyHubExtensionsMenuNotification() {
        chrome.developerPrivate.dismissSafetyHubExtensionsMenuNotification();
    }
    dismissMv2DeprecationNotice() {
        chrome.developerPrivate.updateProfileConfiguration({ isMv2DeprecationNoticeDismissed: true });
    }
    uploadItemToAccount(id) {
        return chrome.developerPrivate.uploadExtensionToAccount(id);
    }
    showSiteSettings(extensionId) {
        chrome.developerPrivate.showSiteSettings(extensionId);
    }
    setProfileExtensionsPinnedByDefault(extensionsPinnedByDefault) {
        chrome.developerPrivate.updateProfileConfiguration({ extensionsPinnedByDefault });
    }
    static getInstance() {
        return instance || (instance = new Service());
    }
    static setInstance(obj) {
        instance = obj;
    }
}
let instance = null;
