<script>
	import Xerox from '$lib/assets/xerox.svelte';
	import Naz from '$lib/assets/naz.svelte';
	import RIT from '$lib/assets/rit.svelte';
	import Map from '$lib/assets/map.svelte';

	const adjs = ['sunny', 'cloudy', 'rainy', 'stormy', 'windy', 'snowy', 'icy'];
	const randomIndex = Math.floor(Math.random() * adjs.length);
	let adj = adjs[randomIndex];
</script>

<svelte:head>
	<title>Kai Pepler</title>
	<meta name="description" content="Kai Pepler. UX designer, professor, and visual artist." />
</svelte:head>

<section>
	<h1>Hello Everyone!</h1>
	<p>
		I’m Kai Pepler, a UX designer, professor, and visual artist. I have over 10 years of experience
		designing UI, and over the course of my career I’ve worked in information design, web
		development, photography, videography, motion graphics, data visualization, color science, and
		design strategy.
	</p>
	<p>
		I specialize in accessible design, shaping products at the crossroads of all these fields, and
		taking inspiration from them as I work to make all users’ interactions the best they can be.
	</p>
	<p><a class="button primary" href="mailto:hello@kaipepler.com">Contact me</a></p>
	<p>
		<small>
			Thank you for visiting my site! If you’d like to learn about my work you can <a
				href="/portfolio">visit my portfolio</a
			>, or scroll down to read about the principles that guide my creative process.
		</small>
	</p>
</section>
<section>
	<h2>beauty.</h2>
	<p>
		Design is beautiful. Even something as simple as a login page is a pattern that can be honed to
		perfection, and that perfection can bring delight to users, whether it registers on a conscious
		level or not.
	</p>
	<p>
		No matter how small the detail, I love having the opportunity to make the world a little more
		beautiful, and make users’ daily interactions more efficient and joyful.
	</p>
</section>
<section>
	<h2>precision.</h2>
	<p>
		Design can only be at its most beautiful when every tiny detail is considered and crafted with
		intention.
	</p>
	<p>
		Precision might take the form of typographic polish, such as ensuring typesetter’s apostrophies
		(’) are used instead of straight apostrophies (') in copy, and en dashes (–) are used instead of
		hyphens (-) in ranges.
	</p>
	<p>
		It might take the form of optically balancing icons to be perfectly in tune with text labels. Or
		surfacing just the right call to action to predict a user’s needs.
	</p>
	<p>
		No matter the manifestation, it is always attention to detail that separates the great designs
		from the good.
	</p>
</section>
<section>
	<h2>accessibility.</h2>
	<p>
		Accessibility has forever been a core part of my designs. I’ve spent countless hours
		interpreting WCAG guidelines, and have run workshops to help teams incorporate accessibility
		considerations into their design specs.
	</p>
	<p>
		As for my own designs, I craft every interaction to be considerate of how users of all abilities
		can access and enjoy the features I create.
	</p>
	<p>
		I designed and coded this website from scratch to demonstrate my commitment to universal design.
		You can find more information in my site’s <a href="accessibility/">accessibility statement</a>.
	</p>
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
	section:not(:first-of-type, :last-of-type) {
		margin-block: 10rem;
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
