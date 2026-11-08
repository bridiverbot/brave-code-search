// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/indigo_private.webidl
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../chrome/common/extensions/api/indigo_private.webidl --root=../../ --destdir=gen --namespace=extensions::api::%(namespace)s --generator=cpp --include-rules=extensions/common/api:extensions::api::%(namespace)s

#ifndef CHROME_COMMON_EXTENSIONS_API_INDIGO_PRIVATE_H__
#define CHROME_COMMON_EXTENSIONS_API_INDIGO_PRIVATE_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <optional>
#include <string>
#include <vector>

#include "base/values.h"
#include <string_view>


namespace extensions {
namespace api {
namespace indigo_private {

//
// Types
//

// The WebIDL compiler autogenerates an enum value called kNone, so we can't use
// "none" here to represent "object-fit: none".
enum class ObjectFit {
  kNone = 0,
  kFill,
  kContain,
  kCover,
  kObjectFitNone,
  kScaleDown,
  kMaxValue = kScaleDown,
};


const char* ToString(ObjectFit as_enum);
ObjectFit ParseObjectFit(std::string_view as_string);
std::u16string GetObjectFitParseError(std::string_view as_string);

struct ImageData {
  ImageData();
  ~ImageData();
  ImageData(const ImageData&) = delete;
  ImageData& operator=(const ImageData&) = delete;
  ImageData(ImageData&& rhs) noexcept;
  ImageData& operator=(ImageData&& rhs) noexcept;

  // Populates a ImageData object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, ImageData& out);

  // Populates a ImageData object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::DictValue& value, ImageData& out);

  // Creates a deep copy of ImageData.
  ImageData Clone() const;

  // Creates a ImageData object from a base::DictValue, or nullopt on failure.
  static std::optional<ImageData> FromValue(const base::DictValue& value);

  // Creates a ImageData object from a base::Value, or nullopt on failure.
  static std::optional<ImageData> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisImageData object.
  base::DictValue ToValue() const;

  // The image data, either as webp bytes or a data URL.
  struct Value {
    Value();
    ~Value();
    Value(const Value&) = delete;
    Value& operator=(const Value&) = delete;
    Value(Value&& rhs) noexcept;
    Value& operator=(Value&& rhs) noexcept;

    // Populates a Value object from a base::Value& instance. Returns whether
    // |out| was successfully populated.
    static bool Populate(const base::Value& value, Value& out);

    // Creates a deep copy of Value.
    Value Clone() const;

    // Creates a Value object from a base::Value, or nullopt on failure.
    static std::optional<Value> FromValue(const base::Value& value);

    // Returns a new base::Value representing the serialized form of thisValue
    // object.
    base::Value ToValue() const;
    // Choices:
    std::optional<std::vector<uint8_t>> as_binary;
    std::optional<std::string> as_string;
  };


  // The image data, either as webp bytes or a data URL.
  std::optional<Value> value;

  // The object-fit attribute of the image.
  ObjectFit object_fit;

};


//
// Functions
//

namespace ReadyToRender {

namespace Results {

base::ListValue Create(int invocation_id);
}  // namespace Results

}  // namespace ReadyToRender

namespace GetOriginalImage {

namespace Results {

base::ListValue Create(const ImageData& image_data);
}  // namespace Results

}  // namespace GetOriginalImage

namespace GetReplacementImage {

namespace Results {

base::ListValue Create(const ImageData& image_data);
}  // namespace Results

}  // namespace GetReplacementImage

//
// Events
//

namespace OnRegenerateStarted {

extern const char kEventName[];  // "indigoPrivate.onRegenerateStarted"

base::ListValue Create();
}  // namespace OnRegenerateStarted

}  // namespace indigo_private
}  // namespace api
}  // namespace extensions

#endif  // CHROME_COMMON_EXTENSIONS_API_INDIGO_PRIVATE_H__
