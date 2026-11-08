// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/proxy.json
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../extensions/common/api/proxy.json --root=../../ --destdir=gen --namespace=extensions::api::%(namespace)s --generator=cpp --include-rules=

#include "extensions/common/api/proxy.h"

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
namespace proxy {
//
// Properties
//

//
// Types
//

const char* ToString(Scheme enum_param) {
  switch (enum_param) {
    case Scheme::kHttp:
      return "http";
    case Scheme::kHttps:
      return "https";
    case Scheme::kQuic:
      return "quic";
    case Scheme::kSocks4:
      return "socks4";
    case Scheme::kSocks5:
      return "socks5";
    case Scheme::kNone:
      return "";
  }
  NOTREACHED();
}

Scheme ParseScheme(std::string_view enum_string) {
  if (enum_string == "http")
    return Scheme::kHttp;
  if (enum_string == "https")
    return Scheme::kHttps;
  if (enum_string == "quic")
    return Scheme::kQuic;
  if (enum_string == "socks4")
    return Scheme::kSocks4;
  if (enum_string == "socks5")
    return Scheme::kSocks5;
  return Scheme::kNone;
}

std::u16string GetSchemeParseError(std::string_view enum_string) {
  return u"expected \"http\" or \"https\" or \"quic\" or \"socks4\" or \"socks5\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(Mode enum_param) {
  switch (enum_param) {
    case Mode::kDirect:
      return "direct";
    case Mode::kAutoDetect:
      return "auto_detect";
    case Mode::kPacScript:
      return "pac_script";
    case Mode::kFixedServers:
      return "fixed_servers";
    case Mode::kSystem:
      return "system";
    case Mode::kNone:
      return "";
  }
  NOTREACHED();
}

Mode ParseMode(std::string_view enum_string) {
  if (enum_string == "direct")
    return Mode::kDirect;
  if (enum_string == "auto_detect")
    return Mode::kAutoDetect;
  if (enum_string == "pac_script")
    return Mode::kPacScript;
  if (enum_string == "fixed_servers")
    return Mode::kFixedServers;
  if (enum_string == "system")
    return Mode::kSystem;
  return Mode::kNone;
}

std::u16string GetModeParseError(std::string_view enum_string) {
  return u"expected \"direct\" or \"auto_detect\" or \"pac_script\" or \"fixed_servers\" or \"system\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


ProxyServer::ProxyServer()
: scheme() {}

ProxyServer::~ProxyServer() = default;
ProxyServer::ProxyServer(ProxyServer&& rhs) noexcept = default;
ProxyServer& ProxyServer::operator=(ProxyServer&& rhs) noexcept = default;
ProxyServer ProxyServer::Clone() const {
  ProxyServer out;
  out.scheme = scheme;
  out.host = host;
  out.port = port;
  return out;
}

// static
bool ProxyServer::Populate(
    const base::DictValue& dict, ProxyServer& out) {
  out.scheme = Scheme();
  const base::Value* scheme_value = dict.Find("scheme");
  if (scheme_value) {
    {
      const std::string* scheme_as_string = (*scheme_value).GetIfString();
      if (!scheme_as_string) {
        return false;
      }
      out.scheme = ParseScheme(*scheme_as_string);
      if (out.scheme == Scheme()) {
        return false;
      }
    }
    } else {
    out.scheme = Scheme();
  }

  const base::Value* host_value = dict.Find("host");
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

  const base::Value* port_value = dict.Find("port");
  if (port_value) {
    {
      auto temp = (*port_value).GetIfInt();
      if (!temp.has_value()) {
        out.port = std::nullopt;
        return false;
      }
      out.port = *temp;
    }
  }

  return true;
}

// static
bool ProxyServer::Populate(
    const base::Value& value, ProxyServer& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<ProxyServer> ProxyServer::FromValue(const base::DictValue& value) {
  ProxyServer out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<ProxyServer> ProxyServer::FromValue(const base::Value& value) {
  ProxyServer out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue ProxyServer::ToValue() const {
  base::DictValue to_value_result;

  if (this->scheme != Scheme()) {
    to_value_result.Set("scheme", proxy::ToString(this->scheme));

  }
  to_value_result.Set("host", this->host);

  if (this->port) {
    to_value_result.Set("port", *this->port);

  }

  return to_value_result;
}


ProxyRules::ProxyRules()
 {}

ProxyRules::~ProxyRules() = default;
ProxyRules::ProxyRules(ProxyRules&& rhs) noexcept = default;
ProxyRules& ProxyRules::operator=(ProxyRules&& rhs) noexcept = default;
ProxyRules ProxyRules::Clone() const {
  ProxyRules out;
  if (single_proxy) {
    out.single_proxy = single_proxy->Clone();
  }
  if (proxy_for_http) {
    out.proxy_for_http = proxy_for_http->Clone();
  }
  if (proxy_for_https) {
    out.proxy_for_https = proxy_for_https->Clone();
  }
  if (proxy_for_ftp) {
    out.proxy_for_ftp = proxy_for_ftp->Clone();
  }
  if (fallback_proxy) {
    out.fallback_proxy = fallback_proxy->Clone();
  }
  out.bypass_list = bypass_list;
  return out;
}

// static
bool ProxyRules::Populate(
    const base::DictValue& dict, ProxyRules& out) {
  const base::Value* single_proxy_value = dict.Find("singleProxy");
  if (single_proxy_value) {
    {
      if (!(*single_proxy_value).is_dict()) {
        return false;
      }
      else {
        ProxyServer temp;
        if (!ProxyServer::Populate((*single_proxy_value).GetDict(), temp))
          return false;
        out.single_proxy = std::move(temp);
      }
    }
  }

  const base::Value* proxy_for_http_value = dict.Find("proxyForHttp");
  if (proxy_for_http_value) {
    {
      if (!(*proxy_for_http_value).is_dict()) {
        return false;
      }
      else {
        ProxyServer temp;
        if (!ProxyServer::Populate((*proxy_for_http_value).GetDict(), temp))
          return false;
        out.proxy_for_http = std::move(temp);
      }
    }
  }

  const base::Value* proxy_for_https_value = dict.Find("proxyForHttps");
  if (proxy_for_https_value) {
    {
      if (!(*proxy_for_https_value).is_dict()) {
        return false;
      }
      else {
        ProxyServer temp;
        if (!ProxyServer::Populate((*proxy_for_https_value).GetDict(), temp))
          return false;
        out.proxy_for_https = std::move(temp);
      }
    }
  }

  const base::Value* proxy_for_ftp_value = dict.Find("proxyForFtp");
  if (proxy_for_ftp_value) {
    {
      if (!(*proxy_for_ftp_value).is_dict()) {
        return false;
      }
      else {
        ProxyServer temp;
        if (!ProxyServer::Populate((*proxy_for_ftp_value).GetDict(), temp))
          return false;
        out.proxy_for_ftp = std::move(temp);
      }
    }
  }

  const base::Value* fallback_proxy_value = dict.Find("fallbackProxy");
  if (fallback_proxy_value) {
    {
      if (!(*fallback_proxy_value).is_dict()) {
        return false;
      }
      else {
        ProxyServer temp;
        if (!ProxyServer::Populate((*fallback_proxy_value).GetDict(), temp))
          return false;
        out.fallback_proxy = std::move(temp);
      }
    }
  }

  const base::Value* bypass_list_value = dict.Find("bypassList");
  if (bypass_list_value) {
    {
      if (!(*bypass_list_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*bypass_list_value).GetList(), out.bypass_list)) {
          return false;
        }
      }
    }
  }

  return true;
}

// static
bool ProxyRules::Populate(
    const base::Value& value, ProxyRules& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<ProxyRules> ProxyRules::FromValue(const base::DictValue& value) {
  ProxyRules out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<ProxyRules> ProxyRules::FromValue(const base::Value& value) {
  ProxyRules out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue ProxyRules::ToValue() const {
  base::DictValue to_value_result;

  if (this->single_proxy) {
    to_value_result.Set("singleProxy", (this->single_proxy)->ToValue());

  }
  if (this->proxy_for_http) {
    to_value_result.Set("proxyForHttp", (this->proxy_for_http)->ToValue());

  }
  if (this->proxy_for_https) {
    to_value_result.Set("proxyForHttps", (this->proxy_for_https)->ToValue());

  }
  if (this->proxy_for_ftp) {
    to_value_result.Set("proxyForFtp", (this->proxy_for_ftp)->ToValue());

  }
  if (this->fallback_proxy) {
    to_value_result.Set("fallbackProxy", (this->fallback_proxy)->ToValue());

  }
  if (this->bypass_list) {
    to_value_result.Set("bypassList", json_schema_compiler::util::CreateValueFromArray(*this->bypass_list));

  }

  return to_value_result;
}


PacScript::PacScript()
 {}

PacScript::~PacScript() = default;
PacScript::PacScript(PacScript&& rhs) noexcept = default;
PacScript& PacScript::operator=(PacScript&& rhs) noexcept = default;
PacScript PacScript::Clone() const {
  PacScript out;
  out.url = url;
  out.data = data;
  out.mandatory = mandatory;
  return out;
}

// static
bool PacScript::Populate(
    const base::DictValue& dict, PacScript& out) {
  const base::Value* url_value = dict.Find("url");
  if (url_value) {
    {
      auto* temp = (*url_value).GetIfString();
      if (!temp) {
        out.url = std::nullopt;
        return false;
      }
      out.url = *temp;
    }
  }

  const base::Value* data_value = dict.Find("data");
  if (data_value) {
    {
      auto* temp = (*data_value).GetIfString();
      if (!temp) {
        out.data = std::nullopt;
        return false;
      }
      out.data = *temp;
    }
  }

  const base::Value* mandatory_value = dict.Find("mandatory");
  if (mandatory_value) {
    {
      auto temp = (*mandatory_value).GetIfBool();
      if (!temp.has_value()) {
        out.mandatory = std::nullopt;
        return false;
      }
      out.mandatory = *temp;
    }
  }

  return true;
}

// static
bool PacScript::Populate(
    const base::Value& value, PacScript& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<PacScript> PacScript::FromValue(const base::DictValue& value) {
  PacScript out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<PacScript> PacScript::FromValue(const base::Value& value) {
  PacScript out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue PacScript::ToValue() const {
  base::DictValue to_value_result;

  if (this->url) {
    to_value_result.Set("url", *this->url);

  }
  if (this->data) {
    to_value_result.Set("data", *this->data);

  }
  if (this->mandatory) {
    to_value_result.Set("mandatory", *this->mandatory);

  }

  return to_value_result;
}


ProxyConfig::ProxyConfig()
: mode() {}

ProxyConfig::~ProxyConfig() = default;
ProxyConfig::ProxyConfig(ProxyConfig&& rhs) noexcept = default;
ProxyConfig& ProxyConfig::operator=(ProxyConfig&& rhs) noexcept = default;
ProxyConfig ProxyConfig::Clone() const {
  ProxyConfig out;
  if (rules) {
    out.rules = rules->Clone();
  }
  if (pac_script) {
    out.pac_script = pac_script->Clone();
  }
  out.mode = mode;
  return out;
}

// static
bool ProxyConfig::Populate(
    const base::DictValue& dict, ProxyConfig& out) {
  const base::Value* rules_value = dict.Find("rules");
  if (rules_value) {
    {
      if (!(*rules_value).is_dict()) {
        return false;
      }
      else {
        ProxyRules temp;
        if (!ProxyRules::Populate((*rules_value).GetDict(), temp))
          return false;
        out.rules = std::move(temp);
      }
    }
  }

  const base::Value* pac_script_value = dict.Find("pacScript");
  if (pac_script_value) {
    {
      if (!(*pac_script_value).is_dict()) {
        return false;
      }
      else {
        PacScript temp;
        if (!PacScript::Populate((*pac_script_value).GetDict(), temp))
          return false;
        out.pac_script = std::move(temp);
      }
    }
  }

  const base::Value* mode_value = dict.Find("mode");
  if (!mode_value) {
    return false;
  }
  {
    const std::string* mode_as_string = (*mode_value).GetIfString();
    if (!mode_as_string) {
      return false;
    }
    out.mode = ParseMode(*mode_as_string);
    if (out.mode == Mode()) {
      return false;
    }
  }

  return true;
}

// static
bool ProxyConfig::Populate(
    const base::Value& value, ProxyConfig& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<ProxyConfig> ProxyConfig::FromValue(const base::DictValue& value) {
  ProxyConfig out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<ProxyConfig> ProxyConfig::FromValue(const base::Value& value) {
  ProxyConfig out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue ProxyConfig::ToValue() const {
  base::DictValue to_value_result;

  if (this->rules) {
    to_value_result.Set("rules", (this->rules)->ToValue());

  }
  if (this->pac_script) {
    to_value_result.Set("pacScript", (this->pac_script)->ToValue());

  }
  to_value_result.Set("mode", proxy::ToString(this->mode));


  return to_value_result;
}



//
// Events
//

namespace OnProxyError {

const char kEventName[] = "proxy.onProxyError";

Details::Details()
: fatal(false) {}

Details::~Details() = default;
Details::Details(Details&& rhs) noexcept = default;
Details& Details::operator=(Details&& rhs) noexcept = default;
base::DictValue Details::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("fatal", this->fatal);

  to_value_result.Set("error", this->error);

  to_value_result.Set("details", this->details);


  return to_value_result;
}


base::ListValue Create(const Details& details) {
  base::ListValue create_results;
  create_results.reserve(1);
  create_results.Append((details).ToValue());

  return create_results;
}

}  // namespace OnProxyError

}  // namespace proxy
}  // namespace api
}  // namespace extensions

