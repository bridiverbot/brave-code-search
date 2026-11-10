#pragma once
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
#include <vector>
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

__declspec(dllexport) void register_web_safe_scheme(::rust::Str scheme) noexcept;

__declspec(dllexport) void register_web_safe_request_only_scheme(::rust::Str scheme) noexcept;

__declspec(dllexport) void register_pseudo_scheme(::rust::Str scheme) noexcept;

__declspec(dllexport) bool is_web_safe_scheme(::rust::Str scheme) noexcept;

__declspec(dllexport) bool can_commit_scheme_in_any_process(::rust::Str scheme) noexcept;

__declspec(dllexport) bool is_pseudo_scheme(::rust::Str scheme) noexcept;

__declspec(dllexport) void clear_registered_scheme_for_testing(::rust::Str scheme) noexcept;

__declspec(dllexport) void clear_all_registered_schemes_for_testing() noexcept;

__declspec(dllexport) void add_v8_optimization_disabled_state_for_origin_if_not_cached(::content::BrowsingInstanceId browsing_instance_id, ::std::unique_ptr<::url::Origin> process_lock_origin, bool are_v8_optimizations_disabled) noexcept;

__declspec(dllexport) bool lookup_are_v8_optimizations_disabled(::content::BrowsingInstanceId browsing_instance_id, ::std::unique_ptr<::url::Origin> process_lock_origin, bool &result) noexcept;

__declspec(dllexport) void remove_v8_optimization_state(::content::BrowsingInstanceId browsing_instance_id) noexcept;

__declspec(dllexport) void register_file_system_permission_policy(::storage::FileSystemType file_system_type, ::std::int32_t policy) noexcept;

__declspec(dllexport) bool find_permissions_for_file_system_type(::storage::FileSystemType file_system_type, ::std::int32_t &policy) noexcept;

__declspec(dllexport) bool record_origin_agent_cluster_request_if_new(::base::UnguessableToken browser_context_token, ::std::unique_ptr<::url::Origin> origin) noexcept;

__declspec(dllexport) bool has_origin_ever_requested_origin_agent_cluster_value(::base::UnguessableToken browser_context_token, ::std::unique_ptr<::url::Origin> origin) noexcept;

__declspec(dllexport) void remove_origin_agent_cluster_requests_for_browser_context(::base::UnguessableToken browser_context_token) noexcept;

__declspec(dllexport) bool lookup_origin_agent_cluster_state(::content::BrowsingInstanceId browsing_instance_id, ::std::unique_ptr<::url::Origin> origin, ::content::rust::child_process_security_policy::OriginAgentClusterIsolationState &result) noexcept;

__declspec(dllexport) void add_origin_agent_cluster_state_for_browsing_instance(::content::BrowsingInstanceId browsing_instance_id, ::std::unique_ptr<::url::Origin> origin, ::content::rust::child_process_security_policy::OriginAgentClusterIsolationState oac_state, ::content::rust::child_process_security_policy::OriginAgentClusterIsolationState default_oac_state) noexcept;

__declspec(dllexport) void record_default_origin_agent_cluster_origin_if_new(::content::BrowsingInstanceId browsing_instance_id, ::base::UnguessableToken browser_context_token, ::std::unique_ptr<::url::Origin> origin, ::content::rust::child_process_security_policy::OriginAgentClusterIsolationState oac_state, bool is_global_walk_or_frame_removal) noexcept;

__declspec(dllexport) void remove_origin_agent_cluster_state(::content::BrowsingInstanceId browsing_instance_id) noexcept;

__declspec(dllexport) void grant_file_for_browser_upload(::base::UnguessableToken owner_token, ::base::FilePath const &file) noexcept;

__declspec(dllexport) void revoke_file_for_browser_upload(::base::UnguessableToken owner_token) noexcept;

__declspec(dllexport) bool can_read_file_for_browser_upload(::base::FilePath const &file) noexcept;

__declspec(dllexport) void add_isolated_origin_internal(::base::UnguessableToken browser_context_id, ::std::unique_ptr<::url::Origin> origin_to_add, bool applies_to_future_browsing_instances, ::content::BrowsingInstanceId browsing_instance_id, bool isolate_all_subdomains, ::content::ChildProcessSecurityPolicy::IsolatedOriginSource source) noexcept;

__declspec(dllexport) void get_isolated_origins(bool has_source, ::content::ChildProcessSecurityPolicy::IsolatedOriginSource source, ::base::UnguessableToken browser_context_id, ::std::vector<::url::Origin> &origins) noexcept;

__declspec(dllexport) ::std::unique_ptr<::url::Origin> get_matching_process_isolated_origin_from_legacy_origin_list(::base::UnguessableToken browser_context_id, ::content::BrowsingInstanceId browsing_instance_id, ::std::unique_ptr<::url::Origin> origin, ::std::unique_ptr<::GURL> site_url) noexcept;

__declspec(dllexport) bool is_isolated_site_from_source(::std::unique_ptr<::url::Origin> origin, ::content::ChildProcessSecurityPolicy::IsolatedOriginSource source) noexcept;

__declspec(dllexport) ::std::int32_t get_isolated_origin_entry_count_for_testing(::std::unique_ptr<::url::Origin> origin) noexcept;

__declspec(dllexport) void remove_isolated_origins_for_browser_context(::base::UnguessableToken browser_context_id) noexcept;

__declspec(dllexport) void remove_isolated_origins_for_browsing_instance(::content::BrowsingInstanceId browsing_instance_id) noexcept;

__declspec(dllexport) void remove_isolated_origin_for_testing(::std::unique_ptr<::url::Origin> origin) noexcept;

__declspec(dllexport) void clear_isolated_origins_for_testing() noexcept;
} // namespace child_process_security_policy
} // namespace rust
} // namespace content

#ifdef __clang__
#pragma clang diagnostic pop
#endif // __clang__
