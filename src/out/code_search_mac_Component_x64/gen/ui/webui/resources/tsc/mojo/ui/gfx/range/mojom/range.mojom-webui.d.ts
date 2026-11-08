import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
export declare const RangeSpec: {
    $: mojo.internal.MojomType;
};
export declare const RangeFSpec: {
    $: mojo.internal.MojomType;
};
export declare interface RangeMojoType {
    start: number;
    end: number;
}
export type Range = RangeMojoType;
export declare interface RangeFMojoType {
    start: number;
    end: number;
}
export type RangeF = RangeFMojoType;
