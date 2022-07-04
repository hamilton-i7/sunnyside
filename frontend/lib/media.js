import { getStrapiURL } from './api'

export const getStrapiMedia = (media, fromCollection = false) => {
  const { url, alternativeText } = fromCollection
    ? media.attributes
    : media.data.attributes
  const imageUrl = url.startsWith('/') ? getStrapiURL(url) : url
  return { url: imageUrl, alternativeText }
}
