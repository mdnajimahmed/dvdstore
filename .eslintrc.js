module.exports = {
    parser: '@typescript-eslint/parser',
    extends: ['plugin:@typescript-eslint/recommended'],
    plugins: ['@typescript-eslint'],
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: false,
        },
    },
    env: {
        node: true,
        es6: true,
    },
    rules: {
        'eol-last': ['error', 'always'],
        'no-unused-vars': ['warn', { args: 'none', ignoreRestSiblings: true }],
        'prefer-const': 'warn',
        'prefer-spread': 'warn',
        'no-duplicate-imports': 'error',

        'space-before-function-paren': [
            'error',
            { anonymous: 'never', named: 'never', asyncArrow: 'always' },
        ],
        semi: ['warn', 'always'],
        'comma-spacing': ['error', { before: false, after: true }],
        quotes: ['error', 'single', { allowTemplateLiterals: true }],
        indent: [
            'error',
            4,
            {
                SwitchCase: 1,
                ignoredNodes: ['VariableDeclaration[declarations.length=0]'],
            },
        ],
        'computed-property-spacing': 'error',
        'array-bracket-spacing': 'error',
        'arrow-spacing': ['error', { before: true, after: true }],
        'key-spacing': [
            'error',
            { beforeColon: false, afterColon: true, mode: 'minimum' },
        ],
        'space-unary-ops': ['error', { words: true, nonwords: false }],
        'object-property-newline': [
            'error',
            { allowAllPropertiesOnSameLine: true },
        ],
        'space-in-parens': ['error', 'never'],
        'function-paren-newline': ['error', 'multiline-arguments'],
        'space-before-blocks': ['warn', 'always'],
        'brace-style': ['warn', '1tbs', { allowSingleLine: true }],
        'object-curly-spacing': ['warn', 'always', { arraysInObjects: false }],
        'keyword-spacing': ['warn', { after: true }],

        'no-unused-vars': 'off',

        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-parameter-properties': 'off',
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/consistent-type-definitions': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-unused-vars': [
            'warn',
            { args: 'none', ignoreRestSiblings: true },
        ],

        '@typescript-eslint/member-delimiter-style': [
            'error',
            { multiline: { delimiter: 'none' }, singleline: { delimiter: 'comma' } },
        ],
        '@typescript-eslint/type-annotation-spacing': [
            'error',
            {
                before: false,
                after: true,
                overrides: { arrow: { before: true, after: true } },
            },
        ],

        '@typescript-eslint/indent': 'off',
        'prettier/prettier': 0,
        '@typescript-eslint/no-var-requires': 0,
        '@typescript-eslint/member-delimiter-style': [
            'warn',
            {
                multiline: {
                    delimiter: 'semi',
                    requireLast: true,
                },
                singleline: {
                    delimiter: 'semi',
                    requireLast: false,
                },
            },
        ],
        'space-before-function-paren': 0,
    },
};
