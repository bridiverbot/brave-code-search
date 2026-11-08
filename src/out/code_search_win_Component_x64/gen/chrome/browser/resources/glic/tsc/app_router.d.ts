export declare enum AppView {
    GLIC = 0
}
/**
 * This class manages the main view of the Glic WebUI, switching between the
 * First Run Experience (FRE) and the main GLIC application. It handles
 * the outcome of the FRE and delegates browser interactions to controllers.
 */
export declare class AppRouter {
    private glicController;
    private glicContainer;
    private browserProxy;
    private currentView;
    private currentPanelStateKind;
    private instanceId;
    constructor();
    private clientReadyStateChanged_;
    switchToView(view: AppView): void;
    private intentToShow_;
    private waitForLoad_;
    private setProfileReadyState_;
    private updatePageState_;
    private setInstanceId_;
    private updateUrl_;
    private zoom_;
    close(): void;
    reload(): void;
}
