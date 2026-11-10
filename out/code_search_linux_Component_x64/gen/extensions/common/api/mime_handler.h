// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/mime_handler.webidl
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../extensions/common/api/mime_handler.webidl --root=../../ --destdir=gen --namespace=extensions::api::%(namespace)s --generator=cpp --include-rules=

#ifndef EXTENSIONS_COMMON_API_MIME_HANDLER_H__
#define EXTENSIONS_COMMON_API_MIME_HANDLER_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <optional>
#include <string>
#include <vector>

#include "base/values.h"

namespace extensions {
namespace api {
namespace mime_handler {

//
// Types
//

struct StreamInfo {
  StreamInfo();
  ~StreamInfo();
  StreamInfo(const StreamInfo&) = delete;
  StreamInfo& operator=(const StreamInfo&) = delete;
  StreamInfo(StreamInfo&& rhs) noexcept;
  StreamInfo& operator=(StreamInfo&& rhs) noexcept;

  // Populates a StreamInfo object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, StreamInfo& out);

  // Populates a StreamInfo object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::DictValue& value, StreamInfo& out);

  // Creates a deep copy of StreamInfo.
  StreamInfo Clone() const;

  // Creates a StreamInfo object from a base::DictValue, or nullopt on failure.
  static std::optional<StreamInfo> FromValue(const base::DictValue& value);

  // Creates a StreamInfo object from a base::Value, or nullopt on failure.
  static std::optional<StreamInfo> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisStreamInfo object.
  base::DictValue ToValue() const;

  // HTTP response headers as key-value pairs.
  struct ResponseHeaders {
    ResponseHeaders();
    ~ResponseHeaders();
    ResponseHeaders(const ResponseHeaders&) = delete;
    ResponseHeaders& operator=(const ResponseHeaders&) = delete;
    ResponseHeaders(ResponseHeaders&& rhs) noexcept;
    ResponseHeaders& operator=(ResponseHeaders&& rhs) noexcept;

    // Populates a ResponseHeaders object from a base::Value& instance. Returns
    // whether |out| was successfully populated.
    static bool Populate(const base::Value& value, ResponseHeaders& out);

    // Populates a ResponseHeaders object from a Dict& instance. Returns whether
    // |out| was successfully populated.
    static bool Populate(const base::DictValue& value, ResponseHeaders& out);

    // Creates a deep copy of ResponseHeaders.
    ResponseHeaders Clone() const;

    // Creates a ResponseHeaders object from a base::DictValue, or nullopt on
    // failure.
    static std::optional<ResponseHeaders> FromValue(const base::DictValue& value);

    // Creates a ResponseHeaders object from a base::Value, or nullopt on failure.
    static std::optional<ResponseHeaders> FromValue(const base::Value& value);

    // Returns a new base::DictValue representing the serialized form of
    // thisResponseHeaders object.
    base::DictValue ToValue() const;

    base::DictValue additional_properties;
  };


  // The MIME type of the intercepted content.
  std::string mime_type;

  // The original URL the user navigated to.
  std::string original_url;

  // The URL to fetch the stream data from.
  std::string stream_url;

  // The tab ID containing the document.
  int tab_id;

  // HTTP response headers as key-value pairs.
  ResponseHeaders response_headers;

  // True if loaded in an embedded context (iframe/embed/object).
  bool embedded;

};

struct MimeHandlerOptions {
  MimeHandlerOptions();
  ~MimeHandlerOptions();
  MimeHandlerOptions(const MimeHandlerOptions&) = delete;
  MimeHandlerOptions& operator=(const MimeHandlerOptions&) = delete;
  MimeHandlerOptions(MimeHandlerOptions&& rhs) noexcept;
  MimeHandlerOptions& operator=(MimeHandlerOptions&& rhs) noexcept;

  // Populates a MimeHandlerOptions object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, MimeHandlerOptions& out);

  // Populates a MimeHandlerOptions object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::DictValue& value, MimeHandlerOptions& out);

  // Creates a deep copy of MimeHandlerOptions.
  MimeHandlerOptions Clone() const;

  // Creates a MimeHandlerOptions object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<MimeHandlerOptions> FromValue(const base::DictValue& value);

  // Creates a MimeHandlerOptions object from a base::Value, or nullopt on
  // failure.
  static std::optional<MimeHandlerOptions> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisMimeHandlerOptions object.
  base::DictValue ToValue() const;

  // Whether this handler is enabled. Defaults to the manifest entry's `enabled`
  // value.
  std::optional<bool> enabled;

  // Whether this handler may be used for embedded loads (iframe, embed, object).
  // Defaults to the manifest entry's `can_embed` value. Has no effect while
  // `enabled` is false.
  std::optional<bool> can_embed;

};


//
// Functions
//

namespace GetStreamInfo {

namespace Results {

base::ListValue Create(const StreamInfo& info);
}  // namespace Results

}  // namespace GetStreamInfo

namespace AbortAndFallbackToNativeHandler {

namespace Results {

base::ListValue Create();
}  // namespace Results

}  // namespace AbortAndFallbackToNativeHandler

namespace SetMimeHandlerOptions {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The MIME type to configure. It must be a MIME type the extension handles
  // through mime_types_handler.
  std::string mime_type;

  // The options to change.
  MimeHandlerOptions options;


 private:
  Params();
};

namespace Results {

base::ListValue Create();
}  // namespace Results

}  // namespace SetMimeHandlerOptions

namespace GetMimeHandlerOptions {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The MIME type whose options to read. It must be a MIME type the extension
  // handles through mime_types_handler.
  std::string mime_type;


 private:
  Params();
};

namespace Results {

base::ListValue Create(const MimeHandlerOptions& options);
}  // namespace Results

}  // namespace GetMimeHandlerOptions

}  // namespace mime_handler
}  // namespace api
}  // namespace extensions

#endif  // EXTENSIONS_COMMON_API_MIME_HANDLER_H__
