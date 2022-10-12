const server = require("../server")
const supertest = require('supertest')

const requestWithSupertest = supertest(server)

describe('Hello World API', () => {
  it('GET / should return hello world', async () => {
    const response = await requestWithSupertest.get('/')
    expect(response.status).toEqual(200)
    expect(response.body).toEqual({ data: 'Hello World' })
  })
})