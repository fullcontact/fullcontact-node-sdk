const assert = require('assert');
const chance = require('chance')();
const FullContact = require('../lib/fullcontact');
const EnrichAPIs = require('../lib/apis/enrich');

describe('FullContact', () => {
  it('should create instances', () => {
    const instance = FullContact({
      apiKey: chance.string()
    });

    assert.ok(instance.enrich instanceof EnrichAPIs);
  });

  it('should configure apiKey', () => {
    const conf = {
      apiKey: chance.string()
    };

    const instance = FullContact(conf);
    assert.equal(instance.enrich.person._apiKey, conf.apiKey);
    assert.equal(instance.enrich.company._apiKey, conf.apiKey);
    assert.equal(instance.enrich.stats._apiKey, conf.apiKey);
  });
});
