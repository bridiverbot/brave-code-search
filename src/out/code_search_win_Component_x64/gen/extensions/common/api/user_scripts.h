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

#ifndef EXTENSIONS_COMMON_API_USER_SCRIPTS_H__
#define EXTENSIONS_COMMON_API_USER_SCRIPTS_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <optional>
#include <string>
#include <vector>

#include "base/values.h"
#include <string_view>
#include "extensions/common/api/extension_types.h"


namespace extensions {
namespace api {
namespace user_scripts {

//
// Types
//

// The JavaScript world for a user script to execute within.
enum class ExecutionWorld {
  kNone = 0,
  kMain,
  kUserScript,
  kMaxValue = kUserScript,
};


const char* ToString(ExecutionWorld as_enum);
ExecutionWorld ParseExecutionWorld(std::string_view as_string);
std::u16string GetExecutionWorldParseError(std::string_view as_string);

struct ScriptSource {
  ScriptSource();
  ~ScriptSource();
  ScriptSource(const ScriptSource&) = delete;
  ScriptSource& operator=(const ScriptSource&) = delete;
  ScriptSource(ScriptSource&& rhs) noexcept;
  ScriptSource& operator=(ScriptSource&& rhs) noexcept;

  // Populates a ScriptSource object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ScriptSource& out);

  // Populates a ScriptSource object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::DictValue& value, ScriptSource& out);

  // Creates a deep copy of ScriptSource.
  ScriptSource Clone() const;

  // Creates a ScriptSource object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<ScriptSource> FromValue(const base::DictValue& value);

  // Creates a ScriptSource object from a base::Value, or nullopt on failure.
  static std::optional<ScriptSource> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisScriptSource object.
  base::DictValue ToValue() const;

  // A string containing the JavaScript code to inject. Exactly one of
  // <code>file</code> or <code>code</code> must be specified.
  std::optional<std::string> code;

  // The path of the JavaScript file to inject relative to the extension's root
  // directory. Exactly one of <code>file</code> or <code>code</code> must be
  // specified.
  std::optional<std::string> file;

};

struct RegisteredUserScript {
  RegisteredUserScript();
  ~RegisteredUserScript();
  RegisteredUserScript(const RegisteredUserScript&) = delete;
  RegisteredUserScript& operator=(const RegisteredUserScript&) = delete;
  RegisteredUserScript(RegisteredUserScript&& rhs) noexcept;
  RegisteredUserScript& operator=(RegisteredUserScript&& rhs) noexcept;

  // Populates a RegisteredUserScript object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, RegisteredUserScript& out);

  // Populates a RegisteredUserScript object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::DictValue& value, RegisteredUserScript& out);

  // Creates a deep copy of RegisteredUserScript.
  RegisteredUserScript Clone() const;

  // Creates a RegisteredUserScript object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<RegisteredUserScript> FromValue(const base::DictValue& value);

  // Creates a RegisteredUserScript object from a base::Value, or nullopt on
  // failure.
  static std::optional<RegisteredUserScript> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisRegisteredUserScript object.
  base::DictValue ToValue() const;

  // If true, it will inject into all frames, even if the frame is not the
  // top-most frame in the tab. Each frame is checked independently for URL
  // requirements; it will not inject into child frames if the URL requirements
  // are not met. Defaults to false, meaning that only the top frame is matched.
  std::optional<bool> all_frames;

  // Excludes pages that this user script would otherwise be injected into. See <a
  // href="develop/concepts/match-patterns">Match Patterns</a> for more details on
  // the syntax of these strings.
  std::optional<std::vector<std::string>> exclude_matches;

  // The ID of the user script specified in the API call. This property must not
  // start with a '_' as it's reserved as a prefix for generated script IDs.
  std::string id;

  // Specifies wildcard patterns for pages this user script will be injected into.
  std::optional<std::vector<std::string>> include_globs;

  // Specifies wildcard patterns for pages this user script will NOT be injected
  // into.
  std::optional<std::vector<std::string>> exclude_globs;

  // The list of ScriptSource objects defining sources of scripts to be injected
  // into matching pages. This property must be specified for  ${ref:register},
  // and when specified it must be a non-empty array.
  std::optional<std::vector<ScriptSource>> js;

  // Specifies which pages this user script will be injected into. See <a
  // href="develop/concepts/match-patterns">Match Patterns</a> for more details on
  // the syntax of these strings. This property must be specified for
  // ${ref:register}.
  std::optional<std::vector<std::string>> matches;

  // Specifies when JavaScript files are injected into the web page. The preferred
  // and default value is <code>document_idle</code>.
  extensions::api::extension_types::RunAt run_at;

  // The JavaScript execution environment to run the script in. The default is
  // <code>`USER_SCRIPT`</code>.
  ExecutionWorld world;

  // Specifies the user script world ID to execute in. If omitted, the script will
  // execute in the default user script world. Only valid if `world` is omitted or
  // is `USER_SCRIPT`. Values with leading underscores (`_`) are reserved.
  std::optional<std::string> world_id;

};

struct UserScriptFilter {
  UserScriptFilter();
  ~UserScriptFilter();
  UserScriptFilter(const UserScriptFilter&) = delete;
  UserScriptFilter& operator=(const UserScriptFilter&) = delete;
  UserScriptFilter(UserScriptFilter&& rhs) noexcept;
  UserScriptFilter& operator=(UserScriptFilter&& rhs) noexcept;

  // Populates a UserScriptFilter object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, UserScriptFilter& out);

  // Populates a UserScriptFilter object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::DictValue& value, UserScriptFilter& out);

  // Creates a deep copy of UserScriptFilter.
  UserScriptFilter Clone() const;

  // Creates a UserScriptFilter object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<UserScriptFilter> FromValue(const base::DictValue& value);

  // Creates a UserScriptFilter object from a base::Value, or nullopt on
  // failure.
  static std::optional<UserScriptFilter> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisUserScriptFilter object.
  base::DictValue ToValue() const;

  // $(ref:getScripts) only returns scripts with the IDs specified in this list.
  std::optional<std::vector<std::string>> ids;

};

struct InjectionTarget {
  InjectionTarget();
  ~InjectionTarget();
  InjectionTarget(const InjectionTarget&) = delete;
  InjectionTarget& operator=(const InjectionTarget&) = delete;
  InjectionTarget(InjectionTarget&& rhs) noexcept;
  InjectionTarget& operator=(InjectionTarget&& rhs) noexcept;

  // Populates a InjectionTarget object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, InjectionTarget& out);

  // Populates a InjectionTarget object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::DictValue& value, InjectionTarget& out);

  // Creates a deep copy of InjectionTarget.
  InjectionTarget Clone() const;

  // Creates a InjectionTarget object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<InjectionTarget> FromValue(const base::DictValue& value);

  // Creates a InjectionTarget object from a base::Value, or nullopt on failure.
  static std::optional<InjectionTarget> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisInjectionTarget object.
  base::DictValue ToValue() const;

  // Whether the script should inject into all frames within the tab. Defaults to
  // false. This must not be true if <code>frameIds</code> is specified.
  std::optional<bool> all_frames;

  // The IDs of specific documentIds to inject into. This must not be set if
  // <code>frameIds</code> is set.
  std::optional<std::vector<std::string>> document_ids;

  // The IDs of specific frames to inject into.
  std::optional<std::vector<int>> frame_ids;

  // The ID of the tab into which to inject.
  int tab_id;

};

struct InjectionResult {
  InjectionResult();
  ~InjectionResult();
  InjectionResult(const InjectionResult&) = delete;
  InjectionResult& operator=(const InjectionResult&) = delete;
  InjectionResult(InjectionResult&& rhs) noexcept;
  InjectionResult& operator=(InjectionResult&& rhs) noexcept;

  // Populates a InjectionResult object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, InjectionResult& out);

  // Populates a InjectionResult object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::DictValue& value, InjectionResult& out);

  // Creates a deep copy of InjectionResult.
  InjectionResult Clone() const;

  // Creates a InjectionResult object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<InjectionResult> FromValue(const base::DictValue& value);

  // Creates a InjectionResult object from a base::Value, or nullopt on failure.
  static std::optional<InjectionResult> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisInjectionResult object.
  base::DictValue ToValue() const;

  // The document associated with the injection.
  std::string document_id;

  // The frame associated with the injection.
  int frame_id;

  // The result of the script execution.
  std::optional<base::Value> result;

  // The error, if any. <code>error</code> and <code>result</code> are mutually
  // exclusive.
  std::optional<std::string> error;

};

struct UserScriptInjection {
  UserScriptInjection();
  ~UserScriptInjection();
  UserScriptInjection(const UserScriptInjection&) = delete;
  UserScriptInjection& operator=(const UserScriptInjection&) = delete;
  UserScriptInjection(UserScriptInjection&& rhs) noexcept;
  UserScriptInjection& operator=(UserScriptInjection&& rhs) noexcept;

  // Populates a UserScriptInjection object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, UserScriptInjection& out);

  // Populates a UserScriptInjection object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::DictValue& value, UserScriptInjection& out);

  // Creates a deep copy of UserScriptInjection.
  UserScriptInjection Clone() const;

  // Creates a UserScriptInjection object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<UserScriptInjection> FromValue(const base::DictValue& value);

  // Creates a UserScriptInjection object from a base::Value, or nullopt on
  // failure.
  static std::optional<UserScriptInjection> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisUserScriptInjection object.
  base::DictValue ToValue() const;

  // Whether the injection should be triggered in the target as soon as possible.
  // Note that this is not a guarantee that injection will occur prior to page
  // load, as the page may have already loaded by the time the script reaches the
  // target.
  std::optional<bool> inject_immediately;

  // The list of ScriptSource objects defining sources of scripts to be injected
  // into the target.
  std::vector<ScriptSource> js;

  // Details specifying the target into which to inject the script.
  InjectionTarget target;

  // The JavaScript "world" to run the script in. The default is
  // <code>USER_SCRIPT</code>.
  ExecutionWorld world;

  // Specifies the user script world ID to execute in. If omitted, the script will
  // execute in the default user script world. Only valid if `world` is omitted or
  // is `USER_SCRIPT`. Values with leading underscores (`_`) are reserved.
  std::optional<std::string> world_id;

};

struct WorldProperties {
  WorldProperties();
  ~WorldProperties();
  WorldProperties(const WorldProperties&) = delete;
  WorldProperties& operator=(const WorldProperties&) = delete;
  WorldProperties(WorldProperties&& rhs) noexcept;
  WorldProperties& operator=(WorldProperties&& rhs) noexcept;

  // Populates a WorldProperties object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, WorldProperties& out);

  // Populates a WorldProperties object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::DictValue& value, WorldProperties& out);

  // Creates a deep copy of WorldProperties.
  WorldProperties Clone() const;

  // Creates a WorldProperties object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<WorldProperties> FromValue(const base::DictValue& value);

  // Creates a WorldProperties object from a base::Value, or nullopt on failure.
  static std::optional<WorldProperties> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisWorldProperties object.
  base::DictValue ToValue() const;

  // Specifies the ID of the specific user script world to update. If not
  // provided, updates the properties of the default user script world. Values
  // with leading underscores (`_`) are reserved.
  std::optional<std::string> world_id;

  // Specifies the world csp. The default is the <code>`ISOLATED`</code> world
  // csp.
  std::optional<std::string> csp;

  // Specifies whether messaging APIs are exposed. The default is
  // <code>false</code>.
  std::optional<bool> messaging;

};


//
// Functions
//

namespace Register {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // Contains a list of user scripts to be registered.
  std::vector<RegisteredUserScript> scripts;


 private:
  Params();
};

namespace Results {

base::ListValue Create();
}  // namespace Results

}  // namespace Register

namespace GetScripts {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // If specified, this method returns only the user scripts that match it.
  std::optional<UserScriptFilter> filter;


 private:
  Params();
};

namespace Results {

base::ListValue Create(const std::vector<RegisteredUserScript>& scripts);
}  // namespace Results

}  // namespace GetScripts

namespace Unregister {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // If specified, this method unregisters only the user scripts that match it.
  std::optional<UserScriptFilter> filter;


 private:
  Params();
};

namespace Results {

base::ListValue Create();
}  // namespace Results

}  // namespace Unregister

namespace Update {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // Contains a list of user scripts to be updated. A property is only updated for
  // the existing script if it is specified in this object. If there are errors
  // during script parsing/file validation, or if the IDs specified do not
  // correspond to a fully registered script, then no scripts are updated.
  std::vector<RegisteredUserScript> scripts;


 private:
  Params();
};

namespace Results {

base::ListValue Create();
}  // namespace Results

}  // namespace Update

namespace Execute {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  UserScriptInjection injection;


 private:
  Params();
};

namespace Results {

base::ListValue Create(const std::vector<InjectionResult>& result);
}  // namespace Results

}  // namespace Execute

namespace ConfigureWorld {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // Contains the user script world configuration.
  WorldProperties properties;


 private:
  Params();
};

namespace Results {

base::ListValue Create();
}  // namespace Results

}  // namespace ConfigureWorld

namespace GetWorldConfigurations {

namespace Results {

base::ListValue Create(const std::vector<WorldProperties>& worlds);
}  // namespace Results

}  // namespace GetWorldConfigurations

namespace ResetWorldConfiguration {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The ID of the user script world to reset. If omitted, resets the default
  // world's configuration.
  std::optional<std::string> world_id;


 private:
  Params();
};

namespace Results {

base::ListValue Create();
}  // namespace Results

}  // namespace ResetWorldConfiguration

}  // namespace user_scripts
}  // namespace api
}  // namespace extensions

#endif  // EXTENSIONS_COMMON_API_USER_SCRIPTS_H__
