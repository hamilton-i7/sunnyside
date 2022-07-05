import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'

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
