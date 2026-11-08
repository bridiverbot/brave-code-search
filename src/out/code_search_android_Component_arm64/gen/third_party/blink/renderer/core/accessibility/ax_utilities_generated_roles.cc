// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Generated from template:
//   templates/ax_utilities_generated_roles.cc.tmpl
// and input files:
//   ../../third_party/blink/renderer/core/html/aria_properties.json5


#include "third_party/blink/renderer/core/accessibility/ax_utilities_generated.h"

#include <algorithm>
#include "third_party/blink/renderer/platform/wtf/hash_map.h"
#include "third_party/blink/renderer/platform/wtf/text/atomic_string.h"
#include "third_party/blink/renderer/platform/wtf/text/atomic_string_hash.h"
#include "ui/accessibility/ax_enums.mojom-blink.h"

namespace blink {

// Internal structures for role mapping.
struct RoleEntry {
  const char* aria_role;
  ax::mojom::blink::Role internal_role;
};

// Canonical ARIA role mappings.
static const RoleEntry kAriaRoles[] = {
  {"alert", ax::mojom::blink::Role::kAlert},
  {"alertdialog", ax::mojom::blink::Role::kAlertDialog},
  {"application", ax::mojom::blink::Role::kApplication},
  {"article", ax::mojom::blink::Role::kArticle},
  {"banner", ax::mojom::blink::Role::kBanner},
  {"blockquote", ax::mojom::blink::Role::kBlockquote},
  {"button", ax::mojom::blink::Role::kButton},
  {"caption", ax::mojom::blink::Role::kCaption},
  {"cell", ax::mojom::blink::Role::kCell},
  {"checkbox", ax::mojom::blink::Role::kCheckBox},
  {"code", ax::mojom::blink::Role::kCode},
  {"columnheader", ax::mojom::blink::Role::kColumnHeader},
  {"combobox", ax::mojom::blink::Role::kComboBoxGrouping},
  {"comment", ax::mojom::blink::Role::kComment},
  {"complementary", ax::mojom::blink::Role::kComplementary},
  {"contentinfo", ax::mojom::blink::Role::kContentInfo},
  {"definition", ax::mojom::blink::Role::kDefinition},
  {"deletion", ax::mojom::blink::Role::kContentDeletion},
  {"dialog", ax::mojom::blink::Role::kDialog},
  {"doc-abstract", ax::mojom::blink::Role::kDocAbstract},
  {"doc-acknowledgments", ax::mojom::blink::Role::kDocAcknowledgments},
  {"doc-afterword", ax::mojom::blink::Role::kDocAfterword},
  {"doc-appendix", ax::mojom::blink::Role::kDocAppendix},
  {"doc-backlink", ax::mojom::blink::Role::kDocBackLink},
  {"doc-biblioentry", ax::mojom::blink::Role::kDocBiblioEntry},
  {"doc-bibliography", ax::mojom::blink::Role::kDocBibliography},
  {"doc-biblioref", ax::mojom::blink::Role::kDocBiblioRef},
  {"doc-chapter", ax::mojom::blink::Role::kDocChapter},
  {"doc-colophon", ax::mojom::blink::Role::kDocColophon},
  {"doc-conclusion", ax::mojom::blink::Role::kDocConclusion},
  {"doc-cover", ax::mojom::blink::Role::kDocCover},
  {"doc-credit", ax::mojom::blink::Role::kDocCredit},
  {"doc-credits", ax::mojom::blink::Role::kDocCredits},
  {"doc-dedication", ax::mojom::blink::Role::kDocDedication},
  {"doc-endnote", ax::mojom::blink::Role::kDocEndnote},
  {"doc-endnotes", ax::mojom::blink::Role::kDocEndnotes},
  {"doc-epigraph", ax::mojom::blink::Role::kDocEpigraph},
  {"doc-epilogue", ax::mojom::blink::Role::kDocEpilogue},
  {"doc-errata", ax::mojom::blink::Role::kDocErrata},
  {"doc-example", ax::mojom::blink::Role::kDocExample},
  {"doc-footnote", ax::mojom::blink::Role::kDocFootnote},
  {"doc-foreword", ax::mojom::blink::Role::kDocForeword},
  {"doc-glossary", ax::mojom::blink::Role::kDocGlossary},
  {"doc-glossref", ax::mojom::blink::Role::kDocGlossRef},
  {"doc-index", ax::mojom::blink::Role::kDocIndex},
  {"doc-introduction", ax::mojom::blink::Role::kDocIntroduction},
  {"doc-noteref", ax::mojom::blink::Role::kDocNoteRef},
  {"doc-notice", ax::mojom::blink::Role::kDocNotice},
  {"doc-pagebreak", ax::mojom::blink::Role::kDocPageBreak},
  {"doc-pagefooter", ax::mojom::blink::Role::kDocPageFooter},
  {"doc-pageheader", ax::mojom::blink::Role::kDocPageHeader},
  {"doc-pagelist", ax::mojom::blink::Role::kDocPageList},
  {"doc-part", ax::mojom::blink::Role::kDocPart},
  {"doc-preface", ax::mojom::blink::Role::kDocPreface},
  {"doc-prologue", ax::mojom::blink::Role::kDocPrologue},
  {"doc-pullquote", ax::mojom::blink::Role::kDocPullquote},
  {"doc-qna", ax::mojom::blink::Role::kDocQna},
  {"doc-subtitle", ax::mojom::blink::Role::kDocSubtitle},
  {"doc-tip", ax::mojom::blink::Role::kDocTip},
  {"doc-toc", ax::mojom::blink::Role::kDocToc},
  {"document", ax::mojom::blink::Role::kDocument},
  {"emphasis", ax::mojom::blink::Role::kEmphasis},
  {"feed", ax::mojom::blink::Role::kFeed},
  {"figure", ax::mojom::blink::Role::kFigure},
  {"form", ax::mojom::blink::Role::kForm},
  {"generic", ax::mojom::blink::Role::kGenericContainer},
  {"graphics-document", ax::mojom::blink::Role::kGraphicsDocument},
  {"graphics-object", ax::mojom::blink::Role::kGraphicsObject},
  {"graphics-symbol", ax::mojom::blink::Role::kGraphicsSymbol},
  {"grid", ax::mojom::blink::Role::kGrid},
  {"gridcell", ax::mojom::blink::Role::kGridCell},
  {"group", ax::mojom::blink::Role::kGroup},
  {"heading", ax::mojom::blink::Role::kHeading},
  {"image", ax::mojom::blink::Role::kImage},
  {"insertion", ax::mojom::blink::Role::kContentInsertion},
  {"link", ax::mojom::blink::Role::kLink},
  {"list", ax::mojom::blink::Role::kList},
  {"listbox", ax::mojom::blink::Role::kListBox},
  {"listitem", ax::mojom::blink::Role::kListItem},
  {"log", ax::mojom::blink::Role::kLog},
  {"main", ax::mojom::blink::Role::kMain},
  {"mark", ax::mojom::blink::Role::kMark},
  {"marquee", ax::mojom::blink::Role::kMarquee},
  {"math", ax::mojom::blink::Role::kMath},
  {"menu", ax::mojom::blink::Role::kMenu},
  {"menubar", ax::mojom::blink::Role::kMenuBar},
  {"menuitem", ax::mojom::blink::Role::kMenuItem},
  {"menuitemcheckbox", ax::mojom::blink::Role::kMenuItemCheckBox},
  {"menuitemradio", ax::mojom::blink::Role::kMenuItemRadio},
  {"meter", ax::mojom::blink::Role::kMeter},
  {"navigation", ax::mojom::blink::Role::kNavigation},
  {"none", ax::mojom::blink::Role::kNone},
  {"note", ax::mojom::blink::Role::kNote},
  {"option", ax::mojom::blink::Role::kListBoxOption},
  {"paragraph", ax::mojom::blink::Role::kParagraph},
  {"progressbar", ax::mojom::blink::Role::kProgressIndicator},
  {"radio", ax::mojom::blink::Role::kRadioButton},
  {"radiogroup", ax::mojom::blink::Role::kRadioGroup},
  {"region", ax::mojom::blink::Role::kRegion},
  {"row", ax::mojom::blink::Role::kRow},
  {"rowgroup", ax::mojom::blink::Role::kRowGroup},
  {"rowheader", ax::mojom::blink::Role::kRowHeader},
  {"scrollbar", ax::mojom::blink::Role::kScrollBar},
  {"search", ax::mojom::blink::Role::kSearch},
  {"searchbox", ax::mojom::blink::Role::kSearchBox},
  {"sectionfooter", ax::mojom::blink::Role::kSectionFooter},
  {"sectionheader", ax::mojom::blink::Role::kSectionHeader},
  {"separator", ax::mojom::blink::Role::kSplitter},
  {"slider", ax::mojom::blink::Role::kSlider},
  {"spinbutton", ax::mojom::blink::Role::kSpinButton},
  {"status", ax::mojom::blink::Role::kStatus},
  {"strong", ax::mojom::blink::Role::kStrong},
  {"subscript", ax::mojom::blink::Role::kSubscript},
  {"suggestion", ax::mojom::blink::Role::kSuggestion},
  {"superscript", ax::mojom::blink::Role::kSuperscript},
  {"switch", ax::mojom::blink::Role::kSwitch},
  {"tab", ax::mojom::blink::Role::kTab},
  {"table", ax::mojom::blink::Role::kTable},
  {"tablist", ax::mojom::blink::Role::kTabList},
  {"tabpanel", ax::mojom::blink::Role::kTabPanel},
  {"term", ax::mojom::blink::Role::kTerm},
  {"textbox", ax::mojom::blink::Role::kTextField},
  {"time", ax::mojom::blink::Role::kTime},
  {"timer", ax::mojom::blink::Role::kTimer},
  {"toolbar", ax::mojom::blink::Role::kToolbar},
  {"tooltip", ax::mojom::blink::Role::kTooltip},
  {"tree", ax::mojom::blink::Role::kTree},
  {"treegrid", ax::mojom::blink::Role::kTreeGrid},
  {"treeitem", ax::mojom::blink::Role::kTreeItem},
};

// Deprecated ARIA role mappings (e.g. "directory" -> `kList`).
static const RoleEntry kDeprecatedAriaRoles[] = {
  {"directory", ax::mojom::blink::Role::kList},
  {"img", ax::mojom::blink::Role::kImage},
  {"presentation", ax::mojom::blink::Role::kNone},
};

// ARIA role utilities.

Vector<AtomicString> GetAriaRoleNames() {
  Vector<AtomicString> names;
  for (const auto& entry : kAriaRoles) {
    names.push_back(AtomicString(entry.aria_role));
  }
  return names;
}

ax::mojom::blink::Role AriaRoleToInternalRole(const AtomicString& aria_role_name) {
  using StringToRoleMap = HashMap<AtomicString, ax::mojom::blink::Role>;
  DEFINE_STATIC_LOCAL(StringToRoleMap, role_map, ());

  if (role_map.empty()) {
    for (const auto& entry : kAriaRoles) {
      role_map.Set(AtomicString(entry.aria_role), entry.internal_role);
    }
    for (const auto& entry : kDeprecatedAriaRoles) {
      role_map.Set(AtomicString(entry.aria_role), entry.internal_role);
    }
  }

  auto it = role_map.find(aria_role_name);
  if (it != role_map.end()) {
    return it->value;
  }
  return ax::mojom::blink::Role::kUnknown;
}

const AtomicString& InternalRoleToAriaRole(ax::mojom::blink::Role internal_role) {
  using RoleToStringMap = HashMap<ax::mojom::blink::Role, AtomicString>;
  DEFINE_STATIC_LOCAL(RoleToStringMap, role_map, ());

  auto it = role_map.find(internal_role);
  if (it != role_map.end()) {
    return it->value;
  }

  const char* role_string = nullptr;
  switch (internal_role) {
    case ax::mojom::blink::Role::kAlert:
      role_string = "alert";
      break;
    case ax::mojom::blink::Role::kAlertDialog:
      role_string = "alertdialog";
      break;
    case ax::mojom::blink::Role::kApplication:
      role_string = "application";
      break;
    case ax::mojom::blink::Role::kArticle:
      role_string = "article";
      break;
    case ax::mojom::blink::Role::kBanner:
      role_string = "banner";
      break;
    case ax::mojom::blink::Role::kBlockquote:
      role_string = "blockquote";
      break;
    case ax::mojom::blink::Role::kButton:
      role_string = "button";
      break;
    case ax::mojom::blink::Role::kCaption:
      role_string = "caption";
      break;
    case ax::mojom::blink::Role::kCell:
      role_string = "cell";
      break;
    case ax::mojom::blink::Role::kCheckBox:
      role_string = "checkbox";
      break;
    case ax::mojom::blink::Role::kCode:
      role_string = "code";
      break;
    case ax::mojom::blink::Role::kColumnHeader:
      role_string = "columnheader";
      break;
    case ax::mojom::blink::Role::kComboBoxGrouping:
      role_string = "combobox";
      break;
    case ax::mojom::blink::Role::kComment:
      role_string = "comment";
      break;
    case ax::mojom::blink::Role::kComplementary:
      role_string = "complementary";
      break;
    case ax::mojom::blink::Role::kContentInfo:
      role_string = "contentinfo";
      break;
    case ax::mojom::blink::Role::kDefinition:
      role_string = "definition";
      break;
    case ax::mojom::blink::Role::kContentDeletion:
      role_string = "deletion";
      break;
    case ax::mojom::blink::Role::kDialog:
      role_string = "dialog";
      break;
    case ax::mojom::blink::Role::kDocAbstract:
      role_string = "doc-abstract";
      break;
    case ax::mojom::blink::Role::kDocAcknowledgments:
      role_string = "doc-acknowledgments";
      break;
    case ax::mojom::blink::Role::kDocAfterword:
      role_string = "doc-afterword";
      break;
    case ax::mojom::blink::Role::kDocAppendix:
      role_string = "doc-appendix";
      break;
    case ax::mojom::blink::Role::kDocBackLink:
      role_string = "doc-backlink";
      break;
    case ax::mojom::blink::Role::kDocBiblioEntry:
      role_string = "doc-biblioentry";
      break;
    case ax::mojom::blink::Role::kDocBibliography:
      role_string = "doc-bibliography";
      break;
    case ax::mojom::blink::Role::kDocBiblioRef:
      role_string = "doc-biblioref";
      break;
    case ax::mojom::blink::Role::kDocChapter:
      role_string = "doc-chapter";
      break;
    case ax::mojom::blink::Role::kDocColophon:
      role_string = "doc-colophon";
      break;
    case ax::mojom::blink::Role::kDocConclusion:
      role_string = "doc-conclusion";
      break;
    case ax::mojom::blink::Role::kDocCover:
      role_string = "doc-cover";
      break;
    case ax::mojom::blink::Role::kDocCredit:
      role_string = "doc-credit";
      break;
    case ax::mojom::blink::Role::kDocCredits:
      role_string = "doc-credits";
      break;
    case ax::mojom::blink::Role::kDocDedication:
      role_string = "doc-dedication";
      break;
    case ax::mojom::blink::Role::kDocEndnote:
      role_string = "doc-endnote";
      break;
    case ax::mojom::blink::Role::kDocEndnotes:
      role_string = "doc-endnotes";
      break;
    case ax::mojom::blink::Role::kDocEpigraph:
      role_string = "doc-epigraph";
      break;
    case ax::mojom::blink::Role::kDocEpilogue:
      role_string = "doc-epilogue";
      break;
    case ax::mojom::blink::Role::kDocErrata:
      role_string = "doc-errata";
      break;
    case ax::mojom::blink::Role::kDocExample:
      role_string = "doc-example";
      break;
    case ax::mojom::blink::Role::kDocFootnote:
      role_string = "doc-footnote";
      break;
    case ax::mojom::blink::Role::kDocForeword:
      role_string = "doc-foreword";
      break;
    case ax::mojom::blink::Role::kDocGlossary:
      role_string = "doc-glossary";
      break;
    case ax::mojom::blink::Role::kDocGlossRef:
      role_string = "doc-glossref";
      break;
    case ax::mojom::blink::Role::kDocIndex:
      role_string = "doc-index";
      break;
    case ax::mojom::blink::Role::kDocIntroduction:
      role_string = "doc-introduction";
      break;
    case ax::mojom::blink::Role::kDocNoteRef:
      role_string = "doc-noteref";
      break;
    case ax::mojom::blink::Role::kDocNotice:
      role_string = "doc-notice";
      break;
    case ax::mojom::blink::Role::kDocPageBreak:
      role_string = "doc-pagebreak";
      break;
    case ax::mojom::blink::Role::kDocPageFooter:
      role_string = "doc-pagefooter";
      break;
    case ax::mojom::blink::Role::kDocPageHeader:
      role_string = "doc-pageheader";
      break;
    case ax::mojom::blink::Role::kDocPageList:
      role_string = "doc-pagelist";
      break;
    case ax::mojom::blink::Role::kDocPart:
      role_string = "doc-part";
      break;
    case ax::mojom::blink::Role::kDocPreface:
      role_string = "doc-preface";
      break;
    case ax::mojom::blink::Role::kDocPrologue:
      role_string = "doc-prologue";
      break;
    case ax::mojom::blink::Role::kDocPullquote:
      role_string = "doc-pullquote";
      break;
    case ax::mojom::blink::Role::kDocQna:
      role_string = "doc-qna";
      break;
    case ax::mojom::blink::Role::kDocSubtitle:
      role_string = "doc-subtitle";
      break;
    case ax::mojom::blink::Role::kDocTip:
      role_string = "doc-tip";
      break;
    case ax::mojom::blink::Role::kDocToc:
      role_string = "doc-toc";
      break;
    case ax::mojom::blink::Role::kDocument:
      role_string = "document";
      break;
    case ax::mojom::blink::Role::kEmphasis:
      role_string = "emphasis";
      break;
    case ax::mojom::blink::Role::kFeed:
      role_string = "feed";
      break;
    case ax::mojom::blink::Role::kFigure:
      role_string = "figure";
      break;
    case ax::mojom::blink::Role::kForm:
      role_string = "form";
      break;
    case ax::mojom::blink::Role::kGenericContainer:
      role_string = "generic";
      break;
    case ax::mojom::blink::Role::kGraphicsDocument:
      role_string = "graphics-document";
      break;
    case ax::mojom::blink::Role::kGraphicsObject:
      role_string = "graphics-object";
      break;
    case ax::mojom::blink::Role::kGraphicsSymbol:
      role_string = "graphics-symbol";
      break;
    case ax::mojom::blink::Role::kGrid:
      role_string = "grid";
      break;
    case ax::mojom::blink::Role::kGridCell:
      role_string = "gridcell";
      break;
    case ax::mojom::blink::Role::kGroup:
      role_string = "group";
      break;
    case ax::mojom::blink::Role::kHeading:
      role_string = "heading";
      break;
    case ax::mojom::blink::Role::kImage:
      role_string = "image";
      break;
    case ax::mojom::blink::Role::kContentInsertion:
      role_string = "insertion";
      break;
    case ax::mojom::blink::Role::kLink:
      role_string = "link";
      break;
    case ax::mojom::blink::Role::kList:
      role_string = "list";
      break;
    case ax::mojom::blink::Role::kListBox:
      role_string = "listbox";
      break;
    case ax::mojom::blink::Role::kListItem:
      role_string = "listitem";
      break;
    case ax::mojom::blink::Role::kLog:
      role_string = "log";
      break;
    case ax::mojom::blink::Role::kMain:
      role_string = "main";
      break;
    case ax::mojom::blink::Role::kMark:
      role_string = "mark";
      break;
    case ax::mojom::blink::Role::kMarquee:
      role_string = "marquee";
      break;
    case ax::mojom::blink::Role::kMath:
      role_string = "math";
      break;
    case ax::mojom::blink::Role::kMenu:
      role_string = "menu";
      break;
    case ax::mojom::blink::Role::kMenuBar:
      role_string = "menubar";
      break;
    case ax::mojom::blink::Role::kMenuItem:
      role_string = "menuitem";
      break;
    case ax::mojom::blink::Role::kMenuItemCheckBox:
      role_string = "menuitemcheckbox";
      break;
    case ax::mojom::blink::Role::kMenuItemRadio:
      role_string = "menuitemradio";
      break;
    case ax::mojom::blink::Role::kMeter:
      role_string = "meter";
      break;
    case ax::mojom::blink::Role::kNavigation:
      role_string = "navigation";
      break;
    case ax::mojom::blink::Role::kNone:
      role_string = "none";
      break;
    case ax::mojom::blink::Role::kNote:
      role_string = "note";
      break;
    case ax::mojom::blink::Role::kListBoxOption:
      role_string = "option";
      break;
    case ax::mojom::blink::Role::kParagraph:
      role_string = "paragraph";
      break;
    case ax::mojom::blink::Role::kProgressIndicator:
      role_string = "progressbar";
      break;
    case ax::mojom::blink::Role::kRadioButton:
      role_string = "radio";
      break;
    case ax::mojom::blink::Role::kRadioGroup:
      role_string = "radiogroup";
      break;
    case ax::mojom::blink::Role::kRegion:
      role_string = "region";
      break;
    case ax::mojom::blink::Role::kRow:
      role_string = "row";
      break;
    case ax::mojom::blink::Role::kRowGroup:
      role_string = "rowgroup";
      break;
    case ax::mojom::blink::Role::kRowHeader:
      role_string = "rowheader";
      break;
    case ax::mojom::blink::Role::kScrollBar:
      role_string = "scrollbar";
      break;
    case ax::mojom::blink::Role::kSearch:
      role_string = "search";
      break;
    case ax::mojom::blink::Role::kSearchBox:
      role_string = "searchbox";
      break;
    case ax::mojom::blink::Role::kSectionFooter:
      role_string = "sectionfooter";
      break;
    case ax::mojom::blink::Role::kSectionHeader:
      role_string = "sectionheader";
      break;
    case ax::mojom::blink::Role::kSplitter:
      role_string = "separator";
      break;
    case ax::mojom::blink::Role::kSlider:
      role_string = "slider";
      break;
    case ax::mojom::blink::Role::kSpinButton:
      role_string = "spinbutton";
      break;
    case ax::mojom::blink::Role::kStatus:
      role_string = "status";
      break;
    case ax::mojom::blink::Role::kStrong:
      role_string = "strong";
      break;
    case ax::mojom::blink::Role::kSubscript:
      role_string = "subscript";
      break;
    case ax::mojom::blink::Role::kSuggestion:
      role_string = "suggestion";
      break;
    case ax::mojom::blink::Role::kSuperscript:
      role_string = "superscript";
      break;
    case ax::mojom::blink::Role::kSwitch:
      role_string = "switch";
      break;
    case ax::mojom::blink::Role::kTab:
      role_string = "tab";
      break;
    case ax::mojom::blink::Role::kTable:
      role_string = "table";
      break;
    case ax::mojom::blink::Role::kTabList:
      role_string = "tablist";
      break;
    case ax::mojom::blink::Role::kTabPanel:
      role_string = "tabpanel";
      break;
    case ax::mojom::blink::Role::kTerm:
      role_string = "term";
      break;
    case ax::mojom::blink::Role::kTextField:
      role_string = "textbox";
      break;
    case ax::mojom::blink::Role::kTime:
      role_string = "time";
      break;
    case ax::mojom::blink::Role::kTimer:
      role_string = "timer";
      break;
    case ax::mojom::blink::Role::kToolbar:
      role_string = "toolbar";
      break;
    case ax::mojom::blink::Role::kTooltip:
      role_string = "tooltip";
      break;
    case ax::mojom::blink::Role::kTree:
      role_string = "tree";
      break;
    case ax::mojom::blink::Role::kTreeGrid:
      role_string = "treegrid";
      break;
    case ax::mojom::blink::Role::kTreeItem:
      role_string = "treeitem";
      break;
    case ax::mojom::blink::Role::kHeader:
      role_string = "banner";
      break;
    case ax::mojom::blink::Role::kToggleButton:
      role_string = "button";
      break;
    case ax::mojom::blink::Role::kPopUpButton:
      role_string = "button";
      break;
    case ax::mojom::blink::Role::kComboBoxMenuButton:
      role_string = "combobox";
      break;
    case ax::mojom::blink::Role::kComboBoxSelect:
      role_string = "combobox";
      break;
    case ax::mojom::blink::Role::kTextFieldWithComboBox:
      role_string = "combobox";
      break;
    case ax::mojom::blink::Role::kFooter:
      role_string = "contentinfo";
      break;
    case ax::mojom::blink::Role::kSectionWithoutName:
      role_string = "generic";
      break;
    case ax::mojom::blink::Role::kDetails:
      role_string = "group";
      break;
    case ax::mojom::blink::Role::kMenuListOption:
      role_string = "option";
      break;
    default:
      return g_empty_atom;
  }

  return role_map.Set(internal_role, AtomicString(role_string)).stored_value->value;
}

}  // namespace blink
