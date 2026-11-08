import {defaultConfig, noChromeSendConfig, noExplicitAnyConfig,} from '../../../../ui/webui/resources/tools/eslint/eslint_ts.config_base.js';

export default [
  ...defaultConfig,
  noChromeSendConfig, noExplicitAnyConfig,
  {
    languageOptions: {
      parserOptions: {
        'project': ['gen/chrome/browser/resources/new_tab_page_third_party/tsconfig_build_ts.json'],
      },
    },
  },
];