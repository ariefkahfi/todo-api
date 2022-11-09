const server = require("../server")
const supertest = require('supertest')
const { knex } = require("../services")
const requestWithSupertest = supertest(server)

describe('Todo API', () => {
  beforeAll(async () => {
    await knex('todos').del()
  })

  it('POST /todos should create new data', async () => {
    const response = await requestWithSupertest.post('/api/v1/todos').send(
      {
        title: 'todo 1',
        description: 'desc 1'
      }
    )
    expect(response.status).toEqual(200)
    expect(response.body.data.title).toEqual('todo 1')
    expect(response.body.data.description).toEqual('desc 1')
  })

  it('[POST /todos] and [GET /todos] should create new data and list latest data', async () => {
    let response = await requestWithSupertest.post('/api/v1/todos').send(
      {
        title: 'todo 2',
        description: 'desc 2'
      }
    )
    expect(response.status).toEqual(200)
    expect(response.body.data.title).toEqual('todo 2')
    expect(response.body.data.description).toEqual('desc 2')

    response = await requestWithSupertest.get('/api/v1/todos').send()
    expect(response.status).toEqual(200)
    expect(response.body.length).toEqual(2)
  })

  afterAll(async () => {
    await knex.destroy()
  })
})