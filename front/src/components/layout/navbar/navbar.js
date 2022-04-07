import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './navbar.css';

export default function Nabvar(){
	const quantity=useSelector(state=>state.cart.quantity);
	const logged=useSelector(state=>state.auth.logged);

	return(
		<header className="header-wrapper">
			
			<div className="left-header">
				<input placeholder="Enter product name" className="header-input" type="text" />
				<i className="bi bi-search search-icon"></i>
			</div>
			<div className="center-header">
				<Link to="/" className="link">
					<h2 className="title-header">eCommerce React</h2>
				</Link>
			</div>
			<div className="right-header">
				<ul className="header-list">
					{ logged ? (
						<>
							<li>
								<span className="list-span">Products</span>
							</li>
							<li className="list-span">
								<span>Profile</span>
							</li>
							<li className="li-cart">
								<Link to="/basket" className="link">
									<i className="bi bi-cart"></i>
									<p>{quantity}</p>
								</Link>
							</li>
							
						</>
					) : (
						<>
							<li>
								<span className="list-span">Register</span>
							</li>
							<li>
								<span className="list-span">Login</span>
							</li>
						</>
					)}
				</ul>
			</div>

		</header>
	)
}