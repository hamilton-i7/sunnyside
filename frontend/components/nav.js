import React, { cloneElement, useState } from 'react'
import Link from 'next/link'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Menu from '@mui/material/Menu'
import MuiLink from '@mui/material/Link'
import useScrollTrigger from '@mui/material/useScrollTrigger'
import PropTypes from 'prop-types'
import { getStrapiMedia } from '../lib/media'

const ElevationScroll = ({ children }) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  })

  return cloneElement(children, {
    elevation: trigger ? 4 : 0,
    sx: {
      background: theme => (trigger ? theme.palette.primary.main : 'none'),
    },
  })
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
}

const Nav = ({ menu, children, window }) => {
  const [anchorEl, setAnchorEl] = useState(null)
  const logo = getStrapiMedia(menu.logo)

  const handleMenu = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <ElevationScroll children={children}>
      <AppBar component='nav' elevation={0}>
        <Toolbar
          sx={{
            justifyContent: 'space-between',
          }}>
          <Link href='#'>
            <MuiLink
              sx={{
                maxWidth: '10.2rem',
                width: '20%',
              }}>
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
              <MenuIcon sx={{ color: theme => theme.palette.common.white }} />
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
                    <MuiLink underline='none'>{link.label}</MuiLink>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  )
}

export default Nav
