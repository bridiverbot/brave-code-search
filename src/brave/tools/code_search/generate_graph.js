// Copyright (c) 2026 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.

import '../../build/commands/lib/checkEnvironment.js'

import { program } from 'commander'
import { build } from '../../build/commands/lib/build.ts'
import * as buildOptions from '../../build/commands/lib/buildOptions.ts'
import util from '../../build/commands/lib/util.ts'

// Reuse Brave's configuration and preparation without invoking the compiler.
program
  .apply(buildOptions.supportBuildConfigArg)
  .apply(buildOptions.supportBuildDir)
  .apply(buildOptions.supportTargetConfig)
  .apply(buildOptions.supportGnArgs)
  .apply(buildOptions.supportGnGenOptions)
  .apply(buildOptions.supportQuiet)
  .action(async (buildConfig, options) => {
    await build(buildConfig, { ...options, prepare_only: true })
    await util.generateNinjaFiles()
  })
  .parseAsync()
