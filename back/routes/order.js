const router=require('express').Router();
const Order=require('../controllers/order');
const { verifyToken,verifyAndAuthorizeToken,verifyAdmin }=require('../helpers/jwtVerify');

router.post('/create',verifyToken,Order.createOrder);
router.get('/get/:id',verifyAdmin,Order.getOrder);
router.put('/update/:id',verifyAdmin,Order.updateOrder);
router.delete('/delete/:id',verifyAdmin,Order.deleteOrder);
router.get('/getCarts',verifyAdmin,Order.getOrders);
router.get('/income',verifyAdmin,Order.income);

module.exports=router;