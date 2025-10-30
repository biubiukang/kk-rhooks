import tseslint from "typescript-eslint"
import js from "@eslint/js"
import globals from "globals"
import sort from "eslint-plugin-simple-import-sort"
import prettier from "eslint-plugin-prettier"
export default tseslint.config(
    {
        extends: [js.configs.recommended, ...tseslint.configs.recommended],
        files: ['**/*.{js,jsx,ts,tsx}'],
        rules: {
            // 'no-console': 'error',
            'simple-import-sort/imports': 'error',
            'simple-import-sort/exports': 'error',
            'prettier/prettier': 'error'
        },
        languageOptions: {
            parser: tseslint.parser,
            globals: {
                ...globals.node,
                ...globals.browser,
            }
        },
        plugins: {
            'simple-import-sort': sort,
            prettier: prettier
        }
    }
)