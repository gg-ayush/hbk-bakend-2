
const express = require("express");
const router = new express.Router();
const auth = require('../middleware/auth');
const category_controller = require('../controller/category_controller');
const upload = require('../middleware/fileupload')

router.post('/category/add', upload.single("image"), category_controller.add_category);

router.get('/category/showall', category_controller.show_all_categories);

router.get('/category/show/:id',  category_controller.show_category);

//update with photo
router.put('/category/update/:id', upload.single("image"), category_controller.update_category);

//update without photo
router.put('/category/update1/:id', category_controller.update_category1);

router.delete('/category/delete/:id', category_controller.delete_category);

module.exports = router