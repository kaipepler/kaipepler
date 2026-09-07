<script>
	let { children } = $props();

	import * as config from '$lib/config';
	import Header from './header.svelte';

	// First, load our theme variables
	import '$lib/styles/themes/colors.css';
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

	<footer>
		<div>
			&copy {`${new Date().getFullYear()} ${config.title}`}
			<ul>
				<li><a href="/accessibility"><span>Accessibility</span></a></li>
				<li><a href="/privacy"><span>Privacy</span></a></li>
			</ul>
		</div>
	</footer>
</div>

<style>
	.layout {
		height: 100%;
		display: grid;
		grid-template-rows: auto 1fr auto;

		footer {
			padding: 1.5rem var(--space-m-xl);

			div {
				margin-inline: auto;
				max-width: 1200px;
				display: flex;
				justify-content: space-between;
				font-size: var(--step--1);
				font-weight: 400;
				color: var(--text-secondary);

				@media (prefers-contrast: more) {
					color: var(--text-primary);
				}

				ul {
					display: grid;
					grid-template-columns: 1fr 1fr;
					list-style-type: none;
					padding: 0;
					margin: 0;

					li {
						text-align: center;
						a {
							position: relative;
							padding: 0.5rem;
							border-radius: 6px;

							@media (prefers-contrast: more) {
								border: 1px solid var(--gray-12);
							}

							span {
								border-bottom: 0.08rem solid transparent;
								padding-block: 0.2rem;
								transition:
									color 0.2s linear,
									border 0.2s linear;
							}

							&:hover {
								span {
									color: var(--text-primary);
									border-bottom: 0.08rem solid var(--text-primary);
								}
							}
						}
					}
				}
			}
		}
	}
</style>
