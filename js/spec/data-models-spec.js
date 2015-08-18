/* global beforeEach, describe, expect, it, require */

var dm = require('../data-models/data-models');

describe('data models test', function() {
    var client;
    var url = 'http://data-models.origins.link/models/pedsnet/2.0.0';

    beforeEach(function(){
        client = new dm.Client(url);
    });

    it('initializes client url', function() {
        expect(client.url).toBe(url+'?format=json');
    });

    it('fetches correct model name', function(done) {
        client.get_name().then(function(name) {
            expect(name).toEqual('pedsnet');
            done();
        }).catch(function(err) {
            expect(err).toBe('not thrown');
            done();
        });
    });

    it('fetches correct model version', function(done) {
        client.get_version().then(function(ver) {
            expect(ver).toEqual('2.0.0');
            done();
        }).catch(function(err) {
            expect(err).toBe('not thrown');
            done();
        });
    });

    it('fetches correct table', function(done) {
        client.get_tables().then(function(tables) {
            var i = 0;
            for (; i < tables.length; i++) {
                if (tables[i].name === 'care_site') {
                    expect(tables[i].description).toEqual('Information about the site of care');
                    done();
                }
            }
            if(i===tables.length) {
                fail('Table not found');
                done();
            }
        }).catch(function(err) {
            expect(err).toBe('not thrown');
            done();
        });
    });
});
