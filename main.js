const http = require('http');
const httpProxy = require('http-proxy');
const proxy = httpProxy.createProxyServer({});
const server = http.createServer((req, res) => {
  const target = req.url.slice(1);
  proxy.web(req, res, { target });
});

server.listen(8000);
