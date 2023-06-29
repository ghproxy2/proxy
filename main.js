const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();

app.use('/', (req, res, next) => {
  const target = req.query.url;
  if (target) {
    createProxyMiddleware({ target, changeOrigin: true })(req, res, next);
  } else {
    res.send('无url参数');
  }
});

app.listen(3001);
