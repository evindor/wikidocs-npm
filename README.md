wikidocs-npm
============

Wikidocs nodeJS module.
See more at [wikidocs](https://wikidocs.com/home/docs/getting-started.html)

## Installation
```shell
npm install wikidocs
```

## Usage
```javascript
var wd = require('wikidocs');

var token = wd.generateAccessToken({
    wdApiId: 'demo',
    wdAppSecret: 'demo',
    userId: 'user-123',
    access: {
        'channel-1': 'full'
    }
});

// Use the token to fire up Wikidocs!
```

### Params: 

* **string** *options.wdAppId* - Wikidocs app id

* **string** *options.wdAppSecret* - Wikidocs app secret

* **string** *options.userId* - An application-specific id that is used to tag edits so they can be associated with a particular user.

* **object** *options.access* - A hash of channel - rights

* **number** *[options.lifetime=62400]* - Token expiration time in seconds since generation

* **object** *[options.session]* - Custom user session attributes available in Wikidocs session object
