
const jwt = require("jsonwebtoken")
const con = require('../db_connection/db_connection')

//admin authorization
module.exports.verify_admin = function(req, res, next){

    const token = req.headers.authorization.split(" ")[1];
   
    jwt.verify(token, "token", (err, decoded) => {
        if (err){
            return res.status(401).json({message : err})
        }

        console.log(decoded)
        let sql = `SELECT * FROM hbk_admin WHERE admin_id = ?`

        con.query(sql, decoded.admin_id, (err, result) => {
            if (err) {
                return res.status(401).json({message : err})
            }

            req.admin_data = result
            next();
                
        })
    }) 

}