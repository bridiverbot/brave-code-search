import {defaultConfig, webComponentMissingDepsConfig, noChromeSendConfig, noExplicitAnyConfig,} from '../../../../ui/webui/resources/tools/eslint/eslint_ts.config_base.js';

export default [
  ...defaultConfig,
  webComponentMissingDepsConfig, noChromeSendConfig, noExplicitAnyConfig,
  {
    languageOptions: {
      parserOptions: {
        'project': ['gen/chrome/browser/resources/pdf/tsconfig_build_ts.json'],
      },
    },
  },
];