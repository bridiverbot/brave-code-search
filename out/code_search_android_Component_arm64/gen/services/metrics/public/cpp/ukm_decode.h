
// Generated from gen_builders.py.  DO NOT EDIT!
// source: ukm.xml

#ifndef SERVICES_METRICS_PUBLIC_CPP_UKM_DECODE_H
#define SERVICES_METRICS_PUBLIC_CPP_UKM_DECODE_H

#include <cstdint>

#include "base/containers/flat_map.h"
#include "base/no_destructor.h"

namespace ukm {
namespace builders {

typedef base::flat_map<uint64_t, const char*> MetricDecodeMap;
struct EntryDecoder {
  const char* name;
  MetricDecodeMap metric_map;
};
typedef base::flat_map<uint64_t, EntryDecoder> DecodeMap;
const DecodeMap& GetDecodeMap();

}  // namespace builders
}  // namespace ukm

#endif  // SERVICES_METRICS_PUBLIC_CPP_UKM_DECODE_H
