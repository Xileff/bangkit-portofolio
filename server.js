const express = require("express");
const path = require("path");

const app = express();

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./index.html"));
});

const port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, "/")));
app.listen(port, (_) => {
  console.log(`Local : App launched at http://localhost:${port}`);
});