import { useState,useEffect } from 'react';
import { axiosProducts } from '../../../config/axios';

import './productsList.css';

import Product from '../product/product';

export default function ProductList({cat,filters,sort}){

	const [ products,setProducts ]=useState([]);
	const [ filteredProducts,setFilteredProducts ]=useState([]);

	useEffect(()=>{
		const apiProducts=async()=>{
			try{
				const response=await axiosProducts.get(cat ? `/getProducts?category=${cat}` : `/getProducts?new=true`);
				setProducts(response.data);

			}catch(error){
				console.log(error);
			}
		}

		apiProducts();

	},[cat])

	useEffect(()=>{
		products && setFilteredProducts(
			products.filter((item)=>
				Object.entries(filters).every(([key,value])=>
					item[key].includes(value)
				)
			)
		)
	},[products,cat,filters])

	useEffect(()=>{
		if(sort==='newest'){
			setFilteredProducts((prev)=>
				[...prev].sort((a,b)=>a.createdAt - b.createdAt)
			)
		}else if(sort==="asc"){
			setFilteredProducts((prev)=>
				[...prev].sort((a,b)=>a.price - b.price)
			)
		}else{
			setFilteredProducts((prev)=>
				[...prev].sort((a,b)=>b.price - a.price)
			)
		}

	},[sort])

	return(
		<div className="productList-container">
			{ filteredProducts.map((product,index)=>(
				<Product key={index} product={product} />
			)) }
		</div>
	)
}