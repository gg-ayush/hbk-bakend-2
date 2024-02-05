
const express = require('express')
const router = new express.Router()
const employee_controller = require('../controller/employee_controller')
const auth = require('../middleware/auth')
const upload = require('../middleware/fileupload')

//with photo add employee
router.post('/employee/add', upload.single("image"), employee_controller.add_employee)

//without photo add employee
router.post('/employee/add1', employee_controller.add_employee1)

router.get('/employee/showall', employee_controller.show_all_employees)

router.get('/employee/show/:id', employee_controller.show_employee)

//with photo update
// router.put('/employee/update/:id', upload.single("image"), employee_controller.update_employee)

//without photo update
router.put('/employee/update1/:id', employee_controller.update_employee1)

router.delete('/employee/delete/:id', employee_controller.delete_employee)

module.exports = router;