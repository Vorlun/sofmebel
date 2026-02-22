import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        '2xl': '1280px'
      }
    },
    extend: {
      colors: {
        primary: '#1E293B',
        secondary: '#334155',
        accent: '#C6A969',
        background: '#F8FAFC',
        muted: '#94A3B8'
      },
      fontFamily: {
        sans: ['Inter', 'Manrope', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'serif']
      },
      boxShadow: {
        soft: '0 10px 30px rgba(0,0,0,0.08)',
        luxury: '0 20px 60px rgba(0,0,0,0.12)'
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem'
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.4, 0, 0.2, 1)'
      }
    }
  },
  plugins: []
};

export default config;