/**
 * @fileoverview Types for objects sent from C++ to chrome://policy/logs.
 */
/**
 * The type of the version info result object. The definition is based on
 * chrome/browser/ui/webui/policy/policy_ui_handler.cc: GetVersionInfo()
 */
export interface VersionInfo {
    version: string;
    revision: string;
    deviceOs: string;
    variations: string[];
}
