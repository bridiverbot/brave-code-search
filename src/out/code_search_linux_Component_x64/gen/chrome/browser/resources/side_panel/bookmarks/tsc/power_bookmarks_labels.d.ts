import '/strings.m.js';
import './icons.html.js';
import '//resources/cr_elements/cr_chip/cr_chip.js';
import '//resources/cr_elements/cr_icon/cr_icon.js';
import type { BookmarkProductInfo } from '//resources/cr_components/commerce/shared.mojom-webui.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
import type { Label } from './power_bookmarks_service.js';
export declare class PowerBookmarksLabelsElement extends CrLitElement {
    static get is(): string;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        disabled: {
            type: BooleanConstructor;
        };
        labels: {
            type: ArrayConstructor;
            notify: boolean;
        };
        trackedProductInfos: {
            type: ObjectConstructor;
        };
    };
    accessor disabled: boolean;
    accessor labels: Label[];
    accessor trackedProductInfos: {
        [key: string]: BookmarkProductInfo;
    };
    willUpdate(changedProperties: PropertyValues): void;
    private computeLabels;
    protected getLabelIcon(label: Label): string;
    protected onLabelClick(event: Event): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'power-bookmarks-labels': PowerBookmarksLabelsElement;
    }
}
