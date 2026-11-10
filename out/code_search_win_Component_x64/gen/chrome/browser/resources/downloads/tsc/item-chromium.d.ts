import './icons.html.js';
import 'chrome://resources/cr_elements/cr_action_menu/cr_action_menu.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_progress/cr_progress.js';
import 'chrome://resources/cr_elements/icons.html.js';
import 'chrome://resources/js/action_link.js';
import '/strings.m.js';
import type { CrActionMenuElement } from 'chrome://resources/cr_elements/cr_action_menu/cr_action_menu.js';
import type { CrIconButtonElement } from 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { MojomData } from './data.js';
export interface DownloadsItemElement {
    $: {
        controlledBy: HTMLElement;
        fileIcon: HTMLImageElement;
        fileLink: HTMLAnchorElement;
    };
}
declare const DownloadsItemElementBase: typeof CrLitElement & (new (...args: any[]) => import("chrome://resources/cr_elements/focus_row_mixin_lit.js").FocusRowMixinLitInterface) & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface);
export declare class DownloadsItemElement extends DownloadsItemElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        webuiRoundedIconsEnabled_: {
            type: BooleanConstructor;
        };
        data: {
            type: ObjectConstructor;
        };
        completelyOnDisk_: {
            type: BooleanConstructor;
        };
        shouldLinkFilename_: {
            type: BooleanConstructor;
        };
        isDangerous_: {
            type: BooleanConstructor;
        };
        isReviewable_: {
            type: BooleanConstructor;
        };
        pauseOrResumeText_: {
            type: StringConstructor;
        };
        showCancel_: {
            type: BooleanConstructor;
        };
        showProgress_: {
            type: BooleanConstructor;
        };
        showDeepScan_: {
            type: BooleanConstructor;
        };
        showOpenAnyway_: {
            type: BooleanConstructor;
        };
        displayType_: {
            type: NumberConstructor;
            state: boolean;
        };
        useFileIcon_: {
            type: BooleanConstructor;
        };
    };
    accessor data: MojomData | undefined;
    private browserProxy_;
    protected accessor isDangerous_: boolean;
    protected accessor isReviewable_: boolean;
    protected accessor pauseOrResumeText_: string;
    protected accessor showCancel_: boolean;
    protected accessor showProgress_: boolean;
    protected accessor showDeepScan_: boolean;
    protected accessor showOpenAnyway_: boolean;
    protected accessor useFileIcon_: boolean;
    private restoreFocusAfterCancel_;
    private accessor displayType_;
    private accessor completelyOnDisk_;
    protected accessor shouldLinkFilename_: boolean;
    protected accessor webuiRoundedIconsEnabled_: boolean;
    overrideCustomEquivalent: boolean;
    willUpdate(changedProperties: PropertyValues<this>): void;
    firstUpdated(): void;
    updated(changedProperties: PropertyValues<this>): void;
    /** Overrides FocusRowMixin. */
    getCustomEquivalent(sampleElement: HTMLElement): HTMLElement | null;
    getFileIcon(): HTMLImageElement;
    getMoreActionsButton(): CrIconButtonElement | null;
    getMoreActionsMenu(): CrActionMenuElement;
    protected computeClass_(): string;
    private computeCompletelyOnDisk_;
    private computeShouldLinkFilename_;
    protected computeHasShowInFolderLink_(): boolean;
    private computeControlledBy_;
    protected computeDate_(): string;
    protected computeDescriptionVisible_(): boolean;
    protected computeSecondLineVisible_(): boolean;
    private isSuspiciousEnterpriseApVerdict_;
    private computeDisplayType_;
    protected computeDeepScanControlText_(): string;
    protected computeSaveDangerousLabel_(): string;
    protected computeDescription_(): string;
    protected computeIconAriaHidden_(): string;
    protected computeIconAriaLabel_(): string;
    protected iconAndDescriptionColor_(): string;
    protected computeIcon_(): string;
    protected computeIconColor_(): string;
    private computeIsActive_;
    private computeIsDangerous_;
    private computeIsReviewable_;
    private computePauseOrResumeText_;
    protected computeShowRemove_(): boolean;
    protected computeRemoveStyle_(): string;
    protected computeShowControlsForDangerous_(): boolean;
    protected computeShowCancel_(): boolean;
    private computeShowProgress_;
    private computeShowDeepScan_;
    private computeShowOpenAnyway_;
    protected computeShowActionMenu_(): boolean;
    protected computeShowCopyDownloadLink_(): boolean;
    protected computeShowQuickRemove_(): boolean;
    protected computeShowQuickShow_(): boolean;
    protected computeTag_(): string;
    protected isIndeterminate_(): boolean;
    private updateControlledBy_;
    protected computeInitiatorOriginText_(): string;
    private updateUiForStateChange_;
    protected onCopyDownloadLinkClick_(e: Event): void;
    protected onMoreActionsClick_(): void;
    protected onQuickRemoveClick_(e: Event): void;
    protected onCancelClick_(): void;
    protected onDiscardDangerousClick_(e: Event): void;
    private dataId_;
    protected onDeepScanClick_(): void;
    protected onBypassDeepScanClick_(): void;
    protected onReviewDangerousClick_(): void;
    protected onOpenAnywayClick_(): void;
    protected onDragstart_(e: Event): void;
    protected onFileLinkClick_(e: Event): void;
    protected onUrlClick_(): void;
    private doPause_;
    private doResume_;
    protected onPauseOrResumeClick_(): void;
    private displayCopyToast_;
    private displayRemovedToast_;
    protected onRemoveClick_(e: Event): void;
    protected onRetryClick_(): void;
    private notifySaveDangerousClick_;
    protected onSaveDangerousClick_(): void;
    protected onShowClick_(): void;
    private restoreFocusAfterCancelIfNeeded_;
}
declare global {
    interface HTMLElementTagNameMap {
        'downloads-item': DownloadsItemElement;
    }
}
export {};
