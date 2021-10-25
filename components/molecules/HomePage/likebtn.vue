<template>
	<div class="container">
		<button @click="likebtn">
			<b>Like: </b>{{ likecount.total }}
		</button>
		<button @click="unlikebtn">
			unlike
		</button>
	</div>
</template>

<script>
	export default {
		props: ['likebtn', 'unlikebtn', 'likecount']
	}
</script>