import '../styles/globals.css'
import App from 'next/app'
import Head from 'next/head'
import { fetchAPI } from '../lib/api'
import { getStrapiMedia } from '../lib/media'
import { createContext } from 'react'
import { GlobalStyles, ThemeProvider } from '@mui/material'
import { globalStyles } from '../styles/theme/globals'
import lightTheme from '../styles/theme/lightTheme'

export const GlobalContext = createContext({})

const MyApp = ({ Component, pageProps }) => {
  const { global } = pageProps
  return (
    <ThemeProvider theme={lightTheme}>
      <Head>
        <link rel='icon' href={getStrapiMedia(global.attributes.favicon).url} />
      </Head>
      <GlobalContext.Provider value={global.attributes}>
        <GlobalStyles styles={globalStyles} />
        <Component {...pageProps} />
      </GlobalContext.Provider>
    </ThemeProvider>
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
