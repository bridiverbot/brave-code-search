#include "brave/chromium_src/third_party/rust/serde_json_lenient/v0_2/wrapper/functions.h"
#include <array>
#include <cstdint>
#include <string>
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
} // namespace cxxbridge1
} // namespace rust

namespace serde_json_lenient {
extern "C" {
__attribute__((visibility("default"))) void serde_json_lenient$cxxbridge1$202$list_append_i64(::serde_json_lenient::List &ctx, ::std::int64_t val) noexcept {
  void (*list_append_i64$)(::serde_json_lenient::List &, ::std::int64_t) = ::serde_json_lenient::list_append_i64;
  list_append_i64$(ctx, val);
}

__attribute__((visibility("default"))) void serde_json_lenient$cxxbridge1$202$list_append_u64(::serde_json_lenient::List &ctx, ::std::uint64_t val) noexcept {
  void (*list_append_u64$)(::serde_json_lenient::List &, ::std::uint64_t) = ::serde_json_lenient::list_append_u64;
  list_append_u64$(ctx, val);
}

__attribute__((visibility("default"))) void serde_json_lenient$cxxbridge1$202$dict_set_i64(::serde_json_lenient::Dict &ctx, ::rust::Str key, ::std::int64_t val) noexcept {
  void (*dict_set_i64$)(::serde_json_lenient::Dict &, ::rust::Str, ::std::int64_t) = ::serde_json_lenient::dict_set_i64;
  dict_set_i64$(ctx, key, val);
}

__attribute__((visibility("default"))) void serde_json_lenient$cxxbridge1$202$dict_set_u64(::serde_json_lenient::Dict &ctx, ::rust::Str key, ::std::uint64_t val) noexcept {
  void (*dict_set_u64$)(::serde_json_lenient::Dict &, ::rust::Str, ::std::uint64_t) = ::serde_json_lenient::dict_set_u64;
  dict_set_u64$(ctx, key, val);
}
} // extern "C"
} // namespace serde_json_lenient
