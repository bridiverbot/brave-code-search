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

#include "chrome/common/extensions/api/proxy_override_rules_private.h"

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


using base::UTF8ToUTF16;

namespace extensions {
namespace api {
namespace proxy_override_rules_private {
//
// Properties
//

//
// Types
//

const char* ToString(DnsProbeResult enum_param) {
  switch (enum_param) {
    case DnsProbeResult::kResolved:
      return "resolved";
    case DnsProbeResult::kNotFound:
      return "not_found";
    case DnsProbeResult::kNone:
      return "";
  }
  NOTREACHED();
}

DnsProbeResult ParseDnsProbeResult(std::string_view enum_string) {
  if (enum_string == "resolved")
    return DnsProbeResult::kResolved;
  if (enum_string == "not_found")
    return DnsProbeResult::kNotFound;
  return DnsProbeResult::kNone;
}

std::u16string GetDnsProbeResultParseError(std::string_view enum_string) {
  return u"expected \"resolved\" or \"not_found\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


DnsProbe::DnsProbe()
: result() {}

DnsProbe::~DnsProbe() = default;
DnsProbe::DnsProbe(DnsProbe&& rhs) noexcept = default;
DnsProbe& DnsProbe::operator=(DnsProbe&& rhs) noexcept = default;
DnsProbe DnsProbe::Clone() const {
  DnsProbe out;
  out.host = host;
  out.result = result;
  return out;
}

// static
bool DnsProbe::Populate(
    const base::DictValue& dict, DnsProbe& out) {
  const base::Value* host_value = dict.Find("Host");
  if (!host_value) {
    return false;
  }
  {
    auto* temp = (*host_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.host = *temp;
  }

  const base::Value* result_value = dict.Find("Result");
  if (!result_value) {
    return false;
  }
  {
    const std::string* dns_probe_result_as_string = (*result_value).GetIfString();
    if (!dns_probe_result_as_string) {
      return false;
    }
    out.result = ParseDnsProbeResult(*dns_probe_result_as_string);
    if (out.result == DnsProbeResult()) {
      return false;
    }
  }

  return true;
}

// static
bool DnsProbe::Populate(
    const base::Value& value, DnsProbe& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<DnsProbe> DnsProbe::FromValue(const base::DictValue& value) {
  DnsProbe out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<DnsProbe> DnsProbe::FromValue(const base::Value& value) {
  DnsProbe out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue DnsProbe::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("Host", this->host);

  to_value_result.Set("Result", proxy_override_rules_private::ToString(this->result));


  return to_value_result;
}


ProxyOverrideRuleCondition::ProxyOverrideRuleCondition()
 {}

ProxyOverrideRuleCondition::~ProxyOverrideRuleCondition() = default;
ProxyOverrideRuleCondition::ProxyOverrideRuleCondition(ProxyOverrideRuleCondition&& rhs) noexcept = default;
ProxyOverrideRuleCondition& ProxyOverrideRuleCondition::operator=(ProxyOverrideRuleCondition&& rhs) noexcept = default;
ProxyOverrideRuleCondition ProxyOverrideRuleCondition::Clone() const {
  ProxyOverrideRuleCondition out;
  if (dns_probe) {
    out.dns_probe = dns_probe->Clone();
  }
  return out;
}

// static
bool ProxyOverrideRuleCondition::Populate(
    const base::DictValue& dict, ProxyOverrideRuleCondition& out) {
  const base::Value* dns_probe_value = dict.Find("DnsProbe");
  if (dns_probe_value) {
    {
      if (!(*dns_probe_value).is_dict()) {
        return false;
      }
      else {
        DnsProbe temp;
        if (!DnsProbe::Populate((*dns_probe_value).GetDict(), temp))
          return false;
        out.dns_probe = std::move(temp);
      }
    }
  }

  return true;
}

// static
bool ProxyOverrideRuleCondition::Populate(
    const base::Value& value, ProxyOverrideRuleCondition& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<ProxyOverrideRuleCondition> ProxyOverrideRuleCondition::FromValue(const base::DictValue& value) {
  ProxyOverrideRuleCondition out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<ProxyOverrideRuleCondition> ProxyOverrideRuleCondition::FromValue(const base::Value& value) {
  ProxyOverrideRuleCondition out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue ProxyOverrideRuleCondition::ToValue() const {
  base::DictValue to_value_result;

  if (this->dns_probe) {
    to_value_result.Set("DnsProbe", (this->dns_probe)->ToValue());

  }

  return to_value_result;
}


ProxyOverrideRule::ProxyOverrideRule()
 {}

ProxyOverrideRule::~ProxyOverrideRule() = default;
ProxyOverrideRule::ProxyOverrideRule(ProxyOverrideRule&& rhs) noexcept = default;
ProxyOverrideRule& ProxyOverrideRule::operator=(ProxyOverrideRule&& rhs) noexcept = default;
ProxyOverrideRule ProxyOverrideRule::Clone() const {
  ProxyOverrideRule out;
  out.destination_matchers = destination_matchers;
  out.exclude_destination_matchers = exclude_destination_matchers;
  out.proxy_list = proxy_list;
  if (conditions) {
    out.conditions.emplace();
    out.conditions->reserve(conditions->size());
    for (const auto& element : *conditions) {
      json_schema_compiler::util::AppendToContainer(*out.conditions, element.Clone());
    }
  }
  return out;
}

// static
bool ProxyOverrideRule::Populate(
    const base::DictValue& dict, ProxyOverrideRule& out) {
  const base::Value* destination_matchers_value = dict.Find("DestinationMatchers");
  if (destination_matchers_value) {
    {
      if (!(*destination_matchers_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*destination_matchers_value).GetList(), out.destination_matchers)) {
          return false;
        }
      }
    }
  }

  const base::Value* exclude_destination_matchers_value = dict.Find("ExcludeDestinationMatchers");
  if (exclude_destination_matchers_value) {
    {
      if (!(*exclude_destination_matchers_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*exclude_destination_matchers_value).GetList(), out.exclude_destination_matchers)) {
          return false;
        }
      }
    }
  }

  const base::Value* proxy_list_value = dict.Find("ProxyList");
  if (!proxy_list_value) {
    return false;
  }
  {
    if (!(*proxy_list_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*proxy_list_value).GetList(), out.proxy_list)) {
        return false;
      }
    }
  }

  const base::Value* conditions_value = dict.Find("Conditions");
  if (conditions_value) {
    {
      if (!(*conditions_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*conditions_value).GetList(), out.conditions)) {
          return false;
        }
      }
    }
  }

  return true;
}

// static
bool ProxyOverrideRule::Populate(
    const base::Value& value, ProxyOverrideRule& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<ProxyOverrideRule> ProxyOverrideRule::FromValue(const base::DictValue& value) {
  ProxyOverrideRule out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<ProxyOverrideRule> ProxyOverrideRule::FromValue(const base::Value& value) {
  ProxyOverrideRule out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue ProxyOverrideRule::ToValue() const {
  base::DictValue to_value_result;

  if (this->destination_matchers) {
    to_value_result.Set("DestinationMatchers", json_schema_compiler::util::CreateValueFromArray(*this->destination_matchers));

  }
  if (this->exclude_destination_matchers) {
    to_value_result.Set("ExcludeDestinationMatchers", json_schema_compiler::util::CreateValueFromArray(*this->exclude_destination_matchers));

  }
  to_value_result.Set("ProxyList", json_schema_compiler::util::CreateValueFromArray(this->proxy_list));

  if (this->conditions) {
    to_value_result.Set("Conditions", json_schema_compiler::util::CreateValueFromArray(*this->conditions));

  }

  return to_value_result;
}



}  // namespace proxy_override_rules_private
}  // namespace api
}  // namespace extensions

