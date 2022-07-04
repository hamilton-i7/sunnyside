import { createTheme } from '@mui/material'
import { breakpoints } from './globals'

const lightTheme = createTheme({
  breakpoints,
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
      light: 'hsl(168, 34%, 41%)',
      dark: 'hsl(167, 40%, 24%)',
    },
    neutral: {
      darkBlue: 'hsl(212, 27%, 19%)',
      veryDarkGrayishBlue: 'hsl(213, 9%, 39%)',
      darkDrayishBlue: 'hsl(232, 10%, 55%)',
      grayishBlue: 'hsl(210, 4%, 67%)',
    },
  },
  typography: {
    fontFamily: ['Barlow', 'sans-serif'].join(','),
    h1: {
      fontFamily: 'Fraunces',
      fontWeight: 900,
    },
    h2: {
      fontFamily: 'Fraunces',
      fontWeight: 900,
    },
    h3: {
      fontFamily: 'Fraunces',
      fontWeight: 900,
    },
    body1: {
      fontFamily: 'Barlow',
      fontWeight: 600,
      fontSize: '1.6rem',
    },
    subtitle1: {
      fontFamily: 'Fraunces',
      fontWeight: 700,
    },
    button: {
      fontFamily: 'Fraunces',
      fontWeight: 700,
    },
    caption: {
      fontFamily: 'Barlow',
      fontWeight: 600,
    },
  },
})

export default lightTheme
