const express=require('express');
const app=express();
const cors=require('cors');
const morgan=require('morgan');
const dotenv=require('dotenv').config();
const helmet=require('helmet');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use(morgan('tiny'));
app.use(helmet());
app.use(function (req, res, next) {
  res.setHeader('Cross-Origin-Resource-Policy', 'same-site')
  next()
})

app.use('/auth',require('./routes/auth'));
app.use('/users',require('./routes/user'));
app.use('/products',require('./routes/product'));
app.use('/carts',require('./routes/cart'));
app.use('/orders',require('./routes/order'));

app.use('/public/uploads',express.static(__dirname+'/public/uploads'));

module.exports=app;