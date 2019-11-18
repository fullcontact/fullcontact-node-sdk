const request = require('request-promise');
const config = require('./config');

/**
 * Base Class for all API Resources.
 *
 * @class API
 */
class API {
  constructor(c = {}) {
    this._baseUrl = c.baseUrl || config.url;
    this._apiKey = c.apiKey;
    this._ua = c.userAgent || 'fullcontact-node-sdk';
  }

  /**
   * Gets the base URL from the config.
   *
   * @readonly
   *
   * @memberOf API
   */
  get apiUrl() {
    return this._baseUrl;
  }

  /**
   * Gets the base URL from the config.
   *
   * @readonly
   *
   * @memberOf API
   */
  get userAgent() {
    return this._ua;
  }

  /**
   * Sets the Authorization header with the specified access_token.
   *
   * @param {string} accessToken
   * @param {object} [headers={}]
   * @returns {Promise}
   *
   * @memberOf OAuthBased
   */
  authorize(accessToken, headers = {}) {
    headers.Authorization = `Bearer ${accessToken}`;
    return headers;
  }

  /**
   * Performs the HTTP Request to the specified resource.
   *
   * @param {String} auth
   * @param {Object} [opts={}]
   * @returns {Promise}
   *
   * @memberOf API
   */
  async request(opts = {}) {
    const headers = this.authorize(this._apiKey, opts.headers);
    return request({
      method: opts.method || 'GET',
      url: `${this.apiUrl}${opts.path}`,
      qs: opts.qs,
      body: opts.body,
      headers: Object.assign({ 'User-Agent': this.userAgent }, headers),
      form: opts.form,
      formData: opts.formData,
      json: opts.json
    });
  }
}

module.exports = API;
