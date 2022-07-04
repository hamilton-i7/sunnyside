import { getStrapiURL } from './api'

export const getStrapiMedia = media => {
  const { url, alternativeText } = media.data.attributes
  const imageUrl = url.startsWith('/') ? getStrapiURL(url) : url
  return { url: imageUrl, alternativeText }
}
