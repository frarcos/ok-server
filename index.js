const http = require('http');

const port = process.env.PORT || 3000;

const requestHandler = (req, res) => {
    let body = '';

    req.on('data', chunk => {
        body += chunk.toString();
    });

    req.on('end', () => {
        console.log(`METHOD: ${req.method}, URL: ${req.url}, BODY: ${JSON.stringify(body)}`);

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ status: "OK!" }));
    });
};

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
    if (err) {
        return console.log('Something went wrong:', err);
    }

    console.log(`Server is listening on port ${port}`);
});
