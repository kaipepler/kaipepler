<script>
	let { children } = $props();

	import Header from './header.svelte';
	import Footer from './footer.svelte';

	import '$lib/styles/colors.css';
	import '$lib/styles/typography.css';
	import '$lib/styles/app.css';
</script>

<div class="layout">
	<Header />

	<main>
		{@render children()}
	</main>

	<Footer />
</div>

<style>
	.layout {
		height: 100%;
		max-inline-size: 1200px;
		display: grid;
		grid-template-rows: auto 1fr auto;
		margin-inline: auto;
	}

	main {
		padding-inline: 2.5rem;
		z-index: 1;
	}
</style>
