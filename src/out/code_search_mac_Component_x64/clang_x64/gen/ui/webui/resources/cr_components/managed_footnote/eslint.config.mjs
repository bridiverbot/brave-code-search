import {defaultConfig, noExplicitAnyConfig,} from '../../tools/eslint/eslint_ts.config_base.js';

export default [
  ...defaultConfig,
  noExplicitAnyConfig,
  {
    languageOptions: {
      parserOptions: {
        'project': ['clang_x64/gen/ui/webui/resources/cr_components/managed_footnote/tsconfig_build_ts.json'],
      },
    },
  },
];