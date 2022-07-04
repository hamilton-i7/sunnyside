/**
 * Get full Strapi URL from path
 * @param {string} path Path of the URL
 * @returns {string} Full Strapi URL
 */
export const getStrapiURL = (path = '') =>
  `${process.env.PUBLIC_API_URL || 'http://localhost:1337'}${path}`
