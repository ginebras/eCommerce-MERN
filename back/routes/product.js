const router=require('express').Router();
const Product=require('../controllers/product');
const { verifyToken,verifyAndAuthorizeToken,verifyAdmin }=require('../helpers/jwtVerify');
const multer=require('multer');

const MYMES_TYPES={
	"image/png":'png',
	'image/jpg':'jpg',
	'image/jpeg':'jpeg'
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
  	const isValid=MYMES_TYPES[file.mimetype];
  	let uploadError=new Error('invalid image type');

  	if(isValid) uploadError=null;
    cb(null, 'public/uploads');
  },
  filename: function (req, file, cb) {
    const fieldname=file.originalname

    cb(null, `${Date.now()}-${fieldname}`)
  }
})

const upload = multer({ storage: storage })

router.post('/post',upload.single('image'),verifyAdmin,Product.postProduct);
router.get('/get/:id',Product.getProduct);
router.put('/update/:id',verifyAdmin,Product.updateProduct);
router.delete('/delete/:id',verifyAdmin,Product.deleteProduct);
router.get('/getProducts',Product.getProducts);

module.exports=router;