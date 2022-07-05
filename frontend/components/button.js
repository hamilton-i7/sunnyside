import Button from '@mui/material/Button'
import { alpha, styled } from '@mui/material/styles'

export const ContainedButton = styled(Button, {
  shouldForwardProp: prop => prop !== 'neutral',
})(({ neutral, theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  borderRadius: '2em',
  color: theme.palette.neutral.darkBlue,
  padding: '1.2rem 2.8rem',
  ...(neutral && {
    backgroundColor: theme.palette.common.white,
  }),
}))

export const TextButton = styled(Button, {
  shouldForwardProp: prop => prop !== 'underlineColor',
})(({ underlineColor, theme }) => ({
  color: theme.palette.neutral.darkBlue,
  '&::after': {
    borderRadius: '0.8rem',
    bottom: '0.9rem',
    content: '""',
    height: '0.4rem',
    left: '50%',
    position: 'absolute',
    transform: 'translateX(-50%)',
    width: '90%',
    zIndex: -1,
    ...(underlineColor && {
      backgroundColor: alpha(theme.palette[underlineColor].main, 0.4),
    }),
  },
  ':hover': {
    backgroundColor: alpha(theme.palette[underlineColor].main, 0.04),
    transition: 'background-color 250ms',
  },
  ':hover::after': {
    ...(underlineColor && {
      backgroundColor: alpha(theme.palette[underlineColor].main, 1),
      transition: 'background-color 250ms',
    }),
  },
}))
