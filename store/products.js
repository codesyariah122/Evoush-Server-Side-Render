// Ini untuk products state di homepage
// handle commerce.js

import axios from 'axios'

export const state = () => ({
	productsdata: [],
	details: {},
	checkout: {},
	assets: [],
	categories: [],
	loading: null
})

export const mutations = {
	async productsdata(state){
		state.loading = true
		await axios.get('https://evoush-landing-api.herokuapp.com/api/data/evoush/products/EVOUSH.COM')
		.then(res => {
			state.productsdata = res.data.data.data.reverse()
			// console.log(state.productsdata)
			setTimeout(() => {
				state.loading = false
			}, 1500)
		})
	},

	async detailsproduct(state, params){
		state.loading = true
		await axios.get(`https://evoush-landing-api.herokuapp.com/api/data/evoush/products/EVOUSH.COM/${params}`)
		.then(res => {
			state.details = res.data.data
			state.assets = res.data.data.assets[0]
			state.categories = res.data.data.categories[0]
			state.checkout = res.data.data.checkout_url.checkout
			// console.log(state.details)
			setTimeout(() => {
				state.loading = false
			}, 1000)
		})
		.catch(err=>{
			console.log(err.response.message)
		})
	}
}

export const getters = {
	getProducts: state => {
		return state.productsdata
	},
	getDetails: state => {
		return state.details
	}
}

export const actions = {}