import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
export declare const LanguageSpec: {
    $: mojo.internal.MojomType;
};
export declare interface LanguageMojoType {
    languageCode: string;
    name: string;
}
export type Language = LanguageMojoType;
