import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: [
      'prettier',
      'next/typescript',
      'next/core-web-vitals',
      'plugin:@tanstack/query/recommended',
    ],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@tanstack/query/no-rest-destructuring': 'off',
    },
  }),
];

export default eslintConfig;
