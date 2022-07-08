import adapter from '@sveltejs/adapter-auto'
import preprocess from 'svelte-preprocess'
import { HTTP_ENDPOINT } from './src/lib/config/env.js'
console.log('HTTP_ENDPOINT................', HTTP_ENDPOINT)
/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],
  kit: {
    adapter: adapter(),
    vite: {
      server: {
        proxy: {
          '/graphql': HTTP_ENDPOINT,
          '/api': HTTP_ENDPOINT,
          '/images': HTTP_ENDPOINT,
        },
      },
    },
  },
}

export default config
