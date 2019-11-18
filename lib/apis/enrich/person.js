const API = require('../api');

/**
 * Person Enrich APIs
 *
 * @class PersonEnrichAPI
 * @extends {API}
 */
class PersonEnrichAPI extends API {
  /**
   * Creates an instance of PersonEnrichAPI.
   *
   *
   * @memberOf PersonEnrichAPI
   */
  constructor(config) {
    super(config);
  }

  /**
   * Enriches a person by email, twitter or name (https://docs.fullcontact.com/#person-enrichment)
   *
   * @param {Object} body
   * @returns {Promise}
   *
   * @memberOf PersonEnrichAPI
   */
  async enrich(body) {
    return this.request({
      method: 'POST',
      path: '/v3/person.enrich',
      body,
      json: true
    });
  }

  /**
   * Subscribes to a person by email, twitter or name (https://docs.fullcontact.com/#subscriptions)
   *
   * @param {Object} body
   * @returns {Promise}
   *
   * @memberOf PersonEnrichAPI
   */
  async subscribe(body) {
    return this.request({
      method: 'POST',
      path: '/v3/person.subscribe',
      body,
      json: true
    });
  }

  /**
   * Tests a subscription to a person (https://docs.fullcontact.com/#subscriptions)
   *
   * @param {String} subscriptionId
   * @returns {Promise}
   *
   * @memberOf PersonEnrichAPI
   */
  async testSubscription(subscriptionId) {
    return this.request({
      method: 'POST',
      path: '/v3/person.testSubscription',
      body: { subscriptionId },
      json: true
    });
  }

  /**
   * Unsubscribes from a person (https://docs.fullcontact.com/#subscriptions)
   *
   * @param {String} subscriptionId
   * @returns {Promise}
   *
   * @memberOf PersonEnrichAPI
   */
  async unsubscribe(subscriptionId) {
    return this.request({
      method: 'POST',
      path: '/v3/person.unsubscribe',
      body: { subscriptionId },
      json: true
    });
  }
}

module.exports = PersonEnrichAPI;
