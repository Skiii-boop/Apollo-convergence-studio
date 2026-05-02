import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/** GitHub project pages need a subpath; user/org sites (`*.github.io`) use `/`. */
function normalizeBase(raw: string | undefined): string {
  if (raw === undefined || raw === '' || raw === '/') return '/'
  let b = raw.trim()
  if (!b.startsWith('/')) b = `/${b}`
  if (!b.endsWith('/')) b = `${b}/`
  return b
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: normalizeBase(process.env.VITE_BASE_PATH),
})
