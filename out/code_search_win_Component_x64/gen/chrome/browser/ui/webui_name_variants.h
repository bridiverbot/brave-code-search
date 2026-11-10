// Generated from generate_allowlist_from_histograms_file.py. Do not edit!

#ifndef CHROME_BROWSER_UI_WEBUI_NAME_VARIANTS_H_
#define CHROME_BROWSER_UI_WEBUI_NAME_VARIANTS_H_

#include <algorithm>
#include <string_view>

namespace views_metrics {

inline constexpr std::string_view kWebUINameAllowList[] = {
  "",
  ".AIChatPanel",
  ".BookmarksSidePanel",
  ".BraveNewsPanel",
  ".CommentsSidePanel",
  ".Compose",
  ".ContextualTasks",
  ".CookieListOptInBubblePanel",
  ".CustomizeChrome",
  ".DataSharingBubble",
  ".DefaultBrowserModal",
  ".EmailAliasesPanel",
  ".Emoji",
  ".ExtensionsWebStoreZeroStatePromo",
  ".Feed",
  ".Feedback",
  ".HistoryClustersSidePanel",
  ".HistorySidePanel",
  ".LensOverlayUntrusted",
  ".LensSidePanelUntrusted",
  ".MakoUntrusted",
  ".NewTabFooter",
  ".OmniboxEverywhere",
  ".OmniboxPopup",
  ".PerformanceSidePanel",
  ".PlaylistPanel",
  ".ReadAnythingUntrusted",
  ".ReadingList",
  ".ReloadButtonUI",
  ".RewardsPanel",
  ".ShieldsPanel",
  ".ShoppingInsightsSidePanel",
  ".TabSearch",
  ".TabsFromOtherDevicesSidePanel",
  ".TipPanel",
  ".UserEducation",
  ".VPNPanel",
  ".WalletPanel",
};

constexpr bool IsValidWebUIName(std::string_view s) {
  return std::binary_search(
    std::cbegin(kWebUINameAllowList),
    std::cend(kWebUINameAllowList),
    s);
}

}  // namespace views_metrics

#endif  // CHROME_BROWSER_UI_WEBUI_NAME_VARIANTS_H_
