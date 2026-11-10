export const __webpack_esm_id__ = "brave_components_brave_welcome_ui_components_select-profile_index_tsx";
export const __webpack_esm_ids__ = ["brave_components_brave_welcome_ui_components_select-profile_index_tsx"];
export const __webpack_esm_modules__ = {

/***/ "../../../brave/components/brave_welcome_ui/components/select-profile/index.tsx"
/*!*************************************************************************************!*\
  !*** ./components/brave_welcome_ui/components/select-profile/index.tsx + 3 modules ***!
  \*************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ select_profile)
});
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external ["//resources/brave/react.bundle.js","React"]
var react_bundle_js_React_ = __webpack_require__("react");
// EXTERNAL MODULE: ./node_modules/.pnpm/styled-components@6.4.3_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/styled-components/dist/styled-components.esm.js + 7 modules
var styled_components_esm = __webpack_require__("../../../brave/node_modules/.pnpm/styled-components@6.4.3_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/styled-components/dist/styled-components.esm.js");
;// ./components/brave_welcome_ui/components/select-profile/style.ts
// Copyright (c) 2022 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// you can obtain one at https://mozilla.org/MPL/2.0/.

const MainBox = styled_components_esm["default"].div.withConfig({ displayName: "MainBox", componentId: "sc-1f8zgcn" }) `
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(15px);
  border-radius: 30px;
  max-width: 800px;
  color: white;
  font-family: ${(p) => p.theme.fontFamily.heading};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .view-header-box {
    display: grid;
    grid-template-columns: 0.2fr 1fr 0.2fr;
    padding: 40px;
    margin-bottom: 50px;
    text-align: center;
  }

  .view-details {
    grid-column: 2;
  }

  .view-title {
    font-weight: 600;
    font-size: 36px;
    margin: 0 0 18px 0;
  }

  .view-desc {
    font-weight: 400;
    font-size: 16px;
    margin: 0;
  }

  .view-header-actions {
    grid-column: 1;
    padding-top: 10px;
  }

  .back-button {
    background: transparent;
    font-size: 16px;
    line-height: 20px;
    border: none;
    display: flex;
    align-items: center;
    gap: 15px;

    svg {
      width: 22px;
      height: auto;
    }
  }
`;
const ProfileListBox = styled_components_esm["default"].div.withConfig({ displayName: "ProfileListBox", componentId: "sc-1dti73c" }) `
  color: #212529;
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 55px;

  p {
    margin: 0;
  }

  .profile-list {
    background: white;
    min-width: 520px;
    max-height: 420px;
    padding-bottom: 20px;
    border-radius: 16px;
    overflow-y: auto;
  }

  .list-actions {
    padding: 20px 32px;
    display: flex;
    justify-content: flex-end;
    background: white;
    position: sticky;
    top: 0;

    button {
      box-shadow: none;
      color: #4C54D2;
      background: transparent;
      border: 0;
      padding: 0;
    }
  }

  .item-box {
    background: transparent;

    &:hover {
      background: #F8F9FA;
    }
  }

  .item-grid {
    display: grid;
    grid-template-columns: 1fr 25px;
    padding: 10px 32px;
    align-items: center;
  }

  .item-info {
    display: flex;
    align-items: center;
    grid-gap: 15px;
  }

  .item-action {
    text-align: right;
  }

  .avatar {
    width: 48px;
    height: 48px;
    border-radius: 48px;

    svg {
      width: 100%;
      height: auto;
    }
  }

  input[type="checkbox"] {
    width: 22px;
    height: 22px;
    border-radius: 4px;
    border: 1px solid #AEB1C2;

    &:checked {
      accent-color: #4C54D2;
    }
  }
`;
const ActionBox = styled_components_esm["default"].div.withConfig({ displayName: "ActionBox", componentId: "sc-1squgbc" }) `
  display: flex;
  grid-gap: 10px;
  margin-bottom: 40px;
`;

// EXTERNAL MODULE: ./node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/react/button.js + 19 modules
var react_button = __webpack_require__("../../../brave/node_modules/.pnpm/@brave+leo@https+++codeload.github.com+brave+leo+tar.gz+c5f9c8f78f3df5b767a83ad67babd8b_0c65dd22e2a77818c131377d53e2e843/node_modules/@brave/leo/react/button.js");
;// ./components/brave_welcome_ui/components/svg/left-arrow.tsx
// Copyright (c) 2021 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// you can obtain one at https://mozilla.org/MPL/2.0/.

const SvgComponent = (props) => (react_bundle_js_React_.createElement("svg", { viewBox: "0 0 22 18", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props },
    react_bundle_js_React_.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M2.971 8.083h18.112a.917.917 0 1 1 0 1.834H2.971l6.222 5.743a.917.917 0 0 1 .052 1.295.917.917 0 0 1-1.295.052L.49 10.123a1.528 1.528 0 0 1 0-2.246L7.95.993A.917.917 0 0 1 9.194 2.34L2.971 8.083Z", fill: "#F0F2FF" })));
/* harmony default export */ const left_arrow = (SvgComponent);

;// ./components/brave_welcome_ui/components/svg/avatar-icon.tsx
// Copyright (c) 2021 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// you can obtain one at https://mozilla.org/MPL/2.0/.

const backgroundFills = ['#DFE1E5',
    '#B7DEFF', '#F5C5E2', '#CCC5F5', '#C5F5DB', '#E9F5C5'];
const AvatarIcon = (props) => {
    const bgFill = react_bundle_js_React_.useMemo(() => {
        return backgroundFills[Math.round(Math.random() * (backgroundFills.length - 1))];
    }, []);
    return (react_bundle_js_React_.createElement("svg", { viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props },
        react_bundle_js_React_.createElement("circle", { cx: 24, cy: 24, r: 24, fill: bgFill }),
        react_bundle_js_React_.createElement("ellipse", { cx: 24, cy: 33, rx: 11, ry: 7, fill: "#5F6372" }),
        react_bundle_js_React_.createElement("circle", { cx: 24, cy: 19, r: 5, fill: "#5F6372" })));
};
/* harmony default export */ const avatar_icon = (AvatarIcon);

// EXTERNAL MODULE: ./components/brave_welcome_ui/state/context.ts
var context = __webpack_require__("../../../brave/components/brave_welcome_ui/state/context.ts");
// EXTERNAL MODULE: ./components/brave_welcome_ui/state/hooks.ts
var hooks = __webpack_require__("../../../brave/components/brave_welcome_ui/state/hooks.ts");
// EXTERNAL MODULE: ./components/brave_welcome_ui/api/welcome_browser_proxy.ts + 2 modules
var welcome_browser_proxy = __webpack_require__("../../../brave/components/brave_welcome_ui/api/welcome_browser_proxy.ts");
// EXTERNAL MODULE: ./components/common/locale.ts + 1 modules
var locale = __webpack_require__("../../../brave/components/common/locale.ts");
// EXTERNAL MODULE: external "chrome://resources/js/cr.js"
var cr_js_ = __webpack_require__("chrome://resources/js/cr.js");
;// ./components/brave_welcome_ui/components/select-profile/index.tsx
// Copyright (c) 2022 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// you can obtain one at https://mozilla.org/MPL/2.0/.










function ProfileItem(props) {
    return (react_bundle_js_React_.createElement("div", { className: "item-box" },
        react_bundle_js_React_.createElement("label", { className: "item-grid" },
            react_bundle_js_React_.createElement("div", { className: "item-info" },
                react_bundle_js_React_.createElement("div", { className: "avatar" },
                    react_bundle_js_React_.createElement(avatar_icon, null)),
                react_bundle_js_React_.createElement("span", null, props.profileName)),
            react_bundle_js_React_.createElement("div", { className: "item-action" },
                react_bundle_js_React_.createElement("input", { type: "checkbox", id: `profile-${props.id}`, checked: props.isChecked, onChange: props.onChange })))));
}
function SelectProfile() {
    const { viewType, setViewType, incrementCount, currentSelectedBrowserProfiles } = react_bundle_js_React_.useContext(context["default"]);
    const [selectedProfiles, setSelectedProfiles] = react_bundle_js_React_.useState(new Set());
    const { back } = (0,hooks.useViewTypeTransition)(viewType);
    const handleBackButton = () => setViewType(back);
    const [importStatus, setImportStatus] = react_bundle_js_React_.useState(welcome_browser_proxy.ImportDataStatus.INITIAL);
    const isImportInProgress = () => {
        return importStatus === welcome_browser_proxy.ImportDataStatus.IN_PROGRESS;
    };
    react_bundle_js_React_.useEffect(() => {
        (0,cr_js_.addWebUiListener)('import-data-status-changed', (status) => {
            switch (status) {
                case 'inProgress':
                    setImportStatus(welcome_browser_proxy.ImportDataStatus.IN_PROGRESS);
                    break;
                case 'failed':
                    setImportStatus(welcome_browser_proxy.ImportDataStatus.FAILED);
                    break;
                case 'succeeded':
                    setImportStatus(welcome_browser_proxy.ImportDataStatus.SUCCEEDED);
                    break;
                default:
                    setImportStatus(welcome_browser_proxy.ImportDataStatus.INITIAL);
                    break;
            }
        });
    }, []);
    const handleChange = (e) => {
        const { id, checked } = e.target;
        const parsedId = parseInt(id.split('-')[1]);
        if (!checked && (selectedProfiles === null || selectedProfiles === void 0 ? void 0 : selectedProfiles.has(parsedId))) {
            selectedProfiles.delete(parsedId);
            setSelectedProfiles(new Set([...selectedProfiles]));
            return;
        }
        setSelectedProfiles(new Set(selectedProfiles.add(parsedId)));
    };
    const selectAll = () => {
        setSelectedProfiles(new Set(currentSelectedBrowserProfiles === null || currentSelectedBrowserProfiles === void 0 ? void 0 : currentSelectedBrowserProfiles.map((profile) => profile.index)));
    };
    const handleImportProfiles = () => {
        if (selectedProfiles.size <= 0)
            return;
        let entries = [];
        selectedProfiles.forEach((entry) => {
            entries.push(entry);
            incrementCount();
        });
        if (entries.length === 1) {
            welcome_browser_proxy.ImportDataBrowserProxyImpl.getInstance().importData(entries[0], welcome_browser_proxy.defaultImportTypes);
        }
        else {
            welcome_browser_proxy.ImportDataBrowserProxyImpl.getInstance().importDataBulk(entries, welcome_browser_proxy.defaultImportTypes);
        }
        welcome_browser_proxy.WelcomeBrowserProxyImpl.getInstance().recordP3A(welcome_browser_proxy.P3APhase.Consent);
    };
    const getImportEntryName = (entry) => {
        let name = entry.name;
        if (entry.profileName) {
            name += ' - ' + entry.profileName;
        }
        return name;
    };
    return (react_bundle_js_React_.createElement(MainBox, null,
        react_bundle_js_React_.createElement("div", { className: "view-header-box" },
            react_bundle_js_React_.createElement("div", { className: "view-header-actions" },
                react_bundle_js_React_.createElement("button", { className: "back-button", onClick: handleBackButton },
                    react_bundle_js_React_.createElement(left_arrow, null),
                    react_bundle_js_React_.createElement("span", null, (0,locale.getLocale)('braveWelcomeBackButtonLabel')))),
            react_bundle_js_React_.createElement("div", { className: "view-details" },
                react_bundle_js_React_.createElement("h1", { className: "view-title" }, (0,locale.getLocale)('braveWelcomeSelectProfileLabel')),
                react_bundle_js_React_.createElement("p", { className: "view-desc" }, (0,locale.getLocale)('braveWelcomeSelectProfileDesc')))),
        react_bundle_js_React_.createElement(ProfileListBox, null,
            react_bundle_js_React_.createElement("div", { className: "profile-list" },
                react_bundle_js_React_.createElement("div", { className: "list-actions" },
                    react_bundle_js_React_.createElement("div", { className: "right" },
                        react_bundle_js_React_.createElement("button", { onClick: selectAll }, (0,locale.getLocale)('braveWelcomeSelectAllButtonLabel')))), currentSelectedBrowserProfiles === null || currentSelectedBrowserProfiles === void 0 ? void 0 :
                currentSelectedBrowserProfiles.map((entry) => {
                    return (react_bundle_js_React_.createElement(ProfileItem, { key: entry.index, id: entry.index, profileName: getImportEntryName(entry), onChange: handleChange, isChecked: selectedProfiles.has(entry.index) }));
                }))),
        react_bundle_js_React_.createElement(ActionBox, null,
            react_bundle_js_React_.createElement(react_button["default"], { kind: "filled", onClick: handleImportProfiles, isDisabled: selectedProfiles.size === 0 || isImportInProgress(), size: "large" }, (0,locale.getLocale)('braveWelcomeImportProfilesButtonLabel')))));
}
/* harmony default export */ const select_profile = (SelectProfile);


/***/ }

};

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJhdmVfY29tcG9uZW50c19icmF2ZV93ZWxjb21lX3VpX2NvbXBvbmVudHNfc2VsZWN0LXByb2ZpbGVfaW5kZXhfdHN4LmNodW5rLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkRBQTZEO0FBQzdELHNFQUFzRTtBQUN0RSw0RUFBNEU7QUFDNUUsc0RBQXNEO0FBRWhCO0FBRS9CLE1BQU0sT0FBTyxHQUFHLGdDQUFNLENBQUMsR0FBRzs7Ozs7O2lCQU1oQixDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQWlEakQ7QUFFTSxNQUFNLGNBQWMsR0FBRyxnQ0FBTSxDQUFDLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FrRnZDO0FBRU0sTUFBTSxTQUFTLEdBQUcsZ0NBQU0sQ0FBQyxHQUFHOzs7O0NBSWxDOzs7OztBQ3hKRCw2REFBNkQ7QUFDN0Qsc0VBQXNFO0FBQ3RFLDRFQUE0RTtBQUM1RSxzREFBc0Q7QUFFeEI7QUFFOUIsTUFBTSxZQUFZLEdBQUcsQ0FBQyxLQUFVLEVBQUUsRUFBRSxDQUFDLENBQ25DLDhDQUNFLE9BQU8sRUFBQyxXQUFXLEVBQ25CLElBQUksRUFBQyxNQUFNLEVBQ1gsS0FBSyxFQUFDLDRCQUE0QixLQUM5QixLQUFLO0lBRVQsK0NBQ0UsUUFBUSxFQUFDLFNBQVMsRUFDbEIsUUFBUSxFQUFDLFNBQVMsRUFDbEIsQ0FBQyxFQUFDLHFNQUFxTSxFQUN2TSxJQUFJLEVBQUMsU0FBUyxHQUNkLENBQ0UsQ0FDUDtBQUVELGlEQUFlLFlBQVk7OztBQ3ZCM0IsNkRBQTZEO0FBQzdELHNFQUFzRTtBQUN0RSw0RUFBNEU7QUFDNUUsc0RBQXNEO0FBRXhCO0FB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Q0FBdUMsQ0FBQyxDQUM1QyxDQUNHLENBQ0osQ0FDYjtBQUNILENBQUM7QUFFRCxxREFBZSxhQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYnJhdmUtY29yZS8uL2NvbXBvbmVudHMvYnJhdmVfd2VsY29tZV91aS9jb21wb25lbnRzL3NlbGVjdC1wcm9maWxlL3N0eWxlLnRzIiwid2VicGFjazovL2JyYXZlLWNvcmUvLi9jb21wb25lbnRzL2JyYXZlX3dlbGNvbWVfdWkvY29tcG9uZW50cy9zdmcvbGVmdC1hcnJvdy50c3giLCJ3ZWJwYWNrOi8vYnJhdmUtY29yZS8uL2NvbXBvbmVudHMvYnJhdmVfd2VsY29tZV91aS9jb21wb25lbnRzL3N2Zy9hdmF0YXItaWNvbi50c3giLCJ3ZWJwYWNrOi8vYnJhdmUtY29yZS8uL2NvbXBvbmVudHMvYnJhdmVfd2VsY29tZV91aS9jb21wb25lbnRzL3NlbGVjdC1wcm9maWxlL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjIgVGhlIEJyYXZlIEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4vLyBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIGZpbGUsXG4vLyB5b3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cHM6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy5cblxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuZXhwb3J0IGNvbnN0IE1haW5Cb3ggPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxNXB4KTtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgbWF4LXdpZHRoOiA4MDBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LWZhbWlseTogJHsocCkgPT4gcC50aGVtZS5mb250RmFtaWx5LmhlYWRpbmd9O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAudmlldy1oZWFkZXItYm94IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC4yZnIgMWZyIDAuMmZyO1xuICAgIHBhZGRpbmc6IDQwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAudmlldy1kZXRhaWxzIHtcbiAgICBncmlkLWNvbHVtbjogMjtcbiAgfVxuXG4gIC52aWV3LXRpdGxlIHtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICBtYXJnaW46IDAgMCAxOHB4IDA7XG4gIH1cblxuICAudmlldy1kZXNjIHtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBtYXJnaW46IDA7XG4gIH1cblxuICAudmlldy1oZWFkZXItYWN0aW9ucyB7XG4gICAgZ3JpZC1jb2x1bW46IDE7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gIH1cblxuICAuYmFjay1idXR0b24ge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTVweDtcblxuICAgIHN2ZyB7XG4gICAgICB3aWR0aDogMjJweDtcbiAgICAgIGhlaWdodDogYXV0bztcbiAgICB9XG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IFByb2ZpbGVMaXN0Qm94ID0gc3R5bGVkLmRpdmBcbiAgY29sb3I6ICMyMTI1Mjk7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbWFyZ2luLWJvdHRvbTogNTVweDtcblxuICBwIHtcbiAgICBtYXJnaW46IDA7XG4gIH1cblxuICAucHJvZmlsZS1saXN0IHtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBtaW4td2lkdGg6IDUyMHB4O1xuICAgIG1heC1oZWlnaHQ6IDQyMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgfVxuXG4gIC5saXN0LWFjdGlvbnMge1xuICAgIHBhZGRpbmc6IDIwcHggMzJweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICB0b3A6IDA7XG5cbiAgICBidXR0b24ge1xuICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgIGNvbG9yOiAjNEM1NEQyO1xuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICBib3JkZXI6IDA7XG4gICAgICBwYWRkaW5nOiAwO1xuICAgIH1cbiAgfVxuXG4gIC5pdGVtLWJveCB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6ICNGOEY5RkE7XG4gICAgfVxuICB9XG5cbiAgLml0ZW0tZ3JpZCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyNXB4O1xuICAgIHBhZGRpbmc6IDEwcHggMzJweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG5cbiAgLml0ZW0taW5mbyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdyaWQtZ2FwOiAxNXB4O1xuICB9XG5cbiAgLml0ZW0tYWN0aW9uIHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgfVxuXG4gIC5hdmF0YXIge1xuICAgIHdpZHRoOiA0OHB4O1xuICAgIGhlaWdodDogNDhweDtcbiAgICBib3JkZXItcmFkaXVzOiA0OHB4O1xuXG4gICAgc3ZnIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgIH1cbiAgfVxuXG4gIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XG4gICAgd2lkdGg6IDIycHg7XG4gICAgaGVpZ2h0OiAyMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjQUVCMUMyO1xuXG4gICAgJjpjaGVja2VkIHtcbiAgICAgIGFjY2VudC1jb2xvcjogIzRDNTREMjtcbiAgICB9XG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IEFjdGlvbkJveCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdyaWQtZ2FwOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuYFxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIxIFRoZSBCcmF2ZSBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuLy8gTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBmaWxlLFxuLy8geW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHBzOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uXG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBTdmdDb21wb25lbnQgPSAocHJvcHM6IGFueSkgPT4gKFxuICA8c3ZnXG4gICAgdmlld0JveD1cIjAgMCAyMiAxOFwiXG4gICAgZmlsbD1cIm5vbmVcIlxuICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgIHsuLi5wcm9wc31cbiAgPlxuICAgIDxwYXRoXG4gICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICAgIGQ9XCJNMi45NzEgOC4wODNoMTguMTEyYS45MTcuOTE3IDAgMSAxIDAgMS44MzRIMi45NzFsNi4yMjIgNS43NDNhLjkxNy45MTcgMCAwIDEgLjA1MiAxLjI5NS45MTcuOTE3IDAgMCAxLTEuMjk1LjA1MkwuNDkgMTAuMTIzYTEuNTI4IDEuNTI4IDAgMCAxIDAtMi4yNDZMNy45NS45OTNBLjkxNy45MTcgMCAwIDEgOS4xOTQgMi4zNEwyLjk3MSA4LjA4M1pcIlxuICAgICAgZmlsbD1cIiNGMEYyRkZcIlxuICAgIC8+XG4gIDwvc3ZnPlxuKVxuXG5leHBvcnQgZGVmYXVsdCBTdmdDb21wb25lbnRcbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMSBUaGUgQnJhdmUgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbi8vIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXMgZmlsZSxcbi8vIHlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwczovL21vemlsbGEub3JnL01QTC8yLjAvLlxuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcblxuY29uc3QgYmFja2dyb3VuZEZpbGxzID0gWycjREZFMUU1JyxcbicjQjdERUZGJywgJyNGNUM1RTInLCAnI0NDQzVGNScsICcjQzVGNURCJywgJyNFOUY1QzUnXVxuXG5jb25zdCBBdmF0YXJJY29uID0gKHByb3BzOiBhbnkpID0+IHtcbiAgY29uc3QgYmdGaWxsID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgcmV0dXJuIGJhY2tncm91bmRGaWxsc1tNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAoYmFja2dyb3VuZEZpbGxzLmxlbmd0aCAtIDEpKV1cbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB2aWV3Qm94PVwiMCAwIDQ4IDQ4XCJcbiAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIDxjaXJjbGUgY3g9ezI0fSBjeT17MjR9IHI9ezI0fSBmaWxsPXtiZ0ZpbGx9IC8+XG4gICAgICA8ZWxsaXBzZSBjeD17MjR9IGN5PXszM30gcng9ezExfSByeT17N30gZmlsbD1cIiM1RjYzNzJcIiAvPlxuICAgICAgPGNpcmNsZSBjeD17MjR9IGN5PXsxOX0gcj17NX0gZmlsbD1cIiM1RjYzNzJcIiAvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEF2YXRhckljb25cbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMiBUaGUgQnJhdmUgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbi8vIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXMgZmlsZSxcbi8vIHlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwczovL21vemlsbGEub3JnL01QTC8yLjAvLlxuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0ICogYXMgUyBmcm9tICcuL3N0eWxlJ1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAYnJhdmUvbGVvL3JlYWN0L2J1dHRvbidcbmltcG9ydCBMZWZ0QXJyb3dTVkcgZnJvbSAnLi4vc3ZnL2xlZnQtYXJyb3cnXG5pbXBvcnQgQXZhdGFySWNvblNWRyBmcm9tICcuLi9zdmcvYXZhdGFyLWljb24nXG5pbXBvcnQgRGF0YUNvbnRleHQgZnJvbSAnLi4vLi4vc3RhdGUvY29udGV4dCdcbmltcG9ydCB7IHVzZVZpZXdUeXBlVHJhbnNpdGlvbiB9IGZyb20gJy4uLy4uL3N0YXRlL2hvb2tzJ1xuaW1wb3J0IHtcbiAgV2VsY29tZUJyb3dzZXJQcm94eUltcGwsXG4gIEltcG9ydERhdGFCcm93c2VyUHJveHlJbXBsLFxuICBJbXBvcnREYXRhU3RhdHVzLFxuICBkZWZhdWx0SW1wb3J0VHlwZXMsXG4gIFAzQVBoYXNlLFxufSBmcm9tICcuLi8uLi9hcGkvd2VsY29tZV9icm93c2VyX3Byb3h5J1xuaW1wb3J0IHsgZ2V0TG9jYWxlIH0gZnJvbSAnJHdlYi1jb21tb24vbG9jYWxlJ1xuaW1wb3J0IHsgYWRkV2ViVWlMaXN0ZW5lciB9IGZyb20gJ2Nocm9tZTovL3Jlc291cmNlcy9qcy9jci5qcydcblxuaW50ZXJmYWNlIFByb2ZpbGVJdGVtUHJvcHMge1xuICBvbkNoYW5nZT86IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4gdm9pZFxuICBwcm9maWxlTmFtZTogc3RyaW5nXG4gIGlkOiBudW1iZXJcbiAgaXNDaGVja2VkOiBib29sZWFuXG59XG5cbmZ1bmN0aW9uIFByb2ZpbGVJdGVtIChwcm9wczogUHJvZmlsZUl0ZW1Qcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbS1ib3hcIj5cbiAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJpdGVtLWdyaWRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtLWluZm9cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF2YXRhclwiPlxuICAgICAgICAgICAgPEF2YXRhckljb25TVkcgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8c3Bhbj57cHJvcHMucHJvZmlsZU5hbWV9PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtLWFjdGlvblwiPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgIGlkPXtgcHJvZmlsZS0ke3Byb3BzLmlkfWB9XG4gICAgICAgICAgICBjaGVja2VkPXtwcm9wcy5pc0NoZWNrZWR9XG4gICAgICAgICAgICBvbkNoYW5nZT17cHJvcHMub25DaGFuZ2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2xhYmVsPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmZ1bmN0aW9uIFNlbGVjdFByb2ZpbGUgKCkge1xuICBjb25zdCB7XG4gICAgdmlld1R5cGUsXG4gICAgc2V0Vmlld1R5cGUsXG4gICAgaW5jcmVtZW50Q291bnQsXG4gICAgY3VycmVudFNlbGVjdGVkQnJvd3NlclByb2ZpbGVzXG4gIH0gPSBSZWFjdC51c2VDb250ZXh0KERhdGFDb250ZXh0KVxuICBjb25zdCBbc2VsZWN0ZWRQcm9maWxlcywgc2V0U2VsZWN0ZWRQcm9maWxlc10gPSBSZWFjdC51c2VTdGF0ZTxTZXQ8bnVtYmVyPj4obmV3IFNldCgpKVxuXG4gIGNvbnN0IHsgYmFjayB9ID0gdXNlVmlld1R5cGVUcmFuc2l0aW9uKHZpZXdUeXBlKVxuICBjb25zdCBoYW5kbGVCYWNrQnV0dG9uID0gKCkgPT4gc2V0Vmlld1R5cGUoYmFjayEpXG5cbiAgY29uc3QgW2ltcG9ydFN0YXR1cywgc2V0SW1wb3J0U3RhdHVzXSA9IFJlYWN0LnVzZVN0YXRlPEltcG9ydERhdGFTdGF0dXM+KFxuICAgIEltcG9ydERhdGFTdGF0dXMuSU5JVElBTCxcbiAgKVxuXG4gIGNvbnN0IGlzSW1wb3J0SW5Qcm9ncmVzcyA9ICgpID0+IHtcbiAgICByZXR1cm4gaW1wb3J0U3RhdHVzID09PSBJbXBvcnREYXRhU3RhdHVzLklOX1BST0dSRVNTXG4gIH1cblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGFkZFdlYlVpTGlzdGVuZXIoJ2ltcG9ydC1kYXRhLXN0YXR1cy1jaGFuZ2VkJywgKHN0YXR1czogc3RyaW5nKSA9PiB7XG4gICAgICBzd2l0Y2ggKHN0YXR1cykge1xuICAgICAgICBjYXNlICdpblByb2dyZXNzJzpcbiAgICAgICAgICBzZXRJbXBvcnRTdGF0dXMoSW1wb3J0RGF0YVN0YXR1cy5JTl9QUk9HUkVTUylcbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlICdmYWlsZWQnOlxuICAgICAgICAgIHNldEltcG9ydFN0YXR1cyhJbXBvcnREYXRhU3RhdHVzLkZBSUxFRClcbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlICdzdWNjZWVkZWQnOlxuICAgICAgICAgIHNldEltcG9ydFN0YXR1cyhJbXBvcnREYXRhU3RhdHVzLlNVQ0NFRURFRClcbiAgICAgICAgICBicmVha1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHNldEltcG9ydFN0YXR1cyhJbXBvcnREYXRhU3RhdHVzLklOSVRJQUwpXG4gICAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICB9KVxuICB9LCBbXSlcblxuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIGNvbnN0IHsgaWQsIGNoZWNrZWQgfSA9IGUudGFyZ2V0XG4gICAgY29uc3QgcGFyc2VkSWQgPSBwYXJzZUludChpZC5zcGxpdCgnLScpWzFdKVxuXG4gICAgaWYgKCFjaGVja2VkICYmIHNlbGVjdGVkUHJvZmlsZXM/LmhhcyhwYXJzZWRJZCkpIHtcbiAgICAgIHNlbGVjdGVkUHJvZmlsZXMuZGVsZXRlKHBhcnNlZElkKVxuICAgICAgc2V0U2VsZWN0ZWRQcm9maWxlcyhuZXcgU2V0KFsuLi5zZWxlY3RlZFByb2ZpbGVzXSkpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBzZXRTZWxlY3RlZFByb2ZpbGVzKG5ldyBTZXQoc2VsZWN0ZWRQcm9maWxlcy5hZGQocGFyc2VkSWQpKSlcbiAgfVxuXG4gIGNvbnN0IHNlbGVjdEFsbCA9ICgpID0+IHtcbiAgICBzZXRTZWxlY3RlZFByb2ZpbGVzKFxuICAgICAgbmV3IFNldChjdXJyZW50U2VsZWN0ZWRCcm93c2VyUHJvZmlsZXM/Lm1hcCgocHJvZmlsZSkgPT4gcHJvZmlsZS5pbmRleCkpXG4gICAgKVxuICB9XG5cbiAgY29uc3QgaGFuZGxlSW1wb3J0UHJvZmlsZXMgPSAoKSA9PiB7XG4gICAgaWYgKHNlbGVjdGVkUHJvZmlsZXMuc2l6ZSA8PSAwKSByZXR1cm5cbiAgICBsZXQgZW50cmllczogbnVtYmVyW10gPSBbXVxuICAgIHNlbGVjdGVkUHJvZmlsZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgIGVudHJpZXMucHVzaChlbnRyeSlcbiAgICAgIGluY3JlbWVudENvdW50KClcbiAgICB9KVxuXG4gICAgaWYgKGVudHJpZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICBJbXBvcnREYXRhQnJvd3NlclByb3h5SW1wbC5nZXRJbnN0YW5jZSgpLmltcG9ydERhdGEoZW50cmllc1swXSwgZGVmYXVsdEltcG9ydFR5cGVzKVxuICAgIH0gZWxzZSB7XG4gICAgICBJbXBvcnREYXRhQnJvd3NlclByb3h5SW1wbC5nZXRJbnN0YW5jZSgpLmltcG9ydERhdGFCdWxrKGVudHJpZXMsIGRlZmF1bHRJbXBvcnRUeXBlcylcbiAgICB9XG4gICAgV2VsY29tZUJyb3dzZXJQcm94eUltcGwuZ2V0SW5zdGFuY2UoKS5yZWNvcmRQM0EoUDNBUGhhc2UuQ29uc2VudClcbiAgfVxuICBjb25zdCBnZXRJbXBvcnRFbnRyeU5hbWUgPSAoZW50cnk6IGFueSkgPT4ge1xuICAgIGxldCBuYW1lID0gZW50cnkubmFtZVxuICAgIGlmIChlbnRyeS5wcm9maWxlTmFtZSkge1xuICAgICAgbmFtZSArPSAnIC0gJyArIGVudHJ5LnByb2ZpbGVOYW1lXG4gICAgfVxuICAgIHJldHVybiBuYW1lXG4gIH1cbiAgcmV0dXJuIChcbiAgICA8Uy5NYWluQm94PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aWV3LWhlYWRlci1ib3hcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aWV3LWhlYWRlci1hY3Rpb25zXCI+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiYWNrLWJ1dHRvblwiIG9uQ2xpY2s9e2hhbmRsZUJhY2tCdXR0b259PlxuICAgICAgICAgICAgPExlZnRBcnJvd1NWRyAvPlxuICAgICAgICAgICAgPHNwYW4+e2dldExvY2FsZSgnYnJhdmVXZWxjb21lQmFja0J1dHRvbkxhYmVsJyl9PC9zcGFuPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aWV3LWRldGFpbHNcIj5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidmlldy10aXRsZVwiPntnZXRMb2NhbGUoJ2JyYXZlV2VsY29tZVNlbGVjdFByb2ZpbGVMYWJlbCcpfTwvaDE+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidmlldy1kZXNjXCI+e2dldExvY2FsZSgnYnJhdmVXZWxjb21lU2VsZWN0UHJvZmlsZURlc2MnKX08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8Uy5Qcm9maWxlTGlzdEJveD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLWxpc3RcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3QtYWN0aW9uc1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodFwiPlxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3NlbGVjdEFsbH0+e2dldExvY2FsZSgnYnJhdmVXZWxjb21lU2VsZWN0QWxsQnV0dG9uTGFiZWwnKX08L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHtjdXJyZW50U2VsZWN0ZWRCcm93c2VyUHJvZmlsZXM/Lm1hcCgoZW50cnkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoPFByb2ZpbGVJdGVtXG4gICAgICAgICAgICAgIGtleT17ZW50cnkuaW5kZXh9XG4gICAgICAgICAgICAgIGlkPXtlbnRyeS5pbmRleH1cbiAgICAgICAgICAgICAgcHJvZmlsZU5hbWU9e2dldEltcG9ydEVudHJ5TmFtZShlbnRyeSl9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgIGlzQ2hlY2tlZD17c2VsZWN0ZWRQcm9maWxlcy5oYXMoZW50cnkuaW5kZXgpfVxuICAgICAgICAgICAgLz4pXG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9TLlByb2ZpbGVMaXN0Qm94PlxuICAgICAgPFMuQWN0aW9uQm94PlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAga2luZD1cImZpbGxlZFwiXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlSW1wb3J0UHJvZmlsZXN9XG4gICAgICAgICAgaXNEaXNhYmxlZD17c2VsZWN0ZWRQcm9maWxlcy5zaXplID09PSAwIHx8IGlzSW1wb3J0SW5Qcm9ncmVzcygpfVxuICAgICAgICAgIHNpemU9XCJsYXJnZVwiXG4gICAgICAgID5cbiAgICAgICAgICB7Z2V0TG9jYWxlKCdicmF2ZVdlbGNvbWVJbXBvcnRQcm9maWxlc0J1dHRvbkxhYmVsJyl9XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9TLkFjdGlvbkJveD5cbiAgICA8L1MuTWFpbkJveD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWxlY3RQcm9maWxlXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=