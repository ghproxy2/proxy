const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();

app.use('/', (req, res, next) => {
  const target = req.query.proxy;
  if (target) {
    createProxyMiddleware({ target, changeOrigin: true })(req, res, next);
  } else {
    next();
  }
});

app.listen(3001);
