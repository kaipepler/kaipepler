<script>
	let { data } = $props();
</script>

<svelte:head>
	<title>Portfolio - Kai Pepler</title>
	<meta name="description" content="Examples of art and design work" />
</svelte:head>

<section>
	<h1>Portfolio</h1>
	<p>This page highlights a number of my projects and case studies from over the years.</p>
	<p>
		My most recent work is under nondisclosure for Xerox. <a href="/xerox"
			>Learn about my work with Xerox</a
		>.
	</p>
</section>

<section>
	<h2>Featured</h2>
	<div class="featured wrapper">
		{#each data.projectsArray as project}
			{#if project.featured}
				<a href="/portfolio/{project.id}/">
					<div
						class="project-card"
						id={project.id}
						style:--c1={project.colors[0]}
						style:--c2={project.colors[1]}
						style:view-transition-name="project-card-{project.id}"
					>
						<div class="title" style:view-transition-name="project-card-title-{project.id}">
							{project.title}
						</div>
						<div class="type">{project.type}</div>
						<div class="date">{project.date}</div>
					</div>
				</a>
			{/if}
		{/each}
	</div>
</section>

<section>
	<h2>Art & Design</h2>

	<div class="wrapper">
		{#each data.projectsArray as project}
			{#if !project.featured}
				<a href="/portfolio/{project.id}/">
					<div
						class="project-card"
						id={project.id}
						style:--c1={project.colors[0]}
						style:--c2={project.colors[1]}
						style:view-transition-name="project-card-{project.id}"
					>
						<div class="title" style:view-transition-name="project-card-title-{project.id}">
							{project.title}
						</div>
						<div class="type">{project.type}</div>
						<div class="date">{project.date}</div>
					</div>
				</a>
			{/if}
		{/each}
	</div>
	<p>
		Many of my older pieces are offline as I migrate my portfolio to a new framework. Expect new
		content and UI changes daily as I fine-tune the new experience.
	</p>
	<p>
		Please <a href="mailto:hello@kaipepler.com">contact me</a> if you have any questions or would like
		to see further samples of my work.
	</p>
</section>

<style>
	.wrapper {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 2rem;
		margin-block: 2rem;

		&.featured {
			grid-template-columns: repeat(1, 1fr);
		}

		a {
			all: unset;
			cursor: pointer;

			transition-property: transform, box-shadow;
			transition-duration: 0.2s;
			transition-timing-function: ease-in-out;
			border-radius: 16px;

			overflow: hidden;

			&:hover {
				box-shadow: 0 3px 6px 1px rgba(0, 0, 0, 0.3);
				transform: scale(1.03);
			}

			&:focus-visible {
				transform: scale(1.03);
				border-radius: 16px;
				outline: 3px solid var(--text-primary);
			}

			&:active {
				transform: scale(1);
				box-shadow: none;
			}
		}
	}

	.title {
		font-size: larger;
	}
</style>
