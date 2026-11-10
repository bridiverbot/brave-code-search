#pragma once
#include <array>
#include <cassert>
#include <cstddef>
#include <cstdint>
#include <iterator>
#include <new>
#include <stdexcept>
#include <string>
#include <type_traits>
#include <utility>
#if __cplusplus >= 202002L
#include <ranges>
#endif

#ifdef __clang__
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdollar-in-identifier-extension"
#endif // __clang__

namespace rust {
inline namespace cxxbridge1 {
// #include "rust/cxx.h"

#ifndef CXXBRIDGE1_PANIC
#define CXXBRIDGE1_PANIC
template <typename Exception>
void panic [[noreturn]] (const char *msg);
#endif // CXXBRIDGE1_PANIC

struct unsafe_bitcopy_t;

namespace {
template <typename T>
class impl;
} // namespace

template <typename T>
::std::size_t size_of();
template <typename T>
::std::size_t align_of();

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
} // namespace cxxbridge1
} // namespace rust

#if __cplusplus >= 201402L
#define CXX_DEFAULT_VALUE(value) = value
#else
#define CXX_DEFAULT_VALUE(value)
#endif

namespace media {
  enum class SymphoniaAudioCodec : ::std::int32_t;
  enum class SymphoniaSampleFormat : ::std::uint8_t;
  struct SymphoniaDecoderConfig;
  struct SymphoniaPacket;
  struct SymphoniaAudioBuffer;
  enum class SymphoniaInitStatus : ::std::uint8_t;
  struct SymphoniaInitResult;
  enum class SymphoniaDecodeStatus : ::std::uint8_t;
  struct SymphoniaDecodeResult;
  struct SymphoniaDecoder;
}

namespace media {
#ifndef CXXBRIDGE1_ENUM_media$SymphoniaAudioCodec
#define CXXBRIDGE1_ENUM_media$SymphoniaAudioCodec
// This identifies the compression format of the audio data.
enum class SymphoniaAudioCodec : ::std::int32_t {
  Unknown = 0,
  Flac = 1,
  Mp3 = 2,
  PcmAlaw = 3,
  PcmF32 = 4,
  PcmF32Planar = 5,
  PcmMulaw = 6,
  PcmS16 = 7,
  PcmS16be = 8,
  PcmS16Planar = 9,
  PcmS24 = 10,
  PcmS24be = 11,
  PcmS32 = 12,
  PcmS32Planar = 13,
  PcmU8 = 14,
  PcmU8Planar = 15,
  Vorbis = 16,
};
#endif // CXXBRIDGE1_ENUM_media$SymphoniaAudioCodec

#ifndef CXXBRIDGE1_ENUM_media$SymphoniaSampleFormat
#define CXXBRIDGE1_ENUM_media$SymphoniaSampleFormat
// We output planar data for F32, and interleaved data for integer formats.
enum class SymphoniaSampleFormat : ::std::uint8_t {
  Unknown = 0,
  U8 = 1,
  S16 = 2,
  S24 = 3,
  S32 = 4,
  // Interleaved 32-bit float. Never produced by `get_sample_format()`,
  // which reports all float output as `PlanarF32`; retained so the FFI
  // enum can describe an interleaved float stream if that ever changes.
  F32 = 5,
  PlanarF32 = 6,
};
#endif // CXXBRIDGE1_ENUM_media$SymphoniaSampleFormat

#ifndef CXXBRIDGE1_STRUCT_media$SymphoniaDecoderConfig
#define CXXBRIDGE1_STRUCT_media$SymphoniaDecoderConfig
// Configuration parameters required to initialize a Symphonia decoder.
// This struct is created and populated on the C++ side.
struct SymphoniaDecoderConfig final {
  // The codec of the audio stream (e.g., AAC, MP3, Opus).
  ::media::SymphoniaAudioCodec codec;
  // Codec-specific initialization data (e.g., AAC headers).
  ::rust::Slice<::std::uint8_t const> extra_data;
  // Expected bytes per sample from the container/config.
  ::std::uint8_t bytes_per_sample CXX_DEFAULT_VALUE(0);
  // Sample rate of the audio stream.
  ::std::uint32_t sample_rate CXX_DEFAULT_VALUE(0);
  // Channel mask of the audio stream. Zero if the stream's channels have
  // no known speaker positions (e.g. a discrete layout).
  ::std::uint32_t channel_mask CXX_DEFAULT_VALUE(0);
  // Number of channels in the audio stream. Used when `channel_mask` is
  // zero.
  ::std::uint16_t channel_count CXX_DEFAULT_VALUE(0);

  using IsRelocatable = ::std::true_type;
};
#endif // CXXBRIDGE1_STRUCT_media$SymphoniaDecoderConfig

#ifndef CXXBRIDGE1_STRUCT_media$SymphoniaPacket
#define CXXBRIDGE1_STRUCT_media$SymphoniaPacket
// Represents a single, encoded audio packet to be sent to the decoder.
// This struct is populated on the C++ side for each call to `decode`.
struct SymphoniaPacket final {
  // The presentation timestamp of the packet in microseconds.
  ::std::uint64_t timestamp_us CXX_DEFAULT_VALUE(0);
  // The duration of the packet in microseconds.
  ::std::uint64_t duration_us CXX_DEFAULT_VALUE(0);
  // The buffer containing the encoded packet data.
  ::rust::Slice<::std::uint8_t const> data;

  using IsRelocatable = ::std::true_type;
};
#endif // CXXBRIDGE1_STRUCT_media$SymphoniaPacket

#ifndef CXXBRIDGE1_STRUCT_media$SymphoniaAudioBuffer
#define CXXBRIDGE1_STRUCT_media$SymphoniaAudioBuffer
// Represents metadata of a decoded audio buffer.
// The actual audio samples are copied into a C++ buffer via
// `copy_decoded_samples`.
struct SymphoniaAudioBuffer final {
  // Sample format of the decoded audio. May be different from the
  // encoded data sample format.
  ::media::SymphoniaSampleFormat sample_format;
  // The sample rate of the decoded data.
  ::std::uint32_t sample_rate CXX_DEFAULT_VALUE(0);
  // The number of audio frames in the buffer.
  ::std::size_t num_frames CXX_DEFAULT_VALUE(0);
  // The number of channels.
  ::std::size_t channel_count CXX_DEFAULT_VALUE(0);
  // The channels, represented as a bit mask.
  ::std::uint32_t channel_mask CXX_DEFAULT_VALUE(0);

  using IsRelocatable = ::std::true_type;
};
#endif // CXXBRIDGE1_STRUCT_media$SymphoniaAudioBuffer

#ifndef CXXBRIDGE1_ENUM_media$SymphoniaInitStatus
#define CXXBRIDGE1_ENUM_media$SymphoniaInitStatus
// Detailed status code indicating the result of a decoder initialization
// attempt.
// NOTE: these values are persisted to UMA histograms, and should not be
// reordered or deleted.
enum class SymphoniaInitStatus : ::std::uint8_t {
  // Initialization was successful.
  Ok = 0,
  // The `SymphoniaDecoderConfig` contained invalid or inconsistent
  // parameters.
  InvalidConfig = 1,
  // Failed to construct a valid decoder instance.
  DecoderError = 2,
  // The requested codec is not supported by the bridge.
  UnsupportedCodec = 3,
  // Deprecated: Vorbis extradata unpacking is now handled internally by
  // Symphonia.
  XiphVorbisUnpackError = 4,
  // Symphonia returned an 'Unsupported' error during initialization.
  SymphoniaUnsupported = 5,
  // Symphonia returned a 'DecodeError' during initialization (likely
  // bad extradata).
  SymphoniaDecodeError = 6,
  // Symphonia returned an 'IoError' during initialization.
  SymphoniaIoError = 7,
  // Symphonia returned a 'LimitError' during initialization.
  SymphoniaLimitError = 8,
  // Boundary for UMA histograms.
  kMaxValue = 9,
};
#endif // CXXBRIDGE1_ENUM_media$SymphoniaInitStatus

#ifndef CXXBRIDGE1_STRUCT_media$SymphoniaInitResult
#define CXXBRIDGE1_STRUCT_media$SymphoniaInitResult
// Represents the result of a decoder initialization attempt.
struct SymphoniaInitResult final {
  // The status of the initialization.
  ::media::SymphoniaInitStatus status;
  // A descriptive error message if initialization failed.
  ::rust::String error_str;
  // On success, a `Box` containing the opaque decoder handle.
  // It is always populated, but the internal `SymphoniaDecoder` will be
  // invalid on failure.
  ::rust::Box<::media::SymphoniaDecoder> decoder;

  using IsRelocatable = ::std::true_type;
};
#endif // CXXBRIDGE1_STRUCT_media$SymphoniaInitResult

#ifndef CXXBRIDGE1_ENUM_media$SymphoniaDecodeStatus
#define CXXBRIDGE1_ENUM_media$SymphoniaDecodeStatus
// Represents the possible outcomes of a decode operation.
// NOTE: these values are persisted to UMA histograms, and should not be
// reordered or deleted.
enum class SymphoniaDecodeStatus : ::std::uint8_t {
  // The packet was successfully decoded.
  Ok = 0,
  // The audio stream ended unexpectedly.
  UnexpectedEndOfStream = 1,
  // The decoder is in an invalid state (e.g., initialization failed).
  InvalidDecoderState = 2,
  // A generic, non-specific error occurred within Symphonia.
  Error = 3,
  // A specific error occurred during the decoding of the packet's
  // content. This often indicates malformed data.
  DecodeError = 4,
  // An I/O-related error occurred. In this context, it may signal an
  // unexpected end of data.
  IoError = 5,
  // The decoder needs to be reset, e.g., due to a change in stream
  // parameters.
  ResetRequired = 6,
  // An error occurred while seeking.
  SeekError = 7,
  // The stream contains a feature or format that is not supported.
  Unsupported = 8,
  // The decoder returned an insufficient amount of data.
  InsufficentData = 9,
  // The decoder returned a sample format that is not supported by
  // the Chromium media stack.
  InvalidDecodedBufferSampleFormat = 10,
  // Boundary for UMA histograms.
  kMaxValue = 11,
};
#endif // CXXBRIDGE1_ENUM_media$SymphoniaDecodeStatus

#ifndef CXXBRIDGE1_STRUCT_media$SymphoniaDecodeResult
#define CXXBRIDGE1_STRUCT_media$SymphoniaDecodeResult
// Represents the result of an attempt to decode an audio packet.
struct SymphoniaDecodeResult final {
  // The status of the decode operation.
  ::media::SymphoniaDecodeStatus status;
  // A descriptive error message if decoding failed.
  ::rust::String error_str;
  // Metadata of the decoded audio buffer. If the end of the stream has
  // been reached, `num_frames` will be 0.
  ::media::SymphoniaAudioBuffer buffer;

  using IsRelocatable = ::std::true_type;
};
#endif // CXXBRIDGE1_STRUCT_media$SymphoniaDecodeResult

#ifndef CXXBRIDGE1_STRUCT_media$SymphoniaDecoder
#define CXXBRIDGE1_STRUCT_media$SymphoniaDecoder
// An opaque type representing the Rust decoder instance. C++ holds a
// pointer to this but cannot access its internal fields.
struct SymphoniaDecoder final : public ::rust::Opaque {
  // Decodes a single audio packet.
  // This is a method on the `SymphoniaDecoder` type.
  //
  // # Arguments
  // * `&mut self` - The `SymphoniaDecoder` instance.
  // * `packet` - A reference to the `SymphoniaPacket` to be decoded.
  //
  // # Returns
  // A `SymphoniaDecodeResult` containing either the decoded audio buffer
  // metadata or an error.
  __attribute__((visibility("default"))) ::media::SymphoniaDecodeResult decode(::media::SymphoniaPacket const &packet) noexcept;

  // Copies the decoded samples from the most recent `decode()` call into
  // `dst`. Used for interleaved audio formats.
  __attribute__((visibility("default"))) bool copy_decoded_samples(::rust::Slice<::std::uint8_t > dst) const noexcept;

  // Copies the decoded audio samples for a specific `channel` from the
  // most recent `decode()` call into `dst`. Used for planar
  // audio formats.
  __attribute__((visibility("default"))) bool copy_decoded_channel(::std::size_t channel, ::rust::Slice<::std::uint8_t > dst) const noexcept;

  ~SymphoniaDecoder() = delete;

private:
  friend ::rust::layout;
  struct layout {
    static ::std::size_t size() noexcept;
    static ::std::size_t align() noexcept;
  };
};
#endif // CXXBRIDGE1_STRUCT_media$SymphoniaDecoder

// Constructs and initializes a `SymphoniaDecoder`.
//
// # Arguments
// * `config` - A reference to the `SymphoniaDecoderConfig` populated
//   by C++.
//
// # Returns
// A `SymphoniaInitResult` containing either the decoder handle or an
// error.
__attribute__((visibility("default"))) ::media::SymphoniaInitResult init_symphonia_decoder(::media::SymphoniaDecoderConfig const &config) noexcept;
} // namespace media

#ifdef __clang__
#pragma clang diagnostic pop
#endif // __clang__
