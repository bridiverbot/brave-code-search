#include "base/files/file.h"
#include "mojo/public/cpp/base/read_only_file_mojom_traits.h"

#ifdef __GNUC__
#pragma GCC diagnostic ignored "-Wmissing-declarations"
#ifdef __clang__
#pragma clang diagnostic ignored "-Wdollar-in-identifier-extension"
#endif // __clang__
#endif // __GNUC__

namespace mojo {
extern "C" {
bool mojo$cxxbridge1$202$IsReadOnlyFile(::base::File const &file) noexcept {
  bool (*IsReadOnlyFile$)(::base::File const &) = ::mojo::IsReadOnlyFile;
  return IsReadOnlyFile$(file);
}

bool mojo$cxxbridge1$202$IsPhysicalFile(::base::File const &file) noexcept {
  bool (*IsPhysicalFile$)(::base::File const &) = ::mojo::IsPhysicalFile;
  return IsPhysicalFile$(file);
}
} // extern "C"
} // namespace mojo
