import React from 'react'
import Stack from '@mui/material/Stack'
import SocialButton from './socialButton'
import Link from './link'
import MuiLink from '@mui/material/Link'
import Svg from './svg'
import { useTheme } from '@mui/material'

const Footer = ({ footer }) => {
  const theme = useTheme()
  return (
    <Stack
      component='footer'
      sx={{
        alignItems: 'center',
        backgroundColor: theme => theme.palette.complementary.main,
        color: theme => theme.palette.complementary.dark,
        p: '5rem 3rem',
      }}>
      <Svg
        svg={footer.logo}
        color={theme.palette.complementary.dark}
        sx={{
          mb: '2rem',
        }}
      />
      <Stack
        direction='row'
        sx={{
          gap: '5rem',
        }}>
        {footer.links.map(link => (
          <Link key={link.id} href={link.url}>
            <MuiLink
              underline='none'
              variant='body1'
              tabIndex={0}
              sx={{
                color: theme => theme.palette.complementary.dark,
                transition: theme =>
                  `${theme.transitions.duration.shortest}ms cubic-bezier(0.4, 0, 0.2, 1) 0ms`,
                transitionProperty: 'background-color, color',
                ':hover': {
                  color: theme => theme.palette.common.white,
                },
              }}>
              {link.label}
            </MuiLink>
          </Link>
        ))}
      </Stack>
      <Stack direction='row' sx={{ mt: '5rem', gap: '1rem' }}>
        {footer.socials.map(social => (
          <SocialButton
            key={social.id}
            socialMedia={social.name}
            url={social.url}
            sx={{
              transition: theme =>
                `${theme.transitions.duration.shortest}ms cubic-bezier(0.4, 0, 0.2, 1) 0ms`,
              transitionProperty: 'background-color, color',
              ':hover': {
                color: theme => theme.palette.common.white,
              },
            }}
          />
        ))}
      </Stack>
    </Stack>
  )
}

export default Footer
