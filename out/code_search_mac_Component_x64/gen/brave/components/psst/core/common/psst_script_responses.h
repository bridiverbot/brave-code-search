// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   brave/components/psst/core/common/psst_script_responses.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../brave/components/psst/core/common/psst_script_responses.idl --root=../../ --destdir=gen --namespace=psst --generator=cpp --include-rules=

#ifndef BRAVE_COMPONENTS_PSST_CORE_COMMON_PSST_SCRIPT_RESPONSES_H__
#define BRAVE_COMPONENTS_PSST_CORE_COMMON_PSST_SCRIPT_RESPONSES_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <optional>
#include <string>
#include <vector>

#include "base/values.h"

namespace psst {

//
// Types
//

struct UserScriptTask {
  UserScriptTask();
  ~UserScriptTask();
  UserScriptTask(const UserScriptTask&) = delete;
  UserScriptTask& operator=(const UserScriptTask&) = delete;
  UserScriptTask(UserScriptTask&& rhs) noexcept;
  UserScriptTask& operator=(UserScriptTask&& rhs) noexcept;

  // Populates a UserScriptTask object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, UserScriptTask& out);

  // Populates a UserScriptTask object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::DictValue& value, UserScriptTask& out);

  // Creates a deep copy of UserScriptTask.
  UserScriptTask Clone() const;

  // Creates a UserScriptTask object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<UserScriptTask> FromValue(const base::DictValue& value);

  // Creates a UserScriptTask object from a base::Value, or nullopt on failure.
  static std::optional<UserScriptTask> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisUserScriptTask object.
  base::DictValue ToValue() const;

  std::string uid;

  std::string url;

  std::string description;

};

struct UserScriptResult {
  UserScriptResult();
  ~UserScriptResult();
  UserScriptResult(const UserScriptResult&) = delete;
  UserScriptResult& operator=(const UserScriptResult&) = delete;
  UserScriptResult(UserScriptResult&& rhs) noexcept;
  UserScriptResult& operator=(UserScriptResult&& rhs) noexcept;

  // Populates a UserScriptResult object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, UserScriptResult& out);

  // Populates a UserScriptResult object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::DictValue& value, UserScriptResult& out);

  // Creates a deep copy of UserScriptResult.
  UserScriptResult Clone() const;

  // Creates a UserScriptResult object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<UserScriptResult> FromValue(const base::DictValue& value);

  // Creates a UserScriptResult object from a base::Value, or nullopt on
  // failure.
  static std::optional<UserScriptResult> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisUserScriptResult object.
  base::DictValue ToValue() const;

  std::string user_id;

  std::string site_name;

  std::vector<UserScriptTask> tasks;

  std::optional<bool> initial_execution;

};

struct PolicyTask {
  PolicyTask();
  ~PolicyTask();
  PolicyTask(const PolicyTask&) = delete;
  PolicyTask& operator=(const PolicyTask&) = delete;
  PolicyTask(PolicyTask&& rhs) noexcept;
  PolicyTask& operator=(PolicyTask&& rhs) noexcept;

  // Populates a PolicyTask object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, PolicyTask& out);

  // Populates a PolicyTask object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::DictValue& value, PolicyTask& out);

  // Creates a deep copy of PolicyTask.
  PolicyTask Clone() const;

  // Creates a PolicyTask object from a base::DictValue, or nullopt on failure.
  static std::optional<PolicyTask> FromValue(const base::DictValue& value);

  // Creates a PolicyTask object from a base::Value, or nullopt on failure.
  static std::optional<PolicyTask> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisPolicyTask object.
  base::DictValue ToValue() const;

  std::string uid;

  std::string url;

  std::string description;

  std::optional<std::string> error_description;

};

struct PsstData {
  PsstData();
  ~PsstData();
  PsstData(const PsstData&) = delete;
  PsstData& operator=(const PsstData&) = delete;
  PsstData(PsstData&& rhs) noexcept;
  PsstData& operator=(PsstData&& rhs) noexcept;

  // Populates a PsstData object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, PsstData& out);

  // Populates a PsstData object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::DictValue& value, PsstData& out);

  // Creates a deep copy of PsstData.
  PsstData Clone() const;

  // Creates a PsstData object from a base::DictValue, or nullopt on failure.
  static std::optional<PsstData> FromValue(const base::DictValue& value);

  // Creates a PsstData object from a base::Value, or nullopt on failure.
  static std::optional<PsstData> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisPsstData object.
  base::DictValue ToValue() const;

  int progress;

  std::vector<PolicyTask> applied_tasks;

};

struct PolicyScriptResult {
  PolicyScriptResult();
  ~PolicyScriptResult();
  PolicyScriptResult(const PolicyScriptResult&) = delete;
  PolicyScriptResult& operator=(const PolicyScriptResult&) = delete;
  PolicyScriptResult(PolicyScriptResult&& rhs) noexcept;
  PolicyScriptResult& operator=(PolicyScriptResult&& rhs) noexcept;

  // Populates a PolicyScriptResult object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, PolicyScriptResult& out);

  // Populates a PolicyScriptResult object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::DictValue& value, PolicyScriptResult& out);

  // Creates a deep copy of PolicyScriptResult.
  PolicyScriptResult Clone() const;

  // Creates a PolicyScriptResult object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<PolicyScriptResult> FromValue(const base::DictValue& value);

  // Creates a PolicyScriptResult object from a base::Value, or nullopt on
  // failure.
  static std::optional<PolicyScriptResult> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisPolicyScriptResult object.
  base::DictValue ToValue() const;

  std::optional<std::string> next_url;

  PsstData psst;

};


}  // namespace psst

#endif  // BRAVE_COMPONENTS_PSST_CORE_COMMON_PSST_SCRIPT_RESPONSES_H__
