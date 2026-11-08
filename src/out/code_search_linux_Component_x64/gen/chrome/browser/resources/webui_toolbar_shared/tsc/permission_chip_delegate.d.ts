import type { LhsChipIdentifier } from './toolbar_ui_api_data_model.mojom-webui.js';
export interface PermissionChipDelegate {
    onChipClicked(identifier: LhsChipIdentifier, isPointer: boolean, stateToken: number): void;
    onChipPointerEntered(identifier: LhsChipIdentifier): void;
    onChipPointerExited(identifier: LhsChipIdentifier): void;
    onChipMousePressed(identifier: LhsChipIdentifier, isMiddleClick?: boolean): void;
    onChipExpandAnimationEnded(identifier: LhsChipIdentifier): void;
    onChipCollapseAnimationEnded(identifier: LhsChipIdentifier): void;
}
