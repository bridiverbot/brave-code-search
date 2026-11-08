// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   brave/components/brave_news/api/publisher.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../brave/components/brave_news/api/publisher.idl --root=../../ --destdir=gen --namespace=brave_news::api::%(namespace)s --generator=cpp --include-rules=

#include "brave/components/brave_news/api/publisher.h"

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
namespace feed {
//
// Types
//

Locale::Locale()
 {}

Locale::~Locale() = default;
Locale::Locale(Locale&& rhs) noexcept = default;
Locale& Locale::operator=(Locale&& rhs) noexcept = default;
Locale Locale::Clone() const {
  Locale out;
  out.locale = locale;
  out.channels = channels;
  out.rank = rank;
  return out;
}

// static
bool Locale::Populate(
    const base::DictValue& dict, Locale& out, std::u16string& error) {
  const base::Value* locale_value = dict.Find("locale");
  if (!locale_value) {
    DCHECK(error.empty());
    error = u"'locale' is required";
    return false;
  }
  {
    auto* temp = (*locale_value).GetIfString();
    if (!temp) {
      DCHECK(error.empty());
      error = u"'locale': expected locale, got " + UTF8ToUTF16(base::Value::GetTypeName((*locale_value).type()));
      return false;
    }
    out.locale = *temp;
  }

  const base::Value* channels_value = dict.Find("channels");
  if (!channels_value) {
    DCHECK(error.empty());
    error = u"'channels' is required";
    return false;
  }
  {
    if (!(*channels_value).is_list()) {
      DCHECK(error.empty());
      error = u"'channels': expected list, got " + UTF8ToUTF16(base::Value::GetTypeName((*channels_value).type()));
      return false;
    }
    else {
      std::u16string array_parse_error;
      if (!json_schema_compiler::util::PopulateArrayFromList((*channels_value).GetList(), out.channels, array_parse_error)) {
        array_parse_error = u"Error at key 'channels': " + array_parse_error;
        DCHECK(error.empty());
        error = array_parse_error;
        return false;
      }
    }
  }

  const base::Value* rank_value = dict.Find("rank");
  if (rank_value && !rank_value->is_none()) {
    {
      auto temp = (*rank_value).GetIfInt();
      if (!temp.has_value()) {
        DCHECK(error.empty());
        error = u"'rank': expected rank, got " + UTF8ToUTF16(base::Value::GetTypeName((*rank_value).type()));
        out.rank = std::nullopt;
        return false;
      }
      out.rank = *temp;
    }
  }

  return true;
}

// static
bool Locale::Populate(
    const base::Value& value, Locale& out, std::u16string& error) {
  if (!value.is_dict()) {
    DCHECK(error.empty());
    error = u"expected dictionary, got " + UTF8ToUTF16(base::Value::GetTypeName(value.type()));
    return false;
  }
  return Populate(value.GetDict(), out, error);
}

// static
base::expected<Locale, std::u16string> Locale::FromValue(const base::DictValue& value) {
  std::u16string error;
  Locale out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

// static
base::expected<Locale, std::u16string> Locale::FromValue(const base::Value& value) {
  std::u16string error;
  Locale out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

base::DictValue Locale::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("locale", this->locale);

  to_value_result.Set("channels", json_schema_compiler::util::CreateValueFromArray(this->channels));

  if (this->rank) {
    to_value_result.Set("rank", *this->rank);

  }

  return to_value_result;
}


Publisher::Publisher()
 {}

Publisher::~Publisher() = default;
Publisher::Publisher(Publisher&& rhs) noexcept = default;
Publisher& Publisher::operator=(Publisher&& rhs) noexcept = default;
Publisher Publisher::Clone() const {
  Publisher out;
  out.enabled = enabled;
  out.publisher_name = publisher_name;
  out.category = category;
  out.site_url = site_url;
  out.feed_url = feed_url;
  out.favicon_url = favicon_url;
  out.cover_url = cover_url;
  out.background_color = background_color;
  out.publisher_id = publisher_id;
  if (locales) {
    out.locales.emplace();
    out.locales->reserve(locales->size());
    for (const auto& element : *locales) {
      json_schema_compiler::util::AppendToContainer(*out.locales, element.Clone());
    }
  }
  return out;
}

// static
bool Publisher::Populate(
    const base::DictValue& dict, Publisher& out, std::u16string& error) {
  const base::Value* enabled_value = dict.Find("enabled");
  if (enabled_value && !enabled_value->is_none()) {
    {
      auto temp = (*enabled_value).GetIfBool();
      if (!temp.has_value()) {
        DCHECK(error.empty());
        error = u"'enabled': expected enabled, got " + UTF8ToUTF16(base::Value::GetTypeName((*enabled_value).type()));
        out.enabled = std::nullopt;
        return false;
      }
      out.enabled = *temp;
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

  const base::Value* site_url_value = dict.Find("site_url");
  if (!site_url_value) {
    DCHECK(error.empty());
    error = u"'site_url' is required";
    return false;
  }
  {
    auto* temp = (*site_url_value).GetIfString();
    if (!temp) {
      DCHECK(error.empty());
      error = u"'site_url': expected site_url, got " + UTF8ToUTF16(base::Value::GetTypeName((*site_url_value).type()));
      return false;
    }
    out.site_url = *temp;
  }

  const base::Value* feed_url_value = dict.Find("feed_url");
  if (!feed_url_value) {
    DCHECK(error.empty());
    error = u"'feed_url' is required";
    return false;
  }
  {
    auto* temp = (*feed_url_value).GetIfString();
    if (!temp) {
      DCHECK(error.empty());
      error = u"'feed_url': expected feed_url, got " + UTF8ToUTF16(base::Value::GetTypeName((*feed_url_value).type()));
      return false;
    }
    out.feed_url = *temp;
  }

  const base::Value* favicon_url_value = dict.Find("favicon_url");
  if (favicon_url_value && !favicon_url_value->is_none()) {
    {
      auto* temp = (*favicon_url_value).GetIfString();
      if (!temp) {
        DCHECK(error.empty());
        error = u"'favicon_url': expected favicon_url, got " + UTF8ToUTF16(base::Value::GetTypeName((*favicon_url_value).type()));
        out.favicon_url = std::nullopt;
        return false;
      }
      out.favicon_url = *temp;
    }
  }

  const base::Value* cover_url_value = dict.Find("cover_url");
  if (cover_url_value && !cover_url_value->is_none()) {
    {
      auto* temp = (*cover_url_value).GetIfString();
      if (!temp) {
        DCHECK(error.empty());
        error = u"'cover_url': expected cover_url, got " + UTF8ToUTF16(base::Value::GetTypeName((*cover_url_value).type()));
        out.cover_url = std::nullopt;
        return false;
      }
      out.cover_url = *temp;
    }
  }

  const base::Value* background_color_value = dict.Find("background_color");
  if (background_color_value && !background_color_value->is_none()) {
    {
      auto* temp = (*background_color_value).GetIfString();
      if (!temp) {
        DCHECK(error.empty());
        error = u"'background_color': expected background_color, got " + UTF8ToUTF16(base::Value::GetTypeName((*background_color_value).type()));
        out.background_color = std::nullopt;
        return false;
      }
      out.background_color = *temp;
    }
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

  const base::Value* locales_value = dict.Find("locales");
  if (locales_value && !locales_value->is_none()) {
    {
      if (!(*locales_value).is_list()) {
        DCHECK(error.empty());
        error = u"'locales': expected list, got " + UTF8ToUTF16(base::Value::GetTypeName((*locales_value).type()));
        return false;
      }
      else {
        std::u16string array_parse_error;
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*locales_value).GetList(), out.locales, array_parse_error)) {
          array_parse_error = u"Error at key 'locales': " + array_parse_error;
          DCHECK(error.empty());
          error = array_parse_error;
          return false;
        }
      }
    }
  }

  return true;
}

// static
bool Publisher::Populate(
    const base::Value& value, Publisher& out, std::u16string& error) {
  if (!value.is_dict()) {
    DCHECK(error.empty());
    error = u"expected dictionary, got " + UTF8ToUTF16(base::Value::GetTypeName(value.type()));
    return false;
  }
  return Populate(value.GetDict(), out, error);
}

// static
base::expected<Publisher, std::u16string> Publisher::FromValue(const base::DictValue& value) {
  std::u16string error;
  Publisher out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

// static
base::expected<Publisher, std::u16string> Publisher::FromValue(const base::Value& value) {
  std::u16string error;
  Publisher out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

base::DictValue Publisher::ToValue() const {
  base::DictValue to_value_result;

  if (this->enabled) {
    to_value_result.Set("enabled", *this->enabled);

  }
  to_value_result.Set("publisher_name", this->publisher_name);

  to_value_result.Set("category", this->category);

  to_value_result.Set("site_url", this->site_url);

  to_value_result.Set("feed_url", this->feed_url);

  if (this->favicon_url) {
    to_value_result.Set("favicon_url", *this->favicon_url);

  }
  if (this->cover_url) {
    to_value_result.Set("cover_url", *this->cover_url);

  }
  if (this->background_color) {
    to_value_result.Set("background_color", *this->background_color);

  }
  to_value_result.Set("publisher_id", this->publisher_id);

  if (this->locales) {
    to_value_result.Set("locales", json_schema_compiler::util::CreateValueFromArray(*this->locales));

  }

  return to_value_result;
}



}  // namespace feed
}  // namespace api
}  // namespace brave_news

