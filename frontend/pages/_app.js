import '../styles/globals.css'
import App from 'next/app'
import Head from 'next/head'
import { fetchAPI } from '../lib/api'
import { getStrapiMedia } from '../lib/media'
import { createContext } from 'react'

export const GlobalContext = createContext({})

const MyApp = ({ Component, pageProps }) => {
  const { global } = pageProps
  return (
    <>
      <Head>
        <link rel='icon' href={getStrapiMedia(global.attributes.favicon)} />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Barlow:wght@600&family=Fraunces:opsz,wght@9..144,700;9..144,900&display=swap'
          rel='stylesheet'
        />
      </Head>
      <GlobalContext.Provider value={global.attributes}>
        <Component {...pageProps} />
      </GlobalContext.Provider>
    </>
  )
}

export default MyApp

MyApp.getInitialProps = async ctx => {
  const appProps = await App.getInitialProps(ctx)

  // Fetch global site settings from Strapi
  const globalRes = await fetchAPI('/global')
  return {
    ...appProps,
    pageProps: { global: globalRes },
  }
}
