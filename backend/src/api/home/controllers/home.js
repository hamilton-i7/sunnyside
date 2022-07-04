"use strict";

/**
 *  home controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::home.home", ({ strapi }) => ({
  async find(ctx) {
    const { query } = ctx;

    const entity = await strapi.entityService.findMany("api::home.home", {
      ...query,
      populate: {
        seo: {
          populate: {
            shareImage: true,
          },
        },
        nav: {
          populate: {
            logo: true,
            links: true,
          },
        },
        heroImageMobile: true,
        heroImageDesktop: true,
        highlights: {
          populate: {
            cta: true,
            imageMobile: true,
            imageDesktop: true,
          },
        },
        galleryMobile: true,
        galleryDesktop: true,
        clientTestimonials: {
          populate: {
            testimonies: {
              populate: {
                image: true,
              },
            },
          },
        },
        footer: {
          populate: {
            logo: true,
            links: true,
          },
        },
      },
    });

    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
    return this.transformResponse(sanitizedEntity);
  },
}));
