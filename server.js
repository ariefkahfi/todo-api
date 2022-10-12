const express = require("express")

const app = express()
app.use(express.json())
app.use(express.urlencoded())

app.post('/calculate', (req, res) => {
  const { number1, number2 } = req.body
  const parsedNum1 = parseInt(number1)
  const parsedNum2 = parseInt(number2)

  const jsonData = { data: parsedNum1 + parsedNum2 }

  return res.status(200).json(jsonData)
})

app.get('/', (req, res) => res.json({ data: "Hello World" }))

module.exports = app