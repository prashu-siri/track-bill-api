const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
	user: process.env.DB_USER,
	host: process.env.DB_HOST,
	database: process.env.DB_NAME,
	password: process.env.DB_PASSWORD,
	port: process.env.DB_PORT || 5432,
	ssl: {
		rejectUnauthorized: false,
	},
});

pool.on('error', (err) => {
    console.error('Unexpected error on idle client', err);
    process.exit(-1);
});

const db = {
    query: (text, params) => pool.query(text, params),
    getClient: () => pool.connect(),
};

module.exports = db;