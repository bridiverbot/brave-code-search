import {defaultConfig, noChromeSendConfig, noExplicitAnyConfig,} from '../../../../../ui/webui/resources/tools/eslint/eslint_ts.config_base.js';

export default [
  ...defaultConfig,
  noChromeSendConfig, noExplicitAnyConfig,
  {
    languageOptions: {
      parserOptions: {
        'project': ['gen/chrome/browser/resources/glic/selection_overlay/tsconfig_build_ts.json'],
      },
    },
  },
];