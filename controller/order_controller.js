const mysql = require('mysql');
const pool = require('../db_connection/db_connection');

module.exports.createOrder = (req, res) => {
    const orders = req.body.orders;

    if (!Array.isArray(orders) || orders.length === 0) {
        return res.status(400).json({
            success: false,
            message: "No orders provided"
        });
    }

    const sql = 'INSERT INTO orders (product_id, variant_id, quantity) VALUES ?';
    const values = orders.map(order => [order.product_id, order.variant_id, order.quantity]);

    pool.query(sql, [values], (err) => {
        if (err) {
            throw err;
        }

        return res.status(200).json({
            success: true,
            message: "Orders created successfully!"
        });
    });
};

module.exports.getAllOrders = (req, res) => {
    const sql = 'SELECT * FROM orders';

    pool.query(sql, (err, result) => {
        if (err) {
            throw err;
        }

        return res.status(200).json({
            success: true,
            message: "All orders fetched!",
            data: result
        });
    });
};

module.exports.getOrderById = (req, res) => {
    const id = parseInt(req.params.id);
    const sql = 'SELECT * FROM orders WHERE order_id = ?';

    pool.query(sql, id, (err, result) => {
        if (err) {
            throw err;
        }

        return res.status(200).json({
            success: true,
            message: "Order details fetched!",
            data: result
        });
    });
};

module.exports.deleteOrder = (req, res) => {
    const id = parseInt(req.params.id);
    const sql = 'DELETE FROM orders WHERE order_id = ?';

    pool.query(sql, id, (err) => {
        if (err) {
            throw err;
        }

        return res.status(200).json({
            success: true,
            message: "Order deleted successfully!"
        });
    });
};
