import {defaultConfig, noChromeSendConfig, noExplicitAnyConfig,} from '../../tools/eslint/eslint_ts.config_base.js';

export default [
  ...defaultConfig,
  noChromeSendConfig, noExplicitAnyConfig,
  {
    languageOptions: {
      parserOptions: {
        'project': ['clang_x64/gen/ui/webui/resources/cr_components/search/tsconfig_build_ts.json'],
      },
    },
  },
];