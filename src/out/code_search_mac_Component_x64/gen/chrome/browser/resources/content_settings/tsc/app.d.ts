import './content_setting_pattern_source.js';
import './cr_frame_list.js';
import { CustomElement } from 'chrome://resources/js/custom_element.js';
import type { CrFrameListElement } from './cr_frame_list.js';
import type { RouteObserver } from './router.js';
export declare class AppElement extends CustomElement implements RouteObserver {
    private panels_;
    private loadedPages_;
    static get is(): string;
    constructor();
    connectedCallback(): void;
    get tabBox(): CrFrameListElement;
    disconnectedCallback(): void;
    onRouteChanged(pageName: string | null): Promise<void>;
    private loadDataForPage;
    private getContentSettingsTypeFromName;
    private createInitialLayout;
    private loadContentSettingsData;
    private setupEventListeners;
}
declare global {
    interface HTMLElementTagNameMap {
        'app-element': AppElement;
    }
}
