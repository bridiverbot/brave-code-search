import {defaultConfig, } from '../../../../../../ui/webui/resources/tools/eslint/eslint_ts.config_base.js';

export default [
  ...defaultConfig,
  
  {
    languageOptions: {
      parserOptions: {
        'project': ['gen/chrome/test/data/webui/cr_components/searchbox/tsconfig_build_ts.json'],
      },
    },
  },
];