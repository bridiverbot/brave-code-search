
#ifndef SPIRV_EXTINST_NonSemanticDebugPrintf_H_
#define SPIRV_EXTINST_NonSemanticDebugPrintf_H_

#ifdef __cplusplus
extern "C" {
#endif

enum { NonSemanticDebugPrintfRevision = 1, NonSemanticDebugPrintfRevision_BitWidthPadding = 0x7fffffff };

enum NonSemanticDebugPrintfInstructions {
    NonSemanticDebugPrintfDebugPrintf = 1,
    NonSemanticDebugPrintfInstructionsMax = 0x7ffffff
};


#ifdef __cplusplus
}
#endif

#endif // SPIRV_EXTINST_NonSemanticDebugPrintf_H_