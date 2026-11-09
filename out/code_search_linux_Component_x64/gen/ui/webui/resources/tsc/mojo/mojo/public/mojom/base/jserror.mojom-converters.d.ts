import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
export declare class JsErrorDataView {
    private readonly decoder_;
    private readonly version_;
    private readonly fieldSpecs_;
    constructor(decoder: mojo.internal.Decoder, version: number, fieldSpecs: Array<mojo.internal.StructFieldSpec<any, any>>);
    get name(): (string | null);
    get cause(): (string | null);
    get message(): (string | null);
}
export interface JsErrorTypeMapper<T> {
    name(mappedTyped: T): (string | null);
    cause(mappedTyped: T): (string | null);
    message(mappedTyped: T): (string | null);
    convert(dataView: JsErrorDataView): T;
}
