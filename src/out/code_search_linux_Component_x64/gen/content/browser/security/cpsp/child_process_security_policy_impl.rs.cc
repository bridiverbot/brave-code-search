#include "base/files/file_path.rs.h"
#include "base/unguessable_token.h"
#include "url/origin.rs.h"
#include "content/browser/isolated_origin_util.h"
#include "storage/common/file_system/file_system_types.h"
#include "content/public/browser/browsing_instance_id.h"
#include "content/public/common/child_process_id.h"
#include "content/browser/security/cpsp/child_process_security_policy_impl.h"
#include "content/browser/security/cpsp/child_process_security_policy_shim.h"
#include <array>
#include <cstdint>
#include <memory>
#include <string>
#include <type_traits>
#include <utility>
#include <vector>
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
} // namespace cxxbridge1
} // namespace rust

namespace content {
  using IsolatedOriginUtil = ::content::IsolatedOriginUtil;
  namespace rust {
    namespace child_process_security_policy {
      enum class OriginAgentClusterIsolationState : ::std::uint8_t;
    }
  }
}

namespace content {
namespace rust {
namespace child_process_security_policy {
#ifndef CXXBRIDGE1_ENUM_content$rust$child_process_security_policy$OriginAgentClusterIsolationState
#define CXXBRIDGE1_ENUM_content$rust$child_process_security_policy$OriginAgentClusterIsolationState
enum class OriginAgentClusterIsolationState : ::std::uint8_t {
  // Site-keyed agent cluster and process, applied by default.
  SiteKeyedByDefault = 0,
  // Site-keyed agent cluster and process, explicitly requested via
  // OAC: ?0 (opt-out) header.
  SiteKeyedByHeader = 1,
  // Origin-keyed logically (renderer-side), but site-keyed in the
  // process model. Applied by default.
  OriginKeyedLogicalOnlyByDefault = 2,
  // Origin-keyed logically (renderer-side), but site-keyed in the
  // browser process model. Explicitly requested via OAC: ?1 (opt-in)
  // header.
  OriginKeyedLogicalOnlyByHeader = 3,
  // Origin-keyed logically and process-isolated. Applied by default.
  // Valid only when
  // SiteIsolationPolicy::AreOriginKeyedProcessesEnabledByDefault()
  // returns true.
  OriginKeyedProcessIsolatedByDefault = 4,
  // Origin-keyed logically and process-isolated. Explicitly requested
  // via OAC: ?1 (opt-in) header. Valid only when
  // SiteIsolationPolicy::IsProcessIsolationForOriginAgentClusterEnabled()
  // returns true.
  OriginKeyedProcessIsolatedByHeader = 5,
};
#endif // CXXBRIDGE1_ENUM_content$rust$child_process_security_policy$OriginAgentClusterIsolationState
} // namespace child_process_security_policy
} // namespace rust
} // namespace content

static_assert(
    ::rust::IsRelocatable<::base::UnguessableToken>::value,
    "type base::UnguessableToken should be trivially move constructible and trivially destructible in C++ to be used as an argument of `record_origin_agent_cluster_request_if_new`, `has_origin_ever_requested_origin_agent_cluster_value`, `remove_origin_agent_cluster_requests_for_browser_context` in Rust");
static_assert(
    ::rust::IsRelocatable<::content::ChildProcessSecurityPolicy::IsolatedOriginSource>::value,
    "type content::ChildProcessSecurityPolicy::IsolatedOriginSource should be trivially move constructible and trivially destructible in C++ to be used as an argument of `add_isolated_origin_internal`, `get_isolated_origins`, `is_isolated_site_from_source` in Rust");
static_assert(
    ::rust::IsRelocatable<::storage::FileSystemType>::value,
    "type storage::FileSystemType should be trivially move constructible and trivially destructible in C++ to be used as an argument of `register_file_system_permission_policy`, `find_permissions_for_file_system_type` in Rust");
static_assert(
    ::rust::IsRelocatable<::content::BrowsingInstanceId>::value,
    "type content::BrowsingInstanceId should be trivially move constructible and trivially destructible in C++ to be used as an argument of `add_v8_optimization_disabled_state_for_origin_if_not_cached`, `lookup_are_v8_optimizations_disabled`, `remove_v8_optimization_state` in Rust");

namespace content {
extern "C" {
__attribute__((visibility("default"))) bool content$cxxbridge1$202$IsolatedOriginUtil$is_valid_isolated_origin(::url::Origin const &origin) noexcept {
  bool (*is_valid_isolated_origin$)(::url::Origin const &) = &::content::IsolatedOriginUtil::IsValidIsolatedOrigin;
  return is_valid_isolated_origin$(origin);
}

__attribute__((visibility("default"))) bool content$cxxbridge1$202$IsolatedOriginUtil$does_origin_match_isolated_origin(::url::Origin const &origin, ::url::Origin const &isolated_origin) noexcept {
  bool (*does_origin_match_isolated_origin$)(::url::Origin const &, ::url::Origin const &) = &::content::IsolatedOriginUtil::DoesOriginMatchIsolatedOrigin;
  return does_origin_match_isolated_origin$(origin, isolated_origin);
}

__attribute__((visibility("default"))) bool content$cxxbridge1$202$IsolatedOriginUtil$is_valid_origin_for_origin_agent_cluster_opt_in(::url::Origin const &origin) noexcept {
  bool (*is_valid_origin_for_origin_agent_cluster_opt_in$)(::url::Origin const &) = &::content::IsolatedOriginUtil::IsValidOriginForOriginAgentClusterOptIn;
  return is_valid_origin_for_origin_agent_cluster_opt_in$(origin);
}

__attribute__((visibility("default"))) bool content$cxxbridge1$202$IsolatedOriginUtil$is_valid_origin_for_origin_agent_cluster_opt_out(::url::Origin const &origin) noexcept {
  bool (*is_valid_origin_for_origin_agent_cluster_opt_out$)(::url::Origin const &) = &::content::IsolatedOriginUtil::IsValidOriginForOriginAgentClusterOptOut;
  return is_valid_origin_for_origin_agent_cluster_opt_out$(origin);
}
} // extern "C"

namespace rust {
namespace child_process_security_policy {
extern "C" {
__attribute__((visibility("default"))) void content$rust$child_process_security_policy$cxxbridge1$202$push_origin_to_vector(::url::Origin const &origin, ::std::vector<::url::Origin> &vec) noexcept {
  void (*push_origin_to_vector$)(::url::Origin const &, ::std::vector<::url::Origin> &) = ::content::rust::child_process_security_policy::PushOriginToVector;
  push_origin_to_vector$(origin, vec);
}

__attribute__((visibility("default"))) ::GURL *content$rust$child_process_security_policy$cxxbridge1$202$get_site_for_origin(::url::Origin const &origin) noexcept {
  ::std::unique_ptr<::GURL> (*get_site_for_origin$)(::url::Origin const &) = ::content::rust::child_process_security_policy::GetSiteForOrigin;
  return get_site_for_origin$(origin).release();
}

__attribute__((visibility("default"))) ::GURL *content$rust$child_process_security_policy$cxxbridge1$202$remove_trailing_dot_from_url_if_necessary(::GURL const &site_url) noexcept {
  ::std::unique_ptr<::GURL> (*remove_trailing_dot_from_url_if_necessary$)(::GURL const &) = ::content::rust::child_process_security_policy::RemoveTrailingDotFromUrlIfNecessary;
  return remove_trailing_dot_from_url_if_necessary$(site_url).release();
}

__attribute__((visibility("default"))) ::url::Origin *content$rust$child_process_security_policy$cxxbridge1$202$create_origin_with_default_port_if_necessary(::url::Origin const &origin) noexcept {
  ::std::unique_ptr<::url::Origin> (*create_origin_with_default_port_if_necessary$)(::url::Origin const &) = ::content::rust::child_process_security_policy::CreateOriginWithDefaultPortIfNecessary;
  return create_origin_with_default_port_if_necessary$(origin).release();
}

void content$rust$child_process_security_policy$cxxbridge1$202$register_web_safe_scheme(::rust::Str scheme) noexcept;

void content$rust$child_process_security_policy$cxxbridge1$202$register_web_safe_request_only_scheme(::rust::Str scheme) noexcept;

void content$rust$child_process_security_policy$cxxbridge1$202$register_pseudo_scheme(::rust::Str scheme) noexcept;

bool content$rust$child_process_security_policy$cxxbridge1$202$is_web_safe_scheme(::rust::Str scheme) noexcept;

bool content$rust$child_process_security_policy$cxxbridge1$202$can_commit_scheme_in_any_process(::rust::Str scheme) noexcept;

bool content$rust$child_process_security_policy$cxxbridge1$202$is_pseudo_scheme(::rust::Str scheme) noexcept;

void content$rust$child_process_security_policy$cxxbridge1$202$clear_registered_scheme_for_testing(::rust::Str scheme) noexcept;

void content$rust$child_process_security_policy$cxxbridge1$202$clear_all_registered_schemes_for_testing() noexcept;

void content$rust$child_process_security_policy$cxxbridge1$202$add_v8_optimization_disabled_state_for_origin_if_not_cached(::content::BrowsingInstanceId *browsing_instance_id, ::url::Origin *process_lock_origin, bool are_v8_optimizations_disabled) noexcept;

bool content$rust$child_process_security_policy$cxxbridge1$202$lookup_are_v8_optimizations_disabled(::content::BrowsingInstanceId *browsing_instance_id, ::url::Origin *process_lock_origin, bool &result) noexcept;

void content$rust$child_process_security_policy$cxxbridge1$202$remove_v8_optimization_state(::content::BrowsingInstanceId *browsing_instance_id) noexcept;

void content$rust$child_process_security_policy$cxxbridge1$202$register_file_system_permission_policy(::storage::FileSystemType *file_system_type, ::std::int32_t policy) noexcept;

bool content$rust$child_process_security_policy$cxxbridge1$202$find_permissions_for_file_system_type(::storage::FileSystemType *file_system_type, ::std::int32_t &policy) noexcept;

bool content$rust$child_process_security_policy$cxxbridge1$202$record_origin_agent_cluster_request_if_new(::base::UnguessableToken *browser_context_token, ::url::Origin *origin) noexcept;

bool content$rust$child_process_security_policy$cxxbridge1$202$has_origin_ever_requested_origin_agent_cluster_value(::base::UnguessableToken *browser_context_token, ::url::Origin *origin) noexcept;

void content$rust$child_process_security_policy$cxxbridge1$202$remove_origin_agent_cluster_requests_for_browser_context(::base::UnguessableToken *browser_context_token) noexcept;

bool content$rust$child_process_security_policy$cxxbridge1$202$lookup_origin_agent_cluster_state(::content::BrowsingInstanceId *browsing_instance_id, ::url::Origin *origin, ::content::rust::child_process_security_policy::OriginAgentClusterIsolationState &result) noexcept;

void content$rust$child_process_security_policy$cxxbridge1$202$add_origin_agent_cluster_state_for_browsing_instance(::content::BrowsingInstanceId *browsing_instance_id, ::url::Origin *origin, ::content::rust::child_process_security_policy::OriginAgentClusterIsolationState oac_state, ::content::rust::child_process_security_policy::OriginAgentClusterIsolationState default_oac_state) noexcept;

void content$rust$child_process_security_policy$cxxbridge1$202$record_default_origin_agent_cluster_origin_if_new(::content::BrowsingInstanceId *browsing_instance_id, ::base::UnguessableToken *browser_context_token, ::url::Origin *origin, ::content::rust::child_process_security_policy::OriginAgentClusterIsolationState oac_state, bool is_global_walk_or_frame_removal) noexcept;

void content$rust$child_process_security_policy$cxxbridge1$202$remove_origin_agent_cluster_state(::content::BrowsingInstanceId *browsing_instance_id) noexcept;

void content$rust$child_process_security_policy$cxxbridge1$202$grant_file_for_browser_upload(::base::UnguessableToken *owner_token, ::base::FilePath const &file) noexcept;

void content$rust$child_process_security_policy$cxxbridge1$202$revoke_file_for_browser_upload(::base::UnguessableToken *owner_token) noexcept;

bool content$rust$child_process_security_policy$cxxbridge1$202$can_read_file_for_browser_upload(::base::FilePath const &file) noexcept;

void content$rust$child_process_security_policy$cxxbridge1$202$add_isolated_origin_internal(::base::UnguessableToken *browser_context_id, ::url::Origin *origin_to_add, bool applies_to_future_browsing_instances, ::content::BrowsingInstanceId *browsing_instance_id, bool isolate_all_subdomains, ::content::ChildProcessSecurityPolicy::IsolatedOriginSource *source) noexcept;

void content$rust$child_process_security_policy$cxxbridge1$202$get_isolated_origins(bool has_source, ::content::ChildProcessSecurityPolicy::IsolatedOriginSource *source, ::base::UnguessableToken *browser_context_id, ::std::vector<::url::Origin> &origins) noexcept;

::url::Origin *content$rust$child_process_security_policy$cxxbridge1$202$get_matching_process_isolated_origin_from_legacy_origin_list(::base::UnguessableToken *browser_context_id, ::content::BrowsingInstanceId *browsing_instance_id, ::url::Origin *origin, ::GURL *site_url) noexcept;

bool content$rust$child_process_security_policy$cxxbridge1$202$is_isolated_site_from_source(::url::Origin *origin, ::content::ChildProcessSecurityPolicy::IsolatedOriginSource *source) noexcept;

::std::int32_t content$rust$child_process_security_policy$cxxbridge1$202$get_isolated_origin_entry_count_for_testing(::url::Origin *origin) noexcept;

void content$rust$child_process_security_policy$cxxbridge1$202$remove_isolated_origins_for_browser_context(::base::UnguessableToken *browser_context_id) noexcept;

void content$rust$child_process_security_policy$cxxbridge1$202$remove_isolated_origins_for_browsing_instance(::content::BrowsingInstanceId *browsing_instance_id) noexcept;

void content$rust$child_process_security_policy$cxxbridge1$202$remove_isolated_origin_for_testing(::url::Origin *origin) noexcept;

void content$rust$child_process_security_policy$cxxbridge1$202$clear_isolated_origins_for_testing() noexcept;
} // extern "C"

__attribute__((visibility("default"))) void register_web_safe_scheme(::rust::Str scheme) noexcept {
  content$rust$child_process_security_policy$cxxbridge1$202$register_web_safe_scheme(scheme);
}

__attribute__((visibility("default"))) void register_web_safe_request_only_scheme(::rust::Str scheme) noexcept {
  content$rust$child_process_security_policy$cxxbridge1$202$register_web_safe_request_only_scheme(scheme);
}

__attribute__((visibility("default"))) void register_pseudo_scheme(::rust::Str scheme) noexcept {
  content$rust$child_process_security_policy$cxxbridge1$202$register_pseudo_scheme(scheme);
}

__attribute__((visibility("default"))) bool is_web_safe_scheme(::rust::Str scheme) noexcept {
  return content$rust$child_process_security_policy$cxxbridge1$202$is_web_safe_scheme(scheme);
}

__attribute__((visibility("default"))) bool can_commit_scheme_in_any_process(::rust::Str scheme) noexcept {
  return content$rust$child_process_security_policy$cxxbridge1$202$can_commit_scheme_in_any_process(scheme);
}

__attribute__((visibility("default"))) bool is_pseudo_scheme(::rust::Str scheme) noexcept {
  return content$rust$child_process_security_policy$cxxbridge1$202$is_pseudo_scheme(scheme);
}

__attribute__((visibility("default"))) void clear_registered_scheme_for_testing(::rust::Str scheme) noexcept {
  content$rust$child_process_security_policy$cxxbridge1$202$clear_registered_scheme_for_testing(scheme);
}

__attribute__((visibility("default"))) void clear_all_registered_schemes_for_testing() noexcept {
  content$rust$child_process_security_policy$cxxbridge1$202$clear_all_registered_schemes_for_testing();
}

__attribute__((visibility("default"))) void add_v8_optimization_disabled_state_for_origin_if_not_cached(::content::BrowsingInstanceId browsing_instance_id, ::std::unique_ptr<::url::Origin> process_lock_origin, bool are_v8_optimizations_disabled) noexcept {
  ::rust::ManuallyDrop<::content::BrowsingInstanceId> browsing_instance_id$(::std::move(browsing_instance_id));
  content$rust$child_process_security_policy$cxxbridge1$202$add_v8_optimization_disabled_state_for_origin_if_not_cached(&browsing_instance_id$.value, process_lock_origin.release(), are_v8_optimizations_disabled);
}

__attribute__((visibility("default"))) bool lookup_are_v8_optimizations_disabled(::content::BrowsingInstanceId browsing_instance_id, ::std::unique_ptr<::url::Origin> process_lock_origin, bool &result) noexcept {
  ::rust::ManuallyDrop<::content::BrowsingInstanceId> browsing_instance_id$(::std::move(browsing_instance_id));
  return content$rust$child_process_security_policy$cxxbridge1$202$lookup_are_v8_optimizations_disabled(&browsing_instance_id$.value, process_lock_origin.release(), result);
}

__attribute__((visibility("default"))) void remove_v8_optimization_state(::content::BrowsingInstanceId browsing_instance_id) noexcept {
  ::rust::ManuallyDrop<::content::BrowsingInstanceId> browsing_instance_id$(::std::move(browsing_instance_id));
  content$rust$child_process_security_policy$cxxbridge1$202$remove_v8_optimization_state(&browsing_instance_id$.value);
}

__attribute__((visibility("default"))) void register_file_system_permission_policy(::storage::FileSystemType file_system_type, ::std::int32_t policy) noexcept {
  ::rust::ManuallyDrop<::storage::FileSystemType> file_system_type$(::std::move(file_system_type));
  content$rust$child_process_security_policy$cxxbridge1$202$register_file_system_permission_policy(&file_system_type$.value, policy);
}

__attribute__((visibility("default"))) bool find_permissions_for_file_system_type(::storage::FileSystemType file_system_type, ::std::int32_t &policy) noexcept {
  ::rust::ManuallyDrop<::storage::FileSystemType> file_system_type$(::std::move(file_system_type));
  return content$rust$child_process_security_policy$cxxbridge1$202$find_permissions_for_file_system_type(&file_system_type$.value, policy);
}

__attribute__((visibility("default"))) bool record_origin_agent_cluster_request_if_new(::base::UnguessableToken browser_context_token, ::std::unique_ptr<::url::Origin> origin) noexcept {
  ::rust::ManuallyDrop<::base::UnguessableToken> browser_context_token$(::std::move(browser_context_token));
  return content$rust$child_process_security_policy$cxxbridge1$202$record_origin_agent_cluster_request_if_new(&browser_context_token$.value, origin.release());
}

__attribute__((visibility("default"))) bool has_origin_ever_requested_origin_agent_cluster_value(::base::UnguessableToken browser_context_token, ::std::unique_ptr<::url::Origin> origin) noexcept {
  ::rust::ManuallyDrop<::base::UnguessableToken> browser_context_token$(::std::move(browser_context_token));
  return content$rust$child_process_security_policy$cxxbridge1$202$has_origin_ever_requested_origin_agent_cluster_value(&browser_context_token$.value, origin.release());
}

__attribute__((visibility("default"))) void remove_origin_agent_cluster_requests_for_browser_context(::base::UnguessableToken browser_context_token) noexcept {
  ::rust::ManuallyDrop<::base::UnguessableToken> browser_context_token$(::std::move(browser_context_token));
  content$rust$child_process_security_policy$cxxbridge1$202$remove_origin_agent_cluster_requests_for_browser_context(&browser_context_token$.value);
}

__attribute__((visibility("default"))) bool lookup_origin_agent_cluster_state(::content::BrowsingInstanceId browsing_instance_id, ::std::unique_ptr<::url::Origin> origin, ::content::rust::child_process_security_policy::OriginAgentClusterIsolationState &result) noexcept {
  ::rust::ManuallyDrop<::content::BrowsingInstanceId> browsing_instance_id$(::std::move(browsing_instance_id));
  return content$rust$child_process_security_policy$cxxbridge1$202$lookup_origin_agent_cluster_state(&browsing_instance_id$.value, origin.release(), result);
}

__attribute__((visibility("default"))) void add_origin_agent_cluster_state_for_browsing_instance(::content::BrowsingInstanceId browsing_instance_id, ::std::unique_ptr<::url::Origin> origin, ::content::rust::child_process_security_policy::OriginAgentClusterIsolationState oac_state, ::content::rust::child_process_security_policy::OriginAgentClusterIsolationState default_oac_state) noexcept {
  ::rust::ManuallyDrop<::content::BrowsingInstanceId> browsing_instance_id$(::std::move(browsing_instance_id));
  content$rust$child_process_security_policy$cxxbridge1$202$add_origin_agent_cluster_state_for_browsing_instance(&browsing_instance_id$.value, origin.release(), oac_state, default_oac_state);
}

__attribute__((visibility("default"))) void record_default_origin_agent_cluster_origin_if_new(::content::BrowsingInstanceId browsing_instance_id, ::base::UnguessableToken browser_context_token, ::std::unique_ptr<::url::Origin> origin, ::content::rust::child_process_security_policy::OriginAgentClusterIsolationState oac_state, bool is_global_walk_or_frame_removal) noexcept {
  ::rust::ManuallyDrop<::content::BrowsingInstanceId> browsing_instance_id$(::std::move(browsing_instance_id));
  ::rust::ManuallyDrop<::base::UnguessableToken> browser_context_token$(::std::move(browser_context_token));
  content$rust$child_process_security_policy$cxxbridge1$202$record_default_origin_agent_cluster_origin_if_new(&browsing_instance_id$.value, &browser_context_token$.value, origin.release(), oac_state, is_global_walk_or_frame_removal);
}

__attribute__((visibility("default"))) void remove_origin_agent_cluster_state(::content::BrowsingInstanceId browsing_instance_id) noexcept {
  ::rust::ManuallyDrop<::content::BrowsingInstanceId> browsing_instance_id$(::std::move(browsing_instance_id));
  content$rust$child_process_security_policy$cxxbridge1$202$remove_origin_agent_cluster_state(&browsing_instance_id$.value);
}

__attribute__((visibility("default"))) void grant_file_for_browser_upload(::base::UnguessableToken owner_token, ::base::FilePath const &file) noexcept {
  ::rust::ManuallyDrop<::base::UnguessableToken> owner_token$(::std::move(owner_token));
  content$rust$child_process_security_policy$cxxbridge1$202$grant_file_for_browser_upload(&owner_token$.value, file);
}

__attribute__((visibility("default"))) void revoke_file_for_browser_upload(::base::UnguessableToken owner_token) noexcept {
  ::rust::ManuallyDrop<::base::UnguessableToken> owner_token$(::std::move(owner_token));
  content$rust$child_process_security_policy$cxxbridge1$202$revoke_file_for_browser_upload(&owner_token$.value);
}

__attribute__((visibility("default"))) bool can_read_file_for_browser_upload(::base::FilePath const &file) noexcept {
  return content$rust$child_process_security_policy$cxxbridge1$202$can_read_file_for_browser_upload(file);
}

__attribute__((visibility("default"))) void add_isolated_origin_internal(::base::UnguessableToken browser_context_id, ::std::unique_ptr<::url::Origin> origin_to_add, bool applies_to_future_browsing_instances, ::content::BrowsingInstanceId browsing_instance_id, bool isolate_all_subdomains, ::content::ChildProcessSecurityPolicy::IsolatedOriginSource source) noexcept {
  ::rust::ManuallyDrop<::base::UnguessableToken> browser_context_id$(::std::move(browser_context_id));
  ::rust::ManuallyDrop<::content::BrowsingInstanceId> browsing_instance_id$(::std::move(browsing_instance_id));
  ::rust::ManuallyDrop<::content::ChildProcessSecurityPolicy::IsolatedOriginSource> source$(::std::move(source));
  content$rust$child_process_security_policy$cxxbridge1$202$add_isolated_origin_internal(&browser_context_id$.value, origin_to_add.release(), applies_to_future_browsing_instances, &browsing_instance_id$.value, isolate_all_subdomains, &source$.value);
}

__attribute__((visibility("default"))) void get_isolated_origins(bool has_source, ::content::ChildProcessSecurityPolicy::IsolatedOriginSource source, ::base::UnguessableToken browser_context_id, ::std::vector<::url::Origin> &origins) noexcept {
  ::rust::ManuallyDrop<::content::ChildProcessSecurityPolicy::IsolatedOriginSource> source$(::std::move(source));
  ::rust::ManuallyDrop<::base::UnguessableToken> browser_context_id$(::std::move(browser_context_id));
  content$rust$child_process_security_policy$cxxbridge1$202$get_isolated_origins(has_source, &source$.value, &browser_context_id$.value, origins);
}

__attribute__((visibility("default"))) ::std::unique_ptr<::url::Origin> get_matching_process_isolated_origin_from_legacy_origin_list(::base::UnguessableToken browser_context_id, ::content::BrowsingInstanceId browsing_instance_id, ::std::unique_ptr<::url::Origin> origin, ::std::unique_ptr<::GURL> site_url) noexcept {
  ::rust::ManuallyDrop<::base::UnguessableToken> browser_context_id$(::std::move(browser_context_id));
  ::rust::ManuallyDrop<::content::BrowsingInstanceId> browsing_instance_id$(::std::move(browsing_instance_id));
  return ::std::unique_ptr<::url::Origin>(content$rust$child_process_security_policy$cxxbridge1$202$get_matching_process_isolated_origin_from_legacy_origin_list(&browser_context_id$.value, &browsing_instance_id$.value, origin.release(), site_url.release()));
}

__attribute__((visibility("default"))) bool is_isolated_site_from_source(::std::unique_ptr<::url::Origin> origin, ::content::ChildProcessSecurityPolicy::IsolatedOriginSource source) noexcept {
  ::rust::ManuallyDrop<::content::ChildProcessSecurityPolicy::IsolatedOriginSource> source$(::std::move(source));
  return content$rust$child_process_security_policy$cxxbridge1$202$is_isolated_site_from_source(origin.release(), &source$.value);
}

__attribute__((visibility("default"))) ::std::int32_t get_isolated_origin_entry_count_for_testing(::std::unique_ptr<::url::Origin> origin) noexcept {
  return content$rust$child_process_security_policy$cxxbridge1$202$get_isolated_origin_entry_count_for_testing(origin.release());
}

__attribute__((visibility("default"))) void remove_isolated_origins_for_browser_context(::base::UnguessableToken browser_context_id) noexcept {
  ::rust::ManuallyDrop<::base::UnguessableToken> browser_context_id$(::std::move(browser_context_id));
  content$rust$child_process_security_policy$cxxbridge1$202$remove_isolated_origins_for_browser_context(&browser_context_id$.value);
}

__attribute__((visibility("default"))) void remove_isolated_origins_for_browsing_instance(::content::BrowsingInstanceId browsing_instance_id) noexcept {
  ::rust::ManuallyDrop<::content::BrowsingInstanceId> browsing_instance_id$(::std::move(browsing_instance_id));
  content$rust$child_process_security_policy$cxxbridge1$202$remove_isolated_origins_for_browsing_instance(&browsing_instance_id$.value);
}

__attribute__((visibility("default"))) void remove_isolated_origin_for_testing(::std::unique_ptr<::url::Origin> origin) noexcept {
  content$rust$child_process_security_policy$cxxbridge1$202$remove_isolated_origin_for_testing(origin.release());
}

__attribute__((visibility("default"))) void clear_isolated_origins_for_testing() noexcept {
  content$rust$child_process_security_policy$cxxbridge1$202$clear_isolated_origins_for_testing();
}
} // namespace child_process_security_policy
} // namespace rust
} // namespace content
