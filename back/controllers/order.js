const Order=require('../models/Order');

const controller={
	createOrder:async(req,res)=>{
		const newOrder=new Order(req.body);

		try{
			const saved=await newOrder.save();
			if(!saved) return res.status(400).send('could not save');

			return res.status(200).send(saved);

		}catch(error){
			console.log(error);
			return res.status(500).send(error);
		}
	},

	getOrder:async(req,res)=>{
		try{
			const order=await Order.findOne({userId:req.params.id});
			if(!order) return res.status(404).send('order not exist');

			return res.status(200).send(order);

		}catch(error){
			console.log(error);
			return res.status(500).send(error);
		}
	},

	updateOrder:async(req,res)=>{
		try{
			const updated=await Order.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});
			if(!updated) return res.status(400).send('couldnot update');

			return res.status(200).send(updated);

		}catch(error){
			console.log(error);
			return res.status(500).send(error);
		}
	},

	deleteOrder:async(req,res)=>{
		try{
			await Order.findByIdAndDelete(req.params.id);

			return res.status(200).send('deleted product');
		}catch(error){
			console.log(error);
			return res.status(500).send(error);
		}
	},

	getOrders:async(req,res)=>{
		try{
			const orders=await Order.find();
			if(!orders) return res.status(404).send('no orders');

			return res.status(200).send(orders);

		}catch(error){
			console.log(error);
			return res.status(500).send(error);
		}
	},

	income:async(req,res)=>{
		const date=new Date();
		const lastMonth=new Date(date.setMonth(date.getMonth()-1));
		const prevMonth=new Date(new Date().setMonth(lastMonth.getMonth()-1));

		try{
			const income=await Order.aggregate([
				{ $match: { createdAt:{ $gte: lastMonth } } },
				{
					$project:{
						month:{ $month: '$createdAt' },
						sales: '$amount'
					},
				},
				{
					$group:{
						_id:'$month',
						total:{ $sum: '$sales' }
					}
				}
			])

			return res.status(200).send(income);

		}catch(error){
			console.log(error);
			return res.status(500).send(error);
		}
	}

}

module.exports=controller;