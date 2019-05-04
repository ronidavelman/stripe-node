'use strict';

const StripeResource = require('../../StripeResource');

module.exports = StripeResource.extend({
  path: 'radar/value_list_items',
  includeBasic: ['create', 'list', 'retrieve', 'del'],
});
