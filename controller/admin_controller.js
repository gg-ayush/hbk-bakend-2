
const bcrypt = require("bcryptjs");
const con = require('../db_connection/db_connection')
const jwt = require("jsonwebtoken");

module.exports.register_admin = async function (req, res) {

    const full_name = req.body.full_name;
    const email = req.body.email;
    // const address = req.body.address;
    // const mobile = req.body.mobile;
    const password = req.body.password;

    // check existing email
    let data = { email: email }
    let sql = "SELECT email FROM hbk_admin WHERE ?"

    con.query(sql, data, (err, result) => {
        if (err) {
            throw err;
        }

        //console.log(result.length)
        if (result.length != 0) {
            return res
                .status(200)
                .json({ success: false, message: "Email exist!" });
        }

        // if email not found then register & encrypt password
        bcrypt.hash(password, 10, function (err, hash) {

            if (err) {
                throw err;
            }

            var data1 = {
                full_name: full_name,
                email: email,
                // address: address,
                // mobile: mobile,
                password: hash,
            };

            let sql_insert = "INSERT INTO hbk_admin SET ?";

            con.query(sql_insert, data1, (err) => {
                if (err) {
                    throw err;
                }
                return res
                    .status(200)
                    .json({ success: true, message: "Registration successful!" });
            });

        });

    });
}


//admin login
module.exports.login_admin = async function (req, res) {

    const email = req.body.email
    const password = req.body.password

    let data = { email: email }
    let sql = "SELECT * FROM hbk_admin WHERE ?"

    con.query(sql, data, (err, admin_data) => {
        if (err) {
            throw err
        }

        // check user email in db       
        if (admin_data.length == 0) {
            return res
                .status(404)
                .json({ success: false, message: "User not found!" })
        }

        //parameters(body.password, database.password )
        bcrypt.compare(
            req.body.password,
            admin_data[0].password,
            function (err, result) {
                if(err){
                    throw(err)
                }
                if (result === false) {
                    return res.status(403).json({ message: "Invalid Credentials!" });
                }

                //generate token
                const token = jwt.sign({ admin_id: admin_data[0].admin_id }, "token"); //hbk_employees = secret key
                res.status(200).json({
                    success: true,
                    data: admin_data,
                    token: token,
                    message: "Auth Success!",
                });
            }
        );

    })
}
