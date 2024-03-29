// Update with your config settings.
require('dotenv').config()
const fs = require("fs")

const {
  DB_HOST,
  DB_USER,
  DB_PASSWORD,
  DB_NAME,
  TEST_DB_HOST,
  TEST_DB_USER,
  TEST_DB_PASSWORD,
  TEST_DB_NAME,
  DB_PORT,
  TEST_DB_PORT,
  DATABASE_URL,
  CERTIFICATE_URL
} = process.env

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: 'pg',
    connection: {
      database: DB_NAME,
      user: DB_USER,
      password: DB_PASSWORD,
      host: DB_HOST,
      port: DB_PORT
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },
  test: {
    client: 'pg',
    connection: {
      database: TEST_DB_NAME,
      user: TEST_DB_USER,
      password: TEST_DB_PASSWORD,
      host: TEST_DB_HOST,
      port: TEST_DB_PORT
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },
  production: {
    client: 'pg',
    connection: {
      database: DB_NAME,
      user: DB_USER,
      password: DB_PASSWORD,
      host: DB_HOST,
      port: DB_PORT,
      ssl: {
        rejectUnauthorized: false
      }
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};
