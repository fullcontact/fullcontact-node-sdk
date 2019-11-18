const PersonEnrichAPI = require('../../lib/apis/enrich/person');
const config = require('../../lib/apis/config');
const chance = require('chance')();
const nock = require('nock');

nock.disableNetConnect();

describe('PersonEnrichAPI', () => {
  it('should enrich', async () => {
    const apiKey = chance.string();
    const instance = new PersonEnrichAPI({ apiKey });

    const body = { email: chance.email() };

    const scope = nock(config.url, {
      req_headers: { Authorization: `Bearer ${apiKey}` }
    })
      .post('/v3/person.enrich', body)
      .reply(200, {});

    await instance.enrich(body);
    scope.done();
  });

  it('should subscribe', async () => {
    const apiKey = chance.string();
    const instance = new PersonEnrichAPI({ apiKey });

    const body = { email: chance.email(), webhookUrl: chance.url() };

    const scope = nock(config.url, {
      req_headers: { Authorization: `Bearer ${apiKey}` }
    })
      .post('/v3/person.subscribe', body)
      .reply(200, {});

    await instance.subscribe(body);
    scope.done();
  });

  it('should test subscription', async () => {
    const apiKey = chance.string();
    const instance = new PersonEnrichAPI({ apiKey });
    const subscriptionId = chance.string();
    const body = { subscriptionId };

    const scope = nock(config.url, {
      req_headers: { Authorization: `Bearer ${apiKey}` }
    })
      .post('/v3/person.testSubscription', body)
      .reply(200, {});

    await instance.testSubscription(subscriptionId);
    scope.done();
  });

  it('should unsubscribe', async () => {
    const apiKey = chance.string();
    const instance = new PersonEnrichAPI({ apiKey });
    const subscriptionId = chance.string();
    const body = { subscriptionId };

    const scope = nock(config.url, {
      req_headers: { Authorization: `Bearer ${apiKey}` }
    })
      .post('/v3/person.unsubscribe', body)
      .reply(200, {});

    await instance.unsubscribe(subscriptionId);
    scope.done();
  });
});
