

/* this ALWAYS GENERATED file contains the definitions for the interfaces */


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



/* verify that the <rpcndr.h> version is high enough to compile this file*/
#ifndef __REQUIRED_RPCNDR_H_VERSION__
#define __REQUIRED_RPCNDR_H_VERSION__ 500
#endif

#include "rpc.h"
#include "rpcndr.h"

#ifndef __RPCNDR_H_VERSION__
#error this stub requires an updated version of <rpcndr.h>
#endif /* __RPCNDR_H_VERSION__ */

#ifndef COM_NO_WINDOWS_H
#include "windows.h"
#include "ole2.h"
#endif /*COM_NO_WINDOWS_H*/

#ifndef __Mmr_h_h__
#define __Mmr_h_h__

#if defined(_MSC_VER) && (_MSC_VER >= 1020)
#pragma once
#endif

#ifndef DECLSPEC_XFGVIRT
#if defined(_CONTROL_FLOW_GUARD_XFG)
#define DECLSPEC_XFGVIRT(base, func) __declspec(xfg_virtual(base, func))
#else
#define DECLSPEC_XFGVIRT(base, func)
#endif
#endif

/* Forward Declarations */ 

#ifndef __IMMRStream_FWD_DEFINED__
#define __IMMRStream_FWD_DEFINED__
typedef interface IMMRStream IMMRStream;

#endif 	/* __IMMRStream_FWD_DEFINED__ */


#ifndef __IMMREventHandler_FWD_DEFINED__
#define __IMMREventHandler_FWD_DEFINED__
typedef interface IMMREventHandler IMMREventHandler;

#endif 	/* __IMMREventHandler_FWD_DEFINED__ */


#ifndef __IMMRResponseHandler_FWD_DEFINED__
#define __IMMRResponseHandler_FWD_DEFINED__
typedef interface IMMRResponseHandler IMMRResponseHandler;

#endif 	/* __IMMRResponseHandler_FWD_DEFINED__ */


#ifndef __IMMRSessionOpenscreen_FWD_DEFINED__
#define __IMMRSessionOpenscreen_FWD_DEFINED__
typedef interface IMMRSessionOpenscreen IMMRSessionOpenscreen;

#endif 	/* __IMMRSessionOpenscreen_FWD_DEFINED__ */


#ifndef __IMMRSession_FWD_DEFINED__
#define __IMMRSession_FWD_DEFINED__
typedef interface IMMRSession IMMRSession;

#endif 	/* __IMMRSession_FWD_DEFINED__ */


#ifndef __IMMRClient_FWD_DEFINED__
#define __IMMRClient_FWD_DEFINED__
typedef interface IMMRClient IMMRClient;

#endif 	/* __IMMRClient_FWD_DEFINED__ */


#ifndef __IMultimediaRedirector_FWD_DEFINED__
#define __IMultimediaRedirector_FWD_DEFINED__
typedef interface IMultimediaRedirector IMultimediaRedirector;

#endif 	/* __IMultimediaRedirector_FWD_DEFINED__ */


#ifndef __IMultimediaRedirectorFactory_FWD_DEFINED__
#define __IMultimediaRedirectorFactory_FWD_DEFINED__
typedef interface IMultimediaRedirectorFactory IMultimediaRedirectorFactory;

#endif 	/* __IMultimediaRedirectorFactory_FWD_DEFINED__ */


/* header files for imported files */
#include "unknwn.h"

#ifdef __cplusplus
extern "C"{
#endif 


/* interface __MIDL_itf_Mmr_0000_0000 */
/* [local] */ 

typedef 
enum MMR_CIPHER_MODE
    {
        MMR_CIPHER_MODE_UNENCRYPTED	= 0,
        MMR_CIPHER_MODE_AES_CTR	= 1,
        MMR_CIPHER_MODE_AES_CBC	= 2
    } 	MMR_CIPHER_MODE;

typedef struct MMR_ENCRYPTION_SCHEME
    {
    UINT32 cipherMode;
    UINT32 encryptBlocks;
    UINT32 skipBlocks;
    } 	MMR_ENCRYPTION_SCHEME;

typedef struct MMR_SIZE
    {
    UINT32 width;
    UINT32 height;
    } 	MMR_SIZE;

typedef struct MMR_RECT
    {
    INT32 x;
    INT32 y;
    INT32 width;
    INT32 height;
    } 	MMR_RECT;

typedef 
enum MMR_AUDIO_CODEC
    {
        MMR_AUDIO_CODEC_UNKNOWN	= 0,
        MMR_AUDIO_CODEC_AAC	= 1,
        MMR_AUDIO_CODEC_MP3	= 2,
        MMR_AUDIO_CODEC_PCM	= 3,
        MMR_AUDIO_CODEC_VORBIS	= 4,
        MMR_AUDIO_CODEC_FLAC	= 5,
        MMR_AUDIO_CODEC_AMR_NB	= 6,
        MMR_AUDIO_CODEC_AMR_WB	= 7,
        MMR_AUDIO_CODEC_PCM_MULAW	= 8,
        MMR_AUDIO_CODEC_GSM_MS	= 9,
        MMR_AUDIO_CODEC_PCM_S16BE	= 10,
        MMR_AUDIO_CODEC_PCM_S24BE	= 11,
        MMR_AUDIO_CODEC_OPUS	= 12,
        MMR_AUDIO_CODEC_EAC3	= 13,
        MMR_AUDIO_CODEC_PCM_ALAW	= 14,
        MMR_AUDIO_CODEC_ALAC	= 15,
        MMR_AUDIO_CODEC_AC3	= 16,
        MMR_AUDIO_CODEC_MPEG_H_AUDIO	= 17
    } 	MMR_AUDIO_CODEC;

typedef 
enum MMR_AUDIO_SAMPLE_FORMAT
    {
        MMR_AUDIO_SAMPLE_FORMAT_UNKNOWN	= 0,
        MMR_AUDIO_SAMPLE_FORMAT_U8	= 1,
        MMR_AUDIO_SAMPLE_FORMAT_S16	= 2,
        MMR_AUDIO_SAMPLE_FORMAT_S32	= 3,
        MMR_AUDIO_SAMPLE_FORMAT_F32	= 4,
        MMR_AUDIO_SAMPLE_FORMAT_PLANAR_S16	= 5,
        MMR_AUDIO_SAMPLE_FORMAT_PLANAR_F32	= 6,
        MMR_AUDIO_SAMPLE_FORMAT_PLANAR_S32	= 7,
        MMR_AUDIO_SAMPLE_FORMAT_S24	= 8,
        MMR_AUDIO_SAMPLE_FORMAT_AC3	= 9,
        MMR_AUDIO_SAMPLE_FORMAT_EAC3	= 10,
        MMR_AUDIO_SAMPLE_FORMAT_MPEG_H_AUDIO	= 11
    } 	MMR_AUDIO_SAMPLE_FORMAT;

typedef 
enum MMR_AUDIO_CHANNEL_LAYOUT
    {
        MMR_AUDIO_CHANNEL_LAYOUT_NONE	= 0,
        MMR_AUDIO_CHANNEL_LAYOUT_UNSUPPORTED	= 1,
        MMR_AUDIO_CHANNEL_LAYOUT_MONO	= 2,
        MMR_AUDIO_CHANNEL_LAYOUT_STEREO	= 3,
        MMR_AUDIO_CHANNEL_LAYOUT_2_1	= 4,
        MMR_AUDIO_CHANNEL_LAYOUT_SURROUND	= 5,
        MMR_AUDIO_CHANNEL_LAYOUT_4_0	= 6,
        MMR_AUDIO_CHANNEL_LAYOUT_2_2	= 7,
        MMR_AUDIO_CHANNEL_LAYOUT_QUAD	= 8,
        MMR_AUDIO_CHANNEL_LAYOUT_5_0	= 9,
        MMR_AUDIO_CHANNEL_LAYOUT_5_1	= 10,
        MMR_AUDIO_CHANNEL_LAYOUT_5_0_BACK	= 11,
        MMR_AUDIO_CHANNEL_LAYOUT_5_1_BACK	= 12,
        MMR_AUDIO_CHANNEL_LAYOUT_7_0	= 13,
        MMR_AUDIO_CHANNEL_LAYOUT_7_1	= 14,
        MMR_AUDIO_CHANNEL_LAYOUT_7_1_WIDE	= 15,
        MMR_AUDIO_CHANNEL_LAYOUT_STEREO_DOWNMIX	= 16,
        MMR_AUDIO_CHANNEL_LAYOUT_2POINT1	= 17,
        MMR_AUDIO_CHANNEL_LAYOUT_3_1	= 18,
        MMR_AUDIO_CHANNEL_LAYOUT_4_1	= 19,
        MMR_AUDIO_CHANNEL_LAYOUT_6_0	= 20,
        MMR_AUDIO_CHANNEL_LAYOUT_6_0_FRONT	= 21,
        MMR_AUDIO_CHANNEL_LAYOUT_HEXAGONAL	= 22,
        MMR_AUDIO_CHANNEL_LAYOUT_6_1	= 23,
        MMR_AUDIO_CHANNEL_LAYOUT_6_1_BACK	= 24,
        MMR_AUDIO_CHANNEL_LAYOUT_6_1_FRONT	= 25,
        MMR_AUDIO_CHANNEL_LAYOUT_7_0_FRONT	= 26,
        MMR_AUDIO_CHANNEL_LAYOUT_7_1_WIDE_BACK	= 27,
        MMR_AUDIO_CHANNEL_LAYOUT_OCTAGONAL	= 28,
        MMR_AUDIO_CHANNEL_LAYOUT_DISCRETE	= 29,
        MMR_AUDIO_CHANNEL_LAYOUT_STEREO_AND_KEYBOARD_MIC	= 30,
        MMR_AUDIO_CHANNEL_LAYOUT_4_1_QUAD_SIDE	= 31,
        MMR_AUDIO_CHANNEL_LAYOUT_BITSTREAM	= 32
    } 	MMR_AUDIO_CHANNEL_LAYOUT;

typedef struct MMR_AUDIO_DECODER_CONFIG
    {
    MMR_AUDIO_CODEC codec;
    MMR_AUDIO_SAMPLE_FORMAT sampleFormat;
    MMR_AUDIO_CHANNEL_LAYOUT channelLayout;
    INT32 samplesPerSecond;
    LONGLONG seekPrerollUsec;
    INT32 codecDelay;
    MMR_ENCRYPTION_SCHEME encryptionScheme;
    } 	MMR_AUDIO_DECODER_CONFIG;

typedef 
enum MMR_VIDEO_CODEC
    {
        MMR_VIDEO_CODEC_UNKNOWN	= 0,
        MMR_VIDEO_CODEC_H264	= 1,
        MMR_VIDEO_CODEC_VC1	= 2,
        MMR_VIDEO_CODEC_MPEG2	= 3,
        MMR_VIDEO_CODEC_MPEG4	= 4,
        MMR_VIDEO_CODEC_THEORA	= 5,
        MMR_VIDEO_CODEC_VP8	= 6,
        MMR_VIDEO_CODEC_VP9	= 7,
        MMR_VIDEO_CODEC_HEVC	= 8,
        MMR_VIDEO_CODEC_DOLBY_VISION	= 9,
        MMR_VIDEO_CODEC_AV1	= 10
    } 	MMR_VIDEO_CODEC;

typedef 
enum MMR_VIDEO_CODEC_PROFILE
    {
        MMR_VIDEO_CODEC_PROFILE_UNKNOWN	= -1,
        MMR_VIDEO_CODEC_PROFILE_H264_BASELINE	= 0,
        MMR_VIDEO_CODEC_PROFILE_H264_MAIN	= 1,
        MMR_VIDEO_CODEC_PROFILE_H264_EXTENDED	= 2,
        MMR_VIDEO_CODEC_PROFILE_H264_HIGH	= 3,
        MMR_VIDEO_CODEC_PROFILE_H264_HIGH10	= 4,
        MMR_VIDEO_CODEC_PROFILE_H264_HIGH422	= 5,
        MMR_VIDEO_CODEC_PROFILE_H264_HIGH444_PREDICTIVE	= 6,
        MMR_VIDEO_CODEC_PROFILE_H264_SCALABLE_BASELINE	= 7,
        MMR_VIDEO_CODEC_PROFILE_H264_SCALABLE_HIGH	= 8,
        MMR_VIDEO_CODEC_PROFILE_H264_STEREO_HIGH	= 9,
        MMR_VIDEO_CODEC_PROFILE_H264_MULTIVIEW_HIGH	= 10,
        MMR_VIDEO_CODEC_PROFILE_VP8_ANY	= 11,
        MMR_VIDEO_CODEC_PROFILE_VP9_PROFILE0	= 12,
        MMR_VIDEO_CODEC_PROFILE_VP9_PROFILE1	= 13,
        MMR_VIDEO_CODEC_PROFILE_VP9_PROFILE2	= 14,
        MMR_VIDEO_CODEC_PROFILE_VP9_PROFILE3	= 15,
        MMR_VIDEO_CODEC_PROFILE_HEVC_MAIN	= 16,
        MMR_VIDEO_CODEC_PROFILE_HEVC_MAIN10	= 17,
        MMR_VIDEO_CODEC_PROFILE_HEVC_MAIN_STILL_PICTURE	= 18,
        MMR_VIDEO_CODEC_PROFILE_DOLBY_VISION_PROFILE0	= 19,
        MMR_VIDEO_CODEC_PROFILE_DOLBY_VISION_PROFILE4	= 20,
        MMR_VIDEO_CODEC_PROFILE_DOLBY_VISION_PROFILE5	= 21,
        MMR_VIDEO_CODEC_PROFILE_DOLBY_VISION_PROFILE7	= 22,
        MMR_VIDEO_CODEC_PROFILE_THEORA_ANY	= 23,
        MMR_VIDEO_CODEC_PROFILE_AV1_MAIN	= 24,
        MMR_VIDEO_CODEC_PROFILE_AV1_HIGH	= 25,
        MMR_VIDEO_CODEC_PROFILE_AV1_PRO	= 26,
        MMR_VIDEO_CODEC_PROFILE_DOLBY_VISION_PROFILE8	= 27,
        MMR_VIDEO_CODEC_PROFILE_DOLBY_VISION_PROFILE9	= 28
    } 	MMR_VIDEO_CODEC_PROFILE;

typedef 
enum MMR_VIDEO_PIXEL_FORMAT
    {
        MMR_VIDEO_PIXEL_FORMAT_UNKNOWN	= 0,
        MMR_VIDEO_PIXEL_FORMAT_I420	= 1,
        MMR_VIDEO_PIXEL_FORMAT_YV12	= 2,
        MMR_VIDEO_PIXEL_FORMAT_I422	= 3,
        MMR_VIDEO_PIXEL_FORMAT_I420A	= 4,
        MMR_VIDEO_PIXEL_FORMAT_I444	= 5,
        MMR_VIDEO_PIXEL_FORMAT_NV12	= 6,
        MMR_VIDEO_PIXEL_FORMAT_NV21	= 7,
        MMR_VIDEO_PIXEL_FORMAT_UYVY	= 8,
        MMR_VIDEO_PIXEL_FORMAT_YUY2	= 9,
        MMR_VIDEO_PIXEL_FORMAT_ARGB	= 10,
        MMR_VIDEO_PIXEL_FORMAT_XRGB	= 11,
        MMR_VIDEO_PIXEL_FORMAT_RGB24	= 12,
        MMR_VIDEO_PIXEL_FORMAT_RGB32	= 13,
        MMR_VIDEO_PIXEL_FORMAT_MJPEG	= 14,
        MMR_VIDEO_PIXEL_FORMAT_YUV420P9	= 16,
        MMR_VIDEO_PIXEL_FORMAT_YUV420P10	= 17,
        MMR_VIDEO_PIXEL_FORMAT_YUV422P9	= 18,
        MMR_VIDEO_PIXEL_FORMAT_YUV422P10	= 19,
        MMR_VIDEO_PIXEL_FORMAT_YUV444P9	= 20,
        MMR_VIDEO_PIXEL_FORMAT_YUV444P10	= 21,
        MMR_VIDEO_PIXEL_FORMAT_YUV420P12	= 22,
        MMR_VIDEO_PIXEL_FORMAT_YUV422P12	= 23,
        MMR_VIDEO_PIXEL_FORMAT_YUV444P12	= 24,
        MMR_VIDEO_PIXEL_FORMAT_Y16	= 26,
        MMR_VIDEO_PIXEL_FORMAT_ABGR	= 27,
        MMR_VIDEO_PIXEL_FORMAT_XBGR	= 28,
        MMR_VIDEO_PIXEL_FORMAT_P016LE	= 29,
        MMR_VIDEO_PIXEL_FORMAT_XR30	= 30,
        MMR_VIDEO_PIXEL_FORMAT_XB30	= 31
    } 	MMR_VIDEO_PIXEL_FORMAT;

typedef 
enum MMR_VIDEO_COLOR_SPACE
    {
        MMR_VIDEO_COLOR_SPACE_UNSPECIFIED	= 0,
        MMR_VIDEO_COLOR_SPACE_JPEG	= 1,
        MMR_VIDEO_COLOR_SPACE_HD_REC709	= 2,
        MMR_VIDEO_COLOR_SPACE_SD_REC601	= 3
    } 	MMR_VIDEO_COLOR_SPACE;

typedef struct MMR_VIDEO_DECODER_CONFIG
    {
    MMR_VIDEO_CODEC codec;
    MMR_VIDEO_CODEC_PROFILE profile;
    MMR_VIDEO_PIXEL_FORMAT format;
    MMR_VIDEO_COLOR_SPACE colorSpace;
    MMR_SIZE codedSize;
    MMR_RECT visibleRect;
    MMR_SIZE naturalSize;
    MMR_ENCRYPTION_SCHEME encryptionScheme;
    } 	MMR_VIDEO_DECODER_CONFIG;

typedef struct MMR_STREAM_STATS
    {
    UINT64 bytesBuffered;
    UINT64 bytesSent;
    UINT64 buffersBuffered;
    UINT64 buffersSent;
    } 	MMR_STREAM_STATS;

typedef struct MMR_EXTENDED_STATS
    {
    UINT32 framesRendered;
    UINT32 framesDropped;
    UINT32 framesCorrupted;
    float framesPerSecond;
    double playbackJitter;
    double totalFrameDelay;
    } 	MMR_EXTENDED_STATS;



extern RPC_IF_HANDLE __MIDL_itf_Mmr_0000_0000_v0_0_c_ifspec;
extern RPC_IF_HANDLE __MIDL_itf_Mmr_0000_0000_v0_0_s_ifspec;

#ifndef __IMMRStream_INTERFACE_DEFINED__
#define __IMMRStream_INTERFACE_DEFINED__

/* interface IMMRStream */
/* [unique][uuid][object] */ 


EXTERN_C const IID IID_IMMRStream;

#if defined(__cplusplus) && !defined(CINTERFACE)
    
    MIDL_INTERFACE("1af14559-6770-4446-978f-022921af5360")
    IMMRStream : public IUnknown
    {
    public:
        virtual HRESULT STDMETHODCALLTYPE AppendBuffer( 
            /* [size_is][in] */ BYTE *data,
            /* [in] */ UINT32 dataSize,
            /* [in] */ LONGLONG timestamp,
            /* [in] */ LONGLONG duration,
            /* [in] */ BOOL isKeyFrame) = 0;
        
        virtual HRESULT STDMETHODCALLTYPE EndOfStream( void) = 0;
        
        virtual HRESULT STDMETHODCALLTYPE SetVideoRect( 
            HWND parent,
            UINT32 x,
            UINT32 y,
            UINT32 width,
            UINT32 height) = 0;
        
        virtual HRESULT STDMETHODCALLTYPE GetStats( 
            /* [out] */ MMR_STREAM_STATS *stats) = 0;
        
    };
    
    
#else 	/* C style interface */

    typedef struct IMMRStreamVtbl
    {
        BEGIN_INTERFACE
        
        DECLSPEC_XFGVIRT(IUnknown, QueryInterface)
        HRESULT ( STDMETHODCALLTYPE *QueryInterface )( 
            IMMRStream * This,
            /* [in] */ REFIID riid,
            /* [annotation][iid_is][out] */ 
            _COM_Outptr_  void **ppvObject);
        
        DECLSPEC_XFGVIRT(IUnknown, AddRef)
        ULONG ( STDMETHODCALLTYPE *AddRef )( 
            IMMRStream * This);
        
        DECLSPEC_XFGVIRT(IUnknown, Release)
        ULONG ( STDMETHODCALLTYPE *Release )( 
            IMMRStream * This);
        
        DECLSPEC_XFGVIRT(IMMRStream, AppendBuffer)
        HRESULT ( STDMETHODCALLTYPE *AppendBuffer )( 
            IMMRStream * This,
            /* [size_is][in] */ BYTE *data,
            /* [in] */ UINT32 dataSize,
            /* [in] */ LONGLONG timestamp,
            /* [in] */ LONGLONG duration,
            /* [in] */ BOOL isKeyFrame);
        
        DECLSPEC_XFGVIRT(IMMRStream, EndOfStream)
        HRESULT ( STDMETHODCALLTYPE *EndOfStream )( 
            IMMRStream * This);
        
        DECLSPEC_XFGVIRT(IMMRStream, SetVideoRect)
        HRESULT ( STDMETHODCALLTYPE *SetVideoRect )( 
            IMMRStream * This,
            HWND parent,
            UINT32 x,
            UINT32 y,
            UINT32 width,
            UINT32 height);
        
        DECLSPEC_XFGVIRT(IMMRStream, GetStats)
        HRESULT ( STDMETHODCALLTYPE *GetStats )( 
            IMMRStream * This,
            /* [out] */ MMR_STREAM_STATS *stats);
        
        END_INTERFACE
    } IMMRStreamVtbl;

    interface IMMRStream
    {
        CONST_VTBL struct IMMRStreamVtbl *lpVtbl;
    };

    

#ifdef COBJMACROS


#define IMMRStream_QueryInterface(This,riid,ppvObject)	\
    ( (This)->lpVtbl -> QueryInterface(This,riid,ppvObject) ) 

#define IMMRStream_AddRef(This)	\
    ( (This)->lpVtbl -> AddRef(This) ) 

#define IMMRStream_Release(This)	\
    ( (This)->lpVtbl -> Release(This) ) 


#define IMMRStream_AppendBuffer(This,data,dataSize,timestamp,duration,isKeyFrame)	\
    ( (This)->lpVtbl -> AppendBuffer(This,data,dataSize,timestamp,duration,isKeyFrame) ) 

#define IMMRStream_EndOfStream(This)	\
    ( (This)->lpVtbl -> EndOfStream(This) ) 

#define IMMRStream_SetVideoRect(This,parent,x,y,width,height)	\
    ( (This)->lpVtbl -> SetVideoRect(This,parent,x,y,width,height) ) 

#define IMMRStream_GetStats(This,stats)	\
    ( (This)->lpVtbl -> GetStats(This,stats) ) 

#endif /* COBJMACROS */


#endif 	/* C style interface */




#endif 	/* __IMMRStream_INTERFACE_DEFINED__ */


#ifndef __IMMREventHandler_INTERFACE_DEFINED__
#define __IMMREventHandler_INTERFACE_DEFINED__

/* interface IMMREventHandler */
/* [unique][uuid][object] */ 


EXTERN_C const IID IID_IMMREventHandler;

#if defined(__cplusplus) && !defined(CINTERFACE)
    
    MIDL_INTERFACE("13c7bbd1-6ef4-40a4-81c2-99fa0e8cf028")
    IMMREventHandler : public IUnknown
    {
    public:
        virtual HRESULT STDMETHODCALLTYPE OnRemotingInitialized( 
            BOOL succeeded) = 0;
        
        virtual HRESULT STDMETHODCALLTYPE OnBufferingStateChanged( 
            BOOL buffering) = 0;
        
        virtual HRESULT STDMETHODCALLTYPE OnError( 
            LPCWSTR errorMessage,
            HRESULT errorCode) = 0;
        
        virtual HRESULT STDMETHODCALLTYPE OnTimeUpdate( 
            LONGLONG currentTime) = 0;
        
        virtual HRESULT STDMETHODCALLTYPE OnEnded( void) = 0;
        
        virtual HRESULT STDMETHODCALLTYPE OnSeeked( void) = 0;
        
    };
    
    
#else 	/* C style interface */

    typedef struct IMMREventHandlerVtbl
    {
        BEGIN_INTERFACE
        
        DECLSPEC_XFGVIRT(IUnknown, QueryInterface)
        HRESULT ( STDMETHODCALLTYPE *QueryInterface )( 
            IMMREventHandler * This,
            /* [in] */ REFIID riid,
            /* [annotation][iid_is][out] */ 
            _COM_Outptr_  void **ppvObject);
        
        DECLSPEC_XFGVIRT(IUnknown, AddRef)
        ULONG ( STDMETHODCALLTYPE *AddRef )( 
            IMMREventHandler * This);
        
        DECLSPEC_XFGVIRT(IUnknown, Release)
        ULONG ( STDMETHODCALLTYPE *Release )( 
            IMMREventHandler * This);
        
        DECLSPEC_XFGVIRT(IMMREventHandler, OnRemotingInitialized)
        HRESULT ( STDMETHODCALLTYPE *OnRemotingInitialized )( 
            IMMREventHandler * This,
            BOOL succeeded);
        
        DECLSPEC_XFGVIRT(IMMREventHandler, OnBufferingStateChanged)
        HRESULT ( STDMETHODCALLTYPE *OnBufferingStateChanged )( 
            IMMREventHandler * This,
            BOOL buffering);
        
        DECLSPEC_XFGVIRT(IMMREventHandler, OnError)
        HRESULT ( STDMETHODCALLTYPE *OnError )( 
            IMMREventHandler * This,
            LPCWSTR errorMessage,
            HRESULT errorCode);
        
        DECLSPEC_XFGVIRT(IMMREventHandler, OnTimeUpdate)
        HRESULT ( STDMETHODCALLTYPE *OnTimeUpdate )( 
            IMMREventHandler * This,
            LONGLONG currentTime);
        
        DECLSPEC_XFGVIRT(IMMREventHandler, OnEnded)
        HRESULT ( STDMETHODCALLTYPE *OnEnded )( 
            IMMREventHandler * This);
        
        DECLSPEC_XFGVIRT(IMMREventHandler, OnSeeked)
        HRESULT ( STDMETHODCALLTYPE *OnSeeked )( 
            IMMREventHandler * This);
        
        END_INTERFACE
    } IMMREventHandlerVtbl;

    interface IMMREventHandler
    {
        CONST_VTBL struct IMMREventHandlerVtbl *lpVtbl;
    };

    

#ifdef COBJMACROS


#define IMMREventHandler_QueryInterface(This,riid,ppvObject)	\
    ( (This)->lpVtbl -> QueryInterface(This,riid,ppvObject) ) 

#define IMMREventHandler_AddRef(This)	\
    ( (This)->lpVtbl -> AddRef(This) ) 

#define IMMREventHandler_Release(This)	\
    ( (This)->lpVtbl -> Release(This) ) 


#define IMMREventHandler_OnRemotingInitialized(This,succeeded)	\
    ( (This)->lpVtbl -> OnRemotingInitialized(This,succeeded) ) 

#define IMMREventHandler_OnBufferingStateChanged(This,buffering)	\
    ( (This)->lpVtbl -> OnBufferingStateChanged(This,buffering) ) 

#define IMMREventHandler_OnError(This,errorMessage,errorCode)	\
    ( (This)->lpVtbl -> OnError(This,errorMessage,errorCode) ) 

#define IMMREventHandler_OnTimeUpdate(This,currentTime)	\
    ( (This)->lpVtbl -> OnTimeUpdate(This,currentTime) ) 

#define IMMREventHandler_OnEnded(This)	\
    ( (This)->lpVtbl -> OnEnded(This) ) 

#define IMMREventHandler_OnSeeked(This)	\
    ( (This)->lpVtbl -> OnSeeked(This) ) 

#endif /* COBJMACROS */


#endif 	/* C style interface */




#endif 	/* __IMMREventHandler_INTERFACE_DEFINED__ */


#ifndef __IMMRResponseHandler_INTERFACE_DEFINED__
#define __IMMRResponseHandler_INTERFACE_DEFINED__

/* interface IMMRResponseHandler */
/* [unique][uuid][object] */ 


EXTERN_C const IID IID_IMMRResponseHandler;

#if defined(__cplusplus) && !defined(CINTERFACE)
    
    MIDL_INTERFACE("506ae701-fe5d-41b3-8b9c-d1d6374b38d8")
    IMMRResponseHandler : public IUnknown
    {
    public:
        virtual HRESULT STDMETHODCALLTYPE OnResponse( 
            /* [size_is][in] */ BYTE *message,
            UINT32 messageSize) = 0;
        
    };
    
    
#else 	/* C style interface */

    typedef struct IMMRResponseHandlerVtbl
    {
        BEGIN_INTERFACE
        
        DECLSPEC_XFGVIRT(IUnknown, QueryInterface)
        HRESULT ( STDMETHODCALLTYPE *QueryInterface )( 
            IMMRResponseHandler * This,
            /* [in] */ REFIID riid,
            /* [annotation][iid_is][out] */ 
            _COM_Outptr_  void **ppvObject);
        
        DECLSPEC_XFGVIRT(IUnknown, AddRef)
        ULONG ( STDMETHODCALLTYPE *AddRef )( 
            IMMRResponseHandler * This);
        
        DECLSPEC_XFGVIRT(IUnknown, Release)
        ULONG ( STDMETHODCALLTYPE *Release )( 
            IMMRResponseHandler * This);
        
        DECLSPEC_XFGVIRT(IMMRResponseHandler, OnResponse)
        HRESULT ( STDMETHODCALLTYPE *OnResponse )( 
            IMMRResponseHandler * This,
            /* [size_is][in] */ BYTE *message,
            UINT32 messageSize);
        
        END_INTERFACE
    } IMMRResponseHandlerVtbl;

    interface IMMRResponseHandler
    {
        CONST_VTBL struct IMMRResponseHandlerVtbl *lpVtbl;
    };

    

#ifdef COBJMACROS


#define IMMRResponseHandler_QueryInterface(This,riid,ppvObject)	\
    ( (This)->lpVtbl -> QueryInterface(This,riid,ppvObject) ) 

#define IMMRResponseHandler_AddRef(This)	\
    ( (This)->lpVtbl -> AddRef(This) ) 

#define IMMRResponseHandler_Release(This)	\
    ( (This)->lpVtbl -> Release(This) ) 


#define IMMRResponseHandler_OnResponse(This,message,messageSize)	\
    ( (This)->lpVtbl -> OnResponse(This,message,messageSize) ) 

#endif /* COBJMACROS */


#endif 	/* C style interface */




#endif 	/* __IMMRResponseHandler_INTERFACE_DEFINED__ */


#ifndef __IMMRSessionOpenscreen_INTERFACE_DEFINED__
#define __IMMRSessionOpenscreen_INTERFACE_DEFINED__

/* interface IMMRSessionOpenscreen */
/* [unique][uuid][object] */ 


EXTERN_C const IID IID_IMMRSessionOpenscreen;

#if defined(__cplusplus) && !defined(CINTERFACE)
    
    MIDL_INTERFACE("75d41cbb-a826-45f0-8152-90d0e617cca5")
    IMMRSessionOpenscreen : public IUnknown
    {
    public:
        virtual HRESULT STDMETHODCALLTYPE CreateStream( 
            UINT32 streamId,
            /* [out] */ IMMRStream **stream) = 0;
        
        virtual HRESULT STDMETHODCALLTYPE SetResponseHandler( 
            /* [optional][in] */ IMMRResponseHandler *handler) = 0;
        
        virtual HRESULT STDMETHODCALLTYPE SendRawOpenscreenMessage( 
            /* [size_is][in] */ BYTE *message,
            UINT32 messageSize) = 0;
        
    };
    
    
#else 	/* C style interface */

    typedef struct IMMRSessionOpenscreenVtbl
    {
        BEGIN_INTERFACE
        
        DECLSPEC_XFGVIRT(IUnknown, QueryInterface)
        HRESULT ( STDMETHODCALLTYPE *QueryInterface )( 
            IMMRSessionOpenscreen * This,
            /* [in] */ REFIID riid,
            /* [annotation][iid_is][out] */ 
            _COM_Outptr_  void **ppvObject);
        
        DECLSPEC_XFGVIRT(IUnknown, AddRef)
        ULONG ( STDMETHODCALLTYPE *AddRef )( 
            IMMRSessionOpenscreen * This);
        
        DECLSPEC_XFGVIRT(IUnknown, Release)
        ULONG ( STDMETHODCALLTYPE *Release )( 
            IMMRSessionOpenscreen * This);
        
        DECLSPEC_XFGVIRT(IMMRSessionOpenscreen, CreateStream)
        HRESULT ( STDMETHODCALLTYPE *CreateStream )( 
            IMMRSessionOpenscreen * This,
            UINT32 streamId,
            /* [out] */ IMMRStream **stream);
        
        DECLSPEC_XFGVIRT(IMMRSessionOpenscreen, SetResponseHandler)
        HRESULT ( STDMETHODCALLTYPE *SetResponseHandler )( 
            IMMRSessionOpenscreen * This,
            /* [optional][in] */ IMMRResponseHandler *handler);
        
        DECLSPEC_XFGVIRT(IMMRSessionOpenscreen, SendRawOpenscreenMessage)
        HRESULT ( STDMETHODCALLTYPE *SendRawOpenscreenMessage )( 
            IMMRSessionOpenscreen * This,
            /* [size_is][in] */ BYTE *message,
            UINT32 messageSize);
        
        END_INTERFACE
    } IMMRSessionOpenscreenVtbl;

    interface IMMRSessionOpenscreen
    {
        CONST_VTBL struct IMMRSessionOpenscreenVtbl *lpVtbl;
    };

    

#ifdef COBJMACROS


#define IMMRSessionOpenscreen_QueryInterface(This,riid,ppvObject)	\
    ( (This)->lpVtbl -> QueryInterface(This,riid,ppvObject) ) 

#define IMMRSessionOpenscreen_AddRef(This)	\
    ( (This)->lpVtbl -> AddRef(This) ) 

#define IMMRSessionOpenscreen_Release(This)	\
    ( (This)->lpVtbl -> Release(This) ) 


#define IMMRSessionOpenscreen_CreateStream(This,streamId,stream)	\
    ( (This)->lpVtbl -> CreateStream(This,streamId,stream) ) 

#define IMMRSessionOpenscreen_SetResponseHandler(This,handler)	\
    ( (This)->lpVtbl -> SetResponseHandler(This,handler) ) 

#define IMMRSessionOpenscreen_SendRawOpenscreenMessage(This,message,messageSize)	\
    ( (This)->lpVtbl -> SendRawOpenscreenMessage(This,message,messageSize) ) 

#endif /* COBJMACROS */


#endif 	/* C style interface */




#endif 	/* __IMMRSessionOpenscreen_INTERFACE_DEFINED__ */


#ifndef __IMMRSession_INTERFACE_DEFINED__
#define __IMMRSession_INTERFACE_DEFINED__

/* interface IMMRSession */
/* [unique][uuid][object] */ 


EXTERN_C const IID IID_IMMRSession;

#if defined(__cplusplus) && !defined(CINTERFACE)
    
    MIDL_INTERFACE("5B9C4B5E-8A4F-4A6C-9D9A-5C7B3D2E8A11")
    IMMRSession : public IUnknown
    {
    public:
        virtual HRESULT STDMETHODCALLTYPE GetSupportedCodecCount( 
            /* [out] */ UINT32 *supportedCodecCount) = 0;
        
        virtual HRESULT STDMETHODCALLTYPE GetSupportedCodec( 
            UINT32 index,
            /* [out] */ LPWSTR *mimeType) = 0;
        
        virtual HRESULT STDMETHODCALLTYPE CreateAudioStream( 
            /* [in] */ MMR_AUDIO_DECODER_CONFIG config,
            /* [size_is][in] */ BYTE *extraData,
            UINT32 extraDataSize,
            /* [out] */ IMMRStream **stream) = 0;
        
        virtual HRESULT STDMETHODCALLTYPE CreateVideoStream( 
            /* [in] */ MMR_VIDEO_DECODER_CONFIG config,
            /* [size_is][in] */ BYTE *extraData,
            UINT32 extraDataSize,
            /* [out] */ IMMRStream **stream) = 0;
        
        virtual HRESULT STDMETHODCALLTYPE BeginRemoting( void) = 0;
        
        virtual HRESULT STDMETHODCALLTYPE SetEventHandler( 
            /* [optional][in] */ IMMREventHandler *handler) = 0;
        
        virtual HRESULT STDMETHODCALLTYPE Play( void) = 0;
        
        virtual HRESULT STDMETHODCALLTYPE Pause( void) = 0;
        
        virtual HRESULT STDMETHODCALLTYPE SetCurrentTime( 
            LONGLONG timestamp) = 0;
        
        virtual HRESULT STDMETHODCALLTYPE SetPlaybackRate( 
            double rate) = 0;
        
        virtual HRESULT STDMETHODCALLTYPE SetLoop( 
            BOOL loop) = 0;
        
        virtual HRESULT STDMETHODCALLTYPE SetVolume( 
            double volume) = 0;
        
        virtual HRESULT STDMETHODCALLTYPE GetExtendedStats( 
            /* [out] */ MMR_EXTENDED_STATS *stats) = 0;
        
        virtual HRESULT STDMETHODCALLTYPE GetVideoReplacementImage( 
            /* [size_is][in] */ BYTE *imageData,
            UINT32 width,
            UINT32 height,
            UINT32 stride) = 0;
        
    };
    
    
#else 	/* C style interface */

    typedef struct IMMRSessionVtbl
    {
        BEGIN_INTERFACE
        
        DECLSPEC_XFGVIRT(IUnknown, QueryInterface)
        HRESULT ( STDMETHODCALLTYPE *QueryInterface )( 
            IMMRSession * This,
            /* [in] */ REFIID riid,
            /* [annotation][iid_is][out] */ 
            _COM_Outptr_  void **ppvObject);
        
        DECLSPEC_XFGVIRT(IUnknown, AddRef)
        ULONG ( STDMETHODCALLTYPE *AddRef )( 
            IMMRSession * This);
        
        DECLSPEC_XFGVIRT(IUnknown, Release)
        ULONG ( STDMETHODCALLTYPE *Release )( 
            IMMRSession * This);
        
        DECLSPEC_XFGVIRT(IMMRSession, GetSupportedCodecCount)
        HRESULT ( STDMETHODCALLTYPE *GetSupportedCodecCount )( 
            IMMRSession * This,
            /* [out] */ UINT32 *supportedCodecCount);
        
        DECLSPEC_XFGVIRT(IMMRSession, GetSupportedCodec)
        HRESULT ( STDMETHODCALLTYPE *GetSupportedCodec )( 
            IMMRSession * This,
            UINT32 index,
            /* [out] */ LPWSTR *mimeType);
        
        DECLSPEC_XFGVIRT(IMMRSession, CreateAudioStream)
        HRESULT ( STDMETHODCALLTYPE *CreateAudioStream )( 
            IMMRSession * This,
            /* [in] */ MMR_AUDIO_DECODER_CONFIG config,
            /* [size_is][in] */ BYTE *extraData,
            UINT32 extraDataSize,
            /* [out] */ IMMRStream **stream);
        
        DECLSPEC_XFGVIRT(IMMRSession, CreateVideoStream)
        HRESULT ( STDMETHODCALLTYPE *CreateVideoStream )( 
            IMMRSession * This,
            /* [in] */ MMR_VIDEO_DECODER_CONFIG config,
            /* [size_is][in] */ BYTE *extraData,
            UINT32 extraDataSize,
            /* [out] */ IMMRStream **stream);
        
        DECLSPEC_XFGVIRT(IMMRSession, BeginRemoting)
        HRESULT ( STDMETHODCALLTYPE *BeginRemoting )( 
            IMMRSession * This);
        
        DECLSPEC_XFGVIRT(IMMRSession, SetEventHandler)
        HRESULT ( STDMETHODCALLTYPE *SetEventHandler )( 
            IMMRSession * This,
            /* [optional][in] */ IMMREventHandler *handler);
        
        DECLSPEC_XFGVIRT(IMMRSession, Play)
        HRESULT ( STDMETHODCALLTYPE *Play )( 
            IMMRSession * This);
        
        DECLSPEC_XFGVIRT(IMMRSession, Pause)
        HRESULT ( STDMETHODCALLTYPE *Pause )( 
            IMMRSession * This);
        
        DECLSPEC_XFGVIRT(IMMRSession, SetCurrentTime)
        HRESULT ( STDMETHODCALLTYPE *SetCurrentTime )( 
            IMMRSession * This,
            LONGLONG timestamp);
        
        DECLSPEC_XFGVIRT(IMMRSession, SetPlaybackRate)
        HRESULT ( STDMETHODCALLTYPE *SetPlaybackRate )( 
            IMMRSession * This,
            double rate);
        
        DECLSPEC_XFGVIRT(IMMRSession, SetLoop)
        HRESULT ( STDMETHODCALLTYPE *SetLoop )( 
            IMMRSession * This,
            BOOL loop);
        
        DECLSPEC_XFGVIRT(IMMRSession, SetVolume)
        HRESULT ( STDMETHODCALLTYPE *SetVolume )( 
            IMMRSession * This,
            double volume);
        
        DECLSPEC_XFGVIRT(IMMRSession, GetExtendedStats)
        HRESULT ( STDMETHODCALLTYPE *GetExtendedStats )( 
            IMMRSession * This,
            /* [out] */ MMR_EXTENDED_STATS *stats);
        
        DECLSPEC_XFGVIRT(IMMRSession, GetVideoReplacementImage)
        HRESULT ( STDMETHODCALLTYPE *GetVideoReplacementImage )( 
            IMMRSession * This,
            /* [size_is][in] */ BYTE *imageData,
            UINT32 width,
            UINT32 height,
            UINT32 stride);
        
        END_INTERFACE
    } IMMRSessionVtbl;

    interface IMMRSession
    {
        CONST_VTBL struct IMMRSessionVtbl *lpVtbl;
    };

    

#ifdef COBJMACROS


#define IMMRSession_QueryInterface(This,riid,ppvObject)	\
    ( (This)->lpVtbl -> QueryInterface(This,riid,ppvObject) ) 

#define IMMRSession_AddRef(This)	\
    ( (This)->lpVtbl -> AddRef(This) ) 

#define IMMRSession_Release(This)	\
    ( (This)->lpVtbl -> Release(This) ) 


#define IMMRSession_GetSupportedCodecCount(This,supportedCodecCount)	\
    ( (This)->lpVtbl -> GetSupportedCodecCount(This,supportedCodecCount) ) 

#define IMMRSession_GetSupportedCodec(This,index,mimeType)	\
    ( (This)->lpVtbl -> GetSupportedCodec(This,index,mimeType) ) 

#define IMMRSession_CreateAudioStream(This,config,extraData,extraDataSize,stream)	\
    ( (This)->lpVtbl -> CreateAudioStream(This,config,extraData,extraDataSize,stream) ) 

#define IMMRSession_CreateVideoStream(This,config,extraData,extraDataSize,stream)	\
    ( (This)->lpVtbl -> CreateVideoStream(This,config,extraData,extraDataSize,stream) ) 

#define IMMRSession_BeginRemoting(This)	\
    ( (This)->lpVtbl -> BeginRemoting(This) ) 

#define IMMRSession_SetEventHandler(This,handler)	\
    ( (This)->lpVtbl -> SetEventHandler(This,handler) ) 

#define IMMRSession_Play(This)	\
    ( (This)->lpVtbl -> Play(This) ) 

#define IMMRSession_Pause(This)	\
    ( (This)->lpVtbl -> Pause(This) ) 

#define IMMRSession_SetCurrentTime(This,timestamp)	\
    ( (This)->lpVtbl -> SetCurrentTime(This,timestamp) ) 

#define IMMRSession_SetPlaybackRate(This,rate)	\
    ( (This)->lpVtbl -> SetPlaybackRate(This,rate) ) 

#define IMMRSession_SetLoop(This,loop)	\
    ( (This)->lpVtbl -> SetLoop(This,loop) ) 

#define IMMRSession_SetVolume(This,volume)	\
    ( (This)->lpVtbl -> SetVolume(This,volume) ) 

#define IMMRSession_GetExtendedStats(This,stats)	\
    ( (This)->lpVtbl -> GetExtendedStats(This,stats) ) 

#define IMMRSession_GetVideoReplacementImage(This,imageData,width,height,stride)	\
    ( (This)->lpVtbl -> GetVideoReplacementImage(This,imageData,width,height,stride) ) 

#endif /* COBJMACROS */


#endif 	/* C style interface */




#endif 	/* __IMMRSession_INTERFACE_DEFINED__ */


#ifndef __IMMRClient_INTERFACE_DEFINED__
#define __IMMRClient_INTERFACE_DEFINED__

/* interface IMMRClient */
/* [unique][uuid][object] */ 


EXTERN_C const IID IID_IMMRClient;

#if defined(__cplusplus) && !defined(CINTERFACE)
    
    MIDL_INTERFACE("8B1E7C5A-7E6C-4A27-9B3A-0F6C4D2C9A75")
    IMMRClient : public IUnknown
    {
    public:
        virtual HRESULT STDMETHODCALLTYPE OnSessionCreated( 
            /* [in] */ IMMRSession *session) = 0;
        
        virtual HRESULT STDMETHODCALLTYPE OnSessionCreationFailed( 
            /* [in] */ HRESULT errorCode) = 0;
        
        virtual HRESULT STDMETHODCALLTYPE OnRemoteClientDisconnected( void) = 0;
        
        virtual HRESULT STDMETHODCALLTYPE OnRemoteClientConnected( void) = 0;
        
        virtual HRESULT STDMETHODCALLTYPE OnAsyncError( 
            HRESULT errorCode) = 0;
        
    };
    
    
#else 	/* C style interface */

    typedef struct IMMRClientVtbl
    {
        BEGIN_INTERFACE
        
        DECLSPEC_XFGVIRT(IUnknown, QueryInterface)
        HRESULT ( STDMETHODCALLTYPE *QueryInterface )( 
            IMMRClient * This,
            /* [in] */ REFIID riid,
            /* [annotation][iid_is][out] */ 
            _COM_Outptr_  void **ppvObject);
        
        DECLSPEC_XFGVIRT(IUnknown, AddRef)
        ULONG ( STDMETHODCALLTYPE *AddRef )( 
            IMMRClient * This);
        
        DECLSPEC_XFGVIRT(IUnknown, Release)
        ULONG ( STDMETHODCALLTYPE *Release )( 
            IMMRClient * This);
        
        DECLSPEC_XFGVIRT(IMMRClient, OnSessionCreated)
        HRESULT ( STDMETHODCALLTYPE *OnSessionCreated )( 
            IMMRClient * This,
            /* [in] */ IMMRSession *session);
        
        DECLSPEC_XFGVIRT(IMMRClient, OnSessionCreationFailed)
        HRESULT ( STDMETHODCALLTYPE *OnSessionCreationFailed )( 
            IMMRClient * This,
            /* [in] */ HRESULT errorCode);
        
        DECLSPEC_XFGVIRT(IMMRClient, OnRemoteClientDisconnected)
        HRESULT ( STDMETHODCALLTYPE *OnRemoteClientDisconnected )( 
            IMMRClient * This);
        
        DECLSPEC_XFGVIRT(IMMRClient, OnRemoteClientConnected)
        HRESULT ( STDMETHODCALLTYPE *OnRemoteClientConnected )( 
            IMMRClient * This);
        
        DECLSPEC_XFGVIRT(IMMRClient, OnAsyncError)
        HRESULT ( STDMETHODCALLTYPE *OnAsyncError )( 
            IMMRClient * This,
            HRESULT errorCode);
        
        END_INTERFACE
    } IMMRClientVtbl;

    interface IMMRClient
    {
        CONST_VTBL struct IMMRClientVtbl *lpVtbl;
    };

    

#ifdef COBJMACROS


#define IMMRClient_QueryInterface(This,riid,ppvObject)	\
    ( (This)->lpVtbl -> QueryInterface(This,riid,ppvObject) ) 

#define IMMRClient_AddRef(This)	\
    ( (This)->lpVtbl -> AddRef(This) ) 

#define IMMRClient_Release(This)	\
    ( (This)->lpVtbl -> Release(This) ) 


#define IMMRClient_OnSessionCreated(This,session)	\
    ( (This)->lpVtbl -> OnSessionCreated(This,session) ) 

#define IMMRClient_OnSessionCreationFailed(This,errorCode)	\
    ( (This)->lpVtbl -> OnSessionCreationFailed(This,errorCode) ) 

#define IMMRClient_OnRemoteClientDisconnected(This)	\
    ( (This)->lpVtbl -> OnRemoteClientDisconnected(This) ) 

#define IMMRClient_OnRemoteClientConnected(This)	\
    ( (This)->lpVtbl -> OnRemoteClientConnected(This) ) 

#define IMMRClient_OnAsyncError(This,errorCode)	\
    ( (This)->lpVtbl -> OnAsyncError(This,errorCode) ) 

#endif /* COBJMACROS */


#endif 	/* C style interface */




#endif 	/* __IMMRClient_INTERFACE_DEFINED__ */


#ifndef __IMultimediaRedirector_INTERFACE_DEFINED__
#define __IMultimediaRedirector_INTERFACE_DEFINED__

/* interface IMultimediaRedirector */
/* [unique][uuid][object] */ 


EXTERN_C const IID IID_IMultimediaRedirector;

#if defined(__cplusplus) && !defined(CINTERFACE)
    
    MIDL_INTERFACE("9A2C3E74-1F5D-4E5E-8A3B-7C1D4F8B2C90")
    IMultimediaRedirector : public IUnknown
    {
    public:
        virtual HRESULT STDMETHODCALLTYPE BeginCreateRemoteSession( void) = 0;
        
        virtual HRESULT STDMETHODCALLTYPE BeginCaptureClientLogs( void) = 0;
        
        virtual HRESULT STDMETHODCALLTYPE EndCaptureClientLogs( void) = 0;
        
    };
    
    
#else 	/* C style interface */

    typedef struct IMultimediaRedirectorVtbl
    {
        BEGIN_INTERFACE
        
        DECLSPEC_XFGVIRT(IUnknown, QueryInterface)
        HRESULT ( STDMETHODCALLTYPE *QueryInterface )( 
            IMultimediaRedirector * This,
            /* [in] */ REFIID riid,
            /* [annotation][iid_is][out] */ 
            _COM_Outptr_  void **ppvObject);
        
        DECLSPEC_XFGVIRT(IUnknown, AddRef)
        ULONG ( STDMETHODCALLTYPE *AddRef )( 
            IMultimediaRedirector * This);
        
        DECLSPEC_XFGVIRT(IUnknown, Release)
        ULONG ( STDMETHODCALLTYPE *Release )( 
            IMultimediaRedirector * This);
        
        DECLSPEC_XFGVIRT(IMultimediaRedirector, BeginCreateRemoteSession)
        HRESULT ( STDMETHODCALLTYPE *BeginCreateRemoteSession )( 
            IMultimediaRedirector * This);
        
        DECLSPEC_XFGVIRT(IMultimediaRedirector, BeginCaptureClientLogs)
        HRESULT ( STDMETHODCALLTYPE *BeginCaptureClientLogs )( 
            IMultimediaRedirector * This);
        
        DECLSPEC_XFGVIRT(IMultimediaRedirector, EndCaptureClientLogs)
        HRESULT ( STDMETHODCALLTYPE *EndCaptureClientLogs )( 
            IMultimediaRedirector * This);
        
        END_INTERFACE
    } IMultimediaRedirectorVtbl;

    interface IMultimediaRedirector
    {
        CONST_VTBL struct IMultimediaRedirectorVtbl *lpVtbl;
    };

    

#ifdef COBJMACROS


#define IMultimediaRedirector_QueryInterface(This,riid,ppvObject)	\
    ( (This)->lpVtbl -> QueryInterface(This,riid,ppvObject) ) 

#define IMultimediaRedirector_AddRef(This)	\
    ( (This)->lpVtbl -> AddRef(This) ) 

#define IMultimediaRedirector_Release(This)	\
    ( (This)->lpVtbl -> Release(This) ) 


#define IMultimediaRedirector_BeginCreateRemoteSession(This)	\
    ( (This)->lpVtbl -> BeginCreateRemoteSession(This) ) 

#define IMultimediaRedirector_BeginCaptureClientLogs(This)	\
    ( (This)->lpVtbl -> BeginCaptureClientLogs(This) ) 

#define IMultimediaRedirector_EndCaptureClientLogs(This)	\
    ( (This)->lpVtbl -> EndCaptureClientLogs(This) ) 

#endif /* COBJMACROS */


#endif 	/* C style interface */




#endif 	/* __IMultimediaRedirector_INTERFACE_DEFINED__ */


#ifndef __IMultimediaRedirectorFactory_INTERFACE_DEFINED__
#define __IMultimediaRedirectorFactory_INTERFACE_DEFINED__

/* interface IMultimediaRedirectorFactory */
/* [unique][uuid][object] */ 


EXTERN_C const IID IID_IMultimediaRedirectorFactory;

#if defined(__cplusplus) && !defined(CINTERFACE)
    
    MIDL_INTERFACE("3E7A73B2-4BD0-4E66-BDBB-91EB5E84F4CF")
    IMultimediaRedirectorFactory : public IUnknown
    {
    public:
        virtual HRESULT STDMETHODCALLTYPE CreateMultimediaRedirector( 
            /* [in] */ IMMRClient *client,
            /* [out] */ IMultimediaRedirector **redirector) = 0;
        
    };
    
    
#else 	/* C style interface */

    typedef struct IMultimediaRedirectorFactoryVtbl
    {
        BEGIN_INTERFACE
        
        DECLSPEC_XFGVIRT(IUnknown, QueryInterface)
        HRESULT ( STDMETHODCALLTYPE *QueryInterface )( 
            IMultimediaRedirectorFactory * This,
            /* [in] */ REFIID riid,
            /* [annotation][iid_is][out] */ 
            _COM_Outptr_  void **ppvObject);
        
        DECLSPEC_XFGVIRT(IUnknown, AddRef)
        ULONG ( STDMETHODCALLTYPE *AddRef )( 
            IMultimediaRedirectorFactory * This);
        
        DECLSPEC_XFGVIRT(IUnknown, Release)
        ULONG ( STDMETHODCALLTYPE *Release )( 
            IMultimediaRedirectorFactory * This);
        
        DECLSPEC_XFGVIRT(IMultimediaRedirectorFactory, CreateMultimediaRedirector)
        HRESULT ( STDMETHODCALLTYPE *CreateMultimediaRedirector )( 
            IMultimediaRedirectorFactory * This,
            /* [in] */ IMMRClient *client,
            /* [out] */ IMultimediaRedirector **redirector);
        
        END_INTERFACE
    } IMultimediaRedirectorFactoryVtbl;

    interface IMultimediaRedirectorFactory
    {
        CONST_VTBL struct IMultimediaRedirectorFactoryVtbl *lpVtbl;
    };

    

#ifdef COBJMACROS


#define IMultimediaRedirectorFactory_QueryInterface(This,riid,ppvObject)	\
    ( (This)->lpVtbl -> QueryInterface(This,riid,ppvObject) ) 

#define IMultimediaRedirectorFactory_AddRef(This)	\
    ( (This)->lpVtbl -> AddRef(This) ) 

#define IMultimediaRedirectorFactory_Release(This)	\
    ( (This)->lpVtbl -> Release(This) ) 


#define IMultimediaRedirectorFactory_CreateMultimediaRedirector(This,client,redirector)	\
    ( (This)->lpVtbl -> CreateMultimediaRedirector(This,client,redirector) ) 

#endif /* COBJMACROS */


#endif 	/* C style interface */




#endif 	/* __IMultimediaRedirectorFactory_INTERFACE_DEFINED__ */


/* interface __MIDL_itf_Mmr_0000_0008 */
/* [local] */ 

DEFINE_GUID(CLSID_MultimediaRedirectorFactory, 0xcdbeb1db, 0xc3ad, 0x4918, 0xae, 0xd8, 0xbb, 0xd4, 0x7f, 0x75, 0x59, 0x10);


extern RPC_IF_HANDLE __MIDL_itf_Mmr_0000_0008_v0_0_c_ifspec;
extern RPC_IF_HANDLE __MIDL_itf_Mmr_0000_0008_v0_0_s_ifspec;

/* Additional Prototypes for ALL interfaces */

unsigned long             __RPC_USER  HWND_UserSize(     unsigned long *, unsigned long            , HWND * ); 
unsigned char * __RPC_USER  HWND_UserMarshal(  unsigned long *, unsigned char *, HWND * ); 
unsigned char * __RPC_USER  HWND_UserUnmarshal(unsigned long *, unsigned char *, HWND * ); 
void                      __RPC_USER  HWND_UserFree(     unsigned long *, HWND * ); 

unsigned long             __RPC_USER  HWND_UserSize64(     unsigned long *, unsigned long            , HWND * ); 
unsigned char * __RPC_USER  HWND_UserMarshal64(  unsigned long *, unsigned char *, HWND * ); 
unsigned char * __RPC_USER  HWND_UserUnmarshal64(unsigned long *, unsigned char *, HWND * ); 
void                      __RPC_USER  HWND_UserFree64(     unsigned long *, HWND * ); 

/* end of Additional Prototypes */

#ifdef __cplusplus
}
#endif

#endif


