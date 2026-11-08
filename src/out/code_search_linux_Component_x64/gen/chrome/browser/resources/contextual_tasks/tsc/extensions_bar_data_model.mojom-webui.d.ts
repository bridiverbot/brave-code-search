import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import { IconHandle as toolbarUiApi_mojom_IconHandle } from './icon_handle.mojom-webui.js';
import { String16 as mojoBase_mojom_String16 } from '//resources/mojo/mojo/public/mojom/base/string16.mojom-webui.js';
export declare const ExtensionActionInfoSpec: {
    $: mojo.internal.MojomType;
};
export declare interface ExtensionActionInfoMojoType {
    id: string;
    accessibleName: mojoBase_mojom_String16;
    tooltip: mojoBase_mojom_String16;
    isVisible: boolean;
    forceVisible: boolean;
    isPinnedByDefaultIphAnchor: boolean;
    highlighted: boolean;
    icon: toolbarUiApi_mojom_IconHandle;
}
export type ExtensionActionInfo = ExtensionActionInfoMojoType;
