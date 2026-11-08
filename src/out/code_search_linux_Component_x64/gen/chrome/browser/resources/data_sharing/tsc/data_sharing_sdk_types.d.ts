export declare const enum Code {
    OK = 0,
    CANCELLED = 1,
    UNKNOWN = 2,
    INVALID_ARGUMENT = 3,
    DEADLINE_EXCEEDED = 4,
    NOT_FOUND = 5,
    ALREADY_EXISTS = 6,
    PERMISSION_DENIED = 7,
    UNAUTHENTICATED = 16,
    RESOURCE_EXHAUSTED = 8,
    FAILED_PRECONDITION = 9,
    ABORTED = 10,
    OUT_OF_RANGE = 11,
    UNIMPLEMENTED = 12,
    INTERNAL = 13,
    UNAVAILABLE = 14,
    DATA_LOSS = 15,
    DO_NOT_USE_RESERVED_FOR_FUTURE_EXPANSION_USE_DEFAULT_IN_SWITCH_INSTEAD = 20
}
export declare const enum LearnMoreUrlType {
    LEARN_MORE_URL_TYPE_UNSPECIFIED = 0,
    PEOPLE_WITH_ACCESS_SUBTITLE = 1,
    DESCRIPTION_INVITE = 2,
    DESCRIPTION_JOIN = 3,
    BLOCK = 4,
    SAVE_CHANGES_DIALOG = 5,
    GLOBAL_ACCESS = 6
}
export declare const enum ShareAction {
    COPY_LINK = 0,
    SHARE_1P = 1,
    SHARE_3P = 2
}
export declare interface DataSharingSdkResponse {
    result?: {
        shareAction?: ShareAction;
        groupId?: string;
        tokenSecret?: string;
    };
    status: Code;
}
export declare interface DataSharingSdkSitePreview {
    url: string;
    faviconUrl?: string;
}
export declare interface DataSharingSdkGetLinkParams {
    groupId: string;
    tokenSecret?: string;
}
export declare type DataSharingSdkGetLink = (params: DataSharingSdkGetLinkParams) => Promise<string>;
export declare interface Token {
    access_token: string;
}
export declare interface DataSharingSdkGroupId {
    groupId?: string;
}
export declare const enum ShareKitFlowType {
    JOIN = "join",
    INVITE = "invite",
    MANAGE = "manage"
}
export declare interface DisplayedUserData {
    name?: string;
    email?: string;
}
export declare interface DynamicMessageParams {
    displayedUser?: DisplayedUserData;
    group: {
        name: string;
        members: Array<{
            name: string;
            email: string;
            role: DataSharingMemberRole;
        }>;
    };
    loggedInUser: {
        name: string;
        email: string;
        role: DataSharingMemberRole;
    };
    payload: {
        title: string;
        description: string;
        mediaCount: number;
    };
}
export declare const enum StaticMessageKey {
    CANCEL_LABEL = 0,
    CANCEL = 1,
    CLOSE = 2,
    LOADING = 3,
    BACK = 4,
    ERROR_DIALOG_CONTENT = 5,
    SOMETHING_WENT_WRONG = 6,
    FAIL_TO_UPDATE_ACCESS = 7,
    THERE_WAS_AN_ERROR = 8,
    THERE_WAS_AN_ISSUE = 9,
    MORE_OPTIONS = 10,
    MORE_OPTIONS_DESCRIPTION = 11,
    INVITE_FLOW_DESCRIPTION_CONTENT = 12,
    COPY_INVITE_LINK = 13,
    COPY_LINK = 14,
    LEARN_ABOUT_SHARED_TAB_GROUPS = 15,
    LINK_COPY_SUCCESS = 16,
    LINK_COPY_FAILED = 17,
    JOIN_AND_OPEN_LABEL = 18,
    LEARN_MORE_JOIN_FLOW = 19,
    TAB_GROUP_DETAILS = 20,
    COLLECTION_LIST_TITLE = 21,
    ANYONE_WITH_LINK_TOGGLE_TITLE = 22,
    ANYONE_WITH_LINK_TOGGLE_DESCRIPTION = 23,
    BLOCK_AND_LEAVE_GROUP = 24,
    BLOCK_AND_LEAVE = 25,
    LEARN_ABOUT_BLOCKED_ACCOUNTS = 26,
    GOT_IT = 27,
    ABUSE_BANNER_CONTENT = 28,
    STOP_SHARING_DIALOG_TITLE = 29,
    STOP_SHARING = 30,
    BLOCK = 31,
    LEAVE_GROUP = 32,
    LEAVE = 33,
    LEAVE_GROUP_DIALOG_TITLE = 34,
    REMOVE = 35,
    YOU = 36,
    OWNER = 37,
    PEOPLE_WITH_ACCESS = 38,
    PEOPLE_WITH_ACCESS_SUBTITLE_MANAGE_FLOW = 39,
    GROUP_FULL_TITLE = 40,
    GROUP_FULL_CONTENT = 41,
    YOUR_GROUP_IS_FULL_DESCRIPTION = 42,
    SHARING_DISABLED_DESCRIPTION = 43,
    ACTIVITY_LOGS = 44,
    CLOSE_FLOW_HEADER = 45,
    KEEP_GROUP = 46,
    DELETE_GROUP = 47,
    DELETE_FLOW_HEADER = 48,
    DELETE = 49
}
export declare const enum DynamicMessageKey {
    GET_INVITE_FLOW_HEADER = 0,
    GET_MEMBERSHIP_PREVIEW_OWNER_LABEL = 1,
    GET_JOIN_FLOW_DESCRIPTION_HEADER = 2,
    GET_JOIN_FLOW_DESCRIPTION_CONTENT = 3,
    GET_MEMBERSHIP_PREVIEW_INVITEE_LABEL = 4,
    GET_GROUP_PREVIEW_MEMBER_DESCRIPTION = 5,
    GET_GROUP_PREVIEW_TAB_DESCRIPTION = 6,
    GET_GROUP_PREVIEW_ARIA_LABEL = 7,
    GET_MANAGE_FLOW_HEADER = 8,
    GET_STOP_SHARING_DIALOG_CONTENT = 9,
    GET_REMOVE_DIALOG_TITLE = 10,
    GET_REMOVE_DIALOG_CONTENT = 11,
    GET_LEAVE_GROUP_DIALOG_CONTENT = 12,
    GET_BLOCK_DIALOG_TITLE = 13,
    GET_BLOCK_DIALOG_CONTENT = 14,
    GET_BLOCK_AND_LEAVE_DIALOG_CONTENT = 15,
    GET_CLOSE_FLOW_DESCRIPTION_FIRST_PARAGRAPH = 16,
    GET_CLOSE_FLOW_DESCRIPTION_SECOND_PARAGRAPH = 17,
    GET_DELETE_FLOW_DESCRIPTION_CONTENT = 18
}
export declare interface TranslationMap {
    static: {
        [key in StaticMessageKey]: string;
    };
    dynamic: {
        [key in DynamicMessageKey]: (params: DynamicMessageParams) => string;
    };
}
export declare interface DataSharingSdkGroupData {
    groupId: string;
    members: DataSharingSdkGroupMember[];
    formerMembers: DataSharingSdkGroupMember[];
    displayName?: string;
    accessToken?: string;
    consistencyToken?: string;
    serializedCollaborationGroupMetadata?: string;
}
export declare type DataSharingMemberRole = 'unknown' | 'member' | 'owner' | 'invitee' | 'former_member';
export declare const enum DataSharingMemberRoleEnum {
    UNKNOWN = "unknown",
    MEMBER = "member",
    OWNER = "owner",
    INVITEE = "invitee",
    FORMER_MEMBER = "former_member"
}
export declare interface DataSharingSdkGroupMember {
    focusObfuscatedGaiaId: string;
    displayName: string;
    email: string;
    role: DataSharingMemberRole;
    avatarUrl: string;
    givenName: string;
    createdAtTimeMs: number;
    lastUpdatedAtTimeMs: number;
}
export declare interface CreateGroupParams {
    displayName: string;
    serializedCollaborationGroupMetadata?: string;
}
export declare interface CreateGroupResult {
    groupData: DataSharingSdkGroupData;
}
export declare interface ReadGroupParams {
    groupId: string;
    consistencyToken?: string;
}
export declare interface ReadGroupOptions {
    accessToken?: string;
}
export declare interface ReadGroupResult {
    groupData: DataSharingSdkGroupData;
}
export declare interface ReadGroupsParams {
    params: ReadGroupParams[];
}
export declare interface ReadGroupsResult {
    groupData: DataSharingSdkGroupData[];
}
export declare interface AddMemberParams {
    groupId: string;
    accessToken?: string;
}
export declare interface LeaveGroupParams {
    groupId: string;
}
export declare interface DeleteGroupParams {
    groupId: string;
}
export declare interface AddAccessTokenParams {
    groupId: string;
}
export declare interface AddAccessTokenResult {
    groupData: DataSharingSdkGroupData;
}
export declare const enum LoggingIntent {
    UNKNOWN = 0,
    STOP_SHARING = 1,
    LEAVE_GROUP = 2,
    REMOVE_ACCESS = 3,
    UPDATE_ACCESS = 4,
    BLOCK_USER = 5,
    REMOVE_USER = 6,
    REMOVE_ACCESS_TOKEN = 7,
    ADD_ACCESS_TOKEN = 8,
    COPY_LINK = 9,
    BLOCK_AND_LEAVE = 10,
    OPEN_GROUP_DETAILS = 11,
    OPEN_LEARN_MORE_URL = 12,
    ACCEPT_JOIN_AND_OPEN = 13,
    ABANDON_JOIN = 14,
    KEEP_GROUP = 15,
    DELETE_GROUP = 16
}
export declare const enum Progress {
    UNKNOWN = 0,
    STARTED = 1,
    FAILED = 2,
    SUCCEEDED = 3
}
export declare interface LoggingEvent {
    intentType: LoggingIntent;
    progress: Progress;
}
export declare interface Logger {
    onEvent(event: LoggingEvent): void;
}
export declare interface RunJoinFlowParams extends DataSharingSdkGroupId {
    tokenSecret: string;
    parent: HTMLElement;
    translatedMessages: TranslationMap;
    learnMoreUrlMap: {
        [type in LearnMoreUrlType]?: () => string;
    };
    onJoinSuccessful: () => void | Promise<void>;
    fetchPreviewData: () => Promise<DataSharingSdkSitePreview[]>;
    logger?: Logger;
}
export declare interface RunInviteFlowParams {
    parent: HTMLElement;
    getShareLink: DataSharingSdkGetLink;
    groupName: string;
    translatedMessages: TranslationMap;
    learnMoreUrlMap: {
        [type in LearnMoreUrlType]?: () => string;
    };
    logger?: Logger;
    serializedCollaborationGroupMetadata?: string;
}
export declare interface RunManageFlowParams extends DataSharingSdkGroupId {
    parent: HTMLElement;
    getShareLink: DataSharingSdkGetLink;
    translatedMessages: TranslationMap;
    learnMoreUrlMap: {
        [type in LearnMoreUrlType]?: () => string;
    };
    activityLogCallback?: () => void;
    logger?: Logger;
    showLeaveDialogAtStartup?: boolean;
    isSharingDisabled?: boolean;
}
export declare interface RunCloseFlowParams extends DataSharingSdkGroupId {
    parent: HTMLElement;
    translatedMessages: TranslationMap;
    logger?: Logger;
}
export declare interface RunDeleteFlowParams extends DataSharingSdkGroupId {
    parent: HTMLElement;
    translatedMessages: TranslationMap;
    logger?: Logger;
}
export declare interface DataSharingSdk {
    createGroup(params: CreateGroupParams): Promise<{
        result?: CreateGroupResult;
        status: Code;
    }>;
    readGroup(params: ReadGroupParams, options?: ReadGroupOptions): Promise<{
        result?: ReadGroupResult;
        status: Code;
    }>;
    readGroups(params: ReadGroupsParams): Promise<{
        result?: ReadGroupsResult;
        status: Code;
    }>;
    addMember(params: AddMemberParams): Promise<{
        status: Code;
    }>;
    leaveGroup(params: LeaveGroupParams): Promise<{
        status: Code;
    }>;
    deleteGroup(params: DeleteGroupParams): Promise<{
        status: Code;
    }>;
    addAccessToken(params: AddAccessTokenParams): Promise<{
        result?: AddAccessTokenResult;
        status: Code;
    }>;
    runJoinFlow(params: RunJoinFlowParams): Promise<DataSharingSdkResponse>;
    runInviteFlow(params: RunInviteFlowParams): Promise<DataSharingSdkResponse>;
    runManageFlow(params: RunManageFlowParams): Promise<DataSharingSdkResponse>;
    runCloseFlow(params: RunCloseFlowParams): Promise<DataSharingSdkResponse>;
    runDeleteFlow(params: RunDeleteFlowParams): Promise<DataSharingSdkResponse>;
    setOauthAccessToken(params: {
        accessToken: string;
    }): void;
    updateClearcut(params: {
        enabled: boolean;
    }): void;
    setClientVersionAndResetPeopleStore(versionString: string, baselineCl: number): void;
}
declare global {
    interface Window {
        gapi: {
            auth: {
                getToken: () => Token;
            };
        };
        data_sharing_sdk: {
            buildDataSharingSdk(): DataSharingSdk;
        };
    }
}
