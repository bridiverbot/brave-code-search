// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/apps/platform_apps/api/sync_file_system.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../chrome/common/apps/platform_apps/api/sync_file_system.idl --root=../../ --destdir=gen --namespace=chrome_apps::api::%(namespace)s --generator=cpp --include-rules=

#ifndef CHROME_COMMON_APPS_PLATFORM_APPS_API_SYNC_FILE_SYSTEM_H__
#define CHROME_COMMON_APPS_PLATFORM_APPS_API_SYNC_FILE_SYSTEM_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <optional>
#include <string>
#include <vector>

#include "base/values.h"
#include <string_view>


namespace chrome_apps {
namespace api {
namespace sync_file_system {

//
// Types
//

enum class SyncAction {
  kNone = 0,
  kAdded,
  kUpdated,
  kDeleted,
  kMaxValue = kDeleted,
};


const char* ToString(SyncAction as_enum);
SyncAction ParseSyncAction(std::string_view as_string);
std::u16string GetSyncActionParseError(std::string_view as_string);

enum class ServiceStatus {
  kNone = 0,
  kInitializing,
  kRunning,
  kAuthenticationRequired,
  kTemporaryUnavailable,
  kDisabled,
  kMaxValue = kDisabled,
};


const char* ToString(ServiceStatus as_enum);
ServiceStatus ParseServiceStatus(std::string_view as_string);
std::u16string GetServiceStatusParseError(std::string_view as_string);

enum class FileStatus {
  kNone = 0,
  kSynced,
  kPending,
  kConflicting,
  kMaxValue = kConflicting,
};


const char* ToString(FileStatus as_enum);
FileStatus ParseFileStatus(std::string_view as_string);
std::u16string GetFileStatusParseError(std::string_view as_string);

enum class SyncDirection {
  kNone = 0,
  kLocalToRemote,
  kRemoteToLocal,
  kMaxValue = kRemoteToLocal,
};


const char* ToString(SyncDirection as_enum);
SyncDirection ParseSyncDirection(std::string_view as_string);
std::u16string GetSyncDirectionParseError(std::string_view as_string);

enum class ConflictResolutionPolicy {
  kNone = 0,
  kLastWriteWin,
  kManual,
  kMaxValue = kManual,
};


const char* ToString(ConflictResolutionPolicy as_enum);
ConflictResolutionPolicy ParseConflictResolutionPolicy(std::string_view as_string);
std::u16string GetConflictResolutionPolicyParseError(std::string_view as_string);

struct FileInfo {
  FileInfo();
  ~FileInfo();
  FileInfo(const FileInfo&) = delete;
  FileInfo& operator=(const FileInfo&) = delete;
  FileInfo(FileInfo&& rhs) noexcept;
  FileInfo& operator=(FileInfo&& rhs) noexcept;

  // Populates a FileInfo object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, FileInfo& out);

  // Populates a FileInfo object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::DictValue& value, FileInfo& out);

  // Creates a deep copy of FileInfo.
  FileInfo Clone() const;

  // Creates a FileInfo object from a base::DictValue, or nullopt on failure.
  static std::optional<FileInfo> FromValue(const base::DictValue& value);

  // Creates a FileInfo object from a base::Value, or nullopt on failure.
  static std::optional<FileInfo> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisFileInfo object.
  base::DictValue ToValue() const;

  // <code>fileEntry</code> for the target file whose status has changed. Contains
  // name and path information of synchronized file. On file deletion,
  // <code>fileEntry</code> information will still be available but file will no
  // longer exist.
  struct FileEntry {
    FileEntry();
    ~FileEntry();
    FileEntry(const FileEntry&) = delete;
    FileEntry& operator=(const FileEntry&) = delete;
    FileEntry(FileEntry&& rhs) noexcept;
    FileEntry& operator=(FileEntry&& rhs) noexcept;

    // Populates a FileEntry object from a base::Value& instance. Returns whether
    // |out| was successfully populated.
    static bool Populate(const base::Value& value, FileEntry& out);

    // Populates a FileEntry object from a Dict& instance. Returns whether |out|
    // was successfully populated.
    static bool Populate(const base::DictValue& value, FileEntry& out);

    // Creates a deep copy of FileEntry.
    FileEntry Clone() const;

    // Creates a FileEntry object from a base::DictValue, or nullopt on failure.
    static std::optional<FileEntry> FromValue(const base::DictValue& value);

    // Creates a FileEntry object from a base::Value, or nullopt on failure.
    static std::optional<FileEntry> FromValue(const base::Value& value);

    // Returns a new base::DictValue representing the serialized form of
    // thisFileEntry object.
    base::DictValue ToValue() const;

    base::DictValue additional_properties;
  };


  // <code>fileEntry</code> for the target file whose status has changed. Contains
  // name and path information of synchronized file. On file deletion,
  // <code>fileEntry</code> information will still be available but file will no
  // longer exist.
  FileEntry file_entry;

  // Resulting file status after $(ref:onFileStatusChanged) event. The status
  // value can be <code>'synced'</code>, <code>'pending'</code> or
  // <code>'conflicting'</code>.
  FileStatus status;

  // Sync action taken to fire $(ref:onFileStatusChanged) event. The action value
  // can be <code>'added'</code>, <code>'updated'</code> or
  // <code>'deleted'</code>. Only applies if status is <code>'synced'</code>.
  SyncAction action;

  // Sync direction for the $(ref:onFileStatusChanged) event. Sync direction value
  // can be <code>'local_to_remote'</code> or <code>'remote_to_local'</code>. Only
  // applies if status is <code>'synced'</code>.
  SyncDirection direction;

};

struct FileStatusInfo {
  FileStatusInfo();
  ~FileStatusInfo();
  FileStatusInfo(const FileStatusInfo&) = delete;
  FileStatusInfo& operator=(const FileStatusInfo&) = delete;
  FileStatusInfo(FileStatusInfo&& rhs) noexcept;
  FileStatusInfo& operator=(FileStatusInfo&& rhs) noexcept;

  // Populates a FileStatusInfo object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, FileStatusInfo& out);

  // Populates a FileStatusInfo object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::DictValue& value, FileStatusInfo& out);

  // Creates a deep copy of FileStatusInfo.
  FileStatusInfo Clone() const;

  // Creates a FileStatusInfo object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<FileStatusInfo> FromValue(const base::DictValue& value);

  // Creates a FileStatusInfo object from a base::Value, or nullopt on failure.
  static std::optional<FileStatusInfo> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisFileStatusInfo object.
  base::DictValue ToValue() const;

  // One of the Entry's originally given to getFileStatuses.
  struct FileEntry {
    FileEntry();
    ~FileEntry();
    FileEntry(const FileEntry&) = delete;
    FileEntry& operator=(const FileEntry&) = delete;
    FileEntry(FileEntry&& rhs) noexcept;
    FileEntry& operator=(FileEntry&& rhs) noexcept;

    // Populates a FileEntry object from a base::Value& instance. Returns whether
    // |out| was successfully populated.
    static bool Populate(const base::Value& value, FileEntry& out);

    // Populates a FileEntry object from a Dict& instance. Returns whether |out|
    // was successfully populated.
    static bool Populate(const base::DictValue& value, FileEntry& out);

    // Creates a deep copy of FileEntry.
    FileEntry Clone() const;

    // Creates a FileEntry object from a base::DictValue, or nullopt on failure.
    static std::optional<FileEntry> FromValue(const base::DictValue& value);

    // Creates a FileEntry object from a base::Value, or nullopt on failure.
    static std::optional<FileEntry> FromValue(const base::Value& value);

    // Returns a new base::DictValue representing the serialized form of
    // thisFileEntry object.
    base::DictValue ToValue() const;

    base::DictValue additional_properties;
  };


  // One of the Entry's originally given to getFileStatuses.
  FileEntry file_entry;

  // The status value can be <code>'synced'</code>, <code>'pending'</code> or
  // <code>'conflicting'</code>.
  FileStatus status;

  // Optional error that is only returned if there was a problem retrieving the
  // FileStatus for the given file.
  std::optional<std::string> error;

};

struct StorageInfo {
  StorageInfo();
  ~StorageInfo();
  StorageInfo(const StorageInfo&) = delete;
  StorageInfo& operator=(const StorageInfo&) = delete;
  StorageInfo(StorageInfo&& rhs) noexcept;
  StorageInfo& operator=(StorageInfo&& rhs) noexcept;

  // Populates a StorageInfo object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, StorageInfo& out);

  // Populates a StorageInfo object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::DictValue& value, StorageInfo& out);

  // Creates a deep copy of StorageInfo.
  StorageInfo Clone() const;

  // Creates a StorageInfo object from a base::DictValue, or nullopt on failure.
  static std::optional<StorageInfo> FromValue(const base::DictValue& value);

  // Creates a StorageInfo object from a base::Value, or nullopt on failure.
  static std::optional<StorageInfo> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisStorageInfo object.
  base::DictValue ToValue() const;

  int usage_bytes;

  int quota_bytes;

};

struct ServiceInfo {
  ServiceInfo();
  ~ServiceInfo();
  ServiceInfo(const ServiceInfo&) = delete;
  ServiceInfo& operator=(const ServiceInfo&) = delete;
  ServiceInfo(ServiceInfo&& rhs) noexcept;
  ServiceInfo& operator=(ServiceInfo&& rhs) noexcept;

  // Populates a ServiceInfo object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ServiceInfo& out);

  // Populates a ServiceInfo object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::DictValue& value, ServiceInfo& out);

  // Creates a deep copy of ServiceInfo.
  ServiceInfo Clone() const;

  // Creates a ServiceInfo object from a base::DictValue, or nullopt on failure.
  static std::optional<ServiceInfo> FromValue(const base::DictValue& value);

  // Creates a ServiceInfo object from a base::Value, or nullopt on failure.
  static std::optional<ServiceInfo> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisServiceInfo object.
  base::DictValue ToValue() const;

  ServiceStatus state;

  std::string description;

};


//
// Functions
//

namespace RequestFileSystem {

namespace Results {

struct FileSystem {
  FileSystem();
  ~FileSystem();
  FileSystem(const FileSystem&) = delete;
  FileSystem& operator=(const FileSystem&) = delete;
  FileSystem(FileSystem&& rhs) noexcept;
  FileSystem& operator=(FileSystem&& rhs) noexcept;

  // Returns a new base::DictValue representing the serialized form of
  // thisFileSystem object.
  base::DictValue ToValue() const;

  base::DictValue additional_properties;
};


base::ListValue Create(const FileSystem& file_system);
}  // namespace Results

}  // namespace RequestFileSystem

namespace SetConflictResolutionPolicy {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  ConflictResolutionPolicy policy;


 private:
  Params();
};

namespace Results {

base::ListValue Create();
}  // namespace Results

}  // namespace SetConflictResolutionPolicy

namespace GetConflictResolutionPolicy {

namespace Results {

base::ListValue Create(const ConflictResolutionPolicy& policy);
}  // namespace Results

}  // namespace GetConflictResolutionPolicy

namespace GetUsageAndQuota {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  struct FileSystem {
    FileSystem();
    ~FileSystem();
    FileSystem(const FileSystem&) = delete;
    FileSystem& operator=(const FileSystem&) = delete;
    FileSystem(FileSystem&& rhs) noexcept;
    FileSystem& operator=(FileSystem&& rhs) noexcept;

    // Populates a FileSystem object from a base::Value& instance. Returns whether
    // |out| was successfully populated.
    static bool Populate(const base::Value& value, FileSystem& out);

    // Populates a FileSystem object from a Dict& instance. Returns whether |out|
    // was successfully populated.
    static bool Populate(const base::DictValue& value, FileSystem& out);

    // Creates a deep copy of FileSystem.
    FileSystem Clone() const;

    // Creates a FileSystem object from a base::DictValue, or nullopt on failure.
    static std::optional<FileSystem> FromValue(const base::DictValue& value);

    // Creates a FileSystem object from a base::Value, or nullopt on failure.
    static std::optional<FileSystem> FromValue(const base::Value& value);

    base::DictValue additional_properties;
  };


  FileSystem file_system;


 private:
  Params();
};

namespace Results {

base::ListValue Create(const StorageInfo& info);
}  // namespace Results

}  // namespace GetUsageAndQuota

namespace GetFileStatus {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  struct FileEntry {
    FileEntry();
    ~FileEntry();
    FileEntry(const FileEntry&) = delete;
    FileEntry& operator=(const FileEntry&) = delete;
    FileEntry(FileEntry&& rhs) noexcept;
    FileEntry& operator=(FileEntry&& rhs) noexcept;

    // Populates a FileEntry object from a base::Value& instance. Returns whether
    // |out| was successfully populated.
    static bool Populate(const base::Value& value, FileEntry& out);

    // Populates a FileEntry object from a Dict& instance. Returns whether |out|
    // was successfully populated.
    static bool Populate(const base::DictValue& value, FileEntry& out);

    // Creates a deep copy of FileEntry.
    FileEntry Clone() const;

    // Creates a FileEntry object from a base::DictValue, or nullopt on failure.
    static std::optional<FileEntry> FromValue(const base::DictValue& value);

    // Creates a FileEntry object from a base::Value, or nullopt on failure.
    static std::optional<FileEntry> FromValue(const base::Value& value);

    base::DictValue additional_properties;
  };


  FileEntry file_entry;


 private:
  Params();
};

namespace Results {

base::ListValue Create(const FileStatus& status);
}  // namespace Results

}  // namespace GetFileStatus

namespace GetFileStatuses {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  struct FileEntriesType {
    FileEntriesType();
    ~FileEntriesType();
    FileEntriesType(const FileEntriesType&) = delete;
    FileEntriesType& operator=(const FileEntriesType&) = delete;
    FileEntriesType(FileEntriesType&& rhs) noexcept;
    FileEntriesType& operator=(FileEntriesType&& rhs) noexcept;

    // Populates a FileEntriesType object from a base::Value& instance. Returns
    // whether |out| was successfully populated.
    static bool Populate(const base::Value& value, FileEntriesType& out);

    // Populates a FileEntriesType object from a Dict& instance. Returns whether
    // |out| was successfully populated.
    static bool Populate(const base::DictValue& value, FileEntriesType& out);

    // Creates a deep copy of FileEntriesType.
    FileEntriesType Clone() const;

    // Creates a FileEntriesType object from a base::DictValue, or nullopt on
    // failure.
    static std::optional<FileEntriesType> FromValue(const base::DictValue& value);

    // Creates a FileEntriesType object from a base::Value, or nullopt on failure.
    static std::optional<FileEntriesType> FromValue(const base::Value& value);

    base::DictValue additional_properties;
  };



  std::vector<FileEntriesType> file_entries;


 private:
  Params();
};

namespace Results {

base::ListValue Create(const std::vector<FileStatusInfo>& status);
}  // namespace Results

}  // namespace GetFileStatuses

namespace GetServiceStatus {

namespace Results {

base::ListValue Create(const ServiceStatus& status);
}  // namespace Results

}  // namespace GetServiceStatus

//
// Events
//

namespace OnServiceStatusChanged {

extern const char kEventName[];  // "syncFileSystem.onServiceStatusChanged"

base::ListValue Create(const ServiceInfo& detail);
}  // namespace OnServiceStatusChanged

namespace OnFileStatusChanged {

extern const char kEventName[];  // "syncFileSystem.onFileStatusChanged"

base::ListValue Create(const FileInfo& detail);
}  // namespace OnFileStatusChanged

}  // namespace sync_file_system
}  // namespace api
}  // namespace chrome_apps

#endif  // CHROME_COMMON_APPS_PLATFORM_APPS_API_SYNC_FILE_SYSTEM_H__
