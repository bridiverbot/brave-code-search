#pragma once
#include "mojo/public/rust/system/scoped_handle_interop.h"
#include <cstddef>
#include <memory>

namespace mojo {
  namespace rust {
    using ScopedHandleWrapper = ::mojo::rust::ScopedHandleWrapper;
    using ScopedMessagePipeHandleWrapper = ::mojo::rust::ScopedMessagePipeHandleWrapper;
    using ScopedMessageHandleWrapper = ::mojo::rust::ScopedMessageHandleWrapper;
  }
}
