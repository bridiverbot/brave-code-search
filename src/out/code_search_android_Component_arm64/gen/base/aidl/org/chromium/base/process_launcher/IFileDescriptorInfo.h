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
namespace process_launcher {
class IFileDescriptorInfo {
public:
  typedef std::false_type fixed_size;
  static const char* descriptor;

  int32_t id = 0;
  ::ndk::ScopedFileDescriptor fd;
  int64_t offset = 0L;
  int64_t size = 0L;

  binder_status_t readFromParcel(const AParcel* parcel);
  binder_status_t writeToParcel(AParcel* parcel) const;

  inline bool operator==(const IFileDescriptorInfo& _rhs) const {
    return std::tie(id, fd, offset, size) == std::tie(_rhs.id, _rhs.fd, _rhs.offset, _rhs.size);
  }
  inline bool operator<(const IFileDescriptorInfo& _rhs) const {
    return std::tie(id, fd, offset, size) < std::tie(_rhs.id, _rhs.fd, _rhs.offset, _rhs.size);
  }
  inline bool operator!=(const IFileDescriptorInfo& _rhs) const {
    return !(*this == _rhs);
  }
  inline bool operator>(const IFileDescriptorInfo& _rhs) const {
    return _rhs < *this;
  }
  inline bool operator>=(const IFileDescriptorInfo& _rhs) const {
    return !(*this < _rhs);
  }
  inline bool operator<=(const IFileDescriptorInfo& _rhs) const {
    return !(_rhs < *this);
  }

  static const ::ndk::parcelable_stability_t _aidl_stability = ::ndk::STABILITY_LOCAL;
  inline std::string toString() const {
    std::ostringstream _aidl_os;
    _aidl_os << "IFileDescriptorInfo{";
    _aidl_os << "id: " << ::android::internal::ToString(id);
    _aidl_os << ", fd: " << ::android::internal::ToString(fd);
    _aidl_os << ", offset: " << ::android::internal::ToString(offset);
    _aidl_os << ", size: " << ::android::internal::ToString(size);
    _aidl_os << "}";
    return _aidl_os.str();
  }
};
}  // namespace process_launcher
}  // namespace base
}  // namespace chromium
}  // namespace org
}  // namespace aidl
