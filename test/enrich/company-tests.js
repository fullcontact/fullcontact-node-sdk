const CompanyEnrichAPI = require('../../lib/apis/enrich/company');
const config = require('../../lib/apis/config');
const chance = require('chance')();
const nock = require('nock');

nock.disableNetConnect();

describe('CompanyEnrichAPI', () => {
  it('should enrich', async () => {
    const apiKey = chance.string();
    const instance = new CompanyEnrichAPI({ apiKey });

    const body = { domain: chance.domain() };

    const scope = nock(config.url, {
      req_headers: { Authorization: `Bearer ${apiKey}` }
    })
      .post('/v3/company.enrich', body)
      .reply(200, {});

    await instance.enrich(body);
    scope.done();
  });

  it('should search', async () => {
    const apiKey = chance.string();
    const instance = new CompanyEnrichAPI({ apiKey });

    const body = { companyName: chance.string() };

    const scope = nock(config.url, {
      req_headers: { Authorization: `Bearer ${apiKey}` }
    })
      .post('/v3/company.search', body)
      .reply(200, {});

    await instance.search(body);
    scope.done();
  });
});
