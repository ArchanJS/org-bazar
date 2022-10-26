const router=require('express').Router();
const {order,capture}=require('../controllers/razor.con');

router.get('/order',order);

router.post('/capture/:paymentId',capture);

module.exports=router;