
const pool = require('../db_connection/db_connection');

module.exports.addProduct = (req, res) => {
    const data = {
        product_name: req.body.product_name,
        category_id: req.body.category_id,
        // Add other necessary fields
    };

    const sql = 'INSERT INTO products SET ?';

    pool.query(sql, data, (err) => {
        if (err) {
            throw err;
        }

        return res.status(200).json({
            success: true,
            message: "Product added successfully!"
        });
    });
};

module.exports.getAllProducts = (req, res) => {
    const sql = 'SELECT * FROM products';

    pool.query(sql, (err, result) => {
        if (err) {
            throw err;
        }

        return res.status(200).json({
            success: true,
            message: "All products details fetched!",
            data: result
        });
    });
};

module.exports.getProductById = (req, res) => {
    const id = parseInt(req.params.id);
    const sql = 'SELECT * FROM products WHERE product_id = ?';

    pool.query(sql, id, (err, result) => {
        if (err) {
            throw err;
        }

        return res.status(200).json({
            success: true,
            message: "Product details fetched!",
            data: result
        });
    });
};

module.exports.getProductsByCategory = (req, res) => {
    const categoryId = parseInt(req.params.category_id);
    const sql = 'SELECT * FROM products WHERE category_id = ?';

    pool.query(sql, categoryId, (err, result) => {
        if (err) {
            throw err;
        }

        return res.status(200).json({
            success: true,
            message: "Products filtered by category!",
            data: result
        });
    });
};

module.exports.updateProduct = (req, res) => {
    const id = parseInt(req.params.id);
    const data = {
        product_name: req.body.product_name,
        category_id: req.body.category_id,
        // Add other necessary fields
    };

    const sql = 'UPDATE products SET ? WHERE product_id = ?';

    pool.query(sql, [data, id], (err) => {
        if (err) {
            throw err;
        }

        return res.status(200).json({
            success: true,
            message: "Product updated successfully!"
        });
    });
};

module.exports.deleteProduct = (req, res) => {
    const id = parseInt(req.params.id);
    const sql = 'DELETE FROM products WHERE product_id = ?';

    pool.query(sql, id, (err) => {
        if (err) {
            throw err;
        }

        return res.status(200).json({
            success: true,
            message: "Product deleted successfully!"
        });
    });
};
