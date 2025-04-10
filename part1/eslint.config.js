import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

export default [
  { ignores: ['dist'] },
  //忽略 dist 目录下的文件（通常是构建输出目录
  {
    files: ['**/*.{js,jsx}'], // 应用于所有 .js 和 .jsx 文件
    
    languageOptions: {
      ecmaVersion: 2020,  // 支持 ES2020 语法
      globals: globals.browser,  // 注入浏览器全局变量
      // （如 `window`、`document`）
      parserOptions: {
        ecmaVersion: 'latest',   // 解析器使用最新 ECMAScript
        ecmaFeatures: { jsx: true },   // 启用 JSX 支持
        sourceType: 'module',   // 代码是 ES Module 格式
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
]
