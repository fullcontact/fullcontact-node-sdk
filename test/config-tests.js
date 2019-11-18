const assert = require('assert');
const config = require('../lib/apis/config');

describe('Config', () => {
  it('should have an api url', () =>
    assert.ok(config.url && config.url.length > 0));
  it('should have expected api url', () =>
    assert.equal('https://api.fullcontact.com', config.url));
});
