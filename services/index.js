require('dotenv').config()

const {
  DB_HOST,
  DB_PORT,
  DB_USER,
  DB_PASSWORD,
  DB_NAME
} = process.env


const knex = require('knex')({
  client: 'mysql2',
  connection: {
    host: DB_HOST,
    port: DB_PORT,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME
  }
});

const createTodo = async (payload = {}) => {
  const result = await knex('todos').insert(payload)
  const id = result[0]

  const todo = await knex("todos").where("id", id).first()

  return todo
}

const listTodos = () => {
  return knex.select("id", "title", "description").from('todos')
}

module.exports = {
  knex,
  createTodo,
  listTodos
}