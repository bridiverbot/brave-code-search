import '//resources/cr_elements/cr_button/cr_button.js';
import '//resources/cr_elements/cr_input/cr_input.js';
import '//resources/cr_elements/cr_shared_vars.css.js';
import type { CrButtonElement } from '//resources/cr_elements/cr_button/cr_button.js';
import type { CrInputElement } from '//resources/cr_elements/cr_input/cr_input.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { RememberedNote } from '../ai_overlay_dialog.mojom-webui.js';
export interface NotesAppElement {
    $: {
        newNoteKey: CrInputElement;
        newNoteValue: CrInputElement;
        addNoteButton: CrButtonElement;
    };
}
export declare class NotesAppElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        notes: {
            type: ArrayConstructor;
        };
    };
    protected accessor notes: RememberedNote[];
    private browserProxy_;
    connectedCallback(): void;
    private fetchNotes_;
    protected onNoteValueChange_(e: Event): Promise<void>;
    protected onDeleteNoteClick_(e: Event): Promise<void>;
    protected onAddNoteClick_(): Promise<void>;
}
declare global {
    interface HTMLElementTagNameMap {
        'ai-overlay-notes-app': NotesAppElement;
    }
}
