// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// clang-format off
// 
// 
import { SHAREKIT_SDK_VERSION } from './dummy_data_sharing_sdk.js';
// 
// clang-format on
import '/strings.m.js';
import { ColorChangeUpdater } from '//resources/cr_components/color_change_listener/colors_css_updater.js';
import { assert } from 'chrome-untrusted://resources/js/assert.js';
import { CustomElement } from 'chrome-untrusted://resources/js/custom_element.js';
import { loadTimeData } from 'chrome-untrusted://resources/js/load_time_data.js';
import { BrowserProxyImpl } from './browser_proxy.js';
import { GroupAction, GroupActionProgress } from './data_sharing.mojom-webui.js';
import { getTemplate } from './data_sharing_app.html.js';
// Param names in loaded URL. Should match those in
// chrome/browser/ui/views/data_sharing/data_sharing_utils.cc.
var UrlQueryParams;
(function (UrlQueryParams) {
    UrlQueryParams["FLOW"] = "flow";
    UrlQueryParams["GROUP_ID"] = "group_id";
    UrlQueryParams["TOKEN_SECRET"] = "token_secret";
    UrlQueryParams["TAB_GROUP_ID"] = "tab_group_id";
    UrlQueryParams["TAB_GROUP_TITLE"] = "tab_group_title";
    UrlQueryParams["IS_DISABLED_FOR_POLICY"] = "is_disabled_for_policy";
})(UrlQueryParams || (UrlQueryParams = {}));
var FlowValues;
(function (FlowValues) {
    FlowValues["SHARE"] = "share";
    FlowValues["JOIN"] = "join";
    FlowValues["MANAGE"] = "manage";
    FlowValues["DELETE"] = "delete";
    FlowValues["LEAVE"] = "leave";
    FlowValues["CLOSE"] = "close";
})(FlowValues || (FlowValues = {}));
// Events that can be triggered within the DataSharing UI.
//
// These values are persisted to logs. Entries should not be renumbered and
// numeric values should never be reused.
// LINT.IfChange(DataSharingIntentType)
var DataSharingIntentType;
(function (DataSharingIntentType) {
    DataSharingIntentType[DataSharingIntentType["UNKNOWN"] = 0] = "UNKNOWN";
    DataSharingIntentType[DataSharingIntentType["STOP_SHARING"] = 1] = "STOP_SHARING";
    DataSharingIntentType[DataSharingIntentType["LEAVE_GROUP"] = 2] = "LEAVE_GROUP";
    DataSharingIntentType[DataSharingIntentType["REMOVE_ACCESS"] = 3] = "REMOVE_ACCESS";
    DataSharingIntentType[DataSharingIntentType["UPDATE_ACCESS"] = 4] = "UPDATE_ACCESS";
    DataSharingIntentType[DataSharingIntentType["BLOCK_USER"] = 5] = "BLOCK_USER";
    DataSharingIntentType[DataSharingIntentType["REMOVE_USER"] = 6] = "REMOVE_USER";
    DataSharingIntentType[DataSharingIntentType["REMOVE_ACCESS_TOKEN"] = 7] = "REMOVE_ACCESS_TOKEN";
    DataSharingIntentType[DataSharingIntentType["ADD_ACCESS_TOKEN"] = 8] = "ADD_ACCESS_TOKEN";
    DataSharingIntentType[DataSharingIntentType["COPY_LINK"] = 9] = "COPY_LINK";
    DataSharingIntentType[DataSharingIntentType["BLOCK_AND_LEAVE"] = 10] = "BLOCK_AND_LEAVE";
    DataSharingIntentType[DataSharingIntentType["OPEN_GROUP_DETAILS"] = 11] = "OPEN_GROUP_DETAILS";
    DataSharingIntentType[DataSharingIntentType["OPEN_LEARN_MORE_URL"] = 12] = "OPEN_LEARN_MORE_URL";
    DataSharingIntentType[DataSharingIntentType["ACCEPT_JOIN_AND_OPEN"] = 13] = "ACCEPT_JOIN_AND_OPEN";
    DataSharingIntentType[DataSharingIntentType["ABANDON_JOIN"] = 14] = "ABANDON_JOIN";
    DataSharingIntentType[DataSharingIntentType["COUNT"] = 15] = "COUNT";
})(DataSharingIntentType || (DataSharingIntentType = {}));
// LINT.ThenChange(//tools/metrics/histograms/metadata/data_sharing/enums.xml:DataSharingIntentType)
var ProgressType;
(function (ProgressType) {
    ProgressType["UNKNOWN"] = "Unknown";
    ProgressType["STARTED"] = "Started";
    ProgressType["FAILED"] = "Failed";
    ProgressType["SUCCEEDED"] = "Succeeded";
})(ProgressType || (ProgressType = {}));
function toMojomGroupAction(intent) {
    switch (intent) {
        case 16 /* LoggingIntent.DELETE_GROUP */:
            return GroupAction.kDeleteGroup;
        case 2 /* LoggingIntent.LEAVE_GROUP */:
            return GroupAction.kLeaveGroup;
        case 13 /* LoggingIntent.ACCEPT_JOIN_AND_OPEN */:
            return GroupAction.kJoinGroup;
        case 1 /* LoggingIntent.STOP_SHARING */:
            return GroupAction.kStopSharing;
        default:
            return GroupAction.kUnknown;
    }
}
function toMojomGroupActionProgress(progress) {
    switch (progress) {
        case 1 /* Progress.STARTED */:
            return GroupActionProgress.kStarted;
        case 3 /* Progress.SUCCEEDED */:
            return GroupActionProgress.kSuccess;
        case 2 /* Progress.FAILED */:
            return GroupActionProgress.kFailed;
        default:
            return GroupActionProgress.kUnknown;
    }
}
function getGroupOwnerName(params) {
    for (const member of params.group.members) {
        if (member.role === "owner" /* DataSharingMemberRoleEnum.OWNER */) {
            return member.name;
        }
    }
    return '';
}
function getGroupOwnerEmail(params) {
    for (const member of params.group.members) {
        if (member.role === "owner" /* DataSharingMemberRoleEnum.OWNER */) {
            return member.email;
        }
    }
    return '';
}
function getTabGroupName() {
    const currentUrl = urlForTesting ? urlForTesting : window.location.href;
    const params = new URL(currentUrl).searchParams;
    return params.get(UrlQueryParams.TAB_GROUP_TITLE) || '';
}
/** */
export function createTranslationMap() {
    return {
        static: {
            [0 /* StaticMessageKey.CANCEL_LABEL */]: loadTimeData.getString('cancel'),
            [1 /* StaticMessageKey.CANCEL */]: loadTimeData.getString('cancel'),
            [2 /* StaticMessageKey.CLOSE */]: loadTimeData.getString('close'),
            [4 /* StaticMessageKey.BACK */]: loadTimeData.getString('back'),
            [3 /* StaticMessageKey.LOADING */]: loadTimeData.getString('loading'),
            [6 /* StaticMessageKey.SOMETHING_WENT_WRONG */]: loadTimeData.getString('somethingWrong'),
            [7 /* StaticMessageKey.FAIL_TO_UPDATE_ACCESS */]: loadTimeData.getString('somethingWrongBody'),
            [8 /* StaticMessageKey.THERE_WAS_AN_ERROR */]: loadTimeData.getString('somethingWrongBody'),
            [9 /* StaticMessageKey.THERE_WAS_AN_ISSUE */]: loadTimeData.getString('somethingWrongBody'),
            [10 /* StaticMessageKey.MORE_OPTIONS */]: loadTimeData.getString('moreOptions'),
            [11 /* StaticMessageKey.MORE_OPTIONS_DESCRIPTION */]: loadTimeData.getString('moreOptionsDescription'),
            /** Invite flow */
            [14 /* StaticMessageKey.COPY_LINK */]: loadTimeData.getString('copyLink'),
            [16 /* StaticMessageKey.LINK_COPY_SUCCESS */]: loadTimeData.getString('copyLinkSuccess'),
            [17 /* StaticMessageKey.LINK_COPY_FAILED */]: loadTimeData.getString('copyLinkFailed'),
            /** Join flow */
            [18 /* StaticMessageKey.JOIN_AND_OPEN_LABEL */]: loadTimeData.getString('previewDialogConfirm'),
            [21 /* StaticMessageKey.COLLECTION_LIST_TITLE */]: loadTimeData.getString('tabsInGroup'),
            /** Manage flow */
            [22 /* StaticMessageKey.ANYONE_WITH_LINK_TOGGLE_TITLE */]: loadTimeData.getString('linkJoinToggle'),
            [23 /* StaticMessageKey.ANYONE_WITH_LINK_TOGGLE_DESCRIPTION */]: loadTimeData.getString('manageShareWisely'),
            [24 /* StaticMessageKey.BLOCK_AND_LEAVE_GROUP */]: loadTimeData.getString('blockLeaveDialogTitle'),
            [25 /* StaticMessageKey.BLOCK_AND_LEAVE */]: loadTimeData.getString('blockLeaveDialogConfrim'),
            [26 /* StaticMessageKey.LEARN_ABOUT_BLOCKED_ACCOUNTS */]: loadTimeData.getString('blockLeaveLearnMore'),
            [27 /* StaticMessageKey.GOT_IT */]: loadTimeData.getString('gotIt'),
            [28 /* StaticMessageKey.ABUSE_BANNER_CONTENT */]: loadTimeData.getString('joinWarning'),
            [29 /* StaticMessageKey.STOP_SHARING_DIALOG_TITLE */]: loadTimeData.getString('ownerStopSharingDialogTitle'),
            [30 /* StaticMessageKey.STOP_SHARING */]: loadTimeData.getString('manageStopSharingOption'),
            [31 /* StaticMessageKey.BLOCK */]: loadTimeData.getString('block'),
            [32 /* StaticMessageKey.LEAVE_GROUP */]: loadTimeData.getString('leaveGroup'),
            [33 /* StaticMessageKey.LEAVE */]: loadTimeData.getString('leaveGroupConfirm'),
            [34 /* StaticMessageKey.LEAVE_GROUP_DIALOG_TITLE */]: loadTimeData.getString('leaveDialogTitle'),
            [35 /* StaticMessageKey.REMOVE */]: loadTimeData.getString('remove'),
            [36 /* StaticMessageKey.YOU */]: loadTimeData.getString('you'),
            [37 /* StaticMessageKey.OWNER */]: loadTimeData.getString('owner'),
            /** Chrome Specific Content */
            [12 /* StaticMessageKey.INVITE_FLOW_DESCRIPTION_CONTENT */]: loadTimeData.getString('shareGroupBody'),
            [13 /* StaticMessageKey.COPY_INVITE_LINK */]: loadTimeData.getString('copyInviteLink'),
            [19 /* StaticMessageKey.LEARN_MORE_JOIN_FLOW */]: loadTimeData.getString('learnMoreJoinFlow'),
            [15 /* StaticMessageKey.LEARN_ABOUT_SHARED_TAB_GROUPS */]: loadTimeData.getString('learnMoreSharedTabGroup'),
            [20 /* StaticMessageKey.TAB_GROUP_DETAILS */]: loadTimeData.getString('tabGroupDetailsTitle'),
            [38 /* StaticMessageKey.PEOPLE_WITH_ACCESS */]: loadTimeData.getString('peopleWithAccess'),
            [39 /* StaticMessageKey.PEOPLE_WITH_ACCESS_SUBTITLE_MANAGE_FLOW */]: loadTimeData.getString('peopleWithAccessSubtitleManageFlow'),
            [5 /* StaticMessageKey.ERROR_DIALOG_CONTENT */]: loadTimeData.getString('errorDialogContent'),
            [40 /* StaticMessageKey.GROUP_FULL_TITLE */]: loadTimeData.getString('groupFull'),
            [41 /* StaticMessageKey.GROUP_FULL_CONTENT */]: loadTimeData.getString('groupFullBody'),
            [44 /* StaticMessageKey.ACTIVITY_LOGS */]: loadTimeData.getString('activityLog'),
            [42 /* StaticMessageKey.YOUR_GROUP_IS_FULL_DESCRIPTION */]: loadTimeData.getString('ownerCannotShare'),
            [45 /* StaticMessageKey.CLOSE_FLOW_HEADER */]: loadTimeData.getString('deleteLastDialogHeader'),
            [46 /* StaticMessageKey.KEEP_GROUP */]: loadTimeData.getString('keepGroup'),
            [47 /* StaticMessageKey.DELETE_GROUP */]: loadTimeData.getString('deleteGroup'),
            [48 /* StaticMessageKey.DELETE_FLOW_HEADER */]: loadTimeData.getString('deleteFlowHeader'),
            [49 /* StaticMessageKey.DELETE */]: loadTimeData.getString('delete'),
            [43 /* StaticMessageKey.SHARING_DISABLED_DESCRIPTION */]: loadTimeData.getString('sharingDisabledDescription'),
        },
        dynamic: {
            /** Invite flow */
            [1 /* DynamicMessageKey.GET_MEMBERSHIP_PREVIEW_OWNER_LABEL */]: (params) => loadTimeData.getStringF('shareGroupShareAs', params.loggedInUser.name),
            /** Join flow */
            [4 /* DynamicMessageKey.GET_MEMBERSHIP_PREVIEW_INVITEE_LABEL */]: (params) => loadTimeData.getStringF('joinGroupJoinAs', params.loggedInUser.name),
            [5 /* DynamicMessageKey.GET_GROUP_PREVIEW_MEMBER_DESCRIPTION */]: (params) => loadTimeData.getStringF(params.group.members.length <= 1 ? 'memberCountSingular' :
                'memberCountPlural', params.group.members.length),
            [6 /* DynamicMessageKey.GET_GROUP_PREVIEW_TAB_DESCRIPTION */]: (params) => loadTimeData.getStringF(params.payload.mediaCount <= 1 ? 'tabCountSingular' :
                'tabCountPlural', params.payload.mediaCount),
            [7 /* DynamicMessageKey.GET_GROUP_PREVIEW_ARIA_LABEL */]: (params) => loadTimeData.getStringF('getGroupPreviewAriaLabel', params.group.name) +
                ' ' +
                loadTimeData.getStringF(params.group.members.length <= 1 ? 'memberCountSingular' :
                    'memberCountPlural', params.group.members.length) +
                ' ' +
                loadTimeData.getStringF(params.payload.mediaCount <= 1 ? 'tabCountSingular' :
                    'tabCountPlural', params.payload.mediaCount),
            /** Manage flow */
            [9 /* DynamicMessageKey.GET_STOP_SHARING_DIALOG_CONTENT */]: () => loadTimeData.getStringF('ownerStopSharingDialogBody', getTabGroupName()),
            [10 /* DynamicMessageKey.GET_REMOVE_DIALOG_TITLE */]: (params) => loadTimeData.getStringF('ownerRemoveMemberDialogTitle', params.displayedUser.name),
            [11 /* DynamicMessageKey.GET_REMOVE_DIALOG_CONTENT */]: (params) => loadTimeData.getStringF('ownerRemoveMemberDialogBody', params.displayedUser.name, params.displayedUser.email, getTabGroupName()),
            [12 /* DynamicMessageKey.GET_LEAVE_GROUP_DIALOG_CONTENT */]: () => loadTimeData.getStringF('leaveDialogBody', getTabGroupName()),
            [13 /* DynamicMessageKey.GET_BLOCK_DIALOG_TITLE */]: (params) => loadTimeData.getStringF('blockDialogTitle', params.displayedUser.name),
            [14 /* DynamicMessageKey.GET_BLOCK_DIALOG_CONTENT */]: (params) => loadTimeData.getStringF('blockDialogBody', params.displayedUser.name, params.displayedUser.email, getTabGroupName()),
            [15 /* DynamicMessageKey.GET_BLOCK_AND_LEAVE_DIALOG_CONTENT */]: (params) => loadTimeData.getStringF('blockLeaveDialogBody', getTabGroupName(), params.displayedUser.name, params.displayedUser.email),
            /** Chrome Specific Content */
            [0 /* DynamicMessageKey.GET_INVITE_FLOW_HEADER */]: () => loadTimeData.getStringF('shareGroupTitle', getTabGroupName()),
            [2 /* DynamicMessageKey.GET_JOIN_FLOW_DESCRIPTION_HEADER */]: (params) => {
                const otherMemberCount = params.group.members.length - 1;
                return loadTimeData.getStringF(otherMemberCount <= 0 ?
                    'previewDialogTitleZero' :
                    (otherMemberCount === 1 ? 'previewDialogTitleSingular' :
                        'previewDialogTitlePlural'), getGroupOwnerName(params), otherMemberCount);
            },
            [3 /* DynamicMessageKey.GET_JOIN_FLOW_DESCRIPTION_CONTENT */]: (params) => loadTimeData.getStringF('previewDialogBody', getGroupOwnerName(params), getGroupOwnerEmail(params)),
            [8 /* DynamicMessageKey.GET_MANAGE_FLOW_HEADER */]: () => loadTimeData.getStringF('manageGroupTitle', getTabGroupName()),
            [16 /* DynamicMessageKey.GET_CLOSE_FLOW_DESCRIPTION_FIRST_PARAGRAPH */]: (params) => {
                if (params.loggedInUser.role === "owner" /* DataSharingMemberRoleEnum.OWNER */) {
                    return loadTimeData.getStringF('ownerDeleteLastTimeBody');
                }
                else {
                    return loadTimeData.getStringF('memberDeleteLastTimeBody');
                }
            },
            [17 /* DynamicMessageKey.GET_CLOSE_FLOW_DESCRIPTION_SECOND_PARAGRAPH */]: (params) => {
                if (params.loggedInUser.role === "owner" /* DataSharingMemberRoleEnum.OWNER */) {
                    return loadTimeData.getStringF('ownerDeleteLastTimeBody2', getTabGroupName());
                }
                else {
                    return '';
                }
            },
            [18 /* DynamicMessageKey.GET_DELETE_FLOW_DESCRIPTION_CONTENT */]: () => loadTimeData.getStringF('deleteFlowDescriptionContent', getTabGroupName()),
        },
    };
}
const learnMoreUrlMap = {
    [0 /* LearnMoreUrlType.LEARN_MORE_URL_TYPE_UNSPECIFIED */]: () => loadTimeData.getStringF('dataSharingUrl'),
    [1 /* LearnMoreUrlType.PEOPLE_WITH_ACCESS_SUBTITLE */]: () => loadTimeData.getStringF('learnMoreSharedTabGroupPageUrl'),
    [2 /* LearnMoreUrlType.DESCRIPTION_INVITE */]: () => loadTimeData.getStringF('learnMoreSharedTabGroupPageUrl'),
    [3 /* LearnMoreUrlType.DESCRIPTION_JOIN */]: () => loadTimeData.getStringF('learnMoreSharedTabGroupPageUrl'),
    [4 /* LearnMoreUrlType.BLOCK */]: () => loadTimeData.getStringF('learnAboutBlockedAccountsUrl'),
};
export class DataSharingApp extends CustomElement {
    initialized_ = false;
    dataSharingSdk_ = window.data_sharing_sdk.buildDataSharingSdk();
    browserProxy_ = BrowserProxyImpl.getInstance();
    translationMap_ = createTranslationMap();
    abandonJoin_ = false;
    successfullyJoined_ = false;
    tabGroupId_ = null;
    convertedToSharedTabGroup = false;
    static get is() {
        return 'data-sharing-app';
    }
    static get template() {
        return getTemplate();
    }
    constructor() {
        super();
        this.dataSharingSdk_.setClientVersionAndResetPeopleStore(loadTimeData.getStringF('currentClientVersion'), parseInt(SHAREKIT_SDK_VERSION));
        this.dataSharingSdk_.updateClearcut({ enabled: loadTimeData.getBoolean('metricsReportingEnabled') });
        this.browserProxy_.callbackRouter.onAccessTokenFetched.addListener((accessToken) => {
            this.dataSharingSdk_.setOauthAccessToken({ accessToken });
            if (!this.initialized_) {
                this.processUrl();
                this.browserProxy_.showUi();
                this.initialized_ = true;
            }
        });
    }
    connectedCallback() {
        ColorChangeUpdater.forDocument().start();
    }
    // Logger implementation.
    onEvent(event) {
        const intentMetricName = 'DataSharing.Intent.' + this.getProgressType(event.progress);
        chrome.metricsPrivate.recordEnumerationValue(intentMetricName, this.getDataSharingIntentType(event.intentType), DataSharingIntentType.COUNT);
        if (event.intentType === 14 /* LoggingIntent.ABANDON_JOIN */) {
            this.abandonJoin_ = true;
        }
        if (event.intentType === 1 /* LoggingIntent.STOP_SHARING */) {
            assert(this.tabGroupId_);
            if (event.progress === 1 /* Progress.STARTED */) {
                this.browserProxy_.aboutToUnShareTabGroup(this.tabGroupId_);
            }
            else if (event.progress === 3 /* Progress.SUCCEEDED */) {
                this.browserProxy_.onTabGroupUnShareComplete(this.tabGroupId_);
            }
        }
        this.browserProxy_.onGroupAction(toMojomGroupAction(event.intentType), toMojomGroupActionProgress(event.progress));
    }
    setSuccessfullyJoinedForTesting() {
        this.successfullyJoined_ = true;
    }
    getProgressType(progress) {
        switch (progress) {
            case (1 /* Progress.STARTED */):
                return ProgressType.STARTED;
            case (2 /* Progress.FAILED */):
                return ProgressType.FAILED;
            case (3 /* Progress.SUCCEEDED */):
                return ProgressType.SUCCEEDED;
            default:
                break;
        }
        return ProgressType.UNKNOWN;
    }
    getDataSharingIntentType(intent) {
        switch (intent) {
            case (1 /* LoggingIntent.STOP_SHARING */):
                return DataSharingIntentType.STOP_SHARING;
            case (2 /* LoggingIntent.LEAVE_GROUP */):
                return DataSharingIntentType.LEAVE_GROUP;
            case (3 /* LoggingIntent.REMOVE_ACCESS */):
                return DataSharingIntentType.REMOVE_ACCESS;
            case (4 /* LoggingIntent.UPDATE_ACCESS */):
                return DataSharingIntentType.UPDATE_ACCESS;
            case (5 /* LoggingIntent.BLOCK_USER */):
                return DataSharingIntentType.BLOCK_USER;
            case (6 /* LoggingIntent.REMOVE_USER */):
                return DataSharingIntentType.REMOVE_USER;
            case (7 /* LoggingIntent.REMOVE_ACCESS_TOKEN */):
                return DataSharingIntentType.REMOVE_ACCESS_TOKEN;
            case (8 /* LoggingIntent.ADD_ACCESS_TOKEN */):
                return DataSharingIntentType.ADD_ACCESS_TOKEN;
            case (9 /* LoggingIntent.COPY_LINK */):
                return DataSharingIntentType.COPY_LINK;
            case (10 /* LoggingIntent.BLOCK_AND_LEAVE */):
                return DataSharingIntentType.BLOCK_AND_LEAVE;
            case (11 /* LoggingIntent.OPEN_GROUP_DETAILS */):
                return DataSharingIntentType.OPEN_GROUP_DETAILS;
            case (12 /* LoggingIntent.OPEN_LEARN_MORE_URL */):
                return DataSharingIntentType.OPEN_LEARN_MORE_URL;
            case (13 /* LoggingIntent.ACCEPT_JOIN_AND_OPEN */):
                return DataSharingIntentType.ACCEPT_JOIN_AND_OPEN;
            case (14 /* LoggingIntent.ABANDON_JOIN */):
                return DataSharingIntentType.ABANDON_JOIN;
            default:
                break;
        }
        return DataSharingIntentType.UNKNOWN;
    }
    processUrl() {
        const currentUrl = urlForTesting ? urlForTesting : window.location.href;
        const params = new URL(currentUrl).searchParams;
        const flow = params.get(UrlQueryParams.FLOW);
        const groupId = params.get(UrlQueryParams.GROUP_ID);
        const tokenSecret = params.get(UrlQueryParams.TOKEN_SECRET);
        const tabGroupId = params.get(UrlQueryParams.TAB_GROUP_ID);
        const parent = this.getRequiredElement('#dialog-container');
        const isSharingDisabled = (params.get(UrlQueryParams.IS_DISABLED_FOR_POLICY) === 'true');
        this.tabGroupId_ = tabGroupId;
        if (flow === FlowValues.SHARE) {
            parent.classList.add('invite');
        }
        else {
            parent.classList.remove('invite');
        }
        switch (flow) {
            case FlowValues.SHARE:
                document.title =
                    loadTimeData.getStringF('shareGroupTitle', getTabGroupName());
                break;
            case FlowValues.MANAGE:
                document.title =
                    loadTimeData.getStringF('manageGroupTitle', getTabGroupName());
                break;
            case FlowValues.JOIN:
                document.title = loadTimeData.getStringF('previewA11yName');
                break;
            default:
                break;
        }
        switch (flow) {
            case FlowValues.SHARE:
                this.dataSharingSdk_
                    .runInviteFlow({
                    parent,
                    translatedMessages: this.translationMap_,
                    getShareLink: async (params) => {
                        // If the tab group is not shared before, go through
                        // makeTabGroupShared() Otherwise go through getShareLink().
                        if (!this.convertedToSharedTabGroup) {
                            const url = await this.browserProxy_.makeTabGroupShared(tabGroupId, params.groupId, params.tokenSecret);
                            if (url === undefined) {
                                this.browserProxy_.closeUi(2 /* Code.UNKNOWN */);
                                return '';
                            }
                            else {
                                this.convertedToSharedTabGroup = true;
                                return url;
                            }
                        }
                        else {
                            return this.browserProxy_.getShareLink(params.groupId, params.tokenSecret);
                        }
                    },
                    // TODO(crbug.com/376348102): Provide group name to share flow.
                    groupName: '',
                    learnMoreUrlMap,
                    logger: this,
                })
                    .then((res) => {
                    this.browserProxy_.closeUi(res.status);
                });
                break;
            case FlowValues.JOIN:
                // group_id and token_secret cannot be null for join flow.
                this.dataSharingSdk_
                    .runJoinFlow({
                    parent,
                    groupId: groupId,
                    translatedMessages: this.translationMap_,
                    tokenSecret: tokenSecret,
                    learnMoreUrlMap: learnMoreUrlMap,
                    onJoinSuccessful: () => {
                        this.successfullyJoined_ = true;
                        this.browserProxy_.handler.openTabGroup(groupId);
                        // No need to return this promise since we want the bubble to
                        // keep spinning until closed by the browser when new shared tab
                        // group is received.
                        return new Promise(() => { });
                    },
                    fetchPreviewData: () => {
                        return this.browserProxy_.getTabGroupPreview(groupId, tokenSecret);
                    },
                    logger: this,
                })
                    .then((res) => {
                    if (this.successfullyJoined_) {
                        // If user successfully joined, do nothing and keep the dialog
                        // around until the tab group is delivered by sync server.
                        return;
                    }
                    if (this.abandonJoin_) {
                        this.browserProxy_.closeUi(res.status);
                    }
                    else {
                        // If user neither successfully joined nor abandon join, there
                        // must be an error.
                        this.browserProxy_.closeUi(2 /* Code.UNKNOWN */);
                    }
                });
                break;
            case FlowValues.MANAGE:
            case FlowValues.LEAVE:
                // group_id cannot be null for manage flow.
                this.dataSharingSdk_
                    .runManageFlow({
                    parent,
                    translatedMessages: this.translationMap_,
                    groupId: groupId,
                    getShareLink: (params) => {
                        return this.browserProxy_.getShareLink(params.groupId, params.tokenSecret);
                    },
                    learnMoreUrlMap,
                    activityLogCallback: () => {
                        window.open(loadTimeData.getStringF('activityLogsUrl'), '_blank');
                    },
                    logger: this,
                    showLeaveDialogAtStartup: flow === FlowValues.LEAVE,
                    isSharingDisabled,
                })
                    .then((res) => {
                    this.browserProxy_.closeUi(res.status);
                });
                break;
            case FlowValues.DELETE:
                // group_id cannot be null for delete flow.
                this.dataSharingSdk_
                    .runDeleteFlow({
                    parent,
                    groupId: groupId,
                    translatedMessages: this.translationMap_,
                    logger: this,
                })
                    .then((res) => {
                    this.browserProxy_.closeUi(res.status);
                });
                break;
            case FlowValues.CLOSE:
                // group_id cannot be null for close flow.
                this.dataSharingSdk_
                    .runCloseFlow({
                    parent,
                    groupId: groupId,
                    translatedMessages: this.translationMap_,
                    logger: this,
                })
                    .then((res) => {
                    this.browserProxy_.closeUi(res.status);
                });
                break;
            default:
                break;
        }
    }
    static setUrlForTesting(url) {
        urlForTesting = url;
    }
}
let urlForTesting = null;
customElements.define(DataSharingApp.is, DataSharingApp);
