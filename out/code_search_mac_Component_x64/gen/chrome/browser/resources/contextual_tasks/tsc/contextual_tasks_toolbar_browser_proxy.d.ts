import { ContextualTasksToolbarUIObserverCallbackRouter, PageCallbackRouter } from './contextual_tasks_toolbar.mojom-webui.js';
import type { ContextualTasksToolbarUIServiceInterface, PageHandlerInterface } from './contextual_tasks_toolbar.mojom-webui.js';
export interface ToolbarBrowserProxy {
    callbackRouter: PageCallbackRouter;
    handler: PageHandlerInterface;
    toolbarUiService: ContextualTasksToolbarUIServiceInterface;
    toolbarUiObserverCallbackRouter: ContextualTasksToolbarUIObserverCallbackRouter;
}
export declare class ToolbarBrowserProxyImpl implements ToolbarBrowserProxy {
    callbackRouter: PageCallbackRouter;
    handler: PageHandlerInterface;
    toolbarUiService: ContextualTasksToolbarUIServiceInterface;
    toolbarUiObserverCallbackRouter: ContextualTasksToolbarUIObserverCallbackRouter;
    constructor();
    static getInstance(): ToolbarBrowserProxy;
    static setInstance(proxy: ToolbarBrowserProxy): void;
}
