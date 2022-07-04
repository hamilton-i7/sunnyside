"use strict";

/**
 *  global controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::global.global", ({ strapi }) => ({
  async find(ctx) {
    const { query } = ctx;

    const entity = await strapi.entityService.findMany("api::global.global", {
      ...query,
      populate: {
        favicon: true,
        shareImage: true,
      },
    });

    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
    return this.transformResponse(sanitizedEntity);
  },
}));
