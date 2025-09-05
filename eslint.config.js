import { defineConfig } from 'eslint/config';

export default defineConfig([
    {
        files: ['./src/**/*.js'],
        languageOptions: {
            ecmaVersion: 2025,
            sourceType: 'module',
            globals: {
                document: 'readonly',
                performance: 'readonly',
                window: 'readonly',
                URLSearchParams: 'readonly',
            },
        },
        rules: {
            'semi': 'error',
            'quotes': ['error', 'single'],
            'indent': ['error', 4],
            'comma-dangle': ['error', 'always-multiline'],
            'no-trailing-spaces': 'error',
            'eol-last': ['error', 'always'],
            'no-var': 'error',
            'prefer-const': 'error',
            'no-undef': 'error',
            'no-unused-vars': ['warn', { 'args': 'none' }],
            'eqeqeq': 'error',
            'curly': 'error',
            'prefer-arrow-callback': 'error',
            'no-duplicate-imports': 'error',
            'object-shorthand': 'error',
            'no-shadow': 'error',
        },
    },
]);
