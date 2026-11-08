import { SkillsHandlerRemote } from '../../glic.mojom-webui.js';
import type { //
Skill as SkillMojo, //
SkillPreview as SkillPreviewMojo, //
SkillsClientInterface, //
WebClientHandlerRemote, //
WebClientInitialState } from '../../glic.mojom-webui.js';
import type { //
CreateSkillRequest, //
GlicBrowserHost, //
GlicBrowserSkills, //
ObservableValue, //
Skill, //
SkillPreview, //
SkillsWebClientEvent, //
UpdateSkillRequest } from '../../glic_api/glic_api.js';
import { ObservableValue as ObservableValueImpl } from '../../observable.js';
export declare function skillPreviewToClient(preview: SkillPreviewMojo, isContextual: boolean): SkillPreview;
export declare function skillToClient(skill: SkillMojo): Skill;
export declare class GlicBrowserHostSkills implements SkillsClientInterface, Partial<GlicBrowserHost> {
    private skillsHandler?;
    private skillsClientReceiver?;
    private cachedSkillPreviews;
    private cachedContextualSkillPreviews;
    skillPreviews: ObservableValueImpl<SkillPreview[]>;
    skillToInvoke: ObservableValueImpl<Skill>;
    private skillsObservable;
    private skillsInstance;
    initialize(initialState: WebClientInitialState, handler: WebClientHandlerRemote): void;
    destroySkills(): void;
    getSkillsHandler(): SkillsHandlerRemote;
    notifySkillPreviewsChanged(skillPreviews: SkillPreviewMojo[]): void;
    notifyContextualSkillPreviewsChanged(skillPreviews: SkillPreviewMojo[]): void;
    notifySkillPreviewChanged(skillPreview: SkillPreviewMojo): void;
    notifySkillDeleted(skillId: string): void;
    notifySkillsEnabledChanged(enabled: boolean): void;
    private combineSkillPreviews;
    createSkill?(request: CreateSkillRequest): Promise<void>;
    updateSkill?(request: UpdateSkillRequest): Promise<void>;
    showManageSkillsUi?(): void;
    showBrowseSkillsUi?(): void;
    getSkill?(id: string): Promise<Skill>;
    recordSkillsWebClientEvent?(event: SkillsWebClientEvent): void;
    getSkillPreviews?(): ObservableValue<SkillPreview[]>;
    getSkillToInvoke?(): ObservableValue<Skill>;
    skills(): ObservableValue<GlicBrowserSkills | undefined>;
    setSkillsEnabled(enabled: boolean): void;
}
