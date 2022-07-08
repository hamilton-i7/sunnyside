import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'
import PinterestIcon from '@mui/icons-material/Pinterest'
import IconButton from '@mui/material/IconButton'
import { useTheme } from '@mui/material'

const SocialButton = ({ socialMedia, url, sx }) => {
  const theme = useTheme()
  let icon = ''
  switch (socialMedia) {
    case 'facebook':
      icon = <FacebookIcon fontSize='inherit' />
      break
    case 'instagram':
      icon = <InstagramIcon fontSize='inherit' />
      break
    case 'twitter':
      icon = <TwitterIcon fontSize='inherit' />
      break
    default:
      icon = <PinterestIcon fontSize='inherit' />
  }
  return (
    <IconButton
      href={url}
      sx={{
        fontSize: '2.4rem',
        [theme.breakpoints.up('lg')]: {
          fontSize: '2.8rem',
        },
        ...sx,
      }}>
      {icon}
    </IconButton>
  )
}

export default SocialButton
