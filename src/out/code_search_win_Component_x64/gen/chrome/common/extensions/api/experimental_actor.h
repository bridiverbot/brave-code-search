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

#ifndef CHROME_COMMON_EXTENSIONS_API_EXPERIMENTAL_ACTOR_H__
#define CHROME_COMMON_EXTENSIONS_API_EXPERIMENTAL_ACTOR_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <optional>
#include <string>
#include <vector>

#include "base/values.h"

namespace extensions {
namespace api {
namespace experimental_actor {

//
// Functions
//

namespace StopTask {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // id of the task to stop.
  int task_id;


 private:
  Params();
};

namespace Results {

base::ListValue Create();
}  // namespace Results

}  // namespace StopTask

namespace CreateTask {

namespace Results {

base::ListValue Create(int task_id);
}  // namespace Results

}  // namespace CreateTask

namespace PerformActions {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // encoded optimization_guide.proto.Actions
  std::vector<uint8_t> actions_proto;


 private:
  Params();
};

namespace Results {

base::ListValue Create(const std::vector<uint8_t>& data);
}  // namespace Results

}  // namespace PerformActions

namespace RequestTabObservation {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The session tabId to observe.
  int tab_id;


 private:
  Params();
};

namespace Results {

base::ListValue Create(const std::vector<uint8_t>& data);
}  // namespace Results

}  // namespace RequestTabObservation

}  // namespace experimental_actor
}  // namespace api
}  // namespace extensions

#endif  // CHROME_COMMON_EXTENSIONS_API_EXPERIMENTAL_ACTOR_H__
