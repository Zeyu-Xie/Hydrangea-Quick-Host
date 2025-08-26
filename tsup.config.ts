import { defineConfig } from 'tsup'

export default defineConfig(options => ({
	entry: ['./src/index.ts'],
	format: ['esm'],
	splitting: false,
	sourcemap: 'inline',
	dts: true,
	clean: true,
	target: 'es2024',
	treeshake: true,
	shims: true,
	publicDir: 'public',
	outDir: 'dist',
	cjsInterop: true,
	minify: !options.watch,
	skipNodeModulesBundle: true,
}))
