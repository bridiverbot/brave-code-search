// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Generated from template:
//   templates/element_attribute_name_lookup_trie.h.tmpl
// and input files:
//   ../../third_party/blink/renderer/core/html/html_attribute_names.json5


#ifndef THIRD_PARTY_BLINK_RENDERER_CORE_HTML_ELEMENT_ATTRIBUTE_NAME_LOOKUP_TRIE_H_
#define THIRD_PARTY_BLINK_RENDERER_CORE_HTML_ELEMENT_ATTRIBUTE_NAME_LOOKUP_TRIE_H_

#include "base/compiler_specific.h"
#include "third_party/blink/renderer/core/core_export.h"
#include "third_party/blink/renderer/core/html_names.h"
#include "third_party/blink/renderer/platform/wtf/text/wtf_uchar.h"

namespace blink {

class QualifiedName;

CORE_EXPORT const QualifiedName& LookupSlowHTMLAttributeName(const UChar* data, unsigned length);
CORE_EXPORT const QualifiedName& LookupSlowHTMLAttributeName(const LChar* data, unsigned length);

template <typename CharType>
ALWAYS_INLINE const QualifiedName& LookupHTMLAttributeName(const CharType* data, unsigned length) {
  switch (length) {
    case 2:
      if (data[0] == 'i' && data[1] == 'd') {
        return html_names::kIdAttr;
      }
      break;
    case 3:
      if (data[0] == 's' && data[1] == 'r' && data[2] == 'c') {
        return html_names::kSrcAttr;
      }
      if (data[0] == 'f' && data[1] == 'o' && data[2] == 'r') {
        return html_names::kForAttr;
      }
      if (data[0] == 'a' && data[1] == 'l' && data[2] == 't') {
        return html_names::kAltAttr;
      }
      if (data[0] == 'r' && data[1] == 'e' && data[2] == 'l') {
        return html_names::kRelAttr;
      }
      break;
    case 4:
      if (data[0] == 't' && data[1] == 'y' && data[2] == 'p' && data[3] == 'e') {
        return html_names::kTypeAttr;
      }
      if (data[0] == 'h' && data[1] == 'r' && data[2] == 'e' && data[3] == 'f') {
        return html_names::kHrefAttr;
      }
      if (data[0] == 'n' && data[1] == 'a' && data[2] == 'm' && data[3] == 'e') {
        return html_names::kNameAttr;
      }
      if (data[0] == 'r' && data[1] == 'o' && data[2] == 'l' && data[3] == 'e') {
        return html_names::kRoleAttr;
      }
      if (data[0] == 's' && data[1] == 'l' && data[2] == 'o' && data[3] == 't') {
        return html_names::kSlotAttr;
      }
      break;
    case 5:
      if (data[0] == 'c' && data[1] == 'l' && data[2] == 'a' && data[3] == 's' && data[4] == 's') {
        return html_names::kClassAttr;
      }
      if (data[0] == 's' && data[1] == 't' && data[2] == 'y' && data[3] == 'l' && data[4] == 'e') {
        return html_names::kStyleAttr;
      }
      if (data[0] == 'v' && data[1] == 'a' && data[2] == 'l' && data[3] == 'u' && data[4] == 'e') {
        return html_names::kValueAttr;
      }
      if (data[0] == 't' && data[1] == 'i' && data[2] == 't' && data[3] == 'l' && data[4] == 'e') {
        return html_names::kTitleAttr;
      }
      if (data[0] == 'w' && data[1] == 'i' && data[2] == 'd' && data[3] == 't' && data[4] == 'h') {
        return html_names::kWidthAttr;
      }
      break;
    case 6:
      if (data[0] == 'h' && data[1] == 'e' && data[2] == 'i' && data[3] == 'g' && data[4] == 'h' && data[5] == 't') {
        return html_names::kHeightAttr;
      }
      if (data[0] == 'h' && data[1] == 'i' && data[2] == 'd' && data[3] == 'd' && data[4] == 'e' && data[5] == 'n') {
        return html_names::kHiddenAttr;
      }
      break;
    case 7:
      if (data[0] == 'c' && data[1] == 'h' && data[2] == 'e' && data[3] == 'c' && data[4] == 'k' && data[5] == 'e' && data[6] == 'd') {
        return html_names::kCheckedAttr;
      }
      break;
    case 8:
      if (data[0] == 'd' && data[1] == 'i' && data[2] == 's' && data[3] == 'a' && data[4] == 'b' && data[5] == 'l' && data[6] == 'e' && data[7] == 'd') {
        return html_names::kDisabledAttr;
      }
      break;
    case 11:
      if (data[0] == 'p' && data[1] == 'l' && data[2] == 'a' && data[3] == 'c' && data[4] == 'e' &&
          data[5] == 'h' && data[6] == 'o' && data[7] == 'l' && data[8] == 'd' && data[9] == 'e' && data[10] == 'r') {
        return html_names::kPlaceholderAttr;
      }
      break;
  }
  return LookupSlowHTMLAttributeName(data, length);
}

ALWAYS_INLINE const QualifiedName& LookupHTMLAttributeName(const UChar* data, unsigned length) {
  return LookupHTMLAttributeName<UChar>(data, length);
}

ALWAYS_INLINE const QualifiedName& LookupHTMLAttributeName(const LChar* data, unsigned length) {
  return LookupHTMLAttributeName<LChar>(data, length);
}

}  // namespace blink

#endif  // THIRD_PARTY_BLINK_RENDERER_CORE_HTML_ELEMENT_ATTRIBUTE_NAME_LOOKUP_TRIE_H_
