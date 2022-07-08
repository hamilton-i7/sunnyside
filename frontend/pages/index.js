import { useTheme } from '@mui/material'
import Footer from '../components/footer'
import Gallery from '../components/gallery'
import Header from '../components/header'
import Highlights from '../components/highlights'
import Seo from '../components/seo'
import Testimonials from '../components/testimonials'
import { fetchAPI } from '../lib/api'
import { getStrapiMedia } from '../lib/media'
import { useSmallScreenMatcher } from '../lib/responsive'

const Home = ({ content }) => {
  const {
    seo,
    nav,
    heading,
    heroIcon,
    heroImageMobile,
    heroImageDesktop,
    highlights,
    clientTestimonials,
    galleryMobile,
    galleryDesktop,
    footer,
  } = content.attributes
  const heroMobile = getStrapiMedia(heroImageMobile)
  const heroDesktop = getStrapiMedia(heroImageDesktop)
  const heroIconObj = getStrapiMedia(heroIcon)

  const theme = useTheme()
  const matchesSmallScreen = useSmallScreenMatcher(theme)

  return (
    <>
      <Seo seo={seo} />
      <Header
        heading={heading}
        heroImage={matchesSmallScreen ? heroDesktop : heroMobile}
        icon={heroIconObj}
        menu={nav}
      />
      <Highlights highlights={highlights} />
      <Testimonials
        heading={clientTestimonials.heading}
        testimonials={clientTestimonials.testimonies}
      />
      <Gallery
        images={matchesSmallScreen ? galleryDesktop.data : galleryMobile.data}
      />
      <Footer footer={footer} />
    </>
  )
}

export default Home

export const getStaticProps = async () => {
  try {
    const homeRes = await fetchAPI('/home')

    return {
      props: {
        content: homeRes,
      },
    }
  } catch (error) {
    return { notFound: true }
  }
}
