#include "base/files/file_path.h"
#include "net/base/filename_util_rust_shim.h"
#include "url/gurl.h"
#include <memory>

#ifdef __GNUC__
#pragma GCC diagnostic ignored "-Wmissing-declarations"
#ifdef __clang__
#pragma clang diagnostic ignored "-Wdollar-in-identifier-extension"
#endif // __clang__
#endif // __GNUC__

namespace net {
namespace rust {
extern "C" {
__attribute__((visibility("default"))) ::base::FilePath *net$rust$cxxbridge1$202$file_url_to_file_path(::GURL const &url) noexcept {
  ::std::unique_ptr<::base::FilePath> (*file_url_to_file_path$)(::GURL const &) = ::net::rust::FileURLToFilePath;
  return file_url_to_file_path$(url).release();
}
} // extern "C"
} // namespace rust
} // namespace net
