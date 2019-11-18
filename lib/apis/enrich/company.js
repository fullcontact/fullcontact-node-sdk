const API = require('../api');

/**
 * Company Enrich APIs
 *
 * @class CompanyEnrichAPI
 * @extends {API}
 */
class CompanyEnrichAPI extends API {
  /**
   * Creates an instance of CompanyEnrichAPI.
   *
   *
   * @memberOf CompanyEnrichAPI
   */
  constructor(config) {
    super(config);
  }

  /**
   * Enriches a company by domain (https://docs.fullcontact.com/#company-enrichment)
   *
   * @param {Object} body
   * @returns {Promise}
   *
   * @memberOf CompanyEnrichAPI
   */
  async enrich(body) {
    return this.request({
      method: 'POST',
      path: '/v3/company.enrich',
      body,
      json: true
    });
  }
}

module.exports = CompanyEnrichAPI;
