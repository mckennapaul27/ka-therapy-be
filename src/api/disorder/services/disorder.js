'use strict';

/**
 * disorder service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::disorder.disorder');
