const config = {
  content: [ './src/**/*.{html,js,svelte,ts}' ],
  theme: { extend: {} },
  plugins: [ require('daisyui') ],
  daisyui: { styled: true, base: false },
}

module.exports = config;
