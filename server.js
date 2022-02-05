// --------------------------------Step 1 require lib
const express = require("express");

const cors = require("cors");
const bodyParser = require("body-parser");
const erpRouter = require("./routes/modules/erpRoutes.js");
// 引用路由器
const routes = require("./routes");

require("./config/mongoose");
// ------------------------------------Step 2 DB COnnection

//-----------------------------------Step 3 app yse
const app = express();

const PORT = process.env.PORT || 5000;
//
app.use(express.json());

// 將 request 導入路由器
app.use(cors());
app.use("/users", erpRouter);
//-------------------

// settting main page route
app.get("/", (req, res) => {
  res.send("hello world");
});

// setting port 3000
app.listen(PORT, () => {
  console.log(`Server running http://localhost:${PORT}`);
});
