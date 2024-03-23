export default {
	input: 'src/main.js',
	output: {
		file: 'dist/bundle.js',
		format: 'cjs',
	},
	build: {
		rollupOptions: {
			external: ['lodash', 'react-router-dom'], // Add the module you want to externalize here
		},
	},
};
