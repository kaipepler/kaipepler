<script>
	import Xerox from '$lib/assets/xerox.svelte';
	import Naz from '$lib/assets/naz.svelte';
	import RIT from '$lib/assets/rit.svelte';
	import Map from '$lib/assets/map.svelte';

	const adjs = ['sunny', 'cloudy', 'rainy', 'stormy', 'windy', 'snowy'];
	const randomIndex = Math.floor(Math.random() * adjs.length);
	let adj = adjs[randomIndex];
</script>

<svelte:head>
	<title>Kai Pepler</title>
	<meta name="description" content="This is a welcome page for Kai Pepler's portfolio." />
</svelte:head>

<section>
	<h1>Hello Everyone!</h1>
	<p>
		My name is Kai Pepler. I’m a UX designer and visual artist specializing in accessibility, color
		theory, data visualization, and motion graphics.
	</p>
	<p><a class="button primary" href="mailto:hello@kaipepler.com">Contact me</a></p>
</section>
<section class="about">
	<div class="content">
		<h2 class="visually-hidden">About Me</h2>
		<p>
			Based in {adj} Rochester New York, I’ve worked with top companies and universities in the area:
		</p>
		<div class="logos">
			<small>Select a logo to learn more about my work with these organizations.</small>
			<div>
				<a href="/xerox"><Xerox /></a>
				<a href="/naz"><Naz /></a>
				<a href="/rit"><RIT /></a>
			</div>
		</div>
	</div>
	<div class="map"><Map /></div>
</section>

<style>
	section:first-of-type {
		margin-bottom: 2lh;
	}

	section.about {
		border-block: 1px solid var(--gray-3);
		max-width: unset;
		margin-inline: calc(var(--space-m-xl) - var(--space-m-xl) * 2);
		padding: 5rem var(--space-m-xl);
		display: grid;
		grid-template-columns: 1.5fr 1fr;
		overflow: hidden;

		.content {
			margin: auto;
			border-radius: 6px;
			@media (prefers-contrast: more) {
				background: var(--gray-1);
			}

			.logos {
				display: flex;
				flex-direction: column-reverse;
				gap: 1lh;

				small {
					color: var(--text-primary);
				}

				div {
					display: flex;
					flex-direction: row;
					gap: 1rem;
					margin-left: -1rem;
				}

				a {
					border: unset;
					padding: 1rem;
					text-align: center;
					border-radius: 6px;

					&:focus-visible :global(path),
					&:hover :global(path) {
						fill: var(--text-primary);
					}

					@media (prefers-contrast: more) {
						border: 1px solid var(--gray-12);
						background: var(--gray-1);
					}
				}
			}
		}

		.map {
			z-index: -1;
			height: 200px;
			transform: scale(15);
		}
	}

	@media (max-width: 800px) {
		section.about {
			grid-template-columns: 1fr;
			padding-bottom: 2rem;

			.map {
				order: -1;
				height: 3rem;
				margin-bottom: 7rem;
				transform: scale(60);
			}
		}
	}

	@media (max-width: 600px) {
		section.about .content .logos div {
			flex-direction: column;
			margin-left: unset;
			align-items: center;

			a {
				width: fit-content;
			}
		}
	}
</style>
