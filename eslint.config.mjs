import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
  {
    files: ['**/*.js', '**/*.mjs'],
    languageOptions: { globals: globals.browser },
    rules: {
      'no-alert': 'error',
      'id-length': ['error', { max: 12, min: 2 }],
      'no-unused-vars': 'error',
      quotes: ['error', 'single'],
      semi: ['error', 'always'],
    },
  },
  {
    files: ['eslint.config.mjs'],
    rules: {
      'id-length': 'off',
    },
  },
  pluginJs.configs.recommended,
];
