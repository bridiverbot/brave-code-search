import type { PathCommands } from './common.js';
import { type LineStyle } from './highlight_common.js';
export interface AnchorTargetHighlight {
    anchorBorder: PathCommands;
    name?: string;
}
export interface PositionAreaGridHighlight {
    gridBorder?: PathCommands;
    gridLines?: PathCommands[];
    activeRegion?: PathCommands;
}
export interface AnchorHighlightConfig {
    imcbBorder?: LineStyle;
    imcbFillColor?: string;
    insetsFillColor?: string;
    insetsHatchColor?: string;
    anchorBorder?: LineStyle;
    anchorFillColor?: string;
    showPositionAreaGrid?: boolean;
    positionAreaGridLineColor?: LineStyle;
    positionAreaActiveRegionColor?: string;
}
export interface AnchorHighlight {
    imcbBorder: PathCommands;
    containingBlockBorder?: PathCommands;
    anchorTargets?: AnchorTargetHighlight[];
    positionAreaGrid?: PositionAreaGridHighlight;
    imcbHighlightConfig: AnchorHighlightConfig;
}
export declare function drawAnchorHighlight(highlight: AnchorHighlight, context: CanvasRenderingContext2D, emulationScaleFactor: number, canvasWidth?: number, canvasHeight?: number): void;
