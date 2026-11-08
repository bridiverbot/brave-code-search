import 'chrome://resources/cr_elements/cr_toast/cr_toast.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import './module_wrapper.js';
import type { CrToastElement } from 'chrome://resources/cr_elements/cr_toast/cr_toast.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PageCallbackRouter, PageHandlerInterface } from '../new_tab_page.mojom-webui.js';
import type { ModuleInstance } from './module_wrapper.js';
export interface NamedWidth {
    name: string;
    value: number;
}
export declare const SUPPORTED_MODULE_WIDTHS: NamedWidth[];
export type UndoActionEvent = CustomEvent<{
    message: string;
    restoreCallback?: () => void;
}>;
export type DismissModuleElementEvent = UndoActionEvent;
export type DismissModuleInstanceEvent = UndoActionEvent;
export type DisableModuleEvent = UndoActionEvent;
declare global {
    interface HTMLElementEventMap {
        'disable-module': DisableModuleEvent;
        'dismiss-module-instance': DismissModuleInstanceEvent;
        'dismiss-module-element': DismissModuleElementEvent;
    }
}
export interface ModulesElement {
    $: {
        container: HTMLElement;
        undoToast: CrToastElement;
        undoToastMessage: HTMLElement;
    };
}
/** Container for the NTP modules. */
export declare class ModulesElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        modulesShownToUser: {
            type: BooleanConstructor;
            notify: boolean;
        };
        moduleInstances_: {
            type: ArrayConstructor;
        };
        disabledModules_: {
            type: ObjectConstructor;
        };
        pendingAutoRemovedModules_: {
            type: ArrayConstructor;
        };
        /** Data about the most recent un-doable action. */
        undoData_: {
            type: ObjectConstructor;
        };
        /**
         * The width of the element's container. If null, the window's width is
         * used for calculating the number of modules per row and their widths.
         */
        containerWidth: {
            type: NumberConstructor;
        };
    };
    accessor modulesShownToUser: boolean;
    accessor containerWidth: number | null;
    private waitToLoadModules_;
    accessor moduleInstances_: ModuleInstance[];
    accessor disabledModules_: {
        all: boolean;
        ids: string[];
    };
    protected accessor pendingAutoRemovedModules_: string[];
    protected accessor undoData_: {
        message: string;
        undo?: () => void;
    } | null;
    private maxColumnCount_;
    private availableWidth_;
    private containerMaxWidth_;
    private eventTracker_;
    private setDisabledModulesListenerId_;
    private setModulesLoadableListenerId_;
    private availableModulesIds_;
    private moduleLoadPromise_;
    private modulesReloadable_;
    connectedCallback(): void;
    disconnectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    firstUpdated(): void;
    updated(changedProperties: PropertyValues<this>): void;
    get pageHandler_(): PageHandlerInterface;
    get callbackRouter_(): PageCallbackRouter;
    protected moduleDisabled_(instance: ModuleInstance): boolean;
    /**
     * Initializes the module container by loading all currently enabled modules.
     * This method uses the `ModuleRegistry` to determine which modules to load
     * and is called only when the container is empty.
     */
    private loadModules_;
    private recordInitialLoadMetrics_;
    private recordModuleLoadedWithModules_;
    private recordModuleAutoRemovalMetrics_;
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
    private handleModulesAutoRemoval_;
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
    private handleModuleEnablement_;
    private computeAvailableWidth_;
    private updateContainerAndChildrenStyles_;
    protected onDisableModule_(e: DisableModuleEvent): void;
    /**
     * @param e Event notifying a module instance was dismissed. Contains the
     *     message to show in the toast.
     */
    protected onDismissModuleInstance_(e: DismissModuleInstanceEvent): void;
    protected onDismissModuleElement_(e: DismissModuleElementEvent): void;
    protected onUndoButtonClick_(): void;
    private onWindowKeydown_;
}
declare global {
    interface HTMLElementTagNameMap {
        'ntp-modules': ModulesElement;
    }
}
