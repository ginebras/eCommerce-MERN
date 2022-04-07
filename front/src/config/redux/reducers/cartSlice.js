import { createSlice } from '@reduxjs/toolkit';

const initialState={
	products:[],
	quantity:0,
	total:0,
	wishlist:[],
	wishlistAmount:0,
}

const cartSlice=createSlice({
	name:'cart',
	initialState:initialState,
	reducers:{
		addProduct:(state,action)=>{
			state.quantity+=1;
			state.products.push(action.payload);
			state.total+=parseInt(action.payload.price * action.payload.quantity);
		},

		addWishProduct:(state,action)=>{
			state.wishlist.push(action.payload);
			state.wishlistAmount=state.wishlist.length;
		},

		deleteWishProduct:(state,action)=>{
			state.wishlist=state.wishlist.filter((p)=>p._id!==action.payload._id);
			state.wishlistAmount=state.wishlist.length;
		}
	}
})

export const { addProduct,addWishProduct,deleteWishProduct }=cartSlice.actions;
export default cartSlice.reducer;