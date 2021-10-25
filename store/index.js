import Vue from 'vue'
import axios from 'axios'

export const strict = false

export const state = () => ({
	title: 'Evoush Server Side Rendering',
	count: 0,
	likecount: {},
	likes: []
})


export const mutations = {
	hometitle(state){
		state.title
	},
	increment(state){
		state.count += 1
	},
	decrement(state){
		state.count > 0 ? state.count -= 1 : state.count
	},
	likes(state){
		const likedata = {
			name: 'likes',
			total: state.count > 0 ? state.count : state.count += 1
		}
		state.likes = localStorage.setItem('likes', JSON.stringify(likedata))
	},
	unlikes(state){
		const likedata = {
			name: 'likes',
			total: state.count > 0 ? state.count -= 1 : state.count
		}
		state.likes = localStorage.setItem('likes', JSON.stringify(likedata))

	},
	likedata(state){
		state.likecount = localStorage.getItem('likes') ? JSON.parse(localStorage.getItem('likes')) : 0
	}
}

export const getters = {
	getHomeTitle: state => {
		return state.title
	},
	getCounter: state => {
		return state.count
	},
	getLikes: state => {
		return state.likes
	},
	getUnlikes: state => {
		return state.likes
	},
	getLikeData: state => {
		return state.likecount
	}
}

export const actions = {

}