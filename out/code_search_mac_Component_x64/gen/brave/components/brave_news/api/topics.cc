// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   brave/components/brave_news/api/topics.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../brave/components/brave_news/api/topics.idl --root=../../ --destdir=gen --namespace=brave_news::api::%(namespace)s --generator=cpp --include-rules=

#include "brave/components/brave_news/api/topics.h"

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
#include "base/types/expected.h"


using base::UTF8ToUTF16;

namespace brave_news {
namespace api {
namespace topics {
//
// Types
//

TopicArticle::TopicArticle()
: topic_index(0),
score(0.0),
publish_time(0.0) {}

TopicArticle::~TopicArticle() = default;
TopicArticle::TopicArticle(TopicArticle&& rhs) noexcept = default;
TopicArticle& TopicArticle::operator=(TopicArticle&& rhs) noexcept = default;
TopicArticle TopicArticle::Clone() const {
  TopicArticle out;
  out.topic_index = topic_index;
  out.title = title;
  out.description = description;
  out.url = url;
  out.img = img;
  out.publisher_name = publisher_name;
  out.score = score;
  out.publish_time = publish_time;
  out.category = category;
  out.origin = origin;
  return out;
}

// static
bool TopicArticle::Populate(
    const base::DictValue& dict, TopicArticle& out, std::u16string& error) {
  const base::Value* topic_index_value = dict.Find("topic_index");
  if (!topic_index_value) {
    DCHECK(error.empty());
    error = u"'topic_index' is required";
    return false;
  }
  {
    auto temp = (*topic_index_value).GetIfInt();
    if (!temp.has_value()) {
      DCHECK(error.empty());
      error = u"'topic_index': expected topic_index, got " + UTF8ToUTF16(base::Value::GetTypeName((*topic_index_value).type()));
      return false;
    }
    out.topic_index = *temp;
  }

  const base::Value* title_value = dict.Find("title");
  if (!title_value) {
    DCHECK(error.empty());
    error = u"'title' is required";
    return false;
  }
  {
    auto* temp = (*title_value).GetIfString();
    if (!temp) {
      DCHECK(error.empty());
      error = u"'title': expected title, got " + UTF8ToUTF16(base::Value::GetTypeName((*title_value).type()));
      return false;
    }
    out.title = *temp;
  }

  const base::Value* description_value = dict.Find("description");
  if (description_value && !description_value->is_none()) {
    {
      auto* temp = (*description_value).GetIfString();
      if (!temp) {
        DCHECK(error.empty());
        error = u"'description': expected description, got " + UTF8ToUTF16(base::Value::GetTypeName((*description_value).type()));
        out.description = std::nullopt;
        return false;
      }
      out.description = *temp;
    }
  }

  const base::Value* url_value = dict.Find("url");
  if (!url_value) {
    DCHECK(error.empty());
    error = u"'url' is required";
    return false;
  }
  {
    auto* temp = (*url_value).GetIfString();
    if (!temp) {
      DCHECK(error.empty());
      error = u"'url': expected url, got " + UTF8ToUTF16(base::Value::GetTypeName((*url_value).type()));
      return false;
    }
    out.url = *temp;
  }

  const base::Value* img_value = dict.Find("img");
  if (img_value && !img_value->is_none()) {
    {
      auto* temp = (*img_value).GetIfString();
      if (!temp) {
        DCHECK(error.empty());
        error = u"'img': expected img, got " + UTF8ToUTF16(base::Value::GetTypeName((*img_value).type()));
        out.img = std::nullopt;
        return false;
      }
      out.img = *temp;
    }
  }

  const base::Value* publisher_name_value = dict.Find("publisher_name");
  if (!publisher_name_value) {
    DCHECK(error.empty());
    error = u"'publisher_name' is required";
    return false;
  }
  {
    auto* temp = (*publisher_name_value).GetIfString();
    if (!temp) {
      DCHECK(error.empty());
      error = u"'publisher_name': expected publisher_name, got " + UTF8ToUTF16(base::Value::GetTypeName((*publisher_name_value).type()));
      return false;
    }
    out.publisher_name = *temp;
  }

  const base::Value* score_value = dict.Find("score");
  if (!score_value) {
    DCHECK(error.empty());
    error = u"'score' is required";
    return false;
  }
  {
    auto temp = (*score_value).GetIfDouble();
    if (!temp.has_value()) {
      DCHECK(error.empty());
      error = u"'score': expected score, got " + UTF8ToUTF16(base::Value::GetTypeName((*score_value).type()));
      return false;
    }
    out.score = *temp;
  }

  const base::Value* publish_time_value = dict.Find("publish_time");
  if (!publish_time_value) {
    DCHECK(error.empty());
    error = u"'publish_time' is required";
    return false;
  }
  {
    auto temp = (*publish_time_value).GetIfDouble();
    if (!temp.has_value()) {
      DCHECK(error.empty());
      error = u"'publish_time': expected publish_time, got " + UTF8ToUTF16(base::Value::GetTypeName((*publish_time_value).type()));
      return false;
    }
    out.publish_time = *temp;
  }

  const base::Value* category_value = dict.Find("category");
  if (!category_value) {
    DCHECK(error.empty());
    error = u"'category' is required";
    return false;
  }
  {
    auto* temp = (*category_value).GetIfString();
    if (!temp) {
      DCHECK(error.empty());
      error = u"'category': expected category, got " + UTF8ToUTF16(base::Value::GetTypeName((*category_value).type()));
      return false;
    }
    out.category = *temp;
  }

  const base::Value* origin_value = dict.Find("origin");
  if (!origin_value) {
    DCHECK(error.empty());
    error = u"'origin' is required";
    return false;
  }
  {
    auto* temp = (*origin_value).GetIfString();
    if (!temp) {
      DCHECK(error.empty());
      error = u"'origin': expected origin, got " + UTF8ToUTF16(base::Value::GetTypeName((*origin_value).type()));
      return false;
    }
    out.origin = *temp;
  }

  return true;
}

// static
bool TopicArticle::Populate(
    const base::Value& value, TopicArticle& out, std::u16string& error) {
  if (!value.is_dict()) {
    DCHECK(error.empty());
    error = u"expected dictionary, got " + UTF8ToUTF16(base::Value::GetTypeName(value.type()));
    return false;
  }
  return Populate(value.GetDict(), out, error);
}

// static
base::expected<TopicArticle, std::u16string> TopicArticle::FromValue(const base::DictValue& value) {
  std::u16string error;
  TopicArticle out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

// static
base::expected<TopicArticle, std::u16string> TopicArticle::FromValue(const base::Value& value) {
  std::u16string error;
  TopicArticle out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

base::DictValue TopicArticle::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("topic_index", this->topic_index);

  to_value_result.Set("title", this->title);

  if (this->description) {
    to_value_result.Set("description", *this->description);

  }
  to_value_result.Set("url", this->url);

  if (this->img) {
    to_value_result.Set("img", *this->img);

  }
  to_value_result.Set("publisher_name", this->publisher_name);

  to_value_result.Set("score", this->score);

  to_value_result.Set("publish_time", this->publish_time);

  to_value_result.Set("category", this->category);

  to_value_result.Set("origin", this->origin);


  return to_value_result;
}


Topic::Topic()
: topic_index(0),
timestamp(0.0),
overall_score(0.0),
breaking_score(0.0) {}

Topic::~Topic() = default;
Topic::Topic(Topic&& rhs) noexcept = default;
Topic& Topic::operator=(Topic&& rhs) noexcept = default;
Topic Topic::Clone() const {
  Topic out;
  out.topic_index = topic_index;
  out.title = title;
  out.claude_title = claude_title;
  out.claude_title_short = claude_title_short;
  out.most_popular_query = most_popular_query;
  out.queries = queries;
  out.timestamp = timestamp;
  out.overall_score = overall_score;
  out.breaking_score = breaking_score;
  return out;
}

// static
bool Topic::Populate(
    const base::DictValue& dict, Topic& out, std::u16string& error) {
  const base::Value* topic_index_value = dict.Find("topic_index");
  if (!topic_index_value) {
    DCHECK(error.empty());
    error = u"'topic_index' is required";
    return false;
  }
  {
    auto temp = (*topic_index_value).GetIfInt();
    if (!temp.has_value()) {
      DCHECK(error.empty());
      error = u"'topic_index': expected topic_index, got " + UTF8ToUTF16(base::Value::GetTypeName((*topic_index_value).type()));
      return false;
    }
    out.topic_index = *temp;
  }

  const base::Value* title_value = dict.Find("title");
  if (!title_value) {
    DCHECK(error.empty());
    error = u"'title' is required";
    return false;
  }
  {
    auto* temp = (*title_value).GetIfString();
    if (!temp) {
      DCHECK(error.empty());
      error = u"'title': expected title, got " + UTF8ToUTF16(base::Value::GetTypeName((*title_value).type()));
      return false;
    }
    out.title = *temp;
  }

  const base::Value* claude_title_value = dict.Find("claude_title");
  if (!claude_title_value) {
    DCHECK(error.empty());
    error = u"'claude_title' is required";
    return false;
  }
  {
    auto* temp = (*claude_title_value).GetIfString();
    if (!temp) {
      DCHECK(error.empty());
      error = u"'claude_title': expected claude_title, got " + UTF8ToUTF16(base::Value::GetTypeName((*claude_title_value).type()));
      return false;
    }
    out.claude_title = *temp;
  }

  const base::Value* claude_title_short_value = dict.Find("claude_title_short");
  if (!claude_title_short_value) {
    DCHECK(error.empty());
    error = u"'claude_title_short' is required";
    return false;
  }
  {
    auto* temp = (*claude_title_short_value).GetIfString();
    if (!temp) {
      DCHECK(error.empty());
      error = u"'claude_title_short': expected claude_title_short, got " + UTF8ToUTF16(base::Value::GetTypeName((*claude_title_short_value).type()));
      return false;
    }
    out.claude_title_short = *temp;
  }

  const base::Value* most_popular_query_value = dict.Find("most_popular_query");
  if (!most_popular_query_value) {
    DCHECK(error.empty());
    error = u"'most_popular_query' is required";
    return false;
  }
  {
    auto* temp = (*most_popular_query_value).GetIfString();
    if (!temp) {
      DCHECK(error.empty());
      error = u"'most_popular_query': expected most_popular_query, got " + UTF8ToUTF16(base::Value::GetTypeName((*most_popular_query_value).type()));
      return false;
    }
    out.most_popular_query = *temp;
  }

  const base::Value* queries_value = dict.Find("queries");
  if (!queries_value) {
    DCHECK(error.empty());
    error = u"'queries' is required";
    return false;
  }
  {
    if (!(*queries_value).is_list()) {
      DCHECK(error.empty());
      error = u"'queries': expected list, got " + UTF8ToUTF16(base::Value::GetTypeName((*queries_value).type()));
      return false;
    }
    else {
      std::u16string array_parse_error;
      if (!json_schema_compiler::util::PopulateArrayFromList((*queries_value).GetList(), out.queries, array_parse_error)) {
        array_parse_error = u"Error at key 'queries': " + array_parse_error;
        DCHECK(error.empty());
        error = array_parse_error;
        return false;
      }
    }
  }

  const base::Value* timestamp_value = dict.Find("timestamp");
  if (!timestamp_value) {
    DCHECK(error.empty());
    error = u"'timestamp' is required";
    return false;
  }
  {
    auto temp = (*timestamp_value).GetIfDouble();
    if (!temp.has_value()) {
      DCHECK(error.empty());
      error = u"'timestamp': expected timestamp, got " + UTF8ToUTF16(base::Value::GetTypeName((*timestamp_value).type()));
      return false;
    }
    out.timestamp = *temp;
  }

  const base::Value* overall_score_value = dict.Find("overall_score");
  if (!overall_score_value) {
    DCHECK(error.empty());
    error = u"'overall_score' is required";
    return false;
  }
  {
    auto temp = (*overall_score_value).GetIfDouble();
    if (!temp.has_value()) {
      DCHECK(error.empty());
      error = u"'overall_score': expected overall_score, got " + UTF8ToUTF16(base::Value::GetTypeName((*overall_score_value).type()));
      return false;
    }
    out.overall_score = *temp;
  }

  const base::Value* breaking_score_value = dict.Find("breaking_score");
  if (!breaking_score_value) {
    DCHECK(error.empty());
    error = u"'breaking_score' is required";
    return false;
  }
  {
    auto temp = (*breaking_score_value).GetIfDouble();
    if (!temp.has_value()) {
      DCHECK(error.empty());
      error = u"'breaking_score': expected breaking_score, got " + UTF8ToUTF16(base::Value::GetTypeName((*breaking_score_value).type()));
      return false;
    }
    out.breaking_score = *temp;
  }

  return true;
}

// static
bool Topic::Populate(
    const base::Value& value, Topic& out, std::u16string& error) {
  if (!value.is_dict()) {
    DCHECK(error.empty());
    error = u"expected dictionary, got " + UTF8ToUTF16(base::Value::GetTypeName(value.type()));
    return false;
  }
  return Populate(value.GetDict(), out, error);
}

// static
base::expected<Topic, std::u16string> Topic::FromValue(const base::DictValue& value) {
  std::u16string error;
  Topic out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

// static
base::expected<Topic, std::u16string> Topic::FromValue(const base::Value& value) {
  std::u16string error;
  Topic out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

base::DictValue Topic::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("topic_index", this->topic_index);

  to_value_result.Set("title", this->title);

  to_value_result.Set("claude_title", this->claude_title);

  to_value_result.Set("claude_title_short", this->claude_title_short);

  to_value_result.Set("most_popular_query", this->most_popular_query);

  to_value_result.Set("queries", json_schema_compiler::util::CreateValueFromArray(this->queries));

  to_value_result.Set("timestamp", this->timestamp);

  to_value_result.Set("overall_score", this->overall_score);

  to_value_result.Set("breaking_score", this->breaking_score);


  return to_value_result;
}



}  // namespace topics
}  // namespace api
}  // namespace brave_news

