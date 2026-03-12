<script>
	let { data } = $props();
	import { page } from '$app/state';
	const current = page.route.id.split('/')[2];
	const currentProject = $derived(data.projects[current]);

	const cards = [
		{
			title: 'Angel',
			suit: 'Heaven',
			alt: 'The Heaven card “Angel.” Jagged geometric shapes make up the form of two angel wings with a halo above them.'
		},
		{
			title: 'Sunrise',
			suit: 'Heaven',
			alt: 'The Heaven card “Sunrise.” A horizon line tapers towards the center, with interlocking arches above it making up the form of a hypnoic sun.'
		},
		{
			title: 'Sermon',
			suit: 'Heaven',
			alt: 'The Heaven card “Sermon.” A book is opened flat along its spine, with a number of sparkling stars floating above the pages.'
		},
		{
			title: 'Revival',
			suit: 'Heaven',
			alt: 'The Heaven card “Revival.” A pinwheel-shaped flower extends out of a patch of grass. The heart of the flower is shaped like a teardrop.'
		},
		{
			title: 'Blessing',
			suit: 'Heaven',
			alt: 'The Heaven card “Blessing.” A large geometric star surrounded by 4 smaller stars.'
		},
		{
			title: 'Death',
			suit: 'Earth',
			alt: 'The Earth card “Death.” A scythe made of simple lines and curves lies at an angle.'
		},
		{
			title: 'Plague',
			suit: 'Earth',
			alt: 'The Earth card “Plague.” Overlapping circles resembling scales make up an old-fashioned witch doctor’s mask complete with hat.'
		},
		{
			title: 'Defender',
			suit: 'Earth',
			alt: 'The Earth card “Defender.” A set of oblong hexagons overlap to form a sharp symmetrical shield.'
		},
		{
			title: 'Siege',
			suit: 'Earth',
			alt: 'The Earth card “Siege.” A number of straight lines make up the shape of a trebuchet.'
		},
		{
			title: 'Taxes',
			suit: 'Earth',
			alt: 'The Earth card “Taxes.” Simple arcs around circles make up the shape of a messy pile of coins next to a neater stack of coins.'
		},
		{
			title: 'Retrograde',
			suit: 'Void',
			alt: 'The Void card “Retrograde.” Interlocking crecents make up the shape of the planet Saturn.'
		},
		{
			title: 'Voodoo',
			suit: 'Void',
			alt: 'The Void card “Voodoo.” Round oblong shapes make up the shape of a doll with a pin sticking out of its chest.'
		},
		{
			title: 'Absence',
			suit: 'Void',
			alt: 'The Void card “Absence.” A black square with plain black lines of varying weights.'
		}
	];
</script>

<svelte:head>
	<title>Târé - Portfolio - Kai Pepler</title>
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
		Târé is an unreleased card game. I worked on a several aspects including the logo,
		illustrations, and suits.
	</p>
	<div class="mediumsblock">
		<div>
			<h3>Medium</h3>
			<p>Vector</p>
		</div>
		<div>
			<h3>Contents</h3>
			<p>{cards.length} cards, 2 title slides</p>
		</div>
	</div>
</section>

<section class="gallery-element">
	<lightbox-image dialog-id="lightbox">
		<img
			src="/portfolio/tare/tare-logo.webp"
			alt="An array of cards laid out behind a blue-red gradient wash. “Târé is written overtop the gradient next to a polygon containing illustrations of the three suits. Underneath the word, “たれ” is written in Japanese.”"
			loading="lazy"
		/>
	</lightbox-image>
</section>

<section class="gallery-element">
	<lightbox-image dialog-id="lightbox">
		<img
			src="/portfolio/tare/tare-suits.webp"
			alt="Three blank cards with colored suit icons marked in the corners. Text gives names to the 3 suits: Blue for Heaven, red for Earth, and purple for Void."
			loading="lazy"
		/>
	</lightbox-image>
</section>

{#each cards as card}
	<section class="gallery-element">
		<lightbox-image dialog-id="lightbox">
			<img
				src="/portfolio/tare/tare-{card.suit.toLowerCase()}-{card.title.toLowerCase()}.webp"
				alt={card.alt}
				loading="lazy"
			/>
		</lightbox-image>
	</section>
{/each}

<style>
	.gallery-element {
		display: flex;
		flex-direction: column;
		margin-top: 2rem;
		width: fit-content;
		max-width: 85ch;
	}
</style>
