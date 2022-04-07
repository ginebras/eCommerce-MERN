const User=require('../models/User');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');

const controller={
	register:async(req,res)=>{
		const newUser=new User({
			email:req.body.email,
			username:req.body.username,
			password:bcrypt.hashSync(req.body.password),
			isAdmin:req.body.isAdmin
		})

		try{
			const saved=await newUser.save();
			if(!saved) return res.status(400).send('user not created');

			return res.status(200).send(saved); 

		}catch(error){
			console.log(error);
			return res.status(500).send(error);
		}
	},

	login:async(req,res)=>{
		const email=req.body.email;
		const username=req.body.username;
		console.log(req.body);

		try{
			const userExist= email? await User.findOne({email:email}) : await User.findOne({username:username});
			if(!userExist) return res.status(404).send('No email registered');

			const verifyPassword=await bcrypt.compareSync(req.body.password,userExist.password);
			if(!verifyPassword) return res.status(400).send('Wrong password');

			const token=jwt.sign(
				{
					userId:userExist.id,
					isAdmin:userExist.isAdmin
				},
				process.env.JWT_SECRET,
				{expiresIn:'3d'}	
			)

			return res.status(200).send({user:userExist,token});

		}catch(error){
			console.log(error);
			return res.status(500).send(error);
		}
	},

	verifyToken:async(req,res)=>{
		try{
			const user=await User.findById(req.user.userId);
			const { password,...others }=user._doc;

			return res.status(200).send(others);

		}catch(error){
			console.log(error);
			return res.status(500).send(error);
		}
	}
}

module.exports=controller;