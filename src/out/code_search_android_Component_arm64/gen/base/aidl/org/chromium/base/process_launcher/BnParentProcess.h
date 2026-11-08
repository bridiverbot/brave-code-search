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
#include <cassert>

#ifndef __BIONIC__
#ifndef __assert2
#define __assert2(a,b,c,d) ((void)0)
#endif
#endif

namespace aidl {
namespace org {
namespace chromium {
namespace base {
namespace process_launcher {
class BnParentProcess : public ::ndk::BnCInterface<IParentProcess> {
public:
  BnParentProcess();
  virtual ~BnParentProcess();
protected:
  ::ndk::SpAIBinder createBinder() override;
private:
};
class IParentProcessDelegator : public BnParentProcess {
public:
  explicit IParentProcessDelegator(const std::shared_ptr<IParentProcess> &impl) : _impl(impl) {
  }

  ::ndk::ScopedAStatus finishSetupConnection(int32_t in_pid, int32_t in_zygotePid, int64_t in_zygoteStartupTimeMillis, const std::optional<::aidl::org::chromium::base::library_loader::IRelroLibInfo>& in_relroInfo) override {
    return _impl->finishSetupConnection(in_pid, in_zygotePid, in_zygoteStartupTimeMillis, in_relroInfo);
  }
  ::ndk::ScopedAStatus reportExceptionInInit(const std::string& in_exception) override {
    return _impl->reportExceptionInInit(in_exception);
  }
  ::ndk::ScopedAStatus reportCleanExit() override {
    return _impl->reportCleanExit();
  }
protected:
private:
  std::shared_ptr<IParentProcess> _impl;
};

}  // namespace process_launcher
}  // namespace base
}  // namespace chromium
}  // namespace org
}  // namespace aidl
