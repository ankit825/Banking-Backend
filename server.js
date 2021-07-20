
const express = require('express');
const app = express();

var bodyParser = require('body-parser');
 
const db = require('./app/config/db.config.js');
const Customer = db.Customer;

// force: true will drop the table if it already exists
db.sequelize.sync({force: true}).then(() => {
  console.log('Drop and Resync with { force: true }');
  Customer.sync().then(() => {});
}); 

let router = require('./app/routers/router.js');
const cors = require("cors");
const corsOptions = {
  origin: "https://bankingankit.herokuapp.com",
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));



app.use(bodyParser.json());
app.use('/', router);

// Create a Server
const server = app.listen(process.env.PORT || 5000, function () {
 
  let host = server.address().address
  let port = server.address().port
 
  console.log("App listening at http://%s:%s", host, port); 
})
