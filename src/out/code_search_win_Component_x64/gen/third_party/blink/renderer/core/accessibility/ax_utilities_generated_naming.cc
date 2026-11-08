// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Generated from template:
//   templates/ax_utilities_generated_naming.cc.tmpl
// and input files:
//   ../../third_party/blink/renderer/core/html/aria_properties.json5


#include "third_party/blink/renderer/core/accessibility/ax_utilities_generated.h"

#include "ui/accessibility/ax_enums.mojom-blink.h"

namespace blink {

bool RoleIsNameProhibited(ax::mojom::blink::Role internal_role) {
  switch (internal_role) {
    case ax::mojom::blink::Role::kCaption:
    case ax::mojom::blink::Role::kCode:
    case ax::mojom::blink::Role::kDefinition:
    case ax::mojom::blink::Role::kContentDeletion:
    case ax::mojom::blink::Role::kEmphasis:
    case ax::mojom::blink::Role::kGenericContainer:
    case ax::mojom::blink::Role::kContentInsertion:
    case ax::mojom::blink::Role::kMark:
    case ax::mojom::blink::Role::kNone:
    case ax::mojom::blink::Role::kParagraph:
    case ax::mojom::blink::Role::kStrong:
    case ax::mojom::blink::Role::kSubscript:
    case ax::mojom::blink::Role::kSuggestion:
    case ax::mojom::blink::Role::kSuperscript:
    case ax::mojom::blink::Role::kTerm:
    case ax::mojom::blink::Role::kTime:
    case ax::mojom::blink::Role::kSectionWithoutName:
      return true;
    default:
      return false;
  }
}

bool RoleSupportsNameFromContents(ax::mojom::blink::Role internal_role) {
  switch (internal_role) {
    case ax::mojom::blink::Role::kButton:
    case ax::mojom::blink::Role::kCell:
    case ax::mojom::blink::Role::kCheckBox:
    case ax::mojom::blink::Role::kColumnHeader:
    case ax::mojom::blink::Role::kDocBackLink:
    case ax::mojom::blink::Role::kDocBiblioRef:
    case ax::mojom::blink::Role::kDocGlossRef:
    case ax::mojom::blink::Role::kDocNoteRef:
    case ax::mojom::blink::Role::kDocSubtitle:
    case ax::mojom::blink::Role::kGraphicsObject:
    case ax::mojom::blink::Role::kGridCell:
    case ax::mojom::blink::Role::kHeading:
    case ax::mojom::blink::Role::kLink:
    case ax::mojom::blink::Role::kMenuItem:
    case ax::mojom::blink::Role::kMenuItemCheckBox:
    case ax::mojom::blink::Role::kMenuItemRadio:
    case ax::mojom::blink::Role::kListBoxOption:
    case ax::mojom::blink::Role::kRadioButton:
    case ax::mojom::blink::Role::kRow:
    case ax::mojom::blink::Role::kRowHeader:
    case ax::mojom::blink::Role::kSwitch:
    case ax::mojom::blink::Role::kTab:
    case ax::mojom::blink::Role::kTooltip:
    case ax::mojom::blink::Role::kTreeItem:
    case ax::mojom::blink::Role::kToggleButton:
    case ax::mojom::blink::Role::kPopUpButton:
    case ax::mojom::blink::Role::kMenuListOption:
      return true;
    default:
      return false;
  }
}

bool RoleSupportsNameFromAuthor(ax::mojom::blink::Role internal_role) {
  switch (internal_role) {
    case ax::mojom::blink::Role::kAlert:
    case ax::mojom::blink::Role::kAlertDialog:
    case ax::mojom::blink::Role::kApplication:
    case ax::mojom::blink::Role::kArticle:
    case ax::mojom::blink::Role::kBanner:
    case ax::mojom::blink::Role::kBlockquote:
    case ax::mojom::blink::Role::kButton:
    case ax::mojom::blink::Role::kCell:
    case ax::mojom::blink::Role::kCheckBox:
    case ax::mojom::blink::Role::kColumnHeader:
    case ax::mojom::blink::Role::kComboBoxGrouping:
    case ax::mojom::blink::Role::kComment:
    case ax::mojom::blink::Role::kComplementary:
    case ax::mojom::blink::Role::kContentInfo:
    case ax::mojom::blink::Role::kDialog:
    case ax::mojom::blink::Role::kDocAbstract:
    case ax::mojom::blink::Role::kDocAcknowledgments:
    case ax::mojom::blink::Role::kDocAfterword:
    case ax::mojom::blink::Role::kDocAppendix:
    case ax::mojom::blink::Role::kDocBackLink:
    case ax::mojom::blink::Role::kDocBiblioEntry:
    case ax::mojom::blink::Role::kDocBibliography:
    case ax::mojom::blink::Role::kDocBiblioRef:
    case ax::mojom::blink::Role::kDocChapter:
    case ax::mojom::blink::Role::kDocColophon:
    case ax::mojom::blink::Role::kDocConclusion:
    case ax::mojom::blink::Role::kDocCover:
    case ax::mojom::blink::Role::kDocCredit:
    case ax::mojom::blink::Role::kDocCredits:
    case ax::mojom::blink::Role::kDocDedication:
    case ax::mojom::blink::Role::kDocEndnote:
    case ax::mojom::blink::Role::kDocEndnotes:
    case ax::mojom::blink::Role::kDocEpigraph:
    case ax::mojom::blink::Role::kDocEpilogue:
    case ax::mojom::blink::Role::kDocErrata:
    case ax::mojom::blink::Role::kDocExample:
    case ax::mojom::blink::Role::kDocFootnote:
    case ax::mojom::blink::Role::kDocForeword:
    case ax::mojom::blink::Role::kDocGlossary:
    case ax::mojom::blink::Role::kDocGlossRef:
    case ax::mojom::blink::Role::kDocIndex:
    case ax::mojom::blink::Role::kDocIntroduction:
    case ax::mojom::blink::Role::kDocNoteRef:
    case ax::mojom::blink::Role::kDocNotice:
    case ax::mojom::blink::Role::kDocPageBreak:
    case ax::mojom::blink::Role::kDocPageFooter:
    case ax::mojom::blink::Role::kDocPageHeader:
    case ax::mojom::blink::Role::kDocPageList:
    case ax::mojom::blink::Role::kDocPart:
    case ax::mojom::blink::Role::kDocPreface:
    case ax::mojom::blink::Role::kDocPrologue:
    case ax::mojom::blink::Role::kDocPullquote:
    case ax::mojom::blink::Role::kDocQna:
    case ax::mojom::blink::Role::kDocSubtitle:
    case ax::mojom::blink::Role::kDocTip:
    case ax::mojom::blink::Role::kDocToc:
    case ax::mojom::blink::Role::kDocument:
    case ax::mojom::blink::Role::kFeed:
    case ax::mojom::blink::Role::kFigure:
    case ax::mojom::blink::Role::kForm:
    case ax::mojom::blink::Role::kGraphicsDocument:
    case ax::mojom::blink::Role::kGraphicsObject:
    case ax::mojom::blink::Role::kGraphicsSymbol:
    case ax::mojom::blink::Role::kGrid:
    case ax::mojom::blink::Role::kGridCell:
    case ax::mojom::blink::Role::kGroup:
    case ax::mojom::blink::Role::kHeading:
    case ax::mojom::blink::Role::kImage:
    case ax::mojom::blink::Role::kLink:
    case ax::mojom::blink::Role::kList:
    case ax::mojom::blink::Role::kListBox:
    case ax::mojom::blink::Role::kListItem:
    case ax::mojom::blink::Role::kLog:
    case ax::mojom::blink::Role::kMain:
    case ax::mojom::blink::Role::kMarquee:
    case ax::mojom::blink::Role::kMath:
    case ax::mojom::blink::Role::kMenu:
    case ax::mojom::blink::Role::kMenuBar:
    case ax::mojom::blink::Role::kMenuItem:
    case ax::mojom::blink::Role::kMenuItemCheckBox:
    case ax::mojom::blink::Role::kMenuItemRadio:
    case ax::mojom::blink::Role::kMeter:
    case ax::mojom::blink::Role::kNavigation:
    case ax::mojom::blink::Role::kNote:
    case ax::mojom::blink::Role::kListBoxOption:
    case ax::mojom::blink::Role::kProgressIndicator:
    case ax::mojom::blink::Role::kRadioButton:
    case ax::mojom::blink::Role::kRadioGroup:
    case ax::mojom::blink::Role::kRegion:
    case ax::mojom::blink::Role::kRow:
    case ax::mojom::blink::Role::kRowGroup:
    case ax::mojom::blink::Role::kRowHeader:
    case ax::mojom::blink::Role::kScrollBar:
    case ax::mojom::blink::Role::kSearch:
    case ax::mojom::blink::Role::kSearchBox:
    case ax::mojom::blink::Role::kSectionFooter:
    case ax::mojom::blink::Role::kSectionHeader:
    case ax::mojom::blink::Role::kSplitter:
    case ax::mojom::blink::Role::kSlider:
    case ax::mojom::blink::Role::kSpinButton:
    case ax::mojom::blink::Role::kStatus:
    case ax::mojom::blink::Role::kSwitch:
    case ax::mojom::blink::Role::kTab:
    case ax::mojom::blink::Role::kTable:
    case ax::mojom::blink::Role::kTabList:
    case ax::mojom::blink::Role::kTabPanel:
    case ax::mojom::blink::Role::kTextField:
    case ax::mojom::blink::Role::kTimer:
    case ax::mojom::blink::Role::kToolbar:
    case ax::mojom::blink::Role::kTooltip:
    case ax::mojom::blink::Role::kTree:
    case ax::mojom::blink::Role::kTreeGrid:
    case ax::mojom::blink::Role::kTreeItem:
    case ax::mojom::blink::Role::kHeader:
    case ax::mojom::blink::Role::kToggleButton:
    case ax::mojom::blink::Role::kPopUpButton:
    case ax::mojom::blink::Role::kComboBoxMenuButton:
    case ax::mojom::blink::Role::kComboBoxSelect:
    case ax::mojom::blink::Role::kTextFieldWithComboBox:
    case ax::mojom::blink::Role::kFooter:
    case ax::mojom::blink::Role::kDetails:
    case ax::mojom::blink::Role::kMenuListOption:
      return true;
    default:
      return false;
  }
}

}  // namespace blink
