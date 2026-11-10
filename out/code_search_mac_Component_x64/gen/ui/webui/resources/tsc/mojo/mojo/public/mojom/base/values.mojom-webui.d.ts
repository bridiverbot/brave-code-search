import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
export declare const DictionaryValueSpec: {
    $: mojo.internal.MojomType;
};
export declare const ListValueSpec: {
    $: mojo.internal.MojomType;
};
export declare const ValueSpec: {
    $: mojo.internal.MojomType;
};
export declare interface DictionaryValueMojoType {
    storage: {
        [key: string]: Value;
    };
}
export type DictionaryValue = DictionaryValueMojoType;
export declare interface ListValueMojoType {
    storage: Value[];
}
export type ListValue = ListValueMojoType;
export declare interface Value {
    nullValue?: number;
    boolValue?: boolean;
    intValue?: number;
    doubleValue?: number;
    stringValue?: string;
    binaryValue?: number[];
    dictionaryValue?: DictionaryValue;
    listValue?: ListValue;
}
export declare enum ValueFieldTags {
    NULL_VALUE = 0,
    BOOL_VALUE = 1,
    INT_VALUE = 2,
    DOUBLE_VALUE = 3,
    STRING_VALUE = 4,
    BINARY_VALUE = 5,
    DICTIONARY_VALUE = 6,
    LIST_VALUE = 7
}
export declare function whichValue(u: Value): ValueFieldTags;
