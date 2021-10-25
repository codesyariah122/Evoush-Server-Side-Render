<template>
	<div>
		<div class="container">
			<div class="row justify-content-center mt-5">
				<div class="col-12 col-lg-12 col-xs-12 col-sm-12">
					<div class="float-right">
						<ColorModePicker/>
					</div>
				</div>
			</div>
			<div class="col-lg-12 col-xs-12 col-sm-12">
				<Nuxt/>
			</div>
		</div>

		<Footer/>

	</div>
</template>

<script>
	import {Footer,ColorModePicker} from '@/components/layouts'

	export default {

		components: {
			ColorModePicker,
			Footer
		},
	}
</script>


<style>
	:root {
		--primary-color: #fff;
	}
</style>