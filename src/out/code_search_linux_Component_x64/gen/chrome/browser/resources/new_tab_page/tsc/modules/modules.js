// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_toast/cr_toast.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import './module_wrapper.js';
import { assert } from 'chrome://resources/js/assert.js';
import { EventTracker } from 'chrome://resources/js/event_tracker.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { loadTimeData } from '../i18n_setup.js';
import { recordBoolean, recordOccurrence, recordSmallCount, recordSparseValueWithPersistentHash } from '../metrics_utils.js';
import { browserProxyFactory } from '../new_tab_page.mojom-webui.js';
import { WindowProxy } from '../window_proxy.js';
import { ModuleRegistry } from './module_registry.js';
import { getCss } from './modules.css.js';
import { getHtml } from './modules.html.js';
export const SUPPORTED_MODULE_WIDTHS = [
    { name: 'narrow', value: 312 },
    { name: 'medium', value: 360 },
    { name: 'wide', value: 728 },
];
const CONTAINER_GAP_WIDTH = 8;
const MARGIN_WIDTH = 48;
const METRIC_NAME_MODULE_DISABLED = 'NewTabPage.Modules.Disabled';
function createModuleInstances(module) {
    return module.elements.map(element => {
        return {
            element,
            descriptor: module.descriptor,
            initialized: false,
            impressed: false,
        };
    });
}
/** Container for the NTP modules. */
export class ModulesElement extends CrLitElement {
    static get is() {
        return 'ntp-modules';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            modulesShownToUser: {
                type: Boolean,
                notify: true,
            },
            moduleInstances_: { type: Array },
            disabledModules_: { type: Object },
            pendingAutoRemovedModules_: { type: Array },
            /** Data about the most recent un-doable action. */
            undoData_: { type: Object },
            /**
             * The width of the element's container. If null, the window's width is
             * used for calculating the number of modules per row and their widths.
             */
            containerWidth: { type: Number },
        };
    }
    #modulesShownToUser_accessor_storage = false;
    get modulesShownToUser() { return this.#modulesShownToUser_accessor_storage; }
    set modulesShownToUser(value) { this.#modulesShownToUser_accessor_storage = value; }
    #containerWidth_accessor_storage = null;
    get containerWidth() { return this.#containerWidth_accessor_storage; }
    set containerWidth(value) { this.#containerWidth_accessor_storage = value; }
    waitToLoadModules_ = loadTimeData.getBoolean('waitToLoadModules');
    #moduleInstances__accessor_storage = [];
    get moduleInstances_() { return this.#moduleInstances__accessor_storage; }
    set moduleInstances_(value) { this.#moduleInstances__accessor_storage = value; }
    #disabledModules__accessor_storage = { all: true, ids: [] };
    get disabledModules_() { return this.#disabledModules__accessor_storage; }
    set disabledModules_(value) { this.#disabledModules__accessor_storage = value; }
    #pendingAutoRemovedModules__accessor_storage = [];
    get pendingAutoRemovedModules_() { return this.#pendingAutoRemovedModules__accessor_storage; }
    set pendingAutoRemovedModules_(value) { this.#pendingAutoRemovedModules__accessor_storage = value; }
    #undoData__accessor_storage = null;
    get undoData_() { return this.#undoData__accessor_storage; }
    set undoData_(value) { this.#undoData__accessor_storage = value; }
    maxColumnCount_ = loadTimeData.getInteger('modulesMaxColumnCount');
    availableWidth_ = 0;
    containerMaxWidth_ = 0;
    eventTracker_ = new EventTracker();
    setDisabledModulesListenerId_ = null;
    setModulesLoadableListenerId_ = null;
    availableModulesIds_ = null;
    moduleLoadPromise_ = null;
    // TODO(crbug.com/385174675): Remove |modulesReloadable_| flag when safe.
    // Otherwise, when Microsoft modules are enabled ToT, the current
    // behavior gated by |modulesReloadable_| should become the default module
    // loading behavior.
    modulesReloadable_ = loadTimeData.getBoolean('modulesReloadable');
    connectedCallback() {
        super.connectedCallback();
        if (!loadTimeData.getBoolean('enableThreadsRail')) {
            const widths = new Set();
            for (let i = 0; i < SUPPORTED_MODULE_WIDTHS.length; i++) {
                const namedWidth = SUPPORTED_MODULE_WIDTHS[i];
                for (let u = 1; u <= this.maxColumnCount_ - i; u++) {
                    const width = (namedWidth.value * u) + (CONTAINER_GAP_WIDTH * (u - 1));
                    if (width <= this.containerMaxWidth_) {
                        widths.add(width);
                    }
                }
            }
            // Widths must be deduped and sorted to ensure the min-width and max-with
            // media features in the queries produced below are correctly generated.
            const thresholds = [...widths];
            thresholds.sort((i, j) => i - j);
            const queries = [];
            for (let i = 1; i < thresholds.length - 1; i++) {
                queries.push({
                    maxWidth: (thresholds[i + 1] - 1),
                    query: `(min-width: ${thresholds[i] + 2 * MARGIN_WIDTH}px) and (max-width: ${thresholds[i + 1] - 1 + (2 * MARGIN_WIDTH)}px)`,
                });
            }
            queries.splice(0, 0, {
                maxWidth: thresholds[0],
                query: `(max-width: ${thresholds[0] - 1 + (2 * MARGIN_WIDTH)}px)`,
            });
            queries.push({
                maxWidth: thresholds[thresholds.length - 1],
                query: `(min-width: ${thresholds[thresholds.length - 1] + (2 * MARGIN_WIDTH)}px)`,
            });
            // Produce media queries with relevant view thresholds at which module
            // instance optimal widths should be re-evaluated.
            queries.forEach(details => {
                const query = WindowProxy.getInstance().matchMedia(details.query);
                this.eventTracker_.add(query, 'change', (e) => {
                    if (e.matches) {
                        this.updateContainerAndChildrenStyles_(details.maxWidth);
                    }
                });
            });
        }
        this.eventTracker_.add(window, 'keydown', this.onWindowKeydown_.bind(this));
        this.setDisabledModulesListenerId_ =
            this.callbackRouter_.setDisabledModules.addListener((all, ids) => {
                this.disabledModules_ = { all, ids };
                // The pending auto removed modules need to be updated here to
                // reflect their current state. If not cleaned up properly, their
                // state is considered disabled for rendering purposes, and will
                // remain so until the NTP is refreshed.
                this.pendingAutoRemovedModules_ =
                    this.pendingAutoRemovedModules_.filter(id => !ids.includes(id));
            });
        this.pageHandler_.updateDisabledModules();
        this.setModulesLoadableListenerId_ =
            this.callbackRouter_.setModulesLoadable.addListener(() => {
                if (this.waitToLoadModules_) {
                    this.waitToLoadModules_ = false;
                    this.moduleLoadPromise_ = this.loadModules_();
                }
                else if (this.modulesReloadable_) {
                    this.handleModuleEnablement_(this.disabledModules_);
                }
            });
        if (this.waitToLoadModules_) {
            this.pageHandler_.updateModulesLoadable();
        }
        else {
            this.moduleLoadPromise_ = this.loadModules_();
        }
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        assert(this.setDisabledModulesListenerId_);
        this.callbackRouter_.removeListener(this.setDisabledModulesListenerId_);
        assert(this.setModulesLoadableListenerId_);
        this.callbackRouter_.removeListener(this.setModulesLoadableListenerId_);
        this.eventTracker_.removeAll();
    }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('moduleInstances_') ||
            changedProperties.has('disabledModules_')) {
            this.updateContainerAndChildrenStyles_(this.availableWidth_);
        }
    }
    firstUpdated() {
        this.style.setProperty('--container-gap', `${CONTAINER_GAP_WIDTH}px`);
        assert(SUPPORTED_MODULE_WIDTHS[0]);
        this.containerMaxWidth_ =
            this.maxColumnCount_ * SUPPORTED_MODULE_WIDTHS[0].value +
                (this.maxColumnCount_ - 1) * CONTAINER_GAP_WIDTH;
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        if (!loadTimeData.getBoolean('enableThreadsRail')) {
            this.availableWidth_ =
                this.computeAvailableWidth_(document.body.clientWidth);
        }
        else if (changedProperties.has('containerWidth') &&
            this.containerWidth !== null) {
            const availableWidth = this.computeAvailableWidth_(this.containerWidth);
            if (availableWidth !== this.availableWidth_) {
                this.availableWidth_ = availableWidth;
                this.updateContainerAndChildrenStyles_(availableWidth);
            }
        }
    }
    get pageHandler_() {
        return browserProxyFactory.getInstance().handler;
    }
    get callbackRouter_() {
        return browserProxyFactory.getInstance().callbackRouter;
    }
    moduleDisabled_(instance) {
        return this.disabledModules_.all ||
            this.disabledModules_.ids.includes(instance.descriptor.id) ||
            this.pendingAutoRemovedModules_.includes(instance.descriptor.id);
    }
    /**
     * Initializes the module container by loading all currently enabled modules.
     * This method uses the `ModuleRegistry` to determine which modules to load
     * and is called only when the container is empty.
     */
    async loadModules_() {
        const [modulesIdNamesResponse, modulesEligibleForRemovalResponse] = await Promise.all([
            this.pageHandler_.getModulesIdNames(),
            this.pageHandler_.getModulesEligibleForRemoval(),
        ]);
        const modulesIdNames = modulesIdNamesResponse.data;
        const modules = await ModuleRegistry.getInstance().initializeModulesHavingIds(modulesIdNames.map((m) => m.id), loadTimeData.getInteger('modulesLoadTimeout'));
        // We only want to remove modules that are both eligible for auto removal
        // and will currently load on the NTP. Otherwise, we postpone the auto
        // removal until the module is eligible to be loaded on the NTP.
        const modulesEligibleForRemoval = modulesEligibleForRemovalResponse.moduleIds.filter(id => modules.some(module => module.descriptor.id === id));
        if (modules.length > 0) {
            this.pageHandler_.onModulesLoadedWithData(modules.map(module => module.descriptor.id)
                .filter(id => !modulesEligibleForRemoval.includes(id)));
            this.moduleInstances_ = modules
                .map(module => {
                return createModuleInstances(module);
            })
                .flat();
            this.handleModulesAutoRemoval_(modulesEligibleForRemoval);
        }
        this.recordInitialLoadMetrics_(modules, modulesIdNames);
        this.dispatchEvent(new CustomEvent('modules-loaded', { detail: modules.length }));
    }
    recordInitialLoadMetrics_(modules, modulesIdNames) {
        recordSmallCount('NewTabPage.Modules.LoadedModulesCount', modules.length);
        modulesIdNames.forEach(({ id }) => {
            recordBoolean(`NewTabPage.Modules.EnabledOnNTPLoad.${id}`, !this.disabledModules_.all &&
                !this.disabledModules_.ids.includes(id));
        });
        recordSmallCount('NewTabPage.Modules.InstanceCount', this.moduleInstances_.length);
        recordBoolean('NewTabPage.Modules.VisibleOnNTPLoad', !this.disabledModules_.all);
        this.recordModuleLoadedWithModules_(/*onNtpLoad=*/ true);
    }
    recordModuleLoadedWithModules_(onNtpLoad) {
        const moduleDescriptorIds = [...new Set(this.moduleInstances_.map(instance => instance.descriptor.id))];
        const histogramBase = onNtpLoad ? 'NewTabPage.Modules.LoadedWith' :
            'NewTabPage.Modules.ReloadedWith';
        for (const moduleDescriptorId of moduleDescriptorIds) {
            moduleDescriptorIds.forEach(id => {
                if (id !== moduleDescriptorId) {
                    recordSparseValueWithPersistentHash(`${histogramBase}.${moduleDescriptorId}`, id);
                }
            });
        }
    }
    recordModuleAutoRemovalMetrics_(moduleIds, disabled) {
        const histogramBase = disabled ? 'NewTabPage.Modules.AutoRemoval' :
            'NewTabPage.Modules.AutoRemovalUndone';
        recordOccurrence(histogramBase);
        for (const moduleId of moduleIds) {
            recordSparseValueWithPersistentHash(`${histogramBase}ModuleId`, moduleId);
        }
    }
    /**
     * Handles the the auto-removal of stale modules, which are defined as modules
     * that have not been interacted with by the user within a certain period of
     * time. The removal is undone if the user clicks on the undo button in the
     * toast.
     *
     * Due to the asynchronous nature of module loading, it is possible for the
     * modules to be loaded before the auto-removal is processed by the browser.
     * Therefore, pending modules are added to a pending list, and removed after
     * the browser has processed the auto-removal during the `setDisabledModules`
     * callback.
     *
     * @param moduleIds - An array of module ids that have been auto-removed.
     */
    handleModulesAutoRemoval_(moduleIds) {
        if (moduleIds.length > 0) {
            const isSingleModuleRemoval = moduleIds.length === 1;
            const undoToastMessage = isSingleModuleRemoval ?
                loadTimeData.getString('moduleInactivityRemovalMsg') :
                loadTimeData.getString('modulesInactivityRemovalMsg');
            this.pendingAutoRemovedModules_ = moduleIds;
            this.pageHandler_.setModulesDisabled(moduleIds, /*disabled=*/ true, /*is_user_action=*/ false);
            this.recordModuleAutoRemovalMetrics_(moduleIds, /*disabled=*/ true);
            this.fire('modules-auto-removed', {
                message: undoToastMessage,
                undo: () => {
                    this.pageHandler_.setModulesDisabled(moduleIds, /*disabled=*/ false, /*is_user_action=*/ true);
                    this.recordModuleAutoRemovalMetrics_(moduleIds, /*disabled=*/ false);
                },
            });
        }
    }
    /**
     * Manages the reloading of modules within the container based on
     * updates to the disabled modules list.
     *
     * Subsequent calls handle potential reloads. Newly enabled modules are
     * queued and loaded individually. The user does not see these modules until
     * the entire container is reloaded after all queued modules have been loaded.
     *
     * @param disabledModules - An object containing the current list of disabled
     * module ids.
     */
    async handleModuleEnablement_(disabledModules) {
        if (this.moduleLoadPromise_) {
            await this.moduleLoadPromise_;
        }
        if (!this.availableModulesIds_) {
            const modulesIdNames = (await this.pageHandler_.getModulesIdNames()).data;
            // TODO(crbug.com/385174675): Set |this.availableModulesIds_| in
            // |this.loadModules_()| when Microsoft modules are enabled ToT, as this
            // experimental behavior is currently gated to the Microsoft modules.
            this.availableModulesIds_ = new Set(modulesIdNames.map((m) => m.id));
        }
        const disabledModuleIds = disabledModules.ids;
        const newlyEnabledModuleIds = [...this.availableModulesIds_.difference(new Set(disabledModuleIds.concat(this.moduleInstances_.map((m) => m.descriptor.id))))];
        if (newlyEnabledModuleIds.length === 0) {
            return;
        }
        // Load modules one by one until the queue is empty.
        const newModuleInstances = [];
        while (newlyEnabledModuleIds.length > 0) {
            const moduleId = newlyEnabledModuleIds.shift();
            const module = await ModuleRegistry.getInstance().initializeModuleById(moduleId, loadTimeData.getInteger('modulesLoadTimeout'));
            if (module) {
                newModuleInstances.push(...createModuleInstances(module));
            }
        }
        if (newModuleInstances.length > 0) {
            newModuleInstances.push(...this.moduleInstances_);
            const orderedIds = (await this.pageHandler_.getModulesOrder()).moduleIds;
            if (orderedIds && orderedIds.length > 0) {
                newModuleInstances.sort((a, b) => {
                    const aId = a.descriptor.id;
                    const bId = b.descriptor.id;
                    const aHasOrder = orderedIds.includes(aId);
                    const bHasOrder = orderedIds.includes(bId);
                    if (aHasOrder && bHasOrder) {
                        return orderedIds.indexOf(aId) - orderedIds.indexOf(bId);
                    }
                    return +bHasOrder - +aHasOrder;
                });
            }
            this.moduleInstances_ = newModuleInstances;
            recordSmallCount('NewTabPage.Modules.ReloadedModulesCount', this.moduleInstances_.length);
            this.recordModuleLoadedWithModules_(/*onNtpLoad=*/ false);
        }
    }
    computeAvailableWidth_(containerWidth) {
        return Math.min(containerWidth - 2 * MARGIN_WIDTH, this.containerMaxWidth_);
    }
    updateContainerAndChildrenStyles_(availableWidth) {
        const visibleModuleInstances = this.disabledModules_.all ?
            [] :
            this.moduleInstances_.filter(instance => !this.disabledModules_.ids.includes(instance.descriptor.id));
        this.modulesShownToUser = visibleModuleInstances.length !== 0;
        if (visibleModuleInstances.length === 0) {
            return;
        }
        this.style.setProperty('--container-max-width', `${availableWidth}px`);
        const clamp = (min, val, max) => Math.max(min, Math.min(val, max));
        const rowMaxInstanceCount = clamp(1, Math.floor((availableWidth + CONTAINER_GAP_WIDTH) /
            (CONTAINER_GAP_WIDTH + SUPPORTED_MODULE_WIDTHS[0].value)), this.maxColumnCount_);
        let index = 0;
        while (index < visibleModuleInstances.length) {
            const instances = visibleModuleInstances.slice(index, index + rowMaxInstanceCount);
            let namedWidth = SUPPORTED_MODULE_WIDTHS[0];
            for (let i = 1; i < SUPPORTED_MODULE_WIDTHS.length; i++) {
                const moduleWidth = SUPPORTED_MODULE_WIDTHS[i];
                assert(moduleWidth);
                if (Math.floor((availableWidth -
                    (CONTAINER_GAP_WIDTH * (instances.length - 1))) /
                    moduleWidth.value) < instances.length) {
                    break;
                }
                namedWidth = moduleWidth;
            }
            instances.slice(0, instances.length).forEach(instance => {
                // The `format` attribute is leveraged by modules whose layout should
                // change based on the available width.
                instance.element.setAttribute('format', namedWidth.name);
                instance.element.style.width = `${namedWidth.value}px`;
            });
            index += instances.length;
        }
    }
    onDisableModule_(e) {
        const moduleWrapper = e.target.parentNode;
        assert(moduleWrapper);
        const module = moduleWrapper.module;
        assert(module);
        const id = module.descriptor.id;
        const restoreCallback = e.detail.restoreCallback;
        this.undoData_ = {
            message: e.detail.message,
            undo: () => {
                if (restoreCallback) {
                    restoreCallback();
                }
                this.pageHandler_.setModulesDisabled([id], /*disabled=*/ false, /*is_user_action=*/ true);
                recordSparseValueWithPersistentHash('NewTabPage.Modules.Enabled', id);
                recordSparseValueWithPersistentHash('NewTabPage.Modules.Enabled.Toast', id);
            },
        };
        this.pageHandler_.setModulesDisabled([id], /*disabled=*/ true, /*is_user_action=*/ true);
        this.$.undoToast.show();
        recordSparseValueWithPersistentHash(METRIC_NAME_MODULE_DISABLED, id);
        recordSparseValueWithPersistentHash(`${METRIC_NAME_MODULE_DISABLED}.ModuleRequest`, id);
    }
    /**
     * @param e Event notifying a module instance was dismissed. Contains the
     *     message to show in the toast.
     */
    onDismissModuleInstance_(e) {
        const wrapper = e.target.parentNode;
        const index = Array.from(wrapper.parentNode.children).indexOf(wrapper);
        const module = this.moduleInstances_[index];
        assert(module);
        this.moduleInstances_ = this.moduleInstances_.toSpliced(index, 1);
        const restoreCallback = e.detail.restoreCallback;
        this.undoData_ = {
            message: e.detail.message,
            undo: restoreCallback ?
                () => {
                    this.moduleInstances_ =
                        this.moduleInstances_.toSpliced(index, 0, module);
                    restoreCallback();
                    recordOccurrence('NewTabPage.Modules.Restored');
                    recordOccurrence(`NewTabPage.Modules.Restored.${module.descriptor.id}`);
                } :
                undefined,
        };
        // Notify the user.
        this.$.undoToast.show();
        this.pageHandler_.onDismissModule(module.descriptor.id);
    }
    onDismissModuleElement_(e) {
        const restoreCallback = e.detail.restoreCallback;
        this.undoData_ = {
            message: e.detail.message,
            undo: restoreCallback ?
                () => {
                    restoreCallback();
                } :
                undefined,
        };
        // Notify the user.
        this.$.undoToast.show();
    }
    onUndoButtonClick_() {
        if (!this.undoData_) {
            return;
        }
        // Restore to the previous state.
        this.undoData_.undo();
        // Notify the user.
        this.$.undoToast.hide();
        this.undoData_ = null;
    }
    onWindowKeydown_(e) {
        let ctrlKeyPressed = e.ctrlKey;
        // 
        if (ctrlKeyPressed && e.key === 'z') {
            this.onUndoButtonClick_();
        }
    }
}
customElements.define(ModulesElement.is, ModulesElement);
