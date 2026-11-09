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
namespace library_loader {
class IRelroLibInfo {
public:
  typedef std::false_type fixed_size;
  static const char* descriptor;

  std::string libFilePath;
  int64_t loadAddress = 0L;
  int64_t loadSize = 0L;
  int64_t relroStart = 0L;
  int64_t relroSize = 0L;
  ::ndk::ScopedFileDescriptor fd;

  binder_status_t readFromParcel(const AParcel* parcel);
  binder_status_t writeToParcel(AParcel* parcel) const;

  inline bool operator==(const IRelroLibInfo& _rhs) const {
    return std::tie(libFilePath, loadAddress, loadSize, relroStart, relroSize, fd) == std::tie(_rhs.libFilePath, _rhs.loadAddress, _rhs.loadSize, _rhs.relroStart, _rhs.relroSize, _rhs.fd);
  }
  inline bool operator<(const IRelroLibInfo& _rhs) const {
    return std::tie(libFilePath, loadAddress, loadSize, relroStart, relroSize, fd) < std::tie(_rhs.libFilePath, _rhs.loadAddress, _rhs.loadSize, _rhs.relroStart, _rhs.relroSize, _rhs.fd);
  }
  inline bool operator!=(const IRelroLibInfo& _rhs) const {
    return !(*this == _rhs);
  }
  inline bool operator>(const IRelroLibInfo& _rhs) const {
    return _rhs < *this;
  }
  inline bool operator>=(const IRelroLibInfo& _rhs) const {
    return !(*this < _rhs);
  }
  inline bool operator<=(const IRelroLibInfo& _rhs) const {
    return !(_rhs < *this);
  }

  static const ::ndk::parcelable_stability_t _aidl_stability = ::ndk::STABILITY_LOCAL;
  inline std::string toString() const {
    std::ostringstream _aidl_os;
    _aidl_os << "IRelroLibInfo{";
    _aidl_os << "libFilePath: " << ::android::internal::ToString(libFilePath);
    _aidl_os << ", loadAddress: " << ::android::internal::ToString(loadAddress);
    _aidl_os << ", loadSize: " << ::android::internal::ToString(loadSize);
    _aidl_os << ", relroStart: " << ::android::internal::ToString(relroStart);
    _aidl_os << ", relroSize: " << ::android::internal::ToString(relroSize);
    _aidl_os << ", fd: " << ::android::internal::ToString(fd);
    _aidl_os << "}";
    return _aidl_os.str();
  }
};
}  // namespace library_loader
}  // namespace base
}  // namespace chromium
}  // namespace org
}  // namespace aidl
