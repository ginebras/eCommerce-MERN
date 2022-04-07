import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import './products.css';

import Newsletter from '../../layout/newsletter/newsletter';
import ProductsList from '../../layout/productsList/productsList';
import Navbar from '../../layout/navbar/navbar';
import Footer from '../../layout/footer/footer';
import Announcement from '../../layout/announcement/announcement';

export default function Products(){
	const [ searchParams,setSearchParams ]=useSearchParams();
	const [ filters,setFilters ]=useState({});
	const [ sort,setSort ]=useState('newest');
	const cat=searchParams.get('category');

	const handleFilters=(e)=>{
		setFilters({
			...filters,
			[e.target.name]:e.target.value
		})
	}

	return(
		<div>
			<Announcement/>
			<Navbar/>

			<div className="products-container">
				<h1>Dresses</h1>

				<div className="filter-container">
					<div className="selects-container">
						<h2>Filter Products:</h2>
						
						<select name="color" onChange={handleFilters}>
							<option>
				              Color
				            </option>
				            <option value="white">White</option>
				            <option value="black">Black</option>
				            <option value="red">Red</option>
				            <option value="blue">Blue</option>
				            <option value="yellow">Yellow</option>
				            <option value="green">Green</option>
						</select>

						<select name="size" onChange={handleFilters}>
			            	<option>
			              	Size
			            	</option>
				            <option value="xs">XS</option>
				            <option value="s">S</option>
				            <option value="m">M</option>
				            <option value="l">L</option>
				            <option value="xl">XL</option>
			          	</select>
					</div>

					<div className="selects-container">
						<h2>Sort Products:</h2>

						<select name="sort" onChange={e=>setSort(e.target.value)}>
							<option value="newest">Newest</option>
				            <option value="asc">Price (asc)</option>
				            <option value="desc">Price (desc)</option>
						</select>
					</div>
				</div>
			</div>

			<ProductsList cat={cat} filters={filters} sort={sort}/>
			<Newsletter/>
			<Footer/>
		</div>
	)
}