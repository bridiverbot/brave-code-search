import {defaultConfig, noExplicitAnyConfig,} from '../../../../../ui/webui/resources/tools/eslint/eslint_ts.config_base.js';

export default [
  ...defaultConfig,
  noExplicitAnyConfig,
  {
    languageOptions: {
      parserOptions: {
        'project': ['gen/chrome/test/data/webui/updater/tsconfig_build_ts.json'],
      },
    },
  },
];