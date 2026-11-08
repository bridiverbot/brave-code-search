#include "storage/common/file_system/file_system_types.h"
#include <cstdint>
#include <type_traits>

namespace storage {
  using FileSystemType = ::storage::FileSystemType;
}

namespace storage {
static_assert(::std::is_enum<FileSystemType>::value, "expected enum");
static_assert(sizeof(FileSystemType) == sizeof(::std::int32_t), "incorrect size");
static_assert(static_cast<::std::int32_t>(FileSystemType::kFileSystemTypeUnknown) == -1, "disagrees with the value in #[cxx::bridge]");
static_assert(static_cast<::std::int32_t>(FileSystemType::kFileSystemTypeTemporary) == 0, "disagrees with the value in #[cxx::bridge]");
static_assert(static_cast<::std::int32_t>(FileSystemType::kFileSystemTypePersistent) == 1, "disagrees with the value in #[cxx::bridge]");
static_assert(static_cast<::std::int32_t>(FileSystemType::kFileSystemTypeIsolated) == 2, "disagrees with the value in #[cxx::bridge]");
static_assert(static_cast<::std::int32_t>(FileSystemType::kFileSystemTypeExternal) == 3, "disagrees with the value in #[cxx::bridge]");
static_assert(static_cast<::std::int32_t>(FileSystemType::kFileSystemInternalTypeEnumStart) == 99, "disagrees with the value in #[cxx::bridge]");
static_assert(static_cast<::std::int32_t>(FileSystemType::kFileSystemTypeTest) == 100, "disagrees with the value in #[cxx::bridge]");
static_assert(static_cast<::std::int32_t>(FileSystemType::kFileSystemTypeLocal) == 101, "disagrees with the value in #[cxx::bridge]");
static_assert(static_cast<::std::int32_t>(FileSystemType::kFileSystemTypeDragged) == 103, "disagrees with the value in #[cxx::bridge]");
static_assert(static_cast<::std::int32_t>(FileSystemType::kFileSystemTypeLocalMedia) == 104, "disagrees with the value in #[cxx::bridge]");
static_assert(static_cast<::std::int32_t>(FileSystemType::kFileSystemTypeDeviceMedia) == 105, "disagrees with the value in #[cxx::bridge]");
static_assert(static_cast<::std::int32_t>(FileSystemType::kFileSystemTypeSyncable) == 106, "disagrees with the value in #[cxx::bridge]");
static_assert(static_cast<::std::int32_t>(FileSystemType::kFileSystemTypeSyncableForInternalSync) == 107, "disagrees with the value in #[cxx::bridge]");
static_assert(static_cast<::std::int32_t>(FileSystemType::kFileSystemTypeLocalForPlatformApp) == 108, "disagrees with the value in #[cxx::bridge]");
static_assert(static_cast<::std::int32_t>(FileSystemType::kFileSystemTypeProvided) == 110, "disagrees with the value in #[cxx::bridge]");
static_assert(static_cast<::std::int32_t>(FileSystemType::kFileSystemTypeDeviceMediaAsFileStorage) == 111, "disagrees with the value in #[cxx::bridge]");
static_assert(static_cast<::std::int32_t>(FileSystemType::kFileSystemTypeArcContent) == 112, "disagrees with the value in #[cxx::bridge]");
static_assert(static_cast<::std::int32_t>(FileSystemType::kFileSystemTypeArcDocumentsProvider) == 113, "disagrees with the value in #[cxx::bridge]");
static_assert(static_cast<::std::int32_t>(FileSystemType::kFileSystemTypeDriveFs) == 114, "disagrees with the value in #[cxx::bridge]");
static_assert(static_cast<::std::int32_t>(FileSystemType::kFileSystemTypeSmbFs) == 115, "disagrees with the value in #[cxx::bridge]");
static_assert(static_cast<::std::int32_t>(FileSystemType::kFileSystemTypeFuseBox) == 116, "disagrees with the value in #[cxx::bridge]");
static_assert(static_cast<::std::int32_t>(FileSystemType::kFileSystemTypeInMemory) == 117, "disagrees with the value in #[cxx::bridge]");
static_assert(static_cast<::std::int32_t>(FileSystemType::kFileSystemInternalTypeEnumEnd) == 118, "disagrees with the value in #[cxx::bridge]");
} // namespace storage
