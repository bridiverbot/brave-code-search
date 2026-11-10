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

#ifndef BRAVE_COMPONENTS_BRAVE_NEWS_API_TOPICS_H__
#define BRAVE_COMPONENTS_BRAVE_NEWS_API_TOPICS_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <optional>
#include <string>
#include <vector>

#include "base/values.h"
#include "base/types/expected.h"


namespace brave_news {
namespace api {
namespace topics {

//
// Types
//

struct TopicArticle {
  TopicArticle();
  ~TopicArticle();
  TopicArticle(const TopicArticle&) = delete;
  TopicArticle& operator=(const TopicArticle&) = delete;
  TopicArticle(TopicArticle&& rhs) noexcept;
  TopicArticle& operator=(TopicArticle&& rhs) noexcept;

  // Populates a TopicArticle object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, TopicArticle& out, std::u16string& error);

  // Populates a TopicArticle object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::DictValue& value, TopicArticle& out, std::u16string& error);

  // Creates a deep copy of TopicArticle.
  TopicArticle Clone() const;

  // Creates a TopicArticle object from a base::DictValue, or unexpected on
  // failure.
  static base::expected<TopicArticle, std::u16string> FromValue(const base::DictValue& value);

  // Creates a TopicArticle object from a base::Value, or unexpected on failure.
  static base::expected<TopicArticle, std::u16string> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisTopicArticle object.
  base::DictValue ToValue() const;

  int topic_index;

  std::string title;

  std::optional<std::string> description;

  std::string url;

  std::optional<std::string> img;

  std::string publisher_name;

  double score;

  double publish_time;

  std::string category;

  std::string origin;

};

struct Topic {
  Topic();
  ~Topic();
  Topic(const Topic&) = delete;
  Topic& operator=(const Topic&) = delete;
  Topic(Topic&& rhs) noexcept;
  Topic& operator=(Topic&& rhs) noexcept;

  // Populates a Topic object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, Topic& out, std::u16string& error);

  // Populates a Topic object from a Dict& instance. Returns whether |out| was
  // successfully populated.
  static bool Populate(const base::DictValue& value, Topic& out, std::u16string& error);

  // Creates a deep copy of Topic.
  Topic Clone() const;

  // Creates a Topic object from a base::DictValue, or unexpected on failure.
  static base::expected<Topic, std::u16string> FromValue(const base::DictValue& value);

  // Creates a Topic object from a base::Value, or unexpected on failure.
  static base::expected<Topic, std::u16string> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of thisTopic
  // object.
  base::DictValue ToValue() const;

  int topic_index;

  std::string title;

  std::string claude_title;

  std::string claude_title_short;

  std::string most_popular_query;

  std::vector<std::string> queries;

  double timestamp;

  double overall_score;

  double breaking_score;

};


}  // namespace topics
}  // namespace api
}  // namespace brave_news

#endif  // BRAVE_COMPONENTS_BRAVE_NEWS_API_TOPICS_H__
