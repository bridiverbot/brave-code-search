import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
export declare const InlineFulfillmentSpec: {
    $: mojo.internal.MojomType;
};
export declare const HandoffSpec: {
    $: mojo.internal.MojomType;
};
export declare const ActionSpec: {
    $: mojo.internal.MojomType;
};
export declare interface InlineFulfillmentMojoType {
    resourceName: string;
}
export type InlineFulfillment = InlineFulfillmentMojoType;
export declare interface HandoffMojoType {
}
export type Handoff = HandoffMojoType;
export declare interface Action {
    inlineFulfillment?: InlineFulfillment;
    handoff?: Handoff;
}
export declare enum ActionFieldTags {
    INLINE_FULFILLMENT = 0,
    HANDOFF = 1
}
export declare function whichAction(u: Action): ActionFieldTags;
