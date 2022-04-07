const router=require('express').Router();
const Auth=require('../controllers/auth');
const { verifyToken }=require('../helpers/jwtVerify');

router.post('/register',Auth.register);
router.post('/login',Auth.login);
router.post('/get/tokenUser',verifyToken,Auth.verifyToken);

module.exports=router;