const server = require("../server")
const supertest = require('supertest')

const requestWithSupertest = supertest(server)

describe('Todo API', () => {
  it('POST /todos should create new data', async () => {
    const response = await requestWithSupertest.post('/api/v1/todos').send(
      {
        title: 'todo 1',
        description: 'desc 1'
      }
    )
    expect(response.status).toEqual(200)
    expect(response.body).toEqual({ data: 45 })
  })

  it('[POST /todos] and [POST /todos] should create new data and list latest data', async () => {
    let response = await requestWithSupertest.post('/api/v1/todos').send(
      {
        title: 'todo 1',
        description: 'desc 1'
      }
    )
    expect(response.status).toEqual(200)
    expect(response.body).toEqual({ data: 45 })

    response = await requestWithSupertest.get('/api/v1/todos').send()
    expect(response.status).toEqual(200)
  })
})