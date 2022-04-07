const router=require('express').Router();
const Cart=require('../controllers/cart');
const { verifyToken,verifyAndAuthorizeToken,verifyAdmin }=require('../helpers/jwtVerify');

router.post('/create',verifyToken,Cart.createCart);
router.get('/get/:id',verifyAndAuthorizeToken,Cart.getCart);
router.put('/update/:id',verifyAndAuthorizeToken,Cart.updateCart);
router.delete('/delete/:id',verifyAndAuthorizeToken,Cart.deleteCart);
router.get('/getCarts',verifyAdmin,Cart.getCarts);

module.exports=router;