import React from 'react'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { getStrapiMedia } from '../lib/media'
import SocialButton from './socialButton'

const Footer = ({ footer }) => {
  const logo = getStrapiMedia(footer.logo)
  return (
    <Stack component='footer'>
      <Box component='img' src={logo.url} alt={logo.alternativeText} />
      <Stack direction='row'>
        {footer.links.map(link => (
          <Button key={link.id} variant={link.variant}>
            {link.label}
          </Button>
        ))}
      </Stack>
      <Stack direction='row'>
        {footer.socials.map(social => (
          <SocialButton key={social.id} socialMedia={social.name} />
        ))}
      </Stack>
    </Stack>
  )
}

export default Footer
