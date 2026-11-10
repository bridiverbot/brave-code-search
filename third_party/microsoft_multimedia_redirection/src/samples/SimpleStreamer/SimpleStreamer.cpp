// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
#ifndef UNICODE
#define UNICODE
#endif
#ifndef _UNICODE
#define _UNICODE
#endif

#include <windows.h>
#include <commctrl.h>

#include <algorithm>
#include <chrono>
#include <cstdint>
#include <memory>
#include <vector>

#include <initguid.h>
#include <mfapi.h>

#include "Mmr_h.h"
#include "Player.h"

void TraceFailure(const wchar_t* context, HRESULT hr)
{
    wchar_t buffer[256] = {};
    swprintf_s(buffer, L"[SimpleStreamer] %s failed: 0x%08X\n", context, static_cast<unsigned int>(hr));
    OutputDebugStringW(buffer);
}

namespace
{
constexpr wchar_t kMainWindowClassName[] = L"SimpleStreamer.MainWindow";
constexpr wchar_t kVideoHostClassName[] = L"SimpleStreamer.VideoHost";

constexpr UINT kUiRefreshMessage = WM_APP + 1;

constexpr int kControlPadding = 10;
constexpr int kControlHeight = 30;
constexpr int kPlayPauseButtonWidth = 100;

constexpr int kPlayPauseButtonId = 1001;
constexpr int kSeekBarId = 1002;

class SimpleStreamerApp
    : public PlayerEvents
{
public:
    ~SimpleStreamerApp()
    {
        Shutdown();
    }

    HRESULT Initialize(HINSTANCE instance, int showCommand)
    {
        hInstance_ = instance;

        INITCOMMONCONTROLSEX controls = {};
        controls.dwSize = sizeof(controls);
        controls.dwICC = ICC_BAR_CLASSES;
        if (!InitCommonControlsEx(&controls))
        {
            return HRESULT_FROM_WIN32(GetLastError());
        }

        HRESULT hr = CoInitializeEx(nullptr, COINIT_MULTITHREADED);
        if (FAILED(hr))
        {
            return hr;
        }
        comInitialized_ = true;

        hr = MFStartup(MF_VERSION);
        if (FAILED(hr))
        {
            return hr;
        }
        mediaFoundationStarted_ = true;

        hr = RegisterWindowClasses();
        if (FAILED(hr))
        {
            return hr;
        }

        hr = player_.Initialize(this);
        if (FAILED(hr))
        {
            return hr;
        }

        hr = CreateMainWindow(showCommand);
        if (FAILED(hr))
        {
            return hr;
        }

        UpdateVideoRect();

        EnableWindow(playPauseButton_, TRUE);
        EnableWindow(seekBar_, TRUE);
        UpdatePlayPauseButtonText();

        return S_OK;
    }

    int Run()
    {
        MSG message = {};
        while (GetMessageW(&message, nullptr, 0, 0) > 0)
        {
            TranslateMessage(&message);
            DispatchMessageW(&message);
        }
        return static_cast<int>(message.wParam);
    }

    void OnTimeUpdate(LONGLONG) override
    {
        PostMessageW(mainWindow_, kUiRefreshMessage, 0, 0);
    }

private:
    static LRESULT CALLBACK MainWindowProc(HWND hwnd, UINT message, WPARAM wParam, LPARAM lParam)
    {
        SimpleStreamerApp* app = reinterpret_cast<SimpleStreamerApp*>(GetWindowLongPtrW(hwnd, GWLP_USERDATA));
        if (message == WM_NCCREATE)
        {
            CREATESTRUCTW* create = reinterpret_cast<CREATESTRUCTW*>(lParam);
            app = reinterpret_cast<SimpleStreamerApp*>(create->lpCreateParams);
            SetWindowLongPtrW(hwnd, GWLP_USERDATA, reinterpret_cast<LONG_PTR>(app));
        }

        if (app == nullptr)
        {
            return DefWindowProcW(hwnd, message, wParam, lParam);
        }

        return app->HandleMainWindowMessage(hwnd, message, wParam, lParam);
    }

    static LRESULT CALLBACK VideoHostWindowProc(HWND hwnd, UINT message, WPARAM wParam, LPARAM lParam)
    {
        SimpleStreamerApp* app = reinterpret_cast<SimpleStreamerApp*>(GetWindowLongPtrW(hwnd, GWLP_USERDATA));
        if (message == WM_NCCREATE)
        {
            CREATESTRUCTW* create = reinterpret_cast<CREATESTRUCTW*>(lParam);
            app = reinterpret_cast<SimpleStreamerApp*>(create->lpCreateParams);
            SetWindowLongPtrW(hwnd, GWLP_USERDATA, reinterpret_cast<LONG_PTR>(app));
        }

        if (app == nullptr)
        {
            return DefWindowProcW(hwnd, message, wParam, lParam);
        }

        switch (message)
        {
        case WM_ERASEBKGND:
            return 1;
        case WM_SIZE:
            app->UpdateVideoRect();
            return 0;
        case WM_PAINT:
            app->PaintVideoReplacementImage(hwnd);
            return 0;
        default:
            return DefWindowProcW(hwnd, message, wParam, lParam);
        }
    }

    LRESULT HandleMainWindowMessage(HWND hwnd, UINT message, WPARAM wParam, LPARAM lParam)
    {
        switch (message)
        {
        case WM_SIZE:
            LayoutControls();
            UpdateVideoRect();
            return 0;

        case WM_COMMAND:
            if (LOWORD(wParam) == kPlayPauseButtonId && HIWORD(wParam) == BN_CLICKED)
            {
                TogglePlayPause();
                return 0;
            }
            break;

        case WM_HSCROLL:
            if (reinterpret_cast<HWND>(lParam) == seekBar_)
            {
                HandleSeekBarScroll(LOWORD(wParam));
                return 0;
            }
            break;

        case kUiRefreshMessage:
            SyncSeekBarToCurrentPosition();
            return 0;

        case WM_DESTROY:
            PostQuitMessage(0);
            return 0;
        }

        return DefWindowProcW(hwnd, message, wParam, lParam);
    }

    HRESULT RegisterWindowClasses()
    {
        WNDCLASSW mainWindowClass = {};
        mainWindowClass.lpfnWndProc = &SimpleStreamerApp::MainWindowProc;
        mainWindowClass.hInstance = hInstance_;
        mainWindowClass.lpszClassName = kMainWindowClassName;
        mainWindowClass.hCursor = LoadCursorW(nullptr, IDC_ARROW);
        mainWindowClass.hbrBackground = reinterpret_cast<HBRUSH>(COLOR_WINDOW + 1);

        if (RegisterClassW(&mainWindowClass) == 0)
        {
            return HRESULT_FROM_WIN32(GetLastError());
        }

        WNDCLASSW videoHostClass = {};
        videoHostClass.lpfnWndProc = &SimpleStreamerApp::VideoHostWindowProc;
        videoHostClass.hInstance = hInstance_;
        videoHostClass.lpszClassName = kVideoHostClassName;
        videoHostClass.hCursor = LoadCursorW(nullptr, IDC_ARROW);
        videoHostClass.hbrBackground = reinterpret_cast<HBRUSH>(COLOR_WINDOW + 1);

        if (RegisterClassW(&videoHostClass) == 0)
        {
            return HRESULT_FROM_WIN32(GetLastError());
        }

        return S_OK;
    }

    HRESULT CreateMainWindow(int showCommand)
    {
        mainWindow_ = CreateWindowExW(
            0,
            kMainWindowClassName,
            L"SimpleStreamer",
            WS_OVERLAPPEDWINDOW,
            CW_USEDEFAULT,
            CW_USEDEFAULT,
            920,
            620,
            nullptr,
            nullptr,
            hInstance_,
            this);
        if (mainWindow_ == nullptr)
        {
            return HRESULT_FROM_WIN32(GetLastError());
        }

        playPauseButton_ = CreateWindowExW(
            0,
            L"BUTTON",
            L"Play",
            WS_CHILD | WS_VISIBLE | BS_PUSHBUTTON,
            0,
            0,
            0,
            0,
            mainWindow_,
            reinterpret_cast<HMENU>(static_cast<INT_PTR>(kPlayPauseButtonId)),
            hInstance_,
            nullptr);
        if (playPauseButton_ == nullptr)
        {
            return HRESULT_FROM_WIN32(GetLastError());
        }

        seekBar_ = CreateWindowExW(
            0,
            TRACKBAR_CLASSW,
            L"",
            WS_CHILD | WS_VISIBLE | TBS_AUTOTICKS,
            0,
            0,
            0,
            0,
            mainWindow_,
            reinterpret_cast<HMENU>(static_cast<INT_PTR>(kSeekBarId)),
            hInstance_,
            nullptr);
        if (seekBar_ == nullptr)
        {
            return HRESULT_FROM_WIN32(GetLastError());
        }

        videoHostWindow_ = CreateWindowExW(
            WS_EX_CLIENTEDGE,
            kVideoHostClassName,
            L"",
            WS_CHILD | WS_VISIBLE | WS_CLIPCHILDREN | WS_CLIPSIBLINGS,
            0,
            0,
            0,
            0,
            mainWindow_,
            nullptr,
            hInstance_,
            this);
        if (videoHostWindow_ == nullptr)
        {
            return HRESULT_FROM_WIN32(GetLastError());
        }

        SendMessageW(seekBar_, TBM_SETRANGEMIN, FALSE, 0);
        SendMessageW(seekBar_, TBM_SETRANGEMAX, TRUE, kTimelineDurationMs);
        SendMessageW(seekBar_, TBM_SETTICFREQ, 1000, 0);
        SendMessageW(seekBar_, TBM_SETPAGESIZE, 0, 1000);
        SendMessageW(seekBar_, TBM_SETPOS, TRUE, 0);

        EnableWindow(playPauseButton_, FALSE);
        EnableWindow(seekBar_, FALSE);

        LayoutControls();

        ShowWindow(mainWindow_, showCommand);
        UpdateWindow(mainWindow_);
        return S_OK;
    }


    void Shutdown()
    {
        player_.Shutdown();

        videoReplacementImage_.clear();

        if (mediaFoundationStarted_)
        {
            MFShutdown();
            mediaFoundationStarted_ = false;
        }

        if (comInitialized_)
        {
            CoUninitialize();
            comInitialized_ = false;
        }
    }

    void LayoutControls()
    {
        RECT clientRect = {};
        GetClientRect(mainWindow_, &clientRect);

        const int clientWidth = clientRect.right - clientRect.left;
        const int clientHeight = clientRect.bottom - clientRect.top;

        const int controlsTop = clientHeight - kControlPadding - kControlHeight;
        const int seekLeft = kControlPadding + kPlayPauseButtonWidth + kControlPadding;
        const int seekWidth = std::max(50, clientWidth - seekLeft - kControlPadding);

        const int hostLeft = kControlPadding;
        const int hostTop = kControlPadding;
        const int hostWidth = std::max(50, clientWidth - (2 * kControlPadding));
        const int hostHeight = std::max(50, controlsTop - hostTop - kControlPadding);

        MoveWindow(videoHostWindow_, hostLeft, hostTop, hostWidth, hostHeight, TRUE);
        MoveWindow(playPauseButton_, kControlPadding, controlsTop, kPlayPauseButtonWidth, kControlHeight, TRUE);
        MoveWindow(seekBar_, seekLeft, controlsTop, seekWidth, kControlHeight, TRUE);
    }

    void UpdatePlayPauseButtonText()
    {
        SetWindowTextW(playPauseButton_, player_.IsPlaying() ? L"Pause" : L"Play");
    }

    void TogglePlayPause()
    {
        HRESULT hr = E_UNEXPECTED;
        bool isPlaying = false;
        {
            if (player_.IsPlaying())
            {
                hr = player_.Pause();
            }
            else
            {
                hr = player_.Play();
            }

            isPlaying = player_.IsPlaying();
        }

        if (FAILED(hr))
        {
            TraceFailure(L"TogglePlayPause", hr);
            return;
        }

        SetWindowTextW(playPauseButton_, isPlaying ? L"Pause" : L"Play");
    }

    void HandleSeekBarScroll(WORD scrollCode)
    {
        switch (scrollCode)
        {
        case TB_THUMBTRACK:
            userDraggingSeekBar_ = true;
            return;
        case TB_ENDTRACK:
        case TB_THUMBPOSITION:
            userDraggingSeekBar_ = false;
            break;
        default:
            break;
        }

        const HRESULT hr = ApplySeekBarPosition();
        if (FAILED(hr))
        {
            TraceFailure(L"SeekTo", hr);
        }
    }

    HRESULT ApplySeekBarPosition()
    {
        if (seekBar_ == nullptr)
        {
            return E_UNEXPECTED;
        }

        // Trackbar ticks are in milliseconds.  Need to convert to hns
        // for the player.
        const LRESULT pos = SendMessageW(seekBar_, TBM_GETPOS, 0, 0);
        const LONGLONG target = static_cast<LONGLONG>(pos) * 10'000LL;
        return SeekToTimestamp(target);
    }

    HRESULT SeekToTimestamp(LONGLONG timestamp100ns)
    {
        const LONGLONG clampedTarget = std::clamp<LONGLONG>(timestamp100ns, 0, kTimelineDuration100ns);

        HRESULT hr = player_.Seek(clampedTarget);
        if (FAILED(hr))
        {
            return hr;
        }

        if (!userDraggingSeekBar_)
        {
            SyncSeekBarToCurrentPosition();
        }
        InvalidateRect(videoHostWindow_, nullptr, FALSE);
        return S_OK;
    }

    void SyncSeekBarToCurrentPosition()
    {
        if (seekBar_ == nullptr || userDraggingSeekBar_)
        {
            return;
        }

        LONGLONG playbackTime100ns = player_.GetCurrentTime();

        const LONGLONG clamped = std::clamp<LONGLONG>(playbackTime100ns, 0, kTimelineDuration100ns);
        const LONG milliseconds = static_cast<LONG>(clamped / 10'000LL);
        SendMessageW(seekBar_, TBM_SETPOS, TRUE, milliseconds);
    }

    void UpdateVideoRect()
    {
        RECT hostRect = {};
        if (!GetClientRect(videoHostWindow_, &hostRect))
        {
            return;
        }

        const LONG width = hostRect.right - hostRect.left;
        const LONG height = hostRect.bottom - hostRect.top;
        if (width <= 0 || height <= 0)
        {
            return;
        }

        HRESULT hr = player_.SetVideoRect(
            videoHostWindow_,
            0,
            0,
            static_cast<UINT32>(width),
            static_cast<UINT32>(height));
        if (FAILED(hr))
        {
            TraceFailure(L"IMMRStream::SetVideoRect", hr);
        }
    }

    void PaintVideoReplacementImage(HWND hostWindow)
    {
        PAINTSTRUCT paint = {};
        HDC dc = BeginPaint(hostWindow, &paint);
        if (dc == nullptr)
        {
            return;
        }

        RECT clientRect = {};
        GetClientRect(hostWindow, &clientRect);
        const LONG width = clientRect.right - clientRect.left;
        const LONG height = clientRect.bottom - clientRect.top;

        FillRect(dc, &clientRect, reinterpret_cast<HBRUSH>(COLOR_WINDOW + 1));

        if (width > 0 && height > 0)
        {
            HRESULT hr = S_OK;
            if (width != replacementImageWidth_ || height != replacementImageHeight_)
            {
                const UINT32 stride = static_cast<UINT32>(width * sizeof(RGBQUAD));
                const size_t imageBytes = static_cast<size_t>(stride) * static_cast<size_t>(height);
                videoReplacementImage_.assign(imageBytes, 0);

                hr = player_.GetVideoReplacementImage(
                    videoReplacementImage_.data(),
                    static_cast<UINT32>(width),
                    static_cast<UINT32>(height),
                    stride);
                if (SUCCEEDED(hr))
                {
                    replacementImageWidth_ = width;
                    replacementImageHeight_ = height;
                }
            }

            if (SUCCEEDED(hr))
            {
                BITMAPINFO bitmapInfo = {};
                bitmapInfo.bmiHeader.biSize = sizeof(bitmapInfo.bmiHeader);
                bitmapInfo.bmiHeader.biWidth = width;
                bitmapInfo.bmiHeader.biHeight = -height;
                bitmapInfo.bmiHeader.biPlanes = 1;
                bitmapInfo.bmiHeader.biBitCount = 32;
                bitmapInfo.bmiHeader.biCompression = BI_RGB;

                StretchDIBits(
                    dc,
                    0,
                    0,
                    width,
                    height,
                    0,
                    0,
                    width,
                    height,
                    videoReplacementImage_.data(),
                    &bitmapInfo,
                    DIB_RGB_COLORS,
                    SRCCOPY);
            }
        }

        EndPaint(hostWindow, &paint);
    }

    HINSTANCE hInstance_ = nullptr;
    HWND mainWindow_ = nullptr;
    HWND videoHostWindow_ = nullptr;
    HWND playPauseButton_ = nullptr;
    HWND seekBar_ = nullptr;

    bool comInitialized_ = false;
    bool mediaFoundationStarted_ = false;
    
    bool userDraggingSeekBar_ = false;

    Player player_;
    
    std::vector<BYTE> videoReplacementImage_;
    LONG replacementImageWidth_ = 0;
    LONG replacementImageHeight_ = 0;
};
} // namespace

int WINAPI wWinMain(HINSTANCE instance, HINSTANCE, PWSTR, int showCommand)
{
    SimpleStreamerApp app;
    const HRESULT hr = app.Initialize(instance, showCommand);
    if (FAILED(hr))
    {
        TraceFailure(L"SimpleStreamer initialization", hr);
        wchar_t message[256] = {};
        swprintf_s(
            message,
            L"SimpleStreamer failed to initialize.\nHRESULT: 0x%08X\n\n"
            L"This sample requires Media Foundation encoders and the MMR runtime components.",
            static_cast<unsigned int>(hr));
        MessageBoxW(nullptr, message, L"SimpleStreamer", MB_ICONERROR | MB_OK);
        return static_cast<int>(hr);
    }

    return app.Run();
}
