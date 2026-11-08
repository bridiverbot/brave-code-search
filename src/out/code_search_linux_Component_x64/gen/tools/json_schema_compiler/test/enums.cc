// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   tools/json_schema_compiler/test/enums.json
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../tools/json_schema_compiler/test/enums.json --root=../../ --destdir=gen --namespace=test::api::%(namespace)s --generator=cpp --include-rules=

#include "tools/json_schema_compiler/test/enums.h"

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
namespace enums {
//
// Types
//

const char* ToString(Enumeration enum_param) {
  switch (enum_param) {
    case Enumeration::kOne:
      return "one";
    case Enumeration::kTwo:
      return "two";
    case Enumeration::kThree:
      return "three";
    case Enumeration::kNone:
      return "";
  }
  NOTREACHED();
}

Enumeration ParseEnumeration(std::string_view enum_string) {
  if (enum_string == "one")
    return Enumeration::kOne;
  if (enum_string == "two")
    return Enumeration::kTwo;
  if (enum_string == "three")
    return Enumeration::kThree;
  return Enumeration::kNone;
}

std::u16string GetEnumerationParseError(std::string_view enum_string) {
  return u"expected \"one\" or \"two\" or \"three\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(OtherEnumeration enum_param) {
  switch (enum_param) {
    case OtherEnumeration::kSpam:
      return "spam";
    case OtherEnumeration::kHam:
      return "ham";
    case OtherEnumeration::kEggs:
      return "eggs";
    case OtherEnumeration::kNone:
      return "";
  }
  NOTREACHED();
}

OtherEnumeration ParseOtherEnumeration(std::string_view enum_string) {
  if (enum_string == "spam")
    return OtherEnumeration::kSpam;
  if (enum_string == "ham")
    return OtherEnumeration::kHam;
  if (enum_string == "eggs")
    return OtherEnumeration::kEggs;
  return OtherEnumeration::kNone;
}

std::u16string GetOtherEnumerationParseError(std::string_view enum_string) {
  return u"expected \"spam\" or \"ham\" or \"eggs\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


EnumType::EnumType()
: type() {}

EnumType::~EnumType() = default;
EnumType::EnumType(EnumType&& rhs) noexcept = default;
EnumType& EnumType::operator=(EnumType&& rhs) noexcept = default;
EnumType EnumType::Clone() const {
  EnumType out;
  out.type = type;
  return out;
}

// static
bool EnumType::Populate(
    const base::DictValue& dict, EnumType& out) {
  const base::Value* type_value = dict.Find("type");
  if (!type_value) {
    return false;
  }
  {
    const std::string* enumeration_as_string = (*type_value).GetIfString();
    if (!enumeration_as_string) {
      return false;
    }
    out.type = ParseEnumeration(*enumeration_as_string);
    if (out.type == Enumeration()) {
      return false;
    }
  }

  return true;
}

// static
bool EnumType::Populate(
    const base::Value& value, EnumType& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<EnumType> EnumType::FromValue(const base::DictValue& value) {
  EnumType out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<EnumType> EnumType::FromValue(const base::Value& value) {
  EnumType out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue EnumType::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("type", enums::ToString(this->type));


  return to_value_result;
}


HasEnumeration::HasEnumeration()
: enumeration(),
optional_enumeration() {}

HasEnumeration::~HasEnumeration() = default;
HasEnumeration::HasEnumeration(HasEnumeration&& rhs) noexcept = default;
HasEnumeration& HasEnumeration::operator=(HasEnumeration&& rhs) noexcept = default;
HasEnumeration HasEnumeration::Clone() const {
  HasEnumeration out;
  out.enumeration = enumeration;
  out.optional_enumeration = optional_enumeration;
  return out;
}

// static
bool HasEnumeration::Populate(
    const base::DictValue& dict, HasEnumeration& out) {
  out.optional_enumeration = Enumeration();
  const base::Value* enumeration_value = dict.Find("enumeration");
  if (!enumeration_value) {
    return false;
  }
  {
    const std::string* enumeration_as_string = (*enumeration_value).GetIfString();
    if (!enumeration_as_string) {
      return false;
    }
    out.enumeration = ParseEnumeration(*enumeration_as_string);
    if (out.enumeration == Enumeration()) {
      return false;
    }
  }

  const base::Value* optional_enumeration_value = dict.Find("optional_enumeration");
  if (optional_enumeration_value) {
    {
      const std::string* enumeration_as_string = (*optional_enumeration_value).GetIfString();
      if (!enumeration_as_string) {
        return false;
      }
      out.optional_enumeration = ParseEnumeration(*enumeration_as_string);
      if (out.optional_enumeration == Enumeration()) {
        return false;
      }
    }
    } else {
    out.optional_enumeration = Enumeration();
  }

  return true;
}

// static
bool HasEnumeration::Populate(
    const base::Value& value, HasEnumeration& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<HasEnumeration> HasEnumeration::FromValue(const base::DictValue& value) {
  HasEnumeration out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<HasEnumeration> HasEnumeration::FromValue(const base::Value& value) {
  HasEnumeration out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue HasEnumeration::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("enumeration", enums::ToString(this->enumeration));

  if (this->optional_enumeration != Enumeration()) {
    to_value_result.Set("optional_enumeration", enums::ToString(this->optional_enumeration));

  }

  return to_value_result;
}


ReferenceEnum::ReferenceEnum()
: reference_enum() {}

ReferenceEnum::~ReferenceEnum() = default;
ReferenceEnum::ReferenceEnum(ReferenceEnum&& rhs) noexcept = default;
ReferenceEnum& ReferenceEnum::operator=(ReferenceEnum&& rhs) noexcept = default;
ReferenceEnum ReferenceEnum::Clone() const {
  ReferenceEnum out;
  out.reference_enum = reference_enum;
  return out;
}

// static
bool ReferenceEnum::Populate(
    const base::DictValue& dict, ReferenceEnum& out) {
  const base::Value* reference_enum_value = dict.Find("reference_enum");
  if (!reference_enum_value) {
    return false;
  }
  {
    const std::string* enumeration_as_string = (*reference_enum_value).GetIfString();
    if (!enumeration_as_string) {
      return false;
    }
    out.reference_enum = ParseEnumeration(*enumeration_as_string);
    if (out.reference_enum == Enumeration()) {
      return false;
    }
  }

  return true;
}

// static
bool ReferenceEnum::Populate(
    const base::Value& value, ReferenceEnum& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<ReferenceEnum> ReferenceEnum::FromValue(const base::DictValue& value) {
  ReferenceEnum out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<ReferenceEnum> ReferenceEnum::FromValue(const base::Value& value) {
  ReferenceEnum out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue ReferenceEnum::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("reference_enum", enums::ToString(this->reference_enum));


  return to_value_result;
}


OptionalEnumType::OptionalEnumType()
: type() {}

OptionalEnumType::~OptionalEnumType() = default;
OptionalEnumType::OptionalEnumType(OptionalEnumType&& rhs) noexcept = default;
OptionalEnumType& OptionalEnumType::operator=(OptionalEnumType&& rhs) noexcept = default;
OptionalEnumType OptionalEnumType::Clone() const {
  OptionalEnumType out;
  out.type = type;
  return out;
}

// static
bool OptionalEnumType::Populate(
    const base::DictValue& dict, OptionalEnumType& out) {
  out.type = Enumeration();
  const base::Value* type_value = dict.Find("type");
  if (type_value) {
    {
      const std::string* enumeration_as_string = (*type_value).GetIfString();
      if (!enumeration_as_string) {
        return false;
      }
      out.type = ParseEnumeration(*enumeration_as_string);
      if (out.type == Enumeration()) {
        return false;
      }
    }
    } else {
    out.type = Enumeration();
  }

  return true;
}

// static
bool OptionalEnumType::Populate(
    const base::Value& value, OptionalEnumType& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<OptionalEnumType> OptionalEnumType::FromValue(const base::DictValue& value) {
  OptionalEnumType out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<OptionalEnumType> OptionalEnumType::FromValue(const base::Value& value) {
  OptionalEnumType out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue OptionalEnumType::ToValue() const {
  base::DictValue to_value_result;

  if (this->type != Enumeration()) {
    to_value_result.Set("type", enums::ToString(this->type));

  }

  return to_value_result;
}


const char* ToString(EnumNameTransformation enum_param) {
  switch (enum_param) {
    case EnumNameTransformation::kFirstEntryExample:
      return "FIRST_ENTRY_EXAMPLE";
    case EnumNameTransformation::kSecondEntryExample:
      return "second_entry_example";
    case EnumNameTransformation::kThirdEntryExample:
      return "thirdEntryExample";
    case EnumNameTransformation::kFourthEntryExample:
      return "FourthEntryExample";
    case EnumNameTransformation::kFifthEntryExample1234:
      return "FIFTH_ENTRY_EXAMPLE_1234";
    case EnumNameTransformation::kSixthEntryExample:
      return "sixth-entry-example";
    case EnumNameTransformation::kSeventhEntry86_64Example:
      return "Seventh_entry86_64_example";
    case EnumNameTransformation::kEighthEntry86ArchExample:
      return "Eighth_entry86_ARCH_example";
    case EnumNameTransformation::kNinthEntryExample:
      return "kNinthEntryExample";
    case EnumNameTransformation::kEmptyString:
      return "";
    case EnumNameTransformation::kNone:
      return "";
  }
  NOTREACHED();
}

EnumNameTransformation ParseEnumNameTransformation(std::string_view enum_string) {
  if (enum_string == "FIRST_ENTRY_EXAMPLE")
    return EnumNameTransformation::kFirstEntryExample;
  if (enum_string == "second_entry_example")
    return EnumNameTransformation::kSecondEntryExample;
  if (enum_string == "thirdEntryExample")
    return EnumNameTransformation::kThirdEntryExample;
  if (enum_string == "FourthEntryExample")
    return EnumNameTransformation::kFourthEntryExample;
  if (enum_string == "FIFTH_ENTRY_EXAMPLE_1234")
    return EnumNameTransformation::kFifthEntryExample1234;
  if (enum_string == "sixth-entry-example")
    return EnumNameTransformation::kSixthEntryExample;
  if (enum_string == "Seventh_entry86_64_example")
    return EnumNameTransformation::kSeventhEntry86_64Example;
  if (enum_string == "Eighth_entry86_ARCH_example")
    return EnumNameTransformation::kEighthEntry86ArchExample;
  if (enum_string == "kNinthEntryExample")
    return EnumNameTransformation::kNinthEntryExample;
  if (enum_string == "")
    return EnumNameTransformation::kEmptyString;
  return EnumNameTransformation::kNone;
}

std::u16string GetEnumNameTransformationParseError(std::string_view enum_string) {
  return u"expected \"FIRST_ENTRY_EXAMPLE\" or \"second_entry_example\" or \"thirdEntryExample\" or \"FourthEntryExample\" or \"FIFTH_ENTRY_EXAMPLE_1234\" or \"sixth-entry-example\" or \"Seventh_entry86_64_example\" or \"Eighth_entry86_ARCH_example\" or \"kNinthEntryExample\" or \"\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}



//
// Functions
//

namespace TakesEnum {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::ListValue& args) {
  if (args.size() != 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& state_value = args[0];
    {
      const std::string* enumeration_as_string = state_value.GetIfString();
      if (!enumeration_as_string) {
        return std::nullopt;
      }
      params.state = ParseEnumeration(*enumeration_as_string);
      if (params.state == Enumeration()) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::ListValue Results::Create() {
  base::ListValue create_results;

  return create_results;
}
}  // namespace TakesEnum

namespace TakesEnumArray {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::ListValue& args) {
  if (args.size() != 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& values_value = args[0];
    {
      if (!values_value.is_list()) {
        return std::nullopt;
      }
      else {
        for (const auto& it : (values_value).GetList()) {
          Enumeration tmp;
          const std::string* enumeration_as_string = (it).GetIfString();
          if (!enumeration_as_string) {
            return std::nullopt;
          }
          tmp = ParseEnumeration(*enumeration_as_string);
          if (tmp == Enumeration()) {
            return std::nullopt;
          }
          params.values.push_back(tmp);
        }
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::ListValue Results::Create() {
  base::ListValue create_results;

  return create_results;
}
}  // namespace TakesEnumArray

namespace TakesEnumAsType {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::ListValue& args) {
  if (args.size() != 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& enumeration_value = args[0];
    {
      const std::string* enumeration_as_string = enumeration_value.GetIfString();
      if (!enumeration_as_string) {
        return std::nullopt;
      }
      params.enumeration = ParseEnumeration(*enumeration_as_string);
      if (params.enumeration == Enumeration()) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::ListValue Results::Create() {
  base::ListValue create_results;

  return create_results;
}
}  // namespace TakesEnumAsType

namespace TakesEnumArrayAsType {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::ListValue& args) {
  if (args.size() != 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& values_value = args[0];
    {
      if (!values_value.is_list()) {
        return std::nullopt;
      }
      else {
        for (const auto& it : (values_value).GetList()) {
          Enumeration tmp;
          const std::string* enumeration_as_string = (it).GetIfString();
          if (!enumeration_as_string) {
            return std::nullopt;
          }
          tmp = ParseEnumeration(*enumeration_as_string);
          if (tmp == Enumeration()) {
            return std::nullopt;
          }
          params.values.push_back(tmp);
        }
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::ListValue Results::Create() {
  base::ListValue create_results;

  return create_results;
}
}  // namespace TakesEnumArrayAsType

namespace ReturnsEnum {

base::ListValue Results::Create(const Enumeration& state) {
  base::ListValue create_results;
  create_results.reserve(1);
  create_results.Append(enums::ToString(state));

  return create_results;
}
}  // namespace ReturnsEnum

namespace ReturnsEnumAsType {

base::ListValue Results::Create(const Enumeration& enumeration) {
  base::ListValue create_results;
  create_results.reserve(1);
  create_results.Append(enums::ToString(enumeration));

  return create_results;
}
}  // namespace ReturnsEnumAsType

namespace ReturnsTwoEnums {

base::ListValue Results::Create(const Enumeration& first_state, const OtherEnumeration& second_state) {
  base::ListValue create_results;
  create_results.reserve(2);
  create_results.Append(enums::ToString(first_state));

  create_results.Append(enums::ToString(second_state));

  return create_results;
}
}  // namespace ReturnsTwoEnums

namespace TakesOptionalEnum {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::ListValue& args) {
  if (args.size() > 1) {
    return std::nullopt;
  }
  Params params;
  params.state = Enumeration();

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& state_value = args[0];
    {
      const std::string* enumeration_as_string = state_value.GetIfString();
      if (!enumeration_as_string) {
        return std::nullopt;
      }
      params.state = ParseEnumeration(*enumeration_as_string);
      if (params.state == Enumeration()) {
        return std::nullopt;
      }
    }
  }

  return params;
}


base::ListValue Results::Create() {
  base::ListValue create_results;

  return create_results;
}
}  // namespace TakesOptionalEnum

namespace TakesMultipleOptionalEnums {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::ListValue& args) {
  if (args.size() > 2) {
    return std::nullopt;
  }
  Params params;
  params.state = Enumeration();
  params.type = OtherEnumeration();

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& state_value = args[0];
    {
      const std::string* enumeration_as_string = state_value.GetIfString();
      if (!enumeration_as_string) {
        return std::nullopt;
      }
      params.state = ParseEnumeration(*enumeration_as_string);
      if (params.state == Enumeration()) {
        return std::nullopt;
      }
    }
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& type_value = args[1];
    {
      const std::string* other_enumeration_as_string = type_value.GetIfString();
      if (!other_enumeration_as_string) {
        return std::nullopt;
      }
      params.type = ParseOtherEnumeration(*other_enumeration_as_string);
      if (params.type == OtherEnumeration()) {
        return std::nullopt;
      }
    }
  }

  return params;
}


base::ListValue Results::Create() {
  base::ListValue create_results;

  return create_results;
}
}  // namespace TakesMultipleOptionalEnums

//
// Events
//

namespace OnEnumFired {

const char kEventName[] = "enums.onEnumFired";

base::ListValue Create(const Enumeration& some_enum) {
  base::ListValue create_results;
  create_results.reserve(1);
  create_results.Append(enums::ToString(some_enum));

  return create_results;
}

}  // namespace OnEnumFired

namespace OnTwoEnumsFired {

const char kEventName[] = "enums.onTwoEnumsFired";

base::ListValue Create(const Enumeration& first_enum, const OtherEnumeration& second_enum) {
  base::ListValue create_results;
  create_results.reserve(2);
  create_results.Append(enums::ToString(first_enum));

  create_results.Append(enums::ToString(second_enum));

  return create_results;
}

}  // namespace OnTwoEnumsFired

}  // namespace enums
}  // namespace api
}  // namespace test

