<script>
	import { tilt } from './tilt.js';

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

	<small>Some of my more in-depth UX and design projects.</small>

	<div class="featured wrapper">
		{#each data.projectsArray as project}
			{#if project.featured}
				<a href="/portfolio/{project.id}/">
					<div
						class="project-card"
						use:tilt
						id={project.id}
						style:--c1={project.colors[0]}
						style:--c2={project.colors[1]}
						style:view-transition-name="project-card-{project.id}"
					>
						<div class="title" style:view-transition-name="project-card-title-{project.id}">
							<span>{project.title}</span>
						</div>
						<div class="type" style:view-transition-name="project-card-type-{project.id}">
							{project.type}
						</div>
						<div class="date" style:view-transition-name="project-card-date-{project.id}">
							<span>{project.date}</span>
						</div>
					</div>
				</a>
			{/if}
		{/each}
	</div>
</section>

<section>
	<h2>Art & Design</h2>
	<small>From freelance projects to designs I’ve done just for fun.</small>

	<div class="wrapper">
		{#each data.projectsArray as project}
			{#if !project.featured}
				<a href="/portfolio/{project.id}/">
					<div
						class="project-card"
						use:tilt
						id={project.id}
						style:--c1={project.colors[0]}
						style:--c2={project.colors[1]}
						style:view-transition-name="project-card-{project.id}"
					>
						<div class="title" style:view-transition-name="project-card-title-{project.id}">
							<span>{project.title}</span>
						</div>
						<div class="type" style:view-transition-name="project-card-type-{project.id}">
							{project.type}
						</div>
						<div class="date" style:view-transition-name="project-card-date-{project.id}">
							<span>{project.date}</span>
						</div>
					</div>
				</a>
			{/if}
		{/each}
	</div>
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

		.project-card {
			/* Required for 3D effect */
			will-change: transform;
			transform: perspective(1000px) rotateX(var(--rotateX, 0deg)) rotateY(var(--rotateY, 0deg));
			transition: transform 0.1s ease-out;
			transform-style: preserve-3d;
		}
		.project-card::after {
			content: '';
			position: absolute;
			inset: 0;
			z-index: -1;
			pointer-events: none; /* Allows clicks to pass through to content */
			background: radial-gradient(
				circle at var(--glareX) var(--glareY),
				var(--c2) 0%,
				transparent 80%
			);
			opacity: var(--glareOpacity, 0);
			transition: opacity 0.3s ease;
		}

		a {
			all: unset;
			cursor: pointer;

			transition-property: transform, box-shadow;
			transition-duration: 0.2s;
			transition-timing-function: ease-in-out;
			border-radius: 16px;

			&:hover {
				transform: scale(1.03);

				.project-card {
					box-shadow: 0 3px 6px 1px rgba(0, 0, 0, 0.3);
				}
			}

			&:focus-visible {
				transform: scale(1.03);

				.project-card {
					border-radius: 16px;
					outline: 3px solid var(--text-primary);
				}
			}

			&:active {
				transform: scale(1);
				box-shadow: none;

				.project-card {
					box-shadow: none;
				}
			}
		}
	}

	@media (max-width: 850px) {
		.wrapper {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (max-width: 650px) {
		.wrapper {
			grid-template-columns: repeat(1, 1fr);
		}
	}

	.title {
		font-size: larger;
	}
</style>
