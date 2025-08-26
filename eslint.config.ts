import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'

const TS_PATHS = ['src/**/*.ts']
const GLOBAL_IGNORES = ['dist/**', 'node_modules/**']
const JS_PATHS = ['**/*.js']

const config = [
	{ ignores: GLOBAL_IGNORES },
	eslint.configs.recommended,
	...tseslint.configs.recommendedTypeChecked.map(config => ({
		...config,
		files: TS_PATHS,
	})),
	{
		files: TS_PATHS,
		plugins: {
			'@typescript-eslint': tseslint.plugin,
		},
		languageOptions: {
			parser: tseslint.parser,
			parserOptions: {
				projectService: true,
				tsconfigRootDir: import.meta.dirname,
			},
		},
		rules: {
			'no-mixed-spaces-and-tabs': 'error',
			'prefer-arrow-callback': ['error', { allowNamedFunctions: true }],
			'func-style': ['error', 'expression', { allowArrowFunctions: true }],
			'@typescript-eslint/no-duplicate-enum-values': 'error',
			'@typescript-eslint/no-dynamic-delete': 'error',
			'@typescript-eslint/no-var-requires': 'error',
			'@typescript-eslint/no-require-imports': 'error',
			'@typescript-eslint/no-floating-promises': [
				'warn',
				{ ignoreVoid: true, ignoreIIFE: true },
			],
			'@typescript-eslint/no-namespace': 'error',
			'@typescript-eslint/no-unnecessary-boolean-literal-compare': [
				'error',
				{
					allowComparingNullableBooleansToTrue: true,
					allowComparingNullableBooleansToFalse: true,
				},
			],
			'@typescript-eslint/prefer-optional-chain': 'error',
			'@typescript-eslint/promise-function-async': [
				'error',
				{
					allowedPromiseNames: ['Thenable'],
					checkArrowFunctions: true,
					checkFunctionDeclarations: true,
					checkFunctionExpressions: true,
					checkMethodDeclarations: true,
				},
			],

			'no-unused-vars': 'off',
			'@typescript-eslint/no-unused-vars': [
				'error',
				{
					args: 'after-used',
					caughtErrors: 'all',
					caughtErrorsIgnorePattern: '^_',
					argsIgnorePattern: '^_',
					varsIgnorePattern: '^_',
					destructuredArrayIgnorePattern: '^_',
				},
			],

			'@typescript-eslint/naming-convention': [
				'error',
				{
					selector: 'variable',
					types: ['boolean'],
					format: ['snake_case'],
					prefix: ['_', 'is_', 'should_', 'has_', 'can_', 'did_', 'will_'],
					trailingUnderscore: 'allow',
				},
				{
					selector: 'function',
					format: ['snake_case'],
					leadingUnderscore: 'allow',
					trailingUnderscore: 'allow',
				},
				{
					selector: 'variable',
					types: ['function'],
					format: ['snake_case'],
					leadingUnderscore: 'allow',
					trailingUnderscore: 'allow',
				},
				{
					selector: 'variableLike',
					format: ['snake_case', 'UPPER_CASE'],
					leadingUnderscore: 'allow',
					trailingUnderscore: 'allow',
				},
				{
					selector: 'parameter',
					format: ['snake_case'],
					leadingUnderscore: 'allow',
					trailingUnderscore: 'allow',
				},
				{
					selector: 'typeLike',
					format: ['PascalCase'],
					trailingUnderscore: 'allow',
					leadingUnderscore: 'allow',
				},
			],
		},
	},
	{
		files: JS_PATHS,
		...tseslint.configs.disableTypeChecked,
	},
]

export default config
