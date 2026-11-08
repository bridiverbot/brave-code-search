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
#include <aidl/org/chromium/base/process_launcher/IChildProcessArgs.h>
#include <aidl/org/chromium/base/process_launcher/IParentProcess.h>
#ifdef BINDER_STABILITY_SUPPORT
#include <android/binder_stability.h>
#endif  // BINDER_STABILITY_SUPPORT

namespace aidl::org::chromium::base::library_loader {
class IRelroLibInfo;
}  // namespace aidl::org::chromium::base::library_loader
namespace aidl::org::chromium::base::process_launcher {
class IChildProcessArgs;
class IParentProcess;
}  // namespace aidl::org::chromium::base::process_launcher
namespace aidl {
namespace org {
namespace chromium {
namespace base {
namespace process_launcher {
class IChildProcessServiceDelegator;

class IChildProcessService : public ::ndk::ICInterface {
public:
  typedef IChildProcessServiceDelegator DefaultDelegator;
  static const char* descriptor;
  IChildProcessService();
  virtual ~IChildProcessService();

  static constexpr uint32_t TRANSACTION_bindToCaller = FIRST_CALL_TRANSACTION + 0;
  static constexpr uint32_t TRANSACTION_getSourceDir = FIRST_CALL_TRANSACTION + 1;
  static constexpr uint32_t TRANSACTION_setupConnection = FIRST_CALL_TRANSACTION + 2;
  static constexpr uint32_t TRANSACTION_forceKill = FIRST_CALL_TRANSACTION + 3;
  static constexpr uint32_t TRANSACTION_onSelfFreeze = FIRST_CALL_TRANSACTION + 4;
  static constexpr uint32_t TRANSACTION_dumpProcessStack = FIRST_CALL_TRANSACTION + 5;
  static constexpr uint32_t TRANSACTION_consumeRelroLibInfo = FIRST_CALL_TRANSACTION + 6;

  static std::shared_ptr<IChildProcessService> fromBinder(const ::ndk::SpAIBinder& binder);
  static binder_status_t writeToParcel(AParcel* parcel, const std::shared_ptr<IChildProcessService>& instance);
  static binder_status_t readFromParcel(const AParcel* parcel, std::shared_ptr<IChildProcessService>* instance);
  virtual ::ndk::ScopedAStatus bindToCaller(const std::string& in_clazz, bool* _aidl_return) = 0;
  virtual ::ndk::ScopedAStatus getSourceDir(std::string* _aidl_return) = 0;
  virtual ::ndk::ScopedAStatus setupConnection(const ::aidl::org::chromium::base::process_launcher::IChildProcessArgs& in_args, const std::shared_ptr<::aidl::org::chromium::base::process_launcher::IParentProcess>& in_parentProcess, const std::optional<std::vector<::ndk::SpAIBinder>>& in_clientInterfaces) = 0;
  virtual ::ndk::ScopedAStatus forceKill() = 0;
  virtual ::ndk::ScopedAStatus onSelfFreeze() = 0;
  virtual ::ndk::ScopedAStatus dumpProcessStack() = 0;
  virtual ::ndk::ScopedAStatus consumeRelroLibInfo(const std::optional<::aidl::org::chromium::base::library_loader::IRelroLibInfo>& in_libInfo) = 0;
};
class IChildProcessServiceDefault : public IChildProcessService {
public:
  ::ndk::ScopedAStatus bindToCaller(const std::string& in_clazz, bool* _aidl_return) override;
  ::ndk::ScopedAStatus getSourceDir(std::string* _aidl_return) override;
  ::ndk::ScopedAStatus setupConnection(const ::aidl::org::chromium::base::process_launcher::IChildProcessArgs& in_args, const std::shared_ptr<::aidl::org::chromium::base::process_launcher::IParentProcess>& in_parentProcess, const std::optional<std::vector<::ndk::SpAIBinder>>& in_clientInterfaces) override;
  ::ndk::ScopedAStatus forceKill() override;
  ::ndk::ScopedAStatus onSelfFreeze() override;
  ::ndk::ScopedAStatus dumpProcessStack() override;
  ::ndk::ScopedAStatus consumeRelroLibInfo(const std::optional<::aidl::org::chromium::base::library_loader::IRelroLibInfo>& in_libInfo) override;
  ::ndk::SpAIBinder asBinder() override;
  bool isRemote() override;
};
}  // namespace process_launcher
}  // namespace base
}  // namespace chromium
}  // namespace org
}  // namespace aidl
