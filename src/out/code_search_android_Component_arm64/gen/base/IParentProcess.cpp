/*
 * This file is auto-generated.  DO NOT MODIFY.
 * Using: cmd not shown due to `--omit_invocation`
 *
 * DO NOT CHECK THIS FILE INTO A CODE TREE (e.g. git, etc..).
 * ALWAYS GENERATE THIS FILE FROM UPDATED AIDL COMPILER
 * AS A BUILD INTERMEDIATE ONLY. THIS IS NOT SOURCE CODE.
 */
#include "aidl/org/chromium/base/process_launcher/IParentProcess.h"

#include <cstdint>
#include <android/binder_parcel.h>
#include <android/binder_parcel_utils.h>
#include <android/binder_status.h>
#include <aidl/org/chromium/base/process_launcher/BnParentProcess.h>
#include <aidl/org/chromium/base/process_launcher/BpParentProcess.h>

namespace aidl {
namespace org {
namespace chromium {
namespace base {
namespace process_launcher {
static binder_status_t _aidl_org_chromium_base_process_launcher_IParentProcess_onTransact(AIBinder* _aidl_binder, transaction_code_t _aidl_code, const AParcel* _aidl_in, AParcel* _aidl_out) {
  (void)_aidl_in;
  (void)_aidl_out;
  binder_status_t _aidl_ret_status = STATUS_UNKNOWN_TRANSACTION;
  std::shared_ptr<BnParentProcess> _aidl_impl = std::static_pointer_cast<BnParentProcess>(::ndk::ICInterface::asInterface(_aidl_binder));
  switch (_aidl_code) {
    case (FIRST_CALL_TRANSACTION + 0 /*finishSetupConnection*/): {
      int32_t in_pid;
      int32_t in_zygotePid;
      int64_t in_zygoteStartupTimeMillis;
      std::optional<::aidl::org::chromium::base::library_loader::IRelroLibInfo> in_relroInfo;

      _aidl_ret_status = ::ndk::AParcel_readData(_aidl_in, &in_pid);
      if (_aidl_ret_status != STATUS_OK) break;

      _aidl_ret_status = ::ndk::AParcel_readData(_aidl_in, &in_zygotePid);
      if (_aidl_ret_status != STATUS_OK) break;

      _aidl_ret_status = ::ndk::AParcel_readData(_aidl_in, &in_zygoteStartupTimeMillis);
      if (_aidl_ret_status != STATUS_OK) break;

      _aidl_ret_status = ::ndk::AParcel_readNullableData(_aidl_in, &in_relroInfo);
      if (_aidl_ret_status != STATUS_OK) break;

      ::ndk::ScopedAStatus _aidl_status = _aidl_impl->finishSetupConnection(in_pid, in_zygotePid, in_zygoteStartupTimeMillis, in_relroInfo);
      _aidl_ret_status = STATUS_OK;
      break;
    }
    case (FIRST_CALL_TRANSACTION + 1 /*reportExceptionInInit*/): {
      std::string in_exception;

      _aidl_ret_status = ::ndk::AParcel_readData(_aidl_in, &in_exception);
      if (_aidl_ret_status != STATUS_OK) break;

      ::ndk::ScopedAStatus _aidl_status = _aidl_impl->reportExceptionInInit(in_exception);
      _aidl_ret_status = AParcel_writeStatusHeader(_aidl_out, _aidl_status.get());
      if (_aidl_ret_status != STATUS_OK) break;

      if (!AStatus_isOk(_aidl_status.get())) break;

      break;
    }
    case (FIRST_CALL_TRANSACTION + 2 /*reportCleanExit*/): {

      ::ndk::ScopedAStatus _aidl_status = _aidl_impl->reportCleanExit();
      _aidl_ret_status = AParcel_writeStatusHeader(_aidl_out, _aidl_status.get());
      if (_aidl_ret_status != STATUS_OK) break;

      if (!AStatus_isOk(_aidl_status.get())) break;

      break;
    }
  }
  return _aidl_ret_status;
}

static AIBinder_Class* get_g_aidl_org_chromium_base_process_launcher_IParentProcess_clazz() {
  static AIBinder_Class* clazz = ::ndk::ICInterface::defineClass(IParentProcess::descriptor, _aidl_org_chromium_base_process_launcher_IParentProcess_onTransact, nullptr, 0);
  return clazz;
}

BpParentProcess::BpParentProcess(const ::ndk::SpAIBinder& binder) : BpCInterface(binder) {}
BpParentProcess::~BpParentProcess() {}

::ndk::ScopedAStatus BpParentProcess::finishSetupConnection(int32_t in_pid, int32_t in_zygotePid, int64_t in_zygoteStartupTimeMillis, const std::optional<::aidl::org::chromium::base::library_loader::IRelroLibInfo>& in_relroInfo) {
  binder_status_t _aidl_ret_status = STATUS_OK;
  ::ndk::ScopedAStatus _aidl_status;
  ::ndk::ScopedAParcel _aidl_in;
  ::ndk::ScopedAParcel _aidl_out;

  _aidl_ret_status = AIBinder_prepareTransaction(asBinderReference().get(), _aidl_in.getR());
  if (_aidl_ret_status != STATUS_OK) goto _aidl_error;

  _aidl_ret_status = ::ndk::AParcel_writeData(_aidl_in.get(), in_pid);
  if (_aidl_ret_status != STATUS_OK) goto _aidl_error;

  _aidl_ret_status = ::ndk::AParcel_writeData(_aidl_in.get(), in_zygotePid);
  if (_aidl_ret_status != STATUS_OK) goto _aidl_error;

  _aidl_ret_status = ::ndk::AParcel_writeData(_aidl_in.get(), in_zygoteStartupTimeMillis);
  if (_aidl_ret_status != STATUS_OK) goto _aidl_error;

  _aidl_ret_status = ::ndk::AParcel_writeNullableData(_aidl_in.get(), in_relroInfo);
  if (_aidl_ret_status != STATUS_OK) goto _aidl_error;

  _aidl_ret_status = AIBinder_transact(
    asBinderReference().get(),
    (FIRST_CALL_TRANSACTION + 0 /*finishSetupConnection*/),
    _aidl_in.getR(),
    _aidl_out.getR(),
    FLAG_ONEWAY
    #ifdef BINDER_STABILITY_SUPPORT
    | static_cast<int>(FLAG_PRIVATE_LOCAL)
    #endif  // BINDER_STABILITY_SUPPORT
    );
  if (_aidl_ret_status != STATUS_OK) goto _aidl_error;

  _aidl_error:
  _aidl_status.set(AStatus_fromStatus(_aidl_ret_status));
  return _aidl_status;
}
::ndk::ScopedAStatus BpParentProcess::reportExceptionInInit(const std::string& in_exception) {
  binder_status_t _aidl_ret_status = STATUS_OK;
  ::ndk::ScopedAStatus _aidl_status;
  ::ndk::ScopedAParcel _aidl_in;
  ::ndk::ScopedAParcel _aidl_out;

  _aidl_ret_status = AIBinder_prepareTransaction(asBinderReference().get(), _aidl_in.getR());
  if (_aidl_ret_status != STATUS_OK) goto _aidl_error;

  _aidl_ret_status = ::ndk::AParcel_writeData(_aidl_in.get(), in_exception);
  if (_aidl_ret_status != STATUS_OK) goto _aidl_error;

  _aidl_ret_status = AIBinder_transact(
    asBinderReference().get(),
    (FIRST_CALL_TRANSACTION + 1 /*reportExceptionInInit*/),
    _aidl_in.getR(),
    _aidl_out.getR(),
    0
    #ifdef BINDER_STABILITY_SUPPORT
    | static_cast<int>(FLAG_PRIVATE_LOCAL)
    #endif  // BINDER_STABILITY_SUPPORT
    );
  if (_aidl_ret_status != STATUS_OK) goto _aidl_error;

  _aidl_ret_status = AParcel_readStatusHeader(_aidl_out.get(), _aidl_status.getR());
  if (_aidl_ret_status != STATUS_OK) goto _aidl_error;

  if (!AStatus_isOk(_aidl_status.get())) goto _aidl_status_return;
  _aidl_error:
  _aidl_status.set(AStatus_fromStatus(_aidl_ret_status));
  _aidl_status_return:
  return _aidl_status;
}
::ndk::ScopedAStatus BpParentProcess::reportCleanExit() {
  binder_status_t _aidl_ret_status = STATUS_OK;
  ::ndk::ScopedAStatus _aidl_status;
  ::ndk::ScopedAParcel _aidl_in;
  ::ndk::ScopedAParcel _aidl_out;

  _aidl_ret_status = AIBinder_prepareTransaction(asBinderReference().get(), _aidl_in.getR());
  if (_aidl_ret_status != STATUS_OK) goto _aidl_error;

  _aidl_ret_status = AIBinder_transact(
    asBinderReference().get(),
    (FIRST_CALL_TRANSACTION + 2 /*reportCleanExit*/),
    _aidl_in.getR(),
    _aidl_out.getR(),
    0
    #ifdef BINDER_STABILITY_SUPPORT
    | static_cast<int>(FLAG_PRIVATE_LOCAL)
    #endif  // BINDER_STABILITY_SUPPORT
    );
  if (_aidl_ret_status != STATUS_OK) goto _aidl_error;

  _aidl_ret_status = AParcel_readStatusHeader(_aidl_out.get(), _aidl_status.getR());
  if (_aidl_ret_status != STATUS_OK) goto _aidl_error;

  if (!AStatus_isOk(_aidl_status.get())) goto _aidl_status_return;
  _aidl_error:
  _aidl_status.set(AStatus_fromStatus(_aidl_ret_status));
  _aidl_status_return:
  return _aidl_status;
}
// Source for BnParentProcess
BnParentProcess::BnParentProcess() {}
BnParentProcess::~BnParentProcess() {}
::ndk::SpAIBinder BnParentProcess::createBinder() {
  AIBinder* binder = AIBinder_new(get_g_aidl_org_chromium_base_process_launcher_IParentProcess_clazz(), static_cast<void*>(this));
  #ifdef BINDER_STABILITY_SUPPORT
  AIBinder_markCompilationUnitStability(binder);
  #endif  // BINDER_STABILITY_SUPPORT
  return ::ndk::SpAIBinder(binder);
}
// Source for IParentProcess
const char* IParentProcess::descriptor = "org.chromium.base.process_launcher.IParentProcess";
IParentProcess::IParentProcess() {}
IParentProcess::~IParentProcess() {}


std::shared_ptr<IParentProcess> IParentProcess::fromBinder(const ::ndk::SpAIBinder& binder) {
  if (!AIBinder_associateClass(binder.get(), get_g_aidl_org_chromium_base_process_launcher_IParentProcess_clazz())) {
    #if __ANDROID_API__ >= 31
    const AIBinder_Class* originalClass = AIBinder_getClass(binder.get());
    if (originalClass == nullptr) return nullptr;
    if (0 == strcmp(AIBinder_Class_getDescriptor(originalClass), descriptor)) {
      return ::ndk::SharedRefBase::make<BpParentProcess>(binder);
    }
    #endif
    return nullptr;
  }
  std::shared_ptr<::ndk::ICInterface> interface = ::ndk::ICInterface::asInterface(binder.get());
  if (interface) {
    return std::static_pointer_cast<IParentProcess>(interface);
  }
  return ::ndk::SharedRefBase::make<BpParentProcess>(binder);
}

binder_status_t IParentProcess::writeToParcel(AParcel* parcel, const std::shared_ptr<IParentProcess>& instance) {
  return AParcel_writeStrongBinder(parcel, instance ? instance->asBinder().get() : nullptr);
}
binder_status_t IParentProcess::readFromParcel(const AParcel* parcel, std::shared_ptr<IParentProcess>* instance) {
  ::ndk::SpAIBinder binder;
  binder_status_t status = AParcel_readStrongBinder(parcel, binder.getR());
  if (status != STATUS_OK) return status;
  *instance = IParentProcess::fromBinder(binder);
  return STATUS_OK;
}
::ndk::ScopedAStatus IParentProcessDefault::finishSetupConnection(int32_t /*in_pid*/, int32_t /*in_zygotePid*/, int64_t /*in_zygoteStartupTimeMillis*/, const std::optional<::aidl::org::chromium::base::library_loader::IRelroLibInfo>& /*in_relroInfo*/) {
  ::ndk::ScopedAStatus _aidl_status;
  _aidl_status.set(AStatus_fromStatus(STATUS_UNKNOWN_TRANSACTION));
  return _aidl_status;
}
::ndk::ScopedAStatus IParentProcessDefault::reportExceptionInInit(const std::string& /*in_exception*/) {
  ::ndk::ScopedAStatus _aidl_status;
  _aidl_status.set(AStatus_fromStatus(STATUS_UNKNOWN_TRANSACTION));
  return _aidl_status;
}
::ndk::ScopedAStatus IParentProcessDefault::reportCleanExit() {
  ::ndk::ScopedAStatus _aidl_status;
  _aidl_status.set(AStatus_fromStatus(STATUS_UNKNOWN_TRANSACTION));
  return _aidl_status;
}
::ndk::SpAIBinder IParentProcessDefault::asBinder() {
  return ::ndk::SpAIBinder();
}
bool IParentProcessDefault::isRemote() {
  return false;
}
}  // namespace process_launcher
}  // namespace base
}  // namespace chromium
}  // namespace org
}  // namespace aidl
