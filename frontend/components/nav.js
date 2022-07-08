import React, { useState } from 'react'
import Link from './link'
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
import { alpha } from '@mui/material'

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
          minHeight: { md: '8rem' },
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
            size='small'
            color='inherit'
            aria-label='menu'
            aria-haspopup='true'
            onClick={handleMenu}
            sx={{
              display: { sm: 'none' },
              fontSize: '3.2rem',
            }}>
            <MenuIcon
              fontSize='inherit'
              sx={{ color: theme => theme.palette.common.white }}
            />
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
                '&::before': {
                  backgroundColor: theme => theme.palette.common.white,
                  clipPath: 'polygon(100% 0, 0% 100%, 100% 100%)',
                  content: '""',
                  height: '6rem',
                  position: 'absolute',
                  right: 0,
                  top: '-2rem',
                  width: '6rem',
                },
              },
              '& .MuiPaper-root': {
                borderRadius: 0,
                mt: '2.4rem',
                maxWidth: '34.3rem',
                overflow: 'visible',
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
        <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
          {menu.links.map(link =>
            link.variant === 'contained' ? (
              <ContainedButton
                key={link.id}
                component='li'
                onClick={handleClose}
                neutral
                sx={{
                  alignSelf: 'center',
                  backgroundColor: theme => theme.palette.common.white,
                  color: theme => theme.palette.tertiary.dark,
                  ml: '3rem',
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
                sx={{ borderRadius: '2.4rem', justifyContent: 'center' }}>
                <Link href={link.url}>
                  <MuiLink
                    underline='none'
                    sx={{
                      color: theme => theme.palette.common.white,
                    }}>
                    {link.label}
                  </MuiLink>
                </Link>
              </MenuItem>
            ),
          )}
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Nav
