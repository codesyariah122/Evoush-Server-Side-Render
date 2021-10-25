<template>
	<div>
		<Home :news="news" :products="products"/>
	</div>
</template>

<script>
import Home from '@/components/pages/Home'

export default {
	layout: 'default',
	components: {
		Home
	},
	head(){
		return {
			title: 'Evoush::Official | Homepage',
			meta: [
			{ property: "og:site_name", content: "Evoush::Official" },
			{ hid: "og:type", property: "og:type", content: "website" },
			{
				hid: "apple-mobile-web-app-title",
				name: "apple-mobile-web-app-title",
				content: "Evoush::Official | Homepage"
			},
			{
				hid: 'description',
				name: 'description',
				content: 'Your Eternal Future'
			},
			{
				hid: "og:site_name",
				name: "og:site_name",
				property: "og:site_name",
				content: "Evoush::Official | Homepage"
			},
			{
				hid: "og:url",
				property: "og:url",
				content: "https://evoush.com",
			},
			{
				hid: "og:title",
				property: "og:title",
				content: "Evoush::Official | Website",
			},
			{
				hid: "og:description",
				property: "og:description",
				content: "Your Eternal Future",
			},
			{
				hid: "og:image",
				property: "og:image",
				content: require('~/assets/icon.png'),
			},
			{ property: "og:image:width", content: "740" },
			{ property: "og:image:height", content: "300" },
			]
		}
	},

	async asyncData({$content, params}){
		const news = await $content('Blog', params.slug)
		.only(['title', 'description', 'img', 'slug', 'categories', 'createdAt', 'author'])
		.sortBy('createdAt', 'desc')
		.where({categories: 'news'})
		.fetch()

		return {
			news
		}
	},

	mounted(){
		this.getProductData()
	},

	computed:{
		products(){
			return this.$store.state.products.productsdata
		},
		loading(){
			return this.$store.state.products.loading
		}
	},

	methods: {
		getProductData(){
			this.$store.commit('products/productsdata')
		}
	}
}
</script>

