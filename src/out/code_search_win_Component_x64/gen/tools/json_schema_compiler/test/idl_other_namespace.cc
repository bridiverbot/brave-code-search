// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   tools/json_schema_compiler/test/idl_other_namespace.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../tools/json_schema_compiler/test/idl_other_namespace.idl --root=../../ --destdir=gen --namespace=test::api::%(namespace)s --generator=cpp --include-rules=

#include "tools/json_schema_compiler/test/idl_other_namespace.h"

#include <memory>
#include <optional>
#include <ostream>
#include <string>
#include <string_view>
#include <utility>
#include <vector>

#include "base/check.h"
#include "base/check_op.h"
#include "base/notreached.h"
#include "base/strings/string_number_conversions.h"
#include "base/strings/utf_string_conversions.h"
#include "base/values.h"
#include "tools/json_schema_compiler/util.h"
#include <string_view>


using base::UTF8ToUTF16;

namespace test {
namespace api {
namespace idl_other_namespace {
//
// Types
//

const char* ToString(SomeType enum_param) {
  switch (enum_param) {
    case SomeType::kHello:
      return "hello";
    case SomeType::kWorld:
      return "world";
    case SomeType::kNone:
      return "";
  }
  NOTREACHED();
}

SomeType ParseSomeType(std::string_view enum_string) {
  if (enum_string == "hello")
    return SomeType::kHello;
  if (enum_string == "world")
    return SomeType::kWorld;
  return SomeType::kNone;
}

std::u16string GetSomeTypeParseError(std::string_view enum_string) {
  return u"expected \"hello\" or \"world\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}



}  // namespace idl_other_namespace
}  // namespace api
}  // namespace test

