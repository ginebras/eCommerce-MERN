import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { axiosProducts } from '../../../config/axios';
import { useDispatch } from 'react-redux';

import './product.css';

import Newsletter from '../../layout/newsletter/newsletter';
import Navbar from '../../layout/navbar/navbar';
import Footer from '../../layout/footer/footer';
import Announcement from '../../layout/announcement/announcement';
import { addProduct } from '../../../config/redux/reducers/cartSlice';

export default function Product(){

	const [ product,setProduct ]=useState({});
	const id=useParams().id;
	const [ quantity,setQuantity ]=useState(0);
	const [ color,setColor ]=useState('');
	const [ size,setSize ]=useState('');
	const dispatch=useDispatch();

	useEffect(()=>{
		const productApi=async ()=>{
			try{
				const response=await axiosProducts.get(`/get/${id}`);
				setProduct(response.data);
			}catch(error){
				console.log(error);
			}
		}

		productApi();
	},[id])

	const handleQuantity=(data)=>{
		if(data==='inc'){
			setQuantity(quantity+1);
		}else{
			setQuantity(quantity>0 ? quantity-1 : 0);
		}
	}

	const handleAdd=()=>{
		if(color===''){
			return alert('Choose a color please');
		}else if(size===""){
			return alert('Choose a size please');
		}else if(quantity===0){
			return alert('Please choose a quantity');
		}

		dispatch(addProduct({...product,quantity,color,size}));
		alert('Product added to cart');
	}

	return(
		<div>
			<Announcement/>
			<Navbar/>

			<div className="product-details-wrapper">
				<div className="detail-img-wrapper">
					<img src={product?.img} alt="product" className="img-details" />
				</div>

				<div className="details-wrapper">
					<div className="details-info">
						<h1>{product?.title}</h1>
						<span>{product?.description}</span>
						<p>$ {parseInt(product?.price)}</p>
					</div>

					<div className="filters-container">
						<div className="filter-wrapper">
							<p>Color</p>
							{ product.color?.map((color,index)=>(
								<div className='filter-color' style={{backgroundColor:color==='white'? 'grey' : color}}  key={index} onClick={(e)=>setColor(color)}></div>
							)) }
						</div>

						<div className="filter-wrapper">
							<p>Size</p>
							<select onChange={(e)=>setSize(e.target.value)}>
								<option defaultValue={true} disabled selected >Size</option> 
					            { product.sizes?.map((size,index)=>(
					            	<option value={size} key={index}>{size}</option>
					            )) }
				          	</select>
						</div>
					</div>

					<div className="add-container">
						<div className="add-wrapper">
							<div className="icon-add-container" onClick={(e)=>handleQuantity('decr')}>
								<p>-</p>
							</div>

							<div className="amount-container">
								<p>{quantity}</p>
							</div>

							<div className="icon-add-container" onClick={(e)=>handleQuantity('inc')}>
								<p>+</p>
							</div>
						</div>

						<div className="add-wrapper-cart">
							<button onClick={handleAdd}>ADD TO CART</button>
						</div>
					</div>
				</div>
			</div>

			<Newsletter/>
			<Footer/>
		</div>
	)
}