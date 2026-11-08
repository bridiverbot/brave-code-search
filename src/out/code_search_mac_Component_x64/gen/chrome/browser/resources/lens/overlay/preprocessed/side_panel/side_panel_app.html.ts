import {html} from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
  return html`<!--_html_template_start_--><style include="cr-icons searchbox-shared-style">:host{--cr-searchbox-height:52px;--cr-searchbox-min-width:min(calc(100%),1100px);--composebox-collapsed-height:90px;--composebox-margin-bottom:30px;--aim-header-height:66px;--context-carousel-inline-end-spacing:24px;--context-carousel-inline-start-spacing:24px;--composebox-container-height:calc(var(--composebox-height) + var(--composebox-margin-bottom));background-color:var(--search-background-color);display:flex;flex-direction:column;height:100%}:host(:not([is-on-aim-results]):not([dark-mode])){--cr-composebox-background-color:#f3f5f6;--color-composebox-cancel-button:#0a0a0a;--color-composebox-hover:#e9ebf0;--color-composebox-font:#0a0a0a;--color-composebox-font-light:#0a0a0a;--color-composebox-font-dark:#0a0a0a;--color-composebox-lens-button:#0a0a0a;--color-lens-searchbox-background:#fff;--color-searchbox-results-background-hovered:#F7F8F9;--cr-composebox-submit-button-hover-color:#e9ebf01a;--search-background-color:white;--search-background-color-rgb:255,255,255}:host([is-on-aim-results]:not([dark-mode])){--color-composebox-cancel-button:#0a0a0a;--color-composebox-font:#0a0a0a;--color-composebox-font-light:#0a0a0a;--color-composebox-font-dark:#0a0a0a;--color-composebox-hover:#e9ebf0;--color-composebox-lens-button:#0a0a0a;--color-lens-searchbox-background:#fff;--color-searchbox-results-background-hovered:#F7F8F9;--cr-composebox-background-color:#f3f5f6;--cr-composebox-submit-button-hover-color:#e9ebf01a;--search-background-color:white;--search-background-color-rgb:255,255,255}:host(:not([is-on-aim-results])[dark-mode]){--cr-composebox-background-color:#28292a;--cr-composebox-submit-button-hover-color:#3e3f431a;--color-composebox-cancel-button:#bfbfbf;--color-composebox-hover:#3e3f43;--color-composebox-input-icon:var(--color-searchbox-results-icon);--color-composebox-font:#e6e8f0;--color-composebox-lens-button:#bfbfbf;--color-composebox-font-light:#e6e8f0;--color-composebox-font-dark:#e6e8f0;--color-lens-searchbox-background:#28292A;--color-searchbox-results-background-hovered:#3c4043;--search-background-color:#1f1f1f;--search-background-color-rgb:36,36,36}:host([is-on-aim-results][dark-mode]){--cr-composebox-background-color:#1d1e26;--cr-composebox-submit-button-hover-color:#3e3f431a;--color-composebox-font:#e6e8f0;--color-composebox-hover:#3e3f43;--color-composebox-input-icon:var(--color-searchbox-results-icon);--color-composebox-cancel-button:#bfbfbf;--color-composebox-lens-button:#bfbfbf;--color-composebox-font-light:#e6e8f0;--color-composebox-font-dark:#e6e8f0;--color-lens-searchbox-background:#28292A;--color-searchbox-results-background-hovered:#3c4043;--search-background-color:#101218;--search-background-color-rgb:36,36,36}:host([is-on-aim-results]){transition-duration:0.5s;transition-timing-function:ease-in-out;transition-property:--search-background-color,--cr-composebox-background-color}.results-pane{border:none;height:calc(100vh - 76px);inset-inline-start:0;inset-block-start:76px;position:fixed;width:100%;z-index:1}:host([dark-mode]) .results-pane{background-color:var(--search-background-color)}:host([enable-aim-searchbox]:not([enable-client-side-aim-header])) .results-pane{height:100%;inset-block-start:0;position:absolute}:host([enable-client-side-aim-header]) .results-pane{inset-block-start:var(--aim-header-height);height:calc(100vh - var(--aim-header-height) - var(--composebox-collapsed-height))}:host([enable-floating-g-for-header]) #ghostLoader{padding-top:60px}:host([is-loading-results]) .results{z-index:0}#ghostLoader{background-color:white}:host([dark-mode]) #ghostLoader{background-color:#1f1f1f}:host(:not([is-loading-results])) #ghostLoader,:host([is-error-page-visible]) #ghostLoader{visibility:hidden;z-index:0}:host([is-back-arrow-visible]) #ghostLoader{--ghost-loader-container-max-width:832px}#searchbox{margin-block-start:16px;margin-inline-end:14px;margin-block-end:8px;margin-inline-start:14px}#searchbox::part(animated-glow){display:none}:host([is-back-arrow-visible]) #searchbox{margin-inline-start:0px}#searchboxContainer{position:fixed;width:100%;--color-searchbox-ghost-loader-loading-bar-1:#f1f3f4;--color-searchbox-ghost-loader-loading-bar-2:#ecedef}:host([enable-aim-searchbox]) #searchboxContainer{display:none}:host([dark-mode]) #searchboxContainer{background-color:#1f1f1f;--color-searchbox-answer-icon-background:#004a77ff;--color-searchbox-answer-icon-foreground:#c2e7ffff;--color-searchbox-dropdown-divider:#444746;--color-searchbox-results-action-chip:#047db7ff;--color-searchbox-results-action-chip-icon:#a8c7faff;--color-searchbox-results-action-chip-focus-outline:#669df6ff;--color-searchbox-results-background:#28292a;--color-searchbox-results-background-hovered:#3c4043;--color-searchbox-results-button-hover:#fdfcfb1a;--color-searchbox-results-dim-selected:#c7c7c7ff;--color-searchbox-results-focus-indicator:#3c4043;--color-searchbox-results-foreground:#e8eaed;--color-searchbox-results-foreground-dimmed:#c7c7c7ff;--color-searchbox-results-icon:#9da3a9;--color-searchbox-results-icon-container-background:#3c4043;--color-searchbox-results-icon-focused-outline:#a8c7faff;--color-searchbox-results-icon-selected:#9da3a9;--color-searchbox-results-typed-prefix:#9da3a9;--color-searchbox-results-url:#a8c7faff;--color-searchbox-results-url-selected:#a8c7faff;--color-searchbox-search-icon-background:#9da3a9;--color-searchbox-thumbnail-overlay:#8cb7fa66;--color-searchbox-thumbnail-outline:#8cb7fa;--color-searchbox-background-hovered:#303134;--color-searchbox-background:#303134;--color-searchbox-border:#dadce0ff;--color-searchbox-foreground:#bdc1c6;--color-searchbox-placeholder:#9e9e9e;--color-searchbox-shadow:#20212451;--color-searchbox-ghost-loader-spinner:#70757a;--color-searchbox-ghost-loader-loading-bar-1:#3c4043;--color-searchbox-ghost-loader-loading-bar-2:#4d5156;--color-searchbox-google-g-background:white}:host([show-ghost-loader]) #searchboxContainer{--color-searchbox-background:var(--color-searchbox-results-background)}#toast{justify-content:space-between}cr-icon-button.icon-arrow-back{--cr-icon-button-fill-color:#80868b;margin-block-start:26px;margin-inline-start:8px;margin-inline-end:8px}:host([dark-mode]) cr-icon-button.icon-arrow-back{--cr-icon-button-fill-color:#70757a}cr-searchbox-ghost-loader{display:none;position:absolute;inset-inline-start:14px;inset-inline-end:14px;top:16px}side-panel-error-page{display:none}:host([is-error-page-visible]) side-panel-error-page{display:block;position:fixed;top:76px;z-index:2}#uploadProgressBar{background-color:#4e8ff8;height:100%;width:0}#uploadProgressBarContainer{background-color:#d0e4ff;height:3px;inset-block-start:76px;inset-inline-start:0;position:fixed;transform-origin:50% 50%;width:100%;z-index:2}#composeboxContainer{--composebox-container-height:calc(var(--composebox-height) + var(--composebox-dropdown-height) + var(--composebox-margin-bottom));--color-composebox-scrim-background:var(--search-background-color);display:none;inset-block-end:0;min-height:var(--composebox-collapsed-height);position:absolute;width:100%;z-index:2}#composeboxContainer::before{content:"";background:linear-gradient(180deg,transparent 1%,var(--color-composebox-scrim-background) 52px);inset:calc(var(--aim-header-height) * -1) 0 0;pointer-events:none;position:absolute;width:100%}:host([enable-aim-searchbox]:not([is-error-page-visible])) #composeboxContainer{align-items:center;display:flex;flex-direction:column;justify-content:flex-end}#floatingG{position:fixed;z-index:5}.gradient-g{background-image:url(chrome-untrusted://resources/cr_components/searchbox/icons/google_g_gradient.svg);background-origin:content-box;background-repeat:no-repeat;background-size:contain;box-sizing:border-box;inset-block-start:19px;inset-inline-start:18px;height:40px;padding:2px;width:40px}#aimHeader{inset-inline:0;height:var(--aim-header-height);background-color:var(--search-background-color);z-index:5}#aimHeader::after{content:"";background:linear-gradient(180deg,var(--search-background-color) 1%,transparent 10px);inset-block:0 0;position:absolute;inline-size:100%;margin-block-start:var(--aim-header-height);block-size:52px;pointer-events:none}#aimHeaderLogo{position:absolute}:host([enable-lens-aim-suggestions][enable-lens-aim-suggestions-gradient-background][is-composebox-focused]) #composeboxContainer:has(#composebox[show-dropdown]){height:var(--composebox-container-height);background-color:var(--search-background-color);inset-block-start:auto}:host([enable-lens-aim-suggestions][enable-lens-aim-suggestions-gradient-background][is-composebox-focused]) #composeboxContainer:has(#composebox[show-dropdown])::before{background:linear-gradient(to top,rgba(var(--search-background-color-rgb),1) 65vh,rgba(var(--search-background-color-rgb),0.9) 75vh,transparent);inset:calc(-1 * (100vh - var(--aim-header-height) - var(--composebox-container-height))) 0 0}:host([enable-lens-aim-suggestions][is-composebox-focused]) #composeboxContainer:has(#composebox[show-dropdown]){background-color:var(--search-background-color);pointer-events:auto;inset-block-start:var(--aim-header-height)}#composebox{--expanded-border-radius:24px;--input-bottom-spacing:16px;--text-input-top-spacing:16px;--text-input-left-spacing:24px;--file-chip-img-type-size:52px;box-shadow:none;position:relative;width:calc(100% - 32px);margin-bottom:var(--composebox-margin-bottom)}#composebox::part(error-scrim){display:none}#composebox::part(text-container){padding:0;max-height:40vh}#composebox::part(input-container){transition:padding-top var(--emphasized-curve);transition-duration:var(--collapse-duration)}#composebox[expanding_]::part(input-container){transition-duration:var(--expand-duration)}#composebox::part(carousel-divider){display:none}#composebox::part(carousel-container){opacity:0}#composebox[show-file-carousel][expanding]::part(carousel-container){opacity:1;transition:var(--icon-entry-transition)}#composebox:not([expanding_])[show-file-carousel]::part(cr-composebox-file-carousel){pointer-events:none}#composebox::part(context-menu-and-tools){min-height:var(--cr-icon-button-size)}#composeboxFooter{height:0px;transition:height var(--emphasized-curve);transition-duration:var(--collapse-duration)}#composeboxContainer:has(#composebox[expanding_]) #composeboxFooter{transition-duration:var(--expand-duration)}#composeboxContainer:has(#composebox[expanding_]) #composeboxFooter{height:64px;width:100%}#composebox::part(icon-container){display:none}#composebox::part(input){color:var(--color-composebox-font);min-height:48px;padding-inline-start:var(--text-input-left-spacing)}#composebox::part(input)::placeholder{color:revert}#composebox::part(action-icon){--cr-icon-button-size:48px;--cr-icon-button-hover-background-color:var(--color-composebox-hover)}#composebox::part(cancel-icon){--cr-icon-button-icon-size:24px;--cr-icon-button-fill-color:var(--color-composebox-cancel-button)}:host([show-lens-button]) #composebox::part(lens-icon){--cr-icon-button-icon-size:24px;--cr-icon-button-fill-color:var(--color-composebox-lens-button);display:block}#composebox:not([expanding_])::part(cancel),#composebox:not([expanding_])::part(submit){pointer-events:none}#composebox::part(submit){--cr-composebox-submit-container-size:52px;--cr-icon-button-size:48px;display:block}#composebox::part(label){display:none}:host([enable-lens-aim-suggestions]) #composebox::part(dropdown){--cr-composebox-match-height:54px;background-color:var(--search-background-color);order:-1;width:100%;z-index:4;position:fixed;flex-direction:column-reverse;bottom:0;transform:translateY(calc(-1 * (var(--composebox-height) + var(--composebox-margin-bottom))))}:host(:not([enable-lens-aim-suggestions])) #composeboxContainer #composebox::part(dropdown),:host(:not([is-composebox-focused])) #composeboxContainer #composebox::part(dropdown),#composeboxContainer:has(#composebox:not([show-dropdown])) #composebox::part(dropdown){display:none}#composebox::part(context-entrypoint){transition-delay:0ms}:host([enable-lens-aim-suggestions]) #composebox::part(match-text-container){-webkit-line-clamp:2;-webkit-box-orient:vertical;display:-webkit-box;line-height:20px;white-space:normal}:host(:not([show-upload-progress])) #uploadProgressBarContainer,:host([is-error-page-visible]) #uploadProgressBarContainer{visibility:hidden}:host([show-ghost-loader]) #searchboxContainer:has(cr-lens-searchbox:not([dropdown-is-visible])) cr-searchbox-ghost-loader{display:block}:host([enable-csb-motion-tweaks][show-ghost-loader]) #searchboxContainer:has(cr-lens-searchbox:not([dropdown-is-visible])) cr-searchbox-ghost-loader{display:block}:host([enable-csb-motion-tweaks]:not([is-searchbox-focused])) cr-searchbox-ghost-loader{animation:ghost-loader-enter-animation 483ms cubic-bezier(0,0,0,1) forwards}@keyframes ghost-loader-enter-animation{0%{transform:translateY(-10px)}100%{transform:translateY(0px)}}:host([enable-csb-motion-tweaks][show-ghost-loader]) cr-lens-searchbox::part(searchbox-dropdown){opacity:0;display:block}:host([enable-csb-motion-tweaks][show-ghost-loader]) #searchboxContainer:has(cr-lens-searchbox[dropdown-is-visible]) cr-lens-searchbox::part(searchbox-dropdown){transition:opacity 400ms cubic-bezier(0.4,0,0.2,1);opacity:1}</style>
<template is="dom-if" if="[[enableFloatingGForHeader]]">
  <div id="floatingG" class="gradient-g"></div>
</template>
<template is="dom-if" if="[[enableClientSideAimHeader]]">
  <div id="aimHeader">
    <div id="aimHeaderLogo" class="gradient-g"></div>
  </div>
</template>
<div
  id="searchboxContainer"
  on-escape-searchbox="handleEscapeSearchbox"
  on-focusout="onSearchboxFocusOut_"
>
  <template is="dom-if" if="[[isBackArrowVisible]]">
    <cr-icon-button
      id="backButton"
      class="action-icon icon-arrow-back"
      on-click="onBackArrowClick"
      aria-label="$i18n{backButton}"
    >
    </cr-icon-button>
  </template>
  <cr-lens-searchbox
    id="searchbox"
    placeholder-text="{{placeholderText}}"
    searchbox-aria-description="[[getSearchboxAriaDescription(showErrorState, showGhostLoader)]]"
    on-focusin="onSearchboxFocusIn_"
  >
  </cr-lens-searchbox>
  <cr-searchbox-ghost-loader
    id="searchboxGhostLoader"
    show-error-state="{{showErrorState}}"
    page-content-type="[[pageContentType]]"
    suggestion-count="[[searchboxSuggestionCount]]"
    tabindex="-1"
  >
  </cr-searchbox-ghost-loader>
</div>

<side-panel-error-page id="errorPage" class="results-pane"></side-panel-error-page>

<div id="uploadProgressBarContainer">
  <div
    id="uploadProgressBar"
    role="progressbar"
    aria-valuenow="[[uploadProgress]]"
    aria-valuemin="0"
    aria-valuemax="100"
  ></div>
</div>

<side-panel-ghost-loader id="ghostLoader" class="results-pane"></side-panel-ghost-loader>

<iframe
  name="results"
  id="results"
  class="results results-pane"
  allow="cross-origin-isolated; display-capture; geolocation; microphone;
           clipboard-read; clipboard-write;"
  frameborder="0"
>
</iframe>

<feedback-toast id="feedbackToast"></feedback-toast>

<cr-toast id="messageToast" duration="4000">
  <div>[[toastMessage]]</div>
  <cr-button id="messageToastDismissButton" on-click="onHideMessageToastClick">
    $i18n{dismiss}
  </cr-button>
</cr-toast>

<div
  id="composeboxContainer"
  style$="--composebox-height: [[composeboxHeight_]]px;
 --composebox-dropdown-height: [[composeboxDropdownHeight_]]px;"
>
  <cr-composebox
    id="composebox"
    is-collapsible
    hide-file-inputs_
    carousel-on-top_
    composebox-no-flicker-suggestions-fix
    lens-button-disabled$="[[isOverlayShowing]]"
    max-suggestions="[[maxSuggestions]]"
    lens-button-triggers-overlay
    disable-caret-color-animation
    show-typed-suggest-with-context
  >
    <!-- Currently an empty div that has height to force the input textarea to
         not flow behind the Lens icon. Eventually, this should contain the
         submit button and the Lens icon. -->
    <div id="composeboxFooter" slot="footer"></div>
  </cr-composebox>
</div>
<!--_html_template_end_-->`;
}