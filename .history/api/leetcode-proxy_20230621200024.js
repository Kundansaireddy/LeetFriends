const fetch = require("node-fetch");
const { createProxyMiddleware } = require("http-proxy-middleware");

const proxy = createProxyMiddleware({
  target: "https://leetcode.com",
  changeOrigin: true,
  pathRewrite: {
    "^/api/leetcode-proxy": "/graphql",
  },
});

module.exports = (req, res) => {
  return proxy(req, res);
};
