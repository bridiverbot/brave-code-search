// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/experimental_actor.webidl
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../chrome/common/extensions/api/experimental_actor.webidl --root=../../ --destdir=gen --namespace=extensions::api::%(namespace)s --generator=cpp --include-rules=extensions/common/api:extensions::api::%(namespace)s

#include "chrome/common/extensions/api/experimental_actor.h"

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
namespace experimental_actor {
//
// Functions
//

namespace StopTask {

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
    const base::Value& task_id_value = args[0];
    {
      auto temp = task_id_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.task_id = *temp;
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
}  // namespace StopTask

namespace CreateTask {

base::ListValue Results::Create(int task_id) {
  base::ListValue create_results;
  create_results.reserve(1);
  create_results.Append(task_id);

  return create_results;
}
}  // namespace CreateTask

namespace PerformActions {

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
    const base::Value& actions_proto_value = args[0];
    {
      if (!actions_proto_value.is_blob()) {
        return std::nullopt;
      }
      else {
        params.actions_proto = actions_proto_value.GetBlob();
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::ListValue Results::Create(const std::vector<uint8_t>& data) {
  base::ListValue create_results;
  create_results.reserve(1);
  create_results.Append(base::Value(data));

  return create_results;
}
}  // namespace PerformActions

namespace RequestTabObservation {

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
    const base::Value& tab_id_value = args[0];
    {
      auto temp = tab_id_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.tab_id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::ListValue Results::Create(const std::vector<uint8_t>& data) {
  base::ListValue create_results;
  create_results.reserve(1);
  create_results.Append(base::Value(data));

  return create_results;
}
}  // namespace RequestTabObservation

}  // namespace experimental_actor
}  // namespace api
}  // namespace extensions

