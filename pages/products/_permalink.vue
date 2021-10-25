<template>
	<div>
		<div class="container">
			<div class="row justify-content-end mt-3 mb-3">
				<div class="col-lg-2 col-xs-6 col-sm-6">
					<nuxt-link class="btn btn-danger ml-3 mt-3" to="/#products"><i class='bx bx-arrow-back'></i>Kembali</nuxt-link>
				</div>
			</div>
		</div>
		<div v-if="loading">
			<div class="d-flex align-items-center mt-5 mb-5">
				<strong>Loading...</strong>
				<div class="spinner-border ml-auto" role="status" aria-hidden="true"></div>
			</div>
		</div>
		<div v-else>
			<ProductView :details="details" :checkout="checkout" :categories="categories"/>
		</div>
	</div>
</template>

<script>
	import ProductView from '@/components/pages/Products/ProductView'

	export default{
		layout: 'product-detail',
		components: {
			ProductView
		},
		data(){
			return {
				detailProduct: {},
				categoryProduct: {},
				assetProduct: {}
			}
		},

		head(){
			return {
				title: `Evoush Product | ${this.detailProduct.name}`,
				meta: [
				{ property: "og:site_name", content: `Evoush::Official | ${this.categoryProduct.name} - Product` },
				{ hid: "og:type", property: "og:type", content: "website" },
				{
					hid: "apple-mobile-web-app-title",
					name: "apple-mobile-web-app-title",
					content: `Evoush::Official | ${this.categoryProduct.name} - Product`
				},
				{
					hid: 'description',
					name: 'description',
					content: `Evoush::Products - ${this.categoryProduct.name}`
				},
				{
					hid: "og:site_name",
					name: "og:site_name",
					property: "og:site_name",
					content: `Evoush::Official | ${this.categoryProduct.name} - Product`
				},
				{
					hid: "og:url",
					property: "og:url",
					content: `https://evoush.com/products/${this.detailProduct.permalink}`,
				},
				{
					hid: "og:title",
					property: "og:title",
					content: `Evoush Product | ${this.detailProduct.name}`,
				},
				{
					hid: "og:description",
					property: "og:description",
					content: "Your Eternal Future",
				},
				{
					hid: "og:image",
					property: "og:image",
					content: this.assets.url,
				},
				{ property: "og:image:width", content: "740" },
				{ property: "og:image:height", content: "300" },
				]
			}
		},


		mounted(){
			this.getDetailProduct(this.$route.params.permalink),
			this.detailProductMeta()
		},

		computed: {
			details(){
				return this.$store.state.products.details
			},
			categories(){
				return this.$store.state.products.categories
			},
			assets(){
				return this.$store.state.products.assets
			},
			checkout(){
				return this.$store.state.products.checkout
			},
			loading(){
				return this.$store.state.products.loading
			}
		},

		methods: {
			getDetailProduct(params){
				this.$store.commit('products/detailsproduct', params)
			},
			detailProductMeta(){
				this.detailProduct = this.details
				this.categoryProduct = this.categories
				this.assetProduct = this.assets
			}
		}
	}
</script>