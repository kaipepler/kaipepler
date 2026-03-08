<script>
	let { data } = $props();
	import { page } from '$app/state';
	const current = page.route.id.split('/')[2];
	const currentProject = $derived(data.projects[current]);
</script>

<svelte:head>
	<title>Randleman Program - Portfolio - Kai Pepler</title>
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
	<p>
		As part of my work at the Rochester Institute of Technology (RIT), I supported the development
		of the Randleman Program with a logo, brand assets, social media materials, and UI design for
		their webpage.
	</p>
	<div class="mediumsblock">
		<div>
			<h3>Deliverables</h3>
			<p>Logo, Brand Assets, UI</p>
		</div>
	</div>
	<blockquote>
		I designed brand assets, business cards, social media graphics, presentations, as well as the
		program’s webpage on RIT’s site.
	</blockquote>
</section>

<div class="count">
	<section>
		<h2>Origin</h2>

		<p>
			People of color have been heavily undersupported in the field of American Sign Language (ASL)
			interpreting. To help address this, the RIT Department of Access Services (DAS) started the
			Randleman Program. Named after Valerie Randleman, the first black interpreter to work at DAS,
			the Randleman program is a recruiting and mentorship initiative meant to elevate and provide
			opportunities to interpreters regardless of race, color, and/or national origin.
		</p>
	</section>

	<section>
		<h2>Logo</h2>

		<div class="mediaframe right medium">
			<lightbox-image dialog-id="lightbox">
				<img
					src="/portfolio/randleman/randleman-logo.png"
					alt="A flat illustration of two hands making the ASL sign for “Interpreting,” atop wavy backgrounds colored in 12 different skin tones."
					loading="lazy"
					class="subtle"
				/>
			</lightbox-image>
		</div>

		<p>
			To represent the inclusive nature of the program, I created a logo that captures the key
			characteristics of the initiative: Two hands form the ASL sign for “Interpreting,” while
			illustrated waves in 12 distinct skin tones draw the eye into the shapes while emphasizing the
			beautiful diversity present across humanity.
		</p>
		<p>
			The organic lines coupled with the geometric repetition around a central point give a
			mandela-like energy to the design, while still communicating the program’s goals.
		</p>
	</section>

	<section>
		<h2>Brand Assets</h2>

		<div class="mediaframe right medium">
			<lightbox-image dialog-id="lightbox">
				<img
					src="/portfolio/randleman/randleman-team.png"
					alt="Bold letters spelling “Randleman,” broken into two lines and pressed close together to form a dynamic frame. Inside the letters is a blurred-out group of Randleman team members smiling."
					loading="lazy"
					class="subtle"
				/>
			</lightbox-image>

			<lightbox-image dialog-id="lightbox">
				<img
					src="/portfolio/randleman/randleman-valerie.jpg"
					alt="A portrait of Valerie Randleman in a purple sweater. The background is a matching shade of purple, and inludes abstract geometric shapes."
					loading="lazy"
				/>
			</lightbox-image>

			<lightbox-image dialog-id="lightbox">
				<img
					src="/portfolio/randleman/randleman-bg.jpg"
					alt="A gradiated tan background with a faint stippled crop of the Randleman logo hands."
					loading="lazy"
				/>
			</lightbox-image>
		</div>

		<p>
			To further support the growth of the program, I created a number of brand assets that align to
			the <a href="https://www.rit.edu/brandportal/">RIT Brand Guidelines</a>.
		</p>
		<p>
			Using brand concepts like tightly-kerned bold text as clipping masks for imagery, geometric
			shapes and long shadows for photos, and distraction-free background textures, I created all
			the assets needed for the program’s webpage.
		</p>
		<p>
			Beyond just the web assets, I designed presentations, business cards, and other such materials
			for the leaders of the program to further generate awareness.
		</p>
	</section>

	<section>
		<h2>Webpage Design</h2>

		<div class="mediaframe right">
			<lightbox-image dialog-id="lightbox">
				<img
					src="/portfolio/randleman/randleman-site.webp"
					alt="A web browser displaying the Randleman Program webpage."
					loading="lazy"
					class="subtle"
				/>
			</lightbox-image>
		</div>

		<p>
			My last deliverable was creating the UI design for the program’s webpage on the RIT website.
		</p>
		<p>
			RIT has strict design requirements for their departments’ webpages, so I made sure to
			carefully adhere to the institute guidelines before handing the design off to their
			development team to be built.
		</p>
		<p>
			<a
				class="button primary"
				href="https://web.archive.org/web/20241126213631/https://www.rit.edu/ntid/das/randleman"
				>Randleman Program Website</a
			>
		</p>
		<aside aria-labelledby="external">
			<strong aria-hidden="true"><span id="external">Note</span>:</strong>
			<div>
				The Randleman website has since gone behind a university login. I’ve included a link to the
				most recent Web Archive snapshot, which is a close approximation to the version I delivered.
			</div>
		</aside>
	</section>
</div>

<hr />

<section>
	<h2>My Work with RIT</h2>
	<p>
		The Randleman Program was one of a number of projects I supported while working with RIT. For a
		complete record of my work there, <a href="/rit">view my RIT timeline</a>.
	</p>
</section>
