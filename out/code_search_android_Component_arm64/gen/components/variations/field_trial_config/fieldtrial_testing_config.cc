// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE SCHEMA DEFINITION AND DESCRIPTION IN
//   field_trial_testing_config_schema.json
//   fieldtrial_testing_config.json
// using json_to_struct.py. DO NOT EDIT.

#include "fieldtrial_testing_config.h"

namespace variations {


const char* const array_kFieldTrialConfig_enable_features_523[] = {
      "ZstdForCrossSiteSpeculationRulesPrefetch",
};
const Study::Platform array_kFieldTrialConfig_platforms_572[] = {
      Study::PLATFORM_ANDROID,
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
      "ZeroSuggestPrefetchOnPageLoadAndTabSwitch",
};
const Study::Platform array_kFieldTrialConfig_platforms_571[] = {
      Study::PLATFORM_ANDROID,
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
      array_kFieldTrialConfig_enable_features_522,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_disable_features_34[] = {
      "ZeroSuggestPrefetchDebouncing",
      "ZeroSuggestPrefetchingOnWeb",
};
const char* const array_kFieldTrialConfig_enable_features_521[] = {
      "AblateSearchProviderWarmup",
      "ZeroSuggestPrefetchingOnSRP",
};
const Study::Platform array_kFieldTrialConfig_platforms_570[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_570[] = {
    {
      "Enabled_PrefetchingOnSRP_Warmup_Ablation",
      array_kFieldTrialConfig_platforms_570,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_521,
      array_kFieldTrialConfig_disable_features_34,
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_520[] = {
      "YieldWithInputHint",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_160[] = {
      {
        "poll_interval_ms",
        "1",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_569[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_569[] = {
    {
      "EnabledThrottling0ms",
      array_kFieldTrialConfig_platforms_569,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_160,
      array_kFieldTrialConfig_enable_features_520,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_disable_features_33[] = {
      "XSLT",
};
const char* const array_kFieldTrialConfig_enable_features_519[] = {
      "XSLTSpecialTrial",
};
const Study::Platform array_kFieldTrialConfig_platforms_568[] = {
      Study::PLATFORM_ANDROID,
      Study::PLATFORM_ANDROID_WEBVIEW,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_568[] = {
    {
      "Disabled",
      array_kFieldTrialConfig_platforms_568,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_519,
      array_kFieldTrialConfig_disable_features_33,
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_518[] = {
      "XMLRustForNonXslt",
};
const Study::Platform array_kFieldTrialConfig_platforms_567[] = {
      Study::PLATFORM_ANDROID,
      Study::PLATFORM_ANDROID_WEBVIEW,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_567[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_567,
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
      "XMLParsingRust",
};
const Study::Platform array_kFieldTrialConfig_platforms_566[] = {
      Study::PLATFORM_ANDROID,
      Study::PLATFORM_ANDROID_WEBVIEW,
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
      "WebViewSingleSharedContextState",
};
const Study::Platform array_kFieldTrialConfig_platforms_565[] = {
      Study::PLATFORM_ANDROID_WEBVIEW,
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
      array_kFieldTrialConfig_enable_features_516,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_disable_features_32[] = {
      "BreakoutBoxConversionWithoutSinkSignal",
      "MediaFoundationD3DVideoProcessing",
      "MediaFoundationSharedImageEncode",
};
const char* const array_kFieldTrialConfig_enable_features_515[] = {
      "WebrtcAcceleratedScaling",
};
const Study::Platform array_kFieldTrialConfig_platforms_564[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_564[] = {
    {
      "Enabled_acc_scaling",
      array_kFieldTrialConfig_platforms_564,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_515,
      array_kFieldTrialConfig_disable_features_32,
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_514[] = {
      "WebViewWarmupNetworkService",
};
const Study::Platform array_kFieldTrialConfig_platforms_563[] = {
      Study::PLATFORM_ANDROID_WEBVIEW,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_563[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_563,
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
      "WebViewVizDirectCompositorThreadIpcFrameSinkManager",
};
const Study::Platform array_kFieldTrialConfig_platforms_562[] = {
      Study::PLATFORM_ANDROID_WEBVIEW,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_562[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_562,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
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
      "WebViewUseWVLESForLayeredStudy",
};
const Study::Platform array_kFieldTrialConfig_platforms_561[] = {
      Study::PLATFORM_ANDROID_WEBVIEW,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_561[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_561,
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
      "WebViewUseMetricsUploadServiceOnlySdkRuntime",
};
const Study::Platform array_kFieldTrialConfig_platforms_560[] = {
      Study::PLATFORM_ANDROID_WEBVIEW,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_560[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_560,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
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
      "WebViewTestNonembeddedLowEntropySource",
};
const Study::Platform array_kFieldTrialConfig_platforms_559[] = {
      Study::PLATFORM_ANDROID_WEBVIEW,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_559[] = {
    {
      "Enabled_20260209",
      array_kFieldTrialConfig_platforms_559,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
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
      "WebViewSurfaceControl",
};
const Study::Platform array_kFieldTrialConfig_platforms_558[] = {
      Study::PLATFORM_ANDROID_WEBVIEW,
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
      "WebViewStaticMethodsNotTriggerStartup",
};
const Study::Platform array_kFieldTrialConfig_platforms_557[] = {
      Study::PLATFORM_ANDROID_WEBVIEW,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_557[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_557,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
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
      "StartupNonBlockingWebViewConstructor",
};
const Study::Platform array_kFieldTrialConfig_platforms_556[] = {
      Study::PLATFORM_ANDROID_WEBVIEW,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_556[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_556,
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
      "WebViewRemoveInstantAppSupport",
};
const Study::Platform array_kFieldTrialConfig_platforms_555[] = {
      Study::PLATFORM_ANDROID_WEBVIEW,
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
      "WebViewReducedSeedExpiration",
      "WebViewReducedSeedRequestPeriod",
};
const Study::Platform array_kFieldTrialConfig_platforms_554[] = {
      Study::PLATFORM_ANDROID_WEBVIEW,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_554[] = {
    {
      "BothEnabled",
      array_kFieldTrialConfig_platforms_554,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
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
      "WebViewPurgeMemoryInBackground",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_159[] = {
      {
        "purge_delay",
        "4m",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_553[] = {
      Study::PLATFORM_ANDROID_WEBVIEW,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_553[] = {
    {
      "Enabled_4m",
      array_kFieldTrialConfig_platforms_553,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_159,
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
      "WebViewProfileStoreNotTriggerStartup",
};
const Study::Platform array_kFieldTrialConfig_platforms_552[] = {
      Study::PLATFORM_ANDROID_WEBVIEW,
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
      "WebViewPrewarmDictionaryOnPreconnect",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_158[] = {
      {
        "CleanupMode",
        "events_only",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_551[] = {
      Study::PLATFORM_ANDROID_WEBVIEW,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_551[] = {
    {
      "Enabled_EventsOnly_20261007",
      array_kFieldTrialConfig_platforms_551,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_158,
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
      "PrefetchOffTheMainThread",
      "WebViewPrefetchOffTheMainThread",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_157[] = {
      {
        "update_missing_header_cache",
        "true",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_550[] = {
      Study::PLATFORM_ANDROID_WEBVIEW,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_550[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_550,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_157,
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
      "WebViewPrefetchHighestPrefetchPriority",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_156[] = {
      {
        "WebViewPrefetchHighestPrefetchPriorityBurstLimit",
        "10",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_549[] = {
      Study::PLATFORM_ANDROID_WEBVIEW,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_549[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_549,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_156,
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
      "WebViewPrefetchAheadOfPrerender",
};
const Study::Platform array_kFieldTrialConfig_platforms_548[] = {
      Study::PLATFORM_ANDROID_WEBVIEW,
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
      "WebViewOptInToGmsBindServiceOptimization",
};
const Study::Platform array_kFieldTrialConfig_platforms_547[] = {
      Study::PLATFORM_ANDROID_WEBVIEW,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_547[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_547,
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
      "WebViewMultiProfileSkipDefaultProfile",
};
const Study::Platform array_kFieldTrialConfig_platforms_546[] = {
      Study::PLATFORM_ANDROID_WEBVIEW,
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
      "WebViewMoveWorkToProviderInit",
};
const Study::Platform array_kFieldTrialConfig_platforms_545[] = {
      Study::PLATFORM_ANDROID_WEBVIEW,
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
      "WebViewMigrateVisitedLinks",
};
const Study::Platform array_kFieldTrialConfig_platforms_544[] = {
      Study::PLATFORM_ANDROID_WEBVIEW,
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
      "WebViewInitRendererDuringWebContentsCreation",
};
const Study::Platform array_kFieldTrialConfig_platforms_543[] = {
      Study::PLATFORM_ANDROID_WEBVIEW,
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
      "WebViewInitInConstructor",
};
const Study::Platform array_kFieldTrialConfig_platforms_542[] = {
      Study::PLATFORM_ANDROID_WEBVIEW,
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
      "WebViewIgnoreDuplicateNavs",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_155[] = {
      {
        "duplicate_nav_threshold",
        "3s",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_541[] = {
      Study::PLATFORM_ANDROID_WEBVIEW,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_541[] = {
    {
      "Enabled_threshold_3s",
      array_kFieldTrialConfig_platforms_541,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_155,
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
      "FencedFrames",
      "FencedFramesAPIChanges",
};
const Study::Platform array_kFieldTrialConfig_platforms_540[] = {
      Study::PLATFORM_ANDROID_WEBVIEW,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_540[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_540,
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
      "WebViewFasterGetDefaultUserAgent",
};
const Study::Platform array_kFieldTrialConfig_platforms_539[] = {
      Study::PLATFORM_ANDROID_WEBVIEW,
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
      "WebViewEnableDnsPlatform",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_154[] = {
      {
        "no_system",
        "true",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_538[] = {
      Study::PLATFORM_ANDROID_WEBVIEW,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_538[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_538,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_154,
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
      "WebViewEnableApiCallUserActions",
};
const Study::Platform array_kFieldTrialConfig_platforms_537[] = {
      Study::PLATFORM_ANDROID_WEBVIEW,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_537[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_537,
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
      "WebViewEarlyStartupTracing",
};
const Study::Platform array_kFieldTrialConfig_platforms_536[] = {
      Study::PLATFORM_ANDROID_WEBVIEW,
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
      array_kFieldTrialConfig_enable_features_487,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_disable_features_31[] = {
      "DisconnectWebSocketOnBFCache",
};
const Study::Platform array_kFieldTrialConfig_platforms_535[] = {
      Study::PLATFORM_ANDROID_WEBVIEW,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_535[] = {
    {
      "Disabled_EmergencyKillSwitch",
      array_kFieldTrialConfig_platforms_535,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      {},
      array_kFieldTrialConfig_disable_features_31,
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_disable_features_30[] = {
      "WebViewAwClassPreloader",
};
const Study::Platform array_kFieldTrialConfig_platforms_534[] = {
      Study::PLATFORM_ANDROID_WEBVIEW,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_534[] = {
    {
      "Disabled",
      array_kFieldTrialConfig_platforms_534,
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
const char* const array_kFieldTrialConfig_enable_features_486[] = {
      "WebViewContentRestrictionSupport",
};
const Study::Platform array_kFieldTrialConfig_platforms_533[] = {
      Study::PLATFORM_ANDROID_WEBVIEW,
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
      array_kFieldTrialConfig_enable_features_486,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_disable_features_29[] = {
      "ConstructableStylesheetCache",
};
const Study::Platform array_kFieldTrialConfig_platforms_532[] = {
      Study::PLATFORM_ANDROID_WEBVIEW,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_532[] = {
    {
      "Disabled",
      array_kFieldTrialConfig_platforms_532,
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
const char* const array_kFieldTrialConfig_enable_features_485[] = {
      "WebViewBoostRendererPriorityOnNavigation",
};
const Study::Platform array_kFieldTrialConfig_platforms_531[] = {
      Study::PLATFORM_ANDROID_WEBVIEW,
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
      "WebViewBackgroundTracingInit",
};
const Study::Platform array_kFieldTrialConfig_platforms_530[] = {
      Study::PLATFORM_ANDROID_WEBVIEW,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_530[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_530,
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
      "AndroidThreadPriority",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_153[] = {
      {
        "interactive",
        "-8",
      },
      {
        "presentation",
        "-8",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_529[] = {
      Study::PLATFORM_ANDROID_WEBVIEW,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_529[] = {
    {
      "WebViewAndroidThreadPriority",
      array_kFieldTrialConfig_platforms_529,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_153,
      array_kFieldTrialConfig_enable_features_483,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_disable_features_28[] = {
      "CacheCertVerification",
};
const Study::Platform array_kFieldTrialConfig_platforms_528[] = {
      Study::PLATFORM_ANDROID_WEBVIEW,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_528[] = {
    {
      "Disabled",
      array_kFieldTrialConfig_platforms_528,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      {},
      array_kFieldTrialConfig_disable_features_28,
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_482[] = {
      "EnableWebSigninLoadingDialog",
};
const Study::Platform array_kFieldTrialConfig_platforms_527[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_527[] = {
    {
      "Enabled_20260430",
      array_kFieldTrialConfig_platforms_527,
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
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_152[] = {
      {
        "max_post_decode_queue_size",
        "10",
      },
      {
        "reduce_steady_state_queue_size_threshold",
        "20",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_526[] = {
      Study::PLATFORM_ANDROID,
      Study::PLATFORM_ANDROID_WEBVIEW,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_526[] = {
    {
      "min_pacing:0ms,max_decode_queue_size:8,",
      array_kFieldTrialConfig_platforms_526,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_152,
      {},
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const Study::Platform array_kFieldTrialConfig_platforms_525[] = {
      Study::PLATFORM_ANDROID,
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
      {},
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const Study::Platform array_kFieldTrialConfig_platforms_524[] = {
      Study::PLATFORM_ANDROID,
      Study::PLATFORM_ANDROID_WEBVIEW,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_524[] = {
    {
      "Enabled,_20260702",
      array_kFieldTrialConfig_platforms_524,
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
const Study::Platform array_kFieldTrialConfig_platforms_523[] = {
      Study::PLATFORM_ANDROID,
      Study::PLATFORM_ANDROID_WEBVIEW,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_523[] = {
    {
      "Enabled,_20230607_BETA",
      array_kFieldTrialConfig_platforms_523,
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
const Study::Platform array_kFieldTrialConfig_platforms_522[] = {
      Study::PLATFORM_ANDROID,
      Study::PLATFORM_ANDROID_WEBVIEW,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_522[] = {
    {
      "Enabled,sampling_interval:1000ms",
      array_kFieldTrialConfig_platforms_522,
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
const Study::Platform array_kFieldTrialConfig_platforms_521[] = {
      Study::PLATFORM_ANDROID,
      Study::PLATFORM_ANDROID_WEBVIEW,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_521[] = {
    {
      "Enabled",
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
const Study::Platform array_kFieldTrialConfig_platforms_520[] = {
      Study::PLATFORM_ANDROID,
      Study::PLATFORM_ANDROID_WEBVIEW,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_520[] = {
    {
      "2_V1",
      array_kFieldTrialConfig_platforms_520,
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
const Study::Platform array_kFieldTrialConfig_platforms_519[] = {
      Study::PLATFORM_ANDROID,
      Study::PLATFORM_ANDROID_WEBVIEW,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_519[] = {
    {
      "Enabled,max_queue_time:75ms,_V4",
      array_kFieldTrialConfig_platforms_519,
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
const Study::Platform array_kFieldTrialConfig_platforms_518[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_518[] = {
    {
      "Enabled,_20221205",
      array_kFieldTrialConfig_platforms_518,
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
const Study::Platform array_kFieldTrialConfig_platforms_517[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_517[] = {
    {
      "262144,_V1",
      array_kFieldTrialConfig_platforms_517,
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
const Study::Platform array_kFieldTrialConfig_platforms_516[] = {
      Study::PLATFORM_ANDROID,
      Study::PLATFORM_ANDROID_WEBVIEW,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_516[] = {
    {
      "Enabled,_20251209",
      array_kFieldTrialConfig_platforms_516,
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
const Study::Platform array_kFieldTrialConfig_platforms_515[] = {
      Study::PLATFORM_ANDROID,
      Study::PLATFORM_ANDROID_WEBVIEW,
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
      {},
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const Study::Platform array_kFieldTrialConfig_platforms_514[] = {
      Study::PLATFORM_ANDROID,
      Study::PLATFORM_ANDROID_WEBVIEW,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_514[] = {
    {
      "num_stddev_delay_clamp:5,num_stddev_delay_outlier:2,num_stddev_size_outlier:2,estimate_noise_when_congested:false,_20230118_BETA",
      array_kFieldTrialConfig_platforms_514,
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
const Study::Platform array_kFieldTrialConfig_platforms_513[] = {
      Study::PLATFORM_ANDROID,
      Study::PLATFORM_ANDROID_WEBVIEW,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_513[] = {
    {
      "Enabled,ResolveStunHostnameForFamily:true,PreferGlobalIPv6Address:true,DiversifyIpv6Interfaces:true,_20220929",
      array_kFieldTrialConfig_platforms_513,
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
const Study::Platform array_kFieldTrialConfig_platforms_512[] = {
      Study::PLATFORM_ANDROID,
      Study::PLATFORM_ANDROID_WEBVIEW,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_512[] = {
    {
      "Enabled_20260625",
      array_kFieldTrialConfig_platforms_512,
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
const Study::Platform array_kFieldTrialConfig_platforms_511[] = {
      Study::PLATFORM_ANDROID,
      Study::PLATFORM_ANDROID_WEBVIEW,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_511[] = {
    {
      "enabled:true,low_overhead_lower_bound:500ms,low_overhead_upper_bound:1500ms,high_overhead_lower_bound:500ms,high_overhead_upper_bound:1500ms,asynchronous_evaluation:true",
      array_kFieldTrialConfig_platforms_511,
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
const Study::Platform array_kFieldTrialConfig_platforms_510[] = {
      Study::PLATFORM_ANDROID,
      Study::PLATFORM_ANDROID_WEBVIEW,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_510[] = {
    {
      "enabled:true,_V1",
      array_kFieldTrialConfig_platforms_510,
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
const Study::Platform array_kFieldTrialConfig_platforms_509[] = {
      Study::PLATFORM_ANDROID,
      Study::PLATFORM_ANDROID_WEBVIEW,
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
      {},
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const Study::Platform array_kFieldTrialConfig_platforms_508[] = {
      Study::PLATFORM_ANDROID,
      Study::PLATFORM_ANDROID_WEBVIEW,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_508[] = {
    {
      "network_state_probe_duration:200ms,network_state_interval:10s,min_probe_delta:20ms,est_lower_than_network_ratio:0.7,skip_if_est_larger_than_fraction_of_max:0.9,alr_scale:1.5,step_size:1.5",
      array_kFieldTrialConfig_platforms_508,
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
const Study::Platform array_kFieldTrialConfig_platforms_507[] = {
      Study::PLATFORM_ANDROID,
      Study::PLATFORM_ANDROID_WEBVIEW,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_507[] = {
    {
      "Enabled:true,InstantUpperBoundBwBalance:100kbps,InherentLossUpperBoundBwBalance:100kbps,LossThresholdOfHighBandwidthPreference:0.2,UseByteLossRate:true,ObservationWindowSize:15,BwRampupUpperBoundFactor:1.5,BwRampupUpperBoundInHoldFactor:1.2,BwRampupUpperBoundHoldThreshold:1.3,BoundBestCandidate:true,UseInStartPhase:true,LowerBoundByAckedRateFactor:1.0,HoldDurationFactor:2.0,PaddingDuration:2000ms,PaceAtLossBasedEstimate:true",
      array_kFieldTrialConfig_platforms_507,
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
const Study::Platform array_kFieldTrialConfig_platforms_506[] = {
      Study::PLATFORM_ANDROID,
      Study::PLATFORM_ANDROID_WEBVIEW,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_506[] = {
    {
      "burst:20ms,_V1",
      array_kFieldTrialConfig_platforms_506,
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
const Study::Platform array_kFieldTrialConfig_platforms_505[] = {
      Study::PLATFORM_ANDROID,
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
      {},
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const Study::Platform array_kFieldTrialConfig_platforms_504[] = {
      Study::PLATFORM_ANDROID,
      Study::PLATFORM_ANDROID_WEBVIEW,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_504[] = {
    {
      "enable_stable_playout_delay:true,reinit_after_expands:1000",
      array_kFieldTrialConfig_platforms_504,
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
const char* const array_kFieldTrialConfig_enable_features_481[] = {
      "WebOtpBackendAuto",
};
const Study::Platform array_kFieldTrialConfig_platforms_503[] = {
      Study::PLATFORM_ANDROID,
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
      "WebHistoryUseNewApi",
};
const Study::Platform array_kFieldTrialConfig_platforms_502[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_502[] = {
    {
      "Enabled_20260617",
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
      "WebHidOnDesktopAndroidServiceWorkers",
};
const Study::FormFactor array_kFieldTrialConfig_form_factors_9[] = {
      Study::DESKTOP,
};
const Study::Platform array_kFieldTrialConfig_platforms_501[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_501[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_501,
      array_kFieldTrialConfig_form_factors_9,
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
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
      "CollectWebGPUSupportMetrics",
};
const Study::Platform array_kFieldTrialConfig_platforms_500[] = {
      Study::PLATFORM_ANDROID,
      Study::PLATFORM_ANDROID_WEBVIEW,
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
      "WebGPUService",
};
const Study::Platform array_kFieldTrialConfig_platforms_499[] = {
      Study::PLATFORM_ANDROID,
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
const char* const array_kFieldTrialConfig_enable_features_476[] = {
      "OffscreenCanvasPropagateVisibility",
      "WebGLDeleteBuffersInBackground",
      "WebGLDiscardBackBuffer",
};
const Study::Platform array_kFieldTrialConfig_platforms_498[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_498[] = {
    {
      "Enabled_20260828",
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
      "WebAppShortEdgesCutoutMode",
};
const Study::Platform array_kFieldTrialConfig_platforms_497[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_497[] = {
    {
      "Enabled",
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
      "WebApkShellUpdate",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_151[] = {
      {
        "version",
        "166",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_496[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_496[] = {
    {
      "Enabled_WebApkShellUpdate",
      array_kFieldTrialConfig_platforms_496,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_151,
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
      "VulkanImaginationMSAA",
};
const Study::Platform array_kFieldTrialConfig_platforms_495[] = {
      Study::PLATFORM_ANDROID,
      Study::PLATFORM_ANDROID_WEBVIEW,
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
      "VisitedURLRankingService",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_150[] = {
      {
        "VisitedURLRankingFetchDurationInHoursParam",
        "168",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_494[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_494[] = {
    {
      "VisitedURLRankingService",
      array_kFieldTrialConfig_platforms_494,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_150,
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
      "VerifyQWACs",
};
const Study::Platform array_kFieldTrialConfig_platforms_493[] = {
      Study::PLATFORM_ANDROID,
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
      "VerifyDidCommitParams",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_149[] = {
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
const Study::Platform array_kFieldTrialConfig_platforms_492[] = {
      Study::PLATFORM_ANDROID,
      Study::PLATFORM_ANDROID_WEBVIEW,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_492[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_492,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_149,
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
      "VariationsStickyNoopTest",
};
const Study::Platform array_kFieldTrialConfig_platforms_491[] = {
      Study::PLATFORM_ANDROID,
      Study::PLATFORM_ANDROID_WEBVIEW,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_491[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_491,
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
      "VariationsRuntimeMutability",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_148[] = {
      {
        "rotate_uma_log",
        "true",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_490[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_490[] = {
    {
      "EnabledWithRotate",
      array_kFieldTrialConfig_platforms_490,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_148,
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
      "HistogramDenylist",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_147[] = {
      {
        "histogram_denylist",
        "\"\"",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_489[] = {
      Study::PLATFORM_ANDROID,
      Study::PLATFORM_ANDROID_WEBVIEW,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_489[] = {
    {
      "Enabled_20260901",
      array_kFieldTrialConfig_platforms_489,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_147,
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
      "V8Flag_turbolev",
};
const Study::Platform array_kFieldTrialConfig_platforms_488[] = {
      Study::PLATFORM_ANDROID,
      Study::PLATFORM_ANDROID_WEBVIEW,
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
      "V8Flag_sqrt_allocation_limits",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_146[] = {
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
const Study::Platform array_kFieldTrialConfig_platforms_487[] = {
      Study::PLATFORM_ANDROID,
      Study::PLATFORM_ANDROID_WEBVIEW,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_487[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_487,
      {},
      std::nullopt,
      true,
      nullptr,
      array_kFieldTrialConfig_params_146,
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
      "V8Flag_sparkplug_plus",
};
const Study::Platform array_kFieldTrialConfig_platforms_486[] = {
      Study::PLATFORM_ANDROID,
      Study::PLATFORM_ANDROID_WEBVIEW,
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
      array_kFieldTrialConfig_enable_features_464,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const Study::Platform array_kFieldTrialConfig_platforms_485[] = {
      Study::PLATFORM_ANDROID,
      Study::PLATFORM_ANDROID_WEBVIEW,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_485[] = {
    {
      "DefaultX",
      array_kFieldTrialConfig_platforms_485,
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
const char* const array_kFieldTrialConfig_disable_features_27[] = {
      "V8SlowHistograms",
};
const Study::Platform array_kFieldTrialConfig_platforms_484[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_484[] = {
    {
      "Control",
      array_kFieldTrialConfig_platforms_484,
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
const char* const array_kFieldTrialConfig_enable_features_463[] = {
      "V8SideStepTransitions",
};
const Study::Platform array_kFieldTrialConfig_platforms_483[] = {
      Study::PLATFORM_ANDROID,
      Study::PLATFORM_ANDROID_WEBVIEW,
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
      "V8PreconfigureOldGen",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_145[] = {
      {
        "V8PreconfigureOldGenSize",
        "16",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_482[] = {
      Study::PLATFORM_ANDROID,
      Study::PLATFORM_ANDROID_WEBVIEW,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_482[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_482,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_145,
      array_kFieldTrialConfig_enable_features_462,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const Study::Platform array_kFieldTrialConfig_platforms_481[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_481[] = {
    {
      "Disabled",
      array_kFieldTrialConfig_platforms_481,
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
const char* const array_kFieldTrialConfig_enable_features_461[] = {
      "V8MaxValidPolymorphicMapCount",
};
const Study::Platform array_kFieldTrialConfig_platforms_480[] = {
      Study::PLATFORM_ANDROID,
      Study::PLATFORM_ANDROID_WEBVIEW,
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
      array_kFieldTrialConfig_enable_features_461,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_disable_features_26[] = {
      "ForwardMemoryPressureToBlinkIsolates",
};
const char* const array_kFieldTrialConfig_enable_features_460[] = {
      "V8Flag_freeze_forces_marking_finalization",
      "V8Flag_memory_reducer_limit_based",
};
const Study::Platform array_kFieldTrialConfig_platforms_479[] = {
      Study::PLATFORM_ANDROID,
      Study::PLATFORM_ANDROID_WEBVIEW,
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
      array_kFieldTrialConfig_enable_features_460,
      array_kFieldTrialConfig_disable_features_26,
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_459[] = {
      "UseCaseLongerInputWindow",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_144[] = {
      {
        "use_case_longer_input_window_extension_ms",
        "100ms",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_478[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_478[] = {
    {
      "Enabled_100_2026_04_20",
      array_kFieldTrialConfig_platforms_478,
      {},
      std::nullopt,
      true,
      nullptr,
      array_kFieldTrialConfig_params_144,
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
      "V8Flag_homomorphic_ic",
};
const Study::Platform array_kFieldTrialConfig_platforms_477[] = {
      Study::PLATFORM_ANDROID,
      Study::PLATFORM_ANDROID_WEBVIEW,
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
      "V8Flag_intl_date_time_pattern_generator_cache_eviction",
};
const Study::Platform array_kFieldTrialConfig_platforms_476[] = {
      Study::PLATFORM_ANDROID,
      Study::PLATFORM_ANDROID_WEBVIEW,
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
      "UtfConversionAsciiFastPath",
};
const Study::Platform array_kFieldTrialConfig_platforms_475[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_475[] = {
    {
      "Enabled_20260810",
      array_kFieldTrialConfig_platforms_475,
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
      "UseRustCborWriter",
};
const Study::Platform array_kFieldTrialConfig_platforms_474[] = {
      Study::PLATFORM_ANDROID,
      Study::PLATFORM_ANDROID_WEBVIEW,
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
      "UseRustCborParser",
};
const Study::Platform array_kFieldTrialConfig_platforms_473[] = {
      Study::PLATFORM_ANDROID,
      Study::PLATFORM_ANDROID_WEBVIEW,
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
      "UseRestrictionsManagerInAppRestrictionsProvider",
};
const Study::Platform array_kFieldTrialConfig_platforms_472[] = {
      Study::PLATFORM_ANDROID,
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
      "PersistentCacheCollectionWalMode",
      "UsePersistentCacheForCodeCache",
};
const Study::Platform array_kFieldTrialConfig_platforms_471[] = {
      Study::PLATFORM_ANDROID,
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
      "UseNewEtc1Decoder",
};
const Study::Platform array_kFieldTrialConfig_platforms_470[] = {
      Study::PLATFORM_ANDROID,
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
      "UseFrameIntervalDeciderAdaptiveFrameRate",
};
const Study::Platform array_kFieldTrialConfig_platforms_469[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_469[] = {
    {
      "Enabled_20260924",
      array_kFieldTrialConfig_platforms_469,
      {},
      std::nullopt,
      std::nullopt,
      "15",
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
      "UseAutomaticSyncTokenManagement",
};
const Study::Platform array_kFieldTrialConfig_platforms_468[] = {
      Study::PLATFORM_ANDROID,
      Study::PLATFORM_ANDROID_WEBVIEW,
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
      "AllowMultipleSwapsPerVsync",
      "UseAndroidCustomFrameDeadlines",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_143[] = {
      {
        "presentation_offset",
        "0",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_467[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_467[] = {
    {
      "Enabled_PresentationOffset0",
      array_kFieldTrialConfig_platforms_467,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_143,
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
      "UploadReportOnProfileOpen",
};
const Study::Platform array_kFieldTrialConfig_platforms_466[] = {
      Study::PLATFORM_ANDROID,
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
      "UnthrottleAsyncTouchMoves",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_142[] = {
      {
        "policy",
        "unthrottled_always",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_465[] = {
      Study::PLATFORM_ANDROID,
      Study::PLATFORM_ANDROID_WEBVIEW,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_465[] = {
    {
      "Enabled_UnthrottledAlways",
      array_kFieldTrialConfig_platforms_465,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_142,
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
      "GlobalPrivacyControlApi",
      "UniversalOptOutSettings",
};
const Study::Platform array_kFieldTrialConfig_platforms_464[] = {
      Study::PLATFORM_ANDROID,
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
      "TruncateSearchUrlOq",
      "TruncateSearchUrlQ",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_141[] = {
      {
        "truncate_search_url_oq_length",
        "1024",
      },
      {
        "truncate_search_url_q_length",
        "52224",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_463[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_463[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_463,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_141,
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
      "TrimMemoryBackgroundIsSevere",
};
const Study::Platform array_kFieldTrialConfig_platforms_462[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_462[] = {
    {
      "Enabled_20261020",
      array_kFieldTrialConfig_platforms_462,
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
      "TreesInViz",
};
const Study::Platform array_kFieldTrialConfig_platforms_461[] = {
      Study::PLATFORM_ANDROID,
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
      "TransportSecurityFileWriterSchedule",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_140[] = {
      {
        "commit_interval",
        "1m",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_460[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_460[] = {
    {
      "Enabled1Minute_20241105",
      array_kFieldTrialConfig_platforms_460,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_140,
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
      "TranslateElementExperimentFeatures",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_139[] = {
      {
        "ef",
        "ests,eadt",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_459[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_459[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_459,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_139,
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
      "TrackAnimatedSourcesForInheritedProperties",
};
const Study::Platform array_kFieldTrialConfig_platforms_458[] = {
      Study::PLATFORM_ANDROID,
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
      "TouchToSearchCallout",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_138[] = {
      {
        "text_variant",
        "true",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_457[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_457[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_457,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_138,
      array_kFieldTrialConfig_enable_features_438,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_disable_features_25[] = {
      "BrowsingTopics",
};
const Study::Platform array_kFieldTrialConfig_platforms_456[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_456[] = {
    {
      "Disabled",
      array_kFieldTrialConfig_platforms_456,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      {},
      array_kFieldTrialConfig_disable_features_25,
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_437[] = {
      "ToolbarSnapshotRefactor",
};
const Study::Platform array_kFieldTrialConfig_platforms_455[] = {
      Study::PLATFORM_ANDROID,
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
      "ToolbarCaptureFixForSPAs",
};
const Study::Platform array_kFieldTrialConfig_platforms_454[] = {
      Study::PLATFORM_ANDROID,
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
      "ThrottleRepeatedNoDamageFrames",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_137[] = {
      {
        "repeated_no_damage_frame_throttling_threshold1",
        "360",
      },
      {
        "repeated_no_damage_frame_throttling_threshold2",
        "60",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_453[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_453[] = {
    {
      "Enabled_20260903",
      array_kFieldTrialConfig_platforms_453,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_137,
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
      "ThreeDSecureTelemetry",
};
const Study::Platform array_kFieldTrialConfig_platforms_452[] = {
      Study::PLATFORM_ANDROID,
      Study::PLATFORM_ANDROID_WEBVIEW,
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
      "ThreadPoolForegroundBlockingTimeouts",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_136[] = {
      {
        "BlockedWorkersPoll",
        "600ms",
      },
      {
        "MayBlockThreshold",
        "500ms",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_451[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_451[] = {
    {
      "Enabled_Moderate",
      array_kFieldTrialConfig_platforms_451,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_136,
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
      "TextClassifierTimeout",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_135[] = {
      {
        "timeout_ms",
        "200",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_450[] = {
      Study::PLATFORM_ANDROID,
      Study::PLATFORM_ANDROID_WEBVIEW,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_450[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_450,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_135,
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
      "IPH_TabSwitcherButtonSwitchIncognito",
};
const Study::Platform array_kFieldTrialConfig_platforms_449[] = {
      Study::PLATFORM_ANDROID,
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
      "TabStorageSqlitePrototype",
};
const Study::Platform array_kFieldTrialConfig_platforms_448[] = {
      Study::PLATFORM_ANDROID,
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
      "TabSharingToolbarAndroid",
};
const Study::Platform array_kFieldTrialConfig_platforms_447[] = {
      Study::PLATFORM_ANDROID,
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
      "ContextualPageActionTabGrouping",
      "GroupSuggestionService",
      "TabSwitcherGroupSuggestionsAndroid",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_134[] = {
      {
        "consecutive_computation_delay_sec",
        "0",
      },
      {
        "create_suggestions_promotion_ui",
        "false",
      },
      {
        "group_suggestion_enable_similar_source",
        "true",
      },
      {
        "group_suggestion_enable_switch_between",
        "true",
      },
      {
        "group_suggestion_enable_tab_switcher_only",
        "false",
      },
      {
        "group_suggestion_trigger_calculation_on_page_load",
        "false",
      },
      {
        "show_when_not_clicked_in_last_day",
        "false",
      },
      {
        "throttle_on_new_tab",
        "false",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_446[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_446[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_446,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_134,
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
      "SyncUsePropagatedAccessToken",
};
const Study::Platform array_kFieldTrialConfig_platforms_445[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_445[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_445,
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
      "SyncTrustedVaultErrorMessageDuration",
};
const Study::Platform array_kFieldTrialConfig_platforms_444[] = {
      Study::PLATFORM_ANDROID,
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
      "SyncIncreaseNudgeDelayForSingleClient",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_133[] = {
      {
        "SyncIncreaseNudgeDelayForSingleClientFactor",
        "2.0",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_443[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_443[] = {
    {
      "EnabledFactor2",
      array_kFieldTrialConfig_platforms_443,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_133,
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
      "SuspiciousSiteWarningSurvey",
      "SuspiciousSiteWarnings",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_132[] = {
      {
        "SuspiciousSiteWarningSurveyHeedTriggerId",
        "LZD24fmuf0tK1KeaPYj0Z79hw2qC",
      },
      {
        "SuspiciousSiteWarningSurveyProceedTriggerId",
        "HguD8vrc50tK1KeaPYj0R37AzmWa",
      },
      {
        "probability",
        "1.0",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_442[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_442[] = {
    {
      "Enabled_20260928",
      array_kFieldTrialConfig_platforms_442,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_132,
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
      "SubmenusInAppMenuLff",
};
const Study::Platform array_kFieldTrialConfig_platforms_441[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_441[] = {
    {
      "Enabled_20260714",
      array_kFieldTrialConfig_platforms_441,
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
      "StreamlineRendererInit",
};
const Study::Platform array_kFieldTrialConfig_platforms_440[] = {
      Study::PLATFORM_ANDROID,
      Study::PLATFORM_ANDROID_WEBVIEW,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_440[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_440,
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
      "stop-in-background",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_131[] = {
      {
        "DelayForBackgroundTabFreezingMills",
        "1800000",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_439[] = {
      Study::PLATFORM_ANDROID_WEBVIEW,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_439[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_439,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_131,
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
      "StatefulMemoryPressure",
};
const Study::Platform array_kFieldTrialConfig_platforms_438[] = {
      Study::PLATFORM_ANDROID,
      Study::PLATFORM_ANDROID_WEBVIEW,
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
      "SplitCacheByNetworkIsolationKey",
};
const Study::Platform array_kFieldTrialConfig_platforms_437[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_437[] = {
    {
      "EnableFeatureForTests",
      array_kFieldTrialConfig_platforms_437,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
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
      "DisablePartialStorageCleanupForGPUDiskCache",
      "LogicalClearHttpCache",
};
const Study::Platform array_kFieldTrialConfig_platforms_436[] = {
      Study::PLATFORM_ANDROID,
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
      "SpeculativeServiceWorkerWarmUp",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_130[] = {
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
const Study::Platform array_kFieldTrialConfig_platforms_435[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_435[] = {
    {
      "Enabled_05m_05c_20250214",
      array_kFieldTrialConfig_platforms_435,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_130,
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
      "PreventDuplicateImageDecodes",
      "SpeculativeImageDecodes",
};
const Study::Platform array_kFieldTrialConfig_platforms_434[] = {
      Study::PLATFORM_ANDROID,
      Study::PLATFORM_ANDROID_WEBVIEW,
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
      "SmartZoom",
};
const Study::Platform array_kFieldTrialConfig_platforms_433[] = {
      Study::PLATFORM_ANDROID,
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
      "SkipListAccountsWithoutGaiaCookies",
};
const Study::Platform array_kFieldTrialConfig_platforms_432[] = {
      Study::PLATFORM_ANDROID,
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
      "SkipImageClassificationScoringForNonPageLoadTriggers",
};
const Study::Platform array_kFieldTrialConfig_platforms_431[] = {
      Study::PLATFORM_ANDROID,
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
      "SkipDisabledGLContextOnDrDC",
};
const Study::Platform array_kFieldTrialConfig_platforms_430[] = {
      Study::PLATFORM_ANDROID,
      Study::PLATFORM_ANDROID_WEBVIEW,
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
      "SkiaGraphite",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_129[] = {
      {
        "dawn_backend_validation",
        "false",
      },
      {
        "dawn_skip_validation",
        "true",
      },
};
const Study::FormFactor array_kFieldTrialConfig_form_factors_8[] = {
      Study::PHONE,
      Study::TABLET,
};
const Study::Platform array_kFieldTrialConfig_platforms_429[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_429[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_429,
      array_kFieldTrialConfig_form_factors_8,
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_129,
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
      "SingleAxisScrollContainers",
};
const Study::Platform array_kFieldTrialConfig_platforms_428[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_428[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_428,
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
      "SimpleCachePrefetchExperiment2",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_128[] = {
      {
        "FullPrefetchBytes",
        "32768",
      },
      {
        "PrefetchDiskCacheOnly",
        "true",
      },
      {
        "TrailerPrefetchSpeculativeBytes",
        "10240",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_427[] = {
      Study::PLATFORM_ANDROID,
      Study::PLATFORM_ANDROID_WEBVIEW,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_427[] = {
    {
      "Enabled_32KiB",
      array_kFieldTrialConfig_platforms_427,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_128,
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
      "SimdutfBase64Encode",
};
const Study::Platform array_kFieldTrialConfig_platforms_426[] = {
      Study::PLATFORM_ANDROID,
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
      "SigninButtonProfileMenuRefinements",
};
const Study::Platform array_kFieldTrialConfig_platforms_425[] = {
      Study::PLATFORM_ANDROID,
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
      "SigninButtonProfileMenu",
};
const Study::Platform array_kFieldTrialConfig_platforms_424[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_424[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_424,
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
      "ShutdownPreNativeThreadPoolAfterStartup",
};
const Study::Platform array_kFieldTrialConfig_platforms_423[] = {
      Study::PLATFORM_ANDROID,
      Study::PLATFORM_ANDROID_WEBVIEW,
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
      "ShowSuggestionsOnAutofocus",
};
const Study::Platform array_kFieldTrialConfig_platforms_422[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_422[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_422,
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
      "DataSharingJoinOnly",
};
const Study::Platform array_kFieldTrialConfig_platforms_421[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_421[] = {
    {
      "JoinOnlyEnabled",
      array_kFieldTrialConfig_platforms_421,
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
      "SharedMemorySystemProfileMinidump",
};
const Study::Platform array_kFieldTrialConfig_platforms_420[] = {
      Study::PLATFORM_ANDROID,
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
      "IPH_SharedHighlightingBuilder",
      "IPH_SharedHighlightingReceiver",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_127[] = {
      {
        "availability",
        "any",
      },
      {
        "event_1",
        "name:iph_shared_highlighting_receiver_trigger;comparator:==0;window:7;storage:360",
      },
      {
        "event_trigger",
        "name:iph_shared_highlighting_receiver_trigger;comparator:<5;window:360;storage:360",
      },
      {
        "event_used",
        "name:iph_shared_highlighting_used;comparator:<2;window:360;storage:360",
      },
      {
        "session_rate",
        "any",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_419[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_419[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_419,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_127,
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
      "ShareEventArgsOnDispatch",
};
const Study::Platform array_kFieldTrialConfig_platforms_418[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_418[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_418,
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
      "SettingsInTab",
};
const Study::Platform array_kFieldTrialConfig_platforms_417[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_417[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_417,
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
      "ServiceWorkerSyntheticResponse",
      "URLLoaderUseProvidedResponseBodyStream",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_126[] = {
      {
        "off_main_thread",
        "network_service",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_416[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_416[] = {
    {
      "EnabledWithNetworkServiceDelegation",
      array_kFieldTrialConfig_platforms_416,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_126,
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
      "ServiceWorkerRaceNetworkRequestFallbackOnDisconnect",
};
const Study::Platform array_kFieldTrialConfig_platforms_415[] = {
      Study::PLATFORM_ANDROID,
      Study::PLATFORM_ANDROID_WEBVIEW,
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
      "ServiceWorkerRaceNetworkRequestDeprecateTwoPhaseWrite",
};
const Study::Platform array_kFieldTrialConfig_platforms_414[] = {
      Study::PLATFORM_ANDROID,
      Study::PLATFORM_ANDROID_WEBVIEW,
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
      "ServiceWorkerDumpWithoutCrashingOnStorageKeyMismatch",
};
const Study::Platform array_kFieldTrialConfig_platforms_413[] = {
      Study::PLATFORM_ANDROID,
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
      "ServiceWorkerDatabaseDoomOnMissingNextId",
};
const Study::Platform array_kFieldTrialConfig_platforms_412[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_412[] = {
    {
      "Enabled_20260901",
      array_kFieldTrialConfig_platforms_412,
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
const char* const array_kFieldTrialConfig_disable_features_24[] = {
      "ServeJavaCachedZeroSuggest",
};
const Study::Platform array_kFieldTrialConfig_platforms_411[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_411[] = {
    {
      "Disabled",
      array_kFieldTrialConfig_platforms_411,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      {},
      array_kFieldTrialConfig_disable_features_24,
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_393[] = {
      "SensorsAllowAskBlockPermissionModel",
};
const Study::Platform array_kFieldTrialConfig_platforms_410[] = {
      Study::PLATFORM_ANDROID,
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
      "SensitiveContent",
};
const Study::Platform array_kFieldTrialConfig_platforms_409[] = {
      Study::PLATFORM_ANDROID,
      Study::PLATFORM_ANDROID_WEBVIEW,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_409[] = {
    {
      "Enabled_20261016",
      array_kFieldTrialConfig_platforms_409,
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
      "SegmentationPlatformURLVisitResumptionRanker",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_125[] = {
      {
        "use_random_score",
        "true",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_408[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_408[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_408,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_125,
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
      "SearchSettingsUpdateV2",
};
const Study::Platform array_kFieldTrialConfig_platforms_407[] = {
      Study::PLATFORM_ANDROID,
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
      "ResamplingScrollEvents",
      "ScrollPredictorRefinedHasPrediction",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_124[] = {
      {
        "max_resample_time",
        "35ms",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_406[] = {
      Study::PLATFORM_ANDROID_WEBVIEW,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_406[] = {
    {
      "ResampleLimit35ms_WebView_20261001",
      array_kFieldTrialConfig_platforms_406,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_124,
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
      "ScrollJankV4MetricReportAndroidAppJankStats",
};
const Study::Platform array_kFieldTrialConfig_platforms_405[] = {
      Study::PLATFORM_ANDROID,
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
      array_kFieldTrialConfig_enable_features_388,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_disable_features_23[] = {
      "InputOnViz",
      "InputVizardSpeculativeTransfer",
      "ScrollPredictorRefinedHasPrediction",
      "UpdateScrollPredictorInputMapping",
      "WaitForLateScrollEvents",
};
const char* const array_kFieldTrialConfig_enable_features_387[] = {
      "ResamplingScrollEvents",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_123[] = {
      {
        "max_resample_time",
        "20ms",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_404[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_404[] = {
    {
      "Holdback_20260811",
      array_kFieldTrialConfig_platforms_404,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_123,
      array_kFieldTrialConfig_enable_features_387,
      array_kFieldTrialConfig_disable_features_23,
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_386[] = {
      "SandboxedProcessServiceLimitOnAndroid",
};
const Study::Platform array_kFieldTrialConfig_platforms_403[] = {
      Study::PLATFORM_ANDROID,
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
      "SafetyHubUnusedPermissionRevocationForAllSurfaces",
};
const Study::Platform array_kFieldTrialConfig_platforms_402[] = {
      Study::PLATFORM_ANDROID,
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
      "SafeBrowsingWaitForDnsForRealTimeLookup",
};
const Study::Platform array_kFieldTrialConfig_platforms_401[] = {
      Study::PLATFORM_ANDROID,
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
      "SafeBrowsingLocalListsUseSBv5",
};
const Study::Platform array_kFieldTrialConfig_platforms_400[] = {
      Study::PLATFORM_ANDROID,
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
      "SafeBrowsingDailyPhishingReportsLimit",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_122[] = {
      {
        "kMaxReportsPerIntervalESB",
        "10",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_399[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_399[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_399,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_122,
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
      "SaasUsageReporting",
};
const Study::Platform array_kFieldTrialConfig_platforms_398[] = {
      Study::PLATFORM_ANDROID,
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
      "SQLitePersistentCookieStoreEarlyInit",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_121[] = {
      {
        "check_disk",
        "true",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_397[] = {
      Study::PLATFORM_ANDROID,
      Study::PLATFORM_ANDROID_WEBVIEW,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_397[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_397,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_121,
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
      "SPCLocaleValidation",
};
const Study::Platform array_kFieldTrialConfig_platforms_396[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_396[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_396,
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
      "RustyIcoFeature",
};
const Study::Platform array_kFieldTrialConfig_platforms_395[] = {
      Study::PLATFORM_ANDROID,
      Study::PLATFORM_ANDROID_WEBVIEW,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_395[] = {
    {
      "RustyIcoExperiment",
      array_kFieldTrialConfig_platforms_395,
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
      "RustPhishingModelSetter",
};
const Study::Platform array_kFieldTrialConfig_platforms_394[] = {
      Study::PLATFORM_ANDROID,
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
      "RestrictPendingInputEventType",
};
const Study::Platform array_kFieldTrialConfig_platforms_393[] = {
      Study::PLATFORM_ANDROID,
      Study::PLATFORM_ANDROID_WEBVIEW,
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
      "InvalidateResourcesOnSizeChange",
      "ResourcePoolPreferExactSizeReuse",
};
const Study::Platform array_kFieldTrialConfig_platforms_392[] = {
      Study::PLATFORM_ANDROID,
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
      "ResampleScrollEventsForFling",
};
const Study::Platform array_kFieldTrialConfig_platforms_391[] = {
      Study::PLATFORM_ANDROID,
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
      "RequiresLoadIgnoreLimitsForDomWindowsOnly",
};
const Study::Platform array_kFieldTrialConfig_platforms_390[] = {
      Study::PLATFORM_ANDROID,
      Study::PLATFORM_ANDROID_WEBVIEW,
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
      "RendererProcessLimitOnAndroid",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_120[] = {
      {
        "count",
        "42",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_389[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_389[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_389,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_120,
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
      "ReduceMojoURLLoaderFactoryCloning",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_119[] = {
      {
        "UseLazyURLLoaderFactoryForServiceWorkerFallback",
        "true",
      },
      {
        "UseLazyURLLoaderFactoryForSubresourceProxying",
        "true",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_388[] = {
      Study::PLATFORM_ANDROID,
      Study::PLATFORM_ANDROID_WEBVIEW,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_388[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_388,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_119,
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
      "RedWarningSurveyAndroid",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_118[] = {
      {
        "RedWarningSurveyAndroidHeedTriggerId",
        "mEt9WGQW70tK1KeaPYj0PTxM5Wnt",
      },
      {
        "RedWarningSurveyAndroidProceedTriggerId",
        "wfaSygGGJ0tK1KeaPYj0WwvBHcxH",
      },
      {
        "probability",
        "1.0",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_387[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_387[] = {
    {
      "RedInterstitialAndroid_20260817",
      array_kFieldTrialConfig_platforms_387,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_118,
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
      "RecordLockAcquisitionTime",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_117[] = {
      {
        "RecordLockAcquisitionTimeAllowedThreads",
        "CrBrowserMain,CrRendererMain,CrGpuMain,VizCompositor,Compositor,BrowserIO,NetworkService,GPU.ForegroundWorker,GPU.BackgroundWorker,Renderer.ForegroundWorker,Renderer.BackgroundWorker,Browser.ForegroundWorker,Browser.BackgroundWorker",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_386[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_386[] = {
    {
      "Enabled_20260721",
      array_kFieldTrialConfig_platforms_386,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_117,
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
      "RebindServiceBatchApi",
      "RebindingChildServiceConnectionController",
};
const Study::Platform array_kFieldTrialConfig_platforms_385[] = {
      Study::PLATFORM_ANDROID,
      Study::PLATFORM_ANDROID_WEBVIEW,
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
      "RealboxVirtualFocusNavigation",
};
const Study::FormFactor array_kFieldTrialConfig_form_factors_7[] = {
      Study::DESKTOP,
};
const Study::Platform array_kFieldTrialConfig_platforms_384[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_384[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_384,
      array_kFieldTrialConfig_form_factors_7,
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
      "IPH_ReadAloudAppMenuFeature",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_116[] = {
      {
        "availability",
        "any",
      },
      {
        "event_trigger",
        "name:read_aloud_app_menu_iph_trigger;comparator:==0;window:30;storage:90",
      },
      {
        "event_used",
        "name:read_aloud_app_menu_pressed;comparator:==0;window:30;storage:90",
      },
      {
        "session_rate",
        "any",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_383[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_383[] = {
    {
      "ReadAloudAppMenuIPHEnabled",
      array_kFieldTrialConfig_platforms_383,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_116,
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
      "LoadingPredictorPrefetchUseReadAndDiscardBody",
};
const Study::Platform array_kFieldTrialConfig_platforms_382[] = {
      Study::PLATFORM_ANDROID,
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
      "QuicSocketSendBufferSize",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_115[] = {
      {
        "QuicSocketSendBufferSizeParam",
        "1048576",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_381[] = {
      Study::PLATFORM_ANDROID,
      Study::PLATFORM_ANDROID_WEBVIEW,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_381[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_381,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_115,
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
      "PushMessagingGcmEndpointWebpushPath",
};
const Study::Platform array_kFieldTrialConfig_platforms_380[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_380[] = {
    {
      "Enabled_Dogfood",
      array_kFieldTrialConfig_platforms_380,
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
      "PushMessagingDisallowSenderIDs",
};
const Study::Platform array_kFieldTrialConfig_platforms_379[] = {
      Study::PLATFORM_ANDROID,
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
      array_kFieldTrialConfig_enable_features_362,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_disable_features_22[] = {
      "AdInterestGroupAPI",
      "Fledge",
};
const Study::Platform array_kFieldTrialConfig_platforms_378[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_378[] = {
    {
      "Disabled_20260803",
      array_kFieldTrialConfig_platforms_378,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      {},
      array_kFieldTrialConfig_disable_features_22,
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_361[] = {
      "ProgressiveAccessibilityPhase2",
};
const Study::Platform array_kFieldTrialConfig_platforms_377[] = {
      Study::PLATFORM_ANDROID,
      Study::PLATFORM_ANDROID_WEBVIEW,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_377[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_377,
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
      "ProcessReuseOnPrerenderCOOPSwap",
};
const Study::Platform array_kFieldTrialConfig_platforms_376[] = {
      Study::PLATFORM_ANDROID,
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
      "ProcessHtmlDataImmediately",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_114[] = {
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
const Study::Platform array_kFieldTrialConfig_platforms_375[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_375[] = {
    {
      "AllChunks",
      array_kFieldTrialConfig_platforms_375,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_114,
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
      "ProactivePasswordProtection",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_113[] = {
      {
        "CsdProactivePasswordProtectionSampleRate",
        "1.0",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_374[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_374[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_374,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_113,
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
      "PrioritizeMainFrameNavigationNetworkResponse",
};
const Study::Platform array_kFieldTrialConfig_platforms_373[] = {
      Study::PLATFORM_ANDROID,
      Study::PLATFORM_ANDROID_WEBVIEW,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_373[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_373,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
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
      "PrewarmDisableOnStartup",
      "PrewarmZeroSuggestTrigger",
};
const Study::Platform array_kFieldTrialConfig_platforms_372[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_372[] = {
    {
      "Enabled_WithDisableOnStartup",
      array_kFieldTrialConfig_platforms_372,
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
      "PreviewHandwritingGesture",
};
const Study::Platform array_kFieldTrialConfig_platforms_371[] = {
      Study::PLATFORM_ANDROID,
      Study::PLATFORM_ANDROID_WEBVIEW,
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
      "PreventPasswordManagerOnFederatedLogin",
};
const Study::Platform array_kFieldTrialConfig_platforms_370[] = {
      Study::PLATFORM_ANDROID,
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
      "Prerender2FallbackPrefetchSpecRules",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_112[] = {
      {
        "kPrerender2FallbackPrefetchSchedulerPolicy",
        "Burst",
      },
      {
        "kPrerender2FallbackPrefetchUseBlockUntilHeadTimetout",
        "false",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_369[] = {
      Study::PLATFORM_ANDROID,
      Study::PLATFORM_ANDROID_WEBVIEW,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_369[] = {
    {
      "Enabled_NoTimeout_Burst",
      array_kFieldTrialConfig_platforms_369,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_112,
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
      "ApplySearchEngineTypeMigration",
      "PrepopulatedEnginesMigration",
};
const Study::Platform array_kFieldTrialConfig_platforms_368[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_368[] = {
    {
      "Enabled_20260320",
      array_kFieldTrialConfig_platforms_368,
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
      "PreloadingRespectUserAgentOverride",
      "RespectUserAgentOverrideInSearchPrefetch",
};
const Study::Platform array_kFieldTrialConfig_platforms_367[] = {
      Study::PLATFORM_ANDROID,
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
      "PreloadMediaEngagementData",
};
const Study::Platform array_kFieldTrialConfig_platforms_366[] = {
      Study::PLATFORM_ANDROID,
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
      "PrefetchUseContentRefactor",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_111[] = {
      {
        "prefetch_timeout_ms",
        "2000",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_365[] = {
      Study::PLATFORM_ANDROID_WEBVIEW,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_365[] = {
    {
      "Enabled_2000ms",
      array_kFieldTrialConfig_platforms_365,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_111,
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
      "PrefetchMultipleActiveSetSizeLimitForBase",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_110[] = {
      {
        "prefetch_multiple_active_set_size_limit_for_base_value",
        "2",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_364[] = {
      Study::PLATFORM_ANDROID,
      Study::PLATFORM_ANDROID_WEBVIEW,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_364[] = {
    {
      "Enabled_2",
      array_kFieldTrialConfig_platforms_364,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_110,
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
      "PrefetchCancelUnrelatedPrefetch",
      "PrefetchMatchResolverUnblockAsync",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_109[] = {
      {
        "prefetch_cancel_unrelated_prefetch_cancel_policy",
        "NotServable",
      },
      {
        "unblock_async_policy",
        "AsyncBlocked",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_363[] = {
      Study::PLATFORM_ANDROID,
      Study::PLATFORM_ANDROID_WEBVIEW,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_363[] = {
    {
      "Enabled_Cancel_NotServable",
      array_kFieldTrialConfig_platforms_363,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_109,
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
      "PrefetchActivationBeacon",
      "PrerenderActivationBeacon",
};
const Study::Platform array_kFieldTrialConfig_platforms_362[] = {
      Study::PLATFORM_ANDROID,
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
      "PreferWarmRendererProcess",
};
const Study::Platform array_kFieldTrialConfig_platforms_361[] = {
      Study::PLATFORM_ANDROID,
      Study::PLATFORM_ANDROID_WEBVIEW,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_361[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_361,
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
      "PredictionModelComponentDelivery",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_108[] = {
      {
        "targets",
        "20",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_360[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_360[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_360,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_108,
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
      "PreconnectManagerDirectFastPath",
};
const Study::Platform array_kFieldTrialConfig_platforms_359[] = {
      Study::PLATFORM_ANDROID,
      Study::PLATFORM_ANDROID_WEBVIEW,
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
      "PreconnectFromKeyedService",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_107[] = {
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
const Study::Platform array_kFieldTrialConfig_platforms_358[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_358[] = {
    {
      "EnabledWithOTRtrue_20250724_Stable",
      array_kFieldTrialConfig_platforms_358,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_107,
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
      "PreconnectOnTabCreation",
};
const Study::Platform array_kFieldTrialConfig_platforms_357[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_357[] = {
    {
      "Enabled_Nonstable_20230531",
      array_kFieldTrialConfig_platforms_357,
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
      "PrecomputeSiteInfo",
};
const Study::Platform array_kFieldTrialConfig_platforms_356[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_356[] = {
    {
      "Enabled_20260127",
      array_kFieldTrialConfig_platforms_356,
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
      "AddTLSServerHandshakePadding",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_106[] = {
      {
        "AddTLSServerHandshakePaddingBytes",
        "0",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_355[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_355[] = {
    {
      "Enabled_0",
      array_kFieldTrialConfig_platforms_355,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_106,
      array_kFieldTrialConfig_enable_features_339,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_disable_features_21[] = {
      "PolicyBlocklistProceedUntilResponse",
};
const Study::Platform array_kFieldTrialConfig_platforms_354[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_354[] = {
    {
      "Holdback",
      array_kFieldTrialConfig_platforms_354,
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
const char* const array_kFieldTrialConfig_enable_features_338[] = {
      "PointerLockOnAndroid",
};
const Study::Platform array_kFieldTrialConfig_platforms_353[] = {
      Study::PLATFORM_ANDROID,
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
      array_kFieldTrialConfig_enable_features_338,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_337[] = {
      "PervasiveSharedDictionaries",
};
const Study::Platform array_kFieldTrialConfig_platforms_352[] = {
      Study::PLATFORM_ANDROID,
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
      "PersonalContext",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_105[] = {
      {
        "personal_context_enable_fetch_context",
        "true",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_351[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_351[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_351,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_105,
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
      "PermissionsGestureGatedPrompts",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_104[] = {
      {
        "exclude_same_origin_navigations",
        "true",
      },
      {
        "mute_geolocation",
        "true",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_350[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_350[] = {
    {
      "MuteGeolocation",
      array_kFieldTrialConfig_platforms_350,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_104,
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
      "PermissionsAIv4",
};
const Study::Platform array_kFieldTrialConfig_platforms_349[] = {
      Study::PLATFORM_ANDROID,
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
      "PermissionPredictionsGeolocationAccuracy",
};
const Study::Platform array_kFieldTrialConfig_platforms_348[] = {
      Study::PLATFORM_ANDROID,
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
      "PeriodicScudoPurge",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_103[] = {
      {
        "ScudoBackgroundPurgeDelay",
        "10s",
      },
      {
        "ScudoEnableBackgroundPurge",
        "true",
      },
      {
        "ScudoEnableForegroundPeriodic",
        "true",
      },
      {
        "ScudoInitialPurgeDelay",
        "60s",
      },
      {
        "ScudoPeriodicPurgeInterval",
        "60s",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_347[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_347[] = {
    {
      "Enabled_PeriodicAndBackground",
      array_kFieldTrialConfig_platforms_347,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_103,
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
      "PaymentRequestEnforceLNAWithClientSecurityState",
};
const Study::Platform array_kFieldTrialConfig_platforms_346[] = {
      Study::PLATFORM_ANDROID,
      Study::PLATFORM_ANDROID_WEBVIEW,
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
      "PaymentHandlerDialogUseInitiatorInUrlLoad",
};
const Study::Platform array_kFieldTrialConfig_platforms_345[] = {
      Study::PLATFORM_ANDROID,
      Study::PLATFORM_ANDROID_WEBVIEW,
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
      "PauseMediaOnSystemSleepAndroid",
};
const Study::Platform array_kFieldTrialConfig_platforms_344[] = {
      Study::PLATFORM_ANDROID,
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
      "Path2DPaintCache",
};
const Study::Platform array_kFieldTrialConfig_platforms_343[] = {
      Study::PLATFORM_ANDROID,
      Study::PLATFORM_ANDROID_WEBVIEW,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_343[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_343,
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
      "PasswordSaveInContextErrorResolution",
};
const Study::Platform array_kFieldTrialConfig_platforms_342[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_342[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_342,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
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
      "PasswordManualFallbackSecurityChecks",
};
const Study::Platform array_kFieldTrialConfig_platforms_341[] = {
      Study::PLATFORM_ANDROID,
      Study::PLATFORM_ANDROID_WEBVIEW,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_341[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_341,
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
      "PassHistogramSharedMemoryOnLaunch",
};
const Study::Platform array_kFieldTrialConfig_platforms_340[] = {
      Study::PLATFORM_ANDROID,
      Study::PLATFORM_ANDROID_WEBVIEW,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_340[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_340,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
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
      "PartitionConnectionsByNetworkIsolationKey",
};
const Study::Platform array_kFieldTrialConfig_platforms_339[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_339[] = {
    {
      "EnableFeatureForTests",
      array_kFieldTrialConfig_platforms_339,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
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
      "PartitionAllocUnretainedDanglingPtr",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_102[] = {
      {
        "mode",
        "dump_without_crashing",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_338[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_338[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_338,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_102,
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
      "PartitionAllocTighterAlignedAllocBound",
};
const Study::Platform array_kFieldTrialConfig_platforms_337[] = {
      Study::PLATFORM_ANDROID,
      Study::PLATFORM_ANDROID_WEBVIEW,
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
      "PartitionAllocPermissiveMte",
};
const Study::Platform array_kFieldTrialConfig_platforms_336[] = {
      Study::PLATFORM_ANDROID,
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
      "BlinkUseLargeEmptySlotSpanRingForBufferRoot",
      "PartitionAllocAdjustSizeWhenInForeground",
      "PartitionAllocLargeEmptySlotSpanRing",
};
const Study::Platform array_kFieldTrialConfig_platforms_335[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_335[] = {
    {
      "Enabled_20250305",
      array_kFieldTrialConfig_platforms_335,
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
      "BlinkUseLargeEmptySlotSpanRingForBufferRoot",
      "PartitionAllocAdjustSizeWhenInForeground",
      "PartitionAllocLargeEmptySlotSpanRing",
};
const Study::Platform array_kFieldTrialConfig_platforms_334[] = {
      Study::PLATFORM_ANDROID_WEBVIEW,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_334[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_334,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_319,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_disable_features_20[] = {
      "PartitionAllocSchedulerLoopQuarantineTaskObserverForBrowserUIThread",
};
const char* const array_kFieldTrialConfig_enable_features_318[] = {
      "PartitionAllocSchedulerLoopQuarantine",
      "PartitionAllocWithAdvancedChecks",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_101[] = {
      {
        "PartitionAllocSchedulerLoopQuarantineConfig",
        "{\"*\":{\"amsc\":{\"branch-capacity-in-bytes\":524288,\"enable-quarantine\":true,\"enable-zapping\":true,\"leak-on-destruction\":true}},\"browser\":{\"main\":{\"branch-capacity-in-bytes\":2147483647,\"enable-quarantine\":true,\"enable-task-controlled-purge\":true,\"enable-zapping\":true,\"leak-on-destruction\":false,\"pause-in-between-tasks\":true}},\"gpu-process\":{\"*\":{\"branch-capacity-in-bytes\":2147483647,\"enable-quarantine\":true,\"enable-task-controlled-purge\":true,\"enable-zapping\":true,\"leak-on-destruction\":false,\"pause-in-between-tasks\":true}},\"renderer\":{\"main\":{\"branch-capacity-in-bytes\":2147483647,\"enable-quarantine\":true,\"enable-task-controlled-purge\":true,\"enable-zapping\":true,\"leak-on-destruction\":false,\"pause-in-between-tasks\":true}}}",
      },
      {
        "enabled-processes",
        "all-processes",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_333[] = {
      Study::PLATFORM_ANDROID,
      Study::PLATFORM_ANDROID_WEBVIEW,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_333[] = {
    {
      "enabled_unlimited_20260420",
      array_kFieldTrialConfig_platforms_333,
      {},
      std::nullopt,
      true,
      nullptr,
      array_kFieldTrialConfig_params_101,
      array_kFieldTrialConfig_enable_features_318,
      array_kFieldTrialConfig_disable_features_20,
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_317[] = {
      "PartitionAllocMemoryTagging",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_100[] = {
      {
        "enabled-processes",
        "all-processes",
      },
      {
        "memtag-mode",
        "sync",
      },
      {
        "retag-mode",
        "random",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_332[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_332[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_332,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_100,
      array_kFieldTrialConfig_enable_features_317,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_disable_features_19[] = {
      "PartitionAllocSortActiveSlotSpans",
};
const char* const array_kFieldTrialConfig_enable_features_316[] = {
      "PartitionAllocMemoryReclaimer",
      "PartitionAllocSortSmallerSlotSpanFreeLists",
      "PartitionAllocStraightenLargerSlotSpanFreeLists",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_99[] = {
      {
        "interval",
        "8s",
      },
      {
        "mode",
        "only-when-unprovisioning",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_331[] = {
      Study::PLATFORM_ANDROID,
      Study::PLATFORM_ANDROID_WEBVIEW,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_331[] = {
    {
      "Interval_8sec",
      array_kFieldTrialConfig_platforms_331,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_99,
      array_kFieldTrialConfig_enable_features_316,
      array_kFieldTrialConfig_disable_features_19,
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_315[] = {
      "PartitionAllocBackupRefPtr",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_98[] = {
      {
        "enabled-processes",
        "all-processes",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_330[] = {
      Study::PLATFORM_ANDROID,
      Study::PLATFORM_ANDROID_WEBVIEW,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_330[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_330,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_98,
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
      "PaintHoldingForIframes",
};
const Study::Platform array_kFieldTrialConfig_platforms_329[] = {
      Study::PLATFORM_ANDROID,
      Study::PLATFORM_ANDROID_WEBVIEW,
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
      "IPH_PageZoom",
};
const Study::Platform array_kFieldTrialConfig_platforms_328[] = {
      Study::PLATFORM_ANDROID,
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
      "IPH_PageInfo",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_97[] = {
      {
        "availability",
        ">=0",
      },
      {
        "event_1",
        "name:permission_request_shown;comparator:>=3;window:90;storage:90",
      },
      {
        "event_trigger",
        "name:page_info_iph_triggered;comparator:==0;window:90;storage:90",
      },
      {
        "event_used",
        "name:page_info_opened;comparator:==0;window:90;storage:90",
      },
      {
        "session_rate",
        "<1",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_327[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_327[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_327,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_97,
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
      "PageInfoAboutThisSiteMoreLangs",
};
const Study::Platform array_kFieldTrialConfig_platforms_326[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_326[] = {
    {
      "Enabled_231129",
      array_kFieldTrialConfig_platforms_326,
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
      "PMLoadingPageVoterV2",
};
const Study::Platform array_kFieldTrialConfig_platforms_325[] = {
      Study::PLATFORM_ANDROID,
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
      "InlinePdfV2",
      "InlinePdfV2Incognito",
      "PdfLauncherActivity",
      "PdfReuseFragment",
};
const Study::Platform array_kFieldTrialConfig_platforms_324[] = {
      Study::PLATFORM_ANDROID,
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
      "OptimizeAssociateWindowsAndroid",
};
const Study::Platform array_kFieldTrialConfig_platforms_323[] = {
      Study::PLATFORM_ANDROID,
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
      "OptimizationGuideProactivePersonalizedHintsFetching",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_96[] = {
      {
        "allowed_optimization_types",
        "SHOPPING_DISCOUNTS",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_322[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_322[] = {
    {
      "Enabled_20260625",
      array_kFieldTrialConfig_platforms_322,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_96,
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
      "AdjustIPv6FallbackTime",
      "EnableIntermediateDnsResults",
      "IPv6FallbackBasedOnRTT",
      "OptimisticDnsForTcp",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_95[] = {
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
const Study::Platform array_kFieldTrialConfig_platforms_321[] = {
      Study::PLATFORM_ANDROID,
      Study::PLATFORM_ANDROID_WEBVIEW,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_321[] = {
    {
      "Enabled_20260709",
      array_kFieldTrialConfig_platforms_321,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_95,
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
      "AdjustQuicSlowTimerDelay",
      "OptimisticDnsForQuic",
      "QuicSlowTimerBasedOnRTT",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_94[] = {
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
const Study::Platform array_kFieldTrialConfig_platforms_320[] = {
      Study::PLATFORM_ANDROID,
      Study::PLATFORM_ANDROID_WEBVIEW,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_320[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_320,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_94,
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
      "OptimizationHints",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_93[] = {
      {
        "max_url_keyed_hint_cache_size",
        "50",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_319[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_319[] = {
    {
      "Enabled_20240625",
      array_kFieldTrialConfig_platforms_319,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_93,
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
      "OptimizationHintsFetchingSRP",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_92[] = {
      {
        "max_urls_for_srp_fetch",
        "10",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_318[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_318[] = {
    {
      "Enabled_20240624",
      array_kFieldTrialConfig_platforms_318,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_92,
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
      "OnDeviceCategoryClassifier",
      "PassageEmbedder",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_91[] = {
      {
        "PassageEmbedderMinRequiredRamMb",
        "4096",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_317[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_317[] = {
    {
      "Enabled_4GB",
      array_kFieldTrialConfig_platforms_317,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_91,
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
      "AsyncSpellcheckCustomDictionaryInit",
      "OnDemandSpellcheckInitialization",
};
const Study::Platform array_kFieldTrialConfig_platforms_316[] = {
      Study::PLATFORM_ANDROID,
      Study::PLATFORM_ANDROID_WEBVIEW,
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
      "OnDemandBackgroundTabContextCaptureOptimization",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_90[] = {
      {
        "active_tab_flush_timeout_seconds",
        "1",
      },
      {
        "cancel_load_on_deselection",
        "true",
      },
      {
        "enable_first_paint",
        "true",
      },
      {
        "first_paint_delay_ms",
        "0",
      },
      {
        "limit_concurrent_load_if_needed",
        "true",
      },
      {
        "maximum_concurrent_load_if_needed",
        "4",
      },
      {
        "minimum_concurrent_load_if_needed",
        "1",
      },
      {
        "skip_delay_for_active_tab",
        "true",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_315[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_315[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_315,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_90,
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
      "OmniboxUseShortSuggestPathV1",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_89[] = {
      {
        "OmniboxSuggestPathClient",
        "chrome-omni,chrome,chrome-ntp-action,chrome-cobrowse-compose,chrome-multimodal,chrome-contextual,chrome-android-search-resumption-module,chrome-compose,chrome-mobile-aim",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_314[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_314[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_314,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_89,
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
      "OmniboxSiteSearch",
};
const Study::Platform array_kFieldTrialConfig_platforms_313[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_313[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_313,
      {},
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
      "OmniboxSearchPrefetchOnEnterKeyDown",
};
const Study::Platform array_kFieldTrialConfig_platforms_312[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_312[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_312,
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
      "OmniboxOnDeviceTailModel",
};
const Study::Platform array_kFieldTrialConfig_platforms_311[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_311[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_311,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
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
      "ComposeboxUsesChromeComposeClient",
      "OmniboxMultimodalInput",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_88[] = {
      {
        "compact_fusebox",
        "true",
      },
      {
        "show_bottom_sheet_popup",
        "true",
      },
      {
        "show_ntp_plus_button",
        "true",
      },
      {
        "use_ask_hint_for_ntp",
        "true",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_310[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_310[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_310,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_88,
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
      "OmniboxMobileParityUpdate",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_87[] = {
      {
        "enable_feed_for_google_only",
        "true",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_309[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_309[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_309,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_87,
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
      "MlUrlScoreCaching",
      "MlUrlScoring",
      "UrlScoringModel",
};
const Study::Platform array_kFieldTrialConfig_platforms_308[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_308[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_308,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
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
      "LogUrlScoringSignals",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_86[] = {
      {
        "enable_scoring_signals_annotators",
        "true",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_307[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_307[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_307,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_86,
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
      "OmniboxFuseboxPopupVariations",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_85[] = {
      {
        "fusebox_popup_carousel",
        "true",
      },
      {
        "fusebox_popup_use_accordion",
        "true",
      },
      {
        "show_bottom_sheet_popup",
        "true",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_306[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_306[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_306,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_85,
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
      "OmniboxFuseboxAsyncInflation",
};
const Study::Platform array_kFieldTrialConfig_platforms_305[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_305[] = {
    {
      "Enabled",
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
      "OmniboxCrossDeviceTabZeroSuggest",
};
const Study::Platform array_kFieldTrialConfig_platforms_304[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_304[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_304,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_289,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const Study::Platform array_kFieldTrialConfig_platforms_303[] = {
      Study::PLATFORM_ANDROID,
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
      {},
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_288[] = {
      "OmahaMinSdkVersionAndroid",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_84[] = {
      {
        "min_sdk_version",
        "29",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_302[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_302[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_302,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_84,
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
      "OffloadAcceptCHFrameCheck",
};
const Study::Platform array_kFieldTrialConfig_platforms_301[] = {
      Study::PLATFORM_ANDROID,
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
      "DrawQuadSplitLimit",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_83[] = {
      {
        "num_of_splits",
        "8",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_300[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_300[] = {
    {
      "quad_split_limit_8",
      array_kFieldTrialConfig_platforms_300,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_83,
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
      "NtpRealboxCyclingPlaceholders",
};
const Study::FormFactor array_kFieldTrialConfig_form_factors_6[] = {
      Study::DESKTOP,
};
const Study::Platform array_kFieldTrialConfig_platforms_299[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_299[] = {
    {
      "Enabled_20260828",
      array_kFieldTrialConfig_platforms_299,
      array_kFieldTrialConfig_form_factors_6,
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
      "NtpMostVisitedHighDpiFavicons",
};
const Study::Platform array_kFieldTrialConfig_platforms_298[] = {
      Study::PLATFORM_ANDROID,
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
      "NtpLazyLoadComposebox",
};
const Study::FormFactor array_kFieldTrialConfig_form_factors_5[] = {
      Study::DESKTOP,
};
const Study::Platform array_kFieldTrialConfig_platforms_297[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_297[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_297,
      array_kFieldTrialConfig_form_factors_5,
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
      "NtpGoogleLogo26",
};
const Study::FormFactor array_kFieldTrialConfig_form_factors_4[] = {
      Study::DESKTOP,
};
const Study::Platform array_kFieldTrialConfig_platforms_296[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_296[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_296,
      array_kFieldTrialConfig_form_factors_4,
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
      "NtpAuroraV2",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_82[] = {
      {
        "action_chips",
        "1",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_295[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_295[] = {
    {
      "Enabled_IncognitoChip",
      array_kFieldTrialConfig_platforms_295,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_82,
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
      "NtpAurora",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_81[] = {
      {
        "change_button_color",
        "true",
      },
      {
        "padding_style",
        "3",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_294[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_294[] = {
    {
      "Enabled_LargePadding",
      array_kFieldTrialConfig_platforms_294,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_81,
      array_kFieldTrialConfig_enable_features_280,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_disable_features_18[] = {
      "NoopRuntimeMutable4",
};
const char* const array_kFieldTrialConfig_enable_features_279[] = {
      "NoopRuntimeMutable3",
};
const Study::Platform array_kFieldTrialConfig_platforms_293[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_293[] = {
    {
      "Enabled_20260731",
      array_kFieldTrialConfig_platforms_293,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_279,
      array_kFieldTrialConfig_disable_features_18,
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_disable_features_17[] = {
      "NoopRuntimeMutable2",
};
const char* const array_kFieldTrialConfig_enable_features_278[] = {
      "NoopRuntimeMutable1",
};
const Study::Platform array_kFieldTrialConfig_platforms_292[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_292[] = {
    {
      "Enabled_20260731",
      array_kFieldTrialConfig_platforms_292,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_278,
      array_kFieldTrialConfig_disable_features_17,
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_disable_features_16[] = {
      "NonStandardAppearanceValueSliderVertical",
};
const Study::Platform array_kFieldTrialConfig_platforms_291[] = {
      Study::PLATFORM_ANDROID,
      Study::PLATFORM_ANDROID_WEBVIEW,
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
      array_kFieldTrialConfig_disable_features_16,
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_277[] = {
      "NoVarySearchCacheLoadOnSeparateTaskRunner",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_80[] = {
      {
        "NoVarySearchCacheLoadTaskRunnerPriority",
        "USER_VISIBLE",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_290[] = {
      Study::PLATFORM_ANDROID,
      Study::PLATFORM_ANDROID_WEBVIEW,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_290[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_290,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_80,
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
      "NoSelectionMenuCaching",
};
const Study::Platform array_kFieldTrialConfig_platforms_289[] = {
      Study::PLATFORM_ANDROID,
      Study::PLATFORM_ANDROID_WEBVIEW,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_289[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_289,
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
      "NoPauseMediaOnHeadphoneUnplug",
};
const Study::Platform array_kFieldTrialConfig_platforms_288[] = {
      Study::PLATFORM_ANDROID,
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
      "VoiceSearchCoherenceSearchbox",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_79[] = {
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
const Study::FormFactor array_kFieldTrialConfig_form_factors_3[] = {
      Study::DESKTOP,
};
const Study::Platform array_kFieldTrialConfig_platforms_287[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_287[] = {
    {
      "Arm4_Transcript_AutoEndpoint_20260923",
      array_kFieldTrialConfig_platforms_287,
      array_kFieldTrialConfig_form_factors_3,
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_79,
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
      "NetworkServiceIncreasedPriorityWhileLoading",
};
const Study::Platform array_kFieldTrialConfig_platforms_286[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_286[] = {
    {
      "WhileLoading",
      array_kFieldTrialConfig_platforms_286,
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
      "NetworkQualityEstimatorAsyncNotifyHeadersReceived",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_78[] = {
      {
        "defer_notify_headers_until_next_step",
        "false",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_285[] = {
      Study::PLATFORM_ANDROID,
      Study::PLATFORM_ANDROID_WEBVIEW,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_285[] = {
    {
      "Experiment",
      array_kFieldTrialConfig_platforms_285,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_78,
      array_kFieldTrialConfig_enable_features_272,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_disable_features_15[] = {
      "NetTaskScheduler2",
      "NetTaskSchedulerHostResolver",
      "NetworkServicePerPriorityTaskQueues",
};
const char* const array_kFieldTrialConfig_enable_features_271[] = {
      "DrainSpdySessionSynchronouslyOnRemoteEndpointDisconnect",
      "NetTaskScheduler",
};
const Study::Platform array_kFieldTrialConfig_platforms_284[] = {
      Study::PLATFORM_ANDROID,
      Study::PLATFORM_ANDROID_WEBVIEW,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_284[] = {
    {
      "Enabled_SpdyDrainFix",
      array_kFieldTrialConfig_platforms_284,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_271,
      array_kFieldTrialConfig_disable_features_15,
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_270[] = {
      "NdkVideoEncodeAcceleratorNativeSvc",
};
const Study::Platform array_kFieldTrialConfig_platforms_283[] = {
      Study::PLATFORM_ANDROID,
      Study::PLATFORM_ANDROID_WEBVIEW,
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
      "NdkVideoEncodeAcceleratorBitrateLayering",
};
const Study::Platform array_kFieldTrialConfig_platforms_282[] = {
      Study::PLATFORM_ANDROID,
      Study::PLATFORM_ANDROID_WEBVIEW,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_282[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_282,
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
      "MixedFixedIntervalMatcher",
};
const Study::Platform array_kFieldTrialConfig_platforms_281[] = {
      Study::PLATFORM_ANDROID,
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
      "MigrateAccountManagerDelegate",
};
const Study::Platform array_kFieldTrialConfig_platforms_280[] = {
      Study::PLATFORM_ANDROID,
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
      "AwMetricsLogTrimming",
      "MetricsLogTrimming",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_77[] = {
      {
        "log_bytes_trim_threshold",
        "3145728",
      },
      {
        "max_ongoing_log_size_bytes",
        "1048576",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_279[] = {
      Study::PLATFORM_ANDROID_WEBVIEW,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_279[] = {
    {
      "Enabled_20260901",
      array_kFieldTrialConfig_platforms_279,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_77,
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
      "MetricsLogTrimming",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_76[] = {
      {
        "log_bytes_trim_threshold",
        "3145728",
      },
      {
        "max_ongoing_log_size_bytes",
        "1048576",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_278[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_278[] = {
    {
      "Enabled_20260901",
      array_kFieldTrialConfig_platforms_278,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_76,
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
      "MediaCodecBlockModel",
};
const Study::Platform array_kFieldTrialConfig_platforms_277[] = {
      Study::PLATFORM_ANDROID,
      Study::PLATFORM_ANDROID_WEBVIEW,
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
      "MaliciousApkDownloadCheck",
};
const Study::Platform array_kFieldTrialConfig_platforms_276[] = {
      Study::PLATFORM_ANDROID,
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
      "MakeIdentityManagerSourceOfAccounts",
};
const Study::Platform array_kFieldTrialConfig_platforms_275[] = {
      Study::PLATFORM_ANDROID,
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
      "LongScreenshotsNoMemoryCheck",
};
const Study::Platform array_kFieldTrialConfig_platforms_274[] = {
      Study::PLATFORM_ANDROID,
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
      "LocalNetworkAccessChecks",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_75[] = {
      {
        "LocalNetworkAccessChecksWarn",
        "false",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_273[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_273[] = {
    {
      "EnabledBlocking",
      array_kFieldTrialConfig_platforms_273,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_75,
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
      "LoadAllTabsAtStartup",
};
const Study::Platform array_kFieldTrialConfig_platforms_272[] = {
      Study::PLATFORM_ANDROID,
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
      "LibraryPrefetcherOnlyOrderedText",
};
const Study::Platform array_kFieldTrialConfig_platforms_271[] = {
      Study::PLATFORM_ANDROID_WEBVIEW,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_271[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_271,
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
      "LensComposeboxIdentityDelegation",
};
const Study::Platform array_kFieldTrialConfig_platforms_270[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_270[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_270,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
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
      "LazyParseInlineStyleSheets",
};
const Study::Platform array_kFieldTrialConfig_platforms_269[] = {
      Study::PLATFORM_ANDROID,
      Study::PLATFORM_ANDROID_WEBVIEW,
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
      "LazyBlinkTimezoneInit",
};
const Study::Platform array_kFieldTrialConfig_platforms_268[] = {
      Study::PLATFORM_ANDROID,
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
      "LCPTimingPredictorPrerender2",
};
const Study::Platform array_kFieldTrialConfig_platforms_267[] = {
      Study::PLATFORM_ANDROID,
      Study::PLATFORM_ANDROID_WEBVIEW,
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
      "LCPPLazyLoadImagePreload",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_74[] = {
      {
        "lcpp_preload_lazy_load_image_type",
        "native_lazy_loading",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_266[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_266[] = {
    {
      "EnableWithNativeLazyLoading_20231113",
      array_kFieldTrialConfig_platforms_266,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_74,
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
      "LCPPDeferUnusedPreload",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_73[] = {
      {
        "load_timing",
        "post_task",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_265[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_265[] = {
    {
      "EnableWithPostTask_20240426",
      array_kFieldTrialConfig_platforms_265,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_73,
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
      "AutofillEnableOffersInClankKeyboardAccessory",
      "IPH_KeyboardAccessoryPaymentOffer",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_72[] = {
      {
        "availability",
        "any",
      },
      {
        "event_trigger",
        "name:keyboard_accessory_payment_offer_iph_trigger;comparator:<3;window:90;storage:360",
      },
      {
        "event_used",
        "name:keyboard_accessory_payment_suggestion_accepted;comparator:<2;window:90;storage:360",
      },
      {
        "session_rate",
        "any",
      },
      {
        "session_rate_impact",
        "none",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_264[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_264[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_264,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_72,
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
      "IsolateSubframeErrorPages",
};
const Study::Platform array_kFieldTrialConfig_platforms_263[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_263[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_263,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
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
      "IPH_SendTabToSelfOmnibox",
      "IPH_SendTabToSelfTutorial",
      "SendTabToSelfDynamicShortcuts",
      "SendTabToSelfEnhancedDesktopUIv2",
      "SendTabToSelfMultiTabShare",
      "SendTabToSelfOpenNativeApp",
      "SendTabToSelfSupportAutoOpenInTabGrid",
      "SyncDisambiguateDeviceNamesWithChannel",
};
const Study::Platform array_kFieldTrialConfig_platforms_262[] = {
      Study::PLATFORM_ANDROID,
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
      "InlineLocationSignaling",
      "PlatformAgnosticXGeo",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_71[] = {
      {
        "display_order",
        "DisplayAbove",
      },
      {
        "wording",
        "UseApproximateLocation",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_261[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_261[] = {
    {
      "ApproximateLocationDisplayAbove_20260727",
      array_kFieldTrialConfig_platforms_261,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_71,
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
      "InhibitSQLReleaseCacheMemoryIfNeeded",
};
const Study::Platform array_kFieldTrialConfig_platforms_260[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_260[] = {
    {
      "InhibitSQLReleaseCacheMemoryIfNeeded",
      array_kFieldTrialConfig_platforms_260,
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
      "IndexedDBConnectionDeduplication",
};
const Study::Platform array_kFieldTrialConfig_platforms_259[] = {
      Study::PLATFORM_ANDROID,
      Study::PLATFORM_ANDROID_WEBVIEW,
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
      "IncreasedCmdBufferParseSlice",
};
const Study::Platform array_kFieldTrialConfig_platforms_258[] = {
      Study::PLATFORM_ANDROID,
      Study::PLATFORM_ANDROID_WEBVIEW,
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
      "ConfigureQuicHints",
      "TryQuicByDefault",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_70[] = {
      {
        "quic_hints",
        "google.com,443,443,www.google.com,443,443",
      },
      {
        "quic_options",
        "ORIG",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_257[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_257[] = {
    {
      "EnabledWithConfigureMinimalQuicHintsWithOriginFrame",
      array_kFieldTrialConfig_platforms_257,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_70,
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
      "IncognitoScreenshot",
};
const Study::Platform array_kFieldTrialConfig_platforms_256[] = {
      Study::PLATFORM_ANDROID,
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
      "ImageDescriptionsAlternateRouting",
};
const Study::Platform array_kFieldTrialConfig_platforms_255[] = {
      Study::PLATFORM_ANDROID,
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
      "IgnoreIpMatching",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_69[] = {
      {
        "ignore_ip_matching_when_finding_existing_sessions",
        "true",
      },
      {
        "noip_quic_option",
        "NOIP",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_254[] = {
      Study::PLATFORM_ANDROID,
      Study::PLATFORM_ANDROID_WEBVIEW,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_254[] = {
    {
      "Enabled_NOIP",
      array_kFieldTrialConfig_platforms_254,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_69,
      array_kFieldTrialConfig_enable_features_241,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_240[] = {
      "IgnoreDuplicateNavsOnlyWithUserGesture",
};
const Study::Platform array_kFieldTrialConfig_platforms_253[] = {
      Study::PLATFORM_ANDROID,
      Study::PLATFORM_ANDROID_WEBVIEW,
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
const char* const array_kFieldTrialConfig_enable_features_239[] = {
      "IgnoreDuplicateNavs",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_68[] = {
      {
        "duplicate_nav_threshold",
        "3s",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_252[] = {
      Study::PLATFORM_ANDROID,
      Study::PLATFORM_ANDROID_WEBVIEW,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_252[] = {
    {
      "Enabled_threshold_3s",
      array_kFieldTrialConfig_platforms_252,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_68,
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
      "IdbSqliteOnDiskRollout",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_67[] = {
      {
        "stage",
        "UseSqliteForNewStores",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_251[] = {
      Study::PLATFORM_ANDROID,
      Study::PLATFORM_ANDROID_WEBVIEW,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_251[] = {
    {
      "UseSqliteForNewStores",
      array_kFieldTrialConfig_platforms_251,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_67,
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
      "UseIcu4xNormalizer",
};
const Study::Platform array_kFieldTrialConfig_platforms_250[] = {
      Study::PLATFORM_ANDROID,
      Study::PLATFORM_ANDROID_WEBVIEW,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_250[] = {
    {
      "Enabled_20260924",
      array_kFieldTrialConfig_platforms_250,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
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
      "IDBDatabaseDumpOnHighConnectionCount",
};
const Study::Platform array_kFieldTrialConfig_platforms_249[] = {
      Study::PLATFORM_ANDROID,
      Study::PLATFORM_ANDROID_WEBVIEW,
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
      "I18nOptimizations",
};
const Study::Platform array_kFieldTrialConfig_platforms_248[] = {
      Study::PLATFORM_ANDROID,
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
      "HttpsFirstModeV2ForTypicallySecureUsers",
};
const Study::Platform array_kFieldTrialConfig_platforms_247[] = {
      Study::PLATFORM_ANDROID,
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
      "HttpCacheZstdCompression",
      "HttpCacheZstdDecompression",
};
const Study::Platform array_kFieldTrialConfig_platforms_246[] = {
      Study::PLATFORM_ANDROID,
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
      "HttpCacheNoVarySearch",
      "SearchPrefetchWithNoVarySearchDiskCache",
};
const Study::Platform array_kFieldTrialConfig_platforms_245[] = {
      Study::PLATFORM_ANDROID,
      Study::PLATFORM_ANDROID_WEBVIEW,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_245[] = {
    {
      "Enabled_NVS_HttpCache_And_Omnibox_Prefetch",
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
      "HttpCacheInitializeDiskCacheBackendEarly",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_66[] = {
      {
        "check_disk",
        "true",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_244[] = {
      Study::PLATFORM_ANDROID_WEBVIEW,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_244[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_244,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_66,
      array_kFieldTrialConfig_enable_features_231,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_disable_features_14[] = {
      "DisablePartnerHomepageAndroid",
};
const char* const array_kFieldTrialConfig_enable_features_230[] = {
      "HomeButtonRemoval",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_65[] = {
      {
        "remove_home_button_everywhere",
        "true",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_243[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_243[] = {
    {
      "RemoveEverywhere",
      array_kFieldTrialConfig_platforms_243,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_65,
      array_kFieldTrialConfig_enable_features_230,
      array_kFieldTrialConfig_disable_features_14,
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_229[] = {
      "UseAlternateHistorySyncIllustration",
};
const Study::Platform array_kFieldTrialConfig_platforms_242[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_242[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_242,
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
      "HistoryQueryBatchedLookups",
};
const Study::Platform array_kFieldTrialConfig_platforms_241[] = {
      Study::PLATFORM_ANDROID,
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
      "HistoryDatabaseWriteAheadLogging",
};
const Study::Platform array_kFieldTrialConfig_platforms_240[] = {
      Study::PLATFORM_ANDROID,
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
      array_kFieldTrialConfig_enable_features_227,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_disable_features_13[] = {
      "HeapVectorPromptlyFree",
};
const Study::Platform array_kFieldTrialConfig_platforms_239[] = {
      Study::PLATFORM_ANDROID,
      Study::PLATFORM_ANDROID_WEBVIEW,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_239[] = {
    {
      "Disabled",
      array_kFieldTrialConfig_platforms_239,
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
const char* const array_kFieldTrialConfig_enable_features_226[] = {
      "HeapProfilerIncludeResidency",
};
const Study::Platform array_kFieldTrialConfig_platforms_238[] = {
      Study::PLATFORM_ANDROID,
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
      "HeapProfilerChurnReporting",
};
const Study::Platform array_kFieldTrialConfig_platforms_237[] = {
      Study::PLATFORM_ANDROID,
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
      "HardenUrlProvisionFetcher",
};
const Study::Platform array_kFieldTrialConfig_platforms_236[] = {
      Study::PLATFORM_ANDROID,
      Study::PLATFORM_ANDROID_WEBVIEW,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_236[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_236,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
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
      "HappyEyeballsV2",
};
const Study::Platform array_kFieldTrialConfig_platforms_235[] = {
      Study::PLATFORM_ANDROID_WEBVIEW,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_235[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_235,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_223,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_222[] = {
      "HappyEyeballsV2",
};
const Study::Platform array_kFieldTrialConfig_platforms_234[] = {
      Study::PLATFORM_ANDROID,
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
      "GwpAsanMallocSmartSampling",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_64[] = {
      {
        "SmartSamplingRateMultiplier",
        "8",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_233[] = {
      Study::PLATFORM_ANDROID,
      Study::PLATFORM_ANDROID_WEBVIEW,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_233[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_233,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_64,
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
      "GrCacheLimitsFeature",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_63[] = {
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
const Study::Platform array_kFieldTrialConfig_platforms_232[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_232[] = {
    {
      "cache_96_256_8_default_20230911",
      array_kFieldTrialConfig_platforms_232,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_63,
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
      "GpuPersistentCacheMetadata",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_62[] = {
      {
        "preload_count",
        "50",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_231[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_231[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_231,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_62,
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
      "GpuPersistentCache",
};
const Study::Platform array_kFieldTrialConfig_platforms_230[] = {
      Study::PLATFORM_ANDROID_WEBVIEW,
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
      "GpuInitOptimization",
};
const Study::Platform array_kFieldTrialConfig_platforms_229[] = {
      Study::PLATFORM_ANDROID,
      Study::PLATFORM_ANDROID_WEBVIEW,
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
      "GooglePayViaAndroidIntents",
};
const Study::Platform array_kFieldTrialConfig_platforms_228[] = {
      Study::PLATFORM_ANDROID,
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
      "GlicVoice",
};
const Study::Platform array_kFieldTrialConfig_platforms_227[] = {
      Study::PLATFORM_ANDROID,
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
      "GlicReuseCookies",
};
const Study::Platform array_kFieldTrialConfig_platforms_226[] = {
      Study::PLATFORM_ANDROID,
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
      "GlicNoWebview",
};
const Study::Platform array_kFieldTrialConfig_platforms_225[] = {
      Study::PLATFORM_ANDROID,
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
      "GlicMessageFirstFre",
};
const Study::Platform array_kFieldTrialConfig_platforms_224[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_224[] = {
    {
      "Enabled_20261005",
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
      "GlicMarketingAutoOpen",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_61[] = {
      {
        "allowlisted_urls",
        "https://www.google.com/chrome/ai-innovations/gemini-in-chrome/,https://www.google.com/chrome/campaigns/gic-on-android/",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_223[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_223[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_223,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_61,
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
      "GlicDisableHfcr",
};
const Study::Platform array_kFieldTrialConfig_platforms_222[] = {
      Study::PLATFORM_ANDROID,
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
const char* const array_kFieldTrialConfig_disable_features_12[] = {
      "GlicDaisyChainNewTabs",
};
const Study::Platform array_kFieldTrialConfig_platforms_221[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_221[] = {
    {
      "Disabled",
      array_kFieldTrialConfig_platforms_221,
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
const char* const array_kFieldTrialConfig_enable_features_209[] = {
      "GlicCookieSyncEarlyNoStartup",
      "GlicCookieSyncOnTokenChange",
};
const Study::Platform array_kFieldTrialConfig_platforms_220[] = {
      Study::PLATFORM_ANDROID,
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
      "GlicCrossOriginNavigationGating",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_60[] = {
      {
        "confirm_navigation_to_new_origins",
        "false",
      },
      {
        "confirm_navigation_to_new_origins_dark_launch",
        "true",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_219[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_219[] = {
    {
      "Enabled_DarkLaunch",
      array_kFieldTrialConfig_platforms_219,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_60,
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
      "TabBottomSheetFullHeight",
      "TabBottomSheetResizeWebview",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_59[] = {
      {
        "full_height_ratio",
        "0.95",
      },
      {
        "resizing_placeholder",
        "skeleton",
      },
      {
        "resizing_strategy",
        "default",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_218[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_218[] = {
    {
      "Enabled_20261013",
      array_kFieldTrialConfig_platforms_218,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_59,
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
      "ActorNotificationIntentRouting",
      "ActorStepProgressNotification",
      "GlicBackgroundActuation",
      "GlicBackgroundActuationTabGroupSync",
};
const Study::Platform array_kFieldTrialConfig_platforms_217[] = {
      Study::PLATFORM_ANDROID,
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
const char* const array_kFieldTrialConfig_enable_features_205[] = {
      "AndroidBottomBar",
      "AndroidPageInfoAsAppMenuItem",
      "BottomControlsJankImprovement",
      "BrowserControlsLockoutDuration",
      "CompositorViewShrinkWhenKeyboardHidden",
      "ContextualCueing",
      "Glic",
      "GlicActor",
      "GlicRollout",
      "IPH_SiteControls",
      "TabBottomSheet",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_58[] = {
      {
        "adaptive-toolbar-auto-pin",
        "false",
      },
      {
        "always_use_filled_glic_icon",
        "true",
      },
      {
        "dont_show_fusebox",
        "true",
      },
      {
        "fullscreen_load_delay_ms",
        "1500",
      },
      {
        "glic-min-required-ram-mb",
        "3600",
      },
      {
        "minimum_show_duration_ms",
        "1500",
      },
      {
        "show_glic_setting_toggle",
        "true",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_216[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_216[] = {
    {
      "Enabled_Arm2_BottomBar_1A_with_GLIC_filled",
      array_kFieldTrialConfig_platforms_216,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_58,
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
      "GaiaAccountIdEnforcement",
};
const Study::Platform array_kFieldTrialConfig_platforms_215[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_215[] = {
    {
      "Enabled_20260414",
      array_kFieldTrialConfig_platforms_215,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
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
      "GmsCoreBindServiceOptimization",
};
const Study::Platform array_kFieldTrialConfig_platforms_214[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_214[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_214,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
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
      "GCMMessageBuffering",
};
const Study::Platform array_kFieldTrialConfig_platforms_213[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_213[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_213,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
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
      "FullscreenVideoPictureInPicture",
};
const Study::Platform array_kFieldTrialConfig_platforms_212[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_212[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_212,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
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
      "FullscreenSignInPromoUseDate",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_57[] = {
      {
        "interval",
        "60",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_211[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_211[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_211,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_57,
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
      "FlushPersistentSystemProfileOnWrite",
};
const Study::Platform array_kFieldTrialConfig_platforms_210[] = {
      Study::PLATFORM_ANDROID,
      Study::PLATFORM_ANDROID_WEBVIEW,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_210[] = {
    {
      "Enabled_20260925",
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
const char* const array_kFieldTrialConfig_disable_features_11[] = {
      "FencedFrames",
      "FencedFramesAPIChanges",
      "FencedFramesAutomaticBeaconCredentials",
      "FencedFramesCrossOriginAutomaticBeaconData",
      "FencedFramesCrossOriginEventReporting",
      "FencedFramesLocalUnpartitionedDataAccess",
      "FencedFramesReportEventHeaderChanges",
      "FencedFramesSrcPermissionsPolicy",
};
const Study::Platform array_kFieldTrialConfig_platforms_209[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_209[] = {
    {
      "Disabled",
      array_kFieldTrialConfig_platforms_209,
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
const char* const array_kFieldTrialConfig_enable_features_198[] = {
      "FeedSignedOutViewDemotion",
};
const Study::Platform array_kFieldTrialConfig_platforms_208[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_208[] = {
    {
      "Enabled",
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
      "FeedPerformanceStudy",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_56[] = {
      {
        "asyncLayout",
        "true",
      },
      {
        "rangeRatio",
        "0.5",
      },
      {
        "rangeSize",
        "4",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_207[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_207[] = {
    {
      "rs4_rr05_al1",
      array_kFieldTrialConfig_platforms_207,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_56,
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
      "FeedLoadingPlaceholder",
};
const Study::Platform array_kFieldTrialConfig_platforms_206[] = {
      Study::PLATFORM_ANDROID,
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
const char* const array_kFieldTrialConfig_disable_features_10[] = {
      "FedCmAmbientUI",
};
const char* const array_kFieldTrialConfig_enable_features_195[] = {
      "SegmentationPlatformFedCmUser",
};
const Study::Platform array_kFieldTrialConfig_platforms_205[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_205[] = {
    {
      "SegmentationPlatform",
      array_kFieldTrialConfig_platforms_205,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_195,
      array_kFieldTrialConfig_disable_features_10,
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_194[] = {
      "ExtremeLightweightUAFDetector",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_55[] = {
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
const Study::Platform array_kFieldTrialConfig_platforms_204[] = {
      Study::PLATFORM_ANDROID,
      Study::PLATFORM_ANDROID_WEBVIEW,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_204[] = {
    {
      "Quarantine_900_100_512_v6",
      array_kFieldTrialConfig_platforms_204,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_55,
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
      "ExtensionsPinnedByDefault",
};
const Study::Platform array_kFieldTrialConfig_platforms_203[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_203[] = {
    {
      "Enabled_20260716",
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
      "ExpandCompositedCullRect",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_54[] = {
      {
        "pixels",
        "2333",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_202[] = {
      Study::PLATFORM_ANDROID,
      Study::PLATFORM_ANDROID_WEBVIEW,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_202[] = {
    {
      "LikelyLaunch",
      array_kFieldTrialConfig_platforms_202,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_54,
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
      "EventTimingIgnorePresentationTimeFromUnexpectedFrameSource",
};
const Study::Platform array_kFieldTrialConfig_platforms_201[] = {
      Study::PLATFORM_ANDROID,
      Study::PLATFORM_ANDROID_WEBVIEW,
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
      "AndroidDeviceSignalsDisclaimer",
};
const Study::Platform array_kFieldTrialConfig_platforms_200[] = {
      Study::PLATFORM_ANDROID,
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
const char* const array_kFieldTrialConfig_enable_features_189[] = {
      "DataControlsGlic",
      "GlicBulkDataEntrySupport",
};
const Study::Platform array_kFieldTrialConfig_platforms_199[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_199[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_199,
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
const char* const array_kFieldTrialConfig_enable_features_188[] = {
      "EnhancedFieldsForSecOps",
      "EnhancedSecurityEventFields",
};
const Study::Platform array_kFieldTrialConfig_platforms_198[] = {
      Study::PLATFORM_ANDROID,
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
      "EncryptSessionStorage",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_53[] = {
      {
        "stage",
        "write_both_read_prefer_encrypted",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_197[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_197[] = {
    {
      "Phase2",
      array_kFieldTrialConfig_platforms_197,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_53,
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
      "EncryptBookmarks",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_52[] = {
      {
        "stage",
        "write_both_read_prefer_encrypted",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_196[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_196[] = {
    {
      "Phase2",
      array_kFieldTrialConfig_platforms_196,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_52,
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
      "EnablePixAccountLinkingNative",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_51[] = {
      {
        "prompt_variant",
        "VariationA",
      },
      {
        "trigger_delay_seconds",
        "3",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_195[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_195[] = {
    {
      "Enabled_VariationA_Delay3s",
      array_kFieldTrialConfig_platforms_195,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_51,
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
      "EnableFullscreenToAnyScreenAndroid",
};
const Study::Platform array_kFieldTrialConfig_platforms_194[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_194[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_194,
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
      "EnableEwalletNewAccountLinking",
};
const Study::Platform array_kFieldTrialConfig_platforms_193[] = {
      Study::PLATFORM_ANDROID,
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
      "EnableDynamicRouteFetching",
};
const Study::Platform array_kFieldTrialConfig_platforms_192[] = {
      Study::PLATFORM_ANDROID,
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
      "EnableDownloadSaveAsSystemFileDialog",
};
const Study::Platform array_kFieldTrialConfig_platforms_191[] = {
      Study::PLATFORM_ANDROID,
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
      "EnableCustomInputStreamBufferSize",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_50[] = {
      {
        "BufferSize",
        "65536",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_190[] = {
      Study::PLATFORM_ANDROID_WEBVIEW,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_190[] = {
    {
      "EnabledWith64KiBMay2024",
      array_kFieldTrialConfig_platforms_190,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_50,
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
      "EnableAndroidSidePanel",
};
const Study::Platform array_kFieldTrialConfig_platforms_189[] = {
      Study::PLATFORM_ANDROID,
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
      "EnableAccountPreviewPreferredAccount",
      "EnableAccountPreviewUseAppAccount",
};
const Study::Platform array_kFieldTrialConfig_platforms_188[] = {
      Study::PLATFORM_ANDROID,
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
      "EnableAccountPreviewDataFetchOptimizations",
};
const Study::Platform array_kFieldTrialConfig_platforms_187[] = {
      Study::PLATFORM_ANDROID,
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
      "EnableADPFWorkloadReset",
};
const Study::Platform array_kFieldTrialConfig_platforms_186[] = {
      Study::PLATFORM_ANDROID,
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
      "EnableADPFSeparateRendererMainSession",
};
const Study::Platform array_kFieldTrialConfig_platforms_185[] = {
      Study::PLATFORM_ANDROID,
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
      "EnableADPFPendingRendererMain",
};
const Study::Platform array_kFieldTrialConfig_platforms_184[] = {
      Study::PLATFORM_ANDROID,
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
      "EdgeToEdgeUseBackupNavbarInsets",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_49[] = {
      {
        "use_gesture_insets",
        "false",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_183[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_183[] = {
    {
      "Enabled_20251007",
      array_kFieldTrialConfig_platforms_183,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_49,
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
      "EarlyCookieLoadOnPreconnect",
};
const Study::Platform array_kFieldTrialConfig_platforms_182[] = {
      Study::PLATFORM_ANDROID,
      Study::PLATFORM_ANDROID_WEBVIEW,
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
      "EagerStorageAccessPermissionCheck",
};
const Study::Platform array_kFieldTrialConfig_platforms_181[] = {
      Study::PLATFORM_ANDROID,
      Study::PLATFORM_ANDROID_WEBVIEW,
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
      "DumpWithoutCrashingForMissingSecurityState",
};
const Study::Platform array_kFieldTrialConfig_platforms_180[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_180[] = {
    {
      "Enabled_20260121",
      array_kFieldTrialConfig_platforms_180,
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
      "DsePreload2",
      "DsePreload2AheadOfImminentNavigation",
      "DsePreload2OnPress",
      "PrefetchAheadOfImminentNavigation",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_48[] = {
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
const Study::Platform array_kFieldTrialConfig_platforms_179[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_179[] = {
    {
      "Enabled_Base_AheadOfImminentNavigation",
      array_kFieldTrialConfig_platforms_179,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_48,
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
      "IPH_DownloadIndicator",
};
const Study::Platform array_kFieldTrialConfig_platforms_178[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_178[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_178,
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
      "IPH_DownloadHome",
};
const Study::Platform array_kFieldTrialConfig_platforms_177[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_177[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_177,
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
      "DomStorageSqliteNewDatabases",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_47[] = {
      {
        "DomStorageSqliteNewDatabasesStage",
        "UseSqliteForNewDatabases",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_176[] = {
      Study::PLATFORM_ANDROID,
      Study::PLATFORM_ANDROID_WEBVIEW,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_176[] = {
    {
      "UseSqliteForNewDatabases",
      array_kFieldTrialConfig_platforms_176,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_47,
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
      "DohProviderQuad9Secure",
};
const Study::Platform array_kFieldTrialConfig_platforms_175[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_175[] = {
    {
      "Enabled_20260203",
      array_kFieldTrialConfig_platforms_175,
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
      "UseDnsHttpsSvcb",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_46[] = {
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
const Study::Platform array_kFieldTrialConfig_platforms_174[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_174[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_174,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_46,
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
      "DiskCacheBackendExperiment",
      "HttpCacheInitializeDiskCacheBackendEarly",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_45[] = {
      {
        "DiskCacheBackendResetCacheOnGroupChange",
        "true",
      },
      {
        "backend",
        "sql",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_173[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_173[] = {
    {
      "Sql",
      array_kFieldTrialConfig_platforms_173,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_45,
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
      "WideScreenFeedForFoldables",
};
const Study::Platform array_kFieldTrialConfig_platforms_172[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_172[] = {
    {
      "Enabled_50_prestable_20260612",
      array_kFieldTrialConfig_platforms_172,
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
      "PropagateOcclusionToVizAndroid",
      "VizBufferQueueDiscardOnVisibilityChange",
};
const Study::Platform array_kFieldTrialConfig_platforms_171[] = {
      Study::PLATFORM_ANDROID,
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
      array_kFieldTrialConfig_enable_features_161,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_disable_features_9[] = {
      "PersistBrokenAlternativeServices",
};
const Study::Platform array_kFieldTrialConfig_platforms_170[] = {
      Study::PLATFORM_ANDROID,
      Study::PLATFORM_ANDROID_WEBVIEW,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_170[] = {
    {
      "Disabled",
      array_kFieldTrialConfig_platforms_170,
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
const char* const array_kFieldTrialConfig_enable_features_160[] = {
      "DisableGridTabSwitcher",
};
const Study::Platform array_kFieldTrialConfig_platforms_169[] = {
      Study::PLATFORM_ANDROID,
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
      "DisableComposeboxWarmupRequests",
};
const Study::Platform array_kFieldTrialConfig_platforms_168[] = {
      Study::PLATFORM_ANDROID,
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
      "DIPS",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_44[] = {
      {
        "delete",
        "false",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_167[] = {
      Study::PLATFORM_ANDROID_WEBVIEW,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_167[] = {
    {
      "enabled",
      array_kFieldTrialConfig_platforms_167,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_44,
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
      "DesktopCaptureAndroidFrameBufferReuse",
};
const Study::Platform array_kFieldTrialConfig_platforms_166[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_166[] = {
    {
      "Enabled",
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
const char* const array_kFieldTrialConfig_disable_features_8[] = {
      "DeprecatedExternalPickerFunction",
};
const Study::Platform array_kFieldTrialConfig_platforms_165[] = {
      Study::PLATFORM_ANDROID,
      Study::PLATFORM_ANDROID_WEBVIEW,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_165[] = {
    {
      "Disabled",
      array_kFieldTrialConfig_platforms_165,
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
const char* const array_kFieldTrialConfig_enable_features_156[] = {
      "DelayNativePaymentAppScrimShow",
};
const Study::Platform array_kFieldTrialConfig_platforms_164[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_164[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_164,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
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
      "AdditionalDelayMainJob",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_43[] = {
      {
        "AdditionalDelay",
        "100ms",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_163[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_163[] = {
    {
      "EnabledWithDelayMainJob",
      array_kFieldTrialConfig_platforms_163,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_43,
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
      "DeferredDownloadHistoryLoading",
};
const Study::Platform array_kFieldTrialConfig_platforms_162[] = {
      Study::PLATFORM_ANDROID,
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
      "DefaultPassthroughCommandDecoder",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_42[] = {
      {
        "BlockListByDevice",
        "",
      },
      {
        "BlockListByModel",
        "",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_161[] = {
      Study::PLATFORM_ANDROID_WEBVIEW,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_161[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_161,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_42,
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
      "DefaultANGLEVulkan",
};
const Study::FormFactor array_kFieldTrialConfig_form_factors_2[] = {
      Study::PHONE,
      Study::TABLET,
};
const Study::Platform array_kFieldTrialConfig_platforms_160[] = {
      Study::PLATFORM_ANDROID,
      Study::PLATFORM_ANDROID_WEBVIEW,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_160[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_160,
      array_kFieldTrialConfig_form_factors_2,
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
const char* const array_kFieldTrialConfig_enable_features_151[] = {
      "DecodeScriptsInBlink",
};
const Study::Platform array_kFieldTrialConfig_platforms_159[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_159[] = {
    {
      "Enabled_20260714",
      array_kFieldTrialConfig_platforms_159,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
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
      "DebugToolbarPositioning",
};
const Study::Platform array_kFieldTrialConfig_platforms_158[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_158[] = {
    {
      "Enabled_20260713",
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
      "DbdPasswordRemovalOnAndroid",
};
const Study::Platform array_kFieldTrialConfig_platforms_157[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_157[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_157,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
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
      "KeepUnassignedSiteInstanceInOriginalBrowsingInstance",
};
const Study::Platform array_kFieldTrialConfig_platforms_156[] = {
      Study::PLATFORM_ANDROID,
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
      "CreateSpareRendererForDefaultProfile",
};
const Study::Platform array_kFieldTrialConfig_platforms_155[] = {
      Study::PLATFORM_ANDROID_WEBVIEW,
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
const char* const array_kFieldTrialConfig_disable_features_7[] = {
      "CpssUseTfliteSignatureRunner",
};
const Study::Platform array_kFieldTrialConfig_platforms_154[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_154[] = {
    {
      "Disabled_CpssUseTfliteSignatureRunner",
      array_kFieldTrialConfig_platforms_154,
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
const char* const array_kFieldTrialConfig_enable_features_146[] = {
      "CookieMonsterPerKeyDelete",
};
const Study::Platform array_kFieldTrialConfig_platforms_153[] = {
      Study::PLATFORM_ANDROID,
      Study::PLATFORM_ANDROID_WEBVIEW,
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
      "AllowSignedOutUserInDesktopAndroid",
};
const Study::Platform array_kFieldTrialConfig_platforms_152[] = {
      Study::PLATFORM_ANDROID,
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
      array_kFieldTrialConfig_enable_features_145,
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
const Study::Platform array_kFieldTrialConfig_platforms_151[] = {
      Study::PLATFORM_ANDROID,
      Study::PLATFORM_ANDROID_WEBVIEW,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_151[] = {
    {
      "Disable",
      array_kFieldTrialConfig_platforms_151,
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
const Study::Platform array_kFieldTrialConfig_platforms_150[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_150[] = {
    {
      "EnabledPreloadConditionalUse",
      array_kFieldTrialConfig_platforms_150,
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
const char* const array_kFieldTrialConfig_enable_features_144[] = {
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
const Study::Platform array_kFieldTrialConfig_platforms_149[] = {
      Study::PLATFORM_ANDROID,
      Study::PLATFORM_ANDROID_WEBVIEW,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_149[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_149,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_41,
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
      "LensSendUrlsInComposeboxes",
};
const Study::Platform array_kFieldTrialConfig_platforms_148[] = {
      Study::PLATFORM_ANDROID,
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
      "ComposeboxDriveContextMenuOption",
      "ComposeboxDriveContextMenuOptionDisclaimer",
};
const Study::Platform array_kFieldTrialConfig_platforms_147[] = {
      Study::PLATFORM_ANDROID,
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
      "ComponentsBase32InRust",
};
const Study::Platform array_kFieldTrialConfig_platforms_146[] = {
      Study::PLATFORM_ANDROID,
      Study::PLATFORM_ANDROID_WEBVIEW,
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
      "ShoppingList",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_40[] = {
      {
        "allow_bookmark_type_swapping",
        "true",
      },
      {
        "autodismiss_enabled",
        "true",
      },
      {
        "enable_persisted_tab_data_maintenance",
        "true",
      },
      {
        "enable_price_notification",
        "true",
      },
      {
        "enable_price_tracking",
        "true",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_145[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_145[] = {
    {
      "Dogfood",
      array_kFieldTrialConfig_platforms_145,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_40,
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
      "EnableCollectAccessibilityHeuristicInCanvasUkm",
};
const Study::Platform array_kFieldTrialConfig_platforms_144[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_144[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_144,
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
      "CloseQuicSessionsOnPreFreeze",
};
const Study::Platform array_kFieldTrialConfig_platforms_143[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_143[] = {
    {
      "Enabled_20260601",
      array_kFieldTrialConfig_platforms_143,
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
      "ClipboardMaximumAge",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_39[] = {
      {
        "UIClipboardMaximumAge",
        "180",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_142[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_142[] = {
    {
      "MaxAge180",
      array_kFieldTrialConfig_platforms_142,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_39,
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
      "ClientSideDetectionTrickToBill",
};
const Study::Platform array_kFieldTrialConfig_platforms_141[] = {
      Study::PLATFORM_ANDROID,
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
      "ClientSideDetectionScamDetectionRequestWithUrl",
};
const Study::Platform array_kFieldTrialConfig_platforms_140[] = {
      Study::PLATFORM_ANDROID,
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
      "ClientSideDetectionRetryLimit",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_38[] = {
      {
        "RetryTimeMax",
        "15",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_139[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_139[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_139,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_38,
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
      "ClientSideDetectionCreditCardForm",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_37[] = {
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
const Study::Platform array_kFieldTrialConfig_platforms_138[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_138[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_138,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_37,
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
      "ClientSideDetectionBypassTiers",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_36[] = {
      {
        "ClientSideDetectionBypassTiersList",
        "",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_137[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_137[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_137,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_36,
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
      "ClearGrShaderDiskCacheOnInvalidPrefix",
};
const Study::Platform array_kFieldTrialConfig_platforms_136[] = {
      Study::PLATFORM_ANDROID,
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
const char* const array_kFieldTrialConfig_disable_features_4[] = {
      "OrganicRepeatableQueries",
};
const char* const array_kFieldTrialConfig_enable_features_130[] = {
      "MostVisitedTilesNewScoring",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_35[] = {
      {
        "daily_visit_count_cap",
        "10",
      },
      {
        "recency_factor",
        "decay_staircase",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_135[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_135[] = {
    {
      "Enabled_DecayStairCase_Cap10_Disabled_RepeatableQueries",
      array_kFieldTrialConfig_platforms_135,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_35,
      array_kFieldTrialConfig_enable_features_130,
      array_kFieldTrialConfig_disable_features_4,
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_129[] = {
      "FeedSyntheticCapabilities",
};
const Study::Platform array_kFieldTrialConfig_platforms_134[] = {
      Study::PLATFORM_ANDROID,
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
      "EnablePerfettoSystemTracing",
};
const Study::FormFactor array_kFieldTrialConfig_form_factors_1[] = {
      Study::DESKTOP,
};
const Study::Platform array_kFieldTrialConfig_platforms_133[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_133[] = {
    {
      "Enabled_20260901",
      array_kFieldTrialConfig_platforms_133,
      array_kFieldTrialConfig_form_factors_1,
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
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
      "InterestFeedV2",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_34[] = {
      {
        "feed_close_refresh_delay",
        "15m",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_132[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_132[] = {
    {
      "Enabled_15m_prestable_clank_20260803",
      array_kFieldTrialConfig_platforms_132,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_34,
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
      "GestureUserEducationBackSwipe",
      "IPH_GestureUserEducation",
      "IPH_ThreeDotMenuBackButton",
      "ThreeDotMenuBackButton",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_33[] = {
      {
        "gesture-user-education-page-delay",
        "4000",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_131[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_131[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_131,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_33,
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
      "ClampAutomotiveScaling",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_32[] = {
      {
        "max_automotive_scaling_percentage",
        "150",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_130[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_130[] = {
    {
      "ClampAutoScaling",
      array_kFieldTrialConfig_platforms_130,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_32,
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
      "ChromeFinds",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_31[] = {
      {
        "enable_omnibox_recent_search_suggestion_opt_in",
        "true",
      },
      {
        "enable_srp_return_count_opt_in",
        "true",
      },
      {
        "enable_theme_url_visit_count_opt_in",
        "true",
      },
      {
        "finds_model_execution_request_timeout",
        "300s",
      },
      {
        "finds_notification_schedule_start_time_minutes",
        "120",
      },
      {
        "finds_notification_schedule_window_time_minutes",
        "120",
      },
      {
        "finds_opt_in_promo_cooldown_in_days",
        "7",
      },
      {
        "finds_opt_in_promo_max_interacted_count",
        "2",
      },
      {
        "finds_theme_url_visit_count_for_opt_in",
        "3",
      },
      {
        "history_time_window_in_days",
        "7",
      },
      {
        "max_history_entries",
        "50",
      },
      {
        "model_execution_cooldown_duration_in_days",
        "7",
      },
      {
        "omnibox_recent_search_suggestion_count_threshold",
        "2",
      },
      {
        "srp_return_count_threshold",
        "2",
      },
      {
        "theme_cooldown_duration_in_days",
        "28",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_129[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_129[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_129,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_31,
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
      "ChromeEnableDnsPlatform",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_30[] = {
      {
        "no_system",
        "true",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_128[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_128[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_128,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_30,
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
      "CCTClientDataHeader",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_29[] = {
      {
        "expected_version",
        "300000000",
      },
      {
        "header_value",
        "header value",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_127[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_127[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_127,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_29,
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
      "AccessibilityCanvas",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_28[] = {
      {
        "CanvasAccessibilityMode",
        "Basic",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_126[] = {
      Study::PLATFORM_ANDROID,
      Study::PLATFORM_ANDROID_WEBVIEW,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_126[] = {
    {
      "Enabled_Basic",
      array_kFieldTrialConfig_platforms_126,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_28,
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
      "Canvas2dDeferredFlush",
};
const Study::Platform array_kFieldTrialConfig_platforms_125[] = {
      Study::PLATFORM_ANDROID,
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
const char* const array_kFieldTrialConfig_enable_features_119[] = {
      "CalculateDeadlineDerivedInterval",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_27[] = {
      {
        "snap_tolerance",
        "0.05",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_124[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_124[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_124,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_27,
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
      "CacheGurlSchemeIsHttpOrHttpsResult",
};
const Study::Platform array_kFieldTrialConfig_platforms_123[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_123[] = {
    {
      "Enabled_20260629",
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
      "CWSReviewPromptingNativeUI",
};
const Study::Platform array_kFieldTrialConfig_platforms_122[] = {
      Study::PLATFORM_ANDROID,
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
      "CCTNavigationalPrefetch",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_26[] = {
      {
        "holdback",
        "false",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_121[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_121[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_121,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_26,
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
      "CCTGoogleBottomBar",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_25[] = {
      {
        "google_bottom_bar_button_list",
        "0,3,9,2",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_120[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_120[] = {
    {
      "Enabled_AgaDogfood",
      array_kFieldTrialConfig_platforms_120,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_25,
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
      "BusyLoopAggressiveAfterCommittedLoad",
      "BusyLoopLessWhenCompositorGesture",
      "BusyLoopOnMainThread",
};
const Study::Platform array_kFieldTrialConfig_platforms_119[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_119[] = {
    {
      "WithOptimization",
      array_kFieldTrialConfig_platforms_119,
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
      "BuildTFLiteModelExecutionTaskOnLoadingThread",
};
const Study::Platform array_kFieldTrialConfig_platforms_118[] = {
      Study::PLATFORM_ANDROID,
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
      "BrowsingHistorySimilarVisitsGrouping",
};
const Study::Platform array_kFieldTrialConfig_platforms_117[] = {
      Study::PLATFORM_ANDROID,
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
      "BrowsingHistoryFilterByActor",
      "BrowsingHistoryFilterByDevice",
};
const Study::Platform array_kFieldTrialConfig_platforms_116[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_116[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_116,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
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
      "BrowsingDataModelSharedWorkerKeyWithoutURL",
};
const Study::Platform array_kFieldTrialConfig_platforms_115[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_115[] = {
    {
      "Enabled_20261021",
      array_kFieldTrialConfig_platforms_115,
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
      "BrowserThreadPoolAdjustment",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_24[] = {
      {
        "BrowserThreadPoolCoresMultiplier",
        "0.6",
      },
      {
        "BrowserThreadPoolMax",
        "8",
      },
      {
        "BrowserThreadPoolMin",
        "6",
      },
      {
        "BrowserThreadPoolOffset",
        "0",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_114[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_114[] = {
    {
      "thread_pool_default_20230920",
      array_kFieldTrialConfig_platforms_114,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_24,
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
      "InitialDelayForBrokenAlternativeService",
      "MaxDelayForBrokenAlternativeService",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_23[] = {
      {
        "InitialDelayForBrokenAlternativeServiceParam",
        "1s",
      },
      {
        "MaxDelayForBrokenAlternativeServiceParam",
        "5m",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_113[] = {
      Study::PLATFORM_ANDROID,
      Study::PLATFORM_ANDROID_WEBVIEW,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_113[] = {
    {
      "Initial1s_Max5m_20260804",
      array_kFieldTrialConfig_platforms_113,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_23,
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
      "IPH_BookmarkBarVisibility",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_22[] = {
      {
        "IPH_BookmarkBarVisibility_availability",
        "any",
      },
      {
        "IPH_BookmarkBarVisibility_event_1",
        "name:bookmark_bar_visibility_iph_triggered;comparator:<3;window:3650;storage:3650",
      },
      {
        "IPH_BookmarkBarVisibility_event_trigger",
        "name:bookmark_bar_visibility_iph_triggered;comparator:==0;window:7;storage:3650",
      },
      {
        "IPH_BookmarkBarVisibility_event_used",
        "name:settings_appearance_opened;comparator:==0;window:360;storage:360",
      },
      {
        "IPH_BookmarkBarVisibility_session_rate",
        "==0",
      },
      {
        "IPH_BookmarkBarVisibility_tracking_only",
        "false",
      },
      {
        "IPH_BookmarkBarVisibility_x_variant",
        "medium",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_112[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_112[] = {
    {
      "Medium",
      array_kFieldTrialConfig_platforms_112,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_22,
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
      "BiometricTouchToFill",
};
const Study::Platform array_kFieldTrialConfig_platforms_111[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_111[] = {
    {
      "Enabled_20210616",
      array_kFieldTrialConfig_platforms_111,
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
      "BeaconLeakageLogging",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_21[] = {
      {
        "category_param_name",
        "category",
      },
      {
        "category_prefix",
        "acrcp_v1_",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_110[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_110[] = {
    {
      "Enabled_v1",
      array_kFieldTrialConfig_platforms_110,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_21,
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
      "BatchNativeEventsInMessagePumpEpoll",
};
const Study::Platform array_kFieldTrialConfig_platforms_109[] = {
      Study::PLATFORM_ANDROID,
      Study::PLATFORM_ANDROID_WEBVIEW,
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
      "BaseLockTrySpin",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_20[] = {
      {
        "spin_count_arm",
        "2048",
      },
      {
        "spin_count_x86",
        "64",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_108[] = {
      Study::PLATFORM_ANDROID,
      Study::PLATFORM_ANDROID_WEBVIEW,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_108[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_108,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_20,
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
      "BackgroundThreadPoolFieldTrial",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_19[] = {
      {
        "config",
        "6",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_107[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_107[] = {
    {
      "Enabled_20260106",
      array_kFieldTrialConfig_platforms_107,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_19,
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
      "BackForwardCacheMemoryControls",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_18[] = {
      {
        "memory_threshold_for_back_forward_cache_in_mb",
        "1",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_106[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_106[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_106,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_18,
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
      "BackForwardCacheCCNSIgnoreUnchangedCookies",
};
const Study::Platform array_kFieldTrialConfig_platforms_105[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_105[] = {
    {
      "Enabled_20260401",
      array_kFieldTrialConfig_platforms_105,
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
      "BFCachePerformanceManagerPolicy",
      "BackForwardCacheSize",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_17[] = {
      {
        "cache_size",
        "6",
      },
      {
        "foreground_cache_size",
        "0",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_104[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_104[] = {
    {
      "EnabledPolicy_CacheSize6_20230525",
      array_kFieldTrialConfig_platforms_104,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_17,
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
      "AvoidPerContextColorProviders",
};
const Study::Platform array_kFieldTrialConfig_platforms_103[] = {
      Study::PLATFORM_ANDROID,
      Study::PLATFORM_ANDROID_WEBVIEW,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_103[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_103,
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
      "AvoidEntryCreationForNoStore",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_16[] = {
      {
        "AvoidEntryCreationForNoStoreCacheSize",
        "40000",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_102[] = {
      Study::PLATFORM_ANDROID,
      Study::PLATFORM_ANDROID_WEBVIEW,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_102[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_102,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_16,
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
      "AutomaticUsbDetach",
};
const Study::Platform array_kFieldTrialConfig_platforms_101[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_101[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_101,
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
      "AutofillWipeInvalidNameStructure",
};
const Study::Platform array_kFieldTrialConfig_platforms_100[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_100[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_100,
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
const char* const array_kFieldTrialConfig_enable_features_94[] = {
      "AutofillUpstreamEnforceStrikeDelay",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_15[] = {
      {
        "autofill_upstream_enforce_strike_delay_days",
        "1",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_99[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_99[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_99,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_15,
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
      "AutofillUpstream",
};
const Study::Platform array_kFieldTrialConfig_platforms_98[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_98[] = {
    {
      "Enabled_20220124",
      array_kFieldTrialConfig_platforms_98,
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
      "AutofillUKMExperimentalFields",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_14[] = {
      {
        "autofill_experimental_regex_bucket1",
        "test1",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_97[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_97[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_97,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_14,
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
      "AutofillSupportStandaloneZipCodeGlobally",
};
const Study::Platform array_kFieldTrialConfig_platforms_96[] = {
      Study::PLATFORM_ANDROID,
      Study::PLATFORM_ANDROID_WEBVIEW,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_96[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_96,
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
const char* const array_kFieldTrialConfig_enable_features_90[] = {
      "AutofillDisallowMoreHyphenLikeLabels",
      "AutofillSupportSplitZipCode",
};
const Study::Platform array_kFieldTrialConfig_platforms_95[] = {
      Study::PLATFORM_ANDROID,
      Study::PLATFORM_ANDROID_WEBVIEW,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_95[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_95,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      array_kFieldTrialConfig_enable_features_90,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_89[] = {
      "AutofillRequireFocusInFrameForSuggestions",
};
const Study::Platform array_kFieldTrialConfig_platforms_94[] = {
      Study::PLATFORM_ANDROID,
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
      "AutofillOptimizeIsNormalizedNameVariantOf",
};
const Study::Platform array_kFieldTrialConfig_platforms_93[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_93[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_93,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
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
      "AutofillOnlyConsiderSingleFieldFormsAsSearchForms",
};
const Study::Platform array_kFieldTrialConfig_platforms_92[] = {
      Study::PLATFORM_ANDROID,
      Study::PLATFORM_ANDROID_WEBVIEW,
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
      "AutofillNewSuggestionGeneration",
};
const Study::Platform array_kFieldTrialConfig_platforms_91[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_91[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_91,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
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
      "AutofillMoveSmallFormLogicToClient",
};
const Study::Platform array_kFieldTrialConfig_platforms_90[] = {
      Study::PLATFORM_ANDROID,
      Study::PLATFORM_ANDROID_WEBVIEW,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_90[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_90,
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
      "AutofillMergeAddressAndAutocompleteEmailSuggestions",
};
const Study::Platform array_kFieldTrialConfig_platforms_89[] = {
      Study::PLATFORM_ANDROID,
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
      "AutofillLabelSensitiveAutocomplete",
};
const Study::Platform array_kFieldTrialConfig_platforms_88[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_88[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_88,
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
      "AutofillKeydownEditableElement",
};
const Study::Platform array_kFieldTrialConfig_platforms_87[] = {
      Study::PLATFORM_ANDROID,
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
      "AutofillIntroduceGlobalEmptyValueRewriterRules",
};
const Study::Platform array_kFieldTrialConfig_platforms_86[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_86[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_86,
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
      "AutofillImproveClassificationForTwoWordLastNames",
};
const Study::Platform array_kFieldTrialConfig_platforms_85[] = {
      Study::PLATFORM_ANDROID,
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
      "AutofillHideSuggestionsOnFocusChange",
};
const Study::Platform array_kFieldTrialConfig_platforms_84[] = {
      Study::PLATFORM_ANDROID,
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
      "AutofillFixIframeOwnership",
};
const Study::Platform array_kFieldTrialConfig_platforms_83[] = {
      Study::PLATFORM_ANDROID,
      Study::PLATFORM_ANDROID_WEBVIEW,
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
      "AutofillEnableWalletReminderNotice",
};
const Study::Platform array_kFieldTrialConfig_platforms_82[] = {
      Study::PLATFORM_ANDROID,
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
      "AutofillEnableWalletBrandingV2",
};
const Study::Platform array_kFieldTrialConfig_platforms_81[] = {
      Study::PLATFORM_ANDROID,
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
      "AutofillEnableTravelCategoryAndMerchantBenefitsFromCurinos",
};
const Study::Platform array_kFieldTrialConfig_platforms_80[] = {
      Study::PLATFORM_ANDROID,
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
      "AutofillEnableScanCardOptionWhenNoCardsSaved",
};
const Study::Platform array_kFieldTrialConfig_platforms_79[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_79[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_79,
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
      "AutofillEnableResurrectingPaymentsUsers",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_13[] = {
      {
        "autofill_enable_resurrecting_payments_churned_users_treatment",
        "1",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_78[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_78[] = {
    {
      "Enabled_Security",
      array_kFieldTrialConfig_platforms_78,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_13,
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
      "AutofillEnableAiBasedAmountExtraction",
      "AutofillEnableAmountExtraction",
      "AutofillEnableBuyNowPayLater",
      "AutofillEnablePayNowPayLaterTabs",
};
const Study::Platform array_kFieldTrialConfig_platforms_77[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_77[] = {
    {
      "Enabled_Tabs_20260904",
      array_kFieldTrialConfig_platforms_77,
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
      "AutofillEnableExpandIbanRegexPattern",
};
const Study::Platform array_kFieldTrialConfig_platforms_76[] = {
      Study::PLATFORM_ANDROID,
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
      "AutofillDisallowCountryCodeFilling",
};
const Study::Platform array_kFieldTrialConfig_platforms_75[] = {
      Study::PLATFORM_ANDROID,
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
      "AutofillDelayApcForPredictions",
};
const Study::Platform array_kFieldTrialConfig_platforms_74[] = {
      Study::PLATFORM_ANDROID,
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
      "AutofillComplementCountryUsingPhoneNumber",
};
const Study::Platform array_kFieldTrialConfig_platforms_73[] = {
      Study::PLATFORM_ANDROID,
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
      "AutofillBetterLocalHeuristicPlaceholderSupport",
};
const Study::Platform array_kFieldTrialConfig_platforms_72[] = {
      Study::PLATFORM_ANDROID,
      Study::PLATFORM_ANDROID_WEBVIEW,
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
      "AutofillAndroidUseGlobalIdForFormComparison",
};
const Study::Platform array_kFieldTrialConfig_platforms_71[] = {
      Study::PLATFORM_ANDROID,
      Study::PLATFORM_ANDROID_WEBVIEW,
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
      "AutofillAndroidKeyboardAccessoryHoverPreview",
};
const Study::Platform array_kFieldTrialConfig_platforms_70[] = {
      Study::PLATFORM_ANDROID,
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
      "AutofillAiWalletServerProvidedDeepLink",
};
const Study::Platform array_kFieldTrialConfig_platforms_69[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_69[] = {
    {
      "Enabled_20261007",
      array_kFieldTrialConfig_platforms_69,
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
      "AutofillAiWalletPassBranding2026",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_12[] = {
      {
        "string_variant",
        "0",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_68[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_68[] = {
    {
      "Enabled_GoogleWallet",
      array_kFieldTrialConfig_platforms_68,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_12,
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
      "AutofillAiUsePrivateAi",
};
const Study::Platform array_kFieldTrialConfig_platforms_67[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_67[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_67,
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
      "AutofillAiPrivateInferenceNoticeBottomSheet",
};
const Study::Platform array_kFieldTrialConfig_platforms_66[] = {
      Study::PLATFORM_ANDROID,
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
      "AutofillAiWalletShopping",
      "AutofillEnableAutofillSettingsEnterprisePolicy",
};
const Study::Platform array_kFieldTrialConfig_platforms_65[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_65[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_65,
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
      "AutofillAiAvailableByDefault",
      "AutofillAiDedupeEntities",
      "AutofillAiReauthRequired",
      "AutofillAiServerModel",
      "AutofillAiVoteForFormatStringsForFlightNumbers",
      "AutofillAiWalletFlightReservation",
      "AutofillAiWalletPrivatePasses",
      "AutofillAiWalletPrivatePassesDeepLink",
      "AutofillAiWalletVehicleRegistration",
      "AutofillAiWithDataSchema",
      "FormsClassificationsMqlsLogging",
      "IPH_AutofillAiValuables",
      "SyncAccountSettings",
      "SyncAutofillValuableMetadata",
      "SyncWalletFlightReservations",
      "SyncWalletVehicleRegistrations",
      "WalletApiPrivatePassesEnabled",
};
const Study::Platform array_kFieldTrialConfig_platforms_64[] = {
      Study::PLATFORM_ANDROID,
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
      "AutofillAiEditEntitiesFromSaveUpdatePrompt",
};
const Study::Platform array_kFieldTrialConfig_platforms_63[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_63[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_63,
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
      "AutoSpeculationRules",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_11[] = {
      {
        "config",
        "{\"framework_to_speculation_rules\":{\"12\":\"{\\\"prefetch\\\":[{\\\"source\\\":\\\"document\\\",\\\"eagerness\\\":\\\"conservative\\\",\\\"where\\\":{\\\"href_matches\\\":\\\"/*\\\"}}]}\"}}",
      },
      {
        "holdback",
        "false",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_62[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_62[] = {
    {
      "Enabled_20231201",
      array_kFieldTrialConfig_platforms_62,
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
      "AudioRendererMixerImmediatePause",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_10[] = {
      {
        "delay",
        "250ms",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_61[] = {
      Study::PLATFORM_ANDROID,
      Study::PLATFORM_ANDROID_WEBVIEW,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_61[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_61,
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
const char* const array_kFieldTrialConfig_disable_features_3[] = {
      "ConversionMeasurement",
};
const Study::Platform array_kFieldTrialConfig_platforms_60[] = {
      Study::PLATFORM_ANDROID,
      Study::PLATFORM_ANDROID_WEBVIEW,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_60[] = {
    {
      "Disabled",
      array_kFieldTrialConfig_platforms_60,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
      {},
      array_kFieldTrialConfig_disable_features_3,
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_enable_features_55[] = {
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
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_9[] = {
      {
        "state",
        "2",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_59[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_59[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_59,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_9,
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
      "AsyncThreadPoolInit",
};
const Study::Platform array_kFieldTrialConfig_platforms_58[] = {
      Study::PLATFORM_ANDROID,
      Study::PLATFORM_ANDROID_WEBVIEW,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_58[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_58,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      {},
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
      "AsyncNotificationManager",
      "AsyncNotificationManagerForDownload",
};
const Study::Platform array_kFieldTrialConfig_platforms_57[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_57[] = {
    {
      "EnableWithDownload",
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
const char* const array_kFieldTrialConfig_disable_features_2[] = {
      "AsyncNavigationIntercept",
};
const Study::Platform array_kFieldTrialConfig_platforms_56[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_56[] = {
    {
      "Disabled",
      array_kFieldTrialConfig_platforms_56,
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
const char* const array_kFieldTrialConfig_enable_features_52[] = {
      "AsyncDnsQuicJob",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_8[] = {
      {
        "AsyncDnsQuicJobFastFail",
        "true",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_55[] = {
      Study::PLATFORM_ANDROID,
      Study::PLATFORM_ANDROID_WEBVIEW,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_55[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_55,
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
const char* const array_kFieldTrialConfig_enable_features_51[] = {
      "AsyncBeforeUnload",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_7[] = {
      {
        "AsyncBeforeUnloadTimeout",
        "500ms",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_54[] = {
      Study::PLATFORM_ANDROID,
      Study::PLATFORM_ANDROID_WEBVIEW,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_54[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_54,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_7,
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
      "AnnotatedPageContentsVirtualStructure",
};
const Study::Platform array_kFieldTrialConfig_platforms_53[] = {
      Study::PLATFORM_ANDROID,
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
      array_kFieldTrialConfig_enable_features_50,
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
const Study::Platform array_kFieldTrialConfig_platforms_52[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_52[] = {
    {
      "Disabled",
      array_kFieldTrialConfig_platforms_52,
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
const Study::Platform array_kFieldTrialConfig_platforms_51[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_51[] = {
    {
      "Disabled",
      array_kFieldTrialConfig_platforms_51,
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
const char* const array_kFieldTrialConfig_enable_features_49[] = {
      "AnnotatedPageContentExtraction",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_6[] = {
      {
        "capture_delay",
        "5s",
      },
      {
        "on_critical_path",
        "true",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_50[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_50[] = {
    {
      "Glic",
      array_kFieldTrialConfig_platforms_50,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_6,
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
      "AndroidZeroCopyVideoCapture",
};
const Study::Platform array_kFieldTrialConfig_platforms_49[] = {
      Study::PLATFORM_ANDROID,
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
      "AndroidYuvOverlayEvenAlignment",
};
const Study::Platform array_kFieldTrialConfig_platforms_48[] = {
      Study::PLATFORM_ANDROID,
      Study::PLATFORM_ANDROID_WEBVIEW,
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
      "AndroidWindowOcclusion",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_5[] = {
      {
        "calculate_occlusion_rate_limit_ms",
        "100",
      },
      {
        "minimum_visibility_size_threshold",
        "10",
      },
      {
        "occlusion_optimizations",
        "true",
      },
      {
        "tracking_mode",
        "self_occlusion",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_47[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_47[] = {
    {
      "FlexibleOcclusionMediumRateLimit",
      array_kFieldTrialConfig_platforms_47,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_5,
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
      "AndroidUseCorrectDisplayWorkArea",
      "AndroidUseDisplayTopology",
      "AndroidWindowManagementWebApi",
};
const Study::Platform array_kFieldTrialConfig_platforms_46[] = {
      Study::PLATFORM_ANDROID,
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
      "AndroidVerticalTabs",
      "IPH_AndroidVerticalTabsPromo",
};
const Study::Platform array_kFieldTrialConfig_platforms_45[] = {
      Study::PLATFORM_ANDROID,
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
      "AndroidUseDisplayTopology",
};
const Study::Platform array_kFieldTrialConfig_platforms_44[] = {
      Study::PLATFORM_ANDROID_WEBVIEW,
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
      "AndroidUseCorrectDisplayWorkArea",
};
const Study::Platform array_kFieldTrialConfig_platforms_43[] = {
      Study::PLATFORM_ANDROID_WEBVIEW,
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
      "AndroidTipsNotificationsV2",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_4[] = {
      {
        "ecosystem_lock_in",
        "true",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_42[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_42[] = {
    {
      "Enabled_V2_EcosystemLockIn",
      array_kFieldTrialConfig_platforms_42,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_4,
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
      "AndroidThreadPriority",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_3[] = {
      {
        "interactive",
        "-8",
      },
      {
        "obey_soc_restrictions",
        "false",
      },
      {
        "presentation",
        "-8",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_41[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_41[] = {
    {
      "RaiseDisplayCriticalThreadPriorityV2",
      array_kFieldTrialConfig_platforms_41,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_3,
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
      "AndroidTabUiRefactor",
};
const Study::Platform array_kFieldTrialConfig_platforms_40[] = {
      Study::PLATFORM_ANDROID,
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
      "AndroidTabSearchRecentTabs",
};
const Study::Platform array_kFieldTrialConfig_platforms_39[] = {
      Study::PLATFORM_ANDROID,
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
      "IPH_AndroidTabDeclutter",
};
const Study::Platform array_kFieldTrialConfig_platforms_38[] = {
      Study::PLATFORM_ANDROID,
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
      "AndroidSystemFontPrewarming",
};
const Study::Platform array_kFieldTrialConfig_platforms_37[] = {
      Study::PLATFORM_ANDROID,
      Study::PLATFORM_ANDROID_WEBVIEW,
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
      "EnableSwipeToSwitchPane",
};
const Study::Platform array_kFieldTrialConfig_platforms_36[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_36[] = {
    {
      "Enabled_20260106",
      array_kFieldTrialConfig_platforms_36,
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
      "AndroidSwapPressureTabDiscard",
};
const Study::Platform array_kFieldTrialConfig_platforms_35[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_35[] = {
    {
      "Enabled_20261023",
      array_kFieldTrialConfig_platforms_35,
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
      "AndroidSurfaceControlPartialDamage",
};
const Study::Platform array_kFieldTrialConfig_platforms_34[] = {
      Study::PLATFORM_ANDROID,
      Study::PLATFORM_ANDROID_WEBVIEW,
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
      "AndroidSurfaceControlHdrOverlays",
};
const Study::Platform array_kFieldTrialConfig_platforms_33[] = {
      Study::PLATFORM_ANDROID,
      Study::PLATFORM_ANDROID_WEBVIEW,
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
      "AndroidStartupImprovements",
};
const Study::Platform array_kFieldTrialConfig_platforms_32[] = {
      Study::PLATFORM_ANDROID,
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
      "AndroidGrammarCheck",
      "AndroidSpellcheckFullApiBlink",
      "AndroidSpellcheckNativeUi",
      "LeftClickToHandleSuggestion",
      "SpellCheckChunking",
};
const Study::Platform array_kFieldTrialConfig_platforms_31[] = {
      Study::PLATFORM_ANDROID,
      Study::PLATFORM_ANDROID_WEBVIEW,
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
      "AndroidWarmUpSpareRendererWithTimeout",
      "OverrideAndroidOmniboxSpareRendererDelay",
      "SpareRendererProcessPriority",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_2[] = {
      {
        "kill_when_backgrounded",
        "true",
      },
      {
        "lowest-ranking",
        "true",
      },
      {
        "not-perceptible-binding",
        "false",
      },
      {
        "omnibox_spare_renderer_delay_ms",
        "500",
      },
      {
        "only_for_navigation",
        "true",
      },
      {
        "only_warmup_after_web_page_loaded",
        "true",
      },
      {
        "remove-binding-no-timeout",
        "true",
      },
      {
        "spare_renderer_available_memory_threshold_enabled",
        "false",
      },
      {
        "spare_renderer_creation_timing",
        "after-loading",
      },
      {
        "spare_renderer_timeout_seconds",
        "60",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_30[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_30[] = {
    {
      "FilterNTPNoMemoryThresholdWithKill",
      array_kFieldTrialConfig_platforms_30,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_2,
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
      "ReaderModeBlurTransitionAnimation",
      "ReaderModeDelayBottomSheetPeek",
      "ReaderModeToggleLinks",
};
const Study::Platform array_kFieldTrialConfig_platforms_29[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_29[] = {
    {
      "EnabledAll",
      array_kFieldTrialConfig_platforms_29,
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
      "AndroidNavigationBlurTransitionAnimation",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_1[] = {
      {
        "nav-animation-fade-hold-duration-ms",
        "350",
      },
      {
        "nav-animation-fade-out-duration-ms",
        "150",
      },
      {
        "skip_srp",
        "false",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_28[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_28[] = {
    {
      "Enabled_FadeOut150",
      array_kFieldTrialConfig_platforms_28,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_1,
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
      "AndroidMediaInsertion",
};
const Study::Platform array_kFieldTrialConfig_platforms_27[] = {
      Study::PLATFORM_ANDROID,
      Study::PLATFORM_ANDROID_WEBVIEW,
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
      "AndroidInstallAnyPageAsDiyAppStopgap",
};
const Study::Platform array_kFieldTrialConfig_platforms_26[] = {
      Study::PLATFORM_ANDROID,
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
      "AndroidFreLayoutUpdate",
};
const Study::Platform array_kFieldTrialConfig_platforms_25[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_25[] = {
    {
      "Enabled_20260901",
      array_kFieldTrialConfig_platforms_25,
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
      "EnterpriseRealTimeUrlCheckUrlSkiplist",
      "SafeBrowsingSkipRealTimeLookupIfOffline",
};
const Study::Platform array_kFieldTrialConfig_platforms_24[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_24[] = {
    {
      "BothEnabled",
      array_kFieldTrialConfig_platforms_24,
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
      "EnableDownloadSaveAsContextMenu",
      "OpenDownloadInFilesAppIfNoHandlerFound",
      "OpenDownloadInNewTab",
      "OpenDownloadInPreferredApp",
};
const Study::Platform array_kFieldTrialConfig_platforms_23[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_23[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_23,
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
      "DocumentPictureInPictureAPI",
};
const Study::Platform array_kFieldTrialConfig_platforms_22[] = {
      Study::PLATFORM_ANDROID,
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
      "AndroidDevToolsFrontend",
};
const Study::Platform array_kFieldTrialConfig_platforms_21[] = {
      Study::PLATFORM_ANDROID,
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
      "AndroidDesktopWebUiHistory",
};
const Study::Platform array_kFieldTrialConfig_platforms_20[] = {
      Study::PLATFORM_ANDROID,
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
      "AndroidDesktopWebPrefsLargeDisplays",
};
const Study::Platform array_kFieldTrialConfig_platforms_19[] = {
      Study::PLATFORM_ANDROID,
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
      "AndroidDesktopUASpoofAsChromeOS",
};
const Study::Platform array_kFieldTrialConfig_platforms_18[] = {
      Study::PLATFORM_ANDROID,
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
      "AndroidDesktopUAPlatform",
};
const Study::Platform array_kFieldTrialConfig_platforms_17[] = {
      Study::PLATFORM_ANDROID,
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
      array_kFieldTrialConfig_enable_features_16,
      {},
      nullptr,
      {},
      {},
      {},
      {},
    },
};
const char* const array_kFieldTrialConfig_disable_features[] = {
      "ClankGlicContextMenu",
};
const Study::Platform array_kFieldTrialConfig_platforms_16[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_16[] = {
    {
      "Disabled_50_20260915",
      array_kFieldTrialConfig_platforms_16,
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
const char* const array_kFieldTrialConfig_enable_features_15[] = {
      "AndroidDesktopBookmarkDialog",
      "AndroidDesktopBookmarkPopup",
      "BookmarksBarContextMenu",
      "BookmarksBarNTP",
};
const Study::FormFactor array_kFieldTrialConfig_form_factors_0[] = {
      Study::DESKTOP,
};
const Study::Platform array_kFieldTrialConfig_platforms_15[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_15[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_15,
      array_kFieldTrialConfig_form_factors_0,
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
      "HistoryPaneAndroid",
};
const Study::Platform array_kFieldTrialConfig_platforms_14[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_14[] = {
    {
      "EnabledWithHistoryPane",
      array_kFieldTrialConfig_platforms_14,
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
      "AndroidBeforeUnloadSupport",
};
const Study::FormFactor array_kFieldTrialConfig_form_factors[] = {
      Study::DESKTOP,
};
const Study::Platform array_kFieldTrialConfig_platforms_13[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_13[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_13,
      array_kFieldTrialConfig_form_factors,
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
const char* const array_kFieldTrialConfig_enable_features_12[] = {
      "AndroidAppRatingPrompt",
};
const Study::Platform array_kFieldTrialConfig_platforms_12[] = {
      Study::PLATFORM_ANDROID,
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
      "AnimatedImageDragShadow",
};
const Study::Platform array_kFieldTrialConfig_platforms_11[] = {
      Study::PLATFORM_ANDROID,
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
      "UsePerformanceHelper",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params_0[] = {
      {
        "helper_mode",
        "affinity",
      },
      {
        "page_load_boost",
        "3s",
      },
      {
        "scroll_boost",
        "0.2s",
      },
      {
        "user_input_boost",
        "2s",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_10[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_10[] = {
    {
      "Enabled_LongInputBoost_20261016",
      array_kFieldTrialConfig_platforms_10,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params_0,
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
      "AllowMultipleMediaNotifications",
};
const Study::Platform array_kFieldTrialConfig_platforms_9[] = {
      Study::PLATFORM_ANDROID,
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
      "Aim3pEntrypoint",
};
const Study::Platform array_kFieldTrialConfig_platforms_8[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_8[] = {
    {
      "enabled",
      array_kFieldTrialConfig_platforms_8,
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
      "AiSubscriptionAvatarRingFollowup",
};
const Study::Platform array_kFieldTrialConfig_platforms_7[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_7[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_7,
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
      "EnableAiSubscriptionAvatarRing",
};
const Study::Platform array_kFieldTrialConfig_platforms_6[] = {
      Study::PLATFORM_ANDROID,
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
      "AddressSorterConnectCache",
};
const Study::Platform array_kFieldTrialConfig_platforms_5[] = {
      Study::PLATFORM_ANDROID,
      Study::PLATFORM_ANDROID_WEBVIEW,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_5[] = {
    {
      "Enabled",
      array_kFieldTrialConfig_platforms_5,
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
      "AccountPickerDialog",
};
const Study::Platform array_kFieldTrialConfig_platforms_4[] = {
      Study::PLATFORM_ANDROID,
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
      "AccessibilitySequentialFocus",
};
const Study::Platform array_kFieldTrialConfig_platforms_3[] = {
      Study::PLATFORM_ANDROID,
      Study::PLATFORM_ANDROID_WEBVIEW,
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
      "AccessibilityRequestScopedContentChangedEvents",
};
const FieldTrialTestingExperimentParams array_kFieldTrialConfig_params[] = {
      {
        "max_events",
        "5",
      },
      {
        "prevent_window_content_changes_for_nodes_not_likely_in_android",
        "true",
      },
};
const Study::Platform array_kFieldTrialConfig_platforms_2[] = {
      Study::PLATFORM_ANDROID,
};
const FieldTrialTestingExperiment array_kFieldTrialConfig_experiments_2[] = {
    {
      "MaxContentChangedEventsToFire_005",
      array_kFieldTrialConfig_platforms_2,
      {},
      std::nullopt,
      std::nullopt,
      nullptr,
      array_kFieldTrialConfig_params,
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
      "AccessibilityPageZoomV2",
};
const Study::Platform array_kFieldTrialConfig_platforms_1[] = {
      Study::PLATFORM_ANDROID,
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
      "AXRandomizedStressTests",
};
const Study::Platform array_kFieldTrialConfig_platforms_0[] = {
      Study::PLATFORM_ANDROID,
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
      "AAudioVariableSizedCallbacks",
};
const Study::Platform array_kFieldTrialConfig_platforms[] = {
      Study::PLATFORM_ANDROID,
      Study::PLATFORM_ANDROID_WEBVIEW,
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
    "AAudioVariableSizedCallbacks",
    array_kFieldTrialConfig_experiments,
  },
  {
    "AXRandomizedStressTests",
    array_kFieldTrialConfig_experiments_0,
  },
  {
    "AccessibilityPageZoomV2",
    array_kFieldTrialConfig_experiments_1,
  },
  {
    "AccessibilityRequestScopedContentChangedEvents",
    array_kFieldTrialConfig_experiments_2,
  },
  {
    "AccessibilitySequentialFocus",
    array_kFieldTrialConfig_experiments_3,
  },
  {
    "AccountPickerDialog",
    array_kFieldTrialConfig_experiments_4,
  },
  {
    "AddressSorterConnectCache",
    array_kFieldTrialConfig_experiments_5,
  },
  {
    "AiSubscriptionAvatarRingAndroid",
    array_kFieldTrialConfig_experiments_6,
  },
  {
    "AiSubscriptionAvatarRingFollowupAndroid",
    array_kFieldTrialConfig_experiments_7,
  },
  {
    "Aim3pEntrypoint",
    array_kFieldTrialConfig_experiments_8,
  },
  {
    "AllowMultipleMediaNotifications",
    array_kFieldTrialConfig_experiments_9,
  },
  {
    "AndroidAdaptiveAffinityMode",
    array_kFieldTrialConfig_experiments_10,
  },
  {
    "AndroidAnimatedImageDragShadow",
    array_kFieldTrialConfig_experiments_11,
  },
  {
    "AndroidAppRatingPrompt",
    array_kFieldTrialConfig_experiments_12,
  },
  {
    "AndroidBeforeUnloadSupport",
    array_kFieldTrialConfig_experiments_13,
  },
  {
    "AndroidBookmarkHistoryPane",
    array_kFieldTrialConfig_experiments_14,
  },
  {
    "AndroidDesktopBookmarkImprovements",
    array_kFieldTrialConfig_experiments_15,
  },
  {
    "AndroidDesktopGlicContextMenu",
    array_kFieldTrialConfig_experiments_16,
  },
  {
    "AndroidDesktopUAPlatform",
    array_kFieldTrialConfig_experiments_17,
  },
  {
    "AndroidDesktopUASpoofAsChromeOS",
    array_kFieldTrialConfig_experiments_18,
  },
  {
    "AndroidDesktopWebPrefsLargeDisplays",
    array_kFieldTrialConfig_experiments_19,
  },
  {
    "AndroidDesktopWebUiHistory",
    array_kFieldTrialConfig_experiments_20,
  },
  {
    "AndroidDevToolsFrontend",
    array_kFieldTrialConfig_experiments_21,
  },
  {
    "AndroidDocumentPictureInPictureAPI",
    array_kFieldTrialConfig_experiments_22,
  },
  {
    "AndroidDownloadImprovements",
    array_kFieldTrialConfig_experiments_23,
  },
  {
    "AndroidEnterpriseSkipRealTimeUrlLookup",
    array_kFieldTrialConfig_experiments_24,
  },
  {
    "AndroidFreLayoutUpdate",
    array_kFieldTrialConfig_experiments_25,
  },
  {
    "AndroidInstallAnyPageAsDiyAppStopgap",
    array_kFieldTrialConfig_experiments_26,
  },
  {
    "AndroidMediaInsertion",
    array_kFieldTrialConfig_experiments_27,
  },
  {
    "AndroidNavigationBlurTransitionAnimation",
    array_kFieldTrialConfig_experiments_28,
  },
  {
    "AndroidReaderModeFastFollows",
    array_kFieldTrialConfig_experiments_29,
  },
  {
    "AndroidSpareRendererCreation_V3",
    array_kFieldTrialConfig_experiments_30,
  },
  {
    "AndroidSpellcheckAndGrammarCheck",
    array_kFieldTrialConfig_experiments_31,
  },
  {
    "AndroidStartupImprovements",
    array_kFieldTrialConfig_experiments_32,
  },
  {
    "AndroidSurfaceControlHdrOverlays",
    array_kFieldTrialConfig_experiments_33,
  },
  {
    "AndroidSurfaceControlPartialDamage",
    array_kFieldTrialConfig_experiments_34,
  },
  {
    "AndroidSwapPressureTabDiscard",
    array_kFieldTrialConfig_experiments_35,
  },
  {
    "AndroidSwipeToSwitchPane",
    array_kFieldTrialConfig_experiments_36,
  },
  {
    "AndroidSystemFontPrewarming",
    array_kFieldTrialConfig_experiments_37,
  },
  {
    "AndroidTabDeclutterIPH",
    array_kFieldTrialConfig_experiments_38,
  },
  {
    "AndroidTabSearchRecentTabs",
    array_kFieldTrialConfig_experiments_39,
  },
  {
    "AndroidTabUiRefactor",
    array_kFieldTrialConfig_experiments_40,
  },
  {
    "AndroidThreadPriority",
    array_kFieldTrialConfig_experiments_41,
  },
  {
    "AndroidTipsNotificationsV2",
    array_kFieldTrialConfig_experiments_42,
  },
  {
    "AndroidUseCorrectDisplayWorkArea",
    array_kFieldTrialConfig_experiments_43,
  },
  {
    "AndroidUseDisplayTopology",
    array_kFieldTrialConfig_experiments_44,
  },
  {
    "AndroidVerticalTabs",
    array_kFieldTrialConfig_experiments_45,
  },
  {
    "AndroidWindowManagementWebApi",
    array_kFieldTrialConfig_experiments_46,
  },
  {
    "AndroidWindowOcclusion",
    array_kFieldTrialConfig_experiments_47,
  },
  {
    "AndroidYuvOverlayEvenAlignment",
    array_kFieldTrialConfig_experiments_48,
  },
  {
    "AndroidZeroCopyVideoCapture",
    array_kFieldTrialConfig_experiments_49,
  },
  {
    "AnnotatedPageContentExtraction",
    array_kFieldTrialConfig_experiments_50,
  },
  {
    "AnnotatedPageContentExtractionOnHideFix",
    array_kFieldTrialConfig_experiments_51,
  },
  {
    "AnnotatedPageContentNonSalientFilteringHoldback",
    array_kFieldTrialConfig_experiments_52,
  },
  {
    "AnnotatedPageContentsVirtualStructure",
    array_kFieldTrialConfig_experiments_53,
  },
  {
    "AsyncBeforeUnload",
    array_kFieldTrialConfig_experiments_54,
  },
  {
    "AsyncDnsQuicJob",
    array_kFieldTrialConfig_experiments_55,
  },
  {
    "AsyncNavigationInterceptUnlaunch",
    array_kFieldTrialConfig_experiments_56,
  },
  {
    "AsyncNotiicationmanager",
    array_kFieldTrialConfig_experiments_57,
  },
  {
    "AsyncThreadPoolInit",
    array_kFieldTrialConfig_experiments_58,
  },
  {
    "AtMemoryDogfood",
    array_kFieldTrialConfig_experiments_59,
  },
  {
    "AttributionReportingDeprecation",
    array_kFieldTrialConfig_experiments_60,
  },
  {
    "AudioRendererMixerImmediatePause",
    array_kFieldTrialConfig_experiments_61,
  },
  {
    "AutoSpeculationRules",
    array_kFieldTrialConfig_experiments_62,
  },
  {
    "AutofillAiEditEntitiesFromSaveUpdatePrompt",
    array_kFieldTrialConfig_experiments_63,
  },
  {
    "AutofillAiM4Android",
    array_kFieldTrialConfig_experiments_64,
  },
  {
    "AutofillAiM5",
    array_kFieldTrialConfig_experiments_65,
  },
  {
    "AutofillAiPrivateInferenceNoticeBottomSheet",
    array_kFieldTrialConfig_experiments_66,
  },
  {
    "AutofillAiUsePrivateAi",
    array_kFieldTrialConfig_experiments_67,
  },
  {
    "AutofillAiWalletPassBranding2026",
    array_kFieldTrialConfig_experiments_68,
  },
  {
    "AutofillAiWalletServerProvidedDeepLink",
    array_kFieldTrialConfig_experiments_69,
  },
  {
    "AutofillAndroidKeyboardAccessoryHoverPreview",
    array_kFieldTrialConfig_experiments_70,
  },
  {
    "AutofillAndroidUseGlobalIdForFormComparison",
    array_kFieldTrialConfig_experiments_71,
  },
  {
    "AutofillBetterLocalHeuristicPlaceholderSupport",
    array_kFieldTrialConfig_experiments_72,
  },
  {
    "AutofillComplementCountryUsingPhoneNumber",
    array_kFieldTrialConfig_experiments_73,
  },
  {
    "AutofillDelayApcForPredictions",
    array_kFieldTrialConfig_experiments_74,
  },
  {
    "AutofillDisallowCountryCodeFilling",
    array_kFieldTrialConfig_experiments_75,
  },
  {
    "AutofillEnableExpandIbanRegexPattern",
    array_kFieldTrialConfig_experiments_76,
  },
  {
    "AutofillEnablePayNowPayLaterTabsAndroid",
    array_kFieldTrialConfig_experiments_77,
  },
  {
    "AutofillEnableResurrectingPaymentsUsersAndroid",
    array_kFieldTrialConfig_experiments_78,
  },
  {
    "AutofillEnableScanCardOptionWhenNoCardsSaved",
    array_kFieldTrialConfig_experiments_79,
  },
  {
    "AutofillEnableTravelCategoryAndMerchantBenefitsFromCurinos",
    array_kFieldTrialConfig_experiments_80,
  },
  {
    "AutofillEnableWalletBrandingV2",
    array_kFieldTrialConfig_experiments_81,
  },
  {
    "AutofillEnableWalletReminderNotice",
    array_kFieldTrialConfig_experiments_82,
  },
  {
    "AutofillFixIframeOwnership",
    array_kFieldTrialConfig_experiments_83,
  },
  {
    "AutofillHideSuggestionsOnFocusChange",
    array_kFieldTrialConfig_experiments_84,
  },
  {
    "AutofillImproveClassificationForTwoWordLastNames",
    array_kFieldTrialConfig_experiments_85,
  },
  {
    "AutofillIntroduceGlobalEmptyValueRewriterRules",
    array_kFieldTrialConfig_experiments_86,
  },
  {
    "AutofillKeydownEditableElement",
    array_kFieldTrialConfig_experiments_87,
  },
  {
    "AutofillLabelSensitiveAutocomplete",
    array_kFieldTrialConfig_experiments_88,
  },
  {
    "AutofillMergeAddressAndAutocompleteEmailSuggestions",
    array_kFieldTrialConfig_experiments_89,
  },
  {
    "AutofillMoveSmallFormLogicToClient",
    array_kFieldTrialConfig_experiments_90,
  },
  {
    "AutofillNewSuggestionGeneration",
    array_kFieldTrialConfig_experiments_91,
  },
  {
    "AutofillOnlyConsiderSingleFieldFormsAsSearchForms",
    array_kFieldTrialConfig_experiments_92,
  },
  {
    "AutofillOptimizeIsNormalizedNameVariantOf",
    array_kFieldTrialConfig_experiments_93,
  },
  {
    "AutofillRequireFocusInFrameForSuggestions",
    array_kFieldTrialConfig_experiments_94,
  },
  {
    "AutofillSupportSplitZipCode",
    array_kFieldTrialConfig_experiments_95,
  },
  {
    "AutofillSupportStandaloneZipCodeGlobally",
    array_kFieldTrialConfig_experiments_96,
  },
  {
    "AutofillUKMExperimentalFields",
    array_kFieldTrialConfig_experiments_97,
  },
  {
    "AutofillUpstream",
    array_kFieldTrialConfig_experiments_98,
  },
  {
    "AutofillUpstreamEnforceStrikeDelay",
    array_kFieldTrialConfig_experiments_99,
  },
  {
    "AutofillWipeInvalidNameStructure",
    array_kFieldTrialConfig_experiments_100,
  },
  {
    "AutomaticUsbDetach",
    array_kFieldTrialConfig_experiments_101,
  },
  {
    "AvoidEntryCreationForNoStore",
    array_kFieldTrialConfig_experiments_102,
  },
  {
    "AvoidPerContextColorProviders",
    array_kFieldTrialConfig_experiments_103,
  },
  {
    "BFCachePerformanceManagerPolicy",
    array_kFieldTrialConfig_experiments_104,
  },
  {
    "BackForwardCacheCCNSIgnoreUnchangedCookies",
    array_kFieldTrialConfig_experiments_105,
  },
  {
    "BackForwardCacheMemoryControls",
    array_kFieldTrialConfig_experiments_106,
  },
  {
    "BackgroundThreadPoolPIGeneral",
    array_kFieldTrialConfig_experiments_107,
  },
  {
    "BaseLockTrySpin",
    array_kFieldTrialConfig_experiments_108,
  },
  {
    "BatchNativeEventsInMessagePumpEpoll",
    array_kFieldTrialConfig_experiments_109,
  },
  {
    "BeaconLeakageLogging",
    array_kFieldTrialConfig_experiments_110,
  },
  {
    "BiometricAuthPwdFillAndroid",
    array_kFieldTrialConfig_experiments_111,
  },
  {
    "BookmarkBarVisibilityIPH",
    array_kFieldTrialConfig_experiments_112,
  },
  {
    "BrokenAlternativeServiceDelays",
    array_kFieldTrialConfig_experiments_113,
  },
  {
    "BrowserThreadPoolAdjustmentForAndroid",
    array_kFieldTrialConfig_experiments_114,
  },
  {
    "BrowsingDataModelSharedWorkerKeyWithoutURL",
    array_kFieldTrialConfig_experiments_115,
  },
  {
    "BrowsingHistoryFilterDropdownPhase1Clank",
    array_kFieldTrialConfig_experiments_116,
  },
  {
    "BrowsingHistorySimilarVisitsGroupingMobile",
    array_kFieldTrialConfig_experiments_117,
  },
  {
    "BuildTFLiteModelExecutionTaskOnLoadingThread",
    array_kFieldTrialConfig_experiments_118,
  },
  {
    "BusyLoopLessWhenCompositorGesture",
    array_kFieldTrialConfig_experiments_119,
  },
  {
    "CCTGoogleBottomBar",
    array_kFieldTrialConfig_experiments_120,
  },
  {
    "CCTNavigationalPrefetch",
    array_kFieldTrialConfig_experiments_121,
  },
  {
    "CWSReviewPromptingNativeUI",
    array_kFieldTrialConfig_experiments_122,
  },
  {
    "CacheGurlSchemeIsHttpOrHttpsResult",
    array_kFieldTrialConfig_experiments_123,
  },
  {
    "CalculateDeadlineDerivedInterval",
    array_kFieldTrialConfig_experiments_124,
  },
  {
    "Canvas2dDeferredFlush",
    array_kFieldTrialConfig_experiments_125,
  },
  {
    "CanvasAccessibility",
    array_kFieldTrialConfig_experiments_126,
  },
  {
    "CctClientDataHeader",
    array_kFieldTrialConfig_experiments_127,
  },
  {
    "ChromeEnableDnsPlatform",
    array_kFieldTrialConfig_experiments_128,
  },
  {
    "ChromeFinds",
    array_kFieldTrialConfig_experiments_129,
  },
  {
    "ClampAutoScaling",
    array_kFieldTrialConfig_experiments_130,
  },
  {
    "ClankBackButton",
    array_kFieldTrialConfig_experiments_131,
  },
  {
    "ClankBgRefreshConfigLaunch",
    array_kFieldTrialConfig_experiments_132,
  },
  {
    "ClankDesktopFieldSystemTracing",
    array_kFieldTrialConfig_experiments_133,
  },
  {
    "ClankFeedSyntheticCapabilities",
    array_kFieldTrialConfig_experiments_134,
  },
  {
    "ClankMostVisitedTilesNewScoring",
    array_kFieldTrialConfig_experiments_135,
  },
  {
    "ClearGrShaderDiskCacheOnInvalidPrefix",
    array_kFieldTrialConfig_experiments_136,
  },
  {
    "ClientSideDetectionBypassTiers",
    array_kFieldTrialConfig_experiments_137,
  },
  {
    "ClientSideDetectionCreditCardForm",
    array_kFieldTrialConfig_experiments_138,
  },
  {
    "ClientSideDetectionRetryLimit",
    array_kFieldTrialConfig_experiments_139,
  },
  {
    "ClientSideDetectionScamDetectionRequestWithUrl",
    array_kFieldTrialConfig_experiments_140,
  },
  {
    "ClientSideDetectionTrickToBill",
    array_kFieldTrialConfig_experiments_141,
  },
  {
    "ClipboardDeemphasisAndroid",
    array_kFieldTrialConfig_experiments_142,
  },
  {
    "CloseQuicSessionsOnPreFreeze",
    array_kFieldTrialConfig_experiments_143,
  },
  {
    "CollectAccessibilityHeuristicInCanvasUkm",
    array_kFieldTrialConfig_experiments_144,
  },
  {
    "Collections",
    array_kFieldTrialConfig_experiments_145,
  },
  {
    "ComponentsBase32InRust",
    array_kFieldTrialConfig_experiments_146,
  },
  {
    "ComposeboxDriveContextMenuOptionAndroid",
    array_kFieldTrialConfig_experiments_147,
  },
  {
    "ComposeboxUrlInput",
    array_kFieldTrialConfig_experiments_148,
  },
  {
    "CompositedAnimationsForceMainFrames",
    array_kFieldTrialConfig_experiments_149,
  },
  {
    "CompressionDictionaryPreload",
    array_kFieldTrialConfig_experiments_150,
  },
  {
    "CompressionDictionaryTransportRequireKnownRootCert",
    array_kFieldTrialConfig_experiments_151,
  },
  {
    "ContextualTasks_AllowSignedOutUserInDesktopAndroid",
    array_kFieldTrialConfig_experiments_152,
  },
  {
    "CookieMonsterPerKeyDelete",
    array_kFieldTrialConfig_experiments_153,
  },
  {
    "CpssUseTfliteSignatureRunnerKillSwitch",
    array_kFieldTrialConfig_experiments_154,
  },
  {
    "CreateSpareRendererForDefaultProfile",
    array_kFieldTrialConfig_experiments_155,
  },
  {
    "CreatorProfileClankLaunch",
    array_kFieldTrialConfig_experiments_156,
  },
  {
    "DbdPasswordRemovalOnAndroid",
    array_kFieldTrialConfig_experiments_157,
  },
  {
    "DebugToolbarPositioning",
    array_kFieldTrialConfig_experiments_158,
  },
  {
    "DecodeScriptsInBlink",
    array_kFieldTrialConfig_experiments_159,
  },
  {
    "DefaultANGLEVulkan",
    array_kFieldTrialConfig_experiments_160,
  },
  {
    "DefaultPassthroughCommandDecoder",
    array_kFieldTrialConfig_experiments_161,
  },
  {
    "DeferredDownloadHistoryLoading",
    array_kFieldTrialConfig_experiments_162,
  },
  {
    "DelayMainJobStudy",
    array_kFieldTrialConfig_experiments_163,
  },
  {
    "DelayNativePaymentAppScrimShow",
    array_kFieldTrialConfig_experiments_164,
  },
  {
    "DeprecatedExternalPickerFunction",
    array_kFieldTrialConfig_experiments_165,
  },
  {
    "DesktopCaptureAndroidFrameBufferReuse",
    array_kFieldTrialConfig_experiments_166,
  },
  {
    "DipsForWebView",
    array_kFieldTrialConfig_experiments_167,
  },
  {
    "DisableComposeboxWarmupRequests",
    array_kFieldTrialConfig_experiments_168,
  },
  {
    "DisableGridTabSwitcher",
    array_kFieldTrialConfig_experiments_169,
  },
  {
    "DisablePersistBrokenAlternativeServices",
    array_kFieldTrialConfig_experiments_170,
  },
  {
    "DiscardCompositionBackBuffersAndroid",
    array_kFieldTrialConfig_experiments_171,
  },
  {
    "DiscoverWidescreenFeedClank",
    array_kFieldTrialConfig_experiments_172,
  },
  {
    "DiskCacheBackendExperiment",
    array_kFieldTrialConfig_experiments_173,
  },
  {
    "DnsHttpsSvcbTimeout",
    array_kFieldTrialConfig_experiments_174,
  },
  {
    "DnsOverHttpsQuad9Secure",
    array_kFieldTrialConfig_experiments_175,
  },
  {
    "DomStorageSqliteNewDatabases",
    array_kFieldTrialConfig_experiments_176,
  },
  {
    "DownloadHomeIPH",
    array_kFieldTrialConfig_experiments_177,
  },
  {
    "DownloadIndicatorIPH",
    array_kFieldTrialConfig_experiments_178,
  },
  {
    "DsePreload2",
    array_kFieldTrialConfig_experiments_179,
  },
  {
    "DumpWithoutCrashingForMissingSecurityState",
    array_kFieldTrialConfig_experiments_180,
  },
  {
    "EagerStorageAccessPermissionCheck",
    array_kFieldTrialConfig_experiments_181,
  },
  {
    "EarlyCookieLoadOnPreconnect",
    array_kFieldTrialConfig_experiments_182,
  },
  {
    "EdgeToEdgeUseBackupNavbarInsets",
    array_kFieldTrialConfig_experiments_183,
  },
  {
    "EnableADPFPendingRendererMain",
    array_kFieldTrialConfig_experiments_184,
  },
  {
    "EnableADPFSeparateRendererMainSession",
    array_kFieldTrialConfig_experiments_185,
  },
  {
    "EnableADPFWorkloadReset",
    array_kFieldTrialConfig_experiments_186,
  },
  {
    "EnableAccountPreviewDataFetchOptimizations",
    array_kFieldTrialConfig_experiments_187,
  },
  {
    "EnableAccountPreviewPreferredAccountAndroid",
    array_kFieldTrialConfig_experiments_188,
  },
  {
    "EnableAndroidSidePanel",
    array_kFieldTrialConfig_experiments_189,
  },
  {
    "EnableCustomInputStreamBufferSize",
    array_kFieldTrialConfig_experiments_190,
  },
  {
    "EnableDownloadSaveAsSystemFileDialog",
    array_kFieldTrialConfig_experiments_191,
  },
  {
    "EnableDynamicRouteFetching",
    array_kFieldTrialConfig_experiments_192,
  },
  {
    "EnableEwalletNewAccountLinking",
    array_kFieldTrialConfig_experiments_193,
  },
  {
    "EnableFullscreenToAnyScreenAndroid",
    array_kFieldTrialConfig_experiments_194,
  },
  {
    "EnablePixAccountLinkingNative",
    array_kFieldTrialConfig_experiments_195,
  },
  {
    "EncryptBookmarks_Phase2",
    array_kFieldTrialConfig_experiments_196,
  },
  {
    "EncryptSessionStorage_Phase2",
    array_kFieldTrialConfig_experiments_197,
  },
  {
    "EnhancedFieldsForSecOps",
    array_kFieldTrialConfig_experiments_198,
  },
  {
    "EnterpriseDataProtectionForGlic",
    array_kFieldTrialConfig_experiments_199,
  },
  {
    "EnterpriseSignalsDisclaimerForExistingProfiles",
    array_kFieldTrialConfig_experiments_200,
  },
  {
    "EventTimingIgnorePresentationTimeFromUnexpectedFrameSource",
    array_kFieldTrialConfig_experiments_201,
  },
  {
    "ExpandCompositedCullRectMobile",
    array_kFieldTrialConfig_experiments_202,
  },
  {
    "ExtensionsPinnedByDefault",
    array_kFieldTrialConfig_experiments_203,
  },
  {
    "ExtremeLightweightUAFDetector",
    array_kFieldTrialConfig_experiments_204,
  },
  {
    "FedCmIntrusion",
    array_kFieldTrialConfig_experiments_205,
  },
  {
    "FeedLoadingPlaceholder",
    array_kFieldTrialConfig_experiments_206,
  },
  {
    "FeedPerformanceStudyV3",
    array_kFieldTrialConfig_experiments_207,
  },
  {
    "FeedSignedOutViewDemotion",
    array_kFieldTrialConfig_experiments_208,
  },
  {
    "FencedFramesDeprecation",
    array_kFieldTrialConfig_experiments_209,
  },
  {
    "FlushPersistentSystemProfileOnWrite",
    array_kFieldTrialConfig_experiments_210,
  },
  {
    "FullscreenSignInPromoUseDate",
    array_kFieldTrialConfig_experiments_211,
  },
  {
    "FullscreenVideoPictureInPicture",
    array_kFieldTrialConfig_experiments_212,
  },
  {
    "GCMMessageBuffering",
    array_kFieldTrialConfig_experiments_213,
  },
  {
    "GMSCoreBindServiceOptimization",
    array_kFieldTrialConfig_experiments_214,
  },
  {
    "GaiaAccountIdEnforcement",
    array_kFieldTrialConfig_experiments_215,
  },
  {
    "GlicAndroid",
    array_kFieldTrialConfig_experiments_216,
  },
  {
    "GlicBackgroundActuation",
    array_kFieldTrialConfig_experiments_217,
  },
  {
    "GlicBottomSheetResizeAndroid",
    array_kFieldTrialConfig_experiments_218,
  },
  {
    "GlicConfirmNavigationToNewOrigins",
    array_kFieldTrialConfig_experiments_219,
  },
  {
    "GlicCookieSyncOnTokenChange",
    array_kFieldTrialConfig_experiments_220,
  },
  {
    "GlicDisableDaisyChainNewTabs",
    array_kFieldTrialConfig_experiments_221,
  },
  {
    "GlicDisableHfcr",
    array_kFieldTrialConfig_experiments_222,
  },
  {
    "GlicMarketingAutoOpen",
    array_kFieldTrialConfig_experiments_223,
  },
  {
    "GlicMessageFirstFreAndroid",
    array_kFieldTrialConfig_experiments_224,
  },
  {
    "GlicNoWebview",
    array_kFieldTrialConfig_experiments_225,
  },
  {
    "GlicReuseCookies",
    array_kFieldTrialConfig_experiments_226,
  },
  {
    "GlicVoice",
    array_kFieldTrialConfig_experiments_227,
  },
  {
    "GooglePayViaAndroidIntents",
    array_kFieldTrialConfig_experiments_228,
  },
  {
    "GpuInitOptimization",
    array_kFieldTrialConfig_experiments_229,
  },
  {
    "GpuPersistentCache",
    array_kFieldTrialConfig_experiments_230,
  },
  {
    "GpuPersistentCacheMetadata",
    array_kFieldTrialConfig_experiments_231,
  },
  {
    "GrCacheLimits",
    array_kFieldTrialConfig_experiments_232,
  },
  {
    "GwpAsanMallocSmartSampling",
    array_kFieldTrialConfig_experiments_233,
  },
  {
    "HappyEyeballsV2",
    array_kFieldTrialConfig_experiments_234,
  },
  {
    "HappyEyeballsV2WebView",
    array_kFieldTrialConfig_experiments_235,
  },
  {
    "HardenUrlProvisionFetcher",
    array_kFieldTrialConfig_experiments_236,
  },
  {
    "HeapProfilerChurnReporting",
    array_kFieldTrialConfig_experiments_237,
  },
  {
    "HeapProfilerIncludeResidency",
    array_kFieldTrialConfig_experiments_238,
  },
  {
    "HeapVectorPromptlyFree",
    array_kFieldTrialConfig_experiments_239,
  },
  {
    "HistoryDatabaseWriteAheadLogging",
    array_kFieldTrialConfig_experiments_240,
  },
  {
    "HistoryQueryBatchedLookups",
    array_kFieldTrialConfig_experiments_241,
  },
  {
    "HistorySyncAlternativeIllustration",
    array_kFieldTrialConfig_experiments_242,
  },
  {
    "HomeButtonRemoval",
    array_kFieldTrialConfig_experiments_243,
  },
  {
    "HttpCacheInitializeDiskCacheBackendEarly",
    array_kFieldTrialConfig_experiments_244,
  },
  {
    "HttpCacheNoVarySearch",
    array_kFieldTrialConfig_experiments_245,
  },
  {
    "HttpCacheZstdCompression",
    array_kFieldTrialConfig_experiments_246,
  },
  {
    "HttpsFirstModeV2ForTypicallySecureUsers",
    array_kFieldTrialConfig_experiments_247,
  },
  {
    "I18nOptimizations",
    array_kFieldTrialConfig_experiments_248,
  },
  {
    "IDBDatabaseDumpOnHighConnectionCount",
    array_kFieldTrialConfig_experiments_249,
  },
  {
    "IcuNormalizerMigration",
    array_kFieldTrialConfig_experiments_250,
  },
  {
    "IdbSqliteOnDiskRollout",
    array_kFieldTrialConfig_experiments_251,
  },
  {
    "IgnoreDuplicateNavs",
    array_kFieldTrialConfig_experiments_252,
  },
  {
    "IgnoreDuplicateNavsOnlyWithUserGesture",
    array_kFieldTrialConfig_experiments_253,
  },
  {
    "IgnoreIPMatching",
    array_kFieldTrialConfig_experiments_254,
  },
  {
    "ImageDescriptionsAlternateRouting",
    array_kFieldTrialConfig_experiments_255,
  },
  {
    "IncognitoScreenshot",
    array_kFieldTrialConfig_experiments_256,
  },
  {
    "IncreaseHttp3Usage",
    array_kFieldTrialConfig_experiments_257,
  },
  {
    "IncreasedCmdBufferParseSlice",
    array_kFieldTrialConfig_experiments_258,
  },
  {
    "IndexedDBConnectionDeduplication",
    array_kFieldTrialConfig_experiments_259,
  },
  {
    "InhibitSQLReleaseCacheMemoryIfNeeded",
    array_kFieldTrialConfig_experiments_260,
  },
  {
    "InlineLocationSuggestions",
    array_kFieldTrialConfig_experiments_261,
  },
  {
    "InstantHandoffPhase1FastFollows",
    array_kFieldTrialConfig_experiments_262,
  },
  {
    "IsolateSubframeErrorPages",
    array_kFieldTrialConfig_experiments_263,
  },
  {
    "KeyboardAccessoryPaymentOffer",
    array_kFieldTrialConfig_experiments_264,
  },
  {
    "LCPPDeferUnusedPreload",
    array_kFieldTrialConfig_experiments_265,
  },
  {
    "LCPPLazyLoadImagePreload",
    array_kFieldTrialConfig_experiments_266,
  },
  {
    "LCPTimingPredictorPrerender2",
    array_kFieldTrialConfig_experiments_267,
  },
  {
    "LazyBlinkTimezoneInit",
    array_kFieldTrialConfig_experiments_268,
  },
  {
    "LazyParseInlineStyleSheets",
    array_kFieldTrialConfig_experiments_269,
  },
  {
    "LensComposeboxIdentityDelegation",
    array_kFieldTrialConfig_experiments_270,
  },
  {
    "LibraryPrefetcherOnlyOrderedText",
    array_kFieldTrialConfig_experiments_271,
  },
  {
    "LoadAllTabsAtStartup",
    array_kFieldTrialConfig_experiments_272,
  },
  {
    "LocalNetworkAccessChecks",
    array_kFieldTrialConfig_experiments_273,
  },
  {
    "LongScreenshotsNoMemoryCheck",
    array_kFieldTrialConfig_experiments_274,
  },
  {
    "MakeIdentityManagerSourceOfAccountsAndroidPart1",
    array_kFieldTrialConfig_experiments_275,
  },
  {
    "MaliciousApkDownloadCheck",
    array_kFieldTrialConfig_experiments_276,
  },
  {
    "MediaCodecLinearBlock",
    array_kFieldTrialConfig_experiments_277,
  },
  {
    "MetricsLogTrimmingLimitsMobile",
    array_kFieldTrialConfig_experiments_278,
  },
  {
    "MetricsLogTrimmingLimitsWebView",
    array_kFieldTrialConfig_experiments_279,
  },
  {
    "MigrateAccountManagerDelegate",
    array_kFieldTrialConfig_experiments_280,
  },
  {
    "MixedFixedIntervalMatcher",
    array_kFieldTrialConfig_experiments_281,
  },
  {
    "NdkVideoEncodeAcceleratorBitrateLayering",
    array_kFieldTrialConfig_experiments_282,
  },
  {
    "NdkVideoEncodeAcceleratorNativeSvc",
    array_kFieldTrialConfig_experiments_283,
  },
  {
    "NetTaskScheduler",
    array_kFieldTrialConfig_experiments_284,
  },
  {
    "NetworkQualityEstimatorAsyncNotifyHeadersReceived",
    array_kFieldTrialConfig_experiments_285,
  },
  {
    "NetworkServiceIncreasedPriorityWhileLoading",
    array_kFieldTrialConfig_experiments_286,
  },
  {
    "NewVoiceSearchUiInNtpRealbox",
    array_kFieldTrialConfig_experiments_287,
  },
  {
    "NoPauseMediaOnHeadphoneUnplug",
    array_kFieldTrialConfig_experiments_288,
  },
  {
    "NoSelectionMenuCaching",
    array_kFieldTrialConfig_experiments_289,
  },
  {
    "NoVarySearchCacheLoadOnSeparateTaskRunner",
    array_kFieldTrialConfig_experiments_290,
  },
  {
    "NonStandardAppearanceValueSliderVertical",
    array_kFieldTrialConfig_experiments_291,
  },
  {
    "NoopRuntimeMutableStudy1",
    array_kFieldTrialConfig_experiments_292,
  },
  {
    "NoopRuntimeMutableStudy2",
    array_kFieldTrialConfig_experiments_293,
  },
  {
    "NtpAurora",
    array_kFieldTrialConfig_experiments_294,
  },
  {
    "NtpAuroraV2",
    array_kFieldTrialConfig_experiments_295,
  },
  {
    "NtpGoogleLogo26",
    array_kFieldTrialConfig_experiments_296,
  },
  {
    "NtpLazyLoadComposebox",
    array_kFieldTrialConfig_experiments_297,
  },
  {
    "NtpMostVisitedHighDpiFavicons",
    array_kFieldTrialConfig_experiments_298,
  },
  {
    "NtpRealboxCyclingPlaceholders",
    array_kFieldTrialConfig_experiments_299,
  },
  {
    "OcclusionCullingQuadSplitLimit",
    array_kFieldTrialConfig_experiments_300,
  },
  {
    "OffloadAcceptCHFrameCheck",
    array_kFieldTrialConfig_experiments_301,
  },
  {
    "OmahaMinSdkVersionAndroid",
    array_kFieldTrialConfig_experiments_302,
  },
  {
    "OmitBlurEventOnElementRemoval",
    array_kFieldTrialConfig_experiments_303,
  },
  {
    "OmniboxCrossDeviceTabZeroSuggest",
    array_kFieldTrialConfig_experiments_304,
  },
  {
    "OmniboxFuseboxAsyncInflation",
    array_kFieldTrialConfig_experiments_305,
  },
  {
    "OmniboxFuseboxPopupVariations",
    array_kFieldTrialConfig_experiments_306,
  },
  {
    "OmniboxLogURLScoringSignals",
    array_kFieldTrialConfig_experiments_307,
  },
  {
    "OmniboxMlUrlScoringAndroid",
    array_kFieldTrialConfig_experiments_308,
  },
  {
    "OmniboxMobileParityUpdate",
    array_kFieldTrialConfig_experiments_309,
  },
  {
    "OmniboxMultimodalInput",
    array_kFieldTrialConfig_experiments_310,
  },
  {
    "OmniboxOnDeviceBrainModel",
    array_kFieldTrialConfig_experiments_311,
  },
  {
    "OmniboxSearchPrefetchOnEnterKeyDown",
    array_kFieldTrialConfig_experiments_312,
  },
  {
    "OmniboxSiteSearchAndroid",
    array_kFieldTrialConfig_experiments_313,
  },
  {
    "OmniboxUseShortSuggestPathV1",
    array_kFieldTrialConfig_experiments_314,
  },
  {
    "OnDemandBackgroundTabContextCaptureOptimization",
    array_kFieldTrialConfig_experiments_315,
  },
  {
    "OnDemandSpellcheckInitialization",
    array_kFieldTrialConfig_experiments_316,
  },
  {
    "OnDeviceCategoryClassifierAndroid",
    array_kFieldTrialConfig_experiments_317,
  },
  {
    "OptGuideBatchSRPTuning",
    array_kFieldTrialConfig_experiments_318,
  },
  {
    "OptGuideURLCacheSize",
    array_kFieldTrialConfig_experiments_319,
  },
  {
    "OptimisticDnsForQuic",
    array_kFieldTrialConfig_experiments_320,
  },
  {
    "OptimisticDnsForTcp",
    array_kFieldTrialConfig_experiments_321,
  },
  {
    "OptimizationGuideProactivePersonalizedHintsFetching",
    array_kFieldTrialConfig_experiments_322,
  },
  {
    "OptimizeAssociateWindowsAndroid",
    array_kFieldTrialConfig_experiments_323,
  },
  {
    "PDFViewerV2Android",
    array_kFieldTrialConfig_experiments_324,
  },
  {
    "PMLoadingPageVoterV2",
    array_kFieldTrialConfig_experiments_325,
  },
  {
    "PageInfoAboutThisSite40Langs",
    array_kFieldTrialConfig_experiments_326,
  },
  {
    "PageInfoIPH",
    array_kFieldTrialConfig_experiments_327,
  },
  {
    "PageZoomIPH",
    array_kFieldTrialConfig_experiments_328,
  },
  {
    "PaintHoldingOOPIF",
    array_kFieldTrialConfig_experiments_329,
  },
  {
    "PartitionAllocBackupRefPtr",
    array_kFieldTrialConfig_experiments_330,
  },
  {
    "PartitionAllocMemoryReclaimer",
    array_kFieldTrialConfig_experiments_331,
  },
  {
    "PartitionAllocMemoryTagging",
    array_kFieldTrialConfig_experiments_332,
  },
  {
    "PartitionAllocMiracleObject",
    array_kFieldTrialConfig_experiments_333,
  },
  {
    "PartitionAllocParameterTuning",
    array_kFieldTrialConfig_experiments_334,
  },
  {
    "PartitionAllocParameterTuningAndroid",
    array_kFieldTrialConfig_experiments_335,
  },
  {
    "PartitionAllocPermissiveMte",
    array_kFieldTrialConfig_experiments_336,
  },
  {
    "PartitionAllocTighterAlignedAllocBound",
    array_kFieldTrialConfig_experiments_337,
  },
  {
    "PartitionAllocUnretainedDanglingPtr",
    array_kFieldTrialConfig_experiments_338,
  },
  {
    "PartitionNetworkStateByNetworkAnonymizationKey",
    array_kFieldTrialConfig_experiments_339,
  },
  {
    "PassHistogramSharedMemoryOnLaunch",
    array_kFieldTrialConfig_experiments_340,
  },
  {
    "PasswordManualFallbackSecurityChecks",
    array_kFieldTrialConfig_experiments_341,
  },
  {
    "PasswordSaveInContextErrorResolution",
    array_kFieldTrialConfig_experiments_342,
  },
  {
    "Path2DPaintCache",
    array_kFieldTrialConfig_experiments_343,
  },
  {
    "PauseMediaOnSystemSleepAndroid",
    array_kFieldTrialConfig_experiments_344,
  },
  {
    "PaymentHandlerDialogUseInitiatorInUrlLoadForAndroid",
    array_kFieldTrialConfig_experiments_345,
  },
  {
    "PaymentRequestEnforceLNAWithClientSecurityState",
    array_kFieldTrialConfig_experiments_346,
  },
  {
    "PeriodicScudoPurge",
    array_kFieldTrialConfig_experiments_347,
  },
  {
    "PermissionPredictionsGeolocationAccuracy",
    array_kFieldTrialConfig_experiments_348,
  },
  {
    "PermissionsAIv4",
    array_kFieldTrialConfig_experiments_349,
  },
  {
    "PermissionsGestureGatedPrompts",
    array_kFieldTrialConfig_experiments_350,
  },
  {
    "PersonalContextStudy",
    array_kFieldTrialConfig_experiments_351,
  },
  {
    "PervasiveSharedDictionaries",
    array_kFieldTrialConfig_experiments_352,
  },
  {
    "PointerLockOnAndroid",
    array_kFieldTrialConfig_experiments_353,
  },
  {
    "PolicyBlocklistProceedUntilResponse",
    array_kFieldTrialConfig_experiments_354,
  },
  {
    "PqcBandwidthExperiment",
    array_kFieldTrialConfig_experiments_355,
  },
  {
    "PrecomputeSiteInfo",
    array_kFieldTrialConfig_experiments_356,
  },
  {
    "PreconnectCreateNewTab",
    array_kFieldTrialConfig_experiments_357,
  },
  {
    "PreconnectFromKeyedService",
    array_kFieldTrialConfig_experiments_358,
  },
  {
    "PreconnectManagerDirectFastPath",
    array_kFieldTrialConfig_experiments_359,
  },
  {
    "PredictionModelComponentDelivery",
    array_kFieldTrialConfig_experiments_360,
  },
  {
    "PreferWarmRendererProcess",
    array_kFieldTrialConfig_experiments_361,
  },
  {
    "PrefetchActivationBeacon",
    array_kFieldTrialConfig_experiments_362,
  },
  {
    "PrefetchCancelUnrelatedPrefetch",
    array_kFieldTrialConfig_experiments_363,
  },
  {
    "PrefetchMultipleActiveSetSizeLimitForBase",
    array_kFieldTrialConfig_experiments_364,
  },
  {
    "PrefetchTimeoutForWebViewPrefetch",
    array_kFieldTrialConfig_experiments_365,
  },
  {
    "PreloadMediaEngagementData",
    array_kFieldTrialConfig_experiments_366,
  },
  {
    "PreloadingRespectUserAgentOverride",
    array_kFieldTrialConfig_experiments_367,
  },
  {
    "PrepopulatedEnginesMigration",
    array_kFieldTrialConfig_experiments_368,
  },
  {
    "Prerender2FallbackPrefetchSpecRules",
    array_kFieldTrialConfig_experiments_369,
  },
  {
    "PreventSaveUpdatePasswordOnFederatedLogin",
    array_kFieldTrialConfig_experiments_370,
  },
  {
    "PreviewHandwritingGesture",
    array_kFieldTrialConfig_experiments_371,
  },
  {
    "PrewarmZeroSuggestTrigger",
    array_kFieldTrialConfig_experiments_372,
  },
  {
    "PrioritizeMainFrameNavigationNetworkResponse",
    array_kFieldTrialConfig_experiments_373,
  },
  {
    "ProactivePasswordProtection",
    array_kFieldTrialConfig_experiments_374,
  },
  {
    "ProcessHtmlDataImmediately",
    array_kFieldTrialConfig_experiments_375,
  },
  {
    "ProcessReuseOnPrerenderCOOPSwapAndroid",
    array_kFieldTrialConfig_experiments_376,
  },
  {
    "ProgressiveAccessibilityPhase2",
    array_kFieldTrialConfig_experiments_377,
  },
  {
    "ProtectedAudienceDeprecation",
    array_kFieldTrialConfig_experiments_378,
  },
  {
    "PushMessagingDisallowSenderIDs",
    array_kFieldTrialConfig_experiments_379,
  },
  {
    "PushMessagingGcmEndpointWebpushPath",
    array_kFieldTrialConfig_experiments_380,
  },
  {
    "QuicSocketSendBufferSize",
    array_kFieldTrialConfig_experiments_381,
  },
  {
    "ReactivePrefetchAndroidDiscardBody",
    array_kFieldTrialConfig_experiments_382,
  },
  {
    "ReadAloudAppMenuIPH",
    array_kFieldTrialConfig_experiments_383,
  },
  {
    "RealboxVirtualFocusNavigation",
    array_kFieldTrialConfig_experiments_384,
  },
  {
    "RebindServiceBatchApi",
    array_kFieldTrialConfig_experiments_385,
  },
  {
    "RecordLockAcquisitionTimeStudy",
    array_kFieldTrialConfig_experiments_386,
  },
  {
    "RedWarningSurveyAndroid",
    array_kFieldTrialConfig_experiments_387,
  },
  {
    "ReduceMojoURLLoaderFactoryCloning",
    array_kFieldTrialConfig_experiments_388,
  },
  {
    "RendererProcessLimitOnAndroid",
    array_kFieldTrialConfig_experiments_389,
  },
  {
    "RequiresLoadIgnoreLimitsForDomWindowsOnly",
    array_kFieldTrialConfig_experiments_390,
  },
  {
    "ResampleScrollEventsForFling",
    array_kFieldTrialConfig_experiments_391,
  },
  {
    "ResourcePoolResize",
    array_kFieldTrialConfig_experiments_392,
  },
  {
    "RestrictPendingInputEventTypeToBlockMainThread",
    array_kFieldTrialConfig_experiments_393,
  },
  {
    "RustPhishingModelSetter",
    array_kFieldTrialConfig_experiments_394,
  },
  {
    "RustyIcoFeature",
    array_kFieldTrialConfig_experiments_395,
  },
  {
    "SPCLocaleValidation",
    array_kFieldTrialConfig_experiments_396,
  },
  {
    "SQLitePersistentCookieStoreEarlyInit",
    array_kFieldTrialConfig_experiments_397,
  },
  {
    "SaasUsageReporting",
    array_kFieldTrialConfig_experiments_398,
  },
  {
    "SafeBrowsingDailyPhishingReportsLimit",
    array_kFieldTrialConfig_experiments_399,
  },
  {
    "SafeBrowsingLocalListsUseSBv5",
    array_kFieldTrialConfig_experiments_400,
  },
  {
    "SafeBrowsingWaitForDnsForRealTimeLookup",
    array_kFieldTrialConfig_experiments_401,
  },
  {
    "SafetyHubUnusedPermissionRevocationForAllSurfaces",
    array_kFieldTrialConfig_experiments_402,
  },
  {
    "SandboxedProcessServiceLimitOnAndroid",
    array_kFieldTrialConfig_experiments_403,
  },
  {
    "ScrollJankHoldback",
    array_kFieldTrialConfig_experiments_404,
  },
  {
    "ScrollJankV4MetricReportAndroidAppJankStats",
    array_kFieldTrialConfig_experiments_405,
  },
  {
    "ScrollPredictorEnhancements",
    array_kFieldTrialConfig_experiments_406,
  },
  {
    "SearchSettingsUpdateV2",
    array_kFieldTrialConfig_experiments_407,
  },
  {
    "SegmentationPlatformURLVisitResumptionRanker",
    array_kFieldTrialConfig_experiments_408,
  },
  {
    "SensitiveContentRedaction",
    array_kFieldTrialConfig_experiments_409,
  },
  {
    "SensorsAllowAskBlockPermissionModel",
    array_kFieldTrialConfig_experiments_410,
  },
  {
    "ServeJavaCachedZeroSuggest",
    array_kFieldTrialConfig_experiments_411,
  },
  {
    "ServiceWorkerDatabaseDoomOnMissingNextId",
    array_kFieldTrialConfig_experiments_412,
  },
  {
    "ServiceWorkerDumpWithoutCrashingOnStorageKeyMismatch",
    array_kFieldTrialConfig_experiments_413,
  },
  {
    "ServiceWorkerRaceNetworkRequestDeprecateTwoPhaseWrite",
    array_kFieldTrialConfig_experiments_414,
  },
  {
    "ServiceWorkerRaceNetworkRequestFallbackOnDisconnect",
    array_kFieldTrialConfig_experiments_415,
  },
  {
    "ServiceWorkerSyntheticResponse",
    array_kFieldTrialConfig_experiments_416,
  },
  {
    "SettingsInTab",
    array_kFieldTrialConfig_experiments_417,
  },
  {
    "ShareEventArgsOnDispatch",
    array_kFieldTrialConfig_experiments_418,
  },
  {
    "SharedHighlightingIphClank",
    array_kFieldTrialConfig_experiments_419,
  },
  {
    "SharedMemorySystemProfileMinidump",
    array_kFieldTrialConfig_experiments_420,
  },
  {
    "SharedTabGroups",
    array_kFieldTrialConfig_experiments_421,
  },
  {
    "ShowSuggestionsOnAutofocus",
    array_kFieldTrialConfig_experiments_422,
  },
  {
    "ShutdownPreNativeThreadPoolAfterStartupInBackground",
    array_kFieldTrialConfig_experiments_423,
  },
  {
    "SigninButtonProfileMenu",
    array_kFieldTrialConfig_experiments_424,
  },
  {
    "SigninButtonProfileMenuRefinements",
    array_kFieldTrialConfig_experiments_425,
  },
  {
    "SimdutfBase64Encode",
    array_kFieldTrialConfig_experiments_426,
  },
  {
    "SimpleCachePrefetchExperiment2",
    array_kFieldTrialConfig_experiments_427,
  },
  {
    "SingleAxisScrollContainers",
    array_kFieldTrialConfig_experiments_428,
  },
  {
    "SkiaGraphite",
    array_kFieldTrialConfig_experiments_429,
  },
  {
    "SkipDisabledGLContextOnDrDC",
    array_kFieldTrialConfig_experiments_430,
  },
  {
    "SkipImageClassificationScoringForNonPageLoadTriggers",
    array_kFieldTrialConfig_experiments_431,
  },
  {
    "SkipListAccountsWithoutGaiaCookies",
    array_kFieldTrialConfig_experiments_432,
  },
  {
    "SmartZoom",
    array_kFieldTrialConfig_experiments_433,
  },
  {
    "SpeculativeImageDecodes",
    array_kFieldTrialConfig_experiments_434,
  },
  {
    "SpeculativeServiceWorkerWarmUp",
    array_kFieldTrialConfig_experiments_435,
  },
  {
    "SpeedUpClearSiteDataCacheDeletion",
    array_kFieldTrialConfig_experiments_436,
  },
  {
    "SplitCacheByNetworkIsolationKey",
    array_kFieldTrialConfig_experiments_437,
  },
  {
    "StatefulMemoryPressure",
    array_kFieldTrialConfig_experiments_438,
  },
  {
    "StopInBackground",
    array_kFieldTrialConfig_experiments_439,
  },
  {
    "StreamlineRendererInit",
    array_kFieldTrialConfig_experiments_440,
  },
  {
    "SubmenusInAppMenuLff",
    array_kFieldTrialConfig_experiments_441,
  },
  {
    "SuspiciousSiteWarnings",
    array_kFieldTrialConfig_experiments_442,
  },
  {
    "SyncIncreaseNudgeDelayForSingleClient",
    array_kFieldTrialConfig_experiments_443,
  },
  {
    "SyncTrustedVaultErrorMessageDuration",
    array_kFieldTrialConfig_experiments_444,
  },
  {
    "SyncUsePropagatedAccessToken",
    array_kFieldTrialConfig_experiments_445,
  },
  {
    "TabGroupSuggestions",
    array_kFieldTrialConfig_experiments_446,
  },
  {
    "TabSharingToolbarAndroid",
    array_kFieldTrialConfig_experiments_447,
  },
  {
    "TabStorageSqlitePrototype",
    array_kFieldTrialConfig_experiments_448,
  },
  {
    "TabSwitcherButtonSwitchIncognitoIPH",
    array_kFieldTrialConfig_experiments_449,
  },
  {
    "TextClassifierTimeout",
    array_kFieldTrialConfig_experiments_450,
  },
  {
    "ThreadPoolForegroundBlockingTimeouts",
    array_kFieldTrialConfig_experiments_451,
  },
  {
    "ThreeDSecureTelemetry",
    array_kFieldTrialConfig_experiments_452,
  },
  {
    "ThrottleConsecutiveNoDamageMainFrames",
    array_kFieldTrialConfig_experiments_453,
  },
  {
    "ToolbarCaptureFixForSPAs",
    array_kFieldTrialConfig_experiments_454,
  },
  {
    "ToolbarSnapshotRefactor",
    array_kFieldTrialConfig_experiments_455,
  },
  {
    "TopicsDeprecation",
    array_kFieldTrialConfig_experiments_456,
  },
  {
    "TouchToSearchCallout",
    array_kFieldTrialConfig_experiments_457,
  },
  {
    "TrackAnimatedSourcesForInheritedProperties",
    array_kFieldTrialConfig_experiments_458,
  },
  {
    "TranslateElementFeatures",
    array_kFieldTrialConfig_experiments_459,
  },
  {
    "TransportSecurityFileWriterScheduleAndroid",
    array_kFieldTrialConfig_experiments_460,
  },
  {
    "TreesInViz",
    array_kFieldTrialConfig_experiments_461,
  },
  {
    "TrimMemoryBackgroundIsSevere",
    array_kFieldTrialConfig_experiments_462,
  },
  {
    "TruncateSearchUrl",
    array_kFieldTrialConfig_experiments_463,
  },
  {
    "UniversalOptOutSettings",
    array_kFieldTrialConfig_experiments_464,
  },
  {
    "UnthrottleAsyncTouchMovesV2",
    array_kFieldTrialConfig_experiments_465,
  },
  {
    "UploadReportOnProfileOpenStudy",
    array_kFieldTrialConfig_experiments_466,
  },
  {
    "UseAndroidCustomFrameDeadlines",
    array_kFieldTrialConfig_experiments_467,
  },
  {
    "UseAutomaticSyncTokenManagement",
    array_kFieldTrialConfig_experiments_468,
  },
  {
    "UseFrameIntervalDeciderAdaptiveFrameRate",
    array_kFieldTrialConfig_experiments_469,
  },
  {
    "UseNewEtc1Decoder",
    array_kFieldTrialConfig_experiments_470,
  },
  {
    "UsePersistentCacheForCodeCache",
    array_kFieldTrialConfig_experiments_471,
  },
  {
    "UseRestrictionsManagerInAppRestrictionsProvider",
    array_kFieldTrialConfig_experiments_472,
  },
  {
    "UseRustCborParser",
    array_kFieldTrialConfig_experiments_473,
  },
  {
    "UseRustCborWriter",
    array_kFieldTrialConfig_experiments_474,
  },
  {
    "UtfConversionAsciiFastPath",
    array_kFieldTrialConfig_experiments_475,
  },
  {
    "V8DateTimePatternGeneratorCacheEviction",
    array_kFieldTrialConfig_experiments_476,
  },
  {
    "V8HomomorphicIC",
    array_kFieldTrialConfig_experiments_477,
  },
  {
    "V8InputHandlingLongerWindow",
    array_kFieldTrialConfig_experiments_478,
  },
  {
    "V8LimitBasedMemoryReducer",
    array_kFieldTrialConfig_experiments_479,
  },
  {
    "V8MaxValidPolymorphicMapCount",
    array_kFieldTrialConfig_experiments_480,
  },
  {
    "V8ParserAblation",
    array_kFieldTrialConfig_experiments_481,
  },
  {
    "V8PreconfigureOldGen",
    array_kFieldTrialConfig_experiments_482,
  },
  {
    "V8SideStepTransitions",
    array_kFieldTrialConfig_experiments_483,
  },
  {
    "V8SlowHistograms",
    array_kFieldTrialConfig_experiments_484,
  },
  {
    "V8Sparkplug-Android",
    array_kFieldTrialConfig_experiments_485,
  },
  {
    "V8SparkplugPlus",
    array_kFieldTrialConfig_experiments_486,
  },
  {
    "V8SqrtAllocationLimits",
    array_kFieldTrialConfig_experiments_487,
  },
  {
    "V8Turbolev",
    array_kFieldTrialConfig_experiments_488,
  },
  {
    "VariationsFeatureAccessLogging",
    array_kFieldTrialConfig_experiments_489,
  },
  {
    "VariationsRuntimeMutability",
    array_kFieldTrialConfig_experiments_490,
  },
  {
    "VariationsStickyNoopTest",
    array_kFieldTrialConfig_experiments_491,
  },
  {
    "VerifyDidCommitParams",
    array_kFieldTrialConfig_experiments_492,
  },
  {
    "VerifyQWACsRollout",
    array_kFieldTrialConfig_experiments_493,
  },
  {
    "VisitedURLRankingService",
    array_kFieldTrialConfig_experiments_494,
  },
  {
    "VulkanImaginationMSAA",
    array_kFieldTrialConfig_experiments_495,
  },
  {
    "WebApkShellUpdate",
    array_kFieldTrialConfig_experiments_496,
  },
  {
    "WebAppShortEdgesCutoutMode",
    array_kFieldTrialConfig_experiments_497,
  },
  {
    "WebGLMemoryExperiments",
    array_kFieldTrialConfig_experiments_498,
  },
  {
    "WebGPU",
    array_kFieldTrialConfig_experiments_499,
  },
  {
    "WebGPUSupportMetrics",
    array_kFieldTrialConfig_experiments_500,
  },
  {
    "WebHidOnDesktopAndroidServiceWorkers",
    array_kFieldTrialConfig_experiments_501,
  },
  {
    "WebHistoryUseNewApi",
    array_kFieldTrialConfig_experiments_502,
  },
  {
    "WebOtpBackendAuto",
    array_kFieldTrialConfig_experiments_503,
  },
  {
    "WebRTC-Audio-NetEqDecisionLogicConfig",
    array_kFieldTrialConfig_experiments_504,
  },
  {
    "WebRTC-Audio-OpusAvoidNoisePumpingDuringDtx",
    array_kFieldTrialConfig_experiments_505,
  },
  {
    "WebRTC-BurstyPacer",
    array_kFieldTrialConfig_experiments_506,
  },
  {
    "WebRTC-Bwe-LossBasedBweV2",
    array_kFieldTrialConfig_experiments_507,
  },
  {
    "WebRTC-Bwe-ProbingConfiguration",
    array_kFieldTrialConfig_experiments_508,
  },
  {
    "WebRTC-Bwe-ReceiverLimitCapsOnly",
    array_kFieldTrialConfig_experiments_509,
  },
  {
    "WebRTC-Bwe-RobustThroughputEstimatorSettings",
    array_kFieldTrialConfig_experiments_510,
  },
  {
    "WebRTC-CorruptionDetectionFrameSelector",
    array_kFieldTrialConfig_experiments_511,
  },
  {
    "WebRTC-DataChannel-MessageInterleaving",
    array_kFieldTrialConfig_experiments_512,
  },
  {
    "WebRTC-IPv6NetworkResolutionFixes",
    array_kFieldTrialConfig_experiments_513,
  },
  {
    "WebRTC-JitterEstimatorConfig",
    array_kFieldTrialConfig_experiments_514,
  },
  {
    "WebRTC-LibaomAv1Encoder-DropRepeatFramesOnEnhancementLayers",
    array_kFieldTrialConfig_experiments_515,
  },
  {
    "WebRTC-RFC8888CongestionControlFeedback",
    array_kFieldTrialConfig_experiments_516,
  },
  {
    "WebRTC-SendBufferSizeBytes",
    array_kFieldTrialConfig_experiments_517,
  },
  {
    "WebRTC-SendPacketsOnWorkerThread",
    array_kFieldTrialConfig_experiments_518,
  },
  {
    "WebRTC-SlackedTaskQueuePacedSender",
    array_kFieldTrialConfig_experiments_519,
  },
  {
    "WebRTC-VP8ConferenceTemporalLayers",
    array_kFieldTrialConfig_experiments_520,
  },
  {
    "WebRTC-Video-AV1EvenPayloadSizes",
    array_kFieldTrialConfig_experiments_521,
  },
  {
    "WebRTC-Video-CalculatePsnr",
    array_kFieldTrialConfig_experiments_522,
  },
  {
    "WebRTC-Video-EnableRetransmitAllLayers",
    array_kFieldTrialConfig_experiments_523,
  },
  {
    "WebRTC-Video-PerSsrcKeyframes",
    array_kFieldTrialConfig_experiments_524,
  },
  {
    "WebRTC-Vp9ExternalRefCtrl",
    array_kFieldTrialConfig_experiments_525,
  },
  {
    "WebRTC-ZeroPlayoutDelay",
    array_kFieldTrialConfig_experiments_526,
  },
  {
    "WebSigninLoadingDialog",
    array_kFieldTrialConfig_experiments_527,
  },
  {
    "WebViewAblateVerificationCaching",
    array_kFieldTrialConfig_experiments_528,
  },
  {
    "WebViewAndroidThreadPriority",
    array_kFieldTrialConfig_experiments_529,
  },
  {
    "WebViewBackgroundTracingInit",
    array_kFieldTrialConfig_experiments_530,
  },
  {
    "WebViewBoostRendererPriorityOnNavigation",
    array_kFieldTrialConfig_experiments_531,
  },
  {
    "WebViewConstructableStylesheetCache",
    array_kFieldTrialConfig_experiments_532,
  },
  {
    "WebViewContentRestrictionSupport",
    array_kFieldTrialConfig_experiments_533,
  },
  {
    "WebViewDisableClassPreloading",
    array_kFieldTrialConfig_experiments_534,
  },
  {
    "WebViewDisconnectWebSocketOnBFCacheKillSwitch",
    array_kFieldTrialConfig_experiments_535,
  },
  {
    "WebViewEarlyStartupTracing",
    array_kFieldTrialConfig_experiments_536,
  },
  {
    "WebViewEnableApiCallUserActions",
    array_kFieldTrialConfig_experiments_537,
  },
  {
    "WebViewEnableDnsPlatform",
    array_kFieldTrialConfig_experiments_538,
  },
  {
    "WebViewFasterGetDefaultUserAgent",
    array_kFieldTrialConfig_experiments_539,
  },
  {
    "WebViewFencedFrames",
    array_kFieldTrialConfig_experiments_540,
  },
  {
    "WebViewIgnoreDuplicateNavs",
    array_kFieldTrialConfig_experiments_541,
  },
  {
    "WebViewInitInConstructor",
    array_kFieldTrialConfig_experiments_542,
  },
  {
    "WebViewInitRendererDuringWebContentsCreation",
    array_kFieldTrialConfig_experiments_543,
  },
  {
    "WebViewMigrateVisitedLinks",
    array_kFieldTrialConfig_experiments_544,
  },
  {
    "WebViewMoveWorkToProviderInit",
    array_kFieldTrialConfig_experiments_545,
  },
  {
    "WebViewMultiProfileSkipDefaultProfile",
    array_kFieldTrialConfig_experiments_546,
  },
  {
    "WebViewOptInToGmsBindServiceOptimization",
    array_kFieldTrialConfig_experiments_547,
  },
  {
    "WebViewPrefetchAheadOfPrerender",
    array_kFieldTrialConfig_experiments_548,
  },
  {
    "WebViewPrefetchHighestPrefetchPriority",
    array_kFieldTrialConfig_experiments_549,
  },
  {
    "WebViewPrefetchOffTheMainThread",
    array_kFieldTrialConfig_experiments_550,
  },
  {
    "WebViewPrewarmDictionaryOnPreconnect",
    array_kFieldTrialConfig_experiments_551,
  },
  {
    "WebViewProfileStoreNotTriggerStartup",
    array_kFieldTrialConfig_experiments_552,
  },
  {
    "WebViewPurgeMemoryInBackground",
    array_kFieldTrialConfig_experiments_553,
  },
  {
    "WebViewReducedFinchTime",
    array_kFieldTrialConfig_experiments_554,
  },
  {
    "WebViewRemoveInstantAppSupport",
    array_kFieldTrialConfig_experiments_555,
  },
  {
    "WebViewStartupNonBlockingWebViewConstructor",
    array_kFieldTrialConfig_experiments_556,
  },
  {
    "WebViewStaticMethodsNotTriggerStartup",
    array_kFieldTrialConfig_experiments_557,
  },
  {
    "WebViewSurfaceControlV2",
    array_kFieldTrialConfig_experiments_558,
  },
  {
    "WebViewTestNonembeddedLowEntropySource",
    array_kFieldTrialConfig_experiments_559,
  },
  {
    "WebViewUseMetricsUploadServiceOnlySdkRuntime",
    array_kFieldTrialConfig_experiments_560,
  },
  {
    "WebViewUseWVLESForLayeredStudy",
    array_kFieldTrialConfig_experiments_561,
  },
  {
    "WebViewVizDirectCompositorThreadIpcFrameSinkManager",
    array_kFieldTrialConfig_experiments_562,
  },
  {
    "WebViewWarmupNetworkService",
    array_kFieldTrialConfig_experiments_563,
  },
  {
    "WebrtcEncodeReadbackOptimization",
    array_kFieldTrialConfig_experiments_564,
  },
  {
    "WebviewSingleSharedContextState",
    array_kFieldTrialConfig_experiments_565,
  },
  {
    "XMLParsingRust",
    array_kFieldTrialConfig_experiments_566,
  },
  {
    "XMLParsingRustNonXslt",
    array_kFieldTrialConfig_experiments_567,
  },
  {
    "XSLTSpecialTrial",
    array_kFieldTrialConfig_experiments_568,
  },
  {
    "YieldWithInputHint",
    array_kFieldTrialConfig_experiments_569,
  },
  {
    "ZPSPrefetchOnSRPWithAblationAndroid",
    array_kFieldTrialConfig_experiments_570,
  },
  {
    "ZeroSuggestPrefetchOnPageLoadAndTabSwitch",
    array_kFieldTrialConfig_experiments_571,
  },
  {
    "ZstdForCrossSiteSpeculationRulesPrefetch",
    array_kFieldTrialConfig_experiments_572,
  },
};
const FieldTrialTestingConfig kFieldTrialConfig = {
  array_kFieldTrialConfig_studies,
};

}  // namespace variations
