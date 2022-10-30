const knexConfig = require("../knexfile")
const env = process.env.NODE_ENV || 'development'
const selectedConfig = knexConfig[env]
const client = selectedConfig?.client
const connection = selectedConfig?.connection

const knex = require('knex')({
  client,
  connection
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