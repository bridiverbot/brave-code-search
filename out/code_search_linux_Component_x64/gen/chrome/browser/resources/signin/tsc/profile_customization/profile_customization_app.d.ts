import '//resources/brave/custom_profile_image_row.js';
import { ProfileCustomizationAppElement as ProfileCustomizationAppElementChromium } from './profile_customization_app-chromium.js';
declare module './profile_customization_app-chromium.js' {
    interface ProfileCustomizationAppElement {
        isCustomProfileImageEnabled_(): boolean;
        onNameInputKeydown_(e: KeyboardEvent): void;
    }
}
declare class ProfileCustomizationAppElement extends ProfileCustomizationAppElementChromium {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup[];
    isCustomProfileImageEnabled_(): boolean;
    firstUpdated(): void;
    onNameInputKeydown_(e: KeyboardEvent): void;
}
export { ProfileCustomizationAppElement };
export * from './profile_customization_app-chromium.js';
