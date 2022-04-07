import { useSelector,useDispatch } from 'react-redux';

import './basket.css';

import Navbar from '../../layout/navbar/navbar';
import Footer from '../../layout/footer/footer';
import Announcement from '../../layout/announcement/announcement';

import { deleteWishProduct } from '../../../config/redux/reducers/cartSlice';

export default function Basket(){
	const productsCart=useSelector(state=>state.cart.products);
	const totalCart=useSelector(state=>state.cart.total);
	const wishAmount=useSelector(state=>state.cart.wishlistAmount);
	const wishlistProducts=useSelector(state=>state.cart.wishlist);
	const dispatch=useDispatch();

	return(
		<div>
			<Announcement/>
			<Navbar/>

			<div className="basket-wrapper">
				<h1 className="basket-title">YOUR BAG</h1>

				<div className="basket-actions">
					<button className="button-shopping">CONTINUE SHOPPING</button>

					<div className="links-actions">
						{ /* MODAL TRIGGER */ }
						<p className="wishlist-p" data-bs-toggle="modal" data-bs-target="#exampleModal">Your Wishlist({wishAmount})</p>
					</div>

					<button className="checkout-button">CHECKOUT NOW</button>
				</div>

				<div className="bottom">
					<div className="info">
						{ productsCart?.map((product,index)=>(
							<div key={index}>
								<div className="product-basket">
									<div className="basket-details">
										
										<img alt="img" className="img-info" src={product?.img} />
										
										<div className="product-info">				
											<div className="product-text">
												<strong>Product:</strong> {product?.title}
											</div>

											<div className="product-text">
												<strong>Id:</strong> {product?._id}
											</div>

											<div className="product-text">
												<div className="color-icon" style={{backgroundColor:product.color==='white' ? 'grey' : product.color }}></div>
											</div>

											<div className="product-text">
												<strong>Size:</strong> {product.size}
											</div>
										</div>

										<div className="product-action">
											<div className="actions-wrapper">
												<p className="add-icon">-</p>
												<p>{product.quantity}</p>
												<p className="add-icon">+</p>
											</div>

											<div className="price-container">
												<span>$ {parseInt(product.price * product.quantity)}</span>
											</div>
										</div>
									</div>
								</div>
								<hr/>
							</div>
						))}
					</div>

					<div className="summary">
						<h1 className="summary-title">ORDER SUMMARY</h1>

						<div className="summary-item">
							<div className="summary-item-name"> Subtotal </div>
							<div className="summary-item-price">$ {parseInt(totalCart)}</div>
						</div>

						<div className="summary-item">
							<div className="summary-item-name"> Estimated Shipping </div>
							<div className="summary-item-price">$5.80</div>
						</div>

						<div className="summary-item">
							<div className="summary-item-name"> Shipping Discount </div>
							<div className="summary-item-price">-$5.80</div>
						</div>

						<div className="summary-item">
							<div className="summary-total-name"> Total </div>
							<div className="summary-total-price">$ {parseInt(totalCart)}</div>
						</div>

						<button className="checkout-total">CHECKOUT NOW</button>
					</div>
				</div>
			</div>

			<Footer/>

			{/* Modal */}
			<div className="modal" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
			  <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
			    <div className="modal-content">
			      <div className="modal-header">
			        <h5 className="modal-title" id="exampleModalLabel">This is your wishlist</h5>
			        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
			      </div>
			      <div className="modal-body">
			        { wishlistProducts.map((product,index)=>(
			        	<div className="modal-product-container" key={index}>
							
							<img alt="img" className="img-info-modal" src={product?.img} />
							
							<div className="info-modal">
								<h4 className="h4-modal">{product?.title}</h4>
								<h4 className="h4-modal">${product.price}</h4>
								<i className="bi bi-x-octagon modal-icon" onClick={()=>dispatch(deleteWishProduct(product))}></i>
							</div>
						</div>
			        ))}
			      </div>
			      <div className="modal-footer">
			        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
			      </div>
			    </div>
			  </div>
			</div>


		</div>
	)
}
