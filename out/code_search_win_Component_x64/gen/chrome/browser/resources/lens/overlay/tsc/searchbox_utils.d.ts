import type { SearchboxMixinInterface } from '//resources/cr_components/searchbox/searchbox_mixin.ts';
import type { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { LensOverlayAppElement } from './lens_overlay_app.js';
import type { LensSidePanelAppElement } from './side_panel/side_panel_app.js';
export declare function handleEscapeSearchbox(element: LensSidePanelAppElement | LensOverlayAppElement, searchbox: SearchboxMixinInterface & CrLitElement, e: CustomEvent): void;
