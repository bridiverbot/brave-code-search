#include "content/public/common/child_process_id.h"
#include "content/browser/process_lock.h"
#include "content/browser/process_lock_shim.h"
#include "content/browser/security/cpsp/child_process_security_policy_shim.h"
#include "content/browser/site_instance_impl.h"
#include "url/origin.rs.h"
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
#pragma GCC diagnostic ignored "-Wshadow"
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

#ifndef CXXBRIDGE1_RELOCATABLE
#define CXXBRIDGE1_RELOCATABLE
namespace detail {
template <typename... Ts>
struct make_void {
  using type = void;
};

template <typename... Ts>
using void_t = typename make_void<Ts...>::type;

template <typename Void, template <typename...> class, typename...>
struct detect : std::false_type {};
template <template <typename...> class T, typename... A>
struct detect<void_t<T<A...>>, T, A...> : std::true_type {};

template <template <typename...> class T, typename... A>
using is_detected = detect<void, T, A...>;

template <typename T>
using detect_IsRelocatable = typename T::IsRelocatable;

template <typename T>
struct get_IsRelocatable
    : std::is_same<typename T::IsRelocatable, std::true_type> {};
} // namespace detail

template <typename T>
struct IsRelocatable
    : std::conditional<
          detail::is_detected<detail::detect_IsRelocatable, T>::value,
          detail::get_IsRelocatable<T>,
          std::integral_constant<
              bool, std::is_trivially_move_constructible<T>::value &&
                        std::is_trivially_destructible<T>::value>>::type {};
#endif // CXXBRIDGE1_RELOCATABLE

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

namespace content {
  using ProcessLock = ::content::ProcessLock;
  using SiteInstanceImpl = ::content::SiteInstanceImpl;
}

static_assert(
    ::rust::IsRelocatable<::content::ChildProcessId>::value,
    "type content::ChildProcessId should be trivially move constructible and trivially destructible in C++ to be used as an argument of `create_state_for_process`, `prepare_to_remove_state`, `complete_pending_state_removal` in Rust");

namespace content {
namespace rust {
namespace child_process_security_policy {
extern "C" {
bool content$rust$child_process_security_policy$cxxbridge1$202$ProcessLock$is_locked_to_site(::content::ProcessLock const &self) noexcept {
  bool (::content::ProcessLock::*is_locked_to_site$)() const = &::content::ProcessLock::IsLockedToSite;
  return (self.*is_locked_to_site$)();
}

bool content$rust$child_process_security_policy$cxxbridge1$202$ProcessLock$allows_any_site(::content::ProcessLock const &self) noexcept {
  bool (::content::ProcessLock::*allows_any_site$)() const = &::content::ProcessLock::AllowsAnySite;
  return (self.*allows_any_site$)();
}

bool content$rust$child_process_security_policy$cxxbridge1$202$ProcessLock$is_unused(::content::ProcessLock const &self) noexcept {
  bool (::content::ProcessLock::*is_unused$)() const = &::content::ProcessLock::is_unused;
  return (self.*is_unused$)();
}
} // extern "C"
} // namespace child_process_security_policy
} // namespace rust

extern "C" {
::GURL const *content$cxxbridge1$202$SiteInstanceImpl$get_default_site_url() noexcept {
  ::GURL const &(*get_default_site_url$)() = &::content::SiteInstanceImpl::GetDefaultSiteURL;
  return &get_default_site_url$();
}
} // extern "C"

namespace rust {
namespace process_lock {
extern "C" {
::GURL *content$rust$process_lock$cxxbridge1$202$get_process_lock_url(::content::ProcessLock const &lock) noexcept {
  ::std::unique_ptr<::GURL> (*get_process_lock_url$)(::content::ProcessLock const &) = ::content::rust::process_lock::GetProcessLockURL;
  return get_process_lock_url$(lock).release();
}

bool content$rust$process_lock$cxxbridge1$202$have_same_web_exposed_isolation_info(::content::ProcessLock const &a, ::content::ProcessLock const &b) noexcept {
  bool (*have_same_web_exposed_isolation_info$)(::content::ProcessLock const &, ::content::ProcessLock const &) = ::content::rust::process_lock::HaveSameWebExposedIsolationInfo;
  return have_same_web_exposed_isolation_info$(a, b);
}

void content$rust$process_lock$cxxbridge1$202$to_string(::content::ProcessLock const &lock, ::rust::String *return$) noexcept {
  ::rust::String (*to_string$)(::content::ProcessLock const &) = ::content::rust::process_lock::ToString;
  new (return$) ::rust::String(to_string$(lock));
}

::content::ProcessLock *content$rust$process_lock$cxxbridge1$202$create_invalid() noexcept {
  ::std::unique_ptr<::content::ProcessLock> (*create_invalid$)() = ::content::rust::process_lock::CreateInvalid;
  return create_invalid$().release();
}

::content::ProcessLock *content$rust$process_lock$cxxbridge1$202$clone(::content::ProcessLock const &lock) noexcept {
  ::std::unique_ptr<::content::ProcessLock> (*clone$)(::content::ProcessLock const &) = ::content::rust::process_lock::Clone;
  return clone$(lock).release();
}

void content$rust$process_lock$cxxbridge1$202$set_is_used(::content::ProcessLock &lock) noexcept {
  void (*set_is_used$)(::content::ProcessLock &) = ::content::rust::process_lock::SetIsUsed;
  set_is_used$(lock);
}
} // extern "C"
} // namespace process_lock

namespace child_process_security_policy {
extern "C" {
void content$rust$child_process_security_policy$cxxbridge1$202$create_state_for_process(::content::ChildProcessId *child_id) noexcept;

void content$rust$child_process_security_policy$cxxbridge1$202$prepare_to_remove_state(::content::ChildProcessId *child_id) noexcept;

void content$rust$child_process_security_policy$cxxbridge1$202$complete_pending_state_removal(::content::ChildProcessId *child_id) noexcept;

void content$rust$child_process_security_policy$cxxbridge1$202$lock_process(::content::ChildProcessId *child_id, ::content::ProcessLock const &process_lock) noexcept;

void content$rust$child_process_security_policy$cxxbridge1$202$set_process_is_used(::content::ChildProcessId *child_id) noexcept;

::content::ProcessLock *content$rust$child_process_security_policy$cxxbridge1$202$get_process_lock(::content::ChildProcessId *child_id) noexcept;

void content$rust$child_process_security_policy$cxxbridge1$202$grant_commit_origin(::content::ChildProcessId *child_id, ::url::Origin *origin) noexcept;

void content$rust$child_process_security_policy$cxxbridge1$202$grant_request_origin(::content::ChildProcessId *child_id, ::url::Origin *origin) noexcept;

void content$rust$child_process_security_policy$cxxbridge1$202$grant_commit_scheme(::content::ChildProcessId *child_id, ::rust::Str scheme) noexcept;

void content$rust$child_process_security_policy$cxxbridge1$202$grant_request_scheme(::content::ChildProcessId *child_id, ::rust::Str scheme) noexcept;

void content$rust$child_process_security_policy$cxxbridge1$202$grant_web_ui_bindings(::content::ChildProcessId *child_id) noexcept;

bool content$rust$child_process_security_policy$cxxbridge1$202$has_web_ui_bindings(::content::ChildProcessId *child_id) noexcept;

void content$rust$child_process_security_policy$cxxbridge1$202$grant_origin_check_exemption_for_webview(::content::ChildProcessId *child_id, ::url::Origin *origin) noexcept;

bool content$rust$child_process_security_policy$cxxbridge1$202$has_origin_check_exemption_for_webview(::content::ChildProcessId *child_id, ::url::Origin *origin) noexcept;

void content$rust$child_process_security_policy$cxxbridge1$202$grant_send_midi_message(::content::ChildProcessId *child_id) noexcept;

void content$rust$child_process_security_policy$cxxbridge1$202$grant_send_midi_sysex_message(::content::ChildProcessId *child_id) noexcept;

bool content$rust$child_process_security_policy$cxxbridge1$202$can_send_midi_message(::content::ChildProcessId *child_id) noexcept;

bool content$rust$child_process_security_policy$cxxbridge1$202$can_send_midi_sysex_message(::content::ChildProcessId *child_id) noexcept;
} // extern "C"

void create_state_for_process(::content::ChildProcessId child_id) noexcept {
  ::rust::ManuallyDrop<::content::ChildProcessId> child_id$(::std::move(child_id));
  content$rust$child_process_security_policy$cxxbridge1$202$create_state_for_process(&child_id$.value);
}

void prepare_to_remove_state(::content::ChildProcessId child_id) noexcept {
  ::rust::ManuallyDrop<::content::ChildProcessId> child_id$(::std::move(child_id));
  content$rust$child_process_security_policy$cxxbridge1$202$prepare_to_remove_state(&child_id$.value);
}

void complete_pending_state_removal(::content::ChildProcessId child_id) noexcept {
  ::rust::ManuallyDrop<::content::ChildProcessId> child_id$(::std::move(child_id));
  content$rust$child_process_security_policy$cxxbridge1$202$complete_pending_state_removal(&child_id$.value);
}

void lock_process(::content::ChildProcessId child_id, ::content::ProcessLock const &process_lock) noexcept {
  ::rust::ManuallyDrop<::content::ChildProcessId> child_id$(::std::move(child_id));
  content$rust$child_process_security_policy$cxxbridge1$202$lock_process(&child_id$.value, process_lock);
}

void set_process_is_used(::content::ChildProcessId child_id) noexcept {
  ::rust::ManuallyDrop<::content::ChildProcessId> child_id$(::std::move(child_id));
  content$rust$child_process_security_policy$cxxbridge1$202$set_process_is_used(&child_id$.value);
}

::std::unique_ptr<::content::ProcessLock> get_process_lock(::content::ChildProcessId child_id) noexcept {
  ::rust::ManuallyDrop<::content::ChildProcessId> child_id$(::std::move(child_id));
  return ::std::unique_ptr<::content::ProcessLock>(content$rust$child_process_security_policy$cxxbridge1$202$get_process_lock(&child_id$.value));
}

void grant_commit_origin(::content::ChildProcessId child_id, ::std::unique_ptr<::url::Origin> origin) noexcept {
  ::rust::ManuallyDrop<::content::ChildProcessId> child_id$(::std::move(child_id));
  content$rust$child_process_security_policy$cxxbridge1$202$grant_commit_origin(&child_id$.value, origin.release());
}

void grant_request_origin(::content::ChildProcessId child_id, ::std::unique_ptr<::url::Origin> origin) noexcept {
  ::rust::ManuallyDrop<::content::ChildProcessId> child_id$(::std::move(child_id));
  content$rust$child_process_security_policy$cxxbridge1$202$grant_request_origin(&child_id$.value, origin.release());
}

void grant_commit_scheme(::content::ChildProcessId child_id, ::rust::Str scheme) noexcept {
  ::rust::ManuallyDrop<::content::ChildProcessId> child_id$(::std::move(child_id));
  content$rust$child_process_security_policy$cxxbridge1$202$grant_commit_scheme(&child_id$.value, scheme);
}

void grant_request_scheme(::content::ChildProcessId child_id, ::rust::Str scheme) noexcept {
  ::rust::ManuallyDrop<::content::ChildProcessId> child_id$(::std::move(child_id));
  content$rust$child_process_security_policy$cxxbridge1$202$grant_request_scheme(&child_id$.value, scheme);
}

void grant_web_ui_bindings(::content::ChildProcessId child_id) noexcept {
  ::rust::ManuallyDrop<::content::ChildProcessId> child_id$(::std::move(child_id));
  content$rust$child_process_security_policy$cxxbridge1$202$grant_web_ui_bindings(&child_id$.value);
}

bool has_web_ui_bindings(::content::ChildProcessId child_id) noexcept {
  ::rust::ManuallyDrop<::content::ChildProcessId> child_id$(::std::move(child_id));
  return content$rust$child_process_security_policy$cxxbridge1$202$has_web_ui_bindings(&child_id$.value);
}

void grant_origin_check_exemption_for_webview(::content::ChildProcessId child_id, ::std::unique_ptr<::url::Origin> origin) noexcept {
  ::rust::ManuallyDrop<::content::ChildProcessId> child_id$(::std::move(child_id));
  content$rust$child_process_security_policy$cxxbridge1$202$grant_origin_check_exemption_for_webview(&child_id$.value, origin.release());
}

bool has_origin_check_exemption_for_webview(::content::ChildProcessId child_id, ::std::unique_ptr<::url::Origin> origin) noexcept {
  ::rust::ManuallyDrop<::content::ChildProcessId> child_id$(::std::move(child_id));
  return content$rust$child_process_security_policy$cxxbridge1$202$has_origin_check_exemption_for_webview(&child_id$.value, origin.release());
}

void grant_send_midi_message(::content::ChildProcessId child_id) noexcept {
  ::rust::ManuallyDrop<::content::ChildProcessId> child_id$(::std::move(child_id));
  content$rust$child_process_security_policy$cxxbridge1$202$grant_send_midi_message(&child_id$.value);
}

void grant_send_midi_sysex_message(::content::ChildProcessId child_id) noexcept {
  ::rust::ManuallyDrop<::content::ChildProcessId> child_id$(::std::move(child_id));
  content$rust$child_process_security_policy$cxxbridge1$202$grant_send_midi_sysex_message(&child_id$.value);
}

bool can_send_midi_message(::content::ChildProcessId child_id) noexcept {
  ::rust::ManuallyDrop<::content::ChildProcessId> child_id$(::std::move(child_id));
  return content$rust$child_process_security_policy$cxxbridge1$202$can_send_midi_message(&child_id$.value);
}

bool can_send_midi_sysex_message(::content::ChildProcessId child_id) noexcept {
  ::rust::ManuallyDrop<::content::ChildProcessId> child_id$(::std::move(child_id));
  return content$rust$child_process_security_policy$cxxbridge1$202$can_send_midi_sysex_message(&child_id$.value);
}
} // namespace child_process_security_policy
} // namespace rust
} // namespace content

extern "C" {
static_assert(::rust::detail::is_complete<::std::remove_extent<::content::ProcessLock>::type>::value, "definition of `::content::ProcessLock` is required");
static_assert(sizeof(::std::unique_ptr<::content::ProcessLock>) == sizeof(void *), "");
static_assert(alignof(::std::unique_ptr<::content::ProcessLock>) == alignof(void *), "");
void cxxbridge1$unique_ptr$content$ProcessLock$null(::std::unique_ptr<::content::ProcessLock> *ptr) noexcept {
  ::new (ptr) ::std::unique_ptr<::content::ProcessLock>();
}
void cxxbridge1$unique_ptr$content$ProcessLock$raw(::std::unique_ptr<::content::ProcessLock> *ptr, ::std::unique_ptr<::content::ProcessLock>::pointer raw) noexcept {
  ::new (ptr) ::std::unique_ptr<::content::ProcessLock>(raw);
}
::std::unique_ptr<::content::ProcessLock>::element_type const *cxxbridge1$unique_ptr$content$ProcessLock$get(::std::unique_ptr<::content::ProcessLock> const &ptr) noexcept {
  return ptr.get();
}
::std::unique_ptr<::content::ProcessLock>::pointer cxxbridge1$unique_ptr$content$ProcessLock$release(::std::unique_ptr<::content::ProcessLock> &ptr) noexcept {
  return ptr.release();
}
void cxxbridge1$unique_ptr$content$ProcessLock$drop(::std::unique_ptr<::content::ProcessLock> *ptr) noexcept {
  ::rust::deleter_if<::rust::detail::is_complete<::content::ProcessLock>::value>{}(ptr);
}
} // extern "C"
