// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/pdf_viewer_private.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../chrome/common/extensions/api/pdf_viewer_private.idl --root=../../ --destdir=gen --namespace=extensions::api::%(namespace)s --generator=cpp --include-rules=extensions/common/api:extensions::api::%(namespace)s

#ifndef CHROME_COMMON_EXTENSIONS_API_PDF_VIEWER_PRIVATE_H__
#define CHROME_COMMON_EXTENSIONS_API_PDF_VIEWER_PRIVATE_H__

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
namespace pdf_viewer_private {

//
// Types
//

// Must match `SaveRequestType` in `pdf/mojom/pdf.mojom` and
// `tools/typescript/definitions/pdf_viewer_private.d.ts`.
enum class SaveRequestType {
  kNone = 0,
  kAnnotation,
  kOriginal,
  kEdited,
  kSearchified,
  kMaxValue = kSearchified,
};


const char* ToString(SaveRequestType as_enum);
SaveRequestType ParseSaveRequestType(std::string_view as_string);
std::u16string GetSaveRequestTypeParseError(std::string_view as_string);

// Enumeration of save to drive error types. Must match `SaveToDriveErrorType`
// in tools/typescript/definitions/pdf_viewer_private.d.ts and
// `PdfSaveToDriveErrorType` in tools/metrics/histograms/metadata/pdf/enums.xml.
enum class SaveToDriveErrorType {
  kNone = 0,
  kNoError,
  kUnknownError,
  kQuotaExceeded,
  kOffline,
  kOauthError,
  kAccountChooserCanceled,
  kParentFolderSelectionFailed,
  kMaxValue = kParentFolderSelectionFailed,
};


const char* ToString(SaveToDriveErrorType as_enum);
SaveToDriveErrorType ParseSaveToDriveErrorType(std::string_view as_string);
std::u16string GetSaveToDriveErrorTypeParseError(std::string_view as_string);

// Enumeration of save to drive status. Must match `SaveToDriveStatus` in
// tools/typescript/definitions/pdf_viewer_private.d.ts and
// `PdfSaveToDriveStatus` in tools/metrics/histograms/metadata/pdf/enums.xml.
enum class SaveToDriveStatus {
  kNone = 0,
  kNotStarted,
  kInitiated,
  kAccountChooserShown,
  kAccountSelected,
  kAccountAddSelected,
  kAccountAdded,
  kFetchOauth,
  kFetchParentFolder,
  kUploadStarted,
  kUploadInProgress,
  kUploadCompleted,
  kUploadRetried,
  kUploadFailed,
  kMaxValue = kUploadFailed,
};


const char* ToString(SaveToDriveStatus as_enum);
SaveToDriveStatus ParseSaveToDriveStatus(std::string_view as_string);
std::u16string GetSaveToDriveStatusParseError(std::string_view as_string);

struct SaveToDriveProgress {
  SaveToDriveProgress();
  ~SaveToDriveProgress();
  SaveToDriveProgress(const SaveToDriveProgress&) = delete;
  SaveToDriveProgress& operator=(const SaveToDriveProgress&) = delete;
  SaveToDriveProgress(SaveToDriveProgress&& rhs) noexcept;
  SaveToDriveProgress& operator=(SaveToDriveProgress&& rhs) noexcept;

  // Populates a SaveToDriveProgress object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, SaveToDriveProgress& out);

  // Populates a SaveToDriveProgress object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::DictValue& value, SaveToDriveProgress& out);

  // Creates a deep copy of SaveToDriveProgress.
  SaveToDriveProgress Clone() const;

  // Creates a SaveToDriveProgress object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<SaveToDriveProgress> FromValue(const base::DictValue& value);

  // Creates a SaveToDriveProgress object from a base::Value, or nullopt on
  // failure.
  static std::optional<SaveToDriveProgress> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisSaveToDriveProgress object.
  base::DictValue ToValue() const;

  // The status of the upload.
  SaveToDriveStatus status;

  // The error type of the upload.
  SaveToDriveErrorType error_type;

  // The ID of the drive item that was uploaded. It is only set if the upload was
  // successful, i.e. if `status` is `UPLOAD_COMPLETED`.
  std::optional<std::string> drive_item_id;

  // The total size of the file in bytes. It is only set if the upload is in
  // progress or completed, i.e. if `status` is `UPLOAD_STARTED`,
  // `UPLOAD_IN_PROGRESS`, or `UPLOAD_COMPLETED`.
  std::optional<int> file_size_bytes;

  // The number of bytes that have been uploaded. It is only set if the upload is
  // in progress or completed, i.e. if `status` is `UPLOAD_STARTED`,
  // `UPLOAD_IN_PROGRESS`, or `UPLOAD_COMPLETED`.
  std::optional<int> uploaded_bytes;

  // The localized metadata and progress of the file. It is only set if the upload
  // is in progress or completed, i.e. if `status` is `UPLOAD_STARTED`,
  // `UPLOAD_IN_PROGRESS`, or `UPLOAD_COMPLETED`.
  std::optional<std::string> file_metadata;

  // The name of the file. It is only set if the upload was successful, i.e. if
  // `status` is `UPLOAD_COMPLETED`.
  std::optional<std::string> file_name;

  // The name of the parent folder. It is only set if the upload was successful,
  // i.e. if `status` is `UPLOAD_COMPLETED`.
  std::optional<std::string> parent_folder_name;

  // The email of the account that is chosen to save the PDF to Drive. It is only
  // set after the account is selected.
  std::optional<std::string> account_email;

  // Whether the account is a managed account. It is only set after the account is
  // selected.
  std::optional<bool> account_is_managed;

};

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

  // The original URL that was intercepted.
  std::string original_url;

  // The URL that the stream can be read from.
  std::string stream_url;

  // The ID of the tab that opened the stream. If the stream is not opened in a
  // tab, it will be -1.
  int tab_id;

  // Whether the stream is embedded within another document.
  bool embedded;

};

struct PdfPluginAttributes {
  PdfPluginAttributes();
  ~PdfPluginAttributes();
  PdfPluginAttributes(const PdfPluginAttributes&) = delete;
  PdfPluginAttributes& operator=(const PdfPluginAttributes&) = delete;
  PdfPluginAttributes(PdfPluginAttributes&& rhs) noexcept;
  PdfPluginAttributes& operator=(PdfPluginAttributes&& rhs) noexcept;

  // Populates a PdfPluginAttributes object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, PdfPluginAttributes& out);

  // Populates a PdfPluginAttributes object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::DictValue& value, PdfPluginAttributes& out);

  // Creates a deep copy of PdfPluginAttributes.
  PdfPluginAttributes Clone() const;

  // Creates a PdfPluginAttributes object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<PdfPluginAttributes> FromValue(const base::DictValue& value);

  // Creates a PdfPluginAttributes object from a base::Value, or nullopt on
  // failure.
  static std::optional<PdfPluginAttributes> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisPdfPluginAttributes object.
  base::DictValue ToValue() const;

  // The background color in ARGB format for painting. Since the background color
  // is an unsigned 32-bit integer which can be outside the range of "long" type,
  // define it as a "double" type here.
  double background_color;

  // Indicates whether the plugin allows to execute JavaScript and maybe XFA.
  // Loading XFA for PDF forms will automatically be disabled if this flag is
  // false.
  bool allow_javascript;

};

struct Typeface {
  Typeface();
  ~Typeface();
  Typeface(const Typeface&) = delete;
  Typeface& operator=(const Typeface&) = delete;
  Typeface(Typeface&& rhs) noexcept;
  Typeface& operator=(Typeface&& rhs) noexcept;

  // Populates a Typeface object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, Typeface& out);

  // Populates a Typeface object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::DictValue& value, Typeface& out);

  // Creates a deep copy of Typeface.
  Typeface Clone() const;

  // Creates a Typeface object from a base::DictValue, or nullopt on failure.
  static std::optional<Typeface> FromValue(const base::DictValue& value);

  // Creates a Typeface object from a base::Value, or nullopt on failure.
  static std::optional<Typeface> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisTypeface object.
  base::DictValue ToValue() const;

  // From SkTypeface::uniqueID()
  int unique_id;

  // Serialized SkTypeface
  std::vector<uint8_t> serialized_typeface;

  // For a crash key in the event deserialization fails
  std::string name;

};

struct GetTextInfoResult {
  GetTextInfoResult();
  ~GetTextInfoResult();
  GetTextInfoResult(const GetTextInfoResult&) = delete;
  GetTextInfoResult& operator=(const GetTextInfoResult&) = delete;
  GetTextInfoResult(GetTextInfoResult&& rhs) noexcept;
  GetTextInfoResult& operator=(GetTextInfoResult&& rhs) noexcept;

  // Populates a GetTextInfoResult object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, GetTextInfoResult& out);

  // Populates a GetTextInfoResult object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::DictValue& value, GetTextInfoResult& out);

  // Creates a deep copy of GetTextInfoResult.
  GetTextInfoResult Clone() const;

  // Creates a GetTextInfoResult object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<GetTextInfoResult> FromValue(const base::DictValue& value);

  // Creates a GetTextInfoResult object from a base::Value, or nullopt on
  // failure.
  static std::optional<GetTextInfoResult> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisGetTextInfoResult object.
  base::DictValue ToValue() const;

  std::vector<Typeface> typefaces;

  // Serialized pdf::mojom::InkTextInfo
  std::vector<uint8_t> mojo_text_info;

};


//
// Functions
//

namespace GetStreamInfo {

namespace Results {

base::ListValue Create(const StreamInfo& stream_info);
}  // namespace Results

}  // namespace GetStreamInfo

namespace IsAllowedLocalFileAccess {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::string url;


 private:
  Params();
};

namespace Results {

base::ListValue Create(bool result);
}  // namespace Results

}  // namespace IsAllowedLocalFileAccess

namespace SaveToDrive {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  SaveRequestType save_request_type;


 private:
  Params();
};

namespace Results {

base::ListValue Create();
}  // namespace Results

}  // namespace SaveToDrive

namespace SetPdfDocumentTitle {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::string title;


 private:
  Params();
};

namespace Results {

base::ListValue Create();
}  // namespace Results

}  // namespace SetPdfDocumentTitle

namespace SetPdfPluginAttributes {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  PdfPluginAttributes attributes;


 private:
  Params();
};

namespace Results {

base::ListValue Create();
}  // namespace Results

}  // namespace SetPdfPluginAttributes

namespace GlicSummarize {

}  // namespace GlicSummarize

//
// Events
//

namespace OnSave {

extern const char kEventName[];  // "pdfViewerPrivate.onSave"

base::ListValue Create(const std::string& stream_url);
}  // namespace OnSave

namespace OnSaveToDriveProgress {

extern const char kEventName[];  // "pdfViewerPrivate.onSaveToDriveProgress"

base::ListValue Create(const std::string& stream_url, const SaveToDriveProgress& progress);
}  // namespace OnSaveToDriveProgress

namespace OnShouldUpdateViewport {

extern const char kEventName[];  // "pdfViewerPrivate.onShouldUpdateViewport"

base::ListValue Create(const std::string& stream_url, const std::string& pdf_url);
}  // namespace OnShouldUpdateViewport

}  // namespace pdf_viewer_private
}  // namespace api
}  // namespace extensions

#endif  // CHROME_COMMON_EXTENSIONS_API_PDF_VIEWER_PRIVATE_H__
