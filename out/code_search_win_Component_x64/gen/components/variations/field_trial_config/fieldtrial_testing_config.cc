// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE SCHEMA DEFINITION AND DESCRIPTION IN
//   field_trial_testing_config_schema.json
//   fieldtrial_testing_config.json
// using json_to_struct.py. DO NOT EDIT.

#include "fieldtrial_testing_config.h"

namespace variations {


const char* const array_kFieldTrialConfig_enable_features_537[] = {
      "ZstdForCrossSiteSpeculationRulesPrefetch",
};
const Study::Platform array_kFieldTrialConfig_platforms_592[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_592[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_592,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_537,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_536[] = {
      "ZeroSuggestPrefetchDebouncing",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_182[] = {
      {
        "ZeroSuggestPrefetchDebounceDelay",
        "300",
      },
      {
        "ZeroSuggestPrefetchDebounceFromLastRun",
        "true",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_591[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_591[] = {
    {
      "Enabled_300ms_FromLastRun",
      array_kFieldTrialConfig_platforms_591,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_182,
      array_kFieldTrialConfig_enable_features_536,
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
const char* const array_kFieldTrialConfig_enable_features_535[] = {
      "XSLTSpecialTrial",
};
const Study::Platform array_kFieldTrialConfig_platforms_590[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_590[] = {
    {
      "Disabled",
      array_kFieldTrialConfig_platforms_590,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_535,
      array_kFieldTrialConfig_disable_features_38,
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_534[] = {
      "XMLRustForNonXslt",
};
const Study::Platform array_kFieldTrialConfig_platforms_589[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_589[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_589,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_534,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_533[] = {
      "XMLParsingRust",
};
const Study::Platform array_kFieldTrialConfig_platforms_588[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_588[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_588,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_533,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_532[] = {
      "WinSboxNoFakeGdiInit",
};
const Study::Platform array_kFieldTrialConfig_platforms_587[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_587[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_587,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_532,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_531[] = {
      "EnableCsrssLockdown",
      "WinSboxProxyLocale",
};
const Study::Platform array_kFieldTrialConfig_platforms_586[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_586[] = {
    {
      "Enabled_with_locale_proxy",
      array_kFieldTrialConfig_platforms_586,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_531,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_530[] = {
      "IsolatedProcess",
};
const Study::Platform array_kFieldTrialConfig_platforms_585[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_585[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_585,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_530,
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
const Study::Platform array_kFieldTrialConfig_platforms_584[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_584[] = {
    {
      "Disabled_M140",
      array_kFieldTrialConfig_platforms_584,
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
const char* const array_kFieldTrialConfig_enable_features_529[] = {
      "HappinessTrackingSurveysForDesktopWhatsNew",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_181[] = {
      {
        "en_site_id",
        "6bnVh68QF0ugnJ3q1cK0NQxjpCFS",
      },
      {
        "probability",
        "0.01",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_583[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_583[] = {
    {
      "Enabled_en_20241016",
      array_kFieldTrialConfig_platforms_583,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_181,
      array_kFieldTrialConfig_enable_features_529,
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
      "MediaFoundationD3DVideoProcessing",
      "MediaFoundationSharedImageEncode",
};
const char* const array_kFieldTrialConfig_enable_features_528[] = {
      "WebrtcAcceleratedScaling",
};
const Study::Platform array_kFieldTrialConfig_platforms_582[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_582[] = {
    {
      "Enabled_acc_scaling",
      array_kFieldTrialConfig_platforms_582,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_528,
      array_kFieldTrialConfig_disable_features_36,
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_527[] = {
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
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_180[] = {
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
const Study::Platform array_kFieldTrialConfig_platforms_581[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_581[] = {
    {
      "EnabledWithSurfaceSync_20260902",
      array_kFieldTrialConfig_platforms_581,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_180,
      array_kFieldTrialConfig_enable_features_527,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_526[] = {
      "ScriptStreamingForNonHTTP",
      "WebUIInProcessResourceLoading",
};
const Study::Platform array_kFieldTrialConfig_platforms_580[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_580[] = {
    {
      "Enabled_WithScriptStreaming",
      array_kFieldTrialConfig_platforms_580,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_526,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_525[] = {
      "WebRtcVoiceIsolationDenoiser",
};
const Study::Platform array_kFieldTrialConfig_platforms_579[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_579[] = {
    {
      "Enabled_Dogfood",
      array_kFieldTrialConfig_platforms_579,
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
      "WebRtcNeuralResidualEchoEstimationAsyncInit",
};
const Study::Platform array_kFieldTrialConfig_platforms_578[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_578[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_578,
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
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_179[] = {
      {
        "max_post_decode_queue_size",
        "10",
      },
      {
        "reduce_steady_state_queue_size_threshold",
        "20",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_577[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_577[] = {
    {
      "min_pacing:0ms,max_decode_queue_size:8,",
      array_kFieldTrialConfig_platforms_577,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_179,
      {},
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const Study::Platform array_kFieldTrialConfig_platforms_576[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_576[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_576,
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
const Study::Platform array_kFieldTrialConfig_platforms_575[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_575[] = {
    {
      "Enabled,_20260702",
      array_kFieldTrialConfig_platforms_575,
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
const Study::Platform array_kFieldTrialConfig_platforms_574[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_574[] = {
    {
      "Enabled,_20230607_BETA",
      array_kFieldTrialConfig_platforms_574,
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
const Study::Platform array_kFieldTrialConfig_platforms_573[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_573[] = {
    {
      "Enabled,sampling_interval:1000ms",
      array_kFieldTrialConfig_platforms_573,
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
const Study::Platform array_kFieldTrialConfig_platforms_572[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_572[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_572,
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
const Study::Platform array_kFieldTrialConfig_platforms_571[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_571[] = {
    {
      "2_V1",
      array_kFieldTrialConfig_platforms_571,
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
const Study::Platform array_kFieldTrialConfig_platforms_570[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_570[] = {
    {
      "Enabled,max_queue_time:75ms,_V4",
      array_kFieldTrialConfig_platforms_570,
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
const Study::Platform array_kFieldTrialConfig_platforms_569[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_569[] = {
    {
      "Enabled,_20221205",
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
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_568[] = {
    {
      "262144,_V1",
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
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_567[] = {
    {
      "Enabled,_20251209",
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
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_566[] = {
    {
      "Enabled",
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
      Study::PLATFORM_WINDOWS,
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
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_564[] = {
    {
      "num_stddev_delay_clamp:5,num_stddev_delay_outlier:2,num_stddev_size_outlier:2,estimate_noise_when_congested:false,_20230118_BETA",
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
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_563[] = {
    {
      "Enabled,ResolveStunHostnameForFamily:true,PreferGlobalIPv6Address:true,DiversifyIpv6Interfaces:true,_20220929",
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
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_562[] = {
    {
      "Enabled_20260625",
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
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_561[] = {
    {
      "enabled:true,low_overhead_lower_bound:500ms,low_overhead_upper_bound:1500ms,high_overhead_lower_bound:500ms,high_overhead_upper_bound:1500ms,asynchronous_evaluation:true",
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
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_560[] = {
    {
      "enabled:true,_V1",
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
      Study::PLATFORM_WINDOWS,
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
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_558[] = {
    {
      "network_state_probe_duration:200ms,network_state_interval:10s,min_probe_delta:20ms,est_lower_than_network_ratio:0.7,skip_if_est_larger_than_fraction_of_max:0.9,alr_scale:1.5,step_size:1.5",
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
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_557[] = {
    {
      "Enabled:true,InstantUpperBoundBwBalance:100kbps,InherentLossUpperBoundBwBalance:100kbps,LossThresholdOfHighBandwidthPreference:0.2,UseByteLossRate:true,ObservationWindowSize:15,BwRampupUpperBoundFactor:1.5,BwRampupUpperBoundInHoldFactor:1.2,BwRampupUpperBoundHoldThreshold:1.3,BoundBestCandidate:true,UseInStartPhase:true,LowerBoundByAckedRateFactor:1.0,HoldDurationFactor:2.0,PaddingDuration:2000ms,PaceAtLossBasedEstimate:true",
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
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_556[] = {
    {
      "burst:20ms,_V1",
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
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_555[] = {
    {
      "Enabled",
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
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_554[] = {
    {
      "enable_stable_playout_delay:true,reinit_after_expands:1000",
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
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_553[] = {
    {
      "Enabled,switch_to_agc2:true,target_range_min_dbfs:-50,target_range_max_dbfs:-30,max_gain_db:50,initial_gain_db:15,max_gain_change_db_per_second:6,headroom_db:5,enable_clipping_predictor:true,disallow_transient_suppressor_usage:true,_20230614",
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
      Study::PLATFORM_WINDOWS,
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
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_551[] = {
    {
      "Enabled",
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
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_550[] = {
    {
      "Enabled",
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
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_549[] = {
    {
      "0.1",
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
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_548[] = {
    {
      "1",
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
const char* const array_kFieldTrialConfig_enable_features_523[] = {
      "WebHistoryUseNewApi",
};
const Study::Platform array_kFieldTrialConfig_platforms_547[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_547[] = {
    {
      "Enabled_20260617",
      array_kFieldTrialConfig_platforms_547,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_523,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_522[] = {
      "CollectWebGPUSupportMetrics",
};
const Study::Platform array_kFieldTrialConfig_platforms_546[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_546[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_546,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_522,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_521[] = {
      "WebGPUService",
};
const Study::Platform array_kFieldTrialConfig_platforms_545[] = {
      Study::PLATFORM_WINDOWS,
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
      array_kFieldTrialConfig_enable_features_521,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_520[] = {
      "OffscreenCanvasPropagateVisibility",
      "WebGLDeleteBuffersInBackground",
      "WebGLDiscardBackBuffer",
};
const Study::Platform array_kFieldTrialConfig_platforms_544[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_544[] = {
    {
      "Enabled_20260828",
      array_kFieldTrialConfig_platforms_544,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
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
      "WebContentsDiscard",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_178[] = {
      {
        "urgent_discard_ignore_workers",
        "true",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_543[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_543[] = {
    {
      "EnabledIgnoreWorkers",
      array_kFieldTrialConfig_platforms_543,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_178,
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
      "WasapiImproveGlitchDetection",
};
const Study::Platform array_kFieldTrialConfig_platforms_542[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_542[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_542,
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
      "VoiceSearchCoherenceComposeboxes",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_177[] = {
      {
        "VoiceSearchCoherenceComposeboxCobrowsingOnly",
        "true",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_541[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_541[] = {
    {
      "CobrowsingOnly_EmergencyKillSwitch",
      array_kFieldTrialConfig_platforms_541,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_177,
      array_kFieldTrialConfig_enable_features_517,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_516[] = {
      "VisitedURLRankingService",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_176[] = {
      {
        "VisitedURLRankingFetchDurationInHoursParam",
        "168",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_540[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_540[] = {
    {
      "VisitedURLRankingService",
      array_kFieldTrialConfig_platforms_540,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_176,
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
      "HappinessTrackingSurveysForDownloadJourney",
      "ViewDownloadedFileFromAppMenuJourney",
      "ViewDownloadedFileJourney",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_175[] = {
      {
        "en_site_id",
        "mL46CjHkE0ugnJ3q1cK0NsAQJpTP",
      },
      {
        "probability",
        "1.0",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_539[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_539[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_539,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_175,
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
      "VerifyQWACs",
};
const Study::Platform array_kFieldTrialConfig_platforms_538[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_538[] = {
    {
      "Enabled",
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
      "VerifyDidCommitParams",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_174[] = {
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
const Study::Platform array_kFieldTrialConfig_platforms_537[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_537[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_537,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_174,
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
      "VariationsStickyNoopTest",
};
const Study::Platform array_kFieldTrialConfig_platforms_536[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_536[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_536,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
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
      "VariationsRuntimeMutability",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_173[] = {
      {
        "rotate_uma_log",
        "true",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_535[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_535[] = {
    {
      "EnabledWithRotate",
      array_kFieldTrialConfig_platforms_535,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_173,
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
      "HistogramDenylist",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_172[] = {
      {
        "histogram_denylist",
        "\"\"",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_534[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_534[] = {
    {
      "Enabled_20260901",
      array_kFieldTrialConfig_platforms_534,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_172,
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
      "V8Flag_turbolev",
};
const Study::Platform array_kFieldTrialConfig_platforms_533[] = {
      Study::PLATFORM_WINDOWS,
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
      "V8Flag_sqrt_allocation_limits",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_171[] = {
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
const Study::Platform array_kFieldTrialConfig_platforms_532[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_532[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_532,
      {},
      std::nullopt,
      true,
      nullptr,
      array_kFieldTrialConfig_params_171,
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
      "V8Flag_sparkplug_plus",
};
const Study::Platform array_kFieldTrialConfig_platforms_531[] = {
      Study::PLATFORM_WINDOWS,
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
const char* const array_kFieldTrialConfig_disable_features_35[] = {
      "V8SlowHistograms",
};
const Study::Platform array_kFieldTrialConfig_platforms_530[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_530[] = {
    {
      "Control",
      array_kFieldTrialConfig_platforms_530,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      {},
      array_kFieldTrialConfig_disable_features_35,
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_506[] = {
      "V8SideStepTransitions",
};
const Study::Platform array_kFieldTrialConfig_platforms_529[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_529[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_529,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
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
      "V8PreconfigureOldGen",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_170[] = {
      {
        "V8PreconfigureOldGenSize",
        "16",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_528[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_528[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_528,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_170,
      array_kFieldTrialConfig_enable_features_505,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const Study::Platform array_kFieldTrialConfig_platforms_527[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_527[] = {
    {
      "Disabled",
      array_kFieldTrialConfig_platforms_527,
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
const char* const array_kFieldTrialConfig_enable_features_504[] = {
      "V8MaxValidPolymorphicMapCount",
};
const Study::Platform array_kFieldTrialConfig_platforms_526[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_526[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_526,
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
const char* const array_kFieldTrialConfig_disable_features_34[] = {
      "ForwardMemoryPressureToBlinkIsolates",
};
const char* const array_kFieldTrialConfig_enable_features_503[] = {
      "V8Flag_freeze_forces_marking_finalization",
      "V8Flag_memory_reducer_limit_based",
};
const Study::Platform array_kFieldTrialConfig_platforms_525[] = {
      Study::PLATFORM_WINDOWS,
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
      array_kFieldTrialConfig_enable_features_503,
      array_kFieldTrialConfig_disable_features_34,
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_502[] = {
      "UseCaseLongerInputWindow",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_169[] = {
      {
        "use_case_longer_input_window_extension_ms",
        "100ms",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_524[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_524[] = {
    {
      "Enabled_100_2026_04_20",
      array_kFieldTrialConfig_platforms_524,
      {},
      std::nullopt,
      true,
      nullptr,
      array_kFieldTrialConfig_params_169,
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
      "V8Flag_homomorphic_ic",
};
const Study::Platform array_kFieldTrialConfig_platforms_523[] = {
      Study::PLATFORM_WINDOWS,
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
      array_kFieldTrialConfig_enable_features_501,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_500[] = {
      "V8Flag_intl_date_time_pattern_generator_cache_eviction",
};
const Study::Platform array_kFieldTrialConfig_platforms_522[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_522[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_522,
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
      "UtfConversionAsciiFastPath",
};
const Study::Platform array_kFieldTrialConfig_platforms_521[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_521[] = {
    {
      "Enabled_20260810",
      array_kFieldTrialConfig_platforms_521,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_499,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_498[] = {
      "UserValueDefaultBrowserStrings",
};
const Study::Platform array_kFieldTrialConfig_platforms_520[] = {
      Study::PLATFORM_WINDOWS,
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
const char* const array_kFieldTrialConfig_enable_features_497[] = {
      "UseRustCborWriter",
};
const Study::Platform array_kFieldTrialConfig_platforms_519[] = {
      Study::PLATFORM_WINDOWS,
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
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_496[] = {
      "UseRustCborParser",
};
const Study::Platform array_kFieldTrialConfig_platforms_518[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_518[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_518,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
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
      "PersistentCacheCollectionWalMode",
      "UsePersistentCacheForCodeCache",
};
const Study::Platform array_kFieldTrialConfig_platforms_517[] = {
      Study::PLATFORM_WINDOWS,
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
      "UseAutomaticSyncTokenManagement",
};
const Study::Platform array_kFieldTrialConfig_platforms_516[] = {
      Study::PLATFORM_WINDOWS,
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
      "UploadReportOnProfileOpen",
};
const Study::Platform array_kFieldTrialConfig_platforms_515[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_515[] = {
    {
      "Enabled",
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
      "UnthrottleAsyncTouchMoves",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_168[] = {
      {
        "policy",
        "unthrottled_always",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_514[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_514[] = {
    {
      "Enabled_UnthrottledAlways",
      array_kFieldTrialConfig_platforms_514,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_168,
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
      "IPH_SignInBenefits",
      "ReplaceSyncPromosWithSignInPromos",
};
const Study::Platform array_kFieldTrialConfig_platforms_513[] = {
      Study::PLATFORM_WINDOWS,
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
      "GlobalPrivacyControlApi",
      "UniversalOptOutSettings",
};
const Study::Platform array_kFieldTrialConfig_platforms_512[] = {
      Study::PLATFORM_WINDOWS,
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
      "ApiGlicAccessFromGoogleWebpage",
};
const Study::Platform array_kFieldTrialConfig_platforms_511[] = {
      Study::PLATFORM_WINDOWS,
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
      "EnableUnexportableKeysSpareKeyPool",
};
const Study::Platform array_kFieldTrialConfig_platforms_510[] = {
      Study::PLATFORM_WINDOWS,
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
      "UiaDisconnectRootProviders",
};
const Study::Platform array_kFieldTrialConfig_platforms_509[] = {
      Study::PLATFORM_WINDOWS,
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
      "TrustedVaultSharedRecoveryFactorsAndEncryption",
};
const Study::Platform array_kFieldTrialConfig_platforms_508[] = {
      Study::PLATFORM_WINDOWS,
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
      "TrustedVaultDesktopUnlock",
};
const Study::Platform array_kFieldTrialConfig_platforms_507[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_507[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_507,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
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
      "TrustSafetySentimentSurveyV2",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_167[] = {
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
const Study::Platform array_kFieldTrialConfig_platforms_506[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_506[] = {
    {
      "Enabled_20240212",
      array_kFieldTrialConfig_platforms_506,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_167,
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
      "TrustSafetySentimentSurvey",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_166[] = {
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
const Study::Platform array_kFieldTrialConfig_platforms_505[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_505[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_505,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_166,
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
      "TruncateSearchUrlOq",
      "TruncateSearchUrlQ",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_165[] = {
      {
        "truncate_search_url_oq_length",
        "1024",
      },
      {
        "truncate_search_url_q_length",
        "52224",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_504[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_504[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_504,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_165,
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
      "TreesInViz",
};
const Study::Platform array_kFieldTrialConfig_platforms_503[] = {
      Study::PLATFORM_WINDOWS,
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
      "TranslateLanguageSearchUI",
};
const Study::Platform array_kFieldTrialConfig_platforms_502[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_502[] = {
    {
      "Enabled_20260528",
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
      "TranslateElementExperimentFeatures",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_164[] = {
      {
        "ef",
        "ests,eadt",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_501[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_501[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_501,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_164,
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
      "TrackEmptyRendererProcessesForReuse",
      "TransientKeepAlivePolicy",
};
const Study::Platform array_kFieldTrialConfig_platforms_500[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_500[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_500,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
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
      "TrackAnimatedSourcesForInheritedProperties",
};
const Study::Platform array_kFieldTrialConfig_platforms_499[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_499[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_499,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_477,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_disable_features_33[] = {
      "BrowsingTopics",
};
const Study::Platform array_kFieldTrialConfig_platforms_498[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_498[] = {
    {
      "Disabled",
      array_kFieldTrialConfig_platforms_498,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      {},
      array_kFieldTrialConfig_disable_features_33,
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_476[] = {
      "ThrottleRepeatedNoDamageFrames",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_163[] = {
      {
        "repeated_no_damage_frame_throttling_threshold1",
        "360",
      },
      {
        "repeated_no_damage_frame_throttling_threshold2",
        "60",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_497[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_497[] = {
    {
      "Enabled_20260903",
      array_kFieldTrialConfig_platforms_497,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_163,
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
      "ThreeDSecureTelemetry",
};
const Study::Platform array_kFieldTrialConfig_platforms_496[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_496[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_496,
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
      "ThreadPoolForegroundBlockingTimeouts",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_162[] = {
      {
        "BlockedWorkersPoll",
        "600ms",
      },
      {
        "MayBlockThreshold",
        "500ms",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_495[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_495[] = {
    {
      "Enabled_Moderate",
      array_kFieldTrialConfig_platforms_495,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_162,
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
      "ColorIdCssStyleSheetOptimization",
      "ThemeChangeOptimization",
};
const Study::Platform array_kFieldTrialConfig_platforms_494[] = {
      Study::PLATFORM_WINDOWS,
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
      "TextSafetyScanLanguageDetection",
};
const Study::Platform array_kFieldTrialConfig_platforms_493[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_493[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_493,
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
const char* const array_kFieldTrialConfig_enable_features_471[] = {
      "TabSearchPerformanceImprovements",
};
const Study::Platform array_kFieldTrialConfig_platforms_492[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_492[] = {
    {
      "Enabled_20260903",
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
      "HappinessTrackingSurveysForTabSearchJourney",
      "TabSearchJourney",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_161[] = {
      {
        "en_site_id",
        "AD85aHvUu0ugnJ3q1cK0UCSRt6XZ",
      },
      {
        "probability",
        "1.0",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_491[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_491[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_491,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_161,
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
      "TabGroupsFocusing",
};
const Study::Platform array_kFieldTrialConfig_platforms_490[] = {
      Study::PLATFORM_WINDOWS,
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
      "TabGroupColorRefresh",
};
const Study::Platform array_kFieldTrialConfig_platforms_489[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_489[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_489,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
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
      "SystemPdhMetrics",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_160[] = {
      {
        "system_pdh_metrics_downsampling_factor",
        "20",
      },
      {
        "system_pdh_metrics_metrics_per_process",
        "3",
      },
      {
        "system_pdh_metrics_sampling_period",
        "30s",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_488[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_488[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_488,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_160,
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
      "SystemCaptionStyleCaching",
};
const Study::Platform array_kFieldTrialConfig_platforms_487[] = {
      Study::PLATFORM_WINDOWS,
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
      "SyncUsePropagatedAccessToken",
};
const Study::Platform array_kFieldTrialConfig_platforms_486[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_486[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_486,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
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
      "SyncIncreaseNudgeDelayForSingleClient",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_159[] = {
      {
        "SyncIncreaseNudgeDelayForSingleClientFactor",
        "2.0",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_485[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_485[] = {
    {
      "EnabledFactor2",
      array_kFieldTrialConfig_platforms_485,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_159,
      array_kFieldTrialConfig_enable_features_464,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_disable_features_32[] = {
      "AllowD3D11WarpFallback",
};
const Study::Platform array_kFieldTrialConfig_platforms_484[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_484[] = {
    {
      "WarpDisabledForWindowsTests",
      array_kFieldTrialConfig_platforms_484,
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
const char* const array_kFieldTrialConfig_enable_features_463[] = {
      "SuspiciousSiteWarningSurvey",
      "SuspiciousSiteWarnings",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_158[] = {
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
const Study::Platform array_kFieldTrialConfig_platforms_483[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_483[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_483,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_158,
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
      "StreamlineRendererInit",
};
const Study::Platform array_kFieldTrialConfig_platforms_482[] = {
      Study::PLATFORM_WINDOWS,
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
      "SplitViewHorizontal",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_157[] = {
      {
        "split_view_horizontal_direct_tab_access",
        "true",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_481[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_481[] = {
    {
      "EnabledDirectTabAccess_20260902",
      array_kFieldTrialConfig_platforms_481,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_157,
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
      "SplitCacheByNetworkIsolationKey",
};
const Study::Platform array_kFieldTrialConfig_platforms_480[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_480[] = {
    {
      "EnableFeatureForTests",
      array_kFieldTrialConfig_platforms_480,
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
      "DisablePartialStorageCleanupForGPUDiskCache",
      "LogicalClearHttpCache",
};
const Study::Platform array_kFieldTrialConfig_platforms_479[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_479[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_479,
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
      "SpeculativeServiceWorkerWarmUp",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_156[] = {
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
const Study::Platform array_kFieldTrialConfig_platforms_478[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_478[] = {
    {
      "Enabled_05m_05c_20250214",
      array_kFieldTrialConfig_platforms_478,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_156,
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
      "PreventDuplicateImageDecodes",
      "SpeculativeImageDecodes",
};
const Study::Platform array_kFieldTrialConfig_platforms_477[] = {
      Study::PLATFORM_WINDOWS,
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
      "SodaXnnpackDelegate",
};
const Study::Platform array_kFieldTrialConfig_platforms_476[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_476[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_476,
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
      "GlicSelectionPrompt",
};
const Study::Platform array_kFieldTrialConfig_platforms_475[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_475[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_475,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
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
      "SkipListAccountsWithoutGaiaCookies",
};
const Study::Platform array_kFieldTrialConfig_platforms_474[] = {
      Study::PLATFORM_WINDOWS,
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
      "SkipInitialForcedScrollbar",
};
const Study::Platform array_kFieldTrialConfig_platforms_473[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_473[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_473,
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
      "SkipImageClassificationScoringForNonPageLoadTriggers",
};
const Study::Platform array_kFieldTrialConfig_platforms_472[] = {
      Study::PLATFORM_WINDOWS,
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
      "SkillsAndExtensionsAppMenu",
      "SkillsWebViewV2Enabled",
};
const Study::Platform array_kFieldTrialConfig_platforms_471[] = {
      Study::PLATFORM_WINDOWS,
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
      "SkillsEnabled",
};
const Study::Platform array_kFieldTrialConfig_platforms_470[] = {
      Study::PLATFORM_WINDOWS,
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
      "SkiaGraphiteWinIntel",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_155[] = {
      {
        "dawn_backend_validation",
        "false",
      },
      {
        "dawn_skip_validation",
        "true",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_469[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_469[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_469,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_155,
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
      "SkiaGraphite",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_154[] = {
      {
        "dawn_backend_validation",
        "false",
      },
      {
        "dawn_skip_validation",
        "true",
      },
      {
        "dawn_use_persistent_cache",
        "true",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_468[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_468[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_468,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_154,
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
      "SingleVideoFrameRateThrottling",
};
const Study::Platform array_kFieldTrialConfig_platforms_467[] = {
      Study::PLATFORM_WINDOWS,
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
      "SingleAxisScrollContainers",
};
const Study::Platform array_kFieldTrialConfig_platforms_466[] = {
      Study::PLATFORM_WINDOWS,
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
      "SimdutfBase64Encode",
};
const Study::Platform array_kFieldTrialConfig_platforms_465[] = {
      Study::PLATFORM_WINDOWS,
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
      "WipeChoicePrefsOnMissingDefaultSearchEngine",
};
const Study::Platform array_kFieldTrialConfig_platforms_464[] = {
      Study::PLATFORM_WINDOWS,
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
      "DesktopScreenshots",
};
const Study::Platform array_kFieldTrialConfig_platforms_463[] = {
      Study::PLATFORM_WINDOWS,
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
      "DataSharingJoinOnly",
};
const Study::Platform array_kFieldTrialConfig_platforms_462[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_462[] = {
    {
      "JoinOnlyEnabled",
      array_kFieldTrialConfig_platforms_462,
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
      "SharedMemorySystemProfileMinidump",
};
const Study::Platform array_kFieldTrialConfig_platforms_461[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_461[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_461,
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
      "IPH_DesktopSharedHighlighting",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_153[] = {
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
const Study::Platform array_kFieldTrialConfig_platforms_460[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_460[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_460,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_153,
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
      "ShareEventArgsOnDispatch",
};
const Study::Platform array_kFieldTrialConfig_platforms_459[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_459[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_459,
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
      "ServiceWorkerSyntheticResponse",
      "URLLoaderUseProvidedResponseBodyStream",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_152[] = {
      {
        "off_main_thread",
        "network_service",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_458[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_458[] = {
    {
      "EnabledWithNetworkServiceDelegation",
      array_kFieldTrialConfig_platforms_458,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_152,
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
      "ServiceWorkerRaceNetworkRequestFallbackOnDisconnect",
};
const Study::Platform array_kFieldTrialConfig_platforms_457[] = {
      Study::PLATFORM_WINDOWS,
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
      "ServiceWorkerRaceNetworkRequestDeprecateTwoPhaseWrite",
};
const Study::Platform array_kFieldTrialConfig_platforms_456[] = {
      Study::PLATFORM_WINDOWS,
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
      "ServiceWorkerDumpWithoutCrashingOnStorageKeyMismatch",
};
const Study::Platform array_kFieldTrialConfig_platforms_455[] = {
      Study::PLATFORM_WINDOWS,
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
      "ServiceWorkerDatabaseDoomOnMissingNextId",
};
const Study::Platform array_kFieldTrialConfig_platforms_454[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_454[] = {
    {
      "Enabled_20260901",
      array_kFieldTrialConfig_platforms_454,
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
      "SensorsAllowAskBlockPermissionModel",
};
const Study::Platform array_kFieldTrialConfig_platforms_453[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_453[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_453,
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
      "SecurePaymentConfirmationCredentialDiscoveryMode",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_151[] = {
      {
        "mode",
        "hybrid",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_452[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_452[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_452,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_151,
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
      "SearchSettingsWithMoreEngines",
};
const Study::Platform array_kFieldTrialConfig_platforms_451[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_451[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_451,
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
      "IPH_SearchPromotionFeature",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_150[] = {
      {
        "action",
        "install",
      },
      {
        "availability",
        "any",
      },
      {
        "event_trigger",
        "name:search_promotion_trigger;comparator:==0;window:360;storage:360",
      },
      {
        "event_used",
        "name:search_promotion_accepted;comparator:==0;window:360;storage:360",
      },
      {
        "extension_id",
        "dakcooigljlhlgibgdfadgphfnoooacj",
      },
      {
        "instructions_url",
        "https://www.google.com/chrome/landing/google-search-extension-edge/",
      },
      {
        "session_rate",
        "==0",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_450[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_450[] = {
    {
      "Enabled_Install",
      array_kFieldTrialConfig_platforms_450,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_150,
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
      "SearchNavigationPrefetch",
};
const Study::Platform array_kFieldTrialConfig_platforms_449[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_449[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_449,
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
      "SearchEngineExplicitChoiceDialog",
      "SearchEngineUnconditionalDialog",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_149[] = {
      {
        "unlimited_shows",
        "false",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_448[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_448[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_448,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_149,
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
      "HappinessTrackingSurveysForDesktopScheduledRestart",
      "ScheduledRestart",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_148[] = {
      {
        "en_site_id",
        "QSt77E8pH0ugnJ3q1cK0Rf8H914u",
      },
      {
        "probability",
        "1.0",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_447[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_447[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_447,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_148,
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
      "SafetyHubUnusedPermissionRevocationForAllSurfaces",
};
const Study::Platform array_kFieldTrialConfig_platforms_446[] = {
      Study::PLATFORM_WINDOWS,
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
      "SafetyHub",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_147[] = {
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
const Study::Platform array_kFieldTrialConfig_platforms_445[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_445[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_445,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_147,
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
      "SafetyCheckUnusedSitePermissions",
};
const Study::Platform array_kFieldTrialConfig_platforms_444[] = {
      Study::PLATFORM_WINDOWS,
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
      "SafeBrowsingWaitForDnsForRealTimeLookup",
};
const Study::Platform array_kFieldTrialConfig_platforms_443[] = {
      Study::PLATFORM_WINDOWS,
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
      "SafeBrowsingLocalListsUseSBv5",
};
const Study::Platform array_kFieldTrialConfig_platforms_442[] = {
      Study::PLATFORM_WINDOWS,
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
      "SafeBrowsingExtensionTelemetrySearchHijackingSignal",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_146[] = {
      {
        "HeuristicCheckIntervalSeconds",
        "28800",
      },
      {
        "HeuristicThreshold",
        "2",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_441[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_441[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_441,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_146,
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
      "SafeBrowsingDailyPhishingReportsLimit",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_145[] = {
      {
        "kMaxReportsPerIntervalESB",
        "10",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_440[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_440[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_440,
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
      "SQLitePersistentCookieStoreEarlyInit",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_144[] = {
      {
        "check_disk",
        "true",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_439[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_439[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_439,
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
      "SPCLocaleValidation",
};
const Study::Platform array_kFieldTrialConfig_platforms_438[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_438[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_438,
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
      "RustyIcoFeature",
};
const Study::Platform array_kFieldTrialConfig_platforms_437[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_437[] = {
    {
      "RustyIcoExperiment",
      array_kFieldTrialConfig_platforms_437,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
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
      "RustPhishingModelSetter",
};
const Study::Platform array_kFieldTrialConfig_platforms_436[] = {
      Study::PLATFORM_WINDOWS,
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
      array_kFieldTrialConfig_enable_features_416,
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
const char* const array_kFieldTrialConfig_enable_features_415[] = {
      "ComposeboxRichImageSuggestionsRealbox",
};
const Study::Platform array_kFieldTrialConfig_platforms_435[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_435[] = {
    {
      "DirectNavigationInRealbox_20260928",
      array_kFieldTrialConfig_platforms_435,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_415,
      array_kFieldTrialConfig_disable_features_31,
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_414[] = {
      "RestrictPendingInputEventType",
};
const Study::Platform array_kFieldTrialConfig_platforms_434[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_434[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_434,
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
      "InvalidateResourcesOnSizeChange",
      "ResourcePoolPreferExactSizeReuse",
};
const Study::Platform array_kFieldTrialConfig_platforms_433[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_433[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_433,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
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
      "RequiresLoadIgnoreLimitsForDomWindowsOnly",
};
const Study::Platform array_kFieldTrialConfig_platforms_432[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_432[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_432,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
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
      "RemoveHangoutsExtension",
};
const Study::Platform array_kFieldTrialConfig_platforms_431[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_431[] = {
    {
      "Enabled_20261012",
      array_kFieldTrialConfig_platforms_431,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
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
      "RemoteActorCredentialSharing",
};
const Study::Platform array_kFieldTrialConfig_platforms_430[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_430[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_430,
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
      "RelaunchWaitForParentProcess",
};
const Study::Platform array_kFieldTrialConfig_platforms_429[] = {
      Study::PLATFORM_WINDOWS,
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
      "ReduceMojoURLLoaderFactoryCloning",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_143[] = {
      {
        "UseLazyURLLoaderFactoryForServiceWorkerFallback",
        "true",
      },
      {
        "UseLazyURLLoaderFactoryForSubresourceProxying",
        "true",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_428[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_428[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_428,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_143,
      array_kFieldTrialConfig_enable_features_408,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_407[] = {
      "RedWarningSurvey",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_142[] = {
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
const Study::Platform array_kFieldTrialConfig_platforms_427[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_427[] = {
    {
      "RedInterstitial_20241212",
      array_kFieldTrialConfig_platforms_427,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_142,
      array_kFieldTrialConfig_enable_features_407,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_406[] = {
      "RecordLockAcquisitionTime",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_141[] = {
      {
        "RecordLockAcquisitionTimeAllowedThreads",
        "CrBrowserMain,CrRendererMain,CrGpuMain,VizCompositor,Compositor,BrowserIO,NetworkService,GPU.ForegroundWorker,GPU.BackgroundWorker,Renderer.ForegroundWorker,Renderer.BackgroundWorker,Browser.ForegroundWorker,Browser.BackgroundWorker",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_426[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_426[] = {
    {
      "Enabled_20260721",
      array_kFieldTrialConfig_platforms_426,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_141,
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
      "ReauthSkipIdentifierPage",
};
const Study::Platform array_kFieldTrialConfig_platforms_425[] = {
      Study::PLATFORM_WINDOWS,
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
      "RealboxVirtualFocusNavigation",
};
const Study::FormFactor array_kFieldTrialConfig_form_factors_3[] = {
      Study::DESKTOP,
};
const Study::Platform array_kFieldTrialConfig_platforms_424[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_424[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_424,
      array_kFieldTrialConfig_form_factors_3,
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
      "ReadAnythingMenuShuffleExperiment",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_140[] = {
      {
        "read_anything_menu_shuffle_group_name",
        "MenuShuffleSeparation",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_423[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_423[] = {
    {
      "EnabledWithSeparation",
      array_kFieldTrialConfig_platforms_423,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_140,
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
      "HappinessTrackingSurveysForReadAnythingJourney",
      "ReadAnythingJourney",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_139[] = {
      {
        "en_site_id",
        "rmkq5NvrA0ugnJ3q1cK0SNirMLq1",
      },
      {
        "probability",
        "1.0",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_422[] = {
      Study::PLATFORM_WINDOWS,
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
      "ReadAnythingImprovedUi",
};
const Study::Platform array_kFieldTrialConfig_platforms_421[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_421[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_421,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
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
      "ReadAnythingDistillerRefactor",
};
const Study::Platform array_kFieldTrialConfig_platforms_420[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_420[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_420,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
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
      "ReadAnythingDistillationQualityEvaluation",
};
const Study::Platform array_kFieldTrialConfig_platforms_419[] = {
      Study::PLATFORM_WINDOWS,
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
      "QuicSocketSendBufferSize",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_138[] = {
      {
        "QuicSocketSendBufferSizeParam",
        "1048576",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_418[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_418[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_418,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_138,
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
      "PushMessagingGcmEndpointWebpushPath",
};
const Study::Platform array_kFieldTrialConfig_platforms_417[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_417[] = {
    {
      "Enabled_Dogfood",
      array_kFieldTrialConfig_platforms_417,
      {},
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
      "PushMessagingDisallowSenderIDs",
};
const Study::Platform array_kFieldTrialConfig_platforms_416[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_416[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_416,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_396,
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
const Study::Platform array_kFieldTrialConfig_platforms_415[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_415[] = {
    {
      "Disabled_20260803",
      array_kFieldTrialConfig_platforms_415,
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
const char* const array_kFieldTrialConfig_enable_features_395[] = {
      "ProgressiveAccessibilityPhase2",
};
const Study::Platform array_kFieldTrialConfig_platforms_414[] = {
      Study::PLATFORM_WINDOWS,
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
      "ProfilesReordering",
};
const Study::Platform array_kFieldTrialConfig_platforms_413[] = {
      Study::PLATFORM_WINDOWS,
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
      "ProfileLoadTracker",
};
const Study::Platform array_kFieldTrialConfig_platforms_412[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_412[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_412,
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
      "ProcessHtmlDataImmediately",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_137[] = {
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
const Study::Platform array_kFieldTrialConfig_platforms_411[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_411[] = {
    {
      "AllChunks",
      array_kFieldTrialConfig_platforms_411,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_137,
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
      "ProactivePasswordProtection",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_136[] = {
      {
        "CsdProactivePasswordProtectionSampleRate",
        "1.0",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_410[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_410[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_410,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_136,
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
      "PrivateInsightsFeature",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_135[] = {
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
const Study::Platform array_kFieldTrialConfig_platforms_409[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_409[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_409,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_135,
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
      "PrioritizeSafeBrowsingNavigationCallbacks",
};
const Study::Platform array_kFieldTrialConfig_platforms_408[] = {
      Study::PLATFORM_WINDOWS,
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
      array_kFieldTrialConfig_enable_features_389,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_388[] = {
      "PrioritizeMainFrameNavigationNetworkResponse",
};
const Study::Platform array_kFieldTrialConfig_platforms_407[] = {
      Study::PLATFORM_WINDOWS,
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
      "IPH_PriceTrackingPageActionIconLabelFeature",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_134[] = {
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
const Study::Platform array_kFieldTrialConfig_platforms_406[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_406[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_406,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_134,
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
      "PriceTrackingSubscriptionServiceLocaleKey",
      "ShoppingList",
};
const Study::Platform array_kFieldTrialConfig_platforms_405[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_405[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_405,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
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
      "PrewarmDisableOnStartup",
      "PrewarmZeroSuggestTrigger",
};
const Study::Platform array_kFieldTrialConfig_platforms_404[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_404[] = {
    {
      "Enabled_WithDisableOnStartup",
      array_kFieldTrialConfig_platforms_404,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
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
      "PreventPasswordManagerOnFederatedLogin",
};
const Study::Platform array_kFieldTrialConfig_platforms_403[] = {
      Study::PLATFORM_WINDOWS,
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
      "PreventReentrantInternalSetBounds",
};
const Study::Platform array_kFieldTrialConfig_platforms_402[] = {
      Study::PLATFORM_WINDOWS,
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
      "Prerender2EarlyDocumentLifecycleUpdate",
};
const Study::Platform array_kFieldTrialConfig_platforms_401[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_401[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_401,
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
      "ApplySearchEngineTypeMigration",
      "PrepopulatedEnginesMigration",
};
const Study::Platform array_kFieldTrialConfig_platforms_400[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_400[] = {
    {
      "Enabled_20260320",
      array_kFieldTrialConfig_platforms_400,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
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
      "PreloadingRespectUserAgentOverride",
      "RespectUserAgentOverrideInSearchPrefetch",
};
const Study::Platform array_kFieldTrialConfig_platforms_399[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_399[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_399,
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
      "PreloadActivationReportWithExtensionInterception",
};
const Study::Platform array_kFieldTrialConfig_platforms_398[] = {
      Study::PLATFORM_WINDOWS,
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
      "PrefetchMultipleActiveSetSizeLimitForBase",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_133[] = {
      {
        "prefetch_multiple_active_set_size_limit_for_base_value",
        "2",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_397[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_397[] = {
    {
      "Enabled_2",
      array_kFieldTrialConfig_platforms_397,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_133,
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
      "PrefetchCancelUnrelatedPrefetch",
      "PrefetchMatchResolverUnblockAsync",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_132[] = {
      {
        "prefetch_cancel_unrelated_prefetch_cancel_policy",
        "NotServable",
      },
      {
        "unblock_async_policy",
        "AsyncBlocked",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_396[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_396[] = {
    {
      "Enabled_Cancel_NotServable",
      array_kFieldTrialConfig_platforms_396,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_132,
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
      "BookmarkTriggerForPrefetch",
};
const Study::Platform array_kFieldTrialConfig_platforms_395[] = {
      Study::PLATFORM_WINDOWS,
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
      "PrefetchActivationBeacon",
      "PrerenderActivationBeacon",
};
const Study::Platform array_kFieldTrialConfig_platforms_394[] = {
      Study::PLATFORM_WINDOWS,
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
      "PreferWarmRendererProcess",
};
const Study::Platform array_kFieldTrialConfig_platforms_393[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_393[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_393,
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
      "PreemptiveSodaDownload",
};
const Study::Platform array_kFieldTrialConfig_platforms_392[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_392[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_392,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
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
      "PredictionModelComponentDelivery",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_131[] = {
      {
        "targets",
        "20",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_391[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_391[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_391,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_131,
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
      "PreconnectToSearch",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_130[] = {
      {
        "skip_in_background",
        "true",
      },
      {
        "startup_delay_ms",
        "5000",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_390[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_390[] = {
    {
      "EnabledWithStartupDelayForegroundOnly",
      array_kFieldTrialConfig_platforms_390,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_130,
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
      "PreconnectManagerDirectFastPath",
};
const Study::Platform array_kFieldTrialConfig_platforms_389[] = {
      Study::PLATFORM_WINDOWS,
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
      "PreconnectFromKeyedService",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_129[] = {
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
const Study::Platform array_kFieldTrialConfig_platforms_388[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_388[] = {
    {
      "EnabledWithOTRtrue_20250724_Stable",
      array_kFieldTrialConfig_platforms_388,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_129,
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
      "PrecomputeSiteInfo",
};
const Study::Platform array_kFieldTrialConfig_platforms_387[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_387[] = {
    {
      "Enabled_20260127",
      array_kFieldTrialConfig_platforms_387,
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
      "PreReadIcuData",
};
const Study::Platform array_kFieldTrialConfig_platforms_386[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_386[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_386,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
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
      "PreFirstRunDesktopRefresh",
};
const Study::Platform array_kFieldTrialConfig_platforms_385[] = {
      Study::PLATFORM_WINDOWS,
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
      "AddTLSServerHandshakePadding",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_128[] = {
      {
        "AddTLSServerHandshakePaddingBytes",
        "0",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_384[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_384[] = {
    {
      "Enabled_0",
      array_kFieldTrialConfig_platforms_384,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_128,
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
      "PopulateUnattachedAuraScreenInfo",
};
const Study::Platform array_kFieldTrialConfig_platforms_383[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_383[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_383,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_364,
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
const Study::Platform array_kFieldTrialConfig_platforms_382[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_382[] = {
    {
      "Holdback",
      array_kFieldTrialConfig_platforms_382,
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
const char* const array_kFieldTrialConfig_enable_features_363[] = {
      "EnablePlatformRuntimeComponent",
};
const Study::Platform array_kFieldTrialConfig_platforms_381[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_381[] = {
    {
      "Enabled_20260209",
      array_kFieldTrialConfig_platforms_381,
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
      "HappinessTrackingSurveysForPinExtensionJourney",
      "PinExtensionJourney",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_127[] = {
      {
        "en_site_id",
        "8RJXcn5t20ugnJ3q1cK0VLDGHPAz",
      },
      {
        "probability",
        "1.0",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_380[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_380[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_380,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_127,
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
      "PervasiveSharedDictionaries",
};
const Study::Platform array_kFieldTrialConfig_platforms_379[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_379[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_379,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_361,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_360[] = {
      "PersonalContext",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_126[] = {
      {
        "personal_context_enable_fetch_context",
        "true",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_378[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_378[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_378,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_126,
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
      "PermissionsGestureGatedPrompts",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_125[] = {
      {
        "exclude_same_origin_navigations",
        "true",
      },
      {
        "mute_geolocation",
        "true",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_377[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_377[] = {
    {
      "MuteGeolocation",
      array_kFieldTrialConfig_platforms_377,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_125,
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
      "PermissionsAIv4",
};
const Study::Platform array_kFieldTrialConfig_platforms_376[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_376[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_376,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
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
      "PdfUseSkiaRenderer",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_124[] = {
      {
        "premultiplied-alpha",
        "true",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_375[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_375[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_375,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_124,
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
      "PdfInk2",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_123[] = {
      {
        "text-annotations-extra-styles",
        "true",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_374[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_374[] = {
    {
      "enabled",
      array_kFieldTrialConfig_platforms_374,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_123,
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
      "PdfInfoBar",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_122[] = {
      {
        "trigger",
        "startup",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_373[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_373[] = {
    {
      "MostlyLaunched",
      array_kFieldTrialConfig_platforms_373,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_122,
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
      "PdfGetSaveDataInBlocks",
};
const Study::Platform array_kFieldTrialConfig_platforms_372[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_372[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_372,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
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
      "PdfAccessibilityHeuristicEnhancements",
};
const Study::Platform array_kFieldTrialConfig_platforms_371[] = {
      Study::PLATFORM_WINDOWS,
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
      "PaymentRequestEnforceLNAWithClientSecurityState",
};
const Study::Platform array_kFieldTrialConfig_platforms_370[] = {
      Study::PLATFORM_WINDOWS,
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
      "PaymentHandlerCameraAccessUx",
};
const Study::Platform array_kFieldTrialConfig_platforms_369[] = {
      Study::PLATFORM_WINDOWS,
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
      "Path2DPaintCache",
};
const Study::Platform array_kFieldTrialConfig_platforms_368[] = {
      Study::PLATFORM_WINDOWS,
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
      array_kFieldTrialConfig_enable_features_350,
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
const char* const array_kFieldTrialConfig_enable_features_349[] = {
      "IPH_PasswordsSavePrimingPromo",
      "IPH_PasswordsSaveRecoveryPromo",
      "PasswordSaveUpdateDropdownMenuExperiment",
};
const Study::Platform array_kFieldTrialConfig_platforms_367[] = {
      Study::PLATFORM_WINDOWS,
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
      array_kFieldTrialConfig_enable_features_349,
      array_kFieldTrialConfig_disable_features_28,
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_348[] = {
      "PasswordSaveInContextErrorResolution",
};
const Study::Platform array_kFieldTrialConfig_platforms_366[] = {
      Study::PLATFORM_WINDOWS,
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
      array_kFieldTrialConfig_enable_features_348,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_347[] = {
      "PasswordManualFallbackSecurityChecks",
};
const Study::Platform array_kFieldTrialConfig_platforms_365[] = {
      Study::PLATFORM_WINDOWS,
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
      array_kFieldTrialConfig_enable_features_347,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_346[] = {
      "PasswordCompromiseWarningInDetailsCard",
};
const Study::Platform array_kFieldTrialConfig_platforms_364[] = {
      Study::PLATFORM_WINDOWS,
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
      "PasskeyUnlockPromo",
};
const Study::Platform array_kFieldTrialConfig_platforms_363[] = {
      Study::PLATFORM_WINDOWS,
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
      "PasskeyUnlockErrorUi",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_121[] = {
      {
        "passkey_unlock_ui_experiment_arm",
        "text_with_unlock_wording",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_362[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_362[] = {
    {
      "Enabled_with_unlock_wording_20260212",
      array_kFieldTrialConfig_platforms_362,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_121,
      array_kFieldTrialConfig_enable_features_344,
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
const Study::Platform array_kFieldTrialConfig_platforms_361[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_361[] = {
    {
      "Disabled",
      array_kFieldTrialConfig_platforms_361,
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
const char* const array_kFieldTrialConfig_enable_features_343[] = {
      "PassHistogramSharedMemoryOnLaunch",
};
const Study::Platform array_kFieldTrialConfig_platforms_360[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_360[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_360,
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
      "PartitionConnectionsByNetworkIsolationKey",
};
const Study::Platform array_kFieldTrialConfig_platforms_359[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_359[] = {
    {
      "EnableFeatureForTests",
      array_kFieldTrialConfig_platforms_359,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_342,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_341[] = {
      "PartitionAllocUnretainedDanglingPtr",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_120[] = {
      {
        "mode",
        "dump_without_crashing",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_358[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_358[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_358,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_120,
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
      "PartitionAllocTighterAlignedAllocBound",
};
const Study::Platform array_kFieldTrialConfig_platforms_357[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_357[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_357,
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
const char* const array_kFieldTrialConfig_disable_features_26[] = {
      "PartitionAllocSchedulerLoopQuarantineTaskObserverForBrowserUIThread",
};
const char* const array_kFieldTrialConfig_enable_features_339[] = {
      "PartitionAllocSchedulerLoopQuarantine",
      "PartitionAllocWithAdvancedChecks",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_119[] = {
      {
        "PartitionAllocSchedulerLoopQuarantineConfig",
        "{\"*\":{\"amsc\":{\"branch-capacity-in-bytes\":524288,\"enable-quarantine\":true,\"enable-zapping\":true,\"leak-on-destruction\":true}},\"browser\":{\"main\":{\"branch-capacity-in-bytes\":2147483647,\"enable-quarantine\":true,\"enable-task-controlled-purge\":true,\"enable-zapping\":true,\"leak-on-destruction\":false,\"pause-in-between-tasks\":true}},\"gpu-process\":{\"*\":{\"branch-capacity-in-bytes\":2147483647,\"enable-quarantine\":true,\"enable-task-controlled-purge\":true,\"enable-zapping\":true,\"leak-on-destruction\":false,\"pause-in-between-tasks\":true}},\"renderer\":{\"main\":{\"branch-capacity-in-bytes\":2147483647,\"enable-quarantine\":true,\"enable-task-controlled-purge\":true,\"enable-zapping\":true,\"leak-on-destruction\":false,\"pause-in-between-tasks\":true}}}",
      },
      {
        "enabled-processes",
        "all-processes",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_356[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_356[] = {
    {
      "enabled_unlimited_20260420",
      array_kFieldTrialConfig_platforms_356,
      {},
      std::nullopt,
      true,
      nullptr,
      array_kFieldTrialConfig_params_119,
      array_kFieldTrialConfig_enable_features_339,
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
const char* const array_kFieldTrialConfig_enable_features_338[] = {
      "PartitionAllocMemoryReclaimer",
      "PartitionAllocSortSmallerSlotSpanFreeLists",
      "PartitionAllocStraightenLargerSlotSpanFreeLists",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_118[] = {
      {
        "interval",
        "8s",
      },
      {
        "mode",
        "only-when-unprovisioning",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_355[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_355[] = {
    {
      "Interval_8sec",
      array_kFieldTrialConfig_platforms_355,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_118,
      array_kFieldTrialConfig_enable_features_338,
      array_kFieldTrialConfig_disable_features_25,
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_337[] = {
      "PartitionAllocBackupRefPtr",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_117[] = {
      {
        "enabled-processes",
        "all-processes",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_354[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_354[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_354,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_117,
      array_kFieldTrialConfig_enable_features_337,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_336[] = {
      "PaintHoldingForIframes",
};
const Study::Platform array_kFieldTrialConfig_platforms_353[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_353[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_353,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_336,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_335[] = {
      "PageInfoAboutThisSiteMoreLangs",
};
const Study::Platform array_kFieldTrialConfig_platforms_352[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_352[] = {
    {
      "Enabled_231129",
      array_kFieldTrialConfig_platforms_352,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
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
      "PageContentCache",
};
const Study::Platform array_kFieldTrialConfig_platforms_351[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_351[] = {
    {
      "Enabled_20260826",
      array_kFieldTrialConfig_platforms_351,
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
      "PageActionsPrioritySelector",
};
const Study::Platform array_kFieldTrialConfig_platforms_350[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_350[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_350,
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
      "AiModePageActionOptimization",
      "LensOverlayHomeworkPageActionFocusOptimization",
};
const Study::Platform array_kFieldTrialConfig_platforms_349[] = {
      Study::PLATFORM_WINDOWS,
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
      "PageActionAnchoredMessageEasyDismiss",
};
const Study::Platform array_kFieldTrialConfig_platforms_348[] = {
      Study::PLATFORM_WINDOWS,
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
      array_kFieldTrialConfig_enable_features_331,
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
const char* const array_kFieldTrialConfig_enable_features_330[] = {
      "PMWithheldFromViewVoter",
};
const Study::Platform array_kFieldTrialConfig_platforms_347[] = {
      Study::PLATFORM_WINDOWS,
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
      array_kFieldTrialConfig_enable_features_330,
      array_kFieldTrialConfig_disable_features_24,
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_329[] = {
      "PMProcessPriorityPolicy",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_116[] = {
      {
        "renderer_high_initial_priority",
        "true",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_346[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_346[] = {
    {
      "PMProcessPriorityPolicy",
      array_kFieldTrialConfig_platforms_346,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_116,
      array_kFieldTrialConfig_enable_features_329,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_328[] = {
      "PMLoadingPageVoterV2",
};
const Study::Platform array_kFieldTrialConfig_platforms_345[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_345[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_345,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_328,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_327[] = {
      "EnableOopPrintDrivers",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_115[] = {
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
const Study::Platform array_kFieldTrialConfig_platforms_344[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_344[] = {
    {
      "Enabled_20230912",
      array_kFieldTrialConfig_platforms_344,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_115,
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
      "OptimizeWebRequestProxyForServiceWorkerAutoPreload",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_114[] = {
      {
        "allow_declarative_net_request",
        "true",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_343[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_343[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_343,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_114,
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
      "OptimizationGuideProactivePersonalizedHintsFetching",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_113[] = {
      {
        "allowed_optimization_types",
        "SHOPPING_DISCOUNTS",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_342[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_342[] = {
    {
      "Enabled_20260625",
      array_kFieldTrialConfig_platforms_342,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_113,
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
      "AdjustIPv6FallbackTime",
      "EnableIntermediateDnsResults",
      "IPv6FallbackBasedOnRTT",
      "OptimisticDnsForTcp",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_112[] = {
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
const Study::Platform array_kFieldTrialConfig_platforms_341[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_341[] = {
    {
      "Enabled_20260709",
      array_kFieldTrialConfig_platforms_341,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_112,
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
      "AdjustQuicSlowTimerDelay",
      "OptimisticDnsForQuic",
      "QuicSlowTimerBasedOnRTT",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_111[] = {
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
const Study::Platform array_kFieldTrialConfig_platforms_340[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_340[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_340,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_111,
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
      "OptimizationHints",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_110[] = {
      {
        "max_url_keyed_hint_cache_size",
        "50",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_339[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_339[] = {
    {
      "Enabled_20240625",
      array_kFieldTrialConfig_platforms_339,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_110,
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
      "OptimizationHintsFetchingSRP",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_109[] = {
      {
        "max_urls_for_srp_fetch",
        "10",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_338[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_338[] = {
    {
      "Enabled_20240624",
      array_kFieldTrialConfig_platforms_338,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_109,
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
      "TranslateOpenSettings",
};
const Study::Platform array_kFieldTrialConfig_platforms_337[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_337[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_337,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
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
      "OnDeviceModelEviction",
      "OnDeviceModelUsageTracking",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_108[] = {
      {
        "retention_period",
        "30d",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_336[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_336[] = {
    {
      "Enabled_20261020",
      array_kFieldTrialConfig_platforms_336,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_108,
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
      "OnDeviceModelConversationBackend",
};
const Study::Platform array_kFieldTrialConfig_platforms_335[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_335[] = {
    {
      "Enabled_20261022",
      array_kFieldTrialConfig_platforms_335,
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
      "OnDeviceModelBackgroundDownload",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_107[] = {
      {
        "allowed_features",
        "PromptApi,WritingAssistanceApi,Summarize",
      },
      {
        "on_device_model_free_space_mb_required_to_background_install",
        "50000",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_334[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_334[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_334,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_107,
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
      "AsyncSpellcheckCustomDictionaryInit",
      "OnDemandSpellcheckInitialization",
};
const Study::Platform array_kFieldTrialConfig_platforms_333[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_333[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_333,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
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
      "OmniboxWebUIPopupHideOnCreation",
};
const Study::Platform array_kFieldTrialConfig_platforms_332[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_332[] = {
    {
      "Enabled_20260917",
      array_kFieldTrialConfig_platforms_332,
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
      "OmniboxWebUIDeferShowUntilVisualStateReady",
};
const Study::Platform array_kFieldTrialConfig_platforms_331[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_331[] = {
    {
      "Enabled_20260805",
      array_kFieldTrialConfig_platforms_331,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
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
      "OmniboxUseShortSuggestPathV1",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_106[] = {
      {
        "OmniboxSuggestPathClient",
        "chrome-omni,chrome,chrome-ntp-action,chrome-cobrowse-compose,chrome-multimodal,chrome-contextual,chrome-android-search-resumption-module,chrome-compose,chrome-mobile-aim",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_330[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_330[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_330,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_106,
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
      "StarterPackIPH",
};
const Study::Platform array_kFieldTrialConfig_platforms_329[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_329[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_329,
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
      "OmniboxOnDeviceTailModel",
};
const Study::Platform array_kFieldTrialConfig_platforms_328[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_328[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_328,
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
      "LogUrlScoringSignals",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_105[] = {
      {
        "enable_scoring_signals_annotators",
        "true",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_327[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_327[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_327,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_105,
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
      "IPH_OmniboxEverywhereLensPromo",
      "OmniboxEverywhere",
};
const Study::Platform array_kFieldTrialConfig_platforms_326[] = {
      Study::PLATFORM_WINDOWS,
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
      "OmniboxDocumentProvider",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_104[] = {
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
const Study::Platform array_kFieldTrialConfig_platforms_325[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_325[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_325,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_104,
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
      "OmniboxCrossDeviceTabZeroSuggest",
};
const Study::Platform array_kFieldTrialConfig_platforms_324[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_324[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_324,
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
      "OmniboxRemoveSuggestionsFromClipboard",
      "OmniboxUIExperimentMaxAutocompleteMatches",
};
const Study::Platform array_kFieldTrialConfig_platforms_323[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_323[] = {
    {
      "DesktopExperiments",
      array_kFieldTrialConfig_platforms_323,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_306,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const Study::Platform array_kFieldTrialConfig_platforms_322[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_322[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_322,
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
const char* const array_kFieldTrialConfig_enable_features_305[] = {
      "OffloadAcceptCHFrameCheck",
};
const Study::Platform array_kFieldTrialConfig_platforms_321[] = {
      Study::PLATFORM_WINDOWS,
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
      "DrawQuadSplitLimit",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_103[] = {
      {
        "num_of_splits",
        "8",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_320[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_320[] = {
    {
      "quad_split_limit_8",
      array_kFieldTrialConfig_platforms_320,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_103,
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
      "EnableOAuthMultiloginYoutubeCookiesBinding",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_102[] = {
      {
        "OAuthMultiloginYoutubeCookieBindingEnforced",
        "true",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_319[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_319[] = {
    {
      "EnabledLiveLaunch",
      array_kFieldTrialConfig_platforms_319,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_102,
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
      "NtpRealboxCyclingPlaceholders",
};
const Study::FormFactor array_kFieldTrialConfig_form_factors_2[] = {
      Study::DESKTOP,
};
const Study::Platform array_kFieldTrialConfig_platforms_318[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_318[] = {
    {
      "Enabled_20260828",
      array_kFieldTrialConfig_platforms_318,
      array_kFieldTrialConfig_form_factors_2,
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
const char* const array_kFieldTrialConfig_enable_features_301[] = {
      "NtpNextFeatures",
      "NtpScaledActionChips",
      "NtpScaledActionChipsSmall",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_101[] = {
      {
        "AddTabUploadDelayOnActionChipClick",
        "true",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_317[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_317[] = {
    {
      "Enabled_DirectNavigation_AddTab",
      array_kFieldTrialConfig_platforms_317,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_101,
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
      "NtpMostVisitedHighDpiFavicons",
};
const Study::Platform array_kFieldTrialConfig_platforms_316[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_316[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_316,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
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
      "NtpSharepointModule",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_100[] = {
      {
        "NtpSharepointModuleDataParam",
        "non-insights",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_315[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_315[] = {
    {
      "Enabled_NonInsights",
      array_kFieldTrialConfig_platforms_315,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_100,
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
      "NtpLazyLoadComposebox",
};
const Study::FormFactor array_kFieldTrialConfig_form_factors_1[] = {
      Study::DESKTOP,
};
const Study::Platform array_kFieldTrialConfig_platforms_314[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_314[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_314,
      array_kFieldTrialConfig_form_factors_1,
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
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
      "NtpGoogleLogo26",
};
const Study::FormFactor array_kFieldTrialConfig_form_factors_0[] = {
      Study::DESKTOP,
};
const Study::Platform array_kFieldTrialConfig_platforms_313[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_313[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_313,
      array_kFieldTrialConfig_form_factors_0,
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
      "ComposeboxUsesChromeComposeClient",
      "NtpComposebox",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_99[] = {
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
const Study::Platform array_kFieldTrialConfig_platforms_312[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_312[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_312,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_99,
      array_kFieldTrialConfig_enable_features_296,
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
const char* const array_kFieldTrialConfig_enable_features_295[] = {
      "NoopRuntimeMutable3",
};
const Study::Platform array_kFieldTrialConfig_platforms_311[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_311[] = {
    {
      "Enabled_20260731",
      array_kFieldTrialConfig_platforms_311,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_295,
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
const char* const array_kFieldTrialConfig_enable_features_294[] = {
      "NoopRuntimeMutable1",
};
const Study::Platform array_kFieldTrialConfig_platforms_310[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_310[] = {
    {
      "Enabled_20260731",
      array_kFieldTrialConfig_platforms_310,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_294,
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
const Study::Platform array_kFieldTrialConfig_platforms_309[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_309[] = {
    {
      "Disabled",
      array_kFieldTrialConfig_platforms_309,
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
const char* const array_kFieldTrialConfig_enable_features_293[] = {
      "NoVarySearchCacheLoadOnSeparateTaskRunner",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_98[] = {
      {
        "NoVarySearchCacheLoadTaskRunnerPriority",
        "USER_VISIBLE",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_308[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_308[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_308,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_98,
      array_kFieldTrialConfig_enable_features_293,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_292[] = {
      "NoPreReadMainDllStartup",
};
const Study::Platform array_kFieldTrialConfig_platforms_307[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_307[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_307,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_292,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_291[] = {
      "VoiceSearchCoherenceSearchbox",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_97[] = {
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
const Study::Platform array_kFieldTrialConfig_platforms_306[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_306[] = {
    {
      "Arm4_Transcript_AutoEndpoint_20260923",
      array_kFieldTrialConfig_platforms_306,
      array_kFieldTrialConfig_form_factors,
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_97,
      array_kFieldTrialConfig_enable_features_291,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_290[] = {
      "NetworkServiceSandbox",
};
const Study::Platform array_kFieldTrialConfig_platforms_305[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_305[] = {
    {
      "Enabled_20231025",
      array_kFieldTrialConfig_platforms_305,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
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
      "NetworkQualityEstimatorAsyncNotifyHeadersReceived",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_96[] = {
      {
        "defer_notify_headers_until_next_step",
        "false",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_304[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_304[] = {
    {
      "Experiment",
      array_kFieldTrialConfig_platforms_304,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_96,
      array_kFieldTrialConfig_enable_features_289,
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
const char* const array_kFieldTrialConfig_enable_features_288[] = {
      "DrainSpdySessionSynchronouslyOnRemoteEndpointDisconnect",
      "NetTaskScheduler",
};
const Study::Platform array_kFieldTrialConfig_platforms_303[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_303[] = {
    {
      "Enabled_SpdyDrainFix",
      array_kFieldTrialConfig_platforms_303,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_288,
      array_kFieldTrialConfig_disable_features_20,
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_287[] = {
      "KillSpareRenderOnMemoryPressure",
      "MultipleSpareRPHs",
      "SpareRPHKeepOneAliveOnMemoryPressure",
      "SpareRPHUseCriticalMemoryPressure",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_95[] = {
      {
        "count",
        "2",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_302[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_302[] = {
    {
      "Enabled2",
      array_kFieldTrialConfig_platforms_302,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_95,
      array_kFieldTrialConfig_enable_features_287,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_286[] = {
      "MigrateSyncingUserToSignedIn",
};
const Study::Platform array_kFieldTrialConfig_platforms_301[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_301[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_301,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_286,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_285[] = {
      "MenuSimplification",
};
const Study::Platform array_kFieldTrialConfig_platforms_300[] = {
      Study::PLATFORM_WINDOWS,
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
      "MemoryConsumerForNGShapeCache",
};
const Study::Platform array_kFieldTrialConfig_platforms_299[] = {
      Study::PLATFORM_WINDOWS,
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
      "MediaFoundationBatchRead",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_94[] = {
      {
        "batch_read_count",
        "200",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_298[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_298[] = {
    {
      "Enabled_200",
      array_kFieldTrialConfig_platforms_298,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_94,
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
      "MainNodeAnnotations",
};
const Study::Platform array_kFieldTrialConfig_platforms_297[] = {
      Study::PLATFORM_WINDOWS,
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
      "MagiChromePasskeySignIn",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_93[] = {
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
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_296[] = {
    {
      "Autofill",
      array_kFieldTrialConfig_platforms_296,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_93,
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
      "LogOnDeviceMetricsOnStartup",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_92[] = {
      {
        "on_device_startup_metric_delay",
        "3m",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_295[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_295[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_295,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_92,
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
      "LocalNetworkAccessChecks",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_91[] = {
      {
        "LocalNetworkAccessChecksWarn",
        "false",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_294[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_294[] = {
    {
      "EnabledBlocking",
      array_kFieldTrialConfig_platforms_294,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_91,
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
      "LiveCaptionExperimentalLanguages",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_90[] = {
      {
        "available_languages",
        "en-US,fr-FR,it-IT,de-DE,es-ES,ja-JP,hi-IN,pt-BR,ko-KR,pl-PL,th-TH,tr-TR,id-ID,cmn-Hans-CN,cmn-Hant-TW,vi-VN,ru-RU",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_293[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_293[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_293,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_90,
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
      "LensComposeboxIdentityDelegation",
};
const Study::Platform array_kFieldTrialConfig_platforms_292[] = {
      Study::PLATFORM_WINDOWS,
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
      array_kFieldTrialConfig_enable_features_277,
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
      Study::PLATFORM_WINDOWS,
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
const char* const array_kFieldTrialConfig_enable_features_276[] = {
      "LazyParseInlineStyleSheets",
};
const Study::Platform array_kFieldTrialConfig_platforms_290[] = {
      Study::PLATFORM_WINDOWS,
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
      array_kFieldTrialConfig_enable_features_276,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_275[] = {
      "LazyInitializeSpellcheckCharAttribute",
};
const Study::Platform array_kFieldTrialConfig_platforms_289[] = {
      Study::PLATFORM_WINDOWS,
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
      "LazyBlinkTimezoneInit",
};
const Study::Platform array_kFieldTrialConfig_platforms_288[] = {
      Study::PLATFORM_WINDOWS,
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
      "LazilySetCustomActionCaption",
};
const Study::Platform array_kFieldTrialConfig_platforms_287[] = {
      Study::PLATFORM_WINDOWS,
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
      "LaunchOnStartup",
      "LaunchOnStartupInfoBar",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_89[] = {
      {
        "default_preference",
        "disabled",
      },
      {
        "mode",
        "foreground",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_286[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_286[] = {
    {
      "Enabled_Foreground_OptIn",
      array_kFieldTrialConfig_platforms_286,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_89,
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
const Study::Platform array_kFieldTrialConfig_platforms_285[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_285[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_285,
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
const Study::Platform array_kFieldTrialConfig_platforms_284[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_284[] = {
    {
      "Enabled_20260929",
      array_kFieldTrialConfig_platforms_284,
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
const Study::Platform array_kFieldTrialConfig_platforms_283[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_283[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_283,
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
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_88[] = {
      {
        "lcpp_preload_lazy_load_image_type",
        "native_lazy_loading",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_282[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_282[] = {
    {
      "EnableWithNativeLazyLoading_20231113",
      array_kFieldTrialConfig_platforms_282,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_88,
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
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_87[] = {
      {
        "load_timing",
        "post_task",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_281[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_281[] = {
    {
      "EnableWithPostTask_20240426",
      array_kFieldTrialConfig_platforms_281,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_87,
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
const Study::Platform array_kFieldTrialConfig_platforms_280[] = {
      Study::PLATFORM_WINDOWS,
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
const Study::Platform array_kFieldTrialConfig_platforms_279[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_279[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_279,
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
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_86[] = {
      {
        "display_order",
        "DisplayAbove",
      },
      {
        "wording",
        "UseApproximateLocation",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_278[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_278[] = {
    {
      "ApproximateLocationDisplayAbove_20260727",
      array_kFieldTrialConfig_platforms_278,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_86,
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
const Study::Platform array_kFieldTrialConfig_platforms_277[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_277[] = {
    {
      "InhibitSQLReleaseCacheMemoryIfNeeded",
      array_kFieldTrialConfig_platforms_277,
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
      "InfoBarQueuedCountPill",
};
const Study::Platform array_kFieldTrialConfig_platforms_276[] = {
      Study::PLATFORM_WINDOWS,
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
      array_kFieldTrialConfig_enable_features_262,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_disable_features_18[] = {
      "DiscardOnCommitLimit",
};
const char* const array_kFieldTrialConfig_enable_features_261[] = {
      "InfiniteTabsFreezingOnMemoryPressure",
};
const Study::Platform array_kFieldTrialConfig_platforms_275[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_275[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_275,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_261,
      array_kFieldTrialConfig_disable_features_18,
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
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_85[] = {
      {
        "indigo_saved_url",
        "https://www.google.com/saves",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_274[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_274[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_274,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_85,
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
const Study::Platform array_kFieldTrialConfig_platforms_273[] = {
      Study::PLATFORM_WINDOWS,
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
const Study::Platform array_kFieldTrialConfig_platforms_272[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_272[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_272,
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
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_84[] = {
      {
        "quic_hints",
        "google.com,443,443,www.google.com,443,443",
      },
      {
        "quic_options",
        "ORIG",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_271[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_271[] = {
    {
      "EnabledWithConfigureMinimalQuicHintsWithOriginFrame",
      array_kFieldTrialConfig_platforms_271,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_84,
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
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_83[] = {
      {
        "StartupDelayIncludesSessionRestore",
        "true",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_270[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_270[] = {
    {
      "EnabledWithSessionRestore",
      array_kFieldTrialConfig_platforms_270,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_83,
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
const Study::Platform array_kFieldTrialConfig_platforms_269[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_269[] = {
    {
      "Enabled_Teamfood",
      array_kFieldTrialConfig_platforms_269,
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
const Study::Platform array_kFieldTrialConfig_platforms_268[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_268[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_268,
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
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_82[] = {
      {
        "ignore_ip_matching_when_finding_existing_sessions",
        "true",
      },
      {
        "noip_quic_option",
        "NOIP",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_267[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_267[] = {
    {
      "Enabled_NOIP",
      array_kFieldTrialConfig_platforms_267,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_82,
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
const Study::Platform array_kFieldTrialConfig_platforms_266[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_266[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_266,
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
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_81[] = {
      {
        "duplicate_nav_threshold",
        "3s",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_265[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_265[] = {
    {
      "Enabled_threshold_3s",
      array_kFieldTrialConfig_platforms_265,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_81,
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
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_80[] = {
      {
        "stage",
        "UseSqliteForNewStores",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_264[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_264[] = {
    {
      "UseSqliteForNewStores",
      array_kFieldTrialConfig_platforms_264,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_80,
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
const Study::Platform array_kFieldTrialConfig_platforms_263[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_263[] = {
    {
      "Enabled_20260924",
      array_kFieldTrialConfig_platforms_263,
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
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_79[] = {
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
const Study::Platform array_kFieldTrialConfig_platforms_262[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_262[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_262,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_79,
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
const Study::Platform array_kFieldTrialConfig_platforms_261[] = {
      Study::PLATFORM_WINDOWS,
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
const Study::Platform array_kFieldTrialConfig_platforms_260[] = {
      Study::PLATFORM_WINDOWS,
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
const Study::Platform array_kFieldTrialConfig_platforms_259[] = {
      Study::PLATFORM_WINDOWS,
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
const Study::Platform array_kFieldTrialConfig_platforms_258[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_258[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_258,
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
const Study::Platform array_kFieldTrialConfig_platforms_257[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_257[] = {
    {
      "Enabled_NVS_HttpCache_And_Omnibox_Prefetch",
      array_kFieldTrialConfig_platforms_257,
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
const Study::Platform array_kFieldTrialConfig_platforms_256[] = {
      Study::PLATFORM_WINDOWS,
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
const Study::Platform array_kFieldTrialConfig_platforms_255[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_255[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_255,
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
const char* const array_kFieldTrialConfig_disable_features_17[] = {
      "HistoryEmbeddings",
};
const Study::Platform array_kFieldTrialConfig_platforms_254[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_254[] = {
    {
      "Disabled_20261009",
      array_kFieldTrialConfig_platforms_254,
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
const char* const array_kFieldTrialConfig_enable_features_240[] = {
      "HistoryDatabaseWriteAheadLogging",
};
const Study::Platform array_kFieldTrialConfig_platforms_253[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_253[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_253,
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
const char* const array_kFieldTrialConfig_disable_features_16[] = {
      "HeapVectorPromptlyFree",
};
const Study::Platform array_kFieldTrialConfig_platforms_252[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_252[] = {
    {
      "Disabled",
      array_kFieldTrialConfig_platforms_252,
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
const char* const array_kFieldTrialConfig_enable_features_239[] = {
      "HeapProfilerIncludeResidency",
};
const Study::Platform array_kFieldTrialConfig_platforms_251[] = {
      Study::PLATFORM_WINDOWS,
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
const Study::Platform array_kFieldTrialConfig_platforms_250[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_250[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_250,
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
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_78[] = {
      {
        "en_site_id",
        "QLxTthukW0ugnJ3q1cK0UBFVdFX4",
      },
      {
        "probability",
        "1.0",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_249[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_249[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_249,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_78,
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
const Study::Platform array_kFieldTrialConfig_platforms_248[] = {
      Study::PLATFORM_WINDOWS,
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
const Study::Platform array_kFieldTrialConfig_platforms_247[] = {
      Study::PLATFORM_WINDOWS,
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
const Study::Platform array_kFieldTrialConfig_platforms_246[] = {
      Study::PLATFORM_WINDOWS,
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
const Study::Platform array_kFieldTrialConfig_platforms_245[] = {
      Study::PLATFORM_WINDOWS,
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
const Study::Platform array_kFieldTrialConfig_platforms_244[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_244[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_244,
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
      "GrCacheLimitsFeature",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_77[] = {
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
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_243[] = {
    {
      "cache_96_256_8_default_20230911",
      array_kFieldTrialConfig_platforms_243,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_77,
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
      "GpuPersistentCacheMetadata",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_76[] = {
      {
        "preload_count",
        "50",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_242[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_242[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_242,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_76,
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
      "GpuPersistentCache",
};
const Study::Platform array_kFieldTrialConfig_platforms_241[] = {
      Study::PLATFORM_WINDOWS,
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
const Study::Platform array_kFieldTrialConfig_platforms_240[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_240[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_240,
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
const Study::Platform array_kFieldTrialConfig_platforms_239[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_239[] = {
    {
      "Enabled_20260821",
      array_kFieldTrialConfig_platforms_239,
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
const Study::Platform array_kFieldTrialConfig_platforms_238[] = {
      Study::PLATFORM_WINDOWS,
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
const Study::Platform array_kFieldTrialConfig_platforms_237[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_237[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_237,
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
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_75[] = {
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
const Study::Platform array_kFieldTrialConfig_platforms_236[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_236[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_236,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_75,
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
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_74[] = {
      {
        "tutorials_arm",
        "1",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_235[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_235[] = {
    {
      "Arm1",
      array_kFieldTrialConfig_platforms_235,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_74,
      array_kFieldTrialConfig_enable_features_223,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_disable_features_15[] = {
      "IPH_GlicTryIt",
};
const Study::Platform array_kFieldTrialConfig_platforms_234[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_234[] = {
    {
      "Unlaunched_20260309",
      array_kFieldTrialConfig_platforms_234,
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
const char* const array_kFieldTrialConfig_enable_features_222[] = {
      "GlicTextSelectionContextMenu",
};
const Study::Platform array_kFieldTrialConfig_platforms_233[] = {
      Study::PLATFORM_WINDOWS,
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
const Study::Platform array_kFieldTrialConfig_platforms_232[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_232[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_232,
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
const Study::Platform array_kFieldTrialConfig_platforms_231[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_231[] = {
    {
      "Enabled_20260106",
      array_kFieldTrialConfig_platforms_231,
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
const Study::Platform array_kFieldTrialConfig_platforms_230[] = {
      Study::PLATFORM_WINDOWS,
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
const Study::Platform array_kFieldTrialConfig_platforms_229[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_229[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_229,
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
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_73[] = {
      {
        "arm",
        "3",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_228[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_228[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_228,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_73,
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
const Study::Platform array_kFieldTrialConfig_platforms_227[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_227[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_227,
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
const Study::Platform array_kFieldTrialConfig_platforms_226[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_226[] = {
    {
      "Enabled_20260427",
      array_kFieldTrialConfig_platforms_226,
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
const Study::Platform array_kFieldTrialConfig_platforms_225[] = {
      Study::PLATFORM_WINDOWS,
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
const Study::Platform array_kFieldTrialConfig_platforms_224[] = {
      Study::PLATFORM_WINDOWS,
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
const Study::Platform array_kFieldTrialConfig_platforms_223[] = {
      Study::PLATFORM_WINDOWS,
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
const Study::Platform array_kFieldTrialConfig_platforms_222[] = {
      Study::PLATFORM_WINDOWS,
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
const Study::Platform array_kFieldTrialConfig_platforms_221[] = {
      Study::PLATFORM_WINDOWS,
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
const Study::Platform array_kFieldTrialConfig_platforms_220[] = {
      Study::PLATFORM_WINDOWS,
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
const Study::Platform array_kFieldTrialConfig_platforms_219[] = {
      Study::PLATFORM_WINDOWS,
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
const Study::Platform array_kFieldTrialConfig_platforms_218[] = {
      Study::PLATFORM_WINDOWS,
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
const Study::Platform array_kFieldTrialConfig_platforms_217[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_217[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_217,
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
const char* const array_kFieldTrialConfig_disable_features_14[] = {
      "GlicDaisyChainNewTabs",
};
const Study::Platform array_kFieldTrialConfig_platforms_216[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_216[] = {
    {
      "Disabled",
      array_kFieldTrialConfig_platforms_216,
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
const char* const array_kFieldTrialConfig_enable_features_205[] = {
      "GlicCrossOriginNavigationGating",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_72[] = {
      {
        "confirm_navigation_to_new_origins",
        "false",
      },
      {
        "confirm_navigation_to_new_origins_dark_launch",
        "true",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_215[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_215[] = {
    {
      "Enabled_DarkLaunch",
      array_kFieldTrialConfig_platforms_215,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_72,
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
      "GlicContentsInitiallyHidden",
      "GlicWarming",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_71[] = {
      {
        "glic-warming-delay-ms",
        "300000",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_214[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_214[] = {
    {
      "Enabled_Warming300s_20261021",
      array_kFieldTrialConfig_platforms_214,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_71,
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
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_70[] = {
      {
        "glic-api-allowed-origins",
        "https://gemini.google.com https://gemini.corp.google.com https://gemini-autopush.corp.google.com https://gemini-staging.corp.google.com https://gemini-preprod.corp.google.com",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_213[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_213[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_213,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_70,
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
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_69[] = {
      {
        "AutoOpenGlicForPdfWithOnboarding",
        "true",
      },
      {
        "MinWindowWidthForPdfAutoOpen",
        "1500",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_212[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_212[] = {
    {
      "Enabled_AutoOpenGlicForPdf_UnconsentedUsers",
      array_kFieldTrialConfig_platforms_212,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_69,
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
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_68[] = {
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
const Study::Platform array_kFieldTrialConfig_platforms_211[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_211[] = {
    {
      "Default",
      array_kFieldTrialConfig_platforms_211,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_68,
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
const Study::Platform array_kFieldTrialConfig_platforms_210[] = {
      Study::PLATFORM_WINDOWS,
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
      "GlicWebContinuity",
};
const Study::Platform array_kFieldTrialConfig_platforms_209[] = {
      Study::PLATFORM_WINDOWS,
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
      "GaiaAccountIdEnforcement",
};
const Study::Platform array_kFieldTrialConfig_platforms_208[] = {
      Study::PLATFORM_WINDOWS,
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
      "GCMMessageBuffering",
};
const Study::Platform array_kFieldTrialConfig_platforms_207[] = {
      Study::PLATFORM_WINDOWS,
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
      "ApiEnterpriseReportingPrivateReportForceSaveToCloudEventHandled",
      "EnableForceSaveToCloudDeferredReporting",
};
const Study::Platform array_kFieldTrialConfig_platforms_206[] = {
      Study::PLATFORM_WINDOWS,
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
      "FontDataServiceForCSSLocalFonts",
};
const Study::Platform array_kFieldTrialConfig_platforms_205[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_205[] = {
    {
      "Enabled_20261021",
      array_kFieldTrialConfig_platforms_205,
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
      "FontDataManagerPrewarming",
};
const Study::Platform array_kFieldTrialConfig_platforms_204[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_204[] = {
    {
      "Enabled_20260929",
      array_kFieldTrialConfig_platforms_204,
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
      "FlushFileBuffersOnSyncFlush",
      "FlushPersistentSystemProfileOnWrite",
};
const Study::Platform array_kFieldTrialConfig_platforms_203[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_203[] = {
    {
      "EnabledWithFileBuffers_20261014",
      array_kFieldTrialConfig_platforms_203,
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
      "EnableReadingListForMigratedUsers",
};
const Study::Platform array_kFieldTrialConfig_platforms_202[] = {
      Study::PLATFORM_WINDOWS,
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
      "FirstRunFeatureShowcaseGeminiStep",
};
const Study::Platform array_kFieldTrialConfig_platforms_201[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_201[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_201,
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
const char* const array_kFieldTrialConfig_enable_features_190[] = {
      "FirstRunDesktopRevamp",
};
const Study::Platform array_kFieldTrialConfig_platforms_200[] = {
      Study::PLATFORM_WINDOWS,
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
      "FencedFrames",
      "FencedFramesAPIChanges",
      "FencedFramesAutomaticBeaconCredentials",
      "FencedFramesCrossOriginAutomaticBeaconData",
      "FencedFramesCrossOriginEventReporting",
      "FencedFramesLocalUnpartitionedDataAccess",
      "FencedFramesReportEventHeaderChanges",
      "FencedFramesSrcPermissionsPolicy",
};
const Study::Platform array_kFieldTrialConfig_platforms_199[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_199[] = {
    {
      "Disabled",
      array_kFieldTrialConfig_platforms_199,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      {},
      array_kFieldTrialConfig_disable_features_13,
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_189[] = {
      "FeedbackDisabledDialog",
};
const Study::Platform array_kFieldTrialConfig_platforms_198[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_198[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_198,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_189,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_disable_features_12[] = {
      "FedCmAmbientUI",
};
const char* const array_kFieldTrialConfig_enable_features_188[] = {
      "SegmentationPlatformFedCmUser",
};
const Study::Platform array_kFieldTrialConfig_platforms_197[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_197[] = {
    {
      "SegmentationPlatform",
      array_kFieldTrialConfig_platforms_197,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_188,
      array_kFieldTrialConfig_disable_features_12,
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_187[] = {
      "ExtremeLightweightUAFDetector",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_67[] = {
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
const Study::Platform array_kFieldTrialConfig_platforms_196[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_196[] = {
    {
      "Quarantine_900_100_512_v6",
      array_kFieldTrialConfig_platforms_196,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_67,
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
      "ExternalBeginFrameSourceWinUsesRunOrPostTask",
};
const Study::Platform array_kFieldTrialConfig_platforms_195[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_195[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_195,
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
      "IPH_ExtensionsZeroStatePromo",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_66[] = {
      {
        "x_iph-variant",
        "custom-ui-chip-iph",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_194[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_194[] = {
    {
      "Chips_v1",
      array_kFieldTrialConfig_platforms_194,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_66,
      array_kFieldTrialConfig_enable_features_185,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_184[] = {
      "ExtensionsMenuAccessControl",
};
const Study::Platform array_kFieldTrialConfig_platforms_193[] = {
      Study::PLATFORM_WINDOWS,
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
      "ExtensionsPinnedByDefault",
};
const Study::Platform array_kFieldTrialConfig_platforms_192[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_192[] = {
    {
      "Enabled_20260716",
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
const char* const array_kFieldTrialConfig_disable_features_11[] = {
      "ApiRuntimeGetPlatformInfoNaClArch",
};
const Study::Platform array_kFieldTrialConfig_platforms_191[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_191[] = {
    {
      "Disabled",
      array_kFieldTrialConfig_platforms_191,
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
const char* const array_kFieldTrialConfig_enable_features_182[] = {
      "ExtensionServiceWorkerVoter",
};
const Study::Platform array_kFieldTrialConfig_platforms_190[] = {
      Study::PLATFORM_WINDOWS,
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
      "ExcludePipFromScreenCapture",
};
const Study::Platform array_kFieldTrialConfig_platforms_189[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_189[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_189,
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
      "EventTimingIgnorePresentationTimeFromUnexpectedFrameSource",
};
const Study::Platform array_kFieldTrialConfig_platforms_188[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_188[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_188,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
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
      "DataControlsGlic",
      "GlicBulkDataEntrySupport",
};
const Study::Platform array_kFieldTrialConfig_platforms_187[] = {
      Study::PLATFORM_WINDOWS,
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
      "EnhancedFieldsForSecOps",
      "EnhancedSecurityEventFields",
};
const Study::Platform array_kFieldTrialConfig_platforms_186[] = {
      Study::PLATFORM_WINDOWS,
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
      "EncryptSessionStorage",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_65[] = {
      {
        "stage",
        "write_both_read_prefer_encrypted",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_185[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_185[] = {
    {
      "Phase2",
      array_kFieldTrialConfig_platforms_185,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_65,
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
      "EncryptBookmarks",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_64[] = {
      {
        "stage",
        "write_both_read_prefer_encrypted",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_184[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_184[] = {
    {
      "Phase2",
      array_kFieldTrialConfig_platforms_184,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_64,
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
      "EnableWatermarkTimestampTimezone",
};
const Study::Platform array_kFieldTrialConfig_platforms_183[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_183[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_183,
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
      "EnableShouldShowPromotion",
};
const Study::Platform array_kFieldTrialConfig_platforms_182[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_182[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_182,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
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
      "ShoppingPDPMetrics",
};
const Study::Platform array_kFieldTrialConfig_platforms_181[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_181[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_181,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
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
      "OnDeviceWebSpeechSmallExpertModel",
};
const Study::Platform array_kFieldTrialConfig_platforms_180[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_180[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_180,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
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
      "EnableNewUploadSizeLimit",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_63[] = {
      {
        "max_file_size_mb",
        "250",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_179[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_179[] = {
    {
      "Enabled_250MB",
      array_kFieldTrialConfig_platforms_179,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_63,
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
      "EnableHangWatcherOnGpuProcess",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_62[] = {
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
const Study::Platform array_kFieldTrialConfig_platforms_178[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_178[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_178,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_62,
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
      "EnableHangWatcher",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_61[] = {
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
const Study::Platform array_kFieldTrialConfig_platforms_177[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_177[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_177,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_61,
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
      "EnableGlicAiAvatarRing",
};
const Study::Platform array_kFieldTrialConfig_platforms_176[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_176[] = {
    {
      "Enabled_20260928",
      array_kFieldTrialConfig_platforms_176,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
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
      "EnableDynamicRouteFetching",
};
const Study::Platform array_kFieldTrialConfig_platforms_175[] = {
      Study::PLATFORM_WINDOWS,
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
      "EnableDiscountInfoApi",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_60[] = {
      {
        "discount-on-shoppy-page",
        "true",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_174[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_174[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_174,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_60,
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
      "EnableBestEffortTaskInhibitingPolicy",
      "ScopedBestEffortExecutionFenceForTaskQueue",
};
const Study::Platform array_kFieldTrialConfig_platforms_173[] = {
      Study::PLATFORM_WINDOWS,
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
      "EnableAccountPreviewPreferredAccountFollowup",
};
const Study::Platform array_kFieldTrialConfig_platforms_172[] = {
      Study::PLATFORM_WINDOWS,
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
      "EnableAccountPreviewPreferredAccount",
};
const Study::Platform array_kFieldTrialConfig_platforms_171[] = {
      Study::PLATFORM_WINDOWS,
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
      "EnableAccountPreviewDataFetchOptimizations",
};
const Study::Platform array_kFieldTrialConfig_platforms_170[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_170[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_170,
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
      "EarlyCookieLoadOnPreconnect",
};
const Study::Platform array_kFieldTrialConfig_platforms_169[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_169[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_169,
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
      "EagerlyResolveCoreDllsImports",
};
const Study::Platform array_kFieldTrialConfig_platforms_168[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_168[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_168,
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
      "EagerStorageAccessPermissionCheck",
};
const Study::Platform array_kFieldTrialConfig_platforms_167[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_167[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_167,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
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
      "DynamicProfileCountry",
      "StrictAssociatedCountriesCheck",
      "WaffleRestrictToAssociatedCountries",
};
const Study::Platform array_kFieldTrialConfig_platforms_166[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_166[] = {
    {
      "StrictLocalWaffle_20260519",
      array_kFieldTrialConfig_platforms_166,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
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
      "DumpWithoutCrashingForMissingSecurityState",
};
const Study::Platform array_kFieldTrialConfig_platforms_165[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_165[] = {
    {
      "Enabled_20260121",
      array_kFieldTrialConfig_platforms_165,
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
      "DsePreload2",
      "DsePreload2AheadOfImminentNavigation",
      "DsePreload2OnPress",
      "PrefetchAheadOfImminentNavigation",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_59[] = {
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
const Study::Platform array_kFieldTrialConfig_platforms_164[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_164[] = {
    {
      "Enabled_Base_AheadOfImminentNavigation",
      array_kFieldTrialConfig_platforms_164,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_59,
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
      "DomStorageSqliteNewDatabases",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_58[] = {
      {
        "DomStorageSqliteNewDatabasesStage",
        "UseSqliteForNewDatabases",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_163[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_163[] = {
    {
      "UseSqliteForNewDatabases",
      array_kFieldTrialConfig_platforms_163,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_58,
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
      "DohProviderQuad9Secure",
};
const Study::Platform array_kFieldTrialConfig_platforms_162[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_162[] = {
    {
      "Enabled_20260203",
      array_kFieldTrialConfig_platforms_162,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
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
      "UseDnsHttpsSvcb",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_57[] = {
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
const Study::Platform array_kFieldTrialConfig_platforms_161[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_161[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_161,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_57,
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
      "DiskCacheBackendExperiment",
      "HttpCacheInitializeDiskCacheBackendEarly",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_56[] = {
      {
        "DiskCacheBackendResetCacheOnGroupChange",
        "true",
      },
      {
        "backend",
        "sql",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_160[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_160[] = {
    {
      "Sql",
      array_kFieldTrialConfig_platforms_160,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_56,
      array_kFieldTrialConfig_enable_features_152,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_151[] = {
      "DiscountDialogAutoPopupBehaviorSetting",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_55[] = {
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
const Study::Platform array_kFieldTrialConfig_platforms_159[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_159[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_159,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_55,
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
      "DisallowLegacyPrefMacFallback",
};
const Study::Platform array_kFieldTrialConfig_platforms_158[] = {
      Study::PLATFORM_WINDOWS,
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
const char* const array_kFieldTrialConfig_disable_features_10[] = {
      "PersistBrokenAlternativeServices",
};
const Study::Platform array_kFieldTrialConfig_platforms_157[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_157[] = {
    {
      "Disabled",
      array_kFieldTrialConfig_platforms_157,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      {},
      array_kFieldTrialConfig_disable_features_10,
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_149[] = {
      "GlicActorUiMagicCursor",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_54[] = {
      {
        "magic-cursor-max-duration-ms",
        "1",
      },
      {
        "magic-cursor-min-duration-ms",
        "1",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_156[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_156[] = {
    {
      "Disabled",
      array_kFieldTrialConfig_platforms_156,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_54,
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
      "DisableDragDropForUnneededWidgets",
};
const Study::Platform array_kFieldTrialConfig_platforms_155[] = {
      Study::PLATFORM_WINDOWS,
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
      "DisableComposeboxWarmupRequests",
};
const Study::Platform array_kFieldTrialConfig_platforms_154[] = {
      Study::PLATFORM_WINDOWS,
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
      "DirectLaunchManager",
};
const Study::Platform array_kFieldTrialConfig_platforms_153[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_153[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_153,
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
      "Dictation",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_53[] = {
      {
        "auto_session_end_delay",
        "300ms",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_152[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_152[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_152,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_53,
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
      "DeviceSignalsBackfillDisclaimer",
};
const Study::Platform array_kFieldTrialConfig_platforms_151[] = {
      Study::PLATFORM_WINDOWS,
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
      "DeviceBoundSessionsRetryTransientRefreshErrors",
};
const Study::Platform array_kFieldTrialConfig_platforms_150[] = {
      Study::PLATFORM_WINDOWS,
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
      "DeviceBoundSessionsDsePrewarmer",
      "DeviceBoundSessionsForRestrictedSites",
      "EnableOAuthMultiloginStandardCookiesBinding",
};
const Study::Platform array_kFieldTrialConfig_platforms_149[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_149[] = {
    {
      "EnabledWithPrewarmer",
      array_kFieldTrialConfig_platforms_149,
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
      "DevToolsConsoleInsightsTeasers",
};
const Study::Platform array_kFieldTrialConfig_platforms_148[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_148[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_148,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
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
      "DevToolsAiV2Architecture",
};
const Study::Platform array_kFieldTrialConfig_platforms_147[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_147[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_147,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_140,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_139[] = {
      "WebUIOmniboxAskGAboutThisPage",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_52[] = {
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
const Study::Platform array_kFieldTrialConfig_platforms_146[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_146[] = {
    {
      "CobrowseAndLensEntrypoint",
      array_kFieldTrialConfig_platforms_146,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_52,
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
      "EnableCrossDevicePrefTracker",
      "MobilePromoOnDesktopWithReminderWave1",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_51[] = {
      {
        "mobile_promo_on_desktop_notification",
        "true",
      },
      {
        "mobile_promo_on_desktop_promo_type",
        "1,4,5",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_145[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_145[] = {
    {
      "Reminder_All",
      array_kFieldTrialConfig_platforms_145,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_51,
      array_kFieldTrialConfig_enable_features_138,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_disable_features_9[] = {
      "WebAppsEnableMLModelForPromotion",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_50[] = {
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
const Study::Platform array_kFieldTrialConfig_platforms_144[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_144[] = {
    {
      "Disabled",
      array_kFieldTrialConfig_platforms_144,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_50,
      {},
      array_kFieldTrialConfig_disable_features_9,
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_137[] = {
      "StarterPackExpansion",
};
const Study::Platform array_kFieldTrialConfig_platforms_143[] = {
      Study::PLATFORM_WINDOWS,
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
      "OmniboxCalcProvider",
};
const Study::Platform array_kFieldTrialConfig_platforms_142[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_142[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_142,
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
const char* const array_kFieldTrialConfig_enable_features_135[] = {
      "NtpMostRelevantTabResumptionModule",
      "SegmentationPlatformURLVisitResumptionRanker",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_49[] = {
      {
        "use_random_score",
        "true",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_141[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_141[] = {
    {
      "TabResumption_Random",
      array_kFieldTrialConfig_platforms_141,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_49,
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
      "NtpOneGoogleBarAsyncBarParts",
};
const Study::Platform array_kFieldTrialConfig_platforms_140[] = {
      Study::PLATFORM_WINDOWS,
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
const char* const array_kFieldTrialConfig_disable_features_8[] = {
      "kNtpTabGroupsModule",
      "kNtpTabGroupsModuleZeroState",
};
const Study::Platform array_kFieldTrialConfig_platforms_139[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_139[] = {
    {
      "Control_20251027",
      array_kFieldTrialConfig_platforms_139,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      {},
      array_kFieldTrialConfig_disable_features_8,
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_133[] = {
      "NtpDriveModuleLink",
};
const Study::Platform array_kFieldTrialConfig_platforms_138[] = {
      Study::PLATFORM_WINDOWS,
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
      "DeliveryOptimizationDownloader",
};
const Study::Platform array_kFieldTrialConfig_platforms_137[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_137[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_137,
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
      "DelegatedCompositing",
};
const Study::Platform array_kFieldTrialConfig_platforms_136[] = {
      Study::PLATFORM_WINDOWS,
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
      "AdditionalDelayMainJob",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_48[] = {
      {
        "AdditionalDelay",
        "50ms",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_135[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_135[] = {
    {
      "EnabledWith50ms",
      array_kFieldTrialConfig_platforms_135,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_48,
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
      "DeferredDownloadHistoryLoading",
};
const Study::Platform array_kFieldTrialConfig_platforms_134[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_134[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_134,
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
      "DefaultBrowserSetterSelection",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_47[] = {
      {
        "setter_option",
        "shell_integration",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_133[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_133[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_133,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_47,
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
      "DefaultBrowserChangedOsNotification",
      "DefaultBrowserFramework",
      "DefaultBrowserPromptSurfaces",
      "PerformDefaultBrowserCheckValidations",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_46[] = {
      {
        "prompt_surface",
        "modal_dialog_with_settings_illustration",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_132[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_132[] = {
    {
      "ModalDialog",
      array_kFieldTrialConfig_platforms_132,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_46,
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
      "DecodeScriptsInBlink",
};
const Study::Platform array_kFieldTrialConfig_platforms_131[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_131[] = {
    {
      "Enabled_20260714",
      array_kFieldTrialConfig_platforms_131,
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
      "D3D11VideoDecoderUseSharedHandle",
};
const Study::Platform array_kFieldTrialConfig_platforms_130[] = {
      Study::PLATFORM_WINDOWS,
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
      "CustomizeChromeJourney",
      "HappinessTrackingSurveysForCustomizeChromeJourney",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_45[] = {
      {
        "en_site_id",
        "nJLJ12m7C0ugnJ3q1cK0VCq4ZXpB",
      },
      {
        "probability",
        "1.0",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_129[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_129[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_129,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_45,
      array_kFieldTrialConfig_enable_features_124,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_123[] = {
      "CriticalActionHistory",
};
const Study::Platform array_kFieldTrialConfig_platforms_128[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_128[] = {
    {
      "Enabled_20261009",
      array_kFieldTrialConfig_platforms_128,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_123,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_122[] = {
      "CreateNetworkContextNonBlocking",
};
const Study::Platform array_kFieldTrialConfig_platforms_127[] = {
      Study::PLATFORM_WINDOWS,
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
      "CookieMonsterPerKeyDelete",
};
const Study::Platform array_kFieldTrialConfig_platforms_126[] = {
      Study::PLATFORM_WINDOWS,
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
      "ApiContextualTasksPrivate",
      "ContextualTasksPrivateApiNoAnimation",
};
const Study::Platform array_kFieldTrialConfig_platforms_125[] = {
      Study::PLATFORM_WINDOWS,
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
      array_kFieldTrialConfig_enable_features_120,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_disable_features_7[] = {
      "ContextualTasksHideMenuOnAiPage",
      "EphemeralPinningVisibleWhenPermanentlyPinned",
};
const char* const array_kFieldTrialConfig_enable_features_119[] = {
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
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_44[] = {
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
const Study::Platform array_kFieldTrialConfig_platforms_124[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_124[] = {
    {
      "ColorfulSuperG_20261029",
      array_kFieldTrialConfig_platforms_124,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_44,
      array_kFieldTrialConfig_enable_features_119,
      array_kFieldTrialConfig_disable_features_7,
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_118[] = {
      "ContextualTasksUploadChunking",
};
const Study::Platform array_kFieldTrialConfig_platforms_123[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_123[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_123,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
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
      "ContextualTasks",
};
const Study::Platform array_kFieldTrialConfig_platforms_122[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_122[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_122,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
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
      "ContextualTasksCookiePrefetch",
};
const Study::Platform array_kFieldTrialConfig_platforms_121[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_121[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_121,
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
const char* const array_kFieldTrialConfig_enable_features_115[] = {
      "ContextualTasksBackButtonExpandsSidePanel",
};
const Study::Platform array_kFieldTrialConfig_platforms_120[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_120[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_120,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
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
      "ContextualCueingV2",
      "ContextualCueingV2AllowOverridingUcbScoring",
      "ContextualCueingV2MultiSource",
      "GlicContextualCueV2ActiveUserBackoff",
      "GlicContextualCueingV2AutoSubmit",
      "IndigoContextualCueingV2",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_43[] = {
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
const Study::Platform array_kFieldTrialConfig_platforms_119[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_119[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_119,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_43,
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
      "ContextManagementInComposebox",
      "ContextManagementInOmnibox",
      "ContextualTasksContext",
      "ContextualTasksContextLogging",
      "ContextualTasksContextMqlsLogging",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_42[] = {
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
const Study::Platform array_kFieldTrialConfig_platforms_118[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_118[] = {
    {
      "Enabled_SingleTab_STSMultiTurn_Prestable_M157",
      array_kFieldTrialConfig_platforms_118,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_42,
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
      "AutoTodos",
      "ContextHub",
};
const Study::Platform array_kFieldTrialConfig_platforms_117[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_117[] = {
    {
      "ContextHubFeaturesEnabled",
      array_kFieldTrialConfig_platforms_117,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_112,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_disable_features_6[] = {
      "CompressionDictionaryTransportRequireKnownRootCert",
};
const Study::Platform array_kFieldTrialConfig_platforms_116[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_116[] = {
    {
      "Disable",
      array_kFieldTrialConfig_platforms_116,
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
const char* const array_kFieldTrialConfig_disable_features_5[] = {
      "AutocompleteDictionaryPreload",
      "PreloadedDictionaryConditionalUse",
};
const Study::Platform array_kFieldTrialConfig_platforms_115[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_115[] = {
    {
      "EnabledPreloadConditionalUse",
      array_kFieldTrialConfig_platforms_115,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      {},
      array_kFieldTrialConfig_disable_features_5,
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_111[] = {
      "CompositedAnimationsForceMainFrames",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_41[] = {
      {
        "anchor-transform",
        "true",
      },
      {
        "intersection-observer",
        "true",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_114[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_114[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_114,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_41,
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
      "LensSendUrlsInComposeboxes",
};
const Study::Platform array_kFieldTrialConfig_platforms_113[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_113[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_113,
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
      "ComposeboxDriveContextMenuOption",
      "ComposeboxDriveContextMenuOptionDisclaimer",
      "ComposeboxDriveContextMenuOptionSigninPromo",
};
const Study::Platform array_kFieldTrialConfig_platforms_112[] = {
      Study::PLATFORM_WINDOWS,
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
      "ComposeProactiveNudge",
      "EnableComposeNudgeAtCursor",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_40[] = {
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
const Study::Platform array_kFieldTrialConfig_platforms_111[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_111[] = {
    {
      "Enabled_CursorNudgeModel",
      array_kFieldTrialConfig_platforms_111,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_40,
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
      "ModelQualityLogging",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_39[] = {
      {
        "model_execution_feature_compose",
        "true",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_110[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_110[] = {
    {
      "ComposeLoggingEnabled_Dogfood",
      array_kFieldTrialConfig_platforms_110,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_39,
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
      "ComponentsBase32InRust",
};
const Study::Platform array_kFieldTrialConfig_platforms_109[] = {
      Study::PLATFORM_WINDOWS,
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
      "ProductSpecificationsMqlsLogging",
};
const Study::Platform array_kFieldTrialConfig_platforms_108[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_108[] = {
    {
      "Enabled_Dogfood",
      array_kFieldTrialConfig_platforms_108,
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
      "EnableCollectAccessibilityHeuristicInCanvasUkm",
};
const Study::Platform array_kFieldTrialConfig_platforms_107[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_107[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_107,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
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
      "ClientSideDetectionTrickToBill",
};
const Study::Platform array_kFieldTrialConfig_platforms_106[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_106[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_106,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
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
      "ClientSideDetectionServerModelForScamDetectionDesktop",
};
const Study::Platform array_kFieldTrialConfig_platforms_105[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_105[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_105,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
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
      "ClientSideDetectionScamDetectionRequestWithUrl",
};
const Study::Platform array_kFieldTrialConfig_platforms_104[] = {
      Study::PLATFORM_WINDOWS,
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
      "ClientSideDetectionRetryLimit",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_38[] = {
      {
        "RetryTimeMax",
        "15",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_103[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_103[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_103,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_38,
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
      "ClientSideDetectionImageEmbeddingMatch",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_37[] = {
      {
        "CsdImageEmbeddingMatchWithIntelligentScan",
        "true",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_102[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_102[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_102,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_37,
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
      "ClientSideDetectionCreditCardForm",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_36[] = {
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
const Study::Platform array_kFieldTrialConfig_platforms_101[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_101[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_101,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_36,
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
      "ClientSideDetectionBypassTiers",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_35[] = {
      {
        "ClientSideDetectionBypassTiersList",
        "",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_100[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_100[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_100,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_35,
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
      "ClearGrShaderDiskCacheOnInvalidPrefix",
};
const Study::Platform array_kFieldTrialConfig_platforms_99[] = {
      Study::PLATFORM_WINDOWS,
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
      "ClearBrowsingHistoryJourney",
      "HappinessTrackingSurveysForClearBrowsingHistory",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_34[] = {
      {
        "en_site_id",
        "R8iDTcjjT0ugnJ3q1cK0TiRRjjy4",
      },
      {
        "probability",
        "1.0",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_98[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_98[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_98,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_34,
      array_kFieldTrialConfig_enable_features_95,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_94[] = {
      "LensOverlayUpdatedClientContext",
};
const Study::Platform array_kFieldTrialConfig_platforms_97[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_97[] = {
    {
      "Enabled_20250826",
      array_kFieldTrialConfig_platforms_97,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_94,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_93[] = {
      "LensOverlayTextSelectionContextMenuEntrypoint",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_33[] = {
      {
        "contextualize",
        "true",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_96[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_96[] = {
    {
      "Enabled_Contextualized",
      array_kFieldTrialConfig_platforms_96,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_33,
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
      "LensOverlaySurvey",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_32[] = {
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
const Study::Platform array_kFieldTrialConfig_platforms_95[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_95[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_95,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_32,
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
      "LensOverlaySidePanelOpenInNewTab",
};
const Study::Platform array_kFieldTrialConfig_platforms_94[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_94[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_94,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
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
      "LensAimSuggestionsGradientBackground",
};
const char* const array_kFieldTrialConfig_enable_features_90[] = {
      "LensAimSuggestions",
      "LensOverlaySuggestionsMigration",
      "LensSearchReinvocationAffordance",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_31[] = {
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
const Study::Platform array_kFieldTrialConfig_platforms_93[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_93[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_93,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_31,
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
      "LensOverlayNonBlockingPrivacyNoticeForImageSearch",
};
const Study::Platform array_kFieldTrialConfig_platforms_92[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_92[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_92,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
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
      "LensOverlayEduActionChip",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_30[] = {
      {
        "disabled-by-glic",
        "true",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_91[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_91[] = {
    {
      "TestConfig",
      array_kFieldTrialConfig_platforms_91,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_30,
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
      "ChromeWideEchoCancellation",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_29[] = {
      {
        "processing_fifo_size",
        "110",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_90[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_90[] = {
    {
      "Enabled_20220412",
      array_kFieldTrialConfig_platforms_90,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_29,
      array_kFieldTrialConfig_enable_features_87,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_disable_features_3[] = {
      "NtpWallpaperSearchButtonAnimation",
};
const char* const array_kFieldTrialConfig_enable_features_86[] = {
      "CustomizeChromeWallpaperSearchButton",
      "NtpWallpaperSearchButton",
      "NtpWallpaperSearchButtonHideCondition",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_28[] = {
      {
        "NtpWallpaperSearchButtonHideConditionParam",
        "1",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_89[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_89[] = {
    {
      "DefaultOnLaunched",
      array_kFieldTrialConfig_platforms_89,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_28,
      array_kFieldTrialConfig_enable_features_86,
      array_kFieldTrialConfig_disable_features_3,
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_85[] = {
      "EnableChromeRefreshTokenBindingUpgrade",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_27[] = {
      {
        "upgrade-type",
        "live-launch",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_88[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_88[] = {
    {
      "EnabledLiveLaunch",
      array_kFieldTrialConfig_platforms_88,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_27,
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
      "ChildProcessSecurityPolicyRust",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_26[] = {
      {
        "policy",
        "rust-and-cpp",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_87[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_87[] = {
    {
      "Enabled_RustAndCpp",
      array_kFieldTrialConfig_platforms_87,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_26,
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
      "CentralizedInfoBarFramework",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_25[] = {
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
const Study::Platform array_kFieldTrialConfig_platforms_86[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_86[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_86,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_25,
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
      "CastStreamingMaxVideoBitrate",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_24[] = {
      {
        "max_bitrate_mbps",
        "10",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_85[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_85[] = {
    {
      "Max10Mbps",
      array_kFieldTrialConfig_platforms_85,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_24,
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
      "CastStreamingHardwareHevc",
};
const Study::Platform array_kFieldTrialConfig_platforms_84[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_84[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_84,
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
      "CastStreamingExponentialVideoBitrateAlgorithm",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_23[] = {
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
const Study::Platform array_kFieldTrialConfig_platforms_83[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_83[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_83,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_23,
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
      "CastMirroringNativeNV12",
};
const Study::Platform array_kFieldTrialConfig_platforms_82[] = {
      Study::PLATFORM_WINDOWS,
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
      "AccessibilityCanvas",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_22[] = {
      {
        "CanvasAccessibilityMode",
        "Basic",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_81[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_81[] = {
    {
      "Enabled_Basic",
      array_kFieldTrialConfig_platforms_81,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_22,
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
      "Canvas2dDeferredFlush",
};
const Study::Platform array_kFieldTrialConfig_platforms_80[] = {
      Study::PLATFORM_WINDOWS,
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
      "CacheGurlSchemeIsHttpOrHttpsResult",
};
const Study::Platform array_kFieldTrialConfig_platforms_79[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_79[] = {
    {
      "Enabled_20260629",
      array_kFieldTrialConfig_platforms_79,
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
      "CWSReviewPromptingNativeUI",
};
const Study::Platform array_kFieldTrialConfig_platforms_78[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_78[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_78,
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
      "BuildTFLiteModelExecutionTaskOnLoadingThread",
};
const Study::Platform array_kFieldTrialConfig_platforms_77[] = {
      Study::PLATFORM_WINDOWS,
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
      "BrowsingHistoryFilterByActor",
      "BrowsingHistoryFilterByDevice",
};
const Study::Platform array_kFieldTrialConfig_platforms_76[] = {
      Study::PLATFORM_WINDOWS,
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
      "BrowsingDataModelSharedWorkerKeyWithoutURL",
};
const Study::Platform array_kFieldTrialConfig_platforms_75[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_75[] = {
    {
      "Enabled_20261021",
      array_kFieldTrialConfig_platforms_75,
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
      "BrowserThreadPoolAdjustment",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_21[] = {
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
const Study::Platform array_kFieldTrialConfig_platforms_74[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_74[] = {
    {
      "thread_pool_default_20230920",
      array_kFieldTrialConfig_platforms_74,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_21,
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
      "ChromeDarkNeutrals26",
};
const Study::Platform array_kFieldTrialConfig_platforms_73[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_73[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_73,
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
      "BrowserSignalsReportingEnabled",
};
const Study::Platform array_kFieldTrialConfig_platforms_72[] = {
      Study::PLATFORM_WINDOWS,
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
      "BrowserInitiatedAutomaticPictureInPictureDryRun",
};
const Study::Platform array_kFieldTrialConfig_platforms_71[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_71[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_71,
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
      "BrowserInitiatedAutomaticPictureInPicture",
};
const Study::Platform array_kFieldTrialConfig_platforms_70[] = {
      Study::PLATFORM_WINDOWS,
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
      "BrowserDynamicCodeDisabled",
};
const Study::Platform array_kFieldTrialConfig_platforms_69[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_69[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_69,
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
      "InitialDelayForBrokenAlternativeService",
      "MaxDelayForBrokenAlternativeService",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_20[] = {
      {
        "InitialDelayForBrokenAlternativeServiceParam",
        "1s",
      },
      {
        "MaxDelayForBrokenAlternativeServiceParam",
        "5m",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_68[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_68[] = {
    {
      "Initial1s_Max5m_20260804",
      array_kFieldTrialConfig_platforms_68,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_20,
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
      "BlockfileCacheBackendDumpWithoutCrashing",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_19[] = {
      {
        "dump_without_crashing_frequency",
        "0.02",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_67[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_67[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_67,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_19,
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
      "BeforeFirstRunDesktopRefreshSurvey",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_18[] = {
      {
        "en_site_id",
        "XhHJ3uboj0ugnJ3q1cK0S6RQC7u7",
      },
      {
        "hats_histogram_name",
        "Feedback.HappinessTrackingSurvey.BeforeFirstRunDesktopRefreshSurvey",
      },
      {
        "probability",
        "1.0",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_66[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_66[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_66,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_18,
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
      "BeaconLeakageLogging",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_17[] = {
      {
        "category_param_name",
        "category",
      },
      {
        "category_prefix",
        "acrcp_v1_",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_65[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_65[] = {
    {
      "Enabled_v1",
      array_kFieldTrialConfig_platforms_65,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_17,
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
      "BatterySaverModeAlignWakeUps",
      "LowerHighResolutionTimerThreshold",
};
const Study::Platform array_kFieldTrialConfig_platforms_64[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_64[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_64,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
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
      "BackForwardCacheCCNSIgnoreUnchangedCookies",
};
const Study::Platform array_kFieldTrialConfig_platforms_63[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_63[] = {
    {
      "Enabled_20260401",
      array_kFieldTrialConfig_platforms_63,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
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
      "AvoidEntryCreationForNoStore",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_16[] = {
      {
        "AvoidEntryCreationForNoStoreCacheSize",
        "40000",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_62[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_62[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_62,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_16,
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
      "PasswordChangeWithPrivateInferenceLoginCheck",
};
const Study::Platform array_kFieldTrialConfig_platforms_61[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_61[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_61,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
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
const Study::Platform array_kFieldTrialConfig_platforms_60[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_60[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_60,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_15,
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
const Study::Platform array_kFieldTrialConfig_platforms_59[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_59[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_59,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_14,
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
const Study::Platform array_kFieldTrialConfig_platforms_58[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_58[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_58,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_13,
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
const Study::Platform array_kFieldTrialConfig_platforms_57[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_57[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_57,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_12,
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
const Study::Platform array_kFieldTrialConfig_platforms_56[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_56[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_56,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_11,
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
const Study::Platform array_kFieldTrialConfig_platforms_55[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_55[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_55,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_10,
      array_kFieldTrialConfig_enable_features_52,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_51[] = {
      "AutofillWipeInvalidNameStructure",
};
const Study::Platform array_kFieldTrialConfig_platforms_54[] = {
      Study::PLATFORM_WINDOWS,
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
      array_kFieldTrialConfig_enable_features_51,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_50[] = {
      "AutofillUpstreamEnforceStrikeDelay",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_9[] = {
      {
        "autofill_upstream_enforce_strike_delay_days",
        "1",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_53[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_53[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_53,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_9,
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
      "AutofillUpstream",
};
const Study::Platform array_kFieldTrialConfig_platforms_52[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_52[] = {
    {
      "Enabled_20220124",
      array_kFieldTrialConfig_platforms_52,
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
      "AutofillUKMExperimentalFields",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_8[] = {
      {
        "autofill_experimental_regex_bucket1",
        "test1",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_51[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_51[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_51,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_8,
      array_kFieldTrialConfig_enable_features_48,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_disable_features_2[] = {
      "AutofillAddressSurvey",
      "AutofillPasswordSurvey",
};
const char* const array_kFieldTrialConfig_enable_features_47[] = {
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
const Study::Platform array_kFieldTrialConfig_platforms_50[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_50[] = {
    {
      "Card_20230606",
      array_kFieldTrialConfig_platforms_50,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_7,
      array_kFieldTrialConfig_enable_features_47,
      array_kFieldTrialConfig_disable_features_2,
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_46[] = {
      "AutofillSupportStandaloneZipCodeGlobally",
};
const Study::Platform array_kFieldTrialConfig_platforms_49[] = {
      Study::PLATFORM_WINDOWS,
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
      "AutofillDisallowMoreHyphenLikeLabels",
      "AutofillSupportSplitZipCode",
};
const Study::Platform array_kFieldTrialConfig_platforms_48[] = {
      Study::PLATFORM_WINDOWS,
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
      "AutofillRequireFocusInFrameForSuggestions",
};
const Study::Platform array_kFieldTrialConfig_platforms_47[] = {
      Study::PLATFORM_WINDOWS,
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
      "AutofillPopupDontAcceptNonVisibleEnoughSuggestion",
};
const Study::Platform array_kFieldTrialConfig_platforms_46[] = {
      Study::PLATFORM_WINDOWS,
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
      "AutofillOptimizeIsNormalizedNameVariantOf",
};
const Study::Platform array_kFieldTrialConfig_platforms_45[] = {
      Study::PLATFORM_WINDOWS,
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
      "AutofillOnlyConsiderSingleFieldFormsAsSearchForms",
};
const Study::Platform array_kFieldTrialConfig_platforms_44[] = {
      Study::PLATFORM_WINDOWS,
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
      "AutofillNewSuggestionGeneration",
};
const Study::Platform array_kFieldTrialConfig_platforms_43[] = {
      Study::PLATFORM_WINDOWS,
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
      "AutofillMoveSmallFormLogicToClient",
};
const Study::Platform array_kFieldTrialConfig_platforms_42[] = {
      Study::PLATFORM_WINDOWS,
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
      "AutofillMergeAddressAndAutocompleteEmailSuggestions",
};
const Study::Platform array_kFieldTrialConfig_platforms_41[] = {
      Study::PLATFORM_WINDOWS,
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
      "AutofillLabelSensitiveAutocomplete",
};
const Study::Platform array_kFieldTrialConfig_platforms_40[] = {
      Study::PLATFORM_WINDOWS,
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
      "AutofillKeydownEditableElement",
};
const Study::Platform array_kFieldTrialConfig_platforms_39[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_39[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_39,
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
      "AutofillIntroduceGlobalEmptyValueRewriterRules",
};
const Study::Platform array_kFieldTrialConfig_platforms_38[] = {
      Study::PLATFORM_WINDOWS,
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
      "AutofillImproveClassificationForTwoWordLastNames",
};
const Study::Platform array_kFieldTrialConfig_platforms_37[] = {
      Study::PLATFORM_WINDOWS,
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
      "AutofillIgnoreLayoutInducedScrollEvents",
};
const Study::Platform array_kFieldTrialConfig_platforms_36[] = {
      Study::PLATFORM_WINDOWS,
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
      "AutofillHideSuggestionsOnFocusChange",
};
const Study::Platform array_kFieldTrialConfig_platforms_35[] = {
      Study::PLATFORM_WINDOWS,
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
      "AutofillGmailOtpPreLaunchMetrics",
      "PasswordFormClientsideClassifier",
};
const Study::Platform array_kFieldTrialConfig_platforms_34[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_34[] = {
    {
      "EnabledWithFieldDetection",
      array_kFieldTrialConfig_platforms_34,
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
      "AutofillFixIframeOwnership",
};
const Study::Platform array_kFieldTrialConfig_platforms_33[] = {
      Study::PLATFORM_WINDOWS,
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
      "AutofillEnableWalletReminderNotice",
};
const Study::Platform array_kFieldTrialConfig_platforms_32[] = {
      Study::PLATFORM_WINDOWS,
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
      "AutofillEnableWalletBrandingV2",
};
const Study::Platform array_kFieldTrialConfig_platforms_31[] = {
      Study::PLATFORM_WINDOWS,
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
      "AutofillEnableTravelCategoryAndMerchantBenefitsFromCurinos",
};
const Study::Platform array_kFieldTrialConfig_platforms_30[] = {
      Study::PLATFORM_WINDOWS,
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
      "AutofillEnableOmniboxAutofill",
};
const Study::Platform array_kFieldTrialConfig_platforms_29[] = {
      Study::PLATFORM_WINDOWS,
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
      "AutofillEnableExpandIbanRegexPattern",
};
const Study::Platform array_kFieldTrialConfig_platforms_28[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_28[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_28,
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
      "AutofillDisallowCountryCodeFilling",
};
const Study::Platform array_kFieldTrialConfig_platforms_27[] = {
      Study::PLATFORM_WINDOWS,
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
      "AutofillDelayApcForPredictions",
};
const Study::Platform array_kFieldTrialConfig_platforms_26[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_26[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_26,
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
      "AutofillComplementCountryUsingPhoneNumber",
};
const Study::Platform array_kFieldTrialConfig_platforms_25[] = {
      Study::PLATFORM_WINDOWS,
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
      "AutofillBetterLocalHeuristicPlaceholderSupport",
};
const Study::Platform array_kFieldTrialConfig_platforms_24[] = {
      Study::PLATFORM_WINDOWS,
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
      "AutofillAiWalletServerProvidedDeepLink",
};
const Study::Platform array_kFieldTrialConfig_platforms_23[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_23[] = {
    {
      "Enabled_20261007",
      array_kFieldTrialConfig_platforms_23,
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
      "AutofillAiNewUpdatePrompt",
      "AutofillAiWalletPrivatePasses",
      "AutofillAiWalletPrivatePassesDeepLink",
      "SuggestionManageButtonSplitForEnhancedAutofill",
      "WalletApiPrivatePassesEnabled",
};
const Study::Platform array_kFieldTrialConfig_platforms_22[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_22[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_22,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
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
      "AutofillAiWalletPassBranding2026",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_6[] = {
      {
        "string_variant",
        "0",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_21[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_21[] = {
    {
      "Enabled_GoogleWallet",
      array_kFieldTrialConfig_platforms_21,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_6,
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
      "AutofillAiUsePrivateAi",
};
const Study::Platform array_kFieldTrialConfig_platforms_20[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_20[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_20,
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
const char* const array_kFieldTrialConfig_enable_features_16[] = {
      "AutofillAiWalletShopping",
      "AutofillEnableAutofillSettingsEnterprisePolicy",
};
const Study::Platform array_kFieldTrialConfig_platforms_19[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_19[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_19,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
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
const Study::Platform array_kFieldTrialConfig_platforms_18[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_18[] = {
    {
      "Enabled_20231201",
      array_kFieldTrialConfig_platforms_18,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_5,
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
const Study::Platform array_kFieldTrialConfig_platforms_17[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_17[] = {
    {
      "VideoConferencing_AllowedOnce",
      array_kFieldTrialConfig_platforms_17,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_4,
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
      "AutoPictureInPictureOnWindowOccluded",
};
const Study::Platform array_kFieldTrialConfig_platforms_16[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_16[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_16,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_13,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_disable_features_1[] = {
      "ConversionMeasurement",
};
const Study::Platform array_kFieldTrialConfig_platforms_15[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_15[] = {
    {
      "Disabled",
      array_kFieldTrialConfig_platforms_15,
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
const char* const array_kFieldTrialConfig_enable_features_12[] = {
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
const Study::Platform array_kFieldTrialConfig_platforms_14[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_14[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_14,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_3,
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
      "AsyncThreadPoolInit",
};
const Study::Platform array_kFieldTrialConfig_platforms_13[] = {
      Study::PLATFORM_WINDOWS,
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
      "AsyncDnsQuicJob",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_2[] = {
      {
        "AsyncDnsQuicJobFastFail",
        "true",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_12[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_12[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_12,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_2,
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
      "AsyncBeforeUnload",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_1[] = {
      {
        "AsyncBeforeUnloadTimeout",
        "500ms",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_11[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_11[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_11,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_1,
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
      "AppMenuGlowUp",
};
const Study::Platform array_kFieldTrialConfig_platforms_10[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_10[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_10,
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
      "ApiGlicAccessFromPromotionPage",
};
const Study::Platform array_kFieldTrialConfig_platforms_9[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_9[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_9,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_7,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_6[] = {
      "AntivirusTelemetryForDownloads",
};
const Study::Platform array_kFieldTrialConfig_platforms_8[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_8[] = {
    {
      "Enabled_20260826",
      array_kFieldTrialConfig_platforms_8,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
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
const Study::Platform array_kFieldTrialConfig_platforms_7[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_7[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_7,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_0,
      array_kFieldTrialConfig_enable_features_5,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_disable_features_0[] = {
      "AnnotatedPageContentNonSalientFiltering",
};
const Study::Platform array_kFieldTrialConfig_platforms_6[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_6[] = {
    {
      "Disabled",
      array_kFieldTrialConfig_platforms_6,
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
const char* const array_kFieldTrialConfig_disable_features[] = {
      "AnnotatedPageContentExtractionOnHideFix",
};
const Study::Platform array_kFieldTrialConfig_platforms_5[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_5[] = {
    {
      "Disabled",
      array_kFieldTrialConfig_platforms_5,
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
const char* const array_kFieldTrialConfig_enable_features_4[] = {
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
const Study::Platform array_kFieldTrialConfig_platforms_4[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_4[] = {
    {
      "Glic",
      array_kFieldTrialConfig_platforms_4,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params,
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
      "AlignPdfDefaultPrintSettingsWithHTML",
};
const Study::Platform array_kFieldTrialConfig_platforms_3[] = {
      Study::PLATFORM_WINDOWS,
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
      "Aim3pEntrypoint",
};
const Study::Platform array_kFieldTrialConfig_platforms_2[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_2[] = {
    {
      "enabled",
      array_kFieldTrialConfig_platforms_2,
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
      "EnableAiSubscriptionAvatarRing",
};
const Study::Platform array_kFieldTrialConfig_platforms_1[] = {
      Study::PLATFORM_WINDOWS,
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
      "AXTreeFixing",
};
const Study::Platform array_kFieldTrialConfig_platforms_0[] = {
      Study::PLATFORM_WINDOWS,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_0[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_0,
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
const char* const array_kFieldTrialConfig_enable_features[] = {
      "AXRandomizedStressTests",
};
const Study::Platform array_kFieldTrialConfig_platforms[] = {
      Study::PLATFORM_WINDOWS,
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
    "AXRandomizedStressTests",
    array_kFieldTrialConfig_experiments,
  },
  {
    "AXTreeFixing",
    array_kFieldTrialConfig_experiments_0,
  },
  {
    "AiSubscriptionAvatarRingDesktop",
    array_kFieldTrialConfig_experiments_1,
  },
  {
    "Aim3pEntrypoint",
    array_kFieldTrialConfig_experiments_2,
  },
  {
    "AlignPdfDefaultPrintSettingsWithHTML",
    array_kFieldTrialConfig_experiments_3,
  },
  {
    "AnnotatedPageContentExtraction",
    array_kFieldTrialConfig_experiments_4,
  },
  {
    "AnnotatedPageContentExtractionOnHideFix",
    array_kFieldTrialConfig_experiments_5,
  },
  {
    "AnnotatedPageContentNonSalientFilteringHoldback",
    array_kFieldTrialConfig_experiments_6,
  },
  {
    "AnnotatedPageContentPDFTextExtraction",
    array_kFieldTrialConfig_experiments_7,
  },
  {
    "AntivirusTelemetryForDownloads",
    array_kFieldTrialConfig_experiments_8,
  },
  {
    "ApiGlicAccessFromPromotionPage",
    array_kFieldTrialConfig_experiments_9,
  },
  {
    "AppMenuGlowUp",
    array_kFieldTrialConfig_experiments_10,
  },
  {
    "AsyncBeforeUnload",
    array_kFieldTrialConfig_experiments_11,
  },
  {
    "AsyncDnsQuicJob",
    array_kFieldTrialConfig_experiments_12,
  },
  {
    "AsyncThreadPoolInit",
    array_kFieldTrialConfig_experiments_13,
  },
  {
    "AtMemoryDogfood",
    array_kFieldTrialConfig_experiments_14,
  },
  {
    "AttributionReportingDeprecation",
    array_kFieldTrialConfig_experiments_15,
  },
  {
    "AutoPictureInPictureOnWindowOccluded",
    array_kFieldTrialConfig_experiments_16,
  },
  {
    "AutoPictureInPictureSurveys_VideoConferencing",
    array_kFieldTrialConfig_experiments_17,
  },
  {
    "AutoSpeculationRules",
    array_kFieldTrialConfig_experiments_18,
  },
  {
    "AutofillAiM5",
    array_kFieldTrialConfig_experiments_19,
  },
  {
    "AutofillAiUsePrivateAi",
    array_kFieldTrialConfig_experiments_20,
  },
  {
    "AutofillAiWalletPassBranding2026",
    array_kFieldTrialConfig_experiments_21,
  },
  {
    "AutofillAiWalletPrivatePasses",
    array_kFieldTrialConfig_experiments_22,
  },
  {
    "AutofillAiWalletServerProvidedDeepLink",
    array_kFieldTrialConfig_experiments_23,
  },
  {
    "AutofillBetterLocalHeuristicPlaceholderSupport",
    array_kFieldTrialConfig_experiments_24,
  },
  {
    "AutofillComplementCountryUsingPhoneNumber",
    array_kFieldTrialConfig_experiments_25,
  },
  {
    "AutofillDelayApcForPredictions",
    array_kFieldTrialConfig_experiments_26,
  },
  {
    "AutofillDisallowCountryCodeFilling",
    array_kFieldTrialConfig_experiments_27,
  },
  {
    "AutofillEnableExpandIbanRegexPattern",
    array_kFieldTrialConfig_experiments_28,
  },
  {
    "AutofillEnableOmniboxAutofill",
    array_kFieldTrialConfig_experiments_29,
  },
  {
    "AutofillEnableTravelCategoryAndMerchantBenefitsFromCurinos",
    array_kFieldTrialConfig_experiments_30,
  },
  {
    "AutofillEnableWalletBrandingV2",
    array_kFieldTrialConfig_experiments_31,
  },
  {
    "AutofillEnableWalletReminderNotice",
    array_kFieldTrialConfig_experiments_32,
  },
  {
    "AutofillFixIframeOwnership",
    array_kFieldTrialConfig_experiments_33,
  },
  {
    "AutofillGmailOtpPreLaunchMetrics",
    array_kFieldTrialConfig_experiments_34,
  },
  {
    "AutofillHideSuggestionsOnFocusChange",
    array_kFieldTrialConfig_experiments_35,
  },
  {
    "AutofillIgnoreLayoutInducedScrollEvents",
    array_kFieldTrialConfig_experiments_36,
  },
  {
    "AutofillImproveClassificationForTwoWordLastNames",
    array_kFieldTrialConfig_experiments_37,
  },
  {
    "AutofillIntroduceGlobalEmptyValueRewriterRules",
    array_kFieldTrialConfig_experiments_38,
  },
  {
    "AutofillKeydownEditableElement",
    array_kFieldTrialConfig_experiments_39,
  },
  {
    "AutofillLabelSensitiveAutocomplete",
    array_kFieldTrialConfig_experiments_40,
  },
  {
    "AutofillMergeAddressAndAutocompleteEmailSuggestions",
    array_kFieldTrialConfig_experiments_41,
  },
  {
    "AutofillMoveSmallFormLogicToClient",
    array_kFieldTrialConfig_experiments_42,
  },
  {
    "AutofillNewSuggestionGeneration",
    array_kFieldTrialConfig_experiments_43,
  },
  {
    "AutofillOnlyConsiderSingleFieldFormsAsSearchForms",
    array_kFieldTrialConfig_experiments_44,
  },
  {
    "AutofillOptimizeIsNormalizedNameVariantOf",
    array_kFieldTrialConfig_experiments_45,
  },
  {
    "AutofillPopupDontAcceptNonVisibleEnoughSuggestion",
    array_kFieldTrialConfig_experiments_46,
  },
  {
    "AutofillRequireFocusInFrameForSuggestions",
    array_kFieldTrialConfig_experiments_47,
  },
  {
    "AutofillSupportSplitZipCode",
    array_kFieldTrialConfig_experiments_48,
  },
  {
    "AutofillSupportStandaloneZipCodeGlobally",
    array_kFieldTrialConfig_experiments_49,
  },
  {
    "AutofillSurveys",
    array_kFieldTrialConfig_experiments_50,
  },
  {
    "AutofillUKMExperimentalFields",
    array_kFieldTrialConfig_experiments_51,
  },
  {
    "AutofillUpstream",
    array_kFieldTrialConfig_experiments_52,
  },
  {
    "AutofillUpstreamEnforceStrikeDelay",
    array_kFieldTrialConfig_experiments_53,
  },
  {
    "AutofillWipeInvalidNameStructure",
    array_kFieldTrialConfig_experiments_54,
  },
  {
    "AutofillYourSavedInfoHatsSurveysContactInfo",
    array_kFieldTrialConfig_experiments_55,
  },
  {
    "AutofillYourSavedInfoHatsSurveysIdentityDocs",
    array_kFieldTrialConfig_experiments_56,
  },
  {
    "AutofillYourSavedInfoHatsSurveysPasswords",
    array_kFieldTrialConfig_experiments_57,
  },
  {
    "AutofillYourSavedInfoHatsSurveysPayments",
    array_kFieldTrialConfig_experiments_58,
  },
  {
    "AutofillYourSavedInfoHatsSurveysTravel",
    array_kFieldTrialConfig_experiments_59,
  },
  {
    "AutofillYourSavedInfoHatsSurveysYourSavedInfo",
    array_kFieldTrialConfig_experiments_60,
  },
  {
    "AutomatedPasswordChangeWithPrivateInferenceLoginCheck",
    array_kFieldTrialConfig_experiments_61,
  },
  {
    "AvoidEntryCreationForNoStore",
    array_kFieldTrialConfig_experiments_62,
  },
  {
    "BackForwardCacheCCNSIgnoreUnchangedCookies",
    array_kFieldTrialConfig_experiments_63,
  },
  {
    "BatterySaverModeAlignWakeUps",
    array_kFieldTrialConfig_experiments_64,
  },
  {
    "BeaconLeakageLogging",
    array_kFieldTrialConfig_experiments_65,
  },
  {
    "BeforeFirstRunDesktopRefreshSurvey",
    array_kFieldTrialConfig_experiments_66,
  },
  {
    "BlockfileCacheBackendDumpWithoutCrashing",
    array_kFieldTrialConfig_experiments_67,
  },
  {
    "BrokenAlternativeServiceDelays",
    array_kFieldTrialConfig_experiments_68,
  },
  {
    "BrowserDynamicCodeDisabled",
    array_kFieldTrialConfig_experiments_69,
  },
  {
    "BrowserInitiatedAutomaticPictureInPicture",
    array_kFieldTrialConfig_experiments_70,
  },
  {
    "BrowserInitiatedAutomaticPictureInPictureDryRun",
    array_kFieldTrialConfig_experiments_71,
  },
  {
    "BrowserSignalsReportingEnabled",
    array_kFieldTrialConfig_experiments_72,
  },
  {
    "BrowserStratus",
    array_kFieldTrialConfig_experiments_73,
  },
  {
    "BrowserThreadPoolAdjustmentForDesktop",
    array_kFieldTrialConfig_experiments_74,
  },
  {
    "BrowsingDataModelSharedWorkerKeyWithoutURL",
    array_kFieldTrialConfig_experiments_75,
  },
  {
    "BrowsingHistoryFilterDropdownPhase1Desktop",
    array_kFieldTrialConfig_experiments_76,
  },
  {
    "BuildTFLiteModelExecutionTaskOnLoadingThread",
    array_kFieldTrialConfig_experiments_77,
  },
  {
    "CWSReviewPromptingNativeUI",
    array_kFieldTrialConfig_experiments_78,
  },
  {
    "CacheGurlSchemeIsHttpOrHttpsResult",
    array_kFieldTrialConfig_experiments_79,
  },
  {
    "Canvas2dDeferredFlush",
    array_kFieldTrialConfig_experiments_80,
  },
  {
    "CanvasAccessibility",
    array_kFieldTrialConfig_experiments_81,
  },
  {
    "CastMirroringNativeNV12",
    array_kFieldTrialConfig_experiments_82,
  },
  {
    "CastStreamingExponentialVideoBitrateAlgorithm",
    array_kFieldTrialConfig_experiments_83,
  },
  {
    "CastStreamingHardwareHevc",
    array_kFieldTrialConfig_experiments_84,
  },
  {
    "CastStreamingMaxVideoBitrate",
    array_kFieldTrialConfig_experiments_85,
  },
  {
    "CentralizedInfoBarFramework",
    array_kFieldTrialConfig_experiments_86,
  },
  {
    "ChildProcessSecurityPolicyRust",
    array_kFieldTrialConfig_experiments_87,
  },
  {
    "ChromeRefreshTokenBindingUpgrade",
    array_kFieldTrialConfig_experiments_88,
  },
  {
    "ChromeWallpaperSearchLaunch",
    array_kFieldTrialConfig_experiments_89,
  },
  {
    "ChromeWideEchoCancellation",
    array_kFieldTrialConfig_experiments_90,
  },
  {
    "ChromnientEduActionChipV2",
    array_kFieldTrialConfig_experiments_91,
  },
  {
    "ChromnientNonBlockingPrivacyNoticeForImageSearch",
    array_kFieldTrialConfig_experiments_92,
  },
  {
    "ChromnientReinvocationAffordance",
    array_kFieldTrialConfig_experiments_93,
  },
  {
    "ChromnientSidePanelOpenInNewTab",
    array_kFieldTrialConfig_experiments_94,
  },
  {
    "ChromnientSurvey",
    array_kFieldTrialConfig_experiments_95,
  },
  {
    "ChromnientTextSelectionContextMenuEntrypoint",
    array_kFieldTrialConfig_experiments_96,
  },
  {
    "ChromnientUpdatedClientContext",
    array_kFieldTrialConfig_experiments_97,
  },
  {
    "ClearBrowsingHistoryJourney",
    array_kFieldTrialConfig_experiments_98,
  },
  {
    "ClearGrShaderDiskCacheOnInvalidPrefix",
    array_kFieldTrialConfig_experiments_99,
  },
  {
    "ClientSideDetectionBypassTiers",
    array_kFieldTrialConfig_experiments_100,
  },
  {
    "ClientSideDetectionCreditCardForm",
    array_kFieldTrialConfig_experiments_101,
  },
  {
    "ClientSideDetectionImageEmbeddingMatch",
    array_kFieldTrialConfig_experiments_102,
  },
  {
    "ClientSideDetectionRetryLimit",
    array_kFieldTrialConfig_experiments_103,
  },
  {
    "ClientSideDetectionScamDetectionRequestWithUrl",
    array_kFieldTrialConfig_experiments_104,
  },
  {
    "ClientSideDetectionServerModelForScamDetectionDesktop",
    array_kFieldTrialConfig_experiments_105,
  },
  {
    "ClientSideDetectionTrickToBill",
    array_kFieldTrialConfig_experiments_106,
  },
  {
    "CollectAccessibilityHeuristicInCanvasUkm",
    array_kFieldTrialConfig_experiments_107,
  },
  {
    "Compare",
    array_kFieldTrialConfig_experiments_108,
  },
  {
    "ComponentsBase32InRust",
    array_kFieldTrialConfig_experiments_109,
  },
  {
    "ComposeModelQualityLogging",
    array_kFieldTrialConfig_experiments_110,
  },
  {
    "ComposeProactiveNudgePosition",
    array_kFieldTrialConfig_experiments_111,
  },
  {
    "ComposeboxDriveContextMenuOptionSigninPromo",
    array_kFieldTrialConfig_experiments_112,
  },
  {
    "ComposeboxUrlInput",
    array_kFieldTrialConfig_experiments_113,
  },
  {
    "CompositedAnimationsForceMainFrames",
    array_kFieldTrialConfig_experiments_114,
  },
  {
    "CompressionDictionaryPreload",
    array_kFieldTrialConfig_experiments_115,
  },
  {
    "CompressionDictionaryTransportRequireKnownRootCert",
    array_kFieldTrialConfig_experiments_116,
  },
  {
    "ContextHubExplorations",
    array_kFieldTrialConfig_experiments_117,
  },
  {
    "ContextManagementAndSmartTabSharing",
    array_kFieldTrialConfig_experiments_118,
  },
  {
    "ContextualCueingV2",
    array_kFieldTrialConfig_experiments_119,
  },
  {
    "ContextualTasksBackButtonExpandsSidePanel",
    array_kFieldTrialConfig_experiments_120,
  },
  {
    "ContextualTasksCookiePrefetch",
    array_kFieldTrialConfig_experiments_121,
  },
  {
    "ContextualTasksDesktop",
    array_kFieldTrialConfig_experiments_122,
  },
  {
    "ContextualTasksUploadChunking",
    array_kFieldTrialConfig_experiments_123,
  },
  {
    "ContextualTasks_EphemeralPinning_Desktop",
    array_kFieldTrialConfig_experiments_124,
  },
  {
    "ContextualTasks_Srp2Aim",
    array_kFieldTrialConfig_experiments_125,
  },
  {
    "CookieMonsterPerKeyDelete",
    array_kFieldTrialConfig_experiments_126,
  },
  {
    "CreateNetworkContextNonBlocking",
    array_kFieldTrialConfig_experiments_127,
  },
  {
    "CriticalActionsHistory",
    array_kFieldTrialConfig_experiments_128,
  },
  {
    "CustomizeChromeJourney",
    array_kFieldTrialConfig_experiments_129,
  },
  {
    "D3D11VideoDecoderUseSharedHandle",
    array_kFieldTrialConfig_experiments_130,
  },
  {
    "DecodeScriptsInBlink",
    array_kFieldTrialConfig_experiments_131,
  },
  {
    "DefaultBrowserRound3Phase1",
    array_kFieldTrialConfig_experiments_132,
  },
  {
    "DefaultBrowserRound3Phase2_0",
    array_kFieldTrialConfig_experiments_133,
  },
  {
    "DeferredDownloadHistoryLoading",
    array_kFieldTrialConfig_experiments_134,
  },
  {
    "DelayMainJobStudyDesktop",
    array_kFieldTrialConfig_experiments_135,
  },
  {
    "DelegatedCompositingOnWindows",
    array_kFieldTrialConfig_experiments_136,
  },
  {
    "DeliveryOptimizationDownloader",
    array_kFieldTrialConfig_experiments_137,
  },
  {
    "DesktopNtpDriveModuleLink",
    array_kFieldTrialConfig_experiments_138,
  },
  {
    "DesktopNtpModulesTabGroups",
    array_kFieldTrialConfig_experiments_139,
  },
  {
    "DesktopNtpOneGoogleBarAsyncBarParts",
    array_kFieldTrialConfig_experiments_140,
  },
  {
    "DesktopNtpTabResumption",
    array_kFieldTrialConfig_experiments_141,
  },
  {
    "DesktopOmniboxCalculatorProvider",
    array_kFieldTrialConfig_experiments_142,
  },
  {
    "DesktopOmniboxStarterPackExpansion",
    array_kFieldTrialConfig_experiments_143,
  },
  {
    "DesktopPWAInstallPromotionML",
    array_kFieldTrialConfig_experiments_144,
  },
  {
    "DesktopToMobilePromos",
    array_kFieldTrialConfig_experiments_145,
  },
  {
    "DesktopWebUIOmniboxAskGAboutThisPage",
    array_kFieldTrialConfig_experiments_146,
  },
  {
    "DevToolsAiV2Architecture",
    array_kFieldTrialConfig_experiments_147,
  },
  {
    "DevToolsConsoleInsightsTeasers",
    array_kFieldTrialConfig_experiments_148,
  },
  {
    "DeviceBoundSessionsForGoogle",
    array_kFieldTrialConfig_experiments_149,
  },
  {
    "DeviceBoundSessionsRetryTransientRefreshErrors",
    array_kFieldTrialConfig_experiments_150,
  },
  {
    "DeviceSignalsBackfillDisclaimer",
    array_kFieldTrialConfig_experiments_151,
  },
  {
    "Dictation",
    array_kFieldTrialConfig_experiments_152,
  },
  {
    "DirectLaunchManager",
    array_kFieldTrialConfig_experiments_153,
  },
  {
    "DisableComposeboxWarmupRequests",
    array_kFieldTrialConfig_experiments_154,
  },
  {
    "DisableDragDropForUnneededWidgets",
    array_kFieldTrialConfig_experiments_155,
  },
  {
    "DisableGlicActorUiMagicCursorAnimation",
    array_kFieldTrialConfig_experiments_156,
  },
  {
    "DisablePersistBrokenAlternativeServices",
    array_kFieldTrialConfig_experiments_157,
  },
  {
    "DisallowLegacyPrefMacFallback",
    array_kFieldTrialConfig_experiments_158,
  },
  {
    "DiscountAutoPopup",
    array_kFieldTrialConfig_experiments_159,
  },
  {
    "DiskCacheBackendExperiment",
    array_kFieldTrialConfig_experiments_160,
  },
  {
    "DnsHttpsSvcbTimeout",
    array_kFieldTrialConfig_experiments_161,
  },
  {
    "DnsOverHttpsQuad9Secure",
    array_kFieldTrialConfig_experiments_162,
  },
  {
    "DomStorageSqliteNewDatabases",
    array_kFieldTrialConfig_experiments_163,
  },
  {
    "DsePreload2",
    array_kFieldTrialConfig_experiments_164,
  },
  {
    "DumpWithoutCrashingForMissingSecurityState",
    array_kFieldTrialConfig_experiments_165,
  },
  {
    "DynamicProfileCountryV2Desktop",
    array_kFieldTrialConfig_experiments_166,
  },
  {
    "EagerStorageAccessPermissionCheck",
    array_kFieldTrialConfig_experiments_167,
  },
  {
    "EagerlyResolveCoreDllsImports",
    array_kFieldTrialConfig_experiments_168,
  },
  {
    "EarlyCookieLoadOnPreconnect",
    array_kFieldTrialConfig_experiments_169,
  },
  {
    "EnableAccountPreviewDataFetchOptimizations",
    array_kFieldTrialConfig_experiments_170,
  },
  {
    "EnableAccountPreviewPreferredAccount",
    array_kFieldTrialConfig_experiments_171,
  },
  {
    "EnableAccountPreviewPreferredAccountFollowup",
    array_kFieldTrialConfig_experiments_172,
  },
  {
    "EnableBestEffortTaskInhibitingPolicy",
    array_kFieldTrialConfig_experiments_173,
  },
  {
    "EnableDiscountOnShoppyPagesDesktop",
    array_kFieldTrialConfig_experiments_174,
  },
  {
    "EnableDynamicRouteFetching",
    array_kFieldTrialConfig_experiments_175,
  },
  {
    "EnableGlicAiAvatarRingInFloatyDesktop",
    array_kFieldTrialConfig_experiments_176,
  },
  {
    "EnableHangWatcher",
    array_kFieldTrialConfig_experiments_177,
  },
  {
    "EnableHangWatcherOnGpuProcess",
    array_kFieldTrialConfig_experiments_178,
  },
  {
    "EnableNewUploadSizeLimit",
    array_kFieldTrialConfig_experiments_179,
  },
  {
    "EnableOnDeviceWebSpeechSmallExpertModel",
    array_kFieldTrialConfig_experiments_180,
  },
  {
    "EnablePDPMetricsUSDesktopIOS",
    array_kFieldTrialConfig_experiments_181,
  },
  {
    "EnableShouldShowPromotion",
    array_kFieldTrialConfig_experiments_182,
  },
  {
    "EnableWatermarkTimestampTimezone",
    array_kFieldTrialConfig_experiments_183,
  },
  {
    "EncryptBookmarks_Phase2",
    array_kFieldTrialConfig_experiments_184,
  },
  {
    "EncryptSessionStorage_Phase2",
    array_kFieldTrialConfig_experiments_185,
  },
  {
    "EnhancedFieldsForSecOps",
    array_kFieldTrialConfig_experiments_186,
  },
  {
    "EnterpriseDataProtectionForGlic",
    array_kFieldTrialConfig_experiments_187,
  },
  {
    "EventTimingIgnorePresentationTimeFromUnexpectedFrameSource",
    array_kFieldTrialConfig_experiments_188,
  },
  {
    "ExcludePipFromScreenCapture",
    array_kFieldTrialConfig_experiments_189,
  },
  {
    "ExtensionServiceWorkerVoter",
    array_kFieldTrialConfig_experiments_190,
  },
  {
    "ExtensionsApiRuntimeGetPlatformInfoNaClArch",
    array_kFieldTrialConfig_experiments_191,
  },
  {
    "ExtensionsPinnedByDefault",
    array_kFieldTrialConfig_experiments_192,
  },
  {
    "ExtensionsToolbarAndMenuRedesign",
    array_kFieldTrialConfig_experiments_193,
  },
  {
    "ExtensionsZeroStatePromo",
    array_kFieldTrialConfig_experiments_194,
  },
  {
    "ExternalBeginFrameSourceWinUsesRunOrPostTask",
    array_kFieldTrialConfig_experiments_195,
  },
  {
    "ExtremeLightweightUAFDetector",
    array_kFieldTrialConfig_experiments_196,
  },
  {
    "FedCmIntrusion",
    array_kFieldTrialConfig_experiments_197,
  },
  {
    "FeedbackDisabledDialog",
    array_kFieldTrialConfig_experiments_198,
  },
  {
    "FencedFramesDeprecation",
    array_kFieldTrialConfig_experiments_199,
  },
  {
    "FirstRunDesktopRevamp",
    array_kFieldTrialConfig_experiments_200,
  },
  {
    "FirstRunFeatureShowcaseGeminiStep",
    array_kFieldTrialConfig_experiments_201,
  },
  {
    "FixReadingListToggleForSyncToSigninMigratedUsers",
    array_kFieldTrialConfig_experiments_202,
  },
  {
    "FlushPersistentSystemProfileOnWrite",
    array_kFieldTrialConfig_experiments_203,
  },
  {
    "FontDataManagerPrewarming",
    array_kFieldTrialConfig_experiments_204,
  },
  {
    "FontDataServiceForCSSLocalFonts",
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
    "GlicActorObservationDelayExcludeAdFrameLoading",
    array_kFieldTrialConfig_experiments_210,
  },
  {
    "GlicActorRolloutControl",
    array_kFieldTrialConfig_experiments_211,
  },
  {
    "GlicAutoOpenPdf",
    array_kFieldTrialConfig_experiments_212,
  },
  {
    "GlicCSPConfig_Dogfood",
    array_kFieldTrialConfig_experiments_213,
  },
  {
    "GlicColdWarmingInitiallyHidden",
    array_kFieldTrialConfig_experiments_214,
  },
  {
    "GlicConfirmNavigationToNewOrigins",
    array_kFieldTrialConfig_experiments_215,
  },
  {
    "GlicDisableDaisyChainNewTabs",
    array_kFieldTrialConfig_experiments_216,
  },
  {
    "GlicDisableHfcr",
    array_kFieldTrialConfig_experiments_217,
  },
  {
    "GlicDogfood",
    array_kFieldTrialConfig_experiments_218,
  },
  {
    "GlicEmbeddedPdfBytesExtraction",
    array_kFieldTrialConfig_experiments_219,
  },
  {
    "GlicExperimentalTriggering",
    array_kFieldTrialConfig_experiments_220,
  },
  {
    "GlicForceNonSkSLBorder",
    array_kFieldTrialConfig_experiments_221,
  },
  {
    "GlicGeminiInstructions",
    array_kFieldTrialConfig_experiments_222,
  },
  {
    "GlicHorizontalTabToolbarButton",
    array_kFieldTrialConfig_experiments_223,
  },
  {
    "GlicHotkeyLocalScope",
    array_kFieldTrialConfig_experiments_224,
  },
  {
    "GlicMediaData",
    array_kFieldTrialConfig_experiments_225,
  },
  {
    "GlicMessageFirstOnboarding",
    array_kFieldTrialConfig_experiments_226,
  },
  {
    "GlicNoWebview",
    array_kFieldTrialConfig_experiments_227,
  },
  {
    "GlicPdfSummarizeButton",
    array_kFieldTrialConfig_experiments_228,
  },
  {
    "GlicPersonalContext",
    array_kFieldTrialConfig_experiments_229,
  },
  {
    "GlicReuseCookies",
    array_kFieldTrialConfig_experiments_230,
  },
  {
    "GlicShareImage",
    array_kFieldTrialConfig_experiments_231,
  },
  {
    "GlicSummarizeVideoSuggestion",
    array_kFieldTrialConfig_experiments_232,
  },
  {
    "GlicTextSelectionContextMenu",
    array_kFieldTrialConfig_experiments_233,
  },
  {
    "GlicTryItUnlaunch",
    array_kFieldTrialConfig_experiments_234,
  },
  {
    "GlicTutorialsStudy",
    array_kFieldTrialConfig_experiments_235,
  },
  {
    "GlicUserStatusCheckDogfood",
    array_kFieldTrialConfig_experiments_236,
  },
  {
    "GlicWebActuationSettingsToggle",
    array_kFieldTrialConfig_experiments_237,
  },
  {
    "GlicZeroStateSuggestionsDogfood",
    array_kFieldTrialConfig_experiments_238,
  },
  {
    "GlowUp",
    array_kFieldTrialConfig_experiments_239,
  },
  {
    "GpuInitOptimization",
    array_kFieldTrialConfig_experiments_240,
  },
  {
    "GpuPersistentCache",
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
    "HangoutsExtensionV3",
    array_kFieldTrialConfig_experiments_244,
  },
  {
    "HappinessTrackingSurveysForDesktopHistoryPageControl",
    array_kFieldTrialConfig_experiments_245,
  },
  {
    "HappinessTrackingSurveysForDesktopHistoryPageExperiment",
    array_kFieldTrialConfig_experiments_246,
  },
  {
    "HappyEyeballsV2",
    array_kFieldTrialConfig_experiments_247,
  },
  {
    "HarfBuzzZeroCopyFontTable",
    array_kFieldTrialConfig_experiments_248,
  },
  {
    "HatsReadingModeSurvey",
    array_kFieldTrialConfig_experiments_249,
  },
  {
    "HeapProfilerChurnReporting",
    array_kFieldTrialConfig_experiments_250,
  },
  {
    "HeapProfilerIncludeResidency",
    array_kFieldTrialConfig_experiments_251,
  },
  {
    "HeapVectorPromptlyFree",
    array_kFieldTrialConfig_experiments_252,
  },
  {
    "HistoryDatabaseWriteAheadLogging",
    array_kFieldTrialConfig_experiments_253,
  },
  {
    "HistoryEmbeddingsUnlaunch",
    array_kFieldTrialConfig_experiments_254,
  },
  {
    "HistoryQueryBatchedLookups",
    array_kFieldTrialConfig_experiments_255,
  },
  {
    "HistoryReportClusterDatabaseMetrics",
    array_kFieldTrialConfig_experiments_256,
  },
  {
    "HttpCacheNoVarySearch",
    array_kFieldTrialConfig_experiments_257,
  },
  {
    "HttpCacheZstdCompression",
    array_kFieldTrialConfig_experiments_258,
  },
  {
    "HttpsFirstModeV2ForTypicallySecureUsers",
    array_kFieldTrialConfig_experiments_259,
  },
  {
    "I18nOptimizations",
    array_kFieldTrialConfig_experiments_260,
  },
  {
    "IDBDatabaseDumpOnHighConnectionCount",
    array_kFieldTrialConfig_experiments_261,
  },
  {
    "IPH_GMCSaveVideoFrame",
    array_kFieldTrialConfig_experiments_262,
  },
  {
    "IcuNormalizerMigration",
    array_kFieldTrialConfig_experiments_263,
  },
  {
    "IdbSqliteOnDiskRollout",
    array_kFieldTrialConfig_experiments_264,
  },
  {
    "IgnoreDuplicateNavs",
    array_kFieldTrialConfig_experiments_265,
  },
  {
    "IgnoreDuplicateNavsOnlyWithUserGesture",
    array_kFieldTrialConfig_experiments_266,
  },
  {
    "IgnoreIPMatching",
    array_kFieldTrialConfig_experiments_267,
  },
  {
    "ImageDescriptionsAlternateRouting",
    array_kFieldTrialConfig_experiments_268,
  },
  {
    "ImportExportFlagsTeamfood",
    array_kFieldTrialConfig_experiments_269,
  },
  {
    "ImprovedStartupBestEffortDelay",
    array_kFieldTrialConfig_experiments_270,
  },
  {
    "IncreaseHttp3Usage",
    array_kFieldTrialConfig_experiments_271,
  },
  {
    "IncreasedCmdBufferParseSlice",
    array_kFieldTrialConfig_experiments_272,
  },
  {
    "IndexedDBConnectionDeduplication",
    array_kFieldTrialConfig_experiments_273,
  },
  {
    "Indigo",
    array_kFieldTrialConfig_experiments_274,
  },
  {
    "InfiniteTabsFreezingOnMemoryPressureV2",
    array_kFieldTrialConfig_experiments_275,
  },
  {
    "InfoBarQueuedCountPill",
    array_kFieldTrialConfig_experiments_276,
  },
  {
    "InhibitSQLReleaseCacheMemoryIfNeeded",
    array_kFieldTrialConfig_experiments_277,
  },
  {
    "InlineLocationSuggestions",
    array_kFieldTrialConfig_experiments_278,
  },
  {
    "InstantHandoffPhase1FastFollows",
    array_kFieldTrialConfig_experiments_279,
  },
  {
    "IsolateSubframeErrorPages",
    array_kFieldTrialConfig_experiments_280,
  },
  {
    "LCPPDeferUnusedPreload",
    array_kFieldTrialConfig_experiments_281,
  },
  {
    "LCPPLazyLoadImagePreload",
    array_kFieldTrialConfig_experiments_282,
  },
  {
    "LCPTimingPredictorPrerender2",
    array_kFieldTrialConfig_experiments_283,
  },
  {
    "LRUCacheMemoryConsumer",
    array_kFieldTrialConfig_experiments_284,
  },
  {
    "LabelDefaultTooltipFastPath",
    array_kFieldTrialConfig_experiments_285,
  },
  {
    "LaunchOnStartup",
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
    "MediaFoundationBatchRead",
    array_kFieldTrialConfig_experiments_298,
  },
  {
    "MemoryConsumerForNGShapeCache",
    array_kFieldTrialConfig_experiments_299,
  },
  {
    "MenuSimplification",
    array_kFieldTrialConfig_experiments_300,
  },
  {
    "MigrateSyncingUserToSignedInDesktop",
    array_kFieldTrialConfig_experiments_301,
  },
  {
    "MultipleSpareRPHs",
    array_kFieldTrialConfig_experiments_302,
  },
  {
    "NetTaskScheduler",
    array_kFieldTrialConfig_experiments_303,
  },
  {
    "NetworkQualityEstimatorAsyncNotifyHeadersReceived",
    array_kFieldTrialConfig_experiments_304,
  },
  {
    "NetworkServiceSandboxWindows",
    array_kFieldTrialConfig_experiments_305,
  },
  {
    "NewVoiceSearchUiInNtpRealbox",
    array_kFieldTrialConfig_experiments_306,
  },
  {
    "NoPreReadMainDllStartup",
    array_kFieldTrialConfig_experiments_307,
  },
  {
    "NoVarySearchCacheLoadOnSeparateTaskRunner",
    array_kFieldTrialConfig_experiments_308,
  },
  {
    "NonStandardAppearanceValueSliderVertical",
    array_kFieldTrialConfig_experiments_309,
  },
  {
    "NoopRuntimeMutableStudy1",
    array_kFieldTrialConfig_experiments_310,
  },
  {
    "NoopRuntimeMutableStudy2",
    array_kFieldTrialConfig_experiments_311,
  },
  {
    "NtpComposeboxDesktop",
    array_kFieldTrialConfig_experiments_312,
  },
  {
    "NtpGoogleLogo26",
    array_kFieldTrialConfig_experiments_313,
  },
  {
    "NtpLazyLoadComposebox",
    array_kFieldTrialConfig_experiments_314,
  },
  {
    "NtpMicrosoftFilesCard",
    array_kFieldTrialConfig_experiments_315,
  },
  {
    "NtpMostVisitedHighDpiFavicons",
    array_kFieldTrialConfig_experiments_316,
  },
  {
    "NtpNextScaledAIMerch",
    array_kFieldTrialConfig_experiments_317,
  },
  {
    "NtpRealboxCyclingPlaceholders",
    array_kFieldTrialConfig_experiments_318,
  },
  {
    "OAuthMultiloginYoutubeCookiesBinding",
    array_kFieldTrialConfig_experiments_319,
  },
  {
    "OcclusionCullingQuadSplitLimit",
    array_kFieldTrialConfig_experiments_320,
  },
  {
    "OffloadAcceptCHFrameCheck",
    array_kFieldTrialConfig_experiments_321,
  },
  {
    "OmitBlurEventOnElementRemoval",
    array_kFieldTrialConfig_experiments_322,
  },
  {
    "OmniboxBundledExperimentV1",
    array_kFieldTrialConfig_experiments_323,
  },
  {
    "OmniboxCrossDeviceTabZeroSuggest",
    array_kFieldTrialConfig_experiments_324,
  },
  {
    "OmniboxDriveTrafficReduction",
    array_kFieldTrialConfig_experiments_325,
  },
  {
    "OmniboxEverywhere",
    array_kFieldTrialConfig_experiments_326,
  },
  {
    "OmniboxLogURLScoringSignals",
    array_kFieldTrialConfig_experiments_327,
  },
  {
    "OmniboxOnDeviceBrainModel",
    array_kFieldTrialConfig_experiments_328,
  },
  {
    "OmniboxStarterPackIPH",
    array_kFieldTrialConfig_experiments_329,
  },
  {
    "OmniboxUseShortSuggestPathV1",
    array_kFieldTrialConfig_experiments_330,
  },
  {
    "OmniboxWebUIDeferShowUntilVisualStateReady",
    array_kFieldTrialConfig_experiments_331,
  },
  {
    "OmniboxWebUIPopupHideOnCreation",
    array_kFieldTrialConfig_experiments_332,
  },
  {
    "OnDemandSpellcheckInitialization",
    array_kFieldTrialConfig_experiments_333,
  },
  {
    "OnDeviceModelBackgroundDownload",
    array_kFieldTrialConfig_experiments_334,
  },
  {
    "OnDeviceModelConversationBackend",
    array_kFieldTrialConfig_experiments_335,
  },
  {
    "OnDeviceModelEviction",
    array_kFieldTrialConfig_experiments_336,
  },
  {
    "OpenTranslationSettings",
    array_kFieldTrialConfig_experiments_337,
  },
  {
    "OptGuideBatchSRPTuning",
    array_kFieldTrialConfig_experiments_338,
  },
  {
    "OptGuideURLCacheSize",
    array_kFieldTrialConfig_experiments_339,
  },
  {
    "OptimisticDnsForQuic",
    array_kFieldTrialConfig_experiments_340,
  },
  {
    "OptimisticDnsForTcp",
    array_kFieldTrialConfig_experiments_341,
  },
  {
    "OptimizationGuideProactivePersonalizedHintsFetching",
    array_kFieldTrialConfig_experiments_342,
  },
  {
    "OptimizeWebRequestProxyForServiceWorkerAutoPreload",
    array_kFieldTrialConfig_experiments_343,
  },
  {
    "OutOfProcessPrintDriversPrint",
    array_kFieldTrialConfig_experiments_344,
  },
  {
    "PMLoadingPageVoterV2",
    array_kFieldTrialConfig_experiments_345,
  },
  {
    "PMProcessPriorityPolicy",
    array_kFieldTrialConfig_experiments_346,
  },
  {
    "PMWithheldFromViewVoter",
    array_kFieldTrialConfig_experiments_347,
  },
  {
    "PageActionAnchoredMessageEasyDismiss",
    array_kFieldTrialConfig_experiments_348,
  },
  {
    "PageActionsOptimizations",
    array_kFieldTrialConfig_experiments_349,
  },
  {
    "PageActionsPrioritySelector",
    array_kFieldTrialConfig_experiments_350,
  },
  {
    "PageContentCacheDesktop",
    array_kFieldTrialConfig_experiments_351,
  },
  {
    "PageInfoAboutThisSite40Langs",
    array_kFieldTrialConfig_experiments_352,
  },
  {
    "PaintHoldingOOPIF",
    array_kFieldTrialConfig_experiments_353,
  },
  {
    "PartitionAllocBackupRefPtr",
    array_kFieldTrialConfig_experiments_354,
  },
  {
    "PartitionAllocMemoryReclaimer",
    array_kFieldTrialConfig_experiments_355,
  },
  {
    "PartitionAllocMiracleObject",
    array_kFieldTrialConfig_experiments_356,
  },
  {
    "PartitionAllocTighterAlignedAllocBound",
    array_kFieldTrialConfig_experiments_357,
  },
  {
    "PartitionAllocUnretainedDanglingPtr",
    array_kFieldTrialConfig_experiments_358,
  },
  {
    "PartitionNetworkStateByNetworkAnonymizationKey",
    array_kFieldTrialConfig_experiments_359,
  },
  {
    "PassHistogramSharedMemoryOnLaunch",
    array_kFieldTrialConfig_experiments_360,
  },
  {
    "PassageEmbeddingsPerformance",
    array_kFieldTrialConfig_experiments_361,
  },
  {
    "PasskeyUnlockErrorUi",
    array_kFieldTrialConfig_experiments_362,
  },
  {
    "PasskeyUnlockPromo",
    array_kFieldTrialConfig_experiments_363,
  },
  {
    "PasswordCompromiseWarningInDetailsCard",
    array_kFieldTrialConfig_experiments_364,
  },
  {
    "PasswordManualFallbackSecurityChecks",
    array_kFieldTrialConfig_experiments_365,
  },
  {
    "PasswordSaveInContextErrorResolution",
    array_kFieldTrialConfig_experiments_366,
  },
  {
    "PasswordSaveUpdateDropdownMenu",
    array_kFieldTrialConfig_experiments_367,
  },
  {
    "Path2DPaintCache",
    array_kFieldTrialConfig_experiments_368,
  },
  {
    "PaymentHandlerCameraAccessUx",
    array_kFieldTrialConfig_experiments_369,
  },
  {
    "PaymentRequestEnforceLNAWithClientSecurityState",
    array_kFieldTrialConfig_experiments_370,
  },
  {
    "PdfAccessibilityHeuristicEnhancements",
    array_kFieldTrialConfig_experiments_371,
  },
  {
    "PdfGetSaveDataInBlocks",
    array_kFieldTrialConfig_experiments_372,
  },
  {
    "PdfInfoBar",
    array_kFieldTrialConfig_experiments_373,
  },
  {
    "PdfInkSignaturesTextAnnotations",
    array_kFieldTrialConfig_experiments_374,
  },
  {
    "PdfUseSkiaRenderer",
    array_kFieldTrialConfig_experiments_375,
  },
  {
    "PermissionsAIv4",
    array_kFieldTrialConfig_experiments_376,
  },
  {
    "PermissionsGestureGatedPrompts",
    array_kFieldTrialConfig_experiments_377,
  },
  {
    "PersonalContextStudy",
    array_kFieldTrialConfig_experiments_378,
  },
  {
    "PervasiveSharedDictionaries",
    array_kFieldTrialConfig_experiments_379,
  },
  {
    "PinExtensionJourney",
    array_kFieldTrialConfig_experiments_380,
  },
  {
    "PlatformRuntimeComponentStudy",
    array_kFieldTrialConfig_experiments_381,
  },
  {
    "PolicyBlocklistProceedUntilResponse",
    array_kFieldTrialConfig_experiments_382,
  },
  {
    "PopulateUnattachedAuraScreenInfo",
    array_kFieldTrialConfig_experiments_383,
  },
  {
    "PqcBandwidthExperiment",
    array_kFieldTrialConfig_experiments_384,
  },
  {
    "PreFirstRunDesktopRefresh",
    array_kFieldTrialConfig_experiments_385,
  },
  {
    "PreReadIcuData",
    array_kFieldTrialConfig_experiments_386,
  },
  {
    "PrecomputeSiteInfo",
    array_kFieldTrialConfig_experiments_387,
  },
  {
    "PreconnectFromKeyedService",
    array_kFieldTrialConfig_experiments_388,
  },
  {
    "PreconnectManagerDirectFastPath",
    array_kFieldTrialConfig_experiments_389,
  },
  {
    "PreconnectToSearchDesktop",
    array_kFieldTrialConfig_experiments_390,
  },
  {
    "PredictionModelComponentDelivery",
    array_kFieldTrialConfig_experiments_391,
  },
  {
    "PreemptiveSodaDownload",
    array_kFieldTrialConfig_experiments_392,
  },
  {
    "PreferWarmRendererProcess",
    array_kFieldTrialConfig_experiments_393,
  },
  {
    "PrefetchActivationBeacon",
    array_kFieldTrialConfig_experiments_394,
  },
  {
    "PrefetchBookmarkBarTrigger",
    array_kFieldTrialConfig_experiments_395,
  },
  {
    "PrefetchCancelUnrelatedPrefetch",
    array_kFieldTrialConfig_experiments_396,
  },
  {
    "PrefetchMultipleActiveSetSizeLimitForBase",
    array_kFieldTrialConfig_experiments_397,
  },
  {
    "PreloadActivationReportWithExtensionInterception",
    array_kFieldTrialConfig_experiments_398,
  },
  {
    "PreloadingRespectUserAgentOverride",
    array_kFieldTrialConfig_experiments_399,
  },
  {
    "PrepopulatedEnginesMigration",
    array_kFieldTrialConfig_experiments_400,
  },
  {
    "Prerender2EarlyDocumentLifecycleUpdateV2",
    array_kFieldTrialConfig_experiments_401,
  },
  {
    "PreventReentrantInternalSetBounds",
    array_kFieldTrialConfig_experiments_402,
  },
  {
    "PreventSaveUpdatePasswordOnFederatedLogin",
    array_kFieldTrialConfig_experiments_403,
  },
  {
    "PrewarmZeroSuggestTrigger",
    array_kFieldTrialConfig_experiments_404,
  },
  {
    "PriceTrackingDesktopExpansionStudy",
    array_kFieldTrialConfig_experiments_405,
  },
  {
    "PriceTrackingPageActionIconLabelFeatureIPH",
    array_kFieldTrialConfig_experiments_406,
  },
  {
    "PrioritizeMainFrameNavigationNetworkResponse",
    array_kFieldTrialConfig_experiments_407,
  },
  {
    "PrioritizeSafeBrowsingNavigationCallbacks",
    array_kFieldTrialConfig_experiments_408,
  },
  {
    "PrivateInsights",
    array_kFieldTrialConfig_experiments_409,
  },
  {
    "ProactivePasswordProtection",
    array_kFieldTrialConfig_experiments_410,
  },
  {
    "ProcessHtmlDataImmediately",
    array_kFieldTrialConfig_experiments_411,
  },
  {
    "ProfileLoadTracker",
    array_kFieldTrialConfig_experiments_412,
  },
  {
    "ProfilesReordering",
    array_kFieldTrialConfig_experiments_413,
  },
  {
    "ProgressiveAccessibilityPhase2",
    array_kFieldTrialConfig_experiments_414,
  },
  {
    "ProtectedAudienceDeprecation",
    array_kFieldTrialConfig_experiments_415,
  },
  {
    "PushMessagingDisallowSenderIDs",
    array_kFieldTrialConfig_experiments_416,
  },
  {
    "PushMessagingGcmEndpointWebpushPath",
    array_kFieldTrialConfig_experiments_417,
  },
  {
    "QuicSocketSendBufferSize",
    array_kFieldTrialConfig_experiments_418,
  },
  {
    "ReadAnythingDistillationQualityEvaluation",
    array_kFieldTrialConfig_experiments_419,
  },
  {
    "ReadAnythingDistillerRefactor",
    array_kFieldTrialConfig_experiments_420,
  },
  {
    "ReadAnythingImprovedUi",
    array_kFieldTrialConfig_experiments_421,
  },
  {
    "ReadAnythingJourney",
    array_kFieldTrialConfig_experiments_422,
  },
  {
    "ReadAnythingMenuShuffleExperiment",
    array_kFieldTrialConfig_experiments_423,
  },
  {
    "RealboxVirtualFocusNavigation",
    array_kFieldTrialConfig_experiments_424,
  },
  {
    "ReauthSkipIdentifierPage",
    array_kFieldTrialConfig_experiments_425,
  },
  {
    "RecordLockAcquisitionTimeStudy",
    array_kFieldTrialConfig_experiments_426,
  },
  {
    "RedWarningSurvey",
    array_kFieldTrialConfig_experiments_427,
  },
  {
    "ReduceMojoURLLoaderFactoryCloning",
    array_kFieldTrialConfig_experiments_428,
  },
  {
    "RelaunchWaitForParentProcess",
    array_kFieldTrialConfig_experiments_429,
  },
  {
    "RemoteActorCredentialSharing",
    array_kFieldTrialConfig_experiments_430,
  },
  {
    "RemoveHangoutsExtension",
    array_kFieldTrialConfig_experiments_431,
  },
  {
    "RequiresLoadIgnoreLimitsForDomWindowsOnly",
    array_kFieldTrialConfig_experiments_432,
  },
  {
    "ResourcePoolResize",
    array_kFieldTrialConfig_experiments_433,
  },
  {
    "RestrictPendingInputEventTypeToBlockMainThread",
    array_kFieldTrialConfig_experiments_434,
  },
  {
    "RicherImageSuggestions",
    array_kFieldTrialConfig_experiments_435,
  },
  {
    "RustPhishingModelSetter",
    array_kFieldTrialConfig_experiments_436,
  },
  {
    "RustyIcoFeature",
    array_kFieldTrialConfig_experiments_437,
  },
  {
    "SPCLocaleValidation",
    array_kFieldTrialConfig_experiments_438,
  },
  {
    "SQLitePersistentCookieStoreEarlyInit",
    array_kFieldTrialConfig_experiments_439,
  },
  {
    "SafeBrowsingDailyPhishingReportsLimit",
    array_kFieldTrialConfig_experiments_440,
  },
  {
    "SafeBrowsingExtensionTelemetrySearchHijackingSignal",
    array_kFieldTrialConfig_experiments_441,
  },
  {
    "SafeBrowsingLocalListsUseSBv5",
    array_kFieldTrialConfig_experiments_442,
  },
  {
    "SafeBrowsingWaitForDnsForRealTimeLookup",
    array_kFieldTrialConfig_experiments_443,
  },
  {
    "SafetyCheckUnusedSitePermissions",
    array_kFieldTrialConfig_experiments_444,
  },
  {
    "SafetyHubIncreasePasswordCheckFrequencyV2",
    array_kFieldTrialConfig_experiments_445,
  },
  {
    "SafetyHubUnusedPermissionRevocationForAllSurfaces",
    array_kFieldTrialConfig_experiments_446,
  },
  {
    "ScheduledRestart",
    array_kFieldTrialConfig_experiments_447,
  },
  {
    "SearchEngineExplicitChoiceDialog",
    array_kFieldTrialConfig_experiments_448,
  },
  {
    "SearchPrefetchHighPriorityPrefetches",
    array_kFieldTrialConfig_experiments_449,
  },
  {
    "SearchPromotionIPH",
    array_kFieldTrialConfig_experiments_450,
  },
  {
    "SearchSettingsWithMoreEngines",
    array_kFieldTrialConfig_experiments_451,
  },
  {
    "SecurePaymentConfirmationCredentialDiscoveryMode",
    array_kFieldTrialConfig_experiments_452,
  },
  {
    "SensorsAllowAskBlockPermissionModel",
    array_kFieldTrialConfig_experiments_453,
  },
  {
    "ServiceWorkerDatabaseDoomOnMissingNextId",
    array_kFieldTrialConfig_experiments_454,
  },
  {
    "ServiceWorkerDumpWithoutCrashingOnStorageKeyMismatch",
    array_kFieldTrialConfig_experiments_455,
  },
  {
    "ServiceWorkerRaceNetworkRequestDeprecateTwoPhaseWrite",
    array_kFieldTrialConfig_experiments_456,
  },
  {
    "ServiceWorkerRaceNetworkRequestFallbackOnDisconnect",
    array_kFieldTrialConfig_experiments_457,
  },
  {
    "ServiceWorkerSyntheticResponse",
    array_kFieldTrialConfig_experiments_458,
  },
  {
    "ShareEventArgsOnDispatch",
    array_kFieldTrialConfig_experiments_459,
  },
  {
    "SharedHighlightingIphDesktop",
    array_kFieldTrialConfig_experiments_460,
  },
  {
    "SharedMemorySystemProfileMinidump",
    array_kFieldTrialConfig_experiments_461,
  },
  {
    "SharedTabGroups",
    array_kFieldTrialConfig_experiments_462,
  },
  {
    "SharingHubDesktopScreenshots",
    array_kFieldTrialConfig_experiments_463,
  },
  {
    "ShowSearchEngineChoiceScreenAfterWiping",
    array_kFieldTrialConfig_experiments_464,
  },
  {
    "SimdutfBase64Encode",
    array_kFieldTrialConfig_experiments_465,
  },
  {
    "SingleAxisScrollContainers",
    array_kFieldTrialConfig_experiments_466,
  },
  {
    "SingleVideoFrameRateThrottling",
    array_kFieldTrialConfig_experiments_467,
  },
  {
    "SkiaGraphite",
    array_kFieldTrialConfig_experiments_468,
  },
  {
    "SkiaGraphiteWinIntel",
    array_kFieldTrialConfig_experiments_469,
  },
  {
    "Skills",
    array_kFieldTrialConfig_experiments_470,
  },
  {
    "SkillsV2",
    array_kFieldTrialConfig_experiments_471,
  },
  {
    "SkipImageClassificationScoringForNonPageLoadTriggers",
    array_kFieldTrialConfig_experiments_472,
  },
  {
    "SkipInitialForcedScrollbar",
    array_kFieldTrialConfig_experiments_473,
  },
  {
    "SkipListAccountsWithoutGaiaCookies",
    array_kFieldTrialConfig_experiments_474,
  },
  {
    "SmartSuggestions",
    array_kFieldTrialConfig_experiments_475,
  },
  {
    "SodaXnnpackDelegate",
    array_kFieldTrialConfig_experiments_476,
  },
  {
    "SpeculativeImageDecodes",
    array_kFieldTrialConfig_experiments_477,
  },
  {
    "SpeculativeServiceWorkerWarmUp",
    array_kFieldTrialConfig_experiments_478,
  },
  {
    "SpeedUpClearSiteDataCacheDeletion",
    array_kFieldTrialConfig_experiments_479,
  },
  {
    "SplitCacheByNetworkIsolationKey",
    array_kFieldTrialConfig_experiments_480,
  },
  {
    "SplitViewHorizontalDirectTabAccess",
    array_kFieldTrialConfig_experiments_481,
  },
  {
    "StreamlineRendererInit",
    array_kFieldTrialConfig_experiments_482,
  },
  {
    "SuspiciousSiteWarnings",
    array_kFieldTrialConfig_experiments_483,
  },
  {
    "SwiftShaderDeprecation",
    array_kFieldTrialConfig_experiments_484,
  },
  {
    "SyncIncreaseNudgeDelayForSingleClient",
    array_kFieldTrialConfig_experiments_485,
  },
  {
    "SyncUsePropagatedAccessToken",
    array_kFieldTrialConfig_experiments_486,
  },
  {
    "SystemCaptionStyleCaching",
    array_kFieldTrialConfig_experiments_487,
  },
  {
    "SystemPdhMetrics",
    array_kFieldTrialConfig_experiments_488,
  },
  {
    "TabGroupColorRefresh",
    array_kFieldTrialConfig_experiments_489,
  },
  {
    "TabGroupsFocusing",
    array_kFieldTrialConfig_experiments_490,
  },
  {
    "TabSearchJourney",
    array_kFieldTrialConfig_experiments_491,
  },
  {
    "TabSearchPerformanceImprovements",
    array_kFieldTrialConfig_experiments_492,
  },
  {
    "TextSafetyScanLanguageDetection",
    array_kFieldTrialConfig_experiments_493,
  },
  {
    "ThemeChangeOptimization",
    array_kFieldTrialConfig_experiments_494,
  },
  {
    "ThreadPoolForegroundBlockingTimeouts",
    array_kFieldTrialConfig_experiments_495,
  },
  {
    "ThreeDSecureTelemetry",
    array_kFieldTrialConfig_experiments_496,
  },
  {
    "ThrottleConsecutiveNoDamageMainFrames",
    array_kFieldTrialConfig_experiments_497,
  },
  {
    "TopicsDeprecation",
    array_kFieldTrialConfig_experiments_498,
  },
  {
    "TrackAnimatedSourcesForInheritedProperties",
    array_kFieldTrialConfig_experiments_499,
  },
  {
    "TransientKeepAlivePolicy",
    array_kFieldTrialConfig_experiments_500,
  },
  {
    "TranslateElementFeatures",
    array_kFieldTrialConfig_experiments_501,
  },
  {
    "TranslateLanguageSearchUIExperiment",
    array_kFieldTrialConfig_experiments_502,
  },
  {
    "TreesInViz",
    array_kFieldTrialConfig_experiments_503,
  },
  {
    "TruncateSearchUrl",
    array_kFieldTrialConfig_experiments_504,
  },
  {
    "TrustSafetySentimentSurvey",
    array_kFieldTrialConfig_experiments_505,
  },
  {
    "TrustSafetySentimentSurveyV2",
    array_kFieldTrialConfig_experiments_506,
  },
  {
    "TrustedVaultDesktopUnlock",
    array_kFieldTrialConfig_experiments_507,
  },
  {
    "TrustedVaultSharedRecoveryFactorsAndEncryption",
    array_kFieldTrialConfig_experiments_508,
  },
  {
    "UiaDisconnectRootProviders",
    array_kFieldTrialConfig_experiments_509,
  },
  {
    "UnexportableKeysSpareKeyPoolWindows",
    array_kFieldTrialConfig_experiments_510,
  },
  {
    "UniversalCart",
    array_kFieldTrialConfig_experiments_511,
  },
  {
    "UniversalOptOutSettings",
    array_kFieldTrialConfig_experiments_512,
  },
  {
    "UnoPhase2Desktop",
    array_kFieldTrialConfig_experiments_513,
  },
  {
    "UnthrottleAsyncTouchMovesV2",
    array_kFieldTrialConfig_experiments_514,
  },
  {
    "UploadReportOnProfileOpenStudy",
    array_kFieldTrialConfig_experiments_515,
  },
  {
    "UseAutomaticSyncTokenManagement",
    array_kFieldTrialConfig_experiments_516,
  },
  {
    "UsePersistentCacheForCodeCache",
    array_kFieldTrialConfig_experiments_517,
  },
  {
    "UseRustCborParser",
    array_kFieldTrialConfig_experiments_518,
  },
  {
    "UseRustCborWriter",
    array_kFieldTrialConfig_experiments_519,
  },
  {
    "UserValueDefaultBrowserStrings",
    array_kFieldTrialConfig_experiments_520,
  },
  {
    "UtfConversionAsciiFastPath",
    array_kFieldTrialConfig_experiments_521,
  },
  {
    "V8DateTimePatternGeneratorCacheEviction",
    array_kFieldTrialConfig_experiments_522,
  },
  {
    "V8HomomorphicIC",
    array_kFieldTrialConfig_experiments_523,
  },
  {
    "V8InputHandlingLongerWindow",
    array_kFieldTrialConfig_experiments_524,
  },
  {
    "V8LimitBasedMemoryReducer",
    array_kFieldTrialConfig_experiments_525,
  },
  {
    "V8MaxValidPolymorphicMapCount",
    array_kFieldTrialConfig_experiments_526,
  },
  {
    "V8ParserAblation",
    array_kFieldTrialConfig_experiments_527,
  },
  {
    "V8PreconfigureOldGen",
    array_kFieldTrialConfig_experiments_528,
  },
  {
    "V8SideStepTransitions",
    array_kFieldTrialConfig_experiments_529,
  },
  {
    "V8SlowHistograms",
    array_kFieldTrialConfig_experiments_530,
  },
  {
    "V8SparkplugPlus",
    array_kFieldTrialConfig_experiments_531,
  },
  {
    "V8SqrtAllocationLimits",
    array_kFieldTrialConfig_experiments_532,
  },
  {
    "V8Turbolev",
    array_kFieldTrialConfig_experiments_533,
  },
  {
    "VariationsFeatureAccessLogging",
    array_kFieldTrialConfig_experiments_534,
  },
  {
    "VariationsRuntimeMutability",
    array_kFieldTrialConfig_experiments_535,
  },
  {
    "VariationsStickyNoopTest",
    array_kFieldTrialConfig_experiments_536,
  },
  {
    "VerifyDidCommitParams",
    array_kFieldTrialConfig_experiments_537,
  },
  {
    "VerifyQWACsRollout",
    array_kFieldTrialConfig_experiments_538,
  },
  {
    "ViewDownloadedFileJourney",
    array_kFieldTrialConfig_experiments_539,
  },
  {
    "VisitedURLRankingService",
    array_kFieldTrialConfig_experiments_540,
  },
  {
    "VoiceSearchCoherenceComposeboxesKillSwitch",
    array_kFieldTrialConfig_experiments_541,
  },
  {
    "WasapiImproveGlitchDetection",
    array_kFieldTrialConfig_experiments_542,
  },
  {
    "WebContentsDiscard",
    array_kFieldTrialConfig_experiments_543,
  },
  {
    "WebGLMemoryExperiments",
    array_kFieldTrialConfig_experiments_544,
  },
  {
    "WebGPU",
    array_kFieldTrialConfig_experiments_545,
  },
  {
    "WebGPUSupportMetrics",
    array_kFieldTrialConfig_experiments_546,
  },
  {
    "WebHistoryUseNewApi",
    array_kFieldTrialConfig_experiments_547,
  },
  {
    "WebRTC-Aec3BufferingMaxAllowedExcessRenderBlocksOverride",
    array_kFieldTrialConfig_experiments_548,
  },
  {
    "WebRTC-Aec3DelayEstimateSmoothingDelayFoundOverride",
    array_kFieldTrialConfig_experiments_549,
  },
  {
    "WebRTC-Aec3TransparentModeHmm",
    array_kFieldTrialConfig_experiments_550,
  },
  {
    "WebRTC-Agc2MaxSpeechLevelExperimental",
    array_kFieldTrialConfig_experiments_551,
  },
  {
    "WebRTC-Agc2SpeechLevelEstimatorExperimental",
    array_kFieldTrialConfig_experiments_552,
  },
  {
    "WebRTC-Audio-GainController2",
    array_kFieldTrialConfig_experiments_553,
  },
  {
    "WebRTC-Audio-NetEqDecisionLogicConfig",
    array_kFieldTrialConfig_experiments_554,
  },
  {
    "WebRTC-Audio-OpusAvoidNoisePumpingDuringDtx",
    array_kFieldTrialConfig_experiments_555,
  },
  {
    "WebRTC-BurstyPacer",
    array_kFieldTrialConfig_experiments_556,
  },
  {
    "WebRTC-Bwe-LossBasedBweV2",
    array_kFieldTrialConfig_experiments_557,
  },
  {
    "WebRTC-Bwe-ProbingConfiguration",
    array_kFieldTrialConfig_experiments_558,
  },
  {
    "WebRTC-Bwe-ReceiverLimitCapsOnly",
    array_kFieldTrialConfig_experiments_559,
  },
  {
    "WebRTC-Bwe-RobustThroughputEstimatorSettings",
    array_kFieldTrialConfig_experiments_560,
  },
  {
    "WebRTC-CorruptionDetectionFrameSelector",
    array_kFieldTrialConfig_experiments_561,
  },
  {
    "WebRTC-DataChannel-MessageInterleaving",
    array_kFieldTrialConfig_experiments_562,
  },
  {
    "WebRTC-IPv6NetworkResolutionFixes",
    array_kFieldTrialConfig_experiments_563,
  },
  {
    "WebRTC-JitterEstimatorConfig",
    array_kFieldTrialConfig_experiments_564,
  },
  {
    "WebRTC-LibaomAv1Encoder-DropRepeatFramesOnEnhancementLayers",
    array_kFieldTrialConfig_experiments_565,
  },
  {
    "WebRTC-Pacer-KeyframeFlushing",
    array_kFieldTrialConfig_experiments_566,
  },
  {
    "WebRTC-RFC8888CongestionControlFeedback",
    array_kFieldTrialConfig_experiments_567,
  },
  {
    "WebRTC-SendBufferSizeBytes",
    array_kFieldTrialConfig_experiments_568,
  },
  {
    "WebRTC-SendPacketsOnWorkerThread",
    array_kFieldTrialConfig_experiments_569,
  },
  {
    "WebRTC-SlackedTaskQueuePacedSender",
    array_kFieldTrialConfig_experiments_570,
  },
  {
    "WebRTC-VP8ConferenceTemporalLayers",
    array_kFieldTrialConfig_experiments_571,
  },
  {
    "WebRTC-Video-AV1EvenPayloadSizes",
    array_kFieldTrialConfig_experiments_572,
  },
  {
    "WebRTC-Video-CalculatePsnr",
    array_kFieldTrialConfig_experiments_573,
  },
  {
    "WebRTC-Video-EnableRetransmitAllLayers",
    array_kFieldTrialConfig_experiments_574,
  },
  {
    "WebRTC-Video-PerSsrcKeyframes",
    array_kFieldTrialConfig_experiments_575,
  },
  {
    "WebRTC-Vp9ExternalRefCtrl",
    array_kFieldTrialConfig_experiments_576,
  },
  {
    "WebRTC-ZeroPlayoutDelay",
    array_kFieldTrialConfig_experiments_577,
  },
  {
    "WebRtcNeuralResidualEchoEstimationAsyncInit",
    array_kFieldTrialConfig_experiments_578,
  },
  {
    "WebRtcVoiceIsolation",
    array_kFieldTrialConfig_experiments_579,
  },
  {
    "WebUIInProcessResourceLoading",
    array_kFieldTrialConfig_experiments_580,
  },
  {
    "WebUIReloadButtonStudy",
    array_kFieldTrialConfig_experiments_581,
  },
  {
    "WebrtcEncodeReadbackOptimization",
    array_kFieldTrialConfig_experiments_582,
  },
  {
    "WhatsNewHats",
    array_kFieldTrialConfig_experiments_583,
  },
  {
    "WidevinePersistentLicenseSupport",
    array_kFieldTrialConfig_experiments_584,
  },
  {
    "WinIsolatedProcess",
    array_kFieldTrialConfig_experiments_585,
  },
  {
    "WinSboxCsrssLockdown",
    array_kFieldTrialConfig_experiments_586,
  },
  {
    "WinSboxNoFakeGdiInit",
    array_kFieldTrialConfig_experiments_587,
  },
  {
    "XMLParsingRust",
    array_kFieldTrialConfig_experiments_588,
  },
  {
    "XMLParsingRustNonXslt",
    array_kFieldTrialConfig_experiments_589,
  },
  {
    "XSLTSpecialTrial",
    array_kFieldTrialConfig_experiments_590,
  },
  {
    "ZPSPrefetchDebouncingDesktop",
    array_kFieldTrialConfig_experiments_591,
  },
  {
    "ZstdForCrossSiteSpeculationRulesPrefetch",
    array_kFieldTrialConfig_experiments_592,
  },
};
const FieldTrialTestingConfig kFieldTrialConfig = {
  array_kFieldTrialConfig_studies,
};

}  // namespace variations
