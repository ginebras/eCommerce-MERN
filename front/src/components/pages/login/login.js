import { Link,useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch,useSelector } from 'react-redux';

import './login.css';

import { loginFetch } from '../../../config/redux/reducers/apiCalls';

export default function Login(){
	const { register,handleSubmit,formState:{errors}}=useForm();
	const dispatch=useDispatch();
	const loginError=useSelector(state=>state.auth.error);
	const navigate=useNavigate();

	const submitLogin=async (data)=>{
		await loginFetch(dispatch,data);

		await localStorage.getItem('token') && navigate('/');
	}

	return(
		<div className="container">
			<form className="login-wrapper" onSubmit={handleSubmit(submitLogin)}>
				<h2 className="login-title">LOG INTO YOUR ACCOUNT</h2>

				<div className="inputs-wrapper-login">					
					{ errors.email && <span>Email is required</span> }
					<input type="email" placeholder="Email" {...register('email',{required:true})}/>

					{ errors.password && <span>Password is required</span> }
					<input type="password" placeholder="Password" {...register('password',{required:true})}/>
					
					{ loginError && <span className="alert">{loginError}</span>}
				</div>
				
				<button className="button-create-login" type="submit">LOGIN</button>
				
				<div className="actions-redirect">
					<Link to="/" className="link">FORGOT PASSWORD?</Link><br/>
					<Link to="/register" className="link">CREATE AN ACCOUNT</Link>
				</div>
					
			</form>
		</div>
	)
}