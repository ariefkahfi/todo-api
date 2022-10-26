require('dotenv').config()

const {
  DB_HOST,
  DB_PORT,
  DB_USER,
  DB_PASSWORD,
  DB_NAME
} = process.env


const knex = require('knex')({
  client: 'mysql',
  connection: {
    host: DB_HOST,
    port: DB_PORT,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME
  }
});

const createTodo = (payload = {}) => {
  return knex('todos').insert(payload)
}

const listTodos = () => {
  return knex.select().table('todos')
}

module.exports = {
  createTodo,
  listTodos
}