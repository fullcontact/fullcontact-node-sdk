const PersonEnrichAPI = require('./person');
const CompanyEnrichAPI = require('./company');
const StatsAPI = require('./stats');

/**
 * Enrich APIs
 *
 * @class EnrichAPIs
 */
class EnrichAPIs {
  /**
   * Creates an instance of EnrichAPIs.
   *
   * @param {Object} config
   *
   * @memberOf EnrichAPIs
   */
  constructor(config) {
    this._instances = {
      stats: new StatsAPI(config),
      person: new PersonEnrichAPI(config),
      company: new CompanyEnrichAPI(config)
    };
  }

  /**
   * Gets Person Enrich APIs
   *
   * @readonly
   *
   * @memberOf EnrichAPIs
   */
  get person() {
    return this._instances.person;
  }

  /**
   * Gets Company Enrich APIs
   *
   * @readonly
   *
   * @memberOf EnrichAPIs
   */
  get company() {
    return this._instances.company;
  }

  /**
   * Gets Stats APIs
   *
   * @readonly
   *
   * @memberOf EnrichAPIs
   */
  get stats() {
    return this._instances.stats;
  }
}

module.exports = EnrichAPIs;
