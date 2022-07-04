import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const Header = ({ heading }) => {
  return (
    <Box component='header'>
      <Typography variant='h1'>{heading}</Typography>
    </Box>
  )
}

export default Header
