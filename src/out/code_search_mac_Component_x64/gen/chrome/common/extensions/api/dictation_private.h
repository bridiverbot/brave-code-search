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

#ifndef CHROME_COMMON_EXTENSIONS_API_DICTATION_PRIVATE_H__
#define CHROME_COMMON_EXTENSIONS_API_DICTATION_PRIVATE_H__

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
namespace dictation_private {

//
// Properties
//

// Whether unknown properties in function parameter details objects are ignored.
// Used to feature detect when optional parameters may be sent without causing
// an error.
extern const int areAdditionalPropertiesIgnored;

//
// Types
//

// The type of transcription update.
enum class TranscriptionType {
  kNone = 0,
  kPartial,
  kFinal,
  kMaxValue = kFinal,
};


const char* ToString(TranscriptionType as_enum);
TranscriptionType ParseTranscriptionType(std::string_view as_string);
std::u16string GetTranscriptionTypeParseError(std::string_view as_string);

// The current state of the dictation stream.
enum class StreamState {
  kNone = 0,
  kInitializing,
  kFailed,
  kTranscribing,
  kComplete,
  kMaxValue = kComplete,
};


const char* ToString(StreamState as_enum);
StreamState ParseStreamState(std::string_view as_string);
std::u16string GetStreamStateParseError(std::string_view as_string);

struct DictationContext {
  DictationContext();
  ~DictationContext();
  DictationContext(const DictationContext&) = delete;
  DictationContext& operator=(const DictationContext&) = delete;
  DictationContext(DictationContext&& rhs) noexcept;
  DictationContext& operator=(DictationContext&& rhs) noexcept;

  // Populates a DictationContext object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, DictationContext& out);

  // Populates a DictationContext object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::DictValue& value, DictationContext& out);

  // Creates a deep copy of DictationContext.
  DictationContext Clone() const;

  // Creates a DictationContext object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<DictationContext> FromValue(const base::DictValue& value);

  // Creates a DictationContext object from a base::Value, or nullopt on
  // failure.
  static std::optional<DictationContext> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisDictationContext object.
  base::DictValue ToValue() const;

  // The captured AnnotatedPageContent proto.
  std::optional<std::vector<uint8_t>> annotated_page_content;

  // The plain text of the page.
  std::optional<std::string> inner_text;

  // The existing content of the editable field.
  std::optional<std::string> editable_content;

};

struct StartStreamFlags {
  StartStreamFlags();
  ~StartStreamFlags();
  StartStreamFlags(const StartStreamFlags&) = delete;
  StartStreamFlags& operator=(const StartStreamFlags&) = delete;
  StartStreamFlags(StartStreamFlags&& rhs) noexcept;
  StartStreamFlags& operator=(StartStreamFlags&& rhs) noexcept;

  // Populates a StartStreamFlags object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, StartStreamFlags& out);

  // Populates a StartStreamFlags object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::DictValue& value, StartStreamFlags& out);

  // Creates a deep copy of StartStreamFlags.
  StartStreamFlags Clone() const;

  // Creates a StartStreamFlags object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<StartStreamFlags> FromValue(const base::DictValue& value);

  // Creates a StartStreamFlags object from a base::Value, or nullopt on
  // failure.
  static std::optional<StartStreamFlags> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisStartStreamFlags object.
  base::DictValue ToValue() const;

  // Starts the stream in "eval" mode, useful for recording inputs.
  bool eval_mode;

  // If true, uses the Web Speech API backend instead of the cloud backend.
  bool web_speech_api_backend;

};

struct StartStreamDetails {
  StartStreamDetails();
  ~StartStreamDetails();
  StartStreamDetails(const StartStreamDetails&) = delete;
  StartStreamDetails& operator=(const StartStreamDetails&) = delete;
  StartStreamDetails(StartStreamDetails&& rhs) noexcept;
  StartStreamDetails& operator=(StartStreamDetails&& rhs) noexcept;

  // Populates a StartStreamDetails object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, StartStreamDetails& out);

  // Populates a StartStreamDetails object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::DictValue& value, StartStreamDetails& out);

  // Creates a deep copy of StartStreamDetails.
  StartStreamDetails Clone() const;

  // Creates a StartStreamDetails object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<StartStreamDetails> FromValue(const base::DictValue& value);

  // Creates a StartStreamDetails object from a base::Value, or nullopt on
  // failure.
  static std::optional<StartStreamDetails> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisStartStreamDetails object.
  base::DictValue ToValue() const;

  // The unique identifier of the stream.
  int stream_id;

  // The context of the dictation session. May be omitted if context is passed
  // asynchronously in the ContextUpdate event instead.
  std::optional<DictationContext> context;

  // Flags used to experimentally modify the behavior of the extension.
  StartStreamFlags flags;

};

struct EndStreamDetails {
  EndStreamDetails();
  ~EndStreamDetails();
  EndStreamDetails(const EndStreamDetails&) = delete;
  EndStreamDetails& operator=(const EndStreamDetails&) = delete;
  EndStreamDetails(EndStreamDetails&& rhs) noexcept;
  EndStreamDetails& operator=(EndStreamDetails&& rhs) noexcept;

  // Populates a EndStreamDetails object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, EndStreamDetails& out);

  // Populates a EndStreamDetails object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::DictValue& value, EndStreamDetails& out);

  // Creates a deep copy of EndStreamDetails.
  EndStreamDetails Clone() const;

  // Creates a EndStreamDetails object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<EndStreamDetails> FromValue(const base::DictValue& value);

  // Creates a EndStreamDetails object from a base::Value, or nullopt on
  // failure.
  static std::optional<EndStreamDetails> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisEndStreamDetails object.
  base::DictValue ToValue() const;

  // The unique identifier of the stream.
  int stream_id;

};

struct ContextUpdateDetails {
  ContextUpdateDetails();
  ~ContextUpdateDetails();
  ContextUpdateDetails(const ContextUpdateDetails&) = delete;
  ContextUpdateDetails& operator=(const ContextUpdateDetails&) = delete;
  ContextUpdateDetails(ContextUpdateDetails&& rhs) noexcept;
  ContextUpdateDetails& operator=(ContextUpdateDetails&& rhs) noexcept;

  // Populates a ContextUpdateDetails object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ContextUpdateDetails& out);

  // Populates a ContextUpdateDetails object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::DictValue& value, ContextUpdateDetails& out);

  // Creates a deep copy of ContextUpdateDetails.
  ContextUpdateDetails Clone() const;

  // Creates a ContextUpdateDetails object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<ContextUpdateDetails> FromValue(const base::DictValue& value);

  // Creates a ContextUpdateDetails object from a base::Value, or nullopt on
  // failure.
  static std::optional<ContextUpdateDetails> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisContextUpdateDetails object.
  base::DictValue ToValue() const;

  // The unique identifier of the stream.
  int stream_id;

  // The context of the dictation session.
  DictationContext context;

};

struct UpdateTranscriptionDetails {
  UpdateTranscriptionDetails();
  ~UpdateTranscriptionDetails();
  UpdateTranscriptionDetails(const UpdateTranscriptionDetails&) = delete;
  UpdateTranscriptionDetails& operator=(const UpdateTranscriptionDetails&) = delete;
  UpdateTranscriptionDetails(UpdateTranscriptionDetails&& rhs) noexcept;
  UpdateTranscriptionDetails& operator=(UpdateTranscriptionDetails&& rhs) noexcept;

  // Populates a UpdateTranscriptionDetails object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, UpdateTranscriptionDetails& out);

  // Populates a UpdateTranscriptionDetails object from a Dict& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::DictValue& value, UpdateTranscriptionDetails& out);

  // Creates a deep copy of UpdateTranscriptionDetails.
  UpdateTranscriptionDetails Clone() const;

  // Creates a UpdateTranscriptionDetails object from a base::DictValue, or
  // nullopt on failure.
  static std::optional<UpdateTranscriptionDetails> FromValue(const base::DictValue& value);

  // Creates a UpdateTranscriptionDetails object from a base::Value, or nullopt
  // on failure.
  static std::optional<UpdateTranscriptionDetails> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisUpdateTranscriptionDetails object.
  base::DictValue ToValue() const;

  // The unique identifier of the dictation stream.
  int stream_id;

  // The type of transcription update.
  TranscriptionType type;

  // The transcribed text data.
  std::string data;

};

struct SetStreamStateDetails {
  SetStreamStateDetails();
  ~SetStreamStateDetails();
  SetStreamStateDetails(const SetStreamStateDetails&) = delete;
  SetStreamStateDetails& operator=(const SetStreamStateDetails&) = delete;
  SetStreamStateDetails(SetStreamStateDetails&& rhs) noexcept;
  SetStreamStateDetails& operator=(SetStreamStateDetails&& rhs) noexcept;

  // Populates a SetStreamStateDetails object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, SetStreamStateDetails& out);

  // Populates a SetStreamStateDetails object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::DictValue& value, SetStreamStateDetails& out);

  // Creates a deep copy of SetStreamStateDetails.
  SetStreamStateDetails Clone() const;

  // Creates a SetStreamStateDetails object from a base::DictValue, or nullopt
  // on failure.
  static std::optional<SetStreamStateDetails> FromValue(const base::DictValue& value);

  // Creates a SetStreamStateDetails object from a base::Value, or nullopt on
  // failure.
  static std::optional<SetStreamStateDetails> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisSetStreamStateDetails object.
  base::DictValue ToValue() const;

  int stream_id;

  StreamState state;

  // The numeric error code if state is "failed". It is expected that the
  // component extension and the browser have equivalent error code definitions,
  // and this extension API does not validate them. If the component extension
  // sends an unrecognized error code, it is treated as a generic error.
  std::optional<int> error_code;

};

struct LogMessageDetails {
  LogMessageDetails();
  ~LogMessageDetails();
  LogMessageDetails(const LogMessageDetails&) = delete;
  LogMessageDetails& operator=(const LogMessageDetails&) = delete;
  LogMessageDetails(LogMessageDetails&& rhs) noexcept;
  LogMessageDetails& operator=(LogMessageDetails&& rhs) noexcept;

  // Populates a LogMessageDetails object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, LogMessageDetails& out);

  // Populates a LogMessageDetails object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::DictValue& value, LogMessageDetails& out);

  // Creates a deep copy of LogMessageDetails.
  LogMessageDetails Clone() const;

  // Creates a LogMessageDetails object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<LogMessageDetails> FromValue(const base::DictValue& value);

  // Creates a LogMessageDetails object from a base::Value, or nullopt on
  // failure.
  static std::optional<LogMessageDetails> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisLogMessageDetails object.
  base::DictValue ToValue() const;

  // Timestamp of the log message (milliseconds since epoch).
  double timestamp;

  // The log message text.
  std::string message;

};


//
// Functions
//

namespace UpdateTranscription {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  UpdateTranscriptionDetails details;


 private:
  Params();
};

namespace Results {

base::ListValue Create();
}  // namespace Results

}  // namespace UpdateTranscription

namespace SetStreamState {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  SetStreamStateDetails details;


 private:
  Params();
};

namespace Results {

base::ListValue Create();
}  // namespace Results

}  // namespace SetStreamState

namespace UpdateAudioLevel {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  double audio_level;


 private:
  Params();
};

namespace Results {

base::ListValue Create();
}  // namespace Results

}  // namespace UpdateAudioLevel

//
// Events
//

namespace OnStartStream {

extern const char kEventName[];  // "dictationPrivate.onStartStream"

base::ListValue Create(const StartStreamDetails& details);
}  // namespace OnStartStream

namespace OnEndStream {

extern const char kEventName[];  // "dictationPrivate.onEndStream"

base::ListValue Create(const EndStreamDetails& details);
}  // namespace OnEndStream

namespace OnContextUpdate {

extern const char kEventName[];  // "dictationPrivate.onContextUpdate"

base::ListValue Create(const ContextUpdateDetails& details);
}  // namespace OnContextUpdate

namespace OnBrowserLog {

extern const char kEventName[];  // "dictationPrivate.onBrowserLog"

base::ListValue Create(const std::vector<LogMessageDetails>& details);
}  // namespace OnBrowserLog

}  // namespace dictation_private
}  // namespace api
}  // namespace extensions

#endif  // CHROME_COMMON_EXTENSIONS_API_DICTATION_PRIVATE_H__
