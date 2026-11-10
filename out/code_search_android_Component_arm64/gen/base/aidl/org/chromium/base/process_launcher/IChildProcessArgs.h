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
#include <aidl/org/chromium/base/IAndroidInfo.h>
#include <aidl/org/chromium/base/IApkInfo.h>
#include <aidl/org/chromium/base/IDeviceInfo.h>
#include <aidl/org/chromium/base/library_loader/IRelroLibInfo.h>
#include <aidl/org/chromium/base/process_launcher/IFileDescriptorInfo.h>
#ifdef BINDER_STABILITY_SUPPORT
#include <android/binder_stability.h>
#endif  // BINDER_STABILITY_SUPPORT

namespace aidl::org::chromium::base {
class IAndroidInfo;
class IApkInfo;
class IDeviceInfo;
}  // namespace aidl::org::chromium::base
namespace aidl::org::chromium::base::library_loader {
class IRelroLibInfo;
}  // namespace aidl::org::chromium::base::library_loader
namespace aidl::org::chromium::base::process_launcher {
class IFileDescriptorInfo;
}  // namespace aidl::org::chromium::base::process_launcher
namespace aidl {
namespace org {
namespace chromium {
namespace base {
namespace process_launcher {
class IChildProcessArgs {
public:
  typedef std::false_type fixed_size;
  static const char* descriptor;

  ::aidl::org::chromium::base::IApkInfo apkInfo;
  ::aidl::org::chromium::base::IAndroidInfo androidInfo;
  bool bindToCaller = false;
  int32_t channel = 0;
  std::vector<std::string> commandLine;
  int32_t cpuCount = 0;
  int64_t cpuFeatures = 0L;
  ::aidl::org::chromium::base::IDeviceInfo deviceInfo;
  std::vector<::aidl::org::chromium::base::process_launcher::IFileDescriptorInfo> fileDescriptorInfos;
  std::optional<::aidl::org::chromium::base::library_loader::IRelroLibInfo> relroInfo;
  int32_t libraryProcessType = 0;

  binder_status_t readFromParcel(const AParcel* parcel);
  binder_status_t writeToParcel(AParcel* parcel) const;

  inline bool operator==(const IChildProcessArgs& _rhs) const {
    return std::tie(apkInfo, androidInfo, bindToCaller, channel, commandLine, cpuCount, cpuFeatures, deviceInfo, fileDescriptorInfos, relroInfo, libraryProcessType) == std::tie(_rhs.apkInfo, _rhs.androidInfo, _rhs.bindToCaller, _rhs.channel, _rhs.commandLine, _rhs.cpuCount, _rhs.cpuFeatures, _rhs.deviceInfo, _rhs.fileDescriptorInfos, _rhs.relroInfo, _rhs.libraryProcessType);
  }
  inline bool operator<(const IChildProcessArgs& _rhs) const {
    return std::tie(apkInfo, androidInfo, bindToCaller, channel, commandLine, cpuCount, cpuFeatures, deviceInfo, fileDescriptorInfos, relroInfo, libraryProcessType) < std::tie(_rhs.apkInfo, _rhs.androidInfo, _rhs.bindToCaller, _rhs.channel, _rhs.commandLine, _rhs.cpuCount, _rhs.cpuFeatures, _rhs.deviceInfo, _rhs.fileDescriptorInfos, _rhs.relroInfo, _rhs.libraryProcessType);
  }
  inline bool operator!=(const IChildProcessArgs& _rhs) const {
    return !(*this == _rhs);
  }
  inline bool operator>(const IChildProcessArgs& _rhs) const {
    return _rhs < *this;
  }
  inline bool operator>=(const IChildProcessArgs& _rhs) const {
    return !(*this < _rhs);
  }
  inline bool operator<=(const IChildProcessArgs& _rhs) const {
    return !(_rhs < *this);
  }

  static const ::ndk::parcelable_stability_t _aidl_stability = ::ndk::STABILITY_LOCAL;
  inline std::string toString() const {
    std::ostringstream _aidl_os;
    _aidl_os << "IChildProcessArgs{";
    _aidl_os << "apkInfo: " << ::android::internal::ToString(apkInfo);
    _aidl_os << ", androidInfo: " << ::android::internal::ToString(androidInfo);
    _aidl_os << ", bindToCaller: " << ::android::internal::ToString(bindToCaller);
    _aidl_os << ", channel: " << ::android::internal::ToString(channel);
    _aidl_os << ", commandLine: " << ::android::internal::ToString(commandLine);
    _aidl_os << ", cpuCount: " << ::android::internal::ToString(cpuCount);
    _aidl_os << ", cpuFeatures: " << ::android::internal::ToString(cpuFeatures);
    _aidl_os << ", deviceInfo: " << ::android::internal::ToString(deviceInfo);
    _aidl_os << ", fileDescriptorInfos: " << ::android::internal::ToString(fileDescriptorInfos);
    _aidl_os << ", relroInfo: " << ::android::internal::ToString(relroInfo);
    _aidl_os << ", libraryProcessType: " << ::android::internal::ToString(libraryProcessType);
    _aidl_os << "}";
    return _aidl_os.str();
  }
};
}  // namespace process_launcher
}  // namespace base
}  // namespace chromium
}  // namespace org
}  // namespace aidl
