import {defaultConfig, } from '../../../../../ui/webui/resources/tools/eslint/eslint_ts.config_base.js';

export default [
  ...defaultConfig,
  
  {
    languageOptions: {
      parserOptions: {
        'project': ['gen/chrome/test/data/webui/webui_toolbar/tsconfig_build_ts.json'],
      },
    },
  },
];