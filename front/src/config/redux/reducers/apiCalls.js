import { loginStart,loginSuccess,loginFailure,verifyWithToken } from './authSlice';
import { axiosAuth } from '../../axios';

export const loginFetch=async(dispatch,user)=>{
	dispatch(loginStart());
	try{
		const response=await axiosAuth.post('/login',user);
		dispatch(loginSuccess(response.data));
	}catch(error){
		console.log(error);
		dispatch(loginFailure(error.response.data));
	}
}

export const verifyToken=async(dispatch)=>{
	try{
		const token=localStorage.getItem('token');
		const response=await axiosAuth.post('/get/tokenUser',{},{headers:{token:`Bearer ${token}`}});
		dispatch(verifyWithToken(response.data));
	}catch(error){
		console.log(error.response);
	}
}