import Head from 'next/head'
import React, { useContext } from 'react'
import { getStrapiMedia } from '../lib/media'
import { GlobalContext } from '../pages/_app'

const Seo = ({ seo }) => {
  const { siteName, shareImage } = useContext(GlobalContext)
  const fullSeo = {
    siteName,
    shareImage: getStrapiMedia(shareImage),
    ...seo,
  }

  return (
    <Head>
      <title>{fullSeo.title}</title>
      <meta property='og:site_name' content={fullSeo.siteName} />
      <meta property='og:title' content={fullSeo.title} />

      <meta name='description' content={fullSeo.description} />
      <meta property='og:description' content={fullSeo.description} />

      <meta name='image' content={fullSeo.shareImage.url} />
      <meta property='og:image' content={fullSeo.shareImage.url} />

      <meta property='og:type' content={fullSeo.type} />
      <meta property='og:url' content={fullSeo.url} />
    </Head>
  )
}

export default Seo
