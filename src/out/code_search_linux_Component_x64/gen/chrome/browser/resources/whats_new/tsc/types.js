// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { ModulePosition } from './whats_new.mojom-webui.js';
export var EventType;
(function (EventType) {
    EventType["BROWSER_COMMAND"] = "browser_command";
    EventType["PAGE_LOADED"] = "page_loaded";
    EventType["MODULE_IMPRESSION"] = "module_impression";
    EventType["EXPLORE_MORE_OPEN"] = "explore_more_open";
    EventType["EXPLORE_MORE_CLOSE"] = "explore_more_close";
    EventType["SCROLL"] = "scroll";
    EventType["TIME_ON_PAGE_MS"] = "time_on_page_ms";
    EventType["GENERAL_LINK_CLICK"] = "general_link_click";
    EventType["MODULES_RENDERED"] = "modules_rendered";
    EventType["VIDEO_STARTED"] = "video_started";
    EventType["VIDEO_ENDED"] = "video_ended";
    EventType["PLAY_CLICKED"] = "play_clicked";
    EventType["PAUSE_CLICKED"] = "pause_clicked";
    EventType["RESTART_CLICKED"] = "restart_clicked";
    // Refresh metrics.
    EventType["QR_CODE_TOGGLE_OPEN"] = "qr_code_toggle_open";
    EventType["QR_CODE_TOGGLE_CLOSE"] = "qr_code_toggle_close";
    EventType["NAV_CLICK"] = "nav_click";
    EventType["FEATURE_TILE_NAVIGATION"] = "feature_tile_navigation";
    EventType["CAROUSEL_SCROLL_BUTTON_CLICK"] = "carousel_scroll_button_click";
    EventType["EXPEND_MEDIA"] = "expand_media";
    EventType["CLOSE_EXPANDED_MEDIA"] = "close_expanded_media";
    EventType["CTA_CLICK"] = "cta_click";
    EventType["NEXT_BUTTON_CLICK"] = "next_button_click";
    EventType["TIME_ON_PAGE_HEARTBEAT_MS"] = "time_on_page_heartbeat_ms";
    // Not a metric: asks Chrome to open its native QR code bubble.
    EventType["NATIVE_MOBILE_QR_OPEN"] = "native_mobile_qr_open";
})(EventType || (EventType = {}));
export var SectionType;
(function (SectionType) {
    SectionType["SPOTLIGHT"] = "spotlight";
    SectionType["EXPLORE_MORE"] = "explore_more";
})(SectionType || (SectionType = {}));
// Used to map a section and order value to the ModulePosition mojo type.
export const kModulePositionsMap = {
    [SectionType.SPOTLIGHT]: [
        ModulePosition.kSpotlight1,
        ModulePosition.kSpotlight2,
        ModulePosition.kSpotlight3,
        ModulePosition.kSpotlight4,
    ],
    [SectionType.EXPLORE_MORE]: [
        ModulePosition.kExploreMore1,
        ModulePosition.kExploreMore2,
        ModulePosition.kExploreMore3,
        ModulePosition.kExploreMore4,
        ModulePosition.kExploreMore5,
        ModulePosition.kExploreMore6,
    ],
};
