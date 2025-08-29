import nx from '@nx/eslint-plugin';
import angularEslintPlugin from '@angular-eslint/eslint-plugin';
import angularTemplateEslintPlugin from '@angular-eslint/eslint-plugin-template';
import templateParser from '@angular-eslint/template-parser';
import tsParser from '@typescript-eslint/parser';

export default [
	...nx.configs['flat/base'],
	...nx.configs['flat/typescript'],
	...nx.configs['flat/javascript'],
	{
		ignores: ['**/dist', '**/node_modules', '**/.angular'],
	},
	// TypeScript файлы
	{
		files: ['**/*.ts'],
		languageOptions: {
			parser: tsParser,
			parserOptions: {
				project: ['tsconfig.base.json'],
				createDefaultProgram: true,
			},
		},
		plugins: {
			'@angular-eslint': angularEslintPlugin,
		},
		rules: {
			// Angular правила
			'@angular-eslint/prefer-inject': 'off',
			'@angular-eslint/component-class-suffix': 'error',
			'@angular-eslint/component-selector': [
				'error',
				{
					type: 'element',
					prefix: ['csd', 'app'],
					style: 'kebab-case',
				},
			],
			'@angular-eslint/contextual-lifecycle': 'error',
			'@angular-eslint/directive-class-suffix': 'error',
			'@angular-eslint/directive-selector': [
				'error',
				{
					type: 'attribute',
					prefix: ['csd', 'app'],
					style: 'camelCase',
				},
			],
			'@angular-eslint/no-empty-lifecycle-method': 'error',
			'@angular-eslint/no-input-rename': 'error',
			'@angular-eslint/no-output-on-prefix': 'error',
			'@angular-eslint/no-output-rename': 'error',
			'@angular-eslint/use-lifecycle-interface': 'error',
			'@angular-eslint/use-pipe-transform-interface': 'error',
			'@angular-eslint/no-output-native': 'warn',

			// TypeScript правила
			'@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
			'@typescript-eslint/explicit-member-accessibility': 'off',
			'@typescript-eslint/member-ordering': [
				'error',
				{
					default: [
						'static-field',
						'instance-field',
						'constructor',
						'static-method',
						'instance-method',
					],
				},
			],
			'@typescript-eslint/naming-convention': [
				'error',
				{
					selector: 'default',
					format: ['camelCase'],
				},
				{
					selector: 'variable',
					format: ['camelCase', 'UPPER_CASE'],
				},
				{
					selector: 'property',
					format: ['camelCase', 'PascalCase', 'UPPER_CASE', 'snake_case'],
				},
				{
					selector: 'property',
					modifiers: ['readonly'],
					format: ['UPPER_CASE', 'camelCase', 'PascalCase'],
				},
				{
					selector: 'typeLike',
					format: ['PascalCase'],
				},
				{
					selector: 'enumMember',
					format: ['UPPER_CASE'],
				},
				{
					selector: 'objectLiteralProperty',
					format: ['camelCase', 'PascalCase', 'UPPER_CASE', 'snake_case'],
				},
				{
					selector: 'import',
					format: ['camelCase', 'PascalCase'],
				},
			],
			'@typescript-eslint/no-unused-vars': [
				'error',
				{
					argsIgnorePattern: '^_',
					varsIgnorePattern: '^_',
					caughtErrorsIgnorePattern: '^_',
				},
			],
			'@typescript-eslint/no-empty-function': [
				'error',
				{
					allow: ['constructors'],
				},
			],
			'@typescript-eslint/no-empty-interface': 'error',
			'@typescript-eslint/no-inferrable-types': [
				'error',
				{
					ignoreParameters: true,
				},
			],
			'@typescript-eslint/no-shadow': 'error',
			'@typescript-eslint/no-unused-expressions': 'error',

			// JavaScript правила
			'arrow-body-style': ['error', 'as-needed'],
			curly: 'error',
			eqeqeq: ['error', 'smart'],
			'guard-for-in': 'error',
			'no-bitwise': 'error',
			'no-caller': 'error',
			'no-console': ['error', { allow: ['warn', 'error'] }],
			'no-debugger': 'error',
			'no-eval': 'error',
			'no-new-wrappers': 'error',
			'no-restricted-imports': [
				'error',
				{
					paths: ['rxjs/Rx', 'rxjs/internal'],
				},
			],
			'no-throw-literal': 'error',
			'no-trailing-spaces': 'error',
			'no-var': 'error',
			'prefer-const': 'error',
			radix: 'error',
			semi: ['error', 'always'],

			// Nx правила
			'@nx/enforce-module-boundaries': 'off',
		},
	},
	// HTML шаблоны
	{
		files: ['**/*.html'],
		languageOptions: {
			parser: templateParser,
		},
		plugins: {
			'@angular-eslint/template': angularTemplateEslintPlugin,
		},
		rules: {
			'@angular-eslint/template/banana-in-box': 'error',
			'@angular-eslint/template/no-negated-async': 'error',
			'@angular-eslint/template/eqeqeq': 'error',
			'@angular-eslint/template/no-duplicate-attributes': 'error',
			'@angular-eslint/template/alt-text': 'error',
			'@angular-eslint/template/elements-content': 'warn',
			'@angular-eslint/template/label-has-associated-control': 'warn',
			'@angular-eslint/template/click-events-have-key-events': 'warn',
			'@angular-eslint/template/no-autofocus': 'warn',
			'@angular-eslint/template/use-track-by-function': 'error',
		},
	},
	{
		files: ['**/server.ts', '**/server.js', '**/*.server.ts'],
		rules: {
			'no-console': 'off',
		},
	},
];
