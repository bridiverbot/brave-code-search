import {defaultConfig, webComponentMissingDepsConfig, noExplicitAnyConfig,} from '../../../../ui/webui/resources/tools/eslint/eslint_ts.config_base.js';

export default [
  ...defaultConfig,
  webComponentMissingDepsConfig, noExplicitAnyConfig,
  {
    languageOptions: {
      parserOptions: {
        'project': ['gen/chrome/browser/resources/password_manager/tsconfig_build_ts.json'],
      },
    },
  },
];