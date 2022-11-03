const env = process.env.NODE_ENV || "development";
module.exports = require(`../environment/config.${env}.js`);
