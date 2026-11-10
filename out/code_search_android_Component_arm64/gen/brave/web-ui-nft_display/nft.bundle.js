/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/************************************************************************/
/*!******************************************************************!*\
  !*** ./components/brave_wallet_ui/nft/nft_script.ts + 2 modules ***!
  \******************************************************************/

;// ./components/brave_wallet_ui/assets/svg-icons/nft-placeholder.svg
/* harmony default export */ const nft_placeholder = (__webpack_require__.p + "a0186b06fbb93c921bef61544ae917be.svg");
;// ./components/brave_wallet_ui/nft/nft-ui-messages.ts
// Copyright (c) 2022 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// you can obtain one at https://mozilla.org/MPL/2.0/.
const braveWalletOrigin = 'chrome://wallet';
const braveWalletPanelOrigin = 'chrome://wallet-panel.top-chrome';
const DISPLAY_MODES = ['details', 'grid', 'icon'];

;// ./components/brave_wallet_ui/nft/nft_script.ts
// Copyright (c) 2024 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.
// images

// utils

const urlParams = new URLSearchParams(window.location.search);
const displayModeParam = urlParams.get('displayMode');
const displayMode = DISPLAY_MODES.find((mode) => mode === displayModeParam) || 'icon';
const nftMetadataParam = urlParams.get('nftMetadata');
const nftMetadata = nftMetadataParam
    ? JSON.parse(nftMetadataParam)
    : undefined;
const mediaUrl = (nftMetadata === null || nftMetadata === void 0 ? void 0 : nftMetadata.animationURL) || (nftMetadata === null || nftMetadata === void 0 ? void 0 : nftMetadata.imageURL) || nft_placeholder;
// Get the raw image URL from the icon parameter
const iconImageUrl = urlParams.get('icon') || undefined;
function render() {
    document.body.dataset.displayMode = displayMode;
    const imgEl = document.getElementById('nft-image');
    // Show placeholder if the image fails to load (e.g., due to size limits)
    imgEl.onerror = () => {
        imgEl.src = nft_placeholder;
    };
    // Determine the image source based on display mode
    let imageSrc;
    if (displayMode === 'details' && nftMetadata) {
        imageSrc =
            `chrome-untrusted://image?url=`
                + `${encodeURIComponent(mediaUrl)}&staticEncode=true`;
    }
    else if (iconImageUrl) {
        imageSrc =
            `chrome-untrusted://image?url=`
                + `${encodeURIComponent(iconImageUrl)}&staticEncode=true`;
    }
    else {
        imageSrc = nft_placeholder;
    }
    imgEl.src = imageSrc;
}
document.addEventListener('DOMContentLoaded', render);

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmZ0LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREEsNEI7Ozs7Ozs7OztBQ0FBLHNEQUFlLHFCQUF1Qix5Q0FBeUMsRTs7QUNBL0UsNkRBQTZEO0FBQzdELHNFQUFzRTtBQUN0RSw0RUFBNEU7QUFDNUUsc0RBQXNEO0FBSS9DLE1BQU0saUJBQWlCLEdBQUcsaUJBQWlCO0FBQzNDLE1BQU0sc0JBQXNCLEdBQUcsa0NBQWtDO0FBSWpFLE1BQU0sYUFBYSxHQUFrQixDQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDOzs7QUNadkUsNkRBQTZEO0FBQzdELHNFQUFzRTtBQUN0RSw0RUFBNEU7QUFDNUUsc0RBQXNEO0FBRXRELFNBQVM7QUFDd0Q7QUFFakUsUUFBUTtBQUNzRDtBQUc5RCxNQUFNLFNBQVMsR0FBRyxJQUFJLGVBQWUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztBQUU3RCxNQUFNLGdCQUFnQixHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFnQjtBQUVwRSxNQUFNLFdBQVcsR0FDZixhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLEtBQUssZ0JBQWdCLENBQUMsSUFBSSxNQUFNO0FBRW5FLE1BQU0sZ0JBQWdCLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUM7QUFDckQsTUFBTSxXQUFXLEdBQUcsZ0JBQWdCO0lBQ2xDLENBQUMsQ0FBRSxJQUFJLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUEyQjtJQUN6RCxDQUFDLENBQUMsU0FBUztBQUViLE1BQU0sUUFBUSxHQUNaLFlBQVcsYUFBWCxXQUFXLHVCQUFYLFdBQVcsQ0FBRSxZQUFZLE1BQUksV0FBVyxhQUFYLFdBQVcsdUJBQVgsV0FBVyxDQUFFLFFBQVEsS0FBSSxlQUFXO0FBRW5FLGdEQUFnRDtBQUNoRCxNQUFNLFlBQVksR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLFNBQVM7QUFFdkQsU0FBUyxNQUFNO0lBQ2IsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxHQUFHLFdBQVc7SUFFL0MsTUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQXFCO0lBRXRFLHlFQUF5RTtJQUN6RSxLQUFLLENBQUMsT0FBTyxHQUFHLEdBQUcsRUFBRTtRQUNuQixLQUFLLENBQUMsR0FBRyxHQUFHLGVBQVc7SUFDekIsQ0FBQztJQUVELG1EQUFtRDtJQUNuRCxJQUFJLFFBQWdCO0lBQ3BCLElBQUksV0FBVyxLQUFLLFNBQVMsSUFBSSxXQUFXLEVBQUUsQ0FBQztRQUM3QyxRQUFRO1lBQ04sK0JBQStCO2tCQUM3QixHQUFHLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxvQkFBb0I7SUFDekQsQ0FBQztTQUFNLElBQUksWUFBWSxFQUFFLENBQUM7UUFDeEIsUUFBUTtZQUNOLCtCQUErQjtrQkFDN0IsR0FBRyxrQkFBa0IsQ0FBQyxZQUFZLENBQUMsb0JBQW9CO0lBQzdELENBQUM7U0FBTSxDQUFDO1FBQ04sUUFBUSxHQUFHLGVBQVc7SUFDeEIsQ0FBQztJQUVELEtBQUssQ0FBQyxHQUFHLEdBQUcsUUFBUTtBQUN0QixDQUFDO0FBRUQsUUFBUSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLE1BQU0sQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JyYXZlLWNvcmUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYnJhdmUtY29yZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9icmF2ZS1jb3JlLy4vY29tcG9uZW50cy9icmF2ZV93YWxsZXRfdWkvYXNzZXRzL3N2Zy1pY29ucy9uZnQtcGxhY2Vob2xkZXIuc3ZnIiwid2VicGFjazovL2JyYXZlLWNvcmUvLi9jb21wb25lbnRzL2JyYXZlX3dhbGxldF91aS9uZnQvbmZ0LXVpLW1lc3NhZ2VzLnRzIiwid2VicGFjazovL2JyYXZlLWNvcmUvLi9jb21wb25lbnRzL2JyYXZlX3dhbGxldF91aS9uZnQvbmZ0X3NjcmlwdC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImEwMTg2YjA2ZmJiOTNjOTIxYmVmNjE1NDRhZTkxN2JlLnN2Z1wiOyIsIi8vIENvcHlyaWdodCAoYykgMjAyMiBUaGUgQnJhdmUgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbi8vIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXMgZmlsZSxcbi8vIHlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwczovL21vemlsbGEub3JnL01QTC8yLjAvLlxuXG5pbXBvcnQgeyBORlRNZXRhZGF0YVJldHVyblR5cGUgfSBmcm9tICcuLi9jb25zdGFudHMvdHlwZXMnXG5cbmV4cG9ydCBjb25zdCBicmF2ZVdhbGxldE9yaWdpbiA9ICdjaHJvbWU6Ly93YWxsZXQnXG5leHBvcnQgY29uc3QgYnJhdmVXYWxsZXRQYW5lbE9yaWdpbiA9ICdjaHJvbWU6Ly93YWxsZXQtcGFuZWwudG9wLWNocm9tZSdcblxuZXhwb3J0IHR5cGUgRGlzcGxheU1vZGUgPSAnaWNvbicgfCAnZ3JpZCcgfCAnZGV0YWlscydcblxuZXhwb3J0IGNvbnN0IERJU1BMQVlfTU9ERVM6IERpc3BsYXlNb2RlW10gPSBbJ2RldGFpbHMnLCAnZ3JpZCcsICdpY29uJ11cblxuZXhwb3J0IHR5cGUgVXBkYXRlTkZ0TWV0YWRhdGFQYXlsb2FkID0ge1xuICBkaXNwbGF5TW9kZTogRGlzcGxheU1vZGVcbiAgaWNvbj86IHN0cmluZ1xuICBuZnRNZXRhZGF0YT86IE5GVE1ldGFkYXRhUmV0dXJuVHlwZVxuICBpbWFnZUNJRD86IHN0cmluZ1xufVxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDI0IFRoZSBCcmF2ZSBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuLy8gTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBmaWxlLFxuLy8gWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHBzOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uXG5cbi8vIGltYWdlc1xuaW1wb3J0IFBsYWNlaG9sZGVyIGZyb20gJy4uL2Fzc2V0cy9zdmctaWNvbnMvbmZ0LXBsYWNlaG9sZGVyLnN2ZydcblxuLy8gdXRpbHNcbmltcG9ydCB7IERJU1BMQVlfTU9ERVMsIERpc3BsYXlNb2RlIH0gZnJvbSAnLi9uZnQtdWktbWVzc2FnZXMnXG5pbXBvcnQgeyBORlRNZXRhZGF0YVJldHVyblR5cGUgfSBmcm9tICcuLi9jb25zdGFudHMvdHlwZXMnXG5cbmNvbnN0IHVybFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaClcblxuY29uc3QgZGlzcGxheU1vZGVQYXJhbSA9IHVybFBhcmFtcy5nZXQoJ2Rpc3BsYXlNb2RlJykgYXMgRGlzcGxheU1vZGVcblxuY29uc3QgZGlzcGxheU1vZGUgPVxuICBESVNQTEFZX01PREVTLmZpbmQoKG1vZGUpID0+IG1vZGUgPT09IGRpc3BsYXlNb2RlUGFyYW0pIHx8ICdpY29uJ1xuXG5jb25zdCBuZnRNZXRhZGF0YVBhcmFtID0gdXJsUGFyYW1zLmdldCgnbmZ0TWV0YWRhdGEnKVxuY29uc3QgbmZ0TWV0YWRhdGEgPSBuZnRNZXRhZGF0YVBhcmFtXG4gID8gKEpTT04ucGFyc2UobmZ0TWV0YWRhdGFQYXJhbSkgYXMgTkZUTWV0YWRhdGFSZXR1cm5UeXBlKVxuICA6IHVuZGVmaW5lZFxuXG5jb25zdCBtZWRpYVVybCA9XG4gIG5mdE1ldGFkYXRhPy5hbmltYXRpb25VUkwgfHwgbmZ0TWV0YWRhdGE/LmltYWdlVVJMIHx8IFBsYWNlaG9sZGVyXG5cbi8vIEdldCB0aGUgcmF3IGltYWdlIFVSTCBmcm9tIHRoZSBpY29uIHBhcmFtZXRlclxuY29uc3QgaWNvbkltYWdlVXJsID0gdXJsUGFyYW1zLmdldCgnaWNvbicpIHx8IHVuZGVmaW5lZFxuXG5mdW5jdGlvbiByZW5kZXIoKSB7XG4gIGRvY3VtZW50LmJvZHkuZGF0YXNldC5kaXNwbGF5TW9kZSA9IGRpc3BsYXlNb2RlXG5cbiAgY29uc3QgaW1nRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmZ0LWltYWdlJykgYXMgSFRNTEltYWdlRWxlbWVudFxuXG4gIC8vIFNob3cgcGxhY2Vob2xkZXIgaWYgdGhlIGltYWdlIGZhaWxzIHRvIGxvYWQgKGUuZy4sIGR1ZSB0byBzaXplIGxpbWl0cylcbiAgaW1nRWwub25lcnJvciA9ICgpID0+IHtcbiAgICBpbWdFbC5zcmMgPSBQbGFjZWhvbGRlclxuICB9XG5cbiAgLy8gRGV0ZXJtaW5lIHRoZSBpbWFnZSBzb3VyY2UgYmFzZWQgb24gZGlzcGxheSBtb2RlXG4gIGxldCBpbWFnZVNyYzogc3RyaW5nXG4gIGlmIChkaXNwbGF5TW9kZSA9PT0gJ2RldGFpbHMnICYmIG5mdE1ldGFkYXRhKSB7XG4gICAgaW1hZ2VTcmMgPVxuICAgICAgYGNocm9tZS11bnRydXN0ZWQ6Ly9pbWFnZT91cmw9YFxuICAgICAgKyBgJHtlbmNvZGVVUklDb21wb25lbnQobWVkaWFVcmwpfSZzdGF0aWNFbmNvZGU9dHJ1ZWBcbiAgfSBlbHNlIGlmIChpY29uSW1hZ2VVcmwpIHtcbiAgICBpbWFnZVNyYyA9XG4gICAgICBgY2hyb21lLXVudHJ1c3RlZDovL2ltYWdlP3VybD1gXG4gICAgICArIGAke2VuY29kZVVSSUNvbXBvbmVudChpY29uSW1hZ2VVcmwpfSZzdGF0aWNFbmNvZGU9dHJ1ZWBcbiAgfSBlbHNlIHtcbiAgICBpbWFnZVNyYyA9IFBsYWNlaG9sZGVyXG4gIH1cblxuICBpbWdFbC5zcmMgPSBpbWFnZVNyY1xufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgcmVuZGVyKVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9