import axios from 'axios';

export const axiosProducts=axios.create({
	baseURL:'http://localhost:3700/products'
})

export const axiosAuth=axios.create({
	baseURL:'http://localhost:3700/auth'
})

export const axiosUser=axios.create({
	baseURL:'http://localhost:3700/users'
})
