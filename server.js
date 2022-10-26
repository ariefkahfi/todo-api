const service = require("./services")
const express = require("express")

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/api/v1/todos', async (req, res) => {
  try {
    const payload = req.body

    const result = await service.createTodo(payload)

    return res.status(200).json({ code: 200, data: result, message: 'Successfuly create new todo' })
  } catch (error) {
    return res.status(500).json({ code: 500, data: null, message: error.message })
  }
})

app.post('/api/v1/todos', async (req, res) => {
  const result = await service.listTodos()
  return result
})

app.post('/calculate', (req, res) => {
  const { number1, number2 } = req.body
  const parsedNum1 = parseInt(number1) || 0
  const parsedNum2 = parseInt(number2) || 0

  const jsonData = { data: parsedNum1 + parsedNum2 }

  return res.status(200).json(jsonData)
})

app.get('/', (req, res) => res.json({ data: "Hello World" }))

module.exports = app