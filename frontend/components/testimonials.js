import React from 'react'
import Stack from '@mui/material/Stack'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import { getStrapiMedia } from '../lib/media'

const Testimonials = ({ heading, testimonials }) => {
  return (
    <Stack
      component='section'
      sx={{
        gap: '4rem',
        padding: '6rem 12rem',
        textAlign: 'center',
      }}>
      <Typography
        component='h2'
        variant='h3'
        sx={{
          color: theme => theme.palette.neutral.grayishBlue,
          letterSpacing: '0.5rem',
          mb: '1rem',
          textTransform: 'uppercase',
        }}>
        {heading}
      </Typography>
      {testimonials.map(testimony => (
        <Testimony
          key={testimony.id}
          image={getStrapiMedia(testimony.image)}
          testimony={testimony.testimony}
          author={testimony.author}
          position={testimony.position}
        />
      ))}
    </Stack>
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
