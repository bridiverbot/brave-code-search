import '../email_aliases_page/email_aliases_page.js';
declare module '../autofill_page/autofill_page.js' {
    interface SettingsAutofillPageElement {
        isEmailAliasesEnabled_(): boolean;
        onEmailAliasesDataCategoryClick(e: Event): void;
    }
}
declare module '../autofill_page/autofill_page_index.js' {
    interface SettingsAutofillPageIndexElement {
        isEmailAliasesEnabled_(): boolean;
    }
}
