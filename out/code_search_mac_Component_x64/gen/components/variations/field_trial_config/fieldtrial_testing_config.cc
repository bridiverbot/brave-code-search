// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE SCHEMA DEFINITION AND DESCRIPTION IN
//   field_trial_testing_config_schema.json
//   fieldtrial_testing_config.json
// using json_to_struct.py. DO NOT EDIT.

#include "fieldtrial_testing_config.h"

namespace variations {


const char* const array_kFieldTrialConfig_enable_features_528[] = {
      "ZstdForCrossSiteSpeculationRulesPrefetch",
};
const Study::Platform array_kFieldTrialConfig_platforms_583[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_582[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_583,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_528,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_527[] = {
      "ZeroSuggestPrefetchDebouncing",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_176[] = {
      {
        "ZeroSuggestPrefetchDebounceDelay",
        "300",
      },
      {
        "ZeroSuggestPrefetchDebounceFromLastRun",
        "true",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_582[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_581[] = {
    {
      "Enabled_300ms_FromLastRun",
      array_kFieldTrialConfig_platforms_582,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_176,
      array_kFieldTrialConfig_enable_features_527,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_disable_features_38[] = {
      "XSLT",
};
const char* const array_kFieldTrialConfig_enable_features_526[] = {
      "XSLTSpecialTrial",
};
const Study::Platform array_kFieldTrialConfig_platforms_581[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_580[] = {
    {
      "Disabled",
      array_kFieldTrialConfig_platforms_581,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_526,
      array_kFieldTrialConfig_disable_features_38,
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_525[] = {
      "XMLRustForNonXslt",
};
const Study::Platform array_kFieldTrialConfig_platforms_580[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_579[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_580,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_525,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_524[] = {
      "XMLParsingRust",
};
const Study::Platform array_kFieldTrialConfig_platforms_579[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_578[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_579,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_524,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_disable_features_37[] = {
      "WidevinePersistentLicenseSupport",
};
const Study::Platform array_kFieldTrialConfig_platforms_578[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_577[] = {
    {
      "Disabled_M140",
      array_kFieldTrialConfig_platforms_578,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      {},
      array_kFieldTrialConfig_disable_features_37,
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_523[] = {
      "HappinessTrackingSurveysForDesktopWhatsNew",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_175[] = {
      {
        "en_site_id",
        "6bnVh68QF0ugnJ3q1cK0NQxjpCFS",
      },
      {
        "probability",
        "0.01",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_577[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_576[] = {
    {
      "Enabled_en_20241016",
      array_kFieldTrialConfig_platforms_577,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_175,
      array_kFieldTrialConfig_enable_features_523,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_disable_features_36[] = {
      "BreakoutBoxConversionWithoutSinkSignal",
};
const char* const array_kFieldTrialConfig_enable_features_522[] = {
      "VTVideoEncodeAcceleratorOpaqueRgbSharedImageEncode",
      "WebRtcMacSharedImageEncode",
};
const Study::Platform array_kFieldTrialConfig_platforms_576[] = {
      Study::PLATFORM_MAC,
};
const char* const array_kFieldTrialConfig_disable_features_35[] = {
      "BreakoutBoxConversionWithoutSinkSignal",
      "MediaFoundationD3DVideoProcessing",
      "MediaFoundationSharedImageEncode",
};
const char* const array_kFieldTrialConfig_enable_features_521[] = {
      "WebrtcAcceleratedScaling",
};
const Study::Platform array_kFieldTrialConfig_platforms_575[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_575[] = {
    {
      "Enabled_acc_scaling",
      array_kFieldTrialConfig_platforms_575,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_521,
      array_kFieldTrialConfig_disable_features_35,
      nullptr,
      {},
      {},
      {},
      {},
    },
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_576,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_522,
      array_kFieldTrialConfig_disable_features_36,
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_520[] = {
      "BypassOutdatedSurfaceActivation",
      "DeferHistoryBackendInit",
      "DeferLayoutDuringBrowserStartup",
      "DeferSessionStorageScavengingOnStartup",
      "DeferSpellcheckInitialization",
      "InitialWebUI",
      "InitialWebUISurfaceSync",
      "InitialWebUIWithoutExtensions",
      "InitialWebUIWithoutSpellCheckForNtp",
      "InitialWebUIWithoutTranslateForNtp",
      "LazyKeyedServiceInstantiation",
      "OmniboxAimPopupDeferCreation",
      "OmniboxWebUIPopupDeferCreation",
      "PerDependencyDeadlines",
      "PrioritizeResizeTaskRunnerOnStartup",
      "SendGPUChannelEarly",
      "SkipIPCChannelPausingForNonGuests",
      "WebUIBackForwardButton",
      "WebUIBundledCodeCache",
      "WebUIBypassMojoConnections",
      "WebUIHomeButton",
      "WebUIInProcessResourceLoadingV2",
      "WebUIReloadButton",
      "WebUISplitTabsButton",
      "WebUIToolbarFrameEvictionOptOut",
      "WebiumMetricsMapping",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_174[] = {
      {
        "WebUIReloadButtonBypassLoaderThrottles",
        "true",
      },
      {
        "WebUIReloadButtonDeferBrowserViewShow",
        "false",
      },
      {
        "WebUIReloadButtonKeepVisibleUntilPaint",
        "true",
      },
      {
        "WebUIReloadButtonRestartUnresponsive",
        "true",
      },
      {
        "WebUIReloadButtonRestartUnresponsiveRenderersTimeout",
        "5s",
      },
      {
        "config",
        "CjsKOUV2ZW50TGF0ZW5jeS5HZXN0dXJlU2Nyb2xsVXBkYXRlLlRvdWNoc2NyZWVuLlRvdGFsTGF0ZW5jeQooCiZQYWdlTG9hZC5JbnRlcmFjdGl2ZVRpbWluZy5JbnB1dERlbGF5Mwo4CjZHcmFwaGljcy5TbW9vdGhuZXNzLlBlcmNlbnREcm9wcGVkRnJhbWVzMy5BbGxTZXF1ZW5jZXM=",
      },
      {
        "deadline_in_frames",
        "12000",
      },
      {
        "high_stream_priority",
        "true",
      },
      {
        "renderer_commit_delay_ms",
        "100000",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_574[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_574[] = {
    {
      "EnabledWithSurfaceSync_20260902",
      array_kFieldTrialConfig_platforms_574,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_174,
      array_kFieldTrialConfig_enable_features_520,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_519[] = {
      "ScriptStreamingForNonHTTP",
      "WebUIInProcessResourceLoading",
};
const Study::Platform array_kFieldTrialConfig_platforms_573[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_573[] = {
    {
      "Enabled_WithScriptStreaming",
      array_kFieldTrialConfig_platforms_573,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_519,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_518[] = {
      "WebRtcVoiceIsolationDenoiser",
};
const Study::Platform array_kFieldTrialConfig_platforms_572[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_572[] = {
    {
      "Enabled_Dogfood",
      array_kFieldTrialConfig_platforms_572,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_518,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_517[] = {
      "WebRtcNeuralResidualEchoEstimationAsyncInit",
};
const Study::Platform array_kFieldTrialConfig_platforms_571[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_571[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_571,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_517,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_173[] = {
      {
        "max_post_decode_queue_size",
        "10",
      },
      {
        "reduce_steady_state_queue_size_threshold",
        "20",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_570[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_570[] = {
    {
      "min_pacing:0ms,max_decode_queue_size:8,",
      array_kFieldTrialConfig_platforms_570,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_173,
      {},
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const Study::Platform array_kFieldTrialConfig_platforms_569[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_569[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_569,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      {},
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const Study::Platform array_kFieldTrialConfig_platforms_568[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_568[] = {
    {
      "Enabled,_20260702",
      array_kFieldTrialConfig_platforms_568,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      {},
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const Study::Platform array_kFieldTrialConfig_platforms_567[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_567[] = {
    {
      "Enabled,_20230607_BETA",
      array_kFieldTrialConfig_platforms_567,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      {},
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const Study::Platform array_kFieldTrialConfig_platforms_566[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_566[] = {
    {
      "Enabled,sampling_interval:1000ms",
      array_kFieldTrialConfig_platforms_566,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      {},
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const Study::Platform array_kFieldTrialConfig_platforms_565[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_565[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_565,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      {},
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const Study::Platform array_kFieldTrialConfig_platforms_564[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_564[] = {
    {
      "2_V1",
      array_kFieldTrialConfig_platforms_564,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      {},
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const Study::Platform array_kFieldTrialConfig_platforms_563[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_563[] = {
    {
      "Enabled,max_queue_time:75ms,_V4",
      array_kFieldTrialConfig_platforms_563,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      {},
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const Study::Platform array_kFieldTrialConfig_platforms_562[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_562[] = {
    {
      "Enabled,_20221205",
      array_kFieldTrialConfig_platforms_562,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      {},
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const Study::Platform array_kFieldTrialConfig_platforms_561[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_561[] = {
    {
      "262144,_V1",
      array_kFieldTrialConfig_platforms_561,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      {},
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const Study::Platform array_kFieldTrialConfig_platforms_560[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_560[] = {
    {
      "Enabled,_20251209",
      array_kFieldTrialConfig_platforms_560,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      {},
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const Study::Platform array_kFieldTrialConfig_platforms_559[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_559[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_559,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      {},
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const Study::Platform array_kFieldTrialConfig_platforms_558[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_558[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_558,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      {},
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const Study::Platform array_kFieldTrialConfig_platforms_557[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_557[] = {
    {
      "num_stddev_delay_clamp:5,num_stddev_delay_outlier:2,num_stddev_size_outlier:2,estimate_noise_when_congested:false,_20230118_BETA",
      array_kFieldTrialConfig_platforms_557,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      {},
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const Study::Platform array_kFieldTrialConfig_platforms_556[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_556[] = {
    {
      "Enabled,ResolveStunHostnameForFamily:true,PreferGlobalIPv6Address:true,DiversifyIpv6Interfaces:true,_20220929",
      array_kFieldTrialConfig_platforms_556,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      {},
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const Study::Platform array_kFieldTrialConfig_platforms_555[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_555[] = {
    {
      "Enabled_20260625",
      array_kFieldTrialConfig_platforms_555,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      {},
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const Study::Platform array_kFieldTrialConfig_platforms_554[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_554[] = {
    {
      "enabled:true,low_overhead_lower_bound:500ms,low_overhead_upper_bound:1500ms,high_overhead_lower_bound:500ms,high_overhead_upper_bound:1500ms,asynchronous_evaluation:true",
      array_kFieldTrialConfig_platforms_554,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      {},
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const Study::Platform array_kFieldTrialConfig_platforms_553[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_553[] = {
    {
      "enabled:true,_V1",
      array_kFieldTrialConfig_platforms_553,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      {},
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const Study::Platform array_kFieldTrialConfig_platforms_552[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_552[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_552,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      {},
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const Study::Platform array_kFieldTrialConfig_platforms_551[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_551[] = {
    {
      "network_state_probe_duration:200ms,network_state_interval:10s,min_probe_delta:20ms,est_lower_than_network_ratio:0.7,skip_if_est_larger_than_fraction_of_max:0.9,alr_scale:1.5,step_size:1.5",
      array_kFieldTrialConfig_platforms_551,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      {},
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const Study::Platform array_kFieldTrialConfig_platforms_550[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_550[] = {
    {
      "Enabled:true,InstantUpperBoundBwBalance:100kbps,InherentLossUpperBoundBwBalance:100kbps,LossThresholdOfHighBandwidthPreference:0.2,UseByteLossRate:true,ObservationWindowSize:15,BwRampupUpperBoundFactor:1.5,BwRampupUpperBoundInHoldFactor:1.2,BwRampupUpperBoundHoldThreshold:1.3,BoundBestCandidate:true,UseInStartPhase:true,LowerBoundByAckedRateFactor:1.0,HoldDurationFactor:2.0,PaddingDuration:2000ms,PaceAtLossBasedEstimate:true",
      array_kFieldTrialConfig_platforms_550,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      {},
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const Study::Platform array_kFieldTrialConfig_platforms_549[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_549[] = {
    {
      "burst:20ms,_V1",
      array_kFieldTrialConfig_platforms_549,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      {},
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const Study::Platform array_kFieldTrialConfig_platforms_548[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_548[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_548,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      {},
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const Study::Platform array_kFieldTrialConfig_platforms_547[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_547[] = {
    {
      "enable_stable_playout_delay:true,reinit_after_expands:1000",
      array_kFieldTrialConfig_platforms_547,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      {},
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const Study::Platform array_kFieldTrialConfig_platforms_546[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_546[] = {
    {
      "Enabled,switch_to_agc2:true,target_range_min_dbfs:-50,target_range_max_dbfs:-30,max_gain_db:50,initial_gain_db:15,max_gain_change_db_per_second:6,headroom_db:5,enable_clipping_predictor:true,disallow_transient_suppressor_usage:true,_20230614",
      array_kFieldTrialConfig_platforms_546,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      {},
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const Study::Platform array_kFieldTrialConfig_platforms_545[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_545[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_545,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      {},
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const Study::Platform array_kFieldTrialConfig_platforms_544[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_544[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_544,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      {},
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const Study::Platform array_kFieldTrialConfig_platforms_543[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_543[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_543,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      {},
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const Study::Platform array_kFieldTrialConfig_platforms_542[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_542[] = {
    {
      "0.1",
      array_kFieldTrialConfig_platforms_542,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      {},
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const Study::Platform array_kFieldTrialConfig_platforms_541[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_541[] = {
    {
      "1",
      array_kFieldTrialConfig_platforms_541,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      {},
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_516[] = {
      "WebHistoryUseNewApi",
};
const Study::Platform array_kFieldTrialConfig_platforms_540[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_540[] = {
    {
      "Enabled_20260617",
      array_kFieldTrialConfig_platforms_540,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_516,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_515[] = {
      "WebGPUService",
};
const Study::Platform array_kFieldTrialConfig_platforms_539[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_539[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_539,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_515,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_514[] = {
      "OffscreenCanvasPropagateVisibility",
      "WebGLDeleteBuffersInBackground",
      "WebGLDiscardBackBuffer",
};
const Study::Platform array_kFieldTrialConfig_platforms_538[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_538[] = {
    {
      "Enabled_20260828",
      array_kFieldTrialConfig_platforms_538,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_514,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_513[] = {
      "WebContentsDiscard",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_172[] = {
      {
        "urgent_discard_ignore_workers",
        "true",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_537[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_537[] = {
    {
      "EnabledIgnoreWorkers",
      array_kFieldTrialConfig_platforms_537,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_172,
      array_kFieldTrialConfig_enable_features_513,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_512[] = {
      "VoiceSearchCoherenceComposeboxes",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_171[] = {
      {
        "VoiceSearchCoherenceComposeboxCobrowsingOnly",
        "true",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_536[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_536[] = {
    {
      "CobrowsingOnly_EmergencyKillSwitch",
      array_kFieldTrialConfig_platforms_536,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_171,
      array_kFieldTrialConfig_enable_features_512,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_511[] = {
      "VisitedURLRankingService",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_170[] = {
      {
        "VisitedURLRankingFetchDurationInHoursParam",
        "168",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_535[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_535[] = {
    {
      "VisitedURLRankingService",
      array_kFieldTrialConfig_platforms_535,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_170,
      array_kFieldTrialConfig_enable_features_511,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_510[] = {
      "HappinessTrackingSurveysForDownloadJourney",
      "ViewDownloadedFileFromAppMenuJourney",
      "ViewDownloadedFileJourney",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_169[] = {
      {
        "en_site_id",
        "mL46CjHkE0ugnJ3q1cK0NsAQJpTP",
      },
      {
        "probability",
        "1.0",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_534[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_534[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_534,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_169,
      array_kFieldTrialConfig_enable_features_510,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_509[] = {
      "VerifyQWACs",
};
const Study::Platform array_kFieldTrialConfig_platforms_533[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_533[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_533,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_509,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_508[] = {
      "VerifyDidCommitParams",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_168[] = {
      {
        "gesture",
        "true",
      },
      {
        "http_status_code",
        "true",
      },
      {
        "intended_as_new_entry",
        "true",
      },
      {
        "is_overriding_user_agent",
        "true",
      },
      {
        "method",
        "true",
      },
      {
        "origin",
        "true",
      },
      {
        "post_id",
        "true",
      },
      {
        "should_replace_current_entry",
        "true",
      },
      {
        "should_update_history",
        "true",
      },
      {
        "url",
        "true",
      },
      {
        "url_is_unreachable",
        "true",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_532[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_532[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_532,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_168,
      array_kFieldTrialConfig_enable_features_508,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_507[] = {
      "VariationsStickyNoopTest",
};
const Study::Platform array_kFieldTrialConfig_platforms_531[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_531[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_531,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_507,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_506[] = {
      "VariationsRuntimeMutability",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_167[] = {
      {
        "rotate_uma_log",
        "true",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_530[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_530[] = {
    {
      "EnabledWithRotate",
      array_kFieldTrialConfig_platforms_530,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_167,
      array_kFieldTrialConfig_enable_features_506,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_505[] = {
      "HistogramDenylist",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_166[] = {
      {
        "histogram_denylist",
        "\"\"",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_529[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_529[] = {
    {
      "Enabled_20260901",
      array_kFieldTrialConfig_platforms_529,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_166,
      array_kFieldTrialConfig_enable_features_505,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_504[] = {
      "VTVideoEncodeAcceleratorCalculatePSNR",
};
const Study::Platform array_kFieldTrialConfig_platforms_528[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_528[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_528,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_504,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_503[] = {
      "V8Flag_turbolev",
};
const Study::Platform array_kFieldTrialConfig_platforms_527[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_527[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_527,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_503,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_502[] = {
      "V8Flag_sqrt_allocation_limits",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_165[] = {
      {
        "sqrt_allocation_limits_factor",
        "80",
      },
      {
        "sqrt_allocation_limits_max_growing_factor",
        "4",
      },
      {
        "sqrt_allocation_limits_min_growing_factor",
        "1.1",
      },
      {
        "sqrt_allocation_limits_minimal_factor",
        "20",
      },
      {
        "sqrt_allocation_limits_slow_factor",
        "80",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_526[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_526[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_526,
      {},
      std::nullopt,
      true,
      nullptr,
      array_kFieldTrialConfig_params_165,
      array_kFieldTrialConfig_enable_features_502,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_501[] = {
      "V8Flag_sparkplug_plus",
};
const Study::Platform array_kFieldTrialConfig_platforms_525[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_525[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_525,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_501,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_disable_features_34[] = {
      "V8SlowHistograms",
};
const Study::Platform array_kFieldTrialConfig_platforms_524[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_524[] = {
    {
      "Control",
      array_kFieldTrialConfig_platforms_524,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      {},
      array_kFieldTrialConfig_disable_features_34,
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_500[] = {
      "V8SideStepTransitions",
};
const Study::Platform array_kFieldTrialConfig_platforms_523[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_523[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_523,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_500,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_499[] = {
      "V8PreconfigureOldGen",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_164[] = {
      {
        "V8PreconfigureOldGenSize",
        "16",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_522[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_522[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_522,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_164,
      array_kFieldTrialConfig_enable_features_499,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const Study::Platform array_kFieldTrialConfig_platforms_521[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_521[] = {
    {
      "Disabled",
      array_kFieldTrialConfig_platforms_521,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      {},
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_498[] = {
      "V8MaxValidPolymorphicMapCount",
};
const Study::Platform array_kFieldTrialConfig_platforms_520[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_520[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_520,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_498,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_disable_features_33[] = {
      "ForwardMemoryPressureToBlinkIsolates",
};
const char* const array_kFieldTrialConfig_enable_features_497[] = {
      "V8Flag_freeze_forces_marking_finalization",
      "V8Flag_memory_reducer_limit_based",
};
const Study::Platform array_kFieldTrialConfig_platforms_519[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_519[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_519,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_497,
      array_kFieldTrialConfig_disable_features_33,
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_496[] = {
      "UseCaseLongerInputWindow",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_163[] = {
      {
        "use_case_longer_input_window_extension_ms",
        "100ms",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_518[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_518[] = {
    {
      "Enabled_100_2026_04_20",
      array_kFieldTrialConfig_platforms_518,
      {},
      std::nullopt,
      true,
      nullptr,
      array_kFieldTrialConfig_params_163,
      array_kFieldTrialConfig_enable_features_496,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_495[] = {
      "V8Flag_homomorphic_ic",
};
const Study::Platform array_kFieldTrialConfig_platforms_517[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_517[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_517,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_495,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_494[] = {
      "V8Flag_intl_date_time_pattern_generator_cache_eviction",
};
const Study::Platform array_kFieldTrialConfig_platforms_516[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_516[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_516,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_494,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_493[] = {
      "UtfConversionAsciiFastPath",
};
const Study::Platform array_kFieldTrialConfig_platforms_515[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_515[] = {
    {
      "Enabled_20260810",
      array_kFieldTrialConfig_platforms_515,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_493,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_492[] = {
      "UserValueDefaultBrowserStrings",
};
const Study::Platform array_kFieldTrialConfig_platforms_514[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_514[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_514,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_492,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_491[] = {
      "UseSCContentSharingPicker",
};
const Study::Platform array_kFieldTrialConfig_platforms_513[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_513[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_513,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_491,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_490[] = {
      "UseRustCborWriter",
};
const Study::Platform array_kFieldTrialConfig_platforms_512[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_512[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_512,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_490,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_489[] = {
      "UseRustCborParser",
};
const Study::Platform array_kFieldTrialConfig_platforms_511[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_511[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_511,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_489,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_488[] = {
      "PersistentCacheCollectionWalMode",
      "UsePersistentCacheForCodeCache",
};
const Study::Platform array_kFieldTrialConfig_platforms_510[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_510[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_510,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_488,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_487[] = {
      "UseAutomaticSyncTokenManagement",
};
const Study::Platform array_kFieldTrialConfig_platforms_509[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_509[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_509,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_487,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_486[] = {
      "UploadReportOnProfileOpen",
};
const Study::Platform array_kFieldTrialConfig_platforms_508[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_508[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_508,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_486,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_485[] = {
      "UnthrottleAsyncTouchMoves",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_162[] = {
      {
        "policy",
        "unthrottled_always",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_507[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_507[] = {
    {
      "Enabled_UnthrottledAlways",
      array_kFieldTrialConfig_platforms_507,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_162,
      array_kFieldTrialConfig_enable_features_485,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_484[] = {
      "IPH_SignInBenefits",
      "ReplaceSyncPromosWithSignInPromos",
};
const Study::Platform array_kFieldTrialConfig_platforms_506[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_506[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_506,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_484,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_483[] = {
      "GlobalPrivacyControlApi",
      "UniversalOptOutSettings",
};
const Study::Platform array_kFieldTrialConfig_platforms_505[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_505[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_505,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_483,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_482[] = {
      "ApiGlicAccessFromGoogleWebpage",
};
const Study::Platform array_kFieldTrialConfig_platforms_504[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_504[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_504,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_482,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_481[] = {
      "TrustedVaultSharedRecoveryFactorsAndEncryption",
};
const Study::Platform array_kFieldTrialConfig_platforms_503[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_503[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_503,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_481,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_480[] = {
      "TrustedVaultDesktopUnlock",
};
const Study::Platform array_kFieldTrialConfig_platforms_502[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_502[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_502,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_480,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_479[] = {
      "TrustSafetySentimentSurveyV2",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_161[] = {
      {
        "browsing-data-probability",
        "0.0",
      },
      {
        "browsing-data-trigger-id",
        "1iSgej9Tq0ugnJ3q1cK0QwXZ12oo",
      },
      {
        "control-group-probability",
        "0.0",
      },
      {
        "control-group-trigger-id",
        "CXMbsBddw0ugnJ3q1cK0QJM1Hu8m",
      },
      {
        "download-warning-ui-probability",
        "0.0",
      },
      {
        "download-warning-ui-trigger-id",
        "7SS4sg4oR0ugnJ3q1cK0TNvCvd8U",
      },
      {
        "max-time-to-prompt",
        "60m",
      },
      {
        "min-session-time",
        "30s",
      },
      {
        "min-time-to-prompt",
        "2m",
      },
      {
        "ntp-visits-max-range",
        "4",
      },
      {
        "ntp-visits-min-range",
        "2",
      },
      {
        "password-check-probability",
        "0.0",
      },
      {
        "password-check-trigger-id",
        "Xd54YDVNJ0ugnJ3q1cK0UYBRruNH",
      },
      {
        "password-protection-ui-probability",
        "0.0",
      },
      {
        "password-protection-ui-trigger-id",
        "bQBRghu5w0ugnJ3q1cK0RrqdqVRP",
      },
      {
        "privacy-guide-probability",
        "0.0",
      },
      {
        "privacy-guide-trigger-id",
        "tqR1rjeDu0ugnJ3q1cK0P9yJEq7Z",
      },
      {
        "probability",
        "0.0",
      },
      {
        "safe-browsing-interstitial-probability",
        "0.0",
      },
      {
        "safe-browsing-interstitial-trigger-id",
        "Z9pSWP53n0ugnJ3q1cK0Y6YkGRpU",
      },
      {
        "safety-check-probability",
        "0.0",
      },
      {
        "safety-check-trigger-id",
        "YSDfPVMnX0ugnJ3q1cK0RxEhwkay",
      },
      {
        "safety-hub-interaction-probability",
        "0.0",
      },
      {
        "safety-hub-interaction-trigger-id",
        "TZq2S4frt0ugnJ3q1cK0Q5Yd4YJM",
      },
      {
        "safety-hub-notification-probability",
        "0.0",
      },
      {
        "safety-hub-notification-trigger-id",
        "kJV17f8Lv0ugnJ3q1cK0Nptk37ct",
      },
      {
        "trusted-surface-probability",
        "0.0",
      },
      {
        "trusted-surface-time",
        "5s",
      },
      {
        "trusted-surface-trigger-id",
        "CMniDmzgE0ugnJ3q1cK0U6PaEn1f",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_501[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_501[] = {
    {
      "Enabled_20240212",
      array_kFieldTrialConfig_platforms_501,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_161,
      array_kFieldTrialConfig_enable_features_479,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_478[] = {
      "TrustSafetySentimentSurvey",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_160[] = {
      {
        "max-time-to-prompt",
        "60m",
      },
      {
        "min-time-to-prompt",
        "2m",
      },
      {
        "ntp-visits-max-range",
        "4",
      },
      {
        "ntp-visits-min-range",
        "2",
      },
      {
        "privacy-sandbox-3-consent-accept-probability",
        "0.2",
      },
      {
        "privacy-sandbox-3-consent-accept-trigger-id",
        "5t9KNsR4e0ugnJ3q1cK0RPfRpsbm",
      },
      {
        "privacy-sandbox-3-consent-decline-probability",
        "0.2",
      },
      {
        "privacy-sandbox-3-consent-decline-trigger-id",
        "P5svv2BbH0ugnJ3q1cK0YhTWZkiM",
      },
      {
        "privacy-sandbox-3-notice-dismiss-probability",
        "0.2",
      },
      {
        "privacy-sandbox-3-notice-dismiss-trigger-id",
        "2gMg6iHpn0ugnJ3q1cK0XyL2C2EX",
      },
      {
        "privacy-sandbox-3-notice-ok-probability",
        "0.2",
      },
      {
        "privacy-sandbox-3-notice-ok-trigger-id",
        "vBraRD9GZ0ugnJ3q1cK0T1owvGGa",
      },
      {
        "privacy-sandbox-3-notice-settings-probability",
        "0.2",
      },
      {
        "privacy-sandbox-3-notice-settings-trigger-id",
        "WZpnNehvi0ugnJ3q1cK0Nsdcf1Vf",
      },
      {
        "privacy-settings-probability",
        "0.0",
      },
      {
        "probability",
        "1.0",
      },
      {
        "transactions-probability",
        "0.0",
      },
      {
        "trusted-surface-probability",
        "0.0",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_500[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_500[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_500,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_160,
      array_kFieldTrialConfig_enable_features_478,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_477[] = {
      "TruncateSearchUrlOq",
      "TruncateSearchUrlQ",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_159[] = {
      {
        "truncate_search_url_oq_length",
        "1024",
      },
      {
        "truncate_search_url_q_length",
        "52224",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_499[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_499[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_499,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_159,
      array_kFieldTrialConfig_enable_features_477,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_476[] = {
      "TreesInViz",
};
const Study::Platform array_kFieldTrialConfig_platforms_498[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_498[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_498,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_476,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_475[] = {
      "TranslateLanguageSearchUI",
};
const Study::Platform array_kFieldTrialConfig_platforms_497[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_497[] = {
    {
      "Enabled_20260528",
      array_kFieldTrialConfig_platforms_497,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_475,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_474[] = {
      "TranslateElementExperimentFeatures",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_158[] = {
      {
        "ef",
        "ests,eadt",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_496[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_496[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_496,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_158,
      array_kFieldTrialConfig_enable_features_474,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_473[] = {
      "TrackEmptyRendererProcessesForReuse",
      "TransientKeepAlivePolicy",
};
const Study::Platform array_kFieldTrialConfig_platforms_495[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_495[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_495,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_473,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_472[] = {
      "TrackAnimatedSourcesForInheritedProperties",
};
const Study::Platform array_kFieldTrialConfig_platforms_494[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_494[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_494,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_472,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_disable_features_32[] = {
      "BrowsingTopics",
};
const Study::Platform array_kFieldTrialConfig_platforms_493[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_493[] = {
    {
      "Disabled",
      array_kFieldTrialConfig_platforms_493,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      {},
      array_kFieldTrialConfig_disable_features_32,
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_471[] = {
      "ThrottleMainFrameTo60Hz",
      "UrgentMainFrameForInput",
};
const Study::Platform array_kFieldTrialConfig_platforms_492[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_492[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_492,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_471,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_470[] = {
      "ThrottleRepeatedNoDamageFrames",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_157[] = {
      {
        "repeated_no_damage_frame_throttling_threshold1",
        "360",
      },
      {
        "repeated_no_damage_frame_throttling_threshold2",
        "60",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_491[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_491[] = {
    {
      "Enabled_20260903",
      array_kFieldTrialConfig_platforms_491,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_157,
      array_kFieldTrialConfig_enable_features_470,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_469[] = {
      "ThreeDSecureTelemetry",
};
const Study::Platform array_kFieldTrialConfig_platforms_490[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_490[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_490,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_469,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_468[] = {
      "ThreadPoolForegroundBlockingTimeouts",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_156[] = {
      {
        "BlockedWorkersPoll",
        "600ms",
      },
      {
        "MayBlockThreshold",
        "500ms",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_489[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_489[] = {
    {
      "Enabled_Moderate",
      array_kFieldTrialConfig_platforms_489,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_156,
      array_kFieldTrialConfig_enable_features_468,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_467[] = {
      "ColorIdCssStyleSheetOptimization",
      "ThemeChangeOptimization",
};
const Study::Platform array_kFieldTrialConfig_platforms_488[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_488[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_488,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_467,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_466[] = {
      "TextSafetyScanLanguageDetection",
};
const Study::Platform array_kFieldTrialConfig_platforms_487[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_487[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_487,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_466,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_465[] = {
      "TaskInfoMetricsMac",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_155[] = {
      {
        "task_info_metrics_mac_downsampling_factor",
        "20",
      },
      {
        "task_info_metrics_mac_sampling_period",
        "30s",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_486[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_486[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_486,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_155,
      array_kFieldTrialConfig_enable_features_465,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_464[] = {
      "TabSearchPerformanceImprovements",
};
const Study::Platform array_kFieldTrialConfig_platforms_485[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_485[] = {
    {
      "Enabled_20260903",
      array_kFieldTrialConfig_platforms_485,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_464,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_463[] = {
      "HappinessTrackingSurveysForTabSearchJourney",
      "TabSearchJourney",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_154[] = {
      {
        "en_site_id",
        "AD85aHvUu0ugnJ3q1cK0UCSRt6XZ",
      },
      {
        "probability",
        "1.0",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_484[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_484[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_484,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_154,
      array_kFieldTrialConfig_enable_features_463,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_462[] = {
      "TabHoverCardImages",
};
const Study::Platform array_kFieldTrialConfig_platforms_483[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_483[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_483,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_462,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_461[] = {
      "TabGroupsFocusing",
};
const Study::Platform array_kFieldTrialConfig_platforms_482[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_482[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_482,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_461,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_460[] = {
      "TabGroupColorRefresh",
};
const Study::Platform array_kFieldTrialConfig_platforms_481[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_481[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_481,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_460,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_459[] = {
      "SyncUsePropagatedAccessToken",
};
const Study::Platform array_kFieldTrialConfig_platforms_480[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_480[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_480,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_459,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_458[] = {
      "SyncIncreaseNudgeDelayForSingleClient",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_153[] = {
      {
        "SyncIncreaseNudgeDelayForSingleClientFactor",
        "2.0",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_479[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_479[] = {
    {
      "EnabledFactor2",
      array_kFieldTrialConfig_platforms_479,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_153,
      array_kFieldTrialConfig_enable_features_458,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_457[] = {
      "SuspiciousSiteWarningSurvey",
      "SuspiciousSiteWarnings",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_152[] = {
      {
        "SuspiciousSiteWarningSurveyHeedTriggerId",
        "BjcqKTVFY0ugnJ3q1cK0VD1dNzUU",
      },
      {
        "SuspiciousSiteWarningSurveyProceedTriggerId",
        "qKoRRzn180ugnJ3q1cK0WX7PXscX",
      },
      {
        "probability",
        "1.0",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_478[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_478[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_478,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_152,
      array_kFieldTrialConfig_enable_features_457,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_456[] = {
      "StreamlineRendererInit",
};
const Study::Platform array_kFieldTrialConfig_platforms_477[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_477[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_477,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_456,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_455[] = {
      "SplitViewHorizontal",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_151[] = {
      {
        "split_view_horizontal_direct_tab_access",
        "true",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_476[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_476[] = {
    {
      "EnabledDirectTabAccess_20260902",
      array_kFieldTrialConfig_platforms_476,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_151,
      array_kFieldTrialConfig_enable_features_455,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_454[] = {
      "SplitCacheByNetworkIsolationKey",
};
const Study::Platform array_kFieldTrialConfig_platforms_475[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_475[] = {
    {
      "EnableFeatureForTests",
      array_kFieldTrialConfig_platforms_475,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_454,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_453[] = {
      "DisablePartialStorageCleanupForGPUDiskCache",
      "LogicalClearHttpCache",
};
const Study::Platform array_kFieldTrialConfig_platforms_474[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_474[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_474,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_453,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_452[] = {
      "SpeculativeServiceWorkerWarmUp",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_150[] = {
      {
        "sw_warm_up_duration",
        "5m",
      },
      {
        "sw_warm_up_max_count",
        "5",
      },
      {
        "sw_warm_up_on_idle_timeout",
        "false",
      },
      {
        "sw_warm_up_request_queue_length",
        "100",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_473[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_473[] = {
    {
      "Enabled_05m_05c_20250214",
      array_kFieldTrialConfig_platforms_473,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_150,
      array_kFieldTrialConfig_enable_features_452,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_451[] = {
      "PreventDuplicateImageDecodes",
      "SpeculativeImageDecodes",
};
const Study::Platform array_kFieldTrialConfig_platforms_472[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_472[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_472,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_451,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_450[] = {
      "SodaXnnpackDelegate",
};
const Study::Platform array_kFieldTrialConfig_platforms_471[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_471[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_471,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_450,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_449[] = {
      "GlicSelectionPrompt",
};
const Study::Platform array_kFieldTrialConfig_platforms_470[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_470[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_470,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_449,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_448[] = {
      "SkipPostTaskForCallbacks",
};
const Study::Platform array_kFieldTrialConfig_platforms_469[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_469[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_469,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_448,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_447[] = {
      "SkipModerateMemoryPressureLevelMac",
};
const Study::Platform array_kFieldTrialConfig_platforms_468[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_468[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_468,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_447,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_446[] = {
      "SkipListAccountsWithoutGaiaCookies",
};
const Study::Platform array_kFieldTrialConfig_platforms_467[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_467[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_467,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_446,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_445[] = {
      "SkipInitialForcedScrollbar",
};
const Study::Platform array_kFieldTrialConfig_platforms_466[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_466[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_466,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_445,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_444[] = {
      "SkipImageClassificationScoringForNonPageLoadTriggers",
};
const Study::Platform array_kFieldTrialConfig_platforms_465[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_465[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_465,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_444,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_443[] = {
      "SkillsAndExtensionsAppMenu",
      "SkillsWebViewV2Enabled",
};
const Study::Platform array_kFieldTrialConfig_platforms_464[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_464[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_464,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_443,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_442[] = {
      "SkillsEnabled",
};
const Study::Platform array_kFieldTrialConfig_platforms_463[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_463[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_463,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_442,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_441[] = {
      "SkiaGraphiteUsePersistentCache",
};
const Study::Platform array_kFieldTrialConfig_platforms_462[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_462[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_462,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_441,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_440[] = {
      "SkiaGraphiteSmallPathAtlas",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_149[] = {
      {
        "min_path_size_for_msaa",
        "32",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_461[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_461[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_461,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_149,
      array_kFieldTrialConfig_enable_features_440,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_439[] = {
      "SkiaGraphiteDrawListLayer",
};
const Study::Platform array_kFieldTrialConfig_platforms_460[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_460[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_460,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_439,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_438[] = {
      "SkiaGraphite",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_148[] = {
      {
        "dawn_backend_validation",
        "false",
      },
      {
        "dawn_skip_validation",
        "true",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_459[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_459[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_459,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_148,
      array_kFieldTrialConfig_enable_features_438,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_437[] = {
      "SingleVideoFrameRateThrottling",
};
const Study::Platform array_kFieldTrialConfig_platforms_458[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_458[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_458,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_437,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_436[] = {
      "SingleAxisScrollContainers",
};
const Study::Platform array_kFieldTrialConfig_platforms_457[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_457[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_457,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_436,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_435[] = {
      "SimdutfBase64Encode",
};
const Study::Platform array_kFieldTrialConfig_platforms_456[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_456[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_456,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_435,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_434[] = {
      "WipeChoicePrefsOnMissingDefaultSearchEngine",
};
const Study::Platform array_kFieldTrialConfig_platforms_455[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_455[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_455,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_434,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_433[] = {
      "DesktopScreenshots",
};
const Study::Platform array_kFieldTrialConfig_platforms_454[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_454[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_454,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_433,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_432[] = {
      "DataSharingJoinOnly",
};
const Study::Platform array_kFieldTrialConfig_platforms_453[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_453[] = {
    {
      "JoinOnlyEnabled",
      array_kFieldTrialConfig_platforms_453,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_432,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_431[] = {
      "SharedMemorySystemProfileMinidump",
};
const Study::Platform array_kFieldTrialConfig_platforms_452[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_452[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_452,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_431,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_430[] = {
      "IPH_DesktopSharedHighlighting",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_147[] = {
      {
        "availability",
        "any",
      },
      {
        "event_1",
        "name:iph_desktop_shared_highlighting_trigger;comparator:==0;window:7;storage:360",
      },
      {
        "event_trigger",
        "name:iph_desktop_shared_highlighting_trigger;comparator:<5;window:360;storage:360",
      },
      {
        "event_used",
        "name:iph_desktop_shared_highlighting_used;comparator:<2;window:360;storage:360",
      },
      {
        "session_rate",
        "any",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_451[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_451[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_451,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_147,
      array_kFieldTrialConfig_enable_features_430,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_429[] = {
      "ShareEventArgsOnDispatch",
};
const Study::Platform array_kFieldTrialConfig_platforms_450[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_450[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_450,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_429,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_428[] = {
      "ServiceWorkerSyntheticResponse",
      "URLLoaderUseProvidedResponseBodyStream",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_146[] = {
      {
        "off_main_thread",
        "network_service",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_449[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_449[] = {
    {
      "EnabledWithNetworkServiceDelegation",
      array_kFieldTrialConfig_platforms_449,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_146,
      array_kFieldTrialConfig_enable_features_428,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_427[] = {
      "ServiceWorkerRaceNetworkRequestFallbackOnDisconnect",
};
const Study::Platform array_kFieldTrialConfig_platforms_448[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_448[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_448,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_427,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_426[] = {
      "ServiceWorkerRaceNetworkRequestDeprecateTwoPhaseWrite",
};
const Study::Platform array_kFieldTrialConfig_platforms_447[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_447[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_447,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_426,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_425[] = {
      "ServiceWorkerDumpWithoutCrashingOnStorageKeyMismatch",
};
const Study::Platform array_kFieldTrialConfig_platforms_446[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_446[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_446,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_425,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_424[] = {
      "ServiceWorkerDatabaseDoomOnMissingNextId",
};
const Study::Platform array_kFieldTrialConfig_platforms_445[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_445[] = {
    {
      "Enabled_20260901",
      array_kFieldTrialConfig_platforms_445,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_424,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_423[] = {
      "SensorsAllowAskBlockPermissionModel",
};
const Study::Platform array_kFieldTrialConfig_platforms_444[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_444[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_444,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_423,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_422[] = {
      "SearchSettingsWithMoreEngines",
};
const Study::Platform array_kFieldTrialConfig_platforms_443[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_443[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_443,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_422,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_421[] = {
      "SearchNavigationPrefetch",
};
const Study::Platform array_kFieldTrialConfig_platforms_442[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_442[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_442,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_421,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_420[] = {
      "SearchEngineExplicitChoiceDialog",
      "SearchEngineUnconditionalDialog",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_145[] = {
      {
        "unlimited_shows",
        "false",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_441[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_441[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_441,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_145,
      array_kFieldTrialConfig_enable_features_420,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_419[] = {
      "HappinessTrackingSurveysForDesktopScheduledRestart",
      "ScheduledRestart",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_144[] = {
      {
        "en_site_id",
        "QSt77E8pH0ugnJ3q1cK0Rf8H914u",
      },
      {
        "probability",
        "1.0",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_440[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_440[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_440,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_144,
      array_kFieldTrialConfig_enable_features_419,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_418[] = {
      "SafetyHubUnusedPermissionRevocationForAllSurfaces",
};
const Study::Platform array_kFieldTrialConfig_platforms_439[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_439[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_439,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_418,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_417[] = {
      "SafetyHub",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_143[] = {
      {
        "background-password-check-interval",
        "2d",
      },
      {
        "password-check-mon-weight",
        "5",
      },
      {
        "password-check-sat-weight",
        "9",
      },
      {
        "password-check-sun-weight",
        "9",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_438[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_438[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_438,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_143,
      array_kFieldTrialConfig_enable_features_417,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_416[] = {
      "SafetyCheckUnusedSitePermissions",
};
const Study::Platform array_kFieldTrialConfig_platforms_437[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_437[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_437,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_416,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_415[] = {
      "SafeBrowsingWaitForDnsForRealTimeLookup",
};
const Study::Platform array_kFieldTrialConfig_platforms_436[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_436[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_436,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_415,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_414[] = {
      "SafeBrowsingLocalListsUseSBv5",
};
const Study::Platform array_kFieldTrialConfig_platforms_435[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_435[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_435,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_414,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_413[] = {
      "SafeBrowsingExtensionTelemetrySearchHijackingSignal",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_142[] = {
      {
        "HeuristicCheckIntervalSeconds",
        "28800",
      },
      {
        "HeuristicThreshold",
        "2",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_434[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_434[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_434,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_142,
      array_kFieldTrialConfig_enable_features_413,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_412[] = {
      "SafeBrowsingDailyPhishingReportsLimit",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_141[] = {
      {
        "kMaxReportsPerIntervalESB",
        "10",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_433[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_433[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_433,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_141,
      array_kFieldTrialConfig_enable_features_412,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_411[] = {
      "SQLitePersistentCookieStoreEarlyInit",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_140[] = {
      {
        "check_disk",
        "true",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_432[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_432[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_432,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_140,
      array_kFieldTrialConfig_enable_features_411,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_410[] = {
      "SPCLocaleValidation",
};
const Study::Platform array_kFieldTrialConfig_platforms_431[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_431[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_431,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_410,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_409[] = {
      "RustyIcoFeature",
};
const Study::Platform array_kFieldTrialConfig_platforms_430[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_430[] = {
    {
      "RustyIcoExperiment",
      array_kFieldTrialConfig_platforms_430,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_409,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_408[] = {
      "RustPhishingModelSetter",
};
const Study::Platform array_kFieldTrialConfig_platforms_429[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_429[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_429,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_408,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_disable_features_31[] = {
      "ComposeboxRichImageSuggestionsOmnibox",
};
const char* const array_kFieldTrialConfig_enable_features_407[] = {
      "ComposeboxRichImageSuggestionsRealbox",
};
const Study::Platform array_kFieldTrialConfig_platforms_428[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_428[] = {
    {
      "DirectNavigationInRealbox_20260928",
      array_kFieldTrialConfig_platforms_428,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_407,
      array_kFieldTrialConfig_disable_features_31,
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_406[] = {
      "RestrictPendingInputEventType",
};
const Study::Platform array_kFieldTrialConfig_platforms_427[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_427[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_427,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_406,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_405[] = {
      "InvalidateResourcesOnSizeChange",
      "ResourcePoolPreferExactSizeReuse",
};
const Study::Platform array_kFieldTrialConfig_platforms_426[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_426[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_426,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_405,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_404[] = {
      "RequiresLoadIgnoreLimitsForDomWindowsOnly",
};
const Study::Platform array_kFieldTrialConfig_platforms_425[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_425[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_425,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_404,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_403[] = {
      "RemoveHangoutsExtension",
};
const Study::Platform array_kFieldTrialConfig_platforms_424[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_424[] = {
    {
      "Enabled_20261012",
      array_kFieldTrialConfig_platforms_424,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_403,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_402[] = {
      "RemoteActorCredentialSharing",
};
const Study::Platform array_kFieldTrialConfig_platforms_423[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_423[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_423,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_402,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_401[] = {
      "ReduceMojoURLLoaderFactoryCloning",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_139[] = {
      {
        "UseLazyURLLoaderFactoryForServiceWorkerFallback",
        "true",
      },
      {
        "UseLazyURLLoaderFactoryForSubresourceProxying",
        "true",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_422[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_422[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_422,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_139,
      array_kFieldTrialConfig_enable_features_401,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_400[] = {
      "RedWarningSurvey",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_138[] = {
      {
        "RedWarningSurveyDidProceedFilter",
        "TRUE,FALSE",
      },
      {
        "RedWarningSurveyTriggerId",
        "ZdMdCoDc50ugnJ3q1cK0VwqVnKb6",
      },
      {
        "probability",
        "1.0",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_421[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_421[] = {
    {
      "RedInterstitial_20241212",
      array_kFieldTrialConfig_platforms_421,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_138,
      array_kFieldTrialConfig_enable_features_400,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_399[] = {
      "RecordLockAcquisitionTime",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_137[] = {
      {
        "RecordLockAcquisitionTimeAllowedThreads",
        "CrBrowserMain,CrRendererMain,CrGpuMain,VizCompositor,Compositor,BrowserIO,NetworkService,GPU.ForegroundWorker,GPU.BackgroundWorker,Renderer.ForegroundWorker,Renderer.BackgroundWorker,Browser.ForegroundWorker,Browser.BackgroundWorker",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_420[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_420[] = {
    {
      "Enabled_20260721",
      array_kFieldTrialConfig_platforms_420,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_137,
      array_kFieldTrialConfig_enable_features_399,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_398[] = {
      "ReauthSkipIdentifierPage",
};
const Study::Platform array_kFieldTrialConfig_platforms_419[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_419[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_419,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_398,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_397[] = {
      "RealboxVirtualFocusNavigation",
};
const Study::FormFactor array_kFieldTrialConfig_form_factors_3[] = {
      Study::DESKTOP,
};
const Study::Platform array_kFieldTrialConfig_platforms_418[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_418[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_418,
      array_kFieldTrialConfig_form_factors_3,
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_397,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_396[] = {
      "ReadAnythingMenuShuffleExperiment",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_136[] = {
      {
        "read_anything_menu_shuffle_group_name",
        "MenuShuffleSeparation",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_417[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_417[] = {
    {
      "EnabledWithSeparation",
      array_kFieldTrialConfig_platforms_417,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_136,
      array_kFieldTrialConfig_enable_features_396,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_395[] = {
      "HappinessTrackingSurveysForReadAnythingJourney",
      "ReadAnythingJourney",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_135[] = {
      {
        "en_site_id",
        "rmkq5NvrA0ugnJ3q1cK0SNirMLq1",
      },
      {
        "probability",
        "1.0",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_416[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_416[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_416,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_135,
      array_kFieldTrialConfig_enable_features_395,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_394[] = {
      "ReadAnythingImprovedUi",
};
const Study::Platform array_kFieldTrialConfig_platforms_415[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_415[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_415,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_394,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_393[] = {
      "ReadAnythingDistillerRefactor",
};
const Study::Platform array_kFieldTrialConfig_platforms_414[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_414[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_414,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_393,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_392[] = {
      "ReadAnythingDistillationQualityEvaluation",
};
const Study::Platform array_kFieldTrialConfig_platforms_413[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_413[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_413,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_392,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_391[] = {
      "QuicSocketSendBufferSize",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_134[] = {
      {
        "QuicSocketSendBufferSizeParam",
        "1048576",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_412[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_412[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_412,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_134,
      array_kFieldTrialConfig_enable_features_391,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_390[] = {
      "PushMessagingGcmEndpointWebpushPath",
};
const Study::Platform array_kFieldTrialConfig_platforms_411[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_411[] = {
    {
      "Enabled_Dogfood",
      array_kFieldTrialConfig_platforms_411,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_390,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_389[] = {
      "PushMessagingDisallowSenderIDs",
};
const Study::Platform array_kFieldTrialConfig_platforms_410[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_410[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_410,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_389,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_disable_features_30[] = {
      "AdInterestGroupAPI",
      "Fledge",
};
const Study::Platform array_kFieldTrialConfig_platforms_409[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_409[] = {
    {
      "Disabled_20260803",
      array_kFieldTrialConfig_platforms_409,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      {},
      array_kFieldTrialConfig_disable_features_30,
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_388[] = {
      "ProgressiveAccessibilityPhase2",
};
const Study::Platform array_kFieldTrialConfig_platforms_408[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_408[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_408,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_388,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_387[] = {
      "ProfilesReordering",
};
const Study::Platform array_kFieldTrialConfig_platforms_407[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_407[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_407,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_387,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_386[] = {
      "ProcessHtmlDataImmediately",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_133[] = {
      {
        "first",
        "true",
      },
      {
        "main",
        "true",
      },
      {
        "rest",
        "true",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_406[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_406[] = {
    {
      "AllChunks",
      array_kFieldTrialConfig_platforms_406,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_133,
      array_kFieldTrialConfig_enable_features_386,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_385[] = {
      "ProactivePasswordProtection",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_132[] = {
      {
        "CsdProactivePasswordProtectionSampleRate",
        "1.0",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_405[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_405[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_405,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_132,
      array_kFieldTrialConfig_enable_features_385,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_384[] = {
      "PrivateInsightsFeature",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_131[] = {
      {
        "fcp_enable_privacy_id_v2",
        "true",
      },
      {
        "fcp_population_name_contextual_cues",
        "chrome/private_insights/contextual_cues",
      },
      {
        "fcp_server_uri",
        "https://federatedcompute-pa.googleapis.com/",
      },
      {
        "fcp_use_attestation_transparency_verifier",
        "true",
      },
      {
        "upload_interval",
        "10m",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_404[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_404[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_404,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_131,
      array_kFieldTrialConfig_enable_features_384,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_383[] = {
      "PrioritizeSafeBrowsingNavigationCallbacks",
};
const Study::Platform array_kFieldTrialConfig_platforms_403[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_403[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_403,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_383,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_382[] = {
      "PrioritizeMainFrameNavigationNetworkResponse",
};
const Study::Platform array_kFieldTrialConfig_platforms_402[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_402[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_402,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_382,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_381[] = {
      "IPH_PriceTrackingPageActionIconLabelFeature",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_130[] = {
      {
        "availability",
        "any",
      },
      {
        "event_trigger",
        "name:price_tracking_page_action_icon_label_in_trigger;comparator:==0;window:1;storage:365",
      },
      {
        "event_used",
        "name:used;comparator:any;window:365;storage:365",
      },
      {
        "session_rate",
        "any",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_401[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_401[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_401,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_130,
      array_kFieldTrialConfig_enable_features_381,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_380[] = {
      "PriceTrackingSubscriptionServiceLocaleKey",
      "ShoppingList",
};
const Study::Platform array_kFieldTrialConfig_platforms_400[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_400[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_400,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_380,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_379[] = {
      "PrewarmDisableOnStartup",
      "PrewarmZeroSuggestTrigger",
};
const Study::Platform array_kFieldTrialConfig_platforms_399[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_399[] = {
    {
      "Enabled_WithDisableOnStartup",
      array_kFieldTrialConfig_platforms_399,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_379,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_378[] = {
      "PreventPasswordManagerOnFederatedLogin",
};
const Study::Platform array_kFieldTrialConfig_platforms_398[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_398[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_398,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_378,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_377[] = {
      "Prerender2EarlyDocumentLifecycleUpdate",
};
const Study::Platform array_kFieldTrialConfig_platforms_397[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_397[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_397,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_377,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_376[] = {
      "ApplySearchEngineTypeMigration",
      "PrepopulatedEnginesMigration",
};
const Study::Platform array_kFieldTrialConfig_platforms_396[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_396[] = {
    {
      "Enabled_20260320",
      array_kFieldTrialConfig_platforms_396,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_376,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_375[] = {
      "PreloadingRespectUserAgentOverride",
      "RespectUserAgentOverrideInSearchPrefetch",
};
const Study::Platform array_kFieldTrialConfig_platforms_395[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_395[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_395,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_375,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_374[] = {
      "PreloadActivationReportWithExtensionInterception",
};
const Study::Platform array_kFieldTrialConfig_platforms_394[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_394[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_394,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_374,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_373[] = {
      "PrefetchMultipleActiveSetSizeLimitForBase",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_129[] = {
      {
        "prefetch_multiple_active_set_size_limit_for_base_value",
        "2",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_393[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_393[] = {
    {
      "Enabled_2",
      array_kFieldTrialConfig_platforms_393,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_129,
      array_kFieldTrialConfig_enable_features_373,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_372[] = {
      "PrefetchCancelUnrelatedPrefetch",
      "PrefetchMatchResolverUnblockAsync",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_128[] = {
      {
        "prefetch_cancel_unrelated_prefetch_cancel_policy",
        "NotServable",
      },
      {
        "unblock_async_policy",
        "AsyncBlocked",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_392[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_392[] = {
    {
      "Enabled_Cancel_NotServable",
      array_kFieldTrialConfig_platforms_392,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_128,
      array_kFieldTrialConfig_enable_features_372,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_371[] = {
      "BookmarkTriggerForPrefetch",
};
const Study::Platform array_kFieldTrialConfig_platforms_391[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_391[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_391,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_371,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_370[] = {
      "PrefetchActivationBeacon",
      "PrerenderActivationBeacon",
};
const Study::Platform array_kFieldTrialConfig_platforms_390[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_390[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_390,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_370,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_369[] = {
      "PreferWarmRendererProcess",
};
const Study::Platform array_kFieldTrialConfig_platforms_389[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_389[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_389,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_369,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_368[] = {
      "PreemptiveSodaDownload",
};
const Study::Platform array_kFieldTrialConfig_platforms_388[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_388[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_388,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_368,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_367[] = {
      "PredictionModelComponentDelivery",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_127[] = {
      {
        "targets",
        "20",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_387[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_387[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_387,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_127,
      array_kFieldTrialConfig_enable_features_367,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_366[] = {
      "PreconnectToSearch",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_126[] = {
      {
        "skip_in_background",
        "true",
      },
      {
        "startup_delay_ms",
        "5000",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_386[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_386[] = {
    {
      "EnabledWithStartupDelayForegroundOnly",
      array_kFieldTrialConfig_platforms_386,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_126,
      array_kFieldTrialConfig_enable_features_366,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_365[] = {
      "PreconnectManagerDirectFastPath",
};
const Study::Platform array_kFieldTrialConfig_platforms_385[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_385[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_385,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_365,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_364[] = {
      "PreconnectFromKeyedService",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_125[] = {
      {
        "IdleTimeoutInSeconds",
        "30",
      },
      {
        "MaxPreconnectRetryInterval",
        "30",
      },
      {
        "MaxShortSessionThreshold",
        "30s",
      },
      {
        "PingIntervalInSeconds",
        "27",
      },
      {
        "QuicConnectionOptions",
        "ECCP",
      },
      {
        "run_on_otr",
        "true",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_384[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_384[] = {
    {
      "EnabledWithOTRtrue_20250724_Stable",
      array_kFieldTrialConfig_platforms_384,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_125,
      array_kFieldTrialConfig_enable_features_364,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_363[] = {
      "PrecomputeSiteInfo",
};
const Study::Platform array_kFieldTrialConfig_platforms_383[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_383[] = {
    {
      "Enabled_20260127",
      array_kFieldTrialConfig_platforms_383,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_363,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_362[] = {
      "PreFirstRunDesktopRefresh",
};
const Study::Platform array_kFieldTrialConfig_platforms_382[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_382[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_382,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_362,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_361[] = {
      "AddTLSServerHandshakePadding",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_124[] = {
      {
        "AddTLSServerHandshakePaddingBytes",
        "0",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_381[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_381[] = {
    {
      "Enabled_0",
      array_kFieldTrialConfig_platforms_381,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_124,
      array_kFieldTrialConfig_enable_features_361,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_disable_features_29[] = {
      "PolicyBlocklistProceedUntilResponse",
};
const Study::Platform array_kFieldTrialConfig_platforms_380[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_380[] = {
    {
      "Holdback",
      array_kFieldTrialConfig_platforms_380,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      {},
      array_kFieldTrialConfig_disable_features_29,
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_360[] = {
      "HappinessTrackingSurveysForPinExtensionJourney",
      "PinExtensionJourney",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_123[] = {
      {
        "en_site_id",
        "8RJXcn5t20ugnJ3q1cK0VLDGHPAz",
      },
      {
        "probability",
        "1.0",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_379[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_379[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_379,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_123,
      array_kFieldTrialConfig_enable_features_360,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_359[] = {
      "PervasiveSharedDictionaries",
};
const Study::Platform array_kFieldTrialConfig_platforms_378[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_378[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_378,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_359,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_358[] = {
      "PersonalContext",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_122[] = {
      {
        "personal_context_enable_fetch_context",
        "true",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_377[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_377[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_377,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_122,
      array_kFieldTrialConfig_enable_features_358,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_357[] = {
      "PermissionsGestureGatedPrompts",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_121[] = {
      {
        "exclude_same_origin_navigations",
        "true",
      },
      {
        "mute_geolocation",
        "true",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_376[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_376[] = {
    {
      "MuteGeolocation",
      array_kFieldTrialConfig_platforms_376,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_121,
      array_kFieldTrialConfig_enable_features_357,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_356[] = {
      "PermissionsAIv4",
};
const Study::Platform array_kFieldTrialConfig_platforms_375[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_375[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_375,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_356,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_355[] = {
      "PdfUseSkiaRenderer",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_120[] = {
      {
        "premultiplied-alpha",
        "true",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_374[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_374[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_374,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_120,
      array_kFieldTrialConfig_enable_features_355,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_354[] = {
      "PdfInk2",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_119[] = {
      {
        "text-annotations-extra-styles",
        "true",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_373[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_373[] = {
    {
      "enabled",
      array_kFieldTrialConfig_platforms_373,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_119,
      array_kFieldTrialConfig_enable_features_354,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_353[] = {
      "PdfInfoBar",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_118[] = {
      {
        "trigger",
        "startup",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_372[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_372[] = {
    {
      "MostlyLaunched",
      array_kFieldTrialConfig_platforms_372,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_118,
      array_kFieldTrialConfig_enable_features_353,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_352[] = {
      "PdfGetSaveDataInBlocks",
};
const Study::Platform array_kFieldTrialConfig_platforms_371[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_371[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_371,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_352,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_351[] = {
      "PdfAccessibilityHeuristicEnhancements",
};
const Study::Platform array_kFieldTrialConfig_platforms_370[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_370[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_370,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_351,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_350[] = {
      "PaymentRequestEnforceLNAWithClientSecurityState",
};
const Study::Platform array_kFieldTrialConfig_platforms_369[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_369[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_369,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_350,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_349[] = {
      "PaymentHandlerCameraAccessUx",
};
const Study::Platform array_kFieldTrialConfig_platforms_368[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_368[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_368,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_349,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_348[] = {
      "Path2DPaintCache",
};
const Study::Platform array_kFieldTrialConfig_platforms_367[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_367[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_367,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_348,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_disable_features_28[] = {
      "ThreeButtonPasswordSaveDialog",
};
const char* const array_kFieldTrialConfig_enable_features_347[] = {
      "IPH_PasswordsSavePrimingPromo",
      "IPH_PasswordsSaveRecoveryPromo",
      "PasswordSaveUpdateDropdownMenuExperiment",
};
const Study::Platform array_kFieldTrialConfig_platforms_366[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_366[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_366,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_347,
      array_kFieldTrialConfig_disable_features_28,
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_346[] = {
      "PasswordSaveInContextErrorResolution",
};
const Study::Platform array_kFieldTrialConfig_platforms_365[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_365[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_365,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_346,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_345[] = {
      "PasswordManualFallbackSecurityChecks",
};
const Study::Platform array_kFieldTrialConfig_platforms_364[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_364[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_364,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_345,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_344[] = {
      "PasswordCompromiseWarningInDetailsCard",
};
const Study::Platform array_kFieldTrialConfig_platforms_363[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_363[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_363,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_344,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_343[] = {
      "PasskeyUnlockPromo",
};
const Study::Platform array_kFieldTrialConfig_platforms_362[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_362[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_362,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_343,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_342[] = {
      "PasskeyUnlockErrorUi",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_117[] = {
      {
        "passkey_unlock_ui_experiment_arm",
        "text_with_unlock_wording",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_361[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_361[] = {
    {
      "Enabled_with_unlock_wording_20260212",
      array_kFieldTrialConfig_platforms_361,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_117,
      array_kFieldTrialConfig_enable_features_342,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_disable_features_27[] = {
      "PassageEmbedder",
};
const Study::Platform array_kFieldTrialConfig_platforms_360[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_360[] = {
    {
      "Disabled",
      array_kFieldTrialConfig_platforms_360,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      {},
      array_kFieldTrialConfig_disable_features_27,
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_341[] = {
      "PassHistogramSharedMemoryOnLaunch",
};
const Study::Platform array_kFieldTrialConfig_platforms_359[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_359[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_359,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_341,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_340[] = {
      "PartitionConnectionsByNetworkIsolationKey",
};
const Study::Platform array_kFieldTrialConfig_platforms_358[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_358[] = {
    {
      "EnableFeatureForTests",
      array_kFieldTrialConfig_platforms_358,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_340,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_339[] = {
      "PartitionAllocUnretainedDanglingPtr",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_116[] = {
      {
        "mode",
        "dump_without_crashing",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_357[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_357[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_357,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_116,
      array_kFieldTrialConfig_enable_features_339,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_338[] = {
      "PartitionAllocTighterAlignedAllocBound",
};
const Study::Platform array_kFieldTrialConfig_platforms_356[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_356[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_356,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_338,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_disable_features_26[] = {
      "PartitionAllocSchedulerLoopQuarantineTaskObserverForBrowserUIThread",
};
const char* const array_kFieldTrialConfig_enable_features_337[] = {
      "PartitionAllocSchedulerLoopQuarantine",
      "PartitionAllocWithAdvancedChecks",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_115[] = {
      {
        "PartitionAllocSchedulerLoopQuarantineConfig",
        "{\"*\":{\"amsc\":{\"branch-capacity-in-bytes\":524288,\"enable-quarantine\":true,\"enable-zapping\":true,\"leak-on-destruction\":true}},\"browser\":{\"main\":{\"branch-capacity-in-bytes\":2147483647,\"enable-quarantine\":true,\"enable-task-controlled-purge\":true,\"enable-zapping\":true,\"leak-on-destruction\":false,\"pause-in-between-tasks\":true}},\"gpu-process\":{\"*\":{\"branch-capacity-in-bytes\":2147483647,\"enable-quarantine\":true,\"enable-task-controlled-purge\":true,\"enable-zapping\":true,\"leak-on-destruction\":false,\"pause-in-between-tasks\":true}},\"renderer\":{\"main\":{\"branch-capacity-in-bytes\":2147483647,\"enable-quarantine\":true,\"enable-task-controlled-purge\":true,\"enable-zapping\":true,\"leak-on-destruction\":false,\"pause-in-between-tasks\":true}}}",
      },
      {
        "enabled-processes",
        "all-processes",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_355[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_355[] = {
    {
      "enabled_unlimited_20260420",
      array_kFieldTrialConfig_platforms_355,
      {},
      std::nullopt,
      true,
      nullptr,
      array_kFieldTrialConfig_params_115,
      array_kFieldTrialConfig_enable_features_337,
      array_kFieldTrialConfig_disable_features_26,
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_disable_features_25[] = {
      "PartitionAllocSortActiveSlotSpans",
};
const char* const array_kFieldTrialConfig_enable_features_336[] = {
      "PartitionAllocMemoryReclaimer",
      "PartitionAllocSortSmallerSlotSpanFreeLists",
      "PartitionAllocStraightenLargerSlotSpanFreeLists",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_114[] = {
      {
        "interval",
        "8s",
      },
      {
        "mode",
        "only-when-unprovisioning",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_354[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_354[] = {
    {
      "Interval_8sec",
      array_kFieldTrialConfig_platforms_354,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_114,
      array_kFieldTrialConfig_enable_features_336,
      array_kFieldTrialConfig_disable_features_25,
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_335[] = {
      "PartitionAllocBackupRefPtr",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_113[] = {
      {
        "enabled-processes",
        "all-processes",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_353[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_353[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_353,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_113,
      array_kFieldTrialConfig_enable_features_335,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_334[] = {
      "PaintHoldingForIframes",
};
const Study::Platform array_kFieldTrialConfig_platforms_352[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_352[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_352,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_334,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_333[] = {
      "PageInfoAboutThisSiteMoreLangs",
};
const Study::Platform array_kFieldTrialConfig_platforms_351[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_351[] = {
    {
      "Enabled_231129",
      array_kFieldTrialConfig_platforms_351,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_333,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_332[] = {
      "PageContentCache",
};
const Study::Platform array_kFieldTrialConfig_platforms_350[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_350[] = {
    {
      "Enabled_20260826",
      array_kFieldTrialConfig_platforms_350,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_332,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_331[] = {
      "PageActionsPrioritySelector",
};
const Study::Platform array_kFieldTrialConfig_platforms_349[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_349[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_349,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_331,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_330[] = {
      "AiModePageActionOptimization",
      "LensOverlayHomeworkPageActionFocusOptimization",
};
const Study::Platform array_kFieldTrialConfig_platforms_348[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_348[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_348,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_330,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_329[] = {
      "PageActionAnchoredMessageEasyDismiss",
};
const Study::Platform array_kFieldTrialConfig_platforms_347[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_347[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_347,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_329,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_disable_features_24[] = {
      "PMSidePanelLoadingVoter",
};
const char* const array_kFieldTrialConfig_enable_features_328[] = {
      "PMWithheldFromViewVoter",
};
const Study::Platform array_kFieldTrialConfig_platforms_346[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_346[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_346,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_328,
      array_kFieldTrialConfig_disable_features_24,
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_327[] = {
      "PMProcessPriorityPolicy",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_112[] = {
      {
        "renderer_high_initial_priority",
        "true",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_345[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_345[] = {
    {
      "PMProcessPriorityPolicy",
      array_kFieldTrialConfig_platforms_345,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_112,
      array_kFieldTrialConfig_enable_features_327,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_326[] = {
      "PMLoadingPageVoterV2",
};
const Study::Platform array_kFieldTrialConfig_platforms_344[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_344[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_344,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_326,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_325[] = {
      "EnableOopPrintDrivers",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_111[] = {
      {
        "EarlyStart",
        "false",
      },
      {
        "JobPrint",
        "true",
      },
      {
        "Sandbox",
        "false",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_343[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_343[] = {
    {
      "Enabled_20230912",
      array_kFieldTrialConfig_platforms_343,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_111,
      array_kFieldTrialConfig_enable_features_325,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_324[] = {
      "OptimizeWebRequestProxyForServiceWorkerAutoPreload",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_110[] = {
      {
        "allow_declarative_net_request",
        "true",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_342[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_342[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_342,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_110,
      array_kFieldTrialConfig_enable_features_324,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_323[] = {
      "OptimizationGuideProactivePersonalizedHintsFetching",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_109[] = {
      {
        "allowed_optimization_types",
        "SHOPPING_DISCOUNTS",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_341[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_341[] = {
    {
      "Enabled_20260625",
      array_kFieldTrialConfig_platforms_341,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_109,
      array_kFieldTrialConfig_enable_features_323,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_322[] = {
      "AdjustIPv6FallbackTime",
      "EnableIntermediateDnsResults",
      "IPv6FallbackBasedOnRTT",
      "OptimisticDnsForTcp",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_108[] = {
      {
        "IPv6FallbackMax",
        "1500ms",
      },
      {
        "IPv6FallbackMin",
        "50ms",
      },
      {
        "IPv6FallbackRTTMultiplier",
        "1.1",
      },
      {
        "fallback_time",
        "100ms",
      },
      {
        "use_stale_connectors",
        "true",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_340[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_340[] = {
    {
      "Enabled_20260709",
      array_kFieldTrialConfig_platforms_340,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_108,
      array_kFieldTrialConfig_enable_features_322,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_321[] = {
      "AdjustQuicSlowTimerDelay",
      "OptimisticDnsForQuic",
      "QuicSlowTimerBasedOnRTT",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_107[] = {
      {
        "QuicSlowTimerDelay",
        "100ms",
      },
      {
        "QuicSlowTimerMax",
        "1500ms",
      },
      {
        "QuicSlowTimerMin",
        "50ms",
      },
      {
        "QuicSlowTimerRTTMultiplier",
        "1.5",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_339[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_339[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_339,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_107,
      array_kFieldTrialConfig_enable_features_321,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_320[] = {
      "OptimizationHints",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_106[] = {
      {
        "max_url_keyed_hint_cache_size",
        "50",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_338[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_338[] = {
    {
      "Enabled_20240625",
      array_kFieldTrialConfig_platforms_338,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_106,
      array_kFieldTrialConfig_enable_features_320,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_319[] = {
      "OptimizationHintsFetchingSRP",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_105[] = {
      {
        "max_urls_for_srp_fetch",
        "10",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_337[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_337[] = {
    {
      "Enabled_20240624",
      array_kFieldTrialConfig_platforms_337,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_105,
      array_kFieldTrialConfig_enable_features_319,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_318[] = {
      "TranslateOpenSettings",
};
const Study::Platform array_kFieldTrialConfig_platforms_336[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_336[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_336,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_318,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_317[] = {
      "OnlyUseWindowResizeHelperOnResize",
};
const Study::Platform array_kFieldTrialConfig_platforms_335[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_335[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_335,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_317,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_316[] = {
      "OnDeviceModelEviction",
      "OnDeviceModelUsageTracking",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_104[] = {
      {
        "retention_period",
        "30d",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_334[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_334[] = {
    {
      "Enabled_20261020",
      array_kFieldTrialConfig_platforms_334,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_104,
      array_kFieldTrialConfig_enable_features_316,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_315[] = {
      "OnDeviceModelConversationBackend",
};
const Study::Platform array_kFieldTrialConfig_platforms_333[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_333[] = {
    {
      "Enabled_20261022",
      array_kFieldTrialConfig_platforms_333,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_315,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_314[] = {
      "OnDeviceModelBackgroundDownload",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_103[] = {
      {
        "allowed_features",
        "PromptApi,WritingAssistanceApi,Summarize",
      },
      {
        "on_device_model_free_space_mb_required_to_background_install",
        "50000",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_332[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_332[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_332,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_103,
      array_kFieldTrialConfig_enable_features_314,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_313[] = {
      "AsyncSpellcheckCustomDictionaryInit",
      "OnDemandSpellcheckInitialization",
};
const Study::Platform array_kFieldTrialConfig_platforms_331[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_331[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_331,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_313,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_312[] = {
      "HideDelegatedFrameHostMac",
};
const Study::Platform array_kFieldTrialConfig_platforms_330[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_330[] = {
    {
      "Enabled_20260730",
      array_kFieldTrialConfig_platforms_330,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_312,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_311[] = {
      "OmniboxWebUIPopupHideOnCreation",
};
const Study::Platform array_kFieldTrialConfig_platforms_329[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_329[] = {
    {
      "Enabled_20260917",
      array_kFieldTrialConfig_platforms_329,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_311,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_310[] = {
      "OmniboxWebUIDeferShowUntilVisualStateReady",
};
const Study::Platform array_kFieldTrialConfig_platforms_328[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_328[] = {
    {
      "Enabled_20260805",
      array_kFieldTrialConfig_platforms_328,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_310,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_309[] = {
      "OmniboxUseShortSuggestPathV1",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_102[] = {
      {
        "OmniboxSuggestPathClient",
        "chrome-omni,chrome,chrome-ntp-action,chrome-cobrowse-compose,chrome-multimodal,chrome-contextual,chrome-android-search-resumption-module,chrome-compose,chrome-mobile-aim",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_327[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_327[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_327,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_102,
      array_kFieldTrialConfig_enable_features_309,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_308[] = {
      "StarterPackIPH",
};
const Study::Platform array_kFieldTrialConfig_platforms_326[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_326[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_326,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_308,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_307[] = {
      "OmniboxOnDeviceTailModel",
};
const Study::Platform array_kFieldTrialConfig_platforms_325[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_325[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_325,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_307,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_306[] = {
      "LogUrlScoringSignals",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_101[] = {
      {
        "enable_scoring_signals_annotators",
        "true",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_324[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_324[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_324,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_101,
      array_kFieldTrialConfig_enable_features_306,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_305[] = {
      "IPH_OmniboxEverywhereLensPromo",
      "OmniboxEverywhere",
};
const Study::Platform array_kFieldTrialConfig_platforms_323[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_323[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_323,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_305,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_304[] = {
      "OmniboxDocumentProvider",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_100[] = {
      {
        "DocumentProviderBackoffDuration",
        "60m",
      },
      {
        "DocumentProviderBackoffOn429",
        "true",
      },
      {
        "DocumentProviderMinQueryLength",
        "5",
      },
      {
        "DocumentProviderScopeBackoffToProfile",
        "true",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_322[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_322[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_322,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_100,
      array_kFieldTrialConfig_enable_features_304,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_303[] = {
      "OmniboxCrossDeviceTabZeroSuggest",
};
const Study::Platform array_kFieldTrialConfig_platforms_321[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_321[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_321,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_303,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_302[] = {
      "OmniboxRemoveSuggestionsFromClipboard",
      "OmniboxUIExperimentMaxAutocompleteMatches",
};
const Study::Platform array_kFieldTrialConfig_platforms_320[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_320[] = {
    {
      "DesktopExperiments",
      array_kFieldTrialConfig_platforms_320,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_302,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const Study::Platform array_kFieldTrialConfig_platforms_319[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_319[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_319,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      {},
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_301[] = {
      "OffloadAcceptCHFrameCheck",
};
const Study::Platform array_kFieldTrialConfig_platforms_318[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_318[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_318,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_301,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_300[] = {
      "DrawQuadSplitLimit",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_99[] = {
      {
        "num_of_splits",
        "8",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_317[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_317[] = {
    {
      "quad_split_limit_8",
      array_kFieldTrialConfig_platforms_317,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_99,
      array_kFieldTrialConfig_enable_features_300,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_299[] = {
      "NtpRealboxCyclingPlaceholders",
};
const Study::FormFactor array_kFieldTrialConfig_form_factors_2[] = {
      Study::DESKTOP,
};
const Study::Platform array_kFieldTrialConfig_platforms_316[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_316[] = {
    {
      "Enabled_20260828",
      array_kFieldTrialConfig_platforms_316,
      array_kFieldTrialConfig_form_factors_2,
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_299,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_298[] = {
      "NtpNextFeatures",
      "NtpScaledActionChips",
      "NtpScaledActionChipsSmall",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_98[] = {
      {
        "AddTabUploadDelayOnActionChipClick",
        "true",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_315[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_315[] = {
    {
      "Enabled_DirectNavigation_AddTab",
      array_kFieldTrialConfig_platforms_315,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_98,
      array_kFieldTrialConfig_enable_features_298,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_297[] = {
      "NtpMostVisitedHighDpiFavicons",
};
const Study::Platform array_kFieldTrialConfig_platforms_314[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_314[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_314,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_297,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_296[] = {
      "NtpSharepointModule",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_97[] = {
      {
        "NtpSharepointModuleDataParam",
        "non-insights",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_313[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_313[] = {
    {
      "Enabled_NonInsights",
      array_kFieldTrialConfig_platforms_313,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_97,
      array_kFieldTrialConfig_enable_features_296,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_295[] = {
      "NtpLazyLoadComposebox",
};
const Study::FormFactor array_kFieldTrialConfig_form_factors_1[] = {
      Study::DESKTOP,
};
const Study::Platform array_kFieldTrialConfig_platforms_312[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_312[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_312,
      array_kFieldTrialConfig_form_factors_1,
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_295,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_294[] = {
      "NtpGoogleLogo26",
};
const Study::FormFactor array_kFieldTrialConfig_form_factors_0[] = {
      Study::DESKTOP,
};
const Study::Platform array_kFieldTrialConfig_platforms_311[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_311[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_311,
      array_kFieldTrialConfig_form_factors_0,
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_294,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_293[] = {
      "ComposeboxUsesChromeComposeClient",
      "NtpComposebox",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_96[] = {
      {
        "ConfigParam",
        "CgIIAxI8CAEQARoXCAAQ4MZbGMAMIMAMKCgyB2ltYWdlLyoiGwiAhK9fEhQucGRmLGFwcGxpY2F0aW9uL3BkZigB",
      },
      {
        "ShowComposeboxZps",
        "true",
      },
      {
        "ShowContextMenu",
        "true",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_310[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_310[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_310,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_96,
      array_kFieldTrialConfig_enable_features_293,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_disable_features_23[] = {
      "NoopRuntimeMutable4",
};
const char* const array_kFieldTrialConfig_enable_features_292[] = {
      "NoopRuntimeMutable3",
};
const Study::Platform array_kFieldTrialConfig_platforms_309[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_309[] = {
    {
      "Enabled_20260731",
      array_kFieldTrialConfig_platforms_309,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_292,
      array_kFieldTrialConfig_disable_features_23,
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_disable_features_22[] = {
      "NoopRuntimeMutable2",
};
const char* const array_kFieldTrialConfig_enable_features_291[] = {
      "NoopRuntimeMutable1",
};
const Study::Platform array_kFieldTrialConfig_platforms_308[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_308[] = {
    {
      "Enabled_20260731",
      array_kFieldTrialConfig_platforms_308,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_291,
      array_kFieldTrialConfig_disable_features_22,
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_disable_features_21[] = {
      "NonStandardAppearanceValueSliderVertical",
};
const Study::Platform array_kFieldTrialConfig_platforms_307[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_307[] = {
    {
      "Disabled",
      array_kFieldTrialConfig_platforms_307,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      {},
      array_kFieldTrialConfig_disable_features_21,
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_290[] = {
      "NoVarySearchCacheLoadOnSeparateTaskRunner",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_95[] = {
      {
        "NoVarySearchCacheLoadTaskRunnerPriority",
        "USER_VISIBLE",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_306[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_306[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_306,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_95,
      array_kFieldTrialConfig_enable_features_290,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_289[] = {
      "VoiceSearchCoherenceSearchbox",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_94[] = {
      {
        "VoiceSearchCoherenceRealboxAutoEndpoint",
        "true",
      },
      {
        "VoiceSearchCoherenceRealboxHelperText",
        "true",
      },
      {
        "VoiceSearchCoherenceSearchboxWithLiveTranscription",
        "true",
      },
};
const Study::FormFactor array_kFieldTrialConfig_form_factors[] = {
      Study::DESKTOP,
};
const Study::Platform array_kFieldTrialConfig_platforms_305[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_305[] = {
    {
      "Arm4_Transcript_AutoEndpoint_20260923",
      array_kFieldTrialConfig_platforms_305,
      array_kFieldTrialConfig_form_factors,
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_94,
      array_kFieldTrialConfig_enable_features_289,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_288[] = {
      "NetworkQualityEstimatorAsyncNotifyHeadersReceived",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_93[] = {
      {
        "defer_notify_headers_until_next_step",
        "false",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_304[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_304[] = {
    {
      "Experiment",
      array_kFieldTrialConfig_platforms_304,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_93,
      array_kFieldTrialConfig_enable_features_288,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_287[] = {
      "TriggerNetworkDataMigration",
};
const Study::Platform array_kFieldTrialConfig_platforms_303[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_303[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_303,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_287,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_disable_features_20[] = {
      "NetTaskScheduler2",
      "NetTaskSchedulerHostResolver",
      "NetworkServicePerPriorityTaskQueues",
};
const char* const array_kFieldTrialConfig_enable_features_286[] = {
      "DrainSpdySessionSynchronouslyOnRemoteEndpointDisconnect",
      "NetTaskScheduler",
};
const Study::Platform array_kFieldTrialConfig_platforms_302[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_302[] = {
    {
      "Enabled_SpdyDrainFix",
      array_kFieldTrialConfig_platforms_302,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_286,
      array_kFieldTrialConfig_disable_features_20,
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_285[] = {
      "KillSpareRenderOnMemoryPressure",
      "MultipleSpareRPHs",
      "SpareRPHKeepOneAliveOnMemoryPressure",
      "SpareRPHUseCriticalMemoryPressure",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_92[] = {
      {
        "count",
        "2",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_301[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_301[] = {
    {
      "Enabled2",
      array_kFieldTrialConfig_platforms_301,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_92,
      array_kFieldTrialConfig_enable_features_285,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_284[] = {
      "MigrateSyncingUserToSignedIn",
};
const Study::Platform array_kFieldTrialConfig_platforms_300[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_300[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_300,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_284,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_283[] = {
      "MenuSimplification",
};
const Study::Platform array_kFieldTrialConfig_platforms_299[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_299[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_299,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_283,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_282[] = {
      "MemoryConsumerForNGShapeCache",
};
const Study::Platform array_kFieldTrialConfig_platforms_298[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_298[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_298,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_282,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_281[] = {
      "MainNodeAnnotations",
};
const Study::Platform array_kFieldTrialConfig_platforms_297[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_297[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_297,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_281,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_280[] = {
      "MagiChromePasskeySignIn",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_91[] = {
      {
        "flow_type",
        "autofill",
      },
      {
        "magichrome_fre_exp_branch",
        "6",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_296[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_296[] = {
    {
      "Autofill",
      array_kFieldTrialConfig_platforms_296,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_91,
      array_kFieldTrialConfig_enable_features_280,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_279[] = {
      "LogOnDeviceMetricsOnStartup",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_90[] = {
      {
        "on_device_startup_metric_delay",
        "3m",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_295[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_295[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_295,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_90,
      array_kFieldTrialConfig_enable_features_279,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_278[] = {
      "LocalNetworkAccessChecks",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_89[] = {
      {
        "LocalNetworkAccessChecksWarn",
        "false",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_294[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_294[] = {
    {
      "EnabledBlocking",
      array_kFieldTrialConfig_platforms_294,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_89,
      array_kFieldTrialConfig_enable_features_278,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_277[] = {
      "LiveCaptionExperimentalLanguages",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_88[] = {
      {
        "available_languages",
        "en-US,fr-FR,it-IT,de-DE,es-ES,ja-JP,hi-IN,pt-BR,ko-KR,pl-PL,th-TH,tr-TR,id-ID,cmn-Hans-CN,cmn-Hant-TW,vi-VN,ru-RU",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_293[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_293[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_293,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_88,
      array_kFieldTrialConfig_enable_features_277,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_276[] = {
      "LensComposeboxIdentityDelegation",
};
const Study::Platform array_kFieldTrialConfig_platforms_292[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_292[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_292,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_276,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_disable_features_19[] = {
      "LegacyKeyRepeatSynthesis",
};
const Study::Platform array_kFieldTrialConfig_platforms_291[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_291[] = {
    {
      "Disabled",
      array_kFieldTrialConfig_platforms_291,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      {},
      array_kFieldTrialConfig_disable_features_19,
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_275[] = {
      "LazyParseInlineStyleSheets",
};
const Study::Platform array_kFieldTrialConfig_platforms_290[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_290[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_290,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_275,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_274[] = {
      "LazyInitializeSpellcheckCharAttribute",
};
const Study::Platform array_kFieldTrialConfig_platforms_289[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_289[] = {
    {
      "Enabled_20260723",
      array_kFieldTrialConfig_platforms_289,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_274,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_273[] = {
      "LazyBlinkTimezoneInit",
};
const Study::Platform array_kFieldTrialConfig_platforms_288[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_288[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_288,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_273,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_272[] = {
      "LazilySetCustomActionCaption",
};
const Study::Platform array_kFieldTrialConfig_platforms_287[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_287[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_287,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_272,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_271[] = {
      "LabelDefaultTooltipFastPath",
};
const Study::Platform array_kFieldTrialConfig_platforms_286[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_286[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_286,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_271,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_270[] = {
      "LRUCacheMemoryConsumer",
};
const Study::Platform array_kFieldTrialConfig_platforms_285[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_285[] = {
    {
      "Enabled_20260929",
      array_kFieldTrialConfig_platforms_285,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_270,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_269[] = {
      "LCPTimingPredictorPrerender2",
};
const Study::Platform array_kFieldTrialConfig_platforms_284[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_284[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_284,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_269,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_268[] = {
      "LCPPLazyLoadImagePreload",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_87[] = {
      {
        "lcpp_preload_lazy_load_image_type",
        "native_lazy_loading",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_283[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_283[] = {
    {
      "EnableWithNativeLazyLoading_20231113",
      array_kFieldTrialConfig_platforms_283,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_87,
      array_kFieldTrialConfig_enable_features_268,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_267[] = {
      "LCPPDeferUnusedPreload",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_86[] = {
      {
        "load_timing",
        "post_task",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_282[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_282[] = {
    {
      "EnableWithPostTask_20240426",
      array_kFieldTrialConfig_platforms_282,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_86,
      array_kFieldTrialConfig_enable_features_267,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_266[] = {
      "IsolateSubframeErrorPages",
};
const Study::Platform array_kFieldTrialConfig_platforms_281[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_281[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_281,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_266,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_265[] = {
      "IPH_SendTabToSelfOmnibox",
      "IPH_SendTabToSelfTutorial",
      "SendTabToSelfDynamicShortcuts",
      "SendTabToSelfEnhancedDesktopUIv2",
      "SendTabToSelfMultiTabShare",
      "SendTabToSelfOpenNativeApp",
      "SendTabToSelfSupportAutoOpenInTabGrid",
      "SyncDisambiguateDeviceNamesWithChannel",
};
const Study::Platform array_kFieldTrialConfig_platforms_280[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_280[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_280,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_265,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_264[] = {
      "InlineLocationSignaling",
      "PlatformAgnosticXGeo",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_85[] = {
      {
        "display_order",
        "DisplayAbove",
      },
      {
        "wording",
        "UseApproximateLocation",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_279[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_279[] = {
    {
      "ApproximateLocationDisplayAbove_20260727",
      array_kFieldTrialConfig_platforms_279,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_85,
      array_kFieldTrialConfig_enable_features_264,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_263[] = {
      "InhibitSQLReleaseCacheMemoryIfNeeded",
};
const Study::Platform array_kFieldTrialConfig_platforms_278[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_278[] = {
    {
      "InhibitSQLReleaseCacheMemoryIfNeeded",
      array_kFieldTrialConfig_platforms_278,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_263,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_262[] = {
      "InhibitMessagePumpWakeupCounter",
};
const Study::Platform array_kFieldTrialConfig_platforms_277[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_277[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_277,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_262,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_261[] = {
      "InfoBarQueuedCountPill",
};
const Study::Platform array_kFieldTrialConfig_platforms_276[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_276[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_276,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_261,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_260[] = {
      "ImageReplacement",
      "Indigo",
      "IndigoComponent",
      "IndigoMetadataKeywordHeuristic",
      "IndigoOpenGlic",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_84[] = {
      {
        "indigo_saved_url",
        "https://www.google.com/saves",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_275[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_275[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_275,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_84,
      array_kFieldTrialConfig_enable_features_260,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_259[] = {
      "IndexedDBConnectionDeduplication",
};
const Study::Platform array_kFieldTrialConfig_platforms_274[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_274[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_274,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_259,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_258[] = {
      "IncreasedCmdBufferParseSlice",
};
const Study::Platform array_kFieldTrialConfig_platforms_273[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_273[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_273,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_258,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_257[] = {
      "ConfigureQuicHints",
      "TryQuicByDefault",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_83[] = {
      {
        "quic_hints",
        "google.com,443,443,www.google.com,443,443",
      },
      {
        "quic_options",
        "ORIG",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_272[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_272[] = {
    {
      "EnabledWithConfigureMinimalQuicHintsWithOriginFrame",
      array_kFieldTrialConfig_platforms_272,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_83,
      array_kFieldTrialConfig_enable_features_257,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_256[] = {
      "ImprovedStartupBestEffortDelay",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_82[] = {
      {
        "StartupDelayIncludesSessionRestore",
        "true",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_271[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_271[] = {
    {
      "EnabledWithSessionRestore",
      array_kFieldTrialConfig_platforms_271,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_82,
      array_kFieldTrialConfig_enable_features_256,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_255[] = {
      "ImportExportFlags",
};
const Study::Platform array_kFieldTrialConfig_platforms_270[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_270[] = {
    {
      "Enabled_Teamfood",
      array_kFieldTrialConfig_platforms_270,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_255,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_254[] = {
      "ImageDescriptionsAlternateRouting",
};
const Study::Platform array_kFieldTrialConfig_platforms_269[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_269[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_269,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_254,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_253[] = {
      "IgnoreIpMatching",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_81[] = {
      {
        "ignore_ip_matching_when_finding_existing_sessions",
        "true",
      },
      {
        "noip_quic_option",
        "NOIP",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_268[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_268[] = {
    {
      "Enabled_NOIP",
      array_kFieldTrialConfig_platforms_268,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_81,
      array_kFieldTrialConfig_enable_features_253,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_252[] = {
      "IgnoreDuplicateNavsOnlyWithUserGesture",
};
const Study::Platform array_kFieldTrialConfig_platforms_267[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_267[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_267,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_252,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_251[] = {
      "IgnoreDuplicateNavs",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_80[] = {
      {
        "duplicate_nav_threshold",
        "3s",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_266[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_266[] = {
    {
      "Enabled_threshold_3s",
      array_kFieldTrialConfig_platforms_266,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_80,
      array_kFieldTrialConfig_enable_features_251,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_250[] = {
      "IdbSqliteOnDiskRollout",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_79[] = {
      {
        "stage",
        "UseSqliteForNewStores",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_265[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_265[] = {
    {
      "UseSqliteForNewStores",
      array_kFieldTrialConfig_platforms_265,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_79,
      array_kFieldTrialConfig_enable_features_250,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_249[] = {
      "UseIcu4xNormalizer",
};
const Study::Platform array_kFieldTrialConfig_platforms_264[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_264[] = {
    {
      "Enabled_20260924",
      array_kFieldTrialConfig_platforms_264,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_249,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_248[] = {
      "IPH_GMCSaveVideoFrame",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_78[] = {
      {
        "availability",
        "any",
      },
      {
        "event_save_video_frame_iph_trigger",
        "name:save_video_frame_iph_trigger;comparator:==0;window:3650;storage:3650",
      },
      {
        "event_save_video_frame_used",
        "name:save_video_frame_used;comparator:==0;window:3650;storage:3650",
      },
      {
        "session_rate",
        "==0",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_263[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_263[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_263,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_78,
      array_kFieldTrialConfig_enable_features_248,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_247[] = {
      "IDBDatabaseDumpOnHighConnectionCount",
};
const Study::Platform array_kFieldTrialConfig_platforms_262[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_262[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_262,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_247,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_246[] = {
      "I18nOptimizations",
};
const Study::Platform array_kFieldTrialConfig_platforms_261[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_261[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_261,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_246,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_245[] = {
      "HttpsFirstModeV2ForTypicallySecureUsers",
};
const Study::Platform array_kFieldTrialConfig_platforms_260[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_260[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_260,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_245,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_244[] = {
      "HttpCacheZstdCompression",
      "HttpCacheZstdDecompression",
};
const Study::Platform array_kFieldTrialConfig_platforms_259[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_259[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_259,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_244,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_243[] = {
      "HttpCacheNoVarySearch",
      "SearchPrefetchWithNoVarySearchDiskCache",
};
const Study::Platform array_kFieldTrialConfig_platforms_258[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_258[] = {
    {
      "Enabled_NVS_HttpCache_And_Omnibox_Prefetch",
      array_kFieldTrialConfig_platforms_258,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_243,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_242[] = {
      "HistoryReportClusterDatabaseMetrics",
};
const Study::Platform array_kFieldTrialConfig_platforms_257[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_257[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_257,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_242,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_241[] = {
      "HistoryQueryBatchedLookups",
};
const Study::Platform array_kFieldTrialConfig_platforms_256[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_256[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_256,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_241,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_disable_features_18[] = {
      "HistoryEmbeddings",
};
const Study::Platform array_kFieldTrialConfig_platforms_255[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_255[] = {
    {
      "Disabled_20261009",
      array_kFieldTrialConfig_platforms_255,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      {},
      array_kFieldTrialConfig_disable_features_18,
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_240[] = {
      "HistoryDatabaseWriteAheadLogging",
};
const Study::Platform array_kFieldTrialConfig_platforms_254[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_254[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_254,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_240,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_disable_features_17[] = {
      "HeapVectorPromptlyFree",
};
const Study::Platform array_kFieldTrialConfig_platforms_253[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_253[] = {
    {
      "Disabled",
      array_kFieldTrialConfig_platforms_253,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      {},
      array_kFieldTrialConfig_disable_features_17,
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_239[] = {
      "HeapProfilerIncludeResidency",
};
const Study::Platform array_kFieldTrialConfig_platforms_252[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_252[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_252,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_239,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_238[] = {
      "HeapProfilerChurnReporting",
};
const Study::Platform array_kFieldTrialConfig_platforms_251[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_251[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_251,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_238,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_237[] = {
      "HatsReadingModeSurvey",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_77[] = {
      {
        "en_site_id",
        "QLxTthukW0ugnJ3q1cK0UBFVdFX4",
      },
      {
        "probability",
        "1.0",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_250[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_250[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_250,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_77,
      array_kFieldTrialConfig_enable_features_237,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_236[] = {
      "HarfBuzzZeroCopyFontTable",
};
const Study::Platform array_kFieldTrialConfig_platforms_249[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_249[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_249,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_236,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_235[] = {
      "HappyEyeballsV2",
};
const Study::Platform array_kFieldTrialConfig_platforms_248[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_248[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_248,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_235,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_234[] = {
      "HappinessTrackingSurveysForDesktopHistoryPageExperiment",
};
const Study::Platform array_kFieldTrialConfig_platforms_247[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_247[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_247,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_234,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_233[] = {
      "HappinessTrackingSurveysForDesktopHistoryPageControl",
};
const Study::Platform array_kFieldTrialConfig_platforms_246[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_246[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_246,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_233,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_232[] = {
      "HangoutsExtensionV3",
};
const Study::Platform array_kFieldTrialConfig_platforms_245[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_245[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_245,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_232,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_231[] = {
      "GwpAsanMallocSmartSampling",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_76[] = {
      {
        "SmartSamplingRateMultiplier",
        "8",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_244[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_244[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_244,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_76,
      array_kFieldTrialConfig_enable_features_231,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_230[] = {
      "GrCacheLimitsFeature",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_75[] = {
      {
        "MaxDefaultGlyphCacheTextureBytes",
        "8388608",
      },
      {
        "MaxGaneshResourceCacheBytes",
        "100663296",
      },
      {
        "MaxHighEndGaneshResourceCacheBytes",
        "268435456",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_243[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_243[] = {
    {
      "cache_96_256_8_default_20230911",
      array_kFieldTrialConfig_platforms_243,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_75,
      array_kFieldTrialConfig_enable_features_230,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_229[] = {
      "GpuPersistentCacheMetadata",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_74[] = {
      {
        "preload_count",
        "50",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_242[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_242[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_242,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_74,
      array_kFieldTrialConfig_enable_features_229,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_228[] = {
      "GpuInitOptimization",
};
const Study::Platform array_kFieldTrialConfig_platforms_241[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_241[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_241,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_228,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_227[] = {
      "RoundedIcons",
      "TabStripDeclutter",
      "ToolbarGlowUp",
      "WebuiRefresh2026",
};
const Study::Platform array_kFieldTrialConfig_platforms_240[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_240[] = {
    {
      "Enabled_20260821",
      array_kFieldTrialConfig_platforms_240,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_227,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_226[] = {
      "GlicZeroStateSuggestions",
};
const Study::Platform array_kFieldTrialConfig_platforms_239[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_239[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_239,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_226,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_225[] = {
      "GlicWebActuationSettingsToggle",
};
const Study::Platform array_kFieldTrialConfig_platforms_238[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_238[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_238,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_225,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_224[] = {
      "GlicUserStatusCheck",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_73[] = {
      {
        "glic-user-status-oauth2-scope",
        "https://www.googleapis.com/auth/gemini",
      },
      {
        "glic-user-status-request-delay",
        "23h",
      },
      {
        "glic-user-status-url",
        "https://www.example.com/",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_237[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_237[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_237,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_73,
      array_kFieldTrialConfig_enable_features_224,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_223[] = {
      "GlicShowNotTellTutorials",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_72[] = {
      {
        "tutorials_arm",
        "1",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_236[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_236[] = {
    {
      "Arm1",
      array_kFieldTrialConfig_platforms_236,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_72,
      array_kFieldTrialConfig_enable_features_223,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_disable_features_16[] = {
      "IPH_GlicTryIt",
};
const Study::Platform array_kFieldTrialConfig_platforms_235[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_235[] = {
    {
      "Unlaunched_20260309",
      array_kFieldTrialConfig_platforms_235,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      {},
      array_kFieldTrialConfig_disable_features_16,
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_222[] = {
      "GlicTextSelectionContextMenu",
};
const Study::Platform array_kFieldTrialConfig_platforms_234[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_234[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_234,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_222,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_221[] = {
      "GlicSummarizeVideoSuggestion",
};
const Study::Platform array_kFieldTrialConfig_platforms_233[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_233[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_233,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_221,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_220[] = {
      "GlicShareImage",
};
const Study::Platform array_kFieldTrialConfig_platforms_232[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_232[] = {
    {
      "Enabled_20260106",
      array_kFieldTrialConfig_platforms_232,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_220,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_219[] = {
      "GlicReuseCookies",
};
const Study::Platform array_kFieldTrialConfig_platforms_231[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_231[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_231,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_219,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_218[] = {
      "GlicPersonalContext",
};
const Study::Platform array_kFieldTrialConfig_platforms_230[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_230[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_230,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_218,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_217[] = {
      "PdfGlicSummarize",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_71[] = {
      {
        "arm",
        "3",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_229[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_229[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_229,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_71,
      array_kFieldTrialConfig_enable_features_217,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_216[] = {
      "GlicNoWebview",
};
const Study::Platform array_kFieldTrialConfig_platforms_228[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_228[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_228,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_216,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_215[] = {
      "GlicMessageFirstFre",
};
const Study::Platform array_kFieldTrialConfig_platforms_227[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_227[] = {
    {
      "Enabled_20260427",
      array_kFieldTrialConfig_platforms_227,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_215,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_214[] = {
      "AnnotatedPageContentWithMediaData",
      "HeadlessCaptionEarlyStart",
      "HeadlessLiveCaption",
      "MediaTrasncriptsFlagInPageMetadata",
};
const Study::Platform array_kFieldTrialConfig_platforms_226[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_226[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_226,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_214,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_213[] = {
      "GlicHotkeyLocalScope",
};
const Study::Platform array_kFieldTrialConfig_platforms_225[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_225[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_225,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_213,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_212[] = {
      "GlicHorizontalTabToolbarButton",
};
const Study::Platform array_kFieldTrialConfig_platforms_224[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_224[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_224,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_212,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_211[] = {
      "GlicGeminiInstructions",
};
const Study::Platform array_kFieldTrialConfig_platforms_223[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_223[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_223,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_211,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_210[] = {
      "GlicForceNonSkSLBorder",
};
const Study::Platform array_kFieldTrialConfig_platforms_222[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_222[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_222,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_210,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_209[] = {
      "GlicExperimentalTriggering",
};
const Study::Platform array_kFieldTrialConfig_platforms_221[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_221[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_221,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_209,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_208[] = {
      "GlicEmbeddedPdfBytesExtraction",
};
const Study::Platform array_kFieldTrialConfig_platforms_220[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_220[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_220,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_208,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_207[] = {
      "Glic",
};
const Study::Platform array_kFieldTrialConfig_platforms_219[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_219[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_219,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_207,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_206[] = {
      "GlicDisableHfcr",
};
const Study::Platform array_kFieldTrialConfig_platforms_218[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_218[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_218,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_206,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_disable_features_15[] = {
      "GlicDaisyChainNewTabs",
};
const Study::Platform array_kFieldTrialConfig_platforms_217[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_217[] = {
    {
      "Disabled",
      array_kFieldTrialConfig_platforms_217,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      {},
      array_kFieldTrialConfig_disable_features_15,
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_205[] = {
      "GlicCrossOriginNavigationGating",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_70[] = {
      {
        "confirm_navigation_to_new_origins",
        "false",
      },
      {
        "confirm_navigation_to_new_origins_dark_launch",
        "true",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_216[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_216[] = {
    {
      "Enabled_DarkLaunch",
      array_kFieldTrialConfig_platforms_216,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_70,
      array_kFieldTrialConfig_enable_features_205,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_204[] = {
      "GlicWarming",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_69[] = {
      {
        "glic-warming-delay-ms",
        "300000",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_215[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_215[] = {
    {
      "Enabled_300s_20261013",
      array_kFieldTrialConfig_platforms_215,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_69,
      array_kFieldTrialConfig_enable_features_204,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_203[] = {
      "GlicCSPConfig",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_68[] = {
      {
        "glic-api-allowed-origins",
        "https://gemini.google.com https://gemini.corp.google.com https://gemini-autopush.corp.google.com https://gemini-staging.corp.google.com https://gemini-preprod.corp.google.com",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_214[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_214[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_214,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_68,
      array_kFieldTrialConfig_enable_features_203,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_202[] = {
      "AutoOpenGlicForPdf",
      "EnableAutoOpenGlicSidePanel",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_67[] = {
      {
        "AutoOpenGlicForPdfWithOnboarding",
        "true",
      },
      {
        "MinWindowWidthForPdfAutoOpen",
        "1500",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_213[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_213[] = {
    {
      "Enabled_AutoOpenGlicForPdf_UnconsentedUsers",
      array_kFieldTrialConfig_platforms_213,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_67,
      array_kFieldTrialConfig_enable_features_202,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_201[] = {
      "ActorPageToolTimeout",
      "GlicActor",
      "GlicActorUi",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_66[] = {
      {
        "actor-page-tool-timeout",
        "30s",
      },
      {
        "glic-actor-eligible-tiers",
        "1,2",
      },
      {
        "glic_actor_enterprise_pref_default",
        "disabled_by_default",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_212[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_212[] = {
    {
      "Default",
      array_kFieldTrialConfig_platforms_212,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_66,
      array_kFieldTrialConfig_enable_features_201,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_200[] = {
      "GlicActorObservationDelayExcludeAdFrameLoading",
};
const Study::Platform array_kFieldTrialConfig_platforms_211[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_211[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_211,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_200,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_199[] = {
      "GlassFrame",
      "IPH_GlassFrameOptOut",
};
const Study::Platform array_kFieldTrialConfig_platforms_210[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_210[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_210,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_199,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_198[] = {
      "GlicWebContinuity",
};
const Study::Platform array_kFieldTrialConfig_platforms_209[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_209[] = {
    {
      "Enabled_20260430",
      array_kFieldTrialConfig_platforms_209,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_198,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_197[] = {
      "GaiaAccountIdEnforcement",
};
const Study::Platform array_kFieldTrialConfig_platforms_208[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_208[] = {
    {
      "Enabled_20260414",
      array_kFieldTrialConfig_platforms_208,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_197,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_196[] = {
      "GCMMessageBuffering",
};
const Study::Platform array_kFieldTrialConfig_platforms_207[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_207[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_207,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_196,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_195[] = {
      "ApiEnterpriseReportingPrivateReportForceSaveToCloudEventHandled",
      "EnableForceSaveToCloudDeferredReporting",
};
const Study::Platform array_kFieldTrialConfig_platforms_206[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_206[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_206,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_195,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_194[] = {
      "FlushPersistentSystemProfileOnWrite",
};
const Study::Platform array_kFieldTrialConfig_platforms_205[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_205[] = {
    {
      "Enabled_20260925",
      array_kFieldTrialConfig_platforms_205,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_194,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_193[] = {
      "EnableReadingListForMigratedUsers",
};
const Study::Platform array_kFieldTrialConfig_platforms_204[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_204[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_204,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_193,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_192[] = {
      "FirstRunFeatureShowcaseGeminiStep",
};
const Study::Platform array_kFieldTrialConfig_platforms_203[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_203[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_203,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_192,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_191[] = {
      "FirstRunDesktopRevamp",
};
const Study::Platform array_kFieldTrialConfig_platforms_202[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_202[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_202,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_191,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_disable_features_14[] = {
      "FencedFrames",
      "FencedFramesAPIChanges",
      "FencedFramesAutomaticBeaconCredentials",
      "FencedFramesCrossOriginAutomaticBeaconData",
      "FencedFramesCrossOriginEventReporting",
      "FencedFramesLocalUnpartitionedDataAccess",
      "FencedFramesReportEventHeaderChanges",
      "FencedFramesSrcPermissionsPolicy",
};
const Study::Platform array_kFieldTrialConfig_platforms_201[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_201[] = {
    {
      "Disabled",
      array_kFieldTrialConfig_platforms_201,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      {},
      array_kFieldTrialConfig_disable_features_14,
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_190[] = {
      "FeedbackDisabledDialog",
};
const Study::Platform array_kFieldTrialConfig_platforms_200[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_200[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_200,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_190,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_disable_features_13[] = {
      "FedCmAmbientUI",
};
const char* const array_kFieldTrialConfig_enable_features_189[] = {
      "SegmentationPlatformFedCmUser",
};
const Study::Platform array_kFieldTrialConfig_platforms_199[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_199[] = {
    {
      "SegmentationPlatform",
      array_kFieldTrialConfig_platforms_199,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_189,
      array_kFieldTrialConfig_disable_features_13,
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_188[] = {
      "ExtremeLightweightUAFDetector",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_65[] = {
      {
        "object_size_threshold_in_bytes",
        "512",
      },
      {
        "quarantine_capacity_for_large_objects_in_bytes",
        "0",
      },
      {
        "quarantine_capacity_for_small_objects_in_bytes",
        "1048576",
      },
      {
        "sampling_frequency",
        "100",
      },
      {
        "target_processes",
        "browser_only",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_198[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_198[] = {
    {
      "Quarantine_900_100_512_v6",
      array_kFieldTrialConfig_platforms_198,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_65,
      array_kFieldTrialConfig_enable_features_188,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_187[] = {
      "IPH_ExtensionsZeroStatePromo",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_64[] = {
      {
        "x_iph-variant",
        "custom-ui-chip-iph",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_197[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_197[] = {
    {
      "Chips_v1",
      array_kFieldTrialConfig_platforms_197,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_64,
      array_kFieldTrialConfig_enable_features_187,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_186[] = {
      "ExtensionsMenuAccessControl",
};
const Study::Platform array_kFieldTrialConfig_platforms_196[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_196[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_196,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_186,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_185[] = {
      "ExtensionsPinnedByDefault",
};
const Study::Platform array_kFieldTrialConfig_platforms_195[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_195[] = {
    {
      "Enabled_20260716",
      array_kFieldTrialConfig_platforms_195,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_185,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_disable_features_12[] = {
      "ApiRuntimeGetPlatformInfoNaClArch",
};
const Study::Platform array_kFieldTrialConfig_platforms_194[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_194[] = {
    {
      "Disabled",
      array_kFieldTrialConfig_platforms_194,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      {},
      array_kFieldTrialConfig_disable_features_12,
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_184[] = {
      "ExtensionServiceWorkerVoter",
};
const Study::Platform array_kFieldTrialConfig_platforms_193[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_193[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_193,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_184,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_183[] = {
      "EventTimingIgnorePresentationTimeFromUnexpectedFrameSource",
};
const Study::Platform array_kFieldTrialConfig_platforms_192[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_192[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_192,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_183,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_182[] = {
      "DataControlsGlic",
      "GlicBulkDataEntrySupport",
};
const Study::Platform array_kFieldTrialConfig_platforms_191[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_191[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_191,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_182,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_181[] = {
      "EnhancedFieldsForSecOps",
      "EnhancedSecurityEventFields",
};
const Study::Platform array_kFieldTrialConfig_platforms_190[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_190[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_190,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_181,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_180[] = {
      "EncryptSessionStorage",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_63[] = {
      {
        "stage",
        "write_both_read_prefer_encrypted",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_189[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_189[] = {
    {
      "Phase2",
      array_kFieldTrialConfig_platforms_189,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_63,
      array_kFieldTrialConfig_enable_features_180,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_179[] = {
      "EncryptBookmarks",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_62[] = {
      {
        "stage",
        "write_both_read_prefer_encrypted",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_188[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_188[] = {
    {
      "Phase2",
      array_kFieldTrialConfig_platforms_188,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_62,
      array_kFieldTrialConfig_enable_features_179,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_178[] = {
      "EnableWatermarkTimestampTimezone",
};
const Study::Platform array_kFieldTrialConfig_platforms_187[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_187[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_187,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_178,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_177[] = {
      "EnableShouldShowPromotion",
};
const Study::Platform array_kFieldTrialConfig_platforms_186[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_186[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_186,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_177,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_176[] = {
      "ShoppingPDPMetrics",
};
const Study::Platform array_kFieldTrialConfig_platforms_185[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_185[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_185,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_176,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_175[] = {
      "OnDeviceWebSpeechSmallExpertModel",
};
const Study::Platform array_kFieldTrialConfig_platforms_184[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_184[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_184,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_175,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_174[] = {
      "EnableNewUploadSizeLimit",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_61[] = {
      {
        "max_file_size_mb",
        "250",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_183[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_183[] = {
    {
      "Enabled_250MB",
      array_kFieldTrialConfig_platforms_183,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_61,
      array_kFieldTrialConfig_enable_features_174,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_173[] = {
      "EnableHangWatcherOnGpuProcess",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_60[] = {
      {
        "gpu_process_compositor_thread_log_level",
        "2",
      },
      {
        "gpu_process_io_thread_log_level",
        "2",
      },
      {
        "gpu_process_main_thread_log_level",
        "2",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_182[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_182[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_182,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_60,
      array_kFieldTrialConfig_enable_features_173,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_172[] = {
      "EnableHangWatcher",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_59[] = {
      {
        "io_thread_log_level",
        "2",
      },
      {
        "renderer_process_io_thread_log_level",
        "2",
      },
      {
        "ui_thread_log_level",
        "2",
      },
      {
        "utility_process_main_thread_log_level",
        "2",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_181[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_181[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_181,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_59,
      array_kFieldTrialConfig_enable_features_172,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_171[] = {
      "EnableGlicAiAvatarRing",
};
const Study::Platform array_kFieldTrialConfig_platforms_180[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_180[] = {
    {
      "Enabled_20260928",
      array_kFieldTrialConfig_platforms_180,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_171,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_170[] = {
      "EnableDynamicRouteFetching",
};
const Study::Platform array_kFieldTrialConfig_platforms_179[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_179[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_179,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_170,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_169[] = {
      "EnableDrDc",
      "GraphiteContextIsThreadSafe",
};
const Study::Platform array_kFieldTrialConfig_platforms_178[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_178[] = {
    {
      "EnabledGraphiteContextThreadSafe",
      array_kFieldTrialConfig_platforms_178,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_169,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_168[] = {
      "EnableDiscountInfoApi",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_58[] = {
      {
        "discount-on-shoppy-page",
        "true",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_177[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_177[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_177,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_58,
      array_kFieldTrialConfig_enable_features_168,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_167[] = {
      "EnableBestEffortTaskInhibitingPolicy",
      "ScopedBestEffortExecutionFenceForTaskQueue",
};
const Study::Platform array_kFieldTrialConfig_platforms_176[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_176[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_176,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_167,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_166[] = {
      "EnableAccountPreviewPreferredAccountFollowup",
};
const Study::Platform array_kFieldTrialConfig_platforms_175[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_175[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_175,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_166,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_165[] = {
      "EnableAccountPreviewPreferredAccount",
};
const Study::Platform array_kFieldTrialConfig_platforms_174[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_174[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_174,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_165,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_164[] = {
      "EnableAccountPreviewDataFetchOptimizations",
};
const Study::Platform array_kFieldTrialConfig_platforms_173[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_173[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_173,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_164,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_163[] = {
      "EarlyCookieLoadOnPreconnect",
};
const Study::Platform array_kFieldTrialConfig_platforms_172[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_172[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_172,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_163,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_162[] = {
      "EagerStorageAccessPermissionCheck",
};
const Study::Platform array_kFieldTrialConfig_platforms_171[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_171[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_171,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_162,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_161[] = {
      "DynamicProfileCountry",
      "StrictAssociatedCountriesCheck",
      "WaffleRestrictToAssociatedCountries",
};
const Study::Platform array_kFieldTrialConfig_platforms_170[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_170[] = {
    {
      "StrictLocalWaffle_20260519",
      array_kFieldTrialConfig_platforms_170,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_161,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_160[] = {
      "DumpWithoutCrashingForMissingSecurityState",
};
const Study::Platform array_kFieldTrialConfig_platforms_169[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_169[] = {
    {
      "Enabled_20260121",
      array_kFieldTrialConfig_platforms_169,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_160,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_159[] = {
      "DsePreload2",
      "DsePreload2AheadOfImminentNavigation",
      "DsePreload2OnPress",
      "PrefetchAheadOfImminentNavigation",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_57[] = {
      {
        "dse_preload2_initial_no_vary_search_hint",
        "",
      },
      {
        "dse_preload2_prefetch_priority_policy",
        "SearchPrefetchCompat",
      },
      {
        "force_wait_no_vary_search_header_policy",
        "AlwaysUse",
      },
      {
        "use_block_until_head_timeout",
        "false",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_168[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_168[] = {
    {
      "Enabled_Base_AheadOfImminentNavigation",
      array_kFieldTrialConfig_platforms_168,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_57,
      array_kFieldTrialConfig_enable_features_159,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_158[] = {
      "DomStorageSqliteNewDatabases",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_56[] = {
      {
        "DomStorageSqliteNewDatabasesStage",
        "UseSqliteForNewDatabases",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_167[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_167[] = {
    {
      "UseSqliteForNewDatabases",
      array_kFieldTrialConfig_platforms_167,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_56,
      array_kFieldTrialConfig_enable_features_158,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_157[] = {
      "DohProviderQuad9Secure",
};
const Study::Platform array_kFieldTrialConfig_platforms_166[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_166[] = {
    {
      "Enabled_20260203",
      array_kFieldTrialConfig_platforms_166,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_157,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_156[] = {
      "UseDnsHttpsSvcb",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_55[] = {
      {
        "UseDnsHttpsSvcbInsecureExtraTimeMax",
        "500ms",
      },
      {
        "UseDnsHttpsSvcbInsecureExtraTimeMin",
        "300ms",
      },
      {
        "UseDnsHttpsSvcbInsecureExtraTimePercent",
        "50",
      },
      {
        "UseDnsHttpsSvcbSecureExtraTimeMax",
        "500ms",
      },
      {
        "UseDnsHttpsSvcbSecureExtraTimeMin",
        "300ms",
      },
      {
        "UseDnsHttpsSvcbSecureExtraTimePercent",
        "50",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_165[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_165[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_165,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_55,
      array_kFieldTrialConfig_enable_features_156,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_155[] = {
      "DiskCacheBackendExperiment",
      "HttpCacheInitializeDiskCacheBackendEarly",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_54[] = {
      {
        "DiskCacheBackendResetCacheOnGroupChange",
        "true",
      },
      {
        "backend",
        "sql",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_164[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_164[] = {
    {
      "Sql",
      array_kFieldTrialConfig_platforms_164,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_54,
      array_kFieldTrialConfig_enable_features_155,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_154[] = {
      "DiscountDialogAutoPopupBehaviorSetting",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_53[] = {
      {
        "history-cluster-behavior",
        "1",
      },
      {
        "merchant-wide-behavior",
        "2",
      },
      {
        "non-merchant-wide-behavior",
        "0",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_163[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_163[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_163,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_53,
      array_kFieldTrialConfig_enable_features_154,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_153[] = {
      "DetectSpaceChangeViaOcclusion",
      "NotifyCompositorOfSpaceVisibilityOnMacOs",
      "NotifyCompositorOfWindowOcclusionOnMacOs",
      "NotifyCompositorOfWindowVisibilityOnMacOs",
      "VizBufferQueueDiscardOnVisibilityChange",
};
const Study::Platform array_kFieldTrialConfig_platforms_162[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_162[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_162,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_153,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_152[] = {
      "DisallowLegacyPrefMacFallback",
};
const Study::Platform array_kFieldTrialConfig_platforms_161[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_161[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_161,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_152,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_disable_features_11[] = {
      "PersistBrokenAlternativeServices",
};
const Study::Platform array_kFieldTrialConfig_platforms_160[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_160[] = {
    {
      "Disabled",
      array_kFieldTrialConfig_platforms_160,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      {},
      array_kFieldTrialConfig_disable_features_11,
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_151[] = {
      "GlicActorUiMagicCursor",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_52[] = {
      {
        "magic-cursor-max-duration-ms",
        "1",
      },
      {
        "magic-cursor-min-duration-ms",
        "1",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_159[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_159[] = {
    {
      "Disabled",
      array_kFieldTrialConfig_platforms_159,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_52,
      array_kFieldTrialConfig_enable_features_151,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_150[] = {
      "DisableComposeboxWarmupRequests",
};
const Study::Platform array_kFieldTrialConfig_platforms_158[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_158[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_158,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_150,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_149[] = {
      "Dictation",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_51[] = {
      {
        "auto_session_end_delay",
        "300ms",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_157[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_157[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_157,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_51,
      array_kFieldTrialConfig_enable_features_149,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_148[] = {
      "DeviceSignalsBackfillDisclaimer",
};
const Study::Platform array_kFieldTrialConfig_platforms_156[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_156[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_156,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_148,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_147[] = {
      "DeviceBoundSessionsRetryTransientRefreshErrors",
};
const Study::Platform array_kFieldTrialConfig_platforms_155[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_155[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_155,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_147,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_146[] = {
      "EnableMtlsTokenBinding",
};
const Study::Platform array_kFieldTrialConfig_platforms_154[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_154[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_154,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_146,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_145[] = {
      "DeviceBoundSessionsDsePrewarmer",
};
const Study::Platform array_kFieldTrialConfig_platforms_153[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_153[] = {
    {
      "Enabled_20261014",
      array_kFieldTrialConfig_platforms_153,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_145,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_144[] = {
      "DeviceBoundSessionsForRestrictedSites",
      "EnableChromeRefreshTokenBinding",
      "EnableOAuthMultiloginStandardCookiesBinding",
      "EnableOAuthMultiloginStandardCookiesBindingForSecondaryPartitions",
};
const Study::Platform array_kFieldTrialConfig_platforms_152[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_152[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_152,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_144,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_143[] = {
      "DevToolsConsoleInsightsTeasers",
};
const Study::Platform array_kFieldTrialConfig_platforms_151[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_151[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_151,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_143,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_142[] = {
      "DevToolsAiV2Architecture",
};
const Study::Platform array_kFieldTrialConfig_platforms_150[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_150[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_150,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_142,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_141[] = {
      "WebUIOmniboxAskGAboutThisPage",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_50[] = {
      {
        "Omnibox_AskGBypassPrivacyNotice",
        "true",
      },
      {
        "Omnibox_AskGCoBrowse",
        "true",
      },
      {
        "Omnibox_AskGLensChipRoute",
        "true",
      },
      {
        "Omnibox_AskGLensIcon",
        "true",
      },
      {
        "Omnibox_AskGLensSearchHintText",
        "true",
      },
      {
        "Omnibox_AskGSwapIcon",
        "true",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_149[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_149[] = {
    {
      "CobrowseAndLensEntrypoint",
      array_kFieldTrialConfig_platforms_149,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_50,
      array_kFieldTrialConfig_enable_features_141,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_140[] = {
      "EnableCrossDevicePrefTracker",
      "MobilePromoOnDesktopWithReminderWave1",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_49[] = {
      {
        "mobile_promo_on_desktop_notification",
        "true",
      },
      {
        "mobile_promo_on_desktop_promo_type",
        "1,4,5",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_148[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_148[] = {
    {
      "Reminder_All",
      array_kFieldTrialConfig_platforms_148,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_49,
      array_kFieldTrialConfig_enable_features_140,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_disable_features_10[] = {
      "WebAppsEnableMLModelForPromotion",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_48[] = {
      {
        "guardrail_report_prob",
        "0.5",
      },
      {
        "max_days_to_store_guardrails",
        "180",
      },
      {
        "model_and_user_decline_report_prob",
        "0.5",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_147[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_147[] = {
    {
      "Disabled",
      array_kFieldTrialConfig_platforms_147,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_48,
      {},
      array_kFieldTrialConfig_disable_features_10,
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_139[] = {
      "StarterPackExpansion",
};
const Study::Platform array_kFieldTrialConfig_platforms_146[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_146[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_146,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_139,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_138[] = {
      "OmniboxCalcProvider",
};
const Study::Platform array_kFieldTrialConfig_platforms_145[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_145[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_145,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_138,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_137[] = {
      "NtpMostRelevantTabResumptionModule",
      "SegmentationPlatformURLVisitResumptionRanker",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_47[] = {
      {
        "use_random_score",
        "true",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_144[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_144[] = {
    {
      "TabResumption_Random",
      array_kFieldTrialConfig_platforms_144,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_47,
      array_kFieldTrialConfig_enable_features_137,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_136[] = {
      "NtpOneGoogleBarAsyncBarParts",
};
const Study::Platform array_kFieldTrialConfig_platforms_143[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_143[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_143,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_136,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_disable_features_9[] = {
      "kNtpTabGroupsModule",
      "kNtpTabGroupsModuleZeroState",
};
const Study::Platform array_kFieldTrialConfig_platforms_142[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_142[] = {
    {
      "Control_20251027",
      array_kFieldTrialConfig_platforms_142,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      {},
      array_kFieldTrialConfig_disable_features_9,
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_135[] = {
      "NtpDriveModuleLink",
};
const Study::Platform array_kFieldTrialConfig_platforms_141[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_141[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_141,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_135,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_134[] = {
      "DesktopCapturePermissionCheckerPreMacos14_4",
};
const Study::Platform array_kFieldTrialConfig_platforms_140[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_140[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_140,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_134,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_133[] = {
      "AdditionalDelayMainJob",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_46[] = {
      {
        "AdditionalDelay",
        "50ms",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_139[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_139[] = {
    {
      "EnabledWith50ms",
      array_kFieldTrialConfig_platforms_139,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_46,
      array_kFieldTrialConfig_enable_features_133,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_132[] = {
      "DeferredDownloadHistoryLoading",
};
const Study::Platform array_kFieldTrialConfig_platforms_138[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_138[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_138,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_132,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_131[] = {
      "DefaultBrowserFramework",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_45[] = {
      {
        "prompt_surface",
        "bubble_dialog",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_137[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_137[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_137,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_45,
      array_kFieldTrialConfig_enable_features_131,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_130[] = {
      "DefaultBrowserChangedOsNotification",
};
const Study::Platform array_kFieldTrialConfig_platforms_136[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_136[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_136,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_130,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_129[] = {
      "DecodeScriptsInBlink",
};
const Study::Platform array_kFieldTrialConfig_platforms_135[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_135[] = {
    {
      "Enabled_20260714",
      array_kFieldTrialConfig_platforms_135,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_129,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_128[] = {
      "CustomizeChromeJourney",
      "HappinessTrackingSurveysForCustomizeChromeJourney",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_44[] = {
      {
        "en_site_id",
        "nJLJ12m7C0ugnJ3q1cK0VCq4ZXpB",
      },
      {
        "probability",
        "1.0",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_134[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_134[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_134,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_44,
      array_kFieldTrialConfig_enable_features_128,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_127[] = {
      "CriticalActionHistory",
};
const Study::Platform array_kFieldTrialConfig_platforms_133[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_133[] = {
    {
      "Enabled_20261009",
      array_kFieldTrialConfig_platforms_133,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_127,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_126[] = {
      "CreateNetworkContextNonBlocking",
};
const Study::Platform array_kFieldTrialConfig_platforms_132[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_132[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_132,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_126,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_125[] = {
      "CookieMonsterPerKeyDelete",
};
const Study::Platform array_kFieldTrialConfig_platforms_131[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_131[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_131,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_125,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_124[] = {
      "ApiContextualTasksPrivate",
      "ContextualTasksPrivateApiNoAnimation",
};
const Study::Platform array_kFieldTrialConfig_platforms_130[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_130[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_130,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_124,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_disable_features_8[] = {
      "ContextualTasksHideMenuOnAiPage",
      "EphemeralPinningVisibleWhenPermanentlyPinned",
};
const char* const array_kFieldTrialConfig_enable_features_123[] = {
      "ContextualTasksEnableSpatialModelToolbarLayout",
      "ContextualTasksEphemeralBrandedEntryPoint",
      "ContextualTasksEphemeralButtonAutoDismiss",
      "ContextualTasksEphemeralButtonContextMenu",
      "ContextualTasksPinnedButtonActiveIndicator",
      "ContextualTasksPinningV2",
      "ContextualTasksSidePanelDefaultRight",
      "ContextualTasksUnifyPinButtonLogos",
      "ContextualTasksUpdatedEntryPoints",
      "EnableContextualTasksPinButtonInToolbar",
      "EnableContextualTasksPinButtonOnSrp",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_43[] = {
      {
        "ContextualTasksEntryPoint",
        "toolbar-ephemeral-branded",
      },
      {
        "ContextualTasksEphemeralButtonAutoDismissTimeMinutes",
        "120",
      },
      {
        "ContextualTasksEphemeralButtonContextMenuCloseSidePanel",
        "true",
      },
      {
        "ContextualTasksPinnedButtonActiveIndicatorCircleHighlight",
        "true",
      },
      {
        "ContextualTasksUnifyPinButtonLogo",
        "super-g",
      },
      {
        "EnableCircularEphemeralButtonNextToBatterySaver",
        "true",
      },
      {
        "overflow-items",
        "all-without-new-thread",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_129[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_129[] = {
    {
      "ColorfulSuperG_20261029",
      array_kFieldTrialConfig_platforms_129,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_43,
      array_kFieldTrialConfig_enable_features_123,
      array_kFieldTrialConfig_disable_features_8,
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_122[] = {
      "ContextualTasksUploadChunking",
};
const Study::Platform array_kFieldTrialConfig_platforms_128[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_128[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_128,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_122,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_121[] = {
      "ContextualTasks",
};
const Study::Platform array_kFieldTrialConfig_platforms_127[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_127[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_127,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_121,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_120[] = {
      "ContextualTasksCookiePrefetch",
};
const Study::Platform array_kFieldTrialConfig_platforms_126[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_126[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_126,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_120,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_119[] = {
      "ContextualTasksBackButtonExpandsSidePanel",
};
const Study::Platform array_kFieldTrialConfig_platforms_125[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_125[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_125,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_119,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_118[] = {
      "ContextualCueingV2",
      "ContextualCueingV2AllowOverridingUcbScoring",
      "ContextualCueingV2MultiSource",
      "GlicContextualCueV2ActiveUserBackoff",
      "GlicContextualCueingV2AutoSubmit",
      "IndigoContextualCueingV2",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_42[] = {
      {
        "ContextualCueingV2ClickBackoffTime",
        "4h",
      },
      {
        "ContextualCueingV2EduClassifierThreshold",
        "0.75",
      },
      {
        "ContextualCueingV2EnablePrivateInsightsLogging",
        "true",
      },
      {
        "ContextualCueingV2MinTimeBetweenNudges",
        "8h",
      },
      {
        "ContextualCueingV2MultiSourceAnnotationTimeout",
        "300s",
      },
      {
        "ContextualCueingV2ShoppingClassifierThreshold",
        "0.9",
      },
      {
        "MinDaysSinceLastInvocation",
        "2",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_124[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_124[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_124,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_42,
      array_kFieldTrialConfig_enable_features_118,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_117[] = {
      "ContextManagementInComposebox",
      "ContextManagementInOmnibox",
      "ContextualTasksContext",
      "ContextualTasksContextLogging",
      "ContextualTasksContextMqlsLogging",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_41[] = {
      {
        "ContextualTasksContextSmartTabSharing",
        "true",
      },
      {
        "ContextualTasksContextToggleOffAfterSubmit",
        "false",
      },
      {
        "enable_single_tab_menu_item",
        "true",
      },
      {
        "enable_tab_deselection",
        "true",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_123[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_123[] = {
    {
      "Enabled_SingleTab_STSMultiTurn_Prestable_M157",
      array_kFieldTrialConfig_platforms_123,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_41,
      array_kFieldTrialConfig_enable_features_117,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_116[] = {
      "AutoTodos",
      "ContextHub",
};
const Study::Platform array_kFieldTrialConfig_platforms_122[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_122[] = {
    {
      "ContextHubFeaturesEnabled",
      array_kFieldTrialConfig_platforms_122,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_116,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_disable_features_7[] = {
      "CompressionDictionaryTransportRequireKnownRootCert",
};
const Study::Platform array_kFieldTrialConfig_platforms_121[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_121[] = {
    {
      "Disable",
      array_kFieldTrialConfig_platforms_121,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      {},
      array_kFieldTrialConfig_disable_features_7,
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_disable_features_6[] = {
      "AutocompleteDictionaryPreload",
      "PreloadedDictionaryConditionalUse",
};
const Study::Platform array_kFieldTrialConfig_platforms_120[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_120[] = {
    {
      "EnabledPreloadConditionalUse",
      array_kFieldTrialConfig_platforms_120,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      {},
      array_kFieldTrialConfig_disable_features_6,
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_115[] = {
      "CompositedAnimationsForceMainFrames",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_40[] = {
      {
        "anchor-transform",
        "true",
      },
      {
        "intersection-observer",
        "true",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_119[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_119[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_119,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_40,
      array_kFieldTrialConfig_enable_features_115,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_114[] = {
      "LensSendUrlsInComposeboxes",
};
const Study::Platform array_kFieldTrialConfig_platforms_118[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_118[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_118,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_114,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_113[] = {
      "ComposeboxDriveContextMenuOption",
      "ComposeboxDriveContextMenuOptionDisclaimer",
      "ComposeboxDriveContextMenuOptionSigninPromo",
};
const Study::Platform array_kFieldTrialConfig_platforms_117[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_117[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_117,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_113,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_112[] = {
      "ComposeProactiveNudge",
      "EnableComposeNudgeAtCursor",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_39[] = {
      {
        "proactive_nudge_compact_ui",
        "true",
      },
      {
        "proactive_nudge_delay_milliseconds",
        "1000",
      },
      {
        "proactive_nudge_force_show_probability",
        "0.04",
      },
      {
        "proactive_nudge_show_probability",
        "0.02",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_116[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_116[] = {
    {
      "Enabled_CursorNudgeModel",
      array_kFieldTrialConfig_platforms_116,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_39,
      array_kFieldTrialConfig_enable_features_112,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_111[] = {
      "ModelQualityLogging",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_38[] = {
      {
        "model_execution_feature_compose",
        "true",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_115[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_115[] = {
    {
      "ComposeLoggingEnabled_Dogfood",
      array_kFieldTrialConfig_platforms_115,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_38,
      array_kFieldTrialConfig_enable_features_111,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_110[] = {
      "ComponentsBase32InRust",
};
const Study::Platform array_kFieldTrialConfig_platforms_114[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_114[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_114,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_110,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_109[] = {
      "ProductSpecificationsMqlsLogging",
};
const Study::Platform array_kFieldTrialConfig_platforms_113[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_113[] = {
    {
      "Enabled_Dogfood",
      array_kFieldTrialConfig_platforms_113,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_109,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_108[] = {
      "EnableCollectAccessibilityHeuristicInCanvasUkm",
};
const Study::Platform array_kFieldTrialConfig_platforms_112[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_112[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_112,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_108,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_107[] = {
      "ClientSideDetectionTrickToBill",
};
const Study::Platform array_kFieldTrialConfig_platforms_111[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_111[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_111,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_107,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_106[] = {
      "ClientSideDetectionServerModelForScamDetectionDesktop",
};
const Study::Platform array_kFieldTrialConfig_platforms_110[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_110[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_110,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_106,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_105[] = {
      "ClientSideDetectionScamDetectionRequestWithUrl",
};
const Study::Platform array_kFieldTrialConfig_platforms_109[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_109[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_109,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_105,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_104[] = {
      "ClientSideDetectionRetryLimit",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_37[] = {
      {
        "RetryTimeMax",
        "15",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_108[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_108[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_108,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_37,
      array_kFieldTrialConfig_enable_features_104,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_103[] = {
      "ClientSideDetectionImageEmbeddingMatch",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_36[] = {
      {
        "CsdImageEmbeddingMatchWithIntelligentScan",
        "true",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_107[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_107[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_107,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_36,
      array_kFieldTrialConfig_enable_features_103,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_102[] = {
      "ClientSideDetectionCreditCardForm",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_35[] = {
      {
        "EnableDetectionTrigger",
        "true",
      },
      {
        "EnableHeuristicFilter",
        "true",
      },
      {
        "EnableInteractionTrigger",
        "true",
      },
      {
        "EnableNewSiteFilter",
        "true",
      },
      {
        "EnableReferringAppFilter",
        "true",
      },
      {
        "HCAcceptanceRate",
        "1.0",
      },
      {
        "MaxUserVisit",
        "1",
      },
      {
        "SampleRate",
        "1.0",
      },
      {
        "UserVisitLookback",
        "10",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_106[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_106[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_106,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_35,
      array_kFieldTrialConfig_enable_features_102,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_101[] = {
      "ClientSideDetectionBypassTiers",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_34[] = {
      {
        "ClientSideDetectionBypassTiersList",
        "",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_105[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_105[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_105,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_34,
      array_kFieldTrialConfig_enable_features_101,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_100[] = {
      "ClearGrShaderDiskCacheOnInvalidPrefix",
};
const Study::Platform array_kFieldTrialConfig_platforms_104[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_104[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_104,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_100,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_99[] = {
      "ClearBrowsingHistoryJourney",
      "HappinessTrackingSurveysForClearBrowsingHistory",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_33[] = {
      {
        "en_site_id",
        "R8iDTcjjT0ugnJ3q1cK0TiRRjjy4",
      },
      {
        "probability",
        "1.0",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_103[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_103[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_103,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_33,
      array_kFieldTrialConfig_enable_features_99,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_98[] = {
      "LensOverlayUpdatedClientContext",
};
const Study::Platform array_kFieldTrialConfig_platforms_102[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_102[] = {
    {
      "Enabled_20250826",
      array_kFieldTrialConfig_platforms_102,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_98,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_97[] = {
      "LensOverlayTextSelectionContextMenuEntrypoint",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_32[] = {
      {
        "contextualize",
        "true",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_101[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_101[] = {
    {
      "Enabled_Contextualized",
      array_kFieldTrialConfig_platforms_101,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_32,
      array_kFieldTrialConfig_enable_features_97,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_96[] = {
      "LensOverlaySurvey",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_31[] = {
      {
        "en_site_id",
        "LvUA3D5Ts0ugnJ3q1cK0SHbD7uPa",
      },
      {
        "probability",
        "0.5",
      },
      {
        "results-time",
        "6s",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_100[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_100[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_100,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_31,
      array_kFieldTrialConfig_enable_features_96,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_95[] = {
      "LensOverlaySidePanelOpenInNewTab",
};
const Study::Platform array_kFieldTrialConfig_platforms_99[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_99[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_99,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_95,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_disable_features_5[] = {
      "LensAimSuggestionsGradientBackground",
};
const char* const array_kFieldTrialConfig_enable_features_94[] = {
      "LensAimSuggestions",
      "LensOverlaySuggestionsMigration",
      "LensSearchReinvocationAffordance",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_30[] = {
      {
        "clear-vsint-when-no-region-selection",
        "true",
      },
      {
        "enable-typeahead-suggestions",
        "true",
      },
      {
        "lens-aim-suggestions-type",
        "Multimodal",
      },
      {
        "number-of-aim-suggestions",
        "8",
      },
      {
        "send-image-signals-for-lens-suggest",
        "false",
      },
      {
        "send-lens-visual-interaction-data-for-lens-suggest",
        "true",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_98[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_98[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_98,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_30,
      array_kFieldTrialConfig_enable_features_94,
      array_kFieldTrialConfig_disable_features_5,
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_93[] = {
      "LensOverlayNonBlockingPrivacyNoticeForImageSearch",
};
const Study::Platform array_kFieldTrialConfig_platforms_97[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_97[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_97,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_93,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_92[] = {
      "LensOverlayEduActionChip",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_29[] = {
      {
        "disabled-by-glic",
        "true",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_96[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_96[] = {
    {
      "TestConfig",
      array_kFieldTrialConfig_platforms_96,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_29,
      array_kFieldTrialConfig_enable_features_92,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_91[] = {
      "ChromeWideEchoCancellation",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_28[] = {
      {
        "processing_fifo_size",
        "110",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_95[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_95[] = {
    {
      "Enabled_20220412",
      array_kFieldTrialConfig_platforms_95,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_28,
      array_kFieldTrialConfig_enable_features_91,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_disable_features_4[] = {
      "NtpWallpaperSearchButtonAnimation",
};
const char* const array_kFieldTrialConfig_enable_features_90[] = {
      "CustomizeChromeWallpaperSearchButton",
      "NtpWallpaperSearchButton",
      "NtpWallpaperSearchButtonHideCondition",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_27[] = {
      {
        "NtpWallpaperSearchButtonHideConditionParam",
        "1",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_94[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_94[] = {
    {
      "DefaultOnLaunched",
      array_kFieldTrialConfig_platforms_94,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_27,
      array_kFieldTrialConfig_enable_features_90,
      array_kFieldTrialConfig_disable_features_4,
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_89[] = {
      "EnableChromeRefreshTokenBindingUpgrade",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_26[] = {
      {
        "upgrade-type",
        "live-launch",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_93[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_93[] = {
    {
      "EnabledLiveLaunch",
      array_kFieldTrialConfig_platforms_93,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_26,
      array_kFieldTrialConfig_enable_features_89,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_88[] = {
      "ChildProcessSecurityPolicyRust",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_25[] = {
      {
        "policy",
        "rust-and-cpp",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_92[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_92[] = {
    {
      "Enabled_RustAndCpp",
      array_kFieldTrialConfig_platforms_92,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_25,
      array_kFieldTrialConfig_enable_features_88,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_87[] = {
      "CentralizedInfoBarFramework",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_24[] = {
      {
        "MigratedAlternateNav",
        "true",
      },
      {
        "MigratedAutomation",
        "true",
      },
      {
        "MigratedBadFlags",
        "true",
      },
      {
        "MigratedChromeForTesting",
        "true",
      },
      {
        "MigratedCollectedCookies",
        "true",
      },
      {
        "MigratedDefaultBrowser",
        "true",
      },
      {
        "MigratedDevToolsConfirm",
        "true",
      },
      {
        "MigratedDevToolsRemoteDebugging",
        "true",
      },
      {
        "MigratedDevToolsSharedProcess",
        "true",
      },
      {
        "MigratedExtensionDevTools",
        "true",
      },
      {
        "MigratedFileAccessDisabled",
        "true",
      },
      {
        "MigratedGoogleApiKeys",
        "true",
      },
      {
        "MigratedIncognitoConnectability",
        "true",
      },
      {
        "MigratedInstallationError",
        "true",
      },
      {
        "MigratedInstallerDownloader",
        "true",
      },
      {
        "MigratedJsOptimizations",
        "true",
      },
      {
        "MigratedKeystonePromotion",
        "true",
      },
      {
        "MigratedKnownInterceptionDisclosure",
        "true",
      },
      {
        "MigratedLinkCapturing",
        "true",
      },
      {
        "MigratedLocalTestPolicies",
        "true",
      },
      {
        "MigratedOSCryptAsyncAvailability",
        "true",
      },
      {
        "MigratedObsoleteSystem",
        "true",
      },
      {
        "MigratedPageInfo",
        "true",
      },
      {
        "MigratedPdf",
        "true",
      },
      {
        "MigratedPinInfoBar",
        "true",
      },
      {
        "MigratedSessionRestore",
        "true",
      },
      {
        "MigratedStartupLaunch",
        "true",
      },
      {
        "MigratedTabSharing",
        "true",
      },
      {
        "MigratedThemeInstalled",
        "true",
      },
      {
        "MigratedWebAppBlockedMigration",
        "true",
      },
      {
        "MigratedWebAuthFlow",
        "true",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_91[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_91[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_91,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_24,
      array_kFieldTrialConfig_enable_features_87,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_86[] = {
      "CastStreamingMaxVideoBitrate",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_23[] = {
      {
        "max_bitrate_mbps",
        "10",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_90[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_90[] = {
    {
      "Max10Mbps",
      array_kFieldTrialConfig_platforms_90,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_23,
      array_kFieldTrialConfig_enable_features_86,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_85[] = {
      "CastStreamingHardwareHevc",
};
const Study::Platform array_kFieldTrialConfig_platforms_89[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_89[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_89,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_85,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_84[] = {
      "CastStreamingExponentialVideoBitrateAlgorithm",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_22[] = {
      {
        "decrease_factor",
        "0.9",
      },
      {
        "drop_threshold",
        "1",
      },
      {
        "dynamic_window_multiplier",
        "0.0",
      },
      {
        "increase_factor",
        "1.05",
      },
      {
        "window_size",
        "30",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_88[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_88[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_88,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_22,
      array_kFieldTrialConfig_enable_features_84,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_83[] = {
      "CastMirroringNativeNV12",
};
const Study::Platform array_kFieldTrialConfig_platforms_87[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_87[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_87,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_83,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_82[] = {
      "AccessibilityCanvas",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_21[] = {
      {
        "CanvasAccessibilityMode",
        "Basic",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_86[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_86[] = {
    {
      "Enabled_Basic",
      array_kFieldTrialConfig_platforms_86,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_21,
      array_kFieldTrialConfig_enable_features_82,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_81[] = {
      "Canvas2dDeferredFlush",
};
const Study::Platform array_kFieldTrialConfig_platforms_85[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_85[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_85,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_81,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_80[] = {
      "CacheGurlSchemeIsHttpOrHttpsResult",
};
const Study::Platform array_kFieldTrialConfig_platforms_84[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_84[] = {
    {
      "Enabled_20260629",
      array_kFieldTrialConfig_platforms_84,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_80,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_79[] = {
      "CWSReviewPromptingNativeUI",
};
const Study::Platform array_kFieldTrialConfig_platforms_83[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_83[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_83,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_79,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_78[] = {
      "CADisplayLinkInGpu",
};
const Study::Platform array_kFieldTrialConfig_platforms_82[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_82[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_82,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_78,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_77[] = {
      "BuildTFLiteModelExecutionTaskOnLoadingThread",
};
const Study::Platform array_kFieldTrialConfig_platforms_81[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_81[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_81,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_77,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_76[] = {
      "BrowsingHistoryFilterByActor",
      "BrowsingHistoryFilterByDevice",
};
const Study::Platform array_kFieldTrialConfig_platforms_80[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_80[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_80,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_76,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_75[] = {
      "BrowsingDataModelSharedWorkerKeyWithoutURL",
};
const Study::Platform array_kFieldTrialConfig_platforms_79[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_79[] = {
    {
      "Enabled_20261021",
      array_kFieldTrialConfig_platforms_79,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_75,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_74[] = {
      "BrowserThreadPoolAdjustment",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_20[] = {
      {
        "BrowserThreadPoolCoresMultiplier",
        "0.6",
      },
      {
        "BrowserThreadPoolMax",
        "32",
      },
      {
        "BrowserThreadPoolMin",
        "16",
      },
      {
        "BrowserThreadPoolOffset",
        "0",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_78[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_78[] = {
    {
      "thread_pool_default_20230920",
      array_kFieldTrialConfig_platforms_78,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_20,
      array_kFieldTrialConfig_enable_features_74,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_73[] = {
      "ChromeDarkNeutrals26",
};
const Study::Platform array_kFieldTrialConfig_platforms_77[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_77[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_77,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_73,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_72[] = {
      "BrowserSignalsReportingEnabled",
};
const Study::Platform array_kFieldTrialConfig_platforms_76[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_76[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_76,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_72,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_71[] = {
      "BrowserInitiatedAutomaticPictureInPictureDryRun",
};
const Study::Platform array_kFieldTrialConfig_platforms_75[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_75[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_75,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_71,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_70[] = {
      "BrowserInitiatedAutomaticPictureInPicture",
};
const Study::Platform array_kFieldTrialConfig_platforms_74[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_74[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_74,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_70,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_69[] = {
      "InitialDelayForBrokenAlternativeService",
      "MaxDelayForBrokenAlternativeService",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_19[] = {
      {
        "InitialDelayForBrokenAlternativeServiceParam",
        "1s",
      },
      {
        "MaxDelayForBrokenAlternativeServiceParam",
        "5m",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_73[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_73[] = {
    {
      "Initial1s_Max5m_20260804",
      array_kFieldTrialConfig_platforms_73,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_19,
      array_kFieldTrialConfig_enable_features_69,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_68[] = {
      "BoostClosingTabs",
};
const Study::Platform array_kFieldTrialConfig_platforms_72[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_72[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_72,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_68,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_67[] = {
      "BeaconLeakageLogging",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_18[] = {
      {
        "category_param_name",
        "category",
      },
      {
        "category_prefix",
        "acrcp_v1_",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_71[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_71[] = {
    {
      "Enabled_v1",
      array_kFieldTrialConfig_platforms_71,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_18,
      array_kFieldTrialConfig_enable_features_67,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_66[] = {
      "BatterySaverModeAlignWakeUps",
      "LowerHighResolutionTimerThreshold",
};
const Study::Platform array_kFieldTrialConfig_platforms_70[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_70[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_70,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_66,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_65[] = {
      "BaseLockTrySpin",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_17[] = {
      {
        "spin_count_arm",
        "2048",
      },
      {
        "spin_count_x86",
        "64",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_69[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_69[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_69,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_17,
      array_kFieldTrialConfig_enable_features_65,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_64[] = {
      "BackForwardCacheCCNSIgnoreUnchangedCookies",
};
const Study::Platform array_kFieldTrialConfig_platforms_68[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_68[] = {
    {
      "Enabled_20260401",
      array_kFieldTrialConfig_platforms_68,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_64,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_63[] = {
      "AvoidEntryCreationForNoStore",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_16[] = {
      {
        "AvoidEntryCreationForNoStoreCacheSize",
        "40000",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_67[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_67[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_67,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_16,
      array_kFieldTrialConfig_enable_features_63,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_62[] = {
      "PasswordChangeWithPrivateInferenceLoginCheck",
};
const Study::Platform array_kFieldTrialConfig_platforms_66[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_66[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_66,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_62,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_61[] = {
      "ManageYourSavedInfoPerceptionSurvey",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_15[] = {
      {
        "en_site_id",
        "WXYnANbag0ugnJ3q1cK0VFQoCCc6",
      },
      {
        "probability",
        "1.0",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_65[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_65[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_65,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_15,
      array_kFieldTrialConfig_enable_features_61,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_60[] = {
      "ManageTravelPerceptionSurvey",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_14[] = {
      {
        "en_site_id",
        "BMDitf87k0ugnJ3q1cK0WAQpAUHL",
      },
      {
        "probability",
        "1.0",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_64[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_64[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_64,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_14,
      array_kFieldTrialConfig_enable_features_60,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_59[] = {
      "ManagePaymentsPerceptionSurvey",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_13[] = {
      {
        "en_site_id",
        "T34te18s70ugnJ3q1cK0WkcbNS8q",
      },
      {
        "probability",
        "1.0",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_63[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_63[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_63,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_13,
      array_kFieldTrialConfig_enable_features_59,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_58[] = {
      "ManagePasswordsPerceptionSurvey",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_12[] = {
      {
        "en_site_id",
        "Ly1DRujsU0ugnJ3q1cK0Rp3b653o",
      },
      {
        "probability",
        "1.0",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_62[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_62[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_62,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_12,
      array_kFieldTrialConfig_enable_features_58,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_57[] = {
      "ManageIdentityDocsPerceptionSurvey",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_11[] = {
      {
        "en_site_id",
        "wXADnYhDc0ugnJ3q1cK0PtnpgtMy",
      },
      {
        "probability",
        "1.0",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_61[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_61[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_61,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_11,
      array_kFieldTrialConfig_enable_features_57,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_56[] = {
      "ManageContactInfoPerceptionSurvey",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_10[] = {
      {
        "en_site_id",
        "2RwGAREwh0ugnJ3q1cK0P55K868z",
      },
      {
        "probability",
        "1.0",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_60[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_60[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_60,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_10,
      array_kFieldTrialConfig_enable_features_56,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_55[] = {
      "AutofillWipeInvalidNameStructure",
};
const Study::Platform array_kFieldTrialConfig_platforms_59[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_59[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_59,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_55,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_54[] = {
      "AutofillUpstreamEnforceStrikeDelay",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_9[] = {
      {
        "autofill_upstream_enforce_strike_delay_days",
        "1",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_58[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_58[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_58,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_9,
      array_kFieldTrialConfig_enable_features_54,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_53[] = {
      "AutofillUpstream",
};
const Study::Platform array_kFieldTrialConfig_platforms_57[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_57[] = {
    {
      "Enabled_20220124",
      array_kFieldTrialConfig_platforms_57,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_53,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_52[] = {
      "AutofillUKMExperimentalFields",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_8[] = {
      {
        "autofill_experimental_regex_bucket1",
        "test1",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_56[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_56[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_56,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_8,
      array_kFieldTrialConfig_enable_features_52,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_disable_features_3[] = {
      "AutofillAddressSurvey",
      "AutofillPasswordSurvey",
};
const char* const array_kFieldTrialConfig_enable_features_51[] = {
      "AutofillCardSurvey",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_7[] = {
      {
        "en_site_id",
        "F2fsskHvB0ugnJ3q1cK0NXLjUaK5",
      },
      {
        "probability",
        "1.0",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_55[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_55[] = {
    {
      "Card_20230606",
      array_kFieldTrialConfig_platforms_55,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_7,
      array_kFieldTrialConfig_enable_features_51,
      array_kFieldTrialConfig_disable_features_3,
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_50[] = {
      "AutofillSupportStandaloneZipCodeGlobally",
};
const Study::Platform array_kFieldTrialConfig_platforms_54[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_54[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_54,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_50,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_49[] = {
      "AutofillDisallowMoreHyphenLikeLabels",
      "AutofillSupportSplitZipCode",
};
const Study::Platform array_kFieldTrialConfig_platforms_53[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_53[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_53,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_49,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_48[] = {
      "AutofillRequireFocusInFrameForSuggestions",
};
const Study::Platform array_kFieldTrialConfig_platforms_52[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_52[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_52,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_48,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_47[] = {
      "AutofillPopupDontAcceptNonVisibleEnoughSuggestion",
};
const Study::Platform array_kFieldTrialConfig_platforms_51[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_51[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_51,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_47,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_46[] = {
      "AutofillOptimizeIsNormalizedNameVariantOf",
};
const Study::Platform array_kFieldTrialConfig_platforms_50[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_50[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_50,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_46,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_45[] = {
      "AutofillOnlyConsiderSingleFieldFormsAsSearchForms",
};
const Study::Platform array_kFieldTrialConfig_platforms_49[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_49[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_49,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_45,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_44[] = {
      "AutofillNewSuggestionGeneration",
};
const Study::Platform array_kFieldTrialConfig_platforms_48[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_48[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_48,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_44,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_43[] = {
      "AutofillMoveSmallFormLogicToClient",
};
const Study::Platform array_kFieldTrialConfig_platforms_47[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_47[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_47,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_43,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_42[] = {
      "AutofillMergeAddressAndAutocompleteEmailSuggestions",
};
const Study::Platform array_kFieldTrialConfig_platforms_46[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_46[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_46,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_42,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_41[] = {
      "AutofillLabelSensitiveAutocomplete",
};
const Study::Platform array_kFieldTrialConfig_platforms_45[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_45[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_45,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_41,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_40[] = {
      "AutofillKeydownEditableElement",
};
const Study::Platform array_kFieldTrialConfig_platforms_44[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_44[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_44,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_40,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_39[] = {
      "AutofillIntroduceGlobalEmptyValueRewriterRules",
};
const Study::Platform array_kFieldTrialConfig_platforms_43[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_43[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_43,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_39,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_38[] = {
      "AutofillImproveClassificationForTwoWordLastNames",
};
const Study::Platform array_kFieldTrialConfig_platforms_42[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_42[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_42,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_38,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_37[] = {
      "AutofillIgnoreLayoutInducedScrollEvents",
};
const Study::Platform array_kFieldTrialConfig_platforms_41[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_41[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_41,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_37,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_36[] = {
      "AutofillHideSuggestionsOnFocusChange",
};
const Study::Platform array_kFieldTrialConfig_platforms_40[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_40[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_40,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_36,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_35[] = {
      "AutofillGmailOtpPreLaunchMetrics",
      "PasswordFormClientsideClassifier",
};
const Study::Platform array_kFieldTrialConfig_platforms_39[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_39[] = {
    {
      "EnabledWithFieldDetection",
      array_kFieldTrialConfig_platforms_39,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_35,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_34[] = {
      "AutofillFixIframeOwnership",
};
const Study::Platform array_kFieldTrialConfig_platforms_38[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_38[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_38,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_34,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_33[] = {
      "AutofillEnableWalletReminderNotice",
};
const Study::Platform array_kFieldTrialConfig_platforms_37[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_37[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_37,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_33,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_32[] = {
      "AutofillEnableWalletBrandingV2",
};
const Study::Platform array_kFieldTrialConfig_platforms_36[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_36[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_36,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_32,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_31[] = {
      "AutofillEnableTravelCategoryAndMerchantBenefitsFromCurinos",
};
const Study::Platform array_kFieldTrialConfig_platforms_35[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_35[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_35,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_31,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_30[] = {
      "AutofillEnableOmniboxAutofill",
};
const Study::Platform array_kFieldTrialConfig_platforms_34[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_34[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_34,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_30,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_29[] = {
      "AutofillEnableExpandIbanRegexPattern",
};
const Study::Platform array_kFieldTrialConfig_platforms_33[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_33[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_33,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_29,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_28[] = {
      "AutofillDisallowCountryCodeFilling",
};
const Study::Platform array_kFieldTrialConfig_platforms_32[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_32[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_32,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_28,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_27[] = {
      "AutofillDelayApcForPredictions",
};
const Study::Platform array_kFieldTrialConfig_platforms_31[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_31[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_31,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_27,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_26[] = {
      "AutofillComplementCountryUsingPhoneNumber",
};
const Study::Platform array_kFieldTrialConfig_platforms_30[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_30[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_30,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_26,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_25[] = {
      "AutofillBetterLocalHeuristicPlaceholderSupport",
};
const Study::Platform array_kFieldTrialConfig_platforms_29[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_29[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_29,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_25,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_24[] = {
      "AutofillAiWalletServerProvidedDeepLink",
};
const Study::Platform array_kFieldTrialConfig_platforms_28[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_28[] = {
    {
      "Enabled_20261007",
      array_kFieldTrialConfig_platforms_28,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_24,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_23[] = {
      "AutofillAiNewUpdatePrompt",
      "AutofillAiWalletPrivatePasses",
      "AutofillAiWalletPrivatePassesDeepLink",
      "SuggestionManageButtonSplitForEnhancedAutofill",
      "WalletApiPrivatePassesEnabled",
};
const Study::Platform array_kFieldTrialConfig_platforms_27[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_27[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_27,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_23,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_22[] = {
      "AutofillAiWalletPassBranding2026",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_6[] = {
      {
        "string_variant",
        "0",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_26[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_26[] = {
    {
      "Enabled_GoogleWallet",
      array_kFieldTrialConfig_platforms_26,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_6,
      array_kFieldTrialConfig_enable_features_22,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_21[] = {
      "AutofillAiUsePrivateAi",
};
const Study::Platform array_kFieldTrialConfig_platforms_25[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_25[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_25,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_21,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_20[] = {
      "AutofillAiWalletShopping",
      "AutofillEnableAutofillSettingsEnterprisePolicy",
};
const Study::Platform array_kFieldTrialConfig_platforms_24[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_24[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_24,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_20,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_19[] = {
      "AutoSpeculationRules",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_5[] = {
      {
        "config",
        "{\"framework_to_speculation_rules\":{\"12\":\"{\\\"prefetch\\\":[{\\\"source\\\":\\\"document\\\",\\\"eagerness\\\":\\\"conservative\\\",\\\"where\\\":{\\\"href_matches\\\":\\\"/*\\\"}}]}\"}}",
      },
      {
        "holdback",
        "false",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_23[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_23[] = {
    {
      "Enabled_20231201",
      array_kFieldTrialConfig_platforms_23,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_5,
      array_kFieldTrialConfig_enable_features_19,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_18[] = {
      "AutoPictureInPictureSurveys",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_4[] = {
      {
        "autopip_reason",
        "VideoConferencing",
      },
      {
        "en_site_id",
        "zrpDNzCuQ0ugnJ3q1cK0XjBotKRz",
      },
      {
        "probability",
        "0.37",
      },
      {
        "prompt_result",
        "AllowOnce",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_22[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_22[] = {
    {
      "VideoConferencing_AllowedOnce",
      array_kFieldTrialConfig_platforms_22,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_4,
      array_kFieldTrialConfig_enable_features_18,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_17[] = {
      "AutoPictureInPictureOnWindowOccluded",
};
const Study::Platform array_kFieldTrialConfig_platforms_21[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_21[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_21,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_17,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_disable_features_2[] = {
      "ConversionMeasurement",
};
const Study::Platform array_kFieldTrialConfig_platforms_20[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_20[] = {
    {
      "Disabled",
      array_kFieldTrialConfig_platforms_20,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      {},
      array_kFieldTrialConfig_disable_features_2,
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_16[] = {
      "AtMemoryMqlsLogging",
      "AutofillAtMemory",
      "AutofillAtMemoryDoubleCtrl",
      "AutofillAtMemoryPreviouslyFilled",
      "AutofillAtMemorySearchStatefulness",
      "AutofillAtMemorySupportContenteditableOnAndroid",
      "AutofillAtMemorySupportTextAreaOnAndroid",
      "AutofillAtMemoryTriggerShortcut",
      "AutofillEnableKeyboardAccessoryOnSearchFields",
      "AutofillSupportContentEditableIos",
      "IPH_AutofillAtMemory",
      "PersonalContextForceEnablementState",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_3[] = {
      {
        "state",
        "2",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_19[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_19[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_19,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_3,
      array_kFieldTrialConfig_enable_features_16,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_15[] = {
      "AsyncThreadPoolInit",
};
const Study::Platform array_kFieldTrialConfig_platforms_18[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_18[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_18,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_15,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_14[] = {
      "AsyncProxyResolverApple",
};
const Study::Platform array_kFieldTrialConfig_platforms_17[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_17[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_17,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_14,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_13[] = {
      "AsyncDnsQuicJob",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_2[] = {
      {
        "AsyncDnsQuicJobFastFail",
        "true",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_16[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_16[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_16,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_2,
      array_kFieldTrialConfig_enable_features_13,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_12[] = {
      "AsyncBeforeUnload",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_1[] = {
      {
        "AsyncBeforeUnloadTimeout",
        "500ms",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_15[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_15[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_15,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_1,
      array_kFieldTrialConfig_enable_features_12,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_11[] = {
      "AppShimNotificationAttribution",
};
const Study::Platform array_kFieldTrialConfig_platforms_14[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_14[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_14,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_11,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_10[] = {
      "AppMenuGlowUp",
};
const Study::Platform array_kFieldTrialConfig_platforms_13[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_13[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_13,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_10,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_9[] = {
      "ApiGlicAccessFromPromotionPage",
};
const Study::Platform array_kFieldTrialConfig_platforms_12[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_12[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_12,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_9,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_8[] = {
      "AperitifHelpers",
};
const Study::Platform array_kFieldTrialConfig_platforms_11[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_11[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_11,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_8,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_7[] = {
      "AnnotatedPageContentPDFTextExtraction",
      "PDFEmbeddingsGeneration",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_0[] = {
      {
        "MaxPassagesFromPDF",
        "10",
      },
      {
        "max_text_byte_size",
        "1048576",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_10[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_10[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_10,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_0,
      array_kFieldTrialConfig_enable_features_7,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_disable_features_1[] = {
      "AnnotatedPageContentNonSalientFiltering",
};
const Study::Platform array_kFieldTrialConfig_platforms_9[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_9[] = {
    {
      "Disabled",
      array_kFieldTrialConfig_platforms_9,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      {},
      array_kFieldTrialConfig_disable_features_1,
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_disable_features_0[] = {
      "AnnotatedPageContentExtractionOnHideFix",
};
const Study::Platform array_kFieldTrialConfig_platforms_8[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_8[] = {
    {
      "Disabled",
      array_kFieldTrialConfig_platforms_8,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      {},
      array_kFieldTrialConfig_disable_features_0,
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_6[] = {
      "AnnotatedPageContentExtraction",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params[] = {
      {
        "capture_delay",
        "5s",
      },
      {
        "on_critical_path",
        "true",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_7[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_7[] = {
    {
      "Glic",
      array_kFieldTrialConfig_platforms_7,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params,
      array_kFieldTrialConfig_enable_features_6,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_5[] = {
      "AlignPdfDefaultPrintSettingsWithHTML",
};
const Study::Platform array_kFieldTrialConfig_platforms_6[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_6[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_6,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_5,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_4[] = {
      "Aim3pEntrypoint",
};
const Study::Platform array_kFieldTrialConfig_platforms_5[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_5[] = {
    {
      "enabled",
      array_kFieldTrialConfig_platforms_5,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_4,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_3[] = {
      "EnableAiSubscriptionAvatarRing",
};
const Study::Platform array_kFieldTrialConfig_platforms_4[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_4[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_4,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_3,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_2[] = {
      "AddressSorterConnectCache",
};
const Study::Platform array_kFieldTrialConfig_platforms_3[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_3[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_3,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_2,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_1[] = {
      "AXTreeFixing",
};
const Study::Platform array_kFieldTrialConfig_platforms_2[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_2[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_2,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_1,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_0[] = {
      "AXRandomizedStressTests",
};
const Study::Platform array_kFieldTrialConfig_platforms_1[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_1[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_1,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_0,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_disable_features[] = {
      "AVFoundationCaptureForwardSampleTimestamps",
};
const Study::Platform array_kFieldTrialConfig_platforms_0[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_0[] = {
    {
      "Disabled",
      array_kFieldTrialConfig_platforms_0,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      {},
      array_kFieldTrialConfig_disable_features,
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features[] = {
      "ANGLEPurgeableBufferPool",
      "ANGLETrimMemoryOnIdle",
};
const Study::Platform array_kFieldTrialConfig_platforms[] = {
      Study::PLATFORM_MAC,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const FieldTrialTestingStudy array_kFieldTrialConfig_studies[] = {
  {
    "ANGLEPurgeableBufferPool",
    array_kFieldTrialConfig_experiments,
  },
  {
    "AVFoundationCaptureForwardSampleTimestamps",
    array_kFieldTrialConfig_experiments_0,
  },
  {
    "AXRandomizedStressTests",
    array_kFieldTrialConfig_experiments_1,
  },
  {
    "AXTreeFixing",
    array_kFieldTrialConfig_experiments_2,
  },
  {
    "AddressSorterConnectCache",
    array_kFieldTrialConfig_experiments_3,
  },
  {
    "AiSubscriptionAvatarRingDesktop",
    array_kFieldTrialConfig_experiments_4,
  },
  {
    "Aim3pEntrypoint",
    array_kFieldTrialConfig_experiments_5,
  },
  {
    "AlignPdfDefaultPrintSettingsWithHTML",
    array_kFieldTrialConfig_experiments_6,
  },
  {
    "AnnotatedPageContentExtraction",
    array_kFieldTrialConfig_experiments_7,
  },
  {
    "AnnotatedPageContentExtractionOnHideFix",
    array_kFieldTrialConfig_experiments_8,
  },
  {
    "AnnotatedPageContentNonSalientFilteringHoldback",
    array_kFieldTrialConfig_experiments_9,
  },
  {
    "AnnotatedPageContentPDFTextExtraction",
    array_kFieldTrialConfig_experiments_10,
  },
  {
    "AperitifHelpers",
    array_kFieldTrialConfig_experiments_11,
  },
  {
    "ApiGlicAccessFromPromotionPage",
    array_kFieldTrialConfig_experiments_12,
  },
  {
    "AppMenuGlowUp",
    array_kFieldTrialConfig_experiments_13,
  },
  {
    "AppShimNotificationAttribution",
    array_kFieldTrialConfig_experiments_14,
  },
  {
    "AsyncBeforeUnload",
    array_kFieldTrialConfig_experiments_15,
  },
  {
    "AsyncDnsQuicJob",
    array_kFieldTrialConfig_experiments_16,
  },
  {
    "AsyncProxyResolverApple",
    array_kFieldTrialConfig_experiments_17,
  },
  {
    "AsyncThreadPoolInit",
    array_kFieldTrialConfig_experiments_18,
  },
  {
    "AtMemoryDogfood",
    array_kFieldTrialConfig_experiments_19,
  },
  {
    "AttributionReportingDeprecation",
    array_kFieldTrialConfig_experiments_20,
  },
  {
    "AutoPictureInPictureOnWindowOccluded",
    array_kFieldTrialConfig_experiments_21,
  },
  {
    "AutoPictureInPictureSurveys_VideoConferencing",
    array_kFieldTrialConfig_experiments_22,
  },
  {
    "AutoSpeculationRules",
    array_kFieldTrialConfig_experiments_23,
  },
  {
    "AutofillAiM5",
    array_kFieldTrialConfig_experiments_24,
  },
  {
    "AutofillAiUsePrivateAi",
    array_kFieldTrialConfig_experiments_25,
  },
  {
    "AutofillAiWalletPassBranding2026",
    array_kFieldTrialConfig_experiments_26,
  },
  {
    "AutofillAiWalletPrivatePasses",
    array_kFieldTrialConfig_experiments_27,
  },
  {
    "AutofillAiWalletServerProvidedDeepLink",
    array_kFieldTrialConfig_experiments_28,
  },
  {
    "AutofillBetterLocalHeuristicPlaceholderSupport",
    array_kFieldTrialConfig_experiments_29,
  },
  {
    "AutofillComplementCountryUsingPhoneNumber",
    array_kFieldTrialConfig_experiments_30,
  },
  {
    "AutofillDelayApcForPredictions",
    array_kFieldTrialConfig_experiments_31,
  },
  {
    "AutofillDisallowCountryCodeFilling",
    array_kFieldTrialConfig_experiments_32,
  },
  {
    "AutofillEnableExpandIbanRegexPattern",
    array_kFieldTrialConfig_experiments_33,
  },
  {
    "AutofillEnableOmniboxAutofill",
    array_kFieldTrialConfig_experiments_34,
  },
  {
    "AutofillEnableTravelCategoryAndMerchantBenefitsFromCurinos",
    array_kFieldTrialConfig_experiments_35,
  },
  {
    "AutofillEnableWalletBrandingV2",
    array_kFieldTrialConfig_experiments_36,
  },
  {
    "AutofillEnableWalletReminderNotice",
    array_kFieldTrialConfig_experiments_37,
  },
  {
    "AutofillFixIframeOwnership",
    array_kFieldTrialConfig_experiments_38,
  },
  {
    "AutofillGmailOtpPreLaunchMetrics",
    array_kFieldTrialConfig_experiments_39,
  },
  {
    "AutofillHideSuggestionsOnFocusChange",
    array_kFieldTrialConfig_experiments_40,
  },
  {
    "AutofillIgnoreLayoutInducedScrollEvents",
    array_kFieldTrialConfig_experiments_41,
  },
  {
    "AutofillImproveClassificationForTwoWordLastNames",
    array_kFieldTrialConfig_experiments_42,
  },
  {
    "AutofillIntroduceGlobalEmptyValueRewriterRules",
    array_kFieldTrialConfig_experiments_43,
  },
  {
    "AutofillKeydownEditableElement",
    array_kFieldTrialConfig_experiments_44,
  },
  {
    "AutofillLabelSensitiveAutocomplete",
    array_kFieldTrialConfig_experiments_45,
  },
  {
    "AutofillMergeAddressAndAutocompleteEmailSuggestions",
    array_kFieldTrialConfig_experiments_46,
  },
  {
    "AutofillMoveSmallFormLogicToClient",
    array_kFieldTrialConfig_experiments_47,
  },
  {
    "AutofillNewSuggestionGeneration",
    array_kFieldTrialConfig_experiments_48,
  },
  {
    "AutofillOnlyConsiderSingleFieldFormsAsSearchForms",
    array_kFieldTrialConfig_experiments_49,
  },
  {
    "AutofillOptimizeIsNormalizedNameVariantOf",
    array_kFieldTrialConfig_experiments_50,
  },
  {
    "AutofillPopupDontAcceptNonVisibleEnoughSuggestion",
    array_kFieldTrialConfig_experiments_51,
  },
  {
    "AutofillRequireFocusInFrameForSuggestions",
    array_kFieldTrialConfig_experiments_52,
  },
  {
    "AutofillSupportSplitZipCode",
    array_kFieldTrialConfig_experiments_53,
  },
  {
    "AutofillSupportStandaloneZipCodeGlobally",
    array_kFieldTrialConfig_experiments_54,
  },
  {
    "AutofillSurveys",
    array_kFieldTrialConfig_experiments_55,
  },
  {
    "AutofillUKMExperimentalFields",
    array_kFieldTrialConfig_experiments_56,
  },
  {
    "AutofillUpstream",
    array_kFieldTrialConfig_experiments_57,
  },
  {
    "AutofillUpstreamEnforceStrikeDelay",
    array_kFieldTrialConfig_experiments_58,
  },
  {
    "AutofillWipeInvalidNameStructure",
    array_kFieldTrialConfig_experiments_59,
  },
  {
    "AutofillYourSavedInfoHatsSurveysContactInfo",
    array_kFieldTrialConfig_experiments_60,
  },
  {
    "AutofillYourSavedInfoHatsSurveysIdentityDocs",
    array_kFieldTrialConfig_experiments_61,
  },
  {
    "AutofillYourSavedInfoHatsSurveysPasswords",
    array_kFieldTrialConfig_experiments_62,
  },
  {
    "AutofillYourSavedInfoHatsSurveysPayments",
    array_kFieldTrialConfig_experiments_63,
  },
  {
    "AutofillYourSavedInfoHatsSurveysTravel",
    array_kFieldTrialConfig_experiments_64,
  },
  {
    "AutofillYourSavedInfoHatsSurveysYourSavedInfo",
    array_kFieldTrialConfig_experiments_65,
  },
  {
    "AutomatedPasswordChangeWithPrivateInferenceLoginCheck",
    array_kFieldTrialConfig_experiments_66,
  },
  {
    "AvoidEntryCreationForNoStore",
    array_kFieldTrialConfig_experiments_67,
  },
  {
    "BackForwardCacheCCNSIgnoreUnchangedCookies",
    array_kFieldTrialConfig_experiments_68,
  },
  {
    "BaseLockTrySpin",
    array_kFieldTrialConfig_experiments_69,
  },
  {
    "BatterySaverModeAlignWakeUps",
    array_kFieldTrialConfig_experiments_70,
  },
  {
    "BeaconLeakageLogging",
    array_kFieldTrialConfig_experiments_71,
  },
  {
    "BoostClosingTabs",
    array_kFieldTrialConfig_experiments_72,
  },
  {
    "BrokenAlternativeServiceDelays",
    array_kFieldTrialConfig_experiments_73,
  },
  {
    "BrowserInitiatedAutomaticPictureInPicture",
    array_kFieldTrialConfig_experiments_74,
  },
  {
    "BrowserInitiatedAutomaticPictureInPictureDryRun",
    array_kFieldTrialConfig_experiments_75,
  },
  {
    "BrowserSignalsReportingEnabled",
    array_kFieldTrialConfig_experiments_76,
  },
  {
    "BrowserStratus",
    array_kFieldTrialConfig_experiments_77,
  },
  {
    "BrowserThreadPoolAdjustmentForDesktop",
    array_kFieldTrialConfig_experiments_78,
  },
  {
    "BrowsingDataModelSharedWorkerKeyWithoutURL",
    array_kFieldTrialConfig_experiments_79,
  },
  {
    "BrowsingHistoryFilterDropdownPhase1Desktop",
    array_kFieldTrialConfig_experiments_80,
  },
  {
    "BuildTFLiteModelExecutionTaskOnLoadingThread",
    array_kFieldTrialConfig_experiments_81,
  },
  {
    "CADisplayLinkInGpu",
    array_kFieldTrialConfig_experiments_82,
  },
  {
    "CWSReviewPromptingNativeUI",
    array_kFieldTrialConfig_experiments_83,
  },
  {
    "CacheGurlSchemeIsHttpOrHttpsResult",
    array_kFieldTrialConfig_experiments_84,
  },
  {
    "Canvas2dDeferredFlush",
    array_kFieldTrialConfig_experiments_85,
  },
  {
    "CanvasAccessibility",
    array_kFieldTrialConfig_experiments_86,
  },
  {
    "CastMirroringNativeNV12",
    array_kFieldTrialConfig_experiments_87,
  },
  {
    "CastStreamingExponentialVideoBitrateAlgorithm",
    array_kFieldTrialConfig_experiments_88,
  },
  {
    "CastStreamingHardwareHevc",
    array_kFieldTrialConfig_experiments_89,
  },
  {
    "CastStreamingMaxVideoBitrate",
    array_kFieldTrialConfig_experiments_90,
  },
  {
    "CentralizedInfoBarFramework",
    array_kFieldTrialConfig_experiments_91,
  },
  {
    "ChildProcessSecurityPolicyRust",
    array_kFieldTrialConfig_experiments_92,
  },
  {
    "ChromeRefreshTokenBindingUpgrade",
    array_kFieldTrialConfig_experiments_93,
  },
  {
    "ChromeWallpaperSearchLaunch",
    array_kFieldTrialConfig_experiments_94,
  },
  {
    "ChromeWideEchoCancellation",
    array_kFieldTrialConfig_experiments_95,
  },
  {
    "ChromnientEduActionChipV2",
    array_kFieldTrialConfig_experiments_96,
  },
  {
    "ChromnientNonBlockingPrivacyNoticeForImageSearch",
    array_kFieldTrialConfig_experiments_97,
  },
  {
    "ChromnientReinvocationAffordance",
    array_kFieldTrialConfig_experiments_98,
  },
  {
    "ChromnientSidePanelOpenInNewTab",
    array_kFieldTrialConfig_experiments_99,
  },
  {
    "ChromnientSurvey",
    array_kFieldTrialConfig_experiments_100,
  },
  {
    "ChromnientTextSelectionContextMenuEntrypoint",
    array_kFieldTrialConfig_experiments_101,
  },
  {
    "ChromnientUpdatedClientContext",
    array_kFieldTrialConfig_experiments_102,
  },
  {
    "ClearBrowsingHistoryJourney",
    array_kFieldTrialConfig_experiments_103,
  },
  {
    "ClearGrShaderDiskCacheOnInvalidPrefix",
    array_kFieldTrialConfig_experiments_104,
  },
  {
    "ClientSideDetectionBypassTiers",
    array_kFieldTrialConfig_experiments_105,
  },
  {
    "ClientSideDetectionCreditCardForm",
    array_kFieldTrialConfig_experiments_106,
  },
  {
    "ClientSideDetectionImageEmbeddingMatch",
    array_kFieldTrialConfig_experiments_107,
  },
  {
    "ClientSideDetectionRetryLimit",
    array_kFieldTrialConfig_experiments_108,
  },
  {
    "ClientSideDetectionScamDetectionRequestWithUrl",
    array_kFieldTrialConfig_experiments_109,
  },
  {
    "ClientSideDetectionServerModelForScamDetectionDesktop",
    array_kFieldTrialConfig_experiments_110,
  },
  {
    "ClientSideDetectionTrickToBill",
    array_kFieldTrialConfig_experiments_111,
  },
  {
    "CollectAccessibilityHeuristicInCanvasUkm",
    array_kFieldTrialConfig_experiments_112,
  },
  {
    "Compare",
    array_kFieldTrialConfig_experiments_113,
  },
  {
    "ComponentsBase32InRust",
    array_kFieldTrialConfig_experiments_114,
  },
  {
    "ComposeModelQualityLogging",
    array_kFieldTrialConfig_experiments_115,
  },
  {
    "ComposeProactiveNudgePosition",
    array_kFieldTrialConfig_experiments_116,
  },
  {
    "ComposeboxDriveContextMenuOptionSigninPromo",
    array_kFieldTrialConfig_experiments_117,
  },
  {
    "ComposeboxUrlInput",
    array_kFieldTrialConfig_experiments_118,
  },
  {
    "CompositedAnimationsForceMainFrames",
    array_kFieldTrialConfig_experiments_119,
  },
  {
    "CompressionDictionaryPreload",
    array_kFieldTrialConfig_experiments_120,
  },
  {
    "CompressionDictionaryTransportRequireKnownRootCert",
    array_kFieldTrialConfig_experiments_121,
  },
  {
    "ContextHubExplorations",
    array_kFieldTrialConfig_experiments_122,
  },
  {
    "ContextManagementAndSmartTabSharing",
    array_kFieldTrialConfig_experiments_123,
  },
  {
    "ContextualCueingV2",
    array_kFieldTrialConfig_experiments_124,
  },
  {
    "ContextualTasksBackButtonExpandsSidePanel",
    array_kFieldTrialConfig_experiments_125,
  },
  {
    "ContextualTasksCookiePrefetch",
    array_kFieldTrialConfig_experiments_126,
  },
  {
    "ContextualTasksDesktop",
    array_kFieldTrialConfig_experiments_127,
  },
  {
    "ContextualTasksUploadChunking",
    array_kFieldTrialConfig_experiments_128,
  },
  {
    "ContextualTasks_EphemeralPinning_Desktop",
    array_kFieldTrialConfig_experiments_129,
  },
  {
    "ContextualTasks_Srp2Aim",
    array_kFieldTrialConfig_experiments_130,
  },
  {
    "CookieMonsterPerKeyDelete",
    array_kFieldTrialConfig_experiments_131,
  },
  {
    "CreateNetworkContextNonBlocking",
    array_kFieldTrialConfig_experiments_132,
  },
  {
    "CriticalActionsHistory",
    array_kFieldTrialConfig_experiments_133,
  },
  {
    "CustomizeChromeJourney",
    array_kFieldTrialConfig_experiments_134,
  },
  {
    "DecodeScriptsInBlink",
    array_kFieldTrialConfig_experiments_135,
  },
  {
    "DefaultBrowserChangedOsNotification",
    array_kFieldTrialConfig_experiments_136,
  },
  {
    "DefaultBrowserFramework",
    array_kFieldTrialConfig_experiments_137,
  },
  {
    "DeferredDownloadHistoryLoading",
    array_kFieldTrialConfig_experiments_138,
  },
  {
    "DelayMainJobStudyDesktop",
    array_kFieldTrialConfig_experiments_139,
  },
  {
    "DesktopCapturePermissionCheckerPreMacos14_4",
    array_kFieldTrialConfig_experiments_140,
  },
  {
    "DesktopNtpDriveModuleLink",
    array_kFieldTrialConfig_experiments_141,
  },
  {
    "DesktopNtpModulesTabGroups",
    array_kFieldTrialConfig_experiments_142,
  },
  {
    "DesktopNtpOneGoogleBarAsyncBarParts",
    array_kFieldTrialConfig_experiments_143,
  },
  {
    "DesktopNtpTabResumption",
    array_kFieldTrialConfig_experiments_144,
  },
  {
    "DesktopOmniboxCalculatorProvider",
    array_kFieldTrialConfig_experiments_145,
  },
  {
    "DesktopOmniboxStarterPackExpansion",
    array_kFieldTrialConfig_experiments_146,
  },
  {
    "DesktopPWAInstallPromotionML",
    array_kFieldTrialConfig_experiments_147,
  },
  {
    "DesktopToMobilePromos",
    array_kFieldTrialConfig_experiments_148,
  },
  {
    "DesktopWebUIOmniboxAskGAboutThisPage",
    array_kFieldTrialConfig_experiments_149,
  },
  {
    "DevToolsAiV2Architecture",
    array_kFieldTrialConfig_experiments_150,
  },
  {
    "DevToolsConsoleInsightsTeasers",
    array_kFieldTrialConfig_experiments_151,
  },
  {
    "DeviceBoundSessionCredentialsMac",
    array_kFieldTrialConfig_experiments_152,
  },
  {
    "DeviceBoundSessionsDsePrewarmerMac",
    array_kFieldTrialConfig_experiments_153,
  },
  {
    "DeviceBoundSessionsMtlsDogfood",
    array_kFieldTrialConfig_experiments_154,
  },
  {
    "DeviceBoundSessionsRetryTransientRefreshErrors",
    array_kFieldTrialConfig_experiments_155,
  },
  {
    "DeviceSignalsBackfillDisclaimer",
    array_kFieldTrialConfig_experiments_156,
  },
  {
    "Dictation",
    array_kFieldTrialConfig_experiments_157,
  },
  {
    "DisableComposeboxWarmupRequests",
    array_kFieldTrialConfig_experiments_158,
  },
  {
    "DisableGlicActorUiMagicCursorAnimation",
    array_kFieldTrialConfig_experiments_159,
  },
  {
    "DisablePersistBrokenAlternativeServices",
    array_kFieldTrialConfig_experiments_160,
  },
  {
    "DisallowLegacyPrefMacFallback",
    array_kFieldTrialConfig_experiments_161,
  },
  {
    "DiscardCompositionBackBuffersMac",
    array_kFieldTrialConfig_experiments_162,
  },
  {
    "DiscountAutoPopup",
    array_kFieldTrialConfig_experiments_163,
  },
  {
    "DiskCacheBackendExperiment",
    array_kFieldTrialConfig_experiments_164,
  },
  {
    "DnsHttpsSvcbTimeout",
    array_kFieldTrialConfig_experiments_165,
  },
  {
    "DnsOverHttpsQuad9Secure",
    array_kFieldTrialConfig_experiments_166,
  },
  {
    "DomStorageSqliteNewDatabases",
    array_kFieldTrialConfig_experiments_167,
  },
  {
    "DsePreload2",
    array_kFieldTrialConfig_experiments_168,
  },
  {
    "DumpWithoutCrashingForMissingSecurityState",
    array_kFieldTrialConfig_experiments_169,
  },
  {
    "DynamicProfileCountryV2Desktop",
    array_kFieldTrialConfig_experiments_170,
  },
  {
    "EagerStorageAccessPermissionCheck",
    array_kFieldTrialConfig_experiments_171,
  },
  {
    "EarlyCookieLoadOnPreconnect",
    array_kFieldTrialConfig_experiments_172,
  },
  {
    "EnableAccountPreviewDataFetchOptimizations",
    array_kFieldTrialConfig_experiments_173,
  },
  {
    "EnableAccountPreviewPreferredAccount",
    array_kFieldTrialConfig_experiments_174,
  },
  {
    "EnableAccountPreviewPreferredAccountFollowup",
    array_kFieldTrialConfig_experiments_175,
  },
  {
    "EnableBestEffortTaskInhibitingPolicy",
    array_kFieldTrialConfig_experiments_176,
  },
  {
    "EnableDiscountOnShoppyPagesDesktop",
    array_kFieldTrialConfig_experiments_177,
  },
  {
    "EnableDrDc",
    array_kFieldTrialConfig_experiments_178,
  },
  {
    "EnableDynamicRouteFetching",
    array_kFieldTrialConfig_experiments_179,
  },
  {
    "EnableGlicAiAvatarRingInFloatyDesktop",
    array_kFieldTrialConfig_experiments_180,
  },
  {
    "EnableHangWatcher",
    array_kFieldTrialConfig_experiments_181,
  },
  {
    "EnableHangWatcherOnGpuProcess",
    array_kFieldTrialConfig_experiments_182,
  },
  {
    "EnableNewUploadSizeLimit",
    array_kFieldTrialConfig_experiments_183,
  },
  {
    "EnableOnDeviceWebSpeechSmallExpertModel",
    array_kFieldTrialConfig_experiments_184,
  },
  {
    "EnablePDPMetricsUSDesktopIOS",
    array_kFieldTrialConfig_experiments_185,
  },
  {
    "EnableShouldShowPromotion",
    array_kFieldTrialConfig_experiments_186,
  },
  {
    "EnableWatermarkTimestampTimezone",
    array_kFieldTrialConfig_experiments_187,
  },
  {
    "EncryptBookmarks_Phase2",
    array_kFieldTrialConfig_experiments_188,
  },
  {
    "EncryptSessionStorage_Phase2",
    array_kFieldTrialConfig_experiments_189,
  },
  {
    "EnhancedFieldsForSecOps",
    array_kFieldTrialConfig_experiments_190,
  },
  {
    "EnterpriseDataProtectionForGlic",
    array_kFieldTrialConfig_experiments_191,
  },
  {
    "EventTimingIgnorePresentationTimeFromUnexpectedFrameSource",
    array_kFieldTrialConfig_experiments_192,
  },
  {
    "ExtensionServiceWorkerVoter",
    array_kFieldTrialConfig_experiments_193,
  },
  {
    "ExtensionsApiRuntimeGetPlatformInfoNaClArch",
    array_kFieldTrialConfig_experiments_194,
  },
  {
    "ExtensionsPinnedByDefault",
    array_kFieldTrialConfig_experiments_195,
  },
  {
    "ExtensionsToolbarAndMenuRedesign",
    array_kFieldTrialConfig_experiments_196,
  },
  {
    "ExtensionsZeroStatePromo",
    array_kFieldTrialConfig_experiments_197,
  },
  {
    "ExtremeLightweightUAFDetector",
    array_kFieldTrialConfig_experiments_198,
  },
  {
    "FedCmIntrusion",
    array_kFieldTrialConfig_experiments_199,
  },
  {
    "FeedbackDisabledDialog",
    array_kFieldTrialConfig_experiments_200,
  },
  {
    "FencedFramesDeprecation",
    array_kFieldTrialConfig_experiments_201,
  },
  {
    "FirstRunDesktopRevamp",
    array_kFieldTrialConfig_experiments_202,
  },
  {
    "FirstRunFeatureShowcaseGeminiStep",
    array_kFieldTrialConfig_experiments_203,
  },
  {
    "FixReadingListToggleForSyncToSigninMigratedUsers",
    array_kFieldTrialConfig_experiments_204,
  },
  {
    "FlushPersistentSystemProfileOnWrite",
    array_kFieldTrialConfig_experiments_205,
  },
  {
    "ForceSaveToCloudDeferredReporting",
    array_kFieldTrialConfig_experiments_206,
  },
  {
    "GCMMessageBuffering",
    array_kFieldTrialConfig_experiments_207,
  },
  {
    "GaiaAccountIdEnforcement",
    array_kFieldTrialConfig_experiments_208,
  },
  {
    "GeminiWebChromeCohesion",
    array_kFieldTrialConfig_experiments_209,
  },
  {
    "GlassFrame",
    array_kFieldTrialConfig_experiments_210,
  },
  {
    "GlicActorObservationDelayExcludeAdFrameLoading",
    array_kFieldTrialConfig_experiments_211,
  },
  {
    "GlicActorRolloutControl",
    array_kFieldTrialConfig_experiments_212,
  },
  {
    "GlicAutoOpenPdf",
    array_kFieldTrialConfig_experiments_213,
  },
  {
    "GlicCSPConfig_Dogfood",
    array_kFieldTrialConfig_experiments_214,
  },
  {
    "GlicColdWarmingDelay",
    array_kFieldTrialConfig_experiments_215,
  },
  {
    "GlicConfirmNavigationToNewOrigins",
    array_kFieldTrialConfig_experiments_216,
  },
  {
    "GlicDisableDaisyChainNewTabs",
    array_kFieldTrialConfig_experiments_217,
  },
  {
    "GlicDisableHfcr",
    array_kFieldTrialConfig_experiments_218,
  },
  {
    "GlicDogfood",
    array_kFieldTrialConfig_experiments_219,
  },
  {
    "GlicEmbeddedPdfBytesExtraction",
    array_kFieldTrialConfig_experiments_220,
  },
  {
    "GlicExperimentalTriggering",
    array_kFieldTrialConfig_experiments_221,
  },
  {
    "GlicForceNonSkSLBorder",
    array_kFieldTrialConfig_experiments_222,
  },
  {
    "GlicGeminiInstructions",
    array_kFieldTrialConfig_experiments_223,
  },
  {
    "GlicHorizontalTabToolbarButton",
    array_kFieldTrialConfig_experiments_224,
  },
  {
    "GlicHotkeyLocalScope",
    array_kFieldTrialConfig_experiments_225,
  },
  {
    "GlicMediaData",
    array_kFieldTrialConfig_experiments_226,
  },
  {
    "GlicMessageFirstOnboarding",
    array_kFieldTrialConfig_experiments_227,
  },
  {
    "GlicNoWebview",
    array_kFieldTrialConfig_experiments_228,
  },
  {
    "GlicPdfSummarizeButton",
    array_kFieldTrialConfig_experiments_229,
  },
  {
    "GlicPersonalContext",
    array_kFieldTrialConfig_experiments_230,
  },
  {
    "GlicReuseCookies",
    array_kFieldTrialConfig_experiments_231,
  },
  {
    "GlicShareImage",
    array_kFieldTrialConfig_experiments_232,
  },
  {
    "GlicSummarizeVideoSuggestion",
    array_kFieldTrialConfig_experiments_233,
  },
  {
    "GlicTextSelectionContextMenu",
    array_kFieldTrialConfig_experiments_234,
  },
  {
    "GlicTryItUnlaunch",
    array_kFieldTrialConfig_experiments_235,
  },
  {
    "GlicTutorialsStudy",
    array_kFieldTrialConfig_experiments_236,
  },
  {
    "GlicUserStatusCheckDogfood",
    array_kFieldTrialConfig_experiments_237,
  },
  {
    "GlicWebActuationSettingsToggle",
    array_kFieldTrialConfig_experiments_238,
  },
  {
    "GlicZeroStateSuggestionsDogfood",
    array_kFieldTrialConfig_experiments_239,
  },
  {
    "GlowUp",
    array_kFieldTrialConfig_experiments_240,
  },
  {
    "GpuInitOptimization",
    array_kFieldTrialConfig_experiments_241,
  },
  {
    "GpuPersistentCacheMetadata",
    array_kFieldTrialConfig_experiments_242,
  },
  {
    "GrCacheLimits",
    array_kFieldTrialConfig_experiments_243,
  },
  {
    "GwpAsanMallocSmartSampling",
    array_kFieldTrialConfig_experiments_244,
  },
  {
    "HangoutsExtensionV3",
    array_kFieldTrialConfig_experiments_245,
  },
  {
    "HappinessTrackingSurveysForDesktopHistoryPageControl",
    array_kFieldTrialConfig_experiments_246,
  },
  {
    "HappinessTrackingSurveysForDesktopHistoryPageExperiment",
    array_kFieldTrialConfig_experiments_247,
  },
  {
    "HappyEyeballsV2",
    array_kFieldTrialConfig_experiments_248,
  },
  {
    "HarfBuzzZeroCopyFontTable",
    array_kFieldTrialConfig_experiments_249,
  },
  {
    "HatsReadingModeSurvey",
    array_kFieldTrialConfig_experiments_250,
  },
  {
    "HeapProfilerChurnReporting",
    array_kFieldTrialConfig_experiments_251,
  },
  {
    "HeapProfilerIncludeResidency",
    array_kFieldTrialConfig_experiments_252,
  },
  {
    "HeapVectorPromptlyFree",
    array_kFieldTrialConfig_experiments_253,
  },
  {
    "HistoryDatabaseWriteAheadLogging",
    array_kFieldTrialConfig_experiments_254,
  },
  {
    "HistoryEmbeddingsUnlaunch",
    array_kFieldTrialConfig_experiments_255,
  },
  {
    "HistoryQueryBatchedLookups",
    array_kFieldTrialConfig_experiments_256,
  },
  {
    "HistoryReportClusterDatabaseMetrics",
    array_kFieldTrialConfig_experiments_257,
  },
  {
    "HttpCacheNoVarySearch",
    array_kFieldTrialConfig_experiments_258,
  },
  {
    "HttpCacheZstdCompression",
    array_kFieldTrialConfig_experiments_259,
  },
  {
    "HttpsFirstModeV2ForTypicallySecureUsers",
    array_kFieldTrialConfig_experiments_260,
  },
  {
    "I18nOptimizations",
    array_kFieldTrialConfig_experiments_261,
  },
  {
    "IDBDatabaseDumpOnHighConnectionCount",
    array_kFieldTrialConfig_experiments_262,
  },
  {
    "IPH_GMCSaveVideoFrame",
    array_kFieldTrialConfig_experiments_263,
  },
  {
    "IcuNormalizerMigration",
    array_kFieldTrialConfig_experiments_264,
  },
  {
    "IdbSqliteOnDiskRollout",
    array_kFieldTrialConfig_experiments_265,
  },
  {
    "IgnoreDuplicateNavs",
    array_kFieldTrialConfig_experiments_266,
  },
  {
    "IgnoreDuplicateNavsOnlyWithUserGesture",
    array_kFieldTrialConfig_experiments_267,
  },
  {
    "IgnoreIPMatching",
    array_kFieldTrialConfig_experiments_268,
  },
  {
    "ImageDescriptionsAlternateRouting",
    array_kFieldTrialConfig_experiments_269,
  },
  {
    "ImportExportFlagsTeamfood",
    array_kFieldTrialConfig_experiments_270,
  },
  {
    "ImprovedStartupBestEffortDelay",
    array_kFieldTrialConfig_experiments_271,
  },
  {
    "IncreaseHttp3Usage",
    array_kFieldTrialConfig_experiments_272,
  },
  {
    "IncreasedCmdBufferParseSlice",
    array_kFieldTrialConfig_experiments_273,
  },
  {
    "IndexedDBConnectionDeduplication",
    array_kFieldTrialConfig_experiments_274,
  },
  {
    "Indigo",
    array_kFieldTrialConfig_experiments_275,
  },
  {
    "InfoBarQueuedCountPill",
    array_kFieldTrialConfig_experiments_276,
  },
  {
    "InhibitMessagePumpWakeupCounter",
    array_kFieldTrialConfig_experiments_277,
  },
  {
    "InhibitSQLReleaseCacheMemoryIfNeeded",
    array_kFieldTrialConfig_experiments_278,
  },
  {
    "InlineLocationSuggestions",
    array_kFieldTrialConfig_experiments_279,
  },
  {
    "InstantHandoffPhase1FastFollows",
    array_kFieldTrialConfig_experiments_280,
  },
  {
    "IsolateSubframeErrorPages",
    array_kFieldTrialConfig_experiments_281,
  },
  {
    "LCPPDeferUnusedPreload",
    array_kFieldTrialConfig_experiments_282,
  },
  {
    "LCPPLazyLoadImagePreload",
    array_kFieldTrialConfig_experiments_283,
  },
  {
    "LCPTimingPredictorPrerender2",
    array_kFieldTrialConfig_experiments_284,
  },
  {
    "LRUCacheMemoryConsumer",
    array_kFieldTrialConfig_experiments_285,
  },
  {
    "LabelDefaultTooltipFastPath",
    array_kFieldTrialConfig_experiments_286,
  },
  {
    "LazilySetCustomActionCaption",
    array_kFieldTrialConfig_experiments_287,
  },
  {
    "LazyBlinkTimezoneInit",
    array_kFieldTrialConfig_experiments_288,
  },
  {
    "LazyInitializeSpellcheckCharAttribute",
    array_kFieldTrialConfig_experiments_289,
  },
  {
    "LazyParseInlineStyleSheets",
    array_kFieldTrialConfig_experiments_290,
  },
  {
    "LegacyKeyRepeatSynthesis",
    array_kFieldTrialConfig_experiments_291,
  },
  {
    "LensComposeboxIdentityDelegation",
    array_kFieldTrialConfig_experiments_292,
  },
  {
    "LiveCaptionExperimentalLanguages",
    array_kFieldTrialConfig_experiments_293,
  },
  {
    "LocalNetworkAccessChecks",
    array_kFieldTrialConfig_experiments_294,
  },
  {
    "LogOnDeviceMetricsOnStartup",
    array_kFieldTrialConfig_experiments_295,
  },
  {
    "MagiChromePasskeySignIn",
    array_kFieldTrialConfig_experiments_296,
  },
  {
    "MainNodeAnnotationsRollout",
    array_kFieldTrialConfig_experiments_297,
  },
  {
    "MemoryConsumerForNGShapeCache",
    array_kFieldTrialConfig_experiments_298,
  },
  {
    "MenuSimplification",
    array_kFieldTrialConfig_experiments_299,
  },
  {
    "MigrateSyncingUserToSignedInDesktop",
    array_kFieldTrialConfig_experiments_300,
  },
  {
    "MultipleSpareRPHs",
    array_kFieldTrialConfig_experiments_301,
  },
  {
    "NetTaskScheduler",
    array_kFieldTrialConfig_experiments_302,
  },
  {
    "NetworkDataMigrationMac",
    array_kFieldTrialConfig_experiments_303,
  },
  {
    "NetworkQualityEstimatorAsyncNotifyHeadersReceived",
    array_kFieldTrialConfig_experiments_304,
  },
  {
    "NewVoiceSearchUiInNtpRealbox",
    array_kFieldTrialConfig_experiments_305,
  },
  {
    "NoVarySearchCacheLoadOnSeparateTaskRunner",
    array_kFieldTrialConfig_experiments_306,
  },
  {
    "NonStandardAppearanceValueSliderVertical",
    array_kFieldTrialConfig_experiments_307,
  },
  {
    "NoopRuntimeMutableStudy1",
    array_kFieldTrialConfig_experiments_308,
  },
  {
    "NoopRuntimeMutableStudy2",
    array_kFieldTrialConfig_experiments_309,
  },
  {
    "NtpComposeboxDesktop",
    array_kFieldTrialConfig_experiments_310,
  },
  {
    "NtpGoogleLogo26",
    array_kFieldTrialConfig_experiments_311,
  },
  {
    "NtpLazyLoadComposebox",
    array_kFieldTrialConfig_experiments_312,
  },
  {
    "NtpMicrosoftFilesCard",
    array_kFieldTrialConfig_experiments_313,
  },
  {
    "NtpMostVisitedHighDpiFavicons",
    array_kFieldTrialConfig_experiments_314,
  },
  {
    "NtpNextScaledAIMerch",
    array_kFieldTrialConfig_experiments_315,
  },
  {
    "NtpRealboxCyclingPlaceholders",
    array_kFieldTrialConfig_experiments_316,
  },
  {
    "OcclusionCullingQuadSplitLimit",
    array_kFieldTrialConfig_experiments_317,
  },
  {
    "OffloadAcceptCHFrameCheck",
    array_kFieldTrialConfig_experiments_318,
  },
  {
    "OmitBlurEventOnElementRemoval",
    array_kFieldTrialConfig_experiments_319,
  },
  {
    "OmniboxBundledExperimentV1",
    array_kFieldTrialConfig_experiments_320,
  },
  {
    "OmniboxCrossDeviceTabZeroSuggest",
    array_kFieldTrialConfig_experiments_321,
  },
  {
    "OmniboxDriveTrafficReduction",
    array_kFieldTrialConfig_experiments_322,
  },
  {
    "OmniboxEverywhere",
    array_kFieldTrialConfig_experiments_323,
  },
  {
    "OmniboxLogURLScoringSignals",
    array_kFieldTrialConfig_experiments_324,
  },
  {
    "OmniboxOnDeviceBrainModel",
    array_kFieldTrialConfig_experiments_325,
  },
  {
    "OmniboxStarterPackIPH",
    array_kFieldTrialConfig_experiments_326,
  },
  {
    "OmniboxUseShortSuggestPathV1",
    array_kFieldTrialConfig_experiments_327,
  },
  {
    "OmniboxWebUIDeferShowUntilVisualStateReady",
    array_kFieldTrialConfig_experiments_328,
  },
  {
    "OmniboxWebUIPopupHideOnCreation",
    array_kFieldTrialConfig_experiments_329,
  },
  {
    "OmniboxWebUIPopupMarkAsHiddenMacOS",
    array_kFieldTrialConfig_experiments_330,
  },
  {
    "OnDemandSpellcheckInitialization",
    array_kFieldTrialConfig_experiments_331,
  },
  {
    "OnDeviceModelBackgroundDownload",
    array_kFieldTrialConfig_experiments_332,
  },
  {
    "OnDeviceModelConversationBackend",
    array_kFieldTrialConfig_experiments_333,
  },
  {
    "OnDeviceModelEviction",
    array_kFieldTrialConfig_experiments_334,
  },
  {
    "OnlyUseWindowResizeHelperOnResize",
    array_kFieldTrialConfig_experiments_335,
  },
  {
    "OpenTranslationSettings",
    array_kFieldTrialConfig_experiments_336,
  },
  {
    "OptGuideBatchSRPTuning",
    array_kFieldTrialConfig_experiments_337,
  },
  {
    "OptGuideURLCacheSize",
    array_kFieldTrialConfig_experiments_338,
  },
  {
    "OptimisticDnsForQuic",
    array_kFieldTrialConfig_experiments_339,
  },
  {
    "OptimisticDnsForTcp",
    array_kFieldTrialConfig_experiments_340,
  },
  {
    "OptimizationGuideProactivePersonalizedHintsFetching",
    array_kFieldTrialConfig_experiments_341,
  },
  {
    "OptimizeWebRequestProxyForServiceWorkerAutoPreload",
    array_kFieldTrialConfig_experiments_342,
  },
  {
    "OutOfProcessPrintDriversPrint",
    array_kFieldTrialConfig_experiments_343,
  },
  {
    "PMLoadingPageVoterV2",
    array_kFieldTrialConfig_experiments_344,
  },
  {
    "PMProcessPriorityPolicy",
    array_kFieldTrialConfig_experiments_345,
  },
  {
    "PMWithheldFromViewVoter",
    array_kFieldTrialConfig_experiments_346,
  },
  {
    "PageActionAnchoredMessageEasyDismiss",
    array_kFieldTrialConfig_experiments_347,
  },
  {
    "PageActionsOptimizations",
    array_kFieldTrialConfig_experiments_348,
  },
  {
    "PageActionsPrioritySelector",
    array_kFieldTrialConfig_experiments_349,
  },
  {
    "PageContentCacheDesktop",
    array_kFieldTrialConfig_experiments_350,
  },
  {
    "PageInfoAboutThisSite40Langs",
    array_kFieldTrialConfig_experiments_351,
  },
  {
    "PaintHoldingOOPIF",
    array_kFieldTrialConfig_experiments_352,
  },
  {
    "PartitionAllocBackupRefPtr",
    array_kFieldTrialConfig_experiments_353,
  },
  {
    "PartitionAllocMemoryReclaimer",
    array_kFieldTrialConfig_experiments_354,
  },
  {
    "PartitionAllocMiracleObject",
    array_kFieldTrialConfig_experiments_355,
  },
  {
    "PartitionAllocTighterAlignedAllocBound",
    array_kFieldTrialConfig_experiments_356,
  },
  {
    "PartitionAllocUnretainedDanglingPtr",
    array_kFieldTrialConfig_experiments_357,
  },
  {
    "PartitionNetworkStateByNetworkAnonymizationKey",
    array_kFieldTrialConfig_experiments_358,
  },
  {
    "PassHistogramSharedMemoryOnLaunch",
    array_kFieldTrialConfig_experiments_359,
  },
  {
    "PassageEmbeddingsPerformance",
    array_kFieldTrialConfig_experiments_360,
  },
  {
    "PasskeyUnlockErrorUi",
    array_kFieldTrialConfig_experiments_361,
  },
  {
    "PasskeyUnlockPromo",
    array_kFieldTrialConfig_experiments_362,
  },
  {
    "PasswordCompromiseWarningInDetailsCard",
    array_kFieldTrialConfig_experiments_363,
  },
  {
    "PasswordManualFallbackSecurityChecks",
    array_kFieldTrialConfig_experiments_364,
  },
  {
    "PasswordSaveInContextErrorResolution",
    array_kFieldTrialConfig_experiments_365,
  },
  {
    "PasswordSaveUpdateDropdownMenu",
    array_kFieldTrialConfig_experiments_366,
  },
  {
    "Path2DPaintCache",
    array_kFieldTrialConfig_experiments_367,
  },
  {
    "PaymentHandlerCameraAccessUx",
    array_kFieldTrialConfig_experiments_368,
  },
  {
    "PaymentRequestEnforceLNAWithClientSecurityState",
    array_kFieldTrialConfig_experiments_369,
  },
  {
    "PdfAccessibilityHeuristicEnhancements",
    array_kFieldTrialConfig_experiments_370,
  },
  {
    "PdfGetSaveDataInBlocks",
    array_kFieldTrialConfig_experiments_371,
  },
  {
    "PdfInfoBar",
    array_kFieldTrialConfig_experiments_372,
  },
  {
    "PdfInkSignaturesTextAnnotations",
    array_kFieldTrialConfig_experiments_373,
  },
  {
    "PdfUseSkiaRenderer",
    array_kFieldTrialConfig_experiments_374,
  },
  {
    "PermissionsAIv4",
    array_kFieldTrialConfig_experiments_375,
  },
  {
    "PermissionsGestureGatedPrompts",
    array_kFieldTrialConfig_experiments_376,
  },
  {
    "PersonalContextStudy",
    array_kFieldTrialConfig_experiments_377,
  },
  {
    "PervasiveSharedDictionaries",
    array_kFieldTrialConfig_experiments_378,
  },
  {
    "PinExtensionJourney",
    array_kFieldTrialConfig_experiments_379,
  },
  {
    "PolicyBlocklistProceedUntilResponse",
    array_kFieldTrialConfig_experiments_380,
  },
  {
    "PqcBandwidthExperiment",
    array_kFieldTrialConfig_experiments_381,
  },
  {
    "PreFirstRunDesktopRefresh",
    array_kFieldTrialConfig_experiments_382,
  },
  {
    "PrecomputeSiteInfo",
    array_kFieldTrialConfig_experiments_383,
  },
  {
    "PreconnectFromKeyedService",
    array_kFieldTrialConfig_experiments_384,
  },
  {
    "PreconnectManagerDirectFastPath",
    array_kFieldTrialConfig_experiments_385,
  },
  {
    "PreconnectToSearchDesktop",
    array_kFieldTrialConfig_experiments_386,
  },
  {
    "PredictionModelComponentDelivery",
    array_kFieldTrialConfig_experiments_387,
  },
  {
    "PreemptiveSodaDownload",
    array_kFieldTrialConfig_experiments_388,
  },
  {
    "PreferWarmRendererProcess",
    array_kFieldTrialConfig_experiments_389,
  },
  {
    "PrefetchActivationBeacon",
    array_kFieldTrialConfig_experiments_390,
  },
  {
    "PrefetchBookmarkBarTrigger",
    array_kFieldTrialConfig_experiments_391,
  },
  {
    "PrefetchCancelUnrelatedPrefetch",
    array_kFieldTrialConfig_experiments_392,
  },
  {
    "PrefetchMultipleActiveSetSizeLimitForBase",
    array_kFieldTrialConfig_experiments_393,
  },
  {
    "PreloadActivationReportWithExtensionInterception",
    array_kFieldTrialConfig_experiments_394,
  },
  {
    "PreloadingRespectUserAgentOverride",
    array_kFieldTrialConfig_experiments_395,
  },
  {
    "PrepopulatedEnginesMigration",
    array_kFieldTrialConfig_experiments_396,
  },
  {
    "Prerender2EarlyDocumentLifecycleUpdateV2",
    array_kFieldTrialConfig_experiments_397,
  },
  {
    "PreventSaveUpdatePasswordOnFederatedLogin",
    array_kFieldTrialConfig_experiments_398,
  },
  {
    "PrewarmZeroSuggestTrigger",
    array_kFieldTrialConfig_experiments_399,
  },
  {
    "PriceTrackingDesktopExpansionStudy",
    array_kFieldTrialConfig_experiments_400,
  },
  {
    "PriceTrackingPageActionIconLabelFeatureIPH",
    array_kFieldTrialConfig_experiments_401,
  },
  {
    "PrioritizeMainFrameNavigationNetworkResponse",
    array_kFieldTrialConfig_experiments_402,
  },
  {
    "PrioritizeSafeBrowsingNavigationCallbacks",
    array_kFieldTrialConfig_experiments_403,
  },
  {
    "PrivateInsights",
    array_kFieldTrialConfig_experiments_404,
  },
  {
    "ProactivePasswordProtection",
    array_kFieldTrialConfig_experiments_405,
  },
  {
    "ProcessHtmlDataImmediately",
    array_kFieldTrialConfig_experiments_406,
  },
  {
    "ProfilesReordering",
    array_kFieldTrialConfig_experiments_407,
  },
  {
    "ProgressiveAccessibilityPhase2",
    array_kFieldTrialConfig_experiments_408,
  },
  {
    "ProtectedAudienceDeprecation",
    array_kFieldTrialConfig_experiments_409,
  },
  {
    "PushMessagingDisallowSenderIDs",
    array_kFieldTrialConfig_experiments_410,
  },
  {
    "PushMessagingGcmEndpointWebpushPath",
    array_kFieldTrialConfig_experiments_411,
  },
  {
    "QuicSocketSendBufferSize",
    array_kFieldTrialConfig_experiments_412,
  },
  {
    "ReadAnythingDistillationQualityEvaluation",
    array_kFieldTrialConfig_experiments_413,
  },
  {
    "ReadAnythingDistillerRefactor",
    array_kFieldTrialConfig_experiments_414,
  },
  {
    "ReadAnythingImprovedUi",
    array_kFieldTrialConfig_experiments_415,
  },
  {
    "ReadAnythingJourney",
    array_kFieldTrialConfig_experiments_416,
  },
  {
    "ReadAnythingMenuShuffleExperiment",
    array_kFieldTrialConfig_experiments_417,
  },
  {
    "RealboxVirtualFocusNavigation",
    array_kFieldTrialConfig_experiments_418,
  },
  {
    "ReauthSkipIdentifierPage",
    array_kFieldTrialConfig_experiments_419,
  },
  {
    "RecordLockAcquisitionTimeStudy",
    array_kFieldTrialConfig_experiments_420,
  },
  {
    "RedWarningSurvey",
    array_kFieldTrialConfig_experiments_421,
  },
  {
    "ReduceMojoURLLoaderFactoryCloning",
    array_kFieldTrialConfig_experiments_422,
  },
  {
    "RemoteActorCredentialSharing",
    array_kFieldTrialConfig_experiments_423,
  },
  {
    "RemoveHangoutsExtension",
    array_kFieldTrialConfig_experiments_424,
  },
  {
    "RequiresLoadIgnoreLimitsForDomWindowsOnly",
    array_kFieldTrialConfig_experiments_425,
  },
  {
    "ResourcePoolResize",
    array_kFieldTrialConfig_experiments_426,
  },
  {
    "RestrictPendingInputEventTypeToBlockMainThread",
    array_kFieldTrialConfig_experiments_427,
  },
  {
    "RicherImageSuggestions",
    array_kFieldTrialConfig_experiments_428,
  },
  {
    "RustPhishingModelSetter",
    array_kFieldTrialConfig_experiments_429,
  },
  {
    "RustyIcoFeature",
    array_kFieldTrialConfig_experiments_430,
  },
  {
    "SPCLocaleValidation",
    array_kFieldTrialConfig_experiments_431,
  },
  {
    "SQLitePersistentCookieStoreEarlyInit",
    array_kFieldTrialConfig_experiments_432,
  },
  {
    "SafeBrowsingDailyPhishingReportsLimit",
    array_kFieldTrialConfig_experiments_433,
  },
  {
    "SafeBrowsingExtensionTelemetrySearchHijackingSignal",
    array_kFieldTrialConfig_experiments_434,
  },
  {
    "SafeBrowsingLocalListsUseSBv5",
    array_kFieldTrialConfig_experiments_435,
  },
  {
    "SafeBrowsingWaitForDnsForRealTimeLookup",
    array_kFieldTrialConfig_experiments_436,
  },
  {
    "SafetyCheckUnusedSitePermissions",
    array_kFieldTrialConfig_experiments_437,
  },
  {
    "SafetyHubIncreasePasswordCheckFrequencyV2",
    array_kFieldTrialConfig_experiments_438,
  },
  {
    "SafetyHubUnusedPermissionRevocationForAllSurfaces",
    array_kFieldTrialConfig_experiments_439,
  },
  {
    "ScheduledRestart",
    array_kFieldTrialConfig_experiments_440,
  },
  {
    "SearchEngineExplicitChoiceDialog",
    array_kFieldTrialConfig_experiments_441,
  },
  {
    "SearchPrefetchHighPriorityPrefetches",
    array_kFieldTrialConfig_experiments_442,
  },
  {
    "SearchSettingsWithMoreEngines",
    array_kFieldTrialConfig_experiments_443,
  },
  {
    "SensorsAllowAskBlockPermissionModel",
    array_kFieldTrialConfig_experiments_444,
  },
  {
    "ServiceWorkerDatabaseDoomOnMissingNextId",
    array_kFieldTrialConfig_experiments_445,
  },
  {
    "ServiceWorkerDumpWithoutCrashingOnStorageKeyMismatch",
    array_kFieldTrialConfig_experiments_446,
  },
  {
    "ServiceWorkerRaceNetworkRequestDeprecateTwoPhaseWrite",
    array_kFieldTrialConfig_experiments_447,
  },
  {
    "ServiceWorkerRaceNetworkRequestFallbackOnDisconnect",
    array_kFieldTrialConfig_experiments_448,
  },
  {
    "ServiceWorkerSyntheticResponse",
    array_kFieldTrialConfig_experiments_449,
  },
  {
    "ShareEventArgsOnDispatch",
    array_kFieldTrialConfig_experiments_450,
  },
  {
    "SharedHighlightingIphDesktop",
    array_kFieldTrialConfig_experiments_451,
  },
  {
    "SharedMemorySystemProfileMinidump",
    array_kFieldTrialConfig_experiments_452,
  },
  {
    "SharedTabGroups",
    array_kFieldTrialConfig_experiments_453,
  },
  {
    "SharingHubDesktopScreenshots",
    array_kFieldTrialConfig_experiments_454,
  },
  {
    "ShowSearchEngineChoiceScreenAfterWiping",
    array_kFieldTrialConfig_experiments_455,
  },
  {
    "SimdutfBase64Encode",
    array_kFieldTrialConfig_experiments_456,
  },
  {
    "SingleAxisScrollContainers",
    array_kFieldTrialConfig_experiments_457,
  },
  {
    "SingleVideoFrameRateThrottling",
    array_kFieldTrialConfig_experiments_458,
  },
  {
    "SkiaGraphite",
    array_kFieldTrialConfig_experiments_459,
  },
  {
    "SkiaGraphiteDrawListLayer",
    array_kFieldTrialConfig_experiments_460,
  },
  {
    "SkiaGraphiteSmallPathAtlas",
    array_kFieldTrialConfig_experiments_461,
  },
  {
    "SkiaGraphiteUsePersistentCache",
    array_kFieldTrialConfig_experiments_462,
  },
  {
    "Skills",
    array_kFieldTrialConfig_experiments_463,
  },
  {
    "SkillsV2",
    array_kFieldTrialConfig_experiments_464,
  },
  {
    "SkipImageClassificationScoringForNonPageLoadTriggers",
    array_kFieldTrialConfig_experiments_465,
  },
  {
    "SkipInitialForcedScrollbar",
    array_kFieldTrialConfig_experiments_466,
  },
  {
    "SkipListAccountsWithoutGaiaCookies",
    array_kFieldTrialConfig_experiments_467,
  },
  {
    "SkipModerateMemoryPressureLevelMac",
    array_kFieldTrialConfig_experiments_468,
  },
  {
    "SkipPostTaskForCallbacks",
    array_kFieldTrialConfig_experiments_469,
  },
  {
    "SmartSuggestions",
    array_kFieldTrialConfig_experiments_470,
  },
  {
    "SodaXnnpackDelegate",
    array_kFieldTrialConfig_experiments_471,
  },
  {
    "SpeculativeImageDecodes",
    array_kFieldTrialConfig_experiments_472,
  },
  {
    "SpeculativeServiceWorkerWarmUp",
    array_kFieldTrialConfig_experiments_473,
  },
  {
    "SpeedUpClearSiteDataCacheDeletion",
    array_kFieldTrialConfig_experiments_474,
  },
  {
    "SplitCacheByNetworkIsolationKey",
    array_kFieldTrialConfig_experiments_475,
  },
  {
    "SplitViewHorizontalDirectTabAccess",
    array_kFieldTrialConfig_experiments_476,
  },
  {
    "StreamlineRendererInit",
    array_kFieldTrialConfig_experiments_477,
  },
  {
    "SuspiciousSiteWarnings",
    array_kFieldTrialConfig_experiments_478,
  },
  {
    "SyncIncreaseNudgeDelayForSingleClient",
    array_kFieldTrialConfig_experiments_479,
  },
  {
    "SyncUsePropagatedAccessToken",
    array_kFieldTrialConfig_experiments_480,
  },
  {
    "TabGroupColorRefresh",
    array_kFieldTrialConfig_experiments_481,
  },
  {
    "TabGroupsFocusing",
    array_kFieldTrialConfig_experiments_482,
  },
  {
    "TabHoverCardImagesMacArm",
    array_kFieldTrialConfig_experiments_483,
  },
  {
    "TabSearchJourney",
    array_kFieldTrialConfig_experiments_484,
  },
  {
    "TabSearchPerformanceImprovements",
    array_kFieldTrialConfig_experiments_485,
  },
  {
    "TaskInfoMetricsMac",
    array_kFieldTrialConfig_experiments_486,
  },
  {
    "TextSafetyScanLanguageDetection",
    array_kFieldTrialConfig_experiments_487,
  },
  {
    "ThemeChangeOptimization",
    array_kFieldTrialConfig_experiments_488,
  },
  {
    "ThreadPoolForegroundBlockingTimeouts",
    array_kFieldTrialConfig_experiments_489,
  },
  {
    "ThreeDSecureTelemetry",
    array_kFieldTrialConfig_experiments_490,
  },
  {
    "ThrottleConsecutiveNoDamageMainFrames",
    array_kFieldTrialConfig_experiments_491,
  },
  {
    "ThrottleMainFrameTo60HzMacV3",
    array_kFieldTrialConfig_experiments_492,
  },
  {
    "TopicsDeprecation",
    array_kFieldTrialConfig_experiments_493,
  },
  {
    "TrackAnimatedSourcesForInheritedProperties",
    array_kFieldTrialConfig_experiments_494,
  },
  {
    "TransientKeepAlivePolicy",
    array_kFieldTrialConfig_experiments_495,
  },
  {
    "TranslateElementFeatures",
    array_kFieldTrialConfig_experiments_496,
  },
  {
    "TranslateLanguageSearchUIExperiment",
    array_kFieldTrialConfig_experiments_497,
  },
  {
    "TreesInViz",
    array_kFieldTrialConfig_experiments_498,
  },
  {
    "TruncateSearchUrl",
    array_kFieldTrialConfig_experiments_499,
  },
  {
    "TrustSafetySentimentSurvey",
    array_kFieldTrialConfig_experiments_500,
  },
  {
    "TrustSafetySentimentSurveyV2",
    array_kFieldTrialConfig_experiments_501,
  },
  {
    "TrustedVaultDesktopUnlock",
    array_kFieldTrialConfig_experiments_502,
  },
  {
    "TrustedVaultSharedRecoveryFactorsAndEncryption",
    array_kFieldTrialConfig_experiments_503,
  },
  {
    "UniversalCart",
    array_kFieldTrialConfig_experiments_504,
  },
  {
    "UniversalOptOutSettings",
    array_kFieldTrialConfig_experiments_505,
  },
  {
    "UnoPhase2Desktop",
    array_kFieldTrialConfig_experiments_506,
  },
  {
    "UnthrottleAsyncTouchMovesV2",
    array_kFieldTrialConfig_experiments_507,
  },
  {
    "UploadReportOnProfileOpenStudy",
    array_kFieldTrialConfig_experiments_508,
  },
  {
    "UseAutomaticSyncTokenManagement",
    array_kFieldTrialConfig_experiments_509,
  },
  {
    "UsePersistentCacheForCodeCache",
    array_kFieldTrialConfig_experiments_510,
  },
  {
    "UseRustCborParser",
    array_kFieldTrialConfig_experiments_511,
  },
  {
    "UseRustCborWriter",
    array_kFieldTrialConfig_experiments_512,
  },
  {
    "UseSCContentSharingPicker",
    array_kFieldTrialConfig_experiments_513,
  },
  {
    "UserValueDefaultBrowserStrings",
    array_kFieldTrialConfig_experiments_514,
  },
  {
    "UtfConversionAsciiFastPath",
    array_kFieldTrialConfig_experiments_515,
  },
  {
    "V8DateTimePatternGeneratorCacheEviction",
    array_kFieldTrialConfig_experiments_516,
  },
  {
    "V8HomomorphicIC",
    array_kFieldTrialConfig_experiments_517,
  },
  {
    "V8InputHandlingLongerWindow",
    array_kFieldTrialConfig_experiments_518,
  },
  {
    "V8LimitBasedMemoryReducer",
    array_kFieldTrialConfig_experiments_519,
  },
  {
    "V8MaxValidPolymorphicMapCount",
    array_kFieldTrialConfig_experiments_520,
  },
  {
    "V8ParserAblation",
    array_kFieldTrialConfig_experiments_521,
  },
  {
    "V8PreconfigureOldGen",
    array_kFieldTrialConfig_experiments_522,
  },
  {
    "V8SideStepTransitions",
    array_kFieldTrialConfig_experiments_523,
  },
  {
    "V8SlowHistograms",
    array_kFieldTrialConfig_experiments_524,
  },
  {
    "V8SparkplugPlus",
    array_kFieldTrialConfig_experiments_525,
  },
  {
    "V8SqrtAllocationLimits",
    array_kFieldTrialConfig_experiments_526,
  },
  {
    "V8Turbolev",
    array_kFieldTrialConfig_experiments_527,
  },
  {
    "VTVideoEncodeAcceleratorCalculatePSNR",
    array_kFieldTrialConfig_experiments_528,
  },
  {
    "VariationsFeatureAccessLogging",
    array_kFieldTrialConfig_experiments_529,
  },
  {
    "VariationsRuntimeMutability",
    array_kFieldTrialConfig_experiments_530,
  },
  {
    "VariationsStickyNoopTest",
    array_kFieldTrialConfig_experiments_531,
  },
  {
    "VerifyDidCommitParams",
    array_kFieldTrialConfig_experiments_532,
  },
  {
    "VerifyQWACsRollout",
    array_kFieldTrialConfig_experiments_533,
  },
  {
    "ViewDownloadedFileJourney",
    array_kFieldTrialConfig_experiments_534,
  },
  {
    "VisitedURLRankingService",
    array_kFieldTrialConfig_experiments_535,
  },
  {
    "VoiceSearchCoherenceComposeboxesKillSwitch",
    array_kFieldTrialConfig_experiments_536,
  },
  {
    "WebContentsDiscard",
    array_kFieldTrialConfig_experiments_537,
  },
  {
    "WebGLMemoryExperiments",
    array_kFieldTrialConfig_experiments_538,
  },
  {
    "WebGPU",
    array_kFieldTrialConfig_experiments_539,
  },
  {
    "WebHistoryUseNewApi",
    array_kFieldTrialConfig_experiments_540,
  },
  {
    "WebRTC-Aec3BufferingMaxAllowedExcessRenderBlocksOverride",
    array_kFieldTrialConfig_experiments_541,
  },
  {
    "WebRTC-Aec3DelayEstimateSmoothingDelayFoundOverride",
    array_kFieldTrialConfig_experiments_542,
  },
  {
    "WebRTC-Aec3TransparentModeHmm",
    array_kFieldTrialConfig_experiments_543,
  },
  {
    "WebRTC-Agc2MaxSpeechLevelExperimental",
    array_kFieldTrialConfig_experiments_544,
  },
  {
    "WebRTC-Agc2SpeechLevelEstimatorExperimental",
    array_kFieldTrialConfig_experiments_545,
  },
  {
    "WebRTC-Audio-GainController2",
    array_kFieldTrialConfig_experiments_546,
  },
  {
    "WebRTC-Audio-NetEqDecisionLogicConfig",
    array_kFieldTrialConfig_experiments_547,
  },
  {
    "WebRTC-Audio-OpusAvoidNoisePumpingDuringDtx",
    array_kFieldTrialConfig_experiments_548,
  },
  {
    "WebRTC-BurstyPacer",
    array_kFieldTrialConfig_experiments_549,
  },
  {
    "WebRTC-Bwe-LossBasedBweV2",
    array_kFieldTrialConfig_experiments_550,
  },
  {
    "WebRTC-Bwe-ProbingConfiguration",
    array_kFieldTrialConfig_experiments_551,
  },
  {
    "WebRTC-Bwe-ReceiverLimitCapsOnly",
    array_kFieldTrialConfig_experiments_552,
  },
  {
    "WebRTC-Bwe-RobustThroughputEstimatorSettings",
    array_kFieldTrialConfig_experiments_553,
  },
  {
    "WebRTC-CorruptionDetectionFrameSelector",
    array_kFieldTrialConfig_experiments_554,
  },
  {
    "WebRTC-DataChannel-MessageInterleaving",
    array_kFieldTrialConfig_experiments_555,
  },
  {
    "WebRTC-IPv6NetworkResolutionFixes",
    array_kFieldTrialConfig_experiments_556,
  },
  {
    "WebRTC-JitterEstimatorConfig",
    array_kFieldTrialConfig_experiments_557,
  },
  {
    "WebRTC-LibaomAv1Encoder-DropRepeatFramesOnEnhancementLayers",
    array_kFieldTrialConfig_experiments_558,
  },
  {
    "WebRTC-Pacer-KeyframeFlushing",
    array_kFieldTrialConfig_experiments_559,
  },
  {
    "WebRTC-RFC8888CongestionControlFeedback",
    array_kFieldTrialConfig_experiments_560,
  },
  {
    "WebRTC-SendBufferSizeBytes",
    array_kFieldTrialConfig_experiments_561,
  },
  {
    "WebRTC-SendPacketsOnWorkerThread",
    array_kFieldTrialConfig_experiments_562,
  },
  {
    "WebRTC-SlackedTaskQueuePacedSender",
    array_kFieldTrialConfig_experiments_563,
  },
  {
    "WebRTC-VP8ConferenceTemporalLayers",
    array_kFieldTrialConfig_experiments_564,
  },
  {
    "WebRTC-Video-AV1EvenPayloadSizes",
    array_kFieldTrialConfig_experiments_565,
  },
  {
    "WebRTC-Video-CalculatePsnr",
    array_kFieldTrialConfig_experiments_566,
  },
  {
    "WebRTC-Video-EnableRetransmitAllLayers",
    array_kFieldTrialConfig_experiments_567,
  },
  {
    "WebRTC-Video-PerSsrcKeyframes",
    array_kFieldTrialConfig_experiments_568,
  },
  {
    "WebRTC-Vp9ExternalRefCtrl",
    array_kFieldTrialConfig_experiments_569,
  },
  {
    "WebRTC-ZeroPlayoutDelay",
    array_kFieldTrialConfig_experiments_570,
  },
  {
    "WebRtcNeuralResidualEchoEstimationAsyncInit",
    array_kFieldTrialConfig_experiments_571,
  },
  {
    "WebRtcVoiceIsolation",
    array_kFieldTrialConfig_experiments_572,
  },
  {
    "WebUIInProcessResourceLoading",
    array_kFieldTrialConfig_experiments_573,
  },
  {
    "WebUIReloadButtonStudy",
    array_kFieldTrialConfig_experiments_574,
  },
  {
    "WebrtcEncodeReadbackOptimization",
    array_kFieldTrialConfig_experiments_575,
  },
  {
    "WhatsNewHats",
    array_kFieldTrialConfig_experiments_576,
  },
  {
    "WidevinePersistentLicenseSupport",
    array_kFieldTrialConfig_experiments_577,
  },
  {
    "XMLParsingRust",
    array_kFieldTrialConfig_experiments_578,
  },
  {
    "XMLParsingRustNonXslt",
    array_kFieldTrialConfig_experiments_579,
  },
  {
    "XSLTSpecialTrial",
    array_kFieldTrialConfig_experiments_580,
  },
  {
    "ZPSPrefetchDebouncingDesktop",
    array_kFieldTrialConfig_experiments_581,
  },
  {
    "ZstdForCrossSiteSpeculationRulesPrefetch",
    array_kFieldTrialConfig_experiments_582,
  },
};
const FieldTrialTestingConfig kFieldTrialConfig = {
  array_kFieldTrialConfig_studies,
};

}  // namespace variations
