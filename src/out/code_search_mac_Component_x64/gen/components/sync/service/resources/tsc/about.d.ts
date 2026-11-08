interface TypeStatus {
    message: number;
    name: string;
    num_entries: number;
    num_live: number;
    state: string;
    status: string;
}
interface Detail {
    title: string;
    is_sensitive: boolean;
    data: Data[];
}
interface Data {
    stat_name: string;
    stat_value: string;
    stat_status: string;
}
interface AboutInfo {
    details: Detail[];
    type_status?: TypeStatus[];
    actionable_error_detected: boolean;
    actionable_error?: Data[];
    unrecoverable_error_detected: boolean;
    unrecoverable_error_message?: string;
    allow_enabling_sync_the_feature: boolean;
}
export declare let aboutInfo: AboutInfo;
export declare function getAboutInfoForTest(): AboutInfo;
export {};
