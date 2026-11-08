import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
export declare class String16DataView {
    private readonly decoder_;
    private readonly version_;
    private readonly fieldSpecs_;
    constructor(decoder: mojo.internal.Decoder, version: number, fieldSpecs: Array<mojo.internal.StructFieldSpec<any, any>>);
    get data(): number[];
}
export interface String16TypeMapper<T> {
    data(mappedTyped: T): number[];
    convert(dataView: String16DataView): T;
}
