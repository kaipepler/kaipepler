<script>
	import * as config from '$lib/config';
	import Logo from '$lib/assets/logo.svelte';
	import Bluesky from '$lib/assets/bluesky.svelte';
	import { page } from '$app/state';
</script>

<header>
	<nav>
		<div class="logo-wrapper">
			<a href="/" class="lockup">
				<Logo /> <span class="title">{config.title}</span>
			</a>
			<div class="shadow"></div>
		</div>

		<ul>
			<li>
				<a href="/portfolio" aria-current={page.url.pathname === '/portfolio' ? 'page' : undefined}
					>Portfolio</a
				>
			</li>
			<li>
				<a href="/writing" aria-current={page.url.pathname === '/writing' ? 'page' : undefined}
					>Writing</a
				>
			</li>
			<li>
				<a href="https://bsky.app/profile/kaipepler.com" target="_blank"><Bluesky /></a>
			</li>
		</ul>
	</nav>
</header>

<style>
	header {
		padding: 2.5rem;

		nav {
			display: flex;
			flex-flow: row wrap;
			align-items: center;
			justify-content: space-between;

			.logo-wrapper {
				position: relative;
				z-index: 0;

				a.lockup {
					text-transform: lowercase;
					font-size: 32px;
					font-weight: 500;
					display: flex;
					align-items: center;
					gap: 1.5rem;
				}

				.shadow {
					position: absolute;
					background-image: url(/shadow.svg);
					width: 272px;
					height: 241px;
					top: 0;
					left: 0;
					z-index: -1;
				}
			}

			ul {
				display: grid;
				grid-template-columns: 1fr 1fr 1fr;
				gap: 1rem;
				list-style-type: none;
				padding: 0;
				margin: 0;
				z-index: 1;

				li a {
					font-size: var(--step-1);
					padding: 1.5rem;
					display: block;
					border-radius: 6px;
					text-transform: lowercase;
					text-align: center;
					color: var(--default);
					fill: var(--default);
					transition:
						color 250ms,
						fill 250ms;

					&:hover {
						color: var(--green-400);
						fill: var(--green-400);
					}

					&:active {
						color: var(--green-500);
						fill: var(--green-500);
					}

					&[aria-current='page'] {
						color: var(--green-400);
						font-weight: 600;
						position: relative;

						&::after {
							content: '';
							position: absolute;
							bottom: 0;
							left: calc(50% - 9px);

							--r: 2px; /* border radius */

							width: 18px;
							aspect-ratio: 1 / cos(30deg);
							--_g: calc(tan(60deg) * var(--r)) bottom var(--r), #000 98%, #0000 101%;
							mask:
								conic-gradient(
										from -30deg at 50% calc(200% - 3 * var(--r) / 2),
										#000 60deg,
										#0000 0
									)
									0 100%/100% calc(100% - 3 * var(--r) / 2) no-repeat,
								radial-gradient(var(--r) at 50% calc(2 * var(--r)), #000 98%, #0000 101%),
								radial-gradient(var(--r) at left var(--_g)),
								radial-gradient(var(--r) at right var(--_g));
							clip-path: polygon(50% 0, 100% 100%, 0 100%);
							background: var(--green-400);
						}
					}
				}
			}
		}
	}

	@media (max-width: 850px) {
		.title {
			display: none;
		}
	}

	@media (max-width: 700px) {
		header {
			padding-bottom: 0;

			nav {
				flex-direction: column;
				align-items: center;
				gap: 2.5rem;
			}
		}
	}
</style>
