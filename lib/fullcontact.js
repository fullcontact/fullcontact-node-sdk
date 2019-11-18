const EnrichAPI = require('./apis/enrich');

/**
 *
 *
 * @class FullContact
 */
class FullContact {
  /**
   * Creates an instance of FullContact.
   * Config: {
   *  apiKey,
   *  baseUrl
   * }
   *
   * @param {Object} config
   *
   * @memberOf FullContact
   */
  constructor(config) {
    this._instances = {
      enrich: new EnrichAPI(config)
    };
  }

  /**
   * Gets Enrich APIs
   *
   * @readonly
   *
   * @memberOf FullContact
   */
  get enrich() {
    return this._instances.enrich;
  }
}

function Instantiate(config) {
  return new FullContact(config);
}

Instantiate.FullContact = FullContact;

module.exports = Instantiate;
