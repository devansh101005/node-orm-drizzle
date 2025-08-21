// index.js
const { drizzle } = require('drizzle-orm/node-postgres');
//const { Pool } = require('pg');

//const pool = new Pool({
//   connectionString: "postgres://postgres:Devansh123@localhost:5432/mydb",
// });

const db = drizzle(process.env.DATABASE_URL);

module.exports = db;