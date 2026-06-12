require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const route = require("./route");
const dbConfig = require("./configs/dbConfig");

const app = express();
app.use(cookieParser());

app.use(express.json());
app.use(route);
dbConfig();

app.get("/", (req, res) => {
  res.send("Hello World");
});

// // -----when db congfig not working then use this code t
// // const dns = require('dns');
// // dns.setServers(['8.8.8.8', '8.8.4.4'])



app.listen(8000, () => {
  console.log("Server is running");
});
