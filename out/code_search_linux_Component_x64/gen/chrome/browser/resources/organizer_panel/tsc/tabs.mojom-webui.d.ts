import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
export declare const TabAlertStateSpec: {
    $: mojo.internal.MojomType;
};
export declare enum TabAlertState {
    MIN_VALUE = 0,
    MAX_VALUE = 19,
    kNone = 0,
    kAudioMuting = 1,
    kAudioRecording = 2,
    kAudioPlaying = 3,
    kBluetoothConnected = 4,
    kBluetoothScanActive = 5,
    kDesktopCapturing = 6,
    kActorAccessing = 7,
    kActorWaitingOnUser = 8,
    kGlicAccessing = 9,
    kGlicSharing = 10,
    kAiModeSharing = 11,
    kHidConnected = 12,
    kMediaRecording = 13,
    kPipPlaying = 14,
    kSerialConnected = 15,
    kTabCapturing = 16,
    kUsbConnected = 17,
    kVideoRecording = 18,
    kVrPresentingInHeadset = 19
}
export declare const TabNetworkStateSpec: {
    $: mojo.internal.MojomType;
};
export declare enum TabNetworkState {
    MIN_VALUE = 0,
    MAX_VALUE = 3,
    kNone = 0,
    kWaiting = 1,
    kLoading = 2,
    kError = 3
}
