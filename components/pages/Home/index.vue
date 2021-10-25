<template>
	<div>
		<!-- First line content -->
		<div class="col-lg-12 col-xs-12 col-sm-12">
			<center>
				<AddToHomeScreen/>
			</center>
		</div>

		<div class="col-lg-12 col-xs-12 col-sm-12">

		</div>

		<div class="col-lg-12 col-xs-12 col-sm-12">
			<News :news="news"/>
		</div>

		<h1 class="underline" style="margin-top: 5rem;"></h1>

		<div class="col-lg-12 col-xs-12 col-sm-12">
			<ProductList :products="products"/>
		</div>

	</div>
</template>

<script>
	import {AddToHomeScreen, VideoInformation, News, ProductList} from '@/components/molecules'

	export default{
		props: ['news', 'products'],
		components:{
			AddToHomeScreen,
			VideoInformation,
			News,
			ProductList
		},


	}
</script>