import {defaultConfig, noChromeSendConfig, noExplicitAnyConfig,} from '../../../ui/webui/resources/tools/eslint/eslint_ts.config_base.js';

export default [
  ...defaultConfig,
  noChromeSendConfig, noExplicitAnyConfig,
  {
    languageOptions: {
      parserOptions: {
        'project': ['gen/components/translate/translate_internals/tsconfig_build_ts.json'],
      },
    },
  },
];