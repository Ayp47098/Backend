const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/Twitter',(req,res) => {
    res.send('hiteshdotcom')
})
app.get('/login',(req,res) => {
    res.send('<h1>please login at my page</h1>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
