const mongoose=require('mongoose');

const ProductSchema=mongoose.Schema({
	title:{
		type:String,
		required:true,
		unique:true
	},
	description:{
		type:String,
		required:true
	},
	img:{
		type:String,
		required:true
	},
	categories:[{
		type:String,
		required:true
	}],
	color:[{
		type:String,
		required:true
	}],
	sizes:[{
		type:String,
		required:true
	}],
	price:{
		type:Number,
		required:true
	},
	autor:{
		required:true,
		type:String
	}

},{timestamps:true})

module.exports=mongoose.model('product',ProductSchema);