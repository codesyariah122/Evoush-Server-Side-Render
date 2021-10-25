<template>
	<div>
		<!-- ======= Portfolio Details ======= -->
		<section id="portfolio-details" class="portfolio-details">
			<div class="container" data-aos="fade-up">


				<div class="row">
					<div class="col-lg-8">
						<h2 class="portfolio-title">{{details.name}}</h2>
						<div class="owl-carousel portfolio-details-carousel">
							<img v-for="slider in details.assets" :src="slider.url" class="img-fluid" alt="">
						</div>
					</div>

					<div class="col-lg-4 portfolio-info">
						<h3>Detail Product</h3>
						<ul>
							<li v-for="category in details.categories"><strong>Category</strong>: {{category.name}}</li>
							<li v-if="details.thank_you_url">
								<span class="badge badge-success">Landing Page : </span>
								<a :href="details.thank_you_url" class="btn btn-link">{{ details.name }}</a>
							</li>
							<li v-else>
								<span class="badge badge-danger">
									No landing page
								</span>
							</li>
						</ul>

						<p class="mb-5" v-html="details.description">
						</p>

					</div>
				</div>

				<div class="row justify-content-end mt-5">
					<div class="col-lg-4 col-xs-12 col-sm-12">
						<a :href="checkout" class="mt-3 mb-5 btn btn-primary btn-block" target="_blank">
							Check Out
						</a>
					</div>
				</div>

			</div>
		</section>
			<!-- End Portfolio Details -->
	</div>
</template>

<script>
	export default{
		props: ['details', 'checkout', 'categories'],

		mounted(){
			this.getCarousel()
		},

		methods: {
			formatDate(date) {
				const options = { year: 'numeric', month: 'long', day: 'numeric' }
				return new Date(date).toLocaleDateString('en', options)
			},
			getCarousel(){
				 // Portfolio details carousel
				 $(".portfolio-details-carousel").owlCarousel({
				 	autoplay: true,
				 	dots: true,
				 	loop: true,
				 	items: 1
				 });

			}
		}
	}
</script>

<style>
	.portfolio-info p{
		text-align: justify;
	}
</style>