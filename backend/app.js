const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

app.get('/api', (req, res) => {
  res.json({ message: 'Backend is running successfully' })
})

app.get('/health', (req, res) => {
  res.json({ status: 'OK' })
})

app.listen(5000, () => {
  console.log('Backend server running on port 5000')
})