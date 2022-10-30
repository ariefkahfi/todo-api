// Update with your config settings.
require('dotenv').config()

const {
  DB_HOST,
  DB_USER,
  DB_PASSWORD,
  DB_NAME,
  TEST_DB_HOST,
  TEST_DB_USER,
  TEST_DB_PASSWORD,
  TEST_DB_NAME
} = process.env

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: 'mysql2',
    connection: {
      database: DB_NAME,
      user: DB_USER,
      password: DB_PASSWORD,
      host: DB_HOST
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  test: {
    client: 'mysql2',
    connection: {
      database: TEST_DB_NAME,
      user: TEST_DB_USER,
      password: TEST_DB_PASSWORD,
      host: TEST_DB_HOST
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};
