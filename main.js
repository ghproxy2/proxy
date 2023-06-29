const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();

app.use('/', createProxyMiddleware((req) => {
  const target = req.url.slice(1);
  return { target, changeOrigin: true };
}));

app.listen(3001);
