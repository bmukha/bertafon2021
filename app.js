const http = require("http");
// const express = reqire("./node_modules/express");

// const app = express();

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  res.end("Hi there! I'm your server and I'm responding on Heroku-2!");
});

server.listen(port);
