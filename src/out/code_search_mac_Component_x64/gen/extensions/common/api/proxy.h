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

#ifndef EXTENSIONS_COMMON_API_PROXY_H__
#define EXTENSIONS_COMMON_API_PROXY_H__

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
namespace proxy {

//
// Properties
//

//
// Types
//

enum class Scheme {
  kNone = 0,
  kHttp,
  kHttps,
  kQuic,
  kSocks4,
  kSocks5,
  kMaxValue = kSocks5,
};


const char* ToString(Scheme as_enum);
Scheme ParseScheme(std::string_view as_string);
std::u16string GetSchemeParseError(std::string_view as_string);

enum class Mode {
  kNone = 0,
  kDirect,
  kAutoDetect,
  kPacScript,
  kFixedServers,
  kSystem,
  kMaxValue = kSystem,
};


const char* ToString(Mode as_enum);
Mode ParseMode(std::string_view as_string);
std::u16string GetModeParseError(std::string_view as_string);

// An object encapsulating a single proxy server's specification.
struct ProxyServer {
  ProxyServer();
  ~ProxyServer();
  ProxyServer(const ProxyServer&) = delete;
  ProxyServer& operator=(const ProxyServer&) = delete;
  ProxyServer(ProxyServer&& rhs) noexcept;
  ProxyServer& operator=(ProxyServer&& rhs) noexcept;

  // Populates a ProxyServer object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ProxyServer& out);

  // Populates a ProxyServer object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::DictValue& value, ProxyServer& out);

  // Creates a deep copy of ProxyServer.
  ProxyServer Clone() const;

  // Creates a ProxyServer object from a base::DictValue, or nullopt on failure.
  static std::optional<ProxyServer> FromValue(const base::DictValue& value);

  // Creates a ProxyServer object from a base::Value, or nullopt on failure.
  static std::optional<ProxyServer> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisProxyServer object.
  base::DictValue ToValue() const;

  // The scheme (protocol) of the proxy server itself. Defaults to 'http'.
  Scheme scheme;

  // The hostname or IP address of the proxy server. Hostnames must be in ASCII
  // (in Punycode format). IDNA is not supported, yet.
  std::string host;

  // The port of the proxy server. Defaults to a port that depends on the scheme.
  std::optional<int> port;

};

// An object encapsulating the set of proxy rules for all protocols. Use either
// 'singleProxy' or (a subset of) 'proxyForHttp', 'proxyForHttps', 'proxyForFtp'
// and 'fallbackProxy'.
struct ProxyRules {
  ProxyRules();
  ~ProxyRules();
  ProxyRules(const ProxyRules&) = delete;
  ProxyRules& operator=(const ProxyRules&) = delete;
  ProxyRules(ProxyRules&& rhs) noexcept;
  ProxyRules& operator=(ProxyRules&& rhs) noexcept;

  // Populates a ProxyRules object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, ProxyRules& out);

  // Populates a ProxyRules object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::DictValue& value, ProxyRules& out);

  // Creates a deep copy of ProxyRules.
  ProxyRules Clone() const;

  // Creates a ProxyRules object from a base::DictValue, or nullopt on failure.
  static std::optional<ProxyRules> FromValue(const base::DictValue& value);

  // Creates a ProxyRules object from a base::Value, or nullopt on failure.
  static std::optional<ProxyRules> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisProxyRules object.
  base::DictValue ToValue() const;

  // The proxy server to be used for all per-URL requests (that is http, https,
  // and ftp).
  std::optional<ProxyServer> single_proxy;

  // The proxy server to be used for HTTP requests.
  std::optional<ProxyServer> proxy_for_http;

  // The proxy server to be used for HTTPS requests.
  std::optional<ProxyServer> proxy_for_https;

  // The proxy server to be used for FTP requests.
  std::optional<ProxyServer> proxy_for_ftp;

  // The proxy server to be used for everthing else or if any of the specific
  // proxyFor... is not specified.
  std::optional<ProxyServer> fallback_proxy;

  // List of servers to connect to without a proxy server.
  std::optional<std::vector<std::string>> bypass_list;

};

// An object holding proxy auto-config information. Exactly one of the fields
// should be non-empty.
struct PacScript {
  PacScript();
  ~PacScript();
  PacScript(const PacScript&) = delete;
  PacScript& operator=(const PacScript&) = delete;
  PacScript(PacScript&& rhs) noexcept;
  PacScript& operator=(PacScript&& rhs) noexcept;

  // Populates a PacScript object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, PacScript& out);

  // Populates a PacScript object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::DictValue& value, PacScript& out);

  // Creates a deep copy of PacScript.
  PacScript Clone() const;

  // Creates a PacScript object from a base::DictValue, or nullopt on failure.
  static std::optional<PacScript> FromValue(const base::DictValue& value);

  // Creates a PacScript object from a base::Value, or nullopt on failure.
  static std::optional<PacScript> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisPacScript object.
  base::DictValue ToValue() const;

  // URL of the PAC file to be used.
  std::optional<std::string> url;

  // A PAC script.
  std::optional<std::string> data;

  // If true, an invalid PAC script will prevent the network stack from falling
  // back to direct connections. Defaults to false.
  std::optional<bool> mandatory;

};

// An object encapsulating a complete proxy configuration.
struct ProxyConfig {
  ProxyConfig();
  ~ProxyConfig();
  ProxyConfig(const ProxyConfig&) = delete;
  ProxyConfig& operator=(const ProxyConfig&) = delete;
  ProxyConfig(ProxyConfig&& rhs) noexcept;
  ProxyConfig& operator=(ProxyConfig&& rhs) noexcept;

  // Populates a ProxyConfig object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ProxyConfig& out);

  // Populates a ProxyConfig object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::DictValue& value, ProxyConfig& out);

  // Creates a deep copy of ProxyConfig.
  ProxyConfig Clone() const;

  // Creates a ProxyConfig object from a base::DictValue, or nullopt on failure.
  static std::optional<ProxyConfig> FromValue(const base::DictValue& value);

  // Creates a ProxyConfig object from a base::Value, or nullopt on failure.
  static std::optional<ProxyConfig> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisProxyConfig object.
  base::DictValue ToValue() const;

  // The proxy rules describing this configuration. Use this for 'fixed_servers'
  // mode.
  std::optional<ProxyRules> rules;

  // The proxy auto-config (PAC) script for this configuration. Use this for
  // 'pac_script' mode.
  std::optional<PacScript> pac_script;

  // 'direct' = Never use a proxy<br>'auto_detect' = Auto detect proxy
  // settings<br>'pac_script' = Use specified PAC script<br>'fixed_servers' =
  // Manually specify proxy servers<br>'system' = Use system proxy settings
  Mode mode;

};


//
// Events
//

namespace OnProxyError {

extern const char kEventName[];  // "proxy.onProxyError"

struct Details {
  Details();
  ~Details();
  Details(const Details&) = delete;
  Details& operator=(const Details&) = delete;
  Details(Details&& rhs) noexcept;
  Details& operator=(Details&& rhs) noexcept;

  // Returns a new base::DictValue representing the serialized form of
  // thisDetails object.
  base::DictValue ToValue() const;

  // If true, the error was fatal and the network transaction was aborted.
  // Otherwise, a direct connection is used instead.
  bool fatal;

  // The error description.
  std::string error;

  // Additional details about the error such as a JavaScript runtime error.
  std::string details;

};


base::ListValue Create(const Details& details);
}  // namespace OnProxyError

}  // namespace proxy
}  // namespace api
}  // namespace extensions

#endif  // EXTENSIONS_COMMON_API_PROXY_H__
