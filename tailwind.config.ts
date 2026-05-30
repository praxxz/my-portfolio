import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        void: '#0A0A0A',
        charcoal: '#0D0C0B',
        champagne: '#C9A96E',
        kimono: '#FAFAFA',
        lime: '#D4F87A',
        warmgray: '#888580',
        cream: '#F5E8D3',
      },
      fontFamily: {
        display: ['var(--font-oswald)', 'Bebas Neue', 'sans-serif'],
        body: ['var(--font-inter)', 'DM Sans', 'sans-serif'],
        serif: ['var(--font-cormorant)', 'Playfair Display', 'serif'],
        mono: ['var(--font-jetbrains)', 'Fira Code', 'monospace'],
      },
      letterSpacing: {
        'widest': '0.18em',
        'ultra': '0.25em',
      },
      backdropBlur: {
        'glass': '20px',
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}

export default config