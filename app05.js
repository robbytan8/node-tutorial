const http = require('http')
const fs = require('fs')
const url = require('url')

const server = http.createServer((req, res) => {
  const q = url.parse(req.url, true)
  console.log(q)
  let fileLocation
  switch (q.pathname) {
    case '/home':
      fileLocation = 'views/index.html'
      break
    case '/about':
      fileLocation = 'views/about.html'
      break
    default:
      fileLocation = 'views/index.html'
  }
  fs.readFile(fileLocation, (err, data) => {
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