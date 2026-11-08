import './diagnose_info_table.js';
import { CustomElement } from '//resources/js/custom_element.js';
import type { AccessPointData, GeolocationDiagnostics, NetworkLocationDiagnostics, NetworkLocationResponse, PositionCacheDiagnostics, WifiPollingPolicyDiagnostics } from './geolocation_internals.mojom-webui.js';
export declare const PROVIDER_STATE_TABLE_ID = "provider-state-table";
export declare const LOCATION_PROVIDER_MANAGER_MODE_TABLE_ID = "location-provider-manager-mode-table";
export declare const WATCH_TABLE_ID = "watch-position-table";
export declare const WIFI_DATA_TABLE_ID = "wifi-data-table";
export declare const POSITION_CACHE_TABLE_ID = "position-cache-table";
export declare const WIFI_POLLING_POLICY_TABLE_ID = "wifi-polling-policy-table";
export declare const LAST_NETWORK_REQUEST_TABLE_ID = "last-network-request-table";
export declare const LAST_NETWORK_RESPONSE_TABLE_ID = "last-network-response-table";
export declare class DiagnoseInfoViewElement extends CustomElement {
    static get is(): string;
    static get template(): string | TrustedHTML;
    watchPositionSuccess: (position: GeolocationPosition) => void;
    watchPositionError: (error: GeolocationPositionError) => void;
    private providerStateTable_;
    private locationProviderManagerModeTable_;
    private wifiDataTable_;
    private positionCacheTable_;
    private watchPositionTable_;
    private wifiPollingPolicyTable_;
    private lastNetworkRequestTable_;
    private lastNetworkResponseTable_;
    constructor();
    updateDiagnosticsTables(data: GeolocationDiagnostics): void;
    updateLastNetworkRequestTable(request: AccessPointData[]): void;
    updateLastNetworkResponseTable(response: NetworkLocationResponse | null): void;
    updateProviderState(providerState: number): void;
    updateLocationProviderManagerMode(locationProviderManagerMode: number | null): void;
    accessPointDataToRecordArray(data: AccessPointData[]): Record<string, string>[];
    updateNetworkLocationDiagnostics(networkLocationDiagnostics: NetworkLocationDiagnostics | null): void;
    updatePositionCacheDiagnostics(positionCacheDiagnostics: PositionCacheDiagnostics | null): void;
    updateWatchPositionTable(data: Record<string, string>): void;
    updateWifiPollingPolicyTable(data: WifiPollingPolicyDiagnostics | null): void;
    updateLastNetworkRequest(request: AccessPointData[]): void;
    updateLastNetworkResponse(response: NetworkLocationResponse | null): void;
    outputTables(): Record<string, Array<Record<string, Array<Record<string, string>>>>>;
}
declare global {
    interface HTMLElementTagNameMap {
        'diagnose-info-view': DiagnoseInfoViewElement;
    }
}
