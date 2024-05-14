const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req);
  return res.end();
});
server.listen(8000);