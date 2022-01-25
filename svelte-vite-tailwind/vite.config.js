import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import path from 'path'

/*
	__dirname is not defined in ES modules.
	This is a workaround.
*/
import { fileURLToPath } from 'url'
import { dirname } from 'path'
const _filename = fileURLToPath(import.meta.url)
const _dirname = dirname(_filename)

export default defineConfig({
	resolve: {
		alias: {
			'@': path.resolve(_dirname, './src'),
			'@components': path.resolve(_dirname, './src/components')
		},
	},
	plugins: [ svelte() ]
})
