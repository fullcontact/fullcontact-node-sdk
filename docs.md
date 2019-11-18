## Classes

<dl>
<dt><a href="#FullContact">FullContact</a></dt>
<dd></dd>
<dt><a href="#CompanyEnrichAPI">CompanyEnrichAPI</a> ⇐ <code>API</code></dt>
<dd></dd>
<dt><a href="#EnrichAPIs">EnrichAPIs</a></dt>
<dd></dd>
<dt><a href="#PersonEnrichAPI">PersonEnrichAPI</a> ⇐ <code>API</code></dt>
<dd></dd>
<dt><a href="#StatsAPI">StatsAPI</a> ⇐ <code>API</code></dt>
<dd></dd>
</dl>

<a name="FullContact"></a>

## FullContact
**Kind**: global class  

* [FullContact](#FullContact)
    * _instance_
        * [.enrich](#FullContact+enrich)
    * _static_
        * [.FullContact](#FullContact.FullContact)
            * [new FullContact(config)](#new_FullContact.FullContact_new)

<a name="FullContact+enrich"></a>

### fullContact.enrich
Gets Enrich APIs

**Kind**: instance property of [<code>FullContact</code>](#FullContact)  
**Read only**: true  
<a name="FullContact.FullContact"></a>

### FullContact.FullContact
**Kind**: static class of [<code>FullContact</code>](#FullContact)  
<a name="new_FullContact.FullContact_new"></a>

#### new FullContact(config)
Creates an instance of FullContact.
Config: {
 apiKey,
 baseUrl
}


| Param | Type |
| --- | --- |
| config | <code>Object</code> | 

<a name="CompanyEnrichAPI"></a>

## CompanyEnrichAPI ⇐ <code>API</code>
**Kind**: global class  
**Extends**: <code>API</code>  

* [CompanyEnrichAPI](#CompanyEnrichAPI) ⇐ <code>API</code>
    * [new CompanyEnrichAPI()](#new_CompanyEnrichAPI_new)
    * _instance_
        * [.enrich(body)](#CompanyEnrichAPI+enrich) ⇒ <code>Promise</code>
    * _static_
        * [.CompanyEnrichAPI](#CompanyEnrichAPI.CompanyEnrichAPI)
            * [new CompanyEnrichAPI()](#new_CompanyEnrichAPI.CompanyEnrichAPI_new)

<a name="new_CompanyEnrichAPI_new"></a>

### new CompanyEnrichAPI()
Company Enrich APIs

<a name="CompanyEnrichAPI+enrich"></a>

### companyEnrichAPI.enrich(body) ⇒ <code>Promise</code>
Enriches a company by domain (https://docs.fullcontact.com/#company-enrichment)

**Kind**: instance method of [<code>CompanyEnrichAPI</code>](#CompanyEnrichAPI)  

| Param | Type |
| --- | --- |
| body | <code>Object</code> | 

<a name="CompanyEnrichAPI.CompanyEnrichAPI"></a>

### CompanyEnrichAPI.CompanyEnrichAPI
**Kind**: static class of [<code>CompanyEnrichAPI</code>](#CompanyEnrichAPI)  
<a name="new_CompanyEnrichAPI.CompanyEnrichAPI_new"></a>

#### new CompanyEnrichAPI()
Creates an instance of CompanyEnrichAPI.

<a name="EnrichAPIs"></a>

## EnrichAPIs
**Kind**: global class  

* [EnrichAPIs](#EnrichAPIs)
    * [new EnrichAPIs()](#new_EnrichAPIs_new)
    * _instance_
        * [.person](#EnrichAPIs+person)
        * [.company](#EnrichAPIs+company)
        * [.stats](#EnrichAPIs+stats)
    * _static_
        * [.EnrichAPIs](#EnrichAPIs.EnrichAPIs)
            * [new EnrichAPIs(config)](#new_EnrichAPIs.EnrichAPIs_new)

<a name="new_EnrichAPIs_new"></a>

### new EnrichAPIs()
Enrich APIs

<a name="EnrichAPIs+person"></a>

### enrichAPIs.person
Gets Person Enrich APIs

**Kind**: instance property of [<code>EnrichAPIs</code>](#EnrichAPIs)  
**Read only**: true  
<a name="EnrichAPIs+company"></a>

### enrichAPIs.company
Gets Company Enrich APIs

**Kind**: instance property of [<code>EnrichAPIs</code>](#EnrichAPIs)  
**Read only**: true  
<a name="EnrichAPIs+stats"></a>

### enrichAPIs.stats
Gets Stats APIs

**Kind**: instance property of [<code>EnrichAPIs</code>](#EnrichAPIs)  
**Read only**: true  
<a name="EnrichAPIs.EnrichAPIs"></a>

### EnrichAPIs.EnrichAPIs
**Kind**: static class of [<code>EnrichAPIs</code>](#EnrichAPIs)  
<a name="new_EnrichAPIs.EnrichAPIs_new"></a>

#### new EnrichAPIs(config)
Creates an instance of EnrichAPIs.


| Param | Type |
| --- | --- |
| config | <code>Object</code> | 

<a name="PersonEnrichAPI"></a>

## PersonEnrichAPI ⇐ <code>API</code>
**Kind**: global class  
**Extends**: <code>API</code>  

* [PersonEnrichAPI](#PersonEnrichAPI) ⇐ <code>API</code>
    * [new PersonEnrichAPI()](#new_PersonEnrichAPI_new)
    * _instance_
        * [.enrich(body)](#PersonEnrichAPI+enrich) ⇒ <code>Promise</code>
        * [.subscribe(body)](#PersonEnrichAPI+subscribe) ⇒ <code>Promise</code>
        * [.testSubscription(subscriptionId)](#PersonEnrichAPI+testSubscription) ⇒ <code>Promise</code>
        * [.unsubscribe(subscriptionId)](#PersonEnrichAPI+unsubscribe) ⇒ <code>Promise</code>
    * _static_
        * [.PersonEnrichAPI](#PersonEnrichAPI.PersonEnrichAPI)
            * [new PersonEnrichAPI()](#new_PersonEnrichAPI.PersonEnrichAPI_new)

<a name="new_PersonEnrichAPI_new"></a>

### new PersonEnrichAPI()
Person Enrich APIs

<a name="PersonEnrichAPI+enrich"></a>

### personEnrichAPI.enrich(body) ⇒ <code>Promise</code>
Enriches a person by email, twitter or name (https://docs.fullcontact.com/#person-enrichment)

**Kind**: instance method of [<code>PersonEnrichAPI</code>](#PersonEnrichAPI)  

| Param | Type |
| --- | --- |
| body | <code>Object</code> | 

<a name="PersonEnrichAPI+subscribe"></a>

### personEnrichAPI.subscribe(body) ⇒ <code>Promise</code>
Subscribes to a person by email, twitter or name (https://docs.fullcontact.com/#subscriptions)

**Kind**: instance method of [<code>PersonEnrichAPI</code>](#PersonEnrichAPI)  

| Param | Type |
| --- | --- |
| body | <code>Object</code> | 

<a name="PersonEnrichAPI+testSubscription"></a>

### personEnrichAPI.testSubscription(subscriptionId) ⇒ <code>Promise</code>
Tests a subscription to a person (https://docs.fullcontact.com/#subscriptions)

**Kind**: instance method of [<code>PersonEnrichAPI</code>](#PersonEnrichAPI)  

| Param | Type |
| --- | --- |
| subscriptionId | <code>String</code> | 

<a name="PersonEnrichAPI+unsubscribe"></a>

### personEnrichAPI.unsubscribe(subscriptionId) ⇒ <code>Promise</code>
Unsubscribes from a person (https://docs.fullcontact.com/#subscriptions)

**Kind**: instance method of [<code>PersonEnrichAPI</code>](#PersonEnrichAPI)  

| Param | Type |
| --- | --- |
| subscriptionId | <code>String</code> | 

<a name="PersonEnrichAPI.PersonEnrichAPI"></a>

### PersonEnrichAPI.PersonEnrichAPI
**Kind**: static class of [<code>PersonEnrichAPI</code>](#PersonEnrichAPI)  
<a name="new_PersonEnrichAPI.PersonEnrichAPI_new"></a>

#### new PersonEnrichAPI()
Creates an instance of PersonEnrichAPI.

<a name="StatsAPI"></a>

## StatsAPI ⇐ <code>API</code>
**Kind**: global class  
**Extends**: <code>API</code>  

* [StatsAPI](#StatsAPI) ⇐ <code>API</code>
    * [new StatsAPI()](#new_StatsAPI_new)
    * _instance_
        * [.getStats(body)](#StatsAPI+getStats) ⇒ <code>Promise</code>
        * [.person()](#StatsAPI+person) ⇒ <code>Promise</code>
        * [.company()](#StatsAPI+company) ⇒ <code>Promise</code>
        * [.all()](#StatsAPI+all) ⇒ <code>Promise</code>
    * _static_
        * [.StatsAPI](#StatsAPI.StatsAPI)
            * [new StatsAPI()](#new_StatsAPI.StatsAPI_new)

<a name="new_StatsAPI_new"></a>

### new StatsAPI()
Stats APIs

<a name="StatsAPI+getStats"></a>

### statsAPI.getStats(body) ⇒ <code>Promise</code>
Get stats (https://docs.fullcontact.com/#stats)

**Kind**: instance method of [<code>StatsAPI</code>](#StatsAPI)  

| Param | Type |
| --- | --- |
| body | <code>Object</code> | 

<a name="StatsAPI+person"></a>

### statsAPI.person() ⇒ <code>Promise</code>
Gets person stats (https://docs.fullcontact.com/#stats)

**Kind**: instance method of [<code>StatsAPI</code>](#StatsAPI)  
<a name="StatsAPI+company"></a>

### statsAPI.company() ⇒ <code>Promise</code>
Gets company stats (https://docs.fullcontact.com/#stats)

**Kind**: instance method of [<code>StatsAPI</code>](#StatsAPI)  
<a name="StatsAPI+all"></a>

### statsAPI.all() ⇒ <code>Promise</code>
Gets all stats (https://docs.fullcontact.com/#stats)

**Kind**: instance method of [<code>StatsAPI</code>](#StatsAPI)  
<a name="StatsAPI.StatsAPI"></a>

### StatsAPI.StatsAPI
**Kind**: static class of [<code>StatsAPI</code>](#StatsAPI)  
<a name="new_StatsAPI.StatsAPI_new"></a>

#### new StatsAPI()
Creates an instance of StatsAPI.

