// Generated from gen_private_metrics_builders.py.  DO NOT EDIT!
// source: dwa.xml

#include "components/metrics/dwa/dwa_builders.h"

#include "base/metrics/metrics_hashes.h"

namespace dwa::builders {


const char BrowsingTopics_Result::kEntryName[] = "BrowsingTopics.Result";
const uint64_t BrowsingTopics_Result::kEntryNameHash;

BrowsingTopics_Result::BrowsingTopics_Result() :
  ::dwa::internal::DwaEntryBuilderBase(kEntryNameHash) {

}

BrowsingTopics_Result::BrowsingTopics_Result(BrowsingTopics_Result&&) = default;

BrowsingTopics_Result& BrowsingTopics_Result::operator=(BrowsingTopics_Result&&) = default;

BrowsingTopics_Result::~BrowsingTopics_Result() = default;

BrowsingTopics_Result& BrowsingTopics_Result::SetContent(std::string_view content) {
  SetContentInternal(base::HashMetricName(SanitizeContent(content)));
  return *this;
}


const char BrowsingTopics_Result::kRealTopicCountName[] = "RealTopicCount";
const uint64_t BrowsingTopics_Result::kRealTopicCountNameHash;

BrowsingTopics_Result& BrowsingTopics_Result::SetRealTopicCount(int64_t value) {
  SetMetricInternal(kRealTopicCountNameHash, value);
  return *this;
}


const char DwaTestMetric::kEntryName[] = "DwaTestMetric";
const uint64_t DwaTestMetric::kEntryNameHash;

DwaTestMetric::DwaTestMetric() :
  ::dwa::internal::DwaEntryBuilderBase(kEntryNameHash) {

  AddToStudiesOfInterestInternal(kACTStudyName);

  AddToStudiesOfInterestInternal(kLegacyStudyName);

  AddToStudiesOfInterestInternal(kModeBStudyName);

}

DwaTestMetric::DwaTestMetric(DwaTestMetric&&) = default;

DwaTestMetric& DwaTestMetric::operator=(DwaTestMetric&&) = default;

DwaTestMetric::~DwaTestMetric() = default;

DwaTestMetric& DwaTestMetric::SetContent(std::string_view content) {
  SetContentInternal(base::HashMetricName(SanitizeContent(content)));
  return *this;
}


const char DwaTestMetric::kHasVideoName[] = "HasVideo";
const uint64_t DwaTestMetric::kHasVideoNameHash;

DwaTestMetric& DwaTestMetric::SetHasVideo(int64_t value) {
  SetMetricInternal(kHasVideoNameHash, value);
  return *this;
}

const char DwaTestMetric::kLatencyName[] = "Latency";
const uint64_t DwaTestMetric::kLatencyNameHash;

DwaTestMetric& DwaTestMetric::SetLatency(int64_t value) {
  SetMetricInternal(kLatencyNameHash, value);
  return *this;
}


const char StorageAccess_RequestOutcome::kEntryName[] = "StorageAccess.RequestOutcome";
const uint64_t StorageAccess_RequestOutcome::kEntryNameHash;

StorageAccess_RequestOutcome::StorageAccess_RequestOutcome() :
  ::dwa::internal::DwaEntryBuilderBase(kEntryNameHash) {

}

StorageAccess_RequestOutcome::StorageAccess_RequestOutcome(StorageAccess_RequestOutcome&&) = default;

StorageAccess_RequestOutcome& StorageAccess_RequestOutcome::operator=(StorageAccess_RequestOutcome&&) = default;

StorageAccess_RequestOutcome::~StorageAccess_RequestOutcome() = default;

StorageAccess_RequestOutcome& StorageAccess_RequestOutcome::SetContent(std::string_view content) {
  SetContentInternal(base::HashMetricName(SanitizeContent(content)));
  return *this;
}


const char StorageAccess_RequestOutcome::kOutcomeName[] = "Outcome";
const uint64_t StorageAccess_RequestOutcome::kOutcomeNameHash;

StorageAccess_RequestOutcome& StorageAccess_RequestOutcome::SetOutcome(int64_t value) {
  SetMetricInternal(kOutcomeNameHash, value);
  return *this;
}



}  // namespace dwa::builders
