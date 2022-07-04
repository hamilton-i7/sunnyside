import Seo from '../components/seo'
import { fetchAPI } from '../lib/api'

const Home = ({ content }) => {
  const { seo } = content.attributes
  return (
    <>
      <Seo seo={seo} />
      <h1>Hello Next</h1>
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
