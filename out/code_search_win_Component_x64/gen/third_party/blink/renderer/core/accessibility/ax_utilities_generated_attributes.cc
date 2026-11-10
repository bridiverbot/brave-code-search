// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Generated from template:
//   templates/ax_utilities_generated_attributes.cc.tmpl
// and input files:
//   ../../third_party/blink/renderer/core/html/aria_properties.json5


#include "third_party/blink/renderer/core/accessibility/ax_utilities_generated.h"

#include <algorithm>
#include "third_party/blink/renderer/core/html_names.h"
#include "third_party/blink/renderer/core/dom/qualified_name.h"
#include "ui/accessibility/ax_enums.mojom-blink.h"

namespace blink {

// All ARIA attributes.
Vector<const QualifiedName*> GetAriaAttributes() {
  static const QualifiedName* const kAriaAttributes[] = {
    &html_names::kAriaActionsAttr,
    &html_names::kAriaControlsAttr,
    &html_names::kAriaDescribedbyAttr,
    &html_names::kAriaFlowtoAttr,
    &html_names::kAriaLabelledbyAttr,
    &html_names::kAriaLabeledbyAttr,
    &html_names::kAriaOwnsAttr,
    &html_names::kAriaActivedescendantAttr,
    &html_names::kAriaDetailsAttr,
    &html_names::kAriaErrormessageAttr,
    &html_names::kAriaAtomicAttr,
    &html_names::kAriaBusyAttr,
    &html_names::kAriaDisabledAttr,
    &html_names::kAriaModalAttr,
    &html_names::kAriaMultilineAttr,
    &html_names::kAriaMultiselectableAttr,
    &html_names::kAriaReadonlyAttr,
    &html_names::kAriaRequiredAttr,
    &html_names::kAriaAutocompleteAttr,
    &html_names::kAriaCheckedAttr,
    &html_names::kAriaCurrentAttr,
    &html_names::kAriaExpandedAttr,
    &html_names::kAriaHaspopupAttr,
    &html_names::kAriaHiddenAttr,
    &html_names::kAriaInvalidAttr,
    &html_names::kAriaLiveAttr,
    &html_names::kAriaOrientationAttr,
    &html_names::kAriaPressedAttr,
    &html_names::kAriaSelectedAttr,
    &html_names::kAriaSortAttr,
    &html_names::kAriaBraillelabelAttr,
    &html_names::kAriaBrailleroledescriptionAttr,
    &html_names::kAriaColindextextAttr,
    &html_names::kAriaDescriptionAttr,
    &html_names::kAriaKeyshortcutsAttr,
    &html_names::kAriaLabelAttr,
    &html_names::kAriaPlaceholderAttr,
    &html_names::kAriaRoledescriptionAttr,
    &html_names::kAriaRowindextextAttr,
    &html_names::kAriaValuetextAttr,
    &html_names::kAriaColcountAttr,
    &html_names::kAriaColindexAttr,
    &html_names::kAriaColspanAttr,
    &html_names::kAriaLevelAttr,
    &html_names::kAriaPosinsetAttr,
    &html_names::kAriaRowcountAttr,
    &html_names::kAriaRowindexAttr,
    &html_names::kAriaRowspanAttr,
    &html_names::kAriaSetsizeAttr,
    &html_names::kAriaRelevantAttr,
    &html_names::kAriaValuemaxAttr,
    &html_names::kAriaValueminAttr,
    &html_names::kAriaValuenowAttr,
  };
  return Vector<const QualifiedName*>(kAriaAttributes);
}

// ARIA attributes grouped by type.
Vector<const QualifiedName*> GetAriaBooleanAttributes() {
  static const QualifiedName* const kAriaBooleanAttributes[] = {
    &html_names::kAriaAtomicAttr,
    &html_names::kAriaBusyAttr,
    &html_names::kAriaDisabledAttr,
    &html_names::kAriaModalAttr,
    &html_names::kAriaMultilineAttr,
    &html_names::kAriaMultiselectableAttr,
    &html_names::kAriaReadonlyAttr,
    &html_names::kAriaRequiredAttr,
  };
  return Vector<const QualifiedName*>(kAriaBooleanAttributes);
}
Vector<const QualifiedName*> GetAriaDecimalAttributes() {
  static const QualifiedName* const kAriaDecimalAttributes[] = {
    &html_names::kAriaValuemaxAttr,
    &html_names::kAriaValueminAttr,
    &html_names::kAriaValuenowAttr,
  };
  return Vector<const QualifiedName*>(kAriaDecimalAttributes);
}
Vector<const QualifiedName*> GetAriaIdrefAttributes() {
  static const QualifiedName* const kAriaIdrefAttributes[] = {
    &html_names::kAriaActivedescendantAttr,
    &html_names::kAriaDetailsAttr,
    &html_names::kAriaErrormessageAttr,
  };
  return Vector<const QualifiedName*>(kAriaIdrefAttributes);
}
Vector<const QualifiedName*> GetAriaIdrefListAttributes() {
  static const QualifiedName* const kAriaIdrefListAttributes[] = {
    &html_names::kAriaActionsAttr,
    &html_names::kAriaControlsAttr,
    &html_names::kAriaDescribedbyAttr,
    &html_names::kAriaFlowtoAttr,
    &html_names::kAriaLabelledbyAttr,
    &html_names::kAriaLabeledbyAttr,
    &html_names::kAriaOwnsAttr,
  };
  return Vector<const QualifiedName*>(kAriaIdrefListAttributes);
}
Vector<const QualifiedName*> GetAriaIntegerAttributes() {
  static const QualifiedName* const kAriaIntegerAttributes[] = {
    &html_names::kAriaColcountAttr,
    &html_names::kAriaColindexAttr,
    &html_names::kAriaColspanAttr,
    &html_names::kAriaLevelAttr,
    &html_names::kAriaPosinsetAttr,
    &html_names::kAriaRowcountAttr,
    &html_names::kAriaRowindexAttr,
    &html_names::kAriaRowspanAttr,
    &html_names::kAriaSetsizeAttr,
  };
  return Vector<const QualifiedName*>(kAriaIntegerAttributes);
}
Vector<const QualifiedName*> GetAriaStringAttributes() {
  static const QualifiedName* const kAriaStringAttributes[] = {
    &html_names::kAriaBraillelabelAttr,
    &html_names::kAriaBrailleroledescriptionAttr,
    &html_names::kAriaColindextextAttr,
    &html_names::kAriaDescriptionAttr,
    &html_names::kAriaKeyshortcutsAttr,
    &html_names::kAriaLabelAttr,
    &html_names::kAriaPlaceholderAttr,
    &html_names::kAriaRoledescriptionAttr,
    &html_names::kAriaRowindextextAttr,
    &html_names::kAriaValuetextAttr,
  };
  return Vector<const QualifiedName*>(kAriaStringAttributes);
}
Vector<const QualifiedName*> GetAriaTokenAttributes() {
  static const QualifiedName* const kAriaTokenAttributes[] = {
    &html_names::kAriaAutocompleteAttr,
    &html_names::kAriaCheckedAttr,
    &html_names::kAriaCurrentAttr,
    &html_names::kAriaExpandedAttr,
    &html_names::kAriaHaspopupAttr,
    &html_names::kAriaHiddenAttr,
    &html_names::kAriaInvalidAttr,
    &html_names::kAriaLiveAttr,
    &html_names::kAriaOrientationAttr,
    &html_names::kAriaPressedAttr,
    &html_names::kAriaSelectedAttr,
    &html_names::kAriaSortAttr,
  };
  return Vector<const QualifiedName*>(kAriaTokenAttributes);
}
Vector<const QualifiedName*> GetAriaTokenListAttributes() {
  static const QualifiedName* const kAriaTokenListAttributes[] = {
    &html_names::kAriaRelevantAttr,
  };
  return Vector<const QualifiedName*>(kAriaTokenListAttributes);
}

// ARIA attribute type classification functions.
bool IsAriaBooleanAttribute(const QualifiedName& attribute) {
  const auto& attributes = GetAriaBooleanAttributes();
  return std::find(attributes.begin(), attributes.end(), &attribute) != attributes.end();
}
bool IsAriaDecimalAttribute(const QualifiedName& attribute) {
  const auto& attributes = GetAriaDecimalAttributes();
  return std::find(attributes.begin(), attributes.end(), &attribute) != attributes.end();
}
bool IsAriaIdrefAttribute(const QualifiedName& attribute) {
  const auto& attributes = GetAriaIdrefAttributes();
  return std::find(attributes.begin(), attributes.end(), &attribute) != attributes.end();
}
bool IsAriaIdrefListAttribute(const QualifiedName& attribute) {
  const auto& attributes = GetAriaIdrefListAttributes();
  return std::find(attributes.begin(), attributes.end(), &attribute) != attributes.end();
}
bool IsAriaIntegerAttribute(const QualifiedName& attribute) {
  const auto& attributes = GetAriaIntegerAttributes();
  return std::find(attributes.begin(), attributes.end(), &attribute) != attributes.end();
}
bool IsAriaStringAttribute(const QualifiedName& attribute) {
  const auto& attributes = GetAriaStringAttributes();
  return std::find(attributes.begin(), attributes.end(), &attribute) != attributes.end();
}
bool IsAriaTokenAttribute(const QualifiedName& attribute) {
  const auto& attributes = GetAriaTokenAttributes();
  return std::find(attributes.begin(), attributes.end(), &attribute) != attributes.end();
}
bool IsAriaTokenListAttribute(const QualifiedName& attribute) {
  const auto& attributes = GetAriaTokenListAttributes();
  return std::find(attributes.begin(), attributes.end(), &attribute) != attributes.end();
}

// ARIA attribute enum value accessors.
Vector<AtomicString> GetAriaAutocompleteValues() {
  return Vector<AtomicString>({
    AtomicString("inline"),
    AtomicString("list"),
    AtomicString("both"),
    AtomicString("none")
  });
}
Vector<AtomicString> GetAriaCheckedValues() {
  return Vector<AtomicString>({
    AtomicString("true"),
    AtomicString("false"),
    AtomicString("mixed"),
    AtomicString("undefined")
  });
}
Vector<AtomicString> GetAriaCurrentValues() {
  return Vector<AtomicString>({
    AtomicString("page"),
    AtomicString("step"),
    AtomicString("location"),
    AtomicString("date"),
    AtomicString("time"),
    AtomicString("true"),
    AtomicString("false")
  });
}
Vector<AtomicString> GetAriaExpandedValues() {
  return Vector<AtomicString>({
    AtomicString("true"),
    AtomicString("false"),
    AtomicString("undefined")
  });
}
Vector<AtomicString> GetAriaHaspopupValues() {
  return Vector<AtomicString>({
    AtomicString("false"),
    AtomicString("true"),
    AtomicString("menu"),
    AtomicString("listbox"),
    AtomicString("tree"),
    AtomicString("grid"),
    AtomicString("dialog")
  });
}
Vector<AtomicString> GetAriaHiddenValues() {
  return Vector<AtomicString>({
    AtomicString("true"),
    AtomicString("false"),
    AtomicString("undefined")
  });
}
Vector<AtomicString> GetAriaInvalidValues() {
  return Vector<AtomicString>({
    AtomicString("grammar"),
    AtomicString("false"),
    AtomicString("spelling"),
    AtomicString("true")
  });
}
Vector<AtomicString> GetAriaLiveValues() {
  return Vector<AtomicString>({
    AtomicString("off"),
    AtomicString("polite"),
    AtomicString("assertive"),
    AtomicString("undefined")
  });
}
Vector<AtomicString> GetAriaOrientationValues() {
  return Vector<AtomicString>({
    AtomicString("horizontal"),
    AtomicString("undefined"),
    AtomicString("vertical")
  });
}
Vector<AtomicString> GetAriaPressedValues() {
  return Vector<AtomicString>({
    AtomicString("true"),
    AtomicString("false"),
    AtomicString("mixed"),
    AtomicString("undefined")
  });
}
Vector<AtomicString> GetAriaSelectedValues() {
  return Vector<AtomicString>({
    AtomicString("true"),
    AtomicString("false"),
    AtomicString("undefined")
  });
}
Vector<AtomicString> GetAriaSortValues() {
  return Vector<AtomicString>({
    AtomicString("ascending"),
    AtomicString("descending"),
    AtomicString("none"),
    AtomicString("other")
  });
}
Vector<AtomicString> GetAriaRelevantValues() {
  return Vector<AtomicString>({
    AtomicString("additions"),
    AtomicString("removals"),
    AtomicString("text"),
    AtomicString("all")
  });
}

// ARIA attribute default/implicit value functions.
const AtomicString& GetImplicitAriaAtomic(ax::mojom::blink::Role internal_role) {
  switch (internal_role) {
    case ax::mojom::blink::Role::kAlert:
    case ax::mojom::blink::Role::kStatus:
      {
        DEFINE_STATIC_LOCAL(AtomicString, kValue, ("true"));
        return kValue;
      }
    default:
      break;
  }
  DEFINE_STATIC_LOCAL(AtomicString, kDefaultValue, ("false"));
  return kDefaultValue;
}

const AtomicString& GetImplicitAriaBusy(ax::mojom::blink::Role internal_role) {
  DEFINE_STATIC_LOCAL(AtomicString, kDefaultValue, ("false"));
  return kDefaultValue;
}

const AtomicString& GetImplicitAriaDisabled(ax::mojom::blink::Role internal_role) {
  DEFINE_STATIC_LOCAL(AtomicString, kDefaultValue, ("false"));
  return kDefaultValue;
}

const AtomicString& GetImplicitAriaModal(ax::mojom::blink::Role internal_role) {
  DEFINE_STATIC_LOCAL(AtomicString, kDefaultValue, ("false"));
  return kDefaultValue;
}

const AtomicString& GetImplicitAriaMultiline(ax::mojom::blink::Role internal_role) {
  DEFINE_STATIC_LOCAL(AtomicString, kDefaultValue, ("false"));
  return kDefaultValue;
}

const AtomicString& GetImplicitAriaMultiselectable(ax::mojom::blink::Role internal_role) {
  DEFINE_STATIC_LOCAL(AtomicString, kDefaultValue, ("false"));
  return kDefaultValue;
}

const AtomicString& GetImplicitAriaReadonly(ax::mojom::blink::Role internal_role) {
  DEFINE_STATIC_LOCAL(AtomicString, kDefaultValue, ("false"));
  return kDefaultValue;
}

const AtomicString& GetImplicitAriaRequired(ax::mojom::blink::Role internal_role) {
  DEFINE_STATIC_LOCAL(AtomicString, kDefaultValue, ("false"));
  return kDefaultValue;
}

const AtomicString& GetImplicitAriaAutocomplete(ax::mojom::blink::Role internal_role) {
  DEFINE_STATIC_LOCAL(AtomicString, kDefaultValue, ("none"));
  return kDefaultValue;
}

const AtomicString& GetImplicitAriaChecked(ax::mojom::blink::Role internal_role) {
  switch (internal_role) {
    case ax::mojom::blink::Role::kCheckBox:
    case ax::mojom::blink::Role::kMenuItemCheckBox:
    case ax::mojom::blink::Role::kMenuItemRadio:
    case ax::mojom::blink::Role::kRadioButton:
    case ax::mojom::blink::Role::kSwitch:
      {
        DEFINE_STATIC_LOCAL(AtomicString, kValue, ("false"));
        return kValue;
      }
    default:
      break;
  }
  DEFINE_STATIC_LOCAL(AtomicString, kDefaultValue, ("undefined"));
  return kDefaultValue;
}

const AtomicString& GetImplicitAriaCurrent(ax::mojom::blink::Role internal_role) {
  DEFINE_STATIC_LOCAL(AtomicString, kDefaultValue, ("false"));
  return kDefaultValue;
}

const AtomicString& GetImplicitAriaExpanded(ax::mojom::blink::Role internal_role) {
  switch (internal_role) {
    case ax::mojom::blink::Role::kComboBoxGrouping:
    case ax::mojom::blink::Role::kComboBoxMenuButton:
    case ax::mojom::blink::Role::kComboBoxSelect:
    case ax::mojom::blink::Role::kTextFieldWithComboBox:
      {
        DEFINE_STATIC_LOCAL(AtomicString, kValue, ("false"));
        return kValue;
      }
    default:
      break;
  }
  DEFINE_STATIC_LOCAL(AtomicString, kDefaultValue, ("undefined"));
  return kDefaultValue;
}

const AtomicString& GetImplicitAriaHaspopup(ax::mojom::blink::Role internal_role) {
  switch (internal_role) {
    case ax::mojom::blink::Role::kComboBoxGrouping:
    case ax::mojom::blink::Role::kComboBoxMenuButton:
    case ax::mojom::blink::Role::kComboBoxSelect:
    case ax::mojom::blink::Role::kTextFieldWithComboBox:
      {
        DEFINE_STATIC_LOCAL(AtomicString, kValue, ("listbox"));
        return kValue;
      }
    default:
      break;
  }
  DEFINE_STATIC_LOCAL(AtomicString, kDefaultValue, ("false"));
  return kDefaultValue;
}

const AtomicString& GetImplicitAriaHidden(ax::mojom::blink::Role internal_role) {
  DEFINE_STATIC_LOCAL(AtomicString, kDefaultValue, ("undefined"));
  return kDefaultValue;
}

const AtomicString& GetImplicitAriaInvalid(ax::mojom::blink::Role internal_role) {
  DEFINE_STATIC_LOCAL(AtomicString, kDefaultValue, ("false"));
  return kDefaultValue;
}

const AtomicString& GetImplicitAriaLive(ax::mojom::blink::Role internal_role) {
  switch (internal_role) {
    case ax::mojom::blink::Role::kAlert:
      {
        DEFINE_STATIC_LOCAL(AtomicString, kValue, ("assertive"));
        return kValue;
      }
    case ax::mojom::blink::Role::kLog:
    case ax::mojom::blink::Role::kStatus:
      {
        DEFINE_STATIC_LOCAL(AtomicString, kValue, ("polite"));
        return kValue;
      }
    default:
      break;
  }
  DEFINE_STATIC_LOCAL(AtomicString, kDefaultValue, ("undefined"));
  return kDefaultValue;
}

const AtomicString& GetImplicitAriaOrientation(ax::mojom::blink::Role internal_role) {
  switch (internal_role) {
    case ax::mojom::blink::Role::kList:
    case ax::mojom::blink::Role::kListBox:
    case ax::mojom::blink::Role::kMenu:
    case ax::mojom::blink::Role::kScrollBar:
    case ax::mojom::blink::Role::kTree:
      {
        DEFINE_STATIC_LOCAL(AtomicString, kValue, ("vertical"));
        return kValue;
      }
    case ax::mojom::blink::Role::kMenuBar:
    case ax::mojom::blink::Role::kSplitter:
    case ax::mojom::blink::Role::kSlider:
    case ax::mojom::blink::Role::kTabList:
    case ax::mojom::blink::Role::kToolbar:
      {
        DEFINE_STATIC_LOCAL(AtomicString, kValue, ("horizontal"));
        return kValue;
      }
    default:
      break;
  }
  DEFINE_STATIC_LOCAL(AtomicString, kDefaultValue, ("undefined"));
  return kDefaultValue;
}

const AtomicString& GetImplicitAriaPressed(ax::mojom::blink::Role internal_role) {
  DEFINE_STATIC_LOCAL(AtomicString, kDefaultValue, ("undefined"));
  return kDefaultValue;
}

const AtomicString& GetImplicitAriaSelected(ax::mojom::blink::Role internal_role) {
  switch (internal_role) {
    case ax::mojom::blink::Role::kListBoxOption:
    case ax::mojom::blink::Role::kTab:
    case ax::mojom::blink::Role::kMenuListOption:
      {
        DEFINE_STATIC_LOCAL(AtomicString, kValue, ("false"));
        return kValue;
      }
    default:
      break;
  }
  DEFINE_STATIC_LOCAL(AtomicString, kDefaultValue, ("undefined"));
  return kDefaultValue;
}

const AtomicString& GetImplicitAriaSort(ax::mojom::blink::Role internal_role) {
  DEFINE_STATIC_LOCAL(AtomicString, kDefaultValue, ("none"));
  return kDefaultValue;
}

const AtomicString& GetImplicitAriaLevel(ax::mojom::blink::Role internal_role) {
  switch (internal_role) {
    case ax::mojom::blink::Role::kHeading:
      {
        DEFINE_STATIC_LOCAL(AtomicString, kValue, ("2"));
        return kValue;
      }
    default:
      break;
  }
  return g_empty_atom;
}

const AtomicString& GetImplicitAriaRelevant(ax::mojom::blink::Role internal_role) {
  DEFINE_STATIC_LOCAL(AtomicString, kDefaultValue, ("additions text"));
  return kDefaultValue;
}

const AtomicString& GetImplicitAriaValuemax(ax::mojom::blink::Role internal_role) {
  switch (internal_role) {
    case ax::mojom::blink::Role::kMeter:
    case ax::mojom::blink::Role::kProgressIndicator:
    case ax::mojom::blink::Role::kScrollBar:
    case ax::mojom::blink::Role::kSplitter:
    case ax::mojom::blink::Role::kSlider:
      {
        DEFINE_STATIC_LOCAL(AtomicString, kValue, ("100"));
        return kValue;
      }
    default:
      break;
  }
  return g_empty_atom;
}

const AtomicString& GetImplicitAriaValuemin(ax::mojom::blink::Role internal_role) {
  switch (internal_role) {
    case ax::mojom::blink::Role::kMeter:
    case ax::mojom::blink::Role::kProgressIndicator:
    case ax::mojom::blink::Role::kScrollBar:
    case ax::mojom::blink::Role::kSplitter:
    case ax::mojom::blink::Role::kSlider:
      {
        DEFINE_STATIC_LOCAL(AtomicString, kValue, ("0"));
        return kValue;
      }
    default:
      break;
  }
  return g_empty_atom;
}


// General lookup function to get valid enum values for any ARIA attribute.
Vector<AtomicString> GetValidValuesForAriaAttribute(const QualifiedName& attribute) {
  if (&attribute == &html_names::kAriaAutocompleteAttr) {
    return GetAriaAutocompleteValues();
  }
  if (&attribute == &html_names::kAriaCheckedAttr) {
    return GetAriaCheckedValues();
  }
  if (&attribute == &html_names::kAriaCurrentAttr) {
    return GetAriaCurrentValues();
  }
  if (&attribute == &html_names::kAriaExpandedAttr) {
    return GetAriaExpandedValues();
  }
  if (&attribute == &html_names::kAriaHaspopupAttr) {
    return GetAriaHaspopupValues();
  }
  if (&attribute == &html_names::kAriaHiddenAttr) {
    return GetAriaHiddenValues();
  }
  if (&attribute == &html_names::kAriaInvalidAttr) {
    return GetAriaInvalidValues();
  }
  if (&attribute == &html_names::kAriaLiveAttr) {
    return GetAriaLiveValues();
  }
  if (&attribute == &html_names::kAriaOrientationAttr) {
    return GetAriaOrientationValues();
  }
  if (&attribute == &html_names::kAriaPressedAttr) {
    return GetAriaPressedValues();
  }
  if (&attribute == &html_names::kAriaSelectedAttr) {
    return GetAriaSelectedValues();
  }
  if (&attribute == &html_names::kAriaSortAttr) {
    return GetAriaSortValues();
  }
  if (&attribute == &html_names::kAriaRelevantAttr) {
    return GetAriaRelevantValues();
  }

  return Vector<AtomicString>();
}

// Consolidated role support checking for all ARIA attributes.
bool RoleSupportsAriaAttribute(ax::mojom::blink::Role internal_role,
                                const QualifiedName& attribute) {
  if (&attribute == &html_names::kAriaActionsAttr) {
    // Global attribute with prevented roles.
    switch (internal_role) {
      case ax::mojom::blink::Role::kCaption:
      case ax::mojom::blink::Role::kCode:
      case ax::mojom::blink::Role::kDefinition:
      case ax::mojom::blink::Role::kContentDeletion:
      case ax::mojom::blink::Role::kEmphasis:
      case ax::mojom::blink::Role::kGenericContainer:
      case ax::mojom::blink::Role::kContentInsertion:
      case ax::mojom::blink::Role::kMark:
      case ax::mojom::blink::Role::kParagraph:
      case ax::mojom::blink::Role::kStrong:
      case ax::mojom::blink::Role::kSubscript:
      case ax::mojom::blink::Role::kSuggestion:
      case ax::mojom::blink::Role::kSuperscript:
      case ax::mojom::blink::Role::kTerm:
      case ax::mojom::blink::Role::kTime:
      case ax::mojom::blink::Role::kSectionWithoutName:
        return false;
      default:
        return true;
    }
  }
  if (&attribute == &html_names::kAriaActivedescendantAttr) {
    // Non-global attribute with specific supported roles.
    switch (internal_role) {
      case ax::mojom::blink::Role::kApplication:
      case ax::mojom::blink::Role::kComboBoxGrouping:
      case ax::mojom::blink::Role::kGrid:
      case ax::mojom::blink::Role::kGroup:
      case ax::mojom::blink::Role::kListBox:
      case ax::mojom::blink::Role::kMenu:
      case ax::mojom::blink::Role::kMenuBar:
      case ax::mojom::blink::Role::kRadioGroup:
      case ax::mojom::blink::Role::kRow:
      case ax::mojom::blink::Role::kSearchBox:
      case ax::mojom::blink::Role::kSpinButton:
      case ax::mojom::blink::Role::kTabList:
      case ax::mojom::blink::Role::kTextField:
      case ax::mojom::blink::Role::kToolbar:
      case ax::mojom::blink::Role::kTree:
      case ax::mojom::blink::Role::kTreeGrid:
      case ax::mojom::blink::Role::kComboBoxMenuButton:
      case ax::mojom::blink::Role::kComboBoxSelect:
      case ax::mojom::blink::Role::kTextFieldWithComboBox:
      case ax::mojom::blink::Role::kDetails:
        return true;
      default:
        return false;
    }
  }
  if (&attribute == &html_names::kAriaAtomicAttr) {
    // Global attribute with no prevented roles.
    return true;
  }
  if (&attribute == &html_names::kAriaAutocompleteAttr) {
    // Non-global attribute with specific supported roles.
    switch (internal_role) {
      case ax::mojom::blink::Role::kComboBoxGrouping:
      case ax::mojom::blink::Role::kSearchBox:
      case ax::mojom::blink::Role::kTextField:
      case ax::mojom::blink::Role::kComboBoxMenuButton:
      case ax::mojom::blink::Role::kComboBoxSelect:
      case ax::mojom::blink::Role::kTextFieldWithComboBox:
        return true;
      default:
        return false;
    }
  }
  if (&attribute == &html_names::kAriaBraillelabelAttr) {
    // Global attribute with prevented roles.
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
        return false;
      default:
        return true;
    }
  }
  if (&attribute == &html_names::kAriaBrailleroledescriptionAttr) {
    // Global attribute with prevented roles.
    switch (internal_role) {
      case ax::mojom::blink::Role::kGenericContainer:
      case ax::mojom::blink::Role::kSectionWithoutName:
        return false;
      default:
        return true;
    }
  }
  if (&attribute == &html_names::kAriaBusyAttr) {
    // Global attribute with no prevented roles.
    return true;
  }
  if (&attribute == &html_names::kAriaCheckedAttr) {
    // Non-global attribute with specific supported roles.
    switch (internal_role) {
      case ax::mojom::blink::Role::kCheckBox:
      case ax::mojom::blink::Role::kMenuItemCheckBox:
      case ax::mojom::blink::Role::kMenuItemRadio:
      case ax::mojom::blink::Role::kListBoxOption:
      case ax::mojom::blink::Role::kRadioButton:
      case ax::mojom::blink::Role::kSwitch:
      case ax::mojom::blink::Role::kTreeItem:
      case ax::mojom::blink::Role::kMenuListOption:
        return true;
      default:
        return false;
    }
  }
  if (&attribute == &html_names::kAriaColcountAttr) {
    // Non-global attribute with specific supported roles.
    switch (internal_role) {
      case ax::mojom::blink::Role::kGrid:
      case ax::mojom::blink::Role::kTable:
      case ax::mojom::blink::Role::kTreeGrid:
        return true;
      default:
        return false;
    }
  }
  if (&attribute == &html_names::kAriaColindexAttr) {
    // Non-global attribute with specific supported roles.
    switch (internal_role) {
      case ax::mojom::blink::Role::kCell:
      case ax::mojom::blink::Role::kColumnHeader:
      case ax::mojom::blink::Role::kGridCell:
      case ax::mojom::blink::Role::kRow:
      case ax::mojom::blink::Role::kRowHeader:
        return true;
      default:
        return false;
    }
  }
  if (&attribute == &html_names::kAriaColindextextAttr) {
    // Non-global attribute with specific supported roles.
    switch (internal_role) {
      case ax::mojom::blink::Role::kCell:
      case ax::mojom::blink::Role::kColumnHeader:
      case ax::mojom::blink::Role::kGridCell:
      case ax::mojom::blink::Role::kRowHeader:
        return true;
      default:
        return false;
    }
  }
  if (&attribute == &html_names::kAriaColspanAttr) {
    // Non-global attribute with specific supported roles.
    switch (internal_role) {
      case ax::mojom::blink::Role::kCell:
      case ax::mojom::blink::Role::kColumnHeader:
      case ax::mojom::blink::Role::kRowHeader:
        return true;
      default:
        return false;
    }
  }
  if (&attribute == &html_names::kAriaControlsAttr) {
    // Global attribute with no prevented roles.
    return true;
  }
  if (&attribute == &html_names::kAriaCurrentAttr) {
    // Global attribute with no prevented roles.
    return true;
  }
  if (&attribute == &html_names::kAriaDescribedbyAttr) {
    // Global attribute with no prevented roles.
    return true;
  }
  if (&attribute == &html_names::kAriaDescriptionAttr) {
    // Global attribute with no prevented roles.
    return true;
  }
  if (&attribute == &html_names::kAriaDetailsAttr) {
    // Global attribute with no prevented roles.
    return true;
  }
  if (&attribute == &html_names::kAriaDisabledAttr) {
    // Non-global attribute with specific supported roles.
    switch (internal_role) {
      case ax::mojom::blink::Role::kApplication:
      case ax::mojom::blink::Role::kButton:
      case ax::mojom::blink::Role::kCheckBox:
      case ax::mojom::blink::Role::kColumnHeader:
      case ax::mojom::blink::Role::kComboBoxGrouping:
      case ax::mojom::blink::Role::kGrid:
      case ax::mojom::blink::Role::kGridCell:
      case ax::mojom::blink::Role::kGroup:
      case ax::mojom::blink::Role::kLink:
      case ax::mojom::blink::Role::kListBox:
      case ax::mojom::blink::Role::kMenu:
      case ax::mojom::blink::Role::kMenuBar:
      case ax::mojom::blink::Role::kMenuItem:
      case ax::mojom::blink::Role::kMenuItemCheckBox:
      case ax::mojom::blink::Role::kMenuItemRadio:
      case ax::mojom::blink::Role::kListBoxOption:
      case ax::mojom::blink::Role::kRadioButton:
      case ax::mojom::blink::Role::kRadioGroup:
      case ax::mojom::blink::Role::kRow:
      case ax::mojom::blink::Role::kRowHeader:
      case ax::mojom::blink::Role::kScrollBar:
      case ax::mojom::blink::Role::kSearchBox:
      case ax::mojom::blink::Role::kSplitter:
      case ax::mojom::blink::Role::kSlider:
      case ax::mojom::blink::Role::kSpinButton:
      case ax::mojom::blink::Role::kSwitch:
      case ax::mojom::blink::Role::kTab:
      case ax::mojom::blink::Role::kTabList:
      case ax::mojom::blink::Role::kTextField:
      case ax::mojom::blink::Role::kToolbar:
      case ax::mojom::blink::Role::kTree:
      case ax::mojom::blink::Role::kTreeGrid:
      case ax::mojom::blink::Role::kTreeItem:
      case ax::mojom::blink::Role::kToggleButton:
      case ax::mojom::blink::Role::kPopUpButton:
      case ax::mojom::blink::Role::kComboBoxMenuButton:
      case ax::mojom::blink::Role::kComboBoxSelect:
      case ax::mojom::blink::Role::kTextFieldWithComboBox:
      case ax::mojom::blink::Role::kDetails:
      case ax::mojom::blink::Role::kMenuListOption:
        return true;
      default:
        return false;
    }
  }
  if (&attribute == &html_names::kAriaErrormessageAttr) {
    // Non-global attribute with specific supported roles.
    switch (internal_role) {
      case ax::mojom::blink::Role::kApplication:
      case ax::mojom::blink::Role::kCheckBox:
      case ax::mojom::blink::Role::kColumnHeader:
      case ax::mojom::blink::Role::kComboBoxGrouping:
      case ax::mojom::blink::Role::kGridCell:
      case ax::mojom::blink::Role::kListBox:
      case ax::mojom::blink::Role::kRadioGroup:
      case ax::mojom::blink::Role::kRowHeader:
      case ax::mojom::blink::Role::kSearchBox:
      case ax::mojom::blink::Role::kSlider:
      case ax::mojom::blink::Role::kSpinButton:
      case ax::mojom::blink::Role::kSwitch:
      case ax::mojom::blink::Role::kTextField:
      case ax::mojom::blink::Role::kTree:
      case ax::mojom::blink::Role::kTreeGrid:
      case ax::mojom::blink::Role::kComboBoxMenuButton:
      case ax::mojom::blink::Role::kComboBoxSelect:
      case ax::mojom::blink::Role::kTextFieldWithComboBox:
        return true;
      default:
        return false;
    }
  }
  if (&attribute == &html_names::kAriaExpandedAttr) {
    // Non-global attribute with specific supported roles.
    switch (internal_role) {
      case ax::mojom::blink::Role::kApplication:
      case ax::mojom::blink::Role::kButton:
      case ax::mojom::blink::Role::kCheckBox:
      case ax::mojom::blink::Role::kColumnHeader:
      case ax::mojom::blink::Role::kComboBoxGrouping:
      case ax::mojom::blink::Role::kGridCell:
      case ax::mojom::blink::Role::kLink:
      case ax::mojom::blink::Role::kMenuItem:
      case ax::mojom::blink::Role::kMenuItemCheckBox:
      case ax::mojom::blink::Role::kMenuItemRadio:
      case ax::mojom::blink::Role::kRow:
      case ax::mojom::blink::Role::kRowHeader:
      case ax::mojom::blink::Role::kSwitch:
      case ax::mojom::blink::Role::kTab:
      case ax::mojom::blink::Role::kTreeItem:
      case ax::mojom::blink::Role::kToggleButton:
      case ax::mojom::blink::Role::kPopUpButton:
      case ax::mojom::blink::Role::kComboBoxMenuButton:
      case ax::mojom::blink::Role::kComboBoxSelect:
      case ax::mojom::blink::Role::kTextFieldWithComboBox:
        return true;
      default:
        return false;
    }
  }
  if (&attribute == &html_names::kAriaFlowtoAttr) {
    // Global attribute with no prevented roles.
    return true;
  }
  if (&attribute == &html_names::kAriaHaspopupAttr) {
    // Non-global attribute with specific supported roles.
    switch (internal_role) {
      case ax::mojom::blink::Role::kApplication:
      case ax::mojom::blink::Role::kButton:
      case ax::mojom::blink::Role::kColumnHeader:
      case ax::mojom::blink::Role::kComboBoxGrouping:
      case ax::mojom::blink::Role::kGridCell:
      case ax::mojom::blink::Role::kLink:
      case ax::mojom::blink::Role::kMenuItem:
      case ax::mojom::blink::Role::kMenuItemCheckBox:
      case ax::mojom::blink::Role::kMenuItemRadio:
      case ax::mojom::blink::Role::kRowHeader:
      case ax::mojom::blink::Role::kSearchBox:
      case ax::mojom::blink::Role::kSlider:
      case ax::mojom::blink::Role::kTab:
      case ax::mojom::blink::Role::kTextField:
      case ax::mojom::blink::Role::kTreeItem:
      case ax::mojom::blink::Role::kToggleButton:
      case ax::mojom::blink::Role::kPopUpButton:
      case ax::mojom::blink::Role::kComboBoxMenuButton:
      case ax::mojom::blink::Role::kComboBoxSelect:
      case ax::mojom::blink::Role::kTextFieldWithComboBox:
        return true;
      default:
        return false;
    }
  }
  if (&attribute == &html_names::kAriaHiddenAttr) {
    // Global attribute with no prevented roles.
    return true;
  }
  if (&attribute == &html_names::kAriaInvalidAttr) {
    // Non-global attribute with specific supported roles.
    switch (internal_role) {
      case ax::mojom::blink::Role::kApplication:
      case ax::mojom::blink::Role::kCheckBox:
      case ax::mojom::blink::Role::kColumnHeader:
      case ax::mojom::blink::Role::kComboBoxGrouping:
      case ax::mojom::blink::Role::kGridCell:
      case ax::mojom::blink::Role::kListBox:
      case ax::mojom::blink::Role::kRadioGroup:
      case ax::mojom::blink::Role::kRowHeader:
      case ax::mojom::blink::Role::kSearchBox:
      case ax::mojom::blink::Role::kSlider:
      case ax::mojom::blink::Role::kSpinButton:
      case ax::mojom::blink::Role::kSwitch:
      case ax::mojom::blink::Role::kTextField:
      case ax::mojom::blink::Role::kTree:
      case ax::mojom::blink::Role::kTreeGrid:
      case ax::mojom::blink::Role::kComboBoxMenuButton:
      case ax::mojom::blink::Role::kComboBoxSelect:
      case ax::mojom::blink::Role::kTextFieldWithComboBox:
        return true;
      default:
        return false;
    }
  }
  if (&attribute == &html_names::kAriaKeyshortcutsAttr) {
    // Global attribute with no prevented roles.
    return true;
  }
  if (&attribute == &html_names::kAriaLabelAttr) {
    // Global attribute with prevented roles.
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
        return false;
      default:
        return true;
    }
  }
  if (&attribute == &html_names::kAriaLabeledbyAttr) {
    // Global attribute with prevented roles.
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
        return false;
      default:
        return true;
    }
  }
  if (&attribute == &html_names::kAriaLabelledbyAttr) {
    // Global attribute with prevented roles.
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
        return false;
      default:
        return true;
    }
  }
  if (&attribute == &html_names::kAriaLevelAttr) {
    // Non-global attribute with specific supported roles.
    switch (internal_role) {
      case ax::mojom::blink::Role::kComment:
      case ax::mojom::blink::Role::kHeading:
      case ax::mojom::blink::Role::kRow:
      case ax::mojom::blink::Role::kTreeItem:
        return true;
      default:
        return false;
    }
  }
  if (&attribute == &html_names::kAriaLiveAttr) {
    // Global attribute with no prevented roles.
    return true;
  }
  if (&attribute == &html_names::kAriaModalAttr) {
    // Non-global attribute with specific supported roles.
    switch (internal_role) {
      case ax::mojom::blink::Role::kAlertDialog:
      case ax::mojom::blink::Role::kDialog:
        return true;
      default:
        return false;
    }
  }
  if (&attribute == &html_names::kAriaMultilineAttr) {
    // Non-global attribute with specific supported roles.
    switch (internal_role) {
      case ax::mojom::blink::Role::kSearchBox:
      case ax::mojom::blink::Role::kTextField:
        return true;
      default:
        return false;
    }
  }
  if (&attribute == &html_names::kAriaMultiselectableAttr) {
    // Non-global attribute with specific supported roles.
    switch (internal_role) {
      case ax::mojom::blink::Role::kGrid:
      case ax::mojom::blink::Role::kListBox:
      case ax::mojom::blink::Role::kTabList:
      case ax::mojom::blink::Role::kTree:
      case ax::mojom::blink::Role::kTreeGrid:
        return true;
      default:
        return false;
    }
  }
  if (&attribute == &html_names::kAriaOrientationAttr) {
    // Non-global attribute with specific supported roles.
    switch (internal_role) {
      case ax::mojom::blink::Role::kListBox:
      case ax::mojom::blink::Role::kMenu:
      case ax::mojom::blink::Role::kMenuBar:
      case ax::mojom::blink::Role::kRadioGroup:
      case ax::mojom::blink::Role::kScrollBar:
      case ax::mojom::blink::Role::kSplitter:
      case ax::mojom::blink::Role::kSlider:
      case ax::mojom::blink::Role::kTabList:
      case ax::mojom::blink::Role::kToolbar:
      case ax::mojom::blink::Role::kTree:
      case ax::mojom::blink::Role::kTreeGrid:
        return true;
      default:
        return false;
    }
  }
  if (&attribute == &html_names::kAriaOwnsAttr) {
    // Global attribute with no prevented roles.
    return true;
  }
  if (&attribute == &html_names::kAriaPlaceholderAttr) {
    // Non-global attribute with specific supported roles.
    switch (internal_role) {
      case ax::mojom::blink::Role::kSearchBox:
      case ax::mojom::blink::Role::kTextField:
        return true;
      default:
        return false;
    }
  }
  if (&attribute == &html_names::kAriaPosinsetAttr) {
    // Non-global attribute with specific supported roles.
    switch (internal_role) {
      case ax::mojom::blink::Role::kArticle:
      case ax::mojom::blink::Role::kComment:
      case ax::mojom::blink::Role::kListItem:
      case ax::mojom::blink::Role::kMenuItem:
      case ax::mojom::blink::Role::kMenuItemCheckBox:
      case ax::mojom::blink::Role::kMenuItemRadio:
      case ax::mojom::blink::Role::kListBoxOption:
      case ax::mojom::blink::Role::kRadioButton:
      case ax::mojom::blink::Role::kRow:
      case ax::mojom::blink::Role::kTab:
      case ax::mojom::blink::Role::kTreeItem:
      case ax::mojom::blink::Role::kMenuListOption:
        return true;
      default:
        return false;
    }
  }
  if (&attribute == &html_names::kAriaPressedAttr) {
    // Non-global attribute with specific supported roles.
    switch (internal_role) {
      case ax::mojom::blink::Role::kButton:
      case ax::mojom::blink::Role::kToggleButton:
      case ax::mojom::blink::Role::kPopUpButton:
        return true;
      default:
        return false;
    }
  }
  if (&attribute == &html_names::kAriaReadonlyAttr) {
    // Non-global attribute with specific supported roles.
    switch (internal_role) {
      case ax::mojom::blink::Role::kCheckBox:
      case ax::mojom::blink::Role::kColumnHeader:
      case ax::mojom::blink::Role::kComboBoxGrouping:
      case ax::mojom::blink::Role::kGrid:
      case ax::mojom::blink::Role::kGridCell:
      case ax::mojom::blink::Role::kListBox:
      case ax::mojom::blink::Role::kRadioGroup:
      case ax::mojom::blink::Role::kRowHeader:
      case ax::mojom::blink::Role::kSearchBox:
      case ax::mojom::blink::Role::kSlider:
      case ax::mojom::blink::Role::kSpinButton:
      case ax::mojom::blink::Role::kSwitch:
      case ax::mojom::blink::Role::kTextField:
      case ax::mojom::blink::Role::kTreeGrid:
      case ax::mojom::blink::Role::kComboBoxMenuButton:
      case ax::mojom::blink::Role::kComboBoxSelect:
      case ax::mojom::blink::Role::kTextFieldWithComboBox:
        return true;
      default:
        return false;
    }
  }
  if (&attribute == &html_names::kAriaRelevantAttr) {
    // Global attribute with no prevented roles.
    return true;
  }
  if (&attribute == &html_names::kAriaRequiredAttr) {
    // Non-global attribute with specific supported roles.
    switch (internal_role) {
      case ax::mojom::blink::Role::kCheckBox:
      case ax::mojom::blink::Role::kColumnHeader:
      case ax::mojom::blink::Role::kComboBoxGrouping:
      case ax::mojom::blink::Role::kGridCell:
      case ax::mojom::blink::Role::kListBox:
      case ax::mojom::blink::Role::kRadioGroup:
      case ax::mojom::blink::Role::kRowHeader:
      case ax::mojom::blink::Role::kSearchBox:
      case ax::mojom::blink::Role::kSpinButton:
      case ax::mojom::blink::Role::kSwitch:
      case ax::mojom::blink::Role::kTextField:
      case ax::mojom::blink::Role::kTree:
      case ax::mojom::blink::Role::kTreeGrid:
      case ax::mojom::blink::Role::kComboBoxMenuButton:
      case ax::mojom::blink::Role::kComboBoxSelect:
      case ax::mojom::blink::Role::kTextFieldWithComboBox:
        return true;
      default:
        return false;
    }
  }
  if (&attribute == &html_names::kAriaRoledescriptionAttr) {
    // Global attribute with prevented roles.
    switch (internal_role) {
      case ax::mojom::blink::Role::kGenericContainer:
      case ax::mojom::blink::Role::kSectionWithoutName:
        return false;
      default:
        return true;
    }
  }
  if (&attribute == &html_names::kAriaRowcountAttr) {
    // Non-global attribute with specific supported roles.
    switch (internal_role) {
      case ax::mojom::blink::Role::kGrid:
      case ax::mojom::blink::Role::kTable:
      case ax::mojom::blink::Role::kTreeGrid:
        return true;
      default:
        return false;
    }
  }
  if (&attribute == &html_names::kAriaRowindexAttr) {
    // Non-global attribute with specific supported roles.
    switch (internal_role) {
      case ax::mojom::blink::Role::kCell:
      case ax::mojom::blink::Role::kColumnHeader:
      case ax::mojom::blink::Role::kGridCell:
      case ax::mojom::blink::Role::kRow:
      case ax::mojom::blink::Role::kRowHeader:
        return true;
      default:
        return false;
    }
  }
  if (&attribute == &html_names::kAriaRowindextextAttr) {
    // Non-global attribute with specific supported roles.
    switch (internal_role) {
      case ax::mojom::blink::Role::kCell:
      case ax::mojom::blink::Role::kColumnHeader:
      case ax::mojom::blink::Role::kGridCell:
      case ax::mojom::blink::Role::kRow:
      case ax::mojom::blink::Role::kRowHeader:
        return true;
      default:
        return false;
    }
  }
  if (&attribute == &html_names::kAriaRowspanAttr) {
    // Non-global attribute with specific supported roles.
    switch (internal_role) {
      case ax::mojom::blink::Role::kCell:
      case ax::mojom::blink::Role::kColumnHeader:
      case ax::mojom::blink::Role::kRowHeader:
        return true;
      default:
        return false;
    }
  }
  if (&attribute == &html_names::kAriaSelectedAttr) {
    // Non-global attribute with specific supported roles.
    switch (internal_role) {
      case ax::mojom::blink::Role::kColumnHeader:
      case ax::mojom::blink::Role::kGridCell:
      case ax::mojom::blink::Role::kListBoxOption:
      case ax::mojom::blink::Role::kRow:
      case ax::mojom::blink::Role::kRowHeader:
      case ax::mojom::blink::Role::kTab:
      case ax::mojom::blink::Role::kTreeItem:
      case ax::mojom::blink::Role::kMenuListOption:
        return true;
      default:
        return false;
    }
  }
  if (&attribute == &html_names::kAriaSetsizeAttr) {
    // Non-global attribute with specific supported roles.
    switch (internal_role) {
      case ax::mojom::blink::Role::kArticle:
      case ax::mojom::blink::Role::kComment:
      case ax::mojom::blink::Role::kListItem:
      case ax::mojom::blink::Role::kMenuItem:
      case ax::mojom::blink::Role::kMenuItemCheckBox:
      case ax::mojom::blink::Role::kMenuItemRadio:
      case ax::mojom::blink::Role::kListBoxOption:
      case ax::mojom::blink::Role::kRadioButton:
      case ax::mojom::blink::Role::kRow:
      case ax::mojom::blink::Role::kTab:
      case ax::mojom::blink::Role::kTreeItem:
      case ax::mojom::blink::Role::kMenuListOption:
        return true;
      default:
        return false;
    }
  }
  if (&attribute == &html_names::kAriaSortAttr) {
    // Non-global attribute with specific supported roles.
    switch (internal_role) {
      case ax::mojom::blink::Role::kColumnHeader:
      case ax::mojom::blink::Role::kRowHeader:
        return true;
      default:
        return false;
    }
  }
  if (&attribute == &html_names::kAriaValuemaxAttr) {
    // Non-global attribute with specific supported roles.
    switch (internal_role) {
      case ax::mojom::blink::Role::kMeter:
      case ax::mojom::blink::Role::kProgressIndicator:
      case ax::mojom::blink::Role::kScrollBar:
      case ax::mojom::blink::Role::kSplitter:
      case ax::mojom::blink::Role::kSlider:
      case ax::mojom::blink::Role::kSpinButton:
        return true;
      default:
        return false;
    }
  }
  if (&attribute == &html_names::kAriaValueminAttr) {
    // Non-global attribute with specific supported roles.
    switch (internal_role) {
      case ax::mojom::blink::Role::kMeter:
      case ax::mojom::blink::Role::kProgressIndicator:
      case ax::mojom::blink::Role::kScrollBar:
      case ax::mojom::blink::Role::kSplitter:
      case ax::mojom::blink::Role::kSlider:
      case ax::mojom::blink::Role::kSpinButton:
        return true;
      default:
        return false;
    }
  }
  if (&attribute == &html_names::kAriaValuenowAttr) {
    // Non-global attribute with specific supported roles.
    switch (internal_role) {
      case ax::mojom::blink::Role::kMeter:
      case ax::mojom::blink::Role::kProgressIndicator:
      case ax::mojom::blink::Role::kScrollBar:
      case ax::mojom::blink::Role::kSplitter:
      case ax::mojom::blink::Role::kSlider:
      case ax::mojom::blink::Role::kSpinButton:
        return true;
      default:
        return false;
    }
  }
  if (&attribute == &html_names::kAriaValuetextAttr) {
    // Non-global attribute with specific supported roles.
    switch (internal_role) {
      case ax::mojom::blink::Role::kMeter:
      case ax::mojom::blink::Role::kProgressIndicator:
      case ax::mojom::blink::Role::kScrollBar:
      case ax::mojom::blink::Role::kSplitter:
      case ax::mojom::blink::Role::kSlider:
      case ax::mojom::blink::Role::kSpinButton:
        return true;
      default:
        return false;
    }
  }

  // Attribute not recognized or not tracked in aria_properties.json5.
  return false;
}

}  // namespace blink
