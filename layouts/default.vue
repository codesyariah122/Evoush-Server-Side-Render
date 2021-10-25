<template>
	<div>
		<main>

			<Header/>

				<div class="container">
					<div class="row justify-content-center">
						<div class="col-lg-12 col-xs-12 col-sm-12">
							<div class="float-right">
								<ColorModePicker/>
							</div>
						</div>

					</div>

					<div class="row justify-content-center mt-5">
						<!-- Nuxt Content -->
						<Nuxt/>
					</div>
				</div>

				<a href="#" class="back-to-top"><i class="bx bx-up-arrow-alt"></i></a>

			<Footer/>

		</main>
	</div>
</template>

<script>
	import {Header, Footer, ColorModePicker} from '@/components/layouts'

	export default {
		components: {
			Header,
			ColorModePicker,
			Footer
		}
	}
</script>