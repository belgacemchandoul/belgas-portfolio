/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'hero-bg': '#0A0A0A',
        'surface': '#111111',
        'surface-2': '#1A1A1A',
        'lime': '#C8F264',
        'lime-dim': '#a8d44a',
        'muted': '#6B6B6B',
        'border-subtle': '#222222',
      },
      fontFamily: {
        display: ['"Instrument Serif"', 'serif'],
        sans: ['"Geist"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
};
