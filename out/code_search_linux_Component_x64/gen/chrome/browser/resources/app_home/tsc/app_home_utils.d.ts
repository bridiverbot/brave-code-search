export declare enum AppHomeUserAction {
    APP_HOME_INIT = "AppHome_NavigationComplete",
    CONTEXT_MENU_TRIGGERED = "AppHome_CustomContextMenuTriggered",
    OPEN_IN_WINDOW_CHECKED = "AppHome_OpenInWindowChecked",
    OPEN_IN_WINDOW_UNCHECKED = "AppHome_OpenInWindowUnchecked",
    LAUNCH_AT_STARTUP_CHECKED = "AppHome_LaunchAtStartupChecked",
    LAUNCH_AT_STARTUP_UNCHECKED = "AppHome_LaunchAtStartupUnchecked",
    CREATE_SHORTCUT = "AppHome_CreateShortcut",
    INSTALL_APP_LOCALLY = "AppHome_InstallAppLocally",
    UNINSTALL = "AppHome_Uninstall",
    OPEN_APP_SETTINGS = "AppHome_OpenAppSettings",
    LAUNCH_WEB_APP = "AppHome_LaunchApp",
    LAUNCH_DEPRECATED_APP = "AppHome_LaunchDeprecatedApp"
}
export declare function recordUserAction(metricName: AppHomeUserAction): void;
