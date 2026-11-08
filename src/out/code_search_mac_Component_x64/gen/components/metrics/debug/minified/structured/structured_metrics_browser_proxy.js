// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import{sendWithPromise}from"chrome://resources/js/cr.js";export class StructuredMetricsBrowserProxyImpl{fetchStructuredMetricsEvents(){return sendWithPromise("fetchStructuredMetricsEvents")}fetchStructuredMetricsSummary(){return sendWithPromise("fetchStructuredMetricsSummary")}static getInstance(){return instance||(instance=new StructuredMetricsBrowserProxyImpl)}}let instance=null;