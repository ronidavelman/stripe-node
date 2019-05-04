'use strict';

const StripeResource = require('../../StripeResource');

module.exports = StripeResource.extend({
  path: 'terminal/locations',
  includeBasic: ['create', 'list', 'retrieve', 'update', 'del'],
});
