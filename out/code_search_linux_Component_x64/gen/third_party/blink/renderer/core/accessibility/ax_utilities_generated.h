// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Generated from template:
//   templates/ax_utilities_generated.h.tmpl
// and input files:
//   ../../third_party/blink/renderer/core/html/aria_properties.json5


#ifndef THIRD_PARTY_BLINK_RENDERER_CORE_ACCESSIBILITY_AX_UTILITIES_GENERATED_H_
#define THIRD_PARTY_BLINK_RENDERER_CORE_ACCESSIBILITY_AX_UTILITIES_GENERATED_H_

#include "third_party/blink/renderer/core/core_export.h"
#include "third_party/blink/renderer/platform/wtf/vector.h"
#include "third_party/blink/renderer/platform/wtf/text/atomic_string.h"
#include "ui/accessibility/ax_enums.mojom-blink-forward.h"

namespace blink {

class QualifiedName;

// All ARIA attributes.
CORE_EXPORT Vector<const QualifiedName*> GetAriaAttributes();

// ARIA attributes grouped by type.
CORE_EXPORT Vector<const QualifiedName*> GetAriaBooleanAttributes();
CORE_EXPORT Vector<const QualifiedName*> GetAriaDecimalAttributes();
CORE_EXPORT Vector<const QualifiedName*> GetAriaIdrefAttributes();
CORE_EXPORT Vector<const QualifiedName*> GetAriaIdrefListAttributes();
CORE_EXPORT Vector<const QualifiedName*> GetAriaIntegerAttributes();
CORE_EXPORT Vector<const QualifiedName*> GetAriaStringAttributes();
CORE_EXPORT Vector<const QualifiedName*> GetAriaTokenAttributes();
CORE_EXPORT Vector<const QualifiedName*> GetAriaTokenListAttributes();

// ARIA attribute type classification functions.
CORE_EXPORT bool IsAriaBooleanAttribute(const QualifiedName& attribute);
CORE_EXPORT bool IsAriaDecimalAttribute(const QualifiedName& attribute);
CORE_EXPORT bool IsAriaIdrefAttribute(const QualifiedName& attribute);
CORE_EXPORT bool IsAriaIdrefListAttribute(const QualifiedName& attribute);
CORE_EXPORT bool IsAriaIntegerAttribute(const QualifiedName& attribute);
CORE_EXPORT bool IsAriaStringAttribute(const QualifiedName& attribute);
CORE_EXPORT bool IsAriaTokenAttribute(const QualifiedName& attribute);
CORE_EXPORT bool IsAriaTokenListAttribute(const QualifiedName& attribute);

// ARIA attribute enum value accessors.
CORE_EXPORT Vector<AtomicString> GetAriaAutocompleteValues();
CORE_EXPORT Vector<AtomicString> GetAriaCheckedValues();
CORE_EXPORT Vector<AtomicString> GetAriaCurrentValues();
CORE_EXPORT Vector<AtomicString> GetAriaExpandedValues();
CORE_EXPORT Vector<AtomicString> GetAriaHaspopupValues();
CORE_EXPORT Vector<AtomicString> GetAriaHiddenValues();
CORE_EXPORT Vector<AtomicString> GetAriaInvalidValues();
CORE_EXPORT Vector<AtomicString> GetAriaLiveValues();
CORE_EXPORT Vector<AtomicString> GetAriaOrientationValues();
CORE_EXPORT Vector<AtomicString> GetAriaPressedValues();
CORE_EXPORT Vector<AtomicString> GetAriaSelectedValues();
CORE_EXPORT Vector<AtomicString> GetAriaSortValues();
CORE_EXPORT Vector<AtomicString> GetAriaRelevantValues();

// ARIA attribute default/implicit value utilities.
// Returns the role-specific override if defined, otherwise the attribute's default value (or empty).
CORE_EXPORT const AtomicString& GetImplicitAriaAtomic(ax::mojom::blink::Role internal_role);
CORE_EXPORT const AtomicString& GetImplicitAriaBusy(ax::mojom::blink::Role internal_role);
CORE_EXPORT const AtomicString& GetImplicitAriaDisabled(ax::mojom::blink::Role internal_role);
CORE_EXPORT const AtomicString& GetImplicitAriaModal(ax::mojom::blink::Role internal_role);
CORE_EXPORT const AtomicString& GetImplicitAriaMultiline(ax::mojom::blink::Role internal_role);
CORE_EXPORT const AtomicString& GetImplicitAriaMultiselectable(ax::mojom::blink::Role internal_role);
CORE_EXPORT const AtomicString& GetImplicitAriaReadonly(ax::mojom::blink::Role internal_role);
CORE_EXPORT const AtomicString& GetImplicitAriaRequired(ax::mojom::blink::Role internal_role);
CORE_EXPORT const AtomicString& GetImplicitAriaAutocomplete(ax::mojom::blink::Role internal_role);
CORE_EXPORT const AtomicString& GetImplicitAriaChecked(ax::mojom::blink::Role internal_role);
CORE_EXPORT const AtomicString& GetImplicitAriaCurrent(ax::mojom::blink::Role internal_role);
CORE_EXPORT const AtomicString& GetImplicitAriaExpanded(ax::mojom::blink::Role internal_role);
CORE_EXPORT const AtomicString& GetImplicitAriaHaspopup(ax::mojom::blink::Role internal_role);
CORE_EXPORT const AtomicString& GetImplicitAriaHidden(ax::mojom::blink::Role internal_role);
CORE_EXPORT const AtomicString& GetImplicitAriaInvalid(ax::mojom::blink::Role internal_role);
CORE_EXPORT const AtomicString& GetImplicitAriaLive(ax::mojom::blink::Role internal_role);
CORE_EXPORT const AtomicString& GetImplicitAriaOrientation(ax::mojom::blink::Role internal_role);
CORE_EXPORT const AtomicString& GetImplicitAriaPressed(ax::mojom::blink::Role internal_role);
CORE_EXPORT const AtomicString& GetImplicitAriaSelected(ax::mojom::blink::Role internal_role);
CORE_EXPORT const AtomicString& GetImplicitAriaSort(ax::mojom::blink::Role internal_role);
CORE_EXPORT const AtomicString& GetImplicitAriaLevel(ax::mojom::blink::Role internal_role);
CORE_EXPORT const AtomicString& GetImplicitAriaRelevant(ax::mojom::blink::Role internal_role);
CORE_EXPORT const AtomicString& GetImplicitAriaValuemax(ax::mojom::blink::Role internal_role);
CORE_EXPORT const AtomicString& GetImplicitAriaValuemin(ax::mojom::blink::Role internal_role);

// General lookup function to get valid enum values for any ARIA attribute.
CORE_EXPORT Vector<AtomicString> GetValidValuesForAriaAttribute(const QualifiedName& attribute);

// ARIA attribute role support utility.
// Returns true if the given role supports the given ARIA attribute.
// Takes into account global attributes, supportedOnRoles, and preventedOnRoles.
CORE_EXPORT bool RoleSupportsAriaAttribute(ax::mojom::blink::Role internal_role,
                                            const QualifiedName& attribute);

// ARIA role utilities.
CORE_EXPORT Vector<AtomicString> GetAriaRoleNames();
CORE_EXPORT ax::mojom::blink::Role AriaRoleToInternalRole(const AtomicString& aria_role_name);
CORE_EXPORT const AtomicString& InternalRoleToAriaRole(ax::mojom::blink::Role internal_role);

// Name prohibition utility.
// Returns true if the role has nameFrom: ["prohibited"] in the ARIA spec.
CORE_EXPORT bool RoleIsNameProhibited(ax::mojom::blink::Role internal_role);

// Name from contents utility.
// Returns true if the role has "contents" in its nameFrom array in the ARIA spec.
CORE_EXPORT bool RoleSupportsNameFromContents(ax::mojom::blink::Role internal_role);

// Name from author utility.
// Returns true if the role has "author" in its nameFrom array in the ARIA spec.
CORE_EXPORT bool RoleSupportsNameFromAuthor(ax::mojom::blink::Role internal_role);

}  // namespace blink

#endif  // THIRD_PARTY_BLINK_RENDERER_CORE_ACCESSIBILITY_AX_UTILITIES_GENERATED_H_
