#include "base/task/sequenced_task_runner_test_util.h"

#ifdef __GNUC__
#pragma GCC diagnostic ignored "-Wmissing-declarations"
#ifdef __clang__
#pragma clang diagnostic ignored "-Wdollar-in-identifier-extension"
#endif // __clang__
#endif // __GNUC__

namespace base {
  namespace task {
    namespace test {
      using TestRefCounted = ::base::task::test::TestRefCounted;
    }
  }
}

namespace base {
namespace task {
namespace test {
extern "C" {
__declspec(dllexport) ::base::task::test::TestRefCounted *base$task$test$cxxbridge1$202$CreateTestRefCounted(bool &b) noexcept {
  ::base::task::test::TestRefCounted *(*CreateTestRefCounted$)(bool &) = ::base::task::test::CreateTestRefCounted;
  return CreateTestRefCounted$(b);
}

__declspec(dllexport) bool base$task$test$cxxbridge1$202$TestRefCounted$HasOneRef(::base::task::test::TestRefCounted const &self) noexcept {
  bool (::base::task::test::TestRefCounted::*HasOneRef$)() const = &::base::task::test::TestRefCounted::HasOneRef;
  return (self.*HasOneRef$)();
}

__declspec(dllexport) bool base$task$test$cxxbridge1$202$TestRefCounted$HasAtLeastOneRef(::base::task::test::TestRefCounted const &self) noexcept {
  bool (::base::task::test::TestRefCounted::*HasAtLeastOneRef$)() const = &::base::task::test::TestRefCounted::HasAtLeastOneRef;
  return (self.*HasAtLeastOneRef$)();
}

__declspec(dllexport) void base$task$test$cxxbridge1$202$TestRefCounted$AddRef(::base::task::test::TestRefCounted const &self) noexcept {
  void (::base::task::test::TestRefCounted::*AddRef$)() const = &::base::task::test::TestRefCounted::AddRef;
  (self.*AddRef$)();
}

__declspec(dllexport) void base$task$test$cxxbridge1$202$TestRefCounted$Release(::base::task::test::TestRefCounted const &self) noexcept {
  void (::base::task::test::TestRefCounted::*Release$)() const = &::base::task::test::TestRefCounted::Release;
  (self.*Release$)();
}
} // extern "C"
} // namespace test
} // namespace task
} // namespace base
