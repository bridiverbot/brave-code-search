import '//resources/cr_elements/cr_button/cr_button.js';
import '//resources/cr_elements/cr_checkbox/cr_checkbox.js';
import '//resources/cr_elements/cr_collapse/cr_collapse.js';
import '//resources/cr_elements/cr_dialog/cr_dialog.js';
import '//resources/cr_elements/cr_expand_button/cr_expand_button.js';
import '//resources/cr_elements/cr_icon/cr_icon.js';
import '//resources/cr_elements/cr_textarea/cr_textarea.js';
import '//resources/cr_elements/icons.html.js';
import type { CrDialogElement } from '//resources/cr_elements/cr_dialog/cr_dialog.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
import type { TopicFeedback, TopicsFeedbackExportDomain, TopicsFeedbackExportOptions, TopicsFeedbackExportPreview, TopicsFeedbackExportUrl } from '../context_hub.mojom-webui.js';
import type { TopicItem } from './topic_utils.js';
export interface TopicFeedbackExportDialogElement {
    $: {
        dialog: CrDialogElement;
    };
}
export declare const EXPORT_WINDOW_DAYS: readonly number[];
export declare const DEFAULT_EXPORT_WINDOW_DAYS = 5;
export declare const COVERAGE_TOPIC_COUNT = 3;
export declare const COVERAGE_TOPICS_STORAGE_KEY = "topicsFeedbackCoverageTopicIds";
export type FileDownloader = (contents: string, fileName: string) => void;
export declare function setFileDownloaderForTesting(downloader: FileDownloader | null): void;
export declare function pickCoverageTopicIds(topicIds: string[], storedIds: string[], count?: number, random?: () => number): string[];
export declare function getExportFileName(date: Date): string;
export declare function hasDetailedFeedback(feedback: TopicFeedback | undefined): boolean;
export type ExportPreviewState = 'loading' | 'loaded' | 'error';
export type ExportState = 'idle' | 'exporting' | 'done' | 'error';
export declare class TopicFeedbackExportDialogElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        topics: {
            type: ArrayConstructor;
        };
        feedbacks: {
            type: ObjectConstructor;
        };
        windowDays_: {
            type: NumberConstructor;
        };
        preview_: {
            type: ObjectConstructor;
        };
        previewState_: {
            type: StringConstructor;
        };
        domainExclusions_: {
            type: ObjectConstructor;
        };
        excludedUrls_: {
            type: ObjectConstructor;
        };
        expandedDomains_: {
            type: ObjectConstructor;
        };
        missingTopics_: {
            type: StringConstructor;
        };
        acknowledged_: {
            type: BooleanConstructor;
        };
        coverageTopicIds_: {
            type: ArrayConstructor;
        };
        exportState_: {
            type: StringConstructor;
        };
        hasDownloaded_: {
            type: BooleanConstructor;
        };
        confirmingClear_: {
            type: BooleanConstructor;
        };
    };
    accessor topics: TopicItem[];
    accessor feedbacks: Map<string, TopicFeedback>;
    protected accessor windowDays_: number;
    protected accessor preview_: TopicsFeedbackExportPreview | null;
    protected accessor previewState_: ExportPreviewState;
    protected accessor domainExclusions_: Map<string, boolean>;
    protected accessor excludedUrls_: Set<string>;
    protected accessor expandedDomains_: Set<string>;
    protected accessor missingTopics_: string;
    protected accessor acknowledged_: boolean;
    protected accessor coverageTopicIds_: string[];
    protected accessor exportState_: ExportState;
    protected accessor hasDownloaded_: boolean;
    protected accessor confirmingClear_: boolean;
    private previewRequestId_;
    connectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    showModal(): void;
    close(): void;
    private fetchPreview_;
    protected onWindowChange_(e: Event): void;
    protected getWindowLabel_(days: number): string;
    protected getStatsText_(): string;
    protected getRatingProgressText_(): string;
    private isTopicRated_;
    protected getRatedTopicCount_(): number;
    protected areAllTopicsRated_(): boolean;
    protected getCoverageTopics_(): TopicItem[];
    protected isCoverageTopicDone_(topic: TopicItem): boolean;
    protected onCoverageTopicClick_(e: Event): void;
    protected onMissingTopicsValueChanged_(e: CustomEvent<{
        value: string;
    }>): void;
    protected getDomains_(): TopicsFeedbackExportDomain[];
    protected isDomainExcluded_(domain: TopicsFeedbackExportDomain): boolean;
    protected isDomainExpanded_(domain: TopicsFeedbackExportDomain): boolean;
    protected isUrlIncluded_(domain: TopicsFeedbackExportDomain, url: TopicsFeedbackExportUrl): boolean;
    protected getExcludedUrlCount_(domain: TopicsFeedbackExportDomain): number;
    protected getDomainCountText_(domain: TopicsFeedbackExportDomain): string;
    private getDomainAt_;
    protected onDomainExpandedChanged_(e: CustomEvent<{
        value: boolean;
    }>): void;
    protected onDomainCheckedChanged_(e: CustomEvent<{
        value: boolean;
    }>): void;
    protected onUrlCheckedChanged_(e: CustomEvent<{
        value: boolean;
    }>): void;
    protected onAcknowledgeCheckedChanged_(e: CustomEvent<{
        value: boolean;
    }>): void;
    protected canDownload_(): boolean;
    getExportOptionsForTesting(): TopicsFeedbackExportOptions;
    private getExportOptions_;
    protected onDownloadClick_(): Promise<void>;
    protected getFormUrl_(): string;
    protected isFormNextStep_(): boolean;
    protected onOpenFormClick_(): void;
    protected onFormLinkClick_(e: Event): void;
    protected onClearClick_(): void;
    protected onCancelClearClick_(): void;
    protected onConfirmClearClick_(): Promise<void>;
    protected onCloseClick_(): void;
    protected onDialogClose_(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'topic-feedback-export-dialog': TopicFeedbackExportDialogElement;
    }
}
