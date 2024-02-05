const express = require('express');
const router = new express.Router();
const auth = require('../middleware/auth');
const variantController = require('../controller/variant_controller');

// Add variant
router.post('/variant/add', variantController.add_variant);

// Get variants by product ID
router.get('/variant/product/:product_id', variantController.get_variants_by_product);

// Update variant
router.put('/variant/update/:id', variantController.update_variant);

// Delete variant
router.delete('/variant/delete/:id', variantController.delete_variant);

module.exports = router;
