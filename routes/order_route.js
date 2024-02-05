const express = require('express');
const router = new express.Router();
const auth = require('../middleware/auth');
const orderController = require('../controller/order_controller');

// Create order
router.post('/order/create', orderController.create_order);

// Get all orders
router.get('/order/all', orderController.get_all_orders);

// Get order by ID
router.get('/order/:id', orderController.get_order_by_id);

// Delete order
router.delete('/order/delete/:id', orderController.delete_order);

module.exports = router;
