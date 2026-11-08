import type { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
export declare enum RestartType {
    RESTART = 0,
    RELAUNCH = 1
}
type Constructor<T> = new (...args: any[]) => T;
/**
 * A helper Mixin to channel the relaunch/restart signal to native Chrome.
 * This uses LifetimeBrowserProxy under the surface but additionally supports
 * the <relaunch-confirmation-dialog> for non ChromeOS based desktop platforms.
 */
export declare const RelaunchMixinLit: <T extends Constructor<CrLitElement>>(superClass: T) => T & Constructor<RelaunchMixinLitInterface>;
export interface RelaunchMixinLitInterface {
    shouldShowRelaunchDialog: boolean;
    onRelaunchDialogClose(event: Event): void;
    performRestart(restartType: RestartType, alwaysShowDialog?: boolean): void;
}
export {};
