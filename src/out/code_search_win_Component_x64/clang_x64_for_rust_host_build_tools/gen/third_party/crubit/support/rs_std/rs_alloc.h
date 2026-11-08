// Automatically @generated C++ bindings for the following Rust crate:
// alloc
// Features: always_specialize_generics_in_cpp_api_from_rust

#pragma once

#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wreturn-type-c-linkage"
#pragma clang diagnostic ignored "-Wunused-private-field"
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wignored-attributes"
#pragma clang diagnostic ignored "-Wshadow"
#include <array>
#include <bit>
#include <compare>
#include <cstddef>
#include <cstdint>
#include <cstring>
#include <functional>
#include <memory>
#include <new>
#include <optional>
#include <ostream>
#include <string_view>
#include <tuple>
#include <type_traits>
#include <utility>

#include "third_party/crubit/support/annotations_internal.h"
#include "third_party/crubit/support/internal/check.h"
#include "third_party/crubit/support/internal/check_no_mutable_aliasing.h"
#include "third_party/crubit/support/internal/memswap.h"
#include "third_party/crubit/support/internal/slot.h"
#include "third_party/crubit/support/lifetime_annotations.h"
#include "third_party/crubit/support/movable.h"
#include "third_party/crubit/support/rs_std/char.h"
#include "third_party/crubit/support/rs_std/fn_ref.h"
#include "third_party/crubit/support/rs_std/option.h"
#include "third_party/crubit/support/rs_std/result.h"
#include "third_party/crubit/support/rs_std/rs_core.h"  // IWYU pragma: export
#include "third_party/crubit/support/rs_std/slice_ref.h"
#include "third_party/crubit/support/rs_std/str_ref.h"
#include "third_party/crubit/support/rs_std/traits.h"
#include "third_party/crubit/support/rs_std/unit.h"
#include "third_party/crubit/support/rs_std/vec.h"

namespace rs::alloc::ffi {
struct FromVecWithNulError;
struct IntoStringError;
struct NulError;
}  // namespace rs::alloc::ffi

namespace rs::alloc::string {
struct String;
}

namespace rs::alloc::alloc {

// Error generating bindings for struct `alloc::alloc::Global` defined at
// library/alloc/src/alloc.rs;l=86: Zero-sized types (ZSTs) are not supported
// (b/258259459)

//  Allocates memory with the global allocator.
//
//  This function forwards calls to the [`GlobalAlloc::alloc`] method
//  of the allocator registered with the `#[global_allocator]` attribute
//  if there is one, or the `std` crate’s default.
//
//  Note, however, that invoking this function is *not* equivalent to invoking
//  the underlying
//  [`GlobalAlloc::alloc`] method of the registered allocator directly. Users of
//  this function cannot assume anything about what the allocator does, other
//  than the documented requirements. This means:
//
//  - This function may non-deterministically entirely skip the underlying
//  allocator, e.g. if the
//    compiler can show that this allocation can be replaced by a stack
//    variable. The compiler may also merge multiple allocation operations into
//    one, as long as it can also adjust all corresponding deallocation
//    operations accordingly.
//  - An allocation created by invoking this function has exactly the size and
//  minimum alignment
//    defined by `layout`, even if the underlying allocator makes stronger
//    promises.
//  - The allocation can only be freed by invoking [`dealloc`] or [`realloc`].
//  In particular,
//    passing a pointer to such an allocation directly to the underlying method
//    on [`GlobalAlloc`] is not permitted. Until one of those functions is
//    called, it is undefined behavior to access the memory that backs this
//    allocation with any pointer not derived from the return value of this
//    function (e.g., with internal pointers the allocator might keep around).
//  - This function de-initializes the contents of the allocation before handing
//  it to the user. So even
//    if you control the underlying allocator and know that it explicitly
//    initialized this memory, you cannot rely on it being initialized.
//
//  Users of this function have to consider that in the future, allocators may
//  be allowed to unwind.
//
//  This function is expected to be deprecated in favor of the `allocate` method
//  of the [`Global`] type when it and the [`Allocator`] trait become stable.
//
//  # Safety
//
//  See [`GlobalAlloc::alloc`].
//
//  # Examples
//
//  ```
//  use std::alloc::{alloc, dealloc, handle_alloc_error, Layout};
//
//  unsafe {
//      let layout = Layout::new::<u16>();
//      let ptr = alloc(layout);
//      if ptr.is_null() {
//          handle_alloc_error(layout);
//      }
//
//      *(ptr as *mut u16) = 42;
//      assert_eq!(*(ptr as *mut u16), 42);
//
//      dealloc(ptr, layout);
//  }
//  ```
//
// Generated from: library/alloc/src/alloc.rs;l=151
[[nodiscard("losing the pointer will leak memory")]] ::std::uint8_t* alloc(
    ::rs::core::alloc::Layout layout);

//  Allocates zero-initialized memory with the global allocator.
//
//  This function forwards calls to the [`GlobalAlloc::alloc_zeroed`] method
//  of the allocator registered with the `#[global_allocator]` attribute
//  if there is one, or the `std` crate’s default.
//
//  Note, however, that invoking this function is *not* equivalent to invoking
//  the underlying
//  [`GlobalAlloc::alloc_zeroed`] method of the registered allocator directly.
//  Users of this function cannot assume anything about what the allocator does,
//  other than the documented requirements. This means:
//
//  - This function may non-deterministically entirely skip the underlying
//  allocator, e.g. if the
//    compiler can show that this allocation can be replaced by a stack
//    variable. The compiler may also merge multiple allocation operations into
//    one, as long as it can also adjust all corresponding deallocation
//    operations accordingly.
//  - The allocation can only be freed by invoking [`dealloc`] or [`realloc`].
//  In particular,
//    passing a pointer to such an allocation directly to the underlying method
//    on [`GlobalAlloc`] is not permitted. Until one of those functions is
//    called, it is undefined behavior to access the memory that backs this
//    allocation with any pointer not derived from the return value of this
//    function (e.g., with internal pointers the allocator might keep around).
//  - An allocation created by invoking this function has exactly the size and
//  minimum alignment
//    defined by `layout`, even if the underlying allocator makes stronger
//    promises.
//
//  Users of this function have to consider that in the future, allocators may
//  be allowed to unwind.
//
//  This function is expected to be deprecated in favor of the `allocate_zeroed`
//  method of the [`Global`] type when it and the [`Allocator`] trait become
//  stable.
//
//  # Safety
//
//  See [`GlobalAlloc::alloc_zeroed`].
//
//  # Examples
//
//  ```
//  use std::alloc::{alloc_zeroed, dealloc, handle_alloc_error, Layout};
//
//  unsafe {
//      let layout = Layout::new::<u16>();
//      let ptr = alloc_zeroed(layout);
//      if ptr.is_null() {
//          handle_alloc_error(layout);
//      }
//
//      assert_eq!(*(ptr as *mut u16), 0);
//
//      dealloc(ptr, layout);
//  }
//  ```
//
// Generated from: library/alloc/src/alloc.rs;l=316
[[nodiscard("losing the pointer will leak memory")]] ::std::uint8_t*
alloc_zeroed(::rs::core::alloc::Layout layout);

//  Deallocates memory with the global allocator.
//
//  This function forwards calls to the [`GlobalAlloc::dealloc`] method
//  of the allocator registered with the `#[global_allocator]` attribute
//  if there is one, or the `std` crate’s default.
//
//  Note, however, that invoking this function is *not* equivalent to invoking
//  the underlying
//  [`GlobalAlloc::dealloc`] method of the registered allocator directly. Users
//  of this function cannot assume anything about what the allocator does, other
//  than the documented requirements. This means:
//
//  - This function may non-deterministically entirely skip the underlying
//  allocator, e.g. if the
//    compiler can show that this allocation can be replaced by a stack
//    variable. The compiler may also merge multiple allocation operations into
//    one, as long as it can also adjust all corresponding deallocation
//    operations accordingly.
//  - The pointer passed to this function must have been obtained by invoking
//  [`alloc`],
//    [`alloc_zeroed`], or [`realloc`]. In particular, passing a pointer
//    returned by the underlying methods on [`GlobalAlloc`] is not permitted.
//  - This function de-initializes the contents of the allocation before handing
//  it to the allocator.
//    So even if you know that the program previously initialized that memory,
//    the allocator cannot rely on it being initialized.
//
//  Users of this function have to consider that in the future, allocators may
//  be allowed to unwind.
//
//  This function is expected to be deprecated in favor of the `deallocate`
//  method of the [`Global`] type when it and the [`Allocator`] trait become
//  stable.
//
//  # Safety
//
//  See [`GlobalAlloc::dealloc`].
//
// Generated from: library/alloc/src/alloc.rs;l=195
void dealloc(::std::uint8_t* ptr, ::rs::core::alloc::Layout layout);

//  Signals a memory allocation error.
//
//  Callers of memory allocation APIs wishing to cease execution
//  in response to an allocation error are encouraged to call this function,
//  rather than directly invoking [`panic!`] or similar.
//
//  This function is guaranteed to diverge (not return normally with a value),
//  but depending on global configuration, it may either panic (resulting in
//  unwinding or aborting as per configuration for all panics), or abort the
//  process (with no unwinding).
//
//  The default behavior is:
//
//   * If the binary links against `std` (typically the case), then
//    print a message to standard error and abort the process.
//    This behavior can be replaced with [`set_alloc_error_hook`] and
//    [`take_alloc_error_hook`]. Future versions of Rust may panic by default
//    instead.
//
//  * If the binary does not link against `std` (all of its crates are marked
//    [`#![no_std]`][no_std]), then call [`panic!`] with a message.
//    [The panic handler] applies as to any panic.
//
//  [`set_alloc_error_hook`]: ../../std/alloc/fn.set_alloc_error_hook.html
//  [`take_alloc_error_hook`]: ../../std/alloc/fn.take_alloc_error_hook.html
//  [The panic handler]:
//  https://doc.rust-lang.org/reference/runtime.html#the-panic_handler-attribute
//  [no_std]:
//  https://doc.rust-lang.org/reference/names/preludes.html#the-no_std-attribute
//
// Generated from: library/alloc/src/alloc.rs;l=669
[[noreturn]] void handle_alloc_error(::rs::core::alloc::Layout layout);

//  Reallocates memory with the global allocator.
//
//  This function forwards calls to the [`GlobalAlloc::realloc`] method
//  of the allocator registered with the `#[global_allocator]` attribute
//  if there is one, or the `std` crate’s default.
//
//  Note, however, that invoking this function is *not* equivalent to invoking
//  the underlying
//  [`GlobalAlloc::realloc`] method of the registered allocator directly. Users
//  of this function cannot assume anything about what the allocator does, other
//  than the documented requirements. This means:
//
//  - This function may non-deterministically entirely skip the underlying
//  allocator, e.g. if the
//    compiler can show that this allocation can be replaced by a stack
//    variable. The compiler may also merge multiple allocation operations into
//    one, as long as it can also adjust all corresponding deallocation
//    operations accordingly.
//  - The pointer passed to this function must have been obtained by invoking
//  [`alloc`],
//    [`alloc_zeroed`], or [`realloc`]. In particular, passing a pointer
//    returned by the underlying methods on [`GlobalAlloc`] is not permitted.
//  - An allocation created by invoking this function has exactly the size and
//  minimum alignment
//    defined by `layout`, even if the underlying allocator makes stronger
//    promises.
//  - The allocation can only be freed by invoking [`dealloc`] or [`realloc`].
//  In particular,
//    passing a pointer to such an allocation directly to the underlying method
//    on [`GlobalAlloc`] is not permitted. Until one of those functions is
//    called, it is undefined behavior to access the memory that backs this
//    allocation with any pointer not derived from the return value of this
//    function (e.g., with internal pointers the allocator might keep around).
//  - If this grows the allocation, the contents of the grown part of the new
//  allocation allocation
//    are de-initialized by this function before returning.
//  - If this shrinks the allocation, the contents of the removed part of the
//  old allocation are
//    de-initialized by this function before invoking the underlying allocator.
//
//  Users of this function have to consider that in the future, allocators may
//  be allowed to unwind.
//
//  This function is expected to be deprecated in favor of the `grow` and
//  `shrink` methods of the [`Global`] type when it and the [`Allocator`] trait
//  become stable.
//
//  # Safety
//
//  See [`GlobalAlloc::realloc`].
//
// Generated from: library/alloc/src/alloc.rs;l=250
[[nodiscard("losing the pointer will leak memory")]] ::std::uint8_t* realloc(
    ::std::uint8_t* ptr, ::rs::core::alloc::Layout layout,
    ::std::uintptr_t new_size);

}  // namespace rs::alloc::alloc

namespace rs::alloc::borrow {

// Error generating bindings for enum `alloc::borrow::Cow` defined at
// library/alloc/src/borrow.rs;l=169: crubit.rs/errors/unsupported_type: Generic
// types are not supported yet (b/259749095)

//  A generalization of `Clone` to borrowed data.
//
//  Some types make it possible to go from borrowed to owned, usually by
//  implementing the `Clone` trait. But `Clone` works only for going from `&T`
//  to `T`. The `ToOwned` trait generalizes `Clone` to construct owned data
//  from any borrow of a given type.
//
// Generated from: library/alloc/src/borrow.rs;l=27
struct CRUBIT_INTERNAL_RUST_TYPE(":: alloc :: borrow :: ToOwned") ToOwned {
  template <typename T>
  using impl = rs_std::impl<T, ToOwned>;
};

}  // namespace rs::alloc::borrow

namespace rs::alloc::boxed {

// Error generating bindings for struct `alloc::boxed::Box` defined at
// library/alloc/src/boxed.rs;l=308: crubit.rs/errors/unsupported_type: Generic
// types are not supported yet (b/259749095)

}

namespace rs::alloc::boxed {

// Error generating bindings for struct `alloc::boxed::BoxedArrayIntoIter`
// defined at library/alloc/src/boxed/iter.rs;l=233:
// crubit.rs/errors/unsupported_type: Generic types are not supported yet
// (b/259749095)

}

namespace rs::alloc::collections {

// Error generating bindings for struct `alloc::collections::BTreeMap` defined
// at library/alloc/src/collections/btree/map.rs;l=189:
// crubit.rs/errors/unsupported_type: Generic types are not supported yet
// (b/259749095)

}

namespace rs::alloc::collections {

// Error generating bindings for struct `alloc::collections::BTreeSet` defined
// at library/alloc/src/collections/btree/set.rs;l=78:
// crubit.rs/errors/unsupported_type: Generic types are not supported yet
// (b/259749095)

}

namespace rs::alloc::collections {

// Error generating bindings for struct `alloc::collections::BinaryHeap` defined
// at library/alloc/src/collections/binary_heap/mod.rs;l=274:
// crubit.rs/errors/unsupported_type: Generic types are not supported yet
// (b/259749095)

}

namespace rs::alloc::collections {

// Error generating bindings for struct `alloc::collections::LinkedList` defined
// at library/alloc/src/collections/linked_list.rs;l=51:
// crubit.rs/errors/unsupported_type: Generic types are not supported yet
// (b/259749095)

}

namespace rs::alloc::collections {

//  The error type for `try_reserve` methods.
//
// Generated from: library/alloc/src/collections/mod.rs;l=71
struct CRUBIT_INTERNAL_RUST_TYPE(
    ":: alloc :: collections :: TryReserveError") alignas(8)
    [[clang::trivial_abi]] TryReserveError final {
 public:
  // `alloc::collections::TryReserveError` doesn't implement the `Default` trait
  TryReserveError() = delete;

  // No custom `Drop` impl and no custom "drop glue" required
  ~TryReserveError() = default;
  TryReserveError(TryReserveError&&) = default;
  TryReserveError& operator=(TryReserveError&&) = default;

  // Clone::clone
  TryReserveError(const TryReserveError&) noexcept;

  // Clone::clone_from
  ::rs::alloc::collections::TryReserveError& operator=(
      const TryReserveError&) noexcept;

  TryReserveError(::crubit::UnsafeRelocateTag, TryReserveError&& value);

  // Generated from: library/alloc/src/collections/mod.rs;l=68
  bool operator==(::rs::alloc::collections::TryReserveError const& other) const;

  // AbslStringify and std::ostream support via std::fmt::Display
  template <typename Sink, typename Str = rs::alloc::string::String>
  friend void AbslStringify(Sink& sink, const TryReserveError& self) {
    crubit::Slot<Str> s;
    __crubit_thunk_7b344df938a8cdb9__uRNvYNtNtCsazOrLUIp1qL_u5alloc11collections15TryReserveErrorNtNtB6_u6string8ToString9to_ustringCsh9G4tFjYpDL_u8rust_uout(
        self, s.Get());
    AbslStringify(sink, ::std::move(s).AssumeInitAndTakeValue().as_str());
  }
  template <typename Str = rs::alloc::string::String>
  friend ::std::ostream& operator<<(::std::ostream& os,
                                    const TryReserveError& self) {
    crubit::Slot<Str> s;
    __crubit_thunk_7b344df938a8cdb9__uRNvYNtNtCsazOrLUIp1qL_u5alloc11collections15TryReserveErrorNtNtB6_u6string8ToString9to_ustringCsh9G4tFjYpDL_u8rust_uout(
        self, s.Get());
    return os << ::std::string_view(
               ::std::move(s).AssumeInitAndTakeValue().as_str());
  }

 private:
  // Field type has been replaced with a blob of bytes: Field is private
  ::std::array<unsigned char, 16> kind;

 private:
  static void __crubit_field_offset_assertions();
};

}  // namespace rs::alloc::collections

namespace rs::alloc::collections {

// Error generating bindings for struct `alloc::collections::VecDeque` defined
// at library/alloc/src/collections/vec_deque/mod.rs;l=104:
// crubit.rs/errors/unsupported_type: Generic types are not supported yet
// (b/259749095)

}

namespace rs::alloc::collections::binary_heap {

// Error generating bindings for struct `alloc::collections::binary_heap::Drain`
// defined at library/alloc/src/collections/binary_heap/mod.rs;l=1847:
// crubit.rs/errors/unsupported_type: Generic types are not supported yet
// (b/259749095)

// Error generating bindings for struct
// `alloc::collections::binary_heap::IntoIter` defined at
// library/alloc/src/collections/binary_heap/mod.rs;l=1694:
// crubit.rs/errors/unsupported_type: Generic types are not supported yet
// (b/259749095)

// Error generating bindings for struct `alloc::collections::binary_heap::Iter`
// defined at library/alloc/src/collections/binary_heap/mod.rs;l=1615:
// crubit.rs/errors/unsupported_type: Generic types are not supported yet
// (b/259749095)

// Error generating bindings for struct
// `alloc::collections::binary_heap::PeekMut` defined at
// library/alloc/src/collections/binary_heap/mod.rs;l=289:
// crubit.rs/errors/unsupported_type: Generic types are not supported yet
// (b/259749095)

}  // namespace rs::alloc::collections::binary_heap

namespace rs::alloc::collections::btree_map {

// Error generating bindings for enum `alloc::collections::btree_map::Entry`
// defined at library/alloc/src/collections/btree/map/entry.rs;l=19:
// crubit.rs/errors/unsupported_type: Generic types are not supported yet
// (b/259749095)

}

namespace rs::alloc::collections::btree_map {

// Error generating bindings for struct
// `alloc::collections::btree_map::ExtractIf` defined at
// library/alloc/src/collections/btree/map.rs;l=2145:
// crubit.rs/errors/unsupported_type: Generic types are not supported yet
// (b/259749095)

// Error generating bindings for struct
// `alloc::collections::btree_map::IntoIter` defined at
// library/alloc/src/collections/btree/map.rs;l=452:
// crubit.rs/errors/unsupported_type: Generic types are not supported yet
// (b/259749095)

// Error generating bindings for struct
// `alloc::collections::btree_map::IntoKeys` defined at
// library/alloc/src/collections/btree/map.rs;l=560:
// crubit.rs/errors/unsupported_type: Generic types are not supported yet
// (b/259749095)

// Error generating bindings for struct
// `alloc::collections::btree_map::IntoValues` defined at
// library/alloc/src/collections/btree/map.rs;l=583:
// crubit.rs/errors/unsupported_type: Generic types are not supported yet
// (b/259749095)

// Error generating bindings for struct `alloc::collections::btree_map::Iter`
// defined at library/alloc/src/collections/btree/map.rs;l=380:
// crubit.rs/errors/unsupported_type: Generic types are not supported yet
// (b/259749095)

// Error generating bindings for struct `alloc::collections::btree_map::IterMut`
// defined at library/alloc/src/collections/btree/map.rs;l=414:
// crubit.rs/errors/unsupported_type: Generic types are not supported yet
// (b/259749095)

// Error generating bindings for struct `alloc::collections::btree_map::Keys`
// defined at library/alloc/src/collections/btree/map.rs;l=503:
// crubit.rs/errors/unsupported_type: Generic types are not supported yet
// (b/259749095)

}  // namespace rs::alloc::collections::btree_map

namespace rs::alloc::collections::btree_map {

// Error generating bindings for struct
// `alloc::collections::btree_map::OccupiedEntry` defined at
// library/alloc/src/collections/btree/map/entry.rs;l=75:
// crubit.rs/errors/unsupported_type: Generic types are not supported yet
// (b/259749095)

}

namespace rs::alloc::collections::btree_map {

// Error generating bindings for struct `alloc::collections::btree_map::Range`
// defined at library/alloc/src/collections/btree/map.rs;l=606:
// crubit.rs/errors/unsupported_type: Generic types are not supported yet
// (b/259749095)

// Error generating bindings for struct
// `alloc::collections::btree_map::RangeMut` defined at
// library/alloc/src/collections/btree/map.rs;l=625:
// crubit.rs/errors/unsupported_type: Generic types are not supported yet
// (b/259749095)

}  // namespace rs::alloc::collections::btree_map

namespace rs::alloc::collections::btree_map {

// Error generating bindings for struct
// `alloc::collections::btree_map::VacantEntry` defined at
// library/alloc/src/collections/btree/map/entry.rs;l=47:
// crubit.rs/errors/unsupported_type: Generic types are not supported yet
// (b/259749095)

}

namespace rs::alloc::collections::btree_map {

// Error generating bindings for struct `alloc::collections::btree_map::Values`
// defined at library/alloc/src/collections/btree/map.rs;l=522:
// crubit.rs/errors/unsupported_type: Generic types are not supported yet
// (b/259749095)

// Error generating bindings for struct
// `alloc::collections::btree_map::ValuesMut` defined at
// library/alloc/src/collections/btree/map.rs;l=541:
// crubit.rs/errors/unsupported_type: Generic types are not supported yet
// (b/259749095)

}  // namespace rs::alloc::collections::btree_map

namespace rs::alloc::collections::btree_set {

// Error generating bindings for struct
// `alloc::collections::btree_set::Difference` defined at
// library/alloc/src/collections/btree/set.rs;l=183:
// crubit.rs/errors/unsupported_type: Generic types are not supported yet
// (b/259749095)

// Error generating bindings for struct
// `alloc::collections::btree_set::ExtractIf` defined at
// library/alloc/src/collections/btree/set.rs;l=1556:
// crubit.rs/errors/unsupported_type: Generic types are not supported yet
// (b/259749095)

// Error generating bindings for struct
// `alloc::collections::btree_set::Intersection` defined at
// library/alloc/src/collections/btree/set.rs;l=257:
// crubit.rs/errors/unsupported_type: Generic types are not supported yet
// (b/259749095)

// Error generating bindings for struct
// `alloc::collections::btree_set::IntoIter` defined at
// library/alloc/src/collections/btree/set.rs;l=154:
// crubit.rs/errors/unsupported_type: Generic types are not supported yet
// (b/259749095)

// Error generating bindings for struct `alloc::collections::btree_set::Iter`
// defined at library/alloc/src/collections/btree/set.rs;l=135:
// crubit.rs/errors/unsupported_type: Generic types are not supported yet
// (b/259749095)

// Error generating bindings for struct `alloc::collections::btree_set::Range`
// defined at library/alloc/src/collections/btree/set.rs;l=170:
// crubit.rs/errors/unsupported_type: Generic types are not supported yet
// (b/259749095)

// Error generating bindings for struct
// `alloc::collections::btree_set::SymmetricDifference` defined at
// library/alloc/src/collections/btree/set.rs;l=239:
// crubit.rs/errors/unsupported_type: Generic types are not supported yet
// (b/259749095)

// Error generating bindings for struct `alloc::collections::btree_set::Union`
// defined at library/alloc/src/collections/btree/set.rs;l=311:
// crubit.rs/errors/unsupported_type: Generic types are not supported yet
// (b/259749095)

}  // namespace rs::alloc::collections::btree_set

namespace rs::alloc::collections::linked_list {

// Error generating bindings for struct
// `alloc::collections::linked_list::ExtractIf` defined at
// library/alloc/src/collections/linked_list.rs;l=1999:
// crubit.rs/errors/unsupported_type: Generic types are not supported yet
// (b/259749095)

// Error generating bindings for struct
// `alloc::collections::linked_list::IntoIter` defined at
// library/alloc/src/collections/linked_list.rs;l=142:
// crubit.rs/errors/unsupported_type: Generic types are not supported yet
// (b/259749095)

// Error generating bindings for struct `alloc::collections::linked_list::Iter`
// defined at library/alloc/src/collections/linked_list.rs;l=74:
// crubit.rs/errors/unsupported_type: Generic types are not supported yet
// (b/259749095)

// Error generating bindings for struct
// `alloc::collections::linked_list::IterMut` defined at
// library/alloc/src/collections/linked_list.rs;l=111:
// crubit.rs/errors/unsupported_type: Generic types are not supported yet
// (b/259749095)

}  // namespace rs::alloc::collections::linked_list

namespace rs::alloc::collections::vec_deque {

// Error generating bindings for struct `alloc::collections::vec_deque::Drain`
// defined at library/alloc/src/collections/vec_deque/drain.rs;l=18:
// crubit.rs/errors/unsupported_type: Generic types are not supported yet
// (b/259749095)

}

namespace rs::alloc::collections::vec_deque {

// Error generating bindings for struct
// `alloc::collections::vec_deque::IntoIter` defined at
// library/alloc/src/collections/vec_deque/into_iter.rs;l=19:
// crubit.rs/errors/unsupported_type: Generic types are not supported yet
// (b/259749095)

}

namespace rs::alloc::collections::vec_deque {

// Error generating bindings for struct `alloc::collections::vec_deque::Iter`
// defined at library/alloc/src/collections/vec_deque/iter.rs;l=13:
// crubit.rs/errors/unsupported_type: Generic types are not supported yet
// (b/259749095)

}

namespace rs::alloc::collections::vec_deque {

// Error generating bindings for struct `alloc::collections::vec_deque::IterMut`
// defined at library/alloc/src/collections/vec_deque/iter_mut.rs;l=13:
// crubit.rs/errors/unsupported_type: Generic types are not supported yet
// (b/259749095)

}

namespace rs::alloc::ffi {

//  A type representing an owned, C-compatible, nul-terminated string with no
//  nul bytes in the middle.
//
//  This type serves the purpose of being able to safely generate a
//  C-compatible string from a Rust byte slice or vector. An instance of this
//  type is a static guarantee that the underlying bytes contain no interior 0
//  bytes ("nul characters") and that the final byte is 0 ("nul terminator").
//
//  `CString` is to <code>&[CStr]</code> as [`String`] is to
//  <code>&[str]</code>: the former in each pair are owned strings; the latter
//  are borrowed references.
//
//  # Creating a `CString`
//
//  A `CString` is created from either a byte slice or a byte vector,
//  or anything that implements <code>[Into]<[Vec]<[u8]>></code> (for
//  example, you can build a `CString` straight out of a [`String`] or
//  a <code>&[str]</code>, since both implement that trait).
//  You can create a `CString` from a literal with `CString::from(c"Text")`.
//
//  The [`CString::new`] method will actually check that the provided
//  <code>&[[u8]]</code> does not have 0 bytes in the middle, and return an
//  error if it finds one.
//
//  # Extracting a raw pointer to the whole C string
//
//  `CString` implements an [`as_ptr`][`CStr::as_ptr`] method through the
//  [`Deref`] trait. This method will give you a `*const c_char` which you can
//  feed directly to extern functions that expect a nul-terminated
//  string, like C's `strdup()`. Notice that [`as_ptr`][`CStr::as_ptr`] returns
//  a read-only pointer; if the C code writes to it, that causes undefined
//  behavior.
//
//  # Extracting a slice of the whole C string
//
//  Alternatively, you can obtain a <code>&[[u8]]</code> slice from a
//  `CString` with the [`CString::as_bytes`] method. Slices produced in this
//  way do *not* contain the trailing nul terminator. This is useful
//  when you will be calling an extern function that takes a `*const
//  u8` argument which is not necessarily nul-terminated, plus another
//  argument with the length of the string — like C's `strndup()`.
//  You can of course get the slice's length with its
//  [`len`][slice::len] method.
//
//  If you need a <code>&[[u8]]</code> slice *with* the nul terminator, you
//  can use [`CString::as_bytes_with_nul`] instead.
//
//  Once you have the kind of slice you need (with or without a nul
//  terminator), you can call the slice's own
//  [`as_ptr`][slice::as_ptr] method to get a read-only raw pointer to pass to
//  extern functions. See the documentation for that function for a
//  discussion on ensuring the lifetime of the raw pointer.
//
//  [str]: prim@str "str"
//  [`Deref`]: ops::Deref
//
//  # Examples
//
//  ```ignore (extern-declaration)
//  # fn main() {
//  use std::ffi::CString;
//  use std::os::raw::c_char;
//
//  extern "C" {
//      fn my_printer(s: *const c_char);
//  }
//
//  // We are certain that our string doesn't have 0 bytes in the middle,
//  // so we can .expect()
//  let c_to_print = CString::new("Hello, world!").expect("we provided a string
//  without NUL bytes, so CString::new should not fail"); unsafe {
//      my_printer(c_to_print.as_ptr());
//  }
//  # }
//  ```
//
//  # Safety
//
//  `CString` is intended for working with traditional C-style strings
//  (a sequence of non-nul bytes terminated by a single nul byte); the
//  primary use case for these kinds of strings is interoperating with C-like
//  code. Often you will need to transfer ownership to/from that external
//  code. It is strongly recommended that you thoroughly read through the
//  documentation of `CString` before use, as improper ownership management
//  of `CString` instances can lead to invalid memory accesses, memory leaks,
//  and other memory errors.
//
// Generated from: library/alloc/src/ffi/c_str.rs;l=109
struct CRUBIT_INTERNAL_RUST_TYPE(":: alloc :: ffi :: CString") alignas(8)
    [[clang::trivial_abi]] CString final {
 public:
  // Default::default
  CString();

  // Drop::drop
  ~CString();

  CString(CString&&) noexcept;
  ::rs::alloc::ffi::CString& operator=(CString&&) noexcept;

  // Clone::clone
  CString(const CString&) noexcept;

  // Clone::clone_from
  ::rs::alloc::ffi::CString& operator=(const CString&) noexcept;

  CString(::crubit::UnsafeRelocateTag, CString&& value);

  //  Creates a new C-compatible string from a container of bytes.
  //
  //  This function will consume the provided data and use the
  //  underlying bytes to construct a new string, ensuring that
  //  there is a trailing 0 byte. This trailing 0 byte will be
  //  appended by this function; the provided data should *not*
  //  contain any 0 bytes in it.
  //
  //  # Examples
  //
  //  ```ignore (extern-declaration)
  //  use std::ffi::CString;
  //  use std::os::raw::c_char;
  //
  //  extern "C" { fn puts(s: *const c_char); }
  //
  //  let to_print = CString::new("Hello!").expect("we provided a string without
  //  NUL bytes, so CString::new should not fail"); unsafe {
  //      puts(to_print.as_ptr());
  //  }
  //  ```
  //
  //  # Errors
  //
  //  This function will return an error if the supplied bytes contain an
  //  internal 0 byte. The [`NulError`] returned will contain the bytes as well
  //  as the position of the nul byte.
  //
  // Generated from: library/alloc/src/ffi/c_str.rs;l=258
  static rs_std::Result<::rs::alloc::ffi::CString, ::rs::alloc::ffi::NulError>
  new_(rs_std::Vec<::std::uint8_t> t);

  //  Creates a C-compatible string by consuming a byte vector,
  //  without checking for interior 0 bytes.
  //
  //  Trailing 0 byte will be appended by this function.
  //
  //  This method is equivalent to [`CString::new`] except that no runtime
  //  assertion is made that `v` contains no 0 bytes, and it requires an
  //  actual byte vector, not anything that can be converted to one with Into.
  //
  //  # Safety
  //
  //  The caller must ensure `v` contains no nul bytes in its contents.
  //
  //  # Examples
  //
  //  ```
  //  use std::ffi::CString;
  //
  //  let raw = b"foo".to_vec();
  //  unsafe {
  //      let c_string = CString::from_vec_unchecked(raw);
  //  }
  //  ```
  //
  // Generated from: library/alloc/src/ffi/c_str.rs;l=343
  [[nodiscard]] static ::rs::alloc::ffi::CString from_vec_unchecked(
      rs_std::Vec<::std::uint8_t> v);

  //  Retakes ownership of a `CString` that was transferred to C via
  //  [`CString::into_raw`].
  //
  //  Additionally, the length of the string will be recalculated from the
  //  pointer.
  //
  //  # Safety
  //
  //  This should only ever be called with a pointer that was earlier
  //  obtained by calling [`CString::into_raw`], and the memory it points to
  //  must not be accessed through any other pointer during the lifetime of
  //  reconstructed `CString`. Other usage (e.g., trying to take ownership of a
  //  string that was allocated by foreign code) is likely to lead to undefined
  //  behavior or allocator corruption.
  //
  //  This function does not validate ownership of the raw pointer's memory.
  //  A double-free may occur if the function is called twice on the same raw
  //  pointer. Additionally, the caller must ensure the pointer is not dangling.
  //
  //  It should be noted that the length isn't just "recomputed," but that
  //  the recomputed length must match the original length from the
  //  [`CString::into_raw`] call. This means the
  //  [`CString::into_raw`]/`from_raw` methods should not be used when passing
  //  the string to C functions that can modify the string's length.
  //
  //  > **Note:** If you need to borrow a string that was allocated by
  //  > foreign code, use [`CStr`]. If you need to take ownership of
  //  > a string that was allocated by foreign code, you will need to
  //  > make your own provisions for freeing it appropriately, likely
  //  > with the foreign code's API to do that.
  //
  //  # Examples
  //
  //  Creates a `CString`, pass ownership to an `extern` function (via raw
  //  pointer), then retake ownership with `from_raw`:
  //
  //  ```ignore (extern-declaration)
  //  use std::ffi::CString;
  //  use std::os::raw::c_char;
  //
  //  extern "C" {
  //      fn some_extern_function(s: *mut c_char);
  //  }
  //
  //  let c_string = CString::from(c"Hello!");
  //  let raw = c_string.into_raw();
  //  unsafe {
  //      some_extern_function(raw);
  //      let c_string = CString::from_raw(raw);
  //  }
  //  ```
  //
  // Generated from: library/alloc/src/ffi/c_str.rs;l=406
  [[nodiscard(
      "call `drop(from_raw(ptr))` if you intend to drop the "
      "`CString`")]] static ::rs::alloc::ffi::CString
  from_raw(::std::int8_t* ptr);

  //  Consumes the `CString` and transfers ownership of the string to a C
  //  caller.
  //
  //  The pointer which this function returns must be returned to Rust and
  //  reconstituted using
  //  [`CString::from_raw`] to be properly deallocated. Specifically, one
  //  should *not* use the standard C `free()` function to deallocate
  //  this string.
  //
  //  Failure to call [`CString::from_raw`] will lead to a memory leak.
  //
  //  The C side must **not** modify the length of the string (by writing a
  //  nul byte somewhere inside the string or removing the final one) before
  //  it makes it back into Rust using [`CString::from_raw`]. See the safety
  //  section in [`CString::from_raw`].
  //
  //  # Examples
  //
  //  ```
  //  use std::ffi::CString;
  //
  //  let c_string = CString::from(c"foo");
  //
  //  let ptr = c_string.into_raw();
  //
  //  unsafe {
  //      assert_eq!(b'f', *ptr as u8);
  //      assert_eq!(b'o', *ptr.add(1) as u8);
  //      assert_eq!(b'o', *ptr.add(2) as u8);
  //      assert_eq!(b'\\0', *ptr.add(3) as u8);
  //
  //      // retake pointer to free memory
  //      let _ = CString::from_raw(ptr);
  //  }
  //  ```
  //
  // Generated from: library/alloc/src/ffi/c_str.rs;l=459
  [[nodiscard(
      "`self` will be dropped if the result is not used")]] ::std::int8_t*
  into_raw() &&;

  //  Converts the `CString` into a [`String`] if it contains valid UTF-8 data.
  //
  //  On failure, ownership of the original `CString` is returned.
  //
  //  # Examples
  //
  //  ```
  //  use std::ffi::CString;
  //
  //  let valid_utf8 = vec![b'f', b'o', b'o'];
  //  let cstring = CString::new(valid_utf8).expect("we provided bytes that do
  //  not have a NUL byte, so CString::new should not fail");
  //  assert_eq!(cstring.into_string().expect("we provided bytes that are valid
  //  UTF-8, so `into_string` should not fail"), "foo");
  //
  //  let invalid_utf8 = vec![b'f', 0xff, b'o', b'o'];
  //  let cstring = CString::new(invalid_utf8).expect("we provided bytes that do
  //  not have a NUL byte, so CString::new should not fail"); let err =
  //  cstring.into_string().expect_err("we provided bytes that are invalid
  //  UTF-8, so `into_string` should fail");
  //  assert_eq!(err.utf8_error().valid_up_to(), 1);
  //  ```
  //
  // Generated from: library/alloc/src/ffi/c_str.rs;l=482
  rs_std::Result<::rs::alloc::string::String, ::rs::alloc::ffi::IntoStringError>
  into_string() &&;

  //  Consumes the `CString` and returns the underlying byte buffer.
  //
  //  The returned buffer does **not** contain the trailing nul
  //  terminator, and it is guaranteed to not have any interior nul
  //  bytes.
  //
  //  # Examples
  //
  //  ```
  //  use std::ffi::CString;
  //
  //  let c_string = CString::from(c"foo");
  //  let bytes = c_string.into_bytes();
  //  assert_eq!(bytes, vec![b'f', b'o', b'o']);
  //  ```
  //
  // Generated from: library/alloc/src/ffi/c_str.rs;l=507
  [[nodiscard("`self` will be dropped if the result is not used")]] rs_std::Vec<
      ::std::uint8_t>
  into_bytes() &&;

  //  Equivalent to [`CString::into_bytes()`] except that the
  //  returned vector includes the trailing nul terminator.
  //
  //  # Examples
  //
  //  ```
  //  use std::ffi::CString;
  //
  //  let c_string = CString::from(c"foo");
  //  let bytes = c_string.into_bytes_with_nul();
  //  assert_eq!(bytes, vec![b'f', b'o', b'o', b'\\0']);
  //  ```
  //
  // Generated from: library/alloc/src/ffi/c_str.rs;l=528
  [[nodiscard("`self` will be dropped if the result is not used")]] rs_std::Vec<
      ::std::uint8_t>
  into_bytes_with_nul() &&;

  //  Returns the contents of this `CString` as a slice of bytes.
  //
  //  The returned slice does **not** contain the trailing nul
  //  terminator, and it is guaranteed to not have any interior nul
  //  bytes. If you need the nul terminator, use
  //  [`CString::as_bytes_with_nul`] instead.
  //
  //  # Examples
  //
  //  ```
  //  use std::ffi::CString;
  //
  //  let c_string = CString::from(c"foo");
  //  let bytes = c_string.as_bytes();
  //  assert_eq!(bytes, &[b'f', b'o', b'o']);
  //  ```
  //
  // Generated from: library/alloc/src/ffi/c_str.rs;l=551
  [[nodiscard]] rs_std::SliceRef<const ::std::uint8_t> as_bytes() const& $(
      __anon1) CRUBIT_LIFETIME_BOUND;

  //  Equivalent to [`CString::as_bytes()`] except that the
  //  returned slice includes the trailing nul terminator.
  //
  //  # Examples
  //
  //  ```
  //  use std::ffi::CString;
  //
  //  let c_string = CString::from(c"foo");
  //  let bytes = c_string.as_bytes_with_nul();
  //  assert_eq!(bytes, &[b'f', b'o', b'o', b'\\0']);
  //  ```
  //
  // Generated from: library/alloc/src/ffi/c_str.rs;l=571
  [[nodiscard]] rs_std::SliceRef<const ::std::uint8_t> as_bytes_with_nul()
      const& $(__anon1) CRUBIT_LIFETIME_BOUND;

  // Error generating bindings for associated function
  // `alloc::ffi::CString::as_c_str` defined at
  // library/alloc/src/ffi/c_str.rs;l=591: Error formatting function return type
  // `&'__anon1 core::ffi::CStr`: Failed to format the referent of the reference
  // type `&'__anon1 core::ffi::CStr`: Failed to format type for the definition
  // of `core::ffi::CStr`: Bindings for dynamically sized types are not
  // supported.

  // Error generating bindings for associated function
  // `alloc::ffi::CString::into_boxed_c_str` defined at
  // library/alloc/src/ffi/c_str.rs;l=607: Error formatting function return type
  // `alloc::boxed::Box<core::ffi::CStr>`: Generic types are not supported yet
  // (b/259749095)

  //  Converts a <code>[Vec]<[u8]></code> to a [`CString`] without checking the
  //  invariants on the given [`Vec`].
  //
  //  # Safety
  //
  //  The given [`Vec`] **must** have one nul byte as its last element.
  //  This means it cannot be empty nor have any other nul byte anywhere else.
  //
  //  # Example
  //
  //  ```
  //  use std::ffi::CString;
  //  assert_eq!(
  //      unsafe { CString::from_vec_with_nul_unchecked(b"abc\\0".to_vec()) },
  //      unsafe { CString::from_vec_unchecked(b"abc".to_vec()) }
  //  );
  //  ```
  //
  // Generated from: library/alloc/src/ffi/c_str.rs;l=643
  [[nodiscard]] static ::rs::alloc::ffi::CString from_vec_with_nul_unchecked(
      rs_std::Vec<::std::uint8_t> v);

  //  Attempts to convert a <code>[Vec]<[u8]></code> to a [`CString`].
  //
  //  Runtime checks are present to ensure there is only one nul byte in the
  //  [`Vec`], its last element.
  //
  //  # Errors
  //
  //  If a nul byte is present and not the last element or no nul bytes
  //  is present, an error will be returned.
  //
  //  # Examples
  //
  //  A successful conversion will produce the same result as [`CString::new`]
  //  when called without the ending nul byte.
  //
  //  ```
  //  use std::ffi::CString;
  //  assert_eq!(
  //      CString::from_vec_with_nul(b"abc\\0".to_vec())
  //          .expect("we provided bytes that has one NUL byte exactly at the
  //          end, so CString::from_vec_with_nul should not fail"),
  //      c"abc".to_owned()
  //  );
  //  ```
  //
  //  An incorrectly formatted [`Vec`] will produce an error.
  //
  //  ```
  //  use std::ffi::{CString, FromVecWithNulError};
  //  // Interior nul byte
  //  let _: FromVecWithNulError =
  //  CString::from_vec_with_nul(b"a\\0bc".to_vec()).unwrap_err();
  //  // No nul byte
  //  let _: FromVecWithNulError =
  //  CString::from_vec_with_nul(b"abc".to_vec()).unwrap_err();
  //  ```
  //
  // Generated from: library/alloc/src/ffi/c_str.rs;l=687
  static rs_std::Result<::rs::alloc::ffi::CString,
                        ::rs::alloc::ffi::FromVecWithNulError>
  from_vec_with_nul(rs_std::Vec<::std::uint8_t> v);

  // Generated from: library/alloc/src/ffi/c_str.rs;l=741
  explicit operator rs_std::Vec<::std::uint8_t>();

  // Error generating bindings for associated function `<alloc::ffi::CString as
  // core::ops::Index<core::ops::RangeFull>>::index` defined at
  // library/alloc/src/ffi/c_str.rs;l=1161: Error formatting function return
  // type `&'__anon1 core::ffi::CStr`: Failed to format the referent of the
  // reference type `&'__anon1 core::ffi::CStr`: Failed to format type for the
  // definition of `core::ffi::CStr`: Bindings for dynamically sized types are
  // not supported.

  // Generated from: library/alloc/src/ffi/c_str.rs;l=105
  bool operator==(::rs::alloc::ffi::CString const& other) const;

  // Error generating bindings for associated function `<alloc::ffi::CString as
  // core::cmp::PartialEq<core::ffi::CStr>>::eq` defined at
  // library/alloc/src/ffi/c_str.rs;l=1119: Error handling parameter #1 of type
  // `&'__anon2 core::ffi::CStr`: Failed to format the referent of the reference
  // type `&'__anon2 core::ffi::CStr`: Failed to format type for the definition
  // of `core::ffi::CStr`: Bindings for dynamically sized types are not
  // supported.

  // Error generating bindings for implementation `<alloc::ffi::CString as
  // core::cmp::PartialEq<&core::ffi::CStr>>` defined at
  // library/alloc/src/ffi/c_str.rs;l=1130: PartialEq implementation for
  // `&core::ffi::CStr` is not supported when `PartialEq<core::ffi::CStr>` is
  // implemented as it may overlap.

  // Error generating bindings for associated function `<alloc::ffi::CString as
  // core::cmp::PartialEq<alloc::borrow::Cow<'_, core::ffi::CStr>>>::eq` defined
  // at library/alloc/src/ffi/c_str.rs;l=1146: Error handling parameter #1 of
  // type `&'__anon2 alloc::borrow::Cow<'__anon3, core::ffi::CStr>`: Failed to
  // format the referent of the reference type `&'__anon2
  // alloc::borrow::Cow<'__anon3, core::ffi::CStr>`: Generic types are not
  // supported yet (b/259749095)

  // AbslHashValue and std::hash support via core::hash::Hash
  template <typename H>
  friend H AbslHashValue(H h, const ::rs::alloc::ffi::CString& self);

  ::std::strong_ordering operator<=>(const CString& other) const;

 private:
  // Field type has been replaced with a blob of bytes: Field is private
  ::std::array<unsigned char, 16> inner;

 private:
  static void __crubit_field_offset_assertions();
};

//  An error indicating that a nul byte was not in the expected position.
//
//  The vector used to create a [`CString`] must have one and only one nul byte,
//  positioned at the end.
//
//  This error is created by the [`CString::from_vec_with_nul`] method.
//  See its documentation for more.
//
//  # Examples
//
//  ```
//  use std::ffi::{CString, FromVecWithNulError};
//
//  let _: FromVecWithNulError =
//  CString::from_vec_with_nul(b"f\\0oo".to_vec()).unwrap_err();
//  ```
//
// Generated from: library/alloc/src/ffi/c_str.rs;l=158
struct CRUBIT_INTERNAL_RUST_TYPE(
    ":: alloc :: ffi :: FromVecWithNulError") alignas(8) [[clang::trivial_abi]]
FromVecWithNulError final {
 public:
  // `alloc::ffi::FromVecWithNulError` doesn't implement the `Default` trait
  FromVecWithNulError() = delete;

  // Drop::drop
  ~FromVecWithNulError();

  // Clone::clone
  FromVecWithNulError(const FromVecWithNulError&) noexcept;

  // Clone::clone_from
  ::rs::alloc::ffi::FromVecWithNulError& operator=(
      const FromVecWithNulError&) noexcept;

  FromVecWithNulError(::crubit::UnsafeRelocateTag, FromVecWithNulError&& value);

  //  Returns a slice of [`u8`]s bytes that were attempted to convert to a
  //  [`CString`].
  //
  //  # Examples
  //
  //  Basic usage:
  //
  //  ```
  //  use std::ffi::CString;
  //
  //  // Some invalid bytes in a vector
  //  let bytes = b"f\\0oo".to_vec();
  //
  //  let value = CString::from_vec_with_nul(bytes.clone());
  //
  //  assert_eq!(&bytes[..], value.unwrap_err().as_bytes());
  //  ```
  //
  // Generated from: library/alloc/src/ffi/c_str.rs;l=183
  [[nodiscard]] rs_std::SliceRef<const ::std::uint8_t> as_bytes() const& $(
      __anon1) CRUBIT_LIFETIME_BOUND;

  //  Returns the bytes that were attempted to convert to a [`CString`].
  //
  //  This method is carefully constructed to avoid allocation. It will
  //  consume the error, moving out the bytes, so that a copy of the bytes
  //  does not need to be made.
  //
  //  # Examples
  //
  //  Basic usage:
  //
  //  ```
  //  use std::ffi::CString;
  //
  //  // Some invalid bytes in a vector
  //  let bytes = b"f\\0oo".to_vec();
  //
  //  let value = CString::from_vec_with_nul(bytes.clone());
  //
  //  assert_eq!(bytes, value.unwrap_err().into_bytes());
  //  ```
  //
  // Generated from: library/alloc/src/ffi/c_str.rs;l=209
  [[nodiscard("`self` will be dropped if the result is not used")]] rs_std::Vec<
      ::std::uint8_t>
  into_bytes() &&;

  // Generated from: library/alloc/src/ffi/c_str.rs;l=156
  bool operator==(::rs::alloc::ffi::FromVecWithNulError const& other) const;

  // AbslStringify and std::ostream support via std::fmt::Display
  template <typename Sink, typename Str = rs::alloc::string::String>
  friend void AbslStringify(Sink& sink, const FromVecWithNulError& self) {
    crubit::Slot<Str> s;
    __crubit_thunk_7b344df938a8cdb9__uRNvYNtNtNtCsazOrLUIp1qL_u5alloc3ffi5c_ustr19FromVecWithNulErrorNtNtB8_u6string8ToString9to_ustringCsh9G4tFjYpDL_u8rust_uout(
        self, s.Get());
    AbslStringify(sink, ::std::move(s).AssumeInitAndTakeValue().as_str());
  }
  template <typename Str = rs::alloc::string::String>
  friend ::std::ostream& operator<<(::std::ostream& os,
                                    const FromVecWithNulError& self) {
    crubit::Slot<Str> s;
    __crubit_thunk_7b344df938a8cdb9__uRNvYNtNtNtCsazOrLUIp1qL_u5alloc3ffi5c_ustr19FromVecWithNulErrorNtNtB8_u6string8ToString9to_ustringCsh9G4tFjYpDL_u8rust_uout(
        self, s.Get());
    return os << ::std::string_view(
               ::std::move(s).AssumeInitAndTakeValue().as_str());
  }

 private:
  // Field type has been replaced with a blob of bytes: Field is private
  ::std::array<unsigned char, 16> error_kind;
  // Field type has been replaced with a blob of bytes: Field is private
  ::std::array<unsigned char, 24> bytes;

 private:
  static void __crubit_field_offset_assertions();
};

//  An error indicating invalid UTF-8 when converting a [`CString`] into a
//  [`String`].
//
//  `CString` is just a wrapper over a buffer of bytes with a nul terminator;
//  [`CString::into_string`] performs UTF-8 validation on those bytes and may
//  return this error.
//
//  This `struct` is created by [`CString::into_string()`]. See
//  its documentation for more.
//
// Generated from: library/alloc/src/ffi/c_str.rs;l=224
struct CRUBIT_INTERNAL_RUST_TYPE(":: alloc :: ffi :: IntoStringError") alignas(
    8) [[clang::trivial_abi]] IntoStringError final {
 public:
  // `alloc::ffi::IntoStringError` doesn't implement the `Default` trait
  IntoStringError() = delete;

  // Drop::drop
  ~IntoStringError();

  // Clone::clone
  IntoStringError(const IntoStringError&) noexcept;

  // Clone::clone_from
  ::rs::alloc::ffi::IntoStringError& operator=(const IntoStringError&) noexcept;

  IntoStringError(::crubit::UnsafeRelocateTag, IntoStringError&& value);

  //  Consumes this error, returning original [`CString`] which generated the
  //  error.
  //
  // Generated from: library/alloc/src/ffi/c_str.rs;l=1065
  [[nodiscard("`self` will be dropped if the result is not used")]] ::rs::
      alloc::ffi::CString
      into_cstring() &&;

  //  Access the underlying UTF-8 error that was the cause of this error.
  //
  // Generated from: library/alloc/src/ffi/c_str.rs;l=1072
  [[nodiscard]] ::rs::core::str::Utf8Error utf8_error() const;

  // Generated from: library/alloc/src/ffi/c_str.rs;l=222
  bool operator==(::rs::alloc::ffi::IntoStringError const& other) const;

  // AbslStringify and std::ostream support via std::fmt::Display
  template <typename Sink, typename Str = rs::alloc::string::String>
  friend void AbslStringify(Sink& sink, const IntoStringError& self) {
    crubit::Slot<Str> s;
    __crubit_thunk_7b344df938a8cdb9__uRNvYNtNtNtCsazOrLUIp1qL_u5alloc3ffi5c_ustr15IntoStringErrorNtNtB8_u6string8ToString9to_ustringCsh9G4tFjYpDL_u8rust_uout(
        self, s.Get());
    AbslStringify(sink, ::std::move(s).AssumeInitAndTakeValue().as_str());
  }
  template <typename Str = rs::alloc::string::String>
  friend ::std::ostream& operator<<(::std::ostream& os,
                                    const IntoStringError& self) {
    crubit::Slot<Str> s;
    __crubit_thunk_7b344df938a8cdb9__uRNvYNtNtNtCsazOrLUIp1qL_u5alloc3ffi5c_ustr15IntoStringErrorNtNtB8_u6string8ToString9to_ustringCsh9G4tFjYpDL_u8rust_uout(
        self, s.Get());
    return os << ::std::string_view(
               ::std::move(s).AssumeInitAndTakeValue().as_str());
  }

 private:
  // Field type has been replaced with a blob of bytes: Field is private
  ::std::array<unsigned char, 16> inner;
  // Field type has been replaced with a blob of bytes: Field is private
  ::std::array<unsigned char, 16> error;

 private:
  static void __crubit_field_offset_assertions();
};

//  An error indicating that an interior nul byte was found.
//
//  While Rust strings may contain nul bytes in the middle, C strings
//  can't, as that byte would effectively truncate the string.
//
//  This error is created by the [`new`][`CString::new`] method on
//  [`CString`]. See its documentation for more.
//
//  # Examples
//
//  ```
//  use std::ffi::{CString, NulError};
//
//  let _: NulError = CString::new(b"f\\0oo".to_vec()).unwrap_err();
//  ```
//
// Generated from: library/alloc/src/ffi/c_str.rs;l=133
struct CRUBIT_INTERNAL_RUST_TYPE(":: alloc :: ffi :: NulError") alignas(8)
    [[clang::trivial_abi]] NulError final {
 public:
  // `alloc::ffi::NulError` doesn't implement the `Default` trait
  NulError() = delete;

  // Drop::drop
  ~NulError();

  // Clone::clone
  NulError(const NulError&) noexcept;

  // Clone::clone_from
  ::rs::alloc::ffi::NulError& operator=(const NulError&) noexcept;

  NulError(::crubit::UnsafeRelocateTag, NulError&& value);

  //  Returns the position of the nul byte in the slice that caused
  //  [`CString::new`] to fail.
  //
  //  # Examples
  //
  //  ```
  //  use std::ffi::CString;
  //
  //  let nul_error = CString::new("foo\\0bar").unwrap_err();
  //  assert_eq!(nul_error.nul_position(), 3);
  //
  //  let nul_error = CString::new("foo bar\\0").unwrap_err();
  //  assert_eq!(nul_error.nul_position(), 7);
  //  ```
  //
  // Generated from: library/alloc/src/ffi/c_str.rs;l=1017
  [[nodiscard]] ::std::uintptr_t nul_position() const;

  //  Consumes this error, returning the underlying vector of bytes which
  //  generated the error in the first place.
  //
  //  # Examples
  //
  //  ```
  //  use std::ffi::CString;
  //
  //  let nul_error = CString::new("foo\\0bar").unwrap_err();
  //  assert_eq!(nul_error.into_vec(), b"foo\\0bar");
  //  ```
  //
  // Generated from: library/alloc/src/ffi/c_str.rs;l=1034
  [[nodiscard("`self` will be dropped if the result is not used")]] rs_std::Vec<
      ::std::uint8_t>
  into_vec() &&;

  // Generated from: library/alloc/src/ffi/c_str.rs;l=131
  bool operator==(::rs::alloc::ffi::NulError const& other) const;

  // AbslStringify and std::ostream support via std::fmt::Display
  template <typename Sink, typename Str = rs::alloc::string::String>
  friend void AbslStringify(Sink& sink, const NulError& self) {
    crubit::Slot<Str> s;
    __crubit_thunk_7b344df938a8cdb9__uRNvYNtNtNtCsazOrLUIp1qL_u5alloc3ffi5c_ustr8NulErrorNtNtB8_u6string8ToString9to_ustringCsh9G4tFjYpDL_u8rust_uout(
        self, s.Get());
    AbslStringify(sink, ::std::move(s).AssumeInitAndTakeValue().as_str());
  }
  template <typename Str = rs::alloc::string::String>
  friend ::std::ostream& operator<<(::std::ostream& os, const NulError& self) {
    crubit::Slot<Str> s;
    __crubit_thunk_7b344df938a8cdb9__uRNvYNtNtNtCsazOrLUIp1qL_u5alloc3ffi5c_ustr8NulErrorNtNtB8_u6string8ToString9to_ustringCsh9G4tFjYpDL_u8rust_uout(
        self, s.Get());
    return os << ::std::string_view(
               ::std::move(s).AssumeInitAndTakeValue().as_str());
  }

 private:
  // Field type has been replaced with a blob of bytes: Field is private
  ::std::array<unsigned char, 24> __field1;
  // Field type has been replaced with a blob of bytes: Field is private
  ::std::array<unsigned char, 8> __field0;

 private:
  static void __crubit_field_offset_assertions();
};

}  // namespace rs::alloc::ffi

namespace rs::alloc::fmt {

//  Takes an [`Arguments`] struct and returns the resulting formatted string.
//
//  The [`Arguments`] instance can be created with the [`format_args!`] macro.
//
//  # Examples
//
//  Basic usage:
//
//  ```
//  use std::fmt;
//
//  let s = fmt::format(format_args!("Hello, {}!", "world"));
//  assert_eq!(s, "Hello, world!");
//  ```
//
//  Please note that using [`format!`] might be preferable.
//  Example:
//
//  ```
//  let s = format!("Hello, {}!", "world");
//  assert_eq!(s, "Hello, world!");
//  ```
//
//  [`format_args!`]: core::format_args
//  [`format!`]: crate::format
//
// Generated from: library/alloc/src/fmt.rs;l=651
[[nodiscard]] ::rs::alloc::string::String format(
    ::rs::core::fmt::Arguments args);

}  // namespace rs::alloc::fmt

namespace rs::alloc {

// Error generating bindings for macro `alloc::format` defined at
// library/alloc/src/macros.rs;l=113: Unsupported rustc_hir::hir::DefKind:
// Macro(MacroKinds(1))

}

namespace rs::alloc::rc {

// Error generating bindings for struct `alloc::rc::Rc` defined at
// library/alloc/src/rcs/rc.rs;l=325: crubit.rs/errors/unsupported_type: Generic
// types are not supported yet (b/259749095)

// Error generating bindings for struct `alloc::rc::Weak` defined at
// library/alloc/src/rcs/rc.rs;l=3356: crubit.rs/errors/unsupported_type:
// Generic types are not supported yet (b/259749095)

}  // namespace rs::alloc::rc

namespace rs::alloc::str {

// Error generating bindings for function
// `alloc::str::from_boxed_utf8_unchecked` defined at
// library/alloc/src/str.rs;l=931: Error formatting function return type
// `alloc::boxed::Box<str>`: Generic types are not supported yet (b/259749095)

}

namespace rs::alloc::string {

//  A draining iterator for `String`.
//
//  This struct is created by the [`drain`] method on [`String`]. See its
//  documentation for more.
//
//  [`drain`]: String::drain
//
// Generated from: library/alloc/src/string.rs;l=3572
struct CRUBIT_INTERNAL_RUST_TYPE(":: alloc :: string :: Drain") alignas(8)
    [[clang::trivial_abi]] Drain final {
 public:
  // `alloc::string::Drain` doesn't implement the `Default` trait
  Drain() = delete;

  // Drop::drop
  ~Drain();

  // C++ move operations are unavailable for this type. See
  // http://crubit.rs/rust/movable_types for an explanation of Rust types that
  // are C++ movable.
  Drain(Drain&&) = delete;
  ::rs::alloc::string::Drain& operator=(Drain&&) = delete;
  // `alloc::string::Drain` doesn't implement the `Clone` trait
  Drain(const Drain&) = delete;
  Drain& operator=(const Drain&) = delete;
  Drain(::crubit::UnsafeRelocateTag, Drain&& value);

  //  Returns the remaining (sub)string of this iterator as a slice.
  //
  //  # Examples
  //
  //  ```
  //  let mut s = String::from("abc");
  //  let mut drain = s.drain(..);
  //  assert_eq!(drain.as_str(), "abc");
  //  let _ = drain.next().unwrap();
  //  assert_eq!(drain.as_str(), "bc");
  //  ```
  //
  // Generated from: library/alloc/src/string.rs;l=3622
  [[nodiscard]] rs_std::StrRef as_str() const& $(__anon1) CRUBIT_LIFETIME_BOUND;

  // Error generating bindings for struct `alloc::string::Drain` defined at
  // library/alloc/src/string.rs;l=3572: alloc::string::Drain<'_> has a field
  // named `begin`, `end`, or `into_iter`, which prevents binding methods for
  // IntoIterator.

 private:
  // Field type has been replaced with a blob of bytes: Field is private
  ::std::array<unsigned char, 16> iter;
  // Field type has been replaced with a blob of bytes: Field is private
  ::std::array<unsigned char, 8> string;
  // Field type has been replaced with a blob of bytes: Field is private
  ::std::array<unsigned char, 8> start;
  // Field type has been replaced with a blob of bytes: Field is private
  ::std::array<unsigned char, 8> end;

 private:
  static void __crubit_field_offset_assertions();
};

//  A possible error value when converting a `String` from a UTF-16 byte slice.
//
//  This type is the error type for the [`from_utf16`] method on [`String`].
//
//  [`from_utf16`]: String::from_utf16
//
//  # Examples
//
//  ```
//  // 𝄞mu<invalid>ic
//  let v = &[0xD834, 0xDD1E, 0x006d, 0x0075,
//            0xD800, 0x0069, 0x0063];
//
//  assert!(String::from_utf16(v).is_err());
//  ```
//
// Generated from: library/alloc/src/string.rs;l=413
struct CRUBIT_INTERNAL_RUST_TYPE(
    ":: alloc :: string :: FromUtf16Error") alignas(1) [[clang::trivial_abi]]
FromUtf16Error final {
 public:
  // `alloc::string::FromUtf16Error` doesn't implement the `Default` trait
  FromUtf16Error() = delete;

  // No custom `Drop` impl and no custom "drop glue" required
  ~FromUtf16Error() = default;
  FromUtf16Error(FromUtf16Error&&) = default;
  FromUtf16Error& operator=(FromUtf16Error&&) = default;

  // `alloc::string::FromUtf16Error` doesn't implement the `Clone` trait
  FromUtf16Error(const FromUtf16Error&) = delete;
  FromUtf16Error& operator=(const FromUtf16Error&) = delete;
  FromUtf16Error(::crubit::UnsafeRelocateTag, FromUtf16Error&& value);

  // AbslStringify and std::ostream support via std::fmt::Display
  template <typename Sink, typename Str = rs::alloc::string::String>
  friend void AbslStringify(Sink& sink, const FromUtf16Error& self) {
    crubit::Slot<Str> s;
    __crubit_thunk_7b344df938a8cdb9__uRNvYNtNtCsazOrLUIp1qL_u5alloc6string14FromUtf16ErrorNtB4_u8ToString9to_ustringCsh9G4tFjYpDL_u8rust_uout(
        self, s.Get());
    AbslStringify(sink, ::std::move(s).AssumeInitAndTakeValue().as_str());
  }
  template <typename Str = rs::alloc::string::String>
  friend ::std::ostream& operator<<(::std::ostream& os,
                                    const FromUtf16Error& self) {
    crubit::Slot<Str> s;
    __crubit_thunk_7b344df938a8cdb9__uRNvYNtNtCsazOrLUIp1qL_u5alloc6string14FromUtf16ErrorNtB4_u8ToString9to_ustringCsh9G4tFjYpDL_u8rust_uout(
        self, s.Get());
    return os << ::std::string_view(
               ::std::move(s).AssumeInitAndTakeValue().as_str());
  }

 private:
  // Field type has been replaced with a blob of bytes: Field is private
  ::std::array<unsigned char, 1> kind;

 private:
  static void __crubit_field_offset_assertions();
};

//  A possible error value when converting a `String` from a UTF-8 byte vector.
//
//  This type is the error type for the [`from_utf8`] method on [`String`]. It
//  is designed in such a way to carefully avoid reallocations: the
//  [`into_bytes`] method will give back the byte vector that was used in the
//  conversion attempt.
//
//  [`from_utf8`]: String::from_utf8
//  [`into_bytes`]: FromUtf8Error::into_bytes
//
//  The [`Utf8Error`] type provided by [`std::str`] represents an error that may
//  occur when converting a slice of [`u8`]s to a [`&str`]. In this sense, it's
//  an analogue to `FromUtf8Error`, and you can get one from a `FromUtf8Error`
//  through the [`utf8_error`] method.
//
//  [`Utf8Error`]: str::Utf8Error "std::str::Utf8Error"
//  [`std::str`]: core::str "std::str"
//  [`&str`]: prim@str "&str"
//  [`utf8_error`]: FromUtf8Error::utf8_error
//
//  # Examples
//
//  ```
//  // some invalid bytes, in a vector
//  let bytes = vec![0, 159];
//
//  let value = String::from_utf8(bytes);
//
//  assert!(value.is_err());
//  assert_eq!(vec![0, 159], value.unwrap_err().into_bytes());
//  ```
//
// Generated from: library/alloc/src/string.rs;l=391
struct CRUBIT_INTERNAL_RUST_TYPE(":: alloc :: string :: FromUtf8Error") alignas(
    8) [[clang::trivial_abi]] FromUtf8Error final {
 public:
  // `alloc::string::FromUtf8Error` doesn't implement the `Default` trait
  FromUtf8Error() = delete;

  // Drop::drop
  ~FromUtf8Error();

  // Clone::clone
  FromUtf8Error(const FromUtf8Error&) noexcept;

  // Clone::clone_from
  ::rs::alloc::string::FromUtf8Error& operator=(const FromUtf8Error&) noexcept;

  FromUtf8Error(::crubit::UnsafeRelocateTag, FromUtf8Error&& value);

  //  Returns a slice of [`u8`]s bytes that were attempted to convert to a
  //  `String`.
  //
  //  # Examples
  //
  //  ```
  //  // some invalid bytes, in a vector
  //  let bytes = vec![0, 159];
  //
  //  let value = String::from_utf8(bytes);
  //
  //  assert_eq!(&[0, 159], value.unwrap_err().as_bytes());
  //  ```
  //
  // Generated from: library/alloc/src/string.rs;l=2288
  [[nodiscard]] rs_std::SliceRef<const ::std::uint8_t> as_bytes() const& $(
      __anon1) CRUBIT_LIFETIME_BOUND;

  //  Converts the bytes into a `String` lossily, substituting invalid UTF-8
  //  sequences with replacement characters.
  //
  //  See [`String::from_utf8_lossy`] for more details on replacement of
  //  invalid sequences, and [`String::from_utf8_lossy_owned`] for the
  //  `String` function which corresponds to this function.
  //
  //  This is useful in conjunction with [`String::from_utf8`] when you need
  //  to branch on whether the bytes are valid UTF-8, but still want to
  //  recover a lossily converted `String` in the error case. Use
  //  [`String::from_utf8_lossy_owned`] if you always need a lossily converted
  //  `String`.
  //
  //  Since the original [`String::from_utf8`] error records where validation
  //  stopped, this method does not need to re-check the already valid prefix
  //  of the byte sequence.
  //
  //  # Examples
  //
  //  ```
  //  // some invalid bytes
  //  let input: Vec<u8> = b"Hello \\xF0\\x90\\x80World".into();
  //
  //  let (output, had_invalid_utf8) = match String::from_utf8(input) {
  //      Ok(output) => (output, false),
  //      Err(error) => {
  //          // The bytes were not valid UTF-8, but we can still recover a
  //          string. (error.into_utf8_lossy(), true)
  //      }
  //  };
  //
  //  assert_eq!(String::from("Hello �World"), output);
  //  assert!(had_invalid_utf8);
  //  ```
  //
  // Generated from: library/alloc/src/string.rs;l=2329
  [[nodiscard]] ::rs::alloc::string::String into_utf8_lossy() &&;

  //  Returns the bytes that were attempted to convert to a `String`.
  //
  //  This method is carefully constructed to avoid allocation. It will
  //  consume the error, moving out the bytes, so that a copy of the bytes
  //  does not need to be made.
  //
  //  # Examples
  //
  //  ```
  //  // some invalid bytes, in a vector
  //  let bytes = vec![0, 159];
  //
  //  let value = String::from_utf8(bytes);
  //
  //  assert_eq!(vec![0, 159], value.unwrap_err().into_bytes());
  //  ```
  //
  // Generated from: library/alloc/src/string.rs;l=2375
  [[nodiscard("`self` will be dropped if the result is not used")]] rs_std::Vec<
      ::std::uint8_t>
  into_bytes() &&;

  //  Fetch a `Utf8Error` to get more details about the conversion failure.
  //
  //  The [`Utf8Error`] type provided by [`std::str`] represents an error that
  //  may occur when converting a slice of [`u8`]s to a [`&str`]. In this sense,
  //  it's an analogue to `FromUtf8Error`. See its documentation for more
  //  details on using it.
  //
  //  [`std::str`]: core::str "std::str"
  //  [`&str`]: prim@str "&str"
  //
  //  # Examples
  //
  //  ```
  //  // some invalid bytes, in a vector
  //  let bytes = vec![0, 159];
  //
  //  let error = String::from_utf8(bytes).unwrap_err().utf8_error();
  //
  //  // the first byte is invalid here
  //  assert_eq!(1, error.valid_up_to());
  //  ```
  //
  // Generated from: library/alloc/src/string.rs;l=2402
  [[nodiscard]] ::rs::core::str::Utf8Error utf8_error() const;

  // Generated from: library/alloc/src/string.rs;l=390
  bool operator==(::rs::alloc::string::FromUtf8Error const& other) const;

  // AbslStringify and std::ostream support via std::fmt::Display
  template <typename Sink, typename Str = rs::alloc::string::String>
  friend void AbslStringify(Sink& sink, const FromUtf8Error& self) {
    crubit::Slot<Str> s;
    __crubit_thunk_7b344df938a8cdb9__uRNvYNtNtCsazOrLUIp1qL_u5alloc6string13FromUtf8ErrorNtB4_u8ToString9to_ustringCsh9G4tFjYpDL_u8rust_uout(
        self, s.Get());
    AbslStringify(sink, ::std::move(s).AssumeInitAndTakeValue().as_str());
  }
  template <typename Str = rs::alloc::string::String>
  friend ::std::ostream& operator<<(::std::ostream& os,
                                    const FromUtf8Error& self) {
    crubit::Slot<Str> s;
    __crubit_thunk_7b344df938a8cdb9__uRNvYNtNtCsazOrLUIp1qL_u5alloc6string13FromUtf8ErrorNtB4_u8ToString9to_ustringCsh9G4tFjYpDL_u8rust_uout(
        self, s.Get());
    return os << ::std::string_view(
               ::std::move(s).AssumeInitAndTakeValue().as_str());
  }

 private:
  // Field type has been replaced with a blob of bytes: Field is private
  ::std::array<unsigned char, 24> bytes;
  // Field type has been replaced with a blob of bytes: Field is private
  ::std::array<unsigned char, 16> error;

 private:
  static void __crubit_field_offset_assertions();
};

// Error generating bindings for type alias `alloc::string::ParseError` defined
// at library/alloc/src/string.rs;l=2925: The never type `!` is only supported
// as a return type (b/254507801)

//  A UTF-8–encoded, growable string.
//
//  `String` is the most common string type. It has ownership over the contents
//  of the string, stored in a heap-allocated buffer (see
//  [Representation](#representation)). It is closely related to its borrowed
//  counterpart, the primitive [`str`].
//
//  # Examples
//
//  You can create a `String` from [a literal string][`&str`] with
//  [`String::from`]:
//
//  [`String::from`]: From::from
//
//  ```
//  let hello = String::from("Hello, world!");
//  ```
//
//  You can append a [`char`] to a `String` with the [`push`] method, and
//  append a [`&str`] with the [`push_str`] method:
//
//  ```
//  let mut hello = String::from("Hello, ");
//
//  hello.push('w');
//  hello.push_str("orld!");
//  ```
//
//  [`push`]: String::push
//  [`push_str`]: String::push_str
//
//  If you have a vector of UTF-8 bytes, you can create a `String` from it with
//  the [`from_utf8`] method:
//
//  ```
//  // some bytes, in a vector
//  let sparkle_heart = vec![240, 159, 146, 150];
//
//  // We know these bytes are valid, so we'll use `unwrap()`.
//  let sparkle_heart = String::from_utf8(sparkle_heart).unwrap();
//
//  assert_eq!("💖", sparkle_heart);
//  ```
//
//  [`from_utf8`]: String::from_utf8
//
//  # UTF-8
//
//  `String`s are always valid UTF-8. If you need a non-UTF-8 string, consider
//  [`OsString`]. It is similar, but without the UTF-8 constraint. Because UTF-8
//  is a variable width encoding, `String`s are typically smaller than an array
//  of the same `char`s:
//
//  ```
//  // `s` is ASCII which represents each `char` as one byte
//  let s = "hello";
//  assert_eq!(s.len(), 5);
//
//  // A `char` array with the same contents would be longer because
//  // every `char` is four bytes
//  let s = ['h', 'e', 'l', 'l', 'o'];
//  let size: usize = s.into_iter().map(|c| size_of_val(&c)).sum();
//  assert_eq!(size, 20);
//
//  // However, for non-ASCII strings, the difference will be smaller
//  // and sometimes they are the same
//  let s = "💖💖💖💖💖";
//  assert_eq!(s.len(), 20);
//
//  let s = ['💖', '💖', '💖', '💖', '💖'];
//  let size: usize = s.into_iter().map(|c| size_of_val(&c)).sum();
//  assert_eq!(size, 20);
//  ```
//
//  This raises interesting questions as to how `s[i]` should work.
//  What should `i` be here? Several options include byte indices and
//  `char` indices but, because of UTF-8 encoding, only byte indices
//  would provide constant time indexing. Getting the `i`th `char`, for
//  example, is available using [`chars`]:
//
//  ```
//  let s = "hello";
//  let third_character = s.chars().nth(2);
//  assert_eq!(third_character, Some('l'));
//
//  let s = "💖💖💖💖💖";
//  let third_character = s.chars().nth(2);
//  assert_eq!(third_character, Some('💖'));
//  ```
//
//  Next, what should `s[i]` return? Because indexing returns a reference
//  to underlying data it could be `&u8`, `&[u8]`, or something similar.
//  Since we're only providing one index, `&u8` makes the most sense but that
//  might not be what the user expects and can be explicitly achieved with
//  [`as_bytes()`]:
//
//  ```
//  // The first byte is 104 - the byte value of `'h'`
//  let s = "hello";
//  assert_eq!(s.as_bytes()[0], 104);
//  // or
//  assert_eq!(s.as_bytes()[0], b'h');
//
//  // The first byte is 240 which isn't obviously useful
//  let s = "💖💖💖💖💖";
//  assert_eq!(s.as_bytes()[0], 240);
//  ```
//
//  Due to these ambiguities/restrictions, indexing with a `usize` is simply
//  forbidden:
//
//  ```compile_fail,E0277
//  let s = "hello";
//
//  // The following will not compile!
//  println!("The first letter of s is {}", s[0]);
//  ```
//
//  It is more clear, however, how `&s[i..j]` should work (that is,
//  indexing with a range). It should accept byte indices (to be constant-time)
//  and return a `&str` which is UTF-8 encoded. This is also called "string
//  slicing". Note this will panic if the byte indices provided are not
//  character boundaries - see [`is_char_boundary`] for more details. See the
//  implementations for [`SliceIndex<str>`] for more details on string slicing.
//  For a non-panicking version of string slicing, see [`get`].
//
//  [`OsString`]: ../../std/ffi/struct.OsString.html "ffi::OsString"
//  [`SliceIndex<str>`]: core::slice::SliceIndex
//  [`as_bytes()`]: str::as_bytes
//  [`get`]: str::get
//  [`is_char_boundary`]: str::is_char_boundary
//
//  The [`bytes`] and [`chars`] methods return iterators over the bytes and
//  codepoints of the string, respectively. To iterate over codepoints along
//  with byte indices, use [`char_indices`].
//
//  [`bytes`]: str::bytes
//  [`chars`]: str::chars
//  [`char_indices`]: str::char_indices
//
//  # Deref
//
//  `String` implements <code>[Deref]<Target = [str]></code>, and so inherits
//  all of [`str`]'s methods. In addition, this means that you can pass a
//  `String` to a function which takes a [`&str`] by using an ampersand (`&`):
//
//  ```
//  fn takes_str(s: &str) { }
//
//  let s = String::from("Hello");
//
//  takes_str(&s);
//  ```
//
//  This will create a [`&str`] from the `String` and pass it in. This
//  conversion is very inexpensive, and so generally, functions will accept
//  [`&str`]s as arguments unless they need a `String` for some specific
//  reason.
//
//  In certain cases Rust doesn't have enough information to make this
//  conversion, known as [`Deref`] coercion. In the following example a string
//  slice [`&'a str`][`&str`] implements the trait `TraitExample`, and the
//  function `example_func` takes anything that implements the trait. In this
//  case Rust would need to make two implicit conversions, which Rust doesn't
//  have the means to do. For that reason, the following example will not
//  compile.
//
//  ```compile_fail,E0277
//  trait TraitExample {}
//
//  impl<'a> TraitExample for &'a str {}
//
//  fn example_func<A: TraitExample>(example_arg: A) {}
//
//  let example_string = String::from("example_string");
//  example_func(&example_string);
//  ```
//
//  There are two options that would work instead. The first would be to
//  change the line `example_func(&example_string);` to
//  `example_func(example_string.as_str());`, using the method [`as_str()`]
//  to explicitly extract the string slice containing the string. The second
//  way changes `example_func(&example_string);` to
//  `example_func(&*example_string);`. In this case we are dereferencing a
//  `String` to a [`str`], then referencing the [`str`] back to
//  [`&str`]. The second way is more idiomatic, however both work to do the
//  conversion explicitly rather than relying on the implicit conversion.
//
//  # Representation
//
//  A `String` is made up of three components: a pointer to some bytes, a
//  length, and a capacity. The pointer points to the internal buffer which
//  `String` uses to store its data. The length is the number of bytes currently
//  stored in the buffer, and the capacity is the size of the buffer in bytes.
//  As such, the length will always be less than or equal to the capacity.
//
//  This buffer is always stored on the heap.
//
//  You can look at these with the [`as_ptr`], [`len`], and [`capacity`]
//  methods:
//
//  ```
//  let story = String::from("Once upon a time...");
//
//  // Deconstruct the String into parts.
//  let (ptr, len, capacity) = story.into_raw_parts();
//
//  // story has nineteen bytes
//  assert_eq!(19, len);
//
//  // We can re-build a String out of ptr, len, and capacity. This is all
//  // unsafe because we are responsible for making sure the components are
//  // valid:
//  let s = unsafe { String::from_raw_parts(ptr, len, capacity) } ;
//
//  assert_eq!(String::from("Once upon a time..."), s);
//  ```
//
//  [`as_ptr`]: str::as_ptr
//  [`len`]: String::len
//  [`capacity`]: String::capacity
//
//  If a `String` has enough capacity, adding elements to it will not
//  re-allocate. For example, consider this program:
//
//  ```
//  let mut s = String::new();
//
//  println!("{}", s.capacity());
//
//  for _ in 0..5 {
//      s.push_str("hello");
//      println!("{}", s.capacity());
//  }
//  ```
//
//  This will output the following:
//
//  ```text
//  0
//  8
//  16
//  16
//  32
//  32
//  ```
//
//  At first, we have no memory allocated at all, but as we append to the
//  string, it increases its capacity appropriately. If we instead use the
//  [`with_capacity`] method to allocate the correct capacity initially:
//
//  ```
//  let mut s = String::with_capacity(25);
//
//  println!("{}", s.capacity());
//
//  for _ in 0..5 {
//      s.push_str("hello");
//      println!("{}", s.capacity());
//  }
//  ```
//
//  [`with_capacity`]: String::with_capacity
//
//  We end up with a different output:
//
//  ```text
//  25
//  25
//  25
//  25
//  25
//  25
//  ```
//
//  Here, there's no need to allocate more memory inside the loop.
//
//  [str]: prim@str "str"
//  [`str`]: prim@str "str"
//  [`&str`]: prim@str "&str"
//  [Deref]: core::ops::Deref "ops::Deref"
//  [`Deref`]: core::ops::Deref "ops::Deref"
//  [`as_str()`]: String::as_str
//
// Generated from: library/alloc/src/string.rs;l=353
struct CRUBIT_INTERNAL_RUST_TYPE(":: alloc :: string :: String") alignas(8)
    [[clang::trivial_abi]] String final {
 public:
  // Default::default
  String();

  // Drop::drop
  ~String();

  String(String&&) noexcept;
  ::rs::alloc::string::String& operator=(String&&) noexcept;

  // Clone::clone
  String(const String&) noexcept;

  // Clone::clone_from
  ::rs::alloc::string::String& operator=(const String&) noexcept;

  String(::crubit::UnsafeRelocateTag, String&& value);

  //  Creates a new empty `String`.
  //
  //  Given that the `String` is empty, this will not allocate any initial
  //  buffer. While that means that this initial operation is very
  //  inexpensive, it may cause excessive allocation later when you add
  //  data. If you have an idea of how much data the `String` will hold,
  //  consider the [`with_capacity`] method to prevent excessive
  //  re-allocation.
  //
  //  [`with_capacity`]: String::with_capacity
  //
  //  # Examples
  //
  //  ```
  //  let s = String::new();
  //  ```
  //
  // Generated from: library/alloc/src/string.rs;l=446
  [[nodiscard]] static ::rs::alloc::string::String new_();

  //  Creates a new empty `String` with at least the specified capacity.
  //
  //  `String`s have an internal buffer to hold their data. The capacity is
  //  the length of that buffer, and can be queried with the [`capacity`]
  //  method. This method creates an empty `String`, but one with an initial
  //  buffer that can hold at least `capacity` bytes. This is useful when you
  //  may be appending a bunch of data to the `String`, reducing the number of
  //  reallocations it needs to do.
  //
  //  [`capacity`]: String::capacity
  //
  //  If the given capacity is `0`, no allocation will occur, and this method
  //  is identical to the [`new`] method.
  //
  //  [`new`]: String::new
  //
  //  # Panics
  //
  //  Panics if the capacity exceeds `isize::MAX` _bytes_.
  //
  //  # Examples
  //
  //  ```
  //  let mut s = String::with_capacity(10);
  //
  //  // The String contains no chars, even though it has capacity for more
  //  assert_eq!(s.len(), 0);
  //
  //  // These are all done without reallocating...
  //  let cap = s.capacity();
  //  for _ in 0..10 {
  //      s.push('a');
  //  }
  //
  //  assert_eq!(s.capacity(), cap);
  //
  //  // ...but this may make the string reallocate
  //  s.push('a');
  //  ```
  //
  // Generated from: library/alloc/src/string.rs;l=493
  [[nodiscard]] static ::rs::alloc::string::String with_capacity(
      ::std::uintptr_t capacity);

  //  Converts a vector of bytes to a `String`.
  //
  //  A string ([`String`]) is made of bytes ([`u8`]), and a vector of bytes
  //  ([`Vec<u8>`]) is made of bytes, so this function converts between the
  //  two. Not all byte slices are valid `String`s, however: `String`
  //  requires that it is valid UTF-8. `from_utf8()` checks to ensure that
  //  the bytes are valid UTF-8, and then does the conversion.
  //
  //  If you are sure that the byte slice is valid UTF-8, and you don't want
  //  to incur the overhead of the validity check, there is an unsafe version
  //  of this function, [`from_utf8_unchecked`], which has the same behavior
  //  but skips the check.
  //
  //  This method will take care to not copy the vector, for efficiency's
  //  sake.
  //
  //  If you need a [`&str`] instead of a `String`, consider
  //  [`str::from_utf8`].
  //
  //  The inverse of this method is [`into_bytes`].
  //
  //  # Errors
  //
  //  Returns [`Err`] if the slice is not UTF-8 with a description as to why the
  //  provided bytes are not UTF-8. The vector you moved in is also included.
  //
  //  # Examples
  //
  //  Basic usage:
  //
  //  ```
  //  // some bytes, in a vector
  //  let sparkle_heart = vec![240, 159, 146, 150];
  //
  //  // We know these bytes are valid, so we'll use `unwrap()`.
  //  let sparkle_heart = String::from_utf8(sparkle_heart).unwrap();
  //
  //  assert_eq!("💖", sparkle_heart);
  //  ```
  //
  //  Incorrect bytes:
  //
  //  ```
  //  // some invalid bytes, in a vector
  //  let sparkle_heart = vec![0, 159, 146, 150];
  //
  //  assert!(String::from_utf8(sparkle_heart).is_err());
  //  ```
  //
  //  See the docs for [`FromUtf8Error`] for more details on what you can do
  //  with this error.
  //
  //  [`from_utf8_unchecked`]: String::from_utf8_unchecked
  //  [`Vec<u8>`]: crate::vec::Vec "Vec"
  //  [`&str`]: prim@str "&str"
  //  [`into_bytes`]: String::into_bytes
  //
  // Generated from: library/alloc/src/string.rs;l=569
  static rs_std::Result<::rs::alloc::string::String,
                        ::rs::alloc::string::FromUtf8Error>
  from_utf8(rs_std::Vec<::std::uint8_t> vec);

  // Error generating bindings for associated function
  // `alloc::string::String::from_utf8_lossy` defined at
  // library/alloc/src/string.rs;l=628: Error formatting function return type
  // `alloc::borrow::Cow<'__anon1, str>`: Generic types are not supported yet
  // (b/259749095)

  //  Converts a [`Vec<u8>`] to a `String`, substituting invalid UTF-8
  //  sequences with replacement characters.
  //
  //  See [`from_utf8_lossy`] for more details.
  //
  //  [`from_utf8_lossy`]: String::from_utf8_lossy
  //
  //  Note that this function does not guarantee reuse of the original `Vec`
  //  allocation.
  //
  //  # Examples
  //
  //  Basic usage:
  //
  //  ```
  //  // some bytes, in a vector
  //  let sparkle_heart = vec![240, 159, 146, 150];
  //
  //  let sparkle_heart = String::from_utf8_lossy_owned(sparkle_heart);
  //
  //  assert_eq!(String::from("💖"), sparkle_heart);
  //  ```
  //
  //  Incorrect bytes:
  //
  //  ```
  //  // some invalid bytes
  //  let input: Vec<u8> = b"Hello \\xF0\\x90\\x80World".into();
  //  let output = String::from_utf8_lossy_owned(input);
  //
  //  assert_eq!(String::from("Hello �World"), output);
  //  ```
  //
  // Generated from: library/alloc/src/string.rs;l=691
  [[nodiscard]] static ::rs::alloc::string::String from_utf8_lossy_owned(
      rs_std::Vec<::std::uint8_t> v);

  //  Decode a native endian UTF-16–encoded vector `v` into a `String`,
  //  returning [`Err`] if `v` contains any invalid data.
  //
  //  # Examples
  //
  //  ```
  //  // 𝄞music
  //  let v = &[0xD834, 0xDD1E, 0x006d, 0x0075,
  //            0x0073, 0x0069, 0x0063];
  //  assert_eq!(String::from("𝄞music"),
  //             String::from_utf16(v).unwrap());
  //
  //  // 𝄞mu<invalid>ic
  //  let v = &[0xD834, 0xDD1E, 0x006d, 0x0075,
  //            0xD800, 0x0069, 0x0063];
  //  assert!(String::from_utf16(v).is_err());
  //  ```
  //
  // Generated from: library/alloc/src/string.rs;l=723
  static rs_std::Result<::rs::alloc::string::String,
                        ::rs::alloc::string::FromUtf16Error>
  from_utf16(rs_std::SliceRef<const ::std::uint16_t> v);

  //  Decode a native endian UTF-16–encoded slice `v` into a `String`,
  //  replacing invalid data with [the replacement character
  //  (`U+FFFD`)][U+FFFD].
  //
  //  Unlike [`from_utf8_lossy`] which returns a [`Cow<'a, str>`],
  //  `from_utf16_lossy` returns a `String` since the UTF-16 to UTF-8
  //  conversion requires a memory allocation.
  //
  //  [`from_utf8_lossy`]: String::from_utf8_lossy
  //  [`Cow<'a, str>`]: crate::borrow::Cow "borrow::Cow"
  //  [U+FFFD]: char::REPLACEMENT_CHARACTER
  //
  //  # Examples
  //
  //  ```
  //  // 𝄞mus<invalid>ic<invalid>
  //  let v = &[0xD834, 0xDD1E, 0x006d, 0x0075,
  //            0x0073, 0xDD1E, 0x0069, 0x0063,
  //            0xD834];
  //
  //  assert_eq!(String::from("𝄞mus\\u{FFFD}ic\\u{FFFD}"),
  //             String::from_utf16_lossy(v));
  //  ```
  //
  // Generated from: library/alloc/src/string.rs;l=774
  [[nodiscard]] static ::rs::alloc::string::String from_utf16_lossy(
      rs_std::SliceRef<const ::std::uint16_t> v);

  //  Decode a UTF-16LE–encoded vector `v` into a `String`,
  //  returning [`Err`] if `v` contains any invalid data.
  //
  //  # Examples
  //
  //  Basic usage:
  //
  //  ```
  //  // 𝄞music
  //  let v = &[0x34, 0xD8, 0x1E, 0xDD, 0x6d, 0x00, 0x75, 0x00,
  //            0x73, 0x00, 0x69, 0x00, 0x63, 0x00];
  //  assert_eq!(String::from("𝄞music"),
  //             String::from_utf16le(v).unwrap());
  //
  //  // 𝄞mu<invalid>ic
  //  let v = &[0x34, 0xD8, 0x1E, 0xDD, 0x6d, 0x00, 0x75, 0x00,
  //            0x00, 0xD8, 0x69, 0x00, 0x63, 0x00];
  //  assert!(String::from_utf16le(v).is_err());
  //  ```
  //
  // Generated from: library/alloc/src/string.rs;l=801
  static rs_std::Result<::rs::alloc::string::String,
                        ::rs::alloc::string::FromUtf16Error>
  from_utf16le(rs_std::SliceRef<const ::std::uint8_t> v);

  //  Decode a UTF-16LE–encoded slice `v` into a `String`, replacing
  //  invalid data with [the replacement character (`U+FFFD`)][U+FFFD].
  //
  //  Unlike [`from_utf8_lossy`] which returns a [`Cow<'a, str>`],
  //  `from_utf16le_lossy` returns a `String` since the UTF-16 to UTF-8
  //  conversion requires a memory allocation.
  //
  //  [`from_utf8_lossy`]: String::from_utf8_lossy
  //  [`Cow<'a, str>`]: crate::borrow::Cow "borrow::Cow"
  //  [U+FFFD]: char::REPLACEMENT_CHARACTER
  //
  //  # Examples
  //
  //  Basic usage:
  //
  //  ```
  //  // 𝄞mus<invalid>ic<invalid>
  //  let v = &[0x34, 0xD8, 0x1E, 0xDD, 0x6d, 0x00, 0x75, 0x00,
  //            0x73, 0x00, 0x1E, 0xDD, 0x69, 0x00, 0x63, 0x00,
  //            0x34, 0xD8];
  //
  //  assert_eq!(String::from("𝄞mus\\u{FFFD}ic\\u{FFFD}"),
  //             String::from_utf16le_lossy(v));
  //  ```
  //
  // Generated from: library/alloc/src/string.rs;l=840
  static ::rs::alloc::string::String from_utf16le_lossy(
      rs_std::SliceRef<const ::std::uint8_t> v);

  //  Decode a UTF-16BE–encoded vector `v` into a `String`,
  //  returning [`Err`] if `v` contains any invalid data.
  //
  //  # Examples
  //
  //  Basic usage:
  //
  //  ```
  //  // 𝄞music
  //  let v = &[0xD8, 0x34, 0xDD, 0x1E, 0x00, 0x6d, 0x00, 0x75,
  //            0x00, 0x73, 0x00, 0x69, 0x00, 0x63];
  //  assert_eq!(String::from("𝄞music"),
  //             String::from_utf16be(v).unwrap());
  //
  //  // 𝄞mu<invalid>ic
  //  let v = &[0xD8, 0x34, 0xDD, 0x1E, 0x00, 0x6d, 0x00, 0x75,
  //            0xD8, 0x00, 0x00, 0x69, 0x00, 0x63];
  //  assert!(String::from_utf16be(v).is_err());
  //  ```
  //
  // Generated from: library/alloc/src/string.rs;l=876
  static rs_std::Result<::rs::alloc::string::String,
                        ::rs::alloc::string::FromUtf16Error>
  from_utf16be(rs_std::SliceRef<const ::std::uint8_t> v);

  //  Decode a UTF-16BE–encoded slice `v` into a `String`, replacing
  //  invalid data with [the replacement character (`U+FFFD`)][U+FFFD].
  //
  //  Unlike [`from_utf8_lossy`] which returns a [`Cow<'a, str>`],
  //  `from_utf16le_lossy` returns a `String` since the UTF-16 to UTF-8
  //  conversion requires a memory allocation.
  //
  //  [`from_utf8_lossy`]: String::from_utf8_lossy
  //  [`Cow<'a, str>`]: crate::borrow::Cow "borrow::Cow"
  //  [U+FFFD]: char::REPLACEMENT_CHARACTER
  //
  //  # Examples
  //
  //  Basic usage:
  //
  //  ```
  //  // 𝄞mus<invalid>ic<invalid>
  //  let v = &[0xD8, 0x34, 0xDD, 0x1E, 0x00, 0x6d, 0x00, 0x75,
  //            0x00, 0x73, 0xDD, 0x1E, 0x00, 0x69, 0x00, 0x63,
  //            0xD8, 0x34];
  //
  //  assert_eq!(String::from("𝄞mus\\u{FFFD}ic\\u{FFFD}"),
  //             String::from_utf16be_lossy(v));
  //  ```
  //
  // Generated from: library/alloc/src/string.rs;l=915
  static ::rs::alloc::string::String from_utf16be_lossy(
      rs_std::SliceRef<const ::std::uint8_t> v);

  //  Decomposes a `String` into its raw components: `(pointer, length,
  //  capacity)`.
  //
  //  Returns the raw pointer to the underlying data, the length of
  //  the string (in bytes), and the allocated capacity of the data
  //  (in bytes). These are the same arguments in the same order as
  //  the arguments to [`from_raw_parts`].
  //
  //  After calling this function, the caller is responsible for the
  //  memory previously managed by the `String`. The only way to do
  //  this is to convert the raw pointer, length, and capacity back
  //  into a `String` with the [`from_raw_parts`] function, allowing
  //  the destructor to perform the cleanup.
  //
  //  If `capacity == 0`, then `pointer` may be dangling. Otherwise,
  //  it will always be valid for reads and writes over `capacity`
  //  bytes, and point to the start of the string.
  //
  //  [`from_raw_parts`]: String::from_raw_parts
  //
  //  # Examples
  //
  //  ```
  //  let s = String::from("hello");
  //
  //  let (ptr, len, cap) = s.into_raw_parts();
  //
  //  let rebuilt = unsafe { String::from_raw_parts(ptr, len, cap) };
  //  assert_eq!(rebuilt, "hello");
  //  ```
  //
  // Generated from: library/alloc/src/string.rs;l=962
  [[nodiscard("losing the pointer will leak memory")]] ::std::tuple<
      ::std::uint8_t*, ::std::uintptr_t, ::std::uintptr_t>
  into_raw_parts() &&;

  //  Creates a new `String` from a pointer, a length and a capacity.
  //
  //  # Safety
  //
  //  This is highly unsafe, due to the number of invariants that aren't
  //  checked:
  //
  //  * all safety requirements for [`Vec::<u8>::from_raw_parts`].
  //  * all safety requirements for [`String::from_utf8_unchecked`].
  //
  //  Violating these may cause problems like corrupting the allocator's
  //  internal data structures. For example, it is normally **not** safe to
  //  build a `String` from a pointer to a C `char` array containing UTF-8
  //  _unless_ you are certain that array was originally allocated by the
  //  Rust standard library's allocator.
  //
  //  The ownership of `buf` is effectively transferred to the
  //  `String` which may then deallocate, reallocate or change the
  //  contents of memory pointed to by the pointer at will. Ensure
  //  that nothing else uses the pointer after calling this
  //  function.
  //
  //  # Examples
  //
  //  ```
  //  unsafe {
  //      let s = String::from("hello");
  //
  //      // Deconstruct the String into parts.
  //      let (ptr, len, capacity) = s.into_raw_parts();
  //
  //      let s = String::from_raw_parts(ptr, len, capacity);
  //
  //      assert_eq!(String::from("hello"), s);
  //  }
  //  ```
  //
  // Generated from: library/alloc/src/string.rs;l=1004
  static ::rs::alloc::string::String from_raw_parts(::std::uint8_t* buf,
                                                    ::std::uintptr_t length,
                                                    ::std::uintptr_t capacity);

  //  Converts a vector of bytes to a `String` without checking that the
  //  string contains valid UTF-8.
  //
  //  See the safe version, [`from_utf8`], for more details.
  //
  //  [`from_utf8`]: String::from_utf8
  //
  //  # Safety
  //
  //  This function is unsafe because it does not check that the bytes passed
  //  to it are valid UTF-8. If this constraint is violated, it may cause
  //  memory unsafety issues with future users of the `String`, as the rest of
  //  the standard library assumes that `String`s are valid UTF-8.
  //
  //  # Examples
  //
  //  ```
  //  // some bytes, in a vector
  //  let sparkle_heart = vec![240, 159, 146, 150];
  //
  //  let sparkle_heart = unsafe {
  //      String::from_utf8_unchecked(sparkle_heart)
  //  };
  //
  //  assert_eq!("💖", sparkle_heart);
  //  ```
  //
  // Generated from: library/alloc/src/string.rs;l=1038
  [[nodiscard]] static ::rs::alloc::string::String from_utf8_unchecked(
      rs_std::Vec<::std::uint8_t> bytes);

  //  Converts a `String` into a byte vector.
  //
  //  This consumes the `String`, so we do not need to copy its contents.
  //
  //  # Examples
  //
  //  ```
  //  let s = String::from("hello");
  //  let bytes = s.into_bytes();
  //
  //  assert_eq!(&[104, 101, 108, 108, 111][..], &bytes[..]);
  //  ```
  //
  // Generated from: library/alloc/src/string.rs;l=1059
  [[nodiscard("`self` will be dropped if the result is not used")]] rs_std::Vec<
      ::std::uint8_t>
  into_bytes() &&;

  //  Extracts a string slice containing the entire `String`.
  //
  //  # Examples
  //
  //  ```
  //  let s = String::from("foo");
  //
  //  assert_eq!("foo", s.as_str());
  //  ```
  //
  // Generated from: library/alloc/src/string.rs;l=1077
  [[nodiscard]] rs_std::StrRef as_str() const& $(__anon1) CRUBIT_LIFETIME_BOUND;

  // Error generating bindings for associated function
  // `alloc::string::String::as_mut_str` defined at
  // library/alloc/src/string.rs;l=1100: Error formatting function return type
  // `&'__anon1 mut str`: Mutable references to `str` are not yet supported.

  //  Appends a given string slice onto the end of this `String`.
  //
  //  # Panics
  //
  //  Panics if the new capacity exceeds `isize::MAX` _bytes_.
  //
  //  # Examples
  //
  //  ```
  //  let mut s = String::from("foo");
  //
  //  s.push_str("bar");
  //
  //  assert_eq!("foobar", s);
  //  ```
  //
  // Generated from: library/alloc/src/string.rs;l=1126
  void push_str(rs_std::StrRef string);

  // Error generating bindings for associated function
  // `alloc::string::String::extend_from_within` defined at
  // library/alloc/src/string.rs;l=1187: No valid non-generic replacement for
  // generic type param `R`

  //  Returns this `String`'s capacity, in bytes.
  //
  //  # Examples
  //
  //  ```
  //  let s = String::with_capacity(10);
  //
  //  assert!(s.capacity() >= 10);
  //  ```
  //
  // Generated from: library/alloc/src/string.rs;l=1212
  [[nodiscard]] ::std::uintptr_t capacity() const;

  //  Reserves capacity for at least `additional` bytes more than the
  //  current length. The allocator may reserve more space to speculatively
  //  avoid frequent allocations. After calling `reserve`,
  //  capacity will be greater than or equal to `self.len() + additional`.
  //  Does nothing if capacity is already sufficient.
  //
  //  # Panics
  //
  //  Panics if the new capacity exceeds `isize::MAX` _bytes_.
  //
  //  # Examples
  //
  //  Basic usage:
  //
  //  ```
  //  let mut s = String::new();
  //
  //  s.reserve(10);
  //
  //  assert!(s.capacity() >= 10);
  //  ```
  //
  //  This might not actually increase the capacity:
  //
  //  ```
  //  let mut s = String::with_capacity(10);
  //  s.push('a');
  //  s.push('b');
  //
  //  // s now has a length of 2 and a capacity of at least 10
  //  let capacity = s.capacity();
  //  assert_eq!(2, s.len());
  //  assert!(capacity >= 10);
  //
  //  // Since we already have at least an extra 8 capacity, calling this...
  //  s.reserve(8);
  //
  //  // ... doesn't actually increase.
  //  assert_eq!(capacity, s.capacity());
  //  ```
  //
  // Generated from: library/alloc/src/string.rs;l=1259
  void reserve(::std::uintptr_t additional);

  //  Reserves the minimum capacity for at least `additional` bytes more than
  //  the current length. Unlike [`reserve`], this will not
  //  deliberately over-allocate to speculatively avoid frequent allocations.
  //  After calling `reserve_exact`, capacity will be greater than or equal to
  //  `self.len() + additional`. Does nothing if the capacity is already
  //  sufficient.
  //
  //  [`reserve`]: String::reserve
  //
  //  # Panics
  //
  //  Panics if the new capacity exceeds `isize::MAX` _bytes_.
  //
  //  # Examples
  //
  //  Basic usage:
  //
  //  ```
  //  let mut s = String::new();
  //
  //  s.reserve_exact(10);
  //
  //  assert!(s.capacity() >= 10);
  //  ```
  //
  //  This might not actually increase the capacity:
  //
  //  ```
  //  let mut s = String::with_capacity(10);
  //  s.push('a');
  //  s.push('b');
  //
  //  // s now has a length of 2 and a capacity of at least 10
  //  let capacity = s.capacity();
  //  assert_eq!(2, s.len());
  //  assert!(capacity >= 10);
  //
  //  // Since we already have at least an extra 8 capacity, calling this...
  //  s.reserve_exact(8);
  //
  //  // ... doesn't actually increase.
  //  assert_eq!(capacity, s.capacity());
  //  ```
  //
  // Generated from: library/alloc/src/string.rs;l=1309
  void reserve_exact(::std::uintptr_t additional);

  //  Tries to reserve capacity for at least `additional` bytes more than the
  //  current length. The allocator may reserve more space to speculatively
  //  avoid frequent allocations. After calling `try_reserve`, capacity will be
  //  greater than or equal to `self.len() + additional` if it returns
  //  `Ok(())`. Does nothing if capacity is already sufficient. This method
  //  preserves the contents even if an error occurs.
  //
  //  # Errors
  //
  //  If the capacity overflows, or the allocator reports a failure, then an
  //  error is returned.
  //
  //  # Examples
  //
  //  ```
  //  use std::collections::TryReserveError;
  //
  //  fn process_data(data: &str) -> Result<String, TryReserveError> {
  //      let mut output = String::new();
  //
  //      // Pre-reserve the memory, exiting if we can't
  //      output.try_reserve(data.len())?;
  //
  //      // Now we know this can't OOM in the middle of our complex work
  //      output.push_str(data);
  //
  //      Ok(output)
  //  }
  //  # process_data("rust").expect("reserving capacity for 12 bytes should
  //  never fail");
  //  ```
  //
  // Generated from: library/alloc/src/string.rs;l=1344
  rs_std::Result<rs_std::unit_t, ::rs::alloc::collections::TryReserveError>
  try_reserve(::std::uintptr_t additional);

  //  Tries to reserve the minimum capacity for at least `additional` bytes
  //  more than the current length. Unlike [`try_reserve`], this will not
  //  deliberately over-allocate to speculatively avoid frequent allocations.
  //  After calling `try_reserve_exact`, capacity will be greater than or
  //  equal to `self.len() + additional` if it returns `Ok(())`.
  //  Does nothing if the capacity is already sufficient.
  //
  //  Note that the allocator may give the collection more space than it
  //  requests. Therefore, capacity can not be relied upon to be precisely
  //  minimal. Prefer [`try_reserve`] if future insertions are expected.
  //
  //  [`try_reserve`]: String::try_reserve
  //
  //  # Errors
  //
  //  If the capacity overflows, or the allocator reports a failure, then an
  //  error is returned.
  //
  //  # Examples
  //
  //  ```
  //  use std::collections::TryReserveError;
  //
  //  fn process_data(data: &str) -> Result<String, TryReserveError> {
  //      let mut output = String::new();
  //
  //      // Pre-reserve the memory, exiting if we can't
  //      output.try_reserve_exact(data.len())?;
  //
  //      // Now we know this can't OOM in the middle of our complex work
  //      output.push_str(data);
  //
  //      Ok(output)
  //  }
  //  # process_data("rust").expect("reserving capacity for 12 bytes should
  //  never fail");
  //  ```
  //
  // Generated from: library/alloc/src/string.rs;l=1385
  rs_std::Result<rs_std::unit_t, ::rs::alloc::collections::TryReserveError>
  try_reserve_exact(::std::uintptr_t additional);

  //  Shrinks the capacity of this `String` to match its length.
  //
  //  # Examples
  //
  //  ```
  //  let mut s = String::from("foo");
  //
  //  s.reserve(100);
  //  assert!(s.capacity() >= 100);
  //
  //  s.shrink_to_fit();
  //  assert_eq!(3, s.capacity());
  //  ```
  //
  // Generated from: library/alloc/src/string.rs;l=1405
  void shrink_to_fit();

  //  Shrinks the capacity of this `String` with a lower bound.
  //
  //  The capacity will remain at least as large as both the length
  //  and the supplied value.
  //
  //  If the current capacity is less than the lower limit, this is a no-op.
  //
  //  # Examples
  //
  //  ```
  //  let mut s = String::from("foo");
  //
  //  s.reserve(100);
  //  assert!(s.capacity() >= 100);
  //
  //  s.shrink_to(10);
  //  assert!(s.capacity() >= 10);
  //  s.shrink_to(0);
  //  assert!(s.capacity() >= 3);
  //  ```
  //
  // Generated from: library/alloc/src/string.rs;l=1432
  void shrink_to(::std::uintptr_t min_capacity);

  //  Appends the given [`char`] to the end of this `String`.
  //
  //  # Panics
  //
  //  Panics if the new capacity exceeds `isize::MAX` _bytes_.
  //
  //  # Examples
  //
  //  ```
  //  let mut s = String::from("abc");
  //
  //  s.push('1');
  //  s.push('2');
  //  s.push('3');
  //
  //  assert_eq!("abc123", s);
  //  ```
  //
  // Generated from: library/alloc/src/string.rs;l=1456
  void push(rs_std::char_ ch);

  //  Returns a byte slice of this `String`'s contents.
  //
  //  The inverse of this method is [`from_utf8`].
  //
  //  [`from_utf8`]: String::from_utf8
  //
  //  # Examples
  //
  //  ```
  //  let s = String::from("hello");
  //
  //  assert_eq!(&[104, 101, 108, 108, 111], s.as_bytes());
  //  ```
  //
  // Generated from: library/alloc/src/string.rs;l=1485
  [[nodiscard]] rs_std::SliceRef<const ::std::uint8_t> as_bytes() const& $(
      __anon1) CRUBIT_LIFETIME_BOUND;

  //  Shortens this `String` to the specified length.
  //
  //  If `new_len` is greater than or equal to the string's current length, this
  //  has no effect.
  //
  //  Note that this method has no effect on the allocated capacity
  //  of the string
  //
  //  # Panics
  //
  //  Panics if `new_len` does not lie on a [`char`] boundary.
  //
  //  # Examples
  //
  //  ```
  //  let mut s = String::from("hello");
  //
  //  s.truncate(2);
  //
  //  assert_eq!("he", s);
  //  ```
  //
  // Generated from: library/alloc/src/string.rs;l=1513
  void truncate(::std::uintptr_t new_len);

  //  Removes the last character from the string buffer and returns it.
  //
  //  Returns [`None`] if this `String` is empty.
  //
  //  # Examples
  //
  //  ```
  //  let mut s = String::from("abč");
  //
  //  assert_eq!(s.pop(), Some('č'));
  //  assert_eq!(s.pop(), Some('b'));
  //  assert_eq!(s.pop(), Some('a'));
  //
  //  assert_eq!(s.pop(), None);
  //  ```
  //
  // Generated from: library/alloc/src/string.rs;l=1537
  rs_std::Option<rs_std::char_> pop();

  //  Removes a [`char`] from this `String` at byte position `idx` and returns
  //  it.
  //
  //  Copies all bytes after the removed char to new positions.
  //
  //  Note that calling this in a loop can result in quadratic behavior.
  //
  //  # Panics
  //
  //  Panics if `idx` is larger than or equal to the `String`'s length,
  //  or if it does not lie on a [`char`] boundary.
  //
  //  # Examples
  //
  //  ```
  //  let mut s = String::from("abç");
  //
  //  assert_eq!(s.remove(0), 'a');
  //  assert_eq!(s.remove(1), 'ç');
  //  assert_eq!(s.remove(0), 'b');
  //  ```
  //
  // Generated from: library/alloc/src/string.rs;l=1571
  rs_std::char_ remove(::std::uintptr_t idx);

  //  Retains only the characters specified by the predicate.
  //
  //  In other words, remove all characters `c` such that `f(c)` returns
  //  `false`. This method operates in place, visiting each character exactly
  //  once in the original order, and preserves the order of the retained
  //  characters.
  //
  //  # Examples
  //
  //  ```
  //  let mut s = String::from("f_o_ob_ar");
  //
  //  s.retain(|c| c != '_');
  //
  //  assert_eq!(s, "foobar");
  //  ```
  //
  //  Because the elements are visited exactly once in the original order,
  //  external state may be used to decide which elements to keep.
  //
  //  ```
  //  let mut s = String::from("abcde");
  //  let keep = [false, true, true, false, true];
  //  let mut iter = keep.iter();
  //  s.retain(|_| *iter.next().unwrap());
  //  assert_eq!(s, "bce");
  //  ```
  //
  // Generated from: library/alloc/src/string.rs;l=1691
  void retain(::rs::FnRef<bool(rs_std::char_)> f);

  //  Inserts a character into this `String` at byte position `idx`.
  //
  //  Reallocates if `self.capacity()` is insufficient, which may involve
  //  copying all `self.capacity()` bytes. Makes space for the insertion by
  //  copying all bytes of
  //  `&self[idx..]` to new positions.
  //
  //  Note that calling this in a loop can result in quadratic behavior.
  //
  //  # Panics
  //
  //  Panics if `idx` is larger than the `String`'s length, or if it does not
  //  lie on a [`char`] boundary.
  //
  //  # Examples
  //
  //  ```
  //  let mut s = String::with_capacity(3);
  //
  //  s.insert(0, 'f');
  //  s.insert(1, 'o');
  //  s.insert(2, 'o');
  //
  //  assert_eq!("foo", s);
  //  ```
  //
  // Generated from: library/alloc/src/string.rs;l=1777
  void insert(::std::uintptr_t idx, rs_std::char_ ch);

  //  Inserts a string slice into this `String` at byte position `idx`.
  //
  //  Reallocates if `self.capacity()` is insufficient, which may involve
  //  copying all `self.capacity()` bytes. Makes space for the insertion by
  //  copying all bytes of
  //  `&self[idx..]` to new positions.
  //
  //  Note that calling this in a loop can result in quadratic behavior.
  //
  //  # Panics
  //
  //  Panics if `idx` is larger than the `String`'s length, or if it does not
  //  lie on a [`char`] boundary.
  //
  //  # Examples
  //
  //  ```
  //  let mut s = String::from("bar");
  //
  //  s.insert_str(0, "foo");
  //
  //  assert_eq!("foobar", s);
  //  ```
  //
  // Generated from: library/alloc/src/string.rs;l=1834
  void insert_str(::std::uintptr_t idx, rs_std::StrRef string);

  //  Returns a mutable reference to the contents of this `String`.
  //
  //  # Safety
  //
  //  This function is unsafe because the returned `&mut Vec` allows writing
  //  bytes which are not valid UTF-8. If this constraint is violated, using
  //  the original `String` after dropping the `&mut Vec` may violate memory
  //  safety, as the rest of the standard library assumes that `String`s are
  //  valid UTF-8.
  //
  //  # Examples
  //
  //  ```
  //  let mut s = String::from("hello");
  //
  //  unsafe {
  //      let vec = s.as_mut_vec();
  //      assert_eq!(&[104, 101, 108, 108, 111][..], &vec[..]);
  //
  //      vec.reverse();
  //  }
  //  assert_eq!(s, "olleh");
  //  ```
  //
  // Generated from: library/alloc/src/string.rs;l=1887
  rs_std::Vec<::std::uint8_t>& $(__anon1) as_mut_vec() &
      $(__anon1) CRUBIT_LIFETIME_BOUND;

  //  Returns the length of this `String`, in bytes, not [`char`]s or
  //  graphemes. In other words, it might not be what a human considers the
  //  length of the string.
  //
  //  # Examples
  //
  //  ```
  //  let a = String::from("foo");
  //  assert_eq!(a.len(), 3);
  //
  //  let fancy_f = String::from("ƒoo");
  //  assert_eq!(fancy_f.len(), 4);
  //  assert_eq!(fancy_f.chars().count(), 3);
  //  ```
  //
  // Generated from: library/alloc/src/string.rs;l=1911
  [[nodiscard]] ::std::uintptr_t len() const;

  //  Returns `true` if this `String` has a length of zero, and `false`
  //  otherwise.
  //
  //  # Examples
  //
  //  ```
  //  let mut v = String::new();
  //  assert!(v.is_empty());
  //
  //  v.push('a');
  //  assert!(!v.is_empty());
  //  ```
  //
  // Generated from: library/alloc/src/string.rs;l=1931
  [[nodiscard]] bool is_empty() const;

  //  Splits the string into two at the given byte index.
  //
  //  Returns a newly allocated `String`. `self` contains bytes `[0, at)`, and
  //  the returned `String` contains bytes `[at, len)`. `at` must be on the
  //  boundary of a UTF-8 code point.
  //
  //  Note that the capacity of `self` does not change.
  //
  //  # Panics
  //
  //  Panics if `at` is not on a `UTF-8` code point boundary, or if it is beyond
  //  the last code point of the string.
  //
  //  # Examples
  //
  //  ```
  //  # fn main() {
  //  let mut hello = String::from("Hello, World!");
  //  let world = hello.split_off(7);
  //  assert_eq!(hello, "Hello, ");
  //  assert_eq!(world, "World!");
  //  # }
  //  ```
  //
  // Generated from: library/alloc/src/string.rs;l=1963
  [[nodiscard("use `.truncate()` if you don't need the other half")]] ::rs::
      alloc::string::String
      split_off(::std::uintptr_t at);

  //  Truncates this `String`, removing all contents.
  //
  //  While this means the `String` will have a length of zero, it does not
  //  touch its capacity.
  //
  //  # Examples
  //
  //  ```
  //  let mut s = String::from("foo");
  //
  //  s.clear();
  //
  //  assert!(s.is_empty());
  //  assert_eq!(0, s.len());
  //  assert_eq!(3, s.capacity());
  //  ```
  //
  // Generated from: library/alloc/src/string.rs;l=1988
  void clear();

  // Error generating bindings for associated function
  // `alloc::string::String::drain` defined at
  // library/alloc/src/string.rs;l=2027: No valid non-generic replacement for
  // generic type param `R`

  // Error generating bindings for associated function
  // `alloc::string::String::replace_range` defined at
  // library/alloc/src/string.rs;l=2127: No valid non-generic replacement for
  // generic type param `R`

  // Error generating bindings for associated function
  // `alloc::string::String::into_boxed_str` defined at
  // library/alloc/src/string.rs;l=2234: Error formatting function return type
  // `alloc::boxed::Box<str>`: Generic types are not supported yet (b/259749095)

  // Error generating bindings for associated function
  // `alloc::string::String::leak` defined at
  // library/alloc/src/string.rs;l=2266: Error formatting function return type
  // `&'a mut str`: Mutable references to `str` are not yet supported.

  // Generated from: library/alloc/src/string.rs;l=3385
  explicit operator rs_std::Vec<::std::uint8_t>();

  // Error generating bindings for associated function `alloc::bstr::<impl
  // core::cmp::PartialEq<alloc::bstr::ByteString> for
  // alloc::string::String>::eq` defined at
  // library/core/src/bstr/traits.rs;l=62: Error handling parameter #1 of type
  // `&'__anon2 alloc::bstr::ByteString`: Failed to format the referent of the
  // reference type `&'__anon2 alloc::bstr::ByteString`: Not a public or a
  // supported reexported type (b/262052635).

  // Error generating bindings for associated function `alloc::bstr::<impl
  // core::cmp::PartialEq<core::bstr::ByteStr> for alloc::string::String>::eq`
  // defined at library/core/src/bstr/traits.rs;l=62: Error handling parameter
  // #1 of type `&'__anon2 core::bstr::ByteStr`: Failed to format the referent
  // of the reference type `&'__anon2 core::bstr::ByteStr`: Not a public or a
  // supported reexported type (b/262052635).

  // Generated from: library/alloc/src/string.rs;l=350
  bool operator==(::rs::alloc::string::String const& other) const;

  // Generated from: library/alloc/src/string.rs;l=2749
  bool operator==(rs_std::StrRef other) const;

  // Error generating bindings for implementation `<alloc::string::String as
  // core::cmp::PartialEq<&str>>` defined at library/alloc/src/string.rs;l=2747:
  // PartialEq implementation for `&str` is not supported when `PartialEq<str>`
  // is implemented as it may overlap.

  // Error generating bindings for associated function `<alloc::string::String
  // as core::cmp::PartialEq<alloc::borrow::Cow<'_, str>>>::eq` defined at
  // library/alloc/src/string.rs;l=2761: Error handling parameter #1 of type
  // `&'__anon2 alloc::borrow::Cow<'__anon3, str>`: Failed to format the
  // referent of the reference type `&'__anon2 alloc::borrow::Cow<'__anon3,
  // str>`: Generic types are not supported yet (b/259749095)

  // Generated from: library/alloc/src/string.rs;l=2858
  ::rs::alloc::string::String operator+(rs_std::StrRef other) &&;

  // Generated from: library/alloc/src/string.rs;l=2871
  void operator+=(rs_std::StrRef other);

  // Generated from: library/alloc/src/string.rs;l=3189
  explicit String(rs_std::StrRef value);

  // Generated from: library/alloc/src/string.rs;l=3673
  explicit String(rs_std::char_ value);

  // AbslStringify and std::ostream support via std::fmt::Display
  template <typename Sink, typename Str = rs::alloc::string::String>
  friend void AbslStringify(Sink& sink, const String& self) {
    crubit::Slot<Str> s;
    __crubit_thunk_7b344df938a8cdb9__uRNvYNtNtCsazOrLUIp1qL_u5alloc6string6StringNtB4_u8ToString9to_ustringCsh9G4tFjYpDL_u8rust_uout(
        self, s.Get());
    AbslStringify(sink, ::std::move(s).AssumeInitAndTakeValue().as_str());
  }
  template <typename Str = rs::alloc::string::String>
  friend ::std::ostream& operator<<(::std::ostream& os, const String& self) {
    crubit::Slot<Str> s;
    __crubit_thunk_7b344df938a8cdb9__uRNvYNtNtCsazOrLUIp1qL_u5alloc6string6StringNtB4_u8ToString9to_ustringCsh9G4tFjYpDL_u8rust_uout(
        self, s.Get());
    return os << ::std::string_view(
               ::std::move(s).AssumeInitAndTakeValue().as_str());
  }

  // AbslHashValue and std::hash support via core::hash::Hash
  template <typename H>
  friend H AbslHashValue(H h, const ::rs::alloc::string::String& self);

  ::std::strong_ordering operator<=>(const String& other) const;

 private:
  // Field type has been replaced with a blob of bytes: Field is private
  ::std::array<unsigned char, 24> vec;

 private:
  static void __crubit_field_offset_assertions();
};

//  A trait for converting a value to a `String`.
//
//  This trait is automatically implemented for any type which implements the
//  [`Display`] trait. As such, `ToString` shouldn't be implemented directly:
//  [`Display`] should be implemented instead, and you get the `ToString`
//  implementation for free.
//
//  [`Display`]: fmt::Display
//
// Generated from: library/alloc/src/string.rs;l=2947
struct CRUBIT_INTERNAL_RUST_TYPE(":: alloc :: string :: ToString") ToString {
  template <typename T>
  using impl = rs_std::impl<T, ToString>;
};

}  // namespace rs::alloc::string

namespace rs::alloc::sync {

// Error generating bindings for struct `alloc::sync::Arc` defined at
// library/alloc/src/rcs/arc.rs;l=265: crubit.rs/errors/unsupported_type:
// Generic types are not supported yet (b/259749095)

// Error generating bindings for struct `alloc::sync::Weak` defined at
// library/alloc/src/rcs/arc.rs;l=354: crubit.rs/errors/unsupported_type:
// Generic types are not supported yet (b/259749095)

}  // namespace rs::alloc::sync

namespace rs::alloc::task {

//  The implementation of waking a task on an executor.
//
//  This trait can be used to create a [`Waker`]. An executor can define an
//  implementation of this trait, and use that to construct a [`Waker`] to pass
//  to the tasks that are executed on that executor.
//
//  This trait is a memory-safe and ergonomic alternative to constructing a
//  [`RawWaker`]. It supports the common executor design in which the data used
//  to wake up a task is stored in an [`Arc`]. Some executors (especially
//  those for embedded systems) cannot use this API, which is why [`RawWaker`]
//  exists as an alternative for those systems.
//
//  To construct a [`Waker`] from some type `W` implementing this trait,
//  wrap it in an [`Arc<W>`](Arc) and call `Waker::from()` on that.
//  It is also possible to convert to [`RawWaker`] in the same way.
//
//  <!-- Ideally we'd link to the `From` impl, but rustdoc doesn't generate any
//  page for it within
//       `alloc` because `alloc` neither defines nor re-exports `From` or
//       `Waker`, and we can't link
//       ../../std/task/struct.Waker.html#impl-From%3CArc%3CW,+Global%3E%3E-for-Waker
//       without getting a link-checking error in CI. -->
//
//  # Memory Ordering
//
//  To avoid missed wakeups, all executors must adhere to the requirement
//  described for [`Waker::wake`].
//
//  # Examples
//
//  A basic `block_on` function that takes a future and runs it to completion on
//  the current thread.
//
//  **Note:** This example trades correctness for simplicity. In order to
//  prevent deadlocks, production-grade implementations will also need to handle
//  intermediate calls to `thread::unpark` as well as nested invocations.
//
//  ```rust
//  use std::future::Future;
//  use std::sync::Arc;
//  use std::task::{Context, Poll, Wake};
//  use std::thread::{self, Thread};
//  use core::pin::pin;
//
//  /// A waker that wakes up the current thread when called.
//  struct ThreadWaker(Thread);
//
//  impl Wake for ThreadWaker {
//      fn wake(self: Arc<Self>) {
//          self.0.unpark();
//      }
//  }
//
//  /// Run a future to completion on the current thread.
//  fn block_on<T>(fut: impl Future<Output = T>) -> T {
//      // Pin the future so it can be polled.
//      let mut fut = pin!(fut);
//
//      // Create a new context to be passed to the future.
//      let t = thread::current();
//      let waker = Arc::new(ThreadWaker(t)).into();
//      let mut cx = Context::from_waker(&waker);
//
//      // Run the future to completion.
//      loop {
//          match fut.as_mut().poll(&mut cx) {
//              Poll::Ready(res) => return res,
//              Poll::Pending => thread::park(),
//          }
//      }
//  }
//
//  block_on(async {
//      println!("Hi from inside a future!");
//  });
//  ```
//
// Generated from: library/alloc/src/task.rs;l=95
struct CRUBIT_INTERNAL_RUST_TYPE(":: alloc :: task :: Wake") Wake {
  template <typename T>
  using impl = rs_std::impl<T, Wake>;
};

}  // namespace rs::alloc::task

namespace rs::alloc {

// Error generating bindings for macro `alloc::vec` defined at
// library/alloc/src/macros.rs;l=43: Unsupported rustc_hir::hir::DefKind:
// Macro(MacroKinds(1))

}

namespace rs::alloc::vec {

// Error generating bindings for struct `alloc::vec::Drain` defined at
// library/alloc/src/vec/drain.rs;l=21: crubit.rs/errors/unsupported_type:
// Generic types are not supported yet (b/259749095)

}

namespace rs::alloc::vec {

// Error generating bindings for struct `alloc::vec::ExtractIf` defined at
// library/alloc/src/vec/extract_if.rs;l=21: crubit.rs/errors/unsupported_type:
// Generic types are not supported yet (b/259749095)

}

namespace rs::alloc::vec {

// Error generating bindings for struct `alloc::vec::IntoIter` defined at
// library/alloc/src/vec/into_iter.rs;l=47: crubit.rs/errors/unsupported_type:
// Generic types are not supported yet (b/259749095)

}

namespace rs::alloc::vec {

// Error generating bindings for struct `alloc::vec::Splice` defined at
// library/alloc/src/vec/splice.rs;l=20: crubit.rs/errors/unsupported_type:
// Generic types are not supported yet (b/259749095)

}

namespace rs::alloc::vec {

// Error generating bindings for struct `alloc::vec::Vec` defined at
// library/alloc/src/vec/mod.rs;l=442: crubit.rs/errors/unsupported_type:
// Generic types are not supported yet (b/259749095)

// Error generating bindings for function `alloc::vec::from_elem` defined at
// library/alloc/src/vec/mod.rs;l=3885: No valid non-generic replacement for
// generic type param `T`

}  // namespace rs::alloc::vec

template <>
struct rs_std::impl<::rs::alloc::collections::TryReserveError,
                    ::rs::core::cmp::Eq> {
  static constexpr bool kIsImplemented = true;
};

template <>
struct rs_std::impl<::rs::alloc::collections::TryReserveError,
                    ::rs::core::error::Error> {
  static constexpr bool kIsImplemented = true;
};

template <>
struct rs_std::impl<::rs::alloc::collections::TryReserveError,
                    ::rs::core::fmt::Debug> {
  static constexpr bool kIsImplemented = true;

  // Error generating bindings for associated function
  // `<alloc::collections::TryReserveError as core::fmt::Debug>::fmt` defined at
  // library/alloc/src/collections/mod.rs;l=68: Error formatting function return
  // type `core::result::Result<(), core::fmt::Error>`: Failed to format type
  // for the definition of `core::fmt::Error`: Zero-sized types (ZSTs) are not
  // supported (b/258259459)
};

template <>
struct rs_std::impl<::rs::alloc::collections::TryReserveError,
                    ::rs::core::fmt::Display> {
  static constexpr bool kIsImplemented = true;

  // Error generating bindings for associated function
  // `<alloc::collections::TryReserveError as core::fmt::Display>::fmt` defined
  // at library/alloc/src/collections/mod.rs;l=174: Error formatting function
  // return type `core::result::Result<(), core::fmt::Error>`: Failed to format
  // type for the definition of `core::fmt::Error`: Zero-sized types (ZSTs) are
  // not supported (b/258259459)
};

// Error generating bindings for implementation `<alloc::ffi::CString as
// core::borrow::Borrow<core::ffi::CStr>>` defined at
// library/alloc/src/ffi/c_str.rs;l=761: Failed to format type for the
// definition of `core::ffi::CStr`: Bindings for dynamically sized types are not
// supported.

template <>
struct rs_std::impl<::rs::alloc::ffi::CString, ::rs::core::cmp::Eq> {
  static constexpr bool kIsImplemented = true;
};

template <>
struct rs_std::impl<::rs::alloc::ffi::CString, ::rs::core::cmp::Ord> {
  static constexpr bool kIsImplemented = true;

  // Generated from: library/alloc/src/ffi/c_str.rs;l=105
  static ::rs::core::cmp::Ordering cmp(::rs::alloc::ffi::CString const& self,
                                       ::rs::alloc::ffi::CString const& other);
};

// Error generating bindings for implementation `<alloc::ffi::CString as
// core::convert::AsRef<core::ffi::CStr>>` defined at
// library/alloc/src/ffi/c_str.rs;l=1167: Failed to format type for the
// definition of `core::ffi::CStr`: Bindings for dynamically sized types are not
// supported.

template <>
struct rs_std::impl<::rs::alloc::ffi::CString, ::rs::core::fmt::Debug> {
  static constexpr bool kIsImplemented = true;

  // Error generating bindings for associated function `<alloc::ffi::CString as
  // core::fmt::Debug>::fmt` defined at library/alloc/src/ffi/c_str.rs;l=735:
  // Error formatting function return type `core::result::Result<(),
  // core::fmt::Error>`: Failed to format type for the definition of
  // `core::fmt::Error`: Zero-sized types (ZSTs) are not supported (b/258259459)
};

template <>
struct rs_std::impl<::rs::alloc::ffi::CString, ::rs::core::str::FromStr> {
  static constexpr bool kIsImplemented = true;
  // Generated from: library/alloc/src/ffi/c_str.rs;l=842
  using Err CRUBIT_INTERNAL_RUST_TYPE(
      "<alloc::ffi::CString as :: core :: str :: FromStr>::Err") =
      ::rs::alloc::ffi::NulError;

  //  Converts a string `s` into a [`CString`].
  //
  //  This method is equivalent to [`CString::new`].
  //
  // Generated from: library/alloc/src/ffi/c_str.rs;l=848
  static rs_std::Result<::rs::alloc::ffi::CString, ::rs::alloc::ffi::NulError>
  from_str(rs_std::StrRef s);
};

template <>
struct rs_std::impl<::rs::alloc::ffi::FromVecWithNulError,
                    ::rs::core::cmp::Eq> {
  static constexpr bool kIsImplemented = true;
};

template <>
struct rs_std::impl<::rs::alloc::ffi::FromVecWithNulError,
                    ::rs::core::error::Error> {
  static constexpr bool kIsImplemented = true;
};

template <>
struct rs_std::impl<::rs::alloc::ffi::FromVecWithNulError,
                    ::rs::core::fmt::Debug> {
  static constexpr bool kIsImplemented = true;

  // Error generating bindings for associated function
  // `<alloc::ffi::FromVecWithNulError as core::fmt::Debug>::fmt` defined at
  // library/alloc/src/ffi/c_str.rs;l=156: Error formatting function return type
  // `core::result::Result<(), core::fmt::Error>`: Failed to format type for the
  // definition of `core::fmt::Error`: Zero-sized types (ZSTs) are not supported
  // (b/258259459)
};

template <>
struct rs_std::impl<::rs::alloc::ffi::FromVecWithNulError,
                    ::rs::core::fmt::Display> {
  static constexpr bool kIsImplemented = true;

  // Error generating bindings for associated function
  // `<alloc::ffi::FromVecWithNulError as core::fmt::Display>::fmt` defined at
  // library/alloc/src/ffi/c_str.rs;l=1048: Error formatting function return
  // type `core::result::Result<(), core::fmt::Error>`: Failed to format type
  // for the definition of `core::fmt::Error`: Zero-sized types (ZSTs) are not
  // supported (b/258259459)
};

template <>
struct rs_std::impl<::rs::alloc::ffi::IntoStringError, ::rs::core::cmp::Eq> {
  static constexpr bool kIsImplemented = true;
};

template <>
struct rs_std::impl<::rs::alloc::ffi::IntoStringError,
                    ::rs::core::error::Error> {
  static constexpr bool kIsImplemented = true;

  // Error generating bindings for associated function
  // `<alloc::ffi::IntoStringError as core::error::Error>::source` defined at
  // library/alloc/src/ffi/c_str.rs;l=1315: Error formatting function return
  // type `core::option::Option<&'__anon1 (dyn core::error::Error + 'static)>`:
  // Failed to format the referent of the reference type `&'static (dyn
  // core::error::Error + 'static)`: The following Rust type is not supported
  // yet: (dyn core::error::Error + 'static)
};

template <>
struct rs_std::impl<::rs::alloc::ffi::IntoStringError, ::rs::core::fmt::Debug> {
  static constexpr bool kIsImplemented = true;

  // Error generating bindings for associated function
  // `<alloc::ffi::IntoStringError as core::fmt::Debug>::fmt` defined at
  // library/alloc/src/ffi/c_str.rs;l=222: Error formatting function return type
  // `core::result::Result<(), core::fmt::Error>`: Failed to format type for the
  // definition of `core::fmt::Error`: Zero-sized types (ZSTs) are not supported
  // (b/258259459)
};

template <>
struct rs_std::impl<::rs::alloc::ffi::IntoStringError,
                    ::rs::core::fmt::Display> {
  static constexpr bool kIsImplemented = true;

  // Error generating bindings for associated function
  // `<alloc::ffi::IntoStringError as core::fmt::Display>::fmt` defined at
  // library/alloc/src/ffi/c_str.rs;l=1079: Error formatting function return
  // type `core::result::Result<(), core::fmt::Error>`: Failed to format type
  // for the definition of `core::fmt::Error`: Zero-sized types (ZSTs) are not
  // supported (b/258259459)
};

template <>
struct rs_std::impl<::rs::alloc::ffi::NulError, ::rs::core::cmp::Eq> {
  static constexpr bool kIsImplemented = true;
};

template <>
struct rs_std::impl<::rs::alloc::ffi::NulError, ::rs::core::error::Error> {
  static constexpr bool kIsImplemented = true;
};

template <>
struct rs_std::impl<::rs::alloc::ffi::NulError, ::rs::core::fmt::Debug> {
  static constexpr bool kIsImplemented = true;

  // Error generating bindings for associated function `<alloc::ffi::NulError as
  // core::fmt::Debug>::fmt` defined at library/alloc/src/ffi/c_str.rs;l=131:
  // Error formatting function return type `core::result::Result<(),
  // core::fmt::Error>`: Failed to format type for the definition of
  // `core::fmt::Error`: Zero-sized types (ZSTs) are not supported (b/258259459)
};

template <>
struct rs_std::impl<::rs::alloc::ffi::NulError, ::rs::core::fmt::Display> {
  static constexpr bool kIsImplemented = true;

  // Error generating bindings for associated function `<alloc::ffi::NulError as
  // core::fmt::Display>::fmt` defined at library/alloc/src/ffi/c_str.rs;l=1041:
  // Error formatting function return type `core::result::Result<(),
  // core::fmt::Error>`: Failed to format type for the definition of
  // `core::fmt::Error`: Zero-sized types (ZSTs) are not supported (b/258259459)
};

template <>
struct rs_std::impl<::rs::alloc::string::Drain, ::rs::core::fmt::Debug> {
  static constexpr bool kIsImplemented = true;

  // Error generating bindings for associated function
  // `<alloc::string::Drain<'_> as core::fmt::Debug>::fmt` defined at
  // library/alloc/src/string.rs;l=3585: Error formatting function return type
  // `core::result::Result<(), core::fmt::Error>`: Failed to format type for the
  // definition of `core::fmt::Error`: Zero-sized types (ZSTs) are not supported
  // (b/258259459)
};

template <>
struct rs_std::impl<::rs::alloc::string::Drain,
                    ::rs::core::iter::DoubleEndedIterator> {
  static constexpr bool kIsImplemented = true;

  // Generated from: library/alloc/src/string.rs;l=3663
  static rs_std::Option<rs_std::char_> next_back(
      ::rs::alloc::string::Drain& self);
};

template <>
struct rs_std::impl<::rs::alloc::string::Drain,
                    ::rs::core::iter::FusedIterator> {
  static constexpr bool kIsImplemented = true;
};

template <>
struct rs_std::impl<::rs::alloc::string::Drain, ::rs::core::iter::Iterator> {
  static constexpr bool kIsImplemented = true;
  // Generated from: library/alloc/src/string.rs;l=3643
  using Item CRUBIT_INTERNAL_RUST_TYPE(
      "<alloc::string::Drain<'_> as :: core :: iter :: Iterator>::Item") =
      rs_std::char_;

  // Generated from: library/alloc/src/string.rs;l=3646
  static rs_std::Option<rs_std::char_> next(::rs::alloc::string::Drain& self);

  // Generated from: library/alloc/src/string.rs;l=3650
  static ::std::tuple<::std::uintptr_t, rs_std::Option<::std::uint64_t>>
  size_hint(::rs::alloc::string::Drain const& self);

  // Generated from: library/alloc/src/string.rs;l=3655
  static rs_std::Option<rs_std::char_> last(
      ::rs::Movable<::rs::alloc::string::Drain> self);
};

// Error generating bindings for implementation `<alloc::string::Drain<'a> as
// core::convert::AsRef<[u8]>>` defined at library/alloc/src/string.rs;l=3635:
// The following Rust type is not supported yet: [u8]

// Error generating bindings for implementation `<alloc::string::Drain<'a> as
// core::convert::AsRef<str>>` defined at library/alloc/src/string.rs;l=3628:
// The following Rust type is not supported yet: str

template <>
struct rs_std::impl<::rs::alloc::string::FromUtf16Error,
                    ::rs::core::error::Error> {
  static constexpr bool kIsImplemented = true;
};

template <>
struct rs_std::impl<::rs::alloc::string::FromUtf16Error,
                    ::rs::core::fmt::Debug> {
  static constexpr bool kIsImplemented = true;

  // Error generating bindings for associated function
  // `<alloc::string::FromUtf16Error as core::fmt::Debug>::fmt` defined at
  // library/alloc/src/string.rs;l=412: Error formatting function return type
  // `core::result::Result<(), core::fmt::Error>`: Failed to format type for the
  // definition of `core::fmt::Error`: Zero-sized types (ZSTs) are not supported
  // (b/258259459)
};

template <>
struct rs_std::impl<::rs::alloc::string::FromUtf16Error,
                    ::rs::core::fmt::Display> {
  static constexpr bool kIsImplemented = true;

  // Error generating bindings for associated function
  // `<alloc::string::FromUtf16Error as core::fmt::Display>::fmt` defined at
  // library/alloc/src/string.rs;l=2416: Error formatting function return type
  // `core::result::Result<(), core::fmt::Error>`: Failed to format type for the
  // definition of `core::fmt::Error`: Zero-sized types (ZSTs) are not supported
  // (b/258259459)
};

template <>
struct rs_std::impl<::rs::alloc::string::FromUtf8Error, ::rs::core::cmp::Eq> {
  static constexpr bool kIsImplemented = true;
};

template <>
struct rs_std::impl<::rs::alloc::string::FromUtf8Error,
                    ::rs::core::error::Error> {
  static constexpr bool kIsImplemented = true;
};

template <>
struct rs_std::impl<::rs::alloc::string::FromUtf8Error,
                    ::rs::core::fmt::Debug> {
  static constexpr bool kIsImplemented = true;

  // Error generating bindings for associated function
  // `<alloc::string::FromUtf8Error as core::fmt::Debug>::fmt` defined at
  // library/alloc/src/string.rs;l=390: Error formatting function return type
  // `core::result::Result<(), core::fmt::Error>`: Failed to format type for the
  // definition of `core::fmt::Error`: Zero-sized types (ZSTs) are not supported
  // (b/258259459)
};

template <>
struct rs_std::impl<::rs::alloc::string::FromUtf8Error,
                    ::rs::core::fmt::Display> {
  static constexpr bool kIsImplemented = true;

  // Error generating bindings for associated function
  // `<alloc::string::FromUtf8Error as core::fmt::Display>::fmt` defined at
  // library/alloc/src/string.rs;l=2409: Error formatting function return type
  // `core::result::Result<(), core::fmt::Error>`: Failed to format type for the
  // definition of `core::fmt::Error`: Zero-sized types (ZSTs) are not supported
  // (b/258259459)
};

template <>
struct rs_std::impl<::rs::alloc::string::String, ::rs::core::cmp::Eq> {
  static constexpr bool kIsImplemented = true;
};

template <>
struct rs_std::impl<::rs::alloc::string::String, ::rs::core::cmp::Ord> {
  static constexpr bool kIsImplemented = true;

  // Generated from: library/alloc/src/string.rs;l=350
  static ::rs::core::cmp::Ordering cmp(
      ::rs::alloc::string::String const& self,
      ::rs::alloc::string::String const& other);
};

// Error generating bindings for implementation `<alloc::string::String as
// core::convert::AsMut<str>>` defined at library/alloc/src/string.rs;l=3172:
// The following Rust type is not supported yet: str

// Error generating bindings for implementation `<alloc::string::String as
// core::convert::AsRef<[u8]>>` defined at library/alloc/src/string.rs;l=3180:
// The following Rust type is not supported yet: [u8]

// Error generating bindings for implementation `<alloc::string::String as
// core::convert::AsRef<str>>` defined at library/alloc/src/string.rs;l=3164:
// The following Rust type is not supported yet: str

template <>
struct rs_std::impl<::rs::alloc::string::String,
                    ::rs::core::convert::TryFrom<rs_std::Vec<::std::uint8_t>>> {
  static constexpr bool kIsImplemented = true;
  // Generated from: library/alloc/src/string.rs;l=3405
  using Error CRUBIT_INTERNAL_RUST_TYPE(
      "<alloc::string::String as :: core :: convert :: TryFrom>::Error") =
      ::rs::alloc::string::FromUtf8Error;

  //  Converts the given [`Vec<u8>`] into a  [`String`] if it contains valid
  //  UTF-8 data.
  //
  //  # Examples
  //
  //  ```
  //  let s1 = b"hello world".to_vec();
  //  let v1 = String::try_from(s1).unwrap();
  //  assert_eq!(v1, "hello world");
  //
  //  ```
  //
  // Generated from: library/alloc/src/string.rs;l=3416
  static rs_std::Result<::rs::alloc::string::String,
                        ::rs::alloc::string::FromUtf8Error>
  try_from(rs_std::Vec<::std::uint8_t> bytes);
};

template <>
struct rs_std::impl<::rs::alloc::string::String, ::rs::core::fmt::Debug> {
  static constexpr bool kIsImplemented = true;

  // Error generating bindings for associated function `<alloc::string::String
  // as core::fmt::Debug>::fmt` defined at library/alloc/src/string.rs;l=2802:
  // Error formatting function return type `core::result::Result<(),
  // core::fmt::Error>`: Failed to format type for the definition of
  // `core::fmt::Error`: Zero-sized types (ZSTs) are not supported (b/258259459)
};

template <>
struct rs_std::impl<::rs::alloc::string::String, ::rs::core::fmt::Display> {
  static constexpr bool kIsImplemented = true;

  // Error generating bindings for associated function `<alloc::string::String
  // as core::fmt::Display>::fmt` defined at library/alloc/src/string.rs;l=2794:
  // Error formatting function return type `core::result::Result<(),
  // core::fmt::Error>`: Failed to format type for the definition of
  // `core::fmt::Error`: Zero-sized types (ZSTs) are not supported (b/258259459)
};

template <>
struct rs_std::impl<::rs::alloc::string::String, ::rs::core::fmt::Write> {
  static constexpr bool kIsImplemented = true;

  // Error generating bindings for associated function `<alloc::string::String
  // as core::fmt::Write>::write_str` defined at
  // library/alloc/src/string.rs;l=3425: Error formatting function return type
  // `core::result::Result<(), core::fmt::Error>`: Failed to format type for the
  // definition of `core::fmt::Error`: Zero-sized types (ZSTs) are not supported
  // (b/258259459)

  // Error generating bindings for associated function `<alloc::string::String
  // as core::fmt::Write>::write_char` defined at
  // library/alloc/src/string.rs;l=3431: Error formatting function return type
  // `core::result::Result<(), core::fmt::Error>`: Failed to format type for the
  // definition of `core::fmt::Error`: Zero-sized types (ZSTs) are not supported
  // (b/258259459)
};

template <>
struct rs_std::impl<
    ::rs::alloc::string::String,
    ::rs::core::iter::Extend<rs_std::char_ const * $a crubit_nonnull>> {
  static constexpr bool kIsImplemented = true;

  // Error generating bindings for associated function `<alloc::string::String
  // as core::iter::Extend<&'a char>>::extend` defined at
  // library/alloc/src/string.rs;l=2572: No valid non-generic replacement for
  // generic type param `I`
};

// Error generating bindings for implementation `<alloc::string::String as
// core::iter::Extend<&'a core::ascii::Char>>` defined at
// library/alloc/src/string.rs;l=2676: Failed to format the referent of the
// reference type `&'a core::ascii::Char`: Not a public or a supported
// reexported type (b/262052635).

template <>
struct rs_std::impl<::rs::alloc::string::String,
                    ::rs::core::iter::Extend<rs_std::StrRef>> {
  static constexpr bool kIsImplemented = true;

  // Error generating bindings for associated function `<alloc::string::String
  // as core::iter::Extend<&'a str>>::extend` defined at
  // library/alloc/src/string.rs;l=2590: No valid non-generic replacement for
  // generic type param `I`
};

// Error generating bindings for implementation `<alloc::string::String as
// core::iter::Extend<alloc::borrow::Cow<'a, str>>>` defined at
// library/alloc/src/string.rs;l=2649: Generic types are not supported yet
// (b/259749095)

// Error generating bindings for implementation `<alloc::string::String as
// core::iter::Extend<alloc::boxed::Box<str, A>>>` defined at
// library/alloc/src/string.rs;l=2628: Implementation of traits must specify all
// types to receive bindings.

template <>
struct rs_std::impl<::rs::alloc::string::String,
                    ::rs::core::iter::Extend<::rs::alloc::string::String>> {
  static constexpr bool kIsImplemented = true;

  // Error generating bindings for associated function `<alloc::string::String
  // as core::iter::Extend<alloc::string::String>>::extend` defined at
  // library/alloc/src/string.rs;l=2637: No valid non-generic replacement for
  // generic type param `I`
};

template <>
struct rs_std::impl<::rs::alloc::string::String,
                    ::rs::core::iter::Extend<rs_std::char_>> {
  static constexpr bool kIsImplemented = true;

  // Error generating bindings for associated function `<alloc::string::String
  // as core::iter::Extend<char>>::extend` defined at
  // library/alloc/src/string.rs;l=2551: No valid non-generic replacement for
  // generic type param `I`
};

// Error generating bindings for implementation `<alloc::string::String as
// core::iter::Extend<core::ascii::Char>>` defined at
// library/alloc/src/string.rs;l=2662: Not a public or a supported reexported
// type (b/262052635).

template <>
struct rs_std::impl<
    ::rs::alloc::string::String,
    ::rs::core::iter::FromIterator<rs_std::char_ const * $a crubit_nonnull>> {
  static constexpr bool kIsImplemented = true;

  // Error generating bindings for associated function `<alloc::string::String
  // as core::iter::FromIterator<&'a char>>::from_iter` defined at
  // library/alloc/src/string.rs;l=2460: No valid non-generic replacement for
  // generic type param `I`
};

// Error generating bindings for implementation `<alloc::string::String as
// core::iter::FromIterator<&'a core::ascii::Char>>` defined at
// library/alloc/src/string.rs;l=2539: Failed to format the referent of the
// reference type `&'a core::ascii::Char`: Not a public or a supported
// reexported type (b/262052635).

template <>
struct rs_std::impl<::rs::alloc::string::String,
                    ::rs::core::iter::FromIterator<rs_std::StrRef>> {
  static constexpr bool kIsImplemented = true;

  // Error generating bindings for associated function `<alloc::string::String
  // as core::iter::FromIterator<&'a str>>::from_iter` defined at
  // library/alloc/src/string.rs;l=2470: No valid non-generic replacement for
  // generic type param `I`
};

// Error generating bindings for implementation `<alloc::string::String as
// core::iter::FromIterator<alloc::borrow::Cow<'a, str>>>` defined at
// library/alloc/src/string.rs;l=2508: Generic types are not supported yet
// (b/259749095)

// Error generating bindings for implementation `<alloc::string::String as
// core::iter::FromIterator<alloc::boxed::Box<str, A>>>` defined at
// library/alloc/src/string.rs;l=2498: Implementation of traits must specify all
// types to receive bindings.

template <>
struct rs_std::impl<
    ::rs::alloc::string::String,
    ::rs::core::iter::FromIterator<::rs::alloc::string::String>> {
  static constexpr bool kIsImplemented = true;

  // Error generating bindings for associated function `<alloc::string::String
  // as core::iter::FromIterator<alloc::string::String>>::from_iter` defined at
  // library/alloc/src/string.rs;l=2480: No valid non-generic replacement for
  // generic type param `I`
};

template <>
struct rs_std::impl<::rs::alloc::string::String,
                    ::rs::core::iter::FromIterator<rs_std::char_>> {
  static constexpr bool kIsImplemented = true;

  // Error generating bindings for associated function `<alloc::string::String
  // as core::iter::FromIterator<char>>::from_iter` defined at
  // library/alloc/src/string.rs;l=2450: No valid non-generic replacement for
  // generic type param `I`
};

// Error generating bindings for implementation `<alloc::string::String as
// core::iter::FromIterator<core::ascii::Char>>` defined at
// library/alloc/src/string.rs;l=2528: Not a public or a supported reexported
// type (b/262052635).

template <>
struct rs_std::impl<::rs::alloc::string::String, ::rs::core::str::FromStr> {
  static constexpr bool kIsImplemented = true;

  // Error generating bindings for associated type `<alloc::string::String as
  // core::str::FromStr>::Err` defined at library/alloc/src/string.rs;l=2930:
  // The never type `!` is only supported as a return type (b/254507801)

  // Error generating bindings for associated function `<alloc::string::String
  // as core::str::FromStr>::from_str` defined at
  // library/alloc/src/string.rs;l=2932: Error formatting function return type
  // `core::result::Result<alloc::string::String, !>`: The never type `!` is
  // only supported as a return type (b/254507801)
};

// Error generating bindings for implementation `alloc::bstr::<impl
// core::convert::TryFrom<&'a core::bstr::ByteStr> for alloc::string::String>`
// defined at library/alloc/src/bstr.rs;l=683: Failed to format the referent of
// the reference type `&'a core::bstr::ByteStr`: Not a public or a supported
// reexported type (b/262052635).

// Error generating bindings for implementation `alloc::bstr::<impl
// core::convert::TryFrom<alloc::bstr::ByteString> for alloc::string::String>`
// defined at library/alloc/src/bstr.rs;l=579: Not a public or a supported
// reexported type (b/262052635).

// clang-format off
#ifndef _CRUBIT_BINDINGS_FOR_std_x00000020_x0000003a_x0000003a_x00000020hash_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020rs_x00000020_x0000003a_x0000003a_x00000020alloc_x00000020_x0000003a_x0000003a_x00000020ffi_x00000020_x0000003a_x0000003a_x00000020CString_x00000020_x0000003e
#define _CRUBIT_BINDINGS_FOR_std_x00000020_x0000003a_x0000003a_x00000020hash_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020rs_x00000020_x0000003a_x0000003a_x00000020alloc_x00000020_x0000003a_x0000003a_x00000020ffi_x00000020_x0000003a_x0000003a_x00000020CString_x00000020_x0000003e
namespace __crubit_internal {
extern "C" ::std::uint64_t
__crubit_thunk_7b344df938a8cdb9__uRNvYNtNtNtCsazOrLUIp1qL_u5alloc3ffi5c_ustr7CStringNtNtCsoHVEWV6jqw_u4core4hash4Hash4hashCsh9G4tFjYpDL_u8rust_uout(
    const ::rs::alloc::ffi::CString&);
}
namespace std {
template <>
struct hash<::rs::alloc::ffi::CString> {
  ::std::size_t operator()(const ::rs::alloc::ffi::CString& self) const {
    return static_cast<::std::size_t>(
        __crubit_internal::
            __crubit_thunk_7b344df938a8cdb9__uRNvYNtNtNtCsazOrLUIp1qL_u5alloc3ffi5c_ustr7CStringNtNtCsoHVEWV6jqw_u4core4hash4Hash4hashCsh9G4tFjYpDL_u8rust_uout(
                self));
  }
};
}  // namespace std
#endif

template <>
struct rs_std::impl<::rs::alloc::string::String,
                    ::rs::core::convert::TryFrom<::rs::alloc::ffi::CString>> {
  static constexpr bool kIsImplemented = true;
  // Generated from: library/alloc/src/ffi/c_str.rs;l=855
  using Error CRUBIT_INTERNAL_RUST_TYPE(
      "<alloc::string::String as :: core :: convert :: TryFrom>::Error") =
      ::rs::alloc::ffi::IntoStringError;

  //  Converts a [`CString`] into a [`String`] if it contains valid UTF-8 data.
  //
  //  This method is equivalent to [`CString::into_string`].
  //
  // Generated from: library/alloc/src/ffi/c_str.rs;l=861
  static rs_std::Result<::rs::alloc::string::String,
                        ::rs::alloc::ffi::IntoStringError>
  try_from(::rs::alloc::ffi::CString value);
};

// Error generating bindings for implementation `alloc::str::<impl
// core::borrow::Borrow<str> for alloc::string::String>` defined at
// library/alloc/src/str.rs;l=239: The following Rust type is not supported yet:
// str

// Error generating bindings for implementation `alloc::str::<impl
// core::borrow::BorrowMut<str> for alloc::string::String>` defined at
// library/alloc/src/str.rs;l=247: The following Rust type is not supported yet:
// str

#ifndef _CRUBIT_BINDINGS_FOR_std_x00000020_x0000003a_x0000003a_x00000020hash_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020rs_x00000020_x0000003a_x0000003a_x00000020alloc_x00000020_x0000003a_x0000003a_x00000020string_x00000020_x0000003a_x0000003a_x00000020String_x00000020_x0000003e
#define _CRUBIT_BINDINGS_FOR_std_x00000020_x0000003a_x0000003a_x00000020hash_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020rs_x00000020_x0000003a_x0000003a_x00000020alloc_x00000020_x0000003a_x0000003a_x00000020string_x00000020_x0000003a_x0000003a_x00000020String_x00000020_x0000003e
namespace __crubit_internal {
extern "C" ::std::uint64_t
__crubit_thunk_7b344df938a8cdb9__uRNvYNtNtCsazOrLUIp1qL_u5alloc6string6StringNtNtCsoHVEWV6jqw_u4core4hash4Hash4hashCsh9G4tFjYpDL_u8rust_uout(
    const ::rs::alloc::string::String&);
}
namespace std {
template <>
struct hash<::rs::alloc::string::String> {
  ::std::size_t operator()(const ::rs::alloc::string::String& self) const {
    return static_cast<::std::size_t>(
        __crubit_internal::
            __crubit_thunk_7b344df938a8cdb9__uRNvYNtNtCsazOrLUIp1qL_u5alloc6string6StringNtNtCsoHVEWV6jqw_u4core4hash4Hash4hashCsh9G4tFjYpDL_u8rust_uout(
                self));
  }
};
}  // namespace std
#endif

#ifndef _CRUBIT_BINDINGS_FOR_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Vec_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020std_x00000020_x0000003a_x0000003a_x00000020uint8_ut_x00000020_x0000003e
#define _CRUBIT_BINDINGS_FOR_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Vec_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020std_x00000020_x0000003a_x0000003a_x00000020uint8_ut_x00000020_x0000003e
template <>
struct alignas(8) CRUBIT_INTERNAL_RUST_TYPE(":: alloc :: vec :: Vec < u8 >")
    rs_std::Vec<::std::uint8_t> : public rs_std::VecBase<::std::uint8_t> {
 public:
  // Default::default
  Vec() noexcept;

  // Clone::clone
  Vec(const Vec&) noexcept;

  // Clone::clone_from
  rs_std::Vec<::std::uint8_t>& operator=(const Vec&) noexcept;

  Vec(Vec&&) noexcept;
  rs_std::Vec<::std::uint8_t>& operator=(Vec&&) noexcept;
  Vec(::crubit::UnsafeRelocateTag, Vec&& value);

  ~Vec() noexcept;

 private:
  friend class rs_std::VecBase<::std::uint8_t>;
  static constexpr std::size_t kPtrOffset = 8;
  static constexpr std::size_t kCapOffset = 0;
  static constexpr std::size_t kLenOffset = 16;
  unsigned char storage_[24];
};
#endif

#ifndef _CRUBIT_BINDINGS_FOR_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Option_x00000020_x0000003c_x00000020rs_ustd_x00000020_x0000003a_x0000003a_x00000020char_u_x00000020_x0000003e
#define _CRUBIT_BINDINGS_FOR_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Option_x00000020_x0000003c_x00000020rs_ustd_x00000020_x0000003a_x0000003a_x00000020char_u_x00000020_x0000003e
template <>
struct alignas(4) CRUBIT_INTERNAL_RUST_TYPE(
    "core :: option :: Option < char >") rs_std::Option<rs_std::char_>
    : public rs_std::OptionBase<rs_std::Option<rs_std::char_>, rs_std::char_> {
 public:
  // Rust types that are `Copy` get trivial, `default` C++ copy constructor and
  // assignment operator.
  Option(const Option&) = default;
  Option& operator=(const Option&) = default;
  Option(Option&&) = default;
  Option& operator=(Option&&) = default;

  Option(::crubit::UnsafeRelocateTag, Option&& value);
  using base_type =
      rs_std::OptionBase<rs_std::Option<rs_std::char_>, rs_std::char_>;
  constexpr Option() = default;
  constexpr Option(::std::nullopt_t) noexcept;
  constexpr Option& operator=(::std::nullopt_t) noexcept;
  template <typename U>
    requires(rs_std::OptionForwardConstructible<Option, rs_std::char_, U>)
  Option(U&& value) noexcept;
  template <typename U>
    requires(rs_std::OptionForwardConstructible<Option, rs_std::char_, U>)
  Option& operator=(U&& value) noexcept;
  template <typename Opt>
    requires(rs_std::OptionFromStdOptional<rs_std::char_, Opt>)
  Option(Opt&& value) noexcept;
  template <typename Opt>
    requires(rs_std::OptionFromStdOptional<rs_std::char_, Opt>)
  Option& operator=(Opt&& value) noexcept;
  template <typename... Args>
  explicit Option(::std::in_place_t ip, Args&&... args) noexcept;
  ~Option() noexcept = default;

 private:
  friend base_type;
  using tag_type = ::std::uint32_t;
  static constexpr tag_type kNoneVal = UINT32_C(4294967295);
  rs_std::char_* some_ptr() noexcept {
    return reinterpret_cast<rs_std::char_*>(storage_);
  }
  rs_std::char_ const* some_const_ptr() const noexcept {
    return reinterpret_cast<rs_std::char_ const*>(storage_);
  }
  void set_some_tag() noexcept {}
  constexpr void set_none_tag() noexcept { set_tag(kNoneVal); }
  constexpr bool is_none() const noexcept { return tag() == kNoneVal; }
  constexpr ::std::uint32_t tag() const& noexcept;
  constexpr void set_tag(::std::uint32_t tag) noexcept;

 private:
  unsigned char storage_[4];
};
#endif

#ifndef _CRUBIT_BINDINGS_FOR_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Option_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020std_x00000020_x0000003a_x0000003a_x00000020uint64_ut_x00000020_x0000003e
#define _CRUBIT_BINDINGS_FOR_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Option_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020std_x00000020_x0000003a_x0000003a_x00000020uint64_ut_x00000020_x0000003e
template <>
struct alignas(8) CRUBIT_INTERNAL_RUST_TYPE(
    "core :: option :: Option < usize >") rs_std::Option<::std::uint64_t>
    : public rs_std::OptionBase<rs_std::Option<::std::uint64_t>,
                                ::std::uint64_t> {
 public:
  // Rust types that are `Copy` get trivial, `default` C++ copy constructor and
  // assignment operator.
  Option(const Option&) = default;
  Option& operator=(const Option&) = default;
  Option(Option&&) = default;
  Option& operator=(Option&&) = default;

  Option(::crubit::UnsafeRelocateTag, Option&& value);
  using base_type =
      rs_std::OptionBase<rs_std::Option<::std::uint64_t>, ::std::uint64_t>;
  constexpr Option() = default;
  constexpr Option(::std::nullopt_t) noexcept;
  constexpr Option& operator=(::std::nullopt_t) noexcept;
  template <typename U>
    requires(rs_std::OptionForwardConstructible<Option, ::std::uint64_t, U>)
  Option(U&& value) noexcept;
  template <typename U>
    requires(rs_std::OptionForwardConstructible<Option, ::std::uint64_t, U>)
  Option& operator=(U&& value) noexcept;
  template <typename Opt>
    requires(rs_std::OptionFromStdOptional<::std::uint64_t, Opt>)
  Option(Opt&& value) noexcept;
  template <typename Opt>
    requires(rs_std::OptionFromStdOptional<::std::uint64_t, Opt>)
  Option& operator=(Opt&& value) noexcept;
  template <typename... Args>
  explicit Option(::std::in_place_t ip, Args&&... args) noexcept;
  ~Option() noexcept = default;

 private:
  friend base_type;
  using tag_type = ::std::uint64_t;
  static constexpr tag_type kNoneVal = 0;
  ::std::uint64_t* some_ptr() noexcept {
    return reinterpret_cast<::std::uint64_t*>(storage_ + 8);
  }
  ::std::uint64_t const* some_const_ptr() const noexcept {
    return reinterpret_cast<::std::uint64_t const*>(storage_ + 8);
  }
  void set_some_tag() noexcept { set_tag(1); }
  constexpr void set_none_tag() noexcept { set_tag(kNoneVal); }
  constexpr bool is_none() const noexcept { return tag() == kNoneVal; }
  constexpr ::std::uint64_t tag() const& noexcept;
  constexpr void set_tag(::std::uint64_t tag) noexcept;

 private:
  unsigned char storage_[16];
};
#endif

#ifndef _CRUBIT_BINDINGS_FOR_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020rs_ustd_x00000020_x0000003a_x0000003a_x00000020StrRef_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020rs_x00000020_x0000003a_x0000003a_x00000020core_x00000020_x0000003a_x0000003a_x00000020str_x00000020_x0000003a_x0000003a_x00000020Utf8Error_x00000020_x0000003e
#define _CRUBIT_BINDINGS_FOR_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020rs_ustd_x00000020_x0000003a_x0000003a_x00000020StrRef_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020rs_x00000020_x0000003a_x0000003a_x00000020core_x00000020_x0000003a_x0000003a_x00000020str_x00000020_x0000003a_x0000003a_x00000020Utf8Error_x00000020_x0000003e
template <>
struct alignas(8) CRUBIT_INTERNAL_RUST_TYPE(
    "core :: result :: Result < & 'static str , :: core :: str :: Utf8Error >")
    rs_std::Result<rs_std::StrRef, ::rs::core::str::Utf8Error>
    : public rs_std::ResultBase<
          rs_std::Result<rs_std::StrRef, ::rs::core::str::Utf8Error>,
          rs_std::StrRef, ::rs::core::str::Utf8Error> {
 public:
  // Rust types that are `Copy` get trivial, `default` C++ copy constructor and
  // assignment operator.
  Result(const Result&) = default;
  Result& operator=(const Result&) = default;
  Result(Result&&) = default;
  Result& operator=(Result&&) = default;

  Result(::crubit::UnsafeRelocateTag, Result&& value);

 public:
  using base_type = rs_std::ResultBase<
      rs_std::Result<rs_std::StrRef, ::rs::core::str::Utf8Error>,
      rs_std::StrRef, ::rs::core::str::Utf8Error>;
  template <typename U>
    requires(rs_std::ResultForwardConstructible<Result, rs_std::StrRef, U>)
  explicit constexpr Result(U&& ok) noexcept;
  template <typename U>
    requires(rs_std::ResultForwardConstructible<Result, rs_std::StrRef, U>)
  constexpr Result& operator=(U&& ok) noexcept;
  template <typename F>
    requires(
        rs_std::ResultUnexpectedConstructible<::rs::core::str::Utf8Error, F>)
  explicit constexpr Result(rs_std::unexpected<F>&& err) noexcept;
  template <typename F>
    requires(
        rs_std::ResultUnexpectedConstructible<::rs::core::str::Utf8Error, F>)
  constexpr Result& operator=(rs_std::unexpected<F>&& err) noexcept;
  template <typename... Args>
  explicit constexpr Result(::std::in_place_t ip, Args&&... args) noexcept;
  template <typename... Args>
  explicit constexpr Result(rs_std::unexpect_t u, Args&&... args) noexcept;
  ~Result() noexcept = default;

 private:
  friend base_type;
  bool has_value_impl() const noexcept { return tag() == 0; }
  rs_std::StrRef* ok_ptr() noexcept {
    return reinterpret_cast<rs_std::StrRef*>(__storage + 8);
  }
  rs_std::StrRef const* ok_const_ptr() const noexcept {
    return reinterpret_cast<rs_std::StrRef const*>(__storage + 8);
  }
  ::rs::core::str::Utf8Error* err_ptr() noexcept {
    return reinterpret_cast<::rs::core::str::Utf8Error*>(__storage + 8);
  }
  ::rs::core::str::Utf8Error const* err_const_ptr() const noexcept {
    return reinterpret_cast<::rs::core::str::Utf8Error const*>(__storage + 8);
  }
  void set_ok_tag() noexcept { set_tag(0); }
  void set_err_tag() noexcept { set_tag(1); }
  constexpr ::std::uint64_t tag() const& noexcept;
  constexpr void set_tag(::std::uint64_t tag) noexcept;

 private:
  unsigned char __storage[24];
};
#endif

#ifndef _CRUBIT_BINDINGS_FOR_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020rs_ustd_x00000020_x0000003a_x0000003a_x00000020unit_ut_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020rs_x00000020_x0000003a_x0000003a_x00000020alloc_x00000020_x0000003a_x0000003a_x00000020collections_x00000020_x0000003a_x0000003a_x00000020TryReserveError_x00000020_x0000003e
#define _CRUBIT_BINDINGS_FOR_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020rs_ustd_x00000020_x0000003a_x0000003a_x00000020unit_ut_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020rs_x00000020_x0000003a_x0000003a_x00000020alloc_x00000020_x0000003a_x0000003a_x00000020collections_x00000020_x0000003a_x0000003a_x00000020TryReserveError_x00000020_x0000003e
template <>
struct alignas(8) CRUBIT_INTERNAL_RUST_TYPE(
    "core :: result :: Result < () , :: alloc :: collections :: "
    "TryReserveError >")
    rs_std::Result<rs_std::unit_t, ::rs::alloc::collections::TryReserveError>
    : public rs_std::ResultBase<
          rs_std::Result<rs_std::unit_t,
                         ::rs::alloc::collections::TryReserveError>,
          rs_std::unit_t, ::rs::alloc::collections::TryReserveError> {
 public:
  // Clone::clone
  Result(const Result&) noexcept;

  // Clone::clone_from
  rs_std::Result<rs_std::unit_t, ::rs::alloc::collections::TryReserveError>&
  operator=(const Result&) noexcept;

  Result(Result&&) = default;
  Result& operator=(Result&&) = default;

  Result(::crubit::UnsafeRelocateTag, Result&& value);

 public:
  using base_type = rs_std::ResultBase<
      rs_std::Result<rs_std::unit_t, ::rs::alloc::collections::TryReserveError>,
      rs_std::unit_t, ::rs::alloc::collections::TryReserveError>;
  template <typename U>
    requires(rs_std::ResultForwardConstructible<Result, rs_std::unit_t, U>)
  explicit constexpr Result(U&& ok) noexcept;
  template <typename U>
    requires(rs_std::ResultForwardConstructible<Result, rs_std::unit_t, U>)
  constexpr Result& operator=(U&& ok) noexcept;
  template <typename F>
    requires(rs_std::ResultUnexpectedConstructible<
             ::rs::alloc::collections::TryReserveError, F>)
  explicit constexpr Result(rs_std::unexpected<F>&& err) noexcept;
  template <typename F>
    requires(rs_std::ResultUnexpectedConstructible<
             ::rs::alloc::collections::TryReserveError, F>)
  constexpr Result& operator=(rs_std::unexpected<F>&& err) noexcept;
  template <typename... Args>
  explicit constexpr Result(::std::in_place_t ip, Args&&... args) noexcept;
  template <typename... Args>
  explicit constexpr Result(rs_std::unexpect_t u, Args&&... args) noexcept;
  ~Result() noexcept = default;

 private:
  friend base_type;
  bool has_value_impl() const noexcept {
    return tag() == UINT64_C(18446744073709551615);
  }
  rs_std::unit_t* ok_ptr() noexcept {
    return reinterpret_cast<rs_std::unit_t*>(__storage + 0);
  }
  rs_std::unit_t const* ok_const_ptr() const noexcept {
    return reinterpret_cast<rs_std::unit_t const*>(__storage + 0);
  }
  ::rs::alloc::collections::TryReserveError* err_ptr() noexcept {
    return reinterpret_cast<::rs::alloc::collections::TryReserveError*>(
        __storage);
  }
  ::rs::alloc::collections::TryReserveError const* err_const_ptr()
      const noexcept {
    return reinterpret_cast<::rs::alloc::collections::TryReserveError const*>(
        __storage);
  }
  void set_ok_tag() noexcept { set_tag(UINT64_C(18446744073709551615)); }
  void set_err_tag() noexcept {}
  constexpr ::std::uint64_t tag() const& noexcept;
  constexpr void set_tag(::std::uint64_t tag) noexcept;

 private:
  unsigned char __storage[16];
};
#endif

#ifndef _CRUBIT_BINDINGS_FOR_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020rs_x00000020_x0000003a_x0000003a_x00000020alloc_x00000020_x0000003a_x0000003a_x00000020ffi_x00000020_x0000003a_x0000003a_x00000020CString_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020rs_x00000020_x0000003a_x0000003a_x00000020alloc_x00000020_x0000003a_x0000003a_x00000020ffi_x00000020_x0000003a_x0000003a_x00000020FromVecWithNulError_x00000020_x0000003e
#define _CRUBIT_BINDINGS_FOR_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020rs_x00000020_x0000003a_x0000003a_x00000020alloc_x00000020_x0000003a_x0000003a_x00000020ffi_x00000020_x0000003a_x0000003a_x00000020CString_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020rs_x00000020_x0000003a_x0000003a_x00000020alloc_x00000020_x0000003a_x0000003a_x00000020ffi_x00000020_x0000003a_x0000003a_x00000020FromVecWithNulError_x00000020_x0000003e
template <>
struct alignas(8) CRUBIT_INTERNAL_RUST_TYPE(
    "core :: result :: Result < :: alloc :: ffi :: CString , :: alloc :: ffi "
    ":: FromVecWithNulError >")
    rs_std::Result<::rs::alloc::ffi::CString,
                   ::rs::alloc::ffi::FromVecWithNulError>
    : public rs_std::ResultBase<
          rs_std::Result<::rs::alloc::ffi::CString,
                         ::rs::alloc::ffi::FromVecWithNulError>,
          ::rs::alloc::ffi::CString, ::rs::alloc::ffi::FromVecWithNulError> {
 public:
  // Clone::clone
  Result(const Result&) noexcept;

  // Clone::clone_from
  rs_std::Result<::rs::alloc::ffi::CString,
                 ::rs::alloc::ffi::FromVecWithNulError>&
  operator=(const Result&) noexcept;

  Result(::crubit::UnsafeRelocateTag, Result&& value);

 public:
  using base_type =
      rs_std::ResultBase<rs_std::Result<::rs::alloc::ffi::CString,
                                        ::rs::alloc::ffi::FromVecWithNulError>,
                         ::rs::alloc::ffi::CString,
                         ::rs::alloc::ffi::FromVecWithNulError>;
  template <typename U>
    requires(rs_std::ResultForwardConstructible<Result,
                                                ::rs::alloc::ffi::CString, U>)
  explicit constexpr Result(U&& ok) noexcept;
  template <typename U>
    requires(rs_std::ResultForwardConstructible<Result,
                                                ::rs::alloc::ffi::CString, U>)
  constexpr Result& operator=(U&& ok) noexcept;
  template <typename F>
    requires(rs_std::ResultUnexpectedConstructible<
             ::rs::alloc::ffi::FromVecWithNulError, F>)
  explicit constexpr Result(rs_std::unexpected<F>&& err) noexcept;
  template <typename F>
    requires(rs_std::ResultUnexpectedConstructible<
             ::rs::alloc::ffi::FromVecWithNulError, F>)
  constexpr Result& operator=(rs_std::unexpected<F>&& err) noexcept;
  template <typename... Args>
  explicit constexpr Result(::std::in_place_t ip, Args&&... args) noexcept;
  template <typename... Args>
  explicit constexpr Result(rs_std::unexpect_t u, Args&&... args) noexcept;
  ~Result() noexcept;

 private:
  friend base_type;
  bool has_value_impl() const noexcept { return tag() == 2; }
  ::rs::alloc::ffi::CString* ok_ptr() noexcept {
    return reinterpret_cast<::rs::alloc::ffi::CString*>(__storage + 8);
  }
  ::rs::alloc::ffi::CString const* ok_const_ptr() const noexcept {
    return reinterpret_cast<::rs::alloc::ffi::CString const*>(__storage + 8);
  }
  ::rs::alloc::ffi::FromVecWithNulError* err_ptr() noexcept {
    return reinterpret_cast<::rs::alloc::ffi::FromVecWithNulError*>(__storage);
  }
  ::rs::alloc::ffi::FromVecWithNulError const* err_const_ptr() const noexcept {
    return reinterpret_cast<::rs::alloc::ffi::FromVecWithNulError const*>(
        __storage);
  }
  void set_ok_tag() noexcept { set_tag(2); }
  void set_err_tag() noexcept {}
  constexpr ::std::uint64_t tag() const& noexcept;
  constexpr void set_tag(::std::uint64_t tag) noexcept;

 private:
  unsigned char __storage[40];
};
#endif

#ifndef _CRUBIT_BINDINGS_FOR_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020rs_x00000020_x0000003a_x0000003a_x00000020alloc_x00000020_x0000003a_x0000003a_x00000020ffi_x00000020_x0000003a_x0000003a_x00000020CString_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020rs_x00000020_x0000003a_x0000003a_x00000020alloc_x00000020_x0000003a_x0000003a_x00000020ffi_x00000020_x0000003a_x0000003a_x00000020NulError_x00000020_x0000003e
#define _CRUBIT_BINDINGS_FOR_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020rs_x00000020_x0000003a_x0000003a_x00000020alloc_x00000020_x0000003a_x0000003a_x00000020ffi_x00000020_x0000003a_x0000003a_x00000020CString_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020rs_x00000020_x0000003a_x0000003a_x00000020alloc_x00000020_x0000003a_x0000003a_x00000020ffi_x00000020_x0000003a_x0000003a_x00000020NulError_x00000020_x0000003e
template <>
struct alignas(8) CRUBIT_INTERNAL_RUST_TYPE(
    "core :: result :: Result < :: alloc :: ffi :: CString , :: alloc :: ffi "
    ":: NulError >")
    rs_std::Result<::rs::alloc::ffi::CString, ::rs::alloc::ffi::NulError>
    : public rs_std::ResultBase<
          rs_std::Result<::rs::alloc::ffi::CString, ::rs::alloc::ffi::NulError>,
          ::rs::alloc::ffi::CString, ::rs::alloc::ffi::NulError> {
 public:
  // Clone::clone
  Result(const Result&) noexcept;

  // Clone::clone_from
  rs_std::Result<::rs::alloc::ffi::CString, ::rs::alloc::ffi::NulError>&
  operator=(const Result&) noexcept;

  Result(::crubit::UnsafeRelocateTag, Result&& value);

 public:
  using base_type = rs_std::ResultBase<
      rs_std::Result<::rs::alloc::ffi::CString, ::rs::alloc::ffi::NulError>,
      ::rs::alloc::ffi::CString, ::rs::alloc::ffi::NulError>;
  template <typename U>
    requires(rs_std::ResultForwardConstructible<Result,
                                                ::rs::alloc::ffi::CString, U>)
  explicit constexpr Result(U&& ok) noexcept;
  template <typename U>
    requires(rs_std::ResultForwardConstructible<Result,
                                                ::rs::alloc::ffi::CString, U>)
  constexpr Result& operator=(U&& ok) noexcept;
  template <typename F>
    requires(
        rs_std::ResultUnexpectedConstructible<::rs::alloc::ffi::NulError, F>)
  explicit constexpr Result(rs_std::unexpected<F>&& err) noexcept;
  template <typename F>
    requires(
        rs_std::ResultUnexpectedConstructible<::rs::alloc::ffi::NulError, F>)
  constexpr Result& operator=(rs_std::unexpected<F>&& err) noexcept;
  template <typename... Args>
  explicit constexpr Result(::std::in_place_t ip, Args&&... args) noexcept;
  template <typename... Args>
  explicit constexpr Result(rs_std::unexpect_t u, Args&&... args) noexcept;
  ~Result() noexcept;

 private:
  friend base_type;
  bool has_value_impl() const noexcept {
    return tag() == UINT64_C(18446744073709551615);
  }
  ::rs::alloc::ffi::CString* ok_ptr() noexcept {
    return reinterpret_cast<::rs::alloc::ffi::CString*>(__storage + 8);
  }
  ::rs::alloc::ffi::CString const* ok_const_ptr() const noexcept {
    return reinterpret_cast<::rs::alloc::ffi::CString const*>(__storage + 8);
  }
  ::rs::alloc::ffi::NulError* err_ptr() noexcept {
    return reinterpret_cast<::rs::alloc::ffi::NulError*>(__storage);
  }
  ::rs::alloc::ffi::NulError const* err_const_ptr() const noexcept {
    return reinterpret_cast<::rs::alloc::ffi::NulError const*>(__storage);
  }
  void set_ok_tag() noexcept { set_tag(UINT64_C(18446744073709551615)); }
  void set_err_tag() noexcept {}
  constexpr ::std::uint64_t tag() const& noexcept;
  constexpr void set_tag(::std::uint64_t tag) noexcept;

 private:
  unsigned char __storage[32];
};
#endif

#ifndef _CRUBIT_BINDINGS_FOR_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020rs_x00000020_x0000003a_x0000003a_x00000020alloc_x00000020_x0000003a_x0000003a_x00000020string_x00000020_x0000003a_x0000003a_x00000020String_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020rs_x00000020_x0000003a_x0000003a_x00000020alloc_x00000020_x0000003a_x0000003a_x00000020ffi_x00000020_x0000003a_x0000003a_x00000020IntoStringError_x00000020_x0000003e
#define _CRUBIT_BINDINGS_FOR_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020rs_x00000020_x0000003a_x0000003a_x00000020alloc_x00000020_x0000003a_x0000003a_x00000020string_x00000020_x0000003a_x0000003a_x00000020String_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020rs_x00000020_x0000003a_x0000003a_x00000020alloc_x00000020_x0000003a_x0000003a_x00000020ffi_x00000020_x0000003a_x0000003a_x00000020IntoStringError_x00000020_x0000003e
template <>
struct alignas(8) CRUBIT_INTERNAL_RUST_TYPE(
    "core :: result :: Result < :: alloc :: string :: String , :: alloc :: ffi "
    ":: IntoStringError >") rs_std::Result<::rs::alloc::string::String,
                                           ::rs::alloc::ffi::IntoStringError>
    : public rs_std::ResultBase<
          rs_std::Result<::rs::alloc::string::String,
                         ::rs::alloc::ffi::IntoStringError>,
          ::rs::alloc::string::String, ::rs::alloc::ffi::IntoStringError> {
 public:
  // Clone::clone
  Result(const Result&) noexcept;

  // Clone::clone_from
  rs_std::Result<::rs::alloc::string::String,
                 ::rs::alloc::ffi::IntoStringError>&
  operator=(const Result&) noexcept;

  Result(::crubit::UnsafeRelocateTag, Result&& value);

 public:
  using base_type =
      rs_std::ResultBase<rs_std::Result<::rs::alloc::string::String,
                                        ::rs::alloc::ffi::IntoStringError>,
                         ::rs::alloc::string::String,
                         ::rs::alloc::ffi::IntoStringError>;
  template <typename U>
    requires(rs_std::ResultForwardConstructible<Result,
                                                ::rs::alloc::string::String, U>)
  explicit constexpr Result(U&& ok) noexcept;
  template <typename U>
    requires(rs_std::ResultForwardConstructible<Result,
                                                ::rs::alloc::string::String, U>)
  constexpr Result& operator=(U&& ok) noexcept;
  template <typename F>
    requires(rs_std::ResultUnexpectedConstructible<
             ::rs::alloc::ffi::IntoStringError, F>)
  explicit constexpr Result(rs_std::unexpected<F>&& err) noexcept;
  template <typename F>
    requires(rs_std::ResultUnexpectedConstructible<
             ::rs::alloc::ffi::IntoStringError, F>)
  constexpr Result& operator=(rs_std::unexpected<F>&& err) noexcept;
  template <typename... Args>
  explicit constexpr Result(::std::in_place_t ip, Args&&... args) noexcept;
  template <typename... Args>
  explicit constexpr Result(rs_std::unexpect_t u, Args&&... args) noexcept;
  ~Result() noexcept;

 private:
  friend base_type;
  bool has_value_impl() const noexcept { return tag() == 2; }
  ::rs::alloc::string::String* ok_ptr() noexcept {
    return reinterpret_cast<::rs::alloc::string::String*>(__storage + 0);
  }
  ::rs::alloc::string::String const* ok_const_ptr() const noexcept {
    return reinterpret_cast<::rs::alloc::string::String const*>(__storage + 0);
  }
  ::rs::alloc::ffi::IntoStringError* err_ptr() noexcept {
    return reinterpret_cast<::rs::alloc::ffi::IntoStringError*>(__storage);
  }
  ::rs::alloc::ffi::IntoStringError const* err_const_ptr() const noexcept {
    return reinterpret_cast<::rs::alloc::ffi::IntoStringError const*>(
        __storage);
  }
  void set_ok_tag() noexcept { set_tag(2); }
  void set_err_tag() noexcept {}
  constexpr ::std::uint8_t tag() const& noexcept;
  constexpr void set_tag(::std::uint8_t tag) noexcept;

 private:
  unsigned char __storage[32];
};
#endif

#ifndef _CRUBIT_BINDINGS_FOR_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020rs_x00000020_x0000003a_x0000003a_x00000020alloc_x00000020_x0000003a_x0000003a_x00000020string_x00000020_x0000003a_x0000003a_x00000020String_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020rs_x00000020_x0000003a_x0000003a_x00000020alloc_x00000020_x0000003a_x0000003a_x00000020string_x00000020_x0000003a_x0000003a_x00000020FromUtf16Error_x00000020_x0000003e
#define _CRUBIT_BINDINGS_FOR_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020rs_x00000020_x0000003a_x0000003a_x00000020alloc_x00000020_x0000003a_x0000003a_x00000020string_x00000020_x0000003a_x0000003a_x00000020String_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020rs_x00000020_x0000003a_x0000003a_x00000020alloc_x00000020_x0000003a_x0000003a_x00000020string_x00000020_x0000003a_x0000003a_x00000020FromUtf16Error_x00000020_x0000003e
template <>
struct alignas(8) CRUBIT_INTERNAL_RUST_TYPE(
    "core :: result :: Result < :: alloc :: string :: String , :: alloc :: "
    "string :: FromUtf16Error >")
    rs_std::Result<::rs::alloc::string::String,
                   ::rs::alloc::string::FromUtf16Error>
    : public rs_std::ResultBase<
          rs_std::Result<::rs::alloc::string::String,
                         ::rs::alloc::string::FromUtf16Error>,
          ::rs::alloc::string::String, ::rs::alloc::string::FromUtf16Error> {
 public:
  // `core::result::Result` doesn't implement the `Clone` trait
  Result(const Result&) = delete;
  Result& operator=(const Result&) = delete;
  // C++ move operations are unavailable for this type. See
  // http://crubit.rs/rust/movable_types for an explanation of Rust types that
  // are C++ movable.
  Result(Result&&) = delete;
  rs_std::Result<::rs::alloc::string::String,
                 ::rs::alloc::string::FromUtf16Error>&
  operator=(Result&&) = delete;
  Result(::crubit::UnsafeRelocateTag, Result&& value);

 public:
  using base_type =
      rs_std::ResultBase<rs_std::Result<::rs::alloc::string::String,
                                        ::rs::alloc::string::FromUtf16Error>,
                         ::rs::alloc::string::String,
                         ::rs::alloc::string::FromUtf16Error>;
  template <typename U>
    requires(rs_std::ResultForwardConstructible<Result,
                                                ::rs::alloc::string::String, U>)
  explicit constexpr Result(U&& ok) noexcept;
  template <typename U>
    requires(rs_std::ResultForwardConstructible<Result,
                                                ::rs::alloc::string::String, U>)
  constexpr Result& operator=(U&& ok) noexcept;
  template <typename F>
    requires(rs_std::ResultUnexpectedConstructible<
             ::rs::alloc::string::FromUtf16Error, F>)
  explicit constexpr Result(rs_std::unexpected<F>&& err) noexcept;
  template <typename F>
    requires(rs_std::ResultUnexpectedConstructible<
             ::rs::alloc::string::FromUtf16Error, F>)
  constexpr Result& operator=(rs_std::unexpected<F>&& err) noexcept;
  template <typename... Args>
  explicit constexpr Result(::std::in_place_t ip, Args&&... args) noexcept;
  template <typename... Args>
  explicit constexpr Result(rs_std::unexpect_t u, Args&&... args) noexcept;
  ~Result() noexcept;

 private:
  friend base_type;
  bool has_value_impl() const noexcept {
    return tag() != UINT64_C(18446744073709551615);
  }
  ::rs::alloc::string::String* ok_ptr() noexcept {
    return reinterpret_cast<::rs::alloc::string::String*>(__storage);
  }
  ::rs::alloc::string::String const* ok_const_ptr() const noexcept {
    return reinterpret_cast<::rs::alloc::string::String const*>(__storage);
  }
  ::rs::alloc::string::FromUtf16Error* err_ptr() noexcept {
    return reinterpret_cast<::rs::alloc::string::FromUtf16Error*>(__storage +
                                                                  8);
  }
  ::rs::alloc::string::FromUtf16Error const* err_const_ptr() const noexcept {
    return reinterpret_cast<::rs::alloc::string::FromUtf16Error const*>(
        __storage + 8);
  }
  void set_ok_tag() noexcept {}
  void set_err_tag() noexcept { set_tag(UINT64_C(18446744073709551615)); }
  constexpr ::std::uint64_t tag() const& noexcept;
  constexpr void set_tag(::std::uint64_t tag) noexcept;

 private:
  unsigned char __storage[24];
};
#endif

#ifndef _CRUBIT_BINDINGS_FOR_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020rs_x00000020_x0000003a_x0000003a_x00000020alloc_x00000020_x0000003a_x0000003a_x00000020string_x00000020_x0000003a_x0000003a_x00000020String_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020rs_x00000020_x0000003a_x0000003a_x00000020alloc_x00000020_x0000003a_x0000003a_x00000020string_x00000020_x0000003a_x0000003a_x00000020FromUtf8Error_x00000020_x0000003e
#define _CRUBIT_BINDINGS_FOR_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020rs_x00000020_x0000003a_x0000003a_x00000020alloc_x00000020_x0000003a_x0000003a_x00000020string_x00000020_x0000003a_x0000003a_x00000020String_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020rs_x00000020_x0000003a_x0000003a_x00000020alloc_x00000020_x0000003a_x0000003a_x00000020string_x00000020_x0000003a_x0000003a_x00000020FromUtf8Error_x00000020_x0000003e
template <>
struct alignas(8) CRUBIT_INTERNAL_RUST_TYPE(
    "core :: result :: Result < :: alloc :: string :: String , :: alloc :: "
    "string :: FromUtf8Error >")
    rs_std::Result<::rs::alloc::string::String,
                   ::rs::alloc::string::FromUtf8Error>
    : public rs_std::ResultBase<
          rs_std::Result<::rs::alloc::string::String,
                         ::rs::alloc::string::FromUtf8Error>,
          ::rs::alloc::string::String, ::rs::alloc::string::FromUtf8Error> {
 public:
  // Clone::clone
  Result(const Result&) noexcept;

  // Clone::clone_from
  rs_std::Result<::rs::alloc::string::String,
                 ::rs::alloc::string::FromUtf8Error>&
  operator=(const Result&) noexcept;

  Result(::crubit::UnsafeRelocateTag, Result&& value);

 public:
  using base_type =
      rs_std::ResultBase<rs_std::Result<::rs::alloc::string::String,
                                        ::rs::alloc::string::FromUtf8Error>,
                         ::rs::alloc::string::String,
                         ::rs::alloc::string::FromUtf8Error>;
  template <typename U>
    requires(rs_std::ResultForwardConstructible<Result,
                                                ::rs::alloc::string::String, U>)
  explicit constexpr Result(U&& ok) noexcept;
  template <typename U>
    requires(rs_std::ResultForwardConstructible<Result,
                                                ::rs::alloc::string::String, U>)
  constexpr Result& operator=(U&& ok) noexcept;
  template <typename F>
    requires(rs_std::ResultUnexpectedConstructible<
             ::rs::alloc::string::FromUtf8Error, F>)
  explicit constexpr Result(rs_std::unexpected<F>&& err) noexcept;
  template <typename F>
    requires(rs_std::ResultUnexpectedConstructible<
             ::rs::alloc::string::FromUtf8Error, F>)
  constexpr Result& operator=(rs_std::unexpected<F>&& err) noexcept;
  template <typename... Args>
  explicit constexpr Result(::std::in_place_t ip, Args&&... args) noexcept;
  template <typename... Args>
  explicit constexpr Result(rs_std::unexpect_t u, Args&&... args) noexcept;
  ~Result() noexcept;

 private:
  friend base_type;
  bool has_value_impl() const noexcept {
    return tag() == UINT64_C(18446744073709551615);
  }
  ::rs::alloc::string::String* ok_ptr() noexcept {
    return reinterpret_cast<::rs::alloc::string::String*>(__storage + 8);
  }
  ::rs::alloc::string::String const* ok_const_ptr() const noexcept {
    return reinterpret_cast<::rs::alloc::string::String const*>(__storage + 8);
  }
  ::rs::alloc::string::FromUtf8Error* err_ptr() noexcept {
    return reinterpret_cast<::rs::alloc::string::FromUtf8Error*>(__storage);
  }
  ::rs::alloc::string::FromUtf8Error const* err_const_ptr() const noexcept {
    return reinterpret_cast<::rs::alloc::string::FromUtf8Error const*>(
        __storage);
  }
  void set_ok_tag() noexcept { set_tag(UINT64_C(18446744073709551615)); }
  void set_err_tag() noexcept {}
  constexpr ::std::uint64_t tag() const& noexcept;
  constexpr void set_tag(::std::uint64_t tag) noexcept;

 private:
  unsigned char __storage[40];
};
#endif

namespace rs::alloc::alloc {

namespace __crubit_internal {
extern "C" ::std::uint8_t*
__crubit_thunk_7b344df938a8cdb9__uRNvNtCsazOrLUIp1qL_u5alloc5alloc5allocCsh9G4tFjYpDL_u8rust_uout(
    ::rs::core::alloc::Layout*);
}
inline ::std::uint8_t* alloc(::rs::core::alloc::Layout layout) {
  return __crubit_internal::
      __crubit_thunk_7b344df938a8cdb9__uRNvNtCsazOrLUIp1qL_u5alloc5alloc5allocCsh9G4tFjYpDL_u8rust_uout(
          &layout);
}

namespace __crubit_internal {
extern "C" ::std::uint8_t*
__crubit_thunk_7b344df938a8cdb9__uRNvNtCsazOrLUIp1qL_u5alloc5alloc12alloc_uzeroedCsh9G4tFjYpDL_u8rust_uout(
    ::rs::core::alloc::Layout*);
}
inline ::std::uint8_t* alloc_zeroed(::rs::core::alloc::Layout layout) {
  return __crubit_internal::
      __crubit_thunk_7b344df938a8cdb9__uRNvNtCsazOrLUIp1qL_u5alloc5alloc12alloc_uzeroedCsh9G4tFjYpDL_u8rust_uout(
          &layout);
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_7b344df938a8cdb9__uRNvNtCsazOrLUIp1qL_u5alloc5alloc7deallocCsh9G4tFjYpDL_u8rust_uout(
    ::std::uint8_t*, ::rs::core::alloc::Layout*);
}
inline void dealloc(::std::uint8_t* ptr, ::rs::core::alloc::Layout layout) {
  return __crubit_internal::
      __crubit_thunk_7b344df938a8cdb9__uRNvNtCsazOrLUIp1qL_u5alloc5alloc7deallocCsh9G4tFjYpDL_u8rust_uout(
          ptr, &layout);
}

namespace __crubit_internal {
extern "C" [[noreturn]] void
__crubit_thunk_7b344df938a8cdb9__uRNvNtCsazOrLUIp1qL_u5alloc5alloc18handle_ualloc_uerror(
    ::rs::core::alloc::Layout*);
}
inline void handle_alloc_error(::rs::core::alloc::Layout layout) {
  __crubit_internal::
      __crubit_thunk_7b344df938a8cdb9__uRNvNtCsazOrLUIp1qL_u5alloc5alloc18handle_ualloc_uerror(
          &layout);
}

namespace __crubit_internal {
extern "C" ::std::uint8_t*
__crubit_thunk_7b344df938a8cdb9__uRNvNtCsazOrLUIp1qL_u5alloc5alloc7reallocCsh9G4tFjYpDL_u8rust_uout(
    ::std::uint8_t*, ::rs::core::alloc::Layout*, ::std::uintptr_t);
}
inline ::std::uint8_t* realloc(::std::uint8_t* ptr,
                               ::rs::core::alloc::Layout layout,
                               ::std::uintptr_t new_size) {
  return __crubit_internal::
      __crubit_thunk_7b344df938a8cdb9__uRNvNtCsazOrLUIp1qL_u5alloc5alloc7reallocCsh9G4tFjYpDL_u8rust_uout(
          ptr, &layout, new_size);
}

}  // namespace rs::alloc::alloc

namespace rs::alloc::collections {

static_assert(
    sizeof(::rs::alloc::collections::TryReserveError) == 16,
    "Verify that ADT layout didn't change since this header got generated");
static_assert(
    alignof(::rs::alloc::collections::TryReserveError) == 8,
    "Verify that ADT layout didn't change since this header got generated");
static_assert(::std::is_trivially_destructible_v<
              ::rs::alloc::collections::TryReserveError>);
static_assert(::std::is_trivially_move_constructible_v<
              ::rs::alloc::collections::TryReserveError>);
static_assert(::std::is_trivially_move_assignable_v<
              ::rs::alloc::collections::TryReserveError>);
namespace __crubit_internal {
extern "C" void
__crubit_thunk_7b344df938a8cdb9__uRNvYNtNtCsazOrLUIp1qL_u5alloc11collections15TryReserveErrorNtNtCsoHVEWV6jqw_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    ::rs::alloc::collections::TryReserveError const&,
    ::rs::alloc::collections::TryReserveError* __ret_ptr);
}
namespace __crubit_internal {
extern "C" void
__crubit_thunk_7b344df938a8cdb9__uRNvYNtNtCsazOrLUIp1qL_u5alloc11collections15TryReserveErrorNtNtCsoHVEWV6jqw_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    ::rs::alloc::collections::TryReserveError&,
    ::rs::alloc::collections::TryReserveError const&);
}
inline ::rs::alloc::collections::TryReserveError::TryReserveError(
    const TryReserveError& other) noexcept {
  __crubit_internal::
      __crubit_thunk_7b344df938a8cdb9__uRNvYNtNtCsazOrLUIp1qL_u5alloc11collections15TryReserveErrorNtNtCsoHVEWV6jqw_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
          other, this);
}
inline ::rs::alloc::collections::TryReserveError& ::rs::alloc::collections::
    TryReserveError::operator=(const TryReserveError& other) noexcept {
  if (this != &other) {
    __crubit_internal::
        __crubit_thunk_7b344df938a8cdb9__uRNvYNtNtCsazOrLUIp1qL_u5alloc11collections15TryReserveErrorNtNtCsoHVEWV6jqw_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
            *this, other);
  }
  return *this;
}
inline ::rs::alloc::collections::TryReserveError::TryReserveError(
    ::crubit::UnsafeRelocateTag, TryReserveError&& value) {
  ::std::memcpy(this, &value, sizeof(value));
}

namespace __crubit_internal {
extern "C" bool
__crubit_thunk_7b344df938a8cdb9__uRNvXs6_uNtCsazOrLUIp1qL_u5alloc11collectionsNtB5_u15TryReserveErrorNtNtCsoHVEWV6jqw_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
    ::rs::alloc::collections::TryReserveError const&,
    ::rs::alloc::collections::TryReserveError const&);
}
inline bool(TryReserveError::operator==)(
    ::rs::alloc::collections::TryReserveError const& other) const {
  auto&& self = *this;
  return __crubit_internal::
      __crubit_thunk_7b344df938a8cdb9__uRNvXs6_uNtCsazOrLUIp1qL_u5alloc11collectionsNtB5_u15TryReserveErrorNtNtCsoHVEWV6jqw_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
          self, other);
}
extern "C" void
__crubit_thunk_7b344df938a8cdb9__uRNvYNtNtCsazOrLUIp1qL_u5alloc11collections15TryReserveErrorNtNtB6_u6string8ToString9to_ustringCsh9G4tFjYpDL_u8rust_uout(
    ::rs::alloc::collections::TryReserveError const&,
    ::rs::alloc::string::String* __ret_ptr);
inline void ::rs::alloc::collections::TryReserveError::
    __crubit_field_offset_assertions() {
  using __crubit_assert_type = ::rs::alloc::collections::TryReserveError;
  static_assert(0 == offsetof(__crubit_assert_type, kind));
}
}  // namespace rs::alloc::collections

namespace rs::alloc::ffi::c_str {

//  A type representing an owned, C-compatible, nul-terminated string with no
//  nul bytes in the middle.
//
//  This type serves the purpose of being able to safely generate a
//  C-compatible string from a Rust byte slice or vector. An instance of this
//  type is a static guarantee that the underlying bytes contain no interior 0
//  bytes ("nul characters") and that the final byte is 0 ("nul terminator").
//
//  `CString` is to <code>&[CStr]</code> as [`String`] is to
//  <code>&[str]</code>: the former in each pair are owned strings; the latter
//  are borrowed references.
//
//  # Creating a `CString`
//
//  A `CString` is created from either a byte slice or a byte vector,
//  or anything that implements <code>[Into]<[Vec]<[u8]>></code> (for
//  example, you can build a `CString` straight out of a [`String`] or
//  a <code>&[str]</code>, since both implement that trait).
//  You can create a `CString` from a literal with `CString::from(c"Text")`.
//
//  The [`CString::new`] method will actually check that the provided
//  <code>&[[u8]]</code> does not have 0 bytes in the middle, and return an
//  error if it finds one.
//
//  # Extracting a raw pointer to the whole C string
//
//  `CString` implements an [`as_ptr`][`CStr::as_ptr`] method through the
//  [`Deref`] trait. This method will give you a `*const c_char` which you can
//  feed directly to extern functions that expect a nul-terminated
//  string, like C's `strdup()`. Notice that [`as_ptr`][`CStr::as_ptr`] returns
//  a read-only pointer; if the C code writes to it, that causes undefined
//  behavior.
//
//  # Extracting a slice of the whole C string
//
//  Alternatively, you can obtain a <code>&[[u8]]</code> slice from a
//  `CString` with the [`CString::as_bytes`] method. Slices produced in this
//  way do *not* contain the trailing nul terminator. This is useful
//  when you will be calling an extern function that takes a `*const
//  u8` argument which is not necessarily nul-terminated, plus another
//  argument with the length of the string — like C's `strndup()`.
//  You can of course get the slice's length with its
//  [`len`][slice::len] method.
//
//  If you need a <code>&[[u8]]</code> slice *with* the nul terminator, you
//  can use [`CString::as_bytes_with_nul`] instead.
//
//  Once you have the kind of slice you need (with or without a nul
//  terminator), you can call the slice's own
//  [`as_ptr`][slice::as_ptr] method to get a read-only raw pointer to pass to
//  extern functions. See the documentation for that function for a
//  discussion on ensuring the lifetime of the raw pointer.
//
//  [str]: prim@str "str"
//  [`Deref`]: ops::Deref
//
//  # Examples
//
//  ```ignore (extern-declaration)
//  # fn main() {
//  use std::ffi::CString;
//  use std::os::raw::c_char;
//
//  extern "C" {
//      fn my_printer(s: *const c_char);
//  }
//
//  // We are certain that our string doesn't have 0 bytes in the middle,
//  // so we can .expect()
//  let c_to_print = CString::new("Hello, world!").expect("we provided a string
//  without NUL bytes, so CString::new should not fail"); unsafe {
//      my_printer(c_to_print.as_ptr());
//  }
//  # }
//  ```
//
//  # Safety
//
//  `CString` is intended for working with traditional C-style strings
//  (a sequence of non-nul bytes terminated by a single nul byte); the
//  primary use case for these kinds of strings is interoperating with C-like
//  code. Often you will need to transfer ownership to/from that external
//  code. It is strongly recommended that you thoroughly read through the
//  documentation of `CString` before use, as improper ownership management
//  of `CString` instances can lead to invalid memory accesses, memory leaks,
//  and other memory errors.
//
// Generated from: library/alloc/src/ffi/c_str.rs;l=109
using CString CRUBIT_INTERNAL_RUST_TYPE(":: alloc :: ffi :: CString") =
    ::rs::alloc::ffi::CString;
}  // namespace rs::alloc::ffi::c_str

namespace rs::alloc::ffi {

static_assert(
    sizeof(::rs::alloc::ffi::CString) == 16,
    "Verify that ADT layout didn't change since this header got generated");
static_assert(
    alignof(::rs::alloc::ffi::CString) == 8,
    "Verify that ADT layout didn't change since this header got generated");
namespace __crubit_internal {
extern "C" void
__crubit_thunk_7b344df938a8cdb9__uRNvYNtNtNtCsazOrLUIp1qL_u5alloc3ffi5c_ustr7CStringNtNtCsoHVEWV6jqw_u4core7default7Default7defaultCsh9G4tFjYpDL_u8rust_uout(
    ::rs::alloc::ffi::CString* __ret_ptr);
}
inline ::rs::alloc::ffi::CString::CString() {
  __crubit_internal::
      __crubit_thunk_7b344df938a8cdb9__uRNvYNtNtNtCsazOrLUIp1qL_u5alloc3ffi5c_ustr7CStringNtNtCsoHVEWV6jqw_u4core7default7Default7defaultCsh9G4tFjYpDL_u8rust_uout(
          this);
}
namespace __crubit_internal {
extern "C" void
__crubit_thunk_7b344df938a8cdb9__uRNvYNtNtNtCsazOrLUIp1qL_u5alloc3ffi5c_ustr7CStringNtNtNtCsoHVEWV6jqw_u4core3ops4drop4Drop4dropCsh9G4tFjYpDL_u8rust_uout(
    ::rs::alloc::ffi::CString&);
}
inline ::rs::alloc::ffi::CString::~CString() {
  __crubit_internal::
      __crubit_thunk_7b344df938a8cdb9__uRNvYNtNtNtCsazOrLUIp1qL_u5alloc3ffi5c_ustr7CStringNtNtNtCsoHVEWV6jqw_u4core3ops4drop4Drop4dropCsh9G4tFjYpDL_u8rust_uout(
          *this);
}
inline ::rs::alloc::ffi::CString::CString(CString&& other) noexcept
    : CString() {
  *this = ::std::move(other);
}
inline ::rs::alloc::ffi::CString& ::rs::alloc::ffi::CString::operator=(
    CString&& other) noexcept {
  crubit::MemSwap(*this, other);
  return *this;
}
namespace __crubit_internal {
extern "C" void
__crubit_thunk_7b344df938a8cdb9__uRNvYNtNtNtCsazOrLUIp1qL_u5alloc3ffi5c_ustr7CStringNtNtCsoHVEWV6jqw_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    ::rs::alloc::ffi::CString const&, ::rs::alloc::ffi::CString* __ret_ptr);
}
namespace __crubit_internal {
extern "C" void
__crubit_thunk_7b344df938a8cdb9__uRNvYNtNtNtCsazOrLUIp1qL_u5alloc3ffi5c_ustr7CStringNtNtCsoHVEWV6jqw_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    ::rs::alloc::ffi::CString&, ::rs::alloc::ffi::CString const&);
}
inline ::rs::alloc::ffi::CString::CString(const CString& other) noexcept {
  __crubit_internal::
      __crubit_thunk_7b344df938a8cdb9__uRNvYNtNtNtCsazOrLUIp1qL_u5alloc3ffi5c_ustr7CStringNtNtCsoHVEWV6jqw_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
          other, this);
}
inline ::rs::alloc::ffi::CString& ::rs::alloc::ffi::CString::operator=(
    const CString& other) noexcept {
  if (this != &other) {
    __crubit_internal::
        __crubit_thunk_7b344df938a8cdb9__uRNvYNtNtNtCsazOrLUIp1qL_u5alloc3ffi5c_ustr7CStringNtNtCsoHVEWV6jqw_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
            *this, other);
  }
  return *this;
}
inline ::rs::alloc::ffi::CString::CString(::crubit::UnsafeRelocateTag,
                                          CString&& value) {
  ::std::memcpy(this, &value, sizeof(value));
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_7b344df938a8cdb9__uRINvMs_uNtNtCsazOrLUIp1qL_u5alloc3ffi5c_ustrNtB5_u7CString3newINtNtB9_u3vec3VechEECsh9G4tFjYpDL_u8rust_uout(
    rs_std::Vec<::std::uint8_t>*,
    rs_std::Result<::rs::alloc::ffi::CString, ::rs::alloc::ffi::NulError>*
        __ret_ptr);
}
inline rs_std::Result<::rs::alloc::ffi::CString, ::rs::alloc::ffi::NulError>(
    CString::new_)(rs_std::Vec<::std::uint8_t> t) {
  crubit::Slot t_slot((::std::move(t)));
  crubit::Slot<
      rs_std::Result<::rs::alloc::ffi::CString, ::rs::alloc::ffi::NulError>>
      __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_7b344df938a8cdb9__uRINvMs_uNtNtCsazOrLUIp1qL_u5alloc3ffi5c_ustrNtB5_u7CString3newINtNtB9_u3vec3VechEECsh9G4tFjYpDL_u8rust_uout(
          t_slot.Get(), __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_7b344df938a8cdb9__uRNvMs_uNtNtCsazOrLUIp1qL_u5alloc3ffi5c_ustrNtB4_u7CString18from_uvec_uunchecked(
    rs_std::Vec<::std::uint8_t>*, ::rs::alloc::ffi::CString* __ret_ptr);
}
inline ::rs::alloc::ffi::CString(CString::from_vec_unchecked)(
    rs_std::Vec<::std::uint8_t> v) {
  crubit::Slot v_slot((::std::move(v)));
  crubit::Slot<::rs::alloc::ffi::CString> __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_7b344df938a8cdb9__uRNvMs_uNtNtCsazOrLUIp1qL_u5alloc3ffi5c_ustrNtB4_u7CString18from_uvec_uunchecked(
          v_slot.Get(), __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_7b344df938a8cdb9__uRNvMs_uNtNtCsazOrLUIp1qL_u5alloc3ffi5c_ustrNtB4_u7CString8from_uraw(
    ::std::int8_t*, ::rs::alloc::ffi::CString* __ret_ptr);
}
inline ::rs::alloc::ffi::CString(CString::from_raw)(::std::int8_t* ptr) {
  crubit::Slot<::rs::alloc::ffi::CString> __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_7b344df938a8cdb9__uRNvMs_uNtNtCsazOrLUIp1qL_u5alloc3ffi5c_ustrNtB4_u7CString8from_uraw(
          ptr, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" ::std::int8_t*
__crubit_thunk_7b344df938a8cdb9__uRNvMs_uNtNtCsazOrLUIp1qL_u5alloc3ffi5c_ustrNtB4_u7CString8into_urawCsh9G4tFjYpDL_u8rust_uout(
    ::rs::alloc::ffi::CString*);
}
inline ::std::int8_t*(CString::into_raw)() && {
  auto&& self = *this;
  crubit::Slot self_slot((::std::move(self)));
  return __crubit_internal::
      __crubit_thunk_7b344df938a8cdb9__uRNvMs_uNtNtCsazOrLUIp1qL_u5alloc3ffi5c_ustrNtB4_u7CString8into_urawCsh9G4tFjYpDL_u8rust_uout(
          self_slot.Get());
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_7b344df938a8cdb9__uRNvMs_uNtNtCsazOrLUIp1qL_u5alloc3ffi5c_ustrNtB4_u7CString11into_ustring(
    ::rs::alloc::ffi::CString*,
    rs_std::Result<::rs::alloc::string::String,
                   ::rs::alloc::ffi::IntoStringError>* __ret_ptr);
}
inline rs_std::Result<::rs::alloc::string::String,
                      ::rs::alloc::ffi::IntoStringError>(
    CString::into_string)() && {
  auto&& self = *this;
  crubit::Slot self_slot((::std::move(self)));
  crubit::Slot<rs_std::Result<::rs::alloc::string::String,
                              ::rs::alloc::ffi::IntoStringError>>
      __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_7b344df938a8cdb9__uRNvMs_uNtNtCsazOrLUIp1qL_u5alloc3ffi5c_ustrNtB4_u7CString11into_ustring(
          self_slot.Get(), __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_7b344df938a8cdb9__uRNvMs_uNtNtCsazOrLUIp1qL_u5alloc3ffi5c_ustrNtB4_u7CString10into_ubytes(
    ::rs::alloc::ffi::CString*, rs_std::Vec<::std::uint8_t>* __ret_ptr);
}
inline rs_std::Vec<::std::uint8_t>(CString::into_bytes)() && {
  auto&& self = *this;
  crubit::Slot self_slot((::std::move(self)));
  crubit::Slot<rs_std::Vec<::std::uint8_t>> __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_7b344df938a8cdb9__uRNvMs_uNtNtCsazOrLUIp1qL_u5alloc3ffi5c_ustrNtB4_u7CString10into_ubytes(
          self_slot.Get(), __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_7b344df938a8cdb9__uRNvMs_uNtNtCsazOrLUIp1qL_u5alloc3ffi5c_ustrNtB4_u7CString19into_ubytes_uwith_unul(
    ::rs::alloc::ffi::CString*, rs_std::Vec<::std::uint8_t>* __ret_ptr);
}
inline rs_std::Vec<::std::uint8_t>(CString::into_bytes_with_nul)() && {
  auto&& self = *this;
  crubit::Slot self_slot((::std::move(self)));
  crubit::Slot<rs_std::Vec<::std::uint8_t>> __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_7b344df938a8cdb9__uRNvMs_uNtNtCsazOrLUIp1qL_u5alloc3ffi5c_ustrNtB4_u7CString19into_ubytes_uwith_unul(
          self_slot.Get(), __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_7b344df938a8cdb9__uRNvMs_uNtNtCsazOrLUIp1qL_u5alloc3ffi5c_ustrNtB4_u7CString8as_ubytesCsh9G4tFjYpDL_u8rust_uout(
    ::rs::alloc::ffi::CString const&,
    rs_std::SliceRef<const ::std::uint8_t>* __ret_ptr);
}
inline rs_std::SliceRef<const ::std::uint8_t>(CString::as_bytes)() const& $(
    __anon1) CRUBIT_LIFETIME_BOUND {
  auto&& self = *this;
  crubit::Slot<rs_std::SliceRef<const ::std::uint8_t>>
      __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_7b344df938a8cdb9__uRNvMs_uNtNtCsazOrLUIp1qL_u5alloc3ffi5c_ustrNtB4_u7CString8as_ubytesCsh9G4tFjYpDL_u8rust_uout(
          self, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_7b344df938a8cdb9__uRNvMs_uNtNtCsazOrLUIp1qL_u5alloc3ffi5c_ustrNtB4_u7CString17as_ubytes_uwith_unulCsh9G4tFjYpDL_u8rust_uout(
    ::rs::alloc::ffi::CString const&,
    rs_std::SliceRef<const ::std::uint8_t>* __ret_ptr);
}
inline rs_std::SliceRef<const ::std::uint8_t>(
    CString::as_bytes_with_nul)() const& $(__anon1) CRUBIT_LIFETIME_BOUND {
  auto&& self = *this;
  crubit::Slot<rs_std::SliceRef<const ::std::uint8_t>>
      __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_7b344df938a8cdb9__uRNvMs_uNtNtCsazOrLUIp1qL_u5alloc3ffi5c_ustrNtB4_u7CString17as_ubytes_uwith_unulCsh9G4tFjYpDL_u8rust_uout(
          self, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_7b344df938a8cdb9__uRNvMs_uNtNtCsazOrLUIp1qL_u5alloc3ffi5c_ustrNtB4_u7CString27from_uvec_uwith_unul_uunchecked(
    rs_std::Vec<::std::uint8_t>*, ::rs::alloc::ffi::CString* __ret_ptr);
}
inline ::rs::alloc::ffi::CString(CString::from_vec_with_nul_unchecked)(
    rs_std::Vec<::std::uint8_t> v) {
  crubit::Slot v_slot((::std::move(v)));
  crubit::Slot<::rs::alloc::ffi::CString> __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_7b344df938a8cdb9__uRNvMs_uNtNtCsazOrLUIp1qL_u5alloc3ffi5c_ustrNtB4_u7CString27from_uvec_uwith_unul_uunchecked(
          v_slot.Get(), __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_7b344df938a8cdb9__uRNvMs_uNtNtCsazOrLUIp1qL_u5alloc3ffi5c_ustrNtB4_u7CString17from_uvec_uwith_unul(
    rs_std::Vec<::std::uint8_t>*,
    rs_std::Result<::rs::alloc::ffi::CString,
                   ::rs::alloc::ffi::FromVecWithNulError>* __ret_ptr);
}
inline rs_std::Result<::rs::alloc::ffi::CString,
                      ::rs::alloc::ffi::FromVecWithNulError>(
    CString::from_vec_with_nul)(rs_std::Vec<::std::uint8_t> v) {
  crubit::Slot v_slot((::std::move(v)));
  crubit::Slot<rs_std::Result<::rs::alloc::ffi::CString,
                              ::rs::alloc::ffi::FromVecWithNulError>>
      __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_7b344df938a8cdb9__uRNvMs_uNtNtCsazOrLUIp1qL_u5alloc3ffi5c_ustrNtB4_u7CString17from_uvec_uwith_unul(
          v_slot.Get(), __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}
namespace __crubit_internal {
extern "C" void
__crubit_thunk_7b344df938a8cdb9__uRNvYNtNtNtCsazOrLUIp1qL_u5alloc3ffi5c_ustr7CStringINtNtCsoHVEWV6jqw_u4core7convert4IntoINtNtB8_u3vec3VechEE4intoCsh9G4tFjYpDL_u8rust_uout(
    ::rs::alloc::ffi::CString*, rs_std::Vec<::std::uint8_t>* __ret_ptr);
}
inline ::rs::alloc::ffi::CString::operator rs_std::Vec<::std::uint8_t>() {
  auto&& self = *this;
  crubit::Slot self_slot((::std::move(self)));
  crubit::Slot<rs_std::Vec<::std::uint8_t>> __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_7b344df938a8cdb9__uRNvYNtNtNtCsazOrLUIp1qL_u5alloc3ffi5c_ustr7CStringINtNtCsoHVEWV6jqw_u4core7convert4IntoINtNtB8_u3vec3VechEE4intoCsh9G4tFjYpDL_u8rust_uout(
          self_slot.Get(), __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}
namespace __crubit_internal {
extern "C" bool
__crubit_thunk_7b344df938a8cdb9__uRNvXsN_uNtNtCsazOrLUIp1qL_u5alloc3ffi5c_ustrNtB5_u7CStringNtNtCsoHVEWV6jqw_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
    ::rs::alloc::ffi::CString const&, ::rs::alloc::ffi::CString const&);
}
inline bool(CString::operator==)(::rs::alloc::ffi::CString const& other) const {
  auto&& self = *this;
  return __crubit_internal::
      __crubit_thunk_7b344df938a8cdb9__uRNvXsN_uNtNtCsazOrLUIp1qL_u5alloc3ffi5c_ustrNtB5_u7CStringNtNtCsoHVEWV6jqw_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
          self, other);
}
namespace __crubit_internal {
extern "C" ::std::uint64_t
__crubit_thunk_7b344df938a8cdb9__uRNvYNtNtNtCsazOrLUIp1qL_u5alloc3ffi5c_ustr7CStringNtNtCsoHVEWV6jqw_u4core4hash4Hash4hashCsh9G4tFjYpDL_u8rust_uout(
    ::rs::alloc::ffi::CString const&);
}
template <typename H>
inline H AbslHashValue(H h, const ::rs::alloc::ffi::CString& self) {
  return H::combine(
      ::std::move(h),
      __crubit_internal::
          __crubit_thunk_7b344df938a8cdb9__uRNvYNtNtNtCsazOrLUIp1qL_u5alloc3ffi5c_ustr7CStringNtNtCsoHVEWV6jqw_u4core4hash4Hash4hashCsh9G4tFjYpDL_u8rust_uout(
              self));
}
namespace __crubit_internal {
extern "C" ::std::int8_t
__crubit_thunk_7b344df938a8cdb9__uRNvYNtNtNtCsazOrLUIp1qL_u5alloc3ffi5c_ustr7CStringNtNtCsoHVEWV6jqw_u4core3cmp3Ord3cmpCsh9G4tFjYpDL_u8rust_uout(
    ::rs::alloc::ffi::CString const&, ::rs::alloc::ffi::CString const&);
}
inline ::std::strong_ordering(::rs::alloc::ffi::CString::operator<=>)(
    const CString& other) const {
  auto val = __crubit_internal::
      __crubit_thunk_7b344df938a8cdb9__uRNvYNtNtNtCsazOrLUIp1qL_u5alloc3ffi5c_ustr7CStringNtNtCsoHVEWV6jqw_u4core3cmp3Ord3cmpCsh9G4tFjYpDL_u8rust_uout(
          *this, other);
  switch (val) {
    case -1:
      return ::std::strong_ordering::less;
    case 0:
      return ::std::strong_ordering::equal;
    case 1:
      return ::std::strong_ordering::greater;
    default:
      CRUBIT_UNREACHABLE();
  }
}
inline void ::rs::alloc::ffi::CString::__crubit_field_offset_assertions() {
  using __crubit_assert_type = ::rs::alloc::ffi::CString;
  static_assert(0 == offsetof(__crubit_assert_type, inner));
}
}  // namespace rs::alloc::ffi

namespace rs::alloc::ffi::c_str {

//  An error indicating that a nul byte was not in the expected position.
//
//  The vector used to create a [`CString`] must have one and only one nul byte,
//  positioned at the end.
//
//  This error is created by the [`CString::from_vec_with_nul`] method.
//  See its documentation for more.
//
//  # Examples
//
//  ```
//  use std::ffi::{CString, FromVecWithNulError};
//
//  let _: FromVecWithNulError =
//  CString::from_vec_with_nul(b"f\\0oo".to_vec()).unwrap_err();
//  ```
//
// Generated from: library/alloc/src/ffi/c_str.rs;l=158
using FromVecWithNulError CRUBIT_INTERNAL_RUST_TYPE(
    ":: alloc :: ffi :: FromVecWithNulError") =
    ::rs::alloc::ffi::FromVecWithNulError;
}  // namespace rs::alloc::ffi::c_str

namespace rs::alloc::ffi {

static_assert(
    sizeof(::rs::alloc::ffi::FromVecWithNulError) == 40,
    "Verify that ADT layout didn't change since this header got generated");
static_assert(
    alignof(::rs::alloc::ffi::FromVecWithNulError) == 8,
    "Verify that ADT layout didn't change since this header got generated");
namespace __crubit_internal {
extern "C" void
__crubit_thunk_7b344df938a8cdb9__uRNvYNtNtNtCsazOrLUIp1qL_u5alloc3ffi5c_ustr19FromVecWithNulErrorNtNtNtCsoHVEWV6jqw_u4core3ops4drop4Drop4dropCsh9G4tFjYpDL_u8rust_uout(
    ::rs::alloc::ffi::FromVecWithNulError&);
}
inline ::rs::alloc::ffi::FromVecWithNulError::~FromVecWithNulError() {
  __crubit_internal::
      __crubit_thunk_7b344df938a8cdb9__uRNvYNtNtNtCsazOrLUIp1qL_u5alloc3ffi5c_ustr19FromVecWithNulErrorNtNtNtCsoHVEWV6jqw_u4core3ops4drop4Drop4dropCsh9G4tFjYpDL_u8rust_uout(
          *this);
}
namespace __crubit_internal {
extern "C" void
__crubit_thunk_7b344df938a8cdb9__uRNvYNtNtNtCsazOrLUIp1qL_u5alloc3ffi5c_ustr19FromVecWithNulErrorNtNtCsoHVEWV6jqw_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    ::rs::alloc::ffi::FromVecWithNulError const&,
    ::rs::alloc::ffi::FromVecWithNulError* __ret_ptr);
}
namespace __crubit_internal {
extern "C" void
__crubit_thunk_7b344df938a8cdb9__uRNvYNtNtNtCsazOrLUIp1qL_u5alloc3ffi5c_ustr19FromVecWithNulErrorNtNtCsoHVEWV6jqw_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    ::rs::alloc::ffi::FromVecWithNulError&,
    ::rs::alloc::ffi::FromVecWithNulError const&);
}
inline ::rs::alloc::ffi::FromVecWithNulError::FromVecWithNulError(
    const FromVecWithNulError& other) noexcept {
  __crubit_internal::
      __crubit_thunk_7b344df938a8cdb9__uRNvYNtNtNtCsazOrLUIp1qL_u5alloc3ffi5c_ustr19FromVecWithNulErrorNtNtCsoHVEWV6jqw_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
          other, this);
}
inline ::rs::alloc::ffi::FromVecWithNulError& ::rs::alloc::ffi::
    FromVecWithNulError::operator=(const FromVecWithNulError& other) noexcept {
  if (this != &other) {
    __crubit_internal::
        __crubit_thunk_7b344df938a8cdb9__uRNvYNtNtNtCsazOrLUIp1qL_u5alloc3ffi5c_ustr19FromVecWithNulErrorNtNtCsoHVEWV6jqw_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
            *this, other);
  }
  return *this;
}
inline ::rs::alloc::ffi::FromVecWithNulError::FromVecWithNulError(
    ::crubit::UnsafeRelocateTag, FromVecWithNulError&& value) {
  ::std::memcpy(this, &value, sizeof(value));
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_7b344df938a8cdb9__uRNvMNtNtCsazOrLUIp1qL_u5alloc3ffi5c_ustrNtB2_u19FromVecWithNulError8as_ubytesCsh9G4tFjYpDL_u8rust_uout(
    ::rs::alloc::ffi::FromVecWithNulError const&,
    rs_std::SliceRef<const ::std::uint8_t>* __ret_ptr);
}
inline rs_std::SliceRef<const ::std::uint8_t>(
    FromVecWithNulError::as_bytes)() const& $(__anon1) CRUBIT_LIFETIME_BOUND {
  auto&& self = *this;
  crubit::Slot<rs_std::SliceRef<const ::std::uint8_t>>
      __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_7b344df938a8cdb9__uRNvMNtNtCsazOrLUIp1qL_u5alloc3ffi5c_ustrNtB2_u19FromVecWithNulError8as_ubytesCsh9G4tFjYpDL_u8rust_uout(
          self, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_7b344df938a8cdb9__uRNvMNtNtCsazOrLUIp1qL_u5alloc3ffi5c_ustrNtB2_u19FromVecWithNulError10into_ubytesCsh9G4tFjYpDL_u8rust_uout(
    ::rs::alloc::ffi::FromVecWithNulError*,
    rs_std::Vec<::std::uint8_t>* __ret_ptr);
}
inline rs_std::Vec<::std::uint8_t>(FromVecWithNulError::into_bytes)() && {
  auto&& self = *this;
  crubit::Slot self_slot((::std::move(self)));
  crubit::Slot<rs_std::Vec<::std::uint8_t>> __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_7b344df938a8cdb9__uRNvMNtNtCsazOrLUIp1qL_u5alloc3ffi5c_ustrNtB2_u19FromVecWithNulError10into_ubytesCsh9G4tFjYpDL_u8rust_uout(
          self_slot.Get(), __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" bool
__crubit_thunk_7b344df938a8cdb9__uRNvXs15_uNtNtCsazOrLUIp1qL_u5alloc3ffi5c_ustrNtB6_u19FromVecWithNulErrorNtNtCsoHVEWV6jqw_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
    ::rs::alloc::ffi::FromVecWithNulError const&,
    ::rs::alloc::ffi::FromVecWithNulError const&);
}
inline bool(FromVecWithNulError::operator==)(
    ::rs::alloc::ffi::FromVecWithNulError const& other) const {
  auto&& self = *this;
  return __crubit_internal::
      __crubit_thunk_7b344df938a8cdb9__uRNvXs15_uNtNtCsazOrLUIp1qL_u5alloc3ffi5c_ustrNtB6_u19FromVecWithNulErrorNtNtCsoHVEWV6jqw_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
          self, other);
}
extern "C" void
__crubit_thunk_7b344df938a8cdb9__uRNvYNtNtNtCsazOrLUIp1qL_u5alloc3ffi5c_ustr19FromVecWithNulErrorNtNtB8_u6string8ToString9to_ustringCsh9G4tFjYpDL_u8rust_uout(
    ::rs::alloc::ffi::FromVecWithNulError const&,
    ::rs::alloc::string::String* __ret_ptr);
inline void ::rs::alloc::ffi::FromVecWithNulError::
    __crubit_field_offset_assertions() {
  using __crubit_assert_type = ::rs::alloc::ffi::FromVecWithNulError;
  static_assert(0 == offsetof(__crubit_assert_type, error_kind));
  static_assert(16 == offsetof(__crubit_assert_type, bytes));
}
}  // namespace rs::alloc::ffi

namespace rs::alloc::ffi::c_str {

//  An error indicating invalid UTF-8 when converting a [`CString`] into a
//  [`String`].
//
//  `CString` is just a wrapper over a buffer of bytes with a nul terminator;
//  [`CString::into_string`] performs UTF-8 validation on those bytes and may
//  return this error.
//
//  This `struct` is created by [`CString::into_string()`]. See
//  its documentation for more.
//
// Generated from: library/alloc/src/ffi/c_str.rs;l=224
using IntoStringError CRUBIT_INTERNAL_RUST_TYPE(
    ":: alloc :: ffi :: IntoStringError") = ::rs::alloc::ffi::IntoStringError;
}  // namespace rs::alloc::ffi::c_str

namespace rs::alloc::ffi {

static_assert(
    sizeof(::rs::alloc::ffi::IntoStringError) == 32,
    "Verify that ADT layout didn't change since this header got generated");
static_assert(
    alignof(::rs::alloc::ffi::IntoStringError) == 8,
    "Verify that ADT layout didn't change since this header got generated");
namespace __crubit_internal {
extern "C" void
__crubit_thunk_7b344df938a8cdb9__uRNvYNtNtNtCsazOrLUIp1qL_u5alloc3ffi5c_ustr15IntoStringErrorNtNtNtCsoHVEWV6jqw_u4core3ops4drop4Drop4dropCsh9G4tFjYpDL_u8rust_uout(
    ::rs::alloc::ffi::IntoStringError&);
}
inline ::rs::alloc::ffi::IntoStringError::~IntoStringError() {
  __crubit_internal::
      __crubit_thunk_7b344df938a8cdb9__uRNvYNtNtNtCsazOrLUIp1qL_u5alloc3ffi5c_ustr15IntoStringErrorNtNtNtCsoHVEWV6jqw_u4core3ops4drop4Drop4dropCsh9G4tFjYpDL_u8rust_uout(
          *this);
}
namespace __crubit_internal {
extern "C" void
__crubit_thunk_7b344df938a8cdb9__uRNvYNtNtNtCsazOrLUIp1qL_u5alloc3ffi5c_ustr15IntoStringErrorNtNtCsoHVEWV6jqw_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    ::rs::alloc::ffi::IntoStringError const&,
    ::rs::alloc::ffi::IntoStringError* __ret_ptr);
}
namespace __crubit_internal {
extern "C" void
__crubit_thunk_7b344df938a8cdb9__uRNvYNtNtNtCsazOrLUIp1qL_u5alloc3ffi5c_ustr15IntoStringErrorNtNtCsoHVEWV6jqw_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    ::rs::alloc::ffi::IntoStringError&,
    ::rs::alloc::ffi::IntoStringError const&);
}
inline ::rs::alloc::ffi::IntoStringError::IntoStringError(
    const IntoStringError& other) noexcept {
  __crubit_internal::
      __crubit_thunk_7b344df938a8cdb9__uRNvYNtNtNtCsazOrLUIp1qL_u5alloc3ffi5c_ustr15IntoStringErrorNtNtCsoHVEWV6jqw_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
          other, this);
}
inline ::rs::alloc::ffi::IntoStringError& ::rs::alloc::ffi::IntoStringError::
operator=(const IntoStringError& other) noexcept {
  if (this != &other) {
    __crubit_internal::
        __crubit_thunk_7b344df938a8cdb9__uRNvYNtNtNtCsazOrLUIp1qL_u5alloc3ffi5c_ustr15IntoStringErrorNtNtCsoHVEWV6jqw_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
            *this, other);
  }
  return *this;
}
inline ::rs::alloc::ffi::IntoStringError::IntoStringError(
    ::crubit::UnsafeRelocateTag, IntoStringError&& value) {
  ::std::memcpy(this, &value, sizeof(value));
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_7b344df938a8cdb9__uRNvMsu_uNtNtCsazOrLUIp1qL_u5alloc3ffi5c_ustrNtB5_u15IntoStringError12into_ucstringCsh9G4tFjYpDL_u8rust_uout(
    ::rs::alloc::ffi::IntoStringError*, ::rs::alloc::ffi::CString* __ret_ptr);
}
inline ::rs::alloc::ffi::CString(IntoStringError::into_cstring)() && {
  auto&& self = *this;
  crubit::Slot self_slot((::std::move(self)));
  crubit::Slot<::rs::alloc::ffi::CString> __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_7b344df938a8cdb9__uRNvMsu_uNtNtCsazOrLUIp1qL_u5alloc3ffi5c_ustrNtB5_u15IntoStringError12into_ucstringCsh9G4tFjYpDL_u8rust_uout(
          self_slot.Get(), __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_7b344df938a8cdb9__uRNvMsu_uNtNtCsazOrLUIp1qL_u5alloc3ffi5c_ustrNtB5_u15IntoStringError10utf8_uerrorCsh9G4tFjYpDL_u8rust_uout(
    ::rs::alloc::ffi::IntoStringError const&,
    ::rs::core::str::Utf8Error* __ret_ptr);
}
inline ::rs::core::str::Utf8Error(IntoStringError::utf8_error)() const {
  auto&& self = *this;
  crubit::Slot<::rs::core::str::Utf8Error> __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_7b344df938a8cdb9__uRNvMsu_uNtNtCsazOrLUIp1qL_u5alloc3ffi5c_ustrNtB5_u15IntoStringError10utf8_uerrorCsh9G4tFjYpDL_u8rust_uout(
          self, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" bool
__crubit_thunk_7b344df938a8cdb9__uRNvXs1a_uNtNtCsazOrLUIp1qL_u5alloc3ffi5c_ustrNtB6_u15IntoStringErrorNtNtCsoHVEWV6jqw_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
    ::rs::alloc::ffi::IntoStringError const&,
    ::rs::alloc::ffi::IntoStringError const&);
}
inline bool(IntoStringError::operator==)(
    ::rs::alloc::ffi::IntoStringError const& other) const {
  auto&& self = *this;
  return __crubit_internal::
      __crubit_thunk_7b344df938a8cdb9__uRNvXs1a_uNtNtCsazOrLUIp1qL_u5alloc3ffi5c_ustrNtB6_u15IntoStringErrorNtNtCsoHVEWV6jqw_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
          self, other);
}
extern "C" void
__crubit_thunk_7b344df938a8cdb9__uRNvYNtNtNtCsazOrLUIp1qL_u5alloc3ffi5c_ustr15IntoStringErrorNtNtB8_u6string8ToString9to_ustringCsh9G4tFjYpDL_u8rust_uout(
    ::rs::alloc::ffi::IntoStringError const&,
    ::rs::alloc::string::String* __ret_ptr);
inline void ::rs::alloc::ffi::IntoStringError::
    __crubit_field_offset_assertions() {
  using __crubit_assert_type = ::rs::alloc::ffi::IntoStringError;
  static_assert(0 == offsetof(__crubit_assert_type, inner));
  static_assert(16 == offsetof(__crubit_assert_type, error));
}
}  // namespace rs::alloc::ffi

namespace rs::alloc::ffi::c_str {

//  An error indicating that an interior nul byte was found.
//
//  While Rust strings may contain nul bytes in the middle, C strings
//  can't, as that byte would effectively truncate the string.
//
//  This error is created by the [`new`][`CString::new`] method on
//  [`CString`]. See its documentation for more.
//
//  # Examples
//
//  ```
//  use std::ffi::{CString, NulError};
//
//  let _: NulError = CString::new(b"f\\0oo".to_vec()).unwrap_err();
//  ```
//
// Generated from: library/alloc/src/ffi/c_str.rs;l=133
using NulError CRUBIT_INTERNAL_RUST_TYPE(":: alloc :: ffi :: NulError") =
    ::rs::alloc::ffi::NulError;
}  // namespace rs::alloc::ffi::c_str

namespace rs::alloc::ffi {

static_assert(
    sizeof(::rs::alloc::ffi::NulError) == 32,
    "Verify that ADT layout didn't change since this header got generated");
static_assert(
    alignof(::rs::alloc::ffi::NulError) == 8,
    "Verify that ADT layout didn't change since this header got generated");
namespace __crubit_internal {
extern "C" void
__crubit_thunk_7b344df938a8cdb9__uRNvYNtNtNtCsazOrLUIp1qL_u5alloc3ffi5c_ustr8NulErrorNtNtNtCsoHVEWV6jqw_u4core3ops4drop4Drop4dropCsh9G4tFjYpDL_u8rust_uout(
    ::rs::alloc::ffi::NulError&);
}
inline ::rs::alloc::ffi::NulError::~NulError() {
  __crubit_internal::
      __crubit_thunk_7b344df938a8cdb9__uRNvYNtNtNtCsazOrLUIp1qL_u5alloc3ffi5c_ustr8NulErrorNtNtNtCsoHVEWV6jqw_u4core3ops4drop4Drop4dropCsh9G4tFjYpDL_u8rust_uout(
          *this);
}
namespace __crubit_internal {
extern "C" void
__crubit_thunk_7b344df938a8cdb9__uRNvYNtNtNtCsazOrLUIp1qL_u5alloc3ffi5c_ustr8NulErrorNtNtCsoHVEWV6jqw_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    ::rs::alloc::ffi::NulError const&, ::rs::alloc::ffi::NulError* __ret_ptr);
}
namespace __crubit_internal {
extern "C" void
__crubit_thunk_7b344df938a8cdb9__uRNvYNtNtNtCsazOrLUIp1qL_u5alloc3ffi5c_ustr8NulErrorNtNtCsoHVEWV6jqw_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    ::rs::alloc::ffi::NulError&, ::rs::alloc::ffi::NulError const&);
}
inline ::rs::alloc::ffi::NulError::NulError(const NulError& other) noexcept {
  __crubit_internal::
      __crubit_thunk_7b344df938a8cdb9__uRNvYNtNtNtCsazOrLUIp1qL_u5alloc3ffi5c_ustr8NulErrorNtNtCsoHVEWV6jqw_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
          other, this);
}
inline ::rs::alloc::ffi::NulError& ::rs::alloc::ffi::NulError::operator=(
    const NulError& other) noexcept {
  if (this != &other) {
    __crubit_internal::
        __crubit_thunk_7b344df938a8cdb9__uRNvYNtNtNtCsazOrLUIp1qL_u5alloc3ffi5c_ustr8NulErrorNtNtCsoHVEWV6jqw_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
            *this, other);
  }
  return *this;
}
inline ::rs::alloc::ffi::NulError::NulError(::crubit::UnsafeRelocateTag,
                                            NulError&& value) {
  ::std::memcpy(this, &value, sizeof(value));
}

namespace __crubit_internal {
extern "C" ::std::uintptr_t
__crubit_thunk_7b344df938a8cdb9__uRNvMsr_uNtNtCsazOrLUIp1qL_u5alloc3ffi5c_ustrNtB5_u8NulError12nul_upositionCsh9G4tFjYpDL_u8rust_uout(
    ::rs::alloc::ffi::NulError const&);
}
inline ::std::uintptr_t(NulError::nul_position)() const {
  auto&& self = *this;
  return __crubit_internal::
      __crubit_thunk_7b344df938a8cdb9__uRNvMsr_uNtNtCsazOrLUIp1qL_u5alloc3ffi5c_ustrNtB5_u8NulError12nul_upositionCsh9G4tFjYpDL_u8rust_uout(
          self);
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_7b344df938a8cdb9__uRNvMsr_uNtNtCsazOrLUIp1qL_u5alloc3ffi5c_ustrNtB5_u8NulError8into_uvecCsh9G4tFjYpDL_u8rust_uout(
    ::rs::alloc::ffi::NulError*, rs_std::Vec<::std::uint8_t>* __ret_ptr);
}
inline rs_std::Vec<::std::uint8_t>(NulError::into_vec)() && {
  auto&& self = *this;
  crubit::Slot self_slot((::std::move(self)));
  crubit::Slot<rs_std::Vec<::std::uint8_t>> __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_7b344df938a8cdb9__uRNvMsr_uNtNtCsazOrLUIp1qL_u5alloc3ffi5c_ustrNtB5_u8NulError8into_uvecCsh9G4tFjYpDL_u8rust_uout(
          self_slot.Get(), __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" bool
__crubit_thunk_7b344df938a8cdb9__uRNvXsV_uNtNtCsazOrLUIp1qL_u5alloc3ffi5c_ustrNtB5_u8NulErrorNtNtCsoHVEWV6jqw_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
    ::rs::alloc::ffi::NulError const&, ::rs::alloc::ffi::NulError const&);
}
inline bool(NulError::operator==)(
    ::rs::alloc::ffi::NulError const& other) const {
  auto&& self = *this;
  return __crubit_internal::
      __crubit_thunk_7b344df938a8cdb9__uRNvXsV_uNtNtCsazOrLUIp1qL_u5alloc3ffi5c_ustrNtB5_u8NulErrorNtNtCsoHVEWV6jqw_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
          self, other);
}
extern "C" void
__crubit_thunk_7b344df938a8cdb9__uRNvYNtNtNtCsazOrLUIp1qL_u5alloc3ffi5c_ustr8NulErrorNtNtB8_u6string8ToString9to_ustringCsh9G4tFjYpDL_u8rust_uout(
    ::rs::alloc::ffi::NulError const&, ::rs::alloc::string::String* __ret_ptr);
inline void ::rs::alloc::ffi::NulError::__crubit_field_offset_assertions() {
  using __crubit_assert_type = ::rs::alloc::ffi::NulError;
  static_assert(0 == offsetof(__crubit_assert_type, __field1));
  static_assert(24 == offsetof(__crubit_assert_type, __field0));
}
}  // namespace rs::alloc::ffi

namespace rs::alloc::fmt {

namespace __crubit_internal {
extern "C" void
__crubit_thunk_7b344df938a8cdb9__uRNvNtCsazOrLUIp1qL_u5alloc3fmt6formatCsh9G4tFjYpDL_u8rust_uout(
    ::rs::core::fmt::Arguments*, ::rs::alloc::string::String* __ret_ptr);
}
inline ::rs::alloc::string::String format(::rs::core::fmt::Arguments args) {
  crubit::Slot<::rs::alloc::string::String> __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_7b344df938a8cdb9__uRNvNtCsazOrLUIp1qL_u5alloc3fmt6formatCsh9G4tFjYpDL_u8rust_uout(
          &args, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

}  // namespace rs::alloc::fmt

namespace rs::alloc::string {

static_assert(
    sizeof(::rs::alloc::string::Drain) == 40,
    "Verify that ADT layout didn't change since this header got generated");
static_assert(
    alignof(::rs::alloc::string::Drain) == 8,
    "Verify that ADT layout didn't change since this header got generated");
namespace __crubit_internal {
extern "C" void
__crubit_thunk_7b344df938a8cdb9__uRNvYNtNtCsazOrLUIp1qL_u5alloc6string5DrainNtNtNtCsoHVEWV6jqw_u4core3ops4drop4Drop4dropCsh9G4tFjYpDL_u8rust_uout(
    ::rs::alloc::string::Drain&);
}
inline ::rs::alloc::string::Drain::~Drain() {
  __crubit_internal::
      __crubit_thunk_7b344df938a8cdb9__uRNvYNtNtCsazOrLUIp1qL_u5alloc6string5DrainNtNtNtCsoHVEWV6jqw_u4core3ops4drop4Drop4dropCsh9G4tFjYpDL_u8rust_uout(
          *this);
}
inline ::rs::alloc::string::Drain::Drain(::crubit::UnsafeRelocateTag,
                                         Drain&& value) {
  ::std::memcpy(this, &value, sizeof(value));
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_7b344df938a8cdb9__uRNvMs19_uNtCsazOrLUIp1qL_u5alloc6stringNtB6_u5Drain6as_ustr(
    ::rs::alloc::string::Drain const&, rs_std::StrRef* __ret_ptr);
}
inline rs_std::StrRef(Drain::as_str)() const& $(__anon1) CRUBIT_LIFETIME_BOUND {
  auto&& self = *this;
  crubit::Slot<rs_std::StrRef> __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_7b344df938a8cdb9__uRNvMs19_uNtCsazOrLUIp1qL_u5alloc6stringNtB6_u5Drain6as_ustr(
          self, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}
inline void ::rs::alloc::string::Drain::__crubit_field_offset_assertions() {
  using __crubit_assert_type = ::rs::alloc::string::Drain;
  static_assert(0 == offsetof(__crubit_assert_type, iter));
  static_assert(16 == offsetof(__crubit_assert_type, string));
  static_assert(24 == offsetof(__crubit_assert_type, start));
  static_assert(32 == offsetof(__crubit_assert_type, end));
}
static_assert(
    sizeof(::rs::alloc::string::FromUtf16Error) == 1,
    "Verify that ADT layout didn't change since this header got generated");
static_assert(
    alignof(::rs::alloc::string::FromUtf16Error) == 1,
    "Verify that ADT layout didn't change since this header got generated");
static_assert(
    ::std::is_trivially_destructible_v<::rs::alloc::string::FromUtf16Error>);
static_assert(::std::is_trivially_move_constructible_v<
              ::rs::alloc::string::FromUtf16Error>);
static_assert(
    ::std::is_trivially_move_assignable_v<::rs::alloc::string::FromUtf16Error>);
inline ::rs::alloc::string::FromUtf16Error::FromUtf16Error(
    ::crubit::UnsafeRelocateTag, FromUtf16Error&& value) {
  ::std::memcpy(this, &value, sizeof(value));
}
extern "C" void
__crubit_thunk_7b344df938a8cdb9__uRNvYNtNtCsazOrLUIp1qL_u5alloc6string14FromUtf16ErrorNtB4_u8ToString9to_ustringCsh9G4tFjYpDL_u8rust_uout(
    ::rs::alloc::string::FromUtf16Error const&,
    ::rs::alloc::string::String* __ret_ptr);
inline void ::rs::alloc::string::FromUtf16Error::
    __crubit_field_offset_assertions() {
  using __crubit_assert_type = ::rs::alloc::string::FromUtf16Error;
  static_assert(0 == offsetof(__crubit_assert_type, kind));
}
static_assert(
    sizeof(::rs::alloc::string::FromUtf8Error) == 40,
    "Verify that ADT layout didn't change since this header got generated");
static_assert(
    alignof(::rs::alloc::string::FromUtf8Error) == 8,
    "Verify that ADT layout didn't change since this header got generated");
namespace __crubit_internal {
extern "C" void
__crubit_thunk_7b344df938a8cdb9__uRNvYNtNtCsazOrLUIp1qL_u5alloc6string13FromUtf8ErrorNtNtNtCsoHVEWV6jqw_u4core3ops4drop4Drop4dropCsh9G4tFjYpDL_u8rust_uout(
    ::rs::alloc::string::FromUtf8Error&);
}
inline ::rs::alloc::string::FromUtf8Error::~FromUtf8Error() {
  __crubit_internal::
      __crubit_thunk_7b344df938a8cdb9__uRNvYNtNtCsazOrLUIp1qL_u5alloc6string13FromUtf8ErrorNtNtNtCsoHVEWV6jqw_u4core3ops4drop4Drop4dropCsh9G4tFjYpDL_u8rust_uout(
          *this);
}
namespace __crubit_internal {
extern "C" void
__crubit_thunk_7b344df938a8cdb9__uRNvYNtNtCsazOrLUIp1qL_u5alloc6string13FromUtf8ErrorNtNtCsoHVEWV6jqw_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    ::rs::alloc::string::FromUtf8Error const&,
    ::rs::alloc::string::FromUtf8Error* __ret_ptr);
}
namespace __crubit_internal {
extern "C" void
__crubit_thunk_7b344df938a8cdb9__uRNvYNtNtCsazOrLUIp1qL_u5alloc6string13FromUtf8ErrorNtNtCsoHVEWV6jqw_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    ::rs::alloc::string::FromUtf8Error&,
    ::rs::alloc::string::FromUtf8Error const&);
}
inline ::rs::alloc::string::FromUtf8Error::FromUtf8Error(
    const FromUtf8Error& other) noexcept {
  __crubit_internal::
      __crubit_thunk_7b344df938a8cdb9__uRNvYNtNtCsazOrLUIp1qL_u5alloc6string13FromUtf8ErrorNtNtCsoHVEWV6jqw_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
          other, this);
}
inline ::rs::alloc::string::FromUtf8Error& ::rs::alloc::string::FromUtf8Error::
operator=(const FromUtf8Error& other) noexcept {
  if (this != &other) {
    __crubit_internal::
        __crubit_thunk_7b344df938a8cdb9__uRNvYNtNtCsazOrLUIp1qL_u5alloc6string13FromUtf8ErrorNtNtCsoHVEWV6jqw_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
            *this, other);
  }
  return *this;
}
inline ::rs::alloc::string::FromUtf8Error::FromUtf8Error(
    ::crubit::UnsafeRelocateTag, FromUtf8Error&& value) {
  ::std::memcpy(this, &value, sizeof(value));
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_7b344df938a8cdb9__uRNvMs_uNtCsazOrLUIp1qL_u5alloc6stringNtB4_u13FromUtf8Error8as_ubytesCsh9G4tFjYpDL_u8rust_uout(
    ::rs::alloc::string::FromUtf8Error const&,
    rs_std::SliceRef<const ::std::uint8_t>* __ret_ptr);
}
inline rs_std::SliceRef<const ::std::uint8_t>(
    FromUtf8Error::as_bytes)() const& $(__anon1) CRUBIT_LIFETIME_BOUND {
  auto&& self = *this;
  crubit::Slot<rs_std::SliceRef<const ::std::uint8_t>>
      __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_7b344df938a8cdb9__uRNvMs_uNtCsazOrLUIp1qL_u5alloc6stringNtB4_u13FromUtf8Error8as_ubytesCsh9G4tFjYpDL_u8rust_uout(
          self, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_7b344df938a8cdb9__uRNvMs_uNtCsazOrLUIp1qL_u5alloc6stringNtB4_u13FromUtf8Error15into_uutf8_ulossy(
    ::rs::alloc::string::FromUtf8Error*,
    ::rs::alloc::string::String* __ret_ptr);
}
inline ::rs::alloc::string::String(FromUtf8Error::into_utf8_lossy)() && {
  auto&& self = *this;
  crubit::Slot self_slot((::std::move(self)));
  crubit::Slot<::rs::alloc::string::String> __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_7b344df938a8cdb9__uRNvMs_uNtCsazOrLUIp1qL_u5alloc6stringNtB4_u13FromUtf8Error15into_uutf8_ulossy(
          self_slot.Get(), __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_7b344df938a8cdb9__uRNvMs_uNtCsazOrLUIp1qL_u5alloc6stringNtB4_u13FromUtf8Error10into_ubytesCsh9G4tFjYpDL_u8rust_uout(
    ::rs::alloc::string::FromUtf8Error*,
    rs_std::Vec<::std::uint8_t>* __ret_ptr);
}
inline rs_std::Vec<::std::uint8_t>(FromUtf8Error::into_bytes)() && {
  auto&& self = *this;
  crubit::Slot self_slot((::std::move(self)));
  crubit::Slot<rs_std::Vec<::std::uint8_t>> __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_7b344df938a8cdb9__uRNvMs_uNtCsazOrLUIp1qL_u5alloc6stringNtB4_u13FromUtf8Error10into_ubytesCsh9G4tFjYpDL_u8rust_uout(
          self_slot.Get(), __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_7b344df938a8cdb9__uRNvMs_uNtCsazOrLUIp1qL_u5alloc6stringNtB4_u13FromUtf8Error10utf8_uerrorCsh9G4tFjYpDL_u8rust_uout(
    ::rs::alloc::string::FromUtf8Error const&,
    ::rs::core::str::Utf8Error* __ret_ptr);
}
inline ::rs::core::str::Utf8Error(FromUtf8Error::utf8_error)() const {
  auto&& self = *this;
  crubit::Slot<::rs::core::str::Utf8Error> __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_7b344df938a8cdb9__uRNvMs_uNtCsazOrLUIp1qL_u5alloc6stringNtB4_u13FromUtf8Error10utf8_uerrorCsh9G4tFjYpDL_u8rust_uout(
          self, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" bool
__crubit_thunk_7b344df938a8cdb9__uRNvXs1o_uNtCsazOrLUIp1qL_u5alloc6stringNtB6_u13FromUtf8ErrorNtNtCsoHVEWV6jqw_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
    ::rs::alloc::string::FromUtf8Error const&,
    ::rs::alloc::string::FromUtf8Error const&);
}
inline bool(FromUtf8Error::operator==)(
    ::rs::alloc::string::FromUtf8Error const& other) const {
  auto&& self = *this;
  return __crubit_internal::
      __crubit_thunk_7b344df938a8cdb9__uRNvXs1o_uNtCsazOrLUIp1qL_u5alloc6stringNtB6_u13FromUtf8ErrorNtNtCsoHVEWV6jqw_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
          self, other);
}
extern "C" void
__crubit_thunk_7b344df938a8cdb9__uRNvYNtNtCsazOrLUIp1qL_u5alloc6string13FromUtf8ErrorNtB4_u8ToString9to_ustringCsh9G4tFjYpDL_u8rust_uout(
    ::rs::alloc::string::FromUtf8Error const&,
    ::rs::alloc::string::String* __ret_ptr);
inline void ::rs::alloc::string::FromUtf8Error::
    __crubit_field_offset_assertions() {
  using __crubit_assert_type = ::rs::alloc::string::FromUtf8Error;
  static_assert(0 == offsetof(__crubit_assert_type, bytes));
  static_assert(24 == offsetof(__crubit_assert_type, error));
}
static_assert(
    sizeof(::rs::alloc::string::String) == 24,
    "Verify that ADT layout didn't change since this header got generated");
static_assert(
    alignof(::rs::alloc::string::String) == 8,
    "Verify that ADT layout didn't change since this header got generated");
namespace __crubit_internal {
extern "C" void
__crubit_thunk_7b344df938a8cdb9__uRNvYNtNtCsazOrLUIp1qL_u5alloc6string6StringNtNtCsoHVEWV6jqw_u4core7default7Default7defaultCsh9G4tFjYpDL_u8rust_uout(
    ::rs::alloc::string::String* __ret_ptr);
}
inline ::rs::alloc::string::String::String() {
  __crubit_internal::
      __crubit_thunk_7b344df938a8cdb9__uRNvYNtNtCsazOrLUIp1qL_u5alloc6string6StringNtNtCsoHVEWV6jqw_u4core7default7Default7defaultCsh9G4tFjYpDL_u8rust_uout(
          this);
}
namespace __crubit_internal {
extern "C" void
__crubit_thunk_7b344df938a8cdb9__uRNvYNtNtCsazOrLUIp1qL_u5alloc6string6StringNtNtNtCsoHVEWV6jqw_u4core3ops4drop4Drop4dropCsh9G4tFjYpDL_u8rust_uout(
    ::rs::alloc::string::String&);
}
inline ::rs::alloc::string::String::~String() {
  __crubit_internal::
      __crubit_thunk_7b344df938a8cdb9__uRNvYNtNtCsazOrLUIp1qL_u5alloc6string6StringNtNtNtCsoHVEWV6jqw_u4core3ops4drop4Drop4dropCsh9G4tFjYpDL_u8rust_uout(
          *this);
}
inline ::rs::alloc::string::String::String(String&& other) noexcept : String() {
  *this = ::std::move(other);
}
inline ::rs::alloc::string::String& ::rs::alloc::string::String::operator=(
    String&& other) noexcept {
  crubit::MemSwap(*this, other);
  return *this;
}
namespace __crubit_internal {
extern "C" void
__crubit_thunk_7b344df938a8cdb9__uRNvYNtNtCsazOrLUIp1qL_u5alloc6string6StringNtNtCsoHVEWV6jqw_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    ::rs::alloc::string::String const&, ::rs::alloc::string::String* __ret_ptr);
}
namespace __crubit_internal {
extern "C" void
__crubit_thunk_7b344df938a8cdb9__uRNvYNtNtCsazOrLUIp1qL_u5alloc6string6StringNtNtCsoHVEWV6jqw_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    ::rs::alloc::string::String&, ::rs::alloc::string::String const&);
}
inline ::rs::alloc::string::String::String(const String& other) noexcept {
  __crubit_internal::
      __crubit_thunk_7b344df938a8cdb9__uRNvYNtNtCsazOrLUIp1qL_u5alloc6string6StringNtNtCsoHVEWV6jqw_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
          other, this);
}
inline ::rs::alloc::string::String& ::rs::alloc::string::String::operator=(
    const String& other) noexcept {
  if (this != &other) {
    __crubit_internal::
        __crubit_thunk_7b344df938a8cdb9__uRNvYNtNtCsazOrLUIp1qL_u5alloc6string6StringNtNtCsoHVEWV6jqw_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
            *this, other);
  }
  return *this;
}
inline ::rs::alloc::string::String::String(::crubit::UnsafeRelocateTag,
                                           String&& value) {
  ::std::memcpy(this, &value, sizeof(value));
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_7b344df938a8cdb9__uRNvMNtCsazOrLUIp1qL_u5alloc6stringNtB2_u6String3newCsh9G4tFjYpDL_u8rust_uout(
    ::rs::alloc::string::String* __ret_ptr);
}
inline ::rs::alloc::string::String(String::new_)() {
  crubit::Slot<::rs::alloc::string::String> __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_7b344df938a8cdb9__uRNvMNtCsazOrLUIp1qL_u5alloc6stringNtB2_u6String3newCsh9G4tFjYpDL_u8rust_uout(
          __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_7b344df938a8cdb9__uRNvMNtCsazOrLUIp1qL_u5alloc6stringNtB2_u6String13with_ucapacityCsh9G4tFjYpDL_u8rust_uout(
    ::std::uintptr_t, ::rs::alloc::string::String* __ret_ptr);
}
inline ::rs::alloc::string::String(String::with_capacity)(
    ::std::uintptr_t capacity) {
  crubit::Slot<::rs::alloc::string::String> __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_7b344df938a8cdb9__uRNvMNtCsazOrLUIp1qL_u5alloc6stringNtB2_u6String13with_ucapacityCsh9G4tFjYpDL_u8rust_uout(
          capacity, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_7b344df938a8cdb9__uRNvMNtCsazOrLUIp1qL_u5alloc6stringNtB2_u6String9from_uutf8Csh9G4tFjYpDL_u8rust_uout(
    rs_std::Vec<::std::uint8_t>*,
    rs_std::Result<::rs::alloc::string::String,
                   ::rs::alloc::string::FromUtf8Error>* __ret_ptr);
}
inline rs_std::Result<::rs::alloc::string::String,
                      ::rs::alloc::string::FromUtf8Error>(String::from_utf8)(
    rs_std::Vec<::std::uint8_t> vec) {
  crubit::Slot vec_slot((::std::move(vec)));
  crubit::Slot<rs_std::Result<::rs::alloc::string::String,
                              ::rs::alloc::string::FromUtf8Error>>
      __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_7b344df938a8cdb9__uRNvMNtCsazOrLUIp1qL_u5alloc6stringNtB2_u6String9from_uutf8Csh9G4tFjYpDL_u8rust_uout(
          vec_slot.Get(), __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_7b344df938a8cdb9__uRNvMNtCsazOrLUIp1qL_u5alloc6stringNtB2_u6String21from_uutf8_ulossy_uowned(
    rs_std::Vec<::std::uint8_t>*, ::rs::alloc::string::String* __ret_ptr);
}
inline ::rs::alloc::string::String(String::from_utf8_lossy_owned)(
    rs_std::Vec<::std::uint8_t> v) {
  crubit::Slot v_slot((::std::move(v)));
  crubit::Slot<::rs::alloc::string::String> __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_7b344df938a8cdb9__uRNvMNtCsazOrLUIp1qL_u5alloc6stringNtB2_u6String21from_uutf8_ulossy_uowned(
          v_slot.Get(), __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_7b344df938a8cdb9__uRNvMNtCsazOrLUIp1qL_u5alloc6stringNtB2_u6String10from_uutf16(
    rs_std::SliceRef<const ::std::uint16_t>*,
    rs_std::Result<::rs::alloc::string::String,
                   ::rs::alloc::string::FromUtf16Error>* __ret_ptr);
}
inline rs_std::Result<::rs::alloc::string::String,
                      ::rs::alloc::string::FromUtf16Error>(String::from_utf16)(
    rs_std::SliceRef<const ::std::uint16_t> v) {
  crubit::Slot<rs_std::Result<::rs::alloc::string::String,
                              ::rs::alloc::string::FromUtf16Error>>
      __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_7b344df938a8cdb9__uRNvMNtCsazOrLUIp1qL_u5alloc6stringNtB2_u6String10from_uutf16(
          &v, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_7b344df938a8cdb9__uRNvMNtCsazOrLUIp1qL_u5alloc6stringNtB2_u6String16from_uutf16_ulossyCsh9G4tFjYpDL_u8rust_uout(
    rs_std::SliceRef<const ::std::uint16_t>*,
    ::rs::alloc::string::String* __ret_ptr);
}
inline ::rs::alloc::string::String(String::from_utf16_lossy)(
    rs_std::SliceRef<const ::std::uint16_t> v) {
  crubit::Slot<::rs::alloc::string::String> __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_7b344df938a8cdb9__uRNvMNtCsazOrLUIp1qL_u5alloc6stringNtB2_u6String16from_uutf16_ulossyCsh9G4tFjYpDL_u8rust_uout(
          &v, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_7b344df938a8cdb9__uRNvMNtCsazOrLUIp1qL_u5alloc6stringNtB2_u6String12from_uutf16le(
    rs_std::SliceRef<const ::std::uint8_t>*,
    rs_std::Result<::rs::alloc::string::String,
                   ::rs::alloc::string::FromUtf16Error>* __ret_ptr);
}
inline rs_std::Result<::rs::alloc::string::String,
                      ::rs::alloc::string::FromUtf16Error>(
    String::from_utf16le)(rs_std::SliceRef<const ::std::uint8_t> v) {
  crubit::Slot<rs_std::Result<::rs::alloc::string::String,
                              ::rs::alloc::string::FromUtf16Error>>
      __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_7b344df938a8cdb9__uRNvMNtCsazOrLUIp1qL_u5alloc6stringNtB2_u6String12from_uutf16le(
          &v, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_7b344df938a8cdb9__uRNvMNtCsazOrLUIp1qL_u5alloc6stringNtB2_u6String18from_uutf16le_ulossy(
    rs_std::SliceRef<const ::std::uint8_t>*,
    ::rs::alloc::string::String* __ret_ptr);
}
inline ::rs::alloc::string::String(String::from_utf16le_lossy)(
    rs_std::SliceRef<const ::std::uint8_t> v) {
  crubit::Slot<::rs::alloc::string::String> __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_7b344df938a8cdb9__uRNvMNtCsazOrLUIp1qL_u5alloc6stringNtB2_u6String18from_uutf16le_ulossy(
          &v, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_7b344df938a8cdb9__uRNvMNtCsazOrLUIp1qL_u5alloc6stringNtB2_u6String12from_uutf16be(
    rs_std::SliceRef<const ::std::uint8_t>*,
    rs_std::Result<::rs::alloc::string::String,
                   ::rs::alloc::string::FromUtf16Error>* __ret_ptr);
}
inline rs_std::Result<::rs::alloc::string::String,
                      ::rs::alloc::string::FromUtf16Error>(
    String::from_utf16be)(rs_std::SliceRef<const ::std::uint8_t> v) {
  crubit::Slot<rs_std::Result<::rs::alloc::string::String,
                              ::rs::alloc::string::FromUtf16Error>>
      __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_7b344df938a8cdb9__uRNvMNtCsazOrLUIp1qL_u5alloc6stringNtB2_u6String12from_uutf16be(
          &v, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_7b344df938a8cdb9__uRNvMNtCsazOrLUIp1qL_u5alloc6stringNtB2_u6String18from_uutf16be_ulossy(
    rs_std::SliceRef<const ::std::uint8_t>*,
    ::rs::alloc::string::String* __ret_ptr);
}
inline ::rs::alloc::string::String(String::from_utf16be_lossy)(
    rs_std::SliceRef<const ::std::uint8_t> v) {
  crubit::Slot<::rs::alloc::string::String> __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_7b344df938a8cdb9__uRNvMNtCsazOrLUIp1qL_u5alloc6stringNtB2_u6String18from_uutf16be_ulossy(
          &v, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_7b344df938a8cdb9__uRNvMNtCsazOrLUIp1qL_u5alloc6stringNtB2_u6String14into_uraw_upartsCsh9G4tFjYpDL_u8rust_uout(
    ::rs::alloc::string::String*, void** __ret_ptr);
}
inline ::std::tuple<::std::uint8_t*, ::std::uintptr_t, ::std::uintptr_t>(
    String::into_raw_parts)() && {
  auto&& self = *this;
  crubit::Slot self_slot((::std::move(self)));
  ::std::uint8_t* __return_value_0_ret_val_holder;
  ::std::uint8_t** __return_value_0_storage = &__return_value_0_ret_val_holder;
  ::std::uintptr_t __return_value_1_ret_val_holder;
  ::std::uintptr_t* __return_value_1_storage = &__return_value_1_ret_val_holder;
  ::std::uintptr_t __return_value_2_ret_val_holder;
  ::std::uintptr_t* __return_value_2_storage = &__return_value_2_ret_val_holder;
  void* __return_value_storage[] = {__return_value_0_storage,
                                    __return_value_1_storage,
                                    __return_value_2_storage};
  __crubit_internal::
      __crubit_thunk_7b344df938a8cdb9__uRNvMNtCsazOrLUIp1qL_u5alloc6stringNtB2_u6String14into_uraw_upartsCsh9G4tFjYpDL_u8rust_uout(
          self_slot.Get(), __return_value_storage);
  return ::std::make_tuple(*__return_value_0_storage, *__return_value_1_storage,
                           *__return_value_2_storage);
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_7b344df938a8cdb9__uRNvMNtCsazOrLUIp1qL_u5alloc6stringNtB2_u6String14from_uraw_upartsCsh9G4tFjYpDL_u8rust_uout(
    ::std::uint8_t*, ::std::uintptr_t, ::std::uintptr_t,
    ::rs::alloc::string::String* __ret_ptr);
}
inline ::rs::alloc::string::String(String::from_raw_parts)(
    ::std::uint8_t* buf, ::std::uintptr_t length, ::std::uintptr_t capacity) {
  crubit::Slot<::rs::alloc::string::String> __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_7b344df938a8cdb9__uRNvMNtCsazOrLUIp1qL_u5alloc6stringNtB2_u6String14from_uraw_upartsCsh9G4tFjYpDL_u8rust_uout(
          buf, length, capacity, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_7b344df938a8cdb9__uRNvMNtCsazOrLUIp1qL_u5alloc6stringNtB2_u6String19from_uutf8_uuncheckedCsh9G4tFjYpDL_u8rust_uout(
    rs_std::Vec<::std::uint8_t>*, ::rs::alloc::string::String* __ret_ptr);
}
inline ::rs::alloc::string::String(String::from_utf8_unchecked)(
    rs_std::Vec<::std::uint8_t> bytes) {
  crubit::Slot bytes_slot((::std::move(bytes)));
  crubit::Slot<::rs::alloc::string::String> __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_7b344df938a8cdb9__uRNvMNtCsazOrLUIp1qL_u5alloc6stringNtB2_u6String19from_uutf8_uuncheckedCsh9G4tFjYpDL_u8rust_uout(
          bytes_slot.Get(), __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_7b344df938a8cdb9__uRNvMNtCsazOrLUIp1qL_u5alloc6stringNtB2_u6String10into_ubytesCsh9G4tFjYpDL_u8rust_uout(
    ::rs::alloc::string::String*, rs_std::Vec<::std::uint8_t>* __ret_ptr);
}
inline rs_std::Vec<::std::uint8_t>(String::into_bytes)() && {
  auto&& self = *this;
  crubit::Slot self_slot((::std::move(self)));
  crubit::Slot<rs_std::Vec<::std::uint8_t>> __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_7b344df938a8cdb9__uRNvMNtCsazOrLUIp1qL_u5alloc6stringNtB2_u6String10into_ubytesCsh9G4tFjYpDL_u8rust_uout(
          self_slot.Get(), __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_7b344df938a8cdb9__uRNvMNtCsazOrLUIp1qL_u5alloc6stringNtB2_u6String6as_ustrCsh9G4tFjYpDL_u8rust_uout(
    ::rs::alloc::string::String const&, rs_std::StrRef* __ret_ptr);
}
inline rs_std::StrRef(String::as_str)() const& $(__anon1)
    CRUBIT_LIFETIME_BOUND {
  auto&& self = *this;
  crubit::Slot<rs_std::StrRef> __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_7b344df938a8cdb9__uRNvMNtCsazOrLUIp1qL_u5alloc6stringNtB2_u6String6as_ustrCsh9G4tFjYpDL_u8rust_uout(
          self, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_7b344df938a8cdb9__uRNvMNtCsazOrLUIp1qL_u5alloc6stringNtB2_u6String8push_ustrCsh9G4tFjYpDL_u8rust_uout(
    ::rs::alloc::string::String&, rs_std::StrRef*);
}
inline void(String::push_str)(rs_std::StrRef string) {
  auto&& self = *this;
  crubit::internal::CheckNoMutableAliasing(
      crubit::internal::AsMutPtrDatas<::rs::alloc::string::String&>(self),
      crubit::internal::AsPtrDatas<rs_std::StrRef>(string));
  return __crubit_internal::
      __crubit_thunk_7b344df938a8cdb9__uRNvMNtCsazOrLUIp1qL_u5alloc6stringNtB2_u6String8push_ustrCsh9G4tFjYpDL_u8rust_uout(
          self, &string);
}

namespace __crubit_internal {
extern "C" ::std::uintptr_t
__crubit_thunk_7b344df938a8cdb9__uRNvMNtCsazOrLUIp1qL_u5alloc6stringNtB2_u6String8capacityCsh9G4tFjYpDL_u8rust_uout(
    ::rs::alloc::string::String const&);
}
inline ::std::uintptr_t(String::capacity)() const {
  auto&& self = *this;
  return __crubit_internal::
      __crubit_thunk_7b344df938a8cdb9__uRNvMNtCsazOrLUIp1qL_u5alloc6stringNtB2_u6String8capacityCsh9G4tFjYpDL_u8rust_uout(
          self);
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_7b344df938a8cdb9__uRNvMNtCsazOrLUIp1qL_u5alloc6stringNtB2_u6String7reserveCsh9G4tFjYpDL_u8rust_uout(
    ::rs::alloc::string::String&, ::std::uintptr_t);
}
inline void(String::reserve)(::std::uintptr_t additional) {
  auto&& self = *this;
  return __crubit_internal::
      __crubit_thunk_7b344df938a8cdb9__uRNvMNtCsazOrLUIp1qL_u5alloc6stringNtB2_u6String7reserveCsh9G4tFjYpDL_u8rust_uout(
          self, additional);
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_7b344df938a8cdb9__uRNvMNtCsazOrLUIp1qL_u5alloc6stringNtB2_u6String13reserve_uexactCsh9G4tFjYpDL_u8rust_uout(
    ::rs::alloc::string::String&, ::std::uintptr_t);
}
inline void(String::reserve_exact)(::std::uintptr_t additional) {
  auto&& self = *this;
  return __crubit_internal::
      __crubit_thunk_7b344df938a8cdb9__uRNvMNtCsazOrLUIp1qL_u5alloc6stringNtB2_u6String13reserve_uexactCsh9G4tFjYpDL_u8rust_uout(
          self, additional);
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_7b344df938a8cdb9__uRNvMNtCsazOrLUIp1qL_u5alloc6stringNtB2_u6String11try_ureserve(
    ::rs::alloc::string::String&, ::std::uintptr_t,
    rs_std::Result<rs_std::unit_t, ::rs::alloc::collections::TryReserveError>*
        __ret_ptr);
}
inline rs_std::Result<rs_std::unit_t,
                      ::rs::alloc::collections::TryReserveError>(
    String::try_reserve)(::std::uintptr_t additional) {
  auto&& self = *this;
  crubit::Slot<
      rs_std::Result<rs_std::unit_t, ::rs::alloc::collections::TryReserveError>>
      __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_7b344df938a8cdb9__uRNvMNtCsazOrLUIp1qL_u5alloc6stringNtB2_u6String11try_ureserve(
          self, additional, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_7b344df938a8cdb9__uRNvMNtCsazOrLUIp1qL_u5alloc6stringNtB2_u6String17try_ureserve_uexact(
    ::rs::alloc::string::String&, ::std::uintptr_t,
    rs_std::Result<rs_std::unit_t, ::rs::alloc::collections::TryReserveError>*
        __ret_ptr);
}
inline rs_std::Result<rs_std::unit_t,
                      ::rs::alloc::collections::TryReserveError>(
    String::try_reserve_exact)(::std::uintptr_t additional) {
  auto&& self = *this;
  crubit::Slot<
      rs_std::Result<rs_std::unit_t, ::rs::alloc::collections::TryReserveError>>
      __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_7b344df938a8cdb9__uRNvMNtCsazOrLUIp1qL_u5alloc6stringNtB2_u6String17try_ureserve_uexact(
          self, additional, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_7b344df938a8cdb9__uRNvMNtCsazOrLUIp1qL_u5alloc6stringNtB2_u6String13shrink_uto_ufitCsh9G4tFjYpDL_u8rust_uout(
    ::rs::alloc::string::String&);
}
inline void(String::shrink_to_fit)() {
  auto&& self = *this;
  return __crubit_internal::
      __crubit_thunk_7b344df938a8cdb9__uRNvMNtCsazOrLUIp1qL_u5alloc6stringNtB2_u6String13shrink_uto_ufitCsh9G4tFjYpDL_u8rust_uout(
          self);
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_7b344df938a8cdb9__uRNvMNtCsazOrLUIp1qL_u5alloc6stringNtB2_u6String9shrink_utoCsh9G4tFjYpDL_u8rust_uout(
    ::rs::alloc::string::String&, ::std::uintptr_t);
}
inline void(String::shrink_to)(::std::uintptr_t min_capacity) {
  auto&& self = *this;
  return __crubit_internal::
      __crubit_thunk_7b344df938a8cdb9__uRNvMNtCsazOrLUIp1qL_u5alloc6stringNtB2_u6String9shrink_utoCsh9G4tFjYpDL_u8rust_uout(
          self, min_capacity);
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_7b344df938a8cdb9__uRNvMNtCsazOrLUIp1qL_u5alloc6stringNtB2_u6String4pushCsh9G4tFjYpDL_u8rust_uout(
    ::rs::alloc::string::String&, rs_std::char_*);
}
inline void(String::push)(rs_std::char_ ch) {
  auto&& self = *this;
  return __crubit_internal::
      __crubit_thunk_7b344df938a8cdb9__uRNvMNtCsazOrLUIp1qL_u5alloc6stringNtB2_u6String4pushCsh9G4tFjYpDL_u8rust_uout(
          self, &ch);
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_7b344df938a8cdb9__uRNvMNtCsazOrLUIp1qL_u5alloc6stringNtB2_u6String8as_ubytesCsh9G4tFjYpDL_u8rust_uout(
    ::rs::alloc::string::String const&,
    rs_std::SliceRef<const ::std::uint8_t>* __ret_ptr);
}
inline rs_std::SliceRef<const ::std::uint8_t>(String::as_bytes)() const& $(
    __anon1) CRUBIT_LIFETIME_BOUND {
  auto&& self = *this;
  crubit::Slot<rs_std::SliceRef<const ::std::uint8_t>>
      __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_7b344df938a8cdb9__uRNvMNtCsazOrLUIp1qL_u5alloc6stringNtB2_u6String8as_ubytesCsh9G4tFjYpDL_u8rust_uout(
          self, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_7b344df938a8cdb9__uRNvMNtCsazOrLUIp1qL_u5alloc6stringNtB2_u6String8truncateCsh9G4tFjYpDL_u8rust_uout(
    ::rs::alloc::string::String&, ::std::uintptr_t);
}
inline void(String::truncate)(::std::uintptr_t new_len) {
  auto&& self = *this;
  return __crubit_internal::
      __crubit_thunk_7b344df938a8cdb9__uRNvMNtCsazOrLUIp1qL_u5alloc6stringNtB2_u6String8truncateCsh9G4tFjYpDL_u8rust_uout(
          self, new_len);
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_7b344df938a8cdb9__uRNvMNtCsazOrLUIp1qL_u5alloc6stringNtB2_u6String3popCsh9G4tFjYpDL_u8rust_uout(
    ::rs::alloc::string::String&, rs_std::Option<rs_std::char_>* __ret_ptr);
}
inline rs_std::Option<rs_std::char_>(String::pop)() {
  auto&& self = *this;
  crubit::Slot<rs_std::Option<rs_std::char_>> __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_7b344df938a8cdb9__uRNvMNtCsazOrLUIp1qL_u5alloc6stringNtB2_u6String3popCsh9G4tFjYpDL_u8rust_uout(
          self, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_7b344df938a8cdb9__uRNvMNtCsazOrLUIp1qL_u5alloc6stringNtB2_u6String6removeCsh9G4tFjYpDL_u8rust_uout(
    ::rs::alloc::string::String&, ::std::uintptr_t, rs_std::char_* __ret_ptr);
}
inline rs_std::char_(String::remove)(::std::uintptr_t idx) {
  auto&& self = *this;
  crubit::Slot<rs_std::char_> __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_7b344df938a8cdb9__uRNvMNtCsazOrLUIp1qL_u5alloc6stringNtB2_u6String6removeCsh9G4tFjYpDL_u8rust_uout(
          self, idx, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_7b344df938a8cdb9__uRINvMNtCsazOrLUIp1qL_u5alloc6stringNtB3_u6String6retainQDINtNtNtCsoHVEWV6jqw_u4core3ops8function5FnMutTcEEp6OutputbEL_uECsh9G4tFjYpDL_u8rust_uout(
    ::rs::alloc::string::String&, ::rs::internal::FnRefPayload);
}
inline void(String::retain)(::rs::FnRef<bool(rs_std::char_)> f) {
  auto&& self = *this;
  auto __f_invoker = [](void* __data, rs_std::char_* __arg_0) -> bool {
    return (*reinterpret_cast<::rs::FnRef<bool(rs_std::char_)>*>(__data))(
        ::std::move(*__arg_0));
  };
  ::rs::internal::FnRefPayload __f_payload{
      const_cast<void*>(reinterpret_cast<const void*>(&f)),
      reinterpret_cast<void (*)()>(+__f_invoker),
  };
  return __crubit_internal::
      __crubit_thunk_7b344df938a8cdb9__uRINvMNtCsazOrLUIp1qL_u5alloc6stringNtB3_u6String6retainQDINtNtNtCsoHVEWV6jqw_u4core3ops8function5FnMutTcEEp6OutputbEL_uECsh9G4tFjYpDL_u8rust_uout(
          self, __f_payload);
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_7b344df938a8cdb9__uRNvMNtCsazOrLUIp1qL_u5alloc6stringNtB2_u6String6insertCsh9G4tFjYpDL_u8rust_uout(
    ::rs::alloc::string::String&, ::std::uintptr_t, rs_std::char_*);
}
inline void(String::insert)(::std::uintptr_t idx, rs_std::char_ ch) {
  auto&& self = *this;
  return __crubit_internal::
      __crubit_thunk_7b344df938a8cdb9__uRNvMNtCsazOrLUIp1qL_u5alloc6stringNtB2_u6String6insertCsh9G4tFjYpDL_u8rust_uout(
          self, idx, &ch);
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_7b344df938a8cdb9__uRNvMNtCsazOrLUIp1qL_u5alloc6stringNtB2_u6String10insert_ustrCsh9G4tFjYpDL_u8rust_uout(
    ::rs::alloc::string::String&, ::std::uintptr_t, rs_std::StrRef*);
}
inline void(String::insert_str)(::std::uintptr_t idx, rs_std::StrRef string) {
  auto&& self = *this;
  crubit::internal::CheckNoMutableAliasing(
      crubit::internal::AsMutPtrDatas<::rs::alloc::string::String&>(self),
      crubit::internal::AsPtrDatas<rs_std::StrRef>(string));
  return __crubit_internal::
      __crubit_thunk_7b344df938a8cdb9__uRNvMNtCsazOrLUIp1qL_u5alloc6stringNtB2_u6String10insert_ustrCsh9G4tFjYpDL_u8rust_uout(
          self, idx, &string);
}

namespace __crubit_internal {
extern "C" rs_std::Vec<::std::uint8_t>& $(__anon1)
    __crubit_thunk_7b344df938a8cdb9__uRNvMNtCsazOrLUIp1qL_u5alloc6stringNtB2_u6String10as_umut_uvecCsh9G4tFjYpDL_u8rust_uout(
        ::rs::alloc::string::String&);
}
inline rs_std::Vec<::std::uint8_t>& $(__anon1)(String::as_mut_vec)() &
    $(__anon1) CRUBIT_LIFETIME_BOUND {
  auto&& self = *this;
  return __crubit_internal::
      __crubit_thunk_7b344df938a8cdb9__uRNvMNtCsazOrLUIp1qL_u5alloc6stringNtB2_u6String10as_umut_uvecCsh9G4tFjYpDL_u8rust_uout(
          self);
}

namespace __crubit_internal {
extern "C" ::std::uintptr_t
__crubit_thunk_7b344df938a8cdb9__uRNvMNtCsazOrLUIp1qL_u5alloc6stringNtB2_u6String3lenCsh9G4tFjYpDL_u8rust_uout(
    ::rs::alloc::string::String const&);
}
inline ::std::uintptr_t(String::len)() const {
  auto&& self = *this;
  return __crubit_internal::
      __crubit_thunk_7b344df938a8cdb9__uRNvMNtCsazOrLUIp1qL_u5alloc6stringNtB2_u6String3lenCsh9G4tFjYpDL_u8rust_uout(
          self);
}

namespace __crubit_internal {
extern "C" bool
__crubit_thunk_7b344df938a8cdb9__uRNvMNtCsazOrLUIp1qL_u5alloc6stringNtB2_u6String8is_uemptyCsh9G4tFjYpDL_u8rust_uout(
    ::rs::alloc::string::String const&);
}
inline bool(String::is_empty)() const {
  auto&& self = *this;
  return __crubit_internal::
      __crubit_thunk_7b344df938a8cdb9__uRNvMNtCsazOrLUIp1qL_u5alloc6stringNtB2_u6String8is_uemptyCsh9G4tFjYpDL_u8rust_uout(
          self);
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_7b344df938a8cdb9__uRNvMNtCsazOrLUIp1qL_u5alloc6stringNtB2_u6String9split_uoffCsh9G4tFjYpDL_u8rust_uout(
    ::rs::alloc::string::String&, ::std::uintptr_t,
    ::rs::alloc::string::String* __ret_ptr);
}
inline ::rs::alloc::string::String(String::split_off)(::std::uintptr_t at) {
  auto&& self = *this;
  crubit::Slot<::rs::alloc::string::String> __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_7b344df938a8cdb9__uRNvMNtCsazOrLUIp1qL_u5alloc6stringNtB2_u6String9split_uoffCsh9G4tFjYpDL_u8rust_uout(
          self, at, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_7b344df938a8cdb9__uRNvMNtCsazOrLUIp1qL_u5alloc6stringNtB2_u6String5clearCsh9G4tFjYpDL_u8rust_uout(
    ::rs::alloc::string::String&);
}
inline void(String::clear)() {
  auto&& self = *this;
  return __crubit_internal::
      __crubit_thunk_7b344df938a8cdb9__uRNvMNtCsazOrLUIp1qL_u5alloc6stringNtB2_u6String5clearCsh9G4tFjYpDL_u8rust_uout(
          self);
}
namespace __crubit_internal {
extern "C" void
__crubit_thunk_7b344df938a8cdb9__uRNvYNtNtCsazOrLUIp1qL_u5alloc6string6StringINtNtCsoHVEWV6jqw_u4core7convert4IntoINtNtB6_u3vec3VechEE4intoCsh9G4tFjYpDL_u8rust_uout(
    ::rs::alloc::string::String*, rs_std::Vec<::std::uint8_t>* __ret_ptr);
}
inline ::rs::alloc::string::String::operator rs_std::Vec<::std::uint8_t>() {
  auto&& self = *this;
  crubit::Slot self_slot((::std::move(self)));
  crubit::Slot<rs_std::Vec<::std::uint8_t>> __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_7b344df938a8cdb9__uRNvYNtNtCsazOrLUIp1qL_u5alloc6string6StringINtNtCsoHVEWV6jqw_u4core7convert4IntoINtNtB6_u3vec3VechEE4intoCsh9G4tFjYpDL_u8rust_uout(
          self_slot.Get(), __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}
namespace __crubit_internal {
extern "C" bool
__crubit_thunk_7b344df938a8cdb9__uRNvXs1h_uNtCsazOrLUIp1qL_u5alloc6stringNtB6_u6StringNtNtCsoHVEWV6jqw_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
    ::rs::alloc::string::String const&, ::rs::alloc::string::String const&);
}
inline bool(String::operator==)(
    ::rs::alloc::string::String const& other) const {
  auto&& self = *this;
  return __crubit_internal::
      __crubit_thunk_7b344df938a8cdb9__uRNvXs1h_uNtCsazOrLUIp1qL_u5alloc6stringNtB6_u6StringNtNtCsoHVEWV6jqw_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
          self, other);
}

namespace __crubit_internal {
extern "C" bool
__crubit_thunk_7b344df938a8cdb9__uRNvXs1w_uNtCsazOrLUIp1qL_u5alloc6stringNtB6_u6StringINtNtCsoHVEWV6jqw_u4core3cmp9PartialEqeE2eqCsh9G4tFjYpDL_u8rust_uout(
    ::rs::alloc::string::String const&, rs_std::StrRef*);
}
inline bool(String::operator==)(rs_std::StrRef other) const {
  auto&& self = *this;
  return __crubit_internal::
      __crubit_thunk_7b344df938a8cdb9__uRNvXs1w_uNtCsazOrLUIp1qL_u5alloc6stringNtB6_u6StringINtNtCsoHVEWV6jqw_u4core3cmp9PartialEqeE2eqCsh9G4tFjYpDL_u8rust_uout(
          self, &other);
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_7b344df938a8cdb9__uRNvXst_uNtCsazOrLUIp1qL_u5alloc6stringNtB5_u6StringINtNtNtCsoHVEWV6jqw_u4core3ops5arith3AddReE3addCsh9G4tFjYpDL_u8rust_uout(
    ::rs::alloc::string::String*, rs_std::StrRef*,
    ::rs::alloc::string::String* __ret_ptr);
}
inline ::rs::alloc::string::String(String::operator+)(rs_std::StrRef other) && {
  auto&& self = *this;
  crubit::Slot self_slot((::std::move(self)));
  crubit::Slot<::rs::alloc::string::String> __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_7b344df938a8cdb9__uRNvXst_uNtCsazOrLUIp1qL_u5alloc6stringNtB5_u6StringINtNtNtCsoHVEWV6jqw_u4core3ops5arith3AddReE3addCsh9G4tFjYpDL_u8rust_uout(
          self_slot.Get(), &other, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_7b344df938a8cdb9__uRNvXsu_uNtCsazOrLUIp1qL_u5alloc6stringNtB5_u6StringINtNtNtCsoHVEWV6jqw_u4core3ops5arith9AddAssignReE10add_uassignCsh9G4tFjYpDL_u8rust_uout(
    ::rs::alloc::string::String&, rs_std::StrRef*);
}
inline void(String::operator+=)(rs_std::StrRef other) {
  auto&& self = *this;
  crubit::internal::CheckNoMutableAliasing(
      crubit::internal::AsMutPtrDatas<::rs::alloc::string::String&>(self),
      crubit::internal::AsPtrDatas<rs_std::StrRef>(other));
  return __crubit_internal::
      __crubit_thunk_7b344df938a8cdb9__uRNvXsu_uNtCsazOrLUIp1qL_u5alloc6stringNtB5_u6StringINtNtNtCsoHVEWV6jqw_u4core3ops5arith9AddAssignReE10add_uassignCsh9G4tFjYpDL_u8rust_uout(
          self, &other);
}
namespace __crubit_internal {
extern "C" void
__crubit_thunk_7b344df938a8cdb9__uRNvYNtNtCsazOrLUIp1qL_u5alloc6string6StringINtNtCsoHVEWV6jqw_u4core7convert4FromReE4fromCsh9G4tFjYpDL_u8rust_uout(
    rs_std::StrRef*, ::rs::alloc::string::String* __ret_ptr);
}
inline ::rs::alloc::string::String::String(rs_std::StrRef value) {
  __crubit_internal::
      __crubit_thunk_7b344df938a8cdb9__uRNvYNtNtCsazOrLUIp1qL_u5alloc6string6StringINtNtCsoHVEWV6jqw_u4core7convert4FromReE4fromCsh9G4tFjYpDL_u8rust_uout(
          &value, this);
}
namespace __crubit_internal {
extern "C" void
__crubit_thunk_7b344df938a8cdb9__uRNvYNtNtCsazOrLUIp1qL_u5alloc6string6StringINtNtCsoHVEWV6jqw_u4core7convert4FromcE4fromCsh9G4tFjYpDL_u8rust_uout(
    rs_std::char_*, ::rs::alloc::string::String* __ret_ptr);
}
inline ::rs::alloc::string::String::String(rs_std::char_ value) {
  __crubit_internal::
      __crubit_thunk_7b344df938a8cdb9__uRNvYNtNtCsazOrLUIp1qL_u5alloc6string6StringINtNtCsoHVEWV6jqw_u4core7convert4FromcE4fromCsh9G4tFjYpDL_u8rust_uout(
          &value, this);
}
extern "C" void
__crubit_thunk_7b344df938a8cdb9__uRNvYNtNtCsazOrLUIp1qL_u5alloc6string6StringNtB4_u8ToString9to_ustringCsh9G4tFjYpDL_u8rust_uout(
    ::rs::alloc::string::String const&, ::rs::alloc::string::String* __ret_ptr);
namespace __crubit_internal {
extern "C" ::std::uint64_t
__crubit_thunk_7b344df938a8cdb9__uRNvYNtNtCsazOrLUIp1qL_u5alloc6string6StringNtNtCsoHVEWV6jqw_u4core4hash4Hash4hashCsh9G4tFjYpDL_u8rust_uout(
    ::rs::alloc::string::String const&);
}
template <typename H>
inline H AbslHashValue(H h, const ::rs::alloc::string::String& self) {
  return H::combine(
      ::std::move(h),
      __crubit_internal::
          __crubit_thunk_7b344df938a8cdb9__uRNvYNtNtCsazOrLUIp1qL_u5alloc6string6StringNtNtCsoHVEWV6jqw_u4core4hash4Hash4hashCsh9G4tFjYpDL_u8rust_uout(
              self));
}
namespace __crubit_internal {
extern "C" ::std::int8_t
__crubit_thunk_7b344df938a8cdb9__uRNvYNtNtCsazOrLUIp1qL_u5alloc6string6StringNtNtCsoHVEWV6jqw_u4core3cmp3Ord3cmpCsh9G4tFjYpDL_u8rust_uout(
    ::rs::alloc::string::String const&, ::rs::alloc::string::String const&);
}
inline ::std::strong_ordering(::rs::alloc::string::String::operator<=>)(
    const String& other) const {
  auto val = __crubit_internal::
      __crubit_thunk_7b344df938a8cdb9__uRNvYNtNtCsazOrLUIp1qL_u5alloc6string6StringNtNtCsoHVEWV6jqw_u4core3cmp3Ord3cmpCsh9G4tFjYpDL_u8rust_uout(
          *this, other);
  switch (val) {
    case -1:
      return ::std::strong_ordering::less;
    case 0:
      return ::std::strong_ordering::equal;
    case 1:
      return ::std::strong_ordering::greater;
    default:
      CRUBIT_UNREACHABLE();
  }
}
inline void ::rs::alloc::string::String::__crubit_field_offset_assertions() {
  using __crubit_assert_type = ::rs::alloc::string::String;
  static_assert(0 == offsetof(__crubit_assert_type, vec));
}
}  // namespace rs::alloc::string

namespace rs::alloc::alloc {

// Error generating bindings for struct `core::alloc::AllocError` defined at
// library/core/src/alloc/mod.rs;l=32: Failed to format type for the definition
// of `core::alloc::AllocError`: Zero-sized types (ZSTs) are not supported
// (b/258259459)

using ::rs::core::alloc::Allocator;
}  // namespace rs::alloc::alloc

namespace rs::alloc::alloc {
using ::rs::core::alloc::GlobalAlloc;
}

namespace rs::alloc::alloc {

//  Layout of a block of memory.
//
//  An instance of `Layout` describes a particular layout of memory.
//  You build a `Layout` up as an input to give to an allocator.
//
//  All layouts have an associated size and a power-of-two alignment. The size,
//  when rounded up to the nearest multiple of `align`, does not overflow
//  `isize` (i.e., the rounded value will always be less than or equal to
//  `isize::MAX`).
//
//  (Note that layouts are *not* required to have non-zero size,
//  even though `GlobalAlloc` requires that all memory requests
//  be non-zero in size. A caller must either ensure that conditions
//  like this are met, use specific allocators with looser
//  requirements, or use the more lenient `Allocator` interface.)
//
// Generated from: library/core/src/alloc/layout.rs;l=30
using Layout CRUBIT_INTERNAL_RUST_TYPE(":: core :: alloc :: Layout") =
    ::rs::core::alloc::Layout;

// Error generating bindings for struct `core::alloc::LayoutError` defined at
// library/core/src/alloc/layout.rs;l=612: Failed to format type for the
// definition of `core::alloc::LayoutError`: Zero-sized types (ZSTs) are not
// supported (b/258259459)

// Error generating bindings for struct `core::alloc::LayoutError` defined at
// library/core/src/alloc/layout.rs;l=612: Failed to format type for the
// definition of `core::alloc::LayoutError`: Zero-sized types (ZSTs) are not
// supported (b/258259459)

}  // namespace rs::alloc::alloc

namespace rs::alloc::borrow {

// Error generating bindings for trait `core::borrow::Borrow` defined at
// library/core/src/borrow.rs;l=158: Aliases to generic trait
// `core::borrow::Borrow` are not supported.

// Error generating bindings for trait `core::borrow::BorrowMut` defined at
// library/core/src/borrow.rs;l=190: Aliases to generic trait
// `core::borrow::BorrowMut` are not supported.

}  // namespace rs::alloc::borrow

namespace rs::alloc::fmt {

//  Possible alignments returned by `Formatter::align`
//
// Generated from: library/core/src/fmt/mod.rs;l=27
using Alignment CRUBIT_INTERNAL_RUST_TYPE(":: core :: fmt :: Alignment") =
    ::rs::core::fmt::Alignment;
//  This structure represents a safely precompiled version of a format string
//  and its arguments. This cannot be generated at runtime because it cannot
//  safely be done, so no constructors are given and the fields are private
//  to prevent modification.
//
//  The [`format_args!`] macro will safely create an instance of this structure.
//  The macro validates the format string at compile-time so usage of the
//  [`write()`] and [`format()`] functions can be safely performed.
//
//  You can use the `Arguments<'a>` that [`format_args!`] returns in `Debug`
//  and `Display` contexts as seen below. The example also shows that `Debug`
//  and `Display` format to the same thing: the interpolated format string
//  in `format_args!`.
//
//  ```rust
//  let debug = format!("{:?}", format_args!("{} foo {:?}", 1, 2));
//  let display = format!("{}", format_args!("{} foo {:?}", 1, 2));
//  assert_eq!("1 foo 2", display);
//  assert_eq!(display, debug);
//  ```
//
//  [`format()`]: ../../std/fmt/fn.format.html
//
// Generated from: library/core/src/fmt/mod.rs;l=716
using Arguments CRUBIT_INTERNAL_RUST_TYPE(":: core :: fmt :: Arguments") =
    ::rs::core::fmt::Arguments;
using ::rs::core::fmt::Binary;
}  // namespace rs::alloc::fmt

namespace rs::alloc::fmt {

// Error generating bindings for derive macro `core::fmt::Debug` defined at
// library/core/src/fmt/mod.rs;l=1093: Unsupported use statement that refers to
// this type of the entity: core::fmt::Debug of kind Macro(MacroKinds(4))

}

namespace rs::alloc::fmt {
using ::rs::core::fmt::Debug;
}

namespace rs::alloc::fmt {

//  A struct to help with [`fmt::Debug`](Debug) implementations.
//
//  This is useful when you wish to output a formatted list of items as a part
//  of your [`Debug::fmt`] implementation.
//
//  This can be constructed by the [`Formatter::debug_list`] method.
//
//  # Examples
//
//  ```
//  use std::fmt;
//
//  struct Foo(Vec<i32>);
//
//  impl fmt::Debug for Foo {
//      fn fmt(&self, fmt: &mut fmt::Formatter<'_>) -> fmt::Result {
//          fmt.debug_list().entries(self.0.iter()).finish()
//      }
//  }
//
//  assert_eq!(
//      format!("{:?}", Foo(vec![10, 11])),
//      "[10, 11]",
//  );
//  ```
//
// Generated from: library/core/src/fmt/builders.rs;l=804
using DebugList CRUBIT_INTERNAL_RUST_TYPE(":: core :: fmt :: DebugList") =
    ::rs::core::fmt::DebugList;
//  A struct to help with [`fmt::Debug`](Debug) implementations.
//
//  This is useful when you wish to output a formatted map as a part of your
//  [`Debug::fmt`] implementation.
//
//  This can be constructed by the [`Formatter::debug_map`] method.
//
//  # Examples
//
//  ```
//  use std::fmt;
//
//  struct Foo(Vec<(String, i32)>);
//
//  impl fmt::Debug for Foo {
//      fn fmt(&self, fmt: &mut fmt::Formatter<'_>) -> fmt::Result {
//          fmt.debug_map().entries(self.0.iter().map(|&(ref k, ref v)| (k,
//          v))).finish()
//      }
//  }
//
//  assert_eq!(
//      format!("{:?}", Foo(vec![("A".to_string(), 10), ("B".to_string(),
//      11)])), r#"{"A": 10, "B": 11}"#,
//  );
//  ```
//
// Generated from: library/core/src/fmt/builders.rs;l=1018
using DebugMap CRUBIT_INTERNAL_RUST_TYPE(":: core :: fmt :: DebugMap") =
    ::rs::core::fmt::DebugMap;
//  A struct to help with [`fmt::Debug`](Debug) implementations.
//
//  This is useful when you wish to output a formatted set of items as a part
//  of your [`Debug::fmt`] implementation.
//
//  This can be constructed by the [`Formatter::debug_set`] method.
//
//  # Examples
//
//  ```
//  use std::fmt;
//
//  struct Foo(Vec<i32>);
//
//  impl fmt::Debug for Foo {
//      fn fmt(&self, fmt: &mut fmt::Formatter<'_>) -> fmt::Result {
//          fmt.debug_set().entries(self.0.iter()).finish()
//      }
//  }
//
//  assert_eq!(
//      format!("{:?}", Foo(vec![10, 11])),
//      "{10, 11}",
//  );
//  ```
//
// Generated from: library/core/src/fmt/builders.rs;l=589
using DebugSet CRUBIT_INTERNAL_RUST_TYPE(":: core :: fmt :: DebugSet") =
    ::rs::core::fmt::DebugSet;
//  A struct to help with [`fmt::Debug`](Debug) implementations.
//
//  This is useful when you wish to output a formatted struct as a part of your
//  [`Debug::fmt`] implementation.
//
//  This can be constructed by the [`Formatter::debug_struct`] method.
//
//  # Examples
//
//  ```
//  use std::fmt;
//
//  struct Foo {
//      bar: i32,
//      baz: String,
//  }
//
//  impl fmt::Debug for Foo {
//      fn fmt(&self, fmt: &mut fmt::Formatter<'_>) -> fmt::Result {
//          fmt.debug_struct("Foo")
//             .field("bar", &self.bar)
//             .field("baz", &self.baz)
//             .finish()
//      }
//  }
//
//  assert_eq!(
//      format!("{:?}", Foo { bar: 10, baz: "Hello World".to_string() }),
//      r#"Foo { bar: 10, baz: "Hello World" }"#,
//  );
//  ```
//
// Generated from: library/core/src/fmt/builders.rs;l=112
using DebugStruct CRUBIT_INTERNAL_RUST_TYPE(":: core :: fmt :: DebugStruct") =
    ::rs::core::fmt::DebugStruct;
//  A struct to help with [`fmt::Debug`](Debug) implementations.
//
//  This is useful when you wish to output a formatted tuple as a part of your
//  [`Debug::fmt`] implementation.
//
//  This can be constructed by the [`Formatter::debug_tuple`] method.
//
//  # Examples
//
//  ```
//  use std::fmt;
//
//  struct Foo(i32, String);
//
//  impl fmt::Debug for Foo {
//      fn fmt(&self, fmt: &mut fmt::Formatter<'_>) -> fmt::Result {
//          fmt.debug_tuple("Foo")
//             .field(&self.0)
//             .field(&self.1)
//             .finish()
//      }
//  }
//
//  assert_eq!(
//      format!("{:?}", Foo(10, "Hello World".to_string())),
//      r#"Foo(10, "Hello World")"#,
//  );
//  ```
//
// Generated from: library/core/src/fmt/builders.rs;l=340
using DebugTuple CRUBIT_INTERNAL_RUST_TYPE(":: core :: fmt :: DebugTuple") =
    ::rs::core::fmt::DebugTuple;
}  // namespace rs::alloc::fmt

namespace rs::alloc::fmt {
using ::rs::core::fmt::Display;

// Error generating bindings for struct `core::fmt::Error` defined at
// library/core/src/fmt/mod.rs;l=111: Failed to format type for the definition
// of `core::fmt::Error`: Zero-sized types (ZSTs) are not supported
// (b/258259459)

//  Configuration for formatting.
//
//  A `Formatter` represents various options related to formatting. Users do not
//  construct `Formatter`s directly; a mutable reference to one is passed to
//  the `fmt` method of all formatting traits, like [`Debug`] and [`Display`].
//
//  To interact with a `Formatter`, you'll call various methods to change the
//  various options related to formatting. For examples, please see the
//  documentation of the methods defined on `Formatter` below.
//
// Generated from: library/core/src/fmt/mod.rs;l=561
using Formatter CRUBIT_INTERNAL_RUST_TYPE(":: core :: fmt :: Formatter") =
    ::rs::core::fmt::Formatter;
}  // namespace rs::alloc::fmt

namespace rs::alloc::fmt {

// Error generating bindings for struct `core::fmt::FromFn` defined at
// library/core/src/fmt/builders.rs;l=1428: crubit.rs/errors/unsupported_type:
// Generic types are not supported yet (b/259749095)

}

namespace rs::alloc::fmt {
using ::rs::core::fmt::LowerExp;
using ::rs::core::fmt::LowerHex;
}  // namespace rs::alloc::fmt

namespace rs::alloc::fmt {

// Error generating bindings for struct `core::fmt::NumBuffer` defined at
// library/core/src/fmt/num_buffer.rs;l=66: crubit.rs/errors/unsupported_type:
// Generic types are not supported yet (b/259749095)

}

namespace rs::alloc::fmt {
using ::rs::core::fmt::Octal;
using ::rs::core::fmt::Pointer;

// Error generating bindings for type alias `core::fmt::Result` defined at
// library/core/src/fmt/mod.rs;l=74: Failed to format type for the definition of
// `core::fmt::Error`: Zero-sized types (ZSTs) are not supported (b/258259459)

using ::rs::core::fmt::UpperExp;
using ::rs::core::fmt::UpperHex;
using ::rs::core::fmt::Write;
}  // namespace rs::alloc::fmt

namespace rs::alloc::fmt {

// Error generating bindings for function `core::fmt::from_fn` defined at
// library/core/src/fmt/builders.rs;l=1420: Unable to `use` function whose
// bindings failed: No valid non-generic replacement for generic type param `F`

}

namespace rs::alloc::fmt {

// Error generating bindings for function `core::fmt::write` defined at
// library/core/src/fmt/mod.rs;l=1631: Unable to `use` function whose bindings
// failed: Error formatting function return type `core::result::Result<(),
// core::fmt::Error>`
//
// Caused by:
//     0: Failed to format type for the definition of `core::fmt::Error`
//     1: Zero-sized types (ZSTs) are not supported (b/258259459)

}

namespace rs::alloc::slice {

// Error generating bindings for struct `core::slice::ArrayWindows` defined at
// library/core/src/slice/iter.rs;l=2179: crubit.rs/errors/unsupported_type:
// Generic types are not supported yet (b/259749095)

// Error generating bindings for struct `core::slice::ChunkBy` defined at
// library/core/src/slice/iter.rs;l=3013: crubit.rs/errors/unsupported_type:
// Generic types are not supported yet (b/259749095)

// Error generating bindings for struct `core::slice::ChunkByMut` defined at
// library/core/src/slice/iter.rs;l=3121: crubit.rs/errors/unsupported_type:
// Generic types are not supported yet (b/259749095)

// Error generating bindings for struct `core::slice::Chunks` defined at
// library/core/src/slice/iter.rs;l=1478: crubit.rs/errors/unsupported_type:
// Generic types are not supported yet (b/259749095)

// Error generating bindings for struct `core::slice::ChunksExact` defined at
// library/core/src/slice/iter.rs;l=1841: crubit.rs/errors/unsupported_type:
// Generic types are not supported yet (b/259749095)

// Error generating bindings for struct `core::slice::ChunksExactMut` defined at
// library/core/src/slice/iter.rs;l=2011: crubit.rs/errors/unsupported_type:
// Generic types are not supported yet (b/259749095)

// Error generating bindings for struct `core::slice::ChunksMut` defined at
// library/core/src/slice/iter.rs;l=1654: crubit.rs/errors/unsupported_type:
// Generic types are not supported yet (b/259749095)

}  // namespace rs::alloc::slice

namespace rs::alloc::slice {

//  An iterator over the escaped version of a byte slice.
//
//  This `struct` is created by the [`slice::escape_ascii`] method. See its
//  documentation for more information.
//
// Generated from: library/core/src/slice/ascii.rs;l=473
using EscapeAscii CRUBIT_INTERNAL_RUST_TYPE(":: core :: slice :: EscapeAscii") =
    ::rs::core::slice::EscapeAscii;
}  // namespace rs::alloc::slice

namespace rs::alloc::slice {

//  The error type returned by [`get_disjoint_mut`][`slice::get_disjoint_mut`].
//
//  It indicates one of two possible errors:
//  - An index is out-of-bounds.
//  - The same index appeared multiple times in the array
//    (or different but overlapping indices when ranges are provided).
//
//  # Examples
//
//  ```
//  use std::slice::GetDisjointMutError;
//
//  let v = &mut [1, 2, 3];
//  assert_eq!(v.get_disjoint_mut([0, 999]),
//  Err(GetDisjointMutError::IndexOutOfBounds));
//  assert_eq!(v.get_disjoint_mut([1, 1]),
//  Err(GetDisjointMutError::OverlappingIndices));
//  ```
//
// Generated from: library/core/src/slice/mod.rs;l=5739
using GetDisjointMutError CRUBIT_INTERNAL_RUST_TYPE(
    ":: core :: slice :: GetDisjointMutError") =
    ::rs::core::slice::GetDisjointMutError;
}  // namespace rs::alloc::slice

namespace rs::alloc::slice {

// Error generating bindings for struct `core::slice::Iter` defined at
// library/core/src/slice/iter.rs;l=67: crubit.rs/errors/unsupported_type:
// Generic types are not supported yet (b/259749095)

// Error generating bindings for struct `core::slice::IterMut` defined at
// library/core/src/slice/iter.rs;l=192: crubit.rs/errors/unsupported_type:
// Generic types are not supported yet (b/259749095)

// Error generating bindings for struct `core::slice::RChunks` defined at
// library/core/src/slice/iter.rs;l=2309: crubit.rs/errors/unsupported_type:
// Generic types are not supported yet (b/259749095)

// Error generating bindings for struct `core::slice::RChunksExact` defined at
// library/core/src/slice/iter.rs;l=2651: crubit.rs/errors/unsupported_type:
// Generic types are not supported yet (b/259749095)

// Error generating bindings for struct `core::slice::RChunksExactMut` defined
// at library/core/src/slice/iter.rs;l=2828: crubit.rs/errors/unsupported_type:
// Generic types are not supported yet (b/259749095)

// Error generating bindings for struct `core::slice::RChunksMut` defined at
// library/core/src/slice/iter.rs;l=2469: crubit.rs/errors/unsupported_type:
// Generic types are not supported yet (b/259749095)

// Error generating bindings for struct `core::slice::RSplit` defined at
// library/core/src/slice/iter.rs;l=932: crubit.rs/errors/unsupported_type:
// Generic types are not supported yet (b/259749095)

// Error generating bindings for struct `core::slice::RSplitMut` defined at
// library/core/src/slice/iter.rs;l=1029: crubit.rs/errors/unsupported_type:
// Generic types are not supported yet (b/259749095)

// Error generating bindings for struct `core::slice::RSplitN` defined at
// library/core/src/slice/iter.rs;l=1199: crubit.rs/errors/unsupported_type:
// Generic types are not supported yet (b/259749095)

// Error generating bindings for struct `core::slice::RSplitNMut` defined at
// library/core/src/slice/iter.rs;l=1280: crubit.rs/errors/unsupported_type:
// Generic types are not supported yet (b/259749095)

}  // namespace rs::alloc::slice

namespace rs::alloc::slice {

// Error generating bindings for trait `core::slice::SliceIndex` defined at
// library/core/src/slice/index.rs;l=124: Aliases to generic trait
// `core::slice::SliceIndex` are not supported.

}

namespace rs::alloc::slice {

// Error generating bindings for struct `core::slice::Split` defined at
// library/core/src/slice/iter.rs;l=399: crubit.rs/errors/unsupported_type:
// Generic types are not supported yet (b/259749095)

// Error generating bindings for struct `core::slice::SplitInclusive` defined at
// library/core/src/slice/iter.rs;l=555: crubit.rs/errors/unsupported_type:
// Generic types are not supported yet (b/259749095)

// Error generating bindings for struct `core::slice::SplitInclusiveMut` defined
// at library/core/src/slice/iter.rs;l=805: crubit.rs/errors/unsupported_type:
// Generic types are not supported yet (b/259749095)

// Error generating bindings for struct `core::slice::SplitMut` defined at
// library/core/src/slice/iter.rs;l=676: crubit.rs/errors/unsupported_type:
// Generic types are not supported yet (b/259749095)

// Error generating bindings for struct `core::slice::SplitN` defined at
// library/core/src/slice/iter.rs;l=1155: crubit.rs/errors/unsupported_type:
// Generic types are not supported yet (b/259749095)

// Error generating bindings for struct `core::slice::SplitNMut` defined at
// library/core/src/slice/iter.rs;l=1239: crubit.rs/errors/unsupported_type:
// Generic types are not supported yet (b/259749095)

// Error generating bindings for struct `core::slice::Windows` defined at
// library/core/src/slice/iter.rs;l=1329: crubit.rs/errors/unsupported_type:
// Generic types are not supported yet (b/259749095)

}  // namespace rs::alloc::slice

namespace rs::alloc::slice {

// Error generating bindings for function `core::slice::from_mut` defined at
// library/core/src/slice/raw.rs;l=211: Unable to `use` function whose bindings
// failed: No valid non-generic replacement for generic type param `T`

// Error generating bindings for function `core::slice::from_raw_parts` defined
// at library/core/src/slice/raw.rs;l=124: Unable to `use` function whose
// bindings failed: No valid non-generic replacement for generic type param `T`

// Error generating bindings for function `core::slice::from_raw_parts_mut`
// defined at library/core/src/slice/raw.rs;l=179: Unable to `use` function
// whose bindings failed: No valid non-generic replacement for generic type
// param `T`

// Error generating bindings for function `core::slice::from_ref` defined at
// library/core/src/slice/raw.rs;l=203: Unable to `use` function whose bindings
// failed: No valid non-generic replacement for generic type param `T`

}  // namespace rs::alloc::slice

namespace rs::alloc::str {

//  An iterator over the bytes of a string slice.
//
//  This struct is created by the [`bytes`] method on [`str`].
//  See its documentation for more.
//
//  [`bytes`]: str::bytes
//
// Generated from: library/core/src/str/iter.rs;l=284
using Bytes CRUBIT_INTERNAL_RUST_TYPE(":: core :: str :: Bytes") =
    ::rs::core::str::Bytes;
//  An iterator over the [`char`]s of a string slice, and their positions.
//
//  This struct is created by the [`char_indices`] method on [`str`].
//  See its documentation for more.
//
//  [`char`]: prim@char
//  [`char_indices`]: str::char_indices
//
// Generated from: library/core/src/str/iter.rs;l=172
using CharIndices CRUBIT_INTERNAL_RUST_TYPE(":: core :: str :: CharIndices") =
    ::rs::core::str::CharIndices;
//  An iterator over the [`char`]s of a string slice.
//
//
//  This struct is created by the [`chars`] method on [`str`].
//  See its documentation for more.
//
//  [`char`]: prim@char
//  [`chars`]: str::chars
//
// Generated from: library/core/src/str/iter.rs;l=30
using Chars CRUBIT_INTERNAL_RUST_TYPE(":: core :: str :: Chars") =
    ::rs::core::str::Chars;
//  An iterator of [`u16`] over the string encoded as UTF-16.
//
//  This struct is created by the [`encode_utf16`] method on [`str`].
//  See its documentation for more.
//
//  [`encode_utf16`]: str::encode_utf16
//
// Generated from: library/core/src/str/iter.rs;l=1486
using EncodeUtf16 CRUBIT_INTERNAL_RUST_TYPE(":: core :: str :: EncodeUtf16") =
    ::rs::core::str::EncodeUtf16;
//  The return type of [`str::escape_debug`].
//
// Generated from: library/core/src/str/iter.rs;l=1581
using EscapeDebug CRUBIT_INTERNAL_RUST_TYPE(":: core :: str :: EscapeDebug") =
    ::rs::core::str::EscapeDebug;
//  The return type of [`str::escape_default`].
//
// Generated from: library/core/src/str/iter.rs;l=1588
using EscapeDefault CRUBIT_INTERNAL_RUST_TYPE(
    ":: core :: str :: EscapeDefault") = ::rs::core::str::EscapeDefault;
//  The return type of [`str::escape_unicode`].
//
// Generated from: library/core/src/str/iter.rs;l=1595
using EscapeUnicode CRUBIT_INTERNAL_RUST_TYPE(
    ":: core :: str :: EscapeUnicode") = ::rs::core::str::EscapeUnicode;
}  // namespace rs::alloc::str

namespace rs::alloc::str {
using ::rs::core::str::FromStr;
}

namespace rs::alloc::str {

//  An iterator over the lines of a string, as string slices.
//
//  This struct is created with the [`lines`] method on [`str`].
//  See its documentation for more.
//
//  [`lines`]: str::lines
//
// Generated from: library/core/src/str/iter.rs;l=1162
using Lines CRUBIT_INTERNAL_RUST_TYPE(":: core :: str :: Lines") =
    ::rs::core::str::Lines;
//  Created with the method [`lines_any`].
//
//  [`lines_any`]: str::lines_any
//
// Generated from: library/core/src/str/iter.rs;l=1228
using LinesAny CRUBIT_INTERNAL_RUST_TYPE(":: core :: str :: LinesAny")
    [[deprecated("use lines()/Lines instead now")]] = ::rs::core::str::LinesAny;

// Error generating bindings for struct `core::str::MatchIndices` defined at
// library/core/src/str/iter.rs;l=492: crubit.rs/errors/unsupported_type:
// Generic types are not supported yet (b/259749095)

// Error generating bindings for struct `core::str::Matches` defined at
// library/core/src/str/iter.rs;l=492: crubit.rs/errors/unsupported_type:
// Generic types are not supported yet (b/259749095)

}  // namespace rs::alloc::str

namespace rs::alloc::str {

// Error generating bindings for struct `core::str::ParseBoolError` defined at
// library/core/src/str/error.rs;l=135: Failed to format type for the definition
// of `core::str::ParseBoolError`: Zero-sized types (ZSTs) are not supported
// (b/258259459)

}

namespace rs::alloc::str {

// Error generating bindings for struct `core::str::RMatchIndices` defined at
// library/core/src/str/iter.rs;l=528: crubit.rs/errors/unsupported_type:
// Generic types are not supported yet (b/259749095)

// Error generating bindings for struct `core::str::RMatches` defined at
// library/core/src/str/iter.rs;l=528: crubit.rs/errors/unsupported_type:
// Generic types are not supported yet (b/259749095)

// Error generating bindings for struct `core::str::RSplit` defined at
// library/core/src/str/iter.rs;l=528: crubit.rs/errors/unsupported_type:
// Generic types are not supported yet (b/259749095)

// Error generating bindings for struct `core::str::RSplitN` defined at
// library/core/src/str/iter.rs;l=528: crubit.rs/errors/unsupported_type:
// Generic types are not supported yet (b/259749095)

// Error generating bindings for struct `core::str::RSplitTerminator` defined at
// library/core/src/str/iter.rs;l=528: crubit.rs/errors/unsupported_type:
// Generic types are not supported yet (b/259749095)

// Error generating bindings for struct `core::str::Split` defined at
// library/core/src/str/iter.rs;l=492: crubit.rs/errors/unsupported_type:
// Generic types are not supported yet (b/259749095)

//  An iterator over the non-ASCII-whitespace substrings of a string,
//  separated by any amount of ASCII whitespace.
//
//  This struct is created by the [`split_ascii_whitespace`] method on [`str`].
//  See its documentation for more.
//
//  [`split_ascii_whitespace`]: str::split_ascii_whitespace
//
// Generated from: library/core/src/str/iter.rs;l=1281
using SplitAsciiWhitespace CRUBIT_INTERNAL_RUST_TYPE(
    ":: core :: str :: SplitAsciiWhitespace") =
    ::rs::core::str::SplitAsciiWhitespace;

// Error generating bindings for struct `core::str::SplitInclusive` defined at
// library/core/src/str/iter.rs;l=1296: crubit.rs/errors/unsupported_type:
// Generic types are not supported yet (b/259749095)

// Error generating bindings for struct `core::str::SplitN` defined at
// library/core/src/str/iter.rs;l=492: crubit.rs/errors/unsupported_type:
// Generic types are not supported yet (b/259749095)

// Error generating bindings for struct `core::str::SplitTerminator` defined at
// library/core/src/str/iter.rs;l=492: crubit.rs/errors/unsupported_type:
// Generic types are not supported yet (b/259749095)

//  An iterator over the non-whitespace substrings of a string,
//  separated by any amount of whitespace.
//
//  This struct is created by the [`split_whitespace`] method on [`str`].
//  See its documentation for more.
//
//  [`split_whitespace`]: str::split_whitespace
//
// Generated from: library/core/src/str/iter.rs;l=1268
using SplitWhitespace CRUBIT_INTERNAL_RUST_TYPE(
    ":: core :: str :: SplitWhitespace") = ::rs::core::str::SplitWhitespace;
}  // namespace rs::alloc::str

namespace rs::alloc::str {

//  An item returned by the [`Utf8Chunks`] iterator.
//
//  A `Utf8Chunk` stores a sequence of [`u8`] up to the first broken character
//  when decoding a UTF-8 string.
//
//  # Examples
//
//  ```
//  // An invalid UTF-8 string
//  let bytes = b"foo\\xF1\\x80bar";
//
//  // Decode the first `Utf8Chunk`
//  let chunk = bytes.utf8_chunks().next().unwrap();
//
//  // The first three characters are valid UTF-8
//  assert_eq!("foo", chunk.valid());
//
//  // The fourth character is broken
//  assert_eq!(b"\\xF1\\x80", chunk.invalid());
//  ```
//
// Generated from: library/core/src/str/lossy.rs;l=72
using Utf8Chunk CRUBIT_INTERNAL_RUST_TYPE(":: core :: str :: Utf8Chunk") =
    ::rs::core::str::Utf8Chunk;
//  An iterator used to decode a slice of mostly UTF-8 bytes to string slices
//  ([`&str`]) and byte slices ([`&[u8]`][byteslice]).
//
//  This struct is created by the [`utf8_chunks`] method on bytes slices.
//  If you want a simple conversion from UTF-8 byte slices to string slices,
//  [`from_utf8`] is easier to use.
//
//  See the [`Utf8Chunk`] type for documentation of the items yielded by this
//  iterator.
//
//  [byteslice]: slice
//  [`utf8_chunks`]: slice::utf8_chunks
//  [`from_utf8`]: super::from_utf8
//
//  # Examples
//
//  This can be used to create functionality similar to
//  [`String::from_utf8_lossy`] without allocating heap memory:
//
//  ```
//  fn from_utf8_lossy<F>(input: &[u8], mut push: F) where F: FnMut(&str) {
//      for chunk in input.utf8_chunks() {
//          push(chunk.valid());
//
//          if !chunk.invalid().is_empty() {
//              push("\\u{FFFD}");
//          }
//      }
//  }
//  ```
//
//  [`String::from_utf8_lossy`]:
//  ../../std/string/struct.String.html#method.from_utf8_lossy
//
// Generated from: library/core/src/str/lossy.rs;l=185
using Utf8Chunks CRUBIT_INTERNAL_RUST_TYPE(":: core :: str :: Utf8Chunks") =
    ::rs::core::str::Utf8Chunks;
}  // namespace rs::alloc::str

namespace rs::alloc::str {

//  Errors which can occur when attempting to interpret a sequence of [`u8`]
//  as a string.
//
//  As such, the `from_utf8` family of functions and methods for both
//  [`String`]s and [`&str`]s make use of this error, for example.
//
//  [`String`]: ../../std/string/struct.String.html#method.from_utf8
//  [`&str`]: super::from_utf8
//
//  # Examples
//
//  This error type’s methods can be used to create functionality
//  similar to `String::from_utf8_lossy` without allocating heap memory:
//
//  ```
//  fn from_utf8_lossy<F>(mut input: &[u8], mut push: F) where F: FnMut(&str) {
//      loop {
//          match std::str::from_utf8(input) {
//              Ok(valid) => {
//                  push(valid);
//                  break
//              }
//              Err(error) => {
//                  let (valid, after_valid) =
//                  input.split_at(error.valid_up_to()); unsafe {
//                      push(std::str::from_utf8_unchecked(valid))
//                  }
//                  push("\\u{FFFD}");
//
//                  if let Some(invalid_sequence_length) = error.error_len() {
//                      input = &after_valid[invalid_sequence_length..]
//                  } else {
//                      break
//                  }
//              }
//          }
//      }
//  }
//  ```
//
// Generated from: library/core/src/str/error.rs;l=47
using Utf8Error CRUBIT_INTERNAL_RUST_TYPE(":: core :: str :: Utf8Error") =
    ::rs::core::str::Utf8Error;
}  // namespace rs::alloc::str

namespace rs::alloc::str {
using ::rs::core::str::from_utf8;

// Error generating bindings for function `core::str::from_utf8_mut` defined at
// library/core/src/str/converts.rs;l=135: Unable to `use` function whose
// bindings failed: Error formatting function return type
// `core::result::Result<&'__anon1 mut str, core::str::Utf8Error>`
//
// Caused by:
//     Mutable references to `str` are not yet supported.

using ::rs::core::str::from_utf8_unchecked;

// Error generating bindings for function `core::str::from_utf8_unchecked_mut`
// defined at library/core/src/str/converts.rs;l=208: Unable to `use` function
// whose bindings failed: Error formatting function return type `&'__anon1 mut
// str`
//
// Caused by:
//     Mutable references to `str` are not yet supported.

}  // namespace rs::alloc::str

namespace rs::alloc {
namespace __crubit_internal {
extern "C" void
__crubit_thunk_7b344df938a8cdb9__uRNvXsQ_uNtNtCsazOrLUIp1qL_u5alloc3ffi5c_ustrNtB5_u7CStringNtNtCsoHVEWV6jqw_u4core3cmp3Ord3cmpCsh9G4tFjYpDL_u8rust_uout(
    ::rs::alloc::ffi::CString const&, ::rs::alloc::ffi::CString const&,
    ::rs::core::cmp::Ordering* __ret_ptr);
}
}  // namespace rs::alloc
inline ::rs::core::cmp::Ordering
rs_std::impl<::rs::alloc::ffi::CString, ::rs::core::cmp::Ord>::cmp(
    ::rs::alloc::ffi::CString const& self,
    ::rs::alloc::ffi::CString const& other) {
  crubit::Slot<::rs::core::cmp::Ordering> __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  rs::alloc::__crubit_internal::
      __crubit_thunk_7b344df938a8cdb9__uRNvXsQ_uNtNtCsazOrLUIp1qL_u5alloc3ffi5c_ustrNtB5_u7CStringNtNtCsoHVEWV6jqw_u4core3cmp3Ord3cmpCsh9G4tFjYpDL_u8rust_uout(
          self, other, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace rs::alloc {
namespace __crubit_internal {
extern "C" void
__crubit_thunk_7b344df938a8cdb9__uRNvXsc_uNtNtCsazOrLUIp1qL_u5alloc3ffi5c_ustrNtB5_u7CStringNtNtNtCsoHVEWV6jqw_u4core3str6traits7FromStr8from_ustrCsh9G4tFjYpDL_u8rust_uout(
    rs_std::StrRef*,
    rs_std::Result<::rs::alloc::ffi::CString, ::rs::alloc::ffi::NulError>*
        __ret_ptr);
}
}  // namespace rs::alloc
inline rs_std::Result<::rs::alloc::ffi::CString, ::rs::alloc::ffi::NulError>
rs_std::impl<::rs::alloc::ffi::CString, ::rs::core::str::FromStr>::from_str(
    rs_std::StrRef s) {
  crubit::Slot<
      rs_std::Result<::rs::alloc::ffi::CString, ::rs::alloc::ffi::NulError>>
      __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  rs::alloc::__crubit_internal::
      __crubit_thunk_7b344df938a8cdb9__uRNvXsc_uNtNtCsazOrLUIp1qL_u5alloc3ffi5c_ustrNtB5_u7CStringNtNtNtCsoHVEWV6jqw_u4core3str6traits7FromStr8from_ustrCsh9G4tFjYpDL_u8rust_uout(
          &s, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace rs::alloc {
namespace __crubit_internal {
extern "C" void
__crubit_thunk_7b344df938a8cdb9__uRNvXs1d_uNtCsazOrLUIp1qL_u5alloc6stringNtB6_u5DrainNtNtNtNtCsoHVEWV6jqw_u4core4iter6traits12double_uended19DoubleEndedIterator9next_ubackCsh9G4tFjYpDL_u8rust_uout(
    ::rs::alloc::string::Drain&, rs_std::Option<rs_std::char_>* __ret_ptr);
}
}  // namespace rs::alloc
inline rs_std::Option<rs_std::char_> rs_std::impl<
    ::rs::alloc::string::Drain, ::rs::core::iter::DoubleEndedIterator>::
    next_back(::rs::alloc::string::Drain& self) {
  crubit::Slot<rs_std::Option<rs_std::char_>> __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  rs::alloc::__crubit_internal::
      __crubit_thunk_7b344df938a8cdb9__uRNvXs1d_uNtCsazOrLUIp1qL_u5alloc6stringNtB6_u5DrainNtNtNtNtCsoHVEWV6jqw_u4core4iter6traits12double_uended19DoubleEndedIterator9next_ubackCsh9G4tFjYpDL_u8rust_uout(
          self, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace rs::alloc {
namespace __crubit_internal {
extern "C" void
__crubit_thunk_7b344df938a8cdb9__uRNvXs1c_uNtCsazOrLUIp1qL_u5alloc6stringNtB6_u5DrainNtNtNtNtCsoHVEWV6jqw_u4core4iter6traits8iterator8Iterator4nextCsh9G4tFjYpDL_u8rust_uout(
    ::rs::alloc::string::Drain&, rs_std::Option<rs_std::char_>* __ret_ptr);
}
}  // namespace rs::alloc
inline rs_std::Option<rs_std::char_>
rs_std::impl<::rs::alloc::string::Drain, ::rs::core::iter::Iterator>::next(
    ::rs::alloc::string::Drain& self) {
  crubit::Slot<rs_std::Option<rs_std::char_>> __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  rs::alloc::__crubit_internal::
      __crubit_thunk_7b344df938a8cdb9__uRNvXs1c_uNtCsazOrLUIp1qL_u5alloc6stringNtB6_u5DrainNtNtNtNtCsoHVEWV6jqw_u4core4iter6traits8iterator8Iterator4nextCsh9G4tFjYpDL_u8rust_uout(
          self, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace rs::alloc {
namespace __crubit_internal {
extern "C" void
__crubit_thunk_7b344df938a8cdb9__uRNvXs1c_uNtCsazOrLUIp1qL_u5alloc6stringNtB6_u5DrainNtNtNtNtCsoHVEWV6jqw_u4core4iter6traits8iterator8Iterator9size_uhint(
    ::rs::alloc::string::Drain const&, void** __ret_ptr);
}
}  // namespace rs::alloc
inline ::std::tuple<::std::uintptr_t, rs_std::Option<::std::uint64_t>>
rs_std::impl<::rs::alloc::string::Drain, ::rs::core::iter::Iterator>::size_hint(
    ::rs::alloc::string::Drain const& self) {
  ::std::uintptr_t __return_value_0_ret_val_holder;
  ::std::uintptr_t* __return_value_0_storage = &__return_value_0_ret_val_holder;
  crubit::Slot<rs_std::Option<::std::uint64_t>> __return_value_1_ret_val_holder;
  auto* __return_value_1_storage = __return_value_1_ret_val_holder.Get();
  void* __return_value_storage[] = {__return_value_0_storage,
                                    __return_value_1_storage};
  rs::alloc::__crubit_internal::
      __crubit_thunk_7b344df938a8cdb9__uRNvXs1c_uNtCsazOrLUIp1qL_u5alloc6stringNtB6_u5DrainNtNtNtNtCsoHVEWV6jqw_u4core4iter6traits8iterator8Iterator9size_uhint(
          self, __return_value_storage);
  return ::std::make_tuple(
      *__return_value_0_storage,
      ::std::move(__return_value_1_ret_val_holder).AssumeInitAndTakeValue());
}

namespace rs::alloc {
namespace __crubit_internal {
extern "C" void
__crubit_thunk_7b344df938a8cdb9__uRNvXs1c_uNtCsazOrLUIp1qL_u5alloc6stringNtB6_u5DrainNtNtNtNtCsoHVEWV6jqw_u4core4iter6traits8iterator8Iterator4lastCsh9G4tFjYpDL_u8rust_uout(
    ::rs::alloc::string::Drain*, rs_std::Option<rs_std::char_>* __ret_ptr);
}
}  // namespace rs::alloc
inline rs_std::Option<rs_std::char_>
rs_std::impl<::rs::alloc::string::Drain, ::rs::core::iter::Iterator>::last(
    ::rs::Movable<::rs::alloc::string::Drain> self) {
  crubit::Slot<::rs::alloc::string::Drain> self_slot;
  ::std::move(self).MoveToSlot(self_slot);
  crubit::Slot<rs_std::Option<rs_std::char_>> __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  rs::alloc::__crubit_internal::
      __crubit_thunk_7b344df938a8cdb9__uRNvXs1c_uNtCsazOrLUIp1qL_u5alloc6stringNtB6_u5DrainNtNtNtNtCsoHVEWV6jqw_u4core4iter6traits8iterator8Iterator4lastCsh9G4tFjYpDL_u8rust_uout(
          self_slot.Get(), __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace rs::alloc {
namespace __crubit_internal {
extern "C" void
__crubit_thunk_7b344df938a8cdb9__uRNvXs1k_uNtCsazOrLUIp1qL_u5alloc6stringNtB6_u6StringNtNtCsoHVEWV6jqw_u4core3cmp3Ord3cmpCsh9G4tFjYpDL_u8rust_uout(
    ::rs::alloc::string::String const&, ::rs::alloc::string::String const&,
    ::rs::core::cmp::Ordering* __ret_ptr);
}
}  // namespace rs::alloc
inline ::rs::core::cmp::Ordering
rs_std::impl<::rs::alloc::string::String, ::rs::core::cmp::Ord>::cmp(
    ::rs::alloc::string::String const& self,
    ::rs::alloc::string::String const& other) {
  crubit::Slot<::rs::core::cmp::Ordering> __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  rs::alloc::__crubit_internal::
      __crubit_thunk_7b344df938a8cdb9__uRNvXs1k_uNtCsazOrLUIp1qL_u5alloc6stringNtB6_u6StringNtNtCsoHVEWV6jqw_u4core3cmp3Ord3cmpCsh9G4tFjYpDL_u8rust_uout(
          self, other, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace rs::alloc {
namespace __crubit_internal {
extern "C" void
__crubit_thunk_7b344df938a8cdb9__uRNvXsY_uNtCsazOrLUIp1qL_u5alloc6stringNtB5_u6StringINtNtCsoHVEWV6jqw_u4core7convert7TryFromINtNtB7_u3vec3VechEE8try_ufrom(
    rs_std::Vec<::std::uint8_t>*,
    rs_std::Result<::rs::alloc::string::String,
                   ::rs::alloc::string::FromUtf8Error>* __ret_ptr);
}
}  // namespace rs::alloc
inline rs_std::Result<::rs::alloc::string::String,
                      ::rs::alloc::string::FromUtf8Error>
rs_std::impl<::rs::alloc::string::String,
             ::rs::core::convert::TryFrom<rs_std::Vec<::std::uint8_t>>>::
    try_from(rs_std::Vec<::std::uint8_t> bytes) {
  crubit::Slot bytes_slot((::std::move(bytes)));
  crubit::Slot<rs_std::Result<::rs::alloc::string::String,
                              ::rs::alloc::string::FromUtf8Error>>
      __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  rs::alloc::__crubit_internal::
      __crubit_thunk_7b344df938a8cdb9__uRNvXsY_uNtCsazOrLUIp1qL_u5alloc6stringNtB5_u6StringINtNtCsoHVEWV6jqw_u4core7convert7TryFromINtNtB7_u3vec3VechEE8try_ufrom(
          bytes_slot.Get(), __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace rs::alloc {
namespace __crubit_internal {
extern "C" void
__crubit_thunk_7b344df938a8cdb9__uRNvXsd_uNtNtCsazOrLUIp1qL_u5alloc3ffi5c_ustrNtNtB9_u6string6StringINtNtCsoHVEWV6jqw_u4core7convert7TryFromNtB5_u7CStringE8try_ufromCsh9G4tFjYpDL_u8rust_uout(
    ::rs::alloc::ffi::CString*,
    rs_std::Result<::rs::alloc::string::String,
                   ::rs::alloc::ffi::IntoStringError>* __ret_ptr);
}
}  // namespace rs::alloc
inline rs_std::Result<::rs::alloc::string::String,
                      ::rs::alloc::ffi::IntoStringError>
rs_std::impl<::rs::alloc::string::String,
             ::rs::core::convert::TryFrom<::rs::alloc::ffi::CString>>::
    try_from(::rs::alloc::ffi::CString value) {
  crubit::Slot value_slot((::std::move(value)));
  crubit::Slot<rs_std::Result<::rs::alloc::string::String,
                              ::rs::alloc::ffi::IntoStringError>>
      __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  rs::alloc::__crubit_internal::
      __crubit_thunk_7b344df938a8cdb9__uRNvXsd_uNtNtCsazOrLUIp1qL_u5alloc3ffi5c_ustrNtNtB9_u6string6StringINtNtCsoHVEWV6jqw_u4core7convert7TryFromNtB5_u7CStringE8try_ufromCsh9G4tFjYpDL_u8rust_uout(
          value_slot.Get(), __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

#ifndef _CRUBIT_BINDINGS_FOR_IMPL_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Vec_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020std_x00000020_x0000003a_x0000003a_x00000020uint8_ut_x00000020_x0000003e
#define _CRUBIT_BINDINGS_FOR_IMPL_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Vec_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020std_x00000020_x0000003a_x0000003a_x00000020uint8_ut_x00000020_x0000003e
namespace __crubit_internal {
extern "C" void
__crubit_thunk_7b344df938a8cdb9__uRNvYINtNtCsazOrLUIp1qL_u5alloc3vec3VechENtNtCsoHVEWV6jqw_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    rs_std::Vec<::std::uint8_t> const&, rs_std::Vec<::std::uint8_t>* __ret_ptr);
}
namespace __crubit_internal {
extern "C" void
__crubit_thunk_7b344df938a8cdb9__uRNvYINtNtCsazOrLUIp1qL_u5alloc3vec3VechENtNtCsoHVEWV6jqw_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    rs_std::Vec<::std::uint8_t>&, rs_std::Vec<::std::uint8_t> const&);
}
inline rs_std::Vec<::std::uint8_t>::Vec(const Vec& other) noexcept {
  __crubit_internal::
      __crubit_thunk_7b344df938a8cdb9__uRNvYINtNtCsazOrLUIp1qL_u5alloc3vec3VechENtNtCsoHVEWV6jqw_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
          other, this);
}
inline rs_std::Vec<::std::uint8_t>& rs_std::Vec<::std::uint8_t>::operator=(
    const Vec& other) noexcept {
  if (this != &other) {
    __crubit_internal::
        __crubit_thunk_7b344df938a8cdb9__uRNvYINtNtCsazOrLUIp1qL_u5alloc3vec3VechENtNtCsoHVEWV6jqw_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
            *this, other);
  }
  return *this;
}
inline rs_std::Vec<::std::uint8_t>::Vec(Vec&& other) noexcept : storage_{} {
  ::std::memcpy(storage_, other.storage_, sizeof(storage_));
  other.init_empty();
}
inline rs_std::Vec<::std::uint8_t>& rs_std::Vec<::std::uint8_t>::operator=(
    Vec&& other) noexcept {
  if (this != &other) {
    destroy();
    crubit::MemSwap(*this, other);
  }
  return *this;
}
inline rs_std::Vec<::std::uint8_t>::Vec(::crubit::UnsafeRelocateTag,
                                        Vec&& value) {
  ::std::memcpy(this, &value, sizeof(value));
}

inline rs_std::Vec<::std::uint8_t>::Vec() noexcept : storage_{} {
  init_empty();
}
inline rs_std::Vec<::std::uint8_t>::~Vec() noexcept { destroy(); }
#endif

#ifndef _CRUBIT_BINDINGS_FOR_IMPL_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Option_x00000020_x0000003c_x00000020rs_ustd_x00000020_x0000003a_x0000003a_x00000020char_u_x00000020_x0000003e
#define _CRUBIT_BINDINGS_FOR_IMPL_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Option_x00000020_x0000003c_x00000020rs_ustd_x00000020_x0000003a_x0000003a_x00000020char_u_x00000020_x0000003e
static_assert(
    ::std::is_trivially_copy_constructible_v<rs_std::Option<rs_std::char_>>);
static_assert(
    ::std::is_trivially_copy_assignable_v<rs_std::Option<rs_std::char_>>);
static_assert(
    ::std::is_trivially_move_constructible_v<rs_std::Option<rs_std::char_>>);
static_assert(
    ::std::is_trivially_move_assignable_v<rs_std::Option<rs_std::char_>>);
inline rs_std::Option<rs_std::char_>::Option(::crubit::UnsafeRelocateTag,
                                             Option&& value) {
  ::std::memcpy(this, &value, sizeof(value));
}
static_assert(
    ::std::is_trivially_destructible_v<rs_std::Option<rs_std::char_>>);
inline constexpr ::std::uint32_t rs_std::Option<rs_std::char_>::tag()
    const& noexcept {
  ::std::array<unsigned char, sizeof(::std::uint32_t)> __bytes = {};
  for (::std::size_t i = 0; i < sizeof(::std::uint32_t); ++i) {
    __bytes[i] = storage_[0 + i];
  }
  return ::std::bit_cast<::std::uint32_t>(__bytes);
}
inline constexpr void rs_std::Option<rs_std::char_>::set_tag(
    ::std::uint32_t tag) noexcept {
  auto __bytes =
      ::std::bit_cast<::std::array<unsigned char, sizeof(::std::uint32_t)>>(
          tag);
  for (::std::size_t i = 0; i < sizeof(::std::uint32_t); ++i) {
    storage_[0 + i] = __bytes[i];
  }
}

inline constexpr rs_std::Option<rs_std::char_>::Option(
    ::std::nullopt_t) noexcept
    : base_type(::std::nullopt) {}
inline constexpr rs_std::Option<rs_std::char_>&
rs_std::Option<rs_std::char_>::operator=(::std::nullopt_t) noexcept {
  base_type::operator=(::std::nullopt);
  return *this;
}
template <typename U>
  requires(rs_std::OptionForwardConstructible<rs_std::Option<rs_std::char_>,
                                              rs_std::char_, U>)
inline rs_std::Option<rs_std::char_>::Option(U&& value) noexcept
    : base_type(::std::forward<U>(value)) {}
template <typename U>
  requires(rs_std::OptionForwardConstructible<rs_std::Option<rs_std::char_>,
                                              rs_std::char_, U>)
inline rs_std::Option<rs_std::char_>& rs_std::Option<rs_std::char_>::operator=(
    U&& value) noexcept {
  base_type::operator=(::std::forward<U>(value));
  return *this;
}
template <typename Opt>
  requires(rs_std::OptionFromStdOptional<rs_std::char_, Opt>)
inline rs_std::Option<rs_std::char_>::Option(Opt&& value) noexcept
    : base_type(::std::forward<Opt>(value)) {}
template <typename Opt>
  requires(rs_std::OptionFromStdOptional<rs_std::char_, Opt>)
inline rs_std::Option<rs_std::char_>& rs_std::Option<rs_std::char_>::operator=(
    Opt&& value) noexcept {
  base_type::operator=(::std::forward<Opt>(value));
  return *this;
}
template <typename... Args>
inline rs_std::Option<rs_std::char_>::Option(::std::in_place_t ip,
                                             Args&&... args) noexcept
    : base_type(ip, ::std::forward<Args>(args)...) {}

#endif

#ifndef _CRUBIT_BINDINGS_FOR_IMPL_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020rs_ustd_x00000020_x0000003a_x0000003a_x00000020StrRef_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020rs_x00000020_x0000003a_x0000003a_x00000020core_x00000020_x0000003a_x0000003a_x00000020str_x00000020_x0000003a_x0000003a_x00000020Utf8Error_x00000020_x0000003e
#define _CRUBIT_BINDINGS_FOR_IMPL_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020rs_ustd_x00000020_x0000003a_x0000003a_x00000020StrRef_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020rs_x00000020_x0000003a_x0000003a_x00000020core_x00000020_x0000003a_x0000003a_x00000020str_x00000020_x0000003a_x0000003a_x00000020Utf8Error_x00000020_x0000003e
static_assert(::std::is_trivially_copy_constructible_v<
              rs_std::Result<rs_std::StrRef, ::rs::core::str::Utf8Error>>);
static_assert(::std::is_trivially_copy_assignable_v<
              rs_std::Result<rs_std::StrRef, ::rs::core::str::Utf8Error>>);
static_assert(::std::is_trivially_move_constructible_v<
              rs_std::Result<rs_std::StrRef, ::rs::core::str::Utf8Error>>);
static_assert(::std::is_trivially_move_assignable_v<
              rs_std::Result<rs_std::StrRef, ::rs::core::str::Utf8Error>>);
inline rs_std::Result<rs_std::StrRef, ::rs::core::str::Utf8Error>::Result(
    ::crubit::UnsafeRelocateTag, Result&& value) {
  ::std::memcpy(this, &value, sizeof(value));
}
static_assert(::std::is_trivially_destructible_v<
              rs_std::Result<rs_std::StrRef, ::rs::core::str::Utf8Error>>);
inline constexpr ::std::uint64_t rs_std::Result<
    rs_std::StrRef, ::rs::core::str::Utf8Error>::tag() const& noexcept {
  std::array<unsigned char, sizeof(::std::uint64_t)> __bytes = {};
  for (std::size_t i = 0; i < sizeof(::std::uint64_t); ++i) {
    __bytes[i] = __storage[0 + i];
  }
  return std::bit_cast<::std::uint64_t>(__bytes);
}
inline constexpr void
rs_std::Result<rs_std::StrRef, ::rs::core::str::Utf8Error>::set_tag(
    ::std::uint64_t tag) noexcept {
  auto __bytes =
      std::bit_cast<std::array<unsigned char, sizeof(::std::uint64_t)>>(tag);
  for (std::size_t i = 0; i < sizeof(::std::uint64_t); ++i) {
    __storage[0 + i] = __bytes[i];
  }
}

template <typename U>
  requires(rs_std::ResultForwardConstructible<
           rs_std::Result<rs_std::StrRef, ::rs::core::str::Utf8Error>,
           rs_std::StrRef, U>)
inline constexpr rs_std::Result<
    rs_std::StrRef, ::rs::core::str::Utf8Error>::Result(U&& ok) noexcept
    : base_type(::std::forward<U>(ok)) {}
template <typename U>
  requires(rs_std::ResultForwardConstructible<
           rs_std::Result<rs_std::StrRef, ::rs::core::str::Utf8Error>,
           rs_std::StrRef, U>)
inline constexpr rs_std::Result<rs_std::StrRef, ::rs::core::str::Utf8Error>&
rs_std::Result<rs_std::StrRef, ::rs::core::str::Utf8Error>::operator=(
    U&& ok) noexcept {
  base_type::operator=(::std::forward<U>(ok));
  return *this;
}
template <typename F>
  requires(rs_std::ResultUnexpectedConstructible<::rs::core::str::Utf8Error, F>)
inline constexpr rs_std::Result<rs_std::StrRef, ::rs::core::str::Utf8Error>::
    Result(rs_std::unexpected<F>&& err) noexcept
    : base_type(::std::move(err)) {}
template <typename F>
  requires(rs_std::ResultUnexpectedConstructible<::rs::core::str::Utf8Error, F>)
inline constexpr rs_std::Result<rs_std::StrRef, ::rs::core::str::Utf8Error>&
rs_std::Result<rs_std::StrRef, ::rs::core::str::Utf8Error>::operator=(
    rs_std::unexpected<F>&& err) noexcept {
  base_type::operator=(::std::move(err));
  return *this;
}
template <typename... Args>
inline constexpr rs_std::Result<
    rs_std::StrRef, ::rs::core::str::Utf8Error>::Result(::std::in_place_t ip,
                                                        Args&&... args) noexcept
    : base_type(ip, ::std::forward<Args>(args)...) {}
template <typename... Args>
inline constexpr rs_std::Result<
    rs_std::StrRef, ::rs::core::str::Utf8Error>::Result(rs_std::unexpect_t u,
                                                        Args&&... args) noexcept
    : base_type(u, ::std::forward<Args>(args)...) {}

#endif

#ifndef _CRUBIT_BINDINGS_FOR_IMPL_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020rs_ustd_x00000020_x0000003a_x0000003a_x00000020unit_ut_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020rs_x00000020_x0000003a_x0000003a_x00000020alloc_x00000020_x0000003a_x0000003a_x00000020collections_x00000020_x0000003a_x0000003a_x00000020TryReserveError_x00000020_x0000003e
#define _CRUBIT_BINDINGS_FOR_IMPL_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020rs_ustd_x00000020_x0000003a_x0000003a_x00000020unit_ut_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020rs_x00000020_x0000003a_x0000003a_x00000020alloc_x00000020_x0000003a_x0000003a_x00000020collections_x00000020_x0000003a_x0000003a_x00000020TryReserveError_x00000020_x0000003e
namespace __crubit_internal {
extern "C" void
__crubit_thunk_7b344df938a8cdb9__uRNvYINtNtCsoHVEWV6jqw_u4core6result6ResultuNtNtCsazOrLUIp1qL_u5alloc11collections15TryReserveErrorENtNtB7_u5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    rs_std::Result<rs_std::unit_t,
                   ::rs::alloc::collections::TryReserveError> const&,
    rs_std::Result<rs_std::unit_t, ::rs::alloc::collections::TryReserveError>*
        __ret_ptr);
}
namespace __crubit_internal {
extern "C" void
__crubit_thunk_7b344df938a8cdb9__uRNvYINtNtCsoHVEWV6jqw_u4core6result6ResultuNtNtCsazOrLUIp1qL_u5alloc11collections15TryReserveErrorENtNtB7_u5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    rs_std::Result<rs_std::unit_t, ::rs::alloc::collections::TryReserveError>&,
    rs_std::Result<rs_std::unit_t,
                   ::rs::alloc::collections::TryReserveError> const&);
}
inline rs_std::
    Result<rs_std::unit_t, ::rs::alloc::collections::TryReserveError>::Result(
        const Result& other) noexcept {
  __crubit_internal::
      __crubit_thunk_7b344df938a8cdb9__uRNvYINtNtCsoHVEWV6jqw_u4core6result6ResultuNtNtCsazOrLUIp1qL_u5alloc11collections15TryReserveErrorENtNtB7_u5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
          other, this);
}
inline rs_std::Result<rs_std::unit_t,
                      ::rs::alloc::collections::TryReserveError>&
rs_std::Result<rs_std::unit_t, ::rs::alloc::collections::TryReserveError>::
operator=(const Result& other) noexcept {
  if (this != &other) {
    __crubit_internal::
        __crubit_thunk_7b344df938a8cdb9__uRNvYINtNtCsoHVEWV6jqw_u4core6result6ResultuNtNtCsazOrLUIp1qL_u5alloc11collections15TryReserveErrorENtNtB7_u5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
            *this, other);
  }
  return *this;
}
static_assert(::std::is_trivially_move_constructible_v<rs_std::Result<
                  rs_std::unit_t, ::rs::alloc::collections::TryReserveError>>);
static_assert(::std::is_trivially_move_assignable_v<rs_std::Result<
                  rs_std::unit_t, ::rs::alloc::collections::TryReserveError>>);
inline rs_std::
    Result<rs_std::unit_t, ::rs::alloc::collections::TryReserveError>::Result(
        ::crubit::UnsafeRelocateTag, Result&& value) {
  ::std::memcpy(this, &value, sizeof(value));
}
static_assert(::std::is_trivially_destructible_v<rs_std::Result<
                  rs_std::unit_t, ::rs::alloc::collections::TryReserveError>>);
inline constexpr ::std::uint64_t
rs_std::Result<rs_std::unit_t, ::rs::alloc::collections::TryReserveError>::tag()
    const& noexcept {
  std::array<unsigned char, sizeof(::std::uint64_t)> __bytes = {};
  for (std::size_t i = 0; i < sizeof(::std::uint64_t); ++i) {
    __bytes[i] = __storage[0 + i];
  }
  return std::bit_cast<::std::uint64_t>(__bytes);
}
inline constexpr void rs_std::
    Result<rs_std::unit_t, ::rs::alloc::collections::TryReserveError>::set_tag(
        ::std::uint64_t tag) noexcept {
  auto __bytes =
      std::bit_cast<std::array<unsigned char, sizeof(::std::uint64_t)>>(tag);
  for (std::size_t i = 0; i < sizeof(::std::uint64_t); ++i) {
    __storage[0 + i] = __bytes[i];
  }
}

template <typename U>
  requires(rs_std::ResultForwardConstructible<
           rs_std::Result<rs_std::unit_t,
                          ::rs::alloc::collections::TryReserveError>,
           rs_std::unit_t, U>)
inline constexpr rs_std::Result<
    rs_std::unit_t,
    ::rs::alloc::collections::TryReserveError>::Result(U&& ok) noexcept
    : base_type(::std::forward<U>(ok)) {}
template <typename U>
  requires(rs_std::ResultForwardConstructible<
           rs_std::Result<rs_std::unit_t,
                          ::rs::alloc::collections::TryReserveError>,
           rs_std::unit_t, U>)
inline constexpr rs_std::Result<rs_std::unit_t,
                                ::rs::alloc::collections::TryReserveError>&
rs_std::Result<rs_std::unit_t, ::rs::alloc::collections::TryReserveError>::
operator=(U&& ok) noexcept {
  base_type::operator=(::std::forward<U>(ok));
  return *this;
}
template <typename F>
  requires(rs_std::ResultUnexpectedConstructible<
           ::rs::alloc::collections::TryReserveError, F>)
inline constexpr rs_std::
    Result<rs_std::unit_t, ::rs::alloc::collections::TryReserveError>::Result(
        rs_std::unexpected<F>&& err) noexcept
    : base_type(::std::move(err)) {}
template <typename F>
  requires(rs_std::ResultUnexpectedConstructible<
           ::rs::alloc::collections::TryReserveError, F>)
inline constexpr rs_std::Result<rs_std::unit_t,
                                ::rs::alloc::collections::TryReserveError>&
rs_std::Result<rs_std::unit_t, ::rs::alloc::collections::TryReserveError>::
operator=(rs_std::unexpected<F>&& err) noexcept {
  base_type::operator=(::std::move(err));
  return *this;
}
template <typename... Args>
inline constexpr rs_std::
    Result<rs_std::unit_t, ::rs::alloc::collections::TryReserveError>::Result(
        ::std::in_place_t ip, Args&&... args) noexcept
    : base_type(ip, ::std::forward<Args>(args)...) {}
template <typename... Args>
inline constexpr rs_std::
    Result<rs_std::unit_t, ::rs::alloc::collections::TryReserveError>::Result(
        rs_std::unexpect_t u, Args&&... args) noexcept
    : base_type(u, ::std::forward<Args>(args)...) {}

#endif

#ifndef _CRUBIT_BINDINGS_FOR_IMPL_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020rs_x00000020_x0000003a_x0000003a_x00000020alloc_x00000020_x0000003a_x0000003a_x00000020ffi_x00000020_x0000003a_x0000003a_x00000020CString_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020rs_x00000020_x0000003a_x0000003a_x00000020alloc_x00000020_x0000003a_x0000003a_x00000020ffi_x00000020_x0000003a_x0000003a_x00000020FromVecWithNulError_x00000020_x0000003e
#define _CRUBIT_BINDINGS_FOR_IMPL_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020rs_x00000020_x0000003a_x0000003a_x00000020alloc_x00000020_x0000003a_x0000003a_x00000020ffi_x00000020_x0000003a_x0000003a_x00000020CString_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020rs_x00000020_x0000003a_x0000003a_x00000020alloc_x00000020_x0000003a_x0000003a_x00000020ffi_x00000020_x0000003a_x0000003a_x00000020FromVecWithNulError_x00000020_x0000003e
namespace __crubit_internal {
extern "C" void
__crubit_thunk_7b344df938a8cdb9__uRNvYINtNtCsoHVEWV6jqw_u4core6result6ResultNtNtNtCsazOrLUIp1qL_u5alloc3ffi5c_ustr7CStringNtBF_u19FromVecWithNulErrorENtNtB7_u5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    rs_std::Result<::rs::alloc::ffi::CString,
                   ::rs::alloc::ffi::FromVecWithNulError> const&,
    rs_std::Result<::rs::alloc::ffi::CString,
                   ::rs::alloc::ffi::FromVecWithNulError>* __ret_ptr);
}
namespace __crubit_internal {
extern "C" void
__crubit_thunk_7b344df938a8cdb9__uRNvYINtNtCsoHVEWV6jqw_u4core6result6ResultNtNtNtCsazOrLUIp1qL_u5alloc3ffi5c_ustr7CStringNtBF_u19FromVecWithNulErrorENtNtB7_u5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    rs_std::Result<::rs::alloc::ffi::CString,
                   ::rs::alloc::ffi::FromVecWithNulError>&,
    rs_std::Result<::rs::alloc::ffi::CString,
                   ::rs::alloc::ffi::FromVecWithNulError> const&);
}
inline rs_std::Result<::rs::alloc::ffi::CString,
                      ::rs::alloc::ffi::FromVecWithNulError>::
    Result(const Result& other) noexcept {
  __crubit_internal::
      __crubit_thunk_7b344df938a8cdb9__uRNvYINtNtCsoHVEWV6jqw_u4core6result6ResultNtNtNtCsazOrLUIp1qL_u5alloc3ffi5c_ustr7CStringNtBF_u19FromVecWithNulErrorENtNtB7_u5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
          other, this);
}
inline rs_std::Result<::rs::alloc::ffi::CString,
                      ::rs::alloc::ffi::FromVecWithNulError>&
rs_std::Result<::rs::alloc::ffi::CString,
               ::rs::alloc::ffi::FromVecWithNulError>::
operator=(const Result& other) noexcept {
  if (this != &other) {
    __crubit_internal::
        __crubit_thunk_7b344df938a8cdb9__uRNvYINtNtCsoHVEWV6jqw_u4core6result6ResultNtNtNtCsazOrLUIp1qL_u5alloc3ffi5c_ustr7CStringNtBF_u19FromVecWithNulErrorENtNtB7_u5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
            *this, other);
  }
  return *this;
}
inline rs_std::Result<
    ::rs::alloc::ffi::CString,
    ::rs::alloc::ffi::FromVecWithNulError>::Result(::crubit::UnsafeRelocateTag,
                                                   Result&& value) {
  ::std::memcpy(this, &value, sizeof(value));
}
inline rs_std::Result<
    ::rs::alloc::ffi::CString,
    ::rs::alloc::ffi::FromVecWithNulError>::~Result() noexcept {
  this->Reset();
}
inline constexpr ::std::uint64_t
rs_std::Result<::rs::alloc::ffi::CString,
               ::rs::alloc::ffi::FromVecWithNulError>::tag() const& noexcept {
  std::array<unsigned char, sizeof(::std::uint64_t)> __bytes = {};
  for (std::size_t i = 0; i < sizeof(::std::uint64_t); ++i) {
    __bytes[i] = __storage[0 + i];
  }
  return std::bit_cast<::std::uint64_t>(__bytes);
}
inline constexpr void rs_std::Result<::rs::alloc::ffi::CString,
                                     ::rs::alloc::ffi::FromVecWithNulError>::
    set_tag(::std::uint64_t tag) noexcept {
  auto __bytes =
      std::bit_cast<std::array<unsigned char, sizeof(::std::uint64_t)>>(tag);
  for (std::size_t i = 0; i < sizeof(::std::uint64_t); ++i) {
    __storage[0 + i] = __bytes[i];
  }
}

template <typename U>
  requires(rs_std::ResultForwardConstructible<
           rs_std::Result<::rs::alloc::ffi::CString,
                          ::rs::alloc::ffi::FromVecWithNulError>,
           ::rs::alloc::ffi::CString, U>)
inline constexpr rs_std::Result<
    ::rs::alloc::ffi::CString,
    ::rs::alloc::ffi::FromVecWithNulError>::Result(U&& ok) noexcept
    : base_type(::std::forward<U>(ok)) {}
template <typename U>
  requires(rs_std::ResultForwardConstructible<
           rs_std::Result<::rs::alloc::ffi::CString,
                          ::rs::alloc::ffi::FromVecWithNulError>,
           ::rs::alloc::ffi::CString, U>)
inline constexpr rs_std::Result<::rs::alloc::ffi::CString,
                                ::rs::alloc::ffi::FromVecWithNulError>&
rs_std::Result<
    ::rs::alloc::ffi::CString,
    ::rs::alloc::ffi::FromVecWithNulError>::operator=(U&& ok) noexcept {
  base_type::operator=(::std::forward<U>(ok));
  return *this;
}
template <typename F>
  requires(rs_std::ResultUnexpectedConstructible<
           ::rs::alloc::ffi::FromVecWithNulError, F>)
inline constexpr rs_std::Result<::rs::alloc::ffi::CString,
                                ::rs::alloc::ffi::FromVecWithNulError>::
    Result(rs_std::unexpected<F>&& err) noexcept
    : base_type(::std::move(err)) {}
template <typename F>
  requires(rs_std::ResultUnexpectedConstructible<
           ::rs::alloc::ffi::FromVecWithNulError, F>)
inline constexpr rs_std::Result<::rs::alloc::ffi::CString,
                                ::rs::alloc::ffi::FromVecWithNulError>&
rs_std::Result<::rs::alloc::ffi::CString,
               ::rs::alloc::ffi::FromVecWithNulError>::
operator=(rs_std::unexpected<F>&& err) noexcept {
  base_type::operator=(::std::move(err));
  return *this;
}
template <typename... Args>
inline constexpr rs_std::Result<
    ::rs::alloc::ffi::CString,
    ::rs::alloc::ffi::FromVecWithNulError>::Result(::std::in_place_t ip,
                                                   Args&&... args) noexcept
    : base_type(ip, ::std::forward<Args>(args)...) {}
template <typename... Args>
inline constexpr rs_std::Result<
    ::rs::alloc::ffi::CString,
    ::rs::alloc::ffi::FromVecWithNulError>::Result(rs_std::unexpect_t u,
                                                   Args&&... args) noexcept
    : base_type(u, ::std::forward<Args>(args)...) {}

#endif

#ifndef _CRUBIT_BINDINGS_FOR_IMPL_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020rs_x00000020_x0000003a_x0000003a_x00000020alloc_x00000020_x0000003a_x0000003a_x00000020ffi_x00000020_x0000003a_x0000003a_x00000020CString_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020rs_x00000020_x0000003a_x0000003a_x00000020alloc_x00000020_x0000003a_x0000003a_x00000020ffi_x00000020_x0000003a_x0000003a_x00000020NulError_x00000020_x0000003e
#define _CRUBIT_BINDINGS_FOR_IMPL_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020rs_x00000020_x0000003a_x0000003a_x00000020alloc_x00000020_x0000003a_x0000003a_x00000020ffi_x00000020_x0000003a_x0000003a_x00000020CString_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020rs_x00000020_x0000003a_x0000003a_x00000020alloc_x00000020_x0000003a_x0000003a_x00000020ffi_x00000020_x0000003a_x0000003a_x00000020NulError_x00000020_x0000003e
namespace __crubit_internal {
extern "C" void
__crubit_thunk_7b344df938a8cdb9__uRNvYINtNtCsoHVEWV6jqw_u4core6result6ResultNtNtNtCsazOrLUIp1qL_u5alloc3ffi5c_ustr7CStringNtBF_u8NulErrorENtNtB7_u5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    rs_std::Result<::rs::alloc::ffi::CString,
                   ::rs::alloc::ffi::NulError> const&,
    rs_std::Result<::rs::alloc::ffi::CString, ::rs::alloc::ffi::NulError>*
        __ret_ptr);
}
namespace __crubit_internal {
extern "C" void
__crubit_thunk_7b344df938a8cdb9__uRNvYINtNtCsoHVEWV6jqw_u4core6result6ResultNtNtNtCsazOrLUIp1qL_u5alloc3ffi5c_ustr7CStringNtBF_u8NulErrorENtNtB7_u5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    rs_std::Result<::rs::alloc::ffi::CString, ::rs::alloc::ffi::NulError>&,
    rs_std::Result<::rs::alloc::ffi::CString,
                   ::rs::alloc::ffi::NulError> const&);
}
inline rs_std::Result<::rs::alloc::ffi::CString,
                      ::rs::alloc::ffi::NulError>::Result(const Result&
                                                              other) noexcept {
  __crubit_internal::
      __crubit_thunk_7b344df938a8cdb9__uRNvYINtNtCsoHVEWV6jqw_u4core6result6ResultNtNtNtCsazOrLUIp1qL_u5alloc3ffi5c_ustr7CStringNtBF_u8NulErrorENtNtB7_u5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
          other, this);
}
inline rs_std::Result<::rs::alloc::ffi::CString, ::rs::alloc::ffi::NulError>&
rs_std::Result<::rs::alloc::ffi::CString, ::rs::alloc::ffi::NulError>::
operator=(const Result& other) noexcept {
  if (this != &other) {
    __crubit_internal::
        __crubit_thunk_7b344df938a8cdb9__uRNvYINtNtCsoHVEWV6jqw_u4core6result6ResultNtNtNtCsazOrLUIp1qL_u5alloc3ffi5c_ustr7CStringNtBF_u8NulErrorENtNtB7_u5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
            *this, other);
  }
  return *this;
}
inline rs_std::Result<::rs::alloc::ffi::CString, ::rs::alloc::ffi::NulError>::
    Result(::crubit::UnsafeRelocateTag, Result&& value) {
  ::std::memcpy(this, &value, sizeof(value));
}
inline rs_std::Result<::rs::alloc::ffi::CString,
                      ::rs::alloc::ffi::NulError>::~Result() noexcept {
  this->Reset();
}
inline constexpr ::std::uint64_t
rs_std::Result<::rs::alloc::ffi::CString, ::rs::alloc::ffi::NulError>::tag()
    const& noexcept {
  std::array<unsigned char, sizeof(::std::uint64_t)> __bytes = {};
  for (std::size_t i = 0; i < sizeof(::std::uint64_t); ++i) {
    __bytes[i] = __storage[0 + i];
  }
  return std::bit_cast<::std::uint64_t>(__bytes);
}
inline constexpr void
rs_std::Result<::rs::alloc::ffi::CString, ::rs::alloc::ffi::NulError>::set_tag(
    ::std::uint64_t tag) noexcept {
  auto __bytes =
      std::bit_cast<std::array<unsigned char, sizeof(::std::uint64_t)>>(tag);
  for (std::size_t i = 0; i < sizeof(::std::uint64_t); ++i) {
    __storage[0 + i] = __bytes[i];
  }
}

template <typename U>
  requires(
      rs_std::ResultForwardConstructible<
          rs_std::Result<::rs::alloc::ffi::CString, ::rs::alloc::ffi::NulError>,
          ::rs::alloc::ffi::CString, U>)
inline constexpr rs_std::Result<
    ::rs::alloc::ffi::CString,
    ::rs::alloc::ffi::NulError>::Result(U&& ok) noexcept
    : base_type(::std::forward<U>(ok)) {}
template <typename U>
  requires(
      rs_std::ResultForwardConstructible<
          rs_std::Result<::rs::alloc::ffi::CString, ::rs::alloc::ffi::NulError>,
          ::rs::alloc::ffi::CString, U>)
inline constexpr rs_std::Result<::rs::alloc::ffi::CString,
                                ::rs::alloc::ffi::NulError>&
rs_std::Result<::rs::alloc::ffi::CString,
               ::rs::alloc::ffi::NulError>::operator=(U&& ok) noexcept {
  base_type::operator=(::std::forward<U>(ok));
  return *this;
}
template <typename F>
  requires(rs_std::ResultUnexpectedConstructible<::rs::alloc::ffi::NulError, F>)
inline constexpr rs_std::Result<
    ::rs::alloc::ffi::CString,
    ::rs::alloc::ffi::NulError>::Result(rs_std::unexpected<F>&& err) noexcept
    : base_type(::std::move(err)) {}
template <typename F>
  requires(rs_std::ResultUnexpectedConstructible<::rs::alloc::ffi::NulError, F>)
inline constexpr rs_std::Result<::rs::alloc::ffi::CString,
                                ::rs::alloc::ffi::NulError>&
rs_std::Result<::rs::alloc::ffi::CString, ::rs::alloc::ffi::NulError>::
operator=(rs_std::unexpected<F>&& err) noexcept {
  base_type::operator=(::std::move(err));
  return *this;
}
template <typename... Args>
inline constexpr rs_std::
    Result<::rs::alloc::ffi::CString, ::rs::alloc::ffi::NulError>::Result(
        ::std::in_place_t ip, Args&&... args) noexcept
    : base_type(ip, ::std::forward<Args>(args)...) {}
template <typename... Args>
inline constexpr rs_std::
    Result<::rs::alloc::ffi::CString, ::rs::alloc::ffi::NulError>::Result(
        rs_std::unexpect_t u, Args&&... args) noexcept
    : base_type(u, ::std::forward<Args>(args)...) {}

#endif

#ifndef _CRUBIT_BINDINGS_FOR_IMPL_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020rs_x00000020_x0000003a_x0000003a_x00000020alloc_x00000020_x0000003a_x0000003a_x00000020string_x00000020_x0000003a_x0000003a_x00000020String_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020rs_x00000020_x0000003a_x0000003a_x00000020alloc_x00000020_x0000003a_x0000003a_x00000020ffi_x00000020_x0000003a_x0000003a_x00000020IntoStringError_x00000020_x0000003e
#define _CRUBIT_BINDINGS_FOR_IMPL_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020rs_x00000020_x0000003a_x0000003a_x00000020alloc_x00000020_x0000003a_x0000003a_x00000020string_x00000020_x0000003a_x0000003a_x00000020String_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020rs_x00000020_x0000003a_x0000003a_x00000020alloc_x00000020_x0000003a_x0000003a_x00000020ffi_x00000020_x0000003a_x0000003a_x00000020IntoStringError_x00000020_x0000003e
namespace __crubit_internal {
extern "C" void
__crubit_thunk_7b344df938a8cdb9__uRNvYINtNtCsoHVEWV6jqw_u4core6result6ResultNtNtCsazOrLUIp1qL_u5alloc6string6StringNtNtNtBH_u3ffi5c_ustr15IntoStringErrorENtNtB7_u5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    rs_std::Result<::rs::alloc::string::String,
                   ::rs::alloc::ffi::IntoStringError> const&,
    rs_std::Result<::rs::alloc::string::String,
                   ::rs::alloc::ffi::IntoStringError>* __ret_ptr);
}
namespace __crubit_internal {
extern "C" void
__crubit_thunk_7b344df938a8cdb9__uRNvYINtNtCsoHVEWV6jqw_u4core6result6ResultNtNtCsazOrLUIp1qL_u5alloc6string6StringNtNtNtBH_u3ffi5c_ustr15IntoStringErrorENtNtB7_u5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    rs_std::Result<::rs::alloc::string::String,
                   ::rs::alloc::ffi::IntoStringError>&,
    rs_std::Result<::rs::alloc::string::String,
                   ::rs::alloc::ffi::IntoStringError> const&);
}
inline rs_std::Result<
    ::rs::alloc::string::String,
    ::rs::alloc::ffi::IntoStringError>::Result(const Result& other) noexcept {
  __crubit_internal::
      __crubit_thunk_7b344df938a8cdb9__uRNvYINtNtCsoHVEWV6jqw_u4core6result6ResultNtNtCsazOrLUIp1qL_u5alloc6string6StringNtNtNtBH_u3ffi5c_ustr15IntoStringErrorENtNtB7_u5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
          other, this);
}
inline rs_std::Result<::rs::alloc::string::String,
                      ::rs::alloc::ffi::IntoStringError>&
rs_std::Result<::rs::alloc::string::String, ::rs::alloc::ffi::IntoStringError>::
operator=(const Result& other) noexcept {
  if (this != &other) {
    __crubit_internal::
        __crubit_thunk_7b344df938a8cdb9__uRNvYINtNtCsoHVEWV6jqw_u4core6result6ResultNtNtCsazOrLUIp1qL_u5alloc6string6StringNtNtNtBH_u3ffi5c_ustr15IntoStringErrorENtNtB7_u5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
            *this, other);
  }
  return *this;
}
inline rs_std::Result<
    ::rs::alloc::string::String,
    ::rs::alloc::ffi::IntoStringError>::Result(::crubit::UnsafeRelocateTag,
                                               Result&& value) {
  ::std::memcpy(this, &value, sizeof(value));
}
inline rs_std::Result<::rs::alloc::string::String,
                      ::rs::alloc::ffi::IntoStringError>::~Result() noexcept {
  this->Reset();
}
inline constexpr ::std::uint8_t
rs_std::Result<::rs::alloc::string::String,
               ::rs::alloc::ffi::IntoStringError>::tag() const& noexcept {
  std::array<unsigned char, sizeof(::std::uint8_t)> __bytes = {};
  for (std::size_t i = 0; i < sizeof(::std::uint8_t); ++i) {
    __bytes[i] = __storage[24 + i];
  }
  return std::bit_cast<::std::uint8_t>(__bytes);
}
inline constexpr void rs_std::Result<
    ::rs::alloc::string::String,
    ::rs::alloc::ffi::IntoStringError>::set_tag(::std::uint8_t tag) noexcept {
  auto __bytes =
      std::bit_cast<std::array<unsigned char, sizeof(::std::uint8_t)>>(tag);
  for (std::size_t i = 0; i < sizeof(::std::uint8_t); ++i) {
    __storage[24 + i] = __bytes[i];
  }
}

template <typename U>
  requires(rs_std::ResultForwardConstructible<
           rs_std::Result<::rs::alloc::string::String,
                          ::rs::alloc::ffi::IntoStringError>,
           ::rs::alloc::string::String, U>)
inline constexpr rs_std::Result<
    ::rs::alloc::string::String,
    ::rs::alloc::ffi::IntoStringError>::Result(U&& ok) noexcept
    : base_type(::std::forward<U>(ok)) {}
template <typename U>
  requires(rs_std::ResultForwardConstructible<
           rs_std::Result<::rs::alloc::string::String,
                          ::rs::alloc::ffi::IntoStringError>,
           ::rs::alloc::string::String, U>)
inline constexpr rs_std::Result<::rs::alloc::string::String,
                                ::rs::alloc::ffi::IntoStringError>&
rs_std::Result<::rs::alloc::string::String,
               ::rs::alloc::ffi::IntoStringError>::operator=(U&& ok) noexcept {
  base_type::operator=(::std::forward<U>(ok));
  return *this;
}
template <typename F>
  requires(rs_std::ResultUnexpectedConstructible<
           ::rs::alloc::ffi::IntoStringError, F>)
inline constexpr rs_std::Result<::rs::alloc::string::String,
                                ::rs::alloc::ffi::IntoStringError>::
    Result(rs_std::unexpected<F>&& err) noexcept
    : base_type(::std::move(err)) {}
template <typename F>
  requires(rs_std::ResultUnexpectedConstructible<
           ::rs::alloc::ffi::IntoStringError, F>)
inline constexpr rs_std::Result<::rs::alloc::string::String,
                                ::rs::alloc::ffi::IntoStringError>&
rs_std::Result<::rs::alloc::string::String, ::rs::alloc::ffi::IntoStringError>::
operator=(rs_std::unexpected<F>&& err) noexcept {
  base_type::operator=(::std::move(err));
  return *this;
}
template <typename... Args>
inline constexpr rs_std::Result<
    ::rs::alloc::string::String,
    ::rs::alloc::ffi::IntoStringError>::Result(::std::in_place_t ip,
                                               Args&&... args) noexcept
    : base_type(ip, ::std::forward<Args>(args)...) {}
template <typename... Args>
inline constexpr rs_std::Result<
    ::rs::alloc::string::String,
    ::rs::alloc::ffi::IntoStringError>::Result(rs_std::unexpect_t u,
                                               Args&&... args) noexcept
    : base_type(u, ::std::forward<Args>(args)...) {}

#endif

#ifndef _CRUBIT_BINDINGS_FOR_IMPL_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020rs_x00000020_x0000003a_x0000003a_x00000020alloc_x00000020_x0000003a_x0000003a_x00000020string_x00000020_x0000003a_x0000003a_x00000020String_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020rs_x00000020_x0000003a_x0000003a_x00000020alloc_x00000020_x0000003a_x0000003a_x00000020string_x00000020_x0000003a_x0000003a_x00000020FromUtf16Error_x00000020_x0000003e
#define _CRUBIT_BINDINGS_FOR_IMPL_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020rs_x00000020_x0000003a_x0000003a_x00000020alloc_x00000020_x0000003a_x0000003a_x00000020string_x00000020_x0000003a_x0000003a_x00000020String_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020rs_x00000020_x0000003a_x0000003a_x00000020alloc_x00000020_x0000003a_x0000003a_x00000020string_x00000020_x0000003a_x0000003a_x00000020FromUtf16Error_x00000020_x0000003e
inline rs_std::Result<
    ::rs::alloc::string::String,
    ::rs::alloc::string::FromUtf16Error>::Result(::crubit::UnsafeRelocateTag,
                                                 Result&& value) {
  ::std::memcpy(this, &value, sizeof(value));
}
inline rs_std::Result<::rs::alloc::string::String,
                      ::rs::alloc::string::FromUtf16Error>::~Result() noexcept {
  this->Reset();
}
inline constexpr ::std::uint64_t
rs_std::Result<::rs::alloc::string::String,
               ::rs::alloc::string::FromUtf16Error>::tag() const& noexcept {
  std::array<unsigned char, sizeof(::std::uint64_t)> __bytes = {};
  for (std::size_t i = 0; i < sizeof(::std::uint64_t); ++i) {
    __bytes[i] = __storage[0 + i];
  }
  return std::bit_cast<::std::uint64_t>(__bytes);
}
inline constexpr void
rs_std::Result<::rs::alloc::string::String,
               ::rs::alloc::string::FromUtf16Error>::set_tag(::std::uint64_t
                                                                 tag) noexcept {
  auto __bytes =
      std::bit_cast<std::array<unsigned char, sizeof(::std::uint64_t)>>(tag);
  for (std::size_t i = 0; i < sizeof(::std::uint64_t); ++i) {
    __storage[0 + i] = __bytes[i];
  }
}

template <typename U>
  requires(rs_std::ResultForwardConstructible<
           rs_std::Result<::rs::alloc::string::String,
                          ::rs::alloc::string::FromUtf16Error>,
           ::rs::alloc::string::String, U>)
inline constexpr rs_std::Result<
    ::rs::alloc::string::String,
    ::rs::alloc::string::FromUtf16Error>::Result(U&& ok) noexcept
    : base_type(::std::forward<U>(ok)) {}
template <typename U>
  requires(rs_std::ResultForwardConstructible<
           rs_std::Result<::rs::alloc::string::String,
                          ::rs::alloc::string::FromUtf16Error>,
           ::rs::alloc::string::String, U>)
inline constexpr rs_std::Result<::rs::alloc::string::String,
                                ::rs::alloc::string::FromUtf16Error>&
rs_std::Result<
    ::rs::alloc::string::String,
    ::rs::alloc::string::FromUtf16Error>::operator=(U&& ok) noexcept {
  base_type::operator=(::std::forward<U>(ok));
  return *this;
}
template <typename F>
  requires(rs_std::ResultUnexpectedConstructible<
           ::rs::alloc::string::FromUtf16Error, F>)
inline constexpr rs_std::Result<::rs::alloc::string::String,
                                ::rs::alloc::string::FromUtf16Error>::
    Result(rs_std::unexpected<F>&& err) noexcept
    : base_type(::std::move(err)) {}
template <typename F>
  requires(rs_std::ResultUnexpectedConstructible<
           ::rs::alloc::string::FromUtf16Error, F>)
inline constexpr rs_std::Result<::rs::alloc::string::String,
                                ::rs::alloc::string::FromUtf16Error>&
rs_std::Result<::rs::alloc::string::String,
               ::rs::alloc::string::FromUtf16Error>::
operator=(rs_std::unexpected<F>&& err) noexcept {
  base_type::operator=(::std::move(err));
  return *this;
}
template <typename... Args>
inline constexpr rs_std::Result<
    ::rs::alloc::string::String,
    ::rs::alloc::string::FromUtf16Error>::Result(::std::in_place_t ip,
                                                 Args&&... args) noexcept
    : base_type(ip, ::std::forward<Args>(args)...) {}
template <typename... Args>
inline constexpr rs_std::Result<
    ::rs::alloc::string::String,
    ::rs::alloc::string::FromUtf16Error>::Result(rs_std::unexpect_t u,
                                                 Args&&... args) noexcept
    : base_type(u, ::std::forward<Args>(args)...) {}

#endif

#ifndef _CRUBIT_BINDINGS_FOR_IMPL_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020rs_x00000020_x0000003a_x0000003a_x00000020alloc_x00000020_x0000003a_x0000003a_x00000020string_x00000020_x0000003a_x0000003a_x00000020String_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020rs_x00000020_x0000003a_x0000003a_x00000020alloc_x00000020_x0000003a_x0000003a_x00000020string_x00000020_x0000003a_x0000003a_x00000020FromUtf8Error_x00000020_x0000003e
#define _CRUBIT_BINDINGS_FOR_IMPL_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020rs_x00000020_x0000003a_x0000003a_x00000020alloc_x00000020_x0000003a_x0000003a_x00000020string_x00000020_x0000003a_x0000003a_x00000020String_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020rs_x00000020_x0000003a_x0000003a_x00000020alloc_x00000020_x0000003a_x0000003a_x00000020string_x00000020_x0000003a_x0000003a_x00000020FromUtf8Error_x00000020_x0000003e
namespace __crubit_internal {
extern "C" void
__crubit_thunk_7b344df938a8cdb9__uRNvYINtNtCsoHVEWV6jqw_u4core6result6ResultNtNtCsazOrLUIp1qL_u5alloc6string6StringNtBF_u13FromUtf8ErrorENtNtB7_u5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    rs_std::Result<::rs::alloc::string::String,
                   ::rs::alloc::string::FromUtf8Error> const&,
    rs_std::Result<::rs::alloc::string::String,
                   ::rs::alloc::string::FromUtf8Error>* __ret_ptr);
}
namespace __crubit_internal {
extern "C" void
__crubit_thunk_7b344df938a8cdb9__uRNvYINtNtCsoHVEWV6jqw_u4core6result6ResultNtNtCsazOrLUIp1qL_u5alloc6string6StringNtBF_u13FromUtf8ErrorENtNtB7_u5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    rs_std::Result<::rs::alloc::string::String,
                   ::rs::alloc::string::FromUtf8Error>&,
    rs_std::Result<::rs::alloc::string::String,
                   ::rs::alloc::string::FromUtf8Error> const&);
}
inline rs_std::Result<
    ::rs::alloc::string::String,
    ::rs::alloc::string::FromUtf8Error>::Result(const Result& other) noexcept {
  __crubit_internal::
      __crubit_thunk_7b344df938a8cdb9__uRNvYINtNtCsoHVEWV6jqw_u4core6result6ResultNtNtCsazOrLUIp1qL_u5alloc6string6StringNtBF_u13FromUtf8ErrorENtNtB7_u5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
          other, this);
}
inline rs_std::Result<::rs::alloc::string::String,
                      ::rs::alloc::string::FromUtf8Error>&
rs_std::Result<::rs::alloc::string::String,
               ::rs::alloc::string::FromUtf8Error>::
operator=(const Result& other) noexcept {
  if (this != &other) {
    __crubit_internal::
        __crubit_thunk_7b344df938a8cdb9__uRNvYINtNtCsoHVEWV6jqw_u4core6result6ResultNtNtCsazOrLUIp1qL_u5alloc6string6StringNtBF_u13FromUtf8ErrorENtNtB7_u5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
            *this, other);
  }
  return *this;
}
inline rs_std::Result<
    ::rs::alloc::string::String,
    ::rs::alloc::string::FromUtf8Error>::Result(::crubit::UnsafeRelocateTag,
                                                Result&& value) {
  ::std::memcpy(this, &value, sizeof(value));
}
inline rs_std::Result<::rs::alloc::string::String,
                      ::rs::alloc::string::FromUtf8Error>::~Result() noexcept {
  this->Reset();
}
inline constexpr ::std::uint64_t
rs_std::Result<::rs::alloc::string::String,
               ::rs::alloc::string::FromUtf8Error>::tag() const& noexcept {
  std::array<unsigned char, sizeof(::std::uint64_t)> __bytes = {};
  for (std::size_t i = 0; i < sizeof(::std::uint64_t); ++i) {
    __bytes[i] = __storage[0 + i];
  }
  return std::bit_cast<::std::uint64_t>(__bytes);
}
inline constexpr void rs_std::Result<
    ::rs::alloc::string::String,
    ::rs::alloc::string::FromUtf8Error>::set_tag(::std::uint64_t tag) noexcept {
  auto __bytes =
      std::bit_cast<std::array<unsigned char, sizeof(::std::uint64_t)>>(tag);
  for (std::size_t i = 0; i < sizeof(::std::uint64_t); ++i) {
    __storage[0 + i] = __bytes[i];
  }
}

template <typename U>
  requires(rs_std::ResultForwardConstructible<
           rs_std::Result<::rs::alloc::string::String,
                          ::rs::alloc::string::FromUtf8Error>,
           ::rs::alloc::string::String, U>)
inline constexpr rs_std::Result<
    ::rs::alloc::string::String,
    ::rs::alloc::string::FromUtf8Error>::Result(U&& ok) noexcept
    : base_type(::std::forward<U>(ok)) {}
template <typename U>
  requires(rs_std::ResultForwardConstructible<
           rs_std::Result<::rs::alloc::string::String,
                          ::rs::alloc::string::FromUtf8Error>,
           ::rs::alloc::string::String, U>)
inline constexpr rs_std::Result<::rs::alloc::string::String,
                                ::rs::alloc::string::FromUtf8Error>&
rs_std::Result<::rs::alloc::string::String,
               ::rs::alloc::string::FromUtf8Error>::operator=(U&& ok) noexcept {
  base_type::operator=(::std::forward<U>(ok));
  return *this;
}
template <typename F>
  requires(rs_std::ResultUnexpectedConstructible<
           ::rs::alloc::string::FromUtf8Error, F>)
inline constexpr rs_std::Result<::rs::alloc::string::String,
                                ::rs::alloc::string::FromUtf8Error>::
    Result(rs_std::unexpected<F>&& err) noexcept
    : base_type(::std::move(err)) {}
template <typename F>
  requires(rs_std::ResultUnexpectedConstructible<
           ::rs::alloc::string::FromUtf8Error, F>)
inline constexpr rs_std::Result<::rs::alloc::string::String,
                                ::rs::alloc::string::FromUtf8Error>&
rs_std::Result<::rs::alloc::string::String,
               ::rs::alloc::string::FromUtf8Error>::
operator=(rs_std::unexpected<F>&& err) noexcept {
  base_type::operator=(::std::move(err));
  return *this;
}
template <typename... Args>
inline constexpr rs_std::Result<
    ::rs::alloc::string::String,
    ::rs::alloc::string::FromUtf8Error>::Result(::std::in_place_t ip,
                                                Args&&... args) noexcept
    : base_type(ip, ::std::forward<Args>(args)...) {}
template <typename... Args>
inline constexpr rs_std::Result<
    ::rs::alloc::string::String,
    ::rs::alloc::string::FromUtf8Error>::Result(rs_std::unexpect_t u,
                                                Args&&... args) noexcept
    : base_type(u, ::std::forward<Args>(args)...) {}

#endif

#ifndef _CRUBIT_BINDINGS_FOR_IMPL_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Option_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020std_x00000020_x0000003a_x0000003a_x00000020uint64_ut_x00000020_x0000003e
#define _CRUBIT_BINDINGS_FOR_IMPL_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Option_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020std_x00000020_x0000003a_x0000003a_x00000020uint64_ut_x00000020_x0000003e
static_assert(
    ::std::is_trivially_copy_constructible_v<rs_std::Option<::std::uint64_t>>);
static_assert(
    ::std::is_trivially_copy_assignable_v<rs_std::Option<::std::uint64_t>>);
static_assert(
    ::std::is_trivially_move_constructible_v<rs_std::Option<::std::uint64_t>>);
static_assert(
    ::std::is_trivially_move_assignable_v<rs_std::Option<::std::uint64_t>>);
inline rs_std::Option<::std::uint64_t>::Option(::crubit::UnsafeRelocateTag,
                                               Option&& value) {
  ::std::memcpy(this, &value, sizeof(value));
}
static_assert(
    ::std::is_trivially_destructible_v<rs_std::Option<::std::uint64_t>>);
inline constexpr ::std::uint64_t rs_std::Option<::std::uint64_t>::tag()
    const& noexcept {
  ::std::array<unsigned char, sizeof(::std::uint64_t)> __bytes = {};
  for (::std::size_t i = 0; i < sizeof(::std::uint64_t); ++i) {
    __bytes[i] = storage_[0 + i];
  }
  return ::std::bit_cast<::std::uint64_t>(__bytes);
}
inline constexpr void rs_std::Option<::std::uint64_t>::set_tag(
    ::std::uint64_t tag) noexcept {
  auto __bytes =
      ::std::bit_cast<::std::array<unsigned char, sizeof(::std::uint64_t)>>(
          tag);
  for (::std::size_t i = 0; i < sizeof(::std::uint64_t); ++i) {
    storage_[0 + i] = __bytes[i];
  }
}

inline constexpr rs_std::Option<::std::uint64_t>::Option(
    ::std::nullopt_t) noexcept
    : base_type(::std::nullopt) {}
inline constexpr rs_std::Option<::std::uint64_t>&
rs_std::Option<::std::uint64_t>::operator=(::std::nullopt_t) noexcept {
  base_type::operator=(::std::nullopt);
  return *this;
}
template <typename U>
  requires(rs_std::OptionForwardConstructible<rs_std::Option<::std::uint64_t>,
                                              ::std::uint64_t, U>)
inline rs_std::Option<::std::uint64_t>::Option(U&& value) noexcept
    : base_type(::std::forward<U>(value)) {}
template <typename U>
  requires(rs_std::OptionForwardConstructible<rs_std::Option<::std::uint64_t>,
                                              ::std::uint64_t, U>)
inline rs_std::Option<::std::uint64_t>&
rs_std::Option<::std::uint64_t>::operator=(U&& value) noexcept {
  base_type::operator=(::std::forward<U>(value));
  return *this;
}
template <typename Opt>
  requires(rs_std::OptionFromStdOptional<::std::uint64_t, Opt>)
inline rs_std::Option<::std::uint64_t>::Option(Opt&& value) noexcept
    : base_type(::std::forward<Opt>(value)) {}
template <typename Opt>
  requires(rs_std::OptionFromStdOptional<::std::uint64_t, Opt>)
inline rs_std::Option<::std::uint64_t>&
rs_std::Option<::std::uint64_t>::operator=(Opt&& value) noexcept {
  base_type::operator=(::std::forward<Opt>(value));
  return *this;
}
template <typename... Args>
inline rs_std::Option<::std::uint64_t>::Option(::std::in_place_t ip,
                                               Args&&... args) noexcept
    : base_type(ip, ::std::forward<Args>(args)...) {}

#endif

#pragma clang diagnostic pop
