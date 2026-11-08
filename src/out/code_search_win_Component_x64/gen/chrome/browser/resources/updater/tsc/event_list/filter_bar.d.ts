import './filter_dialog/filter_dialog.js';
import './filter_dialog/app_dialog.js';
import './filter_dialog/event_dialog.js';
import './filter_dialog/outcome_dialog.js';
import './filter_dialog/scope_dialog.js';
import './filter_dialog/date_dialog.js';
import './filter_dialog/type_dialog.js';
import '//resources/cr_elements/cr_chip/cr_chip.js';
import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import '//resources/cr_elements/cr_ripple/cr_ripple.js';
import '//resources/cr_elements/icons.html.js';
import '//resources/cr_elements/cr_button/cr_button.js';
import '//resources/cr_elements/cr_checkbox/cr_checkbox.js';
import '//resources/cr_elements/cr_icon/cr_icon.js';
import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import '../icons.html.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { CommonUpdateOutcome, EventType, Scope } from '../event_history.js';
import type { FilterSettings } from './filter_settings.js';
export declare enum FilterCategory {
    APP = "app",
    EVENT = "event",
    OUTCOME = "outcome",
    DATE = "date",
    SCOPE = "scope"
}
export type FilterMenuState = FilterCategory | 'closed' | 'type';
/**
 * Returns the filter category associated with an element via the
 * data-filter-category property.
 */
export declare function getFilterCategoryForTarget(target: HTMLElement): FilterCategory;
export interface FilterBarElement {
    $: {
        filterBarInputContainer: HTMLElement;
    };
}
export declare class FilterBarElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        filterSettings: {
            type: ObjectConstructor;
        };
        filterOrder: {
            type: ArrayConstructor;
        };
        filterMenuState: {
            type: StringConstructor;
        };
        menuHost: {
            type: StringConstructor;
        };
        focusReturnElement: {
            type: ObjectConstructor;
        };
        webuiRoundedIconsEnabled_: {
            type: BooleanConstructor;
        };
    };
    private eventTracker;
    accessor filterSettings: FilterSettings;
    protected accessor filterOrder: FilterCategory[];
    protected accessor filterMenuState: FilterMenuState;
    protected accessor menuHost: 'chip' | 'input';
    protected accessor webuiRoundedIconsEnabled_: boolean;
    private accessor focusReturnElement;
    connectedCallback(): void;
    disconnectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    protected onRemoveFilterClick(e: Event): Promise<void>;
    protected onChipClick(e: MouseEvent): void;
    protected getFilterLabel(category: FilterCategory): string;
    protected editFilter(category: FilterCategory): void;
    protected closeFilterMenu(): void;
    protected updateFilterOrder(category: FilterCategory, active: boolean): void;
    protected onTypeSelectionChanged(e: CustomEvent<FilterCategory>): void;
    protected onAppFilterChange(e: CustomEvent<Set<string>>): Promise<void>;
    protected onEventTypeFilterChange(e: CustomEvent<Set<EventType>>): Promise<void>;
    protected onUpdateOutcomeFilterChange(e: CustomEvent<Set<CommonUpdateOutcome>>): Promise<void>;
    protected onScopeFilterChange(e: CustomEvent<Set<Scope>>): Promise<void>;
    protected onDateFilterChange(e: CustomEvent<{
        start: Date | null;
        end: Date | null;
    }>): Promise<void>;
    protected getDateFilterString(): string;
    private onFiltersChanged;
    protected onClearFiltersClick(): Promise<void>;
    protected isEditing(): boolean;
    protected isEditingViaInput(category: FilterCategory): boolean;
    protected getDialogAnchor(): HTMLElement | null;
    protected onAddFilterClick(): void;
    protected onFilterDialogClose(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'filter-bar': FilterBarElement;
    }
}
