'use strict';

const StripeResource = require('../StripeResource');
const stripeMethod = StripeResource.method;
const utils = require('../utils');

module.exports = StripeResource.extend({
  path: 'invoices',
  includeBasic: ['create', 'list', 'retrieve', 'update', 'del'],

  finalizeInvoice: stripeMethod({
    method: 'POST',
    path: '{invoiceId}/finalize',
    urlParams: ['invoiceId'],
  }),

  markUncollectible: stripeMethod({
    method: 'POST',
    path: '{invoiceId}/mark_uncollectible',
    urlParams: ['invoiceId'],
  }),

  pay: stripeMethod({
    method: 'POST',
    path: '{invoiceId}/pay',
    urlParams: ['invoiceId'],
  }),

  retrieveLines: stripeMethod({
    method: 'GET',
    path: '{invoiceId}/lines',
    urlParams: ['invoiceId'],
  }),

  retrieveUpcoming: stripeMethod({
    method: 'GET',
    path({invoiceOptionsOrCustomerId, invoiceOptionsOrSubscriptionId}) {
      let url = 'upcoming?';
      let hasParam = false;

      // If you pass just a hash with the relevant parameters, including customer id inside.
      if (
        invoiceOptionsOrCustomerId &&
        typeof invoiceOptionsOrCustomerId === 'object'
      ) {
        return url + utils.stringifyRequestData(invoiceOptionsOrCustomerId);
      }

      // Legacy implementation where the first parameter is a customer id as a string
      if (
        invoiceOptionsOrCustomerId &&
        typeof invoiceOptionsOrCustomerId === 'string'
      ) {
        url = `${url}customer=${invoiceOptionsOrCustomerId}`;
        hasParam = true;
      }

      // Legacy support where second argument is the subscription id
      if (
        invoiceOptionsOrSubscriptionId &&
        typeof invoiceOptionsOrSubscriptionId === 'string'
      ) {
        return `${url +
          (hasParam ? '&' : '')}subscription=${invoiceOptionsOrSubscriptionId}`;
      } else if (
        invoiceOptionsOrSubscriptionId &&
        typeof invoiceOptionsOrSubscriptionId === 'object'
      ) {
        return (
          url +
          (hasParam ? '&' : '') +
          utils.stringifyRequestData(invoiceOptionsOrSubscriptionId)
        );
      }
      return url;
    },
    urlParams: [
      'optional!invoiceOptionsOrCustomerId',
      'optional!invoiceOptionsOrSubscriptionId',
    ],
  }),

  sendInvoice: stripeMethod({
    method: 'POST',
    path: '{invoiceId}/send',
    urlParams: ['invoiceId'],
  }),

  voidInvoice: stripeMethod({
    method: 'POST',
    path: '{invoiceId}/void',
    urlParams: ['invoiceId'],
  }),
});
