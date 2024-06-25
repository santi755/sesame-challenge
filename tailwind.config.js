/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      fontFamily: {
        figtree: ['Figtree', 'sans-serif']
      },
      fontSize: {
        xxs: '.625rem', // 10px
        xs: '.75rem', // 12px
        sm: '.875rem', // 14px
        base: '1rem', // 16px
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem' // 24px
      },
      colors: {
        fontPrimary: '#1F2D52',
        fontTertiary: '#94A3B8',
        accentBlue200: '#3B82F6',
        neutral200: '#E2E8F0',
        background50: '#F8FAFC',
        fontSecondary: '#64748B',
        fontLink: '#6C63FF',
        accentGrass200: '#22C55E',
        accentTurquoise200: '#14B8A6',
        extracolorA300: '#ED6F6F',
        fontLight: '#FFFFFF',
        logo600: '#1F2D52',
        neutral100: '#F1F5F9',
        neutral300: '#CBD5E1',
        neutral400: '#94A3B8'
      },
      lineHeight: {
        2: '0.625rem', // 10px
        3: '0.75rem' // 12px
      }
    }
  },
  plugins: []
}
