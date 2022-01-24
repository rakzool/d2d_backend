const express = require("express");

const app = express();
app.use(express());
app.use(express.json());

app.get("/api/data", (req, res) => {
  res.send(`<h1>Hello from server</h1>`);
});

app.listen(8000, () => {
  console.log("listening on port 8000 . . .");
});
