const http = require('http');
const fs = require('fs');
const url = require('url');

const server = http.createServer((req, res) => {
  const q = url.parse(req.url, true);
  if (req.method === 'GET' && q.path === '/login') {
    fs.readFile('public/views/login.html', (err, data) => {
      if (err) {
        res.writeHead(404, {'Content-type': 'text/html'});
        return res.end('404 Not Found');
      }
      res.writeHead(200, {'Content-type': 'text/html'});
      res.write(data);
      return res.end();
    });
  }
  if (req.method === 'POST' && q.path === '/login') {
    const data = [];
    req.on('data', (chunk) => {
      console.log(chunk);
      data.push(chunk);
    });
    req.on('end', () => {
      const realData = Buffer.concat(data).toString();
      console.log(realData);
    });
    res.writeHead(200, {'Content-type': 'text/html'});
    return res.end();
  }
});
server.listen(8000);