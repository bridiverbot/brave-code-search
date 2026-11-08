import type { BigBuffer } from '//resources/mojo/mojo/public/mojom/base/big_buffer.mojom-webui.js';
import type { ProtoWrapper } from '//resources/mojo/mojo/public/mojom/base/proto_wrapper.mojom-webui.js';
import type { Time, TimeDelta } from '//resources/mojo/mojo/public/mojom/base/time.mojom-webui.js';
import type { BitmapN32 } from '//resources/mojo/skia/public/mojom/bitmap.mojom-webui.js';
import type { Origin } from '//resources/mojo/url/mojom/origin.mojom-webui.js';
import type { Url } from '//resources/mojo/url/mojom/url.mojom-webui.js';
import type { PageMetadata as PageMetadataMojo } from '../ai_page_content_metadata.mojom-webui.js';
import type { //
AdditionalContext as AdditionalContextMojo, //
AdditionalContextPart as AdditionalContextPartMojo, //
AnnotatedPageData as AnnotatedPageDataMojo, //
CaptureRegionResult as CaptureRegionResultMojo, //
ConversationInfo as ConversationInfoMojo, //
CounterAbuseVerdict as CounterAbuseVerdictMojo, //
CreateTabOptions as CreateTabOptionsMojo, //
FileUploadPolicyState as FileUploadPolicyStateMojo, //
FocusedTabData as FocusedTabDataMojo, //
GetPinCandidatesOptions as GetPinCandidatesOptionsMojo, //
HostCapability as HostCapabilityMojo, //
ImageBytesResult as ImageBytesResultMojo, //
ImageInfo as ImageInfoMojo, //
InvocationPayload as InvocationPayloadMojo, //
InvokeOptions as InvokeOptionsMojo, //
OpenPinnedTabPickerOptions as OpenPinnedTabPickerOptionsMojo, //
PanelOpeningData as PanelOpeningDataMojo, //
PanelState as PanelStateMojo, //
PdfDocumentData as PdfDocumentDataMojo, //
PinCandidate as PinCandidateMojo, //
PinTabsOptions as PinTabsOptionsMojo, //
Screenshot as ScreenshotMojo, //
ScreenshotCollectionOptions as ScreenshotCollectionOptionsMojo, //
SendTabToSelfDevice as SendTabToSelfDeviceMojo, //
SkillsPayload as SkillsPayloadMojo, //
TabContextOptions as TabContextOptionsMojo, //
TabContextResult as TabContextResultMojo, //
TabData as TabDataMojo, //
UnpinTabsOptions as UnpinTabsOptionsMojo, //
WebPageData as WebPageDataMojo, //
ZeroStateSuggestionsV2 as ZeroStateSuggestionsV2Mojo, //
ZssConfig as ZssConfigMojo } from '../glic.mojom-webui.js';
import { //
MicrophoneStatus as MicrophoneStatusMojo, //
PinTrigger as PinTriggerMojo, //
UnpinTrigger as UnpinTriggerMojo, //
WebClientMode as WebClientModeMojo } from '../glic.mojom-webui.js';
import type { //
AdditionalContext, //
AdditionalContextPart, //
AnnotatedPageData, //
CaptureRegionResult, //
ConversationInfo, //
CounterAbuseVerdict, //
CreateTabOptions, //
FileUploadPolicyState as FileUploadPolicyStateApi, //
FocusedTabData, //
GetPinCandidatesOptions, //
HostCapability, //
ImageBytesResult, //
ImageInfo, //
InvocationPayload, //
InvokeOptions, //
OpenPinnedTabPickerOptions, //
PageMetadata, //
PanelOpeningData, //
PanelState, //
PdfDocumentData, //
PinCandidate, //
PinTabsOptions, //
PinTrigger, //
Screenshot, //
ScreenshotCollectionOptions, //
SendTabToSelfDevice, //
SkillsPayload, //
TabContextOptions, //
TabContextResult, //
TabData, //
UnpinTabsOptions, //
UnpinTrigger, //
WebPageData, //
ZeroStateSuggestionsV2, //
ZssConfig } from '../glic_api/glic_api.js';
import { //
MicrophoneStatus, //
Platform, //
WebClientMode } from '../glic_api/glic_api.js';
import type { RgbaImage } from './request_types.js';
export declare const conversionSettings: {
    platform: Platform | undefined;
    omitFaviconInTabData: boolean;
};
export declare function replaceProperties<O, R>(original: O, replacements: R): Omit<O, keyof R> & R;
export declare function idToClient(windowId: number): string;
export declare function idToClient(windowId: number | null): string | undefined;
export declare function idFromClient(windowId: string): number;
export declare function idFromClient(windowId: string | undefined): number | null;
export declare function screenshotToClient(screenshot: ScreenshotMojo | null): Screenshot | undefined;
export declare function sendTabToSelfDeviceToClient(device: SendTabToSelfDeviceMojo): SendTabToSelfDevice;
export declare function webPageDataToClient(webPageData: WebPageDataMojo | null): WebPageData | undefined;
export declare function pdfDocumentDataToClient(pdfDocumentData: PdfDocumentDataMojo | null): PdfDocumentData | undefined;
export declare function protoWrapperToClient(protoWrapper: ProtoWrapper | null | undefined): ReadableStream<Uint8Array> | undefined;
export declare function annotatedPageDataToClient(annotatedPageData: AnnotatedPageDataMojo | null): AnnotatedPageData | undefined;
export declare function optionalToClient<T>(value: T | null): (T & {}) | undefined;
export declare function optionalFromClient<T>(value: T | undefined): (T & {}) | null;
export declare function urlToClient(url: Url): string;
export declare function urlToClient(url: Url | null): string | undefined;
export declare function urlFromClient(url: string): Url;
export declare function originToClient(origin: Origin): string;
export declare function originToClient(origin: Origin | null): string | undefined;
export declare function originToClientOpaqueAsNull(origin: Origin): string;
export declare function originToClientOpaqueAsNull(origin: Origin | null): string | undefined;
export declare function tabDataToClient(tabData: TabDataMojo): TabData;
export declare function tabDataToClient(tabData: TabDataMojo | null): TabData | undefined;
export declare function pinCandidateToClient(candidate: PinCandidateMojo): PinCandidate;
export declare const WINDOWS_TO_UNIX_EPOCH_OFFSET_US: bigint;
export declare function timeToClient(time: Time | null | undefined): Date | undefined;
export declare function focusedTabDataToClient(focusedTabData: FocusedTabDataMojo): FocusedTabData;
export declare function getArrayBufferFromBigBuffer(bigBuffer: BigBuffer): ArrayBuffer | undefined;
export declare function bitmapN32ToRGBAImage(bitmap: BitmapN32): RgbaImage | undefined;
export declare function panelOpeningDataToClient(panelOpeningData: PanelOpeningDataMojo): PanelOpeningData;
export declare function conversationInfoToClient(conversationInfo: ConversationInfoMojo): ConversationInfo;
export declare function conversationInfoFromClient(conversationInfo: ConversationInfo): ConversationInfoMojo;
export declare function counterAbuseVerdictFromClient(verdict: CounterAbuseVerdict): CounterAbuseVerdictMojo;
export declare function panelStateToClient(panelState: PanelStateMojo): PanelState;
export declare function pageMetadataToClient(metadata: PageMetadataMojo | null): PageMetadata | null;
/** Takes a time value in milliseconds and converts to a Mojo TimeDelta. */
export declare function timeDeltaFromClient(durationMs?: number): TimeDelta;
export declare function tabContextToClient(tabContext: TabContextResultMojo): TabContextResult;
export declare function tabContextOptionsFromClient(options: TabContextOptions): TabContextOptionsMojo;
export declare function getPinCandidatesOptionsFromClient(options: GetPinCandidatesOptions): GetPinCandidatesOptionsMojo;
export declare function pinTriggerToMojo(trigger: PinTrigger | undefined): PinTriggerMojo;
export declare function pinTabsOptionsToMojo(options: PinTabsOptions | undefined): PinTabsOptionsMojo | null;
export declare function unpinTriggerToMojo(trigger: UnpinTrigger | undefined): UnpinTriggerMojo;
export declare function unpinTabsOptionsToMojo(options: UnpinTabsOptions | undefined): UnpinTabsOptionsMojo | null;
export declare function openPinnedTabPickerOptionsToMojo(options: OpenPinnedTabPickerOptions | undefined): OpenPinnedTabPickerOptionsMojo | null;
export declare function createTabOptionsFromClient(options?: CreateTabOptions): CreateTabOptionsMojo;
export declare function byteArrayFromClient(buffer: ArrayBuffer): number[];
export declare function hostCapabilitiesToClient(capabilities: HostCapabilityMojo[]): HostCapability[];
export declare function webClientModeToMojo(mode: WebClientMode | undefined): WebClientModeMojo;
export declare function microphoneStatusToMojo(status: MicrophoneStatus): MicrophoneStatusMojo;
export declare function captureRegionResultToClient(result: CaptureRegionResultMojo | null): CaptureRegionResult | undefined;
export declare function zeroStateSuggestionsToClient(zeroStateSuggestions: ZeroStateSuggestionsV2Mojo): ZeroStateSuggestionsV2;
export declare function zssConfigToClient(zssConfig: ZssConfigMojo): ZssConfig;
export declare function skillsPayloadToClient(payload: SkillsPayloadMojo): SkillsPayload;
export declare function invokeOptionsToClient(options: InvokeOptionsMojo): InvokeOptions;
export declare function invocationPayloadToClient(payload: InvocationPayloadMojo): InvocationPayload;
export declare function invocationPayloadToClient(payload: InvocationPayloadMojo | null): InvocationPayload | undefined;
export declare function additionalContextToClient(context: AdditionalContextMojo): AdditionalContext;
export declare function additionalContextPartToClient(part: AdditionalContextPartMojo): AdditionalContextPart | undefined;
export declare function screenshotCollectionOptionsFromClient(options: ScreenshotCollectionOptions | undefined): ScreenshotCollectionOptionsMojo;
export declare function imageInfoToClient(info: ImageInfoMojo): ImageInfo;
export declare function imageBytesResultToClient(result: ImageBytesResultMojo): ImageBytesResult | null;
export declare function fileUploadPolicyStateToClient(state: FileUploadPolicyStateMojo): FileUploadPolicyStateApi;
