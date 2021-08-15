const express = require("express");
const app = express();
const logger = require('morgan');
const port = process.env.PORT || 3000;

app.use(logger('dev'));

app.get("/", (req, res) => {
  const time = new Date();
  console.log(`${new Date().toLocaleString()} Request is made to ${req.url}`);
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
