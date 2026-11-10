/**
 * @fileoverview Utility functions and enums for password sharing metrics.
 */
/**
 * These values are persisted to logs. Entries should not be renumbered and
 * numeric values should never be reused.
 */
export declare enum PasswordSharingActions {
    PASSWORD_DETAILS_SHARE_BUTTON_CLICKED = 0,
    NOT_FAMILY_MEMBER_GOT_IT_CLICKED = 1,
    NOT_FAMILY_MEMBER_CREATE_FAMILY_CLICKED = 2,
    NO_OTHER_FAMILY_MEMBERS_GOT_IT_CLICKED = 3,
    NO_OTHER_FAMILY_MEMBERS_INVITE_LINK_CLICKED = 4,
    ERROR_DIALOG_TRY_AGAIN_CLICKED = 5,
    ERROR_DIALOG_CANCELED = 6,
    FAMILY_PICKER_SHARE_WITH_ONE_MEMBER = 7,
    FAMILY_PICKER_SHARE_WITH_MULTIPLE_MEMBERS = 8,
    FAMILY_PICKER_CANCELED = 9,
    FAMILY_PICKER_VIEW_FAMILY_CLICKED = 10,
    CONFIRMATION_DIALOG_SHARING_CANCELED = 11,
    CONFIRMATION_DIALOG_CHANGE_PASSWORD_CLICKED = 13,
    DIALOG_HEADER_HELP_ICON_BUTTON_CLICKED = 14,
    FAMILY_PICKER_OPENED = 15,
    COUNT = 16
}
/**
 * This should be kept in sync with the enum in
 * components/password_manager/core/browser/password_manager_metrics_util.h.
 * These values are persisted to logs. Entries should not be renumbered and
 * numeric values should never be reused.
 * @enum {number}
 */
export declare enum MoveToAccountStoreTrigger {
    SUCCESSFUL_LOGIN_WITH_PROFILE_STORE_PASSWORD = 0,
    EXPLICITLY_TRIGGERED_IN_SETTINGS = 1,
    EXPLICITLY_TRIGGERED_FOR_MULTIPLE_PASSWORDS_IN_SETTINGS = 2,
    USER_OPTED_IN_AFTER_SAVING_LOCALLY = 3,
    EXPLICITLY_TRIGGERED_FOR_SINGLE_PASSWORD_IN_DETAILS_IN_SETTINGS = 4,
    COUNT = 5
}
export declare function recordPasswordSharingInteraction(interaction: PasswordSharingActions): void;
export declare function recordMoveToAccountStoreOffered(trigger: MoveToAccountStoreTrigger): void;
export declare function recordMoveToAccountStoreAccepted(trigger: MoveToAccountStoreTrigger): void;
