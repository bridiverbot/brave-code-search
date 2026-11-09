#include "components/url_formatter/spoof_checks/top_domains/test_top_bucket_domains.h"
namespace test_top_bucket_domains {
namespace {
const char* const kTopBucketEditDistanceSkeletonsArray[] = {
"acadernia.edu",
"acadernic.ru",
"apple.corn",
"blogspot.corn",
"google.co.uk",
"google.corn",
"google.corn.tr",
"google.rs",
"office.corn",
"youtube.corn",
};
}  // namespace

extern constexpr base::span<const char* const>
    kTopBucketEditDistanceSkeletons = kTopBucketEditDistanceSkeletonsArray;

}  // namespace
