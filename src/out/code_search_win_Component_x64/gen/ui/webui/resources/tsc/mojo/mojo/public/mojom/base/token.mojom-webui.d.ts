import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
export declare const TokenSpec: {
    $: mojo.internal.MojomType;
};
export declare interface TokenMojoType {
    high: bigint;
    low: bigint;
}
export type Token = TokenMojoType;
