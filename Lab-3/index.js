const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/Instagram',(request,response) => {
    response.send('This the official Instagram Web Page')
})

app.get('/Twitter',(request,response) => {
    response.send('This the official Twitter Web Page')
})

app.get('/Facebook',(request,response) => {
    response.send('This the official Facebook Web Page')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})