const knexconfig = require('./knexfile');
const knex = require('knex')(knexconfig[process.env.NODE_EV || "development"])

module.exports = knex;