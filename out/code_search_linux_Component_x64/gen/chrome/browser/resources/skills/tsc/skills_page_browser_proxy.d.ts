import { SkillsPageCallbackRouter } from './skills.mojom-webui.js';
import type { PageHandlerInterface } from './skills.mojom-webui.js';
export declare class SkillsPageBrowserProxy {
    handler: PageHandlerInterface;
    callbackRouter: SkillsPageCallbackRouter;
    private constructor();
    static getInstance(): SkillsPageBrowserProxy;
    static setInstance(obj: SkillsPageBrowserProxy): void;
}
