import React from 'react'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import { getStrapiMedia } from '../lib/media'

const Gallery = ({ images }) => {
  return (
    <Grid container>
      {images.map(image => {
        const imageObj = getStrapiMedia(image, true)
        return (
          <Grid item key={image.id} xs={6} sm={3}>
            <Box
              component='img'
              src={imageObj.url}
              alt={imageObj.alternativeText}
            />
          </Grid>
        )
      })}
    </Grid>
  )
}

export default Gallery
