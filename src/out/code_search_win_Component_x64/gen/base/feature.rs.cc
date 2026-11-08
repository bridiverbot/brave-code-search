#include "base/feature.h"
#include "base/feature_list.h"
#include "base/feature_rust_shim.h"
#include <array>
#include <cstdint>
#include <new>
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
} // namespace cxxbridge1
} // namespace rust

namespace base {
  using Feature = ::base::Feature;
  using FeatureList = ::base::FeatureList;
}

namespace base {
extern "C" {
__declspec(dllexport) bool base$cxxbridge1$202$FeatureList$IsEnabled(::base::Feature const &feature) noexcept {
  bool (*IsEnabled$)(::base::Feature const &) = &::base::FeatureList::IsEnabled;
  return IsEnabled$(feature);
}

__declspec(dllexport) bool base$cxxbridge1$202$get_bool_param(::base::Feature const &feature, ::rust::Str param_name, bool default_value) noexcept {
  bool (*get_bool_param$)(::base::Feature const &, ::rust::Str, bool) = ::base::GetFieldTrialParamByFeatureAsBoolShim;
  return get_bool_param$(feature, param_name, default_value);
}

__declspec(dllexport) ::std::int32_t base$cxxbridge1$202$get_int_param(::base::Feature const &feature, ::rust::Str param_name, ::std::int32_t default_value) noexcept {
  ::std::int32_t (*get_int_param$)(::base::Feature const &, ::rust::Str, ::std::int32_t) = ::base::GetFieldTrialParamByFeatureAsIntShim;
  return get_int_param$(feature, param_name, default_value);
}

__declspec(dllexport) double base$cxxbridge1$202$get_double_param(::base::Feature const &feature, ::rust::Str param_name, double default_value) noexcept {
  double (*get_double_param$)(::base::Feature const &, ::rust::Str, double) = ::base::GetFieldTrialParamByFeatureAsDoubleShim;
  return get_double_param$(feature, param_name, default_value);
}

__declspec(dllexport) void base$cxxbridge1$202$get_string_param(::base::Feature const &feature, ::rust::Str param_name, ::rust::Str default_value, ::rust::String *return$) noexcept {
  ::rust::String (*get_string_param$)(::base::Feature const &, ::rust::Str, ::rust::Str) = ::base::GetFieldTrialParamByFeatureAsStringShim;
  new (return$) ::rust::String(get_string_param$(feature, param_name, default_value));
}

__declspec(dllexport) ::std::int64_t base$cxxbridge1$202$get_time_delta_param(::base::Feature const &feature, ::rust::Str param_name, ::std::int64_t default_value_micros) noexcept {
  ::std::int64_t (*get_time_delta_param$)(::base::Feature const &, ::rust::Str, ::std::int64_t) = ::base::GetFieldTrialParamByFeatureAsTimeDeltaInMicrosecondsShim;
  return get_time_delta_param$(feature, param_name, default_value_micros);
}
} // extern "C"
} // namespace base
