import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
export declare const PolygonSpec: {
    $: mojo.internal.MojomType;
};
export declare const VertexSpec: {
    $: mojo.internal.MojomType;
};
export declare const Polygon_VertexOrderingSpec: {
    $: mojo.internal.MojomType;
};
export declare enum Polygon_VertexOrdering {
    MIN_VALUE = 0,
    MAX_VALUE = 2,
    kUnspecified = 0,
    kClockwise = 1,
    kCounterClockwise = 2
}
export declare const Polygon_CoordinateTypeSpec: {
    $: mojo.internal.MojomType;
};
export declare enum Polygon_CoordinateType {
    MIN_VALUE = 0,
    MAX_VALUE = 2,
    kUnspecified = 0,
    kNormalized = 1,
    kImage = 2
}
export declare interface PolygonMojoType {
    vertex: Vertex[];
    vertexOrdering: Polygon_VertexOrdering;
    coordinateType: Polygon_CoordinateType;
}
export type Polygon = PolygonMojoType;
export declare interface VertexMojoType {
    x: number;
    y: number;
}
export type Vertex = VertexMojoType;
