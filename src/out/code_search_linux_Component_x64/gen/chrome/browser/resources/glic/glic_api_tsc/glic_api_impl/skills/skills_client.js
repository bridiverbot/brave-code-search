// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { assert } from '//resources/js/assert.js';
import { enumFromClient, enumToClient } from '../../enum_conversions.js';
import { SkillsClientReceiver, SkillsHandlerRemote, SkillSource as SkillSourceMojo } from '../../glic.mojom-webui.js';
import { ObservableValue as ObservableValueImpl } from '../../observable.js';
import { optionalToClient, timeToClient, urlToClient } from '../conversions.js';
import { maybeWrapWithLogging } from '../mojo_logging.js';
export function skillPreviewToClient(preview, isContextual) {
    return {
        ...preview,
        source: enumToClient(preview.source),
        curatedBy: optionalToClient(preview.curatedBy),
        imageUrl: urlToClient(preview.imageUrl),
        category: optionalToClient(preview.category),
        creationTime: timeToClient(preview.creationTime),
        isContextual,
    };
}
export function skillToClient(skill) {
    return {
        preview: skillPreviewToClient(skill.preview, false),
        prompt: skill.prompt,
        sourceSkillId: optionalToClient(skill.sourceSkillId),
    };
}
class GlicBrowserSkillsImpl {
    host;
    constructor(host) {
        this.host = host;
    }
    async createSkill(request) {
        const result = await this.host.getSkillsHandler().createSkill({
            id: request.id ?? '',
            name: request.name ?? '',
            icon: request.icon ?? '',
            prompt: request.prompt,
            description: request.description ?? '',
            source: enumFromClient(request.source) ?? SkillSourceMojo.kUnknown,
        });
        if (!result.modalOpened) {
            throw new Error('createSkill: failed to open dialog');
        }
    }
    async updateSkill(request) {
        const result = await this.host.getSkillsHandler().updateSkill(request);
        if (!result.modalOpened) {
            throw new Error('updateSkill: failed to open dialog');
        }
    }
    showManageSkillsUi() {
        this.host.getSkillsHandler().showManageSkillsUi();
    }
    showBrowseSkillsUi() {
        this.host.getSkillsHandler().showBrowseSkillsUi();
    }
    async getSkill(id) {
        const { skill: mojoSkill } = await this.host.getSkillsHandler().getSkill(id);
        if (!mojoSkill) {
            throw new Error('getSkill: failed');
        }
        return skillToClient(mojoSkill);
    }
    recordSkillsWebClientEvent(event) {
        this.host.getSkillsHandler().recordSkillsWebClientEvent(enumFromClient(event));
    }
    getSkillPreviews() {
        return this.host.skillPreviews;
    }
}
export class GlicBrowserHostSkills {
    skillsHandler;
    skillsClientReceiver;
    cachedSkillPreviews = [];
    cachedContextualSkillPreviews = [];
    skillPreviews = ObservableValueImpl.withNoValue();
    skillToInvoke = ObservableValueImpl.withNoValue();
    skillsObservable = ObservableValueImpl.withValue(undefined);
    skillsInstance = new GlicBrowserSkillsImpl(this);
    initialize(initialState, handler) {
        this.setSkillsEnabled(initialState.enableSkills);
        // Support legacy behavior (which had these functions exist or not exist
        // based on feature enablement as of initialization).
        if (!initialState.enableSkills) {
            this.createSkill = undefined;
            this.updateSkill = undefined;
            this.showManageSkillsUi = undefined;
            this.showBrowseSkillsUi = undefined;
            this.getSkill = undefined;
            this.recordSkillsWebClientEvent = undefined;
            this.getSkillPreviews = undefined;
            this.getSkillToInvoke = undefined;
        }
        this.skillsHandler = maybeWrapWithLogging(new SkillsHandlerRemote(), { prefix: 'SkillsHandler' });
        this.skillsClientReceiver = new SkillsClientReceiver(this);
        handler.createSkillsHandler(this.skillsHandler.$.bindNewPipeAndPassReceiver(), this.skillsClientReceiver.$.bindNewPipeAndPassRemote());
    }
    destroySkills() {
        if (this.skillsHandler) {
            this.skillsHandler.$.close();
            this.skillsHandler = undefined;
        }
        if (this.skillsClientReceiver) {
            this.skillsClientReceiver.$.close();
            this.skillsClientReceiver = undefined;
        }
    }
    getSkillsHandler() {
        assert(this.skillsHandler);
        return this.skillsHandler;
    }
    notifySkillPreviewsChanged(skillPreviews) {
        this.cachedSkillPreviews =
            skillPreviews.map((p) => skillPreviewToClient(p, false));
        this.skillPreviews.assignAndSignal(this.combineSkillPreviews());
    }
    notifyContextualSkillPreviewsChanged(skillPreviews) {
        this.cachedContextualSkillPreviews =
            skillPreviews.map((p) => skillPreviewToClient(p, true));
        this.skillPreviews.assignAndSignal(this.combineSkillPreviews());
    }
    notifySkillPreviewChanged(skillPreview) {
        const clientPreview = skillPreviewToClient(skillPreview, false);
        const index = this.cachedSkillPreviews.findIndex((cachedSkillPreview) => cachedSkillPreview.id === clientPreview.id);
        if (index !== -1) {
            // SkillPreview with the same ID exists, replace it.
            this.cachedSkillPreviews = [
                ...this.cachedSkillPreviews.slice(0, index),
                clientPreview,
                ...this.cachedSkillPreviews.slice(index + 1),
            ];
        }
        else {
            // SkillPreview with this ID not found, add it to the cache.
            this.cachedSkillPreviews = [...this.cachedSkillPreviews, clientPreview];
        }
        // Signal the change to the host.
        this.skillPreviews.assignAndSignal(this.combineSkillPreviews());
    }
    notifySkillDeleted(skillId) {
        const index = this.cachedSkillPreviews.findIndex((cachedSkillPreview) => cachedSkillPreview.id === skillId);
        if (index !== -1) {
            // SkillPreview with the same ID exists, remove it.
            this.cachedSkillPreviews = [
                ...this.cachedSkillPreviews.slice(0, index),
                ...this.cachedSkillPreviews.slice(index + 1),
            ];
        }
        this.skillPreviews.assignAndSignal(this.combineSkillPreviews());
    }
    notifySkillsEnabledChanged(enabled) {
        this.setSkillsEnabled(enabled);
    }
    combineSkillPreviews() {
        return [...this.cachedContextualSkillPreviews, ...this.cachedSkillPreviews];
    }
    createSkill(request) {
        return this.skillsInstance.createSkill(request);
    }
    updateSkill(request) {
        return this.skillsInstance.updateSkill(request);
    }
    showManageSkillsUi() {
        this.skillsInstance.showManageSkillsUi();
    }
    showBrowseSkillsUi() {
        this.skillsInstance.showBrowseSkillsUi();
    }
    getSkill(id) {
        return this.skillsInstance.getSkill(id);
    }
    recordSkillsWebClientEvent(event) {
        this.skillsInstance.recordSkillsWebClientEvent(event);
    }
    getSkillPreviews() {
        return this.skillsInstance.getSkillPreviews();
    }
    getSkillToInvoke() {
        return this.skillToInvoke;
    }
    skills() {
        return this.skillsObservable;
    }
    setSkillsEnabled(enabled) {
        this.skillsObservable.assignAndSignal(enabled ? this.skillsInstance : undefined);
    }
}
