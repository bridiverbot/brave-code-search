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

#include "brave/components/ai_chat/core/browser/brave_search_responses.h"

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

namespace ai_chat {
namespace brave_search_responses {
//
// Types
//

Answer::Answer()
 {}

Answer::~Answer() = default;
Answer::Answer(Answer&& rhs) noexcept = default;
Answer& Answer::operator=(Answer&& rhs) noexcept = default;
Answer Answer::Clone() const {
  Answer out;
  out.text = text;
  return out;
}

// static
bool Answer::Populate(
    const base::DictValue& dict, Answer& out) {
  const base::Value* text_value = dict.Find("text");
  if (!text_value) {
    return false;
  }
  {
    auto* temp = (*text_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.text = *temp;
  }

  return true;
}

// static
bool Answer::Populate(
    const base::Value& value, Answer& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<Answer> Answer::FromValue(const base::DictValue& value) {
  Answer out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<Answer> Answer::FromValue(const base::Value& value) {
  Answer out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue Answer::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("text", this->text);


  return to_value_result;
}


QuerySummary::QuerySummary()
 {}

QuerySummary::~QuerySummary() = default;
QuerySummary::QuerySummary(QuerySummary&& rhs) noexcept = default;
QuerySummary& QuerySummary::operator=(QuerySummary&& rhs) noexcept = default;
QuerySummary QuerySummary::Clone() const {
  QuerySummary out;
  out.answer.reserve(answer.size());
  for (const auto& element : answer) {
    json_schema_compiler::util::AppendToContainer(out.answer, element.Clone());
  }
  out.query = query;
  return out;
}

// static
bool QuerySummary::Populate(
    const base::DictValue& dict, QuerySummary& out) {
  const base::Value* answer_value = dict.Find("answer");
  if (!answer_value) {
    return false;
  }
  {
    if (!(*answer_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*answer_value).GetList(), out.answer)) {
        return false;
      }
    }
  }

  const base::Value* query_value = dict.Find("query");
  if (!query_value) {
    return false;
  }
  {
    auto* temp = (*query_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.query = *temp;
  }

  return true;
}

// static
bool QuerySummary::Populate(
    const base::Value& value, QuerySummary& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<QuerySummary> QuerySummary::FromValue(const base::DictValue& value) {
  QuerySummary out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<QuerySummary> QuerySummary::FromValue(const base::Value& value) {
  QuerySummary out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue QuerySummary::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("answer", json_schema_compiler::util::CreateValueFromArray(this->answer));

  to_value_result.Set("query", this->query);


  return to_value_result;
}


QuerySummaryResponse::QuerySummaryResponse()
 {}

QuerySummaryResponse::~QuerySummaryResponse() = default;
QuerySummaryResponse::QuerySummaryResponse(QuerySummaryResponse&& rhs) noexcept = default;
QuerySummaryResponse& QuerySummaryResponse::operator=(QuerySummaryResponse&& rhs) noexcept = default;
QuerySummaryResponse QuerySummaryResponse::Clone() const {
  QuerySummaryResponse out;
  out.conversation.reserve(conversation.size());
  for (const auto& element : conversation) {
    json_schema_compiler::util::AppendToContainer(out.conversation, element.Clone());
  }
  return out;
}

// static
bool QuerySummaryResponse::Populate(
    const base::DictValue& dict, QuerySummaryResponse& out) {
  const base::Value* conversation_value = dict.Find("conversation");
  if (!conversation_value) {
    return false;
  }
  {
    if (!(*conversation_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*conversation_value).GetList(), out.conversation)) {
        return false;
      }
    }
  }

  return true;
}

// static
bool QuerySummaryResponse::Populate(
    const base::Value& value, QuerySummaryResponse& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<QuerySummaryResponse> QuerySummaryResponse::FromValue(const base::DictValue& value) {
  QuerySummaryResponse out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<QuerySummaryResponse> QuerySummaryResponse::FromValue(const base::Value& value) {
  QuerySummaryResponse out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue QuerySummaryResponse::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("conversation", json_schema_compiler::util::CreateValueFromArray(this->conversation));


  return to_value_result;
}



}  // namespace brave_search_responses
}  // namespace ai_chat

