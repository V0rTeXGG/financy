// eslint.config.js
import { createConfigForNuxt } from '@nuxt/eslint-config/flat';

export default createConfigForNuxt({
    features: {
        typescript: true,
        stylistic: {
            indent: 4,
            quotes: 'single',
            semi: true,
        },
    },
    rules: {
        'indent': ['error', 4, {
            SwitchCase: 1,
            VariableDeclarator: 1,
            outerIIFEBody: 1,
            FunctionDeclaration: {
                parameters: 1,
                body: 1,
            },
            FunctionExpression: {
                parameters: 1,
                body: 1,
            },
            CallExpression: {
                arguments: 1,
            },
            ArrayExpression: 1,
            ObjectExpression: 1,
            ImportDeclaration: 1,
            flatTernaryExpressions: false,
            ignoreComments: false,
        }],

        'vue/html-indent': ['error', 4],
        'vue/script-indent': ['error', 4, {
            baseIndent: 1,
            switchCase: 1,
            ignores: [],
        }],
        'vue/html-closing-bracket-newline': ['error', {
            singleline: 'never',
            multiline: 'always',
        }],

        'prefer-const': 'error',
        'no-unused-vars': 'warn',

        '@typescript-eslint/no-unused-vars': 'warn',
        '@typescript-eslint/no-explicit-any': 'warn',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-empty-interface': 'off'
    },
    ignores: [
        'node_modules/',
        'dist/',
        '.nuxt/',
        'nitro/',
        '.output/',
        '**/generated/**',
    ],
});
