import './register.css';

export default function Register(){
	return(
		<div className="container">
			<div className="register-wrapper">
				<h2 className="register-title">CREATE AN ACCOUNT</h2>

				<div className="inputs-wrapper">
					<input type="text" placeholder="First name" />
					<input type="text" placeholder="Last name" />
					<input type="text" placeholder="Username" />
					<input type="email" placeholder="Email" />
					<input type="password" placeholder="Password" />
					<input type="password" placeholder="Verify password" />
				</div>

				<div className="agree-terms">
					<p>By creating an account. I consent to the processing of my personal data in accordance with the <strong>PRIVACY POLICY</strong></p>
				</div>

				
				<button className="button-create">CREATE</button>
				

			</div>
		</div>
	)
}