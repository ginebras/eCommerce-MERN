import './home.css';

import Slider from '../../layout/slider/slider';
import Categories from '../../layout/categories/categories';
import PopularList from '../../layout/popularList/popularList';
import Newsletter from '../../layout/newsletter/newsletter';
import Navbar from '../../layout/navbar/navbar';
import Footer from '../../layout/footer/footer';
import Announcement from '../../layout/announcement/announcement';

export default function Home(){
	return(
		<div>
			<Announcement/>
			<Navbar/>			
			<Slider />
			<Categories />
			<PopularList />
			<Newsletter/>
			<Footer/>
		</div>
	)
}