
#include "src/dawn/wire/client/Client.h"
#include "src/utils/assert.h"

#include <string>

namespace dawn::wire::client {
    WireResult Client::HandleAdapterRequestDeviceCallback(DeserializeBuffer* deserializeBuffer) {
        ReturnAdapterRequestDeviceCallbackCmd cmd;
        WIRE_TRY(cmd.Deserialize(deserializeBuffer, &mAllocator));


        return DoAdapterRequestDeviceCallback(FromAPI(ToAPI(cmd.instanceId)), FromAPI(ToAPI(cmd.future)), FromAPI(ToAPI(cmd.status)), FromAPI(ToAPI(cmd.message)), FromAPI(ToAPI(cmd.limits)), FromAPI(ToAPI(cmd.features)));
    }
    WireResult Client::HandleBufferMapAsyncCallback(DeserializeBuffer* deserializeBuffer) {
        ReturnBufferMapAsyncCallbackCmd cmd;
        WIRE_TRY(cmd.Deserialize(deserializeBuffer, &mAllocator));


        return DoBufferMapAsyncCallback(FromAPI(ToAPI(cmd.instanceId)), FromAPI(ToAPI(cmd.future)), FromAPI(ToAPI(cmd.status)), FromAPI(ToAPI(cmd.message)), FromAPI(ToAPI(cmd.readDataUpdateInfo)));
    }
    WireResult Client::HandleDeviceCreateComputePipelineAsyncCallback(DeserializeBuffer* deserializeBuffer) {
        ReturnDeviceCreateComputePipelineAsyncCallbackCmd cmd;
        WIRE_TRY(cmd.Deserialize(deserializeBuffer, &mAllocator));


        return DoDeviceCreateComputePipelineAsyncCallback(FromAPI(ToAPI(cmd.instanceId)), FromAPI(ToAPI(cmd.future)), FromAPI(ToAPI(cmd.status)), FromAPI(ToAPI(cmd.message)));
    }
    WireResult Client::HandleDeviceCreateRenderPipelineAsyncCallback(DeserializeBuffer* deserializeBuffer) {
        ReturnDeviceCreateRenderPipelineAsyncCallbackCmd cmd;
        WIRE_TRY(cmd.Deserialize(deserializeBuffer, &mAllocator));


        return DoDeviceCreateRenderPipelineAsyncCallback(FromAPI(ToAPI(cmd.instanceId)), FromAPI(ToAPI(cmd.future)), FromAPI(ToAPI(cmd.status)), FromAPI(ToAPI(cmd.message)));
    }
    WireResult Client::HandleDeviceLoggingCallback(DeserializeBuffer* deserializeBuffer) {
        ReturnDeviceLoggingCallbackCmd cmd;
        WIRE_TRY(cmd.Deserialize(deserializeBuffer, &mAllocator));


        Device* device = Get<Device>(cmd.device.id);
        if (device != nullptr && device->GetWireHandle(this).generation != cmd.device.generation) {
            device = nullptr;
        }

        return DoDeviceLoggingCallback(device, FromAPI(ToAPI(cmd.type)), FromAPI(ToAPI(cmd.message)));
    }
    WireResult Client::HandleDeviceLostCallback(DeserializeBuffer* deserializeBuffer) {
        ReturnDeviceLostCallbackCmd cmd;
        WIRE_TRY(cmd.Deserialize(deserializeBuffer, &mAllocator));


        return DoDeviceLostCallback(FromAPI(ToAPI(cmd.instanceId)), FromAPI(ToAPI(cmd.future)), FromAPI(ToAPI(cmd.reason)), FromAPI(ToAPI(cmd.message)));
    }
    WireResult Client::HandleDevicePopErrorScopeCallback(DeserializeBuffer* deserializeBuffer) {
        ReturnDevicePopErrorScopeCallbackCmd cmd;
        WIRE_TRY(cmd.Deserialize(deserializeBuffer, &mAllocator));


        return DoDevicePopErrorScopeCallback(FromAPI(ToAPI(cmd.instanceId)), FromAPI(ToAPI(cmd.future)), FromAPI(ToAPI(cmd.status)), FromAPI(ToAPI(cmd.type)), FromAPI(ToAPI(cmd.message)));
    }
    WireResult Client::HandleDeviceUncapturedErrorCallback(DeserializeBuffer* deserializeBuffer) {
        ReturnDeviceUncapturedErrorCallbackCmd cmd;
        WIRE_TRY(cmd.Deserialize(deserializeBuffer, &mAllocator));


        Device* device = Get<Device>(cmd.device.id);
        if (device != nullptr && device->GetWireHandle(this).generation != cmd.device.generation) {
            device = nullptr;
        }

        return DoDeviceUncapturedErrorCallback(device, FromAPI(ToAPI(cmd.type)), FromAPI(ToAPI(cmd.message)));
    }
    WireResult Client::HandleInstanceRequestAdapterCallback(DeserializeBuffer* deserializeBuffer) {
        ReturnInstanceRequestAdapterCallbackCmd cmd;
        WIRE_TRY(cmd.Deserialize(deserializeBuffer, &mAllocator));


        return DoInstanceRequestAdapterCallback(FromAPI(ToAPI(cmd.instanceId)), FromAPI(ToAPI(cmd.future)), FromAPI(ToAPI(cmd.status)), FromAPI(ToAPI(cmd.message)), FromAPI(ToAPI(cmd.info)), FromAPI(ToAPI(cmd.limits)), FromAPI(ToAPI(cmd.features)));
    }
    WireResult Client::HandleQueueWorkDoneCallback(DeserializeBuffer* deserializeBuffer) {
        ReturnQueueWorkDoneCallbackCmd cmd;
        WIRE_TRY(cmd.Deserialize(deserializeBuffer, &mAllocator));


        return DoQueueWorkDoneCallback(FromAPI(ToAPI(cmd.instanceId)), FromAPI(ToAPI(cmd.future)), FromAPI(ToAPI(cmd.status)), FromAPI(ToAPI(cmd.message)));
    }
    WireResult Client::HandleShaderModuleGetCompilationInfoCallback(DeserializeBuffer* deserializeBuffer) {
        ReturnShaderModuleGetCompilationInfoCallbackCmd cmd;
        WIRE_TRY(cmd.Deserialize(deserializeBuffer, &mAllocator));


        return DoShaderModuleGetCompilationInfoCallback(FromAPI(ToAPI(cmd.instanceId)), FromAPI(ToAPI(cmd.future)), FromAPI(ToAPI(cmd.status)), FromAPI(ToAPI(cmd.info)));
    }

    bool Client::HandleCommands(Span<const volatile std::byte> commands) {
        DeserializeBuffer deserializeBuffer(commands);

        const volatile CmdHeader* cmdHeader;
        while (deserializeBuffer.Peek(&cmdHeader) != WireResult::FatalError) {
            WireCmd cmdId = cmdHeader->commandId;
            WireResult result = WireResult::FatalError;
            switch (cmdId) {
                case WireCmd::ChunkedCommand:
                    result = HandleChunkedCommand(&deserializeBuffer);
                    break;
                case WireCmd::ReturnAdapterRequestDeviceCallback:
                    result = HandleAdapterRequestDeviceCallback(&deserializeBuffer);
                    break;
                case WireCmd::ReturnBufferMapAsyncCallback:
                    result = HandleBufferMapAsyncCallback(&deserializeBuffer);
                    break;
                case WireCmd::ReturnDeviceCreateComputePipelineAsyncCallback:
                    result = HandleDeviceCreateComputePipelineAsyncCallback(&deserializeBuffer);
                    break;
                case WireCmd::ReturnDeviceCreateRenderPipelineAsyncCallback:
                    result = HandleDeviceCreateRenderPipelineAsyncCallback(&deserializeBuffer);
                    break;
                case WireCmd::ReturnDeviceLoggingCallback:
                    result = HandleDeviceLoggingCallback(&deserializeBuffer);
                    break;
                case WireCmd::ReturnDeviceLostCallback:
                    result = HandleDeviceLostCallback(&deserializeBuffer);
                    break;
                case WireCmd::ReturnDevicePopErrorScopeCallback:
                    result = HandleDevicePopErrorScopeCallback(&deserializeBuffer);
                    break;
                case WireCmd::ReturnDeviceUncapturedErrorCallback:
                    result = HandleDeviceUncapturedErrorCallback(&deserializeBuffer);
                    break;
                case WireCmd::ReturnInstanceRequestAdapterCallback:
                    result = HandleInstanceRequestAdapterCallback(&deserializeBuffer);
                    break;
                case WireCmd::ReturnQueueWorkDoneCallback:
                    result = HandleQueueWorkDoneCallback(&deserializeBuffer);
                    break;
                case WireCmd::ReturnShaderModuleGetCompilationInfoCallback:
                    result = HandleShaderModuleGetCompilationInfoCallback(&deserializeBuffer);
                    break;
                default:
                    result = WireResult::FatalError;
            }

            if (result != WireResult::Success) {
                return false;
            }
            mAllocator.Reset();
        }

        if (!deserializeBuffer.Empty()) {
            return false;
        }

        return true;
    }
}  // namespace dawn::wire::client
