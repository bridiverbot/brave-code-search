import {defaultConfig, noExplicitAnyConfig,} from '../../../../../ui/webui/resources/tools/eslint/eslint_ts.config_base.js';

export default [
  ...defaultConfig,
  noExplicitAnyConfig,
  {
    languageOptions: {
      parserOptions: {
        'project': ['gen/components/autofill/core/browser/autofill_and_password_manager_internals/tsconfig_build_ts.json'],
      },
    },
  },
];