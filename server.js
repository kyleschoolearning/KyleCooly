touch server.js
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const PORT = 3000;

const targetServer = 'google.com'; // Replace with your desired target

app.use('/', createProxyMiddleware({
  target: targetServer,
  changeOrigin: true,
  pathRewrite: {
    '^/': '/',
  },
}));

app.listen(PORT, () => {
  console.log(`Kyle Proxy is running on http://localhost:${PORT}`);
});
