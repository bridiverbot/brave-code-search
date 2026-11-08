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
class IApkInfo {
public:
  typedef std::false_type fixed_size;
  static const char* descriptor;

  std::string hostPackageLabel;
  std::string hostPackageName;
  std::string hostVersionCode;
  std::string installerPackageName;
  bool isDebugApp = false;
  bool isSystemApp = false;
  std::string packageName;
  std::string packageVersionCode;
  std::string packageVersionName;
  int32_t targetSdkVersion = 0;

  binder_status_t readFromParcel(const AParcel* parcel);
  binder_status_t writeToParcel(AParcel* parcel) const;

  inline bool operator==(const IApkInfo& _rhs) const {
    return std::tie(hostPackageLabel, hostPackageName, hostVersionCode, installerPackageName, isDebugApp, isSystemApp, packageName, packageVersionCode, packageVersionName, targetSdkVersion) == std::tie(_rhs.hostPackageLabel, _rhs.hostPackageName, _rhs.hostVersionCode, _rhs.installerPackageName, _rhs.isDebugApp, _rhs.isSystemApp, _rhs.packageName, _rhs.packageVersionCode, _rhs.packageVersionName, _rhs.targetSdkVersion);
  }
  inline bool operator<(const IApkInfo& _rhs) const {
    return std::tie(hostPackageLabel, hostPackageName, hostVersionCode, installerPackageName, isDebugApp, isSystemApp, packageName, packageVersionCode, packageVersionName, targetSdkVersion) < std::tie(_rhs.hostPackageLabel, _rhs.hostPackageName, _rhs.hostVersionCode, _rhs.installerPackageName, _rhs.isDebugApp, _rhs.isSystemApp, _rhs.packageName, _rhs.packageVersionCode, _rhs.packageVersionName, _rhs.targetSdkVersion);
  }
  inline bool operator!=(const IApkInfo& _rhs) const {
    return !(*this == _rhs);
  }
  inline bool operator>(const IApkInfo& _rhs) const {
    return _rhs < *this;
  }
  inline bool operator>=(const IApkInfo& _rhs) const {
    return !(*this < _rhs);
  }
  inline bool operator<=(const IApkInfo& _rhs) const {
    return !(_rhs < *this);
  }

  static const ::ndk::parcelable_stability_t _aidl_stability = ::ndk::STABILITY_LOCAL;
  inline std::string toString() const {
    std::ostringstream _aidl_os;
    _aidl_os << "IApkInfo{";
    _aidl_os << "hostPackageLabel: " << ::android::internal::ToString(hostPackageLabel);
    _aidl_os << ", hostPackageName: " << ::android::internal::ToString(hostPackageName);
    _aidl_os << ", hostVersionCode: " << ::android::internal::ToString(hostVersionCode);
    _aidl_os << ", installerPackageName: " << ::android::internal::ToString(installerPackageName);
    _aidl_os << ", isDebugApp: " << ::android::internal::ToString(isDebugApp);
    _aidl_os << ", isSystemApp: " << ::android::internal::ToString(isSystemApp);
    _aidl_os << ", packageName: " << ::android::internal::ToString(packageName);
    _aidl_os << ", packageVersionCode: " << ::android::internal::ToString(packageVersionCode);
    _aidl_os << ", packageVersionName: " << ::android::internal::ToString(packageVersionName);
    _aidl_os << ", targetSdkVersion: " << ::android::internal::ToString(targetSdkVersion);
    _aidl_os << "}";
    return _aidl_os.str();
  }
};
}  // namespace base
}  // namespace chromium
}  // namespace org
}  // namespace aidl
