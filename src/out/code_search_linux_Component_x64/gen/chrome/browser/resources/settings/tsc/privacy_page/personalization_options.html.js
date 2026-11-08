import { html } from '//resources/lit/v3_0/lit.rollup.js';
// 
export function getHtml() {
    return html `<!--_html_template_start_--><!-- #html_wrapper_imports_start
// 
import {ChromeSigninUserChoice} from '/shared/settings/people_page/sync_browser_proxy.js';
import {RestartType} from '../relaunch_mixin_lit.js';
// 
#html_wrapper_imports_end -->


<!-- _google_chrome -->
<!-- _google_chrome -->

<!-- _google_chrome -->
<!-- _google_chrome -->

    <!-- This toggle is only shown for users with the appropriate enterprise
        policy enabled. The state is not changeable by the user, so when shown,
        it is alays selected but disabled. -->
    ${this.showSearchAggregatorSuggest_ ? html `
      <settings-toggle-button id="searchAggregatorSuggestToggle"
          pref-key="synthetic.settings.search_aggregator_suggest"
          disabled
          class="hr"
          label="$i18n{searchAggregatorSuggestPref}"
          sub-label="$i18n{searchAggregatorSuggestPrefDesc}">
      </settings-toggle-button>
    ` : ''}

    ${this.showPriceEmailNotificationsToggle_() ? html `
      <settings-toggle-button id="priceEmailNotificationsToggle"
          class="hr"
          label="$i18n{priceEmailNotificationsPref}"
          sub-label="${this.getPriceEmailNotificationsPrefDesc_()}"
          pref-key="price_tracking.email_notifications_enabled">
      </settings-toggle-button>
    ` : ''}


<!--_html_template_end_-->`;
}
