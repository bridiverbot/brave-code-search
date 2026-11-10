// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   brave/components/ai_chat/core/browser/brave_search_responses.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../brave/components/ai_chat/core/browser/brave_search_responses.idl --root=../../ --destdir=gen --namespace=ai_chat::%(namespace)s --generator=cpp --include-rules=

#ifndef BRAVE_COMPONENTS_AI_CHAT_CORE_BROWSER_BRAVE_SEARCH_RESPONSES_H__
#define BRAVE_COMPONENTS_AI_CHAT_CORE_BROWSER_BRAVE_SEARCH_RESPONSES_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <optional>
#include <string>
#include <vector>

#include "base/values.h"

namespace ai_chat {
namespace brave_search_responses {

//
// Types
//

struct Answer {
  Answer();
  ~Answer();
  Answer(const Answer&) = delete;
  Answer& operator=(const Answer&) = delete;
  Answer(Answer&& rhs) noexcept;
  Answer& operator=(Answer&& rhs) noexcept;

  // Populates a Answer object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, Answer& out);

  // Populates a Answer object from a Dict& instance. Returns whether |out| was
  // successfully populated.
  static bool Populate(const base::DictValue& value, Answer& out);

  // Creates a deep copy of Answer.
  Answer Clone() const;

  // Creates a Answer object from a base::DictValue, or nullopt on failure.
  static std::optional<Answer> FromValue(const base::DictValue& value);

  // Creates a Answer object from a base::Value, or nullopt on failure.
  static std::optional<Answer> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisAnswer object.
  base::DictValue ToValue() const;

  std::string text;

};

struct QuerySummary {
  QuerySummary();
  ~QuerySummary();
  QuerySummary(const QuerySummary&) = delete;
  QuerySummary& operator=(const QuerySummary&) = delete;
  QuerySummary(QuerySummary&& rhs) noexcept;
  QuerySummary& operator=(QuerySummary&& rhs) noexcept;

  // Populates a QuerySummary object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, QuerySummary& out);

  // Populates a QuerySummary object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::DictValue& value, QuerySummary& out);

  // Creates a deep copy of QuerySummary.
  QuerySummary Clone() const;

  // Creates a QuerySummary object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<QuerySummary> FromValue(const base::DictValue& value);

  // Creates a QuerySummary object from a base::Value, or nullopt on failure.
  static std::optional<QuerySummary> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisQuerySummary object.
  base::DictValue ToValue() const;

  std::vector<Answer> answer;

  std::string query;

};

struct QuerySummaryResponse {
  QuerySummaryResponse();
  ~QuerySummaryResponse();
  QuerySummaryResponse(const QuerySummaryResponse&) = delete;
  QuerySummaryResponse& operator=(const QuerySummaryResponse&) = delete;
  QuerySummaryResponse(QuerySummaryResponse&& rhs) noexcept;
  QuerySummaryResponse& operator=(QuerySummaryResponse&& rhs) noexcept;

  // Populates a QuerySummaryResponse object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, QuerySummaryResponse& out);

  // Populates a QuerySummaryResponse object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::DictValue& value, QuerySummaryResponse& out);

  // Creates a deep copy of QuerySummaryResponse.
  QuerySummaryResponse Clone() const;

  // Creates a QuerySummaryResponse object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<QuerySummaryResponse> FromValue(const base::DictValue& value);

  // Creates a QuerySummaryResponse object from a base::Value, or nullopt on
  // failure.
  static std::optional<QuerySummaryResponse> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisQuerySummaryResponse object.
  base::DictValue ToValue() const;

  std::vector<QuerySummary> conversation;

};


}  // namespace brave_search_responses
}  // namespace ai_chat

#endif  // BRAVE_COMPONENTS_AI_CHAT_CORE_BROWSER_BRAVE_SEARCH_RESPONSES_H__
