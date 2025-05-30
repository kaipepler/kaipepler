<script>
	import * as config from '$lib/config';
	import Logo from '$lib/assets/logo.svelte';
	import Bluesky from '$lib/assets/bluesky.svelte';
	import { page } from '$app/state';

	/**
	 * @param {{ preventDefault: () => void; }} e
	 */
	function handleSkipLink(e) {
		e.preventDefault();
		// Update URL without triggering history navigation
		location.replace('#main');
		// Focus main directly
		document.getElementById('main')?.focus();
	}
</script>

<header>
	<a class="button skip-link" href="#main" onclick={handleSkipLink}>Skip to Main Content</a>
	<nav>
		<div class="logo-wrapper">
			<a href="/" aria-labelledby="title">
				<Logo />
			</a>
			<span id="title" aria-hidden="true">{config.title}</span>
		</div>

		<ul>
			<li>
				<a
					href="/portfolio"
					data-text="Portfolio"
					aria-current={page.url.pathname === '/portfolio' ? 'page' : undefined}>Portfolio</a
				>
			</li>
			<li>
				<a
					href="/writing"
					data-text="Writing"
					aria-current={page.url.pathname === '/writing' ? 'page' : undefined}>Writing</a
				>
			</li>
			<li>
				<a href="https://bsky.app/profile/kaipepler.com" target="_blank">
					<div class="icon-wrapper"><Bluesky /></div>
				</a>
			</li>
		</ul>
	</nav>
</header>

<style>
	header {
		padding: 2.5rem;

		nav {
			margin-inline: auto;
			max-width: 1200px;
			display: flex;
			flex-flow: row wrap;
			align-items: center;
			justify-content: center;
			@media (prefers-reduced-motion: no-preference) {
				transition: filter 200ms;
			}

			.logo-wrapper {
				flex-grow: 1;
				text-transform: lowercase;
				font-size: 32px;
				font-weight: 400;
				display: flex;
				align-items: center;
				gap: 1rem;

				@media (max-width: 750px) {
					flex-basis: 100%; /* Forces wrap */
					justify-content: center; /* Centers when wrapped */
					margin-bottom: 1rem; /* Adds space between logo and nav items */
				}

				a {
					border-radius: 4px;
					margin-left: -1rem;
				}
			}

			ul {
				display: grid;
				grid-template-columns: 1fr 1fr 1fr;
				gap: 1rem;
				list-style-type: none;
				padding: 0;
				margin: 0;
				font-size: var(--step-1);
				font-weight: 400;

				li {
					a {
						padding: 1.5rem;
						display: block;
						border-radius: 4px;
						text-transform: lowercase;
						text-align: center;
						transition:
							color 250ms,
							fill 250ms;

						@media (prefers-reduced-motion: no-preference) {
							transition:
								color 250ms,
								fill 250ms,
								outline 200ms,
								font-weight 100ms;
						}

						&[target='_blank']::after {
							content: '- opens in a new tab';
							overflow: hidden;
							display: inline-block;
							margin-inline: 0.2em;
							width: 1px;
							height: 1px;
							position: absolute;
						}

						&:hover {
							color: var(--green-11);
							fill: var(--green-11);

							@media (prefers-reduced-motion: no-preference) {
								font-weight: 600;

								.icon-wrapper {
									will-change: transform;
									transition: transform 250ms;
									transform: scale(1.2);
								}
							}
						}

						&:active {
							color: var(--green-10);
							fill: var(--green-10);
						}

						&::before {
							content: attr(data-text) / '';
							display: block;
							height: 0;
							visibility: hidden;
							overflow: hidden;
							user-select: none;
							pointer-events: none;
							font-weight: 600;

							@media speech {
								display: none;
							}
						}

						&[aria-current='page'] {
							color: var(--green-11);
							font-weight: 600;
							position: relative;

							&::after {
								content: '';
								position: absolute;
								top: calc(100% - 13px);
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
								background: var(--green-11);
							}
						}
					}
				}
			}
		}
	}

	@media (prefers-reduced-motion: no-preference) {
		nav a[aria-current='page']::after {
			view-transition-name: page-indicator;
		}
	}

	@media (max-width: 900px) {
		#title {
			display: none;
		}
	}
</style>
