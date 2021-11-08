module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
    '@vue/prettier',
    '@vue/prettier/@typescript-eslint',
    'plugin:@intlify/vue-i18n/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/camelcase': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-irregular-whitespace': 'off',
    '@intlify/vue-i18n/no-raw-text': [
      'warn',
      {
        ignoreNodes: ['md-icon', 'v-icon'],
        ignorePattern: '^[-#:()&.!+“”•]+$',
        ignoreText: ['EUR', 'HKD', 'USD'],
        extensions: ['.ts', '.js', '.vue'],
      },
    ],
    '@intlify/vue-i18n/no-unused-keys': [
      'warn',
      {
        extensions: ['.ts', '.js', '.vue'],
      },
    ],
  },
  settings: {
    'vue-i18n': {
      localeDir: './src/locales/locales/*.{json}',
    },
  },
  overrides: [
    {
      files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
      env: {
        jest: true,
      },
    },
    {
      // enable the rule specifically for TypeScript files
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': ['warn'],
      },
    },
  ],
}
