// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   tools/json_schema_compiler/test/idl_basics.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../tools/json_schema_compiler/test/idl_basics.idl --root=../../ --destdir=gen --namespace=test::api::%(namespace)s --generator=cpp --include-rules=

#ifndef TOOLS_JSON_SCHEMA_COMPILER_TEST_IDL_BASICS_H__
#define TOOLS_JSON_SCHEMA_COMPILER_TEST_IDL_BASICS_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <optional>
#include <string>
#include <vector>

#include "base/values.h"
#include <string_view>
#include "tools/json_schema_compiler/test/idl_other_namespace.h"
#include "tools/json_schema_compiler/test/idl_other_namespace_sub_namespace.h"


namespace test {
namespace api {
namespace idl_basics {

//
// Types
//

// Enum description
enum class EnumType {
  kNone = 0,
  kName1,
  kName2,
  kMaxValue = kName2,
};


const char* ToString(EnumType as_enum);
EnumType ParseEnumType(std::string_view as_string);
std::u16string GetEnumTypeParseError(std::string_view as_string);

enum class EnumTypeWithNoDoc {
  kNone = 0,
  kName1,
  kName2,
  kMaxValue = kName2,
};


const char* ToString(EnumTypeWithNoDoc as_enum);
EnumTypeWithNoDoc ParseEnumTypeWithNoDoc(std::string_view as_string);
std::u16string GetEnumTypeWithNoDocParseError(std::string_view as_string);

enum class EnumTypeWithNoDocValue {
  kNone = 0,
  kName1,
  kName2,
  kName3,
  kMaxValue = kName3,
};


const char* ToString(EnumTypeWithNoDocValue as_enum);
EnumTypeWithNoDocValue ParseEnumTypeWithNoDocValue(std::string_view as_string);
std::u16string GetEnumTypeWithNoDocValueParseError(std::string_view as_string);

struct MyType1 {
  MyType1();
  ~MyType1();
  MyType1(const MyType1&) = delete;
  MyType1& operator=(const MyType1&) = delete;
  MyType1(MyType1&& rhs) noexcept;
  MyType1& operator=(MyType1&& rhs) noexcept;

  // Populates a MyType1 object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, MyType1& out);

  // Populates a MyType1 object from a Dict& instance. Returns whether |out| was
  // successfully populated.
  static bool Populate(const base::DictValue& value, MyType1& out);

  // Creates a deep copy of MyType1.
  MyType1 Clone() const;

  // Creates a MyType1 object from a base::DictValue, or nullopt on failure.
  static std::optional<MyType1> FromValue(const base::DictValue& value);

  // Creates a MyType1 object from a base::Value, or nullopt on failure.
  static std::optional<MyType1> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisMyType1 object.
  base::DictValue ToValue() const;

  // This comment tests "double-quotes".
  int x;

  std::string y;

  std::string z;

  std::string a;

  std::string b;

  std::string c;

};

struct MyType2 {
  MyType2();
  ~MyType2();
  MyType2(const MyType2&) = delete;
  MyType2& operator=(const MyType2&) = delete;
  MyType2(MyType2&& rhs) noexcept;
  MyType2& operator=(MyType2&& rhs) noexcept;

  // Manifest key constants.
  static constexpr char kX[] = "x";

  // Populates a MyType2 object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, MyType2& out);

  // Populates a MyType2 object from a Dict& instance. Returns whether |out| was
  // successfully populated.
  static bool Populate(const base::DictValue& value, MyType2& out);

  // Creates a deep copy of MyType2.
  MyType2 Clone() const;

  // Creates a MyType2 object from a base::DictValue, or nullopt on failure.
  static std::optional<MyType2> FromValue(const base::DictValue& value);

  // Creates a MyType2 object from a base::Value, or nullopt on failure.
  static std::optional<MyType2> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisMyType2 object.
  base::DictValue ToValue() const;

  // Parses the given |key| from |root_dict|. Any keys not available to the
  // manifest will be ignored. On a parsing error, false is returned and |error|
  // and |error_path_reversed| are populated.
  static bool ParseFromDictionary(const base::DictValue& root_dict, std::string_view key, MyType2& out, std::u16string& error, std::vector<std::string_view>& error_path_reversed);


  std::string x;

};

struct ChoiceWithArraysType {
  ChoiceWithArraysType();
  ~ChoiceWithArraysType();
  ChoiceWithArraysType(const ChoiceWithArraysType&) = delete;
  ChoiceWithArraysType& operator=(const ChoiceWithArraysType&) = delete;
  ChoiceWithArraysType(ChoiceWithArraysType&& rhs) noexcept;
  ChoiceWithArraysType& operator=(ChoiceWithArraysType&& rhs) noexcept;

  // Manifest key constants.
  static constexpr char kEntries[] = "entries";

  // Populates a ChoiceWithArraysType object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ChoiceWithArraysType& out);

  // Populates a ChoiceWithArraysType object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::DictValue& value, ChoiceWithArraysType& out);

  // Creates a deep copy of ChoiceWithArraysType.
  ChoiceWithArraysType Clone() const;

  // Creates a ChoiceWithArraysType object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<ChoiceWithArraysType> FromValue(const base::DictValue& value);

  // Creates a ChoiceWithArraysType object from a base::Value, or nullopt on
  // failure.
  static std::optional<ChoiceWithArraysType> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisChoiceWithArraysType object.
  base::DictValue ToValue() const;

  // Parses the given |key| from |root_dict|. Any keys not available to the
  // manifest will be ignored. On a parsing error, false is returned and |error|
  // and |error_path_reversed| are populated.
  static bool ParseFromDictionary(const base::DictValue& root_dict, std::string_view key, ChoiceWithArraysType& out, std::u16string& error, std::vector<std::string_view>& error_path_reversed);


  struct Entries {
    Entries();
    ~Entries();
    Entries(const Entries&) = delete;
    Entries& operator=(const Entries&) = delete;
    Entries(Entries&& rhs) noexcept;
    Entries& operator=(Entries&& rhs) noexcept;

    // Manifest key constants.

    // Populates a Entries object from a base::Value& instance. Returns whether
    // |out| was successfully populated.
    static bool Populate(const base::Value& value, Entries& out);

    // Creates a deep copy of Entries.
    Entries Clone() const;

    // Creates a Entries object from a base::Value, or nullopt on failure.
    static std::optional<Entries> FromValue(const base::Value& value);

    // Returns a new base::Value representing the serialized form of thisEntries
    // object.
    base::Value ToValue() const;

    // Parses the given |key| from |root_dict|. Any keys not available to the
    // manifest will be ignored. On a parsing error, false is returned and |error|
    // and |error_path_reversed| are populated.
    static bool ParseFromDictionary(const base::DictValue& root_dict, std::string_view key, Entries& out, std::u16string& error, std::vector<std::string_view>& error_path_reversed);

    // Choices:
    std::optional<std::string> as_string;
    std::optional<std::vector<std::string>> as_strings;
  };


  Entries entries;

};

struct ChoiceWithOptionalType {
  ChoiceWithOptionalType();
  ~ChoiceWithOptionalType();
  ChoiceWithOptionalType(const ChoiceWithOptionalType&) = delete;
  ChoiceWithOptionalType& operator=(const ChoiceWithOptionalType&) = delete;
  ChoiceWithOptionalType(ChoiceWithOptionalType&& rhs) noexcept;
  ChoiceWithOptionalType& operator=(ChoiceWithOptionalType&& rhs) noexcept;

  // Manifest key constants.
  static constexpr char kEntries[] = "entries";

  // Populates a ChoiceWithOptionalType object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ChoiceWithOptionalType& out);

  // Populates a ChoiceWithOptionalType object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::DictValue& value, ChoiceWithOptionalType& out);

  // Creates a deep copy of ChoiceWithOptionalType.
  ChoiceWithOptionalType Clone() const;

  // Creates a ChoiceWithOptionalType object from a base::DictValue, or nullopt
  // on failure.
  static std::optional<ChoiceWithOptionalType> FromValue(const base::DictValue& value);

  // Creates a ChoiceWithOptionalType object from a base::Value, or nullopt on
  // failure.
  static std::optional<ChoiceWithOptionalType> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisChoiceWithOptionalType object.
  base::DictValue ToValue() const;

  // Parses the given |key| from |root_dict|. Any keys not available to the
  // manifest will be ignored. On a parsing error, false is returned and |error|
  // and |error_path_reversed| are populated.
  static bool ParseFromDictionary(const base::DictValue& root_dict, std::string_view key, ChoiceWithOptionalType& out, std::u16string& error, std::vector<std::string_view>& error_path_reversed);


  struct Entries {
    Entries();
    ~Entries();
    Entries(const Entries&) = delete;
    Entries& operator=(const Entries&) = delete;
    Entries(Entries&& rhs) noexcept;
    Entries& operator=(Entries&& rhs) noexcept;

    // Manifest key constants.

    // Populates a Entries object from a base::Value& instance. Returns whether
    // |out| was successfully populated.
    static bool Populate(const base::Value& value, Entries& out);

    // Creates a deep copy of Entries.
    Entries Clone() const;

    // Creates a Entries object from a base::Value, or nullopt on failure.
    static std::optional<Entries> FromValue(const base::Value& value);

    // Returns a new base::Value representing the serialized form of thisEntries
    // object.
    base::Value ToValue() const;

    // Parses the given |key| from |root_dict|. Any keys not available to the
    // manifest will be ignored. On a parsing error, false is returned and |error|
    // and |error_path_reversed| are populated.
    static bool ParseFromDictionary(const base::DictValue& root_dict, std::string_view key, Entries& out, std::u16string& error, std::vector<std::string_view>& error_path_reversed);

    // Choices:
    std::optional<std::string> as_string;
    std::optional<std::vector<std::string>> as_strings;
  };


  std::optional<Entries> entries;

};

struct UnionType {
  UnionType();
  ~UnionType();
  UnionType(const UnionType&) = delete;
  UnionType& operator=(const UnionType&) = delete;
  UnionType(UnionType&& rhs) noexcept;
  UnionType& operator=(UnionType&& rhs) noexcept;

  // Populates a UnionType object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, UnionType& out);

  // Populates a UnionType object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::DictValue& value, UnionType& out);

  // Creates a deep copy of UnionType.
  UnionType Clone() const;

  // Creates a UnionType object from a base::DictValue, or nullopt on failure.
  static std::optional<UnionType> FromValue(const base::DictValue& value);

  // Creates a UnionType object from a base::Value, or nullopt on failure.
  static std::optional<UnionType> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisUnionType object.
  base::DictValue ToValue() const;

  struct X {
    X();
    ~X();
    X(const X&) = delete;
    X& operator=(const X&) = delete;
    X(X&& rhs) noexcept;
    X& operator=(X&& rhs) noexcept;

    // Populates a X object from a base::Value& instance. Returns whether |out|
    // was successfully populated.
    static bool Populate(const base::Value& value, X& out);

    // Creates a deep copy of X.
    X Clone() const;

    // Creates a X object from a base::Value, or nullopt on failure.
    static std::optional<X> FromValue(const base::Value& value);

    // Returns a new base::Value representing the serialized form of thisX object.
    base::Value ToValue() const;
    // Choices:
    EnumType as_enum_type;
    std::optional<std::string> as_string;
  };

  struct Y {
    Y();
    ~Y();
    Y(const Y&) = delete;
    Y& operator=(const Y&) = delete;
    Y(Y&& rhs) noexcept;
    Y& operator=(Y&& rhs) noexcept;

    // Populates a Y object from a base::Value& instance. Returns whether |out|
    // was successfully populated.
    static bool Populate(const base::Value& value, Y& out);

    // Creates a deep copy of Y.
    Y Clone() const;

    // Creates a Y object from a base::Value, or nullopt on failure.
    static std::optional<Y> FromValue(const base::Value& value);

    // Returns a new base::Value representing the serialized form of thisY object.
    base::Value ToValue() const;
    // Choices:
    std::optional<std::string> as_string;
    EnumType as_enum_type;
  };


  std::optional<X> x;

  Y y;

};

struct IgnoreAdditionalPropertiesType {
  IgnoreAdditionalPropertiesType();
  ~IgnoreAdditionalPropertiesType();
  IgnoreAdditionalPropertiesType(const IgnoreAdditionalPropertiesType&) = delete;
  IgnoreAdditionalPropertiesType& operator=(const IgnoreAdditionalPropertiesType&) = delete;
  IgnoreAdditionalPropertiesType(IgnoreAdditionalPropertiesType&& rhs) noexcept;
  IgnoreAdditionalPropertiesType& operator=(IgnoreAdditionalPropertiesType&& rhs) noexcept;

  // Populates a IgnoreAdditionalPropertiesType object from a base::Value&
  // instance. Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, IgnoreAdditionalPropertiesType& out);

  // Populates a IgnoreAdditionalPropertiesType object from a Dict& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::DictValue& value, IgnoreAdditionalPropertiesType& out);

  // Creates a deep copy of IgnoreAdditionalPropertiesType.
  IgnoreAdditionalPropertiesType Clone() const;

  // Creates a IgnoreAdditionalPropertiesType object from a base::DictValue, or
  // nullopt on failure.
  static std::optional<IgnoreAdditionalPropertiesType> FromValue(const base::DictValue& value);

  // Creates a IgnoreAdditionalPropertiesType object from a base::Value, or
  // nullopt on failure.
  static std::optional<IgnoreAdditionalPropertiesType> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisIgnoreAdditionalPropertiesType object.
  base::DictValue ToValue() const;

  std::string x;

};


//
// Manifest Keys
//

struct ManifestKeys {
  ManifestKeys();
  ~ManifestKeys();
  ManifestKeys(const ManifestKeys&) = delete;
  ManifestKeys& operator=(const ManifestKeys&) = delete;
  ManifestKeys(ManifestKeys&& rhs) noexcept;
  ManifestKeys& operator=(ManifestKeys&& rhs) noexcept;

  // Manifest key constants.
  static constexpr char kKeyStr[] = "key_str";
  static constexpr char kKeyRef[] = "key_ref";
  static constexpr char kInlineChoice[] = "inline_choice";
  static constexpr char kChoiceWithArrays[] = "choice_with_arrays";
  static constexpr char kChoiceWithOptional[] = "choice_with_optional";

  // Parses manifest keys for this namespace. Any keys not available to the
  // manifest will be ignored. On a parsing error, false is returned and |error|
  // is populated.
  static bool ParseFromDictionary(const base::DictValue& root_dict, ManifestKeys& out, std::u16string& error);


  struct InlineChoice {
    InlineChoice();
    ~InlineChoice();
    InlineChoice(const InlineChoice&) = delete;
    InlineChoice& operator=(const InlineChoice&) = delete;
    InlineChoice(InlineChoice&& rhs) noexcept;
    InlineChoice& operator=(InlineChoice&& rhs) noexcept;

    // Manifest key constants.

    // Populates a InlineChoice object from a base::Value& instance. Returns
    // whether |out| was successfully populated.
    static bool Populate(const base::Value& value, InlineChoice& out);

    // Creates a deep copy of InlineChoice.
    InlineChoice Clone() const;

    // Creates a InlineChoice object from a base::Value, or nullopt on failure.
    static std::optional<InlineChoice> FromValue(const base::Value& value);

    // Parses the given |key| from |root_dict|. Any keys not available to the
    // manifest will be ignored. On a parsing error, false is returned and |error|
    // and |error_path_reversed| are populated.
    static bool ParseFromDictionary(const base::DictValue& root_dict, std::string_view key, InlineChoice& out, std::u16string& error, std::vector<std::string_view>& error_path_reversed);

    // Choices:
    std::optional<std::string> as_string;
    std::optional<int> as_integer;
  };


  // String manifest key.
  std::optional<std::string> key_str;

  std::optional<MyType2> key_ref;

  std::optional<InlineChoice> inline_choice;

  std::optional<ChoiceWithArraysType> choice_with_arrays;

  std::optional<ChoiceWithOptionalType> choice_with_optional;

};

//
// Functions
//

namespace Function1 {

}  // namespace Function1

namespace Function2 {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  int x;


 private:
  Params();
};

}  // namespace Function2

namespace Function3 {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // So should this comment about the argument. <em>HTML</em> is fine too.
  MyType1 arg;


 private:
  Params();
};

}  // namespace Function3

namespace Function4 {

namespace Results {

base::ListValue Create();
}  // namespace Results

}  // namespace Function4

namespace Function5 {

namespace Results {

base::ListValue Create(int x);
}  // namespace Results

}  // namespace Function5

namespace Function6 {

namespace Results {

base::ListValue Create(const MyType1& arg);
}  // namespace Results

}  // namespace Function6

namespace Function7 {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::optional<int> arg;


 private:
  Params();
};

}  // namespace Function7

namespace Function8 {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  int arg1;

  std::optional<std::string> arg2;


 private:
  Params();
};

}  // namespace Function8

namespace Function9 {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::optional<MyType1> arg;


 private:
  Params();
};

}  // namespace Function9

namespace Function10 {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  int x;

  std::vector<int> y;


 private:
  Params();
};

}  // namespace Function10

namespace Function11 {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::vector<MyType1> arg;


 private:
  Params();
};

}  // namespace Function11

namespace Function12 {

namespace Results {

base::ListValue Create(const std::vector<MyType2>& arg);
}  // namespace Results

}  // namespace Function12

namespace Function13 {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  EnumType type;


 private:
  Params();
};

namespace Results {

base::ListValue Create(const EnumType& type);
}  // namespace Results

}  // namespace Function13

namespace Function14 {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::vector<EnumType> types;


 private:
  Params();
};

}  // namespace Function14

namespace Function16 {

namespace Results {

// A parameter.
base::ListValue Create(int x);
}  // namespace Results

}  // namespace Function16

namespace Function17 {

namespace Results {

// Just a parameter comment, with no comment on the callback.
base::ListValue Create(int x);
}  // namespace Results

}  // namespace Function17

namespace Function18 {

namespace Results {

// Just a parameter comment, with no comment on the callback.
base::ListValue Create(int x);
}  // namespace Results

}  // namespace Function18

namespace Function20 {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  test::api::idl_other_namespace::SomeType value;


 private:
  Params();
};

}  // namespace Function20

namespace Function21 {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::vector<test::api::idl_other_namespace::SomeType> values;


 private:
  Params();
};

}  // namespace Function21

namespace Function22 {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  test::api::idl_other_namespace_sub_namespace::AnotherType value;


 private:
  Params();
};

}  // namespace Function22

namespace Function23 {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::vector<test::api::idl_other_namespace_sub_namespace::AnotherType> values;


 private:
  Params();
};

}  // namespace Function23

namespace Function24 {

}  // namespace Function24

namespace Function25 {

}  // namespace Function25

namespace Function26 {

}  // namespace Function26

namespace Function27 {

}  // namespace Function27

namespace Function28 {

}  // namespace Function28

namespace Function29 {

}  // namespace Function29

namespace Function30 {

}  // namespace Function30

namespace FuncAsync {

namespace Results {

base::ListValue Create(const std::vector<MyType2>& arg);
}  // namespace Results

}  // namespace FuncAsync

namespace FuncOptionalArgAndNotPromiseBased {

namespace Results {

base::ListValue Create(const std::string& arg0);
}  // namespace Results

}  // namespace FuncOptionalArgAndNotPromiseBased

namespace FuncOptionalArgCallback {

namespace Results {

base::ListValue Create(const std::string& arg0);
}  // namespace Results

}  // namespace FuncOptionalArgCallback

namespace FuncOptionalCallbackNotPromiseBased {

namespace Results {

base::ListValue Create(int x);
}  // namespace Results

}  // namespace FuncOptionalCallbackNotPromiseBased

namespace FuncOptionalCallback {

namespace Results {

base::ListValue Create(int x);
}  // namespace Results

}  // namespace FuncOptionalCallback

namespace FuncWithEntry {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  struct EntriesType {
    EntriesType();
    ~EntriesType();
    EntriesType(const EntriesType&) = delete;
    EntriesType& operator=(const EntriesType&) = delete;
    EntriesType(EntriesType&& rhs) noexcept;
    EntriesType& operator=(EntriesType&& rhs) noexcept;

    // Populates a EntriesType object from a base::Value& instance. Returns
    // whether |out| was successfully populated.
    static bool Populate(const base::Value& value, EntriesType& out);

    // Populates a EntriesType object from a Dict& instance. Returns whether |out|
    // was successfully populated.
    static bool Populate(const base::DictValue& value, EntriesType& out);

    // Creates a deep copy of EntriesType.
    EntriesType Clone() const;

    // Creates a EntriesType object from a base::DictValue, or nullopt on failure.
    static std::optional<EntriesType> FromValue(const base::DictValue& value);

    // Creates a EntriesType object from a base::Value, or nullopt on failure.
    static std::optional<EntriesType> FromValue(const base::Value& value);

    base::DictValue additional_properties;
  };



  std::vector<EntriesType> entries;


 private:
  Params();
};

}  // namespace FuncWithEntry

namespace FuncWithArrayObj {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  struct EntriesType {
    EntriesType();
    ~EntriesType();
    EntriesType(const EntriesType&) = delete;
    EntriesType& operator=(const EntriesType&) = delete;
    EntriesType(EntriesType&& rhs) noexcept;
    EntriesType& operator=(EntriesType&& rhs) noexcept;

    // Populates a EntriesType object from a base::Value& instance. Returns
    // whether |out| was successfully populated.
    static bool Populate(const base::Value& value, EntriesType& out);

    // Populates a EntriesType object from a Dict& instance. Returns whether |out|
    // was successfully populated.
    static bool Populate(const base::DictValue& value, EntriesType& out);

    // Creates a deep copy of EntriesType.
    EntriesType Clone() const;

    // Creates a EntriesType object from a base::DictValue, or nullopt on failure.
    static std::optional<EntriesType> FromValue(const base::DictValue& value);

    // Creates a EntriesType object from a base::Value, or nullopt on failure.
    static std::optional<EntriesType> FromValue(const base::Value& value);

    base::DictValue additional_properties;
  };



  std::vector<EntriesType> entries;


 private:
  Params();
};

}  // namespace FuncWithArrayObj

//
// Events
//

namespace OnFoo1 {

extern const char kEventName[];  // "idl_basics.onFoo1"

base::ListValue Create();
}  // namespace OnFoo1

namespace OnFoo2 {

extern const char kEventName[];  // "idl_basics.onFoo2"

base::ListValue Create(const MyType1& arg);
}  // namespace OnFoo2

namespace OnFoo3 {

extern const char kEventName[];  // "idl_basics.onFoo3"

base::ListValue Create(const EnumType& type);
}  // namespace OnFoo3

}  // namespace idl_basics
}  // namespace api
}  // namespace test

#endif  // TOOLS_JSON_SCHEMA_COMPILER_TEST_IDL_BASICS_H__
