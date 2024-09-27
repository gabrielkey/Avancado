const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  console.log(req.url);

  if (req.method === 'GET' && req.url === '/') {
    fs.readFile(
      './index.html',
      { encoding: 'utf-8', flag: 'r' },
      function (err, data) {
        if (!err) {
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.write(data);
          res.end();
        }
      }
    );
  } else {
    fs.readFile('./404.html', { encoding: 'utf-8', flag: 'r' }, (err, data) => {
      if (!err) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        res.end();
      }
    });
  }
});

server.listen(8080, () => {
  console.log('Servidor pronto na porta 8080!');
});
