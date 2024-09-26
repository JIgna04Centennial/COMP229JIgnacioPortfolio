import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      // This section is used for excluding dependencies from the bundle, not local files.
      external: [/src/components/Project], // You probably don't need this unless you have external dependencies to exclude.
    }
  }
})
