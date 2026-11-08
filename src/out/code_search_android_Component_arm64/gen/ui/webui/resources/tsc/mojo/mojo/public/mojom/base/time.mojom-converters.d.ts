import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
export declare class JSTimeDataView {
    private readonly decoder_;
    private readonly version_;
    private readonly fieldSpecs_;
    constructor(decoder: mojo.internal.Decoder, version: number, fieldSpecs: Array<mojo.internal.StructFieldSpec<any, any>>);
    get msec(): number;
}
export interface JSTimeTypeMapper<T> {
    msec(mappedTyped: T): number;
    convert(dataView: JSTimeDataView): T;
}
