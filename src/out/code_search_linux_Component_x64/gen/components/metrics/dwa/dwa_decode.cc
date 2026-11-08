// Generated from gen_private_metrics_builders.py.  DO NOT EDIT!
// source: dwa.xml

#include "components/metrics/dwa/dwa_decode.h"
#include "components/metrics/dwa/dwa_builders.h"

namespace dwa::builders {

std::map<uint64_t, EntryDecoder> CreateDecodeMap() {
  return {

    {
      UINT64_C(16449939275883443053),
      {
        BrowsingTopics_Result::kEntryName,
        {

    {BrowsingTopics_Result::kRealTopicCountNameHash, BrowsingTopics_Result::kRealTopicCountName},

        },
        {

        }
      }
    },

    {
      UINT64_C(10084375266486398523),
      {
        DwaTestMetric::kEntryName,
        {

    {DwaTestMetric::kHasVideoNameHash, DwaTestMetric::kHasVideoName},

    {DwaTestMetric::kLatencyNameHash, DwaTestMetric::kLatencyName},

        },
        {

    {DwaTestMetric::kACTStudyNameHash, DwaTestMetric::kACTStudyName},

    {DwaTestMetric::kLegacyStudyNameHash, DwaTestMetric::kLegacyStudyName},

    {DwaTestMetric::kModeBStudyNameHash, DwaTestMetric::kModeBStudyName},

        }
      }
    },

    {
      UINT64_C(15758157606466713991),
      {
        StorageAccess_RequestOutcome::kEntryName,
        {

    {StorageAccess_RequestOutcome::kOutcomeNameHash, StorageAccess_RequestOutcome::kOutcomeName},

        },
        {

        }
      }
    },

  };
}

}  // namespace dwa::builders
