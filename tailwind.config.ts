import { addIconSelectors } from '@iconify/tailwind'
import tabler from '@iconify-json/tabler/icons.json'

/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        greySurface: '#2D3E50',
        greySoft: '#37475E',
        greyMute: '#1E293B',
      },
      colors: {
        greySurface: '#2D3E50',
        greySoft: '#37475E',
        greyMute: '#1E293B',
      },
      keyframes: {
        'bounce-x': {
          '0%, 100%': {
            transform: 'translateX(-25%)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'translateX(0)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
          },
        },
        bounce: {
          '0%, 100%': {
            transform: 'translateY(-25%)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1);',
          },
          '50%': {
            transform: 'none',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
          },
        },
      },
      animation: {
        'bounce-x': 'bounce-x 1s infinite',
      },

      fontFamily: {
        staat: ['var(--font-staatliches)'],
        rowdies: ['var(--font-rowdies)'],
        robotoSlab: ['var(--font-roboto-slab)'],
      },
    },
  },
  plugins: [
    addIconSelectors({
      collections: {
        tabler,
      },
    } as object),
  ],
}

export default config
