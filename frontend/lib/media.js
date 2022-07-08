import { getStrapiURL } from './api'

/**
 *
 * @param {object} media The source for the image
 * @param {boolean} fromCollection Indicates whether the source is from an array of images in Strapi
 * @returns Object containing the image's url and alternative text
 */
export const getStrapiMedia = (media, fromCollection = false) => {
  const { url, alternativeText } = fromCollection
    ? media.attributes
    : media.data.attributes
  const imageUrl = url.startsWith('/') ? getStrapiURL(url) : url
  return { url: imageUrl, alternativeText }
}
