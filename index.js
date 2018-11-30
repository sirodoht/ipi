const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    console.log('req:', req.headers);
    res.end('okay');  

});

const port = process.env.PORT || 8080;

server.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
