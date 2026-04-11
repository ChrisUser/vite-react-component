import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import reactHooksPlugin from 'eslint-plugin-react-hooks'
import prettierPlugin from 'eslint-plugin-prettier'

export default tseslint.config(
    {
        ignores: ['dist/**', 'docs/**', 'node_modules/**']
    },
    js.configs.recommended,
    tseslint.configs.recommended,
    reactHooksPlugin.configs.flat.recommended,
    {
        files: ['lib/**/*.{ts,tsx}', 'src/**/*.{ts,tsx}'],
        plugins: {
            prettier: prettierPlugin
        },
        rules: {
            'no-control-regex': 'off',
            'no-undef': 'off',
            'no-unused-vars': 'off',
            '@typescript-eslint/no-unused-vars': 'warn',
            '@typescript-eslint/no-use-before-define': 'off',
            '@typescript-eslint/ban-ts-comment': 'error',
            '@typescript-eslint/no-empty-function': 'off',
            '@typescript-eslint/no-explicit-any': 'error',
            '@typescript-eslint/no-non-null-assertion': 'off',
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'warn'
        }
    }
)
