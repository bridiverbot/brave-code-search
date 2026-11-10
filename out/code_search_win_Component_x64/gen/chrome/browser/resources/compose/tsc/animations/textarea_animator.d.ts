import { Animator } from './animator.js';
export declare class ComposeTextareaAnimator extends Animator {
    transitionToEditable(): Animation[];
    transitionToEditing(bodyHeight: number): Animation[];
    transitionToResult(bodyHeight: number): Animation[];
    transitionToReadonly(fromHeight?: number): Animation[];
}
