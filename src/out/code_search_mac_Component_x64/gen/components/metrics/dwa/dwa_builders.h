// Generated from gen_private_metrics_builders.py.  DO NOT EDIT!
// source: dwa.xml

#ifndef COMPONENTS_METRICS_DWA_DWA_BUILDERS_H
#define COMPONENTS_METRICS_DWA_DWA_BUILDERS_H

#include <cstdint>
#include <string_view>

#include "components/metrics/dwa/dwa_entry_builder_base.h"

namespace dwa::builders {


class BrowsingTopics_Result final : public ::dwa::internal::DwaEntryBuilderBase {
 public:
  explicit BrowsingTopics_Result();
  BrowsingTopics_Result(BrowsingTopics_Result&&);
  BrowsingTopics_Result& operator=(BrowsingTopics_Result&&);
  ~BrowsingTopics_Result() override;

  static const char kEntryName[];
  static constexpr uint64_t kEntryNameHash = UINT64_C(16449939275883443053);

  BrowsingTopics_Result& SetContent(std::string_view content);


  static const char kRealTopicCountName[];
  static constexpr uint64_t kRealTopicCountNameHash = UINT64_C(17317713373295959801);
  BrowsingTopics_Result& SetRealTopicCount(int64_t value);


};

class DwaTestMetric final : public ::dwa::internal::DwaEntryBuilderBase {
 public:
  explicit DwaTestMetric();
  DwaTestMetric(DwaTestMetric&&);
  DwaTestMetric& operator=(DwaTestMetric&&);
  ~DwaTestMetric() override;

  static const char kEntryName[];
  static constexpr uint64_t kEntryNameHash = UINT64_C(10084375266486398523);

  DwaTestMetric& SetContent(std::string_view content);


  static const char kHasVideoName[];
  static constexpr uint64_t kHasVideoNameHash = UINT64_C(14168404852977906041);
  DwaTestMetric& SetHasVideo(int64_t value);

  static const char kLatencyName[];
  static constexpr uint64_t kLatencyNameHash = UINT64_C(2787301409000765636);
  DwaTestMetric& SetLatency(int64_t value);


  static constexpr char kACTStudyName[] = "ACTStudy";
  static constexpr uint32_t kACTStudyNameHash = UINT32_C(3460185587);

  static constexpr char kLegacyStudyName[] = "LegacyStudy";
  static constexpr uint32_t kLegacyStudyNameHash = UINT32_C(1271574520);

  static constexpr char kModeBStudyName[] = "ModeBStudy";
  static constexpr uint32_t kModeBStudyNameHash = UINT32_C(4194840450);

};

class StorageAccess_RequestOutcome final : public ::dwa::internal::DwaEntryBuilderBase {
 public:
  explicit StorageAccess_RequestOutcome();
  StorageAccess_RequestOutcome(StorageAccess_RequestOutcome&&);
  StorageAccess_RequestOutcome& operator=(StorageAccess_RequestOutcome&&);
  ~StorageAccess_RequestOutcome() override;

  static const char kEntryName[];
  static constexpr uint64_t kEntryNameHash = UINT64_C(15758157606466713991);

  StorageAccess_RequestOutcome& SetContent(std::string_view content);


  static const char kOutcomeName[];
  static constexpr uint64_t kOutcomeNameHash = UINT64_C(14948499774890759507);
  StorageAccess_RequestOutcome& SetOutcome(int64_t value);


};


}  // namespace dwa::builders

#endif  // COMPONENTS_METRICS_DWA_DWA_BUILDERS_H
