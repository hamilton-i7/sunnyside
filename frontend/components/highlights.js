import React from 'react'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { getStrapiMedia } from '../lib/media'
import { TextButton } from './button'
import { useSmallScreenMatcher } from '../lib/responsive'
import { useTheme } from '@mui/material'

const Highlights = ({ highlights }) => {
  const theme = useTheme()

  return (
    <Grid container component='main'>
      {highlights.map((highlight, index) =>
        highlight.imageAsBackground ? (
          <HighlightWithBackground
            key={highlight.id}
            highlight={highlight}
            theme={theme}
          />
        ) : (
          <HighlightWithImage
            key={highlight.id}
            highlight={highlight}
            index={index}
            theme={theme}
          />
        ),
      )}
    </Grid>
  )
}

export default Highlights

const HighlightWithBackground = ({ highlight, theme }) => {
  const matchesSmallScreen = useSmallScreenMatcher(theme)

  const { title, description, imageMobile, imageDesktop, color } = highlight
  const image = matchesSmallScreen
    ? getStrapiMedia(imageDesktop)
    : getStrapiMedia(imageMobile)

  return (
    <Grid item xs={12} sm={6}>
      <Box
        sx={{
          alignItems: 'center',
          background: {
            xs: `center / cover no-repeat url("${image.url}")`,
            sm: `center / contain no-repeat url("${image.url}")`,
          },
          color: theme => theme.palette[color].dark,
          pt: `${(600 / 720) * 100}%`,
          position: { sm: 'relative' },
          textAlign: 'center',
          width: '100%',
        }}>
        <Stack
          sx={{
            gap: '2.4rem',
            px: {
              xs: '3rem',
              sm: '2rem',
              lg: '18%',
              desktop: '23%',
            },
            py: '6rem',
            [theme.breakpoints.up('sm')]: {
              position: 'absolute',
              py: 0,
              left: '50%',
              top: '70%',
              transform: 'translate(-50%, -50%)',
              width: '100%',
            },
          }}>
          <Typography variant='h2'>{title}</Typography>
          <Typography
            variant='body1'
            component='p'
            sx={{
              display: '-webkit-box',
              overflow: 'hidden',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 3,
            }}>
            {description}
          </Typography>
        </Stack>
      </Box>
    </Grid>
  )
}

const HighlightWithImage = ({ highlight, index, theme }) => {
  const matchesSmallScreen = useSmallScreenMatcher(theme)

  const { title, description, imageMobile, imageDesktop, color, cta } =
    highlight
  const image = matchesSmallScreen
    ? getStrapiMedia(imageDesktop)
    : getStrapiMedia(imageMobile)

  return (
    <Grid
      container
      item
      xs={12}
      sx={{
        flexDirection: { sm: index % 2 === 0 ? 'row-reverse' : 'row' },
        textAlign: { xs: 'center', sm: 'start' },
      }}>
      <Grid item xs={12} sm={6}>
        <Box component='img' src={image.url} alt={image.alternativeText} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Stack
          sx={{
            alignItems: { xs: 'center', sm: 'start' },
            gap: { xs: '2.4rem', sm: '0.5rem', md: '3rem' },
            height: '100%',
            justifyContent: 'center',
            padding: {
              xs: '6rem 3rem',
              sm: '2rem 1.6rem',
              md: '6rem 8rem',
              lg: '10rem 16%',
              desktop: '10rem 18%',
            },
          }}>
          <Typography
            variant='h2'
            sx={{ color: theme => theme.palette.tertiary.dark }}>
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
