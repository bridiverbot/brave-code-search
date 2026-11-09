// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

#ifndef CHROME_BROWSER_UI_VIEWS_TABS_FAKE_TAB_SLOT_CONTROLLER_H_
#define CHROME_BROWSER_UI_VIEWS_TABS_FAKE_TAB_SLOT_CONTROLLER_H_

#include "base/memory/raw_ptr.h"
#include "chrome/browser/ui/views/tabs/tab.h"
#include "chrome/browser/ui/views/tabs/tab_slot_controller.h"
#include "ui/base/models/list_selection_model.h"
#include "ui/base/mojom/menu_source_type.mojom-forward.h"
#include "ui/gfx/color_palette.h"

class BrowserWindowInterface;
class TabContainer;
class TabStripController;

class FakeTabSlotController : public TabSlotController {
 public:
  explicit FakeTabSlotController(
      TabStripController* tab_strip_controller_ = nullptr);
  FakeTabSlotController(const FakeTabSlotController&) = delete;
  FakeTabSlotController& operator=(const FakeTabSlotController&) = delete;
  ~FakeTabSlotController() override = default;

  void set_tab_container(TabContainer* tab_container) {
    tab_container_ = tab_container;
  }
  void set_active_tab(Tab* tab) { active_tab_ = tab; }
  void set_tab_count(int tab_count) { tab_count_ = tab_count; }
  void set_paint_throbber_to_layer(bool value) {
    paint_throbber_to_layer_ = value;
  }
  void set_is_glass(bool value) { is_glass_ = value; }

  ui::ListSelectionModel GetSelectionModel() const override;
  Tab* tab_at(int index) const override;
  void SelectTab(Tab* tab, const ui::Event& event) override {}
  void ExtendSelectionTo(Tab* tab) override {}
  void ToggleSelected(Tab* tab) override {}
  void AddSelectionFromAnchorTo(Tab* tab) override {}
  void CloseTab(Tab* tab, CloseTabSource source) override {}
  void ToggleTabAudioMute(Tab* tab) override {}
  void ShiftTabNext(Tab* tab) override {}
  void ShiftTabPrevious(Tab* tab) override {}
  void MoveTabFirst(Tab* tab) override {}
  void MoveTabLast(Tab* tab) override {}
  void ToggleTabGroupCollapsedState(
      const tab_groups::TabGroupId group,
      ToggleTabGroupCollapsedStateOrigin origin) override;
  void NotifyTabstripBubbleOpened() override {}
  void NotifyTabstripBubbleClosed() override {}

  void ShowContextMenuForTab(Tab* tab,
                             const gfx::Point& p,
                             ui::mojom::MenuSourceType source_type) override {}
  void TabKeyboardFocusChangedTo(const tabs::TabInterface* tab) override {}
  int GetTabCount() const override;
  bool IsActiveTab(const TabSlotView* tab) const override;
  bool IsTabSelected(const TabSlotView* tab) const override;
  bool IsFocusInTabStrip() const override;
  void MaybeStartDrag(TabSlotView* source,
                      const ui::LocatedEvent& event,
                      ui::ListSelectionModel original_selection) override {}
  Liveness ContinueDrag(views::View* view,
                        const ui::LocatedEvent& event) override;
  bool EndDrag(EndDragReason reason) override;
  Tab* GetTabAt(const gfx::Point& point) override;
  Tab* GetAdjacentTab(const Tab* tab, int offset) override;
  std::vector<Tab*> GetTabsInSplit(const Tab* tab) override;
  void OnMouseEventInTab(views::View* source,
                         const ui::MouseEvent& event) override {}
  void OnGroupContentsChanged(const tab_groups::TabGroupId& group) override {}
  void UpdateHoverCard(HoverCardAnchorTarget* anchor_target,
                       HoverCardUpdateType update_type) override {}
  bool HoverCardIsShowing(HoverCardAnchorTarget* anchor_target) override;
  void ShowHover(Tab* tab, TabStyle::ShowHoverStyle style) override {}
  void HideHover(Tab* tab, TabStyle::HideHoverStyle style) override {}
  int GetStrokeThickness() const override;
  bool CanPaintThrobberToLayer() const override;
  bool IsGlassFrame() const override;
  SkColor GetTabSeparatorColor() const override;
  std::u16string GetAccessibleTabName(const Tab* tab) const override;
  float GetHoverOpacityForTab(float range_parameter) const override;
  float GetHoverOpacityForRadialHighlight() const override;

  std::u16string GetGroupTitle(
      const tab_groups::TabGroupId& group) const override;
  std::u16string GetGroupContentString(
      const tab_groups::TabGroupId& group) const override;
  tab_groups::TabGroupColorId GetGroupColorId(
      const tab_groups::TabGroupId& group) const override;
  bool IsGroupCollapsed(const tab_groups::TabGroupId& group) const override;
  std::optional<tab_groups::TabGroupId> GetFocusedGroup() const override;
  void EnterFocusMode(const tab_groups::TabGroupId& group) override;
  void ExitFocusMode(std::optional<TabGroupFocusExitReason> reason) override;
  SkColor GetPaintedGroupColor(
      const tab_groups::TabGroupColorId& color_id) const override;
  void ShiftGroupLeft(const tab_groups::TabGroupId& group) override {}
  void ShiftGroupRight(const tab_groups::TabGroupId& group) override {}
  BrowserWindowInterface* GetBrowserWindowInterface() override;
  TabGroup* GetTabGroup(const tab_groups::TabGroupId& group_id) const override;

  void set_should_always_hide_close_button(bool hide) {
    should_always_hide_close_button_ = hide;
  }
  void set_can_close_tab_via_middle_button_click(bool enabled) {
    can_close_tab_via_middle_button_click_ = enabled;
  }
  bool ShouldAlwaysHideCloseButton() const override;

  bool IsVerticalTabsFloating() const override;
  bool IsVerticalTabsAnimatingButNotFinalState() const override;

  bool ShouldPaintTabAccent(const Tab* tab) const override;
  std::optional<TabAccentColors> GetTabAccentColors(
      const Tab* tab) const override;
  ui::ImageModel GetTabAccentIcon(const Tab* tab) const override;
  bool ShouldAlwaysShowMiniTabAccent() const override;
  bool CanCloseTabViaMiddleButtonClick() const override;

  int GetTreeHeight(const tree_tab::TreeTabNodeId& id) const override;
  const tabs::TreeTabNode* GetTreeTabNode(
      const tree_tab::TreeTabNodeId& id) const override;
  void SetTreeTabNodeCollapsed(const tree_tab::TreeTabNodeId& id,
                               bool collapsed) override;
  bool IsInCollapsedTreeTabNode(
      const tree_tab::TreeTabNodeId& id) const override;

  void set_tab_min_width_mode(brave_tabs::TabMinWidthMode mode) {
    tab_min_width_mode_ = mode;
  }
  void set_horizontal_scrolling_enabled(bool enabled) {
    horizontal_scrolling_enabled_ = enabled;
  }
  brave_tabs::TabMinWidthMode GetTabMinWidthMode() const override;
  bool IsHorizontalScrollingEnabled() const override;

 protected:
  bool should_always_hide_close_button_ = false;
  bool can_close_tab_via_middle_button_click_ = true;
  brave_tabs::TabMinWidthMode tab_min_width_mode_{};
  bool horizontal_scrolling_enabled_ = false;

 private:
  raw_ptr<TabStripController> tab_strip_controller_;
  raw_ptr<TabContainer, DanglingUntriaged> tab_container_;
  ui::ListSelectionModel selection_model_;
  raw_ptr<Tab, DanglingUntriaged> active_tab_ = nullptr;
  std::optional<int> tab_count_;
  bool paint_throbber_to_layer_ = true;
  bool is_glass_ = false;
};

#endif  // CHROME_BROWSER_UI_VIEWS_TABS_FAKE_TAB_SLOT_CONTROLLER_H_
