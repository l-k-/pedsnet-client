/* global module, Promise, require */

var http = require('../http');

var dm = {};
module.exports = dm;

dm.Client = function(url) {
    if (!url.endsWith('?format=json')) {
        url += '?format=json';
    }
    this.url = url;
    var obj = this;

    this.connect = new Promise(function(resolve, reject) {
        http.get(url).then(function(data) {
            obj.description = data.description;
            obj.name = data.name;
            obj.release = data.release;
            obj.tables = data.tables;
            obj.version = data.version;
            resolve();
        }).catch(function(err) {
            reject(err);
        });
    });
};

dm.Client.prototype.get_name = function() {
    var obj = this;
    return new Promise(function(resolve, reject) {
        obj.connect.then(function() {
            resolve(obj.name);
        }).catch(function(err) {
            reject(err);
        });
    });
};

dm.Client.prototype.get_version = function() {
    var obj = this;
    return new Promise(function(resolve, reject) {
        obj.connect.then(function() {
            resolve(obj.version);
        }).catch(function(err) {
            reject(err);
        });
    });
};

dm.Client.prototype.get_tables = function() {
    var obj = this;
    return new Promise(function(resolve, reject) {
        obj.connect.then(function() {
            resolve(obj.tables);
        }).catch(function(err) {
            reject(err);
        });
    });
};