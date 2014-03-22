var jwt = require('jwt-simple');

/**
 * Generates an access token for Wikidocs
 * @param {string} options.wdAppId - Wikidocs app id
 * @param {string} options.wdAppSecret - Wikidocs app secret
 * @param {string} options.userId - An application-specific id that is used to
 * tag edits so they can be associated with a particular user.
 * @param {object} options.access - A hash of channel - rights
 * @param {number} [options.lifetime=62400] - Token expiration time in seconds
 * since generation
 * @param {object} [options.session] - Custom user session attributes available
 * in Wikidocs session object
 * @returns {string} Access token for Wikidocs
 */
var generateAccessToken = function(options) {
    ["wdAppId", "wdAppSecret", "userId", "access"].forEach(function(param) {
        if (!options[param])
            throw new Error(param +
                ' is required to create Wikidocs access token.');
    });

    var payload = {
        iss: 'https://wikidocs.com/v1/apps/' + options.wdAppId,
        iat: Math.round((new Date().getTime()/1000)),
        exp: Math.round((new Date().getTime()/1000)) + (options.lifetime ||
            3600 * 24),
        sub: options.userId,
        access: options.access,
        session: options.session
    };

    return jwt.encode(payload, options.wdAppSecret);
}

module.exports = {
    generateAccessToken: generateAccessToken
}
