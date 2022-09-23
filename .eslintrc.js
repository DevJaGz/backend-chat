module.exports = {
	root: true,
	env: {
		es6: true,
		browser: true,
		node: true
	},
	extends: ['airbnb-base', 'prettier', 'plugin:node/recommended'],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly'
	},
	parserOptions: {
		ecmaVersion: 2020
	},
	plugins: ['prettier'],
	rules: {
		'prettier/prettier': 'error',
		'no-unused-vars': 'warn',
		'no-console': 'off',
		'func-names': 'off',
		'no-plusplus': 'off',
		'no-process-exit': 'off',
		'class-methods-use-this': 'off'
	}
};
