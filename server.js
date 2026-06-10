
// const express = require('express')
// const router = require('./route');
// const dbConfig = require('./configs/dbConfig');
// const cookieParser = require('cookie-parser');
// const app = express()
// require('dotenv').config();
// app.use(express.json());
// app.use(cookieParser());
// app.use(router);
// dbConfig()

// // -----when db congfig not working then use this code t
// // const dns = require('dns');
// // dns.setServers(['8.8.8.8', '8.8.4.4'])



// app.listen((8000), () => {
//   console.log(`Server is running on port ${8000}`)
// })
const express = require('express');
const route = require('./route');
const dbConfig = require('./configs/dbConfig');

require('dotenv').config();

const app = express();

app.use(express.json());
app.use(route);

dbConfig();

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(8000, () => {
  console.log('Server is running');
});
