'use strict';

const StripeResource = require('../../StripeResource');

module.exports = StripeResource.extend({
  path: 'terminal/readers',
  includeBasic: ['create', 'list', 'retrieve', 'update', 'del'],
});
