import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'

export default [
  // 1. Tell ESLint to ignore the 'dist' folder (compiled code)
  { ignores: ['dist'] },

  {
    files: ['**/*.{js,jsx}'],
    plugins: {
      'react-hooks': reactHooks,
    },
    languageOptions: {
      // Use browser variables like 'window' or 'document'
      globals: globals.browser,
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    rules: {
      // Standard JavaScript "best practice" rules
      ...js.configs.recommended.rules,
      
      // Important React Hook rules
      'react-hooks/rules-of-hooks': 'error',   // Error: Hooks must be at the top level
      'react-hooks/exhaustive-deps': 'warn',  // Warning: Check your useEffect dependencies
      
      // General cleanup rules
      'no-unused-vars': 'warn',   // Warns you if you create a variable but don't use it
      'no-console': 'off',        // Allows you to use console.log during your assignment
    },
  },
]
