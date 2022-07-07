import React from 'react'
import Link from 'next/link'
import MuiLink from '@mui/material/Link'
import Box from '@mui/material/Box'

const Svg = ({ svg, color = 'currentColor', sx }) => {
  const svgContent = (
    <Box
      component='svg'
      xmlns={svg.xmlns}
      sx={{
        fill: color,
        height: `${svg.height / 10}rem`,
        width: `${svg.width / 10}rem`,
        ...sx,
      }}>
      <path d={svg.path} />
    </Box>
  )
  return svg.url ? (
    <Link href={svg.url}>
      <MuiLink underline='none'>{svgContent}</MuiLink>
    </Link>
  ) : (
    { svgContent }
  )
}

export default Svg
