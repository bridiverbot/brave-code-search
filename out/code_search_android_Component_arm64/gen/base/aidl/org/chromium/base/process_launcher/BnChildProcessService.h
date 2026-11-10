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
class BnChildProcessService : public ::ndk::BnCInterface<IChildProcessService> {
public:
  BnChildProcessService();
  virtual ~BnChildProcessService();
protected:
  ::ndk::SpAIBinder createBinder() override;
private:
};
class IChildProcessServiceDelegator : public BnChildProcessService {
public:
  explicit IChildProcessServiceDelegator(const std::shared_ptr<IChildProcessService> &impl) : _impl(impl) {
  }

  ::ndk::ScopedAStatus bindToCaller(const std::string& in_clazz, bool* _aidl_return) override {
    return _impl->bindToCaller(in_clazz, _aidl_return);
  }
  ::ndk::ScopedAStatus getSourceDir(std::string* _aidl_return) override {
    return _impl->getSourceDir(_aidl_return);
  }
  ::ndk::ScopedAStatus setupConnection(const ::aidl::org::chromium::base::process_launcher::IChildProcessArgs& in_args, const std::shared_ptr<::aidl::org::chromium::base::process_launcher::IParentProcess>& in_parentProcess, const std::optional<std::vector<::ndk::SpAIBinder>>& in_clientInterfaces) override {
    return _impl->setupConnection(in_args, in_parentProcess, in_clientInterfaces);
  }
  ::ndk::ScopedAStatus forceKill() override {
    return _impl->forceKill();
  }
  ::ndk::ScopedAStatus onSelfFreeze() override {
    return _impl->onSelfFreeze();
  }
  ::ndk::ScopedAStatus dumpProcessStack() override {
    return _impl->dumpProcessStack();
  }
  ::ndk::ScopedAStatus consumeRelroLibInfo(const std::optional<::aidl::org::chromium::base::library_loader::IRelroLibInfo>& in_libInfo) override {
    return _impl->consumeRelroLibInfo(in_libInfo);
  }
protected:
private:
  std::shared_ptr<IChildProcessService> _impl;
};

}  // namespace process_launcher
}  // namespace base
}  // namespace chromium
}  // namespace org
}  // namespace aidl
