// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/user_scripts.webidl
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../extensions/common/api/user_scripts.webidl --root=../../ --destdir=gen --namespace=extensions::api::%(namespace)s --generator=cpp --include-rules=

#include "extensions/common/api/user_scripts.h"

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
#include "extensions/common/api/extension_types.h"


using base::UTF8ToUTF16;

namespace extensions {
namespace api {
namespace user_scripts {
//
// Types
//

const char* ToString(ExecutionWorld enum_param) {
  switch (enum_param) {
    case ExecutionWorld::kMain:
      return "MAIN";
    case ExecutionWorld::kUserScript:
      return "USER_SCRIPT";
    case ExecutionWorld::kNone:
      return "";
  }
  NOTREACHED();
}

ExecutionWorld ParseExecutionWorld(std::string_view enum_string) {
  if (enum_string == "MAIN")
    return ExecutionWorld::kMain;
  if (enum_string == "USER_SCRIPT")
    return ExecutionWorld::kUserScript;
  return ExecutionWorld::kNone;
}

std::u16string GetExecutionWorldParseError(std::string_view enum_string) {
  return u"expected \"MAIN\" or \"USER_SCRIPT\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


ScriptSource::ScriptSource()
 {}

ScriptSource::~ScriptSource() = default;
ScriptSource::ScriptSource(ScriptSource&& rhs) noexcept = default;
ScriptSource& ScriptSource::operator=(ScriptSource&& rhs) noexcept = default;
ScriptSource ScriptSource::Clone() const {
  ScriptSource out;
  out.code = code;
  out.file = file;
  return out;
}

// static
bool ScriptSource::Populate(
    const base::DictValue& dict, ScriptSource& out) {
  const base::Value* code_value = dict.Find("code");
  if (code_value) {
    {
      auto* temp = (*code_value).GetIfString();
      if (!temp) {
        out.code = std::nullopt;
        return false;
      }
      out.code = *temp;
    }
  }

  const base::Value* file_value = dict.Find("file");
  if (file_value) {
    {
      auto* temp = (*file_value).GetIfString();
      if (!temp) {
        out.file = std::nullopt;
        return false;
      }
      out.file = *temp;
    }
  }

  return true;
}

// static
bool ScriptSource::Populate(
    const base::Value& value, ScriptSource& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<ScriptSource> ScriptSource::FromValue(const base::DictValue& value) {
  ScriptSource out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<ScriptSource> ScriptSource::FromValue(const base::Value& value) {
  ScriptSource out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue ScriptSource::ToValue() const {
  base::DictValue to_value_result;

  if (this->code) {
    to_value_result.Set("code", *this->code);

  }
  if (this->file) {
    to_value_result.Set("file", *this->file);

  }

  return to_value_result;
}


RegisteredUserScript::RegisteredUserScript()
: run_at(),
world() {}

RegisteredUserScript::~RegisteredUserScript() = default;
RegisteredUserScript::RegisteredUserScript(RegisteredUserScript&& rhs) noexcept = default;
RegisteredUserScript& RegisteredUserScript::operator=(RegisteredUserScript&& rhs) noexcept = default;
RegisteredUserScript RegisteredUserScript::Clone() const {
  RegisteredUserScript out;
  out.all_frames = all_frames;
  out.exclude_matches = exclude_matches;
  out.id = id;
  out.include_globs = include_globs;
  out.exclude_globs = exclude_globs;
  if (js) {
    out.js.emplace();
    out.js->reserve(js->size());
    for (const auto& element : *js) {
      json_schema_compiler::util::AppendToContainer(*out.js, element.Clone());
    }
  }
  out.matches = matches;
  out.run_at = run_at;
  out.world = world;
  out.world_id = world_id;
  return out;
}

// static
bool RegisteredUserScript::Populate(
    const base::DictValue& dict, RegisteredUserScript& out) {
  out.run_at = extensions::api::extension_types::RunAt();
  out.world = ExecutionWorld();
  const base::Value* all_frames_value = dict.Find("allFrames");
  if (all_frames_value) {
    {
      auto temp = (*all_frames_value).GetIfBool();
      if (!temp.has_value()) {
        out.all_frames = std::nullopt;
        return false;
      }
      out.all_frames = *temp;
    }
  }

  const base::Value* exclude_matches_value = dict.Find("excludeMatches");
  if (exclude_matches_value) {
    {
      if (!(*exclude_matches_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*exclude_matches_value).GetList(), out.exclude_matches)) {
          return false;
        }
      }
    }
  }

  const base::Value* id_value = dict.Find("id");
  if (!id_value) {
    return false;
  }
  {
    auto* temp = (*id_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.id = *temp;
  }

  const base::Value* include_globs_value = dict.Find("includeGlobs");
  if (include_globs_value) {
    {
      if (!(*include_globs_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*include_globs_value).GetList(), out.include_globs)) {
          return false;
        }
      }
    }
  }

  const base::Value* exclude_globs_value = dict.Find("excludeGlobs");
  if (exclude_globs_value) {
    {
      if (!(*exclude_globs_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*exclude_globs_value).GetList(), out.exclude_globs)) {
          return false;
        }
      }
    }
  }

  const base::Value* js_value = dict.Find("js");
  if (js_value) {
    {
      if (!(*js_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*js_value).GetList(), out.js)) {
          return false;
        }
      }
    }
  }

  const base::Value* matches_value = dict.Find("matches");
  if (matches_value) {
    {
      if (!(*matches_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*matches_value).GetList(), out.matches)) {
          return false;
        }
      }
    }
  }

  const base::Value* run_at_value = dict.Find("runAt");
  if (run_at_value) {
    {
      const std::string* run_at_as_string = (*run_at_value).GetIfString();
      if (!run_at_as_string) {
        return false;
      }
      out.run_at = extensions::api::extension_types::ParseRunAt(*run_at_as_string);
      if (out.run_at == extensions::api::extension_types::RunAt()) {
        return false;
      }
    }
    } else {
    out.run_at = extensions::api::extension_types::RunAt();
  }

  const base::Value* world_value = dict.Find("world");
  if (world_value) {
    {
      const std::string* execution_world_as_string = (*world_value).GetIfString();
      if (!execution_world_as_string) {
        return false;
      }
      out.world = ParseExecutionWorld(*execution_world_as_string);
      if (out.world == ExecutionWorld()) {
        return false;
      }
    }
    } else {
    out.world = ExecutionWorld();
  }

  const base::Value* world_id_value = dict.Find("worldId");
  if (world_id_value) {
    {
      auto* temp = (*world_id_value).GetIfString();
      if (!temp) {
        out.world_id = std::nullopt;
        return false;
      }
      out.world_id = *temp;
    }
  }

  return true;
}

// static
bool RegisteredUserScript::Populate(
    const base::Value& value, RegisteredUserScript& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<RegisteredUserScript> RegisteredUserScript::FromValue(const base::DictValue& value) {
  RegisteredUserScript out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<RegisteredUserScript> RegisteredUserScript::FromValue(const base::Value& value) {
  RegisteredUserScript out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue RegisteredUserScript::ToValue() const {
  base::DictValue to_value_result;

  if (this->all_frames) {
    to_value_result.Set("allFrames", *this->all_frames);

  }
  if (this->exclude_matches) {
    to_value_result.Set("excludeMatches", json_schema_compiler::util::CreateValueFromArray(*this->exclude_matches));

  }
  to_value_result.Set("id", this->id);

  if (this->include_globs) {
    to_value_result.Set("includeGlobs", json_schema_compiler::util::CreateValueFromArray(*this->include_globs));

  }
  if (this->exclude_globs) {
    to_value_result.Set("excludeGlobs", json_schema_compiler::util::CreateValueFromArray(*this->exclude_globs));

  }
  if (this->js) {
    to_value_result.Set("js", json_schema_compiler::util::CreateValueFromArray(*this->js));

  }
  if (this->matches) {
    to_value_result.Set("matches", json_schema_compiler::util::CreateValueFromArray(*this->matches));

  }
  if (this->run_at != extensions::api::extension_types::RunAt()) {
    to_value_result.Set("runAt", extension_types::ToString(this->run_at));

  }
  if (this->world != ExecutionWorld()) {
    to_value_result.Set("world", user_scripts::ToString(this->world));

  }
  if (this->world_id) {
    to_value_result.Set("worldId", *this->world_id);

  }

  return to_value_result;
}


UserScriptFilter::UserScriptFilter()
 {}

UserScriptFilter::~UserScriptFilter() = default;
UserScriptFilter::UserScriptFilter(UserScriptFilter&& rhs) noexcept = default;
UserScriptFilter& UserScriptFilter::operator=(UserScriptFilter&& rhs) noexcept = default;
UserScriptFilter UserScriptFilter::Clone() const {
  UserScriptFilter out;
  out.ids = ids;
  return out;
}

// static
bool UserScriptFilter::Populate(
    const base::DictValue& dict, UserScriptFilter& out) {
  const base::Value* ids_value = dict.Find("ids");
  if (ids_value) {
    {
      if (!(*ids_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*ids_value).GetList(), out.ids)) {
          return false;
        }
      }
    }
  }

  return true;
}

// static
bool UserScriptFilter::Populate(
    const base::Value& value, UserScriptFilter& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<UserScriptFilter> UserScriptFilter::FromValue(const base::DictValue& value) {
  UserScriptFilter out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<UserScriptFilter> UserScriptFilter::FromValue(const base::Value& value) {
  UserScriptFilter out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue UserScriptFilter::ToValue() const {
  base::DictValue to_value_result;

  if (this->ids) {
    to_value_result.Set("ids", json_schema_compiler::util::CreateValueFromArray(*this->ids));

  }

  return to_value_result;
}


InjectionTarget::InjectionTarget()
: tab_id(0) {}

InjectionTarget::~InjectionTarget() = default;
InjectionTarget::InjectionTarget(InjectionTarget&& rhs) noexcept = default;
InjectionTarget& InjectionTarget::operator=(InjectionTarget&& rhs) noexcept = default;
InjectionTarget InjectionTarget::Clone() const {
  InjectionTarget out;
  out.all_frames = all_frames;
  out.document_ids = document_ids;
  out.frame_ids = frame_ids;
  out.tab_id = tab_id;
  return out;
}

// static
bool InjectionTarget::Populate(
    const base::DictValue& dict, InjectionTarget& out) {
  const base::Value* all_frames_value = dict.Find("allFrames");
  if (all_frames_value) {
    {
      auto temp = (*all_frames_value).GetIfBool();
      if (!temp.has_value()) {
        out.all_frames = std::nullopt;
        return false;
      }
      out.all_frames = *temp;
    }
  }

  const base::Value* document_ids_value = dict.Find("documentIds");
  if (document_ids_value) {
    {
      if (!(*document_ids_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*document_ids_value).GetList(), out.document_ids)) {
          return false;
        }
      }
    }
  }

  const base::Value* frame_ids_value = dict.Find("frameIds");
  if (frame_ids_value) {
    {
      if (!(*frame_ids_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*frame_ids_value).GetList(), out.frame_ids)) {
          return false;
        }
      }
    }
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

  return true;
}

// static
bool InjectionTarget::Populate(
    const base::Value& value, InjectionTarget& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<InjectionTarget> InjectionTarget::FromValue(const base::DictValue& value) {
  InjectionTarget out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<InjectionTarget> InjectionTarget::FromValue(const base::Value& value) {
  InjectionTarget out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue InjectionTarget::ToValue() const {
  base::DictValue to_value_result;

  if (this->all_frames) {
    to_value_result.Set("allFrames", *this->all_frames);

  }
  if (this->document_ids) {
    to_value_result.Set("documentIds", json_schema_compiler::util::CreateValueFromArray(*this->document_ids));

  }
  if (this->frame_ids) {
    to_value_result.Set("frameIds", json_schema_compiler::util::CreateValueFromArray(*this->frame_ids));

  }
  to_value_result.Set("tabId", this->tab_id);


  return to_value_result;
}


InjectionResult::InjectionResult()
: frame_id(0) {}

InjectionResult::~InjectionResult() = default;
InjectionResult::InjectionResult(InjectionResult&& rhs) noexcept = default;
InjectionResult& InjectionResult::operator=(InjectionResult&& rhs) noexcept = default;
InjectionResult InjectionResult::Clone() const {
  InjectionResult out;
  out.document_id = document_id;
  out.frame_id = frame_id;
  if (result) {
    out.result = result->Clone();
  }
  out.error = error;
  return out;
}

// static
bool InjectionResult::Populate(
    const base::DictValue& dict, InjectionResult& out) {
  const base::Value* document_id_value = dict.Find("documentId");
  if (!document_id_value) {
    return false;
  }
  {
    auto* temp = (*document_id_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.document_id = *temp;
  }

  const base::Value* frame_id_value = dict.Find("frameId");
  if (!frame_id_value) {
    return false;
  }
  {
    auto temp = (*frame_id_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.frame_id = *temp;
  }

  const base::Value* result_value = dict.Find("result");
  if (result_value) {
    {
      out.result = (*result_value).Clone();
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

  return true;
}

// static
bool InjectionResult::Populate(
    const base::Value& value, InjectionResult& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<InjectionResult> InjectionResult::FromValue(const base::DictValue& value) {
  InjectionResult out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<InjectionResult> InjectionResult::FromValue(const base::Value& value) {
  InjectionResult out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue InjectionResult::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("documentId", this->document_id);

  to_value_result.Set("frameId", this->frame_id);

  if (this->result) {
    to_value_result.Set("result", (this->result)->Clone());

  }
  if (this->error) {
    to_value_result.Set("error", *this->error);

  }

  return to_value_result;
}


UserScriptInjection::UserScriptInjection()
: world() {}

UserScriptInjection::~UserScriptInjection() = default;
UserScriptInjection::UserScriptInjection(UserScriptInjection&& rhs) noexcept = default;
UserScriptInjection& UserScriptInjection::operator=(UserScriptInjection&& rhs) noexcept = default;
UserScriptInjection UserScriptInjection::Clone() const {
  UserScriptInjection out;
  out.inject_immediately = inject_immediately;
  out.js.reserve(js.size());
  for (const auto& element : js) {
    json_schema_compiler::util::AppendToContainer(out.js, element.Clone());
  }
  out.target = target.Clone();
  out.world = world;
  out.world_id = world_id;
  return out;
}

// static
bool UserScriptInjection::Populate(
    const base::DictValue& dict, UserScriptInjection& out) {
  out.world = ExecutionWorld();
  const base::Value* inject_immediately_value = dict.Find("injectImmediately");
  if (inject_immediately_value) {
    {
      auto temp = (*inject_immediately_value).GetIfBool();
      if (!temp.has_value()) {
        out.inject_immediately = std::nullopt;
        return false;
      }
      out.inject_immediately = *temp;
    }
  }

  const base::Value* js_value = dict.Find("js");
  if (!js_value) {
    return false;
  }
  {
    if (!(*js_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*js_value).GetList(), out.js)) {
        return false;
      }
    }
  }

  const base::Value* target_value = dict.Find("target");
  if (!target_value) {
    return false;
  }
  {
    if (!(*target_value).is_dict()) {
      return false;
    }
    if (!InjectionTarget::Populate((*target_value).GetDict(), out.target)) {
      return false;
    }
  }

  const base::Value* world_value = dict.Find("world");
  if (world_value) {
    {
      const std::string* execution_world_as_string = (*world_value).GetIfString();
      if (!execution_world_as_string) {
        return false;
      }
      out.world = ParseExecutionWorld(*execution_world_as_string);
      if (out.world == ExecutionWorld()) {
        return false;
      }
    }
    } else {
    out.world = ExecutionWorld();
  }

  const base::Value* world_id_value = dict.Find("worldId");
  if (world_id_value) {
    {
      auto* temp = (*world_id_value).GetIfString();
      if (!temp) {
        out.world_id = std::nullopt;
        return false;
      }
      out.world_id = *temp;
    }
  }

  return true;
}

// static
bool UserScriptInjection::Populate(
    const base::Value& value, UserScriptInjection& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<UserScriptInjection> UserScriptInjection::FromValue(const base::DictValue& value) {
  UserScriptInjection out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<UserScriptInjection> UserScriptInjection::FromValue(const base::Value& value) {
  UserScriptInjection out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue UserScriptInjection::ToValue() const {
  base::DictValue to_value_result;

  if (this->inject_immediately) {
    to_value_result.Set("injectImmediately", *this->inject_immediately);

  }
  to_value_result.Set("js", json_schema_compiler::util::CreateValueFromArray(this->js));

  to_value_result.Set("target", (this->target).ToValue());

  if (this->world != ExecutionWorld()) {
    to_value_result.Set("world", user_scripts::ToString(this->world));

  }
  if (this->world_id) {
    to_value_result.Set("worldId", *this->world_id);

  }

  return to_value_result;
}


WorldProperties::WorldProperties()
 {}

WorldProperties::~WorldProperties() = default;
WorldProperties::WorldProperties(WorldProperties&& rhs) noexcept = default;
WorldProperties& WorldProperties::operator=(WorldProperties&& rhs) noexcept = default;
WorldProperties WorldProperties::Clone() const {
  WorldProperties out;
  out.world_id = world_id;
  out.csp = csp;
  out.messaging = messaging;
  return out;
}

// static
bool WorldProperties::Populate(
    const base::DictValue& dict, WorldProperties& out) {
  const base::Value* world_id_value = dict.Find("worldId");
  if (world_id_value) {
    {
      auto* temp = (*world_id_value).GetIfString();
      if (!temp) {
        out.world_id = std::nullopt;
        return false;
      }
      out.world_id = *temp;
    }
  }

  const base::Value* csp_value = dict.Find("csp");
  if (csp_value) {
    {
      auto* temp = (*csp_value).GetIfString();
      if (!temp) {
        out.csp = std::nullopt;
        return false;
      }
      out.csp = *temp;
    }
  }

  const base::Value* messaging_value = dict.Find("messaging");
  if (messaging_value) {
    {
      auto temp = (*messaging_value).GetIfBool();
      if (!temp.has_value()) {
        out.messaging = std::nullopt;
        return false;
      }
      out.messaging = *temp;
    }
  }

  return true;
}

// static
bool WorldProperties::Populate(
    const base::Value& value, WorldProperties& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<WorldProperties> WorldProperties::FromValue(const base::DictValue& value) {
  WorldProperties out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<WorldProperties> WorldProperties::FromValue(const base::Value& value) {
  WorldProperties out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue WorldProperties::ToValue() const {
  base::DictValue to_value_result;

  if (this->world_id) {
    to_value_result.Set("worldId", *this->world_id);

  }
  if (this->csp) {
    to_value_result.Set("csp", *this->csp);

  }
  if (this->messaging) {
    to_value_result.Set("messaging", *this->messaging);

  }

  return to_value_result;
}



//
// Functions
//

namespace Register {

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
    const base::Value& scripts_value = args[0];
    {
      if (!scripts_value.is_list()) {
        return std::nullopt;
      }
      else {
        if (!json_schema_compiler::util::PopulateArrayFromList(scripts_value.GetList(), params.scripts)) {
          return std::nullopt;
        }
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
}  // namespace Register

namespace GetScripts {

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
        UserScriptFilter temp;
        if (!UserScriptFilter::Populate(filter_value.GetDict(), temp))
          return std::nullopt;
        params.filter = std::move(temp);
      }
    }
  }

  return params;
}


base::ListValue Results::Create(const std::vector<RegisteredUserScript>& scripts) {
  base::ListValue create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(scripts));

  return create_results;
}
}  // namespace GetScripts

namespace Unregister {

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
        UserScriptFilter temp;
        if (!UserScriptFilter::Populate(filter_value.GetDict(), temp))
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
}  // namespace Unregister

namespace Update {

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
    const base::Value& scripts_value = args[0];
    {
      if (!scripts_value.is_list()) {
        return std::nullopt;
      }
      else {
        if (!json_schema_compiler::util::PopulateArrayFromList(scripts_value.GetList(), params.scripts)) {
          return std::nullopt;
        }
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
}  // namespace Update

namespace Execute {

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
    const base::Value& injection_value = args[0];
    {
      if (!injection_value.is_dict()) {
        return std::nullopt;
      }
      if (!UserScriptInjection::Populate(injection_value.GetDict(), params.injection)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::ListValue Results::Create(const std::vector<InjectionResult>& result) {
  base::ListValue create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(result));

  return create_results;
}
}  // namespace Execute

namespace ConfigureWorld {

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
    const base::Value& properties_value = args[0];
    {
      if (!properties_value.is_dict()) {
        return std::nullopt;
      }
      if (!WorldProperties::Populate(properties_value.GetDict(), params.properties)) {
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
}  // namespace ConfigureWorld

namespace GetWorldConfigurations {

base::ListValue Results::Create(const std::vector<WorldProperties>& worlds) {
  base::ListValue create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(worlds));

  return create_results;
}
}  // namespace GetWorldConfigurations

namespace ResetWorldConfiguration {

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
    const base::Value& world_id_value = args[0];
    {
      auto* temp = world_id_value.GetIfString();
      if (!temp) {
        params.world_id = std::nullopt;
        return std::nullopt;
      }
      params.world_id = *temp;
    }
  }

  return params;
}


base::ListValue Results::Create() {
  base::ListValue create_results;

  return create_results;
}
}  // namespace ResetWorldConfiguration

}  // namespace user_scripts
}  // namespace api
}  // namespace extensions

