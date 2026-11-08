import { html } from '//resources/lit/v3_0/lit.rollup.js';
export function getHtml() {
    // clang-format off
    return html `<!--_html_template_start_-->
<settings-section page-title="$i18n{appearancePageTitle}">
  <div route-path="default">
    <div class="settings-row first" id="themeRow" ?hidden="${!this.pageVisibility_.setTheme}">
      <cr-link-row id="openTheme" class="first" ?hidden="${!this.pageVisibility_.setTheme}" label="$i18n{themes}" sub-label="${this.themeSublabel_}" @click="${this.onThemeClick_}" external="">
      </cr-link-row>


      <div class="settings-row continuation" ?hidden="${!this.showThemesSecondary_()}" id="themesSecondaryActions">
        <div class="separator"></div>
        ${this.showUseClassic_() ? html `
          <cr-button id="useDefault" @click="${this.onUseDefaultClick_}">
            $i18n{useClassicTheme}
          </cr-button>
        ` : ''}
        ${this.showUseGtk_() ? html `
          <cr-button id="useGtk" @click="${this.onUseGtkClick_}">
            $i18n{useGtkTheme}
          </cr-button>
        ` : ''}
        ${this.showUseQt_() ? html `
          <cr-button id="useQt" @click="${this.onUseQtClick_}">
            $i18n{useQtTheme}
          </cr-button>
        ` : ''}
      </div>

    </div>
    <div id="toolbarRow" class="settings-row">
      <cr-link-row id="customizeToolbar" label="$i18n{customizeToolbar}" @click="${this.onCustomizeToolbarClick_}" external="">
      </cr-link-row>
      ${this.showResetPinnedActionsButton_ ? html `
        <div class="separator"></div>
        <cr-button id="resetPinnedToolbarActions"
            @click="${this.onResetPinnedToolbarActionsClick_}"
            aria-label="$i18n{resetToolbarToDefault}">
          $i18n{resetToDefault}
        </cr-button>
      ` : ''}
    </div>
    <div id="colorSchemeModeRow" class="cr-row" ?hidden="${!this.showColorSchemeMode_()}">
      <div id="colorSchemeModeLabel" class="flex cr-padded-text" aria-hidden="true">
        $i18n{colorSchemeMode}
      </div>
      <select id="colorSchemeModeSelect" class="md-select" @change="${this.onColorSchemeModeChange_}" aria-labelledby="colorSchemeModeLabel">
        ${this.colorSchemeModeOptions_.map(item => html `
          <option value="${item.value}"
              ?selected="${this.isSelectedColorSchemeMode_(item.value)}">
            ${item.name}
          </option>
        `)}
      </select>
    </div>
    
    
    ${this.showHomeButtonPref_?.value ? html `` : ''}
    
    ${!this.ntpSimplificationBookmarksBarEnabled_ ? html `` : ''}
    ${this.ntpSimplificationBookmarksBarEnabled_ ? html `
      <div class="cr-row" ?hidden="${!this.pageVisibility_.bookmarksBar}">
        <div class="flex cr-padded-text" aria-hidden="true">
          $i18n{bookmarksBar}
        </div>
        <settings-dropdown-menu id="bookmarksBarVisibilityDropdown"
            label="$i18n{bookmarksBar}" pref-key="bookmark_bar.visibility_state"
            .menuOptions="${this.bookmarksBarOptions_}"
            @settings-control-change="${this.onBookmarksBarVisibilitySettingsControlChange_}">
        </settings-dropdown-menu>
      </div>
    ` : ''}




    
    
    ${this.tabStripUnificationEnabled_ ? html `
      <div class="list-frame indented-toggles"
          ?hidden="${!!this.verticalTabsEnabledPref_?.value}">
        <settings-toggle-button id="tabScrollAutoShowOnOverflow"
            pref-key="tab_scroll_buttons.pinned_to_tabstrip"
            label="$i18n{tabScrollAutoShowOnOverflow}"
            @change="${this.onTabScrollAutoShowOnOverflowChange_}">
        </settings-toggle-button>
      </div>
    ` : ''}

    ${this.showOrganizerPanelEnabled_ ? html `
      <settings-toggle-button id="showOrganizerPanelButton"
          pref-key="tab_search.pinned_to_tabstrip"
          label="$i18n{showTabSearchButton}"
          @change="${this.onShowOrganizerPanelButtonChange_}">
      </settings-toggle-button>
    ` : html `
      <settings-toggle-button id="showTabSearchButton" class="hr"
          pref-key="tab_search.pinned_to_tabstrip"
          label="$i18n{showTabSearchButton}"
          @change="${this.onShowTabSearchButtonChange_}">
      </settings-toggle-button>
    `}


    

    

    ${this.showCtrlTabMru_ ? html `` : ''}

    
    
    ${!this.showHoverCardImagesOption_ ? html `` : ''}
    ${this.showHoverCardImagesOption_ ? html `` : ''}


    <div class="hr" ?hidden="${!this.pageVisibility_.bookmarksBar}"></div>
    <settings-toggle-button ?hidden="${!this.showCustomChromeFrame_}" pref-key="browser.custom_chrome_frame" label="$i18n{showWindowDecorations}" inverted="">
    </settings-toggle-button>

    <div class="cr-row">
      <div class="flex cr-padded-text" aria-hidden="true">
        $i18n{fontSize}
      </div>
      <settings-dropdown-menu id="defaultFontSize" label="$i18n{fontSize}" pref-key="webkit.webprefs.default_font_size" .menuOptions="${this.fontSizeOptions_}">
      </settings-dropdown-menu>
    </div>
    <cr-link-row class="hr" id="customize-fonts-subpage-trigger" label="$i18n{customizeFonts}" @click="${this.onCustomizeFontsClick_}" role-description="$i18n{subpageArrowRoleDescription}">
    </cr-link-row>
    <div class="cr-row" ?hidden="${!this.pageVisibility_.pageZoom}">
      <div id="pageZoom" class="flex cr-padded-text" aria-hidden="true">
        $i18n{pageZoom}
      </div>
      <select id="zoomLevel" class="md-select" aria-labelledby="pageZoom" @change="${this.onZoomLevelChange_}">
        ${this.pageZoomLevels_.map(item => html `
          <option value="${item}"
              ?selected="${this.zoomValuesEqual_(item, this.defaultZoom_)}">
            ${this.formatZoom_(item)}%
          </option>
        `)}
      </select>
    </div>

  </div>
  
<settings-brave-appearance-toolbar></settings-brave-appearance-toolbar></settings-section>
${this.showManagedThemeDialog_ ? html `
  <managed-dialog @close="${this.onManagedDialogClose_}"
      title="$i18n{themeManagedDialogTitle}"
      body="$i18n{themeManagedDialogBody}">
  </managed-dialog>
` : ''}
<!--_html_template_end_-->`;
    // clang-format on
}
