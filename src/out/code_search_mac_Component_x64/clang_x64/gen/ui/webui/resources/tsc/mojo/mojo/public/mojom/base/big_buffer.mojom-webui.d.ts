import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
export declare const BigBufferSharedMemoryRegionSpec: {
    $: mojo.internal.MojomType;
};
export declare const BigBufferSpec: {
    $: mojo.internal.MojomType;
};
export declare interface BigBufferSharedMemoryRegionMojoType {
    bufferHandle: MojoHandle;
    size: number;
}
export type BigBufferSharedMemoryRegion = BigBufferSharedMemoryRegionMojoType;
export declare interface BigBuffer {
    bytes?: number[];
    sharedMemory?: BigBufferSharedMemoryRegion;
    invalidBuffer?: boolean;
}
export declare enum BigBufferFieldTags {
    BYTES = 0,
    SHARED_MEMORY = 1,
    INVALID_BUFFER = 2
}
export declare function whichBigBuffer(u: BigBuffer): BigBufferFieldTags;
