// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/webrtc_desktop_capture_private.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../chrome/common/extensions/api/webrtc_desktop_capture_private.idl --root=../../ --destdir=gen --namespace=extensions::api::%(namespace)s --generator=cpp --include-rules=extensions/common/api:extensions::api::%(namespace)s

#ifndef CHROME_COMMON_EXTENSIONS_API_WEBRTC_DESKTOP_CAPTURE_PRIVATE_H__
#define CHROME_COMMON_EXTENSIONS_API_WEBRTC_DESKTOP_CAPTURE_PRIVATE_H__

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
namespace webrtc_desktop_capture_private {

//
// Types
//

struct RequestInfo {
  RequestInfo();
  ~RequestInfo();
  RequestInfo(const RequestInfo&) = delete;
  RequestInfo& operator=(const RequestInfo&) = delete;
  RequestInfo(RequestInfo&& rhs) noexcept;
  RequestInfo& operator=(RequestInfo&& rhs) noexcept;

  // Populates a RequestInfo object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, RequestInfo& out);

  // Populates a RequestInfo object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::DictValue& value, RequestInfo& out);

  // Creates a deep copy of RequestInfo.
  RequestInfo Clone() const;

  // Creates a RequestInfo object from a base::DictValue, or nullopt on failure.
  static std::optional<RequestInfo> FromValue(const base::DictValue& value);

  // Creates a RequestInfo object from a base::Value, or nullopt on failure.
  static std::optional<RequestInfo> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisRequestInfo object.
  base::DictValue ToValue() const;

  // The guest process id for the requester.
  int guest_process_id;

  // The webview render frame id for the requester.
  int guest_render_frame_id;

};

enum class DesktopCaptureSourceType {
  kNone = 0,
  kScreen,
  kWindow,
  kTab,
  kMaxValue = kTab,
};


const char* ToString(DesktopCaptureSourceType as_enum);
DesktopCaptureSourceType ParseDesktopCaptureSourceType(std::string_view as_string);
std::u16string GetDesktopCaptureSourceTypeParseError(std::string_view as_string);


//
// Functions
//

namespace ChooseDesktopMedia {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::vector<DesktopCaptureSourceType> sources;

  RequestInfo request;


 private:
  Params();
};

namespace Results {

base::ListValue Create(const std::string& stream_id);
}  // namespace Results

}  // namespace ChooseDesktopMedia

namespace CancelChooseDesktopMedia {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  int desktop_media_request_id;


 private:
  Params();
};

}  // namespace CancelChooseDesktopMedia

}  // namespace webrtc_desktop_capture_private
}  // namespace api
}  // namespace extensions

#endif  // CHROME_COMMON_EXTENSIONS_API_WEBRTC_DESKTOP_CAPTURE_PRIVATE_H__
