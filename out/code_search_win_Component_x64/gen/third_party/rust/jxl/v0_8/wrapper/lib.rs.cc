#include "third_party/rust/jxl/v0_8/wrapper/parallel_runner.h"
#include <array>
#include <cassert>
#include <cstddef>
#include <cstdint>
#include <iterator>
#include <new>
#include <stdexcept>
#include <type_traits>
#include <utility>
#if __cplusplus >= 202002L
#include <ranges>
#endif

#ifdef __GNUC__
#pragma GCC diagnostic ignored "-Wmissing-declarations"
#ifdef __clang__
#pragma clang diagnostic ignored "-Wdollar-in-identifier-extension"
#pragma clang diagnostic ignored "-Wreturn-type-c-linkage"
#endif // __clang__
#endif // __GNUC__

namespace rust {
inline namespace cxxbridge1 {
// #include "rust/cxx.h"

#ifndef CXXBRIDGE1_PANIC
#define CXXBRIDGE1_PANIC
template <typename Exception>
void panic [[noreturn]] (const char *msg);
#endif // CXXBRIDGE1_PANIC

namespace {
template <typename T>
class impl;
} // namespace

template <typename T>
::std::size_t size_of();
template <typename T>
::std::size_t align_of();

#ifndef CXXBRIDGE1_RUST_SLICE
#define CXXBRIDGE1_RUST_SLICE
namespace detail {
template <bool>
struct copy_assignable_if {};

template <>
struct copy_assignable_if<false> {
  copy_assignable_if() noexcept = default;
  copy_assignable_if(const copy_assignable_if &) noexcept = default;
  copy_assignable_if &operator=(const copy_assignable_if &) & noexcept = delete;
  copy_assignable_if &operator=(copy_assignable_if &&) & noexcept = default;
};
} // namespace detail

template <typename T>
class Slice final
    : private detail::copy_assignable_if<std::is_const<T>::value> {
public:
  using value_type = T;

  Slice() noexcept;
  Slice(T *, std::size_t count) noexcept;

  template <typename C>
  explicit Slice(C &c) : Slice(c.data(), c.size()) {}

  Slice &operator=(const Slice<T> &) & noexcept = default;
  Slice &operator=(Slice<T> &&) & noexcept = default;

  T *data() const noexcept;
  std::size_t size() const noexcept;
  std::size_t length() const noexcept;
  bool empty() const noexcept;

  T &operator[](std::size_t n) const noexcept;
  T &at(std::size_t n) const;
  T &front() const noexcept;
  T &back() const noexcept;

  Slice(const Slice<T> &) noexcept = default;
  ~Slice() noexcept = default;

  class iterator;
  iterator begin() const noexcept;
  iterator end() const noexcept;

  void swap(Slice &) noexcept;

private:
  class uninit;
  Slice(uninit) noexcept;
  friend impl<Slice>;
  friend void sliceInit(void *, const void *, std::size_t) noexcept;
  friend void *slicePtr(const void *) noexcept;
  friend std::size_t sliceLen(const void *) noexcept;

  std::array<std::uintptr_t, 2> repr;
};

#ifdef __cpp_deduction_guides
template <typename C>
explicit Slice(C &c)
    -> Slice<std::remove_reference_t<decltype(*std::declval<C>().data())>>;
#endif // __cpp_deduction_guides

template <typename T>
class Slice<T>::iterator final {
public:
#if __cplusplus >= 202002L
  using iterator_category = std::contiguous_iterator_tag;
#else
  using iterator_category = std::random_access_iterator_tag;
#endif
  using value_type = T;
  using difference_type = std::ptrdiff_t;
  using pointer = typename std::add_pointer<T>::type;
  using reference = typename std::add_lvalue_reference<T>::type;

  reference operator*() const noexcept;
  pointer operator->() const noexcept;
  reference operator[](difference_type) const noexcept;

  iterator &operator++() noexcept;
  iterator operator++(int) noexcept;
  iterator &operator--() noexcept;
  iterator operator--(int) noexcept;

  iterator &operator+=(difference_type) noexcept;
  iterator &operator-=(difference_type) noexcept;
  iterator operator+(difference_type) const noexcept;
  friend inline iterator operator+(difference_type lhs, iterator rhs) noexcept {
    return rhs + lhs;
  }
  iterator operator-(difference_type) const noexcept;
  difference_type operator-(const iterator &) const noexcept;

  bool operator==(const iterator &) const noexcept;
  bool operator!=(const iterator &) const noexcept;
  bool operator<(const iterator &) const noexcept;
  bool operator<=(const iterator &) const noexcept;
  bool operator>(const iterator &) const noexcept;
  bool operator>=(const iterator &) const noexcept;

private:
  friend class Slice;
  void *pos;
  std::size_t stride;
};

template <typename T>
Slice<T>::Slice() noexcept {
  sliceInit(this, reinterpret_cast<void *>(align_of<T>()), 0);
}

template <typename T>
Slice<T>::Slice(T *s, std::size_t count) noexcept {
  assert(s != nullptr || count == 0);
  sliceInit(this,
            s == nullptr && count == 0
                ? reinterpret_cast<void *>(align_of<T>())
                : const_cast<typename std::remove_const<T>::type *>(s),
            count);
}

template <typename T>
T *Slice<T>::data() const noexcept {
  return reinterpret_cast<T *>(slicePtr(this));
}

template <typename T>
std::size_t Slice<T>::size() const noexcept {
  return sliceLen(this);
}

template <typename T>
std::size_t Slice<T>::length() const noexcept {
  return this->size();
}

template <typename T>
bool Slice<T>::empty() const noexcept {
  return this->size() == 0;
}

template <typename T>
T &Slice<T>::operator[](std::size_t n) const noexcept {
  assert(n < this->size());
  auto ptr = static_cast<char *>(slicePtr(this)) + size_of<T>() * n;
  return *reinterpret_cast<T *>(ptr);
}

template <typename T>
T &Slice<T>::at(std::size_t n) const {
  if (n >= this->size()) {
    panic<std::out_of_range>("rust::Slice index out of range");
  }
  return (*this)[n];
}

template <typename T>
T &Slice<T>::front() const noexcept {
  assert(!this->empty());
  return (*this)[0];
}

template <typename T>
T &Slice<T>::back() const noexcept {
  assert(!this->empty());
  return (*this)[this->size() - 1];
}

template <typename T>
typename Slice<T>::iterator::reference
Slice<T>::iterator::operator*() const noexcept {
  return *static_cast<T *>(this->pos);
}

template <typename T>
typename Slice<T>::iterator::pointer
Slice<T>::iterator::operator->() const noexcept {
  return static_cast<T *>(this->pos);
}

template <typename T>
typename Slice<T>::iterator::reference Slice<T>::iterator::operator[](
    typename Slice<T>::iterator::difference_type n) const noexcept {
  auto ptr = static_cast<char *>(this->pos) + this->stride * n;
  return *reinterpret_cast<T *>(ptr);
}

template <typename T>
typename Slice<T>::iterator &Slice<T>::iterator::operator++() noexcept {
  this->pos = static_cast<char *>(this->pos) + this->stride;
  return *this;
}

template <typename T>
typename Slice<T>::iterator Slice<T>::iterator::operator++(int) noexcept {
  auto ret = iterator(*this);
  this->pos = static_cast<char *>(this->pos) + this->stride;
  return ret;
}

template <typename T>
typename Slice<T>::iterator &Slice<T>::iterator::operator--() noexcept {
  this->pos = static_cast<char *>(this->pos) - this->stride;
  return *this;
}

template <typename T>
typename Slice<T>::iterator Slice<T>::iterator::operator--(int) noexcept {
  auto ret = iterator(*this);
  this->pos = static_cast<char *>(this->pos) - this->stride;
  return ret;
}

template <typename T>
typename Slice<T>::iterator &Slice<T>::iterator::operator+=(
    typename Slice<T>::iterator::difference_type n) noexcept {
  this->pos = static_cast<char *>(this->pos) + this->stride * n;
  return *this;
}

template <typename T>
typename Slice<T>::iterator &Slice<T>::iterator::operator-=(
    typename Slice<T>::iterator::difference_type n) noexcept {
  this->pos = static_cast<char *>(this->pos) - this->stride * n;
  return *this;
}

template <typename T>
typename Slice<T>::iterator Slice<T>::iterator::operator+(
    typename Slice<T>::iterator::difference_type n) const noexcept {
  auto ret = iterator(*this);
  ret.pos = static_cast<char *>(this->pos) + this->stride * n;
  return ret;
}

template <typename T>
typename Slice<T>::iterator Slice<T>::iterator::operator-(
    typename Slice<T>::iterator::difference_type n) const noexcept {
  auto ret = iterator(*this);
  ret.pos = static_cast<char *>(this->pos) - this->stride * n;
  return ret;
}

template <typename T>
typename Slice<T>::iterator::difference_type
Slice<T>::iterator::operator-(const iterator &other) const noexcept {
  auto diff = std::distance(static_cast<char *>(other.pos),
                            static_cast<char *>(this->pos));
  return diff / static_cast<typename Slice<T>::iterator::difference_type>(
                    this->stride);
}

template <typename T>
bool Slice<T>::iterator::operator==(const iterator &other) const noexcept {
  return this->pos == other.pos;
}

template <typename T>
bool Slice<T>::iterator::operator!=(const iterator &other) const noexcept {
  return this->pos != other.pos;
}

template <typename T>
bool Slice<T>::iterator::operator<(const iterator &other) const noexcept {
  return this->pos < other.pos;
}

template <typename T>
bool Slice<T>::iterator::operator<=(const iterator &other) const noexcept {
  return this->pos <= other.pos;
}

template <typename T>
bool Slice<T>::iterator::operator>(const iterator &other) const noexcept {
  return this->pos > other.pos;
}

template <typename T>
bool Slice<T>::iterator::operator>=(const iterator &other) const noexcept {
  return this->pos >= other.pos;
}

template <typename T>
typename Slice<T>::iterator Slice<T>::begin() const noexcept {
  iterator it;
  it.pos = slicePtr(this);
  it.stride = size_of<T>();
  return it;
}

template <typename T>
typename Slice<T>::iterator Slice<T>::end() const noexcept {
  iterator it = this->begin();
  it.pos = static_cast<char *>(it.pos) + it.stride * this->size();
  return it;
}

template <typename T>
void Slice<T>::swap(Slice &rhs) noexcept {
  std::swap(*this, rhs);
}
#endif // CXXBRIDGE1_RUST_SLICE

#ifndef CXXBRIDGE1_RUST_BOX
#define CXXBRIDGE1_RUST_BOX
template <typename T>
class Box final {
public:
  using element_type = T;
  using const_pointer =
      typename std::add_pointer<typename std::add_const<T>::type>::type;
  using pointer = typename std::add_pointer<T>::type;

  Box() = delete;
  Box(Box &&) noexcept;
  ~Box() noexcept;

  explicit Box(const T &);
  explicit Box(T &&);

  Box &operator=(Box &&) & noexcept;

  const T *operator->() const noexcept;
  const T &operator*() const noexcept;
  T *operator->() noexcept;
  T &operator*() noexcept;

  template <typename... Fields>
  static Box in_place(Fields &&...);

  void swap(Box &) noexcept;

  static Box from_raw(T *) noexcept;

  T *into_raw() noexcept;

  /* Deprecated */ using value_type = element_type;

private:
  class uninit;
  class allocation;
  Box(uninit) noexcept;
  void drop() noexcept;

  friend void swap(Box &lhs, Box &rhs) noexcept { lhs.swap(rhs); }

  T *ptr;
};

template <typename T>
class Box<T>::uninit {};

template <typename T>
class Box<T>::allocation {
  static T *alloc() noexcept;
  static void dealloc(T *) noexcept;

public:
  allocation() noexcept : ptr(alloc()) {}
  ~allocation() noexcept {
    if (this->ptr) {
      dealloc(this->ptr);
    }
  }
  T *ptr;
};

template <typename T>
Box<T>::Box(Box &&other) noexcept : ptr(other.ptr) {
  other.ptr = nullptr;
}

template <typename T>
Box<T>::Box(const T &val) {
  allocation alloc;
  ::new (alloc.ptr) T(val);
  this->ptr = alloc.ptr;
  alloc.ptr = nullptr;
}

template <typename T>
Box<T>::Box(T &&val) {
  allocation alloc;
  ::new (alloc.ptr) T(std::move(val));
  this->ptr = alloc.ptr;
  alloc.ptr = nullptr;
}

template <typename T>
Box<T>::~Box() noexcept {
  if (this->ptr) {
    this->drop();
  }
}

template <typename T>
Box<T> &Box<T>::operator=(Box &&other) & noexcept {
  if (this->ptr) {
    this->drop();
  }
  this->ptr = other.ptr;
  other.ptr = nullptr;
  return *this;
}

template <typename T>
const T *Box<T>::operator->() const noexcept {
  return this->ptr;
}

template <typename T>
const T &Box<T>::operator*() const noexcept {
  return *this->ptr;
}

template <typename T>
T *Box<T>::operator->() noexcept {
  return this->ptr;
}

template <typename T>
T &Box<T>::operator*() noexcept {
  return *this->ptr;
}

template <typename T>
template <typename... Fields>
Box<T> Box<T>::in_place(Fields &&...fields) {
  allocation alloc;
  auto ptr = alloc.ptr;
  ::new (ptr) T{std::forward<Fields>(fields)...};
  alloc.ptr = nullptr;
  return from_raw(ptr);
}

template <typename T>
void Box<T>::swap(Box &rhs) noexcept {
  using std::swap;
  swap(this->ptr, rhs.ptr);
}

template <typename T>
Box<T> Box<T>::from_raw(T *raw) noexcept {
  Box box = uninit{};
  box.ptr = raw;
  return box;
}

template <typename T>
T *Box<T>::into_raw() noexcept {
  T *raw = this->ptr;
  this->ptr = nullptr;
  return raw;
}

template <typename T>
Box<T>::Box(uninit) noexcept {}
#endif // CXXBRIDGE1_RUST_BOX

#ifndef CXXBRIDGE1_RUST_FN
#define CXXBRIDGE1_RUST_FN
template <typename Signature>
class Fn;

template <typename Ret, typename... Args>
class Fn<Ret(Args...)> final {
public:
  Ret operator()(Args... args) const noexcept;
  Fn operator*() const noexcept;

private:
  Ret (*trampoline)(Args..., void *fn) noexcept;
  void *fn;
};

template <typename Ret, typename... Args>
Ret Fn<Ret(Args...)>::operator()(Args... args) const noexcept {
  return (*this->trampoline)(std::forward<Args>(args)..., this->fn);
}

template <typename Ret, typename... Args>
Fn<Ret(Args...)> Fn<Ret(Args...)>::operator*() const noexcept {
  return *this;
}
#endif // CXXBRIDGE1_RUST_FN

#ifndef CXXBRIDGE1_RUST_OPAQUE
#define CXXBRIDGE1_RUST_OPAQUE
class Opaque {
public:
  Opaque() = delete;
  Opaque(const Opaque &) = delete;
  ~Opaque() = delete;
};
#endif // CXXBRIDGE1_RUST_OPAQUE

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

#ifndef CXXBRIDGE1_LAYOUT
#define CXXBRIDGE1_LAYOUT
class layout {
  template <typename T>
  friend std::size_t size_of();
  template <typename T>
  friend std::size_t align_of();
  template <typename T>
  static typename std::enable_if<std::is_base_of<Opaque, T>::value,
                                 std::size_t>::type
  do_size_of() {
    return T::layout::size();
  }
  template <typename T>
  static typename std::enable_if<!std::is_base_of<Opaque, T>::value,
                                 std::size_t>::type
  do_size_of() {
    return sizeof(T);
  }
  template <typename T>
  static
      typename std::enable_if<detail::is_complete<T>::value, std::size_t>::type
      size_of() {
    return do_size_of<T>();
  }
  template <typename T>
  static typename std::enable_if<std::is_base_of<Opaque, T>::value,
                                 std::size_t>::type
  do_align_of() {
    return T::layout::align();
  }
  template <typename T>
  static typename std::enable_if<!std::is_base_of<Opaque, T>::value,
                                 std::size_t>::type
  do_align_of() {
    return alignof(T);
  }
  template <typename T>
  static
      typename std::enable_if<detail::is_complete<T>::value, std::size_t>::type
      align_of() {
    return do_align_of<T>();
  }
};

template <typename T>
std::size_t size_of() {
  return layout::size_of<T>();
}

template <typename T>
std::size_t align_of() {
  return layout::align_of<T>();
}
#endif // CXXBRIDGE1_LAYOUT

template <typename T>
class Slice<T>::uninit {};
template <typename T>
inline Slice<T>::Slice(uninit) noexcept {}

namespace repr {
using Fat = ::std::array<::std::uintptr_t, 2>;
} // namespace repr

namespace detail {
template <typename T, typename = void *>
struct operator_new {
  void *operator()(::std::size_t sz) { return ::operator new(sz); }
};

template <typename T>
struct operator_new<T, decltype(T::operator new(sizeof(T)))> {
  void *operator()(::std::size_t sz) { return T::operator new(sz); }
};
} // namespace detail

template <typename T>
union MaybeUninit {
  T value;
  void *operator new(::std::size_t sz) { return detail::operator_new<T>{}(sz); }
  MaybeUninit() {}
  ~MaybeUninit() {}
};

namespace {
template <typename T>
class impl<Slice<T>> final {
public:
  static Slice<T> slice(repr::Fat repr) noexcept {
    Slice<T> slice = typename Slice<T>::uninit{};
    slice.repr = repr;
    return slice;
  }
};
} // namespace
} // namespace cxxbridge1
} // namespace rust

#if __cplusplus >= 201402L
#define CXX_DEFAULT_VALUE(value) = value
#else
#define CXX_DEFAULT_VALUE(value)
#endif

namespace blink {
  namespace jxl_rs {
    enum class JxlRsStatus : ::std::uint8_t;
    enum class JxlRsPixelFormat : ::std::uint8_t;
    struct JxlRsBasicInfo;
    struct JxlRsProcessResult;
    struct JxlRsVisibleFrameInfo;
    struct JxlRsDecoder;
    using c_void = ::blink::jxl_rs::c_void;
  }
}

namespace blink {
namespace jxl_rs {
#ifndef CXXBRIDGE1_ENUM_blink$jxl_rs$JxlRsStatus
#define CXXBRIDGE1_ENUM_blink$jxl_rs$JxlRsStatus
enum class JxlRsStatus : ::std::uint8_t {
  Success = 0,
  Error = 1,
  NeedMoreInput = 2,
};
#endif // CXXBRIDGE1_ENUM_blink$jxl_rs$JxlRsStatus

#ifndef CXXBRIDGE1_ENUM_blink$jxl_rs$JxlRsPixelFormat
#define CXXBRIDGE1_ENUM_blink$jxl_rs$JxlRsPixelFormat
enum class JxlRsPixelFormat : ::std::uint8_t {
  Rgba8 = 0,
  Rgba16 = 1,
  RgbaF16 = 2,
  RgbaF32 = 3,
  Bgra8 = 4,
};
#endif // CXXBRIDGE1_ENUM_blink$jxl_rs$JxlRsPixelFormat

#ifndef CXXBRIDGE1_STRUCT_blink$jxl_rs$JxlRsBasicInfo
#define CXXBRIDGE1_STRUCT_blink$jxl_rs$JxlRsBasicInfo
struct JxlRsBasicInfo final {
  ::std::uint32_t width CXX_DEFAULT_VALUE(0);
  ::std::uint32_t height CXX_DEFAULT_VALUE(0);
  ::std::uint32_t bits_per_sample CXX_DEFAULT_VALUE(0);
  ::std::uint32_t num_extra_channels CXX_DEFAULT_VALUE(0);
  bool has_black_channel CXX_DEFAULT_VALUE(false);
  bool has_alpha CXX_DEFAULT_VALUE(false);
  bool alpha_premultiplied CXX_DEFAULT_VALUE(false);
  bool have_animation CXX_DEFAULT_VALUE(false);
  ::std::uint32_t animation_loop_count CXX_DEFAULT_VALUE(0);
  ::std::uint32_t animation_tps_numerator CXX_DEFAULT_VALUE(0);
  ::std::uint32_t animation_tps_denominator CXX_DEFAULT_VALUE(0);
  bool uses_original_profile CXX_DEFAULT_VALUE(false);
  ::std::uint32_t orientation CXX_DEFAULT_VALUE(0);
  bool is_grayscale CXX_DEFAULT_VALUE(false);
  float intensity_target CXX_DEFAULT_VALUE(0);

  using IsRelocatable = ::std::true_type;
};
#endif // CXXBRIDGE1_STRUCT_blink$jxl_rs$JxlRsBasicInfo

#ifndef CXXBRIDGE1_STRUCT_blink$jxl_rs$JxlRsProcessResult
#define CXXBRIDGE1_STRUCT_blink$jxl_rs$JxlRsProcessResult
// Result of a process call.
struct JxlRsProcessResult final {
  ::blink::jxl_rs::JxlRsStatus status;
  ::std::size_t bytes_consumed CXX_DEFAULT_VALUE(0);

  using IsRelocatable = ::std::true_type;
};
#endif // CXXBRIDGE1_STRUCT_blink$jxl_rs$JxlRsProcessResult

#ifndef CXXBRIDGE1_STRUCT_blink$jxl_rs$JxlRsVisibleFrameInfo
#define CXXBRIDGE1_STRUCT_blink$jxl_rs$JxlRsVisibleFrameInfo
// Information about a single visible frame discovered by the scanner.
struct JxlRsVisibleFrameInfo final {
  // Duration in milliseconds.
  double duration_ms CXX_DEFAULT_VALUE(0);
  // Whether this frame can be decoded independently (no dependencies).
  bool is_keyframe CXX_DEFAULT_VALUE(false);
  // Whether this is the last frame in the codestream.
  bool is_last CXX_DEFAULT_VALUE(false);

  using IsRelocatable = ::std::true_type;
};
#endif // CXXBRIDGE1_STRUCT_blink$jxl_rs$JxlRsVisibleFrameInfo

#ifndef CXXBRIDGE1_STRUCT_blink$jxl_rs$JxlRsDecoder
#define CXXBRIDGE1_STRUCT_blink$jxl_rs$JxlRsDecoder
// Decoder type
struct JxlRsDecoder final : public ::rust::Opaque {
  // Set the output pixel format. Must be called after getting basic
  // info.
  __declspec(dllexport) bool set_pixel_format(::blink::jxl_rs::JxlRsPixelFormat format, ::std::uint32_t num_extra_channels) noexcept;

  __declspec(dllexport) ::blink::jxl_rs::JxlRsProcessResult process(::rust::Slice<::std::uint8_t const> data, ::rust::Slice<::std::uint8_t > buffer, ::std::uint32_t width, ::std::uint32_t height, ::std::size_t row_stride) noexcept;

  // Flush whatever pixels have been decoded so far into the buffer.
  // Used for progressive rendering.
  __declspec(dllexport) ::blink::jxl_rs::JxlRsProcessResult flush_pixels(::rust::Slice<::std::uint8_t > buffer, ::std::uint32_t width, ::std::uint32_t height, ::std::size_t row_stride) noexcept;

  // Whether basic info has been parsed.
  __declspec(dllexport) bool has_basic_info() const noexcept;

  // Get basic info (valid after has_basic_info returns true).
  __declspec(dllexport) ::blink::jxl_rs::JxlRsBasicInfo get_basic_info() const noexcept;

  // Get ICC profile data (valid after has_basic_info returns true).
  // Returns an empty slice if no embedded ICC profile exists.
  // `mut` because the ICC profile is cached between calls.
  __declspec(dllexport) ::rust::Slice<::std::uint8_t const> get_icc_profile() noexcept;

  // Check if more frames are available.
  __declspec(dllexport) bool has_more_frames() const noexcept;

  // Number of visible frames discovered so far.
  __declspec(dllexport) ::std::size_t frame_count() const noexcept;

  // Get info for a specific frame index.
  __declspec(dllexport) ::blink::jxl_rs::JxlRsVisibleFrameInfo get_frame_info(::std::size_t index) const noexcept;

  ~JxlRsDecoder() = delete;

private:
  friend ::rust::layout;
  struct layout {
    static ::std::size_t size() noexcept;
    static ::std::size_t align() noexcept;
  };
};
#endif // CXXBRIDGE1_STRUCT_blink$jxl_rs$JxlRsDecoder

extern "C" {
::std::size_t blink$jxl_rs$cxxbridge1$202$JxlRsDecoder$operator$sizeof() noexcept;
::std::size_t blink$jxl_rs$cxxbridge1$202$JxlRsDecoder$operator$alignof() noexcept;

::blink::jxl_rs::JxlRsDecoder *blink$jxl_rs$cxxbridge1$202$jxl_rs_scan_decoder_create(::std::uint64_t pixel_limit) noexcept;

::blink::jxl_rs::JxlRsDecoder *blink$jxl_rs$cxxbridge1$202$jxl_rs_decoder_create(::std::uint64_t pixel_limit, bool premultiply_alpha) noexcept;

bool blink$jxl_rs$cxxbridge1$202$jxl_rs_signature_check(::rust::Slice<::std::uint8_t const> data) noexcept;

bool blink$jxl_rs$cxxbridge1$202$JxlRsDecoder$set_pixel_format(::blink::jxl_rs::JxlRsDecoder &self, ::blink::jxl_rs::JxlRsPixelFormat format, ::std::uint32_t num_extra_channels) noexcept;

void blink$jxl_rs$cxxbridge1$202$JxlRsDecoder$process(::blink::jxl_rs::JxlRsDecoder &self, ::rust::Slice<::std::uint8_t const> data, ::rust::Slice<::std::uint8_t > buffer, ::std::uint32_t width, ::std::uint32_t height, ::std::size_t row_stride, ::blink::jxl_rs::JxlRsProcessResult *return$) noexcept;

void blink$jxl_rs$cxxbridge1$202$JxlRsDecoder$flush_pixels(::blink::jxl_rs::JxlRsDecoder &self, ::rust::Slice<::std::uint8_t > buffer, ::std::uint32_t width, ::std::uint32_t height, ::std::size_t row_stride, ::blink::jxl_rs::JxlRsProcessResult *return$) noexcept;

bool blink$jxl_rs$cxxbridge1$202$JxlRsDecoder$has_basic_info(::blink::jxl_rs::JxlRsDecoder const &self) noexcept;

void blink$jxl_rs$cxxbridge1$202$JxlRsDecoder$get_basic_info(::blink::jxl_rs::JxlRsDecoder const &self, ::blink::jxl_rs::JxlRsBasicInfo *return$) noexcept;

::rust::repr::Fat blink$jxl_rs$cxxbridge1$202$JxlRsDecoder$get_icc_profile(::blink::jxl_rs::JxlRsDecoder &self) noexcept;

bool blink$jxl_rs$cxxbridge1$202$JxlRsDecoder$has_more_frames(::blink::jxl_rs::JxlRsDecoder const &self) noexcept;

::std::uint64_t blink$jxl_rs$cxxbridge1$202$jxl_rs_seek_decoder_to_frame(::blink::jxl_rs::JxlRsDecoder const &scanner, ::blink::jxl_rs::JxlRsDecoder &decoder, ::std::size_t index) noexcept;

::std::uint64_t blink$jxl_rs$cxxbridge1$202$jxl_rs_probe_decode_start(::blink::jxl_rs::JxlRsDecoder &scanner, ::std::size_t index) noexcept;

::std::size_t blink$jxl_rs$cxxbridge1$202$JxlRsDecoder$frame_count(::blink::jxl_rs::JxlRsDecoder const &self) noexcept;

void blink$jxl_rs$cxxbridge1$202$JxlRsDecoder$get_frame_info(::blink::jxl_rs::JxlRsDecoder const &self, ::std::size_t index, ::blink::jxl_rs::JxlRsVisibleFrameInfo *return$) noexcept;

__declspec(dllexport) ::std::size_t blink$jxl_rs$cxxbridge1$202$parallel_thread_count() noexcept {
  ::std::size_t (*parallel_thread_count$)() = ::blink::jxl_rs::ParallelThreadCount;
  return parallel_thread_count$();
}

__declspec(dllexport) void blink$jxl_rs$cxxbridge1$202$run_parallel_tasks(::std::size_t num_tasks, ::blink::jxl_rs::c_void *context, ::rust::Fn<void(::blink::jxl_rs::c_void *, ::std::size_t)> task) noexcept {
  void (*run_parallel_tasks$)(::std::size_t, ::blink::jxl_rs::c_void *, ::rust::Fn<void(::blink::jxl_rs::c_void *, ::std::size_t)>) = ::blink::jxl_rs::RunParallelTasks;
  run_parallel_tasks$(num_tasks, context, task);
}

void blink$jxl_rs$cxxbridge1$202$run_parallel_tasks$task$1(::blink::jxl_rs::c_void *arg0, ::std::size_t arg1, void *) noexcept;

__declspec(dllexport) void blink$jxl_rs$cxxbridge1$202$run_parallel_tasks$task$0(::blink::jxl_rs::c_void *arg0, ::std::size_t arg1, void *extern$) noexcept {
  blink$jxl_rs$cxxbridge1$202$run_parallel_tasks$task$1(arg0, arg1, extern$);
}
} // extern "C"

::std::size_t JxlRsDecoder::layout::size() noexcept {
  return blink$jxl_rs$cxxbridge1$202$JxlRsDecoder$operator$sizeof();
}

::std::size_t JxlRsDecoder::layout::align() noexcept {
  return blink$jxl_rs$cxxbridge1$202$JxlRsDecoder$operator$alignof();
}

// Unlike `jxl_rs_decoder_create`, the decoder created by
// `jxl_rs_scan_decoder_create` cannot decode pixels. This
// makes the decoder significantly faster to use for
// scanning image metadata such as frame counts and timestamps.
__declspec(dllexport) ::rust::Box<::blink::jxl_rs::JxlRsDecoder> jxl_rs_scan_decoder_create(::std::uint64_t pixel_limit) noexcept {
  return ::rust::Box<::blink::jxl_rs::JxlRsDecoder>::from_raw(blink$jxl_rs$cxxbridge1$202$jxl_rs_scan_decoder_create(pixel_limit));
}

__declspec(dllexport) ::rust::Box<::blink::jxl_rs::JxlRsDecoder> jxl_rs_decoder_create(::std::uint64_t pixel_limit, bool premultiply_alpha) noexcept {
  return ::rust::Box<::blink::jxl_rs::JxlRsDecoder>::from_raw(blink$jxl_rs$cxxbridge1$202$jxl_rs_decoder_create(pixel_limit, premultiply_alpha));
}

__declspec(dllexport) bool jxl_rs_signature_check(::rust::Slice<::std::uint8_t const> data) noexcept {
  return blink$jxl_rs$cxxbridge1$202$jxl_rs_signature_check(data);
}

__declspec(dllexport) bool JxlRsDecoder::set_pixel_format(::blink::jxl_rs::JxlRsPixelFormat format, ::std::uint32_t num_extra_channels) noexcept {
  return blink$jxl_rs$cxxbridge1$202$JxlRsDecoder$set_pixel_format(*this, format, num_extra_channels);
}

__declspec(dllexport) ::blink::jxl_rs::JxlRsProcessResult JxlRsDecoder::process(::rust::Slice<::std::uint8_t const> data, ::rust::Slice<::std::uint8_t > buffer, ::std::uint32_t width, ::std::uint32_t height, ::std::size_t row_stride) noexcept {
  ::rust::MaybeUninit<::blink::jxl_rs::JxlRsProcessResult> return$;
  blink$jxl_rs$cxxbridge1$202$JxlRsDecoder$process(*this, data, buffer, width, height, row_stride, &return$.value);
  return ::std::move(return$.value);
}

__declspec(dllexport) ::blink::jxl_rs::JxlRsProcessResult JxlRsDecoder::flush_pixels(::rust::Slice<::std::uint8_t > buffer, ::std::uint32_t width, ::std::uint32_t height, ::std::size_t row_stride) noexcept {
  ::rust::MaybeUninit<::blink::jxl_rs::JxlRsProcessResult> return$;
  blink$jxl_rs$cxxbridge1$202$JxlRsDecoder$flush_pixels(*this, buffer, width, height, row_stride, &return$.value);
  return ::std::move(return$.value);
}

__declspec(dllexport) bool JxlRsDecoder::has_basic_info() const noexcept {
  return blink$jxl_rs$cxxbridge1$202$JxlRsDecoder$has_basic_info(*this);
}

__declspec(dllexport) ::blink::jxl_rs::JxlRsBasicInfo JxlRsDecoder::get_basic_info() const noexcept {
  ::rust::MaybeUninit<::blink::jxl_rs::JxlRsBasicInfo> return$;
  blink$jxl_rs$cxxbridge1$202$JxlRsDecoder$get_basic_info(*this, &return$.value);
  return ::std::move(return$.value);
}

__declspec(dllexport) ::rust::Slice<::std::uint8_t const> JxlRsDecoder::get_icc_profile() noexcept {
  return ::rust::impl<::rust::Slice<::std::uint8_t const>>::slice(blink$jxl_rs$cxxbridge1$202$JxlRsDecoder$get_icc_profile(*this));
}

__declspec(dllexport) bool JxlRsDecoder::has_more_frames() const noexcept {
  return blink$jxl_rs$cxxbridge1$202$JxlRsDecoder$has_more_frames(*this);
}

// Seek the decoder to a specific frame discovered by the scanner.
// Looks up the full seek target from the scanner's internal data
// and configures the decoder. Returns the file byte offset to start
// feeding input from, or `u64::MAX` if the seek failed.
__declspec(dllexport) ::std::uint64_t jxl_rs_seek_decoder_to_frame(::blink::jxl_rs::JxlRsDecoder const &scanner, ::blink::jxl_rs::JxlRsDecoder &decoder, ::std::size_t index) noexcept {
  return blink$jxl_rs$cxxbridge1$202$jxl_rs_seek_decoder_to_frame(scanner, decoder, index);
}

// Returns the file byte offset that `jxl_rs_seek_decoder_to_frame`
// would rewind to for `index`, without moving the decoding decoder.
// Rewinds the scanner's parser state; the scanner's frame list is
// preserved, but a partially scanned scanner must be replayed from
// the start before it can scan new data again. Returns `u64::MAX` on
// error.
__declspec(dllexport) ::std::uint64_t jxl_rs_probe_decode_start(::blink::jxl_rs::JxlRsDecoder &scanner, ::std::size_t index) noexcept {
  return blink$jxl_rs$cxxbridge1$202$jxl_rs_probe_decode_start(scanner, index);
}

__declspec(dllexport) ::std::size_t JxlRsDecoder::frame_count() const noexcept {
  return blink$jxl_rs$cxxbridge1$202$JxlRsDecoder$frame_count(*this);
}

__declspec(dllexport) ::blink::jxl_rs::JxlRsVisibleFrameInfo JxlRsDecoder::get_frame_info(::std::size_t index) const noexcept {
  ::rust::MaybeUninit<::blink::jxl_rs::JxlRsVisibleFrameInfo> return$;
  blink$jxl_rs$cxxbridge1$202$JxlRsDecoder$get_frame_info(*this, index, &return$.value);
  return ::std::move(return$.value);
}
} // namespace jxl_rs
} // namespace blink

extern "C" {
::blink::jxl_rs::JxlRsDecoder *cxxbridge1$box$blink$jxl_rs$JxlRsDecoder$alloc() noexcept;
void cxxbridge1$box$blink$jxl_rs$JxlRsDecoder$dealloc(::blink::jxl_rs::JxlRsDecoder *) noexcept;
void cxxbridge1$box$blink$jxl_rs$JxlRsDecoder$drop(::rust::Box<::blink::jxl_rs::JxlRsDecoder> *ptr) noexcept;
} // extern "C"

namespace rust {
inline namespace cxxbridge1 {
template <>
__declspec(dllexport) ::blink::jxl_rs::JxlRsDecoder *Box<::blink::jxl_rs::JxlRsDecoder>::allocation::alloc() noexcept {
  return cxxbridge1$box$blink$jxl_rs$JxlRsDecoder$alloc();
}
template <>
__declspec(dllexport) void Box<::blink::jxl_rs::JxlRsDecoder>::allocation::dealloc(::blink::jxl_rs::JxlRsDecoder *ptr) noexcept {
  cxxbridge1$box$blink$jxl_rs$JxlRsDecoder$dealloc(ptr);
}
template <>
__declspec(dllexport) void Box<::blink::jxl_rs::JxlRsDecoder>::drop() noexcept {
  cxxbridge1$box$blink$jxl_rs$JxlRsDecoder$drop(this);
}
} // namespace cxxbridge1
} // namespace rust
