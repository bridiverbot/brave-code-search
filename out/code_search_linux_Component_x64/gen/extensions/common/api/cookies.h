// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/cookies.json
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../extensions/common/api/cookies.json --root=../../ --destdir=gen --namespace=extensions::api::%(namespace)s --generator=cpp --include-rules=

#ifndef EXTENSIONS_COMMON_API_COOKIES_H__
#define EXTENSIONS_COMMON_API_COOKIES_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <optional>
#include <string>
#include <vector>

#include "base/values.h"
#include <string_view>


namespace extensions {
namespace api {
namespace cookies {

//
// Types
//

// A cookie's 'SameSite' state
// (https://tools.ietf.org/html/draft-west-first-party-cookies).
// 'no_restriction' corresponds to a cookie set with 'SameSite=None', 'lax' to
// 'SameSite=Lax', and 'strict' to 'SameSite=Strict'. 'unspecified' corresponds
// to a cookie set without the SameSite attribute.
enum class SameSiteStatus {
  kNone = 0,
  kNoRestriction,
  kLax,
  kStrict,
  kUnspecified,
  kMaxValue = kUnspecified,
};


const char* ToString(SameSiteStatus as_enum);
SameSiteStatus ParseSameSiteStatus(std::string_view as_string);
std::u16string GetSameSiteStatusParseError(std::string_view as_string);

// Represents a partitioned cookie's partition key.
struct CookiePartitionKey {
  CookiePartitionKey();
  ~CookiePartitionKey();
  CookiePartitionKey(const CookiePartitionKey&) = delete;
  CookiePartitionKey& operator=(const CookiePartitionKey&) = delete;
  CookiePartitionKey(CookiePartitionKey&& rhs) noexcept;
  CookiePartitionKey& operator=(CookiePartitionKey&& rhs) noexcept;

  // Populates a CookiePartitionKey object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, CookiePartitionKey& out);

  // Populates a CookiePartitionKey object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::DictValue& value, CookiePartitionKey& out);

  // Creates a deep copy of CookiePartitionKey.
  CookiePartitionKey Clone() const;

  // Creates a CookiePartitionKey object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<CookiePartitionKey> FromValue(const base::DictValue& value);

  // Creates a CookiePartitionKey object from a base::Value, or nullopt on
  // failure.
  static std::optional<CookiePartitionKey> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisCookiePartitionKey object.
  base::DictValue ToValue() const;

  // The top-level site the partitioned cookie is available in.
  std::optional<std::string> top_level_site;

  // Indicates if the cookie was set in a cross-cross site context. This prevents
  // a top-level site embedded in a cross-site context from accessing cookies set
  // by the top-level site in a same-site context.
  std::optional<bool> has_cross_site_ancestor;

};

// Represents information about an HTTP cookie.
struct Cookie {
  Cookie();
  ~Cookie();
  Cookie(const Cookie&) = delete;
  Cookie& operator=(const Cookie&) = delete;
  Cookie(Cookie&& rhs) noexcept;
  Cookie& operator=(Cookie&& rhs) noexcept;

  // Populates a Cookie object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, Cookie& out);

  // Populates a Cookie object from a Dict& instance. Returns whether |out| was
  // successfully populated.
  static bool Populate(const base::DictValue& value, Cookie& out);

  // Creates a deep copy of Cookie.
  Cookie Clone() const;

  // Creates a Cookie object from a base::DictValue, or nullopt on failure.
  static std::optional<Cookie> FromValue(const base::DictValue& value);

  // Creates a Cookie object from a base::Value, or nullopt on failure.
  static std::optional<Cookie> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisCookie object.
  base::DictValue ToValue() const;

  // The name of the cookie.
  std::string name;

  // The value of the cookie.
  std::string value;

  // The domain of the cookie (e.g. "www.google.com", "example.com").
  std::string domain;

  // True if the cookie is a host-only cookie (i.e. a request's host must exactly
  // match the domain of the cookie).
  bool host_only;

  // The path of the cookie.
  std::string path;

  // True if the cookie is marked as Secure (i.e. its scope is limited to secure
  // channels, typically HTTPS).
  bool secure;

  // True if the cookie is marked as HttpOnly (i.e. the cookie is inaccessible to
  // client-side scripts).
  bool http_only;

  // The cookie's same-site status (i.e. whether the cookie is sent with
  // cross-site requests).
  SameSiteStatus same_site;

  // True if the cookie is a session cookie, as opposed to a persistent cookie
  // with an expiration date.
  bool session;

  // The expiration date of the cookie as the number of seconds since the UNIX
  // epoch. Not provided for session cookies.
  std::optional<double> expiration_date;

  // The ID of the cookie store containing this cookie, as provided in
  // getAllCookieStores().
  std::string store_id;

  // The partition key for reading or modifying cookies with the Partitioned
  // attribute.
  std::optional<CookiePartitionKey> partition_key;

};

// Represents a cookie store in the browser. An incognito mode window, for
// instance, uses a separate cookie store from a non-incognito window.
struct CookieStore {
  CookieStore();
  ~CookieStore();
  CookieStore(const CookieStore&) = delete;
  CookieStore& operator=(const CookieStore&) = delete;
  CookieStore(CookieStore&& rhs) noexcept;
  CookieStore& operator=(CookieStore&& rhs) noexcept;

  // Populates a CookieStore object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, CookieStore& out);

  // Populates a CookieStore object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::DictValue& value, CookieStore& out);

  // Creates a deep copy of CookieStore.
  CookieStore Clone() const;

  // Creates a CookieStore object from a base::DictValue, or nullopt on failure.
  static std::optional<CookieStore> FromValue(const base::DictValue& value);

  // Creates a CookieStore object from a base::Value, or nullopt on failure.
  static std::optional<CookieStore> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisCookieStore object.
  base::DictValue ToValue() const;

  // The unique identifier for the cookie store.
  std::string id;

  // Identifiers of all the browser tabs that share this cookie store.
  std::vector<int> tab_ids;

};

// The underlying reason behind the cookie's change. If a cookie was inserted,
// or removed via an explicit call to "chrome.cookies.remove", "cause" will be
// "explicit". If a cookie was automatically removed due to expiry, "cause" will
// be "expired". If a cookie was removed due to being overwritten with an
// already-expired expiration date, "cause" will be set to "expired_overwrite".
// If a cookie was automatically removed due to garbage collection, "cause" will
// be "evicted".  If a cookie was automatically removed due to a "set" call that
// overwrote it, "cause" will be "overwrite". Plan your response accordingly.
enum class OnChangedCause {
  kNone = 0,
  kEvicted,
  kExpired,
  kExplicit,
  kExpiredOverwrite,
  kOverwrite,
  kMaxValue = kOverwrite,
};


const char* ToString(OnChangedCause as_enum);
OnChangedCause ParseOnChangedCause(std::string_view as_string);
std::u16string GetOnChangedCauseParseError(std::string_view as_string);

// Details to identify the cookie.
struct CookieDetails {
  CookieDetails();
  ~CookieDetails();
  CookieDetails(const CookieDetails&) = delete;
  CookieDetails& operator=(const CookieDetails&) = delete;
  CookieDetails(CookieDetails&& rhs) noexcept;
  CookieDetails& operator=(CookieDetails&& rhs) noexcept;

  // Populates a CookieDetails object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, CookieDetails& out);

  // Populates a CookieDetails object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::DictValue& value, CookieDetails& out);

  // Creates a deep copy of CookieDetails.
  CookieDetails Clone() const;

  // Creates a CookieDetails object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<CookieDetails> FromValue(const base::DictValue& value);

  // Creates a CookieDetails object from a base::Value, or nullopt on failure.
  static std::optional<CookieDetails> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisCookieDetails object.
  base::DictValue ToValue() const;

  // The URL with which the cookie to access is associated. This argument may be a
  // full URL, in which case any data following the URL path (e.g. the query
  // string) is simply ignored. If host permissions for this URL are not specified
  // in the manifest file, the API call will fail.
  std::string url;

  // The name of the cookie to access.
  std::string name;

  // The ID of the cookie store in which to look for the cookie. By default, the
  // current execution context's cookie store will be used.
  std::optional<std::string> store_id;

  // The partition key for reading or modifying cookies with the Partitioned
  // attribute.
  std::optional<CookiePartitionKey> partition_key;

};

// Details to identify the frame.
struct FrameDetails {
  FrameDetails();
  ~FrameDetails();
  FrameDetails(const FrameDetails&) = delete;
  FrameDetails& operator=(const FrameDetails&) = delete;
  FrameDetails(FrameDetails&& rhs) noexcept;
  FrameDetails& operator=(FrameDetails&& rhs) noexcept;

  // Populates a FrameDetails object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, FrameDetails& out);

  // Populates a FrameDetails object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::DictValue& value, FrameDetails& out);

  // Creates a deep copy of FrameDetails.
  FrameDetails Clone() const;

  // Creates a FrameDetails object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<FrameDetails> FromValue(const base::DictValue& value);

  // Creates a FrameDetails object from a base::Value, or nullopt on failure.
  static std::optional<FrameDetails> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisFrameDetails object.
  base::DictValue ToValue() const;

  // The unique identifier for the tab containing the frame.
  std::optional<int> tab_id;

  // The unique identifier for the frame within the tab.
  std::optional<int> frame_id;

  // The unique identifier for the document. If the frameId and/or tabId are
  // provided they will be validated to match the document found by provided
  // document ID.
  std::optional<std::string> document_id;

};


//
// Functions
//

namespace Get {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  CookieDetails details;


 private:
  Params();
};

namespace Results {

// Contains details about the cookie. This parameter is null if no such cookie
// was found.
base::ListValue Create(const Cookie& cookie);
}  // namespace Results

}  // namespace Get

namespace GetAll {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // Information to filter the cookies being retrieved.
  struct Details {
    Details();
    ~Details();
    Details(const Details&) = delete;
    Details& operator=(const Details&) = delete;
    Details(Details&& rhs) noexcept;
    Details& operator=(Details&& rhs) noexcept;

    // Populates a Details object from a base::Value& instance. Returns whether
    // |out| was successfully populated.
    static bool Populate(const base::Value& value, Details& out);

    // Populates a Details object from a Dict& instance. Returns whether |out| was
    // successfully populated.
    static bool Populate(const base::DictValue& value, Details& out);

    // Creates a deep copy of Details.
    Details Clone() const;

    // Creates a Details object from a base::DictValue, or nullopt on failure.
    static std::optional<Details> FromValue(const base::DictValue& value);

    // Creates a Details object from a base::Value, or nullopt on failure.
    static std::optional<Details> FromValue(const base::Value& value);

    // Restricts the retrieved cookies to those that would match the given URL.
    std::optional<std::string> url;

    // Filters the cookies by name.
    std::optional<std::string> name;

    // Restricts the retrieved cookies to those whose domains match or are
    // subdomains of this one.
    std::optional<std::string> domain;

    // Restricts the retrieved cookies to those whose path exactly matches this
    // string.
    std::optional<std::string> path;

    // Filters the cookies by their Secure property.
    std::optional<bool> secure;

    // Filters out session vs. persistent cookies.
    std::optional<bool> session;

    // The cookie store to retrieve cookies from. If omitted, the current execution
    // context's cookie store will be used.
    std::optional<std::string> store_id;

    // The partition key for reading or modifying cookies with the Partitioned
    // attribute.
    std::optional<CookiePartitionKey> partition_key;

  };


  // Information to filter the cookies being retrieved.
  Details details;


 private:
  Params();
};

namespace Results {

// All the existing, unexpired cookies that match the given cookie info.
base::ListValue Create(const std::vector<Cookie>& cookies);
}  // namespace Results

}  // namespace GetAll

namespace Set {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // Details about the cookie being set.
  struct Details {
    Details();
    ~Details();
    Details(const Details&) = delete;
    Details& operator=(const Details&) = delete;
    Details(Details&& rhs) noexcept;
    Details& operator=(Details&& rhs) noexcept;

    // Populates a Details object from a base::Value& instance. Returns whether
    // |out| was successfully populated.
    static bool Populate(const base::Value& value, Details& out);

    // Populates a Details object from a Dict& instance. Returns whether |out| was
    // successfully populated.
    static bool Populate(const base::DictValue& value, Details& out);

    // Creates a deep copy of Details.
    Details Clone() const;

    // Creates a Details object from a base::DictValue, or nullopt on failure.
    static std::optional<Details> FromValue(const base::DictValue& value);

    // Creates a Details object from a base::Value, or nullopt on failure.
    static std::optional<Details> FromValue(const base::Value& value);

    // The request-URI to associate with the setting of the cookie. This value can
    // affect the default domain and path values of the created cookie. If host
    // permissions for this URL are not specified in the manifest file, the API call
    // will fail.
    std::string url;

    // The name of the cookie. Empty by default if omitted.
    std::optional<std::string> name;

    // The value of the cookie. Empty by default if omitted.
    std::optional<std::string> value;

    // The domain of the cookie. If omitted, the cookie becomes a host-only cookie.
    std::optional<std::string> domain;

    // The path of the cookie. Defaults to the path portion of the url parameter.
    std::optional<std::string> path;

    // Whether the cookie should be marked as Secure. Defaults to false.
    std::optional<bool> secure;

    // Whether the cookie should be marked as HttpOnly. Defaults to false.
    std::optional<bool> http_only;

    // The cookie's same-site status. Defaults to "unspecified", i.e., if omitted,
    // the cookie is set without specifying a SameSite attribute.
    SameSiteStatus same_site;

    // The expiration date of the cookie as the number of seconds since the UNIX
    // epoch. If omitted, the cookie becomes a session cookie.
    std::optional<double> expiration_date;

    // The ID of the cookie store in which to set the cookie. By default, the cookie
    // is set in the current execution context's cookie store.
    std::optional<std::string> store_id;

    // The partition key for reading or modifying cookies with the Partitioned
    // attribute.
    std::optional<CookiePartitionKey> partition_key;

  };


  // Details about the cookie being set.
  Details details;


 private:
  Params();
};

namespace Results {

// Contains details about the cookie that's been set. If setting failed for any
// reason, the promise will be rejected.
base::ListValue Create(const Cookie& cookie);
}  // namespace Results

}  // namespace Set

namespace Remove {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  CookieDetails details;


 private:
  Params();
};

namespace Results {

// Contains details about the cookie that's been removed. If removal failed for
// any reason, the promise will be rejected.
struct Details {
  Details();
  ~Details();
  Details(const Details&) = delete;
  Details& operator=(const Details&) = delete;
  Details(Details&& rhs) noexcept;
  Details& operator=(Details&& rhs) noexcept;

  // Returns a new base::DictValue representing the serialized form of
  // thisDetails object.
  base::DictValue ToValue() const;

  // The URL associated with the cookie that's been removed.
  std::string url;

  // The name of the cookie that's been removed.
  std::string name;

  // The ID of the cookie store from which the cookie was removed.
  std::string store_id;

  // The partition key for reading or modifying cookies with the Partitioned
  // attribute.
  std::optional<CookiePartitionKey> partition_key;

};


// Contains details about the cookie that's been removed. If removal failed for
// any reason, the promise will be rejected.
base::ListValue Create(const Details& details);
}  // namespace Results

}  // namespace Remove

namespace GetAllCookieStores {

namespace Results {

// All the existing cookie stores.
base::ListValue Create(const std::vector<CookieStore>& cookie_stores);
}  // namespace Results

}  // namespace GetAllCookieStores

namespace GetPartitionKey {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  FrameDetails details;


 private:
  Params();
};

namespace Results {

// Contains details about the partition key that's been retrieved.
struct Details {
  Details();
  ~Details();
  Details(const Details&) = delete;
  Details& operator=(const Details&) = delete;
  Details(Details&& rhs) noexcept;
  Details& operator=(Details&& rhs) noexcept;

  // Returns a new base::DictValue representing the serialized form of
  // thisDetails object.
  base::DictValue ToValue() const;

  // The partition key for reading or modifying cookies with the Partitioned
  // attribute.
  CookiePartitionKey partition_key;

};


// Contains details about the partition key that's been retrieved.
base::ListValue Create(const Details& details);
}  // namespace Results

}  // namespace GetPartitionKey

//
// Events
//

namespace OnChanged {

extern const char kEventName[];  // "cookies.onChanged"

struct ChangeInfo {
  ChangeInfo();
  ~ChangeInfo();
  ChangeInfo(const ChangeInfo&) = delete;
  ChangeInfo& operator=(const ChangeInfo&) = delete;
  ChangeInfo(ChangeInfo&& rhs) noexcept;
  ChangeInfo& operator=(ChangeInfo&& rhs) noexcept;

  // Returns a new base::DictValue representing the serialized form of
  // thisChangeInfo object.
  base::DictValue ToValue() const;

  // True if a cookie was removed.
  bool removed;

  // Information about the cookie that was set or removed.
  Cookie cookie;

  // The underlying reason behind the cookie's change.
  OnChangedCause cause;

};


base::ListValue Create(const ChangeInfo& change_info);
}  // namespace OnChanged

}  // namespace cookies
}  // namespace api
}  // namespace extensions

#endif  // EXTENSIONS_COMMON_API_COOKIES_H__
