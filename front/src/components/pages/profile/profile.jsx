import { useEffect,useState } from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';
import { useParams } from 'react-router-dom';

import './profile.css';

import Newsletter from '../../layout/newsletter/newsletter';
import Navbar from '../../layout/navbar/navbar';
import Footer from '../../layout/footer/footer';
import { axiosUser } from '../../../config/axios';

export default function Profile(){
	const currentUser=useSelector(state=>state.auth.currentUser);
	const [ user,setUser ]=useState({});
	const username=useParams().username;

	useEffect(()=>{
		const checkUser=async()=>{
			try{
				const response=await axiosUser.get(`/get/user?username=${username}`);
				setUser(response.data);
			}catch(error){
				console.log(error);
			}
		}

		if(username!==currentUser.username){
			checkUser();
		}else{
			setUser(currentUser);
		}

	},[])

	return(
		<div>
			<Navbar/>
				
			<div className="profile-container">
				<div className="profile-info">
					<div className="user-info">
						<h3><strong>Username:</strong>  {user.username}</h3>
						<h3><strong>Email:</strong>  {user.email}</h3>

						<h3><strong>CreatedAt:</strong>  {moment(user.createdAt).fromNow()}</h3>
					</div>
					
					{ user.username===currentUser.username ? (
						<button className="edit-info-button" >Edit info</button>
					) : null}
				</div>
			</div>

			<Newsletter/>
			<Footer/>
		</div>
	)
}