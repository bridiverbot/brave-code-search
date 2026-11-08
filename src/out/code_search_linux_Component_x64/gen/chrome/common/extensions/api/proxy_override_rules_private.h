// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/proxy_override_rules_private.json
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../chrome/common/extensions/api/proxy_override_rules_private.json --root=../../ --destdir=gen --namespace=extensions::api::%(namespace)s --generator=cpp --include-rules=extensions/common/api:extensions::api::%(namespace)s

#ifndef CHROME_COMMON_EXTENSIONS_API_PROXY_OVERRIDE_RULES_PRIVATE_H__
#define CHROME_COMMON_EXTENSIONS_API_PROXY_OVERRIDE_RULES_PRIVATE_H__

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
namespace proxy_override_rules_private {

//
// Properties
//

//
// Types
//

enum class DnsProbeResult {
  kNone = 0,
  kResolved,
  kNotFound,
  kMaxValue = kNotFound,
};


const char* ToString(DnsProbeResult as_enum);
DnsProbeResult ParseDnsProbeResult(std::string_view as_string);
std::u16string GetDnsProbeResultParseError(std::string_view as_string);

struct DnsProbe {
  DnsProbe();
  ~DnsProbe();
  DnsProbe(const DnsProbe&) = delete;
  DnsProbe& operator=(const DnsProbe&) = delete;
  DnsProbe(DnsProbe&& rhs) noexcept;
  DnsProbe& operator=(DnsProbe&& rhs) noexcept;

  // Populates a DnsProbe object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, DnsProbe& out);

  // Populates a DnsProbe object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::DictValue& value, DnsProbe& out);

  // Creates a deep copy of DnsProbe.
  DnsProbe Clone() const;

  // Creates a DnsProbe object from a base::DictValue, or nullopt on failure.
  static std::optional<DnsProbe> FromValue(const base::DictValue& value);

  // Creates a DnsProbe object from a base::Value, or nullopt on failure.
  static std::optional<DnsProbe> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisDnsProbe object.
  base::DictValue ToValue() const;

  std::string host;

  DnsProbeResult result;

};

struct ProxyOverrideRuleCondition {
  ProxyOverrideRuleCondition();
  ~ProxyOverrideRuleCondition();
  ProxyOverrideRuleCondition(const ProxyOverrideRuleCondition&) = delete;
  ProxyOverrideRuleCondition& operator=(const ProxyOverrideRuleCondition&) = delete;
  ProxyOverrideRuleCondition(ProxyOverrideRuleCondition&& rhs) noexcept;
  ProxyOverrideRuleCondition& operator=(ProxyOverrideRuleCondition&& rhs) noexcept;

  // Populates a ProxyOverrideRuleCondition object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ProxyOverrideRuleCondition& out);

  // Populates a ProxyOverrideRuleCondition object from a Dict& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::DictValue& value, ProxyOverrideRuleCondition& out);

  // Creates a deep copy of ProxyOverrideRuleCondition.
  ProxyOverrideRuleCondition Clone() const;

  // Creates a ProxyOverrideRuleCondition object from a base::DictValue, or
  // nullopt on failure.
  static std::optional<ProxyOverrideRuleCondition> FromValue(const base::DictValue& value);

  // Creates a ProxyOverrideRuleCondition object from a base::Value, or nullopt
  // on failure.
  static std::optional<ProxyOverrideRuleCondition> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisProxyOverrideRuleCondition object.
  base::DictValue ToValue() const;

  std::optional<DnsProbe> dns_probe;

};

struct ProxyOverrideRule {
  ProxyOverrideRule();
  ~ProxyOverrideRule();
  ProxyOverrideRule(const ProxyOverrideRule&) = delete;
  ProxyOverrideRule& operator=(const ProxyOverrideRule&) = delete;
  ProxyOverrideRule(ProxyOverrideRule&& rhs) noexcept;
  ProxyOverrideRule& operator=(ProxyOverrideRule&& rhs) noexcept;

  // Populates a ProxyOverrideRule object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ProxyOverrideRule& out);

  // Populates a ProxyOverrideRule object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::DictValue& value, ProxyOverrideRule& out);

  // Creates a deep copy of ProxyOverrideRule.
  ProxyOverrideRule Clone() const;

  // Creates a ProxyOverrideRule object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<ProxyOverrideRule> FromValue(const base::DictValue& value);

  // Creates a ProxyOverrideRule object from a base::Value, or nullopt on
  // failure.
  static std::optional<ProxyOverrideRule> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisProxyOverrideRule object.
  base::DictValue ToValue() const;

  // URL patterns of the destinations for which this rule should apply.
  std::optional<std::vector<std::string>> destination_matchers;

  // URL patterns of the destinations for which this rule should not apply.
  std::optional<std::vector<std::string>> exclude_destination_matchers;

  // List of proxies to use for the destinations matching this rule.
  std::vector<std::string> proxy_list;

  // List of conditions that must be met for this rule to apply.
  std::optional<std::vector<ProxyOverrideRuleCondition>> conditions;

};


}  // namespace proxy_override_rules_private
}  // namespace api
}  // namespace extensions

#endif  // CHROME_COMMON_EXTENSIONS_API_PROXY_OVERRIDE_RULES_PRIVATE_H__
