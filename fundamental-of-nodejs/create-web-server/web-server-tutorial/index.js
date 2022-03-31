const http = require('http');

const server = http.createServer((req, res) => {

  const url = req.url;

  if (url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.write("<div><h1>INDEX</h1><h2>Welcome to the Index page</h2></div>")

  } else if (url === '/contact') {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.write("<div><h1>INDEX</h1><h2>Welcome to the contact page</h2></div>")
  } else if (url === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.write("<div><h1>INDEX</h1><h2>Welcome to the contact page</h2></div>")
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' })
    res.write('404 not found')
  }

  res.end();
});

const port = 5000;
server.listen(port, () => {

  console.log(`Web server is starting in ${port} `)
})