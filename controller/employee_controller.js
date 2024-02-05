
const con = require('../db_connection/db_connection')

module.exports.add_employee = function(req, res){

    if(req.file == undefined) {
        return res.status(400)
                .json({ message: "Please select a valid photo!" })
    }
    if(req.file == null) {
        return res.status(400)
                .json({ message: "Please selsect a photo!" })
    } 
    
    const data = {
        full_name : req.body.full_name,
        email : req.body.email,
        address : req.body.address,
        mobile : req.body. mobile,
        photo : req.file.filename,
        password : req.body.password
    }

    let sql = `INSERT INTO hbk_employees SET ?`

    con.query(sql, data, (err) => {
        if(err){
            return res.status(400).json({
                success : false,
                message : "SOmething went wrong!",
                error : err
            })
        }

        return res.status(200).json({
            success : true,
            message : "Employee has been added!"
        })
    })
    
}

module.exports.add_employee1 = function(req, res){
    
    const data = {
        full_name : req.body.full_name,
        email : req.body.email,
        address : req.body.address,
        mobile : req.body. mobile,
        password : req.body.password,
    }
    let sql = `INSERT INTO hbk_employees SET ?`

    con.query(sql, data, (err) => {
        if(err){
            return res.status(400).json({
                success : false,
                message : "SOmething went wrong!",
                error : err
            })
        }

        return res.status(200).json({
            success : true,
            message : "Employee has been added!"
        })
    })
    
}

module.exports.show_all_employees = function(req, res){
    
    let sql = `SELECT * from hbk_employees`

    con.query(sql, (err, result) => {

        if (err || result.length == 0){

            return res.status(400).json({
                success : false,
                message : "Unable to fetch employee data!",
                error : err  
            })
        }
        
        return res.status(200).json({
            success : true,
            message : "Data fetched successfully!",
            data : result
        })
        
    })
}

module.exports.show_employee = function(req, res){
    
    const id = parseInt(req.params.id)

    let sql = `SELECT * FROM hbk_employees WHERE id = ?`

    con.query(sql, id, (err, result) => {
        if(err){
            return res.status(400).json({
                success : false,
                message : "Something went wrong!",
                error : err   
            })
        }
        if(result.length == 0){
            return res.status(400).json({
                success : false,
                message : "Employee data not found!"   
            })
        }

        return res.status(200).json({
            success : true,
            message : "Employee data found!",
            data : result
        })
    })
}

//with photo
// module.exports.update_employee = function(req, res){

//     const id = parseInt(req.params.id)

//     let employee_details = [{
//         full_name : req.body.full_name,
//         email : req.body.email,
//         address : req.body.address,
//         mobile : req.body. mobile
//     }, id]
    
//     let sql = `UPDATE hbk_employees SET ? WHERE id = ?`

//     con.query(sql, employee_details, (err) => {

//         if (err){
//             return res.status(400).json({
//                 success : false,
//                 message : "Something went wrong!",
//                 error : err
//             })
//         }

//         return res.status(200).json({
//             success : true,
//             message : "Employee details updated successfully!"
//         })
//     })
// }


//without photo
module.exports.update_employee1 = function(req, res){

    const id = parseInt(req.params.id)

    let employee_details = [{
        full_name : req.body.full_name,
        email : req.body.email,
        address : req.body.address,
        mobile : req.body. mobile
    }, id]
    
    let sql = `UPDATE hbk_employees SET ? WHERE id = ?`

    con.query(sql, employee_details, (err) => {

        if (err){
            return res.status(400).json({
                success : false,
                message : "Something went wrong!",
                error : err
            })
        }

        return res.status(200).json({
            success : true,
            message : "Employee details updated successfully!"
        })
    })
}

module.exports.delete_employee = function(req, res){
    
    const id = parseInt(req.params.id)

    let sql = `DELETE FROM hbk_employees WHERE id = ?`

    con.query(sql, id, (err) => {
        if(err){
            return res.status(400).json({
                success : false,
                message : "Something went wrong!",
                error : err
            })
        }

        return res.status(200).json({
                success : true,
                message : "Employee has been removed!"
            })
    })
}