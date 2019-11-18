[![Build Status](https://travis-ci.org/fullcontact/fullcontact-node-sdk.svg?branch=master)](https://travis-ci.org/fullcontact/fullcontact-node-sdk)
[![npm version](https://badge.fury.io/js/fullcontact-node-sdk.svg)](https://badge.fury.io/js/fullcontact-node-sdk)
[![Node version](https://img.shields.io/node/v/fullcontact-node-sdk.svg?style=flat)](http://nodejs.org/download/)

*IMPORTANT: This SDK should be used server-side only. Using it in a browser would expose your API Key.*

### Installation

`npm install fullcontact-node-sdk --save`

### Documentation

API Documentation can be found at [https://docs.fullcontact.com/](https://docs.fullcontact.com/)

JSDocs can be found in [docs.md](docs.md)

### Usage

##### Configuration
---

```
var fullcontact = require('fullcontact-node-sdk')({
	apiKey: '<API Key>',
	userAgent: '<AppName/Version>'
});
```

##### Enrich APIs
---
All Enrich APIs can be found under the `enrich` property on the client.

```
const myLookup = async () => {
    try {
      const res = await fullcontact.enrich.person.enrich({ email: 'bart@fullcontact.com' })

      //do something with res
    } catch(e) {
      //handle error
    }
}
```

#### Tests
---

To run tests:

`npm test`
