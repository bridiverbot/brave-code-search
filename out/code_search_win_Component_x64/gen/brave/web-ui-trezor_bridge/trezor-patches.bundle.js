/******/ (() => { // webpackBootstrap
/*!*************************************************************!*\
  !*** ./components/brave_wallet_ui/trezor/trezor_patches.ts ***!
  \*************************************************************/
// Copyright (c) 2025 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.
// Trezor popup page is opened with window.open(url) which doesn't
// work(opened window loses opener) from chrome-untrusted:// pages
// (namely chrome-untrusted://trezor-bridge). We need to revert to legacy
// behavior which works: open blank page then navigate.
// So effectively we rollback this change:
// https://github.com/trezor/trezor-suite/pull/10975/changes#diff-38dd02260cff108b8329d6f3adbf8717b8e8737222de87a92c048f8bbf0bf159R256-R258
// by overwriting
// window.open(url, ...args)
// with
// window.open('', ...args).location.href = url
window.open = new Proxy(window.open, {
    apply(target, thisArg, [url, ...rest]) {
        const urlObj = URL.parse(url);
        if (urlObj && urlObj.origin === 'https://connect.trezor.io') {
            const result = Reflect.apply(target, thisArg, ['', ...rest]);
            if (result && url) {
                result.location.href = url;
            }
            return result;
        }
        // Use the default window.open behavior for non-matching URLs
        return Reflect.apply(target, thisArg, [url, ...rest]);
    },
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlem9yLXBhdGNoZXMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSw2REFBNkQ7QUFDN0Qsc0VBQXNFO0FBQ3RFLDRFQUE0RTtBQUM1RSxzREFBc0Q7QUFFdEQsa0VBQWtFO0FBQ2xFLGtFQUFrRTtBQUNsRSx5RUFBeUU7QUFDekUsdURBQXVEO0FBQ3ZELDBDQUEwQztBQUMxQywySUFBMkk7QUFDM0ksaUJBQWlCO0FBQ2pCLDRCQUE0QjtBQUM1QixPQUFPO0FBQ1AsK0NBQStDO0FBQy9DLE1BQU0sQ0FBQyxJQUFJLEdBQUcsSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRTtJQUNuQyxLQUFLLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQztRQUNuQyxNQUFNLE1BQU0sR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztRQUM3QixJQUFJLE1BQU0sSUFBSSxNQUFNLENBQUMsTUFBTSxLQUFLLDJCQUEyQixFQUFFLENBQUM7WUFDNUQsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7WUFDNUQsSUFBSSxNQUFNLElBQUksR0FBRyxFQUFFLENBQUM7Z0JBQ2xCLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLEdBQUc7WUFDNUIsQ0FBQztZQUNELE9BQU8sTUFBTTtRQUNmLENBQUM7UUFFRCw2REFBNkQ7UUFDN0QsT0FBTyxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQztJQUN2RCxDQUFDO0NBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JyYXZlLWNvcmUvLi9jb21wb25lbnRzL2JyYXZlX3dhbGxldF91aS90cmV6b3IvdHJlem9yX3BhdGNoZXMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDI1IFRoZSBCcmF2ZSBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuLy8gTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBmaWxlLFxuLy8gWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHBzOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uXG5cbi8vIFRyZXpvciBwb3B1cCBwYWdlIGlzIG9wZW5lZCB3aXRoIHdpbmRvdy5vcGVuKHVybCkgd2hpY2ggZG9lc24ndFxuLy8gd29yayhvcGVuZWQgd2luZG93IGxvc2VzIG9wZW5lcikgZnJvbSBjaHJvbWUtdW50cnVzdGVkOi8vIHBhZ2VzXG4vLyAobmFtZWx5IGNocm9tZS11bnRydXN0ZWQ6Ly90cmV6b3ItYnJpZGdlKS4gV2UgbmVlZCB0byByZXZlcnQgdG8gbGVnYWN5XG4vLyBiZWhhdmlvciB3aGljaCB3b3Jrczogb3BlbiBibGFuayBwYWdlIHRoZW4gbmF2aWdhdGUuXG4vLyBTbyBlZmZlY3RpdmVseSB3ZSByb2xsYmFjayB0aGlzIGNoYW5nZTpcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90cmV6b3IvdHJlem9yLXN1aXRlL3B1bGwvMTA5NzUvY2hhbmdlcyNkaWZmLTM4ZGQwMjI2MGNmZjEwOGI4MzI5ZDZmM2FkYmY4NzE3YjhlODczNzIyMmRlODdhOTJjMDQ4ZjhiYmYwYmYxNTlSMjU2LVIyNThcbi8vIGJ5IG92ZXJ3cml0aW5nXG4vLyB3aW5kb3cub3Blbih1cmwsIC4uLmFyZ3MpXG4vLyB3aXRoXG4vLyB3aW5kb3cub3BlbignJywgLi4uYXJncykubG9jYXRpb24uaHJlZiA9IHVybFxud2luZG93Lm9wZW4gPSBuZXcgUHJveHkod2luZG93Lm9wZW4sIHtcbiAgYXBwbHkodGFyZ2V0LCB0aGlzQXJnLCBbdXJsLCAuLi5yZXN0XSkge1xuICAgIGNvbnN0IHVybE9iaiA9IFVSTC5wYXJzZSh1cmwpXG4gICAgaWYgKHVybE9iaiAmJiB1cmxPYmoub3JpZ2luID09PSAnaHR0cHM6Ly9jb25uZWN0LnRyZXpvci5pbycpIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IFJlZmxlY3QuYXBwbHkodGFyZ2V0LCB0aGlzQXJnLCBbJycsIC4uLnJlc3RdKVxuICAgICAgaWYgKHJlc3VsdCAmJiB1cmwpIHtcbiAgICAgICAgcmVzdWx0LmxvY2F0aW9uLmhyZWYgPSB1cmxcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG5cbiAgICAvLyBVc2UgdGhlIGRlZmF1bHQgd2luZG93Lm9wZW4gYmVoYXZpb3IgZm9yIG5vbi1tYXRjaGluZyBVUkxzXG4gICAgcmV0dXJuIFJlZmxlY3QuYXBwbHkodGFyZ2V0LCB0aGlzQXJnLCBbdXJsLCAuLi5yZXN0XSlcbiAgfSxcbn0pXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=