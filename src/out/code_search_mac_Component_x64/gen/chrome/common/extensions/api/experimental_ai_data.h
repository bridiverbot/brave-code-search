// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/experimental_ai_data.webidl
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../chrome/common/extensions/api/experimental_ai_data.webidl --root=../../ --destdir=gen --namespace=extensions::api::%(namespace)s --generator=cpp --include-rules=extensions/common/api:extensions::api::%(namespace)s

#ifndef CHROME_COMMON_EXTENSIONS_API_EXPERIMENTAL_AI_DATA_H__
#define CHROME_COMMON_EXTENSIONS_API_EXPERIMENTAL_AI_DATA_H__

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
namespace experimental_ai_data {

//
// Types
//

// Experimental API to handle data collection in the browser process for AI
// features.
enum class SnapshotType {
  kNone = 0,
  kApc,
  kScreenshot,
  kApcAndScreenshot,
  kMaxValue = kApcAndScreenshot,
};


const char* ToString(SnapshotType as_enum);
SnapshotType ParseSnapshotType(std::string_view as_string);
std::u16string GetSnapshotTypeParseError(std::string_view as_string);

struct ApcOptions {
  ApcOptions();
  ~ApcOptions();
  ApcOptions(const ApcOptions&) = delete;
  ApcOptions& operator=(const ApcOptions&) = delete;
  ApcOptions(ApcOptions&& rhs) noexcept;
  ApcOptions& operator=(ApcOptions&& rhs) noexcept;

  // Populates a ApcOptions object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, ApcOptions& out);

  // Populates a ApcOptions object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::DictValue& value, ApcOptions& out);

  // Creates a deep copy of ApcOptions.
  ApcOptions Clone() const;

  // Creates a ApcOptions object from a base::DictValue, or nullopt on failure.
  static std::optional<ApcOptions> FromValue(const base::DictValue& value);

  // Creates a ApcOptions object from a base::Value, or nullopt on failure.
  static std::optional<ApcOptions> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisApcOptions object.
  base::DictValue ToValue() const;

  // Selects the data to return. Defaults to apc. Screenshot-only requests still
  // extract APC internally to support sensitive-field redaction.
  SnapshotType type;

  // Requests content-only APC, omitting interaction details, geometry, and
  // stacking order. Defaults to false.
  std::optional<bool> exclude_actionable_details;

  // Excludes APC content from frames outside the top-level page's site. Defaults
  // to false.
  std::optional<bool> exclude_cross_site_frames;

  // Excludes nodes and subtrees identified as advertising. Defaults to false.
  std::optional<bool> exclude_ad_related;

  // Maximum number of named HTML meta elements to include. Must be nonnegative.
  // Zero or omission excludes meta elements.
  std::optional<int> max_meta_elements;

};

struct ApcSnapshot {
  ApcSnapshot();
  ~ApcSnapshot();
  ApcSnapshot(const ApcSnapshot&) = delete;
  ApcSnapshot& operator=(const ApcSnapshot&) = delete;
  ApcSnapshot(ApcSnapshot&& rhs) noexcept;
  ApcSnapshot& operator=(ApcSnapshot&& rhs) noexcept;

  // Populates a ApcSnapshot object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ApcSnapshot& out);

  // Populates a ApcSnapshot object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::DictValue& value, ApcSnapshot& out);

  // Creates a deep copy of ApcSnapshot.
  ApcSnapshot Clone() const;

  // Creates a ApcSnapshot object from a base::DictValue, or nullopt on failure.
  static std::optional<ApcSnapshot> FromValue(const base::DictValue& value);

  // Creates a ApcSnapshot object from a base::Value, or nullopt on failure.
  static std::optional<ApcSnapshot> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisApcSnapshot object.
  base::DictValue ToValue() const;

  // Base64-encoded optimization_guide.proto.AnnotatedPageContent bytes. Present
  // for apc and apc_and_screenshot snapshots.
  std::optional<std::string> apc_base64;

  // Base64-encoded PNG bytes of the visible viewport. Present for screenshot and
  // apc_and_screenshot snapshots.
  std::optional<std::string> screenshot_base64;

};

struct TextSurroundingSelection {
  TextSurroundingSelection();
  ~TextSurroundingSelection();
  TextSurroundingSelection(const TextSurroundingSelection&) = delete;
  TextSurroundingSelection& operator=(const TextSurroundingSelection&) = delete;
  TextSurroundingSelection(TextSurroundingSelection&& rhs) noexcept;
  TextSurroundingSelection& operator=(TextSurroundingSelection&& rhs) noexcept;

  // Populates a TextSurroundingSelection object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, TextSurroundingSelection& out);

  // Populates a TextSurroundingSelection object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::DictValue& value, TextSurroundingSelection& out);

  // Creates a deep copy of TextSurroundingSelection.
  TextSurroundingSelection Clone() const;

  // Creates a TextSurroundingSelection object from a base::DictValue, or
  // nullopt on failure.
  static std::optional<TextSurroundingSelection> FromValue(const base::DictValue& value);

  // Creates a TextSurroundingSelection object from a base::Value, or nullopt on
  // failure.
  static std::optional<TextSurroundingSelection> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisTextSurroundingSelection object.
  base::DictValue ToValue() const;

  // The text surrounding the current selection.
  std::string content;

  // The start offset of the selection within |content|.
  int start_offset;

  // The end offset of the selection within |content|.
  int end_offset;

};


//
// Functions
//

namespace GetAiData {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  int dom_node_id;

  std::string frame_id;

  std::string user_input;

  int tab_id;


 private:
  Params();
};

namespace Results {

base::ListValue Create(const std::vector<uint8_t>& data);
}  // namespace Results

}  // namespace GetAiData

namespace GetAiDataWithSpecifier {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  int tab_id;

  std::vector<uint8_t> ai_data_specifier;


 private:
  Params();
};

namespace Results {

base::ListValue Create(const std::vector<uint8_t>& data);
}  // namespace Results

}  // namespace GetAiDataWithSpecifier

namespace GetApcSnapshot {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  int tab_id;

  ApcOptions options;


 private:
  Params();
};

namespace Results {

base::ListValue Create(const ApcSnapshot& snapshot);
}  // namespace Results

}  // namespace GetApcSnapshot

namespace GetTextSurroundingSelection {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  int tab_id;

  int max_length;


 private:
  Params();
};

namespace Results {

// fetched text result
base::ListValue Create(const TextSurroundingSelection& result);
}  // namespace Results

}  // namespace GetTextSurroundingSelection

}  // namespace experimental_ai_data
}  // namespace api
}  // namespace extensions

#endif  // CHROME_COMMON_EXTENSIONS_API_EXPERIMENTAL_AI_DATA_H__
