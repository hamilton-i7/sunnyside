import React, { useState } from 'react'
import Link from 'next/link'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Menu from '@mui/material/Menu'
import MuiLink from '@mui/material/Link'
import { getStrapiMedia } from '../lib/media'

const Nav = ({ menu }) => {
  const [anchorEl, setAnchorEl] = useState(null)
  const logo = getStrapiMedia(menu.logo)

  const handleMenu = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <AppBar>
      <Toolbar>
        <Link href='#'>
          <MuiLink>
            <Box component='img' src={logo.url} alt={logo.alternativeText} />
          </MuiLink>
        </Link>
        <div>
          <IconButton
            size='large'
            color='inherit'
            aria-label='menu'
            aria-haspopup='true'
            onClick={handleMenu}>
            <MenuIcon />
          </IconButton>
          <Menu
            id='menu-appbar'
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}>
            {menu.links.map(link => (
              <MenuItem key={link.id} onClick={handleClose}>
                <Link href={link.url}>
                  <MuiLink>{link.label}</MuiLink>
                </Link>
              </MenuItem>
            ))}
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default Nav
