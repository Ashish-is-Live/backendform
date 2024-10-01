const express=require('express');
const router=express.Router();
const {createEmployee,getEmployess}=require('../controllers/createEmployee')
router.post('/createemployee',createEmployee);
router.get('/getemployees',getEmployess);

module.exports=router;