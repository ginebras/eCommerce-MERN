import './footer.css';

export default function Footer(){
	return(
		<footer>
			<div className="left-footer">
				<span className="title-footer">eCommerce React</span>
				<p className="description-footer">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
					Integer pellentesque leo lorem, a pulvinar lectus finibus vel. 
					Curabitur convallis tellus eget neque pulvinar, non molestie orci dignissim.
				</p>
				<div className="social-container">

					<div className="social-icon">
						<i className="bi bi-instagram"></i>
					</div>
					<div className="social-icon">
						<i className="bi bi-instagram"></i>
					</div>
					<div className="social-icon">
						<i className="bi bi-instagram"></i>
					</div>

				</div>
			</div>
			<div className="center-footer">
				<h2 className="p-footer">Useful links</h2>				

				<ul className="footer-links">
					<li className="link-footer">
						Home
					</li>
					
					<li className="link-footer">
						Man Fashion	
					</li>
					
					<li className="link-footer">
						Accesories	
					</li>
					<li className="link-footer">
						Order Tracking	
					</li>
					<li className="link-footer">
						Wishlist	
					</li>
					<li className="link-footer">
						Cart	
					</li>
					<li className="link-footer">
						Woman Fashion	
					</li>
					<li className="link-footer">
						My Account	
					</li>
					<li className="link-footer">
						Wishlist	
					</li>
					<li className="link-footer">
						Terms	
					</li>
				</ul>
			</div>
			<div className="right-footer">
				<h3 >Contact</h3>
		        <div className="contact-footer">
		          <p> 622 Dixie Path , South Tobinchester 98336</p>
		        </div>
		        <div className="contact-footer">
		          <p> +1 234 56 78</p>
		        </div>
		        <div className="contact-footer">
		          <p> contact@lama.dev</p>
		        </div>
		        <img alt="credit" src="https://i.ibb.co/Qfvn4z6/payment.png" />
			</div>
		</footer>
	)
}