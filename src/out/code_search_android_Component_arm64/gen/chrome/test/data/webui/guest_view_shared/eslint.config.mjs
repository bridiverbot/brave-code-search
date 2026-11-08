import {defaultConfig, } from '../../../../../ui/webui/resources/tools/eslint/eslint_ts.config_base.js';

export default [
  ...defaultConfig,
  
  {
    languageOptions: {
      parserOptions: {
        'project': ['gen/chrome/test/data/webui/guest_view_shared/tsconfig_build_ts.json'],
      },
    },
  },
];