// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/automation.webidl
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../extensions/common/api/automation.webidl --root=../../ --destdir=gen --namespace=extensions::api::%(namespace)s --generator=cpp --include-rules=

#ifndef EXTENSIONS_COMMON_API_AUTOMATION_H__
#define EXTENSIONS_COMMON_API_AUTOMATION_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <optional>
#include <string>
#include <vector>

#include "base/values.h"
#include <string_view>


namespace extensions {
namespace api {
namespace automation {

//
// Types
//

// Possible events fired on an $(ref:automation.AutomationNode).
enum class EventType {
  kNone = 0,
  kAccessKeyChanged,
  kActiveDescendantChanged,
  kAlert,
  kAriaAttributeChangedDeprecated,
  kAriaCurrentChanged,
  kAriaNotificationsPosted,
  kAtomicChanged,
  kAutoCompleteChanged,
  kAutocorrectionOccured,
  kAutofillAvailabilityChanged,
  kBlur,
  kBusyChanged,
  kCaretBoundsChanged,
  kCheckedStateChanged,
  kCheckedStateDescriptionChanged,
  kChildrenChanged,
  kClicked,
  kCollapsed,
  kControlsChanged,
  kDefaultActionVerbChanged,
  kDetailsChanged,
  kDescribedByChanged,
  kDescriptionChanged,
  kDocumentSelectionChanged,
  kDocumentTitleChanged,
  kDropeffectChanged,
  kEditableTextChanged,
  kEnabledChanged,
  kEndOfTest,
  kExpanded,
  kExpandedChanged,
  kFlowFromChanged,
  kFlowToChanged,
  kFocus,
  kFocusAfterMenuClose,
  kFocusChanged,
  kFocusContextDeprecated,
  kGrabbedChanged,
  kGrammarMarkerChanged,
  kHaspopupChanged,
  kHide,
  kHierarchicalLevelChanged,
  kHighlightMarkerChanged,
  kHitTestResult,
  kHover,
  kIgnoredChanged,
  kImageAnnotationChanged,
  kImageFrameUpdated,
  kInvalidStatusChanged,
  kKeyShortcutsChanged,
  kLabeledByChanged,
  kLanguageChanged,
  kLayoutComplete,
  kLayoutInvalidated,
  kLiveRegionChanged,
  kLiveRegionCreated,
  kLiveRegionNodeChanged,
  kLiveRelevantChanged,
  kLiveStatusChanged,
  kLoadComplete,
  kLoadStart,
  kLocationChanged,
  kMediaStartedPlaying,
  kMediaStoppedPlaying,
  kMenuEnd,
  kMenuItemSelected,
  kMenuListValueChangedDeprecated,
  kMenuPopupEnd,
  kMenuPopupStart,
  kMenuStart,
  kMouseCanceled,
  kMouseDragged,
  kMouseMoved,
  kMousePressed,
  kMouseReleased,
  kMultilineStateChanged,
  kMultiselectableStateChanged,
  kNameChanged,
  kObjectAttributeChanged,
  kOrientationChanged,
  kParentChanged,
  kPlaceholderChanged,
  kPositionInSetChanged,
  kRangeValueChanged,
  kRangeValueMaxChanged,
  kRangeValueMinChanged,
  kRangeValueStepChanged,
  kReadonlyChanged,
  kRelatedNodeChanged,
  kRequiredStateChanged,
  kRoleChanged,
  kRowCollapsed,
  kRowCountChanged,
  kRowExpanded,
  kScrollHorizontalPositionChanged,
  kScrollPositionChanged,
  kScrollVerticalPositionChanged,
  kScrolledToAnchor,
  kSelectedChanged,
  kSelectedChildrenChanged,
  kSelectedValueChanged,
  kSelection,
  kSelectionAdd,
  kSelectionRemove,
  kSetSizeChanged,
  kShow,
  kSortChanged,
  kSpellingMarkerChanged,
  kStateChanged,
  kSubtreeCreated,
  kTextAttributeChanged,
  kTextSelectionChanged,
  kTextChanged,
  kTooltipClosed,
  kTooltipOpened,
  kTreeChanged,
  kValueInSpinButtonDecremented,
  kValueInSpinButtonIncremented,
  kValueInTextFieldChanged,
  kValueChanged,
  kWindowActivated,
  kWindowDeactivated,
  kWindowVisibilityChanged,
  kMaxValue = kWindowVisibilityChanged,
};


const char* ToString(EventType as_enum);
EventType ParseEventType(std::string_view as_string);
std::u16string GetEventTypeParseError(std::string_view as_string);

// Describes the purpose of an $(ref:automation.AutomationNode).
enum class RoleType {
  kNone = 0,
  kAbbr,
  kAlert,
  kAlertDialog,
  kApplication,
  kArticle,
  kAudio,
  kBanner,
  kBlockquote,
  kButton,
  kCanvas,
  kCaption,
  kCaret,
  kCell,
  kCheckBox,
  kClient,
  kCode,
  kColorWell,
  kColumn,
  kColumnHeader,
  kComboBoxGrouping,
  kComboBoxMenuButton,
  kComboBoxSelect,
  kComment,
  kComplementary,
  kContentDeletion,
  kContentInsertion,
  kContentInfo,
  kDate,
  kDateTime,
  kDefinition,
  kDescriptionList,
  kDescriptionListDetailDeprecated,
  kDescriptionListTermDeprecated,
  kDesktop,
  kDetails,
  kDialog,
  kDirectoryDeprecated,
  kDisclosureTriangle,
  kDisclosureTriangleGrouped,
  kDocAbstract,
  kDocAcknowledgments,
  kDocAfterword,
  kDocAppendix,
  kDocBackLink,
  kDocBiblioEntry,
  kDocBibliography,
  kDocBiblioRef,
  kDocChapter,
  kDocColophon,
  kDocConclusion,
  kDocCover,
  kDocCredit,
  kDocCredits,
  kDocDedication,
  kDocEndnote,
  kDocEndnotes,
  kDocEpigraph,
  kDocEpilogue,
  kDocErrata,
  kDocExample,
  kDocFootnote,
  kDocForeword,
  kDocGlossary,
  kDocGlossRef,
  kDocIndex,
  kDocIntroduction,
  kDocNoteRef,
  kDocNotice,
  kDocPageBreak,
  kDocPageFooter,
  kDocPageHeader,
  kDocPageList,
  kDocPart,
  kDocPreface,
  kDocPrologue,
  kDocPullquote,
  kDocQna,
  kDocSubtitle,
  kDocTip,
  kDocToc,
  kDocument,
  kEmbeddedObject,
  kEmphasis,
  kFeed,
  kFigcaption,
  kFigure,
  kFooter,
  kForm,
  kGenericContainer,
  kGraphicsDocument,
  kGraphicsObject,
  kGraphicsSymbol,
  kGrid,
  kGridCell,
  kGroup,
  kHeader,
  kHeading,
  kIframe,
  kIframePresentational,
  kImage,
  kImeCandidate,
  kInlineTextBox,
  kInputTime,
  kKeyboard,
  kLabelText,
  kLayoutTable,
  kLayoutTableCell,
  kLayoutTableRow,
  kLegend,
  kLineBreak,
  kLink,
  kList,
  kListBox,
  kListBoxOption,
  kListGrid,
  kListItem,
  kListMarker,
  kLog,
  kMain,
  kMark,
  kMarquee,
  kMath,
  kMathMlfraction,
  kMathMlidentifier,
  kMathMlmath,
  kMathMlmultiscripts,
  kMathMlnoneScript,
  kMathMlnumber,
  kMathMloperator,
  kMathMlover,
  kMathMlprescriptDelimiter,
  kMathMlroot,
  kMathMlrow,
  kMathMlsquareRoot,
  kMathMlstringLiteral,
  kMathMlsub,
  kMathMlsubSup,
  kMathMlsup,
  kMathMltable,
  kMathMltableCell,
  kMathMltableRow,
  kMathMltext,
  kMathMlunder,
  kMathMlunderOver,
  kMenu,
  kMenuBar,
  kMenuItem,
  kMenuItemCheckBox,
  kMenuItemRadio,
  kMenuItemSeparator,
  kMenuListOption,
  kMenuListPopup,
  kMeter,
  kNavigation,
  kNote,
  kPane,
  kParagraph,
  kPdfActionableHighlight,
  kPdfRoot,
  kPluginObject,
  kPopUpButton,
  kPortalDeprecated,
  kPreDeprecated,
  kProgressIndicator,
  kRadioButton,
  kRadioGroup,
  kRegion,
  kRootWebArea,
  kRow,
  kRowGroup,
  kRowHeader,
  kRuby,
  kRubyAnnotation,
  kScrollBar,
  kScrollView,
  kSearch,
  kSearchBox,
  kSection,
  kSectionFooter,
  kSectionHeader,
  kSectionWithoutName,
  kSlider,
  kSpinButton,
  kSplitter,
  kStaticText,
  kStatus,
  kStrong,
  kSubscript,
  kSuggestion,
  kSuperscript,
  kSvgRoot,
  kSwitch,
  kTab,
  kTabList,
  kTabPanel,
  kTable,
  kTableHeaderContainer,
  kTerm,
  kTextField,
  kTextFieldWithComboBox,
  kTime,
  kTimer,
  kTitleBar,
  kToggleButton,
  kToolbar,
  kTooltip,
  kTree,
  kTreeGrid,
  kTreeItem,
  kUnknown,
  kVideo,
  kWebView,
  kWindow,
  kMaxValue = kWindow,
};


const char* ToString(RoleType as_enum);
RoleType ParseRoleType(std::string_view as_string);
std::u16string GetRoleTypeParseError(std::string_view as_string);

// Describes characteristics of an $(ref:automation.AutomationNode).
enum class StateType {
  kNone = 0,
  kAutofillAvailable,
  kCollapsed,
  kDefault,
  kEditable,
  kExpanded,
  kFocusable,
  kFocused,
  kHorizontal,
  kHovered,
  kIgnored,
  kInvisible,
  kLinked,
  kMultiline,
  kMultiselectable,
  kOffscreen,
  kProtected,
  kRequired,
  kRichlyEditable,
  kVertical,
  kVisited,
  kHasActions,
  kHasInterestFor,
  kMaxValue = kHasInterestFor,
};


const char* ToString(StateType as_enum);
StateType ParseStateType(std::string_view as_string);
std::u16string GetStateTypeParseError(std::string_view as_string);

// All possible actions that can be performed on automation nodes.
enum class ActionType {
  kNone = 0,
  kAnnotatePageImages,
  kBlur,
  kClearAccessibilityFocus,
  kCollapse,
  kCustomAction,
  kDecrement,
  kDoDefault,
  kExpand,
  kFocus,
  kGetImageData,
  kGetTextLocation,
  kHideTooltip,
  kHitTest,
  kIncrement,
  kInternalInvalidateTree,
  kLoadInlineTextBoxes,
  kLongClick,
  kReplaceRanges,
  kReplaceSelectedText,
  kRequestLayoutBasedAction,
  kResumeMedia,
  kScrollBackward,
  kScrollDown,
  kScrollForward,
  kScrollLeft,
  kScrollRight,
  kScrollUp,
  kScrollToMakeVisible,
  kScrollToPoint,
  kScrollToPositionAtRowColumn,
  kSetAccessibilityFocus,
  kSetScrollOffset,
  kSetSelection,
  kSetSequentialFocusNavigationStartingPoint,
  kSetValue,
  kShowContextMenu,
  kSignalEndOfTest,
  kShowTooltip,
  kStitchChildTree,
  kStartDuckingMedia,
  kStopDuckingMedia,
  kSuspendMedia,
  kMaxValue = kSuspendMedia,
};


const char* ToString(ActionType as_enum);
ActionType ParseActionType(std::string_view as_string);
std::u16string GetActionTypeParseError(std::string_view as_string);

// <p>Possible changes to the automation tree. For any given atomic change to
// the tree, each node that's added, removed, or changed, will appear in exactly
// one TreeChange, with one of these types.</p><p>nodeCreated means that this
// node was added to the tree and its parent is new as well, so it's just one
// node in a new subtree that was added.</p>
enum class TreeChangeType {
  kNone = 0,
  kNodeCreated,
  kSubtreeCreated,
  kNodeChanged,
  kTextChanged,
  kNodeRemoved,
  kSubtreeUpdateEnd,
  kMaxValue = kSubtreeUpdateEnd,
};


const char* ToString(TreeChangeType as_enum);
TreeChangeType ParseTreeChangeType(std::string_view as_string);
std::u16string GetTreeChangeTypeParseError(std::string_view as_string);

// Where the node's name is from.
enum class NameFromType {
  kNone = 0,
  kAttribute,
  kAttributeExplicitlyEmpty,
  kCaption,
  kContents,
  kCssAltText,
  kInterestFor,
  kPlaceholder,
  kPopoverTarget,
  kProhibited,
  kProhibitedAndRedundant,
  kRelatedElement,
  kTitle,
  kValue,
  kMaxValue = kValue,
};


const char* ToString(NameFromType as_enum);
NameFromType ParseNameFromType(std::string_view as_string);
std::u16string GetNameFromTypeParseError(std::string_view as_string);

enum class DescriptionFromType {
  kNone = 0,
  kAriaDescription,
  kAttributeExplicitlyEmpty,
  kButtonLabel,
  kInterestFor,
  kPopoverTarget,
  kProhibitedNameRepair,
  kRelatedElement,
  kRubyAnnotation,
  kSummary,
  kSvgDescElement,
  kTableCaption,
  kTitle,
  kMaxValue = kTitle,
};


const char* ToString(DescriptionFromType as_enum);
DescriptionFromType ParseDescriptionFromType(std::string_view as_string);
std::u16string GetDescriptionFromTypeParseError(std::string_view as_string);

// The input restriction for a object -- even non-controls can be disabled.
enum class Restriction {
  kNone = 0,
  kDisabled,
  kReadOnly,
  kMaxValue = kReadOnly,
};


const char* ToString(Restriction as_enum);
Restriction ParseRestriction(std::string_view as_string);
std::u16string GetRestrictionParseError(std::string_view as_string);

// Availability and types for an interactive popup element.
enum class HasPopup {
  kNone = 0,
  kFalse,
  kTrue,
  kMenu,
  kListbox,
  kTree,
  kGrid,
  kDialog,
  kMaxValue = kDialog,
};


const char* ToString(HasPopup as_enum);
HasPopup ParseHasPopup(std::string_view as_string);
std::u16string GetHasPopupParseError(std::string_view as_string);

// Indicates the ARIA-current state.
enum class AriaCurrentState {
  kNone = 0,
  kFalse,
  kTrue,
  kPage,
  kStep,
  kLocation,
  kDate,
  kTime,
  kMaxValue = kTime,
};


const char* ToString(AriaCurrentState as_enum);
AriaCurrentState ParseAriaCurrentState(std::string_view as_string);
std::u16string GetAriaCurrentStateParseError(std::string_view as_string);

// Lists the values that `invalidState` can take on.
enum class InvalidState {
  kNone = 0,
  kFalse,
  kTrue,
  kMaxValue = kTrue,
};


const char* ToString(InvalidState as_enum);
InvalidState ParseInvalidState(std::string_view as_string);
std::u16string GetInvalidStateParseError(std::string_view as_string);

// Describes possible actions when performing a do default action.
enum class DefaultActionVerb {
  kNone = 0,
  kActivate,
  kCheck,
  kClick,
  kClickAncestor,
  kClickInHitTest,
  kClickNotInHitTest,
  kJump,
  kOpen,
  kPress,
  kSelect,
  kUncheck,
  kMaxValue = kUncheck,
};


const char* ToString(DefaultActionVerb as_enum);
DefaultActionVerb ParseDefaultActionVerb(std::string_view as_string);
std::u16string GetDefaultActionVerbParseError(std::string_view as_string);

// Types of markers on text. See <code>AutomationNode.markerTypes</code>.
enum class MarkerType {
  kNone = 0,
  kSpelling,
  kGrammar,
  kTextMatch,
  kActiveSuggestion,
  kSuggestion,
  kHighlight,
  kMaxValue = kHighlight,
};


const char* ToString(MarkerType as_enum);
MarkerType ParseMarkerType(std::string_view as_string);
std::u16string GetMarkerTypeParseError(std::string_view as_string);

// A command associated with an $(ref:automation.AutomationIntent).
enum class IntentCommandType {
  kNone = 0,
  kClearSelection,
  kDelete,
  kDictate,
  kExtendSelection,
  kFormat,
  kHistory,
  kInsert,
  kMarker,
  kMoveSelection,
  kSetSelection,
  kSpinButtonIncrement,
  kSpinButtonDecrement,
  kMaxValue = kSpinButtonDecrement,
};


const char* ToString(IntentCommandType as_enum);
IntentCommandType ParseIntentCommandType(std::string_view as_string);
std::u16string GetIntentCommandTypeParseError(std::string_view as_string);

// The type of an input event associated with an
// $(ref:automation.AutomationIntent). It describes an edit command, e.g.
// IntentCommandType.insert, in more detail.
enum class IntentInputEventType {
  kNone = 0,
  kInsertText,
  kInsertLineBreak,
  kInsertParagraph,
  kInsertOrderedList,
  kInsertUnorderedList,
  kInsertHorizontalRule,
  kInsertFromPaste,
  kInsertFromDrop,
  kInsertFromYank,
  kInsertTranspose,
  kInsertReplacementText,
  kInsertCompositionText,
  kInsertLink,
  kDeleteWordBackward,
  kDeleteWordForward,
  kDeleteSoftLineBackward,
  kDeleteSoftLineForward,
  kDeleteHardLineBackward,
  kDeleteHardLineForward,
  kDeleteContentBackward,
  kDeleteContentForward,
  kDeleteByCut,
  kDeleteByDrag,
  kHistoryUndo,
  kHistoryRedo,
  kFormatBold,
  kFormatItalic,
  kFormatUnderline,
  kFormatStrikeThrough,
  kFormatSuperscript,
  kFormatSubscript,
  kFormatJustifyCenter,
  kFormatJustifyFull,
  kFormatJustifyRight,
  kFormatJustifyLeft,
  kFormatIndent,
  kFormatOutdent,
  kFormatRemove,
  kFormatSetBlockTextDirection,
  kMaxValue = kFormatSetBlockTextDirection,
};


const char* ToString(IntentInputEventType as_enum);
IntentInputEventType ParseIntentInputEventType(std::string_view as_string);
std::u16string GetIntentInputEventTypeParseError(std::string_view as_string);

// A text boundary associated with an $(ref:automation.AutomationIntent).
enum class IntentTextBoundaryType {
  kNone = 0,
  kCharacter,
  kFormatEnd,
  kFormatStart,
  kFormatStartOrEnd,
  kLineEnd,
  kLineStart,
  kLineStartOrEnd,
  kObject,
  kPageEnd,
  kPageStart,
  kPageStartOrEnd,
  kParagraphEnd,
  kParagraphStart,
  kParagraphStartSkippingEmptyParagraphs,
  kParagraphStartOrEnd,
  kSentenceEnd,
  kSentenceStart,
  kSentenceStartOrEnd,
  kWebPage,
  kWordEnd,
  kWordStart,
  kWordStartOrEnd,
  kMaxValue = kWordStartOrEnd,
};


const char* ToString(IntentTextBoundaryType as_enum);
IntentTextBoundaryType ParseIntentTextBoundaryType(std::string_view as_string);
std::u16string GetIntentTextBoundaryTypeParseError(std::string_view as_string);

// A move direction associated with an $(ref:automation.AutomationIntent).
enum class IntentMoveDirectionType {
  kNone = 0,
  kBackward,
  kForward,
  kMaxValue = kForward,
};


const char* ToString(IntentMoveDirectionType as_enum);
IntentMoveDirectionType ParseIntentMoveDirectionType(std::string_view as_string);
std::u16string GetIntentMoveDirectionTypeParseError(std::string_view as_string);

// A sort applied to a table row or column header.
enum class SortDirectionType {
  kNone = 0,
  kUnsorted,
  kAscending,
  kDescending,
  kOther,
  kMaxValue = kOther,
};


const char* ToString(SortDirectionType as_enum);
SortDirectionType ParseSortDirectionType(std::string_view as_string);
std::u16string GetSortDirectionTypeParseError(std::string_view as_string);

// A type of AutomationPosition.
enum class PositionType {
  kNone = 0,
  kNull,
  kText,
  kTree,
  kMaxValue = kTree,
};


const char* ToString(PositionType as_enum);
PositionType ParsePositionType(std::string_view as_string);
std::u16string GetPositionTypeParseError(std::string_view as_string);

struct Rect {
  Rect();
  ~Rect();
  Rect(const Rect&) = delete;
  Rect& operator=(const Rect&) = delete;
  Rect(Rect&& rhs) noexcept;
  Rect& operator=(Rect&& rhs) noexcept;

  // Populates a Rect object from a base::Value& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value& value, Rect& out);

  // Populates a Rect object from a Dict& instance. Returns whether |out| was
  // successfully populated.
  static bool Populate(const base::DictValue& value, Rect& out);

  // Creates a deep copy of Rect.
  Rect Clone() const;

  // Creates a Rect object from a base::DictValue, or nullopt on failure.
  static std::optional<Rect> FromValue(const base::DictValue& value);

  // Creates a Rect object from a base::Value, or nullopt on failure.
  static std::optional<Rect> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of thisRect
  // object.
  base::DictValue ToValue() const;

  int left;

  int top;

  int width;

  int height;

};

// Possible tree changes to listen to using addTreeChangeObserver. Note that
// listening to all tree changes can be expensive.
enum class TreeChangeObserverFilter {
  kNone = 0,
  kNoTreeChanges,
  kLiveRegionTreeChanges,
  kTextMarkerChanges,
  kAllTreeChanges,
  kMaxValue = kAllTreeChanges,
};


const char* ToString(TreeChangeObserverFilter as_enum);
TreeChangeObserverFilter ParseTreeChangeObserverFilter(std::string_view as_string);
std::u16string GetTreeChangeObserverFilterParseError(std::string_view as_string);


}  // namespace automation
}  // namespace api
}  // namespace extensions

#endif  // EXTENSIONS_COMMON_API_AUTOMATION_H__
