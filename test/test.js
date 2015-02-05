'use strict';

var assert = require('assert');
var mongodbConnectionString = require('..');

describe('mongodb-connection-string', function() {

  it('should generate the correct mongodb connection string for a simple setup', function() {

    var connectionString = mongodbConnectionString.mongo({
      hosts: ['server1:27017', 'server2'],
      database: 'admin'
    });

    assert.equal('mongodb://server1:27017,server2/admin', connectionString);
  });

  it('should generate the correct mongodb connection string for a replicaset setup', function() {

    var connectionString = mongodbConnectionString.mongo({
      hosts: ['server1', 'server2'],
      database: 'admin',
      options: {
        replicaSet: 'rs',
        w: 1
      }
    });

    assert.equal('mongodb://server1,server2/admin?replicaSet=rs&w=1', connectionString);
  });

  it('should generate the correct legacy mongoose connection string for a simple setup', function() {

    var connectionString = mongodbConnectionString.mongooseLegacy({
      hosts: ['server1:27017', 'server2'],
      database: 'admin'
    });

    assert.equal('mongodb://server1:27017/admin,server2', connectionString);
  });

  it('should generate the correct legacy mongoose connection string for a replicaset setup', function() {

    var connectionString = mongodbConnectionString.mongooseLegacy({
      hosts: ['server1', 'server2'],
      database: 'admin',
      options: {
        replicaSet: 'rs',
        w: 1
      }
    });

    assert.equal('mongodb://server1/admin,server2?replicaSet=rs&w=1', connectionString);
  });

});
