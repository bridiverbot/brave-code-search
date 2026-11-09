import {defaultConfig, noExplicitAnyConfig,} from '../tools/eslint/eslint_ts.config_base.js';

export default [
  ...defaultConfig,
  noExplicitAnyConfig,
  {
    languageOptions: {
      parserOptions: {
        'project': ['gen/ui/webui/resources/cr_elements/tsconfig_build_ts.json'],
      },
    },
  },
];