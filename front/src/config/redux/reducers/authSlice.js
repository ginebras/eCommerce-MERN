import { createSlice } from '@reduxjs/toolkit';

const initialState={
	logged:false,
	currentUser:{},
	isFetching:false,
	error:null,
	token:null,
}

const userSlice=createSlice({
	name:'user',
	initialState:initialState,
	reducers:{
		loginStart:(state)=>{
			state.isFetching=true;
		},

		loginSuccess:(state,action)=>{
			state.isFetching=false;
			state.error=null;
			state.logged=true;
			state.currentUser=action.payload.user;
			state.token=action.payload.token;
		},

		loginFailure:(state,action)=>{
			state.isFetching=false;
			state.error=action.payload;
		},

		verifyWithToken:(state,action)=>{
			state.currentUser=action.payload;
			state.error=null;
			state.isFetching=false;
			state.logged=true;
		}
	}
})

export const { loginStart,loginSuccess,loginFailure,verifyWithToken }=userSlice.actions;
export const error=(state)=>state.user.error;

export default userSlice.reducer;