// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   brave/components/email_aliases/email_aliases_api.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../brave/components/email_aliases/email_aliases_api.idl --root=../../ --destdir=gen --namespace=email_aliases --generator=cpp --include-rules=

#ifndef BRAVE_COMPONENTS_EMAIL_ALIASES_EMAIL_ALIASES_API_H__
#define BRAVE_COMPONENTS_EMAIL_ALIASES_EMAIL_ALIASES_API_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <optional>
#include <string>
#include <vector>

#include "base/values.h"

namespace email_aliases {

//
// Types
//

struct GenerateAliasRequest {
  GenerateAliasRequest();
  ~GenerateAliasRequest();
  GenerateAliasRequest(const GenerateAliasRequest&) = delete;
  GenerateAliasRequest& operator=(const GenerateAliasRequest&) = delete;
  GenerateAliasRequest(GenerateAliasRequest&& rhs) noexcept;
  GenerateAliasRequest& operator=(GenerateAliasRequest&& rhs) noexcept;

  // Populates a GenerateAliasRequest object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, GenerateAliasRequest& out);

  // Populates a GenerateAliasRequest object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::DictValue& value, GenerateAliasRequest& out);

  // Creates a deep copy of GenerateAliasRequest.
  GenerateAliasRequest Clone() const;

  // Creates a GenerateAliasRequest object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<GenerateAliasRequest> FromValue(const base::DictValue& value);

  // Creates a GenerateAliasRequest object from a base::Value, or nullopt on
  // failure.
  static std::optional<GenerateAliasRequest> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisGenerateAliasRequest object.
  base::DictValue ToValue() const;

};

struct GenerateAliasResponse {
  GenerateAliasResponse();
  ~GenerateAliasResponse();
  GenerateAliasResponse(const GenerateAliasResponse&) = delete;
  GenerateAliasResponse& operator=(const GenerateAliasResponse&) = delete;
  GenerateAliasResponse(GenerateAliasResponse&& rhs) noexcept;
  GenerateAliasResponse& operator=(GenerateAliasResponse&& rhs) noexcept;

  // Populates a GenerateAliasResponse object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, GenerateAliasResponse& out);

  // Populates a GenerateAliasResponse object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::DictValue& value, GenerateAliasResponse& out);

  // Creates a deep copy of GenerateAliasResponse.
  GenerateAliasResponse Clone() const;

  // Creates a GenerateAliasResponse object from a base::DictValue, or nullopt
  // on failure.
  static std::optional<GenerateAliasResponse> FromValue(const base::DictValue& value);

  // Creates a GenerateAliasResponse object from a base::Value, or nullopt on
  // failure.
  static std::optional<GenerateAliasResponse> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisGenerateAliasResponse object.
  base::DictValue ToValue() const;

  // e.g., "created"
  std::string message;

  // Newly created alias email address
  std::string alias;

};

struct UpdateAliasRequest {
  UpdateAliasRequest();
  ~UpdateAliasRequest();
  UpdateAliasRequest(const UpdateAliasRequest&) = delete;
  UpdateAliasRequest& operator=(const UpdateAliasRequest&) = delete;
  UpdateAliasRequest(UpdateAliasRequest&& rhs) noexcept;
  UpdateAliasRequest& operator=(UpdateAliasRequest&& rhs) noexcept;

  // Populates a UpdateAliasRequest object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, UpdateAliasRequest& out);

  // Populates a UpdateAliasRequest object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::DictValue& value, UpdateAliasRequest& out);

  // Creates a deep copy of UpdateAliasRequest.
  UpdateAliasRequest Clone() const;

  // Creates a UpdateAliasRequest object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<UpdateAliasRequest> FromValue(const base::DictValue& value);

  // Creates a UpdateAliasRequest object from a base::Value, or nullopt on
  // failure.
  static std::optional<UpdateAliasRequest> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisUpdateAliasRequest object.
  base::DictValue ToValue() const;

  // Alias email address to create/update
  std::string alias;

  // e.g., "active"
  std::string status;

};

struct DeleteAliasRequest {
  DeleteAliasRequest();
  ~DeleteAliasRequest();
  DeleteAliasRequest(const DeleteAliasRequest&) = delete;
  DeleteAliasRequest& operator=(const DeleteAliasRequest&) = delete;
  DeleteAliasRequest(DeleteAliasRequest&& rhs) noexcept;
  DeleteAliasRequest& operator=(DeleteAliasRequest&& rhs) noexcept;

  // Populates a DeleteAliasRequest object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, DeleteAliasRequest& out);

  // Populates a DeleteAliasRequest object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::DictValue& value, DeleteAliasRequest& out);

  // Creates a deep copy of DeleteAliasRequest.
  DeleteAliasRequest Clone() const;

  // Creates a DeleteAliasRequest object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<DeleteAliasRequest> FromValue(const base::DictValue& value);

  // Creates a DeleteAliasRequest object from a base::Value, or nullopt on
  // failure.
  static std::optional<DeleteAliasRequest> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisDeleteAliasRequest object.
  base::DictValue ToValue() const;

  // Alias email address to delete
  std::string alias;

};

struct AliasEditedResponse {
  AliasEditedResponse();
  ~AliasEditedResponse();
  AliasEditedResponse(const AliasEditedResponse&) = delete;
  AliasEditedResponse& operator=(const AliasEditedResponse&) = delete;
  AliasEditedResponse(AliasEditedResponse&& rhs) noexcept;
  AliasEditedResponse& operator=(AliasEditedResponse&& rhs) noexcept;

  // Populates a AliasEditedResponse object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, AliasEditedResponse& out);

  // Populates a AliasEditedResponse object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::DictValue& value, AliasEditedResponse& out);

  // Creates a deep copy of AliasEditedResponse.
  AliasEditedResponse Clone() const;

  // Creates a AliasEditedResponse object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<AliasEditedResponse> FromValue(const base::DictValue& value);

  // Creates a AliasEditedResponse object from a base::Value, or nullopt on
  // failure.
  static std::optional<AliasEditedResponse> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisAliasEditedResponse object.
  base::DictValue ToValue() const;

  // e.g., "updated", "deleted"
  std::string message;

};

struct AliasListEntry {
  AliasListEntry();
  ~AliasListEntry();
  AliasListEntry(const AliasListEntry&) = delete;
  AliasListEntry& operator=(const AliasListEntry&) = delete;
  AliasListEntry(AliasListEntry&& rhs) noexcept;
  AliasListEntry& operator=(AliasListEntry&& rhs) noexcept;

  // Populates a AliasListEntry object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, AliasListEntry& out);

  // Populates a AliasListEntry object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::DictValue& value, AliasListEntry& out);

  // Creates a deep copy of AliasListEntry.
  AliasListEntry Clone() const;

  // Creates a AliasListEntry object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<AliasListEntry> FromValue(const base::DictValue& value);

  // Creates a AliasListEntry object from a base::Value, or nullopt on failure.
  static std::optional<AliasListEntry> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisAliasListEntry object.
  base::DictValue ToValue() const;

  // Primary account email (destination for forwarded mail)
  std::string email;

  // Alias email address
  std::string alias;

  // Date when alias was created
  std::string created_at;

  // Date when alias was last used
  std::string last_used;

  // Status of alias
  std::string status;

};

struct AliasListRequest {
  AliasListRequest();
  ~AliasListRequest();
  AliasListRequest(const AliasListRequest&) = delete;
  AliasListRequest& operator=(const AliasListRequest&) = delete;
  AliasListRequest(AliasListRequest&& rhs) noexcept;
  AliasListRequest& operator=(AliasListRequest&& rhs) noexcept;

  // Populates a AliasListRequest object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, AliasListRequest& out);

  // Populates a AliasListRequest object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::DictValue& value, AliasListRequest& out);

  // Creates a deep copy of AliasListRequest.
  AliasListRequest Clone() const;

  // Creates a AliasListRequest object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<AliasListRequest> FromValue(const base::DictValue& value);

  // Creates a AliasListRequest object from a base::Value, or nullopt on
  // failure.
  static std::optional<AliasListRequest> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisAliasListRequest object.
  base::DictValue ToValue() const;

};

struct AliasesAccountInfo {
  AliasesAccountInfo();
  ~AliasesAccountInfo();
  AliasesAccountInfo(const AliasesAccountInfo&) = delete;
  AliasesAccountInfo& operator=(const AliasesAccountInfo&) = delete;
  AliasesAccountInfo(AliasesAccountInfo&& rhs) noexcept;
  AliasesAccountInfo& operator=(AliasesAccountInfo&& rhs) noexcept;

  // Populates a AliasesAccountInfo object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, AliasesAccountInfo& out);

  // Populates a AliasesAccountInfo object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::DictValue& value, AliasesAccountInfo& out);

  // Creates a deep copy of AliasesAccountInfo.
  AliasesAccountInfo Clone() const;

  // Creates a AliasesAccountInfo object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<AliasesAccountInfo> FromValue(const base::DictValue& value);

  // Creates a AliasesAccountInfo object from a base::Value, or nullopt on
  // failure.
  static std::optional<AliasesAccountInfo> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisAliasesAccountInfo object.
  base::DictValue ToValue() const;

  int max_aliases_count;

};

struct AliasListResponse {
  AliasListResponse();
  ~AliasListResponse();
  AliasListResponse(const AliasListResponse&) = delete;
  AliasListResponse& operator=(const AliasListResponse&) = delete;
  AliasListResponse(AliasListResponse&& rhs) noexcept;
  AliasListResponse& operator=(AliasListResponse&& rhs) noexcept;

  // Populates a AliasListResponse object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, AliasListResponse& out);

  // Populates a AliasListResponse object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::DictValue& value, AliasListResponse& out);

  // Creates a deep copy of AliasListResponse.
  AliasListResponse Clone() const;

  // Creates a AliasListResponse object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<AliasListResponse> FromValue(const base::DictValue& value);

  // Creates a AliasListResponse object from a base::Value, or nullopt on
  // failure.
  static std::optional<AliasListResponse> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisAliasListResponse object.
  base::DictValue ToValue() const;

  AliasesAccountInfo info;

  // Array of AliasListEntry objects.
  std::vector<AliasListEntry> result;

};

struct ErrorMessage {
  ErrorMessage();
  ~ErrorMessage();
  ErrorMessage(const ErrorMessage&) = delete;
  ErrorMessage& operator=(const ErrorMessage&) = delete;
  ErrorMessage(ErrorMessage&& rhs) noexcept;
  ErrorMessage& operator=(ErrorMessage&& rhs) noexcept;

  // Populates a ErrorMessage object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ErrorMessage& out);

  // Populates a ErrorMessage object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::DictValue& value, ErrorMessage& out);

  // Creates a deep copy of ErrorMessage.
  ErrorMessage Clone() const;

  // Creates a ErrorMessage object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<ErrorMessage> FromValue(const base::DictValue& value);

  // Creates a ErrorMessage object from a base::Value, or nullopt on failure.
  static std::optional<ErrorMessage> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisErrorMessage object.
  base::DictValue ToValue() const;

  std::string message;

};


}  // namespace email_aliases

#endif  // BRAVE_COMPONENTS_EMAIL_ALIASES_EMAIL_ALIASES_API_H__
