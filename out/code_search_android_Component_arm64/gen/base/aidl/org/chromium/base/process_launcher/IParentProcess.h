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
#include <aidl/org/chromium/base/library_loader/IRelroLibInfo.h>
#ifdef BINDER_STABILITY_SUPPORT
#include <android/binder_stability.h>
#endif  // BINDER_STABILITY_SUPPORT

namespace aidl::org::chromium::base::library_loader {
class IRelroLibInfo;
}  // namespace aidl::org::chromium::base::library_loader
namespace aidl {
namespace org {
namespace chromium {
namespace base {
namespace process_launcher {
class IParentProcessDelegator;

class IParentProcess : public ::ndk::ICInterface {
public:
  typedef IParentProcessDelegator DefaultDelegator;
  static const char* descriptor;
  IParentProcess();
  virtual ~IParentProcess();

  static constexpr uint32_t TRANSACTION_finishSetupConnection = FIRST_CALL_TRANSACTION + 0;
  static constexpr uint32_t TRANSACTION_reportExceptionInInit = FIRST_CALL_TRANSACTION + 1;
  static constexpr uint32_t TRANSACTION_reportCleanExit = FIRST_CALL_TRANSACTION + 2;

  static std::shared_ptr<IParentProcess> fromBinder(const ::ndk::SpAIBinder& binder);
  static binder_status_t writeToParcel(AParcel* parcel, const std::shared_ptr<IParentProcess>& instance);
  static binder_status_t readFromParcel(const AParcel* parcel, std::shared_ptr<IParentProcess>* instance);
  virtual ::ndk::ScopedAStatus finishSetupConnection(int32_t in_pid, int32_t in_zygotePid, int64_t in_zygoteStartupTimeMillis, const std::optional<::aidl::org::chromium::base::library_loader::IRelroLibInfo>& in_relroInfo) = 0;
  virtual ::ndk::ScopedAStatus reportExceptionInInit(const std::string& in_exception) = 0;
  virtual ::ndk::ScopedAStatus reportCleanExit() = 0;
};
class IParentProcessDefault : public IParentProcess {
public:
  ::ndk::ScopedAStatus finishSetupConnection(int32_t in_pid, int32_t in_zygotePid, int64_t in_zygoteStartupTimeMillis, const std::optional<::aidl::org::chromium::base::library_loader::IRelroLibInfo>& in_relroInfo) override;
  ::ndk::ScopedAStatus reportExceptionInInit(const std::string& in_exception) override;
  ::ndk::ScopedAStatus reportCleanExit() override;
  ::ndk::SpAIBinder asBinder() override;
  bool isRemote() override;
};
}  // namespace process_launcher
}  // namespace base
}  // namespace chromium
}  // namespace org
}  // namespace aidl
