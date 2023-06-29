const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();
app.use('/', createProxyMiddleware({ router: req => req.url.slice(1), changeOrigin: true }));
app.listen(3001);
