import React from 'react'
import Stack from '@mui/material/Stack'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import { getStrapiMedia } from '../lib/media'

const Testimonials = ({ heading, testimonials }) => {
  return (
    <Stack>
      <Typography component='h2' variant='h3'>
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
      <Avatar src={image.url} alt={image.alternativeText} />
      <Typography variant='body1' component='p'>
        {testimony}
      </Typography>
      <Typography variant='subtitle1' component='h3'>
        {author}
      </Typography>
      <Typography variant='caption' component='h4'>
        {position}
      </Typography>
    </Stack>
  )
}
