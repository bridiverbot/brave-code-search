import {defaultConfig, noChromeSendConfig, noExplicitAnyConfig,} from '../../../../ui/webui/resources/tools/eslint/eslint_ts.config_base.js';

export default [
  ...defaultConfig,
  noChromeSendConfig, noExplicitAnyConfig,
  {
    languageOptions: {
      parserOptions: {
        'project': ['gen/content/browser/resources/traces_internals/tsconfig_build_ts.json'],
      },
    },
  },
];