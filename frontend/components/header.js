import React from 'react'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Toolbar from '@mui/material/Toolbar'
import Nav from './nav'

const Header = ({ heading, hero, menu }) => {
  return (
    <Stack
      component='header'
      sx={{
        background: `center / cover no-repeat url("${hero.url}")`,
      }}>
      <Nav menu={menu} />
      <Toolbar />
      <Typography variant='h1'>{heading}</Typography>
    </Stack>
  )
}

export default Header
