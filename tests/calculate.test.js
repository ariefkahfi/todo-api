const server = require("../server")
const supertest = require('supertest')

const requestWithSupertest = supertest(server)

describe('Calculate API', () => {
  it('POST /calculate should return correct value', async () => {
    const response = await requestWithSupertest.post('/calculate').send(
      {
        number1: 25,
        number2: 20
      }
    )
    expect(response.status).toEqual(200)
    expect(response.body).toEqual({ data: 45 })
  })

  it('POST /calculate should return 25', async () => {
    const response = await requestWithSupertest.post('/calculate').send(
      {
        number1: 25,
        number2: null
      }
    )
    expect(response.status).toEqual(200)
    expect(response.body).toEqual({ data: 25 })
  })

  it('POST /calculate should return 0', async () => {
    const response = await requestWithSupertest.post('/calculate').send(
      {
        number1: null,
        number2: null
      }
    )
    expect(response.status).toEqual(200)
    expect(response.body).toEqual({ data: 0 })
  })
})