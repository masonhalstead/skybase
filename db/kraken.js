const { Pool } = require('pg');
const { KRAKEN_DATABASE_URL } = process.env;

let connection = `${KRAKEN_DATABASE_URL}`;
const pool = new Pool({ connectionString: connection });

module.exports = {
  query: (text, params, callback) => pool.query(text, params, callback),
};
