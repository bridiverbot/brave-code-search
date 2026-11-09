import {defaultConfig, noChromeSendConfig,} from '../../../../ui/webui/resources/tools/eslint/eslint_ts.config_base.js';

export default [
  ...defaultConfig,
  noChromeSendConfig,
  {
    languageOptions: {
      parserOptions: {
        'project': ['gen/chrome/browser/resources/contextual_tasks/tsconfig_build_ts.json'],
      },
    },
  },
];