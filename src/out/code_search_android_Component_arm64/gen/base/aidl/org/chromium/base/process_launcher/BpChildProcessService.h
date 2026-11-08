/*
 * This file is auto-generated.  DO NOT MODIFY.
 * Using: cmd not shown due to `--omit_invocation`
 *
 * DO NOT CHECK THIS FILE INTO A CODE TREE (e.g. git, etc..).
 * ALWAYS GENERATE THIS FILE FROM UPDATED AIDL COMPILER
 * AS A BUILD INTERMEDIATE ONLY. THIS IS NOT SOURCE CODE.
 */
#pragma once

#include "aidl/org/chromium/base/process_launcher/IChildProcessService.h"

#include <android/binder_ibinder.h>

namespace aidl {
namespace org {
namespace chromium {
namespace base {
namespace process_launcher {
class BpChildProcessService : public ::ndk::BpCInterface<IChildProcessService> {
public:
  explicit BpChildProcessService(const ::ndk::SpAIBinder& binder);
  virtual ~BpChildProcessService();

  ::ndk::ScopedAStatus bindToCaller(const std::string& in_clazz, bool* _aidl_return) override;
  ::ndk::ScopedAStatus getSourceDir(std::string* _aidl_return) override;
  ::ndk::ScopedAStatus setupConnection(const ::aidl::org::chromium::base::process_launcher::IChildProcessArgs& in_args, const std::shared_ptr<::aidl::org::chromium::base::process_launcher::IParentProcess>& in_parentProcess, const std::optional<std::vector<::ndk::SpAIBinder>>& in_clientInterfaces) override;
  ::ndk::ScopedAStatus forceKill() override;
  ::ndk::ScopedAStatus onSelfFreeze() override;
  ::ndk::ScopedAStatus dumpProcessStack() override;
  ::ndk::ScopedAStatus consumeRelroLibInfo(const std::optional<::aidl::org::chromium::base::library_loader::IRelroLibInfo>& in_libInfo) override;
};
}  // namespace process_launcher
}  // namespace base
}  // namespace chromium
}  // namespace org
}  // namespace aidl
