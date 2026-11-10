"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.testPageSources = void 0;
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

const testPageSources = exports.testPageSources = {
  "pages": [{
    "helloworld.com/hello": `<html>
                <head>
                    <title>Hello</title>
                </head>
                <body>
                    <p>Hello World, hello page.</p>
                </body>
            </html>`
  }, {
    "helloworld.com/about": `<html>
                <head>
                    <title>About</title>
                </head>
                <body>
                    <p>Hello World, about page.</p>
                </body>
            </html>`
  }]
};