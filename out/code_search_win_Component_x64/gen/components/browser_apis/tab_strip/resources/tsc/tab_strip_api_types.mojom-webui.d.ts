import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
export declare const NodeIdSpec: {
    $: mojo.internal.MojomType;
};
export declare const PathSpec: {
    $: mojo.internal.MojomType;
};
export declare const PositionSpec: {
    $: mojo.internal.MojomType;
};
export declare const TabFieldMaskSpec: {
    $: mojo.internal.MojomType;
};
export declare const NodeId_TypeSpec: {
    $: mojo.internal.MojomType;
};
export declare enum NodeId_Type {
    MIN_VALUE = 0,
    MAX_VALUE = 3,
    kUnknown = 0,
    kWindow = 1,
    kContent = 2,
    kCollection = 3
}
export declare interface NodeIdMojoType {
    id: string;
    type: NodeId_Type;
}
export type NodeId = string;
export declare interface PathMojoType {
    components: string[];
}
export type Path = PathMojoType;
export declare interface PositionMojoType {
    path: Path;
    index: number;
}
export type Position = PositionMojoType;
export declare interface TabFieldMaskMojoType {
    title: boolean;
    url: boolean;
    favicon: boolean;
    alertStates: boolean;
    networkState: boolean;
    isActive: boolean;
    isSelected: boolean;
    isBlocked: boolean;
    lastActive: boolean;
}
export type TabFieldMask = TabFieldMaskMojoType;
