const StatsAPI = require('../../lib/apis/enrich/stats');
const config = require('../../lib/apis/config');
const chance = require('chance')();
const nock = require('nock');

nock.disableNetConnect();

describe('StatsAPI', () => {
  it('should get person stats', async () => {
    const apiKey = chance.string();
    const instance = new StatsAPI({ apiKey });

    const body = { stats: ['person'] };

    const scope = nock(config.url, {
      req_headers: { Authorization: `Bearer ${apiKey}` }
    })
      .post('/v3/stats.get', body)
      .reply(200, {});

    await instance.person();
    scope.done();
  });

  it('should get company stats', async () => {
    const apiKey = chance.string();
    const instance = new StatsAPI({ apiKey });

    const body = { stats: ['company'] };

    const scope = nock(config.url, {
      req_headers: { Authorization: `Bearer ${apiKey}` }
    })
      .post('/v3/stats.get', body)
      .reply(200, {});

    await instance.company();
    scope.done();
  });

  it('should get all stats', async () => {
    const apiKey = chance.string();
    const instance = new StatsAPI({ apiKey });

    const body = { stats: ['company', 'person'] };

    const scope = nock(config.url, {
      req_headers: { Authorization: `Bearer ${apiKey}` }
    })
      .post('/v3/stats.get', body)
      .reply(200, {});

    await instance.all();
    scope.done();
  });
});
