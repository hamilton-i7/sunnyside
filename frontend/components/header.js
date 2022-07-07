import React from 'react'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Nav from './nav'

const Header = ({ heading, hero, icon, menu }) => {
  return (
    <Stack
      component='header'
      alignItems='center'
      sx={{
        background: `bottom / cover no-repeat url("${hero.url}")`,
        height: '44rem',
      }}>
      <Nav menu={menu} />
      <Typography
        variant='h1'
        sx={{
          color: theme => theme.palette.common.white,
          m: theme => `3rem ${theme.spacing(2)} 4rem`,
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
