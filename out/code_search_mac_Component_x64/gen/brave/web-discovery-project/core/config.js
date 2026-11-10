"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = exports.default = {
  "specific": "node",
  "platform": "webextension",
  "brocfile": "Brocfile.brave.js",
  "baseURL": "/modules/",
  "pack": "pnpm pack",
  "sourceMaps": false,
  "format": "common",
  "settings": {
    "ENDPOINT_HPNV2_ANONYMOUS": "https://collector.wdp.brave.com",
    "ENDPOINT_HPNV2_DIRECT": "https://collector.wdp.brave.com",
    "ENDPOINT_PATTERNS": "https://patterns.wdp.brave.com/patterns-v2.gz",
    "ENDPOINT_SAFE_QUORUM_PROVIDER": "https://quorum.wdp.brave.com/config",
    "ENDPOINT_STAR": "https://star.wdp.brave.com/",
    "FETCHER_GATEWAY": "https://fg.search.brave.com",
    "WDP_CHANNEL": "brave",
    "WDP_PATTERNS_SIGNING": true,
    "WDP_ENV": "production",
    "ALLOWED_COUNTRY_CODES": ["de", "at", "ch", "es", "us", "fr", "nl", "gb", "it", "be", "se", "dk", "fi", "cz", "gr", "hu", "ro", "no", "ca", "au", "ru", "ua", "in", "pl", "jp", "br", "mx", "cn", "ar"]
  },
  "default_prefs": {
    "modules.web-discovery-project.enabled": true,
    "modules.hpnv2.enabled": true,
    "modules.fetcher.enabled": false
  },
  "bundles": ["core/content-script.bundle.js", "hpnv2/worker.wasm.bundle.js", "hpnv2/worker.asmjs.bundle.js", "webextension-specific/app.bundle.js"],
  "modules": ["core", "web-discovery-project", "hpnv2", "fetcher", "webrequest-pipeline", "webextension-specific"],
  "environment": "prod",
  "isBeta": false,
  "EXTENSION_VERSION": "1.1.79",
  "VERSION": "1.1.79"
};