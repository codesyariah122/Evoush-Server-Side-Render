<template>
	<div>
		<!-- ======= Portfolio Section ======= -->
		<section id="products" class="portfolio section-bg">
			<div class="container" data-aos="fade-up">
				<div class="section-title">

					<h2>Product</h2>
					<p>
						Product-product kami adalah yang terbaik dalam setiap categoriy nya, pada masa ini tidak semata keunggulan kualitas, namun juga manfaat yang kita dapatkan secara real bisa kita rasakan dari product-product evoush.
					</p>
				</div>

				<div class="row">

					<div class="col-lg-12 col-xs-12 col-sm-12 mb-5">
						<small class="text-danger">
							(* Klik foto / design gambar product untuk melihat detail data product secara keseluruhan, gunakan tombol filter di bawah untuk memfilter tampilan data product sesuai kategori yang anda inginkan.)
						</small>
					</div>

					<div
					class="col-lg-12 d-flex justify-content-center"
					data-aos="fade-up"
					data-aos-delay="100"
					>
						<ul id="portfolio-flters">
							<li data-filter="*" :class="showall ? 'filter-active' : ''" v-on:click="ShowAllProductLists">All</li>
							<li data-filter=".filter-nutrisi" :class="shownutrisi ? 'filter-active' : ''" @click="Nutrition">Nutrisi</li>
							<li data-filter=".filter-kosmetik" :class="showcosmetics ? 'filter-active' : ''" @click="Cosmetics">Kosmetik</li>
						</ul>
					</div>
				</div>

				<!-- Product list component -->

				<AllProduct v-if="showall" :allproducts="showall ? products : allproducts"/>

				<NutritionProducts v-if="shownutrisi" :nutritions="nutritions"/>

				<CosmeticProducts v-if="showcosmetics" :cosmetics="cosmetics"/>

			</div>
		</section>
	</div>
</template>

<script>
	import {AllProduct, NutritionProducts, CosmeticProducts} from './ProductComponents'

	export default {
		props: ['products'],
		components: {
			AllProduct,
			NutritionProducts,
			CosmeticProducts
		},
		data(){
			return {
				allproducts: this.products,
				nutritions: [],
				cosmetics: [],
				showall: true,
				shownutrisi: null,
				showcosmetics: null
			}
		},

		methods:{
			ShowAllProductLists(){
				this.$swal("All Products")
				this.showall = true
				this.shownutrisi = false
				this.showcosmetics = false
			},

			Nutrition(){
				this.shownutrisi = true
				this.showcosmetics = false
				this.showall = false
				this.nutritions = this.products.filter(d => d.categories[0].name === "Nutrisi")
			},
			Cosmetics(){
				this.showcosmetics = true
				this.shownutrisi = false
				this.showall = false
				this.cosmetics = this.products.filter(d => d.categories[0].name === "Cosmetics")
			}
		}
	}
</script>

<style>
.last{
  max-width: 350px;
}
@media (min-width: 992px) {
  .edit-height{
    max-height: 18vh;
    align-items: center;
    margin-left: 5rem;
  }
}
</style>
