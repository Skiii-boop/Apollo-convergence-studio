/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory: '#f7f4ef',
        bone: '#ebe6dc',
        ink: '#0c1a2e',
        navy: '#132238',
        graphite: '#4a5568',
        mist: '#8b939c',
        copper: '#8b6914',
        olive: '#3d4a32',
        panel: '#fdfcfa',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Source Sans 3"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        panel: '0 1px 0 rgba(12, 26, 46, 0.06), 0 12px 40px rgba(12, 26, 46, 0.08)',
        lift: '0 24px 60px rgba(12, 26, 46, 0.12)',
      },
      transitionDuration: {
        studio: '420ms',
      },
    },
  },
  plugins: [],
}
