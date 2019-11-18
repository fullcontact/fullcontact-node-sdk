const assert = require('assert');

const API = require('../lib/apis/api');
const chance = require('chance')();

describe('API', () => {
  it('should add auth header', () => {
    const instance = new API();
    const accessToken = chance.string();
    const headers = {};

    const r = instance.authorize(accessToken, headers);
    assert.equal(r.Authorization, `Bearer ${accessToken}`);
  });

  it('should replace url', () => {
    const baseUrl = chance.url();
    const instance = new API({ baseUrl });

    assert.equal(instance.apiUrl, baseUrl);
  });
});

describe('API', () => {
  it('should replace user-agent', () => {
    const userAgent = chance.string();
    const instance = new API({ userAgent });

    assert.equal(instance.userAgent, userAgent);
  });
});
