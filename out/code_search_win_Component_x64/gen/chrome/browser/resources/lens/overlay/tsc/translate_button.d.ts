import '//resources/cr_elements/cr_button/cr_button.js';
import '//resources/cr_elements/cr_icon/cr_icon.js';
import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import '//resources/cr_elements/icons.html.js';
import type { CrButtonElement } from '//resources/cr_elements/cr_button/cr_button.js';
import type { CrIconButtonElement } from '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import type { DomRepeat } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { PolymerElement } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export interface TranslateState {
    translateModeEnabled: boolean;
    targetLanguage: string;
    shouldUnselectWords: boolean;
}
export interface TranslateButtonElement {
    $: {
        allSourceLanguagesMenu: HTMLElement;
        allTargetLanguagesMenu: HTMLElement;
        menuDetectedLanguage: HTMLElement;
        languagePicker: HTMLElement;
        recentSourceLanguagesContainer: DomRepeat;
        recentSourceLanguagesSection: HTMLElement;
        recentTargetLanguagesContainer: DomRepeat;
        recentTargetLanguagesSection: HTMLElement;
        searchSourceLanguagesContainer: DomRepeat;
        searchSourceLanguagePicker: HTMLElement;
        searchTargetLanguagesContainer: DomRepeat;
        searchTargetLanguagePicker: HTMLElement;
        sourceAutoDetectButton: CrButtonElement;
        sourceLanguageButton: CrButtonElement;
        sourceLanguagePickerBackButton: CrIconButtonElement;
        sourceLanguagePickerContainer: DomRepeat;
        sourceLanguagePickerMenu: HTMLElement;
        sourceLanguageSearchButton: CrIconButtonElement;
        sourceLanguageSearchbox: HTMLInputElement;
        targetLanguageButton: CrButtonElement;
        targetLanguagePickerBackButton: CrIconButtonElement;
        targetLanguagePickerContainer: DomRepeat;
        targetLanguagePickerMenu: HTMLElement;
        targetLanguageSearchButton: CrIconButtonElement;
        targetLanguageSearchbox: HTMLInputElement;
        translateDisableButton: CrButtonElement;
        translateEnableButton: CrButtonElement;
    };
}
export declare class TranslateButtonElement extends PolymerElement {
    static get is(): string;
    static get template(): HTMLTemplateElement;
    static get properties(): {
        clientSourceLanguageList: {
            type: ArrayConstructor;
        };
        clientTargetLanguageList: {
            type: ArrayConstructor;
        };
        contentLanguage: {
            type: StringConstructor;
            reflectToAttribute: boolean;
            value: string;
        };
        isLensOverlayContextualSearchboxEnabled: {
            type: BooleanConstructor;
            reflectToAttribute: boolean;
        };
        isSourceLanguageSearchboxOpen: {
            type: BooleanConstructor;
            reflectToAttribute: boolean;
            value: boolean;
        };
        isTargetLanguageSearchboxOpen: {
            type: BooleanConstructor;
            reflectToAttribute: boolean;
            value: boolean;
        };
        isTranslateModeEnabled: {
            type: BooleanConstructor;
            reflectToAttribute: boolean;
            value: boolean;
        };
        languagePickerButtonsVisible: {
            type: BooleanConstructor;
            computed: string;
        };
        recentSourceLanguages: {
            type: ArrayConstructor;
            value: () => never[];
        };
        recentTargetLanguages: {
            type: ArrayConstructor;
            value: () => never[];
        };
        shouldFetchSupportedLanguages: {
            type: BooleanConstructor;
            value: () => boolean;
            readOnly: boolean;
            reflectToAttribute: boolean;
        };
        shouldShowRecentSourceLanguages: {
            type: BooleanConstructor;
            computed: string;
            reflectToAttribute: boolean;
        };
        shouldShowRecentTargetLanguages: {
            type: BooleanConstructor;
            computed: string;
            reflectToAttribute: boolean;
        };
        searchboxHasText: {
            type: BooleanConstructor;
            reflectToAttribute: boolean;
            value: boolean;
        };
        searchedLanguageList: {
            type: ArrayConstructor;
            value: () => never[];
        };
        serverSourceLanguageList: {
            type: ArrayConstructor;
            value: () => never[];
        };
        serverTargetLanguageList: {
            type: ArrayConstructor;
            value: () => never[];
        };
        shouldShowStarsIcon: {
            type: BooleanConstructor;
            computed: string;
            reflectToAttribute: boolean;
        };
        sourceLanguage: {
            type: ObjectConstructor;
            value: null;
        };
        sourceLanguageList: {
            type: ArrayConstructor;
            computed: string;
        };
        sourceLanguageMenuVisible: {
            type: BooleanConstructor;
            reflectToAttribute: boolean;
            value: boolean;
        };
        targetLanguage: {
            type: ObjectConstructor;
            value: null;
        };
        targetLanguageList: {
            type: ArrayConstructor;
            computed: string;
        };
        targetLanguageMenuVisible: {
            type: BooleanConstructor;
            reflectToAttribute: boolean;
            value: boolean;
        };
    };
    private eventTracker;
    private isLensOverlayContextualSearchboxEnabled;
    private isSourceLanguageSearchboxOpen;
    private isTargetLanguageSearchboxOpen;
    private isTranslateModeEnabled;
    private languagePickerButtonsVisible;
    private shouldFetchSupportedLanguages;
    private searchboxHasText;
    private searchedLanguageList;
    private shouldShowStarsIcon;
    private sourceLanguageList;
    private sourceLanguage;
    private targetLanguageList;
    private targetLanguage;
    private sourceLanguageMenuVisible;
    private targetLanguageMenuVisible;
    private supportedSourceLanguages;
    private supportedTargetLanguages;
    private clientSourceLanguageList;
    private clientTargetLanguageList;
    private serverSourceLanguageList;
    private serverTargetLanguageList;
    private recentSourceLanguages;
    private recentTargetLanguages;
    private shouldShowRecentSourceLanguages;
    private shouldShowRecentTargetLanguages;
    private contentLanguage;
    private browserProxy;
    private languageBrowserProxy;
    private listenerIds;
    connectedCallback(): void;
    disconnectedCallback(): void;
    getTranslateEnableButton(): CrButtonElement;
    private handleLanguagePickerKeyDown;
    private handleFetchLanguageList;
    private onServerLanguageListRetrieved;
    private onClientLanguageListRetrieved;
    private maybeSetInitialLanguagesInPicker;
    private maybeSetRecentLanguages;
    private onTargetLanguageRetrieved;
    private onAutoDetectMenuItemClick;
    private onSourceLanguageButtonClick;
    private onTargetLanguageButtonClick;
    private onSourceLanguageMenuItemClick;
    private onRecentSourceLanguageClick;
    private onSourceSearchLanguageItemClick;
    private setNewSourceLanguage;
    private onTargetLanguageMenuItemClick;
    private onTargetSearchLanguageItemClick;
    private onRecentTargetLanguageClick;
    private setNewTargetLanguage;
    private onTranslateButtonClick;
    private maybeIssueTranslateRequest;
    private setTranslateMode;
    private disableTranslateMode;
    private handleBackButtonClick;
    private hideLanguagePickerMenus;
    private getSourceLanguageDisplayName;
    private getTargetLanguageDisplayName;
    private getContentLanguageDisplayName;
    private notifyLanguagePickerOpened;
    private notifyLanguagePickerClosed;
    private openSourceLanguageSearchbox;
    private openTargetLanguageSearchbox;
    private onSourceSearchboxInputChange;
    private onTargetSearchboxInputChange;
    private updateSearchedListOnInputChanged;
    private clearSearchboxState;
    private computeShouldShowStarsIcon;
    private getTabIndexForTranslateEntry;
    private getTabIndexForTranslateExit;
    private getTabIndexForLanguagePickerButtons;
    private computeLanguagePickerButtonsVisible;
    private getSourceLanguageButtonAriaLabel;
    private getTargetLanguageButtonAriaLabel;
    private getAutoCheckedClass;
    private getSearchedLanguageCheckedClass;
    private getLanguageCheckedClass;
    private shouldShowRecentLanguages;
    private updateTranslateModeState;
    private addRecentSourceLanguage;
    private addRecentTargetLanguage;
    private prepareRecentLanguageListForAddition;
    private getSourceLanguageList;
    private getTargetLanguageList;
}
declare global {
    interface HTMLElementTagNameMap {
        'translate-button': TranslateButtonElement;
    }
}
