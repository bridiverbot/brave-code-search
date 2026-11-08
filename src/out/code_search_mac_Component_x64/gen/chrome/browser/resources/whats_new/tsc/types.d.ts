import type { ClickInfo } from 'chrome://resources/js/browser_command.mojom-webui.js';
import { ModulePosition } from './whats_new.mojom-webui.js';
export interface DebugInfo {
    error?: string;
    environment?: 'production' | 'staging';
    autoOpened?: boolean;
    requestedVersion?: number;
    requestedEnabledFeatures?: string[];
    requestedRolledFeatures?: string[];
    renderedVersion?: string | number;
    renderedModules?: string[];
}
export declare enum EventType {
    BROWSER_COMMAND = "browser_command",
    PAGE_LOADED = "page_loaded",
    MODULE_IMPRESSION = "module_impression",
    EXPLORE_MORE_OPEN = "explore_more_open",
    EXPLORE_MORE_CLOSE = "explore_more_close",
    SCROLL = "scroll",
    TIME_ON_PAGE_MS = "time_on_page_ms",
    GENERAL_LINK_CLICK = "general_link_click",
    MODULES_RENDERED = "modules_rendered",
    VIDEO_STARTED = "video_started",
    VIDEO_ENDED = "video_ended",
    PLAY_CLICKED = "play_clicked",
    PAUSE_CLICKED = "pause_clicked",
    RESTART_CLICKED = "restart_clicked",
    QR_CODE_TOGGLE_OPEN = "qr_code_toggle_open",
    QR_CODE_TOGGLE_CLOSE = "qr_code_toggle_close",
    NAV_CLICK = "nav_click",
    FEATURE_TILE_NAVIGATION = "feature_tile_navigation",
    CAROUSEL_SCROLL_BUTTON_CLICK = "carousel_scroll_button_click",
    EXPEND_MEDIA = "expand_media",
    CLOSE_EXPANDED_MEDIA = "close_expanded_media",
    CTA_CLICK = "cta_click",
    NEXT_BUTTON_CLICK = "next_button_click",
    TIME_ON_PAGE_HEARTBEAT_MS = "time_on_page_heartbeat_ms",
    NATIVE_MOBILE_QR_OPEN = "native_mobile_qr_open"
}
export declare enum SectionType {
    SPOTLIGHT = "spotlight",
    EXPLORE_MORE = "explore_more"
}
export declare const kModulePositionsMap: Record<SectionType, ModulePosition[]>;
export interface BrowserCommand {
    event: EventType.BROWSER_COMMAND;
    commandId: number;
    clickInfo: ClickInfo;
}
interface VersionPageLoadedMetric {
    event: EventType.PAGE_LOADED;
    type: 'version';
    version: number;
    page_uid?: string;
}
interface EditionPageLoadedMetric {
    event: EventType.PAGE_LOADED;
    type: 'edition';
    version: null;
    page_uid: string;
}
interface ModuleImpressionMetric {
    event: EventType.MODULE_IMPRESSION;
    module_name?: string;
    section?: SectionType;
    order?: '1' | '2' | '3' | '4' | '5' | '6';
}
interface ExploreMoreOpenMetric {
    event: EventType.EXPLORE_MORE_OPEN;
    module_name: 'archive';
}
interface ExploreMoreCloseMetric {
    event: EventType.EXPLORE_MORE_CLOSE;
    module_name: 'archive';
}
export interface ScrollDepthMetric {
    event: EventType.SCROLL;
    percent_scrolled: '25' | '50' | '75' | '100';
}
interface TimeOnPageMetric {
    event: EventType.TIME_ON_PAGE_MS;
    time: number;
}
interface GeneralLinkClickMetric {
    event: EventType.GENERAL_LINK_CLICK;
    link_text: string;
    link_type: string;
    link_url: string;
    module_name?: string;
    section?: SectionType;
    order?: '1' | '2' | '3' | '4' | '5' | '6';
}
interface ModulesRenderedMetric {
    event: EventType.MODULES_RENDERED;
    spotlight_modules: string[];
}
interface VideoStartedMetric {
    event: EventType.VIDEO_STARTED;
    module_name?: string;
    section?: SectionType;
    order?: '1' | '2' | '3' | '4' | '5' | '6';
}
interface VideoEndedMetric {
    event: EventType.VIDEO_ENDED;
    module_name?: string;
    section?: SectionType;
    order?: '1' | '2' | '3' | '4' | '5' | '6';
}
interface PlayClickedMetric {
    event: EventType.PLAY_CLICKED;
    module_name?: string;
    section?: SectionType;
    order?: '1' | '2' | '3' | '4' | '5' | '6';
}
interface PauseClickedMetric {
    event: EventType.PAUSE_CLICKED;
    module_name?: string;
    section?: SectionType;
    order?: '1' | '2' | '3' | '4' | '5' | '6';
}
interface RestartClickedMetric {
    event: EventType.RESTART_CLICKED;
    module_name?: string;
    section?: SectionType;
    order?: '1' | '2' | '3' | '4' | '5' | '6';
}
interface QrCodeToggleOpenMetric {
    event: EventType.QR_CODE_TOGGLE_OPEN;
    module_name?: string;
}
interface QrCodeToggleCloseMetric {
    event: EventType.QR_CODE_TOGGLE_CLOSE;
    module_name?: string;
}
interface NavClickMetric {
    event: EventType.NAV_CLICK;
    module_name?: string;
    link_text: string;
    link_url: string;
    link_type: 'internal' | 'external';
}
interface FeatureTileNavigationMetric {
    event: EventType.FEATURE_TILE_NAVIGATION;
    module_name?: string;
    navigation_label: string;
    position: string;
}
interface CarouselScrollButtonClickMetric {
    event: EventType.CAROUSEL_SCROLL_BUTTON_CLICK;
    module_name?: string;
    navigation_label: string;
    position: string;
}
interface ExpandMediaMetric {
    event: EventType.EXPEND_MEDIA;
    module_name?: string;
    section: 'spotlight';
    order?: '1' | '2' | '3' | '4' | '5' | '6';
}
interface CloseExpandedMediaMetric {
    event: EventType.CLOSE_EXPANDED_MEDIA;
    module_name?: string;
    section: 'spotlight';
    order?: '1' | '2' | '3' | '4' | '5' | '6';
}
interface CtaClickMetric {
    event: EventType.CTA_CLICK;
    module_name?: string;
    section: 'spotlight';
    link_text: string;
    order?: '1' | '2' | '3' | '4' | '5' | '6';
}
interface NextButtonClickMetric {
    event: EventType.NEXT_BUTTON_CLICK;
    module_name?: string;
    section: 'spotlight';
    link_text: string;
    order?: '1' | '2' | '3' | '4' | '5' | '6';
}
interface TimeOnPageHeartbeatMetric {
    event: EventType.TIME_ON_PAGE_HEARTBEAT_MS;
    time: number;
}
export type PageLoadedMetric = VersionPageLoadedMetric | EditionPageLoadedMetric;
export type ModuleEvent = ModuleImpressionMetric | GeneralLinkClickMetric | VideoStartedMetric | VideoEndedMetric | PlayClickedMetric | PauseClickedMetric | RestartClickedMetric | ExpandMediaMetric | CloseExpandedMediaMetric;
type MetricData = PageLoadedMetric | ModuleImpressionMetric | ExploreMoreOpenMetric | ExploreMoreCloseMetric | ScrollDepthMetric | TimeOnPageMetric | GeneralLinkClickMetric | ModulesRenderedMetric | VideoStartedMetric | VideoEndedMetric | PlayClickedMetric | PauseClickedMetric | RestartClickedMetric | QrCodeToggleOpenMetric | QrCodeToggleCloseMetric | NavClickMetric | FeatureTileNavigationMetric | CarouselScrollButtonClickMetric | ExpandMediaMetric | CloseExpandedMediaMetric | CtaClickMetric | NextButtonClickMetric | TimeOnPageHeartbeatMetric;
interface NativeMobileQrOpen {
    event: EventType.NATIVE_MOBILE_QR_OPEN;
    module_name?: string;
}
export interface EventData {
    data: BrowserCommand | MetricData | NativeMobileQrOpen;
}
export {};
