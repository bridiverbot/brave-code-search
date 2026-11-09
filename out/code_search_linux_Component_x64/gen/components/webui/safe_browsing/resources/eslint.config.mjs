import {defaultConfig, noExplicitAnyConfig,} from '../../../../ui/webui/resources/tools/eslint/eslint_ts.config_base.js';

export default [
  ...defaultConfig,
  noExplicitAnyConfig,
  {
    languageOptions: {
      parserOptions: {
        'project': ['gen/components/webui/safe_browsing/resources/tsconfig_build_ts.json'],
      },
    },
  },
];