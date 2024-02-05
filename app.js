
const express = require("express");
const app = express();

//import dbConnection
require("./db_connection/db_connection");

const bodyParser = require("body-parser");
app.use(bodyParser.json());  // to fetch json file otherwise we'll get error
app.use(bodyParser.urlencoded({extended : false}));

//import routes
const admin = require("./routes/admin_route");
const category = require('./routes/category_route');
const employee = require('./routes/employee_route');
const product = require('./routes/product_route');

app.use(admin);
app.use(category);
app.use(employee);
app.use(product);

app.use("/files", express.static("files"));

var PORT = 90;

// App listening on the below port
app.listen(PORT, function(err){
   if (err) console.log(err);
   console.log("Server listening on PORT", PORT);
});