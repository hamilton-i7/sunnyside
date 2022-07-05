import React from 'react'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { getStrapiMedia } from '../lib/media'
import { TextButton } from './button'

const Highlights = ({ highlights }) => {
  return (
    <Grid container component='main'>
      {highlights.map((highlight, index) =>
        highlight.imageAsBackground ? (
          <HighlightWithBackground key={highlight.id} highlight={highlight} />
        ) : (
          <HighlightWithImage
            key={highlight.id}
            highlight={highlight}
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

const HighlightWithBackground = ({ highlight }) => {
  const { title, description, imageMobile } = highlight
  const image = getStrapiMedia(imageMobile)

  return (
    <Grid item xs={12} lg={6}>
      <Stack
        alignItems='center'
        justifyContent='end'
        sx={{
          background: `center / cover no-repeat url("${image.url}")`,
        }}>
        <Typography variant='h2'>{title}</Typography>
        <Typography variant='body1' component='p'>
          {description}
        </Typography>
      </Stack>
    </Grid>
  )
}

const HighlightWithImage = ({ highlight, sx }) => {
  const { imageMobile, title, description, cta, color } = highlight
  const image = getStrapiMedia(imageMobile)

  return (
    <Grid container item xs={12} sx={sx}>
      <Grid item xs={12} lg={6}>
        <Box component='img' src={image.url} alt={image.alternativeText} />
      </Grid>
      <Grid item xs={12} lg={6}>
        <Stack
          sx={{
            alignItems: 'center',
            gap: '2.4rem',
            justifyContent: 'center',
            padding: '6rem 3rem',
            textAlign: 'center',
          }}>
          <Typography
            variant='h2'
            sx={{ color: theme => theme.palette.neutral.darkBlue }}>
            {title}
          </Typography>
          <Typography
            variant='body1'
            component='p'
            sx={{ color: theme => theme.palette.neutral.darkDrayishBlue }}>
            {description}
          </Typography>
          <TextButton underlineColor={color} href={cta.url}>
            {cta.label}
          </TextButton>
        </Stack>
      </Grid>
    </Grid>
  )
}
