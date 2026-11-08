/*
 * This file is auto-generated.  DO NOT MODIFY.
 * Using: cmd not shown due to `--omit_invocation`
 *
 * DO NOT CHECK THIS FILE INTO A CODE TREE (e.g. git, etc..).
 * ALWAYS GENERATE THIS FILE FROM UPDATED AIDL COMPILER
 * AS A BUILD INTERMEDIATE ONLY. THIS IS NOT SOURCE CODE.
 */
#pragma once

#include <cstdint>
#include <memory>
#include <optional>
#include <string>
#include <vector>
#include <android/binder_interface_utils.h>
#include <android/binder_parcelable_utils.h>
#include <android/binder_to_string.h>
#ifdef BINDER_STABILITY_SUPPORT
#include <android/binder_stability.h>
#endif  // BINDER_STABILITY_SUPPORT

namespace aidl {
namespace org {
namespace chromium {
namespace base {
class IDeviceInfo {
public:
  typedef std::false_type fixed_size;
  static const char* descriptor;

  std::string gmsVersionCode;
  bool isAutomotive = false;
  bool isDesktop = false;
  bool isFoldable = false;
  bool isTv = false;
  int32_t vulkanDeqpLevel = 0;
  bool isXr = false;
  bool wasLaunchedOnLargeDisplay = false;

  binder_status_t readFromParcel(const AParcel* parcel);
  binder_status_t writeToParcel(AParcel* parcel) const;

  inline bool operator==(const IDeviceInfo& _rhs) const {
    return std::tie(gmsVersionCode, isAutomotive, isDesktop, isFoldable, isTv, vulkanDeqpLevel, isXr, wasLaunchedOnLargeDisplay) == std::tie(_rhs.gmsVersionCode, _rhs.isAutomotive, _rhs.isDesktop, _rhs.isFoldable, _rhs.isTv, _rhs.vulkanDeqpLevel, _rhs.isXr, _rhs.wasLaunchedOnLargeDisplay);
  }
  inline bool operator<(const IDeviceInfo& _rhs) const {
    return std::tie(gmsVersionCode, isAutomotive, isDesktop, isFoldable, isTv, vulkanDeqpLevel, isXr, wasLaunchedOnLargeDisplay) < std::tie(_rhs.gmsVersionCode, _rhs.isAutomotive, _rhs.isDesktop, _rhs.isFoldable, _rhs.isTv, _rhs.vulkanDeqpLevel, _rhs.isXr, _rhs.wasLaunchedOnLargeDisplay);
  }
  inline bool operator!=(const IDeviceInfo& _rhs) const {
    return !(*this == _rhs);
  }
  inline bool operator>(const IDeviceInfo& _rhs) const {
    return _rhs < *this;
  }
  inline bool operator>=(const IDeviceInfo& _rhs) const {
    return !(*this < _rhs);
  }
  inline bool operator<=(const IDeviceInfo& _rhs) const {
    return !(_rhs < *this);
  }

  static const ::ndk::parcelable_stability_t _aidl_stability = ::ndk::STABILITY_LOCAL;
  inline std::string toString() const {
    std::ostringstream _aidl_os;
    _aidl_os << "IDeviceInfo{";
    _aidl_os << "gmsVersionCode: " << ::android::internal::ToString(gmsVersionCode);
    _aidl_os << ", isAutomotive: " << ::android::internal::ToString(isAutomotive);
    _aidl_os << ", isDesktop: " << ::android::internal::ToString(isDesktop);
    _aidl_os << ", isFoldable: " << ::android::internal::ToString(isFoldable);
    _aidl_os << ", isTv: " << ::android::internal::ToString(isTv);
    _aidl_os << ", vulkanDeqpLevel: " << ::android::internal::ToString(vulkanDeqpLevel);
    _aidl_os << ", isXr: " << ::android::internal::ToString(isXr);
    _aidl_os << ", wasLaunchedOnLargeDisplay: " << ::android::internal::ToString(wasLaunchedOnLargeDisplay);
    _aidl_os << "}";
    return _aidl_os.str();
  }
};
}  // namespace base
}  // namespace chromium
}  // namespace org
}  // namespace aidl
