const router=require('express').Router();
const User=require('../controllers/user');
const { verifyToken,verifyAndAuthorizeToken,verifyAdmin }=require('../helpers/jwtVerify');

router.put('/update/:id',verifyAndAuthorizeToken,User.updateUser);
router.delete('/remove/:id',verifyAndAuthorizeToken,User.removeUser);
router.get('/get/user',User.getUser);
router.get('/getUsers',verifyAdmin,User.getUsers);
router.get('/stats',verifyAdmin,User.stats);

module.exports=router;