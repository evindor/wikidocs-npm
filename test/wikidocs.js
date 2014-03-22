var assert = require('assert'),
    wikidocs = require('../lib/wikidocs');

describe('User token generation', function(){
    describe('options', function(){
        it('shold contain wdAppId for successful token generation and return error otherwise', function() {
            assert.throws(function() {
                wikidocs.generateAccessToken({
                    wdAppSecret: 'test',
                    userId: 'test',
                    access: {}
                });
            }, Error);
        });

        it('shold contain wdAppSecret for successful token generation and return error otherwise', function() {
            assert.throws(function() {
                wikidocs.generateAccessToken({
                    wdAppId: 'test',
                    userId: 'test',
                    access: {}
                });
            }, Error);
        });

        it('shold contain userId for successful token generation and return error otherwise', function() {
            assert.throws(function() {
                wikidocs.generateAccessToken({
                    wdAppId: 'test',
                    wdAppSecret: 'test',
                    access: {}
                });
            }, Error);
        });

        it('shold contain access for successful token generation and return error otherwise', function() {
            assert.throws(function() {
                wikidocs.generateAccessToken({
                    wdAppId: 'test',
                    userId: 'test',
                    wdAppSecret: 'test'
                });
            }, Error);
        });

        it('shold generate token successfully if all required values present', function() {
            assert.ok(function() {
                return wikidocs.generateAccessToken({
                    wdAppId: 'test',
                    userId: 'test',
                    wdAppSecret: 'test',
                    access: {}
                });
            });
        });
    });
});
