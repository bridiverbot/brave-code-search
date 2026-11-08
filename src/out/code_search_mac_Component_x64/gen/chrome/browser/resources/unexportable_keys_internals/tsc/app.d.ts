import '/strings.m.js';
import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import '//resources/cr_elements/icons.html.js';
import '//resources/cr_elements/cr_toast/cr_toast.js';
import type { CrToastElement } from '//resources/cr_elements/cr_toast/cr_toast.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { UnexportableKeyInfo } from './unexportable_keys_internals.mojom-webui.js';
type SortKey = 'wrappedKey' | 'algorithm' | 'keyTag' | 'creationTime';
interface ColumnDef {
    key: SortKey;
    label: string;
    getValue: (item: UnexportableKeyInfo) => string | Date;
}
export interface UnexportableKeysInternalsAppElement {
    $: {
        deleteErrorToast: CrToastElement;
    };
}
export declare class UnexportableKeysInternalsAppElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        unexportableKeysInfo_: {
            type: ArrayConstructor;
        };
        sortColumn_: {
            type: StringConstructor;
        };
        sortReverse_: {
            type: BooleanConstructor;
        };
    };
    protected readonly columns_: ColumnDef[];
    protected accessor unexportableKeysInfo_: UnexportableKeyInfo[];
    protected accessor sortColumn_: SortKey;
    protected accessor sortReverse_: boolean;
    private browserProxy_;
    connectedCallback(): void;
    protected onDeleteKeyClick_(e: Event): Promise<void>;
    protected onSortClick_(e: Event): void;
    protected onSortKeydown_(e: KeyboardEvent): void;
    protected getSortAttribute_(column: SortKey): string | undefined;
    private updateKeysList_;
    private sortKeys_;
}
declare global {
    interface HTMLElementTagNameMap {
        'unexportable-keys-internals-app': UnexportableKeysInternalsAppElement;
    }
}
export {};
