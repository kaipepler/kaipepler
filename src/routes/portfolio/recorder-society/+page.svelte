<script>
	let { data } = $props();
	import { page } from '$app/state';
	const current = page.route.id.split('/')[2];
	const currentProject = $derived(data.projects[current]);
</script>

<svelte:head>
	<title>Recorder Society - Portfolio - Kai Pepler</title>
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
			{currentProject.title}
		</h1>
		<div class="type" style:view-transition-name="project-card-type-{currentProject.id}">
			{currentProject.type}
		</div>
		<div class="date" style:view-transition-name="project-card-date-{currentProject.id}">
			{currentProject.date}
		</div>
	</div>

	<h2 id="overview" class="visually-hidden">Overview</h2>
	<p>A logo I designed for the Rochester chapter of the American Recorder Society.</p>
	<p>
		The design pays homage to <a
			href="https://www.cityofrochester.gov/departments/bureau-communciations-and-special-events/celebrating-50-years-rochesters-city-mark"
			>Rochester’s iconic city mark</a
		>, and incorporates recorders into the primary spokes. My first version took a more literal
		interpretation of the city mark with 10 recorders along each straight edge, but I decided that
		was both too close to the orignal, as well as too busy.
	</p>
	<p>
		My second version uses only 5 recorders, one extending from the central line of each petal. The
		final result has a more dynamic appearance, and allows more of the fine details to show through.
	</p>
	<p>The chapter has used my design in marketing materials, concert posters, and t-shirts.</p>
	<div class="mediumsblock">
		<div>
			<h3>Deliverables</h3>
			<p>Logo</p>
		</div>
	</div>
</section>

<section class="gallery-element">
	<lightbox-image dialog-id="lightbox">
		<img
			src="/portfolio/recorder/recorder-logo-light.png"
			alt="A black logo on a light blue background. Flat illustrations of 5 recorders extend out from a central point, with petals reminiscent of the Rochester city mark connecting them."
			loading="lazy"
		/>
	</lightbox-image>
</section>

<section class="gallery-element">
	<lightbox-image dialog-id="lightbox">
		<img
			src="/portfolio/recorder/recorder-logo-dark.png"
			alt="A white logo on a dark blue background. Flat illustrations of 5 recorders extend out from a central point, with petals reminiscent of the Rochester city mark connecting them."
			loading="lazy"
		/>
	</lightbox-image>
</section>

<section class="gallery-element">
	<lightbox-image dialog-id="lightbox">
		<img
			src="/portfolio/recorder/recorder-logo-evolution.png"
			alt="Two concepts of the logo, showing progression. The first attempt is very similar to the Rochester city mark, with recorders along each straight line. The second only has 5 recorders extending from the center of each petal, making the final design larger and more dynamic."
			loading="lazy"
		/>
	</lightbox-image>
</section>

<section class="gallery-element">
	<lightbox-image dialog-id="lightbox">
		<img
			src="/portfolio/recorder/recorder-shirts.jpg"
			alt="The logo represented on two t-shirts, showing differing colorings. The first is a dark blue logo on a white t-shirt, and the second is a white logo on a deep red t-shirt. Both logos have text under them reading “Rochester Recorder Society.”"
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
