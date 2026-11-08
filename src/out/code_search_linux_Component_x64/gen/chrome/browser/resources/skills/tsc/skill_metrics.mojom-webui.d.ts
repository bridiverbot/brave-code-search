import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
export declare const SkillsManagementPageSpec: {
    $: mojo.internal.MojomType;
};
export declare enum SkillsManagementPage {
    MIN_VALUE = 0,
    MAX_VALUE = 2,
    kErrorPage = 0,
    kYourSkills = 1,
    kBrowseSkills = 2
}
export declare const SkillsManagementActionSpec: {
    $: mojo.internal.MojomType;
};
export declare enum SkillsManagementAction {
    MIN_VALUE = 0,
    MAX_VALUE = 7,
    kPageOpened = 0,
    kClickedAddSkill = 1,
    kClickedEditSkill = 2,
    kClickedDeleteSkill = 3,
    kClickedCopyInstructions = 4,
    kClickedBrowseSkills = 5,
    kNonEmptySearch = 6,
    kEmptySearch = 7
}
export declare const SkillsPromptRefinementOutcomeSpec: {
    $: mojo.internal.MojomType;
};
export declare enum SkillsPromptRefinementOutcome {
    MIN_VALUE = 0,
    MAX_VALUE = 2,
    kNotRefined = 0,
    kUsedRefinedPrompt = 1,
    kRevertedAndNotUsed = 2
}
