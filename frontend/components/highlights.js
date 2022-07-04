import React from 'react'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { getStrapiMedia } from '../lib/media'

const Highlights = ({ highlights }) => {
  return (
    <Grid container component='main'>
      {highlights.map((highlight, index) =>
        highlight.imageAsBackground ? (
          <HighlightWithBackground
            key={highlight.id}
            title={highlight.title}
            description={highlight.description}
            background={getStrapiMedia(highlight.imageMobile)}
          />
        ) : (
          <HighlightWithImage
            key={highlight.id}
            title={highlight.title}
            description={highlight.description}
            image={getStrapiMedia(highlight.imageMobile)}
            sx={{
              flexDirection: { lg: index % 2 === 0 ? 'row-reverse' : 'row' },
            }}
          />
        ),
      )}
    </Grid>
  )
}

export default Highlights

const HighlightWithBackground = ({ title, description, background }) => {
  return (
    <Grid item xs={12} lg={6}>
      <Stack
        alignItems='center'
        justifyContent='end'
        sx={{
          background: `center / cover no-repeat url("${background.url}")`,
        }}>
        <Typography variant='h2'>{title}</Typography>
        <Typography variant='body1' component='p'>
          {description}
        </Typography>
      </Stack>
    </Grid>
  )
}

const HighlightWithImage = ({ title, description, image, sx }) => {
  return (
    <Grid container item xs={12} sx={sx}>
      <Grid item xs={12} lg={6}>
        <Box component='img' src={image.url} alt={image.alternativeText} />
      </Grid>
      <Grid item xs={12} lg={6}>
        <Stack alignItems='center' justifyContent='center'>
          <Typography variant='h2'>{title}</Typography>
          <Typography variant='body1' component='p'>
            {description}
          </Typography>
        </Stack>
      </Grid>
    </Grid>
  )
}
