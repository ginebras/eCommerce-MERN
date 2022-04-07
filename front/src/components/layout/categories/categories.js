import './categories.css';

import { categories } from '../data';
import Category from '../category/category';

export default function Categories(){
	return(
		<div className="categories-wrapper">
			{ categories.map((item,index)=>(
				<Category key={index} item={item} />
			))}
		</div>
	)
}