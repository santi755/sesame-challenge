/** @type {import('tailwindcss').Config} */
export default {
  purge: {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    options: {
      safelist: [
        'bg-accentGrass200',
        'bg-accentBlue200',
        'bg-accentTurquoise200',
        'bg-extracolorA300',
        'text-accentGrass200',
        'text-accentBlue200',
        'text-accentTurquoise200',
        'text-extracolorA300'
      ]
    }
  },
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
      // https://tailwindcss.com/docs/customizing-colors#using-css-variables
      colors: {
        accentGrass200: 'rgb(var(--accentGrass200) / <alpha-value>)',
        fontPrimary: 'rgb(var(--fontPrimary) / <alpha-value>)',
        fontTertiary: 'rgb(var(--fontTertiary) / <alpha-value>)',
        accentBlue200: 'rgb(var(--accentBlue200) / <alpha-value>)',
        neutral200: 'rgb(var(--neutral200) / <alpha-value>)',
        background50: 'rgb(var(--background50) / <alpha-value>)',
        fontSecondary: 'rgb(var(--fontSecondary) / <alpha-value>)',
        fontLink: 'rgb(var(--fontLink) / <alpha-value>)',
        fontLinkLight: 'rgb(var(--fontLinkLight) / <alpha-value>)',
        accentTurquoise200: 'rgb(var(--accentTurquoise200) / <alpha-value>)',
        extracolorA300: 'rgb(var(--extracolorA300) / <alpha-value>)',
        fontLight: 'rgb(var(--fontLight) / <alpha-value>)',
        neutral100: 'rgb(var(--neutral100) / <alpha-value>)',
        neutral300: 'rgb(var(--neutral300) / <alpha-value>)'
      },
      lineHeight: {
        2: '0.625rem', // 10px
        3: '0.75rem' // 12px
      },
      boxShadow: {
        right: '6px 0px 8px 0px rgba(108, 99, 255, 0.05)'
      }
    }
  },
  plugins: []
};
