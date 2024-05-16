const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
  fs.readFile('views/index.html', (err, data) => {
    if (err) {
      res.writeHead(404, {'Content-type': 'text/html'})
      return res.end('404 Not Found')
    }
    res.writeHead(200, {'Content-type': 'text/html'})
    res.write(data)
    return res.end()
  })
})
server.listen(8000, () => {
  console.log('Server is running at pot 8000')
})