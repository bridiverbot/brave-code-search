import { html } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export function getHtml() {
    return html `<!--_html_template_start_-->
<div class="row" id="timePicker">
  ${this.expandedOptionList_.map(item => html `
    <cr-chip class="time-period-chip" ?selected="${this.isTimePeriodSelected_(item.value)}" data-time-period="${item.value}" @click="${this.onTimePeriodClick_}">
      
      ${item.label}
    <cr-icon icon="check-circle-outline" ?hidden="${!this.isTimePeriodSelected_(item.value)}">
      </cr-icon></cr-chip>
  `)}
  <cr-chip id="moreButton" ?hidden="${!this.moreOptionList_.length}"
      @click="${this.onMoreTimePeriodsButtonClick_}">
    $i18n{clearBrowsingDataMore}
    <cr-icon icon="cr:arrow-drop-down"></cr-icon>
  </cr-chip>
  <cr-lazy-render-lit id="moreTimePeriodsMenu"
      .template="${() => html `
        <cr-action-menu role-description="$i18n{menu}"
            @close="${this.onMoreOptionsMenuClose_}">
          ${this.moreOptionList_.map(item => html `
            <button class="dropdown-item"
                data-time-period="${item.value}"
                @click="${this.onMenuTimePeriodClick_}">
              ${item.label}
            </button>
          `)}
        </cr-action-menu>
      `}">
  </cr-lazy-render-lit>
</div>
<!--_html_template_end_-->`;
}
