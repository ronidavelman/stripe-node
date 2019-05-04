'use strict';

var resources = require('../../lib/stripe').resources;
var stripe = require('../../testUtils').getSpyableStripe();
var expect = require('chai').expect;

var CUSTOMER_TEST_ID = 'cus_123';
var TRANSACTION_TEST_ID = 'cbtxn_123';

var taxId = new resources.CustomerBalanceTransactions(
  stripe,
  {customerId: CUSTOMER_TEST_ID}
);

// Use spy from existing resource:
taxId._request = stripe.customers._request;

describe('CustomerBalanceTransaction Resource', function() {
  describe('create', function() {
    it('Sends the correct request', function() {
      var data = {
        amount: 1234,
        currency: 'usd',
      };
      taxId.create(data);
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/customers/' + CUSTOMER_TEST_ID + '/customer_balance_transactions',
        data: data,
        headers: {},
      });
    });
  });

  describe('list', function() {
    it('Sends the correct request', function() {
      taxId.list();
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/customers/' + CUSTOMER_TEST_ID + '/customer_balance_transactions',
        data: {},
        headers: {},
      });
    });
  });

  describe('retrieve', function() {
    it('Sends the correct request', function() {
      taxId.retrieve(TRANSACTION_TEST_ID);
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/customers/' + CUSTOMER_TEST_ID + '/customer_balance_transactions/' + TRANSACTION_TEST_ID,
        data: {},
        headers: {},
      });
    });
  });
});
