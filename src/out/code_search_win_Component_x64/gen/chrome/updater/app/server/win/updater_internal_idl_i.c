

/* this ALWAYS GENERATED file contains the IIDs and CLSIDs */

/* link this file in with the server and any clients */


 /* File created by MIDL compiler version 8.xx.xxxx */
/* at a redacted point in time
 */
/* Compiler settings for gen/chrome/updater/app/server/win/updater_internal_idl.idl:
    Oicf, W1, Zp8, env=Win64 (32b run), target_arch=AMD64 8.xx.xxxx 
    protocol : dce , ms_ext, c_ext, robust
    error checks: allocation ref bounds_check enum stub_data 
    VC __declspec() decoration level: 
         __declspec(uuid()), __declspec(selectany), __declspec(novtable)
         DECLSPEC_UUID(), MIDL_INTERFACE()
*/
/* @@MIDL_FILE_HEADING(  ) */

#pragma warning( disable: 4049 )  /* more than 64k source lines */


#ifdef __cplusplus
extern "C"{
#endif 


#include <rpc.h>
#include <rpcndr.h>

#ifdef _MIDL_USE_GUIDDEF_

#ifndef INITGUID
#define INITGUID
#include <guiddef.h>
#undef INITGUID
#else
#include <guiddef.h>
#endif

#define MIDL_DEFINE_GUID(type,name,l,w1,w2,b1,b2,b3,b4,b5,b6,b7,b8) \
        DEFINE_GUID(name,l,w1,w2,b1,b2,b3,b4,b5,b6,b7,b8)

#else // !_MIDL_USE_GUIDDEF_

#ifndef __IID_DEFINED__
#define __IID_DEFINED__

typedef struct _IID
{
    unsigned long x;
    unsigned short s1;
    unsigned short s2;
    unsigned char  c[8];
} IID;

#endif // __IID_DEFINED__

#ifndef CLSID_DEFINED
#define CLSID_DEFINED
typedef IID CLSID;
#endif // CLSID_DEFINED

#define MIDL_DEFINE_GUID(type,name,l,w1,w2,b1,b2,b3,b4,b5,b6,b7,b8) \
        EXTERN_C __declspec(selectany) const type name = {l,w1,w2,{b1,b2,b3,b4,b5,b6,b7,b8}}

#endif // !_MIDL_USE_GUIDDEF_

MIDL_DEFINE_GUID(IID, IID_IUpdaterInternalCallback,0xC73130E4,0x8BFF,0x54C9,0xBE,0xB4,0x9A,0xA8,0x9A,0x34,0x75,0xC9);


MIDL_DEFINE_GUID(IID, IID_IUpdaterInternalCallbackUser,0x15E74F65,0x2350,0x5829,0x96,0xE1,0xC8,0x19,0x89,0x65,0xDC,0x11);


MIDL_DEFINE_GUID(IID, IID_IUpdaterInternalCallbackSystem,0x52B7A4F3,0x778C,0x5C98,0xAC,0xEF,0xAB,0x59,0x8F,0x19,0xF4,0xE4);


MIDL_DEFINE_GUID(IID, IID_IUpdaterInternal,0xEB1F6663,0x6433,0x5F6E,0xB9,0x43,0x3E,0x90,0xCC,0x6D,0xDF,0x63);


MIDL_DEFINE_GUID(IID, IID_IUpdaterInternalUser,0x2881BFF9,0x6698,0x5175,0xB6,0x48,0x74,0xED,0x8B,0xDF,0x2A,0x01);


MIDL_DEFINE_GUID(IID, IID_IUpdaterInternalSystem,0x7B85DFA9,0xE94C,0x5D8B,0xA6,0xAF,0xAB,0x54,0x4F,0x10,0x87,0xE7);


MIDL_DEFINE_GUID(IID, LIBID_UpdaterInternalLib,0xE16982EF,0x687D,0x560E,0xAE,0xD3,0x3D,0xE8,0xBF,0x85,0xA9,0x93);


MIDL_DEFINE_GUID(CLSID, CLSID_UpdaterInternalUserClass,0x04BF2DEF,0xE1A9,0x5E57,0x99,0xFF,0x34,0x3A,0xFE,0x8F,0xB6,0xF1);


MIDL_DEFINE_GUID(CLSID, CLSID_UpdaterInternalSystemClass,0x67828B22,0xFC09,0x5F79,0xA3,0x5F,0x50,0x7C,0x1E,0xF1,0x65,0x44);

#undef MIDL_DEFINE_GUID

#ifdef __cplusplus
}
#endif



