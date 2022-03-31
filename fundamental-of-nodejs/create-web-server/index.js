const http = require('http');

const server = http.createServer((req, res) => {

  const url = req.url;

  if (url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.write("<h1>INDEX</h1>")

  } else if (url === '/contact') {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.write("contact")
  } else if (url === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.write("about")
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' })
    res.write('404 not found')
  }

  res.end();
});

const port = 3000;
server.listen(port, () => {

  console.log(`Web server is starting in ${port} `)
})