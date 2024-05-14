const http = require('http');
const fs = require('fs');
const url = require('url');

const server = http.createServer((req, res) => {
  const q = url.parse(req.url,  true);
  console.log(q);
  let fileLocation;
  switch (q.pathname) {
    case 'home':
      fileLocation = 'public/views/index.html';
      break;
    case 'about':
      fileLocation = 'public/views/about.html';
      break;
    default:
      fileLocation = 'public/views/about.html';
  }
  fs.readFile(fileLocation, (err, data) => {
    if (err) {
      res.writeHead(404, {'Content-type': 'text/html'});
      return res.end('404 Not Found');
    }
    res.writeHead(200, {'Content-type': 'text/html'});
    res.write(data);
    return res.end();
  })
});
server.listen(8000);