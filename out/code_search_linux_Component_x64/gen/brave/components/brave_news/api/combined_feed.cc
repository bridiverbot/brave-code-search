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

#include "brave/components/brave_news/api/combined_feed.h"

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
namespace combined_feed {
//
// Types
//

Item::Item()
 {}

Item::~Item() = default;
Item::Item(Item&& rhs) noexcept = default;
Item& Item::operator=(Item&& rhs) noexcept = default;
Item Item::Clone() const {
  Item out;
  out.url = url;
  out.padded_img = padded_img;
  out.publisher_id = publisher_id;
  out.category = category;
  out.channels = channels;
  out.title = title;
  out.description = description;
  out.publisher_name = publisher_name;
  out.score = score;
  out.pop_score = pop_score;
  out.publish_time = publish_time;
  out.content_type = content_type;
  out.creative_instance_id = creative_instance_id;
  out.offers_category = offers_category;
  return out;
}

// static
bool Item::Populate(
    const base::DictValue& dict, Item& out, std::u16string& error) {
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

  const base::Value* padded_img_value = dict.Find("padded_img");
  if (!padded_img_value) {
    DCHECK(error.empty());
    error = u"'padded_img' is required";
    return false;
  }
  {
    auto* temp = (*padded_img_value).GetIfString();
    if (!temp) {
      DCHECK(error.empty());
      error = u"'padded_img': expected padded_img, got " + UTF8ToUTF16(base::Value::GetTypeName((*padded_img_value).type()));
      return false;
    }
    out.padded_img = *temp;
  }

  const base::Value* publisher_id_value = dict.Find("publisher_id");
  if (!publisher_id_value) {
    DCHECK(error.empty());
    error = u"'publisher_id' is required";
    return false;
  }
  {
    auto* temp = (*publisher_id_value).GetIfString();
    if (!temp) {
      DCHECK(error.empty());
      error = u"'publisher_id': expected publisher_id, got " + UTF8ToUTF16(base::Value::GetTypeName((*publisher_id_value).type()));
      return false;
    }
    out.publisher_id = *temp;
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

  const base::Value* channels_value = dict.Find("channels");
  if (channels_value && !channels_value->is_none()) {
    {
      if (!(*channels_value).is_list()) {
        DCHECK(error.empty());
        error = u"'channels': expected list, got " + UTF8ToUTF16(base::Value::GetTypeName((*channels_value).type()));
        return false;
      }
      else {
        std::u16string array_parse_error;
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*channels_value).GetList(), out.channels, array_parse_error)) {
          array_parse_error = u"Error at key 'channels': " + array_parse_error;
          DCHECK(error.empty());
          error = array_parse_error;
          return false;
        }
      }
    }
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
  if (!description_value) {
    DCHECK(error.empty());
    error = u"'description' is required";
    return false;
  }
  {
    auto* temp = (*description_value).GetIfString();
    if (!temp) {
      DCHECK(error.empty());
      error = u"'description': expected description, got " + UTF8ToUTF16(base::Value::GetTypeName((*description_value).type()));
      return false;
    }
    out.description = *temp;
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
  if (score_value && !score_value->is_none()) {
    {
      auto temp = (*score_value).GetIfDouble();
      if (!temp.has_value()) {
        DCHECK(error.empty());
        error = u"'score': expected score, got " + UTF8ToUTF16(base::Value::GetTypeName((*score_value).type()));
        out.score = std::nullopt;
        return false;
      }
      out.score = *temp;
    }
  }

  const base::Value* pop_score_value = dict.Find("pop_score");
  if (pop_score_value && !pop_score_value->is_none()) {
    {
      auto temp = (*pop_score_value).GetIfDouble();
      if (!temp.has_value()) {
        DCHECK(error.empty());
        error = u"'pop_score': expected pop_score, got " + UTF8ToUTF16(base::Value::GetTypeName((*pop_score_value).type()));
        out.pop_score = std::nullopt;
        return false;
      }
      out.pop_score = *temp;
    }
  }

  const base::Value* publish_time_value = dict.Find("publish_time");
  if (!publish_time_value) {
    DCHECK(error.empty());
    error = u"'publish_time' is required";
    return false;
  }
  {
    auto* temp = (*publish_time_value).GetIfString();
    if (!temp) {
      DCHECK(error.empty());
      error = u"'publish_time': expected publish_time, got " + UTF8ToUTF16(base::Value::GetTypeName((*publish_time_value).type()));
      return false;
    }
    out.publish_time = *temp;
  }

  const base::Value* content_type_value = dict.Find("content_type");
  if (!content_type_value) {
    DCHECK(error.empty());
    error = u"'content_type' is required";
    return false;
  }
  {
    auto* temp = (*content_type_value).GetIfString();
    if (!temp) {
      DCHECK(error.empty());
      error = u"'content_type': expected content_type, got " + UTF8ToUTF16(base::Value::GetTypeName((*content_type_value).type()));
      return false;
    }
    out.content_type = *temp;
  }

  const base::Value* creative_instance_id_value = dict.Find("creative_instance_id");
  if (creative_instance_id_value && !creative_instance_id_value->is_none()) {
    {
      auto* temp = (*creative_instance_id_value).GetIfString();
      if (!temp) {
        DCHECK(error.empty());
        error = u"'creative_instance_id': expected creative_instance_id, got " + UTF8ToUTF16(base::Value::GetTypeName((*creative_instance_id_value).type()));
        out.creative_instance_id = std::nullopt;
        return false;
      }
      out.creative_instance_id = *temp;
    }
  }

  const base::Value* offers_category_value = dict.Find("offers_category");
  if (offers_category_value && !offers_category_value->is_none()) {
    {
      auto* temp = (*offers_category_value).GetIfString();
      if (!temp) {
        DCHECK(error.empty());
        error = u"'offers_category': expected offers_category, got " + UTF8ToUTF16(base::Value::GetTypeName((*offers_category_value).type()));
        out.offers_category = std::nullopt;
        return false;
      }
      out.offers_category = *temp;
    }
  }

  return true;
}

// static
bool Item::Populate(
    const base::Value& value, Item& out, std::u16string& error) {
  if (!value.is_dict()) {
    DCHECK(error.empty());
    error = u"expected dictionary, got " + UTF8ToUTF16(base::Value::GetTypeName(value.type()));
    return false;
  }
  return Populate(value.GetDict(), out, error);
}

// static
base::expected<Item, std::u16string> Item::FromValue(const base::DictValue& value) {
  std::u16string error;
  Item out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

// static
base::expected<Item, std::u16string> Item::FromValue(const base::Value& value) {
  std::u16string error;
  Item out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

base::DictValue Item::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("url", this->url);

  to_value_result.Set("padded_img", this->padded_img);

  to_value_result.Set("publisher_id", this->publisher_id);

  to_value_result.Set("category", this->category);

  if (this->channels) {
    to_value_result.Set("channels", json_schema_compiler::util::CreateValueFromArray(*this->channels));

  }
  to_value_result.Set("title", this->title);

  to_value_result.Set("description", this->description);

  to_value_result.Set("publisher_name", this->publisher_name);

  if (this->score) {
    to_value_result.Set("score", *this->score);

  }
  if (this->pop_score) {
    to_value_result.Set("pop_score", *this->pop_score);

  }
  to_value_result.Set("publish_time", this->publish_time);

  to_value_result.Set("content_type", this->content_type);

  if (this->creative_instance_id) {
    to_value_result.Set("creative_instance_id", *this->creative_instance_id);

  }
  if (this->offers_category) {
    to_value_result.Set("offers_category", *this->offers_category);

  }

  return to_value_result;
}



}  // namespace combined_feed
}  // namespace api
}  // namespace brave_news

