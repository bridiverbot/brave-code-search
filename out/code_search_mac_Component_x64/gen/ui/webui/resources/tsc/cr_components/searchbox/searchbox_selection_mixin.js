// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { KeywordType, SelectionDirection, SelectionLineState, SelectionStep } from '//resources/mojo/components/omnibox/browser/searchbox.mojom-webui.js';
import { kDefaultSelection } from './searchbox_match.js';
export function selectionsEqual(a, b) {
    return a.line === b.line && a.state === b.state &&
        a.actionIndex === b.actionIndex;
}
export function selectionToString(s) {
    return `{${s.line},${s.state},${s.actionIndex}}`;
}
export function selectionIsNativelySupported(s) {
    return s.state !== SelectionLineState.kFocusedButtonContextEntrypoint &&
        s.state !== SelectionLineState.kFocusedButtonVoiceSearch &&
        s.state !== SelectionLineState.kFocusedButtonLensSearch &&
        s.state !== SelectionLineState.kFocusedButtonContextualChip;
}
function findSelectionIndex(selections, target) {
    let index = selections.findIndex(s => selectionsEqual(target, s));
    if (index < 0 && target.state === SelectionLineState.kKeywordMode) {
        index = selections.findIndex(s => selectionsEqual({ ...target, state: SelectionLineState.kNormal }, s));
    }
    if (index < 0 && target.state === SelectionLineState.kNormal) {
        index = selections.findIndex(s => selectionsEqual({ ...target, state: SelectionLineState.kKeywordMode }, s));
    }
    return index;
}
function getSelectionsForMatch(match, matchIndex) {
    if (match.isHidden && !match.allowedToBeDefaultMatch) {
        return [];
    }
    const selections = [{
            line: matchIndex,
            state: match.keywordModel?.type === KeywordType.kInstant ?
                SelectionLineState.kKeywordMode :
                SelectionLineState.kNormal,
            actionIndex: 0,
        }];
    if (match.keywordModel?.type === KeywordType.kChip) {
        selections.push({
            line: matchIndex,
            state: SelectionLineState.kKeywordMode,
            actionIndex: 0,
        });
    }
    if (match.actions) {
        match.actions.forEach((_, actionIndex) => {
            selections.push({
                line: matchIndex,
                state: SelectionLineState.kFocusedButtonAction,
                actionIndex: actionIndex,
            });
        });
    }
    if (match.supportsDeletion) {
        selections.push({
            line: matchIndex,
            state: SelectionLineState.kFocusedButtonRemoveSuggestion,
            actionIndex: 0,
        });
    }
    return selections;
}
export function getMatchSelections(result) {
    if (!result) {
        return [];
    }
    return result.matches.flatMap((match, matchIndex) => getSelectionsForMatch(match, matchIndex));
}
export const SearchboxSelectionMixin = (superClass) => {
    class SearchboxSelectionMixin extends superClass {
        selection_ = kDefaultSelection;
        get isAimButtonVisible() {
            return false;
        }
        get inKeywordMode() {
            return false;
        }
        get showContextEntrypoint() {
            return false;
        }
        get selection() {
            return this.selection_;
        }
        setSelection(selection) {
            if (selectionsEqual(this.selection_, selection)) {
                return;
            }
            const oldSelection = this.selection_;
            this.selection_ = selection;
            this.requestUpdate('selection', oldSelection);
        }
        onSelectionChanged(e) {
            this.setSelection(e.detail.value);
        }
        isAiModeVirtualFocused() {
            return this.selection_.state === SelectionLineState.kFocusedButtonAim;
        }
        isContextEntrypointVirtualFocused() {
            return this.selection_.state ===
                SelectionLineState.kFocusedButtonContextEntrypoint;
        }
        getAvailableSelections(result) {
            if (!result) {
                return [];
            }
            const available = getMatchSelections(result);
            if (this.showContextEntrypoint) {
                available.push({
                    line: -1,
                    state: SelectionLineState.kFocusedButtonContextEntrypoint,
                    actionIndex: 0,
                });
            }
            if (this.isAimButtonVisible) {
                const firstMatch = result.matches[0];
                const defaultMatch = firstMatch?.allowedToBeDefaultMatch ? firstMatch : null;
                // If there is no default match, we need a generic selection to
                // represent the input field so that it can be focused.
                if (!defaultMatch) {
                    available.splice(0, 0, {
                        line: -1,
                        state: SelectionLineState.kNormal,
                        actionIndex: 0,
                    });
                }
                const secondMatch = result.matches[1];
                // Suppress focusing the AIM button to preserve user muscle memory and
                // align with `OmniboxPopupSelection::GetAllAvailableSelectionsSorted()`
                // when:
                // - In keyword mode (e.g. 'youtube<tab>query').
                // - The default match has a keyword chip (e.g. 'youtube').
                // - The default match has action chips (e.g. switch to tab).
                // - The 2nd match has an instant keyword (e.g. '@gemini').
                // - The 2nd match is a pedal suggestion (e.g. 'create doc').
                const suppressAim = this.inKeywordMode ||
                    !!defaultMatch?.keywordModel || !!defaultMatch?.actions.length ||
                    secondMatch?.keywordModel?.type === KeywordType.kInstant ||
                    secondMatch?.type === 'pedal';
                if (!suppressAim) {
                    available.splice(1, 0, {
                        line: defaultMatch ? 0 : -1,
                        state: SelectionLineState.kFocusedButtonAim,
                        actionIndex: 0,
                    });
                }
            }
            return available;
        }
        /**
         * Determines whether stepping from `from` in `direction` with `step`
         * granularity wraps around (cycles) the available selections.
         */
        stepCyclesSelection(result, from, direction, step) {
            const available = this.getAvailableSelections(result);
            if (available.length === 0) {
                return true;
            }
            const fromIndex = findSelectionIndex(available, from);
            // When starting from the input (not in available selections), stepping
            // backward immediately cycles/exits, while stepping forward enters the
            // first available selection without cycling.
            if (fromIndex < 0) {
                return direction === SelectionDirection.kBackward;
            }
            // Compute the next selection target.
            const next = this.getNextSelection(result, from, direction, step);
            const nextIndex = findSelectionIndex(available, next);
            if (nextIndex < 0) {
                return true;
            }
            return direction === SelectionDirection.kForward ?
                nextIndex <= fromIndex :
                nextIndex >= fromIndex;
        }
        getNextSelection(result, from, direction, step) {
            const available = this.getAvailableSelections(result);
            if (available.length === 0) {
                return from;
            }
            const isNormal = (selection) => (selection.state === SelectionLineState.kNormal ||
                (selection.state === SelectionLineState.kKeywordMode &&
                    result?.matches[selection.line]?.keywordModel?.type ===
                        KeywordType.kInstant)) &&
                selection.line !== -1;
            let fromIndex = findSelectionIndex(available, from);
            const selectionsList = [...available];
            if (fromIndex < 0) {
                selectionsList.splice(0, 0, from);
                fromIndex = 0;
            }
            if (step === SelectionStep.kAllLines) {
                if (direction === SelectionDirection.kBackward && from.line === -1) {
                    return from;
                }
                const normalIndex = direction === SelectionDirection.kBackward ?
                    selectionsList.findIndex(isNormal) :
                    selectionsList.findLastIndex(isNormal);
                return normalIndex < 0 ? from : selectionsList[normalIndex];
            }
            const currentNormalIndex = (from.line >= 0 &&
                from.state !== SelectionLineState.kFocusedButtonAim) ?
                selectionsList.findIndex(s => isNormal(s) && s.line === from.line) :
                -1;
            if (step === SelectionStep.kWholeLine && currentNormalIndex >= 0 &&
                selectionsList.filter(isNormal).length === 1) {
                return selectionsList[currentNormalIndex];
            }
            const remainder = (lhs, rhs) => ((lhs % rhs) + rhs) % rhs;
            for (let offset = 1; offset < selectionsList.length; offset++) {
                const offsetDirection = direction === SelectionDirection.kForward ? offset : -offset;
                const newIndex = fromIndex + offsetDirection;
                const index = remainder(newIndex, selectionsList.length);
                const selection = selectionsList[index];
                if (step === SelectionStep.kStateOrLine ||
                    (isNormal(selection) && index !== currentNormalIndex)) {
                    return selection;
                }
            }
            return from;
        }
    }
    return SearchboxSelectionMixin;
};
