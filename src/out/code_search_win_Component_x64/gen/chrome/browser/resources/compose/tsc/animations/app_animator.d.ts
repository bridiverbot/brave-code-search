import { Animator } from './animator.js';
export declare class ComposeAppAnimator extends Animator {
    transitionOutSubmitFooter(bodyHeight: number, footerHeight: number): Animation[];
    transitionToFirstRun(): Animation[];
    transitionToInput(): Animation[];
    transitionInDialog(): Animation[][];
    transitionInLoading(): Animation[];
    transitionFromEditingToLoading(bodyHeight: number): Animation[];
    transitionFromLoadingToCompleteResult(loadingHeight: number): Animation[];
    transitionFromPartialToCompleteResult(): Animation[];
    transitionFromResultToLoading(bodyHeight: number, resultsHeight: number): Animation[];
    transitionFromResultToEditing(resultContainerHeight: number): Animation[];
    transitionFromEditingToResult(resultContainerHeight: number): Animation[];
}
