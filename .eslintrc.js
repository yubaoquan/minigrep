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
    'no-extra-parens': 'off',
    '@typescript-eslint/no-extra-parens': ['error'],
    'no-console': 'off',
    'no-continue': 'off',
    'consistent-return': 'off',
    'import/prefer-default-export': 'off',
    'no-loop-func': 'off',
    '@typescript-eslint/no-loop-func': 'off',

    'no-param-reassign': ['error', { props: false }],
    'max-statements-per-line': ['error', { max: 1 }],
    'import/extensions': ['error', 'ignorePackages'],
    'brace-style': ['error', '1tbs'],
    '@typescript-eslint/prefer-optional-chain': 'error',
    '@typescript-eslint/no-use-before-define': ['error', { ignoreTypeReferences: false }],

    'prefer-destructuring': [
      'error',
      {
        VariableDeclarator: { array: false, object: true },
        AssignmentExpression: { array: false, object: true },
      },
      { enforceForRenamedProperties: false },
    ],

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
