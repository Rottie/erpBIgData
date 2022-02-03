const express = require("express");
const app = express();

// settting main page route
app.get("/", (req, res) => {
  res.send("hello world");
});

// setting port 3000
app.listen(5000, () => {
  console.log("App is running on http://localhost:5000");
});
