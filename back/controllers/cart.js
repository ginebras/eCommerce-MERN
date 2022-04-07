const Cart=require('../models/Cart');

const controller={
	createCart:async(req,res)=>{
		const newCart=new Cart(req.body);

		try{
			const saved=await newCart.save();
			if(!saved) return res.status(400).send('could not save');

			return res.status(200).send(saved);

		}catch(error){
			console.log(error);
			return res.status(500).send(error);
		}
	},

	getCart:async(req,res)=>{
		try{
			const cart=await Cart.findOne({userId:req.params.id});
			if(!cart) return res.status(404).send('cart not exist');

			return res.status(200).send(cart);

		}catch(error){
			console.log(error);
			return res.status(500).send(error);
		}
	},

	updateCart:async(req,res)=>{
		try{
			const updated=await Cart.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});
			if(!updated) return res.status(400).send('couldnot update');

			return res.status(200).send(updated);

		}catch(error){
			console.log(error);
			return res.status(500).send(error);
		}
	},

	deleteCart:async(req,res)=>{
		try{
			await Cart.findByIdAndDelete(req.params.id);

			return res.status(200).send('deleted product');
		}catch(error){
			console.log(error);
			return res.status(500).send(error);
		}
	},

	getCarts:async(req,res)=>{
		try{
			const carts=await Cart.find();
			if(!carts) return res.status(404).send('no carts');

			return res.status(200).send(carts);

		}catch(error){
			console.log(error);
			return res.status(500).send(error);
		}
	}
}

module.exports=controller;