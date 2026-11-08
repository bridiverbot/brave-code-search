

/* this ALWAYS GENERATED file contains the IIDs and CLSIDs */

/* link this file in with the server and any clients */


 /* File created by MIDL compiler version 8.01.0628 */
/* at Mon Jan 18 21:14:07 2038
 */
/* Compiler settings for Mmr.idl:
    Oicf, W1, Zp8, env=Win64 (32b run), target_arch=AMD64 8.01.0628 
    protocol : all , ms_ext, c_ext, robust
    error checks: allocation ref bounds_check enum stub_data 
    VC __declspec() decoration level: 
         __declspec(uuid()), __declspec(selectany), __declspec(novtable)
         DECLSPEC_UUID(), MIDL_INTERFACE()
*/
/* @@MIDL_FILE_HEADING(  ) */



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

MIDL_DEFINE_GUID(IID, IID_IMMRStream,0x1af14559,0x6770,0x4446,0x97,0x8f,0x02,0x29,0x21,0xaf,0x53,0x60);


MIDL_DEFINE_GUID(IID, IID_IMMREventHandler,0x13c7bbd1,0x6ef4,0x40a4,0x81,0xc2,0x99,0xfa,0x0e,0x8c,0xf0,0x28);


MIDL_DEFINE_GUID(IID, IID_IMMRResponseHandler,0x506ae701,0xfe5d,0x41b3,0x8b,0x9c,0xd1,0xd6,0x37,0x4b,0x38,0xd8);


MIDL_DEFINE_GUID(IID, IID_IMMRSessionOpenscreen,0x75d41cbb,0xa826,0x45f0,0x81,0x52,0x90,0xd0,0xe6,0x17,0xcc,0xa5);


MIDL_DEFINE_GUID(IID, IID_IMMRSession,0x5B9C4B5E,0x8A4F,0x4A6C,0x9D,0x9A,0x5C,0x7B,0x3D,0x2E,0x8A,0x11);


MIDL_DEFINE_GUID(IID, IID_IMMRClient,0x8B1E7C5A,0x7E6C,0x4A27,0x9B,0x3A,0x0F,0x6C,0x4D,0x2C,0x9A,0x75);


MIDL_DEFINE_GUID(IID, IID_IMultimediaRedirector,0x9A2C3E74,0x1F5D,0x4E5E,0x8A,0x3B,0x7C,0x1D,0x4F,0x8B,0x2C,0x90);


MIDL_DEFINE_GUID(IID, IID_IMultimediaRedirectorFactory,0x3E7A73B2,0x4BD0,0x4E66,0xBD,0xBB,0x91,0xEB,0x5E,0x84,0xF4,0xCF);

#undef MIDL_DEFINE_GUID

#ifdef __cplusplus
}
#endif



