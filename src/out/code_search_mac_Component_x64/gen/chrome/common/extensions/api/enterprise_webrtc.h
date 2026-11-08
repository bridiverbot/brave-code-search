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

#ifndef CHROME_COMMON_EXTENSIONS_API_ENTERPRISE_WEBRTC_H__
#define CHROME_COMMON_EXTENSIONS_API_ENTERPRISE_WEBRTC_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <optional>
#include <string>
#include <vector>

#include "base/values.h"

namespace extensions {
namespace api {
namespace enterprise_webrtc {

//
// Types
//

struct CaptureStatus {
  CaptureStatus();
  ~CaptureStatus();
  CaptureStatus(const CaptureStatus&) = delete;
  CaptureStatus& operator=(const CaptureStatus&) = delete;
  CaptureStatus(CaptureStatus&& rhs) noexcept;
  CaptureStatus& operator=(CaptureStatus&& rhs) noexcept;

  // Populates a CaptureStatus object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, CaptureStatus& out);

  // Populates a CaptureStatus object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::DictValue& value, CaptureStatus& out);

  // Creates a deep copy of CaptureStatus.
  CaptureStatus Clone() const;

  // Creates a CaptureStatus object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<CaptureStatus> FromValue(const base::DictValue& value);

  // Creates a CaptureStatus object from a base::Value, or nullopt on failure.
  static std::optional<CaptureStatus> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisCaptureStatus object.
  base::DictValue ToValue() const;

  bool active;

};

struct GetUserMediaRequest {
  GetUserMediaRequest();
  ~GetUserMediaRequest();
  GetUserMediaRequest(const GetUserMediaRequest&) = delete;
  GetUserMediaRequest& operator=(const GetUserMediaRequest&) = delete;
  GetUserMediaRequest(GetUserMediaRequest&& rhs) noexcept;
  GetUserMediaRequest& operator=(GetUserMediaRequest&& rhs) noexcept;

  // Populates a GetUserMediaRequest object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, GetUserMediaRequest& out);

  // Populates a GetUserMediaRequest object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::DictValue& value, GetUserMediaRequest& out);

  // Creates a deep copy of GetUserMediaRequest.
  GetUserMediaRequest Clone() const;

  // Creates a GetUserMediaRequest object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<GetUserMediaRequest> FromValue(const base::DictValue& value);

  // Creates a GetUserMediaRequest object from a base::Value, or nullopt on
  // failure.
  static std::optional<GetUserMediaRequest> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisGetUserMediaRequest object.
  base::DictValue ToValue() const;

  int rid;

  int pid;

  int request_id;

  std::string request_type;

  std::string origin;

  std::string url;

  double timestamp;

  std::optional<std::string> audio;

  std::optional<std::string> video;

  std::optional<std::string> stream_id;

  std::optional<std::string> audio_track_info;

  std::optional<std::string> video_track_info;

  std::optional<std::string> error;

  std::optional<std::string> error_message;

};

struct CaptureSnapshot {
  CaptureSnapshot();
  ~CaptureSnapshot();
  CaptureSnapshot(const CaptureSnapshot&) = delete;
  CaptureSnapshot& operator=(const CaptureSnapshot&) = delete;
  CaptureSnapshot(CaptureSnapshot&& rhs) noexcept;
  CaptureSnapshot& operator=(CaptureSnapshot&& rhs) noexcept;

  // Populates a CaptureSnapshot object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, CaptureSnapshot& out);

  // Populates a CaptureSnapshot object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::DictValue& value, CaptureSnapshot& out);

  // Creates a deep copy of CaptureSnapshot.
  CaptureSnapshot Clone() const;

  // Creates a CaptureSnapshot object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<CaptureSnapshot> FromValue(const base::DictValue& value);

  // Creates a CaptureSnapshot object from a base::Value, or nullopt on failure.
  static std::optional<CaptureSnapshot> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisCaptureSnapshot object.
  base::DictValue ToValue() const;

  // Dictionary of PeerConnectionData objects keyed by ID (free-form; compiles to
  // additionalProperties:any).
  struct PeerConnections {
    PeerConnections();
    ~PeerConnections();
    PeerConnections(const PeerConnections&) = delete;
    PeerConnections& operator=(const PeerConnections&) = delete;
    PeerConnections(PeerConnections&& rhs) noexcept;
    PeerConnections& operator=(PeerConnections&& rhs) noexcept;

    // Populates a PeerConnections object from a base::Value& instance. Returns
    // whether |out| was successfully populated.
    static bool Populate(const base::Value& value, PeerConnections& out);

    // Populates a PeerConnections object from a Dict& instance. Returns whether
    // |out| was successfully populated.
    static bool Populate(const base::DictValue& value, PeerConnections& out);

    // Creates a deep copy of PeerConnections.
    PeerConnections Clone() const;

    // Creates a PeerConnections object from a base::DictValue, or nullopt on
    // failure.
    static std::optional<PeerConnections> FromValue(const base::DictValue& value);

    // Creates a PeerConnections object from a base::Value, or nullopt on failure.
    static std::optional<PeerConnections> FromValue(const base::Value& value);

    // Returns a new base::DictValue representing the serialized form of
    // thisPeerConnections object.
    base::DictValue ToValue() const;

    base::DictValue additional_properties;
  };


  std::vector<GetUserMediaRequest> get_user_media;

  // Dictionary of PeerConnectionData objects keyed by ID (free-form; compiles to
  // additionalProperties:any).
  PeerConnections peer_connections;

  std::string user_agent;

  base::ListValue user_agent_data;

};

struct StatusResult {
  StatusResult();
  ~StatusResult();
  StatusResult(const StatusResult&) = delete;
  StatusResult& operator=(const StatusResult&) = delete;
  StatusResult(StatusResult&& rhs) noexcept;
  StatusResult& operator=(StatusResult&& rhs) noexcept;

  // Populates a StatusResult object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, StatusResult& out);

  // Populates a StatusResult object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::DictValue& value, StatusResult& out);

  // Creates a deep copy of StatusResult.
  StatusResult Clone() const;

  // Creates a StatusResult object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<StatusResult> FromValue(const base::DictValue& value);

  // Creates a StatusResult object from a base::Value, or nullopt on failure.
  static std::optional<StatusResult> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisStatusResult object.
  base::DictValue ToValue() const;

  // Whether this extension has an active capture session in this profile, not
  // whether some other client is capturing elsewhere in the browser.
  bool active;

};

struct CaptureFilter {
  CaptureFilter();
  ~CaptureFilter();
  CaptureFilter(const CaptureFilter&) = delete;
  CaptureFilter& operator=(const CaptureFilter&) = delete;
  CaptureFilter(CaptureFilter&& rhs) noexcept;
  CaptureFilter& operator=(CaptureFilter&& rhs) noexcept;

  // Populates a CaptureFilter object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, CaptureFilter& out);

  // Populates a CaptureFilter object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::DictValue& value, CaptureFilter& out);

  // Creates a deep copy of CaptureFilter.
  CaptureFilter Clone() const;

  // Creates a CaptureFilter object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<CaptureFilter> FromValue(const base::DictValue& value);

  // Creates a CaptureFilter object from a base::Value, or nullopt on failure.
  static std::optional<CaptureFilter> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisCaptureFilter object.
  base::DictValue ToValue() const;

  std::optional<std::vector<std::string>> origins;

};

struct PeerConnectionRecord {
  PeerConnectionRecord();
  ~PeerConnectionRecord();
  PeerConnectionRecord(const PeerConnectionRecord&) = delete;
  PeerConnectionRecord& operator=(const PeerConnectionRecord&) = delete;
  PeerConnectionRecord(PeerConnectionRecord&& rhs) noexcept;
  PeerConnectionRecord& operator=(PeerConnectionRecord&& rhs) noexcept;

  // Populates a PeerConnectionRecord object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, PeerConnectionRecord& out);

  // Populates a PeerConnectionRecord object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::DictValue& value, PeerConnectionRecord& out);

  // Creates a deep copy of PeerConnectionRecord.
  PeerConnectionRecord Clone() const;

  // Creates a PeerConnectionRecord object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<PeerConnectionRecord> FromValue(const base::DictValue& value);

  // Creates a PeerConnectionRecord object from a base::Value, or nullopt on
  // failure.
  static std::optional<PeerConnectionRecord> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisPeerConnectionRecord object.
  base::DictValue ToValue() const;

  // ID of the renderer process that created the connection.
  int rid;

  // ID of the connection, unique within its renderer.
  int lid;

  // OS process ID of that renderer.
  int pid;

  std::string rtc_configuration;

  std::string url;

  bool is_open;

  bool connected;

  double timestamp;

};

struct TruncationInfo {
  TruncationInfo();
  ~TruncationInfo();
  TruncationInfo(const TruncationInfo&) = delete;
  TruncationInfo& operator=(const TruncationInfo&) = delete;
  TruncationInfo(TruncationInfo&& rhs) noexcept;
  TruncationInfo& operator=(TruncationInfo&& rhs) noexcept;

  // Populates a TruncationInfo object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, TruncationInfo& out);

  // Populates a TruncationInfo object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::DictValue& value, TruncationInfo& out);

  // Creates a deep copy of TruncationInfo.
  TruncationInfo Clone() const;

  // Creates a TruncationInfo object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<TruncationInfo> FromValue(const base::DictValue& value);

  // Creates a TruncationInfo object from a base::Value, or nullopt on failure.
  static std::optional<TruncationInfo> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisTruncationInfo object.
  base::DictValue ToValue() const;

  int dropped_log_entries;

  int dropped_stats_entries;

  int dropped_media_entries;

};


//
// Functions
//

namespace StartCapture {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // Restricts the session to the given origins; omitted or empty matches every
  // origin in the profile.
  std::optional<CaptureFilter> filter;


 private:
  Params();
};

namespace Results {

base::ListValue Create();
}  // namespace Results

}  // namespace StartCapture

namespace StopCapture {

namespace Results {

base::ListValue Create();
}  // namespace Results

}  // namespace StopCapture

namespace GetSnapshot {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // Narrows the snapshot further; it cannot widen the scope set by
  // $(ref:startCapture).
  std::optional<CaptureFilter> filter;


 private:
  Params();
};

namespace Results {

base::ListValue Create(const CaptureSnapshot& snapshot);
}  // namespace Results

}  // namespace GetSnapshot

namespace GetCaptureStatus {

namespace Results {

base::ListValue Create(const StatusResult& result);
}  // namespace Results

}  // namespace GetCaptureStatus

//
// Events
//

namespace OnCaptureStopped {

extern const char kEventName[];  // "enterprise.webrtc.onCaptureStopped"

base::ListValue Create();
}  // namespace OnCaptureStopped

namespace OnPeerConnectionAdded {

extern const char kEventName[];  // "enterprise.webrtc.onPeerConnectionAdded"

// Identifies the peer connection for the rest of this session, and is the ID
// $(ref:onPeerConnectionRemoved) reports when it goes away.
// The connection's chrome://webrtc-internals record as it stood when it was
// added.
base::ListValue Create(const std::string& id, const PeerConnectionRecord& data);
}  // namespace OnPeerConnectionAdded

namespace OnPeerConnectionRemoved {

extern const char kEventName[];  // "enterprise.webrtc.onPeerConnectionRemoved"

// The ID $(ref:onPeerConnectionAdded) reported for this connection.
base::ListValue Create(const std::string& id);
}  // namespace OnPeerConnectionRemoved

namespace OnSnapshotTruncated {

extern const char kEventName[];  // "enterprise.webrtc.onSnapshotTruncated"

// Counts of entries dropped since WebRTC-internals began tracking this profile,
// not since this session started.
base::ListValue Create(const TruncationInfo& truncation_info);
}  // namespace OnSnapshotTruncated

}  // namespace enterprise_webrtc
}  // namespace api
}  // namespace extensions

#endif  // CHROME_COMMON_EXTENSIONS_API_ENTERPRISE_WEBRTC_H__
