/*
 * This file is auto-generated.  DO NOT MODIFY.
 * Using: cmd not shown due to `--omit_invocation`
 *
 * DO NOT CHECK THIS FILE INTO A CODE TREE (e.g. git, etc..).
 * ALWAYS GENERATE THIS FILE FROM UPDATED AIDL COMPILER
 * AS A BUILD INTERMEDIATE ONLY. THIS IS NOT SOURCE CODE.
 */
#pragma once

#include "aidl/org/chromium/base/process_launcher/IParentProcess.h"

#include <android/binder_ibinder.h>

namespace aidl {
namespace org {
namespace chromium {
namespace base {
namespace process_launcher {
class BpParentProcess : public ::ndk::BpCInterface<IParentProcess> {
public:
  explicit BpParentProcess(const ::ndk::SpAIBinder& binder);
  virtual ~BpParentProcess();

  ::ndk::ScopedAStatus finishSetupConnection(int32_t in_pid, int32_t in_zygotePid, int64_t in_zygoteStartupTimeMillis, const std::optional<::aidl::org::chromium::base::library_loader::IRelroLibInfo>& in_relroInfo) override;
  ::ndk::ScopedAStatus reportExceptionInInit(const std::string& in_exception) override;
  ::ndk::ScopedAStatus reportCleanExit() override;
};
}  // namespace process_launcher
}  // namespace base
}  // namespace chromium
}  // namespace org
}  // namespace aidl
