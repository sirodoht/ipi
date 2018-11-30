const http = require("http");

const server = http.createServer((req, res) => {
  const ip = req.headers['x-forwarded-for'];
  console.log(`Visitor: ${ip}`);
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end(ip);
});

const port = process.env.PORT || 8080;

server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
