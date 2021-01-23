const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3001

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  console.log(req.url)
  if (req.url == '/app1'){
    req.url = req.url.replace("/app1", "/")
  }
  else {
    req.url = req.url.replace("/app1", "")
  }
  console.log(req.url)
  next()
})

app.get('/', (req, res, next) => {
  //console.log(req.url)
  res.send('Hey! From APP1')
})

app.get('/test', (req, res, next) => {
  res.send('Hey! From APP1[test]')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})