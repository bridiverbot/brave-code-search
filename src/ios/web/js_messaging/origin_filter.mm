// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

#import "ios/web/public/js_messaging/origin_filter.h"

#import "ios/public/provider/web/cobalt_api.h"

namespace web {

NSArray<NSString*>* GetOriginList(web::OriginFilter filter) {
  switch (filter) {
    case web::OriginFilter::kPublic:
      return nil;
    case web::OriginFilter::kValidTestOriginForTesting:
      return @[ @"https://test.test" ];
    case web::OriginFilter::kCobalt:
      return web::provider::GetCobaltOriginList();
    case web::OriginFilter::kGoogleSearch:
      return @[ @"https://www.google.com" ];
    case web::OriginFilter::kYouTube:
      return @[
        @"https://youtube.com",
        @"https://www.youtube.com",
        @"https://m.youtube.com",
      ];
    case web::OriginFilter::kBraveSearch:
      return @[
        @"https://safesearch.brave.com",
        @"https://safesearch.brave.software",
        @"https://safesearch.bravesoftware.com",
        @"https://search-dev-local.brave.com",
        @"https://search.brave.com",
        @"https://search.brave.software",
        @"https://search.bravesoftware.com",
      ];
    case web::OriginFilter::kBraveTalk:
      return @[
        @"https://talk.brave.com",
        @"https://talk.bravesoftware.com",
        @"https://talk.brave.software",
        @"https://dev2.talk.brave.software",
        @"https://dev3.talk.brave.software",
      ];
    case web::OriginFilter::kBraveAccount:
      return @[
        @"https://account.brave.com",
        @"https://account.bravesoftware.com",
        @"https://account.brave.software",
      ];
  }
}

}  // namespace web
