import type { Value } from '//resources/mojo/mojo/public/mojom/base/values.mojom-webui.js';
export interface Header {
    name: string;
    value: string;
}
export declare class OnBeforeSendHeadersParams {
    types: string[];
    includeSubFrameRequests: boolean;
    addHeaders: Header[];
    constructor(types: string[], includeSubFrameRequests: boolean, addHeaders: Header[]);
    toValue(): Value;
}
export declare class OriginCheckParams {
    types: string[];
    allowedOrigins: string[];
    constructor(types: string[], allowedOrigins: string[]);
    toValue(): Value;
}
