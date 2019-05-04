'use strict';

const StripeResource = require('../StripeResource');

module.exports = StripeResource.extend({
  path: 'skus',

  includeBasic: ['create', 'list', 'retrieve', 'update', 'del'],
});
