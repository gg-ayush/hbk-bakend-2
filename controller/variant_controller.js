const mysql = require('mysql');
const pool = require('../db_connection/db_connection');

module.exports.addVariant = (req, res) => {
    const data = {
        product_id: req.body.product_id,
        variant_name: req.body.variant_name,
        // Add other necessary fields
    };

    const sql = 'INSERT INTO variants SET ?';

    pool.query(sql, data, (err) => {
        if (err) {
            throw err;
        }

        return res.status(200).json({
            success: true,
            message: "Variant added successfully!"
        });
    });
};

module.exports.getVariantsByProductId = (req, res) => {
    const productId = parseInt(req.params.product_id);
    const sql = 'SELECT * FROM variants WHERE product_id = ?';

    pool.query(sql, productId, (err, result) => {
        if (err) {
            throw err;
        }

        return res.status(200).json({
            success: true,
            message: "Variants fetched by product ID!",
            data: result
        });
    });
};

module.exports.updateVariant = (req, res) => {
    const id = parseInt(req.params.id);
    const data = {
        product_id: req.body.product_id,
        variant_name: req.body.variant_name,
        // Add other necessary fields
    };

    const sql = 'UPDATE variants SET ? WHERE variant_id = ?';

    pool.query(sql, [data, id], (err) => {
        if (err) {
            throw err;
        }

        return res.status(200).json({
            success: true,
            message: "Variant updated successfully!"
        });
    });
};

module.exports.deleteVariant = (req, res) => {
    const id = parseInt(req.params.id);
    const sql = 'DELETE FROM variants WHERE variant_id = ?';

    pool.query(sql, id, (err) => {
        if (err) {
            throw err;
        }

        return res.status(200).json({
            success: true,
            message: "Variant deleted successfully!"
        });
    });
};
