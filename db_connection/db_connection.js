
const mysql = require("mysql");

const con = mysql.createConnection({
    host : "127.0.0.1",
    user : "root",
    password :"",
    database : "hbk_db"

})

con.connect((err) => {
    if (err) {
      throw err;
    }
    console.log("MySql Connected");
});

module.exports = con;