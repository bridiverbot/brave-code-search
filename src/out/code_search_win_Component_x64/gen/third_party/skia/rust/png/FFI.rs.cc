#include "rust/png/FFI.h"
#include "rust/common/SkStreamAdapter.h"
#include <array>
#include <cassert>
#include <cstddef>
#include <cstdint>
#include <iterator>
#include <memory>
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

template <bool> struct deleter_if {
  template <typename T> void operator()(T *) {}
};
template <> struct deleter_if<true> {
  template <typename T> void operator()(T *ptr) { ptr->~T(); }
};
} // namespace
} // namespace cxxbridge1
} // namespace rust

#if __cplusplus >= 201402L
#define CXX_DEFAULT_VALUE(value) = value
#else
#define CXX_DEFAULT_VALUE(value)
#endif

namespace rust_png {
  enum class ColorType : ::std::uint8_t;
  enum class DecodingResult : ::std::uint8_t;
  enum class DisposeOp : ::std::uint8_t;
  enum class BlendOp : ::std::uint8_t;
  enum class Compression : ::std::uint8_t;
  enum class EncodingResult : ::std::uint8_t;
  struct ColorSpacePrimaries;
  struct MasteringDisplayColorVolume;
  struct ContentLightLevelInfo;
  using WriteTrait = ::rust_png::WriteTrait;
  struct ResultOfReader;
  struct Reader;
  struct ResultOfWriter;
  struct Writer;
  struct ResultOfStreamWriter;
  struct StreamWriter;
}

namespace rust_png {
#ifndef CXXBRIDGE1_ENUM_rust_png$ColorType
#define CXXBRIDGE1_ENUM_rust_png$ColorType
// FFI-friendly equivalent of `png::ColorType`.
enum class ColorType : ::std::uint8_t {
  Grayscale = 0,
  Rgb = 2,
  Indexed = 3,
  GrayscaleAlpha = 4,
  Rgba = 6,
};
#endif // CXXBRIDGE1_ENUM_rust_png$ColorType

#ifndef CXXBRIDGE1_ENUM_rust_png$DecodingResult
#define CXXBRIDGE1_ENUM_rust_png$DecodingResult
// FFI-friendly simplification of `Option<png::DecodingError>`.
enum class DecodingResult : ::std::uint8_t {
  Success = 0,
  FormatError = 1,
  ParameterError = 2,
  LimitsExceededError = 3,
  // `IncompleteInput` is equivalent to `png::DecodingError::IoError(
  // std::io::ErrorKind::UnexpectedEof.into())`.  It is named after
  // `SkCodec::Result::kIncompleteInput`.
  IncompleteInput = 4,
  OtherIoError = 5,
  EndOfFrame = 6,
};
#endif // CXXBRIDGE1_ENUM_rust_png$DecodingResult

#ifndef CXXBRIDGE1_ENUM_rust_png$DisposeOp
#define CXXBRIDGE1_ENUM_rust_png$DisposeOp
// FFI-friendly equivalent of `png::DisposeOp`.
enum class DisposeOp : ::std::uint8_t {
  None = 0,
  Background = 1,
  Previous = 2,
};
#endif // CXXBRIDGE1_ENUM_rust_png$DisposeOp

#ifndef CXXBRIDGE1_ENUM_rust_png$BlendOp
#define CXXBRIDGE1_ENUM_rust_png$BlendOp
// FFI-friendly equivalent of `png::BlendOp`.
enum class BlendOp : ::std::uint8_t {
  Source = 0,
  Over = 1,
};
#endif // CXXBRIDGE1_ENUM_rust_png$BlendOp

#ifndef CXXBRIDGE1_ENUM_rust_png$Compression
#define CXXBRIDGE1_ENUM_rust_png$Compression
// FFI-friendly simplification of `png::Compression`.
enum class Compression : ::std::uint8_t {
  // In png-0.18.0-rc `Fastest` level would fall back to `Level1WithUpFilter` when using
  // `StreamWriter`.  See also code links below:
  // * In 0.18-rc2 `Fastest` initially maps to `FdeflateUltraFast`, but in the end falls back to `flate2`
  //   when using `StreamWriter`:
  //     - https://github.com/image-rs/image-png/blob/9294c26dc3ca7622f791e880810b575193fb6c29/src/common.rs#L414
  //     - https://github.com/image-rs/image-png/blob/33afddab77449bcd93b1783d2d0ca8ba744cc3c3/src/encoder.rs#L1402
  //     - https://github.com/image-rs/image-png/blob/33afddab77449bcd93b1783d2d0ca8ba744cc3c3/src/common.rs#L413
  // * In 0.18-rc2 `Fastest` maps to `Up`:
  //   https://github.com/image-rs/image-png/blob/9294c26dc3ca7622f791e880810b575193fb6c29/src/filter.rs#L47
  //
  // In newer versions, `Fastest` may map to `fdeflate` backend.
  // We export `Level1WithUpFilter` as an explicit, separate level to preserve the M136
  // behavior that was tested in a field trial and approved for shipping.
  //
  // TODO(https://crbug.com/406072770): Revisit this in the future and only use the built-in
  // levels in the long term.
  Level1WithUpFilter = 0,
  // Maps to `png::Compression::Fastest`.
  Fastest = 1,
  // Maps to `png::Compression::Fast`.
  Fast = 2,
  // Maps to `png::Compression::Balanced`.
  Balanced = 3,
  // Maps to `png::Compression::High`.
  High = 4,
};
#endif // CXXBRIDGE1_ENUM_rust_png$Compression

#ifndef CXXBRIDGE1_ENUM_rust_png$EncodingResult
#define CXXBRIDGE1_ENUM_rust_png$EncodingResult
// FFI-friendly simplification of `Option<png::EncodingError>`.
enum class EncodingResult : ::std::uint8_t {
  Success = 0,
  IoError = 1,
  FormatError = 2,
  ParameterError = 3,
  LimitsExceededError = 4,
};
#endif // CXXBRIDGE1_ENUM_rust_png$EncodingResult

#ifndef CXXBRIDGE1_STRUCT_rust_png$ColorSpacePrimaries
#define CXXBRIDGE1_STRUCT_rust_png$ColorSpacePrimaries
// FFI/layering-friendly equivalent of `SkColorSpacePrimaries from C/C++.
struct ColorSpacePrimaries final {
  float fRX CXX_DEFAULT_VALUE(0);
  float fRY CXX_DEFAULT_VALUE(0);
  float fGX CXX_DEFAULT_VALUE(0);
  float fGY CXX_DEFAULT_VALUE(0);
  float fBX CXX_DEFAULT_VALUE(0);
  float fBY CXX_DEFAULT_VALUE(0);
  float fWX CXX_DEFAULT_VALUE(0);
  float fWY CXX_DEFAULT_VALUE(0);

  using IsRelocatable = ::std::true_type;
};
#endif // CXXBRIDGE1_STRUCT_rust_png$ColorSpacePrimaries

#ifndef CXXBRIDGE1_STRUCT_rust_png$MasteringDisplayColorVolume
#define CXXBRIDGE1_STRUCT_rust_png$MasteringDisplayColorVolume
// FFI/layering-friendly equivalent of `skhdr::MasteringDisplayColorVolume` from C/C++.
struct MasteringDisplayColorVolume final {
  ::rust_png::ColorSpacePrimaries fDisplayPrimaries;
  float fMaximumDisplayMasteringLuminance CXX_DEFAULT_VALUE(0);
  float fMinimumDisplayMasteringLuminance CXX_DEFAULT_VALUE(0);

  using IsRelocatable = ::std::true_type;
};
#endif // CXXBRIDGE1_STRUCT_rust_png$MasteringDisplayColorVolume

#ifndef CXXBRIDGE1_STRUCT_rust_png$ContentLightLevelInfo
#define CXXBRIDGE1_STRUCT_rust_png$ContentLightLevelInfo
// FFI/layering-friendly equivalent of `skhdr::ContentLightLevelInformation` from C/C++.
struct ContentLightLevelInfo final {
  float fMaxCLL CXX_DEFAULT_VALUE(0);
  float fMaxFALL CXX_DEFAULT_VALUE(0);

  using IsRelocatable = ::std::true_type;
};
#endif // CXXBRIDGE1_STRUCT_rust_png$ContentLightLevelInfo

#ifndef CXXBRIDGE1_STRUCT_rust_png$ResultOfReader
#define CXXBRIDGE1_STRUCT_rust_png$ResultOfReader
struct ResultOfReader final : public ::rust::Opaque {
  __declspec(dllexport) ::rust_png::DecodingResult err() const noexcept;
  __declspec(dllexport) ::rust::Box<::rust_png::Reader> unwrap() noexcept;
  ~ResultOfReader() = delete;

private:
  friend ::rust::layout;
  struct layout {
    static ::std::size_t size() noexcept;
    static ::std::size_t align() noexcept;
  };
};
#endif // CXXBRIDGE1_STRUCT_rust_png$ResultOfReader

#ifndef CXXBRIDGE1_STRUCT_rust_png$Reader
#define CXXBRIDGE1_STRUCT_rust_png$Reader
struct Reader final : public ::rust::Opaque {
  __declspec(dllexport) ::std::uint32_t height() const noexcept;
  __declspec(dllexport) ::std::uint32_t width() const noexcept;
  __declspec(dllexport) bool interlaced() const noexcept;
  __declspec(dllexport) bool is_srgb() const noexcept;
  __declspec(dllexport) bool try_get_chrm(::rust_png::ColorSpacePrimaries &chrm) const noexcept;
  __declspec(dllexport) bool try_get_cicp_chunk(::std::uint8_t &primaries_id, ::std::uint8_t &transfer_id, ::std::uint8_t &matrix_id, bool &is_full_range) const noexcept;
  __declspec(dllexport) bool try_get_mdcv_chunk(::rust_png::MasteringDisplayColorVolume &mdcv) const noexcept;
  __declspec(dllexport) bool try_get_clli_chunk(::rust_png::ContentLightLevelInfo &clli) const noexcept;
  __declspec(dllexport) bool try_get_gama(float &gamma) const noexcept;
  __declspec(dllexport) bool has_exif_chunk() const noexcept;
  __declspec(dllexport) ::rust::Slice<::std::uint8_t const> get_exif_chunk() const noexcept;
  __declspec(dllexport) bool has_iccp_chunk() const noexcept;
  __declspec(dllexport) ::rust::Slice<::std::uint8_t const> get_iccp_chunk() const noexcept;
  __declspec(dllexport) bool has_trns_chunk() const noexcept;
  __declspec(dllexport) ::rust::Slice<::std::uint8_t const> get_trns_chunk() const noexcept;
  __declspec(dllexport) bool has_plte_chunk() const noexcept;
  __declspec(dllexport) ::rust::Slice<::std::uint8_t const> get_plte_chunk() const noexcept;
  __declspec(dllexport) bool has_actl_chunk() const noexcept;
  __declspec(dllexport) ::std::uint32_t get_actl_num_frames() const noexcept;
  __declspec(dllexport) ::std::uint32_t get_actl_num_plays() const noexcept;
  __declspec(dllexport) bool has_fctl_chunk() const noexcept;
  __declspec(dllexport) void get_fctl_info(::std::uint32_t &width, ::std::uint32_t &height, ::std::uint32_t &x_offset, ::std::uint32_t &y_offset, ::rust_png::DisposeOp &dispose_op, ::rust_png::BlendOp &blend_op, ::std::uint32_t &duration_ms) const noexcept;
  __declspec(dllexport) bool has_sbit_chunk() const noexcept;
  __declspec(dllexport) ::rust::Slice<::std::uint8_t const> get_sbit_chunk() const noexcept;
  __declspec(dllexport) ::std::size_t get_unknown_chunks_count() const noexcept;
  __declspec(dllexport) ::std::array<::std::uint8_t, 4> const &get_unknown_chunk_name(::std::size_t index) const noexcept;
  __declspec(dllexport) ::rust::Slice<::std::uint8_t const> get_unknown_chunk_data(::std::size_t index) const noexcept;
  __declspec(dllexport) ::rust_png::ColorType output_color_type() const noexcept;
  __declspec(dllexport) ::std::uint8_t output_bits_per_component() const noexcept;
  __declspec(dllexport) ::rust_png::DecodingResult next_frame_info() noexcept;
  __declspec(dllexport) ::rust_png::DecodingResult next_interlaced_row(::rust::Slice<::std::uint8_t const> &row) noexcept;
  __declspec(dllexport) void expand_last_interlaced_row(::rust::Slice<::std::uint8_t > img, ::std::size_t img_row_stride, ::rust::Slice<::std::uint8_t const> row, ::std::uint8_t bits_per_pixel) const noexcept;
  __declspec(dllexport) void splat_last_interlaced_row(::rust::Slice<::std::uint8_t > img, ::std::size_t img_row_stride, ::rust::Slice<::std::uint8_t const> row, ::std::uint8_t bits_per_pixel) const noexcept;
  __declspec(dllexport) ::rust_png::DecodingResult read_row(::rust::Slice<::std::uint8_t > output_buffer) noexcept;
  __declspec(dllexport) ::rust_png::DecodingResult finish_decoding() noexcept;
  ~Reader() = delete;

private:
  friend ::rust::layout;
  struct layout {
    static ::std::size_t size() noexcept;
    static ::std::size_t align() noexcept;
  };
};
#endif // CXXBRIDGE1_STRUCT_rust_png$Reader

#ifndef CXXBRIDGE1_STRUCT_rust_png$ResultOfWriter
#define CXXBRIDGE1_STRUCT_rust_png$ResultOfWriter
struct ResultOfWriter final : public ::rust::Opaque {
  __declspec(dllexport) ::rust_png::EncodingResult err() const noexcept;
  __declspec(dllexport) ::rust::Box<::rust_png::Writer> unwrap() noexcept;
  ~ResultOfWriter() = delete;

private:
  friend ::rust::layout;
  struct layout {
    static ::std::size_t size() noexcept;
    static ::std::size_t align() noexcept;
  };
};
#endif // CXXBRIDGE1_STRUCT_rust_png$ResultOfWriter

#ifndef CXXBRIDGE1_STRUCT_rust_png$Writer
#define CXXBRIDGE1_STRUCT_rust_png$Writer
struct Writer final : public ::rust::Opaque {
  __declspec(dllexport) ::rust_png::EncodingResult write_text_chunk(::rust::Slice<::std::uint8_t const> keyword, ::rust::Slice<::std::uint8_t const> text) noexcept;
  __declspec(dllexport) ::rust_png::EncodingResult write_chunk(::std::array<::std::uint8_t, 4> const &name, ::rust::Slice<::std::uint8_t const> data) noexcept;
  ~Writer() = delete;

private:
  friend ::rust::layout;
  struct layout {
    static ::std::size_t size() noexcept;
    static ::std::size_t align() noexcept;
  };
};
#endif // CXXBRIDGE1_STRUCT_rust_png$Writer

#ifndef CXXBRIDGE1_STRUCT_rust_png$ResultOfStreamWriter
#define CXXBRIDGE1_STRUCT_rust_png$ResultOfStreamWriter
struct ResultOfStreamWriter final : public ::rust::Opaque {
  __declspec(dllexport) ::rust_png::EncodingResult err() const noexcept;
  __declspec(dllexport) ::rust::Box<::rust_png::StreamWriter> unwrap() noexcept;
  ~ResultOfStreamWriter() = delete;

private:
  friend ::rust::layout;
  struct layout {
    static ::std::size_t size() noexcept;
    static ::std::size_t align() noexcept;
  };
};
#endif // CXXBRIDGE1_STRUCT_rust_png$ResultOfStreamWriter

#ifndef CXXBRIDGE1_STRUCT_rust_png$StreamWriter
#define CXXBRIDGE1_STRUCT_rust_png$StreamWriter
struct StreamWriter final : public ::rust::Opaque {
  __declspec(dllexport) ::rust_png::EncodingResult write(::rust::Slice<::std::uint8_t const> data) noexcept;
  ~StreamWriter() = delete;

private:
  friend ::rust::layout;
  struct layout {
    static ::std::size_t size() noexcept;
    static ::std::size_t align() noexcept;
  };
};
#endif // CXXBRIDGE1_STRUCT_rust_png$StreamWriter

extern "C" {
__declspec(dllexport) bool rust_png$cxxbridge1$202$WriteTrait$write(::rust_png::WriteTrait &self, ::rust::Slice<::std::uint8_t const> buffer) noexcept {
  bool (::rust_png::WriteTrait::*write$)(::rust::Slice<::std::uint8_t const>) = &::rust_png::WriteTrait::write;
  return (self.*write$)(buffer);
}

__declspec(dllexport) void rust_png$cxxbridge1$202$WriteTrait$flush(::rust_png::WriteTrait &self) noexcept {
  void (::rust_png::WriteTrait::*flush$)() = &::rust_png::WriteTrait::flush;
  (self.*flush$)();
}

::rust_png::ResultOfReader *rust_png$cxxbridge1$202$new_reader(::rust::stream::SkStreamAdapter *input) noexcept;
::std::size_t rust_png$cxxbridge1$202$ResultOfReader$operator$sizeof() noexcept;
::std::size_t rust_png$cxxbridge1$202$ResultOfReader$operator$alignof() noexcept;

::rust_png::DecodingResult rust_png$cxxbridge1$202$ResultOfReader$err(::rust_png::ResultOfReader const &self) noexcept;

::rust_png::Reader *rust_png$cxxbridge1$202$ResultOfReader$unwrap(::rust_png::ResultOfReader &self) noexcept;
::std::size_t rust_png$cxxbridge1$202$Reader$operator$sizeof() noexcept;
::std::size_t rust_png$cxxbridge1$202$Reader$operator$alignof() noexcept;

::std::uint32_t rust_png$cxxbridge1$202$Reader$height(::rust_png::Reader const &self) noexcept;

::std::uint32_t rust_png$cxxbridge1$202$Reader$width(::rust_png::Reader const &self) noexcept;

bool rust_png$cxxbridge1$202$Reader$interlaced(::rust_png::Reader const &self) noexcept;

bool rust_png$cxxbridge1$202$Reader$is_srgb(::rust_png::Reader const &self) noexcept;

bool rust_png$cxxbridge1$202$Reader$try_get_chrm(::rust_png::Reader const &self, ::rust_png::ColorSpacePrimaries &chrm) noexcept;

bool rust_png$cxxbridge1$202$Reader$try_get_cicp_chunk(::rust_png::Reader const &self, ::std::uint8_t &primaries_id, ::std::uint8_t &transfer_id, ::std::uint8_t &matrix_id, bool &is_full_range) noexcept;

bool rust_png$cxxbridge1$202$Reader$try_get_mdcv_chunk(::rust_png::Reader const &self, ::rust_png::MasteringDisplayColorVolume &mdcv) noexcept;

bool rust_png$cxxbridge1$202$Reader$try_get_clli_chunk(::rust_png::Reader const &self, ::rust_png::ContentLightLevelInfo &clli) noexcept;

bool rust_png$cxxbridge1$202$Reader$try_get_gama(::rust_png::Reader const &self, float &gamma) noexcept;

bool rust_png$cxxbridge1$202$Reader$has_exif_chunk(::rust_png::Reader const &self) noexcept;

::rust::repr::Fat rust_png$cxxbridge1$202$Reader$get_exif_chunk(::rust_png::Reader const &self) noexcept;

bool rust_png$cxxbridge1$202$Reader$has_iccp_chunk(::rust_png::Reader const &self) noexcept;

::rust::repr::Fat rust_png$cxxbridge1$202$Reader$get_iccp_chunk(::rust_png::Reader const &self) noexcept;

bool rust_png$cxxbridge1$202$Reader$has_trns_chunk(::rust_png::Reader const &self) noexcept;

::rust::repr::Fat rust_png$cxxbridge1$202$Reader$get_trns_chunk(::rust_png::Reader const &self) noexcept;

bool rust_png$cxxbridge1$202$Reader$has_plte_chunk(::rust_png::Reader const &self) noexcept;

::rust::repr::Fat rust_png$cxxbridge1$202$Reader$get_plte_chunk(::rust_png::Reader const &self) noexcept;

bool rust_png$cxxbridge1$202$Reader$has_actl_chunk(::rust_png::Reader const &self) noexcept;

::std::uint32_t rust_png$cxxbridge1$202$Reader$get_actl_num_frames(::rust_png::Reader const &self) noexcept;

::std::uint32_t rust_png$cxxbridge1$202$Reader$get_actl_num_plays(::rust_png::Reader const &self) noexcept;

bool rust_png$cxxbridge1$202$Reader$has_fctl_chunk(::rust_png::Reader const &self) noexcept;

void rust_png$cxxbridge1$202$Reader$get_fctl_info(::rust_png::Reader const &self, ::std::uint32_t &width, ::std::uint32_t &height, ::std::uint32_t &x_offset, ::std::uint32_t &y_offset, ::rust_png::DisposeOp &dispose_op, ::rust_png::BlendOp &blend_op, ::std::uint32_t &duration_ms) noexcept;

bool rust_png$cxxbridge1$202$Reader$has_sbit_chunk(::rust_png::Reader const &self) noexcept;

::rust::repr::Fat rust_png$cxxbridge1$202$Reader$get_sbit_chunk(::rust_png::Reader const &self) noexcept;

::std::size_t rust_png$cxxbridge1$202$Reader$get_unknown_chunks_count(::rust_png::Reader const &self) noexcept;

::std::array<::std::uint8_t, 4> const *rust_png$cxxbridge1$202$Reader$get_unknown_chunk_name(::rust_png::Reader const &self, ::std::size_t index) noexcept;

::rust::repr::Fat rust_png$cxxbridge1$202$Reader$get_unknown_chunk_data(::rust_png::Reader const &self, ::std::size_t index) noexcept;

::rust_png::ColorType rust_png$cxxbridge1$202$Reader$output_color_type(::rust_png::Reader const &self) noexcept;

::std::uint8_t rust_png$cxxbridge1$202$Reader$output_bits_per_component(::rust_png::Reader const &self) noexcept;

::rust_png::DecodingResult rust_png$cxxbridge1$202$Reader$next_frame_info(::rust_png::Reader &self) noexcept;

::rust_png::DecodingResult rust_png$cxxbridge1$202$Reader$next_interlaced_row(::rust_png::Reader &self, ::rust::Slice<::std::uint8_t const> &row) noexcept;

void rust_png$cxxbridge1$202$Reader$expand_last_interlaced_row(::rust_png::Reader const &self, ::rust::Slice<::std::uint8_t > img, ::std::size_t img_row_stride, ::rust::Slice<::std::uint8_t const> row, ::std::uint8_t bits_per_pixel) noexcept;

void rust_png$cxxbridge1$202$Reader$splat_last_interlaced_row(::rust_png::Reader const &self, ::rust::Slice<::std::uint8_t > img, ::std::size_t img_row_stride, ::rust::Slice<::std::uint8_t const> row, ::std::uint8_t bits_per_pixel) noexcept;

::rust_png::DecodingResult rust_png$cxxbridge1$202$Reader$read_row(::rust_png::Reader &self, ::rust::Slice<::std::uint8_t > output_buffer) noexcept;

::rust_png::DecodingResult rust_png$cxxbridge1$202$Reader$finish_decoding(::rust_png::Reader &self) noexcept;

::rust_png::ResultOfWriter *rust_png$cxxbridge1$202$new_writer(::rust_png::WriteTrait *output, ::std::uint32_t width, ::std::uint32_t height, ::rust_png::ColorType color, ::std::uint8_t bits_per_component, ::rust_png::Compression compression, ::rust::Slice<::std::uint8_t const> icc_profile) noexcept;
::std::size_t rust_png$cxxbridge1$202$ResultOfWriter$operator$sizeof() noexcept;
::std::size_t rust_png$cxxbridge1$202$ResultOfWriter$operator$alignof() noexcept;

::rust_png::EncodingResult rust_png$cxxbridge1$202$ResultOfWriter$err(::rust_png::ResultOfWriter const &self) noexcept;

::rust_png::Writer *rust_png$cxxbridge1$202$ResultOfWriter$unwrap(::rust_png::ResultOfWriter &self) noexcept;
::std::size_t rust_png$cxxbridge1$202$Writer$operator$sizeof() noexcept;
::std::size_t rust_png$cxxbridge1$202$Writer$operator$alignof() noexcept;

::rust_png::EncodingResult rust_png$cxxbridge1$202$Writer$write_text_chunk(::rust_png::Writer &self, ::rust::Slice<::std::uint8_t const> keyword, ::rust::Slice<::std::uint8_t const> text) noexcept;

::rust_png::EncodingResult rust_png$cxxbridge1$202$Writer$write_chunk(::rust_png::Writer &self, ::std::array<::std::uint8_t, 4> const &name, ::rust::Slice<::std::uint8_t const> data) noexcept;

::rust_png::ResultOfStreamWriter *rust_png$cxxbridge1$202$convert_writer_into_stream_writer(::rust_png::Writer *writer) noexcept;
::std::size_t rust_png$cxxbridge1$202$ResultOfStreamWriter$operator$sizeof() noexcept;
::std::size_t rust_png$cxxbridge1$202$ResultOfStreamWriter$operator$alignof() noexcept;

::rust_png::EncodingResult rust_png$cxxbridge1$202$ResultOfStreamWriter$err(::rust_png::ResultOfStreamWriter const &self) noexcept;

::rust_png::StreamWriter *rust_png$cxxbridge1$202$ResultOfStreamWriter$unwrap(::rust_png::ResultOfStreamWriter &self) noexcept;
::std::size_t rust_png$cxxbridge1$202$StreamWriter$operator$sizeof() noexcept;
::std::size_t rust_png$cxxbridge1$202$StreamWriter$operator$alignof() noexcept;

::rust_png::EncodingResult rust_png$cxxbridge1$202$StreamWriter$write(::rust_png::StreamWriter &self, ::rust::Slice<::std::uint8_t const> data) noexcept;

::rust_png::EncodingResult rust_png$cxxbridge1$202$finish_encoding(::rust_png::StreamWriter *stream_writer) noexcept;
} // extern "C"

__declspec(dllexport) ::rust::Box<::rust_png::ResultOfReader> new_reader(::std::unique_ptr<::rust::stream::SkStreamAdapter> input) noexcept {
  return ::rust::Box<::rust_png::ResultOfReader>::from_raw(rust_png$cxxbridge1$202$new_reader(input.release()));
}

::std::size_t ResultOfReader::layout::size() noexcept {
  return rust_png$cxxbridge1$202$ResultOfReader$operator$sizeof();
}

::std::size_t ResultOfReader::layout::align() noexcept {
  return rust_png$cxxbridge1$202$ResultOfReader$operator$alignof();
}

__declspec(dllexport) ::rust_png::DecodingResult ResultOfReader::err() const noexcept {
  return rust_png$cxxbridge1$202$ResultOfReader$err(*this);
}

__declspec(dllexport) ::rust::Box<::rust_png::Reader> ResultOfReader::unwrap() noexcept {
  return ::rust::Box<::rust_png::Reader>::from_raw(rust_png$cxxbridge1$202$ResultOfReader$unwrap(*this));
}

::std::size_t Reader::layout::size() noexcept {
  return rust_png$cxxbridge1$202$Reader$operator$sizeof();
}

::std::size_t Reader::layout::align() noexcept {
  return rust_png$cxxbridge1$202$Reader$operator$alignof();
}

__declspec(dllexport) ::std::uint32_t Reader::height() const noexcept {
  return rust_png$cxxbridge1$202$Reader$height(*this);
}

__declspec(dllexport) ::std::uint32_t Reader::width() const noexcept {
  return rust_png$cxxbridge1$202$Reader$width(*this);
}

__declspec(dllexport) bool Reader::interlaced() const noexcept {
  return rust_png$cxxbridge1$202$Reader$interlaced(*this);
}

__declspec(dllexport) bool Reader::is_srgb() const noexcept {
  return rust_png$cxxbridge1$202$Reader$is_srgb(*this);
}

__declspec(dllexport) bool Reader::try_get_chrm(::rust_png::ColorSpacePrimaries &chrm) const noexcept {
  return rust_png$cxxbridge1$202$Reader$try_get_chrm(*this, chrm);
}

__declspec(dllexport) bool Reader::try_get_cicp_chunk(::std::uint8_t &primaries_id, ::std::uint8_t &transfer_id, ::std::uint8_t &matrix_id, bool &is_full_range) const noexcept {
  return rust_png$cxxbridge1$202$Reader$try_get_cicp_chunk(*this, primaries_id, transfer_id, matrix_id, is_full_range);
}

__declspec(dllexport) bool Reader::try_get_mdcv_chunk(::rust_png::MasteringDisplayColorVolume &mdcv) const noexcept {
  return rust_png$cxxbridge1$202$Reader$try_get_mdcv_chunk(*this, mdcv);
}

__declspec(dllexport) bool Reader::try_get_clli_chunk(::rust_png::ContentLightLevelInfo &clli) const noexcept {
  return rust_png$cxxbridge1$202$Reader$try_get_clli_chunk(*this, clli);
}

__declspec(dllexport) bool Reader::try_get_gama(float &gamma) const noexcept {
  return rust_png$cxxbridge1$202$Reader$try_get_gama(*this, gamma);
}

__declspec(dllexport) bool Reader::has_exif_chunk() const noexcept {
  return rust_png$cxxbridge1$202$Reader$has_exif_chunk(*this);
}

__declspec(dllexport) ::rust::Slice<::std::uint8_t const> Reader::get_exif_chunk() const noexcept {
  return ::rust::impl<::rust::Slice<::std::uint8_t const>>::slice(rust_png$cxxbridge1$202$Reader$get_exif_chunk(*this));
}

__declspec(dllexport) bool Reader::has_iccp_chunk() const noexcept {
  return rust_png$cxxbridge1$202$Reader$has_iccp_chunk(*this);
}

__declspec(dllexport) ::rust::Slice<::std::uint8_t const> Reader::get_iccp_chunk() const noexcept {
  return ::rust::impl<::rust::Slice<::std::uint8_t const>>::slice(rust_png$cxxbridge1$202$Reader$get_iccp_chunk(*this));
}

__declspec(dllexport) bool Reader::has_trns_chunk() const noexcept {
  return rust_png$cxxbridge1$202$Reader$has_trns_chunk(*this);
}

__declspec(dllexport) ::rust::Slice<::std::uint8_t const> Reader::get_trns_chunk() const noexcept {
  return ::rust::impl<::rust::Slice<::std::uint8_t const>>::slice(rust_png$cxxbridge1$202$Reader$get_trns_chunk(*this));
}

__declspec(dllexport) bool Reader::has_plte_chunk() const noexcept {
  return rust_png$cxxbridge1$202$Reader$has_plte_chunk(*this);
}

__declspec(dllexport) ::rust::Slice<::std::uint8_t const> Reader::get_plte_chunk() const noexcept {
  return ::rust::impl<::rust::Slice<::std::uint8_t const>>::slice(rust_png$cxxbridge1$202$Reader$get_plte_chunk(*this));
}

__declspec(dllexport) bool Reader::has_actl_chunk() const noexcept {
  return rust_png$cxxbridge1$202$Reader$has_actl_chunk(*this);
}

__declspec(dllexport) ::std::uint32_t Reader::get_actl_num_frames() const noexcept {
  return rust_png$cxxbridge1$202$Reader$get_actl_num_frames(*this);
}

__declspec(dllexport) ::std::uint32_t Reader::get_actl_num_plays() const noexcept {
  return rust_png$cxxbridge1$202$Reader$get_actl_num_plays(*this);
}

__declspec(dllexport) bool Reader::has_fctl_chunk() const noexcept {
  return rust_png$cxxbridge1$202$Reader$has_fctl_chunk(*this);
}

__declspec(dllexport) void Reader::get_fctl_info(::std::uint32_t &width, ::std::uint32_t &height, ::std::uint32_t &x_offset, ::std::uint32_t &y_offset, ::rust_png::DisposeOp &dispose_op, ::rust_png::BlendOp &blend_op, ::std::uint32_t &duration_ms) const noexcept {
  rust_png$cxxbridge1$202$Reader$get_fctl_info(*this, width, height, x_offset, y_offset, dispose_op, blend_op, duration_ms);
}

__declspec(dllexport) bool Reader::has_sbit_chunk() const noexcept {
  return rust_png$cxxbridge1$202$Reader$has_sbit_chunk(*this);
}

__declspec(dllexport) ::rust::Slice<::std::uint8_t const> Reader::get_sbit_chunk() const noexcept {
  return ::rust::impl<::rust::Slice<::std::uint8_t const>>::slice(rust_png$cxxbridge1$202$Reader$get_sbit_chunk(*this));
}

__declspec(dllexport) ::std::size_t Reader::get_unknown_chunks_count() const noexcept {
  return rust_png$cxxbridge1$202$Reader$get_unknown_chunks_count(*this);
}

__declspec(dllexport) ::std::array<::std::uint8_t, 4> const &Reader::get_unknown_chunk_name(::std::size_t index) const noexcept {
  return *rust_png$cxxbridge1$202$Reader$get_unknown_chunk_name(*this, index);
}

__declspec(dllexport) ::rust::Slice<::std::uint8_t const> Reader::get_unknown_chunk_data(::std::size_t index) const noexcept {
  return ::rust::impl<::rust::Slice<::std::uint8_t const>>::slice(rust_png$cxxbridge1$202$Reader$get_unknown_chunk_data(*this, index));
}

__declspec(dllexport) ::rust_png::ColorType Reader::output_color_type() const noexcept {
  return rust_png$cxxbridge1$202$Reader$output_color_type(*this);
}

__declspec(dllexport) ::std::uint8_t Reader::output_bits_per_component() const noexcept {
  return rust_png$cxxbridge1$202$Reader$output_bits_per_component(*this);
}

__declspec(dllexport) ::rust_png::DecodingResult Reader::next_frame_info() noexcept {
  return rust_png$cxxbridge1$202$Reader$next_frame_info(*this);
}

__declspec(dllexport) ::rust_png::DecodingResult Reader::next_interlaced_row(::rust::Slice<::std::uint8_t const> &row) noexcept {
  return rust_png$cxxbridge1$202$Reader$next_interlaced_row(*this, row);
}

__declspec(dllexport) void Reader::expand_last_interlaced_row(::rust::Slice<::std::uint8_t > img, ::std::size_t img_row_stride, ::rust::Slice<::std::uint8_t const> row, ::std::uint8_t bits_per_pixel) const noexcept {
  rust_png$cxxbridge1$202$Reader$expand_last_interlaced_row(*this, img, img_row_stride, row, bits_per_pixel);
}

__declspec(dllexport) void Reader::splat_last_interlaced_row(::rust::Slice<::std::uint8_t > img, ::std::size_t img_row_stride, ::rust::Slice<::std::uint8_t const> row, ::std::uint8_t bits_per_pixel) const noexcept {
  rust_png$cxxbridge1$202$Reader$splat_last_interlaced_row(*this, img, img_row_stride, row, bits_per_pixel);
}

__declspec(dllexport) ::rust_png::DecodingResult Reader::read_row(::rust::Slice<::std::uint8_t > output_buffer) noexcept {
  return rust_png$cxxbridge1$202$Reader$read_row(*this, output_buffer);
}

__declspec(dllexport) ::rust_png::DecodingResult Reader::finish_decoding() noexcept {
  return rust_png$cxxbridge1$202$Reader$finish_decoding(*this);
}

__declspec(dllexport) ::rust::Box<::rust_png::ResultOfWriter> new_writer(::std::unique_ptr<::rust_png::WriteTrait> output, ::std::uint32_t width, ::std::uint32_t height, ::rust_png::ColorType color, ::std::uint8_t bits_per_component, ::rust_png::Compression compression, ::rust::Slice<::std::uint8_t const> icc_profile) noexcept {
  return ::rust::Box<::rust_png::ResultOfWriter>::from_raw(rust_png$cxxbridge1$202$new_writer(output.release(), width, height, color, bits_per_component, compression, icc_profile));
}

::std::size_t ResultOfWriter::layout::size() noexcept {
  return rust_png$cxxbridge1$202$ResultOfWriter$operator$sizeof();
}

::std::size_t ResultOfWriter::layout::align() noexcept {
  return rust_png$cxxbridge1$202$ResultOfWriter$operator$alignof();
}

__declspec(dllexport) ::rust_png::EncodingResult ResultOfWriter::err() const noexcept {
  return rust_png$cxxbridge1$202$ResultOfWriter$err(*this);
}

__declspec(dllexport) ::rust::Box<::rust_png::Writer> ResultOfWriter::unwrap() noexcept {
  return ::rust::Box<::rust_png::Writer>::from_raw(rust_png$cxxbridge1$202$ResultOfWriter$unwrap(*this));
}

::std::size_t Writer::layout::size() noexcept {
  return rust_png$cxxbridge1$202$Writer$operator$sizeof();
}

::std::size_t Writer::layout::align() noexcept {
  return rust_png$cxxbridge1$202$Writer$operator$alignof();
}

__declspec(dllexport) ::rust_png::EncodingResult Writer::write_text_chunk(::rust::Slice<::std::uint8_t const> keyword, ::rust::Slice<::std::uint8_t const> text) noexcept {
  return rust_png$cxxbridge1$202$Writer$write_text_chunk(*this, keyword, text);
}

__declspec(dllexport) ::rust_png::EncodingResult Writer::write_chunk(::std::array<::std::uint8_t, 4> const &name, ::rust::Slice<::std::uint8_t const> data) noexcept {
  return rust_png$cxxbridge1$202$Writer$write_chunk(*this, name, data);
}

__declspec(dllexport) ::rust::Box<::rust_png::ResultOfStreamWriter> convert_writer_into_stream_writer(::rust::Box<::rust_png::Writer> writer) noexcept {
  return ::rust::Box<::rust_png::ResultOfStreamWriter>::from_raw(rust_png$cxxbridge1$202$convert_writer_into_stream_writer(writer.into_raw()));
}

::std::size_t ResultOfStreamWriter::layout::size() noexcept {
  return rust_png$cxxbridge1$202$ResultOfStreamWriter$operator$sizeof();
}

::std::size_t ResultOfStreamWriter::layout::align() noexcept {
  return rust_png$cxxbridge1$202$ResultOfStreamWriter$operator$alignof();
}

__declspec(dllexport) ::rust_png::EncodingResult ResultOfStreamWriter::err() const noexcept {
  return rust_png$cxxbridge1$202$ResultOfStreamWriter$err(*this);
}

__declspec(dllexport) ::rust::Box<::rust_png::StreamWriter> ResultOfStreamWriter::unwrap() noexcept {
  return ::rust::Box<::rust_png::StreamWriter>::from_raw(rust_png$cxxbridge1$202$ResultOfStreamWriter$unwrap(*this));
}

::std::size_t StreamWriter::layout::size() noexcept {
  return rust_png$cxxbridge1$202$StreamWriter$operator$sizeof();
}

::std::size_t StreamWriter::layout::align() noexcept {
  return rust_png$cxxbridge1$202$StreamWriter$operator$alignof();
}

__declspec(dllexport) ::rust_png::EncodingResult StreamWriter::write(::rust::Slice<::std::uint8_t const> data) noexcept {
  return rust_png$cxxbridge1$202$StreamWriter$write(*this, data);
}

__declspec(dllexport) ::rust_png::EncodingResult finish_encoding(::rust::Box<::rust_png::StreamWriter> stream_writer) noexcept {
  return rust_png$cxxbridge1$202$finish_encoding(stream_writer.into_raw());
}
} // namespace rust_png

extern "C" {
::rust_png::ResultOfReader *cxxbridge1$box$rust_png$ResultOfReader$alloc() noexcept;
void cxxbridge1$box$rust_png$ResultOfReader$dealloc(::rust_png::ResultOfReader *) noexcept;
void cxxbridge1$box$rust_png$ResultOfReader$drop(::rust::Box<::rust_png::ResultOfReader> *ptr) noexcept;

::rust_png::Reader *cxxbridge1$box$rust_png$Reader$alloc() noexcept;
void cxxbridge1$box$rust_png$Reader$dealloc(::rust_png::Reader *) noexcept;
void cxxbridge1$box$rust_png$Reader$drop(::rust::Box<::rust_png::Reader> *ptr) noexcept;

static_assert(::rust::detail::is_complete<::std::remove_extent<::rust_png::WriteTrait>::type>::value, "definition of `::rust_png::WriteTrait` is required");
static_assert(sizeof(::std::unique_ptr<::rust_png::WriteTrait>) == sizeof(void *), "");
static_assert(alignof(::std::unique_ptr<::rust_png::WriteTrait>) == alignof(void *), "");
__declspec(dllexport) void cxxbridge1$unique_ptr$rust_png$WriteTrait$null(::std::unique_ptr<::rust_png::WriteTrait> *ptr) noexcept {
  ::new (ptr) ::std::unique_ptr<::rust_png::WriteTrait>();
}
__declspec(dllexport) void cxxbridge1$unique_ptr$rust_png$WriteTrait$raw(::std::unique_ptr<::rust_png::WriteTrait> *ptr, ::std::unique_ptr<::rust_png::WriteTrait>::pointer raw) noexcept {
  ::new (ptr) ::std::unique_ptr<::rust_png::WriteTrait>(raw);
}
__declspec(dllexport) ::std::unique_ptr<::rust_png::WriteTrait>::element_type const *cxxbridge1$unique_ptr$rust_png$WriteTrait$get(::std::unique_ptr<::rust_png::WriteTrait> const &ptr) noexcept {
  return ptr.get();
}
__declspec(dllexport) ::std::unique_ptr<::rust_png::WriteTrait>::pointer cxxbridge1$unique_ptr$rust_png$WriteTrait$release(::std::unique_ptr<::rust_png::WriteTrait> &ptr) noexcept {
  return ptr.release();
}
__declspec(dllexport) void cxxbridge1$unique_ptr$rust_png$WriteTrait$drop(::std::unique_ptr<::rust_png::WriteTrait> *ptr) noexcept {
  ::rust::deleter_if<::rust::detail::is_complete<::rust_png::WriteTrait>::value>{}(ptr);
}

::rust_png::ResultOfWriter *cxxbridge1$box$rust_png$ResultOfWriter$alloc() noexcept;
void cxxbridge1$box$rust_png$ResultOfWriter$dealloc(::rust_png::ResultOfWriter *) noexcept;
void cxxbridge1$box$rust_png$ResultOfWriter$drop(::rust::Box<::rust_png::ResultOfWriter> *ptr) noexcept;

::rust_png::Writer *cxxbridge1$box$rust_png$Writer$alloc() noexcept;
void cxxbridge1$box$rust_png$Writer$dealloc(::rust_png::Writer *) noexcept;
void cxxbridge1$box$rust_png$Writer$drop(::rust::Box<::rust_png::Writer> *ptr) noexcept;

::rust_png::ResultOfStreamWriter *cxxbridge1$box$rust_png$ResultOfStreamWriter$alloc() noexcept;
void cxxbridge1$box$rust_png$ResultOfStreamWriter$dealloc(::rust_png::ResultOfStreamWriter *) noexcept;
void cxxbridge1$box$rust_png$ResultOfStreamWriter$drop(::rust::Box<::rust_png::ResultOfStreamWriter> *ptr) noexcept;

::rust_png::StreamWriter *cxxbridge1$box$rust_png$StreamWriter$alloc() noexcept;
void cxxbridge1$box$rust_png$StreamWriter$dealloc(::rust_png::StreamWriter *) noexcept;
void cxxbridge1$box$rust_png$StreamWriter$drop(::rust::Box<::rust_png::StreamWriter> *ptr) noexcept;
} // extern "C"

namespace rust {
inline namespace cxxbridge1 {
template <>
__declspec(dllexport) ::rust_png::ResultOfReader *Box<::rust_png::ResultOfReader>::allocation::alloc() noexcept {
  return cxxbridge1$box$rust_png$ResultOfReader$alloc();
}
template <>
__declspec(dllexport) void Box<::rust_png::ResultOfReader>::allocation::dealloc(::rust_png::ResultOfReader *ptr) noexcept {
  cxxbridge1$box$rust_png$ResultOfReader$dealloc(ptr);
}
template <>
__declspec(dllexport) void Box<::rust_png::ResultOfReader>::drop() noexcept {
  cxxbridge1$box$rust_png$ResultOfReader$drop(this);
}
template <>
__declspec(dllexport) ::rust_png::Reader *Box<::rust_png::Reader>::allocation::alloc() noexcept {
  return cxxbridge1$box$rust_png$Reader$alloc();
}
template <>
__declspec(dllexport) void Box<::rust_png::Reader>::allocation::dealloc(::rust_png::Reader *ptr) noexcept {
  cxxbridge1$box$rust_png$Reader$dealloc(ptr);
}
template <>
__declspec(dllexport) void Box<::rust_png::Reader>::drop() noexcept {
  cxxbridge1$box$rust_png$Reader$drop(this);
}
template <>
__declspec(dllexport) ::rust_png::ResultOfWriter *Box<::rust_png::ResultOfWriter>::allocation::alloc() noexcept {
  return cxxbridge1$box$rust_png$ResultOfWriter$alloc();
}
template <>
__declspec(dllexport) void Box<::rust_png::ResultOfWriter>::allocation::dealloc(::rust_png::ResultOfWriter *ptr) noexcept {
  cxxbridge1$box$rust_png$ResultOfWriter$dealloc(ptr);
}
template <>
__declspec(dllexport) void Box<::rust_png::ResultOfWriter>::drop() noexcept {
  cxxbridge1$box$rust_png$ResultOfWriter$drop(this);
}
template <>
__declspec(dllexport) ::rust_png::Writer *Box<::rust_png::Writer>::allocation::alloc() noexcept {
  return cxxbridge1$box$rust_png$Writer$alloc();
}
template <>
__declspec(dllexport) void Box<::rust_png::Writer>::allocation::dealloc(::rust_png::Writer *ptr) noexcept {
  cxxbridge1$box$rust_png$Writer$dealloc(ptr);
}
template <>
__declspec(dllexport) void Box<::rust_png::Writer>::drop() noexcept {
  cxxbridge1$box$rust_png$Writer$drop(this);
}
template <>
__declspec(dllexport) ::rust_png::ResultOfStreamWriter *Box<::rust_png::ResultOfStreamWriter>::allocation::alloc() noexcept {
  return cxxbridge1$box$rust_png$ResultOfStreamWriter$alloc();
}
template <>
__declspec(dllexport) void Box<::rust_png::ResultOfStreamWriter>::allocation::dealloc(::rust_png::ResultOfStreamWriter *ptr) noexcept {
  cxxbridge1$box$rust_png$ResultOfStreamWriter$dealloc(ptr);
}
template <>
__declspec(dllexport) void Box<::rust_png::ResultOfStreamWriter>::drop() noexcept {
  cxxbridge1$box$rust_png$ResultOfStreamWriter$drop(this);
}
template <>
__declspec(dllexport) ::rust_png::StreamWriter *Box<::rust_png::StreamWriter>::allocation::alloc() noexcept {
  return cxxbridge1$box$rust_png$StreamWriter$alloc();
}
template <>
__declspec(dllexport) void Box<::rust_png::StreamWriter>::allocation::dealloc(::rust_png::StreamWriter *ptr) noexcept {
  cxxbridge1$box$rust_png$StreamWriter$dealloc(ptr);
}
template <>
__declspec(dllexport) void Box<::rust_png::StreamWriter>::drop() noexcept {
  cxxbridge1$box$rust_png$StreamWriter$drop(this);
}
} // namespace cxxbridge1
} // namespace rust
