// Generated from generate_allowlist_from_histograms_file.py. Do not edit!

#ifndef SQL_SQL_NAME_VARIANTS_H_
#define SQL_SQL_NAME_VARIANTS_H_

#include <algorithm>
#include <string_view>

namespace sql_metrics {

inline constexpr std::string_view kDatabaseTagAllowList[] = {
  "AccessibilityAnnotator",
  "Activity",
  "Affiliation",
  "AnnotationStorage",
  "ArcContentUrlDatabase",
  "BackgroundRequestQueue",
  "BrowsingTopics",
  "CdmStorage",
  "Chromoting",
  "CodeCache",
  "CollaborationMessageStorage",
  "ContextHub",
  "Conversions",
  "Cookie",
  "CriticalActions",
  "DBSCSessions",
  "DIPS",
  "DataSharingGroupStorage",
  "DataSharingMigrationStateStorage",
  "DatabaseTracker",
  "DeclarativePerformanceObserver",
  "DownloadRecord",
  "FSPContextDatabase",
  "FileIndexService",
  "FirefoxImporter",
  "FirstPartySets",
  "History",
  "HistoryEmbeddings",
  "HistoryInMemoryDB",
  "HttpCacheDiskCache",
  "IndexedDB",
  "IndexedDBEphemeral",
  "InterestGroupStorage",
  "InterestGroups",
  "KAnonymityService",
  "LocalStorage",
  "LocalStorageEphemeral",
  "LocalTraces",
  "MediaDeviceSalts",
  "MediaLicense",
  "MultistepFilter",
  "OfflinePageMetadata",
  "OptOutBlacklist",
  "PageContentStore",
  "Passwords",
  "PermissionAuditingLogs",
  "PowerBookmarks",
  "Predictor",
  "PrivateVerificationTokens",
  "Quota",
  "RazeNullDB",
  "Recovery",
  "ReplayTasks",
  "ReportingAndNEL",
  "SQLiteDiagnostics",
  "ServerCertificate",
  "SessionStorage",
  "SessionStorageEphemeral",
  "ShaderCache",
  "SharedCacheIndex",
  "SharedCacheIsolated",
  "SharedDictionary",
  "SharedStorage",
  "Shortcuts",
  "TabStateStorage",
  "Test",
  "Thumbnail",
  "TopSites",
  "TrustTokens",
  "UKMMetrics",
  "UserAnnotations",
  "Web",
};

constexpr bool IsValidDatabaseTag(std::string_view s) {
  return std::binary_search(
    std::cbegin(kDatabaseTagAllowList),
    std::cend(kDatabaseTagAllowList),
    s);
}

}  // namespace sql_metrics

#endif  // SQL_SQL_NAME_VARIANTS_H_
