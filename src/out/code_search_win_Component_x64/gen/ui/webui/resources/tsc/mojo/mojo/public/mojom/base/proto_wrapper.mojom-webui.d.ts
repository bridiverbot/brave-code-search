import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import { BigBuffer as mojoBase_mojom_BigBuffer } from './big_buffer.mojom-webui.js';
export declare const ProtoWrapperSpec: {
    $: mojo.internal.MojomType;
};
export declare interface ProtoWrapperMojoType {
    protoName: string;
    smuggled: mojoBase_mojom_BigBuffer;
}
export type ProtoWrapper = ProtoWrapperMojoType;
