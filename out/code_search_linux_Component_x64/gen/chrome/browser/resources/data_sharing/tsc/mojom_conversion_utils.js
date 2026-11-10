// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// 
// 
import './dummy_data_sharing_sdk.js';
import { MemberRole } from './group_data.mojom-webui.js';
// Utilities to convert DataSharingSdkGroup in data sharing sdk to GroupData in
// group_data.mojom
export function toMojomGroupData(group) {
    const members = [];
    for (const member of group.members) {
        members.push(toMojomGroupMember(member));
    }
    const formerMembers = [];
    for (const member of group.formerMembers) {
        formerMembers.push(toMojomGroupMember(member));
    }
    return {
        groupId: group.groupId,
        displayName: group.displayName || '',
        accessToken: group.accessToken || '',
        members,
        formerMembers,
    };
}
function toMojomGroupMember(member) {
    return {
        gaiaId: member.focusObfuscatedGaiaId,
        displayName: member.displayName,
        email: member.email,
        role: toMojomRole(member.role),
        avatarUrl: member.avatarUrl,
        // Bandage for crbug.com/372249284, clean this up after the root cause is
        // addressed.
        givenName: member.givenName || '',
        creationTime: new Date(member.createdAtTimeMs),
        lastUpdatedTime: new Date(member.lastUpdatedAtTimeMs),
    };
}
function toMojomRole(role) {
    // Applicant will eventually be added, it's supported by the Data Sharing SDK.
    switch (role) {
        case "invitee" /* DataSharingMemberRoleEnum.INVITEE */:
            return MemberRole.kInvitee;
        case "member" /* DataSharingMemberRoleEnum.MEMBER */:
            return MemberRole.kMember;
        case "owner" /* DataSharingMemberRoleEnum.OWNER */:
            return MemberRole.kOwner;
        case "former_member" /* DataSharingMemberRoleEnum.FORMER_MEMBER */:
            return MemberRole.kFormerMember;
        default:
            return MemberRole.kUnspecified;
    }
}
