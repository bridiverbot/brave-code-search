// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/enterprise_webrtc.webidl
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../chrome/common/extensions/api/enterprise_webrtc.webidl --root=../../ --destdir=gen --namespace=extensions::api::%(namespace)s --generator=cpp --include-rules=extensions/common/api:extensions::api::%(namespace)s

#include "chrome/common/extensions/api/enterprise_webrtc.h"

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

using base::UTF8ToUTF16;

namespace extensions {
namespace api {
namespace enterprise_webrtc {
//
// Types
//

CaptureStatus::CaptureStatus()
: active(false) {}

CaptureStatus::~CaptureStatus() = default;
CaptureStatus::CaptureStatus(CaptureStatus&& rhs) noexcept = default;
CaptureStatus& CaptureStatus::operator=(CaptureStatus&& rhs) noexcept = default;
CaptureStatus CaptureStatus::Clone() const {
  CaptureStatus out;
  out.active = active;
  return out;
}

// static
bool CaptureStatus::Populate(
    const base::DictValue& dict, CaptureStatus& out) {
  const base::Value* active_value = dict.Find("active");
  if (!active_value) {
    return false;
  }
  {
    auto temp = (*active_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.active = *temp;
  }

  return true;
}

// static
bool CaptureStatus::Populate(
    const base::Value& value, CaptureStatus& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<CaptureStatus> CaptureStatus::FromValue(const base::DictValue& value) {
  CaptureStatus out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<CaptureStatus> CaptureStatus::FromValue(const base::Value& value) {
  CaptureStatus out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue CaptureStatus::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("active", this->active);


  return to_value_result;
}


GetUserMediaRequest::GetUserMediaRequest()
: rid(0),
pid(0),
request_id(0),
timestamp(0.0) {}

GetUserMediaRequest::~GetUserMediaRequest() = default;
GetUserMediaRequest::GetUserMediaRequest(GetUserMediaRequest&& rhs) noexcept = default;
GetUserMediaRequest& GetUserMediaRequest::operator=(GetUserMediaRequest&& rhs) noexcept = default;
GetUserMediaRequest GetUserMediaRequest::Clone() const {
  GetUserMediaRequest out;
  out.rid = rid;
  out.pid = pid;
  out.request_id = request_id;
  out.request_type = request_type;
  out.origin = origin;
  out.url = url;
  out.timestamp = timestamp;
  out.audio = audio;
  out.video = video;
  out.stream_id = stream_id;
  out.audio_track_info = audio_track_info;
  out.video_track_info = video_track_info;
  out.error = error;
  out.error_message = error_message;
  return out;
}

// static
bool GetUserMediaRequest::Populate(
    const base::DictValue& dict, GetUserMediaRequest& out) {
  const base::Value* rid_value = dict.Find("rid");
  if (!rid_value) {
    return false;
  }
  {
    auto temp = (*rid_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.rid = *temp;
  }

  const base::Value* pid_value = dict.Find("pid");
  if (!pid_value) {
    return false;
  }
  {
    auto temp = (*pid_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.pid = *temp;
  }

  const base::Value* request_id_value = dict.Find("requestId");
  if (!request_id_value) {
    return false;
  }
  {
    auto temp = (*request_id_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.request_id = *temp;
  }

  const base::Value* request_type_value = dict.Find("requestType");
  if (!request_type_value) {
    return false;
  }
  {
    auto* temp = (*request_type_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.request_type = *temp;
  }

  const base::Value* origin_value = dict.Find("origin");
  if (!origin_value) {
    return false;
  }
  {
    auto* temp = (*origin_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.origin = *temp;
  }

  const base::Value* url_value = dict.Find("url");
  if (!url_value) {
    return false;
  }
  {
    auto* temp = (*url_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.url = *temp;
  }

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

  const base::Value* audio_value = dict.Find("audio");
  if (audio_value) {
    {
      auto* temp = (*audio_value).GetIfString();
      if (!temp) {
        out.audio = std::nullopt;
        return false;
      }
      out.audio = *temp;
    }
  }

  const base::Value* video_value = dict.Find("video");
  if (video_value) {
    {
      auto* temp = (*video_value).GetIfString();
      if (!temp) {
        out.video = std::nullopt;
        return false;
      }
      out.video = *temp;
    }
  }

  const base::Value* stream_id_value = dict.Find("streamId");
  if (stream_id_value) {
    {
      auto* temp = (*stream_id_value).GetIfString();
      if (!temp) {
        out.stream_id = std::nullopt;
        return false;
      }
      out.stream_id = *temp;
    }
  }

  const base::Value* audio_track_info_value = dict.Find("audioTrackInfo");
  if (audio_track_info_value) {
    {
      auto* temp = (*audio_track_info_value).GetIfString();
      if (!temp) {
        out.audio_track_info = std::nullopt;
        return false;
      }
      out.audio_track_info = *temp;
    }
  }

  const base::Value* video_track_info_value = dict.Find("videoTrackInfo");
  if (video_track_info_value) {
    {
      auto* temp = (*video_track_info_value).GetIfString();
      if (!temp) {
        out.video_track_info = std::nullopt;
        return false;
      }
      out.video_track_info = *temp;
    }
  }

  const base::Value* error_value = dict.Find("error");
  if (error_value) {
    {
      auto* temp = (*error_value).GetIfString();
      if (!temp) {
        out.error = std::nullopt;
        return false;
      }
      out.error = *temp;
    }
  }

  const base::Value* error_message_value = dict.Find("errorMessage");
  if (error_message_value) {
    {
      auto* temp = (*error_message_value).GetIfString();
      if (!temp) {
        out.error_message = std::nullopt;
        return false;
      }
      out.error_message = *temp;
    }
  }

  return true;
}

// static
bool GetUserMediaRequest::Populate(
    const base::Value& value, GetUserMediaRequest& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<GetUserMediaRequest> GetUserMediaRequest::FromValue(const base::DictValue& value) {
  GetUserMediaRequest out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<GetUserMediaRequest> GetUserMediaRequest::FromValue(const base::Value& value) {
  GetUserMediaRequest out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue GetUserMediaRequest::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("rid", this->rid);

  to_value_result.Set("pid", this->pid);

  to_value_result.Set("requestId", this->request_id);

  to_value_result.Set("requestType", this->request_type);

  to_value_result.Set("origin", this->origin);

  to_value_result.Set("url", this->url);

  to_value_result.Set("timestamp", this->timestamp);

  if (this->audio) {
    to_value_result.Set("audio", *this->audio);

  }
  if (this->video) {
    to_value_result.Set("video", *this->video);

  }
  if (this->stream_id) {
    to_value_result.Set("streamId", *this->stream_id);

  }
  if (this->audio_track_info) {
    to_value_result.Set("audioTrackInfo", *this->audio_track_info);

  }
  if (this->video_track_info) {
    to_value_result.Set("videoTrackInfo", *this->video_track_info);

  }
  if (this->error) {
    to_value_result.Set("error", *this->error);

  }
  if (this->error_message) {
    to_value_result.Set("errorMessage", *this->error_message);

  }

  return to_value_result;
}


CaptureSnapshot::PeerConnections::PeerConnections()
 {}

CaptureSnapshot::PeerConnections::~PeerConnections() = default;
CaptureSnapshot::PeerConnections::PeerConnections(PeerConnections&& rhs) noexcept = default;
CaptureSnapshot::PeerConnections& CaptureSnapshot::PeerConnections::operator=(PeerConnections&& rhs) noexcept = default;
CaptureSnapshot::PeerConnections CaptureSnapshot::PeerConnections::Clone() const {
  PeerConnections out;
  out.additional_properties = additional_properties.Clone();
  return out;
}

// static
bool CaptureSnapshot::PeerConnections::Populate(
    const base::DictValue& dict, PeerConnections& out) {
  out.additional_properties.Merge(dict.Clone());
  return true;
}

// static
bool CaptureSnapshot::PeerConnections::Populate(
    const base::Value& value, PeerConnections& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<CaptureSnapshot::PeerConnections> CaptureSnapshot::PeerConnections::FromValue(const base::DictValue& value) {
  PeerConnections out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<CaptureSnapshot::PeerConnections> CaptureSnapshot::PeerConnections::FromValue(const base::Value& value) {
  PeerConnections out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue CaptureSnapshot::PeerConnections::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Merge(additional_properties.Clone());

  return to_value_result;
}



CaptureSnapshot::CaptureSnapshot()
 {}

CaptureSnapshot::~CaptureSnapshot() = default;
CaptureSnapshot::CaptureSnapshot(CaptureSnapshot&& rhs) noexcept = default;
CaptureSnapshot& CaptureSnapshot::operator=(CaptureSnapshot&& rhs) noexcept = default;
CaptureSnapshot CaptureSnapshot::Clone() const {
  CaptureSnapshot out;
  out.get_user_media.reserve(get_user_media.size());
  for (const auto& element : get_user_media) {
    json_schema_compiler::util::AppendToContainer(out.get_user_media, element.Clone());
  }
  out.peer_connections = peer_connections.Clone();
  out.user_agent = user_agent;
  out.user_agent_data.reserve(user_agent_data.size());
  for (const auto& element : user_agent_data) {
    json_schema_compiler::util::AppendToContainer(out.user_agent_data, element.Clone());
  }
  return out;
}

// static
bool CaptureSnapshot::Populate(
    const base::DictValue& dict, CaptureSnapshot& out) {
  const base::Value* get_user_media_value = dict.Find("getUserMedia");
  if (!get_user_media_value) {
    return false;
  }
  {
    if (!(*get_user_media_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*get_user_media_value).GetList(), out.get_user_media)) {
        return false;
      }
    }
  }

  const base::Value* peer_connections_value = dict.Find("peerConnections");
  if (!peer_connections_value) {
    return false;
  }
  {
    if (!(*peer_connections_value).is_dict()) {
      return false;
    }
    if (!PeerConnections::Populate((*peer_connections_value).GetDict(), out.peer_connections)) {
      return false;
    }
  }

  const base::Value* user_agent_value = dict.Find("userAgent");
  if (!user_agent_value) {
    return false;
  }
  {
    auto* temp = (*user_agent_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.user_agent = *temp;
  }

  const base::Value* user_agent_data_value = dict.Find("userAgentData");
  if (!user_agent_data_value) {
    return false;
  }
  {
    if (!(*user_agent_data_value).is_list()) {
      return false;
    }
    else {
      out.user_agent_data = (*user_agent_data_value).GetList().Clone();
    }
  }

  return true;
}

// static
bool CaptureSnapshot::Populate(
    const base::Value& value, CaptureSnapshot& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<CaptureSnapshot> CaptureSnapshot::FromValue(const base::DictValue& value) {
  CaptureSnapshot out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<CaptureSnapshot> CaptureSnapshot::FromValue(const base::Value& value) {
  CaptureSnapshot out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue CaptureSnapshot::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("getUserMedia", json_schema_compiler::util::CreateValueFromArray(this->get_user_media));

  to_value_result.Set("peerConnections", (this->peer_connections).ToValue());

  to_value_result.Set("userAgent", this->user_agent);

  to_value_result.Set("userAgentData", (this->user_agent_data).Clone());


  return to_value_result;
}


StatusResult::StatusResult()
: active(false) {}

StatusResult::~StatusResult() = default;
StatusResult::StatusResult(StatusResult&& rhs) noexcept = default;
StatusResult& StatusResult::operator=(StatusResult&& rhs) noexcept = default;
StatusResult StatusResult::Clone() const {
  StatusResult out;
  out.active = active;
  return out;
}

// static
bool StatusResult::Populate(
    const base::DictValue& dict, StatusResult& out) {
  const base::Value* active_value = dict.Find("active");
  if (!active_value) {
    return false;
  }
  {
    auto temp = (*active_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.active = *temp;
  }

  return true;
}

// static
bool StatusResult::Populate(
    const base::Value& value, StatusResult& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<StatusResult> StatusResult::FromValue(const base::DictValue& value) {
  StatusResult out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<StatusResult> StatusResult::FromValue(const base::Value& value) {
  StatusResult out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue StatusResult::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("active", this->active);


  return to_value_result;
}


CaptureFilter::CaptureFilter()
 {}

CaptureFilter::~CaptureFilter() = default;
CaptureFilter::CaptureFilter(CaptureFilter&& rhs) noexcept = default;
CaptureFilter& CaptureFilter::operator=(CaptureFilter&& rhs) noexcept = default;
CaptureFilter CaptureFilter::Clone() const {
  CaptureFilter out;
  out.origins = origins;
  return out;
}

// static
bool CaptureFilter::Populate(
    const base::DictValue& dict, CaptureFilter& out) {
  const base::Value* origins_value = dict.Find("origins");
  if (origins_value) {
    {
      if (!(*origins_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*origins_value).GetList(), out.origins)) {
          return false;
        }
      }
    }
  }

  return true;
}

// static
bool CaptureFilter::Populate(
    const base::Value& value, CaptureFilter& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<CaptureFilter> CaptureFilter::FromValue(const base::DictValue& value) {
  CaptureFilter out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<CaptureFilter> CaptureFilter::FromValue(const base::Value& value) {
  CaptureFilter out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue CaptureFilter::ToValue() const {
  base::DictValue to_value_result;

  if (this->origins) {
    to_value_result.Set("origins", json_schema_compiler::util::CreateValueFromArray(*this->origins));

  }

  return to_value_result;
}


PeerConnectionRecord::PeerConnectionRecord()
: rid(0),
lid(0),
pid(0),
is_open(false),
connected(false),
timestamp(0.0) {}

PeerConnectionRecord::~PeerConnectionRecord() = default;
PeerConnectionRecord::PeerConnectionRecord(PeerConnectionRecord&& rhs) noexcept = default;
PeerConnectionRecord& PeerConnectionRecord::operator=(PeerConnectionRecord&& rhs) noexcept = default;
PeerConnectionRecord PeerConnectionRecord::Clone() const {
  PeerConnectionRecord out;
  out.rid = rid;
  out.lid = lid;
  out.pid = pid;
  out.rtc_configuration = rtc_configuration;
  out.url = url;
  out.is_open = is_open;
  out.connected = connected;
  out.timestamp = timestamp;
  return out;
}

// static
bool PeerConnectionRecord::Populate(
    const base::DictValue& dict, PeerConnectionRecord& out) {
  const base::Value* rid_value = dict.Find("rid");
  if (!rid_value) {
    return false;
  }
  {
    auto temp = (*rid_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.rid = *temp;
  }

  const base::Value* lid_value = dict.Find("lid");
  if (!lid_value) {
    return false;
  }
  {
    auto temp = (*lid_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.lid = *temp;
  }

  const base::Value* pid_value = dict.Find("pid");
  if (!pid_value) {
    return false;
  }
  {
    auto temp = (*pid_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.pid = *temp;
  }

  const base::Value* rtc_configuration_value = dict.Find("rtcConfiguration");
  if (!rtc_configuration_value) {
    return false;
  }
  {
    auto* temp = (*rtc_configuration_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.rtc_configuration = *temp;
  }

  const base::Value* url_value = dict.Find("url");
  if (!url_value) {
    return false;
  }
  {
    auto* temp = (*url_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.url = *temp;
  }

  const base::Value* is_open_value = dict.Find("isOpen");
  if (!is_open_value) {
    return false;
  }
  {
    auto temp = (*is_open_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.is_open = *temp;
  }

  const base::Value* connected_value = dict.Find("connected");
  if (!connected_value) {
    return false;
  }
  {
    auto temp = (*connected_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.connected = *temp;
  }

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

  return true;
}

// static
bool PeerConnectionRecord::Populate(
    const base::Value& value, PeerConnectionRecord& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<PeerConnectionRecord> PeerConnectionRecord::FromValue(const base::DictValue& value) {
  PeerConnectionRecord out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<PeerConnectionRecord> PeerConnectionRecord::FromValue(const base::Value& value) {
  PeerConnectionRecord out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue PeerConnectionRecord::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("rid", this->rid);

  to_value_result.Set("lid", this->lid);

  to_value_result.Set("pid", this->pid);

  to_value_result.Set("rtcConfiguration", this->rtc_configuration);

  to_value_result.Set("url", this->url);

  to_value_result.Set("isOpen", this->is_open);

  to_value_result.Set("connected", this->connected);

  to_value_result.Set("timestamp", this->timestamp);


  return to_value_result;
}


TruncationInfo::TruncationInfo()
: dropped_log_entries(0),
dropped_stats_entries(0),
dropped_media_entries(0) {}

TruncationInfo::~TruncationInfo() = default;
TruncationInfo::TruncationInfo(TruncationInfo&& rhs) noexcept = default;
TruncationInfo& TruncationInfo::operator=(TruncationInfo&& rhs) noexcept = default;
TruncationInfo TruncationInfo::Clone() const {
  TruncationInfo out;
  out.dropped_log_entries = dropped_log_entries;
  out.dropped_stats_entries = dropped_stats_entries;
  out.dropped_media_entries = dropped_media_entries;
  return out;
}

// static
bool TruncationInfo::Populate(
    const base::DictValue& dict, TruncationInfo& out) {
  const base::Value* dropped_log_entries_value = dict.Find("droppedLogEntries");
  if (!dropped_log_entries_value) {
    return false;
  }
  {
    auto temp = (*dropped_log_entries_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.dropped_log_entries = *temp;
  }

  const base::Value* dropped_stats_entries_value = dict.Find("droppedStatsEntries");
  if (!dropped_stats_entries_value) {
    return false;
  }
  {
    auto temp = (*dropped_stats_entries_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.dropped_stats_entries = *temp;
  }

  const base::Value* dropped_media_entries_value = dict.Find("droppedMediaEntries");
  if (!dropped_media_entries_value) {
    return false;
  }
  {
    auto temp = (*dropped_media_entries_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.dropped_media_entries = *temp;
  }

  return true;
}

// static
bool TruncationInfo::Populate(
    const base::Value& value, TruncationInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<TruncationInfo> TruncationInfo::FromValue(const base::DictValue& value) {
  TruncationInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<TruncationInfo> TruncationInfo::FromValue(const base::Value& value) {
  TruncationInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue TruncationInfo::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("droppedLogEntries", this->dropped_log_entries);

  to_value_result.Set("droppedStatsEntries", this->dropped_stats_entries);

  to_value_result.Set("droppedMediaEntries", this->dropped_media_entries);


  return to_value_result;
}



//
// Functions
//

namespace StartCapture {

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

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& filter_value = args[0];
    {
      if (!filter_value.is_dict()) {
        return std::nullopt;
      }
      else {
        CaptureFilter temp;
        if (!CaptureFilter::Populate(filter_value.GetDict(), temp))
          return std::nullopt;
        params.filter = std::move(temp);
      }
    }
  }

  return params;
}


base::ListValue Results::Create() {
  base::ListValue create_results;

  return create_results;
}
}  // namespace StartCapture

namespace StopCapture {

base::ListValue Results::Create() {
  base::ListValue create_results;

  return create_results;
}
}  // namespace StopCapture

namespace GetSnapshot {

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

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& filter_value = args[0];
    {
      if (!filter_value.is_dict()) {
        return std::nullopt;
      }
      else {
        CaptureFilter temp;
        if (!CaptureFilter::Populate(filter_value.GetDict(), temp))
          return std::nullopt;
        params.filter = std::move(temp);
      }
    }
  }

  return params;
}


base::ListValue Results::Create(const CaptureSnapshot& snapshot) {
  base::ListValue create_results;
  create_results.reserve(1);
  create_results.Append((snapshot).ToValue());

  return create_results;
}
}  // namespace GetSnapshot

namespace GetCaptureStatus {

base::ListValue Results::Create(const StatusResult& result) {
  base::ListValue create_results;
  create_results.reserve(1);
  create_results.Append((result).ToValue());

  return create_results;
}
}  // namespace GetCaptureStatus

//
// Events
//

namespace OnCaptureStopped {

const char kEventName[] = "enterprise.webrtc.onCaptureStopped";

base::ListValue Create() {
  base::ListValue create_results;

  return create_results;
}

}  // namespace OnCaptureStopped

namespace OnPeerConnectionAdded {

const char kEventName[] = "enterprise.webrtc.onPeerConnectionAdded";

base::ListValue Create(const std::string& id, const PeerConnectionRecord& data) {
  base::ListValue create_results;
  create_results.reserve(2);
  create_results.Append(id);

  create_results.Append((data).ToValue());

  return create_results;
}

}  // namespace OnPeerConnectionAdded

namespace OnPeerConnectionRemoved {

const char kEventName[] = "enterprise.webrtc.onPeerConnectionRemoved";

base::ListValue Create(const std::string& id) {
  base::ListValue create_results;
  create_results.reserve(1);
  create_results.Append(id);

  return create_results;
}

}  // namespace OnPeerConnectionRemoved

namespace OnSnapshotTruncated {

const char kEventName[] = "enterprise.webrtc.onSnapshotTruncated";

base::ListValue Create(const TruncationInfo& truncation_info) {
  base::ListValue create_results;
  create_results.reserve(1);
  create_results.Append((truncation_info).ToValue());

  return create_results;
}

}  // namespace OnSnapshotTruncated

}  // namespace enterprise_webrtc
}  // namespace api
}  // namespace extensions

