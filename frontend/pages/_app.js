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
        <link rel='icon' href={getStrapiMedia(global.attributes.favicon).url} />
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
