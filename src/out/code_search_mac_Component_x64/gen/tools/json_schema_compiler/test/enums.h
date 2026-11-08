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

#ifndef TOOLS_JSON_SCHEMA_COMPILER_TEST_ENUMS_H__
#define TOOLS_JSON_SCHEMA_COMPILER_TEST_ENUMS_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <optional>
#include <string>
#include <vector>

#include "base/values.h"
#include <string_view>


namespace test {
namespace api {
namespace enums {

//
// Types
//

enum class Enumeration {
  kNone = 0,
  kOne,
  kTwo,
  kThree,
  kMaxValue = kThree,
};


const char* ToString(Enumeration as_enum);
Enumeration ParseEnumeration(std::string_view as_string);
std::u16string GetEnumerationParseError(std::string_view as_string);

enum class OtherEnumeration {
  kNone = 0,
  kSpam,
  kHam,
  kEggs,
  kMaxValue = kEggs,
};


const char* ToString(OtherEnumeration as_enum);
OtherEnumeration ParseOtherEnumeration(std::string_view as_string);
std::u16string GetOtherEnumerationParseError(std::string_view as_string);

struct EnumType {
  EnumType();
  ~EnumType();
  EnumType(const EnumType&) = delete;
  EnumType& operator=(const EnumType&) = delete;
  EnumType(EnumType&& rhs) noexcept;
  EnumType& operator=(EnumType&& rhs) noexcept;

  // Populates a EnumType object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, EnumType& out);

  // Populates a EnumType object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::DictValue& value, EnumType& out);

  // Creates a deep copy of EnumType.
  EnumType Clone() const;

  // Creates a EnumType object from a base::DictValue, or nullopt on failure.
  static std::optional<EnumType> FromValue(const base::DictValue& value);

  // Creates a EnumType object from a base::Value, or nullopt on failure.
  static std::optional<EnumType> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisEnumType object.
  base::DictValue ToValue() const;

  Enumeration type;

};

struct HasEnumeration {
  HasEnumeration();
  ~HasEnumeration();
  HasEnumeration(const HasEnumeration&) = delete;
  HasEnumeration& operator=(const HasEnumeration&) = delete;
  HasEnumeration(HasEnumeration&& rhs) noexcept;
  HasEnumeration& operator=(HasEnumeration&& rhs) noexcept;

  // Populates a HasEnumeration object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, HasEnumeration& out);

  // Populates a HasEnumeration object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::DictValue& value, HasEnumeration& out);

  // Creates a deep copy of HasEnumeration.
  HasEnumeration Clone() const;

  // Creates a HasEnumeration object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<HasEnumeration> FromValue(const base::DictValue& value);

  // Creates a HasEnumeration object from a base::Value, or nullopt on failure.
  static std::optional<HasEnumeration> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisHasEnumeration object.
  base::DictValue ToValue() const;

  Enumeration enumeration;

  Enumeration optional_enumeration;

};

struct ReferenceEnum {
  ReferenceEnum();
  ~ReferenceEnum();
  ReferenceEnum(const ReferenceEnum&) = delete;
  ReferenceEnum& operator=(const ReferenceEnum&) = delete;
  ReferenceEnum(ReferenceEnum&& rhs) noexcept;
  ReferenceEnum& operator=(ReferenceEnum&& rhs) noexcept;

  // Populates a ReferenceEnum object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ReferenceEnum& out);

  // Populates a ReferenceEnum object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::DictValue& value, ReferenceEnum& out);

  // Creates a deep copy of ReferenceEnum.
  ReferenceEnum Clone() const;

  // Creates a ReferenceEnum object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<ReferenceEnum> FromValue(const base::DictValue& value);

  // Creates a ReferenceEnum object from a base::Value, or nullopt on failure.
  static std::optional<ReferenceEnum> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisReferenceEnum object.
  base::DictValue ToValue() const;

  Enumeration reference_enum;

};

struct OptionalEnumType {
  OptionalEnumType();
  ~OptionalEnumType();
  OptionalEnumType(const OptionalEnumType&) = delete;
  OptionalEnumType& operator=(const OptionalEnumType&) = delete;
  OptionalEnumType(OptionalEnumType&& rhs) noexcept;
  OptionalEnumType& operator=(OptionalEnumType&& rhs) noexcept;

  // Populates a OptionalEnumType object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, OptionalEnumType& out);

  // Populates a OptionalEnumType object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::DictValue& value, OptionalEnumType& out);

  // Creates a deep copy of OptionalEnumType.
  OptionalEnumType Clone() const;

  // Creates a OptionalEnumType object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<OptionalEnumType> FromValue(const base::DictValue& value);

  // Creates a OptionalEnumType object from a base::Value, or nullopt on
  // failure.
  static std::optional<OptionalEnumType> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisOptionalEnumType object.
  base::DictValue ToValue() const;

  Enumeration type;

};

enum class EnumNameTransformation {
  kNone = 0,
  kFirstEntryExample,
  kSecondEntryExample,
  kThirdEntryExample,
  kFourthEntryExample,
  kFifthEntryExample1234,
  kSixthEntryExample,
  kSeventhEntry86_64Example,
  kEighthEntry86ArchExample,
  kNinthEntryExample,
  kEmptyString,
  kMaxValue = kEmptyString,
};


const char* ToString(EnumNameTransformation as_enum);
EnumNameTransformation ParseEnumNameTransformation(std::string_view as_string);
std::u16string GetEnumNameTransformationParseError(std::string_view as_string);


//
// Functions
//

namespace TakesEnum {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  Enumeration state;


 private:
  Params();
};

namespace Results {

base::ListValue Create();
}  // namespace Results

}  // namespace TakesEnum

namespace TakesEnumArray {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::vector<Enumeration> values;


 private:
  Params();
};

namespace Results {

base::ListValue Create();
}  // namespace Results

}  // namespace TakesEnumArray

namespace TakesEnumAsType {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  Enumeration enumeration;


 private:
  Params();
};

namespace Results {

base::ListValue Create();
}  // namespace Results

}  // namespace TakesEnumAsType

namespace TakesEnumArrayAsType {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::vector<Enumeration> values;


 private:
  Params();
};

namespace Results {

base::ListValue Create();
}  // namespace Results

}  // namespace TakesEnumArrayAsType

namespace ReturnsEnum {

namespace Results {

base::ListValue Create(const Enumeration& state);
}  // namespace Results

}  // namespace ReturnsEnum

namespace ReturnsEnumAsType {

namespace Results {

base::ListValue Create(const Enumeration& enumeration);
}  // namespace Results

}  // namespace ReturnsEnumAsType

namespace ReturnsTwoEnums {

namespace Results {

base::ListValue Create(const Enumeration& first_state, const OtherEnumeration& second_state);
}  // namespace Results

}  // namespace ReturnsTwoEnums

namespace TakesOptionalEnum {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  Enumeration state;


 private:
  Params();
};

namespace Results {

base::ListValue Create();
}  // namespace Results

}  // namespace TakesOptionalEnum

namespace TakesMultipleOptionalEnums {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  Enumeration state;

  OtherEnumeration type;


 private:
  Params();
};

namespace Results {

base::ListValue Create();
}  // namespace Results

}  // namespace TakesMultipleOptionalEnums

//
// Events
//

namespace OnEnumFired {

extern const char kEventName[];  // "enums.onEnumFired"

base::ListValue Create(const Enumeration& some_enum);
}  // namespace OnEnumFired

namespace OnTwoEnumsFired {

extern const char kEventName[];  // "enums.onTwoEnumsFired"

base::ListValue Create(const Enumeration& first_enum, const OtherEnumeration& second_enum);
}  // namespace OnTwoEnumsFired

}  // namespace enums
}  // namespace api
}  // namespace test

#endif  // TOOLS_JSON_SCHEMA_COMPILER_TEST_ENUMS_H__
