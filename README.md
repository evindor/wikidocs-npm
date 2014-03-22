wikidocs-npm
============

Wikidocs nodeJS module

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

* **string** *options.userId* - An application-specific id that is used to

* **number** *[options.lifetime=62400]* - Token expiration time in seconds

* **object** *options.access* - A hash of channel - rights

* **object** *[options.session]* - Custom user session attributes available
