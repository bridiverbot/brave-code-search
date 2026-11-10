import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
export declare class UnguessableTokenDataView {
    private readonly decoder_;
    private readonly version_;
    private readonly fieldSpecs_;
    constructor(decoder: mojo.internal.Decoder, version: number, fieldSpecs: Array<mojo.internal.StructFieldSpec<any, any>>);
    get high(): bigint;
    get low(): bigint;
}
export interface UnguessableTokenTypeMapper<T> {
    high(mappedTyped: T): bigint;
    low(mappedTyped: T): bigint;
    convert(dataView: UnguessableTokenDataView): T;
}
