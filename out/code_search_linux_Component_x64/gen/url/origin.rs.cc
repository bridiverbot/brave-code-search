#include "url/origin.h"
#include "url/scheme_host_port.h"
#include "url/gurl.h"
#include "url/origin_shim.h"
#include <array>
#include <cstddef>
#include <cstdint>
#include <memory>
#include <new>
#include <string>
#include <type_traits>
#include <utility>
#if __cplusplus >= 201703L
#include <string_view>
#endif

#ifdef __GNUC__
#pragma GCC diagnostic ignored "-Wmissing-declarations"
#ifdef __clang__
#pragma clang diagnostic ignored "-Wdollar-in-identifier-extension"
#endif // __clang__
#endif // __GNUC__

namespace rust {
inline namespace cxxbridge1 {
// #include "rust/cxx.h"

struct unsafe_bitcopy_t;

namespace {
template <typename T>
class impl;
} // namespace

#ifndef CXXBRIDGE1_RUST_STRING
#define CXXBRIDGE1_RUST_STRING
class String final {
public:
  String() noexcept;
  String(const String &) noexcept;
  String(String &&) noexcept;
  ~String() noexcept;

  String(const std::string &);
  String(const char *);
  String(const char *, std::size_t);
  String(const char16_t *);
  String(const char16_t *, std::size_t);
#ifdef __cpp_char8_t
  String(const char8_t *s);
  String(const char8_t *s, std::size_t len);
#endif

  static String lossy(const std::string &) noexcept;
  static String lossy(const char *) noexcept;
  static String lossy(const char *, std::size_t) noexcept;
  static String lossy(const char16_t *) noexcept;
  static String lossy(const char16_t *, std::size_t) noexcept;

  String &operator=(const String &) & noexcept;
  String &operator=(String &&) & noexcept;

  explicit operator std::string() const;

  const char *data() const noexcept;
  std::size_t size() const noexcept;
  std::size_t length() const noexcept;
  bool empty() const noexcept;

  const char *c_str() noexcept;

  std::size_t capacity() const noexcept;
  void reserve(size_t new_cap) noexcept;

  using iterator = char *;
  iterator begin() noexcept;
  iterator end() noexcept;

  using const_iterator = const char *;
  const_iterator begin() const noexcept;
  const_iterator end() const noexcept;
  const_iterator cbegin() const noexcept;
  const_iterator cend() const noexcept;

  bool operator==(const String &) const noexcept;
  bool operator!=(const String &) const noexcept;
  bool operator<(const String &) const noexcept;
  bool operator<=(const String &) const noexcept;
  bool operator>(const String &) const noexcept;
  bool operator>=(const String &) const noexcept;

  void swap(String &) noexcept;

  String(unsafe_bitcopy_t, const String &) noexcept;

private:
  struct lossy_t;
  String(lossy_t, const char *, std::size_t) noexcept;
  String(lossy_t, const char16_t *, std::size_t) noexcept;
  friend void swap(String &lhs, String &rhs) noexcept { lhs.swap(rhs); }

  std::array<std::uintptr_t, 3> repr;
};
#endif // CXXBRIDGE1_RUST_STRING

#ifndef CXXBRIDGE1_RUST_STR
#define CXXBRIDGE1_RUST_STR
class Str final {
public:
  Str() noexcept;
  Str(const String &) noexcept;
  Str(const std::string &);
  Str(const char *);
  Str(const char *, std::size_t);

  Str &operator=(const Str &) & noexcept = default;

  explicit operator std::string() const;
#if __cplusplus >= 201703L
  explicit operator std::string_view() const;
#endif

  const char *data() const noexcept;
  std::size_t size() const noexcept;
  std::size_t length() const noexcept;
  bool empty() const noexcept;

  Str(const Str &) noexcept = default;
  ~Str() noexcept = default;

  using iterator = const char *;
  using const_iterator = const char *;
  const_iterator begin() const noexcept;
  const_iterator end() const noexcept;
  const_iterator cbegin() const noexcept;
  const_iterator cend() const noexcept;

  bool operator==(const Str &) const noexcept;
  bool operator!=(const Str &) const noexcept;
  bool operator<(const Str &) const noexcept;
  bool operator<=(const Str &) const noexcept;
  bool operator>(const Str &) const noexcept;
  bool operator>=(const Str &) const noexcept;

  void swap(Str &) noexcept;

private:
  class uninit;
  Str(uninit) noexcept;
  friend impl<Str>;

  std::array<std::uintptr_t, 2> repr;
};
#endif // CXXBRIDGE1_RUST_STR

#ifndef CXXBRIDGE1_IS_COMPLETE
#define CXXBRIDGE1_IS_COMPLETE
namespace detail {
namespace {
template <typename T, typename = std::size_t>
struct is_complete : std::false_type {};
template <typename T>
struct is_complete<T, decltype(sizeof(T))> : std::true_type {};
} // namespace
} // namespace detail
#endif // CXXBRIDGE1_IS_COMPLETE

namespace {
template <bool> struct deleter_if {
  template <typename T> void operator()(T *) {}
};
template <> struct deleter_if<true> {
  template <typename T> void operator()(T *ptr) { ptr->~T(); }
};
} // namespace
} // namespace cxxbridge1
} // namespace rust

namespace url {
  using Origin = ::url::Origin;
  using SchemeHostPort = ::url::SchemeHostPort;
}

extern "C" {
__attribute__((visibility("default"))) bool cxxbridge1$202$Origin$opaque(::url::Origin const &self) noexcept {
  bool (::url::Origin::*opaque$)() const = &::url::Origin::opaque;
  return (self.*opaque$)();
}

__attribute__((visibility("default"))) bool cxxbridge1$202$Origin$is_same_origin_with(::url::Origin const &self, ::url::Origin const &other) noexcept {
  bool (::url::Origin::*is_same_origin_with$)(::url::Origin const &) const = &::url::Origin::IsSameOriginWith;
  return (self.*is_same_origin_with$)(other);
}

__attribute__((visibility("default"))) void cxxbridge1$202$Origin$get_tuple_or_precursor_tuple_if_opaque(::url::Origin const &self, ::url::SchemeHostPort const **return$) noexcept {
  ::url::SchemeHostPort const &(::url::Origin::*get_tuple_or_precursor_tuple_if_opaque$)() const = &::url::Origin::GetTupleOrPrecursorTupleIfOpaque;
  new (return$) ::url::SchemeHostPort const *(&(self.*get_tuple_or_precursor_tuple_if_opaque$)());
}
} // extern "C"

namespace url {
extern "C" {
__attribute__((visibility("default"))) ::std::int8_t url$cxxbridge1$202$origin_compare(::url::Origin const &a, ::url::Origin const &b) noexcept {
  ::std::int8_t (*origin_compare$)(::url::Origin const &, ::url::Origin const &) = ::url::OriginCompare;
  return origin_compare$(a, b);
}

__attribute__((visibility("default"))) void url$cxxbridge1$202$scheme(::url::SchemeHostPort const &tuple, ::rust::Str *return$) noexcept {
  ::rust::Str (*scheme$)(::url::SchemeHostPort const &) = ::url::SchemeHostPortScheme;
  new (return$) ::rust::Str(scheme$(tuple));
}

__attribute__((visibility("default"))) void url$cxxbridge1$202$host(::url::SchemeHostPort const &tuple, ::rust::Str *return$) noexcept {
  ::rust::Str (*host$)(::url::SchemeHostPort const &) = ::url::SchemeHostPortHost;
  new (return$) ::rust::Str(host$(tuple));
}
} // extern "C"
} // namespace url

extern "C" {
__attribute__((visibility("default"))) ::std::uint16_t cxxbridge1$202$SchemeHostPort$port(::url::SchemeHostPort const &self) noexcept {
  ::std::uint16_t (::url::SchemeHostPort::*port$)() const = &::url::SchemeHostPort::port;
  return (self.*port$)();
}
} // extern "C"

namespace url {
extern "C" {
__attribute__((visibility("default"))) ::url::Origin *url$cxxbridge1$202$clone_origin(::url::Origin const &origin) noexcept {
  ::std::unique_ptr<::url::Origin> (*clone_origin$)(::url::Origin const &) = ::url::CloneOrigin;
  return clone_origin$(origin).release();
}

__attribute__((visibility("default"))) ::url::Origin *url$cxxbridge1$202$create_origin_from_gurl(::GURL const &url) noexcept {
  ::std::unique_ptr<::url::Origin> (*create_origin_from_gurl$)(::GURL const &) = ::url::CreateOriginFromGURL;
  return create_origin_from_gurl$(url).release();
}

__attribute__((visibility("default"))) void url$cxxbridge1$202$origin_serialize(::url::Origin const &origin, ::rust::String *return$) noexcept {
  ::rust::String (*origin_serialize$)(::url::Origin const &) = ::url::OriginSerialize;
  new (return$) ::rust::String(origin_serialize$(origin));
}
} // extern "C"
} // namespace url

extern "C" {
static_assert(::rust::detail::is_complete<::std::remove_extent<::url::Origin>::type>::value, "definition of `::url::Origin` is required");
static_assert(sizeof(::std::unique_ptr<::url::Origin>) == sizeof(void *), "");
static_assert(alignof(::std::unique_ptr<::url::Origin>) == alignof(void *), "");
__attribute__((visibility("default"))) void cxxbridge1$unique_ptr$url$Origin$null(::std::unique_ptr<::url::Origin> *ptr) noexcept {
  ::new (ptr) ::std::unique_ptr<::url::Origin>();
}
__attribute__((visibility("default"))) void cxxbridge1$unique_ptr$url$Origin$raw(::std::unique_ptr<::url::Origin> *ptr, ::std::unique_ptr<::url::Origin>::pointer raw) noexcept {
  ::new (ptr) ::std::unique_ptr<::url::Origin>(raw);
}
__attribute__((visibility("default"))) ::std::unique_ptr<::url::Origin>::element_type const *cxxbridge1$unique_ptr$url$Origin$get(::std::unique_ptr<::url::Origin> const &ptr) noexcept {
  return ptr.get();
}
__attribute__((visibility("default"))) ::std::unique_ptr<::url::Origin>::pointer cxxbridge1$unique_ptr$url$Origin$release(::std::unique_ptr<::url::Origin> &ptr) noexcept {
  return ptr.release();
}
__attribute__((visibility("default"))) void cxxbridge1$unique_ptr$url$Origin$drop(::std::unique_ptr<::url::Origin> *ptr) noexcept {
  ::rust::deleter_if<::rust::detail::is_complete<::url::Origin>::value>{}(ptr);
}
} // extern "C"
