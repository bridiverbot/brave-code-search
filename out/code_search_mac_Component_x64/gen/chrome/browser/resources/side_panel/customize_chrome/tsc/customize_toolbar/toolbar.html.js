import { html } from '//resources/lit/v3_0/lit.rollup.js';
export function getHtml() {
    return html `<!--_html_template_start_-->
<div class="sp-card">
  <sp-heading id="heading" @back-button-click="${this.onBackButtonClick_}" back-button-aria-label="$i18n{backButton}" back-button-title="$i18n{backButton}" hide-back-button="">
        <close-panel-button id="closeButton" iron-icon="close" slot="buttons"></close-panel-button>
    <h2 slot="heading"><leo-icon name="window-edit"></leo-icon>$i18n{toolbarHeader}</h2>
  </sp-heading>
  
  
  
</div>
      <div class="sp-card">
        <div class="intro-text">$i18n{chooseToolbarIconsLabel}</div>
        <div id="tipCardLabel">$i18n{reorderTipLabel}</div>
    
      </div>
    
<hr class="sp-cards-separator">
<div class="sp-card" id="pinningSelectionCard">
  ${this.categories_.map((category, categoryIndex) => html `
    <h3 class="choose-icons-row category-title">${category.displayName}</h3>
    ${this.actions_.map(action => html `
      ${action.category === category.id ? html `
        ${!action.hasEnterpriseControlledPinnedState ? html `
          <div
              class="toggle-container choose-icons-row-container choose-icons-row"
              @click="${this.getActionToggleHandler_(action.id, !action.pinned)}">
            <img class="toggle-icon" src="${action.iconUrl}" aria-hidden="true">
            <div class="toggle-title">${action.displayName}</div>
            <cr-toggle
                @change="${this.getActionToggleHandler_(action.id, !action.pinned)}"
                ?checked="${action.pinned}" aria-label="${action.displayName}">
            </cr-toggle>
          </div>
        ` : html `
          <div class="choose-icons-row-container choose-icons-row">
            <img class="toggle-icon" src="${action.iconUrl}" aria-hidden="true">
            <div class="toggle-title">${action.displayName}</div>
            <div class="enterprise-enabled-text"
                aria-label="$i18n{managedA11yLabel}">
              $i18n{enterpriseEnabledLabel}
            </div>
            <img class="toggle-icon" src="icons/domain.svg"
                aria-label="$i18n{managedA11yLabel}"
                title="$i18n{managedA11yLabel}">
          </div>
        `}
      ` : ''}
    `)}
    ${categoryIndex !== this.categories_.length - 1 ? html `
      <hr class="sp-hr">
    ` : ''}
  `)}
</div><cr-button id="resetToDefaultButton" class="floating-button" @click="${this.onResetToDefaultClick_}" ?disabled="${this.resetToDefaultDisabled_}">
    <div id="resetToDefaultIcon" class="cr-icon" slot="prefix-icon"></div>
    $i18n{resetToDefaultButtonLabel}
  </cr-button>
<hr class="sp-cards-separator">

<!--_html_template_end_-->`;
}
