import preprocess from "svelte-preprocess"

const config = {
	preprocess: [ preprocess({ postcss: true }) ],
	onwarn: (warning, handler) => {
		const { code, frame } = warning
		if (code === "css-unused-selector") return
		handler(warning)
	}
}

export default config
