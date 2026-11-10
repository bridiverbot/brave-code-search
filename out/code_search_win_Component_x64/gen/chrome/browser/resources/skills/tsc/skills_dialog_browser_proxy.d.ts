import type { DialogHandlerInterface } from './skills.mojom-webui.js';
export declare class SkillsDialogBrowserProxy {
    handler: DialogHandlerInterface;
    private constructor();
    static getInstance(): SkillsDialogBrowserProxy;
    static setInstance(obj: SkillsDialogBrowserProxy): void;
}
