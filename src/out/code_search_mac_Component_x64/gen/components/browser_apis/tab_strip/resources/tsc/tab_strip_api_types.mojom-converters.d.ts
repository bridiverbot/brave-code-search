import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import type { NodeId_Type } from './tab_strip_api_types.mojom-webui.js';
export declare class NodeIdDataView {
    private readonly decoder_;
    private readonly version_;
    private readonly fieldSpecs_;
    constructor(decoder: mojo.internal.Decoder, version: number, fieldSpecs: Array<mojo.internal.StructFieldSpec<any, any>>);
    get id(): string;
    get type(): NodeId_Type;
}
export interface NodeIdTypeMapper<T> {
    id(mappedTyped: T): string;
    type(mappedTyped: T): NodeId_Type;
    convert(dataView: NodeIdDataView): T;
}
