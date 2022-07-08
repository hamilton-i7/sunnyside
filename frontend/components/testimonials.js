import React from 'react'
import Stack from '@mui/material/Stack'
import Grid from '@mui/material/Grid'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import { getStrapiMedia } from '../lib/media'

const Testimonials = ({ heading, testimonials }) => {
  return (
    <Grid
      container
      component='section'
      columnSpacing={{ xs: 4 }}
      sx={{
        padding: {
          xs: '6rem 2rem',
          sm: '6rem 12rem',
          md: '6rem 4rem',
          lg: '12rem 8rem',
          desktop: '12rem 10%',
        },
        textAlign: 'center',
      }}>
      <Grid
        item
        xs={12}
        sx={{
          mb: { xs: '2rem', md: '6rem' },
        }}>
        <Typography
          component='h2'
          variant='h3'
          sx={{
            color: theme => theme.palette.neutral.grayishBlue,
            letterSpacing: '0.5rem',
            textTransform: 'uppercase',
          }}>
          {heading}
        </Typography>
      </Grid>
      {testimonials.map(testimony => (
        <Grid key={testimony.id} item xs={12} md={4}>
          <Testimony
            image={getStrapiMedia(testimony.image)}
            testimony={testimony.testimony}
            author={testimony.author}
            position={testimony.position}
          />
        </Grid>
      ))}
    </Grid>
  )
}

export default Testimonials

const Testimony = ({ image, testimony, author, position }) => {
  return (
    <Stack alignItems='center'>
      <Avatar
        src={image.url}
        alt={image.alternativeText}
        sx={{ height: '5.6rem', width: '5.6rem' }}
      />
      <Typography
        variant='body1'
        component='p'
        sx={{
          color: theme => theme.palette.neutral.veryDarkGrayishBlue,
          my: '3rem',
        }}>
        {testimony}
      </Typography>
      <Typography
        variant='subtitle1'
        component='h3'
        sx={{ color: theme => theme.palette.tertiary.dark }}>
        {author}
      </Typography>
      <Typography
        variant='caption'
        component='h4'
        sx={{ color: theme => theme.palette.neutral.grayishBlue }}>
        {position}
      </Typography>
    </Stack>
  )
}
