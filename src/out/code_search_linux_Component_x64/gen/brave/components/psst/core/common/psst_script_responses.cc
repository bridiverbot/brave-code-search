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

#include "brave/components/psst/core/common/psst_script_responses.h"

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

namespace psst {
//
// Types
//

UserScriptTask::UserScriptTask()
 {}

UserScriptTask::~UserScriptTask() = default;
UserScriptTask::UserScriptTask(UserScriptTask&& rhs) noexcept = default;
UserScriptTask& UserScriptTask::operator=(UserScriptTask&& rhs) noexcept = default;
UserScriptTask UserScriptTask::Clone() const {
  UserScriptTask out;
  out.uid = uid;
  out.url = url;
  out.description = description;
  return out;
}

// static
bool UserScriptTask::Populate(
    const base::DictValue& dict, UserScriptTask& out) {
  const base::Value* uid_value = dict.Find("uid");
  if (!uid_value) {
    return false;
  }
  {
    auto* temp = (*uid_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.uid = *temp;
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

  const base::Value* description_value = dict.Find("description");
  if (!description_value) {
    return false;
  }
  {
    auto* temp = (*description_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.description = *temp;
  }

  return true;
}

// static
bool UserScriptTask::Populate(
    const base::Value& value, UserScriptTask& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<UserScriptTask> UserScriptTask::FromValue(const base::DictValue& value) {
  UserScriptTask out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<UserScriptTask> UserScriptTask::FromValue(const base::Value& value) {
  UserScriptTask out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue UserScriptTask::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("uid", this->uid);

  to_value_result.Set("url", this->url);

  to_value_result.Set("description", this->description);


  return to_value_result;
}


UserScriptResult::UserScriptResult()
 {}

UserScriptResult::~UserScriptResult() = default;
UserScriptResult::UserScriptResult(UserScriptResult&& rhs) noexcept = default;
UserScriptResult& UserScriptResult::operator=(UserScriptResult&& rhs) noexcept = default;
UserScriptResult UserScriptResult::Clone() const {
  UserScriptResult out;
  out.user_id = user_id;
  out.site_name = site_name;
  out.tasks.reserve(tasks.size());
  for (const auto& element : tasks) {
    json_schema_compiler::util::AppendToContainer(out.tasks, element.Clone());
  }
  out.initial_execution = initial_execution;
  return out;
}

// static
bool UserScriptResult::Populate(
    const base::DictValue& dict, UserScriptResult& out) {
  const base::Value* user_id_value = dict.Find("user_id");
  if (!user_id_value) {
    return false;
  }
  {
    auto* temp = (*user_id_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.user_id = *temp;
  }

  const base::Value* site_name_value = dict.Find("site_name");
  if (!site_name_value) {
    return false;
  }
  {
    auto* temp = (*site_name_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.site_name = *temp;
  }

  const base::Value* tasks_value = dict.Find("tasks");
  if (!tasks_value) {
    return false;
  }
  {
    if (!(*tasks_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*tasks_value).GetList(), out.tasks)) {
        return false;
      }
    }
  }

  const base::Value* initial_execution_value = dict.Find("initial_execution");
  if (initial_execution_value) {
    {
      auto temp = (*initial_execution_value).GetIfBool();
      if (!temp.has_value()) {
        out.initial_execution = std::nullopt;
        return false;
      }
      out.initial_execution = *temp;
    }
  }

  return true;
}

// static
bool UserScriptResult::Populate(
    const base::Value& value, UserScriptResult& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<UserScriptResult> UserScriptResult::FromValue(const base::DictValue& value) {
  UserScriptResult out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<UserScriptResult> UserScriptResult::FromValue(const base::Value& value) {
  UserScriptResult out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue UserScriptResult::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("user_id", this->user_id);

  to_value_result.Set("site_name", this->site_name);

  to_value_result.Set("tasks", json_schema_compiler::util::CreateValueFromArray(this->tasks));

  if (this->initial_execution) {
    to_value_result.Set("initial_execution", *this->initial_execution);

  }

  return to_value_result;
}


PolicyTask::PolicyTask()
 {}

PolicyTask::~PolicyTask() = default;
PolicyTask::PolicyTask(PolicyTask&& rhs) noexcept = default;
PolicyTask& PolicyTask::operator=(PolicyTask&& rhs) noexcept = default;
PolicyTask PolicyTask::Clone() const {
  PolicyTask out;
  out.uid = uid;
  out.url = url;
  out.description = description;
  out.error_description = error_description;
  return out;
}

// static
bool PolicyTask::Populate(
    const base::DictValue& dict, PolicyTask& out) {
  const base::Value* uid_value = dict.Find("uid");
  if (!uid_value) {
    return false;
  }
  {
    auto* temp = (*uid_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.uid = *temp;
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

  const base::Value* description_value = dict.Find("description");
  if (!description_value) {
    return false;
  }
  {
    auto* temp = (*description_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.description = *temp;
  }

  const base::Value* error_description_value = dict.Find("error_description");
  if (error_description_value) {
    {
      auto* temp = (*error_description_value).GetIfString();
      if (!temp) {
        out.error_description = std::nullopt;
        return false;
      }
      out.error_description = *temp;
    }
  }

  return true;
}

// static
bool PolicyTask::Populate(
    const base::Value& value, PolicyTask& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<PolicyTask> PolicyTask::FromValue(const base::DictValue& value) {
  PolicyTask out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<PolicyTask> PolicyTask::FromValue(const base::Value& value) {
  PolicyTask out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue PolicyTask::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("uid", this->uid);

  to_value_result.Set("url", this->url);

  to_value_result.Set("description", this->description);

  if (this->error_description) {
    to_value_result.Set("error_description", *this->error_description);

  }

  return to_value_result;
}


PsstData::PsstData()
: progress(0) {}

PsstData::~PsstData() = default;
PsstData::PsstData(PsstData&& rhs) noexcept = default;
PsstData& PsstData::operator=(PsstData&& rhs) noexcept = default;
PsstData PsstData::Clone() const {
  PsstData out;
  out.progress = progress;
  out.applied_tasks.reserve(applied_tasks.size());
  for (const auto& element : applied_tasks) {
    json_schema_compiler::util::AppendToContainer(out.applied_tasks, element.Clone());
  }
  return out;
}

// static
bool PsstData::Populate(
    const base::DictValue& dict, PsstData& out) {
  const base::Value* progress_value = dict.Find("progress");
  if (!progress_value) {
    return false;
  }
  {
    auto temp = (*progress_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.progress = *temp;
  }

  const base::Value* applied_tasks_value = dict.Find("applied_tasks");
  if (!applied_tasks_value) {
    return false;
  }
  {
    if (!(*applied_tasks_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*applied_tasks_value).GetList(), out.applied_tasks)) {
        return false;
      }
    }
  }

  return true;
}

// static
bool PsstData::Populate(
    const base::Value& value, PsstData& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<PsstData> PsstData::FromValue(const base::DictValue& value) {
  PsstData out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<PsstData> PsstData::FromValue(const base::Value& value) {
  PsstData out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue PsstData::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("progress", this->progress);

  to_value_result.Set("applied_tasks", json_schema_compiler::util::CreateValueFromArray(this->applied_tasks));


  return to_value_result;
}


PolicyScriptResult::PolicyScriptResult()
 {}

PolicyScriptResult::~PolicyScriptResult() = default;
PolicyScriptResult::PolicyScriptResult(PolicyScriptResult&& rhs) noexcept = default;
PolicyScriptResult& PolicyScriptResult::operator=(PolicyScriptResult&& rhs) noexcept = default;
PolicyScriptResult PolicyScriptResult::Clone() const {
  PolicyScriptResult out;
  out.next_url = next_url;
  out.psst = psst.Clone();
  return out;
}

// static
bool PolicyScriptResult::Populate(
    const base::DictValue& dict, PolicyScriptResult& out) {
  const base::Value* next_url_value = dict.Find("next_url");
  if (next_url_value) {
    {
      auto* temp = (*next_url_value).GetIfString();
      if (!temp) {
        out.next_url = std::nullopt;
        return false;
      }
      out.next_url = *temp;
    }
  }

  const base::Value* psst_value = dict.Find("psst");
  if (!psst_value) {
    return false;
  }
  {
    if (!(*psst_value).is_dict()) {
      return false;
    }
    if (!PsstData::Populate((*psst_value).GetDict(), out.psst)) {
      return false;
    }
  }

  return true;
}

// static
bool PolicyScriptResult::Populate(
    const base::Value& value, PolicyScriptResult& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<PolicyScriptResult> PolicyScriptResult::FromValue(const base::DictValue& value) {
  PolicyScriptResult out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<PolicyScriptResult> PolicyScriptResult::FromValue(const base::Value& value) {
  PolicyScriptResult out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue PolicyScriptResult::ToValue() const {
  base::DictValue to_value_result;

  if (this->next_url) {
    to_value_result.Set("next_url", *this->next_url);

  }
  to_value_result.Set("psst", (this->psst).ToValue());


  return to_value_result;
}



}  // namespace psst

