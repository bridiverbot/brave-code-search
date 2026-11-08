import {defaultConfig, noChromeSendConfig, noExplicitAnyConfig,} from '../../tools/eslint/eslint_ts.config_base.js';

export default [
  ...defaultConfig,
  noChromeSendConfig, noExplicitAnyConfig,
  {
    languageOptions: {
      parserOptions: {
        'project': ['gen/ui/webui/resources/cr_components/composebox/tsconfig_build_ts.json'],
      },
    },
  },
];