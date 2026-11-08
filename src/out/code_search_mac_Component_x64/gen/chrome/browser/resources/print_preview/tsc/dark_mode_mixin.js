const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
export const DarkModeMixin = (superClass) => {
    class DarkModeMixin extends superClass {
        static get properties() {
            return {
                /** Whether or not the OS is in dark mode. */
                inDarkMode: { type: Boolean },
            };
        }
        boundOnChange_ = null;
        #inDarkMode_accessor_storage = prefersDark.matches;
        get inDarkMode() { return this.#inDarkMode_accessor_storage; }
        set inDarkMode(value) { this.#inDarkMode_accessor_storage = value; }
        connectedCallback() {
            super.connectedCallback();
            if (!this.boundOnChange_) {
                this.boundOnChange_ = () => this.onChange_();
            }
            prefersDark.addListener(this.boundOnChange_);
        }
        disconnectedCallback() {
            super.disconnectedCallback();
            prefersDark.removeListener(this.boundOnChange_);
            this.boundOnChange_ = null;
        }
        onChange_() {
            this.inDarkMode = prefersDark.matches;
        }
    }
    return DarkModeMixin;
};
export function inDarkMode() {
    return prefersDark.matches;
}
