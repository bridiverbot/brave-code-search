import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
export declare const TimeSpec: {
    $: mojo.internal.MojomType;
};
export declare const JSTimeSpec: {
    $: mojo.internal.MojomType;
};
export declare const TimeDeltaSpec: {
    $: mojo.internal.MojomType;
};
export declare const TimeTicksSpec: {
    $: mojo.internal.MojomType;
};
export declare interface TimeMojoType {
    internalValue: bigint;
}
export type Time = TimeMojoType;
export declare interface JSTimeMojoType {
    msec: number;
}
export type JSTime = Date;
export declare interface TimeDeltaMojoType {
    microseconds: bigint;
}
export type TimeDelta = TimeDeltaMojoType;
export declare interface TimeTicksMojoType {
    internalValue: bigint;
}
export type TimeTicks = TimeTicksMojoType;
