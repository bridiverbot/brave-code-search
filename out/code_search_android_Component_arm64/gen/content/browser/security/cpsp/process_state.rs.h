#pragma once
#include "content/public/common/child_process_id.h"
#include "content/browser/process_lock.h"
#include "content/browser/process_lock_shim.h"
#include "content/browser/security/cpsp/child_process_security_policy_shim.h"
#include "content/browser/site_instance_impl.h"
#include "url/origin.rs.h"
#include <array>
#include <cstdint>
#include <memory>
#include <string>
#if __cplusplus >= 201703L
#include <string_view>
#endif

#ifdef __clang__
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdollar-in-identifier-extension"
#endif // __clang__

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

namespace content {
  using ProcessLock = ::content::ProcessLock;
  using SiteInstanceImpl = ::content::SiteInstanceImpl;
}

namespace content {
namespace rust {
namespace child_process_security_policy {
void create_state_for_process(::content::ChildProcessId child_id) noexcept;

void prepare_to_remove_state(::content::ChildProcessId child_id) noexcept;

void complete_pending_state_removal(::content::ChildProcessId child_id) noexcept;

void lock_process(::content::ChildProcessId child_id, ::content::ProcessLock const &process_lock) noexcept;

void set_process_is_used(::content::ChildProcessId child_id) noexcept;

::std::unique_ptr<::content::ProcessLock> get_process_lock(::content::ChildProcessId child_id) noexcept;

void grant_commit_origin(::content::ChildProcessId child_id, ::std::unique_ptr<::url::Origin> origin) noexcept;

void grant_request_origin(::content::ChildProcessId child_id, ::std::unique_ptr<::url::Origin> origin) noexcept;

void grant_commit_scheme(::content::ChildProcessId child_id, ::rust::Str scheme) noexcept;

void grant_request_scheme(::content::ChildProcessId child_id, ::rust::Str scheme) noexcept;

void grant_web_ui_bindings(::content::ChildProcessId child_id) noexcept;

bool has_web_ui_bindings(::content::ChildProcessId child_id) noexcept;

void grant_origin_check_exemption_for_webview(::content::ChildProcessId child_id, ::std::unique_ptr<::url::Origin> origin) noexcept;

bool has_origin_check_exemption_for_webview(::content::ChildProcessId child_id, ::std::unique_ptr<::url::Origin> origin) noexcept;

void grant_send_midi_message(::content::ChildProcessId child_id) noexcept;

void grant_send_midi_sysex_message(::content::ChildProcessId child_id) noexcept;

bool can_send_midi_message(::content::ChildProcessId child_id) noexcept;

bool can_send_midi_sysex_message(::content::ChildProcessId child_id) noexcept;
} // namespace child_process_security_policy
} // namespace rust
} // namespace content

#ifdef __clang__
#pragma clang diagnostic pop
#endif // __clang__
