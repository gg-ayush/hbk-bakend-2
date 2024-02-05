
const con = require('./db_connection')

// testing sql queries

// Create DB
app.get("/create/database", (req, res) => {
    let sql = "CREATE DATABASE hbk1" ;
    con.query(sql, (err) => {
      if (err) {
        throw err;
      }
        res.send("table created");
    });
});


app.get("/create/employee", (req, res) => {
    let sql =
      "CREATE TABLE employee(id int AUTO_INCREMENT, name VARCHAR(255), designation VARCHAR(255), PRIMARY KEY(id))";
    con.query(sql, (err) => {  
      if (err) {
        throw err;
      }
      res.send("Employee table created");
    });
  });



app.get("/employee1", (req, res) => {

    let post = { name: "Jake Smith", designation: "Chief Executive Officer" };

    let sql = "INSERT INTO employee SET ?";

    let query = con.query(sql, post, (err) => {
        if (err) {
            throw err;
        }
        res.send("Employee 1 added");
    });

});


// add employee
app.get("/insert", (req, res) => {
    post = { id : 2, name : "Ram"} // values for table

    let sql = 'INSERT INTO emp SET ?';

    con.query(sql, post, (err) => {
        if (err) {
            throw err;
        }
            res.send("Employee table created");
        });
});


// delete employee
app.delete("/delete", (req, res) => {

    let sql = 'DELETE FROM emp where id = 1';

    con.query(sql, (err) => {
        if (err) {
            throw err;
        }
            res.send("Employee removed!");
        });
});