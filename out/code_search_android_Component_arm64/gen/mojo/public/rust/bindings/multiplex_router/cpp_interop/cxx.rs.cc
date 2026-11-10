#include "mojo/public/cpp/bindings/message.h"
#include "mojo/public/rust/system/scoped_handle_interop.h"
#include "base/task/sequenced_task_runner_rust_shim.h"
#include "mojo/public/rust/bindings/multiplex_router/cpp_interop/associated_endpoint_rust_adapter.h"
#include "mojo/public/rust/bindings/multiplex_router/cpp_interop/rust_associated_group_controller.h"
#include "mojo/public/rust/bindings/multiplex_router/cpp_interop/mojo_responder_wrapper.h"
#include <algorithm>
#include <array>
#include <cassert>
#include <cstddef>
#include <cstdint>
#include <initializer_list>
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
#pragma GCC diagnostic ignored "-Wshadow"
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

#ifndef CXXBRIDGE1_RUST_BITCOPY_T
#define CXXBRIDGE1_RUST_BITCOPY_T
struct unsafe_bitcopy_t final {
  explicit unsafe_bitcopy_t() = default;
};
#endif // CXXBRIDGE1_RUST_BITCOPY_T

#ifndef CXXBRIDGE1_RUST_BITCOPY
#define CXXBRIDGE1_RUST_BITCOPY
constexpr unsafe_bitcopy_t unsafe_bitcopy{};
#endif // CXXBRIDGE1_RUST_BITCOPY

#ifndef CXXBRIDGE1_RUST_VEC
#define CXXBRIDGE1_RUST_VEC
template <typename T>
class Vec final {
public:
  using value_type = T;

  Vec() noexcept;
  Vec(std::initializer_list<T>);
  Vec(const Vec &);
  Vec(Vec &&) noexcept;
  ~Vec() noexcept;

  Vec &operator=(Vec &&) & noexcept;
  Vec &operator=(const Vec &) &;

  std::size_t size() const noexcept;
  bool empty() const noexcept;
  const T *data() const noexcept;
  T *data() noexcept;
  std::size_t capacity() const noexcept;

  const T &operator[](std::size_t n) const noexcept;
  const T &at(std::size_t n) const;
  const T &front() const noexcept;
  const T &back() const noexcept;

  T &operator[](std::size_t n) noexcept;
  T &at(std::size_t n);
  T &front() noexcept;
  T &back() noexcept;

  void reserve(std::size_t new_cap);
  void push_back(const T &value);
  void push_back(T &&value);
  template <typename... Args>
  void emplace_back(Args &&...args);
  void truncate(std::size_t len);
  void clear();

  using iterator = typename Slice<T>::iterator;
  iterator begin() noexcept;
  iterator end() noexcept;

  using const_iterator = typename Slice<const T>::iterator;
  const_iterator begin() const noexcept;
  const_iterator end() const noexcept;
  const_iterator cbegin() const noexcept;
  const_iterator cend() const noexcept;

  void swap(Vec &) noexcept;

  Vec(unsafe_bitcopy_t, const Vec &) noexcept;

private:
  void reserve_total(std::size_t new_cap) noexcept;
  void set_len(std::size_t len) noexcept;
  void drop() noexcept;

  friend void swap(Vec &lhs, Vec &rhs) noexcept { lhs.swap(rhs); }

  std::array<std::uintptr_t, 3> repr;
};

template <typename T>
Vec<T>::Vec(std::initializer_list<T> init) : Vec{} {
  this->reserve_total(init.size());
  std::move(init.begin(), init.end(), std::back_inserter(*this));
}

template <typename T>
Vec<T>::Vec(const Vec &other) : Vec() {
  this->reserve_total(other.size());
  std::copy(other.begin(), other.end(), std::back_inserter(*this));
}

template <typename T>
Vec<T>::Vec(Vec &&other) noexcept : repr(other.repr) {
  new (&other) Vec();
}

template <typename T>
Vec<T>::~Vec() noexcept {
  this->drop();
}

template <typename T>
Vec<T> &Vec<T>::operator=(Vec &&other) & noexcept {
  this->drop();
  this->repr = other.repr;
  new (&other) Vec();
  return *this;
}

template <typename T>
Vec<T> &Vec<T>::operator=(const Vec &other) & {
  if (this != &other) {
    this->drop();
    new (this) Vec(other);
  }
  return *this;
}

template <typename T>
bool Vec<T>::empty() const noexcept {
  return this->size() == 0;
}

template <typename T>
T *Vec<T>::data() noexcept {
  return const_cast<T *>(const_cast<const Vec<T> *>(this)->data());
}

template <typename T>
const T &Vec<T>::operator[](std::size_t n) const noexcept {
  assert(n < this->size());
  auto data = reinterpret_cast<const char *>(this->data());
  return *reinterpret_cast<const T *>(data + n * size_of<T>());
}

template <typename T>
const T &Vec<T>::at(std::size_t n) const {
  if (n >= this->size()) {
    panic<std::out_of_range>("rust::Vec index out of range");
  }
  return (*this)[n];
}

template <typename T>
const T &Vec<T>::front() const noexcept {
  assert(!this->empty());
  return (*this)[0];
}

template <typename T>
const T &Vec<T>::back() const noexcept {
  assert(!this->empty());
  return (*this)[this->size() - 1];
}

template <typename T>
T &Vec<T>::operator[](std::size_t n) noexcept {
  assert(n < this->size());
  auto data = reinterpret_cast<char *>(this->data());
  return *reinterpret_cast<T *>(data + n * size_of<T>());
}

template <typename T>
T &Vec<T>::at(std::size_t n) {
  if (n >= this->size()) {
    panic<std::out_of_range>("rust::Vec index out of range");
  }
  return (*this)[n];
}

template <typename T>
T &Vec<T>::front() noexcept {
  assert(!this->empty());
  return (*this)[0];
}

template <typename T>
T &Vec<T>::back() noexcept {
  assert(!this->empty());
  return (*this)[this->size() - 1];
}

template <typename T>
void Vec<T>::reserve(std::size_t new_cap) {
  this->reserve_total(new_cap);
}

template <typename T>
void Vec<T>::push_back(const T &value) {
  this->emplace_back(value);
}

template <typename T>
void Vec<T>::push_back(T &&value) {
  this->emplace_back(std::move(value));
}

template <typename T>
template <typename... Args>
void Vec<T>::emplace_back(Args &&...args) {
  auto size = this->size();
  this->reserve_total(size + 1);
  ::new (reinterpret_cast<T *>(reinterpret_cast<char *>(this->data()) +
                               size * size_of<T>()))
      T(std::forward<Args>(args)...);
  this->set_len(size + 1);
}

template <typename T>
void Vec<T>::clear() {
  this->truncate(0);
}

template <typename T>
typename Vec<T>::iterator Vec<T>::begin() noexcept {
  return Slice<T>(this->data(), this->size()).begin();
}

template <typename T>
typename Vec<T>::iterator Vec<T>::end() noexcept {
  return Slice<T>(this->data(), this->size()).end();
}

template <typename T>
typename Vec<T>::const_iterator Vec<T>::begin() const noexcept {
  return this->cbegin();
}

template <typename T>
typename Vec<T>::const_iterator Vec<T>::end() const noexcept {
  return this->cend();
}

template <typename T>
typename Vec<T>::const_iterator Vec<T>::cbegin() const noexcept {
  return Slice<const T>(this->data(), this->size()).begin();
}

template <typename T>
typename Vec<T>::const_iterator Vec<T>::cend() const noexcept {
  return Slice<const T>(this->data(), this->size()).end();
}

template <typename T>
void Vec<T>::swap(Vec &rhs) noexcept {
  using std::swap;
  swap(this->repr, rhs.repr);
}

template <typename T>
Vec<T>::Vec(unsafe_bitcopy_t, const Vec &bits) noexcept : repr(bits.repr) {}
#endif // CXXBRIDGE1_RUST_VEC

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
union ManuallyDrop {
  T value;
  ManuallyDrop(T &&value) : value(::std::move(value)) {}
  ~ManuallyDrop() {}
};

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

namespace mojo {
  using Message = ::mojo::Message;
  namespace rust {
    namespace bindings {
      struct EndpointInfo;
      struct MultiplexRouter;
      using AssociatedEndpointRustAdapter = ::mojo::rust::bindings::AssociatedEndpointRustAdapter;
      using RustAssociatedEndpointClient = ::mojo::rust::bindings::RustAssociatedEndpointClient;
      using RustAssociatedGroupController = ::mojo::rust::bindings::RustAssociatedGroupController;
      using MojoResponderWrapper = ::mojo::rust::bindings::MojoResponderWrapper;
    }
  }
}

namespace mojo {
namespace rust {
namespace bindings {
#ifndef CXXBRIDGE1_STRUCT_mojo$rust$bindings$EndpointInfo
#define CXXBRIDGE1_STRUCT_mojo$rust$bindings$EndpointInfo
struct EndpointInfo final : public ::rust::Opaque {
  ~EndpointInfo() = delete;

private:
  friend ::rust::layout;
  struct layout {
    static ::std::size_t size() noexcept;
    static ::std::size_t align() noexcept;
  };
};
#endif // CXXBRIDGE1_STRUCT_mojo$rust$bindings$EndpointInfo

#ifndef CXXBRIDGE1_STRUCT_mojo$rust$bindings$MultiplexRouter
#define CXXBRIDGE1_STRUCT_mojo$rust$bindings$MultiplexRouter
struct MultiplexRouter final : public ::rust::Opaque {
  // Notifies the Rust MultiplexRouter that an endpoint has been dropped.
  void notify_dropped(::std::uint32_t interface_id) const noexcept;

  // Notifies the Rust MultiplexRouter that the peer of an endpoint was
  // closed.
  void notify_peer_closed(::std::uint32_t interface_id) const noexcept;

  ~MultiplexRouter() = delete;

private:
  friend ::rust::layout;
  struct layout {
    static ::std::size_t size() noexcept;
    static ::std::size_t align() noexcept;
  };
};
#endif // CXXBRIDGE1_STRUCT_mojo$rust$bindings$MultiplexRouter

extern "C" {
::std::size_t mojo$rust$bindings$cxxbridge1$202$EndpointInfo$operator$sizeof() noexcept;
::std::size_t mojo$rust$bindings$cxxbridge1$202$EndpointInfo$operator$alignof() noexcept;
::std::size_t mojo$rust$bindings$cxxbridge1$202$MultiplexRouter$operator$sizeof() noexcept;
::std::size_t mojo$rust$bindings$cxxbridge1$202$MultiplexRouter$operator$alignof() noexcept;

void mojo$rust$bindings$cxxbridge1$202$MultiplexRouter$notify_dropped(::mojo::rust::bindings::MultiplexRouter const &self, ::std::uint32_t interface_id) noexcept;

void mojo$rust$bindings$cxxbridge1$202$MultiplexRouter$notify_peer_closed(::mojo::rust::bindings::MultiplexRouter const &self, ::std::uint32_t interface_id) noexcept;

::std::uint32_t mojo$rust$bindings$cxxbridge1$202$allocate_interface_id(::mojo::rust::bindings::MultiplexRouter const &router) noexcept;

bool mojo$rust$bindings$cxxbridge1$202$register_interface_id(::mojo::rust::bindings::MultiplexRouter const &router, ::std::uint32_t interface_id) noexcept;

bool mojo$rust$bindings$cxxbridge1$202$send_message_from_cpp(::mojo::rust::bindings::MultiplexRouter const &router, ::std::uint32_t interface_id, ::mojo::rust::ScopedMessageHandleWrapper *message_wrapper) noexcept;

void mojo$rust$bindings$cxxbridge1$202$attach_cpp_endpoint(::mojo::rust::bindings::MultiplexRouter const &router, ::std::uint32_t interface_id, ::mojo::rust::bindings::RustAssociatedEndpointClient *client, ::base::SequencedTaskRunner const &runner) noexcept;

bool mojo$rust$bindings$cxxbridge1$202$run_rust_incoming_handler(::mojo::rust::bindings::EndpointInfo const &info, ::rust::Slice<::std::uint8_t const> payload, ::rust::Vec<::std::size_t> *handles, ::mojo::rust::ScopedMessageHandleWrapper *raw_message_handle, ::mojo::rust::bindings::MojoResponderWrapper *responder) noexcept;

void mojo$rust$bindings$cxxbridge1$202$run_rust_disconnect_handler(::mojo::rust::bindings::EndpointInfo *info) noexcept;

::mojo::rust::bindings::RustAssociatedGroupController *mojo$rust$bindings$cxxbridge1$202$CreateGroupControllerForRustRouter(::mojo::rust::bindings::MultiplexRouter *router, ::base::SequencedTaskRunner &runner) noexcept {
  ::mojo::rust::bindings::RustAssociatedGroupController *(*CreateGroupControllerForRustRouter$)(::rust::Box<::mojo::rust::bindings::MultiplexRouter>, ::base::SequencedTaskRunner &) = ::mojo::rust::bindings::CreateGroupControllerForRustRouter;
  return CreateGroupControllerForRustRouter$(::rust::Box<::mojo::rust::bindings::MultiplexRouter>::from_raw(router), runner);
}

void mojo$rust$bindings$cxxbridge1$202$RustAssociatedGroupController$AddRef(::mojo::rust::bindings::RustAssociatedGroupController const &self) noexcept {
  void (::mojo::rust::bindings::RustAssociatedGroupController::*AddRef$)() const = &::mojo::rust::bindings::RustAssociatedGroupController::AddRef;
  (self.*AddRef$)();
}

void mojo$rust$bindings$cxxbridge1$202$RustAssociatedGroupController$Release(::mojo::rust::bindings::RustAssociatedGroupController const &self) noexcept {
  void (::mojo::rust::bindings::RustAssociatedGroupController::*Release$)() const = &::mojo::rust::bindings::RustAssociatedGroupController::Release;
  (self.*Release$)();
}

::mojo::Message *mojo$rust$bindings$cxxbridge1$202$CreateOutgoingMessage(::rust::Slice<::std::uint8_t const> payload, ::rust::Vec<::std::size_t> const *handles) noexcept {
  ::std::unique_ptr<::mojo::Message> (*CreateOutgoingMessage$)(::rust::Slice<::std::uint8_t const>, ::rust::Vec<::std::size_t>) = ::mojo::rust::bindings::CreateOutgoingMessage;
  return CreateOutgoingMessage$(payload, ::rust::Vec<::std::size_t>(::rust::unsafe_bitcopy, *handles)).release();
}

::mojo::Message *mojo$rust$bindings$cxxbridge1$202$CreateIncomingMessage(::mojo::rust::ScopedMessageHandleWrapper *raw_handle, ::rust::Vec<::std::size_t> const *handles) noexcept {
  ::std::unique_ptr<::mojo::Message> (*CreateIncomingMessage$)(::std::unique_ptr<::mojo::rust::ScopedMessageHandleWrapper>, ::rust::Vec<::std::size_t>) = ::mojo::rust::bindings::CreateIncomingMessage;
  return CreateIncomingMessage$(::std::unique_ptr<::mojo::rust::ScopedMessageHandleWrapper>(raw_handle), ::rust::Vec<::std::size_t>(::rust::unsafe_bitcopy, *handles)).release();
}

void mojo$rust$bindings$cxxbridge1$202$CreatePairPendingAssociation(::std::unique_ptr<::mojo::rust::bindings::AssociatedEndpointRustAdapter> &self_out, ::std::unique_ptr<::mojo::rust::bindings::AssociatedEndpointRustAdapter> &peer_out) noexcept {
  void (*CreatePairPendingAssociation$)(::std::unique_ptr<::mojo::rust::bindings::AssociatedEndpointRustAdapter> &, ::std::unique_ptr<::mojo::rust::bindings::AssociatedEndpointRustAdapter> &) = ::mojo::rust::bindings::CreatePairPendingAssociation;
  CreatePairPendingAssociation$(self_out, peer_out);
}

::mojo::rust::bindings::AssociatedEndpointRustAdapter *mojo$rust$bindings$cxxbridge1$202$CreateWithRustController(::mojo::rust::bindings::RustAssociatedGroupController &controller, ::std::uint32_t interface_id) noexcept {
  ::std::unique_ptr<::mojo::rust::bindings::AssociatedEndpointRustAdapter> (*CreateWithRustController$)(::mojo::rust::bindings::RustAssociatedGroupController &, ::std::uint32_t) = ::mojo::rust::bindings::CreateWithRustController;
  return CreateWithRustController$(controller, interface_id).release();
}

bool mojo$rust$bindings$cxxbridge1$202$AssociatedEndpointRustAdapter$is_associated(::mojo::rust::bindings::AssociatedEndpointRustAdapter const &self) noexcept {
  bool (::mojo::rust::bindings::AssociatedEndpointRustAdapter::*is_associated$)() const = &::mojo::rust::bindings::AssociatedEndpointRustAdapter::is_associated;
  return (self.*is_associated$)();
}

void mojo$rust$bindings$cxxbridge1$202$AssociatedEndpointRustAdapter$AssociatePeerWithRustController(::mojo::rust::bindings::AssociatedEndpointRustAdapter &self, ::mojo::rust::bindings::RustAssociatedGroupController &controller, ::std::uint32_t interface_id) noexcept {
  void (::mojo::rust::bindings::AssociatedEndpointRustAdapter::*AssociatePeerWithRustController$)(::mojo::rust::bindings::RustAssociatedGroupController &, ::std::uint32_t) = &::mojo::rust::bindings::AssociatedEndpointRustAdapter::AssociatePeerWithRustController;
  (self.*AssociatePeerWithRustController$)(controller, interface_id);
}

void mojo$rust$bindings$cxxbridge1$202$AssociatedEndpointRustAdapter$Bind(::mojo::rust::bindings::AssociatedEndpointRustAdapter &self, ::base::SequencedTaskRunner &runner, ::mojo::rust::bindings::EndpointInfo *info) noexcept {
  void (::mojo::rust::bindings::AssociatedEndpointRustAdapter::*Bind$)(::base::SequencedTaskRunner &, ::rust::Box<::mojo::rust::bindings::EndpointInfo>) = &::mojo::rust::bindings::AssociatedEndpointRustAdapter::Bind;
  (self.*Bind$)(runner, ::rust::Box<::mojo::rust::bindings::EndpointInfo>::from_raw(info));
}

::std::uint32_t mojo$rust$bindings$cxxbridge1$202$AssociatedEndpointRustAdapter$GetInterfaceId(::mojo::rust::bindings::AssociatedEndpointRustAdapter const &self) noexcept {
  ::std::uint32_t (::mojo::rust::bindings::AssociatedEndpointRustAdapter::*GetInterfaceId$)() const = &::mojo::rust::bindings::AssociatedEndpointRustAdapter::GetInterfaceId;
  return (self.*GetInterfaceId$)();
}

void mojo$rust$bindings$cxxbridge1$202$AssociatedEndpointRustAdapter$SendMessage(::mojo::rust::bindings::AssociatedEndpointRustAdapter const &self, ::mojo::Message *message) noexcept {
  void (::mojo::rust::bindings::AssociatedEndpointRustAdapter::*SendMessage$)(::std::unique_ptr<::mojo::Message>) const = &::mojo::rust::bindings::AssociatedEndpointRustAdapter::SendMessage;
  (self.*SendMessage$)(::std::unique_ptr<::mojo::Message>(message));
}

::mojo::rust::bindings::AssociatedEndpointRustAdapter *mojo$rust$bindings$cxxbridge1$202$AssociatedEndpointRustAdapter$RegisterNewEndpoint(::mojo::rust::bindings::AssociatedEndpointRustAdapter const &self, ::std::uint32_t interface_id) noexcept {
  ::std::unique_ptr<::mojo::rust::bindings::AssociatedEndpointRustAdapter> (::mojo::rust::bindings::AssociatedEndpointRustAdapter::*RegisterNewEndpoint$)(::std::uint32_t) const = &::mojo::rust::bindings::AssociatedEndpointRustAdapter::RegisterNewEndpoint;
  return (self.*RegisterNewEndpoint$)(interface_id).release();
}

::std::uint32_t mojo$rust$bindings$cxxbridge1$202$AssociatedEndpointRustAdapter$AssociateInterface(::mojo::rust::bindings::AssociatedEndpointRustAdapter const &self, ::mojo::rust::bindings::AssociatedEndpointRustAdapter *endpoint) noexcept {
  ::std::uint32_t (::mojo::rust::bindings::AssociatedEndpointRustAdapter::*AssociateInterface$)(::std::unique_ptr<::mojo::rust::bindings::AssociatedEndpointRustAdapter>) const = &::mojo::rust::bindings::AssociatedEndpointRustAdapter::AssociateInterface;
  return (self.*AssociateInterface$)(::std::unique_ptr<::mojo::rust::bindings::AssociatedEndpointRustAdapter>(endpoint));
}

bool mojo$rust$bindings$cxxbridge1$202$run_cpp_incoming_handler(::mojo::rust::bindings::RustAssociatedEndpointClient const &client, ::mojo::Message *message) noexcept {
  bool (*run_cpp_incoming_handler$)(::mojo::rust::bindings::RustAssociatedEndpointClient const &, ::std::unique_ptr<::mojo::Message>) = ::mojo::rust::bindings::run_cpp_incoming_handler;
  return run_cpp_incoming_handler$(client, ::std::unique_ptr<::mojo::Message>(message));
}

void mojo$rust$bindings$cxxbridge1$202$run_cpp_disconnect_handler(::mojo::rust::bindings::RustAssociatedEndpointClient const &client) noexcept {
  void (*run_cpp_disconnect_handler$)(::mojo::rust::bindings::RustAssociatedEndpointClient const &) = ::mojo::rust::bindings::run_cpp_disconnect_handler;
  run_cpp_disconnect_handler$(client);
}

void mojo$rust$bindings$cxxbridge1$202$MojoResponderWrapper$Accept(::mojo::rust::bindings::MojoResponderWrapper const &self, ::mojo::Message *message) noexcept {
  void (::mojo::rust::bindings::MojoResponderWrapper::*Accept$)(::std::unique_ptr<::mojo::Message>) const = &::mojo::rust::bindings::MojoResponderWrapper::Accept;
  (self.*Accept$)(::std::unique_ptr<::mojo::Message>(message));
}

bool mojo$rust$bindings$cxxbridge1$202$MojoResponderWrapper$CanSendResponse(::mojo::rust::bindings::MojoResponderWrapper const &self) noexcept {
  bool (::mojo::rust::bindings::MojoResponderWrapper::*CanSendResponse$)() const = &::mojo::rust::bindings::MojoResponderWrapper::CanSendResponse;
  return (self.*CanSendResponse$)();
}

::mojo::rust::bindings::AssociatedEndpointRustAdapter *mojo$rust$bindings$cxxbridge1$202$MojoResponderWrapper$RegisterNewEndpoint(::mojo::rust::bindings::MojoResponderWrapper const &self, ::std::uint32_t interface_id) noexcept {
  ::std::unique_ptr<::mojo::rust::bindings::AssociatedEndpointRustAdapter> (::mojo::rust::bindings::MojoResponderWrapper::*RegisterNewEndpoint$)(::std::uint32_t) const = &::mojo::rust::bindings::MojoResponderWrapper::RegisterNewEndpoint;
  return (self.*RegisterNewEndpoint$)(interface_id).release();
}

::std::uint32_t mojo$rust$bindings$cxxbridge1$202$MojoResponderWrapper$AssociateInterface(::mojo::rust::bindings::MojoResponderWrapper const &self, ::mojo::rust::bindings::AssociatedEndpointRustAdapter *endpoint) noexcept {
  ::std::uint32_t (::mojo::rust::bindings::MojoResponderWrapper::*AssociateInterface$)(::std::unique_ptr<::mojo::rust::bindings::AssociatedEndpointRustAdapter>) const = &::mojo::rust::bindings::MojoResponderWrapper::AssociateInterface;
  return (self.*AssociateInterface$)(::std::unique_ptr<::mojo::rust::bindings::AssociatedEndpointRustAdapter>(endpoint));
}
} // extern "C"

::std::size_t EndpointInfo::layout::size() noexcept {
  return mojo$rust$bindings$cxxbridge1$202$EndpointInfo$operator$sizeof();
}

::std::size_t EndpointInfo::layout::align() noexcept {
  return mojo$rust$bindings$cxxbridge1$202$EndpointInfo$operator$alignof();
}

::std::size_t MultiplexRouter::layout::size() noexcept {
  return mojo$rust$bindings$cxxbridge1$202$MultiplexRouter$operator$sizeof();
}

::std::size_t MultiplexRouter::layout::align() noexcept {
  return mojo$rust$bindings$cxxbridge1$202$MultiplexRouter$operator$alignof();
}

void MultiplexRouter::notify_dropped(::std::uint32_t interface_id) const noexcept {
  mojo$rust$bindings$cxxbridge1$202$MultiplexRouter$notify_dropped(*this, interface_id);
}

void MultiplexRouter::notify_peer_closed(::std::uint32_t interface_id) const noexcept {
  mojo$rust$bindings$cxxbridge1$202$MultiplexRouter$notify_peer_closed(*this, interface_id);
}

// Allocates a new interface ID on the Rust router.
::std::uint32_t allocate_interface_id(::mojo::rust::bindings::MultiplexRouter const &router) noexcept {
  return mojo$rust$bindings$cxxbridge1$202$allocate_interface_id(router);
}

// Registers a received interface ID on the Rust router before it is
// bound. Returns true on success, or false if the ID was already
// registered.
bool register_interface_id(::mojo::rust::bindings::MultiplexRouter const &router, ::std::uint32_t interface_id) noexcept {
  return mojo$rust$bindings$cxxbridge1$202$register_interface_id(router, interface_id);
}

// Sends an outgoing message through the Rust router. Returns true if
// the message was successfully written to the pipe, or false if the
// interface is closed or writing failed.
bool send_message_from_cpp(::mojo::rust::bindings::MultiplexRouter const &router, ::std::uint32_t interface_id, ::std::unique_ptr<::mojo::rust::ScopedMessageHandleWrapper> message_wrapper) noexcept {
  return mojo$rust$bindings$cxxbridge1$202$send_message_from_cpp(router, interface_id, message_wrapper.release());
}

// Attaches a C++ endpoint client to the Rust router.
void attach_cpp_endpoint(::mojo::rust::bindings::MultiplexRouter const &router, ::std::uint32_t interface_id, ::std::unique_ptr<::mojo::rust::bindings::RustAssociatedEndpointClient> client, ::base::SequencedTaskRunner const &runner) noexcept {
  mojo$rust$bindings$cxxbridge1$202$attach_cpp_endpoint(router, interface_id, client.release(), runner);
}

// Called by C++ when an incoming message arrives for a Rust-bound
// associated endpoint. Returns true if the message was successfully
// dispatched to the Rust handler, or false on deserialization failure.
//
// # Safety
// `handles` must contain only live, unowned raw handle values.
// Ownership of those handles is transferred to Rust.
// Its type really should be Vec<UntypedHandle>, but cxx won't have it
bool run_rust_incoming_handler(::mojo::rust::bindings::EndpointInfo const &info, ::rust::Slice<::std::uint8_t const> payload, ::rust::Vec<::std::size_t> handles, ::std::unique_ptr<::mojo::rust::ScopedMessageHandleWrapper> raw_message_handle, ::std::unique_ptr<::mojo::rust::bindings::MojoResponderWrapper> responder) noexcept {
  ::rust::ManuallyDrop<::rust::Vec<::std::size_t>> handles$(::std::move(handles));
  return mojo$rust$bindings$cxxbridge1$202$run_rust_incoming_handler(info, payload, &handles$.value, raw_message_handle.release(), responder.release());
}

// Called by C++ to invoke the user-provided Rust disconnect handler
void run_rust_disconnect_handler(::rust::Box<::mojo::rust::bindings::EndpointInfo> info) noexcept {
  mojo$rust$bindings$cxxbridge1$202$run_rust_disconnect_handler(info.into_raw());
}
} // namespace bindings
} // namespace rust
} // namespace mojo

extern "C" {
static_assert(::rust::detail::is_complete<::std::remove_extent<::mojo::rust::bindings::RustAssociatedEndpointClient>::type>::value, "definition of `::mojo::rust::bindings::RustAssociatedEndpointClient` is required");
static_assert(sizeof(::std::unique_ptr<::mojo::rust::bindings::RustAssociatedEndpointClient>) == sizeof(void *), "");
static_assert(alignof(::std::unique_ptr<::mojo::rust::bindings::RustAssociatedEndpointClient>) == alignof(void *), "");
void cxxbridge1$unique_ptr$mojo$rust$bindings$RustAssociatedEndpointClient$null(::std::unique_ptr<::mojo::rust::bindings::RustAssociatedEndpointClient> *ptr) noexcept {
  ::new (ptr) ::std::unique_ptr<::mojo::rust::bindings::RustAssociatedEndpointClient>();
}
void cxxbridge1$unique_ptr$mojo$rust$bindings$RustAssociatedEndpointClient$raw(::std::unique_ptr<::mojo::rust::bindings::RustAssociatedEndpointClient> *ptr, ::std::unique_ptr<::mojo::rust::bindings::RustAssociatedEndpointClient>::pointer raw) noexcept {
  ::new (ptr) ::std::unique_ptr<::mojo::rust::bindings::RustAssociatedEndpointClient>(raw);
}
::std::unique_ptr<::mojo::rust::bindings::RustAssociatedEndpointClient>::element_type const *cxxbridge1$unique_ptr$mojo$rust$bindings$RustAssociatedEndpointClient$get(::std::unique_ptr<::mojo::rust::bindings::RustAssociatedEndpointClient> const &ptr) noexcept {
  return ptr.get();
}
::std::unique_ptr<::mojo::rust::bindings::RustAssociatedEndpointClient>::pointer cxxbridge1$unique_ptr$mojo$rust$bindings$RustAssociatedEndpointClient$release(::std::unique_ptr<::mojo::rust::bindings::RustAssociatedEndpointClient> &ptr) noexcept {
  return ptr.release();
}
void cxxbridge1$unique_ptr$mojo$rust$bindings$RustAssociatedEndpointClient$drop(::std::unique_ptr<::mojo::rust::bindings::RustAssociatedEndpointClient> *ptr) noexcept {
  ::rust::deleter_if<::rust::detail::is_complete<::mojo::rust::bindings::RustAssociatedEndpointClient>::value>{}(ptr);
}

static_assert(::rust::detail::is_complete<::std::remove_extent<::mojo::rust::bindings::MojoResponderWrapper>::type>::value, "definition of `::mojo::rust::bindings::MojoResponderWrapper` is required");
static_assert(sizeof(::std::unique_ptr<::mojo::rust::bindings::MojoResponderWrapper>) == sizeof(void *), "");
static_assert(alignof(::std::unique_ptr<::mojo::rust::bindings::MojoResponderWrapper>) == alignof(void *), "");
void cxxbridge1$unique_ptr$mojo$rust$bindings$MojoResponderWrapper$null(::std::unique_ptr<::mojo::rust::bindings::MojoResponderWrapper> *ptr) noexcept {
  ::new (ptr) ::std::unique_ptr<::mojo::rust::bindings::MojoResponderWrapper>();
}
void cxxbridge1$unique_ptr$mojo$rust$bindings$MojoResponderWrapper$raw(::std::unique_ptr<::mojo::rust::bindings::MojoResponderWrapper> *ptr, ::std::unique_ptr<::mojo::rust::bindings::MojoResponderWrapper>::pointer raw) noexcept {
  ::new (ptr) ::std::unique_ptr<::mojo::rust::bindings::MojoResponderWrapper>(raw);
}
::std::unique_ptr<::mojo::rust::bindings::MojoResponderWrapper>::element_type const *cxxbridge1$unique_ptr$mojo$rust$bindings$MojoResponderWrapper$get(::std::unique_ptr<::mojo::rust::bindings::MojoResponderWrapper> const &ptr) noexcept {
  return ptr.get();
}
::std::unique_ptr<::mojo::rust::bindings::MojoResponderWrapper>::pointer cxxbridge1$unique_ptr$mojo$rust$bindings$MojoResponderWrapper$release(::std::unique_ptr<::mojo::rust::bindings::MojoResponderWrapper> &ptr) noexcept {
  return ptr.release();
}
void cxxbridge1$unique_ptr$mojo$rust$bindings$MojoResponderWrapper$drop(::std::unique_ptr<::mojo::rust::bindings::MojoResponderWrapper> *ptr) noexcept {
  ::rust::deleter_if<::rust::detail::is_complete<::mojo::rust::bindings::MojoResponderWrapper>::value>{}(ptr);
}

::mojo::rust::bindings::EndpointInfo *cxxbridge1$box$mojo$rust$bindings$EndpointInfo$alloc() noexcept;
void cxxbridge1$box$mojo$rust$bindings$EndpointInfo$dealloc(::mojo::rust::bindings::EndpointInfo *) noexcept;
void cxxbridge1$box$mojo$rust$bindings$EndpointInfo$drop(::rust::Box<::mojo::rust::bindings::EndpointInfo> *ptr) noexcept;

::mojo::rust::bindings::MultiplexRouter *cxxbridge1$box$mojo$rust$bindings$MultiplexRouter$alloc() noexcept;
void cxxbridge1$box$mojo$rust$bindings$MultiplexRouter$dealloc(::mojo::rust::bindings::MultiplexRouter *) noexcept;
void cxxbridge1$box$mojo$rust$bindings$MultiplexRouter$drop(::rust::Box<::mojo::rust::bindings::MultiplexRouter> *ptr) noexcept;

static_assert(::rust::detail::is_complete<::std::remove_extent<::mojo::Message>::type>::value, "definition of `::mojo::Message` is required");
static_assert(sizeof(::std::unique_ptr<::mojo::Message>) == sizeof(void *), "");
static_assert(alignof(::std::unique_ptr<::mojo::Message>) == alignof(void *), "");
void cxxbridge1$unique_ptr$mojo$Message$null(::std::unique_ptr<::mojo::Message> *ptr) noexcept {
  ::new (ptr) ::std::unique_ptr<::mojo::Message>();
}
void cxxbridge1$unique_ptr$mojo$Message$raw(::std::unique_ptr<::mojo::Message> *ptr, ::std::unique_ptr<::mojo::Message>::pointer raw) noexcept {
  ::new (ptr) ::std::unique_ptr<::mojo::Message>(raw);
}
::std::unique_ptr<::mojo::Message>::element_type const *cxxbridge1$unique_ptr$mojo$Message$get(::std::unique_ptr<::mojo::Message> const &ptr) noexcept {
  return ptr.get();
}
::std::unique_ptr<::mojo::Message>::pointer cxxbridge1$unique_ptr$mojo$Message$release(::std::unique_ptr<::mojo::Message> &ptr) noexcept {
  return ptr.release();
}
void cxxbridge1$unique_ptr$mojo$Message$drop(::std::unique_ptr<::mojo::Message> *ptr) noexcept {
  ::rust::deleter_if<::rust::detail::is_complete<::mojo::Message>::value>{}(ptr);
}

static_assert(::rust::detail::is_complete<::std::remove_extent<::mojo::rust::bindings::AssociatedEndpointRustAdapter>::type>::value, "definition of `::mojo::rust::bindings::AssociatedEndpointRustAdapter` is required");
static_assert(sizeof(::std::unique_ptr<::mojo::rust::bindings::AssociatedEndpointRustAdapter>) == sizeof(void *), "");
static_assert(alignof(::std::unique_ptr<::mojo::rust::bindings::AssociatedEndpointRustAdapter>) == alignof(void *), "");
void cxxbridge1$unique_ptr$mojo$rust$bindings$AssociatedEndpointRustAdapter$null(::std::unique_ptr<::mojo::rust::bindings::AssociatedEndpointRustAdapter> *ptr) noexcept {
  ::new (ptr) ::std::unique_ptr<::mojo::rust::bindings::AssociatedEndpointRustAdapter>();
}
void cxxbridge1$unique_ptr$mojo$rust$bindings$AssociatedEndpointRustAdapter$raw(::std::unique_ptr<::mojo::rust::bindings::AssociatedEndpointRustAdapter> *ptr, ::std::unique_ptr<::mojo::rust::bindings::AssociatedEndpointRustAdapter>::pointer raw) noexcept {
  ::new (ptr) ::std::unique_ptr<::mojo::rust::bindings::AssociatedEndpointRustAdapter>(raw);
}
::std::unique_ptr<::mojo::rust::bindings::AssociatedEndpointRustAdapter>::element_type const *cxxbridge1$unique_ptr$mojo$rust$bindings$AssociatedEndpointRustAdapter$get(::std::unique_ptr<::mojo::rust::bindings::AssociatedEndpointRustAdapter> const &ptr) noexcept {
  return ptr.get();
}
::std::unique_ptr<::mojo::rust::bindings::AssociatedEndpointRustAdapter>::pointer cxxbridge1$unique_ptr$mojo$rust$bindings$AssociatedEndpointRustAdapter$release(::std::unique_ptr<::mojo::rust::bindings::AssociatedEndpointRustAdapter> &ptr) noexcept {
  return ptr.release();
}
void cxxbridge1$unique_ptr$mojo$rust$bindings$AssociatedEndpointRustAdapter$drop(::std::unique_ptr<::mojo::rust::bindings::AssociatedEndpointRustAdapter> *ptr) noexcept {
  ::rust::deleter_if<::rust::detail::is_complete<::mojo::rust::bindings::AssociatedEndpointRustAdapter>::value>{}(ptr);
}
} // extern "C"

namespace rust {
inline namespace cxxbridge1 {
template <>
::mojo::rust::bindings::EndpointInfo *Box<::mojo::rust::bindings::EndpointInfo>::allocation::alloc() noexcept {
  return cxxbridge1$box$mojo$rust$bindings$EndpointInfo$alloc();
}
template <>
void Box<::mojo::rust::bindings::EndpointInfo>::allocation::dealloc(::mojo::rust::bindings::EndpointInfo *ptr) noexcept {
  cxxbridge1$box$mojo$rust$bindings$EndpointInfo$dealloc(ptr);
}
template <>
void Box<::mojo::rust::bindings::EndpointInfo>::drop() noexcept {
  cxxbridge1$box$mojo$rust$bindings$EndpointInfo$drop(this);
}
template <>
::mojo::rust::bindings::MultiplexRouter *Box<::mojo::rust::bindings::MultiplexRouter>::allocation::alloc() noexcept {
  return cxxbridge1$box$mojo$rust$bindings$MultiplexRouter$alloc();
}
template <>
void Box<::mojo::rust::bindings::MultiplexRouter>::allocation::dealloc(::mojo::rust::bindings::MultiplexRouter *ptr) noexcept {
  cxxbridge1$box$mojo$rust$bindings$MultiplexRouter$dealloc(ptr);
}
template <>
void Box<::mojo::rust::bindings::MultiplexRouter>::drop() noexcept {
  cxxbridge1$box$mojo$rust$bindings$MultiplexRouter$drop(this);
}
} // namespace cxxbridge1
} // namespace rust
