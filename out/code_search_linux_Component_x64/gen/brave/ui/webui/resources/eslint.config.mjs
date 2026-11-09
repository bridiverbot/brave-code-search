import {defaultConfig, noChromeSendConfig,} from '../../../../ui/webui/resources/tools/eslint/eslint_ts.config_base.js';

export default [
  ...defaultConfig,
  noChromeSendConfig,
  {
    languageOptions: {
      parserOptions: {
        'project': ['gen/brave/ui/webui/resources/tsconfig_build_ts.json'],
      },
    },
  },
];