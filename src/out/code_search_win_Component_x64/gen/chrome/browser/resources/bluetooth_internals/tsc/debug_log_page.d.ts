import type { BluetoothInternalsHandlerRemote, DebugLogsChangeHandlerRemote } from './bluetooth_internals.mojom-webui.js';
import { Page } from './page.js';
/**
 * Page that allows user to enable/disable debug logs.
 */
export declare class DebugLogPage extends Page {
    private debugLogsChangeHandler_;
    private inputElement_;
    private debugContainer_;
    private bluetoothInternalsHandler_;
    private btsnoopInterface_;
    constructor(bluetoothInternalsHandler: BluetoothInternalsHandlerRemote);
    setUpInput(handler: DebugLogsChangeHandlerRemote, initialInputValue: boolean): void;
    setUpBtmonButton(): void;
    setBtmonButtonText(text: string): void;
    setBtmonStatusText(text: string): void;
    onToggleChange(): void;
    onStartBtsnoopClick(): void;
    onStartBtsnoop(): Promise<void>;
    onStopBtsnoop(): Promise<void>;
    prepareBtsnoopTemplate(): Promise<void>;
}
