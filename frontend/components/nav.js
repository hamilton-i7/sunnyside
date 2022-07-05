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
import { ContainedButton } from './button'
import Typography from '@mui/material/Typography'

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
    <AppBar
      component='nav'
      position='static'
      elevation={0}
      sx={{ background: 'none' }}>
      <Toolbar
        sx={{
          justifyContent: 'space-between',
        }}>
        <Link href='#'>
          <MuiLink
            sx={{
              maxWidth: '10.9rem',
              width: '32%',
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
            elevation={2}
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            sx={{
              '& .MuiList-root': {
                display: 'flex',
                flexDirection: 'column',
                py: '1.6rem',
              },
              '& .MuiPaper-root': {
                borderRadius: 0,
                mt: '2.4rem',
                maxWidth: '34.3rem',
                width: '100%',
              },
            }}>
            {menu.links.map(link =>
              link.variant === 'contained' ? (
                <ContainedButton
                  key={link.id}
                  component='li'
                  onClick={handleClose}
                  sx={{
                    alignSelf: 'center',
                    mb: '1.6rem',
                    mt: '1rem',
                  }}>
                  <Link href={link.url}>
                    <Typography component='a' variant='button'>
                      {link.label}
                    </Typography>
                  </Link>
                </ContainedButton>
              ) : (
                <MenuItem
                  key={link.id}
                  onClick={handleClose}
                  sx={{ justifyContent: 'center' }}>
                  <Link href={link.url}>
                    <MuiLink
                      underline='none'
                      sx={{
                        color: theme => theme.palette.neutral.darkDrayishBlue,
                      }}>
                      {link.label}
                    </MuiLink>
                  </Link>
                </MenuItem>
              ),
            )}
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default Nav
