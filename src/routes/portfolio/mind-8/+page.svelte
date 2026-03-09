<script>
	import { page } from '$app/state';
	let { data } = $props();
	const current = page.route.id.split('/')[2];

	const currentProject = $derived(data.projects[current]);
</script>

<svelte:head>
	<title>MIND 8 - Portfolio - Kai Pepler</title>
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

	<h2 id="overview">Overview</h2>
	<p>
		MIND 8 is a conceptual short animation. All content (concept, art, animation, and sound effects)
		were created by me.
	</p>
	<aside aria-labelledby="external">
		<strong aria-hidden="true"><span id="external">Note</span>:</strong>
		<div>
			In the original version, I included a dream-like background track. The music was covered under
			Creative Commons when released, but since 2015 the artist has removed their work from free
			licencing. Out of respect I have cut the backing track from the animation.
		</div>
	</aside>
	<div class="mediumsblock">
		<div>
			<h3>Medium</h3>
			<p>Video</p>
		</div>
		<div>
			<h3>Contents</h3>
			<p>1 short (30 seconds)</p>
		</div>
	</div>
</section>

<section class="gallery-element">
	<h2 class="visually-hidden">Animation</h2>
	<div class="mediaframe fullsize">
		<video controls poster="/portfolio/mind8/mind8-poster.png">
			<source src="/portfolio/mind8/mind8-video.mp4" type="video/mp4" />
			Your browser does not support the video tag.
		</video>
	</div>
	<details>
		<summary>Text Description</summary>
		<p>
			Across an infinite white space, black lines start to come together, forming the basic
			primitives of a human form.
		</p>
		<p>
			The black outlines fade as shades of blue fill each shape of the human’s figure. At the same
			time, the figure crouches to a seat while a red chair, an orange desk, and a gray computer
			slide and draw themselves into the scene, just as the figure did.
		</p>
		<p>
			The figure begins typing on the keyboard and 4 randomly-changing letters appear above their
			head. The letters finally come to rest on the word “MIND.” Smaller words saying “by kai
			pepler” appear on the edge of the desk blurs and fades away.
		</p>
		<p>
			The camera zooms out, and a primitive room draws itself around the figure and their
			computer.The figure keeps typing as the walls fill in with shades of teal, and the floor fills
			in with a rich brown.
		</p>
		<p>
			More typing, and a door draws itself onto the lefthand wall, first in outline, before filling
			in a bright orange color with a deep blue handle.
		</p>
		<p>
			Next a blank white picture with a yellow frame draws itself onto the wall opposite the
			door.Two jellybean-like shapes — one midnight blue and one emerald green — slide in from the
			sides of the frame, meeting to form a piece of abstract art.
		</p>
		<p>
			The typing continues. An orange, pentagon-shaped pot appears in the far corner of the room
			near the door. Petals unfurl from the sides almost like the closing of pages of a book. Each
			is a slightly darker shade of orange, and the smallest central one is a rich red, giving the
			completed pot a three-dimensional appearance. Two gracefully-curved lines extend out from the
			top like branches of a plant.
		</p>
		<p>
			The figure stops typing. They stand up, and taps the power button on the monitor. The scene
			fades to white and shrinks down to a single line before collapsing in on itself, like an old
			television being powered off.
		</p>
	</details>
</section>

<style>
	.gallery-element {
		display: flex;
		flex-direction: column;
		margin-top: 2rem;
		max-width: 85ch;

		div {
			border-radius: 16px;
			border: 2px solid var(--text-primary);
			margin-bottom: 1rem;
			overflow: hidden;
			width: 100%;

			video {
				width: 100%;
			}
		}

		details p {
			font-style: italic;
			font-variation-settings: 'ital' 0;
		}

		h2 {
			order: 2;
			font-size: var(--step-1);
			margin: 1rem 0.25rem 0;
		}
	}
</style>
