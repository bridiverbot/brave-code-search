import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
export declare class UrlDataView {
    private readonly decoder_;
    private readonly version_;
    private readonly fieldSpecs_;
    constructor(decoder: mojo.internal.Decoder, version: number, fieldSpecs: Array<mojo.internal.StructFieldSpec<any, any>>);
    get url(): string;
}
export interface UrlTypeMapper<T> {
    url(mappedTyped: T): string;
    convert(dataView: UrlDataView): T;
}
