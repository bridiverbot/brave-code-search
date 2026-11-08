// SPDX-FileCopyrightText: 2022-2026 Arm Ltd.
// SPDX-License-Identifier: MIT

#ifndef SPIRV_EXTINST_NonSemanticGraphDebugInfo_H_
#define SPIRV_EXTINST_NonSemanticGraphDebugInfo_H_

#ifdef __cplusplus
extern "C" {
#endif

enum { NonSemanticGraphDebugInfoRevision = 1, NonSemanticGraphDebugInfoRevision_BitWidthPadding = 0x7fffffff };

enum NonSemanticGraphDebugInfoInstructions {
    NonSemanticGraphDebugInfoDebugGraph = 1,
    NonSemanticGraphDebugInfoDebugOperation = 2,
    NonSemanticGraphDebugInfoDebugTensor = 3,
    NonSemanticGraphDebugInfoInstructionsMax = 0x7ffffff
};


#ifdef __cplusplus
}
#endif

#endif // SPIRV_EXTINST_NonSemanticGraphDebugInfo_H_