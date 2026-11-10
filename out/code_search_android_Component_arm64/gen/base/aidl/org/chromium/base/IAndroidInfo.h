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
class IAndroidInfo {
public:
  typedef std::false_type fixed_size;
  static const char* descriptor;

  std::string abiName;
  std::string androidBuildFp;
  std::string androidBuildId;
  std::string board;
  std::string brand;
  std::string buildType;
  std::string codename;
  std::string device;
  std::string hardware;
  bool isDebugAndroid = false;
  std::string manufacturer;
  std::string model;
  int32_t sdkInt = 0;
  int32_t sdkIntFull = 0;
  std::string securityPatch;
  std::string socManufacturer;
  std::string versionIncremental;

  binder_status_t readFromParcel(const AParcel* parcel);
  binder_status_t writeToParcel(AParcel* parcel) const;

  inline bool operator==(const IAndroidInfo& _rhs) const {
    return std::tie(abiName, androidBuildFp, androidBuildId, board, brand, buildType, codename, device, hardware, isDebugAndroid, manufacturer, model, sdkInt, sdkIntFull, securityPatch, socManufacturer, versionIncremental) == std::tie(_rhs.abiName, _rhs.androidBuildFp, _rhs.androidBuildId, _rhs.board, _rhs.brand, _rhs.buildType, _rhs.codename, _rhs.device, _rhs.hardware, _rhs.isDebugAndroid, _rhs.manufacturer, _rhs.model, _rhs.sdkInt, _rhs.sdkIntFull, _rhs.securityPatch, _rhs.socManufacturer, _rhs.versionIncremental);
  }
  inline bool operator<(const IAndroidInfo& _rhs) const {
    return std::tie(abiName, androidBuildFp, androidBuildId, board, brand, buildType, codename, device, hardware, isDebugAndroid, manufacturer, model, sdkInt, sdkIntFull, securityPatch, socManufacturer, versionIncremental) < std::tie(_rhs.abiName, _rhs.androidBuildFp, _rhs.androidBuildId, _rhs.board, _rhs.brand, _rhs.buildType, _rhs.codename, _rhs.device, _rhs.hardware, _rhs.isDebugAndroid, _rhs.manufacturer, _rhs.model, _rhs.sdkInt, _rhs.sdkIntFull, _rhs.securityPatch, _rhs.socManufacturer, _rhs.versionIncremental);
  }
  inline bool operator!=(const IAndroidInfo& _rhs) const {
    return !(*this == _rhs);
  }
  inline bool operator>(const IAndroidInfo& _rhs) const {
    return _rhs < *this;
  }
  inline bool operator>=(const IAndroidInfo& _rhs) const {
    return !(*this < _rhs);
  }
  inline bool operator<=(const IAndroidInfo& _rhs) const {
    return !(_rhs < *this);
  }

  static const ::ndk::parcelable_stability_t _aidl_stability = ::ndk::STABILITY_LOCAL;
  inline std::string toString() const {
    std::ostringstream _aidl_os;
    _aidl_os << "IAndroidInfo{";
    _aidl_os << "abiName: " << ::android::internal::ToString(abiName);
    _aidl_os << ", androidBuildFp: " << ::android::internal::ToString(androidBuildFp);
    _aidl_os << ", androidBuildId: " << ::android::internal::ToString(androidBuildId);
    _aidl_os << ", board: " << ::android::internal::ToString(board);
    _aidl_os << ", brand: " << ::android::internal::ToString(brand);
    _aidl_os << ", buildType: " << ::android::internal::ToString(buildType);
    _aidl_os << ", codename: " << ::android::internal::ToString(codename);
    _aidl_os << ", device: " << ::android::internal::ToString(device);
    _aidl_os << ", hardware: " << ::android::internal::ToString(hardware);
    _aidl_os << ", isDebugAndroid: " << ::android::internal::ToString(isDebugAndroid);
    _aidl_os << ", manufacturer: " << ::android::internal::ToString(manufacturer);
    _aidl_os << ", model: " << ::android::internal::ToString(model);
    _aidl_os << ", sdkInt: " << ::android::internal::ToString(sdkInt);
    _aidl_os << ", sdkIntFull: " << ::android::internal::ToString(sdkIntFull);
    _aidl_os << ", securityPatch: " << ::android::internal::ToString(securityPatch);
    _aidl_os << ", socManufacturer: " << ::android::internal::ToString(socManufacturer);
    _aidl_os << ", versionIncremental: " << ::android::internal::ToString(versionIncremental);
    _aidl_os << "}";
    return _aidl_os.str();
  }
};
}  // namespace base
}  // namespace chromium
}  // namespace org
}  // namespace aidl
