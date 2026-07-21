import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: '#FDFBF7',
          light: '#FFFFFE',
          dark: '#F7F3EB',
        },
        beige: {
          50: '#FAF8F5',
          100: '#F5F0EB',
          200: '#EAE2D8',
          300: '#DDD2C3',
        },
        charcoal: {
          DEFAULT: '#222222',
          light: '#333333',
          dark: '#141414',
        },
        warmgrey: {
          DEFAULT: '#666666',
          light: '#888888',
          dark: '#444444',
        },
        burgundy: {
          DEFAULT: '#8C3A3A',
          hover: '#762F2F',
          light: '#F8EAEA',
          soft: '#A54949',
        },
        gold: {
          DEFAULT: '#C5A059',
          light: '#DFB86C',
          dark: '#A6823C',
          bg: '#FAF6EE',
        }
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['var(--font-jakarta)', 'Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(34, 34, 34, 0.05)',
        'card': '0 10px 30px -5px rgba(34, 34, 34, 0.08)',
        'floating': '0 20px 40px -10px rgba(140, 58, 58, 0.15)',
      }
    },
  },
  plugins: [],
}
export default config
