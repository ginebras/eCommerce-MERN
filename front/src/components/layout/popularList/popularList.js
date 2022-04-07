import { useState,useEffect } from 'react';
import { axiosProducts } from '../../../config/axios';

import '../productsList/productsList.css';

import Product from '../product/product';

export default function PopularList(){

	const [ popularProducts,setProducts ]=useState([]);

	useEffect(()=>{
		const popularAxios=async ()=>{
			try{
				const response=await axiosProducts.get('/getProducts?new=true');
				setProducts(response.data);

			}catch(error){
				console.log(error);
			}
		}

		popularAxios();

	},[])

	return(
		<div className="productList-container">
			{ popularProducts.map((product,index)=>(
				<Product product={product} key={index} />
			))}
		</div>
	)
}