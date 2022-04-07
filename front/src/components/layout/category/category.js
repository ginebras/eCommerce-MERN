import { Link } from 'react-router-dom';

import './category.css';

export default function Category({item}){
	return(
		<div className="category-container">	
			<img src={item.img} alt="category" className="img-category" />	

			<div className="category-info">
				<h2 className="title-category">{item.title}</h2>
				<Link to={`/products/${item.category}`} className="button-info">SHOW NOW</Link>
			</div>
		</div>
	)
}