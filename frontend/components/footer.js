import React from 'react'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import SocialButton from './socialButton'
import Link from 'next/link'
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
              sx={{ color: theme => theme.palette.complementary.dark }}>
              <Typography variant='body1'>{link.label}</Typography>
            </MuiLink>
          </Link>
        ))}
      </Stack>
      <Stack direction='row' sx={{ mt: '5rem', gap: '2rem' }}>
        {footer.socials.map(social => (
          <SocialButton
            key={social.id}
            socialMedia={social.name}
            url={social.url}
          />
        ))}
      </Stack>
    </Stack>
  )
}

export default Footer
