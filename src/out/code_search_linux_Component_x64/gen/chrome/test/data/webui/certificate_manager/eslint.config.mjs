import {defaultConfig, noExplicitAnyConfig,} from '../../../../../ui/webui/resources/tools/eslint/eslint_ts.config_base.js';

export default [
  ...defaultConfig,
  noExplicitAnyConfig,
  {
    languageOptions: {
      parserOptions: {
        'project': ['gen/chrome/test/data/webui/certificate_manager/tsconfig_build_ts.json'],
      },
    },
  },
];