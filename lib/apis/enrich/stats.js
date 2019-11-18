const API = require('../api');

/**
 * Stats APIs
 *
 * @class StatsAPI
 * @extends {API}
 */
class StatsAPI extends API {
  /**
   * Creates an instance of StatsAPI.
   *
   *
   * @memberOf StatsAPI
   */
  constructor(config) {
    super(config);
  }

  /**
   * Get stats (https://docs.fullcontact.com/#stats)
   *
   * @param {Object} body
   * @returns {Promise}
   *
   * @memberOf StatsAPI
   */
  async getStats(body) {
    return this.request({
      method: 'POST',
      path: '/v3/stats.get',
      body,
      json: true
    });
  }

  /**
   * Gets person stats (https://docs.fullcontact.com/#stats)
   *
   * @returns {Promise}
   *
   * @memberOf StatsAPI
   */
  async person() {
    return this.getStats({ stats: ['person'] });
  }

  /**
   * Gets company stats (https://docs.fullcontact.com/#stats)
   *
   * @returns {Promise}
   *
   * @memberOf StatsAPI
   */
  async company() {
    return this.getStats({ stats: ['company'] });
  }

  /**
   * Gets all stats (https://docs.fullcontact.com/#stats)
   *
   * @returns {Promise}
   *
   * @memberOf StatsAPI
   */
  async all() {
    return this.getStats({ stats: ['company', 'person'] });
  }
}

module.exports = StatsAPI;
