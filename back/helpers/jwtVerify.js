const jwt=require('jsonwebtoken');

const verifyToken=(req,res,next)=>{
	const tokenHeader=req.header('token');
	if(tokenHeader){
		const token=tokenHeader.split(" ")[1];
		jwt.verify(token,process.env.JWT_SECRET,(error,user)=>{
			if(error) return res.status(403).send('token not valid');
			req.user=user;
			next();
		})

	}else{
		return res.status(401).send('Not authenticated');
	}
}

const verifyAndAuthorizeToken=(req,res,next)=>{
	verifyToken(req,res,()=>{
		if(req.user.userId===req.params.id || req.user.isAdmin){
			next()
		}else{
			res.status(403).send('not allowed');
		}
	})
}

const verifyAdmin=(req,res,next)=>{
	verifyToken(req,res,()=>{
		if(req.user.isAdmin){
			next()
		}else{
			res.status(403).send('not allowed');
		}
	})
}

module.exports={ verifyToken,verifyAndAuthorizeToken,verifyAdmin };