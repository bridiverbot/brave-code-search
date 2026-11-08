import type { NodeIdDataView, NodeIdTypeMapper } from './tab_strip_api_types.mojom-converters.js';
import type { NodeId_Type } from './tab_strip_api_types.mojom-webui.js';
export declare class NodeIdConverter implements NodeIdTypeMapper<string> {
    private validateAndSplit;
    id(token: string): string;
    type(token: string): NodeId_Type;
    convert(view: NodeIdDataView): string;
}
