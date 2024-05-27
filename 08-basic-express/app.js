const http = require('http')
const express = require('express')
const app = express();

const server = http.createServer(app)
server.listen(8000, () => {
  console.log('Server is running at port 8000')
})