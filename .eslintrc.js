module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['airbnb-base', 'airbnb-typescript/base', 'plugin:import/errors', 'prettier'],
  plugins: ['@typescript-eslint', 'prettier', 'import'],
  globals: {
    Deno: 'readonly',
    fetch: 'readonly',
  },
  parserOptions: {
    project: './tsconfig.json',
    extraFileExtensions: ['.mjs'],
    ecmaVersion: 2020,
    createDefaultProgram: true,
  },
  rules: {
    'prettier/prettier': 'error',
    'no-plusplus': 'off',
    'no-console': 'off',
    'no-continue': 'off',
    'no-loop-func': 'off',
    'consistent-return': 'off',
    'no-async-promise-executor': 'off',
    'no-promise-executor-return': 'off',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    '@typescript-eslint/no-loop-func': 'off',

    'no-param-reassign': ['error', { props: false }],
    'import/extensions': ['error', 'always', { ignorePackages: true }],
    '@typescript-eslint/prefer-optional-chain': 'error',
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/no-use-before-define': ['error', { ignoreTypeReferences: false }],
    '@typescript-eslint/no-unused-vars': [
      'error',
      { args: 'after-used', destructuredArrayIgnorePattern: '^_' },
    ],

    'prefer-destructuring': [
      'error',
      {
        VariableDeclarator: { array: false, object: true },
        AssignmentExpression: { array: false, object: false },
      },
      { enforceForRenamedProperties: false },
    ],

    'lines-around-comment': [
      'error',
      {
        allowArrayStart: true,
        allowBlockStart: true,
        allowClassStart: true,
        allowObjectStart: true,
        beforeBlockComment: true,
        beforeLineComment: true,
      },
    ],

    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: 'class', next: '*' },
      { blankLine: 'always', prev: '*', next: 'class' },
      { blankLine: 'always', prev: 'function', next: '*' },
      { blankLine: 'always', prev: '*', next: 'function' },
      { blankLine: 'always', prev: '*', next: 'export' },
      { blankLine: 'always', prev: 'import', next: '*' },
      { blankLine: 'any', prev: 'import', next: 'import' },
      { blankLine: 'any', prev: 'export', next: 'export' },
    ],
  },
};
