'use strict';

var StripeResource = require('../StripeResource');

/**
 * CustomerBalanceTransactions is a unique resource in that, upon instantiation,
 * requires a customerId, and therefore each of its methods only
 * require the transactionId argument.
 *
 * This streamlines the API specifically for the case of accessing a customer balance tranaction
 * on a returned customer object.
 *
 * E.g. customerObject.transactions.retrieve(transactionId)
 * (As opposed to the also-supported stripe.customers.retrieveTaxId(customerId, transactionId))
 */
module.exports = StripeResource.extend({
  path: 'customers/{customerId}/customer_balance_transactions',
  includeBasic: ['create', 'list', 'retrieve'],
});
