"use strict";

function validateOptions(options) {
  if (!options) throw new Error('options hash required');
  if (!Array.isArray(options.hosts)) throw new Error('options.hosts array required');
  if (!options.hosts.length) throw new Error('options.hosts array must not be empty');
  if (!options.database) throw new Error('options.database required');
}

function encodeOptions(options) {
  if (!options) return "";

  return "?" + Object.keys(options).map(function(key) {
      return encodeURIComponent(key) + "=" + encodeURIComponent(options[key] || "");
    }).join('&');
}

function makeMongoConnectionString(options) {
  validateOptions(options);

  return 'mongodb://' +
    options.hosts.map(function(host, index) {
      return host;
    })
    .join(',') +
    '/' + options.database +
    encodeOptions(options.options);
}

function makeLegacyMongooseConnectionString(options) {
  validateOptions(options);

  return 'mongodb://' +
    options.hosts.map(function(host, index) {
      if (index === 0) return host + "/" + options.database;

      return host;
    })
    .join(',') +
    encodeOptions(options.options);
}

module.exports = {
  mongo: makeMongoConnectionString,
  mongooseLegacy: makeLegacyMongooseConnectionString
};

