const express = require("express");
const app = express();

app.listen(2200, () => console.log("Server up and running"));

app.get("/", (req, res) => {
  console.log("response -> ", res);
  res.send("hello from response 1");
});
