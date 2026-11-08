// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at http://mozilla.org/MPL/2.0/.

// vector_icons.h.template is used to generate vector_icons.h. Edit the former
// rather than the latter.

#ifndef BRAVE_APP_VECTOR_ICONS_VECTOR_ICONS_H_
#define BRAVE_APP_VECTOR_ICONS_VECTOR_ICONS_H_

namespace gfx {
struct VectorIcon;
}

#define VECTOR_ICON_TEMPLATE_H(icon_name) \
extern const gfx::VectorIcon icon_name;

VECTOR_ICON_TEMPLATE_H(kBatIcon)
VECTOR_ICON_TEMPLATE_H(kBraveAdsCloseButtonIcon)
VECTOR_ICON_TEMPLATE_H(kBraveAdsDarkModeInfoButtonIcon)
VECTOR_ICON_TEMPLATE_H(kBraveAdsLightModeInfoButtonIcon)
VECTOR_ICON_TEMPLATE_H(kBraveSadIcon)
VECTOR_ICON_TEMPLATE_H(kBraveTooltipsStopwatchIcon)
VECTOR_ICON_TEMPLATE_H(kDownloadUnlockIcon)
VECTOR_ICON_TEMPLATE_H(kIncognitoProfileIcon)
VECTOR_ICON_TEMPLATE_H(kSidebarToolbarButtonIcon)
VECTOR_ICON_TEMPLATE_H(kSidebarToolbarButtonRightIcon)
VECTOR_ICON_TEMPLATE_H(kUserMenuGuestIcon)
VECTOR_ICON_TEMPLATE_H(kWebDiscoveryInfobarCloseButtonIcon)
VECTOR_ICON_TEMPLATE_H(kSidebarEditIcon)
VECTOR_ICON_TEMPLATE_H(kSidebarItemAddedCheckIcon)
VECTOR_ICON_TEMPLATE_H(kSidebarItemsDownArrowIcon)
VECTOR_ICON_TEMPLATE_H(kSidebarItemsUpArrowIcon)
VECTOR_ICON_TEMPLATE_H(kSidebarTrashIcon)
VECTOR_ICON_TEMPLATE_H(kLeoWindowTabsVerticalCollapsedIcon)
VECTOR_ICON_TEMPLATE_H(kLeoWindowTabsVerticalExpandedIcon)
VECTOR_ICON_TEMPLATE_H(kVpnIndicatorErrorIcon)
VECTOR_ICON_TEMPLATE_H(kVpnIndicatorOffIcon)
VECTOR_ICON_TEMPLATE_H(kVpnIndicatorOnIcon)
VECTOR_ICON_TEMPLATE_H(kBraveSpeedreaderGraphicBook1Icon)
VECTOR_ICON_TEMPLATE_H(kBraveSpeedreaderGraphicBook2Icon)
VECTOR_ICON_TEMPLATE_H(kBraveSpeedreaderGraphicBook3Icon)
VECTOR_ICON_TEMPLATE_H(kBraveSpeedreaderGraphicLinesIcon)
VECTOR_ICON_TEMPLATE_H(kLeoPsstIcon)

#undef VECTOR_ICON_TEMPLATE_H

#endif  // BRAVE_APP_VECTOR_ICONS_VECTOR_ICONS_H_