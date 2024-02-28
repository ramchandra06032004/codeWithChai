const express = require("express");
const app = express();
const port = 5000;

app.listen(port, () => {
  console.log(`server is live on ${port}`);
});

app.get("/", (req, res) => {
  res.send("hello world ");
});
app.get("/home", (req, res) => {
  res.send("home page");
});
