#include "base/test/metrics/histogram_tester_rust_shim.h"
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

namespace base {
  namespace test {
    namespace rust {
      using HistogramTesterRs = ::base::test::rust::HistogramTesterRs;
    }
  }
}

namespace base {
namespace test {
namespace rust {
extern "C" {
__attribute__((visibility("default"))) ::base::test::rust::HistogramTesterRs *base$test$rust$cxxbridge1$202$CreateHistogramTesterRs() noexcept {
  ::std::unique_ptr<::base::test::rust::HistogramTesterRs> (*CreateHistogramTesterRs$)() = ::base::test::rust::CreateHistogramTesterRs;
  return CreateHistogramTesterRs$().release();
}

__attribute__((visibility("default"))) void base$test$rust$cxxbridge1$202$HistogramTesterRs$ExpectUniqueSample(::base::test::rust::HistogramTesterRs const &self, ::rust::Str name, ::std::int32_t sample, ::std::int32_t expected_bucket_count) noexcept {
  void (::base::test::rust::HistogramTesterRs::*ExpectUniqueSample$)(::rust::Str, ::std::int32_t, ::std::int32_t) const = &::base::test::rust::HistogramTesterRs::ExpectUniqueSample;
  (self.*ExpectUniqueSample$)(name, sample, expected_bucket_count);
}

__attribute__((visibility("default"))) void base$test$rust$cxxbridge1$202$HistogramTesterRs$ExpectBucketCount(::base::test::rust::HistogramTesterRs const &self, ::rust::Str name, ::std::int32_t sample, ::std::int32_t expected_count) noexcept {
  void (::base::test::rust::HistogramTesterRs::*ExpectBucketCount$)(::rust::Str, ::std::int32_t, ::std::int32_t) const = &::base::test::rust::HistogramTesterRs::ExpectBucketCount;
  (self.*ExpectBucketCount$)(name, sample, expected_count);
}

__attribute__((visibility("default"))) void base$test$rust$cxxbridge1$202$HistogramTesterRs$ExpectTotalCount(::base::test::rust::HistogramTesterRs const &self, ::rust::Str name, ::std::int32_t expected_count) noexcept {
  void (::base::test::rust::HistogramTesterRs::*ExpectTotalCount$)(::rust::Str, ::std::int32_t) const = &::base::test::rust::HistogramTesterRs::ExpectTotalCount;
  (self.*ExpectTotalCount$)(name, expected_count);
}

__attribute__((visibility("default"))) void base$test$rust$cxxbridge1$202$HistogramTesterRs$ExpectTimeBucketCount(::base::test::rust::HistogramTesterRs const &self, ::rust::Str name, ::std::int64_t sample_us, ::std::int32_t expected_count) noexcept {
  void (::base::test::rust::HistogramTesterRs::*ExpectTimeBucketCount$)(::rust::Str, ::std::int64_t, ::std::int32_t) const = &::base::test::rust::HistogramTesterRs::ExpectTimeBucketCount;
  (self.*ExpectTimeBucketCount$)(name, sample_us, expected_count);
}

__attribute__((visibility("default"))) void base$test$rust$cxxbridge1$202$HistogramTesterRs$ExpectUniqueTimeSample(::base::test::rust::HistogramTesterRs const &self, ::rust::Str name, ::std::int64_t sample_us, ::std::int32_t expected_bucket_count) noexcept {
  void (::base::test::rust::HistogramTesterRs::*ExpectUniqueTimeSample$)(::rust::Str, ::std::int64_t, ::std::int32_t) const = &::base::test::rust::HistogramTesterRs::ExpectUniqueTimeSample;
  (self.*ExpectUniqueTimeSample$)(name, sample_us, expected_bucket_count);
}
} // extern "C"
} // namespace rust
} // namespace test
} // namespace base

extern "C" {
static_assert(::rust::detail::is_complete<::std::remove_extent<::base::test::rust::HistogramTesterRs>::type>::value, "definition of `::base::test::rust::HistogramTesterRs` is required");
static_assert(sizeof(::std::unique_ptr<::base::test::rust::HistogramTesterRs>) == sizeof(void *), "");
static_assert(alignof(::std::unique_ptr<::base::test::rust::HistogramTesterRs>) == alignof(void *), "");
__attribute__((visibility("default"))) void cxxbridge1$unique_ptr$base$test$rust$HistogramTesterRs$null(::std::unique_ptr<::base::test::rust::HistogramTesterRs> *ptr) noexcept {
  ::new (ptr) ::std::unique_ptr<::base::test::rust::HistogramTesterRs>();
}
__attribute__((visibility("default"))) void cxxbridge1$unique_ptr$base$test$rust$HistogramTesterRs$raw(::std::unique_ptr<::base::test::rust::HistogramTesterRs> *ptr, ::std::unique_ptr<::base::test::rust::HistogramTesterRs>::pointer raw) noexcept {
  ::new (ptr) ::std::unique_ptr<::base::test::rust::HistogramTesterRs>(raw);
}
__attribute__((visibility("default"))) ::std::unique_ptr<::base::test::rust::HistogramTesterRs>::element_type const *cxxbridge1$unique_ptr$base$test$rust$HistogramTesterRs$get(::std::unique_ptr<::base::test::rust::HistogramTesterRs> const &ptr) noexcept {
  return ptr.get();
}
__attribute__((visibility("default"))) ::std::unique_ptr<::base::test::rust::HistogramTesterRs>::pointer cxxbridge1$unique_ptr$base$test$rust$HistogramTesterRs$release(::std::unique_ptr<::base::test::rust::HistogramTesterRs> &ptr) noexcept {
  return ptr.release();
}
__attribute__((visibility("default"))) void cxxbridge1$unique_ptr$base$test$rust$HistogramTesterRs$drop(::std::unique_ptr<::base::test::rust::HistogramTesterRs> *ptr) noexcept {
  ::rust::deleter_if<::rust::detail::is_complete<::base::test::rust::HistogramTesterRs>::value>{}(ptr);
}
} // extern "C"
