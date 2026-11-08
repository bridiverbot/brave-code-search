// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   tools/json_schema_compiler/test/objects.json
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../tools/json_schema_compiler/test/objects.json --root=../../ --destdir=gen --namespace=test::api::%(namespace)s --generator=cpp --include-rules=

#include "tools/json_schema_compiler/test/objects.h"

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
namespace objects {
//
// Types
//

const char* ToString(FirstState enum_param) {
  switch (enum_param) {
    case FirstState::kFoo:
      return "foo";
    case FirstState::kBar:
      return "bar";
    case FirstState::kBaz:
      return "baz";
    case FirstState::kNone:
      return "";
  }
  NOTREACHED();
}

FirstState ParseFirstState(std::string_view enum_string) {
  if (enum_string == "foo")
    return FirstState::kFoo;
  if (enum_string == "bar")
    return FirstState::kBar;
  if (enum_string == "baz")
    return FirstState::kBaz;
  return FirstState::kNone;
}

std::u16string GetFirstStateParseError(std::string_view enum_string) {
  return u"expected \"foo\" or \"bar\" or \"baz\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(SecondState enum_param) {
  switch (enum_param) {
    case SecondState::kSpam:
      return "spam";
    case SecondState::kHam:
      return "ham";
    case SecondState::kEggs:
      return "eggs";
    case SecondState::kNone:
      return "";
  }
  NOTREACHED();
}

SecondState ParseSecondState(std::string_view enum_string) {
  if (enum_string == "spam")
    return SecondState::kSpam;
  if (enum_string == "ham")
    return SecondState::kHam;
  if (enum_string == "eggs")
    return SecondState::kEggs;
  return SecondState::kNone;
}

std::u16string GetSecondStateParseError(std::string_view enum_string) {
  return u"expected \"spam\" or \"ham\" or \"eggs\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}



//
// Functions
//

namespace ObjectParam {

Params::Info::Info()
: integer(0),
boolean(false) {}

Params::Info::~Info() = default;
Params::Info::Info(Info&& rhs) noexcept = default;
Params::Info& Params::Info::operator=(Info&& rhs) noexcept = default;
Params::Info Params::Info::Clone() const {
  Info out;
  out.strings = strings;
  out.integer = integer;
  out.boolean = boolean;
  return out;
}

// static
bool Params::Info::Populate(
    const base::DictValue& dict, Info& out) {
  const base::Value* strings_value = dict.Find("strings");
  if (!strings_value) {
    return false;
  }
  {
    if (!(*strings_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*strings_value).GetList(), out.strings)) {
        return false;
      }
    }
  }

  const base::Value* integer_value = dict.Find("integer");
  if (!integer_value) {
    return false;
  }
  {
    auto temp = (*integer_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.integer = *temp;
  }

  const base::Value* boolean_value = dict.Find("boolean");
  if (!boolean_value) {
    return false;
  }
  {
    auto temp = (*boolean_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.boolean = *temp;
  }

  return true;
}

// static
bool Params::Info::Populate(
    const base::Value& value, Info& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<Params::Info> Params::Info::FromValue(const base::DictValue& value) {
  Info out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<Params::Info> Params::Info::FromValue(const base::Value& value) {
  Info out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}


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
    const base::Value& info_value = args[0];
    {
      if (!info_value.is_dict()) {
        return std::nullopt;
      }
      if (!Info::Populate(info_value.GetDict(), params.info)) {
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
}  // namespace ObjectParam

namespace ReturnsObject {

Results::Info::Info()
: state() {}

Results::Info::~Info() = default;
Results::Info::Info(Info&& rhs) noexcept = default;
Results::Info& Results::Info::operator=(Info&& rhs) noexcept = default;
base::DictValue Results::Info::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("state", objects::ToString(this->state));


  return to_value_result;
}


base::ListValue Results::Create(const Info& info) {
  base::ListValue create_results;
  create_results.reserve(1);
  create_results.Append((info).ToValue());

  return create_results;
}
}  // namespace ReturnsObject

namespace ReturnsTwoObjects {

Results::FirstInfo::FirstInfo()
: state() {}

Results::FirstInfo::~FirstInfo() = default;
Results::FirstInfo::FirstInfo(FirstInfo&& rhs) noexcept = default;
Results::FirstInfo& Results::FirstInfo::operator=(FirstInfo&& rhs) noexcept = default;
base::DictValue Results::FirstInfo::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("state", objects::ToString(this->state));


  return to_value_result;
}


Results::SecondInfo::SecondInfo()
: state() {}

Results::SecondInfo::~SecondInfo() = default;
Results::SecondInfo::SecondInfo(SecondInfo&& rhs) noexcept = default;
Results::SecondInfo& Results::SecondInfo::operator=(SecondInfo&& rhs) noexcept = default;
base::DictValue Results::SecondInfo::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("state", objects::ToString(this->state));


  return to_value_result;
}


base::ListValue Results::Create(const FirstInfo& first_info, const SecondInfo& second_info) {
  base::ListValue create_results;
  create_results.reserve(2);
  create_results.Append((first_info).ToValue());

  create_results.Append((second_info).ToValue());

  return create_results;
}
}  // namespace ReturnsTwoObjects

//
// Events
//

namespace OnObjectFired {

const char kEventName[] = "objects.onObjectFired";

SomeObject::SomeObject()
: state() {}

SomeObject::~SomeObject() = default;
SomeObject::SomeObject(SomeObject&& rhs) noexcept = default;
SomeObject& SomeObject::operator=(SomeObject&& rhs) noexcept = default;
base::DictValue SomeObject::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("state", objects::ToString(this->state));


  return to_value_result;
}


base::ListValue Create(const SomeObject& some_object) {
  base::ListValue create_results;
  create_results.reserve(1);
  create_results.Append((some_object).ToValue());

  return create_results;
}

}  // namespace OnObjectFired

namespace OnTwoObjectsFired {

const char kEventName[] = "objects.onTwoObjectsFired";

FirstObject::FirstObject()
: state() {}

FirstObject::~FirstObject() = default;
FirstObject::FirstObject(FirstObject&& rhs) noexcept = default;
FirstObject& FirstObject::operator=(FirstObject&& rhs) noexcept = default;
base::DictValue FirstObject::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("state", objects::ToString(this->state));


  return to_value_result;
}


SecondObject::SecondObject()
: state() {}

SecondObject::~SecondObject() = default;
SecondObject::SecondObject(SecondObject&& rhs) noexcept = default;
SecondObject& SecondObject::operator=(SecondObject&& rhs) noexcept = default;
base::DictValue SecondObject::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("state", objects::ToString(this->state));


  return to_value_result;
}


base::ListValue Create(const FirstObject& first_object, const SecondObject& second_object) {
  base::ListValue create_results;
  create_results.reserve(2);
  create_results.Append((first_object).ToValue());

  create_results.Append((second_object).ToValue());

  return create_results;
}

}  // namespace OnTwoObjectsFired

}  // namespace objects
}  // namespace api
}  // namespace test

