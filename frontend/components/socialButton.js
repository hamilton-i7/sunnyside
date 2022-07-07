import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'
import PinterestIcon from '@mui/icons-material/Pinterest'
import IconButton from '@mui/material/IconButton'

const SocialButton = ({ socialMedia, url }) => {
  let icon = ''
  switch (socialMedia) {
    case 'facebook':
      icon = <FacebookIcon fontSize='large' />
      break
    case 'instagram':
      icon = <InstagramIcon fontSize='large' />
      break
    case 'twitter':
      icon = <TwitterIcon fontSize='large' />
      break
    default:
      icon = <PinterestIcon fontSize='large' />
  }
  return <IconButton href={url}>{icon}</IconButton>
}

export default SocialButton
