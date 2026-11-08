import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import { JSTime as mojoBase_mojom_JSTime } from '//resources/mojo/mojo/public/mojom/base/time.mojom-webui.js';
import { Url as url_mojom_Url } from '//resources/mojo/url/mojom/url.mojom-webui.js';
export declare const MemberRoleSpec: {
    $: mojo.internal.MojomType;
};
export declare enum MemberRole {
    MIN_VALUE = 0,
    MAX_VALUE = 4,
    kUnspecified = 0,
    kOwner = 1,
    kMember = 2,
    kInvitee = 3,
    kFormerMember = 4
}
export declare const GroupMemberSpec: {
    $: mojo.internal.MojomType;
};
export declare const GroupDataSpec: {
    $: mojo.internal.MojomType;
};
export declare interface GroupMemberMojoType {
    gaiaId: string;
    displayName: string;
    email: string;
    role: MemberRole;
    avatarUrl: url_mojom_Url;
    givenName: string;
    creationTime: mojoBase_mojom_JSTime;
    lastUpdatedTime: mojoBase_mojom_JSTime;
}
export type GroupMember = GroupMemberMojoType;
export declare interface GroupDataMojoType {
    groupId: string;
    displayName: string;
    members: GroupMember[];
    formerMembers: GroupMember[];
    accessToken: string;
}
export type GroupData = GroupDataMojoType;
