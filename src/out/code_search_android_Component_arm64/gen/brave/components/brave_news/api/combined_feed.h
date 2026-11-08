// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   brave/components/brave_news/api/combined_feed.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../brave/components/brave_news/api/combined_feed.idl --root=../../ --destdir=gen --namespace=brave_news::api::%(namespace)s --generator=cpp --include-rules=

#ifndef BRAVE_COMPONENTS_BRAVE_NEWS_API_COMBINED_FEED_H__
#define BRAVE_COMPONENTS_BRAVE_NEWS_API_COMBINED_FEED_H__

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
namespace combined_feed {

//
// Types
//

struct Item {
  Item();
  ~Item();
  Item(const Item&) = delete;
  Item& operator=(const Item&) = delete;
  Item(Item&& rhs) noexcept;
  Item& operator=(Item&& rhs) noexcept;

  // Populates a Item object from a base::Value& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value& value, Item& out, std::u16string& error);

  // Populates a Item object from a Dict& instance. Returns whether |out| was
  // successfully populated.
  static bool Populate(const base::DictValue& value, Item& out, std::u16string& error);

  // Creates a deep copy of Item.
  Item Clone() const;

  // Creates a Item object from a base::DictValue, or unexpected on failure.
  static base::expected<Item, std::u16string> FromValue(const base::DictValue& value);

  // Creates a Item object from a base::Value, or unexpected on failure.
  static base::expected<Item, std::u16string> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of thisItem
  // object.
  base::DictValue ToValue() const;

  // A url for the item.
  std::string url;

  // A string with a url for an image used for padding.
  std::string padded_img;

  // The id code for the publisher.
  std::string publisher_id;

  // The category the feed belongs to.
  std::string category;

  // The channels the feed belongs to. This supersedes the category.
  std::optional<std::vector<std::string>> channels;

  // The title of the feed.
  std::string title;

  // A description field for the feed item to be shown.
  std::string description;

  // The name of the publisher of the item.
  std::string publisher_name;

  // The score of the item. Should be logged when not present.
  std::optional<double> score;

  // The popularity of the item. Not present in older versions of the API.
  std::optional<double> pop_score;

  // A publish date/time string in the format YYYY-MM-DD HH:MM:SS.
  std::string publish_time;

  // The type of content of this feed.
  std::string content_type;

  // An id for the creative instance.
  std::optional<std::string> creative_instance_id;

  // An offers category field.
  std::optional<std::string> offers_category;

};


}  // namespace combined_feed
}  // namespace api
}  // namespace brave_news

#endif  // BRAVE_COMPONENTS_BRAVE_NEWS_API_COMBINED_FEED_H__
