const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
app.use(cors())

const port = 3001

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.use(express.static(__dirname + '/public'));

// app.get('/', (request, response) => {
// //   response.json({ info: 'Node.js, Express, and Postgres API' })
//     app.use(express.static(__dirname + '/public'));
// })

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})