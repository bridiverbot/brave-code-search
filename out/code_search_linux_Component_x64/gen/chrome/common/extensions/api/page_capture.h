// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/page_capture.json
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../chrome/common/extensions/api/page_capture.json --root=../../ --destdir=gen --namespace=extensions::api::%(namespace)s --generator=cpp --include-rules=extensions/common/api:extensions::api::%(namespace)s

#ifndef CHROME_COMMON_EXTENSIONS_API_PAGE_CAPTURE_H__
#define CHROME_COMMON_EXTENSIONS_API_PAGE_CAPTURE_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <optional>
#include <string>
#include <vector>

#include "base/values.h"

namespace extensions {
namespace api {
namespace page_capture {

//
// Functions
//

namespace SaveAsMHTML {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  struct Details {
    Details();
    ~Details();
    Details(const Details&) = delete;
    Details& operator=(const Details&) = delete;
    Details(Details&& rhs) noexcept;
    Details& operator=(Details&& rhs) noexcept;

    // Populates a Details object from a base::Value& instance. Returns whether
    // |out| was successfully populated.
    static bool Populate(const base::Value& value, Details& out);

    // Populates a Details object from a Dict& instance. Returns whether |out| was
    // successfully populated.
    static bool Populate(const base::DictValue& value, Details& out);

    // Creates a deep copy of Details.
    Details Clone() const;

    // Creates a Details object from a base::DictValue, or nullopt on failure.
    static std::optional<Details> FromValue(const base::DictValue& value);

    // Creates a Details object from a base::Value, or nullopt on failure.
    static std::optional<Details> FromValue(const base::Value& value);

    // The id of the tab to save as MHTML.
    int tab_id;

  };


  Details details;


 private:
  Params();
};

namespace Results {

// The MHTML data as a Blob.
struct MhtmlData {
  MhtmlData();
  ~MhtmlData();
  MhtmlData(const MhtmlData&) = delete;
  MhtmlData& operator=(const MhtmlData&) = delete;
  MhtmlData(MhtmlData&& rhs) noexcept;
  MhtmlData& operator=(MhtmlData&& rhs) noexcept;

  // Returns a new base::DictValue representing the serialized form of
  // thisMhtmlData object.
  base::DictValue ToValue() const;

};


// The MHTML data as a Blob.
base::ListValue Create(const MhtmlData& mhtml_data);
}  // namespace Results

}  // namespace SaveAsMHTML

}  // namespace page_capture
}  // namespace api
}  // namespace extensions

#endif  // CHROME_COMMON_EXTENSIONS_API_PAGE_CAPTURE_H__
