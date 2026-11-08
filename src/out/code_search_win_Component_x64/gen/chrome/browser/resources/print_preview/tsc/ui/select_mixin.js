import { Debouncer } from './debouncer.js';
export const SelectMixin = (superClass) => {
    class SelectMixin extends superClass {
        static get properties() {
            return {
                selectedValue: { type: String },
            };
        }
        #selectedValue_accessor_storage = '';
        get selectedValue() { return this.#selectedValue_accessor_storage; }
        set selectedValue(value) { this.#selectedValue_accessor_storage = value; }
        debouncer_ = new Debouncer(100);
        onSelectChange(e) {
            const newValue = e.target.value;
            this.debouncer_.call(() => this.callProcessSelectChange_(newValue));
        }
        callProcessSelectChange_(newValue) {
            if (!this.isConnected || newValue === this.selectedValue) {
                return;
            }
            this.selectedValue = newValue;
            this.onProcessSelectChange(newValue);
            // For testing only
            this.fire('process-select-change');
        }
        onProcessSelectChange(_value) { }
    }
    return SelectMixin;
};
