#include "base/metrics/histogram_rust_shim.h"
#include <array>
#include <cstddef>
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

namespace base {
namespace rust {
extern "C" {
__attribute__((visibility("default"))) void base$rust$cxxbridge1$202$record_bool(::rust::Str name, bool sample) noexcept {
  void (*record_bool$)(::rust::Str, bool) = ::base::rust::record_bool;
  record_bool$(name, sample);
}

__attribute__((visibility("default"))) void base$rust$cxxbridge1$202$record_exact_linear(::rust::Str name, ::std::int32_t sample, ::std::int32_t exclusive_max) noexcept {
  void (*record_exact_linear$)(::rust::Str, ::std::int32_t, ::std::int32_t) = ::base::rust::record_exact_linear;
  record_exact_linear$(name, sample, exclusive_max);
}

__attribute__((visibility("default"))) void base$rust$cxxbridge1$202$record_percentage(::rust::Str name, ::std::int32_t percent) noexcept {
  void (*record_percentage$)(::rust::Str, ::std::int32_t) = ::base::rust::record_percentage;
  record_percentage$(name, percent);
}

__attribute__((visibility("default"))) void base$rust$cxxbridge1$202$record_sparse(::rust::Str name, ::std::int32_t sample) noexcept {
  void (*record_sparse$)(::rust::Str, ::std::int32_t) = ::base::rust::record_sparse;
  record_sparse$(name, sample);
}

__attribute__((visibility("default"))) void base$rust$cxxbridge1$202$record_custom_counts(::rust::Str name, ::std::int32_t sample, ::std::int32_t min, ::std::int32_t exclusive_max, ::std::size_t buckets) noexcept {
  void (*record_custom_counts$)(::rust::Str, ::std::int32_t, ::std::int32_t, ::std::int32_t, ::std::size_t) = ::base::rust::record_custom_counts;
  record_custom_counts$(name, sample, min, exclusive_max, buckets);
}

__attribute__((visibility("default"))) void base$rust$cxxbridge1$202$record_counts_100(::rust::Str name, ::std::int32_t sample) noexcept {
  void (*record_counts_100$)(::rust::Str, ::std::int32_t) = ::base::rust::record_counts_100;
  record_counts_100$(name, sample);
}

__attribute__((visibility("default"))) void base$rust$cxxbridge1$202$record_counts_1000(::rust::Str name, ::std::int32_t sample) noexcept {
  void (*record_counts_1000$)(::rust::Str, ::std::int32_t) = ::base::rust::record_counts_1000;
  record_counts_1000$(name, sample);
}

__attribute__((visibility("default"))) void base$rust$cxxbridge1$202$record_counts_10000(::rust::Str name, ::std::int32_t sample) noexcept {
  void (*record_counts_10000$)(::rust::Str, ::std::int32_t) = ::base::rust::record_counts_10000;
  record_counts_10000$(name, sample);
}

__attribute__((visibility("default"))) void base$rust$cxxbridge1$202$record_counts_100000(::rust::Str name, ::std::int32_t sample) noexcept {
  void (*record_counts_100000$)(::rust::Str, ::std::int32_t) = ::base::rust::record_counts_100000;
  record_counts_100000$(name, sample);
}

__attribute__((visibility("default"))) void base$rust$cxxbridge1$202$record_counts_1m(::rust::Str name, ::std::int32_t sample) noexcept {
  void (*record_counts_1m$)(::rust::Str, ::std::int32_t) = ::base::rust::record_counts_1m;
  record_counts_1m$(name, sample);
}

__attribute__((visibility("default"))) void base$rust$cxxbridge1$202$record_counts_10m(::rust::Str name, ::std::int32_t sample) noexcept {
  void (*record_counts_10m$)(::rust::Str, ::std::int32_t) = ::base::rust::record_counts_10m;
  record_counts_10m$(name, sample);
}

__attribute__((visibility("default"))) void base$rust$cxxbridge1$202$record_memory_kb(::rust::Str name, ::std::int32_t sample_kb) noexcept {
  void (*record_memory_kb$)(::rust::Str, ::std::int32_t) = ::base::rust::record_memory_kb;
  record_memory_kb$(name, sample_kb);
}

__attribute__((visibility("default"))) void base$rust$cxxbridge1$202$record_memory_mb(::rust::Str name, ::std::int32_t sample_mb) noexcept {
  void (*record_memory_mb$)(::rust::Str, ::std::int32_t) = ::base::rust::record_memory_mb;
  record_memory_mb$(name, sample_mb);
}

__attribute__((visibility("default"))) void base$rust$cxxbridge1$202$record_memory_large_mb(::rust::Str name, ::std::int32_t sample_mb) noexcept {
  void (*record_memory_large_mb$)(::rust::Str, ::std::int32_t) = ::base::rust::record_memory_large_mb;
  record_memory_large_mb$(name, sample_mb);
}

__attribute__((visibility("default"))) void base$rust$cxxbridge1$202$record_custom_times(::rust::Str name, ::std::int64_t sample_us, ::std::int64_t min_us, ::std::int64_t max_us, ::std::size_t buckets) noexcept {
  void (*record_custom_times$)(::rust::Str, ::std::int64_t, ::std::int64_t, ::std::int64_t, ::std::size_t) = ::base::rust::record_custom_times;
  record_custom_times$(name, sample_us, min_us, max_us, buckets);
}

__attribute__((visibility("default"))) void base$rust$cxxbridge1$202$record_short_times(::rust::Str name, ::std::int64_t sample_us) noexcept {
  void (*record_short_times$)(::rust::Str, ::std::int64_t) = ::base::rust::record_short_times;
  record_short_times$(name, sample_us);
}

__attribute__((visibility("default"))) void base$rust$cxxbridge1$202$record_medium_times(::rust::Str name, ::std::int64_t sample_us) noexcept {
  void (*record_medium_times$)(::rust::Str, ::std::int64_t) = ::base::rust::record_medium_times;
  record_medium_times$(name, sample_us);
}

__attribute__((visibility("default"))) void base$rust$cxxbridge1$202$record_long_times(::rust::Str name, ::std::int64_t sample_us) noexcept {
  void (*record_long_times$)(::rust::Str, ::std::int64_t) = ::base::rust::record_long_times;
  record_long_times$(name, sample_us);
}

__attribute__((visibility("default"))) void base$rust$cxxbridge1$202$record_long_times_100(::rust::Str name, ::std::int64_t sample_us) noexcept {
  void (*record_long_times_100$)(::rust::Str, ::std::int64_t) = ::base::rust::record_long_times_100;
  record_long_times_100$(name, sample_us);
}

__attribute__((visibility("default"))) void base$rust$cxxbridge1$202$record_custom_microseconds_times(::rust::Str name, ::std::int64_t sample_us, ::std::int64_t min_us, ::std::int64_t max_us, ::std::size_t buckets) noexcept {
  void (*record_custom_microseconds_times$)(::rust::Str, ::std::int64_t, ::std::int64_t, ::std::int64_t, ::std::size_t) = ::base::rust::record_custom_microseconds_times;
  record_custom_microseconds_times$(name, sample_us, min_us, max_us, buckets);
}

__attribute__((visibility("default"))) void base$rust$cxxbridge1$202$record_microseconds_times(::rust::Str name, ::std::int64_t sample_us) noexcept {
  void (*record_microseconds_times$)(::rust::Str, ::std::int64_t) = ::base::rust::record_microseconds_times;
  record_microseconds_times$(name, sample_us);
}

__attribute__((visibility("default"))) ::std::int64_t base$rust$cxxbridge1$202$time_ticks_now_microseconds() noexcept {
  ::std::int64_t (*time_ticks_now_microseconds$)() = ::base::rust::time_ticks_now_microseconds;
  return time_ticks_now_microseconds$();
}
} // extern "C"
} // namespace rust
} // namespace base
