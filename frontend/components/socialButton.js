import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'
import PinterestIcon from '@mui/icons-material/Pinterest'

const SocialButton = ({ socialMedia }) => {
  switch (socialMedia) {
    case 'facebook':
      return <FacebookIcon />
    case 'instagram':
      return <InstagramIcon />
    case 'twitter':
      return <TwitterIcon />
    default:
      return <PinterestIcon />
  }
}

export default SocialButton
