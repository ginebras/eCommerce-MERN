const Product=require('../models/Product');

const controller={
	postProduct:async(req,res)=>{
		req.body.price=parseInt(req.body.price);

		if(req.file){
			const baseName=`${req.protocol}://${req.get('host')}/public/uploads`;
			const filename=req.file.filename;
			req.body.img=`${baseName}${filename}`;
		}else{
			return res.status(400).send('no image');
		}

		const newProduct=new Product(req.body);
		
		try{
			const saved=await newProduct.save();
			if(!saved) return res.status(400).send('could not save');

			return res.status(200).send(saved);

		}catch(error){
			console.log(error);
			return res.status(500).send(error);
		}
	},

	getProduct:async(req,res)=>{
		try{
			const product=await Product.findById(req.params.id);
			if(!product) return res.status(404).send('product not exist');

			return res.status(200).send(product);

		}catch(error){
			console.log(error);
			return res.status(500).send(error);
		}
	},

	updateProduct:async(req,res)=>{
		try{
			const updated=await Product.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});
			if(!updated) return res.status(400).send('couldnot update');

			return res.status(200).send(updated);

		}catch(error){
			console.log(error);
			return res.status(500).send(error);
		}
	},

	deleteProduct:async(req,res)=>{
		try{
			await Product.findByIdAndDelete(req.params.id);

			return res.status(200).send('deleted product');
		}catch(error){
			console.log(error);
			return res.status(500).send(error);
		}
	},

	getProducts:async(req,res)=>{
		const qNew=req.query.new;
		const qCategory=req.query.category;
		try{
			var products;

			if(qNew){
				products=await Product.find().sort({ createdAt:-1}).limit(8);
			}else if(qCategory){
				products=await Product.find({
					categories:{
						$in:[qCategory]
					}
				});
			}else{
				products=await Product.find();
			}

			if(products.length===0) return res.status(404).send('no products');

			return res.status(200).send(products);

		}catch(error){
			console.log(error);
			return res.status(500).send(error);
		}
	},
}

module.exports=controller;