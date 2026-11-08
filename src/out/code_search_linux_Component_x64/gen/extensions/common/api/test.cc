// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/test.json
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../extensions/common/api/test.json --root=../../ --destdir=gen --namespace=extensions::api::%(namespace)s --generator=cpp --include-rules=

#include "extensions/common/api/test.h"

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

namespace extensions {
namespace api {
namespace test {
//
// Functions
//

namespace GetConfig {

Results::TestConfig::FtpServer::FtpServer()
: port(0) {}

Results::TestConfig::FtpServer::~FtpServer() = default;
Results::TestConfig::FtpServer::FtpServer(FtpServer&& rhs) noexcept = default;
Results::TestConfig::FtpServer& Results::TestConfig::FtpServer::operator=(FtpServer&& rhs) noexcept = default;
base::DictValue Results::TestConfig::FtpServer::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("port", this->port);


  return to_value_result;
}


Results::TestConfig::TestServer::TestServer()
: port(0) {}

Results::TestConfig::TestServer::~TestServer() = default;
Results::TestConfig::TestServer::TestServer(TestServer&& rhs) noexcept = default;
Results::TestConfig::TestServer& Results::TestConfig::TestServer::operator=(TestServer&& rhs) noexcept = default;
base::DictValue Results::TestConfig::TestServer::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("port", this->port);


  return to_value_result;
}


Results::TestConfig::LoginStatus::LoginStatus()
 {}

Results::TestConfig::LoginStatus::~LoginStatus() = default;
Results::TestConfig::LoginStatus::LoginStatus(LoginStatus&& rhs) noexcept = default;
Results::TestConfig::LoginStatus& Results::TestConfig::LoginStatus::operator=(LoginStatus&& rhs) noexcept = default;
base::DictValue Results::TestConfig::LoginStatus::ToValue() const {
  base::DictValue to_value_result;

  if (this->is_logged_in) {
    to_value_result.Set("isLoggedIn", *this->is_logged_in);

  }
  if (this->is_screen_locked) {
    to_value_result.Set("isScreenLocked", *this->is_screen_locked);

  }

  return to_value_result;
}



Results::TestConfig::TestConfig()
 {}

Results::TestConfig::~TestConfig() = default;
Results::TestConfig::TestConfig(TestConfig&& rhs) noexcept = default;
Results::TestConfig& Results::TestConfig::operator=(TestConfig&& rhs) noexcept = default;
base::DictValue Results::TestConfig::ToValue() const {
  base::DictValue to_value_result;

  if (this->custom_arg) {
    to_value_result.Set("customArg", *this->custom_arg);

  }
  if (this->ftp_server) {
    to_value_result.Set("ftpServer", (this->ftp_server)->ToValue());

  }
  if (this->test_server) {
    to_value_result.Set("testServer", (this->test_server)->ToValue());

  }
  if (this->test_data_directory) {
    to_value_result.Set("testDataDirectory", *this->test_data_directory);

  }
  if (this->test_web_socket_port) {
    to_value_result.Set("testWebSocketPort", *this->test_web_socket_port);

  }
  if (this->test_web_transport_port) {
    to_value_result.Set("testWebTransportPort", *this->test_web_transport_port);

  }
  if (this->login_status) {
    to_value_result.Set("loginStatus", (this->login_status)->ToValue());

  }

  return to_value_result;
}


base::ListValue Results::Create(const TestConfig& test_config) {
  base::ListValue create_results;
  create_results.reserve(1);
  create_results.Append((test_config).ToValue());

  return create_results;
}
}  // namespace GetConfig

namespace NotifyFail {

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
    const base::Value& message_value = args[0];
    {
      auto* temp = message_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.message = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace NotifyFail

namespace NotifyPass {

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
    const base::Value& message_value = args[0];
    {
      auto* temp = message_value.GetIfString();
      if (!temp) {
        params.message = std::nullopt;
        return std::nullopt;
      }
      params.message = *temp;
    }
  }

  return params;
}


}  // namespace NotifyPass

namespace Log {

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
    const base::Value& message_value = args[0];
    {
      auto* temp = message_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.message = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace Log

namespace OpenFileUrl {

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
    const base::Value& url_value = args[0];
    {
      auto* temp = url_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.url = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace OpenFileUrl

namespace PassMessage {

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
    const base::Value& message_value = args[0];
    {
      auto* temp = message_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.message = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::ListValue Results::Create(const std::string& response) {
  base::ListValue create_results;
  create_results.reserve(1);
  create_results.Append(response);

  return create_results;
}
}  // namespace PassMessage

namespace SendScriptResult {

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
    const base::Value& result_value = args[0];
    {
      params.result = result_value.Clone();
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
}  // namespace SendScriptResult

namespace NotifyTestStarted {

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
    const base::Value& test_name_value = args[0];
    {
      auto* temp = test_name_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.test_name = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace NotifyTestStarted

namespace NotifyTestFinished {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::ListValue& args) {
  if (args.size() < 4 || args.size() > 5) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& test_name_value = args[0];
    {
      auto* temp = test_name_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.test_name = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& result_value = args[1];
    {
      auto temp = result_value.GetIfBool();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.result = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (2 < args.size() &&
      !args[2].is_none()) {
    const base::Value& remaining_tests_value = args[2];
    {
      auto temp = remaining_tests_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.remaining_tests = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (3 < args.size() &&
      !args[3].is_none()) {
    const base::Value& assertion_description_value = args[3];
    {
      auto* temp = assertion_description_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.assertion_description = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (4 < args.size() &&
      !args[4].is_none()) {
    const base::Value& message_value = args[4];
    {
      auto* temp = message_value.GetIfString();
      if (!temp) {
        params.message = std::nullopt;
        return std::nullopt;
      }
      params.message = *temp;
    }
  }

  return params;
}


}  // namespace NotifyTestFinished

namespace WaitForRoundTrip {

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
    const base::Value& message_value = args[0];
    {
      auto* temp = message_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.message = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::ListValue Results::Create(const std::string& message) {
  base::ListValue create_results;
  create_results.reserve(1);
  create_results.Append(message);

  return create_results;
}
}  // namespace WaitForRoundTrip

//
// Events
//

namespace OnMessage {

const char kEventName[] = "test.onMessage";

Info::Info()
: last_message(false) {}

Info::~Info() = default;
Info::Info(Info&& rhs) noexcept = default;
Info& Info::operator=(Info&& rhs) noexcept = default;
base::DictValue Info::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("data", this->data);

  to_value_result.Set("lastMessage", this->last_message);


  return to_value_result;
}


base::ListValue Create(const Info& info) {
  base::ListValue create_results;
  create_results.reserve(1);
  create_results.Append((info).ToValue());

  return create_results;
}

}  // namespace OnMessage

namespace OnTestStarted {

const char kEventName[] = "test.onTestStarted";

Info::Info()
 {}

Info::~Info() = default;
Info::Info(Info&& rhs) noexcept = default;
Info& Info::operator=(Info&& rhs) noexcept = default;
base::DictValue Info::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("testName", this->test_name);


  return to_value_result;
}


base::ListValue Create(const Info& info) {
  base::ListValue create_results;
  create_results.reserve(1);
  create_results.Append((info).ToValue());

  return create_results;
}

}  // namespace OnTestStarted

namespace OnTestFinished {

const char kEventName[] = "test.onTestFinished";

Info::Info()
: result(false),
remaining_tests(0) {}

Info::~Info() = default;
Info::Info(Info&& rhs) noexcept = default;
Info& Info::operator=(Info&& rhs) noexcept = default;
base::DictValue Info::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("testName", this->test_name);

  to_value_result.Set("result", this->result);

  to_value_result.Set("remainingTests", this->remaining_tests);

  to_value_result.Set("assertionDescription", this->assertion_description);

  if (this->message) {
    to_value_result.Set("message", *this->message);

  }

  return to_value_result;
}


base::ListValue Create(const Info& info) {
  base::ListValue create_results;
  create_results.reserve(1);
  create_results.Append((info).ToValue());

  return create_results;
}

}  // namespace OnTestFinished

}  // namespace test
}  // namespace api
}  // namespace extensions

