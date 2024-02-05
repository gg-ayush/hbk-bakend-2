
const express = require('express')
const router = new express.Router()
const auth = require('../middleware/auth')
const product_controller = require('../controller/product_controller') 
const upload = require('../middleware/fileupload')

router.post('/product/add', upload.single("image"), product_controller.add_product)

router.get('/product/showall', product_controller.show_all_product)

router.get('/product/show/:id',  product_controller.show_product)

//filter by categories
router.get('/product/:category_id', product_controller.show_products_by_categories)

//upadte product with photo
router.put('/product/update/:id',  upload.single("image"), product_controller.update_product)

//upadte product without photo
router.put('/product/update1/:id', product_controller.update_product1)

router.delete('/product/delete/:id', product_controller.delete_product)

module.exports = router

