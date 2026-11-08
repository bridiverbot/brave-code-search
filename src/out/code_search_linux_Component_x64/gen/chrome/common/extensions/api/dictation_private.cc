// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/dictation_private.webidl
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../chrome/common/extensions/api/dictation_private.webidl --root=../../ --destdir=gen --namespace=extensions::api::%(namespace)s --generator=cpp --include-rules=extensions/common/api:extensions::api::%(namespace)s

#include "chrome/common/extensions/api/dictation_private.h"

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
namespace dictation_private {
//
// Properties
//

const int areAdditionalPropertiesIgnored = 1;

//
// Types
//

const char* ToString(TranscriptionType enum_param) {
  switch (enum_param) {
    case TranscriptionType::kPartial:
      return "partial";
    case TranscriptionType::kFinal:
      return "final";
    case TranscriptionType::kNone:
      return "";
  }
  NOTREACHED();
}

TranscriptionType ParseTranscriptionType(std::string_view enum_string) {
  if (enum_string == "partial")
    return TranscriptionType::kPartial;
  if (enum_string == "final")
    return TranscriptionType::kFinal;
  return TranscriptionType::kNone;
}

std::u16string GetTranscriptionTypeParseError(std::string_view enum_string) {
  return u"expected \"partial\" or \"final\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(StreamState enum_param) {
  switch (enum_param) {
    case StreamState::kInitializing:
      return "initializing";
    case StreamState::kFailed:
      return "failed";
    case StreamState::kTranscribing:
      return "transcribing";
    case StreamState::kComplete:
      return "complete";
    case StreamState::kNone:
      return "";
  }
  NOTREACHED();
}

StreamState ParseStreamState(std::string_view enum_string) {
  if (enum_string == "initializing")
    return StreamState::kInitializing;
  if (enum_string == "failed")
    return StreamState::kFailed;
  if (enum_string == "transcribing")
    return StreamState::kTranscribing;
  if (enum_string == "complete")
    return StreamState::kComplete;
  return StreamState::kNone;
}

std::u16string GetStreamStateParseError(std::string_view enum_string) {
  return u"expected \"initializing\" or \"failed\" or \"transcribing\" or \"complete\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


DictationContext::DictationContext()
 {}

DictationContext::~DictationContext() = default;
DictationContext::DictationContext(DictationContext&& rhs) noexcept = default;
DictationContext& DictationContext::operator=(DictationContext&& rhs) noexcept = default;
DictationContext DictationContext::Clone() const {
  DictationContext out;
  out.annotated_page_content = annotated_page_content;
  out.inner_text = inner_text;
  out.editable_content = editable_content;
  return out;
}

// static
bool DictationContext::Populate(
    const base::DictValue& dict, DictationContext& out) {
  const base::Value* annotated_page_content_value = dict.Find("annotatedPageContent");
  if (annotated_page_content_value) {
    {
      if (!(*annotated_page_content_value).is_blob()) {
        return false;
      }
      else {
        out.annotated_page_content = (*annotated_page_content_value).GetBlob();
      }
    }
  }

  const base::Value* inner_text_value = dict.Find("innerText");
  if (inner_text_value) {
    {
      auto* temp = (*inner_text_value).GetIfString();
      if (!temp) {
        out.inner_text = std::nullopt;
        return false;
      }
      out.inner_text = *temp;
    }
  }

  const base::Value* editable_content_value = dict.Find("editableContent");
  if (editable_content_value) {
    {
      auto* temp = (*editable_content_value).GetIfString();
      if (!temp) {
        out.editable_content = std::nullopt;
        return false;
      }
      out.editable_content = *temp;
    }
  }

  return true;
}

// static
bool DictationContext::Populate(
    const base::Value& value, DictationContext& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<DictationContext> DictationContext::FromValue(const base::DictValue& value) {
  DictationContext out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<DictationContext> DictationContext::FromValue(const base::Value& value) {
  DictationContext out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue DictationContext::ToValue() const {
  base::DictValue to_value_result;

  if (this->annotated_page_content) {
    to_value_result.Set("annotatedPageContent", base::Value(*this->annotated_page_content));

  }
  if (this->inner_text) {
    to_value_result.Set("innerText", *this->inner_text);

  }
  if (this->editable_content) {
    to_value_result.Set("editableContent", *this->editable_content);

  }

  return to_value_result;
}


StartStreamFlags::StartStreamFlags()
: eval_mode(false),
web_speech_api_backend(false) {}

StartStreamFlags::~StartStreamFlags() = default;
StartStreamFlags::StartStreamFlags(StartStreamFlags&& rhs) noexcept = default;
StartStreamFlags& StartStreamFlags::operator=(StartStreamFlags&& rhs) noexcept = default;
StartStreamFlags StartStreamFlags::Clone() const {
  StartStreamFlags out;
  out.eval_mode = eval_mode;
  out.web_speech_api_backend = web_speech_api_backend;
  return out;
}

// static
bool StartStreamFlags::Populate(
    const base::DictValue& dict, StartStreamFlags& out) {
  const base::Value* eval_mode_value = dict.Find("evalMode");
  if (!eval_mode_value) {
    return false;
  }
  {
    auto temp = (*eval_mode_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.eval_mode = *temp;
  }

  const base::Value* web_speech_api_backend_value = dict.Find("webSpeechApiBackend");
  if (!web_speech_api_backend_value) {
    return false;
  }
  {
    auto temp = (*web_speech_api_backend_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.web_speech_api_backend = *temp;
  }

  return true;
}

// static
bool StartStreamFlags::Populate(
    const base::Value& value, StartStreamFlags& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<StartStreamFlags> StartStreamFlags::FromValue(const base::DictValue& value) {
  StartStreamFlags out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<StartStreamFlags> StartStreamFlags::FromValue(const base::Value& value) {
  StartStreamFlags out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue StartStreamFlags::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("evalMode", this->eval_mode);

  to_value_result.Set("webSpeechApiBackend", this->web_speech_api_backend);


  return to_value_result;
}


StartStreamDetails::StartStreamDetails()
: stream_id(0) {}

StartStreamDetails::~StartStreamDetails() = default;
StartStreamDetails::StartStreamDetails(StartStreamDetails&& rhs) noexcept = default;
StartStreamDetails& StartStreamDetails::operator=(StartStreamDetails&& rhs) noexcept = default;
StartStreamDetails StartStreamDetails::Clone() const {
  StartStreamDetails out;
  out.stream_id = stream_id;
  if (context) {
    out.context = context->Clone();
  }
  out.flags = flags.Clone();
  return out;
}

// static
bool StartStreamDetails::Populate(
    const base::DictValue& dict, StartStreamDetails& out) {
  const base::Value* stream_id_value = dict.Find("streamId");
  if (!stream_id_value) {
    return false;
  }
  {
    auto temp = (*stream_id_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.stream_id = *temp;
  }

  const base::Value* context_value = dict.Find("context");
  if (context_value) {
    {
      if (!(*context_value).is_dict()) {
        return false;
      }
      else {
        DictationContext temp;
        if (!DictationContext::Populate((*context_value).GetDict(), temp))
          return false;
        out.context = std::move(temp);
      }
    }
  }

  const base::Value* flags_value = dict.Find("flags");
  if (!flags_value) {
    return false;
  }
  {
    if (!(*flags_value).is_dict()) {
      return false;
    }
    if (!StartStreamFlags::Populate((*flags_value).GetDict(), out.flags)) {
      return false;
    }
  }

  return true;
}

// static
bool StartStreamDetails::Populate(
    const base::Value& value, StartStreamDetails& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<StartStreamDetails> StartStreamDetails::FromValue(const base::DictValue& value) {
  StartStreamDetails out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<StartStreamDetails> StartStreamDetails::FromValue(const base::Value& value) {
  StartStreamDetails out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue StartStreamDetails::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("streamId", this->stream_id);

  if (this->context) {
    to_value_result.Set("context", (this->context)->ToValue());

  }
  to_value_result.Set("flags", (this->flags).ToValue());


  return to_value_result;
}


EndStreamDetails::EndStreamDetails()
: stream_id(0) {}

EndStreamDetails::~EndStreamDetails() = default;
EndStreamDetails::EndStreamDetails(EndStreamDetails&& rhs) noexcept = default;
EndStreamDetails& EndStreamDetails::operator=(EndStreamDetails&& rhs) noexcept = default;
EndStreamDetails EndStreamDetails::Clone() const {
  EndStreamDetails out;
  out.stream_id = stream_id;
  return out;
}

// static
bool EndStreamDetails::Populate(
    const base::DictValue& dict, EndStreamDetails& out) {
  const base::Value* stream_id_value = dict.Find("streamId");
  if (!stream_id_value) {
    return false;
  }
  {
    auto temp = (*stream_id_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.stream_id = *temp;
  }

  return true;
}

// static
bool EndStreamDetails::Populate(
    const base::Value& value, EndStreamDetails& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<EndStreamDetails> EndStreamDetails::FromValue(const base::DictValue& value) {
  EndStreamDetails out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<EndStreamDetails> EndStreamDetails::FromValue(const base::Value& value) {
  EndStreamDetails out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue EndStreamDetails::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("streamId", this->stream_id);


  return to_value_result;
}


ContextUpdateDetails::ContextUpdateDetails()
: stream_id(0) {}

ContextUpdateDetails::~ContextUpdateDetails() = default;
ContextUpdateDetails::ContextUpdateDetails(ContextUpdateDetails&& rhs) noexcept = default;
ContextUpdateDetails& ContextUpdateDetails::operator=(ContextUpdateDetails&& rhs) noexcept = default;
ContextUpdateDetails ContextUpdateDetails::Clone() const {
  ContextUpdateDetails out;
  out.stream_id = stream_id;
  out.context = context.Clone();
  return out;
}

// static
bool ContextUpdateDetails::Populate(
    const base::DictValue& dict, ContextUpdateDetails& out) {
  const base::Value* stream_id_value = dict.Find("streamId");
  if (!stream_id_value) {
    return false;
  }
  {
    auto temp = (*stream_id_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.stream_id = *temp;
  }

  const base::Value* context_value = dict.Find("context");
  if (!context_value) {
    return false;
  }
  {
    if (!(*context_value).is_dict()) {
      return false;
    }
    if (!DictationContext::Populate((*context_value).GetDict(), out.context)) {
      return false;
    }
  }

  return true;
}

// static
bool ContextUpdateDetails::Populate(
    const base::Value& value, ContextUpdateDetails& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<ContextUpdateDetails> ContextUpdateDetails::FromValue(const base::DictValue& value) {
  ContextUpdateDetails out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<ContextUpdateDetails> ContextUpdateDetails::FromValue(const base::Value& value) {
  ContextUpdateDetails out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue ContextUpdateDetails::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("streamId", this->stream_id);

  to_value_result.Set("context", (this->context).ToValue());


  return to_value_result;
}


UpdateTranscriptionDetails::UpdateTranscriptionDetails()
: stream_id(0),
type() {}

UpdateTranscriptionDetails::~UpdateTranscriptionDetails() = default;
UpdateTranscriptionDetails::UpdateTranscriptionDetails(UpdateTranscriptionDetails&& rhs) noexcept = default;
UpdateTranscriptionDetails& UpdateTranscriptionDetails::operator=(UpdateTranscriptionDetails&& rhs) noexcept = default;
UpdateTranscriptionDetails UpdateTranscriptionDetails::Clone() const {
  UpdateTranscriptionDetails out;
  out.stream_id = stream_id;
  out.type = type;
  out.data = data;
  return out;
}

// static
bool UpdateTranscriptionDetails::Populate(
    const base::DictValue& dict, UpdateTranscriptionDetails& out) {
  const base::Value* stream_id_value = dict.Find("streamId");
  if (!stream_id_value) {
    return false;
  }
  {
    auto temp = (*stream_id_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.stream_id = *temp;
  }

  const base::Value* type_value = dict.Find("type");
  if (!type_value) {
    return false;
  }
  {
    const std::string* transcription_type_as_string = (*type_value).GetIfString();
    if (!transcription_type_as_string) {
      return false;
    }
    out.type = ParseTranscriptionType(*transcription_type_as_string);
    if (out.type == TranscriptionType()) {
      return false;
    }
  }

  const base::Value* data_value = dict.Find("data");
  if (!data_value) {
    return false;
  }
  {
    auto* temp = (*data_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.data = *temp;
  }

  return true;
}

// static
bool UpdateTranscriptionDetails::Populate(
    const base::Value& value, UpdateTranscriptionDetails& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<UpdateTranscriptionDetails> UpdateTranscriptionDetails::FromValue(const base::DictValue& value) {
  UpdateTranscriptionDetails out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<UpdateTranscriptionDetails> UpdateTranscriptionDetails::FromValue(const base::Value& value) {
  UpdateTranscriptionDetails out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue UpdateTranscriptionDetails::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("streamId", this->stream_id);

  to_value_result.Set("type", dictation_private::ToString(this->type));

  to_value_result.Set("data", this->data);


  return to_value_result;
}


SetStreamStateDetails::SetStreamStateDetails()
: stream_id(0),
state() {}

SetStreamStateDetails::~SetStreamStateDetails() = default;
SetStreamStateDetails::SetStreamStateDetails(SetStreamStateDetails&& rhs) noexcept = default;
SetStreamStateDetails& SetStreamStateDetails::operator=(SetStreamStateDetails&& rhs) noexcept = default;
SetStreamStateDetails SetStreamStateDetails::Clone() const {
  SetStreamStateDetails out;
  out.stream_id = stream_id;
  out.state = state;
  out.error_code = error_code;
  return out;
}

// static
bool SetStreamStateDetails::Populate(
    const base::DictValue& dict, SetStreamStateDetails& out) {
  const base::Value* stream_id_value = dict.Find("streamId");
  if (!stream_id_value) {
    return false;
  }
  {
    auto temp = (*stream_id_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.stream_id = *temp;
  }

  const base::Value* state_value = dict.Find("state");
  if (!state_value) {
    return false;
  }
  {
    const std::string* stream_state_as_string = (*state_value).GetIfString();
    if (!stream_state_as_string) {
      return false;
    }
    out.state = ParseStreamState(*stream_state_as_string);
    if (out.state == StreamState()) {
      return false;
    }
  }

  const base::Value* error_code_value = dict.Find("errorCode");
  if (error_code_value) {
    {
      auto temp = (*error_code_value).GetIfInt();
      if (!temp.has_value()) {
        out.error_code = std::nullopt;
        return false;
      }
      out.error_code = *temp;
    }
  }

  return true;
}

// static
bool SetStreamStateDetails::Populate(
    const base::Value& value, SetStreamStateDetails& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<SetStreamStateDetails> SetStreamStateDetails::FromValue(const base::DictValue& value) {
  SetStreamStateDetails out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<SetStreamStateDetails> SetStreamStateDetails::FromValue(const base::Value& value) {
  SetStreamStateDetails out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue SetStreamStateDetails::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("streamId", this->stream_id);

  to_value_result.Set("state", dictation_private::ToString(this->state));

  if (this->error_code) {
    to_value_result.Set("errorCode", *this->error_code);

  }

  return to_value_result;
}


LogMessageDetails::LogMessageDetails()
: timestamp(0.0) {}

LogMessageDetails::~LogMessageDetails() = default;
LogMessageDetails::LogMessageDetails(LogMessageDetails&& rhs) noexcept = default;
LogMessageDetails& LogMessageDetails::operator=(LogMessageDetails&& rhs) noexcept = default;
LogMessageDetails LogMessageDetails::Clone() const {
  LogMessageDetails out;
  out.timestamp = timestamp;
  out.message = message;
  return out;
}

// static
bool LogMessageDetails::Populate(
    const base::DictValue& dict, LogMessageDetails& out) {
  const base::Value* timestamp_value = dict.Find("timestamp");
  if (!timestamp_value) {
    return false;
  }
  {
    auto temp = (*timestamp_value).GetIfDouble();
    if (!temp.has_value()) {
      return false;
    }
    out.timestamp = *temp;
  }

  const base::Value* message_value = dict.Find("message");
  if (!message_value) {
    return false;
  }
  {
    auto* temp = (*message_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.message = *temp;
  }

  return true;
}

// static
bool LogMessageDetails::Populate(
    const base::Value& value, LogMessageDetails& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<LogMessageDetails> LogMessageDetails::FromValue(const base::DictValue& value) {
  LogMessageDetails out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<LogMessageDetails> LogMessageDetails::FromValue(const base::Value& value) {
  LogMessageDetails out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue LogMessageDetails::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("timestamp", this->timestamp);

  to_value_result.Set("message", this->message);


  return to_value_result;
}



//
// Functions
//

namespace UpdateTranscription {

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
    const base::Value& details_value = args[0];
    {
      if (!details_value.is_dict()) {
        return std::nullopt;
      }
      if (!UpdateTranscriptionDetails::Populate(details_value.GetDict(), params.details)) {
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
}  // namespace UpdateTranscription

namespace SetStreamState {

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
    const base::Value& details_value = args[0];
    {
      if (!details_value.is_dict()) {
        return std::nullopt;
      }
      if (!SetStreamStateDetails::Populate(details_value.GetDict(), params.details)) {
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
}  // namespace SetStreamState

namespace UpdateAudioLevel {

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
    const base::Value& audio_level_value = args[0];
    {
      auto temp = audio_level_value.GetIfDouble();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.audio_level = *temp;
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
}  // namespace UpdateAudioLevel

//
// Events
//

namespace OnStartStream {

const char kEventName[] = "dictationPrivate.onStartStream";

base::ListValue Create(const StartStreamDetails& details) {
  base::ListValue create_results;
  create_results.reserve(1);
  create_results.Append((details).ToValue());

  return create_results;
}

}  // namespace OnStartStream

namespace OnEndStream {

const char kEventName[] = "dictationPrivate.onEndStream";

base::ListValue Create(const EndStreamDetails& details) {
  base::ListValue create_results;
  create_results.reserve(1);
  create_results.Append((details).ToValue());

  return create_results;
}

}  // namespace OnEndStream

namespace OnContextUpdate {

const char kEventName[] = "dictationPrivate.onContextUpdate";

base::ListValue Create(const ContextUpdateDetails& details) {
  base::ListValue create_results;
  create_results.reserve(1);
  create_results.Append((details).ToValue());

  return create_results;
}

}  // namespace OnContextUpdate

namespace OnBrowserLog {

const char kEventName[] = "dictationPrivate.onBrowserLog";

base::ListValue Create(const std::vector<LogMessageDetails>& details) {
  base::ListValue create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(details));

  return create_results;
}

}  // namespace OnBrowserLog

}  // namespace dictation_private
}  // namespace api
}  // namespace extensions

