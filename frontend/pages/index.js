import Gallery from '../components/gallery'
import Header from '../components/header'
import Highlights from '../components/highlights'
import Seo from '../components/seo'
import Testimonials from '../components/testimonials'
import { fetchAPI } from '../lib/api'
import { getStrapiMedia } from '../lib/media'

const Home = ({ content }) => {
  const {
    seo,
    heading,
    heroImageMobile,
    highlights,
    clientTestimonials,
    galleryMobile,
  } = content.attributes
  const heroMobile = getStrapiMedia(heroImageMobile)

  return (
    <>
      <Seo seo={seo} />
      <Header heading={heading} />
      <Highlights highlights={highlights} />
      <Testimonials
        heading={clientTestimonials.heading}
        testimonials={clientTestimonials.testimonies}
      />
      <Gallery images={galleryMobile.data} />
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
