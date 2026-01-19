<script>
	let { children } = $props();

	import Header from './header.svelte';
	import Footer from './footer.svelte';

	// First, load our theme variables
	import '$lib/styles/themes/colors.css';
	import '$lib/styles/themes/dark-mode.css';
	import '$lib/styles/themes/high-contrast.css';

	// Then load utilities that other styles might depend on
	import '$lib/styles/utilities/spacing.css';
	import '$lib/styles/utilities/motion.css';

	// Then load base styles
	import '$lib/styles/base/reset.css';
	import '$lib/styles/base/typography.css';
	import '$lib/styles/base/layout.css';

	// Then load components
	import '$lib/styles/components/buttons.css';
	import '$lib/styles/components/tables.css';
	import '$lib/styles/components/details.css';
	import '$lib/styles/components/links.css';
	import '$lib/styles/components/tooltips.css';

	// Finally load accessibility utilities that might override other styles
	import '$lib/styles/utilities/accessibility.css';

	import { onNavigate } from '$app/navigation';

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<div class="layout">
	<Header />
	<div id="targetBlank" hidden>– opens in a new tab</div>

	<main id="main">
		{@render children()}
	</main>

	<Footer />
</div>

<style>
	.layout {
		height: 100%;
		display: grid;
		grid-template-rows: auto 1fr auto;
	}

	main {
		z-index: 1;
	}
</style>
