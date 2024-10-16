import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		ViteImageOptimizer({
			jpg: {
				quality: 80,
			},
		}),
	],
	server: {
		port: 3000,
		strictPort:true,
	},
	preview: {
		port: 5000,
		strictPort:true,
	},
});
