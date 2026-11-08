#pragma once
#include "base/test/task_environment_rust_shim.h"
#include <memory>

namespace base {
  namespace test {
    using SingleThreadTaskEnvironment = ::base::test::SingleThreadTaskEnvironment;
  }
}
