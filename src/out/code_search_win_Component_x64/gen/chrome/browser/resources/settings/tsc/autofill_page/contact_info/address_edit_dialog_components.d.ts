/**
 * The base class for data behind an address component. It exposes the `value`
 * property, which is how interface controls (e.g. input) communicate with it.
 */
export declare class AddressComponentUi {
    private readonly fieldType_;
    private readonly originalValue_?;
    private readonly existingAddress_;
    private readonly onValueUpdateListener_;
    private readonly skipValidation_;
    private addressFields_;
    private isValidatable_;
    readonly isTextarea: boolean;
    readonly isRequired: boolean;
    readonly label: string;
    readonly additionalClassName: string;
    constructor(addressFields: Map<chrome.autofillPrivate.FieldType, string | undefined>, originalFields: Map<chrome.autofillPrivate.FieldType, string | undefined> | undefined, fieldType: chrome.autofillPrivate.FieldType, label: string, onValueUpdateListener: () => void, additionalClassName?: string, isTextarea?: boolean, skipValidation?: boolean, isRequired?: boolean);
    /**
     * Being validatable for an address component means that its invalid state
     * is visible to the user. Having a component not validatable initially
     * (before any interactions with controls) allows less aggressive validation
     * experience for the user.
     */
    get isValidatable(): boolean;
    get isValid(): boolean;
    get value(): string;
    set value(value: string);
    get hasValue(): boolean;
    get fieldType(): chrome.autofillPrivate.FieldType;
    makeValidatable(): void;
}
