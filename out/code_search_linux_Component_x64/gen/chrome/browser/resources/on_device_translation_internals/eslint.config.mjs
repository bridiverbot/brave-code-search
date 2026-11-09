import {defaultConfig, noChromeSendConfig, noExplicitAnyConfig,} from '../../../../ui/webui/resources/tools/eslint/eslint_ts.config_base.js';

export default [
  ...defaultConfig,
  noChromeSendConfig, noExplicitAnyConfig,
  {
    languageOptions: {
      parserOptions: {
        'project': ['gen/chrome/browser/resources/on_device_translation_internals/tsconfig_build_ts.json'],
      },
    },
  },
];