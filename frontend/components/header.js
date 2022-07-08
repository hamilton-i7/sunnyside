import React from 'react'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Nav from './nav'

const Header = ({ heading, heroImage, icon, menu }) => {
  return (
    <Stack
      component='header'
      alignItems='center'
      sx={{
        background: `bottom / cover no-repeat url("${heroImage.url}")`,
        height: { xs: '44rem', md: '60rem', desktop: '68rem' },
      }}>
      <Nav menu={menu} />
      <Typography
        variant='h1'
        sx={{
          color: theme => theme.palette.common.white,
          m: { xs: '3rem 1.6rem 4rem', desktop: '3rem 1.6rem 8rem' },
          textAlign: 'center',
          textTransform: 'uppercase',
        }}>
        {heading}
      </Typography>
      <Box
        component='img'
        src={icon.url}
        alt={icon.alternativeText}
        width='3rem'
      />
    </Stack>
  )
}

export default Header
