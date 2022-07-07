import Button from '@mui/material/Button'
import { alpha, styled } from '@mui/material/styles'

export const ContainedButton = styled(Button, {
  shouldForwardProp: prop => prop !== 'neutral',
})(({ neutral, theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  borderRadius: '2em',
  color: theme.palette.tertiary.dark,
  padding: '1.2rem 2.8rem',
  ...(neutral && {
    backgroundColor: theme.palette.common.white,
  }),
}))

export const TextButton = styled(Button, {
  shouldForwardProp: prop => prop !== 'underlineColor',
})(({ underlineColor, theme }) => ({
  color: theme.palette.tertiary.dark,
  fontSize: '1.6rem',
  '&::after': {
    borderRadius: '0.8rem',
    bottom: '0.5em',
    content: '""',
    height: '0.5em',
    left: '50%',
    position: 'absolute',
    transform: 'translateX(-50%)',
    transition: `background-color ${theme.transitions.duration.short}ms`,
    width: '96%',
    zIndex: -1,
  },
  ...(underlineColor && {
    ':hover': {
      backgroundColor: alpha(theme.palette[underlineColor].main, 0.04),
      '&::after': {
        backgroundColor: alpha(theme.palette[underlineColor].main, 1),
      },
    },
    '::after': {
      backgroundColor: alpha(theme.palette[underlineColor].main, 0.4),
      transition: `background-color ${theme.transitions.duration.short}ms`,
    },
  }),
}))
