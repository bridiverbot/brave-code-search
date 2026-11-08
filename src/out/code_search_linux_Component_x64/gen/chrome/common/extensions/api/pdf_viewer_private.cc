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

#include "chrome/common/extensions/api/pdf_viewer_private.h"

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
namespace pdf_viewer_private {
//
// Types
//

const char* ToString(SaveRequestType enum_param) {
  switch (enum_param) {
    case SaveRequestType::kAnnotation:
      return "ANNOTATION";
    case SaveRequestType::kOriginal:
      return "ORIGINAL";
    case SaveRequestType::kEdited:
      return "EDITED";
    case SaveRequestType::kSearchified:
      return "SEARCHIFIED";
    case SaveRequestType::kNone:
      return "";
  }
  NOTREACHED();
}

SaveRequestType ParseSaveRequestType(std::string_view enum_string) {
  if (enum_string == "ANNOTATION")
    return SaveRequestType::kAnnotation;
  if (enum_string == "ORIGINAL")
    return SaveRequestType::kOriginal;
  if (enum_string == "EDITED")
    return SaveRequestType::kEdited;
  if (enum_string == "SEARCHIFIED")
    return SaveRequestType::kSearchified;
  return SaveRequestType::kNone;
}

std::u16string GetSaveRequestTypeParseError(std::string_view enum_string) {
  return u"expected \"ANNOTATION\" or \"ORIGINAL\" or \"EDITED\" or \"SEARCHIFIED\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(SaveToDriveErrorType enum_param) {
  switch (enum_param) {
    case SaveToDriveErrorType::kNoError:
      return "NO_ERROR";
    case SaveToDriveErrorType::kUnknownError:
      return "UNKNOWN_ERROR";
    case SaveToDriveErrorType::kQuotaExceeded:
      return "QUOTA_EXCEEDED";
    case SaveToDriveErrorType::kOffline:
      return "OFFLINE";
    case SaveToDriveErrorType::kOauthError:
      return "OAUTH_ERROR";
    case SaveToDriveErrorType::kAccountChooserCanceled:
      return "ACCOUNT_CHOOSER_CANCELED";
    case SaveToDriveErrorType::kParentFolderSelectionFailed:
      return "PARENT_FOLDER_SELECTION_FAILED";
    case SaveToDriveErrorType::kNone:
      return "";
  }
  NOTREACHED();
}

SaveToDriveErrorType ParseSaveToDriveErrorType(std::string_view enum_string) {
  if (enum_string == "NO_ERROR")
    return SaveToDriveErrorType::kNoError;
  if (enum_string == "UNKNOWN_ERROR")
    return SaveToDriveErrorType::kUnknownError;
  if (enum_string == "QUOTA_EXCEEDED")
    return SaveToDriveErrorType::kQuotaExceeded;
  if (enum_string == "OFFLINE")
    return SaveToDriveErrorType::kOffline;
  if (enum_string == "OAUTH_ERROR")
    return SaveToDriveErrorType::kOauthError;
  if (enum_string == "ACCOUNT_CHOOSER_CANCELED")
    return SaveToDriveErrorType::kAccountChooserCanceled;
  if (enum_string == "PARENT_FOLDER_SELECTION_FAILED")
    return SaveToDriveErrorType::kParentFolderSelectionFailed;
  return SaveToDriveErrorType::kNone;
}

std::u16string GetSaveToDriveErrorTypeParseError(std::string_view enum_string) {
  return u"expected \"NO_ERROR\" or \"UNKNOWN_ERROR\" or \"QUOTA_EXCEEDED\" or \"OFFLINE\" or \"OAUTH_ERROR\" or \"ACCOUNT_CHOOSER_CANCELED\" or \"PARENT_FOLDER_SELECTION_FAILED\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(SaveToDriveStatus enum_param) {
  switch (enum_param) {
    case SaveToDriveStatus::kNotStarted:
      return "NOT_STARTED";
    case SaveToDriveStatus::kInitiated:
      return "INITIATED";
    case SaveToDriveStatus::kAccountChooserShown:
      return "ACCOUNT_CHOOSER_SHOWN";
    case SaveToDriveStatus::kAccountSelected:
      return "ACCOUNT_SELECTED";
    case SaveToDriveStatus::kAccountAddSelected:
      return "ACCOUNT_ADD_SELECTED";
    case SaveToDriveStatus::kAccountAdded:
      return "ACCOUNT_ADDED";
    case SaveToDriveStatus::kFetchOauth:
      return "FETCH_OAUTH";
    case SaveToDriveStatus::kFetchParentFolder:
      return "FETCH_PARENT_FOLDER";
    case SaveToDriveStatus::kUploadStarted:
      return "UPLOAD_STARTED";
    case SaveToDriveStatus::kUploadInProgress:
      return "UPLOAD_IN_PROGRESS";
    case SaveToDriveStatus::kUploadCompleted:
      return "UPLOAD_COMPLETED";
    case SaveToDriveStatus::kUploadRetried:
      return "UPLOAD_RETRIED";
    case SaveToDriveStatus::kUploadFailed:
      return "UPLOAD_FAILED";
    case SaveToDriveStatus::kNone:
      return "";
  }
  NOTREACHED();
}

SaveToDriveStatus ParseSaveToDriveStatus(std::string_view enum_string) {
  if (enum_string == "NOT_STARTED")
    return SaveToDriveStatus::kNotStarted;
  if (enum_string == "INITIATED")
    return SaveToDriveStatus::kInitiated;
  if (enum_string == "ACCOUNT_CHOOSER_SHOWN")
    return SaveToDriveStatus::kAccountChooserShown;
  if (enum_string == "ACCOUNT_SELECTED")
    return SaveToDriveStatus::kAccountSelected;
  if (enum_string == "ACCOUNT_ADD_SELECTED")
    return SaveToDriveStatus::kAccountAddSelected;
  if (enum_string == "ACCOUNT_ADDED")
    return SaveToDriveStatus::kAccountAdded;
  if (enum_string == "FETCH_OAUTH")
    return SaveToDriveStatus::kFetchOauth;
  if (enum_string == "FETCH_PARENT_FOLDER")
    return SaveToDriveStatus::kFetchParentFolder;
  if (enum_string == "UPLOAD_STARTED")
    return SaveToDriveStatus::kUploadStarted;
  if (enum_string == "UPLOAD_IN_PROGRESS")
    return SaveToDriveStatus::kUploadInProgress;
  if (enum_string == "UPLOAD_COMPLETED")
    return SaveToDriveStatus::kUploadCompleted;
  if (enum_string == "UPLOAD_RETRIED")
    return SaveToDriveStatus::kUploadRetried;
  if (enum_string == "UPLOAD_FAILED")
    return SaveToDriveStatus::kUploadFailed;
  return SaveToDriveStatus::kNone;
}

std::u16string GetSaveToDriveStatusParseError(std::string_view enum_string) {
  return u"expected \"NOT_STARTED\" or \"INITIATED\" or \"ACCOUNT_CHOOSER_SHOWN\" or \"ACCOUNT_SELECTED\" or \"ACCOUNT_ADD_SELECTED\" or \"ACCOUNT_ADDED\" or \"FETCH_OAUTH\" or \"FETCH_PARENT_FOLDER\" or \"UPLOAD_STARTED\" or \"UPLOAD_IN_PROGRESS\" or \"UPLOAD_COMPLETED\" or \"UPLOAD_RETRIED\" or \"UPLOAD_FAILED\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


SaveToDriveProgress::SaveToDriveProgress()
: status(),
error_type() {}

SaveToDriveProgress::~SaveToDriveProgress() = default;
SaveToDriveProgress::SaveToDriveProgress(SaveToDriveProgress&& rhs) noexcept = default;
SaveToDriveProgress& SaveToDriveProgress::operator=(SaveToDriveProgress&& rhs) noexcept = default;
SaveToDriveProgress SaveToDriveProgress::Clone() const {
  SaveToDriveProgress out;
  out.status = status;
  out.error_type = error_type;
  out.drive_item_id = drive_item_id;
  out.file_size_bytes = file_size_bytes;
  out.uploaded_bytes = uploaded_bytes;
  out.file_metadata = file_metadata;
  out.file_name = file_name;
  out.parent_folder_name = parent_folder_name;
  out.account_email = account_email;
  out.account_is_managed = account_is_managed;
  return out;
}

// static
bool SaveToDriveProgress::Populate(
    const base::DictValue& dict, SaveToDriveProgress& out) {
  const base::Value* status_value = dict.Find("status");
  if (!status_value) {
    return false;
  }
  {
    const std::string* save_to_drive_status_as_string = (*status_value).GetIfString();
    if (!save_to_drive_status_as_string) {
      return false;
    }
    out.status = ParseSaveToDriveStatus(*save_to_drive_status_as_string);
    if (out.status == SaveToDriveStatus()) {
      return false;
    }
  }

  const base::Value* error_type_value = dict.Find("errorType");
  if (!error_type_value) {
    return false;
  }
  {
    const std::string* save_to_drive_error_type_as_string = (*error_type_value).GetIfString();
    if (!save_to_drive_error_type_as_string) {
      return false;
    }
    out.error_type = ParseSaveToDriveErrorType(*save_to_drive_error_type_as_string);
    if (out.error_type == SaveToDriveErrorType()) {
      return false;
    }
  }

  const base::Value* drive_item_id_value = dict.Find("driveItemId");
  if (drive_item_id_value) {
    {
      auto* temp = (*drive_item_id_value).GetIfString();
      if (!temp) {
        out.drive_item_id = std::nullopt;
        return false;
      }
      out.drive_item_id = *temp;
    }
  }

  const base::Value* file_size_bytes_value = dict.Find("fileSizeBytes");
  if (file_size_bytes_value) {
    {
      auto temp = (*file_size_bytes_value).GetIfInt();
      if (!temp.has_value()) {
        out.file_size_bytes = std::nullopt;
        return false;
      }
      out.file_size_bytes = *temp;
    }
  }

  const base::Value* uploaded_bytes_value = dict.Find("uploadedBytes");
  if (uploaded_bytes_value) {
    {
      auto temp = (*uploaded_bytes_value).GetIfInt();
      if (!temp.has_value()) {
        out.uploaded_bytes = std::nullopt;
        return false;
      }
      out.uploaded_bytes = *temp;
    }
  }

  const base::Value* file_metadata_value = dict.Find("fileMetadata");
  if (file_metadata_value) {
    {
      auto* temp = (*file_metadata_value).GetIfString();
      if (!temp) {
        out.file_metadata = std::nullopt;
        return false;
      }
      out.file_metadata = *temp;
    }
  }

  const base::Value* file_name_value = dict.Find("fileName");
  if (file_name_value) {
    {
      auto* temp = (*file_name_value).GetIfString();
      if (!temp) {
        out.file_name = std::nullopt;
        return false;
      }
      out.file_name = *temp;
    }
  }

  const base::Value* parent_folder_name_value = dict.Find("parentFolderName");
  if (parent_folder_name_value) {
    {
      auto* temp = (*parent_folder_name_value).GetIfString();
      if (!temp) {
        out.parent_folder_name = std::nullopt;
        return false;
      }
      out.parent_folder_name = *temp;
    }
  }

  const base::Value* account_email_value = dict.Find("accountEmail");
  if (account_email_value) {
    {
      auto* temp = (*account_email_value).GetIfString();
      if (!temp) {
        out.account_email = std::nullopt;
        return false;
      }
      out.account_email = *temp;
    }
  }

  const base::Value* account_is_managed_value = dict.Find("accountIsManaged");
  if (account_is_managed_value) {
    {
      auto temp = (*account_is_managed_value).GetIfBool();
      if (!temp.has_value()) {
        out.account_is_managed = std::nullopt;
        return false;
      }
      out.account_is_managed = *temp;
    }
  }

  return true;
}

// static
bool SaveToDriveProgress::Populate(
    const base::Value& value, SaveToDriveProgress& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<SaveToDriveProgress> SaveToDriveProgress::FromValue(const base::DictValue& value) {
  SaveToDriveProgress out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<SaveToDriveProgress> SaveToDriveProgress::FromValue(const base::Value& value) {
  SaveToDriveProgress out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue SaveToDriveProgress::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("status", pdf_viewer_private::ToString(this->status));

  to_value_result.Set("errorType", pdf_viewer_private::ToString(this->error_type));

  if (this->drive_item_id) {
    to_value_result.Set("driveItemId", *this->drive_item_id);

  }
  if (this->file_size_bytes) {
    to_value_result.Set("fileSizeBytes", *this->file_size_bytes);

  }
  if (this->uploaded_bytes) {
    to_value_result.Set("uploadedBytes", *this->uploaded_bytes);

  }
  if (this->file_metadata) {
    to_value_result.Set("fileMetadata", *this->file_metadata);

  }
  if (this->file_name) {
    to_value_result.Set("fileName", *this->file_name);

  }
  if (this->parent_folder_name) {
    to_value_result.Set("parentFolderName", *this->parent_folder_name);

  }
  if (this->account_email) {
    to_value_result.Set("accountEmail", *this->account_email);

  }
  if (this->account_is_managed) {
    to_value_result.Set("accountIsManaged", *this->account_is_managed);

  }

  return to_value_result;
}


StreamInfo::StreamInfo()
: tab_id(0),
embedded(false) {}

StreamInfo::~StreamInfo() = default;
StreamInfo::StreamInfo(StreamInfo&& rhs) noexcept = default;
StreamInfo& StreamInfo::operator=(StreamInfo&& rhs) noexcept = default;
StreamInfo StreamInfo::Clone() const {
  StreamInfo out;
  out.original_url = original_url;
  out.stream_url = stream_url;
  out.tab_id = tab_id;
  out.embedded = embedded;
  return out;
}

// static
bool StreamInfo::Populate(
    const base::DictValue& dict, StreamInfo& out) {
  const base::Value* original_url_value = dict.Find("originalUrl");
  if (!original_url_value) {
    return false;
  }
  {
    auto* temp = (*original_url_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.original_url = *temp;
  }

  const base::Value* stream_url_value = dict.Find("streamUrl");
  if (!stream_url_value) {
    return false;
  }
  {
    auto* temp = (*stream_url_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.stream_url = *temp;
  }

  const base::Value* tab_id_value = dict.Find("tabId");
  if (!tab_id_value) {
    return false;
  }
  {
    auto temp = (*tab_id_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.tab_id = *temp;
  }

  const base::Value* embedded_value = dict.Find("embedded");
  if (!embedded_value) {
    return false;
  }
  {
    auto temp = (*embedded_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.embedded = *temp;
  }

  return true;
}

// static
bool StreamInfo::Populate(
    const base::Value& value, StreamInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<StreamInfo> StreamInfo::FromValue(const base::DictValue& value) {
  StreamInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<StreamInfo> StreamInfo::FromValue(const base::Value& value) {
  StreamInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue StreamInfo::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("originalUrl", this->original_url);

  to_value_result.Set("streamUrl", this->stream_url);

  to_value_result.Set("tabId", this->tab_id);

  to_value_result.Set("embedded", this->embedded);


  return to_value_result;
}


PdfPluginAttributes::PdfPluginAttributes()
: background_color(0.0),
allow_javascript(false) {}

PdfPluginAttributes::~PdfPluginAttributes() = default;
PdfPluginAttributes::PdfPluginAttributes(PdfPluginAttributes&& rhs) noexcept = default;
PdfPluginAttributes& PdfPluginAttributes::operator=(PdfPluginAttributes&& rhs) noexcept = default;
PdfPluginAttributes PdfPluginAttributes::Clone() const {
  PdfPluginAttributes out;
  out.background_color = background_color;
  out.allow_javascript = allow_javascript;
  return out;
}

// static
bool PdfPluginAttributes::Populate(
    const base::DictValue& dict, PdfPluginAttributes& out) {
  const base::Value* background_color_value = dict.Find("backgroundColor");
  if (!background_color_value) {
    return false;
  }
  {
    auto temp = (*background_color_value).GetIfDouble();
    if (!temp.has_value()) {
      return false;
    }
    out.background_color = *temp;
  }

  const base::Value* allow_javascript_value = dict.Find("allowJavascript");
  if (!allow_javascript_value) {
    return false;
  }
  {
    auto temp = (*allow_javascript_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.allow_javascript = *temp;
  }

  return true;
}

// static
bool PdfPluginAttributes::Populate(
    const base::Value& value, PdfPluginAttributes& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<PdfPluginAttributes> PdfPluginAttributes::FromValue(const base::DictValue& value) {
  PdfPluginAttributes out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<PdfPluginAttributes> PdfPluginAttributes::FromValue(const base::Value& value) {
  PdfPluginAttributes out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue PdfPluginAttributes::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("backgroundColor", this->background_color);

  to_value_result.Set("allowJavascript", this->allow_javascript);


  return to_value_result;
}


Typeface::Typeface()
: unique_id(0) {}

Typeface::~Typeface() = default;
Typeface::Typeface(Typeface&& rhs) noexcept = default;
Typeface& Typeface::operator=(Typeface&& rhs) noexcept = default;
Typeface Typeface::Clone() const {
  Typeface out;
  out.unique_id = unique_id;
  out.serialized_typeface = serialized_typeface;
  out.name = name;
  return out;
}

// static
bool Typeface::Populate(
    const base::DictValue& dict, Typeface& out) {
  const base::Value* unique_id_value = dict.Find("uniqueId");
  if (!unique_id_value) {
    return false;
  }
  {
    auto temp = (*unique_id_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.unique_id = *temp;
  }

  const base::Value* serialized_typeface_value = dict.Find("serializedTypeface");
  if (!serialized_typeface_value) {
    return false;
  }
  {
    if (!(*serialized_typeface_value).is_blob()) {
      return false;
    }
    else {
      out.serialized_typeface = (*serialized_typeface_value).GetBlob();
    }
  }

  const base::Value* name_value = dict.Find("name");
  if (!name_value) {
    return false;
  }
  {
    auto* temp = (*name_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.name = *temp;
  }

  return true;
}

// static
bool Typeface::Populate(
    const base::Value& value, Typeface& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<Typeface> Typeface::FromValue(const base::DictValue& value) {
  Typeface out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<Typeface> Typeface::FromValue(const base::Value& value) {
  Typeface out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue Typeface::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("uniqueId", this->unique_id);

  to_value_result.Set("serializedTypeface", base::Value(this->serialized_typeface));

  to_value_result.Set("name", this->name);


  return to_value_result;
}


GetTextInfoResult::GetTextInfoResult()
 {}

GetTextInfoResult::~GetTextInfoResult() = default;
GetTextInfoResult::GetTextInfoResult(GetTextInfoResult&& rhs) noexcept = default;
GetTextInfoResult& GetTextInfoResult::operator=(GetTextInfoResult&& rhs) noexcept = default;
GetTextInfoResult GetTextInfoResult::Clone() const {
  GetTextInfoResult out;
  out.typefaces.reserve(typefaces.size());
  for (const auto& element : typefaces) {
    json_schema_compiler::util::AppendToContainer(out.typefaces, element.Clone());
  }
  out.mojo_text_info = mojo_text_info;
  return out;
}

// static
bool GetTextInfoResult::Populate(
    const base::DictValue& dict, GetTextInfoResult& out) {
  const base::Value* typefaces_value = dict.Find("typefaces");
  if (!typefaces_value) {
    return false;
  }
  {
    if (!(*typefaces_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*typefaces_value).GetList(), out.typefaces)) {
        return false;
      }
    }
  }

  const base::Value* mojo_text_info_value = dict.Find("mojoTextInfo");
  if (!mojo_text_info_value) {
    return false;
  }
  {
    if (!(*mojo_text_info_value).is_blob()) {
      return false;
    }
    else {
      out.mojo_text_info = (*mojo_text_info_value).GetBlob();
    }
  }

  return true;
}

// static
bool GetTextInfoResult::Populate(
    const base::Value& value, GetTextInfoResult& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<GetTextInfoResult> GetTextInfoResult::FromValue(const base::DictValue& value) {
  GetTextInfoResult out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<GetTextInfoResult> GetTextInfoResult::FromValue(const base::Value& value) {
  GetTextInfoResult out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue GetTextInfoResult::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("typefaces", json_schema_compiler::util::CreateValueFromArray(this->typefaces));

  to_value_result.Set("mojoTextInfo", base::Value(this->mojo_text_info));


  return to_value_result;
}



//
// Functions
//

namespace GetStreamInfo {

base::ListValue Results::Create(const StreamInfo& stream_info) {
  base::ListValue create_results;
  create_results.reserve(1);
  create_results.Append((stream_info).ToValue());

  return create_results;
}
}  // namespace GetStreamInfo

namespace IsAllowedLocalFileAccess {

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
    const base::Value& url_value = args[0];
    {
      auto* temp = url_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.url = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::ListValue Results::Create(bool result) {
  base::ListValue create_results;
  create_results.reserve(1);
  create_results.Append(result);

  return create_results;
}
}  // namespace IsAllowedLocalFileAccess

namespace SaveToDrive {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::ListValue& args) {
  if (args.size() > 1) {
    return std::nullopt;
  }
  Params params;
  params.save_request_type = SaveRequestType();

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& save_request_type_value = args[0];
    {
      const std::string* save_request_type_as_string = save_request_type_value.GetIfString();
      if (!save_request_type_as_string) {
        return std::nullopt;
      }
      params.save_request_type = ParseSaveRequestType(*save_request_type_as_string);
      if (params.save_request_type == SaveRequestType()) {
        return std::nullopt;
      }
    }
  }

  return params;
}


base::ListValue Results::Create() {
  base::ListValue create_results;

  return create_results;
}
}  // namespace SaveToDrive

namespace SetPdfDocumentTitle {

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
    const base::Value& title_value = args[0];
    {
      auto* temp = title_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.title = *temp;
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
}  // namespace SetPdfDocumentTitle

namespace SetPdfPluginAttributes {

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
    const base::Value& attributes_value = args[0];
    {
      if (!attributes_value.is_dict()) {
        return std::nullopt;
      }
      if (!PdfPluginAttributes::Populate(attributes_value.GetDict(), params.attributes)) {
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
}  // namespace SetPdfPluginAttributes

namespace GlicSummarize {

}  // namespace GlicSummarize

//
// Events
//

namespace OnSave {

const char kEventName[] = "pdfViewerPrivate.onSave";

base::ListValue Create(const std::string& stream_url) {
  base::ListValue create_results;
  create_results.reserve(1);
  create_results.Append(stream_url);

  return create_results;
}

}  // namespace OnSave

namespace OnSaveToDriveProgress {

const char kEventName[] = "pdfViewerPrivate.onSaveToDriveProgress";

base::ListValue Create(const std::string& stream_url, const SaveToDriveProgress& progress) {
  base::ListValue create_results;
  create_results.reserve(2);
  create_results.Append(stream_url);

  create_results.Append((progress).ToValue());

  return create_results;
}

}  // namespace OnSaveToDriveProgress

namespace OnShouldUpdateViewport {

const char kEventName[] = "pdfViewerPrivate.onShouldUpdateViewport";

base::ListValue Create(const std::string& stream_url, const std::string& pdf_url) {
  base::ListValue create_results;
  create_results.reserve(2);
  create_results.Append(stream_url);

  create_results.Append(pdf_url);

  return create_results;
}

}  // namespace OnShouldUpdateViewport

}  // namespace pdf_viewer_private
}  // namespace api
}  // namespace extensions

