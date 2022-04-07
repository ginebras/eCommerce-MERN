const User=require('../models/User');
const bcrypt=require('bcryptjs');

const controller={
	updateUser:async(req,res)=>{
		try{

			if(req.body.password){
				try{
					req.body.password=await bcrypt.hashSync(req.body.password,10);
				}catch(error){
					console.log(error);
					return res.status(500).send(error);
				}
			}

			const saved=await User.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});
			if(!saved) return res.status(400).send('not saved');

			return res.status(200).send(saved);

		}catch(error){
			console.log(error);
			return res.status(500).send(error);
		}
	},

	removeUser:async(req,res)=>{
		try{
			const removed=await User.findByIdAndDelete(req.params.id);
			if(!removed) return res.status(404).send('user not exist');

			return res.status(200).send('removed user');

		}catch(error){
			console.log(error);
			return res.status(500).send(error);
		}
	},

	getUser:async(req,res)=>{
		const username=req.query.username;
		const id=req.query.id;
		try{
			const userExist= username ? await User.findOne({username:username}) : await User.findById({id});
			if(!userExist) return res.status(404).send('user not exist');

			const { password,...others }=userExist._doc;

			return res.status(200).send(others);

		}catch(error){
			console.log(error);
			return res.status(500).send(error);
		}
	},

	getUsers:async(req,res)=>{
		const query=req.query.new;
		try{
			const users= query ? await User.find().sort({_id:-1}).limit(query) :await User.find();
			if(!users) return res.status(404).send('no users');

			return res.status(200).send(users);

		}catch(error){
			console.log(error);
			return res.status(500).send(error);
		}
	},

	stats:async(req,res)=>{
		const date=new Date();
		const lastYear=new Date(date.setFullYear(date.getFullYear()-1));
		try{
			const data=await User.aggregate([
				{ $match: { createdAt: { $gte: lastYear } } },
				{
					$project: { 
						month: { $month: '$createdAt' }
					}
				},
				{
					$group: {
						_id:'$month',
						total: { $sum: 1 }
					}
				}
			])

			return res.status(200).send(data);

		}catch(error){
			console.log(error);
			return res.status(500).send(error);
		}
	}
}

module.exports=controller;