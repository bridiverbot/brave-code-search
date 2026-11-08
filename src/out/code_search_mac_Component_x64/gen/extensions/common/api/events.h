// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/events.json
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../extensions/common/api/events.json --root=../../ --destdir=gen --namespace=extensions::api::%(namespace)s --generator=cpp --include-rules=

#ifndef EXTENSIONS_COMMON_API_EVENTS_H__
#define EXTENSIONS_COMMON_API_EVENTS_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <optional>
#include <string>
#include <vector>

#include "base/values.h"

namespace extensions {
namespace api {
namespace events {

//
// Types
//

// Description of a declarative rule for handling events.
struct Rule {
  Rule();
  ~Rule();
  Rule(const Rule&) = delete;
  Rule& operator=(const Rule&) = delete;
  Rule(Rule&& rhs) noexcept;
  Rule& operator=(Rule&& rhs) noexcept;

  // Populates a Rule object from a base::Value& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value& value, Rule& out);

  // Populates a Rule object from a Dict& instance. Returns whether |out| was
  // successfully populated.
  static bool Populate(const base::DictValue& value, Rule& out);

  // Creates a deep copy of Rule.
  Rule Clone() const;

  // Creates a Rule object from a base::DictValue, or nullopt on failure.
  static std::optional<Rule> FromValue(const base::DictValue& value);

  // Creates a Rule object from a base::Value, or nullopt on failure.
  static std::optional<Rule> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of thisRule
  // object.
  base::DictValue ToValue() const;

  // Optional identifier that allows referencing this rule.
  std::optional<std::string> id;

  // Tags can be used to annotate rules and perform operations on sets of rules.
  std::optional<std::vector<std::string>> tags;

  // List of conditions that can trigger the actions.
  base::ListValue conditions;

  // List of actions that are triggered if one of the conditions is fulfilled.
  base::ListValue actions;

  // Optional priority of this rule. Defaults to 100.
  std::optional<int> priority;

};

namespace Event {

namespace AddRules {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // Name of the event this function affects.
  std::string event_name;

  // If provided, this is an integer that uniquely identfies the <webview>
  // associated with this function call.
  int web_view_instance_id;

  // Rules to be registered. These do not replace previously registered rules.
  std::vector<Rule> rules;


 private:
  Params();
};

namespace Results {

// Rules that were registered, the optional parameters are filled with values.
base::ListValue Create(const std::vector<Rule>& rules);
}  // namespace Results

}  // namespace AddRules

namespace GetRules {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // Name of the event this function affects.
  std::string event_name;

  // If provided, this is an integer that uniquely identfies the <webview>
  // associated with this function call.
  int web_view_instance_id;

  // If an array is passed, only rules with identifiers contained in this array
  // are returned.
  std::optional<std::vector<std::string>> rule_identifiers;


 private:
  Params();
};

namespace Results {

// Rules that were registered, the optional parameters are filled with values.
base::ListValue Create(const std::vector<Rule>& rules);
}  // namespace Results

}  // namespace GetRules

namespace RemoveRules {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // Name of the event this function affects.
  std::string event_name;

  // If provided, this is an integer that uniquely identfies the <webview>
  // associated with this function call.
  int web_view_instance_id;

  // If an array is passed, only rules with identifiers contained in this array
  // are unregistered.
  std::optional<std::vector<std::string>> rule_identifiers;


 private:
  Params();
};

namespace Results {

base::ListValue Create();
}  // namespace Results

}  // namespace RemoveRules

}  // namespace Event


}  // namespace events
}  // namespace api
}  // namespace extensions

#endif  // EXTENSIONS_COMMON_API_EVENTS_H__
