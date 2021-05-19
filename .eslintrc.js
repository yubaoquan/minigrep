module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['airbnb-typescript/base'],
  plugins: ['@typescript-eslint'],
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
    'arrow-parens': ['error', 'as-needed'],
    'brace-style': ['error', '1tbs'],
    'consistent-return': 'off',
    'func-names': 'off',
    'import/extensions': ['error', 'always'],
    'import/prefer-default-export': 'off',
    'max-classes-per-file': 'off',
    'max-len': ['error', { code: 100, ignoreComments: true, ignoreStrings: true }],
    'max-statements-per-line': ['error', { max: 1 }],
    'no-console': 'off',
    'no-constant-condition': ['error', { checkLoops: false }],
    'no-continue': 'off',

    'no-loop-func': 'off',
    '@typescript-eslint/no-loop-func': 'off',

    'no-mixed-operators': ['error', { allowSamePrecedence: true }],
    'no-new': 'off',
    'no-param-reassign': 'off',
    'no-plusplus': 'off',

    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['warn'],
    '@typescript-eslint/no-unused-expressions': ['error', { allowShortCircuit: true }],

    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error', { functions: false, classes: false }],

    'prefer-destructuring': [
      'error',
      {
        VariableDeclarator: { array: false, object: true },
        AssignmentExpression: { array: false, object: true },
      },
      { enforceForRenamedProperties: false },
    ],

    'space-infix-ops': 'off',
    '@typescript-eslint/space-infix-ops': ['error', { int32Hint: true }],

    'no-extra-parens': 'off',
    '@typescript-eslint/no-extra-parens': ['error'],

    'lines-around-comment': ['error', {
      allowArrayStart: true,
      allowBlockStart: true,
      allowClassStart: true,
      allowObjectStart: true,
      beforeBlockComment: true,
      beforeLineComment: true,
    }],
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

    'space-before-function-paren': 'off',
    '@typescript-eslint/space-before-function-paren': ['error', {
      anonymous: 'never',
      asyncArrow: 'always',
      named: 'never',
    }],

    '@typescript-eslint/type-annotation-spacing': ['error',
      {
        after: true,
        before: false,
        overrides: {
          arrow: {
            after: true,
            before: true,
          },
        },
      },
    ],
  },
};
