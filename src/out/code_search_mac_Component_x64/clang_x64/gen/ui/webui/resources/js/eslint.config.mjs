import {defaultConfig, } from '../tools/eslint/eslint_ts.config_base.js';

export default [
  ...defaultConfig,
  
  {
    languageOptions: {
      parserOptions: {
        'project': ['clang_x64/gen/ui/webui/resources/js/tsconfig_build_ts.json'],
      },
    },
  },
];