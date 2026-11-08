import type { AddAccessTokenParams, AddAccessTokenResult, AddMemberParams, CreateGroupParams, CreateGroupResult, DataSharingSdk, DataSharingSdkResponse, DeleteGroupParams, LeaveGroupParams, ReadGroupOptions, ReadGroupParams, ReadGroupResult, ReadGroupsParams, ReadGroupsResult, RunCloseFlowParams, RunDeleteFlowParams, RunInviteFlowParams, RunJoinFlowParams, RunManageFlowParams } from './data_sharing_sdk_types.js';
import { Code } from './data_sharing_sdk_types.js';
export declare const SHAREKIT_SDK_VERSION = "42";
export declare function buildDataSharingSdk(): DataSharingSdk;
export declare class DataSharingSdkImpl implements DataSharingSdk {
    createGroup(_params: CreateGroupParams): Promise<{
        result?: CreateGroupResult;
        status: Code;
    }>;
    readGroup(_param: ReadGroupParams, _options: ReadGroupOptions): Promise<{
        result?: ReadGroupResult;
        status: Code;
    }>;
    readGroups(_params: ReadGroupsParams): Promise<{
        result?: ReadGroupsResult;
        status: Code;
    }>;
    addMember(_params: AddMemberParams): Promise<{
        status: Code;
    }>;
    deleteGroup(_params: DeleteGroupParams): Promise<{
        status: Code;
    }>;
    leaveGroup(_params: LeaveGroupParams): Promise<{
        status: Code;
    }>;
    addAccessToken(_params: AddAccessTokenParams): Promise<{
        result?: AddAccessTokenResult;
        status: Code;
    }>;
    runJoinFlow(_params: RunJoinFlowParams): Promise<DataSharingSdkResponse>;
    runInviteFlow(_params: RunInviteFlowParams): Promise<DataSharingSdkResponse>;
    runManageFlow(_params: RunManageFlowParams): Promise<DataSharingSdkResponse>;
    runCloseFlow(_params: RunCloseFlowParams): Promise<DataSharingSdkResponse>;
    runDeleteFlow(_params: RunDeleteFlowParams): Promise<DataSharingSdkResponse>;
    setOauthAccessToken(_params: {
        accessToken: string;
    }): void;
    updateClearcut(_params: {
        enabled: boolean;
    }): void;
    setClientVersionAndResetPeopleStore(_versionString: string, _baselineCl: number): void;
    static getInstance(): DataSharingSdk;
    static setInstance(obj: DataSharingSdk): void;
}
