export const __webpack_esm_id__ = "brave_components_brave_new_tab_ui_containers_newTab_settings_cards_tsx";
export const __webpack_esm_ids__ = ["brave_components_brave_new_tab_ui_containers_newTab_settings_cards_tsx"];
export const __webpack_esm_modules__ = {

/***/ "../../../brave/components/brave_new_tab_ui/containers/newTab/settings/cards.tsx"
/*!**************************************************************************************!*\
  !*** ./components/brave_new_tab_ui/containers/newTab/settings/cards.tsx + 3 modules ***!
  \**************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ cards)
});
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external ["//resources/brave/react.bundle.js","React"]
var react_bundle_js_React_ = __webpack_require__("react");
// EXTERNAL MODULE: ./components/brave_new_tab_ui/components/default/index.ts + 33 modules
var components_default = __webpack_require__("../../../brave/components/brave_new_tab_ui/components/default/index.ts");
;// ./components/brave_new_tab_ui/containers/newTab/settings/assets/brave-talk.png
/* harmony default export */ const brave_talk = (__webpack_require__.p + "6b99529757ea0fdcc318d97a6928ba5c.png");
;// ./components/brave_new_tab_ui/containers/newTab/settings/assets/brave-vpn.png
/* harmony default export */ const brave_vpn = (__webpack_require__.p + "c4aec2600332a02ebbd68b23e70b56e7.png");
;// ./components/brave_new_tab_ui/containers/newTab/settings/assets/braverewards.png
/* harmony default export */ const braverewards = (__webpack_require__.p + "a37a8ada9c2d64cae6d854f7b1055167.png");
// EXTERNAL MODULE: ./node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/react/toggle.js + 2 modules
var toggle = __webpack_require__("../../../brave/node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/react/toggle.js");
// EXTERNAL MODULE: ./node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/react/button.js + 1 modules
var react_button = __webpack_require__("../../../brave/node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/react/button.js");
// EXTERNAL MODULE: ./components/common/locale.ts + 1 modules
var locale = __webpack_require__("../../../brave/components/common/locale.ts");
// EXTERNAL MODULE: ./components/common/loadTimeData.js
var loadTimeData = __webpack_require__("../../../brave/components/common/loadTimeData.js");
// EXTERNAL MODULE: ./node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/react/icon.js + 1 modules
var icon = __webpack_require__("../../../brave/node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/react/icon.js");
// EXTERNAL MODULE: ./node_modules/.pnpm/styled-components@6.4.3_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/styled-components/dist/styled-components.esm.js + 7 modules
var styled_components_esm = __webpack_require__("../../../brave/node_modules/.pnpm/styled-components@6.4.3_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/styled-components/dist/styled-components.esm.js");
// EXTERNAL MODULE: ./node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/tokens/css/variables.js
var variables = __webpack_require__("../../../brave/node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/tokens/css/variables.js");
// EXTERNAL MODULE: ./components/brave_new_tab_ui/hooks/usePref.ts + 1 modules
var usePref = __webpack_require__("../../../brave/components/brave_new_tab_ui/hooks/usePref.ts");
;// ./components/brave_new_tab_ui/containers/newTab/settings/cards.tsx
// Copyright (c) 2020 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.













const StyledButton = (0,styled_components_esm["default"])((0,react_button["default"])).withConfig({ displayName: "StyledButton", componentId: "sc-tm8e1c" }) `
  margin-top: ${variables.spacing.xl};
  width: fit-content;
  ${p => p.float && (0,styled_components_esm.css) `
    float: right;
    margin-right: ${variables.spacing.m};
  `}
`;
const ToggleButton = ({ on, toggleFunc, float }) => {
    return react_bundle_js_React_.createElement(StyledButton, { onClick: toggleFunc, kind: on ? 'outline' : 'filled', float: !!float },
        react_bundle_js_React_.createElement("div", { slot: "icon-before" },
            react_bundle_js_React_.createElement(icon["default"], { name: on ? 'eye-off' : 'plus-add' })),
        (0,locale.getLocale)(on ? 'hideWidget' : 'addWidget'));
};
function CardSettings({ toggleShowBraveTalk, showBraveTalk, braveTalkSupported, toggleShowRewards, showRewards, braveRewardsSupported, toggleCards, cardsHidden }) {
    const [showBraveVPN, saveShowBraveVPN] = (0,usePref.useNewTabPref)('showBraveVPN');
    const [isBraveTalkDisabledByPolicy] = (0,usePref.useNewTabPref)('isBraveTalkDisabledByPolicy');
    return react_bundle_js_React_.createElement(components_default.StyledWidgetSettings, null,
        braveTalkSupported && !isBraveTalkDisabledByPolicy &&
            react_bundle_js_React_.createElement(components_default.FeaturedSettingsWidget, null,
                react_bundle_js_React_.createElement(components_default.StyledBannerImage, { src: brave_talk }),
                react_bundle_js_React_.createElement(components_default.StyledSettingsInfo, null,
                    react_bundle_js_React_.createElement(components_default.StyledSettingsTitle, null, (0,locale.getLocale)('braveTalkWidgetTitle')),
                    react_bundle_js_React_.createElement(components_default.StyledSettingsCopy, null, (0,locale.getLocale)('braveTalkWidgetWelcomeTitle'))),
                react_bundle_js_React_.createElement(ToggleButton, { on: showBraveTalk, toggleFunc: toggleShowBraveTalk, float: true })),
        braveRewardsSupported && react_bundle_js_React_.createElement(components_default.SettingsWidget, null,
            react_bundle_js_React_.createElement(components_default.StyledBannerImage, { src: braverewards }),
            react_bundle_js_React_.createElement(components_default.StyledSettingsInfo, null,
                react_bundle_js_React_.createElement(components_default.StyledSettingsTitle, null, (0,locale.getLocale)('braveRewardsTitle')),
                react_bundle_js_React_.createElement(components_default.StyledSettingsCopy, null, (0,locale.getLocale)('rewardsWidgetDesc'))),
            react_bundle_js_React_.createElement(ToggleButton, { on: showRewards, toggleFunc: toggleShowRewards })),
        loadTimeData.loadTimeData.getBoolean('vpnWidgetSupported') && react_bundle_js_React_.createElement(components_default.SettingsWidget, null,
            react_bundle_js_React_.createElement(components_default.StyledBannerImage, { src: brave_vpn }),
            react_bundle_js_React_.createElement(components_default.StyledSettingsInfo, null,
                react_bundle_js_React_.createElement(components_default.StyledSettingsTitle, null, (0,locale.getLocale)('braveVpnWidgetSettingTitle')),
                react_bundle_js_React_.createElement(components_default.StyledSettingsCopy, null, (0,locale.getLocale)('braveVpnWidgetSettingDesc'))),
            react_bundle_js_React_.createElement(ToggleButton, { on: showBraveVPN, toggleFunc: () => saveShowBraveVPN(!showBraveVPN) })),
        react_bundle_js_React_.createElement(components_default.FeaturedSettingsWidget, null,
            react_bundle_js_React_.createElement(components_default.ToggleCardsWrapper, null,
                react_bundle_js_React_.createElement(components_default.ToggleCardsText, null,
                    react_bundle_js_React_.createElement(components_default.ToggleCardsTitle, null, (0,locale.getLocale)('cardsToggleTitle')),
                    react_bundle_js_React_.createElement(components_default.ToggleCardsCopy, null, (0,locale.getLocale)('cardsToggleDesc'))),
                react_bundle_js_React_.createElement(components_default.ToggleCardsSwitch, null,
                    react_bundle_js_React_.createElement(toggle["default"], { size: 'small', onChange: () => toggleCards(cardsHidden), checked: !cardsHidden })))));
}
/* harmony default export */ const cards = (react_bundle_js_React_.memo(CardSettings));


/***/ }

};

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJhdmVfY29tcG9uZW50c19icmF2ZV9uZXdfdGFiX3VpX2NvbnRhaW5lcnNfbmV3VGFiX3NldHRpbmdzX2NhcmRzX3RzeC5jaHVuay5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlEQUFlLHFCQUF1Qix5Q0FBeUMsRTs7QUNBL0UsZ0RBQWUscUJBQXVCLHlDQUF5QyxFOztBQ0EvRSxtREFBZSxxQkFBdUIseUNBQXlDLEU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0EvRSw2REFBNkQ7QUFDN0Qsc0VBQXNFO0FBQ3RFLDRFQUE0RTtBQUM1RSxzREFBc0Q7QUFFeEI7QUFlTTtBQUNpQjtBQUNGO0FBQ0U7QUFDVDtBQUNBO0FBRUU7QUFDUztBQUNmO0FBQ087QUFDVTtBQUNIO0FBRXRELE1BQU0sWUFBWSxHQUFHLG9DQUFNLENBQUMsMkJBQU0sQ0FBQyx1RUFBcUI7Z0JBQ3hDLGlCQUFPLENBQUMsRUFBRTs7SUFFdEIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLDZCQUFHOztvQkFFSCxpQkFBTyxDQUFDLENBQUM7R0FDMUI7Q0FDRjtBQWFELE1BQU0sWUFBWSxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBcUQsRUFBRSxFQUFFO0lBQ3BHLE9BQU8scUNBQUMsWUFBWSxJQUFDLE9BQU8sRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxLQUFLO1FBQ3ZGLDhDQUFLLElBQUksRUFBQyxhQUFhO1lBQ3JCLHFDQUFDLGVBQUksSUFBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFVBQVUsR0FBSSxDQUN2QztRQUNMLG9CQUFTLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUM5QjtBQUNqQixDQUFDO0FBRUQsU0FBUyxZQUFZLENBQUMsRUFBRSxtQkFBbUIsRUFBRSxhQUFhLEVBQUUsa0JBQWtCLEVBQUUsaUJBQWlCLEVBQUUsV0FBVyxFQUFFLHFCQUFxQixFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQVM7SUFDdEssTUFBTSxDQUFDLFlBQVksRUFBRSxnQkFBZ0IsQ0FBQyxHQUFHLHlCQUFhLENBQUMsY0FBYyxDQUFDO0lBQ3RFLE1BQU0sQ0FBQywyQkFBMkIsQ0FBQyxHQUFHLHlCQUFhLENBQ2pELDZCQUE2QixDQUM5QjtJQUVELE9BQU8scUNBQUMsdUNBQW9CO1FBQ3pCLGtCQUFrQixJQUFJLENBQUMsMkJBQTJCO1lBQ2pELHFDQUFDLHlDQUFzQjtnQkFDdkIscUNBQUMsb0NBQWlCLElBQUMsR0FBRyxFQUFFLFVBQWUsR0FBSTtnQkFDM0MscUNBQUMscUNBQWtCO29CQUNqQixxQ0FBQyxzQ0FBbUIsUUFDakIsb0JBQVMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUNkO29CQUN0QixxQ0FBQyxxQ0FBa0IsUUFDaEIsb0JBQVMsQ0FBQyw2QkFBNkIsQ0FBQyxDQUN0QixDQUNGO2dCQUNyQixxQ0FBQyxZQUFZLElBQUMsRUFBRSxFQUFFLGFBQWEsRUFBRSxVQUFVLEVBQUUsbUJBQW1CLEVBQUUsS0FBSyxTQUFHLENBQ25EO1FBQ3hCLHFCQUFxQixJQUFJLHFDQUFDLGlDQUFjO1lBQ3ZDLHFDQUFDLG9DQUFpQixJQUFDLEdBQUcsRUFBRSxZQUFhLEdBQUk7WUFDekMscUNBQUMscUNBQWtCO2dCQUNqQixxQ0FBQyxzQ0FBbUIsUUFDakIsb0JBQVMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUNYO2dCQUN0QixxQ0FBQyxxQ0FBa0IsUUFDaEIsb0JBQVMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUNaLENBQ0Y7WUFDckIscUNBQUMsWUFBWSxJQUFDLEVBQUUsRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLGlCQUFpQixHQUFJLENBQ2pEO1FBQ2hCLHlCQUFZLENBQUMsVUFBVSxDQUFDLG9CQUFvQixDQUFDLElBQUkscUNBQUMsaUNBQWM7WUFDL0QscUNBQUMsb0NBQWlCLElBQUMsR0FBRyxFQUFFLFNBQWMsR0FBSTtZQUMxQyxxQ0FBQyxxQ0FBa0I7Z0JBQ2pCLHFDQUFDLHNDQUFtQixRQUNqQixvQkFBUyxDQUFDLDRCQUE0QixDQUFDLENBQ3BCO2dCQUN0QixxQ0FBQyxxQ0FBa0IsUUFDaEIsb0JBQVMsQ0FBQywyQkFBMkIsQ0FBQyxDQUNwQixDQUNGO1lBQ3JCLHFDQUFDLFlBQVksSUFBQyxFQUFFLEVBQUUsWUFBYSxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLFlBQVksQ0FBQyxHQUFJLENBQ3ZFO1FBQ2pCLHFDQUFDLHlDQUFzQjtZQUNyQixxQ0FBQyxxQ0FBa0I7Z0JBQ2pCLHFDQUFDLGtDQUFlO29CQUNkLHFDQUFDLG1DQUFnQixRQUNkLG9CQUFTLENBQUMsa0JBQWtCLENBQUMsQ0FDYjtvQkFDbkIscUNBQUMsa0NBQWUsUUFDYixvQkFBUyxDQUFDLGlCQUFpQixDQUFDLENBQ2IsQ0FDRjtnQkFDbEIscUNBQUMsb0NBQWlCO29CQUNoQixxQ0FBQyxpQkFBTSxJQUNMLElBQUksRUFBQyxPQUFPLEVBQ1osUUFBUSxFQUFFLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsRUFDeEMsT0FBTyxFQUFFLENBQUMsV0FBVyxHQUNyQixDQUNnQixDQUNELENBQ0UsQ0FDSjtBQUN6QixDQUFDO0FBRUQsNENBQWUsMkJBQVUsQ0FBQyxZQUFZLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9icmF2ZS1jb3JlLy4vY29tcG9uZW50cy9icmF2ZV9uZXdfdGFiX3VpL2NvbnRhaW5lcnMvbmV3VGFiL3NldHRpbmdzL2Fzc2V0cy9icmF2ZS10YWxrLnBuZyIsIndlYnBhY2s6Ly9icmF2ZS1jb3JlLy4vY29tcG9uZW50cy9icmF2ZV9uZXdfdGFiX3VpL2NvbnRhaW5lcnMvbmV3VGFiL3NldHRpbmdzL2Fzc2V0cy9icmF2ZS12cG4ucG5nIiwid2VicGFjazovL2JyYXZlLWNvcmUvLi9jb21wb25lbnRzL2JyYXZlX25ld190YWJfdWkvY29udGFpbmVycy9uZXdUYWIvc2V0dGluZ3MvYXNzZXRzL2JyYXZlcmV3YXJkcy5wbmciLCJ3ZWJwYWNrOi8vYnJhdmUtY29yZS8uL2NvbXBvbmVudHMvYnJhdmVfbmV3X3RhYl91aS9jb250YWluZXJzL25ld1RhYi9zZXR0aW5ncy9jYXJkcy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjZiOTk1Mjk3NTdlYTBmZGNjMzE4ZDk3YTY5MjhiYTVjLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJjNGFlYzI2MDAzMzJhMDJlYmJkNjhiMjNlNzBiNTZlNy5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYTM3YThhZGE5YzJkNjRjYWU2ZDg1NGY3YjEwNTUxNjcucG5nXCI7IiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFRoZSBCcmF2ZSBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuLy8gTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBmaWxlLFxuLy8gWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHBzOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uXG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQge1xuICBGZWF0dXJlZFNldHRpbmdzV2lkZ2V0LFxuICBTdHlsZWRCYW5uZXJJbWFnZSxcbiAgU3R5bGVkU2V0dGluZ3NJbmZvLFxuICBTdHlsZWRTZXR0aW5nc1RpdGxlLFxuICBTdHlsZWRTZXR0aW5nc0NvcHksXG4gIFNldHRpbmdzV2lkZ2V0LFxuICBTdHlsZWRXaWRnZXRTZXR0aW5ncyxcbiAgVG9nZ2xlQ2FyZHNXcmFwcGVyLFxuICBUb2dnbGVDYXJkc1RpdGxlLFxuICBUb2dnbGVDYXJkc0NvcHksXG4gIFRvZ2dsZUNhcmRzU3dpdGNoLFxuICBUb2dnbGVDYXJkc1RleHRcbn0gZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9kZWZhdWx0J1xuaW1wb3J0IGJyYXZlVGFsa0Jhbm5lciBmcm9tICcuL2Fzc2V0cy9icmF2ZS10YWxrLnBuZydcbmltcG9ydCBicmF2ZVZQTkJhbm5lciBmcm9tICcuL2Fzc2V0cy9icmF2ZS12cG4ucG5nJ1xuaW1wb3J0IHJld2FyZHNCYW5uZXIgZnJvbSAnLi9hc3NldHMvYnJhdmVyZXdhcmRzLnBuZydcbmltcG9ydCBUb2dnbGUgZnJvbSAnQGJyYXZlL2xlby9yZWFjdC90b2dnbGUnXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BicmF2ZS9sZW8vcmVhY3QvYnV0dG9uJ1xuXG5pbXBvcnQgeyBnZXRMb2NhbGUgfSBmcm9tICckd2ViLWNvbW1vbi9sb2NhbGUnXG5pbXBvcnQgeyBsb2FkVGltZURhdGEgfSBmcm9tICckd2ViLWNvbW1vbi9sb2FkVGltZURhdGEnXG5pbXBvcnQgSWNvbiBmcm9tICdAYnJhdmUvbGVvL3JlYWN0L2ljb24nXG5pbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgc3BhY2luZyB9IGZyb20gJ0BicmF2ZS9sZW8vdG9rZW5zL2Nzcy92YXJpYWJsZXMnXG5pbXBvcnQgeyB1c2VOZXdUYWJQcmVmIH0gZnJvbSAnLi4vLi4vLi4vaG9va3MvdXNlUHJlZidcblxuY29uc3QgU3R5bGVkQnV0dG9uID0gc3R5bGVkKEJ1dHRvbikgPHsgZmxvYXQ6IGJvb2xlYW4gfT5gXG4gIG1hcmdpbi10b3A6ICR7c3BhY2luZy54bH07XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgJHtwID0+IHAuZmxvYXQgJiYgY3NzYFxuICAgIGZsb2F0OiByaWdodDtcbiAgICBtYXJnaW4tcmlnaHQ6ICR7c3BhY2luZy5tfTtcbiAgYH1cbmBcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgdG9nZ2xlU2hvd0JyYXZlVGFsazogKCkgPT4gdm9pZFxuICBzaG93QnJhdmVUYWxrOiBib29sZWFuXG4gIGJyYXZlVGFsa1N1cHBvcnRlZDogYm9vbGVhblxuICB0b2dnbGVTaG93UmV3YXJkczogKCkgPT4gdm9pZFxuICBzaG93UmV3YXJkczogYm9vbGVhblxuICBicmF2ZVJld2FyZHNTdXBwb3J0ZWQ6IGJvb2xlYW5cbiAgdG9nZ2xlQ2FyZHM6IChzaG93OiBib29sZWFuKSA9PiB2b2lkXG4gIGNhcmRzSGlkZGVuOiBib29sZWFuXG59XG5cbmNvbnN0IFRvZ2dsZUJ1dHRvbiA9ICh7IG9uLCB0b2dnbGVGdW5jLCBmbG9hdCB9OiB7IG9uOiBib29sZWFuLCB0b2dnbGVGdW5jOiBhbnksIGZsb2F0PzogYm9vbGVhbiB9KSA9PiB7XG4gIHJldHVybiA8U3R5bGVkQnV0dG9uIG9uQ2xpY2s9e3RvZ2dsZUZ1bmN9IGtpbmQ9e29uID8gJ291dGxpbmUnIDogJ2ZpbGxlZCd9IGZsb2F0PXshIWZsb2F0fT5cbiAgICA8ZGl2IHNsb3Q9XCJpY29uLWJlZm9yZVwiPlxuICAgICAgPEljb24gbmFtZT17b24gPyAnZXllLW9mZicgOiAncGx1cy1hZGQnfSAvPlxuICAgIDwvZGl2PlxuICAgIHtnZXRMb2NhbGUob24gPyAnaGlkZVdpZGdldCcgOiAnYWRkV2lkZ2V0Jyl9XG4gIDwvU3R5bGVkQnV0dG9uPlxufVxuXG5mdW5jdGlvbiBDYXJkU2V0dGluZ3MoeyB0b2dnbGVTaG93QnJhdmVUYWxrLCBzaG93QnJhdmVUYWxrLCBicmF2ZVRhbGtTdXBwb3J0ZWQsIHRvZ2dsZVNob3dSZXdhcmRzLCBzaG93UmV3YXJkcywgYnJhdmVSZXdhcmRzU3VwcG9ydGVkLCB0b2dnbGVDYXJkcywgY2FyZHNIaWRkZW4gfTogUHJvcHMpIHtcbiAgY29uc3QgW3Nob3dCcmF2ZVZQTiwgc2F2ZVNob3dCcmF2ZVZQTl0gPSB1c2VOZXdUYWJQcmVmKCdzaG93QnJhdmVWUE4nKVxuICBjb25zdCBbaXNCcmF2ZVRhbGtEaXNhYmxlZEJ5UG9saWN5XSA9IHVzZU5ld1RhYlByZWYoXG4gICAgJ2lzQnJhdmVUYWxrRGlzYWJsZWRCeVBvbGljeSdcbiAgKVxuXG4gIHJldHVybiA8U3R5bGVkV2lkZ2V0U2V0dGluZ3M+XG4gICAge2JyYXZlVGFsa1N1cHBvcnRlZCAmJiAhaXNCcmF2ZVRhbGtEaXNhYmxlZEJ5UG9saWN5ICYmXG4gICAgICA8RmVhdHVyZWRTZXR0aW5nc1dpZGdldD5cbiAgICAgIDxTdHlsZWRCYW5uZXJJbWFnZSBzcmM9e2JyYXZlVGFsa0Jhbm5lcn0gLz5cbiAgICAgIDxTdHlsZWRTZXR0aW5nc0luZm8+XG4gICAgICAgIDxTdHlsZWRTZXR0aW5nc1RpdGxlPlxuICAgICAgICAgIHtnZXRMb2NhbGUoJ2JyYXZlVGFsa1dpZGdldFRpdGxlJyl9XG4gICAgICAgIDwvU3R5bGVkU2V0dGluZ3NUaXRsZT5cbiAgICAgICAgPFN0eWxlZFNldHRpbmdzQ29weT5cbiAgICAgICAgICB7Z2V0TG9jYWxlKCdicmF2ZVRhbGtXaWRnZXRXZWxjb21lVGl0bGUnKX1cbiAgICAgICAgPC9TdHlsZWRTZXR0aW5nc0NvcHk+XG4gICAgICA8L1N0eWxlZFNldHRpbmdzSW5mbz5cbiAgICAgIDxUb2dnbGVCdXR0b24gb249e3Nob3dCcmF2ZVRhbGt9IHRvZ2dsZUZ1bmM9e3RvZ2dsZVNob3dCcmF2ZVRhbGt9IGZsb2F0IC8+XG4gICAgPC9GZWF0dXJlZFNldHRpbmdzV2lkZ2V0Pn1cbiAgICB7YnJhdmVSZXdhcmRzU3VwcG9ydGVkICYmIDxTZXR0aW5nc1dpZGdldD5cbiAgICAgIDxTdHlsZWRCYW5uZXJJbWFnZSBzcmM9e3Jld2FyZHNCYW5uZXJ9IC8+XG4gICAgICA8U3R5bGVkU2V0dGluZ3NJbmZvPlxuICAgICAgICA8U3R5bGVkU2V0dGluZ3NUaXRsZT5cbiAgICAgICAgICB7Z2V0TG9jYWxlKCdicmF2ZVJld2FyZHNUaXRsZScpfVxuICAgICAgICA8L1N0eWxlZFNldHRpbmdzVGl0bGU+XG4gICAgICAgIDxTdHlsZWRTZXR0aW5nc0NvcHk+XG4gICAgICAgICAge2dldExvY2FsZSgncmV3YXJkc1dpZGdldERlc2MnKX1cbiAgICAgICAgPC9TdHlsZWRTZXR0aW5nc0NvcHk+XG4gICAgICA8L1N0eWxlZFNldHRpbmdzSW5mbz5cbiAgICAgIDxUb2dnbGVCdXR0b24gb249e3Nob3dSZXdhcmRzfSB0b2dnbGVGdW5jPXt0b2dnbGVTaG93UmV3YXJkc30gLz5cbiAgICA8L1NldHRpbmdzV2lkZ2V0Pn1cbiAgICB7bG9hZFRpbWVEYXRhLmdldEJvb2xlYW4oJ3ZwbldpZGdldFN1cHBvcnRlZCcpICYmIDxTZXR0aW5nc1dpZGdldD5cbiAgICAgIDxTdHlsZWRCYW5uZXJJbWFnZSBzcmM9e2JyYXZlVlBOQmFubmVyfSAvPlxuICAgICAgPFN0eWxlZFNldHRpbmdzSW5mbz5cbiAgICAgICAgPFN0eWxlZFNldHRpbmdzVGl0bGU+XG4gICAgICAgICAge2dldExvY2FsZSgnYnJhdmVWcG5XaWRnZXRTZXR0aW5nVGl0bGUnKX1cbiAgICAgICAgPC9TdHlsZWRTZXR0aW5nc1RpdGxlPlxuICAgICAgICA8U3R5bGVkU2V0dGluZ3NDb3B5PlxuICAgICAgICAgIHtnZXRMb2NhbGUoJ2JyYXZlVnBuV2lkZ2V0U2V0dGluZ0Rlc2MnKX1cbiAgICAgICAgPC9TdHlsZWRTZXR0aW5nc0NvcHk+XG4gICAgICA8L1N0eWxlZFNldHRpbmdzSW5mbz5cbiAgICAgIDxUb2dnbGVCdXR0b24gb249e3Nob3dCcmF2ZVZQTiF9IHRvZ2dsZUZ1bmM9eygpID0+IHNhdmVTaG93QnJhdmVWUE4oIXNob3dCcmF2ZVZQTil9IC8+XG4gICAgPC9TZXR0aW5nc1dpZGdldD59XG4gICAgPEZlYXR1cmVkU2V0dGluZ3NXaWRnZXQ+XG4gICAgICA8VG9nZ2xlQ2FyZHNXcmFwcGVyPlxuICAgICAgICA8VG9nZ2xlQ2FyZHNUZXh0PlxuICAgICAgICAgIDxUb2dnbGVDYXJkc1RpdGxlPlxuICAgICAgICAgICAge2dldExvY2FsZSgnY2FyZHNUb2dnbGVUaXRsZScpfVxuICAgICAgICAgIDwvVG9nZ2xlQ2FyZHNUaXRsZT5cbiAgICAgICAgICA8VG9nZ2xlQ2FyZHNDb3B5PlxuICAgICAgICAgICAge2dldExvY2FsZSgnY2FyZHNUb2dnbGVEZXNjJyl9XG4gICAgICAgICAgPC9Ub2dnbGVDYXJkc0NvcHk+XG4gICAgICAgIDwvVG9nZ2xlQ2FyZHNUZXh0PlxuICAgICAgICA8VG9nZ2xlQ2FyZHNTd2l0Y2g+XG4gICAgICAgICAgPFRvZ2dsZVxuICAgICAgICAgICAgc2l6ZT0nc21hbGwnXG4gICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gdG9nZ2xlQ2FyZHMoY2FyZHNIaWRkZW4pfVxuICAgICAgICAgICAgY2hlY2tlZD17IWNhcmRzSGlkZGVufVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvVG9nZ2xlQ2FyZHNTd2l0Y2g+XG4gICAgICA8L1RvZ2dsZUNhcmRzV3JhcHBlcj5cbiAgICA8L0ZlYXR1cmVkU2V0dGluZ3NXaWRnZXQ+XG4gIDwvU3R5bGVkV2lkZ2V0U2V0dGluZ3M+XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oQ2FyZFNldHRpbmdzKVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9