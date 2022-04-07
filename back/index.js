const mongoose=require('mongoose');
const app=require('./app');

mongoose.Promise=global.Promise;

mongoose.connect(process.env.MONGOOSE_URL,{useUnifiedTopology:true,useNewUrlParser:true})
	.then(()=>{
		console.log('Conexion a base de datos establecida');

		app.listen(process.env.PORT,()=>{
			console.log(`Servidor escuchando en localhost:${process.env.PORT}`);
		})
	})