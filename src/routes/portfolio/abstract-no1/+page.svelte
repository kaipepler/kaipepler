<script>
	let { data } = $props();
	import { page } from '$app/state';
	const current = page.route.id.split('/')[2];
	const currentProject = $derived(data.projects[current]);
</script>

<svelte:head>
	<title>Abstract №1 - Portfolio - Kai Pepler</title>
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
		One of my more spontaneous projects; I was working on a keynote one day when I used the shape
		tool to create a rectangle. Somewhat randomly I duplicated the rectangle, moving the duplicates
		around the slide, and I ended up being quite taken with the relationships that occur between
		lines when a shape is repeated in an enclosed space.
	</p>
	<div class="mediumsblock">
		<div>
			<h3>Medium</h3>
			<p>Vector</p>
		</div>
		<div>
			<h3>Contents</h3>
			<p>1 illustration</p>
		</div>
	</div>
</section>

<section class="gallery-element">
	<lightbox-image dialog-id="lightbox">
		<img
			src="/portfolio/abstract/abstract-no1.svg"
			class="invert"
			alt="An overlapping set of rectangles. The distances between the different outlines generates different sections of tension and open space."
			loading="lazy"
		/>
	</lightbox-image>
</section>

<style>
	.gallery-element {
		display: flex;
		flex-direction: column;
		margin-top: 2rem;
		width: fit-content;
		max-width: 85ch;
	}
</style>
