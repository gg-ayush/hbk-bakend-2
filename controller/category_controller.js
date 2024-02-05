
const con = require('../db_connection/db_connection')

module.exports.add_category = function (req, res) {

    if (req.file == undefined) {
        return res.status(400)
            .json({ message: "Please select a valid photo!" })
    }
    if (req.file == null) {
        return res.status(400)
            .json({ message: "Please select a photo!" })
    }

    const category_name = req.body.category_name
    const category_photo = req.file.filename

    let data = { category_name: category_name, category_photo: category_photo }
    let sql = `INSERT INTO hbk_categories SET ?`

    con.query(sql, data, (err) => {
        if (err) {
            throw err
        }
        return res
            .status(200)
            .json({ success: true, message: "Category added successfully!" });
    });

}

module.exports.show_all_categories = function (req, res) {

    let sql = `SELECT * FROM hbk_categories`

    con.query(sql, (err, result) => {

        if (err) {

            throw (err)
        }
        return res
            .status(200)
            .json({ success: true, message: "All categories fetched!", data: result });

    })
};

module.exports.show_category = function (req, res) {

    let id = parseInt(req.params.id)
    let sql = `SELECT * FROM hbk_categories WHERE category_id = ?`

    con.query(sql, id, (err, result) => {
        if (err) {
            throw (err)
        }
        return res
            .status(200)
            .json({ success: true, message: "Category details fetched!", data: result });
    })
};

//update route with photo
module.exports.update_category = function (req, res) {

    if (req.file == undefined) {
        return res.status(400)
            .json({ message: "Please select a valid photo!" })
    }
    if (req.file == null) {
        return res.status(400)
            .json({ message: "Please selsect a photo!" })
    }

    const id = parseInt(req.params.id)
    const category_name = req.body.category_name
    const category_photo = req.file.filename

    let data = [{ category_name: category_name, category_photo: category_photo }, id]

    let sql = `UPDATE hbk_categories SET ? WHERE category_id = ?`;

    con.query(sql, data, (err) => {

        if (err) {
            throw (err)
        }
        return res.status(200)
            .json({ success: true, message: "Category Updated!" });

    })
};

//update route without photo
module.exports.update_category1 = function (req, res) {
    
        const id = parseInt(req.params.id)
        const category_name = req.body.category_name

        let data = [{ category_name: category_name }, id]

        let sql = `UPDATE hbk_categories SET ? WHERE category_id = ?`;

        con.query(sql, data, (err) => {

            if (err) {
                throw (err)
            }
            return res.status(200)
                .json({ success: true, message: "Category Updated!" });

        })
   
};

module.exports.delete_category = function (req, res) {

    let id = parseInt(req.params.id)
    let sql = `DELETE FROM hbk_categories WHERE category_id = ?`

    con.query(sql, id, (err) => {

        if (err) {
            throw (err)
        }
        return res
            .status(200)
            .json({ success: true, message: "Category deleted!" });

    })
};