import { defineConfig } from 'windicss/helpers'
import colors from 'windicss/colors'
import typography from 'windicss/plugin/typography'

export default defineConfig({
  darkMode: 'class',
  // https://windicss.org/posts/v30.html#attributify-mode
  attributify: true,
  // important: true,

  plugins: [typography()],
  theme: {
    extend: {
      fontSize: {
        sm_: '12px',
        xs_: '14px',
        base_: '16px',
        lg_: '18px',
        xl_: '20px',
        '2xl_': '22px',
        '3xl_': '24px',
        '4xl_': '26px',
        '5xl_': '30px',
      },
      colors: {
        blue: '#197DD9',
        blue2: '#00BCEA',
        primary: '#051F37',
        dividers: '#242E50',
        gray_secondary: '#888C96',
        gray: '#C2C2C2',
        input_borders: '#D7D7D7',
        borders: '#E7E7E7',
        bg: '#F1F2F5',
        bg2: '#EFF8FF',
        white: 'white',
        success: '#19A627',
        success_bg: '#D8F4DB',
        error: '#D91919',
        error_bg: '#FED7D7',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: 'inherit',
            a: {
              color: 'inherit',
              opacity: 0.75,
              fontWeight: '500',
              textDecoration: 'underline',
              '&:hover': {
                opacity: 1,
                color: colors.teal[600],
              },
            },
            b: { color: 'inherit' },
            strong: { color: 'inherit' },
            em: { color: 'inherit' },
            h1: { color: 'inherit' },
            h2: { color: 'inherit' },
            h3: { color: 'inherit' },
            h4: { color: 'inherit' },
            code: { color: 'inherit' },
          },
        },
      },
    },
  },
})
