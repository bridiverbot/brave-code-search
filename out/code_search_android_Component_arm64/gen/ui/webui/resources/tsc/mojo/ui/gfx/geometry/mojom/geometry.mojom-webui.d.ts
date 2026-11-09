import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
export declare const PointSpec: {
    $: mojo.internal.MojomType;
};
export declare const PointFSpec: {
    $: mojo.internal.MojomType;
};
export declare const Point3FSpec: {
    $: mojo.internal.MojomType;
};
export declare const SizeSpec: {
    $: mojo.internal.MojomType;
};
export declare const SizeFSpec: {
    $: mojo.internal.MojomType;
};
export declare const RectSpec: {
    $: mojo.internal.MojomType;
};
export declare const RectFSpec: {
    $: mojo.internal.MojomType;
};
export declare const InsetsSpec: {
    $: mojo.internal.MojomType;
};
export declare const InsetsFSpec: {
    $: mojo.internal.MojomType;
};
export declare const Vector2dSpec: {
    $: mojo.internal.MojomType;
};
export declare const Vector2dFSpec: {
    $: mojo.internal.MojomType;
};
export declare const Vector3dFSpec: {
    $: mojo.internal.MojomType;
};
export declare const QuaternionSpec: {
    $: mojo.internal.MojomType;
};
export declare const QuadFSpec: {
    $: mojo.internal.MojomType;
};
export declare const AxisTransform2dSpec: {
    $: mojo.internal.MojomType;
};
export declare interface PointMojoType {
    x: number;
    y: number;
}
export type Point = PointMojoType;
export declare interface PointFMojoType {
    x: number;
    y: number;
}
export type PointF = PointFMojoType;
export declare interface Point3FMojoType {
    x: number;
    y: number;
    z: number;
}
export type Point3F = Point3FMojoType;
export declare interface SizeMojoType {
    width: number;
    height: number;
}
export type Size = SizeMojoType;
export declare interface SizeFMojoType {
    width: number;
    height: number;
}
export type SizeF = SizeFMojoType;
export declare interface RectMojoType {
    x: number;
    y: number;
    width: number;
    height: number;
}
export type Rect = RectMojoType;
export declare interface RectFMojoType {
    x: number;
    y: number;
    width: number;
    height: number;
}
export type RectF = RectFMojoType;
export declare interface InsetsMojoType {
    top: number;
    left: number;
    bottom: number;
    right: number;
}
export type Insets = InsetsMojoType;
export declare interface InsetsFMojoType {
    top: number;
    left: number;
    bottom: number;
    right: number;
}
export type InsetsF = InsetsFMojoType;
export declare interface Vector2dMojoType {
    x: number;
    y: number;
}
export type Vector2d = Vector2dMojoType;
export declare interface Vector2dFMojoType {
    x: number;
    y: number;
}
export type Vector2dF = Vector2dFMojoType;
export declare interface Vector3dFMojoType {
    x: number;
    y: number;
    z: number;
}
export type Vector3dF = Vector3dFMojoType;
export declare interface QuaternionMojoType {
    x: number;
    y: number;
    z: number;
    w: number;
}
export type Quaternion = QuaternionMojoType;
export declare interface QuadFMojoType {
    p1: PointF;
    p2: PointF;
    p3: PointF;
    p4: PointF;
}
export type QuadF = QuadFMojoType;
export declare interface AxisTransform2dMojoType {
    scale: Vector2dF;
    translation: Vector2dF;
}
export type AxisTransform2d = AxisTransform2dMojoType;
