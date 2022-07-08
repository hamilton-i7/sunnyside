import { createTheme } from '@mui/material'
import { breakpoints } from './globals'

const lightTheme = createTheme({
  breakpoints,
  spacing: factor => `${0.8 * factor}rem`,
  palette: {
    mode: 'light',
    primary: {
      main: 'hsl(7, 99%, 70%)',
    },
    secondary: {
      main: 'hsl(51, 100%, 49%)',
    },
    tertiary: {
      main: 'hsl(198, 62%, 26%)',
      dark: 'hsl(212, 27%, 19%)',
    },
    complementary: {
      main: 'hsl(168, 34%, 41%)',
      dark: 'hsl(167, 40%, 24%)',
    },
    neutral: {
      veryDarkGrayishBlue: 'hsl(213, 9%, 39%)',
      darkDrayishBlue: 'hsl(232, 10%, 55%)',
      grayishBlue: 'hsl(210, 4%, 67%)',
    },
  },
  typography: {
    fontFamily: ['Barlow', 'sans-serif'].join(','),
    h1: {
      fontFamily: 'Fraunces',
      fontSize: '3.6rem',
      fontWeight: 900,
      letterSpacing: '0.5rem',
    },
    h2: {
      fontFamily: 'Fraunces',
      fontSize: '3rem',
      fontWeight: 900,
      [`@media (min-width:${breakpoints.values.sm}px)`]: {
        fontSize: '2.4rem',
      },
      [`@media (min-width:${breakpoints.values.md}px)`]: {
        fontSize: '3rem',
      },
    },
    h3: {
      fontFamily: 'Fraunces',
      fontSize: '1.6rem',
      fontWeight: 900,
    },
    body1: {
      fontFamily: 'Barlow',
      fontWeight: 600,
      fontSize: '1.6rem',
      [`@media (min-width:${breakpoints.values.sm}px)`]: {
        fontSize: '1.4rem',
      },
    },
    subtitle1: {
      fontFamily: 'Fraunces',
      fontSize: '1.6rem',
      fontWeight: 900,
    },
    button: {
      fontFamily: 'Fraunces',
      fontSize: '1.2rem',
      fontWeight: 900,
    },
    caption: {
      fontFamily: 'Barlow',
      fontSize: '1.2rem',
      fontWeight: 600,
    },
  },
})

export default lightTheme
