#include "url/gurl.h"
#include "url/gurl_shim.h"
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

namespace {
template <typename T>
class impl;
} // namespace

class String;

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

using GURL = ::GURL;

extern "C" {
__declspec(dllexport) bool cxxbridge1$202$GURL$is_valid(::GURL const &self) noexcept {
  bool (::GURL::*is_valid$)() const = &::GURL::is_valid;
  return (self.*is_valid$)();
}

__declspec(dllexport) bool cxxbridge1$202$GURL$is_about_blank(::GURL const &self) noexcept {
  bool (::GURL::*is_about_blank$)() const = &::GURL::IsAboutBlank;
  return (self.*is_about_blank$)();
}

__declspec(dllexport) bool cxxbridge1$202$GURL$is_about_srcdoc(::GURL const &self) noexcept {
  bool (::GURL::*is_about_srcdoc$)() const = &::GURL::IsAboutSrcdoc;
  return (self.*is_about_srcdoc$)();
}

__declspec(dllexport) bool cxxbridge1$202$GURL$scheme_is_blob(::GURL const &self) noexcept {
  bool (::GURL::*scheme_is_blob$)() const = &::GURL::SchemeIsBlob;
  return (self.*scheme_is_blob$)();
}

__declspec(dllexport) bool cxxbridge1$202$GURL$scheme_is_file(::GURL const &self) noexcept {
  bool (::GURL::*scheme_is_file$)() const = &::GURL::SchemeIsFile;
  return (self.*scheme_is_file$)();
}

__declspec(dllexport) bool cxxbridge1$202$GURL$scheme_is_filesystem(::GURL const &self) noexcept {
  bool (::GURL::*scheme_is_filesystem$)() const = &::GURL::SchemeIsFileSystem;
  return (self.*scheme_is_filesystem$)();
}
} // extern "C"

namespace url {
extern "C" {
__declspec(dllexport) ::GURL *url$cxxbridge1$202$create_gurl_from_str(::rust::Str spec) noexcept {
  ::std::unique_ptr<::GURL> (*create_gurl_from_str$)(::rust::Str) = ::url::CreateGURLFromStr;
  return create_gurl_from_str$(spec).release();
}

__declspec(dllexport) void url$cxxbridge1$202$possibly_invalid_spec(::GURL const &gurl, ::rust::Str *return$) noexcept {
  ::rust::Str (*possibly_invalid_spec$)(::GURL const &) = ::url::GURLPossiblyInvalidSpec;
  new (return$) ::rust::Str(possibly_invalid_spec$(gurl));
}

__declspec(dllexport) void url$cxxbridge1$202$gurl_content(::GURL const &gurl, ::rust::Str *return$) noexcept {
  ::rust::Str (*gurl_content$)(::GURL const &) = ::url::GURLContent;
  new (return$) ::rust::Str(gurl_content$(gurl));
}

__declspec(dllexport) void url$cxxbridge1$202$gurl_scheme(::GURL const &gurl, ::rust::Str *return$) noexcept {
  ::rust::Str (*gurl_scheme$)(::GURL const &) = ::url::GURLScheme;
  new (return$) ::rust::Str(gurl_scheme$(gurl));
}

__declspec(dllexport) bool url$cxxbridge1$202$gurl_scheme_is(::GURL const &gurl, ::rust::Str lower_ascii_scheme) noexcept {
  bool (*gurl_scheme_is$)(::GURL const &, ::rust::Str) = ::url::GURLSchemeIs;
  return gurl_scheme_is$(gurl, lower_ascii_scheme);
}
} // extern "C"
} // namespace url

extern "C" {
static_assert(::rust::detail::is_complete<::std::remove_extent<::GURL>::type>::value, "definition of `::GURL` is required");
static_assert(sizeof(::std::unique_ptr<::GURL>) == sizeof(void *), "");
static_assert(alignof(::std::unique_ptr<::GURL>) == alignof(void *), "");
__declspec(dllexport) void cxxbridge1$unique_ptr$GURL$null(::std::unique_ptr<::GURL> *ptr) noexcept {
  ::new (ptr) ::std::unique_ptr<::GURL>();
}
__declspec(dllexport) void cxxbridge1$unique_ptr$GURL$raw(::std::unique_ptr<::GURL> *ptr, ::std::unique_ptr<::GURL>::pointer raw) noexcept {
  ::new (ptr) ::std::unique_ptr<::GURL>(raw);
}
__declspec(dllexport) ::std::unique_ptr<::GURL>::element_type const *cxxbridge1$unique_ptr$GURL$get(::std::unique_ptr<::GURL> const &ptr) noexcept {
  return ptr.get();
}
__declspec(dllexport) ::std::unique_ptr<::GURL>::pointer cxxbridge1$unique_ptr$GURL$release(::std::unique_ptr<::GURL> &ptr) noexcept {
  return ptr.release();
}
__declspec(dllexport) void cxxbridge1$unique_ptr$GURL$drop(::std::unique_ptr<::GURL> *ptr) noexcept {
  ::rust::deleter_if<::rust::detail::is_complete<::GURL>::value>{}(ptr);
}
} // extern "C"
