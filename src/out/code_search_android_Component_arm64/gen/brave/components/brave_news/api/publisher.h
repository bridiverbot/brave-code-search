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

#ifndef BRAVE_COMPONENTS_BRAVE_NEWS_API_PUBLISHER_H__
#define BRAVE_COMPONENTS_BRAVE_NEWS_API_PUBLISHER_H__

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
namespace feed {

//
// Types
//

struct Locale {
  Locale();
  ~Locale();
  Locale(const Locale&) = delete;
  Locale& operator=(const Locale&) = delete;
  Locale(Locale&& rhs) noexcept;
  Locale& operator=(Locale&& rhs) noexcept;

  // Populates a Locale object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, Locale& out, std::u16string& error);

  // Populates a Locale object from a Dict& instance. Returns whether |out| was
  // successfully populated.
  static bool Populate(const base::DictValue& value, Locale& out, std::u16string& error);

  // Creates a deep copy of Locale.
  Locale Clone() const;

  // Creates a Locale object from a base::DictValue, or unexpected on failure.
  static base::expected<Locale, std::u16string> FromValue(const base::DictValue& value);

  // Creates a Locale object from a base::Value, or unexpected on failure.
  static base::expected<Locale, std::u16string> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisLocale object.
  base::DictValue ToValue() const;

  // The locale string
  std::string locale;

  // A list of channels
  std::vector<std::string> channels;

  // The rank of the locale
  std::optional<int> rank;

};

struct Publisher {
  Publisher();
  ~Publisher();
  Publisher(const Publisher&) = delete;
  Publisher& operator=(const Publisher&) = delete;
  Publisher(Publisher&& rhs) noexcept;
  Publisher& operator=(Publisher&& rhs) noexcept;

  // Populates a Publisher object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, Publisher& out, std::u16string& error);

  // Populates a Publisher object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::DictValue& value, Publisher& out, std::u16string& error);

  // Creates a deep copy of Publisher.
  Publisher Clone() const;

  // Creates a Publisher object from a base::DictValue, or unexpected on
  // failure.
  static base::expected<Publisher, std::u16string> FromValue(const base::DictValue& value);

  // Creates a Publisher object from a base::Value, or unexpected on failure.
  static base::expected<Publisher, std::u16string> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisPublisher object.
  base::DictValue ToValue() const;

  // If the publisher is enabled. Brave today defaults it to true.
  std::optional<bool> enabled;

  // the publishers name.
  std::string publisher_name;

  // The category the publisher belongs to.
  std::string category;

  // News publisher site url.
  std::string site_url;

  // News publisher feed url.
  std::string feed_url;

  // The favicon url for the publisher.
  std::optional<std::string> favicon_url;

  // The cover image url for the publisher.
  std::optional<std::string> cover_url;

  // Hex colour code for the background
  std::optional<std::string> background_color;

  // The publisher's id.
  std::string publisher_id;

  // A list of locales.
  std::optional<std::vector<Locale>> locales;

};


}  // namespace feed
}  // namespace api
}  // namespace brave_news

#endif  // BRAVE_COMPONENTS_BRAVE_NEWS_API_PUBLISHER_H__
