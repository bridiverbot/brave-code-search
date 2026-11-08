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

#include "chrome/common/extensions/api/indigo_private.h"

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

namespace extensions {
namespace api {
namespace indigo_private {
//
// Types
//

const char* ToString(ObjectFit enum_param) {
  switch (enum_param) {
    case ObjectFit::kFill:
      return "fill";
    case ObjectFit::kContain:
      return "contain";
    case ObjectFit::kCover:
      return "cover";
    case ObjectFit::kObjectFitNone:
      return "object-fit-none";
    case ObjectFit::kScaleDown:
      return "scale-down";
    case ObjectFit::kNone:
      return "";
  }
  NOTREACHED();
}

ObjectFit ParseObjectFit(std::string_view enum_string) {
  if (enum_string == "fill")
    return ObjectFit::kFill;
  if (enum_string == "contain")
    return ObjectFit::kContain;
  if (enum_string == "cover")
    return ObjectFit::kCover;
  if (enum_string == "object-fit-none")
    return ObjectFit::kObjectFitNone;
  if (enum_string == "scale-down")
    return ObjectFit::kScaleDown;
  return ObjectFit::kNone;
}

std::u16string GetObjectFitParseError(std::string_view enum_string) {
  return u"expected \"fill\" or \"contain\" or \"cover\" or \"object-fit-none\" or \"scale-down\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


ImageData::Value::Value()
 {}

ImageData::Value::~Value() = default;
ImageData::Value::Value(Value&& rhs) noexcept = default;
ImageData::Value& ImageData::Value::operator=(Value&& rhs) noexcept = default;
ImageData::Value ImageData::Value::Clone() const {
  Value out;
  out.as_binary = as_binary;
  out.as_string = as_string;
  return out;
}

// static
bool ImageData::Value::Populate(
    const base::Value& value, Value& out) {
  if (value.type() == base::Value::Type::BINARY) {
    {
      if (!value.is_blob()) {
        return false;
      }
      else {
        out.as_binary = value.GetBlob();
      }
    }
    return true;
  }
  if (value.type() == base::Value::Type::STRING) {
    {
      auto* temp = value.GetIfString();
      if (!temp) {
        out.as_string = std::nullopt;
        return false;
      }
      out.as_string = *temp;
    }
    return true;
  }
  return false;
}

// static
std::optional<ImageData::Value> ImageData::Value::FromValue(const base::Value& value) {
  Value out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value ImageData::Value::ToValue() const {
  base::Value result;
  if (as_binary) {
    DCHECK(result.is_none()) << "Cannot set multiple choices for value";
    result = base::Value(base::Value(*as_binary));

  }
  if (as_string) {
    DCHECK(result.is_none()) << "Cannot set multiple choices for value";
    result = base::Value(*as_string);

  }
  DCHECK(!result.is_none()) << "Must set at least one choice for value";
  return result;
}



ImageData::ImageData()
: object_fit() {}

ImageData::~ImageData() = default;
ImageData::ImageData(ImageData&& rhs) noexcept = default;
ImageData& ImageData::operator=(ImageData&& rhs) noexcept = default;
ImageData ImageData::Clone() const {
  ImageData out;
  if (value) {
    out.value = value->Clone();
  }
  out.object_fit = object_fit;
  return out;
}

// static
bool ImageData::Populate(
    const base::DictValue& dict, ImageData& out) {
  out.object_fit = ObjectFit();
  const base::Value* value_value = dict.Find("value");
  if (value_value) {
    {
      Value temp;
      if (!Value::Populate((*value_value), temp))
        return false;
      out.value = std::move(temp);
    }
  }

  const base::Value* object_fit_value = dict.Find("objectFit");
  if (object_fit_value) {
    {
      const std::string* object_fit_as_string = (*object_fit_value).GetIfString();
      if (!object_fit_as_string) {
        return false;
      }
      out.object_fit = ParseObjectFit(*object_fit_as_string);
      if (out.object_fit == ObjectFit()) {
        return false;
      }
    }
    } else {
    out.object_fit = ObjectFit();
  }

  return true;
}

// static
bool ImageData::Populate(
    const base::Value& value, ImageData& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<ImageData> ImageData::FromValue(const base::DictValue& value) {
  ImageData out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<ImageData> ImageData::FromValue(const base::Value& value) {
  ImageData out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue ImageData::ToValue() const {
  base::DictValue to_value_result;

  if (this->value) {
    to_value_result.Set("value", (this->value)->ToValue());

  }
  if (this->object_fit != ObjectFit()) {
    to_value_result.Set("objectFit", indigo_private::ToString(this->object_fit));

  }

  return to_value_result;
}



//
// Functions
//

namespace ReadyToRender {

base::ListValue Results::Create(int invocation_id) {
  base::ListValue create_results;
  create_results.reserve(1);
  create_results.Append(invocation_id);

  return create_results;
}
}  // namespace ReadyToRender

namespace GetOriginalImage {

base::ListValue Results::Create(const ImageData& image_data) {
  base::ListValue create_results;
  create_results.reserve(1);
  create_results.Append((image_data).ToValue());

  return create_results;
}
}  // namespace GetOriginalImage

namespace GetReplacementImage {

base::ListValue Results::Create(const ImageData& image_data) {
  base::ListValue create_results;
  create_results.reserve(1);
  create_results.Append((image_data).ToValue());

  return create_results;
}
}  // namespace GetReplacementImage

//
// Events
//

namespace OnRegenerateStarted {

const char kEventName[] = "indigoPrivate.onRegenerateStarted";

base::ListValue Create() {
  base::ListValue create_results;

  return create_results;
}

}  // namespace OnRegenerateStarted

}  // namespace indigo_private
}  // namespace api
}  // namespace extensions

