#include "base/files/file.h"
#include "components/safe_browsing/content/renderer/phishing_classifier/scorer_rust_shim.h"
#include <cstdint>
#include <memory>

#ifdef __GNUC__
#pragma GCC diagnostic ignored "-Wmissing-declarations"
#ifdef __clang__
#pragma clang diagnostic ignored "-Wdollar-in-identifier-extension"
#endif // __clang__
#endif // __GNUC__

namespace safe_browsing {
namespace rust_bridge {
extern "C" {
bool safe_browsing$rust_bridge$cxxbridge1$202$SetPhishingTfLiteModel(::std::int32_t classification_input_width, ::std::int32_t classification_input_height, ::base::File *classification_model) noexcept {
  bool (*SetPhishingTfLiteModel$)(::std::int32_t, ::std::int32_t, ::std::unique_ptr<::base::File>) = ::safe_browsing::rust_bridge::SetPhishingTfLiteModel;
  return SetPhishingTfLiteModel$(classification_input_width, classification_input_height, ::std::unique_ptr<::base::File>(classification_model));
}

bool safe_browsing$rust_bridge$cxxbridge1$202$SetImageEmbeddingAndPhishingTfLiteModel(::std::int32_t classification_input_width, ::std::int32_t classification_input_height, ::base::File *classification_model, ::std::int32_t image_embedding_input_width, ::std::int32_t image_embedding_input_height, ::base::File *image_embedding_model) noexcept {
  bool (*SetImageEmbeddingAndPhishingTfLiteModel$)(::std::int32_t, ::std::int32_t, ::std::unique_ptr<::base::File>, ::std::int32_t, ::std::int32_t, ::std::unique_ptr<::base::File>) = ::safe_browsing::rust_bridge::SetImageEmbeddingAndPhishingTfLiteModel;
  return SetImageEmbeddingAndPhishingTfLiteModel$(classification_input_width, classification_input_height, ::std::unique_ptr<::base::File>(classification_model), image_embedding_input_width, image_embedding_input_height, ::std::unique_ptr<::base::File>(image_embedding_model));
}

void safe_browsing$rust_bridge$cxxbridge1$202$AttachImageEmbeddingModelAndDimensions(::std::int32_t image_embedding_input_width, ::std::int32_t image_embedding_input_height, ::base::File *image_embedding_model) noexcept {
  void (*AttachImageEmbeddingModelAndDimensions$)(::std::int32_t, ::std::int32_t, ::std::unique_ptr<::base::File>) = ::safe_browsing::rust_bridge::AttachImageEmbeddingModelAndDimensions;
  AttachImageEmbeddingModelAndDimensions$(image_embedding_input_width, image_embedding_input_height, ::std::unique_ptr<::base::File>(image_embedding_model));
}

void safe_browsing$rust_bridge$cxxbridge1$202$ClearScorer() noexcept {
  void (*ClearScorer$)() = ::safe_browsing::rust_bridge::ClearScorer;
  ClearScorer$();
}
} // extern "C"
} // namespace rust_bridge
} // namespace safe_browsing
