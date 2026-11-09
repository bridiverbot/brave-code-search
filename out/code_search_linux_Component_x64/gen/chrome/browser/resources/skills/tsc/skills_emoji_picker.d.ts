import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import 'chrome://resources/cr_elements/cr_input/cr_input.js';
import type { CrInputElement } from 'chrome://resources/cr_elements/cr_input/cr_input.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export interface Emoji {
    emoji: string;
    name: string;
    shortcodes: string[];
    category: string;
}
interface EmojiInstance {
    base: number[];
    shortcodes: string[];
}
interface EmojiGroup {
    group: string;
    emoji: EmojiInstance[];
}
export interface SkillsEmojiPickerElement {
    $: {
        container: HTMLElement;
        emojiGrid: HTMLElement;
        searchContainer: HTMLElement;
        searchInput: CrInputElement;
    };
}
export declare class SkillsEmojiPickerElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        searchQuery_: {
            type: StringConstructor;
        };
        groupedEmojis_: {
            type: ObjectConstructor;
        };
    };
    protected accessor searchQuery_: string;
    protected accessor groupedEmojis_: Map<string, Emoji[]>;
    private categoryMap_;
    private debouncedUpdateGroups_;
    private documentClickListener_;
    private searchDebounceDelayMs_;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected firstUpdated(): void;
    setSearchDebounceDelayMsForTesting(delay: number): void;
    setEmojiData(value: EmojiGroup[]): void;
    private onOutsideClick_;
    private updateGroups_;
    protected onSearchInputValueChanged_(event: CustomEvent<{
        value: string;
    }>): void;
    protected onEmojiClick_(event: Event): void;
    protected onKeydown_(event: KeyboardEvent): void;
    protected getEmojiCategories_(): string[];
    protected getEmojisByCategory_(category: string): Emoji[];
}
declare global {
    interface HTMLElementTagNameMap {
        'skills-emoji-picker': SkillsEmojiPickerElement;
    }
}
export {};
