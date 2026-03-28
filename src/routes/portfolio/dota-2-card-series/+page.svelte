<script>
	let { data } = $props();
	import { page } from '$app/state';
	const current = page.route.id.split('/')[2];
	const currentProject = $derived(data.projects[current]);

	const cards = [
		{
			title: 'Abaddon'
		},
		{
			title: 'Alchemist'
		},
		{
			title: 'Ancient Apparition'
		},
		{
			title: 'Anti-Mage'
		},
		{
			title: 'Arc Warden'
		},
		{
			title: 'Axe'
		},
		{
			title: 'Bane'
		},
		{
			title: 'Batrider'
		},
		{
			title: 'Beastmaster'
		},
		{
			title: 'Bloodseeker'
		},
		{
			title: 'Bounty Hunter'
		},
		{
			title: 'Brewmaster'
		},
		{
			title: 'Bristleback'
		},
		{
			title: 'Broodmother'
		}
	];
</script>

<svelte:head>
	<title>Dota 2 Card Series - Portfolio - Kai Pepler</title>
	<meta name="description" content="Examples of art and design work" />
</svelte:head>

<section>
	<div
		class="project-card focus"
		id={currentProject.id}
		style:--c1={currentProject.colors[0]}
		style:--c2={currentProject.colors[1]}
		style:view-transition-name="project-card-{currentProject.id}"
	>
		<h1 class="title" style:view-transition-name="project-card-title-{currentProject.id}">
			<span>{currentProject.title}</span>
		</h1>
		<div class="type" style:view-transition-name="project-card-type-{currentProject.id}">
			{currentProject.type}
		</div>
		<div class="date" style:view-transition-name="project-card-date-{currentProject.id}">
			<span>{currentProject.date}</span>
		</div>
	</div>

	<h2 id="overview" class="visually-hidden">Overview</h2>
	<p>
		A series of abstract line art designs representing the heroes in the popular game <a
			href="https://www.dota2.com/home">Dota 2</a
		> by Valve Software.
	</p>
	<p>
		In 2022 I created the original series of 123 cards, generated through a vectorization process of
		in-game hero icons, then framed and paired with unique background colors.
	</p>

	<p>
		In 2024 I revised the series, redrawing all icons by hand with a more consistent style,
		improving color consistency, and adding a number of new cards to reflect additional heroes,
		runes, and styles.
	</p>
	<div class="mediumsblock">
		<div>
			<h3>Medium</h3>
			<p>Vector</p>
		</div>
		<div>
			<h3>Contents</h3>
			<p>{cards.length} cards</p>
		</div>
	</div>
</section>

{#each cards as card}
	<section class="gallery-element">
		<h2>
			{card.title}
		</h2>
		<div class="mediaframe fullsize">
			<lightbox-image dialog-id="lightbox">
				<img
					src="/portfolio/dota-2-card-series/dota-2-card-series-{card.title
						.toLowerCase()
						.replace(/\s+/g, '-')
						.replace(/[()]/g, '')}.webp"
					alt="An abstract illustration of the {card.title} hero icon in Dota 2."
					loading="lazy"
				/>
			</lightbox-image>
		</div>
	</section>
{/each}

<style>
	.gallery-element {
		display: flex;
		flex-direction: column;
		margin-top: 2rem;
		width: fit-content;
		max-width: 85ch;

		div {
			order: 1;
		}

		h2 {
			order: 2;
			font-size: var(--step-1);
			margin: 1rem 0.25rem 0;
		}
	}
</style>
