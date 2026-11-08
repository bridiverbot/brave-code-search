import {defaultConfig, } from '../../../../../ui/webui/resources/tools/eslint/eslint_ts.config_base.js';

export default [
  ...defaultConfig,
  
  {
    languageOptions: {
      parserOptions: {
        'project': ['gen/chrome/test/data/webui/contextual_tasks/tsconfig_build_ts.json'],
      },
    },
  },
];