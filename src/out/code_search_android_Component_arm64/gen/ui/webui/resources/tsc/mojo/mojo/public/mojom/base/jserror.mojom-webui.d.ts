import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
export declare const JsErrorSpec: {
    $: mojo.internal.MojomType;
};
export declare interface JsErrorMojoType {
    name: (string | null);
    cause: (string | null);
    message: (string | null);
}
export type JsError = Object;
