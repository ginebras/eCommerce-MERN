import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';

import './product.css';

import { addWishProduct,deleteWishProduct } from '../../../config/redux/reducers/cartSlice';

export default function Product({product}){
	const dispatch=useDispatch();
	const wishlistProducts=useSelector(state=>state.cart.wishlist);
	const [ stylep,setStylep ]=useState('none');

	const handleWish=()=>{
		if(wishlistProducts.some((p)=>p._id===product._id)){
			dispatch(deleteWishProduct(product));
			alert('Deleted from wishlist');
			return setStylep('none');
		}else{
			dispatch(addWishProduct(product));
			alert('Added to wishlist');
			return setStylep('#d60f4b');
		}
	}

	const checkWishlist=()=>{
		if(wishlistProducts.some((p)=>p._id===product._id))
			return setStylep('#d60f4b');
		else
			return setStylep('none');
	}

	useEffect(()=>{
		checkWishlist();
	},[])

	return(
		<div className="product-container">
			
			<img src={product.img} alt="product" className="product-img"/>

			<div className="product-actions">
				<div className="icon-container">
					<i className="bi bi-cart-plus action-icon"></i>
				</div>
				
				<Link to={`/product-details/${product._id?.toLocaleString()}`}>
					<div className="icon-container">						
						<i className="bi bi-search action-icon"></i>				
					</div>
				</Link>
				
				<div className="icon-container" onClick={()=>handleWish(product)} style={{backgroundColor: stylep } } >
					<i className="bi bi-heart action-icon"></i>
				</div>
			</div>

		</div>
	)
}