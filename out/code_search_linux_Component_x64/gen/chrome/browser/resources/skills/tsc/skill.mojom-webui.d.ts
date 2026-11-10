import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import { Time as mojoBase_mojom_Time } from '//resources/mojo/mojo/public/mojom/base/time.mojom-webui.js';
import { Url as url_mojom_Url } from '//resources/mojo/url/mojom/url.mojom-webui.js';
export declare const SkillSourceSpec: {
    $: mojo.internal.MojomType;
};
export declare enum SkillSource {
    MIN_VALUE = 0,
    MAX_VALUE = 5,
    kUnknown = 0,
    kFirstParty = 1,
    kUserCreated = 2,
    kDerivedFromFirstParty = 3,
    kEnterprise = 4,
    kDerivedFromEnterprise = 5
}
export declare const SkillsDialogTypeSpec: {
    $: mojo.internal.MojomType;
};
export declare enum SkillsDialogType {
    MIN_VALUE = 0,
    MAX_VALUE = 1,
    kAdd = 0,
    kEdit = 1
}
export declare const SkillSpec: {
    $: mojo.internal.MojomType;
};
export declare const TopicInfoSpec: {
    $: mojo.internal.MojomType;
};
export declare interface SkillMojoType {
    id: string;
    sourceSkillId: (string | null);
    name: string;
    icon: string;
    prompt: string;
    source: SkillSource;
    enabled: boolean;
    description: string;
    curatedBy: (string | null);
    imageUrl: (url_mojom_Url | null);
    creationTime: mojoBase_mojom_Time;
    lastUpdateTime: mojoBase_mojom_Time;
    category: (string | null);
}
export type Skill = SkillMojoType;
export declare interface TopicInfoMojoType {
    categoryName: string;
    displayName: string;
}
export type TopicInfo = TopicInfoMojoType;
